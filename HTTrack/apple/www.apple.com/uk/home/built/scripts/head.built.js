!function(t){var n={};function e(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)e.d(o,s,function(n){return t[n]}.bind(null,s));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="https://www.apple.com/",e(e.s=25)}({25:function(t,n,e){t.exports=e(26)},26:function(t,n,e){"use strict";const o=e(27),s=e(35);o.addTests({"prefers-reduced-motion":s()}),o.htmlClass()},27:function(t,n,e){"use strict";e(28);var o=e(29),s=e(30);t.exports=new o(document.documentElement,s),t.exports.FeatureDetect=o;var i=e(34);document.addEventListener&&document.addEventListener("DOMContentLoaded",(function(){new i}))},28:function(t,n){},29:function(t,n,e){"use strict";var o=function(t,n){this._target=t,this._tests={},this.addTests(n)},s=o.prototype;s.addTests=function(t){this._tests=Object.assign(this._tests,t)},s._supports=function(t){return void 0!==this._tests[t]&&("function"==typeof this._tests[t]&&(this._tests[t]=this._tests[t]()),this._tests[t])},s._addClass=function(t,n){n=n||"no-",this._supports(t)?this._target.classList.add(t):this._target.classList.add(n+t)},s.htmlClass=function(){var t;for(t in this._target.classList.remove("no-js"),this._target.classList.add("js"),this._tests)this._tests.hasOwnProperty(t)&&this._addClass(t)},t.exports=o},30:function(t,n,e){"use strict";var o=e(31);t.exports={touch:o,"progressive-image":!0}},31:function(t,n,e){"use strict";var o=e(32),s=e(33);function i(){var t=o.getWindow(),n=o.getDocument(),e=o.getNavigator();return!!("ontouchstart"in t||t.DocumentTouch&&n instanceof t.DocumentTouch||e.maxTouchPoints>0||e.msMaxTouchPoints>0)}t.exports=s(i),t.exports.original=i},32:function(t,n,e){"use strict";t.exports={getWindow:function(){return window},getDocument:function(){return document},getNavigator:function(){return navigator}}},33:function(t,n,e){"use strict";t.exports=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}}},34:function(t,n,e){"use strict";var o="touch";function s(t,n){this._target=t||document.body,this._attr=n||"data-focus-method",this._focusMethod=this._lastFocusMethod=!1,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onWindowBlur=this._onWindowBlur.bind(this),this._bindEvents()}var i=s.prototype;i._bindEvents=function(){this._target.addEventListener("keydown",this._onKeyDown,!0),this._target.addEventListener("mousedown",this._onMouseDown,!0),this._target.addEventListener("touchstart",this._onTouchStart,!0),this._target.addEventListener("focus",this._onFocus,!0),this._target.addEventListener("blur",this._onBlur,!0),window.addEventListener("blur",this._onWindowBlur)},i._onKeyDown=function(t){this._focusMethod="key"},i._onMouseDown=function(t){this._focusMethod!==o&&(this._focusMethod="mouse")},i._onTouchStart=function(t){this._focusMethod=o},i._onFocus=function(t){this._focusMethod||(this._focusMethod=this._lastFocusMethod),t.target.setAttribute(this._attr,this._focusMethod),this._lastFocusMethod=this._focusMethod,this._focusMethod=!1},i._onBlur=function(t){t.target.removeAttribute(this._attr)},i._onWindowBlur=function(t){this._focusMethod=!1},t.exports=s},35:function(t,n,e){"use strict";var o=e(36);t.exports=function(){var t=o.getWindow().matchMedia("(prefers-reduced-motion)");return!(!t||!t.matches)}},36:function(t,n,e){"use strict";t.exports={getWindow:function(){return window},getDocument:function(){return document},getNavigator:function(){return navigator}}}});