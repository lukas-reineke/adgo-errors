!function(r,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e=t();for(var n in e)("object"==typeof exports?exports:r)[n]=e[n]}}(global,(function(){return function(r){var t={};function e(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:n})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,t){if(1&t&&(r=e(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var o in r)e.d(n,o,function(t){return r[t]}.bind(null,o));return n},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},e.p="",e(e.s=0)}([function(r,t,e){"use strict";e.r(t);var n=Array.isArray,o=function(r){return"[object String]"===Object.prototype.toString.call(r)};e.d(t,"findKeyInObject",(function(){return c})),e.d(t,"AdgoError",(function(){return f})),e.d(t,"LocalError",(function(){return a})),e.d(t,"getErrorMessage",(function(){return l}));var u,i=(u=function(r,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e])})(r,t)},function(r,t){function e(){this.constructor=r}u(r,t),r.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),c=function(r,t,e){void 0===e&&(e=null);var u=e,i=function(r,c){if(u===e){if(function(r){return"[object Object]"===Object.prototype.toString.call(r)}(c)&&Object.keys(c).forEach((function(r){return i(r,c[r])})),n(c)&&c.forEach((function(r,t){return i(t,r)})),o(c)){var f=void 0;try{f=JSON.parse(c)}catch(r){}i(null,f)}t(r,c)&&(u=c)}};return i(null,r),u},f=function(r){function t(t,e,n){void 0===e&&(e={}),void 0===n&&(n="adgo_error");var u=this;(u=o(t)?r.call(this,t)||this:t&&t.message?r.call(this,t.message)||this:t&&t.code?r.call(this,t.code)||this:r.call(this)||this).code=t.code||e.code||n,u.name=t.name||"AdgoError",t.stack&&(u.stack=t.stack);for(var i=0,c=Object.keys(e);i<c.length;i++){var f=c[i];u[f]=e[f]}return u}return i(t,r),t}(Error),a=function(r){function t(t,e){void 0===e&&(e={});var n=r.call(this,t,e,"local_error")||this;return n.name="LocalError",n}return i(t,r),t}(f),l=function(r,t,e){if(void 0===t&&(t="Something went wrong."),void 0===e&&(e=["userMessage","error_user_msg","message","error"]),o(r))return r;for(var n=function(t){if(n=r,"[object Error]"===Object.prototype.toString.call(n)){if(r[t])return{value:r[t]}}else{var e=c(r,(function(r,e){return r===t&&"string"==typeof e}));if(e)return{value:e}}var n},u=0,i=e;u<i.length;u++){var f=n(i[u]);if("object"==typeof f)return f.value}return t}}])}));