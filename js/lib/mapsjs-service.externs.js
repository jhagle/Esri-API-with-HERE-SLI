/**
 * @const
 */
H.service = {};
/**
 * @param {H.service.JsonpOptions} options 
 * @return {H.service.JsonpRequestHandle}
 */
H.service.jsonp = function(options){};
/**
 * @param {string} key 
 * @param {Object} value 
 */
H.service.setOptions = function(key, value){};
/**
 * @param {string} key 
 * @return {Object}
 */
H.service.getOptions = function(key){};
/**
 * @return {H.util.BuildInfo}
 */
H.service.buildInfo = function(){};
/**
 * @interface
 */
H.service.IConfigurable = function(){};
/**
 * @constructor
 * @param {string} scheme 
 * @param {string} host 
 * @param {string=} opt_path 
 * @param {Object=} opt_params 
 * @param {number=} opt_port 
 * @param {string=} opt_anchor 
 */
H.service.Url = function(scheme, host, opt_path, opt_params, opt_port, opt_anchor){};
/**
 * @param {string} url 
 * @param {string=} opt_baseURL 
 * @return {H.service.Url}
 */
H.service.Url.parse = function(url, opt_baseURL){};
/**
 * @return {H.service.Url}
 */
H.service.Url.prototype.clone = function(){};
/**
 * @param {string} scheme 
 * @return {H.service.Url}
 */
H.service.Url.prototype.setScheme = function(scheme){};
/**
 * @return {string}
 */
H.service.Url.prototype.getScheme = function(){};
/**
 * @param {string} host 
 * @return {H.service.Url}
 */
H.service.Url.prototype.setHost = function(host){};
/**
 * @return {string}
 */
H.service.Url.prototype.getHost = function(){};
/**
 * @param {(string|undefined)} path 
 * @return {H.service.Url}
 */
H.service.Url.prototype.setPath = function(path){};
/**
 * @return {(string|undefined)}
 */
H.service.Url.prototype.getPath = function(){};
/**
 * @param {(Object|undefined)} params 
 * @return {H.service.Url}
 */
H.service.Url.prototype.setQuery = function(params){};
/**
 * @return {boolean}
 */
H.service.Url.prototype.hasQuery = function(){};
/**
 * @return {Object}
 */
H.service.Url.prototype.getQuery = function(){};
/**
 * @param {(number|undefined)} port 
 * @return {H.service.Url}
 */
H.service.Url.prototype.setPort = function(port){};
/**
 * @return {(number|undefined)}
 */
H.service.Url.prototype.getPort = function(){};
/**
 * @param {(string|boolean|undefined)} anchor 
 * @return {H.service.Url}
 */
H.service.Url.prototype.setAnchor = function(anchor){};
/**
 * @return {(string|undefined)}
 */
H.service.Url.prototype.getAnchor = function(){};
/**
 * @param {Object} other 
 * @return {H.service.Url}
 */
H.service.Url.prototype.mergeQuery = function(other){};
/**
 * @param {string} subDomain 
 * @return {H.service.Url}
 */
H.service.Url.prototype.addSubDomain = function(subDomain){};
/**
 * @param {string} subPath 
 * @return {H.service.Url}
 */
H.service.Url.prototype.addSubPath = function(subPath){};
/**
 * @return {string}
 */
H.service.Url.prototype.toString = function(){};
/**
 * @return {Object}
 */
H.service.Url.prototype.cloneQuery_ = function(){};
/**
 * @constructor
 * @param {H.service.AbstractRestService.Options=} opt_options 
 * @implements {H.service.IConfigurable}
 */
H.service.AbstractRestService = function(opt_options){};
/**
 * @constructor
 * @param {H.service.Platform.Options} options 
 */
H.service.Platform = function(options){};
/**
 * @param {H.service.IConfigurable} configurable 
 * @return {H.service.IConfigurable}
 */
H.service.Platform.prototype.configure = function(configurable){};
/**
 * @param {boolean} useHTTPS 
 */
H.service.Platform.prototype.setUseHTTPS = function(useHTTPS){};
/**
 * @param {boolean} useCIT 
 */
H.service.Platform.prototype.setUseCIT = function(useCIT){};
/**
 * @param {H.service.Url} baseUrl 
 */
H.service.Platform.prototype.setBaseUrl = function(baseUrl){};
/**
 * @return {H.service.Url}
 */
H.service.Platform.prototype.getBaseUrl = function(){};
/**
 * @return {H.service.PlacesService}
 */
H.service.Platform.prototype.getPlacesService = function(){};
/**
 * @param {H.service.MapTileService.Options=} opt_options 
 * @return {H.service.MapTileService}
 */
H.service.Platform.prototype.getMapTileService = function(opt_options){};
/**
 * @return {H.service.TrafficIncidentsService}
 */
H.service.Platform.prototype.getTrafficIncidentsService = function(){};
/**
 * @param {number=} opt_tileSize 
 * @param {number=} opt_ppi 
 * @param {string=} opt_lg 
 * @param {string=} opt_lg2 
 * @param {string=} opt_style 
 * @param {boolean=} opt_pois 
 * @return {Object.<string,H.service.MapType>}
 */
H.service.Platform.prototype.createDefaultLayers = function(opt_tileSize, opt_ppi, opt_lg, opt_lg2, opt_style, opt_pois){};
/**
 * @param {H.service.metaInfo.Service.Options=} opt_params 
 * @return {H.service.metaInfo.Service}
 */
H.service.Platform.prototype.getMetaInfoTileService = function(opt_params){};
/**
 * @param {H.service.EnterpriseRoutingService.Options=} opt_options 
 * @return {H.service.EnterpriseRoutingService}
 */
H.service.Platform.prototype.getEnterpriseRoutingService = function(opt_options){};
/**
 * @param {H.service.RoutingService.Options=} opt_options 
 * @return {H.service.RoutingService}
 */
H.service.Platform.prototype.getRoutingService = function(opt_options){};
/**
 * @param {H.service.GeocodingService.Options=} opt_options 
 * @return {H.service.GeocodingService}
 */
H.service.Platform.prototype.getGeocodingService = function(opt_options){};
/**
 * @constructor
 * @param {H.service.PlacesService.Options=} opt_options 
 * @extends {H.service.AbstractRestService}
 */
H.service.PlacesService = function(opt_options){};
/**
 * @param {string} entryPoint 
 * @param {Object} entryPointParams 
 * @param {Function} onResult 
 * @param {Function} onError 
 * @return {H.service.JsonpRequestHandle}
 */
H.service.PlacesService.prototype.request = function(entryPoint, entryPointParams, onResult, onError){};
/**
 * @param {H.service.ServiceParameters} searchParams 
 * @param {Function} onResult 
 * @param {Function} onError 
 * @return {H.service.JsonpRequestHandle}
 */
H.service.PlacesService.prototype.search = function(searchParams, onResult, onError){};
/**
 * @param {H.service.ServiceParameters} suggestParams 
 * @param {Function} onResult 
 * @param {Function} onError 
 * @return {H.service.JsonpRequestHandle}
 */
H.service.PlacesService.prototype.suggest = function(suggestParams, onResult, onError){};
/**
 * @param {H.service.ServiceParameters} exploreParams 
 * @param {Function} onResult 
 * @param {Function} onError 
 * @return {H.service.JsonpRequestHandle}
 */
H.service.PlacesService.prototype.explore = function(exploreParams, onResult, onError){};
/**
 * @param {H.service.ServiceParameters} aroundParams 
 * @param {Function} onResult 
 * @param {Function} onError 
 * @return {H.service.JsonpRequestHandle}
 */
H.service.PlacesService.prototype.around = function(aroundParams, onResult, onError){};
/**
 * @param {H.service.ServiceParameters} hereParams 
 * @param {Function} onResult 
 * @param {Function} onError 
 * @return {H.service.JsonpRequestHandle}
 */
H.service.PlacesService.prototype.here = function(hereParams, onResult, onError){};
/**
 * @param {H.service.ServiceParameters} categoriesParams 
 * @param {Function} onResult 
 * @param {Function} onError 
 * @return {H.service.JsonpRequestHandle}
 */
H.service.PlacesService.prototype.categories = function(categoriesParams, onResult, onError){};
/**
 * @param {string} hyperlink 
 * @param {Function} onResult 
 * @param {Function} onError 
 * @param {Object=} opt_additionalParameters 
 * @return {H.service.JsonpRequestHandle}
 */
H.service.PlacesService.prototype.follow = function(hyperlink, onResult, onError, opt_additionalParameters){};
/**
 * @enum {string}
 */
H.service.PlacesService.EntryPoint = {
  SEARCH: '',
  SUGGEST: '',
  EXPLORE: '',
  AROUND: '',
  HERE: '',
  CATEGORIES: ''
};
/**
 * @constructor
 * @param {!(string|H.service.Url)} url 
 * @param {function(?,(string|undefined))} callback 
 * @param {H.net.Xhr.Options=} opt_options 
 */
H.service.JsonX = function(url, callback, opt_options){};
/**
 */
H.service.JsonX.prototype.abort = function(){};
/**
 * @constructor
 * @param {H.service.TrafficIncidentsService} service 
 * @param {number=} opt_refreshTime 
 * @param {H.service.ServiceParameters=} opt_additionalParameters 
 * @extends {H.map.provider.MarkerTileProvider}
 */
H.service.TrafficIncidentsProvider = function(service, opt_refreshTime, opt_additionalParameters){};
/**
 * @constructor
 * @param {H.service.MapTileService.Options=} opt_options 
 * @extends {H.util.EventTarget}
 * @implements {H.service.IConfigurable}
 */
H.service.MapTileService = function(opt_options){};
/**
 * @return {string}
 */
H.service.MapTileService.prototype.getType = function(){};
/**
 * @return {string}
 */
H.service.MapTileService.prototype.getVersion = function(){};
/**
 * @return {H.service.MapTileCopyrights}
 */
H.service.MapTileService.prototype.getCopyrights = function(){};
/**
 * @return {(H.service.MapTileService.Info|undefined)}
 */
H.service.MapTileService.prototype.getInfo = function(){};
/**
 * @param {string} tileType 
 * @param {string} scheme 
 * @param {number} tileSize 
 * @param {string} format 
 * @param {H.service.ServiceParameters=} opt_additionalParameters 
 * @return {H.map.provider.ImageTileProvider}
 */
H.service.MapTileService.prototype.createTileProvider = function(tileType, scheme, tileSize, format, opt_additionalParameters){};
/**
 * @param {string} tileType 
 * @param {string} scheme 
 * @param {number} tileSize 
 * @param {string} format 
 * @param {H.service.ServiceParameters=} opt_additionalParameters 
 * @param {number=} opt_opacity 
 * @param {boolean=} opt_dark 
 * @return {H.map.layer.TileLayer}
 */
H.service.MapTileService.prototype.createTileLayer = function(tileType, scheme, tileSize, format, opt_additionalParameters, opt_opacity, opt_dark){};
/**
 * @constructor
 * @param {H.service.TrafficIncidentsService.Options=} opt_options 
 * @extends {H.service.AbstractRestService}
 */
H.service.TrafficIncidentsService = function(opt_options){};
/**
 * @param {H.service.ServiceParameters} serviceParams 
 * @param {function(H.service.ServiceResult)} onResponse 
 * @param {function()} onError 
 * @return {H.service.JsonpRequestHandle}
 */
H.service.TrafficIncidentsService.prototype.requestIncidents = function(serviceParams, onResponse, onError){};
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @param {function(H.service.ServiceResult)} onResponse 
 * @param {function()} onError 
 * @param {H.service.ServiceParameters=} opt_serviceParams 
 * @return {H.service.JsonpRequestHandle}
 */
H.service.TrafficIncidentsService.prototype.requestIncidentsByTile = function(x, y, z, onResponse, onError, opt_serviceParams){};
/**
 * @const
 */
H.service.metaInfo = {};
/**
 * @constructor
 * @param {H.service.metaInfo.ObjectProvider} provider 
 * @param {boolean} isClosed 
 * @param {(string|undefined)} remoteId 
 * @param {H.map.Spatial.Options=} opt_options 
 * @extends {H.map.Spatial}
 * @implements {H.service.metaInfo.IObject}
 */
H.service.metaInfo.Spatial = function(provider, isClosed, remoteId, opt_options){};
/**
 * @return {string}
 */
H.service.metaInfo.Spatial.prototype.getRemoteId = function(){};
/**
 */
H.service.metaInfo.Spatial.prototype.retain = function(){};
/**
 * @return {boolean}
 */
H.service.metaInfo.Spatial.prototype.release = function(){};
/**
 * @interface
 */
H.service.metaInfo.IParser = function(){};
/**
 * @param {H.service.metaInfo.ObjectProvider} provider 
 * @param {H.map.provider.SpatialTile} tile 
 * @param {*} response 
 * @return {(H.service.metaInfo.IParser.Result|undefined)}
 */
H.service.metaInfo.IParser.prototype.parse = function(provider, tile, response){};
/**
 * @interface
 */
H.service.metaInfo.IObject = function(){};
/**
 * @return {string}
 */
H.service.metaInfo.IObject.prototype.getRemoteId = function(){};
/**
 */
H.service.metaInfo.IObject.prototype.retain = function(){};
/**
 * @return {boolean}
 */
H.service.metaInfo.IObject.prototype.release = function(){};
/**
 * @constructor
 * @param {H.service.metaInfo.IParser} parser 
 * @param {H.service.metaInfo.ObjectProvider.Options=} opt_options 
 * @extends {H.map.provider.ObjectProvider}
 */
H.service.metaInfo.ObjectProvider = function(parser, opt_options){};
/**
 * @constructor
 * @param {H.service.metaInfo.Service.Options=} opt_options 
 * @implements {H.service.IConfigurable}
 * @extends {H.util.EventTarget}
 */
H.service.metaInfo.Service = function(opt_options){};
/**
 * @return {string}
 */
H.service.metaInfo.Service.prototype.getVersion = function(){};
/**
 * @return {H.service.MapTileCopyrights}
 */
H.service.metaInfo.Service.prototype.getCopyrights = function(){};
/**
 * @return {(H.service.metaInfo.Service.Info|undefined)}
 */
H.service.metaInfo.Service.prototype.getInfo = function(){};
/**
 * @param {number} tileSize 
 * @param {number} pixelratio 
 * @param {Array.<string>=} opt_categoryFilter 
 * @param {H.service.ServiceParameters=} opt_additionalParameters 
 * @return {H.map.provider.TileProvider}
 */
H.service.metaInfo.Service.prototype.createTileProvider = function(tileSize, pixelratio, opt_categoryFilter, opt_additionalParameters){};
/**
 * @param {number} tileSize 
 * @param {number} pixelratio 
 * @param {Array.<string>=} opt_categoryFilter 
 * @param {H.service.ServiceParameters=} opt_additionalParameters 
 * @return {H.map.layer.TileLayer}
 */
H.service.metaInfo.Service.prototype.createTileLayer = function(tileSize, pixelratio, opt_categoryFilter, opt_additionalParameters){};
/**
 * @constructor
 * @param {H.service.metaInfo.Service} service 
 * @param {H.service.ServiceParameters=} opt_params 
 * @param {H.service.metaInfo.TileProvider.Options=} opt_options 
 * @extends {H.map.provider.RemoteTileProvider}
 */
H.service.metaInfo.TileProvider = function(service, opt_params, opt_options){};
/**
 * @constructor
 * @param {H.service.EnterpriseRoutingService.Options=} opt_options 
 * @extends {H.service.AbstractRestService}
 */
H.service.EnterpriseRoutingService = function(opt_options){};
/**
 * @param {H.service.ServiceParameters} calculateRouteParams 
 * @param {function(H.service.ServiceResult)} onResult 
 * @param {function(Error)} onError 
 */
H.service.EnterpriseRoutingService.prototype.calculateRoute = function(calculateRouteParams, onResult, onError){};
/**
 * @param {H.service.ServiceParameters} getRouteParams 
 * @param {function(H.service.ServiceResult)} onResult 
 * @param {function(Error)} onError 
 */
H.service.EnterpriseRoutingService.prototype.getRoute = function(getRouteParams, onResult, onError){};
/**
 * @param {H.service.ServiceParameters} getLinkInfoParams 
 * @param {function(H.service.ServiceResult)} onResult 
 * @param {function(Error)} onError 
 */
H.service.EnterpriseRoutingService.prototype.getLinkInfo = function(getLinkInfoParams, onResult, onError){};
/**
 * @param {H.service.ServiceParameters} calculateIsolineParams 
 * @param {function(H.service.ServiceResult)} onResult 
 * @param {function(Error)} onError 
 */
H.service.EnterpriseRoutingService.prototype.calculateIsoline = function(calculateIsolineParams, onResult, onError){};
/**
 * @constructor
 * @param {H.service.RoutingService.Options=} opt_options 
 * @extends {H.service.AbstractRestService}
 */
H.service.RoutingService = function(opt_options){};
/**
 * @param {H.service.ServiceParameters} calculateRouteParams 
 * @param {function(H.service.ServiceResult)} onResult 
 * @param {function(Error)} onError 
 */
H.service.RoutingService.prototype.calculateRoute = function(calculateRouteParams, onResult, onError){};
/**
 * @constructor
 * @param {H.service.GeocodingService.Options=} opt_options 
 * @extends {H.service.AbstractRestService}
 */
H.service.GeocodingService = function(opt_options){};
/**
 * @param {H.service.ServiceParameters} geoodingParams 
 * @param {function(H.service.ServiceResult)} onResult 
 * @param {function(Error)} onError 
 * @return {H.service.JsonpRequestHandle}
 */
H.service.GeocodingService.prototype.geocode = function(geoodingParams, onResult, onError){};
/**
 * @param {H.service.ServiceParameters} reverseGeocodingParams 
 * @param {function(H.service.ServiceResult)} onResult 
 * @param {function(Error)} onError 
 * @return {H.service.JsonpRequestHandle}
 */
H.service.GeocodingService.prototype.reverseGeocode = function(reverseGeocodingParams, onResult, onError){};
/**
 * @param {H.service.ServiceParameters} searchParams 
 * @param {function(H.service.ServiceResult)} onResult 
 * @param {function(Error)} onError 
 * @return {H.service.JsonpRequestHandle}
 */
H.service.GeocodingService.prototype.search = function(searchParams, onResult, onError){};
/**
 * @typedef {Object}
 */
H.service.JsonpRequestHandle;
/**
 * @typedef {{app_id:?string,app_code:?string,useHTTPS:boolean,useCIT:boolean,baseUrl:H.service.Url}}
 */
H.service.Platform.Options;
/**
 * @typedef {Object}
 */
H.service.ServiceParameters;
/**
 * @typedef {Object}
 */
H.service.ServiceResult;
/**
 * @typedef {{subDomain:(string|undefined),path:(string|undefined),baseUrl:(H.service.Url|undefined)}}
 */
H.service.PlacesService.Options;
/**
 * @typedef {{type:string,version:(string|undefined),subDomain:(string|undefined),path:(string|undefined)}}
 */
H.service.MapTileService.Options;
/**
 * @typedef {{maps:Object.<string,Object>,schemes:Object.<string,Object>,tiletypes:Object.<string,Object>,formats:Object.<string,Object>,resolutions:Object.<string,Object>,languages:Object.<string,Object>}}
 */
H.service.MapTileService.Info;
/**
 * @typedef {{subDomain:(string|undefined),path:(string|undefined),baseUrl:(H.service.Url|undefined)}}
 */
H.service.TrafficIncidentsService.Options;
/**
 * @typedef {{map:(H.map.layer.TileLayer),xbase:(H.map.layer.TileLayer|undefined),base:(H.map.layer.TileLayer|undefined),traffic:(H.map.layer.TileLayer|undefined),panorama:(H.map.layer.TileLayer|undefined),labels:(H.map.layer.TileLayer|undefined)}}
 */
H.service.MapType;
/**
 * @typedef {{maps:Object.<string,Object>,schemes:Object.<string,Object>,tiletypes:Object.<string,Object>,formats:Object.<string,Object>,resolutions:Object.<string,Object>,languages:Object.<string,Object>}}
 */
H.service.metaInfo.Service.Info;
/**
 * @typedef {{version:(string|undefined),subDomain:(string|undefined)}}
 */
H.service.metaInfo.Service.Options;
/**
 * @typedef {{tileCacheSize:(number|undefined),pixelratio:(number|undefined),tileSize:(number|undefined),categoryFilter:(Array.<string>|undefined)}}
 */
H.service.metaInfo.TileProvider.Options;
/**
 * @typedef {{subDomain:(string|undefined),path:(string|undefined),baseUrl:(H.service.Url|undefined)}}
 */
H.service.EnterpriseRoutingService.Options;
/**
 * @typedef {{subDomain:(string|undefined),path:(string|undefined),baseUrl:(H.service.Url|undefined)}}
 */
H.service.RoutingService.Options;
/**
 * @typedef {{subDomain:(string|undefined),path:(string|undefined)}}
 */
H.service.GeocodingService.Options;
