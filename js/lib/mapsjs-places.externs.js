/**
 * @const
 */
H.places = {};
/**
 * @return {H.util.BuildInfo}
 */
H.places.buildInfo = function(){};
/**
 * @constructor
 * @param {H.service.PlacesService} service 
 * @param {string} endpointName 
 */
H.places.PlacesEndpoint = function(service, endpointName){};
/**
 * @param {H.service.ServiceParameters} params 
 * @param {Object} headers 
 * @param {Function} onResult 
 * @param {Function} onError 
 */
H.places.PlacesEndpoint.prototype.request = function(params, headers, onResult, onError){};
/**
 * @constructor
 * @param {H.service.PlacesService} service 
 * @extends {H.places.PlacesEndpoint}
 */
H.places.Explore = function(service){};
/**
 * @param {H.service.ServiceParameters} params 
 * @param {Object} headers 
 * @param {Function} onResult 
 * @param {Function} onError 
 */
H.places.Explore.prototype.request = function(params, headers, onResult, onError){};
/**
 * @constructor
 * @param {H.service.PlacesService} service 
 * @extends {H.places.PlacesEndpoint}
 */
H.places.Search = function(service){};
/**
 * @param {H.service.ServiceParameters} params 
 * @param {Object} headers 
 * @param {Function} onResult 
 * @param {Function} onError 
 */
H.places.Search.prototype.request = function(params, headers, onResult, onError){};
/**
 * @constructor
 * @param {H.service.PlacesService} service 
 * @extends {H.places.PlacesEndpoint}
 */
H.places.Here = function(service){};
/**
 * @param {H.service.ServiceParameters} params 
 * @param {Object} headers 
 * @param {Function} onResult 
 * @param {Function} onError 
 */
H.places.Here.prototype.request = function(params, headers, onResult, onError){};
/**
 * @constructor
 * @param {H.service.PlacesService} service 
 * @extends {H.places.PlacesEndpoint}
 */
H.places.Around = function(service){};
/**
 * @param {H.service.ServiceParameters} params 
 * @param {Object} headers 
 * @param {Function} onResult 
 * @param {Function} onError 
 */
H.places.Around.prototype.request = function(params, headers, onResult, onError){};
/**
 * @constructor
 * @param {H.service.PlacesService} service 
 * @extends {H.places.PlacesEndpoint}
 */
H.places.Categories = function(service){};
/**
 * @param {H.service.ServiceParameters} params 
 * @param {Object} headers 
 * @param {Function} onResult 
 * @param {Function} onError 
 */
H.places.Categories.prototype.request = function(params, headers, onResult, onError){};
/**
 * @constructor
 * @param {H.service.PlacesService} service 
 * @extends {H.places.PlacesEndpoint}
 */
H.places.Suggest = function(service){};
/**
 * @param {H.service.ServiceParameters} params 
 * @param {Object} headers 
 * @param {Function} onResult 
 * @param {Function} onError 
 */
H.places.Suggest.prototype.request = function(params, headers, onResult, onError){};
/**
 * @constructor
 * @param {H.service.PlacesService} service 
 * @extends {H.places.PlacesEndpoint}
 */
H.places.Lookup = function(service){};
/**
 * @param {H.service.ServiceParameters} params 
 * @param {Object} headers 
 * @param {Function} onResult 
 * @param {Function} onError 
 */
H.places.Lookup.prototype.request = function(params, headers, onResult, onError){};
/**
 * @const
 */
H.places.model = {};
/**
 * @constructor
 * @param {Object} obj 
 * @param {H.service.PlacesService} service 
 */
H.places.model.GetLink = function(obj, service){};
/**
 * @param {Function} onResult 
 * @param {Function} onError 
 * @param {Object} queryParams 
 */
H.places.model.GetLink.prototype.follow = function(onResult, onError, queryParams){};
/**
 * @constructor
 * @param {Object} obj 
 */
H.places.model.PostLink = function(obj){};
/**
 * @param {Object} body 
 * @param {Function} onResult 
 * @param {Function} onError 
 * @param {Object} queryParams 
 */
H.places.model.PostLink.prototype.post = function(body, onResult, onError, queryParams){};
/**
 * @constructor
 * @param {Object} resultSet 
 * @param {H.service.PlacesService} service 
 */
H.places.model.ResultSet = function(resultSet, service){};
/**
 * @param {Function} onResult 
 * @param {Function} onError 
 */
H.places.model.ResultSet.prototype.fetchNext = function(onResult, onError){};
/**
 * @param {Function} onResult 
 * @param {Function} onError 
 */
H.places.model.ResultSet.prototype.fetchPrevious = function(onResult, onError){};
