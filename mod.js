// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol:void 0,e="function"==typeof o?o.toStringTag:"";var i=r&&"symbol"==typeof Symbol.toStringTag?function(r){var o,i,a,f,u;if(null==r)return n.call(r);i=r[e],u=e,o=null!=(f=r)&&t.call(f,u);try{r[e]=void 0}catch(t){return n.call(r)}return a=n.call(r),o?r[e]=i:delete r[e],a}:function(r){return n.call(r)},a="function"==typeof Uint32Array;var f="function"==typeof Uint32Array?Uint32Array:null;var u,y="function"==typeof Uint32Array?Uint32Array:void 0;u=function(){var r,n,t;if("function"!=typeof f)return!1;try{n=new f(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(a&&t instanceof Uint32Array||"[object Uint32Array]"===i(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?y:function(){throw new Error("not implemented")};var c=u,l="function"==typeof Float64Array;var v="function"==typeof Float64Array?Float64Array:null;var p,A="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v([1,3.14,-3.14,NaN]),t=n,r=(l&&t instanceof Float64Array||"[object Float64Array]"===i(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?A:function(){throw new Error("not implemented")};var w=p,U="function"==typeof Uint8Array;var b="function"==typeof Uint8Array?Uint8Array:null;var m,d="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,n,t;if("function"!=typeof b)return!1;try{n=new b(n=[1,3.14,-3.14,256,257]),t=n,r=(U&&t instanceof Uint8Array||"[object Uint8Array]"===i(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var I=m,h="function"==typeof Uint16Array;var s="function"==typeof Uint16Array?Uint16Array:null;var F,N="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s(n=[1,3.14,-3.14,65536,65537]),t=n,r=(h&&t instanceof Uint16Array||"[object Uint16Array]"===i(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var S,E={uint16:F,uint8:I};(S=new E.uint16(1))[0]=4660;var j=52===new E.uint8(S.buffer)[0],O=!0===j?1:0,T=new w(1),g=new c(T.buffer);function H(r){return T[0]=r,g[O]}var G,L,P=!0===j?1:0,V=new w(1),W=new c(V.buffer);function Y(r,n){return V[0]=r,W[P]=n>>>0,V[0]}!0===j?(G=1,L=0):(G=0,L=1);var _={HIGH:G,LOW:L},x=new w(1),k=new c(x.buffer),q=_.HIGH,z=_.LOW;var B=Number.POSITIVE_INFINITY,C=Number.NEGATIVE_INFINITY;var D=.6931471803691238,J=1.9082149292705877e-10,K=1.4426950408889634;function M(r){var n,t,o,e,i,a,f,u,y,c,l,v,p,A,w;if(r===B||function(r){return r!=r}(r))return r;if(r===C)return-1;if(0===r)return r;if(r<0?(o=!0,u=-r):(o=!1,u=r),u>=38.816242111356935){if(o)return-1;if(u>=709.782712893384)return B}if(a=0|H(u),u>.34657359027997264)u<1.0397207708399179?o?(e=r+D,i=-J,p=-1):(e=r-D,i=J,p=1):(p=o?K*r-.5:K*r+.5,e=r-(l=p|=0)*D,i=l*J),c=e-(r=e-i)-i;else{if(a<1016070144)return r;p=0}return f=1+(y=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(y),v=y*((f-(l=3-f*n))/(6-r*l)),0===p?r-(r*v-y):(A=1023+p<<20,w=0,k[q]=A,k[z]=w,t=x[0],v=r*(v-c)-c,v-=y,-1===p?.5*(r-v)-.5:1===p?r<-.25?-2*(v-(r+.5)):1+2*(r-v):p<=-2||p>56?(u=1-(v-r),1024===p?u=Y(u,e=H(u)+(p<<20)|0):u*=t,u-1):(l=1,p<20?u=(l=Y(l,e=1072693248-(2097152>>p)|0))-(v-r):(u=r-(v+(l=Y(l,e=1023-p<<20|0))),u+=1),u*=t))}export{M as default};
//# sourceMappingURL=mod.js.map
