/**
 * @const
 */
H.clustering = {};
/**
 * @return {Object}
 */
H.clustering.buildInfo = function(){};
/**
 * @interface
 */
H.clustering.IResult = function(){};
/**
 * @interface
 */
H.clustering.ICluster = function(){};
/**
 * @param {function(H.clustering.IResult)} callback 
 */
H.clustering.ICluster.prototype.forEachEntry = function(callback){};
/**
 * @param {function(H.clustering.INoisePoint)} callback 
 */
H.clustering.ICluster.prototype.forEachDataPoint = function(callback){};
/**
 * @interface
 */
H.clustering.INoisePoint = function(){};
/**
 * @constructor
 * @param {H.clustering.Clusterer} clusterer 
 * @param {H.clustering.quadtree.Tree.Entry} entry 
 * @param {number} minDepth 
 * @implements {H.clustering.INoisePoint}
 */
H.clustering.NoisePoint = function(clusterer, entry, minDepth){};
/**
 * @constructor
 * @param {H.clustering.Clusterer} clusterer 
 * @param {H.clustering.quadtree.Node} node 
 * @param {number} minDepth 
 * @param {number} maxDepth 
 * @implements {H.clustering.ICluster}
 */
H.clustering.Cluster = function(clusterer, node, minDepth, maxDepth){};
/**
 * @param {function(H.clustering.IResult)} callback 
 */
H.clustering.Cluster.prototype.forEachEntry = function(callback){};
/**
 * @param {function(H.clustering.INoisePoint)} callback 
 */
H.clustering.Cluster.prototype.forEachDataPoint = function(callback){};
/**
 * @interface
 */
H.clustering.ITheme = function(){};
/**
 * @constructor
 * @implements {H.clustering.ITheme}
 */
H.clustering.DefaultTheme = function(){};
/**
 * @constructor
 * @param {H.geo.Latitude} lat 
 * @param {H.geo.Longitude} lng 
 * @param {number=} opt_weight 
 * @param {*=} opt_data 
 * @extends {H.geo.IPoint}
 */
H.clustering.DataPoint = function(lat, lng, opt_weight, opt_data){};
/**
 * @constructor
 * @param {Array.<H.clustering.DataPoint>} dataPoints 
 * @param {H.clustering.Provider.Options=} opt_options 
 * @extends {H.util.EventTarget}
 */
H.clustering.Provider = function(dataPoints, opt_options){};
/**
 * @param {H.clustering.ITheme} theme 
 */
H.clustering.Provider.prototype.setTheme = function(theme){};
/**
 * @return {H.clustering.ITheme}
 */
H.clustering.Provider.prototype.getTheme = function(){};
/**
 * @param {Array.<H.clustering.DataPoint>} data 
 */
H.clustering.Provider.prototype.setDataPoints = function(data){};
/**
 * @return {boolean}
 */
H.clustering.Provider.prototype.providesDomMarkers = function(){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {number} zoomLevel 
 * @param {boolean} visiblesOnly 
 * @param {boolean} cacheOnly 
 * @return {Array.<H.map.DomMarker>}
 */
H.clustering.Provider.prototype.requestDomMarkers = function(geoRect, zoomLevel, visiblesOnly, cacheOnly){};
/**
 * @return {boolean}
 */
H.clustering.Provider.prototype.providesMarkers = function(){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {number} zoomLevel 
 * @param {boolean} visiblesOnly 
 * @param {boolean} cacheOnly 
 * @return {Array.<H.map.Marker>}
 */
H.clustering.Provider.prototype.requestMarkers = function(geoRect, zoomLevel, visiblesOnly, cacheOnly){};
/**
 * @return {boolean}
 */
H.clustering.Provider.prototype.providesSpatials = function(){};
/**
 * @param {H.geo.Rect} geoRect 
 * @param {number} zoomLevel 
 * @param {boolean} visiblesOnly 
 * @param {boolean} cacheOnly 
 * @return {Array.<H.map.Spatial>}
 */
H.clustering.Provider.prototype.requestSpatials = function(geoRect, zoomLevel, visiblesOnly, cacheOnly){};
/**
 * @return {H.map.provider.Invalidations}
 */
H.clustering.Provider.prototype.getInvalidations = function(){};
/**
 * @param {!H.map.Object} mapObject 
 * @param {H.math.BitMask} changes 
 */
H.clustering.Provider.prototype.invalidateObject = function(mapObject, changes){};
/**
 * @param {H.geo.Rect} bounds 
 * @param {number} level 
 * @return {?Array.<H.map.ICopyright>}
 */
H.clustering.Provider.prototype.getCopyrights = function(bounds, level){};
/**
 * @typedef {{min:(number|undefined),max:(number|undefined),clusteringOptions:(H.clustering.Provider.ClusteringOptions|undefined),theme:(H.clustering.ITheme|undefined)}}
 */
H.clustering.Provider.Options;
/**
 * @typedef {{eps:(number|undefined),minWeight:(number|undefined),projection:(H.geo.IProjection|undefined)}}
 */
H.clustering.Provider.ClusteringOptions;
