/**
 * @const
 */
H.map.render.panorama = {};
/**
 * @constructor
 * @param {H.map.ViewPort} viewPort 
 * @param {H.map.ViewModel} viewModel 
 * @param {H.map.DataModel} dataModel 
 * @param {H.map.render.p2d.RenderEngine.Options=} opt_options 
 * @extends {H.map.render.RenderEngine}
 */
H.map.render.panorama.RenderEngine = function(viewPort, viewModel, dataModel, opt_options){};
/**
 * @type {} */
H.map.render.panorama.RenderEngine.prototype.type;
/**
 * @param {H.geo.IPoint} coord 
 * @param {!function(Array.<H.map.render.panorama.RenderEngine.Panorama>)} callback 
 */
H.map.render.panorama.RenderEngine.getClosestPanoramas = function(coord, callback){};
/**
 * @param {!H.map.render.panorama.RenderEngine.Panorama} pano 
 * @return {string}
 */
H.map.render.panorama.RenderEngine.getImageUrl = function(pano){};
/**
 * @param {string} appId 
 * @param {string} appCode 
 * @param {boolean} useHTTPS 
 */
H.map.render.panorama.RenderEngine.configure = function(appId, appCode, useHTTPS){};
/**
 * @return {string}
 */
H.map.render.panorama.RenderEngine.prototype.getPanoramaId = function(){};
/**
 * @typedef {{id:number,position:H.geo.IPoint}}
 */
H.map.render.panorama.RenderEngine.Panorama;
