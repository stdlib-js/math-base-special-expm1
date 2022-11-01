// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-high-word@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.7-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-half-ln-two@esm/index.mjs";var m=.6931471803691238,o=1.9082149292705877e-10;function f(f){var l,a,j,h,p,b,c,u,g,v,x,w;if(f===n||t(f))return f;if(f===r)return-1;if(0===f)return f;if(f<0?(a=!0,c=-f):(a=!1,c=f),c>=38.816242111356935){if(a)return-1;if(c>=709.782712893384)return n}if(p=0|s(c),c>d)c<1.0397207708399179?a?(j=f+m,h=-o,w=-1):(j=f-m,h=o,w=1):(w=a?1.4426950408889634*f-.5:1.4426950408889634*f+.5,j=f-(v=w|=0)*m,h=v*o),g=j-(f=j-h)-h;else{if(p<1016070144)return f;w=0}return b=1+(u=f*(l=.5*f))*function(t){return 0===t?-.03333333333333313:t*(.0015873015872548146+t*(t*(4008217827329362e-21+-2.0109921818362437e-7*t)-793650757867488e-19))-.03333333333333313}(u),x=u*((b-(v=3-b*l))/(6-f*v)),0===w?f-(f*x-u):(x=f*(x-g)-g,x-=u,-1===w?.5*(f-x)-.5:1===w?f<-.25?-2*(x-(f+.5)):1+2*(f-x):w<=-2||w>56?(j=s(c=1-(x-f))+(w<<20)|0,(c=e(c,j))-1):(v=1,w<20?c=(v=e(v,j=1072693248-(2097152>>w)|0))-(x-f):(c=f-(x+(v=e(v,j=i-w<<20|0))),c+=1),j=s(c)+(w<<20)|0,e(c,j)))}export{f as default};
//# sourceMappingURL=index.mjs.map
