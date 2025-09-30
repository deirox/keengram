!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t,r,i){var s=n(a(1&i?e.prototype:e),t,r);return 2&i&&"function"==typeof s?function(e){return s.apply(r,e)}:s}function n(){return n="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},n.apply(null,arguments)}function r(t,n,r){return n=a(n),function(t,n){if(n&&("object"==e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(t,i()?Reflect.construct(n,r||[],a(t).constructor):n.apply(t,r))}function i(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(i=function(){return!!e})()}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}function o(e,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},o(e,t)}function u(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */u=function(){return n};var t,n={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},s="function"==typeof Symbol?Symbol:{},o=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function h(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(t){h=function(e,t,n){return e[t]=n}}function p(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,s=Object.create(i.prototype),o=new C(r||[]);return a(s,"_invoke",{value:P(e,n,o)}),s}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=p;var d="suspendedStart",v="suspendedYield",m="executing",y="completed",k={};function g(){}function w(){}function b(){}var _={};h(_,o,(function(){return this}));var I=Object.getPrototypeOf,x=I&&I(I(N([])));x&&x!==r&&i.call(x,o)&&(_=x);var T=b.prototype=g.prototype=Object.create(_);function E(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function S(t,n){function r(a,s,o,u){var c=f(t[a],t,s);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==e(h)&&i.call(h,"__await")?n.resolve(h.__await).then((function(e){r("next",e,o,u)}),(function(e){r("throw",e,o,u)})):n.resolve(h).then((function(e){l.value=e,o(l)}),(function(e){return r("throw",e,o,u)}))}u(c.arg)}var s;a(this,"_invoke",{value:function(e,t){function i(){return new n((function(n,i){r(e,t,n,i)}))}return s=s?s.then(i,i):i()}})}function P(e,n,r){var i=d;return function(a,s){if(i===m)throw Error("Generator is already running");if(i===y){if("throw"===a)throw s;return{value:t,done:!0}}for(r.method=a,r.arg=s;;){var o=r.delegate;if(o){var u=R(o,r);if(u){if(u===k)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===d)throw i=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=m;var c=f(e,n,r);if("normal"===c.type){if(i=r.done?y:v,c.arg===k)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(i=y,r.method="throw",r.arg=c.arg)}}}function R(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,R(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),k;var a=f(i,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,k;var s=a.arg;return s?s.done?(n[e.resultName]=s.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,k):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,k)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function N(n){if(n||""===n){var r=n[o];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var a=-1,s=function e(){for(;++a<n.length;)if(i.call(n,a))return e.value=n[a],e.done=!1,e;return e.value=t,e.done=!0,e};return s.next=s}}throw new TypeError(e(n)+" is not iterable")}return w.prototype=b,a(T,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=h(b,l,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,h(e,l,"GeneratorFunction")),e.prototype=Object.create(T),e},n.awrap=function(e){return{__await:e}},E(S.prototype),h(S.prototype,c,(function(){return this})),n.AsyncIterator=S,n.async=function(e,t,r,i,a){void 0===a&&(a=Promise);var s=new S(p(e,t,r,i),a);return n.isGeneratorFunction(t)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},E(T),h(T,l,"Generator"),h(T,o,(function(){return this})),h(T,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=N,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return o.type="throw",o.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],o=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var u=i.call(s,"catchLoc"),c=i.call(s,"finallyLoc");if(u&&c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=e,s.arg=t,a?(this.method="next",this.next=a.finallyLoc,k):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),k},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),k}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),k}},n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,s,o=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);u=!0);}catch(e){c=!0,i=e}finally{try{if(!u&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw i}}return o}}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=y(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw a}}}}function h(e,t,n,r,i,a,s){try{var o=e[a](s),u=o.value}catch(e){return void n(e)}o.done?t(u):Promise.resolve(u).then(r,i)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function s(e){h(a,r,i,s,o,"next",e)}function o(e){h(a,r,i,s,o,"throw",e)}s(void 0)}))}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,w(r.key),r)}}function v(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function m(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return k(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t,n){return(t=w(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}System.register(["./index-legacy-DGfkLRUI.js","./tslib.es6-legacy-COfaELg7.js"],(function(n,i){"use strict";var a,o,h,d,y,k,w,b,_,I,x,T,E,S,P,R,O,A,C,N,L,M,U,D,j,F,V,H;return{setters:[function(e){a=e.n,o=e._,h=e.o,d=e.p,y=e.q,k=e.t,w=e.v,b=e.E,_=e.w,I=e.x,x=e.y,T=e.S,E=e.z,S=e.B,P=e.C,R=e.L,O=e.D,A=e.F,C=e.G,N=e.H,L=e.I,M=e.J,U=e.K,D=e.M,j=e.N,F=e.O,V=e.P},function(e){H=e._}],execute:function(){var i;function W(){return g({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}n({a:
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function(e,t){return y(e).setPersistence(t)},c:function(e,t,n){if(I(e.app))return Promise.reject(Q(e));return function(e,t){return fn.apply(this,arguments)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(y(e),Jt.credential(t,n)).catch(function(){var t=p(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:throw n.code==="auth/".concat("password-does-not-meet-requirements")&&dn(e),n;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},d:function(e,t,n){return mn.apply(this,arguments)},g:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a(),t=o(e,"auth");if(t.isInitialized())return t.getImmediate();var n=function(e,t){var n=o(e,"auth");if(n.isInitialized()){var r=n.getImmediate(),i=n.getOptions();if(k(i,null!=t?t:{}))return r;J(r,"already-initialized")}var a=n.initialize({options:t});return a}(e,{popupRedirectResolver:Fr,persistence:[zn,wn,_n]}),r=h("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){var i=new URL(r,location.origin);if(location.origin===i.origin){var s=qr(i.toString());!function(e,t,n){y(e).beforeAuthStateChanged(t,n)}(n,s,(function(){return s(n.currentUser)})),function(e,t,n,r){y(e).onIdTokenChanged(t,n,r)}(n,(function(e){return s(e)}))}}var u=d("auth");u&&function(e,t){var n=wt(e);Z(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");var r=!1,i=Ct(t),a=function(e){var t=Ct(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};var r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){var a=i[1];return{host:a,port:Nt(r.substr(a.length+1))}}var s=c(r.split(":"),2);return{host:s[0],port:Nt(s[1])}}(t),s=a.host,o=a.port,u=null===o?"":":".concat(o),l={url:"".concat(i,"//").concat(s).concat(u,"/")},h=Object.freeze({host:s,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator)return Z(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),void Z(k(l,n.config.emulator)&&k(h,n.emulatorConfig),n,"emulator-config-failed");n.config.emulator=l,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */()}(n,"http://".concat(u));return n},o:function(e,t,n,r){return y(e).onAuthStateChanged(t,n,r)},s:function(e){return y(e).signOut()}});var K=W,G=new b("auth","Firebase",W()),z=new R("@firebase/auth");function q(e){if(z.logLevel<=O.WARN){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];z.warn.apply(z,["Auth (".concat(T,"): ").concat(e)].concat(n))}}function B(e){if(z.logLevel<=O.ERROR){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];z.error.apply(z,["Auth (".concat(T,"): ").concat(e)].concat(n))}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function J(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw $.apply(void 0,[e].concat(n))}function Y(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return $.apply(void 0,[e].concat(n))}function X(e,t,n){var r=Object.assign(Object.assign({},K()),g({},t,n));return new b("auth","Firebase",r).create(t,{appName:e.name})}function Q(e){return X(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if("string"!=typeof e){var i,a=n[0],s=m(n.slice(1));return s[0]&&(s[0].appName=e.name),(i=e._errorFactory).create.apply(i,[a].concat(m(s)))}return G.create.apply(G,[e].concat(n))}function Z(e,t){if(!e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];throw $.apply(void 0,[t].concat(r))}}function ee(e){var t="INTERNAL ASSERTION FAILED: "+e;throw B(t),new Error(t)}function te(e,t){e||ee(t)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function ne(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function re(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function ie(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==re()&&"https:"!==re()&&!A()&&!("connection"in navigator)||navigator.onLine}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
var ae=function(){return v((function e(t,n){f(this,e),this.shortDelay=t,this.longDelay=n,te(n>t,"Short delay should be less than long delay!"),this.isMobile=S()||P()}),[{key:"get",value:function(){return ie()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}])}();
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function se(e,t){te(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var oe=function(){return v((function e(){f(this,e)}),null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}))},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}])}(),ue=(g(g(g(g(g(g(g(g(g(g(i={},"CREDENTIAL_MISMATCH","custom-token-mismatch"),"MISSING_CUSTOM_TOKEN","internal-error"),"INVALID_IDENTIFIER","invalid-email"),"MISSING_CONTINUE_URI","internal-error"),"INVALID_PASSWORD","wrong-password"),"MISSING_PASSWORD","missing-password"),"INVALID_LOGIN_CREDENTIALS","invalid-credential"),"EMAIL_EXISTS","email-already-in-use"),"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),"INVALID_IDP_RESPONSE","invalid-credential"),g(g(g(g(g(g(g(g(g(g(i,"INVALID_PENDING_TOKEN","invalid-credential"),"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),"MISSING_REQ_TYPE","internal-error"),"EMAIL_NOT_FOUND","user-not-found"),"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),"EXPIRED_OOB_CODE","expired-action-code"),"INVALID_OOB_CODE","invalid-action-code"),"MISSING_OOB_CODE","internal-error"),"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),"INVALID_ID_TOKEN","invalid-user-token"),g(g(g(g(g(g(g(g(g(g(i,"TOKEN_EXPIRED","user-token-expired"),"USER_NOT_FOUND","user-token-expired"),"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),"PASSWORD_DOES_NOT_MEET_REQUIREMENTS","password-does-not-meet-requirements"),"INVALID_CODE","invalid-verification-code"),"INVALID_SESSION_INFO","invalid-verification-id"),"INVALID_TEMPORARY_PROOF","invalid-credential"),"MISSING_SESSION_INFO","missing-verification-id"),"SESSION_EXPIRED","code-expired"),"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),g(g(g(g(g(g(g(g(g(g(i,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),"ADMIN_ONLY_OPERATION","admin-restricted-operation"),"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),g(g(g(g(g(g(g(g(i,"RECAPTCHA_NOT_ENABLED","recaptcha-not-enabled"),"MISSING_RECAPTCHA_TOKEN","missing-recaptcha-token"),"INVALID_RECAPTCHA_TOKEN","invalid-recaptcha-token"),"INVALID_RECAPTCHA_ACTION","invalid-recaptcha-action"),"MISSING_CLIENT_TYPE","missing-client-type"),"MISSING_RECAPTCHA_VERSION","missing-recaptcha-version"),"INVALID_RECAPTCHA_VERSION","invalid-recaptcha-version"),"INVALID_REQ_TYPE","invalid-req-type")),ce=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],le=new ae(3e4,6e4);
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function he(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function pe(e,t,n,r){return fe.apply(this,arguments)}function fe(){return fe=p(u().mark((function e(t,n,r,i){var a,s=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>4&&void 0!==s[4]?s[4]:{},e.abrupt("return",de(t,a,p(u().mark((function e(){var a,s,o,c,l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s={},i&&("GET"===n?s=i:a={body:JSON.stringify(i)}),o=E(Object.assign({key:t.config.apiKey},s)).slice(1),e.next=6,t._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),l=Object.assign({method:n,headers:c},a),U()||(l.referrerPolicy="no-referrer"),e.t0=oe.fetch(),e.next=14,ke(t,t.config.apiHost,r,o);case 14:return e.t1=e.sent,e.t2=l,e.abrupt("return",(0,e.t0)(e.t1,e.t2));case 17:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),fe.apply(this,arguments)}function de(e,t,n){return ve.apply(this,arguments)}function ve(){return(ve=p(u().mark((function e(t,n,r){var i,a,s,o,l,h,p,f,d,v;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t._canInitEmulator=!1,i=Object.assign(Object.assign({},ue),n),e.prev=2,a=new be(t),e.next=6,Promise.race([r(),a.promise]);case 6:return s=e.sent,a.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(o=e.sent))){e.next=13;break}throw _e(t,"account-exists-with-different-credential",o);case 13:if(!s.ok||"errorMessage"in o){e.next=17;break}return e.abrupt("return",o);case 17:if(l=s.ok?o.errorMessage:o.error.message,h=l.split(" : "),p=c(h,2),f=p[0],d=p[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){e.next=23;break}throw _e(t,"credential-already-in-use",o);case 23:if("EMAIL_EXISTS"!==f){e.next=27;break}throw _e(t,"email-already-in-use",o);case 27:if("USER_DISABLED"!==f){e.next=29;break}throw _e(t,"user-disabled",o);case 29:if(v=i[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!d){e.next=34;break}throw X(t,v,d);case 34:J(t,v);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof L)){e.next=41;break}throw e.t0;case 41:J(t,"network-request-failed",{message:String(e.t0)});case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function me(e,t,n,r){return ye.apply(this,arguments)}function ye(){return ye=p(u().mark((function e(t,n,r,i){var a,s,o=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>4&&void 0!==o[4]?o[4]:{},e.next=3,pe(t,n,r,i,a);case 3:return"mfaPendingCredential"in(s=e.sent)&&J(t,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),ye.apply(this,arguments)}function ke(e,t,n,r){return ge.apply(this,arguments)}function ge(){return(ge=p(u().mark((function e(t,n,r,i){var a,s,o,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a="".concat(n).concat(r,"?").concat(i),o=(s=t).config.emulator?se(t.config,a):"".concat(t.config.apiScheme,"://").concat(a),!ce.includes(r)){e.next=9;break}return e.next=6,s._persistenceManagerAvailable;case 6:if("COOKIE"!==s._getPersistenceType()){e.next=9;break}return c=s._getPersistence(),e.abrupt("return",c._getFinalTarget(o).toString());case 9:return e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function we(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var be=function(){return v((function e(t){var n=this;f(this,e),this.auth=t,this.timer=null,this.promise=new Promise((function(e,t){n.timer=setTimeout((function(){return t(Y(n.auth,"network-request-failed"))}),le.get())}))}),[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}])}();function _e(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=Y(e,t,r);return i.customData._tokenResponse=n,i}function Ie(e){return void 0!==e&&void 0!==e.enterprise}var xe=function(){return v((function e(t){if(f(this,e),this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}),[{key:"getProviderEnforcementState",value:function(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;var t,n=l(this.recaptchaEnforcementState);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.provider&&r.provider===e)return we(r.enforcementState)}}catch(i){n.e(i)}finally{n.f()}return null}},{key:"isProviderEnabled",value:function(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}},{key:"isAnyProviderEnabled",value:function(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}])}();function Te(e,t){return Ee.apply(this,arguments)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Ee(){return(Ee=p(u().mark((function e(t,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pe(t,"GET","/v2/recaptchaConfig",he(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Se(e,t){return Pe.apply(this,arguments)}function Pe(){return(Pe=p(u().mark((function e(t,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pe(t,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Re(e,t){return Oe.apply(this,arguments)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Oe(){return(Oe=p(u().mark((function e(t,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pe(t,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ae(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(n){}}function Ce(){return Ce=p(u().mark((function t(n){var r,i,a,s,o,c,l=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=y(n),t.next=4,i.getIdToken(r);case 4:return a=t.sent,Z((s=Le(a))&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error"),o="object"===e(s.firebase)?s.firebase:void 0,c=null==o?void 0:o.sign_in_provider,t.abrupt("return",{claims:s,token:a,authTime:Ae(Ne(s.auth_time)),issuedAtTime:Ae(Ne(s.iat)),expirationTime:Ae(Ne(s.exp)),signInProvider:c||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null});case 10:case"end":return t.stop()}}),t)}))),Ce.apply(this,arguments)}function Ne(e){return 1e3*Number(e)}function Le(e){var t=c(e.split("."),3),n=t[0],r=t[1],i=t[2];if(void 0===n||void 0===r||void 0===i)return B("JWT malformed, contained fewer than 3 sections"),null;try{var a=M(r);return a?JSON.parse(a):(B("Failed to decode base64 JWT payload"),null)}catch(s){return B("Caught error parsing JWT payload as JSON",null==s?void 0:s.toString()),null}}function Me(e){var t=Le(e);return Z(t,"internal-error"),Z(void 0!==t.exp,"internal-error"),Z(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Ue(e,t){return De.apply(this,arguments)}function De(){return De=p(u().mark((function e(t,n){var r=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r.length>2&&void 0!==r[2]&&r[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof L&&(i=e.t0,a=void 0,a=i.code,a==="auth/".concat("user-disabled")||a==="auth/".concat("user-token-expired")))){e.next=15;break}if(t.auth.currentUser!==t){e.next=15;break}return e.next=15,t.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}var i,a;
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */}),e,null,[[3,9]])}))),De.apply(this,arguments)}var je=function(){return v((function e(t){f(this,e),this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}),[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t);this.timerId=setTimeout(p(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.iteration();case 2:case"end":return t.stop()}}),t)}))),n)}}},{key:"iteration",value:(e=p(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),(null===e.t0||void 0===e.t0?void 0:e.t0.code)==="auth/".concat("network-request-failed")&&this.schedule(!0),e.abrupt("return");case 9:this.schedule();case 10:case"end":return e.stop()}}),e,this,[[0,5]])}))),function(){return e.apply(this,arguments)})}]);var e}(),Fe=function(){return v((function e(t,n){f(this,e),this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}),[{key:"_initializeTime",value:function(){this.lastSignInTime=Ae(this.lastLoginAt),this.creationTime=Ae(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}])}();
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function Ve(e){return He.apply(this,arguments)}function He(){return(He=p(u().mark((function e(t){var n,r,i,a,s,o,c,l,h,p,f;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.auth,e.next=3,t.getIdToken();case 3:return i=e.sent,e.next=6,Ue(t,Re(r,{idToken:i}));case 6:Z(null==(a=e.sent)?void 0:a.users.length,r,"internal-error"),s=a.users[0],t._notifyReloadListener(s),o=(null===(n=s.providerUserInfo)||void 0===n?void 0:n.length)?Ge(s.providerUserInfo):[],c=Ke(t.providerData,o),l=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==c?void 0:c.length)),p=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Fe(s.createdAt,s.lastLoginAt),isAnonymous:p},Object.assign(t,f);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function We(){return(We=p(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y(t),e.next=3,Ve(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ke(e,t){var n=e.filter((function(e){return!t.some((function(t){return t.providerId===e.providerId}))}));return[].concat(m(n),m(t))}function Ge(e){return e.map((function(e){var t=e.providerId,n=H(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function ze(e,t){return qe.apply(this,arguments)}function qe(){return(qe=p(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de(t,{},p(u().mark((function e(){var r,i,a,s,o,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=E({grant_type:"refresh_token",refresh_token:n}).slice(1),i=t.config,a=i.tokenApiHost,s=i.apiKey,e.next=4,ke(t,a,"/v1/token","key=".concat(s));case 4:return o=e.sent,e.next=7,t._getAdditionalHeaders();case 7:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",oe.fetch()(o,{method:"POST",headers:c,body:r}));case 10:case"end":return e.stop()}}),e)}))));case 2:return r=e.sent,e.abrupt("return",{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Be(e,t){return Je.apply(this,arguments)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Je(){return(Je=p(u().mark((function e(t,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pe(t,"POST","/v2/accounts:revokeToken",he(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ye=function(){function e(){f(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return v(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){Z(e.idToken,"internal-error"),Z(void 0!==e.idToken,"internal-error"),Z(void 0!==e.refreshToken,"internal-error");var t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Me(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}},{key:"updateFromIdToken",value:function(e){Z(0!==e.length,"internal-error");var t=Me(e);this.updateTokensAndExpiration(e,null,t)}},{key:"getToken",value:(n=p(u().mark((function e(t){var n=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.length>1&&void 0!==n[1]&&n[1]||!this.accessToken||this.isExpired){e.next=3;break}return e.abrupt("return",this.accessToken);case 3:if(Z(this.refreshToken,t,"user-token-expired"),!this.refreshToken){e.next=8;break}return e.next=7,this.refresh(t,this.refreshToken);case 7:return e.abrupt("return",this.accessToken);case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:(t=p(u().mark((function e(t,n){var r,i,a,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ze(t,n);case 2:r=e.sent,i=r.accessToken,a=r.refreshToken,s=r.expiresIn,this.updateTokensAndExpiration(i,a,Number(s));case 7:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return ee("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,s=new e;return r&&(Z("string"==typeof r,"internal-error",{appName:t}),s.refreshToken=r),i&&(Z("string"==typeof i,"internal-error",{appName:t}),s.accessToken=i),a&&(Z("number"==typeof a,"internal-error",{appName:t}),s.expirationTime=a),s}}]);var t,n}();
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Xe(e,t){Z("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Qe=function(){function e(t){f(this,e);var n=t.uid,r=t.auth,i=t.stsTokenManager,a=H(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new je(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?m(a.providerData):[],this.metadata=new Fe(a.createdAt||void 0,a.lastLoginAt||void 0)}return v(e,[{key:"getIdToken",value:(a=p(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ue(this,this.stsTokenManager.getToken(this.auth,t));case 2:if(Z(n=e.sent,this.auth,"internal-error"),this.accessToken===n){e.next=9;break}return this.accessToken=n,e.next=8,this.auth._persistUserIfCurrent(this);case 8:this.auth._notifyListenersIfCurrent(this);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"getIdTokenResult",value:function(e){return function(e){return Ce.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return We.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){var n=new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}},{key:"_onReload",value:function(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:(i=p(u().mark((function e(t){var n,r,i=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=i.length>1&&void 0!==i[1]&&i[1],r=!1,t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),!n){e.next=6;break}return e.next=6,Ve(this);case 6:return e.next=8,this.auth._persistUserIfCurrent(this);case 8:r&&this.auth._notifyListenersIfCurrent(this);case 9:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"delete",value:(r=p(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I(this.auth.app)){e.next=2;break}return e.abrupt("return",Promise.reject(Q(this.auth)));case 2:return e.next=4,this.getIdToken();case 4:return t=e.sent,e.next=7,Ue(this,Se(this.auth,{idToken:t}));case 7:return this.stsTokenManager.clearRefreshToken(),e.abrupt("return",this.auth.signOut());case 9:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,a,s,o,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,p=null!==(i=n.email)&&void 0!==i?i:void 0,f=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,d=null!==(s=n.photoURL)&&void 0!==s?s:void 0,v=null!==(o=n.tenantId)&&void 0!==o?o:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,y=null!==(c=n.createdAt)&&void 0!==c?c:void 0,k=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,g=n.uid,w=n.emailVerified,b=n.isAnonymous,_=n.providerData,I=n.stsTokenManager;Z(g&&I,t,"internal-error");var x=Ye.fromJSON(this.name,I);Z("string"==typeof g,t,"internal-error"),Xe(h,t.name),Xe(p,t.name),Z("boolean"==typeof w,t,"internal-error"),Z("boolean"==typeof b,t,"internal-error"),Xe(f,t.name),Xe(d,t.name),Xe(v,t.name),Xe(m,t.name),Xe(y,t.name),Xe(k,t.name);var T=new e({uid:g,auth:t,email:p,emailVerified:w,displayName:h,isAnonymous:b,photoURL:d,phoneNumber:f,tenantId:v,stsTokenManager:x,createdAt:y,lastLoginAt:k});return _&&Array.isArray(_)&&(T.providerData=_.map((function(e){return Object.assign({},e)}))),m&&(T._redirectEventId=m),T}},{key:"_fromIdTokenResponse",value:(n=p(u().mark((function t(n,r){var i,a,s,o=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],(a=new Ye).updateFromServerResponse(r),s=new e({uid:r.localId,auth:n,stsTokenManager:a,isAnonymous:i}),t.next=6,Ve(s);case 6:return t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)}))),function(e,t){return n.apply(this,arguments)})},{key:"_fromGetAccountInfoResponse",value:(t=p(u().mark((function t(n,r,i){var a,s,o,c,l,h;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Z(void 0!==(a=r.users[0]).localId,"internal-error"),s=void 0!==a.providerUserInfo?Ge(a.providerUserInfo):[],o=!(a.email&&a.passwordHash||(null==s?void 0:s.length)),(c=new Ye).updateFromIdToken(i),l=new e({uid:a.localId,auth:n,stsTokenManager:c,isAnonymous:o}),h={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new Fe(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash||(null==s?void 0:s.length))},Object.assign(l,h),t.abrupt("return",l);case 10:case"end":return t.stop()}}),t)}))),function(e,n,r){return t.apply(this,arguments)})}]);var t,n,r,i,a}(),$e=new Map;
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Ze(e){te(e instanceof Function,"Expected a class definition");var t=$e.get(e);return t?(te(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,$e.set(e,t),t)}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var et=function(){return v((function e(){f(this,e),this.type="NONE",this.storage={}}),[{key:"_isAvailable",value:(r=p(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})},{key:"_set",value:(n=p(u().mark((function e(t,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.storage[t]=n;case 1:case"end":return e.stop()}}),e,this)}))),function(e,t){return n.apply(this,arguments)})},{key:"_get",value:(t=p(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.storage[t],e.abrupt("return",void 0===n?null:n);case 2:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_remove",value:(e=p(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete this.storage[t];case 1:case"end":return e.stop()}}),e,this)}))),function(t){return e.apply(this,arguments)})},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]);var e,t,n,r}();et.type="NONE";var tt=et;
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function nt(e,t,n){return"firebase".concat(":",e,":").concat(t,":").concat(n)}var rt=function(){function e(t,n,r){f(this,e),this.persistence=t,this.auth=n,this.userKey=r;var i=this.auth,a=i.config,s=i.name;this.fullUserKey=nt(this.userKey,a.apiKey,s),this.fullPersistenceKey=nt("persistence",a.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return v(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:(r=p(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.persistence._get(this.fullUserKey);case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:if("string"!=typeof t){e.next=12;break}return e.next=8,Re(this.auth,{idToken:t}).catch((function(){}));case 8:if(n=e.sent){e.next=11;break}return e.abrupt("return",null);case 11:return e.abrupt("return",Qe._fromGetAccountInfoResponse(this.auth,n,t));case 12:return e.abrupt("return",Qe._fromJSON(this.auth,t));case 13:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:(n=p(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.getCurrentUser();case 4:return n=e.sent,e.next=7,this.removeCurrentUser();case 7:if(this.persistence=t,!n){e.next=10;break}return e.abrupt("return",this.setCurrentUser(n));case 10:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:(t=p(u().mark((function t(n,r){var i,a,s,o,c,h,f,d,v,m,y,k,g=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=g.length>2&&void 0!==g[2]?g[2]:"authUser",r.length){t.next=3;break}return t.abrupt("return",new e(Ze(tt),n,i));case 3:return t.next=5,Promise.all(r.map(function(){var e=p(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",t);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:a=t.sent.filter((function(e){return e})),s=a[0]||Ze(tt),o=nt(i,n.config.apiKey,n.name),c=null,h=l(r),t.prev=10,h.s();case 12:if((f=h.n()).done){t.next=41;break}return d=f.value,t.prev=14,t.next=17,d._get(o);case 17:if(!(v=t.sent)){t.next=35;break}if(m=void 0,"string"!=typeof v){t.next=31;break}return t.next=23,Re(n,{idToken:v}).catch((function(){}));case 23:if(y=t.sent){t.next=26;break}return t.abrupt("break",41);case 26:return t.next=28,Qe._fromGetAccountInfoResponse(n,y,v);case 28:m=t.sent,t.next=32;break;case 31:m=Qe._fromJSON(n,v);case 32:return d!==s&&(c=m),s=d,t.abrupt("break",41);case 35:t.next=39;break;case 37:t.prev=37,t.t0=t.catch(14);case 39:t.next=12;break;case 41:t.next=46;break;case 43:t.prev=43,t.t1=t.catch(10),h.e(t.t1);case 46:return t.prev=46,h.f(),t.finish(46);case 49:if(k=a.filter((function(e){return e._shouldAllowMigration})),s._shouldAllowMigration&&k.length){t.next=52;break}return t.abrupt("return",new e(s,n,i));case 52:if(s=k[0],!c){t.next=56;break}return t.next=56,s._set(o,c.toJSON());case 56:return t.next=58,Promise.all(r.map(function(){var e=p(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t===s){e.next=8;break}return e.prev=1,e.next=4,t._remove(o);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 58:return t.abrupt("return",new e(s,n,i));case 59:case"end":return t.stop()}}),t,null,[[10,43,46,49],[14,37]])}))),function(e,n){return t.apply(this,arguments)})}]);var t,n,r}();
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function it(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ut(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(at(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(lt(t))return"Blackberry";if(ht(t))return"Webos";if(st(t))return"Safari";if((t.includes("chrome/")||ot(t))&&!t.includes("edge/"))return"Chrome";if(ct(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function at(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w();return/firefox\//i.test(e)}function st(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:w()).toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ot(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w();return/crios\//i.test(e)}function ut(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w();return/iemobile/i.test(e)}function ct(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w();return/android/i.test(e)}function lt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w();return/blackberry/i.test(e)}function ht(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w();return/webos/i.test(e)}function pt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ft(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w();return pt(e)||ct(e)||ht(e)||lt(e)||/windows phone/i.test(e)||ut(e)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function dt(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=it(w());break;case"Worker":t="".concat(it(w()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(T,"/").concat(r)}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var vt=function(){return v((function e(t){f(this,e),this.auth=t,this.queue=[]}),[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(i){r(i)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:(e=p(u().mark((function e(t){var n,r,i,a,s,o,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:n=[],e.prev=3,r=l(this.queue),e.prev=5,r.s();case 7:if((i=r.n()).done){e.next=14;break}return a=i.value,e.next=11,a(t);case 11:a.onAbort&&n.push(a.onAbort);case 12:e.next=7;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),r.e(e.t0);case 19:return e.prev=19,r.f(),e.finish(19);case 22:e.next=30;break;case 24:e.prev=24,e.t1=e.catch(3),n.reverse(),s=l(n);try{for(s.s();!(o=s.n()).done;){c=o.value;try{c()}catch(u){}}}catch(h){s.e(h)}finally{s.f()}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t1||void 0===e.t1?void 0:e.t1.message});case 30:case"end":return e.stop()}}),e,this,[[3,24],[5,16,19,22]])}))),function(t){return e.apply(this,arguments)})}]);var e}();
/**
             * @license
             * Copyright 2023 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function mt(e){return yt.apply(this,arguments)}
/**
             * @license
             * Copyright 2023 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function yt(){return yt=p(u().mark((function e(t){var n,r=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.abrupt("return",pe(t,"GET","/v2/passwordPolicy",he(t,n)));case 2:case"end":return e.stop()}}),e)}))),yt.apply(this,arguments)}var kt=function(){return v((function e(t){var n,r,i,a;f(this,e);var s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(n=s.minPasswordLength)&&void 0!==n?n:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(r=t.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(a=t.forceUpgradeOnSignin)&&void 0!==a&&a,this.schemaVersion=t.schemaVersion}),[{key:"validatePassword",value:function(e){var t,n,r,i,a,s,o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(n=o.meetsMaxPasswordLength)||void 0===n||n),o.isValid&&(o.isValid=null===(r=o.containsLowercaseLetter)||void 0===r||r),o.isValid&&(o.isValid=null===(i=o.containsUppercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(a=o.containsNumericCharacter)||void 0===a||a),o.isValid&&(o.isValid=null===(s=o.containsNonAlphanumericCharacter)||void 0===s||s),o}},{key:"validatePasswordLengthOptions",value:function(e,t){var n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}},{key:"validatePasswordCharacterOptions",value:function(e,t){var n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(var r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}},{key:"updatePasswordCharacterOptionsStatuses",value:function(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}])}(),gt=function(){return v((function e(t,n,r,i){var a=this;f(this,e),this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bt(this),this.idTokenSubscription=new bt(this),this.beforeStateQueue=new vt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=G,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise((function(e){return a._resolvePersistenceManagerAvailable=e}))}),[{key:"_initializeWithPersistence",value:function(e,t){var n=this;return t&&(this._popupRedirectResolver=Ze(t)),this._initializationPromise=this.queue(p(u().mark((function r(){var i,a,s;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._deleted){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,rt.create(n,e);case 4:if(n.persistenceManager=r.sent,null===(i=n._resolvePersistenceManagerAvailable)||void 0===i||i.call(n),!n._deleted){r.next=8;break}return r.abrupt("return");case 8:if(!(null===(a=n._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){r.next=16;break}return r.prev=9,r.next=12,n._popupRedirectResolver._initialize(n);case 12:r.next=16;break;case 14:r.prev=14,r.t0=r.catch(9);case 16:return r.next=18,n.initializeCurrentUser(t);case 18:if(n.lastNotifiedUid=(null===(s=n.currentUser)||void 0===s?void 0:s.uid)||null,!n._deleted){r.next=21;break}return r.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return r.stop()}}),r,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:(E=p(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.assertedPersistence.getCurrentUser();case 4:if(t=e.sent,this.currentUser||t){e.next=7;break}return e.abrupt("return");case 7:if(!this.currentUser||!t||this.currentUser.uid!==t.uid){e.next=12;break}return this._currentUser._assign(t),e.next=11,this.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,this._updateCurrentUser(t,!0);case 14:case"end":return e.stop()}}),e,this)}))),function(){return E.apply(this,arguments)})},{key:"initializeCurrentUserFromIdToken",value:(T=p(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Re(this,{idToken:t});case 3:return n=e.sent,e.next=6,Qe._fromGetAccountInfoResponse(this,n,t);case 6:return r=e.sent,e.next=9,this.directlySetCurrentUser(r);case 9:e.next=16;break;case 11:return e.prev=11,e.t0=e.catch(0),console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e.t0),e.next=16,this.directlySetCurrentUser(null);case 16:case"end":return e.stop()}}),e,this,[[0,11]])}))),function(e){return T.apply(this,arguments)})},{key:"initializeCurrentUser",value:(x=p(u().mark((function e(t){var n,r,i,a,s,o,c,l,h=this;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I(this.app)){e.next=7;break}if(!(r=this.app.settings.authIdToken)){e.next=6;break}return e.abrupt("return",new Promise((function(e){setTimeout((function(){return h.initializeCurrentUserFromIdToken(r).then(e,e)}))})));case 6:return e.abrupt("return",this.directlySetCurrentUser(null));case 7:return e.next=9,this.assertedPersistence.getCurrentUser();case 9:if(i=e.sent,a=i,s=!1,!t||!this.config.authDomain){e.next=21;break}return e.next=15,this.getOrInitRedirectPersistenceManager();case 15:return o=null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId,c=null==a?void 0:a._redirectEventId,e.next=19,this.tryRedirectSignIn(t);case 19:l=e.sent,o&&o!==c||!(null==l?void 0:l.user)||(a=l.user,s=!0);case 21:if(a){e.next=23;break}return e.abrupt("return",this.directlySetCurrentUser(null));case 23:if(a._redirectEventId){e.next=39;break}if(!s){e.next=34;break}return e.prev=25,e.next=28,this.beforeStateQueue.runMiddleware(a);case 28:e.next=34;break;case 30:e.prev=30,e.t0=e.catch(25),a=i,this._popupRedirectResolver._overrideRedirectResult(this,(function(){return Promise.reject(e.t0)}));case 34:if(!a){e.next=38;break}return e.abrupt("return",this.reloadAndSetCurrentUserOrClear(a));case 38:return e.abrupt("return",this.directlySetCurrentUser(null));case 39:return Z(this._popupRedirectResolver,this,"argument-error"),e.next=42,this.getOrInitRedirectPersistenceManager();case 42:if(!this.redirectUser||this.redirectUser._redirectEventId!==a._redirectEventId){e.next=44;break}return e.abrupt("return",this.directlySetCurrentUser(a));case 44:return e.abrupt("return",this.reloadAndSetCurrentUserOrClear(a));case 45:case"end":return e.stop()}}),e,this,[[25,30]])}))),function(e){return x.apply(this,arguments)})},{key:"tryRedirectSignIn",value:(_=p(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,this._popupRedirectResolver._completeRedirectFn(this,t,!0);case 4:n=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,this._setRedirectUser(null);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this,[[1,7]])}))),function(e){return _.apply(this,arguments)})},{key:"reloadAndSetCurrentUserOrClear",value:(w=p(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ve(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),(null===e.t0||void 0===e.t0?void 0:e.t0.code)==="auth/".concat("network-request-failed")){e.next=9;break}return e.abrupt("return",this.directlySetCurrentUser(null));case 9:return e.abrupt("return",this.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),e,this,[[0,5]])}))),function(e){return w.apply(this,arguments)})},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:(k=p(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._deleted=!0;case 1:case"end":return e.stop()}}),e,this)}))),function(){return k.apply(this,arguments)})},{key:"updateCurrentUser",value:(m=p(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I(this.app)){e.next=2;break}return e.abrupt("return",Promise.reject(Q(this)));case 2:return(n=t?y(t):null)&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),e.abrupt("return",this._updateCurrentUser(n&&n._clone(this)));case 5:case"end":return e.stop()}}),e,this)}))),function(e){return m.apply(this,arguments)})},{key:"_updateCurrentUser",value:(d=p(u().mark((function e(t){var n,r=this,i=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=i.length>1&&void 0!==i[1]&&i[1],!this._deleted){e.next=3;break}return e.abrupt("return");case 3:if(t&&Z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n){e.next=7;break}return e.next=7,this.beforeStateQueue.runMiddleware(t);case 7:return e.abrupt("return",this.queue(p(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),e)})))));case 8:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)})},{key:"signOut",value:(h=p(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I(this.app)){e.next=2;break}return e.abrupt("return",Promise.reject(Q(this)));case 2:return e.next=4,this.beforeStateQueue.runMiddleware(null);case 4:if(!this.redirectPersistenceManager&&!this._popupRedirectResolver){e.next=7;break}return e.next=7,this._setRedirectUser(null);case 7:return e.abrupt("return",this._updateCurrentUser(null,!0));case 8:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)})},{key:"setPersistence",value:function(e){var t=this;return I(this.app)?Promise.reject(Q(this)):this.queue(p(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.assertedPersistence.setPersistence(Ze(e));case 2:case"end":return n.stop()}}),n)}))))}},{key:"_getRecaptchaConfig",value:function(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}},{key:"validatePassword",value:(l=p(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._getPasswordPolicyInternal()){e.next=3;break}return e.next=3,this._updatePasswordPolicy();case 3:if((n=this._getPasswordPolicyInternal()).schemaVersion===this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION){e.next=6;break}return e.abrupt("return",Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})));case 6:return e.abrupt("return",n.validatePassword(t));case 7:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"_getPasswordPolicyInternal",value:function(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}},{key:"_updatePasswordPolicy",value:(c=p(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,mt(this);case 2:t=e.sent,n=new kt(t),null===this.tenantId?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n;case 5:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"_getPersistenceType",value:function(){return this.assertedPersistence.persistence.type}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new b("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"authStateReady",value:function(){var e=this;return new Promise((function(t,n){if(e.currentUser)t();else var r=e.onAuthStateChanged((function(){r(),t()}),n)}))}},{key:"revokeAccessToken",value:(o=p(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.currentUser){e.next=8;break}return e.next=3,this.currentUser.getIdToken();case 3:return n=e.sent,r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n},null!=this.tenantId&&(r.tenantId=this.tenantId),e.next=8,Be(this,r);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:(s=p(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getOrInitRedirectPersistenceManager(n);case 2:return r=e.sent,e.abrupt("return",null===t?r.removeCurrentUser():r.setCurrentUser(t));case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return s.apply(this,arguments)})},{key:"getOrInitRedirectPersistenceManager",value:(a=p(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.redirectPersistenceManager){e.next=9;break}return Z(n=t&&Ze(t)||this._popupRedirectResolver,this,"argument-error"),e.next=5,rt.create(this,[Ze(n._redirectPersistence)],"redirectUser");case 5:return this.redirectPersistenceManager=e.sent,e.next=8,this.redirectPersistenceManager.getCurrentUser();case 8:this.redirectUser=e.sent;case 9:return e.abrupt("return",this.redirectPersistenceManager);case 10:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"_redirectUserForId",value:(i=p(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._isInitialized){e.next=3;break}return e.next=3,this.queue(p(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 3:if((null===(n=this._currentUser)||void 0===n?void 0:n._redirectEventId)!==t){e.next=5;break}return e.abrupt("return",this._currentUser);case 5:if((null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)!==t){e.next=7;break}return e.abrupt("return",this.redirectUser);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"_persistUserIfCurrent",value:(r=p(u().mark((function e(t){var n=this;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==this.currentUser){e.next=2;break}return e.abrupt("return",this.queue(p(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),s=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(o,this,"internal-error"),o.then((function(){s||a(i.currentUser)})),"function"==typeof t){var u=e.addObserver(t,n,r);return function(){s=!0,u()}}var c=e.addObserver(t);return function(){s=!0,c()}}},{key:"directlySetCurrentUser",value:(n=p(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,!t){e.next=8;break}return e.next=6,this.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,this.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dt(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:(t=p(u().mark((function e(){var t,n,r,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g({},"X-Client-Version",this.clientVersion),this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId),e.next=4,null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader();case 4:return(r=e.sent)&&(n["X-Firebase-Client"]=r),e.next=8,this._getAppCheckToken();case 8:return(i=e.sent)&&(n["X-Firebase-AppCheck"]=i),e.abrupt("return",n);case 11:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"_getAppCheckToken",value:(e=p(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I(this.app)||!this.app.settings.appCheckToken){e.next=2;break}return e.abrupt("return",this.app.settings.appCheckToken);case 2:return e.next=4,null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken();case 4:return(null==(n=e.sent)?void 0:n.error)&&q("Error while retrieving App Check token: ".concat(n.error)),e.abrupt("return",null==n?void 0:n.token);case 7:case"end":return e.stop()}}),e,this)}))),function(){return e.apply(this,arguments)})}]);var e,t,n,r,i,a,s,o,c,l,h,d,m,k,w,_,x,T,E}();function wt(e){return y(e)}var bt=function(){return v((function e(t){var n=this;f(this,e),this.auth=t,this.observer=null,this.addObserver=V((function(e){return n.observer=e}))}),[{key:"next",get:function(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}])}(),_t={loadJS:function(){return p(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new Error("Unable to load external scripts");case 1:case"end":return e.stop()}}),e)})))()},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function It(e){return _t.loadJS(e)}var xt=function(){return v((function e(){f(this,e),this.enterprise=new Tt}),[{key:"ready",value:function(e){e()}},{key:"execute",value:function(e,t){return Promise.resolve("token")}},{key:"render",value:function(e,t){return""}}])}(),Tt=function(){return v((function e(){f(this,e)}),[{key:"ready",value:function(e){e()}},{key:"execute",value:function(e,t){return Promise.resolve("token")}},{key:"render",value:function(e,t){return""}}])}(),Et="NO_RECAPTCHA",St=function(){return v((function e(t){f(this,e),this.type="recaptcha-enterprise",this.auth=wt(t)}),[{key:"verify",value:(e=p(u().mark((function e(){var t,n,r,i,a,s,o=this,c=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(e,n,r){var i=window.grecaptcha;Ie(i)?i.enterprise.ready((function(){i.enterprise.execute(e,{action:t}).then((function(e){n(e)})).catch((function(){n(Et)}))})):r(Error("No reCAPTCHA enterprise script loaded."))},i=function(){return i=p(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=5;break}if(null!=t.tenantId||null==t._agentRecaptchaConfig){e.next=3;break}return e.abrupt("return",t._agentRecaptchaConfig.siteKey);case 3:if(null==t.tenantId||void 0===t._tenantRecaptchaConfigs[t.tenantId]){e.next=5;break}return e.abrupt("return",t._tenantRecaptchaConfigs[t.tenantId].siteKey);case 5:return e.abrupt("return",new Promise(function(){var e=p(u().mark((function e(n,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Te(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((function(e){if(void 0!==e.recaptchaKey){var i=new xe(e);return null==t.tenantId?t._agentRecaptchaConfig=i:t._tenantRecaptchaConfigs[t.tenantId]=i,n(i.siteKey)}r(new Error("recaptcha Enterprise site key undefined"))})).catch((function(e){r(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 6:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)},r=function(e){return i.apply(this,arguments)},t=c.length>0&&void 0!==c[0]?c[0]:"verify",n=c.length>1&&void 0!==c[1]&&c[1],!this.auth.settings.appVerificationDisabledForTesting){e.next=8;break}return s=new xt,e.abrupt("return",s.execute("siteKey",{action:"verify"}));case 8:return e.abrupt("return",new Promise((function(e,t){r(o.auth).then((function(r){if(!n&&Ie(window.grecaptcha))a(r,e,t);else{if("undefined"==typeof window)return void t(new Error("RecaptchaVerifier is only supported in browser"));var i=_t.recaptchaEnterpriseScript;0!==i.length&&(i+=r),It(i).then((function(){a(r,e,t)})).catch((function(e){t(e)}))}})).catch((function(e){t(e)}))})));case 9:case"end":return e.stop()}}),e,this)}))),function(){return e.apply(this,arguments)})}]);var e}();function Pt(e,t,n){return Rt.apply(this,arguments)}function Rt(){return Rt=p(u().mark((function e(t,n,r){var i,a,s,o,c,l,h,p,f=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=f.length>3&&void 0!==f[3]&&f[3],a=f.length>4&&void 0!==f[4]&&f[4],s=new St(t),!a){e.next=7;break}o=Et,e.next=18;break;case 7:return e.prev=7,e.next=10,s.verify(r);case 10:o=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(7),e.next=17,s.verify(r,!0);case 17:o=e.sent;case 18:if(c=Object.assign({},n),"mfaSmsEnrollment"!==r&&"mfaSmsSignIn"!==r){e.next=22;break}return"phoneEnrollmentInfo"in c?(l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken,Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})):"phoneSignInInfo"in c&&(p=c.phoneSignInInfo.recaptchaToken,Object.assign(c,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})),e.abrupt("return",c);case 22:return i?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),e.abrupt("return",c);case 26:case"end":return e.stop()}}),e,null,[[7,13]])}))),Rt.apply(this,arguments)}function Ot(e,t,n,r,i){return At.apply(this,arguments)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function At(){return At=p(u().mark((function e(t,n,r,i,a){var s,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(s=t._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))){e.next=7;break}return e.next=3,Pt(t,n,r,"getOobCode"===r);case 3:return o=e.sent,e.abrupt("return",i(t,o));case 7:return e.abrupt("return",i(t,n).catch(function(){var e=p(u().mark((function e(a){var s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.code!=="auth/".concat("missing-recaptcha-token")){e.next=8;break}return console.log("".concat(r," is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.")),e.next=4,Pt(t,n,r,"getOobCode"===r);case 4:return s=e.sent,e.abrupt("return",i(t,s));case 8:return e.abrupt("return",Promise.reject(a));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:case"end":return e.stop()}}),e)}))),At.apply(this,arguments)}function Ct(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Nt(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Lt=function(){return v((function e(t,n){f(this,e),this.providerId=t,this.signInMethod=n}),[{key:"toJSON",value:function(){return ee("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return ee("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return ee("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return ee("not implemented")}}])}();function Mt(e,t){return Ut.apply(this,arguments)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Ut(){return(Ut=p(u().mark((function e(t,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pe(t,"POST","/v1/accounts:signUp",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Dt(e,t){return jt.apply(this,arguments)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function jt(){return(jt=p(u().mark((function e(t,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",me(t,"POST","/v1/accounts:signInWithPassword",he(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ft(e,t){return Vt.apply(this,arguments)}function Vt(){return(Vt=p(u().mark((function e(t,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",me(t,"POST","/v1/accounts:signInWithEmailLink",he(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ht(e,t){return Wt.apply(this,arguments)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Wt(){return(Wt=p(u().mark((function e(t,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",me(t,"POST","/v1/accounts:signInWithEmailLink",he(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Kt=function(e){function t(e,n,i){var a,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return f(this,t),(a=r(this,t,["password",i]))._email=e,a._password=n,a._tenantId=s,a}return s(t,e),v(t,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:(i=p(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?5:6;break;case 3:return n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},e.abrupt("return",Ot(t,n,"signInWithPassword",Dt));case 5:return e.abrupt("return",Ft(t,{email:this._email,oobCode:this._password}));case 6:J(t,"internal-error");case 7:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"_linkToIdToken",value:(n=p(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?5:6;break;case 3:return r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},e.abrupt("return",Ot(t,r,"signUpPassword",Mt));case 5:return e.abrupt("return",Ht(t,{idToken:n,email:this._email,oobCode:this._password}));case 6:J(t,"internal-error");case 7:case"end":return e.stop()}}),e,this)}))),function(e,t){return n.apply(this,arguments)})},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,n){return new t(e,n,"password")}},{key:"_fromEmailAndCode",value:function(e,n){return new t(e,n,"emailLink",arguments.length>2&&void 0!==arguments[2]?arguments[2]:null)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]);var n,i}(Lt);
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Gt(e,t){return zt.apply(this,arguments)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function zt(){return(zt=p(u().mark((function e(t,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",me(t,"POST","/v1/accounts:signInWithIdp",he(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var qt=function(e){function t(){var e;return f(this,t),(e=r(this,t,arguments)).pendingToken=null,e}return s(t,e),v(t,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Gt(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Gt(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Gt(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=E(t)}return e}}],[{key:"_fromParams",value:function(e){var n=new t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):J("argument-error"),n}},{key:"fromJSON",value:function(e){var n="string"==typeof e?JSON.parse(e):e,r=n.providerId,i=n.signInMethod,a=H(n,["providerId","signInMethod"]);if(!r||!i)return null;var s=new t(r,i);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}}])}(Lt);var Bt=function(){function e(t){var n,r,i,a,s,o;f(this,e);var u=C(N(t)),c=null!==(n=u.apiKey)&&void 0!==n?n:null,l=null!==(r=u.oobCode)&&void 0!==r?r:null,h=
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=u.mode)&&void 0!==i?i:null);Z(c&&l&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=l,this.continueUrl=null!==(a=u.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(s=u.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=u.tenantId)&&void 0!==o?o:null}return v(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=C(N(e)).link,n=t?C(N(t)).deep_link_id:null,r=C(N(e)).deep_link_id;return(r?C(N(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(r){return null}}}])}(),Jt=function(){return v((function e(){f(this,e),this.providerId=e.PROVIDER_ID}),null,[{key:"credential",value:function(e,t){return Kt._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Bt.parseLink(t);return Z(n,"argument-error"),Kt._fromEmailAndCode(e,n.code,n.tenantId)}}])}();
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */Jt.PROVIDER_ID="password",Jt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Jt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
var Yt=function(){return v((function e(t){f(this,e),this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}),[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}])}(),Xt=function(e){function t(){var e;return f(this,t),(e=r(this,t,arguments)).scopes=[],e}return s(t,e),v(t,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return m(this.scopes)}}])}(Yt),Qt=function(e){function t(){return f(this,t),r(this,t,["facebook.com"])}return s(t,e),v(t,null,[{key:"credential",value:function(e){return qt._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return t.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var n=e._tokenResponse;if(!n||!("oauthAccessToken"in n))return null;if(!n.oauthAccessToken)return null;try{return t.credential(n.oauthAccessToken)}catch(r){return null}}}])}(Xt);
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Qt.PROVIDER_ID="facebook.com";
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
var $t=function(e){function t(){var e;return f(this,t),(e=r(this,t,["google.com"])).addScope("profile"),e}return s(t,e),v(t,null,[{key:"credential",value:function(e,n){return qt._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}},{key:"credentialFromResult",value:function(e){return t.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var n=e._tokenResponse;if(!n)return null;var r=n.oauthIdToken,i=n.oauthAccessToken;if(!r&&!i)return null;try{return t.credential(r,i)}catch(a){return null}}}])}(Xt);$t.GOOGLE_SIGN_IN_METHOD="google.com",$t.PROVIDER_ID="google.com";
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
var Zt=function(e){function t(){return f(this,t),r(this,t,["github.com"])}return s(t,e),v(t,null,[{key:"credential",value:function(e){return qt._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return t.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var n=e._tokenResponse;if(!n||!("oauthAccessToken"in n))return null;if(!n.oauthAccessToken)return null;try{return t.credential(n.oauthAccessToken)}catch(r){return null}}}])}(Xt);Zt.GITHUB_SIGN_IN_METHOD="github.com",Zt.PROVIDER_ID="github.com";
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
var en=function(e){function t(){return f(this,t),r(this,t,["twitter.com"])}return s(t,e),v(t,null,[{key:"credential",value:function(e,n){return qt._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}},{key:"credentialFromResult",value:function(e){return t.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var n=e._tokenResponse;if(!n)return null;var r=n.oauthAccessToken,i=n.oauthTokenSecret;if(!r||!i)return null;try{return t.credential(r,i)}catch(a){return null}}}])}(Xt);
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function tn(e,t){return nn.apply(this,arguments)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function nn(){return(nn=p(u().mark((function e(t,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",me(t,"POST","/v1/accounts:signUp",he(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}en.TWITTER_SIGN_IN_METHOD="twitter.com",en.PROVIDER_ID="twitter.com";var rn=function(){function e(t){f(this,e),this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}return v(e,null,[{key:"_fromIdTokenResponse",value:(n=p(u().mark((function t(n,r,i){var a,s,o,c,l=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=l.length>3&&void 0!==l[3]&&l[3],t.next=3,Qe._fromIdTokenResponse(n,i,a);case 3:return s=t.sent,o=an(i),c=new e({user:s,providerId:o,_tokenResponse:i,operationType:r}),t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)}))),function(e,t,r){return n.apply(this,arguments)})},{key:"_forOperation",value:(t=p(u().mark((function t(n,r,i){var a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._updateTokensIfNecessary(i,!0);case 2:return a=an(i),t.abrupt("return",new e({user:n,providerId:a,_tokenResponse:i,operationType:r}));case 4:case"end":return t.stop()}}),t)}))),function(e,n,r){return t.apply(this,arguments)})}]);var t,n}();function an(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var sn=function(e){function t(e,n,i,a){var s,o;return f(this,t),(s=r(this,t,[n.code,n.message])).operationType=i,s.user=a,Object.setPrototypeOf(s,t.prototype),s.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:n.customData._serverResponse,operationType:i},s}return s(t,e),v(t,null,[{key:"_fromErrorAndOperation",value:function(e,n,r,i){return new t(e,n,r,i)}}])}(L);function on(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if(n.code==="auth/".concat("multi-factor-auth-required"))throw sn._fromErrorAndOperation(e,n,t,r);throw n}))}function un(e,t){return cn.apply(this,arguments)}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function cn(){return cn=p(u().mark((function e(t,n){var r,i,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>2&&void 0!==a[2]&&a[2],e.t0=Ue,e.t1=t,e.t2=n,e.t3=t.auth,e.next=7,t.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=r,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return i=e.sent,e.abrupt("return",rn._forOperation(t,"link",i));case 14:case"end":return e.stop()}}),e)}))),cn.apply(this,arguments)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function ln(){return ln=p(u().mark((function e(t,n){var r,i,a,s,o,c,l=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=l.length>2&&void 0!==l[2]&&l[2],i=t.auth,!I(i.app)){e.next=4;break}return e.abrupt("return",Promise.reject(Q(i)));case 4:return a="reauthenticate",e.prev=5,e.next=8,Ue(t,on(i,a,n,t),r);case 8:return Z((s=e.sent).idToken,i,"internal-error"),Z(o=Le(s.idToken),i,"internal-error"),c=o.sub,Z(t.uid===c,i,"user-mismatch"),e.abrupt("return",rn._forOperation(t,a,s));case 17:throw e.prev=17,e.t0=e.catch(5),(null===e.t0||void 0===e.t0?void 0:e.t0.code)==="auth/".concat("user-not-found")&&J(i,"user-mismatch"),e.t0;case 21:case"end":return e.stop()}}),e,null,[[5,17]])}))),ln.apply(this,arguments)}function hn(e,t){return pn.apply(this,arguments)}function pn(){return pn=p(u().mark((function e(t,n){var r,i,a,s,o=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=o.length>2&&void 0!==o[2]&&o[2],!I(t.app)){e.next=3;break}return e.abrupt("return",Promise.reject(Q(t)));case 3:return i="signIn",e.next=6,on(t,i,n);case 6:return a=e.sent,e.next=9,rn._fromIdTokenResponse(t,i,a);case 9:if(s=e.sent,r){e.next=13;break}return e.next=13,t._updateCurrentUser(s.user);case 13:return e.abrupt("return",s);case 14:case"end":return e.stop()}}),e)}))),pn.apply(this,arguments)}function fn(){return(fn=p(u().mark((function e(t,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",hn(wt(t),n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function dn(e){return vn.apply(this,arguments)}function vn(){return(vn=p(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=wt(t))._getPasswordPolicyInternal()){e.next=4;break}return e.next=4,n._updatePasswordPolicy();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function mn(){return(mn=p(u().mark((function e(t,n,r){var i,a,s,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I(t.app)){e.next=2;break}return e.abrupt("return",Promise.reject(Q(t)));case 2:return i=wt(t),a=Ot(i,{returnSecureToken:!0,email:n,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tn),e.next=7,a.catch((function(e){throw e.code==="auth/".concat("password-does-not-meet-requirements")&&dn(t),e}));case 7:return s=e.sent,e.next=10,rn._fromIdTokenResponse(i,"signIn",s);case 10:return o=e.sent,e.next=13,i._updateCurrentUser(o.user);case 13:return e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var yn="__sak",kn=function(){return v((function e(t,n){f(this,e),this.storageRetriever=t,this.type=n}),[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(yn,"1"),this.storage.removeItem(yn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}])}(),gn=function(e){function n(){var e;return f(this,n),(e=r(this,n,[function(){return window.localStorage},"LOCAL"])).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.fallbackToPolling=ft(),e._shouldAllowMigration=!0,e}return s(n,e),v(n,[{key:"forAllChangedKeys",value:function(e){for(var t=0,n=Object.keys(this.listeners);t<n.length;t++){var r=n[t],i=this.storage.getItem(r),a=this.localCache[r];i!==a&&e(r,a,i)}}},{key:"onStorageEvent",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.key){var r=e.key;n?this.detachListener():this.stopPolling();var i=function(){var e=t.storage.getItem(r);(n||t.localCache[r]!==e)&&t.notifyListeners(r,e)},a=this.storage.getItem(r);_()&&10===document.documentMode&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}else this.forAllChangedKeys((function(e,n,r){t.notifyListeners(e,r)}))}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e];if(n)for(var r=0,i=Array.from(n);r<i.length;r++){(0,i[r])(t?JSON.parse(t):t)}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){e.forAllChangedKeys((function(t,n,r){e.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:(o=p(u().mark((function e(r,i){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n,"_set",this,3)([r,i]);case 2:this.localCache[r]=JSON.stringify(i);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return o.apply(this,arguments)})},{key:"_get",value:(a=p(u().mark((function e(r){var i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n,"_get",this,3)([r]);case 2:return i=e.sent,this.localCache[r]=JSON.stringify(i),e.abrupt("return",i);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"_remove",value:(i=p(u().mark((function e(r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n,"_remove",this,3)([r]);case 2:delete this.localCache[r];case 3:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})}]);var i,a,o}(kn);
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */gn.type="LOCAL";var wn=n("b",gn),bn=function(e){function t(){return f(this,t),r(this,t,[function(){return window.sessionStorage},"SESSION"])}return s(t,e),v(t,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}])}(kn);
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */bn.type="SESSION";var _n=bn;
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function In(e){return Promise.all(e.map(function(){var e=p(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var xn=function(){function e(t){f(this,e),this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return v(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:(t=p(u().mark((function e(t){var n,r,i,a,s,o,c,l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=(n=t).data,i=r.eventId,a=r.eventType,s=r.data,null==(o=this.handlersMap[a])?void 0:o.size){e.next=5;break}return e.abrupt("return");case 5:return n.ports[0].postMessage({status:"ack",eventId:i,eventType:a}),c=Array.from(o).map(function(){var e=p(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(n.origin,s));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=9,In(c);case 9:l=e.sent,n.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:l});case 11:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]);var t}();
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function Tn(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */xn.receivers=[];var En=function(){return v((function e(t){f(this,e),this.target=t,this.handlers=new Set}),[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:(e=p(u().mark((function e(t,n){var r,i,a,s,o=this,c=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=c.length>2&&void 0!==c[2]?c[2]:50,i="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=4;break}throw new Error("connection_unavailable");case 4:return e.abrupt("return",new Promise((function(e,u){var c=Tn("",20);i.port1.start();var l=setTimeout((function(){u(new Error("unsupported_event"))}),r);s={messageChannel:i,onMessage:function(t){var n=t;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),a=setTimeout((function(){u(new Error("timeout"))}),3e3);break;case"done":clearTimeout(a),e(n.data.response);break;default:clearTimeout(l),clearTimeout(a),u(new Error("invalid_response"))}}},o.handlers.add(s),i.port1.addEventListener("message",s.onMessage),o.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])})).finally((function(){s&&o.removeMessageHandler(s)})));case 5:case"end":return e.stop()}}),e)}))),function(t,n){return e.apply(this,arguments)})}]);var e}();
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Sn(){return window}function Pn(e){Sn().location.href=e}
/**
             * @license
             * Copyright 2020 Google LLC.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Rn(){return void 0!==Sn().WorkerGlobalScope&&"function"==typeof Sn().importScripts}function On(){return An.apply(this,arguments)}function An(){return(An=p(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return t=e.sent,e.abrupt("return",t.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
var Cn="firebaseLocalStorageDb",Nn="firebaseLocalStorage",Ln="fbase_key",Mn=function(){return v((function e(t){f(this,e),this.request=t}),[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){e.request.addEventListener("success",(function(){t(e.request.result)})),e.request.addEventListener("error",(function(){n(e.request.error)}))}))}}])}();function Un(e,t){return e.transaction([Nn],t?"readwrite":"readonly").objectStore(Nn)}function Dn(){var e=indexedDB.deleteDatabase(Cn);return new Mn(e).toPromise()}function jn(){var e=indexedDB.open(Cn,1);return new Promise((function(t,n){e.addEventListener("error",(function(){n(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(Nn,{keyPath:Ln})}catch(r){n(r)}})),e.addEventListener("success",p(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((r=e.result).objectStoreNames.contains(Nn)){n.next=12;break}return r.close(),n.next=5,Dn();case 5:return n.t0=t,n.next=8,jn();case 8:n.t1=n.sent,(0,n.t0)(n.t1),n.next=13;break;case 12:t(r);case 13:case"end":return n.stop()}}),n)}))))}))}function Fn(e,t,n){return Vn.apply(this,arguments)}function Vn(){return(Vn=p(u().mark((function e(t,n,r){var i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Un(t,!0).put(g(g({},Ln,n),"value",r)),e.abrupt("return",new Mn(i).toPromise());case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Hn(e,t){return Wn.apply(this,arguments)}function Wn(){return(Wn=p(u().mark((function e(t,n){var r,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Un(t,!1).get(n),e.next=3,new Mn(r).toPromise();case 3:return i=e.sent,e.abrupt("return",void 0===i?null:i.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Kn(e,t){var n=Un(e,!0).delete(t);return new Mn(n).toPromise()}var Gn=function(){return v((function e(){f(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}),[{key:"_openDb",value:(m=p(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.db){e.next=2;break}return e.abrupt("return",this.db);case 2:return e.next=4,jn();case 4:return this.db=e.sent,e.abrupt("return",this.db);case 6:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)})},{key:"_withRetries",value:(d=p(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:return e.prev=2,e.next=5,this._openDb();case 5:return r=e.sent,e.next=8,t(r);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(n++>3)){e.next=15;break}throw e.t0;case 15:this.db&&(this.db.close(),this.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),e,this,[[2,11]])}))),function(e){return d.apply(this,arguments)})},{key:"initializeServiceWorkerMessaging",value:(h=p(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Rn()?this.initializeReceiver():this.initializeSender());case 1:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)})},{key:"initializeReceiver",value:(c=p(u().mark((function e(){var t=this;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.receiver=xn._getInstance(Rn()?self:null),this.receiver._subscribe("keyChanged",function(){var e=p(u().mark((function e(n,r){var i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return i=e.sent,e.abrupt("return",{keyProcessed:i.includes(r.key)});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),this.receiver._subscribe("ping",function(){var e=p(u().mark((function e(t,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"initializeSender",value:(o=p(u().mark((function e(){var t,n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,On();case 2:if(this.activeServiceWorker=e.sent,this.activeServiceWorker){e.next=5;break}return e.abrupt("return");case 5:return this.sender=new En(this.activeServiceWorker),e.next=8,this.sender._send("ping",{},800);case 8:if(r=e.sent){e.next=11;break}return e.abrupt("return");case 11:(null===(t=r[0])||void 0===t?void 0:t.fulfilled)&&(null===(n=r[0])||void 0===n?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0);case 12:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"notifyServiceWorker",value:(s=p(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.sender&&this.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===this.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var n}),e,this,[[2,7]])}))),function(e){return s.apply(this,arguments)})},{key:"_isAvailable",value:(a=p(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,jn();case 5:return t=e.sent,e.next=8,Fn(t,yn,"1");case 8:return e.next=10,Kn(t,yn);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),function(){return a.apply(this,arguments)})},{key:"_withPendingWrite",value:(i=p(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,this.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),e,this,[[1,,4,7]])}))),function(e){return i.apply(this,arguments)})},{key:"_set",value:(r=p(u().mark((function e(t,n){var r=this;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._withPendingWrite(p(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Fn(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e,this)}))),function(e,t){return r.apply(this,arguments)})},{key:"_get",value:(n=p(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._withRetries((function(e){return Hn(e,t)}));case 2:return n=e.sent,this.localCache[t]=n,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"_remove",value:(t=p(u().mark((function e(t){var n=this;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._withPendingWrite(p(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Kn(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_poll",value:(e=p(u().mark((function e(){var t,n,r,i,a,s,o,c,h,p,f;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._withRetries((function(e){var t=Un(e,!1).getAll();return new Mn(t).toPromise()}));case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===this.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:if(n=[],r=new Set,0!==t.length){i=l(t);try{for(i.s();!(a=i.n()).done;)s=a.value,o=s.fbase_key,c=s.value,r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o))}catch(u){i.e(u)}finally{i.f()}}for(h=0,p=Object.keys(this.localCache);h<p.length;h++)f=p[h],this.localCache[f]&&!r.has(f)&&(this.notifyListeners(f,null),n.push(f));return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)}))),function(){return e.apply(this,arguments)})},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e];if(n)for(var r=0,i=Array.from(n);r<i.length;r++){(0,i[r])(t)}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval(p(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),t)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]);var e,t,n,r,i,a,s,o,c,h,d,m}();Gn.type="LOCAL";var zn=Gn;
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function qn(e,t){return t?Ze(t):(Z(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */new ae(3e4,6e4);var Bn=function(e){function t(e){var n;return f(this,t),(n=r(this,t,["custom","custom"])).params=e,n}return s(t,e),v(t,[{key:"_getIdTokenResponse",value:function(e){return Gt(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Gt(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Gt(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}])}(Lt);function Jn(e){return hn(e.auth,new Bn(e),e.bypassAuthState)}function Yn(e){var t=e.auth,n=e.user;return Z(n,t,"internal-error"),function(e,t){return ln.apply(this,arguments)}(n,new Bn(e),e.bypassAuthState)}function Xn(e){return Qn.apply(this,arguments)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Qn(){return(Qn=p(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.auth,Z(r=t.user,n,"internal-error"),e.abrupt("return",un(r,new Bn(t),t.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $n=function(){return v((function e(t,n,r,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];f(this,e),this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}),[{key:"execute",value:function(){var e=this;return new Promise(function(){var t=p(u().mark((function t(n,r){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.pendingPromise={resolve:n,reject:r},t.prev=1,t.next=4,e.resolver._initialize(e.auth);case 4:return e.eventManager=t.sent,t.next=7,e.onExecution();case 7:e.eventManager.registerConsumer(e),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.reject(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}())}},{key:"onAuthEvent",value:(e=p(u().mark((function e(t){var n,r,i,a,s,o,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.urlResponse,r=t.sessionId,i=t.postBody,a=t.tenantId,s=t.error,o=t.type,!s){e.next=4;break}return this.reject(s),e.abrupt("return");case 4:return c={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState},e.prev=5,e.t0=this,e.next=9,this.getIdpTask(o)(c);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),this.reject(e.t2);case 16:case"end":return e.stop()}}),e,this,[[5,13]])}))),function(t){return e.apply(this,arguments)})},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jn;case"linkViaPopup":case"linkViaRedirect":return Xn;case"reauthViaPopup":case"reauthViaRedirect":return Yn;default:J(this.auth,"internal-error")}}},{key:"resolve",value:function(e){te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]);var e}(),Zn=new ae(2e3,1e4),er=function(e){function t(e,n,i,a,s){var o;return f(this,t),(o=r(this,t,[e,n,a,s])).provider=i,o.authWindow=null,o.pollId=null,t.currentPopupAction&&t.currentPopupAction.cancel(),t.currentPopupAction=o,o}return s(t,e),v(t,[{key:"executeNotNull",value:(i=p(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.execute();case 2:return Z(t=e.sent,this.auth,"internal-error"),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"onExecution",value:(n=p(u().mark((function e(){var t,n=this;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return te(1===this.filter.length,"Popup operations only handle one event"),t=Tn(),e.next=4,this.resolver._openPopup(this.auth,this.provider,this.filter[0],t);case 4:this.authWindow=e.sent,this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((function(e){n.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(function(e){e||n.reject(Y(n.auth,"web-storage-unsupported"))})),this.pollUserCancellation();case 9:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Y(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,t.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed)?e.pollId=window.setTimeout((function(){e.pollId=null,e.reject(Y(e.auth,"popup-closed-by-user"))}),8e3):e.pollId=window.setTimeout(t,Zn.get())};t()}}]);var n,i}($n);
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */er.currentPopupAction=null;
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
var tr=new Map,nr=function(e){function n(e,t){var i,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return f(this,n),(i=r(this,n,[e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,a])).eventId=null,i}return s(n,e),v(n,[{key:"execute",value:(o=p(u().mark((function e(){var r,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=tr.get(this.auth._key())){e.next=21;break}return e.prev=2,e.next=5,rr(this.resolver,this.auth);case 5:if(!e.sent){e.next=12;break}return e.next=9,t(n,"execute",this,3)([]);case 9:e.t0=e.sent,e.next=13;break;case 12:e.t0=null;case 13:i=e.t0,r=function(){return Promise.resolve(i)},e.next=20;break;case 17:e.prev=17,e.t1=e.catch(2),r=function(){return Promise.reject(e.t1)};case 20:tr.set(this.auth._key(),r);case 21:return this.bypassAuthState||tr.set(this.auth._key(),(function(){return Promise.resolve(null)})),e.abrupt("return",r());case 23:case"end":return e.stop()}}),e,this,[[2,17]])}))),function(){return o.apply(this,arguments)})},{key:"onAuthEvent",value:(a=p(u().mark((function e(r){var i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==r.type){e.next=4;break}return e.abrupt("return",t(n,"onAuthEvent",this,3)([r]));case 4:if("unknown"!==r.type){e.next=7;break}return this.resolve(null),e.abrupt("return");case 7:if(!r.eventId){e.next=17;break}return e.next=10,this.auth._redirectUserForId(r.eventId);case 10:if(!(i=e.sent)){e.next=16;break}return this.user=i,e.abrupt("return",t(n,"onAuthEvent",this,3)([r]));case 16:this.resolve(null);case 17:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"onExecution",value:(i=p(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(){return i.apply(this,arguments)})},{key:"cleanUp",value:function(){}}]);var i,a,o}($n);function rr(e,t){return ir.apply(this,arguments)}function ir(){return(ir=p(u().mark((function e(t,n){var r,i,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=or(n),i=sr(t),e.next=4,i._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,i._get(r);case 8:return e.t0=e.sent,a="true"===e.t0,e.next=12,i._remove(r);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ar(e,t){tr.set(e._key(),t)}function sr(e){return Ze(e._redirectPersistence)}function or(e){return nt("pendingRedirect",e.config.apiKey,e.name)}function ur(e,t){return cr.apply(this,arguments)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function cr(){return cr=p(u().mark((function e(t,n){var r,i,a,s,o,c=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=c.length>2&&void 0!==c[2]&&c[2],!I(t.app)){e.next=3;break}return e.abrupt("return",Promise.reject(Q(t)));case 3:return i=wt(t),a=qn(i,n),s=new nr(i,a,r),e.next=8,s.execute();case 8:if(!(o=e.sent)||r){e.next=15;break}return delete o.user._redirectEventId,e.next=13,i._persistUserIfCurrent(o.user);case 13:return e.next=15,i._setRedirectUser(null,n);case 15:return e.abrupt("return",o);case 16:case"end":return e.stop()}}),e)}))),cr.apply(this,arguments)}var lr=function(){return v((function e(t){f(this,e),this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}),[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pr(e);default:return!1}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!pr(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Y(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(hr(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(hr(e)),this.lastProcessedEventTime=Date.now()}}])}();function hr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function pr(e){var t=e.type,n=e.error;return"unknown"===t&&(null==n?void 0:n.code)==="auth/".concat("no-auth-event")}function fr(e){return dr.apply(this,arguments)}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function dr(){return dr=p(u().mark((function e(t){var n,r=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.abrupt("return",pe(t,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),e)}))),dr.apply(this,arguments)}var vr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mr=/^https?/;function yr(){return(yr=p(u().mark((function e(t){var n,r,i,a,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fr(t);case 4:n=e.sent,r=n.authorizedDomains,i=l(r),e.prev=7,i.s();case 9:if((a=i.n()).done){e.next=20;break}if(s=a.value,e.prev=11,!kr(s)){e.next=14;break}return e.abrupt("return");case 14:e.next=18;break;case 16:e.prev=16,e.t0=e.catch(11);case 18:e.next=9;break;case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(7),i.e(e.t1);case 25:return e.prev=25,i.f(),e.finish(25);case 28:J(t,"unauthorized-domain");case 29:case"end":return e.stop()}}),e,null,[[7,22,25,28],[11,16]])})))).apply(this,arguments)}function kr(e){var t=ne(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!mr.test(r))return!1;if(vr.test(e))return i===e;var s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
             * @license
             * Copyright 2020 Google LLC.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var gr=new ae(3e4,6e4);function wr(){var e=Sn().___jsl;if(null==e?void 0:e.H)for(var t=0,n=Object.keys(e.H);t<n.length;t++){var r=n[t];if(e.H[r].r=e.H[r].r||[],e.H[r].L=e.H[r].L||[],e.H[r].r=m(e.H[r].L),e.CP)for(var i=0;i<e.CP.length;i++)e.CP[i]=null}}function br(e){return new Promise((function(t,n){var r,i,a;function s(){wr(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){wr(),n(Y(e,"network-request-failed"))},timeout:gr.get()})}if(null===(i=null===(r=Sn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Sn().gapi)||void 0===a?void 0:a.load)){var o="__".concat("iframefcb").concat(Math.floor(1e6*Math.random()));return Sn()[o]=function(){gapi.load?s():n(Y(e,"network-request-failed"))},It("".concat(_t.gapiScript,"?onload=").concat(o)).catch((function(e){return n(e)}))}s()}})).catch((function(e){throw _r=null,e}))}var _r=null;function Ir(e){return _r=_r||br(e)}
/**
             * @license
             * Copyright 2020 Google LLC.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var xr=new ae(5e3,15e3),Tr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Er=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sr(e){var t=e.config;Z(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?se(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:T},i=Er.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(E(r).slice(1))}function Pr(e){return Rr.apply(this,arguments)}
/**
             * @license
             * Copyright 2020 Google LLC.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Rr(){return Rr=p(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ir(t);case 2:return n=e.sent,Z(r=Sn().gapi,t,"internal-error"),e.abrupt("return",n.open({where:document.body,url:Sr(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tr,dontclear:!0},(function(e){return new Promise(function(){var n=p(u().mark((function n(r,i){var a,s,o;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=function(){Sn().clearTimeout(s),r(e)},n.next=3,e.restyle({setHideOnLeave:!1});case 3:a=Y(t,"network-request-failed"),s=Sn().setTimeout((function(){i(a)}),xr.get()),e.ping(o).then(o,(function(){i(a)}));case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())})));case 6:case"end":return e.stop()}}),e)}))),Rr.apply(this,arguments)}var Or={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ar=function(){return v((function e(t){f(this,e),this.window=t,this.associatedEvent=null}),[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}])}();function Cr(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString(),o="",u=Object.assign(Object.assign({},Or),{width:r.toString(),height:i.toString(),top:a,left:s}),l=w().toLowerCase();n&&(o=ot(l)?"_blank":n),at(l)&&(t=t||"http://localhost",u.scrollbars="yes");var h=Object.entries(u).reduce((function(e,t){var n=c(t,2),r=n[0],i=n[1];return"".concat(e).concat(r,"=").concat(i,",")}),"");if(function(){var e;return pt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:w())&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(l)&&"_self"!==o)return function(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(t||"",o),new Ar(null);var p=window.open(t||"",o,h);Z(p,e,"popup-blocked");try{p.focus()}catch(f){}return new Ar(p)}var Nr=encodeURIComponent("fac");function Lr(e,t,n,r,i,a){return Mr.apply(this,arguments)}function Mr(){return(Mr=p(u().mark((function e(t,n,r,i,a,s){var o,l,h,p,f,d,v,m,y,k,g,w,b;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key"),o={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:i,v:T,eventId:a},n instanceof Yt)for(n.setDefaultLanguage(t.languageCode),o.providerId=n.providerId||"",x(n.getCustomParameters())||(o.customParameters=JSON.stringify(n.getCustomParameters())),l=0,h=Object.entries({});l<h.length;l++)p=c(h[l],2),f=p[0],d=p[1],o[f]=d;for(n instanceof Xt&&(v=n.getScopes().filter((function(e){return""!==e}))).length>0&&(o.scopes=v.join(",")),t.tenantId&&(o.tid=t.tenantId),m=o,y=0,k=Object.keys(m);y<k.length;y++)g=k[y],void 0===m[g]&&delete m[g];return e.next=10,t._getAppCheckToken();case 10:return w=e.sent,b=w?"#".concat(Nr,"=").concat(encodeURIComponent(w)):"",e.abrupt("return","".concat(Ur(t),"?").concat(E(m).slice(1)).concat(b));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ur(e){var t=e.config;return t.emulator?se(t,"emulator/auth/handler"):"https://".concat(t.authDomain,"/").concat("__/auth/handler")}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var Dr="webStorageSupport",jr=function(){return v((function e(){f(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_n,this._completeRedirectFn=ur,this._overrideRedirectResult=ar}),[{key:"_openPopup",value:(n=p(u().mark((function e(t,n,r,i){var a,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return te(null===(a=this.eventManagers[t._key()])||void 0===a?void 0:a.manager,"_initialize() not called before _openPopup()"),e.next=3,Lr(t,n,r,ne(),i);case 3:return s=e.sent,e.abrupt("return",Cr(t,s,Tn()));case 5:case"end":return e.stop()}}),e,this)}))),function(e,t,r,i){return n.apply(this,arguments)})},{key:"_openRedirect",value:(t=p(u().mark((function e(t,n,r,i){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._originValidation(t);case 2:return e.next=4,Lr(t,n,r,ne(),i);case 4:return Pn(e.sent),e.abrupt("return",new Promise((function(){})));case 7:case"end":return e.stop()}}),e,this)}))),function(e,n,r,i){return t.apply(this,arguments)})},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(te(a,"If manager is not set, promise should be"),a)}var s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch((function(){delete t.eventManagers[n]})),s}},{key:"initAndGetManager",value:(e=p(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pr(t);case 2:return n=e.sent,r=new lr(t),n.register("authEvent",(function(e){return Z(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:r.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e,this)}))),function(t){return e.apply(this,arguments)})},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Dr,{type:Dr},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[Dr];void 0!==i&&t(!!i),J(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return yr.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return ft()||st()||pt()}}]);var e,t,n}(),Fr=jr,Vr="@firebase/auth",Hr="1.10.0",Wr=function(){return v((function e(t){f(this,e),this.auth=t,this.internalListeners=new Map}),[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:(e=p(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.assertAuthConfigured(),e.next=3,this.auth._initializationPromise;case 3:if(this.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,this.auth.currentUser.getIdToken(t);case 7:return n=e.sent,e.abrupt("return",{accessToken:n});case 9:case"end":return e.stop()}}),e,this)}))),function(t){return e.apply(this,arguments)})},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]);var e}();
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
var Kr,Gr=h("authIdTokenMaxAge")||300,zr=null,qr=function(e){return function(){var t=p(u().mark((function t(n){var r,i,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=n,!t.t0){t.next=5;break}return t.next=4,n.getIdTokenResult();case 4:t.t0=t.sent;case 5:if(r=t.t0,!((i=r&&((new Date).getTime()-Date.parse(r.issuedAtTime))/1e3)&&i>Gr)){t.next=9;break}return t.abrupt("return");case 9:if(a=null==r?void 0:r.token,zr!==a){t.next=12;break}return t.abrupt("return");case 12:return zr=a,t.next=15,fetch(e,{method:a?"POST":"DELETE",headers:a?{Authorization:"Bearer ".concat(a)}:{}});case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};_t={loadJS:function(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=Y("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},Kr="Browser",D(new j("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),s=r.options,o=s.apiKey,u=s.authDomain;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});var c={apiKey:o,authDomain:u,clientPlatform:Kr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dt(Kr)},l=new gt(r,i,a,c);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ze);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),D(new j("auth-internal",(function(e){return function(e){return new Wr(e)}(wt(e.getProvider("auth").getImmediate()))}),"PRIVATE").setInstantiationMode("EXPLICIT")),F(Vr,Hr,
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Kr)),F(Vr,Hr,"esm2017")}}}))}();
