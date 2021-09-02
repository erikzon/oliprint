function e(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=e("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"),n=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function r(e){if(b(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=r(S(i)?o(i):i);if(s)for(const e in s)t[e]=s[e]}return t}if(A(e))return e}const i=/;(?![^(]*\))/g,s=/:(.+)/;function o(e){const t={};return e.split(i).forEach((e=>{if(e){const n=e.split(s);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function a(e){let t="";if(S(e))t=e;else if(b(e))for(let n=0;n<e.length;n++){const r=a(e[n]);r&&(t+=r+" ")}else if(A(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const c=e=>null==e?"":A(e)?JSON.stringify(e,l,2):String(e),l=(e,t)=>E(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:T(t)?{[`Set(${t.size})`]:[...t.values()]}:!A(t)||b(t)||O(t)?t:String(t),u={},h=[],d=()=>{},f=()=>!1,p=/^on[^a-z]/,g=e=>p.test(e),m=e=>e.startsWith("onUpdate:"),y=Object.assign,v=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},w=Object.prototype.hasOwnProperty,_=(e,t)=>w.call(e,t),b=Array.isArray,E=e=>"[object Map]"===N(e),T=e=>"[object Set]"===N(e),I=e=>"function"==typeof e,S=e=>"string"==typeof e,k=e=>"symbol"==typeof e,A=e=>null!==e&&"object"==typeof e,C=e=>A(e)&&I(e.then)&&I(e.catch),R=Object.prototype.toString,N=e=>R.call(e),O=e=>"[object Object]"===N(e),D=e=>S(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,x=e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),L=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},P=/-(\w)/g,M=L((e=>e.replace(P,((e,t)=>t?t.toUpperCase():"")))),U=/\B([A-Z])/g,F=L((e=>e.replace(U,"-$1").toLowerCase())),V=L((e=>e.charAt(0).toUpperCase()+e.slice(1))),j=L((e=>e?`on${V(e)}`:"")),B=(e,t)=>e!==t&&(e==e||t==t),q=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},z=e=>{const t=parseFloat(e);return isNaN(t)?e:t},H=new WeakMap,K=[];let G;const W=Symbol(""),X=Symbol("");function Q(e,t=u){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const n=function(e,t){const n=function(){if(!n.active)return e();if(!K.includes(n)){Z(n);try{return te.push(ee),ee=!0,K.push(n),G=n,e()}finally{K.pop(),re(),G=K[K.length-1]}}};return n.id=J++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(e,t);return t.lazy||n(),n}function Y(e){e.active&&(Z(e),e.options.onStop&&e.options.onStop(),e.active=!1)}let J=0;function Z(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ee=!0;const te=[];function ne(){te.push(ee),ee=!1}function re(){const e=te.pop();ee=void 0===e||e}function ie(e,t,n){if(!ee||void 0===G)return;let r=H.get(e);r||H.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=new Set),i.has(G)||(i.add(G),G.deps.push(i))}function se(e,t,n,r,i,s){const o=H.get(e);if(!o)return;const a=new Set,c=e=>{e&&e.forEach((e=>{(e!==G||e.allowRecurse)&&a.add(e)}))};if("clear"===t)o.forEach(c);else if("length"===n&&b(e))o.forEach(((e,t)=>{("length"===t||t>=r)&&c(e)}));else switch(void 0!==n&&c(o.get(n)),t){case"add":b(e)?D(n)&&c(o.get("length")):(c(o.get(W)),E(e)&&c(o.get(X)));break;case"delete":b(e)||(c(o.get(W)),E(e)&&c(o.get(X)));break;case"set":E(e)&&c(o.get(W))}a.forEach((e=>{e.options.scheduler?e.options.scheduler(e):e()}))}const oe=e("__proto__,__v_isRef,__isVue"),ae=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(k)),ce=fe(),le=fe(!1,!0),ue=fe(!0),he=de();function de(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{const n=Array.prototype[t];e[t]=function(...e){const t=Je(this);for(let n=0,i=this.length;n<i;n++)ie(t,0,n+"");const r=n.apply(t,e);return-1===r||!1===r?n.apply(t,e.map(Je)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{const n=Array.prototype[t];e[t]=function(...e){ne();const t=n.apply(this,e);return re(),t}})),e}function fe(e=!1,t=!1){return function(n,r,i){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&i===(e?t?ze:$e:t?qe:Be).get(n))return n;const s=b(n);if(!e&&s&&_(he,r))return Reflect.get(he,r,i);const o=Reflect.get(n,r,i);if(k(r)?ae.has(r):oe(r))return o;if(e||ie(n,0,r),t)return o;if(tt(o)){return!s||!D(r)?o.value:o}return A(o)?e?Ge(o):Ke(o):o}}function pe(e=!1){return function(t,n,r,i){let s=t[n];if(!e&&(r=Je(r),s=Je(s),!b(t)&&tt(s)&&!tt(r)))return s.value=r,!0;const o=b(t)&&D(n)?Number(n)<t.length:_(t,n),a=Reflect.set(t,n,r,i);return t===Je(i)&&(o?B(r,s)&&se(t,"set",n,r):se(t,"add",n,r)),a}}const ge={get:ce,set:pe(),deleteProperty:function(e,t){const n=_(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&se(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return k(t)&&ae.has(t)||ie(e,0,t),n},ownKeys:function(e){return ie(e,0,b(e)?"length":W),Reflect.ownKeys(e)}},me={get:ue,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},ye=y({},ge,{get:le,set:pe(!0)}),ve=e=>A(e)?Ke(e):e,we=e=>A(e)?Ge(e):e,_e=e=>e,be=e=>Reflect.getPrototypeOf(e);function Ee(e,t,n=!1,r=!1){const i=Je(e=e.__v_raw),s=Je(t);t!==s&&!n&&ie(i,0,t),!n&&ie(i,0,s);const{has:o}=be(i),a=r?_e:n?we:ve;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Te(e,t=!1){const n=this.__v_raw,r=Je(n),i=Je(e);return e!==i&&!t&&ie(r,0,e),!t&&ie(r,0,i),e===i?n.has(e):n.has(e)||n.has(i)}function Ie(e,t=!1){return e=e.__v_raw,!t&&ie(Je(e),0,W),Reflect.get(e,"size",e)}function Se(e){e=Je(e);const t=Je(this);return be(t).has.call(t,e)||(t.add(e),se(t,"add",e,e)),this}function ke(e,t){t=Je(t);const n=Je(this),{has:r,get:i}=be(n);let s=r.call(n,e);s||(e=Je(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?B(t,o)&&se(n,"set",e,t):se(n,"add",e,t),this}function Ae(e){const t=Je(this),{has:n,get:r}=be(t);let i=n.call(t,e);i||(e=Je(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&se(t,"delete",e,void 0),s}function Ce(){const e=Je(this),t=0!==e.size,n=e.clear();return t&&se(e,"clear",void 0,void 0),n}function Re(e,t){return function(n,r){const i=this,s=i.__v_raw,o=Je(s),a=t?_e:e?we:ve;return!e&&ie(o,0,W),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function Ne(e,t,n){return function(...r){const i=this.__v_raw,s=Je(i),o=E(s),a="entries"===e||e===Symbol.iterator&&o,c="keys"===e&&o,l=i[e](...r),u=n?_e:t?we:ve;return!t&&ie(s,0,c?X:W),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Oe(e){return function(...t){return"delete"!==e&&this}}function De(){const e={get(e){return Ee(this,e)},get size(){return Ie(this)},has:Te,add:Se,set:ke,delete:Ae,clear:Ce,forEach:Re(!1,!1)},t={get(e){return Ee(this,e,!1,!0)},get size(){return Ie(this)},has:Te,add:Se,set:ke,delete:Ae,clear:Ce,forEach:Re(!1,!0)},n={get(e){return Ee(this,e,!0)},get size(){return Ie(this,!0)},has(e){return Te.call(this,e,!0)},add:Oe("add"),set:Oe("set"),delete:Oe("delete"),clear:Oe("clear"),forEach:Re(!0,!1)},r={get(e){return Ee(this,e,!0,!0)},get size(){return Ie(this,!0)},has(e){return Te.call(this,e,!0)},add:Oe("add"),set:Oe("set"),delete:Oe("delete"),clear:Oe("clear"),forEach:Re(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((i=>{e[i]=Ne(i,!1,!1),n[i]=Ne(i,!0,!1),t[i]=Ne(i,!1,!0),r[i]=Ne(i,!0,!0)})),[e,n,t,r]}const[xe,Le,Pe,Me]=De();function Ue(e,t){const n=t?e?Me:Pe:e?Le:xe;return(t,r,i)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(_(n,r)&&r in t?n:t,r,i)}const Fe={get:Ue(!1,!1)},Ve={get:Ue(!1,!0)},je={get:Ue(!0,!1)},Be=new WeakMap,qe=new WeakMap,$e=new WeakMap,ze=new WeakMap;function He(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>N(e).slice(8,-1))(e))}function Ke(e){return e&&e.__v_isReadonly?e:We(e,!1,ge,Fe,Be)}function Ge(e){return We(e,!0,me,je,$e)}function We(e,t,n,r,i){if(!A(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=He(e);if(0===o)return e;const a=new Proxy(e,2===o?r:n);return i.set(e,a),a}function Xe(e){return Qe(e)?Xe(e.__v_raw):!(!e||!e.__v_isReactive)}function Qe(e){return!(!e||!e.__v_isReadonly)}function Ye(e){return Xe(e)||Qe(e)}function Je(e){return e&&Je(e.__v_raw)||e}function Ze(e){return $(e,"__v_skip",!0),e}const et=e=>A(e)?Ke(e):e;function tt(e){return Boolean(e&&!0===e.__v_isRef)}function nt(e){return it(e)}class rt{constructor(e,t){this._rawValue=e,this._shallow=t,this.__v_isRef=!0,this._value=t?e:et(e)}get value(){return ie(Je(this),0,"value"),this._value}set value(e){B(Je(e),this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:et(e),se(Je(this),"set","value",e))}}function it(e,t=!1){return tt(e)?e:new rt(e,t)}function st(e){return tt(e)?e.value:e}const ot={get:(e,t,n)=>st(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return tt(i)&&!tt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function at(e){return Xe(e)?e:new Proxy(e,ot)}function ct(e){const t=b(e)?new Array(e.length):{};for(const n in e)t[n]=ut(e,n);return t}class lt{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function ut(e,t){return tt(e[t])?e[t]:new lt(e,t)}class ht{constructor(e,t,n){this._setter=t,this._dirty=!0,this.__v_isRef=!0,this.effect=Q(e,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,se(Je(this),"set","value"))}}),this.__v_isReadonly=n}get value(){const e=Je(this);return e._dirty&&(e._value=this.effect(),e._dirty=!1),ie(e,0,"value"),e._value}set value(e){this._setter(e)}}function dt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){pt(s,t,n)}return i}function ft(e,t,n,r){if(I(e)){const i=dt(e,t,n,r);return i&&C(i)&&i.catch((e=>{pt(e,t,n)})),i}const i=[];for(let s=0;s<e.length;s++)i.push(ft(e[s],t,n,r));return i}function pt(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const i=t.proxy,s=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void dt(o,null,10,[e,i,s])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let gt=!1,mt=!1;const yt=[];let vt=0;const wt=[];let _t=null,bt=0;const Et=[];let Tt=null,It=0;const St=Promise.resolve();let kt=null,At=null;function Ct(e){const t=kt||St;return e?t.then(this?e.bind(this):e):t}function Rt(e){if(!(yt.length&&yt.includes(e,gt&&e.allowRecurse?vt+1:vt)||e===At)){const t=function(e){let t=vt+1,n=yt.length;const r=Lt(e);for(;t<n;){const e=t+n>>>1;Lt(yt[e])<r?t=e+1:n=e}return t}(e);t>-1?yt.splice(t,0,e):yt.push(e),Nt()}}function Nt(){gt||mt||(mt=!0,kt=St.then(Pt))}function Ot(e,t,n,r){b(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),Nt()}function Dt(e,t=null){if(wt.length){for(At=t,_t=[...new Set(wt)],wt.length=0,bt=0;bt<_t.length;bt++)_t[bt]();_t=null,bt=0,At=null,Dt(e,t)}}function xt(e){if(Et.length){const e=[...new Set(Et)];if(Et.length=0,Tt)return void Tt.push(...e);for(Tt=e,Tt.sort(((e,t)=>Lt(e)-Lt(t))),It=0;It<Tt.length;It++)Tt[It]();Tt=null,It=0}}const Lt=e=>null==e.id?1/0:e.id;function Pt(e){mt=!1,gt=!0,Dt(e),yt.sort(((e,t)=>Lt(e)-Lt(t)));try{for(vt=0;vt<yt.length;vt++){const e=yt[vt];e&&!1!==e.active&&dt(e,null,14)}}finally{vt=0,yt.length=0,xt(),gt=!1,kt=null,(yt.length||wt.length||Et.length)&&Pt(e)}}function Mt(e,t,...n){const r=e.vnode.props||u;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:t,trim:s}=r[e]||u;s?i=n.map((e=>e.trim())):t&&(i=n.map(z))}let a,c=r[a=j(t)]||r[a=j(M(t))];!c&&s&&(c=r[a=j(F(t))]),c&&ft(c,e,6,i);const l=r[a+"Once"];if(l){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,ft(l,e,6,i)}}function Ut(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let o={},a=!1;if(!I(e)){const r=e=>{const n=Ut(e,t,!0);n&&(a=!0,y(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||a?(b(s)?s.forEach((e=>o[e]=null)):y(o,s),r.set(e,o),o):(r.set(e,null),null)}function Ft(e,t){return!(!e||!g(t))&&(t=t.slice(2).replace(/Once$/,""),_(e,t[0].toLowerCase()+t.slice(1))||_(e,F(t))||_(e,t))}let Vt=null,jt=null;function Bt(e){const t=Vt;return Vt=e,jt=e&&e.type.__scopeId||null,t}function qt(e){jt=e}function $t(){jt=null}const zt=e=>Ht;function Ht(e,t=Vt,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Ir(-1);const i=Bt(t),s=e(...n);return Bt(i),r._d&&Ir(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function Kt(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:g}=e;let y;const v=Bt(e);try{let e;if(4&n.shapeFlag){const t=i||r;y=Pr(u.call(t,t,h,s,f,d,p)),e=c}else{const n=t;0,y=Pr(n.length>1?n(s,{attrs:c,slots:a,emit:l}):n(s,null)),e=t.props?c:Gt(c)}let v=y;if(e&&!1!==g){const t=Object.keys(e),{shapeFlag:n}=v;t.length&&(1&n||6&n)&&(o&&t.some(m)&&(e=Wt(e,o)),v=Dr(v,e))}0,n.dirs&&(v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),y=v}catch(w){_r.length=0,pt(w,e,1),y=Or(vr)}return Bt(v),y}const Gt=e=>{let t;for(const n in e)("class"===n||"style"===n||g(n))&&((t||(t={}))[n]=e[n]);return t},Wt=(e,t)=>{const n={};for(const r in e)m(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Xt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Ft(n,s))return!0}return!1}function Qt(e,t){if(Hr){let n=Hr.provides;const r=Hr.parent&&Hr.parent.provides;r===n&&(n=Hr.provides=Object.create(r)),n[e]=t}else;}function Yt(e,t,n=!1){const r=Hr||Vt;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&I(t)?t.call(r.proxy):t}}const Jt={};function Zt(e,t,n){return en(e,t,n)}function en(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=u,a=Hr){let c,l,h=!1,f=!1;if(tt(e)?(c=()=>e.value,h=!!e._shallow):Xe(e)?(c=()=>e,r=!0):b(e)?(f=!0,h=e.some(Xe),c=()=>e.map((e=>tt(e)?e.value:Xe(e)?rn(e):I(e)?dt(e,a,2):void 0))):c=I(e)?t?()=>dt(e,a,2):()=>{if(!a||!a.isUnmounted)return l&&l(),ft(e,a,3,[p])}:d,t&&r){const e=c;c=()=>rn(e())}let p=e=>{l=w.options.onStop=()=>{dt(e,a,4)}},g=f?[]:Jt;const m=()=>{if(w.active)if(t){const e=w();(r||h||(f?e.some(((e,t)=>B(e,g[t]))):B(e,g)))&&(l&&l(),ft(t,a,3,[e,g===Jt?void 0:g,p]),g=e)}else w()};let y;m.allowRecurse=!!t,y="sync"===i?m:"post"===i?()=>cr(m,a&&a.suspense):()=>{!a||a.isMounted?function(e){Ot(e,_t,wt,bt)}(m):m()};const w=Q(c,{lazy:!0,onTrack:s,onTrigger:o,scheduler:y});return Zr(w,a),t?n?m():g=w():"post"===i?cr(w,a&&a.suspense):w(),()=>{Y(w),a&&v(a.effects,w)}}function tn(e,t,n){const r=this.proxy,i=S(e)?e.includes(".")?nn(r,e):()=>r[e]:e.bind(r,r);let s;return I(t)?s=t:(s=t.handler,n=t),en(i,s.bind(r),n,this)}function nn(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function rn(e,t=new Set){if(!A(e)||t.has(e)||e.__v_skip)return e;if(t.add(e),tt(e))rn(e.value,t);else if(b(e))for(let n=0;n<e.length;n++)rn(e[n],t);else if(T(e)||E(e))e.forEach((e=>{rn(e,t)}));else if(O(e))for(const n in e)rn(e[n],t);return e}const sn=[Function,Array],on={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},setup(e,{slots:t}){const n=Kr(),r=function(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tn((()=>{e.isMounted=!0})),kn((()=>{e.isUnmounting=!0})),e}();let i;return()=>{const s=t.default&&dn(t.default(),!0);if(!s||!s.length)return;const o=Je(e),{mode:a}=o,c=s[0];if(r.isLeaving)return ln(c);const l=un(c);if(!l)return ln(c);const u=cn(l,o,r,n);hn(l,u);const h=n.subTree,d=h&&un(h);let f=!1;const{getTransitionKey:p}=l.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,f=!0)}if(d&&d.type!==vr&&(!Ar(l,d)||f)){const e=cn(d,o,r,n);if(hn(d,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},ln(c);"in-out"===a&&l.type!==vr&&(e.delayLeave=(e,t,n)=>{an(r,d)[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return c}}};function an(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function cn(e,t,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:y,onAppearCancelled:v}=t,w=String(e.key),_=an(n,e),b=(e,t)=>{e&&ft(e,r,9,t)},E={mode:s,persisted:o,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=g||a}t._leaveCb&&t._leaveCb(!0);const s=_[w];s&&Ar(e,s)&&s.el._leaveCb&&s.el._leaveCb(),b(r,[t])},enter(e){let t=c,r=l,s=u;if(!n.isMounted){if(!i)return;t=m||c,r=y||l,s=v||u}let o=!1;const a=e._enterCb=t=>{o||(o=!0,b(t?s:r,[e]),E.delayedLeave&&E.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();b(h,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),b(n?p:f,[t]),t._leaveCb=void 0,_[i]===e&&delete _[i])};_[i]=e,d?(d(t,o),d.length<=1&&o()):o()},clone:e=>cn(e,t,n,r)};return E}function ln(e){if(gn(e))return(e=Dr(e)).children=null,e}function un(e){return gn(e)?e.children?e.children[0]:void 0:e}function hn(e,t){6&e.shapeFlag&&e.component?hn(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function dn(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===mr?(128&s.patchFlag&&r++,n=n.concat(dn(s.children,t))):(t||s.type!==vr)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function fn(e){return I(e)?{setup:e,name:e.name}:e}const pn=e=>!!e.type.__asyncLoader,gn=e=>e.type.__isKeepAlive;function mn(e,t){vn(e,"a",t)}function yn(e,t){vn(e,"da",t)}function vn(e,t,n=Hr){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}e()});if(_n(t,r,n),n){let e=n.parent;for(;e&&e.parent;)gn(e.parent.vnode)&&wn(r,t,n,e),e=e.parent}}function wn(e,t,n,r){const i=_n(t,e,r,!0);An((()=>{v(r[t],i)}),n)}function _n(e,t,n=Hr,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;ne(),Gr(n);const i=ft(t,n,e,r);return Gr(null),re(),i});return r?i.unshift(s):i.push(s),s}}const bn=e=>(t,n=Hr)=>(!Xr||"sp"===e)&&_n(e,t,n),En=bn("bm"),Tn=bn("m"),In=bn("bu"),Sn=bn("u"),kn=bn("bum"),An=bn("um"),Cn=bn("sp"),Rn=bn("rtg"),Nn=bn("rtc");function On(e,t=Hr){_n("ec",e,t)}let Dn=!0;function xn(e){const t=Mn(e),n=e.proxy,r=e.ctx;Dn=!1,t.beforeCreate&&Ln(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:w,destroyed:_,unmounted:E,render:T,renderTracked:S,renderTriggered:k,errorCaptured:C,serverPrefetch:R,expose:N,inheritAttrs:O,components:D,directives:x,filters:L}=t;if(l&&function(e,t,n=d){b(e)&&(e=jn(e));for(const r in e){const n=e[r];A(n)?t[r]="default"in n?Yt(n.from||r,n.default,!0):Yt(n.from||r):t[r]=Yt(n)}}(l,r,null),o)for(const d in o){const e=o[d];I(e)&&(r[d]=e.bind(n))}if(i){const t=i.call(n,n);A(t)&&(e.data=Ke(t))}if(Dn=!0,s)for(const b in s){const e=s[b],t=ti({get:I(e)?e.bind(n,n):I(e.get)?e.get.bind(n,n):d,set:!I(e)&&I(e.set)?e.set.bind(n):d});Object.defineProperty(r,b,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e})}if(a)for(const d in a)Pn(a[d],r,n,d);if(c){const e=I(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{Qt(t,e[t])}))}function P(e,t){b(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(u&&Ln(u,e,"c"),P(En,h),P(Tn,f),P(In,p),P(Sn,g),P(mn,m),P(yn,y),P(On,C),P(Nn,S),P(Rn,k),P(kn,w),P(An,E),P(Cn,R),b(N))if(N.length){const t=e.exposed||(e.exposed={});N.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===d&&(e.render=T),null!=O&&(e.inheritAttrs=O),D&&(e.components=D),x&&(e.directives=x)}function Ln(e,t,n){ft(b(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Pn(e,t,n,r){const i=r.includes(".")?nn(n,r):()=>n[r];if(S(e)){const n=t[e];I(n)&&Zt(i,n)}else if(I(e))Zt(i,e.bind(n));else if(A(e))if(b(e))e.forEach((e=>Pn(e,t,n,r)));else{const r=I(e.handler)?e.handler.bind(n):t[e.handler];I(r)&&Zt(i,r,e)}}function Mn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>Un(c,e,o,!0))),Un(c,t,o)):c=t,s.set(t,c),c}function Un(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Un(e,s,n,!0),i&&i.forEach((t=>Un(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Fn[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Fn={data:Vn,props:qn,emits:qn,methods:qn,computed:qn,beforeCreate:Bn,created:Bn,beforeMount:Bn,mounted:Bn,beforeUpdate:Bn,updated:Bn,beforeDestroy:Bn,destroyed:Bn,activated:Bn,deactivated:Bn,errorCaptured:Bn,serverPrefetch:Bn,components:qn,directives:qn,watch:function(e,t){if(!e)return t;if(!t)return e;const n=y(Object.create(null),e);for(const r in t)n[r]=Bn(e[r],t[r]);return n},provide:Vn,inject:function(e,t){return qn(jn(e),jn(t))}};function Vn(e,t){return t?e?function(){return y(I(e)?e.call(this,this):e,I(t)?t.call(this,this):t)}:t:e}function jn(e){if(b(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Bn(e,t){return e?[...new Set([].concat(e,t))]:t}function qn(e,t){return e?y(y(Object.create(null),e),t):t}function $n(e,t,n,r=!1){const i={},s={};$(s,Cr,1),e.propsDefaults=Object.create(null),zn(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:We(i,!1,ye,Ve,qe):e.type.props?e.props=i:e.props=s,e.attrs=s}function zn(e,t,n,r){const[i,s]=e.propsOptions;let o,a=!1;if(t)for(let c in t){if(x(c))continue;const l=t[c];let u;i&&_(i,u=M(c))?s&&s.includes(u)?(o||(o={}))[u]=l:n[u]=l:Ft(e.emitsOptions,c)||l!==r[c]&&(r[c]=l,a=!0)}if(s){const t=Je(n),r=o||u;for(let o=0;o<s.length;o++){const a=s[o];n[a]=Hn(i,t,a,r[a],e,!_(r,a))}}return a}function Hn(e,t,n,r,i,s){const o=e[n];if(null!=o){const e=_(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&I(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(Gr(i),r=s[n]=e.call(null,t),Gr(null))}else r=e}o[0]&&(s&&!e?r=!1:!o[1]||""!==r&&r!==F(n)||(r=!0))}return r}function Kn(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let c=!1;if(!I(e)){const r=e=>{c=!0;const[n,r]=Kn(e,t,!0);y(o,n),r&&a.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!c)return r.set(e,h),h;if(b(s))for(let h=0;h<s.length;h++){const e=M(s[h]);Gn(e)&&(o[e]=u)}else if(s)for(const u in s){const e=M(u);if(Gn(e)){const t=s[u],n=o[e]=b(t)||I(t)?{type:t}:t;if(n){const t=Qn(Boolean,n.type),r=Qn(String,n.type);n[0]=t>-1,n[1]=r<0||t<r,(t>-1||_(n,"default"))&&a.push(e)}}}const l=[o,a];return r.set(e,l),l}function Gn(e){return"$"!==e[0]}function Wn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function Xn(e,t){return Wn(e)===Wn(t)}function Qn(e,t){return b(t)?t.findIndex((t=>Xn(t,e))):I(t)&&Xn(t,e)?0:-1}const Yn=e=>"_"===e[0]||"$stable"===e,Jn=e=>b(e)?e.map(Pr):[Pr(e)],Zn=(e,t,n)=>{const r=Ht((e=>Jn(t(e))),n);return r._c=!1,r},er=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Yn(i))continue;const n=e[i];if(I(n))t[i]=Zn(0,n,r);else if(null!=n){const e=Jn(n);t[i]=()=>e}}},tr=(e,t)=>{const n=Jn(t);e.slots.default=()=>n};function nr(e,t){if(null===Vt)return e;const n=Vt.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[e,s,o,a=u]=t[i];I(e)&&(e={mounted:e,updated:e}),r.push({dir:e,instance:n,value:s,oldValue:void 0,arg:o,modifiers:a})}return e}function rr(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(ne(),ft(c,n,8,[e.el,a,e,t]),re())}}function ir(){return{app:null,config:{isNativeTag:f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sr=0;function or(e,t){return function(n,r=null){null==r||A(r)||(r=null);const i=ir(),s=new Set;let o=!1;const a=i.app={_uid:sr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:ri,get config(){return i.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&I(e.install)?(s.add(e),e.install(a,...t)):I(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(i.mixins.includes(e)||i.mixins.push(e),a),component:(e,t)=>t?(i.components[e]=t,a):i.components[e],directive:(e,t)=>t?(i.directives[e]=t,a):i.directives[e],mount(s,c,l){if(!o){const u=Or(n,r);return u.appContext=i,c&&t?t(u,s):e(u,s,l),o=!0,a._container=s,s.__vue_app__=a,u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(i.provides[e]=t,a)};return a}}const ar={scheduler:Rt,allowRecurse:!0},cr=function(e,t){t&&t.pendingBranch?b(e)?t.effects.push(...e):t.effects.push(e):Ot(e,Tt,Et,It)},lr=(e,t,n,r,i=!1)=>{if(b(e))return void e.forEach(((e,s)=>lr(e,t&&(b(t)?t[s]:t),n,r,i)));if(pn(r)&&!i)return;const s=4&r.shapeFlag?Jr(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=e,l=t&&t.r,h=a.refs===u?a.refs={}:a.refs,d=a.setupState;if(null!=l&&l!==c&&(S(l)?(h[l]=null,_(d,l)&&(d[l]=null)):tt(l)&&(l.value=null)),S(c)){const e=()=>{h[c]=o,_(d,c)&&(d[c]=o)};o?(e.id=-1,cr(e,n)):e()}else if(tt(c)){const e=()=>{c.value=o};o?(e.id=-1,cr(e,n)):e()}else I(c)&&dt(c,a,12,[o,h])};function ur(e){return function(e,t){const{insert:n,remove:r,patchProp:i,forcePatchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:p,nextSibling:g,setScopeId:m=d,cloneNode:v,insertStaticContent:w}=e,b=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!1)=>{e&&!Ar(e,t)&&(r=oe(e),J(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case yr:E(e,t,n,r);break;case vr:T(e,t,n,r);break;case wr:null==e&&I(t,n,r,o);break;case mr:U(e,t,n,r,i,s,o,a,c);break;default:1&h?A(e,t,n,r,i,s,o,a,c):6&h?V(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,s,o,a,c,ce)}null!=u&&i&&lr(u,e&&e.ref,s,t||e,!t)},E=(e,t,r,i)=>{if(null==e)n(t.el=a(t.children),r,i);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},T=(e,t,r,i)=>{null==e?n(t.el=c(t.children||""),r,i):t.el=e.el},I=(e,t,n,r)=>{const i=w(e.children,t,n,r,e.staticCache);e.el||(e.staticCache=i),e.el=i[0],e.anchor=i[i.length-1]},S=({el:e,anchor:t},r,i)=>{let s;for(;e&&e!==t;)s=g(e),n(e,r,i),e=s;n(t,r,i)},k=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=g(e),r(e),e=n;r(t)},A=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?R(t,n,r,i,s,o,a,c):D(e,t,i,s,o,a,c)},R=(e,t,r,s,a,c,l,u)=>{let h,d;const{type:p,props:g,shapeFlag:m,transition:y,patchFlag:w,dirs:_}=e;if(e.el&&void 0!==v&&-1===w)h=e.el=v(e.el);else{if(h=e.el=o(e.type,c,g&&g.is,g),8&m?f(h,e.children):16&m&&O(e.children,h,null,s,a,c&&"foreignObject"!==p,l,u||!!e.dynamicChildren),_&&rr(e,null,s,"created"),g){for(const t in g)x(t)||i(h,t,null,g[t],c,e.children,s,a,ie);(d=g.onVnodeBeforeMount)&&hr(d,s,e)}N(h,e,e.scopeId,l,s)}_&&rr(e,null,s,"beforeMount");const b=(!a||a&&!a.pendingBranch)&&y&&!y.persisted;b&&y.beforeEnter(h),n(h,t,r),((d=g&&g.onVnodeMounted)||b||_)&&cr((()=>{d&&hr(d,s,e),b&&y.enter(h),_&&rr(e,null,s,"mounted")}),a)},N=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){if(t===i.subTree){const t=i.vnode;N(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?Mr(e[l]):Pr(e[l]);b(null,c,t,n,r,i,s,o,a)}},D=(e,t,n,r,o,a,c)=>{const l=t.el=e.el;let{patchFlag:h,dynamicChildren:d,dirs:p}=t;h|=16&e.patchFlag;const g=e.props||u,m=t.props||u;let y;if((y=m.onVnodeBeforeUpdate)&&hr(y,n,t,e),p&&rr(t,e,n,"beforeUpdate"),h>0){if(16&h)P(l,t,g,m,n,r,o);else if(2&h&&g.class!==m.class&&i(l,"class",null,m.class,o),4&h&&i(l,"style",g.style,m.style,o),8&h){const a=t.dynamicProps;for(let t=0;t<a.length;t++){const c=a[t],u=g[c],h=m[c];(h!==u||s&&s(l,c))&&i(l,c,u,h,o,e.children,n,r,ie)}}1&h&&e.children!==t.children&&f(l,t.children)}else c||null!=d||P(l,t,g,m,n,r,o);const v=o&&"foreignObject"!==t.type;d?L(e.dynamicChildren,d,l,n,r,v,a):c||K(e,t,l,null,n,r,v,a,!1),((y=m.onVnodeUpdated)||p)&&cr((()=>{y&&hr(y,n,t,e),p&&rr(t,e,n,"updated")}),r)},L=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===mr||!Ar(c,l)||6&c.shapeFlag||64&c.shapeFlag)?p(c.el):n;b(c,l,u,null,r,i,s,o,!0)}},P=(e,t,n,r,o,a,c)=>{if(n!==r){for(const l in r){if(x(l))continue;const u=r[l],h=n[l];(u!==h||s&&s(e,l))&&i(e,l,h,u,c,t.children,o,a,ie)}if(n!==u)for(const s in n)x(s)||s in r||i(e,s,n[s],null,c,t.children,o,a,ie)}},U=(e,t,r,i,s,o,c,l,u)=>{const h=t.el=e?e.el:a(""),d=t.anchor=e?e.anchor:a("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;p&&(u=!0),g&&(l=l?l.concat(g):g),null==e?(n(h,r,i),n(d,r,i),O(t.children,r,d,s,o,c,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(L(e.dynamicChildren,p,r,s,o,c,l),(null!=t.key||s&&t===s.subTree)&&dr(e,t,!0)):K(e,t,r,d,s,o,c,l,u)},V=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):j(t,n,r,i,s,o,c):B(e,t,c)},j=(e,t,n,r,i,s,o)=>{const a=e.component=function(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||$r,s={uid:zr++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,update:null,render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,effects:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kn(r,i),emitsOptions:Ut(r,i),emit:null,emitted:null,propsDefaults:u,inheritAttrs:r.inheritAttrs,ctx:u,data:u,props:u,attrs:u,slots:u,refs:u,setupState:u,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Mt.bind(null,s),s}(e,r,i);if(gn(e)&&(a.ctx.renderer=ce),function(e,t=!1){Xr=t;const{props:n,children:r}=e.vnode,i=Wr(e);$n(e,n,i,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Je(t),$(t,"_",n)):er(t,e.slots={})}else e.slots={},t&&tr(e,t);$(e.slots,Cr,1)})(e,r);const s=i?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ze(new Proxy(e.ctx,Br));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=t||{}};return{attrs:e.attrs,slots:e.slots,emit:e.emit,expose:t}}(e):null;Hr=e,ne();const i=dt(r,e,0,[e.props,n]);if(re(),Hr=null,C(i)){const n=()=>{Hr=null};if(i.then(n,n),t)return i.then((t=>{Qr(e,t)})).catch((t=>{pt(t,e,0)}));e.asyncDep=i}else Qr(e,i)}else Yr(e)}(e,t):void 0;Xr=!1}(a),a.asyncDep){if(i&&i.registerDep(a,z),!e.el){const e=a.subTree=Or(vr);T(null,e,t,n)}}else z(a,e,t,n,i,s,o)},B=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Xt(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Xt(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Ft(l,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void H(r,t,n);r.next=t,function(e){const t=yt.indexOf(e);t>vt&&yt.splice(t,1)}(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},z=(e,t,n,r,i,s,o)=>{e.update=Q((function(){if(e.isMounted){let t,{next:n,bu:r,u:a,parent:c,vnode:l}=e,u=n;n?(n.el=l.el,H(e,n,o)):n=l,r&&q(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&hr(t,c,n,l);const h=Kt(e),d=e.subTree;e.subTree=h,b(d,h,p(d.el),oe(d),e,i,s),n.el=h.el,null===u&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,h.el),a&&cr(a,i),(t=n.props&&n.props.onVnodeUpdated)&&cr((()=>hr(t,c,n,l)),i)}else{let o;const{el:a,props:c}=t,{bm:l,m:u,parent:h}=e;if(l&&q(l),(o=c&&c.onVnodeBeforeMount)&&hr(o,h,t),a&&ue){const n=()=>{e.subTree=Kt(e),ue(a,e.subTree,e,i,null)};pn(t)?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=Kt(e);b(null,o,n,r,e,i,s),t.el=o.el}if(u&&cr(u,i),o=c&&c.onVnodeMounted){const e=t;cr((()=>hr(o,h,e)),i)}256&t.shapeFlag&&e.a&&cr(e.a,i),e.isMounted=!0,t=n=r=null}}),ar)},H=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=Je(i),[c]=e.propsOptions;let l=!1;if(!(r||o>0)||16&o){let r;zn(e,t,i,s)&&(l=!0);for(const s in a)t&&(_(t,s)||(r=F(s))!==s&&_(t,r))||(c?!n||void 0===n[s]&&void 0===n[r]||(i[s]=Hn(c,a,s,void 0,e,!0)):delete i[s]);if(s!==a)for(const e in s)t&&_(t,e)||(delete s[e],l=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];const u=t[o];if(c)if(_(s,o))u!==s[o]&&(s[o]=u,l=!0);else{const t=M(o);i[t]=Hn(c,a,t,u,e,!1)}else u!==s[o]&&(s[o]=u,l=!0)}}l&&se(e,"set","$attrs")}(e,t.props,r,n),((e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=u;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:(y(i,t),n||1!==e||delete i._):(s=!t.$stable,er(t,i)),o=t}else t&&(tr(e,t),o={default:1});if(s)for(const a in i)Yn(a)||a in o||delete i[a]})(e,t.children,n),ne(),Dt(void 0,e.update),re()},K=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:d,shapeFlag:p}=t;if(d>0){if(128&d)return void W(l,h,n,r,i,s,o,a,c);if(256&d)return void G(l,h,n,r,i,s,o,a,c)}8&p?(16&u&&ie(l,i,s),h!==l&&f(n,h)):16&u?16&p?W(l,h,n,r,i,s,o,a,c):ie(l,i,s,!0):(8&u&&f(n,""),16&p&&O(h,n,r,i,s,o,a,c))},G=(e,t,n,r,i,s,o,a,c)=>{t=t||h;const l=(e=e||h).length,u=t.length,d=Math.min(l,u);let f;for(f=0;f<d;f++){const r=t[f]=c?Mr(t[f]):Pr(t[f]);b(e[f],r,n,null,i,s,o,a,c)}l>u?ie(e,i,s,!0,!1,d):O(t,n,r,i,s,o,a,c,d)},W=(e,t,n,r,i,s,o,a,c)=>{let l=0;const u=t.length;let d=e.length-1,f=u-1;for(;l<=d&&l<=f;){const r=e[l],u=t[l]=c?Mr(t[l]):Pr(t[l]);if(!Ar(r,u))break;b(r,u,n,null,i,s,o,a,c),l++}for(;l<=d&&l<=f;){const r=e[d],l=t[f]=c?Mr(t[f]):Pr(t[f]);if(!Ar(r,l))break;b(r,l,n,null,i,s,o,a,c),d--,f--}if(l>d){if(l<=f){const e=f+1,h=e<u?t[e].el:r;for(;l<=f;)b(null,t[l]=c?Mr(t[l]):Pr(t[l]),n,h,i,s,o,a,c),l++}}else if(l>f)for(;l<=d;)J(e[l],i,s,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const e=t[l]=c?Mr(t[l]):Pr(t[l]);null!=e.key&&m.set(e.key,l)}let y,v=0;const w=f-g+1;let _=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=d;l++){const r=e[l];if(v>=w){J(r,i,s,!0);continue}let u;if(null!=r.key)u=m.get(r.key);else for(y=g;y<=f;y++)if(0===T[y-g]&&Ar(r,t[y])){u=y;break}void 0===u?J(r,i,s,!0):(T[u-g]=l+1,u>=E?E=u:_=!0,b(r,t[u],n,null,i,s,o,a,c),v++)}const I=_?function(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=(s+o)/2|0,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];for(;s-- >0;)n[s]=o,o=t[o];return n}(T):h;for(y=I.length-1,l=w-1;l>=0;l--){const e=g+l,h=t[e],d=e+1<u?t[e+1].el:r;0===T[l]?b(null,h,n,d,i,s,o,a,c):_&&(y<0||l!==I[y]?X(h,n,d,2):y--)}}},X=(e,t,r,i,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void X(e.component.subTree,t,r,i);if(128&u)return void e.suspense.move(t,r,i);if(64&u)return void a.move(e,t,r,ce);if(a===mr){n(o,t,r);for(let e=0;e<l.length;e++)X(l[e],t,r,i);return void n(e.anchor,t,r)}if(a===wr)return void S(e,t,r);if(2!==i&&1&u&&c)if(0===i)c.beforeEnter(o),n(o,t,r),cr((()=>c.enter(o)),s);else{const{leave:e,delayLeave:i,afterLeave:s}=c,a=()=>n(o,t,r),l=()=>{e(o,(()=>{a(),s&&s()}))};i?i(o,a,l):l()}else n(o,t,r)},J=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&lr(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d;let p;if((p=o&&o.onVnodeBeforeUnmount)&&hr(p,t,e),6&u)te(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&rr(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,ce,r):l&&(s!==mr||h>0&&64&h)?ie(l,t,n,!1,!0):(s===mr&&(128&h||256&h)||!i&&16&u)&&ie(c,t,n),r&&Z(e)}((p=o&&o.onVnodeUnmounted)||f)&&cr((()=>{p&&hr(p,t,e),f&&rr(e,null,t,"unmounted")}),n)},Z=e=>{const{type:t,el:n,anchor:i,transition:s}=e;if(t===mr)return void ee(n,i);if(t===wr)return void k(e);const o=()=>{r(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},ee=(e,t)=>{let n;for(;e!==t;)n=g(e),r(e),e=n;r(t)},te=(e,t,n)=>{const{bum:r,effects:i,update:s,subTree:o,um:a}=e;if(r&&q(r),i)for(let c=0;c<i.length;c++)Y(i[c]);s&&(Y(s),J(o,e,t,n)),a&&cr(a,t),cr((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},ie=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)J(e[o],t,n,r,i)},oe=e=>6&e.shapeFlag?oe(e.component.subTree):128&e.shapeFlag?e.suspense.next():g(e.anchor||e.el),ae=(e,t,n)=>{null==e?t._vnode&&J(t._vnode,null,null,!0):b(t._vnode||null,e,t,null,null,null,n),xt(),t._vnode=e},ce={p:b,um:J,m:X,r:Z,mt:j,mc:O,pc:K,pbc:L,n:oe,o:e};let le,ue;t&&([le,ue]=t(ce));return{render:ae,hydrate:le,createApp:or(ae,le)}}(e)}function hr(e,t,n,r=null){ft(e,t,7,[n,r])}function dr(e,t,n=!1){const r=e.children,i=t.children;if(b(r)&&b(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=Mr(i[s]),t.el=e.el),n||dr(e,t))}}function fr(e,t){return function(e,t,n=!0,r=!1){const i=Vt||Hr;if(i){const n=i.type;if("components"===e){const e=ei(n);if(e&&(e===t||e===M(t)||e===V(M(t))))return n}const s=gr(i[e]||n[e],t)||gr(i.appContext[e],t);return!s&&r?n:s}}("components",e,!0,t)||e}const pr=Symbol();function gr(e,t){return e&&(e[t]||e[M(t)]||e[V(M(t))])}const mr=Symbol(void 0),yr=Symbol(void 0),vr=Symbol(void 0),wr=Symbol(void 0),_r=[];let br=null;function Er(e=!1){_r.push(br=e?null:[])}let Tr=1;function Ir(e){Tr+=e}function Sr(e,t,n,r,i){const s=Or(e,t,n,r,i,!0);return s.dynamicChildren=Tr>0?br||h:null,_r.pop(),br=_r[_r.length-1]||null,Tr>0&&br&&br.push(s),s}function kr(e){return!!e&&!0===e.__v_isVNode}function Ar(e,t){return e.type===t.type&&e.key===t.key}const Cr="__vInternal",Rr=({key:e})=>null!=e?e:null,Nr=({ref:e})=>null!=e?S(e)||tt(e)||I(e)?{i:Vt,r:e}:e:null,Or=function(e,t=null,n=null,i=0,s=null,o=!1){e&&e!==pr||(e=vr);if(kr(e)){const r=Dr(e,t,!0);return n&&Ur(r,n),r}c=e,I(c)&&"__vccOpts"in c&&(e=e.__vccOpts);var c;if(t){(Ye(t)||Cr in t)&&(t=y({},t));let{class:e,style:n}=t;e&&!S(e)&&(t.class=a(e)),A(n)&&(Ye(n)&&!b(n)&&(n=y({},n)),t.style=r(n))}const l=S(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:A(e)?4:I(e)?2:0,u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Rr(t),ref:t&&Nr(t),scopeId:jt,slotScopeIds:null,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,shapeFlag:l,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};Ur(u,n),128&l&&e.normalize(u);Tr>0&&!o&&br&&(i>0||6&l)&&32!==i&&br.push(u);return u};function Dr(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:c}=e,l=t?function(...e){const t=y({},e[0]);for(let n=1;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=a([t.class,i.class]));else if("style"===e)t.style=r([t.style,i.style]);else if(g(e)){const n=t[e],r=i[e];n!==r&&(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=i[e])}return t}(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Rr(l),ref:t&&t.ref?n&&s?b(s)?s.concat(Nr(t)):[s,Nr(t)]:Nr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,staticCache:e.staticCache,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==mr?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dr(e.ssContent),ssFallback:e.ssFallback&&Dr(e.ssFallback),el:e.el,anchor:e.anchor}}function xr(e=" ",t=0){return Or(yr,null,e,t)}function Lr(e="",t=!1){return t?(Er(),Sr(vr,null,e)):Or(vr,null,e)}function Pr(e){return null==e||"boolean"==typeof e?Or(vr):b(e)?Or(mr,null,e.slice()):"object"==typeof e?Mr(e):Or(yr,null,String(e))}function Mr(e){return null===e.el?e:Dr(e)}function Ur(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(b(t))n=16;else if("object"==typeof t){if(1&r||64&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Ur(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Cr in t?3===r&&Vt&&(1===Vt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Vt}}else I(t)?(t={default:t,_ctx:Vt},n=32):(t=String(t),64&r?(n=16,t=[xr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Fr(e,t){let n;if(b(e)||S(e)){n=new Array(e.length);for(let r=0,i=e.length;r<i;r++)n[r]=t(e[r],r)}else if("number"==typeof e){n=new Array(e);for(let r=0;r<e;r++)n[r]=t(r+1,r)}else if(A(e))if(e[Symbol.iterator])n=Array.from(e,t);else{const r=Object.keys(e);n=new Array(r.length);for(let i=0,s=r.length;i<s;i++){const s=r[i];n[i]=t(e[s],s,i)}}else n=[];return n}const Vr=e=>e?Wr(e)?Jr(e)||e.proxy:Vr(e.parent):null,jr=y(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Vr(e.parent),$root:e=>Vr(e.root),$emit:e=>e.emit,$options:e=>Mn(e),$forceUpdate:e=>()=>Rt(e.update),$nextTick:e=>Ct.bind(e.proxy),$watch:e=>tn.bind(e)}),Br={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=e;let l;if("$"!==t[0]){const a=o[t];if(void 0!==a)switch(a){case 0:return r[t];case 1:return i[t];case 3:return n[t];case 2:return s[t]}else{if(r!==u&&_(r,t))return o[t]=0,r[t];if(i!==u&&_(i,t))return o[t]=1,i[t];if((l=e.propsOptions[0])&&_(l,t))return o[t]=2,s[t];if(n!==u&&_(n,t))return o[t]=3,n[t];Dn&&(o[t]=4)}}const h=jr[t];let d,f;return h?("$attrs"===t&&ie(e,0,t),h(e)):(d=a.__cssModules)&&(d=d[t])?d:n!==u&&_(n,t)?(o[t]=3,n[t]):(f=c.config.globalProperties,_(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;if(i!==u&&_(i,t))i[t]=n;else if(r!==u&&_(r,t))r[t]=n;else if(_(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return void 0!==n[o]||e!==u&&_(e,o)||t!==u&&_(t,o)||(a=s[0])&&_(a,o)||_(r,o)||_(jr,o)||_(i.config.globalProperties,o)}},qr=y({},Br,{get(e,t){if(t!==Symbol.unscopables)return Br.get(e,t,e)},has:(e,n)=>"_"!==n[0]&&!t(n)}),$r=ir();let zr=0;let Hr=null;const Kr=()=>Hr||Vt,Gr=e=>{Hr=e};function Wr(e){return 4&e.vnode.shapeFlag}let Xr=!1;function Qr(e,t,n){I(t)?e.render=t:A(t)&&(e.setupState=at(t)),Yr(e)}function Yr(e,t,n){const r=e.type;e.render||(e.render=r.render||d,e.render._rc&&(e.withProxy=new Proxy(e.ctx,qr))),Hr=e,ne(),xn(e),re(),Hr=null}function Jr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(at(Ze(e.exposed)),{get:(t,n)=>n in t?t[n]:n in jr?jr[n](e):void 0}))}function Zr(e,t=Hr){t&&(t.effects||(t.effects=[])).push(e)}function ei(e){return I(e)&&e.displayName||e.name}function ti(e){const t=function(e){let t,n;return I(e)?(t=e,n=d):(t=e.get,n=e.set),new ht(t,n,I(e)||!e.set)}(e);return Zr(t.effect),t}function ni(e,t,n){const r=arguments.length;return 2===r?A(t)&&!b(t)?kr(t)?Or(e,null,[t]):Or(e,t):Or(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&kr(n)&&(n=[n]),Or(e,t,n))}const ri="3.1.4",ii="http://www.w3.org/2000/svg",si="undefined"!=typeof document?document:null,oi={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?si.createElementNS(ii,e):si.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>si.createTextNode(e),createComment:e=>si.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>si.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i){if(i){let e,r,s=0,o=i.length;for(;s<o;s++){const a=i[s].cloneNode(!0);0===s&&(e=a),s===o-1&&(r=a),t.insertBefore(a,n)}return[e,r]}const s=n?n.previousSibling:t.lastChild;if(n){let i,s=!1;n instanceof Element?i=n:(s=!0,i=r?si.createElementNS(ii,"g"):si.createElement("div"),t.insertBefore(i,n)),i.insertAdjacentHTML("beforebegin",e),s&&t.removeChild(i)}else t.insertAdjacentHTML("beforeend",e);let o=s?s.nextSibling:t.firstChild;const a=n?n.previousSibling:t.lastChild,c=[];for(;o&&(c.push(o),o!==a);)o=o.nextSibling;return c}};const ai=/\s*!important$/;function ci(e,t,n){if(b(n))n.forEach((n=>ci(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=ui[t];if(n)return n;let r=M(t);if("filter"!==r&&r in e)return ui[t]=r;r=V(r);for(let i=0;i<li.length;i++){const n=li[i]+r;if(n in e)return ui[t]=n}return t}(e,t);ai.test(n)?e.setProperty(F(r),n.replace(ai,""),"important"):e[r]=n}}const li=["Webkit","Moz","ms"],ui={};const hi="http://www.w3.org/1999/xlink";let di=Date.now,fi=!1;if("undefined"!=typeof window){di()>document.createEvent("Event").timeStamp&&(di=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);fi=!!(e&&Number(e[1])<=53)}let pi=0;const gi=Promise.resolve(),mi=()=>{pi=0};function yi(e,t,n,r){e.addEventListener(t,n,r)}function vi(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(wi.test(e)){let n;for(t={};n=e.match(wi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[F(e.slice(2)),t]}(t);if(r){yi(e,n,s[t]=function(e,t){const n=e=>{const r=e.timeStamp||di();(fi||r>=n.attached-1)&&ft(function(e,t){if(b(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>pi||(gi.then(mi),pi=di()))(),n}(r,i),a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),s[t]=void 0)}}const wi=/(?:Once|Passive|Capture)$/;const _i=/^on[a-z]/;const bi="transition",Ei=(e,{slots:t})=>ni(on,function(e){const t={};for(const y in e)y in Ti||(t[y]=e[y]);if(!1===e.css)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,p=function(e){if(null==e)return null;if(A(e))return[ki(e.enter),ki(e.leave)];{const t=ki(e);return[t,t]}}(i),g=p&&p[0],m=p&&p[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:_,onLeave:b,onLeaveCancelled:E,onBeforeAppear:T=v,onAppear:I=w,onAppearCancelled:S=_}=t,k=(e,t,n)=>{Ci(e,t?u:a),Ci(e,t?l:o),n&&n()},C=(e,t)=>{Ci(e,f),Ci(e,d),t&&t()},R=e=>(t,n)=>{const i=e?I:w,o=()=>k(t,e,n);Ii(i,[t,o]),Ri((()=>{Ci(t,e?c:s),Ai(t,e?u:a),Si(i)||Oi(t,r,g,o)}))};return y(t,{onBeforeEnter(e){Ii(v,[e]),Ai(e,s),Ai(e,o)},onBeforeAppear(e){Ii(T,[e]),Ai(e,c),Ai(e,l)},onEnter:R(!1),onAppear:R(!0),onLeave(e,t){const n=()=>C(e,t);Ai(e,h),document.body.offsetHeight,Ai(e,d),Ri((()=>{Ci(e,h),Ai(e,f),Si(b)||Oi(e,r,m,n)})),Ii(b,[e,n])},onEnterCancelled(e){k(e,!1),Ii(_,[e])},onAppearCancelled(e){k(e,!0),Ii(S,[e])},onLeaveCancelled(e){C(e),Ii(E,[e])}})}(e),t);Ei.displayName="Transition";const Ti={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ei.props=y({},on.props,Ti);const Ii=(e,t=[])=>{b(e)?e.forEach((e=>e(...t))):e&&e(...t)},Si=e=>!!e&&(b(e)?e.some((e=>e.length>1)):e.length>1);function ki(e){return z(e)}function Ai(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function Ci(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Ri(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let Ni=0;function Oi(e,t,n,r){const i=e._endId=++Ni,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=function(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r("transitionDelay"),s=r("transitionDuration"),o=Di(i,s),a=r("animationDelay"),c=r("animationDuration"),l=Di(a,c);let u=null,h=0,d=0;t===bi?o>0&&(u=bi,h=o,d=s.length):"animation"===t?l>0&&(u="animation",h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?bi:"animation":null,d=u?u===bi?s.length:c.length:0);const f=u===bi&&/\b(transform|all)(,|$)/.test(n.transitionProperty);return{type:u,timeout:h,propCount:d,hasTransform:f}}(e,t);if(!o)return r();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,d),s()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),e.addEventListener(l,d)}function Di(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>xi(t)+xi(e[n]))))}function xi(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}const Li=e=>{const t=e.props["onUpdate:modelValue"];return b(t)?e=>q(t,e):t};function Pi(e){e.target.composing=!0}function Mi(e){const t=e.target;t.composing&&(t.composing=!1,function(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}(t,"input"))}const Ui={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Li(i);const s=r||"number"===e.type;yi(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n?r=r.trim():s&&(r=z(r)),e._assign(r)})),n&&yi(e,"change",(()=>{e.value=e.value.trim()})),t||(yi(e,"compositionstart",Pi),yi(e,"compositionend",Mi),yi(e,"change",Mi))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{trim:n,number:r}},i){if(e._assign=Li(i),e.composing)return;if(document.activeElement===e){if(n&&e.value.trim()===t)return;if((r||"number"===e.type)&&z(e.value)===t)return}const s=null==t?"":t;e.value!==s&&(e.value=s)}},Fi=["ctrl","shift","alt","meta"],Vi={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Fi.some((n=>e[`${n}Key`]&&!t.includes(n)))},ji=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Vi[t[e]];if(r&&r(n,t))return}return e(n,...r)},Bi=y({patchProp:(e,t,r,i,s=!1,o,a,c,l)=>{switch(t){case"class":!function(e,t,n){if(null==t&&(t=""),n)e.setAttribute("class",t);else{const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),e.className=t}}(e,i,s);break;case"style":!function(e,t,n){const r=e.style;if(n)if(S(n)){if(t!==n){const t=r.display;r.cssText=n,"_vod"in e&&(r.display=t)}}else{for(const e in n)ci(r,e,n[e]);if(t&&!S(t))for(const e in t)null==n[e]&&ci(r,e,"")}else e.removeAttribute("style")}(e,r,i);break;default:g(t)?m(t)||vi(e,t,0,i,a):function(e,t,n,r){if(r)return"innerHTML"===t||!!(t in e&&_i.test(t)&&I(n));if("spellcheck"===t||"draggable"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(_i.test(t)&&S(n))return!1;return t in e}(e,t,i,s)?function(e,t,n,r,i,s,o){if("innerHTML"===t||"textContent"===t)return r&&o(r,i,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName){e._value=n;const r=null==n?"":n;return e.value!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const r=typeof e[t];if(""===n&&"boolean"===r)return void(e[t]=!0);if(null==n&&"string"===r)return e[t]="",void e.removeAttribute(t);if("number"===r)return e[t]=0,void e.removeAttribute(t)}try{e[t]=n}catch(a){}}(e,t,i,o,a,c,l):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),function(e,t,r,i,s){if(i&&t.startsWith("xlink:"))null==r?e.removeAttributeNS(hi,t.slice(6,t.length)):e.setAttributeNS(hi,t,r);else{const i=n(t);null==r||i&&!1===r?e.removeAttribute(t):e.setAttribute(t,i?"":r)}}(e,t,i,s))}},forcePatchProp:(e,t)=>"value"===t},oi);let qi;const $i=(...e)=>{const t=(qi||(qi=ur(Bi))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){if(S(e)){return document.querySelector(e)}return e}
/*!
  * vue-router v4.0.10
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */(e);if(!r)return;const i=t._component;I(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};const zi="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,Hi=e=>zi?Symbol(e):"_vr_"+e,Ki=Hi("rvlm"),Gi=Hi("rvd"),Wi=Hi("r"),Xi=Hi("rl"),Qi=Hi("rvl"),Yi="undefined"!=typeof window;const Ji=Object.assign;function Zi(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}let es=()=>{};const ts=/\/$/;function ns(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function rs(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function is(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ss(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(!os(e[n],t[n]))return!1;return!0}function os(e,t){return Array.isArray(e)?as(e,t):Array.isArray(t)?as(t,e):e===t}function as(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var cs,ls,us,hs;function ds(e){if(!e)if(Yi){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(ts,"")}(ls=cs||(cs={})).pop="pop",ls.push="push",(hs=us||(us={})).back="back",hs.forward="forward",hs.unknown="";const fs=/^[^#]+#/;function ps(e,t){return e.replace(fs,"#")+t}const gs=()=>({left:window.pageXOffset,top:window.pageYOffset});function ms(e){let t;if("el"in e){let n=e.el;const r="string"==typeof n&&n.startsWith("#"),i="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function ys(e,t){return(history.state?history.state.position-t:-1)+e}const vs=new Map;function ws(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),rs(n,"")}return rs(n,e)+r+i}function _s(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?gs():null}}function bs(e){const{history:t,location:n}=window;let r={value:ws(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:location.protocol+"//"+location.host+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:function(e,n){const o=Ji({},i.value,t.state,{forward:e,scroll:gs()});s(o.current,o,!0),s(e,Ji({},_s(r.value,e,null),{position:o.position+1},n),!1),r.value=e},replace:function(e,n){s(e,Ji({},t.state,_s(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}}}function Es(e){const t=bs(e=ds(e)),n=function(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=ws(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:cs.pop,direction:u?u>0?us.forward:us.back:us.unknown})}))};function c(){const{history:e}=window;e.state&&e.replaceState(Ji({},e.state,{scroll:gs()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:function(){o=n.value},listen:function(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t},destroy:function(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}}}(e,t.state,t.location,t.replace);const r=Ji({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:ps.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Ts(e){return"string"==typeof e||"symbol"==typeof e}const Is={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ss=Hi("nf");var ks,As;function Cs(e,t){return Ji(new Error,{type:e,[Ss]:!0},t)}function Rs(e,t){return e instanceof Error&&Ss in e&&(null==t||!!(e.type&t))}(As=ks||(ks={}))[As.aborted=4]="aborted",As[As.cancelled=8]="cancelled",As[As.duplicated=16]="duplicated";const Ns={sensitive:!1,strict:!1,start:!0,end:!0},Os=/[.+*?^${}()[\]/\\]/g;function Ds(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function xs(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const e=Ds(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const Ls={type:0,value:""},Ps=/[a-zA-Z0-9_]/;function Ms(e,t,n){const r=function(e,t){const n=Ji({},Ns,t);let r=[],i=n.start?"^":"";const s=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let t=0;t<c.length;t++){const r=c[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(Os,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;s.push({name:e,repeatable:n,optional:l});const h=u||"[^/]+?";if("[^/]+?"!==h){o+=10;try{new RegExp(`(${h})`)}catch(a){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+a.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=l&&c.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),i+=d,o+=20,l&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");return{re:o,score:r,keys:s,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[Ls]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}for(;c<e.length;)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Ps.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}(e.path),n),i=Ji(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Us(e,t){const n=[],r=new Map;function i(e,n,r){let a=!r,c=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Fs(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);c.aliasOf=r&&r.record;const l=Bs(t,e),u=[c];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(Ji({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let h,d;for(const t of u){let{path:u}=t;if(n&&"/"!==u[0]){let e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=Ms(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),a&&e.name&&!Vs(h)&&s(e.name)),"children"in c){let e=c.children;for(let t=0;t<e.length;t++)i(e[t],h,r&&r.children[t])}r=r||h,o(h)}return d?()=>{s(d)}:es}function s(e){if(Ts(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function o(e){let t=0;for(;t<n.length&&xs(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!Vs(e)&&r.set(e.record.name,e)}return t=Bs({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:function(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Cs(1,{location:e});o=i.record.name,a=Ji(function(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw Cs(1,{location:e,currentLocation:t});o=i.record.name,a=Ji({},t.params,e.params),s=i.stringify(a)}const c=[];let l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:js(c)}},removeRoute:s,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function Fs(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(let r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function Vs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function js(e){return e.reduce(((e,t)=>Ji(e,t.meta)),{})}function Bs(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}const qs=/#/g,$s=/&/g,zs=/\//g,Hs=/=/g,Ks=/\?/g,Gs=/\+/g,Ws=/%5B/g,Xs=/%5D/g,Qs=/%5E/g,Ys=/%60/g,Js=/%7B/g,Zs=/%7C/g,eo=/%7D/g,to=/%20/g;function no(e){return encodeURI(""+e).replace(Zs,"|").replace(Ws,"[").replace(Xs,"]")}function ro(e){return no(e).replace(Gs,"%2B").replace(to,"+").replace(qs,"%23").replace($s,"%26").replace(Ys,"`").replace(Js,"{").replace(eo,"}").replace(Qs,"^")}function io(e){return function(e){return no(e).replace(qs,"%23").replace(Ks,"%3F")}(e).replace(zs,"%2F")}function so(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function oo(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(Gs," ");let i=e.indexOf("="),s=so(i<0?e:e.slice(0,i)),o=i<0?null:so(e.slice(i+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function ao(e){let t="";for(let n in e){const r=e[n];if(n=ro(n).replace(Hs,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map((e=>e&&ro(e))):[r&&ro(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function co(e){const t={};for(let n in e){let r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function lo(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function uo(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{var c;!1===e?a(Cs(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(c=e)||c&&"object"==typeof c?a(Cs(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"==typeof e&&s.push(e),o())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function ho(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(s=a)||"displayName"in s||"props"in s||"__vccOpts"in s){const s=(a.__vccOpts||a)[t];s&&i.push(uo(s,n,r,o,e))}else{let s=a();i.push((()=>s.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=(a=i).__esModule||zi&&"Module"===a[Symbol.toStringTag]?i.default:i;var a;o.components[e]=s;const c=(s.__vccOpts||s)[t];return c&&uo(c,n,r,o,e)()}))))}}var s;return i}function fo(e){const t=Yt(Wi),n=Yt(Xi),r=ti((()=>t.resolve(st(e.to)))),i=ti((()=>{let{matched:e}=r.value,{length:t}=e;const i=e[t-1];let s=n.matched;if(!i||!s.length)return-1;let o=s.findIndex(is.bind(null,i));if(o>-1)return o;let a=go(e[t-2]);return t>1&&go(i)===a&&s[s.length-1].path!==a?s.findIndex(is.bind(null,e[t-2])):o})),s=ti((()=>i.value>-1&&function(e,t){for(let n in t){let r=t[n],i=e[n];if("string"==typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}(n.params,r.value.params))),o=ti((()=>i.value>-1&&i.value===n.matched.length-1&&ss(n.params,r.value.params)));return{route:r,href:ti((()=>r.value.href)),isActive:s,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[st(e.replace)?"replace":"push"](st(e.to)).catch(es):Promise.resolve()}}}const po=fn({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fo,setup(e,{slots:t}){const n=Ke(fo(e)),{options:r}=Yt(Wi),i=ti((()=>({[mo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[mo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:ni("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function go(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const mo=(e,t,n)=>null!=e?e:null!=t?t:n;function yo(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const vo=fn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=Yt(Qi),i=ti((()=>e.route||r.value)),s=Yt(Gi,0),o=ti((()=>i.value.matched[s]));Qt(Gi,s+1),Qt(Ki,o),Qt(Qi,i);const a=nt();return Zt((()=>[a.value,o.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&is(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=i.value,s=o.value,c=s&&s.components[e.name],l=e.name;if(!c)return yo(n.default,{Component:c,route:r});const u=s.props[e.name],h=u?!0===u?r.params:"function"==typeof u?u(r):u:null,d=ni(c,Ji({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(s.instances[l]=null)},ref:a}));return yo(n.default,{Component:d,route:r})||d}}});function wo(e){const t=Us(e.routes,e);let n=e.parseQuery||oo,r=e.stringifyQuery||ao,i=e.history;const s=lo(),o=lo(),a=lo(),c=it(Is,!0);let l=Is;Yi&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zi.bind(null,(e=>""+e)),h=Zi.bind(null,io),d=Zi.bind(null,so);function f(e,s){if(s=Ji({},s||c.value),"string"==typeof e){let r=ns(n,e,s.path),o=t.resolve({path:r.path},s),a=i.createHref(r.fullPath);return Ji(r,o,{params:d(o.params),hash:so(r.hash),redirectedFrom:void 0,href:a})}let o;"path"in e?o=Ji({},e,{path:ns(n,e.path,s.path).path}):(o=Ji({},e,{params:h(e.params)}),s.params=h(s.params));let a=t.resolve(o,s);const l=e.hash||"";a.params=u(d(a.params));const f=function(e,t){let n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,Ji({},e,{hash:(p=l,no(p).replace(Js,"{").replace(eo,"}").replace(Qs,"^")),path:a.path}));var p;let g=i.createHref(f);return Ji({fullPath:f,hash:l,query:r===ao?co(e.query):e.query},a,{redirectedFrom:void 0,href:g})}function p(e){return"string"==typeof e?ns(n,e,c.value.path):Ji({},e)}function g(e,t){if(l!==e)return Cs(8,{from:t,to:e})}function m(e){return v(e)}function y(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=p(r):{path:r},r.params={}),Ji({query:e.query,hash:e.hash,params:e.params},r)}}function v(e,t){const n=l=f(e),i=c.value,s=e.state,o=e.force,a=!0===e.replace,u=y(n);if(u)return v(Ji(p(u),{state:s,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&function(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&is(t.matched[r],n.matched[i])&&ss(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,i,n)&&(d=Cs(16,{to:h,from:i}),N(i,i,!0,!1)),(d?Promise.resolve(d):_(h,i)).catch((e=>Rs(e)?e:C(e,h,i))).then((e=>{if(e){if(Rs(e,2))return v(Ji(p(e.to),{state:s,force:o,replace:a}),t||h)}else e=E(h,i,!0,a,s);return b(h,i,e),e}))}function w(e,t){const n=g(e,t);return n?Promise.reject(n):Promise.resolve()}function _(e,t){let n;const[r,i,a]=function(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>is(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>is(e,a)))||i.push(a))}return[n,r,i]}(e,t);n=ho(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(uo(r,e,t))}));const c=w.bind(null,e,t);return n.push(c),_o(n).then((()=>{n=[];for(const r of s.list())n.push(uo(r,e,t));return n.push(c),_o(n)})).then((()=>{n=ho(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(uo(r,e,t))}));return n.push(c),_o(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(uo(i,e,t));else n.push(uo(r.beforeEnter,e,t));return n.push(c),_o(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ho(a,"beforeRouteEnter",e,t),n.push(c),_o(n)))).then((()=>{n=[];for(const r of o.list())n.push(uo(r,e,t));return n.push(c),_o(n)})).catch((e=>Rs(e,8)?e:Promise.reject(e)))}function b(e,t,n){for(const r of a.list())r(e,t,n)}function E(e,t,n,r,s){const o=g(e,t);if(o)return o;const a=t===Is,l=Yi?history.state:{};n&&(r||a?i.replace(e.fullPath,Ji({scroll:a&&l&&l.scroll},s)):i.push(e.fullPath,s)),c.value=e,N(e,t,n,a),R()}let T;function I(){T=i.listen(((e,t,n)=>{let r=f(e);const s=y(r);if(s)return void v(Ji(s,{replace:!0}),r).catch(es);l=r;const o=c.value;var a,u;Yi&&(a=ys(o.fullPath,n.delta),u=gs(),vs.set(a,u)),_(r,o).catch((e=>Rs(e,12)?e:Rs(e,2)?(v(e.to,r).then((e=>{Rs(e,20)&&!n.delta&&n.type===cs.pop&&i.go(-1,!1)})).catch(es),Promise.reject()):(n.delta&&i.go(-n.delta,!1),C(e,r,o)))).then((e=>{(e=e||E(r,o,!1))&&(n.delta?i.go(-n.delta,!1):n.type===cs.pop&&Rs(e,20)&&i.go(-1,!1)),b(r,o,e)})).catch(es)}))}let S,k=lo(),A=lo();function C(e,t,n){R(e);const r=A.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function R(e){S||(S=!0,I(),k.list().forEach((([t,n])=>e?n(e):t())),k.reset())}function N(t,n,r,i){const{scrollBehavior:s}=e;if(!Yi||!s)return Promise.resolve();let o=!r&&function(e){const t=vs.get(e);return vs.delete(e),t}(ys(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Ct().then((()=>s(t,n,o))).then((e=>e&&ms(e))).catch((e=>C(e,t,n)))}const O=e=>i.go(e);let D;const x=new Set;return{currentRoute:c,addRoute:function(e,n){let r,i;return Ts(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)},removeRoute:function(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:f,options:e,push:m,replace:function(e){return m(Ji(p(e),{replace:!0}))},go:O,back:()=>O(-1),forward:()=>O(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:A.add,isReady:function(){return S&&c.value!==Is?Promise.resolve():new Promise(((e,t)=>{k.add([e,t])}))},install(e){e.component("RouterLink",po),e.component("RouterView",vo),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>st(c)}),Yi&&!D&&c.value===Is&&(D=!0,m(i.location).catch((e=>{})));const t={};for(let r in Is)t[r]=ti((()=>c.value[r]));e.provide(Wi,this),e.provide(Xi,Ke(t)),e.provide(Qi,c);let n=e.unmount;x.add(e),e.unmount=function(){x.delete(e),x.size<1&&(T(),c.value=Is,D=!1,S=!1),n()}}}}function _o(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function bo(){return Yt(Wi)}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Eo=function(e,t){return(Eo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function To(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function Io(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{c(r.next(e))}catch(t){s(t)}}function a(e){try{c(r.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}function So(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function ko(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ao(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function Co(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}
/**
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
 */var Ro={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|l>>6,f=63&l;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{s=e[n++];var a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,a=++i<e.length?n[e.charAt(i)]:64,c=++i<e.length?n[e.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==c)throw Error();var l=s<<2|o>>4;if(r.push(l),64!==a){var u=o<<4&240|a>>2;if(r.push(u),64!==c){var h=a<<6&192|c;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},No=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
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
 */
function Oo(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Do(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oo())}function xo(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Lo(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Po(){var e=Oo();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
/**
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
 */
var Mo=function(e){function t(n,r,i){var s=e.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,Uo.prototype.create),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Eo(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),Uo=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,s=this.errors[e],o=s?Fo(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",c=new Mo(i,a,r);return c},e}();function Fo(e,t){return e.replace(Vo,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var Vo=/\{\$([^}]+)}/g;function jo(e,t){if(e===t)return!0;for(var n=Object.keys(e),r=Object.keys(t),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=e[o],c=t[o];if(Bo(a)&&Bo(c)){if(!jo(a,c))return!1}else if(a!==c)return!1}for(var l=0,u=r;l<u.length;l++){o=u[l];if(!n.includes(o))return!1}return!0}function Bo(e){return null!==e&&"object"==typeof e}
/**
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
 */function qo(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var s=i[r];n(s[0],s[1])}return t.length?"&"+t.join("&"):""}function $o(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=e.split("="),r=n[0],i=n[1];t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function zo(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}var Ho=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Ko),void 0===r.error&&(r.error=Ko),void 0===r.complete&&(r.complete=Ko);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),s},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function Ko(){}
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
 */function Go(e){return e&&e._delegate?e._delegate:e}var Wo=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),Xo=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new No;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(u){}try{for(var r=ko(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=Ao(i.value,2),o=s[0],a=s[1],c=this.normalizeInstanceIdentifier(o);try{var l=this.getOrInitializeService({instanceIdentifier:c});a.resolve(l)}catch(u){}}}catch(h){t={error:h}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Io(this,void 0,void 0,(function(){var e;return So(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Co(Co([],Ao(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),Ao(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var a=ko(this.instancesDeferred.entries()),c=a.next();!c.done;c=a.next()){var l=Ao(c.value,2),u=l[0],h=l[1];s===this.normalizeInstanceIdentifier(u)&&h.resolve(o)}}catch(d){t={error:d}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&e(s,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var s=ko(i),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(e,t)}catch(c){}}}catch(l){n={error:l}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:i}),this.instances.set(n,s),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e="[DEFAULT]"),this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
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
 */var Qo,Yo,Jo,Zo=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Xo(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function ea(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
/**
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
 */(Jo=Yo||(Yo={}))[Jo.DEBUG=0]="DEBUG",Jo[Jo.VERBOSE=1]="VERBOSE",Jo[Jo.INFO=2]="INFO",Jo[Jo.WARN=3]="WARN",Jo[Jo.ERROR=4]="ERROR",Jo[Jo.SILENT=5]="SILENT";var ta={debug:Yo.DEBUG,verbose:Yo.VERBOSE,info:Yo.INFO,warn:Yo.WARN,error:Yo.ERROR,silent:Yo.SILENT},na=Yo.INFO,ra=((Qo={})[Yo.DEBUG]="log",Qo[Yo.VERBOSE]="log",Qo[Yo.INFO]="info",Qo[Yo.WARN]="warn",Qo[Yo.ERROR]="error",Qo),ia=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),s=ra[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,ea(["["+i+"]  "+e.name+":"],n))}},sa=function(){function e(e){this.name=e,this._logLevel=na,this._logHandler=ia,this._userLogHandler=null}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in Yo))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?ta[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,ea([this,Yo.DEBUG],e)),this._logHandler.apply(this,ea([this,Yo.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,ea([this,Yo.VERBOSE],e)),this._logHandler.apply(this,ea([this,Yo.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,ea([this,Yo.INFO],e)),this._logHandler.apply(this,ea([this,Yo.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,ea([this,Yo.WARN],e)),this._logHandler.apply(this,ea([this,Yo.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,ea([this,Yo.ERROR],e)),this._logHandler.apply(this,ea([this,Yo.ERROR],e))},e}();
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
class oa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const aa=new sa("@firebase/app"),ca={"@firebase/app-exp":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics-exp":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check-exp":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth-exp":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions-exp":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations-exp":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging-exp":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance-exp":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config-exp":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js","firebase-exp":"fire-js-all"},la=new Map,ua=new Map;function ha(e,t){try{e.container.addComponent(t)}catch(n){aa.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function da(e){const t=e.name;if(ua.has(t))return aa.debug(`There were multiple attempts to register component ${t}.`),!1;ua.set(t,e);for(const n of la.values())ha(n,e);return!0}function fa(e,t){return e.container.getProvider(t)}
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
 */const pa=new Uo("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class ga{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Wo("app-exp",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pa.create("app-deleted",{appName:this._name})}}
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
 */function ma(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw pa.create("bad-app-name",{appName:String(r)});const i=la.get(r);if(i){if(jo(e,i.options)&&jo(n,i.config))return i;throw pa.create("duplicate-app",{appName:r})}const s=new Zo(r);for(const a of ua.values())s.addComponent(a);const o=new ga(e,n,s);return la.set(r,o),o}function ya(e="[DEFAULT]"){const t=la.get(e);if(!t)throw pa.create("no-app",{appName:e});return t}function va(e,t,n){var r;let i=null!==(r=ca[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void aa.warn(e.join(" "))}da(new Wo(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
 */var wa;da(new Wo("platform-logger",(e=>new oa(e)),"PRIVATE")),va("@firebase/app-exp","0.0.900-exp.8b4d7550f",wa),va("fire-js","");const _a=new Uo("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ba=new sa("@firebase/auth-exp");
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
 */function Ea(e,...t){ba.logLevel<=Yo.ERROR&&ba.error(`Auth (9.0.0-beta.8): ${e}`,...t)}
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
 */function Ta(e,...t){throw Sa(e,...t)}function Ia(e,...t){return Sa(e,...t)}function Sa(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return _a.create(e,...t)}function ka(e,t,...n){if(!e)throw Sa(t,...n)}function Aa(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ea(t),new Error(t)}function Ca(e,t){e||Aa(t)}
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
 */const Ra=new Map;function Na(e){Ca(e instanceof Function,"Expected a class definition");let t=Ra.get(e);return t?(Ca(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ra.set(e,t),t)}
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
function Oa(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Da(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function xa(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Da()&&"https:"!==Da()&&!xo()&&!("connection"in navigator)||navigator.onLine}
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
class La{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ca(t>e,"Short delay should be less than long delay!"),this.isMobile=Do()||Lo()}get(){return xa()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function Pa(e,t){Ca(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Ma{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Aa("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Aa("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Aa("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Ua={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"},Fa=new La(3e4,6e4);
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
 */function Va(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ja(e,t,n,r,i={}){return Ba(e,i,(()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=qo(Object.assign({key:e.config.apiKey},s)).slice(1),a=new(Ma.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),Ma.fetch()($a(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Ba(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ua),t);try{const t=new za(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Ha(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=(i.ok?s.errorMessage:s.error.message).split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw Ha(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw Ha(e,"email-already-in-use",s);Ta(e,r[t]||t.toLowerCase().replace(/[_\s]+/g,"-"))}}catch(i){if(i instanceof Mo)throw i;Ta(e,"network-request-failed")}}async function qa(e,t,n,r,i={}){const s=await ja(e,t,n,r,i);return"mfaPendingCredential"in s&&Ta(e,"multi-factor-auth-required",{serverResponse:s}),s}function $a(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Pa(e.config,i):`${e.config.apiScheme}://${i}`}class za{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Ia(this.auth,"timeout"))),Fa.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ha(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ia(e,t,r);return i.customData._tokenResponse=n,i}
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
function Ka(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Ga(e){return 1e3*Number(e)}function Wa(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Ea("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return Ro.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return e?JSON.parse(e):(Ea("Failed to decode base64 JWT payload"),null)}catch(i){return Ea("Caught error parsing JWT payload as JSON",i),null}}
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
async function Xa(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Mo&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class Qa{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
 */class Ya{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ka(this.lastLoginAt),this.creationTime=Ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Ja(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Xa(e,async function(e,t){return ja(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));ka(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=To(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ya(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class Za{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ka(e.idToken,"internal-error"),ka(void 0!==e.idToken,"internal-error"),ka(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Wa(e);return ka(t,"internal-error"),ka(void 0!==t.exp,"internal-error"),ka(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ka(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await Ba(e,{},(()=>{const n=qo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=$a(e,r,"/v1/token",`key=${i}`);return Ma.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Za;return n&&(ka("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(ka("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(ka("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Za,this.toJSON())}_performRefresh(){return Aa("not implemented")}}
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
 */function ec(e,t){ka("string"==typeof e||void 0===e,"internal-error",{appName:t})}class tc{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=To(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Qa(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Ya(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Xa(this,this.stsTokenManager.getToken(this.auth,e));return ka(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Go(e),r=await n.getIdToken(t),i=Wa(r);ka(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ka(Ga(i.auth_time)),issuedAtTime:Ka(Ga(i.iat)),expirationTime:Ka(Ga(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Go(e);await Ja(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ka(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new tc(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ka(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ja(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xa(this,async function(e,t){return ja(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:E}=t;ka(v&&E,e,"internal-error");const T=Za.fromJSON(this.name,E);ka("string"==typeof v,e,"internal-error"),ec(u,e.name),ec(h,e.name),ka("boolean"==typeof w,e,"internal-error"),ka("boolean"==typeof _,e,"internal-error"),ec(d,e.name),ec(f,e.name),ec(p,e.name),ec(g,e.name),ec(m,e.name),ec(y,e.name);const I=new tc({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return b&&Array.isArray(b)&&(I.providerData=b.map((e=>Object.assign({},e)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new Za;r.updateFromServerResponse(t);const i=new tc({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Ja(i),i}}
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
 */class nc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nc.type="NONE";const rc=nc;
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
 */function ic(e,t,n){return`firebase:${e}:${t}:${n}`}class sc{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ic(this.userKey,r.apiKey,i),this.fullPersistenceKey=ic("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tc._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new sc(Na(rc),e,n);let r=Na(rc);for(const a of t)if(await a._isAvailable()){r=a;break}let i=null;const s=ic(n,e.config.apiKey,e.name);for(const a of t)try{const t=await a._get(s);if(t){const n=tc._fromJSON(e,t);a!==r&&(i=n);break}}catch(o){}return i&&await r._set(s,i.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(o){}}))),new sc(r,e,n)}}
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
 */function oc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(uc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ac(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(dc(t))return"Blackberry";if(fc(t))return"Webos";if(cc(t))return"Safari";if((t.includes("chrome/")||lc(t))&&!t.includes("edge/"))return"Chrome";if(hc(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ac(e=Oo()){return/firefox\//i.test(e)}function cc(e=Oo()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function lc(e=Oo()){return/crios\//i.test(e)}function uc(e=Oo()){return/iemobile/i.test(e)}function hc(e=Oo()){return/android/i.test(e)}function dc(e=Oo()){return/blackberry/i.test(e)}function fc(e=Oo()){return/webos/i.test(e)}function pc(e=Oo()){return/iphone|ipad|ipod/i.test(e)}function gc(e=Oo()){return pc(e)||hc(e)||fc(e)||dc(e)||/windows phone/i.test(e)||uc(e)}
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
function mc(e,t=[]){let n;switch(e){case"Browser":n=oc(Oo());break;case"Worker":n=`${oc(Oo())}-${e}`;break;default:n=e}return`${n}/JsCore/9.0.0-beta.8/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class yc{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wc(this),this.idTokenSubscription=new wc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.redirectInitializerError=null,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_a,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Na(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await sc.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise.then((()=>{if(this.redirectInitializerError)throw this.redirectInitializerError}))}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(ka(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){this.redirectInitializerError=n,await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ja(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Go(e):null;return t&&ka(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&ka(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Na(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Uo("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Na(e)||this._popupRedirectResolver;ka(t,this,"argument-error"),this.redirectPersistenceManager=await sc.create(this,[Na(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return ka(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ka(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function vc(e){return Go(e)}class wc{constructor(e){var t,n;this.auth=e,this.observer=null,this.addObserver=(n=new Ho((e=>this.observer=e),t)).subscribe.bind(n)}get next(){return ka(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */class _c{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Aa("not implemented")}_getIdTokenResponse(e){return Aa("not implemented")}_linkToIdToken(e,t){return Aa("not implemented")}_getReauthenticationResolver(e){return Aa("not implemented")}}
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
class bc extends _c{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new bc(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new bc(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return qa(e,"POST","/v1/accounts:signInWithPassword",Va(e,t))}
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
 */(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return qa(e,"POST","/v1/accounts:signInWithEmailLink",Va(e,t))}(e,{email:this._email,oobCode:this._password});default:Ta(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return ja(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return qa(e,"POST","/v1/accounts:signInWithEmailLink",Va(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ta(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Ec(e,t){return qa(e,"POST","/v1/accounts:signInWithIdp",Va(e,t))}
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
 */class Tc extends _c{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Tc(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ta("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=To(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Tc(n,r);return Object.assign(s,i),s}_getIdTokenResponse(e){return Ec(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ec(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ec(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qo(t)}return e}}
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
 */class Ic{constructor(e){var t,n,r,i,s,o;const a=$o(zo(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);ka(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=$o(zo(e)).link,n=t?$o(zo(t)).deep_link_id:null,r=$o(zo(e)).deep_link_id;return(r?$o(zo(r)).link:null)||r||n||t||e}(e);try{return new Ic(t)}catch(n){return null}}}
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
 */class Sc{constructor(){this.providerId=Sc.PROVIDER_ID}static credential(e,t){return bc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ic.parseLink(t);return ka(n,"argument-error"),bc._fromEmailAndCode(e,n.code,n.tenantId)}}Sc.PROVIDER_ID="password",Sc.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Sc.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class kc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Ac extends kc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class Cc extends Ac{constructor(){super("facebook.com")}static credential(e){return Tc._fromParams({providerId:Cc.PROVIDER_ID,signInMethod:Cc.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cc.credentialFromTaggedObject(e)}static credentialFromError(e){return Cc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Cc.credential(e.oauthAccessToken)}catch(t){return null}}}Cc.FACEBOOK_SIGN_IN_METHOD="facebook.com",Cc.PROVIDER_ID="facebook.com";
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
class Rc extends Ac{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Tc._fromParams({providerId:Rc.PROVIDER_ID,signInMethod:Rc.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rc.credentialFromTaggedObject(e)}static credentialFromError(e){return Rc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Rc.credential(t,n)}catch(r){return null}}}Rc.GOOGLE_SIGN_IN_METHOD="google.com",Rc.PROVIDER_ID="google.com";
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
class Nc extends Ac{constructor(){super("github.com")}static credential(e){return Tc._fromParams({providerId:Nc.PROVIDER_ID,signInMethod:Nc.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nc.credentialFromTaggedObject(e)}static credentialFromError(e){return Nc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Nc.credential(e.oauthAccessToken)}catch(t){return null}}}Nc.GITHUB_SIGN_IN_METHOD="github.com",Nc.PROVIDER_ID="github.com";
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
class Oc extends Ac{constructor(){super("twitter.com")}static credential(e,t){return Tc._fromParams({providerId:Oc.PROVIDER_ID,signInMethod:Oc.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Oc.credentialFromTaggedObject(e)}static credentialFromError(e){return Oc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Oc.credential(t,n)}catch(r){return null}}}Oc.TWITTER_SIGN_IN_METHOD="twitter.com",Oc.PROVIDER_ID="twitter.com";
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
class Dc{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await tc._fromIdTokenResponse(e,n,r),s=xc(n);return new Dc({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=xc(n);return new Dc({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function xc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class Lc extends Mo{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Lc.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new Lc(e,t,n,r)}}function Pc(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Lc._fromErrorAndOperation(e,n,t,r);throw n}))}
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
async function Mc(e,t,n=!1){const r="signIn",i=await Pc(e,r,t),s=await Dc._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Uc(e,t,n){const r=vc(e),i=await
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
async function(e,t){return qa(e,"POST","/v1/accounts:signUp",Va(e,t))}(r,{returnSecureToken:!0,email:t,password:n}),s=await Dc._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Fc(e,t,n){return async function(e,t){return Mc(vc(e),t)}(Go(e),Sc.credential(t,n))}function Vc(e,t,n,r){return Go(e).onAuthStateChanged(t,n,r)}function jc(e){return Go(e).signOut()}
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
class Bc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ka(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
class qc{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
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
 */class $c extends qc{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Oo();return cc(e)||pc(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=gc(),this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Po()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$c.type="LOCAL";const zc=$c;
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
class Hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Hc(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Kc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Hc.receivers=[];class Gc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Kc("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function Wc(){return window}
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
 */
function Xc(){return void 0!==Wc().WorkerGlobalScope&&"function"==typeof Wc().importScripts}
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
const Qc="firebaseLocalStorageDb";class Yc{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Jc(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Zc(){const e=indexedDB.open(Qc,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Qc);return new Yc(e).toPromise()}(),t(await Zc()))}))}))}async function el(e,t,n){const r=Jc(e,!0).put({fbase_key:t,value:n});return new Yc(r).toPromise()}function tl(e,t){const n=Jc(e,!0).delete(t);return new Yc(n).toPromise()}class nl{constructor(){this.type="LOCAL",this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Zc()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hc._getInstance(Xc()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Gc(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zc();return await el(e,"__sak","1"),await tl(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>el(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Jc(e,!1).get(t),r=await new Yc(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>tl(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Jc(e,!1).getAll();return new Yc(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}nl.type="LOCAL";const rl=nl;
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
 */class il{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ol(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ol(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ia(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(sl(e))}saveEventToCache(e){this.cachedEventUids.add(sl(e)),this.lastProcessedEventTime=Date.now()}}function sl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ol({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const al=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cl=/^https?/;async function ll(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return ja(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(ul(r))return}catch(n){}Ta(e,"unauthorized-domain")}function ul(e){const t=Oa(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!cl.test(n))return!1;if(al.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */function hl(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Ia("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}
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
 */
const dl=new La(3e4,6e4);function fl(){const e=Wc().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function pl(e){return new Promise(((t,n)=>{var r,i,s;function o(){fl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{fl(),n(Ia(e,"network-request-failed"))},timeout:dl.get()})}if(null===(i=null===(r=Wc().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Wc().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Wc()[t]=()=>{gapi.load?o():n(Ia(e,"network-request-failed"))},hl(`https://apis.google.com/js/api.js?onload=${t}`)}o()}})).catch((e=>{throw gl=null,e}))}let gl=null;
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
 */
const ml=new La(5e3,15e3),yl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},vl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wl(e){const t=e.config;ka(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Pa(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.0.0-beta.8"},i=vl.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qo(r).slice(1)}`}async function _l(e){const t=await function(e){return gl=gl||pl(e),gl}(e),n=Wc().gapi;return ka(n,e,"internal-error"),t.open({where:document.body,url:wl(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yl,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Ia(e,"network-request-failed"),s=Wc().setTimeout((()=>{r(i)}),ml.get());function o(){Wc().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */class bl extends qc{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bl.type="SESSION";const El=bl,Tl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};
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
 */class Il{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Sl(e,t,n,r=500,i=600){const s=Math.min((window.screen.availHeight-i)/2,0).toString(),o=Math.min((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Tl),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Oo().toLowerCase();n&&(a=lc(l)?"_blank":n),ac(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Oo()){var t;return pc(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new Il(null);const h=window.open(t||"",a,u);ka(h,e,"popup-blocked");try{h.focus()}catch(d){}return new Il(h)}
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
class kl extends _c{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ec(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ec(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ec(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Al(e){return Mc(e.auth,new kl(e),e.bypassAuthState)}function Cl(e){const{auth:t,user:n}=e;return ka(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Xa(e,Pc(r,i,t,e),n);ka(s.idToken,r,"internal-error");const o=Wa(s.idToken);ka(o,r,"internal-error");const{sub:a}=o;return ka(e.uid===a,r,"user-mismatch"),Dc._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&Ta(r,"user-mismatch"),s}}(n,new kl(e),e.bypassAuthState)}async function Rl(e){const{auth:t,user:n}=e;return ka(n,t,"internal-error"),async function(e,t,n=!1){const r=await Xa(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Dc._forOperation(e,"link",r)}(n,new kl(e),e.bypassAuthState)}
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
 */class Nl{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Al;case"linkViaPopup":case"linkViaRedirect":return Rl;case"reauthViaPopup":case"reauthViaRedirect":return Cl;default:Ta(this.auth,"internal-error")}}resolve(e){Ca(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ca(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Ol=new Map;class Dl extends Nl{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ol.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return ic("pendingRedirect",e.config.apiKey,e.name)}(t),r="true"===await xl(e)._get(n);return await xl(e)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ol.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function xl(e){return Na(e._redirectPersistence)}async function Ll(e,t,n=!1){const r=vc(e),i=function(e,t){return t?Na(t):(ka(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new Dl(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
 */function Pl(e,t,n,r,i,s){ka(e.config.authDomain,e,"auth-domain-config-required"),ka(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.0.0-beta.8",eventId:i};if(t instanceof kc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Ac){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return Pa(e,"emulator/auth/handler")}
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
 */(e)}?${qo(a).slice(1)}`}const Ml=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=El,this._completeRedirectFn=Ll}async _openPopup(e,t,n,r){var i;Ca(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Sl(e,Pl(e,t,n,Oa(),r),Kc())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Pl(e,t,n,Oa(),r),Wc().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Ca(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await _l(e),n=new il(e);return t.register("authEvent",(t=>{ka(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Ta(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ll(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gc()||cc()||pc()}};new La(3e4,6e4);
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
const Ul=new La(2e3,1e4);class Fl extends Nl{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Fl.currentPopupAction&&Fl.currentPopupAction.cancel(),Fl.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ka(e,this.auth,"internal-error"),e}async onExecution(){Ca(1===this.filter.length,"Popup operations only handle one event");const e=Kc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Ia(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ia(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fl.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ia(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Ul.get())};e()}}function Vl(e=ya()){const t=fa(e,"auth-exp");return t.isInitialized()?t.getImmediate():function(e,t){const n=fa(e,"auth-exp");n.isInitialized()&&Ta(n.getImmediate(),"already-initialized");return n.initialize({options:t})}(e,{popupRedirectResolver:Ml,persistence:[rl,zc]})}var jl;Fl.currentPopupAction=null,jl="Browser",da(new Wo("auth-exp",((e,{options:t})=>{const n=e.getProvider("app-exp").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{ka(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),ka(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:jl,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mc(jl)},s=new yc(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Na);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),da(new Wo("auth-internal",(e=>{const t=vc(e.getProvider("auth-exp").getImmediate());return new Bc(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),va("@firebase/auth-exp","0.0.900-exp.8b4d7550f",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(jl));var Bl,ql;
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
va("firebase-exp","9.0.0-beta.8","app"),(ql=Bl||(Bl={}))[ql.NO_ERROR=0]="NO_ERROR",ql[ql.NETWORK_ERROR=1]="NETWORK_ERROR",ql[ql.ABORT=2]="ABORT";class $l extends Mo{constructor(e,t){super(zl(e),`Firebase Storage: ${t} (${zl(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$l.prototype)}_codeEquals(e){return zl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function zl(e){return"storage/"+e}function Hl(){return new $l("unknown","An unknown error occurred, please check the error payload for server response.")}function Kl(e){return new $l("invalid-argument",e)}function Gl(){return new $l("app-deleted","The Firebase app was deleted.")}function Wl(e,t){return new $l("invalid-format","String does not match format '"+e+"': "+t)}function Xl(e){throw new $l("internal-error","Internal error: "+e)}
/**
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
 */class Ql{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=Bl.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=Bl.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=Bl.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw Xl("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xl("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponseText(){if(!this.sent_)throw Xl("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}
/**
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
 */
class Yl{createConnection(){return new Ql}}
/**
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
 */class Jl{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=Jl.makeFromUrl(e,t)}catch(r){return new Jl(e,"")}if(""===n.path)return n;throw new $l("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===t?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let c=0;c<a.length;c++){const t=a[c],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new Jl(e,i),t.postModify(n);break}}if(null==n)throw function(e){return new $l("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class Zl{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
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
 */function eu(e){return"string"==typeof e||e instanceof String}function tu(e){return nu()&&e instanceof Blob}function nu(){return"undefined"!=typeof Blob}function ru(e,t,n,r){if(r<t)throw Kl(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Kl(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
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
 */function iu(e,t){const n=t.match(/^(\w+):\/\/.+/);let r=t;return null==(null==n?void 0:n[1])&&(r=`https://${t}`),`${r}/v0${e}`}function su(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
/**
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
 */class ou{constructor(e,t,n,r,i,s,o,a,c,l,u){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=s.slice(),this.callback_=o,this.errorCallback_=a,this.progressCallback_=l,this.timeout_=c,this.pool_=u,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=this;function t(t,n){const r=e.resolve_,i=e.reject_,s=n.connection;if(n.wasSuccessCode)try{const t=e.callback_(s,s.getResponseText());void 0!==t?r(t):r()}catch(o){i(o)}else if(null!==s){const t=Hl();t.serverResponse=s.getResponseText(),e.errorCallback_?i(e.errorCallback_(s,t)):i(t)}else if(n.canceled){i(e.appDelete_?Gl():new $l("canceled","User canceled the upload/download."))}else{i(new $l("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}}this.canceled_?t(0,new au(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,i=null,s=!1,o=0;function a(){return 2===o}let c=!1;function l(...e){c||(c=!0,t.apply(null,e))}function u(t){i=setTimeout((()=>{i=null,e(h,a())}),t)}function h(e,...t){if(c)return;if(e)return void l.call(null,e,...t);if(a()||s)return void l.call(null,e,...t);let n;r<64&&(r*=2),1===o?(o=2,n=0):n=1e3*(r+Math.random()),u(n)}let d=!1;function f(e){d||(d=!0,c||(null!==i?(e||(o=2),clearTimeout(i),u(0)):e||(o=1)))}return u(0),setTimeout((()=>{s=!0,f(!0)}),n),f}((function(t,n){if(n)return void t(!1,new au(!1,null,!0));const r=e.pool_.createConnection();function i(t){const n=t.loaded,r=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(n,r)}e.pendingConnection_=r,null!==e.progressCallback_&&r.addUploadProgressListener(i),r.send(e.url_,e.method_,e.body_,e.headers_).then((()=>{null!==e.progressCallback_&&r.removeUploadProgressListener(i),e.pendingConnection_=null;const n=r.getErrorCode()===Bl.NO_ERROR,s=r.getStatus();if(!n||e.isRetryStatusCode_(s)){const e=r.getErrorCode()===Bl.ABORT;return void t(!1,new au(!1,null,e))}const o=-1!==e.successCodes_.indexOf(s);t(!0,new au(o,r))}))}),t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}class au{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function cu(...e){const t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(nu())return new Blob(e);throw new $l("unsupported-environment","This browser doesn't seem to support creating Blobs")}
/**
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
 */
const lu="raw",uu="base64",hu="base64url",du="data_url";class fu{constructor(e,t){this.data=e,this.contentType=t||null}}function pu(e,t){switch(e){case lu:return new fu(gu(t));case uu:case hu:return new fu(mu(e,t));case du:return new fu(function(e){const t=new yu(e);return t.base64?mu(uu,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(n){throw Wl(du,"Malformed data URL.")}return gu(t)}(t.rest)}(t),new yu(t).contentType)}throw Hl()}function gu(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function mu(e,t){switch(e){case uu:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw Wl(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case hu:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw Wl(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(i){throw Wl(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class yu{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw Wl(du,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}
/**
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
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}class vu{constructor(e,t){let n=0,r="";tu(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(tu(this.data_)){const s=this.data_,o=(r=e,i=t,(n=s).webkitSlice?n.webkitSlice(r,i):n.mozSlice?n.mozSlice(r,i):n.slice?n.slice(r,i):null);return null===o?null:new vu(o)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new vu(n,!0)}var n,r,i;
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
 */}static getBlob(...e){if(nu()){const t=e.map((e=>e instanceof vu?e.data_:e));return new vu(cu.apply(null,t))}{const t=e.map((e=>eu(e)?pu(lu,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new vu(r,!0)}}uploadData(){return this.data_}}
/**
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
 */function wu(e){let t;try{t=JSON.parse(e)}catch(r){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
/**
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
 */function _u(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
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
 */function bu(e,t){return t}class Eu{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||bu}}let Tu=null;function Iu(){if(Tu)return Tu;const e=[];e.push(new Eu("bucket")),e.push(new Eu("generation")),e.push(new Eu("metageneration")),e.push(new Eu("name","fullPath",!0));const t=new Eu("name");t.xform=function(e,t){return function(e){return!eu(e)||e.length<2?e:_u(e)}(t)},e.push(t);const n=new Eu("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new Eu("timeCreated")),e.push(new Eu("updated")),e.push(new Eu("md5Hash",null,!0)),e.push(new Eu("cacheControl",null,!0)),e.push(new Eu("contentDisposition",null,!0)),e.push(new Eu("contentEncoding",null,!0)),e.push(new Eu("contentLanguage",null,!0)),e.push(new Eu("contentType",null,!0)),e.push(new Eu("metadata","customMetadata",!0)),Tu=e,Tu}function Su(e,t,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const e=n[s];r[e.local]=e.xform(r,t[e.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,i=new Jl(n,r);return t._makeStorageReference(i)}})}(r,e),r}function ku(e,t,n){const r=wu(t);if(null===r)return null;return Su(e,r,n)}class Au{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
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
 */function Cu(e){if(!e)throw Hl()}function Ru(e,t){return function(n,r){const i=ku(e,r,t);return Cu(null!==i),function(e,t,n){const r=wu(t);if(null===r)return null;if(!eu(r.downloadTokens))return null;const i=r.downloadTokens;if(0===i.length)return null;const s=encodeURIComponent;return i.split(",").map((t=>{const r=e.bucket,i=e.fullPath;return iu("/b/"+s(r)+"/o/"+s(i),n)+su({alt:"media",token:t})}))[0]}(i,r,e.host)}}function Nu(e){return function(t,n){let r;var i,s;return 401===t.getStatus()?r=t.getResponseText().includes("Firebase App Check token is invalid")?new $l("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new $l("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,r=new $l("quota-exceeded","Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,r=new $l("unauthorized","User does not have permission to access '"+i+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function Ou(e){const t=Nu(e);return function(n,r){let i=t(n,r);var s;return 404===n.getStatus()&&(s=e.path,i=new $l("object-not-found","Object '"+s+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function Du(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const c=function(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}(t,r,i),l="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+function(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}(c,n)+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",u="\r\n--"+a+"--",h=vu.getBlob(l,r,u);if(null===h)throw new $l("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.");const d={name:c.fullPath},f=iu(s,e.host),p=e.maxUploadRetryTime,g=new Au(f,"POST",function(e,t){return function(n,r){const i=ku(e,r,t);return Cu(null!==i),i}}(e,n),p);return g.urlParams=d,g.headers=o,g.body=h.uploadData(),g.errorHandler=Nu(t),g}
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
 */class xu{constructor(e,t){this._service=e,this._location=t instanceof Jl?t:Jl.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new xu(e,t)}get root(){const e=new Jl(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _u(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new Jl(this._location.bucket,e);return new xu(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new $l("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}async function Lu(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=iu(t.fullServerUrl(),e.host),i=e.maxOperationRetryTime,s=new Au(r,"GET",Ru(e,n),i);return s.errorHandler=Ou(t),s}(e.storage,e._location,Iu());return(await e.storage.makeRequestWithTokens(t)).getPromise().then((e=>{if(null===e)throw new $l("no-download-url","The given file does not have any download URLs.");return e}))}async function Pu(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=iu(t.fullServerUrl(),e.host),r=e.maxOperationRetryTime,i=new Au(n,"DELETE",(function(e,t){}),r);return i.successCodes=[200,204],i.errorHandler=Ou(t),i}(e.storage,e._location);return(await e.storage.makeRequestWithTokens(t)).getPromise()}function Mu(e,t){if(e instanceof Vu){const n=e;if(null==n._bucket)throw new $l("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const r=new xu(n,n._bucket);return null!=t?Mu(r,t):r}if(void 0!==t){if(t.includes(".."))throw Kl('`path` param cannot contain ".."');return function(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new Jl(e._location.bucket,n);return new xu(e.storage,r)}
/**
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
 */(e,t)}return e}function Uu(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Vu)return new xu(e,t);throw Kl("To use ref(service, url), the first argument must be a Storage instance.")}return Mu(e,t)}function Fu(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:Jl.makeFromBucketSpec(n,e)}class Vu{constructor(e,t,n,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._pool=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host="firebasestorage.googleapis.com",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?Jl.makeFromBucketSpec(i,this._host):Fu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=Jl.makeFromBucketSpec(this._url,e):this._bucket=Fu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ru("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ru("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xu(this,e)}_makeRequest(e,t,n){if(this._deleted)return new Zl(Gl());{const r=function(e,t,n,r,i,s){const o=su(e.urlParams),a=e.url+o,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new ou(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}
/**
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
 */(e,this._appId,t,n,this._pool,this._firebaseVersion);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(e){const[t,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n)}}
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
function ju(e,t,n){return function(e,t,n){e._throwIfRoot("uploadBytes");const r=Du(e.storage,e._location,Iu(),new vu(t,!0),n);return e.storage.makeRequestWithTokens(r).then((e=>e.getPromise())).then((t=>({metadata:t,ref:e})))}(e=Go(e),t,n)}function Bu(e){return Lu(e=Go(e))}function qu(e){return Pu(e=Go(e))}function $u(e,t){return Uu(e=Go(e),t)}function zu(e=ya(),t){return fa(e=Go(e),"storage-exp").getImmediate({identifier:t})}function Hu(e,{instanceIdentifier:t}){const n=e.getProvider("app-exp").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Vu(n,r,i,new Yl,t,"9.0.0-beta.8")}da(new Wo("storage-exp",Hu,"PUBLIC").setMultipleInstances(!0)),va("@firebase/storage","0.0.900-exp.8b4d7550f");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Ku=function(e,t){return(Ku=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function Gu(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}var Wu,Xu="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Qu=Qu||{},Yu=Xu||self;function Ju(){}function Zu(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function eh(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var th="closure_uid_"+(1e9*Math.random()>>>0),nh=0;function rh(e,t,n){return e.call.apply(e.bind,arguments)}function ih(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function sh(e,t,n){return(sh=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?rh:ih).apply(null,arguments)}function oh(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function ah(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function ch(){this.s=this.s,this.o=this.o}var lh={};ch.prototype.s=!1,ch.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,th)&&e[th]||(e[th]=++nh)}(this);delete lh[e]}},ch.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var uh=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},hh=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){for(var r=e.length,i="string"==typeof e?e.split(""):e,s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function dh(e){return Array.prototype.concat.apply([],arguments)}function fh(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function ph(e){return/^[\s\xa0]*$/.test(e)}var gh,mh=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function yh(e,t){return-1!=e.indexOf(t)}function vh(e,t){return e<t?-1:e>t?1:0}e:{var wh=Yu.navigator;if(wh){var _h=wh.userAgent;if(_h){gh=_h;break e}}gh=""}function bh(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function Eh(e){var t={};for(var n in e)t[n]=e[n];return t}var Th="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ih(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var s=0;s<Th.length;s++)n=Th[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Sh(e){return Sh[" "](e),e}Sh[" "]=Ju;var kh,Ah,Ch=yh(gh,"Opera"),Rh=yh(gh,"Trident")||yh(gh,"MSIE"),Nh=yh(gh,"Edge"),Oh=Nh||Rh,Dh=yh(gh,"Gecko")&&!(yh(gh.toLowerCase(),"webkit")&&!yh(gh,"Edge"))&&!(yh(gh,"Trident")||yh(gh,"MSIE"))&&!yh(gh,"Edge"),xh=yh(gh.toLowerCase(),"webkit")&&!yh(gh,"Edge");function Lh(){var e=Yu.document;return e?e.documentMode:void 0}e:{var Ph="",Mh=(Ah=gh,Dh?/rv:([^\);]+)(\)|;)/.exec(Ah):Nh?/Edge\/([\d\.]+)/.exec(Ah):Rh?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ah):xh?/WebKit\/(\S+)/.exec(Ah):Ch?/(?:Version)[ \/]?(\S+)/.exec(Ah):void 0);if(Mh&&(Ph=Mh?Mh[1]:""),Rh){var Uh=Lh();if(null!=Uh&&Uh>parseFloat(Ph)){kh=String(Uh);break e}}kh=Ph}var Fh,Vh={};function jh(){return function(e){var t=Vh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){for(var e=0,t=mh(String(kh)).split("."),n=mh("9").split("."),r=Math.max(t.length,n.length),i=0;0==e&&i<r;i++){var s=t[i]||"",o=n[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;e=vh(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||vh(0==s[2].length,0==o[2].length)||vh(s[2],o[2]),s=s[3],o=o[3]}while(0==e)}return 0<=e}))}if(Yu.document&&Rh){var Bh=Lh();Fh=Bh||(parseInt(kh,10)||void 0)}else Fh=void 0;var qh=Fh,$h=function(){if(!Yu.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Yu.addEventListener("test",Ju,t),Yu.removeEventListener("test",Ju,t)}catch(n){}return e}();function zh(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function Hh(e,t){if(zh.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Dh){e:{try{Sh(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Kh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Hh.Z.h.call(this)}}zh.prototype.h=function(){this.defaultPrevented=!0},ah(Hh,zh);var Kh={2:"touch",3:"pen",4:"mouse"};Hh.prototype.h=function(){Hh.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Gh="closure_listenable_"+(1e6*Math.random()|0),Wh=0;function Xh(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++Wh,this.ca=this.fa=!1}function Qh(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Yh(e){this.src=e,this.g={},this.h=0}function Jh(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=uh(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Qh(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Zh(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}Yh.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Zh(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new Xh(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var ed="closure_lm_"+(1e6*Math.random()|0),td={};function nd(e,t,n,r,i){if(r&&r.once)return id(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)nd(e,t[s],n,r,i);return null}return n=hd(n),e&&e[Gh]?e.N(t,n,eh(r)?!!r.capture:!!r,i):rd(e,t,n,!1,r,i)}function rd(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=eh(i)?!!i.capture:!!i,a=ld(e);if(a||(e[ed]=a=new Yh(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=cd;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)$h||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ad(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function id(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)id(e,t[s],n,r,i);return null}return n=hd(n),e&&e[Gh]?e.O(t,n,eh(r)?!!r.capture:!!r,i):rd(e,t,n,!0,r,i)}function sd(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)sd(e,t[s],n,r,i);else r=eh(r)?!!r.capture:!!r,n=hd(n),e&&e[Gh]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Zh(s=e.g[t],n,r,i))&&(Qh(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ld(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Zh(t,n,r,i)),(n=-1<e?t[e]:null)&&od(n))}function od(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Gh])Jh(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ad(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ld(t))?(Jh(n,e),0==n.h&&(n.src=null,t[ed]=null)):Qh(e)}}}function ad(e){return e in td?td[e]:td[e]="on"+e}function cd(e,t){if(e.ca)e=!0;else{t=new Hh(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&od(e),e=n.call(r,t)}return e}function ld(e){return(e=e[ed])instanceof Yh?e:null}var ud="__closure_events_fn_"+(1e9*Math.random()>>>0);function hd(e){return"function"==typeof e?e:(e[ud]||(e[ud]=function(t){return e.handleEvent(t)}),e[ud])}function dd(){ch.call(this),this.i=new Yh(this),this.P=this,this.I=null}function fd(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new zh(t,e);else if(t instanceof zh)t.target=t.target||e;else{var i=t;Ih(t=new zh(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=pd(o,r,!0,t)&&i}if(i=pd(o=t.g=e,r,!0,t)&&i,i=pd(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=pd(o=t.g=n[s],r,!1,t)&&i}function pd(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Jh(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}ah(dd,ch),dd.prototype[Gh]=!0,dd.prototype.removeEventListener=function(e,t,n,r){sd(this,e,t,n,r)},dd.prototype.M=function(){if(dd.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Qh(n[r]);delete t.g[e],t.h--}}this.I=null},dd.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},dd.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var gd=Yu.JSON.stringify;function md(){var e=Id,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var yd,vd=function(){function e(){this.h=this.g=null}return e.prototype.add=function(e,t){var n=wd.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n},e}(),wd=new(function(){function e(e,t){this.i=e,this.j=t,this.h=0,this.g=null}return e.prototype.get=function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e},e}())((function(){return new _d}),(function(e){return e.reset()})),_d=function(){function e(){this.next=this.g=this.h=null}return e.prototype.set=function(e,t){this.h=e,this.g=t,this.next=null},e.prototype.reset=function(){this.next=this.g=this.h=null},e}();function bd(e){Yu.setTimeout((function(){throw e}),0)}function Ed(e,t){yd||function(){var e=Yu.Promise.resolve(void 0);yd=function(){e.then(Sd)}}(),Td||(yd(),Td=!0),Id.add(e,t)}var Td=!1,Id=new vd;function Sd(){for(var e;e=md();){try{e.h.call(e.g)}catch(n){bd(n)}var t=wd;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Td=!1}function kd(e,t){dd.call(this),this.h=e||1,this.g=t||Yu,this.j=sh(this.kb,this),this.l=Date.now()}function Ad(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Cd(e,t,n){if("function"==typeof e)n&&(e=sh(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=sh(e.handleEvent,e)}return 2147483647<Number(t)?-1:Yu.setTimeout(e,t||0)}function Rd(e){e.g=Cd((function(){e.g=null,e.i&&(e.i=!1,Rd(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}ah(kd,dd),(Wu=kd.prototype).da=!1,Wu.S=null,Wu.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),fd(this,"tick"),this.da&&(Ad(this),this.start()))}},Wu.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Wu.M=function(){kd.Z.M.call(this),Ad(this),delete this.g};var Nd=function(e){function t(t,n){var r=e.call(this)||this;return r.m=t,r.j=n,r.h=null,r.i=!1,r.g=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Ku(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.l=function(e){this.h=arguments,this.g?this.i=!0:Rd(this)},t.prototype.M=function(){e.prototype.M.call(this),this.g&&(Yu.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},t}(ch);function Od(e){ch.call(this),this.h=e,this.g={}}ah(Od,ch);var Dd=[];function xd(e,t,n,r){Array.isArray(n)||(n&&(Dd[0]=n.toString()),n=Dd);for(var i=0;i<n.length;i++){var s=nd(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ld(e){bh(e.g,(function(e,t){this.g.hasOwnProperty(t)&&od(e)}),e),e.g={}}function Pd(){this.g=!0}function Md(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return gd(n)}catch(a){return t}}(e,n)+(r?" "+r:"")}))}Od.prototype.M=function(){Od.Z.M.call(this),Ld(this)},Od.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Pd.prototype.Aa=function(){this.g=!1},Pd.prototype.info=function(){};var Ud={},Fd=null;function Vd(){return Fd=Fd||new dd}function jd(e){zh.call(this,Ud.Ma,e)}function Bd(e){var t=Vd();fd(t,new jd(t,e))}function qd(e,t){zh.call(this,Ud.STAT_EVENT,e),this.stat=t}function $d(e){var t=Vd();fd(t,new qd(t,e))}function zd(e,t){zh.call(this,Ud.Na,e),this.size=t}function Hd(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Yu.setTimeout((function(){e()}),t)}Ud.Ma="serverreachability",ah(jd,zh),Ud.STAT_EVENT="statevent",ah(qd,zh),Ud.Na="timingevent",ah(zd,zh);var Kd={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Gd={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Wd(){}function Xd(e){return e.h||(e.h=e.i())}function Qd(){}Wd.prototype.h=null;var Yd,Jd={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Zd(){zh.call(this,"d")}function ef(){zh.call(this,"c")}function tf(){}function nf(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Od(this),this.P=sf,e=Oh?125:void 0,this.W=new kd(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new rf}function rf(){this.i=null,this.g="",this.h=!1}ah(Zd,zh),ah(ef,zh),ah(tf,Wd),tf.prototype.g=function(){return new XMLHttpRequest},tf.prototype.i=function(){return{}},Yd=new tf;var sf=45e3,of={},af={};function cf(e,t,n){e.K=1,e.v=Of(Sf(t)),e.s=n,e.U=!0,lf(e,null)}function lf(e,t){e.F=Date.now(),ff(e),e.A=Sf(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),zf(n.h,"t",r),e.C=0,n=e.l.H,e.h=new rf,e.g=Hp(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Nd(sh(e.Ia,e,e.g),e.O)),xd(e.V,e.g,"readystatechange",e.gb),t=e.H?Eh(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Bd(1),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function uf(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function hf(e,t,n){for(var r,i=!0;!e.I&&e.C<n.length;){if((r=df(e,n))==af){4==t&&(e.o=4,$d(14),i=!1),Md(e.j,e.m,null,"[Incomplete Response]");break}if(r==of){e.o=4,$d(15),Md(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Md(e.j,e.m,r,null),vf(e,r)}uf(e)&&r!=af&&r!=of&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,$d(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Up(t),t.L=!0,$d(11))):(Md(e.j,e.m,n,"[Invalid Chunked Response]"),yf(e),mf(e))}function df(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?af:(n=Number(t.substring(n,r)),isNaN(n)?of:(r+=1)+n>t.length?af:(t=t.substr(r,n),e.C=r+n,t))}function ff(e){e.Y=Date.now()+e.P,pf(e,e.P)}function pf(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Hd(sh(e.eb,e),t)}function gf(e){e.B&&(Yu.clearTimeout(e.B),e.B=null)}function mf(e){0==e.l.G||e.I||jp(e.l,e)}function yf(e){gf(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ad(e.W),Ld(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function vf(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Yf(n.i,e)))if(n.I=e.N,!e.J&&Yf(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(m){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Vp(n),Cp(n)}Mp(n),$d(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Hd(sh(n.ab,n),6e3));if(1>=Qf(n.i)&&n.ka){try{n.ka()}catch(m){}n.ka=void 0}}else qp(n,11)}else if((e.J||n.g==e)&&Vp(n),!ph(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){var s=i[t];if(n.U=s[0],s=s[1],2==n.G)if("c"==s[0]){n.J=s[1],n.la=s[2];var o=s[3];null!=o&&(n.ma=o,n.h.info("VER="+n.ma));var a=s[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var c=s[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var l=e.g;if(l){var u=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(u){var h=r.i;!h.g&&(yh(u,"spdy")||yh(u,"quic")||yh(u,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(Jf(h,h.h),h.h=null))}if(r.D){var d=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;d&&(r.sa=d,Nf(r.F,r.D,d))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var f=e;if((r=n).oa=zp(r,r.H?r.la:null,r.W),f.J){Zf(r.i,f);var p=f,g=r.K;g&&p.setTimeout(g),p.B&&(gf(p),ff(p)),r.g=f}else Pp(r);0<n.l.length&&Op(n)}else"stop"!=s[0]&&"close"!=s[0]||qp(n,7);else 3==n.G&&("stop"==s[0]||"close"==s[0]?"stop"==s[0]?qp(n,7):Ap(n):"noop"!=s[0]&&n.j&&n.j.wa(s),n.A=0)}Bd(4)}catch(m){}}function wf(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Zu(e)||"string"==typeof e)hh(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(Zu(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;i=(r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(Zu(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e)).length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function _f(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof _f)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function bf(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Ef(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)Ef(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Ef(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(Wu=nf.prototype).setTimeout=function(e){this.P=e},Wu.gb=function(e){e=e.target;var t=this.L;t&&3==Ep(e)?t.l():this.Ia(e)},Wu.Ia=function(e){try{if(e==this.g)e:{var t=Ep(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>t)&&(3!=t||Oh||this.g&&(this.h.h||this.g.ga()||Tp(this.g)))){this.I||4!=t||7==n||Bd(8==n||0>=r?3:2),gf(this);var i=this.g.ba();this.N=i;t:if(uf(this)){var s=Tp(this.g);e="";var o=s.length,a=4==Ep(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){yf(this),mf(this);var c="";break t}this.h.i=new Yu.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,e+=this.h.i.decode(s[n],{stream:a&&n==o-1});s.splice(0,o),this.h.g+=e,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=200==i,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,t,i),this.i){if(this.$&&!this.J){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ph(l)){var h=l;break t}}h=null}if(!(i=h)){this.i=!1,this.o=3,$d(12),yf(this),mf(this);break e}Md(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vf(this,i)}this.U?(hf(this,t,c),Oh&&this.i&&3==t&&(xd(this.V,this.W,"tick",this.fb),this.W.start())):(Md(this.j,this.m,c,null),vf(this,c)),4==t&&yf(this),this.i&&!this.I&&(4==t?jp(this.l,this):(this.i=!1,ff(this)))}else 400==i&&0<c.indexOf("Unknown SID")?(this.o=3,$d(12)):(this.o=0,$d(13)),yf(this),mf(this)}}}catch(d){}},Wu.fb=function(){if(this.g){var e=Ep(this.g),t=this.g.ga();this.C<t.length&&(gf(this),hf(this,e,t),this.i&&4!=e&&ff(this))}},Wu.cancel=function(){this.I=!0,yf(this)},Wu.eb=function(){this.B=null;var e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Bd(3),$d(17)),yf(this),this.o=2,mf(this)):pf(this,this.Y-e)},(Wu=_f.prototype).R=function(){bf(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Wu.T=function(){return bf(this),this.g.concat()},Wu.get=function(e,t){return Ef(this.h,e)?this.h[e]:t},Wu.set=function(e,t){Ef(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Wu.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Tf=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function If(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof If){this.g=void 0!==t?t:e.g,kf(this,e.j),this.s=e.s,Af(this,e.i),Cf(this,e.m),this.l=e.l,t=e.h;var n=new jf;n.i=t.i,t.g&&(n.g=new _f(t.g),n.h=t.h),Rf(this,n),this.o=e.o}else e&&(n=String(e).match(Tf))?(this.g=!!t,kf(this,n[1]||"",!0),this.s=Df(n[2]||""),Af(this,n[3]||"",!0),Cf(this,n[4]),this.l=Df(n[5]||"",!0),Rf(this,n[6]||"",!0),this.o=Df(n[7]||"")):(this.g=!!t,this.h=new jf(null,this.g))}function Sf(e){return new If(e)}function kf(e,t,n){e.j=n?Df(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Af(e,t,n){e.i=n?Df(t,!0):t}function Cf(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Rf(e,t,n){t instanceof jf?(e.h=t,function(e,t){t&&!e.j&&(Bf(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(qf(this,t),zf(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=xf(t,Ff)),e.h=new jf(t,e.g))}function Nf(e,t,n){e.h.set(t,n)}function Of(e){return Nf(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Df(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function xf(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Lf),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Lf(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}If.prototype.toString=function(){var e=[],t=this.j;t&&e.push(xf(t,Pf,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(xf(t,Pf,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(xf(n,"/"==n.charAt(0)?Uf:Mf,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",xf(n,Vf)),e.join("")};var Pf=/[#\/\?@]/g,Mf=/[#\?:]/g,Uf=/[#\?]/g,Ff=/[#\?@]/g,Vf=/#/g;function jf(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Bf(e){e.g||(e.g=new _f,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function qf(e,t){Bf(e),t=Hf(e,t),Ef(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Ef((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&bf(e)))}function $f(e,t){return Bf(e),t=Hf(e,t),Ef(e.g.h,t)}function zf(e,t,n){qf(e,t),0<n.length&&(e.i=null,e.g.set(Hf(e,t),fh(n)),e.h+=n.length)}function Hf(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Wu=jf.prototype).add=function(e,t){Bf(this),this.i=null,e=Hf(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Wu.forEach=function(e,t){Bf(this),this.g.forEach((function(n,r){hh(n,(function(n){e.call(t,n,r,this)}),this)}),this)},Wu.T=function(){Bf(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},Wu.R=function(e){Bf(this);var t=[];if("string"==typeof e)$f(this,e)&&(t=dh(t,this.g.get(Hf(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=dh(t,e[n])}return t},Wu.set=function(e,t){return Bf(this),this.i=null,$f(this,e=Hf(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Wu.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},Wu.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var Kf=function(e,t){this.h=e,this.g=t};function Gf(e){this.l=e||Wf,Yu.PerformanceNavigationTiming?e=0<(e=Yu.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Yu.g&&Yu.g.Ea&&Yu.g.Ea()&&Yu.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Wf=10;function Xf(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Qf(e){return e.h?1:e.g?e.g.size:0}function Yf(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Jf(e,t){e.g?e.g.add(t):e.h=t}function Zf(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function ep(e){var t,n;if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){var r=e.i;try{for(var i=Gu(e.g.values()),s=i.next();!s.done;s=i.next()){var o=s.value;r=r.concat(o.D)}}catch(a){t={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}return fh(e.i)}function tp(){}function np(){this.g=new tp}function rp(e,t,n){var r=n||"";try{wf(e,(function(e,n){var i=e;eh(e)&&(i=gd(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function ip(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function sp(e){this.l=e.$b||null,this.j=e.ib||!1}function op(e,t){dd.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ap,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Gf.prototype.cancel=function(){var e,t;if(this.i=ep(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=Gu(this.g.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(i){e={error:i}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}this.g.clear()}},tp.prototype.stringify=function(e){return Yu.JSON.stringify(e,void 0)},tp.prototype.parse=function(e){return Yu.JSON.parse(e,void 0)},ah(sp,Wd),sp.prototype.g=function(){return new op(this.l,this.j)},sp.prototype.i=function(e){return function(){return e}}({}),ah(op,dd);var ap=0;function cp(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function lp(e){e.readyState=4,e.l=null,e.j=null,e.A=null,up(e)}function up(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Wu=op.prototype).open=function(e,t){if(this.readyState!=ap)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,up(this)},Wu.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Yu).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Wu.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,lp(this)),this.readyState=ap},Wu.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,up(this)),this.g&&(this.readyState=3,up(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Yu.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cp(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Wu.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?lp(this):up(this),3==this.readyState&&cp(this)}},Wu.Ua=function(e){this.g&&(this.response=this.responseText=e,lp(this))},Wu.Ta=function(e){this.g&&(this.response=e,lp(this))},Wu.ha=function(){this.g&&lp(this)},Wu.setRequestHeader=function(e,t){this.v.append(e,t)},Wu.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Wu.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(op.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var hp=Yu.JSON.parse;function dp(e){dd.call(this),this.headers=new _f,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=fp,this.K=this.L=!1}ah(dp,dd);var fp="",pp=/^https?$/i,gp=["POST","PUT"];function mp(e){return"content-type"==e.toLowerCase()}function yp(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,vp(e),_p(e)}function vp(e){e.D||(e.D=!0,fd(e,"complete"),fd(e,"error"))}function wp(e){if(e.h&&void 0!==Qu&&(!e.C[1]||4!=Ep(e)||2!=e.ba()))if(e.v&&4==Ep(e))Cd(e.Fa,0,e);else if(fd(e,"readystatechange"),4==Ep(e)){e.h=!1;try{var t,n=e.ba();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var s=String(e.H).match(Tf)[1]||null;if(!s&&Yu.self&&Yu.self.location){var o=Yu.self.location.protocol;s=o.substr(0,o.length-1)}i=!pp.test(s?s.toLowerCase():"")}t=i}if(t)fd(e,"complete"),fd(e,"success");else{e.m=6;try{var a=2<Ep(e)?e.g.statusText:""}catch(c){a=""}e.j=a+" ["+e.ba()+"]",vp(e)}}finally{_p(e)}}}function _p(e,t){if(e.g){bp(e);var n=e.g,r=e.C[0]?Ju:null;e.g=null,e.C=null,t||fd(e,"ready");try{n.onreadystatechange=r}catch(i){}}}function bp(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Yu.clearTimeout(e.A),e.A=null)}function Ep(e){return e.g?e.g.readyState:0}function Tp(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case fp:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ip(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){var t="";return bh(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Nf(e,t,n))}function Sp(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function kp(e){this.za=0,this.l=[],this.h=new Pd,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Sp("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Sp("baseRetryDelayMs",5e3,e),this.$a=Sp("retryDelaySeedMs",1e4,e),this.Ya=Sp("forwardChannelMaxRetries",2,e),this.ra=Sp("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Gf(e&&e.concurrentRequestLimit),this.Ca=new np,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Ap(e){if(Rp(e),3==e.G){var t=e.V++,n=Sf(e.F);Nf(n,"SID",e.J),Nf(n,"RID",t),Nf(n,"TYPE","terminate"),xp(e,n),(t=new nf(e,e.h,t,void 0)).K=2,t.v=Of(Sf(n)),n=!1,Yu.navigator&&Yu.navigator.sendBeacon&&(n=Yu.navigator.sendBeacon(t.v.toString(),"")),!n&&Yu.Image&&((new Image).src=t.v,n=!0),n||(t.g=Hp(t.l,null),t.g.ea(t.v)),t.F=Date.now(),ff(t)}$p(e)}function Cp(e){e.g&&(Up(e),e.g.cancel(),e.g=null)}function Rp(e){Cp(e),e.u&&(Yu.clearTimeout(e.u),e.u=null),Vp(e),e.i.cancel(),e.m&&("number"==typeof e.m&&Yu.clearTimeout(e.m),e.m=null)}function Np(e,t){e.l.push(new Kf(e.Za++,t)),3==e.G&&Op(e)}function Op(e){Xf(e.i)||e.m||(e.m=!0,Ed(e.Ha,e),e.C=0)}function Dp(e,t){var n;n=t?t.m:e.V++;var r=Sf(e.F);Nf(r,"SID",e.J),Nf(r,"RID",n),Nf(r,"AID",e.U),xp(e,r),e.o&&e.s&&Ip(r,e.o,e.s),n=new nf(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Lp(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Jf(e.i,n),cf(n,r,t)}function xp(e,t){e.j&&wf({},(function(e,n){Nf(t,n,e)}))}function Lp(e,t,n){n=Math.min(e.l.length,n);var r=e.j?sh(e.j.Oa,e.j,e):null;e:for(var i=e.l,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,c=0;c<n;c++){var l=i[c].h,u=i[c].g;if(0>(l-=s))s=Math.max(0,i[c].h-100),a=!1;else try{rp(u,o,"req"+l+"_")}catch(h){r&&r(u)}}if(a){r=o.join("&");break e}}return e=e.l.splice(0,n),t.D=e,r}function Pp(e){e.g||e.u||(e.Y=1,Ed(e.Ga,e),e.A=0)}function Mp(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=Hd(sh(e.Ga,e),Bp(e,e.A)),e.A++,!0)}function Up(e){null!=e.B&&(Yu.clearTimeout(e.B),e.B=null)}function Fp(e){e.g=new nf(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Sf(e.oa);Nf(t,"RID","rpc"),Nf(t,"SID",e.J),Nf(t,"CI",e.N?"0":"1"),Nf(t,"AID",e.U),xp(e,t),Nf(t,"TYPE","xmlhttp"),e.o&&e.s&&Ip(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Of(Sf(t)),n.s=null,n.U=!0,lf(n,e)}function Vp(e){null!=e.v&&(Yu.clearTimeout(e.v),e.v=null)}function jp(e,t){var n=null;if(e.g==t){Vp(e),Up(e),e.g=null;var r=2}else{if(!Yf(e.i,t))return;n=t.D,Zf(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;fd(r=Vd(),new zd(r,n,t,i)),Op(e)}else Pp(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(Qf(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=Hd(sh(e.Ha,e,t),Bp(e,e.C)),e.C++,0)))}(e,t)||2==r&&Mp(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:qp(e,5);break;case 4:qp(e,10);break;case 3:qp(e,6);break;default:qp(e,2)}}function Bp(e,t){var n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function qp(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=sh(e.jb,e);n||(n=new If("//www.google.com/images/cleardot.gif"),Yu.location&&"http"==Yu.location.protocol||kf(n,"https"),Of(n)),function(e,t){var n=new Pd;if(Yu.Image){var r=new Image;r.onload=oh(ip,n,r,"TestLoadImage: loaded",!0,t),r.onerror=oh(ip,n,r,"TestLoadImage: error",!1,t),r.onabort=oh(ip,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=oh(ip,n,r,"TestLoadImage: timeout",!1,t),Yu.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else $d(2);e.G=0,e.j&&e.j.va(t),$p(e),Rp(e)}function $p(e){e.G=0,e.I=-1,e.j&&(0==ep(e.i).length&&0==e.l.length||(e.i.i.length=0,fh(e.l),e.l.length=0),e.j.ua())}function zp(e,t,n){var r=function(e){return e instanceof If?Sf(e):new If(e,void 0)}(n);if(""!=r.i)t&&Af(r,t+"."+r.i),Cf(r,r.m);else{var i=Yu.location;r=function(e,t,n,r){var i=new If(null,void 0);return e&&kf(i,e),t&&Af(i,t),n&&Cf(i,n),r&&(i.l=r),i}(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&bh(e.aa,(function(e,t){Nf(r,t,e)})),t=e.D,n=e.sa,t&&n&&Nf(r,t,n),Nf(r,"VER",e.ma),xp(e,r),r}function Hp(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new dp(new sp({ib:!0})):new dp(e.qa)).L=e.H,t}function Kp(){}function Gp(){if(Rh&&!(10<=Number(qh)))throw Error("Environmental error: no available transport.")}function Wp(e,t){dd.call(this),this.g=new kp(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!ph(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ph(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Yp(this)}function Xp(e){Zd.call(this);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Qp(){ef.call(this),this.status=1}function Yp(e){this.g=e}(Wu=dp.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Yd.g(),this.C=this.u?Xd(this.u):Xd(Yd),this.g.onreadystatechange=sh(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void yp(this,s)}e=n||"";var i=new _f(this.headers);r&&wf(r,(function(e,t){i.set(t,e)})),r=function(e){e:{for(var t=mp,n=e.length,r="string"==typeof e?e.split(""):e,i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=Yu.FormData&&e instanceof Yu.FormData,!(0<=uh(gp,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{bp(this),0<this.B&&((this.K=function(e){return Rh&&jh()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=sh(this.pa,this)):this.A=Cd(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){yp(this,s)}},Wu.pa=function(){void 0!==Qu&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,fd(this,"timeout"),this.abort(8))},Wu.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,fd(this,"complete"),fd(this,"abort"),_p(this))},Wu.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_p(this,!0)),dp.Z.M.call(this)},Wu.Fa=function(){this.s||(this.F||this.v||this.l?wp(this):this.cb())},Wu.cb=function(){wp(this)},Wu.ba=function(){try{return 2<Ep(this)?this.g.status:-1}catch(Ah){return-1}},Wu.ga=function(){try{return this.g?this.g.responseText:""}catch(Ah){return""}},Wu.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),hp(t)}},Wu.Da=function(){return this.m},Wu.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Wu=kp.prototype).ma=8,Wu.G=1,Wu.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},Wu.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;var t=new nf(this,this.h,e,void 0),n=this.s;if(this.P&&(n?Ih(n=Eh(n),this.P):n=this.P),null===this.o&&(t.H=n),this.ja)e:{for(var r=0,i=0;i<this.l.length;i++){var s=this.l[i];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(r+=s)){r=i;break e}if(4096===r||i===this.l.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=Lp(this,t,r),Nf(i=Sf(this.F),"RID",e),Nf(i,"CVER",22),this.D&&Nf(i,"X-HTTP-Session-Id",this.D),xp(this,i),this.o&&n&&Ip(i,this.o,n),Jf(this.i,t),this.Ra&&Nf(i,"TYPE","init"),this.ja?(Nf(i,"$req",r),Nf(i,"SID","null"),t.$=!0,cf(t,i,null)):cf(t,i,r),this.G=2}}else 3==this.G&&(e?Dp(this,e):0==this.l.length||Xf(this.i)||Dp(this))},Wu.Ga=function(){if(this.u=null,Fp(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Hd(sh(this.bb,this),e)}},Wu.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,$d(10),Cp(this),Fp(this))},Wu.ab=function(){null!=this.v&&(this.v=null,Cp(this),Mp(this),$d(19))},Wu.jb=function(e){e?(this.h.info("Successfully pinged google.com"),$d(2)):(this.h.info("Failed to ping google.com"),$d(1))},(Wu=Kp.prototype).xa=function(){},Wu.wa=function(){},Wu.va=function(){},Wu.ua=function(){},Wu.Oa=function(){},Gp.prototype.g=function(e,t){return new Wp(e,t)},ah(Wp,dd),Wp.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Ed(sh(e.hb,e,t))),$d(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=zp(e,null,e.W),Op(e)},Wp.prototype.close=function(){Ap(this.g)},Wp.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Np(this.g,t)}else this.v?((t={}).__data__=gd(e),Np(this.g,t)):Np(this.g,e)},Wp.prototype.M=function(){this.g.j=null,delete this.j,Ap(this.g),delete this.g,Wp.Z.M.call(this)},ah(Xp,Zd),ah(Qp,ef),ah(Yp,Kp),Yp.prototype.xa=function(){fd(this.g,"a")},Yp.prototype.wa=function(e){fd(this.g,new Xp(e))},Yp.prototype.va=function(e){fd(this.g,new Qp(e))},Yp.prototype.ua=function(){fd(this.g,"b")},Gp.prototype.createWebChannel=Gp.prototype.g,Wp.prototype.send=Wp.prototype.u,Wp.prototype.open=Wp.prototype.m,Wp.prototype.close=Wp.prototype.close,Kd.NO_ERROR=0,Kd.TIMEOUT=8,Kd.HTTP_ERROR=6,Gd.COMPLETE="complete",Qd.EventType=Jd,Jd.OPEN="a",Jd.CLOSE="b",Jd.ERROR="c",Jd.MESSAGE="d",dd.prototype.listen=dd.prototype.N,dp.prototype.listenOnce=dp.prototype.O,dp.prototype.getLastError=dp.prototype.La,dp.prototype.getLastErrorCode=dp.prototype.Da,dp.prototype.getStatus=dp.prototype.ba,dp.prototype.getResponseJson=dp.prototype.Qa,dp.prototype.getResponseText=dp.prototype.ga,dp.prototype.send=dp.prototype.ea;var Jp=Kd,Zp=Gd,eg=Ud,tg=10,ng=11,rg=sp,ig=Qd,sg=dp;
/**
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
 */
let og="8.8.1";
/**
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
 */class ag{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.t(e),this.i=e=>t.writeSequenceNumber(e))}t(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.i&&this.i(e),e}}ag.o=-1;
/**
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
 */
const cg={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class lg extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */const ug=new sa("@firebase/firestore");function hg(){return ug.logLevel}function dg(e,...t){if(ug.logLevel<=Yo.DEBUG){const n=t.map(gg);ug.debug(`Firestore (${og}): ${e}`,...n)}}function fg(e,...t){if(ug.logLevel<=Yo.ERROR){const n=t.map(gg);ug.error(`Firestore (${og}): ${e}`,...n)}}function pg(e,...t){if(ug.logLevel<=Yo.WARN){const n=t.map(gg);ug.warn(`Firestore (${og}): ${e}`,...n)}}function gg(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(n){return e}var t}
/**
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
 */function mg(e="Unexpected state"){const t=`FIRESTORE (${og}) INTERNAL ASSERTION FAILED: `+e;throw fg(t),new Error(t)}function yg(e,t){e||mg()}function vg(e,t){return e}
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
 */function wg(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class _g{static u(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=wg(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function bg(e,t){return e<t?-1:e>t?1:0}function Eg(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
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
 */class Tg{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new lg(cg.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new lg(cg.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new lg(cg.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new lg(cg.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Tg.fromMillis(Date.now())}static fromDate(e){return Tg.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Tg(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?bg(this.nanoseconds,e.nanoseconds):bg(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class Ig{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ig(e)}static min(){return new Ig(new Tg(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */function Sg(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function kg(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ag(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */class Cg{constructor(e,t,n){void 0===t?t=0:t>e.length&&mg(),void 0===n?n=e.length-t:n>e.length-t&&mg(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Cg.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Cg?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Rg extends Cg{construct(e,t,n){return new Rg(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new lg(cg.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Rg(t)}static emptyPath(){return new Rg([])}}const Ng=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Og extends Cg{construct(e,t,n){return new Og(e,t,n)}static isValidIdentifier(e){return Ng.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Og.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Og(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new lg(cg.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new lg(cg.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new lg(cg.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new lg(cg.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Og(t)}static emptyPath(){return new Og([])}}
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
 */class Dg{constructor(e){this.fields=e,e.sort(Og.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Eg(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */class xg{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new xg(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new xg(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return bg(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xg.EMPTY_BYTE_STRING=new xg("");const Lg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pg(e){if(yg(!!e),"string"==typeof e){let t=0;const n=Lg.exec(e);if(yg(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Mg(e.seconds),nanos:Mg(e.nanos)}}function Mg(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ug(e){return"string"==typeof e?xg.fromBase64String(e):xg.fromUint8Array(e)}
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
 */function Fg(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Vg(e){const t=e.mapValue.fields.__previous_value__;return Fg(t)?Vg(t):t}function jg(e){const t=Pg(e.mapValue.fields.__local_write_time__.timestampValue);return new Tg(t.seconds,t.nanos)}
/**
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
 */function Bg(e){return null==e}function qg(e){return 0===e&&1/e==-1/0}
/**
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
 */
class $g{constructor(e){this.path=e}static fromPath(e){return new $g(Rg.fromString(e))}static fromName(e){return new $g(Rg.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===Rg.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Rg.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $g(new Rg(e.slice()))}}
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
 */function zg(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Fg(e)?4:10:mg()}function Hg(e,t){const n=zg(e);if(n!==zg(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return jg(e).isEqual(jg(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Pg(e.timestampValue),r=Pg(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Ug(e.bytesValue).isEqual(Ug(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Mg(e.geoPointValue.latitude)===Mg(t.geoPointValue.latitude)&&Mg(e.geoPointValue.longitude)===Mg(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Mg(e.integerValue)===Mg(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Mg(e.doubleValue),r=Mg(t.doubleValue);return n===r?qg(n)===qg(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Eg(e.arrayValue.values||[],t.arrayValue.values||[],Hg);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Sg(n)!==Sg(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Hg(n[i],r[i])))return!1;return!0}(e,t);default:return mg()}var r}function Kg(e,t){return void 0!==(e.values||[]).find((e=>Hg(e,t)))}function Gg(e,t){const n=zg(e),r=zg(t);if(n!==r)return bg(n,r);switch(n){case 0:return 0;case 1:return bg(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Mg(e.integerValue||e.doubleValue),r=Mg(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Wg(e.timestampValue,t.timestampValue);case 4:return Wg(jg(e),jg(t));case 5:return bg(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ug(e),r=Ug(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=bg(n[i],r[i]);if(0!==e)return e}return bg(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=bg(Mg(e.latitude),Mg(t.latitude));return 0!==n?n:bg(Mg(e.longitude),Mg(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Gg(n[i],r[i]);if(e)return e}return bg(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=bg(r[o],s[o]);if(0!==e)return e;const t=Gg(n[r[o]],i[s[o]]);if(0!==t)return t}return bg(r.length,s.length)}(e.mapValue,t.mapValue);default:throw mg()}}function Wg(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return bg(e,t);const n=Pg(e),r=Pg(t),i=bg(n.seconds,r.seconds);return 0!==i?i:bg(n.nanos,r.nanos)}function Xg(e){return Qg(e)}function Qg(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Pg(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ug(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,$g.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Qg(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Qg(e.fields[i])}`;return n+"}"}(e.mapValue):mg();var t,n}function Yg(e){return!!e&&"integerValue"in e}function Jg(e){return!!e&&"arrayValue"in e}function Zg(e){return!!e&&"nullValue"in e}function em(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function tm(e){return!!e&&"mapValue"in e}function nm(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return kg(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=nm(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=nm(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
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
 */class rm{constructor(e){this.value=e}static empty(){return new rm({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!tm(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=nm(t)}setAll(e){let t=Og.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=nm(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());tm(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Hg(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];tm(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){kg(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new rm(nm(this.value))}}function im(e){const t=[];return kg(e.fields,((e,n)=>{const r=new Og([e]);if(tm(n)){const e=im(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Dg(t)
/**
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
 */}class sm{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new sm(e,0,Ig.min(),rm.empty(),0)}static newFoundDocument(e,t,n){return new sm(e,1,t,n,0)}static newNoDocument(e,t){return new sm(e,2,t,rm.empty(),0)}static newUnknownDocument(e,t){return new sm(e,3,t,rm.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rm.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rm.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof sm&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new sm(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class om{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.h=null}}function am(e,t=null,n=[],r=[],i=null,s=null,o=null){return new om(e,t,n,r,i,s,o)}function cm(e){const t=vg(e);if(null===t.h){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+Xg(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Bg(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=bm(t.startAt)),t.endAt&&(e+="|ub:",e+=bm(t.endAt)),t.h=e}return t.h}function lm(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Tm(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Hg(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Sm(e.startAt,t.startAt)&&Sm(e.endAt,t.endAt)}function um(e){return $g.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class hm extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.l(e,t,n):new dm(e,t,n):"array-contains"===t?new mm(e,n):"in"===t?new ym(e,n):"not-in"===t?new vm(e,n):"array-contains-any"===t?new wm(e,n):new hm(e,t,n)}static l(e,t,n){return"in"===t?new fm(e,n):new pm(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.m(Gg(t,this.value)):null!==t&&zg(this.value)===zg(t)&&this.m(Gg(t,this.value))}m(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return mg()}}g(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class dm extends hm{constructor(e,t,n){super(e,t,n),this.key=$g.fromName(n.referenceValue)}matches(e){const t=$g.comparator(e.key,this.key);return this.m(t)}}class fm extends hm{constructor(e,t){super(e,"in",t),this.keys=gm("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class pm extends hm{constructor(e,t){super(e,"not-in",t),this.keys=gm("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function gm(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>$g.fromName(e.referenceValue)))}class mm extends hm{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jg(t)&&Kg(t.arrayValue,this.value)}}class ym extends hm{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Kg(this.value.arrayValue,t)}}class vm extends hm{constructor(e,t){super(e,"not-in",t)}matches(e){if(Kg(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Kg(this.value.arrayValue,t)}}class wm extends hm{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jg(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Kg(this.value.arrayValue,e)))}}class _m{constructor(e,t){this.position=e,this.before=t}}function bm(e){return`${e.before?"b":"a"}:${e.position.map((e=>Xg(e))).join(",")}`}class Em{constructor(e,t="asc"){this.field=e,this.dir=t}}function Tm(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Im(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?$g.comparator($g.fromName(o.referenceValue),n.key):Gg(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function Sm(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Hg(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class km{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.p=null,this.T=null,this.startAt,this.endAt}}function Am(e){return new km(e)}function Cm(e){return!Bg(e.limit)&&"F"===e.limitType}function Rm(e){return!Bg(e.limit)&&"L"===e.limitType}function Nm(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Om(e){for(const t of e.filters)if(t.g())return t.field;return null}function Dm(e){const t=vg(e);if(null===t.p){t.p=[];const e=Om(t),n=Nm(t);if(null!==e&&null===n)e.isKeyField()||t.p.push(new Em(e)),t.p.push(new Em(Og.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.p.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.p.push(new Em(Og.keyField(),e))}}}return t.p}function xm(e){const t=vg(e);if(!t.T)if("F"===t.limitType)t.T=am(t.path,t.collectionGroup,Dm(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Dm(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Em(i.field,t))}const n=t.endAt?new _m(t.endAt.position,!t.endAt.before):null,r=t.startAt?new _m(t.startAt.position,!t.startAt.before):null;t.T=am(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.T}function Lm(e,t){return lm(xm(e),xm(t))&&e.limitType===t.limitType}function Pm(e){return`${cm(xm(e))}|lt:${e.limitType}`}function Mm(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Xg(t.value)}`;var t})).join(", ")}]`),Bg(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: "+bm(e.startAt)),e.endAt&&(t+=", endAt: "+bm(e.endAt)),`Target(${t})`}(xm(e))}; limitType=${e.limitType})`}function Um(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):$g.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!Im(n.startAt,Dm(n),r)||n.endAt&&Im(n.endAt,Dm(n),r)));var n,r}function Fm(e){return(t,n)=>{let r=!1;for(const i of Dm(e)){const e=Vm(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Vm(e,t,n){const r=e.field.isKeyField()?$g.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Gg(r,i):mg()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return mg()}}
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
 */function jm(e,t){if(e.I){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qg(t)?"-0":t}}function Bm(e){return{integerValue:""+e}}function qm(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!qg(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?Bm(t):jm(e,t)}
/**
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
 */class $m{constructor(){this._=void 0}}function zm(e,t,n){return e instanceof Gm?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Wm?Xm(e,t):e instanceof Qm?Ym(e,t):function(e,t){const n=Km(e,t),r=Zm(n)+Zm(e.A);return Yg(n)&&Yg(e.A)?Bm(r):jm(e.R,r)}(e,t)}function Hm(e,t,n){return e instanceof Wm?Xm(e,t):e instanceof Qm?Ym(e,t):n}function Km(e,t){return e instanceof Jm?Yg(r=t)||(n=r)&&"doubleValue"in n?t:{integerValue:0}:null;var n,r}class Gm extends $m{}class Wm extends $m{constructor(e){super(),this.elements=e}}function Xm(e,t){const n=ey(t);for(const r of e.elements)n.some((e=>Hg(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Qm extends $m{constructor(e){super(),this.elements=e}}function Ym(e,t){let n=ey(t);for(const r of e.elements)n=n.filter((e=>!Hg(e,r)));return{arrayValue:{values:n}}}class Jm extends $m{constructor(e,t){super(),this.R=e,this.A=t}}function Zm(e){return Mg(e.integerValue||e.doubleValue)}function ey(e){return Jg(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */class ty{constructor(e,t){this.field=e,this.transform=t}}class ny{constructor(e,t){this.version=e,this.transformResults=t}}class ry{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ry}static exists(e){return new ry(void 0,e)}static updateTime(e){return new ry(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function iy(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class sy{}function oy(e,t,n){var r;e instanceof hy?function(e,t,n){const r=e.value.clone(),i=py(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof dy?function(e,t,n){if(!iy(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=py(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(fy(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function ay(e,t,n){var r;e instanceof hy?function(e,t,n){if(!iy(e.precondition,t))return;const r=e.value.clone(),i=gy(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(uy(t),r).setHasLocalMutations()}(e,t,n):e instanceof dy?function(e,t,n){if(!iy(e.precondition,t))return;const r=gy(e.fieldTransforms,n,t),i=t.data;i.setAll(fy(e)),i.setAll(r),t.convertToFoundDocument(uy(t),i).setHasLocalMutations()}(e,t,n):(r=t,iy(e.precondition,r)&&r.convertToNoDocument(Ig.min()))}function cy(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Km(r.transform,e||null);null!=i&&(null==n&&(n=rm.empty()),n.set(r.field,i))}return n||null}function ly(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Eg(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Wm&&r instanceof Wm||n instanceof Qm&&r instanceof Qm?Eg(n.elements,r.elements,Hg):n instanceof Jm&&r instanceof Jm?Hg(n.A,r.A):n instanceof Gm&&r instanceof Gm);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}function uy(e){return e.isFoundDocument()?e.version:Ig.min()}class hy extends sy{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class dy extends sy{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function fy(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function py(e,t,n){const r=new Map;yg(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Hm(o,a,n[i]))}return r}function gy(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,zm(e,s,t))}return r}class my extends sy{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class yy extends sy{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
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
 */class vy{constructor(e){this.count=e}}
/**
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
 */var wy,_y;function by(e){if(void 0===e)return fg("GRPC error has no .code"),cg.UNKNOWN;switch(e){case wy.OK:return cg.OK;case wy.CANCELLED:return cg.CANCELLED;case wy.UNKNOWN:return cg.UNKNOWN;case wy.DEADLINE_EXCEEDED:return cg.DEADLINE_EXCEEDED;case wy.RESOURCE_EXHAUSTED:return cg.RESOURCE_EXHAUSTED;case wy.INTERNAL:return cg.INTERNAL;case wy.UNAVAILABLE:return cg.UNAVAILABLE;case wy.UNAUTHENTICATED:return cg.UNAUTHENTICATED;case wy.INVALID_ARGUMENT:return cg.INVALID_ARGUMENT;case wy.NOT_FOUND:return cg.NOT_FOUND;case wy.ALREADY_EXISTS:return cg.ALREADY_EXISTS;case wy.PERMISSION_DENIED:return cg.PERMISSION_DENIED;case wy.FAILED_PRECONDITION:return cg.FAILED_PRECONDITION;case wy.ABORTED:return cg.ABORTED;case wy.OUT_OF_RANGE:return cg.OUT_OF_RANGE;case wy.UNIMPLEMENTED:return cg.UNIMPLEMENTED;case wy.DATA_LOSS:return cg.DATA_LOSS;default:return mg()}}(_y=wy||(wy={}))[_y.OK=0]="OK",_y[_y.CANCELLED=1]="CANCELLED",_y[_y.UNKNOWN=2]="UNKNOWN",_y[_y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_y[_y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_y[_y.NOT_FOUND=5]="NOT_FOUND",_y[_y.ALREADY_EXISTS=6]="ALREADY_EXISTS",_y[_y.PERMISSION_DENIED=7]="PERMISSION_DENIED",_y[_y.UNAUTHENTICATED=16]="UNAUTHENTICATED",_y[_y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_y[_y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_y[_y.ABORTED=10]="ABORTED",_y[_y.OUT_OF_RANGE=11]="OUT_OF_RANGE",_y[_y.UNIMPLEMENTED=12]="UNIMPLEMENTED",_y[_y.INTERNAL=13]="INTERNAL",_y[_y.UNAVAILABLE=14]="UNAVAILABLE",_y[_y.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class Ey{constructor(e,t){this.comparator=e,this.root=t||Iy.EMPTY}insert(e,t){return new Ey(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Iy.BLACK,null,null))}remove(e){return new Ey(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Iy.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ty(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ty(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ty(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ty(this.root,e,this.comparator,!0)}}class Ty{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Iy{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Iy.RED,this.left=null!=r?r:Iy.EMPTY,this.right=null!=i?i:Iy.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Iy(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Iy.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Iy.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Iy.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Iy.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw mg();if(this.right.isRed())throw mg();const e=this.left.check();if(e!==this.right.check())throw mg();return e+(this.isRed()?0:1)}}Iy.EMPTY=null,Iy.RED=!0,Iy.BLACK=!1,Iy.EMPTY=new class{constructor(){this.size=0}get key(){throw mg()}get value(){throw mg()}get color(){throw mg()}get left(){throw mg()}get right(){throw mg()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Iy(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Sy{constructor(e){this.comparator=e,this.data=new Ey(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ky(this.data.getIterator())}getIteratorFrom(e){return new ky(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Sy))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Sy(this.comparator);return t.data=e,t}}class ky{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */const Ay=new Ey($g.comparator);function Cy(){return Ay}const Ry=new Ey($g.comparator);function Ny(){return Ry}const Oy=new Ey($g.comparator);const Dy=new Sy($g.comparator);function xy(...e){let t=Dy;for(const n of e)t=t.add(n);return t}const Ly=new Sy(bg);function Py(){return Ly}
/**
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
 */class My{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Uy.createSynthesizedTargetChangeForCurrentChange(e,t)),new My(Ig.min(),n,Py(),Cy(),xy())}}class Uy{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Uy(xg.EMPTY_BYTE_STRING,t,xy(),xy(),xy())}}
/**
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
 */class Fy{constructor(e,t,n,r){this.P=e,this.removedTargetIds=t,this.key=n,this.v=r}}class Vy{constructor(e,t){this.targetId=e,this.V=t}}class jy{constructor(e,t,n=xg.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class By{constructor(){this.S=0,this.D=zy(),this.C=xg.EMPTY_BYTE_STRING,this.N=!1,this.k=!0}get current(){return this.N}get resumeToken(){return this.C}get $(){return 0!==this.S}get O(){return this.k}F(e){e.approximateByteSize()>0&&(this.k=!0,this.C=e)}M(){let e=xy(),t=xy(),n=xy();return this.D.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:mg()}})),new Uy(this.C,this.N,e,t,n)}L(){this.k=!1,this.D=zy()}B(e,t){this.k=!0,this.D=this.D.insert(e,t)}U(e){this.k=!0,this.D=this.D.remove(e)}q(){this.S+=1}K(){this.S-=1}j(){this.k=!0,this.N=!0}}class qy{constructor(e){this.W=e,this.G=new Map,this.H=Cy(),this.J=$y(),this.Y=new Sy(bg)}X(e){for(const t of e.P)e.v&&e.v.isFoundDocument()?this.Z(t,e.v):this.tt(t,e.key,e.v);for(const t of e.removedTargetIds)this.tt(t,e.key,e.v)}et(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.st(t)&&n.F(e.resumeToken);break;case 1:n.K(),n.$||n.L(),n.F(e.resumeToken);break;case 2:n.K(),n.$||this.removeTarget(t);break;case 3:this.st(t)&&(n.j(),n.F(e.resumeToken));break;case 4:this.st(t)&&(this.it(t),n.F(e.resumeToken));break;default:mg()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.G.forEach(((e,n)=>{this.st(n)&&t(n)}))}rt(e){const t=e.targetId,n=e.V.count,r=this.ot(t);if(r){const e=r.target;if(um(e))if(0===n){const n=new $g(e.path);this.tt(t,n,sm.newNoDocument(n,Ig.min()))}else yg(1===n);else this.ct(t)!==n&&(this.it(t),this.Y=this.Y.add(t))}}ut(e){const t=new Map;this.G.forEach(((n,r)=>{const i=this.ot(r);if(i){if(n.current&&um(i.target)){const t=new $g(i.target.path);null!==this.H.get(t)||this.at(r,t)||this.tt(r,t,sm.newNoDocument(t,e))}n.O&&(t.set(r,n.M()),n.L())}}));let n=xy();this.J.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.ot(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new My(e,t,this.Y,this.H,n);return this.H=Cy(),this.J=$y(),this.Y=new Sy(bg),r}Z(e,t){if(!this.st(e))return;const n=this.at(e,t.key)?2:0;this.nt(e).B(t.key,n),this.H=this.H.insert(t.key,t),this.J=this.J.insert(t.key,this.ht(t.key).add(e))}tt(e,t,n){if(!this.st(e))return;const r=this.nt(e);this.at(e,t)?r.B(t,1):r.U(t),this.J=this.J.insert(t,this.ht(t).delete(e)),n&&(this.H=this.H.insert(t,n))}removeTarget(e){this.G.delete(e)}ct(e){const t=this.nt(e).M();return this.W.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}q(e){this.nt(e).q()}nt(e){let t=this.G.get(e);return t||(t=new By,this.G.set(e,t)),t}ht(e){let t=this.J.get(e);return t||(t=new Sy(bg),this.J=this.J.insert(e,t)),t}st(e){const t=null!==this.ot(e);return t||dg("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.G.get(e);return t&&t.$?null:this.W.lt(e)}it(e){this.G.set(e,new By),this.W.getRemoteKeysForTarget(e).forEach((t=>{this.tt(e,t,null)}))}at(e,t){return this.W.getRemoteKeysForTarget(e).has(t)}}function $y(){return new Ey($g.comparator)}function zy(){return new Ey($g.comparator)}
/**
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
 */const Hy={asc:"ASCENDING",desc:"DESCENDING"},Ky={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Gy{constructor(e,t){this.databaseId=e,this.I=t}}function Wy(e,t){return e.I?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Xy(e,t){return e.I?t.toBase64():t.toUint8Array()}function Qy(e,t){return Wy(e,t.toTimestamp())}function Yy(e){return yg(!!e),Ig.fromTimestamp(function(e){const t=Pg(e);return new Tg(t.seconds,t.nanos)}(e))}function Jy(e,t){return(n=e,new Rg(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Zy(e){const t=Rg.fromString(e);return yg(wv(t)),t}function ev(e,t){return Jy(e.databaseId,t.path)}function tv(e,t){const n=Zy(t);if(n.get(1)!==e.databaseId.projectId)throw new lg(cg.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new lg(cg.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new $g(iv(n))}function nv(e,t){return Jy(e.databaseId,t)}function rv(e){return new Rg(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function iv(e){return yg(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function sv(e,t,n){return{name:ev(e,t),fields:n.value.mapValue.fields}}function ov(e,t){return{documents:[nv(e,t.path)]}}function av(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=nv(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=nv(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(em(e.value))return{unaryFilter:{field:pv(e.field),op:"IS_NAN"}};if(Zg(e.value))return{unaryFilter:{field:pv(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(em(e.value))return{unaryFilter:{field:pv(e.field),op:"IS_NOT_NAN"}};if(Zg(e.value))return{unaryFilter:{field:pv(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pv(e.field),op:fv(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:pv((t=e).field),direction:dv(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=e,c=t.limit,a.I||Bg(c)?c:{value:c});var a,c;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=uv(t.startAt)),t.endAt&&(n.structuredQuery.endAt=uv(t.endAt)),n}function cv(e){let t=function(e){const t=Zy(e);return 4===t.length?Rg.emptyPath():iv(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){yg(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=lv(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new Em(gv((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Bg(t)?null:t}(n.limit));let c=null;n.startAt&&(c=hv(n.startAt));let l=null;return n.endAt&&(l=hv(n.endAt)),function(e,t,n,r,i,s,o,a){return new km(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",c,l)}function lv(e){return e?void 0!==e.unaryFilter?[yv(e)]:void 0!==e.fieldFilter?[mv(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>lv(e))).reduce(((e,t)=>e.concat(t))):mg():[]}function uv(e){return{before:e.before,values:e.position}}function hv(e){const t=!!e.before,n=e.values||[];return new _m(n,t)}function dv(e){return Hy[e]}function fv(e){return Ky[e]}function pv(e){return{fieldPath:e.canonicalString()}}function gv(e){return Og.fromServerFormat(e.fieldPath)}function mv(e){return hm.create(gv(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return mg()}}(e.fieldFilter.op),e.fieldFilter.value)}function yv(e){switch(e.unaryFilter.op){case"IS_NAN":const t=gv(e.unaryFilter.field);return hm.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=gv(e.unaryFilter.field);return hm.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=gv(e.unaryFilter.field);return hm.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=gv(e.unaryFilter.field);return hm.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return mg()}}function vv(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function wv(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */
class _v{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */class bv{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&mg(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new bv(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof bv?t:bv.resolve(t)}catch(t){return bv.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):bv.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):bv.reject(t)}static resolve(e){return new bv(((t,n)=>{t(e)}))}static reject(e){return new bv(((t,n)=>{n(e)}))}static waitFor(e){return new bv(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=bv.resolve(!1);for(const n of e)t=t.next((e=>e?bv.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}function Ev(e){return"IndexedDbTransactionError"===e.name}
/**
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
 */class Tv{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&oy(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&ay(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&ay(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(Ig.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),xy())}isEqual(e){return this.batchId===e.batchId&&Eg(this.mutations,e.mutations,((e,t)=>ly(e,t)))&&Eg(this.baseMutations,e.baseMutations,((e,t)=>ly(e,t)))}}class Iv{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){yg(e.mutations.length===n.length);let r=Oy;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Iv(e,t,n,r)}}
/**
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
 */class Sv{constructor(e,t,n,r,i=Ig.min(),s=Ig.min(),o=xg.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Sv(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Sv(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Sv(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
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
 */class kv{constructor(e){this.Lt=e}}function Av(e){const t=cv({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?function(e,t,n){return new km(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}(t,t.limit,"L"):t}
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
 */class Cv{constructor(){this.Bt=new Rv}addToCollectionParentIndex(e,t){return this.Bt.add(t),bv.resolve()}getCollectionParents(e,t){return bv.resolve(this.Bt.getEntries(t))}}class Rv{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Sy(Rg.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Sy(Rg.comparator)).toArray()}}
/**
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
 */class Nv{constructor(e){this.Ht=e}next(){return this.Ht+=2,this.Ht}static Jt(){return new Nv(0)}static Yt(){return new Nv(-1)}}
/**
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
 */async function Ov(e){if(e.code!==cg.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;dg("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Dv{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){kg(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Ag(this.inner)}}
/**
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
 */
/**
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
 */
class xv{constructor(e,t,n){this.qe=e,this._n=t,this.qt=n}mn(e,t){return this._n.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.gn(e,t,n)))}gn(e,t,n){return this.qe.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}yn(e,t){e.forEach(((e,n)=>{for(const r of t)r.applyToLocalView(n)}))}pn(e,t){return this.qe.getEntries(e,t).next((t=>this.En(e,t).next((()=>t))))}En(e,t){return this._n.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.yn(t,e)))}getDocumentsMatchingQuery(e,t,n){return r=t,$g.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Tn(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.In(e,t,n):this.An(e,t,n);var r}Tn(e,t){return this.mn(e,new $g(t)).next((e=>{let t=Ny();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}In(e,t,n){const r=t.collectionGroup;let i=Ny();return this.qt.getCollectionParents(e,r).next((s=>bv.forEach(s,(s=>{const o=(a=t,c=s.child(r),new km(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.An(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}An(e,t,n){let r,i;return this.qe.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this._n.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(i=t,this.Rn(e,i,r).next((e=>{r=e;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=sm.newInvalidDocument(n),r=r.insert(n,i)),ay(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{Um(t,n)||(r=r.remove(e))})),r)))}Rn(e,t,n){let r=xy();for(const s of t)for(const e of s.mutations)e instanceof dy&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.qe.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))})),i)))}}
/**
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
 */class Lv{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Pn=n,this.bn=r}static vn(e,t){let n=xy(),r=xy();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Lv(e,t.fromCache,n,r)}}
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
 */class Pv{Vn(e){this.Sn=e}getDocumentsMatchingQuery(e,t,n,r){return 0===(i=t).filters.length&&null===i.limit&&null==i.startAt&&null==i.endAt&&(0===i.explicitOrderBy.length||1===i.explicitOrderBy.length&&i.explicitOrderBy[0].field.isKeyField())||n.isEqual(Ig.min())?this.Dn(e,t):this.Sn.pn(e,r).next((i=>{const s=this.Cn(t,i);return(Cm(t)||Rm(t))&&this.Nn(t.limitType,s,r,n)?this.Dn(e,t):(hg()<=Yo.DEBUG&&dg("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Mm(t)),this.Sn.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}));var i}Cn(e,t){let n=new Sy(Fm(e));return t.forEach(((t,r)=>{Um(e,r)&&(n=n.add(r))})),n}Nn(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Dn(e,t){return hg()<=Yo.DEBUG&&dg("QueryEngine","Using full collection scan to execute query:",Mm(t)),this.Sn.getDocumentsMatchingQuery(e,t,Ig.min())}}
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
 */class Mv{constructor(e,t,n,r){this.persistence=e,this.xn=t,this.R=r,this.kn=new Ey(bg),this.$n=new Dv((e=>cm(e)),lm),this.On=Ig.min(),this._n=e.getMutationQueue(n),this.Fn=e.getRemoteDocumentCache(),this.Ue=e.getTargetCache(),this.Mn=new xv(this.Fn,this._n,this.persistence.getIndexManager()),this.Ke=e.getBundleCache(),this.xn.Vn(this.Mn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.kn)))}}async function Uv(e,t){const n=vg(e);let r=n._n,i=n.Mn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n._n.getAllMutationBatches(e).next((o=>(s=o,r=n.persistence.getMutationQueue(t),i=new xv(n.Fn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=xy();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.pn(e,o).next((e=>({Ln:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n._n=r,n.Mn=i,n.xn.Vn(n.Mn),s}function Fv(e){const t=vg(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ue.getLastRemoteSnapshotVersion(e)))}function Vv(e,t){const n=vg(e),r=t.snapshotVersion;let i=n.kn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Fn.newChangeBuffer({trackRemovals:!0});i=n.kn;const o=[];t.targetChanges.forEach(((t,s)=>{const a=i.get(s);if(!a)return;o.push(n.Ue.removeMatchingKeys(e,t.removedDocuments,s).next((()=>n.Ue.addMatchingKeys(e,t.addedDocuments,s))));const c=t.resumeToken;if(c.approximateByteSize()>0){const d=a.withResumeToken(c,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(s,d),l=a,h=t,yg((u=d).resumeToken.approximateByteSize()>0),(0===l.resumeToken.approximateByteSize()||u.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&o.push(n.Ue.updateTargetData(e,d))}var l,u,h}));let a=Cy();if(t.documentUpdates.forEach(((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n,r,i){let s=xy();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=Cy();return n.forEach(((n,o)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(Ig.min())?(t.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),s=s.insert(n,o)):dg("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(e,s,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(Ig.min())){const t=n.Ue.getLastRemoteSnapshotVersion(e).next((t=>n.Ue.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return bv.waitFor(o).next((()=>s.apply(e))).next((()=>n.Mn.En(e,a))).next((()=>a))})).then((e=>(n.kn=i,e)))}function jv(e,t){const n=vg(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n._n.getNextMutationBatchAfterBatchId(e,t))))}async function Bv(e,t,n){const r=vg(e),i=r.kn.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(o){if(!Ev(o))throw o;dg("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.kn=r.kn.remove(t),r.$n.delete(i.target)}function qv(e,t,n){const r=vg(e);let i=Ig.min(),s=xy();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=vg(e),i=r.$n.get(n);return void 0!==i?bv.resolve(r.kn.get(i)):r.Ue.getTargetData(t,n)}(r,e,xm(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ue.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.xn.getDocumentsMatchingQuery(e,t,n?i:Ig.min(),n?s:xy()))).next((e=>({documents:e,Bn:s})))))}
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
 */class $v{constructor(e){this.R=e,this.jn=new Map,this.Qn=new Map}getBundleMetadata(e,t){return bv.resolve(this.jn.get(t))}saveBundleMetadata(e,t){var n;return this.jn.set(t.id,{id:(n=t).id,version:n.version,createTime:Yy(n.createTime)}),bv.resolve()}getNamedQuery(e,t){return bv.resolve(this.Qn.get(t))}saveNamedQuery(e,t){return this.Qn.set(t.name,{name:(n=t).name,query:Av(n.bundledQuery),readTime:Yy(n.readTime)}),bv.resolve();var n}}
/**
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
 */class zv{constructor(){this.Wn=new Sy(Hv.Gn),this.zn=new Sy(Hv.Hn)}isEmpty(){return this.Wn.isEmpty()}addReference(e,t){const n=new Hv(e,t);this.Wn=this.Wn.add(n),this.zn=this.zn.add(n)}Jn(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Yn(new Hv(e,t))}Xn(e,t){e.forEach((e=>this.removeReference(e,t)))}Zn(e){const t=new $g(new Rg([])),n=new Hv(t,e),r=new Hv(t,e+1),i=[];return this.zn.forEachInRange([n,r],(e=>{this.Yn(e),i.push(e.key)})),i}ts(){this.Wn.forEach((e=>this.Yn(e)))}Yn(e){this.Wn=this.Wn.delete(e),this.zn=this.zn.delete(e)}es(e){const t=new $g(new Rg([])),n=new Hv(t,e),r=new Hv(t,e+1);let i=xy();return this.zn.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Hv(e,0),n=this.Wn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Hv{constructor(e,t){this.key=e,this.ns=t}static Gn(e,t){return $g.comparator(e.key,t.key)||bg(e.ns,t.ns)}static Hn(e,t){return bg(e.ns,t.ns)||$g.comparator(e.key,t.key)}}
/**
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
 */class Kv{constructor(e,t){this.qt=e,this.referenceDelegate=t,this._n=[],this.ss=1,this.rs=new Sy(Hv.Gn)}checkEmpty(e){return bv.resolve(0===this._n.length)}addMutationBatch(e,t,n,r){const i=this.ss;this.ss++,this._n.length>0&&this._n[this._n.length-1];const s=new Tv(i,t,n,r);this._n.push(s);for(const o of r)this.rs=this.rs.add(new Hv(o.key,i)),this.qt.addToCollectionParentIndex(e,o.key.path.popLast());return bv.resolve(s)}lookupMutationBatch(e,t){return bv.resolve(this.os(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.cs(n),i=r<0?0:r;return bv.resolve(this._n.length>i?this._n[i]:null)}getHighestUnacknowledgedBatchId(){return bv.resolve(0===this._n.length?-1:this.ss-1)}getAllMutationBatches(e){return bv.resolve(this._n.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Hv(t,0),r=new Hv(t,Number.POSITIVE_INFINITY),i=[];return this.rs.forEachInRange([n,r],(e=>{const t=this.os(e.ns);i.push(t)})),bv.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Sy(bg);return t.forEach((e=>{const t=new Hv(e,0),r=new Hv(e,Number.POSITIVE_INFINITY);this.rs.forEachInRange([t,r],(e=>{n=n.add(e.ns)}))})),bv.resolve(this.us(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;$g.isDocumentKey(i)||(i=i.child(""));const s=new Hv(new $g(i),0);let o=new Sy(bg);return this.rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ns)),!0)}),s),bv.resolve(this.us(o))}us(e){const t=[];return e.forEach((e=>{const n=this.os(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){yg(0===this.hs(t.batchId,"removed")),this._n.shift();let n=this.rs;return bv.forEach(t.mutations,(r=>{const i=new Hv(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.rs=n}))}Gt(e){}containsKey(e,t){const n=new Hv(t,0),r=this.rs.firstAfterOrEqual(n);return bv.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this._n.length,bv.resolve()}hs(e,t){return this.cs(e)}cs(e){return 0===this._n.length?0:e-this._n[0].batchId}os(e){const t=this.cs(e);return t<0||t>=this._n.length?null:this._n[t]}}
/**
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
 */class Gv{constructor(e,t){this.qt=e,this.ls=t,this.docs=new Ey($g.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ls(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.qt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return bv.resolve(n?n.document.clone():sm.newInvalidDocument(t))}getEntries(e,t){let n=Cy();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():sm.newInvalidDocument(e))})),bv.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=Cy();const i=new $g(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||Um(t,i)&&(r=r.insert(i.key,i.clone()))}return bv.resolve(r)}fs(e,t){return bv.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Wv(this)}getSize(e){return bv.resolve(this.size)}}class Wv extends class{constructor(){this.changes=new Dv((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:Ig.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:sm.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?bv.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}{constructor(e){super(),this.Ie=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.Ie.addEntry(e,r.document,this.getReadTime(n))):this.Ie.removeEntry(n)})),bv.waitFor(t)}getFromCache(e,t){return this.Ie.getEntry(e,t)}getAllFromCache(e,t){return this.Ie.getEntries(e,t)}}
/**
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
 */class Xv{constructor(e){this.persistence=e,this.ds=new Dv((e=>cm(e)),lm),this.lastRemoteSnapshotVersion=Ig.min(),this.highestTargetId=0,this.ws=0,this._s=new zv,this.targetCount=0,this.gs=Nv.Jt()}forEachTarget(e,t){return this.ds.forEach(((e,n)=>t(n))),bv.resolve()}getLastRemoteSnapshotVersion(e){return bv.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return bv.resolve(this.ws)}allocateTargetId(e){return this.highestTargetId=this.gs.next(),bv.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ws&&(this.ws=t),bv.resolve()}te(e){this.ds.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.gs=new Nv(t),this.highestTargetId=t),e.sequenceNumber>this.ws&&(this.ws=e.sequenceNumber)}addTargetData(e,t){return this.te(t),this.targetCount+=1,bv.resolve()}updateTargetData(e,t){return this.te(t),bv.resolve()}removeTargetData(e,t){return this.ds.delete(t.target),this._s.Zn(t.targetId),this.targetCount-=1,bv.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.ds.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.ds.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),bv.waitFor(i).next((()=>r))}getTargetCount(e){return bv.resolve(this.targetCount)}getTargetData(e,t){const n=this.ds.get(t)||null;return bv.resolve(n)}addMatchingKeys(e,t,n){return this._s.Jn(t,n),bv.resolve()}removeMatchingKeys(e,t,n){this._s.Xn(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),bv.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._s.Zn(t),bv.resolve()}getMatchingKeysForTargetId(e,t){const n=this._s.es(t);return bv.resolve(n)}containsKey(e,t){return bv.resolve(this._s.containsKey(t))}}
/**
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
 */class Qv{constructor(e,t){var n;this.ys={},this.Ne=new ag(0),this.xe=!1,this.xe=!0,this.referenceDelegate=e(this),this.Ue=new Xv(this),this.qt=new Cv,this.qe=(n=this.qt,new Gv(n,(e=>this.referenceDelegate.ps(e)))),this.R=new kv(t),this.Ke=new $v(this.R)}start(){return Promise.resolve()}shutdown(){return this.xe=!1,Promise.resolve()}get started(){return this.xe}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.qt}getMutationQueue(e){let t=this.ys[e.toKey()];return t||(t=new Kv(this.qt,this.referenceDelegate),this.ys[e.toKey()]=t),t}getTargetCache(){return this.Ue}getRemoteDocumentCache(){return this.qe}getBundleCache(){return this.Ke}runTransaction(e,t,n){dg("MemoryPersistence","Starting transaction:",e);const r=new Yv(this.Ne.next());return this.referenceDelegate.Es(),n(r).next((e=>this.referenceDelegate.Ts(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Is(e,t){return bv.or(Object.values(this.ys).map((n=>()=>n.containsKey(e,t))))}}class Yv extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}{constructor(e){super(),this.currentSequenceNumber=e}}class Jv{constructor(e){this.persistence=e,this.As=new zv,this.Rs=null}static Ps(e){return new Jv(e)}get bs(){if(this.Rs)return this.Rs;throw mg()}addReference(e,t,n){return this.As.addReference(n,t),this.bs.delete(n.toString()),bv.resolve()}removeReference(e,t,n){return this.As.removeReference(n,t),this.bs.add(n.toString()),bv.resolve()}markPotentiallyOrphaned(e,t){return this.bs.add(t.toString()),bv.resolve()}removeTarget(e,t){this.As.Zn(t.targetId).forEach((e=>this.bs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.bs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Es(){this.Rs=new Set}Ts(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return bv.forEach(this.bs,(n=>{const r=$g.fromPath(n);return this.vs(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Rs=null,t.apply(e))))}updateLimboDocument(e,t){return this.vs(e,t).next((e=>{e?this.bs.delete(t.toString()):this.bs.add(t.toString())}))}ps(e){return 0}vs(e,t){return bv.or([()=>bv.resolve(this.As.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Is(e,t)])}}
/**
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
 */class Zv{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Zv.UNAUTHENTICATED=new Zv(null),Zv.GOOGLE_CREDENTIALS=new Zv("google-credentials-uid"),Zv.FIRST_PARTY=new Zv("first-party-uid");class ew{constructor(){this.activeTargetIds=Py()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}Cs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tw{constructor(){this.li=new ew,this.fi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.li.Ds(e),this.fi[e]||"not-current"}updateQueryState(e,t,n){this.fi[e]=t}removeLocalQueryTarget(e){this.li.Cs(e)}isLocalQueryTarget(e){return this.li.activeTargetIds.has(e)}clearQueryState(e){delete this.fi[e]}getAllActiveQueryTargets(){return this.li.activeTargetIds}isActiveQueryTarget(e){return this.li.activeTargetIds.has(e)}start(){return this.li=new ew,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
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
 */class nw{di(e){}shutdown(){}}
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
 */class rw{constructor(){this.wi=()=>this._i(),this.mi=()=>this.gi(),this.yi=[],this.pi()}di(e){this.yi.push(e)}shutdown(){window.removeEventListener("online",this.wi),window.removeEventListener("offline",this.mi)}pi(){window.addEventListener("online",this.wi),window.addEventListener("offline",this.mi)}_i(){dg("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.yi)e(0)}gi(){dg("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.yi)e(1)}static gt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const iw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
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
 */class sw{constructor(e){this.Ei=e.Ei,this.Ti=e.Ti}Ii(e){this.Ai=e}Ri(e){this.Pi=e}onMessage(e){this.bi=e}close(){this.Ti()}send(e){this.Ei(e)}vi(){this.Ai()}Vi(e){this.Pi(e)}Si(e){this.bi(e)}}
/**
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
 */class ow extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Di=t+"://"+e.host,this.Ci="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Ni(e,t,n,r){const i=this.xi(e,t);dg("RestConnection","Sending: ",i,n);const s={};return this.ki(s,r),this.$i(e,i,s,n).then((e=>(dg("RestConnection","Received: ",e),e)),(t=>{throw pg("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}Oi(e,t,n,r){return this.Ni(e,t,n,r)}ki(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+og,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const n in t.authHeaders)t.authHeaders.hasOwnProperty(n)&&(e[n]=t.authHeaders[n])}xi(e,t){const n=iw[e];return`${this.Di}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}$i(e,t,n,r){return new Promise(((i,s)=>{const o=new sg;o.listenOnce(Zp.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Jp.NO_ERROR:const t=o.getResponseJson();dg("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Jp.TIMEOUT:dg("Connection",'RPC "'+e+'" timed out'),s(new lg(cg.DEADLINE_EXCEEDED,"Request time out"));break;case Jp.HTTP_ERROR:const n=o.getStatus();if(dg("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(cg).indexOf(t)>=0?t:cg.UNKNOWN}(e.status);s(new lg(t,e.message))}else s(new lg(cg.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new lg(cg.UNAVAILABLE,"Connection failed."));break;default:mg()}}finally{dg("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}Fi(e,t){const n=[this.Di,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=new Gp,i=Vd(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new rg({})),this.ki(s.initMessageHeaders,t),Do()||Lo()||Oo().indexOf("Electron/")>=0||Po()||Oo().indexOf("MSAppHost/")>=0||xo()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");dg("Connection","Creating WebChannel: "+o,s);const a=r.createWebChannel(o,s);let c=!1,l=!1;const u=new sw({Ei:e=>{l?dg("Connection","Not sending because WebChannel is closed:",e):(c||(dg("Connection","Opening WebChannel transport."),a.open(),c=!0),dg("Connection","WebChannel sending:",e),a.send(e))},Ti:()=>a.close()}),h=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return h(a,ig.EventType.OPEN,(()=>{l||dg("Connection","WebChannel transport opened.")})),h(a,ig.EventType.CLOSE,(()=>{l||(l=!0,dg("Connection","WebChannel transport closed"),u.Vi())})),h(a,ig.EventType.ERROR,(e=>{l||(l=!0,pg("Connection","WebChannel transport errored:",e),u.Vi(new lg(cg.UNAVAILABLE,"The operation could not be completed")))})),h(a,ig.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];yg(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){dg("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=wy[e];if(void 0!==t)return by(t)}(e),n=i.message;void 0===t&&(t=cg.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),l=!0,u.Vi(new lg(t,n)),a.close()}else dg("Connection","WebChannel received:",n),u.Si(n)}})),h(i,eg.STAT_EVENT,(e=>{e.stat===tg?dg("Connection","Detected buffering proxy"):e.stat===ng&&dg("Connection","Detected no buffering proxy")})),setTimeout((()=>{u.vi()}),0),u}}function aw(){return"undefined"!=typeof document?document:null}
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
 */function cw(e){return new Gy(e,!0)}class lw{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Se=e,this.timerId=t,this.Mi=n,this.Li=r,this.Bi=i,this.Ui=0,this.qi=null,this.Ki=Date.now(),this.reset()}reset(){this.Ui=0}ji(){this.Ui=this.Bi}Qi(e){this.cancel();const t=Math.floor(this.Ui+this.Wi()),n=Math.max(0,Date.now()-this.Ki),r=Math.max(0,t-n);r>0&&dg("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ui} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.qi=this.Se.enqueueAfterDelay(this.timerId,r,(()=>(this.Ki=Date.now(),e()))),this.Ui*=this.Li,this.Ui<this.Mi&&(this.Ui=this.Mi),this.Ui>this.Bi&&(this.Ui=this.Bi)}Gi(){null!==this.qi&&(this.qi.skipDelay(),this.qi=null)}cancel(){null!==this.qi&&(this.qi.cancel(),this.qi=null)}Wi(){return(Math.random()-.5)*this.Ui}}
/**
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
 */class uw{constructor(e,t,n,r,i,s){this.Se=e,this.zi=n,this.Hi=r,this.Ji=i,this.listener=s,this.state=0,this.Yi=0,this.Xi=null,this.stream=null,this.Zi=new lw(e,t)}tr(){return 1===this.state||2===this.state||4===this.state}er(){return 2===this.state}start(){3!==this.state?this.auth():this.nr()}async stop(){this.tr()&&await this.close(0)}sr(){this.state=0,this.Zi.reset()}ir(){this.er()&&null===this.Xi&&(this.Xi=this.Se.enqueueAfterDelay(this.zi,6e4,(()=>this.rr())))}cr(e){this.ur(),this.stream.send(e)}async rr(){if(this.er())return this.close(0)}ur(){this.Xi&&(this.Xi.cancel(),this.Xi=null)}async close(e,t){this.ur(),this.Zi.cancel(),this.Yi++,3!==e?this.Zi.reset():t&&t.code===cg.RESOURCE_EXHAUSTED?(fg(t.toString()),fg("Using maximum backoff delay to prevent overloading the backend."),this.Zi.ji()):t&&t.code===cg.UNAUTHENTICATED&&this.Ji.invalidateToken(),null!==this.stream&&(this.ar(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ri(t)}ar(){}auth(){this.state=1;const e=this.hr(this.Yi),t=this.Yi;this.Ji.getToken().then((e=>{this.Yi===t&&this.lr(e)}),(t=>{e((()=>{const e=new lg(cg.UNKNOWN,"Fetching auth token failed: "+t.message);return this.dr(e)}))}))}lr(e){const t=this.hr(this.Yi);this.stream=this.wr(e),this.stream.Ii((()=>{t((()=>(this.state=2,this.listener.Ii())))})),this.stream.Ri((e=>{t((()=>this.dr(e)))})),this.stream.onMessage((e=>{t((()=>this.onMessage(e)))}))}nr(){this.state=4,this.Zi.Qi((async()=>{this.state=0,this.start()}))}dr(e){return dg("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}hr(e){return t=>{this.Se.enqueueAndForget((()=>this.Yi===e?t():(dg("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class hw extends uw{constructor(e,t,n,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle",t,n,i),this.R=r}wr(e){return this.Hi.Fi("Listen",e)}onMessage(e){this.Zi.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:mg(),s=t.targetChange.targetIds||[],o=function(e,t){return e.I?(yg(void 0===t||"string"==typeof t),xg.fromBase64String(t||"")):(yg(void 0===t||t instanceof Uint8Array),xg.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?cg.UNKNOWN:by(e.code);return new lg(t,e.message||"")}(a);n=new jy(i,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=tv(e,r.document.name),s=Yy(r.document.updateTime),o=new rm({mapValue:{fields:r.document.fields}}),a=sm.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Fy(c,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=tv(e,r.document),s=r.readTime?Yy(r.readTime):Ig.min(),o=sm.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Fy([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=tv(e,r.document),s=r.removedTargetIds||[];n=new Fy([],s,i,null)}else{if(!("filter"in t))return mg();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new vy(r),s=e.targetId;n=new Vy(s,i)}}var r;return n}(this.R,e),n=function(e){if(!("targetChange"in e))return Ig.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ig.min():t.readTime?Yy(t.readTime):Ig.min()}(e);return this.listener._r(t,n)}mr(e){const t={};t.database=rv(this.R),t.addTarget=function(e,t){let n;const r=t.target;return n=um(r)?{documents:ov(e,r)}:{query:av(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Xy(e,t.resumeToken):t.snapshotVersion.compareTo(Ig.min())>0&&(n.readTime=Wy(e,t.snapshotVersion.toTimestamp())),n}(this.R,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return mg()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.R,e);n&&(t.labels=n),this.cr(t)}gr(e){const t={};t.database=rv(this.R),t.removeTarget=e,this.cr(t)}}class dw extends uw{constructor(e,t,n,r,i){super(e,"write_stream_connection_backoff","write_stream_idle",t,n,i),this.R=r,this.yr=!1}get pr(){return this.yr}start(){this.yr=!1,this.lastStreamToken=void 0,super.start()}ar(){this.yr&&this.Er([])}wr(e){return this.Hi.Fi("Write",e)}onMessage(e){if(yg(!!e.streamToken),this.lastStreamToken=e.streamToken,this.yr){this.Zi.reset();const t=function(e,t){return e&&e.length>0?(yg(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Yy(e.updateTime):Yy(t);return n.isEqual(Ig.min())&&(n=Yy(t)),new ny(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Yy(e.commitTime);return this.listener.Tr(n,t)}return yg(!e.writeResults||0===e.writeResults.length),this.yr=!0,this.listener.Ir()}Ar(){const e={};e.database=rv(this.R),this.cr(e)}Er(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof hy)n={update:sv(e,t.key,t.value)};else if(t instanceof my)n={delete:ev(e,t.key)};else if(t instanceof dy)n={update:sv(e,t.key,t.data),updateMask:vv(t.fieldMask)};else{if(!(t instanceof yy))return mg();n={verify:ev(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Gm)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Wm)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Qm)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Jm)return{fieldPath:t.field.canonicalString(),increment:n.A};throw mg()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Qy(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:mg())),n;var r,i}(this.R,e)))};this.cr(t)}}
/**
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
 */class fw extends class{}{constructor(e,t,n){super(),this.credentials=e,this.Hi=t,this.R=n,this.Rr=!1}Pr(){if(this.Rr)throw new lg(cg.FAILED_PRECONDITION,"The client has already been terminated.")}Ni(e,t,n){return this.Pr(),this.credentials.getToken().then((r=>this.Hi.Ni(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===cg.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new lg(cg.UNKNOWN,e.toString())}))}Oi(e,t,n){return this.Pr(),this.credentials.getToken().then((r=>this.Hi.Oi(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===cg.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new lg(cg.UNKNOWN,e.toString())}))}terminate(){this.Rr=!0}}class pw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.br=0,this.vr=null,this.Vr=!0}Sr(){0===this.br&&(this.Dr("Unknown"),this.vr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.vr=null,this.Cr("Backend didn't respond within 10 seconds."),this.Dr("Offline"),Promise.resolve()))))}Nr(e){"Online"===this.state?this.Dr("Unknown"):(this.br++,this.br>=1&&(this.kr(),this.Cr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Dr("Offline")))}set(e){this.kr(),this.br=0,"Online"===e&&(this.Vr=!1),this.Dr(e)}Dr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Cr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Vr?(fg(t),this.Vr=!1):dg("OnlineStateTracker",t)}kr(){null!==this.vr&&(this.vr.cancel(),this.vr=null)}}
/**
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
 */class gw{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.$r=[],this.Or=new Map,this.Fr=new Set,this.Mr=[],this.Lr=i,this.Lr.di((e=>{n.enqueueAndForget((async()=>{Iw(this)&&(dg("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=vg(e);t.Fr.add(4),await yw(t),t.Br.set("Unknown"),t.Fr.delete(4),await mw(t)}(this))}))})),this.Br=new pw(n,r)}}async function mw(e){if(Iw(e))for(const t of e.Mr)await t(!0)}async function yw(e){for(const t of e.Mr)await t(!1)}function vw(e,t){const n=vg(e);n.Or.has(t.targetId)||(n.Or.set(t.targetId,t),Tw(n)?Ew(n):jw(n).er()&&_w(n,t))}function ww(e,t){const n=vg(e),r=jw(n);n.Or.delete(t),r.er()&&bw(n,t),0===n.Or.size&&(r.er()?r.ir():Iw(n)&&n.Br.set("Unknown"))}function _w(e,t){e.Ur.q(t.targetId),jw(e).mr(t)}function bw(e,t){e.Ur.q(t),jw(e).gr(t)}function Ew(e){e.Ur=new qy({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.Or.get(t)||null}),jw(e).start(),e.Br.Sr()}function Tw(e){return Iw(e)&&!jw(e).tr()&&e.Or.size>0}function Iw(e){return 0===vg(e).Fr.size}function Sw(e){e.Ur=void 0}async function kw(e){e.Or.forEach(((t,n)=>{_w(e,t)}))}async function Aw(e,t){Sw(e),Tw(e)?(e.Br.Nr(t),Ew(e)):e.Br.set("Unknown")}async function Cw(e,t,n){if(e.Br.set("Online"),t instanceof jy&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Or.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Or.delete(r),e.Ur.removeTarget(r))}(e,t)}catch(r){dg("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Rw(e,r)}else if(t instanceof Fy?e.Ur.X(t):t instanceof Vy?e.Ur.rt(t):e.Ur.et(t),!n.isEqual(Ig.min()))try{const t=await Fv(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Ur.ut(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Or.get(r);i&&e.Or.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.Or.get(t);if(!n)return;e.Or.set(t,n.withResumeToken(xg.EMPTY_BYTE_STRING,n.snapshotVersion)),bw(e,t);const r=new Sv(n.target,t,1,n.sequenceNumber);_w(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){dg("RemoteStore","Failed to raise snapshot:",i),await Rw(e,i)}}async function Rw(e,t,n){if(!Ev(t))throw t;e.Fr.add(1),await yw(e),e.Br.set("Offline"),n||(n=()=>Fv(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{dg("RemoteStore","Retrying IndexedDB access"),await n(),e.Fr.delete(1),await mw(e)}))}function Nw(e,t){return t().catch((n=>Rw(e,n,t)))}async function Ow(e){const t=vg(e),n=Bw(t);let r=t.$r.length>0?t.$r[t.$r.length-1].batchId:-1;for(;Dw(t);)try{const e=await jv(t.localStore,r);if(null===e){0===t.$r.length&&n.ir();break}r=e.batchId,xw(t,e)}catch(i){await Rw(t,i)}Lw(t)&&Pw(t)}function Dw(e){return Iw(e)&&e.$r.length<10}function xw(e,t){e.$r.push(t);const n=Bw(e);n.er()&&n.pr&&n.Er(t.mutations)}function Lw(e){return Iw(e)&&!Bw(e).tr()&&e.$r.length>0}function Pw(e){Bw(e).start()}async function Mw(e){Bw(e).Ar()}async function Uw(e){const t=Bw(e);for(const n of e.$r)t.Er(n.mutations)}async function Fw(e,t,n){const r=e.$r.shift(),i=Iv.from(r,t,n);await Nw(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Ow(e)}async function Vw(e,t){t&&Bw(e).pr&&await async function(e,t){if(function(e){switch(e){case cg.OK:return mg();case cg.CANCELLED:case cg.UNKNOWN:case cg.DEADLINE_EXCEEDED:case cg.RESOURCE_EXHAUSTED:case cg.INTERNAL:case cg.UNAVAILABLE:case cg.UNAUTHENTICATED:return!1;case cg.INVALID_ARGUMENT:case cg.NOT_FOUND:case cg.ALREADY_EXISTS:case cg.PERMISSION_DENIED:case cg.FAILED_PRECONDITION:case cg.ABORTED:case cg.OUT_OF_RANGE:case cg.UNIMPLEMENTED:case cg.DATA_LOSS:return!0;default:return mg()}}(n=t.code)&&n!==cg.ABORTED){const n=e.$r.shift();Bw(e).sr(),await Nw(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Ow(e)}var n}(e,t),Lw(e)&&Pw(e)}function jw(e){return e.qr||(e.qr=function(e,t,n){const r=vg(e);return r.Pr(),new hw(t,r.Hi,r.credentials,r.R,n)}(e.datastore,e.asyncQueue,{Ii:kw.bind(null,e),Ri:Aw.bind(null,e),_r:Cw.bind(null,e)}),e.Mr.push((async t=>{t?(e.qr.sr(),Tw(e)?Ew(e):e.Br.set("Unknown")):(await e.qr.stop(),Sw(e))}))),e.qr}function Bw(e){return e.Kr||(e.Kr=function(e,t,n){const r=vg(e);return r.Pr(),new dw(t,r.Hi,r.credentials,r.R,n)}(e.datastore,e.asyncQueue,{Ii:Mw.bind(null,e),Ri:Vw.bind(null,e),Ir:Uw.bind(null,e),Tr:Fw.bind(null,e)}),e.Mr.push((async t=>{t?(e.Kr.sr(),await Ow(e)):(await e.Kr.stop(),e.$r.length>0&&(dg("RemoteStore",`Stopping write stream with ${e.$r.length} pending writes`),e.$r=[]))}))),e.Kr
/**
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
 */}class qw{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new _v,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new qw(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new lg(cg.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $w(e,t){if(fg("AsyncQueue",`${t}: ${e}`),Ev(e))return new lg(cg.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class zw{constructor(e){this.comparator=e?(t,n)=>e(t,n)||$g.comparator(t.key,n.key):(e,t)=>$g.comparator(e.key,t.key),this.keyedMap=Ny(),this.sortedSet=new Ey(this.comparator)}static emptySet(e){return new zw(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zw))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new zw;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class Hw{constructor(){this.jr=new Ey($g.comparator)}track(e){const t=e.doc.key,n=this.jr.get(t);n?0!==e.type&&3===n.type?this.jr=this.jr.insert(t,e):3===e.type&&1!==n.type?this.jr=this.jr.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.jr=this.jr.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.jr=this.jr.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.jr=this.jr.remove(t):1===e.type&&2===n.type?this.jr=this.jr.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.jr=this.jr.insert(t,{type:2,doc:e.doc}):mg():this.jr=this.jr.insert(t,e)}Qr(){const e=[];return this.jr.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Kw{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Kw(e,t,zw.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lm(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class Gw{constructor(){this.Wr=void 0,this.listeners=[]}}class Ww{constructor(){this.queries=new Dv((e=>Pm(e)),Lm),this.onlineState="Unknown",this.Gr=new Set}}function Xw(e,t){const n=vg(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Hr(i)&&(r=!0);t.Wr=i}}r&&Yw(n)}function Qw(e,t,n){const r=vg(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Yw(e){e.Gr.forEach((e=>{e.next()}))}class Jw{constructor(e,t,n){this.query=e,this.Jr=t,this.Yr=!1,this.Xr=null,this.onlineState="Unknown",this.options=n||{}}Hr(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Kw(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.Yr?this.Zr(e)&&(this.Jr.next(e),t=!0):this.eo(e,this.onlineState)&&(this.no(e),t=!0),this.Xr=e,t}onError(e){this.Jr.error(e)}zr(e){this.onlineState=e;let t=!1;return this.Xr&&!this.Yr&&this.eo(this.Xr,e)&&(this.no(this.Xr),t=!0),t}eo(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.so&&n||e.docs.isEmpty()&&"Offline"!==t)}Zr(e){if(e.docChanges.length>0)return!0;const t=this.Xr&&this.Xr.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}no(e){e=Kw.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Yr=!0,this.Jr.next(e)}}
/**
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
 */class Zw{constructor(e){this.key=e}}class e_{constructor(e){this.key=e}}class t_{constructor(e,t){this.query=e,this.uo=t,this.ao=null,this.current=!1,this.ho=xy(),this.mutatedKeys=xy(),this.lo=Fm(e),this.fo=new zw(this.lo)}get wo(){return this.uo}_o(e,t){const n=t?t.mo:new Hw,r=t?t.fo:this.fo;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Cm(this.query)&&r.size===this.query.limit?r.last():null,c=Rm(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),u=Um(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.yo(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.lo(u,a)>0||c&&this.lo(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),Cm(this.query)||Rm(this.query))for(;s.size>this.query.limit;){const e=Cm(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{fo:s,mo:n,Nn:o,mutatedKeys:i}}yo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.fo;this.fo=e.fo,this.mutatedKeys=e.mutatedKeys;const i=e.mo.Qr();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return mg()}};return n(e)-n(t)}(e.type,t.type)||this.lo(e.doc,t.doc))),this.po(n);const s=t?this.Eo():[],o=0===this.ho.size&&this.current?1:0,a=o!==this.ao;return this.ao=o,0!==i.length||a?{snapshot:new Kw(this.query,e.fo,r,i,e.mutatedKeys,0===o,a,!1),To:s}:{To:s}}zr(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({fo:this.fo,mo:new Hw,mutatedKeys:this.mutatedKeys,Nn:!1},!1)):{To:[]}}Io(e){return!this.uo.has(e)&&!!this.fo.has(e)&&!this.fo.get(e).hasLocalMutations}po(e){e&&(e.addedDocuments.forEach((e=>this.uo=this.uo.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.uo=this.uo.delete(e))),this.current=e.current)}Eo(){if(!this.current)return[];const e=this.ho;this.ho=xy(),this.fo.forEach((e=>{this.Io(e.key)&&(this.ho=this.ho.add(e.key))}));const t=[];return e.forEach((e=>{this.ho.has(e)||t.push(new e_(e))})),this.ho.forEach((n=>{e.has(n)||t.push(new Zw(n))})),t}Ao(e){this.uo=e.Bn,this.ho=xy();const t=this._o(e.documents);return this.applyChanges(t,!0)}Ro(){return Kw.fromInitialDocuments(this.query,this.fo,this.mutatedKeys,0===this.ao)}}class n_{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class r_{constructor(e){this.key=e,this.Po=!1}}class i_{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.bo={},this.vo=new Dv((e=>Pm(e)),Lm),this.Vo=new Map,this.So=new Set,this.Do=new Ey($g.comparator),this.Co=new Map,this.No=new zv,this.xo={},this.ko=new Map,this.$o=Nv.Yt(),this.onlineState="Unknown",this.Oo=void 0}get isPrimaryClient(){return!0===this.Oo}}async function s_(e,t){const n=function(e){const t=vg(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=c_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=E_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=u_.bind(null,t),t.bo._r=Xw.bind(null,t.eventManager),t.bo.Mo=Qw.bind(null,t.eventManager),t}(e);let r,i;const s=n.vo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ro();else{const e=await function(e,t){const n=vg(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ue.getTargetData(e,t).next((i=>i?(r=i,bv.resolve(r)):n.Ue.allocateTargetId(e).next((i=>(r=new Sv(t,i,0,e.currentSequenceNumber),n.Ue.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.kn.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.kn=n.kn.insert(e.targetId,e),n.$n.set(t,e.targetId)),e}))}(n.localStore,xm(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await async function(e,t,n,r){e.Fo=(t,n,r)=>async function(e,t,n,r){let i=t.view._o(n);i.Nn&&(i=await qv(e.localStore,t.query,!1).then((({documents:e})=>t.view._o(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return y_(e,t.targetId,o.To),o.snapshot}(e,t,n,r);const i=await qv(e.localStore,t,!0),s=new t_(t,i.Bn),o=s._o(i.documents),a=Uy.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);y_(e,n,c.To);const l=new n_(t,n,s);return e.vo.set(t,l),e.Vo.has(n)?e.Vo.get(n).push(t):e.Vo.set(n,[t]),c.snapshot}(n,t,r,"current"===s),n.isPrimaryClient&&vw(n.remoteStore,e)}return i}async function o_(e,t){const n=vg(e),r=n.vo.get(t),i=n.Vo.get(r.targetId);if(i.length>1)return n.Vo.set(r.targetId,i.filter((e=>!Lm(e,t)))),void n.vo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Bv(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),ww(n.remoteStore,r.targetId),g_(n,r.targetId)})).catch(Ov)):(g_(n,r.targetId),await Bv(n.localStore,r.targetId,!0))}async function a_(e,t,n){const r=function(e){const t=vg(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=h_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=d_.bind(null,t),t}(e);try{const e=await function(e,t){const n=vg(e),r=Tg.now(),i=t.reduce(((e,t)=>e.add(t.key)),xy());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Mn.pn(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=cy(e,s.get(e.key));null!=t&&o.push(new dy(e.key,t,im(t.value.mapValue),ry.exists(!0)))}return n._n.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.xo[e.currentUser.toKey()];r||(r=new Ey(bg)),r=r.insert(t,n),e.xo[e.currentUser.toKey()]=r}(r,e.batchId,n),await __(r,e.changes),await Ow(r.remoteStore)}catch(i){const e=$w(i,"Failed to persist write");n.reject(e)}}async function c_(e,t){const n=vg(e);try{const e=await Vv(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Co.get(t);r&&(yg(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Po=!0:e.modifiedDocuments.size>0?yg(r.Po):e.removedDocuments.size>0&&(yg(r.Po),r.Po=!1))})),await __(n,e,t)}catch(r){await Ov(r)}}function l_(e,t,n){const r=vg(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.vo.forEach(((n,r)=>{const i=r.view.zr(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=vg(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.zr(t)&&(r=!0)})),r&&Yw(n)}(r.eventManager,t),e.length&&r.bo._r(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function u_(e,t,n){const r=vg(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Co.get(t),s=i&&i.key;if(s){let e=new Ey($g.comparator);e=e.insert(s,sm.newNoDocument(s,Ig.min()));const n=xy().add(s),i=new My(Ig.min(),new Map,new Sy(bg),e,n);await c_(r,i),r.Do=r.Do.remove(s),r.Co.delete(t),w_(r)}else await Bv(r.localStore,t,!1).then((()=>g_(r,t,n))).catch(Ov)}async function h_(e,t){const n=vg(e),r=t.batch.batchId;try{const e=await function(e,t){const n=vg(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Fn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=bv.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);yg(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e._n.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n._n.performConsistencyCheck(e))).next((()=>n.Mn.pn(e,r)))}))}(n.localStore,t);p_(n,r,null),f_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await __(n,e)}catch(i){await Ov(i)}}async function d_(e,t,n){const r=vg(e);try{const e=await function(e,t){const n=vg(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n._n.lookupMutationBatch(e,t).next((t=>(yg(null!==t),r=t.keys(),n._n.removeMutationBatch(e,t)))).next((()=>n._n.performConsistencyCheck(e))).next((()=>n.Mn.pn(e,r)))}))}(r.localStore,t);p_(r,t,n),f_(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await __(r,e)}catch(i){await Ov(i)}}function f_(e,t){(e.ko.get(t)||[]).forEach((e=>{e.resolve()})),e.ko.delete(t)}function p_(e,t,n){const r=vg(e);let i=r.xo[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.xo[r.currentUser.toKey()]=i}}function g_(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Vo.get(t))e.vo.delete(r),n&&e.bo.Mo(r,n);e.Vo.delete(t),e.isPrimaryClient&&e.No.Zn(t).forEach((t=>{e.No.containsKey(t)||m_(e,t)}))}function m_(e,t){e.So.delete(t.path.canonicalString());const n=e.Do.get(t);null!==n&&(ww(e.remoteStore,n),e.Do=e.Do.remove(t),e.Co.delete(n),w_(e))}function y_(e,t,n){for(const r of n)r instanceof Zw?(e.No.addReference(r.key,t),v_(e,r)):r instanceof e_?(dg("SyncEngine","Document no longer in limbo: "+r.key),e.No.removeReference(r.key,t),e.No.containsKey(r.key)||m_(e,r.key)):mg()}function v_(e,t){const n=t.key,r=n.path.canonicalString();e.Do.get(n)||e.So.has(r)||(dg("SyncEngine","New document in limbo: "+n),e.So.add(r),w_(e))}function w_(e){for(;e.So.size>0&&e.Do.size<e.maxConcurrentLimboResolutions;){const t=e.So.values().next().value;e.So.delete(t);const n=new $g(Rg.fromString(t)),r=e.$o.next();e.Co.set(r,new r_(n)),e.Do=e.Do.insert(n,r),vw(e.remoteStore,new Sv(xm(Am(n.path)),r,2,ag.o))}}async function __(e,t,n){const r=vg(e),i=[],s=[],o=[];r.vo.isEmpty()||(r.vo.forEach(((e,a)=>{o.push(r.Fo(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=Lv.vn(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.bo._r(i),await async function(e,t){const n=vg(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>bv.forEach(t,(t=>bv.forEach(t.Pn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>bv.forEach(t.bn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!Ev(r))throw r;dg("LocalStore","Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.kn.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.kn=n.kn.insert(e,i)}}}(r.localStore,s))}async function b_(e,t){const n=vg(e);if(!n.currentUser.isEqual(t)){dg("SyncEngine","User change. New user:",t.toKey());const e=await Uv(n.localStore,t);n.currentUser=t,(r=n).ko.forEach((e=>{e.forEach((e=>{e.reject(new lg(cg.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.ko.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await __(n,e.Ln)}var r}function E_(e,t){const n=vg(e),r=n.Co.get(t);if(r&&r.Po)return xy().add(r.key);{let e=xy();const r=n.Vo.get(t);if(!r)return e;for(const t of r){const r=n.vo.get(t);e=e.unionWith(r.view.wo)}return e}}class T_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.R=cw(e.databaseInfo.databaseId),this.sharedClientState=this.Bo(e),this.persistence=this.Uo(e),await this.persistence.start(),this.gcScheduler=this.qo(e),this.localStore=this.Ko(e)}qo(e){return null}Ko(e){return function(e,t,n,r){return new Mv(e,t,n,r)}(this.persistence,new Pv,e.initialUser,this.R)}Uo(e){return new Qv(Jv.Ps,this.R)}Bo(e){return new tw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class I_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>l_(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=b_.bind(null,this.syncEngine),await async function(e,t){const n=vg(e);t?(n.Fr.delete(2),await mw(n)):t||(n.Fr.add(2),await yw(n),n.Br.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ww}createDatastore(e){const t=cw(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new ow(r));var r,i;return i=e.credentials,new fw(i,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>l_(this.syncEngine,e,0),s=rw.gt()?new rw:new nw,new gw(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new i_(e,t,n,r,i,s);return o&&(a.Oo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=vg(e);dg("RemoteStore","RemoteStore shutting down."),t.Fr.add(5),await yw(t),t.Lr.shutdown(),t.Br.set("Unknown")}(this.remoteStore)}}
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
 */class S_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Qo(this.observer.next,e)}error(e){this.observer.error?this.Qo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Wo(){this.muted=!0}Qo(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
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
 */class k_{constructor(e,t,n){this.credentials=e,this.asyncQueue=t,this.databaseInfo=n,this.user=Zv.UNAUTHENTICATED,this.clientId=_g.u(),this.credentialListener=()=>Promise.resolve(),this.credentials.setChangeListener(t,(async e=>{dg("FirestoreClient","Received user=",e.uid),await this.credentialListener(e),this.user=e}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new lg(cg.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _v;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.removeChangeListener(),e.resolve()}catch(t){const n=$w(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function A_(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){return e.offlineComponents||(dg("FirestoreClient","Using default OfflineComponentProvider"),await async function(e,t){e.asyncQueue.verifyOperationInProgress(),dg("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Uv(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}(e,new T_)),e.offlineComponents}(e);dg("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>async function(e,t){const n=vg(e);n.asyncQueue.verifyOperationInProgress(),dg("RemoteStore","RemoteStore received new credentials");const r=Iw(n);n.Fr.add(3),await yw(n),r&&n.Br.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Fr.delete(3),await mw(n)}(t.remoteStore,e))),e.onlineComponents=t}async function C_(e){return e.onlineComponents||(dg("FirestoreClient","Using default OnlineComponentProvider"),await A_(e,new I_)),e.onlineComponents}async function R_(e){const t=await C_(e),n=t.eventManager;return n.onListen=s_.bind(null,t.syncEngine),n.onUnlisten=o_.bind(null,t.syncEngine),n}function N_(e,t,n={}){const r=new _v;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new S_({next:n=>{t.enqueueAndForget((()=>async function(e,t){const n=vg(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}(e,o))),n.fromCache&&"server"===r.source?i.reject(new lg(cg.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Jw(n,s,{includeMetadataChanges:!0,so:!0});return async function(t,n){const r=vg(t),i=n.query;let s=!1,o=r.queries.get(i);if(o||(s=!0,o=new Gw),s)try{o.Wr=await r.onListen(i)}catch(e){const r=$w(e,`Initialization of query '${Mm(n.query)}' failed`);return void n.onError(r)}r.queries.set(i,o),o.listeners.push(n),n.zr(r.onlineState),o.Wr&&n.Hr(o.Wr)&&Yw(r)}(e,o)}(await R_(e),e.asyncQueue,t,n,r))),r.promise}class O_{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class D_{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof D_&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const x_=new Map;
/**
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
 */class L_{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class P_{constructor(){this.changeListener=null}getToken(){return Promise.resolve(null)}invalidateToken(){}setChangeListener(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(Zv.UNAUTHENTICATED)))}removeChangeListener(){this.changeListener=null}}class M_{constructor(e){this.currentUser=Zv.UNAUTHENTICATED,this.oc=new _v,this.cc=0,this.forceRefresh=!1,this.auth=null,this.asyncQueue=null,this.uc=()=>{this.cc++,this.currentUser=this.ac(),this.oc.resolve(),this.changeListener&&this.asyncQueue.enqueueRetryable((()=>this.changeListener(this.currentUser)))};const t=e=>{dg("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.uc)};e.onInit((e=>t(e))),setTimeout((()=>{if(!this.auth){const n=e.getImmediate({optional:!0});n?t(n):(dg("FirebaseCredentialsProvider","Auth not yet detected"),this.oc.resolve())}}),0)}getToken(){const e=this.cc,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.cc!==e?(dg("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(yg("string"==typeof t.accessToken),new L_(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}setChangeListener(e,t){this.asyncQueue=e,this.asyncQueue.enqueueRetryable((async()=>{await this.oc.promise,await t(this.currentUser),this.changeListener=t}))}removeChangeListener(){this.auth&&this.auth.removeAuthTokenListener(this.uc),this.changeListener=()=>Promise.resolve()}ac(){const e=this.auth&&this.auth.getUid();return yg(null===e||"string"==typeof e),new Zv(e)}}class U_{constructor(e,t,n){this.hc=e,this.lc=t,this.fc=n,this.type="FirstParty",this.user=Zv.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.lc},t=this.hc.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.fc&&(e["X-Goog-Iam-Authorization-Token"]=this.fc),e}}class F_{constructor(e,t,n){this.hc=e,this.lc=t,this.fc=n}getToken(){return Promise.resolve(new U_(this.hc,this.lc,this.fc))}setChangeListener(e,t){e.enqueueRetryable((()=>t(Zv.FIRST_PARTY)))}removeChangeListener(){}invalidateToken(){}}
/**
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
 */function V_(e,t,n){if(!n)throw new lg(cg.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function j_(e){if(!$g.isDocumentKey(e))throw new lg(cg.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function B_(e){if($g.isDocumentKey(e))throw new lg(cg.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function q_(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){if(e.constructor){const t=/function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());if(t&&t.length>1)return t[1]}return null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":mg()}function $_(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new lg(cg.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=q_(e);throw new lg(cg.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
 */class z_{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new lg(cg.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new lg(cg.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new lg(cg.INVALID_ARGUMENT,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,e.experimentalForceLongPolling,0,e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class H_{constructor(e,t){this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new z_({}),this._settingsFrozen=!1,e instanceof D_?(this._databaseId=e,this._credentials=new P_):(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new lg(cg.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new D_(e.options.projectId)}(e),this._credentials=new M_(t))}get app(){if(!this._app)throw new lg(cg.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new lg(cg.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new z_(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new P_;switch(e.type){case"gapi":const t=e.client;return yg(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new F_(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new lg(cg.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=x_.get(e);t&&(dg("ComponentProvider","Removing Datastore"),x_.delete(e),t.terminate())}(this),Promise.resolve()}}
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
 */class K_{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new W_(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new K_(this.firestore,e,this._key)}}class G_{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new G_(this.firestore,e,this._query)}}class W_ extends G_{constructor(e,t,n){super(e,t,Am(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new K_(this.firestore,null,new $g(e))}withConverter(e){return new W_(this.firestore,e,this._path)}}function X_(e,t,...n){if(e=Go(e),V_("collection","path",t),e instanceof H_){const r=Rg.fromString(t,...n);return B_(r),new W_(e,null,r)}{if(!(e instanceof K_||e instanceof W_))throw new lg(cg.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=Rg.fromString(e.path,...n).child(Rg.fromString(t));return B_(r),new W_(e.firestore,null,r)}}
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
class Q_{constructor(){this.dc=Promise.resolve(),this.wc=[],this._c=!1,this.mc=[],this.gc=null,this.yc=!1,this.Ec=!1,this.Tc=[],this.Zi=new lw(this,"async_queue_retry"),this.Ic=()=>{const e=aw();e&&dg("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Zi.Gi()};const e=aw();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ic)}get isShuttingDown(){return this._c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ac(),this.Rc(e)}enterRestrictedMode(e){if(!this._c){this._c=!0,this.Ec=e||!1;const t=aw();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ic)}}enqueue(e){if(this.Ac(),this._c)return new Promise((()=>{}));const t=new _v;return this.Rc((()=>this._c&&this.Ec?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.wc.push(e),this.Pc())))}async Pc(){if(0!==this.wc.length){try{await this.wc[0](),this.wc.shift(),this.Zi.reset()}catch(e){if(!Ev(e))throw e;dg("AsyncQueue","Operation failed with retryable error: "+e)}this.wc.length>0&&this.Zi.Qi((()=>this.Pc()))}}Rc(e){const t=this.dc.then((()=>(this.yc=!0,e().catch((e=>{throw this.gc=e,this.yc=!1,fg("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.yc=!1,e))))));return this.dc=t,t}enqueueAfterDelay(e,t,n){this.Ac(),this.Tc.indexOf(e)>-1&&(t=0);const r=qw.createAndSchedule(this,e,t,n,(e=>this.bc(e)));return this.mc.push(r),r}Ac(){this.gc&&mg()}verifyOperationInProgress(){}async vc(){let e;do{e=this.dc,await e}while(e!==this.dc)}Vc(e){for(const t of this.mc)if(t.timerId===e)return!0;return!1}Sc(e){return this.vc().then((()=>{this.mc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.mc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.vc()}))}Dc(e){this.Tc.push(e)}bc(e){const t=this.mc.indexOf(e);this.mc.splice(t,1)}}class Y_ extends H_{constructor(e,t){super(e,t),this.type="firestore",this._queue=new Q_,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||eb(this),this._firestoreClient.terminate()}}function J_(e=ya()){return fa(e,"firestore-exp").getImmediate()}function Z_(e){return e._firestoreClient||eb(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function eb(e){var t;const n=e._freezeSettings(),r=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new O_(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var i,s,o,a;e._firestoreClient=new k_(e._credentials,e._queue,r)}
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
 */class tb{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new lg(cg.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Og(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
 */class nb{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nb(xg.fromBase64String(e))}catch(t){throw new lg(cg.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new nb(xg.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class rb{constructor(e){this._methodName=e}}
/**
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
 */class ib{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new lg(cg.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new lg(cg.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return bg(this._lat,e._lat)||bg(this._long,e._long)}}
/**
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
 */const sb=/^__.*__$/;class ob{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new dy(e,this.data,this.fieldMask,t,this.fieldTransforms):new hy(e,this.data,t,this.fieldTransforms)}}function ab(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw mg()}}class cb{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.R=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Cc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Nc(){return this.settings.Nc}xc(e){return new cb(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.R,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}kc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.xc({path:n,$c:!1});return r.Oc(e),r}Fc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.xc({path:n,$c:!1});return r.Cc(),r}Mc(e){return this.xc({path:void 0,$c:!0})}Lc(e){return _b(e,this.settings.methodName,this.settings.Bc||!1,this.path,this.settings.Uc)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Cc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Oc(this.path.get(e))}Oc(e){if(0===e.length)throw this.Lc("Document fields must not be empty");if(ab(this.Nc)&&sb.test(e))throw this.Lc('Document fields cannot begin and end with "__"')}}class lb{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.R=n||cw(e)}qc(e,t,n,r=!1){return new cb({Nc:e,methodName:t,Uc:n,path:Og.emptyPath(),$c:!1,Bc:r},this.databaseId,this.R,this.ignoreUndefinedProperties)}}function ub(e){const t=e._freezeSettings(),n=cw(e._databaseId);return new lb(e._databaseId,!!t.ignoreUndefinedProperties,n)}function hb(e,t,n,r,i,s={}){const o=e.qc(s.merge||s.mergeFields?2:0,t,n,i);mb("Data must be an object, but it was:",o,r);const a=pb(r,o);let c,l;if(s.merge)c=new Dg(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=yb(t,r,n);if(!o.contains(i))throw new lg(cg.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);bb(e,i)||e.push(i)}c=new Dg(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new ob(new rm(a),c,l)}class db extends rb{_toFieldTransform(e){return new ty(e.path,new Gm)}isEqual(e){return e instanceof db}}function fb(e,t){if(gb(e=Go(e)))return mb("Unsupported field value:",t,e),pb(e,t);if(e instanceof rb)return function(e,t){if(!ab(t.Nc))throw t.Lc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Lc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.$c&&4!==t.Nc)throw t.Lc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=fb(i,t.Mc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Go(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return qm(t.R,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Tg.fromDate(e);return{timestampValue:Wy(t.R,n)}}if(e instanceof Tg){const n=new Tg(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Wy(t.R,n)}}if(e instanceof ib)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof nb)return{bytesValue:Xy(t.R,e._byteString)};if(e instanceof K_){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Lc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Jy(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Lc(`Unsupported field value: ${q_(e)}`)}(e,t)}function pb(e,t){const n={};return Ag(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):kg(e,((e,r)=>{const i=fb(r,t.kc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function gb(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Tg||e instanceof ib||e instanceof nb||e instanceof K_||e instanceof rb)}function mb(e,t,n){if(!gb(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=q_(n);throw"an object"===r?t.Lc(e+" a custom object"):t.Lc(e+" "+r)}var r}function yb(e,t,n){if((t=Go(t))instanceof tb)return t._internalPath;if("string"==typeof t)return wb(e,t);throw _b("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const vb=new RegExp("[~\\*/\\[\\]]");function wb(e,t,n){if(t.search(vb)>=0)throw _b(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new tb(...t.split("."))._internalPath}catch(r){throw _b(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function _b(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new lg(cg.INVALID_ARGUMENT,a+e+c)}function bb(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class Eb{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new K_(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Tb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ib("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Tb extends Eb{data(){return super.data()}}function Ib(e,t){return"string"==typeof t?wb(e,t):t instanceof tb?t._internalPath:t._delegate._internalPath}
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
 */class Sb{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kb extends Eb{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ab(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ib("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Ab extends kb{data(e={}){return super.data(e)}}class Cb{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Sb(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Ab(this._firestore,this._userDataWriter,n.key,n,new Sb(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new lg(cg.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new Ab(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Sb(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Ab(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Sb(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Rb(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Rb(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return mg()}}
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
 */function Nb(e,...t){for(const n of t)e=n._apply(e);return e}class Ob extends class{}{constructor(e,t){super(),this.Qc=e,this.zc=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new lg(cg.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new lg(cg.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Em(t,n);return function(e,t){if(null===Nm(e)){const n=Om(e);null!==n&&function(e,t,n){if(!n.isEqual(t))throw new lg(cg.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
 */(0,n,t.field)}}(e,r),r}(e._query,this.Qc,this.zc);return new G_(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new km(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Db(e,t="asc"){const n=t,r=Ib("orderBy",e);return new Ob(r,n)}class xb extends class{convertValue(e,t="none"){switch(zg(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Mg(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ug(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw mg()}}convertObject(e,t){const n={};return kg(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new ib(Mg(e.latitude),Mg(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Vg(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(jg(e));default:return null}}convertTimestamp(e){const t=Pg(e);return new Tg(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Rg.fromString(e);yg(wv(n));const r=new D_(n.get(1),n.get(3)),i=new $g(n.popFirst(5));return r.isEqual(t)||fg(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */{constructor(e){super(),this.firestore=e}convertBytes(e){return new nb(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new K_(this.firestore,null,t)}}function Lb(e){e=$_(e,G_);const t=$_(e.firestore,Y_),n=Z_(t),r=new xb(t);return function(e){if(Rm(e)&&0===e.explicitOrderBy.length)throw new lg(cg.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),N_(n,e._query).then((n=>new Cb(t,r,e,n)))}function Pb(e,t){const n=$_(e.firestore,Y_),r=function(e,t,...n){if(e=Go(e),1===arguments.length&&(t=_g.u()),V_("doc","path",t),e instanceof H_){const r=Rg.fromString(t,...n);return j_(r),new K_(e,null,new $g(r))}{if(!(e instanceof K_||e instanceof W_))throw new lg(cg.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Rg.fromString(t,...n));return j_(r),new K_(e.firestore,e instanceof W_?e.converter:null,new $g(r))}}(e),i=function(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}(e.converter,t);return function(e,t){return function(e,t){const n=new _v;return e.asyncQueue.enqueueAndForget((async()=>a_(await function(e){return C_(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(Z_(e),t)}(n,[hb(ub(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,ry.exists(!1))]).then((()=>r))}function Mb(){return new db("serverTimestamp")}og="9.0.0-beta.8",da(new Wo("firestore-exp",((e,{options:t})=>{const n=e.getProvider("app-exp").getImmediate(),r=new Y_(n,e.getProvider("auth-internal"));return t=Object.assign({useFetchStreams:!0},t),r._setSettings(t),r}),"PUBLIC")),va("@firebase/firestore","0.0.900-exp.8b4d7550f",undefined);export{jc as A,Nb as B,J_ as C,Db as D,X_ as E,mr as F,Lb as G,ti as H,Ht as I,Fr as J,$u as K,ju as L,Bu as M,qu as N,wo as O,Es as P,ct as Q,$i as R,Ei as T,zu as a,Er as b,Sr as c,Or as d,$t as e,fr as f,Vl as g,xr as h,ma as i,Tn as j,Ke as k,st as l,Lr as m,Pb as n,Vc as o,qt as p,nr as q,nt as r,ji as s,c as t,bo as u,Ui as v,zt as w,Mb as x,Uc as y,Fc as z};
