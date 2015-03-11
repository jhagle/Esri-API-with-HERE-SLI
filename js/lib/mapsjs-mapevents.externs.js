/**
 * @const
 */
H.mapevents = {};
/**
 * @return {H.util.BuildInfo}
 */
H.mapevents.buildInfo = function(){};
/**
 * @constructor
 * @param {number} viewportX 
 * @param {number} viewportY 
 * @param {number} id 
 * @param {string} type 
 */
H.mapevents.Pointer = function(viewportX, viewportY, id, type){};
/**
 * @constructor
 * @param {string} type 
 * @param {Array.<H.mapevents.Pointer>} pointers 
 * @param {Array.<H.mapevents.Pointer>} changedPointers 
 * @param {Array.<H.mapevents.Pointer>} targetPointers 
 * @param {H.mapevents.Pointer} currentPointer 
 * @param {(H.Map|H.map.Object)} target 
 * @param {Event} originalEvent 
 * @extends {H.util.Event}
 */
H.mapevents.Event = function(type, pointers, changedPointers, targetPointers, currentPointer, target, originalEvent){};
/**
 */
H.mapevents.Event.prototype.stopPropagation = function(){};
/**
 * @constructor
 * @param {number} deltaY 
 * @param {number} viewportX 
 * @param {number} viewportY 
 * @param {(H.Map|H.map.Object)} target 
 * @param {Event} originalEvent 
 * @extends {H.util.Event}
 */
H.mapevents.WheelEvent = function(deltaY, viewportX, viewportY, target, originalEvent){};
/**
 */
H.mapevents.WheelEvent.prototype.stopPropagation = function(){};
/**
 * @constructor
 * @param {H.Map} map 
 * @extends {H.util.Disposable}
 */
H.mapevents.MapEvents = function(map){};
/**
 */
H.mapevents.MapEvents.prototype.dispose = function(){};
/**
 * @return {H.Map}
 */
H.mapevents.MapEvents.prototype.getAttachedMap = function(){};
/**
 * @constructor
 * @param {H.mapevents.MapEvents} mapEvents 
 * @param {H.mapevents.Behavior.Options} options 
 * @extends {H.util.Disposable}
 */
H.mapevents.Behavior = function(mapEvents, options){};
/**
 * @type {number} */
H.mapevents.Behavior.DRAGGING;
/**
 * @type {number} */
H.mapevents.Behavior.WHEELZOOM;
/**
 * @type {number} */
H.mapevents.Behavior.DBLTAPZOOM;
/**
 */
H.mapevents.Behavior.prototype.dispose = function(){};
/**
 * @param {number=} opt_behavior 
 */
H.mapevents.Behavior.prototype.disable = function(opt_behavior){};
/**
 * @param {number=} opt_behavior 
 */
H.mapevents.Behavior.prototype.enable = function(opt_behavior){};
/**
 * @param {number} behavior 
 * @return {boolean}
 */
H.mapevents.Behavior.prototype.isEnabled = function(behavior){};
/**
 * @typedef {{kinetics:(H.util.kinetics.IKinetics|undefined),enable:(number)}}
 */
H.mapevents.Behavior.Options;
