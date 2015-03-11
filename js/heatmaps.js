(function(global, define) {
 var globalDefine = global.define;
/**
* almond 0.1.2 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
	* Available via the MIT or new BSD license.
	* see: http://github.com/jrburke/almond for details
	*/
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
	var defined = {},
		waiting = {},
		config = {},
		defining = {},
		aps = [].slice,
		main, req;

	/**
	 * Given a relative module name, like ./something, normalize it to
	 * a real name that can be mapped to a path.
	 * @param {String} name the relative name
	 * @param {String} baseName a real name that the name arg is relative
	 * to.
	 * @returns {String} normalized name
	 */
	function normalize(name, baseName) {
		var baseParts = baseName && baseName.split("/"),
			map = config.map,
			starMap = (map && map['*']) || {},
			nameParts, nameSegment, mapValue, foundMap,
			foundI, foundStarMap, starI, i, j, part;

		//Adjust any relative paths.
		if (name && name.charAt(0) === ".") {
			//If have a base name, try to normalize against it,
			//otherwise, assume it is a top-level require that will
			//be relative to baseUrl in the end.
			if (baseName) {
				//Convert baseName to array, and lop off the last part,
				//so that . matches that "directory" and not name of the baseName's
				//module. For instance, baseName of "one/two/three", maps to
				//"one/two/three.js", but we want the directory, "one/two" for
				//this normalization.
				baseParts = baseParts.slice(0, baseParts.length - 1);

				name = baseParts.concat(name.split("/"));

				//start trimDots
				for (i = 0; (part = name[i]); i++) {
					if (part === ".") {
						name.splice(i, 1);
						i -= 1;
					} else if (part === "..") {
						if (i === 1 && (name[2] === '..' || name[0] === '..')) {
							//End of the line. Keep at least one non-dot
							//path segment at the front so it can be mapped
							//correctly to disk. Otherwise, there is likely
							//no path mapping for a path starting with '..'.
							//This can still fail, but catches the most reasonable
							//uses of ..
							return true;
						} else if (i > 0) {
							name.splice(i - 1, 2);
							i -= 2;
						}
					}
				}
				//end trimDots

				name = name.join("/");
			}
		}

		//Apply map config if available.
		if ((baseParts || starMap) && map) {
			nameParts = name.split('/');

			for (i = nameParts.length; i > 0; i -= 1) {
				nameSegment = nameParts.slice(0, i).join("/");

				if (baseParts) {
					//Find the longest baseName segment match in the config.
					//So, do joins on the biggest to smallest lengths of baseParts.
					for (j = baseParts.length; j > 0; j -= 1) {
						mapValue = map[baseParts.slice(0, j).join('/')];

						//baseName segment has  config, find if it has one for
						//this name.
						if (mapValue) {
							mapValue = mapValue[nameSegment];
							if (mapValue) {
								//Match, update name to the new value.
								foundMap = mapValue;
								foundI = i;
								break;
							}
						}
					}
				}

				if (foundMap) {
					break;
				}

				//Check for a star map match, but just hold on to it,
				//if there is a shorter segment match later in a matching
				//config, then favor over this star map.
				if (!foundStarMap && starMap && starMap[nameSegment]) {
					foundStarMap = starMap[nameSegment];
					starI = i;
				}
			}

			if (!foundMap && foundStarMap) {
				foundMap = foundStarMap;
				foundI = starI;
			}

			if (foundMap) {
				nameParts.splice(0, foundI, foundMap);
				name = nameParts.join('/');
			}
		}

		return name;
	}

	function makeRequire(relName, forceSync) {
		return function () {
			//A version of a require function that passes a moduleName
			//value for items that may need to
			//look up paths relative to the moduleName
			return req.apply(undef, aps.call(arguments, 0).concat([relName, forceSync]));
		};
	}

	function makeNormalize(relName) {
		return function (name) {
			return normalize(name, relName);
		};
	}

	function makeLoad(depName) {
		return function (value) {
			defined[depName] = value;
		};
	}

	function callDep(name) {
		if (waiting.hasOwnProperty(name)) {
			var args = waiting[name];
			delete waiting[name];
			defining[name] = true;
			main.apply(undef, args);
		}

		if (!defined.hasOwnProperty(name)) {
			throw new Error('No ' + name);
		}
		return defined[name];
	}

	/**
	 * Makes a name map, normalizing the name, and using a plugin
	 * for normalization if necessary. Grabs a ref to plugin
	 * too, as an optimization.
	 */
	function makeMap(name, relName) {
		var prefix, plugin,
			index = name.indexOf('!');

		if (index !== -1) {
			prefix = normalize(name.slice(0, index), relName);
			name = name.slice(index + 1);
			plugin = callDep(prefix);

			//Normalize according
			if (plugin && plugin.normalize) {
				name = plugin.normalize(name, makeNormalize(relName));
			} else {
				name = normalize(name, relName);
			}
		} else {
			name = normalize(name, relName);
		}

		//Using ridiculous property names for space reasons
		return {
			f: prefix ? prefix + '!' + name : name, //fullName
			n: name,
			p: plugin
		};
	}

	function makeConfig(name) {
		return function () {
			return (config && config.config && config.config[name]) || {};
		};
	}

	main = function (name, deps, callback, relName) {
		var args = [],
			usingExports,
			cjsModule, depName, ret, map, i;

		//Use name if no relName
		relName = relName || name;

		//Call the callback to define the module, if necessary.
		if (typeof callback === 'function') {

			//Pull out the defined dependencies and pass the ordered
			//values to the callback.
			//Default to [require, exports, module] if no deps
			deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
			for (i = 0; i < deps.length; i++) {
				map = makeMap(deps[i], relName);
				depName = map.f;

				//Fast path CommonJS standard dependencies.
				if (depName === "require") {
					args[i] = makeRequire(name);
				} else if (depName === "exports") {
					//CommonJS module spec 1.1
					args[i] = defined[name] = {};
					usingExports = true;
				} else if (depName === "module") {
					//CommonJS module spec 1.1
					cjsModule = args[i] = {
						id: name,
						uri: '',
						exports: defined[name],
						config: makeConfig(name)
					};
				} else if (defined.hasOwnProperty(depName) || waiting.hasOwnProperty(depName)) {
					args[i] = callDep(depName);
				} else if (map.p) {
					map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
					args[i] = defined[depName];
				} else if (!defining[depName]) {
					throw new Error(name + ' missing ' + depName);
				}
			}

			ret = callback.apply(defined[name], args);

			if (name) {
				//If setting exports via "module" is in play,
				//favor that over return value and exports. After that,
				//favor a non-undefined return value over exports use.
				if (cjsModule && cjsModule.exports !== undef &&
					cjsModule.exports !== defined[name]) {
					defined[name] = cjsModule.exports;
				} else if (ret !== undef || !usingExports) {
					//Use the return value from the function.
					defined[name] = ret;
				}
			}
		} else if (name) {
			//May just be an object definition for the module. Only
			//worry about defining if have a module name.
			defined[name] = callback;
		}
	};

	requirejs = require = req = function (deps, callback, relName, forceSync) {
		if (typeof deps === "string") {
			//Just return the module wanted. In this scenario, the
			//deps arg is the module name, and second arg (if passed)
			//is just the relName.
			//Normalize module name, if it contains . or ..
			return callDep(makeMap(deps, callback).f);
		} else if (!deps.splice) {
			//deps is a config object, not an array.
			config = deps;
			if (callback.splice) {
				//callback is an array, which means it is a dependency list.
				//Adjust args if there are dependencies
				deps = callback;
				callback = relName;
				relName = null;
			} else {
				deps = undef;
			}
		}

		//Support require(['a'])
		callback = callback || function () {};

		//Simulate async callback;
		if (forceSync) {
			main(undef, deps, callback, relName);
		} else {
			setTimeout(function () {
				main(undef, deps, callback, relName);
			}, 15);
		}

		return req;
	};

	/**
	 * Just drops the config on the floor, but returns req in case
	 * the config return value is used.
	 */
	req.config = function (cfg) {
		config = cfg;
		return req;
	};

	define = function (name, deps, callback) {

		//This module may not have dependencies
		if (!deps.splice) {
			//deps is not an array, so probably means
			//an object literal or factory function for
			//the value. Adjust args.
			callback = deps;
			deps = [];
		}

		waiting[name] = [name, deps, callback];
	};

	define.amd = {
		jQuery: true
	};
}());
define("../tools/almond", function(){});

define('utils/utils',[],function () {

  var utils = {};

  utils.clamp = function (value, min, max) {
    return Math.max(Math.min(parseFloat(value), max), min);
  };

  utils.xhr = function (onSuccess, onError) {
    var req = new XMLHttpRequest();
    req.addEventListener("load", function (e) {
      var json;
      try {
        json = JSON.parse(e.target.responseText);
      } catch (ex) {
        if (onError) {
          onError(ex);
        }
      }
      if (onSuccess) {
        if (typeof json !== "object" && onError) {
          onError(new Error("JSON response is broken."));
        }
        onSuccess(json);
      }
    }, false);

    if (onError) {
      req.addEventListener("error", onError, false);
    }

    return req;
  };

  utils.xhrGet = function (url, onSuccess, onError) {
    var req = utils.xhr(onSuccess, onError);
    req.open("GET", url, true);
    req.send(null);
    return req;
  };

  utils.xhrPost = function (url, data, onSuccess, onError) {
    var req = utils.xhr(onSuccess, onError);
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    req.send(JSON.stringify(data));
    return req;
  };

  utils.log = function () {
    if (utils.log.level & utils.logLevels.LOGS) {
      console.log.apply(console, Array.prototype.slice.call(arguments, 0));
    }
  };

  utils.logLevels = {
    SILENT: 0,
    ERRORS: 1,
    WARNINGS: 2,
    INFO: 4,
    LOGS: 8,
    ALL: 15
  };

  utils.log.level = utils.logLevels.SILENT;

  utils.log.error = function () {
    if (utils.log.level & utils.logLevels.ERRORS) {
      console.error.apply(console, Array.prototype.slice.call(arguments, 0));
    }
  };

  utils.log.warn = function () {
    if (utils.log.level & utils.logLevels.WARNINGS) {
      console.warn.apply(console, Array.prototype.slice.call(arguments, 0));
    }
  };

  utils.log.info = function () {
    if (utils.log.level & utils.logLevels.INFO) {
      console.info.apply(console, Array.prototype.slice.call(arguments, 0));
    }
  };

  utils.assert = function (test, msg) {
    if (!test) {
      var error = new Error(msg);

      error.name = 'Assert failure';
      error.message = error.message || msg;
      error.toString = function toString () {
        return ("Error: " + msg);
      };

      throw error;
    }
  };

  utils.is = {
    bool: function (value) {
      return typeof value === "boolean";
    },

    number: function (value) {
      return typeof value === "number" && !isNaN(value) && isFinite(value);
    },

    integer: function (value) {
      return this.number(value) && value % 1 === 0;
    },

    positiveInteger: function (value) {
      return this.integer(value) && value >= 0;
    },

    str: function (value) {
      return typeof value === "string";
    },

    notEmptyStr: function (value) {
      return this.str(value) && value.length > 0;
    },

    array: function (value) {
      return Object.prototype.toString.call(value) === "[object Array]";
    },

    func: function (value) {
      return typeof value === "function";
    },

    primitive: function (value) {
      return Object(value) !== value;
    },

    object: function (value) {
      return !utils.is.primitive(value); // TODO: make sure the assumption is right
    }
  };

  utils.clone = function (obj) {
    if (utils.is.array(obj)) {
      return obj.slice(0);
    }

    var clone = {};

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        clone[prop] = obj[prop];
      }
    }

    return clone;
  };

  utils.inherits = function(childCtor, parentCtor) {
    /** @constructor */
    function tempCtor() {};
    tempCtor.prototype = parentCtor.prototype;
    childCtor.superClass_ = parentCtor.prototype;
    childCtor.prototype = new tempCtor();
    /** @override */
    childCtor.prototype.constructor = childCtor;

    /**
     * Calls superclass constructor/method.
     *
     * This function is only available if you use goog.inherits to
     * express inheritance relationships between classes.
     *
     * NOTE: This is a replacement for goog.base and for superClass_
     * property defined in childCtor.
     *
     * @param {!Object} me - Should always be "this".
     * @param {string} methodName - The method name to call. Calling
     *     superclass constructor can be done with the special string
     *     'constructor'.
     * @param {...*} var_args - The arguments to pass to superclass
     *     method/constructor.
     * @return {*} The return value of the superclass method/constructor.
     */
    childCtor.base = function(me, methodName, var_args) {
      var args = Array.prototype.slice.call(arguments, 2);
      return parentCtor.prototype[methodName].apply(me, args);
    };
  };

  utils.MAX_UINT32_VALUE = 4294967295; // Math.pow(2, Uint32Array.BYTES_PER_ELEMENT * 8) - 1

  return utils;
});


define('core/Colorizer',[
  "utils/utils"
], function (
  utils
) {

  var Colorizer = function (config) {
    utils.assert(config.colors, "colors is a mandatory option");
    this.opacity = 1;

    config.colorSteps = config.colorSteps || Colorizer.MAX_COLOR_STEPS;
    config.blurSteps  = config.blurSteps || 0;

    this.configure(config);
  };

  Colorizer.MAX_COLOR_STEPS = 255;

  Colorizer.prototype.makeLUT_ = function () {
    var colorSteps = this.colorSteps;
    var blurSteps  = this.blurSteps;
    var palette    = this.palette.mode("lab").out("rgba").domain([0, colorSteps - 1]);
    var bytes = 4;
    var rgbaMap = new ArrayBuffer((colorSteps + 1) * bytes);
    var rgba8 = new Uint8ClampedArray(rgbaMap);
    var opacity = this.opacity;

    this.LUT = new Uint32Array(rgbaMap);

    this.LUT[0] = 0;

    var color, lutIndex, c;

    for (var i = 0; i < colorSteps; i++) {
      color = palette(i);
      lutIndex = (i+1) * 4; // skip 0

      for (c = 0; c < 3; c++) {
        rgba8[lutIndex + c] = Math.floor(color[c]);
      }

      // if color is within blur range, adjust alpha
      if (i === 0) {
        rgba8[lutIndex + 3] = 0.2 * opacity * 255 <<0;
      } else {
        rgba8[lutIndex + 3] = (i < blurSteps ? (i/blurSteps)*0.8 + 0.2 : 1) * opacity * 255 <<0;
      }
    }
  };

  Colorizer.prototype.applyColors = function (data, context) {
    var length8 = data.length * Uint32Array.BYTES_PER_ELEMENT;
    var buffer = new ArrayBuffer(length8);
    var Uint32View = new Uint32Array(buffer);

    for (var i = 0, il = data.length; i < il; i++) {
      if (data[i] !== 0) {
        // looks up color for value and sets it at position
        Uint32View[i] = this.LUT[data[i]];
      }
    }

    var Uint8View = new Uint8ClampedArray(buffer);
    var imgData = context.createImageData(context.canvas.width, context.canvas.height);

    if (imgData.data.set) {
      imgData.data.set(Uint8View);
    } else {
      // IE's imgData.data is not Uint8ClampedArray but CanvasPixelArray and doesn't have set method
      for (var i = 0; i < length8; i++) {
        imgData.data[i] = Uint8View[i];
      }
    }

    context.putImageData(imgData, 0, 0);
  };

  Colorizer.prototype.configure = function (config) {
    if (typeof config.colorSteps === "number") {
      this.colorSteps = utils.clamp(config.colorSteps, 1, Colorizer.MAX_COLOR_STEPS) <<0;
    }

    if (typeof config.blurSteps === "number") {
      this.blurSteps = utils.clamp(config.blurSteps, 0, this.colorSteps) <<0;
    }

    if (typeof config.opacity === "number") {
      this.opacity = utils.clamp(config.opacity, 0, 1);
    }

    if (config.colors) {
      this.palette = utils.is.array(config.colors) ? chroma.scale(config.colors) : config.colors;
    }

    this.makeLUT_();
  };

  Colorizer.prototype.destroy = function () {
    Colorizer.superClass_.destroy.call(this);
  };

  return Colorizer;
});

define('core/Uint32Normalizer',[
  "core/Colorizer",
  "utils/utils"
], function (
  Colorizer,
  utils
) {
  var Uint32Normalizer = function (config) {
    config.colorSteps = config.colorSteps || Colorizer.MAX_COLOR_STEPS;
    this.configure(config);
  };

Uint32Normalizer.prototype.histogram = function(data) {
  var counts = {};
  var minValue = Infinity;
  var maxValue = -Infinity;
  var maxCount = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i] <= 0) continue;

    if (!counts[data[i]]) {
      counts[data[i]] = 1;
    } else {
      counts[data[i]]++;
    }
    minValue = Math.min(minValue, data[i]);
    maxValue = Math.max(maxValue, data[i]);
    maxCount = Math.max(maxCount, counts[data[i]]);
  }

  return { counts:counts, minValue:minValue, maxValue:maxValue, maxCount:maxCount };
},

  Uint32Normalizer.prototype.normalize = function (data, minIn, maxIn) {
    var
      length = data.length,
      dataNormalized = new Uint8ClampedArray(length),
      minOut = 1, // 0 = no data
      maxOut = this.colorSteps,
      clampLow  = this.clampLow,
      clampHigh = this.clampHigh,
      value,
      ratio = (maxOut-minOut) / (maxIn-minIn);

// console.log('IN', minIn, maxIn, 'OUT', minOut, maxOut, 'RATIO', ratio, this.histogram(data));

    for (var i = 0; i < length; i++) {
      value = data[i];

      if (!value) {
        continue;
      }

      clampLow  && (value = Math.max(value, minIn));
      clampHigh && (value = Math.min(value, maxIn));

      if (value < minIn || value > maxIn) {
        continue;
      }

      dataNormalized[i] = Math.round((value-minIn)*ratio) + minOut;
    }

    return dataNormalized;
  };

  Uint32Normalizer.prototype.configure = function (config) {
    if (config.colorSteps !== undefined) {
      this.colorSteps = utils.clamp(config.colorSteps, 1, Colorizer.MAX_COLOR_STEPS) <<0;
    }

    this.clampLow  = config.clampLow;
    this.clampHigh = config.clampHigh;
  };

  return Uint32Normalizer;
});


define('core/ByteBlender',[
  "core/Colorizer",
  "utils/utils"
], function (
  Colorizer,
  utils
) {
  var ByteBlender = function (config) {
    config = config || {};

    this.tileSize  = config.tileSize || 256;
    this.maxRadius = config.maxRadius || 0;
    this.radius    = utils.clamp((config.radius || 0), 0, this.maxRadius);

    config.blendMode  = config.blendMode || "screen";
    config.spriteMode = config.spriteMode || "gradient";
    config.colorSteps = config.colorSteps || Colorizer.MAX_COLOR_STEPS;

    this.configure(config);
  };

  ByteBlender.prototype.modes_ = {
    // TODO: check if LUT for prepopulated 2dimensional array (255 x 255) is faster

  	screen: function (b, a) {
      if (!b) return a;
      if (!a) return b;
      var steps = this.colorSteps_+1;
      return steps - ((steps-a) * (steps-b) / steps) <<0;
  	},

//  	multiply: function (b, a) {
//      if (!b) return a;
//      if (!a) return b;
//      return Math.max(1, a / this.colorSteps_ * b);
//    },

  	lighter: function (b, a) {
      return b > a ? b : a;
    }
//,
//  	darker: function (b, a) {
//      if (!b) return a;
//      if (!a) return b;
//      return b < a ? b : a;
//    }
  };

  ByteBlender.prototype.spriteModes_ = {
    gradient: "gradient",
    flat: "flat"
  };

  ByteBlender.prototype.makeLUT_ = function () {
    var activeSize = this.colorSteps_ + 1;
    var bitDepth   = this.bitDepth_;
    var blend      = this.modes_[this.blendMode_];

    this.LUT_ = new Uint8ClampedArray(activeSize <<bitDepth);  // better than Uint32 for this

    // LUT for bitDepth 8
    //   --------b------->
    //  | 0     ...   255
    //  a 256   ...   511
    //  | ...   ...   ...
    //  | 65280 ... 65535
    //  v

    for (var a = 0, b; a < activeSize; a++) {
      var aShifted = a <<bitDepth;
      for (b = 0; b < activeSize; b++) {
        this.LUT_[aShifted | b] = blend.call(this, b, a);
      }
    }
  };

  ByteBlender.prototype.configure = function (config) {
    utils.assert(!!config, "Expected config to be object");

    var dirty = false;

    if (config.blendMode !== undefined) {
      utils.assert(this.modes_.hasOwnProperty(config.blendMode), "Unsupported byte blender mode");
      this.blendMode_ = config.blendMode;
      dirty = true;
    }

    if (config.colorSteps !== undefined) {
      this.colorSteps_ = utils.clamp(config.colorSteps, 1, Colorizer.MAX_COLOR_STEPS) <<0;
      this.bitDepth_ = this.colorSteps_ ? Math.floor(Math.log(this.colorSteps_) / Math.LN2) + 1 : 0;
      dirty = true;
    }

    if (config.spriteMode !== undefined && this.spriteModes_[config.spriteMode]) {
      this.spriteMode_ = config.spriteMode;
      dirty = true;
    }

    if (config.radius !== undefined) {
      this.radius = utils.clamp(config.radius, 0, this.maxRadius) <<0;
      dirty = true;
    }

    if (dirty || !this.LUT_) {
      this.makeLUT_();
    }

    if (dirty) {
      this.initSprites();
    }
  };

  ByteBlender.prototype.blend = function (b, a) {
    return this.LUT_[(a << this.bitDepth_) | b];
  };

  /* ***** Sprite functions ***** */
  ByteBlender.prototype.initSprites = function () {
    var
      byte = 255,
      colorSteps = this.colorSteps_,
      radius = Math.max(0.5, this.radius),
      mode = this.spriteMode_,
      lowest = 1 / byte,
      highest = lowest * colorSteps,
      valueGradient = ['rgba(0,0,0,'+ lowest +')', 'rgba(0,0,0,'+ highest +')'],
      spriteSize = Math.ceil(radius * 2),
      center = spriteSize/2,
      colorRange;

    this.sprites_ = document.createElement("CANVAS");
    this.sprites_.width = spriteSize * colorSteps;
    this.sprites_.height = spriteSize;

    var context = this.sprites_.getContext("2d");

    var colorScale = chroma.scale(valueGradient).mode('lab').domain([0, colorSteps-1]).correctLightness(false);
    var y = 0;

    // skip first, empty sprite
    for (var i = 0; i < colorSteps; i++) {
      // sprites are horizontal by default
      var x = i*spriteSize;
      var cx = center+x;

      switch (mode) {
        case "gradient":
          colorRange = [colorScale(i).css(), colorScale(i).alpha(0).css()];
//          colorRange = this.interpolateAlpha(colorRange[0], colorRange[1], Math.ceil(center));
          this.drawGradientFill(context, x, y, cx, center, spriteSize, colorRange, i/colorSteps);
        break;

        case "flat":
          this.drawFlatFill(context, cx, center, center, colorScale(i).css());
        break;
      }
    }

    this.spriteBufferArray32Bit = this.makeViewsFromBufferArray_(this.makeBufferArraysFromSprites_(context, colorSteps), 1);
  };

  ByteBlender.prototype.drawGradientFill = function (context, x, y, cx, cy, size, colors) {
    var steps = colors.length-1;
    var gradient = context.createRadialGradient(cx, cy, 0, cx, cy, size/2);

    for (var i = 0, l = colors.length; i < l; i++) {
      gradient.addColorStop(i/steps, colors[i]);
    }

    context.fillStyle = gradient;
    context.fillRect(x, y, size, size);
  };

  ByteBlender.prototype.drawFlatFill = function (context, cx, cy, r, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(cx, cy, r, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
  };

  ByteBlender.prototype.interpolateAlpha = function (colorStart, colorEnd, stops) {
    // given start and end colors with alpha
    // currently only 2 input stops supported

    if (stops < 5) {
      stops = 5; // force subpixel alpha gradient for small sprites
    }

    var step = 1 / (stops - 1);
    var colors = [];

    for (var i = 0; i < stops; i++) {
      var c = chroma.interpolate(colorStart, colorEnd, step * i, "lab");
      var alpha = c.alpha();
      c.alpha(alpha);
      colors.push(c.css());
    }

    return colors;
  };

  ByteBlender.prototype.makeBufferArraysFromSprites_ = function (ctx, colorSteps) {
    var h = ctx.canvas.height; // for square sprites h = w
    var w = ctx.canvas.width / colorSteps; // for square sprites h = w
    var aOfBuffers = new Array(colorSteps);

    for (var i = 0; i < colorSteps; i++) {
      // assumes horizontal sprites
      var imgData = ctx.getImageData(i*w, 0, w, h);
      var buf = new ArrayBuffer(imgData.data.length);
      var buf8 = new Uint8ClampedArray(buf);
      var buf32 = new Uint32Array(buf);
      var l = imgData.data.length / 4;

      buf8.set(imgData.data);

      for (var j = 0; j < l; j++) {
        buf32[j] >>>= 24;
      }

      aOfBuffers[i] = buf;
      // unsigned shift of alpha to red channel byte // TODO verify
      // currently only alpha matters in setup of sprite
    }

    return aOfBuffers;
  };

  ByteBlender.prototype.makeViewsFromBufferArray_ = function (spriteBufferArray, offset) {
    offset = +offset || 0;

    var i, j, l = spriteBufferArray.length + offset;
    var dataViews = new Array(l);

    for (var i = offset; i < l; i++) {
      dataViews[i] = new Uint32Array(spriteBufferArray[i - offset]);
    }

    // add empty offset members
    for (i = 0; i < offset; i++) {
      dataViews[i] = new Uint32Array(dataViews[offset].length);
    }

    return dataViews;
  };

  ByteBlender.prototype.applySprites = function (data32normalized) {
    var
      radius = this.radius,
      maxRadius = this.maxRadius,
      data32PreLUT = new Uint32Array(data32normalized.length);

    if (radius < 1) {
      data32PreLUT.set(data32normalized);
      return data32PreLUT;
    }

    var
      spriteSize = Math.ceil(radius * 2),
      offset = spriteSize/2 <<0, // floor!! for pixel perfect positioning of sprites
      s = this.tileSize + 2 * maxRadius;

    var
      tmp = maxRadius-radius,
      x, y,
      l = s-tmp,
      norm,
      currentSprite,
      i, j, spriteSizeOffset = spriteSize-offset,
      rowIndex,
      spriteRowIndex;

    for (y = tmp; y < l; y++) {
      for (x = tmp; x < l; x++) {
        norm = data32normalized[y*s + x];
        if (norm === undefined) {
          throw new Error('Data index mismatch. Tile buffer might not be defined properly.');
          continue;
        }

        if (norm === 0) {
          continue;
        }

        currentSprite = this.spriteBufferArray32Bit[norm];

        for (i = -offset; i < spriteSizeOffset; i++) {
          if (y+i < tmp || y+i >= s-tmp) {
            continue;
          }

          rowIndex = (y+i) * s;
          spriteRowIndex = (i+offset) * spriteSize;

          for (j = -offset; j < spriteSizeOffset; j++) {
            if (x+j < tmp || x+j >= s-tmp) {
              continue;
            }

            data32PreLUT[rowIndex + x + j] = this.blend(
              currentSprite[spriteRowIndex + j + offset],
              data32PreLUT[rowIndex + x + j]
            );
          }
        }
      }
    }

    return data32PreLUT;
  };

  return ByteBlender;
});

define('core/Events',[], function () {

  function Events () {
    this._listeners = {};
  };

  Events.prototype.on = function (type, callback, context) {
    if (!this._listeners[type]) {
      this._listeners[type] = [];
    }
    this._listeners[type].push({ callback: callback, context: context });
    return this;
  };

  Events.prototype.off = function (type, callback, context) {
    if (this._listeners[type]) {
      this._listeners[type] = this._listeners[type].filter(function (listener) {
        return (listener.callback !== callback || listener.context !== context);
      });
    }
    return this;
  };

  Events.prototype.emit = function (type, data) {
    (this._listeners[type] || []).forEach(function (listener) {
      listener.callback.call(listener.context, data, type);
    });
    return this;
  };

  Events.prototype.destroy = function () {
    this._listeners = {};
  };

  return Events;
});


define('providers/DataLensProvider',[
  "core/Events",
  "utils/utils"
], function (
  Events,
  utils
) {

  var environments = {
    development: { host: "web-dev.gi.solo-experiments.com" },
    integration: { host: "web-integration.gi.solo-experiments.com" },
    test:        { host: "web-test.gi.solo-experiments.com" },
    cit:         { host: "cit.datalens.api.here.com", protocol: "https:" },
    production:  { host: "datalens.api.here.com", protocol: "https:" }
  };

  /**
   * A generic data provider that defines the required interface for a custom implementation.
   *
   * @private
   * @name heatmaps.providers.DataLensProvider
   * @class
   * @constructs
   * @param {Object} config - Configuration object.
   */
  function DataLensProvider (config) {
    Events.prototype.constructor.call(this);

    this.baseURL     = this._createBaseURL(config);
    this.buffer      = config.buffer || config.maxRadius || 0; // maxRadius is equivalent to buffer, allowing it here von convenience
    this.tileSize    = config.tileSize || 256;
    this.valueColumn = config.valueColumn || "pixel_value";

    if (config.minValue !== undefined && config.maxValue !== undefined && config.minValue <= config.maxValue){
      this.minValue = config.minValue;
      this.maxValue = config.maxValue;
    }

    this.loadingStats = {};
    this.loadingData = {};
    this.stats = {}; // stats per zoom
    this.processingQueue = {};

//    if (config.maxFrames !== undefined) {
//      this.maxFrames = config.maxFrames || 1;
//    }
    this.frameList = [];

    this.on("statsloaded", function(stats) {
      if (typeof this._onStatsLoaded === 'function') {
        this._onStatsLoaded(stats);
      }
    }, this);
  }

  utils.inherits(DataLensProvider, Events);

  /**
   * Method to get a list of frame names
   *
   * @name heatmaps.providers.DataLensProvider#getFrameList
   * @private
   * @return {array} The list of frame names, i.e. ["2013", "2014-01", "2014-03" ...]
   */
  DataLensProvider.prototype.getFrameList = function () {
    return this.frameList;
  };

  DataLensProvider.prototype._createBaseURL = function (config) {
    var environment = (config.environment !== undefined && environments[config.environment]) || environments["integration"];
    return (environment.protocol || (location && location.protocol) || "http:") +"//"+
      "{cdn}"+ environment.host +
      "/v1/queries/"+   (config.queryId || "") +"/"+
      "{path}?{query}"+
      "&access_token="+ (config.token || "") +
      "&app_id="+       (config.appId || config.app_id || "") +
      "&app_code="+     (config.appCode || config.app_code || "");
  };

  DataLensProvider.prototype._getStatsURL = function () {
    return this.baseURL
      .replace("{cdn}", "")
      .replace("{path}", "stats")
      .replace("{query}", "");
  };

  DataLensProvider.prototype._getURL = function (x, y, z) {
    return this.baseURL
      .replace("{cdn}", ["aa", "bb", "cc", "dd"][(x+y) % 4] +".")
      .replace("{path}", "data")
      .replace("{query}", "tx="+ x +"&ty="+ y +"&zoom="+ z +"&buffer="+ this.buffer);
  };

  /**
   * Method load a tile at a specific Map Tile position (schema z/x/y)
   *
   * @name heatmaps.providers.DataLensProvider#load
   * @private
   * @param {int} tx - Tile position
   * @param {int} ty - Tile position
   * @param {int} zoom - Zoom level
   * @param {function} - onSuccess Handler to be called on success. Will receive json as argument
   * {
   *   frames: frames, // object of named frames, each is a Uint8Clamped array buffer
   *   minValue: min, // minimum value for the whole data set, data is normalized to 1..255 already
   *   maxValue: max // maximum value for the whole data set, data is normalized to 1..255 already
   * }
   * @param {function} - onError Handler to be called on error. No specific argument.
   * @return {truthy} Return a truthy value/object in order to indicate a loading process to the caller.
   */
  DataLensProvider.prototype.load = function (tx, ty, zoom, onSuccess, onError) {
    if (!this.stats[zoom]) {
      this._loadStats(zoom);
    }

    var url = this._getURL(tx, ty, zoom);

    var scope = this;
    return (this.loadingData[url] = utils.xhrGet(url, function(json) {
      delete scope.loadingData[url];
      if (scope.stats[zoom]) {
        onSuccess(scope._processData(json, tx, ty, zoom));
      } else {
        if (!scope.processingQueue[zoom]) {
          scope.processingQueue[zoom] = [];
        }
        scope.processingQueue[zoom].push({ onSuccess: onSuccess, json: json, tx: tx, ty: ty, zoom: zoom });
      }
    }, onError));
  };

  DataLensProvider.prototype._loadStats = function (zoom) {
    if (this.loadingStats[zoom]) {
      return;
    }

    var query = {
      stats: [{
        column_stats: {},
        dynamic: {
          tx: "$drop",
          ty: "$drop",
          buffer: 0,
          zoom: zoom
        }
      }]
    };

    // set dynamic value column name
    query.stats[0].column_stats[this.valueColumn] = ["$max", "$min", "$count_distinct"];

    var scope = this;
    this.loadingStats[zoom] = utils.xhrPost(this._getStatsURL(), query, function(json) {
      delete scope.loadingStats[zoom];
      if (!json.stats) {
        // failed to get stats
        return;
      }
      var stats = json.stats[0].column_stats[scope.valueColumn];
      if (stats.$min === null || stats.$max === null) {
        // something went wrong
        return;
      }

      scope.stats[zoom] = { minValue: stats.$min, maxValue: stats.$max };
      scope.emit("statsloaded", { zoom: zoom, minValue: stats.$min, maxValue: stats.$max });

      if (scope.processingQueue[zoom]) {
        var q;
        for (var i = 0, il = scope.processingQueue[zoom].length; i < il; i++) {
          q = scope.processingQueue[zoom][i];
          q.onSuccess(scope._processData(q.json, q.tx, q.ty, q.zoom));
        }

        scope.processingQueue[zoom] = [];
      }
    });
  };

  DataLensProvider.prototype._processData = function (data, tx, ty, zoom) {
    var
      colIndex = { value: 0, px: 1, py: 2, frame: 3 },
      inMin = this.stats[zoom].minValue,
      inMax = this.stats[zoom].maxValue;

    if (data.columns) {
      data.columns.forEach(function (column, i) {
        colIndex[column] = i;
      });
    }

    var
      tileSize = this.tileSize,
      buffer = this.buffer,
      bufferedTileSize = tileSize + 2*buffer,
      outMin = 1,
      outMax = 255;

    if (data.rows) {
      var
        frameList = this.frameList,
        span = (outMax-outMin) / (inMax-inMin),
        frames = {};

      data.rows.forEach(function (item) {
        var
          value = item[ colIndex.value ],
          px = item[ colIndex.px ] - tileSize*tx,
          py = item[ colIndex.py ] - tileSize*ty,
          frameName = item[ colIndex.frame ],
          gridIndex = px+buffer + (py+buffer)*bufferedTileSize;

        if (px < -buffer || px > tileSize+buffer || py < -buffer || py > tileSize+buffer) {
          return;
        }

        if (frameName === undefined) {
          frameName = 0;
        } else {
          frameName = ""+ frameName;
        }

        if (frameList.indexOf(frameName) === -1) {
          frameList.push(frameName);
          frameList.sort();
        }

        if (!frames[frameName]) {
          frames[frameName] = new Uint8ClampedArray(Math.pow(bufferedTileSize, 2));
        }

        frames[frameName][gridIndex] = Math.round(span * (value-inMin) + outMin);
      });

      return {
        frames: frames,
        minValue: this.minValue !== undefined ? (span * (this.minValue-inMin) + outMin) : outMin,
        maxValue: this.maxValue !== undefined ? (span * (this.maxValue-inMin) + outMin) : outMax
      };
    }
  };

  /**
   * Sets a new configuration object
   *
   * @name heatmaps.providers.DataLensProvider#configure
   * @private
   */
  DataLensProvider.prototype.configure = function (config) {
    if (config.minValue !== undefined && config.maxValue !== undefined && config.minValue <= config.maxValue){
      this.minValue = config.minValue;
      this.maxValue = config.maxValue;
    }

    if (config.valueColumn !== undefined) {
      // should also reset all stats related structures,
      // but next action usually is a reset() call anyway
      this.valueColumn = config.valueColumn;
    }
  };

  /**
   * Destructor
   *
   * @name heatmaps.providers.DataLensProvider#destroy
   * @private
   */
  DataLensProvider.prototype.destroy = function () {
    this.reset();
  };

  /**
   * Method to reset all internal data/states
   *
   * @name heatmaps.providers.DataLensProvider#destroy
   * @private
   */
  DataLensProvider.prototype.reset = function () {
    this.stats = {};

    for (var zoom in this.loadingStats) {
      this.loadingStats[zoom].abort();
    }
    this.loadingStats = {};

    for (var url in this.loadingData) {
      this.loadingData[url].abort();
    }
    this.loadingData = {};

    this.processingQueue = {};
    this.frameList = [];
  };

  /**
   * Method to retrieve stats (minValue, maxValue) for a given zoom level.
   *
   * @name heatmaps.providers.DataLensProvider#getStats
   * @private
   * @param {int} zoom - Zoom level.
   * @return {Object} Stats for zoom level or undefined
   */
  DataLensProvider.prototype.getStats = function (zoom, callback) {
    if (this.stats[zoom]) {
      this._onStatsLoaded = null;
      var stats = utils.clone(this.stats[zoom]);
      stats.zoom = zoom;
      callback(stats);
      return;
    }

    this._onStatsLoaded = function(stats) {
      if (stats.zoom === zoom) {
        callback(stats);
      }
    };

    this._loadStats(zoom);
  };

  return DataLensProvider;
});

define('DataTile',[], function () {

  var DataTile = function (config) {
    this.frames     = config.frames;
    this.normalizer = config.normalizer;
    this.minValue   = config.minValue;
    this.maxValue   = config.maxValue;
    this.renderer   = config.renderer;

    this.canvas = document.createElement("CANVAS");
    this.canvas.width = this.canvas.height = config.tileSize || 256;
    this.context = this.canvas.getContext("2d");
  };

  DataTile.prototype.render = function (frameIndex, callback) {
    frameIndex = frameIndex || "0";

    var
      canvas = this.canvas,
      context = this.context;

//  console.log(this._getValues(frameIndex));

    if (!this.frames[frameIndex]) {
      this.renderer.clear(context);
      callback(canvas);
      return;
    }

    this.renderer.render(context, this.normalizer.normalize(this.frames[frameIndex], this.minValue, this.maxValue));

    setTimeout(function() {
      callback(canvas);
    }, 2);
  };

  DataTile.prototype.debug = function (x, y, z) {
    var
      canvas = this.canvas,
      context = this.context;

    if ((x+y)%2 === 0) {
      context.fillStyle = 'rgba(128, 128, 0, 0.4)';
    } else {
      context.fillStyle = 'rgba(0, 128, 0, 0.4)';
    }

    context.fillRect(0, 0, canvas.width, canvas.height);

    context.font = "25px Arial";

    context.fillStyle = '#000';
    context.fillText(z +"/"+ x +"/"+ y, 11, 51);

    context.fillStyle = '#fff';
    context.fillText(z +"/"+ x +"/"+ y, 10, 50);
  };

  DataTile.prototype._getValues = function (frameIndex) {
    if (!this.frames[frameIndex]) {
      return;
    }
    var
      value,
      counts = {};
    for (var i = 0; i < this.frames[frameIndex].length; i++) {
      value = this.frames[frameIndex][i];
      if (value) {
        counts[value] = counts[value] ? ++counts[value] : 1;
      }
    }
    return counts;
  };

  DataTile.prototype.destroy = function () {
    this.frames     = null;
    this.normalizer = null;
    this.renderer   = null;
    this.canvas     = null;
    this.context    = null;
  };

  return DataTile;
});

define('Renderer',[], function () {

  var Renderer = function (config) {
    this.tileSize  = config.tileSize || 256;
    this.buffer    = config.buffer;
    this.blender   = config.blender;
    this.colorizer = config.colorizer;
  };

  Renderer.prototype.clear = function (context) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  };

  Renderer.prototype.render = function (context, data32normalized) {
    var
      tileSize = this.tileSize,
      buffer = this.buffer;

    this.clear(context);
    var staging = this.blender.applySprites(data32normalized);
    var data32PreLut = new Uint32Array(tileSize*tileSize);

    for (var y = buffer, rows = tileSize + buffer; y < rows; y++) {
      data32PreLut.set(staging.subarray(y * (tileSize + 2*buffer) + buffer, y * (tileSize + 2*buffer) + tileSize + buffer), (y-buffer) * tileSize);
    }

    this.colorizer.applyColors(data32PreLut, context);
  };

  Renderer.prototype.configure = function (config) {};

  Renderer.prototype.destroy = function () {
    this.colorizer.destroy();
    this.blender.destroy();
  };

  return Renderer;
});


define('HeatmapTileProvider',[
  "core/Uint32Normalizer",
  "core/ByteBlender",
  "core/Colorizer",
  "providers/DataLensProvider",
  "DataTile",
  "Renderer"
], function (
  Uint32Normalizer,
  ByteBlender,
  Colorizer,
  DataLensProvider,
  DataTile,
  Renderer
) {

  /**
   * Emitted, when play() is called
   *
   * @name heatmaps.HeatmapTileProvider#play
   * @publish
   * @event
   */

  /**
   * Emitted, when pause() is called
   *
   * @name heatmaps.HeatmapTileProvider#pause
   * @publish
   * @event
   */

  /**
   * Emitted, when a new animation frame is shown
   *
   * @name heatmaps.HeatmapTileProvider#framechange
   * @publish
   * @event
   */

  // TODO: add documentation for heatmaps.HeatmapTileProvider.Config
  /**
   * Heatmap Tile Provider
   *
   * @name heatmaps.HeatmapTileProvider
   * @publish
   * @class
   * @constructs
   * @extends {mapsjs.map.provider.RemoteTileProvider}
   * @param {heatmaps.HeatmapTileProvider.Config} config - Configuration of the HeatmapTileProvider
   */
  var HeatmapTileProvider = function (config) {

    

    H.map.provider.RemoteTileProvider.call(this, config);

    this.tiles = {};

    this.debug         = config.debug === "idkfa";
    this.tileSize      = config.tileSize || 256;
    this.frameList     = [];
    this.currentFrame  = 0;
    this.frameDuration = 33; // ~30fps

    var buffer = config.maxRadius || 0;

    if (config.dataProvider) {
      this.dataProvider = config.dataProvider;
    } else {
      this.dataProvider = new DataLensProvider({
        environment: config.environment,
        queryId:     config.queryId,
        token:       config.token,
        appId:       config.appId   || config.app_id,
        appCode:     config.appCode || config.app_code,
        buffer:      buffer,
        minValue:    config.minValue,
        maxValue:    config.maxValue,
        valueColumn: config.valueColumn,
        tileSize:    config.tileSize
      });
    }

    this.normalizer = new Uint32Normalizer(config);
    this.blender    = new ByteBlender(config);
    this.colorizer  = new Colorizer(config);
    this.renderer   = new Renderer({
      tileSize:  config.tileSize,
      buffer:    buffer,
      blender:   this.blender,
      colorizer: this.colorizer
    });

    this.configure(config, true);

    if (!!config.autoPlay) {
      this.play();
    }
  };

  H.lang.inherits(HeatmapTileProvider, H.map.provider.RemoteTileProvider);

  // remove invisible tiles from map's cache
  HeatmapTileProvider.prototype._dropOtherMapTiles = function () {
    var mapTileCache = this.getCache();
    var uid = this.uid;
    mapTileCache.forEach(function(key, item) {
      var k = key.split('_');
      if (k[0] === uid && item.z !== this.lastZoom) {
        mapTileCache.drop(key);
      }
    });
  },

  HeatmapTileProvider.prototype._onNewZoom = function (zoom) {
    this.lastZoom = zoom;
    this._destroyDataTiles();
  };

  // TODO: check under what circumstances it is called with cacheOnly = true
  // [RK]: apparently it is never called with cacheOnly param = true on layers
  // except on base layer, so for now we don't need to optimize here anything
  // especially that we are already caching stuff
  // TODO: remove HeatmapTileProvider.prototype.Gd,Dd as it's a hacky shortcut to JSLA's interface version. Will be public with JSLA version 0.6.1
  HeatmapTileProvider.prototype.requestInternal =
  HeatmapTileProvider.prototype.Dd =
  HeatmapTileProvider.prototype.Gd = function (x, y, zoom, onSuccess, onError) {
    var cancelable = {
      cancel: function() {}
    };

    // quick way to skip all requests
    if (this.disabled) {
      onError(); // TODO: check
      return cancelable;
    }

    zoom = zoom <<0;

    if (this.lastZoom !== zoom) {
      this._onNewZoom(zoom);
    }

    var key = zoom +"_"+ x +"_"+ y;

    if (this.tiles[key]) {
      var tile = this.tiles[key];
//    console.log(this.frameList[this.currentFrame], key);
      tile.render(this.frameList[this.currentFrame], onSuccess);
      this.debug && tile.debug(x, y, zoom);
      return cancelable;
    }

    var scope = this;
    this.dataProvider.load(x, y, zoom, function (data) {
      if (!data) {
        onError();
        return;
      }
      var tile = scope._createTile(key, data);
      scope.frameList = scope.dataProvider.getFrameList();
//    console.log(scope.currentFrame, scope.frameList[scope.currentFrame], key);
      tile.render(scope.frameList[scope.currentFrame], onSuccess);
      scope.debug && tile.debug(x, y, zoom);
    }, onError);

    return {
      cancel: function() {
//      req.abort();
      }
    };
  };

  /**
   * Method for changing configuration on run time
   *
   * @name heatmaps.HeatmapTileProvider#configure
   * @publish
   * @param {heatmaps.HeatmapTileProvider.config} config - Configuration of the HeatmapTileProvider
   * @param {boolean} stopPropagation - Flag to suppress cascading updates, default: false
   */
  HeatmapTileProvider.prototype.configure = function (config, stopPropagation) {
    if (config.frameDuration !== undefined) {
      this.frameDuration = Math.max(16, config.frameDuration);
    }

    this.setVisibility(!config.hidden);

    if (stopPropagation) {
      return;
    }

    this.normalizer.configure(config);
    this.blender.configure(config);
    this.colorizer.configure(config);
    this.dataProvider.configure(config);
    this.renderer.configure(config);

    this._dropOtherMapTiles();
    this._render();
  };

  /**
   * Method for toggling layer visibility. When hidden, stops data fetching and animation.
   *
   * @name heatmaps.HeatmapTileProvider#setVisibility
   * @publish
   * @param {boolean} visible - Flag to indicate visibility
   */
  HeatmapTileProvider.prototype.setVisibility = function (visible) {
    if (this.disabled === !visible) {
      return;
    }

    this.disabled = !visible;
    if (this.disabled) {
      this.pause();

      // remove all my tiles from map cache
      var mapTileCache = this.getCache();
      var uid = this.uid;
      mapTileCache.forEach(function(key, item) {
        var k = key.split('_');
        if (k[0] === uid) {
          mapTileCache.drop(key);
        }
      });
    }
    this.reload();
  };

  /**
   * Method to force full data update and new rendering.
   *
   * @name heatmaps.HeatmapTileProvider#refresh
   * @publish
   */
  HeatmapTileProvider.prototype.refresh = function () {
    this.dataProvider.reset();
    this._destroyDataTiles();
    this.frameList = [];
    this.currentFrame = 0;
    this._render();
  };

  HeatmapTileProvider.prototype._createTile = function (key, data) {
    return this.tiles[key] = new DataTile({
      size:       this.tileSize,
      frames:     data.frames,
      normalizer: this.normalizer,
      minValue:   data.minValue,
      maxValue:   data.maxValue,
      renderer:   this.renderer
    });
  };

  //*******************************************************

  /**
   * Method to detect whether an animation is currently playing.
   *
   * @name heatmaps.HeatmapTileProvider#isPlaying
   * @publish
   * @return {boolean} Flag to indicate state
   */
  HeatmapTileProvider.prototype.isPlaying = function () {
    return this._isPlaying;
  };

  /**
   * Method to start playback.
   *
   * @name heatmaps.HeatmapTileProvider#play
   * @publish
   */
  HeatmapTileProvider.prototype.play = function () {
    this.pause();

    if (this.disabled || this.frameList.length <= 1) {
      return;
    }

    var scope = this;
    this.timer = setInterval(function() {
      requestAnimationFrame(function() {
        if (scope.frameList.length && scope._isPlaying) {
          scope.goToFrame((scope.currentFrame+1) % scope.frameList.length);
        }
      });
    }, scope.frameDuration);

    this._isPlaying = true;
    this.dispatchEvent("play");
  };

  /**
   * Method to pause playback.
   *
   * @name heatmaps.HeatmapTileProvider#pause
   * @publish
   */
  HeatmapTileProvider.prototype.pause = function () {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this._isPlaying = false;
    this.dispatchEvent("pause");
  };

  /**
   * Method to go to a specific frame. Doesn't affect current playback state.
   *
   * @name heatmaps.HeatmapTileProvider#goToFrame
   * @publish
   * @param {number} frame - The frame index to seek to.
   */
  HeatmapTileProvider.prototype.goToFrame = function (frameIndex) {
    if (frameIndex < this.frameList.length) {
      this.currentFrame = frameIndex;
      this._render();
      this.dispatchEvent("framechange");
    }
  };

  // making 'goToFrame' typo safe
  HeatmapTileProvider.prototype.gotoFrame = function (frameIndex) {
    console.warn("use HeatmapTileProvider.goToFrame()");
    return this.goToFrame(frameIndex);
  };

  HeatmapTileProvider.prototype.goToFrameName = function (frameName) {
    var frameIndex = this.frameList.indexOf(frameName);
    if (frameIndex > -1) {
      this.goToFrame (frameIndex);
    }
  };

  /**
   * Method to get current frame index.
   *
   * @name heatmaps.HeatmapTileProvider#getCurrentFrame
   * @publish
   * @return {int} Returns current frame index
   */
  HeatmapTileProvider.prototype.getCurrentFrame = function () {
    return this.currentFrame;
  };

  HeatmapTileProvider.prototype.getCurrentFrameName = function () {
    return this.frameList[this.currentFrame];
  };

  /**
   * Method to get the total number of frames. It's worth not to cache the value as frames load async.
   *
   * @name heatmaps.HeatmapTileProvider#getTotalFrames
   * @publish
   * @return {int} Returns total number of frames
   */
  HeatmapTileProvider.prototype.getTotalFrames = function () {
    return this.frameList.length;
  };

  HeatmapTileProvider.prototype.getFrameList = function () {
    return this.frameList;
  };

  //*******************************************************

  /**
   * Method to retrieve stats (minValue, maxValue) for current zoom level.
   *
   * @name heatmaps.HeatmapTileProvider#getStats
   * @publish
   * @param {int} zoom - zoom level to get stats for
   * @param {function} callback - Function to be called when stats are retrieved. It's parameter is a stats object;
   */
  HeatmapTileProvider.prototype.getStats = function(zoom, callback) {
    return this.dataProvider.getStats(zoom, callback);
  };

  //*******************************************************

  HeatmapTileProvider.prototype._render = function () {
    // reload() asks the map to fetch all tiles. Effectively re-renders.
    this.reload();
  };

  // doing this for saving memory only.
  HeatmapTileProvider.prototype._destroyDataTiles = function () {
    var tiles = this.tiles;
    for (var key in tiles) {
      tiles[key].destroy();
    }
    this.tiles = {};
  };

  HeatmapTileProvider.prototype.destroy = function () {
    this._destroyDataTiles();

    this.colorizer.destroy();
    this.blender.destroy();
    this.normalizer.destroy();
    this.renderer.destroy();
    this.dataProvider.destroy();

    this.colorizer =
    this.blender =
    this.normalizer =
    this.renderer =
    this.dataProvider =
    this.frameList =
    this.currentFrame = null;
  };

  return HeatmapTileProvider;
});


define('providers/GeoJSONProvider',[
  "providers/DataLensProvider",
  "utils/utils"
], function (
  DataLensProvider,
  utils
) {
  function GeoJSONProvider (config) {
    this.url      = config.url;
    this.buffer   = config.buffer || 0;
    this.tileSize = config.tileSize || 256;
    this.minValue = 0;
    this.maxValue = 0;
    this.valueProperty = config.valueProperty || "value";
    this.frameProperty = config.frameProperty || "frame";
  }

  GeoJSONProvider.prototype = Object.create(DataLensProvider.prototype);

  GeoJSONProvider.prototype.load = function (tx, ty, zoom, onSuccess, onError) {
    var scope = this;
    return utils.xhrGet(this.url, function(json) {
      var data = scope._processData(json, tx, ty, zoom);
      if (data) {
        onSuccess(data);
      } else {
        onError();
      }
    }, onError);
  };

  GeoJSONProvider.prototype._processData = function (data, tx, ty, zoom) {
    if (!data.features) {
      return;
    }

    // TODO: projection
    var
      valueProperty = this.valueProperty,
      frameProperty = this.frameProperty,
      tileSize = this.tileSize,
      buffer = this.buffer,
      bufferedTileSize = tileSize + 2*buffer,
      frames = {},
      min = 1,
      max = 255;

    var minValue = Infinity, maxValue = -Infinity;
    data.features.forEach(function (item) {
      minValue = Math.min(minValue, item.properties[valueProperty]);
      maxValue = Math.max(maxValue, item.properties[valueProperty]);
    });

    var span = (max-min) / (maxValue-minValue);
    var frameList = this.frameList;
    var hasAnyValues = false;

    data.features.forEach(function (item) {
      var
        value = item.properties[valueProperty],
        px = item.geometry.coordinates[0] - tileSize*tx,
        py = item.geometry.coordinates[1] - tileSize*ty,
        frameName = item[frameProperty] || 0,
        gridIndex = px+buffer + (py+buffer)*bufferedTileSize;

      if (px < -buffer || px > tileSize+buffer || py < -buffer || py > tileSize+buffer) {
        return;
      }

      hasAnyValues = true;

      if (!frames[frameName]) {
        if (frameList.indexOf(frameName) === -1) {
          frameList.push(frameName);
          frameList.sort(function(a, b) { return a.localeCompare ? a.localeCompare(b) : a-b; });
        }
        frames[frameName] = new Uint8ClampedArray(Math.pow(bufferedTileSize, 2));
      }

      frames[frameName][gridIndex] = (span * (value-minValue) + min);
    });

    if (!hasAnyValues) {
      return;
    }

    return {
      frames: frames,
      minValue: min,
      maxValue: max
    };
  };

  return GeoJSONProvider;
});

/**
 * @exports heatmaps
 */
define('heatmaps',['require','HeatmapTileProvider','providers/DataLensProvider','providers/GeoJSONProvider'],function (require) {

  // Polyfills
  window.Uint8ClampedArray = window.Uint8ClampedArray || window.Uint8Array;

  var
    HeatmapTileProvider = require("HeatmapTileProvider"),
    DataLensProvider    = require("providers/DataLensProvider"),
    GeoJSONProvider     = require("providers/GeoJSONProvider"),
	  version = {
		  version : "1.2.23"
	  };

  return {
    HeatmapTileProvider: HeatmapTileProvider,
    providers: {
      DataLensProvider: DataLensProvider,
      GeoJSONProvider: GeoJSONProvider
    },
    version: version
  };
});

 var library = require('heatmaps');
 if(typeof module !== 'undefined' && module.exports) {
 module.exports = library;
 } else if(globalDefine) {
 (function (define) {
 define('heatmaps', function () { return library; });
 }(globalDefine));
 } else {
 global['heatmaps'] = library;
 }
}(this));
