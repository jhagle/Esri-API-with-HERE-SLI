/**
 * @const
 */
H.data = {};
/**
 * @return {Object}
 */
H.data.buildInfo = function(){};
/**
 * @constructor
 * @param {string} url 
 * @extends {H.util.EventTarget}
 */
H.data.AbstractReader = function(url){};
/**
 * @return {H.map.layer.ObjectLayer}
 */
H.data.AbstractReader.prototype.getLayer = function(){};
/**
 * @return {Array.<H.map.Object>}
 */
H.data.AbstractReader.prototype.getParsedObjects = function(){};
/**
 * @return {string}
 */
H.data.AbstractReader.prototype.getUrl = function(){};
/**
 * @param {string} url 
 * @return {H.data.AbstractReader}
 */
H.data.AbstractReader.prototype.setUrl = function(url){};
/**
 * @return {H.data.AbstractReader.State}
 */
H.data.AbstractReader.prototype.getState = function(){};
/**
 */
H.data.AbstractReader.prototype.parse = function(){};
/**
 * @enum {number}
 */
H.data.AbstractReader.State = {
  ERROR: '',
  LOADING: '',
  VISIT: '',
  READY: ''
};
/**
 * @const
 */
H.data.geojson = {};
/**
 * @constructor
 * @param {string} url 
 * @param {H.data.geojson.Reader.Options=} opt_options 
 * @extends {H.data.AbstractReader}
 */
H.data.geojson.Reader = function(url, opt_options){};
/**
 * @return {H.map.layer.ObjectLayer}
 */
H.data.geojson.Reader.prototype.getLayer = function(){};
/**
 * @return {Array.<H.map.Object>}
 */
H.data.geojson.Reader.prototype.getParsedObjects = function(){};
/**
 * @return {string}
 */
H.data.geojson.Reader.prototype.getUrl = function(){};
/**
 * @param {string} url 
 * @return {H.data.AbstractReader}
 */
H.data.geojson.Reader.prototype.setUrl = function(url){};
/**
 * @return {H.data.AbstractReader.State}
 */
H.data.geojson.Reader.prototype.getState = function(){};
/**
 */
H.data.geojson.Reader.prototype.parse = function(){};
/**
 * @const
 */
H.data.kml = {};
/**
 * @constructor
 * @param {!Object} node 
 */
H.data.kml.HotSpot = function(node){};
/**
 * @constructor
 * @param {!Object} node 
 */
H.data.kml.Icon = function(node){};
/**
 * @constructor
 * @param {!Object} node 
 */
H.data.kml.IconStyle = function(node){};
/**
 * @constructor
 * @param {!Object} node 
 */
H.data.kml.BalloonStyle = function(node){};
/**
 * @constructor
 * @param {!Object} node 
 */
H.data.kml.ColorStyle = function(node){};
/**
 * @constructor
 * @param {!Object} node 
 */
H.data.kml.PolyStyle = function(node){};
/**
 * @constructor
 * @param {!Object} node 
 */
H.data.kml.LineStyle = function(node){};
/**
 * @constructor
 * @param {Node} node 
 */
H.data.kml.Style = function(node){};
/**
 * @constructor
 */
H.data.kml.StyleContainer = function(){};
/**
 * @param {(H.data.kml.Style|H.data.kml.StyleMap)} style 
 */
H.data.kml.StyleContainer.prototype.addStyle = function(style){};
/**
 * @param {string} id 
 * @param {boolean} highlighted 
 * @return {(undefined|H.data.kml.Style)}
 */
H.data.kml.StyleContainer.prototype.getStyleById = function(id, highlighted){};
/**
 * @constructor
 * @param {Node} node 
 * @param {H.data.kml.StyleContainer} stylesContainer 
 */
H.data.kml.Feature = function(node, stylesContainer){};
/**
 * @constructor
 * @param {!Object} node 
 * @param {H.data.kml.StyleContainer} styleContainer 
 */
H.data.kml.Pair = function(node, styleContainer){};
/**
 * @return {(undefined|H.data.kml.Style)}
 */
H.data.kml.Pair.prototype.getStyle = function(){};
/**
 * @constructor
 * @param {Node} node 
 * @param {H.data.kml.StyleContainer} styleContainer 
 */
H.data.kml.StyleMap = function(node, styleContainer){};
/**
 * @param {boolean} highlighted 
 * @return {H.data.kml.Style}
 */
H.data.kml.StyleMap.prototype.getStyle = function(highlighted){};
/**
 * @constructor
 * @param {!Object} node 
 */
H.data.kml.Point = function(node){};
/**
 * @constructor
 * @param {!Object} node 
 */
H.data.kml.Polygon = function(node){};
/**
 * @constructor
 * @param {!Object} node 
 */
H.data.kml.Line = function(node){};
/**
 * @constructor
 * @param {string} url 
 * @extends {H.data.AbstractReader}
 */
H.data.kml.Reader = function(url){};
/**
 * @return {H.map.layer.ObjectLayer}
 */
H.data.kml.Reader.prototype.getLayer = function(){};
/**
 * @return {Array.<H.map.Object>}
 */
H.data.kml.Reader.prototype.getParsedObjects = function(){};
/**
 * @return {string}
 */
H.data.kml.Reader.prototype.getUrl = function(){};
/**
 * @param {string} url 
 * @return {H.data.AbstractReader}
 */
H.data.kml.Reader.prototype.setUrl = function(url){};
/**
 * @return {H.data.AbstractReader.State}
 */
H.data.kml.Reader.prototype.getState = function(){};
/**
 */
H.data.kml.Reader.prototype.parse = function(){};
/**
 * @const
 */
H.data.utils = {};
/**
 * @constructor
 */
H.data.utils.Dom = function(){};
/**
 * @param {!Object} node 
 * @return {boolean}
 */
H.data.utils.Dom.prototype.getBoolean = function(node){};
/**
 * @param {!Object} node 
 * @return {string}
 */
H.data.utils.Dom.prototype.getString = function(node){};
/**
 * @param {!Object} node 
 * @return {number}
 */
H.data.utils.Dom.prototype.getFloat = function(node){};
/**
 * @param {string} coordsString 
 * @return {Array.<H.geo.Point>}
 */
H.data.utils.Dom.prototype.parseCoords = function(coordsString){};
/**
 * @param {(string|Array.<String>)} coordStr 
 * @return {H.geo.Point}
 */
H.data.utils.Dom.prototype.parseCoord = function(coordStr){};
/**
 * @param {!Object} node 
 * @return {string}
 */
H.data.utils.Dom.prototype.getColor = function(node){};
/**
 * @constructor
 */
H.data.utils.ColorHelper = function(){};
/**
 * @param {string} str 
 * @param {boolean} normalized 
 * @return {string}
 */
H.data.utils.ColorHelper.prototype.toRandomRGBA = function(str, normalized){};
/**
 * @typedef {{style:(function(H.map.Object)|undefined)}}
 */
H.data.geojson.Reader.Options;
