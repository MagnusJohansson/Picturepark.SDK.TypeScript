var pictureparkPickers=function(){function e(n){if(!0!==n.resolved){n.resolved=!0;var o=n.dependencies.map(function(o){return"exports"===o?n.exports:function(){if(void 0!==t[o])return e(t[o]),t[o].exports;try{return require(o)}catch(e){throw Error("module '"+o+"' not found.")}}()});n.factory.apply(null,o)}}var n=null,t={require:{factory:void 0,dependencies:[],exports:function(e,n){return require(e,n)},resolved:!0}};return function(e){function n(){}function t(e,n){return function(){e.apply(n,arguments)}}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function i(e,n){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(n):(e._handled=!0,void o._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null!==t){var o;try{o=t(e._value)}catch(e){return void c(n.promise,e)}r(n.promise,o)}else(1===e._state?r:c)(n.promise,e._value)}))}function r(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var i=n.then;if(n instanceof o)return e._state=3,e._value=n,void u(e);if("function"==typeof i)return void f(t(i,n),e)}e._state=1,e._value=n,u(e)}catch(n){c(e,n)}}function c(e,n){e._state=2,e._value=n,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;n<t;n++)i(e,e._deferreds[n]);e._deferreds=null}function d(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}function f(e,n){var t=!1;try{e(function(e){t||(t=!0,r(n,e))},function(e){t||(t=!0,c(n,e))})}catch(e){if(t)return;t=!0,c(n,e)}}var s=setTimeout;o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var o=new this.constructor(n);return i(this,new d(e,t,o)),o},o.all=function(e){var n=Array.prototype.slice.call(e);return new o(function(e,t){function o(r,c){try{if(c&&("object"==typeof c||"function"==typeof c)){var u=c.then;if("function"==typeof u)return void u.call(c,function(e){o(r,e)},t)}n[r]=c,0==--i&&e(n)}catch(e){t(e)}}if(0===n.length)return e([]);for(var i=n.length,r=0;r<n.length;r++)o(r,n[r])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(n){n(e)})},o.reject=function(e){return new o(function(n,t){t(e)})},o.race=function(e){return new o(function(n,t){for(var o=0,i=e.length;o<i;o++)e[o].then(n,t)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){s(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},"undefined"!=typeof module&&module.exports?module.exports=o:e.Promise||(e.Promise=o)}(this),function(e,o,i){n=t[e]={dependencies:o,factory:i,exports:{},resolved:!1}}("index",["require","exports"],function(e,n){"use strict";n.__esModule=!0,n.showContentPicker=function(e){return new Promise(function(n,t){0!==e.indexOf("http://localhost:4200")&&(e+="/elements");var o=void 0!=window.screenLeft?window.screenLeft:screen.left,i=void 0!=window.screenTop?window.screenTop:screen.top,r=(window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width)/2-500+o,c=(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/2-330+i,u=window.open(e+"/content-picker?postUrl="+encodeURIComponent(window.location.origin),"_blank","width=1000, height=660, top="+c+", left="+r+",status=no,location=no,toolbar=no"),d=!1,f=function(t){if(t.origin==e){window.removeEventListener("message",f);var o=t.data&&"undefined"!==t.data?JSON.parse(t.data):void 0;d||(d=!0,setTimeout(function(){u.close(),n(o)}))}};u.onbeforeunload=function(){window.removeEventListener("message",f),d||(d=!0,n(void 0))},window.addEventListener("message",f)})}}),Object.keys(t).map(function(e){return t[e]}).forEach(e),null!==n?n.exports:void 0}();