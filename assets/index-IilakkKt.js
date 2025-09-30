import{R as gu}from"./index-BTDcEEki.js";/**
 * @license
 * Copyright 2025 Google LLC
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
 */const Jm=()=>{};var yu={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Nd={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const O=function(n,e){if(!n)throw is(e)},is=function(n){return new Error("Firebase Database ("+Nd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const kd=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Zm=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],l=n[t++],c=((r&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Wa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,l=a?n[r+1]:0,c=r+2<n.length,h=c?n[r+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,A=h&63;c||(A=64,a||(m=64)),s.push(t[f],t[p],t[m],t[A])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(kd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Zm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||l==null||h==null||p==null)throw new eg;const m=i<<2|l>>4;if(s.push(m),h!==64){const A=l<<4&240|h>>2;if(s.push(A),p!==64){const S=h<<6&192|p;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class eg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dd=function(n){const e=kd(n);return Wa.encodeByteArray(e,!0)},hi=function(n){return Dd(n).replace(/\./g,"")},aa=function(n){try{return Wa.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
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
 */function tg(n){return Vd(void 0,n)}function Vd(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ng(t)||(n[t]=Vd(n[t],e[t]));return n}function ng(n){return n!=="__proto__"}/**
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
 */function sg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rg=()=>sg().__FIREBASE_DEFAULTS__,ig=()=>{if(typeof process>"u"||typeof yu>"u")return;const n=yu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},og=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=n&&aa(n[1]);return e&&JSON.parse(e)},Ui=()=>{try{return Jm()||rg()||ig()||og()}catch(n){console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(n));return}},ag=n=>{var e,t;return(t=(e=Ui())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ha=n=>{const e=ag(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error("Invalid host ".concat(e," with no separate hostname and port!"));const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Od=()=>{var n;return(n=Ui())===null||n===void 0?void 0:n.config},tS=n=>{var e;return(e=Ui())===null||e===void 0?void 0:e["_".concat(n)]};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ga{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Ka(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:"https://securetoken.google.com/".concat(s),aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[hi(JSON.stringify(t)),hi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Qa(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qa())}function lg(){var n;const e=(n=Ui())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function nS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function cg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rS(){const n=Qa();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ug(){return Nd.NODE_ADMIN===!0}function hg(){return!lg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dg(){try{return typeof indexedDB=="object"}catch(n){return!1}}function fg(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const pg="FirebaseError";class tn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=pg,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ld.prototype.create)}}class Ld{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r="".concat(this.service,"/").concat(e),i=this.errors[e],a=i?_g(i,s):"Error",l="".concat(this.serviceName,": ").concat(a," (").concat(r,").");return new tn(r,l,s)}}function _g(n,e){return n.replace(mg,(t,s)=>{const r=e[s];return r!=null?String(r):"<".concat(s,"?>")})}const mg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ys(n){return JSON.parse(n)}function Se(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Md=function(n){let e={},t={},s={},r="";try{const i=n.split(".");e=Ys(aa(i[0])||""),t=Ys(aa(i[1])||""),r=i[2],s=t.d||{},delete t.d}catch(i){}return{header:e,claims:t,data:s,signature:r}},gg=function(n){const e=Md(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},yg=function(n){const e=Md(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Dt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Qn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Eu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function di(n,e,t){const s={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=e.call(t,n[r],r,n));return s}function Xs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(Tu(i)&&Tu(a)){if(!Xs(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Tu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Eg(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function iS(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function oS(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Tg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)s[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const m=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(m<<1|m>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4],h,f;for(let p=0;p<80;p++){p<40?p<20?(h=l^i&(a^l),f=1518500249):(h=i^a^l,f=1859775393):p<60?(h=i&a|l&(i|a),f=2400959708):(h=i^a^l,f=3395469782);const m=(r<<5|r>>>27)+h+c+f+s[p]&4294967295;c=l,l=a,a=(i<<30|i>>>2)&4294967295,i=r,r=m}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let r=0;const i=this.buf_;let a=this.inbuf_;for(;r<t;){if(a===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[a]=e.charCodeAt(r),++a,++r,a===this.blockSize){this.compress_(i),a=0;break}}else for(;r<t;)if(i[a]=e[r],++a,++r,a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function aS(n,e){const t=new vg(n,e);return t.subscribe.bind(t)}class vg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");wg(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=zo),r.error===void 0&&(r.error=zo),r.complete===void 0&&(r.complete=zo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(a){}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function zo(){}function Ig(n,e){return"".concat(n," failed: ").concat(e," argument ")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ag=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,O(s<n.length,"Surrogate pair missing trail surrogate.");const a=n.charCodeAt(s)-56320;r=65536+(i<<10)+a}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Bi=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Ee(n){return n&&n._delegate?n._delegate:n}class Gt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cn="[DEFAULT]";/**
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
 */class Rg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Ga;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch(r){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error("Service ".concat(this.name," is not available"))}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,!!this.shouldAutoInitialize()){if(Sg(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch(t){}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch(i){}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error("".concat(this.name,"(").concat(s,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&a.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cg(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch(r){}return s||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cg(n){return n===cn?void 0:n}function Sg(n){return n.instantiationMode==="EAGER"}/**
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
 */class bg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Rg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const Pg={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Ng=W.INFO,kg={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Dg=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=kg[e];if(r)console[r]("[".concat(s,"]  ").concat(n.name,":"),...t);else throw new Error("Attempted to log a message with an invalid logType (value: ".concat(e,")"))};class qi{constructor(e){this.name=e,this._logLevel=Ng,this._logHandler=Dg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const Vg=(n,e)=>e.some(t=>n instanceof t);let vu,wu;function Og(){return vu||(vu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xg(){return wu||(wu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fd=new WeakMap,la=new WeakMap,Ud=new WeakMap,jo=new WeakMap,Ya=new WeakMap;function Lg(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t($t(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Fd.set(t,n)}).catch(()=>{}),Ya.set(e,n),e}function Mg(n){if(la.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});la.set(n,e)}let ca={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return la.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ud.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Fg(n){ca=n(ca)}function Ug(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Wo(this),e,...t);return Ud.set(s,e.sort?e.sort():[e]),$t(s)}:xg().includes(n)?function(...e){return n.apply(Wo(this),e),$t(Fd.get(this))}:function(...e){return $t(n.apply(Wo(this),e))}}function Bg(n){return typeof n=="function"?Ug(n):(n instanceof IDBTransaction&&Mg(n),Vg(n,Og())?new Proxy(n,ca):n)}function $t(n){if(n instanceof IDBRequest)return Lg(n);if(jo.has(n))return jo.get(n);const e=Bg(n);return e!==n&&(jo.set(n,e),Ya.set(e,n)),e}const Wo=n=>Ya.get(n);function qg(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),l=$t(a);return s&&a.addEventListener("upgradeneeded",c=>{s($t(a.result),c.oldVersion,c.newVersion,$t(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const $g=["get","getKey","getAll","getAllKeys","count"],zg=["put","add","delete","clear"],Ho=new Map;function Iu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ho.get(e))return Ho.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=zg.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||$g.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,r?"readwrite":"readonly");let h=c.store;return s&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),r&&c.done]))[0]};return Ho.set(e,i),i}Fg(n=>({...n,get:(e,t,s)=>Iu(e,t)||n.get(e,t,s),has:(e,t)=>!!Iu(e,t)||n.has(e,t)}));/**
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
 */class jg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Wg(t)){const s=t.getImmediate();return"".concat(s.library,"/").concat(s.version)}else return null}).filter(t=>t).join(" ")}}function Wg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ua="@firebase/app",Au="0.11.4";/**
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
 */const Ct=new qi("@firebase/app"),Hg="@firebase/app-compat",Gg="@firebase/analytics-compat",Kg="@firebase/analytics",Qg="@firebase/app-check-compat",Yg="@firebase/app-check",Xg="@firebase/auth",Jg="@firebase/auth-compat",Zg="@firebase/database",ey="@firebase/data-connect",ty="@firebase/database-compat",ny="@firebase/functions",sy="@firebase/functions-compat",ry="@firebase/installations",iy="@firebase/installations-compat",oy="@firebase/messaging",ay="@firebase/messaging-compat",ly="@firebase/performance",cy="@firebase/performance-compat",uy="@firebase/remote-config",hy="@firebase/remote-config-compat",dy="@firebase/storage",fy="@firebase/storage-compat",py="@firebase/firestore",_y="@firebase/vertexai",my="@firebase/firestore-compat",gy="firebase",yy="11.6.0";/**
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
 */const ha="[DEFAULT]",Ey={[ua]:"fire-core",[Hg]:"fire-core-compat",[Kg]:"fire-analytics",[Gg]:"fire-analytics-compat",[Yg]:"fire-app-check",[Qg]:"fire-app-check-compat",[Xg]:"fire-auth",[Jg]:"fire-auth-compat",[Zg]:"fire-rtdb",[ey]:"fire-data-connect",[ty]:"fire-rtdb-compat",[ny]:"fire-fn",[sy]:"fire-fn-compat",[ry]:"fire-iid",[iy]:"fire-iid-compat",[oy]:"fire-fcm",[ay]:"fire-fcm-compat",[ly]:"fire-perf",[cy]:"fire-perf-compat",[uy]:"fire-rc",[hy]:"fire-rc-compat",[dy]:"fire-gcs",[fy]:"fire-gcs-compat",[py]:"fire-fst",[my]:"fire-fst-compat",[_y]:"fire-vertex","fire-js":"fire-js",[gy]:"fire-js-all"};/**
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
 */const fi=new Map,Ty=new Map,da=new Map;function Ru(n,e){try{n.container.addComponent(e)}catch(t){Ct.debug("Component ".concat(e.name," failed to register with FirebaseApp ").concat(n.name),t)}}function mn(n){const e=n.name;if(da.has(e))return Ct.debug("There were multiple attempts to register component ".concat(e,".")),!1;da.set(e,n);for(const t of fi.values())Ru(t,n);for(const t of Ty.values())Ru(t,n);return!0}function Xa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $i(n){return n==null?!1:n.settings!==void 0}/**
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
 */const vy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new Ld("app","Firebase",vy);/**
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
 */class wy{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
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
 */const zi=yy;function Bd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ha,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw zt.create("bad-app-name",{appName:String(r)});if(t||(t=Od()),!t)throw zt.create("no-options");const i=fi.get(r);if(i){if(Xs(t,i.options)&&Xs(s,i.config))return i;throw zt.create("duplicate-app",{appName:r})}const a=new bg(r);for(const c of da.values())a.addComponent(c);const l=new wy(t,s,a);return fi.set(r,l),l}function Ja(n=ha){const e=fi.get(n);if(!e&&n===ha&&Od())return Bd();if(!e)throw zt.create("no-app",{appName:n});return e}function rt(n,e,t){var s;let r=(s=Ey[n])!==null&&s!==void 0?s:n;t&&(r+="-".concat(t));const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=['Unable to register library "'.concat(r,'" with version "').concat(e,'":')];i&&l.push('library name "'.concat(r,'" contains illegal characters (whitespace or "/")')),i&&a&&l.push("and"),a&&l.push('version name "'.concat(e,'" contains illegal characters (whitespace or "/")')),Ct.warn(l.join(" "));return}mn(new Gt("".concat(r,"-version"),()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Iy="firebase-heartbeat-database",Ay=1,Js="firebase-heartbeat-store";let Go=null;function qd(){return Go||(Go=qg(Iy,Ay,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Js)}catch(t){console.warn(t)}}}}).catch(n=>{throw zt.create("idb-open",{originalErrorMessage:n.message})})),Go}async function Ry(n){try{const t=(await qd()).transaction(Js),s=await t.objectStore(Js).get($d(n));return await t.done,s}catch(e){if(e instanceof tn)Ct.warn(e.message);else{const t=zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ct.warn(t.message)}}}async function Cu(n,e){try{const s=(await qd()).transaction(Js,"readwrite");await s.objectStore(Js).put(e,$d(n)),await s.done}catch(t){if(t instanceof tn)Ct.warn(t.message);else{const s=zt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ct.warn(s.message)}}}function $d(n){return"".concat(n.name,"!").concat(n.options.appId)}/**
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
 */const Cy=1024,Sy=30;class by{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ny(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Su();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Sy){const a=ky(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ct.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Su(),{heartbeatsToSend:s,unsentEntries:r}=Py(this._heartbeatsCache.heartbeats),i=hi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ct.warn(t),""}}}function Su(){return new Date().toISOString().substring(0,10)}function Py(n,e=Cy){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),bu(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),bu(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Ny{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dg()?fg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ry(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Cu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Cu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function bu(n){return hi(JSON.stringify({version:2,heartbeats:n})).length}function ky(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Dy(n){mn(new Gt("platform-logger",e=>new jg(e),"PRIVATE")),mn(new Gt("heartbeat",e=>new by(e),"PRIVATE")),rt(ua,Au,n),rt(ua,Au,"esm2017"),rt("fire-js","")}Dy("");var Pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var It,zd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function E(){}E.prototype=g.prototype,v.D=g.prototype,v.prototype=new E,v.prototype.constructor=v,v.C=function(T,w,R){for(var y=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)y[gt-2]=arguments[gt];return g.prototype[w].apply(T,y)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(v,g,E){E||(E=0);var T=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)T[w]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(w=0;16>w;++w)T[w]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=v.g[0],E=v.g[1],w=v.g[2];var R=v.g[3],y=g+(R^E&(w^R))+T[0]+3614090360&4294967295;g=E+(y<<7&4294967295|y>>>25),y=R+(w^g&(E^w))+T[1]+3905402710&4294967295,R=g+(y<<12&4294967295|y>>>20),y=w+(E^R&(g^E))+T[2]+606105819&4294967295,w=R+(y<<17&4294967295|y>>>15),y=E+(g^w&(R^g))+T[3]+3250441966&4294967295,E=w+(y<<22&4294967295|y>>>10),y=g+(R^E&(w^R))+T[4]+4118548399&4294967295,g=E+(y<<7&4294967295|y>>>25),y=R+(w^g&(E^w))+T[5]+1200080426&4294967295,R=g+(y<<12&4294967295|y>>>20),y=w+(E^R&(g^E))+T[6]+2821735955&4294967295,w=R+(y<<17&4294967295|y>>>15),y=E+(g^w&(R^g))+T[7]+4249261313&4294967295,E=w+(y<<22&4294967295|y>>>10),y=g+(R^E&(w^R))+T[8]+1770035416&4294967295,g=E+(y<<7&4294967295|y>>>25),y=R+(w^g&(E^w))+T[9]+2336552879&4294967295,R=g+(y<<12&4294967295|y>>>20),y=w+(E^R&(g^E))+T[10]+4294925233&4294967295,w=R+(y<<17&4294967295|y>>>15),y=E+(g^w&(R^g))+T[11]+2304563134&4294967295,E=w+(y<<22&4294967295|y>>>10),y=g+(R^E&(w^R))+T[12]+1804603682&4294967295,g=E+(y<<7&4294967295|y>>>25),y=R+(w^g&(E^w))+T[13]+4254626195&4294967295,R=g+(y<<12&4294967295|y>>>20),y=w+(E^R&(g^E))+T[14]+2792965006&4294967295,w=R+(y<<17&4294967295|y>>>15),y=E+(g^w&(R^g))+T[15]+1236535329&4294967295,E=w+(y<<22&4294967295|y>>>10),y=g+(w^R&(E^w))+T[1]+4129170786&4294967295,g=E+(y<<5&4294967295|y>>>27),y=R+(E^w&(g^E))+T[6]+3225465664&4294967295,R=g+(y<<9&4294967295|y>>>23),y=w+(g^E&(R^g))+T[11]+643717713&4294967295,w=R+(y<<14&4294967295|y>>>18),y=E+(R^g&(w^R))+T[0]+3921069994&4294967295,E=w+(y<<20&4294967295|y>>>12),y=g+(w^R&(E^w))+T[5]+3593408605&4294967295,g=E+(y<<5&4294967295|y>>>27),y=R+(E^w&(g^E))+T[10]+38016083&4294967295,R=g+(y<<9&4294967295|y>>>23),y=w+(g^E&(R^g))+T[15]+3634488961&4294967295,w=R+(y<<14&4294967295|y>>>18),y=E+(R^g&(w^R))+T[4]+3889429448&4294967295,E=w+(y<<20&4294967295|y>>>12),y=g+(w^R&(E^w))+T[9]+568446438&4294967295,g=E+(y<<5&4294967295|y>>>27),y=R+(E^w&(g^E))+T[14]+3275163606&4294967295,R=g+(y<<9&4294967295|y>>>23),y=w+(g^E&(R^g))+T[3]+4107603335&4294967295,w=R+(y<<14&4294967295|y>>>18),y=E+(R^g&(w^R))+T[8]+1163531501&4294967295,E=w+(y<<20&4294967295|y>>>12),y=g+(w^R&(E^w))+T[13]+2850285829&4294967295,g=E+(y<<5&4294967295|y>>>27),y=R+(E^w&(g^E))+T[2]+4243563512&4294967295,R=g+(y<<9&4294967295|y>>>23),y=w+(g^E&(R^g))+T[7]+1735328473&4294967295,w=R+(y<<14&4294967295|y>>>18),y=E+(R^g&(w^R))+T[12]+2368359562&4294967295,E=w+(y<<20&4294967295|y>>>12),y=g+(E^w^R)+T[5]+4294588738&4294967295,g=E+(y<<4&4294967295|y>>>28),y=R+(g^E^w)+T[8]+2272392833&4294967295,R=g+(y<<11&4294967295|y>>>21),y=w+(R^g^E)+T[11]+1839030562&4294967295,w=R+(y<<16&4294967295|y>>>16),y=E+(w^R^g)+T[14]+4259657740&4294967295,E=w+(y<<23&4294967295|y>>>9),y=g+(E^w^R)+T[1]+2763975236&4294967295,g=E+(y<<4&4294967295|y>>>28),y=R+(g^E^w)+T[4]+1272893353&4294967295,R=g+(y<<11&4294967295|y>>>21),y=w+(R^g^E)+T[7]+4139469664&4294967295,w=R+(y<<16&4294967295|y>>>16),y=E+(w^R^g)+T[10]+3200236656&4294967295,E=w+(y<<23&4294967295|y>>>9),y=g+(E^w^R)+T[13]+681279174&4294967295,g=E+(y<<4&4294967295|y>>>28),y=R+(g^E^w)+T[0]+3936430074&4294967295,R=g+(y<<11&4294967295|y>>>21),y=w+(R^g^E)+T[3]+3572445317&4294967295,w=R+(y<<16&4294967295|y>>>16),y=E+(w^R^g)+T[6]+76029189&4294967295,E=w+(y<<23&4294967295|y>>>9),y=g+(E^w^R)+T[9]+3654602809&4294967295,g=E+(y<<4&4294967295|y>>>28),y=R+(g^E^w)+T[12]+3873151461&4294967295,R=g+(y<<11&4294967295|y>>>21),y=w+(R^g^E)+T[15]+530742520&4294967295,w=R+(y<<16&4294967295|y>>>16),y=E+(w^R^g)+T[2]+3299628645&4294967295,E=w+(y<<23&4294967295|y>>>9),y=g+(w^(E|~R))+T[0]+4096336452&4294967295,g=E+(y<<6&4294967295|y>>>26),y=R+(E^(g|~w))+T[7]+1126891415&4294967295,R=g+(y<<10&4294967295|y>>>22),y=w+(g^(R|~E))+T[14]+2878612391&4294967295,w=R+(y<<15&4294967295|y>>>17),y=E+(R^(w|~g))+T[5]+4237533241&4294967295,E=w+(y<<21&4294967295|y>>>11),y=g+(w^(E|~R))+T[12]+1700485571&4294967295,g=E+(y<<6&4294967295|y>>>26),y=R+(E^(g|~w))+T[3]+2399980690&4294967295,R=g+(y<<10&4294967295|y>>>22),y=w+(g^(R|~E))+T[10]+4293915773&4294967295,w=R+(y<<15&4294967295|y>>>17),y=E+(R^(w|~g))+T[1]+2240044497&4294967295,E=w+(y<<21&4294967295|y>>>11),y=g+(w^(E|~R))+T[8]+1873313359&4294967295,g=E+(y<<6&4294967295|y>>>26),y=R+(E^(g|~w))+T[15]+4264355552&4294967295,R=g+(y<<10&4294967295|y>>>22),y=w+(g^(R|~E))+T[6]+2734768916&4294967295,w=R+(y<<15&4294967295|y>>>17),y=E+(R^(w|~g))+T[13]+1309151649&4294967295,E=w+(y<<21&4294967295|y>>>11),y=g+(w^(E|~R))+T[4]+4149444226&4294967295,g=E+(y<<6&4294967295|y>>>26),y=R+(E^(g|~w))+T[11]+3174756917&4294967295,R=g+(y<<10&4294967295|y>>>22),y=w+(g^(R|~E))+T[2]+718787259&4294967295,w=R+(y<<15&4294967295|y>>>17),y=E+(R^(w|~g))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+w&4294967295,v.g[3]=v.g[3]+R&4294967295}s.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var E=g-this.blockSize,T=this.B,w=this.h,R=0;R<g;){if(w==0)for(;R<=E;)r(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<g;)if(T[w++]=v.charCodeAt(R++),w==this.blockSize){r(this,T),w=0;break}}else for(;R<g;)if(T[w++]=v[R++],w==this.blockSize){r(this,T),w=0;break}}this.h=w,this.o+=g},s.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var E=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=E&255,E/=256;for(this.u(v),v=Array(16),g=E=0;4>g;++g)for(var T=0;32>T;T+=8)v[E++]=this.g[g]>>>T&255;return v};function i(v,g){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=g(v)}function a(v,g){this.h=g;for(var E=[],T=!0,w=v.length-1;0<=w;w--){var R=v[w]|0;T&&R==g||(E[w]=R,T=!1)}this.g=E}var l={};function c(v){return-128<=v&&128>v?i(v,function(g){return new a([g|0],0>g?-1:0)}):new a([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return P(h(-v));for(var g=[],E=1,T=0;v>=E;T++)g[T]=v/E|0,E*=4294967296;return new a(g,0)}function f(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return P(f(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(g,8)),T=p,w=0;w<v.length;w+=8){var R=Math.min(8,v.length-w),y=parseInt(v.substring(w,w+R),g);8>R?(R=h(Math.pow(g,R)),T=T.j(R).add(h(y))):(T=T.j(E),T=T.add(h(y)))}return T}var p=c(0),m=c(1),A=c(16777216);n=a.prototype,n.m=function(){if(k(this))return-P(this).m();for(var v=0,g=1,E=0;E<this.g.length;E++){var T=this.i(E);v+=(0<=T?T:4294967296+T)*g,g*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(k(this))return"-"+P(this).toString(v);for(var g=h(Math.pow(v,6)),E=this,T="";;){var w=j(E,g).g;E=q(E,w.j(g));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(v);if(E=w,S(E))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function k(v){return v.h==-1}n.l=function(v){return v=q(this,v),k(v)?-1:S(v)?0:1};function P(v){for(var g=v.g.length,E=[],T=0;T<g;T++)E[T]=~v.g[T];return new a(E,~v.h).add(m)}n.abs=function(){return k(this)?P(this):this},n.add=function(v){for(var g=Math.max(this.g.length,v.g.length),E=[],T=0,w=0;w<=g;w++){var R=T+(this.i(w)&65535)+(v.i(w)&65535),y=(R>>>16)+(this.i(w)>>>16)+(v.i(w)>>>16);T=y>>>16,R&=65535,y&=65535,E[w]=y<<16|R}return new a(E,E[E.length-1]&-2147483648?-1:0)};function q(v,g){return v.add(P(g))}n.j=function(v){if(S(this)||S(v))return p;if(k(this))return k(v)?P(this).j(P(v)):P(P(this).j(v));if(k(v))return P(this.j(P(v)));if(0>this.l(A)&&0>v.l(A))return h(this.m()*v.m());for(var g=this.g.length+v.g.length,E=[],T=0;T<2*g;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<v.g.length;w++){var R=this.i(T)>>>16,y=this.i(T)&65535,gt=v.i(w)>>>16,_s=v.i(w)&65535;E[2*T+2*w]+=y*_s,$(E,2*T+2*w),E[2*T+2*w+1]+=R*_s,$(E,2*T+2*w+1),E[2*T+2*w+1]+=y*gt,$(E,2*T+2*w+1),E[2*T+2*w+2]+=R*gt,$(E,2*T+2*w+2)}for(T=0;T<g;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=g;T<2*g;T++)E[T]=0;return new a(E,0)};function $(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function F(v,g){this.g=v,this.h=g}function j(v,g){if(S(g))throw Error("division by zero");if(S(v))return new F(p,p);if(k(v))return g=j(P(v),g),new F(P(g.g),P(g.h));if(k(g))return g=j(v,P(g)),new F(P(g.g),g.h);if(30<v.g.length){if(k(v)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var E=m,T=g;0>=T.l(v);)E=Ne(E),T=Ne(T);var w=ce(E,1),R=ce(T,1);for(T=ce(T,2),E=ce(E,2);!S(T);){var y=R.add(T);0>=y.l(v)&&(w=w.add(E),R=y),T=ce(T,1),E=ce(E,1)}return g=q(v,w.j(g)),new F(w,g)}for(w=p;0<=v.l(g);){for(E=Math.max(1,Math.floor(v.m()/g.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(E),y=R.j(g);k(y)||0<y.l(v);)E-=T,R=h(E),y=R.j(g);S(R)&&(R=m),w=w.add(R),v=q(v,y)}return new F(w,v)}n.A=function(v){return j(this,v).h},n.and=function(v){for(var g=Math.max(this.g.length,v.g.length),E=[],T=0;T<g;T++)E[T]=this.i(T)&v.i(T);return new a(E,this.h&v.h)},n.or=function(v){for(var g=Math.max(this.g.length,v.g.length),E=[],T=0;T<g;T++)E[T]=this.i(T)|v.i(T);return new a(E,this.h|v.h)},n.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),E=[],T=0;T<g;T++)E[T]=this.i(T)^v.i(T);return new a(E,this.h^v.h)};function Ne(v){for(var g=v.g.length+1,E=[],T=0;T<g;T++)E[T]=v.i(T)<<1|v.i(T-1)>>>31;return new a(E,v.h)}function ce(v,g){var E=g>>5;g%=32;for(var T=v.g.length-E,w=[],R=0;R<T;R++)w[R]=0<g?v.i(R+E)>>>g|v.i(R+E+1)<<32-g:v.i(R+E);return new a(w,v.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,zd=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,It=a}).apply(typeof Pu<"u"?Pu:typeof self<"u"?self:typeof window<"u"?window:{});var Kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jd,Ms,Wd,si,fa,Hd,Gd,Kd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kr=="object"&&Kr];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function r(o,u){if(u)e:{var d=s;o=o.split(".");for(var _=0;_<o.length-1;_++){var I=o[_];if(!(I in d))break e;d=d[I]}o=o[o.length-1],_=d[o],u=u(_),u!=_&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,_=!1,I={next:function(){if(!_&&d<o.length){var C=d++;return{value:u(C,o[C]),done:!1}}return _=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}r("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,_),o.apply(u,I)}}return function(){return o.apply(u,arguments)}}function m(o,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function A(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),o.apply(this,_)}}function S(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(_,I,C){for(var D=Array(arguments.length-2),se=2;se<arguments.length;se++)D[se-2]=arguments[se];return u.prototype[I].apply(_,D)}}function k(o){const u=o.length;if(0<u){const d=Array(u);for(let _=0;_<u;_++)d[_]=o[_];return d}return[]}function P(o,u){for(let d=1;d<arguments.length;d++){const _=arguments[d];if(c(_)){const I=o.length||0,C=_.length||0;o.length=I+C;for(let D=0;D<C;D++)o[I+D]=_[D]}else o.push(_)}}class q{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function j(o){return j[" "](o),o}j[" "]=function(){};var Ne=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function ce(o,u,d){for(const _ in o)u.call(d,o[_],_,o)}function v(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function g(o){const u={};for(const d in o)u[d]=o[d];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let d,_;for(let I=1;I<arguments.length;I++){_=arguments[I];for(d in _)o[d]=_[d];for(let C=0;C<E.length;C++)d=E[C],Object.prototype.hasOwnProperty.call(_,d)&&(o[d]=_[d])}}function w(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function R(o){l.setTimeout(()=>{throw o},0)}function y(){var o=Eo;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class gt{constructor(){this.h=this.g=null}add(u,d){const _=_s.get();_.set(u,d),this.h?this.h.next=_:this.g=_,this.h=_}}var _s=new q(()=>new gm,o=>o.reset());class gm{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ms,gs=!1,Eo=new gt,gc=()=>{const o=l.Promise.resolve(void 0);ms=()=>{o.then(ym)}};var ym=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){R(d)}var u=_s;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}gs=!1};function Ot(){this.s=this.s,this.C=this.C}Ot.prototype.s=!1,Ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var Em=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch(d){}return o}();function ys(o,u){if(ke.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,_=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Ne){e:{try{j(u.nodeName);var I=!0;break e}catch(C){}I=!1}I||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Tm[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ys.aa.h.call(this)}}S(ys,ke);var Tm={2:"touch",3:"pen",4:"mouse"};ys.prototype.h=function(){ys.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Pr="closure_listenable_"+(1e6*Math.random()|0),vm=0;function wm(o,u,d,_,I){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!_,this.ha=I,this.key=++vm,this.da=this.fa=!1}function Nr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function kr(o){this.src=o,this.g={},this.h=0}kr.prototype.add=function(o,u,d,_,I){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var D=vo(o,u,_,I);return-1<D?(u=o[D],d||(u.fa=!1)):(u=new wm(u,this.src,C,!!_,I),u.fa=d,o.push(u)),u};function To(o,u){var d=u.type;if(d in o.g){var _=o.g[d],I=Array.prototype.indexOf.call(_,u,void 0),C;(C=0<=I)&&Array.prototype.splice.call(_,I,1),C&&(Nr(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function vo(o,u,d,_){for(var I=0;I<o.length;++I){var C=o[I];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==_)return I}return-1}var wo="closure_lm_"+(1e6*Math.random()|0),Io={};function yc(o,u,d,_,I){if(Array.isArray(u)){for(var C=0;C<u.length;C++)yc(o,u[C],d,_,I);return null}return d=vc(d),o&&o[Pr]?o.K(u,d,h(_)?!!_.capture:!1,I):Im(o,u,d,!1,_,I)}function Im(o,u,d,_,I,C){if(!u)throw Error("Invalid event type");var D=h(I)?!!I.capture:!!I,se=Ro(o);if(se||(o[wo]=se=new kr(o)),d=se.add(u,d,_,D,C),d.proxy)return d;if(_=Am(),d.proxy=_,_.src=o,_.listener=d,o.addEventListener)Em||(I=D),I===void 0&&(I=!1),o.addEventListener(u.toString(),_,I);else if(o.attachEvent)o.attachEvent(Tc(u.toString()),_);else if(o.addListener&&o.removeListener)o.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Am(){function o(d){return u.call(o.src,o.listener,d)}const u=Rm;return o}function Ec(o,u,d,_,I){if(Array.isArray(u))for(var C=0;C<u.length;C++)Ec(o,u[C],d,_,I);else _=h(_)?!!_.capture:!!_,d=vc(d),o&&o[Pr]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],d=vo(C,d,_,I),-1<d&&(Nr(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=Ro(o))&&(u=o.g[u.toString()],o=-1,u&&(o=vo(u,d,_,I)),(d=-1<o?u[o]:null)&&Ao(d))}function Ao(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Pr])To(u.i,o);else{var d=o.type,_=o.proxy;u.removeEventListener?u.removeEventListener(d,_,o.capture):u.detachEvent?u.detachEvent(Tc(d),_):u.addListener&&u.removeListener&&u.removeListener(_),(d=Ro(u))?(To(d,o),d.h==0&&(d.src=null,u[wo]=null)):Nr(o)}}}function Tc(o){return o in Io?Io[o]:Io[o]="on"+o}function Rm(o,u){if(o.da)o=!0;else{u=new ys(u,this);var d=o.listener,_=o.ha||o.src;o.fa&&Ao(o),o=d.call(_,u)}return o}function Ro(o){return o=o[wo],o instanceof kr?o:null}var Co="__closure_events_fn_"+(1e9*Math.random()>>>0);function vc(o){return typeof o=="function"?o:(o[Co]||(o[Co]=function(u){return o.handleEvent(u)}),o[Co])}function De(){Ot.call(this),this.i=new kr(this),this.M=this,this.F=null}S(De,Ot),De.prototype[Pr]=!0,De.prototype.removeEventListener=function(o,u,d,_){Ec(this,o,u,d,_)};function $e(o,u){var d,_=o.F;if(_)for(d=[];_;_=_.F)d.push(_);if(o=o.M,_=u.type||u,typeof u=="string")u=new ke(u,o);else if(u instanceof ke)u.target=u.target||o;else{var I=u;u=new ke(_,o),T(u,I)}if(I=!0,d)for(var C=d.length-1;0<=C;C--){var D=u.g=d[C];I=Dr(D,_,!0,u)&&I}if(D=u.g=o,I=Dr(D,_,!0,u)&&I,I=Dr(D,_,!1,u)&&I,d)for(C=0;C<d.length;C++)D=u.g=d[C],I=Dr(D,_,!1,u)&&I}De.prototype.N=function(){if(De.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],_=0;_<d.length;_++)Nr(d[_]);delete o.g[u],o.h--}}this.F=null},De.prototype.K=function(o,u,d,_){return this.i.add(String(o),u,!1,d,_)},De.prototype.L=function(o,u,d,_){return this.i.add(String(o),u,!0,d,_)};function Dr(o,u,d,_){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,C=0;C<u.length;++C){var D=u[C];if(D&&!D.da&&D.capture==d){var se=D.listener,Ce=D.ha||D.src;D.fa&&To(o.i,D),I=se.call(Ce,_)!==!1&&I}}return I&&!_.defaultPrevented}function wc(o,u,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Ic(o){o.g=wc(()=>{o.g=null,o.i&&(o.i=!1,Ic(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Cm extends Ot{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ic(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Es(o){Ot.call(this),this.h=o,this.g={}}S(Es,Ot);var Ac=[];function Rc(o){ce(o.g,function(u,d){this.g.hasOwnProperty(d)&&Ao(u)},o),o.g={}}Es.prototype.N=function(){Es.aa.N.call(this),Rc(this)},Es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var So=l.JSON.stringify,Sm=l.JSON.parse,bm=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function bo(){}bo.prototype.h=null;function Cc(o){return o.h||(o.h=o.i())}function Sc(){}var Ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Po(){ke.call(this,"d")}S(Po,ke);function No(){ke.call(this,"c")}S(No,ke);var rn={},bc=null;function Vr(){return bc=bc||new De}rn.La="serverreachability";function Pc(o){ke.call(this,rn.La,o)}S(Pc,ke);function vs(o){const u=Vr();$e(u,new Pc(u))}rn.STAT_EVENT="statevent";function Nc(o,u){ke.call(this,rn.STAT_EVENT,o),this.stat=u}S(Nc,ke);function ze(o){const u=Vr();$e(u,new Nc(u,o))}rn.Ma="timingevent";function kc(o,u){ke.call(this,rn.Ma,o),this.size=u}S(kc,ke);function ws(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Is(){this.g=!0}Is.prototype.xa=function(){this.g=!1};function Pm(o,u,d,_,I,C){o.info(function(){if(o.g)if(C)for(var D="",se=C.split("&"),Ce=0;Ce<se.length;Ce++){var Z=se[Ce].split("=");if(1<Z.length){var Ve=Z[0];Z=Z[1];var Oe=Ve.split("_");D=2<=Oe.length&&Oe[1]=="type"?D+(Ve+"="+Z+"&"):D+(Ve+"=redacted&")}}else D=null;else D=C;return"XMLHTTP REQ ("+_+") [attempt "+I+"]: "+u+"\n"+d+"\n"+D})}function Nm(o,u,d,_,I,C,D){o.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+I+"]: "+u+"\n"+d+"\n"+C+" "+D})}function kn(o,u,d,_){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Dm(o,d)+(_?" "+_:"")})}function km(o,u){o.info(function(){return"TIMEOUT: "+u})}Is.prototype.info=function(){};function Dm(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var _=d[o];if(!(2>_.length)){var I=_[1];if(Array.isArray(I)&&!(1>I.length)){var C=I[0];if(C!="noop"&&C!="stop"&&C!="close")for(var D=1;D<I.length;D++)I[D]=""}}}}return So(d)}catch(se){return u}}var Or={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ko;function xr(){}S(xr,bo),xr.prototype.g=function(){return new XMLHttpRequest},xr.prototype.i=function(){return{}},ko=new xr;function xt(o,u,d,_){this.j=o,this.i=u,this.l=d,this.R=_||1,this.U=new Es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vc}function Vc(){this.i=null,this.g="",this.h=!1}var Oc={},Do={};function Vo(o,u,d){o.L=1,o.v=Ur(yt(u)),o.m=d,o.P=!0,xc(o,null)}function xc(o,u){o.F=Date.now(),Lr(o),o.A=yt(o.v);var d=o.A,_=o.R;Array.isArray(_)||(_=[String(_)]),Qc(d.i,"t",_),o.C=0,d=o.j.J,o.h=new Vc,o.g=fu(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Cm(m(o.Y,o,o.g),o.O)),u=o.U,d=o.g,_=o.ca;var I="readystatechange";Array.isArray(I)||(I&&(Ac[0]=I.toString()),I=Ac);for(var C=0;C<I.length;C++){var D=yc(d,I[C],_||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),vs(),Pm(o.i,o.u,o.A,o.l,o.R,o.m)}xt.prototype.ca=function(o){o=o.target;const u=this.M;u&&Et(o)==3?u.j():this.Y(o)},xt.prototype.Y=function(o){try{if(o==this.g)e:{const Oe=Et(this.g);var u=this.g.Ba();const On=this.g.Z();if(!(3>Oe)&&(Oe!=3||this.g&&(this.h.h||this.g.oa()||nu(this.g)))){this.J||Oe!=4||u==7||(u==8||0>=On?vs(3):vs(2)),Oo(this);var d=this.g.Z();this.X=d;t:if(Lc(this)){var _=nu(this.g);o="";var I=_.length,C=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),As(this);var D="";break t}this.h.i=new l.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,o+=this.h.i.decode(_[u],{stream:!(C&&u==I-1)});_.length=0,this.h.g+=o,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=d==200,Nm(this.i,this.u,this.A,this.l,this.R,Oe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var se,Ce=this.g;if((se=Ce.g?Ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(se)){var Z=se;break t}}Z=null}if(d=Z)kn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xo(this,d);else{this.o=!1,this.s=3,ze(12),on(this),As(this);break e}}if(this.P){d=!0;let ot;for(;!this.J&&this.C<D.length;)if(ot=Vm(this,D),ot==Do){Oe==4&&(this.s=4,ze(14),d=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(ot==Oc){this.s=4,ze(15),kn(this.i,this.l,D,"[Invalid Chunk]"),d=!1;break}else kn(this.i,this.l,ot,null),xo(this,ot);if(Lc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Oe!=4||D.length!=0||this.h.h||(this.s=1,ze(16),d=!1),this.o=this.o&&d,!d)kn(this.i,this.l,D,"[Invalid Chunked Response]"),on(this),As(this);else if(0<D.length&&!this.W){this.W=!0;var Ve=this.j;Ve.g==this&&Ve.ba&&!Ve.M&&(Ve.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),qo(Ve),Ve.M=!0,ze(11))}}else kn(this.i,this.l,D,null),xo(this,D);Oe==4&&on(this),this.o&&!this.J&&(Oe==4?cu(this.j,this):(this.o=!1,Lr(this)))}else Ym(this.g),d==400&&0<D.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),on(this),As(this)}}}catch(Oe){}finally{}};function Lc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Vm(o,u){var d=o.C,_=u.indexOf("\n",d);return _==-1?Do:(d=Number(u.substring(d,_)),isNaN(d)?Oc:(_+=1,_+d>u.length?Do:(u=u.slice(_,_+d),o.C=_+d,u)))}xt.prototype.cancel=function(){this.J=!0,on(this)};function Lr(o){o.S=Date.now()+o.I,Mc(o,o.I)}function Mc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ws(m(o.ba,o),u)}function Oo(o){o.B&&(l.clearTimeout(o.B),o.B=null)}xt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(km(this.i,this.A),this.L!=2&&(vs(),ze(17)),on(this),this.s=2,As(this)):Mc(this,this.S-o)};function As(o){o.j.G==0||o.J||cu(o.j,o)}function on(o){Oo(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Rc(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function xo(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Lo(d.h,o))){if(!o.K&&Lo(d.h,o)&&d.G==3){try{var _=d.Da.g.parse(u)}catch(Z){_=null}if(Array.isArray(_)&&_.length==3){var I=_;if(I[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Wr(d),zr(d);else break e;Bo(d),ze(18)}}else d.za=I[1],0<d.za-d.T&&37500>I[2]&&d.F&&d.v==0&&!d.C&&(d.C=ws(m(d.Za,d),6e3));if(1>=Bc(d.h)&&d.ca){try{d.ca()}catch(Z){}d.ca=void 0}}else ln(d,11)}else if((o.K||d.g==o)&&Wr(d),!$(u))for(I=d.Da.g.parse(u),u=0;u<I.length;u++){let Z=I[u];if(d.T=Z[0],Z=Z[1],d.G==2)if(Z[0]=="c"){d.K=Z[1],d.ia=Z[2];const Ve=Z[3];Ve!=null&&(d.la=Ve,d.j.info("VER="+d.la));const Oe=Z[4];Oe!=null&&(d.Aa=Oe,d.j.info("SVER="+d.Aa));const On=Z[5];On!=null&&typeof On=="number"&&0<On&&(_=1.5*On,d.L=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const ot=o.g;if(ot){const Gr=ot.g?ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gr){var C=_.h;C.g||Gr.indexOf("spdy")==-1&&Gr.indexOf("quic")==-1&&Gr.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Mo(C,C.h),C.h=null))}if(_.D){const $o=ot.g?ot.g.getResponseHeader("X-HTTP-Session-Id"):null;$o&&(_.ya=$o,re(_.I,_.D,$o))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),_=d;var D=o;if(_.qa=du(_,_.J?_.ia:null,_.W),D.K){qc(_.h,D);var se=D,Ce=_.L;Ce&&(se.I=Ce),se.B&&(Oo(se),Lr(se)),_.g=D}else au(_);0<d.i.length&&jr(d)}else Z[0]!="stop"&&Z[0]!="close"||ln(d,7);else d.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?ln(d,7):Uo(d):Z[0]!="noop"&&d.l&&d.l.ta(Z),d.v=0)}}vs(4)}catch(Z){}}var Om=class{constructor(o,u){this.g=o,this.map=u}};function Fc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Uc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Bc(o){return o.h?1:o.g?o.g.size:0}function Lo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Mo(o,u){o.g?o.g.add(u):o.h=u}function qc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Fc.prototype.cancel=function(){if(this.i=$c(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function $c(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return k(o.i)}function xm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,_=0;_<d;_++)u.push(o[_]);return u}u=[],d=0;for(_ in o)u[d++]=o[_];return u}function Lm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const _ in o)u[d++]=_;return u}}}function zc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Lm(o),_=xm(o),I=_.length,C=0;C<I;C++)u.call(void 0,_[C],d&&d[C],o)}var jc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mm(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var _=o[d].indexOf("="),I=null;if(0<=_){var C=o[d].substring(0,_);I=o[d].substring(_+1)}else C=o[d];u(C,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function an(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof an){this.h=o.h,Mr(this,o.j),this.o=o.o,this.g=o.g,Fr(this,o.s),this.l=o.l;var u=o.i,d=new Ss;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Wc(this,d),this.m=o.m}else o&&(u=String(o).match(jc))?(this.h=!1,Mr(this,u[1]||"",!0),this.o=Rs(u[2]||""),this.g=Rs(u[3]||"",!0),Fr(this,u[4]),this.l=Rs(u[5]||"",!0),Wc(this,u[6]||"",!0),this.m=Rs(u[7]||"")):(this.h=!1,this.i=new Ss(null,this.h))}an.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Cs(u,Hc,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Cs(u,Hc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Cs(d,d.charAt(0)=="/"?Bm:Um,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Cs(d,$m)),o.join("")};function yt(o){return new an(o)}function Mr(o,u,d){o.j=d?Rs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Fr(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Wc(o,u,d){u instanceof Ss?(o.i=u,zm(o.i,o.h)):(d||(u=Cs(u,qm)),o.i=new Ss(u,o.h))}function re(o,u,d){o.i.set(u,d)}function Ur(o){return re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Rs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Cs(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Fm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Fm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Hc=/[#\/\?@]/g,Um=/[#\?:]/g,Bm=/[#\?]/g,qm=/[#\?@]/g,$m=/#/g;function Ss(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Lt(o){o.g||(o.g=new Map,o.h=0,o.i&&Mm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Ss.prototype,n.add=function(o,u){Lt(this),this.i=null,o=Dn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Gc(o,u){Lt(o),u=Dn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Kc(o,u){return Lt(o),u=Dn(o,u),o.g.has(u)}n.forEach=function(o,u){Lt(this),this.g.forEach(function(d,_){d.forEach(function(I){o.call(u,I,_,this)},this)},this)},n.na=function(){Lt(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let _=0;_<u.length;_++){const I=o[_];for(let C=0;C<I.length;C++)d.push(u[_])}return d},n.V=function(o){Lt(this);let u=[];if(typeof o=="string")Kc(this,o)&&(u=u.concat(this.g.get(Dn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return Lt(this),this.i=null,o=Dn(this,o),Kc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Qc(o,u,d){Gc(o,u),0<d.length&&(o.i=null,o.g.set(Dn(o,u),k(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var _=u[d];const C=encodeURIComponent(String(_)),D=this.V(_);for(_=0;_<D.length;_++){var I=C;D[_]!==""&&(I+="="+encodeURIComponent(String(D[_]))),o.push(I)}}return this.i=o.join("&")};function Dn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function zm(o,u){u&&!o.j&&(Lt(o),o.i=null,o.g.forEach(function(d,_){var I=_.toLowerCase();_!=I&&(Gc(this,_),Qc(this,I,d))},o)),o.j=u}function jm(o,u){const d=new Is;if(l.Image){const _=new Image;_.onload=A(Mt,d,"TestLoadImage: loaded",!0,u,_),_.onerror=A(Mt,d,"TestLoadImage: error",!1,u,_),_.onabort=A(Mt,d,"TestLoadImage: abort",!1,u,_),_.ontimeout=A(Mt,d,"TestLoadImage: timeout",!1,u,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=o}else u(!1)}function Wm(o,u){const d=new Is,_=new AbortController,I=setTimeout(()=>{_.abort(),Mt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:_.signal}).then(C=>{clearTimeout(I),C.ok?Mt(d,"TestPingServer: ok",!0,u):Mt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Mt(d,"TestPingServer: error",!1,u)})}function Mt(o,u,d,_,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),_(d)}catch(C){}}function Hm(){this.g=new bm}function Gm(o,u,d){const _=d||"";try{zc(o,function(I,C){let D=I;h(I)&&(D=So(I)),u.push(_+C+"="+encodeURIComponent(D))})}catch(I){throw u.push(_+"type="+encodeURIComponent("_badmap")),I}}function Br(o){this.l=o.Ub||null,this.j=o.eb||!1}S(Br,bo),Br.prototype.g=function(){return new qr(this.l,this.j)},Br.prototype.i=function(o){return function(){return o}}({});function qr(o,u){De.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(qr,De),n=qr.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ps(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ps(this)),this.g&&(this.readyState=3,Ps(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?bs(this):Ps(this),this.readyState==3&&Yc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,bs(this))},n.Qa=function(o){this.g&&(this.response=o,bs(this))},n.ga=function(){this.g&&bs(this)};function bs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ps(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join("\r\n")};function Ps(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Xc(o){let u="";return ce(o,function(d,_){u+=_,u+=":",u+=d,u+="\r\n"}),u}function Fo(o,u,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=Xc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):re(o,u,d))}function de(o){De.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(de,De);var Km=/^https?$/i,Qm=["POST","PUT"];n=de.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ko.g(),this.v=this.o?Cc(this.o):Cc(ko),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Jc(this,C);return}if(o=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var I in _)d.set(I,_[I]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const C of _.keys())d.set(C,_.get(C));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),I=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Qm,u,void 0))||_||I||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,D]of d)this.g.setRequestHeader(C,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tu(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Jc(this,C)}};function Jc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Zc(o),$r(o)}function Zc(o){o.A||(o.A=!0,$e(o,"complete"),$e(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,$e(this,"complete"),$e(this,"abort"),$r(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$r(this,!0)),de.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?eu(this):this.bb())},n.bb=function(){eu(this)};function eu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Et(o)!=4||o.Z()!=2)){if(o.u&&Et(o)==4)wc(o.Ea,0,o);else if($e(o,"readystatechange"),Et(o)==4){o.h=!1;try{const D=o.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var _;if(_=D===0){var I=String(o.D).match(jc)[1]||null;!I&&l.self&&l.self.location&&(I=l.self.location.protocol.slice(0,-1)),_=!Km.test(I?I.toLowerCase():"")}d=_}if(d)$e(o,"complete"),$e(o,"success");else{o.m=6;try{var C=2<Et(o)?o.g.statusText:""}catch(se){C=""}o.l=C+" ["+o.Z()+"]",Zc(o)}}finally{$r(o)}}}}function $r(o,u){if(o.g){tu(o);const d=o.g,_=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||$e(o,"ready");try{d.onreadystatechange=_}catch(I){}}}function tu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Et(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Et(this)?this.g.status:-1}catch(o){return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch(o){return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Sm(u)}};function nu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch(u){return null}}function Ym(o){const u={};o=(o.g&&2<=Et(o)&&o.g.getAllResponseHeaders()||"").split("\r\n");for(let _=0;_<o.length;_++){if($(o[_]))continue;var d=w(o[_]);const I=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[I]||[];u[I]=C,C.push(d)}v(u,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ns(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function su(o){this.Aa=0,this.i=[],this.j=new Is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ns("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ns("baseRetryDelayMs",5e3,o),this.cb=Ns("retryDelaySeedMs",1e4,o),this.Wa=Ns("forwardChannelMaxRetries",2,o),this.wa=Ns("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Fc(o&&o.concurrentRequestLimit),this.Da=new Hm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=su.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,_){ze(0),this.W=o,this.H=u||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.I=du(this,null,this.W),jr(this)};function Uo(o){if(ru(o),o.G==3){var u=o.U++,d=yt(o.I);if(re(d,"SID",o.K),re(d,"RID",u),re(d,"TYPE","terminate"),ks(o,d),u=new xt(o,o.j,u),u.L=2,u.v=Ur(yt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch(_){}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=fu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Lr(u)}hu(o)}function zr(o){o.g&&(qo(o),o.g.cancel(),o.g=null)}function ru(o){zr(o),o.u&&(l.clearTimeout(o.u),o.u=null),Wr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function jr(o){if(!Uc(o.h)&&!o.s){o.s=!0;var u=o.Ga;ms||gc(),gs||(ms(),gs=!0),Eo.add(u,o),o.B=0}}function Xm(o,u){return Bc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ws(m(o.Ga,o,u),uu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const I=new xt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=g(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(I.H=C,C=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(u+=_,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=ou(this,I,u),d=yt(this.I),re(d,"RID",o),re(d,"CVER",22),this.D&&re(d,"X-HTTP-Session-Id",this.D),ks(this,d),C&&(this.O?u="headers="+encodeURIComponent(String(Xc(C)))+"&"+u:this.m&&Fo(d,this.m,C)),Mo(this.h,I),this.Ua&&re(d,"TYPE","init"),this.P?(re(d,"$req",u),re(d,"SID","null"),I.T=!0,Vo(I,d,null)):Vo(I,d,u),this.G=2}}else this.G==3&&(o?iu(this,o):this.i.length==0||Uc(this.h)||iu(this))};function iu(o,u){var d;u?d=u.l:d=o.U++;const _=yt(o.I);re(_,"SID",o.K),re(_,"RID",d),re(_,"AID",o.T),ks(o,_),o.m&&o.o&&Fo(_,o.m,o.o),d=new xt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=ou(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Mo(o.h,d),Vo(d,_,u)}function ks(o,u){o.H&&ce(o.H,function(d,_){re(u,_,d)}),o.l&&zc({},function(d,_){re(u,_,d)})}function ou(o,u,d){d=Math.min(o.i.length,d);var _=o.l?m(o.l.Na,o.l,o):null;e:{var I=o.i;let C=-1;for(;;){const D=["count="+d];C==-1?0<d?(C=I[0].g,D.push("ofs="+C)):C=0:D.push("ofs="+C);let se=!0;for(let Ce=0;Ce<d;Ce++){let Z=I[Ce].g;const Ve=I[Ce].map;if(Z-=C,0>Z)C=Math.max(0,I[Ce].g-100),se=!1;else try{Gm(Ve,D,"req"+Z+"_")}catch(Oe){_&&_(Ve)}}if(se){_=D.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,_}function au(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ms||gc(),gs||(ms(),gs=!0),Eo.add(u,o),o.v=0}}function Bo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ws(m(o.Fa,o),uu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,lu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ws(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ze(10),zr(this),lu(this))};function qo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function lu(o){o.g=new xt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=yt(o.qa);re(u,"RID","rpc"),re(u,"SID",o.K),re(u,"AID",o.T),re(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&re(u,"TO",o.ja),re(u,"TYPE","xmlhttp"),ks(o,u),o.m&&o.o&&Fo(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ur(yt(u)),d.m=null,d.P=!0,xc(d,o)}n.Za=function(){this.C!=null&&(this.C=null,zr(this),Bo(this),ze(19))};function Wr(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function cu(o,u){var d=null;if(o.g==u){Wr(o),qo(o),o.g=null;var _=2}else if(Lo(o.h,u))d=u.D,qc(o.h,u),_=1;else return;if(o.G!=0){if(u.o)if(_==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var I=o.B;_=Vr(),$e(_,new kc(_,d)),jr(o)}else au(o);else if(I=u.s,I==3||I==0&&0<u.X||!(_==1&&Xm(o,u)||_==2&&Bo(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),I){case 1:ln(o,5);break;case 4:ln(o,10);break;case 3:ln(o,6);break;default:ln(o,2)}}}function uu(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function ln(o,u){if(o.j.info("Error code "+u),u==2){var d=m(o.fb,o),_=o.Xa;const I=!_;_=new an(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Mr(_,"https"),Ur(_),I?jm(_.toString(),d):Wm(_.toString(),d)}else ze(2);o.G=0,o.l&&o.l.sa(u),hu(o),ru(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function hu(o){if(o.G=0,o.ka=[],o.l){const u=$c(o.h);(u.length!=0||o.i.length!=0)&&(P(o.ka,u),P(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function du(o,u,d){var _=d instanceof an?yt(d):new an(d);if(_.g!="")u&&(_.g=u+"."+_.g),Fr(_,_.s);else{var I=l.location;_=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var C=new an(null);_&&Mr(C,_),u&&(C.g=u),I&&Fr(C,I),d&&(C.l=d),_=C}return d=o.D,u=o.ya,d&&u&&re(_,d,u),re(_,"VER",o.la),ks(o,_),_}function fu(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new de(new Br({eb:d})):new de(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function pu(){}n=pu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Hr(){}Hr.prototype.g=function(o,u){return new Ye(o,u)};function Ye(o,u){De.call(this),this.g=new su(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!$(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Vn(this)}S(Ye,De),Ye.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ye.prototype.close=function(){Uo(this.g)},Ye.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=So(o),o=d);u.i.push(new Om(u.Ya++,o)),u.G==3&&jr(u)},Ye.prototype.N=function(){this.g.l=null,delete this.j,Uo(this.g),delete this.g,Ye.aa.N.call(this)};function _u(o){Po.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}S(_u,Po);function mu(){No.call(this),this.status=1}S(mu,No);function Vn(o){this.g=o}S(Vn,pu),Vn.prototype.ua=function(){$e(this.g,"a")},Vn.prototype.ta=function(o){$e(this.g,new _u(o))},Vn.prototype.sa=function(o){$e(this.g,new mu)},Vn.prototype.ra=function(){$e(this.g,"b")},Hr.prototype.createWebChannel=Hr.prototype.g,Ye.prototype.send=Ye.prototype.o,Ye.prototype.open=Ye.prototype.m,Ye.prototype.close=Ye.prototype.close,Kd=function(){return new Hr},Gd=function(){return Vr()},Hd=rn,fa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Or.NO_ERROR=0,Or.TIMEOUT=8,Or.HTTP_ERROR=6,si=Or,Dc.COMPLETE="complete",Wd=Dc,Sc.EventType=Ts,Ts.OPEN="a",Ts.CLOSE="b",Ts.ERROR="c",Ts.MESSAGE="d",De.prototype.listen=De.prototype.K,Ms=Sc,de.prototype.listenOnce=de.prototype.L,de.prototype.getLastError=de.prototype.Ka,de.prototype.getLastErrorCode=de.prototype.Ba,de.prototype.getStatus=de.prototype.Z,de.prototype.getResponseJson=de.prototype.Oa,de.prototype.getResponseText=de.prototype.oa,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Ha,jd=de}).apply(typeof Kr<"u"?Kr:typeof self<"u"?self:typeof window<"u"?window:{});const Nu="@firebase/firestore",ku="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Le=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let os="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const gn=new qi("@firebase/firestore");function Mn(){return gn.logLevel}function x(n,...e){if(gn.logLevel<=W.DEBUG){const t=e.map(Za);gn.debug("Firestore (".concat(os,"): ").concat(n),...t)}}function St(n,...e){if(gn.logLevel<=W.ERROR){const t=e.map(Za);gn.error("Firestore (".concat(os,"): ").concat(n),...t)}}function Yn(n,...e){if(gn.logLevel<=W.WARN){const t=e.map(Za);gn.warn("Firestore (".concat(os,"): ").concat(n),...t)}}function Za(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch(e){return n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function M(n="Unexpected state"){const e="FIRESTORE (".concat(os,") INTERNAL ASSERTION FAILED: ")+n;throw St(e),new Error(e)}function K(n,e){n||M()}function B(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let V=class extends tn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>"".concat(this.name,": [code=").concat(this.code,"]: ").concat(this.message)}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ct{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Qd=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(e))}},Vy=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Le.UNAUTHENTICATED))}shutdown(){}};class Oy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class xy{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){K(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new ct;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ct,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},l=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ct)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(K(typeof s.accessToken=="string"),new Qd(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string"),new Le(e)}}let Ly=class{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}},My=class{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new Ly(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}},Du=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};class Fy{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,$i(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){K(this.o===void 0);const s=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(i.error.message));const a=i.token!==this.R;return this.R=i.token,x("FirebaseAppCheckTokenProvider","Received ".concat(a?"new":"existing"," token.")),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Du(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(K(typeof t.token=="string"),this.R=t.token,new Du(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Uy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function Yd(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Xd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Uy(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function z(n,e){return n<e?-1:n>e?1:0}function pa(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),r=e.codePointAt(t);if(s!==r){if(s<128&&r<128)return z(s,r);{const i=Yd(),a=By(i.encode(Vu(n,t)),i.encode(Vu(e,t)));return a!==0?a:z(s,r)}}t+=s>65535?2:1}return z(n.length,e.length)}function Vu(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function By(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return z(n[t],e[t]);return z(n.length,e.length)}function Xn(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ou=-62135596800,xu=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*xu);return new ge(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ou)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xu}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ou;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new ge(0,0))}static max(){return new U(new ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Lu="__name__";let Jd=class Ft{constructor(e,t,s){t===void 0?t=0:t>e.length&&M(),s===void 0?s=e.length-t:s>e.length-t&&M(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ft.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ft?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=Ft.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return z(e.length,t.length)}static compareSegments(e,t){const s=Ft.isNumericId(e),r=Ft.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Ft.extractNumericId(e).compare(Ft.extractNumericId(t)):pa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return It.fromString(e.substring(4,e.length-2))}};class te extends Jd{construct(e,t,s){return new te(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new V(b.INVALID_ARGUMENT,"Invalid segment (".concat(s,"). Paths must not contain // in them."));t.push(...s.split("/").filter(r=>r.length>0))}return new te(t)}static emptyPath(){return new te([])}}const qy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let ut=class Fn extends Jd{construct(e,t,s){return new Fn(e,t,s)}static isValidIdentifier(e){return qy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Lu}static keyField(){return new Fn([Lu])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new V(b.INVALID_ARGUMENT,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(s),s=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new V(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(s+=l,r++):(i(),r++)}if(i(),a)throw new V(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fn(t)}static emptyPath(){return new Fn([])}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(te.fromString(e))}static fromName(e){return new L(te.fromString(e).popFirst(5))}static empty(){return new L(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new te(e.slice()))}}/**
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
 */const Zs=-1;function $y(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=U.fromTimestamp(s===1e9?new ge(t+1,0):new ge(t,s));return new Kt(r,L.empty(),e)}function zy(n){return new Kt(n.readTime,n.key,Zs)}class Kt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Kt(U.min(),L.empty(),Zs)}static max(){return new Kt(U.max(),L.empty(),Zs)}}function jy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:z(n.largestBatchId,e.largestBatchId))}/**
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
 */const Wy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function as(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==Wy)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,s)=>{t(e)})}static reject(e){return new N((t,s)=>{s(e)})}static waitFor(e){return new N((t,s)=>{let r=0,i=0,a=!1;e.forEach(l=>{++r,l.next(()=>{++i,a&&i===r&&t()},c=>s(c))}),a=!0,i===r&&t()})}static or(e){let t=N.resolve(!1);for(const s of e)t=t.next(r=>r?N.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new N((s,r)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===i&&s(a)},f=>r(f))}})}static doWhile(e,t){return new N((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function Gy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ls(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ji{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ji.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const el=-1;function ur(n){return n==null}function pi(n){return n===0&&1/n==-1/0}function Ky(n){return typeof n=="number"&&Number.isInteger(n)&&!pi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Zd="";function Qy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Mu(e)),e=Yy(n.get(t),e);return Mu(e)}function Yy(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Zd:t+="";break;default:t+=i}}return t}function Mu(n){return n+Zd+""}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Fu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function nn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Xy(n,e){const t=[];for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.push(e(n[s],s,n));return t}function ef(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let me=class _a{constructor(e,t){this.comparator=e,this.root=t||jt.EMPTY}insert(e,t){return new _a(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(e){return new _a(this.comparator,this.root.remove(e,this.comparator).copy(null,null,jt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push("".concat(t,":").concat(s)),!1)),"{".concat(e.join(", "),"}")}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qr(this.root,e,this.comparator,!0)}},Qr=class{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},jt=class Tt{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s!=null?s:Tt.RED,this.left=r!=null?r:Tt.EMPTY,this.right=i!=null?i:Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new Tt(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Tt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}};jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,t,s,r,i){return this}insert(e,t,s){return new jt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ye{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Uu(this.data.getIterator())}getIteratorFrom(e){return new Uu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ye(this.comparator);return t.data=e,t}}class Uu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xe{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Xe([])}unionWith(e){let t=new ye(ut.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xn(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class tf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new tf("Invalid base64 string: "+i):i}}(e);return new Pe(t)}static fromUint8Array(e){const t=function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i}(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const Jy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(n){if(K(!!n),typeof n=="string"){let e=0;const t=Jy.exec(n);if(K(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:fe(n.seconds),nanos:fe(n.nanos)}}function fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yt(n){return typeof n=="string"?Pe.fromBase64String(n):Pe.fromUint8Array(n)}/**
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
 */const nf="server_timestamp",sf="__type__",rf="__previous_value__",of="__local_write_time__";function Wi(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[sf])===null||t===void 0?void 0:t.stringValue)===nf}function Hi(n){const e=n.mapValue.fields[rf];return Wi(e)?Hi(e):e}function er(n){const e=Qt(n.mapValue.fields[of].timestampValue);return new ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Zy{constructor(e,t,s,r,i,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}const _i="(default)";let af=class ma{constructor(e,t){this.projectId=e,this.database=t||_i}static empty(){return new ma("","")}get isDefaultDatabase(){return this.database===_i}isEqual(e){return e instanceof ma&&e.projectId===this.projectId&&e.database===this.database}};/**
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
 */const lf="__type__",eE="__max__",Yr={mapValue:{}},cf="__vector__",mi="value";function Xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wi(n)?4:nE(n)?9007199254740991:tE(n)?10:11:M()}function mt(n,e){if(n===e)return!0;const t=Xt(n);if(t!==Xt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return er(n).isEqual(er(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Qt(r.timestampValue),l=Qt(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Yt(r.bytesValue).isEqual(Yt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return fe(r.geoPointValue.latitude)===fe(i.geoPointValue.latitude)&&fe(r.geoPointValue.longitude)===fe(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return fe(r.integerValue)===fe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=fe(r.doubleValue),l=fe(i.doubleValue);return a===l?pi(a)===pi(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Xn(n.arrayValue.values||[],e.arrayValue.values||[],mt);case 10:case 11:return function(r,i){const a=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Fu(a)!==Fu(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!mt(a[c],l[c])))return!1;return!0}(n,e);default:return M()}}function tr(n,e){return(n.values||[]).find(t=>mt(t,e))!==void 0}function Jn(n,e){if(n===e)return 0;const t=Xt(n),s=Xt(e);if(t!==s)return z(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=fe(i.integerValue||i.doubleValue),c=fe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Bu(n.timestampValue,e.timestampValue);case 4:return Bu(er(n),er(e));case 5:return pa(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Yt(i),c=Yt(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=z(l[h],c[h]);if(f!==0)return f}return z(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=z(fe(i.latitude),fe(a.latitude));return l!==0?l:z(fe(i.longitude),fe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return qu(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,f;const p=i.fields||{},m=a.fields||{},A=(l=p[mi])===null||l===void 0?void 0:l.arrayValue,S=(c=m[mi])===null||c===void 0?void 0:c.arrayValue,k=z(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:qu(A,S)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Yr.mapValue&&a===Yr.mapValue)return 0;if(i===Yr.mapValue)return 1;if(a===Yr.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=pa(c[p],f[p]);if(m!==0)return m;const A=Jn(l[c[p]],h[f[p]]);if(A!==0)return A}return z(c.length,f.length)}(n.mapValue,e.mapValue);default:throw M()}}function Bu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return z(n,e);const t=Qt(n),s=Qt(e),r=z(t.seconds,s.seconds);return r!==0?r:z(t.nanos,s.nanos)}function qu(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Jn(t[r],s[r]);if(i)return i}return z(t.length,s.length)}function Zn(n){return ga(n)}function ga(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Qt(t);return"time(".concat(s.seconds,",").concat(s.nanos,")")}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Yt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return"geo(".concat(t.latitude,",").concat(t.longitude,")")}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=ga(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+="".concat(a,":").concat(ga(t.fields[a]));return r+"}"}(n.mapValue):M()}function ri(n){switch(Xt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Hi(n);return e?16+ri(e):16;case 5:return 2*n.stringValue.length;case 6:return Yt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+ri(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return nn(s.fields,(i,a)=>{r+=i.length+ri(a)}),r}(n.mapValue);default:throw M()}}function gi(n,e){return{referenceValue:"projects/".concat(n.projectId,"/databases/").concat(n.database,"/documents/").concat(e.path.canonicalString())}}function ya(n){return!!n&&"integerValue"in n}function tl(n){return!!n&&"arrayValue"in n}function $u(n){return!!n&&"nullValue"in n}function zu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ii(n){return!!n&&"mapValue"in n}function tE(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[lf])===null||t===void 0?void 0:t.stringValue)===cf}function qs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return nn(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=qs(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function nE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===eE}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class We{constructor(e){this.value=e}static empty(){return new We({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ii(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(t)}setAll(e){let t=ut.emptyPath(),s={},r=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=l.popLast()}a?s[l.lastSegment()]=qs(a):r.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());ii(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];ii(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){nn(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new We(qs(this.value))}}function uf(n){const e=[];return nn(n.fields,(t,s)=>{const r=new ut([t]);if(ii(s)){const i=uf(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)}),new Xe(e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ie{constructor(e,t,s,r,i,a,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ie(e,0,U.min(),U.min(),U.min(),We.empty(),0)}static newFoundDocument(e,t,s,r){return new Ie(e,1,t,U.min(),s,r,0)}static newNoDocument(e,t){return new Ie(e,2,t,U.min(),U.min(),We.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,U.min(),U.min(),We.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {createTime: ").concat(this.createTime,"}), {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}}/**
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
 */class es{constructor(e,t){this.position=e,this.inclusive=t}}function ju(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=L.comparator(L.fromName(a.referenceValue),t.key):s=Jn(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Wu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!mt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */let nr=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function sE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class hf{}class _e extends hf{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new iE(e,t,s):t==="array-contains"?new lE(e,s):t==="in"?new cE(e,s):t==="not-in"?new uE(e,s):t==="array-contains-any"?new hE(e,s):new _e(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new oE(e,s):new aE(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Jn(t,this.value)):t!==null&&Xt(this.value)===Xt(t)&&this.matchesComparison(Jn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dt extends hf{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new dt(e,t)}matches(e){return df(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function df(n){return n.op==="and"}function ff(n){return rE(n)&&df(n)}function rE(n){for(const e of n.filters)if(e instanceof dt)return!1;return!0}function Ea(n){if(n instanceof _e)return n.field.canonicalString()+n.op.toString()+Zn(n.value);if(ff(n))return n.filters.map(e=>Ea(e)).join(",");{const e=n.filters.map(t=>Ea(t)).join(",");return"".concat(n.op,"(").concat(e,")")}}function pf(n,e){return n instanceof _e?function(s,r){return r instanceof _e&&s.op===r.op&&s.field.isEqual(r.field)&&mt(s.value,r.value)}(n,e):n instanceof dt?function(s,r){return r instanceof dt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,a,l)=>i&&pf(a,r.filters[l]),!0):!1}(n,e):void M()}function _f(n){return n instanceof _e?function(t){return"".concat(t.field.canonicalString()," ").concat(t.op," ").concat(Zn(t.value))}(n):n instanceof dt?function(t){return t.op.toString()+" {"+t.getFilters().map(_f).join(" ,")+"}"}(n):"Filter"}class iE extends _e{constructor(e,t,s){super(e,t,s),this.key=L.fromName(s.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class oE extends _e{constructor(e,t){super(e,"in",t),this.keys=mf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class aE extends _e{constructor(e,t){super(e,"not-in",t),this.keys=mf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function mf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>L.fromName(s.referenceValue))}class lE extends _e{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return tl(t)&&tr(t.arrayValue,this.value)}}class cE extends _e{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&tr(this.value.arrayValue,t)}}class uE extends _e{constructor(e,t){super(e,"not-in",t)}matches(e){if(tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!tr(this.value.arrayValue,t)}}class hE extends _e{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!tl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>tr(this.value.arrayValue,s))}}/**
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
 */class dE{constructor(e,t=null,s=[],r=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function Hu(n,e=null,t=[],s=[],r=null,i=null,a=null){return new dE(n,e,t,s,r,i,a)}function nl(n){const e=B(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Ea(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ur(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Zn(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Zn(s)).join(",")),e.le=t}return e.le}function sl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!sE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!pf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Wu(n.startAt,e.startAt)&&Wu(n.endAt,e.endAt)}function Ta(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let An=class{constructor(e,t=null,s=[],r=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}};function fE(n,e,t,s,r,i,a,l){return new An(n,e,t,s,r,i,a,l)}function rl(n){return new An(n)}function Gu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function il(n){return n.collectionGroup!==null}function jn(n){const e=B(n);if(e.he===null){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ye(ut.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new nr(i,s))}),t.has(ut.keyField().canonicalString())||e.he.push(new nr(ut.keyField(),s))}return e.he}function _t(n){const e=B(n);return e.Pe||(e.Pe=gf(e,jn(n))),e.Pe}function pE(n){const e=B(n);return e.Te||(e.Te=gf(e,n.explicitOrderBy)),e.Te}function gf(n,e){if(n.limitType==="F")return Hu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new nr(r.field,i)});const t=n.endAt?new es(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new es(n.startAt.position,n.startAt.inclusive):null;return Hu(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function va(n,e){const t=n.filters.concat([e]);return new An(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function yi(n,e,t){return new An(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Gi(n,e){return sl(_t(n),_t(e))&&n.limitType===e.limitType}function yf(n){return"".concat(nl(_t(n)),"|lt:").concat(n.limitType)}function Un(n){return"Query(target=".concat(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=", filters: [".concat(t.filters.map(r=>_f(r)).join(", "),"]")),ur(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=", orderBy: [".concat(t.orderBy.map(r=>function(a){return"".concat(a.field.canonicalString()," (").concat(a.dir,")")}(r)).join(", "),"]")),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>Zn(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>Zn(r)).join(",")),"Target(".concat(s,")")}(_t(n)),"; limitType=").concat(n.limitType,")")}function Ki(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):L.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of jn(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(a,l,c){const h=ju(a,l,c);return a.inclusive?h<=0:h<0}(s.startAt,jn(s),r)||s.endAt&&!function(a,l,c){const h=ju(a,l,c);return a.inclusive?h>=0:h>0}(s.endAt,jn(s),r))}(n,e)}function _E(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ef(n){return(e,t)=>{let s=!1;for(const r of jn(n)){const i=mE(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function mE(n,e,t){const s=n.field.isKeyField()?L.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Jn(c,h):M()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Rn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){nn(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return ef(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const gE=new me(L.comparator);function bt(){return gE}const Tf=new me(L.comparator);function Fs(...n){let e=Tf;for(const t of n)e=e.insert(t.key,t);return e}function vf(n){let e=Tf;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function fn(){return $s()}function wf(){return $s()}function $s(){return new Rn(n=>n.toString(),(n,e)=>n.isEqual(e))}const yE=new me(L.comparator),EE=new ye(L.comparator);function H(...n){let e=EE;for(const t of n)e=e.add(t);return e}const TE=new ye(z);function vE(){return TE}/**
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
 */function ol(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pi(e)?"-0":e}}function If(n){return{integerValue:""+n}}function Af(n,e){return Ky(e)?If(e):ol(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Qi{constructor(){this._=void 0}}function wE(n,e,t){return n instanceof sr?function(r,i){const a={fields:{[sf]:{stringValue:nf},[of]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Wi(i)&&(i=Hi(i)),i&&(a.fields[rf]=i),{mapValue:a}}(t,e):n instanceof rr?Cf(n,e):n instanceof ir?Sf(n,e):function(r,i){const a=Rf(r,i),l=Ku(a)+Ku(r.Ie);return ya(a)&&ya(r.Ie)?If(l):ol(r.serializer,l)}(n,e)}function IE(n,e,t){return n instanceof rr?Cf(n,e):n instanceof ir?Sf(n,e):t}function Rf(n,e){return n instanceof or?function(s){return ya(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class sr extends Qi{}class rr extends Qi{constructor(e){super(),this.elements=e}}function Cf(n,e){const t=bf(e);for(const s of n.elements)t.some(r=>mt(r,s))||t.push(s);return{arrayValue:{values:t}}}class ir extends Qi{constructor(e){super(),this.elements=e}}function Sf(n,e){let t=bf(e);for(const s of n.elements)t=t.filter(r=>!mt(r,s));return{arrayValue:{values:t}}}class or extends Qi{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Ku(n){return fe(n.integerValue||n.doubleValue)}function bf(n){return tl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Pf{constructor(e,t){this.field=e,this.transform=t}}function AE(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof rr&&r instanceof rr||s instanceof ir&&r instanceof ir?Xn(s.elements,r.elements,mt):s instanceof or&&r instanceof or?mt(s.Ie,r.Ie):s instanceof sr&&r instanceof sr}(n.transform,e.transform)}class RE{constructor(e,t){this.version=e,this.transformResults=t}}class be{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new be}static exists(e){return new be(void 0,e)}static updateTime(e){return new be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Yi{}function Nf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Xi(n.key,be.none()):new hr(n.key,n.data,be.none());{const t=n.data,s=We.empty();let r=new ye(ut.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new sn(n.key,s,new Xe(r.toArray()),be.none())}}function CE(n,e,t){n instanceof hr?function(r,i,a){const l=r.value.clone(),c=Yu(r.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof sn?function(r,i,a){if(!oi(r.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Yu(r.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(kf(r)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function zs(n,e,t,s){return n instanceof hr?function(i,a,l,c){if(!oi(i.precondition,a))return l;const h=i.value.clone(),f=Xu(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,s):n instanceof sn?function(i,a,l,c){if(!oi(i.precondition,a))return l;const h=Xu(i.fieldTransforms,c,a),f=a.data;return f.setAll(kf(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,s):function(i,a,l){return oi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function SE(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=Rf(s.transform,r||null);i!=null&&(t===null&&(t=We.empty()),t.set(s.field,i))}return t||null}function Qu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Xn(s,r,(i,a)=>AE(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class hr extends Yi{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class sn extends Yi{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function kf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Yu(n,e,t){const s=new Map;K(n.length===t.length);for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,l=e.data.field(i.field);s.set(i.field,IE(a,l,t[r]))}return s}function Xu(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,wE(i,a,e))}return s}class Xi extends Yi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Df extends Yi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bE{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&CE(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=zs(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=zs(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=wf();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(r.key)?null:l;const c=Nf(a,l);c!==null&&s.set(r.key,c),a.isValidDocument()||a.convertToNoDocument(U.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),H())}isEqual(e){return this.batchId===e.batchId&&Xn(this.mutations,e.mutations,(t,s)=>Qu(t,s))&&Xn(this.baseMutations,e.baseMutations,(t,s)=>Qu(t,s))}}class al{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){K(e.mutations.length===s.length);let r=function(){return yE}();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new al(e,t,s,r)}}/**
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
 */class PE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return"Overlay{\n      largestBatchId: ".concat(this.largestBatchId,",\n      mutation: ").concat(this.mutation.toString(),"\n    }")}}/**
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
 */class NE{constructor(e,t,s){this.alias=e,this.aggregateType=t,this.fieldPath=s}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class kE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var pe,Q;function Vf(n){switch(n){case b.OK:return M();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return M()}}function Of(n){if(n===void 0)return St("GRPC error has no .code"),b.UNKNOWN;switch(n){case pe.OK:return b.OK;case pe.CANCELLED:return b.CANCELLED;case pe.UNKNOWN:return b.UNKNOWN;case pe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case pe.INTERNAL:return b.INTERNAL;case pe.UNAVAILABLE:return b.UNAVAILABLE;case pe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case pe.NOT_FOUND:return b.NOT_FOUND;case pe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case pe.ABORTED:return b.ABORTED;case pe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case pe.DATA_LOSS:return b.DATA_LOSS;default:return M()}}(Q=pe||(pe={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const DE=new It([4294967295,4294967295],0);function Ju(n){const e=Yd().encode(n),t=new zd;return t.update(e),new Uint8Array(t.digest())}function Zu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new It([t,s],0),new It([r,i],0)]}class ll{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Us("Invalid padding: ".concat(t));if(s<0)throw new Us("Invalid hash count: ".concat(s));if(e.length>0&&this.hashCount===0)throw new Us("Invalid hash count: ".concat(s));if(e.length===0&&t!==0)throw new Us("Invalid padding when bitmap length is 0: ".concat(t));this.Ee=8*e.length-t,this.de=It.fromNumber(this.Ee)}Ae(e,t,s){let r=e.add(t.multiply(It.fromNumber(s)));return r.compare(DE)===1&&(r=new It([r.getBits(0),r.getBits(1)],0)),r.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=Ju(e),[s,r]=Zu(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(s,r,i);if(!this.Re(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ll(i,r,t);return s.forEach(l=>a.insert(l)),a}insert(e){if(this.Ee===0)return;const t=Ju(e),[s,r]=Zu(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(s,r,i);this.Ve(a)}}Ve(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ji{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,dr.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ji(U.min(),r,new me(z),bt(),H())}}class dr{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new dr(s,t,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ai{constructor(e,t,s,r){this.me=e,this.removedTargetIds=t,this.key=s,this.fe=r}}class xf{constructor(e,t){this.targetId=e,this.ge=t}}class Lf{constructor(e,t,s=Pe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class eh{constructor(){this.pe=0,this.ye=th(),this.we=Pe.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=H(),t=H(),s=H();return this.ye.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:M()}}),new dr(this.we,this.Se,e,t,s)}Me(){this.be=!1,this.ye=th()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,K(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class VE{constructor(e){this.ke=e,this.qe=new Map,this.Qe=bt(),this.$e=Xr(),this.Ue=Xr(),this.Ke=new me(z)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const s=this.He(t);switch(e.state){case 0:this.Je(t)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(t);break;case 3:this.Je(t)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),s.Ce(e.resumeToken));break;default:M()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((s,r)=>{this.Je(r)&&t(r)})}Ze(e){const t=e.targetId,s=e.ge.count,r=this.Xe(t);if(r){const i=r.target;if(Ta(i))if(s===0){const a=new L(i.path);this.ze(t,a,Ie.newNoDocument(a,U.min()))}else K(s===1);else{const a=this.et(t);if(a!==s){const l=this.tt(e),c=l?this.nt(l,e,a):1;if(c!==0){this.Ye(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,h)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,l;try{a=Yt(s).toUint8Array()}catch(c){if(c instanceof tf)return Yn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new ll(a,r,i)}catch(c){return Yn(c instanceof Us?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,t,s){return t.ge.count===s-this.st(e,t.targetId)?0:2}st(e,t){const s=this.ke.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const a=this.ke.it(),l="projects/".concat(a.projectId,"/databases/").concat(a.database,"/documents/").concat(i.path.canonicalString());e.mightContain(l)||(this.ze(t,i,null),r++)}),r}ot(e){const t=new Map;this.qe.forEach((i,a)=>{const l=this.Xe(a);if(l){if(i.current&&Ta(l.target)){const c=new L(l.target.path);this._t(c).has(a)||this.ut(a,c)||this.ze(a,c,Ie.newNoDocument(c,e))}i.ve&&(t.set(a,i.Fe()),i.Me())}});let s=H();this.Ue.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Xe(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(e));const r=new Ji(e,t,this.Ke,this.Qe,s);return this.Qe=bt(),this.$e=Xr(),this.Ue=Xr(),this.Ke=new me(z),r}Ge(e,t){if(!this.Je(e))return;const s=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,s),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,s){if(!this.Je(e))return;const r=this.He(e);this.ut(e,t)?r.xe(t,1):r.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),s&&(this.Qe=this.Qe.insert(t,s))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new eh,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new ye(z),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new ye(z),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new eh),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Xr(){return new me(L.comparator)}function th(){return new me(L.comparator)}const OE={asc:"ASCENDING",desc:"DESCENDING"},xE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LE={and:"AND",or:"OR"};class ME{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wa(n,e){return n.useProto3Json||ur(e)?e:{value:e}}function Ei(n,e){return n.useProto3Json?"".concat(new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+e.nanoseconds).slice(-9),"Z"):{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function FE(n,e){return Ei(n,e.toTimestamp())}function Ze(n){return K(!!n),U.fromTimestamp(function(t){const s=Qt(t);return new ge(s.seconds,s.nanos)}(n))}function cl(n,e){return Ia(n,e).canonicalString()}function Ia(n,e){const t=function(r){return new te(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ff(n){const e=te.fromString(n);return K(Wf(e)),e}function Ti(n,e){return cl(n.databaseId,e.path)}function js(n,e){const t=Ff(e);if(t.get(1)!==n.databaseId.projectId)throw new V(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(Bf(t))}function Uf(n,e){return cl(n.databaseId,e)}function UE(n){const e=Ff(n);return e.length===4?te.emptyPath():Bf(e)}function Aa(n){return new te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Bf(n){return K(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function nh(n,e,t){return{name:Ti(n,e),fields:t.value.mapValue.fields}}function BE(n,e){return"found"in e?function(s,r){K(!!r.found),r.found.name,r.found.updateTime;const i=js(s,r.found.name),a=Ze(r.found.updateTime),l=r.found.createTime?Ze(r.found.createTime):U.min(),c=new We({mapValue:{fields:r.found.fields}});return Ie.newFoundDocument(i,a,l,c)}(n,e):"missing"in e?function(s,r){K(!!r.missing),K(!!r.readTime);const i=js(s,r.missing),a=Ze(r.readTime);return Ie.newNoDocument(i,a)}(n,e):M()}function qE(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(K(f===void 0||typeof f=="string"),Pe.fromBase64String(f||"")):(K(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Pe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?b.UNKNOWN:Of(h.code);return new V(f,h.message||"")}(a);t=new Lf(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=js(n,s.document.name),i=Ze(s.document.updateTime),a=s.document.createTime?Ze(s.document.createTime):U.min(),l=new We({mapValue:{fields:s.document.fields}}),c=Ie.newFoundDocument(r,i,a,l),h=s.targetIds||[],f=s.removedTargetIds||[];t=new ai(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=js(n,s.document),i=s.readTime?Ze(s.readTime):U.min(),a=Ie.newNoDocument(r,i),l=s.removedTargetIds||[];t=new ai([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=js(n,s.document),i=s.removedTargetIds||[];t=new ai([],i,r,null)}else{if(!("filter"in e))return M();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new kE(r,i),l=s.targetId;t=new xf(l,a)}}return t}function qf(n,e){let t;if(e instanceof hr)t={update:nh(n,e.key,e.value)};else if(e instanceof Xi)t={delete:Ti(n,e.key)};else if(e instanceof sn)t={update:nh(n,e.key,e.data),updateMask:YE(e.fieldMask)};else{if(!(e instanceof Df))return M();t={verify:Ti(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,a){const l=a.transform;if(l instanceof sr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof rr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ir)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof or)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw M()}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:FE(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M()}(n,e.precondition)),t}function $E(n,e){return n&&n.length>0?(K(e!==void 0),n.map(t=>function(r,i){let a=r.updateTime?Ze(r.updateTime):Ze(i);return a.isEqual(U.min())&&(a=Ze(i)),new RE(a,r.transformResults||[])}(t,e))):[]}function zE(n,e){return{documents:[Uf(n,e.path)]}}function $f(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Uf(n,r);const i=function(h){if(h.length!==0)return jf(dt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Ut(m.field),direction:GE(m.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=wa(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:t,parent:r}}function jE(n,e,t,s){const{ht:r,parent:i}=$f(n,e),a={},l=[];let c=0;return t.forEach(h=>{const f="aggregate_"+c++;a[f]=h.alias,h.aggregateType==="count"?l.push({alias:f,count:{}}):h.aggregateType==="avg"?l.push({alias:f,avg:{field:Ut(h.fieldPath)}}):h.aggregateType==="sum"&&l.push({alias:f,sum:{field:Ut(h.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:l,structuredQuery:r.structuredQuery},parent:r.parent},Pt:a,parent:i}}function WE(n){let e=UE(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){K(s===1);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const m=zf(p);return m instanceof dt&&ff(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(m=>function(S){return new nr(Bn(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ur(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(p){const m=!!p.before,A=p.values||[];return new es(A,m)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const m=!p.before,A=p.values||[];return new es(A,m)}(t.endAt)),fE(e,r,a,i,l,"F",c,h)}function HE(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function zf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Bn(t.unaryFilter.field);return _e.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Bn(t.unaryFilter.field);return _e.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Bn(t.unaryFilter.field);return _e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Bn(t.unaryFilter.field);return _e.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(t){return _e.create(Bn(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return dt.create(t.compositeFilter.filters.map(s=>zf(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return M()}}(t.compositeFilter.op))}(n):M()}function GE(n){return OE[n]}function KE(n){return xE[n]}function QE(n){return LE[n]}function Ut(n){return{fieldPath:n.canonicalString()}}function Bn(n){return ut.fromServerFormat(n.fieldPath)}function jf(n){return n instanceof _e?function(t){if(t.op==="=="){if(zu(t.value))return{unaryFilter:{field:Ut(t.field),op:"IS_NAN"}};if($u(t.value))return{unaryFilter:{field:Ut(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(zu(t.value))return{unaryFilter:{field:Ut(t.field),op:"IS_NOT_NAN"}};if($u(t.value))return{unaryFilter:{field:Ut(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ut(t.field),op:KE(t.op),value:t.value}}}(n):n instanceof dt?function(t){const s=t.getFilters().map(r=>jf(r));return s.length===1?s[0]:{compositeFilter:{op:QE(t.op),filters:s}}}(n):M()}function YE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Wf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qt{constructor(e,t,s,r,i=U.min(),a=U.min(),l=Pe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class XE{constructor(e){this.Tt=e}}function JE(n){const e=WE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?yi(e,e.limit,"L"):e}/**
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
 */class ZE{constructor(){this.Tn=new eT}addToCollectionParentIndex(e,t){return this.Tn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Kt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Kt.min())}updateCollectionGroup(e,t,s){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class eT{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new ye(te.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ye(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const sh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hf=41943040;class He{static withCacheSize(e){return new He(e,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */He.DEFAULT_COLLECTION_PERCENTILE=10,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,He.DEFAULT=new He(Hf,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),He.DISABLED=new He(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ts{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new ts(0)}static Kn(){return new ts(-1)}}/**
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
 */const rh="LruGarbageCollector",tT=1048576;function ih([n,e],[t,s]){const r=z(n,t);return r===0?z(e,s):r}class nT{constructor(e){this.Hn=e,this.buffer=new ye(ih),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ih(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sT{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){x(rh,"Garbage collection scheduled in ".concat(e,"ms")),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ls(t)?x(rh,"Ignoring IndexedDB error during garbage collection: ",t):await as(t)}await this.er(3e5)})}}class rT{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return N.resolve(ji.ae);const s=new nT(t);return this.tr.forEachTarget(e,r=>s.Zn(r.sequenceNumber)).next(()=>this.tr.rr(e,r=>s.Zn(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(sh)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector","Garbage collection skipped; Cache size ".concat(s," is lower than threshold ").concat(this.params.cacheSizeCollectionThreshold)),sh):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,r,i,a,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector","Capping sequence numbers to collect down to the maximum of ".concat(this.params.maximumSequenceNumbersToCollect," from ").concat(p)),r=this.params.maximumSequenceNumbersToCollect):r=p,a=Date.now(),this.nthSequenceNumber(e,r))).next(p=>(s=p,l=Date.now(),this.removeTargets(e,s,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(p=>(h=Date.now(),Mn()<=W.DEBUG&&x("LruGarbageCollector","LRU Garbage Collection\n	Counted targets in ".concat(a-f,"ms\n	Determined least recently used ").concat(r," in ")+(l-a)+"ms\n"+"	Removed ".concat(i," targets in ")+(c-l)+"ms\n"+"	Removed ".concat(p," documents in ")+(h-c)+"ms\n"+"Total Duration: ".concat(h-f,"ms")),N.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:p})))}}function iT(n,e){return new rT(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class oT{constructor(){this.changes=new Rn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?N.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
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
 */class aT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class lT{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&zs(s.mutation,r,Xe.empty(),ge.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,H()).next(()=>s))}getLocalViewOfDocuments(e,t,s=H()){const r=fn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let a=Fs();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=fn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,H()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,s,r){let i=bt();const a=$s(),l=function(){return $s()}();return t.forEach((c,h)=>{const f=s.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof sn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),zs(f.mutation,h,f.mutation.getFieldMask(),ge.now())):a.set(h.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var p;return l.set(h,new aT(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const s=$s();let r=new me((a,l)=>a-l),i=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=s.get(c)||Xe.empty();f=l.applyToLocalView(h,f),s.set(c,f);const p=(r.get(l.batchId)||H()).add(c);r=r.insert(l.batchId,p)})}).next(()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=wf();f.forEach(m=>{if(!i.has(m)){const A=Nf(t.get(m),s.get(m));A!==null&&p.set(m,A),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return N.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):il(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):N.resolve(fn());let l=Zs,c=i;return a.next(h=>N.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,H())).next(f=>({batchId:l,changes:vf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(s=>{let r=Fs();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=Fs();return this.indexManager.getCollectionParents(e,i).next(l=>N.forEach(l,c=>{const h=function(p,m){return new An(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next(f=>{f.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Ie.newInvalidDocument(f)))});let l=Fs();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&zs(f.mutation,h,Xe.empty(),ge.now()),Ki(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class cT{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return N.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:Ze(r.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(r){return{name:r.name,query:JE(r.bundledQuery),readTime:Ze(r.readTime)}}(t)),N.resolve()}}/**
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
 */class uT{constructor(){this.overlays=new me(L.comparator),this.Rr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const s=fn();return N.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.Et(e,t,i)}),N.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Rr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(s)),N.resolve()}getOverlaysForCollection(e,t,s){const r=fn(),i=t.length+1,a=new L(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return N.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new me((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let f=i.get(h.largestBatchId);f===null&&(f=fn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=fn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=r)););return N.resolve(l)}Et(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Rr.get(r.largestBatchId).delete(s.key);this.Rr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new PE(t,s));let i=this.Rr.get(t);i===void 0&&(i=H(),this.Rr.set(t,i)),this.Rr.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class hT{constructor(){this.sessionToken=Pe.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ul{constructor(){this.Vr=new ye(ve.mr),this.gr=new ye(ve.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new ve(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new ve(e,t))}Sr(e,t){e.forEach(s=>this.removeReference(s,t))}br(e){const t=new L(new te([])),s=new ve(t,e),r=new ve(t,e+1),i=[];return this.gr.forEachInRange([s,r],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new L(new te([])),s=new ve(t,e),r=new ve(t,e+1);let i=H();return this.gr.forEachInRange([s,r],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ve(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ve{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return L.comparator(e.key,t.key)||z(e.Cr,t.Cr)}static pr(e,t){return z(e.Cr,t.Cr)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class dT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new ye(ve.mr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new bE(i,t,s,r);this.mutationQueue.push(a);for(const l of r)this.Mr=this.Mr.add(new ve(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Nr(s),i=r<0?0:r;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?el:this.Fr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ve(t,0),r=new ve(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([s,r],a=>{const l=this.Or(a.Cr);i.push(l)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ye(z);return t.forEach(r=>{const i=new ve(r,0),a=new ve(r,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{s=s.add(l.Cr)})}),N.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;L.isDocumentKey(i)||(i=i.child(""));const a=new ve(new L(i),0);let l=new ye(z);return this.Mr.forEachWhile(c=>{const h=c.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(l=l.add(c.Cr)),!0)},a),N.resolve(this.Br(l))}Br(e){const t=[];return e.forEach(s=>{const r=this.Or(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){K(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return N.forEach(t.mutations,r=>{const i=new ve(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new ve(t,0),r=this.Mr.firstAfterOrEqual(s);return N.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fT{constructor(e){this.kr=e,this.docs=function(){return new me(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return N.resolve(s?s.document.mutableCopy():Ie.newInvalidDocument(t))}getEntries(e,t){let s=bt();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ie.newInvalidDocument(r))}),N.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=bt();const a=t.path,l=new L(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||jy(zy(f),s)<=0||(r.has(f.key)||Ki(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,s,r){M()}qr(e,t){return N.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new pT(this)}getSize(e){return N.resolve(this.size)}}class pT extends oT{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Ir.addEntry(e,r)):this.Ir.removeEntry(s)}),N.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _T{constructor(e){this.persistence=e,this.Qr=new Rn(t=>nl(t),sl),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.$r=0,this.Ur=new ul,this.targetCount=0,this.Kr=ts.Un()}forEachTarget(e,t){return this.Qr.forEach((s,r)=>t(r)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),N.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new ts(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.zn(t),N.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),N.waitFor(i).next(()=>r)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return N.resolve(s)}addMatchingKeys(e,t,s){return this.Ur.yr(t,s),N.resolve()}removeMatchingKeys(e,t,s){this.Ur.Sr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(a=>{i.push(r.markPotentiallyOrphaned(e,a))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),N.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ur.vr(t);return N.resolve(s)}containsKey(e,t){return N.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Gf{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new ji(0),this.zr=!1,this.zr=!0,this.jr=new hT,this.referenceDelegate=e(this),this.Hr=new _T(this),this.indexManager=new ZE,this.remoteDocumentCache=function(r){return new fT(r)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new XE(t),this.Yr=new cT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new uT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new dT(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){x("MemoryPersistence","Starting transaction:",e);const r=new mT(this.Gr.next());return this.referenceDelegate.Zr(),s(r).next(i=>this.referenceDelegate.Xr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}ei(e,t){return N.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class mT extends Hy{constructor(e){super(),this.currentSequenceNumber=e}}class hl{constructor(e){this.persistence=e,this.ti=new ul,this.ni=null}static ri(e){return new hl(e)}get ii(){if(this.ni)return this.ni;throw M()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),N.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),N.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(r=>this.ii.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.ii.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.ii,s=>{const r=L.fromPath(s);return this.si(e,r).next(i=>{i||t.removeEntry(r,U.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return N.or([()=>N.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class vi{constructor(e,t){this.persistence=e,this.oi=new Rn(s=>Qy(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=iT(this,t)}static ri(e,t){return new vi(e,t)}Zr(){}Xr(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return N.forEach(this.oi,(s,r)=>this.ar(e,s,r).next(i=>i?N.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.qr(e,a=>this.ar(e,a,t).next(l=>{l||(s++,i.removeEntry(a,U.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),N.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),N.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ri(e.data.value)),t}ar(e,t,s){return N.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.oi.get(t);return N.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class dl{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=r}static Yi(e,t){let s=H(),r=H();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new dl(e,t.fromCache,s,r)}}/**
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
 */class gT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class yT{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return hg()?8:Gy(Qa())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.rs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,t,r,s).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new gT;return this._s(e,t,a).next(l=>{if(i.result=l,this.Xi)return this.us(e,t,a,l.size)})}).next(()=>i.result)}us(e,t,s,r){return s.documentReadCount<this.es?(Mn()<=W.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Un(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),N.resolve()):(Mn()<=W.DEBUG&&x("QueryEngine","Query:",Un(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ts*r?(Mn()<=W.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Un(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_t(t))):N.resolve())}rs(e,t){if(Gu(t))return N.resolve(null);let s=_t(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=yi(t,null,"F"),s=_t(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const a=H(...i);return this.ns.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const h=this.cs(t,l);return this.ls(t,h,a,c.readTime)?this.rs(e,yi(t,null,"F")):this.hs(e,h,t,c)}))})))}ss(e,t,s,r){return Gu(t)||r.isEqual(U.min())?N.resolve(null):this.ns.getDocuments(e,s).next(i=>{const a=this.cs(t,i);return this.ls(t,a,s,r)?N.resolve(null):(Mn()<=W.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Un(t)),this.hs(e,a,t,$y(r,Zs)).next(l=>l))})}cs(e,t){let s=new ye(Ef(e));return t.forEach((r,i)=>{Ki(e,i)&&(s=s.add(i))}),s}ls(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}_s(e,t,s){return Mn()<=W.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Un(t)),this.ns.getDocumentsMatchingQuery(e,t,Kt.min(),s)}hs(e,t,s,r){return this.ns.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const fl="LocalStore",ET=3e8;class TT{constructor(e,t,s,r){this.persistence=e,this.Ps=t,this.serializer=r,this.Ts=new me(z),this.Is=new Rn(i=>nl(i),sl),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lT(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function vT(n,e,t,s){return new TT(n,e,t,s)}async function Kf(n,e){const t=B(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const a=[],l=[];let c=H();for(const h of r){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(s,c).next(h=>({Rs:h,removedBatchIds:a,addedBatchIds:l}))})})}function wT(n,e){const t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,m=p.keys();let A=N.resolve();return m.forEach(S=>{A=A.next(()=>f.getEntry(c,S)).next(k=>{const P=h.docVersions.get(S);K(P!==null),k.version.compareTo(P)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let c=H();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Qf(n){const e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function IT(n,e){const t=B(n),s=e.snapshotVersion;let r=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.ds.newChangeBuffer({trackRemovals:!0});r=t.Ts;const l=[];e.targetChanges.forEach((f,p)=>{const m=r.get(p);if(!m)return;l.push(t.Hr.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Hr.addMatchingKeys(i,f.addedDocuments,p)));let A=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(Pe.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,s)),r=r.insert(p,A),function(k,P,q){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=ET?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(m,A,f)&&l.push(t.Hr.updateTargetData(i,A))});let c=bt(),h=H();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(AT(i,a,e.documentUpdates).next(f=>{c=f.Vs,h=f.fs})),!s.isEqual(U.min())){const f=t.Hr.getLastRemoteSnapshotVersion(i).next(p=>t.Hr.setTargetsMetadata(i,i.currentSequenceNumber,s));l.push(f)}return N.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.Ts=r,i))}function AT(n,e,t){let s=H(),r=H();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let a=bt();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(U.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):x(fl,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Vs:a,fs:r}})}function RT(n,e){const t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=el),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function CT(n,e){const t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Hr.getTargetData(s,e).next(i=>i?(r=i,N.resolve(r)):t.Hr.allocateTargetId(s).next(a=>(r=new qt(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.Hr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.Ts.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(s.targetId,s),t.Is.set(e,s.targetId)),s})}async function Ra(n,e,t){const s=B(n),r=s.Ts.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!ls(a))throw a;x(fl,"Failed to update sequence numbers for target ".concat(e,": ").concat(a))}s.Ts=s.Ts.remove(e),s.Is.delete(r.target)}function oh(n,e,t){const s=B(n);let r=U.min(),i=H();return s.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const p=B(c),m=p.Is.get(f);return m!==void 0?N.resolve(p.Ts.get(m)):p.Hr.getTargetData(h,f)}(s,a,_t(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>s.Ps.getDocumentsMatchingQuery(a,e,t?r:U.min(),t?i:H())).next(l=>(ST(s,_E(e),l),{documents:l,gs:i})))}function ST(n,e,t){let s=n.Es.get(e)||U.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Es.set(e,s)}class ah{constructor(){this.activeTargetIds=vE()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bT{constructor(){this.ho=new ah,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new ah,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class PT{To(e){}shutdown(){}}/**
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
 */const lh="ConnectivityMonitor";class ch{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){x(lh,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){x(lh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Jr=null;function Ca(){return Jr===null?Jr=function(){return 268435456+Math.round(2147483648*Math.random())}():Jr++,"0x"+Jr.toString(16)}/**
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
 */const Ko="RestConnection",NT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kT{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo="projects/".concat(s,"/databases/").concat(r),this.wo=this.databaseId.database===_i?"project_id=".concat(s):"project_id=".concat(s,"&database_id=").concat(r)}So(e,t,s,r,i){const a=Ca(),l=this.bo(e,t.toUriEncodedString());x(Ko,"Sending RPC '".concat(e,"' ").concat(a,":"),l,s);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,r,i),this.vo(e,l,c,s).then(h=>(x(Ko,"Received RPC '".concat(e,"' ").concat(a,": "),h),h),h=>{throw Yn(Ko,"RPC '".concat(e,"' ").concat(a," failed with error: "),h,"url: ",l,"request:",s),h})}Co(e,t,s,r,i,a){return this.So(e,t,s,r,i)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+os}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}bo(e,t){const s=NT[e];return"".concat(this.po,"/v1/").concat(t,":").concat(s)}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class DT{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const xe="WebChannelConnection";class VT extends kT{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,r){const i=Ca();return new Promise((a,l)=>{const c=new jd;c.setWithCredentials(!0),c.listenOnce(Wd.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case si.NO_ERROR:const f=c.getResponseJson();x(xe,"XHR for RPC '".concat(e,"' ").concat(i," received:"),JSON.stringify(f)),a(f);break;case si.TIMEOUT:x(xe,"RPC '".concat(e,"' ").concat(i," timed out")),l(new V(b.DEADLINE_EXCEEDED,"Request time out"));break;case si.HTTP_ERROR:const p=c.getStatus();if(x(xe,"RPC '".concat(e,"' ").concat(i," failed with status:"),p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const A=m==null?void 0:m.error;if(A&&A.status&&A.message){const S=function(P){const q=P.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(q)>=0?q:b.UNKNOWN}(A.status);l(new V(S,A.message))}else l(new V(b.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new V(b.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{x(xe,"RPC '".concat(e,"' ").concat(i," completed."))}});const h=JSON.stringify(r);x(xe,"RPC '".concat(e,"' ").concat(i," sending request:"),r),c.send(t,"POST",h,s,15)})}Wo(e,t,s){const r=Ca(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Kd(),l=Gd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/".concat(this.databaseId.projectId,"/databases/").concat(this.databaseId.database)},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const f=i.join("");x(xe,"Creating RPC '".concat(e,"' stream ").concat(r,": ").concat(f),c);const p=a.createWebChannel(f,c);let m=!1,A=!1;const S=new DT({Fo:P=>{A?x(xe,"Not sending because RPC '".concat(e,"' stream ").concat(r," is closed:"),P):(m||(x(xe,"Opening RPC '".concat(e,"' stream ").concat(r," transport.")),p.open(),m=!0),x(xe,"RPC '".concat(e,"' stream ").concat(r," sending:"),P),p.send(P))},Mo:()=>p.close()}),k=(P,q,$)=>{P.listen(q,F=>{try{$(F)}catch(j){setTimeout(()=>{throw j},0)}})};return k(p,Ms.EventType.OPEN,()=>{A||(x(xe,"RPC '".concat(e,"' stream ").concat(r," transport opened.")),S.Qo())}),k(p,Ms.EventType.CLOSE,()=>{A||(A=!0,x(xe,"RPC '".concat(e,"' stream ").concat(r," transport closed")),S.Uo())}),k(p,Ms.EventType.ERROR,P=>{A||(A=!0,Yn(xe,"RPC '".concat(e,"' stream ").concat(r," transport errored:"),P),S.Uo(new V(b.UNAVAILABLE,"The operation could not be completed")))}),k(p,Ms.EventType.MESSAGE,P=>{var q;if(!A){const $=P.data[0];K(!!$);const F=$,j=(F==null?void 0:F.error)||((q=F[0])===null||q===void 0?void 0:q.error);if(j){x(xe,"RPC '".concat(e,"' stream ").concat(r," received error:"),j);const Ne=j.status;let ce=function(E){const T=pe[E];if(T!==void 0)return Of(T)}(Ne),v=j.message;ce===void 0&&(ce=b.INTERNAL,v="Unknown error status: "+Ne+" with message "+j.message),A=!0,S.Uo(new V(ce,v)),p.close()}else x(xe,"RPC '".concat(e,"' stream ").concat(r," received:"),$),S.Ko($)}}),k(l,Hd.STAT_EVENT,P=>{P.stat===fa.PROXY?x(xe,"RPC '".concat(e,"' stream ").concat(r," detected buffering proxy")):P.stat===fa.NOPROXY&&x(xe,"RPC '".concat(e,"' stream ").concat(r," detected no buffering proxy"))}),setTimeout(()=>{S.$o()},0),S}}function Qo(){return typeof document<"u"?document:null}/**
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
 */function Zi(n){return new ME(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class pl{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=r,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),r=Math.max(0,t-s);r>0&&x("ExponentialBackoff","Backing off for ".concat(r," ms (base delay: ").concat(this.Ho," ms, delay with jitter: ").concat(t," ms, last attempt: ").concat(s," ms ago)")),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const uh="PersistentStream";class Yf{constructor(e,t,s,r,i,a,l,c){this.Ti=e,this.n_=s,this.r_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new pl(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(St(t.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.i_===t&&this.V_(s,r)},s=>{e(()=>{const r=new V(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(r)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(r=>{s(()=>this.m_(r))}),this.stream.onMessage(r=>{s(()=>++this.__==1?this.g_(r):this.onNext(r))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return x(uh,"close with error: ".concat(e)),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(x(uh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OT extends Yf{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=qE(this.serializer,e),s=function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Ze(a.readTime):U.min()}(e);return this.listener.p_(t,s)}y_(e){const t={};t.database=Aa(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=Ta(c)?{documents:zE(i,c)}:{query:$f(i,c).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Mf(i,a.resumeToken);const h=wa(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(U.min())>0){l.readTime=Ei(i,a.snapshotVersion.toTimestamp());const h=wa(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const s=HE(this.serializer,e);s&&(t.labels=s),this.I_(t)}w_(e){const t={};t.database=Aa(this.serializer),t.removeTarget=e,this.I_(t)}}class xT extends Yf{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return K(!!e.streamToken),this.lastStreamToken=e.streamToken,K(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){K(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=$E(e.writeResults,e.commitTime),s=Ze(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=Aa(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>qf(this.serializer,s))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class LT{}class MT extends LT{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.F_=!1}M_(){if(this.F_)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,s,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(e,Ia(t,s),r,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(b.UNKNOWN,i.toString())})}Co(e,t,s,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(e,Ia(t,s),r,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(b.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class FT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_("Connection failed 1 times. Most recent error: ".concat(e.toString())),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t="Could not reach Cloud Firestore backend. ".concat(e,"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.");this.N_?(St(t),this.N_=!1):x("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const yn="RemoteStore";class UT{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{s.enqueueAndForget(async()=>{Cn(this)&&(x(yn,"Restarting streams for network reachability change."),await async function(c){const h=B(c);h.W_.add(4),await fr(h),h.j_.set("Unknown"),h.W_.delete(4),await eo(h)}(this))})}),this.j_=new FT(s,r)}}async function eo(n){if(Cn(n))for(const e of n.G_)await e(!0)}async function fr(n){for(const e of n.G_)await e(!1)}function Xf(n,e){const t=B(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),yl(t)?gl(t):cs(t).c_()&&ml(t,e))}function _l(n,e){const t=B(n),s=cs(t);t.K_.delete(e),s.c_()&&Jf(t,e),t.K_.size===0&&(s.c_()?s.P_():Cn(t)&&t.j_.set("Unknown"))}function ml(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}cs(n).y_(e)}function Jf(n,e){n.H_.Ne(e),cs(n).w_(e)}function gl(n){n.H_=new VE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),cs(n).start(),n.j_.B_()}function yl(n){return Cn(n)&&!cs(n).u_()&&n.K_.size>0}function Cn(n){return B(n).W_.size===0}function Zf(n){n.H_=void 0}async function BT(n){n.j_.set("Online")}async function qT(n){n.K_.forEach((e,t)=>{ml(n,e)})}async function $T(n,e){Zf(n),yl(n)?(n.j_.q_(e),gl(n)):n.j_.set("Unknown")}async function zT(n,e,t){if(n.j_.set("Online"),e instanceof Lf&&e.state===2&&e.cause)try{await async function(r,i){const a=i.cause;for(const l of i.targetIds)r.K_.has(l)&&(await r.remoteSyncer.rejectListen(l,a),r.K_.delete(l),r.H_.removeTarget(l))}(n,e)}catch(s){x(yn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await wi(n,s)}else if(e instanceof ai?n.H_.We(e):e instanceof xf?n.H_.Ze(e):n.H_.je(e),!t.isEqual(U.min()))try{const s=await Qf(n.localStore);t.compareTo(s)>=0&&await function(i,a){const l=i.H_.ot(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.K_.get(h);f&&i.K_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.K_.get(c);if(!f)return;i.K_.set(c,f.withResumeToken(Pe.EMPTY_BYTE_STRING,f.snapshotVersion)),Jf(i,c);const p=new qt(f.target,c,h,f.sequenceNumber);ml(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(s){x(yn,"Failed to raise snapshot:",s),await wi(n,s)}}async function wi(n,e,t){if(!ls(e))throw e;n.W_.add(1),await fr(n),n.j_.set("Offline"),t||(t=()=>Qf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x(yn,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await eo(n)})}function ep(n,e){return e().catch(t=>wi(n,t,e))}async function to(n){const e=B(n),t=Jt(e);let s=e.U_.length>0?e.U_[e.U_.length-1].batchId:el;for(;jT(e);)try{const r=await RT(e.localStore,s);if(r===null){e.U_.length===0&&t.P_();break}s=r.batchId,WT(e,r)}catch(r){await wi(e,r)}tp(e)&&np(e)}function jT(n){return Cn(n)&&n.U_.length<10}function WT(n,e){n.U_.push(e);const t=Jt(n);t.c_()&&t.S_&&t.b_(e.mutations)}function tp(n){return Cn(n)&&!Jt(n).u_()&&n.U_.length>0}function np(n){Jt(n).start()}async function HT(n){Jt(n).C_()}async function GT(n){const e=Jt(n);for(const t of n.U_)e.b_(t.mutations)}async function KT(n,e,t){const s=n.U_.shift(),r=al.from(s,e,t);await ep(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await to(n)}async function QT(n,e){e&&Jt(n).S_&&await async function(s,r){if(function(a){return Vf(a)&&a!==b.ABORTED}(r.code)){const i=s.U_.shift();Jt(s).h_(),await ep(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await to(s)}}(n,e),tp(n)&&np(n)}async function hh(n,e){const t=B(n);t.asyncQueue.verifyOperationInProgress(),x(yn,"RemoteStore received new credentials");const s=Cn(t);t.W_.add(3),await fr(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await eo(t)}async function YT(n,e){const t=B(n);e?(t.W_.delete(2),await eo(t)):e||(t.W_.add(2),await fr(t),t.j_.set("Unknown"))}function cs(n){return n.J_||(n.J_=function(t,s,r){const i=B(t);return i.M_(),new OT(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{xo:BT.bind(null,n),No:qT.bind(null,n),Lo:$T.bind(null,n),p_:zT.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),yl(n)?gl(n):n.j_.set("Unknown")):(await n.J_.stop(),Zf(n))})),n.J_}function Jt(n){return n.Y_||(n.Y_=function(t,s,r){const i=B(t);return i.M_(),new xT(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:HT.bind(null,n),Lo:QT.bind(null,n),D_:GT.bind(null,n),v_:KT.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await to(n)):(await n.Y_.stop(),n.U_.length>0&&(x(yn,"Stopping write stream with ".concat(n.U_.length," pending writes")),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class El{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,l=new El(e,t,a,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tl(n,e){if(St("AsyncQueue","".concat(e,": ").concat(n)),ls(n))return new V(b.UNAVAILABLE,"".concat(e,": ").concat(n));throw n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Wn{static emptySet(e){return new Wn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||L.comparator(t.key,s.key):(t,s)=>L.comparator(t.key,s.key),this.keyedMap=Fs(),this.sortedSet=new me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const s=new Wn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class dh{constructor(){this.Z_=new me(L.comparator)}track(e){const t=e.doc.key,s=this.Z_.get(t);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(t):e.type===1&&s.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):M():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class ns{constructor(e,t,s,r,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new ns(e,t,Wn.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class XT{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class JT{constructor(){this.queries=fh(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const r=B(t),i=r.queries;r.queries=fh(),i.forEach((a,l)=>{for(const c of l.ta)c.onError(s)})})(this,new V(b.ABORTED,"Firestore shutting down"))}}function fh(){return new Rn(n=>yf(n),Gi)}async function sp(n,e){const t=B(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.na()&&e.ra()&&(s=2):(i=new XT,s=e.ra()?0:1);try{switch(s){case 0:i.ea=await t.onListen(r,!0);break;case 1:i.ea=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const l=Tl(a,"Initialization of query '".concat(Un(e.query),"' failed"));return void e.onError(l)}t.queries.set(r,i),i.ta.push(e),e.sa(t.onlineState),i.ea&&e.oa(i.ea)&&vl(t)}async function rp(n,e){const t=B(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.ta.indexOf(e);a>=0&&(i.ta.splice(a,1),i.ta.length===0?r=e.ra()?0:1:!i.na()&&e.ra()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function ZT(n,e){const t=B(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const l of a.ta)l.oa(r)&&(s=!0);a.ea=r}}s&&vl(t)}function ev(n,e,t){const s=B(n),r=s.queries.get(e);if(r)for(const i of r.ta)i.onError(t);s.queries.delete(e)}function vl(n){n.ia.forEach(e=>{e.next()})}var Sa,ph;(ph=Sa||(Sa={}))._a="default",ph.Cache="cache";class ip{constructor(e,t,s){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ns(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const s=t!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Sa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class op{constructor(e){this.key=e}}class ap{constructor(e){this.key=e}}class tv{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=H(),this.mutatedKeys=H(),this.ya=Ef(e),this.wa=new Wn(this.ya)}get Sa(){return this.fa}ba(e,t){const s=t?t.Da:new dh,r=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((f,p)=>{const m=r.get(f),A=Ki(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),k=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let P=!1;m&&A?m.data.isEqual(A.data)?S!==k&&(s.track({type:3,doc:A}),P=!0):this.va(m,A)||(s.track({type:2,doc:A}),P=!0,(c&&this.ya(A,c)>0||h&&this.ya(A,h)<0)&&(l=!0)):!m&&A?(s.track({type:0,doc:A}),P=!0):m&&!A&&(s.track({type:1,doc:m}),P=!0,(c||h)&&(l=!0)),P&&(A?(a=a.add(A),i=k?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{wa:a,Da:s,ls:l,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((f,p)=>function(A,S){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return k(A)-k(S)}(f.type,p.type)||this.ya(f.doc,p.doc)),this.Ca(s),r=r!=null&&r;const l=t&&!r?this.Fa():[],c=this.pa.size===0&&this.current&&!r?1:0,h=c!==this.ga;return this.ga=c,a.length!==0||h?{snapshot:new ns(this.query,e.wa,i,a,e.mutatedKeys,c===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new dh,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=H(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const t=[];return e.forEach(s=>{this.pa.has(s)||t.push(new ap(s))}),this.pa.forEach(s=>{e.has(s)||t.push(new op(s))}),t}Oa(e){this.fa=e.gs,this.pa=H();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return ns.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const wl="SyncEngine";class nv{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class sv{constructor(e){this.key=e,this.Ba=!1}}class rv{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Rn(l=>yf(l),Gi),this.qa=new Map,this.Qa=new Set,this.$a=new me(L.comparator),this.Ua=new Map,this.Ka=new ul,this.Wa={},this.Ga=new Map,this.za=ts.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function iv(n,e,t=!0){const s=fp(n);let r;const i=s.ka.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Na()):r=await lp(s,e,t,!0),r}async function ov(n,e){const t=fp(n);await lp(t,e,!0,!1)}async function lp(n,e,t,s){const r=await CT(n.localStore,_t(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return s&&(l=await av(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&Xf(n.remoteStore,r),l}async function av(n,e,t,s,r){n.Ha=(p,m,A)=>async function(k,P,q,$){let F=P.view.ba(q);F.ls&&(F=await oh(k.localStore,P.query,!1).then(({documents:v})=>P.view.ba(v,F)));const j=$&&$.targetChanges.get(P.targetId),Ne=$&&$.targetMismatches.get(P.targetId)!=null,ce=P.view.applyChanges(F,k.isPrimaryClient,j,Ne);return mh(k,P.targetId,ce.Ma),ce.snapshot}(n,p,m,A);const i=await oh(n.localStore,e,!0),a=new tv(e,i.gs),l=a.ba(i.documents),c=dr.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),h=a.applyChanges(l,n.isPrimaryClient,c);mh(n,t,h.Ma);const f=new nv(e,t,a);return n.ka.set(e,f),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),h.snapshot}async function lv(n,e,t){const s=B(n),r=s.ka.get(e),i=s.qa.get(r.targetId);if(i.length>1)return s.qa.set(r.targetId,i.filter(a=>!Gi(a,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Ra(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&_l(s.remoteStore,r.targetId),ba(s,r.targetId)}).catch(as)):(ba(s,r.targetId),await Ra(s.localStore,r.targetId,!0))}async function cv(n,e){const t=B(n),s=t.ka.get(e),r=t.qa.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),_l(t.remoteStore,s.targetId))}async function uv(n,e,t){const s=gv(n);try{const r=await function(a,l){const c=B(a),h=ge.now(),f=l.reduce((A,S)=>A.add(S.key),H());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",A=>{let S=bt(),k=H();return c.ds.getEntries(A,f).next(P=>{S=P,S.forEach((q,$)=>{$.isValidDocument()||(k=k.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(A,S)).next(P=>{p=P;const q=[];for(const $ of l){const F=SE($,p.get($.key).overlayedDocument);F!=null&&q.push(new sn($.key,F,uf(F.value.mapValue),be.exists(!0)))}return c.mutationQueue.addMutationBatch(A,h,q,l)}).next(P=>{m=P;const q=P.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(A,P.batchId,q)})}).then(()=>({batchId:m.batchId,changes:vf(p)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(a,l,c){let h=a.Wa[a.currentUser.toKey()];h||(h=new me(z)),h=h.insert(l,c),a.Wa[a.currentUser.toKey()]=h}(s,r.batchId,t),await pr(s,r.changes),await to(s.remoteStore)}catch(r){const i=Tl(r,"Failed to persist write");t.reject(i)}}async function cp(n,e){const t=B(n);try{const s=await IT(t.localStore,e);e.targetChanges.forEach((r,i)=>{const a=t.Ua.get(i);a&&(K(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?a.Ba=!0:r.modifiedDocuments.size>0?K(a.Ba):r.removedDocuments.size>0&&(K(a.Ba),a.Ba=!1))}),await pr(t,s,e)}catch(s){await as(s)}}function _h(n,e,t){const s=B(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.ka.forEach((i,a)=>{const l=a.view.sa(e);l.snapshot&&r.push(l.snapshot)}),function(a,l){const c=B(a);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const m of p.ta)m.sa(l)&&(h=!0)}),h&&vl(c)}(s.eventManager,e),r.length&&s.La.p_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hv(n,e,t){const s=B(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Ua.get(e),i=r&&r.key;if(i){let a=new me(L.comparator);a=a.insert(i,Ie.newNoDocument(i,U.min()));const l=H().add(i),c=new Ji(U.min(),new Map,new me(z),a,l);await cp(s,c),s.$a=s.$a.remove(i),s.Ua.delete(e),Il(s)}else await Ra(s.localStore,e,!1).then(()=>ba(s,e,t)).catch(as)}async function dv(n,e){const t=B(n),s=e.batch.batchId;try{const r=await wT(t.localStore,e);hp(t,s,null),up(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await pr(t,r)}catch(r){await as(r)}}async function fv(n,e,t){const s=B(n);try{const r=await function(a,l){const c=B(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(K(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(s.localStore,e);hp(s,e,t),up(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await pr(s,r)}catch(r){await as(r)}}function up(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function hp(n,e,t){const s=B(n);let r=s.Wa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Wa[s.currentUser.toKey()]=r}}function ba(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.qa.get(e))n.ka.delete(s),t&&n.La.Ja(s,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(s=>{n.Ka.containsKey(s)||dp(n,s)})}function dp(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(_l(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),Il(n))}function mh(n,e,t){for(const s of t)s instanceof op?(n.Ka.addReference(s.key,e),pv(n,s)):s instanceof ap?(x(wl,"Document no longer in limbo: "+s.key),n.Ka.removeReference(s.key,e),n.Ka.containsKey(s.key)||dp(n,s.key)):M()}function pv(n,e){const t=e.key,s=t.path.canonicalString();n.$a.get(t)||n.Qa.has(s)||(x(wl,"New document in limbo: "+t),n.Qa.add(s),Il(n))}function Il(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new L(te.fromString(e)),s=n.za.next();n.Ua.set(s,new sv(t)),n.$a=n.$a.insert(t,s),Xf(n.remoteStore,new qt(_t(rl(t.path)),s,"TargetPurposeLimboResolution",ji.ae))}}async function pr(n,e,t){const s=B(n),r=[],i=[],a=[];s.ka.isEmpty()||(s.ka.forEach((l,c)=>{a.push(s.Ha(c,e,t).then(h=>{var f;if((h||t)&&s.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;s.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){r.push(h);const p=dl.Yi(c.targetId,h);i.push(p)}}))}),await Promise.all(a),s.La.p_(r),await async function(c,h){const f=B(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>N.forEach(h,m=>N.forEach(m.Hi,A=>f.persistence.referenceDelegate.addReference(p,m.targetId,A)).next(()=>N.forEach(m.Ji,A=>f.persistence.referenceDelegate.removeReference(p,m.targetId,A)))))}catch(p){if(!ls(p))throw p;x(fl,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const A=f.Ts.get(m),S=A.snapshotVersion,k=A.withLastLimboFreeSnapshotVersion(S);f.Ts=f.Ts.insert(m,k)}}}(s.localStore,i))}async function _v(n,e){const t=B(n);if(!t.currentUser.isEqual(e)){x(wl,"User change. New user:",e.toKey());const s=await Kf(t.localStore,e);t.currentUser=e,function(i,a){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new V(b.CANCELLED,a))})}),i.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await pr(t,s.Rs)}}function mv(n,e){const t=B(n),s=t.Ua.get(e);if(s&&s.Ba)return H().add(s.key);{let r=H();const i=t.qa.get(e);if(!i)return r;for(const a of i){const l=t.ka.get(a);r=r.unionWith(l.view.Sa)}return r}}function fp(n){const e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=cp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hv.bind(null,e),e.La.p_=ZT.bind(null,e.eventManager),e.La.Ja=ev.bind(null,e.eventManager),e}function gv(n){const e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fv.bind(null,e),e}class Ii{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zi(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return vT(this.persistence,new yT,e.initialUser,this.serializer)}Xa(e){return new Gf(hl.ri,this.serializer)}Za(e){return new bT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ii.provider={build:()=>new Ii};class yv extends Ii{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){K(this.persistence.referenceDelegate instanceof vi);const s=this.persistence.referenceDelegate.garbageCollector;return new sT(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?He.withCacheSize(this.cacheSizeBytes):He.DEFAULT;return new Gf(s=>vi.ri(s,t),this.serializer)}}class Pa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>_h(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=_v.bind(null,this.syncEngine),await YT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JT}()}createDatastore(e){const t=Zi(e.databaseInfo.databaseId),s=function(i){return new VT(i)}(e.databaseInfo);return function(i,a,l,c){return new MT(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,a,l){return new UT(s,r,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>_h(this.syncEngine,t,0),function(){return ch.D()?new ch:new PT}())}createSyncEngine(e,t){return function(r,i,a,l,c,h,f){const p=new rv(r,i,a,l,c,h);return f&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=B(r);x(yn,"RemoteStore shutting down."),i.W_.add(5),await fr(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Pa.provider={build:()=>new Pa};/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */class pp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):St("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ev{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new V(b.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(r,i){const a=B(r),l={documents:i.map(p=>Ti(a.serializer,p))},c=await a.Co("BatchGetDocuments",a.serializer.databaseId,te.emptyPath(),l,i.length),h=new Map;c.forEach(p=>{const m=BE(a.serializer,p);h.set(m.key.toString(),m)});const f=[];return i.forEach(p=>{const m=h.get(p.toString());K(!!m),f.push(m)}),f}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastTransactionError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new Xi(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const r=L.fromPath(s);this.mutations.push(new Df(r,this.precondition(r)))}),await async function(s,r){const i=B(s),a={writes:r.map(l=>qf(i.serializer,l))};await i.So("Commit",i.serializer.databaseId,te.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw M();t=U.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new V(b.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(U.min())?be.exists(!1):be.updateTime(t):be.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(U.min()))throw new V(b.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return be.updateTime(t)}return be.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class Tv{constructor(e,t,s,r,i){this.asyncQueue=e,this.datastore=t,this.options=s,this.updateFunction=r,this.deferred=i,this.Tu=s.maxAttempts,this.a_=new pl(this.asyncQueue,"transaction_retry")}Iu(){this.Tu-=1,this.Eu()}Eu(){this.a_.Xo(async()=>{const e=new Ev(this.datastore),t=this.du(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(r=>{this.Au(r)}))}).catch(s=>{this.Au(s)})})}du(e){try{const t=this.updateFunction(e);return!ur(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Au(e){this.Tu>0&&this.Ru(e)?(this.Tu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Eu(),Promise.resolve()))):this.deferred.reject(e)}Ru(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Vf(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Zt="FirestoreClient";class vv{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Le.UNAUTHENTICATED,this.clientId=Xd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async a=>{x(Zt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(x(Zt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Tl(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Yo(n,e){n.asyncQueue.verifyOperationInProgress(),x(Zt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Kf(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function gh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wv(n);x(Zt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>hh(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>hh(e.remoteStore,r)),n._onlineComponents=e}async function wv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(Zt,"Using user provided OfflineComponentProvider");try{await Yo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===b.FAILED_PRECONDITION||r.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Yn("Error using user provided cache. Falling back to memory cache: "+t),await Yo(n,new Ii)}}else x(Zt,"Using default OfflineComponentProvider"),await Yo(n,new yv(void 0));return n._offlineComponents}async function Al(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(Zt,"Using user provided OnlineComponentProvider"),await gh(n,n._uninitializedComponentsProvider._online)):(x(Zt,"Using default OnlineComponentProvider"),await gh(n,new Pa))),n._onlineComponents}function Iv(n){return Al(n).then(e=>e.syncEngine)}function _p(n){return Al(n).then(e=>e.datastore)}async function mp(n){const e=await Al(n),t=e.eventManager;return t.onListen=iv.bind(null,e.syncEngine),t.onUnlisten=lv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ov.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=cv.bind(null,e.syncEngine),t}function Av(n,e,t={}){const s=new ct;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new pp({next:m=>{f.su(),a.enqueueAndForget(()=>rp(i,p));const A=m.docs.has(l);!A&&m.fromCache?h.reject(new V(b.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&m.fromCache&&c&&c.source==="server"?h.reject(new V(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new ip(rl(l.path),f,{includeMetadataChanges:!0,Ta:!0});return sp(i,p)}(await mp(n),n.asyncQueue,e,t,s)),s.promise}function Rv(n,e,t={}){const s=new ct;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new pp({next:m=>{f.su(),a.enqueueAndForget(()=>rp(i,p)),m.fromCache&&c.source==="server"?h.reject(new V(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new ip(l,f,{includeMetadataChanges:!0,Ta:!0});return sp(i,p)}(await mp(n),n.asyncQueue,e,t,s)),s.promise}function Cv(n,e,t){const s=new ct;return n.asyncQueue.enqueueAndForget(async()=>{try{const r=await _p(n);s.resolve(async function(a,l,c){var h;const f=B(a),{request:p,Pt:m,parent:A}=jE(f.serializer,pE(l),c);f.connection.fo||delete p.parent;const S=(await f.Co("RunAggregationQuery",f.serializer.databaseId,A,p,1)).filter(P=>!!P.result);K(S.length===1);const k=(h=S[0].result)===null||h===void 0?void 0:h.aggregateFields;return Object.keys(k).reduce((P,q)=>(P[m[q]]=k[q],P),{})}(r,e,t))}catch(r){s.reject(r)}}),s.promise}/**
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
 */function gp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const yh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function yp(n,e,t){if(!t)throw new V(b.INVALID_ARGUMENT,"Function ".concat(n,"() cannot be called with an empty ").concat(e,"."))}function Sv(n,e,t,s){if(e===!0&&s===!0)throw new V(b.INVALID_ARGUMENT,"".concat(n," and ").concat(t," cannot be used together."))}function Eh(n){if(!L.isDocumentKey(n))throw new V(b.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but ".concat(n," has ").concat(n.length,"."))}function Th(n){if(L.isDocumentKey(n))throw new V(b.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but ".concat(n," has ").concat(n.length,"."))}function no(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n="".concat(n.substring(0,20),"...")),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?"a custom ".concat(e," object"):"an object"}}return typeof n=="function"?"a function":M()}function tt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=no(n);throw new V(b.INVALID_ARGUMENT,"Expected type '".concat(e.name,"', but it was: ").concat(t))}}return n}function bv(n,e){if(e<=0)throw new V(b.INVALID_ARGUMENT,"Function ".concat(n,"() requires a positive number, but it was: ").concat(e,"."))}/**
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
 */const Ep="firestore.googleapis.com",vh=!0;let wh=class{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new V(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ep,this.ssl=vh}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:vh;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Hf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tT)throw new V(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gp((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new V(b.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(i.timeoutSeconds," (must not be NaN)"));if(i.timeoutSeconds<5)throw new V(b.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(i.timeoutSeconds," (minimum allowed value is 5)"));if(i.timeoutSeconds>30)throw new V(b.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(i.timeoutSeconds," (maximum allowed value is 30)"))}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}};class so{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Vy;switch(s.type){case"firstParty":return new My(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new V(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=yh.get(t);s&&(x("ComponentProvider","Removing Datastore"),yh.delete(t),s.terminate())}(this),Promise.resolve()}}function Pv(n,e,t,s={}){var r;const i=(n=tt(n,so))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:n._getEmulatorOptions()}),l="".concat(e,":").concat(t);i.host!==Ep&&i.host!==l&&Yn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:s});if(!Xs(c,a)&&(n._setSettings(c),s.mockUserToken)){let h,f;if(typeof s.mockUserToken=="string")h=s.mockUserToken,f=Le.MOCK_USER;else{h=Ka(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new V(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Le(p)}n._authCredentials=new Oy(new Qd(h,f))}}/**
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
 */let Sn=class Tp{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Tp(this.firestore,e,this._query)}};class qe{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class Wt extends Sn{constructor(e,t,s){super(e,t,rl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new L(e))}withConverter(e){return new Wt(this.firestore,e,this._path)}}function Pt(n,e,...t){if(n=Ee(n),yp("collection","path",e),n instanceof so){const s=te.fromString(e,...t);return Th(s),new Wt(n,null,s)}{if(!(n instanceof qe||n instanceof Wt))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(te.fromString(e,...t));return Th(s),new Wt(n.firestore,null,s)}}function Qe(n,e,...t){if(n=Ee(n),arguments.length===1&&(e=Xd.newId()),yp("doc","path",e),n instanceof so){const s=te.fromString(e,...t);return Eh(s),new qe(n,null,new L(s))}{if(!(n instanceof qe||n instanceof Wt))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(te.fromString(e,...t));return Eh(s),new qe(n.firestore,n instanceof Wt?n.converter:null,new L(s))}}/**
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
 */const Ih="AsyncQueue";class Ah{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new pl(this,"async_queue_retry"),this.Su=()=>{const s=Qo();s&&x(Ih,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const t=Qo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Qo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new ct;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ls(e))throw e;x(Ih,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const r=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+"\n"+a.stack),l}(s);throw St("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.pu=!1,s))));return this.bu=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const r=El.createAndSchedule(this,e,t,s,i=>this.Fu(i));return this.fu.push(r),r}Du(){this.gu&&M()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}let Vt=class extends so{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Ah,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ah(e),this._firestoreClient=void 0,await e}}};function Nv(n,e){const t=typeof n=="object"?n:Ja(),s=typeof n=="string"?n:_i,r=Xa(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Ha("firestore");i&&Pv(r,...i)}return r}function _r(n){if(n._terminated)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||kv(n),n._firestoreClient}function kv(n){var e,t,s;const r=n._freezeSettings(),i=function(l,c,h,f){return new Zy(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,gp(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new vv(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 *//**
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
 */class Dv{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class Vv{constructor(e,t,s){this._userDataWriter=t,this._data=s,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class En{constructor(e){this._byteString=e}static fromBase64String(e){try{return new En(Pe.fromBase64String(e))}catch(t){throw new V(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new En(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let mr=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */class gr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Rl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Cl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ov=/^__.*__$/;class xv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new sn(e,this.data,this.fieldMask,t,this.fieldTransforms):new hr(e,this.data,t,this.fieldTransforms)}}class vp{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new sn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function wp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Sl{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Sl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ku({path:s,Qu:!1});return r.$u(e),r}Uu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ku({path:s,Qu:!1});return r.Bu(),r}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ai(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(wp(this.Lu)&&Ov.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Lv{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Zi(e)}ju(e,t,s,r=!1){return new Sl({Lu:e,methodName:t,zu:s,path:ut.emptyPath(),Qu:!1,Gu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function us(n){const e=n._freezeSettings(),t=Zi(n._databaseId);return new Lv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function bl(n,e,t,s,r,i={}){const a=n.ju(i.merge||i.mergeFields?2:0,e,t,r);kl("Data must be an object, but it was:",a,s);const l=Cp(s,a);let c,h;if(i.merge)c=new Xe(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Na(e,p,t);if(!a.contains(m))throw new V(b.INVALID_ARGUMENT,"Field '".concat(m,"' is specified in your field mask but missing from your input data."));bp(f,m)||f.push(m)}c=new Xe(f),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new xv(new We(l),c,h)}class ro extends gr{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu("".concat(this._methodName,"() can only appear at the top level of your update data")):e.Wu("".concat(this._methodName,"() cannot be used with set() unless you pass {merge:true}"));return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ro}}class Pl extends gr{_toFieldTransform(e){return new Pf(e.path,new sr)}isEqual(e){return e instanceof Pl}}class Nl extends gr{constructor(e,t){super(e),this.Ju=t}_toFieldTransform(e){const t=new or(e.serializer,Af(e.serializer,this.Ju));return new Pf(e.path,t)}isEqual(e){return e instanceof Nl&&this.Ju===e.Ju}}function Ip(n,e,t,s){const r=n.ju(1,e,t);kl("Data must be an object, but it was:",r,s);const i=[],a=We.empty();nn(s,(c,h)=>{const f=Dl(e,c,t);h=Ee(h);const p=r.Uu(f);if(h instanceof ro)i.push(f);else{const m=yr(h,p);m!=null&&(i.push(f),a.set(f,m))}});const l=new Xe(i);return new vp(a,l,r.fieldTransforms)}function Ap(n,e,t,s,r,i){const a=n.ju(1,e,t),l=[Na(e,s,t)],c=[r];if(i.length%2!=0)throw new V(b.INVALID_ARGUMENT,"Function ".concat(e,"() needs to be called with an even number of arguments that alternate between field names and values."));for(let m=0;m<i.length;m+=2)l.push(Na(e,i[m])),c.push(i[m+1]);const h=[],f=We.empty();for(let m=l.length-1;m>=0;--m)if(!bp(h,l[m])){const A=l[m];let S=c[m];S=Ee(S);const k=a.Uu(A);if(S instanceof ro)h.push(A);else{const P=yr(S,k);P!=null&&(h.push(A),f.set(A,P))}}const p=new Xe(h);return new vp(f,p,a.fieldTransforms)}function Rp(n,e,t,s=!1){return yr(t,n.ju(s?4:3,e))}function yr(n,e){if(Sp(n=Ee(n)))return kl("Unsupported field value:",e,n),Cp(n,e);if(n instanceof gr)return function(s,r){if(!wp(r.Lu))throw r.Wu("".concat(s._methodName,"() can only be used with update() and set()"));if(!r.path)throw r.Wu("".concat(s._methodName,"() is not currently supported inside arrays"));const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,r){const i=[];let a=0;for(const l of s){let c=yr(l,r.Ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=Ee(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Af(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=ge.fromDate(s);return{timestampValue:Ei(r.serializer,i)}}if(s instanceof ge){const i=new ge(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ei(r.serializer,i)}}if(s instanceof Rl)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof En)return{bytesValue:Mf(r.serializer,s._byteString)};if(s instanceof qe){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.Wu("Document reference is for database ".concat(a.projectId,"/").concat(a.database," but should be for database ").concat(i.projectId,"/").concat(i.database));return{referenceValue:cl(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Cl)return function(a,l){return{mapValue:{fields:{[lf]:{stringValue:cf},[mi]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Wu("VectorValues must only contain numeric values.");return ol(l.serializer,h)})}}}}}}(s,r);throw r.Wu("Unsupported field value: ".concat(no(s)))}(n,e)}function Cp(n,e){const t={};return ef(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nn(n,(s,r)=>{const i=yr(r,e.qu(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function Sp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ge||n instanceof Rl||n instanceof En||n instanceof qe||n instanceof gr||n instanceof Cl)}function kl(n,e,t){if(!Sp(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const s=no(t);throw s==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+s)}}function Na(n,e,t){if((e=Ee(e))instanceof mr)return e._internalPath;if(typeof e=="string")return Dl(n,e);throw Ai("Field path arguments must be of type string or ",n,!1,void 0,t)}const Mv=new RegExp("[~\\*/\\[\\]]");function Dl(n,e,t){if(e.search(Mv)>=0)throw Ai("Invalid field path (".concat(e,"). Paths must not contain '~', '*', '/', '[', or ']'"),n,!1,void 0,t);try{return new mr(...e.split("."))._internalPath}catch(s){throw Ai("Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),n,!1,void 0,t)}}function Ai(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let l="Function ".concat(e,"() called with invalid data");t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=" in field ".concat(s)),a&&(c+=" in document ".concat(r)),c+=")"),new V(b.INVALID_ARGUMENT,l+n+c)}function bp(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class ar{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(io("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Fv extends ar{data(){return super.data()}}function io(n,e){return typeof e=="string"?Dl(n,e):e instanceof mr?e._internalPath:e._delegate._internalPath}/**
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
 */function Uv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}let Vl=class{},oo=class extends Vl{};function Er(n,e,...t){let s=[];e instanceof Vl&&s.push(e),s=s.concat(t),function(i){const a=i.filter(c=>c instanceof Ol).length,l=i.filter(c=>c instanceof ao).length;if(a>1||a>0&&l>0)throw new V(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class ao extends oo{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new ao(e,t,s)}_apply(e){const t=this._parse(e);return Np(e._query,t),new Sn(e.firestore,e.converter,va(e._query,t))}_parse(e){const t=us(e.firestore);return function(i,a,l,c,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(b.INVALID_ARGUMENT,"Invalid Query. You can't perform '".concat(f,"' queries on documentId()."));if(f==="in"||f==="not-in"){Ch(p,f);const S=[];for(const k of p)S.push(Rh(c,i,k));m={arrayValue:{values:S}}}else m=Rh(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ch(p,f),m=Rp(l,a,p,f==="in"||f==="not-in");return _e.create(h,f,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ri(n,e,t){const s=e,r=io("where",n);return ao._create(r,s,t)}class Ol extends Vl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ol(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:dt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let a=r;const l=i.getFlattenedFilters();for(const c of l)Np(a,c),a=va(a,c)}(e._query,t),new Sn(e.firestore,e.converter,va(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}let Bv=class Pp extends oo{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Pp(e,t)}_apply(e){const t=function(r,i,a){if(r.startAt!==null)throw new V(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new V(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new nr(i,a)}(e._query,this._field,this._direction);return new Sn(e.firestore,e.converter,function(r,i){const a=r.explicitOrderBy.concat([i]);return new An(r.path,r.collectionGroup,a,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}};function AS(n,e="asc"){const t=e,s=io("orderBy",n);return Bv._create(s,t)}class xl extends oo{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new xl(e,t,s)}_apply(e){return new Sn(e.firestore,e.converter,yi(e._query,this._limit,this._limitType))}}function Ll(n){return bv("limit",n),xl._create("limit",n,"F")}class Ml extends oo{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new Ml(e,t,s)}_apply(e){const t=$v(e,this.type,this._docOrFields,this._inclusive);return new Sn(e.firestore,e.converter,function(r,i){return new An(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function qv(...n){return Ml._create("startAt",n,!0)}function $v(n,e,t,s){if(t[0]=Ee(t[0]),t[0]instanceof ar)return function(i,a,l,c,h){if(!c)throw new V(b.NOT_FOUND,"Can't use a DocumentSnapshot that doesn't exist for ".concat(l,"()."));const f=[];for(const p of jn(i))if(p.field.isKeyField())f.push(gi(a,c.key));else{const m=c.data.field(p.field);if(Wi(m))throw new V(b.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const A=p.field.canonicalString();throw new V(b.INVALID_ARGUMENT,"Invalid query. You are trying to start or end a query using a document for which the field '".concat(A,"' (used as the orderBy) does not exist."))}f.push(m)}return new es(f,h)}(n._query,n.firestore._databaseId,e,t[0]._document,s);{const r=us(n.firestore);return function(a,l,c,h,f,p){const m=a.explicitOrderBy;if(f.length>m.length)throw new V(b.INVALID_ARGUMENT,"Too many arguments provided to ".concat(h,"(). The number of arguments must be less than or equal to the number of orderBy() clauses"));const A=[];for(let S=0;S<f.length;S++){const k=f[S];if(m[S].field.isKeyField()){if(typeof k!="string")throw new V(b.INVALID_ARGUMENT,"Invalid query. Expected a string for document ID in ".concat(h,"(), but got a ").concat(typeof k));if(!il(a)&&k.indexOf("/")!==-1)throw new V(b.INVALID_ARGUMENT,"Invalid query. When querying a collection and ordering by documentId(), the value passed to ".concat(h,"() must be a plain document ID, but '").concat(k,"' contains a slash."));const P=a.path.child(te.fromString(k));if(!L.isDocumentKey(P))throw new V(b.INVALID_ARGUMENT,"Invalid query. When querying a collection group and ordering by documentId(), the value passed to ".concat(h,"() must result in a valid document path, but '").concat(P,"' is not because it contains an odd number of segments."));const q=new L(P);A.push(gi(l,q))}else{const P=Rp(c,h,k);A.push(P)}}return new es(A,p)}(n._query,n.firestore._databaseId,r,e,t,s)}}function Rh(n,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new V(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!il(e)&&t.indexOf("/")!==-1)throw new V(b.INVALID_ARGUMENT,"Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '".concat(t,"' contains a '/' character."));const s=e.path.child(te.fromString(t));if(!L.isDocumentKey(s))throw new V(b.INVALID_ARGUMENT,"Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '".concat(s,"' is not because it has an odd number of segments (").concat(s.length,")."));return gi(n,new L(s))}if(t instanceof qe)return gi(n,t._key);throw new V(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ".concat(no(t),"."))}function Ch(n,e){if(!Array.isArray(n)||n.length===0)throw new V(b.INVALID_ARGUMENT,"Invalid Query. A non-empty array is required for '".concat(e.toString(),"' filters."))}function Np(n,e){const t=function(r,i){for(const a of r)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new V(b.INVALID_ARGUMENT,"Invalid query. You cannot use more than one '".concat(e.op.toString(),"' filter.")):new V(b.INVALID_ARGUMENT,"Invalid query. You cannot use '".concat(e.op.toString(),"' filters with '").concat(t.toString(),"' filters."))}class kp{convertValue(e,t="none"){switch(Xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return nn(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var t,s,r;const i=(r=(s=(t=e.fields)===null||t===void 0?void 0:t[mi].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(a=>fe(a.doubleValue));return new Cl(i)}convertGeoPoint(e){return new Rl(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Hi(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(er(e));default:return null}}convertTimestamp(e){const t=Qt(e);return new ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=te.fromString(e);K(Wf(s));const r=new af(s.get(1),s.get(3)),i=new L(s.popFirst(5));return r.isEqual(t)||St("Document ".concat(i," contains a document reference within a different database (").concat(r.projectId,"/").concat(r.database,") which is not supported. It will be treated as a reference in the current database (").concat(t.projectId,"/").concat(t.database,") instead.")),i}}/**
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
 */function Fl(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class zv extends kp{constructor(e){super(),this.firestore=e}convertBytes(e){return new En(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}function jv(){return new Dv("count")}/**
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
 */class qn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ul extends ar{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new li(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(io("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class li extends Ul{data(e={}){return super.data(e)}}class Wv{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new qn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new li(this._firestore,this._userDataWriter,s.key,s,new qn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(l=>{const c=new li(r._firestore,r._userDataWriter,l.doc.key,l.doc,new qn(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new li(r._firestore,r._userDataWriter,l.doc.key,l.doc,new qn(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:Hv(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Hv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}/**
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
 */function Gv(n){n=tt(n,qe);const e=tt(n.firestore,Vt);return Av(_r(e),n._key).then(t=>Qv(e,n,t))}class lo extends kp{constructor(e){super(),this.firestore=e}convertBytes(e){return new En(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}function Tr(n){n=tt(n,Sn);const e=tt(n.firestore,Vt),t=_r(e),s=new lo(e);return Uv(n._query),Rv(t,n._query).then(r=>new Wv(e,s,n,r))}function Kv(n,e,t){n=tt(n,qe);const s=tt(n.firestore,Vt),r=Fl(n.converter,e,t);return co(s,[bl(us(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,be.none())])}function vr(n,e,t,...s){n=tt(n,qe);const r=tt(n.firestore,Vt),i=us(r);let a;return a=typeof(e=Ee(e))=="string"||e instanceof mr?Ap(i,"updateDoc",n._key,e,t,s):Ip(i,"updateDoc",n._key,e),co(r,[a.toMutation(n._key,be.exists(!0))])}function Ci(n){return co(tt(n.firestore,Vt),[new Xi(n._key,be.none())])}function Bl(n,e){const t=tt(n.firestore,Vt),s=Qe(n),r=Fl(n.converter,e);return co(t,[bl(us(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,be.exists(!1))]).then(()=>s)}function co(n,e){return function(s,r){const i=new ct;return s.asyncQueue.enqueueAndForget(async()=>uv(await Iv(s),r,i)),i.promise}(_r(n),e)}function Qv(n,e,t){const s=t.docs.get(e._key),r=new lo(n);return new Ul(n,r,e._key,s,new qn(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */function RS(n){return Yv(n,{count:jv()})}function Yv(n,e){const t=tt(n.firestore,Vt),s=_r(t),r=Xy(e,(i,a)=>new NE(a,i.aggregateType,i._internalFieldPath));return Cv(s,n._query,r).then(i=>function(l,c,h){const f=new lo(l);return new Vv(c,f,h)}(t,n,i))}/**
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
 */const Xv={maxAttempts:5};function Bs(n,e){if((n=Ee(n)).firestore!==e)throw new V(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class Jv{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=us(e)}get(e){const t=Bs(e,this._firestore),s=new zv(this._firestore);return this._transaction.lookup([t._key]).then(r=>{if(!r||r.length!==1)return M();const i=r[0];if(i.isFoundDocument())return new ar(this._firestore,s,i.key,i,t.converter);if(i.isNoDocument())return new ar(this._firestore,s,t._key,null,t.converter);throw M()})}set(e,t,s){const r=Bs(e,this._firestore),i=Fl(r.converter,t,s),a=bl(this._dataReader,"Transaction.set",r._key,i,r.converter!==null,s);return this._transaction.set(r._key,a),this}update(e,t,s,...r){const i=Bs(e,this._firestore);let a;return a=typeof(t=Ee(t))=="string"||t instanceof mr?Ap(this._dataReader,"Transaction.update",i._key,t,s,r):Ip(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,a),this}delete(e){const t=Bs(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */class Zv extends Jv{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Bs(e,this._firestore),s=new lo(this._firestore);return super.get(e).then(r=>new Ul(this._firestore,s,t._key,r._document,new qn(!1,!1),t.converter))}}function Sh(n,e,t){n=tt(n,Vt);const s=Object.assign(Object.assign({},Xv),t);return function(i){if(i.maxAttempts<1)throw new V(b.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(i,a,l){const c=new ct;return i.asyncQueue.enqueueAndForget(async()=>{const h=await _p(i);new Tv(i.asyncQueue,h,l,a,c).Iu()}),c.promise}(_r(n),r=>e(new Zv(n,r)),s)}function Si(){return new Pl("serverTimestamp")}function Nt(n){return new Nl("increment",n)}(function(e,t=!0){(function(r){os=r})(zi),mn(new Gt("firestore",(s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),l=new Vt(new xy(s.getProvider("auth-internal")),new Fy(a,s.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new V(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new af(h.options.projectId,f)}(a,r),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),rt(Nu,ku,e),rt(Nu,ku,"esm2017")})();const bh=n=>{let e;const t=new Set,s=(h,f)=>{const p=typeof h=="function"?h(e):h;if(!Object.is(p,e)){const m=e;e=(f!=null?f:typeof p!="object"||p===null)?p:Object.assign({},e,p),t.forEach(A=>A(e,m))}},r=()=>e,l={setState:s,getState:r,getInitialState:()=>c,subscribe:h=>(t.add(h),()=>t.delete(h))},c=e=n(s,r,l);return l},ew=n=>n?bh(n):bh,tw=n=>n;function nw(n,e=tw){const t=gu.useSyncExternalStore(n.subscribe,()=>e(n.getState()),()=>e(n.getInitialState()));return gu.useDebugValue(t),t}const Ph=n=>{const e=ew(n),t=s=>nw(e,s);return Object.assign(t,e),t},sw=n=>n?Ph(n):Ph;var rw="firebase",iw="11.6.0";/**
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
 */rt(rw,iw,"app");var Nh={};const kh="@firebase/database",Dh="1.0.14";/**
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
 */let Dp="";function ow(n){Dp=n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class aw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Se(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ys(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class lw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Dt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Vp=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new aw(e)}}catch(e){}return new lw},pn=Vp("localStorage"),cw=Vp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Hn=new qi("@firebase/database"),uw=function(){let n=1;return function(){return n++}}(),Op=function(n){const e=Ag(n),t=new Tg;t.update(e);const s=t.digest();return Wa.encodeByteArray(s)},wr=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=wr.apply(null,s):typeof s=="object"?e+=Se(s):e+=s,e+=" "}return e};let Ws=null,Vh=!0;const hw=function(n,e){O(!0,"Can't turn on custom loggers persistently."),Hn.logLevel=W.VERBOSE,Ws=Hn.log.bind(Hn)},Me=function(...n){if(Vh===!0&&(Vh=!1,Ws===null&&cw.get("logging_enabled")===!0&&hw()),Ws){const e=wr.apply(null,n);Ws(e)}},Ir=function(n){return function(...e){Me(n,...e)}},ka=function(...n){const e="FIREBASE INTERNAL ERROR: "+wr(...n);Hn.error(e)},kt=function(...n){const e="FIREBASE FATAL ERROR: ".concat(wr(...n));throw Hn.error(e),new Error(e)},et=function(...n){const e="FIREBASE WARNING: "+wr(...n);Hn.warn(e)},dw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xp=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},fw=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ss="[MIN_NAME]",Tn="[MAX_NAME]",hs=function(n,e){if(n===e)return 0;if(n===ss||e===Tn)return-1;if(e===ss||n===Tn)return 1;{const t=Oh(n),s=Oh(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},pw=function(n,e){return n===e?0:n<e?-1:1},Ds=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Se(e))},ql=function(n){if(typeof n!="object"||n===null)return Se(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Se(e[s]),t+=":",t+=ql(n[e[s]]);return t+="}",t},Lp=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let r=0;r<t;r+=e)r+e>t?s.push(n.substring(r,t)):s.push(n.substring(r,r+e));return s};function it(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Mp=function(n){O(!xp(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let r,i,a,l,c;n===0?(i=0,a=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),i=l+s,a=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(i=0,a=Math.round(n/Math.pow(2,1-s-t))));const h=[];for(c=t;c;c-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(c=e;c;c-=1)h.push(i%2?1:0),i=Math.floor(i/2);h.push(r?1:0),h.reverse();const f=h.join("");let p="";for(c=0;c<64;c+=8){let m=parseInt(f.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},_w=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},mw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},gw=new RegExp("^-?(0*)\\d{1,10}$"),yw=-2147483648,Ew=2147483647,Oh=function(n){if(gw.test(n)){const e=Number(n);if(e>=yw&&e<=Ew)return e}return null},Ar=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw et("Exception was thrown by user callback.",t),e},Math.floor(0))}},Tw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Hs=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class vw{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,$i(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){et('Provided AppCheck credentials for the app named "'.concat(this.appName,'" are invalid. This usually indicates your app was not initialized correctly.'))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ww{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(e)}}class ci{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ci.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const $l="5",Fp="v",Up="s",Bp="r",qp="f",$p=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zp="ls",jp="p",Da="ac",Wp="websocket",Hp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Gp{constructor(e,t,s,r,i=!1,a="",l=!1,c=!1,h=null){this.secure=t,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=a,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}function Iw(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Kp(n,e,t){O(typeof e=="string","typeof type must == string"),O(typeof t=="object","typeof params must == object");let s;if(e===Wp)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Hp)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Iw(n)&&(t.ns=n.namespace);const r=[];return it(t,(i,a)=>{r.push(i+"="+a)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Aw{constructor(){this.counters_={}}incrementCounter(e,t=1){Dt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return tg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Xo={},Jo={};function zl(n){const e=n.toString();return Xo[e]||(Xo[e]=new Aw),Xo[e]}function Rw(n,e){const t=n.toString();return Jo[t]||(Jo[t]=e()),Jo[t]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Cw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Ar(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const xh="start",Sw="close",bw="pLPCommand",Pw="pRTLPCB",Qp="id",Yp="pw",Xp="ser",Nw="cb",kw="seg",Dw="ts",Vw="d",Ow="dframe",Jp=1870,Zp=30,xw=Jp-Zp,Lw=25e3,Mw=3e4;class $n{constructor(e,t,s,r,i,a,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=a,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ir(e),this.stats_=zl(t),this.urlFn=c=>(this.appCheckToken&&(c[Da]=this.appCheckToken),Kp(t,Hp,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Cw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Mw)),fw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jl((...i)=>{const[a,l,c,h,f]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===xh)this.id=l,this.password=c;else if(a===Sw)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...i)=>{const[a,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(a,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[xh]="t",s[Xp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Nw]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Fp]=$l,this.transportSessionId&&(s[Up]=this.transportSessionId),this.lastSessionId&&(s[zp]=this.lastSessionId),this.applicationId&&(s[jp]=this.applicationId),this.appCheckToken&&(s[Da]=this.appCheckToken),typeof location<"u"&&location.hostname&&$p.test(location.hostname)&&(s[Bp]=qp);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$n.forceAllow_=!0}static forceDisallow(){$n.forceDisallow_=!0}static isAvailable(){return $n.forceAllow_?!0:!$n.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_w()&&!mw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Se(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Dd(t),r=Lp(s,xw);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ow]="t",s[Qp]=e,s[Yp]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Se(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class jl{constructor(e,t,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=uw(),window[bw+this.uniqueCallbackIdentifier]=e,window[Pw+this.uniqueCallbackIdentifier]=t,this.myIFrame=jl.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){Me("frame writing exception"),l.stack&&Me(l.stack),Me(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Me("No IE domain setting required")}catch(t){const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Qp]=this.myID,e[Yp]=this.myPW,e[Xp]=this.currentSerial;let t=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zp+s.length<=Jp;){const a=this.pendingSegs.shift();s=s+"&"+kw+r+"="+a.seg+"&"+Dw+r+"="+a.ts+"&"+Vw+r+"="+a.d,r++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(s,Math.floor(Lw)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch(s){}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Fw=16384,Uw=45e3;let bi=null;typeof MozWebSocket<"u"?bi=MozWebSocket:typeof WebSocket<"u"&&(bi=WebSocket);class at{constructor(e,t,s,r,i,a,l){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ir(this.connId),this.stats_=zl(t),this.connURL=at.connectionURL_(t,a,l,r,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,r,i){const a={};return a[Fp]=$l,typeof location<"u"&&location.hostname&&$p.test(location.hostname)&&(a[Bp]=qp),t&&(a[Up]=t),s&&(a[zp]=s),r&&(a[Da]=r),i&&(a[jp]=i),Kp(e,Wp,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pn.set("previous_websocket_failure",!0);try{let s;ug(),this.mySock=new bi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&bi!==null&&!at.forceDisallow_}static previouslyFailed(){return pn.isInMemoryStorage||pn.get("previous_websocket_failure")===!0}markConnectionHealthy(){pn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Ys(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Se(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Lp(t,Fw);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Uw))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class lr{static get ALL_TRANSPORTS(){return[$n,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=at&&at.isAvailable();let s=t&&!at.previouslyFailed();if(e.webSocketOnly&&(t||et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[at];else{const r=this.transports_=[];for(const i of lr.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);lr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}lr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Bw=6e4,qw=5e3,$w=10*1024,zw=100*1024,Zo="t",Lh="d",jw="s",Mh="r",Ww="e",Fh="o",Uh="a",Bh="n",qh="p",Hw="h";class Gw{constructor(e,t,s,r,i,a,l,c,h,f){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=a,this.onReady_=l,this.onDisconnect_=c,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ir("c:"+this.id+":"),this.transportManager_=new lr(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Hs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$w?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zo in e){const t=e[Zo];t===Uh?this.upgradeIfSecondaryHealthy_():t===Mh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Fh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ds("t",e),s=Ds("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ds("t",e),s=Ds("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ds(Zo,e);if(Lh in e){const s=e[Lh];if(t===Hw){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===Bh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===jw?this.onConnectionShutdown_(s):t===Mh?this.onReset_(s):t===Ww?ka("Server Error: "+s):t===Fh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ka("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),$l!==s&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Hs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Bw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Hs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class e_{put(e,t,s,r){}merge(e,t,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class t_{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const r=this.getInitialEvent(e);r&&t.apply(s,r)}off(e,t,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){O(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Pi extends t_{static getInstance(){return new Pi}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const $h=32,zh=768;class ae{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ne(){return new ae("")}function X(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function en(n){return n.pieces_.length-n.pieceNum_}function oe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ae(n.pieces_,e)}function n_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Kw(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function s_(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function r_(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ae(e,0)}function Re(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof ae)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&t.push(s[r])}return new ae(t,0)}function G(n){return n.pieceNum_>=n.pieces_.length}function st(n,e){const t=X(n),s=X(e);if(t===null)return e;if(t===s)return st(oe(n),oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function i_(n,e){if(en(n)!==en(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function lt(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(en(n)>en(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Qw{constructor(e,t){this.errorPrefix_=t,this.parts_=s_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Bi(this.parts_[s]);o_(this)}}function Yw(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Bi(e),o_(n)}function Xw(n){const e=n.parts_.pop();n.byteLength_-=Bi(e),n.parts_.length>0&&(n.byteLength_-=1)}function o_(n){if(n.byteLength_>zh)throw new Error(n.errorPrefix_+"has a key path longer than "+zh+" bytes ("+n.byteLength_+").");if(n.parts_.length>$h)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$h+") or object contains a cycle "+un(n))}function un(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Wl extends t_{static getInstance(){return new Wl}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Vs=1e3,Jw=60*5*1e3,jh=30*1e3,Zw=1.3,eI=3e4,tI="server_kill",Wh=3;class At extends e_{constructor(e,t,s,r,i,a,l,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=a,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=At.nextPersistentConnectionId_++,this.log_=Ir("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Vs,this.maxReconnectDelay_=Jw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Pi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const r=++this.requestNumber_,i={r,a:e,b:t};this.log_(Se(i)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const t=new Ga,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const l=a.d;a.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,s,r){this.initConnection_();const i=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+i),this.listens.has(a)||this.listens.set(a,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(a).has(i),"listen() called twice for same path/queryId.");const l={onComplete:r,hashFn:t,query:e,tag:s};this.listens.get(a).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},a="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(a,i,l=>{const c=l.d,h=l.s;At.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",l),h!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(h,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Dt(e,"w")){const s=Qn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();et("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ".concat(r," at ").concat(i," to your security rules for better performance."))}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=gg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,r=>{const i=r.s,a=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,t)}sendUnlisten_(e,t,s,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},a="n";r&&(i.q=s,i.t=r),this.sendRequest(a,i)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,r){const i={p:t,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,a=>{r&&setTimeout(()=>{r(a.s,a.d)},Math.floor(0))})}put(e,t,s,r){this.putInternal("p",e,t,s,r)}merge(e,t,s,r){this.putInternal("m",e,t,s,r)}putInternal(e,t,s,r,i){this.initConnection_();const a={p:t,d:s};i!==void 0&&(a.h=i),this.outstandingPuts_.push({action:e,request:a,onComplete:r}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Se(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ka("Unrecognized action received from server: "+Se(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Vs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Vs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>eI&&(this.reconnectDelay_=Vs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Zw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+At.nextConnectionId_++,i=this.lastSessionId;let a=!1,l=null;const c=function(){l?l.close():(a=!0,s())},h=function(p){O(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:h};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);a?Me("getToken() completed but was canceled"):(Me("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,l=new Gw(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,A=>{et(A+" ("+this.repoInfo_.toString()+")"),this.interrupt(tI)},i))}catch(p){this.log_("Failed to get token: "+p),a||(this.repoInfo_.nodeAdmin&&et(p),c())}}}interrupt(e){Me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Eu(this.interruptReasons_)&&(this.reconnectDelay_=Vs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(i=>ql(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const s=new ae(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(t),i.delete(t),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,t){Me("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wh&&(this.reconnectDelay_=jh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Me("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Dp.replace(/\./g,"-")]=1,xd()?e["framework.cordova"]=1:cg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Pi.getInstance().currentlyOnline();return Eu(this.interruptReasons_)&&e}}At.nextPersistentConnectionId_=0;At.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class J{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new J(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class uo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new J(ss,e),r=new J(ss,t);return this.compare(s,r)!==0}minPost(){return J.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Zr;class a_ extends uo{static get __EMPTY_NODE(){return Zr}static set __EMPTY_NODE(e){Zr=e}compare(e,t){return hs(e.name,t.name)}isDefinedOn(e){throw is("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return J.MIN}maxPost(){return new J(Tn,Zr)}makePost(e,t){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new J(e,Zr)}toString(){return".key"}}const Gn=new a_;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ei{constructor(e,t,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?s(e.key,t):1,r&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s!=null?s:we.RED,this.left=r!=null?r:Ke.EMPTY_NODE,this.right=i!=null?i:Ke.EMPTY_NODE}copy(e,t,s,r,i){return new we(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,r;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class nI{copy(e,t,s,r,i){return this}insert(e,t,s){return new we(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,t=Ke.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ke(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,r=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ei(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ei(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ei(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ei(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new nI;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function sI(n,e){return hs(n.name,e.name)}function Hl(n,e){return hs(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Va;function rI(n){Va=n}const l_=function(n){return typeof n=="number"?"number:"+Mp(n):"string:"+n},c_=function(n){if(n.isLeafNode()){const e=n.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Dt(e,".sv"),"Priority must be a string or number.")}else O(n===Va||n.isEmpty(),"priority of unexpected type.");O(n===Va||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Hh;class Te{static set __childrenNodeConstructor(e){Hh=e}static get __childrenNodeConstructor(){return Hh}constructor(e,t=Te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),c_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:X(e)===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=X(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||en(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Te.__childrenNodeConstructor.EMPTY_NODE.updateChild(oe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+l_(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Mp(this.value_):e+=this.value_,this.lazyHash_=Op(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Te.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,r=Te.VALUE_TYPE_ORDER.indexOf(t),i=Te.VALUE_TYPE_ORDER.indexOf(s);return O(r>=0,"Unknown leaf type: "+t),O(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
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
 */let u_,h_;function iI(n){u_=n}function oI(n){h_=n}class aI extends uo{compare(e,t){const s=e.node.getPriority(),r=t.node.getPriority(),i=s.compareTo(r);return i===0?hs(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return J.MIN}maxPost(){return new J(Tn,new Te("[PRIORITY-POST]",h_))}makePost(e,t){const s=u_(e);return new J(t,new Te("[PRIORITY-POST]",s))}toString(){return".priority"}}const Be=new aI;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const lI=Math.log(2);class cI{constructor(e){const t=i=>parseInt(Math.log(i)/lI,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ni=function(n,e,t,s){n.sort(e);const r=function(c,h){const f=h-c;let p,m;if(f===0)return null;if(f===1)return p=n[c],m=t?t(p):p,new we(m,p.node,we.BLACK,null,null);{const A=parseInt(f/2,10)+c,S=r(c,A),k=r(A+1,h);return p=n[A],m=t?t(p):p,new we(m,p.node,we.BLACK,S,k)}},i=function(c){let h=null,f=null,p=n.length;const m=function(S,k){const P=p-S,q=p;p-=S;const $=r(P+1,q),F=n[P],j=t?t(F):F;A(new we(j,F.node,k,null,$))},A=function(S){h?(h.left=S,h=S):(f=S,h=S)};for(let S=0;S<c.count;++S){const k=c.nextBitIsOne(),P=Math.pow(2,c.count-(S+1));k?m(P,we.BLACK):(m(P,we.BLACK),m(P,we.RED))}return f},a=new cI(n.length),l=i(a);return new Ke(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */let ea;const xn={};class wt{static get Default(){return O(xn&&Be,"ChildrenNode.ts has not been loaded"),ea=ea||new wt({".priority":xn},{".priority":Be}),ea}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Qn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ke?t:null}hasIndex(e){return Dt(this.indexSet_,e.toString())}addIndex(e,t){O(e!==Gn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=t.getIterator(J.Wrap);let a=i.getNext();for(;a;)r=r||e.isDefinedOn(a.node),s.push(a),a=i.getNext();let l;r?l=Ni(s,e.getCompare()):l=xn;const c=e.toString(),h=Object.assign({},this.indexSet_);h[c]=e;const f=Object.assign({},this.indexes_);return f[c]=l,new wt(f,h)}addToIndexes(e,t){const s=di(this.indexes_,(r,i)=>{const a=Qn(this.indexSet_,i);if(O(a,"Missing index implementation for "+i),r===xn)if(a.isDefinedOn(e.node)){const l=[],c=t.getIterator(J.Wrap);let h=c.getNext();for(;h;)h.name!==e.name&&l.push(h),h=c.getNext();return l.push(e),Ni(l,a.getCompare())}else return xn;else{const l=t.get(e.name);let c=r;return l&&(c=c.remove(new J(e.name,l))),c.insert(e,e.node)}});return new wt(s,this.indexSet_)}removeFromIndexes(e,t){const s=di(this.indexes_,r=>{if(r===xn)return r;{const i=t.get(e.name);return i?r.remove(new J(e.name,i)):r}});return new wt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Os;class ee{static get EMPTY_NODE(){return Os||(Os=new ee(new Ke(Hl),null,wt.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&c_(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Os}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Os:t}}getChild(e){const t=X(e);return t===null?this:this.getImmediateChild(t).getChild(oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(O(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new J(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(s,this.children_));const a=r.isEmpty()?Os:this.priorityNode_;return new ee(r,a,i)}}updateChild(e,t){const s=X(e);if(s===null)return t;{O(X(e)!==".priority"||en(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(oe(e),t);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,r=0,i=!0;if(this.forEachChild(Be,(a,l)=>{t[a]=l.val(e),s++,i&&ee.INTEGER_REGEXP_.test(a)?r=Math.max(r,Number(a)):i=!1}),!e&&i&&r<2*s){const a=[];for(const l in t)a[l]=t[l];return a}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+l_(this.getPriority().val())+":"),this.forEachChild(Be,(t,s)=>{const r=s.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":Op(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new J(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new J(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new J(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,J.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,J.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Rr?-1:0}withIndex(e){if(e===Gn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Gn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Be),r=t.getIterator(Be);let i=s.getNext(),a=r.getNext();for(;i&&a;){if(i.name!==a.name||!i.node.equals(a.node))return!1;i=s.getNext(),a=r.getNext()}return i===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===Gn?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class uI extends ee{constructor(){super(new Ke(Hl),ee.EMPTY_NODE,wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const Rr=new uI;Object.defineProperties(J,{MIN:{value:new J(ss,ee.EMPTY_NODE)},MAX:{value:new J(Tn,Rr)}});a_.__EMPTY_NODE=ee.EMPTY_NODE;Te.__childrenNodeConstructor=ee;rI(Rr);oI(Rr);/**
 * @license
 * Copyright 2017 Google LLC
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
 */const hI=!0;function Fe(n,e=null){if(n===null)return ee.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Te(t,Fe(e))}if(!(n instanceof Array)&&hI){const t=[];let s=!1;if(it(n,(a,l)=>{if(a.substring(0,1)!=="."){const c=Fe(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new J(a,c)))}}),t.length===0)return ee.EMPTY_NODE;const i=Ni(t,sI,a=>a.name,Hl);if(s){const a=Ni(t,Be.getCompare());return new ee(i,Fe(e),new wt({".priority":a},{".priority":Be}))}else return new ee(i,Fe(e),wt.Default)}else{let t=ee.EMPTY_NODE;return it(n,(s,r)=>{if(Dt(n,s)&&s.substring(0,1)!=="."){const i=Fe(r);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(s,i))}}),t.updatePriority(Fe(e))}}iI(Fe);/**
 * @license
 * Copyright 2017 Google LLC
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
 */class dI extends uo{constructor(e){super(),this.indexPath_=e,O(!G(e)&&X(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),r=this.extractChild(t.node),i=s.compareTo(r);return i===0?hs(e.name,t.name):i}makePost(e,t){const s=Fe(e),r=ee.EMPTY_NODE.updateChild(this.indexPath_,s);return new J(t,r)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,Rr);return new J(Tn,e)}toString(){return s_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fI extends uo{compare(e,t){const s=e.node.compareTo(t.node);return s===0?hs(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return J.MIN}maxPost(){return J.MAX}makePost(e,t){const s=Fe(e);return new J(t,s)}toString(){return".value"}}const pI=new fI;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function _I(n){return{type:"value",snapshotNode:n}}function mI(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function gI(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Gh(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function yI(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Gl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ss}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Tn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Be}copy(){const e=new Gl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Kh(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Be?t="$priority":n.index_===pI?t="$value":n.index_===Gn?t="$key":(O(n.index_ instanceof dI,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Se(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Se(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Se(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Se(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Se(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Qh(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Be&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ki extends e_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=Ir("p:rest:"),this.listens_={}}listen(e,t,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const a=ki.getListenId_(e,s),l={};this.listens_[a]=l;const c=Kh(e._queryParams);this.restRequest_(i+".json",c,(h,f)=>{let p=f;if(h===404&&(p=null,h=null),h===null&&this.onDataUpdate_(i,p,!1,s),Qn(this.listens_,a)===l){let m;h?h===401?m="permission_denied":m="rest_error:"+h:m="ok",r(m,null)}})}unlisten(e,t){const s=ki.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Kh(e._queryParams),s=e._path.toString(),r=new Ga;return this.restRequest_(s+".json",t,(i,a)=>{let l=a;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(s,l,!1,null),r.resolve(l)):r.reject(new Error(l))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Eg(t);this.log_("Sending REST request for "+a);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+a+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Ys(l.responseText)}catch(h){et("Failed to parse JSON response for "+a+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&et("Got unsuccessful REST response for "+a+" Status: "+l.status),s(l.status);s=null}},l.open("GET",a,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class EI{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Di(){return{value:null,children:new Map}}function d_(n,e,t){if(G(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=X(e);n.children.has(s)||n.children.set(s,Di());const r=n.children.get(s);e=oe(e),d_(r,e,t)}}function Oa(n,e,t){n.value!==null?t(e,n.value):TI(n,(s,r)=>{const i=new ae(e.toString()+"/"+s);Oa(r,i,t)})}function TI(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class vI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&it(this.last_,(s,r)=>{t[s]=t[s]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Yh=10*1e3,wI=30*1e3,II=5*60*1e3;class AI{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new vI(e);const s=Yh+(wI-Yh)*Math.random();Hs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;it(e,(r,i)=>{i>0&&Dt(this.statsToReport_,r)&&(t[r]=i,s=!0)}),s&&this.server_.reportStats(t),Hs(this.reportStats_.bind(this),Math.floor(Math.random()*2*II))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var ft;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ft||(ft={}));function f_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function p_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function __(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Vi{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ft.ACK_USER_WRITE,this.source=f_()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ae(e));return new Vi(ne(),t,this.revert)}}else return O(X(this.path)===e,"operationForChild called for unrelated child."),new Vi(oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class vn{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ft.OVERWRITE}operationForChild(e){return G(this.path)?new vn(this.source,ne(),this.snap.getImmediateChild(e)):new vn(this.source,oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class cr{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ft.MERGE}operationForChild(e){if(G(this.path)){const t=this.children.subtree(new ae(e));return t.isEmpty()?null:t.value?new vn(this.source,ne(),t.value):new cr(this.source,ne(),t)}else return O(X(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new cr(this.source,oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Kl{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const t=X(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function RI(n,e,t,s){const r=[],i=[];return e.forEach(a=>{a.type==="child_changed"&&n.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&i.push(yI(a.childName,a.snapshotNode))}),xs(n,r,"child_removed",e,s,t),xs(n,r,"child_added",e,s,t),xs(n,r,"child_moved",i,s,t),xs(n,r,"child_changed",e,s,t),xs(n,r,"value",e,s,t),r}function xs(n,e,t,s,r,i){const a=s.filter(l=>l.type===t);a.sort((l,c)=>SI(n,l,c)),a.forEach(l=>{const c=CI(n,l,i);r.forEach(h=>{h.respondsTo(l.type)&&e.push(h.createEvent(c,n.query_))})})}function CI(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function SI(n,e,t){if(e.childName==null||t.childName==null)throw is("Should only compare child_ events.");const s=new J(e.childName,e.snapshotNode),r=new J(t.childName,t.snapshotNode);return n.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function m_(n,e){return{eventCache:n,serverCache:e}}function Gs(n,e,t,s){return m_(new Kl(e,t,s),n.serverCache)}function g_(n,e,t,s){return m_(n.eventCache,new Kl(e,t,s))}function xa(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function wn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let ta;const bI=()=>(ta||(ta=new Ke(pw)),ta);class ie{static fromObject(e){let t=new ie(null);return it(e,(s,r)=>{t=t.set(new ae(s),r)}),t}constructor(e,t=bI()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ne(),value:this.value};if(G(e))return null;{const s=X(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(oe(e),t);return i!=null?{path:Re(new ae(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const t=X(e),s=this.children.get(t);return s!==null?s.subtree(oe(e)):new ie(null)}}set(e,t){if(G(e))return new ie(t,this.children);{const s=X(e),i=(this.children.get(s)||new ie(null)).set(oe(e),t),a=this.children.insert(s,i);return new ie(this.value,a)}}remove(e){if(G(e))return this.children.isEmpty()?new ie(null):new ie(null,this.children);{const t=X(e),s=this.children.get(t);if(s){const r=s.remove(oe(e));let i;return r.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,r),this.value===null&&i.isEmpty()?new ie(null):new ie(this.value,i)}else return this}}get(e){if(G(e))return this.value;{const t=X(e),s=this.children.get(t);return s?s.get(oe(e)):null}}setTree(e,t){if(G(e))return t;{const s=X(e),i=(this.children.get(s)||new ie(null)).setTree(oe(e),t);let a;return i.isEmpty()?a=this.children.remove(s):a=this.children.insert(s,i),new ie(this.value,a)}}fold(e){return this.fold_(ne(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(Re(e,r),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,ne(),t)}findOnPath_(e,t,s){const r=this.value?s(t,this.value):!1;if(r)return r;if(G(e))return null;{const i=X(e),a=this.children.get(i);return a?a.findOnPath_(oe(e),Re(t,i),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ne(),t)}foreachOnPath_(e,t,s){if(G(e))return this;{this.value&&s(t,this.value);const r=X(e),i=this.children.get(r);return i?i.foreachOnPath_(oe(e),Re(t,r),s):new ie(null)}}foreach(e){this.foreach_(ne(),e)}foreach_(e,t){this.children.inorderTraversal((s,r)=>{r.foreach_(Re(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ht{constructor(e){this.writeTree_=e}static empty(){return new ht(new ie(null))}}function Ks(n,e,t){if(G(e))return new ht(new ie(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const a=st(r,e);return i=i.updateChild(a,t),new ht(n.writeTree_.set(r,i))}else{const r=new ie(t),i=n.writeTree_.setTree(e,r);return new ht(i)}}}function Xh(n,e,t){let s=n;return it(t,(r,i)=>{s=Ks(s,Re(e,r),i)}),s}function Jh(n,e){if(G(e))return ht.empty();{const t=n.writeTree_.setTree(e,new ie(null));return new ht(t)}}function La(n,e){return bn(n,e)!=null}function bn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(st(t.path,e)):null}function Zh(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Be,(s,r)=>{e.push(new J(s,r))}):n.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new J(s,r.value))}),e}function Ht(n,e){if(G(e))return n;{const t=bn(n,e);return t!=null?new ht(new ie(t)):new ht(n.writeTree_.subtree(e))}}function Ma(n){return n.writeTree_.isEmpty()}function rs(n,e){return y_(ne(),n.writeTree_,e)}function y_(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(O(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):t=y_(Re(n,r),i,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Re(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function E_(n,e){return A_(e,n)}function PI(n,e,t,s,r){O(s>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:r}),r&&(n.visibleWrites=Ks(n.visibleWrites,e,t)),n.lastWriteId=s}function NI(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function kI(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);O(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let r=s.visible,i=!1,a=n.allWrites.length-1;for(;r&&a>=0;){const l=n.allWrites[a];l.visible&&(a>=t&&DI(l,s.path)?r=!1:lt(s.path,l.path)&&(i=!0)),a--}if(r){if(i)return VI(n),!0;if(s.snap)n.visibleWrites=Jh(n.visibleWrites,s.path);else{const l=s.children;it(l,c=>{n.visibleWrites=Jh(n.visibleWrites,Re(s.path,c))})}return!0}else return!1}function DI(n,e){if(n.snap)return lt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&lt(Re(n.path,t),e))return!0;return!1}function VI(n){n.visibleWrites=T_(n.allWrites,OI,ne()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function OI(n){return n.visible}function T_(n,e,t){let s=ht.empty();for(let r=0;r<n.length;++r){const i=n[r];if(e(i)){const a=i.path;let l;if(i.snap)lt(t,a)?(l=st(t,a),s=Ks(s,l,i.snap)):lt(a,t)&&(l=st(a,t),s=Ks(s,ne(),i.snap.getChild(l)));else if(i.children){if(lt(t,a))l=st(t,a),s=Xh(s,l,i.children);else if(lt(a,t))if(l=st(a,t),G(l))s=Xh(s,ne(),i.children);else{const c=Qn(i.children,X(l));if(c){const h=c.getChild(oe(l));s=Ks(s,ne(),h)}}}else throw is("WriteRecord should have .snap or .children")}}return s}function v_(n,e,t,s,r){if(!s&&!r){const i=bn(n.visibleWrites,e);if(i!=null)return i;{const a=Ht(n.visibleWrites,e);if(Ma(a))return t;if(t==null&&!La(a,ne()))return null;{const l=t||ee.EMPTY_NODE;return rs(a,l)}}}else{const i=Ht(n.visibleWrites,e);if(!r&&Ma(i))return t;if(!r&&t==null&&!La(i,ne()))return null;{const a=function(h){return(h.visible||r)&&(!s||!~s.indexOf(h.writeId))&&(lt(h.path,e)||lt(e,h.path))},l=T_(n.allWrites,a,e),c=t||ee.EMPTY_NODE;return rs(l,c)}}}function xI(n,e,t){let s=ee.EMPTY_NODE;const r=bn(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Be,(i,a)=>{s=s.updateImmediateChild(i,a)}),s;if(t){const i=Ht(n.visibleWrites,e);return t.forEachChild(Be,(a,l)=>{const c=rs(Ht(i,new ae(a)),l);s=s.updateImmediateChild(a,c)}),Zh(i).forEach(a=>{s=s.updateImmediateChild(a.name,a.node)}),s}else{const i=Ht(n.visibleWrites,e);return Zh(i).forEach(a=>{s=s.updateImmediateChild(a.name,a.node)}),s}}function LI(n,e,t,s,r){O(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=Re(e,t);if(La(n.visibleWrites,i))return null;{const a=Ht(n.visibleWrites,i);return Ma(a)?r.getChild(t):rs(a,r.getChild(t))}}function MI(n,e,t,s){const r=Re(e,t),i=bn(n.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(t)){const a=Ht(n.visibleWrites,r);return rs(a,s.getNode().getImmediateChild(t))}else return null}function FI(n,e){return bn(n.visibleWrites,e)}function UI(n,e,t,s,r,i,a){let l;const c=Ht(n.visibleWrites,e),h=bn(c,ne());if(h!=null)l=h;else if(t!=null)l=rs(c,t);else return[];if(l=l.withIndex(a),!l.isEmpty()&&!l.isLeafNode()){const f=[],p=a.getCompare(),m=i?l.getReverseIteratorFrom(s,a):l.getIteratorFrom(s,a);let A=m.getNext();for(;A&&f.length<r;)p(A,s)!==0&&f.push(A),A=m.getNext();return f}else return[]}function BI(){return{visibleWrites:ht.empty(),allWrites:[],lastWriteId:-1}}function Fa(n,e,t,s){return v_(n.writeTree,n.treePath,e,t,s)}function w_(n,e){return xI(n.writeTree,n.treePath,e)}function ed(n,e,t,s){return LI(n.writeTree,n.treePath,e,t,s)}function Oi(n,e){return FI(n.writeTree,Re(n.treePath,e))}function qI(n,e,t,s,r,i){return UI(n.writeTree,n.treePath,e,t,s,r,i)}function Ql(n,e,t){return MI(n.writeTree,n.treePath,e,t)}function I_(n,e){return A_(Re(n.treePath,e),n.writeTree)}function A_(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class $I{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;O(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(s,Gh(s,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(s,gI(s,r.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(s,mI(s,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(s,Gh(s,e.snapshotNode,r.oldSnap));else throw is("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class zI{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const R_=new zI;class Yl{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Kl(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ql(this.writes_,e,s)}}getChildAfterChild(e,t,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:wn(this.viewCache_),i=qI(this.writes_,r,t,1,s,e);return i.length===0?null:i[0]}}function jI(n,e){O(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function WI(n,e,t,s,r){const i=new $I;let a,l;if(t.type===ft.OVERWRITE){const h=t;h.source.fromUser?a=Ua(n,e,h.path,h.snap,s,r,i):(O(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered()&&!G(h.path),a=xi(n,e,h.path,h.snap,s,r,l,i))}else if(t.type===ft.MERGE){const h=t;h.source.fromUser?a=GI(n,e,h.path,h.children,s,r,i):(O(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered(),a=Ba(n,e,h.path,h.children,s,r,l,i))}else if(t.type===ft.ACK_USER_WRITE){const h=t;h.revert?a=YI(n,e,h.path,s,r,i):a=KI(n,e,h.path,h.affectedTree,s,r,i)}else if(t.type===ft.LISTEN_COMPLETE)a=QI(n,e,t.path,s,i);else throw is("Unknown operation type: "+t.type);const c=i.getChanges();return HI(e,a,c),{viewCache:a,changes:c}}function HI(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=xa(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&t.push(_I(xa(e)))}}function C_(n,e,t,s,r,i){const a=e.eventCache;if(Oi(s,t)!=null)return e;{let l,c;if(G(t))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=wn(e),f=h instanceof ee?h:ee.EMPTY_NODE,p=w_(s,f);l=n.filter.updateFullNode(e.eventCache.getNode(),p,i)}else{const h=Fa(s,wn(e));l=n.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const h=X(t);if(h===".priority"){O(en(t)===1,"Can't have a priority with additional path components");const f=a.getNode();c=e.serverCache.getNode();const p=ed(s,t,f,c);p!=null?l=n.filter.updatePriority(f,p):l=a.getNode()}else{const f=oe(t);let p;if(a.isCompleteForChild(h)){c=e.serverCache.getNode();const m=ed(s,t,a.getNode(),c);m!=null?p=a.getNode().getImmediateChild(h).updateChild(f,m):p=a.getNode().getImmediateChild(h)}else p=Ql(s,h,e.serverCache);p!=null?l=n.filter.updateChild(a.getNode(),h,p,f,r,i):l=a.getNode()}}return Gs(e,l,a.isFullyInitialized()||G(t),n.filter.filtersNodes())}}function xi(n,e,t,s,r,i,a,l){const c=e.serverCache;let h;const f=a?n.filter:n.filter.getIndexedFilter();if(G(t))h=f.updateFullNode(c.getNode(),s,null);else if(f.filtersNodes()&&!c.isFiltered()){const A=c.getNode().updateChild(t,s);h=f.updateFullNode(c.getNode(),A,null)}else{const A=X(t);if(!c.isCompleteForPath(t)&&en(t)>1)return e;const S=oe(t),P=c.getNode().getImmediateChild(A).updateChild(S,s);A===".priority"?h=f.updatePriority(c.getNode(),P):h=f.updateChild(c.getNode(),A,P,S,R_,null)}const p=g_(e,h,c.isFullyInitialized()||G(t),f.filtersNodes()),m=new Yl(r,p,i);return C_(n,p,t,r,m,l)}function Ua(n,e,t,s,r,i,a){const l=e.eventCache;let c,h;const f=new Yl(r,e,i);if(G(t))h=n.filter.updateFullNode(e.eventCache.getNode(),s,a),c=Gs(e,h,!0,n.filter.filtersNodes());else{const p=X(t);if(p===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),s),c=Gs(e,h,l.isFullyInitialized(),l.isFiltered());else{const m=oe(t),A=l.getNode().getImmediateChild(p);let S;if(G(m))S=s;else{const k=f.getCompleteChild(p);k!=null?n_(m)===".priority"&&k.getChild(r_(m)).isEmpty()?S=k:S=k.updateChild(m,s):S=ee.EMPTY_NODE}if(A.equals(S))c=e;else{const k=n.filter.updateChild(l.getNode(),p,S,m,f,a);c=Gs(e,k,l.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function td(n,e){return n.eventCache.isCompleteForChild(e)}function GI(n,e,t,s,r,i,a){let l=e;return s.foreach((c,h)=>{const f=Re(t,c);td(e,X(f))&&(l=Ua(n,l,f,h,r,i,a))}),s.foreach((c,h)=>{const f=Re(t,c);td(e,X(f))||(l=Ua(n,l,f,h,r,i,a))}),l}function nd(n,e,t){return t.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Ba(n,e,t,s,r,i,a,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,h;G(t)?h=s:h=new ie(null).setTree(t,s);const f=e.serverCache.getNode();return h.children.inorderTraversal((p,m)=>{if(f.hasChild(p)){const A=e.serverCache.getNode().getImmediateChild(p),S=nd(n,A,m);c=xi(n,c,new ae(p),S,r,i,a,l)}}),h.children.inorderTraversal((p,m)=>{const A=!e.serverCache.isCompleteForChild(p)&&m.value===null;if(!f.hasChild(p)&&!A){const S=e.serverCache.getNode().getImmediateChild(p),k=nd(n,S,m);c=xi(n,c,new ae(p),k,r,i,a,l)}}),c}function KI(n,e,t,s,r,i,a){if(Oi(r,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(G(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return xi(n,e,t,c.getNode().getChild(t),r,i,l,a);if(G(t)){let h=new ie(null);return c.getNode().forEachChild(Gn,(f,p)=>{h=h.set(new ae(f),p)}),Ba(n,e,t,h,r,i,l,a)}else return e}else{let h=new ie(null);return s.foreach((f,p)=>{const m=Re(t,f);c.isCompleteForPath(m)&&(h=h.set(f,c.getNode().getChild(m)))}),Ba(n,e,t,h,r,i,l,a)}}function QI(n,e,t,s,r){const i=e.serverCache,a=g_(e,i.getNode(),i.isFullyInitialized()||G(t),i.isFiltered());return C_(n,a,t,s,R_,r)}function YI(n,e,t,s,r,i){let a;if(Oi(s,t)!=null)return e;{const l=new Yl(s,e,r),c=e.eventCache.getNode();let h;if(G(t)||X(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Fa(s,wn(e));else{const p=e.serverCache.getNode();O(p instanceof ee,"serverChildren would be complete if leaf node"),f=w_(s,p)}f=f,h=n.filter.updateFullNode(c,f,i)}else{const f=X(t);let p=Ql(s,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=c.getImmediateChild(f)),p!=null?h=n.filter.updateChild(c,f,p,oe(t),l,i):e.eventCache.getNode().hasChild(f)?h=n.filter.updateChild(c,f,ee.EMPTY_NODE,oe(t),l,i):h=c,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Fa(s,wn(e)),a.isLeafNode()&&(h=n.filter.updateFullNode(h,a,i)))}return a=e.serverCache.isFullyInitialized()||Oi(s,ne())!=null,Gs(e,h,a,n.filter.filtersNodes())}}function XI(n,e){const t=wn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!G(e)&&!t.getImmediateChild(X(e)).isEmpty())?t.getChild(e):null}function sd(n,e,t,s){e.type===ft.MERGE&&e.source.queryId!==null&&(O(wn(n.viewCache_),"We should always have a full cache before handling merges"),O(xa(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,i=WI(n.processor_,r,e,t,s);return jI(n.processor_,i.viewCache),O(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,JI(n,i.changes,i.viewCache.eventCache.getNode())}function JI(n,e,t,s){const r=n.eventRegistrations_;return RI(n.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let rd;function ZI(n){O(!rd,"__referenceConstructor has already been defined"),rd=n}function Xl(n,e,t,s){const r=e.source.queryId;if(r!==null){const i=n.views.get(r);return O(i!=null,"SyncTree gave us an op for an invalid query."),sd(i,e,t,s)}else{let i=[];for(const a of n.views.values())i=i.concat(sd(a,e,t,s));return i}}function Jl(n,e){let t=null;for(const s of n.views.values())t=t||XI(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let id;function eA(n){O(!id,"__referenceConstructor has already been defined"),id=n}class od{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ie(null),this.pendingWriteTree_=BI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function tA(n,e,t,s,r){return PI(n.pendingWriteTree_,e,t,s,r),r?fo(n,new vn(f_(),e,t)):[]}function zn(n,e,t=!1){const s=NI(n.pendingWriteTree_,e);if(kI(n.pendingWriteTree_,e)){let i=new ie(null);return s.snap!=null?i=i.set(ne(),!0):it(s.children,a=>{i=i.set(new ae(a),!0)}),fo(n,new Vi(s.path,i,t))}else return[]}function ho(n,e,t){return fo(n,new vn(p_(),e,t))}function nA(n,e,t){const s=ie.fromObject(t);return fo(n,new cr(p_(),e,s))}function sA(n,e,t,s){const r=N_(n,s);if(r!=null){const i=k_(r),a=i.path,l=i.queryId,c=st(a,e),h=new vn(__(l),c,t);return D_(n,a,h)}else return[]}function rA(n,e,t,s){const r=N_(n,s);if(r){const i=k_(r),a=i.path,l=i.queryId,c=st(a,e),h=ie.fromObject(t),f=new cr(__(l),c,h);return D_(n,a,f)}else return[]}function S_(n,e,t){const r=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(a,l)=>{const c=st(a,e),h=Jl(l,c);if(h)return h});return v_(r,e,i,t,!0)}function fo(n,e){return b_(e,n.syncPointTree_,null,E_(n.pendingWriteTree_,ne()))}function b_(n,e,t,s){if(G(n.path))return P_(n,e,t,s);{const r=e.get(ne());t==null&&r!=null&&(t=Jl(r,ne()));let i=[];const a=X(n.path),l=n.operationForChild(a),c=e.children.get(a);if(c&&l){const h=t?t.getImmediateChild(a):null,f=I_(s,a);i=i.concat(b_(l,c,h,f))}return r&&(i=i.concat(Xl(r,n,s,t))),i}}function P_(n,e,t,s){const r=e.get(ne());t==null&&r!=null&&(t=Jl(r,ne()));let i=[];return e.children.inorderTraversal((a,l)=>{const c=t?t.getImmediateChild(a):null,h=I_(s,a),f=n.operationForChild(a);f&&(i=i.concat(P_(f,l,c,h)))}),r&&(i=i.concat(Xl(r,n,s,t))),i}function N_(n,e){return n.tagToQueryMap.get(e)}function k_(n){const e=n.indexOf("$");return O(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ae(n.substr(0,e))}}function D_(n,e,t){const s=n.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const r=E_(n.pendingWriteTree_,e);return Xl(s,t,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Zl{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Zl(t)}node(){return this.node_}}class ec{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Re(this.path_,e);return new ec(this.syncTree_,t)}node(){return S_(this.syncTree_,this.path_)}}const iA=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ad=function(n,e,t){if(!n||typeof n!="object")return n;if(O(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return oA(n[".sv"],e,t);if(typeof n[".sv"]=="object")return aA(n[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},oA=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:O(!1,"Unexpected server value: "+n)}},aA=function(n,e,t){n.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const r=e.node();if(O(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const a=r.getValue();return typeof a!="number"?s:a+s},lA=function(n,e,t,s){return tc(e,new ec(t,n),s)},cA=function(n,e,t){return tc(n,new Zl(e),t)};function tc(n,e,t){const s=n.getPriority().val(),r=ad(s,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const a=n,l=ad(a.getValue(),e,t);return l!==a.getValue()||r!==a.getPriority().val()?new Te(l,Fe(r)):n}else{const a=n;return i=a,r!==a.getPriority().val()&&(i=i.updatePriority(new Te(r))),a.forEachChild(Be,(l,c)=>{const h=tc(c,e.getImmediateChild(l),t);h!==c&&(i=i.updateImmediateChild(l,h))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nc{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function sc(n,e){let t=e instanceof ae?e:new ae(e),s=n,r=X(t);for(;r!==null;){const i=Qn(s.node.children,r)||{children:{},childCount:0};s=new nc(r,s,i),t=oe(t),r=X(t)}return s}function ds(n){return n.node.value}function V_(n,e){n.node.value=e,qa(n)}function O_(n){return n.node.childCount>0}function uA(n){return ds(n)===void 0&&!O_(n)}function po(n,e){it(n.node.children,(t,s)=>{e(new nc(t,n,s))})}function x_(n,e,t,s){t&&e(n),po(n,r=>{x_(r,e,!0)})}function hA(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Cr(n){return new ae(n.parent===null?n.name:Cr(n.parent)+"/"+n.name)}function qa(n){n.parent!==null&&dA(n.parent,n.name,n)}function dA(n,e,t){const s=uA(t),r=Dt(n.node.children,e);s&&r?(delete n.node.children[e],n.node.childCount--,qa(n)):!s&&!r&&(n.node.children[e]=t.node,n.node.childCount++,qa(n))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const fA=/[\[\].#$\/\u0000-\u001F\u007F]/,pA=/[\[\].#$\u0000-\u001F\u007F]/,na=10*1024*1024,L_=function(n){return typeof n=="string"&&n.length!==0&&!fA.test(n)},_A=function(n){return typeof n=="string"&&n.length!==0&&!pA.test(n)},mA=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_A(n)},M_=function(n,e,t){const s=t instanceof ae?new Qw(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+un(s));if(typeof e=="function")throw new Error(n+"contains a function "+un(s)+" with contents = "+e.toString());if(xp(e))throw new Error(n+"contains "+e.toString()+" "+un(s));if(typeof e=="string"&&e.length>na/3&&Bi(e)>na)throw new Error(n+"contains a string greater than "+na+" utf8 bytes "+un(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(it(e,(a,l)=>{if(a===".value")r=!0;else if(a!==".priority"&&a!==".sv"&&(i=!0,!L_(a)))throw new Error(n+" contains an invalid key ("+a+") "+un(s)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Yw(s,a),M_(n,l,s),Xw(s)}),r&&i)throw new Error(n+' contains ".value" child '+un(s)+" in addition to actual children.")}},gA=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!L_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!mA(t))throw new Error(Ig(n,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class yA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function EA(n,e){let t=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();t!==null&&!i_(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(r)}t&&n.eventLists_.push(t)}function Pn(n,e,t){EA(n,t),TA(n,s=>lt(s,e)||lt(e,s))}function TA(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const r=n.eventLists_[s];if(r){const i=r.path;e(i)?(vA(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function vA(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ws&&Me("event: "+t.toString()),Ar(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const wA="repo_interrupt",IA=25;class AA{constructor(e,t,s,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Di(),this.transactionQueueTree_=new nc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function RA(n,e,t){if(n.stats_=zl(n.repoInfo_),n.forceRestClient_||Tw())n.server_=new ki(n.repoInfo_,(s,r,i,a)=>{ld(n,s,r,i,a)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>cd(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Se(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new At(n.repoInfo_,e,(s,r,i,a)=>{ld(n,s,r,i,a)},s=>{cd(n,s)},s=>{SA(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Rw(n.repoInfo_,()=>new AI(n.stats_,n.server_)),n.infoData_=new EI,n.infoSyncTree_=new od({startListening:(s,r,i,a)=>{let l=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(l=ho(n.infoSyncTree_,s._path,c),setTimeout(()=>{a("ok")},0)),l},stopListening:()=>{}}),rc(n,"connected",!1),n.serverSyncTree_=new od({startListening:(s,r,i,a)=>(n.server_.listen(s,i,r,(l,c)=>{const h=a(l,c);Pn(n.eventQueue_,s._path,h)}),[]),stopListening:(s,r)=>{n.server_.unlisten(s,r)}})}function CA(n){const t=n.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function F_(n){return iA({timestamp:CA(n)})}function ld(n,e,t,s,r){n.dataUpdateCount++;const i=new ae(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let a=[];if(r)if(s){const c=di(t,h=>Fe(h));a=rA(n.serverSyncTree_,i,c,r)}else{const c=Fe(t);a=sA(n.serverSyncTree_,i,c,r)}else if(s){const c=di(t,h=>Fe(h));a=nA(n.serverSyncTree_,i,c)}else{const c=Fe(t);a=ho(n.serverSyncTree_,i,c)}let l=i;a.length>0&&(l=oc(n,i)),Pn(n.eventQueue_,l,a)}function cd(n,e){rc(n,"connected",e),e===!1&&PA(n)}function SA(n,e){it(e,(t,s)=>{rc(n,t,s)})}function rc(n,e,t){const s=new ae("/.info/"+e),r=Fe(t);n.infoData_.updateSnapshot(s,r);const i=ho(n.infoSyncTree_,s,r);Pn(n.eventQueue_,s,i)}function bA(n){return n.nextWriteId_++}function PA(n){U_(n,"onDisconnectEvents");const e=F_(n),t=Di();Oa(n.onDisconnect_,ne(),(r,i)=>{const a=lA(r,i,n.serverSyncTree_,e);d_(t,r,a)});let s=[];Oa(t,ne(),(r,i)=>{s=s.concat(ho(n.serverSyncTree_,r,i));const a=VA(n,r);oc(n,a)}),n.onDisconnect_=Di(),Pn(n.eventQueue_,ne(),s)}function NA(n){n.persistentConnection_&&n.persistentConnection_.interrupt(wA)}function U_(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Me(t,...e)}function B_(n,e,t){return S_(n.serverSyncTree_,e,t)||ee.EMPTY_NODE}function ic(n,e=n.transactionQueueTree_){if(e||_o(n,e),ds(e)){const t=$_(n,e);O(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&kA(n,Cr(e),t)}else O_(e)&&po(e,t=>{ic(n,t)})}function kA(n,e,t){const s=t.map(h=>h.currentWriteId),r=B_(n,e,s);let i=r;const a=r.hash();for(let h=0;h<t.length;h++){const f=t[h];O(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=st(e,f.path);i=i.updateChild(p,f.currentOutputSnapshotRaw)}const l=i.val(!0),c=e;n.server_.put(c.toString(),l,h=>{U_(n,"transaction put response",{path:c.toString(),status:h});let f=[];if(h==="ok"){const p=[];for(let m=0;m<t.length;m++)t[m].status=2,f=f.concat(zn(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&p.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();_o(n,sc(n.transactionQueueTree_,e)),ic(n,n.transactionQueueTree_),Pn(n.eventQueue_,e,f);for(let m=0;m<p.length;m++)Ar(p[m])}else{if(h==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{et("transaction at "+c.toString()+" failed: "+h);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=h}oc(n,e)}},a)}function oc(n,e){const t=q_(n,e),s=Cr(t),r=$_(n,t);return DA(n,r,s),s}function DA(n,e,t){if(e.length===0)return;const s=[];let r=[];const a=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],h=st(t,c.path);let f=!1,p;if(O(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,p=c.abortReason,r=r.concat(zn(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=IA)f=!0,p="maxretry",r=r.concat(zn(n.serverSyncTree_,c.currentWriteId,!0));else{const m=B_(n,c.path,a);c.currentInputSnapshot=m;const A=e[l].update(m.val());if(A!==void 0){M_("transaction failed: Data returned ",A,c.path);let S=Fe(A);typeof A=="object"&&A!=null&&Dt(A,".priority")||(S=S.updatePriority(m.getPriority()));const P=c.currentWriteId,q=F_(n),$=cA(S,m,q);c.currentOutputSnapshotRaw=S,c.currentOutputSnapshotResolved=$,c.currentWriteId=bA(n),a.splice(a.indexOf(P),1),r=r.concat(tA(n.serverSyncTree_,c.path,$,c.currentWriteId,c.applyLocally)),r=r.concat(zn(n.serverSyncTree_,P,!0))}else f=!0,p="nodata",r=r.concat(zn(n.serverSyncTree_,c.currentWriteId,!0))}Pn(n.eventQueue_,t,r),r=[],f&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(p),!1,null))))}_o(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)Ar(s[l]);ic(n,n.transactionQueueTree_)}function q_(n,e){let t,s=n.transactionQueueTree_;for(t=X(e);t!==null&&ds(s)===void 0;)s=sc(s,t),e=oe(e),t=X(e);return s}function $_(n,e){const t=[];return z_(n,e,t),t.sort((s,r)=>s.order-r.order),t}function z_(n,e,t){const s=ds(e);if(s)for(let r=0;r<s.length;r++)t.push(s[r]);po(e,r=>{z_(n,r,t)})}function _o(n,e){const t=ds(e);if(t){let s=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[s]=t[r],s++);t.length=s,V_(e,t.length>0?t:void 0)}po(e,s=>{_o(n,s)})}function VA(n,e){const t=Cr(q_(n,e)),s=sc(n.transactionQueueTree_,e);return hA(s,r=>{sa(n,r)}),sa(n,s),x_(s,r=>{sa(n,r)}),t}function sa(n,e){const t=ds(e);if(t){const s=[];let r=[],i=-1;for(let a=0;a<t.length;a++)t[a].status===3||(t[a].status===1?(O(i===a-1,"All SENT items should be at beginning of queue."),i=a,t[a].status=3,t[a].abortReason="set"):(O(t[a].status===0,"Unexpected transaction status in abort"),t[a].unwatcher(),r=r.concat(zn(n.serverSyncTree_,t[a].currentWriteId,!0)),t[a].onComplete&&s.push(t[a].onComplete.bind(null,new Error("set"),!1,null))));i===-1?V_(e,void 0):t.length=i+1,Pn(n.eventQueue_,Cr(e),r);for(let a=0;a<s.length;a++)Ar(s[a])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function OA(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let r=t[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(i){}e+="/"+r}return e}function xA(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):et("Invalid query segment '".concat(t,"' in query '").concat(n,"'"))}return e}const ud=function(n,e){const t=LA(n),s=t.namespace;t.domain==="firebase.com"&&kt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||dw();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Gp(t.host,t.secure,s,r,e,"",s!==t.subdomain),path:new ae(t.pathString)}},LA=function(n){let e="",t="",s="",r="",i="",a=!0,l="https",c=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(l=n.substring(0,h-1),n=n.substring(h+2));let f=n.indexOf("/");f===-1&&(f=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(f,p)),f<p&&(r=OA(n.substring(f,p)));const m=xA(n.substring(Math.min(n.length,p)));h=e.indexOf(":"),h>=0?(a=l==="https"||l==="wss",c=parseInt(e.substring(h+1),10)):h=e.length;const A=e.slice(0,h);if(A.toLowerCase()==="localhost")t="localhost";else if(A.split(".").length<=2)t=A;else{const S=e.indexOf(".");s=e.substring(0,S).toLowerCase(),t=e.substring(S+1),i=s}"ns"in m&&(i=m.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:a,scheme:l,pathString:r,namespace:i}};/**
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
 */class ac{constructor(e,t,s,r){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=r}get key(){return G(this._path)?null:n_(this._path)}get ref(){return new fs(this._repo,this._path)}get _queryIdentifier(){const e=Qh(this._queryParams),t=ql(e);return t==="{}"?"default":t}get _queryObject(){return Qh(this._queryParams)}isEqual(e){if(e=Ee(e),!(e instanceof ac))return!1;const t=this._repo===e._repo,s=i_(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Kw(this._path)}}class fs extends ac{constructor(e,t){super(e,t,new Gl,!1)}get parent(){const e=r_(this._path);return e===null?null:new fs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}ZI(fs);eA(fs);/**
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
 */const MA="FIREBASE_DATABASE_EMULATOR_HOST",$a={};let FA=!1;function UA(n,e,t,s){n.repoInfo_=new Gp(e,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function BA(n,e,t,s,r){let i=s||n.options.databaseURL;i===void 0&&(n.options.projectId||kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Me("Using default host for project ",n.options.projectId),i="".concat(n.options.projectId,"-default-rtdb.firebaseio.com"));let a=ud(i,r),l=a.repoInfo,c;typeof process<"u"&&Nh&&(c=Nh[MA]),c?(i="http://".concat(c,"?ns=").concat(l.namespace),a=ud(i,r),l=a.repoInfo):a.repoInfo.secure;const h=new ww(n.name,n.options,e);gA("Invalid Firebase Database URL",a),G(a.path)||kt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=$A(l,n,h,new vw(n,t));return new zA(f,n)}function qA(n,e){const t=$a[e];(!t||t[n.key]!==n)&&kt("Database ".concat(e,"(").concat(n.repoInfo_,") has already been deleted.")),NA(n),delete t[n.key]}function $A(n,e,t,s){let r=$a[e.name];r||(r={},$a[e.name]=r);let i=r[n.toURLString()];return i&&kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new AA(n,FA,t,s),r[n.toURLString()]=i,i}class zA{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(RA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fs(this._repo,ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&(qA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&kt("Cannot call "+e+" on a deleted database.")}}function jA(n=Ja(),e){const t=Xa(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Ha("database");s&&WA(t,...s)}return t}function WA(n,e,t,s={}){n=Ee(n),n._checkNotDeleted("useEmulator");const r="".concat(e,":").concat(t),i=n._repoInternal;if(n._instanceStarted){if(r===n._repoInternal.repoInfo_.host&&Xs(s,i.repoInfo_.emulatorOptions))return;kt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let a;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&kt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new ci(ci.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:Ka(s.mockUserToken,n.app.options.projectId);a=new ci(l)}UA(i,r,s,a)}/**
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
 */function HA(n){ow(zi),mn(new Gt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return BA(s,r,i,t)},"PUBLIC").setMultipleInstances(!0)),rt(kh,Dh,n),rt(kh,Dh,"esm2017")}At.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};At.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};HA();/**
 * @license
 * Copyright 2017 Google LLC
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
 */const j_="firebasestorage.googleapis.com",W_="storageBucket",GA=2*60*1e3,KA=10*60*1e3,QA=1e3;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class he extends tn{constructor(e,t,s=0){super(ra(e),"Firebase Storage: ".concat(t," (").concat(ra(e),")")),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,he.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ra(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message="".concat(this._baseMessage,"\n").concat(this.customData.serverResponse):this.message=this._baseMessage}}var le;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(le||(le={}));function ra(n){return"storage/"+n}function lc(){const n="An unknown error occurred, please check the error payload for server response.";return new he(le.UNKNOWN,n)}function YA(n){return new he(le.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function XA(n){return new he(le.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function JA(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new he(le.UNAUTHENTICATED,n)}function ZA(){return new he(le.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function eR(n){return new he(le.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function H_(){return new he(le.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function G_(){return new he(le.CANCELED,"User canceled the upload/download.")}function tR(n){return new he(le.INVALID_URL,"Invalid URL '"+n+"'.")}function nR(n){return new he(le.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function sR(){return new he(le.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+W_+"' property when initializing the app?")}function K_(){return new he(le.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rR(){return new he(le.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function iR(){return new he(le.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function oR(n){return new he(le.UNSUPPORTED_ENVIRONMENT,"".concat(n," is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information."))}function za(n){return new he(le.INVALID_ARGUMENT,n)}function Q_(){return new he(le.APP_DELETED,"The Firebase app was deleted.")}function aR(n){return new he(le.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Qs(n,e){return new he(le.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ls(n){throw new he(le.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Je{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Je.makeFromUrl(e,t)}catch(r){return new Je(e,"")}if(s.path==="")return s;throw nR(e)}static makeFromUrl(e,t){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+r+a,"i"),c={bucket:1,path:3};function h(j){j.path_=decodeURIComponent(j.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",A=new RegExp("^https?://".concat(p,"/").concat(f,"/b/").concat(r,"/o").concat(m),"i"),S={bucket:1,path:3},k=t===j_?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",q=new RegExp("^https?://".concat(k,"/").concat(r,"/").concat(P),"i"),F=[{regex:l,indices:c,postModify:i},{regex:A,indices:S,postModify:h},{regex:q,indices:{bucket:1,path:2},postModify:h}];for(let j=0;j<F.length;j++){const Ne=F[j],ce=Ne.regex.exec(e);if(ce){const v=ce[Ne.indices.bucket];let g=ce[Ne.indices.path];g||(g=""),s=new Je(v,g),Ne.postModify(s);break}}if(s==null)throw tR(e);return s}}class lR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function cR(n,e,t){let s=1,r=null,i=null,a=!1,l=0;function c(){return l===2}let h=!1;function f(...P){h||(h=!0,e.apply(null,P))}function p(P){r=setTimeout(()=>{r=null,n(A,c())},P)}function m(){i&&clearTimeout(i)}function A(P,...q){if(h){m();return}if(P){m(),f.call(null,P,...q);return}if(c()||a){m(),f.call(null,P,...q);return}s<64&&(s*=2);let F;l===1?(l=2,F=0):F=(s+Math.random())*1e3,p(F)}let S=!1;function k(P){S||(S=!0,m(),!h&&(r!==null?(P||(l=2),clearTimeout(r),p(0)):P||(l=1)))}return p(0),i=setTimeout(()=>{a=!0,k(!0)},t),k}function uR(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function hR(n){return n!==void 0}function dR(n){return typeof n=="function"}function fR(n){return typeof n=="object"&&!Array.isArray(n)}function mo(n){return typeof n=="string"||n instanceof String}function hd(n){return cc()&&n instanceof Blob}function cc(){return typeof Blob<"u"}function dd(n,e,t,s){if(s<e)throw za("Invalid value for '".concat(n,"'. Expected ").concat(e," or greater."));if(s>t)throw za("Invalid value for '".concat(n,"'. Expected ").concat(t," or less."))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ps(n,e,t){let s=e;return t==null&&(s="https://".concat(e)),"".concat(t,"://").concat(s,"/v0").concat(n)}function Y_(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const r=e(s)+"="+e(n[s]);t=t+r+"&"}return t=t.slice(0,-1),t}var _n;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(_n||(_n={}));/**
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
 */function X_(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||r||i}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class pR{constructor(e,t,s,r,i,a,l,c,h,f,p,m=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,S)=>{this.resolve_=A,this.reject_=S,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new ti(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const c=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,h)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===_n.NO_ERROR,c=i.getStatus();if(!l||X_(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===_n.ABORT;s(!1,new ti(!1,null,f));return}const h=this.successCodes_.indexOf(c)!==-1;s(!0,new ti(h,i))})},t=(s,r)=>{const i=this.resolve_,a=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());hR(c)?i(c):i()}catch(c){a(c)}else if(l!==null){const c=lc();c.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,c)):a(c)}else if(r.canceled){const c=this.appDelete_?Q_():G_();a(c)}else{const c=H_();a(c)}};this.canceled_?t(!1,new ti(!1,null,!0)):this.backoffId_=cR(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ti{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function _R(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function mR(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function gR(n,e){e&&(n["X-Firebase-GMPID"]=e)}function yR(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function ER(n,e,t,s,r,i,a=!0){const l=Y_(n.urlParams),c=n.url+l,h=Object.assign({},n.headers);return gR(h,e),_R(h,t),mR(h,i),yR(h,s),new pR(c,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,a)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function TR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function vR(...n){const e=TR();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(cc())return new Blob(n);throw new he(le.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wR(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function IR(n){if(typeof atob>"u")throw oR("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const pt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ia{constructor(e,t){this.data=e,this.contentType=t||null}}function AR(n,e){switch(n){case pt.RAW:return new ia(J_(e));case pt.BASE64:case pt.BASE64URL:return new ia(Z_(n,e));case pt.DATA_URL:return new ia(CR(e),SR(e))}throw lc()}function J_(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=s,a=n.charCodeAt(++t);s=65536|(i&1023)<<10|a&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function RR(n){let e;try{e=decodeURIComponent(n)}catch(t){throw Qs(pt.DATA_URL,"Malformed data URL.")}return J_(e)}function Z_(n,e){switch(n){case pt.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Qs(n,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case pt.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Qs(n,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=IR(e)}catch(r){throw r.message.includes("polyfill")?r:Qs(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}class em{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Qs(pt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=bR(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function CR(n){const e=new em(n);return e.base64?Z_(pt.BASE64,e.rest):RR(e.rest)}function SR(n){return new em(n).contentType}function bR(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Bt{constructor(e,t){let s=0,r="";hd(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(hd(this.data_)){const s=this.data_,r=wR(s,e,t);return r===null?null:new Bt(r)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new Bt(s,!0)}}static getBlob(...e){if(cc()){const t=e.map(s=>s instanceof Bt?s.data_:s);return new Bt(vR.apply(null,t))}else{const t=e.map(a=>mo(a)?AR(pt.RAW,a).data:a.data_);let s=0;t.forEach(a=>{s+=a.byteLength});const r=new Uint8Array(s);let i=0;return t.forEach(a=>{for(let l=0;l<a.length;l++)r[i++]=a[l]}),new Bt(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function tm(n){let e;try{e=JSON.parse(n)}catch(t){return null}return fR(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function PR(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function NR(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function nm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function kR(n,e){return e}class je{constructor(e,t,s,r){this.server=e,this.local=t||e,this.writable=!!s,this.xform=r||kR}}let ni=null;function DR(n){return!mo(n)||n.length<2?n:nm(n)}function sm(){if(ni)return ni;const n=[];n.push(new je("bucket")),n.push(new je("generation")),n.push(new je("metageneration")),n.push(new je("name","fullPath",!0));function e(i,a){return DR(a)}const t=new je("name");t.xform=e,n.push(t);function s(i,a){return a!==void 0?Number(a):a}const r=new je("size");return r.xform=s,n.push(r),n.push(new je("timeCreated")),n.push(new je("updated")),n.push(new je("md5Hash",null,!0)),n.push(new je("cacheControl",null,!0)),n.push(new je("contentDisposition",null,!0)),n.push(new je("contentEncoding",null,!0)),n.push(new je("contentLanguage",null,!0)),n.push(new je("contentType",null,!0)),n.push(new je("metadata","customMetadata",!0)),ni=n,ni}function VR(n,e){function t(){const s=n.bucket,r=n.fullPath,i=new Je(s,r);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function OR(n,e,t){const s={};s.type="file";const r=t.length;for(let i=0;i<r;i++){const a=t[i];s[a.local]=a.xform(s,e[a.server])}return VR(s,n),s}function rm(n,e,t){const s=tm(e);return s===null?null:OR(n,s,t)}function xR(n,e,t,s){const r=tm(e);if(r===null||!mo(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(h=>{const f=n.bucket,p=n.fullPath,m="/b/"+a(f)+"/o/"+a(p),A=ps(m,t,s),S=Y_({alt:"media",token:h});return A+S})[0]}function im(n,e){const t={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Nn{constructor(e,t,s,r){this.url=e,this.method=t,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Rt(n){if(!n)throw lc()}function uc(n,e){function t(s,r){const i=rm(n,r,e);return Rt(i!==null),i}return t}function LR(n,e){function t(s,r){const i=rm(n,r,e);return Rt(i!==null),xR(i,r,n.host,n._protocol)}return t}function Sr(n){function e(t,s){let r;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?r=ZA():r=JA():t.getStatus()===402?r=XA(n.bucket):t.getStatus()===403?r=eR(n.path):r=s,r.status=t.getStatus(),r.serverResponse=s.serverResponse,r}return e}function hc(n){const e=Sr(n);function t(s,r){let i=e(s,r);return s.getStatus()===404&&(i=YA(n.path)),i.serverResponse=r.serverResponse,i}return t}function MR(n,e,t){const s=e.fullServerUrl(),r=ps(s,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,l=new Nn(r,i,uc(n,t),a);return l.errorHandler=hc(e),l}function FR(n,e,t){const s=e.fullServerUrl(),r=ps(s,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,l=new Nn(r,i,LR(n,t),a);return l.errorHandler=hc(e),l}function UR(n,e){const t=e.fullServerUrl(),s=ps(t,n.host,n._protocol),r="DELETE",i=n.maxOperationRetryTime;function a(c,h){}const l=new Nn(s,r,a,i);return l.successCodes=[200,204],l.errorHandler=hc(e),l}function BR(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function om(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=BR(null,e)),s}function qR(n,e,t,s,r){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let F="";for(let j=0;j<2;j++)F=F+Math.random().toString().slice(2);return F}const c=l();a["Content-Type"]="multipart/related; boundary="+c;const h=om(e,s,r),f=im(h,t),p="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+f+"\r\n--"+c+"\r\nContent-Type: "+h.contentType+"\r\n\r\n",m="\r\n--"+c+"--",A=Bt.getBlob(p,s,m);if(A===null)throw K_();const S={name:h.fullPath},k=ps(i,n.host,n._protocol),P="POST",q=n.maxUploadRetryTime,$=new Nn(k,P,uc(n,t),q);return $.urlParams=S,$.headers=a,$.body=A.uploadData(),$.errorHandler=Sr(e),$}class Li{constructor(e,t,s,r){this.current=e,this.total=t,this.finalized=!!s,this.metadata=r||null}}function dc(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch(r){Rt(!1)}return Rt(!!t&&(e||["active"]).indexOf(t)!==-1),t}function $R(n,e,t,s,r){const i=e.bucketOnlyServerUrl(),a=om(e,s,r),l={name:a.fullPath},c=ps(i,n.host,n._protocol),h="POST",f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":"".concat(s.size()),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},p=im(a,t),m=n.maxUploadRetryTime;function A(k){dc(k);let P;try{P=k.getResponseHeader("X-Goog-Upload-URL")}catch(q){Rt(!1)}return Rt(mo(P)),P}const S=new Nn(c,h,A,m);return S.urlParams=l,S.headers=f,S.body=p,S.errorHandler=Sr(e),S}function zR(n,e,t,s){const r={"X-Goog-Upload-Command":"query"};function i(h){const f=dc(h,["active","final"]);let p=null;try{p=h.getResponseHeader("X-Goog-Upload-Size-Received")}catch(A){Rt(!1)}p||Rt(!1);const m=Number(p);return Rt(!isNaN(m)),new Li(m,s.size(),f==="final")}const a="POST",l=n.maxUploadRetryTime,c=new Nn(t,a,i,l);return c.headers=r,c.errorHandler=Sr(e),c}const fd=256*1024;function jR(n,e,t,s,r,i,a,l){const c=new Li(0,0);if(a?(c.current=a.current,c.total=a.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw rR();const h=c.total-c.current;let f=h;r>0&&(f=Math.min(f,r));const p=c.current,m=p+f;let A="";f===0?A="finalize":h===f?A="upload, finalize":A="upload";const S={"X-Goog-Upload-Command":A,"X-Goog-Upload-Offset":"".concat(c.current)},k=s.slice(p,m);if(k===null)throw K_();function P(j,Ne){const ce=dc(j,["active","final"]),v=c.current+f,g=s.size();let E;return ce==="final"?E=uc(e,i)(j,Ne):E=null,new Li(v,g,ce==="final",E)}const q="POST",$=e.maxUploadRetryTime,F=new Nn(t,q,P,$);return F.headers=S,F.body=k.uploadData(),F.progressCallback=l||null,F.errorHandler=Sr(n),F}const Ge={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function oa(n){switch(n){case"running":case"pausing":case"canceling":return Ge.RUNNING;case"paused":return Ge.PAUSED;case"success":return Ge.SUCCESS;case"canceled":return Ge.CANCELED;case"error":return Ge.ERROR;default:return Ge.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class WR{constructor(e,t,s){if(dR(e)||t!=null||s!=null)this.next=e,this.error=t!=null?t:void 0,this.complete=s!=null?s:void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ln(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class HR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=_n.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=_n.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=_n.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,r){if(this.sent_)throw Ls("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ls("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ls("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw Ls("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ls("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class GR extends HR{initXhr(){this.xhr_.responseType="text"}}function hn(){return new GR}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class KR{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=s,this._mappings=sm(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(le.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(X_(r.status,[]))if(i)r=H_();else{this.sleepTime=Math.max(this.sleepTime*2,QA),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(le.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,s])=>{switch(this._state){case"running":e(t,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const s=$R(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,hn,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,s)=>{const r=zR(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,hn,t,s);this._request=i,i.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=fd*this._chunkMultiplier,t=new Li(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let a;try{a=jR(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const l=this._ref.storage._makeRequest(a,hn,r,i,!1);this._request=l,l.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){fd*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const s=MR(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,hn,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const s=qR(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,hn,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=G_(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=oa(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,s,r){const i=new WR(t||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(oa(this._state)){case Ge.SUCCESS:Ln(this._resolve.bind(null,this.snapshot))();break;case Ge.CANCELED:case Ge.ERROR:const t=this._reject;Ln(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(oa(this._state)){case Ge.RUNNING:case Ge.PAUSED:e.next&&Ln(e.next.bind(e,this.snapshot))();break;case Ge.SUCCESS:e.complete&&Ln(e.complete.bind(e))();break;case Ge.CANCELED:case Ge.ERROR:e.error&&Ln(e.error.bind(e,this._error))();break;default:e.error&&Ln(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class In{constructor(e,t){this._service=e,t instanceof Je?this._location=t:this._location=Je.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new In(e,t)}get root(){const e=new Je(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return nm(this._location.path)}get storage(){return this._service}get parent(){const e=PR(this._location.path);if(e===null)return null;const t=new Je(this._location.bucket,e);return new In(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw aR(e)}}function QR(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new KR(n,new Bt(e),t)}function YR(n){n._throwIfRoot("getDownloadURL");const e=FR(n.storage,n._location,sm());return n.storage.makeRequestWithTokens(e,hn).then(t=>{if(t===null)throw iR();return t})}function XR(n){n._throwIfRoot("deleteObject");const e=UR(n.storage,n._location);return n.storage.makeRequestWithTokens(e,hn)}function JR(n,e){const t=NR(n._location.path,e),s=new Je(n._location.bucket,t);return new In(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ZR(n){return/^[A-Za-z]+:\/\//.test(n)}function eC(n,e){return new In(n,e)}function am(n,e){if(n instanceof fc){const t=n;if(t._bucket==null)throw sR();const s=new In(t,t._bucket);return e!=null?am(s,e):s}else return e!==void 0?JR(n,e):n}function tC(n,e){if(e&&ZR(e)){if(n instanceof fc)return eC(n,e);throw za("To use ref(service, url), the first argument must be a Storage instance.")}else return am(n,e)}function pd(n,e){const t=e==null?void 0:e[W_];return t==null?null:Je.makeFromBucketSpec(t,n)}function nC(n,e,t,s={}){n.host="".concat(e,":").concat(t),n._protocol="http";const{mockUserToken:r}=s;r&&(n._overrideAuthToken=typeof r=="string"?r:Ka(r,n.app.options.projectId))}class fc{constructor(e,t,s,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=j_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=GA,this._maxUploadRetryTime=KA,this._requests=new Set,r!=null?this._bucket=Je.makeFromBucketSpec(r,this._host):this._bucket=pd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Je.makeFromBucketSpec(this._url,e):this._bucket=pd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){dd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){dd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if($i(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new In(this,e)}_makeRequest(e,t,s,r,i=!0){if(this._deleted)return new lR(Q_());{const a=ER(e,this._appId,s,r,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,r).getPromise()}}const _d="@firebase/storage",md="0.13.7";/**
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
 */const lm="storage";function sC(n,e,t){return n=Ee(n),QR(n,e,t)}function rC(n){return n=Ee(n),YR(n)}function iC(n){return n=Ee(n),XR(n)}function cm(n,e){return n=Ee(n),tC(n,e)}function oC(n=Ja(),e){n=Ee(n);const s=Xa(n,lm).getImmediate({identifier:e}),r=Ha("storage");return r&&aC(s,...r),s}function aC(n,e,t,s={}){nC(n,e,t,s)}function lC(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new fc(t,s,r,e,zi)}function cC(){mn(new Gt(lm,lC,"PUBLIC").setMultipleInstances(!0)),rt(_d,md,""),rt(_d,md,"esm2017")}cC();const uC={apiKey:"AIzaSyA_31VN488mE05KFkhPlU6xi9it8W5BJVs",authDomain:"keengram.firebaseapp.com",projectId:"keengram",storageBucket:"keengram.appspot.com",messagingSenderId:"523908571164",appId:"1:523908571164:web:2874242de75ca517c5bfd9"},pc=Bd(uC),ue=Nv(pc);jA(pc,"https://keengram-default-rtdb.europe-west1.firebasedatabase.app");const um=oC(pc),go={seconds:0,nanoseconds:Date.now()},br={status:"awaiting",data:null,error:null},ui={data:[],length:0},hm={type:"IUser",uid:""},dm={...hm,type:"IAuthor",avatar:{url:""},nickname:"",name:"",surname:"",public_key:""},hC={private_key:"",iv:"",salt:""},dC={subscribed:{length:0},subscribers:{length:0},posts:{length:0},weight:0},fm={...dm,...dC,type:"IAuthorFull",created_at:go,description:"",subscribed:ui,subscribers:ui,posts:ui},fC={...fm,...hC,type:"IAuthorizedUser",accessToken:"",email:"",isAuth:!1,weight:0},CS={uid:"",post_uid:"",user_uid:"",created_at:go},pC=async({comment:n})=>{const e=new Date().getSeconds(),t=await Bl(Pt(ue,"posts",n.post_uid,"comments"),{...n,created_at:Si()});return await vr(Qe(ue,"posts",n.post_uid),{"comments.length":Nt(1),post_weight:Nt(1)}),{...n,uid:t.id,created_at:{seconds:e,nanoseconds:0}}},_C=async({post_uid:n,user_uid:e})=>{const s={uid:(await Bl(Pt(ue,"likes"),{user_uid:e,post_uid:n,created_at:Si()})).id,post_uid:n,user_uid:e,created_at:go};return await vr(Qe(ue,"posts",n),{"likes.length":Nt(1),post_weight:Nt(1)}),s},mC=async n=>{const e=[];try{return n.forEach(async t=>{const s=cm(um,t.path),r=await t.file.bytes(),i=sC(s,r,{contentType:t.file.type});i.on("state_changed",a=>{switch(a.state){case"paused":break;case"running":break}},a=>{throw a},()=>{rC(i.snapshot.ref).then(a=>{console.log("downloadURL",a),e.push({path:t.path,type:"image",uid:t.file_name.split(".")[0],url:[a]})})})}),{status:"success",data:e}}catch(t){return{status:"error",data:null,error:t}}},gC=async({post:n})=>{try{const e=Qe(Pt(ue,"posts"));await Kv(e,{...n,comments:{...ui,length:n.comments.length},created_at:Si()});let t={data:[],length:n.comments.length};if(n.comments.data.length>0){const{author:s,comment_id:r,text:i}=n.comments.data[0],a=await Bl(Pt(ue,"posts",e.id,"comments"),{author:s,comment_id:r,text:i,post_uid:e.id,created_at:Si()});t.data=[{...n.comments.data[0],uid:a.id}]}return await vr(Qe(ue,"users",n.author,"meta","info"),{posts:{length:Nt(1)}}),{status:"success",data:{...n,comments:t,uid:e.id,created_at:{...go,nanoseconds:Date.now()}}}}catch(e){return{status:"error",data:null,error:e}}},yC=Object.freeze(Object.defineProperty({__proto__:null,Comment:pC,Like:_C,Media:mC,Post:gC},Symbol.toStringTag,{value:"Module"})),gd="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
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
 */let nt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let yo="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Mi=new qi("@firebase/firestore");function EC(n,...e){if(Mi.logLevel<=W.DEBUG){const t=e.map(pm);Mi.debug("Firestore (".concat(yo,"): ").concat(n),...t)}}function TC(n,...e){if(Mi.logLevel<=W.ERROR){const t=e.map(pm);Mi.error("Firestore (".concat(yo,"): ").concat(n),...t)}}function pm(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch(e){return n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ja(n="Unexpected state"){const e="FIRESTORE (".concat(yo,") INTERNAL ASSERTION FAILED: ")+n;throw TC(e),new Error(e)}function _m(n,e){n||ja()}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ue="invalid-argument",yd="failed-precondition";class Ae extends tn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>"".concat(this.name,": [code=").concat(this.code,"]: ").concat(this.message)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class vC{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(e))}}class wC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nt.UNAUTHENTICATED))}shutdown(){}}class IC{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(_m(typeof e.accessToken=="string"),new vC(e.accessToken,new nt(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class AC{constructor(e,t,s){this.t=e,this.i=t,this.o=s,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class RC{constructor(e,t,s){this.t=e,this.i=t,this.o=s}getToken(){return Promise.resolve(new AC(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ed{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CC{constructor(e,t){this.h=t,this.appCheck=null,this.m=null,$i(e)&&e.settings.appCheckToken&&(this.m=e.settings.appCheckToken),t.onInit(s=>{this.appCheck=s})}getToken(){return this.m?Promise.resolve(new Ed(this.m)):this.appCheck?this.appCheck.getToken().then(e=>e?(_m(typeof e.token=="string"),new Ed(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}const Td="(default)";class Fi{constructor(e,t){this.projectId=e,this.database=t||Td}static empty(){return new Fi("","")}get isDefaultDatabase(){return this.database===Td}isEqual(e){return e instanceof Fi&&e.projectId===this.projectId&&e.database===this.database}}function Kn(n,e){return n<e?-1:n>e?1:0}function SC(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),r=e.codePointAt(t);if(s!==r){if(s<128&&r<128)return Kn(s,r);{const i=new TextEncoder,a=bC(i.encode(vd(n,t)),i.encode(vd(e,t)));return a!==0?a:Kn(s,r)}}t+=s>65535?2:1}return Kn(n.length,e.length)}function vd(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function bC(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Kn(n[t],e[t]);return Kn(n.length,e.length)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const wd="__name__";class vt{constructor(e,t,s){t===void 0?t=0:t>e.length&&ja(),s===void 0?s=e.length-t:s>e.length-t&&ja(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return vt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof vt?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=vt.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return Kn(e.length,t.length)}static compareSegments(e,t){const s=vt.isNumericId(e),r=vt.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?vt.extractNumericId(e).compare(vt.extractNumericId(t)):SC(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return It.fromString(e.substring(4,e.length-2))}}const PC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dn extends vt{construct(e,t,s){return new dn(e,t,s)}static isValidIdentifier(e){return PC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wd}static keyField(){return new dn([wd])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new Ae(Ue,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(s),s=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new Ae(Ue,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Ae(Ue,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(s+=l,r++):(i(),r++)}if(i(),a)throw new Ae(Ue,"Unterminated ` in path: "+e);return new dn(t)}static emptyPath(){return new dn([])}}/**
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
 */function NC(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Id,Y;/**
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
 */(Y=Id||(Id={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class kC{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class DC{constructor(e,t=null,s=[],r=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.N=null,this.O=null,this.q=null,this.startAt,this.endAt}}/**
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
 */const VC="ComponentProvider",Ad=new Map;/**
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
 */const OC=1048576,xC="firestore.googleapis.com",Rd=!0;/**
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
 */class Cd{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new Ae(Ue,"Can't provide ssl option if host option is not set");this.host=xC,this.ssl=Rd}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Rd;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<OC)throw new Ae(Ue,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(i,a,l,c){if(a===!0&&c===!0)throw new Ae(Ue,"".concat(i," and ").concat(l," cannot be used together."))})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=NC((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Ae(Ue,"invalid long polling timeout: ".concat(i.timeoutSeconds," (must not be NaN)"));if(i.timeoutSeconds<5)throw new Ae(Ue,"invalid long polling timeout: ".concat(i.timeoutSeconds," (minimum allowed value is 5)"));if(i.timeoutSeconds>30)throw new Ae(Ue,"invalid long polling timeout: ".concat(i.timeoutSeconds," (maximum allowed value is 30)"))}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class LC{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ae(yd,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ae(yd,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new wC;switch(s.type){case"firstParty":return new RC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Ae(Ue,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Ad.get(t);s&&(EC(VC,"Removing Datastore"),Ad.delete(t),s.terminate())}(this),Promise.resolve()}}/**
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
 */class _c{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new _c(this.firestore,e,this._query)}}/**
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
 */class MC{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Ae(Ue,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}const FC=new RegExp("[~\\*/\\[\\]]");function UC(n,e,t){if(e.search(FC)>=0)throw Sd("Invalid field path (".concat(e,"). Paths must not contain '~', '*', '/', '[', or ']'"),n);try{return new MC(...e.split("."))._internalPath}catch(s){throw Sd("Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),n)}}function Sd(n,e,t,s,r){let i="Function ".concat(e,"() called with invalid data");i+=". ";let a="";return new Ae(Ue,i+n+a)}function BC(n,e){return UC(n,e)}/**
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
 */class qC{}class $C extends qC{}class mc extends $C{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new mc(e,t)}_apply(e){const t=function(r,i,a){if(r.startAt!==null)throw new Ae(Ue,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new Ae(Ue,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new kC(i,a)}(e._query,this._field,this._direction);return new _c(e.firestore,e.converter,function(r,i){const a=r.explicitOrderBy.concat([i]);return new DC(r.path,r.collectionGroup,a,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function zC(n,e="asc"){const t=e,s=BC("orderBy",n);return mc._create(s,t)}(function(){(function(t){yo=t})("".concat(zi,"_lite")),mn(new Gt("firestore/lite",(e,{instanceIdentifier:t,options:s})=>{const r=e.getProvider("app").getImmediate(),i=new LC(new IC(e.getProvider("auth-internal")),new CC(r,e.getProvider("app-check-internal")),function(l,c){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new Ae(Ue,'"projectId" not provided in firebase.initializeApp.');return new Fi(l.options.projectId,c)}(r,t),r);return s&&i._setSettings(s),i},"PUBLIC").setMultipleInstances(!0)),rt("firestore-lite",gd,""),rt("firestore-lite",gd,"esm2017")})();async function bd({user:n}){if(!n)return n;const e=Er(Pt(ue,"users",n.uid,"meta")),t=await Tr(e);if(t.docs.length===0)return n;const s=t.docs.filter(r=>r.id==="info");return s.length===0?n:{...n,...s[0].data()}}async function jC({by:n="uid",data:e="",return_type:t="IAuthor"}){const s=br;if(n==="uid"){const r=Qe(ue,"users",e),i=await Gv(r);if(i.exists()){const l={...i.data(),uid:e};s.data=l}else return console.error("No such document!"),{...s,status:"error",error:"No such document!"}}if(n==="nickname"){const r=Pt(ue,"users"),i=Er(r,Ri("nickname","==",e)),a=await Tr(i);if(a.docs.length>0)a.forEach(l=>{const c={uid:l.id,...l.data()};s.data=c});else return{...s,status:"error",error:"No such document!"}}switch(t){case"IAuthor":s.data=Object.assign(dm,s.data);break;case"IAuthorFull":const r=await bd({user:s.data});s.data=Object.assign(fm,r);break;case"IAuthorizedUser":const i=await bd({user:s.data});s.data=Object.assign(fC,i);break;default:s.data=Object.assign(hm,s.data);break}return s.data.avatar.url.length===0&&(s.data.avatar.url="img/EmptyAvatar.jpg"),s.status="success",s}const WC=async({count:n=50})=>{const e=br;try{const t=Pt(ue,"users"),s=Er(t,Ll(n)),r=await Tr(s),i=[];for(const a of r.docs){const c={...a.data(),uid:a.id};i.filter(h=>h.uid===c.uid).length>0||i.push(c)}e.data=i}catch(t){console.error("Ошибка получения пользователей:",t),e.status="error",e.error=t instanceof Error?t.message:"Unknown error"}return e.status="success",e},HC=async({post_uid:n="",page:e=0,limit_count:t=10})=>{const s=br;try{const r=Pt(ue,"posts",n,"comments"),i=e*t,a=Er(r,Ri("comment_id",">=",0),zC("comment_id","asc"),qv(i),Ll(t)),l=await Tr(a);s.data=[],l.forEach(c=>{const h={...c.data(),uid:c.id};s.data!==null&&s.data.push(h)})}catch(r){console.error(r),s.status="error",s.error=r}return s},GC=async({post_uid:n,user_uid:e})=>{const t=br;try{const s=Pt(ue,"likes"),r=Er(s,Ri("post_uid","==",n),Ri("user_uid","==",e),Ll(1)),i=await Tr(r);i.size>0&&i.forEach(a=>{t.data={...a.data(),uid:a.id}})}catch(s){console.error(s),t.status="error",t.error=s}return t.status="success",t},KC=Object.freeze(Object.defineProperty({__proto__:null,Comment:HC,Like:GC,User:jC,Users:WC},Symbol.toStringTag,{value:"Module"})),QC=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),YC=async({like_uid:n,post_uid:e})=>(await Ci(Qe(ue,"likes",n)),await vr(Qe(ue,"posts",e),{"likes.length":Nt(-1),post_weight:Nt(-1)}),!0),XC=async({comment_uid:n,post_uid:e})=>(await Ci(Qe(ue,"posts",e,"comments",n)),await vr(Qe(ue,"posts",e),{"comments.length":Nt(-1),post_weight:Nt(-1)}),!0),mm=async({media:n})=>{let e=br;e.data=[];try{n.forEach(t=>{const s=cm(um,t.path);iC(s).then(()=>{Array.isArray(e.data)||(e.data=[t.uid]),e.data.push(t.uid)})})}catch(t){e.status="error",e.error=t,console.error(t)}return e.status="success",e},JC=async({post:n})=>{if(!n.uid||n.uid.trim().length===0)return{status:"error",data:null,error:"Произошла ошибка при удалении поста!"};try{return await mm({media:n.media}),await Ci(Qe(ue,"posts",n.uid)),n.comments.length>0&&await Ci(Qe(ue,"posts",n.uid,"comments")),{status:"success",data:!0}}catch(e){return console.error(e),{status:"error",data:null,error:e}}},ZC=Object.freeze(Object.defineProperty({__proto__:null,Comment:XC,Like:YC,Media:mm,Post:JC},Symbol.toStringTag,{value:"Module"})),Pd={add:yC,get:KC,update:QC,remove:ZC},bS=sw((n,e)=>({userData:null,uploadedUsers:[],authorizedUserData:null,isUserLoading:!0,isAuthorizedUserLoading:!0,isUserError:!1,isAuthorizedUserError:!1,isMutateUserLoading:!1,isMutateUserError:!1,isSignedOut:!0,setIsSignedOut:t=>{n({isSignedOut:t})},setAuthorizedUserLoading:t=>{n({isAuthorizedUserLoading:t})},mutateUserData:async({userUid:t,name:s,surname:r,nickname:i,description:a})=>{n({isMutateUserLoading:!0,isMutateUserError:!1});try{const l=Qe(ue,"users",t);await Sh(ue,async c=>{if(!(await c.get(l)).exists())throw"Document does not exist!";c.update(l,{name:s,surname:r,nickname:i,description:a})}),n(c=>({isMutateUserLoading:!1,authorizedUserData:{...c.authorizedUserData,name:s,surname:r,nickname:i,description:a}}))}catch(l){console.error(l),n({isMutateUserLoading:!1,isMutateUserError:!!l})}},setAuthorizedUser:t=>{const s=e().authorizedUserData;if(t!==null){const{uid:r="",accessToken:i="",email:a=""}=t;n({authorizedUserData:{...s,uid:r,accessToken:i,email:a,isAuth:!!a}})}else n({authorizedUserData:{...s,uid:"",accessToken:"",email:"",isAuth:!1}})},getUser:async t=>{const{isAuthorized:s=!1}=t,r=e().authorizedUserData,a=e().uploadedUsers.filter(c=>{switch(t.by){case"uid":return c.uid===t.data;case"nickname":return c.nickname===t.data}});if(a.length>0){n({isUserError:!1});const c=a[0].type;switch(t.return_type){case"IAuthorizedUser":if(c==="IAuthorizedUser")return a[0];break;case"IAuthorFull":if(c==="IAuthorFull"||c==="IAuthorizedUser")return a[0];break;case"IAuthor":return a[0]}}let l=null;switch(s){case!0:n({isAuthorizedUserLoading:!0}),await Pd.get.User({by:"uid",data:t.data,return_type:"IAuthorizedUser"}).then(c=>{if(c.status==="success")return l={...c.data},n({authorizedUserData:{...r,...c.data}});if(c.status==="error")return n({isAuthorizedUserError:!0})}).finally(()=>n({isAuthorizedUserLoading:!1,isUserLoading:!1}));break;case!1:n({isUserLoading:!0}),await Pd.get.User(t).then(c=>{if(c.status==="success"&&(l={...c.data}),c.status==="error")return n({userData:null,isUserError:!0})}).finally(()=>n({isAuthorizedUserLoading:!1,isUserLoading:!1}));break}return l!==null&&n(c=>l!==null?c.uploadedUsers.filter(f=>f.uid===(l==null?void 0:l.uid)).length>0?{uploadedUsers:c.uploadedUsers.map(f=>f.uid===(l==null?void 0:l.uid)?l:f)}:{uploadedUsers:[...c.uploadedUsers,l]}:{}),l},setAvatar:async(t,s)=>{try{const r=Qe(ue,"users",t);await Sh(ue,async i=>{if(!(await i.get(r)).exists())throw"Document does not exist!";i.update(r,{avatar:{url:s}})}),n(i=>({authorizedUserData:{...i.authorizedUserData,avatar:{url:s}}}))}catch(r){console.error(r)}}}));export{Pd as A,xd as B,cg as C,W as D,Ld as E,sS as F,iS as G,oS as H,tn as I,aa as J,nS as K,qi as L,mn as M,Gt as N,rt as O,aS as P,CS as Q,Er as R,zi as S,Ri as T,AS as U,Ll as V,RS as W,qv as X,ui as Y,Xa as _,Pt as a,Gv as b,sw as c,iC as d,Qe as e,ue as f,Tr as g,vr as h,go as i,Kv as j,fC as k,Si as l,dC as m,Ja as n,tS as o,ag as p,Ee as q,cm as r,um as s,Xs as t,bS as u,Qa as v,rS as w,$i as x,Eu as y,Eg as z};
