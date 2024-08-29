function M1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function U1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var mv={exports:{}},Mu={},gv={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),F1=Symbol.for("react.portal"),j1=Symbol.for("react.fragment"),B1=Symbol.for("react.strict_mode"),z1=Symbol.for("react.profiler"),$1=Symbol.for("react.provider"),q1=Symbol.for("react.context"),W1=Symbol.for("react.forward_ref"),H1=Symbol.for("react.suspense"),K1=Symbol.for("react.memo"),G1=Symbol.for("react.lazy"),gg=Symbol.iterator;function Q1(t){return t===null||typeof t!="object"?null:(t=gg&&t[gg]||t["@@iterator"],typeof t=="function"?t:null)}var _v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yv=Object.assign,vv={};function Ss(t,e,n){this.props=t,this.context=e,this.refs=vv,this.updater=n||_v}Ss.prototype.isReactComponent={};Ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wv(){}wv.prototype=Ss.prototype;function yf(t,e,n){this.props=t,this.context=e,this.refs=vv,this.updater=n||_v}var vf=yf.prototype=new wv;vf.constructor=yf;yv(vf,Ss.prototype);vf.isPureReactComponent=!0;var _g=Array.isArray,Ev=Object.prototype.hasOwnProperty,wf={current:null},Tv={key:!0,ref:!0,__self:!0,__source:!0};function Iv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ev.call(e,r)&&!Tv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ua,type:t,key:s,ref:o,props:i,_owner:wf.current}}function X1(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function Y1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yg=/\/+/g;function th(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Y1(""+t.key):e.toString(36)}function vl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case F1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+th(o,0):r,_g(i)?(n="",t!=null&&(n=t.replace(yg,"$&/")+"/"),vl(i,e,n,"",function(c){return c})):i!=null&&(Ef(i)&&(i=X1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(yg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_g(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+th(s,l);o+=vl(s,e,n,u,i)}else if(u=Q1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+th(s,l++),o+=vl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ha(t,e,n){if(t==null)return t;var r=[],i=0;return vl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function J1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Et={current:null},wl={transition:null},Z1={ReactCurrentDispatcher:Et,ReactCurrentBatchConfig:wl,ReactCurrentOwner:wf};function Sv(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!Ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Ss;te.Fragment=j1;te.Profiler=z1;te.PureComponent=yf;te.StrictMode=B1;te.Suspense=H1;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z1;te.act=Sv;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=yv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ev.call(e,u)&&!Tv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ua,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:q1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$1,_context:t},t.Consumer=t};te.createElement=Iv;te.createFactory=function(t){var e=Iv.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:W1,render:t}};te.isValidElement=Ef;te.lazy=function(t){return{$$typeof:G1,_payload:{_status:-1,_result:t},_init:J1}};te.memo=function(t,e){return{$$typeof:K1,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=wl.transition;wl.transition={};try{t()}finally{wl.transition=e}};te.unstable_act=Sv;te.useCallback=function(t,e){return Et.current.useCallback(t,e)};te.useContext=function(t){return Et.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return Et.current.useDeferredValue(t)};te.useEffect=function(t,e){return Et.current.useEffect(t,e)};te.useId=function(){return Et.current.useId()};te.useImperativeHandle=function(t,e,n){return Et.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return Et.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return Et.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return Et.current.useMemo(t,e)};te.useReducer=function(t,e,n){return Et.current.useReducer(t,e,n)};te.useRef=function(t){return Et.current.useRef(t)};te.useState=function(t){return Et.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return Et.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return Et.current.useTransition()};te.version="18.3.1";gv.exports=te;var V=gv.exports;const ie=U1(V),eS=M1({__proto__:null,default:ie},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tS=V,nS=Symbol.for("react.element"),rS=Symbol.for("react.fragment"),iS=Object.prototype.hasOwnProperty,sS=tS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oS={key:!0,ref:!0,__self:!0,__source:!0};function Av(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iS.call(e,r)&&!oS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nS,type:t,key:s,ref:o,props:i,_owner:sS.current}}Mu.Fragment=rS;Mu.jsx=Av;Mu.jsxs=Av;mv.exports=Mu;var U=mv.exports,Rv={exports:{}},qt={},Cv={exports:{}},Pv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,K){var G=z.length;z.push(K);e:for(;0<G;){var ce=G-1>>>1,ee=z[ce];if(0<i(ee,K))z[ce]=K,z[G]=ee,G=ce;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],G=z.pop();if(G!==K){z[0]=G;e:for(var ce=0,ee=z.length,se=ee>>>1;ce<se;){var Ne=2*(ce+1)-1,Oe=z[Ne],Ke=Ne+1,pt=z[Ke];if(0>i(Oe,G))Ke<ee&&0>i(pt,Oe)?(z[ce]=pt,z[Ke]=G,ce=Ke):(z[ce]=Oe,z[Ne]=G,ce=Ne);else if(Ke<ee&&0>i(pt,G))z[ce]=pt,z[Ke]=G,ce=Ke;else break e}}return K}function i(z,K){var G=z.sortIndex-K.sortIndex;return G!==0?G:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,w=!1,S=!1,P=!1,C=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=z)r(c),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(c)}}function N(z){if(P=!1,v(z),!S)if(n(u)!==null)S=!0,pn(b);else{var K=n(c);K!==null&&Me(N,K.startTime-z)}}function b(z,K){S=!1,P&&(P=!1,E(g),g=-1),w=!0;var G=m;try{for(v(K),p=n(u);p!==null&&(!(p.expirationTime>K)||z&&!k());){var ce=p.callback;if(typeof ce=="function"){p.callback=null,m=p.priorityLevel;var ee=ce(p.expirationTime<=K);K=t.unstable_now(),typeof ee=="function"?p.callback=ee:p===n(u)&&r(u),v(K)}else r(u);p=n(u)}if(p!==null)var se=!0;else{var Ne=n(c);Ne!==null&&Me(N,Ne.startTime-K),se=!1}return se}finally{p=null,m=G,w=!1}}var L=!1,I=null,g=-1,T=5,A=-1;function k(){return!(t.unstable_now()-A<T)}function D(){if(I!==null){var z=t.unstable_now();A=z;var K=!0;try{K=I(!0,z)}finally{K?R():(L=!1,I=null)}}else L=!1}var R;if(typeof _=="function")R=function(){_(D)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,It=ke.port2;ke.port1.onmessage=D,R=function(){It.postMessage(null)}}else R=function(){C(D,0)};function pn(z){I=z,L||(L=!0,R())}function Me(z,K){g=C(function(){z(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){S||w||(S=!0,pn(b))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var G=m;m=K;try{return z()}finally{m=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=m;m=z;try{return K()}finally{m=G}},t.unstable_scheduleCallback=function(z,K,G){var ce=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ce+G:ce):G=ce,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=G+ee,z={id:d++,callback:K,priorityLevel:z,startTime:G,expirationTime:ee,sortIndex:-1},G>ce?(z.sortIndex=G,e(c,z),n(u)===null&&z===n(c)&&(P?(E(g),g=-1):P=!0,Me(N,G-ce))):(z.sortIndex=ee,e(u,z),S||w||(S=!0,pn(b))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var K=m;return function(){var G=m;m=K;try{return z.apply(this,arguments)}finally{m=G}}}})(Pv);Cv.exports=Pv;var aS=Cv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lS=V,$t=aS;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kv=new Set,Oo={};function vi(t,e){ls(t,e),ls(t+"Capture",e)}function ls(t,e){for(Oo[t]=e,t=0;t<e.length;t++)kv.add(e[t])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gh=Object.prototype.hasOwnProperty,uS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vg={},wg={};function cS(t){return Gh.call(wg,t)?!0:Gh.call(vg,t)?!1:uS.test(t)?wg[t]=!0:(vg[t]=!0,!1)}function hS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dS(t,e,n,r){if(e===null||typeof e>"u"||hS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Tf=/[\-:]([a-z])/g;function If(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Tf,If);et[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Tf,If);et[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Tf,If);et[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sf(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dS(e,n,i,r)&&(n=null),r||i===null?cS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yn=lS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),Fi=Symbol.for("react.portal"),ji=Symbol.for("react.fragment"),Af=Symbol.for("react.strict_mode"),Qh=Symbol.for("react.profiler"),Nv=Symbol.for("react.provider"),Dv=Symbol.for("react.context"),Rf=Symbol.for("react.forward_ref"),Xh=Symbol.for("react.suspense"),Yh=Symbol.for("react.suspense_list"),Cf=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),xv=Symbol.for("react.offscreen"),Eg=Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=Eg&&t[Eg]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,nh;function so(t){if(nh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nh=e&&e[1]||""}return`
`+nh+t}var rh=!1;function ih(t,e){if(!t||rh)return"";rh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{rh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?so(t):""}function fS(t){switch(t.tag){case 5:return so(t.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return t=ih(t.type,!1),t;case 11:return t=ih(t.type.render,!1),t;case 1:return t=ih(t.type,!0),t;default:return""}}function Jh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ji:return"Fragment";case Fi:return"Portal";case Qh:return"Profiler";case Af:return"StrictMode";case Xh:return"Suspense";case Yh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dv:return(t.displayName||"Context")+".Consumer";case Nv:return(t._context.displayName||"Context")+".Provider";case Rf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cf:return e=t.displayName||null,e!==null?e:Jh(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return Jh(t(e))}catch{}}return null}function pS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jh(e);case 8:return e===Af?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ov(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mS(t){var e=Ov(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=mS(t))}function bv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ov(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zh(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Lv(t,e){e=e.checked,e!=null&&Sf(t,"checked",e,!1)}function ed(t,e){Lv(t,e);var n=Nr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?td(t,e.type,n):e.hasOwnProperty("defaultValue")&&td(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ig(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function td(t,e,n){(e!=="number"||$l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oo=Array.isArray;function Ji(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function nd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(oo(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function Vv(t,e){var n=Nr(e.value),r=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ag(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Mv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,Uv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gS=["Webkit","ms","Moz","O"];Object.keys(go).forEach(function(t){gS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),go[e]=go[t]})});function Fv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||go.hasOwnProperty(t)&&go[t]?(""+e).trim():e+"px"}function jv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _S=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function id(t,e){if(e){if(_S[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function sd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var od=null;function Pf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ad=null,Zi=null,es=null;function Rg(t){if(t=da(t)){if(typeof ad!="function")throw Error(j(280));var e=t.stateNode;e&&(e=zu(e),ad(t.stateNode,t.type,e))}}function Bv(t){Zi?es?es.push(t):es=[t]:Zi=t}function zv(){if(Zi){var t=Zi,e=es;if(es=Zi=null,Rg(t),e)for(t=0;t<e.length;t++)Rg(e[t])}}function $v(t,e){return t(e)}function qv(){}var sh=!1;function Wv(t,e,n){if(sh)return t(e,n);sh=!0;try{return $v(t,e,n)}finally{sh=!1,(Zi!==null||es!==null)&&(qv(),zv())}}function Lo(t,e){var n=t.stateNode;if(n===null)return null;var r=zu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var ld=!1;if($n)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){ld=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{ld=!1}function yS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var _o=!1,ql=null,Wl=!1,ud=null,vS={onError:function(t){_o=!0,ql=t}};function wS(t,e,n,r,i,s,o,l,u){_o=!1,ql=null,yS.apply(vS,arguments)}function ES(t,e,n,r,i,s,o,l,u){if(wS.apply(this,arguments),_o){if(_o){var c=ql;_o=!1,ql=null}else throw Error(j(198));Wl||(Wl=!0,ud=c)}}function wi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cg(t){if(wi(t)!==t)throw Error(j(188))}function TS(t){var e=t.alternate;if(!e){if(e=wi(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Cg(i),t;if(s===r)return Cg(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Kv(t){return t=TS(t),t!==null?Gv(t):null}function Gv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gv(t);if(e!==null)return e;t=t.sibling}return null}var Qv=$t.unstable_scheduleCallback,Pg=$t.unstable_cancelCallback,IS=$t.unstable_shouldYield,SS=$t.unstable_requestPaint,xe=$t.unstable_now,AS=$t.unstable_getCurrentPriorityLevel,kf=$t.unstable_ImmediatePriority,Xv=$t.unstable_UserBlockingPriority,Hl=$t.unstable_NormalPriority,RS=$t.unstable_LowPriority,Yv=$t.unstable_IdlePriority,Uu=null,En=null;function CS(t){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(Uu,t,void 0,(t.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:NS,PS=Math.log,kS=Math.LN2;function NS(t){return t>>>=0,t===0?32:31-(PS(t)/kS|0)|0}var Xa=64,Ya=4194304;function ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ao(l):(s&=o,s!==0&&(r=ao(s)))}else o=n&~i,o!==0?r=ao(o):s!==0&&(r=ao(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ln(e),i=1<<n,r|=t[n],e&=~i;return r}function DS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ln(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=DS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function cd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jv(){var t=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),t}function oh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ln(e),t[e]=n}function OS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ln(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Nf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ln(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function Zv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var e0,Df,t0,n0,r0,hd=!1,Ja=[],vr=null,wr=null,Er=null,Vo=new Map,Mo=new Map,ar=[],bS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kg(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(e.pointerId)}}function Ys(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=da(e),e!==null&&Df(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function LS(t,e,n,r,i){switch(e){case"focusin":return vr=Ys(vr,t,e,n,r,i),!0;case"dragenter":return wr=Ys(wr,t,e,n,r,i),!0;case"mouseover":return Er=Ys(Er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vo.set(s,Ys(Vo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Mo.set(s,Ys(Mo.get(s)||null,t,e,n,r,i)),!0}return!1}function i0(t){var e=Gr(t.target);if(e!==null){var n=wi(e);if(n!==null){if(e=n.tag,e===13){if(e=Hv(n),e!==null){t.blockedOn=e,r0(t.priority,function(){t0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function El(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=dd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);od=r,n.target.dispatchEvent(r),od=null}else return e=da(n),e!==null&&Df(e),t.blockedOn=n,!1;e.shift()}return!0}function Ng(t,e,n){El(t)&&n.delete(e)}function VS(){hd=!1,vr!==null&&El(vr)&&(vr=null),wr!==null&&El(wr)&&(wr=null),Er!==null&&El(Er)&&(Er=null),Vo.forEach(Ng),Mo.forEach(Ng)}function Js(t,e){t.blockedOn===e&&(t.blockedOn=null,hd||(hd=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,VS)))}function Uo(t){function e(i){return Js(i,t)}if(0<Ja.length){Js(Ja[0],t);for(var n=1;n<Ja.length;n++){var r=Ja[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vr!==null&&Js(vr,t),wr!==null&&Js(wr,t),Er!==null&&Js(Er,t),Vo.forEach(e),Mo.forEach(e),n=0;n<ar.length;n++)r=ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)i0(n),n.blockedOn===null&&ar.shift()}var ts=Yn.ReactCurrentBatchConfig,Gl=!0;function MS(t,e,n,r){var i=he,s=ts.transition;ts.transition=null;try{he=1,xf(t,e,n,r)}finally{he=i,ts.transition=s}}function US(t,e,n,r){var i=he,s=ts.transition;ts.transition=null;try{he=4,xf(t,e,n,r)}finally{he=i,ts.transition=s}}function xf(t,e,n,r){if(Gl){var i=dd(t,e,n,r);if(i===null)gh(t,e,r,Ql,n),kg(t,r);else if(LS(i,t,e,n,r))r.stopPropagation();else if(kg(t,r),e&4&&-1<bS.indexOf(t)){for(;i!==null;){var s=da(i);if(s!==null&&e0(s),s=dd(t,e,n,r),s===null&&gh(t,e,r,Ql,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gh(t,e,r,null,n)}}var Ql=null;function dd(t,e,n,r){if(Ql=null,t=Pf(r),t=Gr(t),t!==null)if(e=wi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ql=t,null}function s0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AS()){case kf:return 1;case Xv:return 4;case Hl:case RS:return 16;case Yv:return 536870912;default:return 16}default:return 16}}var pr=null,Of=null,Tl=null;function o0(){if(Tl)return Tl;var t,e=Of,n=e.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Tl=i.slice(t,1<r?1-r:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Za(){return!0}function Dg(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Za:Dg,this.isPropagationStopped=Dg,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),e}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bf=Wt(As),ha=Se({},As,{view:0,detail:0}),FS=Wt(ha),ah,lh,Zs,Fu=Se({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(ah=t.screenX-Zs.screenX,lh=t.screenY-Zs.screenY):lh=ah=0,Zs=t),ah)},movementY:function(t){return"movementY"in t?t.movementY:lh}}),xg=Wt(Fu),jS=Se({},Fu,{dataTransfer:0}),BS=Wt(jS),zS=Se({},ha,{relatedTarget:0}),uh=Wt(zS),$S=Se({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),qS=Wt($S),WS=Se({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HS=Wt(WS),KS=Se({},As,{data:0}),Og=Wt(KS),GS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=XS[t])?!!e[t]:!1}function Lf(){return YS}var JS=Se({},ha,{key:function(t){if(t.key){var e=GS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lf,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZS=Wt(JS),eA=Se({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bg=Wt(eA),tA=Se({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lf}),nA=Wt(tA),rA=Se({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),iA=Wt(rA),sA=Se({},Fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oA=Wt(sA),aA=[9,13,27,32],Vf=$n&&"CompositionEvent"in window,yo=null;$n&&"documentMode"in document&&(yo=document.documentMode);var lA=$n&&"TextEvent"in window&&!yo,a0=$n&&(!Vf||yo&&8<yo&&11>=yo),Lg=" ",Vg=!1;function l0(t,e){switch(t){case"keyup":return aA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bi=!1;function uA(t,e){switch(t){case"compositionend":return u0(e);case"keypress":return e.which!==32?null:(Vg=!0,Lg);case"textInput":return t=e.data,t===Lg&&Vg?null:t;default:return null}}function cA(t,e){if(Bi)return t==="compositionend"||!Vf&&l0(t,e)?(t=o0(),Tl=Of=pr=null,Bi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return a0&&e.locale!=="ko"?null:e.data;default:return null}}var hA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hA[t.type]:e==="textarea"}function c0(t,e,n,r){Bv(r),e=Xl(e,"onChange"),0<e.length&&(n=new bf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var vo=null,Fo=null;function dA(t){E0(t,0)}function ju(t){var e=qi(t);if(bv(e))return t}function fA(t,e){if(t==="change")return e}var h0=!1;if($n){var ch;if($n){var hh="oninput"in document;if(!hh){var Ug=document.createElement("div");Ug.setAttribute("oninput","return;"),hh=typeof Ug.oninput=="function"}ch=hh}else ch=!1;h0=ch&&(!document.documentMode||9<document.documentMode)}function Fg(){vo&&(vo.detachEvent("onpropertychange",d0),Fo=vo=null)}function d0(t){if(t.propertyName==="value"&&ju(Fo)){var e=[];c0(e,Fo,t,Pf(t)),Wv(dA,e)}}function pA(t,e,n){t==="focusin"?(Fg(),vo=e,Fo=n,vo.attachEvent("onpropertychange",d0)):t==="focusout"&&Fg()}function mA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ju(Fo)}function gA(t,e){if(t==="click")return ju(e)}function _A(t,e){if(t==="input"||t==="change")return ju(e)}function yA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cn=typeof Object.is=="function"?Object.is:yA;function jo(t,e){if(cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gh.call(e,i)||!cn(t[i],e[i]))return!1}return!0}function jg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bg(t,e){var n=jg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jg(n)}}function f0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?f0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function p0(){for(var t=window,e=$l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$l(t.document)}return e}function Mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vA(t){var e=p0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&f0(n.ownerDocument.documentElement,n)){if(r!==null&&Mf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Bg(n,s);var o=Bg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wA=$n&&"documentMode"in document&&11>=document.documentMode,zi=null,fd=null,wo=null,pd=!1;function zg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pd||zi==null||zi!==$l(r)||(r=zi,"selectionStart"in r&&Mf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wo&&jo(wo,r)||(wo=r,r=Xl(fd,"onSelect"),0<r.length&&(e=new bf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zi)))}function el(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $i={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},dh={},m0={};$n&&(m0=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function Bu(t){if(dh[t])return dh[t];if(!$i[t])return t;var e=$i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in m0)return dh[t]=e[n];return t}var g0=Bu("animationend"),_0=Bu("animationiteration"),y0=Bu("animationstart"),v0=Bu("transitionend"),w0=new Map,$g="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){w0.set(t,e),vi(e,[t])}for(var fh=0;fh<$g.length;fh++){var ph=$g[fh],EA=ph.toLowerCase(),TA=ph[0].toUpperCase()+ph.slice(1);Lr(EA,"on"+TA)}Lr(g0,"onAnimationEnd");Lr(_0,"onAnimationIteration");Lr(y0,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(v0,"onTransitionEnd");ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IA=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function qg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ES(r,e,void 0,t),t.currentTarget=null}function E0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;qg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;qg(i,l,c),s=u}}}if(Wl)throw t=ud,Wl=!1,ud=null,t}function ge(t,e){var n=e[vd];n===void 0&&(n=e[vd]=new Set);var r=t+"__bubble";n.has(r)||(T0(e,t,2,!1),n.add(r))}function mh(t,e,n){var r=0;e&&(r|=4),T0(n,t,r,e)}var tl="_reactListening"+Math.random().toString(36).slice(2);function Bo(t){if(!t[tl]){t[tl]=!0,kv.forEach(function(n){n!=="selectionchange"&&(IA.has(n)||mh(n,!1,t),mh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tl]||(e[tl]=!0,mh("selectionchange",!1,e))}}function T0(t,e,n,r){switch(s0(e)){case 1:var i=MS;break;case 4:i=US;break;default:i=xf}n=i.bind(null,e,n,t),i=void 0,!ld||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Gr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Wv(function(){var c=s,d=Pf(n),p=[];e:{var m=w0.get(t);if(m!==void 0){var w=bf,S=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":w=ZS;break;case"focusin":S="focus",w=uh;break;case"focusout":S="blur",w=uh;break;case"beforeblur":case"afterblur":w=uh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=xg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=BS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=nA;break;case g0:case _0:case y0:w=qS;break;case v0:w=iA;break;case"scroll":w=FS;break;case"wheel":w=oA;break;case"copy":case"cut":case"paste":w=HS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=bg}var P=(e&4)!==0,C=!P&&t==="scroll",E=P?m!==null?m+"Capture":null:m;P=[];for(var _=c,v;_!==null;){v=_;var N=v.stateNode;if(v.tag===5&&N!==null&&(v=N,E!==null&&(N=Lo(_,E),N!=null&&P.push(zo(_,N,v)))),C)break;_=_.return}0<P.length&&(m=new w(m,S,null,n,d),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==od&&(S=n.relatedTarget||n.fromElement)&&(Gr(S)||S[qn]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=c,S=S?Gr(S):null,S!==null&&(C=wi(S),S!==C||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=c),w!==S)){if(P=xg,N="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=bg,N="onPointerLeave",E="onPointerEnter",_="pointer"),C=w==null?m:qi(w),v=S==null?m:qi(S),m=new P(N,_+"leave",w,n,d),m.target=C,m.relatedTarget=v,N=null,Gr(d)===c&&(P=new P(E,_+"enter",S,n,d),P.target=v,P.relatedTarget=C,N=P),C=N,w&&S)t:{for(P=w,E=S,_=0,v=P;v;v=Oi(v))_++;for(v=0,N=E;N;N=Oi(N))v++;for(;0<_-v;)P=Oi(P),_--;for(;0<v-_;)E=Oi(E),v--;for(;_--;){if(P===E||E!==null&&P===E.alternate)break t;P=Oi(P),E=Oi(E)}P=null}else P=null;w!==null&&Wg(p,m,w,P,!1),S!==null&&C!==null&&Wg(p,C,S,P,!0)}}e:{if(m=c?qi(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var b=fA;else if(Mg(m))if(h0)b=_A;else{b=mA;var L=pA}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=gA);if(b&&(b=b(t,c))){c0(p,b,n,d);break e}L&&L(t,m,c),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&td(m,"number",m.value)}switch(L=c?qi(c):window,t){case"focusin":(Mg(L)||L.contentEditable==="true")&&(zi=L,fd=c,wo=null);break;case"focusout":wo=fd=zi=null;break;case"mousedown":pd=!0;break;case"contextmenu":case"mouseup":case"dragend":pd=!1,zg(p,n,d);break;case"selectionchange":if(wA)break;case"keydown":case"keyup":zg(p,n,d)}var I;if(Vf)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Bi?l0(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(a0&&n.locale!=="ko"&&(Bi||g!=="onCompositionStart"?g==="onCompositionEnd"&&Bi&&(I=o0()):(pr=d,Of="value"in pr?pr.value:pr.textContent,Bi=!0)),L=Xl(c,g),0<L.length&&(g=new Og(g,t,null,n,d),p.push({event:g,listeners:L}),I?g.data=I:(I=u0(n),I!==null&&(g.data=I)))),(I=lA?uA(t,n):cA(t,n))&&(c=Xl(c,"onBeforeInput"),0<c.length&&(d=new Og("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=I))}E0(p,e)})}function zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Lo(t,n),s!=null&&r.unshift(zo(t,s,i)),s=Lo(t,e),s!=null&&r.push(zo(t,s,i))),t=t.return}return r}function Oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Lo(n,s),u!=null&&o.unshift(zo(n,u,l))):i||(u=Lo(n,s),u!=null&&o.push(zo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var SA=/\r\n?/g,AA=/\u0000|\uFFFD/g;function Hg(t){return(typeof t=="string"?t:""+t).replace(SA,`
`).replace(AA,"")}function nl(t,e,n){if(e=Hg(e),Hg(t)!==e&&n)throw Error(j(425))}function Yl(){}var md=null,gd=null;function _d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yd=typeof setTimeout=="function"?setTimeout:void 0,RA=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,CA=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(t){return Kg.resolve(null).then(t).catch(PA)}:yd;function PA(t){setTimeout(function(){throw t})}function _h(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Uo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Uo(e)}function Tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),yn="__reactFiber$"+Rs,$o="__reactProps$"+Rs,qn="__reactContainer$"+Rs,vd="__reactEvents$"+Rs,kA="__reactListeners$"+Rs,NA="__reactHandles$"+Rs;function Gr(t){var e=t[yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gg(t);t!==null;){if(n=t[yn])return n;t=Gg(t)}return e}t=n,n=t.parentNode}return null}function da(t){return t=t[yn]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function zu(t){return t[$o]||null}var wd=[],Wi=-1;function Vr(t){return{current:t}}function ye(t){0>Wi||(t.current=wd[Wi],wd[Wi]=null,Wi--)}function pe(t,e){Wi++,wd[Wi]=t.current,t.current=e}var Dr={},dt=Vr(Dr),Pt=Vr(!1),si=Dr;function us(t,e){var n=t.type.contextTypes;if(!n)return Dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function Jl(){ye(Pt),ye(dt)}function Qg(t,e,n){if(dt.current!==Dr)throw Error(j(168));pe(dt,e),pe(Pt,n)}function I0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,pS(t)||"Unknown",i));return Se({},n,r)}function Zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,si=dt.current,pe(dt,t),pe(Pt,Pt.current),!0}function Xg(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=I0(t,e,si),r.__reactInternalMemoizedMergedChildContext=t,ye(Pt),ye(dt),pe(dt,t)):ye(Pt),pe(Pt,n)}var xn=null,$u=!1,yh=!1;function S0(t){xn===null?xn=[t]:xn.push(t)}function DA(t){$u=!0,S0(t)}function Mr(){if(!yh&&xn!==null){yh=!0;var t=0,e=he;try{var n=xn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,$u=!1}catch(i){throw xn!==null&&(xn=xn.slice(t+1)),Qv(kf,Mr),i}finally{he=e,yh=!1}}return null}var Hi=[],Ki=0,eu=null,tu=0,Ht=[],Kt=0,oi=null,On=1,bn="";function Wr(t,e){Hi[Ki++]=tu,Hi[Ki++]=eu,eu=t,tu=e}function A0(t,e,n){Ht[Kt++]=On,Ht[Kt++]=bn,Ht[Kt++]=oi,oi=t;var r=On;t=bn;var i=32-ln(r)-1;r&=~(1<<i),n+=1;var s=32-ln(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,On=1<<32-ln(e)+i|n<<i|r,bn=s+t}else On=1<<s|n<<i|r,bn=t}function Uf(t){t.return!==null&&(Wr(t,1),A0(t,1,0))}function Ff(t){for(;t===eu;)eu=Hi[--Ki],Hi[Ki]=null,tu=Hi[--Ki],Hi[Ki]=null;for(;t===oi;)oi=Ht[--Kt],Ht[Kt]=null,bn=Ht[--Kt],Ht[Kt]=null,On=Ht[--Kt],Ht[Kt]=null}var Bt=null,Mt=null,Ee=!1,on=null;function R0(t,e){var n=Gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,Mt=Tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=oi!==null?{id:On,overflow:bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,Mt=null,!0):!1;default:return!1}}function Ed(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Td(t){if(Ee){var e=Mt;if(e){var n=e;if(!Yg(t,e)){if(Ed(t))throw Error(j(418));e=Tr(n.nextSibling);var r=Bt;e&&Yg(t,e)?R0(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Bt=t)}}else{if(Ed(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ee=!1,Bt=t}}}function Jg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function rl(t){if(t!==Bt)return!1;if(!Ee)return Jg(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_d(t.type,t.memoizedProps)),e&&(e=Mt)){if(Ed(t))throw C0(),Error(j(418));for(;e;)R0(t,e),e=Tr(e.nextSibling)}if(Jg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=Tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=Bt?Tr(t.stateNode.nextSibling):null;return!0}function C0(){for(var t=Mt;t;)t=Tr(t.nextSibling)}function cs(){Mt=Bt=null,Ee=!1}function jf(t){on===null?on=[t]:on.push(t)}var xA=Yn.ReactCurrentBatchConfig;function eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function il(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zg(t){var e=t._init;return e(t._payload)}function P0(t){function e(E,_){if(t){var v=E.deletions;v===null?(E.deletions=[_],E.flags|=16):v.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=Rr(E,_),E.index=0,E.sibling=null,E}function s(E,_,v){return E.index=v,t?(v=E.alternate,v!==null?(v=v.index,v<_?(E.flags|=2,_):v):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,_,v,N){return _===null||_.tag!==6?(_=Ah(v,E.mode,N),_.return=E,_):(_=i(_,v),_.return=E,_)}function u(E,_,v,N){var b=v.type;return b===ji?d(E,_,v.props.children,N,v.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===sr&&Zg(b)===_.type)?(N=i(_,v.props),N.ref=eo(E,_,v),N.return=E,N):(N=Nl(v.type,v.key,v.props,null,E.mode,N),N.ref=eo(E,_,v),N.return=E,N)}function c(E,_,v,N){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Rh(v,E.mode,N),_.return=E,_):(_=i(_,v.children||[]),_.return=E,_)}function d(E,_,v,N,b){return _===null||_.tag!==7?(_=ei(v,E.mode,N,b),_.return=E,_):(_=i(_,v),_.return=E,_)}function p(E,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ah(""+_,E.mode,v),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ka:return v=Nl(_.type,_.key,_.props,null,E.mode,v),v.ref=eo(E,null,_),v.return=E,v;case Fi:return _=Rh(_,E.mode,v),_.return=E,_;case sr:var N=_._init;return p(E,N(_._payload),v)}if(oo(_)||Qs(_))return _=ei(_,E.mode,v,null),_.return=E,_;il(E,_)}return null}function m(E,_,v,N){var b=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:l(E,_,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ka:return v.key===b?u(E,_,v,N):null;case Fi:return v.key===b?c(E,_,v,N):null;case sr:return b=v._init,m(E,_,b(v._payload),N)}if(oo(v)||Qs(v))return b!==null?null:d(E,_,v,N,null);il(E,v)}return null}function w(E,_,v,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return E=E.get(v)||null,l(_,E,""+N,b);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ka:return E=E.get(N.key===null?v:N.key)||null,u(_,E,N,b);case Fi:return E=E.get(N.key===null?v:N.key)||null,c(_,E,N,b);case sr:var L=N._init;return w(E,_,v,L(N._payload),b)}if(oo(N)||Qs(N))return E=E.get(v)||null,d(_,E,N,b,null);il(_,N)}return null}function S(E,_,v,N){for(var b=null,L=null,I=_,g=_=0,T=null;I!==null&&g<v.length;g++){I.index>g?(T=I,I=null):T=I.sibling;var A=m(E,I,v[g],N);if(A===null){I===null&&(I=T);break}t&&I&&A.alternate===null&&e(E,I),_=s(A,_,g),L===null?b=A:L.sibling=A,L=A,I=T}if(g===v.length)return n(E,I),Ee&&Wr(E,g),b;if(I===null){for(;g<v.length;g++)I=p(E,v[g],N),I!==null&&(_=s(I,_,g),L===null?b=I:L.sibling=I,L=I);return Ee&&Wr(E,g),b}for(I=r(E,I);g<v.length;g++)T=w(I,E,g,v[g],N),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?g:T.key),_=s(T,_,g),L===null?b=T:L.sibling=T,L=T);return t&&I.forEach(function(k){return e(E,k)}),Ee&&Wr(E,g),b}function P(E,_,v,N){var b=Qs(v);if(typeof b!="function")throw Error(j(150));if(v=b.call(v),v==null)throw Error(j(151));for(var L=b=null,I=_,g=_=0,T=null,A=v.next();I!==null&&!A.done;g++,A=v.next()){I.index>g?(T=I,I=null):T=I.sibling;var k=m(E,I,A.value,N);if(k===null){I===null&&(I=T);break}t&&I&&k.alternate===null&&e(E,I),_=s(k,_,g),L===null?b=k:L.sibling=k,L=k,I=T}if(A.done)return n(E,I),Ee&&Wr(E,g),b;if(I===null){for(;!A.done;g++,A=v.next())A=p(E,A.value,N),A!==null&&(_=s(A,_,g),L===null?b=A:L.sibling=A,L=A);return Ee&&Wr(E,g),b}for(I=r(E,I);!A.done;g++,A=v.next())A=w(I,E,g,A.value,N),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?g:A.key),_=s(A,_,g),L===null?b=A:L.sibling=A,L=A);return t&&I.forEach(function(D){return e(E,D)}),Ee&&Wr(E,g),b}function C(E,_,v,N){if(typeof v=="object"&&v!==null&&v.type===ji&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ka:e:{for(var b=v.key,L=_;L!==null;){if(L.key===b){if(b=v.type,b===ji){if(L.tag===7){n(E,L.sibling),_=i(L,v.props.children),_.return=E,E=_;break e}}else if(L.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===sr&&Zg(b)===L.type){n(E,L.sibling),_=i(L,v.props),_.ref=eo(E,L,v),_.return=E,E=_;break e}n(E,L);break}else e(E,L);L=L.sibling}v.type===ji?(_=ei(v.props.children,E.mode,N,v.key),_.return=E,E=_):(N=Nl(v.type,v.key,v.props,null,E.mode,N),N.ref=eo(E,_,v),N.return=E,E=N)}return o(E);case Fi:e:{for(L=v.key;_!==null;){if(_.key===L)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(E,_.sibling),_=i(_,v.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=Rh(v,E.mode,N),_.return=E,E=_}return o(E);case sr:return L=v._init,C(E,_,L(v._payload),N)}if(oo(v))return S(E,_,v,N);if(Qs(v))return P(E,_,v,N);il(E,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,v),_.return=E,E=_):(n(E,_),_=Ah(v,E.mode,N),_.return=E,E=_),o(E)):n(E,_)}return C}var hs=P0(!0),k0=P0(!1),nu=Vr(null),ru=null,Gi=null,Bf=null;function zf(){Bf=Gi=ru=null}function $f(t){var e=nu.current;ye(nu),t._currentValue=e}function Id(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ns(t,e){ru=t,Bf=Gi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ct=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(Bf!==t)if(t={context:t,memoizedValue:e,next:null},Gi===null){if(ru===null)throw Error(j(308));Gi=t,ru.dependencies={lanes:0,firstContext:t}}else Gi=Gi.next=t;return e}var Qr=null;function qf(t){Qr===null?Qr=[t]:Qr.push(t)}function N0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,qf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wn(t,r)}function Wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function Wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wn(t,n)}return i=r.interleaved,i===null?(e.next=e,qf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wn(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nf(t,n)}}function e_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function iu(t,e,n,r){var i=t.updateQueue;or=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,w=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,P=l;switch(m=e,w=n,P.tag){case 1:if(S=P.payload,typeof S=="function"){p=S.call(w,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=P.payload,m=typeof S=="function"?S.call(w,p,m):S,m==null)break e;p=Se({},p,m);break e;case 2:or=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=w,u=p):d=d.next=w,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);li|=o,t.lanes=o,t.memoizedState=p}}function t_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var fa={},Tn=Vr(fa),qo=Vr(fa),Wo=Vr(fa);function Xr(t){if(t===fa)throw Error(j(174));return t}function Hf(t,e){switch(pe(Wo,e),pe(qo,t),pe(Tn,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rd(e,t)}ye(Tn),pe(Tn,e)}function ds(){ye(Tn),ye(qo),ye(Wo)}function x0(t){Xr(Wo.current);var e=Xr(Tn.current),n=rd(e,t.type);e!==n&&(pe(qo,t),pe(Tn,n))}function Kf(t){qo.current===t&&(ye(Tn),ye(qo))}var Te=Vr(0);function su(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vh=[];function Gf(){for(var t=0;t<vh.length;t++)vh[t]._workInProgressVersionPrimary=null;vh.length=0}var Al=Yn.ReactCurrentDispatcher,wh=Yn.ReactCurrentBatchConfig,ai=0,Ie=null,Ue=null,qe=null,ou=!1,Eo=!1,Ho=0,OA=0;function st(){throw Error(j(321))}function Qf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cn(t[n],e[n]))return!1;return!0}function Xf(t,e,n,r,i,s){if(ai=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?MA:UA,t=n(r,i),Eo){s=0;do{if(Eo=!1,Ho=0,25<=s)throw Error(j(301));s+=1,qe=Ue=null,e.updateQueue=null,Al.current=FA,t=n(r,i)}while(Eo)}if(Al.current=au,e=Ue!==null&&Ue.next!==null,ai=0,qe=Ue=Ie=null,ou=!1,e)throw Error(j(300));return t}function Yf(){var t=Ho!==0;return Ho=0,t}function _n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Ie.memoizedState=qe=t:qe=qe.next=t,qe}function Jt(){if(Ue===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=qe===null?Ie.memoizedState:qe.next;if(e!==null)qe=e,Ue=t;else{if(t===null)throw Error(j(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},qe===null?Ie.memoizedState=qe=t:qe=qe.next=t}return qe}function Ko(t,e){return typeof e=="function"?e(t):e}function Eh(t){var e=Jt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((ai&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ie.lanes|=d,li|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,cn(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,li|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Th(t){var e=Jt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);cn(s,e.memoizedState)||(Ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function O0(){}function b0(t,e){var n=Ie,r=Jt(),i=e(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ct=!0),r=r.queue,Jf(M0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Go(9,V0.bind(null,n,r,i,e),void 0,null),He===null)throw Error(j(349));ai&30||L0(n,e,i)}return i}function L0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function V0(t,e,n,r){e.value=n,e.getSnapshot=r,U0(e)&&F0(t)}function M0(t,e,n){return n(function(){U0(e)&&F0(t)})}function U0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cn(t,n)}catch{return!0}}function F0(t){var e=Wn(t,1);e!==null&&un(e,t,1,-1)}function n_(t){var e=_n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:t},e.queue=t,t=t.dispatch=VA.bind(null,Ie,t),[e.memoizedState,t]}function Go(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function j0(){return Jt().memoizedState}function Rl(t,e,n,r){var i=_n();Ie.flags|=t,i.memoizedState=Go(1|e,n,void 0,r===void 0?null:r)}function qu(t,e,n,r){var i=Jt();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&Qf(r,o.deps)){i.memoizedState=Go(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=Go(1|e,n,s,r)}function r_(t,e){return Rl(8390656,8,t,e)}function Jf(t,e){return qu(2048,8,t,e)}function B0(t,e){return qu(4,2,t,e)}function z0(t,e){return qu(4,4,t,e)}function $0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function q0(t,e,n){return n=n!=null?n.concat([t]):null,qu(4,4,$0.bind(null,e,t),n)}function Zf(){}function W0(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function H0(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function K0(t,e,n){return ai&21?(cn(n,e)||(n=Jv(),Ie.lanes|=n,li|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n)}function bA(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=wh.transition;wh.transition={};try{t(!1),e()}finally{he=n,wh.transition=r}}function G0(){return Jt().memoizedState}function LA(t,e,n){var r=Ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Q0(t))X0(e,n);else if(n=N0(t,e,n,r),n!==null){var i=wt();un(n,t,r,i),Y0(n,e,r)}}function VA(t,e,n){var r=Ar(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Q0(t))X0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,cn(l,o)){var u=e.interleaved;u===null?(i.next=i,qf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=N0(t,e,i,r),n!==null&&(i=wt(),un(n,t,r,i),Y0(n,e,r))}}function Q0(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function X0(t,e){Eo=ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Y0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nf(t,n)}}var au={readContext:Yt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},MA={readContext:Yt,useCallback:function(t,e){return _n().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:r_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,$0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=_n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=LA.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=_n();return t={current:t},e.memoizedState=t},useState:n_,useDebugValue:Zf,useDeferredValue:function(t){return _n().memoizedState=t},useTransition:function(){var t=n_(!1),e=t[0];return t=bA.bind(null,t[1]),_n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=_n();if(Ee){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),He===null)throw Error(j(349));ai&30||L0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,r_(M0.bind(null,r,s,t),[t]),r.flags|=2048,Go(9,V0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=_n(),e=He.identifierPrefix;if(Ee){var n=bn,r=On;n=(r&~(1<<32-ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=OA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},UA={readContext:Yt,useCallback:W0,useContext:Yt,useEffect:Jf,useImperativeHandle:q0,useInsertionEffect:B0,useLayoutEffect:z0,useMemo:H0,useReducer:Eh,useRef:j0,useState:function(){return Eh(Ko)},useDebugValue:Zf,useDeferredValue:function(t){var e=Jt();return K0(e,Ue.memoizedState,t)},useTransition:function(){var t=Eh(Ko)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:O0,useSyncExternalStore:b0,useId:G0,unstable_isNewReconciler:!1},FA={readContext:Yt,useCallback:W0,useContext:Yt,useEffect:Jf,useImperativeHandle:q0,useInsertionEffect:B0,useLayoutEffect:z0,useMemo:H0,useReducer:Th,useRef:j0,useState:function(){return Th(Ko)},useDebugValue:Zf,useDeferredValue:function(t){var e=Jt();return Ue===null?e.memoizedState=t:K0(e,Ue.memoizedState,t)},useTransition:function(){var t=Th(Ko)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:O0,useSyncExternalStore:b0,useId:G0,unstable_isNewReconciler:!1};function rn(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Sd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wu={isMounted:function(t){return(t=t._reactInternals)?wi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Ar(t),s=Un(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,i),e!==null&&(un(e,t,i,r),Sl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Ar(t),s=Un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,i),e!==null&&(un(e,t,i,r),Sl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=Ar(t),i=Un(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ir(t,i,r),e!==null&&(un(e,t,r,n),Sl(e,t,r))}};function i_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!jo(n,r)||!jo(i,s):!0}function J0(t,e,n){var r=!1,i=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=kt(e)?si:dt.current,r=e.contextTypes,s=(r=r!=null)?us(t,i):Dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function s_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wu.enqueueReplaceState(e,e.state,null)}function Ad(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Wf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=kt(e)?si:dt.current,i.context=us(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wu.enqueueReplaceState(i,i.state,null),iu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fs(t,e){try{var n="",r=e;do n+=fS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ih(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jA=typeof WeakMap=="function"?WeakMap:Map;function Z0(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){uu||(uu=!0,Vd=r),Rd(t,e)},n}function ew(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Rd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rd(t,e),typeof r!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function o_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new jA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=eR.bind(null,t,e,n),e.then(t,t))}function a_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function l_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,Ir(n,e,1))),n.lanes|=1),t)}var BA=Yn.ReactCurrentOwner,Ct=!1;function yt(t,e,n,r){e.child=t===null?k0(e,null,n,r):hs(e,t.child,n,r)}function u_(t,e,n,r,i){n=n.render;var s=e.ref;return ns(e,i),r=Xf(t,e,n,r,s,i),n=Yf(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(Ee&&n&&Uf(e),e.flags|=1,yt(t,e,r,i),e.child)}function c_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ap(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tw(t,e,s,r,i)):(t=Nl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(o,r)&&t.ref===e.ref)return Hn(t,e,i)}return e.flags|=1,t=Rr(s,r),t.ref=e.ref,t.return=e,e.child=t}function tw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(jo(s,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ct=!0);else return e.lanes=t.lanes,Hn(t,e,i)}return Cd(t,e,n,r,i)}function nw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Xi,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Xi,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Xi,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Xi,Vt),Vt|=r;return yt(t,e,i,n),e.child}function rw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cd(t,e,n,r,i){var s=kt(n)?si:dt.current;return s=us(e,s),ns(e,i),n=Xf(t,e,n,r,s,i),r=Yf(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(Ee&&r&&Uf(e),e.flags|=1,yt(t,e,n,i),e.child)}function h_(t,e,n,r,i){if(kt(n)){var s=!0;Zl(e)}else s=!1;if(ns(e,i),e.stateNode===null)Cl(t,e),J0(e,n,r),Ad(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yt(c):(c=kt(n)?si:dt.current,c=us(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&s_(e,o,r,c),or=!1;var m=e.memoizedState;o.state=m,iu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Pt.current||or?(typeof d=="function"&&(Sd(e,n,d,r),u=e.memoizedState),(l=or||i_(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,D0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:rn(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Yt(u):(u=kt(n)?si:dt.current,u=us(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&s_(e,o,r,u),or=!1,m=e.memoizedState,o.state=m,iu(e,r,o,i);var S=e.memoizedState;l!==p||m!==S||Pt.current||or?(typeof w=="function"&&(Sd(e,n,w,r),S=e.memoizedState),(c=or||i_(e,n,c,r,m,S,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Pd(t,e,n,r,s,i)}function Pd(t,e,n,r,i,s){rw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Xg(e,n,!1),Hn(t,e,s);r=e.stateNode,BA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=hs(e,t.child,null,s),e.child=hs(e,null,l,s)):yt(t,e,l,s),e.memoizedState=r.state,i&&Xg(e,n,!0),e.child}function iw(t){var e=t.stateNode;e.pendingContext?Qg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qg(t,e.context,!1),Hf(t,e.containerInfo)}function d_(t,e,n,r,i){return cs(),jf(i),e.flags|=256,yt(t,e,n,r),e.child}var kd={dehydrated:null,treeContext:null,retryLane:0};function Nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function sw(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Te,i&1),t===null)return Td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gu(o,r,0,null),t=ei(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nd(n),e.memoizedState=kd,t):ep(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return zA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Rr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Rr(l,s):(s=ei(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kd,r}return s=t.child,t=s.sibling,r=Rr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ep(t,e){return e=Gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sl(t,e,n,r){return r!==null&&jf(r),hs(e,t.child,null,n),t=ep(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ih(Error(j(422))),sl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gu({mode:"visible",children:r.children},i,0,null),s=ei(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&hs(e,t.child,null,o),e.child.memoizedState=Nd(o),e.memoizedState=kd,s);if(!(e.mode&1))return sl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Ih(s,r,void 0),sl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ct||l){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(t,i),un(r,t,i,-1))}return op(),r=Ih(Error(j(421))),sl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=tR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mt=Tr(i.nextSibling),Bt=e,Ee=!0,on=null,t!==null&&(Ht[Kt++]=On,Ht[Kt++]=bn,Ht[Kt++]=oi,On=t.id,bn=t.overflow,oi=e),e=ep(e,r.children),e.flags|=4096,e)}function f_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Id(t.return,e,n)}function Sh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ow(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(yt(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&f_(t,n,e);else if(t.tag===19)f_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&su(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&su(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sh(e,!0,n,null,s);break;case"together":Sh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),li|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $A(t,e,n){switch(e.tag){case 3:iw(e),cs();break;case 5:x0(e);break;case 1:kt(e.type)&&Zl(e);break;case 4:Hf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(nu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?sw(t,e,n):(pe(Te,Te.current&1),t=Hn(t,e,n),t!==null?t.sibling:null);pe(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ow(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,nw(t,e,n)}return Hn(t,e,n)}var aw,Dd,lw,uw;aw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dd=function(){};lw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xr(Tn.current);var s=null;switch(n){case"input":i=Zh(t,i),r=Zh(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=nd(t,i),r=nd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yl)}id(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ge("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};uw=function(t,e,n,r){n!==r&&(e.flags|=4)};function to(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function qA(t,e,n){var r=e.pendingProps;switch(Ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return kt(e.type)&&Jl(),ot(e),null;case 3:return r=e.stateNode,ds(),ye(Pt),ye(dt),Gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(rl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,on!==null&&(Fd(on),on=null))),Dd(t,e),ot(e),null;case 5:Kf(e);var i=Xr(Wo.current);if(n=e.type,t!==null&&e.stateNode!=null)lw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return ot(e),null}if(t=Xr(Tn.current),rl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[yn]=e,r[$o]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<lo.length;i++)ge(lo[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Tg(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":Sg(r,s),ge("invalid",r)}id(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&nl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&nl(r.textContent,l,t),i=["children",""+l]):Oo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":Ga(r),Ig(r,s,!0);break;case"textarea":Ga(r),Ag(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yn]=e,t[$o]=r,aw(t,e,!1,!1),e.stateNode=t;e:{switch(o=sd(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<lo.length;i++)ge(lo[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":Tg(t,r),i=Zh(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),ge("invalid",t);break;case"textarea":Sg(t,r),i=nd(t,r),ge("invalid",t);break;default:i=r}id(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?jv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Uv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&bo(t,u):typeof u=="number"&&bo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ge("scroll",t):u!=null&&Sf(t,s,u,o))}switch(n){case"input":Ga(t),Ig(t,r,!1);break;case"textarea":Ga(t),Ag(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Nr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ji(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ji(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)uw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Xr(Wo.current),Xr(Tn.current),rl(e)){if(r=e.stateNode,n=e.memoizedProps,r[yn]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:nl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=e,e.stateNode=r}return ot(e),null;case 13:if(ye(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Mt!==null&&e.mode&1&&!(e.flags&128))C0(),cs(),e.flags|=98560,s=!1;else if(s=rl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[yn]=e}else cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),s=!1}else on!==null&&(Fd(on),on=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?je===0&&(je=3):op())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return ds(),Dd(t,e),t===null&&Bo(e.stateNode.containerInfo),ot(e),null;case 10:return $f(e.type._context),ot(e),null;case 17:return kt(e.type)&&Jl(),ot(e),null;case 19:if(ye(Te),s=e.memoizedState,s===null)return ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)to(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=su(t),o!==null){for(e.flags|=128,to(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&xe()>ps&&(e.flags|=128,r=!0,to(s,!1),e.lanes=4194304)}else{if(!r)if(t=su(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),to(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return ot(e),null}else 2*xe()-s.renderingStartTime>ps&&n!==1073741824&&(e.flags|=128,r=!0,to(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xe(),e.sibling=null,n=Te.current,pe(Te,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return sp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function WA(t,e){switch(Ff(e),e.tag){case 1:return kt(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ds(),ye(Pt),ye(dt),Gf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kf(e),null;case 13:if(ye(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Te),null;case 4:return ds(),null;case 10:return $f(e.type._context),null;case 22:case 23:return sp(),null;case 24:return null;default:return null}}var ol=!1,ut=!1,HA=typeof WeakSet=="function"?WeakSet:Set,$=null;function Qi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function xd(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var p_=!1;function KA(t,e){if(md=Gl,t=p0(),Mf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(gd={focusedElem:t,selectionRange:n},Gl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var P=S.memoizedProps,C=S.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?P:rn(e.type,P),C);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(N){Pe(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return S=p_,p_=!1,S}function To(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xd(e,n,s)}i=i.next}while(i!==r)}}function Hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cw(t){var e=t.alternate;e!==null&&(t.alternate=null,cw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yn],delete e[$o],delete e[vd],delete e[kA],delete e[NA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hw(t){return t.tag===5||t.tag===3||t.tag===4}function m_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yl));else if(r!==4&&(t=t.child,t!==null))for(bd(t,e,n),t=t.sibling;t!==null;)bd(t,e,n),t=t.sibling}function Ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ld(t,e,n),t=t.sibling;t!==null;)Ld(t,e,n),t=t.sibling}var Qe=null,sn=!1;function rr(t,e,n){for(n=n.child;n!==null;)dw(t,e,n),n=n.sibling}function dw(t,e,n){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(Uu,n)}catch{}switch(n.tag){case 5:ut||Qi(n,e);case 6:var r=Qe,i=sn;Qe=null,rr(t,e,n),Qe=r,sn=i,Qe!==null&&(sn?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(sn?(t=Qe,n=n.stateNode,t.nodeType===8?_h(t.parentNode,n):t.nodeType===1&&_h(t,n),Uo(t)):_h(Qe,n.stateNode));break;case 4:r=Qe,i=sn,Qe=n.stateNode.containerInfo,sn=!0,rr(t,e,n),Qe=r,sn=i;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xd(n,e,o),i=i.next}while(i!==r)}rr(t,e,n);break;case 1:if(!ut&&(Qi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,rr(t,e,n),ut=r):rr(t,e,n);break;default:rr(t,e,n)}}function g_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HA),e.forEach(function(r){var i=nR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Qe=l.stateNode,sn=!1;break e;case 3:Qe=l.stateNode.containerInfo,sn=!0;break e;case 4:Qe=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(Qe===null)throw Error(j(160));dw(s,o,i),Qe=null,sn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Pe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fw(e,t),e=e.sibling}function fw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nn(e,t),mn(t),r&4){try{To(3,t,t.return),Hu(3,t)}catch(P){Pe(t,t.return,P)}try{To(5,t,t.return)}catch(P){Pe(t,t.return,P)}}break;case 1:nn(e,t),mn(t),r&512&&n!==null&&Qi(n,n.return);break;case 5:if(nn(e,t),mn(t),r&512&&n!==null&&Qi(n,n.return),t.flags&32){var i=t.stateNode;try{bo(i,"")}catch(P){Pe(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Lv(i,s),sd(l,o);var c=sd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?jv(i,p):d==="dangerouslySetInnerHTML"?Uv(i,p):d==="children"?bo(i,p):Sf(i,d,p,c)}switch(l){case"input":ed(i,s);break;case"textarea":Vv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Ji(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ji(i,!!s.multiple,s.defaultValue,!0):Ji(i,!!s.multiple,s.multiple?[]:"",!1))}i[$o]=s}catch(P){Pe(t,t.return,P)}}break;case 6:if(nn(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Pe(t,t.return,P)}}break;case 3:if(nn(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(P){Pe(t,t.return,P)}break;case 4:nn(e,t),mn(t);break;case 13:nn(e,t),mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(rp=xe())),r&4&&g_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(c=ut)||d,nn(e,t),ut=c):nn(e,t),mn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for($=t,d=t.child;d!==null;){for(p=$=d;$!==null;){switch(m=$,w=m.child,m.tag){case 0:case 11:case 14:case 15:To(4,m,m.return);break;case 1:Qi(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(P){Pe(r,n,P)}}break;case 5:Qi(m,m.return);break;case 22:if(m.memoizedState!==null){y_(p);continue}}w!==null?(w.return=m,$=w):y_(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Fv("display",o))}catch(P){Pe(t,t.return,P)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){Pe(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nn(e,t),mn(t),r&4&&g_(t);break;case 21:break;default:nn(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hw(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bo(i,""),r.flags&=-33);var s=m_(t);Ld(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=m_(t);bd(t,l,o);break;default:throw Error(j(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function GA(t,e,n){$=t,pw(t)}function pw(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ol;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ut;l=ol;var c=ut;if(ol=o,(ut=u)&&!c)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?v_(i):u!==null?(u.return=o,$=u):v_(i);for(;s!==null;)$=s,pw(s),s=s.sibling;$=i,ol=l,ut=c}__(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):__(t)}}function __(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||Hu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&t_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}t_(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Uo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ut||e.flags&512&&Od(e)}catch(m){Pe(e,e.return,m)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function y_(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function v_(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hu(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Pe(e,i,u)}}var s=e.return;try{Od(e)}catch(u){Pe(e,s,u)}break;case 5:var o=e.return;try{Od(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var QA=Math.ceil,lu=Yn.ReactCurrentDispatcher,tp=Yn.ReactCurrentOwner,Qt=Yn.ReactCurrentBatchConfig,ae=0,He=null,Le=null,Je=0,Vt=0,Xi=Vr(0),je=0,Qo=null,li=0,Ku=0,np=0,Io=null,At=null,rp=0,ps=1/0,Dn=null,uu=!1,Vd=null,Sr=null,al=!1,mr=null,cu=0,So=0,Md=null,Pl=-1,kl=0;function wt(){return ae&6?xe():Pl!==-1?Pl:Pl=xe()}function Ar(t){return t.mode&1?ae&2&&Je!==0?Je&-Je:xA.transition!==null?(kl===0&&(kl=Jv()),kl):(t=he,t!==0||(t=window.event,t=t===void 0?16:s0(t.type)),t):1}function un(t,e,n,r){if(50<So)throw So=0,Md=null,Error(j(185));ca(t,n,r),(!(ae&2)||t!==He)&&(t===He&&(!(ae&2)&&(Ku|=n),je===4&&lr(t,Je)),Nt(t,r),n===1&&ae===0&&!(e.mode&1)&&(ps=xe()+500,$u&&Mr()))}function Nt(t,e){var n=t.callbackNode;xS(t,e);var r=Kl(t,t===He?Je:0);if(r===0)n!==null&&Pg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Pg(n),e===1)t.tag===0?DA(w_.bind(null,t)):S0(w_.bind(null,t)),CA(function(){!(ae&6)&&Mr()}),n=null;else{switch(Zv(r)){case 1:n=kf;break;case 4:n=Xv;break;case 16:n=Hl;break;case 536870912:n=Yv;break;default:n=Hl}n=Tw(n,mw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mw(t,e){if(Pl=-1,kl=0,ae&6)throw Error(j(327));var n=t.callbackNode;if(rs()&&t.callbackNode!==n)return null;var r=Kl(t,t===He?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=hu(t,r);else{e=r;var i=ae;ae|=2;var s=_w();(He!==t||Je!==e)&&(Dn=null,ps=xe()+500,Zr(t,e));do try{JA();break}catch(l){gw(t,l)}while(!0);zf(),lu.current=s,ae=i,Le!==null?e=0:(He=null,Je=0,e=je)}if(e!==0){if(e===2&&(i=cd(t),i!==0&&(r=i,e=Ud(t,i))),e===1)throw n=Qo,Zr(t,0),lr(t,r),Nt(t,xe()),n;if(e===6)lr(t,r);else{if(i=t.current.alternate,!(r&30)&&!XA(i)&&(e=hu(t,r),e===2&&(s=cd(t),s!==0&&(r=s,e=Ud(t,s))),e===1))throw n=Qo,Zr(t,0),lr(t,r),Nt(t,xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Hr(t,At,Dn);break;case 3:if(lr(t,r),(r&130023424)===r&&(e=rp+500-xe(),10<e)){if(Kl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=yd(Hr.bind(null,t,At,Dn),e);break}Hr(t,At,Dn);break;case 4:if(lr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ln(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*QA(r/1960))-r,10<r){t.timeoutHandle=yd(Hr.bind(null,t,At,Dn),r);break}Hr(t,At,Dn);break;case 5:Hr(t,At,Dn);break;default:throw Error(j(329))}}}return Nt(t,xe()),t.callbackNode===n?mw.bind(null,t):null}function Ud(t,e){var n=Io;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=hu(t,e),t!==2&&(e=At,At=n,e!==null&&Fd(e)),t}function Fd(t){At===null?At=t:At.push.apply(At,t)}function XA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~np,e&=~Ku,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ln(e),r=1<<n;t[n]=-1,e&=~r}}function w_(t){if(ae&6)throw Error(j(327));rs();var e=Kl(t,0);if(!(e&1))return Nt(t,xe()),null;var n=hu(t,e);if(t.tag!==0&&n===2){var r=cd(t);r!==0&&(e=r,n=Ud(t,r))}if(n===1)throw n=Qo,Zr(t,0),lr(t,e),Nt(t,xe()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,At,Dn),Nt(t,xe()),null}function ip(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(ps=xe()+500,$u&&Mr())}}function ui(t){mr!==null&&mr.tag===0&&!(ae&6)&&rs();var e=ae;ae|=1;var n=Qt.transition,r=he;try{if(Qt.transition=null,he=1,t)return t()}finally{he=r,Qt.transition=n,ae=e,!(ae&6)&&Mr()}}function sp(){Vt=Xi.current,ye(Xi)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RA(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Ff(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jl();break;case 3:ds(),ye(Pt),ye(dt),Gf();break;case 5:Kf(r);break;case 4:ds();break;case 13:ye(Te);break;case 19:ye(Te);break;case 10:$f(r.type._context);break;case 22:case 23:sp()}n=n.return}if(He=t,Le=t=Rr(t.current,null),Je=Vt=e,je=0,Qo=null,np=Ku=li=0,At=Io=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qr=null}return t}function gw(t,e){do{var n=Le;try{if(zf(),Al.current=au,ou){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ou=!1}if(ai=0,qe=Ue=Ie=null,Eo=!1,Ho=0,tp.current=null,n===null||n.return===null){je=1,Qo=e,Le=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=a_(o);if(w!==null){w.flags&=-257,l_(w,o,l,s,e),w.mode&1&&o_(s,c,e),e=w,u=c;var S=e.updateQueue;if(S===null){var P=new Set;P.add(u),e.updateQueue=P}else S.add(u);break e}else{if(!(e&1)){o_(s,c,e),op();break e}u=Error(j(426))}}else if(Ee&&l.mode&1){var C=a_(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),l_(C,o,l,s,e),jf(fs(u,l));break e}}s=u=fs(u,l),je!==4&&(je=2),Io===null?Io=[s]:Io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=Z0(s,u,e);e_(s,E);break e;case 1:l=u;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Sr===null||!Sr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=ew(s,l,e);e_(s,N);break e}}s=s.return}while(s!==null)}vw(n)}catch(b){e=b,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function _w(){var t=lu.current;return lu.current=au,t===null?au:t}function op(){(je===0||je===3||je===2)&&(je=4),He===null||!(li&268435455)&&!(Ku&268435455)||lr(He,Je)}function hu(t,e){var n=ae;ae|=2;var r=_w();(He!==t||Je!==e)&&(Dn=null,Zr(t,e));do try{YA();break}catch(i){gw(t,i)}while(!0);if(zf(),ae=n,lu.current=r,Le!==null)throw Error(j(261));return He=null,Je=0,je}function YA(){for(;Le!==null;)yw(Le)}function JA(){for(;Le!==null&&!IS();)yw(Le)}function yw(t){var e=Ew(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?vw(t):Le=e,tp.current=null}function vw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=WA(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Le=null;return}}else if(n=qA(n,e,Vt),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);je===0&&(je=5)}function Hr(t,e,n){var r=he,i=Qt.transition;try{Qt.transition=null,he=1,ZA(t,e,n,r)}finally{Qt.transition=i,he=r}return null}function ZA(t,e,n,r){do rs();while(mr!==null);if(ae&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(OS(t,s),t===He&&(Le=He=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,Tw(Hl,function(){return rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qt.transition,Qt.transition=null;var o=he;he=1;var l=ae;ae|=4,tp.current=null,KA(t,n),fw(n,t),vA(gd),Gl=!!md,gd=md=null,t.current=n,GA(n),SS(),ae=l,he=o,Qt.transition=s}else t.current=n;if(al&&(al=!1,mr=t,cu=i),s=t.pendingLanes,s===0&&(Sr=null),CS(n.stateNode),Nt(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uu)throw uu=!1,t=Vd,Vd=null,t;return cu&1&&t.tag!==0&&rs(),s=t.pendingLanes,s&1?t===Md?So++:(So=0,Md=t):So=0,Mr(),null}function rs(){if(mr!==null){var t=Zv(cu),e=Qt.transition,n=he;try{if(Qt.transition=null,he=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,cu=0,ae&6)throw Error(j(331));var i=ae;for(ae|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for($=c;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:To(8,d,s)}var p=d.child;if(p!==null)p.return=d,$=p;else for(;$!==null;){d=$;var m=d.sibling,w=d.return;if(cw(d),d===c){$=null;break}if(m!==null){m.return=w,$=m;break}$=w}}}var S=s.alternate;if(S!==null){var P=S.child;if(P!==null){S.child=null;do{var C=P.sibling;P.sibling=null,P=C}while(P!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:To(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,$=E;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,$=v;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hu(9,l)}}catch(b){Pe(l,l.return,b)}if(l===o){$=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,$=N;break e}$=l.return}}if(ae=i,Mr(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(Uu,t)}catch{}r=!0}return r}finally{he=n,Qt.transition=e}}return!1}function E_(t,e,n){e=fs(n,e),e=Z0(t,e,1),t=Ir(t,e,1),e=wt(),t!==null&&(ca(t,1,e),Nt(t,e))}function Pe(t,e,n){if(t.tag===3)E_(t,t,n);else for(;e!==null;){if(e.tag===3){E_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sr===null||!Sr.has(r))){t=fs(n,t),t=ew(e,t,1),e=Ir(e,t,1),t=wt(),e!==null&&(ca(e,1,t),Nt(e,t));break}}e=e.return}}function eR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Je&n)===n&&(je===4||je===3&&(Je&130023424)===Je&&500>xe()-rp?Zr(t,0):np|=n),Nt(t,e)}function ww(t,e){e===0&&(t.mode&1?(e=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):e=1);var n=wt();t=Wn(t,e),t!==null&&(ca(t,e,n),Nt(t,n))}function tR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ww(t,n)}function nR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),ww(t,n)}var Ew;Ew=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)Ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ct=!1,$A(t,e,n);Ct=!!(t.flags&131072)}else Ct=!1,Ee&&e.flags&1048576&&A0(e,tu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Cl(t,e),t=e.pendingProps;var i=us(e,dt.current);ns(e,n),i=Xf(null,e,r,t,i,n);var s=Yf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,Zl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wf(e),i.updater=Wu,e.stateNode=i,i._reactInternals=e,Ad(e,r,t,n),e=Pd(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&Uf(e),yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Cl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=iR(r),t=rn(r,t),i){case 0:e=Cd(null,e,r,t,n);break e;case 1:e=h_(null,e,r,t,n);break e;case 11:e=u_(null,e,r,t,n);break e;case 14:e=c_(null,e,r,rn(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Cd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),h_(t,e,r,i,n);case 3:e:{if(iw(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,D0(t,e),iu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=fs(Error(j(423)),e),e=d_(t,e,r,n,i);break e}else if(r!==i){i=fs(Error(j(424)),e),e=d_(t,e,r,n,i);break e}else for(Mt=Tr(e.stateNode.containerInfo.firstChild),Bt=e,Ee=!0,on=null,n=k0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cs(),r===i){e=Hn(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return x0(e),t===null&&Td(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,_d(r,i)?o=null:s!==null&&_d(r,s)&&(e.flags|=32),rw(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&Td(e),null;case 13:return sw(t,e,n);case 4:return Hf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=hs(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),u_(t,e,r,i,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(nu,r._currentValue),r._currentValue=o,s!==null)if(cn(s.value,o)){if(s.children===i.children&&!Pt.current){e=Hn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Un(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Id(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Id(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ns(e,n),i=Yt(i),r=r(i),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,i=rn(r,e.pendingProps),i=rn(r.type,i),c_(t,e,r,i,n);case 15:return tw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Cl(t,e),e.tag=1,kt(r)?(t=!0,Zl(e)):t=!1,ns(e,n),J0(e,r,i),Ad(e,r,i,n),Pd(null,e,r,!0,t,n);case 19:return ow(t,e,n);case 22:return nw(t,e,n)}throw Error(j(156,e.tag))};function Tw(t,e){return Qv(t,e)}function rR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(t,e,n,r){return new rR(t,e,n,r)}function ap(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iR(t){if(typeof t=="function")return ap(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rf)return 11;if(t===Cf)return 14}return 2}function Rr(t,e){var n=t.alternate;return n===null?(n=Gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ap(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ji:return ei(n.children,i,s,e);case Af:o=8,i|=8;break;case Qh:return t=Gt(12,n,e,i|2),t.elementType=Qh,t.lanes=s,t;case Xh:return t=Gt(13,n,e,i),t.elementType=Xh,t.lanes=s,t;case Yh:return t=Gt(19,n,e,i),t.elementType=Yh,t.lanes=s,t;case xv:return Gu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Nv:o=10;break e;case Dv:o=9;break e;case Rf:o=11;break e;case Cf:o=14;break e;case sr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ei(t,e,n,r){return t=Gt(7,t,r,e),t.lanes=n,t}function Gu(t,e,n,r){return t=Gt(22,t,r,e),t.elementType=xv,t.lanes=n,t.stateNode={isHidden:!1},t}function Ah(t,e,n){return t=Gt(6,t,null,e),t.lanes=n,t}function Rh(t,e,n){return e=Gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oh(0),this.expirationTimes=oh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lp(t,e,n,r,i,s,o,l,u){return t=new sR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wf(s),t}function oR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Iw(t){if(!t)return Dr;t=t._reactInternals;e:{if(wi(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(kt(n))return I0(t,n,e)}return e}function Sw(t,e,n,r,i,s,o,l,u){return t=lp(n,r,!0,t,i,s,o,l,u),t.context=Iw(null),n=t.current,r=wt(),i=Ar(n),s=Un(r,i),s.callback=e??null,Ir(n,s,i),t.current.lanes=i,ca(t,i,r),Nt(t,r),t}function Qu(t,e,n,r){var i=e.current,s=wt(),o=Ar(i);return n=Iw(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ir(i,e,o),t!==null&&(un(t,i,o,s),Sl(t,i,o)),o}function du(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function T_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function up(t,e){T_(t,e),(t=t.alternate)&&T_(t,e)}function aR(){return null}var Aw=typeof reportError=="function"?reportError:function(t){console.error(t)};function cp(t){this._internalRoot=t}Xu.prototype.render=cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Qu(t,e,null,null)};Xu.prototype.unmount=cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ui(function(){Qu(null,t,null,null)}),e[qn]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=n0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&i0(t)}};function hp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function I_(){}function lR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=du(o);s.call(c)}}var o=Sw(e,r,t,0,null,!1,!1,"",I_);return t._reactRootContainer=o,t[qn]=o.current,Bo(t.nodeType===8?t.parentNode:t),ui(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=du(u);l.call(c)}}var u=lp(t,0,!1,null,null,!1,!1,"",I_);return t._reactRootContainer=u,t[qn]=u.current,Bo(t.nodeType===8?t.parentNode:t),ui(function(){Qu(e,u,n,r)}),u}function Ju(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=du(o);l.call(u)}}Qu(e,o,t,i)}else o=lR(n,e,t,i,r);return du(o)}e0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ao(e.pendingLanes);n!==0&&(Nf(e,n|1),Nt(e,xe()),!(ae&6)&&(ps=xe()+500,Mr()))}break;case 13:ui(function(){var r=Wn(t,1);if(r!==null){var i=wt();un(r,t,1,i)}}),up(t,1)}};Df=function(t){if(t.tag===13){var e=Wn(t,134217728);if(e!==null){var n=wt();un(e,t,134217728,n)}up(t,134217728)}};t0=function(t){if(t.tag===13){var e=Ar(t),n=Wn(t,e);if(n!==null){var r=wt();un(n,t,e,r)}up(t,e)}};n0=function(){return he};r0=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};ad=function(t,e,n){switch(e){case"input":if(ed(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=zu(r);if(!i)throw Error(j(90));bv(r),ed(r,i)}}}break;case"textarea":Vv(t,n);break;case"select":e=n.value,e!=null&&Ji(t,!!n.multiple,e,!1)}};$v=ip;qv=ui;var uR={usingClientEntryPoint:!1,Events:[da,qi,zu,Bv,zv,ip]},no={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cR={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Kv(t),t===null?null:t.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||aR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Uu=ll.inject(cR),En=ll}catch{}}qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uR;qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hp(e))throw Error(j(200));return oR(t,e,null,n)};qt.createRoot=function(t,e){if(!hp(t))throw Error(j(299));var n=!1,r="",i=Aw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=lp(t,1,!1,null,null,n,!1,r,i),t[qn]=e.current,Bo(t.nodeType===8?t.parentNode:t),new cp(e)};qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Kv(e),t=t===null?null:t.stateNode,t};qt.flushSync=function(t){return ui(t)};qt.hydrate=function(t,e,n){if(!Yu(e))throw Error(j(200));return Ju(null,t,e,!0,n)};qt.hydrateRoot=function(t,e,n){if(!hp(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Aw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Sw(e,null,t,1,n??null,i,!1,s,o),t[qn]=e.current,Bo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xu(e)};qt.render=function(t,e,n){if(!Yu(e))throw Error(j(200));return Ju(null,t,e,!1,n)};qt.unmountComponentAtNode=function(t){if(!Yu(t))throw Error(j(40));return t._reactRootContainer?(ui(function(){Ju(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};qt.unstable_batchedUpdates=ip;qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Ju(t,e,n,!1,r)};qt.version="18.3.1-next-f1338f8080-20240426";function Rw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rw)}catch(t){console.error(t)}}Rw(),Rv.exports=qt;var hR=Rv.exports,Cw,S_=hR;Cw=S_.createRoot,S_.hydrateRoot;const dR="_login_lzxii_1",fR="_logo_lzxii_9",pR="_loginForm_lzxii_13",mR="_formInput_lzxii_24",gR="_loginTerm_lzxii_39",_R="_loginForgot_lzxii_45",yR="_loginToggle_lzxii_50",gn={login:dR,logo:fR,loginForm:pR,formInput:mR,loginTerm:gR,loginForgot:_R,loginToggle:yR},vR="/vite-react-deploy/assets/logo_big-Cp0kVrXR.png";var A_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},kw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(n[d],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new ER;const m=s<<2|l>>4;if(r.push(m),c!==64){const w=l<<4&240|c>>2;if(r.push(w),p!==64){const S=c<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ER extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TR=function(t){const e=Pw(t);return kw.encodeByteArray(e,!0)},fu=function(t){return TR(t).replace(/\./g,"")},Nw=function(t){try{return kw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function IR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SR=()=>IR().__FIREBASE_DEFAULTS__,AR=()=>{if(typeof process>"u"||typeof A_>"u")return;const t=A_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nw(t[1]);return e&&JSON.parse(e)},Zu=()=>{try{return SR()||AR()||RR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dw=t=>{var e,n;return(n=(e=Zu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xw=t=>{const e=Dw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ow=()=>{var t;return(t=Zu())===null||t===void 0?void 0:t.config},bw=t=>{var e;return(e=Zu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Lw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fu(JSON.stringify(n)),fu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function kR(){var t;const e=(t=Zu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DR(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xR(){return!kR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mw(){try{return typeof indexedDB=="object"}catch{return!1}}function Uw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function OR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR="FirebaseError";class en extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bR,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?LR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new en(i,l,r)}}function LR(t,e){return t.replace(VR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const VR=/\{\$([^}]+)}/g;function MR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ms(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(R_(s)&&R_(o)){if(!ms(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function R_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function uo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function co(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function UR(t,e){const n=new FR(t,e);return n.subscribe.bind(n)}class FR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ch),i.error===void 0&&(i.error=Ch),i.complete===void 0&&(i.complete=Ch);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ch(){}/**
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
 */const BR=1e3,zR=2,$R=4*60*60*1e3,qR=.5;function C_(t,e=BR,n=zR){const r=e*Math.pow(n,t),i=Math.round(qR*r*(Math.random()-.5)*2);return Math.min($R,r+i)}/**
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
 */function ve(t){return t&&t._delegate?t._delegate:t}class Zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kr="[DEFAULT]";/**
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
 */class WR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new CR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KR(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HR(t){return t===Kr?void 0:t}function KR(t){return t.instantiationMode==="EAGER"}/**
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
 */class GR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const QR={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},XR=re.INFO,YR={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},JR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=YR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=XR,this._logHandler=JR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const ZR=(t,e)=>e.some(n=>t instanceof n);let P_,k_;function eC(){return P_||(P_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tC(){return k_||(k_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fw=new WeakMap,jd=new WeakMap,jw=new WeakMap,Ph=new WeakMap,dp=new WeakMap;function nC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fw.set(n,t)}).catch(()=>{}),dp.set(e,t),e}function rC(t){if(jd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});jd.set(t,e)}let Bd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iC(t){Bd=t(Bd)}function sC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kh(this),e,...n);return jw.set(r,e.sort?e.sort():[e]),Cr(r)}:tC().includes(t)?function(...e){return t.apply(kh(this),e),Cr(Fw.get(this))}:function(...e){return Cr(t.apply(kh(this),e))}}function oC(t){return typeof t=="function"?sC(t):(t instanceof IDBTransaction&&rC(t),ZR(t,eC())?new Proxy(t,Bd):t)}function Cr(t){if(t instanceof IDBRequest)return nC(t);if(Ph.has(t))return Ph.get(t);const e=oC(t);return e!==t&&(Ph.set(t,e),dp.set(e,t)),e}const kh=t=>dp.get(t);function Bw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Cr(o.result),u.oldVersion,u.newVersion,Cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const aC=["get","getKey","getAll","getAllKeys","count"],lC=["put","add","delete","clear"],Nh=new Map;function N_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nh.get(e))return Nh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=lC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||aC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Nh.set(e,s),s}iC(t=>({...t,get:(e,n,r)=>N_(e,n)||t.get(e,n,r),has:(e,n)=>!!N_(e,n)||t.has(e,n)}));/**
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
 */class uC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zd="@firebase/app",D_="0.10.9";/**
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
 */const Kn=new ec("@firebase/app"),hC="@firebase/app-compat",dC="@firebase/analytics-compat",fC="@firebase/analytics",pC="@firebase/app-check-compat",mC="@firebase/app-check",gC="@firebase/auth",_C="@firebase/auth-compat",yC="@firebase/database",vC="@firebase/database-compat",wC="@firebase/functions",EC="@firebase/functions-compat",TC="@firebase/installations",IC="@firebase/installations-compat",SC="@firebase/messaging",AC="@firebase/messaging-compat",RC="@firebase/performance",CC="@firebase/performance-compat",PC="@firebase/remote-config",kC="@firebase/remote-config-compat",NC="@firebase/storage",DC="@firebase/storage-compat",xC="@firebase/firestore",OC="@firebase/vertexai-preview",bC="@firebase/firestore-compat",LC="firebase",VC="10.13.0";/**
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
 */const $d="[DEFAULT]",MC={[zd]:"fire-core",[hC]:"fire-core-compat",[fC]:"fire-analytics",[dC]:"fire-analytics-compat",[mC]:"fire-app-check",[pC]:"fire-app-check-compat",[gC]:"fire-auth",[_C]:"fire-auth-compat",[yC]:"fire-rtdb",[vC]:"fire-rtdb-compat",[wC]:"fire-fn",[EC]:"fire-fn-compat",[TC]:"fire-iid",[IC]:"fire-iid-compat",[SC]:"fire-fcm",[AC]:"fire-fcm-compat",[RC]:"fire-perf",[CC]:"fire-perf-compat",[PC]:"fire-rc",[kC]:"fire-rc-compat",[NC]:"fire-gcs",[DC]:"fire-gcs-compat",[xC]:"fire-fst",[bC]:"fire-fst-compat",[OC]:"fire-vertex","fire-js":"fire-js",[LC]:"fire-js-all"};/**
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
 */const pu=new Map,UC=new Map,qd=new Map;function x_(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hn(t){const e=t.name;if(qd.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;qd.set(e,t);for(const n of pu.values())x_(n,t);for(const n of UC.values())x_(n,t);return!0}function Ur(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vn(t){return t.settings!==void 0}/**
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
 */const FC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new Ei("app","Firebase",FC);/**
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
 */class jC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ti=VC;function zw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$d,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pr.create("bad-app-name",{appName:String(i)});if(n||(n=Ow()),!n)throw Pr.create("no-options");const s=pu.get(i);if(s){if(ms(n,s.options)&&ms(r,s.config))return s;throw Pr.create("duplicate-app",{appName:i})}const o=new GR(i);for(const u of qd.values())o.addComponent(u);const l=new jC(n,r,o);return pu.set(i,l),l}function tc(t=$d){const e=pu.get(t);if(!e&&t===$d&&Ow())return zw();if(!e)throw Pr.create("no-app",{appName:t});return e}function Dt(t,e,n){var r;let i=(r=MC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(l.join(" "));return}hn(new Zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const BC="firebase-heartbeat-database",zC=1,Xo="firebase-heartbeat-store";let Dh=null;function $w(){return Dh||(Dh=Bw(BC,zC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pr.create("idb-open",{originalErrorMessage:t.message})})),Dh}async function $C(t){try{const n=(await $w()).transaction(Xo),r=await n.objectStore(Xo).get(qw(t));return await n.done,r}catch(e){if(e instanceof en)Kn.warn(e.message);else{const n=Pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function O_(t,e){try{const r=(await $w()).transaction(Xo,"readwrite");await r.objectStore(Xo).put(e,qw(t)),await r.done}catch(n){if(n instanceof en)Kn.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(r.message)}}}function qw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const qC=1024,WC=30*24*60*60*1e3;class HC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n,r;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=b_();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=WC}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Kn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=b_(),{heartbeatsToSend:r,unsentEntries:i}=KC(this._heartbeatsCache.heartbeats),s=fu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Kn.warn(n),""}}}function b_(){return new Date().toISOString().substring(0,10)}function KC(t,e=qC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),L_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),L_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mw()?Uw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $C(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function L_(t){return fu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function QC(t){hn(new Zt("platform-logger",e=>new uC(e),"PRIVATE")),hn(new Zt("heartbeat",e=>new HC(e),"PRIVATE")),Dt(zd,D_,t),Dt(zd,D_,"esm2017"),Dt("fire-js","")}QC("");var XC="firebase",YC="10.13.0";/**
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
 */Dt(XC,YC,"app");const Ww="@firebase/installations",fp="0.6.8";/**
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
 */const Hw=1e4,Kw=`w:${fp}`,Gw="FIS_v2",JC="https://firebaseinstallations.googleapis.com/v1",ZC=60*60*1e3,eP="installations",tP="Installations";/**
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
 */const nP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ci=new Ei(eP,tP,nP);function Qw(t){return t instanceof en&&t.code.includes("request-failed")}/**
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
 */function Xw({projectId:t}){return`${JC}/projects/${t}/installations`}function Yw(t){return{token:t.token,requestStatus:2,expiresIn:iP(t.expiresIn),creationTime:Date.now()}}async function Jw(t,e){const r=(await e.json()).error;return ci.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Zw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function rP(t,{refreshToken:e}){const n=Zw(t);return n.append("Authorization",sP(e)),n}async function eE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function iP(t){return Number(t.replace("s","000"))}function sP(t){return`${Gw} ${t}`}/**
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
 */async function oP({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Xw(t),i=Zw(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Gw,appId:t.appId,sdkVersion:Kw},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await eE(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Yw(c.authToken)}}else throw await Jw("Create Installation",u)}/**
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
 */function tE(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function aP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const lP=/^[cdef][\w-]{21}$/,Wd="";function uP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=cP(t);return lP.test(n)?n:Wd}catch{return Wd}}function cP(t){return aP(t).substr(0,22)}/**
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
 */function nc(t){return`${t.appName}!${t.appId}`}/**
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
 */const nE=new Map;function rE(t,e){const n=nc(t);iE(n,e),hP(n,e)}function iE(t,e){const n=nE.get(t);if(n)for(const r of n)r(e)}function hP(t,e){const n=dP();n&&n.postMessage({key:t,fid:e}),fP()}let Yr=null;function dP(){return!Yr&&"BroadcastChannel"in self&&(Yr=new BroadcastChannel("[Firebase] FID Change"),Yr.onmessage=t=>{iE(t.data.key,t.data.fid)}),Yr}function fP(){nE.size===0&&Yr&&(Yr.close(),Yr=null)}/**
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
 */const pP="firebase-installations-database",mP=1,hi="firebase-installations-store";let xh=null;function pp(){return xh||(xh=Bw(pP,mP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hi)}}})),xh}async function mu(t,e){const n=nc(t),i=(await pp()).transaction(hi,"readwrite"),s=i.objectStore(hi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&rE(t,e.fid),e}async function sE(t){const e=nc(t),r=(await pp()).transaction(hi,"readwrite");await r.objectStore(hi).delete(e),await r.done}async function rc(t,e){const n=nc(t),i=(await pp()).transaction(hi,"readwrite"),s=i.objectStore(hi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&rE(t,l.fid),l}/**
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
 */async function mp(t){let e;const n=await rc(t.appConfig,r=>{const i=gP(r),s=_P(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Wd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function gP(t){const e=t||{fid:uP(),registrationStatus:0};return oE(e)}function _P(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ci.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=yP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vP(t)}:{installationEntry:e}}async function yP(t,e){try{const n=await oP(t,e);return mu(t.appConfig,n)}catch(n){throw Qw(n)&&n.customData.serverCode===409?await sE(t.appConfig):await mu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function vP(t){let e=await V_(t.appConfig);for(;e.registrationStatus===1;)await tE(100),e=await V_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await mp(t);return r||n}return e}function V_(t){return rc(t,e=>{if(!e)throw ci.create("installation-not-found");return oE(e)})}function oE(t){return wP(t)?{fid:t.fid,registrationStatus:0}:t}function wP(t){return t.registrationStatus===1&&t.registrationTime+Hw<Date.now()}/**
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
 */async function EP({appConfig:t,heartbeatServiceProvider:e},n){const r=TP(t,n),i=rP(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:Kw,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await eE(()=>fetch(r,l));if(u.ok){const c=await u.json();return Yw(c)}else throw await Jw("Generate Auth Token",u)}function TP(t,{fid:e}){return`${Xw(t)}/${e}/authTokens:generate`}/**
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
 */async function gp(t,e=!1){let n;const r=await rc(t.appConfig,s=>{if(!aE(s))throw ci.create("not-registered");const o=s.authToken;if(!e&&AP(o))return s;if(o.requestStatus===1)return n=IP(t,e),s;{if(!navigator.onLine)throw ci.create("app-offline");const l=CP(s);return n=SP(t,l),l}});return n?await n:r.authToken}async function IP(t,e){let n=await M_(t.appConfig);for(;n.authToken.requestStatus===1;)await tE(100),n=await M_(t.appConfig);const r=n.authToken;return r.requestStatus===0?gp(t,e):r}function M_(t){return rc(t,e=>{if(!aE(e))throw ci.create("not-registered");const n=e.authToken;return PP(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function SP(t,e){try{const n=await EP(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await mu(t.appConfig,r),n}catch(n){if(Qw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await sE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await mu(t.appConfig,r)}throw n}}function aE(t){return t!==void 0&&t.registrationStatus===2}function AP(t){return t.requestStatus===2&&!RP(t)}function RP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ZC}function CP(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function PP(t){return t.requestStatus===1&&t.requestTime+Hw<Date.now()}/**
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
 */async function kP(t){const e=t,{installationEntry:n,registrationPromise:r}=await mp(e);return r?r.catch(console.error):gp(e).catch(console.error),n.fid}/**
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
 */async function NP(t,e=!1){const n=t;return await DP(n),(await gp(n,e)).token}async function DP(t){const{registrationPromise:e}=await mp(t);e&&await e}/**
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
 */function xP(t){if(!t||!t.options)throw Oh("App Configuration");if(!t.name)throw Oh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Oh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Oh(t){return ci.create("missing-app-config-values",{valueName:t})}/**
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
 */const lE="installations",OP="installations-internal",bP=t=>{const e=t.getProvider("app").getImmediate(),n=xP(e),r=Ur(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},LP=t=>{const e=t.getProvider("app").getImmediate(),n=Ur(e,lE).getImmediate();return{getId:()=>kP(n),getToken:i=>NP(n,i)}};function VP(){hn(new Zt(lE,bP,"PUBLIC")),hn(new Zt(OP,LP,"PRIVATE"))}VP();Dt(Ww,fp);Dt(Ww,fp,"esm2017");/**
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
 */const gu="analytics",MP="firebase_id",UP="origin",FP=60*1e3,jP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_p="https://www.googletagmanager.com/gtag/js";/**
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
 */const xt=new ec("@firebase/analytics");/**
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
 */const BP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},zt=new Ei("analytics","Analytics",BP);/**
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
 */function zP(t){if(!t.startsWith(_p)){const e=zt.create("invalid-gtag-resource",{gtagURL:t});return xt.warn(e.message),""}return t}function uE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function $P(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function qP(t,e){const n=$P("firebase-js-sdk-policy",{createScriptURL:zP}),r=document.createElement("script"),i=`${_p}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function WP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function HP(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await uE(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){xt.error(l)}t("config",i,s)}async function KP(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await uE(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){xt.error(s)}}function GP(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await KP(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await HP(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){xt.error(l)}}return i}function QP(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=GP(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function XP(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(_p)&&n.src.includes(t))return n;return null}/**
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
 */const YP=30,JP=1e3;class ZP{constructor(e={},n=JP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const cE=new ZP;function ek(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function tk(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:ek(r)},s=jP.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw zt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function nk(t,e=cE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw zt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw zt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new sk;return setTimeout(async()=>{l.abort()},FP),hE({appId:r,apiKey:i,measurementId:s},o,l,e)}async function hE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=cE){var s;const{appId:o,measurementId:l}=t;try{await rk(r,e)}catch(u){if(l)return xt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await tk(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!ik(c)){if(i.deleteThrottleMetadata(o),l)return xt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?C_(n,i.intervalMillis,YP):C_(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),xt.debug(`Calling attemptFetch again in ${d} millis`),hE(t,p,r,i)}}function rk(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ik(t){if(!(t instanceof en)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class sk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ok(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function ak(){if(Mw())try{await Uw()}catch(t){return xt.warn(zt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return xt.warn(zt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lk(t,e,n,r,i,s,o){var l;const u=nk(t);u.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&xt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>xt.error(w)),e.push(u);const c=ak().then(w=>{if(w)return r.getId()}),[d,p]=await Promise.all([u,c]);XP(s)||qP(s,d.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[UP]="firebase",m.update=!0,p!=null&&(m[MP]=p),i("config",d.measurementId,m),d.measurementId}/**
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
 */class uk{constructor(e){this.app=e}_delete(){return delete Ao[this.app.options.appId],Promise.resolve()}}let Ao={},U_=[];const F_={};let bh="dataLayer",ck="gtag",j_,dE,B_=!1;function hk(){const t=[];if(Vw()&&t.push("This is a browser extension environment."),OR()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=zt.create("invalid-analytics-context",{errorInfo:e});xt.warn(n.message)}}function dk(t,e,n){hk();const r=t.options.appId;if(!r)throw zt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)xt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw zt.create("no-api-key");if(Ao[r]!=null)throw zt.create("already-exists",{id:r});if(!B_){WP(bh);const{wrappedGtag:s,gtagCore:o}=QP(Ao,U_,F_,bh,ck);dE=s,j_=o,B_=!0}return Ao[r]=lk(t,U_,F_,e,j_,bh,n),new uk(t)}function fk(t=tc()){t=ve(t);const e=Ur(t,gu);return e.isInitialized()?e.getImmediate():pk(t)}function pk(t,e={}){const n=Ur(t,gu);if(n.isInitialized()){const i=n.getImmediate();if(ms(e,n.getOptions()))return i;throw zt.create("already-initialized")}return n.initialize({options:e})}function mk(t,e,n,r){t=ve(t),ok(dE,Ao[t.app.options.appId],e,n,r).catch(i=>xt.error(i))}const z_="@firebase/analytics",$_="0.10.7";function gk(){hn(new Zt(gu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return dk(r,i,n)},"PUBLIC")),hn(new Zt("analytics-internal",t,"PRIVATE")),Dt(z_,$_),Dt(z_,$_,"esm2017");function t(e){try{const n=e.getProvider(gu).getImmediate();return{logEvent:(r,i,s)=>mk(n,r,i,s)}}catch(n){throw zt.create("interop-component-reg-failed",{reason:n})}}}gk();function yp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _k=fE,pE=new Ei("auth","Firebase",fE());/**
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
 */const _u=new ec("@firebase/auth");function yk(t,...e){_u.logLevel<=re.WARN&&_u.warn(`Auth (${Ti}): ${t}`,...e)}function Dl(t,...e){_u.logLevel<=re.ERROR&&_u.error(`Auth (${Ti}): ${t}`,...e)}/**
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
 */function dn(t,...e){throw vp(t,...e)}function In(t,...e){return vp(t,...e)}function mE(t,e,n){const r=Object.assign(Object.assign({},_k()),{[e]:n});return new Ei("auth","Firebase",r).create(e,{appName:t.name})}function Fn(t){return mE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pE.create(t,...e)}function Q(t,e,...n){if(!t)throw vp(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dl(e),new Error(e)}function Gn(t,e){t||Ln(e)}/**
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
 */function Hd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vk(){return q_()==="http:"||q_()==="https:"}function q_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function wk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vk()||Vw()||"connection"in navigator)?navigator.onLine:!0}function Ek(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ma{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gn(n>e,"Short delay should be less than long delay!"),this.isMobile=PR()||NR()}get(){return wk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wp(t,e){Gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Tk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ik=new ma(3e4,6e4);function Jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zn(t,e,n,r,i={}){return _E(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=pa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),gE.fetch()(yE(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function _E(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Tk),e);try{const i=new Ak(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ul(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ul(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ul(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ul(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw mE(t,d,c);dn(t,d)}}catch(i){if(i instanceof en)throw i;dn(t,"network-request-failed",{message:String(i)})}}async function ga(t,e,n,r,i={}){const s=await Zn(t,e,n,r,i);return"mfaPendingCredential"in s&&dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function yE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wp(t.config,i):`${t.config.apiScheme}://${i}`}function Sk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ak{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(In(this.auth,"network-request-failed")),Ik.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ul(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=In(t,e,r);return i.customData._tokenResponse=n,i}function W_(t){return t!==void 0&&t.enterprise!==void 0}class Rk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Sk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ck(t,e){return Zn(t,"GET","/v2/recaptchaConfig",Jn(t,e))}/**
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
 */async function Pk(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function vE(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kk(t,e=!1){const n=ve(t),r=await n.getIdToken(e),i=Ep(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ro(Lh(i.auth_time)),issuedAtTime:Ro(Lh(i.iat)),expirationTime:Ro(Lh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Lh(t){return Number(t)*1e3}function Ep(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Nw(n);return i?JSON.parse(i):(Dl("Failed to decode base64 JWT payload"),null)}catch(i){return Dl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function H_(t){const e=Ep(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof en&&Nk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Nk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Dk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Kd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ro(this.lastLoginAt),this.creationTime=Ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Yo(t,vE(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?wE(s.providerUserInfo):[],l=Ok(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Kd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function xk(t){const e=ve(t);await yu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ok(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function wE(t){return t.map(e=>{var{providerId:n}=e,r=yp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function bk(t,e){const n=await _E(t,{},async()=>{const r=pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=yE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",gE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Lk(t,e){return Zn(t,"POST","/v2/accounts:revokeToken",Jn(t,e))}/**
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
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):H_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=H_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new is;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
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
 */function ir(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=yp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Kd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Yo(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kk(this,e)}reload(){return xk(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vn(this.auth.app))return Promise.reject(Fn(this.auth));const e=await this.getIdToken();return await Yo(this,Pk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:N,isAnonymous:b,providerData:L,stsTokenManager:I}=n;Q(v&&I,e,"internal-error");const g=is.fromJSON(this.name,I);Q(typeof v=="string",e,"internal-error"),ir(p,e.name),ir(m,e.name),Q(typeof N=="boolean",e,"internal-error"),Q(typeof b=="boolean",e,"internal-error"),ir(w,e.name),ir(S,e.name),ir(P,e.name),ir(C,e.name),ir(E,e.name),ir(_,e.name);const T=new Vn({uid:v,auth:e,email:m,emailVerified:N,displayName:p,isAnonymous:b,photoURL:S,phoneNumber:w,tenantId:P,stsTokenManager:g,createdAt:E,lastLoginAt:_});return L&&Array.isArray(L)&&(T.providerData=L.map(A=>Object.assign({},A))),C&&(T._redirectEventId=C),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new is;i.updateFromServerResponse(n);const s=new Vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?wE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new is;l.updateFromIdToken(r);const u=new Vn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Kd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const K_=new Map;function Mn(t){Gn(t instanceof Function,"Expected a class definition");let e=K_.get(t);return e?(Gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,K_.set(t,e),e)}/**
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
 */class EE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}EE.type="NONE";const G_=EE;/**
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
 */function xl(t,e,n){return`firebase:${t}:${e}:${n}`}class ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xl(this.userKey,i.apiKey,s),this.fullPersistenceKey=xl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ss(Mn(G_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Mn(G_);const o=xl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Vn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ss(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ss(s,e,r))}}/**
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
 */function Q_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(AE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(TE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CE(e))return"Blackberry";if(PE(e))return"Webos";if(IE(e))return"Safari";if((e.includes("chrome/")||SE(e))&&!e.includes("edge/"))return"Chrome";if(RE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function TE(t=ft()){return/firefox\//i.test(t)}function IE(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function SE(t=ft()){return/crios\//i.test(t)}function AE(t=ft()){return/iemobile/i.test(t)}function RE(t=ft()){return/android/i.test(t)}function CE(t=ft()){return/blackberry/i.test(t)}function PE(t=ft()){return/webos/i.test(t)}function Tp(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Vk(t=ft()){var e;return Tp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mk(){return DR()&&document.documentMode===10}function kE(t=ft()){return Tp(t)||RE(t)||PE(t)||CE(t)||/windows phone/i.test(t)||AE(t)}/**
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
 */function NE(t,e=[]){let n;switch(t){case"Browser":n=Q_(ft());break;case"Worker":n=`${Q_(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ti}/${r}`}/**
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
 */class Uk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Fk(t,e={}){return Zn(t,"GET","/v2/passwordPolicy",Jn(t,e))}/**
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
 */const jk=6;class Bk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:jk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class zk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new X_(this),this.idTokenSubscription=new X_(this),this.beforeStateQueue=new Uk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vE(this,{idToken:e}),r=await Vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(vn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ek()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vn(this.app))return Promise.reject(Fn(this));const n=e?ve(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vn(this.app)?Promise.reject(Fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vn(this.app)?Promise.reject(Fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Fk(this),n=new Bk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Lk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=NE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fr(t){return ve(t)}class X_{constructor(e){this.auth=e,this.observer=null,this.addObserver=UR(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $k(t){ic=t}function DE(t){return ic.loadJS(t)}function qk(){return ic.recaptchaEnterpriseScript}function Wk(){return ic.gapiScript}function Hk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Kk="recaptcha-enterprise",Gk="NO_RECAPTCHA";class Qk{constructor(e){this.type=Kk,this.auth=Fr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Ck(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Rk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;W_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Gk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&W_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=qk();u.length!==0&&(u+=l),DE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Y_(t,e,n,r=!1){const i=new Qk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function vu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Y_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Y_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function Xk(t,e){const n=Ur(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ms(s,e??{}))return i;dn(i,"already-initialized")}return n.initialize({options:e})}function Yk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Jk(t,e,n){const r=Fr(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=xE(e),{host:o,port:l}=Zk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),eN()}function xE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zk(t){const e=xE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:J_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:J_(o)}}}function J_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ip{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}async function tN(t,e){return Zn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function nN(t,e){return ga(t,"POST","/v1/accounts:signInWithPassword",Jn(t,e))}async function rN(t,e){return Zn(t,"POST","/v1/accounts:sendOobCode",Jn(t,e))}async function iN(t,e){return rN(t,e)}/**
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
 */async function sN(t,e){return ga(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}async function oN(t,e){return ga(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}/**
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
 */class Jo extends Ip{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Jo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Jo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vu(e,n,"signInWithPassword",nN);case"emailLink":return sN(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vu(e,r,"signUpPassword",tN);case"emailLink":return oN(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function os(t,e){return ga(t,"POST","/v1/accounts:signInWithIdp",Jn(t,e))}/**
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
 */const aN="http://localhost";class di extends Ip{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new di(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=yp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new di(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return os(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,os(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,os(e,n)}buildRequest(){const e={requestUri:aN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pa(n)}return e}}/**
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
 */function lN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uN(t){const e=uo(co(t)).link,n=e?uo(co(e)).deep_link_id:null,r=uo(co(t)).deep_link_id;return(r?uo(co(r)).link:null)||r||n||e||t}class Sp{constructor(e){var n,r,i,s,o,l;const u=uo(co(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=lN((i=u.mode)!==null&&i!==void 0?i:null);Q(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=uN(e);try{return new Sp(n)}catch{return null}}}/**
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
 */class Cs{constructor(){this.providerId=Cs.PROVIDER_ID}static credential(e,n){return Jo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sp.parseLink(n);return Q(r,"argument-error"),Jo._fromEmailAndCode(e,r.code,r.tenantId)}}Cs.PROVIDER_ID="password";Cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class OE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _a extends OE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ur extends _a{constructor(){super("facebook.com")}static credential(e){return di._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
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
 */class cr extends _a{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return di._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
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
 */class hr extends _a{constructor(){super("github.com")}static credential(e){return di._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
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
 */class dr extends _a{constructor(){super("twitter.com")}static credential(e,n){return di._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
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
 */async function cN(t,e){return ga(t,"POST","/v1/accounts:signUp",Jn(t,e))}/**
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
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vn._fromIdTokenResponse(e,r,i),o=Z_(r);return new fi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Z_(r);return new fi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Z_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class wu extends en{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wu(e,n,r,i)}}function bE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wu._fromErrorAndOperation(t,s,e,r):s})}async function hN(t,e,n=!1){const r=await Yo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fi._forOperation(t,"link",r)}/**
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
 */async function dN(t,e,n=!1){const{auth:r}=t;if(vn(r.app))return Promise.reject(Fn(r));const i="reauthenticate";try{const s=await Yo(t,bE(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=Ep(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),fi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),s}}/**
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
 */async function LE(t,e,n=!1){if(vn(t.app))return Promise.reject(Fn(t));const r="signIn",i=await bE(t,r,e),s=await fi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function fN(t,e){return LE(Fr(t),e)}/**
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
 */async function VE(t){const e=Fr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pN(t,e,n){const r=Fr(t);await vu(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",iN)}async function mN(t,e,n){if(vn(t.app))return Promise.reject(Fn(t));const r=Fr(t),o=await vu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cN).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&VE(t),u}),l=await fi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function gN(t,e,n){return vn(t.app)?Promise.reject(Fn(t)):fN(ve(t),Cs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&VE(t),r})}function _N(t,e,n,r){return ve(t).onIdTokenChanged(e,n,r)}function yN(t,e,n){return ve(t).beforeAuthStateChanged(e,n)}function ME(t,e,n,r){return ve(t).onAuthStateChanged(e,n,r)}function vN(t){return ve(t).signOut()}const Eu="__sak";/**
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
 */class UE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Eu,"1"),this.storage.removeItem(Eu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const wN=1e3,EN=10;class FE extends UE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Mk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,EN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}FE.type="LOCAL";const TN=FE;/**
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
 */class jE extends UE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jE.type="SESSION";const BE=jE;/**
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
 */function IN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await IN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sc.receivers=[];/**
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
 */function Ap(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class SN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Ap("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Sn(){return window}function AN(t){Sn().location.href=t}/**
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
 */function zE(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function RN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function PN(){return zE()?self:null}/**
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
 */const $E="firebaseLocalStorageDb",kN=1,Tu="firebaseLocalStorage",qE="fbase_key";class ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oc(t,e){return t.transaction([Tu],e?"readwrite":"readonly").objectStore(Tu)}function NN(){const t=indexedDB.deleteDatabase($E);return new ya(t).toPromise()}function Gd(){const t=indexedDB.open($E,kN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tu,{keyPath:qE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tu)?e(r):(r.close(),await NN(),e(await Gd()))})})}async function ey(t,e,n){const r=oc(t,!0).put({[qE]:e,value:n});return new ya(r).toPromise()}async function DN(t,e){const n=oc(t,!1).get(e),r=await new ya(n).toPromise();return r===void 0?null:r.value}function ty(t,e){const n=oc(t,!0).delete(e);return new ya(n).toPromise()}const xN=800,ON=3;class WE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ON)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sc._getInstance(PN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await RN(),!this.activeServiceWorker)return;this.sender=new SN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gd();return await ey(e,Eu,"1"),await ty(e,Eu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ey(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ty(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=oc(i,!1).getAll();return new ya(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}WE.type="LOCAL";const bN=WE;new ma(3e4,6e4);/**
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
 */function LN(t,e){return e?Mn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rp extends Ip{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VN(t){return LE(t.auth,new Rp(t),t.bypassAuthState)}function MN(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),dN(n,new Rp(t),t.bypassAuthState)}async function UN(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),hN(n,new Rp(t),t.bypassAuthState)}/**
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
 */class HE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VN;case"linkViaPopup":case"linkViaRedirect":return UN;case"reauthViaPopup":case"reauthViaRedirect":return MN;default:dn(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const FN=new ma(2e3,1e4);class Yi extends HE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Yi.currentPopupAction&&Yi.currentPopupAction.cancel(),Yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=Ap();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(In(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(In(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(In(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FN.get())};e()}}Yi.currentPopupAction=null;/**
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
 */const jN="pendingRedirect",Ol=new Map;class BN extends HE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ol.get(this.auth._key());if(!e){try{const r=await zN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ol.set(this.auth._key(),e)}return this.bypassAuthState||Ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zN(t,e){const n=WN(e),r=qN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $N(t,e){Ol.set(t._key(),e)}function qN(t){return Mn(t._redirectPersistence)}function WN(t){return xl(jN,t.config.apiKey,t.name)}async function HN(t,e,n=!1){if(vn(t.app))return Promise.reject(Fn(t));const r=Fr(t),i=LN(r,e),o=await new BN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const KN=10*60*1e3;class GN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!KE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(In(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KN&&this.cachedEventUids.clear(),this.cachedEventUids.has(ny(e))}saveEventToCache(e){this.cachedEventUids.add(ny(e)),this.lastProcessedEventTime=Date.now()}}function ny(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function KE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return KE(t);default:return!1}}/**
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
 */async function XN(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
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
 */const YN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JN=/^https?/;async function ZN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XN(t);for(const n of e)try{if(eD(n))return}catch{}dn(t,"unauthorized-domain")}function eD(t){const e=Hd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!JN.test(n))return!1;if(YN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const tD=new ma(3e4,6e4);function ry(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nD(t){return new Promise((e,n)=>{var r,i,s;function o(){ry(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ry(),n(In(t,"network-request-failed"))},timeout:tD.get()})}if(!((i=(r=Sn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Sn().gapi)===null||s===void 0)&&s.load)o();else{const l=Hk("iframefcb");return Sn()[l]=()=>{gapi.load?o():n(In(t,"network-request-failed"))},DE(`${Wk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw bl=null,e})}let bl=null;function rD(t){return bl=bl||nD(t),bl}/**
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
 */const iD=new ma(5e3,15e3),sD="__/auth/iframe",oD="emulator/auth/iframe",aD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uD(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wp(e,oD):`https://${t.config.authDomain}/${sD}`,r={apiKey:e.apiKey,appName:t.name,v:Ti},i=lD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${pa(r).slice(1)}`}async function cD(t){const e=await rD(t),n=Sn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:uD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=In(t,"network-request-failed"),l=Sn().setTimeout(()=>{s(o)},iD.get());function u(){Sn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const hD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dD=500,fD=600,pD="_blank",mD="http://localhost";class iy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gD(t,e,n,r=dD,i=fD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},hD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ft().toLowerCase();n&&(l=SE(c)?pD:n),TE(c)&&(e=e||mD,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[w,S])=>`${m}${w}=${S},`,"");if(Vk(c)&&l!=="_self")return _D(e||"",l),new iy(null);const p=window.open(e||"",l,d);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new iy(p)}function _D(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yD="__/auth/handler",vD="emulator/auth/handler",wD=encodeURIComponent("fac");async function sy(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ti,eventId:i};if(e instanceof OE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",MR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof _a){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${wD}=${encodeURIComponent(u)}`:"";return`${ED(t)}?${pa(l).slice(1)}${c}`}function ED({config:t}){return t.emulator?wp(t,vD):`https://${t.authDomain}/${yD}`}/**
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
 */const Vh="webStorageSupport";class TD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BE,this._completeRedirectFn=HN,this._overrideRedirectResult=$N}async _openPopup(e,n,r,i){var s;Gn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await sy(e,n,r,Hd(),i);return gD(e,o,Ap())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await sy(e,n,r,Hd(),i);return AN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Gn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cD(e),r=new GN(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vh,{type:Vh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vh];o!==void 0&&n(!!o),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kE()||IE()||Tp()}}const ID=TD;var oy="@firebase/auth",ay="1.7.7";/**
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
 */class SD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function AD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RD(t){hn(new Zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:NE(t)},c=new zk(r,i,s,u);return Yk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hn(new Zt("auth-internal",e=>{const n=Fr(e.getProvider("auth").getImmediate());return(r=>new SD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(oy,ay,AD(t)),Dt(oy,ay,"esm2017")}/**
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
 */const CD=5*60,PD=bw("authIdTokenMaxAge")||CD;let ly=null;const kD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>PD)return;const i=n==null?void 0:n.token;ly!==i&&(ly=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ND(t=tc()){const e=Ur(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xk(t,{popupRedirectResolver:ID,persistence:[bN,TN,BE]}),r=bw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=kD(s.toString());yN(n,o,()=>o(n.currentUser)),_N(n,l=>o(l))}}const i=Dw("auth");return i&&Jk(n,`http://${i}`),n}function DD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}$k({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=In("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",DD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RD("Browser");var uy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ti,GE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function T(){}T.prototype=g.prototype,I.D=g.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(A,k,D){for(var R=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)R[ke-2]=arguments[ke];return g.prototype[k].apply(A,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,g,T){T||(T=0);var A=Array(16);if(typeof g=="string")for(var k=0;16>k;++k)A[k]=g.charCodeAt(T++)|g.charCodeAt(T++)<<8|g.charCodeAt(T++)<<16|g.charCodeAt(T++)<<24;else for(k=0;16>k;++k)A[k]=g[T++]|g[T++]<<8|g[T++]<<16|g[T++]<<24;g=I.g[0],T=I.g[1],k=I.g[2];var D=I.g[3],R=g+(D^T&(k^D))+A[0]+3614090360&4294967295;g=T+(R<<7&4294967295|R>>>25),R=D+(k^g&(T^k))+A[1]+3905402710&4294967295,D=g+(R<<12&4294967295|R>>>20),R=k+(T^D&(g^T))+A[2]+606105819&4294967295,k=D+(R<<17&4294967295|R>>>15),R=T+(g^k&(D^g))+A[3]+3250441966&4294967295,T=k+(R<<22&4294967295|R>>>10),R=g+(D^T&(k^D))+A[4]+4118548399&4294967295,g=T+(R<<7&4294967295|R>>>25),R=D+(k^g&(T^k))+A[5]+1200080426&4294967295,D=g+(R<<12&4294967295|R>>>20),R=k+(T^D&(g^T))+A[6]+2821735955&4294967295,k=D+(R<<17&4294967295|R>>>15),R=T+(g^k&(D^g))+A[7]+4249261313&4294967295,T=k+(R<<22&4294967295|R>>>10),R=g+(D^T&(k^D))+A[8]+1770035416&4294967295,g=T+(R<<7&4294967295|R>>>25),R=D+(k^g&(T^k))+A[9]+2336552879&4294967295,D=g+(R<<12&4294967295|R>>>20),R=k+(T^D&(g^T))+A[10]+4294925233&4294967295,k=D+(R<<17&4294967295|R>>>15),R=T+(g^k&(D^g))+A[11]+2304563134&4294967295,T=k+(R<<22&4294967295|R>>>10),R=g+(D^T&(k^D))+A[12]+1804603682&4294967295,g=T+(R<<7&4294967295|R>>>25),R=D+(k^g&(T^k))+A[13]+4254626195&4294967295,D=g+(R<<12&4294967295|R>>>20),R=k+(T^D&(g^T))+A[14]+2792965006&4294967295,k=D+(R<<17&4294967295|R>>>15),R=T+(g^k&(D^g))+A[15]+1236535329&4294967295,T=k+(R<<22&4294967295|R>>>10),R=g+(k^D&(T^k))+A[1]+4129170786&4294967295,g=T+(R<<5&4294967295|R>>>27),R=D+(T^k&(g^T))+A[6]+3225465664&4294967295,D=g+(R<<9&4294967295|R>>>23),R=k+(g^T&(D^g))+A[11]+643717713&4294967295,k=D+(R<<14&4294967295|R>>>18),R=T+(D^g&(k^D))+A[0]+3921069994&4294967295,T=k+(R<<20&4294967295|R>>>12),R=g+(k^D&(T^k))+A[5]+3593408605&4294967295,g=T+(R<<5&4294967295|R>>>27),R=D+(T^k&(g^T))+A[10]+38016083&4294967295,D=g+(R<<9&4294967295|R>>>23),R=k+(g^T&(D^g))+A[15]+3634488961&4294967295,k=D+(R<<14&4294967295|R>>>18),R=T+(D^g&(k^D))+A[4]+3889429448&4294967295,T=k+(R<<20&4294967295|R>>>12),R=g+(k^D&(T^k))+A[9]+568446438&4294967295,g=T+(R<<5&4294967295|R>>>27),R=D+(T^k&(g^T))+A[14]+3275163606&4294967295,D=g+(R<<9&4294967295|R>>>23),R=k+(g^T&(D^g))+A[3]+4107603335&4294967295,k=D+(R<<14&4294967295|R>>>18),R=T+(D^g&(k^D))+A[8]+1163531501&4294967295,T=k+(R<<20&4294967295|R>>>12),R=g+(k^D&(T^k))+A[13]+2850285829&4294967295,g=T+(R<<5&4294967295|R>>>27),R=D+(T^k&(g^T))+A[2]+4243563512&4294967295,D=g+(R<<9&4294967295|R>>>23),R=k+(g^T&(D^g))+A[7]+1735328473&4294967295,k=D+(R<<14&4294967295|R>>>18),R=T+(D^g&(k^D))+A[12]+2368359562&4294967295,T=k+(R<<20&4294967295|R>>>12),R=g+(T^k^D)+A[5]+4294588738&4294967295,g=T+(R<<4&4294967295|R>>>28),R=D+(g^T^k)+A[8]+2272392833&4294967295,D=g+(R<<11&4294967295|R>>>21),R=k+(D^g^T)+A[11]+1839030562&4294967295,k=D+(R<<16&4294967295|R>>>16),R=T+(k^D^g)+A[14]+4259657740&4294967295,T=k+(R<<23&4294967295|R>>>9),R=g+(T^k^D)+A[1]+2763975236&4294967295,g=T+(R<<4&4294967295|R>>>28),R=D+(g^T^k)+A[4]+1272893353&4294967295,D=g+(R<<11&4294967295|R>>>21),R=k+(D^g^T)+A[7]+4139469664&4294967295,k=D+(R<<16&4294967295|R>>>16),R=T+(k^D^g)+A[10]+3200236656&4294967295,T=k+(R<<23&4294967295|R>>>9),R=g+(T^k^D)+A[13]+681279174&4294967295,g=T+(R<<4&4294967295|R>>>28),R=D+(g^T^k)+A[0]+3936430074&4294967295,D=g+(R<<11&4294967295|R>>>21),R=k+(D^g^T)+A[3]+3572445317&4294967295,k=D+(R<<16&4294967295|R>>>16),R=T+(k^D^g)+A[6]+76029189&4294967295,T=k+(R<<23&4294967295|R>>>9),R=g+(T^k^D)+A[9]+3654602809&4294967295,g=T+(R<<4&4294967295|R>>>28),R=D+(g^T^k)+A[12]+3873151461&4294967295,D=g+(R<<11&4294967295|R>>>21),R=k+(D^g^T)+A[15]+530742520&4294967295,k=D+(R<<16&4294967295|R>>>16),R=T+(k^D^g)+A[2]+3299628645&4294967295,T=k+(R<<23&4294967295|R>>>9),R=g+(k^(T|~D))+A[0]+4096336452&4294967295,g=T+(R<<6&4294967295|R>>>26),R=D+(T^(g|~k))+A[7]+1126891415&4294967295,D=g+(R<<10&4294967295|R>>>22),R=k+(g^(D|~T))+A[14]+2878612391&4294967295,k=D+(R<<15&4294967295|R>>>17),R=T+(D^(k|~g))+A[5]+4237533241&4294967295,T=k+(R<<21&4294967295|R>>>11),R=g+(k^(T|~D))+A[12]+1700485571&4294967295,g=T+(R<<6&4294967295|R>>>26),R=D+(T^(g|~k))+A[3]+2399980690&4294967295,D=g+(R<<10&4294967295|R>>>22),R=k+(g^(D|~T))+A[10]+4293915773&4294967295,k=D+(R<<15&4294967295|R>>>17),R=T+(D^(k|~g))+A[1]+2240044497&4294967295,T=k+(R<<21&4294967295|R>>>11),R=g+(k^(T|~D))+A[8]+1873313359&4294967295,g=T+(R<<6&4294967295|R>>>26),R=D+(T^(g|~k))+A[15]+4264355552&4294967295,D=g+(R<<10&4294967295|R>>>22),R=k+(g^(D|~T))+A[6]+2734768916&4294967295,k=D+(R<<15&4294967295|R>>>17),R=T+(D^(k|~g))+A[13]+1309151649&4294967295,T=k+(R<<21&4294967295|R>>>11),R=g+(k^(T|~D))+A[4]+4149444226&4294967295,g=T+(R<<6&4294967295|R>>>26),R=D+(T^(g|~k))+A[11]+3174756917&4294967295,D=g+(R<<10&4294967295|R>>>22),R=k+(g^(D|~T))+A[2]+718787259&4294967295,k=D+(R<<15&4294967295|R>>>17),R=T+(D^(k|~g))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,I.g[2]=I.g[2]+k&4294967295,I.g[3]=I.g[3]+D&4294967295}r.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var T=g-this.blockSize,A=this.B,k=this.h,D=0;D<g;){if(k==0)for(;D<=T;)i(this,I,D),D+=this.blockSize;if(typeof I=="string"){for(;D<g;)if(A[k++]=I.charCodeAt(D++),k==this.blockSize){i(this,A),k=0;break}}else for(;D<g;)if(A[k++]=I[D++],k==this.blockSize){i(this,A),k=0;break}}this.h=k,this.o+=g},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var T=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=T&255,T/=256;for(this.u(I),I=Array(16),g=T=0;4>g;++g)for(var A=0;32>A;A+=8)I[T++]=this.g[g]>>>A&255;return I};function s(I,g){var T=l;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=g(I)}function o(I,g){this.h=g;for(var T=[],A=!0,k=I.length-1;0<=k;k--){var D=I[k]|0;A&&D==g||(T[k]=D,A=!1)}this.g=T}var l={};function u(I){return-128<=I&&128>I?s(I,function(g){return new o([g|0],0>g?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return C(c(-I));for(var g=[],T=1,A=0;I>=T;A++)g[A]=I/T|0,T*=4294967296;return new o(g,0)}function d(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return C(d(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(g,8)),A=p,k=0;k<I.length;k+=8){var D=Math.min(8,I.length-k),R=parseInt(I.substring(k,k+D),g);8>D?(D=c(Math.pow(g,D)),A=A.j(D).add(c(R))):(A=A.j(T),A=A.add(c(R)))}return A}var p=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-C(this).m();for(var I=0,g=1,T=0;T<this.g.length;T++){var A=this.i(T);I+=(0<=A?A:4294967296+A)*g,g*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(P(this))return"-"+C(this).toString(I);for(var g=c(Math.pow(I,6)),T=this,A="";;){var k=N(T,g).g;T=E(T,k.j(g));var D=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=k,S(T))return D+A;for(;6>D.length;)D="0"+D;A=D+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=E(this,I),P(I)?-1:S(I)?0:1};function C(I){for(var g=I.g.length,T=[],A=0;A<g;A++)T[A]=~I.g[A];return new o(T,~I.h).add(m)}t.abs=function(){return P(this)?C(this):this},t.add=function(I){for(var g=Math.max(this.g.length,I.g.length),T=[],A=0,k=0;k<=g;k++){var D=A+(this.i(k)&65535)+(I.i(k)&65535),R=(D>>>16)+(this.i(k)>>>16)+(I.i(k)>>>16);A=R>>>16,D&=65535,R&=65535,T[k]=R<<16|D}return new o(T,T[T.length-1]&-2147483648?-1:0)};function E(I,g){return I.add(C(g))}t.j=function(I){if(S(this)||S(I))return p;if(P(this))return P(I)?C(this).j(C(I)):C(C(this).j(I));if(P(I))return C(this.j(C(I)));if(0>this.l(w)&&0>I.l(w))return c(this.m()*I.m());for(var g=this.g.length+I.g.length,T=[],A=0;A<2*g;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var k=0;k<I.g.length;k++){var D=this.i(A)>>>16,R=this.i(A)&65535,ke=I.i(k)>>>16,It=I.i(k)&65535;T[2*A+2*k]+=R*It,_(T,2*A+2*k),T[2*A+2*k+1]+=D*It,_(T,2*A+2*k+1),T[2*A+2*k+1]+=R*ke,_(T,2*A+2*k+1),T[2*A+2*k+2]+=D*ke,_(T,2*A+2*k+2)}for(A=0;A<g;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=g;A<2*g;A++)T[A]=0;return new o(T,0)};function _(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function v(I,g){this.g=I,this.h=g}function N(I,g){if(S(g))throw Error("division by zero");if(S(I))return new v(p,p);if(P(I))return g=N(C(I),g),new v(C(g.g),C(g.h));if(P(g))return g=N(I,C(g)),new v(C(g.g),g.h);if(30<I.g.length){if(P(I)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=g;0>=A.l(I);)T=b(T),A=b(A);var k=L(T,1),D=L(A,1);for(A=L(A,2),T=L(T,2);!S(A);){var R=D.add(A);0>=R.l(I)&&(k=k.add(T),D=R),A=L(A,1),T=L(T,1)}return g=E(I,k.j(g)),new v(k,g)}for(k=p;0<=I.l(g);){for(T=Math.max(1,Math.floor(I.m()/g.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),D=c(T),R=D.j(g);P(R)||0<R.l(I);)T-=A,D=c(T),R=D.j(g);S(D)&&(D=m),k=k.add(D),I=E(I,R)}return new v(k,I)}t.A=function(I){return N(this,I).h},t.and=function(I){for(var g=Math.max(this.g.length,I.g.length),T=[],A=0;A<g;A++)T[A]=this.i(A)&I.i(A);return new o(T,this.h&I.h)},t.or=function(I){for(var g=Math.max(this.g.length,I.g.length),T=[],A=0;A<g;A++)T[A]=this.i(A)|I.i(A);return new o(T,this.h|I.h)},t.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),T=[],A=0;A<g;A++)T[A]=this.i(A)^I.i(A);return new o(T,this.h^I.h)};function b(I){for(var g=I.g.length+1,T=[],A=0;A<g;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(T,I.h)}function L(I,g){var T=g>>5;g%=32;for(var A=I.g.length-T,k=[],D=0;D<A;D++)k[D]=0<g?I.i(D+T)>>>g|I.i(D+T+1)<<32-g:I.i(D+T);return new o(k,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,GE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,ti=o}).apply(typeof uy<"u"?uy:typeof self<"u"?self:typeof window<"u"?window:{});var cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var QE,XE,ho,YE,Ll,Qd,JE,ZE,eT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof cl=="object"&&cl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var x=a[y];if(!(x in f))break e;f=f[x]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,y=!1,x={next:function(){if(!y&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return y=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,y),a.apply(h,x)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function w(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function S(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,x,O){for(var B=Array(arguments.length-2),de=2;de<arguments.length;de++)B[de-2]=arguments[de];return h.prototype[x].apply(y,B)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function C(a,h){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const x=a.length||0,O=y.length||0;a.length=x+O;for(let B=0;B<O;B++)a[x+B]=y[B]}else a.push(y)}}class E{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function v(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var b=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function L(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function I(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function g(a){const h={};for(const f in a)h[f]=a[f];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let f,y;for(let x=1;x<arguments.length;x++){y=arguments[x];for(f in y)a[f]=y[f];for(let O=0;O<T.length;O++)f=T[O],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function k(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function D(a){l.setTimeout(()=>{throw a},0)}function R(){var a=K;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ke{constructor(){this.h=this.g=null}add(h,f){const y=It.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var It=new E(()=>new pn,a=>a.reset());class pn{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,z=!1,K=new ke,G=()=>{const a=l.Promise.resolve(void 0);Me=()=>{a.then(ce)}};var ce=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(f){D(f)}var h=It;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var Ne=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Oe(a,h){if(se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(b){e:{try{N(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ke[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Oe.aa.h.call(this)}}S(Oe,se);var Ke={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var pt="closure_listenable_"+(1e6*Math.random()|0),Dc=0;function a1(a,h,f,y,x){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=x,this.key=++Dc,this.da=this.fa=!1}function ka(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Na(a){this.src=a,this.g={},this.h=0}Na.prototype.add=function(a,h,f,y,x){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var B=Oc(a,h,y,x);return-1<B?(h=a[B],f||(h.fa=!1)):(h=new a1(h,this.src,O,!!y,x),h.fa=f,a.push(h)),h};function xc(a,h){var f=h.type;if(f in a.g){var y=a.g[f],x=Array.prototype.indexOf.call(y,h,void 0),O;(O=0<=x)&&Array.prototype.splice.call(y,x,1),O&&(ka(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Oc(a,h,f,y){for(var x=0;x<a.length;++x){var O=a[x];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==y)return x}return-1}var bc="closure_lm_"+(1e6*Math.random()|0),Lc={};function _m(a,h,f,y,x){if(Array.isArray(h)){for(var O=0;O<h.length;O++)_m(a,h[O],f,y,x);return null}return f=wm(f),a&&a[pt]?a.K(h,f,c(y)?!!y.capture:!!y,x):l1(a,h,f,!1,y,x)}function l1(a,h,f,y,x,O){if(!h)throw Error("Invalid event type");var B=c(x)?!!x.capture:!!x,de=Mc(a);if(de||(a[bc]=de=new Na(a)),f=de.add(h,f,y,B,O),f.proxy)return f;if(y=u1(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)Ne||(x=B),x===void 0&&(x=!1),a.addEventListener(h.toString(),y,x);else if(a.attachEvent)a.attachEvent(vm(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function u1(){function a(f){return h.call(a.src,a.listener,f)}const h=c1;return a}function ym(a,h,f,y,x){if(Array.isArray(h))for(var O=0;O<h.length;O++)ym(a,h[O],f,y,x);else y=c(y)?!!y.capture:!!y,f=wm(f),a&&a[pt]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=Oc(O,f,y,x),-1<f&&(ka(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=Mc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Oc(h,f,y,x)),(f=-1<a?h[a]:null)&&Vc(f))}function Vc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[pt])xc(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(vm(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=Mc(h))?(xc(f,a),f.h==0&&(f.src=null,h[bc]=null)):ka(a)}}}function vm(a){return a in Lc?Lc[a]:Lc[a]="on"+a}function c1(a,h){if(a.da)a=!0;else{h=new Oe(h,this);var f=a.listener,y=a.ha||a.src;a.fa&&Vc(a),a=f.call(y,h)}return a}function Mc(a){return a=a[bc],a instanceof Na?a:null}var Uc="__closure_events_fn_"+(1e9*Math.random()>>>0);function wm(a){return typeof a=="function"?a:(a[Uc]||(a[Uc]=function(h){return a.handleEvent(h)}),a[Uc])}function nt(){ee.call(this),this.i=new Na(this),this.M=this,this.F=null}S(nt,ee),nt.prototype[pt]=!0,nt.prototype.removeEventListener=function(a,h,f,y){ym(this,a,h,f,y)};function mt(a,h){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new se(h,a);else if(h instanceof se)h.target=h.target||a;else{var x=h;h=new se(y,a),A(h,x)}if(x=!0,f)for(var O=f.length-1;0<=O;O--){var B=h.g=f[O];x=Da(B,y,!0,h)&&x}if(B=h.g=a,x=Da(B,y,!0,h)&&x,x=Da(B,y,!1,h)&&x,f)for(O=0;O<f.length;O++)B=h.g=f[O],x=Da(B,y,!1,h)&&x}nt.prototype.N=function(){if(nt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],y=0;y<f.length;y++)ka(f[y]);delete a.g[h],a.h--}}this.F=null},nt.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},nt.prototype.L=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function Da(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,O=0;O<h.length;++O){var B=h[O];if(B&&!B.da&&B.capture==f){var de=B.listener,Ge=B.ha||B.src;B.fa&&xc(a.i,B),x=de.call(Ge,y)!==!1&&x}}return x&&!y.defaultPrevented}function Em(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Tm(a){a.g=Em(()=>{a.g=null,a.i&&(a.i=!1,Tm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class h1 extends ee{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Tm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ls(a){ee.call(this),this.h=a,this.g={}}S(Ls,ee);var Im=[];function Sm(a){L(a.g,function(h,f){this.g.hasOwnProperty(f)&&Vc(h)},a),a.g={}}Ls.prototype.N=function(){Ls.aa.N.call(this),Sm(this)},Ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fc=l.JSON.stringify,d1=l.JSON.parse,f1=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function jc(){}jc.prototype.h=null;function Am(a){return a.h||(a.h=a.i())}function Rm(){}var Vs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bc(){se.call(this,"d")}S(Bc,se);function zc(){se.call(this,"c")}S(zc,se);var Br={},Cm=null;function xa(){return Cm=Cm||new nt}Br.La="serverreachability";function Pm(a){se.call(this,Br.La,a)}S(Pm,se);function Ms(a){const h=xa();mt(h,new Pm(h))}Br.STAT_EVENT="statevent";function km(a,h){se.call(this,Br.STAT_EVENT,a),this.stat=h}S(km,se);function gt(a){const h=xa();mt(h,new km(h,a))}Br.Ma="timingevent";function Nm(a,h){se.call(this,Br.Ma,a),this.size=h}S(Nm,se);function Us(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Fs(){this.g=!0}Fs.prototype.xa=function(){this.g=!1};function p1(a,h,f,y,x,O){a.info(function(){if(a.g)if(O)for(var B="",de=O.split("&"),Ge=0;Ge<de.length;Ge++){var le=de[Ge].split("=");if(1<le.length){var rt=le[0];le=le[1];var it=rt.split("_");B=2<=it.length&&it[1]=="type"?B+(rt+"="+le+"&"):B+(rt+"=redacted&")}}else B=null;else B=O;return"XMLHTTP REQ ("+y+") [attempt "+x+"]: "+h+`
`+f+`
`+B})}function m1(a,h,f,y,x,O,B){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+x+"]: "+h+`
`+f+`
`+O+" "+B})}function ki(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+_1(a,f)+(y?" "+y:"")})}function g1(a,h){a.info(function(){return"TIMEOUT: "+h})}Fs.prototype.info=function(){};function _1(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var x=y[1];if(Array.isArray(x)&&!(1>x.length)){var O=x[0];if(O!="noop"&&O!="stop"&&O!="close")for(var B=1;B<x.length;B++)x[B]=""}}}}return Fc(f)}catch{return h}}var Oa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$c;function ba(){}S(ba,jc),ba.prototype.g=function(){return new XMLHttpRequest},ba.prototype.i=function(){return{}},$c=new ba;function er(a,h,f,y){this.j=a,this.i=h,this.l=f,this.R=y||1,this.U=new Ls(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xm}function xm(){this.i=null,this.g="",this.h=!1}var Om={},qc={};function Wc(a,h,f){a.L=1,a.v=Ua(kn(h)),a.m=f,a.P=!0,bm(a,null)}function bm(a,h){a.F=Date.now(),La(a),a.A=kn(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Gm(f.i,"t",y),a.C=0,f=a.j.J,a.h=new xm,a.g=dg(a.j,f?h:null,!a.m),0<a.O&&(a.M=new h1(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,y=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(Im[0]=x.toString()),x=Im);for(var O=0;O<x.length;O++){var B=_m(f,x[O],y||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ms(),p1(a.i,a.u,a.A,a.l,a.R,a.m)}er.prototype.ca=function(a){a=a.target;const h=this.M;h&&Nn(a)==3?h.j():this.Y(a)},er.prototype.Y=function(a){try{if(a==this.g)e:{const it=Nn(this.g);var h=this.g.Ba();const xi=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||tg(this.g)))){this.J||it!=4||h==7||(h==8||0>=xi?Ms(3):Ms(2)),Hc(this);var f=this.g.Z();this.X=f;t:if(Lm(this)){var y=tg(this.g);a="";var x=y.length,O=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zr(this),js(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(O&&h==x-1)});y.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,m1(this.i,this.u,this.A,this.l,this.R,it,f),this.o){if(this.T&&!this.K){t:{if(this.g){var de,Ge=this.g;if((de=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(de)){var le=de;break t}}le=null}if(f=le)ki(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kc(this,f);else{this.o=!1,this.s=3,gt(12),zr(this),js(this);break e}}if(this.P){f=!0;let tn;for(;!this.J&&this.C<B.length;)if(tn=y1(this,B),tn==qc){it==4&&(this.s=4,gt(14),f=!1),ki(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Om){this.s=4,gt(15),ki(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else ki(this.i,this.l,tn,null),Kc(this,tn);if(Lm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||B.length!=0||this.h.h||(this.s=1,gt(16),f=!1),this.o=this.o&&f,!f)ki(this.i,this.l,B,"[Invalid Chunked Response]"),zr(this),js(this);else if(0<B.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Zc(rt),rt.M=!0,gt(11))}}else ki(this.i,this.l,B,null),Kc(this,B);it==4&&zr(this),this.o&&!this.J&&(it==4?lg(this.j,this):(this.o=!1,La(this)))}else L1(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),zr(this),js(this)}}}catch{}finally{}};function Lm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function y1(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?qc:(f=Number(h.substring(f,y)),isNaN(f)?Om:(y+=1,y+f>h.length?qc:(h=h.slice(y,y+f),a.C=y+f,h)))}er.prototype.cancel=function(){this.J=!0,zr(this)};function La(a){a.S=Date.now()+a.I,Vm(a,a.I)}function Vm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Us(m(a.ba,a),h)}function Hc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}er.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(g1(this.i,this.A),this.L!=2&&(Ms(),gt(17)),zr(this),this.s=2,js(this)):Vm(this,this.S-a)};function js(a){a.j.G==0||a.J||lg(a.j,a)}function zr(a){Hc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Sm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Kc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Gc(f.h,a))){if(!a.K&&Gc(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var x=y;if(x[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)$a(f),Ba(f);else break e;Jc(f),gt(18)}}else f.za=x[1],0<f.za-f.T&&37500>x[2]&&f.F&&f.v==0&&!f.C&&(f.C=Us(m(f.Za,f),6e3));if(1>=Fm(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else qr(f,11)}else if((a.K||f.g==a)&&$a(f),!_(h))for(x=f.Da.g.parse(h),h=0;h<x.length;h++){let le=x[h];if(f.T=le[0],le=le[1],f.G==2)if(le[0]=="c"){f.K=le[1],f.ia=le[2];const rt=le[3];rt!=null&&(f.la=rt,f.j.info("VER="+f.la));const it=le[4];it!=null&&(f.Aa=it,f.j.info("SVER="+f.Aa));const xi=le[5];xi!=null&&typeof xi=="number"&&0<xi&&(y=1.5*xi,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const tn=a.g;if(tn){const Wa=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wa){var O=y.h;O.g||Wa.indexOf("spdy")==-1&&Wa.indexOf("quic")==-1&&Wa.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Qc(O,O.h),O.h=null))}if(y.D){const eh=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;eh&&(y.ya=eh,me(y.I,y.D,eh))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var B=a;if(y.qa=hg(y,y.J?y.ia:null,y.W),B.K){jm(y.h,B);var de=B,Ge=y.L;Ge&&(de.I=Ge),de.B&&(Hc(de),La(de)),y.g=B}else og(y);0<f.i.length&&za(f)}else le[0]!="stop"&&le[0]!="close"||qr(f,7);else f.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?qr(f,7):Yc(f):le[0]!="noop"&&f.l&&f.l.ta(le),f.v=0)}}Ms(4)}catch{}}var v1=class{constructor(a,h){this.g=a,this.map=h}};function Mm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Um(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Fm(a){return a.h?1:a.g?a.g.size:0}function Gc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Qc(a,h){a.g?a.g.add(h):a.h=h}function jm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Mm.prototype.cancel=function(){if(this.i=Bm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Bm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function w1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,y=0;y<f;y++)h.push(a[y]);return h}h=[],f=0;for(y in a)h[f++]=a[y];return h}function E1(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const y in a)h[f++]=y;return h}}}function zm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=E1(a),y=w1(a),x=y.length,O=0;O<x;O++)h.call(void 0,y[O],f&&f[O],a)}var $m=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function T1(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),x=null;if(0<=y){var O=a[f].substring(0,y);x=a[f].substring(y+1)}else O=a[f];h(O,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function $r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof $r){this.h=a.h,Va(this,a.j),this.o=a.o,this.g=a.g,Ma(this,a.s),this.l=a.l;var h=a.i,f=new $s;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),qm(this,f),this.m=a.m}else a&&(h=String(a).match($m))?(this.h=!1,Va(this,h[1]||"",!0),this.o=Bs(h[2]||""),this.g=Bs(h[3]||"",!0),Ma(this,h[4]),this.l=Bs(h[5]||"",!0),qm(this,h[6]||"",!0),this.m=Bs(h[7]||"")):(this.h=!1,this.i=new $s(null,this.h))}$r.prototype.toString=function(){var a=[],h=this.j;h&&a.push(zs(h,Wm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(zs(h,Wm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(zs(f,f.charAt(0)=="/"?A1:S1,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",zs(f,C1)),a.join("")};function kn(a){return new $r(a)}function Va(a,h,f){a.j=f?Bs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ma(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function qm(a,h,f){h instanceof $s?(a.i=h,P1(a.i,a.h)):(f||(h=zs(h,R1)),a.i=new $s(h,a.h))}function me(a,h,f){a.i.set(h,f)}function Ua(a){return me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Bs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,I1),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function I1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Wm=/[#\/\?@]/g,S1=/[#\?:]/g,A1=/[#\?]/g,R1=/[#\?@]/g,C1=/#/g;function $s(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function tr(a){a.g||(a.g=new Map,a.h=0,a.i&&T1(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=$s.prototype,t.add=function(a,h){tr(this),this.i=null,a=Ni(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Hm(a,h){tr(a),h=Ni(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Km(a,h){return tr(a),h=Ni(a,h),a.g.has(h)}t.forEach=function(a,h){tr(this),this.g.forEach(function(f,y){f.forEach(function(x){a.call(h,x,y,this)},this)},this)},t.na=function(){tr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let y=0;y<h.length;y++){const x=a[y];for(let O=0;O<x.length;O++)f.push(h[y])}return f},t.V=function(a){tr(this);let h=[];if(typeof a=="string")Km(this,a)&&(h=h.concat(this.g.get(Ni(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return tr(this),this.i=null,a=Ni(this,a),Km(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Gm(a,h,f){Hm(a,h),0<f.length&&(a.i=null,a.g.set(Ni(a,h),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var y=h[f];const O=encodeURIComponent(String(y)),B=this.V(y);for(y=0;y<B.length;y++){var x=O;B[y]!==""&&(x+="="+encodeURIComponent(String(B[y]))),a.push(x)}}return this.i=a.join("&")};function Ni(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function P1(a,h){h&&!a.j&&(tr(a),a.i=null,a.g.forEach(function(f,y){var x=y.toLowerCase();y!=x&&(Hm(this,y),Gm(this,x,f))},a)),a.j=h}function k1(a,h){const f=new Fs;if(l.Image){const y=new Image;y.onload=w(nr,f,"TestLoadImage: loaded",!0,h,y),y.onerror=w(nr,f,"TestLoadImage: error",!1,h,y),y.onabort=w(nr,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=w(nr,f,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function N1(a,h){const f=new Fs,y=new AbortController,x=setTimeout(()=>{y.abort(),nr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(O=>{clearTimeout(x),O.ok?nr(f,"TestPingServer: ok",!0,h):nr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),nr(f,"TestPingServer: error",!1,h)})}function nr(a,h,f,y,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),y(f)}catch{}}function D1(){this.g=new f1}function x1(a,h,f){const y=f||"";try{zm(a,function(x,O){let B=x;c(x)&&(B=Fc(x)),h.push(y+O+"="+encodeURIComponent(B))})}catch(x){throw h.push(y+"type="+encodeURIComponent("_badmap")),x}}function qs(a){this.l=a.Ub||null,this.j=a.eb||!1}S(qs,jc),qs.prototype.g=function(){return new Fa(this.l,this.j)},qs.prototype.i=function(a){return function(){return a}}({});function Fa(a,h){nt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Fa,nt),t=Fa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Hs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ws(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ws(this):Hs(this),this.readyState==3&&Qm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ws(this))},t.Qa=function(a){this.g&&(this.response=a,Ws(this))},t.ga=function(){this.g&&Ws(this)};function Ws(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Hs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Hs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Xm(a){let h="";return L(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Xc(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Xm(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):me(a,h,f))}function Ce(a){nt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Ce,nt);var O1=/^https?$/i,b1=["POST","PUT"];t=Ce.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$c.g(),this.v=this.o?Am(this.o):Am($c),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Ym(this,O);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var x in y)f.set(x,y[x]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())f.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(b1,h,void 0))||y||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of f)this.g.setRequestHeader(O,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{eg(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Ym(this,O)}};function Ym(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Jm(a),ja(a)}function Jm(a){a.A||(a.A=!0,mt(a,"complete"),mt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,mt(this,"complete"),mt(this,"abort"),ja(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ja(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Zm(this):this.bb())},t.bb=function(){Zm(this)};function Zm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Nn(a)!=4||a.Z()!=2)){if(a.u&&Nn(a)==4)Em(a.Ea,0,a);else if(mt(a,"readystatechange"),Nn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=B===0){var x=String(a.D).match($m)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),y=!O1.test(x?x.toLowerCase():"")}f=y}if(f)mt(a,"complete"),mt(a,"success");else{a.m=6;try{var O=2<Nn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Jm(a)}}finally{ja(a)}}}}function ja(a,h){if(a.g){eg(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||mt(a,"ready");try{f.onreadystatechange=y}catch{}}}function eg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Nn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),d1(h)}};function tg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function L1(a){const h={};a=(a.g&&2<=Nn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var f=k(a[y]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[x]||[];h[x]=O,O.push(f)}I(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ks(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function ng(a){this.Aa=0,this.i=[],this.j=new Fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ks("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ks("baseRetryDelayMs",5e3,a),this.cb=Ks("retryDelaySeedMs",1e4,a),this.Wa=Ks("forwardChannelMaxRetries",2,a),this.wa=Ks("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Mm(a&&a.concurrentRequestLimit),this.Da=new D1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ng.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,y){gt(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=hg(this,null,this.W),za(this)};function Yc(a){if(rg(a),a.G==3){var h=a.U++,f=kn(a.I);if(me(f,"SID",a.K),me(f,"RID",h),me(f,"TYPE","terminate"),Gs(a,f),h=new er(a,a.j,h),h.L=2,h.v=Ua(kn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=dg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),La(h)}cg(a)}function Ba(a){a.g&&(Zc(a),a.g.cancel(),a.g=null)}function rg(a){Ba(a),a.u&&(l.clearTimeout(a.u),a.u=null),$a(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function za(a){if(!Um(a.h)&&!a.s){a.s=!0;var h=a.Ga;Me||G(),z||(Me(),z=!0),K.add(h,a),a.B=0}}function V1(a,h){return Fm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Us(m(a.Ga,a,h),ug(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new er(this,this.j,a);let O=this.o;if(this.S&&(O?(O=g(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(x.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=sg(this,x,h),f=kn(this.I),me(f,"RID",a),me(f,"CVER",22),this.D&&me(f,"X-HTTP-Session-Id",this.D),Gs(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(Xm(O)))+"&"+h:this.m&&Xc(f,this.m,O)),Qc(this.h,x),this.Ua&&me(f,"TYPE","init"),this.P?(me(f,"$req",h),me(f,"SID","null"),x.T=!0,Wc(x,f,null)):Wc(x,f,h),this.G=2}}else this.G==3&&(a?ig(this,a):this.i.length==0||Um(this.h)||ig(this))};function ig(a,h){var f;h?f=h.l:f=a.U++;const y=kn(a.I);me(y,"SID",a.K),me(y,"RID",f),me(y,"AID",a.T),Gs(a,y),a.m&&a.o&&Xc(y,a.m,a.o),f=new er(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=sg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Qc(a.h,f),Wc(f,y,h)}function Gs(a,h){a.H&&L(a.H,function(f,y){me(h,y,f)}),a.l&&zm({},function(f,y){me(h,y,f)})}function sg(a,h,f){f=Math.min(a.i.length,f);var y=a.l?m(a.l.Na,a.l,a):null;e:{var x=a.i;let O=-1;for(;;){const B=["count="+f];O==-1?0<f?(O=x[0].g,B.push("ofs="+O)):O=0:B.push("ofs="+O);let de=!0;for(let Ge=0;Ge<f;Ge++){let le=x[Ge].g;const rt=x[Ge].map;if(le-=O,0>le)O=Math.max(0,x[Ge].g-100),de=!1;else try{x1(rt,B,"req"+le+"_")}catch{y&&y(rt)}}if(de){y=B.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,y}function og(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Me||G(),z||(Me(),z=!0),K.add(h,a),a.v=0}}function Jc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Us(m(a.Fa,a),ug(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ag(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Us(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),Ba(this),ag(this))};function Zc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ag(a){a.g=new er(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=kn(a.qa);me(h,"RID","rpc"),me(h,"SID",a.K),me(h,"AID",a.T),me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&me(h,"TO",a.ja),me(h,"TYPE","xmlhttp"),Gs(a,h),a.m&&a.o&&Xc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ua(kn(h)),f.m=null,f.P=!0,bm(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ba(this),Jc(this),gt(19))};function $a(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function lg(a,h){var f=null;if(a.g==h){$a(a),Zc(a),a.g=null;var y=2}else if(Gc(a.h,h))f=h.D,jm(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var x=a.B;y=xa(),mt(y,new Nm(y,f)),za(a)}else og(a);else if(x=h.s,x==3||x==0&&0<h.X||!(y==1&&V1(a,h)||y==2&&Jc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),x){case 1:qr(a,5);break;case 4:qr(a,10);break;case 3:qr(a,6);break;default:qr(a,2)}}}function ug(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function qr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),y=a.Xa;const x=!y;y=new $r(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Va(y,"https"),Ua(y),x?k1(y.toString(),f):N1(y.toString(),f)}else gt(2);a.G=0,a.l&&a.l.sa(h),cg(a),rg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function cg(a){if(a.G=0,a.ka=[],a.l){const h=Bm(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function hg(a,h,f){var y=f instanceof $r?kn(f):new $r(f);if(y.g!="")h&&(y.g=h+"."+y.g),Ma(y,y.s);else{var x=l.location;y=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var O=new $r(null);y&&Va(O,y),h&&(O.g=h),x&&Ma(O,x),f&&(O.l=f),y=O}return f=a.D,h=a.ya,f&&h&&me(y,f,h),me(y,"VER",a.la),Gs(a,y),y}function dg(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ce(new qs({eb:f})):new Ce(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fg(){}t=fg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function qa(){}qa.prototype.g=function(a,h){return new Ot(a,h)};function Ot(a,h){nt.call(this),this.g=new ng(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Di(this)}S(Ot,nt),Ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){Yc(this.g)},Ot.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Fc(a),a=f);h.i.push(new v1(h.Ya++,a)),h.G==3&&za(h)},Ot.prototype.N=function(){this.g.l=null,delete this.j,Yc(this.g),delete this.g,Ot.aa.N.call(this)};function pg(a){Bc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(pg,Bc);function mg(){zc.call(this),this.status=1}S(mg,zc);function Di(a){this.g=a}S(Di,fg),Di.prototype.ua=function(){mt(this.g,"a")},Di.prototype.ta=function(a){mt(this.g,new pg(a))},Di.prototype.sa=function(a){mt(this.g,new mg)},Di.prototype.ra=function(){mt(this.g,"b")},qa.prototype.createWebChannel=qa.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,eT=function(){return new qa},ZE=function(){return xa()},JE=Br,Qd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oa.NO_ERROR=0,Oa.TIMEOUT=8,Oa.HTTP_ERROR=6,Ll=Oa,Dm.COMPLETE="complete",YE=Dm,Rm.EventType=Vs,Vs.OPEN="a",Vs.CLOSE="b",Vs.ERROR="c",Vs.MESSAGE="d",nt.prototype.listen=nt.prototype.K,ho=Rm,XE=qs,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,QE=Ce}).apply(typeof cl<"u"?cl:typeof self<"u"?self:typeof window<"u"?window:{});const cy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps="10.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new ec("@firebase/firestore");function ro(){return pi.logLevel}function W(t,...e){if(pi.logLevel<=re.DEBUG){const n=e.map(Cp);pi.debug(`Firestore (${Ps}): ${t}`,...n)}}function Qn(t,...e){if(pi.logLevel<=re.ERROR){const n=e.map(Cp);pi.error(`Firestore (${Ps}): ${t}`,...n)}}function gs(t,...e){if(pi.logLevel<=re.WARN){const n=e.map(Cp);pi.warn(`Firestore (${Ps}): ${t}`,...n)}}function Cp(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Ps}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function fe(t,e){t||X()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends en{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class OD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bD{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new jn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new jn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new tT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new lt(e)}}class LD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class VD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new LD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new MD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function FD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=FD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function _s(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Be(0,0))}static max(){return new Y(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends Zo{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const jD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Zo{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return jD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(_e.fromString(e))}static fromName(e){return new H(_e.fromString(e).popFirst(5))}static empty(){return new H(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new _e(e.slice()))}}function BD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new xr(i,H.empty(),e)}function zD(t){return new xr(t.readTime,t.key,-1)}class xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xr(Y.min(),H.empty(),-1)}static max(){return new xr(Y.max(),H.empty(),-1)}}function $D(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const qD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function va(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==qD)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function HD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wa(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Pp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Pp.oe=-1;function ac(t){return t==null}function Iu(t){return t===0&&1/t==-1/0}function KD(t){return typeof t=="number"&&Number.isInteger(t)&&!Iu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hl(this.root,e,this.comparator,!1)}getReverseIterator(){return new hl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hl(this.root,e,this.comparator,!0)}}class hl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dy(this.data.getIterator())}getIteratorFrom(e){return new dy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class dy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new Ze(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class iT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new iT("Invalid base64 string: "+s):s}}(e);return new tt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const GD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(t){if(fe(!!t),typeof t=="string"){let e=0;const n=GD.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mi(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
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
 */function kp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Np(t){const e=t.mapValue.fields.__previous_value__;return kp(e)?Np(e):e}function ea(t){const e=Or(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class ta{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ta("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ta&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const dl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kp(t)?4:YD(t)?9007199254740991:XD(t)?10:11:X()}function Pn(t,e){if(t===e)return!0;const n=gi(t);if(n!==gi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ea(t).isEqual(ea(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Or(i.timestampValue),l=Or(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return mi(i.bytesValue).isEqual(mi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return De(i.geoPointValue.latitude)===De(s.geoPointValue.latitude)&&De(i.geoPointValue.longitude)===De(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return De(i.integerValue)===De(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=De(i.doubleValue),l=De(s.doubleValue);return o===l?Iu(o)===Iu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(hy(o)!==hy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Pn(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function na(t,e){return(t.values||[]).find(n=>Pn(n,e))!==void 0}function ys(t,e){if(t===e)return 0;const n=gi(t),r=gi(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=De(s.integerValue||s.doubleValue),u=De(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return fy(t.timestampValue,e.timestampValue);case 4:return fy(ea(t),ea(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const l=mi(s),u=mi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ue(l[c],u[c]);if(d!==0)return d}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ue(De(s.latitude),De(o.latitude));return l!==0?l:ue(De(s.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return py(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},m=o.fields||{},w=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(u=m.value)===null||u===void 0?void 0:u.arrayValue,P=ue(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:py(w,S)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===dl.mapValue&&o===dl.mapValue)return 0;if(s===dl.mapValue)return 1;if(o===dl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=ue(u[p],d[p]);if(m!==0)return m;const w=ys(l[u[p]],c[d[p]]);if(w!==0)return w}return ue(u.length,d.length)}(t.mapValue,e.mapValue);default:throw X()}}function fy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Or(t),r=Or(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function py(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ys(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function vs(t){return Xd(t)}function Xd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Or(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Xd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Xd(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function my(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Yd(t){return!!t&&"integerValue"in t}function Dp(t){return!!t&&"arrayValue"in t}function gy(t){return!!t&&"nullValue"in t}function _y(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vl(t){return!!t&&"mapValue"in t}function XD(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ii(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Co(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Co(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Vl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Vl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ii(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Rt(Co(this.value))}}function sT(t){const e=[];return Ii(t.fields,(n,r)=>{const i=new Ye([n]);if(Vl(r)){const s=sT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,Y.min(),Y.min(),Y.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,i){return new ct(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new ct(e,2,n,Y.min(),Y.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,Y.min(),Y.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Su{constructor(e,n){this.position=e,this.inclusive=n}}function yy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=ys(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function vy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Au{constructor(e,n="asc"){this.field=e,this.dir=n}}function JD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class oT{}class Ve extends oT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new e2(e,n,r):n==="array-contains"?new r2(e,r):n==="in"?new i2(e,r):n==="not-in"?new s2(e,r):n==="array-contains-any"?new o2(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new t2(e,r):new n2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ys(n,this.value)):n!==null&&gi(this.value)===gi(n)&&this.matchesComparison(ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends oT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new fn(e,n)}matches(e){return aT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function aT(t){return t.op==="and"}function lT(t){return ZD(t)&&aT(t)}function ZD(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function Jd(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+vs(t.value);if(lT(t))return t.filters.map(e=>Jd(e)).join(",");{const e=t.filters.map(n=>Jd(n)).join(",");return`${t.op}(${e})`}}function uT(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&Pn(r.value,i.value)}(t,e):t instanceof fn?function(r,i){return i instanceof fn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&uT(o,i.filters[l]),!0):!1}(t,e):void X()}function cT(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${vs(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(cT).join(" ,")+"}"}(t):"Filter"}class e2 extends Ve{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class t2 extends Ve{constructor(e,n){super(e,"in",n),this.keys=hT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class n2 extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=hT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class r2 extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dp(n)&&na(n.arrayValue,this.value)}}class i2 extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&na(this.value.arrayValue,n)}}class s2 extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!na(this.value.arrayValue,n)}}class o2 extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>na(this.value.arrayValue,r))}}/**
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
 */class a2{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function wy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new a2(t,e,n,r,i,s,o)}function xp(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Jd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ac(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vs(r)).join(",")),e.ue=n}return e.ue}function Op(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!uT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vy(t.startAt,e.startAt)&&vy(t.endAt,e.endAt)}function Zd(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function l2(t,e,n,r,i,s,o,l){return new Ea(t,e,n,r,i,s,o,l)}function lc(t){return new Ea(t)}function Ey(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dT(t){return t.collectionGroup!==null}function Po(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ze(Ye.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Au(s,r))}),n.has(Ye.keyField().canonicalString())||e.ce.push(new Au(Ye.keyField(),r))}return e.ce}function An(t){const e=J(t);return e.le||(e.le=u2(e,Po(t))),e.le}function u2(t,e){if(t.limitType==="F")return wy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Au(i.field,s)});const n=t.endAt?new Su(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Su(t.startAt.position,t.startAt.inclusive):null;return wy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ef(t,e){const n=t.filters.concat([e]);return new Ea(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function tf(t,e,n){return new Ea(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function uc(t,e){return Op(An(t),An(e))&&t.limitType===e.limitType}function fT(t){return`${xp(An(t))}|lt:${t.limitType}`}function Li(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>cT(i)).join(", ")}]`),ac(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>vs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>vs(i)).join(",")),`Target(${r})`}(An(t))}; limitType=${t.limitType})`}function cc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Po(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=yy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Po(r),i)||r.endAt&&!function(o,l,u){const c=yy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Po(r),i))}(t,e)}function c2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pT(t){return(e,n)=>{let r=!1;for(const i of Po(t)){const s=h2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function h2(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ys(u,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ii(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return rT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=new Ae(H.comparator);function Xn(){return d2}const mT=new Ae(H.comparator);function fo(...t){let e=mT;for(const n of t)e=e.insert(n.key,n);return e}function gT(t){let e=mT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Jr(){return ko()}function _T(){return ko()}function ko(){return new ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const f2=new Ae(H.comparator),p2=new Ze(H.comparator);function ne(...t){let e=p2;for(const n of t)e=e.add(n);return e}const m2=new Ze(ue);function g2(){return m2}/**
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
 */function bp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Iu(e)?"-0":e}}function yT(t){return{integerValue:""+t}}function _2(t,e){return KD(e)?yT(e):bp(t,e)}/**
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
 */class hc{constructor(){this._=void 0}}function y2(t,e,n){return t instanceof ra?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&kp(s)&&(s=Np(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ws?wT(t,e):t instanceof ia?ET(t,e):function(i,s){const o=vT(i,s),l=Ty(o)+Ty(i.Pe);return Yd(o)&&Yd(i.Pe)?yT(l):bp(i.serializer,l)}(t,e)}function v2(t,e,n){return t instanceof ws?wT(t,e):t instanceof ia?ET(t,e):n}function vT(t,e){return t instanceof Ru?function(r){return Yd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ra extends hc{}class ws extends hc{constructor(e){super(),this.elements=e}}function wT(t,e){const n=TT(e);for(const r of t.elements)n.some(i=>Pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ia extends hc{constructor(e){super(),this.elements=e}}function ET(t,e){let n=TT(e);for(const r of t.elements)n=n.filter(i=>!Pn(i,r));return{arrayValue:{values:n}}}class Ru extends hc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ty(t){return De(t.integerValue||t.doubleValue)}function TT(t){return Dp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,n){this.field=e,this.transform=n}}function w2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ws&&i instanceof ws||r instanceof ia&&i instanceof ia?_s(r.elements,i.elements,Pn):r instanceof Ru&&i instanceof Ru?Pn(r.Pe,i.Pe):r instanceof ra&&i instanceof ra}(t.transform,e.transform)}class E2{constructor(e,n){this.version=e,this.transformResults=n}}class Rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ml(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dc{}function ST(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new RT(t.key,Rn.none()):new Ta(t.key,t.data,Rn.none());{const n=t.data,r=Rt.empty();let i=new Ze(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new jr(t.key,r,new Ut(i.toArray()),Rn.none())}}function T2(t,e,n){t instanceof Ta?function(i,s,o){const l=i.value.clone(),u=Sy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof jr?function(i,s,o){if(!Ml(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Sy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(AT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function No(t,e,n,r){return t instanceof Ta?function(s,o,l,u){if(!Ml(s.precondition,o))return l;const c=s.value.clone(),d=Ay(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof jr?function(s,o,l,u){if(!Ml(s.precondition,o))return l;const c=Ay(s.fieldTransforms,u,o),d=o.data;return d.setAll(AT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ml(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function I2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=vT(r.transform,i||null);s!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,s))}return n||null}function Iy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_s(r,i,(s,o)=>w2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ta extends dc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class jr extends dc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function AT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Sy(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,v2(o,l,n[i]))}return r}function Ay(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,y2(s,o,e))}return r}class RT extends dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class S2 extends dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&T2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=No(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=No(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_T();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=ST(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,(n,r)=>Iy(n,r))&&_s(this.baseMutations,e.baseMutations,(n,r)=>Iy(n,r))}}class Lp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=function(){return f2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Lp(e,n,r,i)}}/**
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
 */class R2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,oe;function P2(t){switch(t){default:return X();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function CT(t){if(t===void 0)return Qn("GRPC error has no .code"),M.UNKNOWN;switch(t){case be.OK:return M.OK;case be.CANCELLED:return M.CANCELLED;case be.UNKNOWN:return M.UNKNOWN;case be.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case be.INTERNAL:return M.INTERNAL;case be.UNAVAILABLE:return M.UNAVAILABLE;case be.UNAUTHENTICATED:return M.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case be.NOT_FOUND:return M.NOT_FOUND;case be.ALREADY_EXISTS:return M.ALREADY_EXISTS;case be.PERMISSION_DENIED:return M.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case be.ABORTED:return M.ABORTED;case be.OUT_OF_RANGE:return M.OUT_OF_RANGE;case be.UNIMPLEMENTED:return M.UNIMPLEMENTED;case be.DATA_LOSS:return M.DATA_LOSS;default:return X()}}(oe=be||(be={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function k2(){return new TextEncoder}/**
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
 */const N2=new ti([4294967295,4294967295],0);function Ry(t){const e=k2().encode(t),n=new GE;return n.update(e),new Uint8Array(n.digest())}function Cy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ti([n,r],0),new ti([i,s],0)]}class Vp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new po(`Invalid padding: ${n}`);if(r<0)throw new po(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new po(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new po(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ti.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ti.fromNumber(r)));return i.compare(N2)===1&&(i=new ti([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Ry(e),[r,i]=Cy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Vp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Ry(e),[r,i]=Cy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class po extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fc(Y.min(),i,new Ae(ue),Xn(),ne())}}class Ia{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ia(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class PT{constructor(e,n){this.targetId=e,this.me=n}}class kT{constructor(e,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Py{constructor(){this.fe=0,this.ge=Ny(),this.pe=tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new Ia(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ny()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class D2{constructor(e){this.Le=e,this.Be=new Map,this.ke=Xn(),this.qe=ky(),this.Qe=new Ae(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Zd(s))if(r===0){const o=new H(s.path);this.Ue(n,o,ct.newNoDocument(o,Y.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=mi(r).toUint8Array()}catch(u){if(u instanceof iT)return gs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Vp(o,i,s)}catch(u){return gs(u instanceof po?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Zd(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ct.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new fc(e,n,this.Qe,this.ke,r);return this.ke=Xn(),this.qe=ky(),this.Qe=new Ae(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Py,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ze(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Py),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ky(){return new Ae(H.comparator)}function Ny(){return new Ae(H.comparator)}const x2={asc:"ASCENDING",desc:"DESCENDING"},O2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},b2={and:"AND",or:"OR"};class L2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function nf(t,e){return t.useProto3Json||ac(e)?e:{value:e}}function Cu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function V2(t,e){return Cu(t,e.toTimestamp())}function Cn(t){return fe(!!t),Y.fromTimestamp(function(n){const r=Or(n);return new Be(r.seconds,r.nanos)}(t))}function Mp(t,e){return rf(t,e).canonicalString()}function rf(t,e){const n=function(i){return new _e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function DT(t){const e=_e.fromString(t);return fe(VT(e)),e}function sf(t,e){return Mp(t.databaseId,e.path)}function Mh(t,e){const n=DT(e);if(n.get(1)!==t.databaseId.projectId)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(OT(n))}function xT(t,e){return Mp(t.databaseId,e)}function M2(t){const e=DT(t);return e.length===4?_e.emptyPath():OT(e)}function of(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function OT(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Dy(t,e,n){return{name:sf(t,e),fields:n.value.mapValue.fields}}function U2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(fe(d===void 0||typeof d=="string"),tt.fromBase64String(d||"")):(fe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),tt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?M.UNKNOWN:CT(c.code);return new q(d,c.message||"")}(o);n=new kT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Mh(t,r.document.name),s=Cn(r.document.updateTime),o=r.document.createTime?Cn(r.document.createTime):Y.min(),l=new Rt({mapValue:{fields:r.document.fields}}),u=ct.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Ul(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Mh(t,r.document),s=r.readTime?Cn(r.readTime):Y.min(),o=ct.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ul([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Mh(t,r.document),s=r.removedTargetIds||[];n=new Ul([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new C2(i,s),l=r.targetId;n=new PT(l,o)}}return n}function F2(t,e){let n;if(e instanceof Ta)n={update:Dy(t,e.key,e.value)};else if(e instanceof RT)n={delete:sf(t,e.key)};else if(e instanceof jr)n={update:Dy(t,e.key,e.data),updateMask:G2(e.fieldMask)};else{if(!(e instanceof S2))return X();n={verify:sf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ra)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ws)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ia)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ru)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:V2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function j2(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Cn(i.updateTime):Cn(s);return o.isEqual(Y.min())&&(o=Cn(s)),new E2(o,i.transformResults||[])}(n,e))):[]}function B2(t,e){return{documents:[xT(t,e.path)]}}function z2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xT(t,i);const s=function(c){if(c.length!==0)return LT(fn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Vi(m.field),direction:W2(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=nf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function $2(t){let e=M2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=bT(p);return m instanceof fn&&lT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(S){return new Au(Mi(S.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ac(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,w=p.values||[];return new Su(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,w=p.values||[];return new Su(w,m)}(n.endAt)),l2(e,i,o,s,l,"F",u,c)}function q2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Mi(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Mi(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Mi(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Mi(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Mi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>bT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function W2(t){return x2[t]}function H2(t){return O2[t]}function K2(t){return b2[t]}function Vi(t){return{fieldPath:t.canonicalString()}}function Mi(t){return Ye.fromServerFormat(t.fieldPath)}function LT(t){return t instanceof Ve?function(n){if(n.op==="=="){if(_y(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NAN"}};if(gy(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(_y(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NOT_NAN"}};if(gy(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vi(n.field),op:H2(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(i=>LT(i));return r.length===1?r[0]:{compositeFilter:{op:K2(n.op),filters:r}}}(t):X()}function G2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function VT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=tt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e){this.ct=e}}function X2(t){const e=$2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?tf(e,e.limit,"L"):e}/**
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
 */class Y2{constructor(){this.un=new J2}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(xr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(xr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class J2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(_e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(_e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Es(0)}static kn(){return new Es(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(){this.changes=new ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ex{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&No(r.mutation,i,Ut.empty(),Be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Jr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=fo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Xn();const o=ko(),l=function(){return ko()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof jr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),No(d.mutation,c,d.mutation.getFieldMask(),Be.now())):o.set(c.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new ex(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ko();let i=new Ae((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Ut.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=_T();d.forEach(m=>{if(!s.has(m)){const w=ST(n.get(m),r.get(m));w!==null&&p.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Jr());let l=-1,u=s;return o.next(c=>F.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(d=>({batchId:l,changes:gT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=fo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=fo();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const c=function(p,m){return new Ea(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,ct.newInvalidDocument(d)))});let l=fo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&No(d.mutation,c,Ut.empty(),Be.now()),cc(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class nx{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Cn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:X2(i.bundledQuery),readTime:Cn(i.readTime)}}(n)),F.resolve()}}/**
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
 */class rx{constructor(){this.overlays=new Ae(H.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jr();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Jr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Jr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Jr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return F.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new R2(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class ix{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(){this.Tr=new Ze($e.Er),this.dr=new Ze($e.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new $e(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new _e([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new _e([])),r=new $e(n,e),i=new $e(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ze($e.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new A2(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new $e(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(ue);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new $e(new H(s),0);let l=new Ze(ue);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new $e(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.Mr=e,this.docs=function(){return new Ae(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ct.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Xn();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||$D(zD(d),r)<=0||(i.has(d.key)||cc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ax(this)}getSize(e){return F.resolve(this.size)}}class ax extends Z2{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this.persistence=e,this.Nr=new ks(n=>xp(n),Op),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Up,this.targetCount=0,this.kr=Es.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Es(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Pp(0),this.Kr=!1,this.Kr=!0,this.$r=new ix,this.referenceDelegate=e(this),this.Ur=new lx(this),this.indexManager=new Y2,this.remoteDocumentCache=function(i){return new ox(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Q2(n),this.Gr=new nx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new sx(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new cx(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class cx extends WD{constructor(e){super(),this.currentSequenceNumber=e}}class Fp{constructor(e){this.persistence=e,this.Jr=new Up,this.Yr=null}static Zr(e){return new Fp(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new jp(e,n.fromCache,r,i)}}/**
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
 */class hx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dx{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return xR()?8:HD(ft())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new hx;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ro()<=re.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(ro()<=re.DEBUG&&W("QueryEngine","Query:",Li(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ro()<=re.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(n))):F.resolve())}Yi(e,n){if(Ey(n))return F.resolve(null);let r=An(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=tf(n,null,"F"),r=An(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,tf(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Ey(n)||i.isEqual(Y.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(ro()<=re.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Li(n)),this.rs(e,o,n,BD(i,-1)).next(l=>l))})}ts(e,n){let r=new Ze(pT(e));return n.forEach((i,s)=>{cc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ro()<=re.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Li(n)),this.Ji.getDocumentsMatchingQuery(e,n,xr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class fx{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ae(ue),this._s=new ks(s=>xp(s),Op),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tx(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function px(t,e,n,r){return new fx(t,e,n,r)}async function MT(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function mx(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let w=F.resolve();return m.forEach(S=>{w=w.next(()=>d.getEntry(u,S)).next(P=>{const C=c.docVersions.get(S);fe(C!==null),P.version.compareTo(C)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function UT(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function gx(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(tt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(p,w),function(P,C,E){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,w,d)&&l.push(n.Ur.updateTargetData(s,w))});let u=Xn(),c=ne();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(_x(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(Y.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function _x(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function yx(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vx(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function af(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wa(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function xy(t,e,n){const r=J(t);let i=Y.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=J(u),m=p._s.get(d);return m!==void 0?F.resolve(p.os.get(m)):p.Ur.getTargetData(c,d)}(r,o,An(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ne())).next(l=>(wx(r,c2(e),l),{documents:l,Ts:s})))}function wx(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Oy{constructor(){this.activeTargetIds=g2()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ex{constructor(){this.so=new Oy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Oy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Tx{_o(e){}shutdown(){}}/**
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
 */class by{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fl=null;function Uh(){return fl===null?fl=function(){return 268435456+Math.round(2147483648*Math.random())}():fl++,"0x"+fl.toString(16)}/**
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
 */const Ix={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class Ax extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Uh(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(W("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw gs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=Ix[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Uh();return new Promise((o,l)=>{const u=new QE;u.setWithCredentials(!0),u.listenOnce(YE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ll.NO_ERROR:const d=u.getResponseJson();W(at,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Ll.TIMEOUT:W(at,`RPC '${e}' ${s} timed out`),l(new q(M.DEADLINE_EXCEEDED,"Request time out"));break;case Ll.HTTP_ERROR:const p=u.getStatus();if(W(at,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const S=function(C){const E=C.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(E)>=0?E:M.UNKNOWN}(w.status);l(new q(S,w.message))}else l(new q(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(M.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{W(at,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(at,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Uh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=eT(),l=ZE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new XE({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");W(at,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,w=!1;const S=new Sx({Io:C=>{w?W(at,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(W(at,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),W(at,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},To:()=>p.close()}),P=(C,E,_)=>{C.listen(E,v=>{try{_(v)}catch(N){setTimeout(()=>{throw N},0)}})};return P(p,ho.EventType.OPEN,()=>{w||(W(at,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),P(p,ho.EventType.CLOSE,()=>{w||(w=!0,W(at,`RPC '${e}' stream ${i} transport closed`),S.So())}),P(p,ho.EventType.ERROR,C=>{w||(w=!0,gs(at,`RPC '${e}' stream ${i} transport errored:`,C),S.So(new q(M.UNAVAILABLE,"The operation could not be completed")))}),P(p,ho.EventType.MESSAGE,C=>{var E;if(!w){const _=C.data[0];fe(!!_);const v=_,N=v.error||((E=v[0])===null||E===void 0?void 0:E.error);if(N){W(at,`RPC '${e}' stream ${i} received error:`,N);const b=N.status;let L=function(T){const A=be[T];if(A!==void 0)return CT(A)}(b),I=N.message;L===void 0&&(L=M.INTERNAL,I="Unknown error status: "+b+" with message "+N.message),w=!0,S.So(new q(L,I)),p.close()}else W(at,`RPC '${e}' stream ${i} received:`,_),S.bo(_)}}),P(l,JE.STAT_EVENT,C=>{C.stat===Qd.PROXY?W(at,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Qd.NOPROXY&&W(at,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Fh(){return typeof document<"u"?document:null}/**
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
 */function pc(t){return new L2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new FT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rx extends jT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=U2(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Cn(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=of(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Zd(u)?{documents:B2(s,u)}:{query:z2(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=NT(s,o.resumeToken);const c=nf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Cu(s,o.snapshotVersion.toTimestamp());const c=nf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=q2(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=of(this.serializer),n.removeTarget=e,this.a_(n)}}class Cx extends jT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return fe(!!e.streamToken),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=j2(e.writeResults,e.commitTime),r=Cn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=of(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>F2(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,rf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,rf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class kx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Qn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Si(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.L_.add(4),await Sa(c),c.q_.set("Unknown"),c.L_.delete(4),await mc(c)}(this))})}),this.q_=new kx(r,i)}}async function mc(t){if(Si(t))for(const e of t.B_)await e(!0)}async function Sa(t){for(const e of t.B_)await e(!1)}function BT(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),qp(n)?$p(n):Ns(n).r_()&&zp(n,e))}function Bp(t,e){const n=J(t),r=Ns(n);n.N_.delete(e),r.r_()&&zT(n,e),n.N_.size===0&&(r.r_()?r.o_():Si(n)&&n.q_.set("Unknown"))}function zp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ns(t).A_(e)}function zT(t,e){t.Q_.xe(e),Ns(t).R_(e)}function $p(t){t.Q_=new D2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ns(t).start(),t.q_.v_()}function qp(t){return Si(t)&&!Ns(t).n_()&&t.N_.size>0}function Si(t){return J(t).L_.size===0}function $T(t){t.Q_=void 0}async function Dx(t){t.q_.set("Online")}async function xx(t){t.N_.forEach((e,n)=>{zp(t,e)})}async function Ox(t,e){$T(t),qp(t)?(t.q_.M_(e),$p(t)):t.q_.set("Unknown")}async function bx(t,e,n){if(t.q_.set("Online"),e instanceof kT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pu(t,r)}else if(e instanceof Ul?t.Q_.Ke(e):e instanceof PT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await UT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(tt.EMPTY_BYTE_STRING,d.snapshotVersion)),zT(s,u);const p=new gr(d.target,u,c,d.sequenceNumber);zp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Pu(t,r)}}async function Pu(t,e,n){if(!wa(e))throw e;t.L_.add(1),await Sa(t),t.q_.set("Offline"),n||(n=()=>UT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await mc(t)})}function qT(t,e){return e().catch(n=>Pu(t,n,e))}async function gc(t){const e=J(t),n=br(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Lx(e);)try{const i=await yx(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Vx(e,i)}catch(i){await Pu(e,i)}WT(e)&&HT(e)}function Lx(t){return Si(t)&&t.O_.length<10}function Vx(t,e){t.O_.push(e);const n=br(t);n.r_()&&n.V_&&n.m_(e.mutations)}function WT(t){return Si(t)&&!br(t).n_()&&t.O_.length>0}function HT(t){br(t).start()}async function Mx(t){br(t).p_()}async function Ux(t){const e=br(t);for(const n of t.O_)e.m_(n.mutations)}async function Fx(t,e,n){const r=t.O_.shift(),i=Lp.from(r,e,n);await qT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await gc(t)}async function jx(t,e){e&&br(t).V_&&await async function(r,i){if(function(o){return P2(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();br(r).s_(),await qT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await gc(r)}}(t,e),WT(t)&&HT(t)}async function Ly(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Si(n);n.L_.add(3),await Sa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await mc(n)}async function Bx(t,e){const n=J(t);e?(n.L_.delete(2),await mc(n)):e||(n.L_.add(2),await Sa(n),n.q_.set("Unknown"))}function Ns(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new Rx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:Dx.bind(null,t),Ro:xx.bind(null,t),mo:Ox.bind(null,t),d_:bx.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),qp(t)?$p(t):t.q_.set("Unknown")):(await t.K_.stop(),$T(t))})),t.K_}function br(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new Cx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Mx.bind(null,t),mo:jx.bind(null,t),f_:Ux.bind(null,t),g_:Fx.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await gc(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Wp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hp(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),wa(t))return new q(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=fo(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new as(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof as)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new as;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.W_=new Ae(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ts{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ts(e,n,as.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class $x{constructor(){this.queries=My(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=My(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(M.ABORTED,"Firestore shutting down"))}}function My(){return new ks(t=>fT(t),uc)}async function Kp(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new zx,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Hp(o,`Initialization of query '${Li(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Qp(n)}async function Gp(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function qx(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Qp(n)}function Wx(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Qp(t){t.Y_.forEach(e=>{e.next()})}var lf,Uy;(Uy=lf||(lf={})).ea="default",Uy.Cache="cache";class Xp{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ts(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==lf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.key=e}}class GT{constructor(e){this.key=e}}class Hx{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=pT(e),this.Ra=new as(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Vy,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),w=cc(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),P=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let C=!1;m&&w?m.data.isEqual(w.data)?S!==P&&(r.track({type:3,doc:w}),C=!0):this.ga(m,w)||(r.track({type:2,doc:w}),C=!0,(u&&this.Aa(w,u)>0||c&&this.Aa(w,c)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),C=!0):m&&!w&&(r.track({type:1,doc:m}),C=!0,(u||c)&&(l=!0)),C&&(w?(o=o.add(w),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(w,S){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return P(w)-P(S)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Ts(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Vy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new GT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new KT(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ts.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Kx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Gx{constructor(e){this.key=e,this.va=!1}}class Qx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ks(l=>fT(l),uc),this.Ma=new Map,this.xa=new Set,this.Oa=new Ae(H.comparator),this.Na=new Map,this.La=new Up,this.Ba={},this.ka=new Map,this.qa=Es.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Xx(t,e,n=!0){const r=eI(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await QT(r,e,n,!0),i}async function Yx(t,e){const n=eI(t);await QT(n,e,!0,!1)}async function QT(t,e,n,r){const i=await vx(t.localStore,An(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await Jx(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&BT(t.remoteStore,i),l}async function Jx(t,e,n,r,i){t.Ka=(p,m,w)=>async function(P,C,E,_){let v=C.view.ma(E);v.ns&&(v=await xy(P.localStore,C.query,!1).then(({documents:I})=>C.view.ma(I,v)));const N=_&&_.targetChanges.get(C.targetId),b=_&&_.targetMismatches.get(C.targetId)!=null,L=C.view.applyChanges(v,P.isPrimaryClient,N,b);return jy(P,C.targetId,L.wa),L.snapshot}(t,p,m,w);const s=await xy(t.localStore,e,!0),o=new Hx(e,s.Ts),l=o.ma(s.documents),u=Ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);jy(t,n,c.wa);const d=new Kx(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function Zx(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!uc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await af(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Bp(r.remoteStore,i.targetId),uf(r,i.targetId)}).catch(va)):(uf(r,i.targetId),await af(r.localStore,i.targetId,!0))}async function eO(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bp(n.remoteStore,r.targetId))}async function tO(t,e,n){const r=lO(t);try{const i=await function(o,l){const u=J(o),c=Be.now(),d=l.reduce((w,S)=>w.add(S.key),ne());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let S=Xn(),P=ne();return u.cs.getEntries(w,d).next(C=>{S=C,S.forEach((E,_)=>{_.isValidDocument()||(P=P.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,S)).next(C=>{p=C;const E=[];for(const _ of l){const v=I2(_,p.get(_.key).overlayedDocument);v!=null&&E.push(new jr(_.key,v,sT(v.value.mapValue),Rn.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,E,l)}).next(C=>{m=C;const E=C.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(w,C.batchId,E)})}).then(()=>({batchId:m.batchId,changes:gT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ae(ue)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Aa(r,i.changes),await gc(r.remoteStore)}catch(i){const s=Hp(i,"Failed to persist write");n.reject(s)}}async function XT(t,e){const n=J(t);try{const r=await gx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?fe(o.va):i.removedDocuments.size>0&&(fe(o.va),o.va=!1))}),await Aa(n,r,e)}catch(r){await va(r)}}function Fy(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&Qp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nO(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ae(H.comparator);o=o.insert(s,ct.newNoDocument(s,Y.min()));const l=ne().add(s),u=new fc(Y.min(),new Map,new Ae(ue),o,l);await XT(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Yp(r)}else await af(r.localStore,e,!1).then(()=>uf(r,e,n)).catch(va)}async function rO(t,e){const n=J(t),r=e.batch.batchId;try{const i=await mx(n.localStore,e);JT(n,r,null),YT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Aa(n,i)}catch(i){await va(i)}}async function iO(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(fe(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);JT(r,e,n),YT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Aa(r,i)}catch(i){await va(i)}}function YT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function JT(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function uf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||ZT(t,r)})}function ZT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Bp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Yp(t))}function jy(t,e,n){for(const r of n)r instanceof KT?(t.La.addReference(r.key,e),sO(t,r)):r instanceof GT?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||ZT(t,r.key)):X()}function sO(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),Yp(t))}function Yp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(_e.fromString(e)),r=t.qa.next();t.Na.set(r,new Gx(n)),t.Oa=t.Oa.insert(n,r),BT(t.remoteStore,new gr(An(lc(n.path)),r,"TargetPurposeLimboResolution",Pp.oe))}}async function Aa(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=jp.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,m=>F.forEach(m.$i,w=>d.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>F.forEach(m.Ui,w=>d.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!wa(p))throw p;W("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const w=d.os.get(m),S=w.snapshotVersion,P=w.withLastLimboFreeSnapshotVersion(S);d.os=d.os.insert(m,P)}}}(r.localStore,s))}async function oO(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await MT(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Aa(n,r.hs)}}function aO(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function eI(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=XT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nO.bind(null,e),e.Ca.d_=qx.bind(null,e.eventManager),e.Ca.$a=Wx.bind(null,e.eventManager),e}function lO(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iO.bind(null,e),e}class By{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return px(this.persistence,new dx,e.initialUser,this.serializer)}createPersistence(e){return new ux(Fp.Zr,this.serializer)}createSharedClientState(e){return new Ex}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oO.bind(null,this.syncEngine),await Bx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $x}()}createDatastore(e){const n=pc(e.databaseInfo.databaseId),r=function(s){return new Ax(s)}(e.databaseInfo);return function(s,o,l,u){return new Px(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Nx(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Fy(this.syncEngine,n,0),function(){return by.D()?new by:new Tx}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new Qx(i,s,o,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Sa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 */class Jp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=nT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{W("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(W("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Hp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jh(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await MT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function zy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dO(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ly(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ly(e.remoteStore,i)),t._onlineComponents=e}function hO(t){return t.name==="FirebaseError"?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function dO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await jh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!hO(n))throw n;gs("Error using user provided cache. Falling back to memory cache: "+n),await jh(t,new By)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await jh(t,new By);return t._offlineComponents}async function tI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await zy(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await zy(t,new uO))),t._onlineComponents}function fO(t){return tI(t).then(e=>e.syncEngine)}async function ku(t){const e=await tI(t),n=e.eventManager;return n.onListen=Xx.bind(null,e.syncEngine),n.onUnlisten=Zx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Yx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eO.bind(null,e.syncEngine),n}function pO(t,e,n={}){const r=new jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Jp({next:m=>{o.enqueueAndForget(()=>Gp(s,p));const w=m.docs.has(l);!w&&m.fromCache?c.reject(new q(M.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&u&&u.source==="server"?c.reject(new q(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Xp(lc(l.path),d,{includeMetadataChanges:!0,_a:!0});return Kp(s,p)}(await ku(t),t.asyncQueue,e,n,r)),r.promise}function mO(t,e,n={}){const r=new jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Jp({next:m=>{o.enqueueAndForget(()=>Gp(s,p)),m.fromCache&&u.source==="server"?c.reject(new q(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Xp(l,d,{includeMetadataChanges:!0,_a:!0});return Kp(s,p)}(await ku(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function nI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const $y=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(t,e,n){if(!n)throw new q(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gO(t,e,n,r){if(e===!0&&r===!0)throw new q(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qy(t){if(!H.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wy(t){if(H.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _c(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Xt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_c(t);throw new q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Hy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xD;switch(r.type){case"firstParty":return new VD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$y.get(n);r&&(W("ComponentProvider","Removing Datastore"),$y.delete(n),r.terminate())}(this),Promise.resolve()}}function _O(t,e,n,r={}){var i;const s=(t=Xt(t,yc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=lt.MOCK_USER;else{l=Lw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new lt(c)}t._authCredentials=new OD(new tT(l,u))}}/**
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
 */class Ai{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ai(this.firestore,e,this._query)}}class ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}}class kr extends Ai{constructor(e,n,r){super(e,n,lc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new H(e))}withConverter(e){return new kr(this.firestore,e,this._path)}}function Fl(t,e,...n){if(t=ve(t),rI("collection","path",e),t instanceof yc){const r=_e.fromString(e,...n);return Wy(r),new kr(t,null,r)}{if(!(t instanceof ht||t instanceof kr))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Wy(r),new kr(t.firestore,null,r)}}function We(t,e,...n){if(t=ve(t),arguments.length===1&&(e=nT.newId()),rI("doc","path",e),t instanceof yc){const r=_e.fromString(e,...n);return qy(r),new ht(t,null,new H(r))}{if(!(t instanceof ht||t instanceof kr))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return qy(r),new ht(t.firestore,t instanceof kr?t.converter:null,new H(r))}}/**
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
 */class yO{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new FT(this,"async_queue_retry"),this.Eu=()=>{const n=Fh();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Fh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Fh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new jn;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!wa(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=Wp.createAndSchedule(this,e,n,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&X()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}function Ky(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class _i extends yc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new yO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||iI(this),this._firestoreClient.terminate()}}function vO(t,e){const n=typeof t=="object"?t:tc(),r=typeof t=="string"?t:"(default)",i=Ur(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=xw("firestore");s&&_O(i,...s)}return i}function vc(t){return t._firestoreClient||iI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function iI(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new QD(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,nI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new cO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Is(tt.fromBase64String(e))}catch(n){throw new q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Is(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class wc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ra{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */class em{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO=/^__.*__$/;class EO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ta(e,this.data,n,this.fieldTransforms)}}class sI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function oI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Ec{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Ec(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Nu(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(oI(this.wu)&&wO.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class TO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pc(e)}Nu(e,n,r,i=!1){return new Ec({wu:e,methodName:n,Ou:r,path:Ye.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tm(t){const e=t._freezeSettings(),n=pc(t._databaseId);return new TO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function IO(t,e,n,r,i,s={}){const o=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);im("Data must be an object, but it was:",o,r);const l=aI(r,o);let u,c;if(s.merge)u=new Ut(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=cf(e,p,n);if(!o.contains(m))throw new q(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);uI(d,m)||d.push(m)}u=new Ut(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new EO(new Rt(l),u,c)}class Tc extends Ra{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Tc}}function SO(t,e,n){return new Ec({wu:3,Ou:e.settings.Ou,methodName:t._methodName,Du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class nm extends Ra{_toFieldTransform(e){return new IT(e.path,new ra)}isEqual(e){return e instanceof nm}}class rm extends Ra{constructor(e,n){super(e),this.Lu=n}_toFieldTransform(e){const n=SO(this,e,!0),r=this.Lu.map(s=>Ds(s,n)),i=new ws(r);return new IT(e.path,i)}isEqual(e){return e instanceof rm&&ms(this.Lu,e.Lu)}}function AO(t,e,n,r){const i=t.Nu(1,e,n);im("Data must be an object, but it was:",i,r);const s=[],o=Rt.empty();Ii(r,(u,c)=>{const d=sm(e,u,n);c=ve(c);const p=i.Cu(d);if(c instanceof Tc)s.push(d);else{const m=Ds(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new Ut(s);return new sI(o,l,i.fieldTransforms)}function RO(t,e,n,r,i,s){const o=t.Nu(1,e,n),l=[cf(e,r,n)],u=[i];if(s.length%2!=0)throw new q(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(cf(e,s[m])),u.push(s[m+1]);const c=[],d=Rt.empty();for(let m=l.length-1;m>=0;--m)if(!uI(c,l[m])){const w=l[m];let S=u[m];S=ve(S);const P=o.Cu(w);if(S instanceof Tc)c.push(w);else{const C=Ds(S,P);C!=null&&(c.push(w),d.set(w,C))}}const p=new Ut(c);return new sI(d,p,o.fieldTransforms)}function CO(t,e,n,r=!1){return Ds(n,t.Nu(r?4:3,e))}function Ds(t,e){if(lI(t=ve(t)))return im("Unsupported field value:",e,t),aI(t,e);if(t instanceof Ra)return function(r,i){if(!oI(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ds(l,i.Fu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Be.fromDate(r);return{timestampValue:Cu(i.serializer,s)}}if(r instanceof Be){const s=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cu(i.serializer,s)}}if(r instanceof Zp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Is)return{bytesValue:NT(i.serializer,r._byteString)};if(r instanceof ht){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Mp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof em)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Mu("VectorValues must only contain numeric values.");return bp(l.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${_c(r)}`)}(t,e)}function aI(t,e){const n={};return rT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ii(t,(r,i)=>{const s=Ds(i,e.bu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function lI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof Zp||t instanceof Is||t instanceof ht||t instanceof Ra||t instanceof em)}function im(t,e,n){if(!lI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=_c(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function cf(t,e,n){if((e=ve(e))instanceof wc)return e._internalPath;if(typeof e=="string")return sm(t,e);throw Nu("Field path arguments must be of type string or ",t,!1,void 0,n)}const PO=new RegExp("[~\\*/\\[\\]]");function sm(t,e,n){if(e.search(PO)>=0)throw Nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wc(...e.split("."))._internalPath}catch{throw Nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(M.INVALID_ARGUMENT,l+t+u)}function uI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class cI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(om("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kO extends cI{data(){return super.data()}}function om(t,e){return typeof e=="string"?sm(t,e):e instanceof wc?e._internalPath:e._delegate._internalPath}/**
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
 */function hI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class am{}class NO extends am{}function dI(t,e,...n){let r=[];e instanceof am&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof lm).length,l=s.filter(u=>u instanceof Ic).length;if(o>1||o>0&&l>0)throw new q(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ic extends NO{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ic(e,n,r)}_apply(e){const n=this._parse(e);return pI(e._query,n),new Ai(e.firestore,e.converter,ef(e._query,n))}_parse(e){const n=tm(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new q(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Qy(p,d);const w=[];for(const S of p)w.push(Gy(u,s,S));m={arrayValue:{values:w}}}else m=Gy(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Qy(p,d),m=CO(l,o,p,d==="in"||d==="not-in");return Ve.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fI(t,e,n){const r=e,i=om("where",t);return Ic._create(i,r,n)}class lm extends am{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new lm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)pI(o,u),o=ef(o,u)}(e._query,n),new Ai(e.firestore,e.converter,ef(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Gy(t,e,n){if(typeof(n=ve(n))=="string"){if(n==="")throw new q(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dT(e)&&n.indexOf("/")!==-1)throw new q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(_e.fromString(n));if(!H.isDocumentKey(r))throw new q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return my(t,new H(r))}if(n instanceof ht)return my(t,n._key);throw new q(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_c(n)}.`)}function Qy(t,e){if(!Array.isArray(t)||t.length===0)throw new q(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pI(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class DO{convertValue(e,n="none"){switch(gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ii(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>De(o.doubleValue));return new em(s)}convertGeoPoint(e){return new Zp(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Np(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ea(e));default:return null}}convertTimestamp(e){const n=Or(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);fe(VT(r));const i=new ta(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function xO(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class mo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mI extends cI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(om("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class jl extends mI{data(e={}){return super.data(e)}}class gI{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new mo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new jl(this._firestore,this._userDataWriter,r.key,r,new mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new jl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new mo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new jl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new mo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:OO(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function OO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
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
 */function Bn(t){t=Xt(t,ht);const e=Xt(t.firestore,_i);return pO(vc(e),t._key).then(n=>wI(e,t,n))}class um extends DO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function _I(t){t=Xt(t,Ai);const e=Xt(t.firestore,_i),n=vc(e),r=new um(e);return hI(t._query),mO(n,t._query).then(i=>new gI(e,r,t,i))}function hf(t,e,n){t=Xt(t,ht);const r=Xt(t.firestore,_i),i=xO(t.converter,e);return vI(r,[IO(tm(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Rn.none())])}function an(t,e,n,...r){t=Xt(t,ht);const i=Xt(t.firestore,_i),s=tm(i);let o;return o=typeof(e=ve(e))=="string"||e instanceof wc?RO(s,"updateDoc",t._key,e,n,r):AO(s,"updateDoc",t._key,e),vI(i,[o.toMutation(t._key,Rn.exists(!0))])}function yI(t,...e){var n,r,i;t=ve(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ky(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Ky(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,d;if(t instanceof ht)c=Xt(t.firestore,_i),d=lc(t._key.path),u={next:p=>{e[o]&&e[o](wI(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Xt(t,Ai);c=Xt(p.firestore,_i),d=p._query;const m=new um(c);u={next:w=>{e[o]&&e[o](new gI(c,m,p,w))},error:e[o+1],complete:e[o+2]},hI(t._query)}return function(m,w,S,P){const C=new Jp(P),E=new Xp(w,C,S);return m.asyncQueue.enqueueAndForget(async()=>Kp(await ku(m),E)),()=>{C.za(),m.asyncQueue.enqueueAndForget(async()=>Gp(await ku(m),E))}}(vc(c),d,l,u)}function vI(t,e){return function(r,i){const s=new jn;return r.asyncQueue.enqueueAndForget(async()=>tO(await fO(r),i,s)),s.promise}(vc(t),e)}function wI(t,e,n){const r=n.docs.get(e._key),i=new um(t);return new mI(t,i,e._key,r,new mo(n.hasPendingWrites,n.fromCache),e.converter)}function bO(){return new nm("serverTimestamp")}function Du(...t){return new rm("arrayUnion",t)}(function(e,n=!0){(function(i){Ps=i})(Ti),hn(new Zt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new _i(new bD(r.getProvider("auth-internal")),new UD(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ta(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Dt(cy,"4.7.0",e),Dt(cy,"4.7.0","esm2017")})();function EI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=EI(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function _r(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=EI(t))&&(r&&(r+=" "),r+=e);return r}const sa=t=>typeof t=="number"&&!isNaN(t),ni=t=>typeof t=="string",Ft=t=>typeof t=="function",Bl=t=>ni(t)||Ft(t)?t:null,df=t=>V.isValidElement(t)||ni(t)||Ft(t)||sa(t);function LO(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Sc(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:l,position:u,preventExitTransition:c,done:d,nodeRef:p,isIn:m,playToast:w}=o;const S=r?`${e}--${u}`:e,P=r?`${n}--${u}`:n,C=V.useRef(0);return V.useLayoutEffect(()=>{const E=p.current,_=S.split(" "),v=N=>{N.target===p.current&&(w(),E.removeEventListener("animationend",v),E.removeEventListener("animationcancel",v),C.current===0&&N.type!=="animationcancel"&&E.classList.remove(..._))};E.classList.add(..._),E.addEventListener("animationend",v),E.addEventListener("animationcancel",v)},[]),V.useEffect(()=>{const E=p.current,_=()=>{E.removeEventListener("animationend",_),i?LO(E,d,s):d()};m||(c?_():(C.current=1,E.className+=` ${P}`,E.addEventListener("animationend",_)))},[m]),ie.createElement(ie.Fragment,null,l)}}function Xy(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const vt=new Map;let oa=[];const ff=new Set,VO=t=>ff.forEach(e=>e(t)),TI=()=>vt.size>0;function II(t,e){var n;if(e)return!((n=vt.get(e))==null||!n.isToastActive(t));let r=!1;return vt.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function SI(t,e){df(t)&&(TI()||oa.push({content:t,options:e}),vt.forEach(n=>{n.buildToast(t,e)}))}function Yy(t,e){vt.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function MO(t){const{subscribe:e,getSnapshot:n,setProps:r}=V.useRef(function(s){const o=s.containerId||1;return{subscribe(l){const u=function(d,p,m){let w=1,S=0,P=[],C=[],E=[],_=p;const v=new Map,N=new Set,b=()=>{E=Array.from(v.values()),N.forEach(g=>g())},L=g=>{C=g==null?[]:C.filter(T=>T!==g),b()},I=g=>{const{toastId:T,onOpen:A,updateId:k,children:D}=g.props,R=k==null;g.staleId&&v.delete(g.staleId),v.set(T,g),C=[...C,g.props.toastId].filter(ke=>ke!==g.staleId),b(),m(Xy(g,R?"added":"updated")),R&&Ft(A)&&A(V.isValidElement(D)&&D.props)};return{id:d,props:_,observe:g=>(N.add(g),()=>N.delete(g)),toggle:(g,T)=>{v.forEach(A=>{T!=null&&T!==A.props.toastId||Ft(A.toggle)&&A.toggle(g)})},removeToast:L,toasts:v,clearQueue:()=>{S-=P.length,P=[]},buildToast:(g,T)=>{if((ee=>{let{containerId:se,toastId:Ne,updateId:Oe}=ee;const Ke=se?se!==d:d!==1,pt=v.has(Ne)&&Oe==null;return Ke||pt})(T))return;const{toastId:A,updateId:k,data:D,staleId:R,delay:ke}=T,It=()=>{L(A)},pn=k==null;pn&&S++;const Me={..._,style:_.toastStyle,key:w++,...Object.fromEntries(Object.entries(T).filter(ee=>{let[se,Ne]=ee;return Ne!=null})),toastId:A,updateId:k,data:D,closeToast:It,isIn:!1,className:Bl(T.className||_.toastClassName),bodyClassName:Bl(T.bodyClassName||_.bodyClassName),progressClassName:Bl(T.progressClassName||_.progressClassName),autoClose:!T.isLoading&&(z=T.autoClose,K=_.autoClose,z===!1||sa(z)&&z>0?z:K),deleteToast(){const ee=v.get(A),{onClose:se,children:Ne}=ee.props;Ft(se)&&se(V.isValidElement(Ne)&&Ne.props),m(Xy(ee,"removed")),v.delete(A),S--,S<0&&(S=0),P.length>0?I(P.shift()):b()}};var z,K;Me.closeButton=_.closeButton,T.closeButton===!1||df(T.closeButton)?Me.closeButton=T.closeButton:T.closeButton===!0&&(Me.closeButton=!df(_.closeButton)||_.closeButton);let G=g;V.isValidElement(g)&&!ni(g.type)?G=V.cloneElement(g,{closeToast:It,toastProps:Me,data:D}):Ft(g)&&(G=g({closeToast:It,toastProps:Me,data:D}));const ce={content:G,props:Me,staleId:R};_.limit&&_.limit>0&&S>_.limit&&pn?P.push(ce):sa(ke)?setTimeout(()=>{I(ce)},ke):I(ce)},setProps(g){_=g},setToggle:(g,T)=>{v.get(g).toggle=T},isToastActive:g=>C.some(T=>T===g),getSnapshot:()=>_.newestOnTop?E.reverse():E}}(o,s,VO);vt.set(o,u);const c=u.observe(l);return oa.forEach(d=>SI(d.content,d.options)),oa=[],()=>{c(),vt.delete(o)}},setProps(l){var u;(u=vt.get(o))==null||u.setProps(l)},getSnapshot(){var l;return(l=vt.get(o))==null?void 0:l.getSnapshot()}}}(t)).current;r(t);const i=V.useSyncExternalStore(e,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return i.forEach(l=>{const{position:u}=l.props;o.has(u)||o.set(u,[]),o.get(u).push(l)}),Array.from(o,l=>s(l[0],l[1]))},isToastActive:II,count:i==null?void 0:i.length}}function UO(t){const[e,n]=V.useState(!1),[r,i]=V.useState(!1),s=V.useRef(null),o=V.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:p}=t;var m,w;function S(){n(!0)}function P(){n(!1)}function C(v){const N=s.current;o.canDrag&&N&&(o.didMove=!0,e&&P(),o.delta=t.draggableDirection==="x"?v.clientX-o.start:v.clientY-o.start,o.start!==v.clientX&&(o.canCloseOnClick=!1),N.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,N.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function E(){document.removeEventListener("pointermove",C),document.removeEventListener("pointerup",E);const v=s.current;if(o.canDrag&&o.didMove&&v){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();v.style.transition="transform 0.2s, opacity 0.2s",v.style.removeProperty("transform"),v.style.removeProperty("opacity")}}(w=vt.get((m={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||w.setToggle(m.id,m.fn),V.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||P(),window.addEventListener("focus",S),window.addEventListener("blur",P),()=>{window.removeEventListener("focus",S),window.removeEventListener("blur",P)}},[t.pauseOnFocusLoss]);const _={onPointerDown:function(v){if(t.draggable===!0||t.draggable===v.pointerType){o.didMove=!1,document.addEventListener("pointermove",C),document.addEventListener("pointerup",E);const N=s.current;o.canCloseOnClick=!0,o.canDrag=!0,N.style.transition="none",t.draggableDirection==="x"?(o.start=v.clientX,o.removalDistance=N.offsetWidth*(t.draggablePercent/100)):(o.start=v.clientY,o.removalDistance=N.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(v){const{top:N,bottom:b,left:L,right:I}=s.current.getBoundingClientRect();v.nativeEvent.type!=="touchend"&&t.pauseOnHover&&v.clientX>=L&&v.clientX<=I&&v.clientY>=N&&v.clientY<=b?P():S()}};return l&&u&&(_.onMouseEnter=P,t.stacked||(_.onMouseLeave=S)),p&&(_.onClick=v=>{d&&d(v),o.canCloseOnClick&&c()}),{playToast:S,pauseToast:P,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:_}}function FO(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:l,controlledProgress:u,progress:c,rtl:d,isIn:p,theme:m}=t;const w=s||u&&c===0,S={...l,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};u&&(S.transform=`scaleX(${c})`);const P=_r("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":d}),C=Ft(o)?o({rtl:d,type:i,defaultClassName:P}):_r(P,o),E={[u&&c>=1?"onTransitionEnd":"onAnimationEnd"]:u&&c<1?null:()=>{p&&r()}};return ie.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":w},ie.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${i}`}),ie.createElement("div",{role:"progressbar","aria-hidden":w?"true":"false","aria-label":"notification timer",className:C,style:S,...E}))}let jO=1;const AI=()=>""+jO++;function BO(t){return t&&(ni(t.toastId)||sa(t.toastId))?t.toastId:AI()}function Do(t,e){return SI(t,e),e.toastId}function xu(t,e){return{...e,type:e&&e.type||t,toastId:BO(e)}}function pl(t){return(e,n)=>Do(e,xu(t,n))}function Z(t,e){return Do(t,xu("default",e))}Z.loading=(t,e)=>Do(t,xu("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),Z.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=ni(i)?Z.loading(i,n):Z.loading(i.render,{...n,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(d,p,m)=>{if(p==null)return void Z.dismiss(r);const w={type:d,...l,...n,data:m},S=ni(p)?{render:p}:p;return r?Z.update(r,{...w,...S}):Z(S.render,{...w,...S}),m},c=Ft(t)?t():t;return c.then(d=>u("success",o,d)).catch(d=>u("error",s,d)),c},Z.success=pl("success"),Z.info=pl("info"),Z.error=pl("error"),Z.warning=pl("warning"),Z.warn=Z.warning,Z.dark=(t,e)=>Do(t,xu("default",{theme:"dark",...e})),Z.dismiss=function(t){(function(e){var n;if(TI()){if(e==null||ni(n=e)||sa(n))vt.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=vt.get(e.containerId);r?r.removeToast(e.id):vt.forEach(i=>{i.removeToast(e.id)})}}else oa=oa.filter(r=>e!=null&&r.options.toastId!==e)})(t)},Z.clearWaitingQueue=function(t){t===void 0&&(t={}),vt.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},Z.isActive=II,Z.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=vt.get(o||1))==null?void 0:s.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:AI()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,Do(o,s)}},Z.done=t=>{Z.update(t,{progress:1})},Z.onChange=function(t){return ff.add(t),()=>{ff.delete(t)}},Z.play=t=>Yy(!0,t),Z.pause=t=>Yy(!1,t);const zO=typeof window<"u"?V.useLayoutEffect:V.useEffect,ml=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return ie.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},Bh={info:function(t){return ie.createElement(ml,{...t},ie.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return ie.createElement(ml,{...t},ie.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return ie.createElement(ml,{...t},ie.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return ie.createElement(ml,{...t},ie.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return ie.createElement("div",{className:"Toastify__spinner"})}},$O=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=UO(t),{closeButton:o,children:l,autoClose:u,onClick:c,type:d,hideProgressBar:p,closeToast:m,transition:w,position:S,className:P,style:C,bodyClassName:E,bodyStyle:_,progressClassName:v,progressStyle:N,updateId:b,role:L,progress:I,rtl:g,toastId:T,deleteToast:A,isIn:k,isLoading:D,closeOnClick:R,theme:ke}=t,It=_r("Toastify__toast",`Toastify__toast-theme--${ke}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":g},{"Toastify__toast--close-on-click":R}),pn=Ft(P)?P({rtl:g,position:S,type:d,defaultClassName:It}):_r(It,P),Me=function(ce){let{theme:ee,type:se,isLoading:Ne,icon:Oe}=ce,Ke=null;const pt={theme:ee,type:se};return Oe===!1||(Ft(Oe)?Ke=Oe({...pt,isLoading:Ne}):V.isValidElement(Oe)?Ke=V.cloneElement(Oe,pt):Ne?Ke=Bh.spinner():(Dc=>Dc in Bh)(se)&&(Ke=Bh[se](pt))),Ke}(t),z=!!I||!u,K={closeToast:m,type:d,theme:ke};let G=null;return o===!1||(G=Ft(o)?o(K):V.isValidElement(o)?V.cloneElement(o,K):function(ce){let{closeToast:ee,theme:se,ariaLabel:Ne="close"}=ce;return ie.createElement("button",{className:`Toastify__close-button Toastify__close-button--${se}`,type:"button",onClick:Oe=>{Oe.stopPropagation(),ee(Oe)},"aria-label":Ne},ie.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},ie.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(K)),ie.createElement(w,{isIn:k,done:A,position:S,preventExitTransition:n,nodeRef:r,playToast:s},ie.createElement("div",{id:T,onClick:c,"data-in":k,className:pn,...i,style:C,ref:r},ie.createElement("div",{...k&&{role:L},className:Ft(E)?E({type:d}):_r("Toastify__toast-body",E),style:_},Me!=null&&ie.createElement("div",{className:_r("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},Me),ie.createElement("div",null,l)),G,ie.createElement(FO,{...b&&!z?{key:`pb-${b}`}:{},rtl:g,theme:ke,delay:u,isRunning:e,isIn:k,closeToast:m,hide:p,type:d,style:N,className:v,controlledProgress:z,progress:I||0})))},Ac=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},qO=Sc(Ac("bounce",!0));Sc(Ac("slide",!0));Sc(Ac("zoom"));Sc(Ac("flip"));const WO={position:"top-right",transition:qO,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function HO(t){let e={...WO,...t};const n=t.stacked,[r,i]=V.useState(!0),s=V.useRef(null),{getToastToRender:o,isToastActive:l,count:u}=MO(e),{className:c,style:d,rtl:p,containerId:m}=e;function w(P){const C=_r("Toastify__toast-container",`Toastify__toast-container--${P}`,{"Toastify__toast-container--rtl":p});return Ft(c)?c({position:P,rtl:p,defaultClassName:C}):_r(C,Bl(c))}function S(){n&&(i(!0),Z.play())}return zO(()=>{if(n){var P;const C=s.current.querySelectorAll('[data-in="true"]'),E=12,_=(P=e.position)==null?void 0:P.includes("top");let v=0,N=0;Array.from(C).reverse().forEach((b,L)=>{const I=b;I.classList.add("Toastify__toast--stacked"),L>0&&(I.dataset.collapsed=`${r}`),I.dataset.pos||(I.dataset.pos=_?"top":"bot");const g=v*(r?.2:1)+(r?0:E*L);I.style.setProperty("--y",`${_?g:-1*g}px`),I.style.setProperty("--g",`${E}`),I.style.setProperty("--s",""+(1-(r?N:0))),v+=I.offsetHeight,N+=.025})}},[r,u,n]),ie.createElement("div",{ref:s,className:"Toastify",id:m,onMouseEnter:()=>{n&&(i(!1),Z.pause())},onMouseLeave:S},o((P,C)=>{const E=C.length?{...d}:{...d,pointerEvents:"none"};return ie.createElement("div",{className:w(P),style:E,key:`container-${P}`},C.map(_=>{let{content:v,props:N}=_;return ie.createElement($O,{...N,stacked:n,collapseAll:S,isIn:l(N.toastId,N.containerId),style:N.style,key:`toast-${N.key}`},v)}))}))}const KO={apiKey:"AIzaSyBQGDVK9tDTBxmQ_vmJK8LW9wbPqMnDrg8",authDomain:"connect-78a5f.firebaseapp.com",projectId:"connect-78a5f",storageBucket:"connect-78a5f.appspot.com",messagingSenderId:"425980497588",appId:"1:425980497588:web:b5a9de38778bc252a7d1e1",measurementId:"G-4Y3GY49Q31"},cm=zw(KO);fk(cm);const Ri=ND(cm),Fe=vO(cm),GO=async(t,e,n)=>{try{const i=(await mN(Ri,e,n)).user;await hf(We(Fe,"users",i.uid),{id:i.uid,username:t.toLowerCase(),email:e,name:"",avatar:"",bio:"Hey, there! I am using Connect.",lastSeen:Date.now()}),await hf(We(Fe,"chats",i.uid),{chatData:[]}),Z.success("Account Created!!")}catch(r){Z.error(r.code.split("/")[1].split("-").join(" ")),console.error(r)}},QO=async(t,e)=>{try{await gN(Ri,t,e),Z.success("Login successful.")}catch(n){console.error(n),Z.error(n.code.split("/")[1].split("-").join(" "))}},pf=async()=>{try{await vN(Ri)}catch(t){console.error(t),Z.error(t.code.split("/")[1].split("-").join(" "))}},XO=async t=>{if(!t){Z.error("Enter your email");return}try{const e=Fl(Fe,"users"),n=dI(e,fI("email","==",t));(await _I(n)).empty?Z.error("Email not found"):(await pN(Ri,t),Z.success("Reset Email Sent"))}catch(e){Z.error(e.message),console.error("Reset password error:",e)}};function YO(){const[t,e]=V.useState(!1),[n,r]=V.useState(""),[i,s]=V.useState(""),[o,l]=V.useState(""),u=c=>{c.preventDefault(),t===!1?GO(n,i,o):QO(i,o)};return U.jsxs("div",{className:gn.login,children:[U.jsx("img",{src:vR,className:gn.logo,alt:"Logo"}),U.jsxs("form",{className:gn.loginForm,onSubmit:u,children:[U.jsx("h2",{children:t===!0?"Login":"Sign Up"}),!t&&U.jsx("input",{onChange:c=>r(c.target.value),value:n,type:"text",placeholder:"Username",className:gn.formInput,required:!0}),U.jsx("input",{type:"email",onChange:c=>s(c.target.value),value:i,placeholder:"Email address",className:gn.formInput,required:!0}),U.jsx("input",{onChange:c=>l(c.target.value),value:o,type:"password",placeholder:"Password",className:gn.formInput,required:!0}),U.jsxs("div",{className:gn.loginTerm,children:[U.jsx("input",{type:"checkbox",required:!0}),U.jsx("p",{children:"Agree to the terms of use & privacy policy"})]}),U.jsx("button",{type:"submit",children:t===!0?"Login":"Sign Up"}),U.jsxs("div",{className:gn.loginForgot,children:[U.jsxs("p",{className:gn.loginToggle,children:[t?"Create an account  ":"Already have an account?  ",U.jsx("span",{onClick:()=>e(c=>!c),children:" Click Here"})]}),t&&U.jsxs("p",{className:gn.loginToggle,children:[" ","Forgot Password?",U.jsx("span",{onClick:()=>XO(i),children:" Reset here"})]})]})]})]})}const JO="_chat_794xc_1",ZO="_chatContainer_794xc_7",eb="_loading_794xc_15",tb="_loader_794xc_19",nb="_rotation_794xc_1",zh={chat:JO,chatContainer:ZO,loading:eb,loader:tb,rotation:nb},rb="_ls_1sner_1",ib="_lsTop_1sner_9",sb="_lsNav_1sner_13",ob="_logo_1sner_19",ab="_menu_1sner_23",lb="_lsSearch_1sner_29",ub="_lsList_1sner_50",cb="_friends_1sner_58",hb="_subMenu_1sner_91",db="_border_1sner_113",fb="_hidden_1sner_124",bt={ls:rb,lsTop:ib,lsNav:sb,logo:ob,menu:ab,lsSearch:lb,lsList:ub,friends:cb,subMenu:hb,border:db,hidden:fb},pb="/vite-react-deploy/assets/logo-9xkPj2hX.png";var RI={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Jy=ie.createContext&&ie.createContext(RI),mb=["attr","size","title"];function gb(t,e){if(t==null)return{};var n=_b(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _b(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Ou(){return Ou=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ou.apply(this,arguments)}function Zy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function bu(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Zy(Object(n),!0).forEach(function(r){yb(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Zy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function yb(t,e,n){return e=vb(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vb(t){var e=wb(t,"string");return typeof e=="symbol"?e:e+""}function wb(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function CI(t){return t&&t.map((e,n)=>ie.createElement(e.tag,bu({key:n},e.attr),CI(e.child)))}function Ci(t){return e=>ie.createElement(Eb,Ou({attr:bu({},t.attr)},e),CI(t.child))}function Eb(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=gb(t,mb),l=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),ie.createElement("svg",Ou({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:bu(bu({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&ie.createElement("title",null,s),t.children)};return Jy!==void 0?ie.createElement(Jy.Consumer,null,n=>e(n)):e(RI)}function Tb(t){return Ci({tag:"svg",attr:{version:"1.1",id:"search",x:"0px",y:"0px",viewBox:"0 0 24 24",style:"enable-background:new 0 0 24 24;"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:`M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z`},child:[]}]}]})(t)}function Ib(t){return Ci({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"},child:[]}]})(t)}/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},aa.apply(this,arguments)}var yr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yr||(yr={}));const ev="popstate";function Sb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return mf("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:kI(i)}return Rb(e,n,null,t)}function ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function PI(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ab(){return Math.random().toString(36).substr(2,8)}function tv(t,e){return{usr:t.state,key:t.key,idx:e}}function mf(t,e,n,r){return n===void 0&&(n=null),aa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xs(e):e,{state:n,key:e&&e.key||r||Ab()})}function kI(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Rb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=yr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(aa({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=yr.Pop;let C=d(),E=C==null?null:C-c;c=C,u&&u({action:l,location:P.location,delta:E})}function m(C,E){l=yr.Push;let _=mf(P.location,C,E);c=d()+1;let v=tv(_,c),N=P.createHref(_);try{o.pushState(v,"",N)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(N)}s&&u&&u({action:l,location:P.location,delta:1})}function w(C,E){l=yr.Replace;let _=mf(P.location,C,E);c=d();let v=tv(_,c),N=P.createHref(_);o.replaceState(v,"",N),s&&u&&u({action:l,location:P.location,delta:0})}function S(C){let E=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof C=="string"?C:kI(C);return _=_.replace(/ $/,"%20"),ze(E,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,E)}let P={get action(){return l},get location(){return t(i,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ev,p),u=C,()=>{i.removeEventListener(ev,p),u=null}},createHref(C){return e(i,C)},createURL:S,encodeLocation(C){let E=S(C);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:w,go(C){return o.go(C)}};return P}var nv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(nv||(nv={}));function Cb(t,e,n){return n===void 0&&(n="/"),Pb(t,e,n,!1)}function Pb(t,e,n,r){let i=typeof e=="string"?xs(e):e,s=xI(i.pathname||"/",n);if(s==null)return null;let o=NI(t);kb(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=jb(s);l=Ub(o[u],c,r)}return l}function NI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ze(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=ri([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),NI(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Vb(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of DI(s.path))i(s,o,u)}),e}function DI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=DI(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function kb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Mb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Nb=/^:[\w-]+$/,Db=3,xb=2,Ob=1,bb=10,Lb=-2,rv=t=>t==="*";function Vb(t,e){let n=t.split("/"),r=n.length;return n.some(rv)&&(r+=Lb),e&&(r+=xb),n.filter(i=>!rv(i)).reduce((i,s)=>i+(Nb.test(s)?Db:s===""?Ob:bb),r)}function Mb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Ub(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=iv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=iv({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:ri([s,p.pathname]),pathnameBase:Hb(ri([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=ri([s,p.pathnameBase]))}return o}function iv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Fb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:w}=d;if(m==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const S=l[p];return w&&!S?c[m]=void 0:c[m]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Fb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),PI(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function jb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return PI(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xI(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Bb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?xs(t):t;return{pathname:n?n.startsWith("/")?n:zb(n,e):e,search:Kb(r),hash:Gb(i)}}function zb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function $h(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $b(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function qb(t,e){let n=$b(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Wb(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=xs(t):(i=aa({},t),ze(!i.pathname||!i.pathname.includes("?"),$h("?","pathname","search",i)),ze(!i.pathname||!i.pathname.includes("#"),$h("#","pathname","hash",i)),ze(!i.search||!i.search.includes("#"),$h("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=Bb(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const ri=t=>t.join("/").replace(/\/\/+/g,"/"),Hb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Kb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Gb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Qb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const OI=["post","put","patch","delete"];new Set(OI);const Xb=["get",...OI];new Set(Xb);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function la(){return la=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},la.apply(this,arguments)}const hm=V.createContext(null),Yb=V.createContext(null),Rc=V.createContext(null),Cc=V.createContext(null),Os=V.createContext({outlet:null,matches:[],isDataRoute:!1}),bI=V.createContext(null);function Pc(){return V.useContext(Cc)!=null}function LI(){return Pc()||ze(!1),V.useContext(Cc).location}function VI(t){V.useContext(Rc).static||V.useLayoutEffect(t)}function kc(){let{isDataRoute:t}=V.useContext(Os);return t?cL():Jb()}function Jb(){Pc()||ze(!1);let t=V.useContext(hm),{basename:e,future:n,navigator:r}=V.useContext(Rc),{matches:i}=V.useContext(Os),{pathname:s}=LI(),o=JSON.stringify(qb(i,n.v7_relativeSplatPath)),l=V.useRef(!1);return VI(()=>{l.current=!0}),V.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Wb(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ri([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function Zb(t,e){return eL(t,e)}function eL(t,e,n,r){Pc()||ze(!1);let{navigator:i}=V.useContext(Rc),{matches:s}=V.useContext(Os),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=LI(),d;if(e){var p;let C=typeof e=="string"?xs(e):e;u==="/"||(p=C.pathname)!=null&&p.startsWith(u)||ze(!1),d=C}else d=c;let m=d.pathname||"/",w=m;if(u!=="/"){let C=u.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let S=Cb(t,{pathname:w}),P=sL(S&&S.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:ri([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:ri([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&P?V.createElement(Cc.Provider,{value:{location:la({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:yr.Pop}},P):P}function tL(){let t=uL(),e=Qb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:i},n):null,null)}const nL=V.createElement(tL,null);class rL extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?V.createElement(Os.Provider,{value:this.props.routeContext},V.createElement(bI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iL(t){let{routeContext:e,match:n,children:r}=t,i=V.useContext(hm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(Os.Provider,{value:e},r)}function sL(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||ze(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:w}=n,S=p.route.loader&&m[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||S){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let w,S=!1,P=null,C=null;n&&(w=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||nL,u&&(c<0&&m===0?(S=!0,C=null):c===m&&(S=!0,C=p.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),_=()=>{let v;return w?v=P:S?v=C:p.route.Component?v=V.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=d,V.createElement(iL,{match:p,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:v})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?V.createElement(rL,{location:n.location,revalidation:n.revalidation,component:P,error:w,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):_()},null)}var MI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(MI||{}),Lu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Lu||{});function oL(t){let e=V.useContext(hm);return e||ze(!1),e}function aL(t){let e=V.useContext(Yb);return e||ze(!1),e}function lL(t){let e=V.useContext(Os);return e||ze(!1),e}function UI(t){let e=lL(),n=e.matches[e.matches.length-1];return n.route.id||ze(!1),n.route.id}function uL(){var t;let e=V.useContext(bI),n=aL(Lu.UseRouteError),r=UI(Lu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function cL(){let{router:t}=oL(MI.UseNavigateStable),e=UI(Lu.UseNavigateStable),n=V.useRef(!1);return VI(()=>{n.current=!0}),V.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,la({fromRouteId:e},s)))},[t,e])}function zl(t){ze(!1)}function hL(t){let{basename:e="/",children:n=null,location:r,navigationType:i=yr.Pop,navigator:s,static:o=!1,future:l}=t;Pc()&&ze(!1);let u=e.replace(/^\/*/,"/"),c=V.useMemo(()=>({basename:u,navigator:s,static:o,future:la({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=xs(r));let{pathname:d="/",search:p="",hash:m="",state:w=null,key:S="default"}=r,P=V.useMemo(()=>{let C=xI(d,u);return C==null?null:{location:{pathname:C,search:p,hash:m,state:w,key:S},navigationType:i}},[u,d,p,m,w,S,i]);return P==null?null:V.createElement(Rc.Provider,{value:c},V.createElement(Cc.Provider,{children:n,value:P}))}function dL(t){let{children:e,location:n}=t;return Zb(gf(e),n)}new Promise(()=>{});function gf(t,e){e===void 0&&(e=[]);let n=[];return V.Children.forEach(t,(r,i)=>{if(!V.isValidElement(r))return;let s=[...e,i];if(r.type===V.Fragment){n.push.apply(n,gf(r.props.children,s));return}r.type!==zl&&ze(!1),!r.props.index||!r.props.children||ze(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=gf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const fL="6";try{window.__reactRouterVersion=fL}catch{}const pL="startTransition",sv=eS[pL];function mL(t){let{basename:e,children:n,future:r,window:i}=t,s=V.useRef();s.current==null&&(s.current=Sb({window:i,v5Compat:!0}));let o=s.current,[l,u]=V.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=V.useCallback(p=>{c&&sv?sv(()=>u(p)):u(p)},[u,c]);return V.useLayoutEffect(()=>o.listen(d),[o,d]),V.createElement(hL,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var ov;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ov||(ov={}));var av;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(av||(av={}));const Pi=V.createContext(),gL=({children:t})=>{const[e,n]=V.useState(null),[r,i]=V.useState(null),[s,o]=V.useState(null),[l,u]=V.useState([]),[c,d]=V.useState(null),[p,m]=V.useState(!1),w=kc(),S=async C=>{try{const E=We(Fe,"users",C),v=(await Bn(E)).data();n(v),v.avatar&&v.name?w("/chat"):w("/profile"),await an(E,{lastSeen:Date.now()});const N=setInterval(async()=>{Ri.currentUser&&await an(E,{lastSeen:Date.now()})},6e4);return()=>clearInterval(N)}catch(E){console.error("Error loading user data:",E)}};V.useEffect(()=>{let C;if(e){const E=We(Fe,"chats",e.id);C=yI(E,async _=>{var b;const v=((b=_.data())==null?void 0:b.chatsData)||[],N=[];for(const L of v){const I=We(Fe,"users",L.rId),T=(await Bn(I)).data();N.push({...L,userData:T})}i(N.sort((L,I)=>I.updatedAt-L.updatedAt))})}return()=>{C&&C()}},[e]);let P={userData:e,setUserData:n,chatData:r,setChatData:i,loadUserData:S,messages:l,setMessages:u,setMessagesId:o,messagesId:s,chatUser:c,setChatUser:d,chatVisible:p,setChatVisible:m};return U.jsx(Pi.Provider,{value:P,children:t})};function _L(){const{userData:t,chatData:e,chatUser:n,setChatUser:r,setMessagesId:i,messagesId:s,chatVisible:o,setChatVisible:l}=V.useContext(Pi),[u,c]=V.useState(!1),d=kc(),[p,m]=V.useState(null),[w,S]=V.useState(!1),P=async _=>{const v=_.target.value.toLowerCase();if(v){S(!0);const N=Fl(Fe,"users"),b=dI(N,fI("username","==",v)),L=await _I(b);if(!L.empty&&L.docs[0].data().id!==t.id){let I=!1;e.forEach(g=>{g.rId===L.docs[0].data().id&&(I=!0)}),I||m(L.docs[0].data())}else m(null)}else S(!1)},C=async()=>{const _=Fl(Fe,"messages"),v=Fl(Fe,"chats");try{const N=We(_);await hf(N,{createAt:bO(),messages:[]}),await an(We(v,p.id),{chatsData:Du({messageId:N.id,lastMessage:"",rId:t.id,updatedAt:Date.now(),messageSeen:!1})}),await an(We(v,t.id),{chatsData:Du({messageId:N.id,lastMessage:"",rId:p.id,updatedAt:Date.now(),messageSeen:!1})});const L=(await Bn(We(Fe,"users",p.id))).data();E({messagesId:N.id,lastMessage:"",updatedAt:Date.now(),messageSeen:!0,userData:L}),S(!1),l(!0)}catch(N){Z.error(N.message)}},E=async _=>{try{i(_.messageId),r(_);const v=We(Fe,"chats",t.id),b=(await Bn(v)).data();if(b&&b.chatsData){const L=b.chatsData.findIndex(I=>I.messageId===_.messageId);L!==-1&&(b.chatsData[L].messageSeen=!0,await an(v,{chatsData:b.chatsData}))}l(!0)}catch(v){Z.error(v.code)}};return V.useEffect(()=>{(async()=>{if(n){const v=We(Fe,"users",n.userData.id),b=(await Bn(v)).data();r(L=>({...L,userData:b}))}})()},[e]),U.jsx("div",{className:`${bt.ls} ${o?bt.hidden:""}`,children:U.jsxs("div",{className:bt.lsTop,children:[U.jsxs("div",{className:bt.lsNav,children:[U.jsx("img",{src:pb,className:bt.logo,alt:"Logo"}),U.jsx(Ib,{style:{cursor:"pointer"},onClick:()=>c(_=>!_)}),u&&U.jsxs("div",{className:bt.subMenu,children:[U.jsx("p",{onClick:()=>d("/profile"),children:"Edit Profile"}),U.jsx("hr",{}),U.jsx("p",{onClick:()=>pf(),children:"Logout"})]})]}),U.jsxs("div",{className:bt.lsSearch,children:[U.jsx(Tb,{}),U.jsx("input",{type:"text",placeholder:"Search here...",onChange:P})]}),U.jsx("div",{className:bt.lsList,children:w&&p?U.jsxs("div",{onClick:C,className:`${bt.friends} ${bt.addUser}`,children:[U.jsx("img",{src:p.avatar,className:bt.avatar,alt:"Avatar"}),U.jsx("p",{children:p.name})]}):e&&e.map((_,v)=>U.jsxs("div",{onClick:()=>{E(_),console.log(_)},className:`${bt.friends} ${_.messageSeen||_.messageId===s?"":bt.border}`,children:[U.jsx("img",{src:_.userData.avatar,alt:"Profile of user"}),U.jsxs("div",{children:[U.jsx("p",{children:_.userData.name}),U.jsx("span",{children:_.lastMessage})]})]},v))})]})})}const yL="_rs_1qhhn_1",vL="_rsProfile_1qhhn_8",wL="_rsMedia_1qhhn_37",gl={rs:yL,rsProfile:vL,rsMedia:wL};function FI(t){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"},child:[]}]})(t)}function EL(){const{chatUser:t,messages:e}=V.useContext(Pi),[n,r]=V.useState([]);return V.useEffect(()=>{let i=[];e.map(s=>{s.image&&i.push(s.image)}),r(i),console.log(n)},[e]),t?U.jsxs("div",{className:gl.rs,children:[U.jsxs("div",{className:gl.rsProfile,children:[U.jsx("img",{src:t.userData.avatar}),U.jsxs("h3",{children:[Date.now()-t.userData.lastSeen<=7e4?U.jsx(FI,{style:{color:"green",fontSize:"15px"}}):null," ",t.userData.name]}),U.jsx("p",{children:t.userData.bio})]}),U.jsx("hr",{}),U.jsxs("div",{className:gl.rsMedia,children:[U.jsx("p",{children:"Media"}),U.jsx("div",{children:n.map((i,s)=>U.jsx("img",{onClick:()=>window.open(i),src:i,alt:""},s))})]}),U.jsx("button",{onClick:()=>pf(),children:"Logout"})]}):U.jsx("div",{className:gl.rs,children:U.jsx("button",{onClick:()=>pf(),children:"Logout"})})}const TL="_chatBox_1pdlz_1",IL="_chatUser_1pdlz_6",SL="_help_1pdlz_17",AL="_chatInput_1pdlz_29",RL="_chatMsg_1pdlz_42",CL="_sMsg_1pdlz_49",PL="_rMsg_1pdlz_49",kL="_msg_1pdlz_65",NL="_msgImg_1pdlz_83",DL="_chatWelcome_1pdlz_88",xL="_back_1pdlz_101",OL="_hidden_1pdlz_110",Lt={chatBox:TL,chatUser:IL,help:SL,chatInput:AL,chatMsg:RL,sMsg:CL,rMsg:PL,msg:kL,msgImg:NL,chatWelcome:DL,back:xL,hidden:OL};function bL(t){return Ci({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"},child:[]}]})(t)}function LL(t){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80z"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"28",d:"M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296"},child:[]},{tag:"circle",attr:{cx:"250",cy:"348",r:"20"},child:[]}]})(t)}function VL(t){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"},child:[]}]})(t)}function ML(t){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 448l416-192L48 64v149.333L346 256 48 298.667z"},child:[]}]})(t)}const UL="/vite-react-deploy/assets/logo_icon-Bug9MN-U.png";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI="firebasestorage.googleapis.com",BI="storageBucket",FL=2*60*1e3,jL=10*60*1e3,BL=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends en{constructor(e,n,r=0){super(qh(e),`Firebase Storage: ${n} (${qh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Re.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var we;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(we||(we={}));function qh(t){return"storage/"+t}function dm(){const t="An unknown error occurred, please check the error payload for server response.";return new Re(we.UNKNOWN,t)}function zL(t){return new Re(we.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function $L(t){return new Re(we.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Re(we.UNAUTHENTICATED,t)}function WL(){return new Re(we.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function HL(t){return new Re(we.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function zI(){return new Re(we.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $I(){return new Re(we.CANCELED,"User canceled the upload/download.")}function KL(t){return new Re(we.INVALID_URL,"Invalid URL '"+t+"'.")}function GL(t){return new Re(we.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function QL(){return new Re(we.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+BI+"' property when initializing the app?")}function qI(){return new Re(we.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function XL(){return new Re(we.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function YL(){return new Re(we.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function JL(t){return new Re(we.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _f(t){return new Re(we.INVALID_ARGUMENT,t)}function WI(){return new Re(we.APP_DELETED,"The Firebase app was deleted.")}function ZL(t){return new Re(we.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function xo(t,e){return new Re(we.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function io(t){throw new Re(we.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=jt.makeFromUrl(e,n)}catch{return new jt(e,"")}if(r.path==="")return r;throw GL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),S={bucket:1,path:3},P=n===jI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",E=new RegExp(`^https?://${P}/${i}/${C}`,"i"),v=[{regex:l,indices:u,postModify:s},{regex:w,indices:S,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<v.length;N++){const b=v[N],L=b.regex.exec(e);if(L){const I=L[b.indices.bucket];let g=L[b.indices.path];g||(g=""),r=new jt(I,g),b.postModify(r);break}}if(r==null)throw KL(e);return r}}class eV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tV(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...C){c||(c=!0,e.apply(null,C))}function p(C){i=setTimeout(()=>{i=null,t(w,u())},C)}function m(){s&&clearTimeout(s)}function w(C,...E){if(c){m();return}if(C){m(),d.call(null,C,...E);return}if(u()||o){m(),d.call(null,C,...E);return}r<64&&(r*=2);let v;l===1?(l=2,v=0):v=(r+Math.random())*1e3,p(v)}let S=!1;function P(C){S||(S=!0,m(),!c&&(i!==null?(C||(l=2),clearTimeout(i),p(0)):C||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function nV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rV(t){return t!==void 0}function iV(t){return typeof t=="function"}function sV(t){return typeof t=="object"&&!Array.isArray(t)}function Nc(t){return typeof t=="string"||t instanceof String}function lv(t){return fm()&&t instanceof Blob}function fm(){return typeof Blob<"u"}function uv(t,e,n,r){if(r<e)throw _f(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw _f(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function HI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ii;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ii||(ii={}));/**
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
 */function KI(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e,n,r,i,s,o,l,u,c,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,S)=>{this.resolve_=w,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new _l(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===ii.NO_ERROR,u=s.getStatus();if(!l||KI(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===ii.ABORT;r(!1,new _l(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new _l(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());rV(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=dm();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?WI():$I();o(u)}else{const u=zI();o(u)}};this.canceled_?n(!1,new _l(!1,null,!0)):this.backoffId_=tV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _l{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function aV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function lV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function uV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function cV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function hV(t,e,n,r,i,s,o=!0){const l=HI(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return uV(c,e),aV(c,n),lV(c,s),cV(c,r),new oV(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function fV(...t){const e=dV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(fm())return new Blob(t);throw new Re(we.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function pV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function mV(t){if(typeof atob>"u")throw JL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Wh{constructor(e,n){this.data=e,this.contentType=n||null}}function gV(t,e){switch(t){case wn.RAW:return new Wh(GI(e));case wn.BASE64:case wn.BASE64URL:return new Wh(QI(t,e));case wn.DATA_URL:return new Wh(yV(e),vV(e))}throw dm()}function GI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function _V(t){let e;try{e=decodeURIComponent(t)}catch{throw xo(wn.DATA_URL,"Malformed data URL.")}return GI(e)}function QI(t,e){switch(t){case wn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw xo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case wn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw xo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=mV(e)}catch(i){throw i.message.includes("polyfill")?i:xo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class XI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw xo(wn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=wV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function yV(t){const e=new XI(t);return e.base64?QI(wn.BASE64,e.rest):_V(e.rest)}function vV(t){return new XI(t).contentType}function wV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n){let r=0,i="";lv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(lv(this.data_)){const r=this.data_,i=pV(r,e,n);return i===null?null:new fr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new fr(r,!0)}}static getBlob(...e){if(fm()){const n=e.map(r=>r instanceof fr?r.data_:r);return new fr(fV.apply(null,n))}else{const n=e.map(o=>Nc(o)?gV(wn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new fr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t){let e;try{e=JSON.parse(t)}catch{return null}return sV(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function TV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function JI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IV(t,e){return e}class _t{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||IV}}let yl=null;function SV(t){return!Nc(t)||t.length<2?t:JI(t)}function ZI(){if(yl)return yl;const t=[];t.push(new _t("bucket")),t.push(new _t("generation")),t.push(new _t("metageneration")),t.push(new _t("name","fullPath",!0));function e(s,o){return SV(o)}const n=new _t("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new _t("size");return i.xform=r,t.push(i),t.push(new _t("timeCreated")),t.push(new _t("updated")),t.push(new _t("md5Hash",null,!0)),t.push(new _t("cacheControl",null,!0)),t.push(new _t("contentDisposition",null,!0)),t.push(new _t("contentEncoding",null,!0)),t.push(new _t("contentLanguage",null,!0)),t.push(new _t("contentType",null,!0)),t.push(new _t("metadata","customMetadata",!0)),yl=t,yl}function AV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new jt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function RV(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return AV(r,t),r}function e1(t,e,n){const r=YI(e);return r===null?null:RV(t,r,n)}function CV(t,e,n,r){const i=YI(e);if(i===null||!Nc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),w=Ca(m,n,r),S=HI({alt:"media",token:c});return w+S})[0]}function t1(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class bs{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t){if(!t)throw dm()}function pm(t,e){function n(r,i){const s=e1(t,i,e);return zn(s!==null),s}return n}function PV(t,e){function n(r,i){const s=e1(t,i,e);return zn(s!==null),CV(s,i,t.host,t._protocol)}return n}function Pa(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=WL():i=qL():n.getStatus()===402?i=$L(t.bucket):n.getStatus()===403?i=HL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function n1(t){const e=Pa(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=zL(t.path)),s.serverResponse=i.serverResponse,s}return n}function kV(t,e,n){const r=e.fullServerUrl(),i=Ca(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new bs(i,s,pm(t,n),o);return l.errorHandler=n1(e),l}function NV(t,e,n){const r=e.fullServerUrl(),i=Ca(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new bs(i,s,PV(t,n),o);return l.errorHandler=n1(e),l}function DV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function r1(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=DV(null,e)),r}function xV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let v="";for(let N=0;N<2;N++)v=v+Math.random().toString().slice(2);return v}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=r1(e,r,i),d=t1(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",w=fr.getBlob(p,r,m);if(w===null)throw qI();const S={name:c.fullPath},P=Ca(s,t.host,t._protocol),C="POST",E=t.maxUploadRetryTime,_=new bs(P,C,pm(t,n),E);return _.urlParams=S,_.headers=o,_.body=w.uploadData(),_.errorHandler=Pa(e),_}class Vu{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function mm(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{zn(!1)}return zn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function OV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=r1(e,r,i),l={name:o.fullPath},u=Ca(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=t1(o,n),m=t.maxUploadRetryTime;function w(P){mm(P);let C;try{C=P.getResponseHeader("X-Goog-Upload-URL")}catch{zn(!1)}return zn(Nc(C)),C}const S=new bs(u,c,w,m);return S.urlParams=l,S.headers=d,S.body=p,S.errorHandler=Pa(e),S}function bV(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=mm(c,["active","final"]);let p=null;try{p=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{zn(!1)}p||zn(!1);const m=Number(p);return zn(!isNaN(m)),new Vu(m,r.size(),d==="final")}const o="POST",l=t.maxUploadRetryTime,u=new bs(n,o,s,l);return u.headers=i,u.errorHandler=Pa(e),u}const cv=256*1024;function LV(t,e,n,r,i,s,o,l){const u=new Vu(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw XL();const c=u.total-u.current;let d=c;i>0&&(d=Math.min(d,i));const p=u.current,m=p+d;let w="";d===0?w="finalize":c===d?w="upload, finalize":w="upload";const S={"X-Goog-Upload-Command":w,"X-Goog-Upload-Offset":`${u.current}`},P=r.slice(p,m);if(P===null)throw qI();function C(N,b){const L=mm(N,["active","final"]),I=u.current+d,g=r.size();let T;return L==="final"?T=pm(e,s)(N,b):T=null,new Vu(I,g,L==="final",T)}const E="POST",_=e.maxUploadRetryTime,v=new bs(n,E,C,_);return v.headers=S,v.body=P.uploadData(),v.progressCallback=l||null,v.errorHandler=Pa(t),v}const St={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Hh(t){switch(t){case"running":case"pausing":case"canceling":return St.RUNNING;case"paused":return St.PAUSED;case"success":return St.SUCCESS;case"canceled":return St.CANCELED;case"error":return St.ERROR;default:return St.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(e,n,r){if(iV(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class MV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ii.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ii.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ii.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw io("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw io("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw io("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw io("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw io("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class UV extends MV{initXhr(){this.xhr_.responseType="text"}}function Ui(){return new UV}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FV{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=ZI(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(we.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(KI(i.status,[]))if(s)i=zI();else{this.sleepTime=Math.max(this.sleepTime*2,BL),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(we.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=OV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ui,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=bV(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Ui,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=cv*this._chunkMultiplier,n=new Vu(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=LV(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const l=this._ref.storage._makeRequest(o,Ui,i,s,!1);this._request=l,l.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){cv*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=kV(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Ui,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=xV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ui,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=$I(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Hh(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new VV(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Hh(this._state)){case St.SUCCESS:bi(this._resolve.bind(null,this.snapshot))();break;case St.CANCELED:case St.ERROR:const n=this._reject;bi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Hh(this._state)){case St.RUNNING:case St.PAUSED:e.next&&bi(e.next.bind(e,this.snapshot))();break;case St.SUCCESS:e.complete&&bi(e.complete.bind(e))();break;case St.CANCELED:case St.ERROR:e.error&&bi(e.error.bind(e,this._error))();break;default:e.error&&bi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class yi{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new yi(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return JI(this._location.path)}get storage(){return this._service}get parent(){const e=EV(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new yi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ZL(e)}}function jV(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new FV(t,new fr(e),n)}function BV(t){t._throwIfRoot("getDownloadURL");const e=NV(t.storage,t._location,ZI());return t.storage.makeRequestWithTokens(e,Ui).then(n=>{if(n===null)throw YL();return n})}function zV(t,e){const n=TV(t._location.path,e),r=new jt(t._location.bucket,n);return new yi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $V(t){return/^[A-Za-z]+:\/\//.test(t)}function qV(t,e){return new yi(t,e)}function i1(t,e){if(t instanceof gm){const n=t;if(n._bucket==null)throw QL();const r=new yi(n,n._bucket);return e!=null?i1(r,e):r}else return e!==void 0?zV(t,e):t}function WV(t,e){if(e&&$V(e)){if(t instanceof gm)return qV(t,e);throw _f("To use ref(service, url), the first argument must be a Storage instance.")}else return i1(t,e)}function hv(t,e){const n=e==null?void 0:e[BI];return n==null?null:jt.makeFromBucketSpec(n,t)}function HV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Lw(i,t.app.options.projectId))}class gm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=jI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=FL,this._maxUploadRetryTime=jL,this._requests=new Set,i!=null?this._bucket=jt.makeFromBucketSpec(i,this._host):this._bucket=hv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=hv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){uv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){uv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new eV(WI());{const o=hV(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const dv="@firebase/storage",fv="0.13.0";/**
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
 */const s1="storage";function KV(t,e,n){return t=ve(t),jV(t,e,n)}function GV(t){return t=ve(t),BV(t)}function QV(t,e){return t=ve(t),WV(t,e)}function XV(t=tc(),e){t=ve(t);const r=Ur(t,s1).getImmediate({identifier:e}),i=xw("storage");return i&&YV(r,...i),r}function YV(t,e,n,r={}){HV(t,e,n,r)}function JV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new gm(n,r,i,e,Ti)}function ZV(){hn(new Zt(s1,JV,"PUBLIC").setMultipleInstances(!0)),Dt(dv,fv,""),Dt(dv,fv,"esm2017")}ZV();const o1=async t=>{const e=XV(),n=QV(e,`images/${Date.now()+t.name}`),r=KV(n,t);return new Promise((i,s)=>{r.on("state_changed",o=>{const l=o.bytesTransferred/o.totalBytes*100;switch(console.log("Upload is "+l+"% done"),o.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},o=>{},()=>{GV(r.snapshot.ref).then(o=>{i(o)})})})};function eM(){const{userData:t,messagesId:e,chatUser:n,messages:r,setMessages:i,chatVisible:s,setChatVisible:o}=V.useContext(Pi),[l,u]=V.useState("");V.useEffect(()=>{if(e){const m=yI(We(Fe,"messages",e),w=>{i(w.data().messages.reverse())});return()=>{m()}}},[e]);function c(m){let w=m.toDate(),S=w.getHours(),P=w.getMinutes();return S>=12?S-12+":"+P+"PM":S+":"+P+"AM"}const d=async m=>{try{const w=await o1(m.target.files[0]);if(!w){Z.error("Error uploading image");return}w&&e&&(await an(We(Fe,"messages",e),{messages:Du({sId:t.id,image:w,createdAt:new Date})}),[n.rId,t.id].forEach(async P=>{const C=We(Fe,"chats",P),E=await Bn(C);if(E.exists()){const _=E.data(),v=_.chatsData.findIndex(N=>N.messageId===e);_.chatsData[v].lastMessage="Image",_.chatsData[v].updatedAt=Date.now(),_.chatsData[v].rId===t.id&&(_.chatsData[v].messageSeen=!1),await an(C,{chatsData:_.chatsData})}}))}catch(w){Z.error(w.code)}},p=async()=>{try{l&&e&&(await an(We(Fe,"messages",e),{messages:Du({sId:t.id,text:l,createdAt:new Date})}),[n.rId,t.id].forEach(async w=>{const S=We(Fe,"chats",w),P=await Bn(S);if(P.exists()){const C=P.data(),E=C.chatsData.findIndex(_=>_.messageId===e);C.chatsData[E].lastMessage=l.slice(0,30),C.chatsData[E].updatedAt=Date.now(),C.chatsData[E].rId===t.id&&(C.chatsData[E].messageSeen=!1),await an(S,{chatsData:C.chatsData})}}))}catch(m){Z.error(m.code)}u("")};return U.jsx("div",{className:`${Lt.chatBox} ${s?"":Lt.hidden}`,children:n?U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:Lt.chatUser,children:[U.jsx("img",{src:n.userData.avatar,alt:""}),U.jsxs("p",{children:[n.userData.name," ",Date.now()-n.userData.lastSeen<=7e4?U.jsx(FI,{style:{color:"green",fontSize:"15px"}}):null]}),U.jsx(LL,{className:Lt.help}),U.jsx(VL,{onClick:()=>o(!1),className:Lt.back})]}),U.jsx("div",{className:Lt.chatMsg,children:r.map((m,w)=>U.jsxs("div",{className:m.sId===t.id?Lt.sMsg:Lt.rMsg,children:[m.image?U.jsx("img",{src:m.image,className:Lt.msgImg}):U.jsx("p",{className:Lt.msg,children:m.text}),U.jsxs("div",{children:[U.jsx("img",{src:m.sId===t.id?t.avatar:n.userData.avatar}),U.jsx("p",{children:c(m.createdAt)})]})]},w))}),U.jsxs("div",{className:Lt.chatInput,children:[U.jsx("input",{type:"text",placeholder:"Send a message",style:{outline:"none",border:"none"},value:l,onChange:m=>u(m.target.value)}),U.jsxs("div",{children:[U.jsx("input",{onChange:m=>d(m),type:"file",id:"image",accept:"image/png,image/jpeg,image/jpg",hidden:!0}),U.jsx("label",{htmlFor:"image",children:U.jsx(bL,{style:{fontSize:"22px",paddingRight:"2px",cursor:"pointer"}})}),U.jsx(ML,{style:{fontSize:"22px",cursor:"pointer"},onClick:p})]})]})]}):U.jsxs("div",{className:`${Lt.chatWelcome} ${s?"":Lt.hidden}`,children:[U.jsx("img",{src:UL,alt:"Logo"}),U.jsx("p",{children:"Chat anytime, anywhere"})]})})}function tM(){const{chatData:t,userData:e}=V.useContext(Pi),[n,r]=V.useState(!0);return V.useEffect(()=>{e&&t&&r(!1)},[t,e]),U.jsx("div",{className:zh.chat,children:n?U.jsx("p",{className:zh.loader}):U.jsxs("div",{className:zh.chatContainer,children:[U.jsx(_L,{}),U.jsx(eM,{}),U.jsx(EL,{})]})})}const nM="_profile_uj4au_1",rM="_profileContainer_uj4au_9",iM="_logo_uj4au_17",Kh={profile:nM,profileContainer:rM,logo:iM},pv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdTSURBVHgB7Z3dTtRaFMcXdaKi0YhRExMT6o0X3ihXiMak8wTqExzmCTznCZQ30CcQn0B9AiYhQOACOCEhgQRSEi5IIHwGGAgfrn/Ze1LKdPq1d3eZmV/SdGiGYfpnde2111rd7aKCMDExYZ+dnTn80rYsqxd7bOfn5w+6uroe+N/Lx7b52Da/dLE/PT39n/ezfNx99+7dLBWALjIEhGRBPt64ceMDC/I6KF5ahOiz/Nl/+LN/DwwMuGSAXIWdmZl5UKvVPvPLQbqwyDxwWeTveYuci7Cjo6NOqVT6wi8dMkuVLfr727dvf5NmtApbIEGDuOzPh9gfD5MmtAhbYEGDuCcnJ5X3799XSTFKhYUPPTw8/MGDx0e6XgzzNqTSBysTdnx8HGL+UDW6G0Cpe8gsLKz06OjoCw8K/1ILwOfxrbu7e6ivr2+bMpBJWMSivBuh/EKnvHB5K2dxDRalZGxs7DX/d2eo9UQFNm8jOEdKSSphJycn/2FfOnKN/WkcbJ5UjOBcKQWJXQH+EDv5YWojOHcx2N/f/zPJ7yQSth1FlSQVN7aw8DdtcPmHIrJo5bjZs1jCtvDonwiIywN2X5xoIXLwQpxKHVE9kBvm3YjQpCmRwiL4p46ofmyetn+JelNTV8B+dZCd9g/qcAW23k/N0o+hwnb8anPgb2/duvU8bOrbzBV0XEAT4G/ZTYZezQ0tlq3VoQtr7RAB53PLjfK5pZD3G/WrnCSnR48e0d27d+n+/fvEU0vvGOAToePjYwyqtLm5Sbu7u95rg98VV3Y1ePyKxZocsCBeb28v9fT01IWMw/r6Oq2urhoTuJHVXvn2LGpkKKEDWOaLFy8SCSp5/Pix9/srKyueFedNI6u9NHiJKoBNOfPw4UN6+fJlKlElPEJ7/xgIbAAHdT7/gUvCcgjxmXIGguDyV0Vaq8+KsNo6dWFF3OpQzjx79swTVxXSTxvA8U9168JyXJZ7ZRWCwj+qJungp4qDg4N63a8urAk3oMsfQlSImzc88NerDZ6wwg3YlDOIU3VhaBCzp6enPT/kCWvCDYA7d+6QLlT67STUarVP2HvCshv4QC0GZmsmkFpKi01d5s2CKavSCQvraWlNTU29NlXH0jkF5foUmQBZL/hZi+e5NhmiFYUFXGEoW6bcANjf3ydd7OzskEFsi538KzLE1tYW6ULnZ0eBm1MsUXk0AlwB8qmqwZVgMkdLsFgyXH5BHlU1a2trZBjbqMUCWKxKq4WlIvFtEkRZVhFahpaWlrySS1bwGfPz82QaGGvq/liVwMqWl5cpK/gMw761TiGEBSipLC4uphJGWqqJskwY+SctmwBhMKLbth077Qf/DFdSFEuVlMS9p4VpzYRACwsLXtpPFgmDOQVYKOJUDFI6wrWsoEumJO6iLlzPqz9aQOL65s2b3mtMVYtmnUFgrHAFLhW8lQgWqiJqyBEXcewKdVAKa7oDYV3qoBTWdFa6gkKBwQp+FfuwSoD0s9gXzediIYoSZ2KqZBAUFO/du1dvgEtbVeDSsycw0oV7e3taU5JRwAt4TXHj4+NbeYZcKCI+efLE6yjUVf+XmbO8m+UQZb1586anJH7ALTYOaQaCIvjPozQtm0Gw5dmNCP+KfUn88IfFdUgjaCXCZgIpMMTVkab0Ay2xl+VvbWuk4FJHJ6EpUf3gO2TtaoxCaukJK24Ic0kDBlsrGyL7cDXhypvr/NmtRDfhxgEWUiRRJfhOOq4grJAkX9eFrdVq30ghGDyKcPmHobp9FPhdal3YcrmMZEyVFFFkUSVPnz4lhVT999gGE91DpAidnYSqUNnq6XcD4JKwrHiVFFmtTPO1CW7w9s9GpRklVjs3N1fovCmmwEioK+KKZmF3JuKuRIcUIIPzokQHmOai70BhfQwh1vPgwbBIGf8BhxSA6SQ2jMAQF34N/jevFk6ZM0BSZmNjQ3nCHEv4NToeevc3J2Z+6VxKD7Mf5A4gsH8Dcu+/1TMIBJIdhdhzuFgv22CDkLg1VHPlYZittaGwoXM7/nIVPkFHV9YLJ1zEQmACXGoyHoX2FYi4tkIdwmi6yGTThg2EEMH4rMNFzMqiDjd7T5w1Yb5SAcs3BnG7u7u/Rr0pUljhEsqolVMHl7dynJU6Y/VuwZewsG0tLs797OzsU9wVOmM3xWGFNI4Q/qM2Beee5BkLiReN5FnZIBle2sQAlajBKkjiNk7xByrt4BbEOSYWFaRe8RiLSFqW9YtadAkpiIpxJe0jVjpLSTfGJVNLSQP8YZ6j97XSJALncvv27b6BjEv3Z15VXiIGtWu7uhwufU76VPr7+5W0Aih9wARcA3/BrxyapFrX2hT8nX/zbKqSdYl+P0qFlYgl/BCS2VRsqnSRTKmSYrQIKymwe6iSJkElWoWVYKE0sZiPQ2apkmZBJbkIKxE+WIpsUz64vP3kkf6bSh8aRa7C+vGJrOXRfqKDsj0e7dcM8TgAW4j8Sggd+TBKuniqEW5QcdGdbkrIIH8BDAGBkF/hM9YAAAAASUVORK5CYII=";function sM(){const t=kc(),[e,n]=V.useState(""),[r,i]=V.useState(""),[s,o]=V.useState(""),[l,u]=V.useState(""),[c,d]=V.useState(""),{setUserData:p}=V.useContext(Pi),m=async w=>{w.preventDefault();try{const S=We(Fe,"users",l),P=await Bn(S);if(c===""&&e===""){Z.error("Upload profile picture.");return}if(e){const C=await o1(e);d(C),await an(S,{avatar:C,name:r,bio:s})}else await an(S,{name:r,bio:s});Z.success("Profile Updated Succesfully."),p(P.data()),t("/chat")}catch(S){Z.error(S.code)}};return V.useEffect(()=>{ME(Ri,async w=>{if(w){const S=We(Fe,"users",w.uid),C=(await Bn(S)).data();u(w.uid),C.name&&i(C.name),C.bio&&o(C.bio),C.avatar&&d(C.avatar)}else t("/")})},[]),U.jsx("div",{className:Kh.profile,children:U.jsxs("div",{className:Kh.profileContainer,children:[U.jsxs("form",{onSubmit:w=>m(w),children:[U.jsx("h3",{children:"Profile Details"}),U.jsxs("label",{htmlFor:"avatar",children:[U.jsx("input",{type:"file",id:"avatar",onChange:w=>n(w.target.files[0]),accept:".png, .jpg, .jpeg",hidden:!0}),U.jsx("img",{src:e?URL.createObjectURL(e):c||pv,alt:"Profile"}),"upload profile image"]}),U.jsx("input",{type:"text",placeholder:"Your name",onChange:w=>i(w.target.value),value:r,required:!0}),U.jsx("textarea",{placeholder:"Write profile bio",onChange:w=>o(w.target.value),value:s,required:!0}),U.jsx("button",{type:"submit",children:"Save"})]}),U.jsx("img",{src:e?URL.createObjectURL(e):c||pv,className:Kh.logo,alt:"Logo"})]})})}function oM(){const t=kc(),{loadUserData:e}=V.useContext(Pi);return V.useEffect(()=>{ME(Ri,async n=>{n?e(n.uid):t("/")})},[]),U.jsxs("div",{children:[U.jsx(HO,{}),U.jsxs(dL,{children:[U.jsx(zl,{path:"/",element:U.jsx(YO,{})}),U.jsx(zl,{path:"/chat",element:U.jsx(tM,{})}),U.jsx(zl,{path:"/profile",element:U.jsx(sM,{})})]})]})}Cw(document.getElementById("root")).render(U.jsx(mL,{children:U.jsx(gL,{children:U.jsx(oM,{})})}));
