// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var e=r&&"symbol"==typeof Symbol.toStringTag?function(r){var e,i,a,f,u;if(null==r)return n.call(r);i=r[o],u=o,e=null!=(f=r)&&t.call(f,u);try{r[o]=void 0}catch(t){return n.call(r)}return a=n.call(r),e?r[o]=i:delete r[o],a}:function(r){return n.call(r)},i="function"==typeof Uint32Array;var a="function"==typeof Uint32Array?Uint32Array:null;var f,u="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var r,n,t;if("function"!=typeof a)return!1;try{n=new a(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(i&&t instanceof Uint32Array||"[object Uint32Array]"===e(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?u:function(){throw new Error("not implemented")};var y=f,c="function"==typeof Float64Array;var l="function"==typeof Float64Array?Float64Array:null;var v,p="function"==typeof Float64Array?Float64Array:void 0;v=function(){var r,n,t;if("function"!=typeof l)return!1;try{n=new l([1,3.14,-3.14,NaN]),t=n,r=(c&&t instanceof Float64Array||"[object Float64Array]"===e(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var A=v,U="function"==typeof Uint8Array;var w="function"==typeof Uint8Array?Uint8Array:null;var b,m="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var r,n,t;if("function"!=typeof w)return!1;try{n=new w(n=[1,3.14,-3.14,256,257]),t=n,r=(U&&t instanceof Uint8Array||"[object Uint8Array]"===e(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var d=b,h="function"==typeof Uint16Array;var s="function"==typeof Uint16Array?Uint16Array:null;var F,I="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s(n=[1,3.14,-3.14,65536,65537]),t=n,r=(h&&t instanceof Uint16Array||"[object Uint16Array]"===e(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var N,S={uint16:F,uint8:d};(N=new S.uint16(1))[0]=4660;var E=52===new S.uint8(N.buffer)[0],j=!0===E?1:0,T=new A(1),g=new y(T.buffer);function O(r){return T[0]=r,g[j]}var P=!0===E?1:0,V=new A(1),Y=new y(V.buffer);function _(r,n){return V[0]=r,Y[P]=n>>>0,V[0]}var x=Number.POSITIVE_INFINITY,G=Number.NEGATIVE_INFINITY;var k=.6931471803691238,q=1.9082149292705877e-10;function z(r){var n,t,o,e,i,a,f,u,y,c,l,v;if(r===x||function(r){return r!=r}(r))return r;if(r===G)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return x}if(i=0|O(f),f>.34657359027997264)f<1.0397207708399179?t?(o=r+k,e=-q,v=-1):(o=r-k,e=q,v=1):(v=t?1.4426950408889634*r-.5:1.4426950408889634*r+.5,o=r-(c=v|=0)*k,e=c*q),y=o-(r=o-e)-e;else{if(i<1016070144)return r;v=0}return a=1+(u=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(u),l=u*((a-(c=3-a*n))/(6-r*c)),0===v?r-(r*l-u):(l=r*(l-y)-y,l-=u,-1===v?.5*(r-l)-.5:1===v?r<-.25?-2*(l-(r+.5)):1+2*(r-l):v<=-2||v>56?(f=_(f=1-(l-r),o=O(f)+(v<<20)|0))-1:(c=1,v<20?f=(c=_(c,o=1072693248-(2097152>>v)|0))-(l-r):(f=r-(l+(c=_(c,o=1023-v<<20|0))),f+=1),_(f,o=O(f)+(v<<20)|0)))}export{z as default};
//# sourceMappingURL=mod.js.map