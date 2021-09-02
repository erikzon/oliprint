function e(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=e("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"),n=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function r(e){if(b(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=r(S(i)?o(i):i);if(s)for(const e in s)t[e]=s[e]}return t}if(A(e))return e}const i=/;(?![^(]*\))/g,s=/:(.+)/;function o(e){const t={};return e.split(i).forEach((e=>{if(e){const n=e.split(s);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function a(e){let t="";if(S(e))t=e;else if(b(e))for(let n=0;n<e.length;n++){const r=a(e[n]);r&&(t+=r+" ")}else if(A(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const c=e=>null==e?"":A(e)?JSON.stringify(e,l,2):String(e),l=(e,t)=>E(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:T(t)?{[`Set(${t.size})`]:[...t.values()]}:!A(t)||b(t)||O(t)?t:String(t),u={},h=[],d=()=>{},f=()=>!1,p=/^on[^a-z]/,g=e=>p.test(e),m=e=>e.startsWith("onUpdate:"),y=Object.assign,v=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},w=Object.prototype.hasOwnProperty,_=(e,t)=>w.call(e,t),b=Array.isArray,E=e=>"[object Map]"===N(e),T=e=>"[object Set]"===N(e),I=e=>"function"==typeof e,S=e=>"string"==typeof e,k=e=>"symbol"==typeof e,A=e=>null!==e&&"object"==typeof e,C=e=>A(e)&&I(e.then)&&I(e.catch),R=Object.prototype.toString,N=e=>R.call(e),O=e=>"[object Object]"===N(e),D=e=>S(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,x=e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),L=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},P=/-(\w)/g,M=L((e=>e.replace(P,((e,t)=>t?t.toUpperCase():"")))),U=/\B([A-Z])/g,F=L((e=>e.replace(U,"-$1").toLowerCase())),V=L((e=>e.charAt(0).toUpperCase()+e.slice(1))),j=L((e=>e?`on${V(e)}`:"")),B=(e,t)=>e!==t&&(e==e||t==t),q=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},H=e=>{const t=parseFloat(e);return isNaN(t)?e:t},z=new WeakMap,K=[];let G;const W=Symbol(""),X=Symbol("");function Y(e,t=u){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const n=function(e,t){const n=function(){if(!n.active)return e();if(!K.includes(n)){Z(n);try{return te.push(ee),ee=!0,K.push(n),G=n,e()}finally{K.pop(),re(),G=K[K.length-1]}}};return n.id=J++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(e,t);return t.lazy||n(),n}function Q(e){e.active&&(Z(e),e.options.onStop&&e.options.onStop(),e.active=!1)}let J=0;function Z(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ee=!0;const te=[];function ne(){te.push(ee),ee=!1}function re(){const e=te.pop();ee=void 0===e||e}function ie(e,t,n){if(!ee||void 0===G)return;let r=z.get(e);r||z.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=new Set),i.has(G)||(i.add(G),G.deps.push(i))}function se(e,t,n,r,i,s){const o=z.get(e);if(!o)return;const a=new Set,c=e=>{e&&e.forEach((e=>{(e!==G||e.allowRecurse)&&a.add(e)}))};if("clear"===t)o.forEach(c);else if("length"===n&&b(e))o.forEach(((e,t)=>{("length"===t||t>=r)&&c(e)}));else switch(void 0!==n&&c(o.get(n)),t){case"add":b(e)?D(n)&&c(o.get("length")):(c(o.get(W)),E(e)&&c(o.get(X)));break;case"delete":b(e)||(c(o.get(W)),E(e)&&c(o.get(X)));break;case"set":E(e)&&c(o.get(W))}a.forEach((e=>{e.options.scheduler?e.options.scheduler(e):e()}))}const oe=e("__proto__,__v_isRef,__isVue"),ae=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(k)),ce=fe(),le=fe(!1,!0),ue=fe(!0),he=de();function de(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{const n=Array.prototype[t];e[t]=function(...e){const t=Je(this);for(let n=0,i=this.length;n<i;n++)ie(t,0,n+"");const r=n.apply(t,e);return-1===r||!1===r?n.apply(t,e.map(Je)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{const n=Array.prototype[t];e[t]=function(...e){ne();const t=n.apply(this,e);return re(),t}})),e}function fe(e=!1,t=!1){return function(n,r,i){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&i===(e?t?He:$e:t?qe:Be).get(n))return n;const s=b(n);if(!e&&s&&_(he,r))return Reflect.get(he,r,i);const o=Reflect.get(n,r,i);if(k(r)?ae.has(r):oe(r))return o;if(e||ie(n,0,r),t)return o;if(tt(o)){return!s||!D(r)?o.value:o}return A(o)?e?Ge(o):Ke(o):o}}function pe(e=!1){return function(t,n,r,i){let s=t[n];if(!e&&(r=Je(r),s=Je(s),!b(t)&&tt(s)&&!tt(r)))return s.value=r,!0;const o=b(t)&&D(n)?Number(n)<t.length:_(t,n),a=Reflect.set(t,n,r,i);return t===Je(i)&&(o?B(r,s)&&se(t,"set",n,r):se(t,"add",n,r)),a}}const ge={get:ce,set:pe(),deleteProperty:function(e,t){const n=_(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&se(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return k(t)&&ae.has(t)||ie(e,0,t),n},ownKeys:function(e){return ie(e,0,b(e)?"length":W),Reflect.ownKeys(e)}},me={get:ue,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},ye=y({},ge,{get:le,set:pe(!0)}),ve=e=>A(e)?Ke(e):e,we=e=>A(e)?Ge(e):e,_e=e=>e,be=e=>Reflect.getPrototypeOf(e);function Ee(e,t,n=!1,r=!1){const i=Je(e=e.__v_raw),s=Je(t);t!==s&&!n&&ie(i,0,t),!n&&ie(i,0,s);const{has:o}=be(i),a=r?_e:n?we:ve;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Te(e,t=!1){const n=this.__v_raw,r=Je(n),i=Je(e);return e!==i&&!t&&ie(r,0,e),!t&&ie(r,0,i),e===i?n.has(e):n.has(e)||n.has(i)}function Ie(e,t=!1){return e=e.__v_raw,!t&&ie(Je(e),0,W),Reflect.get(e,"size",e)}function Se(e){e=Je(e);const t=Je(this);return be(t).has.call(t,e)||(t.add(e),se(t,"add",e,e)),this}function ke(e,t){t=Je(t);const n=Je(this),{has:r,get:i}=be(n);let s=r.call(n,e);s||(e=Je(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?B(t,o)&&se(n,"set",e,t):se(n,"add",e,t),this}function Ae(e){const t=Je(this),{has:n,get:r}=be(t);let i=n.call(t,e);i||(e=Je(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&se(t,"delete",e,void 0),s}function Ce(){const e=Je(this),t=0!==e.size,n=e.clear();return t&&se(e,"clear",void 0,void 0),n}function Re(e,t){return function(n,r){const i=this,s=i.__v_raw,o=Je(s),a=t?_e:e?we:ve;return!e&&ie(o,0,W),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function Ne(e,t,n){return function(...r){const i=this.__v_raw,s=Je(i),o=E(s),a="entries"===e||e===Symbol.iterator&&o,c="keys"===e&&o,l=i[e](...r),u=n?_e:t?we:ve;return!t&&ie(s,0,c?X:W),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Oe(e){return function(...t){return"delete"!==e&&this}}function De(){const e={get(e){return Ee(this,e)},get size(){return Ie(this)},has:Te,add:Se,set:ke,delete:Ae,clear:Ce,forEach:Re(!1,!1)},t={get(e){return Ee(this,e,!1,!0)},get size(){return Ie(this)},has:Te,add:Se,set:ke,delete:Ae,clear:Ce,forEach:Re(!1,!0)},n={get(e){return Ee(this,e,!0)},get size(){return Ie(this,!0)},has(e){return Te.call(this,e,!0)},add:Oe("add"),set:Oe("set"),delete:Oe("delete"),clear:Oe("clear"),forEach:Re(!0,!1)},r={get(e){return Ee(this,e,!0,!0)},get size(){return Ie(this,!0)},has(e){return Te.call(this,e,!0)},add:Oe("add"),set:Oe("set"),delete:Oe("delete"),clear:Oe("clear"),forEach:Re(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((i=>{e[i]=Ne(i,!1,!1),n[i]=Ne(i,!0,!1),t[i]=Ne(i,!1,!0),r[i]=Ne(i,!0,!0)})),[e,n,t,r]}const[xe,Le,Pe,Me]=De();function Ue(e,t){const n=t?e?Me:Pe:e?Le:xe;return(t,r,i)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(_(n,r)&&r in t?n:t,r,i)}const Fe={get:Ue(!1,!1)},Ve={get:Ue(!1,!0)},je={get:Ue(!0,!1)},Be=new WeakMap,qe=new WeakMap,$e=new WeakMap,He=new WeakMap;function ze(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>N(e).slice(8,-1))(e))}function Ke(e){return e&&e.__v_isReadonly?e:We(e,!1,ge,Fe,Be)}function Ge(e){return We(e,!0,me,je,$e)}function We(e,t,n,r,i){if(!A(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=ze(e);if(0===o)return e;const a=new Proxy(e,2===o?r:n);return i.set(e,a),a}function Xe(e){return Ye(e)?Xe(e.__v_raw):!(!e||!e.__v_isReactive)}function Ye(e){return!(!e||!e.__v_isReadonly)}function Qe(e){return Xe(e)||Ye(e)}function Je(e){return e&&Je(e.__v_raw)||e}function Ze(e){return $(e,"__v_skip",!0),e}const et=e=>A(e)?Ke(e):e;function tt(e){return Boolean(e&&!0===e.__v_isRef)}function nt(e){return it(e)}class rt{constructor(e,t){this._rawValue=e,this._shallow=t,this.__v_isRef=!0,this._value=t?e:et(e)}get value(){return ie(Je(this),0,"value"),this._value}set value(e){B(Je(e),this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:et(e),se(Je(this),"set","value",e))}}function it(e,t=!1){return tt(e)?e:new rt(e,t)}function st(e){return tt(e)?e.value:e}const ot={get:(e,t,n)=>st(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return tt(i)&&!tt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function at(e){return Xe(e)?e:new Proxy(e,ot)}function ct(e){const t=b(e)?new Array(e.length):{};for(const n in e)t[n]=ut(e,n);return t}class lt{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function ut(e,t){return tt(e[t])?e[t]:new lt(e,t)}class ht{constructor(e,t,n){this._setter=t,this._dirty=!0,this.__v_isRef=!0,this.effect=Y(e,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,se(Je(this),"set","value"))}}),this.__v_isReadonly=n}get value(){const e=Je(this);return e._dirty&&(e._value=this.effect(),e._dirty=!1),ie(e,0,"value"),e._value}set value(e){this._setter(e)}}function dt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){pt(s,t,n)}return i}function ft(e,t,n,r){if(I(e)){const i=dt(e,t,n,r);return i&&C(i)&&i.catch((e=>{pt(e,t,n)})),i}const i=[];for(let s=0;s<e.length;s++)i.push(ft(e[s],t,n,r));return i}function pt(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const i=t.proxy,s=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void dt(o,null,10,[e,i,s])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let gt=!1,mt=!1;const yt=[];let vt=0;const wt=[];let _t=null,bt=0;const Et=[];let Tt=null,It=0;const St=Promise.resolve();let kt=null,At=null;function Ct(e){const t=kt||St;return e?t.then(this?e.bind(this):e):t}function Rt(e){if(!(yt.length&&yt.includes(e,gt&&e.allowRecurse?vt+1:vt)||e===At)){const t=function(e){let t=vt+1,n=yt.length;const r=Lt(e);for(;t<n;){const e=t+n>>>1;Lt(yt[e])<r?t=e+1:n=e}return t}(e);t>-1?yt.splice(t,0,e):yt.push(e),Nt()}}function Nt(){gt||mt||(mt=!0,kt=St.then(Pt))}function Ot(e,t,n,r){b(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),Nt()}function Dt(e,t=null){if(wt.length){for(At=t,_t=[...new Set(wt)],wt.length=0,bt=0;bt<_t.length;bt++)_t[bt]();_t=null,bt=0,At=null,Dt(e,t)}}function xt(e){if(Et.length){const e=[...new Set(Et)];if(Et.length=0,Tt)return void Tt.push(...e);for(Tt=e,Tt.sort(((e,t)=>Lt(e)-Lt(t))),It=0;It<Tt.length;It++)Tt[It]();Tt=null,It=0}}const Lt=e=>null==e.id?1/0:e.id;function Pt(e){mt=!1,gt=!0,Dt(e),yt.sort(((e,t)=>Lt(e)-Lt(t)));try{for(vt=0;vt<yt.length;vt++){const e=yt[vt];e&&!1!==e.active&&dt(e,null,14)}}finally{vt=0,yt.length=0,xt(),gt=!1,kt=null,(yt.length||wt.length||Et.length)&&Pt(e)}}function Mt(e,t,...n){const r=e.vnode.props||u;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:t,trim:s}=r[e]||u;s?i=n.map((e=>e.trim())):t&&(i=n.map(H))}let a,c=r[a=j(t)]||r[a=j(M(t))];!c&&s&&(c=r[a=j(F(t))]),c&&ft(c,e,6,i);const l=r[a+"Once"];if(l){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,ft(l,e,6,i)}}function Ut(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let o={},a=!1;if(!I(e)){const r=e=>{const n=Ut(e,t,!0);n&&(a=!0,y(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||a?(b(s)?s.forEach((e=>o[e]=null)):y(o,s),r.set(e,o),o):(r.set(e,null),null)}function Ft(e,t){return!(!e||!g(t))&&(t=t.slice(2).replace(/Once$/,""),_(e,t[0].toLowerCase()+t.slice(1))||_(e,F(t))||_(e,t))}let Vt=null,jt=null;function Bt(e){const t=Vt;return Vt=e,jt=e&&e.type.__scopeId||null,t}function qt(e){jt=e}function $t(){jt=null}const Ht=e=>zt;function zt(e,t=Vt,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Ir(-1);const i=Bt(t),s=e(...n);return Bt(i),r._d&&Ir(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function Kt(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:g}=e;let y;const v=Bt(e);try{let e;if(4&n.shapeFlag){const t=i||r;y=Pr(u.call(t,t,h,s,f,d,p)),e=c}else{const n=t;0,y=Pr(n.length>1?n(s,{attrs:c,slots:a,emit:l}):n(s,null)),e=t.props?c:Gt(c)}let v=y;if(e&&!1!==g){const t=Object.keys(e),{shapeFlag:n}=v;t.length&&(1&n||6&n)&&(o&&t.some(m)&&(e=Wt(e,o)),v=Dr(v,e))}0,n.dirs&&(v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),y=v}catch(w){_r.length=0,pt(w,e,1),y=Or(vr)}return Bt(v),y}const Gt=e=>{let t;for(const n in e)("class"===n||"style"===n||g(n))&&((t||(t={}))[n]=e[n]);return t},Wt=(e,t)=>{const n={};for(const r in e)m(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Xt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Ft(n,s))return!0}return!1}function Yt(e,t){if(Hr){let n=Hr.provides;const r=Hr.parent&&Hr.parent.provides;r===n&&(n=Hr.provides=Object.create(r)),n[e]=t}else;}function Qt(e,t,n=!1){const r=Hr||Vt;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&I(t)?t.call(r.proxy):t}}const Jt={};function Zt(e,t,n){return en(e,t,n)}function en(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=u,a=Hr){let c,l,h=!1,f=!1;if(tt(e)?(c=()=>e.value,h=!!e._shallow):Xe(e)?(c=()=>e,r=!0):b(e)?(f=!0,h=e.some(Xe),c=()=>e.map((e=>tt(e)?e.value:Xe(e)?rn(e):I(e)?dt(e,a,2):void 0))):c=I(e)?t?()=>dt(e,a,2):()=>{if(!a||!a.isUnmounted)return l&&l(),ft(e,a,3,[p])}:d,t&&r){const e=c;c=()=>rn(e())}let p=e=>{l=w.options.onStop=()=>{dt(e,a,4)}},g=f?[]:Jt;const m=()=>{if(w.active)if(t){const e=w();(r||h||(f?e.some(((e,t)=>B(e,g[t]))):B(e,g)))&&(l&&l(),ft(t,a,3,[e,g===Jt?void 0:g,p]),g=e)}else w()};let y;m.allowRecurse=!!t,y="sync"===i?m:"post"===i?()=>cr(m,a&&a.suspense):()=>{!a||a.isMounted?function(e){Ot(e,_t,wt,bt)}(m):m()};const w=Y(c,{lazy:!0,onTrack:s,onTrigger:o,scheduler:y});return Jr(w,a),t?n?m():g=w():"post"===i?cr(w,a&&a.suspense):w(),()=>{Q(w),a&&v(a.effects,w)}}function tn(e,t,n){const r=this.proxy,i=S(e)?e.includes(".")?nn(r,e):()=>r[e]:e.bind(r,r);let s;return I(t)?s=t:(s=t.handler,n=t),en(i,s.bind(r),n,this)}function nn(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function rn(e,t=new Set){if(!A(e)||t.has(e)||e.__v_skip)return e;if(t.add(e),tt(e))rn(e.value,t);else if(b(e))for(let n=0;n<e.length;n++)rn(e[n],t);else if(T(e)||E(e))e.forEach((e=>{rn(e,t)}));else if(O(e))for(const n in e)rn(e[n],t);return e}const sn=[Function,Array],on={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},setup(e,{slots:t}){const n=zr(),r=function(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tn((()=>{e.isMounted=!0})),kn((()=>{e.isUnmounting=!0})),e}();let i;return()=>{const s=t.default&&dn(t.default(),!0);if(!s||!s.length)return;const o=Je(e),{mode:a}=o,c=s[0];if(r.isLeaving)return ln(c);const l=un(c);if(!l)return ln(c);const u=cn(l,o,r,n);hn(l,u);const h=n.subTree,d=h&&un(h);let f=!1;const{getTransitionKey:p}=l.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,f=!0)}if(d&&d.type!==vr&&(!Ar(l,d)||f)){const e=cn(d,o,r,n);if(hn(d,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},ln(c);"in-out"===a&&l.type!==vr&&(e.delayLeave=(e,t,n)=>{an(r,d)[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return c}}};function an(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function cn(e,t,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:y,onAppearCancelled:v}=t,w=String(e.key),_=an(n,e),b=(e,t)=>{e&&ft(e,r,9,t)},E={mode:s,persisted:o,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=g||a}t._leaveCb&&t._leaveCb(!0);const s=_[w];s&&Ar(e,s)&&s.el._leaveCb&&s.el._leaveCb(),b(r,[t])},enter(e){let t=c,r=l,s=u;if(!n.isMounted){if(!i)return;t=m||c,r=y||l,s=v||u}let o=!1;const a=e._enterCb=t=>{o||(o=!0,b(t?s:r,[e]),E.delayedLeave&&E.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();b(h,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),b(n?p:f,[t]),t._leaveCb=void 0,_[i]===e&&delete _[i])};_[i]=e,d?(d(t,o),d.length<=1&&o()):o()},clone:e=>cn(e,t,n,r)};return E}function ln(e){if(gn(e))return(e=Dr(e)).children=null,e}function un(e){return gn(e)?e.children?e.children[0]:void 0:e}function hn(e,t){6&e.shapeFlag&&e.component?hn(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function dn(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===mr?(128&s.patchFlag&&r++,n=n.concat(dn(s.children,t))):(t||s.type!==vr)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function fn(e){return I(e)?{setup:e,name:e.name}:e}const pn=e=>!!e.type.__asyncLoader,gn=e=>e.type.__isKeepAlive;function mn(e,t){vn(e,"a",t)}function yn(e,t){vn(e,"da",t)}function vn(e,t,n=Hr){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}e()});if(_n(t,r,n),n){let e=n.parent;for(;e&&e.parent;)gn(e.parent.vnode)&&wn(r,t,n,e),e=e.parent}}function wn(e,t,n,r){const i=_n(t,e,r,!0);An((()=>{v(r[t],i)}),n)}function _n(e,t,n=Hr,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;ne(),Kr(n);const i=ft(t,n,e,r);return Kr(null),re(),i});return r?i.unshift(s):i.push(s),s}}const bn=e=>(t,n=Hr)=>(!Wr||"sp"===e)&&_n(e,t,n),En=bn("bm"),Tn=bn("m"),In=bn("bu"),Sn=bn("u"),kn=bn("bum"),An=bn("um"),Cn=bn("sp"),Rn=bn("rtg"),Nn=bn("rtc");function On(e,t=Hr){_n("ec",e,t)}let Dn=!0;function xn(e){const t=Mn(e),n=e.proxy,r=e.ctx;Dn=!1,t.beforeCreate&&Ln(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:w,destroyed:_,unmounted:E,render:T,renderTracked:S,renderTriggered:k,errorCaptured:C,serverPrefetch:R,expose:N,inheritAttrs:O,components:D,directives:x,filters:L}=t;if(l&&function(e,t,n=d){b(e)&&(e=jn(e));for(const r in e){const n=e[r];A(n)?t[r]="default"in n?Qt(n.from||r,n.default,!0):Qt(n.from||r):t[r]=Qt(n)}}(l,r,null),o)for(const d in o){const e=o[d];I(e)&&(r[d]=e.bind(n))}if(i){const t=i.call(n,n);A(t)&&(e.data=Ke(t))}if(Dn=!0,s)for(const b in s){const e=s[b],t=ei({get:I(e)?e.bind(n,n):I(e.get)?e.get.bind(n,n):d,set:!I(e)&&I(e.set)?e.set.bind(n):d});Object.defineProperty(r,b,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e})}if(a)for(const d in a)Pn(a[d],r,n,d);if(c){const e=I(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{Yt(t,e[t])}))}function P(e,t){b(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(u&&Ln(u,e,"c"),P(En,h),P(Tn,f),P(In,p),P(Sn,g),P(mn,m),P(yn,y),P(On,C),P(Nn,S),P(Rn,k),P(kn,w),P(An,E),P(Cn,R),b(N))if(N.length){const t=e.exposed||(e.exposed={});N.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===d&&(e.render=T),null!=O&&(e.inheritAttrs=O),D&&(e.components=D),x&&(e.directives=x)}function Ln(e,t,n){ft(b(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Pn(e,t,n,r){const i=r.includes(".")?nn(n,r):()=>n[r];if(S(e)){const n=t[e];I(n)&&Zt(i,n)}else if(I(e))Zt(i,e.bind(n));else if(A(e))if(b(e))e.forEach((e=>Pn(e,t,n,r)));else{const r=I(e.handler)?e.handler.bind(n):t[e.handler];I(r)&&Zt(i,r,e)}}function Mn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>Un(c,e,o,!0))),Un(c,t,o)):c=t,s.set(t,c),c}function Un(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Un(e,s,n,!0),i&&i.forEach((t=>Un(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Fn[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Fn={data:Vn,props:qn,emits:qn,methods:qn,computed:qn,beforeCreate:Bn,created:Bn,beforeMount:Bn,mounted:Bn,beforeUpdate:Bn,updated:Bn,beforeDestroy:Bn,destroyed:Bn,activated:Bn,deactivated:Bn,errorCaptured:Bn,serverPrefetch:Bn,components:qn,directives:qn,watch:function(e,t){if(!e)return t;if(!t)return e;const n=y(Object.create(null),e);for(const r in t)n[r]=Bn(e[r],t[r]);return n},provide:Vn,inject:function(e,t){return qn(jn(e),jn(t))}};function Vn(e,t){return t?e?function(){return y(I(e)?e.call(this,this):e,I(t)?t.call(this,this):t)}:t:e}function jn(e){if(b(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Bn(e,t){return e?[...new Set([].concat(e,t))]:t}function qn(e,t){return e?y(y(Object.create(null),e),t):t}function $n(e,t,n,r=!1){const i={},s={};$(s,Cr,1),e.propsDefaults=Object.create(null),Hn(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:We(i,!1,ye,Ve,qe):e.type.props?e.props=i:e.props=s,e.attrs=s}function Hn(e,t,n,r){const[i,s]=e.propsOptions;let o,a=!1;if(t)for(let c in t){if(x(c))continue;const l=t[c];let u;i&&_(i,u=M(c))?s&&s.includes(u)?(o||(o={}))[u]=l:n[u]=l:Ft(e.emitsOptions,c)||l!==r[c]&&(r[c]=l,a=!0)}if(s){const t=Je(n),r=o||u;for(let o=0;o<s.length;o++){const a=s[o];n[a]=zn(i,t,a,r[a],e,!_(r,a))}}return a}function zn(e,t,n,r,i,s){const o=e[n];if(null!=o){const e=_(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&I(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(Kr(i),r=s[n]=e.call(null,t),Kr(null))}else r=e}o[0]&&(s&&!e?r=!1:!o[1]||""!==r&&r!==F(n)||(r=!0))}return r}function Kn(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let c=!1;if(!I(e)){const r=e=>{c=!0;const[n,r]=Kn(e,t,!0);y(o,n),r&&a.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!c)return r.set(e,h),h;if(b(s))for(let h=0;h<s.length;h++){const e=M(s[h]);Gn(e)&&(o[e]=u)}else if(s)for(const u in s){const e=M(u);if(Gn(e)){const t=s[u],n=o[e]=b(t)||I(t)?{type:t}:t;if(n){const t=Yn(Boolean,n.type),r=Yn(String,n.type);n[0]=t>-1,n[1]=r<0||t<r,(t>-1||_(n,"default"))&&a.push(e)}}}const l=[o,a];return r.set(e,l),l}function Gn(e){return"$"!==e[0]}function Wn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function Xn(e,t){return Wn(e)===Wn(t)}function Yn(e,t){return b(t)?t.findIndex((t=>Xn(t,e))):I(t)&&Xn(t,e)?0:-1}const Qn=e=>"_"===e[0]||"$stable"===e,Jn=e=>b(e)?e.map(Pr):[Pr(e)],Zn=(e,t,n)=>{const r=zt((e=>Jn(t(e))),n);return r._c=!1,r},er=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Qn(i))continue;const n=e[i];if(I(n))t[i]=Zn(0,n,r);else if(null!=n){const e=Jn(n);t[i]=()=>e}}},tr=(e,t)=>{const n=Jn(t);e.slots.default=()=>n};function nr(e,t){if(null===Vt)return e;const n=Vt.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[e,s,o,a=u]=t[i];I(e)&&(e={mounted:e,updated:e}),r.push({dir:e,instance:n,value:s,oldValue:void 0,arg:o,modifiers:a})}return e}function rr(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(ne(),ft(c,n,8,[e.el,a,e,t]),re())}}function ir(){return{app:null,config:{isNativeTag:f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sr=0;function or(e,t){return function(n,r=null){null==r||A(r)||(r=null);const i=ir(),s=new Set;let o=!1;const a=i.app={_uid:sr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:ni,get config(){return i.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&I(e.install)?(s.add(e),e.install(a,...t)):I(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(i.mixins.includes(e)||i.mixins.push(e),a),component:(e,t)=>t?(i.components[e]=t,a):i.components[e],directive:(e,t)=>t?(i.directives[e]=t,a):i.directives[e],mount(s,c,l){if(!o){const u=Or(n,r);return u.appContext=i,c&&t?t(u,s):e(u,s,l),o=!0,a._container=s,s.__vue_app__=a,u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(i.provides[e]=t,a)};return a}}const ar={scheduler:Rt,allowRecurse:!0},cr=function(e,t){t&&t.pendingBranch?b(e)?t.effects.push(...e):t.effects.push(e):Ot(e,Tt,Et,It)},lr=(e,t,n,r,i=!1)=>{if(b(e))return void e.forEach(((e,s)=>lr(e,t&&(b(t)?t[s]:t),n,r,i)));if(pn(r)&&!i)return;const s=4&r.shapeFlag?Qr(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=e,l=t&&t.r,h=a.refs===u?a.refs={}:a.refs,d=a.setupState;if(null!=l&&l!==c&&(S(l)?(h[l]=null,_(d,l)&&(d[l]=null)):tt(l)&&(l.value=null)),S(c)){const e=()=>{h[c]=o,_(d,c)&&(d[c]=o)};o?(e.id=-1,cr(e,n)):e()}else if(tt(c)){const e=()=>{c.value=o};o?(e.id=-1,cr(e,n)):e()}else I(c)&&dt(c,a,12,[o,h])};function ur(e){return function(e,t){const{insert:n,remove:r,patchProp:i,forcePatchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:p,nextSibling:g,setScopeId:m=d,cloneNode:v,insertStaticContent:w}=e,b=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!1)=>{e&&!Ar(e,t)&&(r=oe(e),J(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case yr:E(e,t,n,r);break;case vr:T(e,t,n,r);break;case wr:null==e&&I(t,n,r,o);break;case mr:U(e,t,n,r,i,s,o,a,c);break;default:1&h?A(e,t,n,r,i,s,o,a,c):6&h?V(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,s,o,a,c,ce)}null!=u&&i&&lr(u,e&&e.ref,s,t||e,!t)},E=(e,t,r,i)=>{if(null==e)n(t.el=a(t.children),r,i);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},T=(e,t,r,i)=>{null==e?n(t.el=c(t.children||""),r,i):t.el=e.el},I=(e,t,n,r)=>{const i=w(e.children,t,n,r,e.staticCache);e.el||(e.staticCache=i),e.el=i[0],e.anchor=i[i.length-1]},S=({el:e,anchor:t},r,i)=>{let s;for(;e&&e!==t;)s=g(e),n(e,r,i),e=s;n(t,r,i)},k=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=g(e),r(e),e=n;r(t)},A=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?R(t,n,r,i,s,o,a,c):D(e,t,i,s,o,a,c)},R=(e,t,r,s,a,c,l,u)=>{let h,d;const{type:p,props:g,shapeFlag:m,transition:y,patchFlag:w,dirs:_}=e;if(e.el&&void 0!==v&&-1===w)h=e.el=v(e.el);else{if(h=e.el=o(e.type,c,g&&g.is,g),8&m?f(h,e.children):16&m&&O(e.children,h,null,s,a,c&&"foreignObject"!==p,l,u||!!e.dynamicChildren),_&&rr(e,null,s,"created"),g){for(const t in g)x(t)||i(h,t,null,g[t],c,e.children,s,a,ie);(d=g.onVnodeBeforeMount)&&hr(d,s,e)}N(h,e,e.scopeId,l,s)}_&&rr(e,null,s,"beforeMount");const b=(!a||a&&!a.pendingBranch)&&y&&!y.persisted;b&&y.beforeEnter(h),n(h,t,r),((d=g&&g.onVnodeMounted)||b||_)&&cr((()=>{d&&hr(d,s,e),b&&y.enter(h),_&&rr(e,null,s,"mounted")}),a)},N=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){if(t===i.subTree){const t=i.vnode;N(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?Mr(e[l]):Pr(e[l]);b(null,c,t,n,r,i,s,o,a)}},D=(e,t,n,r,o,a,c)=>{const l=t.el=e.el;let{patchFlag:h,dynamicChildren:d,dirs:p}=t;h|=16&e.patchFlag;const g=e.props||u,m=t.props||u;let y;if((y=m.onVnodeBeforeUpdate)&&hr(y,n,t,e),p&&rr(t,e,n,"beforeUpdate"),h>0){if(16&h)P(l,t,g,m,n,r,o);else if(2&h&&g.class!==m.class&&i(l,"class",null,m.class,o),4&h&&i(l,"style",g.style,m.style,o),8&h){const a=t.dynamicProps;for(let t=0;t<a.length;t++){const c=a[t],u=g[c],h=m[c];(h!==u||s&&s(l,c))&&i(l,c,u,h,o,e.children,n,r,ie)}}1&h&&e.children!==t.children&&f(l,t.children)}else c||null!=d||P(l,t,g,m,n,r,o);const v=o&&"foreignObject"!==t.type;d?L(e.dynamicChildren,d,l,n,r,v,a):c||K(e,t,l,null,n,r,v,a,!1),((y=m.onVnodeUpdated)||p)&&cr((()=>{y&&hr(y,n,t,e),p&&rr(t,e,n,"updated")}),r)},L=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===mr||!Ar(c,l)||6&c.shapeFlag||64&c.shapeFlag)?p(c.el):n;b(c,l,u,null,r,i,s,o,!0)}},P=(e,t,n,r,o,a,c)=>{if(n!==r){for(const l in r){if(x(l))continue;const u=r[l],h=n[l];(u!==h||s&&s(e,l))&&i(e,l,h,u,c,t.children,o,a,ie)}if(n!==u)for(const s in n)x(s)||s in r||i(e,s,n[s],null,c,t.children,o,a,ie)}},U=(e,t,r,i,s,o,c,l,u)=>{const h=t.el=e?e.el:a(""),d=t.anchor=e?e.anchor:a("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;p&&(u=!0),g&&(l=l?l.concat(g):g),null==e?(n(h,r,i),n(d,r,i),O(t.children,r,d,s,o,c,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(L(e.dynamicChildren,p,r,s,o,c,l),(null!=t.key||s&&t===s.subTree)&&dr(e,t,!0)):K(e,t,r,d,s,o,c,l,u)},V=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):j(t,n,r,i,s,o,c):B(e,t,c)},j=(e,t,n,r,i,s,o)=>{const a=e.component=function(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||qr,s={uid:$r++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,update:null,render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,effects:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kn(r,i),emitsOptions:Ut(r,i),emit:null,emitted:null,propsDefaults:u,inheritAttrs:r.inheritAttrs,ctx:u,data:u,props:u,attrs:u,slots:u,refs:u,setupState:u,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Mt.bind(null,s),s}(e,r,i);if(gn(e)&&(a.ctx.renderer=ce),function(e,t=!1){Wr=t;const{props:n,children:r}=e.vnode,i=Gr(e);$n(e,n,i,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Je(t),$(t,"_",n)):er(t,e.slots={})}else e.slots={},t&&tr(e,t);$(e.slots,Cr,1)})(e,r);const s=i?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ze(new Proxy(e.ctx,jr));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=t||{}};return{attrs:e.attrs,slots:e.slots,emit:e.emit,expose:t}}(e):null;Hr=e,ne();const i=dt(r,e,0,[e.props,n]);if(re(),Hr=null,C(i)){const n=()=>{Hr=null};if(i.then(n,n),t)return i.then((t=>{Xr(e,t)})).catch((t=>{pt(t,e,0)}));e.asyncDep=i}else Xr(e,i)}else Yr(e)}(e,t):void 0;Wr=!1}(a),a.asyncDep){if(i&&i.registerDep(a,H),!e.el){const e=a.subTree=Or(vr);T(null,e,t,n)}}else H(a,e,t,n,i,s,o)},B=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Xt(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Xt(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Ft(l,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void z(r,t,n);r.next=t,function(e){const t=yt.indexOf(e);t>vt&&yt.splice(t,1)}(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},H=(e,t,n,r,i,s,o)=>{e.update=Y((function(){if(e.isMounted){let t,{next:n,bu:r,u:a,parent:c,vnode:l}=e,u=n;n?(n.el=l.el,z(e,n,o)):n=l,r&&q(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&hr(t,c,n,l);const h=Kt(e),d=e.subTree;e.subTree=h,b(d,h,p(d.el),oe(d),e,i,s),n.el=h.el,null===u&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,h.el),a&&cr(a,i),(t=n.props&&n.props.onVnodeUpdated)&&cr((()=>hr(t,c,n,l)),i)}else{let o;const{el:a,props:c}=t,{bm:l,m:u,parent:h}=e;if(l&&q(l),(o=c&&c.onVnodeBeforeMount)&&hr(o,h,t),a&&ue){const n=()=>{e.subTree=Kt(e),ue(a,e.subTree,e,i,null)};pn(t)?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=Kt(e);b(null,o,n,r,e,i,s),t.el=o.el}if(u&&cr(u,i),o=c&&c.onVnodeMounted){const e=t;cr((()=>hr(o,h,e)),i)}256&t.shapeFlag&&e.a&&cr(e.a,i),e.isMounted=!0,t=n=r=null}}),ar)},z=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=Je(i),[c]=e.propsOptions;let l=!1;if(!(r||o>0)||16&o){let r;Hn(e,t,i,s)&&(l=!0);for(const s in a)t&&(_(t,s)||(r=F(s))!==s&&_(t,r))||(c?!n||void 0===n[s]&&void 0===n[r]||(i[s]=zn(c,a,s,void 0,e,!0)):delete i[s]);if(s!==a)for(const e in s)t&&_(t,e)||(delete s[e],l=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];const u=t[o];if(c)if(_(s,o))u!==s[o]&&(s[o]=u,l=!0);else{const t=M(o);i[t]=zn(c,a,t,u,e,!1)}else u!==s[o]&&(s[o]=u,l=!0)}}l&&se(e,"set","$attrs")}(e,t.props,r,n),((e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=u;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:(y(i,t),n||1!==e||delete i._):(s=!t.$stable,er(t,i)),o=t}else t&&(tr(e,t),o={default:1});if(s)for(const a in i)Qn(a)||a in o||delete i[a]})(e,t.children,n),ne(),Dt(void 0,e.update),re()},K=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:d,shapeFlag:p}=t;if(d>0){if(128&d)return void W(l,h,n,r,i,s,o,a,c);if(256&d)return void G(l,h,n,r,i,s,o,a,c)}8&p?(16&u&&ie(l,i,s),h!==l&&f(n,h)):16&u?16&p?W(l,h,n,r,i,s,o,a,c):ie(l,i,s,!0):(8&u&&f(n,""),16&p&&O(h,n,r,i,s,o,a,c))},G=(e,t,n,r,i,s,o,a,c)=>{t=t||h;const l=(e=e||h).length,u=t.length,d=Math.min(l,u);let f;for(f=0;f<d;f++){const r=t[f]=c?Mr(t[f]):Pr(t[f]);b(e[f],r,n,null,i,s,o,a,c)}l>u?ie(e,i,s,!0,!1,d):O(t,n,r,i,s,o,a,c,d)},W=(e,t,n,r,i,s,o,a,c)=>{let l=0;const u=t.length;let d=e.length-1,f=u-1;for(;l<=d&&l<=f;){const r=e[l],u=t[l]=c?Mr(t[l]):Pr(t[l]);if(!Ar(r,u))break;b(r,u,n,null,i,s,o,a,c),l++}for(;l<=d&&l<=f;){const r=e[d],l=t[f]=c?Mr(t[f]):Pr(t[f]);if(!Ar(r,l))break;b(r,l,n,null,i,s,o,a,c),d--,f--}if(l>d){if(l<=f){const e=f+1,h=e<u?t[e].el:r;for(;l<=f;)b(null,t[l]=c?Mr(t[l]):Pr(t[l]),n,h,i,s,o,a,c),l++}}else if(l>f)for(;l<=d;)J(e[l],i,s,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const e=t[l]=c?Mr(t[l]):Pr(t[l]);null!=e.key&&m.set(e.key,l)}let y,v=0;const w=f-g+1;let _=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=d;l++){const r=e[l];if(v>=w){J(r,i,s,!0);continue}let u;if(null!=r.key)u=m.get(r.key);else for(y=g;y<=f;y++)if(0===T[y-g]&&Ar(r,t[y])){u=y;break}void 0===u?J(r,i,s,!0):(T[u-g]=l+1,u>=E?E=u:_=!0,b(r,t[u],n,null,i,s,o,a,c),v++)}const I=_?function(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=(s+o)/2|0,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];for(;s-- >0;)n[s]=o,o=t[o];return n}(T):h;for(y=I.length-1,l=w-1;l>=0;l--){const e=g+l,h=t[e],d=e+1<u?t[e+1].el:r;0===T[l]?b(null,h,n,d,i,s,o,a,c):_&&(y<0||l!==I[y]?X(h,n,d,2):y--)}}},X=(e,t,r,i,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void X(e.component.subTree,t,r,i);if(128&u)return void e.suspense.move(t,r,i);if(64&u)return void a.move(e,t,r,ce);if(a===mr){n(o,t,r);for(let e=0;e<l.length;e++)X(l[e],t,r,i);return void n(e.anchor,t,r)}if(a===wr)return void S(e,t,r);if(2!==i&&1&u&&c)if(0===i)c.beforeEnter(o),n(o,t,r),cr((()=>c.enter(o)),s);else{const{leave:e,delayLeave:i,afterLeave:s}=c,a=()=>n(o,t,r),l=()=>{e(o,(()=>{a(),s&&s()}))};i?i(o,a,l):l()}else n(o,t,r)},J=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&lr(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d;let p;if((p=o&&o.onVnodeBeforeUnmount)&&hr(p,t,e),6&u)te(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&rr(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,ce,r):l&&(s!==mr||h>0&&64&h)?ie(l,t,n,!1,!0):(s===mr&&(128&h||256&h)||!i&&16&u)&&ie(c,t,n),r&&Z(e)}((p=o&&o.onVnodeUnmounted)||f)&&cr((()=>{p&&hr(p,t,e),f&&rr(e,null,t,"unmounted")}),n)},Z=e=>{const{type:t,el:n,anchor:i,transition:s}=e;if(t===mr)return void ee(n,i);if(t===wr)return void k(e);const o=()=>{r(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},ee=(e,t)=>{let n;for(;e!==t;)n=g(e),r(e),e=n;r(t)},te=(e,t,n)=>{const{bum:r,effects:i,update:s,subTree:o,um:a}=e;if(r&&q(r),i)for(let c=0;c<i.length;c++)Q(i[c]);s&&(Q(s),J(o,e,t,n)),a&&cr(a,t),cr((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},ie=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)J(e[o],t,n,r,i)},oe=e=>6&e.shapeFlag?oe(e.component.subTree):128&e.shapeFlag?e.suspense.next():g(e.anchor||e.el),ae=(e,t,n)=>{null==e?t._vnode&&J(t._vnode,null,null,!0):b(t._vnode||null,e,t,null,null,null,n),xt(),t._vnode=e},ce={p:b,um:J,m:X,r:Z,mt:j,mc:O,pc:K,pbc:L,n:oe,o:e};let le,ue;t&&([le,ue]=t(ce));return{render:ae,hydrate:le,createApp:or(ae,le)}}(e)}function hr(e,t,n,r=null){ft(e,t,7,[n,r])}function dr(e,t,n=!1){const r=e.children,i=t.children;if(b(r)&&b(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=Mr(i[s]),t.el=e.el),n||dr(e,t))}}function fr(e,t){return function(e,t,n=!0,r=!1){const i=Vt||Hr;if(i){const n=i.type;if("components"===e){const e=Zr(n);if(e&&(e===t||e===M(t)||e===V(M(t))))return n}const s=gr(i[e]||n[e],t)||gr(i.appContext[e],t);return!s&&r?n:s}}("components",e,!0,t)||e}const pr=Symbol();function gr(e,t){return e&&(e[t]||e[M(t)]||e[V(M(t))])}const mr=Symbol(void 0),yr=Symbol(void 0),vr=Symbol(void 0),wr=Symbol(void 0),_r=[];let br=null;function Er(e=!1){_r.push(br=e?null:[])}let Tr=1;function Ir(e){Tr+=e}function Sr(e,t,n,r,i){const s=Or(e,t,n,r,i,!0);return s.dynamicChildren=Tr>0?br||h:null,_r.pop(),br=_r[_r.length-1]||null,Tr>0&&br&&br.push(s),s}function kr(e){return!!e&&!0===e.__v_isVNode}function Ar(e,t){return e.type===t.type&&e.key===t.key}const Cr="__vInternal",Rr=({key:e})=>null!=e?e:null,Nr=({ref:e})=>null!=e?S(e)||tt(e)||I(e)?{i:Vt,r:e}:e:null,Or=function(e,t=null,n=null,i=0,s=null,o=!1){e&&e!==pr||(e=vr);if(kr(e)){const r=Dr(e,t,!0);return n&&Ur(r,n),r}c=e,I(c)&&"__vccOpts"in c&&(e=e.__vccOpts);var c;if(t){(Qe(t)||Cr in t)&&(t=y({},t));let{class:e,style:n}=t;e&&!S(e)&&(t.class=a(e)),A(n)&&(Qe(n)&&!b(n)&&(n=y({},n)),t.style=r(n))}const l=S(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:A(e)?4:I(e)?2:0,u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Rr(t),ref:t&&Nr(t),scopeId:jt,slotScopeIds:null,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,shapeFlag:l,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};Ur(u,n),128&l&&e.normalize(u);Tr>0&&!o&&br&&(i>0||6&l)&&32!==i&&br.push(u);return u};function Dr(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:c}=e,l=t?function(...e){const t=y({},e[0]);for(let n=1;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=a([t.class,i.class]));else if("style"===e)t.style=r([t.style,i.style]);else if(g(e)){const n=t[e],r=i[e];n!==r&&(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=i[e])}return t}(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Rr(l),ref:t&&t.ref?n&&s?b(s)?s.concat(Nr(t)):[s,Nr(t)]:Nr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,staticCache:e.staticCache,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==mr?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dr(e.ssContent),ssFallback:e.ssFallback&&Dr(e.ssFallback),el:e.el,anchor:e.anchor}}function xr(e=" ",t=0){return Or(yr,null,e,t)}function Lr(e="",t=!1){return t?(Er(),Sr(vr,null,e)):Or(vr,null,e)}function Pr(e){return null==e||"boolean"==typeof e?Or(vr):b(e)?Or(mr,null,e.slice()):"object"==typeof e?Mr(e):Or(yr,null,String(e))}function Mr(e){return null===e.el?e:Dr(e)}function Ur(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(b(t))n=16;else if("object"==typeof t){if(1&r||64&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Ur(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Cr in t?3===r&&Vt&&(1===Vt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Vt}}else I(t)?(t={default:t,_ctx:Vt},n=32):(t=String(t),64&r?(n=16,t=[xr(t)]):n=8);e.children=t,e.shapeFlag|=n}const Fr=e=>e?Gr(e)?Qr(e)||e.proxy:Fr(e.parent):null,Vr=y(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fr(e.parent),$root:e=>Fr(e.root),$emit:e=>e.emit,$options:e=>Mn(e),$forceUpdate:e=>()=>Rt(e.update),$nextTick:e=>Ct.bind(e.proxy),$watch:e=>tn.bind(e)}),jr={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=e;let l;if("$"!==t[0]){const a=o[t];if(void 0!==a)switch(a){case 0:return r[t];case 1:return i[t];case 3:return n[t];case 2:return s[t]}else{if(r!==u&&_(r,t))return o[t]=0,r[t];if(i!==u&&_(i,t))return o[t]=1,i[t];if((l=e.propsOptions[0])&&_(l,t))return o[t]=2,s[t];if(n!==u&&_(n,t))return o[t]=3,n[t];Dn&&(o[t]=4)}}const h=Vr[t];let d,f;return h?("$attrs"===t&&ie(e,0,t),h(e)):(d=a.__cssModules)&&(d=d[t])?d:n!==u&&_(n,t)?(o[t]=3,n[t]):(f=c.config.globalProperties,_(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;if(i!==u&&_(i,t))i[t]=n;else if(r!==u&&_(r,t))r[t]=n;else if(_(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return void 0!==n[o]||e!==u&&_(e,o)||t!==u&&_(t,o)||(a=s[0])&&_(a,o)||_(r,o)||_(Vr,o)||_(i.config.globalProperties,o)}},Br=y({},jr,{get(e,t){if(t!==Symbol.unscopables)return jr.get(e,t,e)},has:(e,n)=>"_"!==n[0]&&!t(n)}),qr=ir();let $r=0;let Hr=null;const zr=()=>Hr||Vt,Kr=e=>{Hr=e};function Gr(e){return 4&e.vnode.shapeFlag}let Wr=!1;function Xr(e,t,n){I(t)?e.render=t:A(t)&&(e.setupState=at(t)),Yr(e)}function Yr(e,t,n){const r=e.type;e.render||(e.render=r.render||d,e.render._rc&&(e.withProxy=new Proxy(e.ctx,Br))),Hr=e,ne(),xn(e),re(),Hr=null}function Qr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(at(Ze(e.exposed)),{get:(t,n)=>n in t?t[n]:n in Vr?Vr[n](e):void 0}))}function Jr(e,t=Hr){t&&(t.effects||(t.effects=[])).push(e)}function Zr(e){return I(e)&&e.displayName||e.name}function ei(e){const t=function(e){let t,n;return I(e)?(t=e,n=d):(t=e.get,n=e.set),new ht(t,n,I(e)||!e.set)}(e);return Jr(t.effect),t}function ti(e,t,n){const r=arguments.length;return 2===r?A(t)&&!b(t)?kr(t)?Or(e,null,[t]):Or(e,t):Or(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&kr(n)&&(n=[n]),Or(e,t,n))}const ni="3.1.4",ri="http://www.w3.org/2000/svg",ii="undefined"!=typeof document?document:null,si={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?ii.createElementNS(ri,e):ii.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>ii.createTextNode(e),createComment:e=>ii.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ii.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i){if(i){let e,r,s=0,o=i.length;for(;s<o;s++){const a=i[s].cloneNode(!0);0===s&&(e=a),s===o-1&&(r=a),t.insertBefore(a,n)}return[e,r]}const s=n?n.previousSibling:t.lastChild;if(n){let i,s=!1;n instanceof Element?i=n:(s=!0,i=r?ii.createElementNS(ri,"g"):ii.createElement("div"),t.insertBefore(i,n)),i.insertAdjacentHTML("beforebegin",e),s&&t.removeChild(i)}else t.insertAdjacentHTML("beforeend",e);let o=s?s.nextSibling:t.firstChild;const a=n?n.previousSibling:t.lastChild,c=[];for(;o&&(c.push(o),o!==a);)o=o.nextSibling;return c}};const oi=/\s*!important$/;function ai(e,t,n){if(b(n))n.forEach((n=>ai(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=li[t];if(n)return n;let r=M(t);if("filter"!==r&&r in e)return li[t]=r;r=V(r);for(let i=0;i<ci.length;i++){const n=ci[i]+r;if(n in e)return li[t]=n}return t}(e,t);oi.test(n)?e.setProperty(F(r),n.replace(oi,""),"important"):e[r]=n}}const ci=["Webkit","Moz","ms"],li={};const ui="http://www.w3.org/1999/xlink";let hi=Date.now,di=!1;if("undefined"!=typeof window){hi()>document.createEvent("Event").timeStamp&&(hi=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);di=!!(e&&Number(e[1])<=53)}let fi=0;const pi=Promise.resolve(),gi=()=>{fi=0};function mi(e,t,n,r){e.addEventListener(t,n,r)}function yi(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(vi.test(e)){let n;for(t={};n=e.match(vi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[F(e.slice(2)),t]}(t);if(r){mi(e,n,s[t]=function(e,t){const n=e=>{const r=e.timeStamp||hi();(di||r>=n.attached-1)&&ft(function(e,t){if(b(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>fi||(pi.then(gi),fi=hi()))(),n}(r,i),a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),s[t]=void 0)}}const vi=/(?:Once|Passive|Capture)$/;const wi=/^on[a-z]/;const _i="transition",bi=(e,{slots:t})=>ti(on,function(e){const t={};for(const y in e)y in Ei||(t[y]=e[y]);if(!1===e.css)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,p=function(e){if(null==e)return null;if(A(e))return[Si(e.enter),Si(e.leave)];{const t=Si(e);return[t,t]}}(i),g=p&&p[0],m=p&&p[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:_,onLeave:b,onLeaveCancelled:E,onBeforeAppear:T=v,onAppear:I=w,onAppearCancelled:S=_}=t,k=(e,t,n)=>{Ai(e,t?u:a),Ai(e,t?l:o),n&&n()},C=(e,t)=>{Ai(e,f),Ai(e,d),t&&t()},R=e=>(t,n)=>{const i=e?I:w,o=()=>k(t,e,n);Ti(i,[t,o]),Ci((()=>{Ai(t,e?c:s),ki(t,e?u:a),Ii(i)||Ni(t,r,g,o)}))};return y(t,{onBeforeEnter(e){Ti(v,[e]),ki(e,s),ki(e,o)},onBeforeAppear(e){Ti(T,[e]),ki(e,c),ki(e,l)},onEnter:R(!1),onAppear:R(!0),onLeave(e,t){const n=()=>C(e,t);ki(e,h),document.body.offsetHeight,ki(e,d),Ci((()=>{Ai(e,h),ki(e,f),Ii(b)||Ni(e,r,m,n)})),Ti(b,[e,n])},onEnterCancelled(e){k(e,!1),Ti(_,[e])},onAppearCancelled(e){k(e,!0),Ti(S,[e])},onLeaveCancelled(e){C(e),Ti(E,[e])}})}(e),t);bi.displayName="Transition";const Ei={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};bi.props=y({},on.props,Ei);const Ti=(e,t=[])=>{b(e)?e.forEach((e=>e(...t))):e&&e(...t)},Ii=e=>!!e&&(b(e)?e.some((e=>e.length>1)):e.length>1);function Si(e){return H(e)}function ki(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function Ai(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Ci(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let Ri=0;function Ni(e,t,n,r){const i=e._endId=++Ri,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=function(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r("transitionDelay"),s=r("transitionDuration"),o=Oi(i,s),a=r("animationDelay"),c=r("animationDuration"),l=Oi(a,c);let u=null,h=0,d=0;t===_i?o>0&&(u=_i,h=o,d=s.length):"animation"===t?l>0&&(u="animation",h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?_i:"animation":null,d=u?u===_i?s.length:c.length:0);const f=u===_i&&/\b(transform|all)(,|$)/.test(n.transitionProperty);return{type:u,timeout:h,propCount:d,hasTransform:f}}(e,t);if(!o)return r();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,d),s()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),e.addEventListener(l,d)}function Oi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>Di(t)+Di(e[n]))))}function Di(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}const xi=e=>{const t=e.props["onUpdate:modelValue"];return b(t)?e=>q(t,e):t};function Li(e){e.target.composing=!0}function Pi(e){const t=e.target;t.composing&&(t.composing=!1,function(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}(t,"input"))}const Mi={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=xi(i);const s=r||"number"===e.type;mi(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n?r=r.trim():s&&(r=H(r)),e._assign(r)})),n&&mi(e,"change",(()=>{e.value=e.value.trim()})),t||(mi(e,"compositionstart",Li),mi(e,"compositionend",Pi),mi(e,"change",Pi))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{trim:n,number:r}},i){if(e._assign=xi(i),e.composing)return;if(document.activeElement===e){if(n&&e.value.trim()===t)return;if((r||"number"===e.type)&&H(e.value)===t)return}const s=null==t?"":t;e.value!==s&&(e.value=s)}},Ui=["ctrl","shift","alt","meta"],Fi={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Ui.some((n=>e[`${n}Key`]&&!t.includes(n)))},Vi=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Fi[t[e]];if(r&&r(n,t))return}return e(n,...r)},ji=y({patchProp:(e,t,r,i,s=!1,o,a,c,l)=>{switch(t){case"class":!function(e,t,n){if(null==t&&(t=""),n)e.setAttribute("class",t);else{const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),e.className=t}}(e,i,s);break;case"style":!function(e,t,n){const r=e.style;if(n)if(S(n)){if(t!==n){const t=r.display;r.cssText=n,"_vod"in e&&(r.display=t)}}else{for(const e in n)ai(r,e,n[e]);if(t&&!S(t))for(const e in t)null==n[e]&&ai(r,e,"")}else e.removeAttribute("style")}(e,r,i);break;default:g(t)?m(t)||yi(e,t,0,i,a):function(e,t,n,r){if(r)return"innerHTML"===t||!!(t in e&&wi.test(t)&&I(n));if("spellcheck"===t||"draggable"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(wi.test(t)&&S(n))return!1;return t in e}(e,t,i,s)?function(e,t,n,r,i,s,o){if("innerHTML"===t||"textContent"===t)return r&&o(r,i,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName){e._value=n;const r=null==n?"":n;return e.value!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const r=typeof e[t];if(""===n&&"boolean"===r)return void(e[t]=!0);if(null==n&&"string"===r)return e[t]="",void e.removeAttribute(t);if("number"===r)return e[t]=0,void e.removeAttribute(t)}try{e[t]=n}catch(a){}}(e,t,i,o,a,c,l):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),function(e,t,r,i,s){if(i&&t.startsWith("xlink:"))null==r?e.removeAttributeNS(ui,t.slice(6,t.length)):e.setAttributeNS(ui,t,r);else{const i=n(t);null==r||i&&!1===r?e.removeAttribute(t):e.setAttribute(t,i?"":r)}}(e,t,i,s))}},forcePatchProp:(e,t)=>"value"===t},si);let Bi;const qi=(...e)=>{const t=(Bi||(Bi=ur(ji))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){if(S(e)){return document.querySelector(e)}return e}
/*!
  * vue-router v4.0.10
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */(e);if(!r)return;const i=t._component;I(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};const $i="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,Hi=e=>$i?Symbol(e):"_vr_"+e,zi=Hi("rvlm"),Ki=Hi("rvd"),Gi=Hi("r"),Wi=Hi("rl"),Xi=Hi("rvl"),Yi="undefined"!=typeof window;const Qi=Object.assign;function Ji(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}let Zi=()=>{};const es=/\/$/;function ts(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function ns(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function rs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function is(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(!ss(e[n],t[n]))return!1;return!0}function ss(e,t){return Array.isArray(e)?os(e,t):Array.isArray(t)?os(t,e):e===t}function os(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var as,cs,ls,us;function hs(e){if(!e)if(Yi){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(es,"")}(cs=as||(as={})).pop="pop",cs.push="push",(us=ls||(ls={})).back="back",us.forward="forward",us.unknown="";const ds=/^[^#]+#/;function fs(e,t){return e.replace(ds,"#")+t}const ps=()=>({left:window.pageXOffset,top:window.pageYOffset});function gs(e){let t;if("el"in e){let n=e.el;const r="string"==typeof n&&n.startsWith("#"),i="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function ms(e,t){return(history.state?history.state.position-t:-1)+e}const ys=new Map;function vs(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),ns(n,"")}return ns(n,e)+r+i}function ws(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?ps():null}}function _s(e){const{history:t,location:n}=window;let r={value:vs(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:location.protocol+"//"+location.host+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:function(e,n){const o=Qi({},i.value,t.state,{forward:e,scroll:ps()});s(o.current,o,!0),s(e,Qi({},ws(r.value,e,null),{position:o.position+1},n),!1),r.value=e},replace:function(e,n){s(e,Qi({},t.state,ws(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}}}function bs(e){const t=_s(e=hs(e)),n=function(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=vs(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:as.pop,direction:u?u>0?ls.forward:ls.back:ls.unknown})}))};function c(){const{history:e}=window;e.state&&e.replaceState(Qi({},e.state,{scroll:ps()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:function(){o=n.value},listen:function(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t},destroy:function(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}}}(e,t.state,t.location,t.replace);const r=Qi({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:fs.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Es(e){return"string"==typeof e||"symbol"==typeof e}const Ts={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Is=Hi("nf");var Ss,ks;function As(e,t){return Qi(new Error,{type:e,[Is]:!0},t)}function Cs(e,t){return e instanceof Error&&Is in e&&(null==t||!!(e.type&t))}(ks=Ss||(Ss={}))[ks.aborted=4]="aborted",ks[ks.cancelled=8]="cancelled",ks[ks.duplicated=16]="duplicated";const Rs={sensitive:!1,strict:!1,start:!0,end:!0},Ns=/[.+*?^${}()[\]/\\]/g;function Os(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Ds(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const e=Os(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const xs={type:0,value:""},Ls=/[a-zA-Z0-9_]/;function Ps(e,t,n){const r=function(e,t){const n=Qi({},Rs,t);let r=[],i=n.start?"^":"";const s=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let t=0;t<c.length;t++){const r=c[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(Ns,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;s.push({name:e,repeatable:n,optional:l});const h=u||"[^/]+?";if("[^/]+?"!==h){o+=10;try{new RegExp(`(${h})`)}catch(a){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+a.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=l&&c.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),i+=d,o+=20,l&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");return{re:o,score:r,keys:s,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[xs]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}for(;c<e.length;)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Ls.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}(e.path),n),i=Qi(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Ms(e,t){const n=[],r=new Map;function i(e,n,r){let a=!r,c=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Us(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);c.aliasOf=r&&r.record;const l=js(t,e),u=[c];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(Qi({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let h,d;for(const t of u){let{path:u}=t;if(n&&"/"!==u[0]){let e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=Ps(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),a&&e.name&&!Fs(h)&&s(e.name)),"children"in c){let e=c.children;for(let t=0;t<e.length;t++)i(e[t],h,r&&r.children[t])}r=r||h,o(h)}return d?()=>{s(d)}:Zi}function s(e){if(Es(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function o(e){let t=0;for(;t<n.length&&Ds(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!Fs(e)&&r.set(e.record.name,e)}return t=js({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:function(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw As(1,{location:e});o=i.record.name,a=Qi(function(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw As(1,{location:e,currentLocation:t});o=i.record.name,a=Qi({},t.params,e.params),s=i.stringify(a)}const c=[];let l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:Vs(c)}},removeRoute:s,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function Us(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(let r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function Fs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Vs(e){return e.reduce(((e,t)=>Qi(e,t.meta)),{})}function js(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}const Bs=/#/g,qs=/&/g,$s=/\//g,Hs=/=/g,zs=/\?/g,Ks=/\+/g,Gs=/%5B/g,Ws=/%5D/g,Xs=/%5E/g,Ys=/%60/g,Qs=/%7B/g,Js=/%7C/g,Zs=/%7D/g,eo=/%20/g;function to(e){return encodeURI(""+e).replace(Js,"|").replace(Gs,"[").replace(Ws,"]")}function no(e){return to(e).replace(Ks,"%2B").replace(eo,"+").replace(Bs,"%23").replace(qs,"%26").replace(Ys,"`").replace(Qs,"{").replace(Zs,"}").replace(Xs,"^")}function ro(e){return function(e){return to(e).replace(Bs,"%23").replace(zs,"%3F")}(e).replace($s,"%2F")}function io(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function so(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(Ks," ");let i=e.indexOf("="),s=io(i<0?e:e.slice(0,i)),o=i<0?null:io(e.slice(i+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function oo(e){let t="";for(let n in e){const r=e[n];if(n=no(n).replace(Hs,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map((e=>e&&no(e))):[r&&no(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function ao(e){const t={};for(let n in e){let r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function co(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function lo(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{var c;!1===e?a(As(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(c=e)||c&&"object"==typeof c?a(As(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"==typeof e&&s.push(e),o())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function uo(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(s=a)||"displayName"in s||"props"in s||"__vccOpts"in s){const s=(a.__vccOpts||a)[t];s&&i.push(lo(s,n,r,o,e))}else{let s=a();i.push((()=>s.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=(a=i).__esModule||$i&&"Module"===a[Symbol.toStringTag]?i.default:i;var a;o.components[e]=s;const c=(s.__vccOpts||s)[t];return c&&lo(c,n,r,o,e)()}))))}}var s;return i}function ho(e){const t=Qt(Gi),n=Qt(Wi),r=ei((()=>t.resolve(st(e.to)))),i=ei((()=>{let{matched:e}=r.value,{length:t}=e;const i=e[t-1];let s=n.matched;if(!i||!s.length)return-1;let o=s.findIndex(rs.bind(null,i));if(o>-1)return o;let a=po(e[t-2]);return t>1&&po(i)===a&&s[s.length-1].path!==a?s.findIndex(rs.bind(null,e[t-2])):o})),s=ei((()=>i.value>-1&&function(e,t){for(let n in t){let r=t[n],i=e[n];if("string"==typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}(n.params,r.value.params))),o=ei((()=>i.value>-1&&i.value===n.matched.length-1&&is(n.params,r.value.params)));return{route:r,href:ei((()=>r.value.href)),isActive:s,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[st(e.replace)?"replace":"push"](st(e.to)).catch(Zi):Promise.resolve()}}}const fo=fn({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ho,setup(e,{slots:t}){const n=Ke(ho(e)),{options:r}=Qt(Gi),i=ei((()=>({[go(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[go(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:ti("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function po(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const go=(e,t,n)=>null!=e?e:null!=t?t:n;function mo(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const yo=fn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=Qt(Xi),i=ei((()=>e.route||r.value)),s=Qt(Ki,0),o=ei((()=>i.value.matched[s]));Yt(Ki,s+1),Yt(zi,o),Yt(Xi,i);const a=nt();return Zt((()=>[a.value,o.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&rs(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=i.value,s=o.value,c=s&&s.components[e.name],l=e.name;if(!c)return mo(n.default,{Component:c,route:r});const u=s.props[e.name],h=u?!0===u?r.params:"function"==typeof u?u(r):u:null,d=ti(c,Qi({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(s.instances[l]=null)},ref:a}));return mo(n.default,{Component:d,route:r})||d}}});function vo(e){const t=Ms(e.routes,e);let n=e.parseQuery||so,r=e.stringifyQuery||oo,i=e.history;const s=co(),o=co(),a=co(),c=it(Ts,!0);let l=Ts;Yi&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ji.bind(null,(e=>""+e)),h=Ji.bind(null,ro),d=Ji.bind(null,io);function f(e,s){if(s=Qi({},s||c.value),"string"==typeof e){let r=ts(n,e,s.path),o=t.resolve({path:r.path},s),a=i.createHref(r.fullPath);return Qi(r,o,{params:d(o.params),hash:io(r.hash),redirectedFrom:void 0,href:a})}let o;"path"in e?o=Qi({},e,{path:ts(n,e.path,s.path).path}):(o=Qi({},e,{params:h(e.params)}),s.params=h(s.params));let a=t.resolve(o,s);const l=e.hash||"";a.params=u(d(a.params));const f=function(e,t){let n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,Qi({},e,{hash:(p=l,to(p).replace(Qs,"{").replace(Zs,"}").replace(Xs,"^")),path:a.path}));var p;let g=i.createHref(f);return Qi({fullPath:f,hash:l,query:r===oo?ao(e.query):e.query},a,{redirectedFrom:void 0,href:g})}function p(e){return"string"==typeof e?ts(n,e,c.value.path):Qi({},e)}function g(e,t){if(l!==e)return As(8,{from:t,to:e})}function m(e){return v(e)}function y(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=p(r):{path:r},r.params={}),Qi({query:e.query,hash:e.hash,params:e.params},r)}}function v(e,t){const n=l=f(e),i=c.value,s=e.state,o=e.force,a=!0===e.replace,u=y(n);if(u)return v(Qi(p(u),{state:s,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&function(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&rs(t.matched[r],n.matched[i])&&is(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,i,n)&&(d=As(16,{to:h,from:i}),N(i,i,!0,!1)),(d?Promise.resolve(d):_(h,i)).catch((e=>Cs(e)?e:C(e,h,i))).then((e=>{if(e){if(Cs(e,2))return v(Qi(p(e.to),{state:s,force:o,replace:a}),t||h)}else e=E(h,i,!0,a,s);return b(h,i,e),e}))}function w(e,t){const n=g(e,t);return n?Promise.reject(n):Promise.resolve()}function _(e,t){let n;const[r,i,a]=function(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>rs(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>rs(e,a)))||i.push(a))}return[n,r,i]}(e,t);n=uo(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(lo(r,e,t))}));const c=w.bind(null,e,t);return n.push(c),wo(n).then((()=>{n=[];for(const r of s.list())n.push(lo(r,e,t));return n.push(c),wo(n)})).then((()=>{n=uo(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(lo(r,e,t))}));return n.push(c),wo(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(lo(i,e,t));else n.push(lo(r.beforeEnter,e,t));return n.push(c),wo(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=uo(a,"beforeRouteEnter",e,t),n.push(c),wo(n)))).then((()=>{n=[];for(const r of o.list())n.push(lo(r,e,t));return n.push(c),wo(n)})).catch((e=>Cs(e,8)?e:Promise.reject(e)))}function b(e,t,n){for(const r of a.list())r(e,t,n)}function E(e,t,n,r,s){const o=g(e,t);if(o)return o;const a=t===Ts,l=Yi?history.state:{};n&&(r||a?i.replace(e.fullPath,Qi({scroll:a&&l&&l.scroll},s)):i.push(e.fullPath,s)),c.value=e,N(e,t,n,a),R()}let T;function I(){T=i.listen(((e,t,n)=>{let r=f(e);const s=y(r);if(s)return void v(Qi(s,{replace:!0}),r).catch(Zi);l=r;const o=c.value;var a,u;Yi&&(a=ms(o.fullPath,n.delta),u=ps(),ys.set(a,u)),_(r,o).catch((e=>Cs(e,12)?e:Cs(e,2)?(v(e.to,r).then((e=>{Cs(e,20)&&!n.delta&&n.type===as.pop&&i.go(-1,!1)})).catch(Zi),Promise.reject()):(n.delta&&i.go(-n.delta,!1),C(e,r,o)))).then((e=>{(e=e||E(r,o,!1))&&(n.delta?i.go(-n.delta,!1):n.type===as.pop&&Cs(e,20)&&i.go(-1,!1)),b(r,o,e)})).catch(Zi)}))}let S,k=co(),A=co();function C(e,t,n){R(e);const r=A.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function R(e){S||(S=!0,I(),k.list().forEach((([t,n])=>e?n(e):t())),k.reset())}function N(t,n,r,i){const{scrollBehavior:s}=e;if(!Yi||!s)return Promise.resolve();let o=!r&&function(e){const t=ys.get(e);return ys.delete(e),t}(ms(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Ct().then((()=>s(t,n,o))).then((e=>e&&gs(e))).catch((e=>C(e,t,n)))}const O=e=>i.go(e);let D;const x=new Set;return{currentRoute:c,addRoute:function(e,n){let r,i;return Es(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)},removeRoute:function(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:f,options:e,push:m,replace:function(e){return m(Qi(p(e),{replace:!0}))},go:O,back:()=>O(-1),forward:()=>O(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:A.add,isReady:function(){return S&&c.value!==Ts?Promise.resolve():new Promise(((e,t)=>{k.add([e,t])}))},install(e){e.component("RouterLink",fo),e.component("RouterView",yo),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>st(c)}),Yi&&!D&&c.value===Ts&&(D=!0,m(i.location).catch((e=>{})));const t={};for(let r in Ts)t[r]=ei((()=>c.value[r]));e.provide(Gi,this),e.provide(Wi,Ke(t)),e.provide(Xi,c);let n=e.unmount;x.add(e),e.unmount=function(){x.delete(e),x.size<1&&(T(),c.value=Ts,D=!1,S=!1),n()}}}}function wo(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function _o(){return Qt(Gi)}
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
***************************************************************************** */var bo=function(e,t){return(bo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function Eo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function To(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{c(r.next(e))}catch(t){s(t)}}function a(e){try{c(r.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}function Io(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function So(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function ko(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function Ao(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}
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
 */var Co={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|l>>6,f=63&l;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{s=e[n++];var a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,a=++i<e.length?n[e.charAt(i)]:64,c=++i<e.length?n[e.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==c)throw Error();var l=s<<2|o>>4;if(r.push(l),64!==a){var u=o<<4&240|a>>2;if(r.push(u),64!==c){var h=a<<6&192|c;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ro=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
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
function No(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Oo(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(No())}function Do(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function xo(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Lo(){var e=No();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
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
var Po=function(e){function t(n,r,i){var s=e.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,Mo.prototype.create),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}bo(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),Mo=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,s=this.errors[e],o=s?Uo(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",c=new Po(i,a,r);return c},e}();function Uo(e,t){return e.replace(Fo,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var Fo=/\{\$([^}]+)}/g;function Vo(e,t){if(e===t)return!0;for(var n=Object.keys(e),r=Object.keys(t),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=e[o],c=t[o];if(jo(a)&&jo(c)){if(!Vo(a,c))return!1}else if(a!==c)return!1}for(var l=0,u=r;l<u.length;l++){o=u[l];if(!n.includes(o))return!1}return!0}function jo(e){return null!==e&&"object"==typeof e}
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
 */function Bo(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var s=i[r];n(s[0],s[1])}return t.length?"&"+t.join("&"):""}function qo(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=e.split("="),r=n[0],i=n[1];t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function $o(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}var Ho=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=zo),void 0===r.error&&(r.error=zo),void 0===r.complete&&(r.complete=zo);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),s},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function zo(){}
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
 */function Ko(e){return e&&e._delegate?e._delegate:e}var Go=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),Wo=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Ro;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(u){}try{for(var r=So(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=ko(i.value,2),o=s[0],a=s[1],c=this.normalizeInstanceIdentifier(o);try{var l=this.getOrInitializeService({instanceIdentifier:c});a.resolve(l)}catch(u){}}}catch(h){t={error:h}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return To(this,void 0,void 0,(function(){var e;return Io(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Ao(Ao([],ko(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),ko(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var a=So(this.instancesDeferred.entries()),c=a.next();!c.done;c=a.next()){var l=ko(c.value,2),u=l[0],h=l[1];s===this.normalizeInstanceIdentifier(u)&&h.resolve(o)}}catch(d){t={error:d}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&e(s,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var s=So(i),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(e,t)}catch(c){}}}catch(l){n={error:l}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:i}),this.instances.set(n,s),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e="[DEFAULT]"),this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
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
 */var Xo,Yo,Qo,Jo=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Wo(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
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
***************************************************************************** */function Zo(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
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
 */(Qo=Yo||(Yo={}))[Qo.DEBUG=0]="DEBUG",Qo[Qo.VERBOSE=1]="VERBOSE",Qo[Qo.INFO=2]="INFO",Qo[Qo.WARN=3]="WARN",Qo[Qo.ERROR=4]="ERROR",Qo[Qo.SILENT=5]="SILENT";var ea={debug:Yo.DEBUG,verbose:Yo.VERBOSE,info:Yo.INFO,warn:Yo.WARN,error:Yo.ERROR,silent:Yo.SILENT},ta=Yo.INFO,na=((Xo={})[Yo.DEBUG]="log",Xo[Yo.VERBOSE]="log",Xo[Yo.INFO]="info",Xo[Yo.WARN]="warn",Xo[Yo.ERROR]="error",Xo),ra=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),s=na[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,Zo(["["+i+"]  "+e.name+":"],n))}},ia=function(){function e(e){this.name=e,this._logLevel=ta,this._logHandler=ra,this._userLogHandler=null}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in Yo))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?ea[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Zo([this,Yo.DEBUG],e)),this._logHandler.apply(this,Zo([this,Yo.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Zo([this,Yo.VERBOSE],e)),this._logHandler.apply(this,Zo([this,Yo.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Zo([this,Yo.INFO],e)),this._logHandler.apply(this,Zo([this,Yo.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Zo([this,Yo.WARN],e)),this._logHandler.apply(this,Zo([this,Yo.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Zo([this,Yo.ERROR],e)),this._logHandler.apply(this,Zo([this,Yo.ERROR],e))},e}();
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
class sa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const oa=new ia("@firebase/app"),aa={"@firebase/app-exp":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics-exp":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check-exp":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth-exp":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions-exp":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations-exp":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging-exp":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance-exp":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config-exp":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js","firebase-exp":"fire-js-all"},ca=new Map,la=new Map;function ua(e,t){try{e.container.addComponent(t)}catch(n){oa.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ha(e){const t=e.name;if(la.has(t))return oa.debug(`There were multiple attempts to register component ${t}.`),!1;la.set(t,e);for(const n of ca.values())ua(n,e);return!0}function da(e,t){return e.container.getProvider(t)}
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
 */const fa=new Mo("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class pa{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Go("app-exp",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fa.create("app-deleted",{appName:this._name})}}
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
 */function ga(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw fa.create("bad-app-name",{appName:String(r)});const i=ca.get(r);if(i){if(Vo(e,i.options)&&Vo(n,i.config))return i;throw fa.create("duplicate-app",{appName:r})}const s=new Jo(r);for(const a of la.values())s.addComponent(a);const o=new pa(e,n,s);return ca.set(r,o),o}function ma(e="[DEFAULT]"){const t=ca.get(e);if(!t)throw fa.create("no-app",{appName:e});return t}function ya(e,t,n){var r;let i=null!==(r=aa[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void oa.warn(e.join(" "))}ha(new Go(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
 */var va;ha(new Go("platform-logger",(e=>new sa(e)),"PRIVATE")),ya("@firebase/app-exp","0.0.900-exp.8b4d7550f",va),ya("fire-js","");
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
var wa=function(e,t){return(wa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function _a(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}var ba,Ea="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Ta=Ta||{},Ia=Ea||self;function Sa(){}function ka(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Aa(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Ca="closure_uid_"+(1e9*Math.random()>>>0),Ra=0;function Na(e,t,n){return e.call.apply(e.bind,arguments)}function Oa(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Da(e,t,n){return(Da=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Na:Oa).apply(null,arguments)}function xa(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function La(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function Pa(){this.s=this.s,this.o=this.o}var Ma={};Pa.prototype.s=!1,Pa.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,Ca)&&e[Ca]||(e[Ca]=++Ra)}(this);delete Ma[e]}},Pa.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var Ua=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Fa=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){for(var r=e.length,i="string"==typeof e?e.split(""):e,s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function Va(e){return Array.prototype.concat.apply([],arguments)}function ja(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ba(e){return/^[\s\xa0]*$/.test(e)}var qa,$a=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ha(e,t){return-1!=e.indexOf(t)}function za(e,t){return e<t?-1:e>t?1:0}e:{var Ka=Ia.navigator;if(Ka){var Ga=Ka.userAgent;if(Ga){qa=Ga;break e}}qa=""}function Wa(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function Xa(e){var t={};for(var n in e)t[n]=e[n];return t}var Ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qa(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var s=0;s<Ya.length;s++)n=Ya[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Ja(e){return Ja[" "](e),e}Ja[" "]=Sa;var Za,ec,tc=Ha(qa,"Opera"),nc=Ha(qa,"Trident")||Ha(qa,"MSIE"),rc=Ha(qa,"Edge"),ic=rc||nc,sc=Ha(qa,"Gecko")&&!(Ha(qa.toLowerCase(),"webkit")&&!Ha(qa,"Edge"))&&!(Ha(qa,"Trident")||Ha(qa,"MSIE"))&&!Ha(qa,"Edge"),oc=Ha(qa.toLowerCase(),"webkit")&&!Ha(qa,"Edge");function ac(){var e=Ia.document;return e?e.documentMode:void 0}e:{var cc="",lc=(ec=qa,sc?/rv:([^\);]+)(\)|;)/.exec(ec):rc?/Edge\/([\d\.]+)/.exec(ec):nc?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ec):oc?/WebKit\/(\S+)/.exec(ec):tc?/(?:Version)[ \/]?(\S+)/.exec(ec):void 0);if(lc&&(cc=lc?lc[1]:""),nc){var uc=ac();if(null!=uc&&uc>parseFloat(cc)){Za=String(uc);break e}}Za=cc}var hc,dc={};function fc(){return function(e){var t=dc;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){for(var e=0,t=$a(String(Za)).split("."),n=$a("9").split("."),r=Math.max(t.length,n.length),i=0;0==e&&i<r;i++){var s=t[i]||"",o=n[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;e=za(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||za(0==s[2].length,0==o[2].length)||za(s[2],o[2]),s=s[3],o=o[3]}while(0==e)}return 0<=e}))}if(Ia.document&&nc){var pc=ac();hc=pc||(parseInt(Za,10)||void 0)}else hc=void 0;var gc=hc,mc=function(){if(!Ia.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Ia.addEventListener("test",Sa,t),Ia.removeEventListener("test",Sa,t)}catch(n){}return e}();function yc(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function vc(e,t){if(yc.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(sc){e:{try{Ja(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:wc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&vc.Z.h.call(this)}}yc.prototype.h=function(){this.defaultPrevented=!0},La(vc,yc);var wc={2:"touch",3:"pen",4:"mouse"};vc.prototype.h=function(){vc.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var _c="closure_listenable_"+(1e6*Math.random()|0),bc=0;function Ec(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++bc,this.ca=this.fa=!1}function Tc(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Ic(e){this.src=e,this.g={},this.h=0}function Sc(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Ua(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Tc(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function kc(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}Ic.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=kc(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new Ec(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var Ac="closure_lm_"+(1e6*Math.random()|0),Cc={};function Rc(e,t,n,r,i){if(r&&r.once)return Oc(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Rc(e,t[s],n,r,i);return null}return n=Fc(n),e&&e[_c]?e.N(t,n,Aa(r)?!!r.capture:!!r,i):Nc(e,t,n,!1,r,i)}function Nc(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Aa(i)?!!i.capture:!!i,a=Mc(e);if(a||(e[Ac]=a=new Ic(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=Pc;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)mc||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Lc(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Oc(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Oc(e,t[s],n,r,i);return null}return n=Fc(n),e&&e[_c]?e.O(t,n,Aa(r)?!!r.capture:!!r,i):Nc(e,t,n,!0,r,i)}function Dc(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Dc(e,t[s],n,r,i);else r=Aa(r)?!!r.capture:!!r,n=Fc(n),e&&e[_c]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=kc(s=e.g[t],n,r,i))&&(Tc(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Mc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=kc(t,n,r,i)),(n=-1<e?t[e]:null)&&xc(n))}function xc(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[_c])Sc(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Lc(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Mc(t))?(Sc(n,e),0==n.h&&(n.src=null,t[Ac]=null)):Tc(e)}}}function Lc(e){return e in Cc?Cc[e]:Cc[e]="on"+e}function Pc(e,t){if(e.ca)e=!0;else{t=new vc(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&xc(e),e=n.call(r,t)}return e}function Mc(e){return(e=e[Ac])instanceof Ic?e:null}var Uc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fc(e){return"function"==typeof e?e:(e[Uc]||(e[Uc]=function(t){return e.handleEvent(t)}),e[Uc])}function Vc(){Pa.call(this),this.i=new Ic(this),this.P=this,this.I=null}function jc(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new yc(t,e);else if(t instanceof yc)t.target=t.target||e;else{var i=t;Qa(t=new yc(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Bc(o,r,!0,t)&&i}if(i=Bc(o=t.g=e,r,!0,t)&&i,i=Bc(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=Bc(o=t.g=n[s],r,!1,t)&&i}function Bc(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Sc(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}La(Vc,Pa),Vc.prototype[_c]=!0,Vc.prototype.removeEventListener=function(e,t,n,r){Dc(this,e,t,n,r)},Vc.prototype.M=function(){if(Vc.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Tc(n[r]);delete t.g[e],t.h--}}this.I=null},Vc.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Vc.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var qc=Ia.JSON.stringify;function $c(){var e=Qc,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Hc,zc=function(){function e(){this.h=this.g=null}return e.prototype.add=function(e,t){var n=Kc.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n},e}(),Kc=new(function(){function e(e,t){this.i=e,this.j=t,this.h=0,this.g=null}return e.prototype.get=function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e},e}())((function(){return new Gc}),(function(e){return e.reset()})),Gc=function(){function e(){this.next=this.g=this.h=null}return e.prototype.set=function(e,t){this.h=e,this.g=t,this.next=null},e.prototype.reset=function(){this.next=this.g=this.h=null},e}();function Wc(e){Ia.setTimeout((function(){throw e}),0)}function Xc(e,t){Hc||function(){var e=Ia.Promise.resolve(void 0);Hc=function(){e.then(Jc)}}(),Yc||(Hc(),Yc=!0),Qc.add(e,t)}var Yc=!1,Qc=new zc;function Jc(){for(var e;e=$c();){try{e.h.call(e.g)}catch(n){Wc(n)}var t=Kc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Yc=!1}function Zc(e,t){Vc.call(this),this.h=e||1,this.g=t||Ia,this.j=Da(this.kb,this),this.l=Date.now()}function el(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function tl(e,t,n){if("function"==typeof e)n&&(e=Da(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Da(e.handleEvent,e)}return 2147483647<Number(t)?-1:Ia.setTimeout(e,t||0)}function nl(e){e.g=tl((function(){e.g=null,e.i&&(e.i=!1,nl(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}La(Zc,Vc),(ba=Zc.prototype).da=!1,ba.S=null,ba.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),jc(this,"tick"),this.da&&(el(this),this.start()))}},ba.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ba.M=function(){Zc.Z.M.call(this),el(this),delete this.g};var rl=function(e){function t(t,n){var r=e.call(this)||this;return r.m=t,r.j=n,r.h=null,r.i=!1,r.g=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}wa(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.l=function(e){this.h=arguments,this.g?this.i=!0:nl(this)},t.prototype.M=function(){e.prototype.M.call(this),this.g&&(Ia.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},t}(Pa);function il(e){Pa.call(this),this.h=e,this.g={}}La(il,Pa);var sl=[];function ol(e,t,n,r){Array.isArray(n)||(n&&(sl[0]=n.toString()),n=sl);for(var i=0;i<n.length;i++){var s=Rc(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function al(e){Wa(e.g,(function(e,t){this.g.hasOwnProperty(t)&&xc(e)}),e),e.g={}}function cl(){this.g=!0}function ll(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return qc(n)}catch(a){return t}}(e,n)+(r?" "+r:"")}))}il.prototype.M=function(){il.Z.M.call(this),al(this)},il.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},cl.prototype.Aa=function(){this.g=!1},cl.prototype.info=function(){};var ul={},hl=null;function dl(){return hl=hl||new Vc}function fl(e){yc.call(this,ul.Ma,e)}function pl(e){var t=dl();jc(t,new fl(t,e))}function gl(e,t){yc.call(this,ul.STAT_EVENT,e),this.stat=t}function ml(e){var t=dl();jc(t,new gl(t,e))}function yl(e,t){yc.call(this,ul.Na,e),this.size=t}function vl(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Ia.setTimeout((function(){e()}),t)}ul.Ma="serverreachability",La(fl,yc),ul.STAT_EVENT="statevent",La(gl,yc),ul.Na="timingevent",La(yl,yc);var wl={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},_l={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function bl(){}function El(e){return e.h||(e.h=e.i())}function Tl(){}bl.prototype.h=null;var Il,Sl={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function kl(){yc.call(this,"d")}function Al(){yc.call(this,"c")}function Cl(){}function Rl(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new il(this),this.P=Ol,e=ic?125:void 0,this.W=new Zc(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Nl}function Nl(){this.i=null,this.g="",this.h=!1}La(kl,yc),La(Al,yc),La(Cl,bl),Cl.prototype.g=function(){return new XMLHttpRequest},Cl.prototype.i=function(){return{}},Il=new Cl;var Ol=45e3,Dl={},xl={};function Ll(e,t,n){e.K=1,e.v=ru(Ql(t)),e.s=n,e.U=!0,Pl(e,null)}function Pl(e,t){e.F=Date.now(),Vl(e),e.A=Ql(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),mu(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Nl,e.g=yh(e.l,n?t:null,!e.s),0<e.O&&(e.L=new rl(Da(e.Ia,e,e.g),e.O)),ol(e.V,e.g,"readystatechange",e.gb),t=e.H?Xa(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),pl(1),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function Ml(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Ul(e,t,n){for(var r,i=!0;!e.I&&e.C<n.length;){if((r=Fl(e,n))==xl){4==t&&(e.o=4,ml(14),i=!1),ll(e.j,e.m,null,"[Incomplete Response]");break}if(r==Dl){e.o=4,ml(15),ll(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}ll(e.j,e.m,r,null),Hl(e,r)}Ml(e)&&r!=xl&&r!=Dl&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ml(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),lh(t),t.L=!0,ml(11))):(ll(e.j,e.m,n,"[Invalid Chunked Response]"),$l(e),ql(e))}function Fl(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?xl:(n=Number(t.substring(n,r)),isNaN(n)?Dl:(r+=1)+n>t.length?xl:(t=t.substr(r,n),e.C=r+n,t))}function Vl(e){e.Y=Date.now()+e.P,jl(e,e.P)}function jl(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=vl(Da(e.eb,e),t)}function Bl(e){e.B&&(Ia.clearTimeout(e.B),e.B=null)}function ql(e){0==e.l.G||e.I||dh(e.l,e)}function $l(e){Bl(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,el(e.W),al(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Hl(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Tu(n.i,e)))if(n.I=e.N,!e.J&&Tu(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(m){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;hh(n),eh(n)}ch(n),ml(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=vl(Da(n.ab,n),6e3));if(1>=Eu(n.i)&&n.ka){try{n.ka()}catch(m){}n.ka=void 0}}else ph(n,11)}else if((e.J||n.g==e)&&hh(n),!Ba(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){var s=i[t];if(n.U=s[0],s=s[1],2==n.G)if("c"==s[0]){n.J=s[1],n.la=s[2];var o=s[3];null!=o&&(n.ma=o,n.h.info("VER="+n.ma));var a=s[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var c=s[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var l=e.g;if(l){var u=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(u){var h=r.i;!h.g&&(Ha(u,"spdy")||Ha(u,"quic")||Ha(u,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(Iu(h,h.h),h.h=null))}if(r.D){var d=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;d&&(r.sa=d,nu(r.F,r.D,d))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var f=e;if((r=n).oa=mh(r,r.H?r.la:null,r.W),f.J){Su(r.i,f);var p=f,g=r.K;g&&p.setTimeout(g),p.B&&(Bl(p),Vl(p)),r.g=f}else ah(r);0<n.l.length&&rh(n)}else"stop"!=s[0]&&"close"!=s[0]||ph(n,7);else 3==n.G&&("stop"==s[0]||"close"==s[0]?"stop"==s[0]?ph(n,7):Zu(n):"noop"!=s[0]&&n.j&&n.j.wa(s),n.A=0)}pl(4)}catch(m){}}function zl(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(ka(e)||"string"==typeof e)Fa(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(ka(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;i=(r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(ka(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e)).length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Kl(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Kl)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Gl(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Wl(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)Wl(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Wl(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(ba=Rl.prototype).setTimeout=function(e){this.P=e},ba.gb=function(e){e=e.target;var t=this.L;t&&3==Wu(e)?t.l():this.Ia(e)},ba.Ia=function(e){try{if(e==this.g)e:{var t=Wu(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>t)&&(3!=t||ic||this.g&&(this.h.h||this.g.ga()||Xu(this.g)))){this.I||4!=t||7==n||pl(8==n||0>=r?3:2),Bl(this);var i=this.g.ba();this.N=i;t:if(Ml(this)){var s=Xu(this.g);e="";var o=s.length,a=4==Wu(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){$l(this),ql(this);var c="";break t}this.h.i=new Ia.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,e+=this.h.i.decode(s[n],{stream:a&&n==o-1});s.splice(0,o),this.h.g+=e,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=200==i,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,t,i),this.i){if(this.$&&!this.J){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ba(l)){var h=l;break t}}h=null}if(!(i=h)){this.i=!1,this.o=3,ml(12),$l(this),ql(this);break e}ll(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Hl(this,i)}this.U?(Ul(this,t,c),ic&&this.i&&3==t&&(ol(this.V,this.W,"tick",this.fb),this.W.start())):(ll(this.j,this.m,c,null),Hl(this,c)),4==t&&$l(this),this.i&&!this.I&&(4==t?dh(this.l,this):(this.i=!1,Vl(this)))}else 400==i&&0<c.indexOf("Unknown SID")?(this.o=3,ml(12)):(this.o=0,ml(13)),$l(this),ql(this)}}}catch(d){}},ba.fb=function(){if(this.g){var e=Wu(this.g),t=this.g.ga();this.C<t.length&&(Bl(this),Ul(this,e,t),this.i&&4!=e&&Vl(this))}},ba.cancel=function(){this.I=!0,$l(this)},ba.eb=function(){this.B=null;var e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(pl(3),ml(17)),$l(this),this.o=2,ql(this)):jl(this,this.Y-e)},(ba=Kl.prototype).R=function(){Gl(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},ba.T=function(){return Gl(this),this.g.concat()},ba.get=function(e,t){return Wl(this.h,e)?this.h[e]:t},ba.set=function(e,t){Wl(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},ba.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Xl=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Yl(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Yl){this.g=void 0!==t?t:e.g,Jl(this,e.j),this.s=e.s,Zl(this,e.i),eu(this,e.m),this.l=e.l,t=e.h;var n=new du;n.i=t.i,t.g&&(n.g=new Kl(t.g),n.h=t.h),tu(this,n),this.o=e.o}else e&&(n=String(e).match(Xl))?(this.g=!!t,Jl(this,n[1]||"",!0),this.s=iu(n[2]||""),Zl(this,n[3]||"",!0),eu(this,n[4]),this.l=iu(n[5]||"",!0),tu(this,n[6]||"",!0),this.o=iu(n[7]||"")):(this.g=!!t,this.h=new du(null,this.g))}function Ql(e){return new Yl(e)}function Jl(e,t,n){e.j=n?iu(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Zl(e,t,n){e.i=n?iu(t,!0):t}function eu(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function tu(e,t,n){t instanceof du?(e.h=t,function(e,t){t&&!e.j&&(fu(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(pu(this,t),mu(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=su(t,uu)),e.h=new du(t,e.g))}function nu(e,t,n){e.h.set(t,n)}function ru(e){return nu(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function iu(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function su(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ou),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ou(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Yl.prototype.toString=function(){var e=[],t=this.j;t&&e.push(su(t,au,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(su(t,au,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(su(n,"/"==n.charAt(0)?lu:cu,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",su(n,hu)),e.join("")};var au=/[#\/\?@]/g,cu=/[#\?:]/g,lu=/[#\?]/g,uu=/[#\?@]/g,hu=/#/g;function du(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function fu(e){e.g||(e.g=new Kl,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function pu(e,t){fu(e),t=yu(e,t),Wl(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Wl((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Gl(e)))}function gu(e,t){return fu(e),t=yu(e,t),Wl(e.g.h,t)}function mu(e,t,n){pu(e,t),0<n.length&&(e.i=null,e.g.set(yu(e,t),ja(n)),e.h+=n.length)}function yu(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(ba=du.prototype).add=function(e,t){fu(this),this.i=null,e=yu(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},ba.forEach=function(e,t){fu(this),this.g.forEach((function(n,r){Fa(n,(function(n){e.call(t,n,r,this)}),this)}),this)},ba.T=function(){fu(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},ba.R=function(e){fu(this);var t=[];if("string"==typeof e)gu(this,e)&&(t=Va(t,this.g.get(yu(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Va(t,e[n])}return t},ba.set=function(e,t){return fu(this),this.i=null,gu(this,e=yu(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},ba.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},ba.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var vu=function(e,t){this.h=e,this.g=t};function wu(e){this.l=e||_u,Ia.PerformanceNavigationTiming?e=0<(e=Ia.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Ia.g&&Ia.g.Ea&&Ia.g.Ea()&&Ia.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _u=10;function bu(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Eu(e){return e.h?1:e.g?e.g.size:0}function Tu(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Iu(e,t){e.g?e.g.add(t):e.h=t}function Su(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function ku(e){var t,n;if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){var r=e.i;try{for(var i=_a(e.g.values()),s=i.next();!s.done;s=i.next()){var o=s.value;r=r.concat(o.D)}}catch(a){t={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}return ja(e.i)}function Au(){}function Cu(){this.g=new Au}function Ru(e,t,n){var r=n||"";try{zl(e,(function(e,n){var i=e;Aa(e)&&(i=qc(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Nu(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Ou(e){this.l=e.$b||null,this.j=e.ib||!1}function Du(e,t){Vc.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=xu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}wu.prototype.cancel=function(){var e,t;if(this.i=ku(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=_a(this.g.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(i){e={error:i}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}this.g.clear()}},Au.prototype.stringify=function(e){return Ia.JSON.stringify(e,void 0)},Au.prototype.parse=function(e){return Ia.JSON.parse(e,void 0)},La(Ou,bl),Ou.prototype.g=function(){return new Du(this.l,this.j)},Ou.prototype.i=function(e){return function(){return e}}({}),La(Du,Vc);var xu=0;function Lu(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Pu(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Mu(e)}function Mu(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(ba=Du.prototype).open=function(e,t){if(this.readyState!=xu)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Mu(this)},ba.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Ia).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},ba.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Pu(this)),this.readyState=xu},ba.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Mu(this)),this.g&&(this.readyState=3,Mu(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Ia.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Lu(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},ba.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Pu(this):Mu(this),3==this.readyState&&Lu(this)}},ba.Ua=function(e){this.g&&(this.response=this.responseText=e,Pu(this))},ba.Ta=function(e){this.g&&(this.response=e,Pu(this))},ba.ha=function(){this.g&&Pu(this)},ba.setRequestHeader=function(e,t){this.v.append(e,t)},ba.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},ba.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Du.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Uu=Ia.JSON.parse;function Fu(e){Vc.call(this),this.headers=new Kl,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Vu,this.K=this.L=!1}La(Fu,Vc);var Vu="",ju=/^https?$/i,Bu=["POST","PUT"];function qu(e){return"content-type"==e.toLowerCase()}function $u(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Hu(e),Ku(e)}function Hu(e){e.D||(e.D=!0,jc(e,"complete"),jc(e,"error"))}function zu(e){if(e.h&&void 0!==Ta&&(!e.C[1]||4!=Wu(e)||2!=e.ba()))if(e.v&&4==Wu(e))tl(e.Fa,0,e);else if(jc(e,"readystatechange"),4==Wu(e)){e.h=!1;try{var t,n=e.ba();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var s=String(e.H).match(Xl)[1]||null;if(!s&&Ia.self&&Ia.self.location){var o=Ia.self.location.protocol;s=o.substr(0,o.length-1)}i=!ju.test(s?s.toLowerCase():"")}t=i}if(t)jc(e,"complete"),jc(e,"success");else{e.m=6;try{var a=2<Wu(e)?e.g.statusText:""}catch(c){a=""}e.j=a+" ["+e.ba()+"]",Hu(e)}}finally{Ku(e)}}}function Ku(e,t){if(e.g){Gu(e);var n=e.g,r=e.C[0]?Sa:null;e.g=null,e.C=null,t||jc(e,"ready");try{n.onreadystatechange=r}catch(i){}}}function Gu(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Ia.clearTimeout(e.A),e.A=null)}function Wu(e){return e.g?e.g.readyState:0}function Xu(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Vu:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Yu(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){var t="";return Wa(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):nu(e,t,n))}function Qu(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ju(e){this.za=0,this.l=[],this.h=new cl,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Qu("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Qu("baseRetryDelayMs",5e3,e),this.$a=Qu("retryDelaySeedMs",1e4,e),this.Ya=Qu("forwardChannelMaxRetries",2,e),this.ra=Qu("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new wu(e&&e.concurrentRequestLimit),this.Ca=new Cu,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Zu(e){if(th(e),3==e.G){var t=e.V++,n=Ql(e.F);nu(n,"SID",e.J),nu(n,"RID",t),nu(n,"TYPE","terminate"),sh(e,n),(t=new Rl(e,e.h,t,void 0)).K=2,t.v=ru(Ql(n)),n=!1,Ia.navigator&&Ia.navigator.sendBeacon&&(n=Ia.navigator.sendBeacon(t.v.toString(),"")),!n&&Ia.Image&&((new Image).src=t.v,n=!0),n||(t.g=yh(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Vl(t)}gh(e)}function eh(e){e.g&&(lh(e),e.g.cancel(),e.g=null)}function th(e){eh(e),e.u&&(Ia.clearTimeout(e.u),e.u=null),hh(e),e.i.cancel(),e.m&&("number"==typeof e.m&&Ia.clearTimeout(e.m),e.m=null)}function nh(e,t){e.l.push(new vu(e.Za++,t)),3==e.G&&rh(e)}function rh(e){bu(e.i)||e.m||(e.m=!0,Xc(e.Ha,e),e.C=0)}function ih(e,t){var n;n=t?t.m:e.V++;var r=Ql(e.F);nu(r,"SID",e.J),nu(r,"RID",n),nu(r,"AID",e.U),sh(e,r),e.o&&e.s&&Yu(r,e.o,e.s),n=new Rl(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=oh(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Iu(e.i,n),Ll(n,r,t)}function sh(e,t){e.j&&zl({},(function(e,n){nu(t,n,e)}))}function oh(e,t,n){n=Math.min(e.l.length,n);var r=e.j?Da(e.j.Oa,e.j,e):null;e:for(var i=e.l,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,c=0;c<n;c++){var l=i[c].h,u=i[c].g;if(0>(l-=s))s=Math.max(0,i[c].h-100),a=!1;else try{Ru(u,o,"req"+l+"_")}catch(h){r&&r(u)}}if(a){r=o.join("&");break e}}return e=e.l.splice(0,n),t.D=e,r}function ah(e){e.g||e.u||(e.Y=1,Xc(e.Ga,e),e.A=0)}function ch(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=vl(Da(e.Ga,e),fh(e,e.A)),e.A++,!0)}function lh(e){null!=e.B&&(Ia.clearTimeout(e.B),e.B=null)}function uh(e){e.g=new Rl(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Ql(e.oa);nu(t,"RID","rpc"),nu(t,"SID",e.J),nu(t,"CI",e.N?"0":"1"),nu(t,"AID",e.U),sh(e,t),nu(t,"TYPE","xmlhttp"),e.o&&e.s&&Yu(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=ru(Ql(t)),n.s=null,n.U=!0,Pl(n,e)}function hh(e){null!=e.v&&(Ia.clearTimeout(e.v),e.v=null)}function dh(e,t){var n=null;if(e.g==t){hh(e),lh(e),e.g=null;var r=2}else{if(!Tu(e.i,t))return;n=t.D,Su(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;jc(r=dl(),new yl(r,n,t,i)),rh(e)}else ah(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(Eu(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=vl(Da(e.Ha,e,t),fh(e,e.C)),e.C++,0)))}(e,t)||2==r&&ch(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ph(e,5);break;case 4:ph(e,10);break;case 3:ph(e,6);break;default:ph(e,2)}}function fh(e,t){var n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function ph(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=Da(e.jb,e);n||(n=new Yl("//www.google.com/images/cleardot.gif"),Ia.location&&"http"==Ia.location.protocol||Jl(n,"https"),ru(n)),function(e,t){var n=new cl;if(Ia.Image){var r=new Image;r.onload=xa(Nu,n,r,"TestLoadImage: loaded",!0,t),r.onerror=xa(Nu,n,r,"TestLoadImage: error",!1,t),r.onabort=xa(Nu,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=xa(Nu,n,r,"TestLoadImage: timeout",!1,t),Ia.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else ml(2);e.G=0,e.j&&e.j.va(t),gh(e),th(e)}function gh(e){e.G=0,e.I=-1,e.j&&(0==ku(e.i).length&&0==e.l.length||(e.i.i.length=0,ja(e.l),e.l.length=0),e.j.ua())}function mh(e,t,n){var r=function(e){return e instanceof Yl?Ql(e):new Yl(e,void 0)}(n);if(""!=r.i)t&&Zl(r,t+"."+r.i),eu(r,r.m);else{var i=Ia.location;r=function(e,t,n,r){var i=new Yl(null,void 0);return e&&Jl(i,e),t&&Zl(i,t),n&&eu(i,n),r&&(i.l=r),i}(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&Wa(e.aa,(function(e,t){nu(r,t,e)})),t=e.D,n=e.sa,t&&n&&nu(r,t,n),nu(r,"VER",e.ma),sh(e,r),r}function yh(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new Fu(new Ou({ib:!0})):new Fu(e.qa)).L=e.H,t}function vh(){}function wh(){if(nc&&!(10<=Number(gc)))throw Error("Environmental error: no available transport.")}function _h(e,t){Vc.call(this),this.g=new Ju(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Ba(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ba(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Th(this)}function bh(e){kl.call(this);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Eh(){Al.call(this),this.status=1}function Th(e){this.g=e}(ba=Fu.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Il.g(),this.C=this.u?El(this.u):El(Il),this.g.onreadystatechange=Da(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void $u(this,s)}e=n||"";var i=new Kl(this.headers);r&&zl(r,(function(e,t){i.set(t,e)})),r=function(e){e:{for(var t=qu,n=e.length,r="string"==typeof e?e.split(""):e,i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=Ia.FormData&&e instanceof Ia.FormData,!(0<=Ua(Bu,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gu(this),0<this.B&&((this.K=function(e){return nc&&fc()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Da(this.pa,this)):this.A=tl(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){$u(this,s)}},ba.pa=function(){void 0!==Ta&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,jc(this,"timeout"),this.abort(8))},ba.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,jc(this,"complete"),jc(this,"abort"),Ku(this))},ba.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ku(this,!0)),Fu.Z.M.call(this)},ba.Fa=function(){this.s||(this.F||this.v||this.l?zu(this):this.cb())},ba.cb=function(){zu(this)},ba.ba=function(){try{return 2<Wu(this)?this.g.status:-1}catch(ec){return-1}},ba.ga=function(){try{return this.g?this.g.responseText:""}catch(ec){return""}},ba.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Uu(t)}},ba.Da=function(){return this.m},ba.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(ba=Ju.prototype).ma=8,ba.G=1,ba.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},ba.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;var t=new Rl(this,this.h,e,void 0),n=this.s;if(this.P&&(n?Qa(n=Xa(n),this.P):n=this.P),null===this.o&&(t.H=n),this.ja)e:{for(var r=0,i=0;i<this.l.length;i++){var s=this.l[i];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(r+=s)){r=i;break e}if(4096===r||i===this.l.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=oh(this,t,r),nu(i=Ql(this.F),"RID",e),nu(i,"CVER",22),this.D&&nu(i,"X-HTTP-Session-Id",this.D),sh(this,i),this.o&&n&&Yu(i,this.o,n),Iu(this.i,t),this.Ra&&nu(i,"TYPE","init"),this.ja?(nu(i,"$req",r),nu(i,"SID","null"),t.$=!0,Ll(t,i,null)):Ll(t,i,r),this.G=2}}else 3==this.G&&(e?ih(this,e):0==this.l.length||bu(this.i)||ih(this))},ba.Ga=function(){if(this.u=null,uh(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=vl(Da(this.bb,this),e)}},ba.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ml(10),eh(this),uh(this))},ba.ab=function(){null!=this.v&&(this.v=null,eh(this),ch(this),ml(19))},ba.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ml(2)):(this.h.info("Failed to ping google.com"),ml(1))},(ba=vh.prototype).xa=function(){},ba.wa=function(){},ba.va=function(){},ba.ua=function(){},ba.Oa=function(){},wh.prototype.g=function(e,t){return new _h(e,t)},La(_h,Vc),_h.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Xc(Da(e.hb,e,t))),ml(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=mh(e,null,e.W),rh(e)},_h.prototype.close=function(){Zu(this.g)},_h.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,nh(this.g,t)}else this.v?((t={}).__data__=qc(e),nh(this.g,t)):nh(this.g,e)},_h.prototype.M=function(){this.g.j=null,delete this.j,Zu(this.g),delete this.g,_h.Z.M.call(this)},La(bh,kl),La(Eh,Al),La(Th,vh),Th.prototype.xa=function(){jc(this.g,"a")},Th.prototype.wa=function(e){jc(this.g,new bh(e))},Th.prototype.va=function(e){jc(this.g,new Eh(e))},Th.prototype.ua=function(){jc(this.g,"b")},wh.prototype.createWebChannel=wh.prototype.g,_h.prototype.send=_h.prototype.u,_h.prototype.open=_h.prototype.m,_h.prototype.close=_h.prototype.close,wl.NO_ERROR=0,wl.TIMEOUT=8,wl.HTTP_ERROR=6,_l.COMPLETE="complete",Tl.EventType=Sl,Sl.OPEN="a",Sl.CLOSE="b",Sl.ERROR="c",Sl.MESSAGE="d",Vc.prototype.listen=Vc.prototype.N,Fu.prototype.listenOnce=Fu.prototype.O,Fu.prototype.getLastError=Fu.prototype.La,Fu.prototype.getLastErrorCode=Fu.prototype.Da,Fu.prototype.getStatus=Fu.prototype.ba,Fu.prototype.getResponseJson=Fu.prototype.Qa,Fu.prototype.getResponseText=Fu.prototype.ga,Fu.prototype.send=Fu.prototype.ea;var Ih=wl,Sh=_l,kh=ul,Ah=10,Ch=11,Rh=Ou,Nh=Tl,Oh=Fu;
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
let Dh="8.8.1";
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
 */class xh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.t(e),this.i=e=>t.writeSequenceNumber(e))}t(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.i&&this.i(e),e}}xh.o=-1;
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
const Lh={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ph extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */const Mh=new ia("@firebase/firestore");function Uh(){return Mh.logLevel}function Fh(e,...t){if(Mh.logLevel<=Yo.DEBUG){const n=t.map(Bh);Mh.debug(`Firestore (${Dh}): ${e}`,...n)}}function Vh(e,...t){if(Mh.logLevel<=Yo.ERROR){const n=t.map(Bh);Mh.error(`Firestore (${Dh}): ${e}`,...n)}}function jh(e,...t){if(Mh.logLevel<=Yo.WARN){const n=t.map(Bh);Mh.warn(`Firestore (${Dh}): ${e}`,...n)}}function Bh(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(n){return e}var t}
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
 */function qh(e="Unexpected state"){const t=`FIRESTORE (${Dh}) INTERNAL ASSERTION FAILED: `+e;throw Vh(t),new Error(t)}function $h(e,t){e||qh()}function Hh(e,t){return e}
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
 */function zh(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class Kh{static u(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=zh(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Gh(e,t){return e<t?-1:e>t?1:0}function Wh(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
 */class Xh{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ph(Lh.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ph(Lh.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Ph(Lh.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ph(Lh.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xh.fromMillis(Date.now())}static fromDate(e){return Xh.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Xh(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Gh(this.nanoseconds,e.nanoseconds):Gh(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Yh{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Yh(e)}static min(){return new Yh(new Xh(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function Qh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Jh(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Zh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class ed{constructor(e,t,n){void 0===t?t=0:t>e.length&&qh(),void 0===n?n=e.length-t:n>e.length-t&&qh(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ed.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ed?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class td extends ed{construct(e,t,n){return new td(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Ph(Lh.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new td(t)}static emptyPath(){return new td([])}}const nd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rd extends ed{construct(e,t,n){return new rd(e,t,n)}static isValidIdentifier(e){return nd.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rd.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new rd(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Ph(Lh.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Ph(Lh.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Ph(Lh.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Ph(Lh.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rd(t)}static emptyPath(){return new rd([])}}
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
 */class id{constructor(e){this.fields=e,e.sort(rd.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wh(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */class sd{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new sd(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new sd(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Gh(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sd.EMPTY_BYTE_STRING=new sd("");const od=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ad(e){if($h(!!e),"string"==typeof e){let t=0;const n=od.exec(e);if($h(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:cd(e.seconds),nanos:cd(e.nanos)}}function cd(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ld(e){return"string"==typeof e?sd.fromBase64String(e):sd.fromUint8Array(e)}
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
 */function ud(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function hd(e){const t=e.mapValue.fields.__previous_value__;return ud(t)?hd(t):t}function dd(e){const t=ad(e.mapValue.fields.__local_write_time__.timestampValue);return new Xh(t.seconds,t.nanos)}
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
 */function fd(e){return null==e}function pd(e){return 0===e&&1/e==-1/0}
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
class gd{constructor(e){this.path=e}static fromPath(e){return new gd(td.fromString(e))}static fromName(e){return new gd(td.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===td.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return td.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new gd(new td(e.slice()))}}
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
 */function md(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ud(e)?4:10:qh()}function yd(e,t){const n=md(e);if(n!==md(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return dd(e).isEqual(dd(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=ad(e.timestampValue),r=ad(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,ld(e.bytesValue).isEqual(ld(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return cd(e.geoPointValue.latitude)===cd(t.geoPointValue.latitude)&&cd(e.geoPointValue.longitude)===cd(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return cd(e.integerValue)===cd(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=cd(e.doubleValue),r=cd(t.doubleValue);return n===r?pd(n)===pd(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Wh(e.arrayValue.values||[],t.arrayValue.values||[],yd);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Qh(n)!==Qh(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!yd(n[i],r[i])))return!1;return!0}(e,t);default:return qh()}var r}function vd(e,t){return void 0!==(e.values||[]).find((e=>yd(e,t)))}function wd(e,t){const n=md(e),r=md(t);if(n!==r)return Gh(n,r);switch(n){case 0:return 0;case 1:return Gh(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=cd(e.integerValue||e.doubleValue),r=cd(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return _d(e.timestampValue,t.timestampValue);case 4:return _d(dd(e),dd(t));case 5:return Gh(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ld(e),r=ld(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Gh(n[i],r[i]);if(0!==e)return e}return Gh(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Gh(cd(e.latitude),cd(t.latitude));return 0!==n?n:Gh(cd(e.longitude),cd(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=wd(n[i],r[i]);if(e)return e}return Gh(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Gh(r[o],s[o]);if(0!==e)return e;const t=wd(n[r[o]],i[s[o]]);if(0!==t)return t}return Gh(r.length,s.length)}(e.mapValue,t.mapValue);default:throw qh()}}function _d(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Gh(e,t);const n=ad(e),r=ad(t),i=Gh(n.seconds,r.seconds);return 0!==i?i:Gh(n.nanos,r.nanos)}function bd(e){return Ed(e)}function Ed(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=ad(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ld(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,gd.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Ed(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Ed(e.fields[i])}`;return n+"}"}(e.mapValue):qh();var t,n}function Td(e){return!!e&&"integerValue"in e}function Id(e){return!!e&&"arrayValue"in e}function Sd(e){return!!e&&"nullValue"in e}function kd(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ad(e){return!!e&&"mapValue"in e}function Cd(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Jh(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Cd(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Cd(e.arrayValue.values[n]);return t}return Object.assign({},e)}
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
 */class Rd{constructor(e){this.value=e}static empty(){return new Rd({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ad(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cd(t)}setAll(e){let t=rd.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Cd(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ad(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yd(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ad(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Jh(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Rd(Cd(this.value))}}function Nd(e){const t=[];return Jh(e.fields,((e,n)=>{const r=new rd([e]);if(Ad(n)){const e=Nd(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new id(t)
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
 */}class Od{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Od(e,0,Yh.min(),Rd.empty(),0)}static newFoundDocument(e,t,n){return new Od(e,1,t,n,0)}static newNoDocument(e,t){return new Od(e,2,t,Rd.empty(),0)}static newUnknownDocument(e,t){return new Od(e,3,t,Rd.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rd.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rd.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Od&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Od(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Dd{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.h=null}}function xd(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Dd(e,t,n,r,i,s,o)}function Ld(e){const t=Hh(e);if(null===t.h){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+bd(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),fd(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Gd(t.startAt)),t.endAt&&(e+="|ub:",e+=Gd(t.endAt)),t.h=e}return t.h}function Pd(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Xd(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!yd(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Qd(e.startAt,t.startAt)&&Qd(e.endAt,t.endAt)}function Md(e){return gd.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Ud extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.l(e,t,n):new Fd(e,t,n):"array-contains"===t?new qd(e,n):"in"===t?new $d(e,n):"not-in"===t?new Hd(e,n):"array-contains-any"===t?new zd(e,n):new Ud(e,t,n)}static l(e,t,n){return"in"===t?new Vd(e,n):new jd(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.m(wd(t,this.value)):null!==t&&md(this.value)===md(t)&&this.m(wd(t,this.value))}m(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return qh()}}g(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Fd extends Ud{constructor(e,t,n){super(e,t,n),this.key=gd.fromName(n.referenceValue)}matches(e){const t=gd.comparator(e.key,this.key);return this.m(t)}}class Vd extends Ud{constructor(e,t){super(e,"in",t),this.keys=Bd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class jd extends Ud{constructor(e,t){super(e,"not-in",t),this.keys=Bd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Bd(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>gd.fromName(e.referenceValue)))}class qd extends Ud{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Id(t)&&vd(t.arrayValue,this.value)}}class $d extends Ud{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&vd(this.value.arrayValue,t)}}class Hd extends Ud{constructor(e,t){super(e,"not-in",t)}matches(e){if(vd(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!vd(this.value.arrayValue,t)}}class zd extends Ud{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Id(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>vd(this.value.arrayValue,e)))}}class Kd{constructor(e,t){this.position=e,this.before=t}}function Gd(e){return`${e.before?"b":"a"}:${e.position.map((e=>bd(e))).join(",")}`}class Wd{constructor(e,t="asc"){this.field=e,this.dir=t}}function Xd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Yd(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?gd.comparator(gd.fromName(o.referenceValue),n.key):wd(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function Qd(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!yd(e.position[n],t.position[n]))return!1;return!0}
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
 */class Jd{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.p=null,this.T=null,this.startAt,this.endAt}}function Zd(e){return new Jd(e)}function ef(e){return!fd(e.limit)&&"F"===e.limitType}function tf(e){return!fd(e.limit)&&"L"===e.limitType}function nf(e){const t=Hh(e);if(null===t.p){t.p=[];const e=function(e){for(const t of e.filters)if(t.g())return t.field;return null}(t),n=function(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}(t);if(null!==e&&null===n)e.isKeyField()||t.p.push(new Wd(e)),t.p.push(new Wd(rd.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.p.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.p.push(new Wd(rd.keyField(),e))}}}return t.p}function rf(e){const t=Hh(e);if(!t.T)if("F"===t.limitType)t.T=xd(t.path,t.collectionGroup,nf(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of nf(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Wd(i.field,t))}const n=t.endAt?new Kd(t.endAt.position,!t.endAt.before):null,r=t.startAt?new Kd(t.startAt.position,!t.startAt.before):null;t.T=xd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.T}function sf(e,t){return Pd(rf(e),rf(t))&&e.limitType===t.limitType}function of(e){return`${Ld(rf(e))}|lt:${e.limitType}`}function af(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${bd(t.value)}`;var t})).join(", ")}]`),fd(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: "+Gd(e.startAt)),e.endAt&&(t+=", endAt: "+Gd(e.endAt)),`Target(${t})`}(rf(e))}; limitType=${e.limitType})`}function cf(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):gd.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!Yd(n.startAt,nf(n),r)||n.endAt&&Yd(n.endAt,nf(n),r)));var n,r}function lf(e){return(t,n)=>{let r=!1;for(const i of nf(e)){const e=uf(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function uf(e,t,n){const r=e.field.isKeyField()?gd.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?wd(r,i):qh()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return qh()}}
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
 */function hf(e,t){if(e.I){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pd(t)?"-0":t}}function df(e){return{integerValue:""+e}}function ff(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!pd(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?df(t):hf(e,t)}
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
 */class pf{constructor(){this._=void 0}}function gf(e,t,n){return e instanceof vf?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof wf?_f(e,t):e instanceof bf?Ef(e,t):function(e,t){const n=yf(e,t),r=If(n)+If(e.A);return Td(n)&&Td(e.A)?df(r):hf(e.R,r)}(e,t)}function mf(e,t,n){return e instanceof wf?_f(e,t):e instanceof bf?Ef(e,t):n}function yf(e,t){return e instanceof Tf?Td(r=t)||(n=r)&&"doubleValue"in n?t:{integerValue:0}:null;var n,r}class vf extends pf{}class wf extends pf{constructor(e){super(),this.elements=e}}function _f(e,t){const n=Sf(t);for(const r of e.elements)n.some((e=>yd(e,r)))||n.push(r);return{arrayValue:{values:n}}}class bf extends pf{constructor(e){super(),this.elements=e}}function Ef(e,t){let n=Sf(t);for(const r of e.elements)n=n.filter((e=>!yd(e,r)));return{arrayValue:{values:n}}}class Tf extends pf{constructor(e,t){super(),this.R=e,this.A=t}}function If(e){return cd(e.integerValue||e.doubleValue)}function Sf(e){return Id(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class kf{constructor(e,t){this.field=e,this.transform=t}}class Af{constructor(e,t){this.version=e,this.transformResults=t}}class Cf{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Cf}static exists(e){return new Cf(void 0,e)}static updateTime(e){return new Cf(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rf(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Nf{}function Of(e,t,n){var r;e instanceof Mf?function(e,t,n){const r=e.value.clone(),i=Vf(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Uf?function(e,t,n){if(!Rf(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Vf(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Ff(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Df(e,t,n){var r;e instanceof Mf?function(e,t,n){if(!Rf(e.precondition,t))return;const r=e.value.clone(),i=jf(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(Pf(t),r).setHasLocalMutations()}(e,t,n):e instanceof Uf?function(e,t,n){if(!Rf(e.precondition,t))return;const r=jf(e.fieldTransforms,n,t),i=t.data;i.setAll(Ff(e)),i.setAll(r),t.convertToFoundDocument(Pf(t),i).setHasLocalMutations()}(e,t,n):(r=t,Rf(e.precondition,r)&&r.convertToNoDocument(Yh.min()))}function xf(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=yf(r.transform,e||null);null!=i&&(null==n&&(n=Rd.empty()),n.set(r.field,i))}return n||null}function Lf(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Wh(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof wf&&r instanceof wf||n instanceof bf&&r instanceof bf?Wh(n.elements,r.elements,yd):n instanceof Tf&&r instanceof Tf?yd(n.A,r.A):n instanceof vf&&r instanceof vf);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}function Pf(e){return e.isFoundDocument()?e.version:Yh.min()}class Mf extends Nf{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Uf extends Nf{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ff(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Vf(e,t,n){const r=new Map;$h(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,mf(o,a,n[i]))}return r}function jf(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,gf(e,s,t))}return r}class Bf extends Nf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class qf extends Nf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
 */class $f{constructor(e){this.count=e}}
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
 */var Hf,zf;function Kf(e){if(void 0===e)return Vh("GRPC error has no .code"),Lh.UNKNOWN;switch(e){case Hf.OK:return Lh.OK;case Hf.CANCELLED:return Lh.CANCELLED;case Hf.UNKNOWN:return Lh.UNKNOWN;case Hf.DEADLINE_EXCEEDED:return Lh.DEADLINE_EXCEEDED;case Hf.RESOURCE_EXHAUSTED:return Lh.RESOURCE_EXHAUSTED;case Hf.INTERNAL:return Lh.INTERNAL;case Hf.UNAVAILABLE:return Lh.UNAVAILABLE;case Hf.UNAUTHENTICATED:return Lh.UNAUTHENTICATED;case Hf.INVALID_ARGUMENT:return Lh.INVALID_ARGUMENT;case Hf.NOT_FOUND:return Lh.NOT_FOUND;case Hf.ALREADY_EXISTS:return Lh.ALREADY_EXISTS;case Hf.PERMISSION_DENIED:return Lh.PERMISSION_DENIED;case Hf.FAILED_PRECONDITION:return Lh.FAILED_PRECONDITION;case Hf.ABORTED:return Lh.ABORTED;case Hf.OUT_OF_RANGE:return Lh.OUT_OF_RANGE;case Hf.UNIMPLEMENTED:return Lh.UNIMPLEMENTED;case Hf.DATA_LOSS:return Lh.DATA_LOSS;default:return qh()}}(zf=Hf||(Hf={}))[zf.OK=0]="OK",zf[zf.CANCELLED=1]="CANCELLED",zf[zf.UNKNOWN=2]="UNKNOWN",zf[zf.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",zf[zf.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",zf[zf.NOT_FOUND=5]="NOT_FOUND",zf[zf.ALREADY_EXISTS=6]="ALREADY_EXISTS",zf[zf.PERMISSION_DENIED=7]="PERMISSION_DENIED",zf[zf.UNAUTHENTICATED=16]="UNAUTHENTICATED",zf[zf.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",zf[zf.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",zf[zf.ABORTED=10]="ABORTED",zf[zf.OUT_OF_RANGE=11]="OUT_OF_RANGE",zf[zf.UNIMPLEMENTED=12]="UNIMPLEMENTED",zf[zf.INTERNAL=13]="INTERNAL",zf[zf.UNAVAILABLE=14]="UNAVAILABLE",zf[zf.DATA_LOSS=15]="DATA_LOSS";
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
class Gf{constructor(e,t){this.comparator=e,this.root=t||Xf.EMPTY}insert(e,t){return new Gf(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xf.BLACK,null,null))}remove(e){return new Gf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xf.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wf(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wf(this.root,e,this.comparator,!0)}}class Wf{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xf{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Xf.RED,this.left=null!=r?r:Xf.EMPTY,this.right=null!=i?i:Xf.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Xf(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xf.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Xf.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xf.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xf.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw qh();if(this.right.isRed())throw qh();const e=this.left.check();if(e!==this.right.check())throw qh();return e+(this.isRed()?0:1)}}Xf.EMPTY=null,Xf.RED=!0,Xf.BLACK=!1,Xf.EMPTY=new class{constructor(){this.size=0}get key(){throw qh()}get value(){throw qh()}get color(){throw qh()}get left(){throw qh()}get right(){throw qh()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Xf(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Yf{constructor(e){this.comparator=e,this.data=new Gf(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qf(this.data.getIterator())}getIteratorFrom(e){return new Qf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Yf))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Yf(this.comparator);return t.data=e,t}}class Qf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */const Jf=new Gf(gd.comparator);function Zf(){return Jf}const ep=new Gf(gd.comparator);function tp(){return ep}const np=new Gf(gd.comparator);const rp=new Yf(gd.comparator);function ip(...e){let t=rp;for(const n of e)t=t.add(n);return t}const sp=new Yf(Gh);function op(){return sp}
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
 */class ap{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,cp.createSynthesizedTargetChangeForCurrentChange(e,t)),new ap(Yh.min(),n,op(),Zf(),ip())}}class cp{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new cp(sd.EMPTY_BYTE_STRING,t,ip(),ip(),ip())}}
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
 */class lp{constructor(e,t,n,r){this.P=e,this.removedTargetIds=t,this.key=n,this.v=r}}class up{constructor(e,t){this.targetId=e,this.V=t}}class hp{constructor(e,t,n=sd.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class dp{constructor(){this.S=0,this.D=gp(),this.C=sd.EMPTY_BYTE_STRING,this.N=!1,this.k=!0}get current(){return this.N}get resumeToken(){return this.C}get $(){return 0!==this.S}get O(){return this.k}F(e){e.approximateByteSize()>0&&(this.k=!0,this.C=e)}M(){let e=ip(),t=ip(),n=ip();return this.D.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:qh()}})),new cp(this.C,this.N,e,t,n)}L(){this.k=!1,this.D=gp()}B(e,t){this.k=!0,this.D=this.D.insert(e,t)}U(e){this.k=!0,this.D=this.D.remove(e)}q(){this.S+=1}K(){this.S-=1}j(){this.k=!0,this.N=!0}}class fp{constructor(e){this.W=e,this.G=new Map,this.H=Zf(),this.J=pp(),this.Y=new Yf(Gh)}X(e){for(const t of e.P)e.v&&e.v.isFoundDocument()?this.Z(t,e.v):this.tt(t,e.key,e.v);for(const t of e.removedTargetIds)this.tt(t,e.key,e.v)}et(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.st(t)&&n.F(e.resumeToken);break;case 1:n.K(),n.$||n.L(),n.F(e.resumeToken);break;case 2:n.K(),n.$||this.removeTarget(t);break;case 3:this.st(t)&&(n.j(),n.F(e.resumeToken));break;case 4:this.st(t)&&(this.it(t),n.F(e.resumeToken));break;default:qh()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.G.forEach(((e,n)=>{this.st(n)&&t(n)}))}rt(e){const t=e.targetId,n=e.V.count,r=this.ot(t);if(r){const e=r.target;if(Md(e))if(0===n){const n=new gd(e.path);this.tt(t,n,Od.newNoDocument(n,Yh.min()))}else $h(1===n);else this.ct(t)!==n&&(this.it(t),this.Y=this.Y.add(t))}}ut(e){const t=new Map;this.G.forEach(((n,r)=>{const i=this.ot(r);if(i){if(n.current&&Md(i.target)){const t=new gd(i.target.path);null!==this.H.get(t)||this.at(r,t)||this.tt(r,t,Od.newNoDocument(t,e))}n.O&&(t.set(r,n.M()),n.L())}}));let n=ip();this.J.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.ot(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new ap(e,t,this.Y,this.H,n);return this.H=Zf(),this.J=pp(),this.Y=new Yf(Gh),r}Z(e,t){if(!this.st(e))return;const n=this.at(e,t.key)?2:0;this.nt(e).B(t.key,n),this.H=this.H.insert(t.key,t),this.J=this.J.insert(t.key,this.ht(t.key).add(e))}tt(e,t,n){if(!this.st(e))return;const r=this.nt(e);this.at(e,t)?r.B(t,1):r.U(t),this.J=this.J.insert(t,this.ht(t).delete(e)),n&&(this.H=this.H.insert(t,n))}removeTarget(e){this.G.delete(e)}ct(e){const t=this.nt(e).M();return this.W.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}q(e){this.nt(e).q()}nt(e){let t=this.G.get(e);return t||(t=new dp,this.G.set(e,t)),t}ht(e){let t=this.J.get(e);return t||(t=new Yf(Gh),this.J=this.J.insert(e,t)),t}st(e){const t=null!==this.ot(e);return t||Fh("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.G.get(e);return t&&t.$?null:this.W.lt(e)}it(e){this.G.set(e,new dp),this.W.getRemoteKeysForTarget(e).forEach((t=>{this.tt(e,t,null)}))}at(e,t){return this.W.getRemoteKeysForTarget(e).has(t)}}function pp(){return new Gf(gd.comparator)}function gp(){return new Gf(gd.comparator)}
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
 */const mp={asc:"ASCENDING",desc:"DESCENDING"},yp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class vp{constructor(e,t){this.databaseId=e,this.I=t}}function wp(e,t){return e.I?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function _p(e,t){return e.I?t.toBase64():t.toUint8Array()}function bp(e,t){return wp(e,t.toTimestamp())}function Ep(e){return $h(!!e),Yh.fromTimestamp(function(e){const t=ad(e);return new Xh(t.seconds,t.nanos)}(e))}function Tp(e,t){return(n=e,new td(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Ip(e){const t=td.fromString(e);return $h(Hp(t)),t}function Sp(e,t){return Tp(e.databaseId,t.path)}function kp(e,t){const n=Ip(t);if(n.get(1)!==e.databaseId.projectId)throw new Ph(Lh.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ph(Lh.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new gd(Rp(n))}function Ap(e,t){return Tp(e.databaseId,t)}function Cp(e){return new td(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Rp(e){return $h(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Np(e,t,n){return{name:Sp(e,t),fields:n.value.mapValue.fields}}function Op(e,t){return{documents:[Ap(e,t.path)]}}function Dp(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Ap(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ap(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(kd(e.value))return{unaryFilter:{field:Vp(e.field),op:"IS_NAN"}};if(Sd(e.value))return{unaryFilter:{field:Vp(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(kd(e.value))return{unaryFilter:{field:Vp(e.field),op:"IS_NOT_NAN"}};if(Sd(e.value))return{unaryFilter:{field:Vp(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vp(e.field),op:Fp(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:Vp((t=e).field),direction:Up(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=e,c=t.limit,a.I||fd(c)?c:{value:c});var a,c;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=Pp(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Pp(t.endAt)),n}function xp(e){let t=function(e){const t=Ip(e);return 4===t.length?td.emptyPath():Rp(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){$h(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Lp(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new Wd(jp((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,fd(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Mp(n.startAt));let l=null;return n.endAt&&(l=Mp(n.endAt)),function(e,t,n,r,i,s,o,a){return new Jd(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",c,l)}function Lp(e){return e?void 0!==e.unaryFilter?[qp(e)]:void 0!==e.fieldFilter?[Bp(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Lp(e))).reduce(((e,t)=>e.concat(t))):qh():[]}function Pp(e){return{before:e.before,values:e.position}}function Mp(e){const t=!!e.before,n=e.values||[];return new Kd(n,t)}function Up(e){return mp[e]}function Fp(e){return yp[e]}function Vp(e){return{fieldPath:e.canonicalString()}}function jp(e){return rd.fromServerFormat(e.fieldPath)}function Bp(e){return Ud.create(jp(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return qh()}}(e.fieldFilter.op),e.fieldFilter.value)}function qp(e){switch(e.unaryFilter.op){case"IS_NAN":const t=jp(e.unaryFilter.field);return Ud.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=jp(e.unaryFilter.field);return Ud.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=jp(e.unaryFilter.field);return Ud.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=jp(e.unaryFilter.field);return Ud.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return qh()}}function $p(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Hp(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
class zp{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class Kp{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&qh(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Kp(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Kp?t:Kp.resolve(t)}catch(t){return Kp.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Kp.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Kp.reject(t)}static resolve(e){return new Kp(((t,n)=>{t(e)}))}static reject(e){return new Kp(((t,n)=>{n(e)}))}static waitFor(e){return new Kp(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Kp.resolve(!1);for(const n of e)t=t.next((e=>e?Kp.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}function Gp(e){return"IndexedDbTransactionError"===e.name}
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
 */class Wp{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Of(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Df(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Df(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(Yh.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ip())}isEqual(e){return this.batchId===e.batchId&&Wh(this.mutations,e.mutations,((e,t)=>Lf(e,t)))&&Wh(this.baseMutations,e.baseMutations,((e,t)=>Lf(e,t)))}}class Xp{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){$h(e.mutations.length===n.length);let r=np;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Xp(e,t,n,r)}}
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
 */class Yp{constructor(e,t,n,r,i=Yh.min(),s=Yh.min(),o=sd.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Yp(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Yp(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Yp(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
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
 */class Qp{constructor(e){this.Lt=e}}function Jp(e){const t=xp({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?function(e,t,n){return new Jd(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}(t,t.limit,"L"):t}
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
 */class Zp{constructor(){this.Bt=new eg}addToCollectionParentIndex(e,t){return this.Bt.add(t),Kp.resolve()}getCollectionParents(e,t){return Kp.resolve(this.Bt.getEntries(t))}}class eg{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Yf(td.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Yf(td.comparator)).toArray()}}
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
 */class tg{constructor(e){this.Ht=e}next(){return this.Ht+=2,this.Ht}static Jt(){return new tg(0)}static Yt(){return new tg(-1)}}
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
 */async function ng(e){if(e.code!==Lh.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Fh("LocalStore","Unexpectedly lost primary lease")}
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
 */class rg{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){Jh(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Zh(this.inner)}}
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
class ig{constructor(e,t,n){this.qe=e,this._n=t,this.qt=n}mn(e,t){return this._n.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.gn(e,t,n)))}gn(e,t,n){return this.qe.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}yn(e,t){e.forEach(((e,n)=>{for(const r of t)r.applyToLocalView(n)}))}pn(e,t){return this.qe.getEntries(e,t).next((t=>this.En(e,t).next((()=>t))))}En(e,t){return this._n.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.yn(t,e)))}getDocumentsMatchingQuery(e,t,n){return r=t,gd.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Tn(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.In(e,t,n):this.An(e,t,n);var r}Tn(e,t){return this.mn(e,new gd(t)).next((e=>{let t=tp();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}In(e,t,n){const r=t.collectionGroup;let i=tp();return this.qt.getCollectionParents(e,r).next((s=>Kp.forEach(s,(s=>{const o=(a=t,c=s.child(r),new Jd(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.An(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}An(e,t,n){let r,i;return this.qe.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this._n.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(i=t,this.Rn(e,i,r).next((e=>{r=e;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=Od.newInvalidDocument(n),r=r.insert(n,i)),Df(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{cf(t,n)||(r=r.remove(e))})),r)))}Rn(e,t,n){let r=ip();for(const s of t)for(const e of s.mutations)e instanceof Uf&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.qe.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))})),i)))}}
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
 */class sg{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Pn=n,this.bn=r}static vn(e,t){let n=ip(),r=ip();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new sg(e,t.fromCache,n,r)}}
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
 */class og{Vn(e){this.Sn=e}getDocumentsMatchingQuery(e,t,n,r){return 0===(i=t).filters.length&&null===i.limit&&null==i.startAt&&null==i.endAt&&(0===i.explicitOrderBy.length||1===i.explicitOrderBy.length&&i.explicitOrderBy[0].field.isKeyField())||n.isEqual(Yh.min())?this.Dn(e,t):this.Sn.pn(e,r).next((i=>{const s=this.Cn(t,i);return(ef(t)||tf(t))&&this.Nn(t.limitType,s,r,n)?this.Dn(e,t):(Uh()<=Yo.DEBUG&&Fh("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),af(t)),this.Sn.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}));var i}Cn(e,t){let n=new Yf(lf(e));return t.forEach(((t,r)=>{cf(e,r)&&(n=n.add(r))})),n}Nn(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Dn(e,t){return Uh()<=Yo.DEBUG&&Fh("QueryEngine","Using full collection scan to execute query:",af(t)),this.Sn.getDocumentsMatchingQuery(e,t,Yh.min())}}
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
 */class ag{constructor(e,t,n,r){this.persistence=e,this.xn=t,this.R=r,this.kn=new Gf(Gh),this.$n=new rg((e=>Ld(e)),Pd),this.On=Yh.min(),this._n=e.getMutationQueue(n),this.Fn=e.getRemoteDocumentCache(),this.Ue=e.getTargetCache(),this.Mn=new ig(this.Fn,this._n,this.persistence.getIndexManager()),this.Ke=e.getBundleCache(),this.xn.Vn(this.Mn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.kn)))}}async function cg(e,t){const n=Hh(e);let r=n._n,i=n.Mn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n._n.getAllMutationBatches(e).next((o=>(s=o,r=n.persistence.getMutationQueue(t),i=new ig(n.Fn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=ip();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.pn(e,o).next((e=>({Ln:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n._n=r,n.Mn=i,n.xn.Vn(n.Mn),s}function lg(e){const t=Hh(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ue.getLastRemoteSnapshotVersion(e)))}function ug(e,t){const n=Hh(e),r=t.snapshotVersion;let i=n.kn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Fn.newChangeBuffer({trackRemovals:!0});i=n.kn;const o=[];t.targetChanges.forEach(((t,s)=>{const a=i.get(s);if(!a)return;o.push(n.Ue.removeMatchingKeys(e,t.removedDocuments,s).next((()=>n.Ue.addMatchingKeys(e,t.addedDocuments,s))));const c=t.resumeToken;if(c.approximateByteSize()>0){const d=a.withResumeToken(c,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(s,d),l=a,h=t,$h((u=d).resumeToken.approximateByteSize()>0),(0===l.resumeToken.approximateByteSize()||u.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&o.push(n.Ue.updateTargetData(e,d))}var l,u,h}));let a=Zf();if(t.documentUpdates.forEach(((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n,r,i){let s=ip();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=Zf();return n.forEach(((n,o)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(Yh.min())?(t.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),s=s.insert(n,o)):Fh("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(e,s,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(Yh.min())){const t=n.Ue.getLastRemoteSnapshotVersion(e).next((t=>n.Ue.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Kp.waitFor(o).next((()=>s.apply(e))).next((()=>n.Mn.En(e,a))).next((()=>a))})).then((e=>(n.kn=i,e)))}function hg(e,t){const n=Hh(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n._n.getNextMutationBatchAfterBatchId(e,t))))}async function dg(e,t,n){const r=Hh(e),i=r.kn.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(o){if(!Gp(o))throw o;Fh("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.kn=r.kn.remove(t),r.$n.delete(i.target)}function fg(e,t,n){const r=Hh(e);let i=Yh.min(),s=ip();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Hh(e),i=r.$n.get(n);return void 0!==i?Kp.resolve(r.kn.get(i)):r.Ue.getTargetData(t,n)}(r,e,rf(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ue.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.xn.getDocumentsMatchingQuery(e,t,n?i:Yh.min(),n?s:ip()))).next((e=>({documents:e,Bn:s})))))}
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
 */class pg{constructor(e){this.R=e,this.jn=new Map,this.Qn=new Map}getBundleMetadata(e,t){return Kp.resolve(this.jn.get(t))}saveBundleMetadata(e,t){var n;return this.jn.set(t.id,{id:(n=t).id,version:n.version,createTime:Ep(n.createTime)}),Kp.resolve()}getNamedQuery(e,t){return Kp.resolve(this.Qn.get(t))}saveNamedQuery(e,t){return this.Qn.set(t.name,{name:(n=t).name,query:Jp(n.bundledQuery),readTime:Ep(n.readTime)}),Kp.resolve();var n}}
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
 */class gg{constructor(){this.Wn=new Yf(mg.Gn),this.zn=new Yf(mg.Hn)}isEmpty(){return this.Wn.isEmpty()}addReference(e,t){const n=new mg(e,t);this.Wn=this.Wn.add(n),this.zn=this.zn.add(n)}Jn(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Yn(new mg(e,t))}Xn(e,t){e.forEach((e=>this.removeReference(e,t)))}Zn(e){const t=new gd(new td([])),n=new mg(t,e),r=new mg(t,e+1),i=[];return this.zn.forEachInRange([n,r],(e=>{this.Yn(e),i.push(e.key)})),i}ts(){this.Wn.forEach((e=>this.Yn(e)))}Yn(e){this.Wn=this.Wn.delete(e),this.zn=this.zn.delete(e)}es(e){const t=new gd(new td([])),n=new mg(t,e),r=new mg(t,e+1);let i=ip();return this.zn.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new mg(e,0),n=this.Wn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class mg{constructor(e,t){this.key=e,this.ns=t}static Gn(e,t){return gd.comparator(e.key,t.key)||Gh(e.ns,t.ns)}static Hn(e,t){return Gh(e.ns,t.ns)||gd.comparator(e.key,t.key)}}
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
 */class yg{constructor(e,t){this.qt=e,this.referenceDelegate=t,this._n=[],this.ss=1,this.rs=new Yf(mg.Gn)}checkEmpty(e){return Kp.resolve(0===this._n.length)}addMutationBatch(e,t,n,r){const i=this.ss;this.ss++,this._n.length>0&&this._n[this._n.length-1];const s=new Wp(i,t,n,r);this._n.push(s);for(const o of r)this.rs=this.rs.add(new mg(o.key,i)),this.qt.addToCollectionParentIndex(e,o.key.path.popLast());return Kp.resolve(s)}lookupMutationBatch(e,t){return Kp.resolve(this.os(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.cs(n),i=r<0?0:r;return Kp.resolve(this._n.length>i?this._n[i]:null)}getHighestUnacknowledgedBatchId(){return Kp.resolve(0===this._n.length?-1:this.ss-1)}getAllMutationBatches(e){return Kp.resolve(this._n.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new mg(t,0),r=new mg(t,Number.POSITIVE_INFINITY),i=[];return this.rs.forEachInRange([n,r],(e=>{const t=this.os(e.ns);i.push(t)})),Kp.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Yf(Gh);return t.forEach((e=>{const t=new mg(e,0),r=new mg(e,Number.POSITIVE_INFINITY);this.rs.forEachInRange([t,r],(e=>{n=n.add(e.ns)}))})),Kp.resolve(this.us(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;gd.isDocumentKey(i)||(i=i.child(""));const s=new mg(new gd(i),0);let o=new Yf(Gh);return this.rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ns)),!0)}),s),Kp.resolve(this.us(o))}us(e){const t=[];return e.forEach((e=>{const n=this.os(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){$h(0===this.hs(t.batchId,"removed")),this._n.shift();let n=this.rs;return Kp.forEach(t.mutations,(r=>{const i=new mg(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.rs=n}))}Gt(e){}containsKey(e,t){const n=new mg(t,0),r=this.rs.firstAfterOrEqual(n);return Kp.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this._n.length,Kp.resolve()}hs(e,t){return this.cs(e)}cs(e){return 0===this._n.length?0:e-this._n[0].batchId}os(e){const t=this.cs(e);return t<0||t>=this._n.length?null:this._n[t]}}
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
 */class vg{constructor(e,t){this.qt=e,this.ls=t,this.docs=new Gf(gd.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ls(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.qt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Kp.resolve(n?n.document.clone():Od.newInvalidDocument(t))}getEntries(e,t){let n=Zf();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():Od.newInvalidDocument(e))})),Kp.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=Zf();const i=new gd(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||cf(t,i)&&(r=r.insert(i.key,i.clone()))}return Kp.resolve(r)}fs(e,t){return Kp.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new wg(this)}getSize(e){return Kp.resolve(this.size)}}class wg extends class{constructor(){this.changes=new rg((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:Yh.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:Od.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Kp.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}{constructor(e){super(),this.Ie=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.Ie.addEntry(e,r.document,this.getReadTime(n))):this.Ie.removeEntry(n)})),Kp.waitFor(t)}getFromCache(e,t){return this.Ie.getEntry(e,t)}getAllFromCache(e,t){return this.Ie.getEntries(e,t)}}
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
 */class _g{constructor(e){this.persistence=e,this.ds=new rg((e=>Ld(e)),Pd),this.lastRemoteSnapshotVersion=Yh.min(),this.highestTargetId=0,this.ws=0,this._s=new gg,this.targetCount=0,this.gs=tg.Jt()}forEachTarget(e,t){return this.ds.forEach(((e,n)=>t(n))),Kp.resolve()}getLastRemoteSnapshotVersion(e){return Kp.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Kp.resolve(this.ws)}allocateTargetId(e){return this.highestTargetId=this.gs.next(),Kp.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ws&&(this.ws=t),Kp.resolve()}te(e){this.ds.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.gs=new tg(t),this.highestTargetId=t),e.sequenceNumber>this.ws&&(this.ws=e.sequenceNumber)}addTargetData(e,t){return this.te(t),this.targetCount+=1,Kp.resolve()}updateTargetData(e,t){return this.te(t),Kp.resolve()}removeTargetData(e,t){return this.ds.delete(t.target),this._s.Zn(t.targetId),this.targetCount-=1,Kp.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.ds.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.ds.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Kp.waitFor(i).next((()=>r))}getTargetCount(e){return Kp.resolve(this.targetCount)}getTargetData(e,t){const n=this.ds.get(t)||null;return Kp.resolve(n)}addMatchingKeys(e,t,n){return this._s.Jn(t,n),Kp.resolve()}removeMatchingKeys(e,t,n){this._s.Xn(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Kp.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._s.Zn(t),Kp.resolve()}getMatchingKeysForTargetId(e,t){const n=this._s.es(t);return Kp.resolve(n)}containsKey(e,t){return Kp.resolve(this._s.containsKey(t))}}
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
 */class bg{constructor(e,t){var n;this.ys={},this.Ne=new xh(0),this.xe=!1,this.xe=!0,this.referenceDelegate=e(this),this.Ue=new _g(this),this.qt=new Zp,this.qe=(n=this.qt,new vg(n,(e=>this.referenceDelegate.ps(e)))),this.R=new Qp(t),this.Ke=new pg(this.R)}start(){return Promise.resolve()}shutdown(){return this.xe=!1,Promise.resolve()}get started(){return this.xe}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.qt}getMutationQueue(e){let t=this.ys[e.toKey()];return t||(t=new yg(this.qt,this.referenceDelegate),this.ys[e.toKey()]=t),t}getTargetCache(){return this.Ue}getRemoteDocumentCache(){return this.qe}getBundleCache(){return this.Ke}runTransaction(e,t,n){Fh("MemoryPersistence","Starting transaction:",e);const r=new Eg(this.Ne.next());return this.referenceDelegate.Es(),n(r).next((e=>this.referenceDelegate.Ts(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Is(e,t){return Kp.or(Object.values(this.ys).map((n=>()=>n.containsKey(e,t))))}}class Eg extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}{constructor(e){super(),this.currentSequenceNumber=e}}class Tg{constructor(e){this.persistence=e,this.As=new gg,this.Rs=null}static Ps(e){return new Tg(e)}get bs(){if(this.Rs)return this.Rs;throw qh()}addReference(e,t,n){return this.As.addReference(n,t),this.bs.delete(n.toString()),Kp.resolve()}removeReference(e,t,n){return this.As.removeReference(n,t),this.bs.add(n.toString()),Kp.resolve()}markPotentiallyOrphaned(e,t){return this.bs.add(t.toString()),Kp.resolve()}removeTarget(e,t){this.As.Zn(t.targetId).forEach((e=>this.bs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.bs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Es(){this.Rs=new Set}Ts(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Kp.forEach(this.bs,(n=>{const r=gd.fromPath(n);return this.vs(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Rs=null,t.apply(e))))}updateLimboDocument(e,t){return this.vs(e,t).next((e=>{e?this.bs.delete(t.toString()):this.bs.add(t.toString())}))}ps(e){return 0}vs(e,t){return Kp.or([()=>Kp.resolve(this.As.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Is(e,t)])}}
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
 */class Ig{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ig.UNAUTHENTICATED=new Ig(null),Ig.GOOGLE_CREDENTIALS=new Ig("google-credentials-uid"),Ig.FIRST_PARTY=new Ig("first-party-uid");class Sg{constructor(){this.activeTargetIds=op()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}Cs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kg{constructor(){this.li=new Sg,this.fi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.li.Ds(e),this.fi[e]||"not-current"}updateQueryState(e,t,n){this.fi[e]=t}removeLocalQueryTarget(e){this.li.Cs(e)}isLocalQueryTarget(e){return this.li.activeTargetIds.has(e)}clearQueryState(e){delete this.fi[e]}getAllActiveQueryTargets(){return this.li.activeTargetIds}isActiveQueryTarget(e){return this.li.activeTargetIds.has(e)}start(){return this.li=new Sg,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
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
 */class Ag{di(e){}shutdown(){}}
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
 */class Cg{constructor(){this.wi=()=>this._i(),this.mi=()=>this.gi(),this.yi=[],this.pi()}di(e){this.yi.push(e)}shutdown(){window.removeEventListener("online",this.wi),window.removeEventListener("offline",this.mi)}pi(){window.addEventListener("online",this.wi),window.addEventListener("offline",this.mi)}_i(){Fh("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.yi)e(0)}gi(){Fh("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.yi)e(1)}static gt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const Rg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class Ng{constructor(e){this.Ei=e.Ei,this.Ti=e.Ti}Ii(e){this.Ai=e}Ri(e){this.Pi=e}onMessage(e){this.bi=e}close(){this.Ti()}send(e){this.Ei(e)}vi(){this.Ai()}Vi(e){this.Pi(e)}Si(e){this.bi(e)}}
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
 */class Og extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Di=t+"://"+e.host,this.Ci="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Ni(e,t,n,r){const i=this.xi(e,t);Fh("RestConnection","Sending: ",i,n);const s={};return this.ki(s,r),this.$i(e,i,s,n).then((e=>(Fh("RestConnection","Received: ",e),e)),(t=>{throw jh("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}Oi(e,t,n,r){return this.Ni(e,t,n,r)}ki(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+Dh,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const n in t.authHeaders)t.authHeaders.hasOwnProperty(n)&&(e[n]=t.authHeaders[n])}xi(e,t){const n=Rg[e];return`${this.Di}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}$i(e,t,n,r){return new Promise(((i,s)=>{const o=new Oh;o.listenOnce(Sh.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ih.NO_ERROR:const t=o.getResponseJson();Fh("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Ih.TIMEOUT:Fh("Connection",'RPC "'+e+'" timed out'),s(new Ph(Lh.DEADLINE_EXCEEDED,"Request time out"));break;case Ih.HTTP_ERROR:const n=o.getStatus();if(Fh("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Lh).indexOf(t)>=0?t:Lh.UNKNOWN}(e.status);s(new Ph(t,e.message))}else s(new Ph(Lh.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Ph(Lh.UNAVAILABLE,"Connection failed."));break;default:qh()}}finally{Fh("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}Fi(e,t){const n=[this.Di,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=new wh,i=dl(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new Rh({})),this.ki(s.initMessageHeaders,t),Oo()||xo()||No().indexOf("Electron/")>=0||Lo()||No().indexOf("MSAppHost/")>=0||Do()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");Fh("Connection","Creating WebChannel: "+o,s);const a=r.createWebChannel(o,s);let c=!1,l=!1;const u=new Ng({Ei:e=>{l?Fh("Connection","Not sending because WebChannel is closed:",e):(c||(Fh("Connection","Opening WebChannel transport."),a.open(),c=!0),Fh("Connection","WebChannel sending:",e),a.send(e))},Ti:()=>a.close()}),h=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return h(a,Nh.EventType.OPEN,(()=>{l||Fh("Connection","WebChannel transport opened.")})),h(a,Nh.EventType.CLOSE,(()=>{l||(l=!0,Fh("Connection","WebChannel transport closed"),u.Vi())})),h(a,Nh.EventType.ERROR,(e=>{l||(l=!0,jh("Connection","WebChannel transport errored:",e),u.Vi(new Ph(Lh.UNAVAILABLE,"The operation could not be completed")))})),h(a,Nh.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];$h(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Fh("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Hf[e];if(void 0!==t)return Kf(t)}(e),n=i.message;void 0===t&&(t=Lh.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),l=!0,u.Vi(new Ph(t,n)),a.close()}else Fh("Connection","WebChannel received:",n),u.Si(n)}})),h(i,kh.STAT_EVENT,(e=>{e.stat===Ah?Fh("Connection","Detected buffering proxy"):e.stat===Ch&&Fh("Connection","Detected no buffering proxy")})),setTimeout((()=>{u.vi()}),0),u}}function Dg(){return"undefined"!=typeof document?document:null}
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
 */function xg(e){return new vp(e,!0)}class Lg{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Se=e,this.timerId=t,this.Mi=n,this.Li=r,this.Bi=i,this.Ui=0,this.qi=null,this.Ki=Date.now(),this.reset()}reset(){this.Ui=0}ji(){this.Ui=this.Bi}Qi(e){this.cancel();const t=Math.floor(this.Ui+this.Wi()),n=Math.max(0,Date.now()-this.Ki),r=Math.max(0,t-n);r>0&&Fh("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ui} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.qi=this.Se.enqueueAfterDelay(this.timerId,r,(()=>(this.Ki=Date.now(),e()))),this.Ui*=this.Li,this.Ui<this.Mi&&(this.Ui=this.Mi),this.Ui>this.Bi&&(this.Ui=this.Bi)}Gi(){null!==this.qi&&(this.qi.skipDelay(),this.qi=null)}cancel(){null!==this.qi&&(this.qi.cancel(),this.qi=null)}Wi(){return(Math.random()-.5)*this.Ui}}
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
 */class Pg{constructor(e,t,n,r,i,s){this.Se=e,this.zi=n,this.Hi=r,this.Ji=i,this.listener=s,this.state=0,this.Yi=0,this.Xi=null,this.stream=null,this.Zi=new Lg(e,t)}tr(){return 1===this.state||2===this.state||4===this.state}er(){return 2===this.state}start(){3!==this.state?this.auth():this.nr()}async stop(){this.tr()&&await this.close(0)}sr(){this.state=0,this.Zi.reset()}ir(){this.er()&&null===this.Xi&&(this.Xi=this.Se.enqueueAfterDelay(this.zi,6e4,(()=>this.rr())))}cr(e){this.ur(),this.stream.send(e)}async rr(){if(this.er())return this.close(0)}ur(){this.Xi&&(this.Xi.cancel(),this.Xi=null)}async close(e,t){this.ur(),this.Zi.cancel(),this.Yi++,3!==e?this.Zi.reset():t&&t.code===Lh.RESOURCE_EXHAUSTED?(Vh(t.toString()),Vh("Using maximum backoff delay to prevent overloading the backend."),this.Zi.ji()):t&&t.code===Lh.UNAUTHENTICATED&&this.Ji.invalidateToken(),null!==this.stream&&(this.ar(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ri(t)}ar(){}auth(){this.state=1;const e=this.hr(this.Yi),t=this.Yi;this.Ji.getToken().then((e=>{this.Yi===t&&this.lr(e)}),(t=>{e((()=>{const e=new Ph(Lh.UNKNOWN,"Fetching auth token failed: "+t.message);return this.dr(e)}))}))}lr(e){const t=this.hr(this.Yi);this.stream=this.wr(e),this.stream.Ii((()=>{t((()=>(this.state=2,this.listener.Ii())))})),this.stream.Ri((e=>{t((()=>this.dr(e)))})),this.stream.onMessage((e=>{t((()=>this.onMessage(e)))}))}nr(){this.state=4,this.Zi.Qi((async()=>{this.state=0,this.start()}))}dr(e){return Fh("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}hr(e){return t=>{this.Se.enqueueAndForget((()=>this.Yi===e?t():(Fh("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Mg extends Pg{constructor(e,t,n,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle",t,n,i),this.R=r}wr(e){return this.Hi.Fi("Listen",e)}onMessage(e){this.Zi.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:qh(),s=t.targetChange.targetIds||[],o=function(e,t){return e.I?($h(void 0===t||"string"==typeof t),sd.fromBase64String(t||"")):($h(void 0===t||t instanceof Uint8Array),sd.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?Lh.UNKNOWN:Kf(e.code);return new Ph(t,e.message||"")}(a);n=new hp(i,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=kp(e,r.document.name),s=Ep(r.document.updateTime),o=new Rd({mapValue:{fields:r.document.fields}}),a=Od.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new lp(c,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=kp(e,r.document),s=r.readTime?Ep(r.readTime):Yh.min(),o=Od.newNoDocument(i,s),a=r.removedTargetIds||[];n=new lp([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=kp(e,r.document),s=r.removedTargetIds||[];n=new lp([],s,i,null)}else{if(!("filter"in t))return qh();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new $f(r),s=e.targetId;n=new up(s,i)}}var r;return n}(this.R,e),n=function(e){if(!("targetChange"in e))return Yh.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Yh.min():t.readTime?Ep(t.readTime):Yh.min()}(e);return this.listener._r(t,n)}mr(e){const t={};t.database=Cp(this.R),t.addTarget=function(e,t){let n;const r=t.target;return n=Md(r)?{documents:Op(e,r)}:{query:Dp(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=_p(e,t.resumeToken):t.snapshotVersion.compareTo(Yh.min())>0&&(n.readTime=wp(e,t.snapshotVersion.toTimestamp())),n}(this.R,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return qh()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.R,e);n&&(t.labels=n),this.cr(t)}gr(e){const t={};t.database=Cp(this.R),t.removeTarget=e,this.cr(t)}}class Ug extends Pg{constructor(e,t,n,r,i){super(e,"write_stream_connection_backoff","write_stream_idle",t,n,i),this.R=r,this.yr=!1}get pr(){return this.yr}start(){this.yr=!1,this.lastStreamToken=void 0,super.start()}ar(){this.yr&&this.Er([])}wr(e){return this.Hi.Fi("Write",e)}onMessage(e){if($h(!!e.streamToken),this.lastStreamToken=e.streamToken,this.yr){this.Zi.reset();const t=function(e,t){return e&&e.length>0?($h(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ep(e.updateTime):Ep(t);return n.isEqual(Yh.min())&&(n=Ep(t)),new Af(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Ep(e.commitTime);return this.listener.Tr(n,t)}return $h(!e.writeResults||0===e.writeResults.length),this.yr=!0,this.listener.Ir()}Ar(){const e={};e.database=Cp(this.R),this.cr(e)}Er(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof Mf)n={update:Np(e,t.key,t.value)};else if(t instanceof Bf)n={delete:Sp(e,t.key)};else if(t instanceof Uf)n={update:Np(e,t.key,t.data),updateMask:$p(t.fieldMask)};else{if(!(t instanceof qf))return qh();n={verify:Sp(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof vf)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof wf)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof bf)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Tf)return{fieldPath:t.field.canonicalString(),increment:n.A};throw qh()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:bp(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:qh())),n;var r,i}(this.R,e)))};this.cr(t)}}
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
 */class Fg extends class{}{constructor(e,t,n){super(),this.credentials=e,this.Hi=t,this.R=n,this.Rr=!1}Pr(){if(this.Rr)throw new Ph(Lh.FAILED_PRECONDITION,"The client has already been terminated.")}Ni(e,t,n){return this.Pr(),this.credentials.getToken().then((r=>this.Hi.Ni(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Lh.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new Ph(Lh.UNKNOWN,e.toString())}))}Oi(e,t,n){return this.Pr(),this.credentials.getToken().then((r=>this.Hi.Oi(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Lh.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new Ph(Lh.UNKNOWN,e.toString())}))}terminate(){this.Rr=!0}}class Vg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.br=0,this.vr=null,this.Vr=!0}Sr(){0===this.br&&(this.Dr("Unknown"),this.vr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.vr=null,this.Cr("Backend didn't respond within 10 seconds."),this.Dr("Offline"),Promise.resolve()))))}Nr(e){"Online"===this.state?this.Dr("Unknown"):(this.br++,this.br>=1&&(this.kr(),this.Cr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Dr("Offline")))}set(e){this.kr(),this.br=0,"Online"===e&&(this.Vr=!1),this.Dr(e)}Dr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Cr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Vr?(Vh(t),this.Vr=!1):Fh("OnlineStateTracker",t)}kr(){null!==this.vr&&(this.vr.cancel(),this.vr=null)}}
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
 */class jg{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.$r=[],this.Or=new Map,this.Fr=new Set,this.Mr=[],this.Lr=i,this.Lr.di((e=>{n.enqueueAndForget((async()=>{Xg(this)&&(Fh("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Hh(e);t.Fr.add(4),await qg(t),t.Br.set("Unknown"),t.Fr.delete(4),await Bg(t)}(this))}))})),this.Br=new Vg(n,r)}}async function Bg(e){if(Xg(e))for(const t of e.Mr)await t(!0)}async function qg(e){for(const t of e.Mr)await t(!1)}function $g(e,t){const n=Hh(e);n.Or.has(t.targetId)||(n.Or.set(t.targetId,t),Wg(n)?Gg(n):hm(n).er()&&zg(n,t))}function Hg(e,t){const n=Hh(e),r=hm(n);n.Or.delete(t),r.er()&&Kg(n,t),0===n.Or.size&&(r.er()?r.ir():Xg(n)&&n.Br.set("Unknown"))}function zg(e,t){e.Ur.q(t.targetId),hm(e).mr(t)}function Kg(e,t){e.Ur.q(t),hm(e).gr(t)}function Gg(e){e.Ur=new fp({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.Or.get(t)||null}),hm(e).start(),e.Br.Sr()}function Wg(e){return Xg(e)&&!hm(e).tr()&&e.Or.size>0}function Xg(e){return 0===Hh(e).Fr.size}function Yg(e){e.Ur=void 0}async function Qg(e){e.Or.forEach(((t,n)=>{zg(e,t)}))}async function Jg(e,t){Yg(e),Wg(e)?(e.Br.Nr(t),Gg(e)):e.Br.set("Unknown")}async function Zg(e,t,n){if(e.Br.set("Online"),t instanceof hp&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Or.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Or.delete(r),e.Ur.removeTarget(r))}(e,t)}catch(r){Fh("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await em(e,r)}else if(t instanceof lp?e.Ur.X(t):t instanceof up?e.Ur.rt(t):e.Ur.et(t),!n.isEqual(Yh.min()))try{const t=await lg(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Ur.ut(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Or.get(r);i&&e.Or.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.Or.get(t);if(!n)return;e.Or.set(t,n.withResumeToken(sd.EMPTY_BYTE_STRING,n.snapshotVersion)),Kg(e,t);const r=new Yp(n.target,t,1,n.sequenceNumber);zg(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){Fh("RemoteStore","Failed to raise snapshot:",i),await em(e,i)}}async function em(e,t,n){if(!Gp(t))throw t;e.Fr.add(1),await qg(e),e.Br.set("Offline"),n||(n=()=>lg(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Fh("RemoteStore","Retrying IndexedDB access"),await n(),e.Fr.delete(1),await Bg(e)}))}function tm(e,t){return t().catch((n=>em(e,n,t)))}async function nm(e){const t=Hh(e),n=dm(t);let r=t.$r.length>0?t.$r[t.$r.length-1].batchId:-1;for(;rm(t);)try{const e=await hg(t.localStore,r);if(null===e){0===t.$r.length&&n.ir();break}r=e.batchId,im(t,e)}catch(i){await em(t,i)}sm(t)&&om(t)}function rm(e){return Xg(e)&&e.$r.length<10}function im(e,t){e.$r.push(t);const n=dm(e);n.er()&&n.pr&&n.Er(t.mutations)}function sm(e){return Xg(e)&&!dm(e).tr()&&e.$r.length>0}function om(e){dm(e).start()}async function am(e){dm(e).Ar()}async function cm(e){const t=dm(e);for(const n of e.$r)t.Er(n.mutations)}async function lm(e,t,n){const r=e.$r.shift(),i=Xp.from(r,t,n);await tm(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await nm(e)}async function um(e,t){t&&dm(e).pr&&await async function(e,t){if(function(e){switch(e){case Lh.OK:return qh();case Lh.CANCELLED:case Lh.UNKNOWN:case Lh.DEADLINE_EXCEEDED:case Lh.RESOURCE_EXHAUSTED:case Lh.INTERNAL:case Lh.UNAVAILABLE:case Lh.UNAUTHENTICATED:return!1;case Lh.INVALID_ARGUMENT:case Lh.NOT_FOUND:case Lh.ALREADY_EXISTS:case Lh.PERMISSION_DENIED:case Lh.FAILED_PRECONDITION:case Lh.ABORTED:case Lh.OUT_OF_RANGE:case Lh.UNIMPLEMENTED:case Lh.DATA_LOSS:return!0;default:return qh()}}(n=t.code)&&n!==Lh.ABORTED){const n=e.$r.shift();dm(e).sr(),await tm(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await nm(e)}var n}(e,t),sm(e)&&om(e)}function hm(e){return e.qr||(e.qr=function(e,t,n){const r=Hh(e);return r.Pr(),new Mg(t,r.Hi,r.credentials,r.R,n)}(e.datastore,e.asyncQueue,{Ii:Qg.bind(null,e),Ri:Jg.bind(null,e),_r:Zg.bind(null,e)}),e.Mr.push((async t=>{t?(e.qr.sr(),Wg(e)?Gg(e):e.Br.set("Unknown")):(await e.qr.stop(),Yg(e))}))),e.qr}function dm(e){return e.Kr||(e.Kr=function(e,t,n){const r=Hh(e);return r.Pr(),new Ug(t,r.Hi,r.credentials,r.R,n)}(e.datastore,e.asyncQueue,{Ii:am.bind(null,e),Ri:um.bind(null,e),Ir:cm.bind(null,e),Tr:lm.bind(null,e)}),e.Mr.push((async t=>{t?(e.Kr.sr(),await nm(e)):(await e.Kr.stop(),e.$r.length>0&&(Fh("RemoteStore",`Stopping write stream with ${e.$r.length} pending writes`),e.$r=[]))}))),e.Kr
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
 */}class fm{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new zp,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new fm(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ph(Lh.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pm(e,t){if(Vh("AsyncQueue",`${t}: ${e}`),Gp(e))return new Ph(Lh.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class gm{constructor(e){this.comparator=e?(t,n)=>e(t,n)||gd.comparator(t.key,n.key):(e,t)=>gd.comparator(e.key,t.key),this.keyedMap=tp(),this.sortedSet=new Gf(this.comparator)}static emptySet(e){return new gm(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gm))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new gm;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class mm{constructor(){this.jr=new Gf(gd.comparator)}track(e){const t=e.doc.key,n=this.jr.get(t);n?0!==e.type&&3===n.type?this.jr=this.jr.insert(t,e):3===e.type&&1!==n.type?this.jr=this.jr.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.jr=this.jr.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.jr=this.jr.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.jr=this.jr.remove(t):1===e.type&&2===n.type?this.jr=this.jr.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.jr=this.jr.insert(t,{type:2,doc:e.doc}):qh():this.jr=this.jr.insert(t,e)}Qr(){const e=[];return this.jr.inorderTraversal(((t,n)=>{e.push(n)})),e}}class ym{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new ym(e,t,gm.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class vm{constructor(){this.Wr=void 0,this.listeners=[]}}class wm{constructor(){this.queries=new rg((e=>of(e)),sf),this.onlineState="Unknown",this.Gr=new Set}}function _m(e,t){const n=Hh(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Hr(i)&&(r=!0);t.Wr=i}}r&&Em(n)}function bm(e,t,n){const r=Hh(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Em(e){e.Gr.forEach((e=>{e.next()}))}class Tm{constructor(e,t,n){this.query=e,this.Jr=t,this.Yr=!1,this.Xr=null,this.onlineState="Unknown",this.options=n||{}}Hr(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new ym(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.Yr?this.Zr(e)&&(this.Jr.next(e),t=!0):this.eo(e,this.onlineState)&&(this.no(e),t=!0),this.Xr=e,t}onError(e){this.Jr.error(e)}zr(e){this.onlineState=e;let t=!1;return this.Xr&&!this.Yr&&this.eo(this.Xr,e)&&(this.no(this.Xr),t=!0),t}eo(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.so&&n||e.docs.isEmpty()&&"Offline"!==t)}Zr(e){if(e.docChanges.length>0)return!0;const t=this.Xr&&this.Xr.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}no(e){e=ym.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Yr=!0,this.Jr.next(e)}}
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
 */class Im{constructor(e){this.key=e}}class Sm{constructor(e){this.key=e}}class km{constructor(e,t){this.query=e,this.uo=t,this.ao=null,this.current=!1,this.ho=ip(),this.mutatedKeys=ip(),this.lo=lf(e),this.fo=new gm(this.lo)}get wo(){return this.uo}_o(e,t){const n=t?t.mo:new mm,r=t?t.fo:this.fo;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=ef(this.query)&&r.size===this.query.limit?r.last():null,c=tf(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),u=cf(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.yo(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.lo(u,a)>0||c&&this.lo(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),ef(this.query)||tf(this.query))for(;s.size>this.query.limit;){const e=ef(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{fo:s,mo:n,Nn:o,mutatedKeys:i}}yo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.fo;this.fo=e.fo,this.mutatedKeys=e.mutatedKeys;const i=e.mo.Qr();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return qh()}};return n(e)-n(t)}(e.type,t.type)||this.lo(e.doc,t.doc))),this.po(n);const s=t?this.Eo():[],o=0===this.ho.size&&this.current?1:0,a=o!==this.ao;return this.ao=o,0!==i.length||a?{snapshot:new ym(this.query,e.fo,r,i,e.mutatedKeys,0===o,a,!1),To:s}:{To:s}}zr(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({fo:this.fo,mo:new mm,mutatedKeys:this.mutatedKeys,Nn:!1},!1)):{To:[]}}Io(e){return!this.uo.has(e)&&!!this.fo.has(e)&&!this.fo.get(e).hasLocalMutations}po(e){e&&(e.addedDocuments.forEach((e=>this.uo=this.uo.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.uo=this.uo.delete(e))),this.current=e.current)}Eo(){if(!this.current)return[];const e=this.ho;this.ho=ip(),this.fo.forEach((e=>{this.Io(e.key)&&(this.ho=this.ho.add(e.key))}));const t=[];return e.forEach((e=>{this.ho.has(e)||t.push(new Sm(e))})),this.ho.forEach((n=>{e.has(n)||t.push(new Im(n))})),t}Ao(e){this.uo=e.Bn,this.ho=ip();const t=this._o(e.documents);return this.applyChanges(t,!0)}Ro(){return ym.fromInitialDocuments(this.query,this.fo,this.mutatedKeys,0===this.ao)}}class Am{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Cm{constructor(e){this.key=e,this.Po=!1}}class Rm{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.bo={},this.vo=new rg((e=>of(e)),sf),this.Vo=new Map,this.So=new Set,this.Do=new Gf(gd.comparator),this.Co=new Map,this.No=new gg,this.xo={},this.ko=new Map,this.$o=tg.Yt(),this.onlineState="Unknown",this.Oo=void 0}get isPrimaryClient(){return!0===this.Oo}}async function Nm(e,t){const n=function(e){const t=Hh(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=xm.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Pm.bind(null,t),t.bo._r=_m.bind(null,t.eventManager),t.bo.Mo=bm.bind(null,t.eventManager),t}(e);let r,i;const s=n.vo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ro();else{const e=await function(e,t){const n=Hh(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ue.getTargetData(e,t).next((i=>i?(r=i,Kp.resolve(r)):n.Ue.allocateTargetId(e).next((i=>(r=new Yp(t,i,0,e.currentSequenceNumber),n.Ue.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.kn.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.kn=n.kn.insert(e.targetId,e),n.$n.set(t,e.targetId)),e}))}(n.localStore,rf(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await async function(e,t,n,r){e.Fo=(t,n,r)=>async function(e,t,n,r){let i=t.view._o(n);i.Nn&&(i=await fg(e.localStore,t.query,!1).then((({documents:e})=>t.view._o(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return qm(e,t.targetId,o.To),o.snapshot}(e,t,n,r);const i=await fg(e.localStore,t,!0),s=new km(t,i.Bn),o=s._o(i.documents),a=cp.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);qm(e,n,c.To);const l=new Am(t,n,s);return e.vo.set(t,l),e.Vo.has(n)?e.Vo.get(n).push(t):e.Vo.set(n,[t]),c.snapshot}(n,t,r,"current"===s),n.isPrimaryClient&&$g(n.remoteStore,e)}return i}async function Om(e,t){const n=Hh(e),r=n.vo.get(t),i=n.Vo.get(r.targetId);if(i.length>1)return n.Vo.set(r.targetId,i.filter((e=>!sf(e,t)))),void n.vo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await dg(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Hg(n.remoteStore,r.targetId),jm(n,r.targetId)})).catch(ng)):(jm(n,r.targetId),await dg(n.localStore,r.targetId,!0))}async function Dm(e,t,n){const r=function(e){const t=Hh(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Mm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Um.bind(null,t),t}(e);try{const e=await function(e,t){const n=Hh(e),r=Xh.now(),i=t.reduce(((e,t)=>e.add(t.key)),ip());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Mn.pn(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=xf(e,s.get(e.key));null!=t&&o.push(new Uf(e.key,t,Nd(t.value.mapValue),Cf.exists(!0)))}return n._n.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.xo[e.currentUser.toKey()];r||(r=new Gf(Gh)),r=r.insert(t,n),e.xo[e.currentUser.toKey()]=r}(r,e.batchId,n),await zm(r,e.changes),await nm(r.remoteStore)}catch(i){const e=pm(i,"Failed to persist write");n.reject(e)}}async function xm(e,t){const n=Hh(e);try{const e=await ug(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Co.get(t);r&&($h(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Po=!0:e.modifiedDocuments.size>0?$h(r.Po):e.removedDocuments.size>0&&($h(r.Po),r.Po=!1))})),await zm(n,e,t)}catch(r){await ng(r)}}function Lm(e,t,n){const r=Hh(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.vo.forEach(((n,r)=>{const i=r.view.zr(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Hh(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.zr(t)&&(r=!0)})),r&&Em(n)}(r.eventManager,t),e.length&&r.bo._r(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Pm(e,t,n){const r=Hh(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Co.get(t),s=i&&i.key;if(s){let e=new Gf(gd.comparator);e=e.insert(s,Od.newNoDocument(s,Yh.min()));const n=ip().add(s),i=new ap(Yh.min(),new Map,new Yf(Gh),e,n);await xm(r,i),r.Do=r.Do.remove(s),r.Co.delete(t),Hm(r)}else await dg(r.localStore,t,!1).then((()=>jm(r,t,n))).catch(ng)}async function Mm(e,t){const n=Hh(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Hh(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Fn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Kp.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);$h(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e._n.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n._n.performConsistencyCheck(e))).next((()=>n.Mn.pn(e,r)))}))}(n.localStore,t);Vm(n,r,null),Fm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zm(n,e)}catch(i){await ng(i)}}async function Um(e,t,n){const r=Hh(e);try{const e=await function(e,t){const n=Hh(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n._n.lookupMutationBatch(e,t).next((t=>($h(null!==t),r=t.keys(),n._n.removeMutationBatch(e,t)))).next((()=>n._n.performConsistencyCheck(e))).next((()=>n.Mn.pn(e,r)))}))}(r.localStore,t);Vm(r,t,n),Fm(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await zm(r,e)}catch(i){await ng(i)}}function Fm(e,t){(e.ko.get(t)||[]).forEach((e=>{e.resolve()})),e.ko.delete(t)}function Vm(e,t,n){const r=Hh(e);let i=r.xo[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.xo[r.currentUser.toKey()]=i}}function jm(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Vo.get(t))e.vo.delete(r),n&&e.bo.Mo(r,n);e.Vo.delete(t),e.isPrimaryClient&&e.No.Zn(t).forEach((t=>{e.No.containsKey(t)||Bm(e,t)}))}function Bm(e,t){e.So.delete(t.path.canonicalString());const n=e.Do.get(t);null!==n&&(Hg(e.remoteStore,n),e.Do=e.Do.remove(t),e.Co.delete(n),Hm(e))}function qm(e,t,n){for(const r of n)r instanceof Im?(e.No.addReference(r.key,t),$m(e,r)):r instanceof Sm?(Fh("SyncEngine","Document no longer in limbo: "+r.key),e.No.removeReference(r.key,t),e.No.containsKey(r.key)||Bm(e,r.key)):qh()}function $m(e,t){const n=t.key,r=n.path.canonicalString();e.Do.get(n)||e.So.has(r)||(Fh("SyncEngine","New document in limbo: "+n),e.So.add(r),Hm(e))}function Hm(e){for(;e.So.size>0&&e.Do.size<e.maxConcurrentLimboResolutions;){const t=e.So.values().next().value;e.So.delete(t);const n=new gd(td.fromString(t)),r=e.$o.next();e.Co.set(r,new Cm(n)),e.Do=e.Do.insert(n,r),$g(e.remoteStore,new Yp(rf(Zd(n.path)),r,2,xh.o))}}async function zm(e,t,n){const r=Hh(e),i=[],s=[],o=[];r.vo.isEmpty()||(r.vo.forEach(((e,a)=>{o.push(r.Fo(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=sg.vn(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.bo._r(i),await async function(e,t){const n=Hh(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Kp.forEach(t,(t=>Kp.forEach(t.Pn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Kp.forEach(t.bn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!Gp(r))throw r;Fh("LocalStore","Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.kn.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.kn=n.kn.insert(e,i)}}}(r.localStore,s))}async function Km(e,t){const n=Hh(e);if(!n.currentUser.isEqual(t)){Fh("SyncEngine","User change. New user:",t.toKey());const e=await cg(n.localStore,t);n.currentUser=t,(r=n).ko.forEach((e=>{e.forEach((e=>{e.reject(new Ph(Lh.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.ko.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await zm(n,e.Ln)}var r}function Gm(e,t){const n=Hh(e),r=n.Co.get(t);if(r&&r.Po)return ip().add(r.key);{let e=ip();const r=n.Vo.get(t);if(!r)return e;for(const t of r){const r=n.vo.get(t);e=e.unionWith(r.view.wo)}return e}}class Wm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.R=xg(e.databaseInfo.databaseId),this.sharedClientState=this.Bo(e),this.persistence=this.Uo(e),await this.persistence.start(),this.gcScheduler=this.qo(e),this.localStore=this.Ko(e)}qo(e){return null}Ko(e){return function(e,t,n,r){return new ag(e,t,n,r)}(this.persistence,new og,e.initialUser,this.R)}Uo(e){return new bg(Tg.Ps,this.R)}Bo(e){return new kg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Xm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Lm(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Km.bind(null,this.syncEngine),await async function(e,t){const n=Hh(e);t?(n.Fr.delete(2),await Bg(n)):t||(n.Fr.add(2),await qg(n),n.Br.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wm}createDatastore(e){const t=xg(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Og(r));var r,i;return i=e.credentials,new Fg(i,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Lm(this.syncEngine,e,0),s=Cg.gt()?new Cg:new Ag,new jg(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Rm(e,t,n,r,i,s);return o&&(a.Oo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Hh(e);Fh("RemoteStore","RemoteStore shutting down."),t.Fr.add(5),await qg(t),t.Lr.shutdown(),t.Br.set("Unknown")}(this.remoteStore)}}
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
 */class Ym{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Qo(this.observer.next,e)}error(e){this.observer.error?this.Qo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Wo(){this.muted=!0}Qo(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
 */class Qm{constructor(e,t,n){this.credentials=e,this.asyncQueue=t,this.databaseInfo=n,this.user=Ig.UNAUTHENTICATED,this.clientId=Kh.u(),this.credentialListener=()=>Promise.resolve(),this.credentials.setChangeListener(t,(async e=>{Fh("FirestoreClient","Received user=",e.uid),await this.credentialListener(e),this.user=e}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ph(Lh.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zp;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.removeChangeListener(),e.resolve()}catch(t){const n=pm(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Jm(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){return e.offlineComponents||(Fh("FirestoreClient","Using default OfflineComponentProvider"),await async function(e,t){e.asyncQueue.verifyOperationInProgress(),Fh("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await cg(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}(e,new Wm)),e.offlineComponents}(e);Fh("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>async function(e,t){const n=Hh(e);n.asyncQueue.verifyOperationInProgress(),Fh("RemoteStore","RemoteStore received new credentials");const r=Xg(n);n.Fr.add(3),await qg(n),r&&n.Br.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Fr.delete(3),await Bg(n)}(t.remoteStore,e))),e.onlineComponents=t}async function Zm(e){return e.onlineComponents||(Fh("FirestoreClient","Using default OnlineComponentProvider"),await Jm(e,new Xm)),e.onlineComponents}async function ey(e){const t=await Zm(e),n=t.eventManager;return n.onListen=Nm.bind(null,t.syncEngine),n.onUnlisten=Om.bind(null,t.syncEngine),n}function ty(e,t,n={}){const r=new zp;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Ym({next:n=>{t.enqueueAndForget((()=>async function(e,t){const n=Hh(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}(e,o))),n.fromCache&&"server"===r.source?i.reject(new Ph(Lh.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Tm(n,s,{includeMetadataChanges:!0,so:!0});return async function(t,n){const r=Hh(t),i=n.query;let s=!1,o=r.queries.get(i);if(o||(s=!0,o=new vm),s)try{o.Wr=await r.onListen(i)}catch(e){const r=pm(e,`Initialization of query '${af(n.query)}' failed`);return void n.onError(r)}r.queries.set(i,o),o.listeners.push(n),n.zr(r.onlineState),o.Wr&&n.Hr(o.Wr)&&Em(r)}(e,o)}(await ey(e),e.asyncQueue,t,n,r))),r.promise}class ny{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ry{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ry&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const iy=new Map;
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
 */class sy{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class oy{constructor(){this.changeListener=null}getToken(){return Promise.resolve(null)}invalidateToken(){}setChangeListener(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(Ig.UNAUTHENTICATED)))}removeChangeListener(){this.changeListener=null}}class ay{constructor(e){this.currentUser=Ig.UNAUTHENTICATED,this.oc=new zp,this.cc=0,this.forceRefresh=!1,this.auth=null,this.asyncQueue=null,this.uc=()=>{this.cc++,this.currentUser=this.ac(),this.oc.resolve(),this.changeListener&&this.asyncQueue.enqueueRetryable((()=>this.changeListener(this.currentUser)))};const t=e=>{Fh("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.uc)};e.onInit((e=>t(e))),setTimeout((()=>{if(!this.auth){const n=e.getImmediate({optional:!0});n?t(n):(Fh("FirebaseCredentialsProvider","Auth not yet detected"),this.oc.resolve())}}),0)}getToken(){const e=this.cc,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.cc!==e?(Fh("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?($h("string"==typeof t.accessToken),new sy(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}setChangeListener(e,t){this.asyncQueue=e,this.asyncQueue.enqueueRetryable((async()=>{await this.oc.promise,await t(this.currentUser),this.changeListener=t}))}removeChangeListener(){this.auth&&this.auth.removeAuthTokenListener(this.uc),this.changeListener=()=>Promise.resolve()}ac(){const e=this.auth&&this.auth.getUid();return $h(null===e||"string"==typeof e),new Ig(e)}}class cy{constructor(e,t,n){this.hc=e,this.lc=t,this.fc=n,this.type="FirstParty",this.user=Ig.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.lc},t=this.hc.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.fc&&(e["X-Goog-Iam-Authorization-Token"]=this.fc),e}}class ly{constructor(e,t,n){this.hc=e,this.lc=t,this.fc=n}getToken(){return Promise.resolve(new cy(this.hc,this.lc,this.fc))}setChangeListener(e,t){e.enqueueRetryable((()=>t(Ig.FIRST_PARTY)))}removeChangeListener(){}invalidateToken(){}}
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
 */function uy(e,t,n){if(!n)throw new Ph(Lh.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function hy(e){if(!gd.isDocumentKey(e))throw new Ph(Lh.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function dy(e){if(gd.isDocumentKey(e))throw new Ph(Lh.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function fy(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){if(e.constructor){const t=/function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());if(t&&t.length>1)return t[1]}return null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":qh()}function py(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ph(Lh.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fy(e);throw new Ph(Lh.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
 */class gy{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Ph(Lh.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Ph(Lh.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Ph(Lh.INVALID_ARGUMENT,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,e.experimentalForceLongPolling,0,e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class my{constructor(e,t){this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gy({}),this._settingsFrozen=!1,e instanceof ry?(this._databaseId=e,this._credentials=new oy):(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ph(Lh.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ry(e.options.projectId)}(e),this._credentials=new ay(t))}get app(){if(!this._app)throw new Ph(Lh.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Ph(Lh.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gy(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new oy;switch(e.type){case"gapi":const t=e.client;return $h(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new ly(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Ph(Lh.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=iy.get(e);t&&(Fh("ComponentProvider","Removing Datastore"),iy.delete(e),t.terminate())}(this),Promise.resolve()}}
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
 */class yy{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wy(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yy(this.firestore,e,this._key)}}class vy{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new vy(this.firestore,e,this._query)}}class wy extends vy{constructor(e,t,n){super(e,t,Zd(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yy(this.firestore,null,new gd(e))}withConverter(e){return new wy(this.firestore,e,this._path)}}function _y(e,t,...n){if(e=Ko(e),uy("collection","path",t),e instanceof my){const r=td.fromString(t,...n);return dy(r),new wy(e,null,r)}{if(!(e instanceof yy||e instanceof wy))throw new Ph(Lh.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=td.fromString(e.path,...n).child(td.fromString(t));return dy(r),new wy(e.firestore,null,r)}}
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
class by{constructor(){this.dc=Promise.resolve(),this.wc=[],this._c=!1,this.mc=[],this.gc=null,this.yc=!1,this.Ec=!1,this.Tc=[],this.Zi=new Lg(this,"async_queue_retry"),this.Ic=()=>{const e=Dg();e&&Fh("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Zi.Gi()};const e=Dg();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ic)}get isShuttingDown(){return this._c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ac(),this.Rc(e)}enterRestrictedMode(e){if(!this._c){this._c=!0,this.Ec=e||!1;const t=Dg();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ic)}}enqueue(e){if(this.Ac(),this._c)return new Promise((()=>{}));const t=new zp;return this.Rc((()=>this._c&&this.Ec?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.wc.push(e),this.Pc())))}async Pc(){if(0!==this.wc.length){try{await this.wc[0](),this.wc.shift(),this.Zi.reset()}catch(e){if(!Gp(e))throw e;Fh("AsyncQueue","Operation failed with retryable error: "+e)}this.wc.length>0&&this.Zi.Qi((()=>this.Pc()))}}Rc(e){const t=this.dc.then((()=>(this.yc=!0,e().catch((e=>{throw this.gc=e,this.yc=!1,Vh("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.yc=!1,e))))));return this.dc=t,t}enqueueAfterDelay(e,t,n){this.Ac(),this.Tc.indexOf(e)>-1&&(t=0);const r=fm.createAndSchedule(this,e,t,n,(e=>this.bc(e)));return this.mc.push(r),r}Ac(){this.gc&&qh()}verifyOperationInProgress(){}async vc(){let e;do{e=this.dc,await e}while(e!==this.dc)}Vc(e){for(const t of this.mc)if(t.timerId===e)return!0;return!1}Sc(e){return this.vc().then((()=>{this.mc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.mc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.vc()}))}Dc(e){this.Tc.push(e)}bc(e){const t=this.mc.indexOf(e);this.mc.splice(t,1)}}class Ey extends my{constructor(e,t){super(e,t),this.type="firestore",this._queue=new by,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Sy(this),this._firestoreClient.terminate()}}function Ty(e=ma()){return da(e,"firestore-exp").getImmediate()}function Iy(e){return e._firestoreClient||Sy(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Sy(e){var t;const n=e._freezeSettings(),r=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new ny(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var i,s,o,a;e._firestoreClient=new Qm(e._credentials,e._queue,r)}
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
 */class ky{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Ph(Lh.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rd(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
 */class Ay{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ay(sd.fromBase64String(e))}catch(t){throw new Ph(Lh.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ay(sd.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class Cy{constructor(e){this._methodName=e}}
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
 */class Ry{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ph(Lh.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ph(Lh.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Gh(this._lat,e._lat)||Gh(this._long,e._long)}}
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
 */const Ny=/^__.*__$/;class Oy{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Uf(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mf(e,this.data,t,this.fieldTransforms)}}function Dy(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw qh()}}class xy{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.R=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Cc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Nc(){return this.settings.Nc}xc(e){return new xy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.R,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}kc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.xc({path:n,$c:!1});return r.Oc(e),r}Fc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.xc({path:n,$c:!1});return r.Cc(),r}Mc(e){return this.xc({path:void 0,$c:!0})}Lc(e){return zy(e,this.settings.methodName,this.settings.Bc||!1,this.path,this.settings.Uc)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Cc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Oc(this.path.get(e))}Oc(e){if(0===e.length)throw this.Lc("Document fields must not be empty");if(Dy(this.Nc)&&Ny.test(e))throw this.Lc('Document fields cannot begin and end with "__"')}}class Ly{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.R=n||xg(e)}qc(e,t,n,r=!1){return new xy({Nc:e,methodName:t,Uc:n,path:rd.emptyPath(),$c:!1,Bc:r},this.databaseId,this.R,this.ignoreUndefinedProperties)}}function Py(e){const t=e._freezeSettings(),n=xg(e._databaseId);return new Ly(e._databaseId,!!t.ignoreUndefinedProperties,n)}function My(e,t,n,r,i,s={}){const o=e.qc(s.merge||s.mergeFields?2:0,t,n,i);By("Data must be an object, but it was:",o,r);const a=Vy(r,o);let c,l;if(s.merge)c=new id(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=qy(t,r,n);if(!o.contains(i))throw new Ph(Lh.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ky(e,i)||e.push(i)}c=new id(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Oy(new Rd(a),c,l)}class Uy extends Cy{_toFieldTransform(e){return new kf(e.path,new vf)}isEqual(e){return e instanceof Uy}}function Fy(e,t){if(jy(e=Ko(e)))return By("Unsupported field value:",t,e),Vy(e,t);if(e instanceof Cy)return function(e,t){if(!Dy(t.Nc))throw t.Lc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Lc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.$c&&4!==t.Nc)throw t.Lc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Fy(i,t.Mc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Ko(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ff(t.R,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Xh.fromDate(e);return{timestampValue:wp(t.R,n)}}if(e instanceof Xh){const n=new Xh(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:wp(t.R,n)}}if(e instanceof Ry)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Ay)return{bytesValue:_p(t.R,e._byteString)};if(e instanceof yy){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Lc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Tp(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Lc(`Unsupported field value: ${fy(e)}`)}(e,t)}function Vy(e,t){const n={};return Zh(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Jh(e,((e,r)=>{const i=Fy(r,t.kc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function jy(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Xh||e instanceof Ry||e instanceof Ay||e instanceof yy||e instanceof Cy)}function By(e,t,n){if(!jy(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=fy(n);throw"an object"===r?t.Lc(e+" a custom object"):t.Lc(e+" "+r)}var r}function qy(e,t,n){if((t=Ko(t))instanceof ky)return t._internalPath;if("string"==typeof t)return Hy(e,t);throw zy("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const $y=new RegExp("[~\\*/\\[\\]]");function Hy(e,t,n){if(t.search($y)>=0)throw zy(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ky(...t.split("."))._internalPath}catch(r){throw zy(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function zy(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Ph(Lh.INVALID_ARGUMENT,a+e+c)}function Ky(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class Gy{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yy(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Wy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xy("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Wy extends Gy{data(){return super.data()}}function Xy(e,t){return"string"==typeof t?Hy(e,t):t instanceof ky?t._internalPath:t._delegate._internalPath}
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
 */class Yy{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qy extends Gy{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Jy(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Xy("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Jy extends Qy{data(e={}){return super.data(e)}}class Zy{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Yy(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Jy(this._firestore,this._userDataWriter,n.key,n,new Yy(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Ph(Lh.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new Jy(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Yy(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Jy(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Yy(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:ev(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ev(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return qh()}}
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
 */class tv extends
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
class{convertValue(e,t="none"){switch(md(e)){case 0:return null;case 1:return e.booleanValue;case 2:return cd(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ld(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw qh()}}convertObject(e,t){const n={};return Jh(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Ry(cd(e.latitude),cd(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=hd(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(dd(e));default:return null}}convertTimestamp(e){const t=ad(e);return new Xh(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=td.fromString(e);$h(Hp(n));const r=new ry(n.get(1),n.get(3)),i=new gd(n.popFirst(5));return r.isEqual(t)||Vh(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ay(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yy(this.firestore,null,t)}}function nv(e){e=py(e,vy);const t=py(e.firestore,Ey),n=Iy(t),r=new tv(t);return function(e){if(tf(e)&&0===e.explicitOrderBy.length)throw new Ph(Lh.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),ty(n,e._query).then((n=>new Zy(t,r,e,n)))}function rv(e,t){const n=py(e.firestore,Ey),r=function(e,t,...n){if(e=Ko(e),1===arguments.length&&(t=Kh.u()),uy("doc","path",t),e instanceof my){const r=td.fromString(t,...n);return hy(r),new yy(e,null,new gd(r))}{if(!(e instanceof yy||e instanceof wy))throw new Ph(Lh.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(td.fromString(t,...n));return hy(r),new yy(e.firestore,e instanceof wy?e.converter:null,new gd(r))}}(e),i=function(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}(e.converter,t);return function(e,t){return function(e,t){const n=new zp;return e.asyncQueue.enqueueAndForget((async()=>Dm(await function(e){return Zm(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(Iy(e),t)}(n,[My(Py(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Cf.exists(!1))]).then((()=>r))}function iv(){return new Uy("serverTimestamp")}Dh="9.0.0-beta.8",ha(new Go("firestore-exp",((e,{options:t})=>{const n=e.getProvider("app-exp").getImmediate(),r=new Ey(n,e.getProvider("auth-internal"));return t=Object.assign({useFetchStreams:!0},t),r._setSettings(t),r}),"PUBLIC")),ya("@firebase/firestore","0.0.900-exp.8b4d7550f",undefined);
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
ya("firebase-exp","9.0.0-beta.8","app");const sv=new Mo("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ov=new ia("@firebase/auth-exp");
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
 */function av(e,...t){ov.logLevel<=Yo.ERROR&&ov.error(`Auth (9.0.0-beta.8): ${e}`,...t)}
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
 */function cv(e,...t){throw uv(e,...t)}function lv(e,...t){return uv(e,...t)}function uv(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return sv.create(e,...t)}function hv(e,t,...n){if(!e)throw uv(t,...n)}function dv(e){const t="INTERNAL ASSERTION FAILED: "+e;throw av(t),new Error(t)}function fv(e,t){e||dv(t)}
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
 */const pv=new Map;function gv(e){fv(e instanceof Function,"Expected a class definition");let t=pv.get(e);return t?(fv(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,pv.set(e,t),t)}
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
function mv(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function yv(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function vv(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==yv()&&"https:"!==yv()&&!Do()&&!("connection"in navigator)||navigator.onLine}
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
class wv{constructor(e,t){this.shortDelay=e,this.longDelay=t,fv(t>e,"Short delay should be less than long delay!"),this.isMobile=Oo()||xo()}get(){return vv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function _v(e,t){fv(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class bv{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void dv("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void dv("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void dv("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Ev={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"},Tv=new wv(3e4,6e4);
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
 */function Iv(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Sv(e,t,n,r,i={}){return kv(e,i,(()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Bo(Object.assign({key:e.config.apiKey},s)).slice(1),a=new(bv.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),bv.fetch()(Cv(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function kv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ev),t);try{const t=new Rv(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Nv(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=(i.ok?s.errorMessage:s.error.message).split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw Nv(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw Nv(e,"email-already-in-use",s);cv(e,r[t]||t.toLowerCase().replace(/[_\s]+/g,"-"))}}catch(i){if(i instanceof Po)throw i;cv(e,"network-request-failed")}}async function Av(e,t,n,r,i={}){const s=await Sv(e,t,n,r,i);return"mfaPendingCredential"in s&&cv(e,"multi-factor-auth-required",{serverResponse:s}),s}function Cv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?_v(e.config,i):`${e.config.apiScheme}://${i}`}class Rv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(lv(this.auth,"timeout"))),Tv.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Nv(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=lv(e,t,r);return i.customData._tokenResponse=n,i}
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
function Ov(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Dv(e){return 1e3*Number(e)}function xv(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return av("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return Co.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return e?JSON.parse(e):(av("Failed to decode base64 JWT payload"),null)}catch(i){return av("Caught error parsing JWT payload as JSON",i),null}}
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
async function Lv(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Po&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class Pv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
 */class Mv{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ov(this.lastLoginAt),this.creationTime=Ov(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Uv(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Lv(e,async function(e,t){return Sv(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));hv(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Eo(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Mv(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class Fv{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){hv(e.idToken,"internal-error"),hv(void 0!==e.idToken,"internal-error"),hv(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=xv(e);return hv(t,"internal-error"),hv(void 0!==t.exp,"internal-error"),hv(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return hv(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await kv(e,{},(()=>{const n=Bo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Cv(e,r,"/v1/token",`key=${i}`);return bv.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Fv;return n&&(hv("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(hv("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(hv("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fv,this.toJSON())}_performRefresh(){return dv("not implemented")}}
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
 */function Vv(e,t){hv("string"==typeof e||void 0===e,"internal-error",{appName:t})}class jv{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Eo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Pv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Mv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Lv(this,this.stsTokenManager.getToken(this.auth,e));return hv(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ko(e),r=await n.getIdToken(t),i=xv(r);hv(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ov(Dv(i.auth_time)),issuedAtTime:Ov(Dv(i.iat)),expirationTime:Ov(Dv(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ko(e);await Uv(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(hv(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new jv(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){hv(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Uv(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Lv(this,async function(e,t){return Sv(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:E}=t;hv(v&&E,e,"internal-error");const T=Fv.fromJSON(this.name,E);hv("string"==typeof v,e,"internal-error"),Vv(u,e.name),Vv(h,e.name),hv("boolean"==typeof w,e,"internal-error"),hv("boolean"==typeof _,e,"internal-error"),Vv(d,e.name),Vv(f,e.name),Vv(p,e.name),Vv(g,e.name),Vv(m,e.name),Vv(y,e.name);const I=new jv({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return b&&Array.isArray(b)&&(I.providerData=b.map((e=>Object.assign({},e)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new Fv;r.updateFromServerResponse(t);const i=new jv({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Uv(i),i}}
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
 */class Bv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Bv.type="NONE";const qv=Bv;
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
 */function $v(e,t,n){return`firebase:${e}:${t}:${n}`}class Hv{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=$v(this.userKey,r.apiKey,i),this.fullPersistenceKey=$v("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jv._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Hv(gv(qv),e,n);let r=gv(qv);for(const a of t)if(await a._isAvailable()){r=a;break}let i=null;const s=$v(n,e.config.apiKey,e.name);for(const a of t)try{const t=await a._get(s);if(t){const n=jv._fromJSON(e,t);a!==r&&(i=n);break}}catch(o){}return i&&await r._set(s,i.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(o){}}))),new Hv(r,e,n)}}
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
 */function zv(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Xv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Kv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Qv(t))return"Blackberry";if(Jv(t))return"Webos";if(Gv(t))return"Safari";if((t.includes("chrome/")||Wv(t))&&!t.includes("edge/"))return"Chrome";if(Yv(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Kv(e=No()){return/firefox\//i.test(e)}function Gv(e=No()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wv(e=No()){return/crios\//i.test(e)}function Xv(e=No()){return/iemobile/i.test(e)}function Yv(e=No()){return/android/i.test(e)}function Qv(e=No()){return/blackberry/i.test(e)}function Jv(e=No()){return/webos/i.test(e)}function Zv(e=No()){return/iphone|ipad|ipod/i.test(e)}function ew(e=No()){return Zv(e)||Yv(e)||Jv(e)||Qv(e)||/windows phone/i.test(e)||Xv(e)}
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
function tw(e,t=[]){let n;switch(e){case"Browser":n=zv(No());break;case"Worker":n=`${zv(No())}-${e}`;break;default:n=e}return`${n}/JsCore/9.0.0-beta.8/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class nw{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iw(this),this.idTokenSubscription=new iw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.redirectInitializerError=null,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gv(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await Hv.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise.then((()=>{if(this.redirectInitializerError)throw this.redirectInitializerError}))}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(hv(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){this.redirectInitializerError=n,await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Uv(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ko(e):null;return t&&hv(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&hv(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(gv(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mo("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gv(e)||this._popupRedirectResolver;hv(t,this,"argument-error"),this.redirectPersistenceManager=await Hv.create(this,[gv(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return hv(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return hv(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function rw(e){return Ko(e)}class iw{constructor(e){var t,n;this.auth=e,this.observer=null,this.addObserver=(n=new Ho((e=>this.observer=e),t)).subscribe.bind(n)}get next(){return hv(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */class sw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return dv("not implemented")}_getIdTokenResponse(e){return dv("not implemented")}_linkToIdToken(e,t){return dv("not implemented")}_getReauthenticationResolver(e){return dv("not implemented")}}
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
class ow extends sw{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ow(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ow(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return Av(e,"POST","/v1/accounts:signInWithPassword",Iv(e,t))}
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
 */(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Av(e,"POST","/v1/accounts:signInWithEmailLink",Iv(e,t))}(e,{email:this._email,oobCode:this._password});default:cv(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return Sv(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Av(e,"POST","/v1/accounts:signInWithEmailLink",Iv(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:cv(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function aw(e,t){return Av(e,"POST","/v1/accounts:signInWithIdp",Iv(e,t))}
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
 */class cw extends sw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cw(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cv("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Eo(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new cw(n,r);return Object.assign(s,i),s}_getIdTokenResponse(e){return aw(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,aw(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,aw(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Bo(t)}return e}}
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
 */class lw{constructor(e){var t,n,r,i,s,o;const a=qo($o(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);hv(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=qo($o(e)).link,n=t?qo($o(t)).deep_link_id:null,r=qo($o(e)).deep_link_id;return(r?qo($o(r)).link:null)||r||n||t||e}(e);try{return new lw(t)}catch(n){return null}}}
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
 */class uw{constructor(){this.providerId=uw.PROVIDER_ID}static credential(e,t){return ow._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=lw.parseLink(t);return hv(n,"argument-error"),ow._fromEmailAndCode(e,n.code,n.tenantId)}}uw.PROVIDER_ID="password",uw.EMAIL_PASSWORD_SIGN_IN_METHOD="password",uw.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class hw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class dw extends hw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class fw extends dw{constructor(){super("facebook.com")}static credential(e){return cw._fromParams({providerId:fw.PROVIDER_ID,signInMethod:fw.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fw.credentialFromTaggedObject(e)}static credentialFromError(e){return fw.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return fw.credential(e.oauthAccessToken)}catch(t){return null}}}fw.FACEBOOK_SIGN_IN_METHOD="facebook.com",fw.PROVIDER_ID="facebook.com";
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
class pw extends dw{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cw._fromParams({providerId:pw.PROVIDER_ID,signInMethod:pw.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pw.credentialFromTaggedObject(e)}static credentialFromError(e){return pw.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return pw.credential(t,n)}catch(r){return null}}}pw.GOOGLE_SIGN_IN_METHOD="google.com",pw.PROVIDER_ID="google.com";
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
class gw extends dw{constructor(){super("github.com")}static credential(e){return cw._fromParams({providerId:gw.PROVIDER_ID,signInMethod:gw.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gw.credentialFromTaggedObject(e)}static credentialFromError(e){return gw.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gw.credential(e.oauthAccessToken)}catch(t){return null}}}gw.GITHUB_SIGN_IN_METHOD="github.com",gw.PROVIDER_ID="github.com";
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
class mw extends dw{constructor(){super("twitter.com")}static credential(e,t){return cw._fromParams({providerId:mw.PROVIDER_ID,signInMethod:mw.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mw.credentialFromTaggedObject(e)}static credentialFromError(e){return mw.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return mw.credential(t,n)}catch(r){return null}}}mw.TWITTER_SIGN_IN_METHOD="twitter.com",mw.PROVIDER_ID="twitter.com";
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
class yw{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await jv._fromIdTokenResponse(e,n,r),s=vw(n);return new yw({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=vw(n);return new yw({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function vw(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class ww extends Po{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,ww.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new ww(e,t,n,r)}}function _w(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ww._fromErrorAndOperation(e,n,t,r);throw n}))}
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
async function bw(e,t,n=!1){const r="signIn",i=await _w(e,r,t),s=await yw._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Ew(e,t,n){const r=rw(e),i=await
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
async function(e,t){return Av(e,"POST","/v1/accounts:signUp",Iv(e,t))}(r,{returnSecureToken:!0,email:t,password:n}),s=await yw._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Tw(e,t,n){return async function(e,t){return bw(rw(e),t)}(Ko(e),uw.credential(t,n))}function Iw(e,t,n,r){return Ko(e).onAuthStateChanged(t,n,r)}
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
class Sw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){hv(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
class kw{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
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
 */class Aw extends kw{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=No();return Gv(e)||Zv(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ew(),this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Lo()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Aw.type="LOCAL";const Cw=Aw;
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
class Rw{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Rw(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Nw(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Rw.receivers=[];class Ow{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Nw("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function Dw(){return window}
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
function xw(){return void 0!==Dw().WorkerGlobalScope&&"function"==typeof Dw().importScripts}
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
const Lw="firebaseLocalStorageDb";class Pw{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Mw(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Uw(){const e=indexedDB.open(Lw,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Lw);return new Pw(e).toPromise()}(),t(await Uw()))}))}))}async function Fw(e,t,n){const r=Mw(e,!0).put({fbase_key:t,value:n});return new Pw(r).toPromise()}function Vw(e,t){const n=Mw(e,!0).delete(t);return new Pw(n).toPromise()}class jw{constructor(){this.type="LOCAL",this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Uw()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rw._getInstance(xw()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Ow(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uw();return await Fw(e,"__sak","1"),await Vw(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Fw(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Mw(e,!1).get(t),r=await new Pw(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Vw(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Mw(e,!1).getAll();return new Pw(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}jw.type="LOCAL";const Bw=jw;
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
 */class qw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hw(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Hw(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(lv(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has($w(e))}saveEventToCache(e){this.cachedEventUids.add($w(e)),this.lastProcessedEventTime=Date.now()}}function $w(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Hw({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const zw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kw=/^https?/;async function Gw(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Sv(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(Ww(r))return}catch(n){}cv(e,"unauthorized-domain")}function Ww(e){const t=mv(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Kw.test(n))return!1;if(zw.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */function Xw(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=lv("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}
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
const Yw=new wv(3e4,6e4);function Qw(){const e=Dw().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Jw(e){return new Promise(((t,n)=>{var r,i,s;function o(){Qw(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Qw(),n(lv(e,"network-request-failed"))},timeout:Yw.get()})}if(null===(i=null===(r=Dw().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Dw().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Dw()[t]=()=>{gapi.load?o():n(lv(e,"network-request-failed"))},Xw(`https://apis.google.com/js/api.js?onload=${t}`)}o()}})).catch((e=>{throw Zw=null,e}))}let Zw=null;
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
const e_=new wv(5e3,15e3),t_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},n_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function r_(e){const t=e.config;hv(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?_v(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.0.0-beta.8"},i=n_.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Bo(r).slice(1)}`}async function i_(e){const t=await function(e){return Zw=Zw||Jw(e),Zw}(e),n=Dw().gapi;return hv(n,e,"internal-error"),t.open({where:document.body,url:r_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t_,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=lv(e,"network-request-failed"),s=Dw().setTimeout((()=>{r(i)}),e_.get());function o(){Dw().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */class s_ extends kw{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}s_.type="SESSION";const o_=s_,a_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};
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
 */class c_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function l_(e,t,n,r=500,i=600){const s=Math.min((window.screen.availHeight-i)/2,0).toString(),o=Math.min((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},a_),{width:r.toString(),height:i.toString(),top:s,left:o}),l=No().toLowerCase();n&&(a=Wv(l)?"_blank":n),Kv(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=No()){var t;return Zv(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new c_(null);const h=window.open(t||"",a,u);hv(h,e,"popup-blocked");try{h.focus()}catch(d){}return new c_(h)}
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
class u_ extends sw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return aw(e,this._buildIdpRequest())}_linkToIdToken(e,t){return aw(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return aw(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function h_(e){return bw(e.auth,new u_(e),e.bypassAuthState)}function d_(e){const{auth:t,user:n}=e;return hv(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Lv(e,_w(r,i,t,e),n);hv(s.idToken,r,"internal-error");const o=xv(s.idToken);hv(o,r,"internal-error");const{sub:a}=o;return hv(e.uid===a,r,"user-mismatch"),yw._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&cv(r,"user-mismatch"),s}}(n,new u_(e),e.bypassAuthState)}async function f_(e){const{auth:t,user:n}=e;return hv(n,t,"internal-error"),async function(e,t,n=!1){const r=await Lv(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return yw._forOperation(e,"link",r)}(n,new u_(e),e.bypassAuthState)}
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
 */class p_{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return h_;case"linkViaPopup":case"linkViaRedirect":return f_;case"reauthViaPopup":case"reauthViaRedirect":return d_;default:cv(this.auth,"internal-error")}}resolve(e){fv(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fv(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const g_=new Map;class m_ extends p_{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=g_.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return $v("pendingRedirect",e.config.apiKey,e.name)}(t),r="true"===await y_(e)._get(n);return await y_(e)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}g_.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function y_(e){return gv(e._redirectPersistence)}async function v_(e,t,n=!1){const r=rw(e),i=function(e,t){return t?gv(t):(hv(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new m_(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
 */function w_(e,t,n,r,i,s){hv(e.config.authDomain,e,"auth-domain-config-required"),hv(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.0.0-beta.8",eventId:i};if(t instanceof hw){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof dw){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return _v(e,"emulator/auth/handler")}
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
 */(e)}?${Bo(a).slice(1)}`}const __=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=o_,this._completeRedirectFn=v_}async _openPopup(e,t,n,r){var i;fv(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return l_(e,w_(e,t,n,mv(),r),Nw())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=w_(e,t,n,mv(),r),Dw().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(fv(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await i_(e),n=new qw(e);return t.register("authEvent",(t=>{hv(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),cv(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ew()||Gv()||Zv()}};new wv(3e4,6e4);
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
const b_=new wv(2e3,1e4);class E_ extends p_{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,E_.currentPopupAction&&E_.currentPopupAction.cancel(),E_.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return hv(e,this.auth,"internal-error"),e}async onExecution(){fv(1===this.filter.length,"Popup operations only handle one event");const e=Nw();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(lv(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(lv(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,E_.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(lv(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,b_.get())};e()}}function T_(e=ma()){const t=da(e,"auth-exp");return t.isInitialized()?t.getImmediate():function(e,t){const n=da(e,"auth-exp");n.isInitialized()&&cv(n.getImmediate(),"already-initialized");return n.initialize({options:t})}(e,{popupRedirectResolver:__,persistence:[Bw,Cw]})}var I_,S_,k_;E_.currentPopupAction=null,I_="Browser",ha(new Go("auth-exp",((e,{options:t})=>{const n=e.getProvider("app-exp").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{hv(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),hv(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:I_,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tw(I_)},s=new nw(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gv);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),ha(new Go("auth-internal",(e=>{const t=rw(e.getProvider("auth-exp").getImmediate());return new Sw(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ya("@firebase/auth-exp","0.0.900-exp.8b4d7550f",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(I_)),(k_=S_||(S_={}))[k_.NO_ERROR=0]="NO_ERROR",k_[k_.NETWORK_ERROR=1]="NETWORK_ERROR",k_[k_.ABORT=2]="ABORT";class A_ extends Po{constructor(e,t){super(C_(e),`Firebase Storage: ${t} (${C_(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,A_.prototype)}_codeEquals(e){return C_(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function C_(e){return"storage/"+e}function R_(e){return new A_("invalid-argument",e)}function N_(){return new A_("app-deleted","The Firebase app was deleted.")}function O_(e){throw new A_("internal-error","Internal error: "+e)}
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
 */class D_{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=S_.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=S_.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=S_.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw O_("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw O_("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw O_("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponseText(){if(!this.sent_)throw O_("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}
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
class x_{createConnection(){return new D_}}
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
 */class L_{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=L_.makeFromUrl(e,t)}catch(r){return new L_(e,"")}if(""===n.path)return n;throw new A_("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===t?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let c=0;c<a.length;c++){const t=a[c],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new L_(e,i),t.postModify(n);break}}if(null==n)throw function(e){return new A_("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class P_{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
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
 */function M_(e,t,n,r){if(r<t)throw R_(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw R_(`Invalid value for '${e}'. Expected ${n} or less.`)}
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
class U_{constructor(e,t,n,r,i,s,o,a,c,l,u){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=s.slice(),this.callback_=o,this.errorCallback_=a,this.progressCallback_=l,this.timeout_=c,this.pool_=u,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=this;function t(t,n){const r=e.resolve_,i=e.reject_,s=n.connection;if(n.wasSuccessCode)try{const t=e.callback_(s,s.getResponseText());void 0!==t?r(t):r()}catch(o){i(o)}else if(null!==s){const t=new A_("unknown","An unknown error occurred, please check the error payload for server response.");t.serverResponse=s.getResponseText(),e.errorCallback_?i(e.errorCallback_(s,t)):i(t)}else if(n.canceled){i(e.appDelete_?N_():new A_("canceled","User canceled the upload/download."))}else{i(new A_("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}}this.canceled_?t(0,new F_(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,i=null,s=!1,o=0;function a(){return 2===o}let c=!1;function l(...e){c||(c=!0,t.apply(null,e))}function u(t){i=setTimeout((()=>{i=null,e(h,a())}),t)}function h(e,...t){if(c)return;if(e)return void l.call(null,e,...t);if(a()||s)return void l.call(null,e,...t);let n;r<64&&(r*=2),1===o?(o=2,n=0):n=1e3*(r+Math.random()),u(n)}let d=!1;function f(e){d||(d=!0,c||(null!==i?(e||(o=2),clearTimeout(i),u(0)):e||(o=1)))}return u(0),setTimeout((()=>{s=!0,f(!0)}),n),f}((function(t,n){if(n)return void t(!1,new F_(!1,null,!0));const r=e.pool_.createConnection();function i(t){const n=t.loaded,r=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(n,r)}e.pendingConnection_=r,null!==e.progressCallback_&&r.addUploadProgressListener(i),r.send(e.url_,e.method_,e.body_,e.headers_).then((()=>{null!==e.progressCallback_&&r.removeUploadProgressListener(i),e.pendingConnection_=null;const n=r.getErrorCode()===S_.NO_ERROR,s=r.getStatus();if(!n||e.isRetryStatusCode_(s)){const e=r.getErrorCode()===S_.ABORT;return void t(!1,new F_(!1,null,e))}const o=-1!==e.successCodes_.indexOf(s);t(!0,new F_(o,r))}))}),t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}class F_{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function V_(e,t,n,r,i,s){const o=function(e){const t=encodeURIComponent;let n="?";for(const r in e)e.hasOwnProperty(r)&&(n=n+(t(r)+"=")+t(e[r])+"&");return n=n.slice(0,-1),n}(e.urlParams),a=e.url+o,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new U_(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}
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
class j_{constructor(e,t){this._service=e,this._location=t instanceof L_?t:L_.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new j_(e,t)}get root(){const e=new L_(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return function(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new L_(this._location.bucket,e);return new j_(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new A_("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function B_(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:L_.makeFromBucketSpec(n,e)}class q_{constructor(e,t,n,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._pool=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host="firebasestorage.googleapis.com",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?L_.makeFromBucketSpec(i,this._host):B_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=L_.makeFromBucketSpec(this._url,e):this._bucket=B_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){M_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){M_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new j_(this,e)}_makeRequest(e,t,n){if(this._deleted)return new P_(N_());{const r=V_(e,this._appId,t,n,this._pool,this._firebaseVersion);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(e){const[t,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n)}}function $_(e=ma(),t){return da(e=Ko(e),"storage-exp").getImmediate({identifier:t})}function H_(e,{instanceIdentifier:t}){const n=e.getProvider("app-exp").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new q_(n,r,i,new x_,t,"9.0.0-beta.8")}ha(new Go("storage-exp",H_,"PUBLIC").setMultipleInstances(!0)),ya("@firebase/storage","0.0.900-exp.8b4d7550f");export{bs as A,ct as B,Ty as C,nv as D,_y as E,mr as F,fr as G,qi as H,bi as T,Or as a,$t as b,Sr as c,xr as d,Tn as e,Lr as f,T_ as g,$_ as h,ga as i,nt as j,rv as k,nr as l,Vi as m,iv as n,Er as o,qt as p,Ew as q,Ke as r,Tw as s,c as t,st as u,Mi as v,Ht as w,_o as x,Iw as y,vo as z};
