parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"tgmD":[function(require,module,exports) {
"use strict";module.exports=(e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase()));
},{}],"YtoU":[function(require,module,exports) {
"use strict";var e="%[a-f0-9]{2}",t=new RegExp(e,"gi"),r=new RegExp("("+e+")+","gi");function n(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),o=e.slice(t);return Array.prototype.concat.call([],n(r),n(o))}function o(e){try{return decodeURIComponent(e)}catch(c){for(var r=e.match(t),o=1;o<r.length;o++)r=(e=n(r,o).join("")).match(t);return e}}function c(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=r.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var c=o(n[0]);c!==n[0]&&(t[n[0]]=c)}n=r.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),p=0;p<a.length;p++){var i=a[p];e=e.replace(new RegExp(i,"g"),t[i])}return e}module.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return c(e)}};
},{}],"Focm":[function(require,module,exports) {
"use strict";var r=function(){return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,t){var n=[],e=!0,o=!1,i=void 0;try{for(var u,c=r[Symbol.iterator]();!(e=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);e=!0);}catch(r){o=!0,i=r}finally{try{!e&&c.return&&c.return()}finally{if(o)throw i}}return n}(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},n=require("strict-uri-encode"),e=require("decode-uri-component");function o(r){switch(r.arrayFormat){case"index":return function(t,n,e){return null===n?[u(t,r),"[",e,"]"].join(""):[u(t,r),"[",u(e,r),"]=",u(n,r)].join("")};case"bracket":return function(t,n){return null===n?[u(t,r),"[]"].join(""):[u(t,r),"[]=",u(n,r)].join("")};default:return function(t,n){return null===n?u(t,r):[u(t,r),"=",u(n,r)].join("")}}}function i(r){var t=void 0;switch(r.arrayFormat){case"index":return function(r,n,e){t=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),t?(void 0===e[r]&&(e[r]={}),e[r][t[1]]=n):e[r]=n};case"bracket":return function(r,n,e){t=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),t?void 0!==e[r]?e[r]=[].concat(e[r],n):e[r]=[n]:e[r]=n};default:return function(r,t,n){void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=t}}}function u(r,t){return t.encode?t.strict?n(r):encodeURIComponent(r):r}function c(r,t){return t.decode?e(r):r}function a(r){return Array.isArray(r)?r.sort():"object"===(void 0===r?"undefined":t(r))?a(Object.keys(r)).sort(function(r,t){return Number(r)-Number(t)}).map(function(t){return r[t]}):r}function f(r){var t=r.indexOf("?");return-1===t?"":r.slice(t+1)}function l(n,e){var o=i(e=Object.assign({decode:!0,arrayFormat:"none"},e)),u=Object.create(null);if("string"!=typeof n)return u;if(!(n=n.trim().replace(/^[?#&]/,"")))return u;var f=!0,l=!1,s=void 0;try{for(var y,d=n.split("&")[Symbol.iterator]();!(f=(y=d.next()).done);f=!0){var v=y.value.replace(/\+/g," ").split("="),p=r(v,2),b=p[0],m=p[1];m=void 0===m?null:c(m,e),o(c(b,e),m,u)}}catch(r){l=!0,s=r}finally{try{!f&&d.return&&d.return()}finally{if(l)throw s}}return Object.keys(u).sort().reduce(function(r,n){var e=u[n];return Boolean(e)&&"object"===(void 0===e?"undefined":t(e))&&!Array.isArray(e)?r[n]=a(e):r[n]=e,r},Object.create(null))}exports.extract=f,exports.parse=l,exports.stringify=function(r,t){!1===(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)).sort&&(t.sort=function(){});var n=o(t);return r?Object.keys(r).sort(t.sort).map(function(e){var o=r[e];if(void 0===o)return"";if(null===o)return u(e,t);if(Array.isArray(o)){var i=[],c=!0,a=!1,f=void 0;try{for(var l,s=o.slice()[Symbol.iterator]();!(c=(l=s.next()).done);c=!0){var y=l.value;void 0!==y&&i.push(n(e,y,i.length))}}catch(r){a=!0,f=r}finally{try{!c&&s.return&&s.return()}finally{if(a)throw f}}return i.join("&")}return u(e,t)+"="+u(o,t)}).filter(function(r){return r.length>0}).join("&"):""},exports.parseUrl=function(r,t){return{url:r.split("?")[0]||"",query:l(f(r),t)}};
},{"strict-uri-encode":"tgmD","decode-uri-component":"YtoU"}]},{},["Focm"], null)
//# sourceMappingURL=/index.map