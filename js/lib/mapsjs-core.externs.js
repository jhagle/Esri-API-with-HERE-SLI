/**
 * @const
 * @suppress {duplicate}
 */
var H = {};
/**
 * @return {H.util.BuildInfo}
 */
H.buildInfo = function(){};
/**
 * @const
 */
H.lang = {};
/**
 * @param {Function} child 
 * @param {Function} parent 
 */
H.lang.inherits = function(child, parent){};
/**
 * @param {Object} target 
 * @param {...Object} var_args 
 */
H.lang.extend = function(target, var_args){};
/**
 * @param {Function} func 
 * @param {Object} ctx 
 * @param {...*} var_args 
 * @return {!Function}
 */
H.lang.bind = function(func, ctx, var_args){};
/**
 * @param {*} val 
 * @param {(string|RegExp)=} opt_delimiter 
 * @return {Array.<string>}
 */
H.lang.tokenize = function(val, opt_delimiter){};
/**
 * @param {?(Object|undefined)} obj 
 * @param {boolean} onlyOwnProperties 
 * @param {function(Object,string,boolean):?} callback 
 */
H.lang.forEachProp = function(obj, onlyOwnProperties, callback){};
/**
 * @constructor
 * @param {Function=} opt_caller 
 * @param {?number=} opt_argNr 
 * @param {*=} opt_message 
 * @extends {Error}
 */
H.lang.InvalidArgumentError = function(opt_caller, opt_argNr, opt_message){};
/**
 * @constructor
 * @param {Function=} opt_caller 
 * @param {*=} opt_message 
 * @extends {Error}
 */
H.lang.IllegalOperationError = function(opt_caller, opt_message){};
/**
 * @constructor
 * @param {Function=} opt_caller 
 * @param {number=} opt_val 
 * @param {Array.<number>=} opt_range 
 * @extends {Error}
 */
H.lang.OutOfRangeError = function(opt_caller, opt_val, opt_range){};
/**
 * @const
 */
H.util = {};
/**
 * @param {!Function} constructor 
 * @return {?}
 */
H.util.getSuperProto = function(constructor){};
/**
 * @param {string} str 
 * @return {Object}
 */
H.util.eval = function(str){};
/**
 * @param {?} value 
 * @param {?} defaultVal 
 * @return {?}
 */
H.util.getValue = function(value, defaultVal){};
/**
 * @param {string} svgMarkup 
 * @return {string}
 */
H.util.svgToDataUrl = function(svgMarkup){};
/**
 * @param {Node} node 
 * @param {Document} targetDocument 
 * @param {boolean} containsCanvas 
 * @return {Node}
 */
H.util.cloneNode = function(node, targetDocument, containsCanvas){};
/**
 * @param {Object} disposableObject 
 */
H.util.dispose = function(disposableObject){};
/**
 * @constructor
 */
H.util.Event = function(){};
/**
 */
H.util.Event.prototype.stopPropagation = function(){};
/**
 * @constructor
 * @param {string} type 
 * @param {*} newValue 
 * @param {*} oldValue 
 * @extends {H.util.Event}
 */
H.util.ChangeEvent = function(type, newValue, oldValue){};
/**
 */
H.util.ChangeEvent.prototype.stopPropagation = function(){};
/**
 * @constructor
 */
H.util.EventTarget = function(){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.util.EventTarget.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.util.EventTarget.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.util.EventTarget.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.util.EventTarget.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.util.EventTarget.prototype.dispatchEvent = function(evt){};
/**
 */
H.util.EventTarget.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.util.EventTarget.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @const
 */
H.util.kinetics = {};
/**
 * @interface
 */
H.util.kinetics.IKinetics = function(){};
/**
 * @constructor
 * @param {number} acceleration 
 * @param {number=} opt_speed 
 */
H.util.kinetics.KineticMove = function(acceleration, opt_speed){};
/**
 * @param {number} speed 
 * @return {H.util.kinetics.KineticMove}
 */
H.util.kinetics.KineticMove.prototype.setInitialSpeed = function(speed){};
/**
 * @return {number}
 */
H.util.kinetics.KineticMove.prototype.getDuration = function(){};
/**
 * @param {number} time 
 * @return {number}
 */
H.util.kinetics.KineticMove.prototype.getCurrentSpeed = function(time){};
/**
 * @param {number} time 
 * @return {number}
 */
H.util.kinetics.KineticMove.prototype.getCurrentPath = function(time){};
/**
 * @constructor
 * @param {string} name 
 * @param {string} version 
 * @param {string} revision 
 */
H.util.BuildInfo = function(name, version, revision){};
/**
 * @param {string} name 
 * @param {string} version 
 * @param {string} revision 
 * @return {H.util.BuildInfo}
 */
H.util.BuildInfo.get = function(name, version, revision){};
/**
 * @interface
 */
H.util.ICapturable = function(){};
/**
 * @param {HTMLCanvasElement} canvas 
 * @param {number} pixelRatio 
 * @param {function(HTMLCanvasElement=)} callback 
 * @param {function(string)=} opt_errback 
 */
H.util.ICapturable.prototype.capture = function(canvas, pixelRatio, callback, opt_errback){};
/**
 * @constructor
 */
H.util.Disposable = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.util.Disposable.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @const
 */
H.util.events = {};
/**
 * @param {goog.events.ListenableType} src 
 * @param {(string|Array.<string>)} type 
 * @param {(Function|Object)} listener 
 * @param {boolean=} opt_capt 
 * @param {Object=} opt_handler 
 * @return {goog.events.Key}
 */
H.util.events.listenOnce = function(src, type, listener, opt_capt, opt_handler){};
/**
 */
H.util.events.dispatchEvent = function(){};
/**
 */
H.util.events.fireListeners = function(){};
/**
 */
H.util.events.listen = function(){};
/**
 */
H.util.events.unlisten = function(){};
/**
 * @interface
 */
H.util.ICancelable = function(){};
/**
 * @constructor
 * @param {H.util.AsyncQueue.Mode} mode 
 * @param {function(H.util.AsyncQueue.Task,*)} processFn 
 */
H.util.AsyncQueue = function(mode, processFn){};
/**
 * @param {*} data 
 * @param {function(H.util.AsyncQueue.Task,*,?)} onDone 
 * @return {H.util.AsyncQueue.Task}
 */
H.util.AsyncQueue.prototype.push = function(data, onDone){};
/**
 * @constructor
 * @implements {H.util.ICancelable}
 */
H.util.AsyncQueue.Task = function(){};
/**
 * @param {*} result 
 * @param {?} error 
 */
H.util.AsyncQueue.Task.prototype.done = function(result, error){};
/**
 */
H.util.AsyncQueue.Task.prototype.cancel = function(){};
/**
 * @param {function()} cancelFn 
 * @return {H.util.AsyncQueue.Task}
 */
H.util.AsyncQueue.Task.prototype.setCancelFn = function(cancelFn){};
/**
 * @interface
 */
H.util.AsyncQueue.Mode = function(){};
/**
 * @constructor
 * @param {number} maxTime 
 * @param {function(H.util.AsyncQueue.Task,*)} processFn 
 * @extends {H.util.AsyncQueue}
 */
H.util.SequentialQueue = function(maxTime, processFn){};
/**
 * @param {*} data 
 * @param {function(H.util.AsyncQueue.Task,*,?)} onDone 
 * @return {H.util.AsyncQueue.Task}
 */
H.util.SequentialQueue.prototype.push = function(data, onDone){};
/**
 * @constructor
 * @param {number} maxSize 
 * @param {function(string,?,number)=} opt_onDrop 
 * @param {(function(string,?,number):boolean)=} opt_filter 
 */
H.util.Cache = function(maxSize, opt_onDrop, opt_filter){};
/**
 * @param {*} id 
 * @param {*} data 
 * @param {number} size 
 * @return {boolean}
 */
H.util.Cache.prototype.add = function(id, data, size){};
/**
 * @param {string} id 
 * @param {boolean=} opt_noUpdate 
 * @return {*}
 */
H.util.Cache.prototype.get = function(id, opt_noUpdate){};
/**
 * @param {*} id 
 */
H.util.Cache.prototype.drop = function(id){};
/**
 * @param {(function(string,?,number):boolean)=} opt_matcher 
 */
H.util.Cache.prototype.removeAll = function(opt_matcher){};
/**
 * @param {number} maxSize 
 * @return {H.util.Cache}
 */
H.util.Cache.prototype.setMaxSize = function(maxSize){};
/**
 * @return {number}
 */
H.util.Cache.prototype.getMaxSize = function(){};
/**
 * @return {number}
 */
H.util.Cache.prototype.getCurrentSize = function(){};
/**
 * @constructor
 * @param {number} maxParallel 
 * @param {function(H.util.AsyncQueue.Task,*)} processFn 
 * @extends {H.util.AsyncQueue}
 */
H.util.ParallelQueue = function(maxParallel, processFn){};
/**
 * @param {*} data 
 * @param {function(H.util.AsyncQueue.Task,*,?)} onDone 
 * @return {H.util.AsyncQueue.Task}
 */
H.util.ParallelQueue.prototype.push = function(data, onDone){};
/**
 * @const
 */
H.util.animation = {};
/**
 * @const
 */
H.util.animation.ease = {};
/**
 * @param {number} val 
 * @return {number}
 */
H.util.animation.ease.LINEAR = function(val){};
/**
 * @param {number} val 
 * @return {number}
 */
H.util.animation.ease.EASE_IN_QUAD = function(val){};
/**
 * @param {number} val 
 * @return {number}
 */
H.util.animation.ease.EASE_OUT_QUAD = function(val){};
/**
 * @param {number} val 
 * @return {number}
 */
H.util.animation.ease.EASE_IN_OUT_QUINT = function(val){};
/**
 * @param {number} val 
 * @return {number}
 */
H.util.animation.ease.EASE_OUT_CIRC = function(val){};
/**
 * @constructor
 * @param {function(number,number,number,number)} transform 
 * @param {number} duration 
 * @param {function()=} opt_onAnimationStop 
 * @param {function(number)=} opt_ease 
 */
H.util.animation.Animation = function(transform, duration, opt_onAnimationStop, opt_ease){};
/**
 */
H.util.animation.Animation.prototype.start = function(){};
/**
 * @param {boolean=} opt_suppressCallback 
 */
H.util.animation.Animation.prototype.stop = function(opt_suppressCallback){};
/**
 * @return {boolean}
 */
H.util.animation.Animation.prototype.isRunning = function(){};
/**
 * @constructor
 * @extends {H.util.EventTarget}
 */
H.util.OList = function(){};
/**
 * @param {?} entry 
 * @param {number=} opt_idx 
 */
H.util.OList.prototype.add = function(entry, opt_idx){};
/**
 * @param {number} idx 
 * @return {?}
 */
H.util.OList.prototype.removeAt = function(idx){};
/**
 * @param {?} entry 
 * @return {boolean}
 */
H.util.OList.prototype.remove = function(entry){};
/**
 * @param {number} idx 
 * @param {?} entry 
 * @return {?}
 */
H.util.OList.prototype.set = function(idx, entry){};
/**
 * @param {?} entry 
 * @return {number}
 */
H.util.OList.prototype.indexOf = function(entry){};
/**
 * @param {number} idx 
 * @return {?}
 */
H.util.OList.prototype.get = function(idx){};
/**
 * @return {number}
 */
H.util.OList.prototype.getLength = function(){};
/**
 * @return {Array.<*>}
 */
H.util.OList.prototype.asArray = function(){};
/**
 */
H.util.OList.prototype.flush = function(){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.util.OList.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.util.OList.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.util.OList.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.util.OList.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.util.OList.prototype.dispatchEvent = function(evt){};
/**
 */
H.util.OList.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.util.OList.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @const
 */
H.math = {};
/**
 * @interface
 */
H.math.IPoint = function(){};
/**
 * @constructor
 * @param {number} x 
 * @param {number} y 
 * @implements {H.math.IPoint}
 */
H.math.Point = function(x, y){};
/**
 * @param {number} x 
 * @param {number} y 
 */
H.math.Point.prototype.set = function(x, y){};
/**
 * @param {H.math.Point=} opt_out 
 * @return {H.math.Point}
 */
H.math.Point.prototype.clone = function(opt_out){};
/**
 * @param {H.math.IPoint} other 
 * @return {H.math.Point}
 */
H.math.Point.prototype.add = function(other){};
/**
 * @param {H.math.IPoint} other 
 * @return {H.math.Point}
 */
H.math.Point.prototype.sub = function(other){};
/**
 * @param {number} factor 
 * @param {number=} opt_factorY 
 * @return {H.math.Point}
 */
H.math.Point.prototype.scale = function(factor, opt_factorY){};
/**
 * @return {H.math.Point}
 */
H.math.Point.prototype.round = function(){};
/**
 * @return {H.math.Point}
 */
H.math.Point.prototype.floor = function(){};
/**
 * @return {H.math.Point}
 */
H.math.Point.prototype.ceil = function(){};
/**
 * @param {H.math.IPoint} other 
 * @return {boolean}
 */
H.math.Point.prototype.equals = function(other){};
/**
 * @param {H.math.IPoint} other 
 * @return {number}
 */
H.math.Point.prototype.distance = function(other){};
/**
 * @constructor
 * @param {number} left 
 * @param {number} top 
 * @param {number} right 
 * @param {number} bottom 
 */
H.math.Rect = function(left, top, right, bottom){};
/**
 * @param {number} left 
 * @param {number} top 
 * @param {number} right 
 * @param {number} bottom 
 */
H.math.Rect.prototype.set = function(left, top, right, bottom){};
/**
 * @return {H.math.Point}
 */
H.math.Rect.prototype.getTopLeft = function(){};
/**
 * @return {H.math.Point}
 */
H.math.Rect.prototype.getBottomRight = function(){};
/**
 * @param {number} x 
 * @param {number} y 
 * @return {boolean}
 */
H.math.Rect.prototype.containsXY = function(x, y){};
/**
 * @param {H.math.IPoint} topLeft 
 * @param {H.math.IPoint} bottomRight 
 * @return {H.math.Rect}
 */
H.math.Rect.fromPoints = function(topLeft, bottomRight){};
/**
 * @return {H.math.Rect}
 */
H.math.Rect.prototype.clone = function(){};
/**
 * @interface
 */
H.math.ISize = function(){};
/**
 * @constructor
 * @param {number} width 
 * @param {number} height 
 * @implements {H.math.ISize}
 */
H.math.Size = function(width, height){};
/**
 * @constructor
 * @param {number} x 
 * @param {number} y 
 */
H.math.Vector = function(x, y){};
/**
 * @param {H.math.Vector} other 
 * @return {H.math.Vector}
 */
H.math.Vector.prototype.add = function(other){};
/**
 * @param {H.math.Vector} other 
 * @return {H.math.Vector}
 */
H.math.Vector.prototype.subtract = function(other){};
/**
 * @param {H.math.Vector} other 
 * @return {number}
 */
H.math.Vector.prototype.dot = function(other){};
/**
 * @param {H.math.Vector} other 
 * @return {H.math.Vector}
 */
H.math.Vector.prototype.multiply = function(other){};
/**
 * @param {number} scale 
 * @return {H.math.Vector}
 */
H.math.Vector.prototype.rescale = function(scale){};
/**
 * @return {number}
 */
H.math.Vector.prototype.magnitude = function(){};
/**
 * @return {H.math.Vector}
 */
H.math.Vector.prototype.normalize = function(){};
/**
 * @const
 */
H.geo = {};
/**
 * @enum {string}
 */
H.geo.AltitudeContext = {
  undefined: '',
  GL: '',
  OL: '',
  SL: '',
  SB: '',
  WE: '',
  WG: ''
};
/**
 * @interface
 */
H.geo.IPoint = function(){};
/**
 * @constructor
 * @param {H.geo.Latitude} lat 
 * @param {H.geo.Longitude} lng 
 * @param {H.geo.Altitude=} opt_alt 
 * @param {H.geo.AltitudeContext=} opt_ctx 
 * @implements {H.geo.IPoint}
 */
H.geo.Point = function(lat, lng, opt_alt, opt_ctx){};
/**
 * @param {H.geo.IPoint} other 
 * @return {boolean}
 */
H.geo.Point.prototype.equals = function(other){};
/**
 * @param {H.geo.IPoint} other 
 * @return {number}
 */
H.geo.Point.prototype.distance = function(other){};
/**
 * @param {number} bearing 
 * @param {number} distance 
 * @param {boolean=} opt_overGreatCircle 
 * @return {H.geo.Point}
 */
H.geo.Point.prototype.walk = function(bearing, distance, opt_overGreatCircle){};
/**
 * @param {H.geo.IPoint} point 
 * @param {Function=} opt_caller 
 * @param {number=} opt_argNr 
 * @return {boolean}
 */
H.geo.Point.validate = function(point, opt_caller, opt_argNr){};
/**
 * @param {H.geo.IPoint} iPoint 
 * @return {H.geo.Point}
 */
H.geo.Point.fromIPoint = function(iPoint){};
/**
 * @constructor
 * @param {H.geo.Latitude} top 
 * @param {H.geo.Longitude} left 
 * @param {H.geo.Latitude} bottom 
 * @param {H.geo.Longitude} right 
 */
H.geo.Rect = function(top, left, bottom, right){};
/**
 * @param {H.geo.Rect} other 
 * @return {boolean}
 */
H.geo.Rect.prototype.equals = function(other){};
/**
 * @return {H.geo.Point}
 */
H.geo.Rect.prototype.getTopLeft = function(){};
/**
 * @return {H.geo.Point}
 */
H.geo.Rect.prototype.getBottomRight = function(){};
/**
 * @return {H.geo.Latitude}
 */
H.geo.Rect.prototype.getTop = function(){};
/**
 * @return {H.geo.Latitude}
 */
H.geo.Rect.prototype.getBottom = function(){};
/**
 * @return {H.geo.Longitude}
 */
H.geo.Rect.prototype.getLeft = function(){};
/**
 * @return {H.geo.Longitude}
 */
H.geo.Rect.prototype.getRight = function(){};
/**
 * @return {H.geo.Point}
 */
H.geo.Rect.prototype.getCenter = function(){};
/**
 * @return {number}
 */
H.geo.Rect.prototype.getWidth = function(){};
/**
 * @return {number}
 */
H.geo.Rect.prototype.getHeight = function(){};
/**
 * @return {boolean}
 */
H.geo.Rect.prototype.isCDB = function(){};
/**
 * @return {boolean}
 */
H.geo.Rect.prototype.isEmpty = function(){};
/**
 * @param {H.geo.Latitude} lat 
 * @param {H.geo.Longitude} lng 
 * @param {boolean=} opt_skipValidation 
 * @return {boolean}
 */
H.geo.Rect.prototype.containsLatLng = function(lat, lng, opt_skipValidation){};
/**
 * @param {H.geo.IPoint} geoPoint 
 * @param {boolean=} opt_skipValidation 
 * @return {boolean}
 */
H.geo.Rect.prototype.containsPoint = function(geoPoint, opt_skipValidation){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {boolean=} opt_skipValidation 
 * @return {boolean}
 */
H.geo.Rect.prototype.containsRect = function(geoRect, opt_skipValidation){};
/**
 * @param {H.geo.Latitude} lat 
 * @param {H.geo.Longitude} lng 
 * @param {boolean=} opt_skipValidation 
 * @param {H.geo.Rect=} opt_out 
 * @return {H.geo.Rect}
 */
H.geo.Rect.prototype.mergeLatLng = function(lat, lng, opt_skipValidation, opt_out){};
/**
 * @param {H.geo.IPoint} geoPoint 
 * @param {boolean=} opt_skipValidation 
 * @param {H.geo.Rect=} opt_out 
 * @return {H.geo.Rect}
 */
H.geo.Rect.prototype.mergePoint = function(geoPoint, opt_skipValidation, opt_out){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {boolean=} opt_skipValidation 
 * @param {H.geo.Rect=} opt_out 
 * @return {H.geo.Rect}
 */
H.geo.Rect.prototype.mergeRect = function(geoRect, opt_skipValidation, opt_out){};
/**
 * @param {H.geo.Latitude} top 
 * @param {H.geo.Longitude} left 
 * @param {H.geo.Latitude} bottom 
 * @param {H.geo.Longitude} right 
 * @param {boolean=} opt_skipValidation 
 * @param {H.geo.Rect=} opt_out 
 * @return {H.geo.Rect}
 */
H.geo.Rect.prototype.mergeTopLeftBottomRight = function(top, left, bottom, right, opt_skipValidation, opt_out){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {boolean=} opt_skipValidation 
 * @return {boolean}
 */
H.geo.Rect.prototype.intersects = function(geoRect, opt_skipValidation){};
/**
 * @param {H.geo.Latitude} topA 
 * @param {H.geo.Longitude} leftA 
 * @param {H.geo.Latitude} bottomA 
 * @param {H.geo.Longitude} rightA 
 * @param {H.geo.Latitude} topB 
 * @param {H.geo.Longitude} leftB 
 * @param {H.geo.Latitude} bottomB 
 * @param {H.geo.Longitude} rightB 
 * @param {H.geo.Rect=} opt_out 
 * @return {H.geo.Rect}
 */
H.geo.Rect.merge = function(topA, leftA, bottomA, rightA, topB, leftB, bottomB, rightB, opt_out){};
/**
 * @param {H.geo.IPoint} topLeft 
 * @param {H.geo.IPoint} bottomRight 
 * @param {boolean=} opt_skipValidation 
 * @return {H.geo.Rect}
 */
H.geo.Rect.fromPoints = function(topLeft, bottomRight, opt_skipValidation){};
/**
 * @param {Array.<H.geo.IPoint>} pointArray 
 * @param {boolean=} opt_skipValidation 
 * @return {?H.geo.Rect}
 */
H.geo.Rect.coverPoints = function(pointArray, opt_skipValidation){};
/**
 * @param {Array.<number>} latLngAltArray 
 * @param {boolean=} opt_skipValidation 
 * @return {(H.geo.Rect|undefined)}
 */
H.geo.Rect.coverLatLngAlts = function(latLngAltArray, opt_skipValidation){};
/**
 * @param {Array.<H.geo.Rect>} rectArray 
 * @param {boolean=} opt_skipValidation 
 * @return {(H.geo.Rect|undefined)}
 */
H.geo.Rect.coverRects = function(rectArray, opt_skipValidation){};
/**
 * @param {H.geo.IPoint} center 
 * @param {H.geo.Rect=} opt_out 
 * @return {H.geo.Rect}
 */
H.geo.Rect.prototype.resizeToCenter = function(center, opt_out){};
/**
 * @constructor
 * @param {Array.<number>=} opt_latLngAlts 
 * @param {H.geo.AltitudeContext=} opt_ctx 
 */
H.geo.Strip = function(opt_latLngAlts, opt_ctx){};
/**
 * @param {H.geo.Latitude} lat 
 * @param {H.geo.Longitude} lng 
 * @param {H.geo.Altitude} alt 
 */
H.geo.Strip.prototype.pushLatLngAlt = function(lat, lng, alt){};
/**
 * @param {number} index 
 * @param {number=} opt_nRemove 
 * @param {Array.<number>=} opt_latLngAlts 
 * @return {Array.<number>}
 */
H.geo.Strip.prototype.spliceLatLngAlts = function(index, opt_nRemove, opt_latLngAlts){};
/**
 * @param {number} index 
 * @param {H.geo.Latitude} lat 
 * @param {H.geo.Longitude} lng 
 * @param {H.geo.Altitude} alt 
 */
H.geo.Strip.prototype.insertLatLngAlt = function(index, lat, lng, alt){};
/**
 * @param {number} index 
 */
H.geo.Strip.prototype.removeLatLngAlt = function(index){};
/**
 * @param {H.geo.IPoint} geoPoint 
 */
H.geo.Strip.prototype.pushPoint = function(geoPoint){};
/**
 * @param {number} pointIndex 
 * @param {H.geo.IPoint} geoPoint 
 */
H.geo.Strip.prototype.insertPoint = function(pointIndex, geoPoint){};
/**
 * @param {number} pointIndex 
 */
H.geo.Strip.prototype.removePoint = function(pointIndex){};
/**
 * @param {number} pointIndex 
 * @param {H.geo.Point=} opt_out 
 * @return {H.geo.Point}
 */
H.geo.Strip.prototype.extractPoint = function(pointIndex, opt_out){};
/**
 * @param {function(H.geo.Latitude,H.geo.Longitude,H.geo.Altitude,number)} eachFn 
 * @param {number=} opt_start 
 * @param {number=} opt_end 
 */
H.geo.Strip.prototype.eachLatLngAlt = function(eachFn, opt_start, opt_end){};
/**
 * @param {boolean=} opt_closed 
 * @return {number}
 */
H.geo.Strip.prototype.getDBCs = function(opt_closed){};
/**
 * @return {number}
 */
H.geo.Strip.prototype.getPointCount = function(){};
/**
 * @return {Array.<number>}
 */
H.geo.Strip.prototype.getLatLngAltArray = function(){};
/**
 * @return {?H.geo.Rect}
 */
H.geo.Strip.prototype.getBounds = function(){};
/**
 * @return {boolean}
 */
H.geo.Strip.prototype.hasBounds = function(){};
/**
 * @param {H.geo.Longitude} lng1 
 * @param {H.geo.Longitude} lng2 
 * @return {boolean}
 */
H.geo.Strip.isDBC = function(lng1, lng2){};
/**
 * @param {Array.<number>} latLngs 
 * @return {H.geo.Strip}
 */
H.geo.Strip.fromLatLngArray = function(latLngs){};
/**
 * @interface
 */
H.geo.IProjection = function(){};
/**
 * @param {number} lat 
 * @param {number} lng 
 * @param {H.math.Point=} opt_out 
 * @return {H.math.Point}
 */
H.geo.IProjection.prototype.latLngToPoint = function(lat, lng, opt_out){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {H.geo.Point=} opt_out 
 * @return {H.geo.Point}
 */
H.geo.IProjection.prototype.xyToGeo = function(x, y, opt_out){};
/**
 * @param {H.math.IPoint} point 
 * @param {H.geo.Point=} opt_out 
 * @return {H.geo.Point}
 */
H.geo.IProjection.prototype.pointToGeo = function(point, opt_out){};
/**
 * @param {H.geo.IPoint} geoPoint 
 * @param {H.math.Point=} opt_out 
 * @return {H.math.Point}
 */
H.geo.IProjection.prototype.geoToPoint = function(geoPoint, opt_out){};
/**
 * @const
 */
H.geo.mercator = {};
/**
 * @constructor
 * @param {H.geo.IProjection=} opt_projection 
 * @param {number=} opt_sizeAtLevelZero 
 */
H.geo.PixelProjection = function(opt_projection, opt_sizeAtLevelZero){};
/**
 * @param {number} zoom 
 */
H.geo.PixelProjection.prototype.rescale = function(zoom){};
/**
 * @return {number}
 */
H.geo.PixelProjection.prototype.getZoomScale = function(){};
/**
 * @param {H.geo.IPoint} geoPoint 
 * @param {H.math.IPoint=} opt_out 
 * @return {H.math.IPoint}
 */
H.geo.PixelProjection.prototype.geoToPixel = function(geoPoint, opt_out){};
/**
 * @param {H.math.Point} point 
 * @param {H.geo.IPoint=} opt_out 
 * @return {H.geo.IPoint}
 */
H.geo.PixelProjection.prototype.pixelToGeo = function(point, opt_out){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {H.geo.Point=} opt_out 
 * @return {H.geo.Point}
 */
H.geo.PixelProjection.prototype.xyToGeo = function(x, y, opt_out){};
/**
 * @param {number} latitude 
 * @param {number} longitude 
 * @param {H.math.IPoint=} opt_out 
 * @return {H.math.Point}
 */
H.geo.PixelProjection.prototype.latLngToPixel = function(latitude, longitude, opt_out){};
/**
 * @param {H.math.IPoint} point 
 * @return {H.math.Point}
 */
H.geo.PixelProjection.prototype.pointToPixel = function(point){};
/**
 * @const
 */
H.map = {};
/**
 * @constructor
 * @param {(H.map.ArrowStyle|H.map.ArrowStyle.Options)=} opt_options 
 */
H.map.ArrowStyle = function(opt_options){};
/**
 * @param {(H.map.ArrowStyle|H.map.ArrowStyle.Options)} other 
 * @return {boolean}
 */
H.map.ArrowStyle.prototype.equals = function(other){};
/**
 * @constructor
 * @param {H.map.Object.Options=} opt_options 
 * @extends {H.util.EventTarget}
 */
H.map.Object = function(opt_options){};
/**
 * @return {number}
 */
H.map.Object.prototype.getId = function(){};
/**
 * @param {boolean=} opt_visibility 
 * @return {H.map.Object}
 */
H.map.Object.prototype.setVisibility = function(opt_visibility){};
/**
 * @param {boolean=} opt_effective 
 * @return {boolean}
 */
H.map.Object.prototype.getVisibility = function(opt_effective){};
/**
 * @return {(number|undefined)}
 */
H.map.Object.prototype.getZIndex = function(){};
/**
 * @param {(number|undefined)} zIndex 
 * @return {H.map.Object}
 */
H.map.Object.prototype.setZIndex = function(zIndex){};
/**
 * @param {H.map.Object} first 
 * @param {H.map.Object} second 
 * @return {number}
 */
H.map.Object.compareZOrder = function(first, second){};
/**
 * @param {H.map.Object} other 
 * @return {number}
 */
H.map.Object.prototype.compareZOrder = function(other){};
/**
 * @return {?H.map.Group}
 */
H.map.Object.prototype.getParentGroup = function(){};
/**
 * @return {!H.map.Object}
 */
H.map.Object.prototype.getRootGroup = function(){};
/**
 * @param {*} object 
 * @return {boolean}
 */
H.map.Object.prototype.contains = function(object){};
/**
 * @return {?H.map.provider.ObjectProvider}
 */
H.map.Object.prototype.getProvider = function(){};
/**
 * @return {H.map.provider.Invalidations}
 */
H.map.Object.prototype.getInvalidations = function(){};
/**
 * @param {H.math.BitMask} flags 
 * @return {boolean}
 */
H.map.Object.prototype.invalidate = function(flags){};
/**
 * @return {*}
 */
H.map.Object.prototype.getData = function(){};
/**
 * @param {*} data 
 * @return {H.map.Object}
 */
H.map.Object.prototype.setData = function(data){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.Object.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.Object.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Object.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Object.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.Object.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.Object.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.Object.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @enum {number}
 */
H.map.Object.Type = {
  ANY: '',
  SPATIAL: '',
  MARKER: '',
  DOM_MARKER: '',
  GROUP: ''
};
/**
 * @constructor
 * @param {(H.map.SpatialStyle|H.map.SpatialStyle.Options)=} opt_options 
 */
H.map.SpatialStyle = function(opt_options){};
/**
 * @type {H.map.SpatialStyle} */
H.map.SpatialStyle.DEFAULT_STYLE;
/**
 * @param {(H.map.SpatialStyle|H.map.SpatialStyle.Options)} other 
 * @return {boolean}
 */
H.map.SpatialStyle.prototype.equals = function(other){};
/**
 * @param {H.map.SpatialStyle.Options=} opt_attributes 
 * @return {H.map.SpatialStyle}
 */
H.map.SpatialStyle.prototype.getCopy = function(opt_attributes){};
/**
 * @constructor
 * @param {boolean} isClosed 
 * @param {H.map.Spatial.Options=} opt_options 
 * @extends {H.map.Object}
 */
H.map.Spatial = function(isClosed, opt_options){};
/**
 * @return {H.map.SpatialStyle}
 */
H.map.Spatial.prototype.getStyle = function(){};
/**
 * @param {(H.map.SpatialStyle|H.map.SpatialStyle.Options)=} opt_style 
 * @return {H.map.Spatial}
 */
H.map.Spatial.prototype.setStyle = function(opt_style){};
/**
 * @return {boolean}
 */
H.map.Spatial.prototype.isClosed = function(){};
/**
 * @param {H.map.provider.SpatialTile} tile 
 * @return {Array.<Array.<H.math.Point>>}
 */
H.map.Spatial.prototype.getGeometry = function(tile){};
/**
 * @param {H.map.provider.SpatialTile} tile 
 * @return {number}
 */
H.map.Spatial.prototype.getHybridIdx = function(tile){};
/**
 * @return {number}
 */
H.map.Spatial.prototype.getId = function(){};
/**
 * @param {boolean=} opt_visibility 
 * @return {H.map.Object}
 */
H.map.Spatial.prototype.setVisibility = function(opt_visibility){};
/**
 * @param {boolean=} opt_effective 
 * @return {boolean}
 */
H.map.Spatial.prototype.getVisibility = function(opt_effective){};
/**
 * @return {(number|undefined)}
 */
H.map.Spatial.prototype.getZIndex = function(){};
/**
 * @param {(number|undefined)} zIndex 
 * @return {H.map.Object}
 */
H.map.Spatial.prototype.setZIndex = function(zIndex){};
/**
 * @param {H.map.Object} other 
 * @return {number}
 */
H.map.Spatial.prototype.compareZOrder = function(other){};
/**
 * @return {?H.map.Group}
 */
H.map.Spatial.prototype.getParentGroup = function(){};
/**
 * @return {!H.map.Object}
 */
H.map.Spatial.prototype.getRootGroup = function(){};
/**
 * @param {*} object 
 * @return {boolean}
 */
H.map.Spatial.prototype.contains = function(object){};
/**
 * @return {?H.map.provider.ObjectProvider}
 */
H.map.Spatial.prototype.getProvider = function(){};
/**
 * @return {H.map.provider.Invalidations}
 */
H.map.Spatial.prototype.getInvalidations = function(){};
/**
 * @param {H.math.BitMask} flags 
 * @return {boolean}
 */
H.map.Spatial.prototype.invalidate = function(flags){};
/**
 * @return {*}
 */
H.map.Spatial.prototype.getData = function(){};
/**
 * @param {*} data 
 * @return {H.map.Object}
 */
H.map.Spatial.prototype.setData = function(data){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.Spatial.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.Spatial.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Spatial.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Spatial.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.Spatial.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.Spatial.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.Spatial.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {boolean} isClosed 
 * @param {H.geo.Strip} strip 
 * @param {H.map.Spatial.Options} options 
 * @extends {H.map.Spatial}
 */
H.map.GeoShape = function(isClosed, strip, options){};
/**
 * @return {H.geo.Strip}
 */
H.map.GeoShape.prototype.getStrip = function(){};
/**
 * @param {?H.geo.Strip} strip 
 * @return {H.map.GeoShape}
 */
H.map.GeoShape.prototype.setStrip = function(strip){};
/**
 * @return {H.geo.Rect}
 */
H.map.GeoShape.prototype.getBounds = function(){};
/**
 * @return {H.map.SpatialStyle}
 */
H.map.GeoShape.prototype.getStyle = function(){};
/**
 * @param {(H.map.SpatialStyle|H.map.SpatialStyle.Options)=} opt_style 
 * @return {H.map.Spatial}
 */
H.map.GeoShape.prototype.setStyle = function(opt_style){};
/**
 * @return {boolean}
 */
H.map.GeoShape.prototype.isClosed = function(){};
/**
 * @param {H.map.provider.SpatialTile} tile 
 * @return {Array.<Array.<H.math.Point>>}
 */
H.map.GeoShape.prototype.getGeometry = function(tile){};
/**
 * @param {H.map.provider.SpatialTile} tile 
 * @return {number}
 */
H.map.GeoShape.prototype.getHybridIdx = function(tile){};
/**
 * @return {number}
 */
H.map.GeoShape.prototype.getId = function(){};
/**
 * @param {boolean=} opt_visibility 
 * @return {H.map.Object}
 */
H.map.GeoShape.prototype.setVisibility = function(opt_visibility){};
/**
 * @param {boolean=} opt_effective 
 * @return {boolean}
 */
H.map.GeoShape.prototype.getVisibility = function(opt_effective){};
/**
 * @return {(number|undefined)}
 */
H.map.GeoShape.prototype.getZIndex = function(){};
/**
 * @param {(number|undefined)} zIndex 
 * @return {H.map.Object}
 */
H.map.GeoShape.prototype.setZIndex = function(zIndex){};
/**
 * @param {H.map.Object} other 
 * @return {number}
 */
H.map.GeoShape.prototype.compareZOrder = function(other){};
/**
 * @return {?H.map.Group}
 */
H.map.GeoShape.prototype.getParentGroup = function(){};
/**
 * @return {!H.map.Object}
 */
H.map.GeoShape.prototype.getRootGroup = function(){};
/**
 * @param {*} object 
 * @return {boolean}
 */
H.map.GeoShape.prototype.contains = function(object){};
/**
 * @return {?H.map.provider.ObjectProvider}
 */
H.map.GeoShape.prototype.getProvider = function(){};
/**
 * @return {H.map.provider.Invalidations}
 */
H.map.GeoShape.prototype.getInvalidations = function(){};
/**
 * @param {H.math.BitMask} flags 
 * @return {boolean}
 */
H.map.GeoShape.prototype.invalidate = function(flags){};
/**
 * @return {*}
 */
H.map.GeoShape.prototype.getData = function(){};
/**
 * @param {*} data 
 * @return {H.map.Object}
 */
H.map.GeoShape.prototype.setData = function(data){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.GeoShape.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.GeoShape.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.GeoShape.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.GeoShape.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.GeoShape.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.GeoShape.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.GeoShape.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {H.geo.Strip} strip 
 * @param {H.map.Polyline.Options=} opt_options 
 * @extends {H.map.GeoShape}
 */
H.map.Polyline = function(strip, opt_options){};
/**
 * @return {(H.map.ArrowStyle|undefined)}
 */
H.map.Polyline.prototype.getArrows = function(){};
/**
 * @param {(H.map.ArrowStyle|H.map.ArrowStyle.Options)=} opt_arrows 
 * @return {H.map.Polyline}
 */
H.map.Polyline.prototype.setArrows = function(opt_arrows){};
/**
 * @param {H.geo.Rect} geoRect 
 * @return {Array.<Array.<number>>}
 */
H.map.Polyline.prototype.clip = function(geoRect){};
/**
 * @return {H.geo.Strip}
 */
H.map.Polyline.prototype.getStrip = function(){};
/**
 * @param {?H.geo.Strip} strip 
 * @return {H.map.GeoShape}
 */
H.map.Polyline.prototype.setStrip = function(strip){};
/**
 * @return {H.geo.Rect}
 */
H.map.Polyline.prototype.getBounds = function(){};
/**
 * @return {H.map.SpatialStyle}
 */
H.map.Polyline.prototype.getStyle = function(){};
/**
 * @param {(H.map.SpatialStyle|H.map.SpatialStyle.Options)=} opt_style 
 * @return {H.map.Spatial}
 */
H.map.Polyline.prototype.setStyle = function(opt_style){};
/**
 * @return {boolean}
 */
H.map.Polyline.prototype.isClosed = function(){};
/**
 * @param {H.map.provider.SpatialTile} tile 
 * @return {Array.<Array.<H.math.Point>>}
 */
H.map.Polyline.prototype.getGeometry = function(tile){};
/**
 * @param {H.map.provider.SpatialTile} tile 
 * @return {number}
 */
H.map.Polyline.prototype.getHybridIdx = function(tile){};
/**
 * @return {number}
 */
H.map.Polyline.prototype.getId = function(){};
/**
 * @param {boolean=} opt_visibility 
 * @return {H.map.Object}
 */
H.map.Polyline.prototype.setVisibility = function(opt_visibility){};
/**
 * @param {boolean=} opt_effective 
 * @return {boolean}
 */
H.map.Polyline.prototype.getVisibility = function(opt_effective){};
/**
 * @return {(number|undefined)}
 */
H.map.Polyline.prototype.getZIndex = function(){};
/**
 * @param {(number|undefined)} zIndex 
 * @return {H.map.Object}
 */
H.map.Polyline.prototype.setZIndex = function(zIndex){};
/**
 * @param {H.map.Object} other 
 * @return {number}
 */
H.map.Polyline.prototype.compareZOrder = function(other){};
/**
 * @return {?H.map.Group}
 */
H.map.Polyline.prototype.getParentGroup = function(){};
/**
 * @return {!H.map.Object}
 */
H.map.Polyline.prototype.getRootGroup = function(){};
/**
 * @param {*} object 
 * @return {boolean}
 */
H.map.Polyline.prototype.contains = function(object){};
/**
 * @return {?H.map.provider.ObjectProvider}
 */
H.map.Polyline.prototype.getProvider = function(){};
/**
 * @return {H.map.provider.Invalidations}
 */
H.map.Polyline.prototype.getInvalidations = function(){};
/**
 * @param {H.math.BitMask} flags 
 * @return {boolean}
 */
H.map.Polyline.prototype.invalidate = function(flags){};
/**
 * @return {*}
 */
H.map.Polyline.prototype.getData = function(){};
/**
 * @param {*} data 
 * @return {H.map.Object}
 */
H.map.Polyline.prototype.setData = function(data){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.Polyline.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.Polyline.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Polyline.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Polyline.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.Polyline.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.Polyline.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.Polyline.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {H.geo.Strip} strip 
 * @param {H.map.Spatial.Options=} opt_options 
 * @extends {H.map.GeoShape}
 */
H.map.Polygon = function(strip, opt_options){};
/**
 * @param {boolean} flag 
 * @return {H.map.Polygon}
 */
H.map.Polygon.prototype.setNorthPoleCovering = function(flag){};
/**
 * @return {boolean}
 */
H.map.Polygon.prototype.getNorthPoleCovering = function(){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {H.geo.PixelProjection} projection 
 * @return {Array.<Array.<number>>}
 */
H.map.Polygon.prototype.clip = function(geoRect, projection){};
/**
 * @return {H.geo.Strip}
 */
H.map.Polygon.prototype.getStrip = function(){};
/**
 * @param {?H.geo.Strip} strip 
 * @return {H.map.GeoShape}
 */
H.map.Polygon.prototype.setStrip = function(strip){};
/**
 * @return {H.geo.Rect}
 */
H.map.Polygon.prototype.getBounds = function(){};
/**
 * @return {H.map.SpatialStyle}
 */
H.map.Polygon.prototype.getStyle = function(){};
/**
 * @param {(H.map.SpatialStyle|H.map.SpatialStyle.Options)=} opt_style 
 * @return {H.map.Spatial}
 */
H.map.Polygon.prototype.setStyle = function(opt_style){};
/**
 * @return {boolean}
 */
H.map.Polygon.prototype.isClosed = function(){};
/**
 * @param {H.map.provider.SpatialTile} tile 
 * @return {Array.<Array.<H.math.Point>>}
 */
H.map.Polygon.prototype.getGeometry = function(tile){};
/**
 * @param {H.map.provider.SpatialTile} tile 
 * @return {number}
 */
H.map.Polygon.prototype.getHybridIdx = function(tile){};
/**
 * @return {number}
 */
H.map.Polygon.prototype.getId = function(){};
/**
 * @param {boolean=} opt_visibility 
 * @return {H.map.Object}
 */
H.map.Polygon.prototype.setVisibility = function(opt_visibility){};
/**
 * @param {boolean=} opt_effective 
 * @return {boolean}
 */
H.map.Polygon.prototype.getVisibility = function(opt_effective){};
/**
 * @return {(number|undefined)}
 */
H.map.Polygon.prototype.getZIndex = function(){};
/**
 * @param {(number|undefined)} zIndex 
 * @return {H.map.Object}
 */
H.map.Polygon.prototype.setZIndex = function(zIndex){};
/**
 * @param {H.map.Object} other 
 * @return {number}
 */
H.map.Polygon.prototype.compareZOrder = function(other){};
/**
 * @return {?H.map.Group}
 */
H.map.Polygon.prototype.getParentGroup = function(){};
/**
 * @return {!H.map.Object}
 */
H.map.Polygon.prototype.getRootGroup = function(){};
/**
 * @param {*} object 
 * @return {boolean}
 */
H.map.Polygon.prototype.contains = function(object){};
/**
 * @return {?H.map.provider.ObjectProvider}
 */
H.map.Polygon.prototype.getProvider = function(){};
/**
 * @return {H.map.provider.Invalidations}
 */
H.map.Polygon.prototype.getInvalidations = function(){};
/**
 * @param {H.math.BitMask} flags 
 * @return {boolean}
 */
H.map.Polygon.prototype.invalidate = function(flags){};
/**
 * @return {*}
 */
H.map.Polygon.prototype.getData = function(){};
/**
 * @param {*} data 
 * @return {H.map.Object}
 */
H.map.Polygon.prototype.setData = function(data){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.Polygon.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.Polygon.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Polygon.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Polygon.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.Polygon.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.Polygon.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.Polygon.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {H.geo.Rect} bounds 
 * @param {H.map.Spatial.Options=} opt_options 
 * @extends {H.map.Polygon}
 */
H.map.Rect = function(bounds, opt_options){};
/**
 * @param {H.geo.Rect} bounds 
 */
H.map.Rect.prototype.setBounds = function(bounds){};
/**
 * @param {boolean} flag 
 * @return {H.map.Polygon}
 */
H.map.Rect.prototype.setNorthPoleCovering = function(flag){};
/**
 * @return {boolean}
 */
H.map.Rect.prototype.getNorthPoleCovering = function(){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {H.geo.PixelProjection} projection 
 * @return {Array.<Array.<number>>}
 */
H.map.Rect.prototype.clip = function(geoRect, projection){};
/**
 * @return {H.geo.Strip}
 */
H.map.Rect.prototype.getStrip = function(){};
/**
 * @param {?H.geo.Strip} strip 
 * @return {H.map.GeoShape}
 */
H.map.Rect.prototype.setStrip = function(strip){};
/**
 * @return {H.geo.Rect}
 */
H.map.Rect.prototype.getBounds = function(){};
/**
 * @return {H.map.SpatialStyle}
 */
H.map.Rect.prototype.getStyle = function(){};
/**
 * @param {(H.map.SpatialStyle|H.map.SpatialStyle.Options)=} opt_style 
 * @return {H.map.Spatial}
 */
H.map.Rect.prototype.setStyle = function(opt_style){};
/**
 * @return {boolean}
 */
H.map.Rect.prototype.isClosed = function(){};
/**
 * @param {H.map.provider.SpatialTile} tile 
 * @return {Array.<Array.<H.math.Point>>}
 */
H.map.Rect.prototype.getGeometry = function(tile){};
/**
 * @param {H.map.provider.SpatialTile} tile 
 * @return {number}
 */
H.map.Rect.prototype.getHybridIdx = function(tile){};
/**
 * @return {number}
 */
H.map.Rect.prototype.getId = function(){};
/**
 * @param {boolean=} opt_visibility 
 * @return {H.map.Object}
 */
H.map.Rect.prototype.setVisibility = function(opt_visibility){};
/**
 * @param {boolean=} opt_effective 
 * @return {boolean}
 */
H.map.Rect.prototype.getVisibility = function(opt_effective){};
/**
 * @return {(number|undefined)}
 */
H.map.Rect.prototype.getZIndex = function(){};
/**
 * @param {(number|undefined)} zIndex 
 * @return {H.map.Object}
 */
H.map.Rect.prototype.setZIndex = function(zIndex){};
/**
 * @param {H.map.Object} other 
 * @return {number}
 */
H.map.Rect.prototype.compareZOrder = function(other){};
/**
 * @return {?H.map.Group}
 */
H.map.Rect.prototype.getParentGroup = function(){};
/**
 * @return {!H.map.Object}
 */
H.map.Rect.prototype.getRootGroup = function(){};
/**
 * @param {*} object 
 * @return {boolean}
 */
H.map.Rect.prototype.contains = function(object){};
/**
 * @return {?H.map.provider.ObjectProvider}
 */
H.map.Rect.prototype.getProvider = function(){};
/**
 * @return {H.map.provider.Invalidations}
 */
H.map.Rect.prototype.getInvalidations = function(){};
/**
 * @param {H.math.BitMask} flags 
 * @return {boolean}
 */
H.map.Rect.prototype.invalidate = function(flags){};
/**
 * @return {*}
 */
H.map.Rect.prototype.getData = function(){};
/**
 * @param {*} data 
 * @return {H.map.Object}
 */
H.map.Rect.prototype.setData = function(data){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.Rect.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.Rect.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Rect.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Rect.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.Rect.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.Rect.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.Rect.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @const
 */
H.map.render = {};
/**
 * @const
 */
H.map.render.p2d = {};
/**
 * @const
 */
H.map.render.p2d.canvas = {};
/**
 * @interface
 */
H.map.render.p2d.IPickable = function(){};
/**
 * @constructor
 * @param {H.map.ViewPort} viewPort 
 * @param {H.map.ViewModel} viewModel 
 * @param {H.map.DataModel} dataModel 
 * @param {H.map.render.p2d.RenderEngine.Options} options 
 * @extends {H.map.render.RenderEngine}
 */
H.map.render.p2d.RenderEngine = function(viewPort, viewModel, dataModel, options){};
/**
 * @type {H.map.render.RenderEngine.EngineType} */
H.map.render.p2d.RenderEngine.prototype.type;
/**
 * @return {number}
 */
H.map.render.p2d.RenderEngine.prototype.getState = function(){};
/**
 * @param {number} duration 
 */
H.map.render.p2d.RenderEngine.prototype.setAnimationDuration = function(duration){};
/**
 * @return {number}
 */
H.map.render.p2d.RenderEngine.prototype.getAnimationDuration = function(){};
/**
 * @param {function(number):number} easeFunction 
 */
H.map.render.p2d.RenderEngine.prototype.setAnimationEase = function(easeFunction){};
/**
 * @return {function(number):number}
 */
H.map.render.p2d.RenderEngine.prototype.getAnimationEase = function(){};
/**
 */
H.map.render.p2d.RenderEngine.prototype.resetAnimationDefaults = function(){};
/**
 * @param {number} zoom 
 * @param {number=} opt_atX 
 * @param {number=} opt_atY 
 */
H.map.render.p2d.RenderEngine.prototype.zoomAt = function(zoom, opt_atX, opt_atY){};
/**
 * @param {H.map.render.RenderEngine.ViewPortBoundsType} type 
 * @param {number} margin 
 * @return {H.geo.Rect}
 */
H.map.render.p2d.RenderEngine.prototype.getBBox = function(type, margin){};
/**
 * @param {H.geo.Rect} bounds 
 * @param {boolean} keepCenter 
 * @return {H.map.ViewModel.CameraData}
 */
H.map.render.p2d.RenderEngine.prototype.getCamForBounds = function(bounds, keepCenter){};
/**
 * @param {number} x 
 * @param {number} y 
 */
H.map.render.p2d.RenderEngine.prototype.setPointer = function(x, y){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.render.p2d.RenderEngine.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.render.p2d.RenderEngine.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.render.p2d.RenderEngine.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.render.p2d.RenderEngine.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.render.p2d.RenderEngine.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.render.p2d.RenderEngine.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.render.p2d.RenderEngine.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {H.map.ViewPort} viewPort 
 * @param {H.map.ViewModel} viewModel 
 * @param {H.map.DataModel} dataModel 
 * @param {H.map.render.RenderEngine.Options} options 
 * @extends {H.util.EventTarget}
 */
H.map.render.RenderEngine = function(viewPort, viewModel, dataModel, options){};
/**
 * @param {H.map.render.RenderEngine.ViewPortBoundsType} type 
 * @param {number} margin 
 * @return {H.geo.Rect}
 */
H.map.render.RenderEngine.prototype.getBBox = function(type, margin){};
/**
 * @param {H.geo.Rect} bounds 
 * @param {boolean} keepCenter 
 * @return {H.map.ViewModel.CameraData}
 */
H.map.render.RenderEngine.prototype.getCamForBounds = function(bounds, keepCenter){};
/**
 * @param {number} x 
 * @param {number} y 
 */
H.map.render.RenderEngine.prototype.setPointer = function(x, y){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.render.RenderEngine.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.render.RenderEngine.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.render.RenderEngine.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.render.RenderEngine.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.render.RenderEngine.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.render.RenderEngine.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.render.RenderEngine.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @enum {number}
 */
H.map.render.RenderEngine.EngineType = {
  P2D: '',
  PANORAMA: ''
};
/**
 * @interface
 */
H.map.ICopyright = function(){};
/**
 * @constructor
 * @param {H.Map} map 
 * @param {H.map.Imprint.Options=} opt_options 
 * @extends {H.util.Disposable}
 * @implements {H.util.ICapturable}
 */
H.map.Imprint = function(map, opt_options){};
/**
 * @param {H.map.Imprint.Options=} opt_options 
 */
H.map.Imprint.prototype.setOptions = function(opt_options){};
/**
 * @return {Element}
 */
H.map.Imprint.prototype.getElement = function(){};
/**
 * @return {string}
 */
H.map.Imprint.prototype.getCopyrights = function(){};
/**
 * @return {CSSStyleDeclaration}
 */
H.map.Imprint.prototype.getStyle = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.Imprint.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @param {HTMLCanvasElement} canvas 
 * @param {number} pixelRatio 
 * @param {function(HTMLCanvasElement=)} callback 
 * @param {function(string)=} opt_errback 
 */
H.map.Imprint.prototype.capture = function(canvas, pixelRatio, callback, opt_errback){};
/**
 * @constructor
 * @param {string} type 
 * @param {Object} newValue 
 * @param {Object} oldValue 
 * @param {H.math.BitMask} modifiers 
 * @extends {H.util.ChangeEvent}
 */
H.map.ChangeEvent = function(type, newValue, oldValue, modifiers){};
/**
 */
H.map.ChangeEvent.prototype.stopPropagation = function(){};
/**
 * @interface
 */
H.map.IControl = function(){};
/**
 * @constructor
 * @extends {H.util.EventTarget}
 * @implements {H.map.IControl}
 */
H.map.ViewModel = function(){};
/**
 * @return {H.map.ViewModel.CameraData}
 */
H.map.ViewModel.prototype.getCameraData = function(){};
/**
 * @param {H.map.ViewModel.CameraData} data 
 * @return {H.map.ViewModel}
 */
H.map.ViewModel.prototype.setCameraData = function(data){};
/**
 * @param {number} zoom 
 * @param {boolean} animate 
 */
H.map.ViewModel.prototype.setZoom = function(zoom, animate){};
/**
 * @return {number}
 */
H.map.ViewModel.prototype.getZoom = function(){};
/**
 * @return {H.map.ViewModel.CameraData}
 */
H.map.ViewModel.prototype.getRequestedCameraData = function(){};
/**
 * @param {H.util.kinetics.IKinetics=} opt_kinetics 
 * @param {number=} opt_atX 
 * @param {number=} opt_atY 
 */
H.map.ViewModel.prototype.startControl = function(opt_kinetics, opt_atX, opt_atY){};
/**
 * @param {number} moveX 
 * @param {number} moveY 
 * @param {number} moveZ 
 * @param {number} angleX 
 * @param {number} angleY 
 * @param {number} angleZ 
 * @param {number=} opt_zoom 
 */
H.map.ViewModel.prototype.control = function(moveX, moveY, moveZ, angleX, angleY, angleZ, opt_zoom){};
/**
 * @param {boolean=} opt_preventKinetics 
 * @param {function(H.map.ViewModel.CameraData)=} opt_adjustView 
 */
H.map.ViewModel.prototype.endControl = function(opt_preventKinetics, opt_adjustView){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.ViewModel.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.ViewModel.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.ViewModel.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.ViewModel.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.ViewModel.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.ViewModel.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.ViewModel.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {H.map.Group.Options=} opt_options 
 * @extends {H.map.Object}
 */
H.map.Group = function(opt_options){};
/**
 * @param {function(!H.map.Object,number,!H.map.Group)} callback 
 * @param {boolean=} opt_recursive 
 * @param {*=} opt_context 
 */
H.map.Group.prototype.forEach = function(callback, opt_recursive, opt_context){};
/**
 * @param {boolean=} opt_recursive 
 * @return {!Array.<!H.map.Object>}
 */
H.map.Group.prototype.getObjects = function(opt_recursive){};
/**
 * @return {H.geo.Rect}
 */
H.map.Group.prototype.getBounds = function(){};
/**
 * @return {number}
 */
H.map.Group.prototype.getChildCount = function(){};
/**
 * @param {!H.map.Object} object 
 * @return {!H.map.Object}
 */
H.map.Group.prototype.addObject = function(object){};
/**
 * @param {Array.<!H.map.Object>} objects 
 */
H.map.Group.prototype.addObjects = function(objects){};
/**
 * @param {!H.map.Object} object 
 * @return {!H.map.Object}
 */
H.map.Group.prototype.removeObject = function(object){};
/**
 * @param {!Array.<!H.map.Object>} objects 
 */
H.map.Group.prototype.removeObjects = function(objects){};
/**
 */
H.map.Group.prototype.removeAll = function(){};
/**
 * @return {number}
 */
H.map.Group.prototype.getId = function(){};
/**
 * @param {boolean=} opt_visibility 
 * @return {H.map.Object}
 */
H.map.Group.prototype.setVisibility = function(opt_visibility){};
/**
 * @param {boolean=} opt_effective 
 * @return {boolean}
 */
H.map.Group.prototype.getVisibility = function(opt_effective){};
/**
 * @return {(number|undefined)}
 */
H.map.Group.prototype.getZIndex = function(){};
/**
 * @param {(number|undefined)} zIndex 
 * @return {H.map.Object}
 */
H.map.Group.prototype.setZIndex = function(zIndex){};
/**
 * @param {H.map.Object} other 
 * @return {number}
 */
H.map.Group.prototype.compareZOrder = function(other){};
/**
 * @return {?H.map.Group}
 */
H.map.Group.prototype.getParentGroup = function(){};
/**
 * @return {!H.map.Object}
 */
H.map.Group.prototype.getRootGroup = function(){};
/**
 * @param {*} object 
 * @return {boolean}
 */
H.map.Group.prototype.contains = function(object){};
/**
 * @return {?H.map.provider.ObjectProvider}
 */
H.map.Group.prototype.getProvider = function(){};
/**
 * @return {H.map.provider.Invalidations}
 */
H.map.Group.prototype.getInvalidations = function(){};
/**
 * @param {H.math.BitMask} flags 
 * @return {boolean}
 */
H.map.Group.prototype.invalidate = function(flags){};
/**
 * @return {*}
 */
H.map.Group.prototype.getData = function(){};
/**
 * @param {*} data 
 * @return {H.map.Object}
 */
H.map.Group.prototype.setData = function(data){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.Group.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.Group.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Group.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Group.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.Group.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.Group.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.Group.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @interface
 */
H.map.IInteraction = function(){};
/**
 * @constructor
 * @param {Element} element 
 * @param {H.map.ViewPort.Options=} opt_options 
 * @implements {H.map.IInteraction}
 * @extends {H.util.EventTarget}
 */
H.map.ViewPort = function(element, opt_options){};
/**
 * @param {number} margin 
 */
H.map.ViewPort.prototype.setMargin = function(margin){};
/**
 * @param {number} top 
 * @param {number} right 
 * @param {number} bottom 
 * @param {number} left 
 */
H.map.ViewPort.prototype.setPadding = function(top, right, bottom, left){};
/**
 */
H.map.ViewPort.prototype.resize = function(){};
/**
 * @param {number} modifiers 
 * @param {H.util.kinetics.IKinetics=} opt_kinetics 
 */
H.map.ViewPort.prototype.startInteraction = function(modifiers, opt_kinetics){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number=} opt_bx 
 * @param {number=} opt_by 
 * @param {number=} opt_timestamp 
 */
H.map.ViewPort.prototype.interaction = function(x, y, opt_bx, opt_by, opt_timestamp){};
/**
 * @param {boolean=} opt_preventKinetics 
 */
H.map.ViewPort.prototype.endInteraction = function(opt_preventKinetics){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.ViewPort.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.ViewPort.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.ViewPort.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.ViewPort.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.ViewPort.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.ViewPort.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.ViewPort.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {!(string|HTMLImageElement|HTMLCanvasElement)} bitmap 
 * @param {H.map.Icon.Options=} opt_options 
 * @extends {H.util.EventTarget}
 */
H.map.Icon = function(bitmap, opt_options){};
/**
 * @return {H.map.Icon.prototype.State}
 */
H.map.Icon.prototype.getState = function(){};
/**
 * @return {?(HTMLImageElement|HTMLCanvasElement)}
 */
H.map.Icon.prototype.getBitmap = function(){};
/**
 * @return {?H.math.Size}
 */
H.map.Icon.prototype.getSize = function(){};
/**
 * @return {?H.math.Point}
 */
H.map.Icon.prototype.getAnchor = function(){};
/**
 * @return {?H.map.HitArea}
 */
H.map.Icon.prototype.getHitArea = function(){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.Icon.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.Icon.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Icon.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Icon.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.Icon.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.Icon.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.Icon.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @enum {number}
 */
H.map.Icon.prototype.State = {
  ERROR: '',
  LOADING: '',
  READY: ''
};
/**
 * @constructor
 * @param {Array=} opt_layers 
 * @extends {H.util.OList}
 */
H.map.DataModel = function(opt_layers){};
/**
 * @param {H.map.layer.Layer} layer 
 * @param {number=} opt_idx 
 */
H.map.DataModel.prototype.add = function(layer, opt_idx){};
/**
 * @param {number} idx 
 * @param {H.map.layer.Layer} layer 
 * @return {H.map.layer.Layer}
 */
H.map.DataModel.prototype.set = function(idx, layer){};
/**
 * @param {number} idx 
 * @return {H.map.layer.Layer}
 */
H.map.DataModel.prototype.removeAt = function(idx){};
/**
 * @param {H.map.layer.Layer} layer 
 * @return {boolean}
 */
H.map.DataModel.prototype.remove = function(layer){};
/**
 */
H.map.DataModel.prototype.flush = function(){};
/**
 * @param {?} entry 
 * @return {number}
 */
H.map.DataModel.prototype.indexOf = function(entry){};
/**
 * @param {number} idx 
 * @return {?}
 */
H.map.DataModel.prototype.get = function(idx){};
/**
 * @return {number}
 */
H.map.DataModel.prototype.getLength = function(){};
/**
 * @return {Array.<*>}
 */
H.map.DataModel.prototype.asArray = function(){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.DataModel.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.DataModel.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.DataModel.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.DataModel.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.DataModel.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.DataModel.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.DataModel.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @const
 */
H.map.layer = {};
/**
 * @constructor
 * @param {H.map.layer.Layer.Options=} opt_options 
 * @extends {H.util.EventTarget}
 */
H.map.layer.Layer = function(opt_options){};
/**
 * @param {number} zoomLevel 
 * @return {boolean}
 */
H.map.layer.Layer.prototype.isValid = function(zoomLevel){};
/**
 * @param {number} min 
 * @return {H.map.layer.Layer}
 */
H.map.layer.Layer.prototype.setMin = function(min){};
/**
 * @param {number} max 
 * @return {H.map.layer.Layer}
 */
H.map.layer.Layer.prototype.setMax = function(max){};
/**
 * @param {H.geo.Rect} bounds 
 * @param {number} level 
 * @return {?Array.<H.map.ICopyright>}
 */
H.map.layer.Layer.prototype.getCopyrights = function(bounds, level){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.layer.Layer.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.layer.Layer.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.layer.Layer.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.layer.Layer.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.layer.Layer.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.layer.Layer.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.layer.Layer.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {H.map.provider.TileProvider} provider 
 * @param {H.map.layer.ITileLayer.Options=} opt_options 
 * @extends {H.map.layer.Layer}
 */
H.map.layer.BaseTileLayer = function(provider, opt_options){};
/**
 * @return {H.map.provider.TileProvider}
 */
H.map.layer.BaseTileLayer.prototype.getProvider = function(){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {number=} opt_zoom 
 * @return {H.math.Rect}
 */
H.map.layer.BaseTileLayer.prototype.geoRectToRect = function(geoRect, opt_zoom){};
/**
 * @param {H.math.Rect} rectBounds 
 * @param {number} zoom 
 * @return {H.math.Rect}
 */
H.map.layer.BaseTileLayer.prototype.getTileBounds = function(rectBounds, zoom){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 */
H.map.layer.BaseTileLayer.prototype.cancelTile = function(x, y, z){};
/**
 * @param {H.math.Rect} tileBounds 
 * @param {boolean} isCDB 
 * @param {number} zoomLevel 
 * @param {boolean} cacheOnly 
 * @param {H.math.Point} prioCenter 
 * @return {H.map.layer.ITileLayer.Response}
 */
H.map.layer.BaseTileLayer.prototype.getProviderTiles = function(tileBounds, isCDB, zoomLevel, cacheOnly, prioCenter){};
/**
 * @param {number} zoomLevel 
 * @return {boolean}
 */
H.map.layer.BaseTileLayer.prototype.isValid = function(zoomLevel){};
/**
 * @param {number} min 
 * @return {H.map.layer.Layer}
 */
H.map.layer.BaseTileLayer.prototype.setMin = function(min){};
/**
 * @param {number} max 
 * @return {H.map.layer.Layer}
 */
H.map.layer.BaseTileLayer.prototype.setMax = function(max){};
/**
 * @param {H.geo.Rect} bounds 
 * @param {number} level 
 * @return {?Array.<H.map.ICopyright>}
 */
H.map.layer.BaseTileLayer.prototype.getCopyrights = function(bounds, level){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.layer.BaseTileLayer.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.layer.BaseTileLayer.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.layer.BaseTileLayer.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.layer.BaseTileLayer.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.layer.BaseTileLayer.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.layer.BaseTileLayer.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.layer.BaseTileLayer.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @interface
 */
H.map.layer.ITileLayer = function(){};
/**
 * @constructor
 * @param {H.map.provider.TileProvider} provider 
 * @param {H.map.layer.ITileLayer.Options=} opt_options 
 * @implements {H.map.layer.ITileLayer}
 * @extends {H.map.layer.BaseTileLayer}
 */
H.map.layer.TileLayer = function(provider, opt_options){};
/**
 * @return {H.map.provider.TileProvider}
 */
H.map.layer.TileLayer.prototype.getProvider = function(){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {number=} opt_zoom 
 * @return {H.math.Rect}
 */
H.map.layer.TileLayer.prototype.geoRectToRect = function(geoRect, opt_zoom){};
/**
 * @param {H.math.Rect} rectBounds 
 * @param {number} zoom 
 * @return {H.math.Rect}
 */
H.map.layer.TileLayer.prototype.getTileBounds = function(rectBounds, zoom){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 */
H.map.layer.TileLayer.prototype.cancelTile = function(x, y, z){};
/**
 * @param {H.math.Rect} tileBounds 
 * @param {boolean} isCDB 
 * @param {number} zoomLevel 
 * @param {boolean} cacheOnly 
 * @param {H.math.Point} prioCenter 
 * @return {H.map.layer.ITileLayer.Response}
 */
H.map.layer.TileLayer.prototype.getProviderTiles = function(tileBounds, isCDB, zoomLevel, cacheOnly, prioCenter){};
/**
 * @param {number} zoomLevel 
 * @return {boolean}
 */
H.map.layer.TileLayer.prototype.isValid = function(zoomLevel){};
/**
 * @param {number} min 
 * @return {H.map.layer.Layer}
 */
H.map.layer.TileLayer.prototype.setMin = function(min){};
/**
 * @param {number} max 
 * @return {H.map.layer.Layer}
 */
H.map.layer.TileLayer.prototype.setMax = function(max){};
/**
 * @param {H.geo.Rect} bounds 
 * @param {number} level 
 * @return {?Array.<H.map.ICopyright>}
 */
H.map.layer.TileLayer.prototype.getCopyrights = function(bounds, level){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.layer.TileLayer.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.layer.TileLayer.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.layer.TileLayer.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.layer.TileLayer.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.layer.TileLayer.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.layer.TileLayer.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.layer.TileLayer.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @interface
 */
H.map.layer.IMarkerLayer = function(){};
/**
 * @constructor
 * @param {H.map.provider.ObjectProvider} provider 
 * @param {H.map.layer.ObjectLayer.Options=} opt_options 
 * @implements {H.map.layer.ITileLayer}
 * @implements {H.map.layer.IMarkerLayer}
 * @extends {H.map.layer.Layer}
 */
H.map.layer.ObjectLayer = function(provider, opt_options){};
/**
 * @return {H.map.provider.ObjectProvider}
 */
H.map.layer.ObjectLayer.prototype.getProvider = function(){};
/**
 * @param {number} zoomLevel 
 * @return {boolean}
 */
H.map.layer.ObjectLayer.prototype.isValid = function(zoomLevel){};
/**
 * @param {number} min 
 * @return {H.map.layer.Layer}
 */
H.map.layer.ObjectLayer.prototype.setMin = function(min){};
/**
 * @param {number} max 
 * @return {H.map.layer.Layer}
 */
H.map.layer.ObjectLayer.prototype.setMax = function(max){};
/**
 * @param {H.geo.Rect} bounds 
 * @param {number} level 
 * @return {?Array.<H.map.ICopyright>}
 */
H.map.layer.ObjectLayer.prototype.getCopyrights = function(bounds, level){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.layer.ObjectLayer.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.layer.ObjectLayer.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.layer.ObjectLayer.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.layer.ObjectLayer.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.layer.ObjectLayer.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.layer.ObjectLayer.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.layer.ObjectLayer.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {H.map.provider.MarkerTileProvider} provider 
 * @param {H.map.layer.ITileLayer.Options=} opt_options 
 * @extends {H.map.layer.BaseTileLayer}
 * @implements {H.map.layer.IMarkerLayer}
 */
H.map.layer.MarkerTileLayer = function(provider, opt_options){};
/**
 * @return {H.map.provider.TileProvider}
 */
H.map.layer.MarkerTileLayer.prototype.getProvider = function(){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {number=} opt_zoom 
 * @return {H.math.Rect}
 */
H.map.layer.MarkerTileLayer.prototype.geoRectToRect = function(geoRect, opt_zoom){};
/**
 * @param {H.math.Rect} rectBounds 
 * @param {number} zoom 
 * @return {H.math.Rect}
 */
H.map.layer.MarkerTileLayer.prototype.getTileBounds = function(rectBounds, zoom){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 */
H.map.layer.MarkerTileLayer.prototype.cancelTile = function(x, y, z){};
/**
 * @param {H.math.Rect} tileBounds 
 * @param {boolean} isCDB 
 * @param {number} zoomLevel 
 * @param {boolean} cacheOnly 
 * @param {H.math.Point} prioCenter 
 * @return {H.map.layer.ITileLayer.Response}
 */
H.map.layer.MarkerTileLayer.prototype.getProviderTiles = function(tileBounds, isCDB, zoomLevel, cacheOnly, prioCenter){};
/**
 * @param {number} zoomLevel 
 * @return {boolean}
 */
H.map.layer.MarkerTileLayer.prototype.isValid = function(zoomLevel){};
/**
 * @param {number} min 
 * @return {H.map.layer.Layer}
 */
H.map.layer.MarkerTileLayer.prototype.setMin = function(min){};
/**
 * @param {number} max 
 * @return {H.map.layer.Layer}
 */
H.map.layer.MarkerTileLayer.prototype.setMax = function(max){};
/**
 * @param {H.geo.Rect} bounds 
 * @param {number} level 
 * @return {?Array.<H.map.ICopyright>}
 */
H.map.layer.MarkerTileLayer.prototype.getCopyrights = function(bounds, level){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.layer.MarkerTileLayer.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.layer.MarkerTileLayer.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.layer.MarkerTileLayer.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.layer.MarkerTileLayer.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.layer.MarkerTileLayer.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.layer.MarkerTileLayer.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.layer.MarkerTileLayer.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {H.geo.IPoint} center 
 * @param {number} radius 
 * @param {H.map.Circle.Options=} opt_options 
 * @extends {H.map.Polygon}
 */
H.map.Circle = function(center, radius, opt_options){};
/**
 * @param {H.geo.IPoint} center 
 */
H.map.Circle.prototype.setCenter = function(center){};
/**
 * @return {H.geo.Point}
 */
H.map.Circle.prototype.getCenter = function(){};
/**
 * @param {number} radius 
 */
H.map.Circle.prototype.setRadius = function(radius){};
/**
 * @return {number}
 */
H.map.Circle.prototype.getRadius = function(){};
/**
 * @param {number} precision 
 */
H.map.Circle.prototype.setPrecision = function(precision){};
/**
 * @return {number}
 */
H.map.Circle.prototype.getPrecision = function(){};
/**
 * @param {boolean} flag 
 * @return {H.map.Polygon}
 */
H.map.Circle.prototype.setNorthPoleCovering = function(flag){};
/**
 * @return {boolean}
 */
H.map.Circle.prototype.getNorthPoleCovering = function(){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {H.geo.PixelProjection} projection 
 * @return {Array.<Array.<number>>}
 */
H.map.Circle.prototype.clip = function(geoRect, projection){};
/**
 * @return {H.geo.Strip}
 */
H.map.Circle.prototype.getStrip = function(){};
/**
 * @param {?H.geo.Strip} strip 
 * @return {H.map.GeoShape}
 */
H.map.Circle.prototype.setStrip = function(strip){};
/**
 * @return {H.geo.Rect}
 */
H.map.Circle.prototype.getBounds = function(){};
/**
 * @return {H.map.SpatialStyle}
 */
H.map.Circle.prototype.getStyle = function(){};
/**
 * @param {(H.map.SpatialStyle|H.map.SpatialStyle.Options)=} opt_style 
 * @return {H.map.Spatial}
 */
H.map.Circle.prototype.setStyle = function(opt_style){};
/**
 * @return {boolean}
 */
H.map.Circle.prototype.isClosed = function(){};
/**
 * @param {H.map.provider.SpatialTile} tile 
 * @return {Array.<Array.<H.math.Point>>}
 */
H.map.Circle.prototype.getGeometry = function(tile){};
/**
 * @param {H.map.provider.SpatialTile} tile 
 * @return {number}
 */
H.map.Circle.prototype.getHybridIdx = function(tile){};
/**
 * @return {number}
 */
H.map.Circle.prototype.getId = function(){};
/**
 * @param {boolean=} opt_visibility 
 * @return {H.map.Object}
 */
H.map.Circle.prototype.setVisibility = function(opt_visibility){};
/**
 * @param {boolean=} opt_effective 
 * @return {boolean}
 */
H.map.Circle.prototype.getVisibility = function(opt_effective){};
/**
 * @return {(number|undefined)}
 */
H.map.Circle.prototype.getZIndex = function(){};
/**
 * @param {(number|undefined)} zIndex 
 * @return {H.map.Object}
 */
H.map.Circle.prototype.setZIndex = function(zIndex){};
/**
 * @param {H.map.Object} other 
 * @return {number}
 */
H.map.Circle.prototype.compareZOrder = function(other){};
/**
 * @return {?H.map.Group}
 */
H.map.Circle.prototype.getParentGroup = function(){};
/**
 * @return {!H.map.Object}
 */
H.map.Circle.prototype.getRootGroup = function(){};
/**
 * @param {*} object 
 * @return {boolean}
 */
H.map.Circle.prototype.contains = function(object){};
/**
 * @return {?H.map.provider.ObjectProvider}
 */
H.map.Circle.prototype.getProvider = function(){};
/**
 * @return {H.map.provider.Invalidations}
 */
H.map.Circle.prototype.getInvalidations = function(){};
/**
 * @param {H.math.BitMask} flags 
 * @return {boolean}
 */
H.map.Circle.prototype.invalidate = function(flags){};
/**
 * @return {*}
 */
H.map.Circle.prototype.getData = function(){};
/**
 * @param {*} data 
 * @return {H.map.Object}
 */
H.map.Circle.prototype.setData = function(data){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.Circle.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.Circle.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Circle.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Circle.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.Circle.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.Circle.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.Circle.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {!(Element|string)} element 
 * @param {H.map.DomIcon.Options=} opt_options 
 */
H.map.DomIcon = function(element, opt_options){};
/**
 * @constructor
 * @param {H.map.HitArea.ShapeType} shapeType 
 * @param {Array.<number>} values 
 */
H.map.HitArea = function(shapeType, values){};
/**
 * @enum {number}
 */
H.map.HitArea.ShapeType = {
  RECT: '',
  CIRCLE: '',
  POLYGON: ''
};
/**
 * @constructor
 * @param {H.geo.IPoint} position 
 * @param {H.map.AbstractMarker.Options=} opt_options 
 * @extends {H.map.Object}
 */
H.map.AbstractMarker = function(position, opt_options){};
/**
 * @return {H.geo.Point}
 */
H.map.AbstractMarker.prototype.getPosition = function(){};
/**
 * @param {H.geo.IPoint} position 
 * @return {H.map.AbstractMarker}
 */
H.map.AbstractMarker.prototype.setPosition = function(position){};
/**
 * @return {!(H.map.Icon|H.map.DomIcon)}
 */
H.map.AbstractMarker.prototype.getIcon = function(){};
/**
 * @param {!(H.map.Icon|H.map.DomIcon)} icon 
 * @return {H.map.AbstractMarker}
 */
H.map.AbstractMarker.prototype.setIcon = function(icon){};
/**
 * @return {number}
 */
H.map.AbstractMarker.prototype.getId = function(){};
/**
 * @param {boolean=} opt_visibility 
 * @return {H.map.Object}
 */
H.map.AbstractMarker.prototype.setVisibility = function(opt_visibility){};
/**
 * @param {boolean=} opt_effective 
 * @return {boolean}
 */
H.map.AbstractMarker.prototype.getVisibility = function(opt_effective){};
/**
 * @return {(number|undefined)}
 */
H.map.AbstractMarker.prototype.getZIndex = function(){};
/**
 * @param {(number|undefined)} zIndex 
 * @return {H.map.Object}
 */
H.map.AbstractMarker.prototype.setZIndex = function(zIndex){};
/**
 * @param {H.map.Object} other 
 * @return {number}
 */
H.map.AbstractMarker.prototype.compareZOrder = function(other){};
/**
 * @return {?H.map.Group}
 */
H.map.AbstractMarker.prototype.getParentGroup = function(){};
/**
 * @return {!H.map.Object}
 */
H.map.AbstractMarker.prototype.getRootGroup = function(){};
/**
 * @param {*} object 
 * @return {boolean}
 */
H.map.AbstractMarker.prototype.contains = function(object){};
/**
 * @return {?H.map.provider.ObjectProvider}
 */
H.map.AbstractMarker.prototype.getProvider = function(){};
/**
 * @return {H.map.provider.Invalidations}
 */
H.map.AbstractMarker.prototype.getInvalidations = function(){};
/**
 * @param {H.math.BitMask} flags 
 * @return {boolean}
 */
H.map.AbstractMarker.prototype.invalidate = function(flags){};
/**
 * @return {*}
 */
H.map.AbstractMarker.prototype.getData = function(){};
/**
 * @param {*} data 
 * @return {H.map.Object}
 */
H.map.AbstractMarker.prototype.setData = function(data){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.AbstractMarker.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.AbstractMarker.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.AbstractMarker.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.AbstractMarker.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.AbstractMarker.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.AbstractMarker.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.AbstractMarker.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {H.geo.IPoint} position 
 * @param {H.map.DomMarker.Options=} opt_options 
 * @extends {H.map.AbstractMarker}
 */
H.map.DomMarker = function(position, opt_options){};
/**
 * @return {H.geo.Point}
 */
H.map.DomMarker.prototype.getPosition = function(){};
/**
 * @param {H.geo.IPoint} position 
 * @return {H.map.AbstractMarker}
 */
H.map.DomMarker.prototype.setPosition = function(position){};
/**
 * @return {!(H.map.Icon|H.map.DomIcon)}
 */
H.map.DomMarker.prototype.getIcon = function(){};
/**
 * @param {!(H.map.Icon|H.map.DomIcon)} icon 
 * @return {H.map.AbstractMarker}
 */
H.map.DomMarker.prototype.setIcon = function(icon){};
/**
 * @return {number}
 */
H.map.DomMarker.prototype.getId = function(){};
/**
 * @param {boolean=} opt_visibility 
 * @return {H.map.Object}
 */
H.map.DomMarker.prototype.setVisibility = function(opt_visibility){};
/**
 * @param {boolean=} opt_effective 
 * @return {boolean}
 */
H.map.DomMarker.prototype.getVisibility = function(opt_effective){};
/**
 * @return {(number|undefined)}
 */
H.map.DomMarker.prototype.getZIndex = function(){};
/**
 * @param {(number|undefined)} zIndex 
 * @return {H.map.Object}
 */
H.map.DomMarker.prototype.setZIndex = function(zIndex){};
/**
 * @param {H.map.Object} other 
 * @return {number}
 */
H.map.DomMarker.prototype.compareZOrder = function(other){};
/**
 * @return {?H.map.Group}
 */
H.map.DomMarker.prototype.getParentGroup = function(){};
/**
 * @return {!H.map.Object}
 */
H.map.DomMarker.prototype.getRootGroup = function(){};
/**
 * @param {*} object 
 * @return {boolean}
 */
H.map.DomMarker.prototype.contains = function(object){};
/**
 * @return {?H.map.provider.ObjectProvider}
 */
H.map.DomMarker.prototype.getProvider = function(){};
/**
 * @return {H.map.provider.Invalidations}
 */
H.map.DomMarker.prototype.getInvalidations = function(){};
/**
 * @param {H.math.BitMask} flags 
 * @return {boolean}
 */
H.map.DomMarker.prototype.invalidate = function(flags){};
/**
 * @return {*}
 */
H.map.DomMarker.prototype.getData = function(){};
/**
 * @param {*} data 
 * @return {H.map.Object}
 */
H.map.DomMarker.prototype.setData = function(data){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.DomMarker.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.DomMarker.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.DomMarker.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.DomMarker.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.DomMarker.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.DomMarker.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.DomMarker.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {H.geo.IPoint} position 
 * @param {H.map.Marker.Options=} opt_options 
 * @extends {H.map.AbstractMarker}
 */
H.map.Marker = function(position, opt_options){};
/**
 * @return {H.geo.Point}
 */
H.map.Marker.prototype.getPosition = function(){};
/**
 * @param {H.geo.IPoint} position 
 * @return {H.map.AbstractMarker}
 */
H.map.Marker.prototype.setPosition = function(position){};
/**
 * @return {!(H.map.Icon|H.map.DomIcon)}
 */
H.map.Marker.prototype.getIcon = function(){};
/**
 * @param {!(H.map.Icon|H.map.DomIcon)} icon 
 * @return {H.map.AbstractMarker}
 */
H.map.Marker.prototype.setIcon = function(icon){};
/**
 * @return {number}
 */
H.map.Marker.prototype.getId = function(){};
/**
 * @param {boolean=} opt_visibility 
 * @return {H.map.Object}
 */
H.map.Marker.prototype.setVisibility = function(opt_visibility){};
/**
 * @param {boolean=} opt_effective 
 * @return {boolean}
 */
H.map.Marker.prototype.getVisibility = function(opt_effective){};
/**
 * @return {(number|undefined)}
 */
H.map.Marker.prototype.getZIndex = function(){};
/**
 * @param {(number|undefined)} zIndex 
 * @return {H.map.Object}
 */
H.map.Marker.prototype.setZIndex = function(zIndex){};
/**
 * @param {H.map.Object} other 
 * @return {number}
 */
H.map.Marker.prototype.compareZOrder = function(other){};
/**
 * @return {?H.map.Group}
 */
H.map.Marker.prototype.getParentGroup = function(){};
/**
 * @return {!H.map.Object}
 */
H.map.Marker.prototype.getRootGroup = function(){};
/**
 * @param {*} object 
 * @return {boolean}
 */
H.map.Marker.prototype.contains = function(object){};
/**
 * @return {?H.map.provider.ObjectProvider}
 */
H.map.Marker.prototype.getProvider = function(){};
/**
 * @return {H.map.provider.Invalidations}
 */
H.map.Marker.prototype.getInvalidations = function(){};
/**
 * @param {H.math.BitMask} flags 
 * @return {boolean}
 */
H.map.Marker.prototype.invalidate = function(flags){};
/**
 * @return {*}
 */
H.map.Marker.prototype.getData = function(){};
/**
 * @param {*} data 
 * @return {H.map.Object}
 */
H.map.Marker.prototype.setData = function(data){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.Marker.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.Marker.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Marker.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.Marker.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.Marker.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.Marker.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.Marker.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @const
 */
H.map.provider = {};
/**
 * @constructor
 */
H.map.provider.Invalidations = function(){};
/**
 * @type {H.map.provider.Invalidations.Mark} */
H.map.provider.Invalidations.MARK_INITIAL;
/**
 * @param {H.map.provider.Invalidations.Mark} mark 
 * @param {H.math.BitMask} types 
 */
H.map.provider.Invalidations.prototype.update = function(mark, types){};
/**
 * @return {H.map.provider.Invalidations.Mark}
 */
H.map.provider.Invalidations.prototype.getMark = function(){};
/**
 * @param {H.map.provider.Invalidations.Mark} since 
 * @return {boolean}
 */
H.map.provider.Invalidations.prototype.isAny = function(since){};
/**
 * @param {H.map.provider.Invalidations.Mark} since 
 * @return {boolean}
 */
H.map.provider.Invalidations.prototype.isVisual = function(since){};
/**
 * @param {H.map.provider.Invalidations.Mark} since 
 * @return {boolean}
 */
H.map.provider.Invalidations.prototype.isSpatial = function(since){};
/**
 * @param {H.map.provider.Invalidations.Mark} since 
 * @return {boolean}
 */
H.map.provider.Invalidations.prototype.isAdd = function(since){};
/**
 * @param {H.map.provider.Invalidations.Mark} since 
 * @return {boolean}
 */
H.map.provider.Invalidations.prototype.isRemove = function(since){};
/**
 * @param {H.map.provider.Invalidations.Mark} since 
 * @return {boolean}
 */
H.map.provider.Invalidations.prototype.isZOrder = function(since){};
/**
 * @enum {number}
 */
H.map.provider.Invalidations.Flag = {
  NONE: '',
  VISUAL: '',
  SPATIAL: '',
  ADD: '',
  REMOVE: '',
  Z_ORDER: ''
};
/**
 * @constructor
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @param {*} data 
 */
H.map.provider.Tile = function(x, y, z, data){};
/**
 * @constructor
 * @param {string} key 
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @param {number} tileSize 
 * @param {number} pixelRatio 
 * @param {H.map.provider.ObjectProvider} objectProvider 
 * @extends {H.map.provider.Tile}
 */
H.map.provider.SpatialTile = function(key, x, y, z, tileSize, pixelRatio, objectProvider){};
/**
 * @return {H.math.Rect}
 */
H.map.provider.SpatialTile.prototype.getPxClipRect = function(){};
/**
 * @return {H.geo.Rect}
 */
H.map.provider.SpatialTile.prototype.getGeoClipRect = function(){};
/**
 * @return {H.geo.PixelProjection}
 */
H.map.provider.SpatialTile.prototype.getPxProj = function(){};
/**
 * @return {number}
 */
H.map.provider.SpatialTile.prototype.getPixelRatio = function(){};
/**
 * @return {boolean}
 */
H.map.provider.SpatialTile.prototype.isCanvasValid = function(){};
/**
 * @return {HTMLCanvasElement}
 */
H.map.provider.SpatialTile.prototype.releaseCanvas = function(){};
/**
 * @return {Object}
 */
H.map.provider.SpatialTile.prototype.releaseData = function(){};
/**
 * @return {Array.<H.map.Spatial>}
 */
H.map.provider.SpatialTile.prototype.getObjects = function(){};
/**
 * @param {HTMLCanvasElement} canvas 
 * @return {boolean}
 */
H.map.provider.SpatialTile.prototype.render = function(canvas){};
/**
 * @constructor
 * @param {H.map.provider.Provider.Options=} opt_options 
 * @extends {H.util.EventTarget}
 */
H.map.provider.Provider = function(opt_options){};
/**
 * @param {Object=} opt_target 
 */
H.map.provider.Provider.prototype.dispatchUpdate = function(opt_target){};
/**
 * @param {H.geo.Rect} bounds 
 * @param {number} level 
 * @return {?Array.<H.map.ICopyright>}
 */
H.map.provider.Provider.prototype.getCopyrights = function(bounds, level){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.provider.Provider.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.provider.Provider.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.provider.Provider.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.provider.Provider.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.provider.Provider.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.provider.Provider.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.provider.Provider.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {H.map.provider.TileProvider.Options} options 
 * @extends {H.map.provider.Provider}
 */
H.map.provider.TileProvider = function(options){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @param {(HTMLImageElement|HTMLCanvasElement)} data 
 * @param {Object.<string,*>=} opt_options 
 * @return {H.map.provider.Tile}
 */
H.map.provider.TileProvider.prototype.createTileInternal = function(x, y, z, data, opt_options){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @return {string}
 */
H.map.provider.TileProvider.prototype.getTileKey = function(x, y, z){};
/**
 * @param {Object=} opt_target 
 */
H.map.provider.TileProvider.prototype.dispatchUpdate = function(opt_target){};
/**
 * @param {H.geo.Rect} bounds 
 * @param {number} level 
 * @return {?Array.<H.map.ICopyright>}
 */
H.map.provider.TileProvider.prototype.getCopyrights = function(bounds, level){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.provider.TileProvider.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.provider.TileProvider.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.provider.TileProvider.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.provider.TileProvider.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.provider.TileProvider.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.provider.TileProvider.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.provider.TileProvider.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {H.map.provider.ObjectProvider} objectProvider 
 * @param {H.map.provider.SpatialTileProvider.Options} options 
 * @extends {H.map.provider.TileProvider}
 */
H.map.provider.SpatialTileProvider = function(objectProvider, options){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @param {(HTMLImageElement|HTMLCanvasElement)} data 
 * @param {Object.<string,*>=} opt_options 
 * @return {H.map.provider.Tile}
 */
H.map.provider.SpatialTileProvider.prototype.createTileInternal = function(x, y, z, data, opt_options){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @return {string}
 */
H.map.provider.SpatialTileProvider.prototype.getTileKey = function(x, y, z){};
/**
 * @param {Object=} opt_target 
 */
H.map.provider.SpatialTileProvider.prototype.dispatchUpdate = function(opt_target){};
/**
 * @param {H.geo.Rect} bounds 
 * @param {number} level 
 * @return {?Array.<H.map.ICopyright>}
 */
H.map.provider.SpatialTileProvider.prototype.getCopyrights = function(bounds, level){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.provider.SpatialTileProvider.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.provider.SpatialTileProvider.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.provider.SpatialTileProvider.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.provider.SpatialTileProvider.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.provider.SpatialTileProvider.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.provider.SpatialTileProvider.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.provider.SpatialTileProvider.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {H.map.provider.TileProvider.Options} options 
 * @extends {H.map.provider.TileProvider}
 */
H.map.provider.RemoteTileProvider = function(options){};
/**
 * @type {H.util.Cache} */
H.map.provider.RemoteTileProvider.cache;
/**
 * @return {H.util.Cache}
 */
H.map.provider.RemoteTileProvider.prototype.getCache = function(){};
/**
 * @param {string} entryKey 
 * @return {boolean}
 */
H.map.provider.RemoteTileProvider.prototype.cacheFilter = function(entryKey){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @param {function((Array.<H.map.Object>|HTMLImageElement|HTMLCanvasElement|null),*=)} onResponse 
 * @param {function(string=)} onError 
 * @return {H.util.ICancelable}
 */
H.map.provider.RemoteTileProvider.prototype.requestInternal = function(x, y, z, onResponse, onError){};
/**
 * @param {boolean} hard 
 */
H.map.provider.RemoteTileProvider.prototype.reload = function(hard){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @param {(HTMLImageElement|HTMLCanvasElement)} data 
 * @param {Object.<string,*>=} opt_options 
 * @return {H.map.provider.Tile}
 */
H.map.provider.RemoteTileProvider.prototype.createTileInternal = function(x, y, z, data, opt_options){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @return {string}
 */
H.map.provider.RemoteTileProvider.prototype.getTileKey = function(x, y, z){};
/**
 * @param {Object=} opt_target 
 */
H.map.provider.RemoteTileProvider.prototype.dispatchUpdate = function(opt_target){};
/**
 * @param {H.geo.Rect} bounds 
 * @param {number} level 
 * @return {?Array.<H.map.ICopyright>}
 */
H.map.provider.RemoteTileProvider.prototype.getCopyrights = function(bounds, level){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.provider.RemoteTileProvider.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.provider.RemoteTileProvider.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.provider.RemoteTileProvider.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.provider.RemoteTileProvider.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.provider.RemoteTileProvider.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.provider.RemoteTileProvider.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.provider.RemoteTileProvider.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {H.map.provider.ImageTileProvider.Options} options 
 * @extends {H.map.provider.RemoteTileProvider}
 */
H.map.provider.ImageTileProvider = function(options){};
/**
 * @return {H.util.Cache}
 */
H.map.provider.ImageTileProvider.prototype.getCache = function(){};
/**
 * @param {string} entryKey 
 * @return {boolean}
 */
H.map.provider.ImageTileProvider.prototype.cacheFilter = function(entryKey){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @param {function((Array.<H.map.Object>|HTMLImageElement|HTMLCanvasElement|null),*=)} onResponse 
 * @param {function(string=)} onError 
 * @return {H.util.ICancelable}
 */
H.map.provider.ImageTileProvider.prototype.requestInternal = function(x, y, z, onResponse, onError){};
/**
 * @param {boolean} hard 
 */
H.map.provider.ImageTileProvider.prototype.reload = function(hard){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @param {(HTMLImageElement|HTMLCanvasElement)} data 
 * @param {Object.<string,*>=} opt_options 
 * @return {H.map.provider.Tile}
 */
H.map.provider.ImageTileProvider.prototype.createTileInternal = function(x, y, z, data, opt_options){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @return {string}
 */
H.map.provider.ImageTileProvider.prototype.getTileKey = function(x, y, z){};
/**
 * @param {Object=} opt_target 
 */
H.map.provider.ImageTileProvider.prototype.dispatchUpdate = function(opt_target){};
/**
 * @param {H.geo.Rect} bounds 
 * @param {number} level 
 * @return {?Array.<H.map.ICopyright>}
 */
H.map.provider.ImageTileProvider.prototype.getCopyrights = function(bounds, level){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.provider.ImageTileProvider.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.provider.ImageTileProvider.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.provider.ImageTileProvider.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.provider.ImageTileProvider.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.provider.ImageTileProvider.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.provider.ImageTileProvider.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.provider.ImageTileProvider.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {H.map.provider.Provider.Options=} opt_options 
 * @extends {H.map.provider.Provider}
 */
H.map.provider.ObjectProvider = function(opt_options){};
/**
 * @param {H.map.Object.Type=} opt_type 
 * @return {H.map.provider.Invalidations}
 */
H.map.provider.ObjectProvider.prototype.getInvalidations = function(opt_type){};
/**
 * @param {!H.map.Object} mapObject 
 * @param {H.math.BitMask} changes 
 */
H.map.provider.ObjectProvider.prototype.invalidateObject = function(mapObject, changes){};
/**
 * @return {boolean}
 */
H.map.provider.ObjectProvider.prototype.providesSpatials = function(){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {number} zoomLevel 
 * @param {boolean} visiblesOnly 
 * @param {boolean} cacheOnly 
 * @return {Array.<H.map.Spatial>}
 */
H.map.provider.ObjectProvider.prototype.requestSpatials = function(geoRect, zoomLevel, visiblesOnly, cacheOnly){};
/**
 * @param {H.map.provider.SpatialTile} tile 
 * @param {boolean} visiblesOnly 
 * @param {boolean} cacheOnly 
 * @return {Array.<H.map.Spatial>}
 */
H.map.provider.ObjectProvider.prototype.requestSpatialsByTile = function(tile, visiblesOnly, cacheOnly){};
/**
 * @return {boolean}
 */
H.map.provider.ObjectProvider.prototype.providesMarkers = function(){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {number} zoomLevel 
 * @param {boolean} visiblesOnly 
 * @param {boolean} cacheOnly 
 * @return {Array.<H.map.Marker>}
 */
H.map.provider.ObjectProvider.prototype.requestMarkers = function(geoRect, zoomLevel, visiblesOnly, cacheOnly){};
/**
 * @return {boolean}
 */
H.map.provider.ObjectProvider.prototype.providesDomMarkers = function(){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {number} zoomLevel 
 * @param {boolean} visiblesOnly 
 * @param {boolean} cacheOnly 
 * @return {Array.<H.map.DomMarker>}
 */
H.map.provider.ObjectProvider.prototype.requestDomMarkers = function(geoRect, zoomLevel, visiblesOnly, cacheOnly){};
/**
 * @param {Object=} opt_target 
 */
H.map.provider.ObjectProvider.prototype.dispatchUpdate = function(opt_target){};
/**
 * @param {H.geo.Rect} bounds 
 * @param {number} level 
 * @return {?Array.<H.map.ICopyright>}
 */
H.map.provider.ObjectProvider.prototype.getCopyrights = function(bounds, level){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.provider.ObjectProvider.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.provider.ObjectProvider.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.provider.ObjectProvider.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.provider.ObjectProvider.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.provider.ObjectProvider.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.provider.ObjectProvider.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.provider.ObjectProvider.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {H.map.provider.Provider.Options=} opt_options 
 * @extends {H.map.provider.ObjectProvider}
 */
H.map.provider.LocalObjectProvider = function(opt_options){};
/**
 * @return {H.map.Group}
 */
H.map.provider.LocalObjectProvider.prototype.getRootGroup = function(){};
/**
 * @param {!H.map.Object} object 
 */
H.map.provider.LocalObjectProvider.prototype.removeObject = function(object){};
/**
 * @param {H.map.Object.Type=} opt_type 
 * @return {H.map.provider.Invalidations}
 */
H.map.provider.LocalObjectProvider.prototype.getInvalidations = function(opt_type){};
/**
 * @param {!H.map.Object} mapObject 
 * @param {H.math.BitMask} changes 
 */
H.map.provider.LocalObjectProvider.prototype.invalidateObject = function(mapObject, changes){};
/**
 * @return {boolean}
 */
H.map.provider.LocalObjectProvider.prototype.providesSpatials = function(){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {number} zoomLevel 
 * @param {boolean} visiblesOnly 
 * @param {boolean} cacheOnly 
 * @return {Array.<H.map.Spatial>}
 */
H.map.provider.LocalObjectProvider.prototype.requestSpatials = function(geoRect, zoomLevel, visiblesOnly, cacheOnly){};
/**
 * @param {H.map.provider.SpatialTile} tile 
 * @param {boolean} visiblesOnly 
 * @param {boolean} cacheOnly 
 * @return {Array.<H.map.Spatial>}
 */
H.map.provider.LocalObjectProvider.prototype.requestSpatialsByTile = function(tile, visiblesOnly, cacheOnly){};
/**
 * @return {boolean}
 */
H.map.provider.LocalObjectProvider.prototype.providesMarkers = function(){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {number} zoomLevel 
 * @param {boolean} visiblesOnly 
 * @param {boolean} cacheOnly 
 * @return {Array.<H.map.Marker>}
 */
H.map.provider.LocalObjectProvider.prototype.requestMarkers = function(geoRect, zoomLevel, visiblesOnly, cacheOnly){};
/**
 * @return {boolean}
 */
H.map.provider.LocalObjectProvider.prototype.providesDomMarkers = function(){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {number} zoomLevel 
 * @param {boolean} visiblesOnly 
 * @param {boolean} cacheOnly 
 * @return {Array.<H.map.DomMarker>}
 */
H.map.provider.LocalObjectProvider.prototype.requestDomMarkers = function(geoRect, zoomLevel, visiblesOnly, cacheOnly){};
/**
 * @param {Object=} opt_target 
 */
H.map.provider.LocalObjectProvider.prototype.dispatchUpdate = function(opt_target){};
/**
 * @param {H.geo.Rect} bounds 
 * @param {number} level 
 * @return {?Array.<H.map.ICopyright>}
 */
H.map.provider.LocalObjectProvider.prototype.getCopyrights = function(bounds, level){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.provider.LocalObjectProvider.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.provider.LocalObjectProvider.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.provider.LocalObjectProvider.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.provider.LocalObjectProvider.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.provider.LocalObjectProvider.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.provider.LocalObjectProvider.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.provider.LocalObjectProvider.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {H.map.provider.MarkerTileProvider.Options} options 
 * @extends {H.map.provider.RemoteTileProvider}
 */
H.map.provider.MarkerTileProvider = function(options){};
/**
 * @param {!H.map.AbstractMarker} marker 
 * @param {H.math.BitMask} flags 
 */
H.map.provider.MarkerTileProvider.prototype.invalidateObject = function(marker, flags){};
/**
 * @return {boolean}
 */
H.map.provider.MarkerTileProvider.prototype.providesDomMarkers = function(){};
/**
 * @return {H.util.Cache}
 */
H.map.provider.MarkerTileProvider.prototype.getCache = function(){};
/**
 * @param {string} entryKey 
 * @return {boolean}
 */
H.map.provider.MarkerTileProvider.prototype.cacheFilter = function(entryKey){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @param {function((Array.<H.map.Object>|HTMLImageElement|HTMLCanvasElement|null),*=)} onResponse 
 * @param {function(string=)} onError 
 * @return {H.util.ICancelable}
 */
H.map.provider.MarkerTileProvider.prototype.requestInternal = function(x, y, z, onResponse, onError){};
/**
 * @param {boolean} hard 
 */
H.map.provider.MarkerTileProvider.prototype.reload = function(hard){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @param {(HTMLImageElement|HTMLCanvasElement)} data 
 * @param {Object.<string,*>=} opt_options 
 * @return {H.map.provider.Tile}
 */
H.map.provider.MarkerTileProvider.prototype.createTileInternal = function(x, y, z, data, opt_options){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @return {string}
 */
H.map.provider.MarkerTileProvider.prototype.getTileKey = function(x, y, z){};
/**
 * @param {Object=} opt_target 
 */
H.map.provider.MarkerTileProvider.prototype.dispatchUpdate = function(opt_target){};
/**
 * @param {H.geo.Rect} bounds 
 * @param {number} level 
 * @return {?Array.<H.map.ICopyright>}
 */
H.map.provider.MarkerTileProvider.prototype.getCopyrights = function(bounds, level){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.map.provider.MarkerTileProvider.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.map.provider.MarkerTileProvider.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.provider.MarkerTileProvider.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.map.provider.MarkerTileProvider.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.map.provider.MarkerTileProvider.prototype.dispatchEvent = function(evt){};
/**
 */
H.map.provider.MarkerTileProvider.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.map.provider.MarkerTileProvider.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @constructor
 * @param {Element} element 
 * @param {H.map.layer.Layer} baseLayer 
 * @param {H.Map.Options=} opt_options 
 * @extends {H.util.EventTarget}
 */
H.Map = function(element, baseLayer, opt_options){};
/**
 * @return {Element}
 */
H.Map.prototype.getElement = function(){};
/**
 * @param {H.geo.IPoint} center 
 * @param {boolean=} opt_animate 
 * @return {H.Map}
 */
H.Map.prototype.setCenter = function(center, opt_animate){};
/**
 * @return {H.geo.Point}
 */
H.Map.prototype.getCenter = function(){};
/**
 * @param {number} zoom 
 * @param {boolean=} opt_animate 
 * @return {H.Map}
 */
H.Map.prototype.setZoom = function(zoom, opt_animate){};
/**
 * @return {number}
 */
H.Map.prototype.getZoom = function(){};
/**
 * @param {number} zoom 
 * @param {number} x 
 * @param {number} y 
 */
H.Map.prototype.zoomAt = function(zoom, x, y){};
/**
 * @param {H.geo.Rect} boundingRect 
 * @param {boolean=} opt_animate 
 * @return {H.Map}
 */
H.Map.prototype.setViewBounds = function(boundingRect, opt_animate){};
/**
 * @return {H.geo.Rect}
 */
H.Map.prototype.getViewBounds = function(){};
/**
 * @param {H.geo.Rect} rect 
 * @return {H.map.ViewModel.CameraData}
 */
H.Map.prototype.getCameraDataForBounds = function(rect){};
/**
 * @return {H.map.ViewPort}
 */
H.Map.prototype.getViewPort = function(){};
/**
 * @return {H.map.ViewModel}
 */
H.Map.prototype.getViewModel = function(){};
/**
 * @return {H.map.DataModel}
 */
H.Map.prototype.getLayers = function(){};
/**
 * @return {H.map.Imprint}
 */
H.Map.prototype.getImprint = function(){};
/**
 * @param {function(HTMLCanvasElement=)} callback 
 * @param {Array.<H.util.ICapturable>=} opt_capturables 
 * @param {number=} opt_x1 
 * @param {number=} opt_y1 
 * @param {number=} opt_x2 
 * @param {number=} opt_y2 
 */
H.Map.prototype.capture = function(callback, opt_capturables, opt_x1, opt_y1, opt_x2, opt_y2){};
/**
 * @return {H.map.render.RenderEngine}
 */
H.Map.prototype.getEngine = function(){};
/**
 * @param {H.Map.EngineType} type 
 * @return {H.Map}
 */
H.Map.prototype.setEngineType = function(type){};
/**
 * @param {H.map.layer.Layer} layer 
 * @param {number=} opt_idx 
 * @return {H.Map}
 */
H.Map.prototype.addLayer = function(layer, opt_idx){};
/**
 * @param {H.map.layer.Layer} layer 
 * @return {H.Map}
 */
H.Map.prototype.removeLayer = function(layer){};
/**
 * @param {H.map.layer.Layer} layer 
 * @return {H.Map}
 */
H.Map.prototype.setBaseLayer = function(layer){};
/**
 * @return {?H.map.layer.Layer}
 */
H.Map.prototype.getBaseLayer = function(){};
/**
 * @param {H.geo.IPoint} geoPoint 
 * @return {H.math.Point}
 */
H.Map.prototype.geoToScreen = function(geoPoint){};
/**
 * @param {number} x 
 * @param {number} y 
 * @return {H.geo.Point}
 */
H.Map.prototype.screenToGeo = function(x, y){};
/**
 * @param {number} x 
 * @param {number} y 
 * @return {H.map.ViewModel.CameraData}
 */
H.Map.prototype.screenToCameraData = function(x, y){};
/**
 * @param {!H.map.Object} mapObject 
 * @return {!H.map.Object}
 */
H.Map.prototype.addObject = function(mapObject){};
/**
 * @param {!H.map.Object} mapObject 
 * @return {!H.map.Object}
 */
H.Map.prototype.removeObject = function(mapObject){};
/**
 * @return {Array.<H.map.Object>}
 */
H.Map.prototype.getObjects = function(){};
/**
 * @param {Array.<!H.map.Object>} mapObjects 
 * @return {H.Map}
 */
H.Map.prototype.addObjects = function(mapObjects){};
/**
 * @param {(Array.<H.map.Object>|H.map.Group)} mapObjects 
 * @return {H.Map}
 */
H.Map.prototype.removeObjects = function(mapObjects){};
/**
 * @param {number} x 
 * @param {number} y 
 * @return {?H.map.Object}
 */
H.Map.prototype.getObjectAt = function(x, y){};
/**
 * @param {number} x 
 * @param {number} y 
 * @return {Array.<!H.map.Object>}
 */
H.Map.prototype.getObjectsAt = function(x, y){};
/**
 * @param {H.util.EventTarget} parent 
 */
H.Map.prototype.setParentEventTarget = function(parent){};
/**
 * @return {?H.util.EventTarget}
 */
H.Map.prototype.getParentEventTarget = function(){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.Map.prototype.addEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {string} type 
 * @param {!Function} handler 
 * @param {boolean=} opt_capture 
 * @param {Object=} opt_scope 
 */
H.Map.prototype.removeEventListener = function(type, handler, opt_capture, opt_scope){};
/**
 * @param {(H.util.Event|string)} evt 
 */
H.Map.prototype.dispatchEvent = function(evt){};
/**
 */
H.Map.prototype.dispose = function(){};
/**
 * @param {!Function} callback 
 * @param {Object=} opt_scope 
 */
H.Map.prototype.addOnDisposeCallback = function(callback, opt_scope){};
/**
 * @enum {number}
 */
H.Map.EngineType = {
  P2D: '',
  PANORAMA: ''
};
/**
 * @const
 */
H.net = {};
/**
 * @type {H.net.ImageLoader} */
H.net.images;
/**
 * @constructor
 * @param {number=} opt_maxConcurrent 
 * @param {boolean=} opt_useFrames 
 * @param {HTMLDocument=} opt_doc 
 */
H.net.ImageLoader = function(opt_maxConcurrent, opt_useFrames, opt_doc){};
/**
 * @param {string} url 
 * @param {function(HTMLImageElement)} callback 
 * @param {function(string)=} opt_errback 
 * @param {string=} opt_crossOrigin 
 * @return {H.util.AsyncQueue.Task}
 */
H.net.ImageLoader.prototype.load = function(url, callback, opt_errback, opt_crossOrigin){};
/**
 * @constructor
 * @param {string} url 
 * @param {function(string=,string=)} callback 
 * @param {H.net.Xhr.Options=} opt_options 
 */
H.net.Xhr = function(url, callback, opt_options){};
/**
 */
H.net.Xhr.prototype.abort = function(){};
/**
 * @typedef {number}
 */
H.math.BitMask;
/**
 * @typedef {number}
 */
H.geo.Latitude;
/**
 * @typedef {number}
 */
H.geo.Longitude;
/**
 * @typedef {(number|undefined)}
 */
H.geo.Altitude;
/**
 * @typedef {{fillColor:(string|undefined),width:(number|undefined),length:(number|undefined),frequency:(number|undefined)}}
 */
H.map.ArrowStyle.Options;
/**
 * @typedef {{min:(number|undefined),max:(number|undefined),visibility:(boolean|undefined),zIndex:(number|undefined),provider:(H.map.provider.ObjectProvider|null|undefined),data:*}}
 */
H.map.Object.Options;
/**
 * @typedef {string}
 */
H.map.SpatialStyle.LineCap;
/**
 * @typedef {string}
 */
H.map.SpatialStyle.LineJoin;
/**
 * @typedef {{strokeColor:(string|undefined),fillColor:(string|undefined),lineWidth:(number|undefined),lineCap:(H.map.SpatialStyle.LineCap|undefined),lineJoin:(H.map.SpatialStyle.LineJoin|undefined),miterLimit:(number|undefined),lineDash:(Array.<number>|undefined),lineDashOffset:(number|undefined)}}
 */
H.map.SpatialStyle.Options;
/**
 * @typedef {{style:(H.map.SpatialStyle|H.map.SpatialStyle.Options|undefined),visibility:(boolean|undefined),zIndex:(number|undefined),min:(number|undefined),max:(number|undefined),provider:(H.map.provider.ObjectProvider|null|undefined)}}
 */
H.map.Spatial.Options;
/**
 * @typedef {{style:(H.map.SpatialStyle|H.map.SpatialStyle.Options|undefined),arrows:(H.map.ArrowStyle|H.map.ArrowStyle.Options|undefined),visibility:(boolean|undefined),zIndex:(number|undefined),min:(number|undefined),max:(number|undefined),provider:(H.map.provider.ObjectProvider|null|undefined)}}
 */
H.map.Polyline.Options;
/**
 * @typedef {{renderBaseBackground:(Object|undefined),pixelRatio:(number),enableSubpixelRendering:(boolean|undefined)}}
 */
H.map.render.p2d.RenderEngine.Options;
/**
 * @typedef {{invert:(boolean|undefined),font:(string|undefined),href:(string|undefined)}}
 */
H.map.Imprint.Options;
/**
 * @typedef {{camera:(H.map.ViewModel.CameraData|undefined),zoom:(number|undefined),animate:(boolean|undefined)}}
 */
H.map.ViewModel.RequestedData;
/**
 * @typedef {{zoom:(number|undefined),position:(H.geo.IPoint),pitch:(number|undefined),yaw:(number|undefined),roll:(number|undefined)}}
 */
H.map.ViewModel.CameraData;
/**
 * @typedef {{min:(number|undefined),max:(number|undefined),visibility:(boolean|undefined),zIndex:(number|undefined),provider:(H.map.provider.ObjectProvider|null|undefined),data:*,objects:((Array.<H.map.Object>|undefined))}}
 */
H.map.Group.Options;
/**
 * @typedef {{top:number,right:number,bottom:number,left:number}}
 */
H.map.ViewPort.Padding;
/**
 * @typedef {{margin:(number|undefined),padding:(H.map.ViewPort.Padding|undefined),fixedCenter:(boolean|undefined)}}
 */
H.map.ViewPort.Options;
/**
 * @typedef {{size:(H.math.ISize|undefined),anchor:(H.math.IPoint|undefined),hitArea:(H.map.HitArea|undefined)}}
 */
H.map.Icon.Options;
/**
 * @typedef {{min:(number|undefined),max:(number|undefined),dark:(boolean|undefined),projection:(H.geo.IProjection|undefined),minWorldSize:(number|undefined)}}
 */
H.map.layer.Layer.Options;
/**
 * @typedef {{total:number,tiles:Array.<H.map.provider.Tile>}}
 */
H.map.layer.ITileLayer.Response;
/**
 * @typedef {{projection:(H.geo.IProjection|undefined),opacity:(number|undefined)}}
 */
H.map.layer.ITileLayer.Options;
/**
 * @typedef {{total:number,markers:Array.<H.map.AbstractMarker>}}
 */
H.map.layer.IMarkerLayer.Response;
/**
 * @typedef {{total:number,requested:number,markers:Array.<H.map.AbstractMarker>}}
 */
H.map.layer.IMarkerLayer.TiledResponse;
/**
 * @typedef {{tileSize:(number|undefined),tileCacheSize:(number|undefined),dataCacheSize:(number|undefined),pixelRatio:(number|undefined)}}
 */
H.map.layer.ObjectLayer.Options;
/**
 * @typedef {{style:H.map.SpatialStyle,visibility:boolean,precision:number,zIndex:(number|undefined),min:(number|undefined),max:(number|undefined),provider:(H.map.provider.ObjectProvider|null|undefined)}}
 */
H.map.Circle.Options;
/**
 * @typedef {{onAttach:(function(Element,H.map.DomIcon,H.map.DomMarker)|undefined),onDetach:(function(Element,H.map.DomIcon,H.map.DomMarker)|undefined)}}
 */
H.map.DomIcon.Options;
/**
 * @typedef {{min:(number|undefined),max:(number|undefined),visibility:(boolean|undefined),zIndex:(number|undefined),provider:(H.map.provider.ObjectProvider|null|undefined),icon:(H.map.Icon|H.map.DomIcon|undefined)}}
 */
H.map.AbstractMarker.Options;
/**
 * @typedef {{min:(number|undefined),max:(number|undefined),visibility:(boolean|undefined),zIndex:(number|undefined),provider:(H.map.provider.ObjectProvider|null|undefined),icon:(H.map.DomIcon|undefined)}}
 */
H.map.DomMarker.Options;
/**
 * @typedef {{min:(number|undefined),max:(number|undefined),visibility:(boolean|undefined),zIndex:(number|undefined),provider:(H.map.provider.ObjectProvider|null|undefined),icon:(H.map.Icon|undefined)}}
 */
H.map.Marker.Options;
/**
 * @typedef {number}
 */
H.map.provider.Invalidations.Mark;
/**
 * @typedef {{min:(number|undefined),max:(number|undefined)}}
 */
H.map.provider.Provider.Options;
/**
 * @typedef {{tileSize:(number|undefined),min:(number|undefined),max:(number|undefined)}}
 */
H.map.provider.TileProvider.Options;
/**
 * @typedef {{min:(number|undefined),max:(number|undefined)}}
 */
H.map.provider.RemoteTileProvider.Options;
/**
 * @typedef {{min:(number|undefined),max:(number|undefined),getURL:function(number,number,number):string,crossOrigin:(string|undefined),tileSize:(number|undefined)}}
 */
H.map.provider.ImageTileProvider.Options;
/**
 * @typedef {{min:(number|undefined),max:(number|undefined),requestData:(function(number,number,number,function(Array.<H.map.AbstractMarker>),Function):H.util.ICancelable),providesDomMarkers:(boolean|undefined)}}
 */
H.map.provider.MarkerTileProvider.Options;
/**
 * @typedef {{center:(H.geo.IPoint|undefined),zoom:(number|undefined),bounds:(H.geo.Rect|undefined),layers:(Array.<H.map.layer.Layer>|undefined),engineType:(H.Map.EngineType|undefined),pixelRatio:(number|undefined),imprint:(?H.map.Imprint.Options|undefined),renderBaseBackground:(H.Map.BackgroundRange|undefined),autoColor:(boolean|undefined),margin:(number|undefined),padding:(H.map.ViewPort.Padding|undefined),fixedCenter:(boolean|undefined)}}
 */
H.Map.Options;
/**
 * @typedef {{lower:(number),higher:(number)}}
 */
H.Map.BackgroundRange;
