/**
 * @const
 */
H.ui = {};
/**
 * @return {H.util.BuildInfo}
 */
H.ui.buildInfo = function(){};
/**
 * @enum {string}
 */
H.ui.UnitSystem = {
  IMPERIAL: '',
  METRIC: ''
};
/**
 * @const
 */
H.ui.base = {};
/**
 * @constructor
 * @param {string=} opt_elementType 
 * @param {string=} opt_className 
 */
H.ui.base.Element = function(opt_elementType, opt_className){};
/**
 */
H.ui.base.Element.prototype.dispose = function(){};
/**
 * @param {Element} element 
 * @param {Document} doc 
 */
H.ui.base.Element.prototype.renderInternal = function(element, doc){};
/**
 * @return {boolean}
 */
H.ui.base.Element.prototype.isDisabled = function(){};
/**
 * @param {boolean} disabled 
 * @param {boolean=} opt_force 
 * @return {H.ui.base.Element}
 */
H.ui.base.Element.prototype.setDisabled = function(disabled, opt_force){};
/**
 * @return {*}
 */
H.ui.base.Element.prototype.getData = function(){};
/**
 * @param {*} data 
 */
H.ui.base.Element.prototype.setData = function(data){};
/**
 * @return {?HTMLElement}
 */
H.ui.base.Element.prototype.getElement = function(){};
/**
 * @param {boolean} visibility 
 */
H.ui.base.Element.prototype.setVisibility = function(visibility){};
/**
 * @return {boolean}
 */
H.ui.base.Element.prototype.getVisibility = function(){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.base.Element.prototype.addClass = function(className){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.base.Element.prototype.removeClass = function(className){};
/**
 * @constructor
 * @param {string=} opt_elementType 
 * @param {string=} opt_className 
 * @param {Array.<H.ui.base.Element>=} opt_children 
 * @extends {H.ui.base.Element}
 */
H.ui.base.Container = function(opt_elementType, opt_className, opt_children){};
/**
 * @param {H.ui.base.Element} child 
 * @return {H.ui.base.Container}
 */
H.ui.base.Container.prototype.addChild = function(child){};
/**
 * @param {H.ui.base.Element} child 
 */
H.ui.base.Container.prototype.removeChild = function(child){};
/**
 */
H.ui.base.Container.prototype.dispose = function(){};
/**
 * @param {Element} element 
 * @param {Document} doc 
 */
H.ui.base.Container.prototype.renderInternal = function(element, doc){};
/**
 * @return {boolean}
 */
H.ui.base.Container.prototype.isDisabled = function(){};
/**
 * @param {boolean} disabled 
 * @param {boolean=} opt_force 
 * @return {H.ui.base.Element}
 */
H.ui.base.Container.prototype.setDisabled = function(disabled, opt_force){};
/**
 * @return {*}
 */
H.ui.base.Container.prototype.getData = function(){};
/**
 * @param {*} data 
 */
H.ui.base.Container.prototype.setData = function(data){};
/**
 * @return {?HTMLElement}
 */
H.ui.base.Container.prototype.getElement = function(){};
/**
 * @param {boolean} visibility 
 */
H.ui.base.Container.prototype.setVisibility = function(visibility){};
/**
 * @return {boolean}
 */
H.ui.base.Container.prototype.getVisibility = function(){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.base.Container.prototype.addClass = function(className){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.base.Container.prototype.removeClass = function(className){};
/**
 * @constructor
 * @extends {H.ui.base.Container}
 */
H.ui.base.OverlayPanel = function(){};
/**
 * @param {H.ui.base.OverlayPanel.State} state 
 * @param {boolean=} opt_force 
 * @return {H.ui.base.OverlayPanel}
 */
H.ui.base.OverlayPanel.prototype.setState = function(state, opt_force){};
/**
 * @return {H.ui.base.OverlayPanel.State}
 */
H.ui.base.OverlayPanel.prototype.getState = function(){};
/**
 * @param {H.ui.Control} control 
 */
H.ui.base.OverlayPanel.prototype.pointToControl = function(control){};
/**
 * @param {H.ui.base.Element} child 
 * @return {H.ui.base.Container}
 */
H.ui.base.OverlayPanel.prototype.addChild = function(child){};
/**
 * @param {H.ui.base.Element} child 
 */
H.ui.base.OverlayPanel.prototype.removeChild = function(child){};
/**
 */
H.ui.base.OverlayPanel.prototype.dispose = function(){};
/**
 * @param {Element} element 
 * @param {Document} doc 
 */
H.ui.base.OverlayPanel.prototype.renderInternal = function(element, doc){};
/**
 * @return {boolean}
 */
H.ui.base.OverlayPanel.prototype.isDisabled = function(){};
/**
 * @param {boolean} disabled 
 * @param {boolean=} opt_force 
 * @return {H.ui.base.Element}
 */
H.ui.base.OverlayPanel.prototype.setDisabled = function(disabled, opt_force){};
/**
 * @return {*}
 */
H.ui.base.OverlayPanel.prototype.getData = function(){};
/**
 * @param {*} data 
 */
H.ui.base.OverlayPanel.prototype.setData = function(data){};
/**
 * @return {?HTMLElement}
 */
H.ui.base.OverlayPanel.prototype.getElement = function(){};
/**
 * @param {boolean} visibility 
 */
H.ui.base.OverlayPanel.prototype.setVisibility = function(visibility){};
/**
 * @return {boolean}
 */
H.ui.base.OverlayPanel.prototype.getVisibility = function(){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.base.OverlayPanel.prototype.addClass = function(className){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.base.OverlayPanel.prototype.removeClass = function(className){};
/**
 * @enum {string}
 */
H.ui.base.OverlayPanel.State = {
  OPEN: '',
  CLOSED: ''
};
/**
 * @constructor
 * @param {H.ui.base.RadioGroup.Options=} opt_options 
 * @extends {H.ui.base.Container}
 */
H.ui.base.RadioGroup = function(opt_options){};
/**
 * @param {string} title 
 * @param {boolean=} opt_force 
 * @return {H.ui.base.RadioGroup}
 */
H.ui.base.RadioGroup.prototype.setTitle = function(title, opt_force){};
/**
 * @return {string}
 */
H.ui.base.RadioGroup.prototype.getTitle = function(){};
/**
 * @param {H.ui.base.PushButton} button 
 * @return {H.ui.base.RadioGroup}
 */
H.ui.base.RadioGroup.prototype.addButton = function(button){};
/**
 * @param {H.ui.base.PushButton} button 
 * @return {H.ui.base.RadioGroup}
 */
H.ui.base.RadioGroup.prototype.removeButton = function(button){};
/**
 * @return {Array.<H.ui.base.PushButton>}
 */
H.ui.base.RadioGroup.prototype.getButtons = function(){};
/**
 * @param {H.ui.base.PushButton} button 
 * @param {boolean=} opt_suppressEvent 
 */
H.ui.base.RadioGroup.prototype.setActiveButton = function(button, opt_suppressEvent){};
/**
 * @param {H.ui.base.Element} child 
 * @return {H.ui.base.Container}
 */
H.ui.base.RadioGroup.prototype.addChild = function(child){};
/**
 * @param {H.ui.base.Element} child 
 */
H.ui.base.RadioGroup.prototype.removeChild = function(child){};
/**
 */
H.ui.base.RadioGroup.prototype.dispose = function(){};
/**
 * @param {Element} element 
 * @param {Document} doc 
 */
H.ui.base.RadioGroup.prototype.renderInternal = function(element, doc){};
/**
 * @return {boolean}
 */
H.ui.base.RadioGroup.prototype.isDisabled = function(){};
/**
 * @param {boolean} disabled 
 * @param {boolean=} opt_force 
 * @return {H.ui.base.Element}
 */
H.ui.base.RadioGroup.prototype.setDisabled = function(disabled, opt_force){};
/**
 * @return {*}
 */
H.ui.base.RadioGroup.prototype.getData = function(){};
/**
 * @param {*} data 
 */
H.ui.base.RadioGroup.prototype.setData = function(data){};
/**
 * @return {?HTMLElement}
 */
H.ui.base.RadioGroup.prototype.getElement = function(){};
/**
 * @param {boolean} visibility 
 */
H.ui.base.RadioGroup.prototype.setVisibility = function(visibility){};
/**
 * @return {boolean}
 */
H.ui.base.RadioGroup.prototype.getVisibility = function(){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.base.RadioGroup.prototype.addClass = function(className){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.base.RadioGroup.prototype.removeClass = function(className){};
/**
 * @constructor
 * @param {H.ui.base.Button.Options=} opt_options 
 * @extends {H.ui.base.Element}
 */
H.ui.base.Button = function(opt_options){};
/**
 * @return {H.ui.base.Button.State}
 */
H.ui.base.Button.prototype.getState = function(){};
/**
 * @param {H.ui.base.Button.State} state 
 * @param {boolean=} opt_suppressEvent 
 * @return {H.ui.base.Button}
 */
H.ui.base.Button.prototype.setState = function(state, opt_suppressEvent){};
/**
 * @return {string}
 */
H.ui.base.Button.prototype.getLabel = function(){};
/**
 * @param {string} label 
 * @param {boolean=} opt_force 
 * @return {H.ui.base.Button}
 */
H.ui.base.Button.prototype.setLabel = function(label, opt_force){};
/**
 */
H.ui.base.Button.prototype.dispose = function(){};
/**
 * @param {Element} element 
 * @param {Document} doc 
 */
H.ui.base.Button.prototype.renderInternal = function(element, doc){};
/**
 * @return {boolean}
 */
H.ui.base.Button.prototype.isDisabled = function(){};
/**
 * @param {boolean} disabled 
 * @param {boolean=} opt_force 
 * @return {H.ui.base.Element}
 */
H.ui.base.Button.prototype.setDisabled = function(disabled, opt_force){};
/**
 * @return {*}
 */
H.ui.base.Button.prototype.getData = function(){};
/**
 * @param {*} data 
 */
H.ui.base.Button.prototype.setData = function(data){};
/**
 * @return {?HTMLElement}
 */
H.ui.base.Button.prototype.getElement = function(){};
/**
 * @param {boolean} visibility 
 */
H.ui.base.Button.prototype.setVisibility = function(visibility){};
/**
 * @return {boolean}
 */
H.ui.base.Button.prototype.getVisibility = function(){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.base.Button.prototype.addClass = function(className){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.base.Button.prototype.removeClass = function(className){};
/**
 * @enum {string}
 */
H.ui.base.Button.State = {
  UP: '',
  DOWN: ''
};
/**
 * @constructor
 * @param {H.ui.base.Button.Options=} opt_options 
 * @extends {H.ui.base.Button}
 */
H.ui.base.PushButton = function(opt_options){};
/**
 * @return {H.ui.base.PushButton}
 */
H.ui.base.PushButton.prototype.toggleState = function(){};
/**
 * @return {H.ui.base.Button.State}
 */
H.ui.base.PushButton.prototype.getState = function(){};
/**
 * @param {H.ui.base.Button.State} state 
 * @param {boolean=} opt_suppressEvent 
 * @return {H.ui.base.Button}
 */
H.ui.base.PushButton.prototype.setState = function(state, opt_suppressEvent){};
/**
 * @return {string}
 */
H.ui.base.PushButton.prototype.getLabel = function(){};
/**
 * @param {string} label 
 * @param {boolean=} opt_force 
 * @return {H.ui.base.Button}
 */
H.ui.base.PushButton.prototype.setLabel = function(label, opt_force){};
/**
 */
H.ui.base.PushButton.prototype.dispose = function(){};
/**
 * @param {Element} element 
 * @param {Document} doc 
 */
H.ui.base.PushButton.prototype.renderInternal = function(element, doc){};
/**
 * @return {boolean}
 */
H.ui.base.PushButton.prototype.isDisabled = function(){};
/**
 * @param {boolean} disabled 
 * @param {boolean=} opt_force 
 * @return {H.ui.base.Element}
 */
H.ui.base.PushButton.prototype.setDisabled = function(disabled, opt_force){};
/**
 * @return {*}
 */
H.ui.base.PushButton.prototype.getData = function(){};
/**
 * @param {*} data 
 */
H.ui.base.PushButton.prototype.setData = function(data){};
/**
 * @return {?HTMLElement}
 */
H.ui.base.PushButton.prototype.getElement = function(){};
/**
 * @param {boolean} visibility 
 */
H.ui.base.PushButton.prototype.setVisibility = function(visibility){};
/**
 * @return {boolean}
 */
H.ui.base.PushButton.prototype.getVisibility = function(){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.base.PushButton.prototype.addClass = function(className){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.base.PushButton.prototype.removeClass = function(className){};
/**
 * @constructor
 * @extends {H.ui.base.Container}
 */
H.ui.Control = function(){};
/**
 * @param {H.ui.UnitSystem} unitSystem 
 */
H.ui.Control.prototype.onUnitSystemChange = function(unitSystem){};
/**
 * @param {H.Map.EngineType} engineType 
 */
H.ui.Control.prototype.onMapEngineTypeChange = function(engineType){};
/**
 * @return {?H.Map}
 */
H.ui.Control.prototype.getMap = function(){};
/**
 * @return {H.ui.i18n.Localization}
 */
H.ui.Control.prototype.getLocalization = function(){};
/**
 * @return {string}
 */
H.ui.Control.prototype.getAlignment = function(){};
/**
 * @param {string} alignment 
 * @return {H.ui.Control}
 */
H.ui.Control.prototype.setAlignment = function(alignment){};
/**
 * @param {H.ui.base.Element} child 
 * @return {H.ui.base.Container}
 */
H.ui.Control.prototype.addChild = function(child){};
/**
 * @param {H.ui.base.Element} child 
 */
H.ui.Control.prototype.removeChild = function(child){};
/**
 */
H.ui.Control.prototype.dispose = function(){};
/**
 * @param {Element} element 
 * @param {Document} doc 
 */
H.ui.Control.prototype.renderInternal = function(element, doc){};
/**
 * @return {boolean}
 */
H.ui.Control.prototype.isDisabled = function(){};
/**
 * @param {boolean} disabled 
 * @param {boolean=} opt_force 
 * @return {H.ui.base.Element}
 */
H.ui.Control.prototype.setDisabled = function(disabled, opt_force){};
/**
 * @return {*}
 */
H.ui.Control.prototype.getData = function(){};
/**
 * @param {*} data 
 */
H.ui.Control.prototype.setData = function(data){};
/**
 * @return {?HTMLElement}
 */
H.ui.Control.prototype.getElement = function(){};
/**
 * @param {boolean} visibility 
 */
H.ui.Control.prototype.setVisibility = function(visibility){};
/**
 * @return {boolean}
 */
H.ui.Control.prototype.getVisibility = function(){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.Control.prototype.addClass = function(className){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.Control.prototype.removeClass = function(className){};
/**
 * @constructor
 * @param {H.ui.Pano.Options=} opt_options 
 * @extends {H.ui.Control}
 */
H.ui.Pano = function(opt_options){};
/**
 * @param {H.ui.UnitSystem} unitSystem 
 */
H.ui.Pano.prototype.onUnitSystemChange = function(unitSystem){};
/**
 * @param {H.Map.EngineType} engineType 
 */
H.ui.Pano.prototype.onMapEngineTypeChange = function(engineType){};
/**
 * @return {?H.Map}
 */
H.ui.Pano.prototype.getMap = function(){};
/**
 * @return {H.ui.i18n.Localization}
 */
H.ui.Pano.prototype.getLocalization = function(){};
/**
 * @return {string}
 */
H.ui.Pano.prototype.getAlignment = function(){};
/**
 * @param {string} alignment 
 * @return {H.ui.Control}
 */
H.ui.Pano.prototype.setAlignment = function(alignment){};
/**
 * @param {H.ui.base.Element} child 
 * @return {H.ui.base.Container}
 */
H.ui.Pano.prototype.addChild = function(child){};
/**
 * @param {H.ui.base.Element} child 
 */
H.ui.Pano.prototype.removeChild = function(child){};
/**
 */
H.ui.Pano.prototype.dispose = function(){};
/**
 * @param {Element} element 
 * @param {Document} doc 
 */
H.ui.Pano.prototype.renderInternal = function(element, doc){};
/**
 * @return {boolean}
 */
H.ui.Pano.prototype.isDisabled = function(){};
/**
 * @param {boolean} disabled 
 * @param {boolean=} opt_force 
 * @return {H.ui.base.Element}
 */
H.ui.Pano.prototype.setDisabled = function(disabled, opt_force){};
/**
 * @return {*}
 */
H.ui.Pano.prototype.getData = function(){};
/**
 * @param {*} data 
 */
H.ui.Pano.prototype.setData = function(data){};
/**
 * @return {?HTMLElement}
 */
H.ui.Pano.prototype.getElement = function(){};
/**
 * @param {boolean} visibility 
 */
H.ui.Pano.prototype.setVisibility = function(visibility){};
/**
 * @return {boolean}
 */
H.ui.Pano.prototype.getVisibility = function(){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.Pano.prototype.addClass = function(className){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.Pano.prototype.removeClass = function(className){};
/**
 * @constructor
 * @param {H.geo.IPoint} position 
 * @param {H.ui.InfoBubble.Options=} opt_options 
 * @extends {H.ui.base.Element}
 */
H.ui.InfoBubble = function(position, opt_options){};
/**
 * @param {(H.geo.IPoint|H.geo.Point)} position 
 */
H.ui.InfoBubble.prototype.setPosition = function(position){};
/**
 * @return {H.ui.InfoBubble.State}
 */
H.ui.InfoBubble.prototype.getState = function(){};
/**
 * @param {H.ui.InfoBubble.State} state 
 */
H.ui.InfoBubble.prototype.setState = function(state){};
/**
 */
H.ui.InfoBubble.prototype.close = function(){};
/**
 */
H.ui.InfoBubble.prototype.open = function(){};
/**
 * @return {?HTMLElement}
 */
H.ui.InfoBubble.prototype.getContentElement = function(){};
/**
 * @param {(string|Node)} content 
 */
H.ui.InfoBubble.prototype.setContent = function(content){};
/**
 * @param {Element} element 
 * @param {Document} doc 
 */
H.ui.InfoBubble.prototype.renderInternal = function(element, doc){};
/**
 * @return {boolean}
 */
H.ui.InfoBubble.prototype.isDisabled = function(){};
/**
 * @param {boolean} disabled 
 * @param {boolean=} opt_force 
 * @return {H.ui.base.Element}
 */
H.ui.InfoBubble.prototype.setDisabled = function(disabled, opt_force){};
/**
 * @return {*}
 */
H.ui.InfoBubble.prototype.getData = function(){};
/**
 * @param {*} data 
 */
H.ui.InfoBubble.prototype.setData = function(data){};
/**
 * @return {?HTMLElement}
 */
H.ui.InfoBubble.prototype.getElement = function(){};
/**
 * @param {boolean} visibility 
 */
H.ui.InfoBubble.prototype.setVisibility = function(visibility){};
/**
 * @return {boolean}
 */
H.ui.InfoBubble.prototype.getVisibility = function(){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.InfoBubble.prototype.addClass = function(className){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.InfoBubble.prototype.removeClass = function(className){};
/**
 * @enum {string}
 */
H.ui.InfoBubble.State = {
  OPEN: '',
  CLOSED: ''
};
/**
 * @constructor
 * @param {H.ui.MapSettingsControl.Options=} opt_options 
 * @extends {H.ui.Control}
 */
H.ui.MapSettingsControl = function(opt_options){};
/**
 * @param {H.map.layer.Layer} incidentsLayer 
 */
H.ui.MapSettingsControl.prototype.setIncidentsLayer = function(incidentsLayer){};
/**
 * @param {H.ui.UnitSystem} unitSystem 
 */
H.ui.MapSettingsControl.prototype.onUnitSystemChange = function(unitSystem){};
/**
 * @param {H.Map.EngineType} engineType 
 */
H.ui.MapSettingsControl.prototype.onMapEngineTypeChange = function(engineType){};
/**
 * @return {?H.Map}
 */
H.ui.MapSettingsControl.prototype.getMap = function(){};
/**
 * @return {H.ui.i18n.Localization}
 */
H.ui.MapSettingsControl.prototype.getLocalization = function(){};
/**
 * @return {string}
 */
H.ui.MapSettingsControl.prototype.getAlignment = function(){};
/**
 * @param {string} alignment 
 * @return {H.ui.Control}
 */
H.ui.MapSettingsControl.prototype.setAlignment = function(alignment){};
/**
 * @param {H.ui.base.Element} child 
 * @return {H.ui.base.Container}
 */
H.ui.MapSettingsControl.prototype.addChild = function(child){};
/**
 * @param {H.ui.base.Element} child 
 */
H.ui.MapSettingsControl.prototype.removeChild = function(child){};
/**
 */
H.ui.MapSettingsControl.prototype.dispose = function(){};
/**
 * @param {Element} element 
 * @param {Document} doc 
 */
H.ui.MapSettingsControl.prototype.renderInternal = function(element, doc){};
/**
 * @return {boolean}
 */
H.ui.MapSettingsControl.prototype.isDisabled = function(){};
/**
 * @param {boolean} disabled 
 * @param {boolean=} opt_force 
 * @return {H.ui.base.Element}
 */
H.ui.MapSettingsControl.prototype.setDisabled = function(disabled, opt_force){};
/**
 * @return {*}
 */
H.ui.MapSettingsControl.prototype.getData = function(){};
/**
 * @param {*} data 
 */
H.ui.MapSettingsControl.prototype.setData = function(data){};
/**
 * @return {?HTMLElement}
 */
H.ui.MapSettingsControl.prototype.getElement = function(){};
/**
 * @param {boolean} visibility 
 */
H.ui.MapSettingsControl.prototype.setVisibility = function(visibility){};
/**
 * @return {boolean}
 */
H.ui.MapSettingsControl.prototype.getVisibility = function(){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.MapSettingsControl.prototype.addClass = function(className){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.MapSettingsControl.prototype.removeClass = function(className){};
/**
 * @const
 */
H.ui.i18n = {};
/**
 * @type {Array.<string>} */
H.ui.i18n.defaultLocales;
/**
 * @constructor
 * @param {string} locale 
 * @param {Object=} opt_translationMap 
 */
H.ui.i18n.Localization = function(locale, opt_translationMap){};
/**
 * @return {string}
 */
H.ui.i18n.Localization.prototype.getLocale = function(){};
/**
 * @return {Array.<string>}
 */
H.ui.i18n.Localization.prototype.getKeys = function(){};
/**
 * @param {string} key 
 * @return {boolean}
 */
H.ui.i18n.Localization.prototype.hasKey = function(key){};
/**
 * @param {string} key 
 * @return {string}
 */
H.ui.i18n.Localization.prototype.translate = function(key){};
/**
 * @constructor
 * @param {H.Map} map 
 * @param {H.ui.UI.Options=} opt_options 
 * @extends {H.util.ICapturable}
 */
H.ui.UI = function(map, opt_options){};
/**
 * @return {Element}
 */
H.ui.UI.prototype.getElement = function(){};
/**
 * @return {H.Map}
 */
H.ui.UI.prototype.getMap = function(){};
/**
 * @param {H.ui.UnitSystem} unitSystem 
 */
H.ui.UI.prototype.setUnitSystem = function(unitSystem){};
/**
 */
H.ui.UI.prototype.toggleUnitSystem = function(){};
/**
 * @param {H.ui.InfoBubble} bubble 
 */
H.ui.UI.prototype.addBubble = function(bubble){};
/**
 * @param {H.ui.InfoBubble} bubble 
 */
H.ui.UI.prototype.removeBubble = function(bubble){};
/**
 * @return {Array.<H.ui.InfoBubble>}
 */
H.ui.UI.prototype.getBubbles = function(){};
/**
 * @param {string} name 
 * @param {H.ui.Control} control 
 */
H.ui.UI.prototype.addControl = function(name, control){};
/**
 * @param {string} name 
 * @return {H.ui.Control}
 */
H.ui.UI.prototype.removeControl = function(name){};
/**
 * @param {string} name 
 * @return {H.ui.Control}
 */
H.ui.UI.prototype.getControl = function(name){};
/**
 * @param {H.Map} map 
 * @param {Object.<H.service.MapType>} mapTypes 
 * @param {(H.ui.i18n.Localization|string=)} opt_locale 
 * @return {H.ui.UI}
 */
H.ui.UI.createDefault = function(map, mapTypes, opt_locale){};
/**
 * @constructor
 * @param {H.ui.ZoomControl.Options=} opt_options 
 * @extends {H.ui.Control}
 */
H.ui.ZoomControl = function(opt_options){};
/**
 * @return {number}
 */
H.ui.ZoomControl.prototype.getZoomSpeed = function(){};
/**
 * @param {H.ui.UnitSystem} unitSystem 
 */
H.ui.ZoomControl.prototype.onUnitSystemChange = function(unitSystem){};
/**
 * @param {H.Map.EngineType} engineType 
 */
H.ui.ZoomControl.prototype.onMapEngineTypeChange = function(engineType){};
/**
 * @return {?H.Map}
 */
H.ui.ZoomControl.prototype.getMap = function(){};
/**
 * @return {H.ui.i18n.Localization}
 */
H.ui.ZoomControl.prototype.getLocalization = function(){};
/**
 * @return {string}
 */
H.ui.ZoomControl.prototype.getAlignment = function(){};
/**
 * @param {string} alignment 
 * @return {H.ui.Control}
 */
H.ui.ZoomControl.prototype.setAlignment = function(alignment){};
/**
 * @param {H.ui.base.Element} child 
 * @return {H.ui.base.Container}
 */
H.ui.ZoomControl.prototype.addChild = function(child){};
/**
 * @param {H.ui.base.Element} child 
 */
H.ui.ZoomControl.prototype.removeChild = function(child){};
/**
 */
H.ui.ZoomControl.prototype.dispose = function(){};
/**
 * @param {Element} element 
 * @param {Document} doc 
 */
H.ui.ZoomControl.prototype.renderInternal = function(element, doc){};
/**
 * @return {boolean}
 */
H.ui.ZoomControl.prototype.isDisabled = function(){};
/**
 * @param {boolean} disabled 
 * @param {boolean=} opt_force 
 * @return {H.ui.base.Element}
 */
H.ui.ZoomControl.prototype.setDisabled = function(disabled, opt_force){};
/**
 * @return {*}
 */
H.ui.ZoomControl.prototype.getData = function(){};
/**
 * @param {*} data 
 */
H.ui.ZoomControl.prototype.setData = function(data){};
/**
 * @return {?HTMLElement}
 */
H.ui.ZoomControl.prototype.getElement = function(){};
/**
 * @param {boolean} visibility 
 */
H.ui.ZoomControl.prototype.setVisibility = function(visibility){};
/**
 * @return {boolean}
 */
H.ui.ZoomControl.prototype.getVisibility = function(){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.ZoomControl.prototype.addClass = function(className){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.ZoomControl.prototype.removeClass = function(className){};
/**
 * @constructor
 * @param {H.ui.ScaleBar.Options=} opt_options 
 * @extends {H.ui.Control}
 */
H.ui.ScaleBar = function(opt_options){};
/**
 * @param {number} pixelRatio 
 * @param {function(HTMLCanvasElement=)} callback 
 * @param {function(string)=} opt_errback 
 */
H.ui.ScaleBar.prototype.capture = function(pixelRatio, callback, opt_errback){};
/**
 * @param {H.ui.UnitSystem} unitSystem 
 */
H.ui.ScaleBar.prototype.onUnitSystemChange = function(unitSystem){};
/**
 * @param {H.Map.EngineType} engineType 
 */
H.ui.ScaleBar.prototype.onMapEngineTypeChange = function(engineType){};
/**
 * @return {?H.Map}
 */
H.ui.ScaleBar.prototype.getMap = function(){};
/**
 * @return {H.ui.i18n.Localization}
 */
H.ui.ScaleBar.prototype.getLocalization = function(){};
/**
 * @return {string}
 */
H.ui.ScaleBar.prototype.getAlignment = function(){};
/**
 * @param {string} alignment 
 * @return {H.ui.Control}
 */
H.ui.ScaleBar.prototype.setAlignment = function(alignment){};
/**
 * @param {H.ui.base.Element} child 
 * @return {H.ui.base.Container}
 */
H.ui.ScaleBar.prototype.addChild = function(child){};
/**
 * @param {H.ui.base.Element} child 
 */
H.ui.ScaleBar.prototype.removeChild = function(child){};
/**
 */
H.ui.ScaleBar.prototype.dispose = function(){};
/**
 * @param {Element} element 
 * @param {Document} doc 
 */
H.ui.ScaleBar.prototype.renderInternal = function(element, doc){};
/**
 * @return {boolean}
 */
H.ui.ScaleBar.prototype.isDisabled = function(){};
/**
 * @param {boolean} disabled 
 * @param {boolean=} opt_force 
 * @return {H.ui.base.Element}
 */
H.ui.ScaleBar.prototype.setDisabled = function(disabled, opt_force){};
/**
 * @return {*}
 */
H.ui.ScaleBar.prototype.getData = function(){};
/**
 * @param {*} data 
 */
H.ui.ScaleBar.prototype.setData = function(data){};
/**
 * @return {?HTMLElement}
 */
H.ui.ScaleBar.prototype.getElement = function(){};
/**
 * @param {boolean} visibility 
 */
H.ui.ScaleBar.prototype.setVisibility = function(visibility){};
/**
 * @return {boolean}
 */
H.ui.ScaleBar.prototype.getVisibility = function(){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.ScaleBar.prototype.addClass = function(className){};
/**
 * @param {string} className 
 * @return {H.ui.base.Element}
 */
H.ui.ScaleBar.prototype.removeClass = function(className){};
/**
 * @typedef {{title:(string|undefined),buttonsOptions:(Array.<H.ui.base.Button.Options>|undefined)}}
 */
H.ui.base.RadioGroup.Options;
/**
 * @typedef {{disabled:(boolean|undefined),label:(string|undefined),data:*,onStateChange:(function(H.util.Event)|undefined)}}
 */
H.ui.base.Button.Options;
/**
 * @typedef {{alignment:(H.ui.LayoutAlignment|undefined),mapeTypes:(H.service.MapTypes)}}
 */
H.ui.Pano.Options;
/**
 * @typedef {{onStateChange:(function(H.ui.InfoBubble.State)|undefined),content:(string|Node|undefined)}}
 */
H.ui.InfoBubble.Options;
/**
 * @typedef {{alignment:(string|undefined),entries:(Array.<H.ui.MapSettingsControl.MapTypeEntry>|undefined),incidents:(H.map.layer.Layer|undefined)}}
 */
H.ui.MapSettingsControl.Options;
/**
 * @typedef {{name:(string),mapType:(H.service.MapType)}}
 */
H.ui.MapSettingsControl.MapTypeEntry;
/**
 * @typedef {{unitSystem:(H.ui.UnitSystem|undefined),zoom:(H.ui.ZoomControl.Options|boolean|undefined),mapsettings:(H.ui.MapSettingsControl.Options|boolean|undefined),scalebar:(H.ui.ScaleBar.Options|boolean|undefined),panorama:(H.ui.Pano.Options|boolean|undefined),locale:(H.ui.i18n.Localization|string|undefined)}}
 */
H.ui.UI.Options;
/**
 * @typedef {{zoomSpeed:(number|undefined),alignment:(H.ui.LayoutAlignment|undefined)}}
 */
H.ui.ZoomControl.Options;
/**
 * @typedef {{alignment:(string|undefined)}}
 */
H.ui.ScaleBar.Options;
