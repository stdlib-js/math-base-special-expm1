// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-high-word@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-from-words@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-half-ln-two@v0.2.2-esm/index.mjs";var o=.6931471803691238,f=1.9082149292705877e-10,l=1.4426950408889634;function a(a){var j,h,p,v,b,c,u,g,x,w,k,q,y;if(a===r||t(a))return a;if(a===i)return-1;if(0===a)return a;if(a<0?(p=!0,g=-a):(p=!1,g=a),g>=38.816242111356935){if(p)return-1;if(g>=709.782712893384)return r}if(c=0|s(g),g>d)g<1.0397207708399179?p?(v=a+o,b=-f,y=-1):(v=a-o,b=f,y=1):(y=p?l*a-.5:l*a+.5,v=a-(k=y|=0)*o,b=k*f),w=v-(a=v-b)-b;else{if(c<1016070144)return a;y=0}return u=1+(x=a*(j=.5*a))*function(t){return 0===t?-.03333333333333313:t*(.0015873015872548146+t*(t*(4008217827329362e-21+-2.0109921818362437e-7*t)-793650757867488e-19))-.03333333333333313}(x),q=x*((u-(k=3-u*j))/(6-a*k)),0===y?a-(a*q-x):(h=n(m+y<<20,0),q=a*(q-w)-w,q-=x,-1===y?.5*(a-q)-.5:1===y?a<-.25?-2*(q-(a+.5)):1+2*(a-q):y<=-2||y>56?(g=1-(q-a),1024===y?(v=s(g)+(y<<20)|0,g=e(g,v)):g*=h,g-1):(k=1,y<20?g=(k=e(k,v=1072693248-(2097152>>y)|0))-(q-a):(g=a-(q+(k=e(k,v=m-y<<20|0))),g+=1),g*=h))}export{a as default};
//# sourceMappingURL=index.mjs.map
