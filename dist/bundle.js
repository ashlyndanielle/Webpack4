!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=7)}([function(t,r,e){"use strict";var n=e(2),o="object"==typeof self&&self&&self.Object===Object&&self,a=n.a||o||Function("return this")();r.a=a},function(t,r,e){"use strict";(function(t){var n=e(0),o=e(5),a="object"==typeof exports&&exports&&!exports.nodeType&&exports,u=a&&"object"==typeof t&&t&&!t.nodeType&&t,i=u&&u.exports===a?n.a.Buffer:void 0,c=(i?i.isBuffer:void 0)||o.a;r.a=c}).call(this,e(4)(t))},function(t,r,e){"use strict";(function(t){var e="object"==typeof t&&t&&t.Object===Object&&t;r.a=e}).call(this,e(6))},function(t,r,e){"use strict";(function(t){var n=e(2),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,a=o&&"object"==typeof t&&t&&!t.nodeType&&t,u=a&&a.exports===o&&n.a.process,i=function(){try{var t=a&&a.require&&a.require("util").types;return t||u&&u.binding&&u.binding("util")}catch(t){}}();r.a=i}).call(this,e(4)(t))},function(t,r){t.exports=function(t){if(!t.webpackPolyfill){var r=Object.create(t);r.children||(r.children=[]),Object.defineProperty(r,"loaded",{enumerable:!0,get:function(){return r.l}}),Object.defineProperty(r,"id",{enumerable:!0,get:function(){return r.i}}),Object.defineProperty(r,"exports",{enumerable:!0}),r.webpackPolyfill=1}return r}},function(t,r,e){"use strict";r.a=function(){return!1}},function(t,r){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,r,e){"use strict";e.r(r);var n=e(0),o=n.a.Symbol,a=Object.prototype,u=a.hasOwnProperty,i=a.toString,c=o?o.toStringTag:void 0;var f=function(t){var r=u.call(t,c),e=t[c];try{t[c]=void 0;var n=!0}catch(t){}var o=i.call(t);return n&&(r?t[c]=e:delete t[c]),o},s=Object.prototype.toString;var l=function(t){return s.call(t)},v="[object Null]",p="[object Undefined]",b=o?o.toStringTag:void 0;var h=function(t){return null==t?void 0===t?p:v:b&&b in Object(t)?f(t):l(t)};var y=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},_="[object AsyncFunction]",d="[object Function]",j="[object GeneratorFunction]",g="[object Proxy]";var O=function(t){if(!y(t))return!1;var r=h(t);return r==d||r==j||r==_||r==g},w=n.a["__core-js_shared__"],m=function(){var t=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();var S=function(t){return!!m&&m in t},A=Function.prototype.toString;var P=function(t){if(null!=t){try{return A.call(t)}catch(t){}try{return t+""}catch(t){}}return""},z=/^\[object .+?Constructor\]$/,x=Function.prototype,k=Object.prototype,M=x.toString,E=k.hasOwnProperty,T=RegExp("^"+M.call(E).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var $=function(t){return!(!y(t)||S(t))&&(O(t)?T:z).test(P(t))};var F=function(t,r){return null==t?void 0:t[r]};var B=function(t,r){var e=F(t,r);return $(e)?e:void 0},D=function(){try{var t=B(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var C=function(t,r,e){"__proto__"==r&&D?D(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e};var I=function(t,r,e,n){for(var o=-1,a=null==t?0:t.length;++o<a;){var u=t[o];r(n,u,e(u),t)}return n};var L=function(t){return function(r,e,n){for(var o=-1,a=Object(r),u=n(r),i=u.length;i--;){var c=u[t?i:++o];if(!1===e(a[c],c,a))break}return r}}();var U=function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n};var V=function(t){return null!=t&&"object"==typeof t},N="[object Arguments]";var R=function(t){return V(t)&&h(t)==N},W=Object.prototype,J=W.hasOwnProperty,q=W.propertyIsEnumerable,G=R(function(){return arguments}())?R:function(t){return V(t)&&J.call(t,"callee")&&!q.call(t,"callee")},H=Array.isArray,K=e(1),Q=9007199254740991,X=/^(?:0|[1-9]\d*)$/;var Y=function(t,r){var e=typeof t;return!!(r=null==r?Q:r)&&("number"==e||"symbol"!=e&&X.test(t))&&t>-1&&t%1==0&&t<r},Z=9007199254740991;var tt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Z},rt={};rt["[object Float32Array]"]=rt["[object Float64Array]"]=rt["[object Int8Array]"]=rt["[object Int16Array]"]=rt["[object Int32Array]"]=rt["[object Uint8Array]"]=rt["[object Uint8ClampedArray]"]=rt["[object Uint16Array]"]=rt["[object Uint32Array]"]=!0,rt["[object Arguments]"]=rt["[object Array]"]=rt["[object ArrayBuffer]"]=rt["[object Boolean]"]=rt["[object DataView]"]=rt["[object Date]"]=rt["[object Error]"]=rt["[object Function]"]=rt["[object Map]"]=rt["[object Number]"]=rt["[object Object]"]=rt["[object RegExp]"]=rt["[object Set]"]=rt["[object String]"]=rt["[object WeakMap]"]=!1;var et=function(t){return V(t)&&tt(t.length)&&!!rt[h(t)]};var nt=function(t){return function(r){return t(r)}},ot=e(3),at=ot.a&&ot.a.isTypedArray,ut=at?nt(at):et,it=Object.prototype.hasOwnProperty;var ct=function(t,r){var e=H(t),n=!e&&G(t),o=!e&&!n&&Object(K.a)(t),a=!e&&!n&&!o&&ut(t),u=e||n||o||a,i=u?U(t.length,String):[],c=i.length;for(var f in t)!r&&!it.call(t,f)||u&&("length"==f||o&&("offset"==f||"parent"==f)||a&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Y(f,c))||i.push(f);return i},ft=Object.prototype;var st=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||ft)};var lt=function(t,r){return function(e){return t(r(e))}}(Object.keys,Object),vt=Object.prototype.hasOwnProperty;var pt=function(t){if(!st(t))return lt(t);var r=[];for(var e in Object(t))vt.call(t,e)&&"constructor"!=e&&r.push(e);return r};var bt=function(t){return null!=t&&tt(t.length)&&!O(t)};var ht=function(t){return bt(t)?ct(t):pt(t)};var yt=function(t,r){return function(e,n){if(null==e)return e;if(!bt(e))return t(e,n);for(var o=e.length,a=r?o:-1,u=Object(e);(r?a--:++a<o)&&!1!==n(u[a],a,u););return e}}(function(t,r){return t&&L(t,r,ht)});var _t=function(t,r,e,n){return yt(t,function(t,o,a){r(n,t,e(t),a)}),n};var dt=function(){this.__data__=[],this.size=0};var jt=function(t,r){return t===r||t!=t&&r!=r};var gt=function(t,r){for(var e=t.length;e--;)if(jt(t[e][0],r))return e;return-1},Ot=Array.prototype.splice;var wt=function(t){var r=this.__data__,e=gt(r,t);return!(e<0||(e==r.length-1?r.pop():Ot.call(r,e,1),--this.size,0))};var mt=function(t){var r=this.__data__,e=gt(r,t);return e<0?void 0:r[e][1]};var St=function(t){return gt(this.__data__,t)>-1};var At=function(t,r){var e=this.__data__,n=gt(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function Pt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Pt.prototype.clear=dt,Pt.prototype.delete=wt,Pt.prototype.get=mt,Pt.prototype.has=St,Pt.prototype.set=At;var zt=Pt;var xt=function(){this.__data__=new zt,this.size=0};var kt=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e};var Mt=function(t){return this.__data__.get(t)};var Et=function(t){return this.__data__.has(t)},Tt=B(n.a,"Map"),$t=B(Object,"create");var Ft=function(){this.__data__=$t?$t(null):{},this.size=0};var Bt=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},Dt="__lodash_hash_undefined__",Ct=Object.prototype.hasOwnProperty;var It=function(t){var r=this.__data__;if($t){var e=r[t];return e===Dt?void 0:e}return Ct.call(r,t)?r[t]:void 0},Lt=Object.prototype.hasOwnProperty;var Ut=function(t){var r=this.__data__;return $t?void 0!==r[t]:Lt.call(r,t)},Vt="__lodash_hash_undefined__";var Nt=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=$t&&void 0===r?Vt:r,this};function Rt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Rt.prototype.clear=Ft,Rt.prototype.delete=Bt,Rt.prototype.get=It,Rt.prototype.has=Ut,Rt.prototype.set=Nt;var Wt=Rt;var Jt=function(){this.size=0,this.__data__={hash:new Wt,map:new(Tt||zt),string:new Wt}};var qt=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var Gt=function(t,r){var e=t.__data__;return qt(r)?e["string"==typeof r?"string":"hash"]:e.map};var Ht=function(t){var r=Gt(this,t).delete(t);return this.size-=r?1:0,r};var Kt=function(t){return Gt(this,t).get(t)};var Qt=function(t){return Gt(this,t).has(t)};var Xt=function(t,r){var e=Gt(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function Yt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Yt.prototype.clear=Jt,Yt.prototype.delete=Ht,Yt.prototype.get=Kt,Yt.prototype.has=Qt,Yt.prototype.set=Xt;var Zt=Yt,tr=200;var rr=function(t,r){var e=this.__data__;if(e instanceof zt){var n=e.__data__;if(!Tt||n.length<tr-1)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new Zt(n)}return e.set(t,r),this.size=e.size,this};function er(t){var r=this.__data__=new zt(t);this.size=r.size}er.prototype.clear=xt,er.prototype.delete=kt,er.prototype.get=Mt,er.prototype.has=Et,er.prototype.set=rr;var nr=er,or="__lodash_hash_undefined__";var ar=function(t){return this.__data__.set(t,or),this};var ur=function(t){return this.__data__.has(t)};function ir(t){var r=-1,e=null==t?0:t.length;for(this.__data__=new Zt;++r<e;)this.add(t[r])}ir.prototype.add=ir.prototype.push=ar,ir.prototype.has=ur;var cr=ir;var fr=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n;)if(r(t[e],e,t))return!0;return!1};var sr=function(t,r){return t.has(r)},lr=1,vr=2;var pr=function(t,r,e,n,o,a){var u=e&lr,i=t.length,c=r.length;if(i!=c&&!(u&&c>i))return!1;var f=a.get(t);if(f&&a.get(r))return f==r;var s=-1,l=!0,v=e&vr?new cr:void 0;for(a.set(t,r),a.set(r,t);++s<i;){var p=t[s],b=r[s];if(n)var h=u?n(b,p,s,r,t,a):n(p,b,s,t,r,a);if(void 0!==h){if(h)continue;l=!1;break}if(v){if(!fr(r,function(t,r){if(!sr(v,r)&&(p===t||o(p,t,e,n,a)))return v.push(r)})){l=!1;break}}else if(p!==b&&!o(p,b,e,n,a)){l=!1;break}}return a.delete(t),a.delete(r),l},br=n.a.Uint8Array;var hr=function(t){var r=-1,e=Array(t.size);return t.forEach(function(t,n){e[++r]=[n,t]}),e};var yr=function(t){var r=-1,e=Array(t.size);return t.forEach(function(t){e[++r]=t}),e},_r=1,dr=2,jr="[object Boolean]",gr="[object Date]",Or="[object Error]",wr="[object Map]",mr="[object Number]",Sr="[object RegExp]",Ar="[object Set]",Pr="[object String]",zr="[object Symbol]",xr="[object ArrayBuffer]",kr="[object DataView]",Mr=o?o.prototype:void 0,Er=Mr?Mr.valueOf:void 0;var Tr=function(t,r,e,n,o,a,u){switch(e){case kr:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case xr:return!(t.byteLength!=r.byteLength||!a(new br(t),new br(r)));case jr:case gr:case mr:return jt(+t,+r);case Or:return t.name==r.name&&t.message==r.message;case Sr:case Pr:return t==r+"";case wr:var i=hr;case Ar:var c=n&_r;if(i||(i=yr),t.size!=r.size&&!c)return!1;var f=u.get(t);if(f)return f==r;n|=dr,u.set(t,r);var s=pr(i(t),i(r),n,o,a,u);return u.delete(t),s;case zr:if(Er)return Er.call(t)==Er.call(r)}return!1};var $r=function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t};var Fr=function(t,r,e){var n=r(t);return H(t)?n:$r(n,e(t))};var Br=function(t,r){for(var e=-1,n=null==t?0:t.length,o=0,a=[];++e<n;){var u=t[e];r(u,e,t)&&(a[o++]=u)}return a};var Dr=function(){return[]},Cr=Object.prototype.propertyIsEnumerable,Ir=Object.getOwnPropertySymbols,Lr=Ir?function(t){return null==t?[]:(t=Object(t),Br(Ir(t),function(r){return Cr.call(t,r)}))}:Dr;var Ur=function(t){return Fr(t,ht,Lr)},Vr=1,Nr=Object.prototype.hasOwnProperty;var Rr=function(t,r,e,n,o,a){var u=e&Vr,i=Ur(t),c=i.length;if(c!=Ur(r).length&&!u)return!1;for(var f=c;f--;){var s=i[f];if(!(u?s in r:Nr.call(r,s)))return!1}var l=a.get(t);if(l&&a.get(r))return l==r;var v=!0;a.set(t,r),a.set(r,t);for(var p=u;++f<c;){var b=t[s=i[f]],h=r[s];if(n)var y=u?n(h,b,s,r,t,a):n(b,h,s,t,r,a);if(!(void 0===y?b===h||o(b,h,e,n,a):y)){v=!1;break}p||(p="constructor"==s)}if(v&&!p){var _=t.constructor,d=r.constructor;_!=d&&"constructor"in t&&"constructor"in r&&!("function"==typeof _&&_ instanceof _&&"function"==typeof d&&d instanceof d)&&(v=!1)}return a.delete(t),a.delete(r),v},Wr=B(n.a,"DataView"),Jr=B(n.a,"Promise"),qr=B(n.a,"Set"),Gr=B(n.a,"WeakMap"),Hr=P(Wr),Kr=P(Tt),Qr=P(Jr),Xr=P(qr),Yr=P(Gr),Zr=h;(Wr&&"[object DataView]"!=Zr(new Wr(new ArrayBuffer(1)))||Tt&&"[object Map]"!=Zr(new Tt)||Jr&&"[object Promise]"!=Zr(Jr.resolve())||qr&&"[object Set]"!=Zr(new qr)||Gr&&"[object WeakMap]"!=Zr(new Gr))&&(Zr=function(t){var r=h(t),e="[object Object]"==r?t.constructor:void 0,n=e?P(e):"";if(n)switch(n){case Hr:return"[object DataView]";case Kr:return"[object Map]";case Qr:return"[object Promise]";case Xr:return"[object Set]";case Yr:return"[object WeakMap]"}return r});var te=Zr,re=1,ee="[object Arguments]",ne="[object Array]",oe="[object Object]",ae=Object.prototype.hasOwnProperty;var ue=function(t,r,e,n,o,a){var u=H(t),i=H(r),c=u?ne:te(t),f=i?ne:te(r),s=(c=c==ee?oe:c)==oe,l=(f=f==ee?oe:f)==oe,v=c==f;if(v&&Object(K.a)(t)){if(!Object(K.a)(r))return!1;u=!0,s=!1}if(v&&!s)return a||(a=new nr),u||ut(t)?pr(t,r,e,n,o,a):Tr(t,r,c,e,n,o,a);if(!(e&re)){var p=s&&ae.call(t,"__wrapped__"),b=l&&ae.call(r,"__wrapped__");if(p||b){var h=p?t.value():t,y=b?r.value():r;return a||(a=new nr),o(h,y,e,n,a)}}return!!v&&(a||(a=new nr),Rr(t,r,e,n,o,a))};var ie=function t(r,e,n,o,a){return r===e||(null==r||null==e||!V(r)&&!V(e)?r!=r&&e!=e:ue(r,e,n,o,t,a))},ce=1,fe=2;var se=function(t,r,e,n){var o=e.length,a=o,u=!n;if(null==t)return!a;for(t=Object(t);o--;){var i=e[o];if(u&&i[2]?i[1]!==t[i[0]]:!(i[0]in t))return!1}for(;++o<a;){var c=(i=e[o])[0],f=t[c],s=i[1];if(u&&i[2]){if(void 0===f&&!(c in t))return!1}else{var l=new nr;if(n)var v=n(f,s,c,t,r,l);if(!(void 0===v?ie(s,f,ce|fe,n,l):v))return!1}}return!0};var le=function(t){return t==t&&!y(t)};var ve=function(t){for(var r=ht(t),e=r.length;e--;){var n=r[e],o=t[n];r[e]=[n,o,le(o)]}return r};var pe=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}};var be=function(t){var r=ve(t);return 1==r.length&&r[0][2]?pe(r[0][0],r[0][1]):function(e){return e===t||se(e,t,r)}},he="[object Symbol]";var ye=function(t){return"symbol"==typeof t||V(t)&&h(t)==he},_e=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,de=/^\w*$/;var je=function(t,r){if(H(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!ye(t))||de.test(t)||!_e.test(t)||null!=r&&t in Object(r)},ge="Expected a function";function Oe(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError(ge);var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],a=e.cache;if(a.has(o))return a.get(o);var u=t.apply(this,n);return e.cache=a.set(o,u)||a,u};return e.cache=new(Oe.Cache||Zt),e}Oe.Cache=Zt;var we=Oe,me=500;var Se=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ae=/\\(\\)?/g,Pe=function(t){var r=we(t,function(t){return e.size===me&&e.clear(),t}),e=r.cache;return r}(function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(Se,function(t,e,n,o){r.push(n?o.replace(Ae,"$1"):e||t)}),r});var ze=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o},xe=1/0,ke=o?o.prototype:void 0,Me=ke?ke.toString:void 0;var Ee=function t(r){if("string"==typeof r)return r;if(H(r))return ze(r,t)+"";if(ye(r))return Me?Me.call(r):"";var e=r+"";return"0"==e&&1/r==-xe?"-0":e};var Te=function(t){return null==t?"":Ee(t)};var $e=function(t,r){return H(t)?t:je(t,r)?[t]:Pe(Te(t))},Fe=1/0;var Be=function(t){if("string"==typeof t||ye(t))return t;var r=t+"";return"0"==r&&1/t==-Fe?"-0":r};var De=function(t,r){for(var e=0,n=(r=$e(r,t)).length;null!=t&&e<n;)t=t[Be(r[e++])];return e&&e==n?t:void 0};var Ce=function(t,r,e){var n=null==t?void 0:De(t,r);return void 0===n?e:n};var Ie=function(t,r){return null!=t&&r in Object(t)};var Le=function(t,r,e){for(var n=-1,o=(r=$e(r,t)).length,a=!1;++n<o;){var u=Be(r[n]);if(!(a=null!=t&&e(t,u)))break;t=t[u]}return a||++n!=o?a:!!(o=null==t?0:t.length)&&tt(o)&&Y(u,o)&&(H(t)||G(t))};var Ue=function(t,r){return null!=t&&Le(t,r,Ie)},Ve=1,Ne=2;var Re=function(t,r){return je(t)&&le(r)?pe(Be(t),r):function(e){var n=Ce(e,t);return void 0===n&&n===r?Ue(e,t):ie(r,n,Ve|Ne)}};var We=function(t){return t};var Je=function(t){return function(r){return null==r?void 0:r[t]}};var qe=function(t){return function(r){return De(r,t)}};var Ge=function(t){return je(t)?Je(Be(t)):qe(t)};var He=function(t){return"function"==typeof t?t:null==t?We:"object"==typeof t?H(t)?Re(t[0],t[1]):be(t):Ge(t)};var Ke=function(t,r){return function(e,n){var o=H(e)?I:_t,a=r?r():{};return o(e,t,He(n,2),a)}},Qe=Object.prototype.hasOwnProperty;const Xe=Ke(function(t,r,e){Qe.call(t,e)?t[e].push(r):C(t,e,[r])})([{manager:"Jen",name:"Bob"},{manager:"John",name:"Sue"},{manager:"Stan",name:"Shirley"}],"manager"),Ye=document.createElement("div");Ye.innerHTML=`<pre>${JSON.stringify(Xe,null,2)}</pre>`,document.body.appendChild(Ye)}]);