(function umd(require){
  if (typeof exports === 'object') {
    module.exports = require('1');
  } else if (typeof define === 'function' && (define.amd || define.cmd)) {
    define(function(){ return require('1'); });
  } else {
    this['matter'] = require('1');
  }
})((function outer(modules, cache, entries){

  /**
   * Global
   */

  var global = (function(){ return this; })();

  /**
   * Require `name`.
   *
   * @param {String} name
   * @api public
   */

  function require(name){
    if (cache[name]) return cache[name].exports;
    if (modules[name]) return call(name, require);
    throw new Error('cannot find module "' + name + '"');
  }

  /**
   * Call module `id` and cache it.
   *
   * @param {Number} id
   * @param {Function} require
   * @return {Function}
   * @api private
   */

  function call(id, require){
    var m = cache[id] = { exports: {} };
    var mod = modules[id];
    var name = mod[2];
    var fn = mod[0];
    var threw = true;

    try {
      fn.call(m.exports, function(req){
        var dep = modules[id][1][req];
        return require(dep || req);
      }, m, m.exports, outer, modules, cache, entries);
      threw = false;
    } finally {
      if (threw) {
        delete cache[id];
      } else if (name) {
        // expose as 'name'.
        cache[name] = cache[id];
      }
    }

    return cache[id].exports;
  }

  /**
   * Require all entries exposing them on global if needed.
   */

  for (var id in entries) {
    if (entries[id]) {
      global[entries[id]] = require(id);
    } else {
      require(id);
    }
  }

  /**
   * Duo flag.
   */

  require.duo = true;

  /**
   * Expose cache.
   */

  require.cache = cache;

  /**
   * Expose modules
   */

  require.modules = modules;

  /**
   * Return newest require.
   */

   return require;
})({
1: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lib = require('./lib');

exports.TextField = _lib.TextField;
exports.Checkbox = _lib.Checkbox;
exports.Button = _lib.Button;
exports.Table = _lib.Table;
exports.Grid = _lib.Grid;
exports.Code = _lib.Code;
exports.Menu = _lib.Menu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OzttQkFRTyxPQUFPOztRQUdaLFNBQVM7UUFDVCxRQUFRO1FBQ1IsTUFBTTtRQUNOLEtBQUs7UUFDTCxJQUFJO1FBQ0osSUFBSTtRQUNKLElBQUkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFRleHRGaWVsZCxcbiAgQ2hlY2tib3gsXG4gIEJ1dHRvbixcbiAgVGFibGUsXG4gIEdyaWQsXG4gIENvZGUsXG4gIE1lbnVcbn0gZnJvbSAnLi9saWInO1xuXG5leHBvcnQge1xuICBUZXh0RmllbGQsXG4gIENoZWNrYm94LFxuICBCdXR0b24sXG4gIFRhYmxlLFxuICBHcmlkLFxuICBDb2RlLFxuICBNZW51XG59O1xuIl19
}, {"./lib":2}],
2: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _textField = require('./text-field');

var _textField2 = _interopRequireDefault(_textField);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _grid = require('./grid');

var _grid2 = _interopRequireDefault(_grid);

var _code = require('./code');

var _code2 = _interopRequireDefault(_code);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

exports.TextField = _textField2['default'];
exports.Checkbox = _checkbox2['default'];
exports.Button = _button2['default'];
exports.Table = _table2['default'];
exports.Grid = _grid2['default'];
exports.Code = _code2['default'];
exports.Menu = _menu2['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozt5QkFBc0IsY0FBYzs7Ozt3QkFDZixZQUFZOzs7O3NCQUNkLFVBQVU7Ozs7cUJBQ1gsU0FBUzs7OztvQkFDVixRQUFROzs7O29CQUNSLFFBQVE7Ozs7b0JBQ1IsUUFBUTs7OztRQUd2QixTQUFTO1FBQ1QsUUFBUTtRQUNSLE1BQU07UUFDTixLQUFLO1FBQ0wsSUFBSTtRQUNKLElBQUk7UUFDSixJQUFJIiwiZmlsZSI6ImxpYi9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRleHRGaWVsZCBmcm9tICcuL3RleHQtZmllbGQnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vY2hlY2tib3gnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi90YWJsZSc7XG5pbXBvcnQgR3JpZCBmcm9tICcuL2dyaWQnO1xuaW1wb3J0IENvZGUgZnJvbSAnLi9jb2RlJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5cbmV4cG9ydCB7XG4gIFRleHRGaWVsZCxcbiAgQ2hlY2tib3gsXG4gIEJ1dHRvbixcbiAgVGFibGUsXG4gIEdyaWQsXG4gIENvZGUsXG4gIE1lbnVcbn07XG4iXX0=
}, {"./text-field":3,"./checkbox":4,"./button":5,"./table":6,"./grid":7,"./code":8,"./menu":9}],
3: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _supportReact = require('/support/react');

var _supportReact2 = _interopRequireDefault(_supportReact);

/**
 * TextField.
 */

exports['default'] = _supportReact2['default'].createClass({
  displayName: 'index',

  render: function render() {
    var placeholder = this.props.placeholder;

    var attrs = {
      className: 'matter-TextField',
      placeholder: placeholder
    };

    return _supportReact2['default'].createElement('input', attrs);
  }
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi90ZXh0LWZpZWxkL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzRCQUFrQixnQkFBZ0I7Ozs7Ozs7O3FCQU1uQiwwQkFBTSxXQUFXLENBQUM7OztBQUMvQixRQUFNLEVBQUEsa0JBQUc7UUFDRCxXQUFXLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBMUIsV0FBVzs7QUFFakIsUUFBSSxLQUFLLEdBQUc7QUFDVixlQUFTLEVBQUUsa0JBQWtCO0FBQzdCLGlCQUFXLEVBQUUsV0FBVztLQUN6QixDQUFDOztBQUVGLFdBQ0UsaURBQVksS0FBSyxDQUNULENBQ1I7R0FDSDtDQUNGLENBQUMiLCJmaWxlIjoibGliL3RleHQtZmllbGQvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICcvc3VwcG9ydC9yZWFjdCc7XG5cbi8qKlxuICogVGV4dEZpZWxkLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHBsYWNlaG9sZGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGF0dHJzID0ge1xuICAgICAgY2xhc3NOYW1lOiAnbWF0dGVyLVRleHRGaWVsZCcsXG4gICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXJcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dCB7IC4uLmF0dHJzIH0+XG4gICAgICA8L2lucHV0PlxuICAgICk7XG4gIH1cbn0pO1xuIl19
}, {"/support/react":10}],
10: [function(require, module, exports) {
/**
 * React v0.13.3
 */"use strict";(function(f){if(typeof exports === "object" && typeof module !== "undefined"){module.exports = f();}else if(typeof define === "function" && define.amd){define([],f);}else {var g;if(typeof window !== "undefined"){g = window;}else if(typeof global !== "undefined"){g = global;}else if(typeof self !== "undefined"){g = self;}else {g = this;}g.React = f();}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require == "function" && require;if(!u && a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND",f);}var l=n[o] = {exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require == "function" && require;for(var o=0;o < r.length;o++) s(r[o]);return s;})({1:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule React
 */ /* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/'use strict';var EventPluginUtils=_dereq_(19);var ReactChildren=_dereq_(32);var ReactComponent=_dereq_(34);var ReactClass=_dereq_(33);var ReactContext=_dereq_(38);var ReactCurrentOwner=_dereq_(39);var ReactElement=_dereq_(57);var ReactElementValidator=_dereq_(58);var ReactDOM=_dereq_(40);var ReactDOMTextComponent=_dereq_(51);var ReactDefaultInjection=_dereq_(54);var ReactInstanceHandles=_dereq_(66);var ReactMount=_dereq_(70);var ReactPerf=_dereq_(75);var ReactPropTypes=_dereq_(78);var ReactReconciler=_dereq_(81);var ReactServerRendering=_dereq_(84);var assign=_dereq_(27);var findDOMNode=_dereq_(117);var onlyChild=_dereq_(144);ReactDefaultInjection.inject();var createElement=ReactElement.createElement;var createFactory=ReactElement.createFactory;var cloneElement=ReactElement.cloneElement;if("production" !== "development"){createElement = ReactElementValidator.createElement;createFactory = ReactElementValidator.createFactory;cloneElement = ReactElementValidator.cloneElement;}var render=ReactPerf.measure('React','render',ReactMount.render);var React={Children:{map:ReactChildren.map,forEach:ReactChildren.forEach,count:ReactChildren.count,only:onlyChild},Component:ReactComponent,DOM:ReactDOM,PropTypes:ReactPropTypes,initializeTouchEvents:function initializeTouchEvents(shouldUseTouch){EventPluginUtils.useTouchEvents = shouldUseTouch;},createClass:ReactClass.createClass,createElement:createElement,cloneElement:cloneElement,createFactory:createFactory,createMixin:function createMixin(mixin){ // Currently a noop. Will be used to validate and trace mixins.
return mixin;},constructAndRenderComponent:ReactMount.constructAndRenderComponent,constructAndRenderComponentByID:ReactMount.constructAndRenderComponentByID,findDOMNode:findDOMNode,render:render,renderToString:ReactServerRendering.renderToString,renderToStaticMarkup:ReactServerRendering.renderToStaticMarkup,unmountComponentAtNode:ReactMount.unmountComponentAtNode,isValidElement:ReactElement.isValidElement,withContext:ReactContext.withContext, // Hook for JSX spread, don't use this for anything else.
__spread:assign}; // Inject the runtime into a devtools global hook regardless of browser.
// Allows for debugging when the hook is injected on the page.
if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function'){__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({CurrentOwner:ReactCurrentOwner,InstanceHandles:ReactInstanceHandles,Mount:ReactMount,Reconciler:ReactReconciler,TextComponent:ReactDOMTextComponent});}if("production" !== "development"){var ExecutionEnvironment=_dereq_(21);if(ExecutionEnvironment.canUseDOM && window.top === window.self){ // If we're in Chrome, look for the devtools marker and provide a download
// link if not installed.
if(navigator.userAgent.indexOf('Chrome') > -1){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined'){console.debug('Download the React DevTools for a better development experience: ' + 'https://fb.me/react-devtools');}}var expectedFeatures=[ // shims
Array.isArray,Array.prototype.every,Array.prototype.forEach,Array.prototype.indexOf,Array.prototype.map,Date.now,Function.prototype.bind,Object.keys,String.prototype.split,String.prototype.trim, // shams
Object.create,Object.freeze];for(var i=0;i < expectedFeatures.length;i++) {if(!expectedFeatures[i]){console.error('One or more ES5 shim/shams expected by React are not available: ' + 'https://fb.me/react-warning-polyfills');break;}}}}React.version = '0.13.3';module.exports = React;},{"117":117,"144":144,"19":19,"21":21,"27":27,"32":32,"33":33,"34":34,"38":38,"39":39,"40":40,"51":51,"54":54,"57":57,"58":58,"66":66,"70":70,"75":75,"78":78,"81":81,"84":84}],2:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule AutoFocusMixin
 * @typechecks static-only
 */'use strict';var focusNode=_dereq_(119);var AutoFocusMixin={componentDidMount:function componentDidMount(){if(this.props.autoFocus){focusNode(this.getDOMNode());}}};module.exports = AutoFocusMixin;},{"119":119}],3:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015 Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BeforeInputEventPlugin
 * @typechecks static-only
 */'use strict';var EventConstants=_dereq_(15);var EventPropagators=_dereq_(20);var ExecutionEnvironment=_dereq_(21);var FallbackCompositionState=_dereq_(22);var SyntheticCompositionEvent=_dereq_(93);var SyntheticInputEvent=_dereq_(97);var keyOf=_dereq_(141);var END_KEYCODES=[9,13,27,32]; // Tab, Return, Esc, Space
var START_KEYCODE=229;var canUseCompositionEvent=ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;var documentMode=null;if(ExecutionEnvironment.canUseDOM && 'documentMode' in document){documentMode = document.documentMode;} // Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var canUseTextInputEvent=ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto(); // In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
var useFallbackCompositionData=ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11); /**
 * Opera <= 12 includes TextEvent in window, but does not fire
 * text input events. Rely on keypress instead.
 */function isPresto(){var opera=window.opera;return typeof opera === 'object' && typeof opera.version === 'function' && parseInt(opera.version(),10) <= 12;}var SPACEBAR_CODE=32;var SPACEBAR_CHAR=String.fromCharCode(SPACEBAR_CODE);var topLevelTypes=EventConstants.topLevelTypes; // Events and their corresponding property names.
var eventTypes={beforeInput:{phasedRegistrationNames:{bubbled:keyOf({onBeforeInput:null}),captured:keyOf({onBeforeInputCapture:null})},dependencies:[topLevelTypes.topCompositionEnd,topLevelTypes.topKeyPress,topLevelTypes.topTextInput,topLevelTypes.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:keyOf({onCompositionEnd:null}),captured:keyOf({onCompositionEndCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionEnd,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:keyOf({onCompositionStart:null}),captured:keyOf({onCompositionStartCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionStart,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:keyOf({onCompositionUpdate:null}),captured:keyOf({onCompositionUpdateCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionUpdate,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]}}; // Track whether we've ever handled a keypress on the space key.
var hasSpaceKeypress=false; /**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */function isKeypressCommand(nativeEvent){return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&  // ctrlKey && altKey is equivalent to AltGr, and is not a command.
!(nativeEvent.ctrlKey && nativeEvent.altKey);} /**
 * Translate native top level events into event types.
 *
 * @param {string} topLevelType
 * @return {object}
 */function getCompositionEventType(topLevelType){switch(topLevelType){case topLevelTypes.topCompositionStart:return eventTypes.compositionStart;case topLevelTypes.topCompositionEnd:return eventTypes.compositionEnd;case topLevelTypes.topCompositionUpdate:return eventTypes.compositionUpdate;}} /**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */function isFallbackCompositionStart(topLevelType,nativeEvent){return topLevelType === topLevelTypes.topKeyDown && nativeEvent.keyCode === START_KEYCODE;} /**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */function isFallbackCompositionEnd(topLevelType,nativeEvent){switch(topLevelType){case topLevelTypes.topKeyUp: // Command keys insert or clear IME input.
return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;case topLevelTypes.topKeyDown: // Expect IME keyCode on each keydown. If we get any other
// code we must have exited earlier.
return nativeEvent.keyCode !== START_KEYCODE;case topLevelTypes.topKeyPress:case topLevelTypes.topMouseDown:case topLevelTypes.topBlur: // Events are not possible without cancelling IME.
return true;default:return false;}} /**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */function getDataFromCustomEvent(nativeEvent){var detail=nativeEvent.detail;if(typeof detail === 'object' && 'data' in detail){return detail.data;}return null;} // Track the current IME composition fallback object, if any.
var currentComposition=null; /**
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {DOMEventTarget} topLevelTarget The listening component root node.
 * @param {string} topLevelTargetID ID of `topLevelTarget`.
 * @param {object} nativeEvent Native browser event.
 * @return {?object} A SyntheticCompositionEvent.
 */function extractCompositionEvent(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent){var eventType;var fallbackData;if(canUseCompositionEvent){eventType = getCompositionEventType(topLevelType);}else if(!currentComposition){if(isFallbackCompositionStart(topLevelType,nativeEvent)){eventType = eventTypes.compositionStart;}}else if(isFallbackCompositionEnd(topLevelType,nativeEvent)){eventType = eventTypes.compositionEnd;}if(!eventType){return null;}if(useFallbackCompositionData){ // The current composition is stored statically and must not be
// overwritten while composition continues.
if(!currentComposition && eventType === eventTypes.compositionStart){currentComposition = FallbackCompositionState.getPooled(topLevelTarget);}else if(eventType === eventTypes.compositionEnd){if(currentComposition){fallbackData = currentComposition.getData();}}}var event=SyntheticCompositionEvent.getPooled(eventType,topLevelTargetID,nativeEvent);if(fallbackData){ // Inject data generated from fallback path into the synthetic event.
// This matches the property of native CompositionEventInterface.
event.data = fallbackData;}else {var customData=getDataFromCustomEvent(nativeEvent);if(customData !== null){event.data = customData;}}EventPropagators.accumulateTwoPhaseDispatches(event);return event;} /**
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The string corresponding to this `beforeInput` event.
 */function getNativeBeforeInputChars(topLevelType,nativeEvent){switch(topLevelType){case topLevelTypes.topCompositionEnd:return getDataFromCustomEvent(nativeEvent);case topLevelTypes.topKeyPress: /**
       * If native `textInput` events are available, our goal is to make
       * use of them. However, there is a special case: the spacebar key.
       * In Webkit, preventing default on a spacebar `textInput` event
       * cancels character insertion, but it *also* causes the browser
       * to fall back to its default spacebar behavior of scrolling the
       * page.
       *
       * Tracking at:
       * https://code.google.com/p/chromium/issues/detail?id=355103
       *
       * To avoid this issue, use the keypress event as if no `textInput`
       * event is available.
       */var which=nativeEvent.which;if(which !== SPACEBAR_CODE){return null;}hasSpaceKeypress = true;return SPACEBAR_CHAR;case topLevelTypes.topTextInput: // Record the characters to be added to the DOM.
var chars=nativeEvent.data; // If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to blacklist it.
if(chars === SPACEBAR_CHAR && hasSpaceKeypress){return null;}return chars;default: // For other native event types, do nothing.
return null;}} /**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 *
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The fallback string for this `beforeInput` event.
 */function getFallbackBeforeInputChars(topLevelType,nativeEvent){ // If we are currently composing (IME) and using a fallback to do so,
// try to extract the composed characters from the fallback object.
if(currentComposition){if(topLevelType === topLevelTypes.topCompositionEnd || isFallbackCompositionEnd(topLevelType,nativeEvent)){var chars=currentComposition.getData();FallbackCompositionState.release(currentComposition);currentComposition = null;return chars;}return null;}switch(topLevelType){case topLevelTypes.topPaste: // If a paste event occurs after a keypress, throw out the input
// chars. Paste events should not lead to BeforeInput events.
return null;case topLevelTypes.topKeyPress: /**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */if(nativeEvent.which && !isKeypressCommand(nativeEvent)){return String.fromCharCode(nativeEvent.which);}return null;case topLevelTypes.topCompositionEnd:return useFallbackCompositionData?null:nativeEvent.data;default:return null;}} /**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {DOMEventTarget} topLevelTarget The listening component root node.
 * @param {string} topLevelTargetID ID of `topLevelTarget`.
 * @param {object} nativeEvent Native browser event.
 * @return {?object} A SyntheticInputEvent.
 */function extractBeforeInputEvent(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent){var chars;if(canUseTextInputEvent){chars = getNativeBeforeInputChars(topLevelType,nativeEvent);}else {chars = getFallbackBeforeInputChars(topLevelType,nativeEvent);} // If no characters are being inserted, no BeforeInput event should
// be fired.
if(!chars){return null;}var event=SyntheticInputEvent.getPooled(eventTypes.beforeInput,topLevelTargetID,nativeEvent);event.data = chars;EventPropagators.accumulateTwoPhaseDispatches(event);return event;} /**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 *
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `composition` event types.
 */var BeforeInputEventPlugin={eventTypes:eventTypes, /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */extractEvents:function extractEvents(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent){return [extractCompositionEvent(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent),extractBeforeInputEvent(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent)];}};module.exports = BeforeInputEventPlugin;},{"141":141,"15":15,"20":20,"21":21,"22":22,"93":93,"97":97}],4:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */'use strict'; /**
 * CSS properties which accept numbers but are not in units of "px".
 */var isUnitlessNumber={boxFlex:true,boxFlexGroup:true,columnCount:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true, // SVG-related properties
fillOpacity:true,strokeDashoffset:true,strokeOpacity:true,strokeWidth:true}; /**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */function prefixKey(prefix,key){return prefix + key.charAt(0).toUpperCase() + key.substring(1);} /**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */var prefixes=['Webkit','ms','Moz','O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function(prop){prefixes.forEach(function(prefix){isUnitlessNumber[prefixKey(prefix,prop)] = isUnitlessNumber[prop];});}); /**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */var shorthandPropertyExpansions={background:{backgroundImage:true,backgroundPosition:true,backgroundRepeat:true,backgroundColor:true},border:{borderWidth:true,borderStyle:true,borderColor:true},borderBottom:{borderBottomWidth:true,borderBottomStyle:true,borderBottomColor:true},borderLeft:{borderLeftWidth:true,borderLeftStyle:true,borderLeftColor:true},borderRight:{borderRightWidth:true,borderRightStyle:true,borderRightColor:true},borderTop:{borderTopWidth:true,borderTopStyle:true,borderTopColor:true},font:{fontStyle:true,fontVariant:true,fontWeight:true,fontSize:true,lineHeight:true,fontFamily:true}};var CSSProperty={isUnitlessNumber:isUnitlessNumber,shorthandPropertyExpansions:shorthandPropertyExpansions};module.exports = CSSProperty;},{}],5:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSPropertyOperations
 * @typechecks static-only
 */'use strict';var CSSProperty=_dereq_(4);var ExecutionEnvironment=_dereq_(21);var camelizeStyleName=_dereq_(108);var dangerousStyleValue=_dereq_(113);var hyphenateStyleName=_dereq_(133);var memoizeStringOnly=_dereq_(143);var warning=_dereq_(154);var processStyleName=memoizeStringOnly(function(styleName){return hyphenateStyleName(styleName);});var styleFloatAccessor='cssFloat';if(ExecutionEnvironment.canUseDOM){ // IE8 only supports accessing cssFloat (standard) as styleFloat
if(document.documentElement.style.cssFloat === undefined){styleFloatAccessor = 'styleFloat';}}if("production" !== "development"){ // 'msTransform' is correct, but the other prefixes should be capitalized
var badVendoredStyleNamePattern=/^(?:webkit|moz|o)[A-Z]/; // style values shouldn't contain a semicolon
var badStyleValueWithSemicolonPattern=/;\s*$/;var warnedStyleNames={};var warnedStyleValues={};var warnHyphenatedStyleName=function warnHyphenatedStyleName(name){if(warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]){return;}warnedStyleNames[name] = true;"production" !== "development"?warning(false,'Unsupported style property %s. Did you mean %s?',name,camelizeStyleName(name)):null;};var warnBadVendoredStyleName=function warnBadVendoredStyleName(name){if(warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]){return;}warnedStyleNames[name] = true;"production" !== "development"?warning(false,'Unsupported vendor-prefixed style property %s. Did you mean %s?',name,name.charAt(0).toUpperCase() + name.slice(1)):null;};var warnStyleValueWithSemicolon=function warnStyleValueWithSemicolon(name,value){if(warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]){return;}warnedStyleValues[value] = true;"production" !== "development"?warning(false,'Style property values shouldn\'t contain a semicolon. ' + 'Try "%s: %s" instead.',name,value.replace(badStyleValueWithSemicolonPattern,'')):null;}; /**
   * @param {string} name
   * @param {*} value
   */var warnValidStyle=function warnValidStyle(name,value){if(name.indexOf('-') > -1){warnHyphenatedStyleName(name);}else if(badVendoredStyleNamePattern.test(name)){warnBadVendoredStyleName(name);}else if(badStyleValueWithSemicolonPattern.test(value)){warnStyleValueWithSemicolon(name,value);}};} /**
 * Operations for dealing with CSS properties.
 */var CSSPropertyOperations={ /**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @return {?string}
   */createMarkupForStyles:function createMarkupForStyles(styles){var serialized='';for(var styleName in styles) {if(!styles.hasOwnProperty(styleName)){continue;}var styleValue=styles[styleName];if("production" !== "development"){warnValidStyle(styleName,styleValue);}if(styleValue != null){serialized += processStyleName(styleName) + ':';serialized += dangerousStyleValue(styleName,styleValue) + ';';}}return serialized || null;}, /**
   * Sets the value for multiple styles on a node.  If a value is specified as
   * '' (empty string), the corresponding style property will be unset.
   *
   * @param {DOMElement} node
   * @param {object} styles
   */setValueForStyles:function setValueForStyles(node,styles){var style=node.style;for(var styleName in styles) {if(!styles.hasOwnProperty(styleName)){continue;}if("production" !== "development"){warnValidStyle(styleName,styles[styleName]);}var styleValue=dangerousStyleValue(styleName,styles[styleName]);if(styleName === 'float'){styleName = styleFloatAccessor;}if(styleValue){style[styleName] = styleValue;}else {var expansion=CSSProperty.shorthandPropertyExpansions[styleName];if(expansion){ // Shorthand property that IE8 won't like unsetting, so unset each
// component to placate it
for(var individualStyleName in expansion) {style[individualStyleName] = '';}}else {style[styleName] = '';}}}}};module.exports = CSSPropertyOperations;},{"108":108,"113":113,"133":133,"143":143,"154":154,"21":21,"4":4}],6:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CallbackQueue
 */'use strict';var PooledClass=_dereq_(28);var assign=_dereq_(27);var invariant=_dereq_(135); /**
 * A specialized pseudo-event module to help keep track of components waiting to
 * be notified when their DOM representations are available for use.
 *
 * This implements `PooledClass`, so you should never need to instantiate this.
 * Instead, use `CallbackQueue.getPooled()`.
 *
 * @class ReactMountReady
 * @implements PooledClass
 * @internal
 */function CallbackQueue(){this._callbacks = null;this._contexts = null;}assign(CallbackQueue.prototype,{ /**
   * Enqueues a callback to be invoked when `notifyAll` is invoked.
   *
   * @param {function} callback Invoked when `notifyAll` is invoked.
   * @param {?object} context Context to call `callback` with.
   * @internal
   */enqueue:function enqueue(callback,context){this._callbacks = this._callbacks || [];this._contexts = this._contexts || [];this._callbacks.push(callback);this._contexts.push(context);}, /**
   * Invokes all enqueued callbacks and clears the queue. This is invoked after
   * the DOM representation of a component has been created or updated.
   *
   * @internal
   */notifyAll:function notifyAll(){var callbacks=this._callbacks;var contexts=this._contexts;if(callbacks){"production" !== "development"?invariant(callbacks.length === contexts.length,'Mismatched list of contexts in callback queue'):invariant(callbacks.length === contexts.length);this._callbacks = null;this._contexts = null;for(var i=0,l=callbacks.length;i < l;i++) {callbacks[i].call(contexts[i]);}callbacks.length = 0;contexts.length = 0;}}, /**
   * Resets the internal queue.
   *
   * @internal
   */reset:function reset(){this._callbacks = null;this._contexts = null;}, /**
   * `PooledClass` looks for this.
   */destructor:function destructor(){this.reset();}});PooledClass.addPoolingTo(CallbackQueue);module.exports = CallbackQueue;},{"135":135,"27":27,"28":28}],7:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ChangeEventPlugin
 */'use strict';var EventConstants=_dereq_(15);var EventPluginHub=_dereq_(17);var EventPropagators=_dereq_(20);var ExecutionEnvironment=_dereq_(21);var ReactUpdates=_dereq_(87);var SyntheticEvent=_dereq_(95);var isEventSupported=_dereq_(136);var isTextInputElement=_dereq_(138);var keyOf=_dereq_(141);var topLevelTypes=EventConstants.topLevelTypes;var eventTypes={change:{phasedRegistrationNames:{bubbled:keyOf({onChange:null}),captured:keyOf({onChangeCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topChange,topLevelTypes.topClick,topLevelTypes.topFocus,topLevelTypes.topInput,topLevelTypes.topKeyDown,topLevelTypes.topKeyUp,topLevelTypes.topSelectionChange]}}; /**
 * For IE shims
 */var activeElement=null;var activeElementID=null;var activeElementValue=null;var activeElementValueProp=null; /**
 * SECTION: handle `change` event
 */function shouldUseChangeEvent(elem){return elem.nodeName === 'SELECT' || elem.nodeName === 'INPUT' && elem.type === 'file';}var doesChangeEventBubble=false;if(ExecutionEnvironment.canUseDOM){ // See `handleChange` comment below
doesChangeEventBubble = isEventSupported('change') && (!('documentMode' in document) || document.documentMode > 8);}function manualDispatchChangeEvent(nativeEvent){var event=SyntheticEvent.getPooled(eventTypes.change,activeElementID,nativeEvent);EventPropagators.accumulateTwoPhaseDispatches(event); // If change and propertychange bubbled, we'd just bind to it like all the
// other events and have it go through ReactBrowserEventEmitter. Since it
// doesn't, we manually listen for the events and so we have to enqueue and
// process the abstract event manually.
//
// Batching is necessary here in order to ensure that all event handlers run
// before the next rerender (including event handlers attached to ancestor
// elements instead of directly on the input). Without this, controlled
// components don't work properly in conjunction with event bubbling because
// the component is rerendered and the value reverted before all the event
// handlers can run. See https://github.com/facebook/react/issues/708.
ReactUpdates.batchedUpdates(runEventInBatch,event);}function runEventInBatch(event){EventPluginHub.enqueueEvents(event);EventPluginHub.processEventQueue();}function startWatchingForChangeEventIE8(target,targetID){activeElement = target;activeElementID = targetID;activeElement.attachEvent('onchange',manualDispatchChangeEvent);}function stopWatchingForChangeEventIE8(){if(!activeElement){return;}activeElement.detachEvent('onchange',manualDispatchChangeEvent);activeElement = null;activeElementID = null;}function getTargetIDForChangeEvent(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType === topLevelTypes.topChange){return topLevelTargetID;}}function handleEventsForChangeEventIE8(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType === topLevelTypes.topFocus){ // stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
stopWatchingForChangeEventIE8();startWatchingForChangeEventIE8(topLevelTarget,topLevelTargetID);}else if(topLevelType === topLevelTypes.topBlur){stopWatchingForChangeEventIE8();}} /**
 * SECTION: handle `input` event
 */var isInputEventSupported=false;if(ExecutionEnvironment.canUseDOM){ // IE9 claims to support the input event but fails to trigger it when
// deleting text, so we ignore its input events
isInputEventSupported = isEventSupported('input') && (!('documentMode' in document) || document.documentMode > 9);} /**
 * (For old IE.) Replacement getter/setter for the `value` property that gets
 * set on the active element.
 */var newValueProp={get:function get(){return activeElementValueProp.get.call(this);},set:function set(val){ // Cast to a string so we can do equality checks.
activeElementValue = '' + val;activeElementValueProp.set.call(this,val);}}; /**
 * (For old IE.) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */function startWatchingForValueChange(target,targetID){activeElement = target;activeElementID = targetID;activeElementValue = target.value;activeElementValueProp = Object.getOwnPropertyDescriptor(target.constructor.prototype,'value');Object.defineProperty(activeElement,'value',newValueProp);activeElement.attachEvent('onpropertychange',handlePropertyChange);} /**
 * (For old IE.) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */function stopWatchingForValueChange(){if(!activeElement){return;} // delete restores the original property definition
delete activeElement.value;activeElement.detachEvent('onpropertychange',handlePropertyChange);activeElement = null;activeElementID = null;activeElementValue = null;activeElementValueProp = null;} /**
 * (For old IE.) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */function handlePropertyChange(nativeEvent){if(nativeEvent.propertyName !== 'value'){return;}var value=nativeEvent.srcElement.value;if(value === activeElementValue){return;}activeElementValue = value;manualDispatchChangeEvent(nativeEvent);} /**
 * If a `change` event should be fired, returns the target's ID.
 */function getTargetIDForInputEvent(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType === topLevelTypes.topInput){ // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
// what we want so fall through here and trigger an abstract event
return topLevelTargetID;}} // For IE8 and IE9.
function handleEventsForInputEventIE(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType === topLevelTypes.topFocus){ // In IE8, we can capture almost all .value changes by adding a
// propertychange handler and looking for events with propertyName
// equal to 'value'
// In IE9, propertychange fires for most input events but is buggy and
// doesn't fire when text is deleted, but conveniently, selectionchange
// appears to fire in all of the remaining cases so we catch those and
// forward the event if the value has changed
// In either case, we don't want to call the event handler if the value
// is changed from JS so we redefine a setter for `.value` that updates
// our activeElementValue variable, allowing us to ignore those changes
//
// stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
stopWatchingForValueChange();startWatchingForValueChange(topLevelTarget,topLevelTargetID);}else if(topLevelType === topLevelTypes.topBlur){stopWatchingForValueChange();}} // For IE8 and IE9.
function getTargetIDForInputEventIE(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType === topLevelTypes.topSelectionChange || topLevelType === topLevelTypes.topKeyUp || topLevelType === topLevelTypes.topKeyDown){ // On the selectionchange event, the target is just document which isn't
// helpful for us so just check activeElement instead.
//
// 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
// propertychange on the first input event after setting `value` from a
// script and fires only keydown, keypress, keyup. Catching keyup usually
// gets it and catching keydown lets us fire an event for the first
// keystroke if user does a key repeat (it'll be a little delayed: right
// before the second keystroke). Other input methods (e.g., paste) seem to
// fire selectionchange normally.
if(activeElement && activeElement.value !== activeElementValue){activeElementValue = activeElement.value;return activeElementID;}}} /**
 * SECTION: handle `click` event
 */function shouldUseClickEvent(elem){ // Use the `click` event to detect changes to checkbox and radio inputs.
// This approach works across all browsers, whereas `change` does not fire
// until `blur` in IE8.
return elem.nodeName === 'INPUT' && (elem.type === 'checkbox' || elem.type === 'radio');}function getTargetIDForClickEvent(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType === topLevelTypes.topClick){return topLevelTargetID;}} /**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */var ChangeEventPlugin={eventTypes:eventTypes, /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */extractEvents:function extractEvents(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent){var getTargetIDFunc,handleEventFunc;if(shouldUseChangeEvent(topLevelTarget)){if(doesChangeEventBubble){getTargetIDFunc = getTargetIDForChangeEvent;}else {handleEventFunc = handleEventsForChangeEventIE8;}}else if(isTextInputElement(topLevelTarget)){if(isInputEventSupported){getTargetIDFunc = getTargetIDForInputEvent;}else {getTargetIDFunc = getTargetIDForInputEventIE;handleEventFunc = handleEventsForInputEventIE;}}else if(shouldUseClickEvent(topLevelTarget)){getTargetIDFunc = getTargetIDForClickEvent;}if(getTargetIDFunc){var targetID=getTargetIDFunc(topLevelType,topLevelTarget,topLevelTargetID);if(targetID){var event=SyntheticEvent.getPooled(eventTypes.change,targetID,nativeEvent);EventPropagators.accumulateTwoPhaseDispatches(event);return event;}}if(handleEventFunc){handleEventFunc(topLevelType,topLevelTarget,topLevelTargetID);}}};module.exports = ChangeEventPlugin;},{"136":136,"138":138,"141":141,"15":15,"17":17,"20":20,"21":21,"87":87,"95":95}],8:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ClientReactRootIndex
 * @typechecks
 */'use strict';var nextReactRootIndex=0;var ClientReactRootIndex={createReactRootIndex:function createReactRootIndex(){return nextReactRootIndex++;}};module.exports = ClientReactRootIndex;},{}],9:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMChildrenOperations
 * @typechecks static-only
 */'use strict';var Danger=_dereq_(12);var ReactMultiChildUpdateTypes=_dereq_(72);var setTextContent=_dereq_(149);var invariant=_dereq_(135); /**
 * Inserts `childNode` as a child of `parentNode` at the `index`.
 *
 * @param {DOMElement} parentNode Parent node in which to insert.
 * @param {DOMElement} childNode Child node to insert.
 * @param {number} index Index at which to insert the child.
 * @internal
 */function insertChildAt(parentNode,childNode,index){ // By exploiting arrays returning `undefined` for an undefined index, we can
// rely exclusively on `insertBefore(node, null)` instead of also using
// `appendChild(node)`. However, using `undefined` is not allowed by all
// browsers so we must replace it with `null`.
parentNode.insertBefore(childNode,parentNode.childNodes[index] || null);} /**
 * Operations for updating with DOM children.
 */var DOMChildrenOperations={dangerouslyReplaceNodeWithMarkup:Danger.dangerouslyReplaceNodeWithMarkup,updateTextContent:setTextContent, /**
   * Updates a component's children by processing a series of updates. The
   * update configurations are each expected to have a `parentNode` property.
   *
   * @param {array<object>} updates List of update configurations.
   * @param {array<string>} markupList List of markup strings.
   * @internal
   */processUpdates:function processUpdates(updates,markupList){var update; // Mapping from parent IDs to initial child orderings.
var initialChildren=null; // List of children that will be moved or removed.
var updatedChildren=null;for(var i=0;i < updates.length;i++) {update = updates[i];if(update.type === ReactMultiChildUpdateTypes.MOVE_EXISTING || update.type === ReactMultiChildUpdateTypes.REMOVE_NODE){var updatedIndex=update.fromIndex;var updatedChild=update.parentNode.childNodes[updatedIndex];var parentID=update.parentID;"production" !== "development"?invariant(updatedChild,'processUpdates(): Unable to find child %s of element. This ' + 'probably means the DOM was unexpectedly mutated (e.g., by the ' + 'browser), usually due to forgetting a <tbody> when using tables, ' + 'nesting tags like <form>, <p>, or <a>, or using non-SVG elements ' + 'in an <svg> parent. Try inspecting the child nodes of the element ' + 'with React ID `%s`.',updatedIndex,parentID):invariant(updatedChild);initialChildren = initialChildren || {};initialChildren[parentID] = initialChildren[parentID] || [];initialChildren[parentID][updatedIndex] = updatedChild;updatedChildren = updatedChildren || [];updatedChildren.push(updatedChild);}}var renderedMarkup=Danger.dangerouslyRenderMarkup(markupList); // Remove updated children first so that `toIndex` is consistent.
if(updatedChildren){for(var j=0;j < updatedChildren.length;j++) {updatedChildren[j].parentNode.removeChild(updatedChildren[j]);}}for(var k=0;k < updates.length;k++) {update = updates[k];switch(update.type){case ReactMultiChildUpdateTypes.INSERT_MARKUP:insertChildAt(update.parentNode,renderedMarkup[update.markupIndex],update.toIndex);break;case ReactMultiChildUpdateTypes.MOVE_EXISTING:insertChildAt(update.parentNode,initialChildren[update.parentID][update.fromIndex],update.toIndex);break;case ReactMultiChildUpdateTypes.TEXT_CONTENT:setTextContent(update.parentNode,update.textContent);break;case ReactMultiChildUpdateTypes.REMOVE_NODE: // Already removed by the for-loop above.
break;}}}};module.exports = DOMChildrenOperations;},{"12":12,"135":135,"149":149,"72":72}],10:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMProperty
 * @typechecks static-only
 */ /*jslint bitwise: true */'use strict';var invariant=_dereq_(135);function checkMask(value,bitmask){return (value & bitmask) === bitmask;}var DOMPropertyInjection={ /**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */MUST_USE_ATTRIBUTE:0x1,MUST_USE_PROPERTY:0x2,HAS_SIDE_EFFECTS:0x4,HAS_BOOLEAN_VALUE:0x8,HAS_NUMERIC_VALUE:0x10,HAS_POSITIVE_NUMERIC_VALUE:0x20 | 0x10,HAS_OVERLOADED_BOOLEAN_VALUE:0x40, /**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * isCustomAttribute: function that given an attribute name will return true
   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
   * attributes where it's impossible to enumerate all of the possible
   * attribute names,
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */injectDOMPropertyConfig:function injectDOMPropertyConfig(domPropertyConfig){var Properties=domPropertyConfig.Properties || {};var DOMAttributeNames=domPropertyConfig.DOMAttributeNames || {};var DOMPropertyNames=domPropertyConfig.DOMPropertyNames || {};var DOMMutationMethods=domPropertyConfig.DOMMutationMethods || {};if(domPropertyConfig.isCustomAttribute){DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);}for(var propName in Properties) {"production" !== "development"?invariant(!DOMProperty.isStandardName.hasOwnProperty(propName),'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' + '\'%s\' which has already been injected. You may be accidentally ' + 'injecting the same DOM property config twice, or you may be ' + 'injecting two configs that have conflicting property names.',propName):invariant(!DOMProperty.isStandardName.hasOwnProperty(propName));DOMProperty.isStandardName[propName] = true;var lowerCased=propName.toLowerCase();DOMProperty.getPossibleStandardName[lowerCased] = propName;if(DOMAttributeNames.hasOwnProperty(propName)){var attributeName=DOMAttributeNames[propName];DOMProperty.getPossibleStandardName[attributeName] = propName;DOMProperty.getAttributeName[propName] = attributeName;}else {DOMProperty.getAttributeName[propName] = lowerCased;}DOMProperty.getPropertyName[propName] = DOMPropertyNames.hasOwnProperty(propName)?DOMPropertyNames[propName]:propName;if(DOMMutationMethods.hasOwnProperty(propName)){DOMProperty.getMutationMethod[propName] = DOMMutationMethods[propName];}else {DOMProperty.getMutationMethod[propName] = null;}var propConfig=Properties[propName];DOMProperty.mustUseAttribute[propName] = checkMask(propConfig,DOMPropertyInjection.MUST_USE_ATTRIBUTE);DOMProperty.mustUseProperty[propName] = checkMask(propConfig,DOMPropertyInjection.MUST_USE_PROPERTY);DOMProperty.hasSideEffects[propName] = checkMask(propConfig,DOMPropertyInjection.HAS_SIDE_EFFECTS);DOMProperty.hasBooleanValue[propName] = checkMask(propConfig,DOMPropertyInjection.HAS_BOOLEAN_VALUE);DOMProperty.hasNumericValue[propName] = checkMask(propConfig,DOMPropertyInjection.HAS_NUMERIC_VALUE);DOMProperty.hasPositiveNumericValue[propName] = checkMask(propConfig,DOMPropertyInjection.HAS_POSITIVE_NUMERIC_VALUE);DOMProperty.hasOverloadedBooleanValue[propName] = checkMask(propConfig,DOMPropertyInjection.HAS_OVERLOADED_BOOLEAN_VALUE);"production" !== "development"?invariant(!DOMProperty.mustUseAttribute[propName] || !DOMProperty.mustUseProperty[propName],'DOMProperty: Cannot require using both attribute and property: %s',propName):invariant(!DOMProperty.mustUseAttribute[propName] || !DOMProperty.mustUseProperty[propName]);"production" !== "development"?invariant(DOMProperty.mustUseProperty[propName] || !DOMProperty.hasSideEffects[propName],'DOMProperty: Properties that have side effects must use property: %s',propName):invariant(DOMProperty.mustUseProperty[propName] || !DOMProperty.hasSideEffects[propName]);"production" !== "development"?invariant(!!DOMProperty.hasBooleanValue[propName] + !!DOMProperty.hasNumericValue[propName] + !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1,'DOMProperty: Value can be one of boolean, overloaded boolean, or ' + 'numeric value, but not a combination: %s',propName):invariant(!!DOMProperty.hasBooleanValue[propName] + !!DOMProperty.hasNumericValue[propName] + !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1);}}};var defaultValueCache={}; /**
 * DOMProperty exports lookup objects that can be used like functions:
 *
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 *
 * Although this may be confusing, it performs better in general.
 *
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */var DOMProperty={ID_ATTRIBUTE_NAME:'data-reactid', /**
   * Checks whether a property name is a standard property.
   * @type {Object}
   */isStandardName:{}, /**
   * Mapping from lowercase property names to the properly cased version, used
   * to warn in the case of missing properties.
   * @type {Object}
   */getPossibleStandardName:{}, /**
   * Mapping from normalized names to attribute names that differ. Attribute
   * names are used when rendering markup or with `*Attribute()`.
   * @type {Object}
   */getAttributeName:{}, /**
   * Mapping from normalized names to properties on DOM node instances.
   * (This includes properties that mutate due to external factors.)
   * @type {Object}
   */getPropertyName:{}, /**
   * Mapping from normalized names to mutation methods. This will only exist if
   * mutation cannot be set simply by the property or `setAttribute()`.
   * @type {Object}
   */getMutationMethod:{}, /**
   * Whether the property must be accessed and mutated as an object property.
   * @type {Object}
   */mustUseAttribute:{}, /**
   * Whether the property must be accessed and mutated using `*Attribute()`.
   * (This includes anything that fails `<propName> in <element>`.)
   * @type {Object}
   */mustUseProperty:{}, /**
   * Whether or not setting a value causes side effects such as triggering
   * resources to be loaded or text selection changes. We must ensure that
   * the value is only set if it has changed.
   * @type {Object}
   */hasSideEffects:{}, /**
   * Whether the property should be removed when set to a falsey value.
   * @type {Object}
   */hasBooleanValue:{}, /**
   * Whether the property must be numeric or parse as a
   * numeric and should be removed when set to a falsey value.
   * @type {Object}
   */hasNumericValue:{}, /**
   * Whether the property must be positive numeric or parse as a positive
   * numeric and should be removed when set to a falsey value.
   * @type {Object}
   */hasPositiveNumericValue:{}, /**
   * Whether the property can be used as a flag as well as with a value. Removed
   * when strictly equal to false; present without a value when strictly equal
   * to true; present with a value otherwise.
   * @type {Object}
   */hasOverloadedBooleanValue:{}, /**
   * All of the isCustomAttribute() functions that have been injected.
   */_isCustomAttributeFunctions:[], /**
   * Checks whether a property name is a custom attribute.
   * @method
   */isCustomAttribute:function isCustomAttribute(attributeName){for(var i=0;i < DOMProperty._isCustomAttributeFunctions.length;i++) {var isCustomAttributeFn=DOMProperty._isCustomAttributeFunctions[i];if(isCustomAttributeFn(attributeName)){return true;}}return false;}, /**
   * Returns the default property value for a DOM property (i.e., not an
   * attribute). Most default values are '' or false, but not all. Worse yet,
   * some (in particular, `type`) vary depending on the type of element.
   *
   * TODO: Is it better to grab all the possible properties when creating an
   * element to avoid having to create the same element twice?
   */getDefaultValueForProperty:function getDefaultValueForProperty(nodeName,prop){var nodeDefaults=defaultValueCache[nodeName];var testElement;if(!nodeDefaults){defaultValueCache[nodeName] = nodeDefaults = {};}if(!(prop in nodeDefaults)){testElement = document.createElement(nodeName);nodeDefaults[prop] = testElement[prop];}return nodeDefaults[prop];},injection:DOMPropertyInjection};module.exports = DOMProperty;},{"135":135}],11:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMPropertyOperations
 * @typechecks static-only
 */'use strict';var DOMProperty=_dereq_(10);var quoteAttributeValueForBrowser=_dereq_(147);var warning=_dereq_(154);function shouldIgnoreValue(name,value){return value == null || DOMProperty.hasBooleanValue[name] && !value || DOMProperty.hasNumericValue[name] && isNaN(value) || DOMProperty.hasPositiveNumericValue[name] && value < 1 || DOMProperty.hasOverloadedBooleanValue[name] && value === false;}if("production" !== "development"){var reactProps={children:true,dangerouslySetInnerHTML:true,key:true,ref:true};var warnedProperties={};var warnUnknownProperty=function warnUnknownProperty(name){if(reactProps.hasOwnProperty(name) && reactProps[name] || warnedProperties.hasOwnProperty(name) && warnedProperties[name]){return;}warnedProperties[name] = true;var lowerCasedName=name.toLowerCase(); // data-* attributes should be lowercase; suggest the lowercase version
var standardName=DOMProperty.isCustomAttribute(lowerCasedName)?lowerCasedName:DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName)?DOMProperty.getPossibleStandardName[lowerCasedName]:null; // For now, only warn when we have a suggested correction. This prevents
// logging too much when using transferPropsTo.
"production" !== "development"?warning(standardName == null,'Unknown DOM property %s. Did you mean %s?',name,standardName):null;};} /**
 * Operations for dealing with DOM properties.
 */var DOMPropertyOperations={ /**
   * Creates markup for the ID property.
   *
   * @param {string} id Unescaped ID.
   * @return {string} Markup string.
   */createMarkupForID:function createMarkupForID(id){return DOMProperty.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser(id);}, /**
   * Creates markup for a property.
   *
   * @param {string} name
   * @param {*} value
   * @return {?string} Markup string, or null if the property was invalid.
   */createMarkupForProperty:function createMarkupForProperty(name,value){if(DOMProperty.isStandardName.hasOwnProperty(name) && DOMProperty.isStandardName[name]){if(shouldIgnoreValue(name,value)){return '';}var attributeName=DOMProperty.getAttributeName[name];if(DOMProperty.hasBooleanValue[name] || DOMProperty.hasOverloadedBooleanValue[name] && value === true){return attributeName;}return attributeName + '=' + quoteAttributeValueForBrowser(value);}else if(DOMProperty.isCustomAttribute(name)){if(value == null){return '';}return name + '=' + quoteAttributeValueForBrowser(value);}else if("production" !== "development"){warnUnknownProperty(name);}return null;}, /**
   * Sets the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   * @param {*} value
   */setValueForProperty:function setValueForProperty(node,name,value){if(DOMProperty.isStandardName.hasOwnProperty(name) && DOMProperty.isStandardName[name]){var mutationMethod=DOMProperty.getMutationMethod[name];if(mutationMethod){mutationMethod(node,value);}else if(shouldIgnoreValue(name,value)){this.deleteValueForProperty(node,name);}else if(DOMProperty.mustUseAttribute[name]){ // `setAttribute` with objects becomes only `[object]` in IE8/9,
// ('' + value) makes it output the correct toString()-value.
node.setAttribute(DOMProperty.getAttributeName[name],'' + value);}else {var propName=DOMProperty.getPropertyName[name]; // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
// property type before comparing; only `value` does and is string.
if(!DOMProperty.hasSideEffects[name] || '' + node[propName] !== '' + value){ // Contrary to `setAttribute`, object properties are properly
// `toString`ed by IE8/9.
node[propName] = value;}}}else if(DOMProperty.isCustomAttribute(name)){if(value == null){node.removeAttribute(name);}else {node.setAttribute(name,'' + value);}}else if("production" !== "development"){warnUnknownProperty(name);}}, /**
   * Deletes the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */deleteValueForProperty:function deleteValueForProperty(node,name){if(DOMProperty.isStandardName.hasOwnProperty(name) && DOMProperty.isStandardName[name]){var mutationMethod=DOMProperty.getMutationMethod[name];if(mutationMethod){mutationMethod(node,undefined);}else if(DOMProperty.mustUseAttribute[name]){node.removeAttribute(DOMProperty.getAttributeName[name]);}else {var propName=DOMProperty.getPropertyName[name];var defaultValue=DOMProperty.getDefaultValueForProperty(node.nodeName,propName);if(!DOMProperty.hasSideEffects[name] || '' + node[propName] !== defaultValue){node[propName] = defaultValue;}}}else if(DOMProperty.isCustomAttribute(name)){node.removeAttribute(name);}else if("production" !== "development"){warnUnknownProperty(name);}}};module.exports = DOMPropertyOperations;},{"10":10,"147":147,"154":154}],12:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Danger
 * @typechecks static-only
 */ /*jslint evil: true, sub: true */'use strict';var ExecutionEnvironment=_dereq_(21);var createNodesFromMarkup=_dereq_(112);var emptyFunction=_dereq_(114);var getMarkupWrap=_dereq_(127);var invariant=_dereq_(135);var OPEN_TAG_NAME_EXP=/^(<[^ \/>]+)/;var RESULT_INDEX_ATTR='data-danger-index'; /**
 * Extracts the `nodeName` from a string of markup.
 *
 * NOTE: Extracting the `nodeName` does not require a regular expression match
 * because we make assumptions about React-generated markup (i.e. there are no
 * spaces surrounding the opening tag and there is at least one attribute).
 *
 * @param {string} markup String of markup.
 * @return {string} Node name of the supplied markup.
 * @see http://jsperf.com/extract-nodename
 */function getNodeName(markup){return markup.substring(1,markup.indexOf(' '));}var Danger={ /**
   * Renders markup into an array of nodes. The markup is expected to render
   * into a list of root nodes. Also, the length of `resultList` and
   * `markupList` should be the same.
   *
   * @param {array<string>} markupList List of markup strings to render.
   * @return {array<DOMElement>} List of rendered nodes.
   * @internal
   */dangerouslyRenderMarkup:function dangerouslyRenderMarkup(markupList){"production" !== "development"?invariant(ExecutionEnvironment.canUseDOM,'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' + 'thread. Make sure `window` and `document` are available globally ' + 'before requiring React when unit testing or use ' + 'React.renderToString for server rendering.'):invariant(ExecutionEnvironment.canUseDOM);var nodeName;var markupByNodeName={}; // Group markup by `nodeName` if a wrap is necessary, else by '*'.
for(var i=0;i < markupList.length;i++) {"production" !== "development"?invariant(markupList[i],'dangerouslyRenderMarkup(...): Missing markup.'):invariant(markupList[i]);nodeName = getNodeName(markupList[i]);nodeName = getMarkupWrap(nodeName)?nodeName:'*';markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];markupByNodeName[nodeName][i] = markupList[i];}var resultList=[];var resultListAssignmentCount=0;for(nodeName in markupByNodeName) {if(!markupByNodeName.hasOwnProperty(nodeName)){continue;}var markupListByNodeName=markupByNodeName[nodeName]; // This for-in loop skips the holes of the sparse array. The order of
// iteration should follow the order of assignment, which happens to match
// numerical index order, but we don't rely on that.
var resultIndex;for(resultIndex in markupListByNodeName) {if(markupListByNodeName.hasOwnProperty(resultIndex)){var markup=markupListByNodeName[resultIndex]; // Push the requested markup with an additional RESULT_INDEX_ATTR
// attribute.  If the markup does not start with a < character, it
// will be discarded below (with an appropriate console.error).
markupListByNodeName[resultIndex] = markup.replace(OPEN_TAG_NAME_EXP, // This index will be parsed back out below.
'$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" ');}} // Render each group of markup with similar wrapping `nodeName`.
var renderNodes=createNodesFromMarkup(markupListByNodeName.join(''),emptyFunction // Do nothing special with <script> tags.
);for(var j=0;j < renderNodes.length;++j) {var renderNode=renderNodes[j];if(renderNode.hasAttribute && renderNode.hasAttribute(RESULT_INDEX_ATTR)){resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);renderNode.removeAttribute(RESULT_INDEX_ATTR);"production" !== "development"?invariant(!resultList.hasOwnProperty(resultIndex),'Danger: Assigning to an already-occupied result index.'):invariant(!resultList.hasOwnProperty(resultIndex));resultList[resultIndex] = renderNode; // This should match resultList.length and markupList.length when
// we're done.
resultListAssignmentCount += 1;}else if("production" !== "development"){console.error('Danger: Discarding unexpected node:',renderNode);}}} // Although resultList was populated out of order, it should now be a dense
// array.
"production" !== "development"?invariant(resultListAssignmentCount === resultList.length,'Danger: Did not assign to every index of resultList.'):invariant(resultListAssignmentCount === resultList.length);"production" !== "development"?invariant(resultList.length === markupList.length,'Danger: Expected markup to render %s nodes, but rendered %s.',markupList.length,resultList.length):invariant(resultList.length === markupList.length);return resultList;}, /**
   * Replaces a node with a string of markup at its current position within its
   * parent. The markup must render into a single root node.
   *
   * @param {DOMElement} oldChild Child node to replace.
   * @param {string} markup Markup to render in place of the child node.
   * @internal
   */dangerouslyReplaceNodeWithMarkup:function dangerouslyReplaceNodeWithMarkup(oldChild,markup){"production" !== "development"?invariant(ExecutionEnvironment.canUseDOM,'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' + 'worker thread. Make sure `window` and `document` are available ' + 'globally before requiring React when unit testing or use ' + 'React.renderToString for server rendering.'):invariant(ExecutionEnvironment.canUseDOM);"production" !== "development"?invariant(markup,'dangerouslyReplaceNodeWithMarkup(...): Missing markup.'):invariant(markup);"production" !== "development"?invariant(oldChild.tagName.toLowerCase() !== 'html','dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' + '<html> node. This is because browser quirks make this unreliable ' + 'and/or slow. If you want to render to the root you must use ' + 'server rendering. See React.renderToString().'):invariant(oldChild.tagName.toLowerCase() !== 'html');var newChild=createNodesFromMarkup(markup,emptyFunction)[0];oldChild.parentNode.replaceChild(newChild,oldChild);}};module.exports = Danger;},{"112":112,"114":114,"127":127,"135":135,"21":21}],13:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DefaultEventPluginOrder
 */'use strict';var keyOf=_dereq_(141); /**
 * Module that is injectable into `EventPluginHub`, that specifies a
 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
 * plugins, without having to package every one of them. This is better than
 * having plugins be ordered in the same order that they are injected because
 * that ordering would be influenced by the packaging order.
 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
 */var DefaultEventPluginOrder=[keyOf({ResponderEventPlugin:null}),keyOf({SimpleEventPlugin:null}),keyOf({TapEventPlugin:null}),keyOf({EnterLeaveEventPlugin:null}),keyOf({ChangeEventPlugin:null}),keyOf({SelectEventPlugin:null}),keyOf({BeforeInputEventPlugin:null}),keyOf({AnalyticsEventPlugin:null}),keyOf({MobileSafariClickEventPlugin:null})];module.exports = DefaultEventPluginOrder;},{"141":141}],14:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EnterLeaveEventPlugin
 * @typechecks static-only
 */'use strict';var EventConstants=_dereq_(15);var EventPropagators=_dereq_(20);var SyntheticMouseEvent=_dereq_(99);var ReactMount=_dereq_(70);var keyOf=_dereq_(141);var topLevelTypes=EventConstants.topLevelTypes;var getFirstReactDOM=ReactMount.getFirstReactDOM;var eventTypes={mouseEnter:{registrationName:keyOf({onMouseEnter:null}),dependencies:[topLevelTypes.topMouseOut,topLevelTypes.topMouseOver]},mouseLeave:{registrationName:keyOf({onMouseLeave:null}),dependencies:[topLevelTypes.topMouseOut,topLevelTypes.topMouseOver]}};var extractedEvents=[null,null];var EnterLeaveEventPlugin={eventTypes:eventTypes, /**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */extractEvents:function extractEvents(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent){if(topLevelType === topLevelTypes.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)){return null;}if(topLevelType !== topLevelTypes.topMouseOut && topLevelType !== topLevelTypes.topMouseOver){ // Must not be a mouse in or mouse out - ignoring.
return null;}var win;if(topLevelTarget.window === topLevelTarget){ // `topLevelTarget` is probably a window object.
win = topLevelTarget;}else { // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
var doc=topLevelTarget.ownerDocument;if(doc){win = doc.defaultView || doc.parentWindow;}else {win = window;}}var from,to;if(topLevelType === topLevelTypes.topMouseOut){from = topLevelTarget;to = getFirstReactDOM(nativeEvent.relatedTarget || nativeEvent.toElement) || win;}else {from = win;to = topLevelTarget;}if(from === to){ // Nothing pertains to our managed components.
return null;}var fromID=from?ReactMount.getID(from):'';var toID=to?ReactMount.getID(to):'';var leave=SyntheticMouseEvent.getPooled(eventTypes.mouseLeave,fromID,nativeEvent);leave.type = 'mouseleave';leave.target = from;leave.relatedTarget = to;var enter=SyntheticMouseEvent.getPooled(eventTypes.mouseEnter,toID,nativeEvent);enter.type = 'mouseenter';enter.target = to;enter.relatedTarget = from;EventPropagators.accumulateEnterLeaveDispatches(leave,enter,fromID,toID);extractedEvents[0] = leave;extractedEvents[1] = enter;return extractedEvents;}};module.exports = EnterLeaveEventPlugin;},{"141":141,"15":15,"20":20,"70":70,"99":99}],15:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventConstants
 */'use strict';var keyMirror=_dereq_(140);var PropagationPhases=keyMirror({bubbled:null,captured:null}); /**
 * Types of raw signals from the browser caught at the top level.
 */var topLevelTypes=keyMirror({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTextInput:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null});var EventConstants={topLevelTypes:topLevelTypes,PropagationPhases:PropagationPhases};module.exports = EventConstants;},{"140":140}],16:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule EventListener
 * @typechecks
 */var emptyFunction=_dereq_(114); /**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */var EventListener={ /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */listen:function listen(target,eventType,callback){if(target.addEventListener){target.addEventListener(eventType,callback,false);return {remove:function remove(){target.removeEventListener(eventType,callback,false);}};}else if(target.attachEvent){target.attachEvent('on' + eventType,callback);return {remove:function remove(){target.detachEvent('on' + eventType,callback);}};}}, /**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */capture:function capture(target,eventType,callback){if(!target.addEventListener){if("production" !== "development"){console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');}return {remove:emptyFunction};}else {target.addEventListener(eventType,callback,true);return {remove:function remove(){target.removeEventListener(eventType,callback,true);}};}},registerDefault:function registerDefault(){}};module.exports = EventListener;},{"114":114}],17:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginHub
 */'use strict';var EventPluginRegistry=_dereq_(18);var EventPluginUtils=_dereq_(19);var accumulateInto=_dereq_(105);var forEachAccumulated=_dereq_(120);var invariant=_dereq_(135); /**
 * Internal store for event listeners
 */var listenerBank={}; /**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */var eventQueue=null; /**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @private
 */var executeDispatchesAndRelease=function executeDispatchesAndRelease(event){if(event){var executeDispatch=EventPluginUtils.executeDispatch; // Plugins can provide custom behavior when dispatching events.
var PluginModule=EventPluginRegistry.getPluginModuleForEvent(event);if(PluginModule && PluginModule.executeDispatch){executeDispatch = PluginModule.executeDispatch;}EventPluginUtils.executeDispatchesInOrder(event,executeDispatch);if(!event.isPersistent()){event.constructor.release(event);}}}; /**
 * - `InstanceHandle`: [required] Module that performs logical traversals of DOM
 *   hierarchy given ids of the logical DOM elements involved.
 */var InstanceHandle=null;function validateInstanceHandle(){var valid=InstanceHandle && InstanceHandle.traverseTwoPhase && InstanceHandle.traverseEnterLeave;"production" !== "development"?invariant(valid,'InstanceHandle not injected before use!'):invariant(valid);} /**
 * This is a unified interface for event plugins to be installed and configured.
 *
 * Event plugins can implement the following properties:
 *
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 *
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 *
 * @public
 */var EventPluginHub={ /**
   * Methods for injecting dependencies.
   */injection:{ /**
     * @param {object} InjectedMount
     * @public
     */injectMount:EventPluginUtils.injection.injectMount, /**
     * @param {object} InjectedInstanceHandle
     * @public
     */injectInstanceHandle:function injectInstanceHandle(InjectedInstanceHandle){InstanceHandle = InjectedInstanceHandle;if("production" !== "development"){validateInstanceHandle();}},getInstanceHandle:function getInstanceHandle(){if("production" !== "development"){validateInstanceHandle();}return InstanceHandle;}, /**
     * @param {array} InjectedEventPluginOrder
     * @public
     */injectEventPluginOrder:EventPluginRegistry.injectEventPluginOrder, /**
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     */injectEventPluginsByName:EventPluginRegistry.injectEventPluginsByName},eventNameDispatchConfigs:EventPluginRegistry.eventNameDispatchConfigs,registrationNameModules:EventPluginRegistry.registrationNameModules, /**
   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
   *
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {?function} listener The callback to store.
   */putListener:function putListener(id,registrationName,listener){"production" !== "development"?invariant(!listener || typeof listener === 'function','Expected %s listener to be a function, instead got type %s',registrationName,typeof listener):invariant(!listener || typeof listener === 'function');var bankForRegistrationName=listenerBank[registrationName] || (listenerBank[registrationName] = {});bankForRegistrationName[id] = listener;}, /**
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @return {?function} The stored callback.
   */getListener:function getListener(id,registrationName){var bankForRegistrationName=listenerBank[registrationName];return bankForRegistrationName && bankForRegistrationName[id];}, /**
   * Deletes a listener from the registration bank.
   *
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   */deleteListener:function deleteListener(id,registrationName){var bankForRegistrationName=listenerBank[registrationName];if(bankForRegistrationName){delete bankForRegistrationName[id];}}, /**
   * Deletes all listeners for the DOM element with the supplied ID.
   *
   * @param {string} id ID of the DOM element.
   */deleteAllListeners:function deleteAllListeners(id){for(var registrationName in listenerBank) {delete listenerBank[registrationName][id];}}, /**
   * Allows registered plugins an opportunity to extract events from top-level
   * native browser events.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @internal
   */extractEvents:function extractEvents(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent){var events;var plugins=EventPluginRegistry.plugins;for(var i=0,l=plugins.length;i < l;i++) { // Not every plugin in the ordering may be loaded at runtime.
var possiblePlugin=plugins[i];if(possiblePlugin){var extractedEvents=possiblePlugin.extractEvents(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent);if(extractedEvents){events = accumulateInto(events,extractedEvents);}}}return events;}, /**
   * Enqueues a synthetic event that should be dispatched when
   * `processEventQueue` is invoked.
   *
   * @param {*} events An accumulation of synthetic events.
   * @internal
   */enqueueEvents:function enqueueEvents(events){if(events){eventQueue = accumulateInto(eventQueue,events);}}, /**
   * Dispatches all synthetic events on the event queue.
   *
   * @internal
   */processEventQueue:function processEventQueue(){ // Set `eventQueue` to null before processing it so that we can tell if more
// events get enqueued while processing.
var processingEventQueue=eventQueue;eventQueue = null;forEachAccumulated(processingEventQueue,executeDispatchesAndRelease);"production" !== "development"?invariant(!eventQueue,'processEventQueue(): Additional events were enqueued while processing ' + 'an event queue. Support for this has not yet been implemented.'):invariant(!eventQueue);}, /**
   * These are needed for tests only. Do not use!
   */__purge:function __purge(){listenerBank = {};},__getListenerBank:function __getListenerBank(){return listenerBank;}};module.exports = EventPluginHub;},{"105":105,"120":120,"135":135,"18":18,"19":19}],18:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginRegistry
 * @typechecks static-only
 */'use strict';var invariant=_dereq_(135); /**
 * Injectable ordering of event plugins.
 */var EventPluginOrder=null; /**
 * Injectable mapping from names to event plugin modules.
 */var namesToPlugins={}; /**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */function recomputePluginOrdering(){if(!EventPluginOrder){ // Wait until an `EventPluginOrder` is injected.
return;}for(var pluginName in namesToPlugins) {var PluginModule=namesToPlugins[pluginName];var pluginIndex=EventPluginOrder.indexOf(pluginName);"production" !== "development"?invariant(pluginIndex > -1,'EventPluginRegistry: Cannot inject event plugins that do not exist in ' + 'the plugin ordering, `%s`.',pluginName):invariant(pluginIndex > -1);if(EventPluginRegistry.plugins[pluginIndex]){continue;}"production" !== "development"?invariant(PluginModule.extractEvents,'EventPluginRegistry: Event plugins must implement an `extractEvents` ' + 'method, but `%s` does not.',pluginName):invariant(PluginModule.extractEvents);EventPluginRegistry.plugins[pluginIndex] = PluginModule;var publishedEvents=PluginModule.eventTypes;for(var eventName in publishedEvents) {"production" !== "development"?invariant(publishEventForPlugin(publishedEvents[eventName],PluginModule,eventName),'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.',eventName,pluginName):invariant(publishEventForPlugin(publishedEvents[eventName],PluginModule,eventName));}}} /**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */function publishEventForPlugin(dispatchConfig,PluginModule,eventName){"production" !== "development"?invariant(!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName),'EventPluginHub: More than one plugin attempted to publish the same ' + 'event name, `%s`.',eventName):invariant(!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName));EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;var phasedRegistrationNames=dispatchConfig.phasedRegistrationNames;if(phasedRegistrationNames){for(var phaseName in phasedRegistrationNames) {if(phasedRegistrationNames.hasOwnProperty(phaseName)){var phasedRegistrationName=phasedRegistrationNames[phaseName];publishRegistrationName(phasedRegistrationName,PluginModule,eventName);}}return true;}else if(dispatchConfig.registrationName){publishRegistrationName(dispatchConfig.registrationName,PluginModule,eventName);return true;}return false;} /**
 * Publishes a registration name that is used to identify dispatched events and
 * can be used with `EventPluginHub.putListener` to register listeners.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */function publishRegistrationName(registrationName,PluginModule,eventName){"production" !== "development"?invariant(!EventPluginRegistry.registrationNameModules[registrationName],'EventPluginHub: More than one plugin attempted to publish the same ' + 'registration name, `%s`.',registrationName):invariant(!EventPluginRegistry.registrationNameModules[registrationName]);EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;} /**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */var EventPluginRegistry={ /**
   * Ordered list of injected plugins.
   */plugins:[], /**
   * Mapping from event name to dispatch config
   */eventNameDispatchConfigs:{}, /**
   * Mapping from registration name to plugin module
   */registrationNameModules:{}, /**
   * Mapping from registration name to event name
   */registrationNameDependencies:{}, /**
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   *
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */injectEventPluginOrder:function injectEventPluginOrder(InjectedEventPluginOrder){"production" !== "development"?invariant(!EventPluginOrder,'EventPluginRegistry: Cannot inject event plugin ordering more than ' + 'once. You are likely trying to load more than one copy of React.'):invariant(!EventPluginOrder); // Clone the ordering so it cannot be dynamically mutated.
EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);recomputePluginOrdering();}, /**
   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
   * in the ordering injected by `injectEventPluginOrder`.
   *
   * Plugins can be injected as part of page initialization or on-the-fly.
   *
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginsByName}
   */injectEventPluginsByName:function injectEventPluginsByName(injectedNamesToPlugins){var isOrderingDirty=false;for(var pluginName in injectedNamesToPlugins) {if(!injectedNamesToPlugins.hasOwnProperty(pluginName)){continue;}var PluginModule=injectedNamesToPlugins[pluginName];if(!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== PluginModule){"production" !== "development"?invariant(!namesToPlugins[pluginName],'EventPluginRegistry: Cannot inject two different event plugins ' + 'using the same name, `%s`.',pluginName):invariant(!namesToPlugins[pluginName]);namesToPlugins[pluginName] = PluginModule;isOrderingDirty = true;}}if(isOrderingDirty){recomputePluginOrdering();}}, /**
   * Looks up the plugin for the supplied event.
   *
   * @param {object} event A synthetic event.
   * @return {?object} The plugin that created the supplied event.
   * @internal
   */getPluginModuleForEvent:function getPluginModuleForEvent(event){var dispatchConfig=event.dispatchConfig;if(dispatchConfig.registrationName){return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;}for(var phase in dispatchConfig.phasedRegistrationNames) {if(!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)){continue;}var PluginModule=EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];if(PluginModule){return PluginModule;}}return null;}, /**
   * Exposed for unit testing.
   * @private
   */_resetEventPlugins:function _resetEventPlugins(){EventPluginOrder = null;for(var pluginName in namesToPlugins) {if(namesToPlugins.hasOwnProperty(pluginName)){delete namesToPlugins[pluginName];}}EventPluginRegistry.plugins.length = 0;var eventNameDispatchConfigs=EventPluginRegistry.eventNameDispatchConfigs;for(var eventName in eventNameDispatchConfigs) {if(eventNameDispatchConfigs.hasOwnProperty(eventName)){delete eventNameDispatchConfigs[eventName];}}var registrationNameModules=EventPluginRegistry.registrationNameModules;for(var registrationName in registrationNameModules) {if(registrationNameModules.hasOwnProperty(registrationName)){delete registrationNameModules[registrationName];}}}};module.exports = EventPluginRegistry;},{"135":135}],19:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginUtils
 */'use strict';var EventConstants=_dereq_(15);var invariant=_dereq_(135); /**
 * Injected dependencies:
 */ /**
 * - `Mount`: [required] Module that can convert between React dom IDs and
 *   actual node references.
 */var injection={Mount:null,injectMount:function injectMount(InjectedMount){injection.Mount = InjectedMount;if("production" !== "development"){"production" !== "development"?invariant(InjectedMount && InjectedMount.getNode,'EventPluginUtils.injection.injectMount(...): Injected Mount module ' + 'is missing getNode.'):invariant(InjectedMount && InjectedMount.getNode);}}};var topLevelTypes=EventConstants.topLevelTypes;function isEndish(topLevelType){return topLevelType === topLevelTypes.topMouseUp || topLevelType === topLevelTypes.topTouchEnd || topLevelType === topLevelTypes.topTouchCancel;}function isMoveish(topLevelType){return topLevelType === topLevelTypes.topMouseMove || topLevelType === topLevelTypes.topTouchMove;}function isStartish(topLevelType){return topLevelType === topLevelTypes.topMouseDown || topLevelType === topLevelTypes.topTouchStart;}var validateEventDispatches;if("production" !== "development"){validateEventDispatches = function(event){var dispatchListeners=event._dispatchListeners;var dispatchIDs=event._dispatchIDs;var listenersIsArr=Array.isArray(dispatchListeners);var idsIsArr=Array.isArray(dispatchIDs);var IDsLen=idsIsArr?dispatchIDs.length:dispatchIDs?1:0;var listenersLen=listenersIsArr?dispatchListeners.length:dispatchListeners?1:0;"production" !== "development"?invariant(idsIsArr === listenersIsArr && IDsLen === listenersLen,'EventPluginUtils: Invalid `event`.'):invariant(idsIsArr === listenersIsArr && IDsLen === listenersLen);};} /**
 * Invokes `cb(event, listener, id)`. Avoids using call if no scope is
 * provided. The `(listener,id)` pair effectively forms the "dispatch" but are
 * kept separate to conserve memory.
 */function forEachEventDispatch(event,cb){var dispatchListeners=event._dispatchListeners;var dispatchIDs=event._dispatchIDs;if("production" !== "development"){validateEventDispatches(event);}if(Array.isArray(dispatchListeners)){for(var i=0;i < dispatchListeners.length;i++) {if(event.isPropagationStopped()){break;} // Listeners and IDs are two parallel arrays that are always in sync.
cb(event,dispatchListeners[i],dispatchIDs[i]);}}else if(dispatchListeners){cb(event,dispatchListeners,dispatchIDs);}} /**
 * Default implementation of PluginModule.executeDispatch().
 * @param {SyntheticEvent} SyntheticEvent to handle
 * @param {function} Application-level callback
 * @param {string} domID DOM id to pass to the callback.
 */function executeDispatch(event,listener,domID){event.currentTarget = injection.Mount.getNode(domID);var returnValue=listener(event,domID);event.currentTarget = null;return returnValue;} /**
 * Standard/simple iteration through an event's collected dispatches.
 */function executeDispatchesInOrder(event,cb){forEachEventDispatch(event,cb);event._dispatchListeners = null;event._dispatchIDs = null;} /**
 * Standard/simple iteration through an event's collected dispatches, but stops
 * at the first dispatch execution returning true, and returns that id.
 *
 * @return id of the first dispatch execution who's listener returns true, or
 * null if no listener returned true.
 */function executeDispatchesInOrderStopAtTrueImpl(event){var dispatchListeners=event._dispatchListeners;var dispatchIDs=event._dispatchIDs;if("production" !== "development"){validateEventDispatches(event);}if(Array.isArray(dispatchListeners)){for(var i=0;i < dispatchListeners.length;i++) {if(event.isPropagationStopped()){break;} // Listeners and IDs are two parallel arrays that are always in sync.
if(dispatchListeners[i](event,dispatchIDs[i])){return dispatchIDs[i];}}}else if(dispatchListeners){if(dispatchListeners(event,dispatchIDs)){return dispatchIDs;}}return null;} /**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */function executeDispatchesInOrderStopAtTrue(event){var ret=executeDispatchesInOrderStopAtTrueImpl(event);event._dispatchIDs = null;event._dispatchListeners = null;return ret;} /**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return The return value of executing the single dispatch.
 */function executeDirectDispatch(event){if("production" !== "development"){validateEventDispatches(event);}var dispatchListener=event._dispatchListeners;var dispatchID=event._dispatchIDs;"production" !== "development"?invariant(!Array.isArray(dispatchListener),'executeDirectDispatch(...): Invalid `event`.'):invariant(!Array.isArray(dispatchListener));var res=dispatchListener?dispatchListener(event,dispatchID):null;event._dispatchListeners = null;event._dispatchIDs = null;return res;} /**
 * @param {SyntheticEvent} event
 * @return {bool} True iff number of dispatches accumulated is greater than 0.
 */function hasDispatches(event){return !!event._dispatchListeners;} /**
 * General utilities that are useful in creating custom Event Plugins.
 */var EventPluginUtils={isEndish:isEndish,isMoveish:isMoveish,isStartish:isStartish,executeDirectDispatch:executeDirectDispatch,executeDispatch:executeDispatch,executeDispatchesInOrder:executeDispatchesInOrder,executeDispatchesInOrderStopAtTrue:executeDispatchesInOrderStopAtTrue,hasDispatches:hasDispatches,injection:injection,useTouchEvents:false};module.exports = EventPluginUtils;},{"135":135,"15":15}],20:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPropagators
 */'use strict';var EventConstants=_dereq_(15);var EventPluginHub=_dereq_(17);var accumulateInto=_dereq_(105);var forEachAccumulated=_dereq_(120);var PropagationPhases=EventConstants.PropagationPhases;var getListener=EventPluginHub.getListener; /**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */function listenerAtPhase(id,event,propagationPhase){var registrationName=event.dispatchConfig.phasedRegistrationNames[propagationPhase];return getListener(id,registrationName);} /**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */function accumulateDirectionalDispatches(domID,upwards,event){if("production" !== "development"){if(!domID){throw new Error('Dispatching id must not be null');}}var phase=upwards?PropagationPhases.bubbled:PropagationPhases.captured;var listener=listenerAtPhase(domID,event,phase);if(listener){event._dispatchListeners = accumulateInto(event._dispatchListeners,listener);event._dispatchIDs = accumulateInto(event._dispatchIDs,domID);}} /**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We can not perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */function accumulateTwoPhaseDispatchesSingle(event){if(event && event.dispatchConfig.phasedRegistrationNames){EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(event.dispatchMarker,accumulateDirectionalDispatches,event);}} /**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */function accumulateDispatches(id,ignoredDirection,event){if(event && event.dispatchConfig.registrationName){var registrationName=event.dispatchConfig.registrationName;var listener=getListener(id,registrationName);if(listener){event._dispatchListeners = accumulateInto(event._dispatchListeners,listener);event._dispatchIDs = accumulateInto(event._dispatchIDs,id);}}} /**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */function accumulateDirectDispatchesSingle(event){if(event && event.dispatchConfig.registrationName){accumulateDispatches(event.dispatchMarker,null,event);}}function accumulateTwoPhaseDispatches(events){forEachAccumulated(events,accumulateTwoPhaseDispatchesSingle);}function accumulateEnterLeaveDispatches(leave,enter,fromID,toID){EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(fromID,toID,accumulateDispatches,leave,enter);}function accumulateDirectDispatches(events){forEachAccumulated(events,accumulateDirectDispatchesSingle);} /**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing event a
 * single one.
 *
 * @constructor EventPropagators
 */var EventPropagators={accumulateTwoPhaseDispatches:accumulateTwoPhaseDispatches,accumulateDirectDispatches:accumulateDirectDispatches,accumulateEnterLeaveDispatches:accumulateEnterLeaveDispatches};module.exports = EventPropagators;},{"105":105,"120":120,"15":15,"17":17}],21:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */ /*jslint evil: true */"use strict";var canUseDOM=!!(typeof window !== 'undefined' && window.document && window.document.createElement); /**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */var ExecutionEnvironment={canUseDOM:canUseDOM,canUseWorkers:typeof Worker !== 'undefined',canUseEventListeners:canUseDOM && !!(window.addEventListener || window.attachEvent),canUseViewport:canUseDOM && !!window.screen,isInWorker:!canUseDOM // For now, this is true - might change in the future.
};module.exports = ExecutionEnvironment;},{}],22:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FallbackCompositionState
 * @typechecks static-only
 */'use strict';var PooledClass=_dereq_(28);var assign=_dereq_(27);var getTextContentAccessor=_dereq_(130); /**
 * This helper class stores information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 * @param {DOMEventTarget} root
 */function FallbackCompositionState(root){this._root = root;this._startText = this.getText();this._fallbackText = null;}assign(FallbackCompositionState.prototype,{ /**
   * Get current text of input.
   *
   * @return {string}
   */getText:function getText(){if('value' in this._root){return this._root.value;}return this._root[getTextContentAccessor()];}, /**
   * Determine the differing substring between the initially stored
   * text content and the current content.
   *
   * @return {string}
   */getData:function getData(){if(this._fallbackText){return this._fallbackText;}var start;var startValue=this._startText;var startLength=startValue.length;var end;var endValue=this.getText();var endLength=endValue.length;for(start = 0;start < startLength;start++) {if(startValue[start] !== endValue[start]){break;}}var minEnd=startLength - start;for(end = 1;end <= minEnd;end++) {if(startValue[startLength - end] !== endValue[endLength - end]){break;}}var sliceTail=end > 1?1 - end:undefined;this._fallbackText = endValue.slice(start,sliceTail);return this._fallbackText;}});PooledClass.addPoolingTo(FallbackCompositionState);module.exports = FallbackCompositionState;},{"130":130,"27":27,"28":28}],23:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule HTMLDOMPropertyConfig
 */ /*jslint bitwise: true*/'use strict';var DOMProperty=_dereq_(10);var ExecutionEnvironment=_dereq_(21);var MUST_USE_ATTRIBUTE=DOMProperty.injection.MUST_USE_ATTRIBUTE;var MUST_USE_PROPERTY=DOMProperty.injection.MUST_USE_PROPERTY;var HAS_BOOLEAN_VALUE=DOMProperty.injection.HAS_BOOLEAN_VALUE;var HAS_SIDE_EFFECTS=DOMProperty.injection.HAS_SIDE_EFFECTS;var HAS_NUMERIC_VALUE=DOMProperty.injection.HAS_NUMERIC_VALUE;var HAS_POSITIVE_NUMERIC_VALUE=DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;var HAS_OVERLOADED_BOOLEAN_VALUE=DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;var hasSVG;if(ExecutionEnvironment.canUseDOM){var implementation=document.implementation;hasSVG = implementation && implementation.hasFeature && implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure','1.1');}var HTMLDOMPropertyConfig={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{ /**
     * Standard Properties
     */accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,allowTransparency:MUST_USE_ATTRIBUTE,alt:null,async:HAS_BOOLEAN_VALUE,autoComplete:null, // autoFocus is polyfilled/normalized by AutoFocusMixin
// autoFocus: HAS_BOOLEAN_VALUE,
autoPlay:HAS_BOOLEAN_VALUE,cellPadding:null,cellSpacing:null,charSet:MUST_USE_ATTRIBUTE,checked:MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,classID:MUST_USE_ATTRIBUTE, // To set className on SVG elements, it's necessary to use .setAttribute;
// this works on HTML elements too in all browsers except IE8. Conveniently,
// IE8 doesn't support SVG and so we can simply use the attribute in
// browsers that support SVG and the property in browsers that don't,
// regardless of whether the element is HTML or SVG.
className:hasSVG?MUST_USE_ATTRIBUTE:MUST_USE_PROPERTY,cols:MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,colSpan:null,content:null,contentEditable:null,contextMenu:MUST_USE_ATTRIBUTE,controls:MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,coords:null,crossOrigin:null,data:null, // For `<object />` acts as `src`.
dateTime:MUST_USE_ATTRIBUTE,defer:HAS_BOOLEAN_VALUE,dir:null,disabled:MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,download:HAS_OVERLOADED_BOOLEAN_VALUE,draggable:null,encType:null,form:MUST_USE_ATTRIBUTE,formAction:MUST_USE_ATTRIBUTE,formEncType:MUST_USE_ATTRIBUTE,formMethod:MUST_USE_ATTRIBUTE,formNoValidate:HAS_BOOLEAN_VALUE,formTarget:MUST_USE_ATTRIBUTE,frameBorder:MUST_USE_ATTRIBUTE,headers:null,height:MUST_USE_ATTRIBUTE,hidden:MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,high:null,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:MUST_USE_PROPERTY,label:null,lang:null,list:MUST_USE_ATTRIBUTE,loop:MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,low:null,manifest:MUST_USE_ATTRIBUTE,marginHeight:null,marginWidth:null,max:null,maxLength:MUST_USE_ATTRIBUTE,media:MUST_USE_ATTRIBUTE,mediaGroup:null,method:null,min:null,multiple:MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,muted:MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,name:null,noValidate:HAS_BOOLEAN_VALUE,open:HAS_BOOLEAN_VALUE,optimum:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,rel:null,required:HAS_BOOLEAN_VALUE,role:MUST_USE_ATTRIBUTE,rows:MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,rowSpan:null,sandbox:null,scope:null,scoped:HAS_BOOLEAN_VALUE,scrolling:null,seamless:MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,selected:MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,shape:null,size:MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,sizes:MUST_USE_ATTRIBUTE,span:HAS_POSITIVE_NUMERIC_VALUE,spellCheck:null,src:null,srcDoc:MUST_USE_PROPERTY,srcSet:MUST_USE_ATTRIBUTE,start:HAS_NUMERIC_VALUE,step:null,style:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,width:MUST_USE_ATTRIBUTE,wmode:MUST_USE_ATTRIBUTE, /**
     * Non-standard Properties
     */ // autoCapitalize and autoCorrect are supported in Mobile Safari for
// keyboard hints.
autoCapitalize:null,autoCorrect:null, // itemProp, itemScope, itemType are for
// Microdata support. See http://schema.org/docs/gs.html
itemProp:MUST_USE_ATTRIBUTE,itemScope:MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,itemType:MUST_USE_ATTRIBUTE, // itemID and itemRef are for Microdata support as well but
// only specified in the the WHATWG spec document. See
// https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
itemID:MUST_USE_ATTRIBUTE,itemRef:MUST_USE_ATTRIBUTE, // property is supported for OpenGraph in meta tags.
property:null, // IE-only attribute that controls focus behavior
unselectable:MUST_USE_ATTRIBUTE},DOMAttributeNames:{acceptCharset:'accept-charset',className:'class',htmlFor:'for',httpEquiv:'http-equiv'},DOMPropertyNames:{autoCapitalize:'autocapitalize',autoComplete:'autocomplete',autoCorrect:'autocorrect',autoFocus:'autofocus',autoPlay:'autoplay', // `encoding` is equivalent to `enctype`, IE8 lacks an `enctype` setter.
// http://www.w3.org/TR/html5/forms.html#dom-fs-encoding
encType:'encoding',hrefLang:'hreflang',radioGroup:'radiogroup',spellCheck:'spellcheck',srcDoc:'srcdoc',srcSet:'srcset'}};module.exports = HTMLDOMPropertyConfig;},{"10":10,"21":21}],24:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule LinkedValueUtils
 * @typechecks static-only
 */'use strict';var ReactPropTypes=_dereq_(78);var invariant=_dereq_(135);var hasReadOnlyValue={'button':true,'checkbox':true,'image':true,'hidden':true,'radio':true,'reset':true,'submit':true};function _assertSingleLink(input){"production" !== "development"?invariant(input.props.checkedLink == null || input.props.valueLink == null,'Cannot provide a checkedLink and a valueLink. If you want to use ' + 'checkedLink, you probably don\'t want to use valueLink and vice versa.'):invariant(input.props.checkedLink == null || input.props.valueLink == null);}function _assertValueLink(input){_assertSingleLink(input);"production" !== "development"?invariant(input.props.value == null && input.props.onChange == null,'Cannot provide a valueLink and a value or onChange event. If you want ' + 'to use value or onChange, you probably don\'t want to use valueLink.'):invariant(input.props.value == null && input.props.onChange == null);}function _assertCheckedLink(input){_assertSingleLink(input);"production" !== "development"?invariant(input.props.checked == null && input.props.onChange == null,'Cannot provide a checkedLink and a checked property or onChange event. ' + 'If you want to use checked or onChange, you probably don\'t want to ' + 'use checkedLink'):invariant(input.props.checked == null && input.props.onChange == null);} /**
 * @param {SyntheticEvent} e change event to handle
 */function _handleLinkedValueChange(e){ /*jshint validthis:true */this.props.valueLink.requestChange(e.target.value);} /**
  * @param {SyntheticEvent} e change event to handle
  */function _handleLinkedCheckChange(e){ /*jshint validthis:true */this.props.checkedLink.requestChange(e.target.checked);} /**
 * Provide a linked `value` attribute for controlled forms. You should not use
 * this outside of the ReactDOM controlled form components.
 */var LinkedValueUtils={Mixin:{propTypes:{value:function value(props,propName,componentName){if(!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled){return null;}return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');},checked:function checked(props,propName,componentName){if(!props[propName] || props.onChange || props.readOnly || props.disabled){return null;}return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');},onChange:ReactPropTypes.func}}, /**
   * @param {ReactComponent} input Form component
   * @return {*} current value of the input either from value prop or link.
   */getValue:function getValue(input){if(input.props.valueLink){_assertValueLink(input);return input.props.valueLink.value;}return input.props.value;}, /**
   * @param {ReactComponent} input Form component
   * @return {*} current checked status of the input either from checked prop
   *             or link.
   */getChecked:function getChecked(input){if(input.props.checkedLink){_assertCheckedLink(input);return input.props.checkedLink.value;}return input.props.checked;}, /**
   * @param {ReactComponent} input Form component
   * @return {function} change callback either from onChange prop or link.
   */getOnChange:function getOnChange(input){if(input.props.valueLink){_assertValueLink(input);return _handleLinkedValueChange;}else if(input.props.checkedLink){_assertCheckedLink(input);return _handleLinkedCheckChange;}return input.props.onChange;}};module.exports = LinkedValueUtils;},{"135":135,"78":78}],25:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule LocalEventTrapMixin
 */'use strict';var ReactBrowserEventEmitter=_dereq_(30);var accumulateInto=_dereq_(105);var forEachAccumulated=_dereq_(120);var invariant=_dereq_(135);function remove(event){event.remove();}var LocalEventTrapMixin={trapBubbledEvent:function trapBubbledEvent(topLevelType,handlerBaseName){"production" !== "development"?invariant(this.isMounted(),'Must be mounted to trap events'):invariant(this.isMounted()); // If a component renders to null or if another component fatals and causes
// the state of the tree to be corrupted, `node` here can be null.
var node=this.getDOMNode();"production" !== "development"?invariant(node,'LocalEventTrapMixin.trapBubbledEvent(...): Requires node to be rendered.'):invariant(node);var listener=ReactBrowserEventEmitter.trapBubbledEvent(topLevelType,handlerBaseName,node);this._localEventListeners = accumulateInto(this._localEventListeners,listener);}, // trapCapturedEvent would look nearly identical. We don't implement that
// method because it isn't currently needed.
componentWillUnmount:function componentWillUnmount(){if(this._localEventListeners){forEachAccumulated(this._localEventListeners,remove);}}};module.exports = LocalEventTrapMixin;},{"105":105,"120":120,"135":135,"30":30}],26:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule MobileSafariClickEventPlugin
 * @typechecks static-only
 */'use strict';var EventConstants=_dereq_(15);var emptyFunction=_dereq_(114);var topLevelTypes=EventConstants.topLevelTypes; /**
 * Mobile Safari does not fire properly bubble click events on non-interactive
 * elements, which means delegated click listeners do not fire. The workaround
 * for this bug involves attaching an empty click listener on the target node.
 *
 * This particular plugin works around the bug by attaching an empty click
 * listener on `touchstart` (which does fire on every element).
 */var MobileSafariClickEventPlugin={eventTypes:null, /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */extractEvents:function extractEvents(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent){if(topLevelType === topLevelTypes.topTouchStart){var target=nativeEvent.target;if(target && !target.onclick){target.onclick = emptyFunction;}}}};module.exports = MobileSafariClickEventPlugin;},{"114":114,"15":15}],27:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Object.assign
 */ // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
'use strict';function assign(target,sources){if(target == null){throw new TypeError('Object.assign target cannot be null or undefined');}var to=Object(target);var hasOwnProperty=Object.prototype.hasOwnProperty;for(var nextIndex=1;nextIndex < arguments.length;nextIndex++) {var nextSource=arguments[nextIndex];if(nextSource == null){continue;}var from=Object(nextSource); // We don't currently support accessors nor proxies. Therefore this
// copy cannot throw. If we ever supported this then we must handle
// exceptions and side-effects. We don't support symbols so they won't
// be transferred.
for(var key in from) {if(hasOwnProperty.call(from,key)){to[key] = from[key];}}}return to;}module.exports = assign;},{}],28:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule PooledClass
 */'use strict';var invariant=_dereq_(135); /**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */var oneArgumentPooler=function oneArgumentPooler(copyFieldsFrom){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,copyFieldsFrom);return instance;}else {return new Klass(copyFieldsFrom);}};var twoArgumentPooler=function twoArgumentPooler(a1,a2){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2);return instance;}else {return new Klass(a1,a2);}};var threeArgumentPooler=function threeArgumentPooler(a1,a2,a3){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3);return instance;}else {return new Klass(a1,a2,a3);}};var fiveArgumentPooler=function fiveArgumentPooler(a1,a2,a3,a4,a5){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3,a4,a5);return instance;}else {return new Klass(a1,a2,a3,a4,a5);}};var standardReleaser=function standardReleaser(instance){var Klass=this;"production" !== "development"?invariant(instance instanceof Klass,'Trying to release an instance into a pool of a different type.'):invariant(instance instanceof Klass);if(instance.destructor){instance.destructor();}if(Klass.instancePool.length < Klass.poolSize){Klass.instancePool.push(instance);}};var DEFAULT_POOL_SIZE=10;var DEFAULT_POOLER=oneArgumentPooler; /**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances (optional).
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */var addPoolingTo=function addPoolingTo(CopyConstructor,pooler){var NewKlass=CopyConstructor;NewKlass.instancePool = [];NewKlass.getPooled = pooler || DEFAULT_POOLER;if(!NewKlass.poolSize){NewKlass.poolSize = DEFAULT_POOL_SIZE;}NewKlass.release = standardReleaser;return NewKlass;};var PooledClass={addPoolingTo:addPoolingTo,oneArgumentPooler:oneArgumentPooler,twoArgumentPooler:twoArgumentPooler,threeArgumentPooler:threeArgumentPooler,fiveArgumentPooler:fiveArgumentPooler};module.exports = PooledClass;},{"135":135}],29:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserComponentMixin
 */'use strict';var findDOMNode=_dereq_(117);var ReactBrowserComponentMixin={ /**
   * Returns the DOM node rendered by this component.
   *
   * @return {DOMElement} The root node of this component.
   * @final
   * @protected
   */getDOMNode:function getDOMNode(){return findDOMNode(this);}};module.exports = ReactBrowserComponentMixin;},{"117":117}],30:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserEventEmitter
 * @typechecks static-only
 */'use strict';var EventConstants=_dereq_(15);var EventPluginHub=_dereq_(17);var EventPluginRegistry=_dereq_(18);var ReactEventEmitterMixin=_dereq_(61);var ViewportMetrics=_dereq_(104);var assign=_dereq_(27);var isEventSupported=_dereq_(136); /**
 * Summary of `ReactBrowserEventEmitter` event handling:
 *
 *  - Top-level delegation is used to trap most native browser events. This
 *    may only occur in the main thread and is the responsibility of
 *    ReactEventListener, which is injected and can therefore support pluggable
 *    event sources. This is the only work that occurs in the main thread.
 *
 *  - We normalize and de-duplicate events to account for browser quirks. This
 *    may be done in the worker thread.
 *
 *  - Forward these native events (with the associated top-level type used to
 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
 *    to extract any synthetic events.
 *
 *  - The `EventPluginHub` will then process each event by annotating them with
 *    "dispatches", a sequence of listeners and IDs that care about that event.
 *
 *  - The `EventPluginHub` then dispatches the events.
 *
 * Overview of React and the event system:
 *
 * +------------+    .
 * |    DOM     |    .
 * +------------+    .
 *       |           .
 *       v           .
 * +------------+    .
 * | ReactEvent |    .
 * |  Listener  |    .
 * +------------+    .                         +-----------+
 *       |           .               +--------+|SimpleEvent|
 *       |           .               |         |Plugin     |
 * +-----|------+    .               v         +-----------+
 * |     |      |    .    +--------------+                    +------------+
 * |     +-----------.--->|EventPluginHub|                    |    Event   |
 * |            |    .    |              |     +-----------+  | Propagators|
 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
 * |            |    .    |              |     +-----------+  |  utilities |
 * |     +-----------.--->|              |                    +------------+
 * |     |      |    .    +--------------+
 * +-----|------+    .                ^        +-----------+
 *       |           .                |        |Enter/Leave|
 *       +           .                +-------+|Plugin     |
 * +-------------+   .                         +-----------+
 * | application |   .
 * |-------------|   .
 * |             |   .
 * |             |   .
 * +-------------+   .
 *                   .
 *    React Core     .  General Purpose Event Plugin System
 */var alreadyListeningTo={};var isMonitoringScrollValue=false;var reactTopListenersCounter=0; // For events like 'submit' which don't consistently bubble (which we trap at a
// lower node than `document`), binding at `document` would cause duplicate
// events so we don't include them here
var topEventMapping={topBlur:'blur',topChange:'change',topClick:'click',topCompositionEnd:'compositionend',topCompositionStart:'compositionstart',topCompositionUpdate:'compositionupdate',topContextMenu:'contextmenu',topCopy:'copy',topCut:'cut',topDoubleClick:'dblclick',topDrag:'drag',topDragEnd:'dragend',topDragEnter:'dragenter',topDragExit:'dragexit',topDragLeave:'dragleave',topDragOver:'dragover',topDragStart:'dragstart',topDrop:'drop',topFocus:'focus',topInput:'input',topKeyDown:'keydown',topKeyPress:'keypress',topKeyUp:'keyup',topMouseDown:'mousedown',topMouseMove:'mousemove',topMouseOut:'mouseout',topMouseOver:'mouseover',topMouseUp:'mouseup',topPaste:'paste',topScroll:'scroll',topSelectionChange:'selectionchange',topTextInput:'textInput',topTouchCancel:'touchcancel',topTouchEnd:'touchend',topTouchMove:'touchmove',topTouchStart:'touchstart',topWheel:'wheel'}; /**
 * To ensure no conflicts with other potential React instances on the page
 */var topListenersIDKey='_reactListenersID' + String(Math.random()).slice(2);function getListeningForDocument(mountAt){ // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
// directly.
if(!Object.prototype.hasOwnProperty.call(mountAt,topListenersIDKey)){mountAt[topListenersIDKey] = reactTopListenersCounter++;alreadyListeningTo[mountAt[topListenersIDKey]] = {};}return alreadyListeningTo[mountAt[topListenersIDKey]];} /**
 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
 * example:
 *
 *   ReactBrowserEventEmitter.putListener('myID', 'onClick', myFunction);
 *
 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
 *
 * @internal
 */var ReactBrowserEventEmitter=assign({},ReactEventEmitterMixin,{ /**
   * Injectable event backend
   */ReactEventListener:null,injection:{ /**
     * @param {object} ReactEventListener
     */injectReactEventListener:function injectReactEventListener(ReactEventListener){ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;}}, /**
   * Sets whether or not any created callbacks should be enabled.
   *
   * @param {boolean} enabled True if callbacks should be enabled.
   */setEnabled:function setEnabled(enabled){if(ReactBrowserEventEmitter.ReactEventListener){ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);}}, /**
   * @return {boolean} True if callbacks are enabled.
   */isEnabled:function isEnabled(){return !!(ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled());}, /**
   * We listen for bubbled touch events on the document object.
   *
   * Firefox v8.01 (and possibly others) exhibited strange behavior when
   * mounting `onmousemove` events at some node that was not the document
   * element. The symptoms were that if your mouse is not moving over something
   * contained within that mount point (for example on the background) the
   * top-level listeners for `onmousemove` won't be called. However, if you
   * register the `mousemove` on the document object, then it will of course
   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
   * top-level listeners to the document object only, at least for these
   * movement types of events and possibly all events.
   *
   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
   *
   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
   * they bubble to document.
   *
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {object} contentDocumentHandle Document which owns the container
   */listenTo:function listenTo(registrationName,contentDocumentHandle){var mountAt=contentDocumentHandle;var isListening=getListeningForDocument(mountAt);var dependencies=EventPluginRegistry.registrationNameDependencies[registrationName];var topLevelTypes=EventConstants.topLevelTypes;for(var i=0,l=dependencies.length;i < l;i++) {var dependency=dependencies[i];if(!(isListening.hasOwnProperty(dependency) && isListening[dependency])){if(dependency === topLevelTypes.topWheel){if(isEventSupported('wheel')){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel,'wheel',mountAt);}else if(isEventSupported('mousewheel')){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel,'mousewheel',mountAt);}else { // Firefox needs to capture a different mouse scroll event.
// @see http://www.quirksmode.org/dom/events/tests/scroll.html
ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel,'DOMMouseScroll',mountAt);}}else if(dependency === topLevelTypes.topScroll){if(isEventSupported('scroll',true)){ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll,'scroll',mountAt);}else {ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll,'scroll',ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);}}else if(dependency === topLevelTypes.topFocus || dependency === topLevelTypes.topBlur){if(isEventSupported('focus',true)){ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus,'focus',mountAt);ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur,'blur',mountAt);}else if(isEventSupported('focusin')){ // IE has `focusin` and `focusout` events which bubble.
// @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus,'focusin',mountAt);ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur,'focusout',mountAt);} // to make sure blur and focus event listeners are only attached once
isListening[topLevelTypes.topBlur] = true;isListening[topLevelTypes.topFocus] = true;}else if(topEventMapping.hasOwnProperty(dependency)){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency,topEventMapping[dependency],mountAt);}isListening[dependency] = true;}}},trapBubbledEvent:function trapBubbledEvent(topLevelType,handlerBaseName,handle){return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType,handlerBaseName,handle);},trapCapturedEvent:function trapCapturedEvent(topLevelType,handlerBaseName,handle){return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType,handlerBaseName,handle);}, /**
   * Listens to window scroll and resize events. We cache scroll values so that
   * application code can access them without triggering reflows.
   *
   * NOTE: Scroll events do not bubble.
   *
   * @see http://www.quirksmode.org/dom/events/scroll.html
   */ensureScrollValueMonitoring:function ensureScrollValueMonitoring(){if(!isMonitoringScrollValue){var refresh=ViewportMetrics.refreshScrollValues;ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);isMonitoringScrollValue = true;}},eventNameDispatchConfigs:EventPluginHub.eventNameDispatchConfigs,registrationNameModules:EventPluginHub.registrationNameModules,putListener:EventPluginHub.putListener,getListener:EventPluginHub.getListener,deleteListener:EventPluginHub.deleteListener,deleteAllListeners:EventPluginHub.deleteAllListeners});module.exports = ReactBrowserEventEmitter;},{"104":104,"136":136,"15":15,"17":17,"18":18,"27":27,"61":61}],31:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildReconciler
 * @typechecks static-only
 */'use strict';var ReactReconciler=_dereq_(81);var flattenChildren=_dereq_(118);var instantiateReactComponent=_dereq_(134);var shouldUpdateReactComponent=_dereq_(151); /**
 * ReactChildReconciler provides helpers for initializing or updating a set of
 * children. Its output is suitable for passing it onto ReactMultiChild which
 * does diffed reordering and insertion.
 */var ReactChildReconciler={ /**
   * Generates a "mount image" for each of the supplied children. In the case
   * of `ReactDOMComponent`, a mount image is a string of markup.
   *
   * @param {?object} nestedChildNodes Nested child maps.
   * @return {?object} A set of child instances.
   * @internal
   */instantiateChildren:function instantiateChildren(nestedChildNodes,transaction,context){var children=flattenChildren(nestedChildNodes);for(var name in children) {if(children.hasOwnProperty(name)){var child=children[name]; // The rendered children must be turned into instances as they're
// mounted.
var childInstance=instantiateReactComponent(child,null);children[name] = childInstance;}}return children;}, /**
   * Updates the rendered children and returns a new set of children.
   *
   * @param {?object} prevChildren Previously initialized set of children.
   * @param {?object} nextNestedChildNodes Nested child maps.
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @return {?object} A new set of child instances.
   * @internal
   */updateChildren:function updateChildren(prevChildren,nextNestedChildNodes,transaction,context){ // We currently don't have a way to track moves here but if we use iterators
// instead of for..in we can zip the iterators and check if an item has
// moved.
// TODO: If nothing has changed, return the prevChildren object so that we
// can quickly bailout if nothing has changed.
var nextChildren=flattenChildren(nextNestedChildNodes);if(!nextChildren && !prevChildren){return null;}var name;for(name in nextChildren) {if(!nextChildren.hasOwnProperty(name)){continue;}var prevChild=prevChildren && prevChildren[name];var prevElement=prevChild && prevChild._currentElement;var nextElement=nextChildren[name];if(shouldUpdateReactComponent(prevElement,nextElement)){ReactReconciler.receiveComponent(prevChild,nextElement,transaction,context);nextChildren[name] = prevChild;}else {if(prevChild){ReactReconciler.unmountComponent(prevChild,name);} // The child must be instantiated before it's mounted.
var nextChildInstance=instantiateReactComponent(nextElement,null);nextChildren[name] = nextChildInstance;}} // Unmount children that are no longer present.
for(name in prevChildren) {if(prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))){ReactReconciler.unmountComponent(prevChildren[name]);}}return nextChildren;}, /**
   * Unmounts all rendered children. This should be used to clean up children
   * when this component is unmounted.
   *
   * @param {?object} renderedChildren Previously initialized set of children.
   * @internal
   */unmountChildren:function unmountChildren(renderedChildren){for(var name in renderedChildren) {var renderedChild=renderedChildren[name];ReactReconciler.unmountComponent(renderedChild);}}};module.exports = ReactChildReconciler;},{"118":118,"134":134,"151":151,"81":81}],32:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildren
 */'use strict';var PooledClass=_dereq_(28);var ReactFragment=_dereq_(63);var traverseAllChildren=_dereq_(153);var warning=_dereq_(154);var twoArgumentPooler=PooledClass.twoArgumentPooler;var threeArgumentPooler=PooledClass.threeArgumentPooler; /**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */function ForEachBookKeeping(forEachFunction,forEachContext){this.forEachFunction = forEachFunction;this.forEachContext = forEachContext;}PooledClass.addPoolingTo(ForEachBookKeeping,twoArgumentPooler);function forEachSingleChild(traverseContext,child,name,i){var forEachBookKeeping=traverseContext;forEachBookKeeping.forEachFunction.call(forEachBookKeeping.forEachContext,child,i);} /**
 * Iterates through children that are typically specified as `props.children`.
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc.
 * @param {*} forEachContext Context for forEachContext.
 */function forEachChildren(children,forEachFunc,forEachContext){if(children == null){return children;}var traverseContext=ForEachBookKeeping.getPooled(forEachFunc,forEachContext);traverseAllChildren(children,forEachSingleChild,traverseContext);ForEachBookKeeping.release(traverseContext);} /**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */function MapBookKeeping(mapResult,mapFunction,mapContext){this.mapResult = mapResult;this.mapFunction = mapFunction;this.mapContext = mapContext;}PooledClass.addPoolingTo(MapBookKeeping,threeArgumentPooler);function mapSingleChildIntoContext(traverseContext,child,name,i){var mapBookKeeping=traverseContext;var mapResult=mapBookKeeping.mapResult;var keyUnique=!mapResult.hasOwnProperty(name);if("production" !== "development"){"production" !== "development"?warning(keyUnique,'ReactChildren.map(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.',name):null;}if(keyUnique){var mappedChild=mapBookKeeping.mapFunction.call(mapBookKeeping.mapContext,child,i);mapResult[name] = mappedChild;}} /**
 * Maps children that are typically specified as `props.children`.
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * TODO: This may likely break any calls to `ReactChildren.map` that were
 * previously relying on the fact that we guarded against null children.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} mapFunction.
 * @param {*} mapContext Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */function mapChildren(children,func,context){if(children == null){return children;}var mapResult={};var traverseContext=MapBookKeeping.getPooled(mapResult,func,context);traverseAllChildren(children,mapSingleChildIntoContext,traverseContext);MapBookKeeping.release(traverseContext);return ReactFragment.create(mapResult);}function forEachSingleChildDummy(traverseContext,child,name,i){return null;} /**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */function countChildren(children,context){return traverseAllChildren(children,forEachSingleChildDummy,null);}var ReactChildren={forEach:forEachChildren,map:mapChildren,count:countChildren};module.exports = ReactChildren;},{"153":153,"154":154,"28":28,"63":63}],33:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactClass
 */'use strict';var ReactComponent=_dereq_(34);var ReactCurrentOwner=_dereq_(39);var ReactElement=_dereq_(57);var ReactErrorUtils=_dereq_(60);var ReactInstanceMap=_dereq_(67);var ReactLifeCycle=_dereq_(68);var ReactPropTypeLocations=_dereq_(77);var ReactPropTypeLocationNames=_dereq_(76);var ReactUpdateQueue=_dereq_(86);var assign=_dereq_(27);var invariant=_dereq_(135);var keyMirror=_dereq_(140);var keyOf=_dereq_(141);var warning=_dereq_(154);var MIXINS_KEY=keyOf({mixins:null}); /**
 * Policies that describe methods in `ReactClassInterface`.
 */var SpecPolicy=keyMirror({ /**
   * These methods may be defined only once by the class specification or mixin.
   */DEFINE_ONCE:null, /**
   * These methods may be defined by both the class specification and mixins.
   * Subsequent definitions will be chained. These methods must return void.
   */DEFINE_MANY:null, /**
   * These methods are overriding the base class.
   */OVERRIDE_BASE:null, /**
   * These methods are similar to DEFINE_MANY, except we assume they return
   * objects. We try to merge the keys of the return values of all the mixed in
   * functions. If there is a key conflict we throw.
   */DEFINE_MANY_MERGED:null});var injectedMixins=[]; /**
 * Composite components are higher-level components that compose other composite
 * or native components.
 *
 * To create a new type of `ReactClass`, pass a specification of
 * your new class to `React.createClass`. The only requirement of your class
 * specification is that you implement a `render` method.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return <div>Hello World</div>;
 *     }
 *   });
 *
 * The class specification supports a specific protocol of methods that have
 * special meaning (e.g. `render`). See `ReactClassInterface` for
 * more the comprehensive protocol. Any other properties and methods in the
 * class specification will available on the prototype.
 *
 * @interface ReactClassInterface
 * @internal
 */var ReactClassInterface={ /**
   * An array of Mixin objects to include when defining your component.
   *
   * @type {array}
   * @optional
   */mixins:SpecPolicy.DEFINE_MANY, /**
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   *
   * @type {object}
   * @optional
   */statics:SpecPolicy.DEFINE_MANY, /**
   * Definition of prop types for this component.
   *
   * @type {object}
   * @optional
   */propTypes:SpecPolicy.DEFINE_MANY, /**
   * Definition of context types for this component.
   *
   * @type {object}
   * @optional
   */contextTypes:SpecPolicy.DEFINE_MANY, /**
   * Definition of context types this component sets for its children.
   *
   * @type {object}
   * @optional
   */childContextTypes:SpecPolicy.DEFINE_MANY, // ==== Definition methods ====
/**
   * Invoked when the component is mounted. Values in the mapping will be set on
   * `this.props` if that prop is not specified (i.e. using an `in` check).
   *
   * This method is invoked before `getInitialState` and therefore cannot rely
   * on `this.state` or use `this.setState`.
   *
   * @return {object}
   * @optional
   */getDefaultProps:SpecPolicy.DEFINE_MANY_MERGED, /**
   * Invoked once before the component is mounted. The return value will be used
   * as the initial value of `this.state`.
   *
   *   getInitialState: function() {
   *     return {
   *       isOn: false,
   *       fooBaz: new BazFoo()
   *     }
   *   }
   *
   * @return {object}
   * @optional
   */getInitialState:SpecPolicy.DEFINE_MANY_MERGED, /**
   * @return {object}
   * @optional
   */getChildContext:SpecPolicy.DEFINE_MANY_MERGED, /**
   * Uses props from `this.props` and state from `this.state` to render the
   * structure of the component.
   *
   * No guarantees are made about when or how often this method is invoked, so
   * it must not have side effects.
   *
   *   render: function() {
   *     var name = this.props.name;
   *     return <div>Hello, {name}!</div>;
   *   }
   *
   * @return {ReactComponent}
   * @nosideeffects
   * @required
   */render:SpecPolicy.DEFINE_ONCE, // ==== Delegate methods ====
/**
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   *
   * @optional
   */componentWillMount:SpecPolicy.DEFINE_MANY, /**
   * Invoked when the component has been mounted and has a DOM representation.
   * However, there is no guarantee that the DOM node is in the document.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been mounted (initialized and rendered) for the first time.
   *
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */componentDidMount:SpecPolicy.DEFINE_MANY, /**
   * Invoked before the component receives new props.
   *
   * Use this as an opportunity to react to a prop transition by updating the
   * state using `this.setState`. Current props are accessed via `this.props`.
   *
   *   componentWillReceiveProps: function(nextProps, nextContext) {
   *     this.setState({
   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
   *     });
   *   }
   *
   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
   * transition may cause a state change, but the opposite is not true. If you
   * need it, you are probably looking for `componentWillUpdate`.
   *
   * @param {object} nextProps
   * @optional
   */componentWillReceiveProps:SpecPolicy.DEFINE_MANY, /**
   * Invoked while deciding if the component should be updated as a result of
   * receiving new props, state and/or context.
   *
   * Use this as an opportunity to `return false` when you're certain that the
   * transition to the new props/state/context will not require a component
   * update.
   *
   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
   *     return !equal(nextProps, this.props) ||
   *       !equal(nextState, this.state) ||
   *       !equal(nextContext, this.context);
   *   }
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @return {boolean} True if the component should update.
   * @optional
   */shouldComponentUpdate:SpecPolicy.DEFINE_ONCE, /**
   * Invoked when the component is about to update due to a transition from
   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
   * and `nextContext`.
   *
   * Use this as an opportunity to perform preparation before an update occurs.
   *
   * NOTE: You **cannot** use `this.setState()` in this method.
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @param {ReactReconcileTransaction} transaction
   * @optional
   */componentWillUpdate:SpecPolicy.DEFINE_MANY, /**
   * Invoked when the component's DOM representation has been updated.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been updated.
   *
   * @param {object} prevProps
   * @param {?object} prevState
   * @param {?object} prevContext
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */componentDidUpdate:SpecPolicy.DEFINE_MANY, /**
   * Invoked when the component is about to be removed from its parent and have
   * its DOM representation destroyed.
   *
   * Use this as an opportunity to deallocate any external resources.
   *
   * NOTE: There is no `componentDidUnmount` since your component will have been
   * destroyed by that point.
   *
   * @optional
   */componentWillUnmount:SpecPolicy.DEFINE_MANY, // ==== Advanced methods ====
/**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @overridable
   */updateComponent:SpecPolicy.OVERRIDE_BASE}; /**
 * Mapping from class specification keys to special processing functions.
 *
 * Although these are declared like instance properties in the specification
 * when defining classes using `React.createClass`, they are actually static
 * and are accessible on the constructor instead of the prototype. Despite
 * being static, they must be defined outside of the "statics" key under
 * which all other static methods are defined.
 */var RESERVED_SPEC_KEYS={displayName:function displayName(Constructor,_displayName){Constructor.displayName = _displayName;},mixins:function mixins(Constructor,_mixins){if(_mixins){for(var i=0;i < _mixins.length;i++) {mixSpecIntoComponent(Constructor,_mixins[i]);}}},childContextTypes:function childContextTypes(Constructor,_childContextTypes){if("production" !== "development"){validateTypeDef(Constructor,_childContextTypes,ReactPropTypeLocations.childContext);}Constructor.childContextTypes = assign({},Constructor.childContextTypes,_childContextTypes);},contextTypes:function contextTypes(Constructor,_contextTypes){if("production" !== "development"){validateTypeDef(Constructor,_contextTypes,ReactPropTypeLocations.context);}Constructor.contextTypes = assign({},Constructor.contextTypes,_contextTypes);}, /**
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */getDefaultProps:function getDefaultProps(Constructor,_getDefaultProps){if(Constructor.getDefaultProps){Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps,_getDefaultProps);}else {Constructor.getDefaultProps = _getDefaultProps;}},propTypes:function propTypes(Constructor,_propTypes){if("production" !== "development"){validateTypeDef(Constructor,_propTypes,ReactPropTypeLocations.prop);}Constructor.propTypes = assign({},Constructor.propTypes,_propTypes);},statics:function statics(Constructor,_statics){mixStaticSpecIntoComponent(Constructor,_statics);}};function validateTypeDef(Constructor,typeDef,location){for(var propName in typeDef) {if(typeDef.hasOwnProperty(propName)){ // use a warning instead of an invariant so components
// don't show up in prod but not in __DEV__
"production" !== "development"?warning(typeof typeDef[propName] === 'function','%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.',Constructor.displayName || 'ReactClass',ReactPropTypeLocationNames[location],propName):null;}}}function validateMethodOverride(proto,name){var specPolicy=ReactClassInterface.hasOwnProperty(name)?ReactClassInterface[name]:null; // Disallow overriding of base class methods unless explicitly allowed.
if(ReactClassMixin.hasOwnProperty(name)){"production" !== "development"?invariant(specPolicy === SpecPolicy.OVERRIDE_BASE,'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.',name):invariant(specPolicy === SpecPolicy.OVERRIDE_BASE);} // Disallow defining methods more than once unless explicitly allowed.
if(proto.hasOwnProperty(name)){"production" !== "development"?invariant(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED,'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.',name):invariant(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED);}} /**
 * Mixin helper which handles policy validation and reserved
 * specification keys when building React classses.
 */function mixSpecIntoComponent(Constructor,spec){if(!spec){return;}"production" !== "development"?invariant(typeof spec !== 'function','ReactClass: You\'re attempting to ' + 'use a component class as a mixin. Instead, just use a regular object.'):invariant(typeof spec !== 'function');"production" !== "development"?invariant(!ReactElement.isValidElement(spec),'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.'):invariant(!ReactElement.isValidElement(spec));var proto=Constructor.prototype; // By handling mixins before any other properties, we ensure the same
// chaining order is applied to methods with DEFINE_MANY policy, whether
// mixins are listed before or after these methods in the spec.
if(spec.hasOwnProperty(MIXINS_KEY)){RESERVED_SPEC_KEYS.mixins(Constructor,spec.mixins);}for(var name in spec) {if(!spec.hasOwnProperty(name)){continue;}if(name === MIXINS_KEY){ // We have already handled mixins in a special case above
continue;}var property=spec[name];validateMethodOverride(proto,name);if(RESERVED_SPEC_KEYS.hasOwnProperty(name)){RESERVED_SPEC_KEYS[name](Constructor,property);}else { // Setup methods on prototype:
// The following member methods should not be automatically bound:
// 1. Expected ReactClass methods (in the "interface").
// 2. Overridden methods (that were mixed in).
var isReactClassMethod=ReactClassInterface.hasOwnProperty(name);var isAlreadyDefined=proto.hasOwnProperty(name);var markedDontBind=property && property.__reactDontBind;var isFunction=typeof property === 'function';var shouldAutoBind=isFunction && !isReactClassMethod && !isAlreadyDefined && !markedDontBind;if(shouldAutoBind){if(!proto.__reactAutoBindMap){proto.__reactAutoBindMap = {};}proto.__reactAutoBindMap[name] = property;proto[name] = property;}else {if(isAlreadyDefined){var specPolicy=ReactClassInterface[name]; // These cases should already be caught by validateMethodOverride
"production" !== "development"?invariant(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY),'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.',specPolicy,name):invariant(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)); // For methods which are defined more than once, call the existing
// methods before calling the new property, merging if appropriate.
if(specPolicy === SpecPolicy.DEFINE_MANY_MERGED){proto[name] = createMergedResultFunction(proto[name],property);}else if(specPolicy === SpecPolicy.DEFINE_MANY){proto[name] = createChainedFunction(proto[name],property);}}else {proto[name] = property;if("production" !== "development"){ // Add verbose displayName to the function, which helps when looking
// at profiling tools.
if(typeof property === 'function' && spec.displayName){proto[name].displayName = spec.displayName + '_' + name;}}}}}}}function mixStaticSpecIntoComponent(Constructor,statics){if(!statics){return;}for(var name in statics) {var property=statics[name];if(!statics.hasOwnProperty(name)){continue;}var isReserved=(name in RESERVED_SPEC_KEYS);"production" !== "development"?invariant(!isReserved,'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.',name):invariant(!isReserved);var isInherited=(name in Constructor);"production" !== "development"?invariant(!isInherited,'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.',name):invariant(!isInherited);Constructor[name] = property;}} /**
 * Merge two objects, but throw if both contain the same key.
 *
 * @param {object} one The first object, which is mutated.
 * @param {object} two The second object
 * @return {object} one after it has been mutated to contain everything in two.
 */function mergeIntoWithNoDuplicateKeys(one,two){"production" !== "development"?invariant(one && two && typeof one === 'object' && typeof two === 'object','mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'):invariant(one && two && typeof one === 'object' && typeof two === 'object');for(var key in two) {if(two.hasOwnProperty(key)){"production" !== "development"?invariant(one[key] === undefined,'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.',key):invariant(one[key] === undefined);one[key] = two[key];}}return one;} /**
 * Creates a function that invokes two functions and merges their return values.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */function createMergedResultFunction(one,two){return function mergedResult(){var a=one.apply(this,arguments);var b=two.apply(this,arguments);if(a == null){return b;}else if(b == null){return a;}var c={};mergeIntoWithNoDuplicateKeys(c,a);mergeIntoWithNoDuplicateKeys(c,b);return c;};} /**
 * Creates a function that invokes two functions and ignores their return vales.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */function createChainedFunction(one,two){return function chainedFunction(){one.apply(this,arguments);two.apply(this,arguments);};} /**
 * Binds a method to the component.
 *
 * @param {object} component Component whose method is going to be bound.
 * @param {function} method Method to be bound.
 * @return {function} The bound method.
 */function bindAutoBindMethod(component,method){var boundMethod=method.bind(component);if("production" !== "development"){boundMethod.__reactBoundContext = component;boundMethod.__reactBoundMethod = method;boundMethod.__reactBoundArguments = null;var componentName=component.constructor.displayName;var _bind=boundMethod.bind; /* eslint-disable block-scoped-var, no-undef */boundMethod.bind = function(newThis){for(var args=[],$__0=1,$__1=arguments.length;$__0 < $__1;$__0++) args.push(arguments[$__0]); // User is trying to bind() an autobound method; we effectively will
// ignore the value of "this" that the user is trying to use, so
// let's warn.
if(newThis !== component && newThis !== null){"production" !== "development"?warning(false,'bind(): React component methods may only be bound to the ' + 'component instance. See %s',componentName):null;}else if(!args.length){"production" !== "development"?warning(false,'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s',componentName):null;return boundMethod;}var reboundMethod=_bind.apply(boundMethod,arguments);reboundMethod.__reactBoundContext = component;reboundMethod.__reactBoundMethod = method;reboundMethod.__reactBoundArguments = args;return reboundMethod; /* eslint-enable */};}return boundMethod;} /**
 * Binds all auto-bound methods in a component.
 *
 * @param {object} component Component whose method is going to be bound.
 */function bindAutoBindMethods(component){for(var autoBindKey in component.__reactAutoBindMap) {if(component.__reactAutoBindMap.hasOwnProperty(autoBindKey)){var method=component.__reactAutoBindMap[autoBindKey];component[autoBindKey] = bindAutoBindMethod(component,ReactErrorUtils.guard(method,component.constructor.displayName + '.' + autoBindKey));}}}var typeDeprecationDescriptor={enumerable:false,get:function get(){var displayName=this.displayName || this.name || 'Component';"production" !== "development"?warning(false,'%s.type is deprecated. Use %s directly to access the class.',displayName,displayName):null;Object.defineProperty(this,'type',{value:this});return this;}}; /**
 * Add more to the ReactClass base class. These are all legacy features and
 * therefore not already part of the modern ReactComponent.
 */var ReactClassMixin={ /**
   * TODO: This will be deprecated because state should always keep a consistent
   * type signature and the only use case for this, is to avoid that.
   */replaceState:function replaceState(newState,callback){ReactUpdateQueue.enqueueReplaceState(this,newState);if(callback){ReactUpdateQueue.enqueueCallback(this,callback);}}, /**
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */isMounted:function isMounted(){if("production" !== "development"){var owner=ReactCurrentOwner.current;if(owner !== null){"production" !== "development"?warning(owner._warnedAboutRefsInRender,'%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.',owner.getName() || 'A component'):null;owner._warnedAboutRefsInRender = true;}}var internalInstance=ReactInstanceMap.get(this);return internalInstance && internalInstance !== ReactLifeCycle.currentlyMountingInstance;}, /**
   * Sets a subset of the props.
   *
   * @param {object} partialProps Subset of the next props.
   * @param {?function} callback Called after props are updated.
   * @final
   * @public
   * @deprecated
   */setProps:function setProps(partialProps,callback){ReactUpdateQueue.enqueueSetProps(this,partialProps);if(callback){ReactUpdateQueue.enqueueCallback(this,callback);}}, /**
   * Replace all the props.
   *
   * @param {object} newProps Subset of the next props.
   * @param {?function} callback Called after props are updated.
   * @final
   * @public
   * @deprecated
   */replaceProps:function replaceProps(newProps,callback){ReactUpdateQueue.enqueueReplaceProps(this,newProps);if(callback){ReactUpdateQueue.enqueueCallback(this,callback);}}};var ReactClassComponent=function ReactClassComponent(){};assign(ReactClassComponent.prototype,ReactComponent.prototype,ReactClassMixin); /**
 * Module for creating composite components.
 *
 * @class ReactClass
 */var ReactClass={ /**
   * Creates a composite component class given a class specification.
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */createClass:function createClass(spec){var Constructor=function Constructor(props,context){ // This constructor is overridden by mocks. The argument is used
// by mocks to assert on what gets mounted.
if("production" !== "development"){"production" !== "development"?warning(this instanceof Constructor,'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory'):null;} // Wire up auto-binding
if(this.__reactAutoBindMap){bindAutoBindMethods(this);}this.props = props;this.context = context;this.state = null; // ReactClasses doesn't have constructors. Instead, they use the
// getInitialState and componentWillMount methods for initialization.
var initialState=this.getInitialState?this.getInitialState():null;if("production" !== "development"){ // We allow auto-mocks to proceed as if they're returning null.
if(typeof initialState === 'undefined' && this.getInitialState._isMockFunction){ // This is probably bad practice. Consider warning here and
// deprecating this convenience.
initialState = null;}}"production" !== "development"?invariant(typeof initialState === 'object' && !Array.isArray(initialState),'%s.getInitialState(): must return an object or null',Constructor.displayName || 'ReactCompositeComponent'):invariant(typeof initialState === 'object' && !Array.isArray(initialState));this.state = initialState;};Constructor.prototype = new ReactClassComponent();Constructor.prototype.constructor = Constructor;injectedMixins.forEach(mixSpecIntoComponent.bind(null,Constructor));mixSpecIntoComponent(Constructor,spec); // Initialize the defaultProps property after all mixins have been merged
if(Constructor.getDefaultProps){Constructor.defaultProps = Constructor.getDefaultProps();}if("production" !== "development"){ // This is a tag to indicate that the use of these method names is ok,
// since it's used with createClass. If it's not, then it's likely a
// mistake so we'll warn you to use the static property, property
// initializer or constructor respectively.
if(Constructor.getDefaultProps){Constructor.getDefaultProps.isReactClassApproved = {};}if(Constructor.prototype.getInitialState){Constructor.prototype.getInitialState.isReactClassApproved = {};}}"production" !== "development"?invariant(Constructor.prototype.render,'createClass(...): Class specification must implement a `render` method.'):invariant(Constructor.prototype.render);if("production" !== "development"){"production" !== "development"?warning(!Constructor.prototype.componentShouldUpdate,'%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.',spec.displayName || 'A component'):null;} // Reduce time spent doing lookups by setting these on the prototype.
for(var methodName in ReactClassInterface) {if(!Constructor.prototype[methodName]){Constructor.prototype[methodName] = null;}} // Legacy hook
Constructor.type = Constructor;if("production" !== "development"){try{Object.defineProperty(Constructor,'type',typeDeprecationDescriptor);}catch(x) { // IE will fail on defineProperty (es5-shim/sham too)
}}return Constructor;},injection:{injectMixin:function injectMixin(mixin){injectedMixins.push(mixin);}}};module.exports = ReactClass;},{"135":135,"140":140,"141":141,"154":154,"27":27,"34":34,"39":39,"57":57,"60":60,"67":67,"68":68,"76":76,"77":77,"86":86}],34:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponent
 */'use strict';var ReactUpdateQueue=_dereq_(86);var invariant=_dereq_(135);var warning=_dereq_(154); /**
 * Base class helpers for the updating state of a component.
 */function ReactComponent(props,context){this.props = props;this.context = context;} /**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */ReactComponent.prototype.setState = function(partialState,callback){"production" !== "development"?invariant(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null,'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.'):invariant(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null);if("production" !== "development"){"production" !== "development"?warning(partialState != null,'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().'):null;}ReactUpdateQueue.enqueueSetState(this,partialState);if(callback){ReactUpdateQueue.enqueueCallback(this,callback);}}; /**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */ReactComponent.prototype.forceUpdate = function(callback){ReactUpdateQueue.enqueueForceUpdate(this);if(callback){ReactUpdateQueue.enqueueCallback(this,callback);}}; /**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */if("production" !== "development"){var deprecatedAPIs={getDOMNode:['getDOMNode','Use React.findDOMNode(component) instead.'],isMounted:['isMounted','Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],replaceProps:['replaceProps','Instead call React.render again at the top level.'],replaceState:['replaceState','Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).'],setProps:['setProps','Instead call React.render again at the top level.']};var defineDeprecationWarning=function defineDeprecationWarning(methodName,info){try{Object.defineProperty(ReactComponent.prototype,methodName,{get:function get(){"production" !== "development"?warning(false,'%s(...) is deprecated in plain JavaScript React classes. %s',info[0],info[1]):null;return undefined;}});}catch(x) { // IE will fail on defineProperty (es5-shim/sham too)
}};for(var fnName in deprecatedAPIs) {if(deprecatedAPIs.hasOwnProperty(fnName)){defineDeprecationWarning(fnName,deprecatedAPIs[fnName]);}}}module.exports = ReactComponent;},{"135":135,"154":154,"86":86}],35:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentBrowserEnvironment
 */ /*jslint evil: true */'use strict';var ReactDOMIDOperations=_dereq_(44);var ReactMount=_dereq_(70); /**
 * Abstracts away all functionality of the reconciler that requires knowledge of
 * the browser context. TODO: These callers should be refactored to avoid the
 * need for this injection.
 */var ReactComponentBrowserEnvironment={processChildrenUpdates:ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkupByID:ReactDOMIDOperations.dangerouslyReplaceNodeWithMarkupByID, /**
   * If a particular environment requires that some resources be cleaned up,
   * specify this in the injected Mixin. In the DOM, we would likely want to
   * purge any cached node ID lookups.
   *
   * @private
   */unmountIDFromEnvironment:function unmountIDFromEnvironment(rootNodeID){ReactMount.purgeID(rootNodeID);}};module.exports = ReactComponentBrowserEnvironment;},{"44":44,"70":70}],36:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentEnvironment
 */'use strict';var invariant=_dereq_(135);var injected=false;var ReactComponentEnvironment={ /**
   * Optionally injectable environment dependent cleanup hook. (server vs.
   * browser etc). Example: A browser system caches DOM nodes based on component
   * ID and must remove that cache entry when this instance is unmounted.
   */unmountIDFromEnvironment:null, /**
   * Optionally injectable hook for swapping out mount images in the middle of
   * the tree.
   */replaceNodeWithMarkupByID:null, /**
   * Optionally injectable hook for processing a queue of child updates. Will
   * later move into MultiChildComponents.
   */processChildrenUpdates:null,injection:{injectEnvironment:function injectEnvironment(environment){"production" !== "development"?invariant(!injected,'ReactCompositeComponent: injectEnvironment() can only be called once.'):invariant(!injected);ReactComponentEnvironment.unmountIDFromEnvironment = environment.unmountIDFromEnvironment;ReactComponentEnvironment.replaceNodeWithMarkupByID = environment.replaceNodeWithMarkupByID;ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;injected = true;}}};module.exports = ReactComponentEnvironment;},{"135":135}],37:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCompositeComponent
 */'use strict';var ReactComponentEnvironment=_dereq_(36);var ReactContext=_dereq_(38);var ReactCurrentOwner=_dereq_(39);var ReactElement=_dereq_(57);var ReactElementValidator=_dereq_(58);var ReactInstanceMap=_dereq_(67);var ReactLifeCycle=_dereq_(68);var ReactNativeComponent=_dereq_(73);var ReactPerf=_dereq_(75);var ReactPropTypeLocations=_dereq_(77);var ReactPropTypeLocationNames=_dereq_(76);var ReactReconciler=_dereq_(81);var ReactUpdates=_dereq_(87);var assign=_dereq_(27);var emptyObject=_dereq_(115);var invariant=_dereq_(135);var shouldUpdateReactComponent=_dereq_(151);var warning=_dereq_(154);function getDeclarationErrorAddendum(component){var owner=component._currentElement._owner || null;if(owner){var name=owner.getName();if(name){return ' Check the render method of `' + name + '`.';}}return '';} /**
 * ------------------ The Life-Cycle of a Composite Component ------------------
 *
 * - constructor: Initialization of state. The instance is now retained.
 *   - componentWillMount
 *   - render
 *   - [children's constructors]
 *     - [children's componentWillMount and render]
 *     - [children's componentDidMount]
 *     - componentDidMount
 *
 *       Update Phases:
 *       - componentWillReceiveProps (only called if parent updated)
 *       - shouldComponentUpdate
 *         - componentWillUpdate
 *           - render
 *           - [children's constructors or receive props phases]
 *         - componentDidUpdate
 *
 *     - componentWillUnmount
 *     - [children's componentWillUnmount]
 *   - [children destroyed]
 * - (destroyed): The instance is now blank, released by React and ready for GC.
 *
 * -----------------------------------------------------------------------------
 */ /**
 * An incrementing ID assigned to each component when it is mounted. This is
 * used to enforce the order in which `ReactUpdates` updates dirty components.
 *
 * @private
 */var nextMountID=1; /**
 * @lends {ReactCompositeComponent.prototype}
 */var ReactCompositeComponentMixin={ /**
   * Base constructor for all composite component.
   *
   * @param {ReactElement} element
   * @final
   * @internal
   */construct:function construct(element){this._currentElement = element;this._rootNodeID = null;this._instance = null; // See ReactUpdateQueue
this._pendingElement = null;this._pendingStateQueue = null;this._pendingReplaceState = false;this._pendingForceUpdate = false;this._renderedComponent = null;this._context = null;this._mountOrder = 0;this._isTopLevel = false; // See ReactUpdates and ReactUpdateQueue.
this._pendingCallbacks = null;}, /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */mountComponent:function mountComponent(rootID,transaction,context){this._context = context;this._mountOrder = nextMountID++;this._rootNodeID = rootID;var publicProps=this._processProps(this._currentElement.props);var publicContext=this._processContext(this._currentElement._context);var Component=ReactNativeComponent.getComponentClassForElement(this._currentElement); // Initialize the public class
var inst=new Component(publicProps,publicContext);if("production" !== "development"){ // This will throw later in _renderValidatedComponent, but add an early
// warning now to help debugging
"production" !== "development"?warning(inst.render != null,'%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render` in your ' + 'component or you may have accidentally tried to render an element ' + 'whose type is a function that isn\'t a React component.',Component.displayName || Component.name || 'Component'):null;} // These should be set up in the constructor, but as a convenience for
// simpler class abstractions, we set them up after the fact.
inst.props = publicProps;inst.context = publicContext;inst.refs = emptyObject;this._instance = inst; // Store a reference from the instance back to the internal representation
ReactInstanceMap.set(inst,this);if("production" !== "development"){this._warnIfContextsDiffer(this._currentElement._context,context);}if("production" !== "development"){ // Since plain JS classes are defined without any special initialization
// logic, we can not catch common errors early. Therefore, we have to
// catch them here, at initialization time, instead.
"production" !== "development"?warning(!inst.getInitialState || inst.getInitialState.isReactClassApproved,'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?',this.getName() || 'a component'):null;"production" !== "development"?warning(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved,'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.',this.getName() || 'a component'):null;"production" !== "development"?warning(!inst.propTypes,'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.',this.getName() || 'a component'):null;"production" !== "development"?warning(!inst.contextTypes,'contextTypes was defined as an instance property on %s. Use a ' + 'static property to define contextTypes instead.',this.getName() || 'a component'):null;"production" !== "development"?warning(typeof inst.componentShouldUpdate !== 'function','%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.',this.getName() || 'A component'):null;}var initialState=inst.state;if(initialState === undefined){inst.state = initialState = null;}"production" !== "development"?invariant(typeof initialState === 'object' && !Array.isArray(initialState),'%s.state: must be set to an object or null',this.getName() || 'ReactCompositeComponent'):invariant(typeof initialState === 'object' && !Array.isArray(initialState));this._pendingStateQueue = null;this._pendingReplaceState = false;this._pendingForceUpdate = false;var childContext;var renderedElement;var previouslyMounting=ReactLifeCycle.currentlyMountingInstance;ReactLifeCycle.currentlyMountingInstance = this;try{if(inst.componentWillMount){inst.componentWillMount(); // When mounting, calls to `setState` by `componentWillMount` will set
// `this._pendingStateQueue` without triggering a re-render.
if(this._pendingStateQueue){inst.state = this._processPendingState(inst.props,inst.context);}}childContext = this._getValidatedChildContext(context);renderedElement = this._renderValidatedComponent(childContext);}finally {ReactLifeCycle.currentlyMountingInstance = previouslyMounting;}this._renderedComponent = this._instantiateReactComponent(renderedElement,this._currentElement.type // The wrapping type
);var markup=ReactReconciler.mountComponent(this._renderedComponent,rootID,transaction,this._mergeChildContext(context,childContext));if(inst.componentDidMount){transaction.getReactMountReady().enqueue(inst.componentDidMount,inst);}return markup;}, /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */unmountComponent:function unmountComponent(){var inst=this._instance;if(inst.componentWillUnmount){var previouslyUnmounting=ReactLifeCycle.currentlyUnmountingInstance;ReactLifeCycle.currentlyUnmountingInstance = this;try{inst.componentWillUnmount();}finally {ReactLifeCycle.currentlyUnmountingInstance = previouslyUnmounting;}}ReactReconciler.unmountComponent(this._renderedComponent);this._renderedComponent = null; // Reset pending fields
this._pendingStateQueue = null;this._pendingReplaceState = false;this._pendingForceUpdate = false;this._pendingCallbacks = null;this._pendingElement = null; // These fields do not really need to be reset since this object is no
// longer accessible.
this._context = null;this._rootNodeID = null; // Delete the reference from the instance to this internal representation
// which allow the internals to be properly cleaned up even if the user
// leaks a reference to the public instance.
ReactInstanceMap.remove(inst); // Some existing components rely on inst.props even after they've been
// destroyed (in event handlers).
// TODO: inst.props = null;
// TODO: inst.state = null;
// TODO: inst.context = null;
}, /**
   * Schedule a partial update to the props. Only used for internal testing.
   *
   * @param {object} partialProps Subset of the next props.
   * @param {?function} callback Called after props are updated.
   * @final
   * @internal
   */_setPropsInternal:function _setPropsInternal(partialProps,callback){ // This is a deoptimized path. We optimize for always having an element.
// This creates an extra internal element.
var element=this._pendingElement || this._currentElement;this._pendingElement = ReactElement.cloneAndReplaceProps(element,assign({},element.props,partialProps));ReactUpdates.enqueueUpdate(this,callback);}, /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`
   *
   * @param {object} context
   * @return {?object}
   * @private
   */_maskContext:function _maskContext(context){var maskedContext=null; // This really should be getting the component class for the element,
// but we know that we're not going to need it for built-ins.
if(typeof this._currentElement.type === 'string'){return emptyObject;}var contextTypes=this._currentElement.type.contextTypes;if(!contextTypes){return emptyObject;}maskedContext = {};for(var contextName in contextTypes) {maskedContext[contextName] = context[contextName];}return maskedContext;}, /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`, and asserts that they are valid.
   *
   * @param {object} context
   * @return {?object}
   * @private
   */_processContext:function _processContext(context){var maskedContext=this._maskContext(context);if("production" !== "development"){var Component=ReactNativeComponent.getComponentClassForElement(this._currentElement);if(Component.contextTypes){this._checkPropTypes(Component.contextTypes,maskedContext,ReactPropTypeLocations.context);}}return maskedContext;}, /**
   * @param {object} currentContext
   * @return {object}
   * @private
   */_getValidatedChildContext:function _getValidatedChildContext(currentContext){var inst=this._instance;var childContext=inst.getChildContext && inst.getChildContext();if(childContext){"production" !== "development"?invariant(typeof inst.constructor.childContextTypes === 'object','%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().',this.getName() || 'ReactCompositeComponent'):invariant(typeof inst.constructor.childContextTypes === 'object');if("production" !== "development"){this._checkPropTypes(inst.constructor.childContextTypes,childContext,ReactPropTypeLocations.childContext);}for(var name in childContext) {"production" !== "development"?invariant(name in inst.constructor.childContextTypes,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',this.getName() || 'ReactCompositeComponent',name):invariant(name in inst.constructor.childContextTypes);}return childContext;}return null;},_mergeChildContext:function _mergeChildContext(currentContext,childContext){if(childContext){return assign({},currentContext,childContext);}return currentContext;}, /**
   * Processes props by setting default values for unspecified props and
   * asserting that the props are valid. Does not mutate its argument; returns
   * a new props object with defaults merged in.
   *
   * @param {object} newProps
   * @return {object}
   * @private
   */_processProps:function _processProps(newProps){if("production" !== "development"){var Component=ReactNativeComponent.getComponentClassForElement(this._currentElement);if(Component.propTypes){this._checkPropTypes(Component.propTypes,newProps,ReactPropTypeLocations.prop);}}return newProps;}, /**
   * Assert that the props are valid
   *
   * @param {object} propTypes Map of prop name to a ReactPropType
   * @param {object} props
   * @param {string} location e.g. "prop", "context", "child context"
   * @private
   */_checkPropTypes:function _checkPropTypes(propTypes,props,location){ // TODO: Stop validating prop types here and only use the element
// validation.
var componentName=this.getName();for(var propName in propTypes) {if(propTypes.hasOwnProperty(propName)){var error;try{ // This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
"production" !== "development"?invariant(typeof propTypes[propName] === 'function','%s: %s type `%s` is invalid; it must be a function, usually ' + 'from React.PropTypes.',componentName || 'React class',ReactPropTypeLocationNames[location],propName):invariant(typeof propTypes[propName] === 'function');error = propTypes[propName](props,propName,componentName,location);}catch(ex) {error = ex;}if(error instanceof Error){ // We may want to extend this logic for similar errors in
// React.render calls, so I'm abstracting it away into
// a function to minimize refactoring in the future
var addendum=getDeclarationErrorAddendum(this);if(location === ReactPropTypeLocations.prop){ // Preface gives us something to blacklist in warning module
"production" !== "development"?warning(false,'Failed Composite propType: %s%s',error.message,addendum):null;}else {"production" !== "development"?warning(false,'Failed Context Types: %s%s',error.message,addendum):null;}}}}},receiveComponent:function receiveComponent(nextElement,transaction,nextContext){var prevElement=this._currentElement;var prevContext=this._context;this._pendingElement = null;this.updateComponent(transaction,prevElement,nextElement,prevContext,nextContext);}, /**
   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
   * is set, update the component.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */performUpdateIfNecessary:function performUpdateIfNecessary(transaction){if(this._pendingElement != null){ReactReconciler.receiveComponent(this,this._pendingElement || this._currentElement,transaction,this._context);}if(this._pendingStateQueue !== null || this._pendingForceUpdate){if("production" !== "development"){ReactElementValidator.checkAndWarnForMutatedProps(this._currentElement);}this.updateComponent(transaction,this._currentElement,this._currentElement,this._context,this._context);}}, /**
   * Compare two contexts, warning if they are different
   * TODO: Remove this check when owner-context is removed
   */_warnIfContextsDiffer:function _warnIfContextsDiffer(ownerBasedContext,parentBasedContext){ownerBasedContext = this._maskContext(ownerBasedContext);parentBasedContext = this._maskContext(parentBasedContext);var parentKeys=Object.keys(parentBasedContext).sort();var displayName=this.getName() || 'ReactCompositeComponent';for(var i=0;i < parentKeys.length;i++) {var key=parentKeys[i];"production" !== "development"?warning(ownerBasedContext[key] === parentBasedContext[key],'owner-based and parent-based contexts differ ' + '(values: `%s` vs `%s`) for key (%s) while mounting %s ' + '(see: http://fb.me/react-context-by-parent)',ownerBasedContext[key],parentBasedContext[key],key,displayName):null;}}, /**
   * Perform an update to a mounted component. The componentWillReceiveProps and
   * shouldComponentUpdate methods are called, then (assuming the update isn't
   * skipped) the remaining update lifecycle methods are called and the DOM
   * representation is updated.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevParentElement
   * @param {ReactElement} nextParentElement
   * @internal
   * @overridable
   */updateComponent:function updateComponent(transaction,prevParentElement,nextParentElement,prevUnmaskedContext,nextUnmaskedContext){var inst=this._instance;var nextContext=inst.context;var nextProps=inst.props; // Distinguish between a props update versus a simple state update
if(prevParentElement !== nextParentElement){nextContext = this._processContext(nextParentElement._context);nextProps = this._processProps(nextParentElement.props);if("production" !== "development"){if(nextUnmaskedContext != null){this._warnIfContextsDiffer(nextParentElement._context,nextUnmaskedContext);}} // An update here will schedule an update but immediately set
// _pendingStateQueue which will ensure that any state updates gets
// immediately reconciled instead of waiting for the next batch.
if(inst.componentWillReceiveProps){inst.componentWillReceiveProps(nextProps,nextContext);}}var nextState=this._processPendingState(nextProps,nextContext);var shouldUpdate=this._pendingForceUpdate || !inst.shouldComponentUpdate || inst.shouldComponentUpdate(nextProps,nextState,nextContext);if("production" !== "development"){"production" !== "development"?warning(typeof shouldUpdate !== 'undefined','%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.',this.getName() || 'ReactCompositeComponent'):null;}if(shouldUpdate){this._pendingForceUpdate = false; // Will set `this.props`, `this.state` and `this.context`.
this._performComponentUpdate(nextParentElement,nextProps,nextState,nextContext,transaction,nextUnmaskedContext);}else { // If it's determined that a component should not update, we still want
// to set props and state but we shortcut the rest of the update.
this._currentElement = nextParentElement;this._context = nextUnmaskedContext;inst.props = nextProps;inst.state = nextState;inst.context = nextContext;}},_processPendingState:function _processPendingState(props,context){var inst=this._instance;var queue=this._pendingStateQueue;var replace=this._pendingReplaceState;this._pendingReplaceState = false;this._pendingStateQueue = null;if(!queue){return inst.state;}if(replace && queue.length === 1){return queue[0];}var nextState=assign({},replace?queue[0]:inst.state);for(var i=replace?1:0;i < queue.length;i++) {var partial=queue[i];assign(nextState,typeof partial === 'function'?partial.call(inst,nextState,props,context):partial);}return nextState;}, /**
   * Merges new props and state, notifies delegate methods of update and
   * performs update.
   *
   * @param {ReactElement} nextElement Next element
   * @param {object} nextProps Next public object to set as properties.
   * @param {?object} nextState Next object to set as state.
   * @param {?object} nextContext Next public object to set as context.
   * @param {ReactReconcileTransaction} transaction
   * @param {?object} unmaskedContext
   * @private
   */_performComponentUpdate:function _performComponentUpdate(nextElement,nextProps,nextState,nextContext,transaction,unmaskedContext){var inst=this._instance;var prevProps=inst.props;var prevState=inst.state;var prevContext=inst.context;if(inst.componentWillUpdate){inst.componentWillUpdate(nextProps,nextState,nextContext);}this._currentElement = nextElement;this._context = unmaskedContext;inst.props = nextProps;inst.state = nextState;inst.context = nextContext;this._updateRenderedComponent(transaction,unmaskedContext);if(inst.componentDidUpdate){transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst,prevProps,prevState,prevContext),inst);}}, /**
   * Call the component's `render` method and update the DOM accordingly.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */_updateRenderedComponent:function _updateRenderedComponent(transaction,context){var prevComponentInstance=this._renderedComponent;var prevRenderedElement=prevComponentInstance._currentElement;var childContext=this._getValidatedChildContext();var nextRenderedElement=this._renderValidatedComponent(childContext);if(shouldUpdateReactComponent(prevRenderedElement,nextRenderedElement)){ReactReconciler.receiveComponent(prevComponentInstance,nextRenderedElement,transaction,this._mergeChildContext(context,childContext));}else { // These two IDs are actually the same! But nothing should rely on that.
var thisID=this._rootNodeID;var prevComponentID=prevComponentInstance._rootNodeID;ReactReconciler.unmountComponent(prevComponentInstance);this._renderedComponent = this._instantiateReactComponent(nextRenderedElement,this._currentElement.type);var nextMarkup=ReactReconciler.mountComponent(this._renderedComponent,thisID,transaction,this._mergeChildContext(context,childContext));this._replaceNodeWithMarkupByID(prevComponentID,nextMarkup);}}, /**
   * @protected
   */_replaceNodeWithMarkupByID:function _replaceNodeWithMarkupByID(prevComponentID,nextMarkup){ReactComponentEnvironment.replaceNodeWithMarkupByID(prevComponentID,nextMarkup);}, /**
   * @protected
   */_renderValidatedComponentWithoutOwnerOrContext:function _renderValidatedComponentWithoutOwnerOrContext(){var inst=this._instance;var renderedComponent=inst.render();if("production" !== "development"){ // We allow auto-mocks to proceed as if they're returning null.
if(typeof renderedComponent === 'undefined' && inst.render._isMockFunction){ // This is probably bad practice. Consider warning here and
// deprecating this convenience.
renderedComponent = null;}}return renderedComponent;}, /**
   * @private
   */_renderValidatedComponent:function _renderValidatedComponent(childContext){var renderedComponent;var previousContext=ReactContext.current;ReactContext.current = this._mergeChildContext(this._currentElement._context,childContext);ReactCurrentOwner.current = this;try{renderedComponent = this._renderValidatedComponentWithoutOwnerOrContext();}finally {ReactContext.current = previousContext;ReactCurrentOwner.current = null;}"production" !== "development"?invariant( // TODO: An `isValidNode` function would probably be more appropriate
renderedComponent === null || renderedComponent === false || ReactElement.isValidElement(renderedComponent),'%s.render(): A valid ReactComponent must be returned. You may have ' + 'returned undefined, an array or some other invalid object.',this.getName() || 'ReactCompositeComponent'):invariant( // TODO: An `isValidNode` function would probably be more appropriate
renderedComponent === null || renderedComponent === false || ReactElement.isValidElement(renderedComponent));return renderedComponent;}, /**
   * Lazily allocates the refs object and stores `component` as `ref`.
   *
   * @param {string} ref Reference name.
   * @param {component} component Component to store as `ref`.
   * @final
   * @private
   */attachRef:function attachRef(ref,component){var inst=this.getPublicInstance();var refs=inst.refs === emptyObject?inst.refs = {}:inst.refs;refs[ref] = component.getPublicInstance();}, /**
   * Detaches a reference name.
   *
   * @param {string} ref Name to dereference.
   * @final
   * @private
   */detachRef:function detachRef(ref){var refs=this.getPublicInstance().refs;delete refs[ref];}, /**
   * Get a text description of the component that can be used to identify it
   * in error messages.
   * @return {string} The name or null.
   * @internal
   */getName:function getName(){var type=this._currentElement.type;var constructor=this._instance && this._instance.constructor;return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;}, /**
   * Get the publicly accessible representation of this component - i.e. what
   * is exposed by refs and returned by React.render. Can be null for stateless
   * components.
   *
   * @return {ReactComponent} the public component instance.
   * @internal
   */getPublicInstance:function getPublicInstance(){return this._instance;}, // Stub
_instantiateReactComponent:null};ReactPerf.measureMethods(ReactCompositeComponentMixin,'ReactCompositeComponent',{mountComponent:'mountComponent',updateComponent:'updateComponent',_renderValidatedComponent:'_renderValidatedComponent'});var ReactCompositeComponent={Mixin:ReactCompositeComponentMixin};module.exports = ReactCompositeComponent;},{"115":115,"135":135,"151":151,"154":154,"27":27,"36":36,"38":38,"39":39,"57":57,"58":58,"67":67,"68":68,"73":73,"75":75,"76":76,"77":77,"81":81,"87":87}],38:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactContext
 */'use strict';var assign=_dereq_(27);var emptyObject=_dereq_(115);var warning=_dereq_(154);var didWarn=false; /**
 * Keeps track of the current context.
 *
 * The context is automatically passed down the component ownership hierarchy
 * and is accessible via `this.context` on ReactCompositeComponents.
 */var ReactContext={ /**
   * @internal
   * @type {object}
   */current:emptyObject, /**
   * Temporarily extends the current context while executing scopedCallback.
   *
   * A typical use case might look like
   *
   *  render: function() {
   *    var children = ReactContext.withContext({foo: 'foo'}, () => (
   *
   *    ));
   *    return <div>{children}</div>;
   *  }
   *
   * @param {object} newContext New context to merge into the existing context
   * @param {function} scopedCallback Callback to run with the new context
   * @return {ReactComponent|array<ReactComponent>}
   */withContext:function withContext(newContext,scopedCallback){if("production" !== "development"){"production" !== "development"?warning(didWarn,'withContext is deprecated and will be removed in a future version. ' + 'Use a wrapper component with getChildContext instead.'):null;didWarn = true;}var result;var previousContext=ReactContext.current;ReactContext.current = assign({},previousContext,newContext);try{result = scopedCallback();}finally {ReactContext.current = previousContext;}return result;}};module.exports = ReactContext;},{"115":115,"154":154,"27":27}],39:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCurrentOwner
 */'use strict'; /**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 *
 * The depth indicate how many composite components are above this render level.
 */var ReactCurrentOwner={ /**
   * @internal
   * @type {ReactComponent}
   */current:null};module.exports = ReactCurrentOwner;},{}],40:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOM
 * @typechecks static-only
 */'use strict';var ReactElement=_dereq_(57);var ReactElementValidator=_dereq_(58);var mapObject=_dereq_(142); /**
 * Create a factory that creates HTML tag elements.
 *
 * @param {string} tag Tag name (e.g. `div`).
 * @private
 */function createDOMFactory(tag){if("production" !== "development"){return ReactElementValidator.createFactory(tag);}return ReactElement.createFactory(tag);} /**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
 *
 * @public
 */var ReactDOM=mapObject({a:'a',abbr:'abbr',address:'address',area:'area',article:'article',aside:'aside',audio:'audio',b:'b',base:'base',bdi:'bdi',bdo:'bdo',big:'big',blockquote:'blockquote',body:'body',br:'br',button:'button',canvas:'canvas',caption:'caption',cite:'cite',code:'code',col:'col',colgroup:'colgroup',data:'data',datalist:'datalist',dd:'dd',del:'del',details:'details',dfn:'dfn',dialog:'dialog',div:'div',dl:'dl',dt:'dt',em:'em',embed:'embed',fieldset:'fieldset',figcaption:'figcaption',figure:'figure',footer:'footer',form:'form',h1:'h1',h2:'h2',h3:'h3',h4:'h4',h5:'h5',h6:'h6',head:'head',header:'header',hr:'hr',html:'html',i:'i',iframe:'iframe',img:'img',input:'input',ins:'ins',kbd:'kbd',keygen:'keygen',label:'label',legend:'legend',li:'li',link:'link',main:'main',map:'map',mark:'mark',menu:'menu',menuitem:'menuitem',meta:'meta',meter:'meter',nav:'nav',noscript:'noscript',object:'object',ol:'ol',optgroup:'optgroup',option:'option',output:'output',p:'p',param:'param',picture:'picture',pre:'pre',progress:'progress',q:'q',rp:'rp',rt:'rt',ruby:'ruby',s:'s',samp:'samp',script:'script',section:'section',select:'select',small:'small',source:'source',span:'span',strong:'strong',style:'style',sub:'sub',summary:'summary',sup:'sup',table:'table',tbody:'tbody',td:'td',textarea:'textarea',tfoot:'tfoot',th:'th',thead:'thead',time:'time',title:'title',tr:'tr',track:'track',u:'u',ul:'ul','var':'var',video:'video',wbr:'wbr', // SVG
circle:'circle',clipPath:'clipPath',defs:'defs',ellipse:'ellipse',g:'g',line:'line',linearGradient:'linearGradient',mask:'mask',path:'path',pattern:'pattern',polygon:'polygon',polyline:'polyline',radialGradient:'radialGradient',rect:'rect',stop:'stop',svg:'svg',text:'text',tspan:'tspan'},createDOMFactory);module.exports = ReactDOM;},{"142":142,"57":57,"58":58}],41:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMButton
 */'use strict';var AutoFocusMixin=_dereq_(2);var ReactBrowserComponentMixin=_dereq_(29);var ReactClass=_dereq_(33);var ReactElement=_dereq_(57);var keyMirror=_dereq_(140);var button=ReactElement.createFactory('button');var mouseListenerNames=keyMirror({onClick:true,onDoubleClick:true,onMouseDown:true,onMouseMove:true,onMouseUp:true,onClickCapture:true,onDoubleClickCapture:true,onMouseDownCapture:true,onMouseMoveCapture:true,onMouseUpCapture:true}); /**
 * Implements a <button> native component that does not receive mouse events
 * when `disabled` is set.
 */var ReactDOMButton=ReactClass.createClass({displayName:'ReactDOMButton',tagName:'BUTTON',mixins:[AutoFocusMixin,ReactBrowserComponentMixin],render:function render(){var props={}; // Copy the props; except the mouse listeners if we're disabled
for(var key in this.props) {if(this.props.hasOwnProperty(key) && (!this.props.disabled || !mouseListenerNames[key])){props[key] = this.props[key];}}return button(props,this.props.children);}});module.exports = ReactDOMButton;},{"140":140,"2":2,"29":29,"33":33,"57":57}],42:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponent
 * @typechecks static-only
 */ /* global hasOwnProperty:true */'use strict';var CSSPropertyOperations=_dereq_(5);var DOMProperty=_dereq_(10);var DOMPropertyOperations=_dereq_(11);var ReactBrowserEventEmitter=_dereq_(30);var ReactComponentBrowserEnvironment=_dereq_(35);var ReactMount=_dereq_(70);var ReactMultiChild=_dereq_(71);var ReactPerf=_dereq_(75);var assign=_dereq_(27);var escapeTextContentForBrowser=_dereq_(116);var invariant=_dereq_(135);var isEventSupported=_dereq_(136);var keyOf=_dereq_(141);var warning=_dereq_(154);var deleteListener=ReactBrowserEventEmitter.deleteListener;var listenTo=ReactBrowserEventEmitter.listenTo;var registrationNameModules=ReactBrowserEventEmitter.registrationNameModules; // For quickly matching children type, to test if can be treated as content.
var CONTENT_TYPES={'string':true,'number':true};var STYLE=keyOf({style:null});var ELEMENT_NODE_TYPE=1; /**
 * Optionally injectable operations for mutating the DOM
 */var BackendIDOperations=null; /**
 * @param {?object} props
 */function assertValidProps(props){if(!props){return;} // Note the use of `==` which checks for null or undefined.
if(props.dangerouslySetInnerHTML != null){"production" !== "development"?invariant(props.children == null,'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'):invariant(props.children == null);"production" !== "development"?invariant(typeof props.dangerouslySetInnerHTML === 'object' && '__html' in props.dangerouslySetInnerHTML,'`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://fb.me/react-invariant-dangerously-set-inner-html ' + 'for more information.'):invariant(typeof props.dangerouslySetInnerHTML === 'object' && '__html' in props.dangerouslySetInnerHTML);}if("production" !== "development"){"production" !== "development"?warning(props.innerHTML == null,'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.'):null;"production" !== "development"?warning(!props.contentEditable || props.children == null,'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.'):null;}"production" !== "development"?invariant(props.style == null || typeof props.style === 'object','The `style` prop expects a mapping from style properties to values, ' + 'not a string. For example, style={{marginRight: spacing + \'em\'}} when ' + 'using JSX.'):invariant(props.style == null || typeof props.style === 'object');}function putListener(id,registrationName,listener,transaction){if("production" !== "development"){ // IE8 has no API for event capturing and the `onScroll` event doesn't
// bubble.
"production" !== "development"?warning(registrationName !== 'onScroll' || isEventSupported('scroll',true),'This browser doesn\'t support the `onScroll` event'):null;}var container=ReactMount.findReactContainerForID(id);if(container){var doc=container.nodeType === ELEMENT_NODE_TYPE?container.ownerDocument:container;listenTo(registrationName,doc);}transaction.getPutListenerQueue().enqueuePutListener(id,registrationName,listener);} // For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special cased tags.
var omittedCloseTags={'area':true,'base':true,'br':true,'col':true,'embed':true,'hr':true,'img':true,'input':true,'keygen':true,'link':true,'meta':true,'param':true,'source':true,'track':true,'wbr':true // NOTE: menuitem's close tag should be omitted, but that causes problems.
}; // We accept any tag to be rendered but since this gets injected into abitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name
var VALID_TAG_REGEX=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache={};var hasOwnProperty=({}).hasOwnProperty;function validateDangerousTag(tag){if(!hasOwnProperty.call(validatedTagCache,tag)){"production" !== "development"?invariant(VALID_TAG_REGEX.test(tag),'Invalid tag: %s',tag):invariant(VALID_TAG_REGEX.test(tag));validatedTagCache[tag] = true;}} /**
 * Creates a new React class that is idempotent and capable of containing other
 * React components. It accepts event listeners and DOM properties that are
 * valid according to `DOMProperty`.
 *
 *  - Event listeners: `onClick`, `onMouseDown`, etc.
 *  - DOM properties: `className`, `name`, `title`, etc.
 *
 * The `style` property functions differently from the DOM API. It accepts an
 * object mapping of style properties to values.
 *
 * @constructor ReactDOMComponent
 * @extends ReactMultiChild
 */function ReactDOMComponent(tag){validateDangerousTag(tag);this._tag = tag;this._renderedChildren = null;this._previousStyleCopy = null;this._rootNodeID = null;}ReactDOMComponent.displayName = 'ReactDOMComponent';ReactDOMComponent.Mixin = {construct:function construct(element){this._currentElement = element;}, /**
   * Generates root tag markup then recurses. This method has side effects and
   * is not idempotent.
   *
   * @internal
   * @param {string} rootID The root DOM ID for this node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} The computed markup.
   */mountComponent:function mountComponent(rootID,transaction,context){this._rootNodeID = rootID;assertValidProps(this._currentElement.props);var closeTag=omittedCloseTags[this._tag]?'':'</' + this._tag + '>';return this._createOpenTagMarkupAndPutListeners(transaction) + this._createContentMarkup(transaction,context) + closeTag;}, /**
   * Creates markup for the open tag and all attributes.
   *
   * This method has side effects because events get registered.
   *
   * Iterating over object properties is faster than iterating over arrays.
   * @see http://jsperf.com/obj-vs-arr-iteration
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} Markup of opening tag.
   */_createOpenTagMarkupAndPutListeners:function _createOpenTagMarkupAndPutListeners(transaction){var props=this._currentElement.props;var ret='<' + this._tag;for(var propKey in props) {if(!props.hasOwnProperty(propKey)){continue;}var propValue=props[propKey];if(propValue == null){continue;}if(registrationNameModules.hasOwnProperty(propKey)){putListener(this._rootNodeID,propKey,propValue,transaction);}else {if(propKey === STYLE){if(propValue){propValue = this._previousStyleCopy = assign({},props.style);}propValue = CSSPropertyOperations.createMarkupForStyles(propValue);}var markup=DOMPropertyOperations.createMarkupForProperty(propKey,propValue);if(markup){ret += ' ' + markup;}}} // For static pages, no need to put React ID and checksum. Saves lots of
// bytes.
if(transaction.renderToStaticMarkup){return ret + '>';}var markupForID=DOMPropertyOperations.createMarkupForID(this._rootNodeID);return ret + ' ' + markupForID + '>';}, /**
   * Creates markup for the content between the tags.
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} context
   * @return {string} Content markup.
   */_createContentMarkup:function _createContentMarkup(transaction,context){var prefix='';if(this._tag === 'listing' || this._tag === 'pre' || this._tag === 'textarea'){ // Add an initial newline because browsers ignore the first newline in
// a <listing>, <pre>, or <textarea> as an "authoring convenience" -- see
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody.
prefix = '\n';}var props=this._currentElement.props; // Intentional use of != to avoid catching zero/false.
var innerHTML=props.dangerouslySetInnerHTML;if(innerHTML != null){if(innerHTML.__html != null){return prefix + innerHTML.__html;}}else {var contentToUse=CONTENT_TYPES[typeof props.children]?props.children:null;var childrenToUse=contentToUse != null?null:props.children;if(contentToUse != null){return prefix + escapeTextContentForBrowser(contentToUse);}else if(childrenToUse != null){var mountImages=this.mountChildren(childrenToUse,transaction,context);return prefix + mountImages.join('');}}return prefix;},receiveComponent:function receiveComponent(nextElement,transaction,context){var prevElement=this._currentElement;this._currentElement = nextElement;this.updateComponent(transaction,prevElement,nextElement,context);}, /**
   * Updates a native DOM component after it has already been allocated and
   * attached to the DOM. Reconciles the root DOM node, then recurses.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevElement
   * @param {ReactElement} nextElement
   * @internal
   * @overridable
   */updateComponent:function updateComponent(transaction,prevElement,nextElement,context){assertValidProps(this._currentElement.props);this._updateDOMProperties(prevElement.props,transaction);this._updateDOMChildren(prevElement.props,transaction,context);}, /**
   * Reconciles the properties by detecting differences in property values and
   * updating the DOM as necessary. This function is probably the single most
   * critical path for performance optimization.
   *
   * TODO: Benchmark whether checking for changed values in memory actually
   *       improves performance (especially statically positioned elements).
   * TODO: Benchmark the effects of putting this at the top since 99% of props
   *       do not change for a given reconciliation.
   * TODO: Benchmark areas that can be improved with caching.
   *
   * @private
   * @param {object} lastProps
   * @param {ReactReconcileTransaction} transaction
   */_updateDOMProperties:function _updateDOMProperties(lastProps,transaction){var nextProps=this._currentElement.props;var propKey;var styleName;var styleUpdates;for(propKey in lastProps) {if(nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey)){continue;}if(propKey === STYLE){var lastStyle=this._previousStyleCopy;for(styleName in lastStyle) {if(lastStyle.hasOwnProperty(styleName)){styleUpdates = styleUpdates || {};styleUpdates[styleName] = '';}}this._previousStyleCopy = null;}else if(registrationNameModules.hasOwnProperty(propKey)){deleteListener(this._rootNodeID,propKey);}else if(DOMProperty.isStandardName[propKey] || DOMProperty.isCustomAttribute(propKey)){BackendIDOperations.deletePropertyByID(this._rootNodeID,propKey);}}for(propKey in nextProps) {var nextProp=nextProps[propKey];var lastProp=propKey === STYLE?this._previousStyleCopy:lastProps[propKey];if(!nextProps.hasOwnProperty(propKey) || nextProp === lastProp){continue;}if(propKey === STYLE){if(nextProp){nextProp = this._previousStyleCopy = assign({},nextProp);}else {this._previousStyleCopy = null;}if(lastProp){ // Unset styles on `lastProp` but not on `nextProp`.
for(styleName in lastProp) {if(lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))){styleUpdates = styleUpdates || {};styleUpdates[styleName] = '';}} // Update styles that changed since `lastProp`.
for(styleName in nextProp) {if(nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]){styleUpdates = styleUpdates || {};styleUpdates[styleName] = nextProp[styleName];}}}else { // Relies on `updateStylesByID` not mutating `styleUpdates`.
styleUpdates = nextProp;}}else if(registrationNameModules.hasOwnProperty(propKey)){putListener(this._rootNodeID,propKey,nextProp,transaction);}else if(DOMProperty.isStandardName[propKey] || DOMProperty.isCustomAttribute(propKey)){BackendIDOperations.updatePropertyByID(this._rootNodeID,propKey,nextProp);}}if(styleUpdates){BackendIDOperations.updateStylesByID(this._rootNodeID,styleUpdates);}}, /**
   * Reconciles the children with the various properties that affect the
   * children content.
   *
   * @param {object} lastProps
   * @param {ReactReconcileTransaction} transaction
   */_updateDOMChildren:function _updateDOMChildren(lastProps,transaction,context){var nextProps=this._currentElement.props;var lastContent=CONTENT_TYPES[typeof lastProps.children]?lastProps.children:null;var nextContent=CONTENT_TYPES[typeof nextProps.children]?nextProps.children:null;var lastHtml=lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;var nextHtml=nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html; // Note the use of `!=` which checks for null or undefined.
var lastChildren=lastContent != null?null:lastProps.children;var nextChildren=nextContent != null?null:nextProps.children; // If we're switching from children to content/html or vice versa, remove
// the old content
var lastHasContentOrHtml=lastContent != null || lastHtml != null;var nextHasContentOrHtml=nextContent != null || nextHtml != null;if(lastChildren != null && nextChildren == null){this.updateChildren(null,transaction,context);}else if(lastHasContentOrHtml && !nextHasContentOrHtml){this.updateTextContent('');}if(nextContent != null){if(lastContent !== nextContent){this.updateTextContent('' + nextContent);}}else if(nextHtml != null){if(lastHtml !== nextHtml){BackendIDOperations.updateInnerHTMLByID(this._rootNodeID,nextHtml);}}else if(nextChildren != null){this.updateChildren(nextChildren,transaction,context);}}, /**
   * Destroys all event registrations for this instance. Does not remove from
   * the DOM. That must be done by the parent.
   *
   * @internal
   */unmountComponent:function unmountComponent(){this.unmountChildren();ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);this._rootNodeID = null;}};ReactPerf.measureMethods(ReactDOMComponent,'ReactDOMComponent',{mountComponent:'mountComponent',updateComponent:'updateComponent'});assign(ReactDOMComponent.prototype,ReactDOMComponent.Mixin,ReactMultiChild.Mixin);ReactDOMComponent.injection = {injectIDOperations:function injectIDOperations(IDOperations){ReactDOMComponent.BackendIDOperations = BackendIDOperations = IDOperations;}};module.exports = ReactDOMComponent;},{"10":10,"11":11,"116":116,"135":135,"136":136,"141":141,"154":154,"27":27,"30":30,"35":35,"5":5,"70":70,"71":71,"75":75}],43:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMForm
 */'use strict';var EventConstants=_dereq_(15);var LocalEventTrapMixin=_dereq_(25);var ReactBrowserComponentMixin=_dereq_(29);var ReactClass=_dereq_(33);var ReactElement=_dereq_(57);var form=ReactElement.createFactory('form'); /**
 * Since onSubmit doesn't bubble OR capture on the top level in IE8, we need
 * to capture it on the <form> element itself. There are lots of hacks we could
 * do to accomplish this, but the most reliable is to make <form> a
 * composite component and use `componentDidMount` to attach the event handlers.
 */var ReactDOMForm=ReactClass.createClass({displayName:'ReactDOMForm',tagName:'FORM',mixins:[ReactBrowserComponentMixin,LocalEventTrapMixin],render:function render(){ // TODO: Instead of using `ReactDOM` directly, we should use JSX. However,
// `jshint` fails to parse JSX so in order for linting to work in the open
// source repo, we need to just use `ReactDOM.form`.
return form(this.props);},componentDidMount:function componentDidMount(){this.trapBubbledEvent(EventConstants.topLevelTypes.topReset,'reset');this.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit,'submit');}});module.exports = ReactDOMForm;},{"15":15,"25":25,"29":29,"33":33,"57":57}],44:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMIDOperations
 * @typechecks static-only
 */ /*jslint evil: true */'use strict';var CSSPropertyOperations=_dereq_(5);var DOMChildrenOperations=_dereq_(9);var DOMPropertyOperations=_dereq_(11);var ReactMount=_dereq_(70);var ReactPerf=_dereq_(75);var invariant=_dereq_(135);var setInnerHTML=_dereq_(148); /**
 * Errors for properties that should not be updated with `updatePropertyById()`.
 *
 * @type {object}
 * @private
 */var INVALID_PROPERTY_ERRORS={dangerouslySetInnerHTML:'`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.',style:'`style` must be set using `updateStylesByID()`.'}; /**
 * Operations used to process updates to DOM nodes. This is made injectable via
 * `ReactDOMComponent.BackendIDOperations`.
 */var ReactDOMIDOperations={ /**
   * Updates a DOM node with new property values. This should only be used to
   * update DOM properties in `DOMProperty`.
   *
   * @param {string} id ID of the node to update.
   * @param {string} name A valid property name, see `DOMProperty`.
   * @param {*} value New value of the property.
   * @internal
   */updatePropertyByID:function updatePropertyByID(id,name,value){var node=ReactMount.getNode(id);"production" !== "development"?invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name),'updatePropertyByID(...): %s',INVALID_PROPERTY_ERRORS[name]):invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name)); // If we're updating to null or undefined, we should remove the property
// from the DOM node instead of inadvertantly setting to a string. This
// brings us in line with the same behavior we have on initial render.
if(value != null){DOMPropertyOperations.setValueForProperty(node,name,value);}else {DOMPropertyOperations.deleteValueForProperty(node,name);}}, /**
   * Updates a DOM node to remove a property. This should only be used to remove
   * DOM properties in `DOMProperty`.
   *
   * @param {string} id ID of the node to update.
   * @param {string} name A property name to remove, see `DOMProperty`.
   * @internal
   */deletePropertyByID:function deletePropertyByID(id,name,value){var node=ReactMount.getNode(id);"production" !== "development"?invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name),'updatePropertyByID(...): %s',INVALID_PROPERTY_ERRORS[name]):invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name));DOMPropertyOperations.deleteValueForProperty(node,name,value);}, /**
   * Updates a DOM node with new style values. If a value is specified as '',
   * the corresponding style property will be unset.
   *
   * @param {string} id ID of the node to update.
   * @param {object} styles Mapping from styles to values.
   * @internal
   */updateStylesByID:function updateStylesByID(id,styles){var node=ReactMount.getNode(id);CSSPropertyOperations.setValueForStyles(node,styles);}, /**
   * Updates a DOM node's innerHTML.
   *
   * @param {string} id ID of the node to update.
   * @param {string} html An HTML string.
   * @internal
   */updateInnerHTMLByID:function updateInnerHTMLByID(id,html){var node=ReactMount.getNode(id);setInnerHTML(node,html);}, /**
   * Updates a DOM node's text content set by `props.content`.
   *
   * @param {string} id ID of the node to update.
   * @param {string} content Text content.
   * @internal
   */updateTextContentByID:function updateTextContentByID(id,content){var node=ReactMount.getNode(id);DOMChildrenOperations.updateTextContent(node,content);}, /**
   * Replaces a DOM node that exists in the document with markup.
   *
   * @param {string} id ID of child to be replaced.
   * @param {string} markup Dangerous markup to inject in place of child.
   * @internal
   * @see {Danger.dangerouslyReplaceNodeWithMarkup}
   */dangerouslyReplaceNodeWithMarkupByID:function dangerouslyReplaceNodeWithMarkupByID(id,markup){var node=ReactMount.getNode(id);DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(node,markup);}, /**
   * Updates a component's children by processing a series of updates.
   *
   * @param {array<object>} updates List of update configurations.
   * @param {array<string>} markup List of markup strings.
   * @internal
   */dangerouslyProcessChildrenUpdates:function dangerouslyProcessChildrenUpdates(updates,markup){for(var i=0;i < updates.length;i++) {updates[i].parentNode = ReactMount.getNode(updates[i].parentID);}DOMChildrenOperations.processUpdates(updates,markup);}};ReactPerf.measureMethods(ReactDOMIDOperations,'ReactDOMIDOperations',{updatePropertyByID:'updatePropertyByID',deletePropertyByID:'deletePropertyByID',updateStylesByID:'updateStylesByID',updateInnerHTMLByID:'updateInnerHTMLByID',updateTextContentByID:'updateTextContentByID',dangerouslyReplaceNodeWithMarkupByID:'dangerouslyReplaceNodeWithMarkupByID',dangerouslyProcessChildrenUpdates:'dangerouslyProcessChildrenUpdates'});module.exports = ReactDOMIDOperations;},{"11":11,"135":135,"148":148,"5":5,"70":70,"75":75,"9":9}],45:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMIframe
 */'use strict';var EventConstants=_dereq_(15);var LocalEventTrapMixin=_dereq_(25);var ReactBrowserComponentMixin=_dereq_(29);var ReactClass=_dereq_(33);var ReactElement=_dereq_(57);var iframe=ReactElement.createFactory('iframe'); /**
 * Since onLoad doesn't bubble OR capture on the top level in IE8, we need to
 * capture it on the <iframe> element itself. There are lots of hacks we could
 * do to accomplish this, but the most reliable is to make <iframe> a composite
 * component and use `componentDidMount` to attach the event handlers.
 */var ReactDOMIframe=ReactClass.createClass({displayName:'ReactDOMIframe',tagName:'IFRAME',mixins:[ReactBrowserComponentMixin,LocalEventTrapMixin],render:function render(){return iframe(this.props);},componentDidMount:function componentDidMount(){this.trapBubbledEvent(EventConstants.topLevelTypes.topLoad,'load');}});module.exports = ReactDOMIframe;},{"15":15,"25":25,"29":29,"33":33,"57":57}],46:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMImg
 */'use strict';var EventConstants=_dereq_(15);var LocalEventTrapMixin=_dereq_(25);var ReactBrowserComponentMixin=_dereq_(29);var ReactClass=_dereq_(33);var ReactElement=_dereq_(57);var img=ReactElement.createFactory('img'); /**
 * Since onLoad doesn't bubble OR capture on the top level in IE8, we need to
 * capture it on the <img> element itself. There are lots of hacks we could do
 * to accomplish this, but the most reliable is to make <img> a composite
 * component and use `componentDidMount` to attach the event handlers.
 */var ReactDOMImg=ReactClass.createClass({displayName:'ReactDOMImg',tagName:'IMG',mixins:[ReactBrowserComponentMixin,LocalEventTrapMixin],render:function render(){return img(this.props);},componentDidMount:function componentDidMount(){this.trapBubbledEvent(EventConstants.topLevelTypes.topLoad,'load');this.trapBubbledEvent(EventConstants.topLevelTypes.topError,'error');}});module.exports = ReactDOMImg;},{"15":15,"25":25,"29":29,"33":33,"57":57}],47:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMInput
 */'use strict';var AutoFocusMixin=_dereq_(2);var DOMPropertyOperations=_dereq_(11);var LinkedValueUtils=_dereq_(24);var ReactBrowserComponentMixin=_dereq_(29);var ReactClass=_dereq_(33);var ReactElement=_dereq_(57);var ReactMount=_dereq_(70);var ReactUpdates=_dereq_(87);var assign=_dereq_(27);var invariant=_dereq_(135);var input=ReactElement.createFactory('input');var instancesByReactID={};function forceUpdateIfMounted(){ /*jshint validthis:true */if(this.isMounted()){this.forceUpdate();}} /**
 * Implements an <input> native component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */var ReactDOMInput=ReactClass.createClass({displayName:'ReactDOMInput',tagName:'INPUT',mixins:[AutoFocusMixin,LinkedValueUtils.Mixin,ReactBrowserComponentMixin],getInitialState:function getInitialState(){var defaultValue=this.props.defaultValue;return {initialChecked:this.props.defaultChecked || false,initialValue:defaultValue != null?defaultValue:null};},render:function render(){ // Clone `this.props` so we don't mutate the input.
var props=assign({},this.props);props.defaultChecked = null;props.defaultValue = null;var value=LinkedValueUtils.getValue(this);props.value = value != null?value:this.state.initialValue;var checked=LinkedValueUtils.getChecked(this);props.checked = checked != null?checked:this.state.initialChecked;props.onChange = this._handleChange;return input(props,this.props.children);},componentDidMount:function componentDidMount(){var id=ReactMount.getID(this.getDOMNode());instancesByReactID[id] = this;},componentWillUnmount:function componentWillUnmount(){var rootNode=this.getDOMNode();var id=ReactMount.getID(rootNode);delete instancesByReactID[id];},componentDidUpdate:function componentDidUpdate(prevProps,prevState,prevContext){var rootNode=this.getDOMNode();if(this.props.checked != null){DOMPropertyOperations.setValueForProperty(rootNode,'checked',this.props.checked || false);}var value=LinkedValueUtils.getValue(this);if(value != null){ // Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
DOMPropertyOperations.setValueForProperty(rootNode,'value','' + value);}},_handleChange:function _handleChange(event){var returnValue;var onChange=LinkedValueUtils.getOnChange(this);if(onChange){returnValue = onChange.call(this,event);} // Here we use asap to wait until all updates have propagated, which
// is important when using controlled components within layers:
// https://github.com/facebook/react/issues/1698
ReactUpdates.asap(forceUpdateIfMounted,this);var name=this.props.name;if(this.props.type === 'radio' && name != null){var rootNode=this.getDOMNode();var queryRoot=rootNode;while(queryRoot.parentNode) {queryRoot = queryRoot.parentNode;} // If `rootNode.form` was non-null, then we could try `form.elements`,
// but that sometimes behaves strangely in IE8. We could also try using
// `form.getElementsByName`, but that will only return direct children
// and won't include inputs that use the HTML5 `form=` attribute. Since
// the input might not even be in a form, let's just use the global
// `querySelectorAll` to ensure we don't miss anything.
var group=queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');for(var i=0,groupLen=group.length;i < groupLen;i++) {var otherNode=group[i];if(otherNode === rootNode || otherNode.form !== rootNode.form){continue;}var otherID=ReactMount.getID(otherNode);"production" !== "development"?invariant(otherID,'ReactDOMInput: Mixing React and non-React radio inputs with the ' + 'same `name` is not supported.'):invariant(otherID);var otherInstance=instancesByReactID[otherID];"production" !== "development"?invariant(otherInstance,'ReactDOMInput: Unknown radio button ID %s.',otherID):invariant(otherInstance); // If this is a controlled radio button group, forcing the input that
// was previously checked to update will cause it to be come re-checked
// as appropriate.
ReactUpdates.asap(forceUpdateIfMounted,otherInstance);}}return returnValue;}});module.exports = ReactDOMInput;},{"11":11,"135":135,"2":2,"24":24,"27":27,"29":29,"33":33,"57":57,"70":70,"87":87}],48:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMOption
 */'use strict';var ReactBrowserComponentMixin=_dereq_(29);var ReactClass=_dereq_(33);var ReactElement=_dereq_(57);var warning=_dereq_(154);var option=ReactElement.createFactory('option'); /**
 * Implements an <option> native component that warns when `selected` is set.
 */var ReactDOMOption=ReactClass.createClass({displayName:'ReactDOMOption',tagName:'OPTION',mixins:[ReactBrowserComponentMixin],componentWillMount:function componentWillMount(){ // TODO (yungsters): Remove support for `selected` in <option>.
if("production" !== "development"){"production" !== "development"?warning(this.props.selected == null,'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.'):null;}},render:function render(){return option(this.props,this.props.children);}});module.exports = ReactDOMOption;},{"154":154,"29":29,"33":33,"57":57}],49:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelect
 */'use strict';var AutoFocusMixin=_dereq_(2);var LinkedValueUtils=_dereq_(24);var ReactBrowserComponentMixin=_dereq_(29);var ReactClass=_dereq_(33);var ReactElement=_dereq_(57);var ReactUpdates=_dereq_(87);var assign=_dereq_(27);var select=ReactElement.createFactory('select');function updateOptionsIfPendingUpdateAndMounted(){ /*jshint validthis:true */if(this._pendingUpdate){this._pendingUpdate = false;var value=LinkedValueUtils.getValue(this);if(value != null && this.isMounted()){updateOptions(this,value);}}} /**
 * Validation function for `value` and `defaultValue`.
 * @private
 */function selectValueType(props,propName,componentName){if(props[propName] == null){return null;}if(props.multiple){if(!Array.isArray(props[propName])){return new Error("The `" + propName + "` prop supplied to <select> must be an array if " + "`multiple` is true.");}}else {if(Array.isArray(props[propName])){return new Error("The `" + propName + "` prop supplied to <select> must be a scalar " + "value if `multiple` is false.");}}} /**
 * @param {ReactComponent} component Instance of ReactDOMSelect
 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
 * @private
 */function updateOptions(component,propValue){var selectedValue,i,l;var options=component.getDOMNode().options;if(component.props.multiple){selectedValue = {};for(i = 0,l = propValue.length;i < l;i++) {selectedValue['' + propValue[i]] = true;}for(i = 0,l = options.length;i < l;i++) {var selected=selectedValue.hasOwnProperty(options[i].value);if(options[i].selected !== selected){options[i].selected = selected;}}}else { // Do not set `select.value` as exact behavior isn't consistent across all
// browsers for all cases.
selectedValue = '' + propValue;for(i = 0,l = options.length;i < l;i++) {if(options[i].value === selectedValue){options[i].selected = true;return;}}if(options.length){options[0].selected = true;}}} /**
 * Implements a <select> native component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */var ReactDOMSelect=ReactClass.createClass({displayName:'ReactDOMSelect',tagName:'SELECT',mixins:[AutoFocusMixin,LinkedValueUtils.Mixin,ReactBrowserComponentMixin],propTypes:{defaultValue:selectValueType,value:selectValueType},render:function render(){ // Clone `this.props` so we don't mutate the input.
var props=assign({},this.props);props.onChange = this._handleChange;props.value = null;return select(props,this.props.children);},componentWillMount:function componentWillMount(){this._pendingUpdate = false;},componentDidMount:function componentDidMount(){var value=LinkedValueUtils.getValue(this);if(value != null){updateOptions(this,value);}else if(this.props.defaultValue != null){updateOptions(this,this.props.defaultValue);}},componentDidUpdate:function componentDidUpdate(prevProps){var value=LinkedValueUtils.getValue(this);if(value != null){this._pendingUpdate = false;updateOptions(this,value);}else if(!prevProps.multiple !== !this.props.multiple){ // For simplicity, reapply `defaultValue` if `multiple` is toggled.
if(this.props.defaultValue != null){updateOptions(this,this.props.defaultValue);}else { // Revert the select back to its default unselected state.
updateOptions(this,this.props.multiple?[]:'');}}},_handleChange:function _handleChange(event){var returnValue;var onChange=LinkedValueUtils.getOnChange(this);if(onChange){returnValue = onChange.call(this,event);}this._pendingUpdate = true;ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted,this);return returnValue;}});module.exports = ReactDOMSelect;},{"2":2,"24":24,"27":27,"29":29,"33":33,"57":57,"87":87}],50:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelection
 */'use strict';var ExecutionEnvironment=_dereq_(21);var getNodeForCharacterOffset=_dereq_(128);var getTextContentAccessor=_dereq_(130); /**
 * While `isCollapsed` is available on the Selection object and `collapsed`
 * is available on the Range object, IE11 sometimes gets them wrong.
 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
 */function isCollapsed(anchorNode,anchorOffset,focusNode,focusOffset){return anchorNode === focusNode && anchorOffset === focusOffset;} /**
 * Get the appropriate anchor and focus node/offset pairs for IE.
 *
 * The catch here is that IE's selection API doesn't provide information
 * about whether the selection is forward or backward, so we have to
 * behave as though it's always forward.
 *
 * IE text differs from modern selection in that it behaves as though
 * block elements end with a new line. This means character offsets will
 * differ between the two APIs.
 *
 * @param {DOMElement} node
 * @return {object}
 */function getIEOffsets(node){var selection=document.selection;var selectedRange=selection.createRange();var selectedLength=selectedRange.text.length; // Duplicate selection so we can move range without breaking user selection.
var fromStart=selectedRange.duplicate();fromStart.moveToElementText(node);fromStart.setEndPoint('EndToStart',selectedRange);var startOffset=fromStart.text.length;var endOffset=startOffset + selectedLength;return {start:startOffset,end:endOffset};} /**
 * @param {DOMElement} node
 * @return {?object}
 */function getModernOffsets(node){var selection=window.getSelection && window.getSelection();if(!selection || selection.rangeCount === 0){return null;}var anchorNode=selection.anchorNode;var anchorOffset=selection.anchorOffset;var focusNode=selection.focusNode;var focusOffset=selection.focusOffset;var currentRange=selection.getRangeAt(0); // If the node and offset values are the same, the selection is collapsed.
// `Selection.isCollapsed` is available natively, but IE sometimes gets
// this value wrong.
var isSelectionCollapsed=isCollapsed(selection.anchorNode,selection.anchorOffset,selection.focusNode,selection.focusOffset);var rangeLength=isSelectionCollapsed?0:currentRange.toString().length;var tempRange=currentRange.cloneRange();tempRange.selectNodeContents(node);tempRange.setEnd(currentRange.startContainer,currentRange.startOffset);var isTempRangeCollapsed=isCollapsed(tempRange.startContainer,tempRange.startOffset,tempRange.endContainer,tempRange.endOffset);var start=isTempRangeCollapsed?0:tempRange.toString().length;var end=start + rangeLength; // Detect whether the selection is backward.
var detectionRange=document.createRange();detectionRange.setStart(anchorNode,anchorOffset);detectionRange.setEnd(focusNode,focusOffset);var isBackward=detectionRange.collapsed;return {start:isBackward?end:start,end:isBackward?start:end};} /**
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */function setIEOffsets(node,offsets){var range=document.selection.createRange().duplicate();var start,end;if(typeof offsets.end === 'undefined'){start = offsets.start;end = start;}else if(offsets.start > offsets.end){start = offsets.end;end = offsets.start;}else {start = offsets.start;end = offsets.end;}range.moveToElementText(node);range.moveStart('character',start);range.setEndPoint('EndToStart',range);range.moveEnd('character',end - start);range.select();} /**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */function setModernOffsets(node,offsets){if(!window.getSelection){return;}var selection=window.getSelection();var length=node[getTextContentAccessor()].length;var start=Math.min(offsets.start,length);var end=typeof offsets.end === 'undefined'?start:Math.min(offsets.end,length); // IE 11 uses modern selection, but doesn't support the extend method.
// Flip backward selections, so we can set with a single range.
if(!selection.extend && start > end){var temp=end;end = start;start = temp;}var startMarker=getNodeForCharacterOffset(node,start);var endMarker=getNodeForCharacterOffset(node,end);if(startMarker && endMarker){var range=document.createRange();range.setStart(startMarker.node,startMarker.offset);selection.removeAllRanges();if(start > end){selection.addRange(range);selection.extend(endMarker.node,endMarker.offset);}else {range.setEnd(endMarker.node,endMarker.offset);selection.addRange(range);}}}var useIEOffsets=ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window);var ReactDOMSelection={ /**
   * @param {DOMElement} node
   */getOffsets:useIEOffsets?getIEOffsets:getModernOffsets, /**
   * @param {DOMElement|DOMTextNode} node
   * @param {object} offsets
   */setOffsets:useIEOffsets?setIEOffsets:setModernOffsets};module.exports = ReactDOMSelection;},{"128":128,"130":130,"21":21}],51:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextComponent
 * @typechecks static-only
 */'use strict';var DOMPropertyOperations=_dereq_(11);var ReactComponentBrowserEnvironment=_dereq_(35);var ReactDOMComponent=_dereq_(42);var assign=_dereq_(27);var escapeTextContentForBrowser=_dereq_(116); /**
 * Text nodes violate a couple assumptions that React makes about components:
 *
 *  - When mounting text into the DOM, adjacent text nodes are merged.
 *  - Text nodes cannot be assigned a React root ID.
 *
 * This component is used to wrap strings in elements so that they can undergo
 * the same reconciliation that is applied to elements.
 *
 * TODO: Investigate representing React components in the DOM with text nodes.
 *
 * @class ReactDOMTextComponent
 * @extends ReactComponent
 * @internal
 */var ReactDOMTextComponent=function ReactDOMTextComponent(props){ // This constructor and its argument is currently used by mocks.
};assign(ReactDOMTextComponent.prototype,{ /**
   * @param {ReactText} text
   * @internal
   */construct:function construct(text){ // TODO: This is really a ReactText (ReactNode), not a ReactElement
this._currentElement = text;this._stringText = '' + text; // Properties
this._rootNodeID = null;this._mountIndex = 0;}, /**
   * Creates the markup for this text node. This node is not intended to have
   * any features besides containing text content.
   *
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} Markup for this text node.
   * @internal
   */mountComponent:function mountComponent(rootID,transaction,context){this._rootNodeID = rootID;var escapedText=escapeTextContentForBrowser(this._stringText);if(transaction.renderToStaticMarkup){ // Normally we'd wrap this in a `span` for the reasons stated above, but
// since this is a situation where React won't take over (static pages),
// we can simply return the text as it is.
return escapedText;}return '<span ' + DOMPropertyOperations.createMarkupForID(rootID) + '>' + escapedText + '</span>';}, /**
   * Updates this component by updating the text content.
   *
   * @param {ReactText} nextText The next text content
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */receiveComponent:function receiveComponent(nextText,transaction){if(nextText !== this._currentElement){this._currentElement = nextText;var nextStringText='' + nextText;if(nextStringText !== this._stringText){ // TODO: Save this as pending props and use performUpdateIfNecessary
// and/or updateComponent to do the actual update for consistency with
// other component types?
this._stringText = nextStringText;ReactDOMComponent.BackendIDOperations.updateTextContentByID(this._rootNodeID,nextStringText);}}},unmountComponent:function unmountComponent(){ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);}});module.exports = ReactDOMTextComponent;},{"11":11,"116":116,"27":27,"35":35,"42":42}],52:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextarea
 */'use strict';var AutoFocusMixin=_dereq_(2);var DOMPropertyOperations=_dereq_(11);var LinkedValueUtils=_dereq_(24);var ReactBrowserComponentMixin=_dereq_(29);var ReactClass=_dereq_(33);var ReactElement=_dereq_(57);var ReactUpdates=_dereq_(87);var assign=_dereq_(27);var invariant=_dereq_(135);var warning=_dereq_(154);var textarea=ReactElement.createFactory('textarea');function forceUpdateIfMounted(){ /*jshint validthis:true */if(this.isMounted()){this.forceUpdate();}} /**
 * Implements a <textarea> native component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */var ReactDOMTextarea=ReactClass.createClass({displayName:'ReactDOMTextarea',tagName:'TEXTAREA',mixins:[AutoFocusMixin,LinkedValueUtils.Mixin,ReactBrowserComponentMixin],getInitialState:function getInitialState(){var defaultValue=this.props.defaultValue; // TODO (yungsters): Remove support for children content in <textarea>.
var children=this.props.children;if(children != null){if("production" !== "development"){"production" !== "development"?warning(false,'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.'):null;}"production" !== "development"?invariant(defaultValue == null,'If you supply `defaultValue` on a <textarea>, do not pass children.'):invariant(defaultValue == null);if(Array.isArray(children)){"production" !== "development"?invariant(children.length <= 1,'<textarea> can only have at most one child.'):invariant(children.length <= 1);children = children[0];}defaultValue = '' + children;}if(defaultValue == null){defaultValue = '';}var value=LinkedValueUtils.getValue(this);return { // We save the initial value so that `ReactDOMComponent` doesn't update
// `textContent` (unnecessary since we update value).
// The initial value can be a boolean or object so that's why it's
// forced to be a string.
initialValue:'' + (value != null?value:defaultValue)};},render:function render(){ // Clone `this.props` so we don't mutate the input.
var props=assign({},this.props);"production" !== "development"?invariant(props.dangerouslySetInnerHTML == null,'`dangerouslySetInnerHTML` does not make sense on <textarea>.'):invariant(props.dangerouslySetInnerHTML == null);props.defaultValue = null;props.value = null;props.onChange = this._handleChange; // Always set children to the same thing. In IE9, the selection range will
// get reset if `textContent` is mutated.
return textarea(props,this.state.initialValue);},componentDidUpdate:function componentDidUpdate(prevProps,prevState,prevContext){var value=LinkedValueUtils.getValue(this);if(value != null){var rootNode=this.getDOMNode(); // Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
DOMPropertyOperations.setValueForProperty(rootNode,'value','' + value);}},_handleChange:function _handleChange(event){var returnValue;var onChange=LinkedValueUtils.getOnChange(this);if(onChange){returnValue = onChange.call(this,event);}ReactUpdates.asap(forceUpdateIfMounted,this);return returnValue;}});module.exports = ReactDOMTextarea;},{"11":11,"135":135,"154":154,"2":2,"24":24,"27":27,"29":29,"33":33,"57":57,"87":87}],53:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultBatchingStrategy
 */'use strict';var ReactUpdates=_dereq_(87);var Transaction=_dereq_(103);var assign=_dereq_(27);var emptyFunction=_dereq_(114);var RESET_BATCHED_UPDATES={initialize:emptyFunction,close:function close(){ReactDefaultBatchingStrategy.isBatchingUpdates = false;}};var FLUSH_BATCHED_UPDATES={initialize:emptyFunction,close:ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)};var TRANSACTION_WRAPPERS=[FLUSH_BATCHED_UPDATES,RESET_BATCHED_UPDATES];function ReactDefaultBatchingStrategyTransaction(){this.reinitializeTransaction();}assign(ReactDefaultBatchingStrategyTransaction.prototype,Transaction.Mixin,{getTransactionWrappers:function getTransactionWrappers(){return TRANSACTION_WRAPPERS;}});var transaction=new ReactDefaultBatchingStrategyTransaction();var ReactDefaultBatchingStrategy={isBatchingUpdates:false, /**
   * Call the provided function in a context within which calls to `setState`
   * and friends are batched such that components aren't updated unnecessarily.
   */batchedUpdates:function batchedUpdates(callback,a,b,c,d){var alreadyBatchingUpdates=ReactDefaultBatchingStrategy.isBatchingUpdates;ReactDefaultBatchingStrategy.isBatchingUpdates = true; // The code is written this way to avoid extra allocations
if(alreadyBatchingUpdates){callback(a,b,c,d);}else {transaction.perform(callback,null,a,b,c,d);}}};module.exports = ReactDefaultBatchingStrategy;},{"103":103,"114":114,"27":27,"87":87}],54:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultInjection
 */'use strict';var BeforeInputEventPlugin=_dereq_(3);var ChangeEventPlugin=_dereq_(7);var ClientReactRootIndex=_dereq_(8);var DefaultEventPluginOrder=_dereq_(13);var EnterLeaveEventPlugin=_dereq_(14);var ExecutionEnvironment=_dereq_(21);var HTMLDOMPropertyConfig=_dereq_(23);var MobileSafariClickEventPlugin=_dereq_(26);var ReactBrowserComponentMixin=_dereq_(29);var ReactClass=_dereq_(33);var ReactComponentBrowserEnvironment=_dereq_(35);var ReactDefaultBatchingStrategy=_dereq_(53);var ReactDOMComponent=_dereq_(42);var ReactDOMButton=_dereq_(41);var ReactDOMForm=_dereq_(43);var ReactDOMImg=_dereq_(46);var ReactDOMIDOperations=_dereq_(44);var ReactDOMIframe=_dereq_(45);var ReactDOMInput=_dereq_(47);var ReactDOMOption=_dereq_(48);var ReactDOMSelect=_dereq_(49);var ReactDOMTextarea=_dereq_(52);var ReactDOMTextComponent=_dereq_(51);var ReactElement=_dereq_(57);var ReactEventListener=_dereq_(62);var ReactInjection=_dereq_(64);var ReactInstanceHandles=_dereq_(66);var ReactMount=_dereq_(70);var ReactReconcileTransaction=_dereq_(80);var SelectEventPlugin=_dereq_(89);var ServerReactRootIndex=_dereq_(90);var SimpleEventPlugin=_dereq_(91);var SVGDOMPropertyConfig=_dereq_(88);var createFullPageComponent=_dereq_(111);function autoGenerateWrapperClass(type){return ReactClass.createClass({tagName:type.toUpperCase(),render:function render(){return new ReactElement(type,null,null,null,null,this.props);}});}function inject(){ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener); /**
   * Inject modules for resolving DOM hierarchy and plugin ordering.
   */ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);ReactInjection.EventPluginHub.injectMount(ReactMount); /**
   * Some important event plugins included by default (without having to require
   * them).
   */ReactInjection.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:SimpleEventPlugin,EnterLeaveEventPlugin:EnterLeaveEventPlugin,ChangeEventPlugin:ChangeEventPlugin,MobileSafariClickEventPlugin:MobileSafariClickEventPlugin,SelectEventPlugin:SelectEventPlugin,BeforeInputEventPlugin:BeforeInputEventPlugin});ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent);ReactInjection.NativeComponent.injectTextComponentClass(ReactDOMTextComponent);ReactInjection.NativeComponent.injectAutoWrapper(autoGenerateWrapperClass); // This needs to happen before createFullPageComponent() otherwise the mixin
// won't be included.
ReactInjection.Class.injectMixin(ReactBrowserComponentMixin);ReactInjection.NativeComponent.injectComponentClasses({'button':ReactDOMButton,'form':ReactDOMForm,'iframe':ReactDOMIframe,'img':ReactDOMImg,'input':ReactDOMInput,'option':ReactDOMOption,'select':ReactDOMSelect,'textarea':ReactDOMTextarea,'html':createFullPageComponent('html'),'head':createFullPageComponent('head'),'body':createFullPageComponent('body')});ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);ReactInjection.EmptyComponent.injectEmptyComponent('noscript');ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);ReactInjection.RootIndex.injectCreateReactRootIndex(ExecutionEnvironment.canUseDOM?ClientReactRootIndex.createReactRootIndex:ServerReactRootIndex.createReactRootIndex);ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);ReactInjection.DOMComponent.injectIDOperations(ReactDOMIDOperations);if("production" !== "development"){var url=ExecutionEnvironment.canUseDOM && window.location.href || '';if(/[?&]react_perf\b/.test(url)){var ReactDefaultPerf=_dereq_(55);ReactDefaultPerf.start();}}}module.exports = {inject:inject};},{"111":111,"13":13,"14":14,"21":21,"23":23,"26":26,"29":29,"3":3,"33":33,"35":35,"41":41,"42":42,"43":43,"44":44,"45":45,"46":46,"47":47,"48":48,"49":49,"51":51,"52":52,"53":53,"55":55,"57":57,"62":62,"64":64,"66":66,"7":7,"70":70,"8":8,"80":80,"88":88,"89":89,"90":90,"91":91}],55:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultPerf
 * @typechecks static-only
 */'use strict';var DOMProperty=_dereq_(10);var ReactDefaultPerfAnalysis=_dereq_(56);var ReactMount=_dereq_(70);var ReactPerf=_dereq_(75);var performanceNow=_dereq_(146);function roundFloat(val){return Math.floor(val * 100) / 100;}function addValue(obj,key,val){obj[key] = (obj[key] || 0) + val;}var ReactDefaultPerf={_allMeasurements:[], // last item in the list is the current one
_mountStack:[0],_injected:false,start:function start(){if(!ReactDefaultPerf._injected){ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);}ReactDefaultPerf._allMeasurements.length = 0;ReactPerf.enableMeasure = true;},stop:function stop(){ReactPerf.enableMeasure = false;},getLastMeasurements:function getLastMeasurements(){return ReactDefaultPerf._allMeasurements;},printExclusive:function printExclusive(measurements){measurements = measurements || ReactDefaultPerf._allMeasurements;var summary=ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);console.table(summary.map(function(item){return {'Component class name':item.componentName,'Total inclusive time (ms)':roundFloat(item.inclusive),'Exclusive mount time (ms)':roundFloat(item.exclusive),'Exclusive render time (ms)':roundFloat(item.render),'Mount time per instance (ms)':roundFloat(item.exclusive / item.count),'Render time per instance (ms)':roundFloat(item.render / item.count),'Instances':item.count};})); // TODO: ReactDefaultPerfAnalysis.getTotalTime() does not return the correct
// number.
},printInclusive:function printInclusive(measurements){measurements = measurements || ReactDefaultPerf._allMeasurements;var summary=ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);console.table(summary.map(function(item){return {'Owner > component':item.componentName,'Inclusive time (ms)':roundFloat(item.time),'Instances':item.count};}));console.log('Total time:',ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');},getMeasurementsSummaryMap:function getMeasurementsSummaryMap(measurements){var summary=ReactDefaultPerfAnalysis.getInclusiveSummary(measurements,true);return summary.map(function(item){return {'Owner > component':item.componentName,'Wasted time (ms)':item.time,'Instances':item.count};});},printWasted:function printWasted(measurements){measurements = measurements || ReactDefaultPerf._allMeasurements;console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));console.log('Total time:',ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');},printDOM:function printDOM(measurements){measurements = measurements || ReactDefaultPerf._allMeasurements;var summary=ReactDefaultPerfAnalysis.getDOMSummary(measurements);console.table(summary.map(function(item){var result={};result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;result['type'] = item.type;result['args'] = JSON.stringify(item.args);return result;}));console.log('Total time:',ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');},_recordWrite:function _recordWrite(id,fnName,totalTime,args){ // TODO: totalTime isn't that useful since it doesn't count paints/reflows
var writes=ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].writes;writes[id] = writes[id] || [];writes[id].push({type:fnName,time:totalTime,args:args});},measure:function measure(moduleName,fnName,func){return function(){for(var args=[],$__0=0,$__1=arguments.length;$__0 < $__1;$__0++) args.push(arguments[$__0]);var totalTime;var rv;var start;if(fnName === '_renderNewRootComponent' || fnName === 'flushBatchedUpdates'){ // A "measurement" is a set of metrics recorded for each flush. We want
// to group the metrics for a given flush together so we can look at the
// components that rendered and the DOM operations that actually
// happened to determine the amount of "wasted work" performed.
ReactDefaultPerf._allMeasurements.push({exclusive:{},inclusive:{},render:{},counts:{},writes:{},displayNames:{},totalTime:0});start = performanceNow();rv = func.apply(this,args);ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].totalTime = performanceNow() - start;return rv;}else if(fnName === '_mountImageIntoNode' || moduleName === 'ReactDOMIDOperations'){start = performanceNow();rv = func.apply(this,args);totalTime = performanceNow() - start;if(fnName === '_mountImageIntoNode'){var mountID=ReactMount.getID(args[1]);ReactDefaultPerf._recordWrite(mountID,fnName,totalTime,args[0]);}else if(fnName === 'dangerouslyProcessChildrenUpdates'){ // special format
args[0].forEach(function(update){var writeArgs={};if(update.fromIndex !== null){writeArgs.fromIndex = update.fromIndex;}if(update.toIndex !== null){writeArgs.toIndex = update.toIndex;}if(update.textContent !== null){writeArgs.textContent = update.textContent;}if(update.markupIndex !== null){writeArgs.markup = args[1][update.markupIndex];}ReactDefaultPerf._recordWrite(update.parentID,update.type,totalTime,writeArgs);});}else { // basic format
ReactDefaultPerf._recordWrite(args[0],fnName,totalTime,Array.prototype.slice.call(args,1));}return rv;}else if(moduleName === 'ReactCompositeComponent' && ( // TODO: receiveComponent()?
fnName === 'mountComponent' || fnName === 'updateComponent' || fnName === '_renderValidatedComponent')){if(typeof this._currentElement.type === 'string'){return func.apply(this,args);}var rootNodeID=fnName === 'mountComponent'?args[0]:this._rootNodeID;var isRender=fnName === '_renderValidatedComponent';var isMount=fnName === 'mountComponent';var mountStack=ReactDefaultPerf._mountStack;var entry=ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1];if(isRender){addValue(entry.counts,rootNodeID,1);}else if(isMount){mountStack.push(0);}start = performanceNow();rv = func.apply(this,args);totalTime = performanceNow() - start;if(isRender){addValue(entry.render,rootNodeID,totalTime);}else if(isMount){var subMountTime=mountStack.pop();mountStack[mountStack.length - 1] += totalTime;addValue(entry.exclusive,rootNodeID,totalTime - subMountTime);addValue(entry.inclusive,rootNodeID,totalTime);}else {addValue(entry.inclusive,rootNodeID,totalTime);}entry.displayNames[rootNodeID] = {current:this.getName(),owner:this._currentElement._owner?this._currentElement._owner.getName():'<root>'};return rv;}else {return func.apply(this,args);}};}};module.exports = ReactDefaultPerf;},{"10":10,"146":146,"56":56,"70":70,"75":75}],56:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultPerfAnalysis
 */var assign=_dereq_(27); // Don't try to save users less than 1.2ms (a number I made up)
var DONT_CARE_THRESHOLD=1.2;var DOM_OPERATION_TYPES={'_mountImageIntoNode':'set innerHTML',INSERT_MARKUP:'set innerHTML',MOVE_EXISTING:'move',REMOVE_NODE:'remove',TEXT_CONTENT:'set textContent','updatePropertyByID':'update attribute','deletePropertyByID':'delete attribute','updateStylesByID':'update styles','updateInnerHTMLByID':'set innerHTML','dangerouslyReplaceNodeWithMarkupByID':'replace'};function getTotalTime(measurements){ // TODO: return number of DOM ops? could be misleading.
// TODO: measure dropped frames after reconcile?
// TODO: log total time of each reconcile and the top-level component
// class that triggered it.
var totalTime=0;for(var i=0;i < measurements.length;i++) {var measurement=measurements[i];totalTime += measurement.totalTime;}return totalTime;}function getDOMSummary(measurements){var items=[];for(var i=0;i < measurements.length;i++) {var measurement=measurements[i];var id;for(id in measurement.writes) {measurement.writes[id].forEach(function(write){items.push({id:id,type:DOM_OPERATION_TYPES[write.type] || write.type,args:write.args});});}}return items;}function getExclusiveSummary(measurements){var candidates={};var displayName;for(var i=0;i < measurements.length;i++) {var measurement=measurements[i];var allIDs=assign({},measurement.exclusive,measurement.inclusive);for(var id in allIDs) {displayName = measurement.displayNames[id].current;candidates[displayName] = candidates[displayName] || {componentName:displayName,inclusive:0,exclusive:0,render:0,count:0};if(measurement.render[id]){candidates[displayName].render += measurement.render[id];}if(measurement.exclusive[id]){candidates[displayName].exclusive += measurement.exclusive[id];}if(measurement.inclusive[id]){candidates[displayName].inclusive += measurement.inclusive[id];}if(measurement.counts[id]){candidates[displayName].count += measurement.counts[id];}}} // Now make a sorted array with the results.
var arr=[];for(displayName in candidates) {if(candidates[displayName].exclusive >= DONT_CARE_THRESHOLD){arr.push(candidates[displayName]);}}arr.sort(function(a,b){return b.exclusive - a.exclusive;});return arr;}function getInclusiveSummary(measurements,onlyClean){var candidates={};var inclusiveKey;for(var i=0;i < measurements.length;i++) {var measurement=measurements[i];var allIDs=assign({},measurement.exclusive,measurement.inclusive);var cleanComponents;if(onlyClean){cleanComponents = getUnchangedComponents(measurement);}for(var id in allIDs) {if(onlyClean && !cleanComponents[id]){continue;}var displayName=measurement.displayNames[id]; // Inclusive time is not useful for many components without knowing where
// they are instantiated. So we aggregate inclusive time with both the
// owner and current displayName as the key.
inclusiveKey = displayName.owner + ' > ' + displayName.current;candidates[inclusiveKey] = candidates[inclusiveKey] || {componentName:inclusiveKey,time:0,count:0};if(measurement.inclusive[id]){candidates[inclusiveKey].time += measurement.inclusive[id];}if(measurement.counts[id]){candidates[inclusiveKey].count += measurement.counts[id];}}} // Now make a sorted array with the results.
var arr=[];for(inclusiveKey in candidates) {if(candidates[inclusiveKey].time >= DONT_CARE_THRESHOLD){arr.push(candidates[inclusiveKey]);}}arr.sort(function(a,b){return b.time - a.time;});return arr;}function getUnchangedComponents(measurement){ // For a given reconcile, look at which components did not actually
// render anything to the DOM and return a mapping of their ID to
// the amount of time it took to render the entire subtree.
var cleanComponents={};var dirtyLeafIDs=Object.keys(measurement.writes);var allIDs=assign({},measurement.exclusive,measurement.inclusive);for(var id in allIDs) {var isDirty=false; // For each component that rendered, see if a component that triggered
// a DOM op is in its subtree.
for(var i=0;i < dirtyLeafIDs.length;i++) {if(dirtyLeafIDs[i].indexOf(id) === 0){isDirty = true;break;}}if(!isDirty && measurement.counts[id] > 0){cleanComponents[id] = true;}}return cleanComponents;}var ReactDefaultPerfAnalysis={getExclusiveSummary:getExclusiveSummary,getInclusiveSummary:getInclusiveSummary,getDOMSummary:getDOMSummary,getTotalTime:getTotalTime};module.exports = ReactDefaultPerfAnalysis;},{"27":27}],57:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElement
 */'use strict';var ReactContext=_dereq_(38);var ReactCurrentOwner=_dereq_(39);var assign=_dereq_(27);var warning=_dereq_(154);var RESERVED_PROPS={key:true,ref:true}; /**
 * Warn for mutations.
 *
 * @internal
 * @param {object} object
 * @param {string} key
 */function defineWarningProperty(object,key){Object.defineProperty(object,key,{configurable:false,enumerable:true,get:function get(){if(!this._store){return null;}return this._store[key];},set:function set(value){"production" !== "development"?warning(false,'Don\'t set the %s property of the React element. Instead, ' + 'specify the correct value when initially creating the element.',key):null;this._store[key] = value;}});} /**
 * This is updated to true if the membrane is successfully created.
 */var useMutationMembrane=false; /**
 * Warn for mutations.
 *
 * @internal
 * @param {object} element
 */function defineMutationMembrane(prototype){try{var pseudoFrozenProperties={props:true};for(var key in pseudoFrozenProperties) {defineWarningProperty(prototype,key);}useMutationMembrane = true;}catch(x) { // IE will fail on defineProperty
}} /**
 * Base constructor for all React elements. This is only used to make this
 * work with a dynamic instanceof check. Nothing should live on this prototype.
 *
 * @param {*} type
 * @param {string|object} ref
 * @param {*} key
 * @param {*} props
 * @internal
 */var ReactElement=function ReactElement(type,key,ref,owner,context,props){ // Built-in properties that belong on the element
this.type = type;this.key = key;this.ref = ref; // Record the component responsible for creating this element.
this._owner = owner; // TODO: Deprecate withContext, and then the context becomes accessible
// through the owner.
this._context = context;if("production" !== "development"){ // The validation flag and props are currently mutative. We put them on
// an external backing store so that we can freeze the whole object.
// This can be replaced with a WeakMap once they are implemented in
// commonly used development environments.
this._store = {props:props,originalProps:assign({},props)}; // To make comparing ReactElements easier for testing purposes, we make
// the validation flag non-enumerable (where possible, which should
// include every environment we run tests in), so the test framework
// ignores it.
try{Object.defineProperty(this._store,'validated',{configurable:false,enumerable:false,writable:true});}catch(x) {}this._store.validated = false; // We're not allowed to set props directly on the object so we early
// return and rely on the prototype membrane to forward to the backing
// store.
if(useMutationMembrane){Object.freeze(this);return;}}this.props = props;}; // We intentionally don't expose the function on the constructor property.
// ReactElement should be indistinguishable from a plain object.
ReactElement.prototype = {_isReactElement:true};if("production" !== "development"){defineMutationMembrane(ReactElement.prototype);}ReactElement.createElement = function(type,config,children){var propName; // Reserved names are extracted
var props={};var key=null;var ref=null;if(config != null){ref = config.ref === undefined?null:config.ref;key = config.key === undefined?null:'' + config.key; // Remaining properties are added to a new props object
for(propName in config) {if(config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)){props[propName] = config[propName];}}} // Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var childrenLength=arguments.length - 2;if(childrenLength === 1){props.children = children;}else if(childrenLength > 1){var childArray=Array(childrenLength);for(var i=0;i < childrenLength;i++) {childArray[i] = arguments[i + 2];}props.children = childArray;} // Resolve default props
if(type && type.defaultProps){var defaultProps=type.defaultProps;for(propName in defaultProps) {if(typeof props[propName] === 'undefined'){props[propName] = defaultProps[propName];}}}return new ReactElement(type,key,ref,ReactCurrentOwner.current,ReactContext.current,props);};ReactElement.createFactory = function(type){var factory=ReactElement.createElement.bind(null,type); // Expose the type on the factory and the prototype so that it can be
// easily accessed on elements. E.g. <Foo />.type === Foo.type.
// This should not be named `constructor` since this may not be the function
// that created the element, and it may not even be a constructor.
// Legacy hook TODO: Warn if this is accessed
factory.type = type;return factory;};ReactElement.cloneAndReplaceProps = function(oldElement,newProps){var newElement=new ReactElement(oldElement.type,oldElement.key,oldElement.ref,oldElement._owner,oldElement._context,newProps);if("production" !== "development"){ // If the key on the original is valid, then the clone is valid
newElement._store.validated = oldElement._store.validated;}return newElement;};ReactElement.cloneElement = function(element,config,children){var propName; // Original props are copied
var props=assign({},element.props); // Reserved names are extracted
var key=element.key;var ref=element.ref; // Owner will be preserved, unless ref is overridden
var owner=element._owner;if(config != null){if(config.ref !== undefined){ // Silently steal the ref from the parent.
ref = config.ref;owner = ReactCurrentOwner.current;}if(config.key !== undefined){key = '' + config.key;} // Remaining properties override existing props
for(propName in config) {if(config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)){props[propName] = config[propName];}}} // Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var childrenLength=arguments.length - 2;if(childrenLength === 1){props.children = children;}else if(childrenLength > 1){var childArray=Array(childrenLength);for(var i=0;i < childrenLength;i++) {childArray[i] = arguments[i + 2];}props.children = childArray;}return new ReactElement(element.type,key,ref,owner,element._context,props);}; /**
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */ReactElement.isValidElement = function(object){ // ReactTestUtils is often used outside of beforeEach where as React is
// within it. This leads to two different instances of React on the same
// page. To identify a element from a different React instance we use
// a flag instead of an instanceof check.
var isElement=!!(object && object._isReactElement); // if (isElement && !(object instanceof ReactElement)) {
// This is an indicator that you're using multiple versions of React at the
// same time. This will screw with ownership and stuff. Fix it, please.
// TODO: We could possibly warn here.
// }
return isElement;};module.exports = ReactElement;},{"154":154,"27":27,"38":38,"39":39}],58:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElementValidator
 */ /**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */'use strict';var ReactElement=_dereq_(57);var ReactFragment=_dereq_(63);var ReactPropTypeLocations=_dereq_(77);var ReactPropTypeLocationNames=_dereq_(76);var ReactCurrentOwner=_dereq_(39);var ReactNativeComponent=_dereq_(73);var getIteratorFn=_dereq_(126);var invariant=_dereq_(135);var warning=_dereq_(154);function getDeclarationErrorAddendum(){if(ReactCurrentOwner.current){var name=ReactCurrentOwner.current.getName();if(name){return ' Check the render method of `' + name + '`.';}}return '';} /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */var ownerHasKeyUseWarning={};var loggedTypeFailures={};var NUMERIC_PROPERTY_REGEX=/^\d+$/; /**
 * Gets the instance's name for use in warnings.
 *
 * @internal
 * @return {?string} Display name or undefined
 */function getName(instance){var publicInstance=instance && instance.getPublicInstance();if(!publicInstance){return undefined;}var constructor=publicInstance.constructor;if(!constructor){return undefined;}return constructor.displayName || constructor.name || undefined;} /**
 * Gets the current owner's displayName for use in warnings.
 *
 * @internal
 * @return {?string} Display name or undefined
 */function getCurrentOwnerDisplayName(){var current=ReactCurrentOwner.current;return current && getName(current) || undefined;} /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */function validateExplicitKey(element,parentType){if(element._store.validated || element.key != null){return;}element._store.validated = true;warnAndMonitorForKeyUse('Each child in an array or iterator should have a unique "key" prop.',element,parentType);} /**
 * Warn if the key is being defined as an object property but has an incorrect
 * value.
 *
 * @internal
 * @param {string} name Property name of the key.
 * @param {ReactElement} element Component that requires a key.
 * @param {*} parentType element's parent's type.
 */function validatePropertyKey(name,element,parentType){if(!NUMERIC_PROPERTY_REGEX.test(name)){return;}warnAndMonitorForKeyUse('Child objects should have non-numeric keys so ordering is preserved.',element,parentType);} /**
 * Shared warning and monitoring code for the key warnings.
 *
 * @internal
 * @param {string} message The base warning that gets output.
 * @param {ReactElement} element Component that requires a key.
 * @param {*} parentType element's parent's type.
 */function warnAndMonitorForKeyUse(message,element,parentType){var ownerName=getCurrentOwnerDisplayName();var parentName=typeof parentType === 'string'?parentType:parentType.displayName || parentType.name;var useName=ownerName || parentName;var memoizer=ownerHasKeyUseWarning[message] || (ownerHasKeyUseWarning[message] = {});if(memoizer.hasOwnProperty(useName)){return;}memoizer[useName] = true;var parentOrOwnerAddendum=ownerName?" Check the render method of " + ownerName + ".":parentName?" Check the React.render call using <" + parentName + ">.":''; // Usually the current owner is the offender, but if it accepts children as a
// property, it may be the creator of the child that's responsible for
// assigning it a key.
var childOwnerAddendum='';if(element && element._owner && element._owner !== ReactCurrentOwner.current){ // Name of the component that originally created this child.
var childOwnerName=getName(element._owner);childOwnerAddendum = " It was passed a child from " + childOwnerName + ".";}"production" !== "development"?warning(false,message + '%s%s See https://fb.me/react-warning-keys for more information.',parentOrOwnerAddendum,childOwnerAddendum):null;} /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */function validateChildKeys(node,parentType){if(Array.isArray(node)){for(var i=0;i < node.length;i++) {var child=node[i];if(ReactElement.isValidElement(child)){validateExplicitKey(child,parentType);}}}else if(ReactElement.isValidElement(node)){ // This element was passed in a valid location.
node._store.validated = true;}else if(node){var iteratorFn=getIteratorFn(node); // Entry iterators provide implicit keys.
if(iteratorFn){if(iteratorFn !== node.entries){var iterator=iteratorFn.call(node);var step;while(!(step = iterator.next()).done) {if(ReactElement.isValidElement(step.value)){validateExplicitKey(step.value,parentType);}}}}else if(typeof node === 'object'){var fragment=ReactFragment.extractIfFragment(node);for(var key in fragment) {if(fragment.hasOwnProperty(key)){validatePropertyKey(key,fragment[key],parentType);}}}}} /**
 * Assert that the props are valid
 *
 * @param {string} componentName Name of the component for error messages.
 * @param {object} propTypes Map of prop name to a ReactPropType
 * @param {object} props
 * @param {string} location e.g. "prop", "context", "child context"
 * @private
 */function checkPropTypes(componentName,propTypes,props,location){for(var propName in propTypes) {if(propTypes.hasOwnProperty(propName)){var error; // Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{ // This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
"production" !== "development"?invariant(typeof propTypes[propName] === 'function','%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.',componentName || 'React class',ReactPropTypeLocationNames[location],propName):invariant(typeof propTypes[propName] === 'function');error = propTypes[propName](props,propName,componentName,location);}catch(ex) {error = ex;}if(error instanceof Error && !(error.message in loggedTypeFailures)){ // Only monitor this failure once because there tends to be a lot of the
// same error.
loggedTypeFailures[error.message] = true;var addendum=getDeclarationErrorAddendum(this);"production" !== "development"?warning(false,'Failed propType: %s%s',error.message,addendum):null;}}}}var warnedPropsMutations={}; /**
 * Warn about mutating props when setting `propName` on `element`.
 *
 * @param {string} propName The string key within props that was set
 * @param {ReactElement} element
 */function warnForPropsMutation(propName,element){var type=element.type;var elementName=typeof type === 'string'?type:type.displayName;var ownerName=element._owner?element._owner.getPublicInstance().constructor.displayName:null;var warningKey=propName + '|' + elementName + '|' + ownerName;if(warnedPropsMutations.hasOwnProperty(warningKey)){return;}warnedPropsMutations[warningKey] = true;var elementInfo='';if(elementName){elementInfo = ' <' + elementName + ' />';}var ownerInfo='';if(ownerName){ownerInfo = ' The element was created by ' + ownerName + '.';}"production" !== "development"?warning(false,'Don\'t set .props.%s of the React component%s. Instead, specify the ' + 'correct value when initially creating the element or use ' + 'React.cloneElement to make a new element with updated props.%s',propName,elementInfo,ownerInfo):null;} // Inline Object.is polyfill
function is(a,b){if(a !== a){ // NaN
return b !== b;}if(a === 0 && b === 0){ // +-0
return 1 / a === 1 / b;}return a === b;} /**
 * Given an element, check if its props have been mutated since element
 * creation (or the last call to this function). In particular, check if any
 * new props have been added, which we can't directly catch by defining warning
 * properties on the props object.
 *
 * @param {ReactElement} element
 */function checkAndWarnForMutatedProps(element){if(!element._store){ // Element was created using `new ReactElement` directly or with
// `ReactElement.createElement`; skip mutation checking
return;}var originalProps=element._store.originalProps;var props=element.props;for(var propName in props) {if(props.hasOwnProperty(propName)){if(!originalProps.hasOwnProperty(propName) || !is(originalProps[propName],props[propName])){warnForPropsMutation(propName,element); // Copy over the new value so that the two props objects match again
originalProps[propName] = props[propName];}}}} /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */function validatePropTypes(element){if(element.type == null){ // This has already warned. Don't throw.
return;} // Extract the component class from the element. Converts string types
// to a composite class which may have propTypes.
// TODO: Validating a string's propTypes is not decoupled from the
// rendering target which is problematic.
var componentClass=ReactNativeComponent.getComponentClassForElement(element);var name=componentClass.displayName || componentClass.name;if(componentClass.propTypes){checkPropTypes(name,componentClass.propTypes,element.props,ReactPropTypeLocations.prop);}if(typeof componentClass.getDefaultProps === 'function'){"production" !== "development"?warning(componentClass.getDefaultProps.isReactClassApproved,'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.'):null;}}var ReactElementValidator={checkAndWarnForMutatedProps:checkAndWarnForMutatedProps,createElement:function createElement(type,props,children){ // We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
"production" !== "development"?warning(type != null,'React.createElement: type should not be null or undefined. It should ' + 'be a string (for DOM elements) or a ReactClass (for composite ' + 'components).'):null;var element=ReactElement.createElement.apply(this,arguments); // The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(element == null){return element;}for(var i=2;i < arguments.length;i++) {validateChildKeys(arguments[i],type);}validatePropTypes(element);return element;},createFactory:function createFactory(type){var validatedFactory=ReactElementValidator.createElement.bind(null,type); // Legacy hook TODO: Warn if this is accessed
validatedFactory.type = type;if("production" !== "development"){try{Object.defineProperty(validatedFactory,'type',{enumerable:false,get:function get(){"production" !== "development"?warning(false,'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.'):null;Object.defineProperty(this,'type',{value:type});return type;}});}catch(x) { // IE will fail on defineProperty (es5-shim/sham too)
}}return validatedFactory;},cloneElement:function cloneElement(element,props,children){var newElement=ReactElement.cloneElement.apply(this,arguments);for(var i=2;i < arguments.length;i++) {validateChildKeys(arguments[i],newElement.type);}validatePropTypes(newElement);return newElement;}};module.exports = ReactElementValidator;},{"126":126,"135":135,"154":154,"39":39,"57":57,"63":63,"73":73,"76":76,"77":77}],59:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEmptyComponent
 */'use strict';var ReactElement=_dereq_(57);var ReactInstanceMap=_dereq_(67);var invariant=_dereq_(135);var component; // This registry keeps track of the React IDs of the components that rendered to
// `null` (in reality a placeholder such as `noscript`)
var nullComponentIDsRegistry={};var ReactEmptyComponentInjection={injectEmptyComponent:function injectEmptyComponent(emptyComponent){component = ReactElement.createFactory(emptyComponent);}};var ReactEmptyComponentType=function ReactEmptyComponentType(){};ReactEmptyComponentType.prototype.componentDidMount = function(){var internalInstance=ReactInstanceMap.get(this); // TODO: Make sure we run these methods in the correct order, we shouldn't
// need this check. We're going to assume if we're here it means we ran
// componentWillUnmount already so there is no internal instance (it gets
// removed as part of the unmounting process).
if(!internalInstance){return;}registerNullComponentID(internalInstance._rootNodeID);};ReactEmptyComponentType.prototype.componentWillUnmount = function(){var internalInstance=ReactInstanceMap.get(this); // TODO: Get rid of this check. See TODO in componentDidMount.
if(!internalInstance){return;}deregisterNullComponentID(internalInstance._rootNodeID);};ReactEmptyComponentType.prototype.render = function(){"production" !== "development"?invariant(component,'Trying to return null from a render, but no null placeholder component ' + 'was injected.'):invariant(component);return component();};var emptyElement=ReactElement.createElement(ReactEmptyComponentType); /**
 * Mark the component as having rendered to null.
 * @param {string} id Component's `_rootNodeID`.
 */function registerNullComponentID(id){nullComponentIDsRegistry[id] = true;} /**
 * Unmark the component as having rendered to null: it renders to something now.
 * @param {string} id Component's `_rootNodeID`.
 */function deregisterNullComponentID(id){delete nullComponentIDsRegistry[id];} /**
 * @param {string} id Component's `_rootNodeID`.
 * @return {boolean} True if the component is rendered to null.
 */function isNullComponentID(id){return !!nullComponentIDsRegistry[id];}var ReactEmptyComponent={emptyElement:emptyElement,injection:ReactEmptyComponentInjection,isNullComponentID:isNullComponentID};module.exports = ReactEmptyComponent;},{"135":135,"57":57,"67":67}],60:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactErrorUtils
 * @typechecks
 */"use strict";var ReactErrorUtils={ /**
   * Creates a guarded version of a function. This is supposed to make debugging
   * of event handlers easier. To aid debugging with the browser's debugger,
   * this currently simply returns the original function.
   *
   * @param {function} func Function to be executed
   * @param {string} name The name of the guard
   * @return {function}
   */guard:function guard(func,name){return func;}};module.exports = ReactErrorUtils;},{}],61:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventEmitterMixin
 */'use strict';var EventPluginHub=_dereq_(17);function runEventQueueInBatch(events){EventPluginHub.enqueueEvents(events);EventPluginHub.processEventQueue();}var ReactEventEmitterMixin={ /**
   * Streams a fired top-level event to `EventPluginHub` where plugins have the
   * opportunity to create `ReactEvent`s to be dispatched.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {object} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native environment event.
   */handleTopLevel:function handleTopLevel(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent){var events=EventPluginHub.extractEvents(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent);runEventQueueInBatch(events);}};module.exports = ReactEventEmitterMixin;},{"17":17}],62:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventListener
 * @typechecks static-only
 */'use strict';var EventListener=_dereq_(16);var ExecutionEnvironment=_dereq_(21);var PooledClass=_dereq_(28);var ReactInstanceHandles=_dereq_(66);var ReactMount=_dereq_(70);var ReactUpdates=_dereq_(87);var assign=_dereq_(27);var getEventTarget=_dereq_(125);var getUnboundedScrollPosition=_dereq_(131); /**
 * Finds the parent React component of `node`.
 *
 * @param {*} node
 * @return {?DOMEventTarget} Parent container, or `null` if the specified node
 *                           is not nested.
 */function findParent(node){ // TODO: It may be a good idea to cache this to prevent unnecessary DOM
// traversal, but caching is difficult to do correctly without using a
// mutation observer to listen for all DOM changes.
var nodeID=ReactMount.getID(node);var rootID=ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);var container=ReactMount.findReactContainerForID(rootID);var parent=ReactMount.getFirstReactDOM(container);return parent;} // Used to store ancestor hierarchy in top level callback
function TopLevelCallbackBookKeeping(topLevelType,nativeEvent){this.topLevelType = topLevelType;this.nativeEvent = nativeEvent;this.ancestors = [];}assign(TopLevelCallbackBookKeeping.prototype,{destructor:function destructor(){this.topLevelType = null;this.nativeEvent = null;this.ancestors.length = 0;}});PooledClass.addPoolingTo(TopLevelCallbackBookKeeping,PooledClass.twoArgumentPooler);function handleTopLevelImpl(bookKeeping){var topLevelTarget=ReactMount.getFirstReactDOM(getEventTarget(bookKeeping.nativeEvent)) || window; // Loop through the hierarchy, in case there's any nested components.
// It's important that we build the array of ancestors before calling any
// event handlers, because event handlers can modify the DOM, leading to
// inconsistencies with ReactMount's node cache. See #1105.
var ancestor=topLevelTarget;while(ancestor) {bookKeeping.ancestors.push(ancestor);ancestor = findParent(ancestor);}for(var i=0,l=bookKeeping.ancestors.length;i < l;i++) {topLevelTarget = bookKeeping.ancestors[i];var topLevelTargetID=ReactMount.getID(topLevelTarget) || '';ReactEventListener._handleTopLevel(bookKeeping.topLevelType,topLevelTarget,topLevelTargetID,bookKeeping.nativeEvent);}}function scrollValueMonitor(cb){var scrollPosition=getUnboundedScrollPosition(window);cb(scrollPosition);}var ReactEventListener={_enabled:true,_handleTopLevel:null,WINDOW_HANDLE:ExecutionEnvironment.canUseDOM?window:null,setHandleTopLevel:function setHandleTopLevel(handleTopLevel){ReactEventListener._handleTopLevel = handleTopLevel;},setEnabled:function setEnabled(enabled){ReactEventListener._enabled = !!enabled;},isEnabled:function isEnabled(){return ReactEventListener._enabled;}, /**
   * Traps top-level events by using event bubbling.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */trapBubbledEvent:function trapBubbledEvent(topLevelType,handlerBaseName,handle){var element=handle;if(!element){return null;}return EventListener.listen(element,handlerBaseName,ReactEventListener.dispatchEvent.bind(null,topLevelType));}, /**
   * Traps a top-level event by using event capturing.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */trapCapturedEvent:function trapCapturedEvent(topLevelType,handlerBaseName,handle){var element=handle;if(!element){return null;}return EventListener.capture(element,handlerBaseName,ReactEventListener.dispatchEvent.bind(null,topLevelType));},monitorScrollValue:function monitorScrollValue(refresh){var callback=scrollValueMonitor.bind(null,refresh);EventListener.listen(window,'scroll',callback);},dispatchEvent:function dispatchEvent(topLevelType,nativeEvent){if(!ReactEventListener._enabled){return;}var bookKeeping=TopLevelCallbackBookKeeping.getPooled(topLevelType,nativeEvent);try{ // Event queue being processed in the same cycle allows
// `preventDefault`.
ReactUpdates.batchedUpdates(handleTopLevelImpl,bookKeeping);}finally {TopLevelCallbackBookKeeping.release(bookKeeping);}}};module.exports = ReactEventListener;},{"125":125,"131":131,"16":16,"21":21,"27":27,"28":28,"66":66,"70":70,"87":87}],63:[function(_dereq_,module,exports){ /**
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
* @providesModule ReactFragment
*/'use strict';var ReactElement=_dereq_(57);var warning=_dereq_(154); /**
 * We used to allow keyed objects to serve as a collection of ReactElements,
 * or nested sets. This allowed us a way to explicitly key a set a fragment of
 * components. This is now being replaced with an opaque data structure.
 * The upgrade path is to call React.addons.createFragment({ key: value }) to
 * create a keyed fragment. The resulting data structure is opaque, for now.
 */if("production" !== "development"){var fragmentKey='_reactFragment';var didWarnKey='_reactDidWarn';var canWarnForReactFragment=false;try{ // Feature test. Don't even try to issue this warning if we can't use
// enumerable: false.
var dummy=function dummy(){return 1;};Object.defineProperty({},fragmentKey,{enumerable:false,value:true});Object.defineProperty({},'key',{enumerable:true,get:dummy});canWarnForReactFragment = true;}catch(x) {}var proxyPropertyAccessWithWarning=function proxyPropertyAccessWithWarning(obj,key){Object.defineProperty(obj,key,{enumerable:true,get:function get(){"production" !== "development"?warning(this[didWarnKey],'A ReactFragment is an opaque type. Accessing any of its ' + 'properties is deprecated. Pass it to one of the React.Children ' + 'helpers.'):null;this[didWarnKey] = true;return this[fragmentKey][key];},set:function set(value){"production" !== "development"?warning(this[didWarnKey],'A ReactFragment is an immutable opaque type. Mutating its ' + 'properties is deprecated.'):null;this[didWarnKey] = true;this[fragmentKey][key] = value;}});};var issuedWarnings={};var didWarnForFragment=function didWarnForFragment(fragment){ // We use the keys and the type of the value as a heuristic to dedupe the
// warning to avoid spamming too much.
var fragmentCacheKey='';for(var key in fragment) {fragmentCacheKey += key + ':' + typeof fragment[key] + ',';}var alreadyWarnedOnce=!!issuedWarnings[fragmentCacheKey];issuedWarnings[fragmentCacheKey] = true;return alreadyWarnedOnce;};}var ReactFragment={ // Wrap a keyed object in an opaque proxy that warns you if you access any
// of its properties.
create:function create(object){if("production" !== "development"){if(typeof object !== 'object' || !object || Array.isArray(object)){"production" !== "development"?warning(false,'React.addons.createFragment only accepts a single object.',object):null;return object;}if(ReactElement.isValidElement(object)){"production" !== "development"?warning(false,'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.'):null;return object;}if(canWarnForReactFragment){var proxy={};Object.defineProperty(proxy,fragmentKey,{enumerable:false,value:object});Object.defineProperty(proxy,didWarnKey,{writable:true,enumerable:false,value:false});for(var key in object) {proxyPropertyAccessWithWarning(proxy,key);}Object.preventExtensions(proxy);return proxy;}}return object;}, // Extract the original keyed object from the fragment opaque type. Warn if
// a plain object is passed here.
extract:function extract(fragment){if("production" !== "development"){if(canWarnForReactFragment){if(!fragment[fragmentKey]){"production" !== "development"?warning(didWarnForFragment(fragment),'Any use of a keyed object should be wrapped in ' + 'React.addons.createFragment(object) before being passed as a ' + 'child.'):null;return fragment;}return fragment[fragmentKey];}}return fragment;}, // Check if this is a fragment and if so, extract the keyed object. If it
// is a fragment-like object, warn that it should be wrapped. Ignore if we
// can't determine what kind of object this is.
extractIfFragment:function extractIfFragment(fragment){if("production" !== "development"){if(canWarnForReactFragment){ // If it is the opaque type, return the keyed object.
if(fragment[fragmentKey]){return fragment[fragmentKey];} // Otherwise, check each property if it has an element, if it does
// it is probably meant as a fragment, so we can warn early. Defer,
// the warning to extract.
for(var key in fragment) {if(fragment.hasOwnProperty(key) && ReactElement.isValidElement(fragment[key])){ // This looks like a fragment object, we should provide an
// early warning.
return ReactFragment.extract(fragment);}}}}return fragment;}};module.exports = ReactFragment;},{"154":154,"57":57}],64:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInjection
 */'use strict';var DOMProperty=_dereq_(10);var EventPluginHub=_dereq_(17);var ReactComponentEnvironment=_dereq_(36);var ReactClass=_dereq_(33);var ReactEmptyComponent=_dereq_(59);var ReactBrowserEventEmitter=_dereq_(30);var ReactNativeComponent=_dereq_(73);var ReactDOMComponent=_dereq_(42);var ReactPerf=_dereq_(75);var ReactRootIndex=_dereq_(83);var ReactUpdates=_dereq_(87);var ReactInjection={Component:ReactComponentEnvironment.injection,Class:ReactClass.injection,DOMComponent:ReactDOMComponent.injection,DOMProperty:DOMProperty.injection,EmptyComponent:ReactEmptyComponent.injection,EventPluginHub:EventPluginHub.injection,EventEmitter:ReactBrowserEventEmitter.injection,NativeComponent:ReactNativeComponent.injection,Perf:ReactPerf.injection,RootIndex:ReactRootIndex.injection,Updates:ReactUpdates.injection};module.exports = ReactInjection;},{"10":10,"17":17,"30":30,"33":33,"36":36,"42":42,"59":59,"73":73,"75":75,"83":83,"87":87}],65:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInputSelection
 */'use strict';var ReactDOMSelection=_dereq_(50);var containsNode=_dereq_(109);var focusNode=_dereq_(119);var getActiveElement=_dereq_(121);function isInDocument(node){return containsNode(document.documentElement,node);} /**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */var ReactInputSelection={hasSelectionCapabilities:function hasSelectionCapabilities(elem){return elem && (elem.nodeName === 'INPUT' && elem.type === 'text' || elem.nodeName === 'TEXTAREA' || elem.contentEditable === 'true');},getSelectionInformation:function getSelectionInformation(){var focusedElem=getActiveElement();return {focusedElem:focusedElem,selectionRange:ReactInputSelection.hasSelectionCapabilities(focusedElem)?ReactInputSelection.getSelection(focusedElem):null};}, /**
   * @restoreSelection: If any selection information was potentially lost,
   * restore it. This is useful when performing operations that could remove dom
   * nodes and place them back in, resulting in focus being lost.
   */restoreSelection:function restoreSelection(priorSelectionInformation){var curFocusedElem=getActiveElement();var priorFocusedElem=priorSelectionInformation.focusedElem;var priorSelectionRange=priorSelectionInformation.selectionRange;if(curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)){if(ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)){ReactInputSelection.setSelection(priorFocusedElem,priorSelectionRange);}focusNode(priorFocusedElem);}}, /**
   * @getSelection: Gets the selection bounds of a focused textarea, input or
   * contentEditable node.
   * -@input: Look up selection bounds of this input
   * -@return {start: selectionStart, end: selectionEnd}
   */getSelection:function getSelection(input){var selection;if('selectionStart' in input){ // Modern browser with input or textarea.
selection = {start:input.selectionStart,end:input.selectionEnd};}else if(document.selection && input.nodeName === 'INPUT'){ // IE8 input.
var range=document.selection.createRange(); // There can only be one selection per document in IE, so it must
// be in our element.
if(range.parentElement() === input){selection = {start:-range.moveStart('character',-input.value.length),end:-range.moveEnd('character',-input.value.length)};}}else { // Content editable or old IE textarea.
selection = ReactDOMSelection.getOffsets(input);}return selection || {start:0,end:0};}, /**
   * @setSelection: Sets the selection bounds of a textarea or input and focuses
   * the input.
   * -@input     Set selection bounds of this input or textarea
   * -@offsets   Object of same form that is returned from get*
   */setSelection:function setSelection(input,offsets){var start=offsets.start;var end=offsets.end;if(typeof end === 'undefined'){end = start;}if('selectionStart' in input){input.selectionStart = start;input.selectionEnd = Math.min(end,input.value.length);}else if(document.selection && input.nodeName === 'INPUT'){var range=input.createTextRange();range.collapse(true);range.moveStart('character',start);range.moveEnd('character',end - start);range.select();}else {ReactDOMSelection.setOffsets(input,offsets);}}};module.exports = ReactInputSelection;},{"109":109,"119":119,"121":121,"50":50}],66:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceHandles
 * @typechecks static-only
 */'use strict';var ReactRootIndex=_dereq_(83);var invariant=_dereq_(135);var SEPARATOR='.';var SEPARATOR_LENGTH=SEPARATOR.length; /**
 * Maximum depth of traversals before we consider the possibility of a bad ID.
 */var MAX_TREE_DEPTH=100; /**
 * Creates a DOM ID prefix to use when mounting React components.
 *
 * @param {number} index A unique integer
 * @return {string} React root ID.
 * @internal
 */function getReactRootIDString(index){return SEPARATOR + index.toString(36);} /**
 * Checks if a character in the supplied ID is a separator or the end.
 *
 * @param {string} id A React DOM ID.
 * @param {number} index Index of the character to check.
 * @return {boolean} True if the character is a separator or end of the ID.
 * @private
 */function isBoundary(id,index){return id.charAt(index) === SEPARATOR || index === id.length;} /**
 * Checks if the supplied string is a valid React DOM ID.
 *
 * @param {string} id A React DOM ID, maybe.
 * @return {boolean} True if the string is a valid React DOM ID.
 * @private
 */function isValidID(id){return id === '' || id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR;} /**
 * Checks if the first ID is an ancestor of or equal to the second ID.
 *
 * @param {string} ancestorID
 * @param {string} descendantID
 * @return {boolean} True if `ancestorID` is an ancestor of `descendantID`.
 * @internal
 */function isAncestorIDOf(ancestorID,descendantID){return descendantID.indexOf(ancestorID) === 0 && isBoundary(descendantID,ancestorID.length);} /**
 * Gets the parent ID of the supplied React DOM ID, `id`.
 *
 * @param {string} id ID of a component.
 * @return {string} ID of the parent, or an empty string.
 * @private
 */function getParentID(id){return id?id.substr(0,id.lastIndexOf(SEPARATOR)):'';} /**
 * Gets the next DOM ID on the tree path from the supplied `ancestorID` to the
 * supplied `destinationID`. If they are equal, the ID is returned.
 *
 * @param {string} ancestorID ID of an ancestor node of `destinationID`.
 * @param {string} destinationID ID of the destination node.
 * @return {string} Next ID on the path from `ancestorID` to `destinationID`.
 * @private
 */function getNextDescendantID(ancestorID,destinationID){"production" !== "development"?invariant(isValidID(ancestorID) && isValidID(destinationID),'getNextDescendantID(%s, %s): Received an invalid React DOM ID.',ancestorID,destinationID):invariant(isValidID(ancestorID) && isValidID(destinationID));"production" !== "development"?invariant(isAncestorIDOf(ancestorID,destinationID),'getNextDescendantID(...): React has made an invalid assumption about ' + 'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.',ancestorID,destinationID):invariant(isAncestorIDOf(ancestorID,destinationID));if(ancestorID === destinationID){return ancestorID;} // Skip over the ancestor and the immediate separator. Traverse until we hit
// another separator or we reach the end of `destinationID`.
var start=ancestorID.length + SEPARATOR_LENGTH;var i;for(i = start;i < destinationID.length;i++) {if(isBoundary(destinationID,i)){break;}}return destinationID.substr(0,i);} /**
 * Gets the nearest common ancestor ID of two IDs.
 *
 * Using this ID scheme, the nearest common ancestor ID is the longest common
 * prefix of the two IDs that immediately preceded a "marker" in both strings.
 *
 * @param {string} oneID
 * @param {string} twoID
 * @return {string} Nearest common ancestor ID, or the empty string if none.
 * @private
 */function getFirstCommonAncestorID(oneID,twoID){var minLength=Math.min(oneID.length,twoID.length);if(minLength === 0){return '';}var lastCommonMarkerIndex=0; // Use `<=` to traverse until the "EOL" of the shorter string.
for(var i=0;i <= minLength;i++) {if(isBoundary(oneID,i) && isBoundary(twoID,i)){lastCommonMarkerIndex = i;}else if(oneID.charAt(i) !== twoID.charAt(i)){break;}}var longestCommonID=oneID.substr(0,lastCommonMarkerIndex);"production" !== "development"?invariant(isValidID(longestCommonID),'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s',oneID,twoID,longestCommonID):invariant(isValidID(longestCommonID));return longestCommonID;} /**
 * Traverses the parent path between two IDs (either up or down). The IDs must
 * not be the same, and there must exist a parent path between them. If the
 * callback returns `false`, traversal is stopped.
 *
 * @param {?string} start ID at which to start traversal.
 * @param {?string} stop ID at which to end traversal.
 * @param {function} cb Callback to invoke each ID with.
 * @param {?boolean} skipFirst Whether or not to skip the first node.
 * @param {?boolean} skipLast Whether or not to skip the last node.
 * @private
 */function traverseParentPath(start,stop,cb,arg,skipFirst,skipLast){start = start || '';stop = stop || '';"production" !== "development"?invariant(start !== stop,'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.',start):invariant(start !== stop);var traverseUp=isAncestorIDOf(stop,start);"production" !== "development"?invariant(traverseUp || isAncestorIDOf(start,stop),'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do ' + 'not have a parent path.',start,stop):invariant(traverseUp || isAncestorIDOf(start,stop)); // Traverse from `start` to `stop` one depth at a time.
var depth=0;var traverse=traverseUp?getParentID:getNextDescendantID;for(var id=start;; /* until break */id = traverse(id,stop)) {var ret;if((!skipFirst || id !== start) && (!skipLast || id !== stop)){ret = cb(id,traverseUp,arg);}if(ret === false || id === stop){ // Only break //after// visiting `stop`.
break;}"production" !== "development"?invariant(depth++ < MAX_TREE_DEPTH,'traverseParentPath(%s, %s, ...): Detected an infinite loop while ' + 'traversing the React DOM ID tree. This may be due to malformed IDs: %s',start,stop):invariant(depth++ < MAX_TREE_DEPTH);}} /**
 * Manages the IDs assigned to DOM representations of React components. This
 * uses a specific scheme in order to traverse the DOM efficiently (e.g. in
 * order to simulate events).
 *
 * @internal
 */var ReactInstanceHandles={ /**
   * Constructs a React root ID
   * @return {string} A React root ID.
   */createReactRootID:function createReactRootID(){return getReactRootIDString(ReactRootIndex.createReactRootIndex());}, /**
   * Constructs a React ID by joining a root ID with a name.
   *
   * @param {string} rootID Root ID of a parent component.
   * @param {string} name A component's name (as flattened children).
   * @return {string} A React ID.
   * @internal
   */createReactID:function createReactID(rootID,name){return rootID + name;}, /**
   * Gets the DOM ID of the React component that is the root of the tree that
   * contains the React component with the supplied DOM ID.
   *
   * @param {string} id DOM ID of a React component.
   * @return {?string} DOM ID of the React component that is the root.
   * @internal
   */getReactRootIDFromNodeID:function getReactRootIDFromNodeID(id){if(id && id.charAt(0) === SEPARATOR && id.length > 1){var index=id.indexOf(SEPARATOR,1);return index > -1?id.substr(0,index):id;}return null;}, /**
   * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
   * should would receive a `mouseEnter` or `mouseLeave` event.
   *
   * NOTE: Does not invoke the callback on the nearest common ancestor because
   * nothing "entered" or "left" that element.
   *
   * @param {string} leaveID ID being left.
   * @param {string} enterID ID being entered.
   * @param {function} cb Callback to invoke on each entered/left ID.
   * @param {*} upArg Argument to invoke the callback with on left IDs.
   * @param {*} downArg Argument to invoke the callback with on entered IDs.
   * @internal
   */traverseEnterLeave:function traverseEnterLeave(leaveID,enterID,cb,upArg,downArg){var ancestorID=getFirstCommonAncestorID(leaveID,enterID);if(ancestorID !== leaveID){traverseParentPath(leaveID,ancestorID,cb,upArg,false,true);}if(ancestorID !== enterID){traverseParentPath(ancestorID,enterID,cb,downArg,true,false);}}, /**
   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
   *
   * NOTE: This traversal happens on IDs without touching the DOM.
   *
   * @param {string} targetID ID of the target node.
   * @param {function} cb Callback to invoke.
   * @param {*} arg Argument to invoke the callback with.
   * @internal
   */traverseTwoPhase:function traverseTwoPhase(targetID,cb,arg){if(targetID){traverseParentPath('',targetID,cb,arg,true,false);traverseParentPath(targetID,'',cb,arg,false,true);}}, /**
   * Traverse a node ID, calling the supplied `cb` for each ancestor ID. For
   * example, passing `.0.$row-0.1` would result in `cb` getting called
   * with `.0`, `.0.$row-0`, and `.0.$row-0.1`.
   *
   * NOTE: This traversal happens on IDs without touching the DOM.
   *
   * @param {string} targetID ID of the target node.
   * @param {function} cb Callback to invoke.
   * @param {*} arg Argument to invoke the callback with.
   * @internal
   */traverseAncestors:function traverseAncestors(targetID,cb,arg){traverseParentPath('',targetID,cb,arg,true,false);}, /**
   * Exposed for unit testing.
   * @private
   */_getFirstCommonAncestorID:getFirstCommonAncestorID, /**
   * Exposed for unit testing.
   * @private
   */_getNextDescendantID:getNextDescendantID,isAncestorIDOf:isAncestorIDOf,SEPARATOR:SEPARATOR};module.exports = ReactInstanceHandles;},{"135":135,"83":83}],67:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceMap
 */'use strict'; /**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 */ // TODO: Replace this with ES6: var ReactInstanceMap = new Map();
var ReactInstanceMap={ /**
   * This API should be called `delete` but we'd have to make sure to always
   * transform these to strings for IE support. When this transform is fully
   * supported we can rename it.
   */remove:function remove(key){key._reactInternalInstance = undefined;},get:function get(key){return key._reactInternalInstance;},has:function has(key){return key._reactInternalInstance !== undefined;},set:function set(key,value){key._reactInternalInstance = value;}};module.exports = ReactInstanceMap;},{}],68:[function(_dereq_,module,exports){ /**
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactLifeCycle
 */'use strict'; /**
 * This module manages the bookkeeping when a component is in the process
 * of being mounted or being unmounted. This is used as a way to enforce
 * invariants (or warnings) when it is not recommended to call
 * setState/forceUpdate.
 *
 * currentlyMountingInstance: During the construction phase, it is not possible
 * to trigger an update since the instance is not fully mounted yet. However, we
 * currently allow this as a convenience for mutating the initial state.
 *
 * currentlyUnmountingInstance: During the unmounting phase, the instance is
 * still mounted and can therefore schedule an update. However, this is not
 * recommended and probably an error since it's about to be unmounted.
 * Therefore we still want to trigger in an error for that case.
 */var ReactLifeCycle={currentlyMountingInstance:null,currentlyUnmountingInstance:null};module.exports = ReactLifeCycle;},{}],69:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMarkupChecksum
 */'use strict';var adler32=_dereq_(106);var ReactMarkupChecksum={CHECKSUM_ATTR_NAME:'data-react-checksum', /**
   * @param {string} markup Markup string
   * @return {string} Markup string with checksum attribute attached
   */addChecksumToMarkup:function addChecksumToMarkup(markup){var checksum=adler32(markup);return markup.replace('>',' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '">');}, /**
   * @param {string} markup to use
   * @param {DOMElement} element root React element
   * @returns {boolean} whether or not the markup is the same
   */canReuseMarkup:function canReuseMarkup(markup,element){var existingChecksum=element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);existingChecksum = existingChecksum && parseInt(existingChecksum,10);var markupChecksum=adler32(markup);return markupChecksum === existingChecksum;}};module.exports = ReactMarkupChecksum;},{"106":106}],70:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMount
 */'use strict';var DOMProperty=_dereq_(10);var ReactBrowserEventEmitter=_dereq_(30);var ReactCurrentOwner=_dereq_(39);var ReactElement=_dereq_(57);var ReactElementValidator=_dereq_(58);var ReactEmptyComponent=_dereq_(59);var ReactInstanceHandles=_dereq_(66);var ReactInstanceMap=_dereq_(67);var ReactMarkupChecksum=_dereq_(69);var ReactPerf=_dereq_(75);var ReactReconciler=_dereq_(81);var ReactUpdateQueue=_dereq_(86);var ReactUpdates=_dereq_(87);var emptyObject=_dereq_(115);var containsNode=_dereq_(109);var getReactRootElementInContainer=_dereq_(129);var instantiateReactComponent=_dereq_(134);var invariant=_dereq_(135);var setInnerHTML=_dereq_(148);var shouldUpdateReactComponent=_dereq_(151);var warning=_dereq_(154);var SEPARATOR=ReactInstanceHandles.SEPARATOR;var ATTR_NAME=DOMProperty.ID_ATTRIBUTE_NAME;var nodeCache={};var ELEMENT_NODE_TYPE=1;var DOC_NODE_TYPE=9; /** Mapping from reactRootID to React component instance. */var instancesByReactRootID={}; /** Mapping from reactRootID to `container` nodes. */var containersByReactRootID={};if("production" !== "development"){ /** __DEV__-only mapping from reactRootID to root elements. */var rootElementsByReactRootID={};} // Used to store breadth-first search state in findComponentRoot.
var findComponentRootReusableArray=[]; /**
 * Finds the index of the first character
 * that's not common between the two given strings.
 *
 * @return {number} the index of the character where the strings diverge
 */function firstDifferenceIndex(string1,string2){var minLen=Math.min(string1.length,string2.length);for(var i=0;i < minLen;i++) {if(string1.charAt(i) !== string2.charAt(i)){return i;}}return string1.length === string2.length?-1:minLen;} /**
 * @param {DOMElement} container DOM element that may contain a React component.
 * @return {?string} A "reactRoot" ID, if a React component is rendered.
 */function getReactRootID(container){var rootElement=getReactRootElementInContainer(container);return rootElement && ReactMount.getID(rootElement);} /**
 * Accessing node[ATTR_NAME] or calling getAttribute(ATTR_NAME) on a form
 * element can return its control whose name or ID equals ATTR_NAME. All
 * DOM nodes support `getAttributeNode` but this can also get called on
 * other objects so just return '' if we're given something other than a
 * DOM node (such as window).
 *
 * @param {?DOMElement|DOMWindow|DOMDocument|DOMTextNode} node DOM node.
 * @return {string} ID of the supplied `domNode`.
 */function getID(node){var id=internalGetID(node);if(id){if(nodeCache.hasOwnProperty(id)){var cached=nodeCache[id];if(cached !== node){"production" !== "development"?invariant(!isValid(cached,id),'ReactMount: Two valid but unequal nodes with the same `%s`: %s',ATTR_NAME,id):invariant(!isValid(cached,id));nodeCache[id] = node;}}else {nodeCache[id] = node;}}return id;}function internalGetID(node){ // If node is something like a window, document, or text node, none of
// which support attributes or a .getAttribute method, gracefully return
// the empty string, as if the attribute were missing.
return node && node.getAttribute && node.getAttribute(ATTR_NAME) || '';} /**
 * Sets the React-specific ID of the given node.
 *
 * @param {DOMElement} node The DOM node whose ID will be set.
 * @param {string} id The value of the ID attribute.
 */function setID(node,id){var oldID=internalGetID(node);if(oldID !== id){delete nodeCache[oldID];}node.setAttribute(ATTR_NAME,id);nodeCache[id] = node;} /**
 * Finds the node with the supplied React-generated DOM ID.
 *
 * @param {string} id A React-generated DOM ID.
 * @return {DOMElement} DOM node with the suppled `id`.
 * @internal
 */function getNode(id){if(!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id],id)){nodeCache[id] = ReactMount.findReactNodeByID(id);}return nodeCache[id];} /**
 * Finds the node with the supplied public React instance.
 *
 * @param {*} instance A public React instance.
 * @return {?DOMElement} DOM node with the suppled `id`.
 * @internal
 */function getNodeFromInstance(instance){var id=ReactInstanceMap.get(instance)._rootNodeID;if(ReactEmptyComponent.isNullComponentID(id)){return null;}if(!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id],id)){nodeCache[id] = ReactMount.findReactNodeByID(id);}return nodeCache[id];} /**
 * A node is "valid" if it is contained by a currently mounted container.
 *
 * This means that the node does not have to be contained by a document in
 * order to be considered valid.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @param {string} id The expected ID of the node.
 * @return {boolean} Whether the node is contained by a mounted container.
 */function isValid(node,id){if(node){"production" !== "development"?invariant(internalGetID(node) === id,'ReactMount: Unexpected modification of `%s`',ATTR_NAME):invariant(internalGetID(node) === id);var container=ReactMount.findReactContainerForID(id);if(container && containsNode(container,node)){return true;}}return false;} /**
 * Causes the cache to forget about one React-specific ID.
 *
 * @param {string} id The ID to forget.
 */function purgeID(id){delete nodeCache[id];}var deepestNodeSoFar=null;function findDeepestCachedAncestorImpl(ancestorID){var ancestor=nodeCache[ancestorID];if(ancestor && isValid(ancestor,ancestorID)){deepestNodeSoFar = ancestor;}else { // This node isn't populated in the cache, so presumably none of its
// descendants are. Break out of the loop.
return false;}} /**
 * Return the deepest cached node whose ID is a prefix of `targetID`.
 */function findDeepestCachedAncestor(targetID){deepestNodeSoFar = null;ReactInstanceHandles.traverseAncestors(targetID,findDeepestCachedAncestorImpl);var foundNode=deepestNodeSoFar;deepestNodeSoFar = null;return foundNode;} /**
 * Mounts this component and inserts it into the DOM.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {string} rootID DOM ID of the root node.
 * @param {DOMElement} container DOM element to mount into.
 * @param {ReactReconcileTransaction} transaction
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */function mountComponentIntoNode(componentInstance,rootID,container,transaction,shouldReuseMarkup){var markup=ReactReconciler.mountComponent(componentInstance,rootID,transaction,emptyObject);componentInstance._isTopLevel = true;ReactMount._mountImageIntoNode(markup,container,shouldReuseMarkup);} /**
 * Batched mount.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {string} rootID DOM ID of the root node.
 * @param {DOMElement} container DOM element to mount into.
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */function batchedMountComponentIntoNode(componentInstance,rootID,container,shouldReuseMarkup){var transaction=ReactUpdates.ReactReconcileTransaction.getPooled();transaction.perform(mountComponentIntoNode,null,componentInstance,rootID,container,transaction,shouldReuseMarkup);ReactUpdates.ReactReconcileTransaction.release(transaction);} /**
 * Mounting is the process of initializing a React component by creating its
 * representative DOM elements and inserting them into a supplied `container`.
 * Any prior content inside `container` is destroyed in the process.
 *
 *   ReactMount.render(
 *     component,
 *     document.getElementById('container')
 *   );
 *
 *   <div id="container">                   <-- Supplied `container`.
 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
 *       // ...                                 component.
 *     </div>
 *   </div>
 *
 * Inside of `container`, the first element rendered is the "reactRoot".
 */var ReactMount={ /** Exposed for debugging purposes **/_instancesByReactRootID:instancesByReactRootID, /**
   * This is a hook provided to support rendering React components while
   * ensuring that the apparent scroll position of its `container` does not
   * change.
   *
   * @param {DOMElement} container The `container` being rendered into.
   * @param {function} renderCallback This must be called once to do the render.
   */scrollMonitor:function scrollMonitor(container,renderCallback){renderCallback();}, /**
   * Take a component that's already mounted into the DOM and replace its props
   * @param {ReactComponent} prevComponent component instance already in the DOM
   * @param {ReactElement} nextElement component instance to render
   * @param {DOMElement} container container to render into
   * @param {?function} callback function triggered on completion
   */_updateRootComponent:function _updateRootComponent(prevComponent,nextElement,container,callback){if("production" !== "development"){ReactElementValidator.checkAndWarnForMutatedProps(nextElement);}ReactMount.scrollMonitor(container,function(){ReactUpdateQueue.enqueueElementInternal(prevComponent,nextElement);if(callback){ReactUpdateQueue.enqueueCallbackInternal(prevComponent,callback);}});if("production" !== "development"){ // Record the root element in case it later gets transplanted.
rootElementsByReactRootID[getReactRootID(container)] = getReactRootElementInContainer(container);}return prevComponent;}, /**
   * Register a component into the instance map and starts scroll value
   * monitoring
   * @param {ReactComponent} nextComponent component instance to render
   * @param {DOMElement} container container to render into
   * @return {string} reactRoot ID prefix
   */_registerComponent:function _registerComponent(nextComponent,container){"production" !== "development"?invariant(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE),'_registerComponent(...): Target container is not a DOM element.'):invariant(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE));ReactBrowserEventEmitter.ensureScrollValueMonitoring();var reactRootID=ReactMount.registerContainer(container);instancesByReactRootID[reactRootID] = nextComponent;return reactRootID;}, /**
   * Render a new component into the DOM.
   * @param {ReactElement} nextElement element to render
   * @param {DOMElement} container container to render into
   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
   * @return {ReactComponent} nextComponent
   */_renderNewRootComponent:function _renderNewRootComponent(nextElement,container,shouldReuseMarkup){ // Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case.
"production" !== "development"?warning(ReactCurrentOwner.current == null,'_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate.'):null;var componentInstance=instantiateReactComponent(nextElement,null);var reactRootID=ReactMount._registerComponent(componentInstance,container); // The initial render is synchronous but any updates that happen during
// rendering, in componentWillMount or componentDidMount, will be batched
// according to the current batching strategy.
ReactUpdates.batchedUpdates(batchedMountComponentIntoNode,componentInstance,reactRootID,container,shouldReuseMarkup);if("production" !== "development"){ // Record the root element in case it later gets transplanted.
rootElementsByReactRootID[reactRootID] = getReactRootElementInContainer(container);}return componentInstance;}, /**
   * Renders a React component into the DOM in the supplied `container`.
   *
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   *
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */render:function render(nextElement,container,callback){"production" !== "development"?invariant(ReactElement.isValidElement(nextElement),'React.render(): Invalid component element.%s',typeof nextElement === 'string'?' Instead of passing an element string, make sure to instantiate ' + 'it by passing it to React.createElement.':typeof nextElement === 'function'?' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.': // Check if it quacks like an element
nextElement != null && nextElement.props !== undefined?' This may be caused by unintentionally loading two independent ' + 'copies of React.':''):invariant(ReactElement.isValidElement(nextElement));var prevComponent=instancesByReactRootID[getReactRootID(container)];if(prevComponent){var prevElement=prevComponent._currentElement;if(shouldUpdateReactComponent(prevElement,nextElement)){return ReactMount._updateRootComponent(prevComponent,nextElement,container,callback).getPublicInstance();}else {ReactMount.unmountComponentAtNode(container);}}var reactRootElement=getReactRootElementInContainer(container);var containerHasReactMarkup=reactRootElement && ReactMount.isRenderedByReact(reactRootElement);if("production" !== "development"){if(!containerHasReactMarkup || reactRootElement.nextSibling){var rootElementSibling=reactRootElement;while(rootElementSibling) {if(ReactMount.isRenderedByReact(rootElementSibling)){"production" !== "development"?warning(false,'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.'):null;break;}rootElementSibling = rootElementSibling.nextSibling;}}}var shouldReuseMarkup=containerHasReactMarkup && !prevComponent;var component=ReactMount._renderNewRootComponent(nextElement,container,shouldReuseMarkup).getPublicInstance();if(callback){callback.call(component);}return component;}, /**
   * Constructs a component instance of `constructor` with `initialProps` and
   * renders it into the supplied `container`.
   *
   * @param {function} constructor React component constructor.
   * @param {?object} props Initial props of the component instance.
   * @param {DOMElement} container DOM element to render into.
   * @return {ReactComponent} Component instance rendered in `container`.
   */constructAndRenderComponent:function constructAndRenderComponent(constructor,props,container){var element=ReactElement.createElement(constructor,props);return ReactMount.render(element,container);}, /**
   * Constructs a component instance of `constructor` with `initialProps` and
   * renders it into a container node identified by supplied `id`.
   *
   * @param {function} componentConstructor React component constructor
   * @param {?object} props Initial props of the component instance.
   * @param {string} id ID of the DOM element to render into.
   * @return {ReactComponent} Component instance rendered in the container node.
   */constructAndRenderComponentByID:function constructAndRenderComponentByID(constructor,props,id){var domNode=document.getElementById(id);"production" !== "development"?invariant(domNode,'Tried to get element with id of "%s" but it is not present on the page.',id):invariant(domNode);return ReactMount.constructAndRenderComponent(constructor,props,domNode);}, /**
   * Registers a container node into which React components will be rendered.
   * This also creates the "reactRoot" ID that will be assigned to the element
   * rendered within.
   *
   * @param {DOMElement} container DOM element to register as a container.
   * @return {string} The "reactRoot" ID of elements rendered within.
   */registerContainer:function registerContainer(container){var reactRootID=getReactRootID(container);if(reactRootID){ // If one exists, make sure it is a valid "reactRoot" ID.
reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);}if(!reactRootID){ // No valid "reactRoot" ID found, create one.
reactRootID = ReactInstanceHandles.createReactRootID();}containersByReactRootID[reactRootID] = container;return reactRootID;}, /**
   * Unmounts and destroys the React component rendered in the `container`.
   *
   * @param {DOMElement} container DOM element containing a React component.
   * @return {boolean} True if a component was found in and unmounted from
   *                   `container`
   */unmountComponentAtNode:function unmountComponentAtNode(container){ // Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case. (Strictly speaking, unmounting won't cause a
// render but we still don't expect to be in a render call here.)
"production" !== "development"?warning(ReactCurrentOwner.current == null,'unmountComponentAtNode(): Render methods should be a pure function of ' + 'props and state; triggering nested component updates from render is ' + 'not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate.'):null;"production" !== "development"?invariant(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE),'unmountComponentAtNode(...): Target container is not a DOM element.'):invariant(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE));var reactRootID=getReactRootID(container);var component=instancesByReactRootID[reactRootID];if(!component){return false;}ReactMount.unmountComponentFromNode(component,container);delete instancesByReactRootID[reactRootID];delete containersByReactRootID[reactRootID];if("production" !== "development"){delete rootElementsByReactRootID[reactRootID];}return true;}, /**
   * Unmounts a component and removes it from the DOM.
   *
   * @param {ReactComponent} instance React component instance.
   * @param {DOMElement} container DOM element to unmount from.
   * @final
   * @internal
   * @see {ReactMount.unmountComponentAtNode}
   */unmountComponentFromNode:function unmountComponentFromNode(instance,container){ReactReconciler.unmountComponent(instance);if(container.nodeType === DOC_NODE_TYPE){container = container.documentElement;} // http://jsperf.com/emptying-a-node
while(container.lastChild) {container.removeChild(container.lastChild);}}, /**
   * Finds the container DOM element that contains React component to which the
   * supplied DOM `id` belongs.
   *
   * @param {string} id The ID of an element rendered by a React component.
   * @return {?DOMElement} DOM element that contains the `id`.
   */findReactContainerForID:function findReactContainerForID(id){var reactRootID=ReactInstanceHandles.getReactRootIDFromNodeID(id);var container=containersByReactRootID[reactRootID];if("production" !== "development"){var rootElement=rootElementsByReactRootID[reactRootID];if(rootElement && rootElement.parentNode !== container){"production" !== "development"?invariant( // Call internalGetID here because getID calls isValid which calls
// findReactContainerForID (this function).
internalGetID(rootElement) === reactRootID,'ReactMount: Root element ID differed from reactRootID.'):invariant( // Call internalGetID here because getID calls isValid which calls
// findReactContainerForID (this function).
internalGetID(rootElement) === reactRootID);var containerChild=container.firstChild;if(containerChild && reactRootID === internalGetID(containerChild)){ // If the container has a new child with the same ID as the old
// root element, then rootElementsByReactRootID[reactRootID] is
// just stale and needs to be updated. The case that deserves a
// warning is when the container is empty.
rootElementsByReactRootID[reactRootID] = containerChild;}else {"production" !== "development"?warning(false,'ReactMount: Root element has been removed from its original ' + 'container. New container:',rootElement.parentNode):null;}}}return container;}, /**
   * Finds an element rendered by React with the supplied ID.
   *
   * @param {string} id ID of a DOM node in the React component.
   * @return {DOMElement} Root DOM node of the React component.
   */findReactNodeByID:function findReactNodeByID(id){var reactRoot=ReactMount.findReactContainerForID(id);return ReactMount.findComponentRoot(reactRoot,id);}, /**
   * True if the supplied `node` is rendered by React.
   *
   * @param {*} node DOM Element to check.
   * @return {boolean} True if the DOM Element appears to be rendered by React.
   * @internal
   */isRenderedByReact:function isRenderedByReact(node){if(node.nodeType !== 1){ // Not a DOMElement, therefore not a React component
return false;}var id=ReactMount.getID(node);return id?id.charAt(0) === SEPARATOR:false;}, /**
   * Traverses up the ancestors of the supplied node to find a node that is a
   * DOM representation of a React component.
   *
   * @param {*} node
   * @return {?DOMEventTarget}
   * @internal
   */getFirstReactDOM:function getFirstReactDOM(node){var current=node;while(current && current.parentNode !== current) {if(ReactMount.isRenderedByReact(current)){return current;}current = current.parentNode;}return null;}, /**
   * Finds a node with the supplied `targetID` inside of the supplied
   * `ancestorNode`.  Exploits the ID naming scheme to perform the search
   * quickly.
   *
   * @param {DOMEventTarget} ancestorNode Search from this root.
   * @pararm {string} targetID ID of the DOM representation of the component.
   * @return {DOMEventTarget} DOM node with the supplied `targetID`.
   * @internal
   */findComponentRoot:function findComponentRoot(ancestorNode,targetID){var firstChildren=findComponentRootReusableArray;var childIndex=0;var deepestAncestor=findDeepestCachedAncestor(targetID) || ancestorNode;firstChildren[0] = deepestAncestor.firstChild;firstChildren.length = 1;while(childIndex < firstChildren.length) {var child=firstChildren[childIndex++];var targetChild;while(child) {var childID=ReactMount.getID(child);if(childID){ // Even if we find the node we're looking for, we finish looping
// through its siblings to ensure they're cached so that we don't have
// to revisit this node again. Otherwise, we make n^2 calls to getID
// when visiting the many children of a single node in order.
if(targetID === childID){targetChild = child;}else if(ReactInstanceHandles.isAncestorIDOf(childID,targetID)){ // If we find a child whose ID is an ancestor of the given ID,
// then we can be sure that we only want to search the subtree
// rooted at this child, so we can throw out the rest of the
// search state.
firstChildren.length = childIndex = 0;firstChildren.push(child.firstChild);}}else { // If this child had no ID, then there's a chance that it was
// injected automatically by the browser, as when a `<table>`
// element sprouts an extra `<tbody>` child as a side effect of
// `.innerHTML` parsing. Optimistically continue down this
// branch, but not before examining the other siblings.
firstChildren.push(child.firstChild);}child = child.nextSibling;}if(targetChild){ // Emptying firstChildren/findComponentRootReusableArray is
// not necessary for correctness, but it helps the GC reclaim
// any nodes that were left at the end of the search.
firstChildren.length = 0;return targetChild;}}firstChildren.length = 0;"production" !== "development"?invariant(false,'findComponentRoot(..., %s): Unable to find element. This probably ' + 'means the DOM was unexpectedly mutated (e.g., by the browser), ' + 'usually due to forgetting a <tbody> when using tables, nesting tags ' + 'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> ' + 'parent. ' + 'Try inspecting the child nodes of the element with React ID `%s`.',targetID,ReactMount.getID(ancestorNode)):invariant(false);},_mountImageIntoNode:function _mountImageIntoNode(markup,container,shouldReuseMarkup){"production" !== "development"?invariant(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE),'mountComponentIntoNode(...): Target container is not valid.'):invariant(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE));if(shouldReuseMarkup){var rootElement=getReactRootElementInContainer(container);if(ReactMarkupChecksum.canReuseMarkup(markup,rootElement)){return;}else {var checksum=rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);var rootMarkup=rootElement.outerHTML;rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME,checksum);var diffIndex=firstDifferenceIndex(markup,rootMarkup);var difference=' (client) ' + markup.substring(diffIndex - 20,diffIndex + 20) + '\n (server) ' + rootMarkup.substring(diffIndex - 20,diffIndex + 20);"production" !== "development"?invariant(container.nodeType !== DOC_NODE_TYPE,'You\'re trying to render a component to the document using ' + 'server rendering but the checksum was invalid. This usually ' + 'means you rendered a different component type or props on ' + 'the client from the one on the server, or your render() ' + 'methods are impure. React cannot handle this case due to ' + 'cross-browser quirks by rendering at the document root. You ' + 'should look for environment dependent code in your components ' + 'and ensure the props are the same client and server side:\n%s',difference):invariant(container.nodeType !== DOC_NODE_TYPE);if("production" !== "development"){"production" !== "development"?warning(false,'React attempted to reuse markup in a container but the ' + 'checksum was invalid. This generally means that you are ' + 'using server rendering and the markup generated on the ' + 'server was not what the client was expecting. React injected ' + 'new markup to compensate which works but you have lost many ' + 'of the benefits of server rendering. Instead, figure out ' + 'why the markup being generated is different on the client ' + 'or server:\n%s',difference):null;}}}"production" !== "development"?invariant(container.nodeType !== DOC_NODE_TYPE,'You\'re trying to render a component to the document but ' + 'you didn\'t use server rendering. We can\'t do this ' + 'without using server rendering due to cross-browser quirks. ' + 'See React.renderToString() for server rendering.'):invariant(container.nodeType !== DOC_NODE_TYPE);setInnerHTML(container,markup);}, /**
   * React ID utilities.
   */getReactRootID:getReactRootID,getID:getID,setID:setID,getNode:getNode,getNodeFromInstance:getNodeFromInstance,purgeID:purgeID};ReactPerf.measureMethods(ReactMount,'ReactMount',{_renderNewRootComponent:'_renderNewRootComponent',_mountImageIntoNode:'_mountImageIntoNode'});module.exports = ReactMount;},{"10":10,"109":109,"115":115,"129":129,"134":134,"135":135,"148":148,"151":151,"154":154,"30":30,"39":39,"57":57,"58":58,"59":59,"66":66,"67":67,"69":69,"75":75,"81":81,"86":86,"87":87}],71:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChild
 * @typechecks static-only
 */'use strict';var ReactComponentEnvironment=_dereq_(36);var ReactMultiChildUpdateTypes=_dereq_(72);var ReactReconciler=_dereq_(81);var ReactChildReconciler=_dereq_(31); /**
 * Updating children of a component may trigger recursive updates. The depth is
 * used to batch recursive updates to render markup more efficiently.
 *
 * @type {number}
 * @private
 */var updateDepth=0; /**
 * Queue of update configuration objects.
 *
 * Each object has a `type` property that is in `ReactMultiChildUpdateTypes`.
 *
 * @type {array<object>}
 * @private
 */var updateQueue=[]; /**
 * Queue of markup to be rendered.
 *
 * @type {array<string>}
 * @private
 */var markupQueue=[]; /**
 * Enqueues markup to be rendered and inserted at a supplied index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {string} markup Markup that renders into an element.
 * @param {number} toIndex Destination index.
 * @private
 */function enqueueMarkup(parentID,markup,toIndex){ // NOTE: Null values reduce hidden classes.
updateQueue.push({parentID:parentID,parentNode:null,type:ReactMultiChildUpdateTypes.INSERT_MARKUP,markupIndex:markupQueue.push(markup) - 1,textContent:null,fromIndex:null,toIndex:toIndex});} /**
 * Enqueues moving an existing element to another index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {number} fromIndex Source index of the existing element.
 * @param {number} toIndex Destination index of the element.
 * @private
 */function enqueueMove(parentID,fromIndex,toIndex){ // NOTE: Null values reduce hidden classes.
updateQueue.push({parentID:parentID,parentNode:null,type:ReactMultiChildUpdateTypes.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:fromIndex,toIndex:toIndex});} /**
 * Enqueues removing an element at an index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {number} fromIndex Index of the element to remove.
 * @private
 */function enqueueRemove(parentID,fromIndex){ // NOTE: Null values reduce hidden classes.
updateQueue.push({parentID:parentID,parentNode:null,type:ReactMultiChildUpdateTypes.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:fromIndex,toIndex:null});} /**
 * Enqueues setting the text content.
 *
 * @param {string} parentID ID of the parent component.
 * @param {string} textContent Text content to set.
 * @private
 */function enqueueTextContent(parentID,textContent){ // NOTE: Null values reduce hidden classes.
updateQueue.push({parentID:parentID,parentNode:null,type:ReactMultiChildUpdateTypes.TEXT_CONTENT,markupIndex:null,textContent:textContent,fromIndex:null,toIndex:null});} /**
 * Processes any enqueued updates.
 *
 * @private
 */function processQueue(){if(updateQueue.length){ReactComponentEnvironment.processChildrenUpdates(updateQueue,markupQueue);clearQueue();}} /**
 * Clears any enqueued updates.
 *
 * @private
 */function clearQueue(){updateQueue.length = 0;markupQueue.length = 0;} /**
 * ReactMultiChild are capable of reconciling multiple children.
 *
 * @class ReactMultiChild
 * @internal
 */var ReactMultiChild={ /**
   * Provides common functionality for components that must reconcile multiple
   * children. This is used by `ReactDOMComponent` to mount, update, and
   * unmount child components.
   *
   * @lends {ReactMultiChild.prototype}
   */Mixin:{ /**
     * Generates a "mount image" for each of the supplied children. In the case
     * of `ReactDOMComponent`, a mount image is a string of markup.
     *
     * @param {?object} nestedChildren Nested child maps.
     * @return {array} An array of mounted representations.
     * @internal
     */mountChildren:function mountChildren(nestedChildren,transaction,context){var children=ReactChildReconciler.instantiateChildren(nestedChildren,transaction,context);this._renderedChildren = children;var mountImages=[];var index=0;for(var name in children) {if(children.hasOwnProperty(name)){var child=children[name]; // Inlined for performance, see `ReactInstanceHandles.createReactID`.
var rootID=this._rootNodeID + name;var mountImage=ReactReconciler.mountComponent(child,rootID,transaction,context);child._mountIndex = index;mountImages.push(mountImage);index++;}}return mountImages;}, /**
     * Replaces any rendered children with a text content string.
     *
     * @param {string} nextContent String of content.
     * @internal
     */updateTextContent:function updateTextContent(nextContent){updateDepth++;var errorThrown=true;try{var prevChildren=this._renderedChildren; // Remove any rendered children.
ReactChildReconciler.unmountChildren(prevChildren); // TODO: The setTextContent operation should be enough
for(var name in prevChildren) {if(prevChildren.hasOwnProperty(name)){this._unmountChildByName(prevChildren[name],name);}} // Set new text content.
this.setTextContent(nextContent);errorThrown = false;}finally {updateDepth--;if(!updateDepth){if(errorThrown){clearQueue();}else {processQueue();}}}}, /**
     * Updates the rendered children with new children.
     *
     * @param {?object} nextNestedChildren Nested child maps.
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */updateChildren:function updateChildren(nextNestedChildren,transaction,context){updateDepth++;var errorThrown=true;try{this._updateChildren(nextNestedChildren,transaction,context);errorThrown = false;}finally {updateDepth--;if(!updateDepth){if(errorThrown){clearQueue();}else {processQueue();}}}}, /**
     * Improve performance by isolating this hot code path from the try/catch
     * block in `updateChildren`.
     *
     * @param {?object} nextNestedChildren Nested child maps.
     * @param {ReactReconcileTransaction} transaction
     * @final
     * @protected
     */_updateChildren:function _updateChildren(nextNestedChildren,transaction,context){var prevChildren=this._renderedChildren;var nextChildren=ReactChildReconciler.updateChildren(prevChildren,nextNestedChildren,transaction,context);this._renderedChildren = nextChildren;if(!nextChildren && !prevChildren){return;}var name; // `nextIndex` will increment for each child in `nextChildren`, but
// `lastIndex` will be the last index visited in `prevChildren`.
var lastIndex=0;var nextIndex=0;for(name in nextChildren) {if(!nextChildren.hasOwnProperty(name)){continue;}var prevChild=prevChildren && prevChildren[name];var nextChild=nextChildren[name];if(prevChild === nextChild){this.moveChild(prevChild,nextIndex,lastIndex);lastIndex = Math.max(prevChild._mountIndex,lastIndex);prevChild._mountIndex = nextIndex;}else {if(prevChild){ // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
lastIndex = Math.max(prevChild._mountIndex,lastIndex);this._unmountChildByName(prevChild,name);} // The child must be instantiated before it's mounted.
this._mountChildByNameAtIndex(nextChild,name,nextIndex,transaction,context);}nextIndex++;} // Remove children that are no longer present.
for(name in prevChildren) {if(prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))){this._unmountChildByName(prevChildren[name],name);}}}, /**
     * Unmounts all rendered children. This should be used to clean up children
     * when this component is unmounted.
     *
     * @internal
     */unmountChildren:function unmountChildren(){var renderedChildren=this._renderedChildren;ReactChildReconciler.unmountChildren(renderedChildren);this._renderedChildren = null;}, /**
     * Moves a child component to the supplied index.
     *
     * @param {ReactComponent} child Component to move.
     * @param {number} toIndex Destination index of the element.
     * @param {number} lastIndex Last index visited of the siblings of `child`.
     * @protected
     */moveChild:function moveChild(child,toIndex,lastIndex){ // If the index of `child` is less than `lastIndex`, then it needs to
// be moved. Otherwise, we do not need to move it because a child will be
// inserted or moved before `child`.
if(child._mountIndex < lastIndex){enqueueMove(this._rootNodeID,child._mountIndex,toIndex);}}, /**
     * Creates a child component.
     *
     * @param {ReactComponent} child Component to create.
     * @param {string} mountImage Markup to insert.
     * @protected
     */createChild:function createChild(child,mountImage){enqueueMarkup(this._rootNodeID,mountImage,child._mountIndex);}, /**
     * Removes a child component.
     *
     * @param {ReactComponent} child Child to remove.
     * @protected
     */removeChild:function removeChild(child){enqueueRemove(this._rootNodeID,child._mountIndex);}, /**
     * Sets this text content string.
     *
     * @param {string} textContent Text content to set.
     * @protected
     */setTextContent:function setTextContent(textContent){enqueueTextContent(this._rootNodeID,textContent);}, /**
     * Mounts a child with the supplied name.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to mount.
     * @param {string} name Name of the child.
     * @param {number} index Index at which to insert the child.
     * @param {ReactReconcileTransaction} transaction
     * @private
     */_mountChildByNameAtIndex:function _mountChildByNameAtIndex(child,name,index,transaction,context){ // Inlined for performance, see `ReactInstanceHandles.createReactID`.
var rootID=this._rootNodeID + name;var mountImage=ReactReconciler.mountComponent(child,rootID,transaction,context);child._mountIndex = index;this.createChild(child,mountImage);}, /**
     * Unmounts a rendered child by name.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to unmount.
     * @param {string} name Name of the child in `this._renderedChildren`.
     * @private
     */_unmountChildByName:function _unmountChildByName(child,name){this.removeChild(child);child._mountIndex = null;}}};module.exports = ReactMultiChild;},{"31":31,"36":36,"72":72,"81":81}],72:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChildUpdateTypes
 */'use strict';var keyMirror=_dereq_(140); /**
 * When a component's children are updated, a series of update configuration
 * objects are created in order to batch and serialize the required changes.
 *
 * Enumerates all the possible types of update configurations.
 *
 * @internal
 */var ReactMultiChildUpdateTypes=keyMirror({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null});module.exports = ReactMultiChildUpdateTypes;},{"140":140}],73:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNativeComponent
 */'use strict';var assign=_dereq_(27);var invariant=_dereq_(135);var autoGenerateWrapperClass=null;var genericComponentClass=null; // This registry keeps track of wrapper classes around native tags
var tagToComponentClass={};var textComponentClass=null;var ReactNativeComponentInjection={ // This accepts a class that receives the tag string. This is a catch all
// that can render any kind of tag.
injectGenericComponentClass:function injectGenericComponentClass(componentClass){genericComponentClass = componentClass;}, // This accepts a text component class that takes the text string to be
// rendered as props.
injectTextComponentClass:function injectTextComponentClass(componentClass){textComponentClass = componentClass;}, // This accepts a keyed object with classes as values. Each key represents a
// tag. That particular tag will use this class instead of the generic one.
injectComponentClasses:function injectComponentClasses(componentClasses){assign(tagToComponentClass,componentClasses);}, // Temporary hack since we expect DOM refs to behave like composites,
// for this release.
injectAutoWrapper:function injectAutoWrapper(wrapperFactory){autoGenerateWrapperClass = wrapperFactory;}}; /**
 * Get a composite component wrapper class for a specific tag.
 *
 * @param {ReactElement} element The tag for which to get the class.
 * @return {function} The React class constructor function.
 */function getComponentClassForElement(element){if(typeof element.type === 'function'){return element.type;}var tag=element.type;var componentClass=tagToComponentClass[tag];if(componentClass == null){tagToComponentClass[tag] = componentClass = autoGenerateWrapperClass(tag);}return componentClass;} /**
 * Get a native internal component class for a specific tag.
 *
 * @param {ReactElement} element The element to create.
 * @return {function} The internal class constructor function.
 */function createInternalComponent(element){"production" !== "development"?invariant(genericComponentClass,'There is no registered component for the tag %s',element.type):invariant(genericComponentClass);return new genericComponentClass(element.type,element.props);} /**
 * @param {ReactText} text
 * @return {ReactComponent}
 */function createInstanceForText(text){return new textComponentClass(text);} /**
 * @param {ReactComponent} component
 * @return {boolean}
 */function isTextComponent(component){return component instanceof textComponentClass;}var ReactNativeComponent={getComponentClassForElement:getComponentClassForElement,createInternalComponent:createInternalComponent,createInstanceForText:createInstanceForText,isTextComponent:isTextComponent,injection:ReactNativeComponentInjection};module.exports = ReactNativeComponent;},{"135":135,"27":27}],74:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactOwner
 */'use strict';var invariant=_dereq_(135); /**
 * ReactOwners are capable of storing references to owned components.
 *
 * All components are capable of //being// referenced by owner components, but
 * only ReactOwner components are capable of //referencing// owned components.
 * The named reference is known as a "ref".
 *
 * Refs are available when mounted and updated during reconciliation.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return (
 *         <div onClick={this.handleClick}>
 *           <CustomComponent ref="custom" />
 *         </div>
 *       );
 *     },
 *     handleClick: function() {
 *       this.refs.custom.handleClick();
 *     },
 *     componentDidMount: function() {
 *       this.refs.custom.initialize();
 *     }
 *   });
 *
 * Refs should rarely be used. When refs are used, they should only be done to
 * control data that is not handled by React's data flow.
 *
 * @class ReactOwner
 */var ReactOwner={ /**
   * @param {?object} object
   * @return {boolean} True if `object` is a valid owner.
   * @final
   */isValidOwner:function isValidOwner(object){return !!(object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function');}, /**
   * Adds a component by ref to an owner component.
   *
   * @param {ReactComponent} component Component to reference.
   * @param {string} ref Name by which to refer to the component.
   * @param {ReactOwner} owner Component on which to record the ref.
   * @final
   * @internal
   */addComponentAsRefTo:function addComponentAsRefTo(component,ref,owner){"production" !== "development"?invariant(ReactOwner.isValidOwner(owner),'addComponentAsRefTo(...): Only a ReactOwner can have refs. This ' + 'usually means that you\'re trying to add a ref to a component that ' + 'doesn\'t have an owner (that is, was not created inside of another ' + 'component\'s `render` method). Try rendering this component inside of ' + 'a new top-level component which will hold the ref.'):invariant(ReactOwner.isValidOwner(owner));owner.attachRef(ref,component);}, /**
   * Removes a component by ref from an owner component.
   *
   * @param {ReactComponent} component Component to dereference.
   * @param {string} ref Name of the ref to remove.
   * @param {ReactOwner} owner Component on which the ref is recorded.
   * @final
   * @internal
   */removeComponentAsRefFrom:function removeComponentAsRefFrom(component,ref,owner){"production" !== "development"?invariant(ReactOwner.isValidOwner(owner),'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. This ' + 'usually means that you\'re trying to remove a ref to a component that ' + 'doesn\'t have an owner (that is, was not created inside of another ' + 'component\'s `render` method). Try rendering this component inside of ' + 'a new top-level component which will hold the ref.'):invariant(ReactOwner.isValidOwner(owner)); // Check that `component` is still the current ref because we do not want to
// detach the ref if another component stole it.
if(owner.getPublicInstance().refs[ref] === component.getPublicInstance()){owner.detachRef(ref);}}};module.exports = ReactOwner;},{"135":135}],75:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPerf
 * @typechecks static-only
 */'use strict'; /**
 * ReactPerf is a general AOP system designed to measure performance. This
 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
 */var ReactPerf={ /**
   * Boolean to enable/disable measurement. Set to false by default to prevent
   * accidental logging and perf loss.
   */enableMeasure:false, /**
   * Holds onto the measure function in use. By default, don't measure
   * anything, but we'll override this if we inject a measure function.
   */storedMeasure:_noMeasure, /**
   * @param {object} object
   * @param {string} objectName
   * @param {object<string>} methodNames
   */measureMethods:function measureMethods(object,objectName,methodNames){if("production" !== "development"){for(var key in methodNames) {if(!methodNames.hasOwnProperty(key)){continue;}object[key] = ReactPerf.measure(objectName,methodNames[key],object[key]);}}}, /**
   * Use this to wrap methods you want to measure. Zero overhead in production.
   *
   * @param {string} objName
   * @param {string} fnName
   * @param {function} func
   * @return {function}
   */measure:function measure(objName,fnName,func){if("production" !== "development"){var measuredFunc=null;var wrapper=function wrapper(){if(ReactPerf.enableMeasure){if(!measuredFunc){measuredFunc = ReactPerf.storedMeasure(objName,fnName,func);}return measuredFunc.apply(this,arguments);}return func.apply(this,arguments);};wrapper.displayName = objName + '_' + fnName;return wrapper;}return func;},injection:{ /**
     * @param {function} measure
     */injectMeasure:function injectMeasure(measure){ReactPerf.storedMeasure = measure;}}}; /**
 * Simply passes through the measured function, without measuring it.
 *
 * @param {string} objName
 * @param {string} fnName
 * @param {function} func
 * @return {function}
 */function _noMeasure(objName,fnName,func){return func;}module.exports = ReactPerf;},{}],76:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocationNames
 */'use strict';var ReactPropTypeLocationNames={};if("production" !== "development"){ReactPropTypeLocationNames = {prop:'prop',context:'context',childContext:'child context'};}module.exports = ReactPropTypeLocationNames;},{}],77:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocations
 */'use strict';var keyMirror=_dereq_(140);var ReactPropTypeLocations=keyMirror({prop:null,context:null,childContext:null});module.exports = ReactPropTypeLocations;},{"140":140}],78:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypes
 */'use strict';var ReactElement=_dereq_(57);var ReactFragment=_dereq_(63);var ReactPropTypeLocationNames=_dereq_(76);var emptyFunction=_dereq_(114); /**
 * Collection of methods that allow declaration and validation of props that are
 * supplied to React components. Example usage:
 *
 *   var Props = require('ReactPropTypes');
 *   var MyArticle = React.createClass({
 *     propTypes: {
 *       // An optional string prop named "description".
 *       description: Props.string,
 *
 *       // A required enum prop named "category".
 *       category: Props.oneOf(['News','Photos']).isRequired,
 *
 *       // A prop named "dialog" that requires an instance of Dialog.
 *       dialog: Props.instanceOf(Dialog).isRequired
 *     },
 *     render: function() { ... }
 *   });
 *
 * A more formal specification of how these methods are used:
 *
 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
 *   decl := ReactPropTypes.{type}(.isRequired)?
 *
 * Each and every declaration produces a function with the same signature. This
 * allows the creation of custom validation functions. For example:
 *
 *  var MyLink = React.createClass({
 *    propTypes: {
 *      // An optional string or URI prop named "href".
 *      href: function(props, propName, componentName) {
 *        var propValue = props[propName];
 *        if (propValue != null && typeof propValue !== 'string' &&
 *            !(propValue instanceof URI)) {
 *          return new Error(
 *            'Expected a string or an URI for ' + propName + ' in ' +
 *            componentName
 *          );
 *        }
 *      }
 *    },
 *    render: function() {...}
 *  });
 *
 * @internal
 */var ANONYMOUS='<<anonymous>>';var elementTypeChecker=createElementTypeChecker();var nodeTypeChecker=createNodeChecker();var ReactPropTypes={array:createPrimitiveTypeChecker('array'),bool:createPrimitiveTypeChecker('boolean'),func:createPrimitiveTypeChecker('function'),number:createPrimitiveTypeChecker('number'),object:createPrimitiveTypeChecker('object'),string:createPrimitiveTypeChecker('string'),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:elementTypeChecker,instanceOf:createInstanceTypeChecker,node:nodeTypeChecker,objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker};function createChainableTypeChecker(validate){function checkType(isRequired,props,propName,componentName,location){componentName = componentName || ANONYMOUS;if(props[propName] == null){var locationName=ReactPropTypeLocationNames[location];if(isRequired){return new Error("Required " + locationName + " `" + propName + "` was not specified in " + ("`" + componentName + "`."));}return null;}else {return validate(props,propName,componentName,location);}}var chainedCheckType=checkType.bind(null,false);chainedCheckType.isRequired = checkType.bind(null,true);return chainedCheckType;}function createPrimitiveTypeChecker(expectedType){function validate(props,propName,componentName,location){var propValue=props[propName];var propType=getPropType(propValue);if(propType !== expectedType){var locationName=ReactPropTypeLocationNames[location]; // `propValue` being instance of, say, date/regexp, pass the 'object'
// check, but we can offer a more precise error message here rather than
// 'of type `object`'.
var preciseType=getPreciseType(propValue);return new Error("Invalid " + locationName + " `" + propName + "` of type `" + preciseType + "` " + ("supplied to `" + componentName + "`, expected `" + expectedType + "`."));}return null;}return createChainableTypeChecker(validate);}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunction.thatReturns(null));}function createArrayOfTypeChecker(typeChecker){function validate(props,propName,componentName,location){var propValue=props[propName];if(!Array.isArray(propValue)){var locationName=ReactPropTypeLocationNames[location];var propType=getPropType(propValue);return new Error("Invalid " + locationName + " `" + propName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));}for(var i=0;i < propValue.length;i++) {var error=typeChecker(propValue,i,componentName,location);if(error instanceof Error){return error;}}return null;}return createChainableTypeChecker(validate);}function createElementTypeChecker(){function validate(props,propName,componentName,location){if(!ReactElement.isValidElement(props[propName])){var locationName=ReactPropTypeLocationNames[location];return new Error("Invalid " + locationName + " `" + propName + "` supplied to " + ("`" + componentName + "`, expected a ReactElement."));}return null;}return createChainableTypeChecker(validate);}function createInstanceTypeChecker(expectedClass){function validate(props,propName,componentName,location){if(!(props[propName] instanceof expectedClass)){var locationName=ReactPropTypeLocationNames[location];var expectedClassName=expectedClass.name || ANONYMOUS;return new Error("Invalid " + locationName + " `" + propName + "` supplied to " + ("`" + componentName + "`, expected instance of `" + expectedClassName + "`."));}return null;}return createChainableTypeChecker(validate);}function createEnumTypeChecker(expectedValues){function validate(props,propName,componentName,location){var propValue=props[propName];for(var i=0;i < expectedValues.length;i++) {if(propValue === expectedValues[i]){return null;}}var locationName=ReactPropTypeLocationNames[location];var valuesString=JSON.stringify(expectedValues);return new Error("Invalid " + locationName + " `" + propName + "` of value `" + propValue + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));}return createChainableTypeChecker(validate);}function createObjectOfTypeChecker(typeChecker){function validate(props,propName,componentName,location){var propValue=props[propName];var propType=getPropType(propValue);if(propType !== 'object'){var locationName=ReactPropTypeLocationNames[location];return new Error("Invalid " + locationName + " `" + propName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));}for(var key in propValue) {if(propValue.hasOwnProperty(key)){var error=typeChecker(propValue,key,componentName,location);if(error instanceof Error){return error;}}}return null;}return createChainableTypeChecker(validate);}function createUnionTypeChecker(arrayOfTypeCheckers){function validate(props,propName,componentName,location){for(var i=0;i < arrayOfTypeCheckers.length;i++) {var checker=arrayOfTypeCheckers[i];if(checker(props,propName,componentName,location) == null){return null;}}var locationName=ReactPropTypeLocationNames[location];return new Error("Invalid " + locationName + " `" + propName + "` supplied to " + ("`" + componentName + "`."));}return createChainableTypeChecker(validate);}function createNodeChecker(){function validate(props,propName,componentName,location){if(!isNode(props[propName])){var locationName=ReactPropTypeLocationNames[location];return new Error("Invalid " + locationName + " `" + propName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));}return null;}return createChainableTypeChecker(validate);}function createShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location){var propValue=props[propName];var propType=getPropType(propValue);if(propType !== 'object'){var locationName=ReactPropTypeLocationNames[location];return new Error("Invalid " + locationName + " `" + propName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));}for(var key in shapeTypes) {var checker=shapeTypes[key];if(!checker){continue;}var error=checker(propValue,key,componentName,location);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function isNode(propValue){switch(typeof propValue){case 'number':case 'string':case 'undefined':return true;case 'boolean':return !propValue;case 'object':if(Array.isArray(propValue)){return propValue.every(isNode);}if(propValue === null || ReactElement.isValidElement(propValue)){return true;}propValue = ReactFragment.extractIfFragment(propValue);for(var k in propValue) {if(!isNode(propValue[k])){return false;}}return true;default:return false;}} // Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(propValue){var propType=typeof propValue;if(Array.isArray(propValue)){return 'array';}if(propValue instanceof RegExp){ // Old webkits (at least until Android 4.0) return 'function' rather than
// 'object' for typeof a RegExp. We'll normalize this here so that /bla/
// passes PropTypes.object.
return 'object';}return propType;} // This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function getPreciseType(propValue){var propType=getPropType(propValue);if(propType === 'object'){if(propValue instanceof Date){return 'date';}else if(propValue instanceof RegExp){return 'regexp';}}return propType;}module.exports = ReactPropTypes;},{"114":114,"57":57,"63":63,"76":76}],79:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPutListenerQueue
 */'use strict';var PooledClass=_dereq_(28);var ReactBrowserEventEmitter=_dereq_(30);var assign=_dereq_(27);function ReactPutListenerQueue(){this.listenersToPut = [];}assign(ReactPutListenerQueue.prototype,{enqueuePutListener:function enqueuePutListener(rootNodeID,propKey,propValue){this.listenersToPut.push({rootNodeID:rootNodeID,propKey:propKey,propValue:propValue});},putListeners:function putListeners(){for(var i=0;i < this.listenersToPut.length;i++) {var listenerToPut=this.listenersToPut[i];ReactBrowserEventEmitter.putListener(listenerToPut.rootNodeID,listenerToPut.propKey,listenerToPut.propValue);}},reset:function reset(){this.listenersToPut.length = 0;},destructor:function destructor(){this.reset();}});PooledClass.addPoolingTo(ReactPutListenerQueue);module.exports = ReactPutListenerQueue;},{"27":27,"28":28,"30":30}],80:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconcileTransaction
 * @typechecks static-only
 */'use strict';var CallbackQueue=_dereq_(6);var PooledClass=_dereq_(28);var ReactBrowserEventEmitter=_dereq_(30);var ReactInputSelection=_dereq_(65);var ReactPutListenerQueue=_dereq_(79);var Transaction=_dereq_(103);var assign=_dereq_(27); /**
 * Ensures that, when possible, the selection range (currently selected text
 * input) is not disturbed by performing the transaction.
 */var SELECTION_RESTORATION={ /**
   * @return {Selection} Selection information.
   */initialize:ReactInputSelection.getSelectionInformation, /**
   * @param {Selection} sel Selection information returned from `initialize`.
   */close:ReactInputSelection.restoreSelection}; /**
 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
 * high level DOM manipulations (like temporarily removing a text input from the
 * DOM).
 */var EVENT_SUPPRESSION={ /**
   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
   * the reconciliation.
   */initialize:function initialize(){var currentlyEnabled=ReactBrowserEventEmitter.isEnabled();ReactBrowserEventEmitter.setEnabled(false);return currentlyEnabled;}, /**
   * @param {boolean} previouslyEnabled Enabled status of
   *   `ReactBrowserEventEmitter` before the reconciliation occured. `close`
   *   restores the previous value.
   */close:function close(previouslyEnabled){ReactBrowserEventEmitter.setEnabled(previouslyEnabled);}}; /**
 * Provides a queue for collecting `componentDidMount` and
 * `componentDidUpdate` callbacks during the the transaction.
 */var ON_DOM_READY_QUEUEING={ /**
   * Initializes the internal `onDOMReady` queue.
   */initialize:function initialize(){this.reactMountReady.reset();}, /**
   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
   */close:function close(){this.reactMountReady.notifyAll();}};var PUT_LISTENER_QUEUEING={initialize:function initialize(){this.putListenerQueue.reset();},close:function close(){this.putListenerQueue.putListeners();}}; /**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */var TRANSACTION_WRAPPERS=[PUT_LISTENER_QUEUEING,SELECTION_RESTORATION,EVENT_SUPPRESSION,ON_DOM_READY_QUEUEING]; /**
 * Currently:
 * - The order that these are listed in the transaction is critical:
 * - Suppresses events.
 * - Restores selection range.
 *
 * Future:
 * - Restore document/overflow scroll positions that were unintentionally
 *   modified via DOM insertions above the top viewport boundary.
 * - Implement/integrate with customized constraint based layout system and keep
 *   track of which dimensions must be remeasured.
 *
 * @class ReactReconcileTransaction
 */function ReactReconcileTransaction(){this.reinitializeTransaction(); // Only server-side rendering really needs this option (see
// `ReactServerRendering`), but server-side uses
// `ReactServerRenderingTransaction` instead. This option is here so that it's
// accessible and defaults to false when `ReactDOMComponent` and
// `ReactTextComponent` checks it in `mountComponent`.`
this.renderToStaticMarkup = false;this.reactMountReady = CallbackQueue.getPooled(null);this.putListenerQueue = ReactPutListenerQueue.getPooled();}var Mixin={ /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array<object>} List of operation wrap proceedures.
   *   TODO: convert to array<TransactionWrapper>
   */getTransactionWrappers:function getTransactionWrappers(){return TRANSACTION_WRAPPERS;}, /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */getReactMountReady:function getReactMountReady(){return this.reactMountReady;},getPutListenerQueue:function getPutListenerQueue(){return this.putListenerQueue;}, /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be resused.
   */destructor:function destructor(){CallbackQueue.release(this.reactMountReady);this.reactMountReady = null;ReactPutListenerQueue.release(this.putListenerQueue);this.putListenerQueue = null;}};assign(ReactReconcileTransaction.prototype,Transaction.Mixin,Mixin);PooledClass.addPoolingTo(ReactReconcileTransaction);module.exports = ReactReconcileTransaction;},{"103":103,"27":27,"28":28,"30":30,"6":6,"65":65,"79":79}],81:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconciler
 */'use strict';var ReactRef=_dereq_(82);var ReactElementValidator=_dereq_(58); /**
 * Helper to call ReactRef.attachRefs with this composite component, split out
 * to avoid allocations in the transaction mount-ready queue.
 */function attachRefs(){ReactRef.attachRefs(this,this._currentElement);}var ReactReconciler={ /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {ReactComponent} internalInstance
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */mountComponent:function mountComponent(internalInstance,rootID,transaction,context){var markup=internalInstance.mountComponent(rootID,transaction,context);if("production" !== "development"){ReactElementValidator.checkAndWarnForMutatedProps(internalInstance._currentElement);}transaction.getReactMountReady().enqueue(attachRefs,internalInstance);return markup;}, /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */unmountComponent:function unmountComponent(internalInstance){ReactRef.detachRefs(internalInstance,internalInstance._currentElement);internalInstance.unmountComponent();}, /**
   * Update a component using a new element.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @internal
   */receiveComponent:function receiveComponent(internalInstance,nextElement,transaction,context){var prevElement=internalInstance._currentElement;if(nextElement === prevElement && nextElement._owner != null){ // Since elements are immutable after the owner is rendered,
// we can do a cheap identity compare here to determine if this is a
// superfluous reconcile. It's possible for state to be mutable but such
// change should trigger an update of the owner which would recreate
// the element. We explicitly check for the existence of an owner since
// it's possible for an element created outside a composite to be
// deeply mutated and reused.
return;}if("production" !== "development"){ReactElementValidator.checkAndWarnForMutatedProps(nextElement);}var refsChanged=ReactRef.shouldUpdateRefs(prevElement,nextElement);if(refsChanged){ReactRef.detachRefs(internalInstance,prevElement);}internalInstance.receiveComponent(nextElement,transaction,context);if(refsChanged){transaction.getReactMountReady().enqueue(attachRefs,internalInstance);}}, /**
   * Flush any dirty changes in a component.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */performUpdateIfNecessary:function performUpdateIfNecessary(internalInstance,transaction){internalInstance.performUpdateIfNecessary(transaction);}};module.exports = ReactReconciler;},{"58":58,"82":82}],82:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRef
 */'use strict';var ReactOwner=_dereq_(74);var ReactRef={};function attachRef(ref,component,owner){if(typeof ref === 'function'){ref(component.getPublicInstance());}else { // Legacy ref
ReactOwner.addComponentAsRefTo(component,ref,owner);}}function detachRef(ref,component,owner){if(typeof ref === 'function'){ref(null);}else { // Legacy ref
ReactOwner.removeComponentAsRefFrom(component,ref,owner);}}ReactRef.attachRefs = function(instance,element){var ref=element.ref;if(ref != null){attachRef(ref,instance,element._owner);}};ReactRef.shouldUpdateRefs = function(prevElement,nextElement){ // If either the owner or a `ref` has changed, make sure the newest owner
// has stored a reference to `this`, and the previous owner (if different)
// has forgotten the reference to `this`. We use the element instead
// of the public this.props because the post processing cannot determine
// a ref. The ref conceptually lives on the element.
// TODO: Should this even be possible? The owner cannot change because
// it's forbidden by shouldUpdateReactComponent. The ref can change
// if you swap the keys of but not the refs. Reconsider where this check
// is made. It probably belongs where the key checking and
// instantiateReactComponent is done.
return nextElement._owner !== prevElement._owner || nextElement.ref !== prevElement.ref;};ReactRef.detachRefs = function(instance,element){var ref=element.ref;if(ref != null){detachRef(ref,instance,element._owner);}};module.exports = ReactRef;},{"74":74}],83:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRootIndex
 * @typechecks
 */'use strict';var ReactRootIndexInjection={ /**
   * @param {function} _createReactRootIndex
   */injectCreateReactRootIndex:function injectCreateReactRootIndex(_createReactRootIndex){ReactRootIndex.createReactRootIndex = _createReactRootIndex;}};var ReactRootIndex={createReactRootIndex:null,injection:ReactRootIndexInjection};module.exports = ReactRootIndex;},{}],84:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 * @providesModule ReactServerRendering
 */'use strict';var ReactElement=_dereq_(57);var ReactInstanceHandles=_dereq_(66);var ReactMarkupChecksum=_dereq_(69);var ReactServerRenderingTransaction=_dereq_(85);var emptyObject=_dereq_(115);var instantiateReactComponent=_dereq_(134);var invariant=_dereq_(135); /**
 * @param {ReactElement} element
 * @return {string} the HTML markup
 */function renderToString(element){"production" !== "development"?invariant(ReactElement.isValidElement(element),'renderToString(): You must pass a valid ReactElement.'):invariant(ReactElement.isValidElement(element));var transaction;try{var id=ReactInstanceHandles.createReactRootID();transaction = ReactServerRenderingTransaction.getPooled(false);return transaction.perform(function(){var componentInstance=instantiateReactComponent(element,null);var markup=componentInstance.mountComponent(id,transaction,emptyObject);return ReactMarkupChecksum.addChecksumToMarkup(markup);},null);}finally {ReactServerRenderingTransaction.release(transaction);}} /**
 * @param {ReactElement} element
 * @return {string} the HTML markup, without the extra React ID and checksum
 * (for generating static pages)
 */function renderToStaticMarkup(element){"production" !== "development"?invariant(ReactElement.isValidElement(element),'renderToStaticMarkup(): You must pass a valid ReactElement.'):invariant(ReactElement.isValidElement(element));var transaction;try{var id=ReactInstanceHandles.createReactRootID();transaction = ReactServerRenderingTransaction.getPooled(true);return transaction.perform(function(){var componentInstance=instantiateReactComponent(element,null);return componentInstance.mountComponent(id,transaction,emptyObject);},null);}finally {ReactServerRenderingTransaction.release(transaction);}}module.exports = {renderToString:renderToString,renderToStaticMarkup:renderToStaticMarkup};},{"115":115,"134":134,"135":135,"57":57,"66":66,"69":69,"85":85}],85:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactServerRenderingTransaction
 * @typechecks
 */'use strict';var PooledClass=_dereq_(28);var CallbackQueue=_dereq_(6);var ReactPutListenerQueue=_dereq_(79);var Transaction=_dereq_(103);var assign=_dereq_(27);var emptyFunction=_dereq_(114); /**
 * Provides a `CallbackQueue` queue for collecting `onDOMReady` callbacks
 * during the performing of the transaction.
 */var ON_DOM_READY_QUEUEING={ /**
   * Initializes the internal `onDOMReady` queue.
   */initialize:function initialize(){this.reactMountReady.reset();},close:emptyFunction};var PUT_LISTENER_QUEUEING={initialize:function initialize(){this.putListenerQueue.reset();},close:emptyFunction}; /**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */var TRANSACTION_WRAPPERS=[PUT_LISTENER_QUEUEING,ON_DOM_READY_QUEUEING]; /**
 * @class ReactServerRenderingTransaction
 * @param {boolean} renderToStaticMarkup
 */function ReactServerRenderingTransaction(renderToStaticMarkup){this.reinitializeTransaction();this.renderToStaticMarkup = renderToStaticMarkup;this.reactMountReady = CallbackQueue.getPooled(null);this.putListenerQueue = ReactPutListenerQueue.getPooled();}var Mixin={ /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array} Empty list of operation wrap proceedures.
   */getTransactionWrappers:function getTransactionWrappers(){return TRANSACTION_WRAPPERS;}, /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */getReactMountReady:function getReactMountReady(){return this.reactMountReady;},getPutListenerQueue:function getPutListenerQueue(){return this.putListenerQueue;}, /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be resused.
   */destructor:function destructor(){CallbackQueue.release(this.reactMountReady);this.reactMountReady = null;ReactPutListenerQueue.release(this.putListenerQueue);this.putListenerQueue = null;}};assign(ReactServerRenderingTransaction.prototype,Transaction.Mixin,Mixin);PooledClass.addPoolingTo(ReactServerRenderingTransaction);module.exports = ReactServerRenderingTransaction;},{"103":103,"114":114,"27":27,"28":28,"6":6,"79":79}],86:[function(_dereq_,module,exports){ /**
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdateQueue
 */'use strict';var ReactLifeCycle=_dereq_(68);var ReactCurrentOwner=_dereq_(39);var ReactElement=_dereq_(57);var ReactInstanceMap=_dereq_(67);var ReactUpdates=_dereq_(87);var assign=_dereq_(27);var invariant=_dereq_(135);var warning=_dereq_(154);function enqueueUpdate(internalInstance){if(internalInstance !== ReactLifeCycle.currentlyMountingInstance){ // If we're in a componentWillMount handler, don't enqueue a rerender
// because ReactUpdates assumes we're in a browser context (which is
// wrong for server rendering) and we're about to do a render anyway.
// See bug in #1740.
ReactUpdates.enqueueUpdate(internalInstance);}}function getInternalInstanceReadyForUpdate(publicInstance,callerName){"production" !== "development"?invariant(ReactCurrentOwner.current == null,'%s(...): Cannot update during an existing state transition ' + '(such as within `render`). Render methods should be a pure function ' + 'of props and state.',callerName):invariant(ReactCurrentOwner.current == null);var internalInstance=ReactInstanceMap.get(publicInstance);if(!internalInstance){if("production" !== "development"){ // Only warn when we have a callerName. Otherwise we should be silent.
// We're probably calling from enqueueCallback. We don't want to warn
// there because we already warned for the corresponding lifecycle method.
"production" !== "development"?warning(!callerName,'%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted ' + 'component. This is a no-op.',callerName,callerName):null;}return null;}if(internalInstance === ReactLifeCycle.currentlyUnmountingInstance){return null;}return internalInstance;} /**
 * ReactUpdateQueue allows for state updates to be scheduled into a later
 * reconciliation step.
 */var ReactUpdateQueue={ /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */enqueueCallback:function enqueueCallback(publicInstance,callback){"production" !== "development"?invariant(typeof callback === 'function','enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.'):invariant(typeof callback === 'function');var internalInstance=getInternalInstanceReadyForUpdate(publicInstance); // Previously we would throw an error if we didn't have an internal
// instance. Since we want to make it a no-op instead, we mirror the same
// behavior we have in other enqueue* methods.
// We also need to ignore callbacks in componentWillMount. See
// enqueueUpdates.
if(!internalInstance || internalInstance === ReactLifeCycle.currentlyMountingInstance){return null;}if(internalInstance._pendingCallbacks){internalInstance._pendingCallbacks.push(callback);}else {internalInstance._pendingCallbacks = [callback];} // TODO: The callback here is ignored when setState is called from
// componentWillMount. Either fix it or disallow doing so completely in
// favor of getInitialState. Alternatively, we can disallow
// componentWillMount during server-side rendering.
enqueueUpdate(internalInstance);},enqueueCallbackInternal:function enqueueCallbackInternal(internalInstance,callback){"production" !== "development"?invariant(typeof callback === 'function','enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.'):invariant(typeof callback === 'function');if(internalInstance._pendingCallbacks){internalInstance._pendingCallbacks.push(callback);}else {internalInstance._pendingCallbacks = [callback];}enqueueUpdate(internalInstance);}, /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldUpdateComponent`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */enqueueForceUpdate:function enqueueForceUpdate(publicInstance){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'forceUpdate');if(!internalInstance){return;}internalInstance._pendingForceUpdate = true;enqueueUpdate(internalInstance);}, /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */enqueueReplaceState:function enqueueReplaceState(publicInstance,completeState){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'replaceState');if(!internalInstance){return;}internalInstance._pendingStateQueue = [completeState];internalInstance._pendingReplaceState = true;enqueueUpdate(internalInstance);}, /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */enqueueSetState:function enqueueSetState(publicInstance,partialState){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'setState');if(!internalInstance){return;}var queue=internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);queue.push(partialState);enqueueUpdate(internalInstance);}, /**
   * Sets a subset of the props.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialProps Subset of the next props.
   * @internal
   */enqueueSetProps:function enqueueSetProps(publicInstance,partialProps){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'setProps');if(!internalInstance){return;}"production" !== "development"?invariant(internalInstance._isTopLevel,'setProps(...): You called `setProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.'):invariant(internalInstance._isTopLevel); // Merge with the pending element if it exists, otherwise with existing
// element props.
var element=internalInstance._pendingElement || internalInstance._currentElement;var props=assign({},element.props,partialProps);internalInstance._pendingElement = ReactElement.cloneAndReplaceProps(element,props);enqueueUpdate(internalInstance);}, /**
   * Replaces all of the props.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} props New props.
   * @internal
   */enqueueReplaceProps:function enqueueReplaceProps(publicInstance,props){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'replaceProps');if(!internalInstance){return;}"production" !== "development"?invariant(internalInstance._isTopLevel,'replaceProps(...): You called `replaceProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.'):invariant(internalInstance._isTopLevel); // Merge with the pending element if it exists, otherwise with existing
// element props.
var element=internalInstance._pendingElement || internalInstance._currentElement;internalInstance._pendingElement = ReactElement.cloneAndReplaceProps(element,props);enqueueUpdate(internalInstance);},enqueueElementInternal:function enqueueElementInternal(internalInstance,newElement){internalInstance._pendingElement = newElement;enqueueUpdate(internalInstance);}};module.exports = ReactUpdateQueue;},{"135":135,"154":154,"27":27,"39":39,"57":57,"67":67,"68":68,"87":87}],87:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdates
 */'use strict';var CallbackQueue=_dereq_(6);var PooledClass=_dereq_(28);var ReactCurrentOwner=_dereq_(39);var ReactPerf=_dereq_(75);var ReactReconciler=_dereq_(81);var Transaction=_dereq_(103);var assign=_dereq_(27);var invariant=_dereq_(135);var warning=_dereq_(154);var dirtyComponents=[];var asapCallbackQueue=CallbackQueue.getPooled();var asapEnqueued=false;var batchingStrategy=null;function ensureInjected(){"production" !== "development"?invariant(ReactUpdates.ReactReconcileTransaction && batchingStrategy,'ReactUpdates: must inject a reconcile transaction class and batching ' + 'strategy'):invariant(ReactUpdates.ReactReconcileTransaction && batchingStrategy);}var NESTED_UPDATES={initialize:function initialize(){this.dirtyComponentsLength = dirtyComponents.length;},close:function close(){if(this.dirtyComponentsLength !== dirtyComponents.length){ // Additional updates were enqueued by componentDidUpdate handlers or
// similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
// these new updates so that if A's componentDidUpdate calls setState on
// B, B will update before the callback A's updater provided when calling
// setState.
dirtyComponents.splice(0,this.dirtyComponentsLength);flushBatchedUpdates();}else {dirtyComponents.length = 0;}}};var UPDATE_QUEUEING={initialize:function initialize(){this.callbackQueue.reset();},close:function close(){this.callbackQueue.notifyAll();}};var TRANSACTION_WRAPPERS=[NESTED_UPDATES,UPDATE_QUEUEING];function ReactUpdatesFlushTransaction(){this.reinitializeTransaction();this.dirtyComponentsLength = null;this.callbackQueue = CallbackQueue.getPooled();this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled();}assign(ReactUpdatesFlushTransaction.prototype,Transaction.Mixin,{getTransactionWrappers:function getTransactionWrappers(){return TRANSACTION_WRAPPERS;},destructor:function destructor(){this.dirtyComponentsLength = null;CallbackQueue.release(this.callbackQueue);this.callbackQueue = null;ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);this.reconcileTransaction = null;},perform:function perform(method,scope,a){ // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
// with this transaction's wrappers around it.
return Transaction.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,method,scope,a);}});PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);function batchedUpdates(callback,a,b,c,d){ensureInjected();batchingStrategy.batchedUpdates(callback,a,b,c,d);} /**
 * Array comparator for ReactComponents by mount ordering.
 *
 * @param {ReactComponent} c1 first component you're comparing
 * @param {ReactComponent} c2 second component you're comparing
 * @return {number} Return value usable by Array.prototype.sort().
 */function mountOrderComparator(c1,c2){return c1._mountOrder - c2._mountOrder;}function runBatchedUpdates(transaction){var len=transaction.dirtyComponentsLength;"production" !== "development"?invariant(len === dirtyComponents.length,'Expected flush transaction\'s stored dirty-components length (%s) to ' + 'match dirty-components array length (%s).',len,dirtyComponents.length):invariant(len === dirtyComponents.length); // Since reconciling a component higher in the owner hierarchy usually (not
// always -- see shouldComponentUpdate()) will reconcile children, reconcile
// them before their children by sorting the array.
dirtyComponents.sort(mountOrderComparator);for(var i=0;i < len;i++) { // If a component is unmounted before pending changes apply, it will still
// be here, but we assume that it has cleared its _pendingCallbacks and
// that performUpdateIfNecessary is a noop.
var component=dirtyComponents[i]; // If performUpdateIfNecessary happens to enqueue any new updates, we
// shouldn't execute the callbacks until the next render happens, so
// stash the callbacks first
var callbacks=component._pendingCallbacks;component._pendingCallbacks = null;ReactReconciler.performUpdateIfNecessary(component,transaction.reconcileTransaction);if(callbacks){for(var j=0;j < callbacks.length;j++) {transaction.callbackQueue.enqueue(callbacks[j],component.getPublicInstance());}}}}var flushBatchedUpdates=function flushBatchedUpdates(){ // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
// array and perform any updates enqueued by mount-ready handlers (i.e.,
// componentDidUpdate) but we need to check here too in order to catch
// updates enqueued by setState callbacks and asap calls.
while(dirtyComponents.length || asapEnqueued) {if(dirtyComponents.length){var transaction=ReactUpdatesFlushTransaction.getPooled();transaction.perform(runBatchedUpdates,null,transaction);ReactUpdatesFlushTransaction.release(transaction);}if(asapEnqueued){asapEnqueued = false;var queue=asapCallbackQueue;asapCallbackQueue = CallbackQueue.getPooled();queue.notifyAll();CallbackQueue.release(queue);}}};flushBatchedUpdates = ReactPerf.measure('ReactUpdates','flushBatchedUpdates',flushBatchedUpdates); /**
 * Mark a component as needing a rerender, adding an optional callback to a
 * list of functions which will be executed once the rerender occurs.
 */function enqueueUpdate(component){ensureInjected(); // Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case. (This is called by each top-level update
// function, like setProps, setState, forceUpdate, etc.; creation and
// destruction of top-level components is guarded in ReactMount.)
"production" !== "development"?warning(ReactCurrentOwner.current == null,'enqueueUpdate(): Render methods should be a pure function of props ' + 'and state; triggering nested component updates from render is not ' + 'allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate.'):null;if(!batchingStrategy.isBatchingUpdates){batchingStrategy.batchedUpdates(enqueueUpdate,component);return;}dirtyComponents.push(component);} /**
 * Enqueue a callback to be run at the end of the current batching cycle. Throws
 * if no updates are currently being performed.
 */function asap(callback,context){"production" !== "development"?invariant(batchingStrategy.isBatchingUpdates,'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' + 'updates are not being batched.'):invariant(batchingStrategy.isBatchingUpdates);asapCallbackQueue.enqueue(callback,context);asapEnqueued = true;}var ReactUpdatesInjection={injectReconcileTransaction:function injectReconcileTransaction(ReconcileTransaction){"production" !== "development"?invariant(ReconcileTransaction,'ReactUpdates: must provide a reconcile transaction class'):invariant(ReconcileTransaction);ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;},injectBatchingStrategy:function injectBatchingStrategy(_batchingStrategy){"production" !== "development"?invariant(_batchingStrategy,'ReactUpdates: must provide a batching strategy'):invariant(_batchingStrategy);"production" !== "development"?invariant(typeof _batchingStrategy.batchedUpdates === 'function','ReactUpdates: must provide a batchedUpdates() function'):invariant(typeof _batchingStrategy.batchedUpdates === 'function');"production" !== "development"?invariant(typeof _batchingStrategy.isBatchingUpdates === 'boolean','ReactUpdates: must provide an isBatchingUpdates boolean attribute'):invariant(typeof _batchingStrategy.isBatchingUpdates === 'boolean');batchingStrategy = _batchingStrategy;}};var ReactUpdates={ /**
   * React references `ReactReconcileTransaction` using this property in order
   * to allow dependency injection.
   *
   * @internal
   */ReactReconcileTransaction:null,batchedUpdates:batchedUpdates,enqueueUpdate:enqueueUpdate,flushBatchedUpdates:flushBatchedUpdates,injection:ReactUpdatesInjection,asap:asap};module.exports = ReactUpdates;},{"103":103,"135":135,"154":154,"27":27,"28":28,"39":39,"6":6,"75":75,"81":81}],88:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SVGDOMPropertyConfig
 */ /*jslint bitwise: true*/'use strict';var DOMProperty=_dereq_(10);var MUST_USE_ATTRIBUTE=DOMProperty.injection.MUST_USE_ATTRIBUTE;var SVGDOMPropertyConfig={Properties:{clipPath:MUST_USE_ATTRIBUTE,cx:MUST_USE_ATTRIBUTE,cy:MUST_USE_ATTRIBUTE,d:MUST_USE_ATTRIBUTE,dx:MUST_USE_ATTRIBUTE,dy:MUST_USE_ATTRIBUTE,fill:MUST_USE_ATTRIBUTE,fillOpacity:MUST_USE_ATTRIBUTE,fontFamily:MUST_USE_ATTRIBUTE,fontSize:MUST_USE_ATTRIBUTE,fx:MUST_USE_ATTRIBUTE,fy:MUST_USE_ATTRIBUTE,gradientTransform:MUST_USE_ATTRIBUTE,gradientUnits:MUST_USE_ATTRIBUTE,markerEnd:MUST_USE_ATTRIBUTE,markerMid:MUST_USE_ATTRIBUTE,markerStart:MUST_USE_ATTRIBUTE,offset:MUST_USE_ATTRIBUTE,opacity:MUST_USE_ATTRIBUTE,patternContentUnits:MUST_USE_ATTRIBUTE,patternUnits:MUST_USE_ATTRIBUTE,points:MUST_USE_ATTRIBUTE,preserveAspectRatio:MUST_USE_ATTRIBUTE,r:MUST_USE_ATTRIBUTE,rx:MUST_USE_ATTRIBUTE,ry:MUST_USE_ATTRIBUTE,spreadMethod:MUST_USE_ATTRIBUTE,stopColor:MUST_USE_ATTRIBUTE,stopOpacity:MUST_USE_ATTRIBUTE,stroke:MUST_USE_ATTRIBUTE,strokeDasharray:MUST_USE_ATTRIBUTE,strokeLinecap:MUST_USE_ATTRIBUTE,strokeOpacity:MUST_USE_ATTRIBUTE,strokeWidth:MUST_USE_ATTRIBUTE,textAnchor:MUST_USE_ATTRIBUTE,transform:MUST_USE_ATTRIBUTE,version:MUST_USE_ATTRIBUTE,viewBox:MUST_USE_ATTRIBUTE,x1:MUST_USE_ATTRIBUTE,x2:MUST_USE_ATTRIBUTE,x:MUST_USE_ATTRIBUTE,y1:MUST_USE_ATTRIBUTE,y2:MUST_USE_ATTRIBUTE,y:MUST_USE_ATTRIBUTE},DOMAttributeNames:{clipPath:'clip-path',fillOpacity:'fill-opacity',fontFamily:'font-family',fontSize:'font-size',gradientTransform:'gradientTransform',gradientUnits:'gradientUnits',markerEnd:'marker-end',markerMid:'marker-mid',markerStart:'marker-start',patternContentUnits:'patternContentUnits',patternUnits:'patternUnits',preserveAspectRatio:'preserveAspectRatio',spreadMethod:'spreadMethod',stopColor:'stop-color',stopOpacity:'stop-opacity',strokeDasharray:'stroke-dasharray',strokeLinecap:'stroke-linecap',strokeOpacity:'stroke-opacity',strokeWidth:'stroke-width',textAnchor:'text-anchor',viewBox:'viewBox'}};module.exports = SVGDOMPropertyConfig;},{"10":10}],89:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SelectEventPlugin
 */'use strict';var EventConstants=_dereq_(15);var EventPropagators=_dereq_(20);var ReactInputSelection=_dereq_(65);var SyntheticEvent=_dereq_(95);var getActiveElement=_dereq_(121);var isTextInputElement=_dereq_(138);var keyOf=_dereq_(141);var shallowEqual=_dereq_(150);var topLevelTypes=EventConstants.topLevelTypes;var eventTypes={select:{phasedRegistrationNames:{bubbled:keyOf({onSelect:null}),captured:keyOf({onSelectCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topContextMenu,topLevelTypes.topFocus,topLevelTypes.topKeyDown,topLevelTypes.topMouseDown,topLevelTypes.topMouseUp,topLevelTypes.topSelectionChange]}};var activeElement=null;var activeElementID=null;var lastSelection=null;var mouseDown=false; /**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 *
 * @param {DOMElement} node
 * @param {object}
 */function getSelection(node){if('selectionStart' in node && ReactInputSelection.hasSelectionCapabilities(node)){return {start:node.selectionStart,end:node.selectionEnd};}else if(window.getSelection){var selection=window.getSelection();return {anchorNode:selection.anchorNode,anchorOffset:selection.anchorOffset,focusNode:selection.focusNode,focusOffset:selection.focusOffset};}else if(document.selection){var range=document.selection.createRange();return {parentElement:range.parentElement(),text:range.text,top:range.boundingTop,left:range.boundingLeft};}} /**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @return {?SyntheticEvent}
 */function constructSelectEvent(nativeEvent){ // Ensure we have the right element, and that the user is not dragging a
// selection (this matches native `select` event behavior). In HTML5, select
// fires only on input and textarea thus if there's no focused element we
// won't dispatch.
if(mouseDown || activeElement == null || activeElement !== getActiveElement()){return null;} // Only fire when selection has actually changed.
var currentSelection=getSelection(activeElement);if(!lastSelection || !shallowEqual(lastSelection,currentSelection)){lastSelection = currentSelection;var syntheticEvent=SyntheticEvent.getPooled(eventTypes.select,activeElementID,nativeEvent);syntheticEvent.type = 'select';syntheticEvent.target = activeElement;EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);return syntheticEvent;}} /**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */var SelectEventPlugin={eventTypes:eventTypes, /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */extractEvents:function extractEvents(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent){switch(topLevelType){ // Track the input node that has focus.
case topLevelTypes.topFocus:if(isTextInputElement(topLevelTarget) || topLevelTarget.contentEditable === 'true'){activeElement = topLevelTarget;activeElementID = topLevelTargetID;lastSelection = null;}break;case topLevelTypes.topBlur:activeElement = null;activeElementID = null;lastSelection = null;break; // Don't fire the event while the user is dragging. This matches the
// semantics of the native select event.
case topLevelTypes.topMouseDown:mouseDown = true;break;case topLevelTypes.topContextMenu:case topLevelTypes.topMouseUp:mouseDown = false;return constructSelectEvent(nativeEvent); // Chrome and IE fire non-standard event when selection is changed (and
// sometimes when it hasn't).
// Firefox doesn't support selectionchange, so check selection status
// after each key entry. The selection changes after keydown and before
// keyup, but we check on keydown as well in the case of holding down a
// key, when multiple keydown events are fired but only one keyup is.
case topLevelTypes.topSelectionChange:case topLevelTypes.topKeyDown:case topLevelTypes.topKeyUp:return constructSelectEvent(nativeEvent);}}};module.exports = SelectEventPlugin;},{"121":121,"138":138,"141":141,"15":15,"150":150,"20":20,"65":65,"95":95}],90:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ServerReactRootIndex
 * @typechecks
 */'use strict'; /**
 * Size of the reactRoot ID space. We generate random numbers for React root
 * IDs and if there's a collision the events and DOM update system will
 * get confused. In the future we need a way to generate GUIDs but for
 * now this will work on a smaller scale.
 */var GLOBAL_MOUNT_POINT_MAX=Math.pow(2,53);var ServerReactRootIndex={createReactRootIndex:function createReactRootIndex(){return Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX);}};module.exports = ServerReactRootIndex;},{}],91:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SimpleEventPlugin
 */'use strict';var EventConstants=_dereq_(15);var EventPluginUtils=_dereq_(19);var EventPropagators=_dereq_(20);var SyntheticClipboardEvent=_dereq_(92);var SyntheticEvent=_dereq_(95);var SyntheticFocusEvent=_dereq_(96);var SyntheticKeyboardEvent=_dereq_(98);var SyntheticMouseEvent=_dereq_(99);var SyntheticDragEvent=_dereq_(94);var SyntheticTouchEvent=_dereq_(100);var SyntheticUIEvent=_dereq_(101);var SyntheticWheelEvent=_dereq_(102);var getEventCharCode=_dereq_(122);var invariant=_dereq_(135);var keyOf=_dereq_(141);var warning=_dereq_(154);var topLevelTypes=EventConstants.topLevelTypes;var eventTypes={blur:{phasedRegistrationNames:{bubbled:keyOf({onBlur:true}),captured:keyOf({onBlurCapture:true})}},click:{phasedRegistrationNames:{bubbled:keyOf({onClick:true}),captured:keyOf({onClickCapture:true})}},contextMenu:{phasedRegistrationNames:{bubbled:keyOf({onContextMenu:true}),captured:keyOf({onContextMenuCapture:true})}},copy:{phasedRegistrationNames:{bubbled:keyOf({onCopy:true}),captured:keyOf({onCopyCapture:true})}},cut:{phasedRegistrationNames:{bubbled:keyOf({onCut:true}),captured:keyOf({onCutCapture:true})}},doubleClick:{phasedRegistrationNames:{bubbled:keyOf({onDoubleClick:true}),captured:keyOf({onDoubleClickCapture:true})}},drag:{phasedRegistrationNames:{bubbled:keyOf({onDrag:true}),captured:keyOf({onDragCapture:true})}},dragEnd:{phasedRegistrationNames:{bubbled:keyOf({onDragEnd:true}),captured:keyOf({onDragEndCapture:true})}},dragEnter:{phasedRegistrationNames:{bubbled:keyOf({onDragEnter:true}),captured:keyOf({onDragEnterCapture:true})}},dragExit:{phasedRegistrationNames:{bubbled:keyOf({onDragExit:true}),captured:keyOf({onDragExitCapture:true})}},dragLeave:{phasedRegistrationNames:{bubbled:keyOf({onDragLeave:true}),captured:keyOf({onDragLeaveCapture:true})}},dragOver:{phasedRegistrationNames:{bubbled:keyOf({onDragOver:true}),captured:keyOf({onDragOverCapture:true})}},dragStart:{phasedRegistrationNames:{bubbled:keyOf({onDragStart:true}),captured:keyOf({onDragStartCapture:true})}},drop:{phasedRegistrationNames:{bubbled:keyOf({onDrop:true}),captured:keyOf({onDropCapture:true})}},focus:{phasedRegistrationNames:{bubbled:keyOf({onFocus:true}),captured:keyOf({onFocusCapture:true})}},input:{phasedRegistrationNames:{bubbled:keyOf({onInput:true}),captured:keyOf({onInputCapture:true})}},keyDown:{phasedRegistrationNames:{bubbled:keyOf({onKeyDown:true}),captured:keyOf({onKeyDownCapture:true})}},keyPress:{phasedRegistrationNames:{bubbled:keyOf({onKeyPress:true}),captured:keyOf({onKeyPressCapture:true})}},keyUp:{phasedRegistrationNames:{bubbled:keyOf({onKeyUp:true}),captured:keyOf({onKeyUpCapture:true})}},load:{phasedRegistrationNames:{bubbled:keyOf({onLoad:true}),captured:keyOf({onLoadCapture:true})}},error:{phasedRegistrationNames:{bubbled:keyOf({onError:true}),captured:keyOf({onErrorCapture:true})}}, // Note: We do not allow listening to mouseOver events. Instead, use the
// onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
mouseDown:{phasedRegistrationNames:{bubbled:keyOf({onMouseDown:true}),captured:keyOf({onMouseDownCapture:true})}},mouseMove:{phasedRegistrationNames:{bubbled:keyOf({onMouseMove:true}),captured:keyOf({onMouseMoveCapture:true})}},mouseOut:{phasedRegistrationNames:{bubbled:keyOf({onMouseOut:true}),captured:keyOf({onMouseOutCapture:true})}},mouseOver:{phasedRegistrationNames:{bubbled:keyOf({onMouseOver:true}),captured:keyOf({onMouseOverCapture:true})}},mouseUp:{phasedRegistrationNames:{bubbled:keyOf({onMouseUp:true}),captured:keyOf({onMouseUpCapture:true})}},paste:{phasedRegistrationNames:{bubbled:keyOf({onPaste:true}),captured:keyOf({onPasteCapture:true})}},reset:{phasedRegistrationNames:{bubbled:keyOf({onReset:true}),captured:keyOf({onResetCapture:true})}},scroll:{phasedRegistrationNames:{bubbled:keyOf({onScroll:true}),captured:keyOf({onScrollCapture:true})}},submit:{phasedRegistrationNames:{bubbled:keyOf({onSubmit:true}),captured:keyOf({onSubmitCapture:true})}},touchCancel:{phasedRegistrationNames:{bubbled:keyOf({onTouchCancel:true}),captured:keyOf({onTouchCancelCapture:true})}},touchEnd:{phasedRegistrationNames:{bubbled:keyOf({onTouchEnd:true}),captured:keyOf({onTouchEndCapture:true})}},touchMove:{phasedRegistrationNames:{bubbled:keyOf({onTouchMove:true}),captured:keyOf({onTouchMoveCapture:true})}},touchStart:{phasedRegistrationNames:{bubbled:keyOf({onTouchStart:true}),captured:keyOf({onTouchStartCapture:true})}},wheel:{phasedRegistrationNames:{bubbled:keyOf({onWheel:true}),captured:keyOf({onWheelCapture:true})}}};var topLevelEventsToDispatchConfig={topBlur:eventTypes.blur,topClick:eventTypes.click,topContextMenu:eventTypes.contextMenu,topCopy:eventTypes.copy,topCut:eventTypes.cut,topDoubleClick:eventTypes.doubleClick,topDrag:eventTypes.drag,topDragEnd:eventTypes.dragEnd,topDragEnter:eventTypes.dragEnter,topDragExit:eventTypes.dragExit,topDragLeave:eventTypes.dragLeave,topDragOver:eventTypes.dragOver,topDragStart:eventTypes.dragStart,topDrop:eventTypes.drop,topError:eventTypes.error,topFocus:eventTypes.focus,topInput:eventTypes.input,topKeyDown:eventTypes.keyDown,topKeyPress:eventTypes.keyPress,topKeyUp:eventTypes.keyUp,topLoad:eventTypes.load,topMouseDown:eventTypes.mouseDown,topMouseMove:eventTypes.mouseMove,topMouseOut:eventTypes.mouseOut,topMouseOver:eventTypes.mouseOver,topMouseUp:eventTypes.mouseUp,topPaste:eventTypes.paste,topReset:eventTypes.reset,topScroll:eventTypes.scroll,topSubmit:eventTypes.submit,topTouchCancel:eventTypes.touchCancel,topTouchEnd:eventTypes.touchEnd,topTouchMove:eventTypes.touchMove,topTouchStart:eventTypes.touchStart,topWheel:eventTypes.wheel};for(var type in topLevelEventsToDispatchConfig) {topLevelEventsToDispatchConfig[type].dependencies = [type];}var SimpleEventPlugin={eventTypes:eventTypes, /**
   * Same as the default implementation, except cancels the event when return
   * value is false. This behavior will be disabled in a future release.
   *
   * @param {object} Event to be dispatched.
   * @param {function} Application-level callback.
   * @param {string} domID DOM ID to pass to the callback.
   */executeDispatch:function executeDispatch(event,listener,domID){var returnValue=EventPluginUtils.executeDispatch(event,listener,domID);"production" !== "development"?warning(typeof returnValue !== 'boolean','Returning `false` from an event handler is deprecated and will be ' + 'ignored in a future release. Instead, manually call ' + 'e.stopPropagation() or e.preventDefault(), as appropriate.'):null;if(returnValue === false){event.stopPropagation();event.preventDefault();}}, /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */extractEvents:function extractEvents(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent){var dispatchConfig=topLevelEventsToDispatchConfig[topLevelType];if(!dispatchConfig){return null;}var EventConstructor;switch(topLevelType){case topLevelTypes.topInput:case topLevelTypes.topLoad:case topLevelTypes.topError:case topLevelTypes.topReset:case topLevelTypes.topSubmit: // HTML Events
// @see http://www.w3.org/TR/html5/index.html#events-0
EventConstructor = SyntheticEvent;break;case topLevelTypes.topKeyPress: // FireFox creates a keypress event for function keys too. This removes
// the unwanted keypress events. Enter is however both printable and
// non-printable. One would expect Tab to be as well (but it isn't).
if(getEventCharCode(nativeEvent) === 0){return null;} /* falls through */case topLevelTypes.topKeyDown:case topLevelTypes.topKeyUp:EventConstructor = SyntheticKeyboardEvent;break;case topLevelTypes.topBlur:case topLevelTypes.topFocus:EventConstructor = SyntheticFocusEvent;break;case topLevelTypes.topClick: // Firefox creates a click event on right mouse clicks. This removes the
// unwanted click events.
if(nativeEvent.button === 2){return null;} /* falls through */case topLevelTypes.topContextMenu:case topLevelTypes.topDoubleClick:case topLevelTypes.topMouseDown:case topLevelTypes.topMouseMove:case topLevelTypes.topMouseOut:case topLevelTypes.topMouseOver:case topLevelTypes.topMouseUp:EventConstructor = SyntheticMouseEvent;break;case topLevelTypes.topDrag:case topLevelTypes.topDragEnd:case topLevelTypes.topDragEnter:case topLevelTypes.topDragExit:case topLevelTypes.topDragLeave:case topLevelTypes.topDragOver:case topLevelTypes.topDragStart:case topLevelTypes.topDrop:EventConstructor = SyntheticDragEvent;break;case topLevelTypes.topTouchCancel:case topLevelTypes.topTouchEnd:case topLevelTypes.topTouchMove:case topLevelTypes.topTouchStart:EventConstructor = SyntheticTouchEvent;break;case topLevelTypes.topScroll:EventConstructor = SyntheticUIEvent;break;case topLevelTypes.topWheel:EventConstructor = SyntheticWheelEvent;break;case topLevelTypes.topCopy:case topLevelTypes.topCut:case topLevelTypes.topPaste:EventConstructor = SyntheticClipboardEvent;break;}"production" !== "development"?invariant(EventConstructor,'SimpleEventPlugin: Unhandled event type, `%s`.',topLevelType):invariant(EventConstructor);var event=EventConstructor.getPooled(dispatchConfig,topLevelTargetID,nativeEvent);EventPropagators.accumulateTwoPhaseDispatches(event);return event;}};module.exports = SimpleEventPlugin;},{"100":100,"101":101,"102":102,"122":122,"135":135,"141":141,"15":15,"154":154,"19":19,"20":20,"92":92,"94":94,"95":95,"96":96,"98":98,"99":99}],92:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticClipboardEvent
 * @typechecks static-only
 */'use strict';var SyntheticEvent=_dereq_(95); /**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */var ClipboardEventInterface={clipboardData:function clipboardData(event){return 'clipboardData' in event?event.clipboardData:window.clipboardData;}}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticClipboardEvent(dispatchConfig,dispatchMarker,nativeEvent){SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent);}SyntheticEvent.augmentClass(SyntheticClipboardEvent,ClipboardEventInterface);module.exports = SyntheticClipboardEvent;},{"95":95}],93:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticCompositionEvent
 * @typechecks static-only
 */'use strict';var SyntheticEvent=_dereq_(95); /**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */var CompositionEventInterface={data:null}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticCompositionEvent(dispatchConfig,dispatchMarker,nativeEvent){SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent);}SyntheticEvent.augmentClass(SyntheticCompositionEvent,CompositionEventInterface);module.exports = SyntheticCompositionEvent;},{"95":95}],94:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticDragEvent
 * @typechecks static-only
 */'use strict';var SyntheticMouseEvent=_dereq_(99); /**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var DragEventInterface={dataTransfer:null}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticDragEvent(dispatchConfig,dispatchMarker,nativeEvent){SyntheticMouseEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent);}SyntheticMouseEvent.augmentClass(SyntheticDragEvent,DragEventInterface);module.exports = SyntheticDragEvent;},{"99":99}],95:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticEvent
 * @typechecks static-only
 */'use strict';var PooledClass=_dereq_(28);var assign=_dereq_(27);var emptyFunction=_dereq_(114);var getEventTarget=_dereq_(125); /**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var EventInterface={type:null,target:getEventTarget, // currentTarget is set when dispatching; no use in copying it here
currentTarget:emptyFunction.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function timeStamp(event){return event.timeStamp || Date.now();},defaultPrevented:null,isTrusted:null}; /**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 */function SyntheticEvent(dispatchConfig,dispatchMarker,nativeEvent){this.dispatchConfig = dispatchConfig;this.dispatchMarker = dispatchMarker;this.nativeEvent = nativeEvent;var Interface=this.constructor.Interface;for(var propName in Interface) {if(!Interface.hasOwnProperty(propName)){continue;}var normalize=Interface[propName];if(normalize){this[propName] = normalize(nativeEvent);}else {this[propName] = nativeEvent[propName];}}var defaultPrevented=nativeEvent.defaultPrevented != null?nativeEvent.defaultPrevented:nativeEvent.returnValue === false;if(defaultPrevented){this.isDefaultPrevented = emptyFunction.thatReturnsTrue;}else {this.isDefaultPrevented = emptyFunction.thatReturnsFalse;}this.isPropagationStopped = emptyFunction.thatReturnsFalse;}assign(SyntheticEvent.prototype,{preventDefault:function preventDefault(){this.defaultPrevented = true;var event=this.nativeEvent;if(event.preventDefault){event.preventDefault();}else {event.returnValue = false;}this.isDefaultPrevented = emptyFunction.thatReturnsTrue;},stopPropagation:function stopPropagation(){var event=this.nativeEvent;if(event.stopPropagation){event.stopPropagation();}else {event.cancelBubble = true;}this.isPropagationStopped = emptyFunction.thatReturnsTrue;}, /**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */persist:function persist(){this.isPersistent = emptyFunction.thatReturnsTrue;}, /**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */isPersistent:emptyFunction.thatReturnsFalse, /**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */destructor:function destructor(){var Interface=this.constructor.Interface;for(var propName in Interface) {this[propName] = null;}this.dispatchConfig = null;this.dispatchMarker = null;this.nativeEvent = null;}});SyntheticEvent.Interface = EventInterface; /**
 * Helper to reduce boilerplate when creating subclasses.
 *
 * @param {function} Class
 * @param {?object} Interface
 */SyntheticEvent.augmentClass = function(Class,Interface){var Super=this;var prototype=Object.create(Super.prototype);assign(prototype,Class.prototype);Class.prototype = prototype;Class.prototype.constructor = Class;Class.Interface = assign({},Super.Interface,Interface);Class.augmentClass = Super.augmentClass;PooledClass.addPoolingTo(Class,PooledClass.threeArgumentPooler);};PooledClass.addPoolingTo(SyntheticEvent,PooledClass.threeArgumentPooler);module.exports = SyntheticEvent;},{"114":114,"125":125,"27":27,"28":28}],96:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticFocusEvent
 * @typechecks static-only
 */'use strict';var SyntheticUIEvent=_dereq_(101); /**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var FocusEventInterface={relatedTarget:null}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticFocusEvent(dispatchConfig,dispatchMarker,nativeEvent){SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent);}SyntheticUIEvent.augmentClass(SyntheticFocusEvent,FocusEventInterface);module.exports = SyntheticFocusEvent;},{"101":101}],97:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticInputEvent
 * @typechecks static-only
 */'use strict';var SyntheticEvent=_dereq_(95); /**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */var InputEventInterface={data:null}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticInputEvent(dispatchConfig,dispatchMarker,nativeEvent){SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent);}SyntheticEvent.augmentClass(SyntheticInputEvent,InputEventInterface);module.exports = SyntheticInputEvent;},{"95":95}],98:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticKeyboardEvent
 * @typechecks static-only
 */'use strict';var SyntheticUIEvent=_dereq_(101);var getEventCharCode=_dereq_(122);var getEventKey=_dereq_(123);var getEventModifierState=_dereq_(124); /**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var KeyboardEventInterface={key:getEventKey,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:getEventModifierState, // Legacy Interface
charCode:function charCode(event){ // `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
if(event.type === 'keypress'){return getEventCharCode(event);}return 0;},keyCode:function keyCode(event){ // `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
if(event.type === 'keydown' || event.type === 'keyup'){return event.keyCode;}return 0;},which:function which(event){ // `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
if(event.type === 'keypress'){return getEventCharCode(event);}if(event.type === 'keydown' || event.type === 'keyup'){return event.keyCode;}return 0;}}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticKeyboardEvent(dispatchConfig,dispatchMarker,nativeEvent){SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent);}SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent,KeyboardEventInterface);module.exports = SyntheticKeyboardEvent;},{"101":101,"122":122,"123":123,"124":124}],99:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticMouseEvent
 * @typechecks static-only
 */'use strict';var SyntheticUIEvent=_dereq_(101);var ViewportMetrics=_dereq_(104);var getEventModifierState=_dereq_(124); /**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var MouseEventInterface={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:getEventModifierState,button:function button(event){ // Webkit, Firefox, IE9+
// which:  1 2 3
// button: 0 1 2 (standard)
var button=event.button;if('which' in event){return button;} // IE<9
// which:  undefined
// button: 0 0 0
// button: 1 4 2 (onmouseup)
return button === 2?2:button === 4?1:0;},buttons:null,relatedTarget:function relatedTarget(event){return event.relatedTarget || (event.fromElement === event.srcElement?event.toElement:event.fromElement);}, // "Proprietary" Interface.
pageX:function pageX(event){return 'pageX' in event?event.pageX:event.clientX + ViewportMetrics.currentScrollLeft;},pageY:function pageY(event){return 'pageY' in event?event.pageY:event.clientY + ViewportMetrics.currentScrollTop;}}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticMouseEvent(dispatchConfig,dispatchMarker,nativeEvent){SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent);}SyntheticUIEvent.augmentClass(SyntheticMouseEvent,MouseEventInterface);module.exports = SyntheticMouseEvent;},{"101":101,"104":104,"124":124}],100:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticTouchEvent
 * @typechecks static-only
 */'use strict';var SyntheticUIEvent=_dereq_(101);var getEventModifierState=_dereq_(124); /**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */var TouchEventInterface={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:getEventModifierState}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticTouchEvent(dispatchConfig,dispatchMarker,nativeEvent){SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent);}SyntheticUIEvent.augmentClass(SyntheticTouchEvent,TouchEventInterface);module.exports = SyntheticTouchEvent;},{"101":101,"124":124}],101:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticUIEvent
 * @typechecks static-only
 */'use strict';var SyntheticEvent=_dereq_(95);var getEventTarget=_dereq_(125); /**
 * @interface UIEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var UIEventInterface={view:function view(event){if(event.view){return event.view;}var target=getEventTarget(event);if(target != null && target.window === target){ // target is a window object
return target;}var doc=target.ownerDocument; // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
if(doc){return doc.defaultView || doc.parentWindow;}else {return window;}},detail:function detail(event){return event.detail || 0;}}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */function SyntheticUIEvent(dispatchConfig,dispatchMarker,nativeEvent){SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent);}SyntheticEvent.augmentClass(SyntheticUIEvent,UIEventInterface);module.exports = SyntheticUIEvent;},{"125":125,"95":95}],102:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticWheelEvent
 * @typechecks static-only
 */'use strict';var SyntheticMouseEvent=_dereq_(99); /**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var WheelEventInterface={deltaX:function deltaX(event){return 'deltaX' in event?event.deltaX: // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
'wheelDeltaX' in event?-event.wheelDeltaX:0;},deltaY:function deltaY(event){return 'deltaY' in event?event.deltaY: // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
'wheelDeltaY' in event?-event.wheelDeltaY: // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
'wheelDelta' in event?-event.wheelDelta:0;},deltaZ:null, // Browsers without "deltaMode" is reporting in raw wheel delta where one
// notch on the scroll is always +/- 120, roughly equivalent to pixels.
// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
deltaMode:null}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticMouseEvent}
 */function SyntheticWheelEvent(dispatchConfig,dispatchMarker,nativeEvent){SyntheticMouseEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent);}SyntheticMouseEvent.augmentClass(SyntheticWheelEvent,WheelEventInterface);module.exports = SyntheticWheelEvent;},{"99":99}],103:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Transaction
 */'use strict';var invariant=_dereq_(135); /**
 * `Transaction` creates a black box that is able to wrap any method such that
 * certain invariants are maintained before and after the method is invoked
 * (Even if an exception is thrown while invoking the wrapped method). Whoever
 * instantiates a transaction can provide enforcers of the invariants at
 * creation time. The `Transaction` class itself will supply one additional
 * automatic invariant for you - the invariant that any transaction instance
 * should not be run while it is already being run. You would typically create a
 * single instance of a `Transaction` for reuse multiple times, that potentially
 * is used to wrap several different methods. Wrappers are extremely simple -
 * they only require implementing two methods.
 *
 * <pre>
 *                       wrappers (injected at creation time)
 *                                      +        +
 *                                      |        |
 *                    +-----------------|--------|--------------+
 *                    |                 v        |              |
 *                    |      +---------------+   |              |
 *                    |   +--|    wrapper1   |---|----+         |
 *                    |   |  +---------------+   v    |         |
 *                    |   |          +-------------+  |         |
 *                    |   |     +----|   wrapper2  |--------+   |
 *                    |   |     |    +-------------+  |     |   |
 *                    |   |     |                     |     |   |
 *                    |   v     v                     v     v   | wrapper
 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | +---+ +---+   +---------+   +---+ +---+ |
 *                    |  initialize                    close    |
 *                    +-----------------------------------------+
 * </pre>
 *
 * Use cases:
 * - Preserving the input selection ranges before/after reconciliation.
 *   Restoring selection even in the event of an unexpected error.
 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
 *   while guaranteeing that afterwards, the event system is reactivated.
 * - Flushing a queue of collected DOM mutations to the main UI thread after a
 *   reconciliation takes place in a worker thread.
 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
 *   content.
 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
 * - (Future use case): Layout calculations before and after DOM updates.
 *
 * Transactional plugin API:
 * - A module that has an `initialize` method that returns any precomputation.
 * - and a `close` method that accepts the precomputation. `close` is invoked
 *   when the wrapped process is completed, or has failed.
 *
 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
 * that implement `initialize` and `close`.
 * @return {Transaction} Single transaction for reuse in thread.
 *
 * @class Transaction
 */var Mixin={ /**
   * Sets up this instance so that it is prepared for collecting metrics. Does
   * so such that this setup method may be used on an instance that is already
   * initialized, in a way that does not consume additional memory upon reuse.
   * That can be useful if you decide to make your subclass of this mixin a
   * "PooledClass".
   */reinitializeTransaction:function reinitializeTransaction(){this.transactionWrappers = this.getTransactionWrappers();if(!this.wrapperInitData){this.wrapperInitData = [];}else {this.wrapperInitData.length = 0;}this._isInTransaction = false;},_isInTransaction:false, /**
   * @abstract
   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
   */getTransactionWrappers:null,isInTransaction:function isInTransaction(){return !!this._isInTransaction;}, /**
   * Executes the function within a safety window. Use this for the top level
   * methods that result in large amounts of computation/mutations that would
   * need to be safety checked.
   *
   * @param {function} method Member of scope to call.
   * @param {Object} scope Scope to invoke from.
   * @param {Object?=} args... Arguments to pass to the method (optional).
   *                           Helps prevent need to bind in many cases.
   * @return Return value from `method`.
   */perform:function perform(method,scope,a,b,c,d,e,f){"production" !== "development"?invariant(!this.isInTransaction(),'Transaction.perform(...): Cannot initialize a transaction when there ' + 'is already an outstanding transaction.'):invariant(!this.isInTransaction());var errorThrown;var ret;try{this._isInTransaction = true; // Catching errors makes debugging more difficult, so we start with
// errorThrown set to true before setting it to false after calling
// close -- if it's still set to true in the finally block, it means
// one of these calls threw.
errorThrown = true;this.initializeAll(0);ret = method.call(scope,a,b,c,d,e,f);errorThrown = false;}finally {try{if(errorThrown){ // If `method` throws, prefer to show that stack trace over any thrown
// by invoking `closeAll`.
try{this.closeAll(0);}catch(err) {}}else { // Since `method` didn't throw, we don't want to silence the exception
// here.
this.closeAll(0);}}finally {this._isInTransaction = false;}}return ret;},initializeAll:function initializeAll(startIndex){var transactionWrappers=this.transactionWrappers;for(var i=startIndex;i < transactionWrappers.length;i++) {var wrapper=transactionWrappers[i];try{ // Catching errors makes debugging more difficult, so we start with the
// OBSERVED_ERROR state before overwriting it with the real return value
// of initialize -- if it's still set to OBSERVED_ERROR in the finally
// block, it means wrapper.initialize threw.
this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;this.wrapperInitData[i] = wrapper.initialize?wrapper.initialize.call(this):null;}finally {if(this.wrapperInitData[i] === Transaction.OBSERVED_ERROR){ // The initializer for wrapper i threw an error; initialize the
// remaining wrappers but silence any exceptions from them to ensure
// that the first error is the one to bubble up.
try{this.initializeAll(i + 1);}catch(err) {}}}}}, /**
   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
   * them the respective return values of `this.transactionWrappers.init[i]`
   * (`close`rs that correspond to initializers that failed will not be
   * invoked).
   */closeAll:function closeAll(startIndex){"production" !== "development"?invariant(this.isInTransaction(),'Transaction.closeAll(): Cannot close transaction when none are open.'):invariant(this.isInTransaction());var transactionWrappers=this.transactionWrappers;for(var i=startIndex;i < transactionWrappers.length;i++) {var wrapper=transactionWrappers[i];var initData=this.wrapperInitData[i];var errorThrown;try{ // Catching errors makes debugging more difficult, so we start with
// errorThrown set to true before setting it to false after calling
// close -- if it's still set to true in the finally block, it means
// wrapper.close threw.
errorThrown = true;if(initData !== Transaction.OBSERVED_ERROR && wrapper.close){wrapper.close.call(this,initData);}errorThrown = false;}finally {if(errorThrown){ // The closer for wrapper i threw an error; close the remaining
// wrappers but silence any exceptions from them to ensure that the
// first error is the one to bubble up.
try{this.closeAll(i + 1);}catch(e) {}}}}this.wrapperInitData.length = 0;}};var Transaction={Mixin:Mixin, /**
   * Token to look for to determine if an error occured.
   */OBSERVED_ERROR:{}};module.exports = Transaction;},{"135":135}],104:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ViewportMetrics
 */'use strict';var ViewportMetrics={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function refreshScrollValues(scrollPosition){ViewportMetrics.currentScrollLeft = scrollPosition.x;ViewportMetrics.currentScrollTop = scrollPosition.y;}};module.exports = ViewportMetrics;},{}],105:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule accumulateInto
 */'use strict';var invariant=_dereq_(135); /**
 *
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */function accumulateInto(current,next){"production" !== "development"?invariant(next != null,'accumulateInto(...): Accumulated items must not be null or undefined.'):invariant(next != null);if(current == null){return next;} // Both are not empty. Warning: Never call x.concat(y) when you are not
// certain that x is an Array (x could be a string with concat method).
var currentIsArray=Array.isArray(current);var nextIsArray=Array.isArray(next);if(currentIsArray && nextIsArray){current.push.apply(current,next);return current;}if(currentIsArray){current.push(next);return current;}if(nextIsArray){ // A bit too dangerous to mutate `next`.
return [current].concat(next);}return [current,next];}module.exports = accumulateInto;},{"135":135}],106:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule adler32
 */ /* jslint bitwise:true */'use strict';var MOD=65521; // This is a clean-room implementation of adler32 designed for detecting
// if markup is not what we expect it to be. It does not need to be
// cryptographically strong, only reasonably good at detecting if markup
// generated on the server is different than that on the client.
function adler32(data){var a=1;var b=0;for(var i=0;i < data.length;i++) {a = (a + data.charCodeAt(i)) % MOD;b = (b + a) % MOD;}return a | b << 16;}module.exports = adler32;},{}],107:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule camelize
 * @typechecks
 */var _hyphenPattern=/-(.)/g; /**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */function camelize(string){return string.replace(_hyphenPattern,function(_,character){return character.toUpperCase();});}module.exports = camelize;},{}],108:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule camelizeStyleName
 * @typechecks
 */"use strict";var camelize=_dereq_(107);var msPattern=/^-ms-/; /**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */function camelizeStyleName(string){return camelize(string.replace(msPattern,'ms-'));}module.exports = camelizeStyleName;},{"107":107}],109:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule containsNode
 * @typechecks
 */var isTextNode=_dereq_(139); /*jslint bitwise:true */ /**
 * Checks if a given DOM node contains or is another DOM node.
 *
 * @param {?DOMNode} outerNode Outer DOM node.
 * @param {?DOMNode} innerNode Inner DOM node.
 * @return {boolean} True if `outerNode` contains or is `innerNode`.
 */function containsNode(_x,_x2){var _again=true;_function: while(_again) {var outerNode=_x,innerNode=_x2;_again = false;if(!outerNode || !innerNode){return false;}else if(outerNode === innerNode){return true;}else if(isTextNode(outerNode)){return false;}else if(isTextNode(innerNode)){_x = outerNode;_x2 = innerNode.parentNode;_again = true;continue _function;}else if(outerNode.contains){return outerNode.contains(innerNode);}else if(outerNode.compareDocumentPosition){return !!(outerNode.compareDocumentPosition(innerNode) & 16);}else {return false;}}}module.exports = containsNode;},{"139":139}],110:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createArrayFromMixed
 * @typechecks
 */var toArray=_dereq_(152); /**
 * Perform a heuristic test to determine if an object is "array-like".
 *
 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
 *   Joshu replied: "Mu."
 *
 * This function determines if its argument has "array nature": it returns
 * true if the argument is an actual array, an `arguments' object, or an
 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
 *
 * It will return false for other array-like objects like Filelist.
 *
 * @param {*} obj
 * @return {boolean}
 */function hasArrayNature(obj){return  (// not null/false
!!obj && ( // arrays are objects, NodeLists are functions in Safari
typeof obj == 'object' || typeof obj == 'function') &&  // quacks like an array
'length' in obj &&  // not window
!('setInterval' in obj) &&  // no DOM node should be considered an array-like
// a 'select' element has 'length' and 'item' properties on IE8
typeof obj.nodeType != 'number' && ( // a real array
// HTMLCollection/NodeList
Array.isArray(obj) ||  // arguments
'callee' in obj || 'item' in obj));} /**
 * Ensure that the argument is an array by wrapping it in an array if it is not.
 * Creates a copy of the argument if it is already an array.
 *
 * This is mostly useful idiomatically:
 *
 *   var createArrayFromMixed = require('createArrayFromMixed');
 *
 *   function takesOneOrMoreThings(things) {
 *     things = createArrayFromMixed(things);
 *     ...
 *   }
 *
 * This allows you to treat `things' as an array, but accept scalars in the API.
 *
 * If you need to convert an array-like object, like `arguments`, into an array
 * use toArray instead.
 *
 * @param {*} obj
 * @return {array}
 */function createArrayFromMixed(obj){if(!hasArrayNature(obj)){return [obj];}else if(Array.isArray(obj)){return obj.slice();}else {return toArray(obj);}}module.exports = createArrayFromMixed;},{"152":152}],111:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createFullPageComponent
 * @typechecks
 */'use strict'; // Defeat circular references by requiring this directly.
var ReactClass=_dereq_(33);var ReactElement=_dereq_(57);var invariant=_dereq_(135); /**
 * Create a component that will throw an exception when unmounted.
 *
 * Components like <html> <head> and <body> can't be removed or added
 * easily in a cross-browser way, however it's valuable to be able to
 * take advantage of React's reconciliation for styling and <title>
 * management. So we just document it and throw in dangerous cases.
 *
 * @param {string} tag The tag to wrap
 * @return {function} convenience constructor of new component
 */function createFullPageComponent(tag){var elementFactory=ReactElement.createFactory(tag);var FullPageComponent=ReactClass.createClass({tagName:tag.toUpperCase(),displayName:'ReactFullPageComponent' + tag,componentWillUnmount:function componentWillUnmount(){"production" !== "development"?invariant(false,'%s tried to unmount. Because of cross-browser quirks it is ' + 'impossible to unmount some top-level components (eg <html>, <head>, ' + 'and <body>) reliably and efficiently. To fix this, have a single ' + 'top-level component that never unmounts render these elements.',this.constructor.displayName):invariant(false);},render:function render(){return elementFactory(this.props);}});return FullPageComponent;}module.exports = createFullPageComponent;},{"135":135,"33":33,"57":57}],112:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createNodesFromMarkup
 * @typechecks
 */ /*jslint evil: true, sub: true */var ExecutionEnvironment=_dereq_(21);var createArrayFromMixed=_dereq_(110);var getMarkupWrap=_dereq_(127);var invariant=_dereq_(135); /**
 * Dummy container used to render all markup.
 */var dummyNode=ExecutionEnvironment.canUseDOM?document.createElement('div'):null; /**
 * Pattern used by `getNodeName`.
 */var nodeNamePattern=/^\s*<(\w+)/; /**
 * Extracts the `nodeName` of the first element in a string of markup.
 *
 * @param {string} markup String of markup.
 * @return {?string} Node name of the supplied markup.
 */function getNodeName(markup){var nodeNameMatch=markup.match(nodeNamePattern);return nodeNameMatch && nodeNameMatch[1].toLowerCase();} /**
 * Creates an array containing the nodes rendered from the supplied markup. The
 * optionally supplied `handleScript` function will be invoked once for each
 * <script> element that is rendered. If no `handleScript` function is supplied,
 * an exception is thrown if any <script> elements are rendered.
 *
 * @param {string} markup A string of valid HTML markup.
 * @param {?function} handleScript Invoked once for each rendered <script>.
 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
 */function createNodesFromMarkup(markup,handleScript){var node=dummyNode;"production" !== "development"?invariant(!!dummyNode,'createNodesFromMarkup dummy not initialized'):invariant(!!dummyNode);var nodeName=getNodeName(markup);var wrap=nodeName && getMarkupWrap(nodeName);if(wrap){node.innerHTML = wrap[1] + markup + wrap[2];var wrapDepth=wrap[0];while(wrapDepth--) {node = node.lastChild;}}else {node.innerHTML = markup;}var scripts=node.getElementsByTagName('script');if(scripts.length){"production" !== "development"?invariant(handleScript,'createNodesFromMarkup(...): Unexpected <script> element rendered.'):invariant(handleScript);createArrayFromMixed(scripts).forEach(handleScript);}var nodes=createArrayFromMixed(node.childNodes);while(node.lastChild) {node.removeChild(node.lastChild);}return nodes;}module.exports = createNodesFromMarkup;},{"110":110,"127":127,"135":135,"21":21}],113:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 * @typechecks static-only
 */'use strict';var CSSProperty=_dereq_(4);var isUnitlessNumber=CSSProperty.isUnitlessNumber; /**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */function dangerousStyleValue(name,value){ // Note that we've removed escapeTextForBrowser() calls here since the
// whole string will be escaped when the attribute is injected into
// the markup. If you provide unsafe user data here they can inject
// arbitrary CSS which may be problematic (I couldn't repro this):
// https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
// http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
// This is not an XSS hole but instead a potential CSS injection issue
// which has lead to a greater discussion about how we're going to
// trust URLs moving forward. See #2115901
var isEmpty=value == null || typeof value === 'boolean' || value === '';if(isEmpty){return '';}var isNonNumeric=isNaN(value);if(isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]){return '' + value; // cast to string
}if(typeof value === 'string'){value = value.trim();}return value + 'px';}module.exports = dangerousStyleValue;},{"4":4}],114:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */function makeEmptyFunction(arg){return function(){return arg;};} /**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */function emptyFunction(){}emptyFunction.thatReturns = makeEmptyFunction;emptyFunction.thatReturnsFalse = makeEmptyFunction(false);emptyFunction.thatReturnsTrue = makeEmptyFunction(true);emptyFunction.thatReturnsNull = makeEmptyFunction(null);emptyFunction.thatReturnsThis = function(){return this;};emptyFunction.thatReturnsArgument = function(arg){return arg;};module.exports = emptyFunction;},{}],115:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyObject
 */"use strict";var emptyObject={};if("production" !== "development"){Object.freeze(emptyObject);}module.exports = emptyObject;},{}],116:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule escapeTextContentForBrowser
 */'use strict';var ESCAPE_LOOKUP={'&':'&amp;','>':'&gt;','<':'&lt;','"':'&quot;','\'':'&#x27;'};var ESCAPE_REGEX=/[&><"']/g;function escaper(match){return ESCAPE_LOOKUP[match];} /**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */function escapeTextContentForBrowser(text){return ('' + text).replace(ESCAPE_REGEX,escaper);}module.exports = escapeTextContentForBrowser;},{}],117:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule findDOMNode
 * @typechecks static-only
 */'use strict';var ReactCurrentOwner=_dereq_(39);var ReactInstanceMap=_dereq_(67);var ReactMount=_dereq_(70);var invariant=_dereq_(135);var isNode=_dereq_(137);var warning=_dereq_(154); /**
 * Returns the DOM node rendered by this element.
 *
 * @param {ReactComponent|DOMElement} componentOrElement
 * @return {DOMElement} The root node of this element.
 */function findDOMNode(componentOrElement){if("production" !== "development"){var owner=ReactCurrentOwner.current;if(owner !== null){"production" !== "development"?warning(owner._warnedAboutRefsInRender,'%s is accessing getDOMNode or findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.',owner.getName() || 'A component'):null;owner._warnedAboutRefsInRender = true;}}if(componentOrElement == null){return null;}if(isNode(componentOrElement)){return componentOrElement;}if(ReactInstanceMap.has(componentOrElement)){return ReactMount.getNodeFromInstance(componentOrElement);}"production" !== "development"?invariant(componentOrElement.render == null || typeof componentOrElement.render !== 'function','Component (with keys: %s) contains `render` method ' + 'but is not mounted in the DOM',Object.keys(componentOrElement)):invariant(componentOrElement.render == null || typeof componentOrElement.render !== 'function');"production" !== "development"?invariant(false,'Element appears to be neither ReactComponent nor DOMNode (keys: %s)',Object.keys(componentOrElement)):invariant(false);}module.exports = findDOMNode;},{"135":135,"137":137,"154":154,"39":39,"67":67,"70":70}],118:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule flattenChildren
 */'use strict';var traverseAllChildren=_dereq_(153);var warning=_dereq_(154); /**
 * @param {function} traverseContext Context passed through traversal.
 * @param {?ReactComponent} child React child component.
 * @param {!string} name String name of key path to child.
 */function flattenSingleChildIntoContext(traverseContext,child,name){ // We found a component instance.
var result=traverseContext;var keyUnique=!result.hasOwnProperty(name);if("production" !== "development"){"production" !== "development"?warning(keyUnique,'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.',name):null;}if(keyUnique && child != null){result[name] = child;}} /**
 * Flattens children that are typically specified as `props.children`. Any null
 * children will not be included in the resulting object.
 * @return {!object} flattened children keyed by name.
 */function flattenChildren(children){if(children == null){return children;}var result={};traverseAllChildren(children,flattenSingleChildIntoContext,result);return result;}module.exports = flattenChildren;},{"153":153,"154":154}],119:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule focusNode
 */"use strict"; /**
 * @param {DOMElement} node input/textarea to focus
 */function focusNode(node){ // IE8 can throw "Can't move focus to the control because it is invisible,
// not enabled, or of a type that does not accept the focus." for all kinds of
// reasons that are too expensive and fragile to test.
try{node.focus();}catch(e) {}}module.exports = focusNode;},{}],120:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule forEachAccumulated
 */'use strict'; /**
 * @param {array} an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 */var forEachAccumulated=function forEachAccumulated(arr,cb,scope){if(Array.isArray(arr)){arr.forEach(cb,scope);}else if(arr){cb.call(scope,arr);}};module.exports = forEachAccumulated;},{}],121:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getActiveElement
 * @typechecks
 */ /**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document body is not yet defined.
 */function getActiveElement() /*?DOMElement*/{try{return document.activeElement || document.body;}catch(e) {return document.body;}}module.exports = getActiveElement;},{}],122:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventCharCode
 * @typechecks static-only
 */'use strict'; /**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `charCode` property.
 */function getEventCharCode(nativeEvent){var charCode;var keyCode=nativeEvent.keyCode;if('charCode' in nativeEvent){charCode = nativeEvent.charCode; // FF does not set `charCode` for the Enter-key, check against `keyCode`.
if(charCode === 0 && keyCode === 13){charCode = 13;}}else { // IE8 does not implement `charCode`, but `keyCode` has the correct value.
charCode = keyCode;} // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
if(charCode >= 32 || charCode === 13){return charCode;}return 0;}module.exports = getEventCharCode;},{}],123:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventKey
 * @typechecks static-only
 */'use strict';var getEventCharCode=_dereq_(122); /**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */var normalizeKey={'Esc':'Escape','Spacebar':' ','Left':'ArrowLeft','Up':'ArrowUp','Right':'ArrowRight','Down':'ArrowDown','Del':'Delete','Win':'OS','Menu':'ContextMenu','Apps':'ContextMenu','Scroll':'ScrollLock','MozPrintableKey':'Unidentified'}; /**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */var translateToKey={8:'Backspace',9:'Tab',12:'Clear',13:'Enter',16:'Shift',17:'Control',18:'Alt',19:'Pause',20:'CapsLock',27:'Escape',32:' ',33:'PageUp',34:'PageDown',35:'End',36:'Home',37:'ArrowLeft',38:'ArrowUp',39:'ArrowRight',40:'ArrowDown',45:'Insert',46:'Delete',112:'F1',113:'F2',114:'F3',115:'F4',116:'F5',117:'F6',118:'F7',119:'F8',120:'F9',121:'F10',122:'F11',123:'F12',144:'NumLock',145:'ScrollLock',224:'Meta'}; /**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */function getEventKey(nativeEvent){if(nativeEvent.key){ // Normalize inconsistent values reported by browsers due to
// implementations of a working draft specification.
// FireFox implements `key` but returns `MozPrintableKey` for all
// printable characters (normalized to `Unidentified`), ignore it.
var key=normalizeKey[nativeEvent.key] || nativeEvent.key;if(key !== 'Unidentified'){return key;}} // Browser does not implement `key`, polyfill as much of it as we can.
if(nativeEvent.type === 'keypress'){var charCode=getEventCharCode(nativeEvent); // The enter-key is technically both printable and non-printable and can
// thus be captured by `keypress`, no other non-printable key should.
return charCode === 13?'Enter':String.fromCharCode(charCode);}if(nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup'){ // While user keyboard layout determines the actual meaning of each
// `keyCode` value, almost all function keys have a universal value.
return translateToKey[nativeEvent.keyCode] || 'Unidentified';}return '';}module.exports = getEventKey;},{"122":122}],124:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventModifierState
 * @typechecks static-only
 */'use strict'; /**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */var modifierKeyToProp={'Alt':'altKey','Control':'ctrlKey','Meta':'metaKey','Shift':'shiftKey'}; // IE8 does not implement getModifierState so we simply map it to the only
// modifier keys exposed by the event itself, does not support Lock-keys.
// Currently, all major browsers except Chrome seems to support Lock-keys.
function modifierStateGetter(keyArg){ /*jshint validthis:true */var syntheticEvent=this;var nativeEvent=syntheticEvent.nativeEvent;if(nativeEvent.getModifierState){return nativeEvent.getModifierState(keyArg);}var keyProp=modifierKeyToProp[keyArg];return keyProp?!!nativeEvent[keyProp]:false;}function getEventModifierState(nativeEvent){return modifierStateGetter;}module.exports = getEventModifierState;},{}],125:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventTarget
 * @typechecks static-only
 */'use strict'; /**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */function getEventTarget(nativeEvent){var target=nativeEvent.target || nativeEvent.srcElement || window; // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
// @see http://www.quirksmode.org/js/events_properties.html
return target.nodeType === 3?target.parentNode:target;}module.exports = getEventTarget;},{}],126:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getIteratorFn
 * @typechecks static-only
 */'use strict'; /* global Symbol */var ITERATOR_SYMBOL=typeof Symbol === 'function' && Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator'; // Before Symbol spec.
/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */function getIteratorFn(maybeIterable){var iteratorFn=maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);if(typeof iteratorFn === 'function'){return iteratorFn;}}module.exports = getIteratorFn;},{}],127:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getMarkupWrap
 */var ExecutionEnvironment=_dereq_(21);var invariant=_dereq_(135); /**
 * Dummy container used to detect which wraps are necessary.
 */var dummyNode=ExecutionEnvironment.canUseDOM?document.createElement('div'):null; /**
 * Some browsers cannot use `innerHTML` to render certain elements standalone,
 * so we wrap them, render the wrapped nodes, then extract the desired node.
 *
 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
 */var shouldWrap={ // Force wrapping for SVG elements because if they get created inside a <div>,
// they will be initialized in the wrong namespace (and will not display).
'circle':true,'clipPath':true,'defs':true,'ellipse':true,'g':true,'line':true,'linearGradient':true,'path':true,'polygon':true,'polyline':true,'radialGradient':true,'rect':true,'stop':true,'text':true};var selectWrap=[1,'<select multiple="true">','</select>'];var tableWrap=[1,'<table>','</table>'];var trWrap=[3,'<table><tbody><tr>','</tr></tbody></table>'];var svgWrap=[1,'<svg>','</svg>'];var markupWrap={'*':[1,'?<div>','</div>'],'area':[1,'<map>','</map>'],'col':[2,'<table><tbody></tbody><colgroup>','</colgroup></table>'],'legend':[1,'<fieldset>','</fieldset>'],'param':[1,'<object>','</object>'],'tr':[2,'<table><tbody>','</tbody></table>'],'optgroup':selectWrap,'option':selectWrap,'caption':tableWrap,'colgroup':tableWrap,'tbody':tableWrap,'tfoot':tableWrap,'thead':tableWrap,'td':trWrap,'th':trWrap,'circle':svgWrap,'clipPath':svgWrap,'defs':svgWrap,'ellipse':svgWrap,'g':svgWrap,'line':svgWrap,'linearGradient':svgWrap,'path':svgWrap,'polygon':svgWrap,'polyline':svgWrap,'radialGradient':svgWrap,'rect':svgWrap,'stop':svgWrap,'text':svgWrap}; /**
 * Gets the markup wrap configuration for the supplied `nodeName`.
 *
 * NOTE: This lazily detects which wraps are necessary for the current browser.
 *
 * @param {string} nodeName Lowercase `nodeName`.
 * @return {?array} Markup wrap configuration, if applicable.
 */function getMarkupWrap(nodeName){"production" !== "development"?invariant(!!dummyNode,'Markup wrapping node not initialized'):invariant(!!dummyNode);if(!markupWrap.hasOwnProperty(nodeName)){nodeName = '*';}if(!shouldWrap.hasOwnProperty(nodeName)){if(nodeName === '*'){dummyNode.innerHTML = '<link />';}else {dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';}shouldWrap[nodeName] = !dummyNode.firstChild;}return shouldWrap[nodeName]?markupWrap[nodeName]:null;}module.exports = getMarkupWrap;},{"135":135,"21":21}],128:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getNodeForCharacterOffset
 */'use strict'; /**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */function getLeafNode(node){while(node && node.firstChild) {node = node.firstChild;}return node;} /**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */function getSiblingNode(node){while(node) {if(node.nextSibling){return node.nextSibling;}node = node.parentNode;}} /**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */function getNodeForCharacterOffset(root,offset){var node=getLeafNode(root);var nodeStart=0;var nodeEnd=0;while(node) {if(node.nodeType === 3){nodeEnd = nodeStart + node.textContent.length;if(nodeStart <= offset && nodeEnd >= offset){return {node:node,offset:offset - nodeStart};}nodeStart = nodeEnd;}node = getLeafNode(getSiblingNode(node));}}module.exports = getNodeForCharacterOffset;},{}],129:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getReactRootElementInContainer
 */'use strict';var DOC_NODE_TYPE=9; /**
 * @param {DOMElement|DOMDocument} container DOM element that may contain
 *                                           a React component
 * @return {?*} DOM element that may have the reactRoot ID, or null.
 */function getReactRootElementInContainer(container){if(!container){return null;}if(container.nodeType === DOC_NODE_TYPE){return container.documentElement;}else {return container.firstChild;}}module.exports = getReactRootElementInContainer;},{}],130:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getTextContentAccessor
 */'use strict';var ExecutionEnvironment=_dereq_(21);var contentKey=null; /**
 * Gets the key used to access text content on a DOM node.
 *
 * @return {?string} Key used to access text content.
 * @internal
 */function getTextContentAccessor(){if(!contentKey && ExecutionEnvironment.canUseDOM){ // Prefer textContent to innerText because many browsers support both but
// SVG <text> elements don't support innerText even when <div> does.
contentKey = 'textContent' in document.documentElement?'textContent':'innerText';}return contentKey;}module.exports = getTextContentAccessor;},{"21":21}],131:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getUnboundedScrollPosition
 * @typechecks
 */"use strict"; /**
 * Gets the scroll position of the supplied element or window.
 *
 * The return values are unbounded, unlike `getScrollPosition`. This means they
 * may be negative or exceed the element boundaries (which is possible using
 * inertial scrolling).
 *
 * @param {DOMWindow|DOMElement} scrollable
 * @return {object} Map with `x` and `y` keys.
 */function getUnboundedScrollPosition(scrollable){if(scrollable === window){return {x:window.pageXOffset || document.documentElement.scrollLeft,y:window.pageYOffset || document.documentElement.scrollTop};}return {x:scrollable.scrollLeft,y:scrollable.scrollTop};}module.exports = getUnboundedScrollPosition;},{}],132:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule hyphenate
 * @typechecks
 */var _uppercasePattern=/([A-Z])/g; /**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */function hyphenate(string){return string.replace(_uppercasePattern,'-$1').toLowerCase();}module.exports = hyphenate;},{}],133:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule hyphenateStyleName
 * @typechecks
 */"use strict";var hyphenate=_dereq_(132);var msPattern=/^ms-/; /**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */function hyphenateStyleName(string){return hyphenate(string).replace(msPattern,'-ms-');}module.exports = hyphenateStyleName;},{"132":132}],134:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule instantiateReactComponent
 * @typechecks static-only
 */'use strict';var ReactCompositeComponent=_dereq_(37);var ReactEmptyComponent=_dereq_(59);var ReactNativeComponent=_dereq_(73);var assign=_dereq_(27);var invariant=_dereq_(135);var warning=_dereq_(154); // To avoid a cyclic dependency, we create the final class in this module
var ReactCompositeComponentWrapper=function ReactCompositeComponentWrapper(){};assign(ReactCompositeComponentWrapper.prototype,ReactCompositeComponent.Mixin,{_instantiateReactComponent:instantiateReactComponent}); /**
 * Check if the type reference is a known internal type. I.e. not a user
 * provided composite type.
 *
 * @param {function} type
 * @return {boolean} Returns true if this is a valid internal type.
 */function isInternalComponentType(type){return typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function';} /**
 * Given a ReactNode, create an instance that will actually be mounted.
 *
 * @param {ReactNode} node
 * @param {*} parentCompositeType The composite type that resolved this.
 * @return {object} A new instance of the element's constructor.
 * @protected
 */function instantiateReactComponent(node,parentCompositeType){var instance;if(node === null || node === false){node = ReactEmptyComponent.emptyElement;}if(typeof node === 'object'){var element=node;if("production" !== "development"){"production" !== "development"?warning(element && (typeof element.type === 'function' || typeof element.type === 'string'),'Only functions or strings can be mounted as React components.'):null;} // Special case string values
if(parentCompositeType === element.type && typeof element.type === 'string'){ // Avoid recursion if the wrapper renders itself.
instance = ReactNativeComponent.createInternalComponent(element); // All native components are currently wrapped in a composite so we're
// safe to assume that this is what we should instantiate.
}else if(isInternalComponentType(element.type)){ // This is temporarily available for custom components that are not string
// represenations. I.e. ART. Once those are updated to use the string
// representation, we can drop this code path.
instance = new element.type(element);}else {instance = new ReactCompositeComponentWrapper();}}else if(typeof node === 'string' || typeof node === 'number'){instance = ReactNativeComponent.createInstanceForText(node);}else {"production" !== "development"?invariant(false,'Encountered invalid React node of type %s',typeof node):invariant(false);}if("production" !== "development"){"production" !== "development"?warning(typeof instance.construct === 'function' && typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.unmountComponent === 'function','Only React Components can be mounted.'):null;} // Sets up the instance. This can probably just move into the constructor now.
instance.construct(node); // These two fields are used by the DOM and ART diffing algorithms
// respectively. Instead of using expandos on components, we should be
// storing the state needed by the diffing algorithms elsewhere.
instance._mountIndex = 0;instance._mountImage = null;if("production" !== "development"){instance._isOwnerNecessary = false;instance._warnedAboutRefsInRender = false;} // Internal instances should fully constructed at this point, so they should
// not get any new fields added to them at this point.
if("production" !== "development"){if(Object.preventExtensions){Object.preventExtensions(instance);}}return instance;}module.exports = instantiateReactComponent;},{"135":135,"154":154,"27":27,"37":37,"59":59,"73":73}],135:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */"use strict"; /**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */var invariant=function invariant(condition,format,a,b,c,d,e,f){if("production" !== "development"){if(format === undefined){throw new Error('invariant requires an error message argument');}}if(!condition){var error;if(format === undefined){error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');}else {var args=[a,b,c,d,e,f];var argIndex=0;error = new Error('Invariant Violation: ' + format.replace(/%s/g,function(){return args[argIndex++];}));}error.framesToPop = 1; // we don't care about invariant's own frame
throw error;}};module.exports = invariant;},{}],136:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */'use strict';var ExecutionEnvironment=_dereq_(21);var useHasFeature;if(ExecutionEnvironment.canUseDOM){useHasFeature = document.implementation && document.implementation.hasFeature &&  // always returns true in newer browsers as per the standard.
// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
document.implementation.hasFeature('','') !== true;} /**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function isEventSupported(eventNameSuffix,capture){if(!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)){return false;}var eventName='on' + eventNameSuffix;var isSupported=(eventName in document);if(!isSupported){var element=document.createElement('div');element.setAttribute(eventName,'return;');isSupported = typeof element[eventName] === 'function';}if(!isSupported && useHasFeature && eventNameSuffix === 'wheel'){ // This is the only way to test support for the `wheel` event in IE9+.
isSupported = document.implementation.hasFeature('Events.wheel','3.0');}return isSupported;}module.exports = isEventSupported;},{"21":21}],137:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isNode
 * @typechecks
 */ /**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */function isNode(object){return !!(object && (typeof Node === 'function'?object instanceof Node:typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));}module.exports = isNode;},{}],138:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isTextInputElement
 */'use strict'; /**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */var supportedInputTypes={'color':true,'date':true,'datetime':true,'datetime-local':true,'email':true,'month':true,'number':true,'password':true,'range':true,'search':true,'tel':true,'text':true,'time':true,'url':true,'week':true};function isTextInputElement(elem){return elem && (elem.nodeName === 'INPUT' && supportedInputTypes[elem.type] || elem.nodeName === 'TEXTAREA');}module.exports = isTextInputElement;},{}],139:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isTextNode
 * @typechecks
 */var isNode=_dereq_(137); /**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */function isTextNode(object){return isNode(object) && object.nodeType == 3;}module.exports = isTextNode;},{"137":137}],140:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyMirror
 * @typechecks static-only
 */'use strict';var invariant=_dereq_(135); /**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */var keyMirror=function keyMirror(obj){var ret={};var key;"production" !== "development"?invariant(obj instanceof Object && !Array.isArray(obj),'keyMirror(...): Argument must be an object.'):invariant(obj instanceof Object && !Array.isArray(obj));for(key in obj) {if(!obj.hasOwnProperty(key)){continue;}ret[key] = key;}return ret;};module.exports = keyMirror;},{"135":135}],141:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyOf
 */ /**
 * Allows extraction of a minified key. Let's the build system minify keys
 * without loosing the ability to dynamically use key strings as values
 * themselves. Pass in an object with a single key/val pair and it will return
 * you the string key of that single record. Suppose you want to grab the
 * value for a key 'className' inside of an object. Key/val minification may
 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
 * reuse those resolutions.
 */var keyOf=function keyOf(oneKeyObj){var key;for(key in oneKeyObj) {if(!oneKeyObj.hasOwnProperty(key)){continue;}return key;}return null;};module.exports = keyOf;},{}],142:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule mapObject
 */'use strict';var hasOwnProperty=Object.prototype.hasOwnProperty; /**
 * Executes the provided `callback` once for each enumerable own property in the
 * object and constructs a new object from the results. The `callback` is
 * invoked with three arguments:
 *
 *  - the property value
 *  - the property name
 *  - the object being traversed
 *
 * Properties that are added after the call to `mapObject` will not be visited
 * by `callback`. If the values of existing properties are changed, the value
 * passed to `callback` will be the value at the time `mapObject` visits them.
 * Properties that are deleted before being visited are not visited.
 *
 * @grep function objectMap()
 * @grep function objMap()
 *
 * @param {?object} object
 * @param {function} callback
 * @param {*} context
 * @return {?object}
 */function mapObject(object,callback,context){if(!object){return null;}var result={};for(var name in object) {if(hasOwnProperty.call(object,name)){result[name] = callback.call(context,object[name],name,object);}}return result;}module.exports = mapObject;},{}],143:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule memoizeStringOnly
 * @typechecks static-only
 */'use strict'; /**
 * Memoizes the return value of a function that accepts one string argument.
 *
 * @param {function} callback
 * @return {function}
 */function memoizeStringOnly(callback){var cache={};return function(string){if(!cache.hasOwnProperty(string)){cache[string] = callback.call(this,string);}return cache[string];};}module.exports = memoizeStringOnly;},{}],144:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule onlyChild
 */'use strict';var ReactElement=_dereq_(57);var invariant=_dereq_(135); /**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection. The current implementation of this
 * function assumes that a single child gets passed without a wrapper, but the
 * purpose of this helper function is to abstract away the particular structure
 * of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactComponent} The first and only `ReactComponent` contained in the
 * structure.
 */function onlyChild(children){"production" !== "development"?invariant(ReactElement.isValidElement(children),'onlyChild must be passed a children with exactly one child.'):invariant(ReactElement.isValidElement(children));return children;}module.exports = onlyChild;},{"135":135,"57":57}],145:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule performance
 * @typechecks
 */"use strict";var ExecutionEnvironment=_dereq_(21);var performance;if(ExecutionEnvironment.canUseDOM){performance = window.performance || window.msPerformance || window.webkitPerformance;}module.exports = performance || {};},{"21":21}],146:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule performanceNow
 * @typechecks
 */var performance=_dereq_(145); /**
 * Detect if we can use `window.performance.now()` and gracefully fallback to
 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
 * because of Facebook's testing infrastructure.
 */if(!performance || !performance.now){performance = Date;}var performanceNow=performance.now.bind(performance);module.exports = performanceNow;},{"145":145}],147:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule quoteAttributeValueForBrowser
 */'use strict';var escapeTextContentForBrowser=_dereq_(116); /**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */function quoteAttributeValueForBrowser(value){return '"' + escapeTextContentForBrowser(value) + '"';}module.exports = quoteAttributeValueForBrowser;},{"116":116}],148:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setInnerHTML
 */ /* globals MSApp */'use strict';var ExecutionEnvironment=_dereq_(21);var WHITESPACE_TEST=/^[ \r\n\t\f]/;var NONVISIBLE_TEST=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/; /**
 * Set the innerHTML property of a node, ensuring that whitespace is preserved
 * even in IE8.
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */var setInnerHTML=function setInnerHTML(node,html){node.innerHTML = html;}; // Win8 apps: Allow all html to be inserted
if(typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction){setInnerHTML = function(node,html){MSApp.execUnsafeLocalFunction(function(){node.innerHTML = html;});};}if(ExecutionEnvironment.canUseDOM){ // IE8: When updating a just created node with innerHTML only leading
// whitespace is removed. When updating an existing node with innerHTML
// whitespace in root TextNodes is also collapsed.
// @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html
// Feature detection; only IE8 is known to behave improperly like this.
var testElement=document.createElement('div');testElement.innerHTML = ' ';if(testElement.innerHTML === ''){setInnerHTML = function(node,html){ // Magic theory: IE8 supposedly differentiates between added and updated
// nodes when processing innerHTML, innerHTML on updated nodes suffers
// from worse whitespace behavior. Re-adding a node like this triggers
// the initial and more favorable whitespace behavior.
// TODO: What to do on a detached node?
if(node.parentNode){node.parentNode.replaceChild(node,node);} // We also implement a workaround for non-visible tags disappearing into
// thin air on IE8, this only happens if there is no visible text
// in-front of the non-visible tags. Piggyback on the whitespace fix
// and simply check if any non-visible tags appear in the source.
if(WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)){ // Recover leading whitespace by temporarily prepending any character.
// \uFEFF has the potential advantage of being zero-width/invisible.
node.innerHTML = "﻿" + html; // deleteData leaves an empty `TextNode` which offsets the index of all
// children. Definitely want to avoid this.
var textNode=node.firstChild;if(textNode.data.length === 1){node.removeChild(textNode);}else {textNode.deleteData(0,1);}}else {node.innerHTML = html;}};}}module.exports = setInnerHTML;},{"21":21}],149:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setTextContent
 */'use strict';var ExecutionEnvironment=_dereq_(21);var escapeTextContentForBrowser=_dereq_(116);var setInnerHTML=_dereq_(148); /**
 * Set the textContent property of a node, ensuring that whitespace is preserved
 * even in IE8. innerText is a poor substitute for textContent and, among many
 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
 * as it should.
 *
 * @param {DOMElement} node
 * @param {string} text
 * @internal
 */var setTextContent=function setTextContent(node,text){node.textContent = text;};if(ExecutionEnvironment.canUseDOM){if(!('textContent' in document.documentElement)){setTextContent = function(node,text){setInnerHTML(node,escapeTextContentForBrowser(text));};}}module.exports = setTextContent;},{"116":116,"148":148,"21":21}],150:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shallowEqual
 */'use strict'; /**
 * Performs equality by iterating through keys on an object and returning
 * false when any key has values which are not strictly equal between
 * objA and objB. Returns true when the values of all keys are strictly equal.
 *
 * @return {boolean}
 */function shallowEqual(objA,objB){if(objA === objB){return true;}var key; // Test for A's keys different from B.
for(key in objA) {if(objA.hasOwnProperty(key) && (!objB.hasOwnProperty(key) || objA[key] !== objB[key])){return false;}} // Test for B's keys missing from A.
for(key in objB) {if(objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)){return false;}}return true;}module.exports = shallowEqual;},{}],151:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shouldUpdateReactComponent
 * @typechecks static-only
 */'use strict';var warning=_dereq_(154); /**
 * Given a `prevElement` and `nextElement`, determines if the existing
 * instance should be updated as opposed to being destroyed or replaced by a new
 * instance. Both arguments are elements. This ensures that this logic can
 * operate on stateless trees without any backing instance.
 *
 * @param {?object} prevElement
 * @param {?object} nextElement
 * @return {boolean} True if the existing instance should be updated.
 * @protected
 */function shouldUpdateReactComponent(prevElement,nextElement){if(prevElement != null && nextElement != null){var prevType=typeof prevElement;var nextType=typeof nextElement;if(prevType === 'string' || prevType === 'number'){return nextType === 'string' || nextType === 'number';}else {if(nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key){var ownersMatch=prevElement._owner === nextElement._owner;var prevName=null;var nextName=null;var nextDisplayName=null;if("production" !== "development"){if(!ownersMatch){if(prevElement._owner != null && prevElement._owner.getPublicInstance() != null && prevElement._owner.getPublicInstance().constructor != null){prevName = prevElement._owner.getPublicInstance().constructor.displayName;}if(nextElement._owner != null && nextElement._owner.getPublicInstance() != null && nextElement._owner.getPublicInstance().constructor != null){nextName = nextElement._owner.getPublicInstance().constructor.displayName;}if(nextElement.type != null && nextElement.type.displayName != null){nextDisplayName = nextElement.type.displayName;}if(nextElement.type != null && typeof nextElement.type === 'string'){nextDisplayName = nextElement.type;}if(typeof nextElement.type !== 'string' || nextElement.type === 'input' || nextElement.type === 'textarea'){if(prevElement._owner != null && prevElement._owner._isOwnerNecessary === false || nextElement._owner != null && nextElement._owner._isOwnerNecessary === false){if(prevElement._owner != null){prevElement._owner._isOwnerNecessary = true;}if(nextElement._owner != null){nextElement._owner._isOwnerNecessary = true;}"production" !== "development"?warning(false,'<%s /> is being rendered by both %s and %s using the same ' + 'key (%s) in the same place. Currently, this means that ' + 'they don\'t preserve state. This behavior should be very ' + 'rare so we\'re considering deprecating it. Please contact ' + 'the React team and explain your use case so that we can ' + 'take that into consideration.',nextDisplayName || 'Unknown Component',prevName || '[Unknown]',nextName || '[Unknown]',prevElement.key):null;}}}}return ownersMatch;}}}return false;}module.exports = shouldUpdateReactComponent;},{"154":154}],152:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule toArray
 * @typechecks
 */var invariant=_dereq_(135); /**
 * Convert array-like objects to arrays.
 *
 * This API assumes the caller knows the contents of the data type. For less
 * well defined inputs use createArrayFromMixed.
 *
 * @param {object|function|filelist} obj
 * @return {array}
 */function toArray(obj){var length=obj.length; // Some browse builtin objects can report typeof 'function' (e.g. NodeList in
// old versions of Safari).
"production" !== "development"?invariant(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function'),'toArray: Array-like object expected'):invariant(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function'));"production" !== "development"?invariant(typeof length === 'number','toArray: Object needs a length property'):invariant(typeof length === 'number');"production" !== "development"?invariant(length === 0 || length - 1 in obj,'toArray: Object should have keys for indices'):invariant(length === 0 || length - 1 in obj); // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
// without method will throw during the slice call and skip straight to the
// fallback.
if(obj.hasOwnProperty){try{return Array.prototype.slice.call(obj);}catch(e) { // IE < 9 does not support Array#slice on collections objects
}} // Fall back to copying key by key. This assumes all keys have a value,
// so will not preserve sparsely populated inputs.
var ret=Array(length);for(var ii=0;ii < length;ii++) {ret[ii] = obj[ii];}return ret;}module.exports = toArray;},{"135":135}],153:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule traverseAllChildren
 */'use strict';var ReactElement=_dereq_(57);var ReactFragment=_dereq_(63);var ReactInstanceHandles=_dereq_(66);var getIteratorFn=_dereq_(126);var invariant=_dereq_(135);var warning=_dereq_(154);var SEPARATOR=ReactInstanceHandles.SEPARATOR;var SUBSEPARATOR=':'; /**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */var userProvidedKeyEscaperLookup={'=':'=0','.':'=1',':':'=2'};var userProvidedKeyEscapeRegex=/[=.:]/g;var didWarnAboutMaps=false;function userProvidedKeyEscaper(match){return userProvidedKeyEscaperLookup[match];} /**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */function getComponentKey(component,index){if(component && component.key != null){ // Explicit key
return wrapUserProvidedKey(component.key);} // Implicit key determined by the index in the set
return index.toString(36);} /**
 * Escape a component key so that it is safe to use in a reactid.
 *
 * @param {*} key Component key to be escaped.
 * @return {string} An escaped string.
 */function escapeUserProvidedKey(text){return ('' + text).replace(userProvidedKeyEscapeRegex,userProvidedKeyEscaper);} /**
 * Wrap a `key` value explicitly provided by the user to distinguish it from
 * implicitly-generated keys generated by a component's index in its parent.
 *
 * @param {string} key Value of a user-provided `key` attribute
 * @return {string}
 */function wrapUserProvidedKey(key){return '$' + escapeUserProvidedKey(key);} /**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!number} indexSoFar Number of children encountered until this point.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */function traverseAllChildrenImpl(children,nameSoFar,indexSoFar,callback,traverseContext){var type=typeof children;if(type === 'undefined' || type === 'boolean'){ // All of the above are perceived as null.
children = null;}if(children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)){callback(traverseContext,children, // If it's the only child, treat the name as if it was wrapped in an array
// so that it's consistent if the number of children grows.
nameSoFar === ''?SEPARATOR + getComponentKey(children,0):nameSoFar,indexSoFar);return 1;}var child,nextName,nextIndex;var subtreeCount=0; // Count of children found in the current subtree.
if(Array.isArray(children)){for(var i=0;i < children.length;i++) {child = children[i];nextName = (nameSoFar !== ''?nameSoFar + SUBSEPARATOR:SEPARATOR) + getComponentKey(child,i);nextIndex = indexSoFar + subtreeCount;subtreeCount += traverseAllChildrenImpl(child,nextName,nextIndex,callback,traverseContext);}}else {var iteratorFn=getIteratorFn(children);if(iteratorFn){var iterator=iteratorFn.call(children);var step;if(iteratorFn !== children.entries){var ii=0;while(!(step = iterator.next()).done) {child = step.value;nextName = (nameSoFar !== ''?nameSoFar + SUBSEPARATOR:SEPARATOR) + getComponentKey(child,ii++);nextIndex = indexSoFar + subtreeCount;subtreeCount += traverseAllChildrenImpl(child,nextName,nextIndex,callback,traverseContext);}}else {if("production" !== "development"){"production" !== "development"?warning(didWarnAboutMaps,'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.'):null;didWarnAboutMaps = true;} // Iterator will provide entry [k,v] tuples rather than values.
while(!(step = iterator.next()).done) {var entry=step.value;if(entry){child = entry[1];nextName = (nameSoFar !== ''?nameSoFar + SUBSEPARATOR:SEPARATOR) + wrapUserProvidedKey(entry[0]) + SUBSEPARATOR + getComponentKey(child,0);nextIndex = indexSoFar + subtreeCount;subtreeCount += traverseAllChildrenImpl(child,nextName,nextIndex,callback,traverseContext);}}}}else if(type === 'object'){"production" !== "development"?invariant(children.nodeType !== 1,'traverseAllChildren(...): Encountered an invalid child; DOM ' + 'elements are not valid children of React components.'):invariant(children.nodeType !== 1);var fragment=ReactFragment.extract(children);for(var key in fragment) {if(fragment.hasOwnProperty(key)){child = fragment[key];nextName = (nameSoFar !== ''?nameSoFar + SUBSEPARATOR:SEPARATOR) + wrapUserProvidedKey(key) + SUBSEPARATOR + getComponentKey(child,0);nextIndex = indexSoFar + subtreeCount;subtreeCount += traverseAllChildrenImpl(child,nextName,nextIndex,callback,traverseContext);}}}}return subtreeCount;} /**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */function traverseAllChildren(children,callback,traverseContext){if(children == null){return 0;}return traverseAllChildrenImpl(children,'',0,callback,traverseContext);}module.exports = traverseAllChildren;},{"126":126,"135":135,"154":154,"57":57,"63":63,"66":66}],154:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule warning
 */"use strict";var emptyFunction=_dereq_(114); /**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var warning=emptyFunction;if("production" !== "development"){warning = function(condition,format){for(var args=[],$__0=2,$__1=arguments.length;$__0 < $__1;$__0++) args.push(arguments[$__0]);if(format === undefined){throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');}if(format.length < 10 || /^[s\W]*$/.test(format)){throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);}if(format.indexOf('Failed Composite propType: ') === 0){return; // Ignore CompositeComponent proptype check.
}if(!condition){var argIndex=0;var message='Warning: ' + format.replace(/%s/g,function(){return args[argIndex++];});console.warn(message);try{ // --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(message);}catch(x) {}}};}module.exports = warning;},{"114":114}]},{},[1])(1);});
}, {}],
4: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dekujsVirtualElement = require('dekujs/virtual-element');

var _dekujsVirtualElement2 = _interopRequireDefault(_dekujsVirtualElement);

/**
 * Checkbox.
 */

exports['default'] = {
  propTypes: {
    size: { type: 'string', expects: ['small', 'medium', 'large'] },
    onClick: { type: 'function' },
    checked: { type: 'boolean' }
  },

  render: function render(_ref) {
    var props = _ref.props;
    var size = props.size;
    var checked = props.checked;
    var onClick = props.onClick;

    var attrs = {
      'class': 'matter-Checkbox',
      size: size || 'medium',
      onClick: onClick,
      checked: checked,
      type: 'checkbox'
    };

    return React.createElement('input', attrs);
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jaGVja2JveC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztvQ0FBb0Isd0JBQXdCOzs7Ozs7OztxQkFNN0I7QUFDYixXQUFTLEVBQUU7QUFDVCxRQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUU7QUFDL0QsV0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtBQUM3QixXQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0dBQzdCOztBQUVELFFBQU0sRUFBQSxnQkFBQyxJQUFTLEVBQUU7UUFBVCxLQUFLLEdBQVAsSUFBUyxDQUFQLEtBQUs7UUFDTixJQUFJLEdBQXVCLEtBQUssQ0FBaEMsSUFBSTtRQUFFLE9BQU8sR0FBYyxLQUFLLENBQTFCLE9BQU87UUFBRSxPQUFPLEdBQUssS0FBSyxDQUFqQixPQUFPOztBQUU1QixRQUFJLEtBQUssR0FBRztBQUNWLGVBQU8saUJBQWlCO0FBQ3hCLFVBQUksRUFBRSxJQUFJLElBQUksUUFBUTtBQUN0QixhQUFPLEVBQUUsT0FBTztBQUNoQixhQUFPLEVBQUUsT0FBTztBQUNoQixVQUFJLEVBQUUsVUFBVTtLQUNqQixDQUFDOztBQUVGLFdBQU8sNkJBQVksS0FBSyxDQUFJLENBQUE7R0FDN0I7Q0FDRiIsImZpbGUiOiJsaWIvY2hlY2tib3gvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbGVtZW50IGZyb20gJ2Rla3Vqcy92aXJ0dWFsLWVsZW1lbnQnO1xuXG4vKipcbiAqIENoZWNrYm94LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgc2l6ZTogeyB0eXBlOiAnc3RyaW5nJywgZXhwZWN0czogWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSB9LFxuICAgIG9uQ2xpY2s6IHsgdHlwZTogJ2Z1bmN0aW9uJyB9LFxuICAgIGNoZWNrZWQ6IHsgdHlwZTogJ2Jvb2xlYW4nIH1cbiAgfSxcblxuICByZW5kZXIoeyBwcm9wcyB9KSB7XG4gICAgbGV0IHsgc2l6ZSwgY2hlY2tlZCwgb25DbGljayB9ID0gcHJvcHM7XG4gICAgXG4gICAgbGV0IGF0dHJzID0ge1xuICAgICAgY2xhc3M6ICdtYXR0ZXItQ2hlY2tib3gnLFxuICAgICAgc2l6ZTogc2l6ZSB8fCAnbWVkaXVtJyxcbiAgICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgICAgdHlwZTogJ2NoZWNrYm94J1xuICAgIH07XG5cbiAgICByZXR1cm4gPGlucHV0IHsgLi4uYXR0cnMgfS8+XG4gIH1cbn07XG4iXX0=
}, {"dekujs/virtual-element":11}],
11: [function(require, module, exports) {
"use strict";

(function (f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.virtualElement = f();
  }
})(function () {
  var define, module, exports;return (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof _require == "function" && _require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof _require == "function" && _require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
  })({ 1: [function (_require, module, exports) {
      /**
       * Module dependencies.
       */

      var slice = _require('sliced');
      var flatten = _require('array-flatten');

      /**
       * This function lets us create virtual nodes using a simple
       * syntax. It is compatible with JSX transforms so you can use
       * JSX to write nodes that will compile to this function.
       *
       * let node = element('div', { id: 'foo' }, [
       *   element('a', { href: 'http://google.com' }, 'Google')
       * ])
       *
       * You can leave out the attributes or the children if either
       * of them aren't needed and it will figure out what you're
       * trying to do.
       */

      module.exports = element;

      /**
       * Create virtual trees of components.
       *
       * This creates the nicer API for the user.
       * It translates that friendly API into an actual tree of nodes.
       *
       * @param {*} type
       * @param {Object} attributes
       * @param {Array} children
       * @return {Object}
       * @api public
       */

      function element(type, attributes, children) {
        // Default to div with no args
        if (!type) {
          throw new TypeError('element() needs a type.');
        }

        // Skipped adding attributes and we're passing
        // in children instead.
        if (arguments.length === 2 && (typeof attributes === 'string' || Array.isArray(attributes))) {
          children = attributes;
          attributes = {};
        }

        // Account for JSX putting the children as multiple arguments.
        // This is essentially just the ES6 rest param
        if (arguments.length > 2 && children && Array.isArray(arguments[2]) === false) {
          children = slice(arguments, 2);
        }

        children = children || [];
        attributes = attributes || {};

        // passing in a single child, you can skip
        // using the array
        if (!Array.isArray(children)) {
          children = [children];
        }

        // Flatten nested child arrays. This is how JSX compiles some nodes.
        children = flatten(children, 2);

        // if you pass in a function, it's a `Component` constructor.
        // otherwise it's an element.
        return {
          type: type,
          children: children,
          attributes: attributes
        };
      }
    }, { "array-flatten": 2, "sliced": 3 }], 2: [function (_require, module, exports) {
      'use strict';

      /**
       * Expose `arrayFlatten`.
       */
      module.exports = arrayFlatten;

      /**
       * Recursive flatten function with depth.
       *
       * @param  {Array}  array
       * @param  {Array}  result
       * @param  {Number} depth
       * @return {Array}
       */
      function flattenWithDepth(array, result, depth) {
        for (var i = 0; i < array.length; i++) {
          var value = array[i];

          if (depth > 0 && Array.isArray(value)) {
            flattenWithDepth(value, result, depth - 1);
          } else {
            result.push(value);
          }
        }

        return result;
      }

      /**
       * Recursive flatten function. Omitting depth is slightly faster.
       *
       * @param  {Array} array
       * @param  {Array} result
       * @return {Array}
       */
      function flattenForever(array, result) {
        for (var i = 0; i < array.length; i++) {
          var value = array[i];

          if (Array.isArray(value)) {
            flattenForever(value, result);
          } else {
            result.push(value);
          }
        }

        return result;
      }

      /**
       * Flatten an array, with the ability to define a depth.
       *
       * @param  {Array}  array
       * @param  {Number} depth
       * @return {Array}
       */
      function arrayFlatten(array, depth) {
        if (depth == null) {
          return flattenForever(array, []);
        }

        return flattenWithDepth(array, [], depth);
      }
    }, {}], 3: [function (_require, module, exports) {
      module.exports = exports = _require('./lib/sliced');
    }, { "./lib/sliced": 4 }], 4: [function (_require, module, exports) {

      /**
       * An Array.prototype.slice.call(arguments) alternative
       *
       * @param {Object} args something with a length
       * @param {Number} slice
       * @param {Number} sliceEnd
       * @api public
       */

      module.exports = function (args, slice, sliceEnd) {
        var ret = [];
        var len = args.length;

        if (0 === len) return ret;

        var start = slice < 0 ? Math.max(0, slice + len) : slice || 0;

        if (sliceEnd !== undefined) {
          len = sliceEnd < 0 ? sliceEnd + len : sliceEnd;
        }

        while (len-- > start) {
          ret[len - start] = args[len];
        }

        return ret;
      };
    }, {}] }, {}, [1])(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVrdWpzLXZpcnR1YWwtZWxlbWVudEAxLjEuMi9idWlsZC92aXJ0dWFsLWVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQUMsTUFBRyxPQUFPLE9BQU8sS0FBRyxRQUFRLElBQUUsT0FBTyxNQUFNLEtBQUcsV0FBVyxFQUFDO0FBQUMsVUFBTSxDQUFDLE9BQU8sR0FBQyxDQUFDLEVBQUUsQ0FBQTtHQUFDLE1BQUssSUFBRyxPQUFPLE1BQU0sS0FBRyxVQUFVLElBQUUsTUFBTSxDQUFDLEdBQUcsRUFBQztBQUFDLFVBQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUE7R0FBQyxNQUFJO0FBQUMsUUFBSSxDQUFDLENBQUMsSUFBRyxPQUFPLE1BQU0sS0FBRyxXQUFXLEVBQUM7QUFBQyxPQUFDLEdBQUMsTUFBTSxDQUFBO0tBQUMsTUFBSyxJQUFHLE9BQU8sTUFBTSxLQUFHLFdBQVcsRUFBQztBQUFDLE9BQUMsR0FBQyxNQUFNLENBQUE7S0FBQyxNQUFLLElBQUcsT0FBTyxJQUFJLEtBQUcsV0FBVyxFQUFDO0FBQUMsT0FBQyxHQUFDLElBQUksQ0FBQTtLQUFDLE1BQUk7QUFBQyxPQUFDLEdBQUMsSUFBSSxDQUFBO0tBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUUsQ0FBQTtHQUFDO0NBQUMsQ0FBQSxDQUFFLFlBQVU7QUFBQyxNQUFJLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUFDLGFBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxVQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDO0FBQUMsWUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztBQUFDLGNBQUksQ0FBQyxHQUFDLE9BQU8sUUFBUSxJQUFFLFVBQVUsSUFBRSxRQUFRLENBQUMsSUFBRyxDQUFDLENBQUMsSUFBRSxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRyxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsSUFBSSxLQUFLLENBQUMsc0JBQXNCLEdBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLElBQUksR0FBQyxrQkFBa0IsRUFBQyxDQUFDLENBQUEsQ0FBQTtTQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsVUFBUyxDQUFDLEVBQUM7QUFBQyxjQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtTQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7T0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUE7S0FBQyxJQUFJLENBQUMsR0FBQyxPQUFPLFFBQVEsSUFBRSxVQUFVLElBQUUsUUFBUSxDQUFDLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtHQUFDLENBQUEsQ0FBRSxFQUFDLENBQUMsRUFBQyxDQUFDLFVBQVMsUUFBUSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUM7Ozs7O0FBSzExQixVQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDOUIsVUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J2QyxZQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O0FBZXhCLGVBQVMsT0FBTyxDQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFOztBQUU1QyxZQUFJLENBQUMsSUFBSSxFQUFFO0FBQ1QsZ0JBQU0sSUFBSSxTQUFTLENBQUMseUJBQXlCLENBQUMsQ0FBQTtTQUMvQzs7OztBQUlELFlBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEtBQUssT0FBTyxVQUFVLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUEsQUFBQyxFQUFFO0FBQzNGLGtCQUFRLEdBQUcsVUFBVSxDQUFBO0FBQ3JCLG9CQUFVLEdBQUcsRUFBRSxDQUFBO1NBQ2hCOzs7O0FBSUQsWUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDN0Usa0JBQVEsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQy9COztBQUVELGdCQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQTtBQUN6QixrQkFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUE7Ozs7QUFJN0IsWUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDNUIsa0JBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQ3RCOzs7QUFHRCxnQkFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUE7Ozs7QUFJL0IsZUFBTztBQUNMLGNBQUksRUFBRSxJQUFJO0FBQ1Ysa0JBQVEsRUFBRSxRQUFRO0FBQ2xCLG9CQUFVLEVBQUUsVUFBVTtTQUN2QixDQUFBO09BQ0Y7S0FFQSxFQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxVQUFTLFFBQVEsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDO0FBQ3RFLGtCQUFZLENBQUE7Ozs7O0FBS1osWUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUE7Ozs7Ozs7Ozs7QUFVN0IsZUFBUyxnQkFBZ0IsQ0FBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUMvQyxhQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNyQyxjQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7O0FBRXBCLGNBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3JDLDRCQUFnQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFBO1dBQzNDLE1BQU07QUFDTCxrQkFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtXQUNuQjtTQUNGOztBQUVELGVBQU8sTUFBTSxDQUFBO09BQ2Q7Ozs7Ozs7OztBQVNELGVBQVMsY0FBYyxDQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDdEMsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDckMsY0FBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBOztBQUVwQixjQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDeEIsMEJBQWMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7V0FDOUIsTUFBTTtBQUNMLGtCQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1dBQ25CO1NBQ0Y7O0FBRUQsZUFBTyxNQUFNLENBQUE7T0FDZDs7Ozs7Ozs7O0FBU0QsZUFBUyxZQUFZLENBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUNuQyxZQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7QUFDakIsaUJBQU8sY0FBYyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtTQUNqQzs7QUFFRCxlQUFPLGdCQUFnQixDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUE7T0FDMUM7S0FFQSxFQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLFVBQVMsUUFBUSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUM7QUFDMUMsWUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBRW5ELEVBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxVQUFTLFFBQVEsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDOzs7Ozs7Ozs7OztBQVcxRCxZQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDaEQsWUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2IsWUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7QUFFdEIsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLE9BQU8sR0FBRyxDQUFDOztBQUUxQixZQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQ3hCLEtBQUssSUFBSSxDQUFDLENBQUM7O0FBRWYsWUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQzFCLGFBQUcsR0FBRyxRQUFRLEdBQUcsQ0FBQyxHQUNkLFFBQVEsR0FBRyxHQUFHLEdBQ2QsUUFBUSxDQUFBO1NBQ2I7O0FBRUQsZUFBTyxHQUFHLEVBQUUsR0FBRyxLQUFLLEVBQUU7QUFDcEIsYUFBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUI7O0FBRUQsZUFBTyxHQUFHLENBQUM7T0FDWixDQUFBO0tBR0EsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Q0FDaEIsQ0FBQyxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvZGVrdWpzLXZpcnR1YWwtZWxlbWVudEAxLjEuMi9idWlsZC92aXJ0dWFsLWVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nLnZpcnR1YWxFbGVtZW50ID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiBfcmVxdWlyZT09XCJmdW5jdGlvblwiJiZfcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgX3JlcXVpcmU9PVwiZnVuY3Rpb25cIiYmX3JlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHNsaWNlID0gX3JlcXVpcmUoJ3NsaWNlZCcpXG52YXIgZmxhdHRlbiA9IF9yZXF1aXJlKCdhcnJheS1mbGF0dGVuJylcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGxldHMgdXMgY3JlYXRlIHZpcnR1YWwgbm9kZXMgdXNpbmcgYSBzaW1wbGVcbiAqIHN5bnRheC4gSXQgaXMgY29tcGF0aWJsZSB3aXRoIEpTWCB0cmFuc2Zvcm1zIHNvIHlvdSBjYW4gdXNlXG4gKiBKU1ggdG8gd3JpdGUgbm9kZXMgdGhhdCB3aWxsIGNvbXBpbGUgdG8gdGhpcyBmdW5jdGlvbi5cbiAqXG4gKiBsZXQgbm9kZSA9IGVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdmb28nIH0sIFtcbiAqICAgZWxlbWVudCgnYScsIHsgaHJlZjogJ2h0dHA6Ly9nb29nbGUuY29tJyB9LCAnR29vZ2xlJylcbiAqIF0pXG4gKlxuICogWW91IGNhbiBsZWF2ZSBvdXQgdGhlIGF0dHJpYnV0ZXMgb3IgdGhlIGNoaWxkcmVuIGlmIGVpdGhlclxuICogb2YgdGhlbSBhcmVuJ3QgbmVlZGVkIGFuZCBpdCB3aWxsIGZpZ3VyZSBvdXQgd2hhdCB5b3UncmVcbiAqIHRyeWluZyB0byBkby5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVsZW1lbnRcblxuLyoqXG4gKiBDcmVhdGUgdmlydHVhbCB0cmVlcyBvZiBjb21wb25lbnRzLlxuICpcbiAqIFRoaXMgY3JlYXRlcyB0aGUgbmljZXIgQVBJIGZvciB0aGUgdXNlci5cbiAqIEl0IHRyYW5zbGF0ZXMgdGhhdCBmcmllbmRseSBBUEkgaW50byBhbiBhY3R1YWwgdHJlZSBvZiBub2Rlcy5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0ge0FycmF5fSBjaGlsZHJlblxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbGVtZW50ICh0eXBlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbikge1xuICAvLyBEZWZhdWx0IHRvIGRpdiB3aXRoIG5vIGFyZ3NcbiAgaWYgKCF0eXBlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZWxlbWVudCgpIG5lZWRzIGEgdHlwZS4nKVxuICB9XG5cbiAgLy8gU2tpcHBlZCBhZGRpbmcgYXR0cmlidXRlcyBhbmQgd2UncmUgcGFzc2luZ1xuICAvLyBpbiBjaGlsZHJlbiBpbnN0ZWFkLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiAodHlwZW9mIGF0dHJpYnV0ZXMgPT09ICdzdHJpbmcnIHx8IEFycmF5LmlzQXJyYXkoYXR0cmlidXRlcykpKSB7XG4gICAgY2hpbGRyZW4gPSBhdHRyaWJ1dGVzXG4gICAgYXR0cmlidXRlcyA9IHt9XG4gIH1cblxuICAvLyBBY2NvdW50IGZvciBKU1ggcHV0dGluZyB0aGUgY2hpbGRyZW4gYXMgbXVsdGlwbGUgYXJndW1lbnRzLlxuICAvLyBUaGlzIGlzIGVzc2VudGlhbGx5IGp1c3QgdGhlIEVTNiByZXN0IHBhcmFtXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBjaGlsZHJlbiAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1syXSkgPT09IGZhbHNlKSB7XG4gICAgY2hpbGRyZW4gPSBzbGljZShhcmd1bWVudHMsIDIpXG4gIH1cblxuICBjaGlsZHJlbiA9IGNoaWxkcmVuIHx8IFtdXG4gIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzIHx8IHt9XG5cbiAgLy8gcGFzc2luZyBpbiBhIHNpbmdsZSBjaGlsZCwgeW91IGNhbiBza2lwXG4gIC8vIHVzaW5nIHRoZSBhcnJheVxuICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgY2hpbGRyZW4gPSBbY2hpbGRyZW5dXG4gIH1cblxuICAvLyBGbGF0dGVuIG5lc3RlZCBjaGlsZCBhcnJheXMuIFRoaXMgaXMgaG93IEpTWCBjb21waWxlcyBzb21lIG5vZGVzLlxuICBjaGlsZHJlbiA9IGZsYXR0ZW4oY2hpbGRyZW4sIDIpXG5cbiAgLy8gaWYgeW91IHBhc3MgaW4gYSBmdW5jdGlvbiwgaXQncyBhIGBDb21wb25lbnRgIGNvbnN0cnVjdG9yLlxuICAvLyBvdGhlcndpc2UgaXQncyBhbiBlbGVtZW50LlxuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgfVxufVxuXG59LHtcImFycmF5LWZsYXR0ZW5cIjoyLFwic2xpY2VkXCI6M31dLDI6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIEV4cG9zZSBgYXJyYXlGbGF0dGVuYC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZsYXR0ZW5cblxuLyoqXG4gKiBSZWN1cnNpdmUgZmxhdHRlbiBmdW5jdGlvbiB3aXRoIGRlcHRoLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSAgYXJyYXlcbiAqIEBwYXJhbSAge0FycmF5fSAgcmVzdWx0XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRlcHRoXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbldpdGhEZXB0aCAoYXJyYXksIHJlc3VsdCwgZGVwdGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2ldXG5cbiAgICBpZiAoZGVwdGggPiAwICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBmbGF0dGVuV2l0aERlcHRoKHZhbHVlLCByZXN1bHQsIGRlcHRoIC0gMSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIFJlY3Vyc2l2ZSBmbGF0dGVuIGZ1bmN0aW9uLiBPbWl0dGluZyBkZXB0aCBpcyBzbGlnaHRseSBmYXN0ZXIuXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IGFycmF5XG4gKiBAcGFyYW0gIHtBcnJheX0gcmVzdWx0XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbkZvcmV2ZXIgKGFycmF5LCByZXN1bHQpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2ldXG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGZsYXR0ZW5Gb3JldmVyKHZhbHVlLCByZXN1bHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGFuIGFycmF5LCB3aXRoIHRoZSBhYmlsaXR5IHRvIGRlZmluZSBhIGRlcHRoLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSAgYXJyYXlcbiAqIEBwYXJhbSAge051bWJlcn0gZGVwdGhcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBhcnJheUZsYXR0ZW4gKGFycmF5LCBkZXB0aCkge1xuICBpZiAoZGVwdGggPT0gbnVsbCkge1xuICAgIHJldHVybiBmbGF0dGVuRm9yZXZlcihhcnJheSwgW10pXG4gIH1cblxuICByZXR1cm4gZmxhdHRlbldpdGhEZXB0aChhcnJheSwgW10sIGRlcHRoKVxufVxuXG59LHt9XSwzOltmdW5jdGlvbihfcmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBfcmVxdWlyZSgnLi9saWIvc2xpY2VkJyk7XG5cbn0se1wiLi9saWIvc2xpY2VkXCI6NH1dLDQ6W2Z1bmN0aW9uKF9yZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblxuLyoqXG4gKiBBbiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpIGFsdGVybmF0aXZlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFyZ3Mgc29tZXRoaW5nIHdpdGggYSBsZW5ndGhcbiAqIEBwYXJhbSB7TnVtYmVyfSBzbGljZVxuICogQHBhcmFtIHtOdW1iZXJ9IHNsaWNlRW5kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3MsIHNsaWNlLCBzbGljZUVuZCkge1xuICB2YXIgcmV0ID0gW107XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcblxuICBpZiAoMCA9PT0gbGVuKSByZXR1cm4gcmV0O1xuXG4gIHZhciBzdGFydCA9IHNsaWNlIDwgMFxuICAgID8gTWF0aC5tYXgoMCwgc2xpY2UgKyBsZW4pXG4gICAgOiBzbGljZSB8fCAwO1xuXG4gIGlmIChzbGljZUVuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuID0gc2xpY2VFbmQgPCAwXG4gICAgICA/IHNsaWNlRW5kICsgbGVuXG4gICAgICA6IHNsaWNlRW5kXG4gIH1cblxuICB3aGlsZSAobGVuLS0gPiBzdGFydCkge1xuICAgIHJldFtsZW4gLSBzdGFydF0gPSBhcmdzW2xlbl07XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG5cbn0se31dfSx7fSxbMV0pKDEpXG59KTsiXX0=
}, {}],
5: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _supportReact = require('/support/react');

var _supportReact2 = _interopRequireDefault(_supportReact);

/**
 * Button.
 */

exports['default'] = _supportReact2['default'].createClass({
  displayName: 'index',

  render: function render() {
    var _props = this.props;
    var label = _props.label;
    var size = _props.size;
    var type = _props.type;
    var onClick = _props.onClick;

    type = type || 'primary';
    size = size || 'medium';

    var classes = ['matter-Button'];
    if (type) classes.push(type);
    if (size) classes.push(size);

    var attrs = {
      className: classes.join(' '),
      onClick: onClick
    };

    return _supportReact2['default'].createElement(
      'button',
      attrs,
      label
    );
  }
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9idXR0b24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7NEJBQWtCLGdCQUFnQjs7Ozs7Ozs7cUJBTW5CLDBCQUFNLFdBQVcsQ0FBQzs7O0FBQy9CLFFBQU0sRUFBQSxrQkFBRztpQkFDOEIsSUFBSSxDQUFDLEtBQUs7UUFBekMsS0FBSyxVQUFMLEtBQUs7UUFBRSxJQUFJLFVBQUosSUFBSTtRQUFFLElBQUksVUFBSixJQUFJO1FBQUUsT0FBTyxVQUFQLE9BQU87O0FBRWhDLFFBQUksR0FBRyxJQUFJLElBQUksU0FBUyxDQUFDO0FBQ3pCLFFBQUksR0FBRyxJQUFJLElBQUksUUFBUSxDQUFDOztBQUV4QixRQUFJLE9BQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ2hDLFFBQUksSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsUUFBSSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFN0IsUUFBSSxLQUFLLEdBQUc7QUFDVixlQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDNUIsYUFBTyxFQUFFLE9BQU87S0FDakIsQ0FBQzs7QUFFRixXQUNFOztNQUFhLEtBQUs7TUFDZCxLQUFLO0tBQ0EsQ0FDVDtHQUNIO0NBQ0YsQ0FBQyIsImZpbGUiOiJsaWIvYnV0dG9uL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAnL3N1cHBvcnQvcmVhY3QnO1xuXG4vKipcbiAqIEJ1dHRvbi5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBsYWJlbCwgc2l6ZSwgdHlwZSwgb25DbGljayB9ID0gdGhpcy5wcm9wcztcblxuICAgIHR5cGUgPSB0eXBlIHx8ICdwcmltYXJ5JztcbiAgICBzaXplID0gc2l6ZSB8fCAnbWVkaXVtJztcblxuICAgIGxldCBjbGFzc2VzID0gWydtYXR0ZXItQnV0dG9uJ107XG4gICAgaWYgKHR5cGUpIGNsYXNzZXMucHVzaCh0eXBlKTtcbiAgICBpZiAoc2l6ZSkgY2xhc3Nlcy5wdXNoKHNpemUpO1xuXG4gICAgbGV0IGF0dHJzID0ge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgIG9uQ2xpY2s6IG9uQ2xpY2tcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24geyAuLi5hdHRycyB9PlxuICAgICAgICB7IGxhYmVsIH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn0pO1xuIl19
}, {"/support/react":10}],
6: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _matthewmuellerUid = require('matthewmueller/uid');

var _matthewmuellerUid2 = _interopRequireDefault(_matthewmuellerUid);

var _supportReact = require('/support/react');

var _supportReact2 = _interopRequireDefault(_supportReact);

/**
 * Table.
 */

exports['default'] = _supportReact2['default'].createClass({
  displayName: 'index',

  render: function render() {
    var rows = this.props.rows;

    var tableRows = rows.map(function (row) {
      var rowCells = row.map(function (cell) {
        return _supportReact2['default'].createElement(
          'td',
          { className: 'matter-Table-cell', colSpan: '1', rowSpan: '1', key: (0, _matthewmuellerUid2['default'])() },
          _supportReact2['default'].createElement(
            'span',
            { key: (0, _matthewmuellerUid2['default'])() },
            cell
          )
        );
      });

      return _supportReact2['default'].createElement(
        'tr',
        { className: 'matter-Table-row', key: (0, _matthewmuellerUid2['default'])() },
        rowCells
      );
    });

    return _supportReact2['default'].createElement(
      'table',
      { className: 'matter-Table', cellPadding: '0', cellSpacing: '0' },
      _supportReact2['default'].createElement(
        'tbody',
        null,
        tableRows
      )
    );
  }
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi90YWJsZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztpQ0FBZ0Isb0JBQW9COzs7OzRCQUNsQixnQkFBZ0I7Ozs7Ozs7O3FCQU1uQiwwQkFBTSxXQUFXLENBQUM7OztBQUMvQixRQUFNLEVBQUEsa0JBQUc7UUFDRCxJQUFJLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBbkIsSUFBSTs7QUFFVixRQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVMsR0FBRyxFQUFFO0FBQ3JDLFVBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBUyxJQUFJLEVBQUU7QUFDcEMsZUFDRTs7WUFBSSxTQUFTLEVBQUMsbUJBQW1CLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBRSxxQ0FBSyxBQUFDO1VBQ25FOztjQUFNLEdBQUcsRUFBRSxxQ0FBSyxBQUFDO1lBQUcsSUFBSTtXQUFTO1NBQzlCLENBQ0w7T0FDSCxDQUFDLENBQUM7O0FBRUgsYUFDRTs7VUFBSSxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsR0FBRyxFQUFFLHFDQUFLLEFBQUM7UUFDeEMsUUFBUTtPQUNQLENBQ0w7S0FDSCxDQUFDLENBQUM7O0FBRUgsV0FDRTs7UUFBTyxTQUFTLEVBQUMsY0FBYyxFQUFDLFdBQVcsRUFBQyxHQUFHLEVBQUMsV0FBVyxFQUFDLEdBQUc7TUFDN0Q7OztRQUNJLFNBQVM7T0FDTDtLQUNGLENBQ1I7R0FDSDtDQUNGLENBQUMiLCJmaWxlIjoibGliL3RhYmxlL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdWlkIGZyb20gJ21hdHRoZXdtdWVsbGVyL3VpZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnL3N1cHBvcnQvcmVhY3QnO1xuXG4vKipcbiAqIFRhYmxlLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHJvd3MgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgdGFibGVSb3dzID0gcm93cy5tYXAoZnVuY3Rpb24ocm93KSB7XG4gICAgICBsZXQgcm93Q2VsbHMgPSByb3cubWFwKGZ1bmN0aW9uKGNlbGwpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdtYXR0ZXItVGFibGUtY2VsbCcgY29sU3Bhbj0nMScgcm93U3Bhbj0nMScga2V5PXt1aWQoKX0+XG4gICAgICAgICAgICA8c3BhbiBrZXk9e3VpZCgpfT57IGNlbGwgfTwvc3Bhbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDx0ciBjbGFzc05hbWU9J21hdHRlci1UYWJsZS1yb3cnIGtleT17dWlkKCl9PlxuICAgICAgICAgIHsgcm93Q2VsbHMgfVxuICAgICAgICA8L3RyPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSdtYXR0ZXItVGFibGUnIGNlbGxQYWRkaW5nPScwJyBjZWxsU3BhY2luZz0nMCc+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7IHRhYmxlUm93cyB9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICk7XG4gIH1cbn0pO1xuIl19
}, {"matthewmueller/uid":12,"/support/react":10}],
12: [function(require, module, exports) {
/**
 * Export `uid`
 */

"use strict";

module.exports = uid;

/**
 * Create a `uid`
 *
 * @param {String} len
 * @return {String} uid
 */

function uid(len) {
  len = len || 7;
  return Math.random().toString(35).substr(2, len);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWF0dGhld211ZWxsZXItdWlkQDAuMC4yL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDOzs7Ozs7Ozs7QUFTckIsU0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFO0FBQ2hCLEtBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2YsU0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDbEQiLCJmaWxlIjoiY29tcG9uZW50cy9tYXR0aGV3bXVlbGxlci11aWRAMC4wLjIvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXhwb3J0IGB1aWRgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB1aWQ7XG5cbi8qKlxuICogQ3JlYXRlIGEgYHVpZGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbGVuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHVpZFxuICovXG5cbmZ1bmN0aW9uIHVpZChsZW4pIHtcbiAgbGVuID0gbGVuIHx8IDc7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM1KS5zdWJzdHIoMiwgbGVuKTtcbn1cbiJdfQ==
}, {}],
7: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _supportReact = require('/support/react');

var _supportReact2 = _interopRequireDefault(_supportReact);

/**
 * Grid.
 */

exports['default'] = _supportReact2['default'].createClass({
  displayName: 'index',

  render: function render() {
    return _supportReact2['default'].createElement(
      'ul',
      { className: 'matter-Grid' },
      this.props.children
    );
  }
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9ncmlkL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzRCQUFrQixnQkFBZ0I7Ozs7Ozs7O3FCQU1uQiwwQkFBTSxXQUFXLENBQUM7OztBQUMvQixRQUFNLEVBQUEsa0JBQUc7QUFDUCxXQUNFOztRQUFJLFNBQVMsRUFBQyxhQUFhO01BQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtLQUNsQixDQUNMO0dBQ0g7Q0FDRixDQUFDIiwiZmlsZSI6ImxpYi9ncmlkL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAnL3N1cHBvcnQvcmVhY3QnO1xuXG4vKipcbiAqIEdyaWQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9J21hdHRlci1HcmlkJz5cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxufSk7XG4iXX0=
}, {"/support/react":10}],
8: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _segmentioHighlight = require('segmentio/highlight');

var _segmentioHighlight2 = _interopRequireDefault(_segmentioHighlight);

var _supportReact = require('/support/react');

var _supportReact2 = _interopRequireDefault(_supportReact);

/**
 * Languages.
 */

var _segmentioHighlightObjectiveC = require('segmentio/highlight-objective-c');

var _segmentioHighlightObjectiveC2 = _interopRequireDefault(_segmentioHighlightObjectiveC);

var _segmentioHighlightJavascript = require('segmentio/highlight-javascript');

var _segmentioHighlightJavascript2 = _interopRequireDefault(_segmentioHighlightJavascript);

var _segmentioHighlightCsharp = require('segmentio/highlight-csharp');

var _segmentioHighlightCsharp2 = _interopRequireDefault(_segmentioHighlightCsharp);

var _segmentioHighlightPython = require('segmentio/highlight-python');

var _segmentioHighlightPython2 = _interopRequireDefault(_segmentioHighlightPython);

var _segmentioHighlightJava = require('segmentio/highlight-java');

var _segmentioHighlightJava2 = _interopRequireDefault(_segmentioHighlightJava);

var _segmentioHighlightBash = require('segmentio/highlight-bash');

var _segmentioHighlightBash2 = _interopRequireDefault(_segmentioHighlightBash);

var _segmentioHighlightRuby = require('segmentio/highlight-ruby');

var _segmentioHighlightRuby2 = _interopRequireDefault(_segmentioHighlightRuby);

var _segmentioHighlightYaml = require('segmentio/highlight-yaml');

var _segmentioHighlightYaml2 = _interopRequireDefault(_segmentioHighlightYaml);

var _segmentioHighlightXml = require('segmentio/highlight-xml');

var _segmentioHighlightXml2 = _interopRequireDefault(_segmentioHighlightXml);

var _segmentioHighlightPhp = require('segmentio/highlight-php');

var _segmentioHighlightPhp2 = _interopRequireDefault(_segmentioHighlightPhp);

var _segmentioHighlightCss = require('segmentio/highlight-css');

var _segmentioHighlightCss2 = _interopRequireDefault(_segmentioHighlightCss);

var _segmentioHighlightGo = require('segmentio/highlight-go');

var _segmentioHighlightGo2 = _interopRequireDefault(_segmentioHighlightGo);

/**
 * Highlight.
 */

var highlight = new _segmentioHighlight2['default']().use(_segmentioHighlightPython2['default']).use(_segmentioHighlightCsharp2['default']).use(_segmentioHighlightYaml2['default']).use(_segmentioHighlightJava2['default']).use(_segmentioHighlightRuby2['default']).use(_segmentioHighlightBash2['default']).use(_segmentioHighlightObjectiveC2['default']).use(_segmentioHighlightXml2['default']).use(_segmentioHighlightCss2['default']).use(_segmentioHighlightPhp2['default']).use(_segmentioHighlightJavascript2['default']).use(_segmentioHighlightGo2['default']);

/**
 * Code.
 */

exports['default'] = _supportReact2['default'].createClass({
  displayName: 'index',

  render: function render() {
    var _props = this.props;
    var language = _props.language;
    var children = _props.children;

    var unformattedCode = children;
    var formattedCode = highlight.string(unformattedCode, language);

    return _supportReact2['default'].createElement(
      'div',
      { className: 'matter-Code' },
      _supportReact2['default'].createElement('code', { className: 'matter-Code-code', dangerouslySetInnerHTML: { __html: formattedCode } })
    );
  }
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb2RlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tDQUFzQixxQkFBcUI7Ozs7NEJBQ3pCLGdCQUFnQjs7Ozs7Ozs7NENBTWpCLGlDQUFpQzs7Ozs0Q0FDbkMsZ0NBQWdDOzs7O3dDQUM1Qiw0QkFBNEI7Ozs7d0NBQzVCLDRCQUE0Qjs7OztzQ0FDOUIsMEJBQTBCOzs7O3NDQUMxQiwwQkFBMEI7Ozs7c0NBQzFCLDBCQUEwQjs7OztzQ0FDMUIsMEJBQTBCOzs7O3FDQUMzQix5QkFBeUI7Ozs7cUNBQ3pCLHlCQUF5Qjs7OztxQ0FDekIseUJBQXlCOzs7O29DQUMxQix3QkFBd0I7Ozs7Ozs7O0FBTXZDLElBQUksU0FBUyxHQUFHLHFDQUFlLENBQzVCLEdBQUcsdUNBQVEsQ0FDWCxHQUFHLHVDQUFRLENBQ1gsR0FBRyxxQ0FBTSxDQUNULEdBQUcscUNBQU0sQ0FDVCxHQUFHLHFDQUFNLENBQ1QsR0FBRyxxQ0FBTSxDQUNULEdBQUcsMkNBQU0sQ0FDVCxHQUFHLG9DQUFLLENBQ1IsR0FBRyxvQ0FBSyxDQUNSLEdBQUcsb0NBQUssQ0FDUixHQUFHLDJDQUFJLENBQ1AsR0FBRyxtQ0FBSSxDQUFDOzs7Ozs7cUJBTUksMEJBQU0sV0FBVyxDQUFDOzs7QUFDL0IsUUFBTSxFQUFBLGtCQUFHO2lCQUNzQixJQUFJLENBQUMsS0FBSztRQUFqQyxRQUFRLFVBQVIsUUFBUTtRQUFFLFFBQVEsVUFBUixRQUFROztBQUV4QixRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUM7QUFDL0IsUUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7O0FBRWhFLFdBQ0U7O1FBQUssU0FBUyxFQUFDLGFBQWE7TUFDMUIsa0RBQU0sU0FBUyxFQUFDLGtCQUFrQixFQUFDLHVCQUF1QixFQUFHLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxBQUFFLEdBQ2pGO0tBQ0gsQ0FDTjtHQUNIO0NBQ0YsQ0FBQyIsImZpbGUiOiJsaWIvY29kZS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhpZ2hsaWdodCBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0JztcbmltcG9ydCBSZWFjdCBmcm9tICcvc3VwcG9ydC9yZWFjdCc7XG5cbi8qKlxuICogTGFuZ3VhZ2VzLlxuICovXG5cbmltcG9ydCBvYmpjIGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQtb2JqZWN0aXZlLWMnO1xuaW1wb3J0IGpzIGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQtamF2YXNjcmlwdCc7XG5pbXBvcnQgY3NoYXJwIGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQtY3NoYXJwJztcbmltcG9ydCBweXRob24gZnJvbSAnc2VnbWVudGlvL2hpZ2hsaWdodC1weXRob24nO1xuaW1wb3J0IGphdmEgZnJvbSAnc2VnbWVudGlvL2hpZ2hsaWdodC1qYXZhJztcbmltcG9ydCBiYXNoIGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQtYmFzaCc7XG5pbXBvcnQgcnVieSBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0LXJ1YnknO1xuaW1wb3J0IHlhbWwgZnJvbSAnc2VnbWVudGlvL2hpZ2hsaWdodC15YW1sJztcbmltcG9ydCB4bWwgZnJvbSAnc2VnbWVudGlvL2hpZ2hsaWdodC14bWwnO1xuaW1wb3J0IHBocCBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0LXBocCc7XG5pbXBvcnQgY3NzIGZyb20gJ3NlZ21lbnRpby9oaWdobGlnaHQtY3NzJztcbmltcG9ydCBnbyBmcm9tICdzZWdtZW50aW8vaGlnaGxpZ2h0LWdvJztcblxuLyoqXG4gKiBIaWdobGlnaHQuXG4gKi9cblxubGV0IGhpZ2hsaWdodCA9IG5ldyBIaWdobGlnaHQoKVxuICAudXNlKHB5dGhvbilcbiAgLnVzZShjc2hhcnApXG4gIC51c2UoeWFtbClcbiAgLnVzZShqYXZhKVxuICAudXNlKHJ1YnkpXG4gIC51c2UoYmFzaClcbiAgLnVzZShvYmpjKVxuICAudXNlKHhtbClcbiAgLnVzZShjc3MpXG4gIC51c2UocGhwKVxuICAudXNlKGpzKVxuICAudXNlKGdvKTtcblxuLyoqXG4gKiBDb2RlLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGxhbmd1YWdlLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCB1bmZvcm1hdHRlZENvZGUgPSBjaGlsZHJlbjtcbiAgICBsZXQgZm9ybWF0dGVkQ29kZSA9IGhpZ2hsaWdodC5zdHJpbmcodW5mb3JtYXR0ZWRDb2RlLCBsYW5ndWFnZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21hdHRlci1Db2RlJz5cbiAgICAgICAgPGNvZGUgY2xhc3NOYW1lPSdtYXR0ZXItQ29kZS1jb2RlJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBmb3JtYXR0ZWRDb2RlIH0gfT5cbiAgICAgICAgPC9jb2RlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG4iXX0=
}, {"segmentio/highlight":13,"/support/react":10,"segmentio/highlight-objective-c":14,"segmentio/highlight-javascript":15,"segmentio/highlight-csharp":16,"segmentio/highlight-python":17,"segmentio/highlight-java":18,"segmentio/highlight-bash":19,"segmentio/highlight-ruby":20,"segmentio/highlight-yaml":21,"segmentio/highlight-xml":22,"segmentio/highlight-php":23,"segmentio/highlight-css":24,"segmentio/highlight-go":25}],
13: [function(require, module, exports) {
'use strict';

var escape = require('escape-html');

/**
 * Expose `Highlight`.
 */

module.exports = Highlight;

/**
 * Initialize a new `Highlight` instance.
 */

function Highlight() {
  if (!(this instanceof Highlight)) return new Highlight();
  this.languages = {};
  this.prefix('Highlight-');
}

/**
 * Use a `plugin` function.
 *
 * @param {Function} plugin
 * @return {Highlight}
 */

Highlight.prototype.use = function (plugin) {
  plugin(this);
  return this;
};

/**
 * Get or set the highlighted class `prefix`.
 *
 * @param {String} prefix
 * @return {Highlight or String}
 */

Highlight.prototype.prefix = function (prefix) {
  if (!arguments.length) return this._prefix;
  this._prefix = prefix;
  return this;
};

/**
 * Define a new `language` with a `grammar`.
 *
 * @param {String} language
 * @param {Object} grammar
 * @return {Highlight}
 */

Highlight.prototype.language = function (language, grammar) {
  this.languages[language] = grammar;
  return this;
};

/**
 * Highlight an HTML `string` of a given `language`.
 *
 * @param {String} string
 * @param {String} language
 * @return {String}
 */

Highlight.prototype.string = function (string, language) {
  var ast = this.parse(string, language);
  var str = this.stringify(ast);
  return str;
};

/**
 * Highlight an `el`, with optional `language`.
 *
 * @param {Element or String} el
 * @param {String} language (optional)
 */

Highlight.prototype.element = function (el, language) {
  if ('string' == typeof el) el = document.querySelector(el);
  var str = this.string(el.textContent, language || lang(el));
  el.innerHTML = str;
};

/**
 * Highlight an array of `els`, with optional `language`.
 *
 * @param {Array or String} els
 * @param {String} language (optional)
 */

Highlight.prototype.elements = function (els, language) {
  if ('string' == typeof els) els = document.querySelectorAll(els);
  for (var i = 0, el; el = els[i]; i++) this.element(el, language);
};

/**
 * Highlight all elements in the DOM with language attributes.
 */

Highlight.prototype.all = function () {
  this.elements(document.querySelectorAll('[data-language]'));
  this.elements(document.querySelectorAll('[class*="language-"]'));
  this.elements(document.querySelectorAll('[class*="lang-"]'));
};

/**
 * Parse a `string` with a given language's `grammar`, returning an AST.
 *
 * @param {String} string
 * @param {String or Object} grammar
 * @return {Array}
 */

Highlight.prototype.parse = function (string, grammar) {
  if ('string' == typeof grammar) {
    var lang = grammar;
    grammar = this.languages[lang];
    if (!grammar) throw new Error('unknown language "' + lang + '"');
  }

  if (!grammar) throw new Error('must provide a grammar');
  if (!string) return [];
  var ret = [string];

  for (var key in grammar) {
    var rule = grammar[key];
    var regexp = rule.pattern || rule;

    for (var i = 0; i < ret.length; i++) {
      var str = ret[i];
      if ('object' == typeof str) continue;
      var m = regexp.exec(str);
      if (!m) continue;

      var contents = m[0];
      var before = str.slice(0, m.index);
      var after = str.slice(m.index + contents.length);
      var args = [i, 1];
      var token = {
        type: key,
        value: rule.children ? this.parse(contents, rule.children) : contents
      };

      if (before) args.push(before);
      args.push(token);
      if (after) args.push(after);
      ret.splice.apply(ret, args);
    }
  }

  return ret;
};

/**
 * Stringify a given `ast`.
 *
 * @param {Array} ast
 * @return {String}
 */

Highlight.prototype.stringify = function (ast) {
  var prefix = this.prefix();
  var self = this;

  return ast.map(function (t) {
    if ('string' == typeof t) return escape(t);
    var type = t.type;
    var value = 'object' == typeof t.value ? self.stringify(t.value) : escape(t.value);
    return '<span class="' + prefix + type + '">' + value + '</span>';
  }).join('');
};

/**
 * Language class matcher.
 */

var matcher = /\blang(?:uage)?-(\w+)\b/i;

/**
 * Get the code language for a given `el`. First look for a `data-language`
 * attribute, then a `language-*` class, then search up the DOM tree for them.
 *
 * @param {Element} el
 * @return {String}
 */

function lang(el) {
  if (!el) return;
  var m;
  if (el.hasAttribute('data-language')) return el.getAttribute('data-language');
  if (m = matcher.exec(el.className)) return m[1];
  return language(el.parentNode);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodEAwLjAuMi9saWIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7Ozs7OztBQU1wQyxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7Ozs7O0FBTTNCLFNBQVMsU0FBUyxHQUFFO0FBQ2xCLE1BQUksRUFBRSxJQUFJLFlBQVksU0FBUyxDQUFBLEFBQUMsRUFBRSxPQUFPLElBQUksU0FBUyxFQUFFLENBQUM7QUFDekQsTUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDcEIsTUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztDQUMzQjs7Ozs7Ozs7O0FBU0QsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsVUFBUyxNQUFNLEVBQUM7QUFDeEMsUUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2IsU0FBTyxJQUFJLENBQUM7Q0FDYixDQUFDOzs7Ozs7Ozs7QUFTRixTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFTLE1BQU0sRUFBQztBQUMzQyxNQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDM0MsTUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdEIsU0FBTyxJQUFJLENBQUM7Q0FDYixDQUFBOzs7Ozs7Ozs7O0FBVUQsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBUyxRQUFRLEVBQUUsT0FBTyxFQUFDO0FBQ3hELE1BQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQ25DLFNBQU8sSUFBSSxDQUFDO0NBQ2IsQ0FBQzs7Ozs7Ozs7OztBQVVGLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVMsTUFBTSxFQUFFLFFBQVEsRUFBQztBQUNyRCxNQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN2QyxNQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLFNBQU8sR0FBRyxDQUFDO0NBQ1osQ0FBQzs7Ozs7Ozs7O0FBU0YsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsVUFBUyxFQUFFLEVBQUUsUUFBUSxFQUFDO0FBQ2xELE1BQUksUUFBUSxJQUFJLE9BQU8sRUFBRSxFQUFFLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzNELE1BQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxRQUFRLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUQsSUFBRSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7Q0FDcEIsQ0FBQzs7Ozs7Ozs7O0FBU0YsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBUyxHQUFHLEVBQUUsUUFBUSxFQUFDO0FBQ3BELE1BQUksUUFBUSxJQUFJLE9BQU8sR0FBRyxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7Q0FDbEUsQ0FBQzs7Ozs7O0FBTUYsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsWUFBVTtBQUNsQyxNQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7QUFDNUQsTUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLE1BQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztDQUM5RCxDQUFDOzs7Ozs7Ozs7O0FBVUYsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBUyxNQUFNLEVBQUUsT0FBTyxFQUFDO0FBQ25ELE1BQUksUUFBUSxJQUFJLE9BQU8sT0FBTyxFQUFFO0FBQzlCLFFBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUNuQixXQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQixRQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0dBQ2xFOztBQUVELE1BQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3hELE1BQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDdkIsTUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFbkIsT0FBSyxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUU7QUFDdkIsUUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLFFBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDOztBQUVsQyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNuQyxVQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakIsVUFBSSxRQUFRLElBQUksT0FBTyxHQUFHLEVBQUUsU0FBUztBQUNyQyxVQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLFVBQUksQ0FBQyxDQUFDLEVBQUUsU0FBUzs7QUFFakIsVUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLFVBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQyxVQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pELFVBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLFVBQUksS0FBSyxHQUFHO0FBQ1YsWUFBSSxFQUFFLEdBQUc7QUFDVCxhQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUTtPQUN0RSxDQUFDOztBQUVGLFVBQUksTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUIsVUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqQixVQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVCLFNBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM3QjtHQUNGOztBQUVELFNBQU8sR0FBRyxDQUFDO0NBQ1osQ0FBQTs7Ozs7Ozs7O0FBU0QsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBUyxHQUFHLEVBQUM7QUFDM0MsTUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzNCLE1BQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIsU0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQ3hCLFFBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxFQUFFLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLFFBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDbEIsUUFBSSxLQUFLLEdBQUcsUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQ3ZCLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEIsV0FBTyxlQUFlLEdBQUcsTUFBTSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLFNBQVMsQ0FBQztHQUNuRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ2IsQ0FBQzs7Ozs7O0FBTUYsSUFBSSxPQUFPLEdBQUcsMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7QUFVekMsU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFDO0FBQ2YsTUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPO0FBQ2hCLE1BQUksQ0FBQyxDQUFDO0FBQ04sTUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM5RSxNQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRCxTQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7Q0FDaEMiLCJmaWxlIjoiY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0QDAuMC4yL2xpYi9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgZXNjYXBlID0gcmVxdWlyZSgnZXNjYXBlLWh0bWwnKTtcblxuLyoqXG4gKiBFeHBvc2UgYEhpZ2hsaWdodGAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBIaWdobGlnaHQ7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgSGlnaGxpZ2h0YCBpbnN0YW5jZS5cbiAqL1xuXG5mdW5jdGlvbiBIaWdobGlnaHQoKXtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEhpZ2hsaWdodCkpIHJldHVybiBuZXcgSGlnaGxpZ2h0KCk7XG4gIHRoaXMubGFuZ3VhZ2VzID0ge307XG4gIHRoaXMucHJlZml4KCdIaWdobGlnaHQtJyk7XG59XG5cbi8qKlxuICogVXNlIGEgYHBsdWdpbmAgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGx1Z2luXG4gKiBAcmV0dXJuIHtIaWdobGlnaHR9XG4gKi9cblxuSGlnaGxpZ2h0LnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbihwbHVnaW4pe1xuICBwbHVnaW4odGhpcyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBHZXQgb3Igc2V0IHRoZSBoaWdobGlnaHRlZCBjbGFzcyBgcHJlZml4YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJlZml4XG4gKiBAcmV0dXJuIHtIaWdobGlnaHQgb3IgU3RyaW5nfVxuICovXG5cbkhpZ2hsaWdodC5wcm90b3R5cGUucHJlZml4ID0gZnVuY3Rpb24ocHJlZml4KXtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcHJlZml4O1xuICB0aGlzLl9wcmVmaXggPSBwcmVmaXg7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIERlZmluZSBhIG5ldyBgbGFuZ3VhZ2VgIHdpdGggYSBgZ3JhbW1hcmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlXG4gKiBAcGFyYW0ge09iamVjdH0gZ3JhbW1hclxuICogQHJldHVybiB7SGlnaGxpZ2h0fVxuICovXG5cbkhpZ2hsaWdodC5wcm90b3R5cGUubGFuZ3VhZ2UgPSBmdW5jdGlvbihsYW5ndWFnZSwgZ3JhbW1hcil7XG4gIHRoaXMubGFuZ3VhZ2VzW2xhbmd1YWdlXSA9IGdyYW1tYXI7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBIaWdobGlnaHQgYW4gSFRNTCBgc3RyaW5nYCBvZiBhIGdpdmVuIGBsYW5ndWFnZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuSGlnaGxpZ2h0LnByb3RvdHlwZS5zdHJpbmcgPSBmdW5jdGlvbihzdHJpbmcsIGxhbmd1YWdlKXtcbiAgdmFyIGFzdCA9IHRoaXMucGFyc2Uoc3RyaW5nLCBsYW5ndWFnZSk7XG4gIHZhciBzdHIgPSB0aGlzLnN0cmluZ2lmeShhc3QpO1xuICByZXR1cm4gc3RyO1xufTtcblxuLyoqXG4gKiBIaWdobGlnaHQgYW4gYGVsYCwgd2l0aCBvcHRpb25hbCBgbGFuZ3VhZ2VgLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudCBvciBTdHJpbmd9IGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2UgKG9wdGlvbmFsKVxuICovXG5cbkhpZ2hsaWdodC5wcm90b3R5cGUuZWxlbWVudCA9IGZ1bmN0aW9uKGVsLCBsYW5ndWFnZSl7XG4gIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZWwpIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG4gIHZhciBzdHIgPSB0aGlzLnN0cmluZyhlbC50ZXh0Q29udGVudCwgbGFuZ3VhZ2UgfHwgbGFuZyhlbCkpO1xuICBlbC5pbm5lckhUTUwgPSBzdHI7XG59O1xuXG4vKipcbiAqIEhpZ2hsaWdodCBhbiBhcnJheSBvZiBgZWxzYCwgd2l0aCBvcHRpb25hbCBgbGFuZ3VhZ2VgLlxuICpcbiAqIEBwYXJhbSB7QXJyYXkgb3IgU3RyaW5nfSBlbHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZSAob3B0aW9uYWwpXG4gKi9cblxuSGlnaGxpZ2h0LnByb3RvdHlwZS5lbGVtZW50cyA9IGZ1bmN0aW9uKGVscywgbGFuZ3VhZ2Upe1xuICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGVscykgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbHMpO1xuICBmb3IgKHZhciBpID0gMCwgZWw7IGVsID0gZWxzW2ldOyBpKyspIHRoaXMuZWxlbWVudChlbCwgbGFuZ3VhZ2UpO1xufTtcblxuLyoqXG4gKiBIaWdobGlnaHQgYWxsIGVsZW1lbnRzIGluIHRoZSBET00gd2l0aCBsYW5ndWFnZSBhdHRyaWJ1dGVzLlxuICovXG5cbkhpZ2hsaWdodC5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5lbGVtZW50cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sYW5ndWFnZV0nKSk7XG4gIHRoaXMuZWxlbWVudHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzKj1cImxhbmd1YWdlLVwiXScpKTtcbiAgdGhpcy5lbGVtZW50cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwibGFuZy1cIl0nKSk7XG59O1xuXG4vKipcbiAqIFBhcnNlIGEgYHN0cmluZ2Agd2l0aCBhIGdpdmVuIGxhbmd1YWdlJ3MgYGdyYW1tYXJgLCByZXR1cm5pbmcgYW4gQVNULlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEBwYXJhbSB7U3RyaW5nIG9yIE9iamVjdH0gZ3JhbW1hclxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuSGlnaGxpZ2h0LnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKHN0cmluZywgZ3JhbW1hcil7XG4gIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZ3JhbW1hcikge1xuICAgIHZhciBsYW5nID0gZ3JhbW1hcjtcbiAgICBncmFtbWFyID0gdGhpcy5sYW5ndWFnZXNbbGFuZ107XG4gICAgaWYgKCFncmFtbWFyKSB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gbGFuZ3VhZ2UgXCInICsgbGFuZyArICdcIicpO1xuICB9XG5cbiAgaWYgKCFncmFtbWFyKSB0aHJvdyBuZXcgRXJyb3IoJ211c3QgcHJvdmlkZSBhIGdyYW1tYXInKTtcbiAgaWYgKCFzdHJpbmcpIHJldHVybiBbXTtcbiAgdmFyIHJldCA9IFtzdHJpbmddO1xuXG4gIGZvciAodmFyIGtleSBpbiBncmFtbWFyKSB7XG4gICAgdmFyIHJ1bGUgPSBncmFtbWFyW2tleV07XG4gICAgdmFyIHJlZ2V4cCA9IHJ1bGUucGF0dGVybiB8fCBydWxlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzdHIgPSByZXRbaV07XG4gICAgICBpZiAoJ29iamVjdCcgPT0gdHlwZW9mIHN0cikgY29udGludWU7XG4gICAgICB2YXIgbSA9IHJlZ2V4cC5leGVjKHN0cik7XG4gICAgICBpZiAoIW0pIGNvbnRpbnVlO1xuXG4gICAgICB2YXIgY29udGVudHMgPSBtWzBdO1xuICAgICAgdmFyIGJlZm9yZSA9IHN0ci5zbGljZSgwLCBtLmluZGV4KTtcbiAgICAgIHZhciBhZnRlciA9IHN0ci5zbGljZShtLmluZGV4ICsgY29udGVudHMubGVuZ3RoKTtcbiAgICAgIHZhciBhcmdzID0gW2ksIDFdO1xuICAgICAgdmFyIHRva2VuID0ge1xuICAgICAgICB0eXBlOiBrZXksXG4gICAgICAgIHZhbHVlOiBydWxlLmNoaWxkcmVuID8gdGhpcy5wYXJzZShjb250ZW50cywgcnVsZS5jaGlsZHJlbikgOiBjb250ZW50c1xuICAgICAgfTtcblxuICAgICAgaWYgKGJlZm9yZSkgYXJncy5wdXNoKGJlZm9yZSk7XG4gICAgICBhcmdzLnB1c2godG9rZW4pO1xuICAgICAgaWYgKGFmdGVyKSBhcmdzLnB1c2goYWZ0ZXIpO1xuICAgICAgcmV0LnNwbGljZS5hcHBseShyZXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogU3RyaW5naWZ5IGEgZ2l2ZW4gYGFzdGAuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXN0XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuSGlnaGxpZ2h0LnByb3RvdHlwZS5zdHJpbmdpZnkgPSBmdW5jdGlvbihhc3Qpe1xuICB2YXIgcHJlZml4ID0gdGhpcy5wcmVmaXgoKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHJldHVybiBhc3QubWFwKGZ1bmN0aW9uKHQpe1xuICAgIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgdCkgcmV0dXJuIGVzY2FwZSh0KTtcbiAgICB2YXIgdHlwZSA9IHQudHlwZTtcbiAgICB2YXIgdmFsdWUgPSAnb2JqZWN0JyA9PSB0eXBlb2YgdC52YWx1ZVxuICAgICAgPyBzZWxmLnN0cmluZ2lmeSh0LnZhbHVlKVxuICAgICAgOiBlc2NhcGUodC52YWx1ZSk7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBwcmVmaXggKyB0eXBlICsgJ1wiPicgKyB2YWx1ZSArICc8L3NwYW4+JztcbiAgfSkuam9pbignJyk7XG59O1xuXG4vKipcbiAqIExhbmd1YWdlIGNsYXNzIG1hdGNoZXIuXG4gKi9cblxudmFyIG1hdGNoZXIgPSAvXFxibGFuZyg/OnVhZ2UpPy0oXFx3KylcXGIvaTtcblxuLyoqXG4gKiBHZXQgdGhlIGNvZGUgbGFuZ3VhZ2UgZm9yIGEgZ2l2ZW4gYGVsYC4gRmlyc3QgbG9vayBmb3IgYSBgZGF0YS1sYW5ndWFnZWBcbiAqIGF0dHJpYnV0ZSwgdGhlbiBhIGBsYW5ndWFnZS0qYCBjbGFzcywgdGhlbiBzZWFyY2ggdXAgdGhlIERPTSB0cmVlIGZvciB0aGVtLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBsYW5nKGVsKXtcbiAgaWYgKCFlbCkgcmV0dXJuO1xuICB2YXIgbTtcbiAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1sYW5ndWFnZScpKSByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxhbmd1YWdlJyk7XG4gIGlmIChtID0gbWF0Y2hlci5leGVjKGVsLmNsYXNzTmFtZSkpIHJldHVybiBtWzFdO1xuICByZXR1cm4gbGFuZ3VhZ2UoZWwucGFyZW50Tm9kZSk7XG59Il19
}, {"escape-html":26}],
26: [function(require, module, exports) {
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */

'use strict';

/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;
      case 38:
        // &
        escape = '&amp;';
        break;
      case 39:
        // '
        escape = '&#39;';
        break;
      case 60:
        // <
        escape = '&lt;';
        break;
      case 62:
        // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tcG9uZW50LWVzY2FwZS1odG1sQHYxLjAuMy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVFBLFlBQVksQ0FBQzs7Ozs7OztBQU9iLElBQUksZUFBZSxHQUFHLFNBQVMsQ0FBQzs7Ozs7OztBQU9oQyxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQzs7Ozs7Ozs7OztBQVU1QixTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztBQUN0QixNQUFJLEtBQUssR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV0QyxNQUFJLENBQUMsS0FBSyxFQUFFO0FBQ1YsV0FBTyxHQUFHLENBQUM7R0FDWjs7QUFFRCxNQUFJLE1BQU0sQ0FBQztBQUNYLE1BQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLE1BQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNkLE1BQUksU0FBUyxHQUFHLENBQUMsQ0FBQzs7QUFFbEIsT0FBSyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtBQUNyRCxZQUFRLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0FBQzNCLFdBQUssRUFBRTs7QUFDTCxjQUFNLEdBQUcsUUFBUSxDQUFDO0FBQ2xCLGNBQU07QUFBQSxBQUNSLFdBQUssRUFBRTs7QUFDTCxjQUFNLEdBQUcsT0FBTyxDQUFDO0FBQ2pCLGNBQU07QUFBQSxBQUNSLFdBQUssRUFBRTs7QUFDTCxjQUFNLEdBQUcsT0FBTyxDQUFDO0FBQ2pCLGNBQU07QUFBQSxBQUNSLFdBQUssRUFBRTs7QUFDTCxjQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ2hCLGNBQU07QUFBQSxBQUNSLFdBQUssRUFBRTs7QUFDTCxjQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ2hCLGNBQU07QUFBQSxBQUNSO0FBQ0UsaUJBQVM7QUFBQSxLQUNaOztBQUVELFFBQUksU0FBUyxLQUFLLEtBQUssRUFBRTtBQUN2QixVQUFJLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDekM7O0FBRUQsYUFBUyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDdEIsUUFBSSxJQUFJLE1BQU0sQ0FBQztHQUNoQjs7QUFFRCxTQUFPLFNBQVMsS0FBSyxLQUFLLEdBQ3RCLElBQUksR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FDdEMsSUFBSSxDQUFDO0NBQ1YiLCJmaWxlIjoiY29tcG9uZW50cy9jb21wb25lbnQtZXNjYXBlLWh0bWxAdjEuMC4zL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGVzY2FwZS1odG1sXG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDEzIFRKIEhvbG93YXljaHVrXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBBbmRyZWFzIEx1YmJlXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBUaWFuY2hlbmcgXCJUaW1vdGh5XCIgR3VcbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgbWF0Y2hIdG1sUmVnRXhwID0gL1tcIicmPD5dLztcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVzY2FwZUh0bWw7XG5cbi8qKlxuICogRXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyBpbiB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGh0bWwuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBlc2NhcGUgZm9yIGluc2VydGluZyBpbnRvIEhUTUxcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGVIdG1sKHN0cmluZykge1xuICB2YXIgc3RyID0gJycgKyBzdHJpbmc7XG4gIHZhciBtYXRjaCA9IG1hdGNoSHRtbFJlZ0V4cC5leGVjKHN0cik7XG5cbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICB2YXIgZXNjYXBlO1xuICB2YXIgaHRtbCA9ICcnO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGFzdEluZGV4ID0gMDtcblxuICBmb3IgKGluZGV4ID0gbWF0Y2guaW5kZXg7IGluZGV4IDwgc3RyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHN3aXRjaCAoc3RyLmNoYXJDb2RlQXQoaW5kZXgpKSB7XG4gICAgICBjYXNlIDM0OiAvLyBcIlxuICAgICAgICBlc2NhcGUgPSAnJnF1b3Q7JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM4OiAvLyAmXG4gICAgICAgIGVzY2FwZSA9ICcmYW1wOyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOTogLy8gJ1xuICAgICAgICBlc2NhcGUgPSAnJiMzOTsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjA6IC8vIDxcbiAgICAgICAgZXNjYXBlID0gJyZsdDsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjI6IC8vID5cbiAgICAgICAgZXNjYXBlID0gJyZndDsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChsYXN0SW5kZXggIT09IGluZGV4KSB7XG4gICAgICBodG1sICs9IHN0ci5zdWJzdHJpbmcobGFzdEluZGV4LCBpbmRleCk7XG4gICAgfVxuXG4gICAgbGFzdEluZGV4ID0gaW5kZXggKyAxO1xuICAgIGh0bWwgKz0gZXNjYXBlO1xuICB9XG5cbiAgcmV0dXJuIGxhc3RJbmRleCAhPT0gaW5kZXhcbiAgICA/IGh0bWwgKyBzdHIuc3Vic3RyaW5nKGxhc3RJbmRleCwgaW5kZXgpXG4gICAgOiBodG1sO1xufVxuIl19
}, {}],
14: [function(require, module, exports) {

/**
 * Expose `objectiveC`
 */

'use strict';

module.exports = objectiveC;

/**
 * Add `Objective-C` as a plugin.
 *
 * @param {Highlight} highlight
 * @api public
 */

function objectiveC(highlight) {
  highlight.language('objective-c', objectiveC).language('objc', objectiveC);
}

/**
 * Methods
 */

objectiveC.method = /\[\w+ (\w+)\]/;

/**
 * Booleans
 */

objectiveC.boolean = /\b(yes|no|true|false)\b/i;

/**
 * Comments
 */

objectiveC.comment = /(?!\\{2})(\/\*[\w\W]*?\*\/|\/\/.*?$)/m;

/**
 * Classes
 */

objectiveC['class'] = /@(implementation|interface|class) +(\w+)/;
objectiveC['class'].children = { keyword: /@(implementation|interface|class)/ };

/**
 * Keywords
 */

objectiveC.keyword = /\b(void|char|short|int|long|float|double|signed|unsigned|id|const|volatile|in|out|inout|bycopy|byref|oneway|self|super)\b/;

/**
 * Numbers
 */

objectiveC.number = /\b@?[-+]?(0x[A-Fa-f0-9]+|\d+)\b/;

/**
 * Strings
 */

objectiveC.string = /(@?"(\\?.)*?")/;

/**
 * Operator
 */

objectiveC.operator = /([-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%)/;

/**
 * Punctuation
 */

objectiveC.punctuation = /[{}[\];(),.:]/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1vYmplY3RpdmUtY0BtYXN0ZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDOzs7Ozs7Ozs7QUFTNUIsU0FBUyxVQUFVLENBQUMsU0FBUyxFQUFDO0FBQzVCLFdBQVMsQ0FDTixRQUFRLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUNuQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0NBQ2pDOzs7Ozs7QUFNRCxVQUFVLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQzs7Ozs7O0FBTXBDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsMEJBQTBCLENBQUM7Ozs7OztBQU1oRCxVQUFVLENBQUMsT0FBTyxHQUFHLHVDQUF1QyxDQUFDOzs7Ozs7QUFNN0QsVUFBVSxTQUFNLEdBQUcsMENBQTBDLENBQUM7QUFDOUQsVUFBVSxTQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLENBQUM7Ozs7OztBQU03RSxVQUFVLENBQUMsT0FBTyxHQUFHLDJIQUEySCxDQUFDOzs7Ozs7QUFNakosVUFBVSxDQUFDLE1BQU0sR0FBRyxpQ0FBaUMsQ0FBQzs7Ozs7O0FBTXRELFVBQVUsQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUM7Ozs7OztBQU1yQyxVQUFVLENBQUMsUUFBUSxHQUFHLHlGQUF5RixDQUFDOzs7Ozs7QUFNaEgsVUFBVSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LW9iamVjdGl2ZS1jQG1hc3Rlci9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEV4cG9zZSBgb2JqZWN0aXZlQ2BcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdGl2ZUM7XG5cbi8qKlxuICogQWRkIGBPYmplY3RpdmUtQ2AgYXMgYSBwbHVnaW4uXG4gKlxuICogQHBhcmFtIHtIaWdobGlnaHR9IGhpZ2hsaWdodFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBvYmplY3RpdmVDKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodFxuICAgIC5sYW5ndWFnZSgnb2JqZWN0aXZlLWMnLCBvYmplY3RpdmVDKVxuICAgIC5sYW5ndWFnZSgnb2JqYycsIG9iamVjdGl2ZUMpO1xufVxuXG4vKipcbiAqIE1ldGhvZHNcbiAqL1xuXG5vYmplY3RpdmVDLm1ldGhvZCA9IC9cXFtcXHcrIChcXHcrKVxcXS87XG5cbi8qKlxuICogQm9vbGVhbnNcbiAqL1xuXG5vYmplY3RpdmVDLmJvb2xlYW4gPSAvXFxiKHllc3xub3x0cnVlfGZhbHNlKVxcYi9pO1xuXG4vKipcbiAqIENvbW1lbnRzXG4gKi9cblxub2JqZWN0aXZlQy5jb21tZW50ID0gLyg/IVxcXFx7Mn0pKFxcL1xcKltcXHdcXFddKj9cXCpcXC98XFwvXFwvLio/JCkvbTtcblxuLyoqXG4gKiBDbGFzc2VzXG4gKi9cblxub2JqZWN0aXZlQy5jbGFzcyA9IC9AKGltcGxlbWVudGF0aW9ufGludGVyZmFjZXxjbGFzcykgKyhcXHcrKS87XG5vYmplY3RpdmVDLmNsYXNzLmNoaWxkcmVuID0geyBrZXl3b3JkOiAvQChpbXBsZW1lbnRhdGlvbnxpbnRlcmZhY2V8Y2xhc3MpLyB9O1xuXG4vKipcbiAqIEtleXdvcmRzXG4gKi9cblxub2JqZWN0aXZlQy5rZXl3b3JkID0gL1xcYih2b2lkfGNoYXJ8c2hvcnR8aW50fGxvbmd8ZmxvYXR8ZG91YmxlfHNpZ25lZHx1bnNpZ25lZHxpZHxjb25zdHx2b2xhdGlsZXxpbnxvdXR8aW5vdXR8Ynljb3B5fGJ5cmVmfG9uZXdheXxzZWxmfHN1cGVyKVxcYi87XG5cbi8qKlxuICogTnVtYmVyc1xuICovXG5cbm9iamVjdGl2ZUMubnVtYmVyID0gL1xcYkA/Wy0rXT8oMHhbQS1GYS1mMC05XSt8XFxkKylcXGIvO1xuXG4vKipcbiAqIFN0cmluZ3NcbiAqL1xuXG5vYmplY3RpdmVDLnN0cmluZyA9IC8oQD9cIihcXFxcPy4pKj9cIikvO1xuXG4vKipcbiAqIE9wZXJhdG9yXG4gKi9cblxub2JqZWN0aXZlQy5vcGVyYXRvciA9IC8oWy0rXXsxLDJ9fCF8Jmx0Oz0/fD49P3w9ezEsM318Jmx0O3sxLDJ9fD57MSwyfXwoJmFtcDspezEsMn18XFx8ezEsMn18XFw/fFxcKnxcXC98XFx+fFxcXnxcXCUpLztcblxuLyoqXG4gKiBQdW5jdHVhdGlvblxuICovXG5cbm9iamVjdGl2ZUMucHVuY3R1YXRpb24gPSAvW3t9W1xcXTsoKSwuOl0vOyJdfQ==
}, {}],
15: [function(require, module, exports) {

/**
 * Expose `plugin`.
 */

'use strict';

module.exports = plugin;

/**
 * Plugin to highlight Javascript code.
 *
 * @param {Highlight} highlight
 */

function plugin(highlight) {
  highlight.language('javascript', grammar).language('js', grammar);
}

/**
 * Grammar.
 */

var grammar = {};

/**
 * Comments.
 */

grammar.comment = /(?!\\{2})(\/\*[\w\W]*?\*\/|\/\/.*?$)/m;

/**
 * Booleans.
 */

grammar.boolean = /\b(true|false)\b/;

/**
 * Strings.
 */

grammar.string = /(("|')(\\?.)*?\2)/;

/**
 * Keywords.
 */

grammar.keyword = /\b(break|catch|continue|delete|do|else|finally|for|function|if|in|instanceof|let|new|null|return|this|self|throw|try|typeof|var|while|with|yield)\b/;

/**
 * Constants.
 */

grammar.constant = /\b(document|window|global)\b/;

/**
 * Functions.
 *
 * Children are set separately to maintain ordering.
 */

grammar['function'] = {
  pattern: /(\w+)\(/,
  children: {}
};

grammar['function'].children['class'] = /\b([A-Z]\w*)\b/;
grammar['function'].children['function'] = /(\w+)/;
grammar['function'].children.punctuation = /\(/;

/**
 * Numbers.
 */

grammar.number = /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/;

/**
 * Operators.
 */

grammar.operator = /([-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%)/;

/**
 * Punctuation.
 */

grammar.punctuation = /[{}[\];(),.:]/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1qYXZhc2NyaXB0QDAuMC4zL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7O0FBUXhCLFNBQVMsTUFBTSxDQUFDLFNBQVMsRUFBQztBQUN4QixXQUFTLENBQ04sUUFBUSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FDL0IsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztDQUM1Qjs7Ozs7O0FBTUQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDOzs7Ozs7QUFNakIsT0FBTyxDQUFDLE9BQU8sR0FBRyx1Q0FBdUMsQ0FBQzs7Ozs7O0FBTTFELE9BQU8sQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7Ozs7OztBQU1yQyxPQUFPLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDOzs7Ozs7QUFNckMsT0FBTyxDQUFDLE9BQU8sR0FBRyxxSkFBcUosQ0FBQzs7Ozs7O0FBTXhLLE9BQU8sQ0FBQyxRQUFRLEdBQUcsOEJBQThCLENBQUM7Ozs7Ozs7O0FBUWxELE9BQU8sWUFBUyxHQUFHO0FBQ2pCLFNBQU8sRUFBRSxTQUFTO0FBQ2xCLFVBQVEsRUFBRSxFQUFFO0NBQ2IsQ0FBQzs7QUFFRixPQUFPLFlBQVMsQ0FBQyxRQUFRLFNBQU0sR0FBRyxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLFlBQVMsQ0FBQyxRQUFRLFlBQVMsR0FBRyxPQUFPLENBQUM7QUFDN0MsT0FBTyxZQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Ozs7OztBQU03QyxPQUFPLENBQUMsTUFBTSxHQUFHLDREQUE0RCxDQUFDOzs7Ozs7QUFNOUUsT0FBTyxDQUFDLFFBQVEsR0FBRyx5RkFBeUYsQ0FBQzs7Ozs7O0FBTTdHLE9BQU8sQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1qYXZhc2NyaXB0QDAuMC4zL2xpYi9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEV4cG9zZSBgcGx1Z2luYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsdWdpbjtcblxuLyoqXG4gKiBQbHVnaW4gdG8gaGlnaGxpZ2h0IEphdmFzY3JpcHQgY29kZS5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKi9cblxuZnVuY3Rpb24gcGx1Z2luKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodFxuICAgIC5sYW5ndWFnZSgnamF2YXNjcmlwdCcsIGdyYW1tYXIpXG4gICAgLmxhbmd1YWdlKCdqcycsIGdyYW1tYXIpO1xufVxuXG4vKipcbiAqIEdyYW1tYXIuXG4gKi9cblxudmFyIGdyYW1tYXIgPSB7fTtcblxuLyoqXG4gKiBDb21tZW50cy5cbiAqL1xuXG5ncmFtbWFyLmNvbW1lbnQgPSAvKD8hXFxcXHsyfSkoXFwvXFwqW1xcd1xcV10qP1xcKlxcL3xcXC9cXC8uKj8kKS9tO1xuXG4vKipcbiAqIEJvb2xlYW5zLlxuICovXG5cbmdyYW1tYXIuYm9vbGVhbiA9IC9cXGIodHJ1ZXxmYWxzZSlcXGIvO1xuXG4vKipcbiAqIFN0cmluZ3MuXG4gKi9cblxuZ3JhbW1hci5zdHJpbmcgPSAvKChcInwnKShcXFxcPy4pKj9cXDIpLztcblxuLyoqXG4gKiBLZXl3b3Jkcy5cbiAqL1xuXG5ncmFtbWFyLmtleXdvcmQgPSAvXFxiKGJyZWFrfGNhdGNofGNvbnRpbnVlfGRlbGV0ZXxkb3xlbHNlfGZpbmFsbHl8Zm9yfGZ1bmN0aW9ufGlmfGlufGluc3RhbmNlb2Z8bGV0fG5ld3xudWxsfHJldHVybnx0aGlzfHNlbGZ8dGhyb3d8dHJ5fHR5cGVvZnx2YXJ8d2hpbGV8d2l0aHx5aWVsZClcXGIvO1xuXG4vKipcbiAqIENvbnN0YW50cy5cbiAqL1xuXG5ncmFtbWFyLmNvbnN0YW50ID0gL1xcYihkb2N1bWVudHx3aW5kb3d8Z2xvYmFsKVxcYi87XG5cbi8qKlxuICogRnVuY3Rpb25zLlxuICpcbiAqIENoaWxkcmVuIGFyZSBzZXQgc2VwYXJhdGVseSB0byBtYWludGFpbiBvcmRlcmluZy5cbiAqL1xuXG5ncmFtbWFyLmZ1bmN0aW9uID0ge1xuICBwYXR0ZXJuOiAvKFxcdyspXFwoLyxcbiAgY2hpbGRyZW46IHt9XG59O1xuXG5ncmFtbWFyLmZ1bmN0aW9uLmNoaWxkcmVuLmNsYXNzID0gL1xcYihbQS1aXVxcdyopXFxiLztcbmdyYW1tYXIuZnVuY3Rpb24uY2hpbGRyZW4uZnVuY3Rpb24gPSAvKFxcdyspLztcbmdyYW1tYXIuZnVuY3Rpb24uY2hpbGRyZW4ucHVuY3R1YXRpb24gPSAvXFwoLztcblxuLyoqXG4gKiBOdW1iZXJzLlxuICovXG5cbmdyYW1tYXIubnVtYmVyID0gL1xcYi0/KDB4W1xcZEEtRmEtZl0rfFxcZCpcXC4/XFxkKyhbRWVdLT9cXGQrKT98TmFOfC0/SW5maW5pdHkpXFxiLztcblxuLyoqXG4gKiBPcGVyYXRvcnMuXG4gKi9cblxuZ3JhbW1hci5vcGVyYXRvciA9IC8oWy0rXXsxLDJ9fCF8Jmx0Oz0/fD49P3w9ezEsM318Jmx0O3sxLDJ9fD57MSwyfXwoJmFtcDspezEsMn18XFx8ezEsMn18XFw/fFxcKnxcXC98XFx+fFxcXnxcXCUpLztcblxuLyoqXG4gKiBQdW5jdHVhdGlvbi5cbiAqL1xuXG5ncmFtbWFyLnB1bmN0dWF0aW9uID0gL1t7fVtcXF07KCksLjpdLzsiXX0=
}, {}],
16: [function(require, module, exports) {

/**
 * Expose `csharp`
 */

'use strict';

module.exports = csharp;

/**
 * Add `csharp` as a plugin.
 *
 * @param {Highlight} highlight
 * @api public
 */

function csharp(highlight) {
  highlight.language('csharp', csharp);
  highlight.language('c-sharp', csharp);
  highlight.language('c#', csharp);
}

/**
 * Booleans
 */

csharp.boolean = /\b(true|false)\b/;

/**
 * Comments
 */

csharp.comment = /(?!\\{2})(\/\*[\w\W]*?\*\/|\/\/.*?$)/m;

/**
 * Classes
 */

csharp['class'] = /class +(\w+)/;
csharp['class'].children = { keyword: /class/ };

/**
 * Strings
 */

csharp.string = /("(\\?.)*?")/;

/**
 * Keywords
 */

csharp.keyword = /\b(abstract|base|bool|break|byte|case|catch|char|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|lock|long|namespace|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|stackalloc|static|string|struct|switch|this|throw|try|uint|ulong|unsafe|ushort|using|virtual|void|volatile|while)\b/;

/**
 * Numbers
 */

csharp.number = /\b[-+]?(0x[\da-f]+|\d*\.?\d+(e-?\d+)?)\b/;

/**
 * Method
 */

csharp.method = /(\w+) *\(/;
csharp.method.children = { punctuation: /\(/ };

/**
 * Operators
 */

csharp.operator = /(await|as|is|new|typeof|checked|unchecked|default|delegate|sizeof|->|[-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%)/;

/**
 * Punctuation
 */

csharp.punctuation = /[{}[\];(),.:]/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1jc2hhcnBAbWFzdGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Ozs7O0FBU3hCLFNBQVMsTUFBTSxDQUFDLFNBQVMsRUFBQztBQUN4QixXQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNyQyxXQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN0QyxXQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztDQUNsQzs7Ozs7O0FBTUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQzs7Ozs7O0FBTXBDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsdUNBQXVDLENBQUM7Ozs7OztBQU16RCxNQUFNLFNBQU0sR0FBRyxjQUFjLENBQUM7QUFDOUIsTUFBTSxTQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDOzs7Ozs7QUFNN0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUE7Ozs7OztBQU05QixNQUFNLENBQUMsT0FBTyxHQUFHLHNjQUFzYyxDQUFDOzs7Ozs7QUFNeGQsTUFBTSxDQUFDLE1BQU0sR0FBRywwQ0FBMEMsQ0FBQzs7Ozs7O0FBTTNELE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDOzs7Ozs7QUFNL0MsTUFBTSxDQUFDLFFBQVEsR0FBRyw2SkFBNkosQ0FBQzs7Ozs7O0FBTWhMLE1BQU0sQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1jc2hhcnBAbWFzdGVyL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRXhwb3NlIGBjc2hhcnBgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjc2hhcnA7XG5cbi8qKlxuICogQWRkIGBjc2hhcnBgIGFzIGEgcGx1Z2luLlxuICpcbiAqIEBwYXJhbSB7SGlnaGxpZ2h0fSBoaWdobGlnaHRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY3NoYXJwKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgnY3NoYXJwJywgY3NoYXJwKTtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdjLXNoYXJwJywgY3NoYXJwKTtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdjIycsIGNzaGFycCk7XG59XG5cbi8qKlxuICogQm9vbGVhbnNcbiAqL1xuXG5jc2hhcnAuYm9vbGVhbiA9IC9cXGIodHJ1ZXxmYWxzZSlcXGIvO1xuXG4vKipcbiAqIENvbW1lbnRzXG4gKi9cblxuY3NoYXJwLmNvbW1lbnQgPSAvKD8hXFxcXHsyfSkoXFwvXFwqW1xcd1xcV10qP1xcKlxcL3xcXC9cXC8uKj8kKS9tO1xuXG4vKipcbiAqIENsYXNzZXNcbiAqL1xuXG5jc2hhcnAuY2xhc3MgPSAvY2xhc3MgKyhcXHcrKS87XG5jc2hhcnAuY2xhc3MuY2hpbGRyZW4gPSB7IGtleXdvcmQ6IC9jbGFzcy8gfTtcblxuLyoqXG4gKiBTdHJpbmdzXG4gKi9cblxuY3NoYXJwLnN0cmluZyA9IC8oXCIoXFxcXD8uKSo/XCIpL1xuXG4vKipcbiAqIEtleXdvcmRzXG4gKi9cblxuY3NoYXJwLmtleXdvcmQgPSAvXFxiKGFic3RyYWN0fGJhc2V8Ym9vbHxicmVha3xieXRlfGNhc2V8Y2F0Y2h8Y2hhcnxjbGFzc3xjb25zdHxjb250aW51ZXxkZWNpbWFsfGRlZmF1bHR8ZGVsZWdhdGV8ZG98ZG91YmxlfGVsc2V8ZW51bXxldmVudHxleHBsaWNpdHxleHRlcm58ZmluYWxseXxmaXhlZHxmbG9hdHxmb3J8Zm9yZWFjaHxnb3RvfGlmfGltcGxpY2l0fGlufGludHxpbnRlcmZhY2V8aW50ZXJuYWx8bG9ja3xsb25nfG5hbWVzcGFjZXxudWxsfG9iamVjdHxvcGVyYXRvcnxvdXR8b3ZlcnJpZGV8cGFyYW1zfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZWFkb25seXxyZWZ8cmV0dXJufHNieXRlfHNlYWxlZHxzaG9ydHxzdGFja2FsbG9jfHN0YXRpY3xzdHJpbmd8c3RydWN0fHN3aXRjaHx0aGlzfHRocm93fHRyeXx1aW50fHVsb25nfHVuc2FmZXx1c2hvcnR8dXNpbmd8dmlydHVhbHx2b2lkfHZvbGF0aWxlfHdoaWxlKVxcYi87XG5cbi8qKlxuICogTnVtYmVyc1xuICovXG5cbmNzaGFycC5udW1iZXIgPSAvXFxiWy0rXT8oMHhbXFxkYS1mXSt8XFxkKlxcLj9cXGQrKGUtP1xcZCspPylcXGIvO1xuXG4vKipcbiAqIE1ldGhvZFxuICovXG5cbmNzaGFycC5tZXRob2QgPSAvKFxcdyspICpcXCgvO1xuY3NoYXJwLm1ldGhvZC5jaGlsZHJlbiA9IHsgcHVuY3R1YXRpb246IC9cXCgvIH07XG5cbi8qKlxuICogT3BlcmF0b3JzXG4gKi9cblxuY3NoYXJwLm9wZXJhdG9yID0gLyhhd2FpdHxhc3xpc3xuZXd8dHlwZW9mfGNoZWNrZWR8dW5jaGVja2VkfGRlZmF1bHR8ZGVsZWdhdGV8c2l6ZW9mfC0+fFstK117MSwyfXwhfCZsdDs9P3w+PT98PXsxLDN9fCZsdDt7MSwyfXw+ezEsMn18KCZhbXA7KXsxLDJ9fFxcfHsxLDJ9fFxcP3xcXCp8XFwvfFxcfnxcXF58XFwlKS87XG5cbi8qKlxuICogUHVuY3R1YXRpb25cbiAqL1xuXG5jc2hhcnAucHVuY3R1YXRpb24gPSAvW3t9W1xcXTsoKSwuOl0vOyJdfQ==
}, {}],
17: [function(require, module, exports) {

/**
 * Expose `python`
 */

'use strict';

module.exports = python;

/**
 * Add `python` as a language.
 *
 * @param {Highlight} highlight
 * @api public
 */

function python(highlight) {
  highlight.language('python', python);
}

/**
 * Comments
 */

python.comment = /(?!\\{2})(#.*?$)/m;

/**
 * Strings
 */

python.string = /(("""|"|')(\\?.)*?\2)/;

/**
 * Booleans
 */

python.boolean = /\b(True|False)\b/;

/**
 * Keywords
 */

python.keyword = /\b(and|as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|not|or|pass|print|raise|return|try|while|with|yield)\b/;

/**
 * Classes
 */

python['class'] = /class +(\w+)/;
python['class'].children = { keyword: /class/ };

/**
 * Functions
 */

python['function'] = /(\w+) *\(/;
python['function'].children = { punctuation: /\(/ };
/**
 * Numbers
 */

python.number = /\b[-+]?(0x[a-fA-F0-9]+|0b[0-1]+|0[0-7]+|[1-9][0-9]*)\b/;

/**
 * Operators
 */

python.operator = /([-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%|\*\*?=)/;

/**
 * Punctuation
 */

python.punctuation = /[{}[\];(),.:]/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1weXRob25AMC4wLjMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7Ozs7Ozs7QUFTeEIsU0FBUyxNQUFNLENBQUMsU0FBUyxFQUFDO0FBQ3hCLFdBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ3RDOzs7Ozs7QUFNRCxNQUFNLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDOzs7Ozs7QUFNckMsTUFBTSxDQUFDLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQzs7Ozs7O0FBTXhDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7Ozs7OztBQU1wQyxNQUFNLENBQUMsT0FBTyxHQUFHLDJLQUEySyxDQUFDOzs7Ozs7QUFPN0wsTUFBTSxTQUFNLEdBQUcsY0FBYyxDQUFDO0FBQzlCLE1BQU0sU0FBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzs7Ozs7O0FBTTdDLE1BQU0sWUFBUyxHQUFHLFdBQVcsQ0FBQztBQUM5QixNQUFNLFlBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7Ozs7O0FBS2pELE1BQU0sQ0FBQyxNQUFNLEdBQUcsd0RBQXdELENBQUM7Ozs7OztBQU16RSxNQUFNLENBQUMsUUFBUSxHQUFHLGdHQUFnRyxDQUFDOzs7Ozs7QUFNbkgsTUFBTSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LXB5dGhvbkAwLjAuMy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEV4cG9zZSBgcHl0aG9uYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcHl0aG9uO1xuXG4vKipcbiAqIEFkZCBgcHl0aG9uYCBhcyBhIGxhbmd1YWdlLlxuICpcbiAqIEBwYXJhbSB7SGlnaGxpZ2h0fSBoaWdobGlnaHRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcHl0aG9uKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgncHl0aG9uJywgcHl0aG9uKTtcbn1cblxuLyoqXG4gKiBDb21tZW50c1xuICovXG5cbnB5dGhvbi5jb21tZW50ID0gLyg/IVxcXFx7Mn0pKCMuKj8kKS9tO1xuXG4vKipcbiAqIFN0cmluZ3NcbiAqL1xuXG5weXRob24uc3RyaW5nID0gLygoXCJcIlwifFwifCcpKFxcXFw/LikqP1xcMikvO1xuXG4vKipcbiAqIEJvb2xlYW5zXG4gKi9cblxucHl0aG9uLmJvb2xlYW4gPSAvXFxiKFRydWV8RmFsc2UpXFxiLztcblxuLyoqXG4gKiBLZXl3b3Jkc1xuICovXG5cbnB5dGhvbi5rZXl3b3JkID0gL1xcYihhbmR8YXN8YXNzZXJ0fGJyZWFrfGNsYXNzfGNvbnRpbnVlfGRlZnxkZWx8ZWxpZnxlbHNlfGV4Y2VwdHxleGVjfGZpbmFsbHl8Zm9yfGZyb218Z2xvYmFsfGlmfGltcG9ydHxpbnxpc3xsYW1iZGF8bm90fG9yfHBhc3N8cHJpbnR8cmFpc2V8cmV0dXJufHRyeXx3aGlsZXx3aXRofHlpZWxkKVxcYi87XG5cblxuLyoqXG4gKiBDbGFzc2VzXG4gKi9cblxucHl0aG9uLmNsYXNzID0gL2NsYXNzICsoXFx3KykvO1xucHl0aG9uLmNsYXNzLmNoaWxkcmVuID0geyBrZXl3b3JkOiAvY2xhc3MvIH07XG5cbi8qKlxuICogRnVuY3Rpb25zXG4gKi9cblxucHl0aG9uLmZ1bmN0aW9uID0gLyhcXHcrKSAqXFwoLztcbnB5dGhvbi5mdW5jdGlvbi5jaGlsZHJlbiA9IHsgcHVuY3R1YXRpb246IC9cXCgvIH07XG4vKipcbiAqIE51bWJlcnNcbiAqL1xuXG5weXRob24ubnVtYmVyID0gL1xcYlstK10/KDB4W2EtZkEtRjAtOV0rfDBiWzAtMV0rfDBbMC03XSt8WzEtOV1bMC05XSopXFxiLztcblxuLyoqXG4gKiBPcGVyYXRvcnNcbiAqL1xuXG5weXRob24ub3BlcmF0b3IgPSAvKFstK117MSwyfXwhfCZsdDs9P3w+PT98PXsxLDN9fCZsdDt7MSwyfXw+ezEsMn18KCZhbXA7KXsxLDJ9fFxcfHsxLDJ9fFxcP3xcXCp8XFwvfFxcfnxcXF58XFwlfFxcKlxcKj89KS87XG5cbi8qKlxuICogUHVuY3R1YXRpb25cbiAqL1xuXG5weXRob24ucHVuY3R1YXRpb24gPSAvW3t9W1xcXTsoKSwuOl0vOyJdfQ==
}, {}],
18: [function(require, module, exports) {

/**
 * Expose `java`
 */

'use strict';

module.exports = java;

/**
 * Add `java` as a language.
 *
 * @param {Highlight} highlight
 * @api public
 */

function java(highlight) {
  highlight.language('java', java);
}

/**
 * Boolean
 */

java.boolean = /\b(true|false)\b/;

/**
 * Comment
 */

java.comment = /(?!\\{2})(\/\*[\w\W]*?\*\/|\/\/.*?$)/m;

/**
 * Class
 */

java['class'] = /class +(\w+)/;
java['class'].children = { keyword: /class/ };

/**
 * Keywords
 */

java.keyword = /\b(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|protected|public|return|static|staticfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/;

/**
 * Number
 */

java.number = /\b[-+]?(0[bx][\da-f]+|\d*\.?\d+(e-?\d+)?)\b/;

/**
 * String
 */

java.string = /("(\\?.)*?")/;

/**
 * Method
 */

java.method = /(\w+) *\(/;
java.method.children = { punctuation: /\(/ };

/**
 * Operator
 */

java.operator = /([-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%)/;

/**
 * Punctuation
 */

java.punctuation = /[{}[\];(),.:]/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1qYXZhQG1hc3Rlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7Ozs7OztBQVN0QixTQUFTLElBQUksQ0FBQyxTQUFTLEVBQUM7QUFDdEIsV0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDbEM7Ozs7OztBQU1ELElBQUksQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7Ozs7OztBQU1sQyxJQUFJLENBQUMsT0FBTyxHQUFHLHVDQUF1QyxDQUFDOzs7Ozs7QUFNdkQsSUFBSSxTQUFNLEdBQUcsY0FBYyxDQUFDO0FBQzVCLElBQUksU0FBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzs7Ozs7O0FBTTNDLElBQUksQ0FBQyxPQUFPLEdBQUcsNFVBQTRVLENBQUM7Ozs7OztBQU01VixJQUFJLENBQUMsTUFBTSxHQUFHLDZDQUE2QyxDQUFDOzs7Ozs7QUFNNUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7Ozs7OztBQU03QixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztBQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7Ozs7O0FBTTdDLElBQUksQ0FBQyxRQUFRLEdBQUcseUZBQXlGLENBQUM7Ozs7OztBQU0xRyxJQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL3NlZ21lbnRpby1oaWdobGlnaHQtamF2YUBtYXN0ZXIvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBFeHBvc2UgYGphdmFgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBqYXZhO1xuXG4vKipcbiAqIEFkZCBgamF2YWAgYXMgYSBsYW5ndWFnZS5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGphdmEoaGlnaGxpZ2h0KXtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdqYXZhJywgamF2YSk7XG59XG5cbi8qKlxuICogQm9vbGVhblxuICovXG5cbmphdmEuYm9vbGVhbiA9IC9cXGIodHJ1ZXxmYWxzZSlcXGIvO1xuXG4vKipcbiAqIENvbW1lbnRcbiAqL1xuXG5qYXZhLmNvbW1lbnQgPSAvKD8hXFxcXHsyfSkoXFwvXFwqW1xcd1xcV10qP1xcKlxcL3xcXC9cXC8uKj8kKS9tO1xuXG4vKipcbiAqIENsYXNzXG4gKi9cblxuamF2YS5jbGFzcyA9IC9jbGFzcyArKFxcdyspLztcbmphdmEuY2xhc3MuY2hpbGRyZW4gPSB7IGtleXdvcmQ6IC9jbGFzcy8gfTtcblxuLyoqXG4gKiBLZXl3b3Jkc1xuICovXG5cbmphdmEua2V5d29yZCA9IC9cXGIoYWJzdHJhY3R8YXNzZXJ0fGJvb2xlYW58YnJlYWt8Ynl0ZXxjYXNlfGNhdGNofGNoYXJ8Y2xhc3N8Y29uc3R8Y29udGludWV8ZGVmYXVsdHxkb3xkb3VibGV8ZWxzZXxlbnVtfGV4dGVuZHN8ZmluYWx8ZmluYWxseXxmbG9hdHxmb3J8Z290b3xpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnN0YW5jZW9mfGludHxpbnRlcmZhY2V8bG9uZ3xuYXRpdmV8bmV3fHBhY2thZ2V8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c3RhdGljfHN0YXRpY2ZwfHN1cGVyfHN3aXRjaHxzeW5jaHJvbml6ZWR8dGhpc3x0aHJvd3x0aHJvd3N8dHJhbnNpZW50fHRyeXx2b2lkfHZvbGF0aWxlfHdoaWxlKVxcYi87XG5cbi8qKlxuICogTnVtYmVyXG4gKi9cblxuamF2YS5udW1iZXIgPSAvXFxiWy0rXT8oMFtieF1bXFxkYS1mXSt8XFxkKlxcLj9cXGQrKGUtP1xcZCspPylcXGIvO1xuXG4vKipcbiAqIFN0cmluZ1xuICovXG5cbmphdmEuc3RyaW5nID0gLyhcIihcXFxcPy4pKj9cIikvO1xuXG4vKipcbiAqIE1ldGhvZFxuICovXG5cbmphdmEubWV0aG9kID0gLyhcXHcrKSAqXFwoLztcbmphdmEubWV0aG9kLmNoaWxkcmVuID0geyBwdW5jdHVhdGlvbjogL1xcKC8gfTtcblxuLyoqXG4gKiBPcGVyYXRvclxuICovXG5cbmphdmEub3BlcmF0b3IgPSAvKFstK117MSwyfXwhfCZsdDs9P3w+PT98PXsxLDN9fCZsdDt7MSwyfXw+ezEsMn18KCZhbXA7KXsxLDJ9fFxcfHsxLDJ9fFxcP3xcXCp8XFwvfFxcfnxcXF58XFwlKS87XG5cbi8qKlxuICogUHVuY3R1YXRpb25cbiAqL1xuXG5qYXZhLnB1bmN0dWF0aW9uID0gL1t7fVtcXF07KCksLjpdLzsiXX0=
}, {}],
19: [function(require, module, exports) {

/**
 * Expose `bash`
 */

'use strict';

module.exports = bash;

/**
 * Add `bash` as a language.
 *
 * @param {Highlight} highlight
 * @api public
 */

function bash(highlight) {
  highlight.language('sh', bash);
  highlight.language('bash', bash);
  highlight.language('shellscript', bash);
}

/**
 * Comments
 */

bash.comment = /(#.*?$)/m;

/**
 * Strings
 */

bash.string = /(("|')(\\?.)*?\2)/;

/**
 * Keywords
 */

bash.keyword = /\b(if|then|else|elif|fi|for|in|do|done|select|case|continue|esac|while|until|return|export|declare|typeset|local|readonly)\b/;

/**
 * Operators
 */

bash.operator = /(;|&&?|\|\||=[=~]?|!=?|&lt;|&gt;|\|)/;

/**
 * Builtins
 */

bash.builtin = /\b(alias|bg|bind|break|builtin|caller|cd|command|compgen|complete|dirs|disown|echo|enable|eval|exec|exit|false|fc|fg|getopts|hash|help|history|jobs|kill|let|logout|popd|printf|pushd|pwd|read|readonly|set|shift|shopt|source|suspend|test|times|trap|true|type|ulimit|umask|unalias|unset|wait)\b/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1iYXNoQG1hc3Rlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7Ozs7OztBQVN0QixTQUFTLElBQUksQ0FBQyxTQUFTLEVBQUM7QUFDdEIsV0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDL0IsV0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakMsV0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDekM7Ozs7OztBQU1ELElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFBOzs7Ozs7QUFNekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQzs7Ozs7O0FBTWxDLElBQUksQ0FBQyxPQUFPLEdBQUcsOEhBQThILENBQUM7Ozs7OztBQU05SSxJQUFJLENBQUMsUUFBUSxHQUFHLHNDQUFzQyxDQUFDOzs7Ozs7QUFNdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxxU0FBcVMsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL3NlZ21lbnRpby1oaWdobGlnaHQtYmFzaEBtYXN0ZXIvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBFeHBvc2UgYGJhc2hgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNoO1xuXG4vKipcbiAqIEFkZCBgYmFzaGAgYXMgYSBsYW5ndWFnZS5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGJhc2goaGlnaGxpZ2h0KXtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdzaCcsIGJhc2gpO1xuICBoaWdobGlnaHQubGFuZ3VhZ2UoJ2Jhc2gnLCBiYXNoKTtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdzaGVsbHNjcmlwdCcsIGJhc2gpO1xufVxuXG4vKipcbiAqIENvbW1lbnRzXG4gKi9cblxuYmFzaC5jb21tZW50ID0gLygjLio/JCkvbVxuXG4vKipcbiAqIFN0cmluZ3NcbiAqL1xuXG5iYXNoLnN0cmluZyA9IC8oKFwifCcpKFxcXFw/LikqP1xcMikvO1xuXG4vKipcbiAqIEtleXdvcmRzXG4gKi9cblxuYmFzaC5rZXl3b3JkID0gL1xcYihpZnx0aGVufGVsc2V8ZWxpZnxmaXxmb3J8aW58ZG98ZG9uZXxzZWxlY3R8Y2FzZXxjb250aW51ZXxlc2FjfHdoaWxlfHVudGlsfHJldHVybnxleHBvcnR8ZGVjbGFyZXx0eXBlc2V0fGxvY2FsfHJlYWRvbmx5KVxcYi87XG5cbi8qKlxuICogT3BlcmF0b3JzXG4gKi9cblxuYmFzaC5vcGVyYXRvciA9IC8oO3wmJj98XFx8XFx8fD1bPX5dP3whPT98Jmx0O3wmZ3Q7fFxcfCkvO1xuXG4vKipcbiAqIEJ1aWx0aW5zXG4gKi9cblxuYmFzaC5idWlsdGluID0gL1xcYihhbGlhc3xiZ3xiaW5kfGJyZWFrfGJ1aWx0aW58Y2FsbGVyfGNkfGNvbW1hbmR8Y29tcGdlbnxjb21wbGV0ZXxkaXJzfGRpc293bnxlY2hvfGVuYWJsZXxldmFsfGV4ZWN8ZXhpdHxmYWxzZXxmY3xmZ3xnZXRvcHRzfGhhc2h8aGVscHxoaXN0b3J5fGpvYnN8a2lsbHxsZXR8bG9nb3V0fHBvcGR8cHJpbnRmfHB1c2hkfHB3ZHxyZWFkfHJlYWRvbmx5fHNldHxzaGlmdHxzaG9wdHxzb3VyY2V8c3VzcGVuZHx0ZXN0fHRpbWVzfHRyYXB8dHJ1ZXx0eXBlfHVsaW1pdHx1bWFza3x1bmFsaWFzfHVuc2V0fHdhaXQpXFxiLzsiXX0=
}, {}],
20: [function(require, module, exports) {

/**
 * Expose `ruby`
 */

'use strict';

module.exports = ruby;

/**
 * Add `ruby` as a language.
 *
 * @param {Highlight} highlight
 * @api public
 */

function ruby(highlight) {
  highlight.language('ruby', ruby);
}

/**
 * Booleans
 */

ruby.boolean = /\b(true|false)\b/;

/**
 * Strings
 */

ruby.string = /(("|')(\\?.)*?\2)/;

/**
 * Comments
 */

ruby.comment = /(?!\\{2})(#.*?$)/m;

/**
 * Classes
 */

ruby['class'] = /class +(\w+)/;
ruby['class'].children = { keyword: /class/ };

/**
 * Keywords
 */

ruby.keyword = /\b(alias|and|begin|break|case|catch|class|def|do|elsif|else|fail|ensure|for|end|if|in|module|next|not|or|raise|redo|rescue|retry|return|then|throw|super|unless|undef|until|when|while|yield)\b/;

/**
 * Numbers
 */

ruby.number = /\b[-+]?(0x[a-fA-F0-9]+|0b[0-1_]+|0[0-7]*|[1-9][0-9_eE.]*)\b/;

/**
 * Functions
 */

ruby['function'] = /(\w+) *\(/;
ruby['function'].children = { punctuation: /\(/ };

/**
 * Operator
 */

ruby.operator = /([-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%)/;

/**
 * Punctuation
 */

ruby.punctuation = /[{}[\];(),.:]/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1ydWJ5QG1hc3Rlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7Ozs7OztBQVN0QixTQUFTLElBQUksQ0FBQyxTQUFTLEVBQUM7QUFDdEIsV0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDbEM7Ozs7OztBQU1ELElBQUksQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7Ozs7OztBQU1sQyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDOzs7Ozs7QUFNbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQzs7Ozs7O0FBTW5DLElBQUksU0FBTSxHQUFHLGNBQWMsQ0FBQztBQUM1QixJQUFJLFNBQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7Ozs7OztBQU0zQyxJQUFJLENBQUMsT0FBTyxHQUFHLGlNQUFpTSxDQUFDOzs7Ozs7QUFNak4sSUFBSSxDQUFDLE1BQU0sR0FBRyw2REFBNkQsQ0FBQzs7Ozs7O0FBTTVFLElBQUksWUFBUyxHQUFHLFdBQVcsQ0FBQztBQUM1QixJQUFJLFlBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7Ozs7OztBQU0vQyxJQUFJLENBQUMsUUFBUSxHQUFHLHlGQUF5RixDQUFDOzs7Ozs7QUFNMUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LXJ1YnlAbWFzdGVyL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRXhwb3NlIGBydWJ5YFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcnVieTtcblxuLyoqXG4gKiBBZGQgYHJ1YnlgIGFzIGEgbGFuZ3VhZ2UuXG4gKlxuICogQHBhcmFtIHtIaWdobGlnaHR9IGhpZ2hsaWdodFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBydWJ5KGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgncnVieScsIHJ1YnkpO1xufVxuXG4vKipcbiAqIEJvb2xlYW5zXG4gKi9cblxucnVieS5ib29sZWFuID0gL1xcYih0cnVlfGZhbHNlKVxcYi87XG5cbi8qKlxuICogU3RyaW5nc1xuICovXG5cbnJ1Ynkuc3RyaW5nID0gLygoXCJ8JykoXFxcXD8uKSo/XFwyKS87XG5cbi8qKlxuICogQ29tbWVudHNcbiAqL1xuXG5ydWJ5LmNvbW1lbnQgPSAvKD8hXFxcXHsyfSkoIy4qPyQpL207XG5cbi8qKlxuICogQ2xhc3Nlc1xuICovXG5cbnJ1YnkuY2xhc3MgPSAvY2xhc3MgKyhcXHcrKS87XG5ydWJ5LmNsYXNzLmNoaWxkcmVuID0geyBrZXl3b3JkOiAvY2xhc3MvIH07XG5cbi8qKlxuICogS2V5d29yZHNcbiAqL1xuXG5ydWJ5LmtleXdvcmQgPSAvXFxiKGFsaWFzfGFuZHxiZWdpbnxicmVha3xjYXNlfGNhdGNofGNsYXNzfGRlZnxkb3xlbHNpZnxlbHNlfGZhaWx8ZW5zdXJlfGZvcnxlbmR8aWZ8aW58bW9kdWxlfG5leHR8bm90fG9yfHJhaXNlfHJlZG98cmVzY3VlfHJldHJ5fHJldHVybnx0aGVufHRocm93fHN1cGVyfHVubGVzc3x1bmRlZnx1bnRpbHx3aGVufHdoaWxlfHlpZWxkKVxcYi87XG5cbi8qKlxuICogTnVtYmVyc1xuICovXG5cbnJ1YnkubnVtYmVyID0gL1xcYlstK10/KDB4W2EtZkEtRjAtOV0rfDBiWzAtMV9dK3wwWzAtN10qfFsxLTldWzAtOV9lRS5dKilcXGIvO1xuXG4vKipcbiAqIEZ1bmN0aW9uc1xuICovXG5cbnJ1YnkuZnVuY3Rpb24gPSAvKFxcdyspICpcXCgvO1xucnVieS5mdW5jdGlvbi5jaGlsZHJlbiA9IHsgcHVuY3R1YXRpb246IC9cXCgvIH07XG5cbi8qKlxuICogT3BlcmF0b3JcbiAqL1xuXG5ydWJ5Lm9wZXJhdG9yID0gLyhbLStdezEsMn18IXwmbHQ7PT98Pj0/fD17MSwzfXwmbHQ7ezEsMn18PnsxLDJ9fCgmYW1wOyl7MSwyfXxcXHx7MSwyfXxcXD98XFwqfFxcL3xcXH58XFxefFxcJSkvO1xuXG4vKipcbiAqIFB1bmN0dWF0aW9uXG4gKi9cblxucnVieS5wdW5jdHVhdGlvbiA9IC9be31bXFxdOygpLC46XS87XG4iXX0=
}, {}],
21: [function(require, module, exports) {

/**
 * Expose `yaml`
 */

'use strict';

module.exports = yaml;

/**
 * Add `yaml` as a language.
 *
 * @param {Highlight} highlight
 * @api public
 */

function yaml(highlight) {
  highlight.language('yml', yaml);
  highlight.language('yaml', yaml);
}

/**
 * Boolean
 */

yaml.boolean = /\b(Yes|No)\b/;

/**
 * Numbers
 */

yaml.number = /\b(\d*\.\d+)\b/;

/**
 * Comments
 */

yaml.comment = /(#[^\n]*)/;

/**
 * Keywords
 */

yaml.keyword = /(\w+):/;
yaml.keyword.children = { punctuation: /:/ };

/**
 * Punctuation
 */

yaml.punctuation = /([:|>?])/;

/**
 * Strings
 */

yaml.string = /(("|')(\\?.)*?\2)/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC15YW1sQG1hc3Rlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7Ozs7OztBQVN0QixTQUFTLElBQUksQ0FBQyxTQUFTLEVBQUM7QUFDdEIsV0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEMsV0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDbEM7Ozs7OztBQU1ELElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDOzs7Ozs7QUFNOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQzs7Ozs7O0FBTS9CLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDOzs7Ozs7QUFNM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7QUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7Ozs7OztBQU03QyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQzs7Ozs7O0FBTTlCLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LXlhbWxAbWFzdGVyL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRXhwb3NlIGB5YW1sYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0geWFtbDtcblxuLyoqXG4gKiBBZGQgYHlhbWxgIGFzIGEgbGFuZ3VhZ2UuXG4gKlxuICogQHBhcmFtIHtIaWdobGlnaHR9IGhpZ2hsaWdodFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiB5YW1sKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgneW1sJywgeWFtbCk7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgneWFtbCcsIHlhbWwpO1xufVxuXG4vKipcbiAqIEJvb2xlYW5cbiAqL1xuXG55YW1sLmJvb2xlYW4gPSAvXFxiKFllc3xObylcXGIvO1xuXG4vKipcbiAqIE51bWJlcnNcbiAqL1xuXG55YW1sLm51bWJlciA9IC9cXGIoXFxkKlxcLlxcZCspXFxiLztcblxuLyoqXG4gKiBDb21tZW50c1xuICovXG5cbnlhbWwuY29tbWVudCA9IC8oI1teXFxuXSopLztcblxuLyoqXG4gKiBLZXl3b3Jkc1xuICovXG5cbnlhbWwua2V5d29yZCA9IC8oXFx3Kyk6LztcbnlhbWwua2V5d29yZC5jaGlsZHJlbiA9IHsgcHVuY3R1YXRpb246IC86LyB9O1xuXG4vKipcbiAqIFB1bmN0dWF0aW9uXG4gKi9cblxueWFtbC5wdW5jdHVhdGlvbiA9IC8oWzp8Pj9dKS87XG5cbi8qKlxuICogU3RyaW5nc1xuICovXG5cbnlhbWwuc3RyaW5nID0gLygoXCJ8JykoXFxcXD8uKSo/XFwyKS87XG4iXX0=
}, {}],
22: [function(require, module, exports) {

/**
 * Expose `plugin`.
 */

'use strict';

module.exports = plugin;

/**
 * Plugin to highlight XML code.
 *
 * @param {Highlight} highlight
 */

function plugin(highlight) {
  highlight.language('xml', grammar).language('html', grammar);
}

/**
 * Grammar.
 */

var grammar = {};

/**
 * Comments.
 */

grammar.comment = /<!--[\w\W]*?-->/m;

/**
 * Entities.
 */

grammar.entity = /&#?[\dA-Za-z]{1,8};/;

/**
 * Doctypes.
 */

grammar.doctype = /<!DOCTYPE.+?>/i;

/**
 * CDATA.
 */

grammar.cdata = /<!\[CDATA\[[\w\W]*?]]>/i;

/**
 * Prologs.
 */

grammar.prolog = /<\?.+?\?>/;

/**
 * Tags. Children declared separately to maintain order.
 */

var children = {
  string: /('|")[\w\W]*?\1/,
  punctuation: /(^<\/?|\/?>$|=)/,
  name: /^[\w:-]+/,
  attribute: /[\w:-]+/
};

grammar.tag = {
  pattern: /<\/?[\w:-]+\s*(\s+[\w:-]+(=(("|')[\w\W]*\4|[^\s'">=]+))?\s*)*\/?>/,
  children: children
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC14bWxAbWFzdGVyL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7O0FBUXhCLFNBQVMsTUFBTSxDQUFDLFNBQVMsRUFBQztBQUN4QixXQUFTLENBQ04sUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FDeEIsUUFBUSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztDQUM5Qjs7Ozs7O0FBTUQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDOzs7Ozs7QUFNakIsT0FBTyxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQzs7Ozs7O0FBTXJDLE9BQU8sQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUM7Ozs7OztBQU12QyxPQUFPLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDOzs7Ozs7QUFNbkMsT0FBTyxDQUFDLEtBQUssR0FBRyx5QkFBeUIsQ0FBQzs7Ozs7O0FBTTFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDOzs7Ozs7QUFNN0IsSUFBSSxRQUFRLEdBQUc7QUFDYixRQUFNLEVBQUUsaUJBQWlCO0FBQ3pCLGFBQVcsRUFBRSxpQkFBaUI7QUFDOUIsTUFBSSxFQUFFLFVBQVU7QUFDaEIsV0FBUyxFQUFFLFNBQVM7Q0FDckIsQ0FBQzs7QUFFRixPQUFPLENBQUMsR0FBRyxHQUFHO0FBQ1osU0FBTyxFQUFFLG1FQUFtRTtBQUM1RSxVQUFRLEVBQUUsUUFBUTtDQUNuQixDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC14bWxAbWFzdGVyL2xpYi9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEV4cG9zZSBgcGx1Z2luYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsdWdpbjtcblxuLyoqXG4gKiBQbHVnaW4gdG8gaGlnaGxpZ2h0IFhNTCBjb2RlLlxuICpcbiAqIEBwYXJhbSB7SGlnaGxpZ2h0fSBoaWdobGlnaHRcbiAqL1xuXG5mdW5jdGlvbiBwbHVnaW4oaGlnaGxpZ2h0KXtcbiAgaGlnaGxpZ2h0XG4gICAgLmxhbmd1YWdlKCd4bWwnLCBncmFtbWFyKVxuICAgIC5sYW5ndWFnZSgnaHRtbCcsIGdyYW1tYXIpO1xufVxuXG4vKipcbiAqIEdyYW1tYXIuXG4gKi9cblxudmFyIGdyYW1tYXIgPSB7fTtcblxuLyoqXG4gKiBDb21tZW50cy5cbiAqL1xuXG5ncmFtbWFyLmNvbW1lbnQgPSAvPCEtLVtcXHdcXFddKj8tLT4vbTtcblxuLyoqXG4gKiBFbnRpdGllcy5cbiAqL1xuXG5ncmFtbWFyLmVudGl0eSA9IC8mIz9bXFxkQS1aYS16XXsxLDh9Oy87XG5cbi8qKlxuICogRG9jdHlwZXMuXG4gKi9cblxuZ3JhbW1hci5kb2N0eXBlID0gLzwhRE9DVFlQRS4rPz4vaTtcblxuLyoqXG4gKiBDREFUQS5cbiAqL1xuXG5ncmFtbWFyLmNkYXRhID0gLzwhXFxbQ0RBVEFcXFtbXFx3XFxXXSo/XV0+L2k7XG5cbi8qKlxuICogUHJvbG9ncy5cbiAqL1xuXG5ncmFtbWFyLnByb2xvZyA9IC88XFw/Lis/XFw/Pi87XG5cbi8qKlxuICogVGFncy4gQ2hpbGRyZW4gZGVjbGFyZWQgc2VwYXJhdGVseSB0byBtYWludGFpbiBvcmRlci5cbiAqL1xuXG52YXIgY2hpbGRyZW4gPSB7XG4gIHN0cmluZzogLygnfFwiKVtcXHdcXFddKj9cXDEvLFxuICBwdW5jdHVhdGlvbjogLyhePFxcLz98XFwvPz4kfD0pLyxcbiAgbmFtZTogL15bXFx3Oi1dKy8sXG4gIGF0dHJpYnV0ZTogL1tcXHc6LV0rL1xufTtcblxuZ3JhbW1hci50YWcgPSB7XG4gIHBhdHRlcm46IC88XFwvP1tcXHc6LV0rXFxzKihcXHMrW1xcdzotXSsoPSgoXCJ8JylbXFx3XFxXXSpcXDR8W15cXHMnXCI+PV0rKSk/XFxzKikqXFwvPz4vLFxuICBjaGlsZHJlbjogY2hpbGRyZW5cbn07Il19
}, {}],
23: [function(require, module, exports) {

/**
 * Expose `php`
 */

'use strict';

module.exports = php;

/**
 * Add `php` as a language.
 *
 * @param {Highlight} highlight
 * @api public
 */

function php(highlight) {
  highlight.language('php', php);
  highlight.language('PHP', php);
}

/**
 * Booleans
 */

php.boolean = /\b(true|false)\b/;

/**
 * Comments
 */

php.comment = /(?!\\{2})(\/\*[\w\W]*?\*\/|\/\/.*?$|#.*?$)/m;

/**
 * Classes
 */

php['class'] = /class +(\w+)/;
php['class'].children = { keyword: /class/ };

/**
 * Keywords
 */

php.keyword = /\b(__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/;

/**
 * Numbers
 */

php.number = /\b[-+]?(0x[0-9a-fA-F]|0[0-7]+|0b[01]+|[1-9][0-9]*)\b/;

/**
 * String
 */

php.string = /(("|')(\\?.)*?\2)/;

/**
 * Functions
 */

php['function'] = /(\w+) *\(/;
php['function'].children = { punctuation: /\(/ };

/**
 * Operators
 */

php.operator = /([-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%)/;

/**
 * Punctuation
 */

php.punctuation = /[{}[\];(),.]/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1waHBAbWFzdGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Ozs7Ozs7O0FBU3JCLFNBQVMsR0FBRyxDQUFDLFNBQVMsRUFBQztBQUNyQixXQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMvQixXQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztDQUNoQzs7Ozs7O0FBTUQsR0FBRyxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQzs7Ozs7O0FBTWpDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsNkNBQTZDLENBQUM7Ozs7OztBQU01RCxHQUFHLFNBQU0sR0FBRyxjQUFjLENBQUM7QUFDM0IsR0FBRyxTQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDOzs7Ozs7QUFNMUMsR0FBRyxDQUFDLE9BQU8sR0FBRyw0ZEFBNGQsQ0FBQzs7Ozs7O0FBTTNlLEdBQUcsQ0FBQyxNQUFNLEdBQUcsc0RBQXNELENBQUM7Ozs7OztBQU1wRSxHQUFHLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDOzs7Ozs7QUFNakMsR0FBRyxZQUFTLEdBQUcsV0FBVyxDQUFDO0FBQzNCLEdBQUcsWUFBUyxDQUFDLFFBQVEsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7Ozs7O0FBTTlDLEdBQUcsQ0FBQyxRQUFRLEdBQUcseUZBQXlGLENBQUM7Ozs7OztBQU16RyxHQUFHLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL3NlZ21lbnRpby1oaWdobGlnaHQtcGhwQG1hc3Rlci9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEV4cG9zZSBgcGhwYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcGhwO1xuXG4vKipcbiAqIEFkZCBgcGhwYCBhcyBhIGxhbmd1YWdlLlxuICpcbiAqIEBwYXJhbSB7SGlnaGxpZ2h0fSBoaWdobGlnaHRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcGhwKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgncGhwJywgcGhwKTtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdQSFAnLCBwaHApO1xufVxuXG4vKipcbiAqIEJvb2xlYW5zXG4gKi9cblxucGhwLmJvb2xlYW4gPSAvXFxiKHRydWV8ZmFsc2UpXFxiLztcblxuLyoqXG4gKiBDb21tZW50c1xuICovXG5cbnBocC5jb21tZW50ID0gLyg/IVxcXFx7Mn0pKFxcL1xcKltcXHdcXFddKj9cXCpcXC98XFwvXFwvLio/JHwjLio/JCkvbTtcblxuLyoqXG4gKiBDbGFzc2VzXG4gKi9cblxucGhwLmNsYXNzID0gL2NsYXNzICsoXFx3KykvO1xucGhwLmNsYXNzLmNoaWxkcmVuID0geyBrZXl3b3JkOiAvY2xhc3MvIH07XG5cbi8qKlxuICogS2V5d29yZHNcbiAqL1xuXG5waHAua2V5d29yZCA9IC9cXGIoX19oYWx0X2NvbXBpbGVyfGFic3RyYWN0fGFuZHxhcnJheXxhc3xicmVha3xjYWxsYWJsZXxjYXNlfGNhdGNofGNsYXNzfGNsb25lfGNvbnN0fGNvbnRpbnVlfGRlY2xhcmV8ZGVmYXVsdHxkaWV8ZG98ZWNob3xlbHNlfGVsc2VpZnxlbXB0eXxlbmRkZWNsYXJlfGVuZGZvcnxlbmRmb3JlYWNofGVuZGlmfGVuZHN3aXRjaHxlbmR3aGlsZXxldmFsfGV4aXR8ZXh0ZW5kc3xmaW5hbHxmaW5hbGx5fGZvcnxmb3JlYWNofGZ1bmN0aW9ufGdsb2JhbHxnb3RvfGlmfGltcGxlbWVudHN8aW5jbHVkZXxpbmNsdWRlX29uY2V8aW5zdGFuY2VvZnxpbnN0ZWFkb2Z8aW50ZXJmYWNlfGlzc2V0fGxpc3R8bmFtZXNwYWNlfG5ld3xvcnxwcmludHxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmVxdWlyZXxyZXF1aXJlX29uY2V8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dGhyb3d8dHJhaXR8dHJ5fHVuc2V0fHVzZXx2YXJ8d2hpbGV8eG9yfHlpZWxkKVxcYi87XG5cbi8qKlxuICogTnVtYmVyc1xuICovXG5cbnBocC5udW1iZXIgPSAvXFxiWy0rXT8oMHhbMC05YS1mQS1GXXwwWzAtN10rfDBiWzAxXSt8WzEtOV1bMC05XSopXFxiLztcblxuLyoqXG4gKiBTdHJpbmdcbiAqL1xuXG5waHAuc3RyaW5nID0gLygoXCJ8JykoXFxcXD8uKSo/XFwyKS87XG5cbi8qKlxuICogRnVuY3Rpb25zXG4gKi9cblxucGhwLmZ1bmN0aW9uID0gLyhcXHcrKSAqXFwoLztcbnBocC5mdW5jdGlvbi5jaGlsZHJlbiA9IHsgcHVuY3R1YXRpb246IC9cXCgvIH07XG5cbi8qKlxuICogT3BlcmF0b3JzXG4gKi9cblxucGhwLm9wZXJhdG9yID0gLyhbLStdezEsMn18IXwmbHQ7PT98Pj0/fD17MSwzfXwmbHQ7ezEsMn18PnsxLDJ9fCgmYW1wOyl7MSwyfXxcXHx7MSwyfXxcXD98XFwqfFxcL3xcXH58XFxefFxcJSkvO1xuXG4vKipcbiAqIFB1bmN0dWF0aW9uXG4gKi9cblxucGhwLnB1bmN0dWF0aW9uID0gL1t7fVtcXF07KCksLl0vOyJdfQ==
}, {}],
24: [function(require, module, exports) {

/**
 * Expose `plugin`.
 */

'use strict';

module.exports = plugin;

/**
 * Plugin to highlight CSS code.
 *
 * @param {Highlight} highlight
 */

function plugin(highlight) {
  highlight.language('css', grammar);
}

/**
 * Grammar.
 */

var grammar = {};

/**
 * Comments.
 */

grammar.comment = /\/\*[\w\W]*?\*\//m;

/**
 * Strings.
 */

grammar.string = /("|').*?\1/;

/**
 * @-rules.
 */

grammar['at-rule'] = /@[\w-]+\b/;

/**
 * Selectors.
 */

grammar.selector = {
  pattern: /[^\{\}\s][^\{\};]*?\{/,
  children: {
    'class': /\.[-.\w]+/,
    id: /#[-\w]+/,
    'pseudo-element': /:(after|before|first-letter|first-line|selection)|::[-\w]+/,
    'pseudo-class': /:[-\w]+(\(.*\))?/,
    punctuation: /\{/
  }
};

/**
 * Functions.
 */

grammar['function'] = {
  pattern: /[\w-]+\(/,
  children: {
    punctuation: /\(/
  }
};

/**
 * Properties.
 */

grammar.property = /[\w-]+(?=\s*:)/;

/**
 * Keywords.
 */

grammar.keyword = /[\b|!]important|initial|inherit|none|transparent\b/;

/**
 * Numbers.
 */

grammar.number = /(#[A-Fa-f\d]{3,8}|\b\d*\.?\d+)/;

/**
 * Operators.
 */

grammar.operator = /[-+\/*%^]/;

/**
 * Punctuation.
 */

grammar.punctuation = /[{}(),:;]/;

/**
 * Constant.
 */

grammar.constant = /(?!\d)(ch|cm|deg|dpcm|dpi|dppx|em|ex|grad|Hz|kHz|in|mm|pc|pt|px|rad|rem|s|ms|turn|vh|vmax|vmin|vw)\b/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1jc3NAMC4wLjIvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Ozs7QUFReEIsU0FBUyxNQUFNLENBQUMsU0FBUyxFQUFDO0FBQ3hCLFdBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0NBQ3BDOzs7Ozs7QUFNRCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7Ozs7OztBQU1qQixPQUFPLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDOzs7Ozs7QUFNdEMsT0FBTyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7Ozs7OztBQU05QixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsV0FBVyxDQUFDOzs7Ozs7QUFNakMsT0FBTyxDQUFDLFFBQVEsR0FBRztBQUNqQixTQUFPLEVBQUUsdUJBQXVCO0FBQ2hDLFVBQVEsRUFBRTtBQUNSLGFBQU8sV0FBVztBQUNsQixNQUFFLEVBQUUsU0FBUztBQUNiLG9CQUFnQixFQUFFLDREQUE0RDtBQUM5RSxrQkFBYyxFQUFFLGtCQUFrQjtBQUNsQyxlQUFXLEVBQUUsSUFBSTtHQUNsQjtDQUNGLENBQUM7Ozs7OztBQU1GLE9BQU8sWUFBUyxHQUFHO0FBQ2pCLFNBQU8sRUFBRSxVQUFVO0FBQ25CLFVBQVEsRUFBRTtBQUNSLGVBQVcsRUFBRSxJQUFJO0dBQ2xCO0NBQ0YsQ0FBQzs7Ozs7O0FBTUYsT0FBTyxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQzs7Ozs7O0FBTXBDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsb0RBQW9ELENBQUM7Ozs7OztBQU12RSxPQUFPLENBQUMsTUFBTSxHQUFHLGdDQUFnQyxDQUFDOzs7Ozs7QUFNbEQsT0FBTyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7Ozs7OztBQU0vQixPQUFPLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQzs7Ozs7O0FBTWxDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsc0dBQXNHLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9zZWdtZW50aW8taGlnaGxpZ2h0LWNzc0AwLjAuMi9saWIvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBFeHBvc2UgYHBsdWdpbmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBwbHVnaW47XG5cbi8qKlxuICogUGx1Z2luIHRvIGhpZ2hsaWdodCBDU1MgY29kZS5cbiAqXG4gKiBAcGFyYW0ge0hpZ2hsaWdodH0gaGlnaGxpZ2h0XG4gKi9cblxuZnVuY3Rpb24gcGx1Z2luKGhpZ2hsaWdodCl7XG4gIGhpZ2hsaWdodC5sYW5ndWFnZSgnY3NzJywgZ3JhbW1hcik7XG59XG5cbi8qKlxuICogR3JhbW1hci5cbiAqL1xuXG52YXIgZ3JhbW1hciA9IHt9O1xuXG4vKipcbiAqIENvbW1lbnRzLlxuICovXG5cbmdyYW1tYXIuY29tbWVudCA9IC9cXC9cXCpbXFx3XFxXXSo/XFwqXFwvL207XG5cbi8qKlxuICogU3RyaW5ncy5cbiAqL1xuXG5ncmFtbWFyLnN0cmluZyA9IC8oXCJ8JykuKj9cXDEvO1xuXG4vKipcbiAqIEAtcnVsZXMuXG4gKi9cblxuZ3JhbW1hclsnYXQtcnVsZSddID0gL0BbXFx3LV0rXFxiLztcblxuLyoqXG4gKiBTZWxlY3RvcnMuXG4gKi9cblxuZ3JhbW1hci5zZWxlY3RvciA9IHtcbiAgcGF0dGVybjogL1teXFx7XFx9XFxzXVteXFx7XFx9O10qP1xcey8sXG4gIGNoaWxkcmVuOiB7XG4gICAgY2xhc3M6IC9cXC5bLS5cXHddKy8sXG4gICAgaWQ6IC8jWy1cXHddKy8sXG4gICAgJ3BzZXVkby1lbGVtZW50JzogLzooYWZ0ZXJ8YmVmb3JlfGZpcnN0LWxldHRlcnxmaXJzdC1saW5lfHNlbGVjdGlvbil8OjpbLVxcd10rLyxcbiAgICAncHNldWRvLWNsYXNzJzogLzpbLVxcd10rKFxcKC4qXFwpKT8vLFxuICAgIHB1bmN0dWF0aW9uOiAvXFx7L1xuICB9XG59O1xuXG4vKipcbiAqIEZ1bmN0aW9ucy5cbiAqL1xuXG5ncmFtbWFyLmZ1bmN0aW9uID0ge1xuICBwYXR0ZXJuOiAvW1xcdy1dK1xcKC8sXG4gIGNoaWxkcmVuOiB7XG4gICAgcHVuY3R1YXRpb246IC9cXCgvXG4gIH1cbn07XG5cbi8qKlxuICogUHJvcGVydGllcy5cbiAqL1xuXG5ncmFtbWFyLnByb3BlcnR5ID0gL1tcXHctXSsoPz1cXHMqOikvO1xuXG4vKipcbiAqIEtleXdvcmRzLlxuICovXG5cbmdyYW1tYXIua2V5d29yZCA9IC9bXFxifCFdaW1wb3J0YW50fGluaXRpYWx8aW5oZXJpdHxub25lfHRyYW5zcGFyZW50XFxiLztcblxuLyoqXG4gKiBOdW1iZXJzLlxuICovXG5cbmdyYW1tYXIubnVtYmVyID0gLygjW0EtRmEtZlxcZF17Myw4fXxcXGJcXGQqXFwuP1xcZCspLztcblxuLyoqXG4gKiBPcGVyYXRvcnMuXG4gKi9cblxuZ3JhbW1hci5vcGVyYXRvciA9IC9bLStcXC8qJV5dLztcblxuLyoqXG4gKiBQdW5jdHVhdGlvbi5cbiAqL1xuXG5ncmFtbWFyLnB1bmN0dWF0aW9uID0gL1t7fSgpLDo7XS87XG5cbi8qKlxuICogQ29uc3RhbnQuXG4gKi9cblxuZ3JhbW1hci5jb25zdGFudCA9IC8oPyFcXGQpKGNofGNtfGRlZ3xkcGNtfGRwaXxkcHB4fGVtfGV4fGdyYWR8SHp8a0h6fGlufG1tfHBjfHB0fHB4fHJhZHxyZW18c3xtc3x0dXJufHZofHZtYXh8dm1pbnx2dylcXGIvO1xuIl19
}, {}],
25: [function(require, module, exports) {

/**
 * Expose `plugin`.
 */

'use strict';

module.exports = plugin;

/**
 * Plugin to highlight go code.
 *
 * @param {Highlight} highlight
 */

function plugin(highlight) {
  highlight.language('go', grammar);
}

/**
 * Grammar.
 */

var grammar = {};

/**
 * Strings.
 */

grammar.string = /(("|')(\\?.)*?\2)/;

/**
 * Comments.
 */

grammar.comment = /(?!\\{2})(\/\*[\w\W]*?\*\/|\/\/.*?$)/m;

/**
 * Booleans.
 */

grammar.boolean = /\b(true|false)\b/;

/**
 * Keywords.
 */

grammar.keyword = /\b(break|default|func|interface|select|case|defer|go|map|struct|chan}else}goto}package|switch|const|fallthrough|if|range|type|continue|for|import|return|var)\b/;

/**
 * Functions.
 *
 * Children are set separately to maintain ordering.
 */

grammar['function'] = {
  pattern: /(\w+)\(/,
  children: {}
};

grammar['function'].children['class'] = /\b([A-Z]\w*)\b/;
grammar['function'].children['function'] = /(\w+)/;
grammar['function'].children.punctuation = /\(/;

/**
 * Numbers.
 */

grammar.number = /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/;

/**
 * Operators.
 */

grammar.operator = /([-+]{1,2}|!|&lt;=?|>=?|={1,3}|&lt;{1,2}|>{1,2}|(&amp;){1,2}|\|{1,2}|\?|\*|\/|\~|\^|\%)/;

/**
 * Punctuation.
 */

grammar.punctuation = /[{}[\];(),.:]/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1nb0AwLjAuMS9saWIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7Ozs7OztBQVF4QixTQUFTLE1BQU0sQ0FBQyxTQUFTLEVBQUM7QUFDeEIsV0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Q0FDbkM7Ozs7OztBQU1ELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQzs7Ozs7O0FBTWpCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7Ozs7OztBQU1yQyxPQUFPLENBQUMsT0FBTyxHQUFHLHVDQUF1QyxDQUFDOzs7Ozs7QUFNMUQsT0FBTyxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQzs7Ozs7O0FBTXJDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsaUtBQWlLLENBQUM7Ozs7Ozs7O0FBUXBMLE9BQU8sWUFBUyxHQUFHO0FBQ2pCLFNBQU8sRUFBRSxTQUFTO0FBQ2xCLFVBQVEsRUFBRSxFQUFFO0NBQ2IsQ0FBQzs7QUFFRixPQUFPLFlBQVMsQ0FBQyxRQUFRLFNBQU0sR0FBRyxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLFlBQVMsQ0FBQyxRQUFRLFlBQVMsR0FBRyxPQUFPLENBQUM7QUFDN0MsT0FBTyxZQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Ozs7OztBQU03QyxPQUFPLENBQUMsTUFBTSxHQUFHLDREQUE0RCxDQUFDOzs7Ozs7QUFNOUUsT0FBTyxDQUFDLFFBQVEsR0FBRyx5RkFBeUYsQ0FBQzs7Ozs7O0FBTTdHLE9BQU8sQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VnbWVudGlvLWhpZ2hsaWdodC1nb0AwLjAuMS9saWIvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBFeHBvc2UgYHBsdWdpbmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBwbHVnaW47XG5cbi8qKlxuICogUGx1Z2luIHRvIGhpZ2hsaWdodCBnbyBjb2RlLlxuICpcbiAqIEBwYXJhbSB7SGlnaGxpZ2h0fSBoaWdobGlnaHRcbiAqL1xuXG5mdW5jdGlvbiBwbHVnaW4oaGlnaGxpZ2h0KXtcbiAgaGlnaGxpZ2h0Lmxhbmd1YWdlKCdnbycsIGdyYW1tYXIpO1xufVxuXG4vKipcbiAqIEdyYW1tYXIuXG4gKi9cblxudmFyIGdyYW1tYXIgPSB7fTtcblxuLyoqXG4gKiBTdHJpbmdzLlxuICovXG5cbmdyYW1tYXIuc3RyaW5nID0gLygoXCJ8JykoXFxcXD8uKSo/XFwyKS87XG5cbi8qKlxuICogQ29tbWVudHMuXG4gKi9cblxuZ3JhbW1hci5jb21tZW50ID0gLyg/IVxcXFx7Mn0pKFxcL1xcKltcXHdcXFddKj9cXCpcXC98XFwvXFwvLio/JCkvbTtcblxuLyoqXG4gKiBCb29sZWFucy5cbiAqL1xuXG5ncmFtbWFyLmJvb2xlYW4gPSAvXFxiKHRydWV8ZmFsc2UpXFxiLztcblxuLyoqXG4gKiBLZXl3b3Jkcy5cbiAqL1xuXG5ncmFtbWFyLmtleXdvcmQgPSAvXFxiKGJyZWFrfGRlZmF1bHR8ZnVuY3xpbnRlcmZhY2V8c2VsZWN0fGNhc2V8ZGVmZXJ8Z298bWFwfHN0cnVjdHxjaGFufWVsc2V9Z290b31wYWNrYWdlfHN3aXRjaHxjb25zdHxmYWxsdGhyb3VnaHxpZnxyYW5nZXx0eXBlfGNvbnRpbnVlfGZvcnxpbXBvcnR8cmV0dXJufHZhcilcXGIvO1xuXG4vKipcbiAqIEZ1bmN0aW9ucy5cbiAqXG4gKiBDaGlsZHJlbiBhcmUgc2V0IHNlcGFyYXRlbHkgdG8gbWFpbnRhaW4gb3JkZXJpbmcuXG4gKi9cblxuZ3JhbW1hci5mdW5jdGlvbiA9IHtcbiAgcGF0dGVybjogLyhcXHcrKVxcKC8sXG4gIGNoaWxkcmVuOiB7fVxufTtcblxuZ3JhbW1hci5mdW5jdGlvbi5jaGlsZHJlbi5jbGFzcyA9IC9cXGIoW0EtWl1cXHcqKVxcYi87XG5ncmFtbWFyLmZ1bmN0aW9uLmNoaWxkcmVuLmZ1bmN0aW9uID0gLyhcXHcrKS87XG5ncmFtbWFyLmZ1bmN0aW9uLmNoaWxkcmVuLnB1bmN0dWF0aW9uID0gL1xcKC87XG5cbi8qKlxuICogTnVtYmVycy5cbiAqL1xuXG5ncmFtbWFyLm51bWJlciA9IC9cXGItPygweFtcXGRBLUZhLWZdK3xcXGQqXFwuP1xcZCsoW0VlXS0/XFxkKyk/fE5hTnwtP0luZmluaXR5KVxcYi87XG5cbi8qKlxuICogT3BlcmF0b3JzLlxuICovXG5cbmdyYW1tYXIub3BlcmF0b3IgPSAvKFstK117MSwyfXwhfCZsdDs9P3w+PT98PXsxLDN9fCZsdDt7MSwyfXw+ezEsMn18KCZhbXA7KXsxLDJ9fFxcfHsxLDJ9fFxcP3xcXCp8XFwvfFxcfnxcXF58XFwlKS87XG5cbi8qKlxuICogUHVuY3R1YXRpb24uXG4gKi9cblxuZ3JhbW1hci5wdW5jdHVhdGlvbiA9IC9be31bXFxdOygpLC46XS87Il19
}, {}],
9: [function(require, module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _matthewmuellerUid = require('matthewmueller/uid');

var _matthewmuellerUid2 = _interopRequireDefault(_matthewmuellerUid);

var _supportReact = require('/support/react');

var _supportReact2 = _interopRequireDefault(_supportReact);

/**
 * Menu.
 */

exports['default'] = _supportReact2['default'].createClass({
  displayName: 'index',

  getInitialState: function getInitialState() {
    return { activeItem: this.props.items[0] };
  },
  render: function render() {
    var _this = this;

    var props = this.props;
    var state = this.state;
    var setState = this.setState;
    var items = props.items;

    var currentItem = state.activeItem;

    return _supportReact2['default'].createElement(
      'div',
      { className: 'matter-Menu' },
      items.map(function (item) {
        return _supportReact2['default'].createElement(Item, { isActive: currentItem === item, item: item, onClick: _this.onClick, key: (0, _matthewmuellerUid2['default'])() });
      })
    );
  },
  onClick: function onClick(activeItem) {
    this.setState({ activeItem: activeItem });
    if (this.props.onChange) this.props.onChange(activeItem);
  }
});

/**
 * Item.
 */

var Item = _supportReact2['default'].createClass({
  displayName: 'Item',

  getInitialState: function getInitialState() {
    return { isActive: this.props.isActive };
  },
  render: function render() {
    var props = this.props;
    var state = this.state;
    var setState = this.setState;

    var classes = 'matter-Menu-item';
    if (state.isActive) classes += ' active';

    return _supportReact2['default'].createElement(
      'div',
      { className: classes, onClick: this.onClick },
      _supportReact2['default'].createElement(
        'span',
        null,
        props.item
      )
    );
  },
  onClick: function onClick() {
    this.props.onClick(this.props.item);
  }
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9tZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2lDQUFnQixvQkFBb0I7Ozs7NEJBQ2xCLGdCQUFnQjs7Ozs7Ozs7cUJBTW5CLDBCQUFNLFdBQVcsQ0FBQzs7O0FBQy9CLGlCQUFlLEVBQUUsMkJBQVc7QUFDMUIsV0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO0dBQzNDO0FBQ0QsUUFBTSxFQUFBLGtCQUFHOzs7UUFDRCxLQUFLLEdBQXNCLElBQUksQ0FBL0IsS0FBSztRQUFFLEtBQUssR0FBZSxJQUFJLENBQXhCLEtBQUs7UUFBRSxRQUFRLEdBQUssSUFBSSxDQUFqQixRQUFRO1FBQ3RCLEtBQUssR0FBSyxLQUFLLENBQWYsS0FBSzs7QUFDWCxRQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDOztBQUVuQyxXQUNFOztRQUFLLFNBQVMsRUFBQyxhQUFhO01BQ3hCLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO2VBQUssd0NBQUMsSUFBSSxJQUFDLFFBQVEsRUFBRSxXQUFXLEtBQUssSUFBSSxBQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQUFBQyxFQUFDLE9BQU8sRUFBRSxNQUFLLE9BQU8sQUFBQyxFQUFDLEdBQUcsRUFBRSxxQ0FBSyxBQUFDLEdBQUU7T0FBQSxDQUFDO0tBQ3pHLENBQ047R0FDSDtBQUNELFNBQU8sRUFBQSxpQkFBQyxVQUFVLEVBQUU7QUFDbEIsUUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLFFBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7R0FDMUQ7Q0FDRixDQUFDOzs7Ozs7QUFNRixJQUFJLElBQUksR0FBRywwQkFBTSxXQUFXLENBQUM7OztBQUMzQixpQkFBZSxFQUFFLDJCQUFXO0FBQzFCLFdBQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztHQUMxQztBQUNELFFBQU0sRUFBQSxrQkFBRztRQUNELEtBQUssR0FBc0IsSUFBSSxDQUEvQixLQUFLO1FBQUUsS0FBSyxHQUFlLElBQUksQ0FBeEIsS0FBSztRQUFFLFFBQVEsR0FBSyxJQUFJLENBQWpCLFFBQVE7O0FBRTVCLFFBQUksT0FBTyxHQUFHLGtCQUFrQixDQUFDO0FBQ2pDLFFBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLElBQUksU0FBUyxDQUFDOztBQUV6QyxXQUNFOztRQUFLLFNBQVMsRUFBRSxPQUFPLEFBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQUFBQztNQUM3Qzs7O1FBQU8sS0FBSyxDQUFDLElBQUk7T0FBUTtLQUNyQixDQUNOO0dBQ0g7QUFDRCxTQUFPLEVBQUEsbUJBQUc7QUFDUixRQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQ3JDO0NBQ0YsQ0FBQyxDQUFDIiwiZmlsZSI6ImxpYi9tZW51L2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdWlkIGZyb20gJ21hdHRoZXdtdWVsbGVyL3VpZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnL3N1cHBvcnQvcmVhY3QnO1xuXG4vKipcbiAqIE1lbnUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7IGFjdGl2ZUl0ZW06IHRoaXMucHJvcHMuaXRlbXNbMF0gfVxuICB9LFxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgcHJvcHMsIHN0YXRlLCBzZXRTdGF0ZSB9ID0gdGhpcztcbiAgICBsZXQgeyBpdGVtcyB9ID0gcHJvcHM7XG4gICAgbGV0IGN1cnJlbnRJdGVtID0gc3RhdGUuYWN0aXZlSXRlbTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWF0dGVyLU1lbnUnPlxuICAgICAgICB7IGl0ZW1zLm1hcCgoaXRlbSkgPT4gPEl0ZW0gaXNBY3RpdmU9e2N1cnJlbnRJdGVtID09PSBpdGVtfSBpdGVtPXtpdGVtfSBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9IGtleT17dWlkKCl9Lz4pIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG4gIG9uQ2xpY2soYWN0aXZlSXRlbSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBhY3RpdmVJdGVtIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB0aGlzLnByb3BzLm9uQ2hhbmdlKGFjdGl2ZUl0ZW0pO1xuICB9XG59KTtcblxuLyoqXG4gKiBJdGVtLlxuICovXG5cbmxldCBJdGVtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7IGlzQWN0aXZlOiB0aGlzLnByb3BzLmlzQWN0aXZlIH07XG4gIH0sXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBwcm9wcywgc3RhdGUsIHNldFN0YXRlIH0gPSB0aGlzO1xuXG4gICAgbGV0IGNsYXNzZXMgPSAnbWF0dGVyLU1lbnUtaXRlbSc7XG4gICAgaWYgKHN0YXRlLmlzQWN0aXZlKSBjbGFzc2VzICs9ICcgYWN0aXZlJztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gb25DbGljaz17dGhpcy5vbkNsaWNrfT5cbiAgICAgICAgPHNwYW4+e3Byb3BzLml0ZW19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcy5pdGVtKTtcbiAgfVxufSk7XG4iXX0=
}, {"matthewmueller/uid":12,"/support/react":10}]}, {}, {"1":""}));
