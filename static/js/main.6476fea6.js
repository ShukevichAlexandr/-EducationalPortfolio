/*! For license information please see main.6476fea6.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),a=n(43),i=n(950);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function u(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function c(e){if(s(e)!==e)throw Error(o(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var f=Object.assign,p=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),b=Symbol.for("react.consumer"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),_=Symbol.for("react.lazy");Symbol.for("react.scope");var P=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var T=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var F=Symbol.iterator;function z(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=F&&e[F]||e["@@iterator"])?e:null}var j=Symbol.for("react.client.reference");function N(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===j?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case g:return"Fragment";case v:return"Profiler";case x:return"StrictMode";case k:return"Suspense";case E:return"SuspenseList";case P:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case m:return"Portal";case w:return(e.displayName||"Context")+".Provider";case b:return(e._context.displayName||"Context")+".Consumer";case S:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case C:return null!==(t=e.displayName||null)?t:N(e.type)||"Memo";case _:t=e._payload,e=e._init;try{return N(e(t))}catch(n){}}return null}var R=Array.isArray,O=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A={pending:!1,data:null,method:null,action:null},I=[],D=-1;function $(e){return{current:e}}function M(e){0>D||(e.current=I[D],I[D]=null,D--)}function W(e,t){D++,I[D]=e.current,e.current=t}var B=$(null),H=$(null),U=$(null),V=$(null);function q(e,t){switch(W(U,t),W(H,e),W(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ad(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=id(t=ad(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M(B),W(B,e)}function K(){M(B),M(H),M(U)}function Q(e){null!==e.memoizedState&&W(V,e);var t=B.current,n=id(t,e.type);t!==n&&(W(H,e),W(B,n))}function G(e){H.current===e&&(M(B),M(H)),V.current===e&&(M(V),Qd._currentValue=A)}var Y=Object.prototype.hasOwnProperty,X=r.unstable_scheduleCallback,J=r.unstable_cancelCallback,Z=r.unstable_shouldYield,ee=r.unstable_requestPaint,te=r.unstable_now,ne=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,ae=r.unstable_UserBlockingPriority,ie=r.unstable_NormalPriority,oe=r.unstable_LowPriority,le=r.unstable_IdlePriority,se=r.log,ue=r.unstable_setDisableYieldValue,ce=null,de=null;function fe(e){if("function"===typeof se&&ue(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ce,e)}catch(t){}}var pe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(he(e)/me|0)|0},he=Math.log,me=Math.LN2;var ge=256,xe=4194304;function ve(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ye(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var a=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var l=134217727&r;return 0!==l?0!==(r=l&~i)?a=ve(r):0!==(o&=l)?a=ve(o):n||0!==(n=l&~e)&&(a=ve(n)):0!==(l=r&~i)?a=ve(l):0!==o?a=ve(o):n||0!==(n=r&~e)&&(a=ve(n)),0===a?0:0!==t&&t!==a&&0===(t&i)&&((i=a&-a)>=(n=t&-t)||32===i&&0!==(4194048&n))?t:a}function be(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Se(){var e=ge;return 0===(4194048&(ge<<=1))&&(ge=256),e}function ke(){var e=xe;return 0===(62914560&(xe<<=1))&&(xe=4194304),e}function Ee(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ce(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _e(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-pe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function Pe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pe(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Te(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fe(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function ze(){var e=L.p;return 0!==e?e:void 0===(e=window.event)?32:cf(e.type)}var je=Math.random().toString(36).slice(2),Ne="__reactFiber$"+je,Re="__reactProps$"+je,Oe="__reactContainer$"+je,Le="__reactEvents$"+je,Ae="__reactListeners$"+je,Ie="__reactHandles$"+je,De="__reactResources$"+je,$e="__reactMarker$"+je;function Me(e){delete e[Ne],delete e[Re],delete e[Le],delete e[Ae],delete e[Ie]}function We(e){var t=e[Ne];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Oe]||n[Ne]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=yd(e);null!==e;){if(n=e[Ne])return n;e=yd(e)}return t}n=(e=n).parentNode}return null}function Be(e){if(e=e[Ne]||e[Oe]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function He(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function Ue(e){var t=e[De];return t||(t=e[De]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[$e]=!0}var qe=new Set,Ke={};function Qe(e,t){Ge(e,t),Ge(e+"Capture",t)}function Ge(e,t){for(Ke[e]=t,e=0;e<t.length;e++)qe.add(t[e])}var Ye,Xe,Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},et={};function tt(e,t,n){if(a=t,Y.call(et,a)||!Y.call(Ze,a)&&(Je.test(a)?et[a]=!0:(Ze[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function rt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function at(e){if(void 0===Ye)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ye=t&&t[1]||"",Xe=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Ye+e+Xe}var it=!1;function ot(e,t){if(!e||it)return"";it=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(l){if(l&&r&&"string"===typeof l.stack)return[l.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),o=i[0],l=i[1];if(o&&l){var s=o.split("\n"),u=l.split("\n");for(a=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(r===s.length||a===u.length)for(r=s.length-1,a=u.length-1;1<=r&&0<=a&&s[r]!==u[a];)a--;for(;1<=r&&0<=a;r--,a--)if(s[r]!==u[a]){if(1!==r||1!==a)do{if(r--,0>--a||s[r]!==u[a]){var c="\n"+s[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}}while(1<=r&&0<=a);break}}}finally{it=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?at(n):""}function lt(e){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return at("Activity");default:return""}}function st(e){try{var t="";do{t+=lt(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ct(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ct(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ct(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function pt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ht=/[\n"\\]/g;function mt(e){return e.replace(ht,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function gt(e,t,n,r,a,i,o,l){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?vt(e,o,ut(t)):null!=n?vt(e,o,ut(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=i&&(e.defaultChecked=!!i),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+ut(l):e.removeAttribute("name")}function xt(e,t,n,r,a,i,o,l){if(null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.type=i),null!=t||null!=n){if(!("submit"!==i&&"reset"!==i||void 0!==t&&null!==t))return;n=null!=n?""+ut(n):"",t=null!=t?""+ut(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:a)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o)}function vt(e,t,n){"number"===t&&pt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function yt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ut(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function bt(e,t,n){null==t||((t=""+ut(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ut(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));if(R(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ut(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function St(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Et(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||kt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ct(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Et(e,a,r)}else for(var i in t)t.hasOwnProperty(i)&&Et(e,i,t[i])}function _t(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ft(e){return Tt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var zt=null;function jt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Nt=null,Rt=null;function Ot(e){var t=Be(e);if(t&&(e=t.stateNode)){var n=e[Re]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Re]||null;if(!a)throw Error(o(90));gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ft(r)}break e;case"textarea":bt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&yt(e,!!n.multiple,t,!1)}}}var Lt=!1;function At(e,t,n){if(Lt)return e(t,n);Lt=!0;try{return e(t)}finally{if(Lt=!1,(null!==Nt||null!==Rt)&&(Wu(),Nt&&(t=Nt,e=Rt,Rt=Nt=null,Ot(t),e)))for(t=0;t<e.length;t++)Ot(e[t])}}function It(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Re]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Dt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),$t=!1;if(Dt)try{var Mt={};Object.defineProperty(Mt,"passive",{get:function(){$t=!0}}),window.addEventListener("test",Mt,Mt),window.removeEventListener("test",Mt,Mt)}catch(Of){$t=!1}var Wt=null,Bt=null,Ht=null;function Ut(){if(Ht)return Ht;var e,t,n=Bt,r=n.length,a="value"in Wt?Wt.value:Wt.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Ht=a.slice(e,1<t?1-t:void 0)}function Vt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function qt(){return!0}function Kt(){return!1}function Qt(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?qt:Kt,this.isPropagationStopped=Kt,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=qt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=qt)},persist:function(){},isPersistent:qt}),t}var Gt,Yt,Xt,Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=Qt(Jt),en=f({},Jt,{view:0,detail:0}),tn=Qt(en),nn=f({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&"mousemove"===e.type?(Gt=e.screenX-Xt.screenX,Yt=e.screenY-Xt.screenY):Yt=Gt=0,Xt=e),Gt)},movementY:function(e){return"movementY"in e?e.movementY:Yt}}),rn=Qt(nn),an=Qt(f({},nn,{dataTransfer:0})),on=Qt(f({},en,{relatedTarget:0})),ln=Qt(f({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0})),sn=Qt(f({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),un=Qt(f({},Jt,{data:0})),cn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=fn[e])&&!!t[e]}function hn(){return pn}var mn=Qt(f({},en,{key:function(e){if(e.key){var t=cn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Vt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hn,charCode:function(e){return"keypress"===e.type?Vt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Vt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),gn=Qt(f({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),xn=Qt(f({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hn})),vn=Qt(f({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0})),yn=Qt(f({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),bn=Qt(f({},Jt,{newState:0,oldState:0})),wn=[9,13,27,32],Sn=Dt&&"CompositionEvent"in window,kn=null;Dt&&"documentMode"in document&&(kn=document.documentMode);var En=Dt&&"TextEvent"in window&&!kn,Cn=Dt&&(!Sn||kn&&8<kn&&11>=kn),_n=String.fromCharCode(32),Pn=!1;function Tn(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var zn=!1;var jn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!jn[e.type]:"textarea"===t}function Rn(e,t,n,r){Nt?Rt?Rt.push(r):Rt=[r]:Nt=r,0<(t=Uc(t,"onChange")).length&&(n=new Zt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Ln=null;function An(e){Ac(e,0)}function In(e){if(ft(He(e)))return e}function Dn(e,t){if("change"===e)return t}var $n=!1;if(Dt){var Mn;if(Dt){var Wn="oninput"in document;if(!Wn){var Bn=document.createElement("div");Bn.setAttribute("oninput","return;"),Wn="function"===typeof Bn.oninput}Mn=Wn}else Mn=!1;$n=Mn&&(!document.documentMode||9<document.documentMode)}function Hn(){On&&(On.detachEvent("onpropertychange",Un),Ln=On=null)}function Un(e){if("value"===e.propertyName&&In(Ln)){var t=[];Rn(t,Ln,e,jt(e)),At(An,t)}}function Vn(e,t,n){"focusin"===e?(Hn(),Ln=n,(On=t).attachEvent("onpropertychange",Un)):"focusout"===e&&Hn()}function qn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return In(Ln)}function Kn(e,t){if("click"===e)return In(t)}function Qn(e,t){if("input"===e||"change"===e)return In(t)}var Gn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Yn(e,t){if(Gn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Y.call(t,a)||!Gn(e[a],t[a]))return!1}return!0}function Xn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jn(e,t){var n,r=Xn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Xn(r)}}function Zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function er(e){for(var t=pt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=pt((e=t.contentWindow).document)}return t}function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var nr=Dt&&"documentMode"in document&&11>=document.documentMode,rr=null,ar=null,ir=null,or=!1;function lr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;or||null==rr||rr!==pt(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ir&&Yn(ir,r)||(ir=r,0<(r=Uc(ar,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ur={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},cr={},dr={};function fr(e){if(cr[e])return cr[e];if(!ur[e])return e;var t,n=ur[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return cr[e]=n[t];return e}Dt&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);var pr=fr("animationend"),hr=fr("animationiteration"),mr=fr("animationstart"),gr=fr("transitionrun"),xr=fr("transitionstart"),vr=fr("transitioncancel"),yr=fr("transitionend"),br=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(e,t){br.set(e,t),Qe(t,[e])}wr.push("scrollEnd");var kr=new WeakMap;function Er(e,t){if("object"===typeof e&&null!==e){var n=kr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:st(t)},kr.set(e,t),t)}return{value:e,source:t,stack:st(t)}}var Cr=[],_r=0,Pr=0;function Tr(){for(var e=_r,t=Pr=_r=0;t<e;){var n=Cr[t];Cr[t++]=null;var r=Cr[t];Cr[t++]=null;var a=Cr[t];Cr[t++]=null;var i=Cr[t];if(Cr[t++]=null,null!==r&&null!==a){var o=r.pending;null===o?a.next=a:(a.next=o.next,o.next=a),r.pending=a}0!==i&&Nr(n,a,i)}}function Fr(e,t,n,r){Cr[_r++]=e,Cr[_r++]=t,Cr[_r++]=n,Cr[_r++]=r,Pr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function zr(e,t,n,r){return Fr(e,t,n,r),Rr(e)}function jr(e,t){return Fr(e,null,null,t),Rr(e)}function Nr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,i=e.return;null!==i;)i.childLanes|=n,null!==(r=i.alternate)&&(r.childLanes|=n),22===i.tag&&(null===(e=i.stateNode)||1&e._visibility||(a=!0)),e=i,i=i.return;return 3===e.tag?(i=e.stateNode,a&&null!==t&&(a=31-pe(n),null===(r=(e=i.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),i):null}function Rr(e){if(50<Nu)throw Nu=0,Ru=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Or={};function Lr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ar(e,t,n,r){return new Lr(e,t,n,r)}function Ir(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Dr(e,t){var n=e.alternate;return null===n?((n=Ar(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function $r(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Mr(e,t,n,r,a,i){var l=0;if(r=e,"function"===typeof e)Ir(e)&&(l=1);else if("string"===typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,B.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case P:return(e=Ar(31,n,t,a)).elementType=P,e.lanes=i,e;case g:return Wr(n.children,a,i,t);case x:l=8,a|=24;break;case v:return(e=Ar(12,n,t,2|a)).elementType=v,e.lanes=i,e;case k:return(e=Ar(13,n,t,a)).elementType=k,e.lanes=i,e;case E:return(e=Ar(19,n,t,a)).elementType=E,e.lanes=i,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case y:case w:l=10;break e;case b:l=9;break e;case S:l=11;break e;case C:l=14;break e;case _:l=16,r=null;break e}l=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}return(t=Ar(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Wr(e,t,n,r){return(e=Ar(7,e,r,t)).lanes=n,e}function Br(e,t,n){return(e=Ar(6,e,null,t)).lanes=n,e}function Hr(e,t,n){return(t=Ar(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ur=[],Vr=0,qr=null,Kr=0,Qr=[],Gr=0,Yr=null,Xr=1,Jr="";function Zr(e,t){Ur[Vr++]=Kr,Ur[Vr++]=qr,qr=e,Kr=t}function ea(e,t,n){Qr[Gr++]=Xr,Qr[Gr++]=Jr,Qr[Gr++]=Yr,Yr=e;var r=Xr;e=Jr;var a=32-pe(r)-1;r&=~(1<<a),n+=1;var i=32-pe(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Xr=1<<32-pe(t)+a|n<<a|r,Jr=i+e}else Xr=1<<i|n<<a|r,Jr=e}function ta(e){null!==e.return&&(Zr(e,1),ea(e,1,0))}function na(e){for(;e===qr;)qr=Ur[--Vr],Ur[Vr]=null,Kr=Ur[--Vr],Ur[Vr]=null;for(;e===Yr;)Yr=Qr[--Gr],Qr[Gr]=null,Jr=Qr[--Gr],Qr[Gr]=null,Xr=Qr[--Gr],Qr[Gr]=null}var ra=null,aa=null,ia=!1,oa=null,la=!1,sa=Error(o(519));function ua(e){throw ma(Er(Error(o(418,"")),e)),sa}function ca(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ne]=e,t[Re]=r,n){case"dialog":Ic("cancel",t),Ic("close",t);break;case"iframe":case"object":case"embed":Ic("load",t);break;case"video":case"audio":for(n=0;n<Oc.length;n++)Ic(Oc[n],t);break;case"source":Ic("error",t);break;case"img":case"image":case"link":Ic("error",t),Ic("load",t);break;case"details":Ic("toggle",t);break;case"input":Ic("invalid",t),xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":Ic("invalid",t);break;case"textarea":Ic("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Yc(t.textContent,n)?(null!=r.popover&&(Ic("beforetoggle",t),Ic("toggle",t)),null!=r.onScroll&&Ic("scroll",t),null!=r.onScrollEnd&&Ic("scrollend",t),null!=r.onClick&&(t.onclick=Xc),t=!0):t=!1,t||ua(e)}function da(e){for(ra=e.return;ra;)switch(ra.tag){case 5:case 13:return void(la=!1);case 27:case 3:return void(la=!0);default:ra=ra.return}}function fa(e){if(e!==ra)return!1;if(!ia)return da(e),ia=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||od(e.type,e.memoizedProps)),t=!t),t&&aa&&ua(e),da(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){aa=xd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}aa=null}}else 27===n?(n=aa,pd(e.type)?(e=vd,vd=null,aa=e):aa=n):aa=ra?xd(e.stateNode.nextSibling):null;return!0}function pa(){aa=ra=null,ia=!1}function ha(){var e=oa;return null!==e&&(null===yu?yu=e:yu.push.apply(yu,e),oa=null),e}function ma(e){null===oa?oa=[e]:oa.push(e)}var ga=$(null),xa=null,va=null;function ya(e,t,n){W(ga,t._currentValue),t._currentValue=n}function ba(e){e._currentValue=ga.current,M(ga)}function wa(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sa(e,t,n,r){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var i=a.dependencies;if(null!==i){var l=a.child;i=i.firstContext;e:for(;null!==i;){var s=i;i=a;for(var u=0;u<t.length;u++)if(s.context===t[u]){i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),wa(i.return,n,e),r||(l=null);break e}i=s.next}}else if(18===a.tag){if(null===(l=a.return))throw Error(o(341));l.lanes|=n,null!==(i=l.alternate)&&(i.lanes|=n),wa(l,n,e),l=null}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===e){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}}function ka(e,t,n,r){e=null;for(var a=t,i=!1;null!==a;){if(!i)if(0!==(524288&a.flags))i=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var l=a.alternate;if(null===l)throw Error(o(387));if(null!==(l=l.memoizedProps)){var s=a.type;Gn(a.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(a===V.current){if(null===(l=a.alternate))throw Error(o(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(Qd):e=[Qd])}a=a.return}null!==e&&Sa(t,e,n,r),t.flags|=262144}function Ea(e){for(e=e.firstContext;null!==e;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){xa=e,va=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function _a(e){return Ta(xa,e)}function Pa(e,t){return null===xa&&Ca(e),Ta(e,t)}function Ta(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===va){if(null===e)throw Error(o(308));va=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else va=va.next=t;return n}var Fa="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},za=r.unstable_scheduleCallback,ja=r.unstable_NormalPriority,Na={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ra(){return{controller:new Fa,data:new Map,refCount:0}}function Oa(e){e.refCount--,0===e.refCount&&za(ja,function(){e.controller.abort()})}var La=null,Aa=0,Ia=0,Da=null;function $a(){if(0===--Aa&&null!==La){null!==Da&&(Da.status="fulfilled");var e=La;La=null,Ia=0,Da=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ma=O.S;O.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===La){var n=La=[];Aa=0,Ia=Fc(),Da={status:"pending",value:void 0,then:function(e){n.push(e)}}}Aa++,t.then($a,$a)}(0,t),null!==Ma&&Ma(e,t)};var Wa=$(null);function Ba(){var e=Wa.current;return null!==e?e:ru.pooledCache}function Ha(e,t){W(Wa,null===t?Wa.current:t.pool)}function Ua(){var e=Ba();return null===e?null:{parent:Na._currentValue,pool:e}}var Va=Error(o(460)),qa=Error(o(474)),Ka=Error(o(542)),Qa={then:function(){}};function Ga(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Ya(){}function Xa(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Ya,Ya),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw ei(e=t.reason),e;default:if("string"===typeof t.status)t.then(Ya,Ya);else{if(null!==(e=ru)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw ei(e=t.reason),e}throw Ja=t,Va}}var Ja=null;function Za(){if(null===Ja)throw Error(o(459));var e=Ja;return Ja=null,e}function ei(e){if(e===Va||e===Ka)throw Error(o(483))}var ti=!1;function ni(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ri(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ai(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ii(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&nu)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Rr(e),Nr(e,null,n),t}return Fr(e,r,t,n),Rr(e)}function oi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pe(e,n)}}function li(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var si=!1;function ui(){if(si){if(null!==Da)throw Da}}function ci(e,t,n,r){si=!1;var a=e.updateQueue;ti=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===o?i=u:o.next=u,o=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==i){var d=a.baseState;for(o=0,c=u=s=null,l=i;;){var p=-536870913&l.lane,h=p!==l.lane;if(h?(iu&p)===p:(r&p)===p){0!==p&&p===Ia&&(si=!0),null!==c&&(c=c.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var m=e,g=l;p=t;var x=n;switch(g.tag){case 1:if("function"===typeof(m=g.payload)){d=m.call(x,d,p);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(p="function"===typeof(m=g.payload)?m.call(x,d,p):m)||void 0===p)break e;d=f({},d,p);break e;case 2:ti=!0}}null!==(p=l.callback)&&(e.flags|=64,h&&(e.flags|=8192),null===(h=a.callbacks)?a.callbacks=[p]:h.push(p))}else h={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=h,s=d):c=c.next=h,o|=p;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(h=l).next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null===i&&(a.shared.lanes=0),pu|=o,e.lanes=o,e.memoizedState=d}}function di(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function fi(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)di(n[e],t)}var pi=$(null),hi=$(0);function mi(e,t){W(hi,e=du),W(pi,t),du=e|t.baseLanes}function gi(){W(hi,du),W(pi,pi.current)}function xi(){du=hi.current,M(pi),M(hi)}var vi=0,yi=null,bi=null,wi=null,Si=!1,ki=!1,Ei=!1,Ci=0,_i=0,Pi=null,Ti=0;function Fi(){throw Error(o(321))}function zi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}function ji(e,t,n,r,a,i){return vi=i,yi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=null===e||null===e.memoizedState?qo:Ko,Ei=!1,i=n(r,a),Ei=!1,ki&&(i=Ri(t,n,r,a)),Ni(e),i}function Ni(e){O.H=Vo;var t=null!==bi&&null!==bi.next;if(vi=0,wi=bi=yi=null,Si=!1,_i=0,Pi=null,t)throw Error(o(300));null===e||Pl||null!==(e=e.dependencies)&&Ea(e)&&(Pl=!0)}function Ri(e,t,n,r){yi=e;var a=0;do{if(ki&&(Pi=null),_i=0,ki=!1,25<=a)throw Error(o(301));if(a+=1,wi=bi=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}O.H=Qo,i=t(n,r)}while(ki);return i}function Oi(){var e=O.H,t=e.useState()[0];return t="function"===typeof t.then?Mi(t):t,e=e.useState()[0],(null!==bi?bi.memoizedState:null)!==e&&(yi.flags|=1024),t}function Li(){var e=0!==Ci;return Ci=0,e}function Ai(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ii(e){if(Si){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Si=!1}vi=0,wi=bi=yi=null,ki=!1,_i=Ci=0,Pi=null}function Di(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===wi?yi.memoizedState=wi=e:wi=wi.next=e,wi}function $i(){if(null===bi){var e=yi.alternate;e=null!==e?e.memoizedState:null}else e=bi.next;var t=null===wi?yi.memoizedState:wi.next;if(null!==t)wi=t,bi=e;else{if(null===e){if(null===yi.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(bi=e).memoizedState,baseState:bi.baseState,baseQueue:bi.baseQueue,queue:bi.queue,next:null},null===wi?yi.memoizedState=wi=e:wi=wi.next=e}return wi}function Mi(e){var t=_i;return _i+=1,null===Pi&&(Pi=[]),e=Xa(Pi,e,t),t=yi,null===(null===wi?t.memoizedState:wi.next)&&(t=t.alternate,O.H=null===t||null===t.memoizedState?qo:Ko),e}function Wi(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return Mi(e);if(e.$$typeof===w)return _a(e)}throw Error(o(438,String(e)))}function Bi(e){var t=null,n=yi.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=yi.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},yi.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=T;return t.index++,n}function Hi(e,t){return"function"===typeof t?t(e):t}function Ui(e){return Vi($i(),bi,e)}function Vi(e,t,n){var r=e.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=n;var a=e.baseQueue,i=r.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}t.baseQueue=a=i,r.pending=null}if(i=e.baseState,null===a)e.memoizedState=i;else{var s=l=null,u=null,c=t=a.next,d=!1;do{var f=-536870913&c.lane;if(f!==c.lane?(iu&f)===f:(vi&f)===f){var p=c.revertLane;if(0===p)null!==u&&(u=u.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Ia&&(d=!0);else{if((vi&p)===p){c=c.next,p===Ia&&(d=!0);continue}f={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(s=u=f,l=i):u=u.next=f,yi.lanes|=p,pu|=p}f=c.action,Ei&&n(i,f),i=c.hasEagerState?c.eagerState:n(i,f)}else p={lane:f,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(s=u=p,l=i):u=u.next=p,yi.lanes|=f,pu|=f;c=c.next}while(null!==c&&c!==t);if(null===u?l=i:u.next=s,!Gn(i,e.memoizedState)&&(Pl=!0,d&&null!==(n=Da)))throw n;e.memoizedState=i,e.baseState=l,e.baseQueue=u,r.lastRenderedState=i}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function qi(e){var t=$i(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);Gn(i,t.memoizedState)||(Pl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ki(e,t,n){var r=yi,a=$i(),i=ia;if(i){if(void 0===n)throw Error(o(407));n=n()}else n=t();var l=!Gn((bi||a).memoizedState,n);if(l&&(a.memoizedState=n,Pl=!0),a=a.queue,xo(2048,8,Yi.bind(null,r,a,e),[e]),a.getSnapshot!==t||l||null!==wi&&1&wi.memoizedState.tag){if(r.flags|=2048,ho(9,{destroy:void 0,resource:void 0},Gi.bind(null,r,a,n,t),null),null===ru)throw Error(o(349));i||0!==(124&vi)||Qi(r,t,n)}return n}function Qi(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=yi.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},yi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Gi(e,t,n,r){t.value=n,t.getSnapshot=r,Xi(t)&&Ji(e)}function Yi(e,t,n){return n(function(){Xi(t)&&Ji(e)})}function Xi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gn(e,n)}catch(r){return!0}}function Ji(e){var t=jr(e,2);null!==t&&Au(t,e,2)}function Zi(e){var t=Di();if("function"===typeof e){var n=e;if(e=n(),Ei){fe(!0);try{n()}finally{fe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},t}function eo(e,t,n,r){return e.baseState=n,Vi(e,bi,"function"===typeof r?r:Hi)}function to(e,t,n,r,a){if(Bo(e))throw Error(o(485));if(null!==(e=t.action)){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==O.T?n(!0):i.isTransition=!1,r(i),null===(n=t.pending)?(i.next=t.pending=i,no(t,i)):(i.next=n.next,t.pending=n.next=i)}}function no(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var i=O.T,o={};O.T=o;try{var l=n(a,r),s=O.S;null!==s&&s(o,l),ro(e,t,l)}catch(u){io(e,t,u)}finally{O.T=i}}else try{ro(e,t,i=n(a,r))}catch(c){io(e,t,c)}}function ro(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){ao(e,t,n)},function(n){return io(e,t,n)}):ao(e,t,n)}function ao(e,t,n){t.status="fulfilled",t.value=n,oo(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,no(e,n)))}function io(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,oo(t),t=t.next}while(t!==r)}e.action=null}function oo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function lo(e,t){return t}function so(e,t){if(ia){var n=ru.formState;if(null!==n){e:{var r=yi;if(ia){if(aa){t:{for(var a=aa,i=la;8!==a.nodeType;){if(!i){a=null;break t}if(null===(a=xd(a.nextSibling))){a=null;break t}}a="F!"===(i=a.data)||"F"===i?a:null}if(a){aa=xd(a.nextSibling),r="F!"===a.data;break e}}ua(r)}r=!1}r&&(t=n[0])}}return(n=Di()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:t},n.queue=r,n=$o.bind(null,yi,r),r.dispatch=n,r=Zi(!1),i=Wo.bind(null,yi,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=Di()).queue=a,n=to.bind(null,yi,a,i,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function uo(e){return co($i(),bi,e)}function co(e,t,n){if(t=Vi(e,t,lo)[0],e=Ui(Hi)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=Mi(t)}catch(o){if(o===Va)throw Ka;throw o}else r=t;var a=(t=$i()).queue,i=a.dispatch;return n!==t.memoizedState&&(yi.flags|=2048,ho(9,{destroy:void 0,resource:void 0},fo.bind(null,a,n),null)),[r,i,e]}function fo(e,t){e.action=t}function po(e){var t=$i(),n=bi;if(null!==n)return co(t,n,e);$i(),t=t.memoizedState;var r=(n=$i()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ho(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=yi.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},yi.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function mo(){return $i().memoizedState}function go(e,t,n,r){var a=Di();r=void 0===r?null:r,yi.flags|=e,a.memoizedState=ho(1|t,{destroy:void 0,resource:void 0},n,r)}function xo(e,t,n,r){var a=$i();r=void 0===r?null:r;var i=a.memoizedState.inst;null!==bi&&null!==r&&zi(r,bi.memoizedState.deps)?a.memoizedState=ho(t,i,n,r):(yi.flags|=e,a.memoizedState=ho(1|t,i,n,r))}function vo(e,t){go(8390656,8,e,t)}function yo(e,t){xo(2048,8,e,t)}function bo(e,t){return xo(4,2,e,t)}function wo(e,t){return xo(4,4,e,t)}function So(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function ko(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,xo(4,4,So.bind(null,t,e),n)}function Eo(){}function Co(e,t){var n=$i();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&zi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _o(e,t){var n=$i();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&zi(t,r[1]))return r[0];if(r=e(),Ei){fe(!0);try{e()}finally{fe(!1)}}return n.memoizedState=[r,t],r}function Po(e,t,n){return void 0===n||0!==(1073741824&vi)?e.memoizedState=t:(e.memoizedState=n,e=Lu(),yi.lanes|=e,pu|=e,n)}function To(e,t,n,r){return Gn(n,t)?n:null!==pi.current?(e=Po(e,n,r),Gn(e,t)||(Pl=!0),e):0===(42&vi)?(Pl=!0,e.memoizedState=n):(e=Lu(),yi.lanes|=e,pu|=e,t)}function Fo(e,t,n,r,a){var i=L.p;L.p=0!==i&&8>i?i:8;var o=O.T,l={};O.T=l,Wo(e,!1,t,n);try{var s=a(),u=O.S;if(null!==u&&u(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)Mo(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(s,r),Ou());else Mo(e,t,r,Ou())}catch(c){Mo(e,t,{then:function(){},status:"rejected",reason:c},Ou())}finally{L.p=i,O.T=o}}function zo(){}function jo(e,t,n,r){if(5!==e.tag)throw Error(o(476));var a=No(e).queue;Fo(e,a,t,A,null===n?zo:function(){return Ro(e),n(r)})}function No(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:A,baseState:A,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:A},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function Ro(e){Mo(e,No(e).next.queue,{},Ou())}function Oo(){return _a(Qd)}function Lo(){return $i().memoizedState}function Ao(){return $i().memoizedState}function Io(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Ou(),r=ii(t,e=ai(n),n);return null!==r&&(Au(r,t,n),oi(r,t,n)),t={cache:Ra()},void(e.payload=t)}t=t.return}}function Do(e,t,n){var r=Ou();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Bo(e)?Ho(t,n):null!==(n=zr(e,t,n,r))&&(Au(n,e,r),Uo(n,t,r))}function $o(e,t,n){Mo(e,t,n,Ou())}function Mo(e,t,n,r){var a={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bo(e))Ho(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,Gn(l,o))return Fr(e,t,a,0),null===ru&&Tr(),!1}catch(s){}if(null!==(n=zr(e,t,a,r)))return Au(n,e,r),Uo(n,t,r),!0}return!1}function Wo(e,t,n,r){if(r={lane:2,revertLane:Fc(),action:r,hasEagerState:!1,eagerState:null,next:null},Bo(e)){if(t)throw Error(o(479))}else null!==(t=zr(e,n,r,2))&&Au(t,e,2)}function Bo(e){var t=e.alternate;return e===yi||null!==t&&t===yi}function Ho(e,t){ki=Si=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uo(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pe(e,n)}}var Vo={readContext:_a,use:Wi,useCallback:Fi,useContext:Fi,useEffect:Fi,useImperativeHandle:Fi,useLayoutEffect:Fi,useInsertionEffect:Fi,useMemo:Fi,useReducer:Fi,useRef:Fi,useState:Fi,useDebugValue:Fi,useDeferredValue:Fi,useTransition:Fi,useSyncExternalStore:Fi,useId:Fi,useHostTransitionStatus:Fi,useFormState:Fi,useActionState:Fi,useOptimistic:Fi,useMemoCache:Fi,useCacheRefresh:Fi},qo={readContext:_a,use:Wi,useCallback:function(e,t){return Di().memoizedState=[e,void 0===t?null:t],e},useContext:_a,useEffect:vo,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,go(4194308,4,So.bind(null,t,e),n)},useLayoutEffect:function(e,t){return go(4194308,4,e,t)},useInsertionEffect:function(e,t){go(4,2,e,t)},useMemo:function(e,t){var n=Di();t=void 0===t?null:t;var r=e();if(Ei){fe(!0);try{e()}finally{fe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Di();if(void 0!==n){var a=n(t);if(Ei){fe(!0);try{n(t)}finally{fe(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=Do.bind(null,yi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Di().memoizedState=e},useState:function(e){var t=(e=Zi(e)).queue,n=$o.bind(null,yi,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Eo,useDeferredValue:function(e,t){return Po(Di(),e,t)},useTransition:function(){var e=Zi(!1);return e=Fo.bind(null,yi,e.queue,!0,!1),Di().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=yi,a=Di();if(ia){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===ru)throw Error(o(349));0!==(124&iu)||Qi(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,vo(Yi.bind(null,r,i,e),[e]),r.flags|=2048,ho(9,{destroy:void 0,resource:void 0},Gi.bind(null,r,i,n,t),null),n},useId:function(){var e=Di(),t=ru.identifierPrefix;if(ia){var n=Jr;t="\xab"+t+"R"+(n=(Xr&~(1<<32-pe(Xr)-1)).toString(32)+n),0<(n=Ci++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=Ti++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:Oo,useFormState:so,useActionState:so,useOptimistic:function(e){var t=Di();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Wo.bind(null,yi,!0,n),n.dispatch=t,[e,t]},useMemoCache:Bi,useCacheRefresh:function(){return Di().memoizedState=Io.bind(null,yi)}},Ko={readContext:_a,use:Wi,useCallback:Co,useContext:_a,useEffect:yo,useImperativeHandle:ko,useInsertionEffect:bo,useLayoutEffect:wo,useMemo:_o,useReducer:Ui,useRef:mo,useState:function(){return Ui(Hi)},useDebugValue:Eo,useDeferredValue:function(e,t){return To($i(),bi.memoizedState,e,t)},useTransition:function(){var e=Ui(Hi)[0],t=$i().memoizedState;return["boolean"===typeof e?e:Mi(e),t]},useSyncExternalStore:Ki,useId:Lo,useHostTransitionStatus:Oo,useFormState:uo,useActionState:uo,useOptimistic:function(e,t){return eo($i(),0,e,t)},useMemoCache:Bi,useCacheRefresh:Ao},Qo={readContext:_a,use:Wi,useCallback:Co,useContext:_a,useEffect:yo,useImperativeHandle:ko,useInsertionEffect:bo,useLayoutEffect:wo,useMemo:_o,useReducer:qi,useRef:mo,useState:function(){return qi(Hi)},useDebugValue:Eo,useDeferredValue:function(e,t){var n=$i();return null===bi?Po(n,e,t):To(n,bi.memoizedState,e,t)},useTransition:function(){var e=qi(Hi)[0],t=$i().memoizedState;return["boolean"===typeof e?e:Mi(e),t]},useSyncExternalStore:Ki,useId:Lo,useHostTransitionStatus:Oo,useFormState:po,useActionState:po,useOptimistic:function(e,t){var n=$i();return null!==bi?eo(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Bi,useCacheRefresh:Ao},Go=null,Yo=0;function Xo(e){var t=Yo;return Yo+=1,null===Go&&(Go=[]),Xa(Go,e,t)}function Jo(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Zo(e,t){if(t.$$typeof===p)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function el(e){return(0,e._init)(e._payload)}function tl(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=Dr(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Br(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===g?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===_&&el(i)===t.type)?(Jo(t=a(t,n.props),n),t.return=e,t):(Jo(t=Mr(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Hr(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Wr(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Br(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case h:return Jo(n=Mr(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case m:return(t=Hr(t,e.mode,n)).return=e,t;case _:return f(e,t=(0,t._init)(t._payload),n)}if(R(t)||z(t))return(t=Wr(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return f(e,Xo(t),n);if(t.$$typeof===w)return f(e,Pa(e,t),n);Zo(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case h:return n.key===a?u(e,t,n,r):null;case m:return n.key===a?c(e,t,n,r):null;case _:return p(e,t,n=(a=n._init)(n._payload),r)}if(R(n)||z(n))return null!==a?null:d(e,t,n,r,null);if("function"===typeof n.then)return p(e,t,Xo(n),r);if(n.$$typeof===w)return p(e,t,Pa(e,n),r);Zo(e,n)}return null}function x(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case h:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case m:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case _:return x(e,t,n,r=(0,r._init)(r._payload),a)}if(R(r)||z(r))return d(t,e=e.get(n)||null,r,a,null);if("function"===typeof r.then)return x(e,t,n,Xo(r),a);if(r.$$typeof===w)return x(e,t,n,Pa(t,r),a);Zo(t,r)}return null}function v(s,u,c,d){if("object"===typeof c&&null!==c&&c.type===g&&null===c.key&&(c=c.props.children),"object"===typeof c&&null!==c){switch(c.$$typeof){case h:e:{for(var y=c.key;null!==u;){if(u.key===y){if((y=c.type)===g){if(7===u.tag){n(s,u.sibling),(d=a(u,c.props.children)).return=s,s=d;break e}}else if(u.elementType===y||"object"===typeof y&&null!==y&&y.$$typeof===_&&el(y)===u.type){n(s,u.sibling),Jo(d=a(u,c.props),c),d.return=s,s=d;break e}n(s,u);break}t(s,u),u=u.sibling}c.type===g?((d=Wr(c.props.children,s.mode,d,c.key)).return=s,s=d):(Jo(d=Mr(c.type,c.key,c.props,null,s.mode,d),c),d.return=s,s=d)}return l(s);case m:e:{for(y=c.key;null!==u;){if(u.key===y){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(s,u.sibling),(d=a(u,c.children||[])).return=s,s=d;break e}n(s,u);break}t(s,u),u=u.sibling}(d=Hr(c,s.mode,d)).return=s,s=d}return l(s);case _:return v(s,u,c=(y=c._init)(c._payload),d)}if(R(c))return function(a,o,l,s){for(var u=null,c=null,d=o,h=o=0,m=null;null!==d&&h<l.length;h++){d.index>h?(m=d,d=null):m=d.sibling;var g=p(a,d,l[h],s);if(null===g){null===d&&(d=m);break}e&&d&&null===g.alternate&&t(a,d),o=i(g,o,h),null===c?u=g:c.sibling=g,c=g,d=m}if(h===l.length)return n(a,d),ia&&Zr(a,h),u;if(null===d){for(;h<l.length;h++)null!==(d=f(a,l[h],s))&&(o=i(d,o,h),null===c?u=d:c.sibling=d,c=d);return ia&&Zr(a,h),u}for(d=r(d);h<l.length;h++)null!==(m=x(d,a,h,l[h],s))&&(e&&null!==m.alternate&&d.delete(null===m.key?h:m.key),o=i(m,o,h),null===c?u=m:c.sibling=m,c=m);return e&&d.forEach(function(e){return t(a,e)}),ia&&Zr(a,h),u}(s,u,c,d);if(z(c)){if("function"!==typeof(y=z(c)))throw Error(o(150));return function(a,l,s,u){if(null==s)throw Error(o(151));for(var c=null,d=null,h=l,m=l=0,g=null,v=s.next();null!==h&&!v.done;m++,v=s.next()){h.index>m?(g=h,h=null):g=h.sibling;var y=p(a,h,v.value,u);if(null===y){null===h&&(h=g);break}e&&h&&null===y.alternate&&t(a,h),l=i(y,l,m),null===d?c=y:d.sibling=y,d=y,h=g}if(v.done)return n(a,h),ia&&Zr(a,m),c;if(null===h){for(;!v.done;m++,v=s.next())null!==(v=f(a,v.value,u))&&(l=i(v,l,m),null===d?c=v:d.sibling=v,d=v);return ia&&Zr(a,m),c}for(h=r(h);!v.done;m++,v=s.next())null!==(v=x(h,a,m,v.value,u))&&(e&&null!==v.alternate&&h.delete(null===v.key?m:v.key),l=i(v,l,m),null===d?c=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),ia&&Zr(a,m),c}(s,u,c=y.call(c),d)}if("function"===typeof c.then)return v(s,u,Xo(c),d);if(c.$$typeof===w)return v(s,u,Pa(s,c),d);Zo(s,c)}return"string"===typeof c&&""!==c||"number"===typeof c||"bigint"===typeof c?(c=""+c,null!==u&&6===u.tag?(n(s,u.sibling),(d=a(u,c)).return=s,s=d):(n(s,u),(d=Br(c,s.mode,d)).return=s,s=d),l(s)):n(s,u)}return function(e,t,n,r){try{Yo=0;var a=v(e,t,n,r);return Go=null,a}catch(o){if(o===Va||o===Ka)throw o;var i=Ar(29,o,null,e.mode);return i.lanes=r,i.return=e,i}}}var nl=tl(!0),rl=tl(!1),al=$(null),il=null;function ol(e){var t=e.alternate;W(cl,1&cl.current),W(al,e),null===il&&(null===t||null!==pi.current||null!==t.memoizedState)&&(il=e)}function ll(e){if(22===e.tag){if(W(cl,cl.current),W(al,e),null===il){var t=e.alternate;null!==t&&null!==t.memoizedState&&(il=e)}}else sl()}function sl(){W(cl,cl.current),W(al,al.current)}function ul(e){M(al),il===e&&(il=null),M(cl)}var cl=$(0);function dl(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||gd(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function fl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:f({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var pl={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ou(),a=ai(r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=ii(e,a,r))&&(Au(t,e,r),oi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ou(),a=ai(r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=ii(e,a,r))&&(Au(t,e,r),oi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ou(),r=ai(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=ii(e,r,n))&&(Au(t,e,n),oi(t,e,n))}};function hl(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!Yn(n,r)||!Yn(a,i))}function ml(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pl.enqueueReplaceState(t,t.state,null)}function gl(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=f({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}var xl="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function vl(e){xl(e)}function yl(e){console.error(e)}function bl(e){xl(e)}function wl(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Sl(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function kl(e,t,n){return(n=ai(n)).tag=3,n.payload={element:null},n.callback=function(){wl(e,t)},n}function El(e){return(e=ai(e)).tag=3,e}function Cl(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"===typeof a){var i=r.value;e.payload=function(){return a(i)},e.callback=function(){Sl(t,n,r)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){Sl(t,n,r),"function"!==typeof a&&(null===Eu?Eu=new Set([this]):Eu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var _l=Error(o(461)),Pl=!1;function Tl(e,t,n,r){t.child=null===e?rl(t,null,n,r):nl(t,e.child,n,r)}function Fl(e,t,n,r,a){n=n.render;var i=t.ref;if("ref"in r){var o={};for(var l in r)"ref"!==l&&(o[l]=r[l])}else o=r;return Ca(t),r=ji(e,t,n,o,i,a),l=Li(),null===e||Pl?(ia&&l&&ta(t),t.flags|=1,Tl(e,t,r,a),t.child):(Ai(e,t,a),Gl(e,t,a))}function zl(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||Ir(i)||void 0!==i.defaultProps||null!==n.compare?((e=Mr(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,jl(e,t,i,r,a))}if(i=e.child,!Yl(e,a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:Yn)(o,r)&&e.ref===t.ref)return Gl(e,t,a)}return t.flags|=1,(e=Dr(i,r)).ref=t.ref,e.return=t,t.child=e}function jl(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(Yn(i,r)&&e.ref===t.ref){if(Pl=!1,t.pendingProps=r=i,!Yl(e,a))return t.lanes=e.lanes,Gl(e,t,a);0!==(131072&e.flags)&&(Pl=!0)}}return Ll(e,t,n,r,a)}function Nl(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0!==(128&t.flags)){if(r=null!==i?i.baseLanes|n:n,null!==e){for(a=t.child=e.child,i=0;null!==a;)i=i|a.lanes|a.childLanes,a=a.sibling;t.childLanes=i&~r}else t.childLanes=0,t.child=null;return Rl(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Rl(e,t,null!==i?i.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ha(0,null!==i?i.cachePool:null),null!==i?mi(t,i):gi(),ll(t)}else null!==i?(Ha(0,i.cachePool),mi(t,i),sl(),t.memoizedState=null):(null!==e&&Ha(0,null),gi(),sl());return Tl(e,t,a,n),t.child}function Rl(e,t,n,r){var a=Ba();return a=null===a?null:{parent:Na._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},null!==e&&Ha(0,null),gi(),ll(t),null!==e&&ka(e,t,r,!0),null}function Ol(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Ll(e,t,n,r,a){return Ca(t),n=ji(e,t,n,r,void 0,a),r=Li(),null===e||Pl?(ia&&r&&ta(t),t.flags|=1,Tl(e,t,n,a),t.child):(Ai(e,t,a),Gl(e,t,a))}function Al(e,t,n,r,a,i){return Ca(t),t.updateQueue=null,n=Ri(t,r,n,a),Ni(e),r=Li(),null===e||Pl?(ia&&r&&ta(t),t.flags|=1,Tl(e,t,n,i),t.child):(Ai(e,t,i),Gl(e,t,i))}function Il(e,t,n,r,a){if(Ca(t),null===t.stateNode){var i=Or,o=n.contextType;"object"===typeof o&&null!==o&&(i=_a(o)),i=new n(r,i),t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,i.updater=pl,t.stateNode=i,i._reactInternals=t,(i=t.stateNode).props=r,i.state=t.memoizedState,i.refs={},ni(t),o=n.contextType,i.context="object"===typeof o&&null!==o?_a(o):Or,i.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&(fl(t,n,o,r),i.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(o=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),o!==i.state&&pl.enqueueReplaceState(i,i.state,null),ci(t,r,i,a),ui(),i.state=t.memoizedState),"function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){i=t.stateNode;var l=t.memoizedProps,s=gl(n,l);i.props=s;var u=i.context,c=n.contextType;o=Or,"object"===typeof c&&null!==c&&(o=_a(c));var d=n.getDerivedStateFromProps;c="function"===typeof d||"function"===typeof i.getSnapshotBeforeUpdate,l=t.pendingProps!==l,c||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l||u!==o)&&ml(t,i,r,o),ti=!1;var f=t.memoizedState;i.state=f,ci(t,r,i,a),ui(),u=t.memoizedState,l||f!==u||ti?("function"===typeof d&&(fl(t,n,d,r),u=t.memoizedState),(s=ti||hl(t,n,s,r,f,u,o))?(c||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=o,r=s):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,ri(e,t),c=gl(n,o=t.memoizedProps),i.props=c,d=t.pendingProps,f=i.context,u=n.contextType,s=Or,"object"===typeof u&&null!==u&&(s=_a(u)),(u="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(o!==d||f!==s)&&ml(t,i,r,s),ti=!1,f=t.memoizedState,i.state=f,ci(t,r,i,a),ui();var p=t.memoizedState;o!==d||f!==p||ti||null!==e&&null!==e.dependencies&&Ea(e.dependencies)?("function"===typeof l&&(fl(t,n,l,r),p=t.memoizedState),(c=ti||hl(t,n,c,r,f,p,s)||null!==e&&null!==e.dependencies&&Ea(e.dependencies))?(u||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,p,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,p,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),i.props=r,i.state=p,i.context=s,r=c):("function"!==typeof i.componentDidUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return i=r,Ol(e,t),r=0!==(128&t.flags),i||r?(i=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:i.render(),t.flags|=1,null!==e&&r?(t.child=nl(t,e.child,null,a),t.child=nl(t,null,n,a)):Tl(e,t,n,a),t.memoizedState=i.state,e=t.child):e=Gl(e,t,a),e}function Dl(e,t,n,r){return pa(),t.flags|=256,Tl(e,t,n,r),t.child}var $l={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ml(e){return{baseLanes:e,cachePool:Ua()}}function Wl(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=gu),e}function Bl(e,t,n){var r,a=t.pendingProps,i=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&cl.current)),r&&(i=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(ia){if(i?ol(t):sl(),ia){var s,u=aa;if(s=u){e:{for(s=u,u=la;8!==s.nodeType;){if(!u){u=null;break e}if(null===(s=xd(s.nextSibling))){u=null;break e}}u=s}null!==u?(t.memoizedState={dehydrated:u,treeContext:null!==Yr?{id:Xr,overflow:Jr}:null,retryLane:536870912,hydrationErrors:null},(s=Ar(18,null,null,0)).stateNode=u,s.return=t,t.child=s,ra=t,aa=null,s=!0):s=!1}s||ua(t)}if(null!==(u=t.memoizedState)&&null!==(u=u.dehydrated))return gd(u)?t.lanes=32:t.lanes=536870912,null;ul(t)}return u=a.children,a=a.fallback,i?(sl(),u=Ul({mode:"hidden",children:u},i=t.mode),a=Wr(a,i,n,null),u.return=t,a.return=t,u.sibling=a,t.child=u,(i=t.child).memoizedState=Ml(n),i.childLanes=Wl(e,r,n),t.memoizedState=$l,a):(ol(t),Hl(t,u))}if(null!==(s=e.memoizedState)&&null!==(u=s.dehydrated)){if(l)256&t.flags?(ol(t),t.flags&=-257,t=Vl(e,t,n)):null!==t.memoizedState?(sl(),t.child=e.child,t.flags|=128,t=null):(sl(),i=a.fallback,u=t.mode,a=Ul({mode:"visible",children:a.children},u),(i=Wr(i,u,n,null)).flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,nl(t,e.child,null,n),(a=t.child).memoizedState=Ml(n),a.childLanes=Wl(e,r,n),t.memoizedState=$l,t=i);else if(ol(t),gd(u)){if(r=u.nextSibling&&u.nextSibling.dataset)var c=r.dgst;r=c,(a=Error(o(419))).stack="",a.digest=r,ma({value:a,source:null,stack:null}),t=Vl(e,t,n)}else if(Pl||ka(e,t,n,!1),r=0!==(n&e.childLanes),Pl||r){if(null!==(r=ru)&&(0!==(a=0!==((a=0!==(42&(a=n&-n))?1:Te(a))&(r.suspendedLanes|n))?0:a)&&a!==s.retryLane))throw s.retryLane=a,jr(e,a),Au(r,e,a),_l;"$?"===u.data||Ku(),t=Vl(e,t,n)}else"$?"===u.data?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,aa=xd(u.nextSibling),ra=t,ia=!0,oa=null,la=!1,null!==e&&(Qr[Gr++]=Xr,Qr[Gr++]=Jr,Qr[Gr++]=Yr,Xr=e.id,Jr=e.overflow,Yr=t),(t=Hl(t,a.children)).flags|=4096);return t}return i?(sl(),i=a.fallback,u=t.mode,c=(s=e.child).sibling,(a=Dr(s,{mode:"hidden",children:a.children})).subtreeFlags=65011712&s.subtreeFlags,null!==c?i=Dr(c,i):(i=Wr(i,u,n,null)).flags|=2,i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,null===(u=e.child.memoizedState)?u=Ml(n):(null!==(s=u.cachePool)?(c=Na._currentValue,s=s.parent!==c?{parent:c,pool:c}:s):s=Ua(),u={baseLanes:u.baseLanes|n,cachePool:s}),i.memoizedState=u,i.childLanes=Wl(e,r,n),t.memoizedState=$l,a):(ol(t),e=(n=e.child).sibling,(n=Dr(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Hl(e,t){return(t=Ul({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Ul(e,t){return(e=Ar(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Vl(e,t,n){return nl(t,e.child,null,n),(e=Hl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ql(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),wa(e.return,t,n)}function Kl(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Ql(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(Tl(e,t,r.children,n),0!==(2&(r=cl.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ql(e,n,t);else if(19===e.tag)ql(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(W(cl,r),a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===dl(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Kl(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===dl(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Kl(t,!0,n,null,i);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),pu|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(ka(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Dr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Dr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Yl(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Ea(e))}function Xl(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Pl=!0;else{if(!Yl(e,n)&&0===(128&t.flags))return Pl=!1,function(e,t,n){switch(t.tag){case 3:q(t,t.stateNode.containerInfo),ya(0,Na,e.memoizedState.cache),pa();break;case 27:case 5:Q(t);break;case 4:q(t,t.stateNode.containerInfo);break;case 10:ya(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(ol(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Bl(e,t,n):(ol(t),null!==(e=Gl(e,t,n))?e.sibling:null);ol(t);break;case 19:var a=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(ka(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return Ql(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),W(cl,cl.current),r)break;return null;case 22:case 23:return t.lanes=0,Nl(e,t,n);case 24:ya(0,Na,e.memoizedState.cache)}return Gl(e,t,n)}(e,t,n);Pl=0!==(131072&e.flags)}else Pl=!1,ia&&0!==(1048576&t.flags)&&ea(t,Kr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,a=r._init;if(r=a(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((a=r.$$typeof)===S){t.tag=11,t=Fl(null,t,r,e,n);break e}if(a===C){t.tag=14,t=zl(null,t,r,e,n);break e}}throw t=N(r)||r,Error(o(306,t,""))}Ir(r)?(e=gl(r,e),t.tag=1,t=Il(null,t,r,e,n)):(t.tag=0,t=Ll(null,t,r,e,n))}return t;case 0:return Ll(e,t,t.type,t.pendingProps,n);case 1:return Il(e,t,r=t.type,a=gl(r,t.pendingProps),n);case 3:e:{if(q(t,t.stateNode.containerInfo),null===e)throw Error(o(387));r=t.pendingProps;var i=t.memoizedState;a=i.element,ri(e,t),ci(t,r,null,n);var l=t.memoizedState;if(r=l.cache,ya(0,Na,r),r!==i.cache&&Sa(t,[Na],n,!0),ui(),r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Dl(e,t,r,n);break e}if(r!==a){ma(a=Er(Error(o(424)),t)),t=Dl(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(aa=xd(e.firstChild),ra=t,ia=!0,oa=null,la=!0,n=rl(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pa(),r===a){t=Gl(e,t,n);break e}Tl(e,t,r,n)}t=t.child}return t;case 26:return Ol(e,t),null===e?(n=Td(t.type,null,t.pendingProps,null))?t.memoizedState=n:ia||(n=t.type,e=t.pendingProps,(r=rd(U.current).createElement(n))[Ne]=t,r[Re]=e,ed(r,n,e),Ve(r),t.stateNode=r):t.memoizedState=Td(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Q(t),null===e&&ia&&(r=t.stateNode=bd(t.type,t.pendingProps,U.current),ra=t,la=!0,a=aa,pd(t.type)?(vd=a,aa=xd(r.firstChild)):aa=a),Tl(e,t,t.pendingProps.children,n),Ol(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&ia&&((a=r=aa)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[$e])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(i=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((i=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var i=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===i)return e}if(null===(e=xd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,la))?(t.stateNode=r,ra=t,aa=xd(r.firstChild),la=!1,a=!0):a=!1),a||ua(t)),Q(t),a=t.type,i=t.pendingProps,l=null!==e?e.memoizedProps:null,r=i.children,od(a,i)?r=null:null!==l&&od(a,l)&&(t.flags|=32),null!==t.memoizedState&&(a=ji(e,t,Oi,null,null,n),Qd._currentValue=a),Ol(e,t),Tl(e,t,r,n),t.child;case 6:return null===e&&ia&&((e=n=aa)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=xd(e.nextSibling)))return null}return e}(n,t.pendingProps,la))?(t.stateNode=n,ra=t,aa=null,e=!0):e=!1),e||ua(t)),null;case 13:return Bl(e,t,n);case 4:return q(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=nl(t,null,r,n):Tl(e,t,r,n),t.child;case 11:return Fl(e,t,t.type,t.pendingProps,n);case 7:return Tl(e,t,t.pendingProps,n),t.child;case 8:case 12:return Tl(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ya(0,t.type,r.value),Tl(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Ca(t),r=r(a=_a(a)),t.flags|=1,Tl(e,t,r,n),t.child;case 14:return zl(e,t,t.type,t.pendingProps,n);case 15:return jl(e,t,t.type,t.pendingProps,n);case 19:return Ql(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Ul(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Dr(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Nl(e,t,n);case 24:return Ca(t),r=_a(Na),null===e?(null===(a=Ba())&&(a=ru,i=Ra(),a.pooledCache=i,i.refCount++,null!==i&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:r,cache:a},ni(t),ya(0,Na,a)):(0!==(e.lanes&n)&&(ri(e,t),ci(t,null,null,n),ui()),a=e.memoizedState,i=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),ya(0,Na,r)):(r=i.cache,ya(0,Na,r),r!==a.cache&&Sa(t,[Na],n,!0))),Tl(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Jl(e){e.flags|=4}function Zl(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Wd(t)){if(null!==(t=al.current)&&((4194048&iu)===iu?null!==il:(62914560&iu)!==iu&&0===(536870912&iu)||t!==il))throw Ja=Qa,qa;e.flags|=8192}}function es(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?ke():536870912,e.lanes|=t,xu|=t)}function ts(e,t){if(!ia)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ns(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=65011712&a.subtreeFlags,r|=65011712&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rs(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return ns(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ba(Na),K(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(fa(t)?Jl(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,ha())),ns(t),null;case 26:return n=t.memoizedState,null===e?(Jl(t),null!==n?(ns(t),Zl(t,n)):(ns(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Jl(t),ns(t),Zl(t,n)):(ns(t),t.flags&=-16777217):(e.memoizedProps!==r&&Jl(t),ns(t),t.flags&=-16777217),null;case 27:G(t),n=U.current;var a=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Jl(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return ns(t),null}e=B.current,fa(t)?ca(t):(e=bd(a,r,n),t.stateNode=e,Jl(t))}return ns(t),null;case 5:if(G(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Jl(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return ns(t),null}if(e=B.current,fa(t))ca(t);else{switch(a=rd(U.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?a.createElement(n,{is:r.is}):a.createElement(n)}}e[Ne]=t,e[Re]=r;e:for(a=t.child;null!==a;){if(5===a.tag||6===a.tag)e.appendChild(a.stateNode);else if(4!==a.tag&&27!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;null===a.sibling;){if(null===a.return||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(ed(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Jl(t)}}return ns(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Jl(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(e=U.current,fa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=ra))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ne]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Yc(e.nodeValue,n)))||ua(t)}else(e=rd(e).createTextNode(r))[Ne]=t,t.stateNode=e}return ns(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=fa(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[Ne]=t}else pa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ns(t),a=!1}else a=ha(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return 256&t.flags?(ul(t),t):(ul(t),null)}if(ul(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool);var i=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(i=r.memoizedState.cachePool.pool),i!==a&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),es(t,t.updateQueue),ns(t),null;case 4:return K(),null===e&&Mc(t.stateNode.containerInfo),ns(t),null;case 10:return ba(t.type),ns(t),null;case 19:if(M(cl),null===(a=t.memoizedState))return ns(t),null;if(r=0!==(128&t.flags),null===(i=a.rendering))if(r)ts(a,!1);else{if(0!==fu||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(i=dl(e))){for(t.flags|=128,ts(a,!1),e=i.updateQueue,t.updateQueue=e,es(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)$r(n,e),n=n.sibling;return W(cl,1&cl.current|2),t.child}e=e.sibling}null!==a.tail&&te()>Su&&(t.flags|=128,r=!0,ts(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=dl(i))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,es(t,e),ts(a,!0),null===a.tail&&"hidden"===a.tailMode&&!i.alternate&&!ia)return ns(t),null}else 2*te()-a.renderingStartTime>Su&&536870912!==n&&(t.flags|=128,r=!0,ts(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=a.last)?e.sibling=i:t.child=i,a.last=i)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=te(),t.sibling=null,e=cl.current,W(cl,r?1&e|2:1&e),t):(ns(t),null);case 22:case 23:return ul(t),xi(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(ns(t),6&t.subtreeFlags&&(t.flags|=8192)):ns(t),null!==(n=t.updateQueue)&&es(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&M(Wa),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ba(Na),ns(t),null;case 25:case 30:return null}throw Error(o(156,t.tag))}function as(e,t){switch(na(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ba(Na),K(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return G(t),null;case 13:if(ul(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));pa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return M(cl),null;case 4:return K(),null;case 10:return ba(t.type),null;case 22:case 23:return ul(t),xi(),null!==e&&M(Wa),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return ba(Na),null;default:return null}}function is(e,t){switch(na(t),t.tag){case 3:ba(Na),K();break;case 26:case 27:case 5:G(t);break;case 4:K();break;case 13:ul(t);break;case 19:M(cl);break;case 10:ba(t.type);break;case 22:case 23:ul(t),xi(),null!==e&&M(Wa);break;case 24:ba(Na)}}function os(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var i=n.create,o=n.inst;r=i(),o.destroy=r}n=n.next}while(n!==a)}}catch(l){cc(t,t.return,l)}}function ls(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var i=a.next;r=i;do{if((r.tag&e)===e){var o=r.inst,l=o.destroy;if(void 0!==l){o.destroy=void 0,a=t;var s=n,u=l;try{u()}catch(c){cc(a,s,c)}}}r=r.next}while(r!==i)}}catch(c){cc(t,t.return,c)}}function ss(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{fi(t,n)}catch(r){cc(e,e.return,r)}}}function us(e,t,n){n.props=gl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){cc(e,t,r)}}function cs(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(a){cc(e,t,a)}}function ds(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(a){cc(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(i){cc(e,t,i)}else n.current=null}function fs(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){cc(e,e.return,a)}}function ps(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,l=null,s=null,u=null,c=null,d=null;for(h in n){var f=n[h];if(n.hasOwnProperty(h)&&null!=f)switch(h){case"checked":case"value":break;case"defaultValue":u=f;default:r.hasOwnProperty(h)||Jc(e,t,h,null,r,f)}}for(var p in r){var h=r[p];if(f=n[p],r.hasOwnProperty(p)&&(null!=h||null!=f))switch(p){case"type":i=h;break;case"name":a=h;break;case"checked":c=h;break;case"defaultChecked":d=h;break;case"value":l=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(o(137,t));break;default:h!==f&&Jc(e,t,p,h,r,f)}}return void gt(e,l,s,u,c,d,i,a);case"select":for(i in h=l=s=p=null,n)if(u=n[i],n.hasOwnProperty(i)&&null!=u)switch(i){case"value":break;case"multiple":h=u;default:r.hasOwnProperty(i)||Jc(e,t,i,null,r,u)}for(a in r)if(i=r[a],u=n[a],r.hasOwnProperty(a)&&(null!=i||null!=u))switch(a){case"value":p=i;break;case"defaultValue":s=i;break;case"multiple":l=i;default:i!==u&&Jc(e,t,a,i,r,u)}return t=s,n=l,r=h,void(null!=p?yt(e,!!n,p,!1):!!r!==!!n&&(null!=t?yt(e,!!n,t,!0):yt(e,!!n,n?[]:"",!1)));case"textarea":for(s in h=p=null,n)if(a=n[s],n.hasOwnProperty(s)&&null!=a&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:Jc(e,t,s,null,r,a)}for(l in r)if(a=r[l],i=n[l],r.hasOwnProperty(l)&&(null!=a||null!=i))switch(l){case"value":p=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(o(91));break;default:a!==i&&Jc(e,t,l,a,r,i)}return void bt(e,p,h);case"option":for(var m in n)if(p=n[m],n.hasOwnProperty(m)&&null!=p&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else Jc(e,t,m,null,r,p);for(u in r)if(p=r[u],h=n[u],r.hasOwnProperty(u)&&p!==h&&(null!=p||null!=h))if("selected"===u)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else Jc(e,t,u,p,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g)&&Jc(e,t,g,null,r,p);for(c in r)if(p=r[c],h=n[c],r.hasOwnProperty(c)&&p!==h&&(null!=p||null!=h))switch(c){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(o(137,t));break;default:Jc(e,t,c,p,r,h)}return;default:if(_t(t)){for(var x in n)p=n[x],n.hasOwnProperty(x)&&void 0!==p&&!r.hasOwnProperty(x)&&Zc(e,t,x,void 0,r,p);for(d in r)p=r[d],h=n[d],!r.hasOwnProperty(d)||p===h||void 0===p&&void 0===h||Zc(e,t,d,p,r,h);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&null!=p&&!r.hasOwnProperty(v)&&Jc(e,t,v,null,r,p);for(f in r)p=r[f],h=n[f],!r.hasOwnProperty(f)||p===h||null==p&&null==h||Jc(e,t,f,p,r,h)}(r,e.type,n,t),r[Re]=t}catch(a){cc(e,e.return,a)}}function hs(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&pd(e.type)||4===e.tag}function ms(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||hs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&pd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function gs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Xc));else if(4!==r&&(27===r&&pd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(gs(e,t,n),e=e.sibling;null!==e;)gs(e,t,n),e=e.sibling}function xs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&pd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(xs(e,t,n),e=e.sibling;null!==e;)xs(e,t,n),e=e.sibling}function vs(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);ed(t,r,n),t[Ne]=e,t[Re]=n}catch(i){cc(e,e.return,i)}}var ys=!1,bs=!1,ws=!1,Ss="function"===typeof WeakSet?WeakSet:Set,ks=null;function Es(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Is(e,n),4&r&&os(5,n);break;case 1:if(Is(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(o){cc(n,n.return,o)}else{var a=gl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){cc(n,n.return,l)}}64&r&&ss(n),512&r&&cs(n,n.return);break;case 3:if(Is(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{fi(e,t)}catch(o){cc(n,n.return,o)}}break;case 27:null===t&&4&r&&vs(n);case 26:case 5:Is(e,n),null===t&&4&r&&fs(n),512&r&&cs(n,n.return);break;case 12:Is(e,n);break;case 13:Is(e,n),4&r&&zs(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=hc.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||ys)){t=null!==t&&null!==t.memoizedState||bs,a=ys;var i=bs;ys=r,(bs=t)&&!i?$s(e,n,0!==(8772&n.subtreeFlags)):Is(e,n),ys=a,bs=i}break;case 30:break;default:Is(e,n)}}function Cs(e){var t=e.alternate;null!==t&&(e.alternate=null,Cs(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Me(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _s=null,Ps=!1;function Ts(e,t,n){for(n=n.child;null!==n;)Fs(e,t,n),n=n.sibling}function Fs(e,t,n){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ce,n)}catch(i){}switch(n.tag){case 26:bs||ds(n,t),Ts(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:bs||ds(n,t);var r=_s,a=Ps;pd(n.type)&&(_s=n.stateNode,Ps=!1),Ts(e,t,n),wd(n.stateNode),_s=r,Ps=a;break;case 5:bs||ds(n,t);case 6:if(r=_s,a=Ps,_s=null,Ts(e,t,n),Ps=a,null!==(_s=r))if(Ps)try{(9===_s.nodeType?_s.body:"HTML"===_s.nodeName?_s.ownerDocument.body:_s).removeChild(n.stateNode)}catch(o){cc(n,t,o)}else try{_s.removeChild(n.stateNode)}catch(o){cc(n,t,o)}break;case 18:null!==_s&&(Ps?(hd(9===(e=_s).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Tf(e)):hd(_s,n.stateNode));break;case 4:r=_s,a=Ps,_s=n.stateNode.containerInfo,Ps=!0,Ts(e,t,n),_s=r,Ps=a;break;case 0:case 11:case 14:case 15:bs||ls(2,n,t),bs||ls(4,n,t),Ts(e,t,n);break;case 1:bs||(ds(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&us(n,t,r)),Ts(e,t,n);break;case 21:Ts(e,t,n);break;case 22:bs=(r=bs)||null!==n.memoizedState,Ts(e,t,n),bs=r;break;default:Ts(e,t,n)}}function zs(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Tf(e)}catch(n){cc(t,t.return,n)}}function js(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Ss),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Ss),t;default:throw Error(o(435,e.tag))}}(e);t.forEach(function(t){var r=mc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}function Ns(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:if(pd(s.type)){_s=s.stateNode,Ps=!1;break e}break;case 5:_s=s.stateNode,Ps=!1;break e;case 3:case 4:_s=s.stateNode.containerInfo,Ps=!0;break e}s=s.return}if(null===_s)throw Error(o(160));Fs(i,l,a),_s=null,Ps=!1,null!==(i=a.alternate)&&(i.return=null),a.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Os(t,e),t=t.sibling}var Rs=null;function Os(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ns(t,e),Ls(e),4&r&&(ls(3,e,e.return),os(3,e),ls(5,e,e.return));break;case 1:Ns(t,e),Ls(e),512&r&&(bs||null===n||ds(n,n.return)),64&r&&ys&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var a=Rs;if(Ns(t,e),Ls(e),512&r&&(bs||null===n||ds(n,n.return)),4&r){var i=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":(!(i=a.getElementsByTagName("title")[0])||i[$e]||i[Ne]||"http://www.w3.org/2000/svg"===i.namespaceURI||i.hasAttribute("itemprop"))&&(i=a.createElement(r),a.head.insertBefore(i,a.querySelector("head > title"))),ed(i,r,n),i[Ne]=e,Ve(i),r=i;break e;case"link":var l=$d("link","href",a).get(r+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((i=l[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&i.getAttribute("rel")===(null==n.rel?null:n.rel)&&i.getAttribute("title")===(null==n.title?null:n.title)&&i.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}ed(i=a.createElement(r),r,n),a.head.appendChild(i);break;case"meta":if(l=$d("meta","content",a).get(r+(n.content||"")))for(s=0;s<l.length;s++)if((i=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&i.getAttribute("name")===(null==n.name?null:n.name)&&i.getAttribute("property")===(null==n.property?null:n.property)&&i.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&i.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}ed(i=a.createElement(r),r,n),a.head.appendChild(i);break;default:throw Error(o(468,r))}i[Ne]=e,Ve(i),r=i}e.stateNode=r}else Md(a,e.type,e.stateNode);else e.stateNode=Od(a,r,e.memoizedProps);else i!==r?(null===i?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):i.count--,null===r?Md(a,e.type,e.stateNode):Od(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&ps(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ns(t,e),Ls(e),512&r&&(bs||null===n||ds(n,n.return)),null!==n&&4&r&&ps(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ns(t,e),Ls(e),512&r&&(bs||null===n||ds(n,n.return)),32&e.flags){a=e.stateNode;try{St(a,"")}catch(h){cc(e,e.return,h)}}4&r&&null!=e.stateNode&&ps(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(ws=!0);break;case 6:if(Ns(t,e),Ls(e),4&r){if(null===e.stateNode)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(h){cc(e,e.return,h)}}break;case 3:if(Dd=null,a=Rs,Rs=Ed(t.containerInfo),Ns(t,e),Rs=a,Ls(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Tf(t.containerInfo)}catch(h){cc(e,e.return,h)}ws&&(ws=!1,As(e));break;case 4:r=Rs,Rs=Ed(e.stateNode.containerInfo),Ns(t,e),Ls(e),Rs=r;break;case 12:default:Ns(t,e),Ls(e);break;case 13:Ns(t,e),Ls(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wu=te()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,js(e,r)));break;case 22:a=null!==e.memoizedState;var u=null!==n&&null!==n.memoizedState,c=ys,d=bs;if(ys=c||a,bs=d||u,Ns(t,e),bs=d,ys=c,Ls(e),8192&r)e:for(t=e.stateNode,t._visibility=a?-2&t._visibility:1|t._visibility,a&&(null===n||u||ys||bs||Ds(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){u=n=t;try{if(i=u.stateNode,a)"function"===typeof(l=i.style).setProperty?l.setProperty("display","none","important"):l.display="none";else{s=u.stateNode;var f=u.memoizedProps.style,p=void 0!==f&&null!==f&&f.hasOwnProperty("display")?f.display:null;s.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(h){cc(u,u.return,h)}}}else if(6===t.tag){if(null===n){u=t;try{u.stateNode.nodeValue=a?"":u.memoizedProps}catch(h){cc(u,u.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,js(e,n))));break;case 19:Ns(t,e),Ls(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,js(e,r)));case 30:case 21:}}function Ls(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(hs(r)){n=r;break}r=r.return}if(null==n)throw Error(o(160));switch(n.tag){case 27:var a=n.stateNode;xs(e,ms(e),a);break;case 5:var i=n.stateNode;32&n.flags&&(St(i,""),n.flags&=-33),xs(e,ms(e),i);break;case 3:case 4:var l=n.stateNode.containerInfo;gs(e,ms(e),l);break;default:throw Error(o(161))}}catch(s){cc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function As(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;As(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Is(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Es(e,t.alternate,t),t=t.sibling}function Ds(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ls(4,t,t.return),Ds(t);break;case 1:ds(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&us(t,t.return,n),Ds(t);break;case 27:wd(t.stateNode);case 26:case 5:ds(t,t.return),Ds(t);break;case 22:null===t.memoizedState&&Ds(t);break;default:Ds(t)}e=e.sibling}}function $s(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:$s(a,i,n),os(4,i);break;case 1:if($s(a,i,n),"function"===typeof(a=(r=i).stateNode).componentDidMount)try{a.componentDidMount()}catch(u){cc(r,r.return,u)}if(null!==(a=(r=i).updateQueue)){var l=r.stateNode;try{var s=a.shared.hiddenCallbacks;if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)di(s[a],l)}catch(u){cc(r,r.return,u)}}n&&64&o&&ss(i),cs(i,i.return);break;case 27:vs(i);case 26:case 5:$s(a,i,n),n&&null===r&&4&o&&fs(i),cs(i,i.return);break;case 12:$s(a,i,n);break;case 13:$s(a,i,n),n&&4&o&&zs(a,i);break;case 22:null===i.memoizedState&&$s(a,i,n),cs(i,i.return);break;case 30:break;default:$s(a,i,n)}t=t.sibling}}function Ms(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Oa(n))}function Ws(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Oa(e))}function Bs(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Hs(e,t,n,r),t=t.sibling}function Hs(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Bs(e,t,n,r),2048&a&&os(9,t);break;case 1:case 13:default:Bs(e,t,n,r);break;case 3:Bs(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Oa(e)));break;case 12:if(2048&a){Bs(e,t,n,r),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,l=i.onPostCommit;"function"===typeof l&&l(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){cc(t,t.return,s)}}else Bs(e,t,n,r);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,null!==t.memoizedState?2&i._visibility?Bs(e,t,n,r):Vs(e,t):2&i._visibility?Bs(e,t,n,r):(i._visibility|=2,Us(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&a&&Ms(o,t);break;case 24:Bs(e,t,n,r),2048&a&&Ws(t.alternate,t)}}function Us(e,t,n,r,a){for(a=a&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var i=e,o=t,l=n,s=r,u=o.flags;switch(o.tag){case 0:case 11:case 15:Us(i,o,l,s,a),os(8,o);break;case 23:break;case 22:var c=o.stateNode;null!==o.memoizedState?2&c._visibility?Us(i,o,l,s,a):Vs(i,o):(c._visibility|=2,Us(i,o,l,s,a)),a&&2048&u&&Ms(o.alternate,o);break;case 24:Us(i,o,l,s,a),a&&2048&u&&Ws(o.alternate,o);break;default:Us(i,o,l,s,a)}t=t.sibling}}function Vs(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:Vs(n,r),2048&a&&Ms(r.alternate,r);break;case 24:Vs(n,r),2048&a&&Ws(r.alternate,r);break;default:Vs(n,r)}t=t.sibling}}var qs=8192;function Ks(e){if(e.subtreeFlags&qs)for(e=e.child;null!==e;)Qs(e),e=e.sibling}function Qs(e){switch(e.tag){case 26:Ks(e),e.flags&qs&&null!==e.memoizedState&&function(e,t,n){if(null===Bd)throw Error(o(475));var r=Bd;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var a=Fd(n.href),i=e.querySelector(zd(a));if(i)return null!==(e=i._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Ud.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=i,void Ve(i);i=e.ownerDocument||e,n=jd(n),(a=Sd.get(a))&&Ad(n,a),Ve(i=i.createElement("link"));var l=i;l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),ed(i,"link",n),t.instance=i}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Ud.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(Rs,e.memoizedState,e.memoizedProps);break;case 5:default:Ks(e);break;case 3:case 4:var t=Rs;Rs=Ed(e.stateNode.containerInfo),Ks(e),Rs=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=qs,qs=16777216,Ks(e),qs=t):Ks(e))}}function Gs(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Ys(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];ks=r,Zs(r,e)}Gs(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Xs(e),e=e.sibling}function Xs(e){switch(e.tag){case 0:case 11:case 15:Ys(e),2048&e.flags&&ls(9,e,e.return);break;case 3:case 12:default:Ys(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Js(e)):Ys(e)}}function Js(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];ks=r,Zs(r,e)}Gs(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:ls(8,t,t.return),Js(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Js(t));break;default:Js(t)}e=e.sibling}}function Zs(e,t){for(;null!==ks;){var n=ks;switch(n.tag){case 0:case 11:case 15:ls(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Oa(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,ks=r;else e:for(n=e;null!==ks;){var a=(r=ks).sibling,i=r.return;if(Cs(r),r===n){ks=null;break e}if(null!==a){a.return=i,ks=a;break e}ks=i}}}var eu={getCacheForType:function(e){var t=_a(Na),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tu="function"===typeof WeakMap?WeakMap:Map,nu=0,ru=null,au=null,iu=0,ou=0,lu=null,su=!1,uu=!1,cu=!1,du=0,fu=0,pu=0,hu=0,mu=0,gu=0,xu=0,vu=null,yu=null,bu=!1,wu=0,Su=1/0,ku=null,Eu=null,Cu=0,_u=null,Pu=null,Tu=0,Fu=0,zu=null,ju=null,Nu=0,Ru=null;function Ou(){if(0!==(2&nu)&&0!==iu)return iu&-iu;if(null!==O.T){return 0!==Ia?Ia:Fc()}return ze()}function Lu(){0===gu&&(gu=0===(536870912&iu)||ia?Se():536870912);var e=al.current;return null!==e&&(e.flags|=32),gu}function Au(e,t,n){(e!==ru||2!==ou&&9!==ou)&&null===e.cancelPendingCommit||(Hu(e,0),Mu(e,iu,gu,!1)),Ce(e,n),0!==(2&nu)&&e===ru||(e===ru&&(0===(2&nu)&&(hu|=n),4===fu&&Mu(e,iu,gu,!1)),Sc(e))}function Iu(e,t,n){if(0!==(6&nu))throw Error(o(327));for(var r=!n&&0===(124&t)&&0===(t&e.expiredLanes)||be(e,t),a=r?function(e,t){var n=nu;nu|=2;var r=Vu(),a=qu();ru!==e||iu!==t?(ku=null,Su=te()+500,Hu(e,t)):uu=be(e,t);e:for(;;)try{if(0!==ou&&null!==au){t=au;var i=lu;t:switch(ou){case 1:ou=0,lu=null,Zu(e,t,i,1);break;case 2:case 9:if(Ga(i)){ou=0,lu=null,Ju(t);break}t=function(){2!==ou&&9!==ou||ru!==e||(ou=7),Sc(e)},i.then(t,t);break e;case 3:ou=7;break e;case 4:ou=5;break e;case 7:Ga(i)?(ou=0,lu=null,Ju(t)):(ou=0,lu=null,Zu(e,t,i,7));break;case 5:var l=null;switch(au.tag){case 26:l=au.memoizedState;case 5:case 27:var s=au;if(!l||Wd(l)){ou=0,lu=null;var u=s.sibling;if(null!==u)au=u;else{var c=s.return;null!==c?(au=c,ec(c)):au=null}break t}}ou=0,lu=null,Zu(e,t,i,5);break;case 6:ou=0,lu=null,Zu(e,t,i,6);break;case 8:Bu(),fu=6;break e;default:throw Error(o(462))}}Yu();break}catch(d){Uu(e,d)}return va=xa=null,O.H=r,O.A=a,nu=n,null!==au?0:(ru=null,iu=0,Tr(),fu)}(e,t):Qu(e,t,!0),i=r;;){if(0===a){uu&&!r&&Mu(e,t,0,!1);break}if(n=e.current.alternate,!i||$u(n)){if(2===a){if(i=t,e.errorRecoveryDisabledLanes&i)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;a=vu;var u=s.current.memoizedState.isDehydrated;if(u&&(Hu(s,l).flags|=256),2!==(l=Qu(s,l,!1))){if(cu&&!u){s.errorRecoveryDisabledLanes|=i,hu|=i,a=4;break e}i=yu,yu=a,null!==i&&(null===yu?yu=i:yu.push.apply(yu,i))}a=l}if(i=!1,2!==a)continue}}if(1===a){Hu(e,0),Mu(e,t,0,!0);break}e:{switch(r=e,i=a){case 0:case 1:throw Error(o(345));case 4:if((4194048&t)!==t)break;case 6:Mu(r,t,gu,!su);break e;case 2:yu=null;break;case 3:case 5:break;default:throw Error(o(329))}if((62914560&t)===t&&10<(a=wu+300-te())){if(Mu(r,t,gu,!su),0!==ye(r,0,!0))break e;r.timeoutHandle=sd(Du.bind(null,r,n,yu,ku,bu,t,gu,hu,xu,su,i,2,-0,0),a)}else Du(r,n,yu,ku,bu,t,gu,hu,xu,su,i,0,-0,0)}break}a=Qu(e,t,!1),i=!1}Sc(e)}function Du(e,t,n,r,a,i,l,s,u,c,d,f,p,h){if(e.timeoutHandle=-1,(8192&(f=t.subtreeFlags)||16785408===(16785408&f))&&(Bd={stylesheets:null,count:0,unsuspend:Hd},Qs(t),null!==(f=function(){if(null===Bd)throw Error(o(475));var e=Bd;return e.stylesheets&&0===e.count&&qd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&qd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=f(nc.bind(null,e,t,i,n,r,a,l,s,u,d,1,p,h)),void Mu(e,i,l,!c);nc(e,t,i,n,r,a,l,s,u)}function $u(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!Gn(i(),a))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mu(e,t,n,r){t&=~mu,t&=~hu,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var i=31-pe(a),o=1<<i;r[i]=-1,a&=~o}0!==n&&_e(e,n,t)}function Wu(){return 0!==(6&nu)||(kc(0,!1),!1)}function Bu(){if(null!==au){if(0===ou)var e=au.return;else va=xa=null,Ii(e=au),Go=null,Yo=0,e=au;for(;null!==e;)is(e.alternate,e),e=e.return;au=null}}function Hu(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,ud(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Bu(),ru=e,au=n=Dr(e.current,null),iu=t,ou=0,lu=null,su=!1,uu=be(e,t),cu=!1,xu=gu=mu=hu=pu=fu=0,yu=vu=null,bu=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-pe(r),i=1<<a;t|=e[a],r&=~i}return du=t,Tr(),n}function Uu(e,t){yi=null,O.H=Vo,t===Va||t===Ka?(t=Za(),ou=3):t===qa?(t=Za(),ou=4):ou=t===_l?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,lu=t,null===au&&(fu=1,wl(e,Er(t,e.current)))}function Vu(){var e=O.H;return O.H=Vo,null===e?Vo:e}function qu(){var e=O.A;return O.A=eu,e}function Ku(){fu=4,su||(4194048&iu)!==iu&&null!==al.current||(uu=!0),0===(134217727&pu)&&0===(134217727&hu)||null===ru||Mu(ru,iu,gu,!1)}function Qu(e,t,n){var r=nu;nu|=2;var a=Vu(),i=qu();ru===e&&iu===t||(ku=null,Hu(e,t)),t=!1;var o=fu;e:for(;;)try{if(0!==ou&&null!==au){var l=au,s=lu;switch(ou){case 8:Bu(),o=6;break e;case 3:case 2:case 9:case 6:null===al.current&&(t=!0);var u=ou;if(ou=0,lu=null,Zu(e,l,s,u),n&&uu){o=0;break e}break;default:u=ou,ou=0,lu=null,Zu(e,l,s,u)}}Gu(),o=fu;break}catch(c){Uu(e,c)}return t&&e.shellSuspendCounter++,va=xa=null,nu=r,O.H=a,O.A=i,null===au&&(ru=null,iu=0,Tr()),o}function Gu(){for(;null!==au;)Xu(au)}function Yu(){for(;null!==au&&!Z();)Xu(au)}function Xu(e){var t=Xl(e.alternate,e,du);e.memoizedProps=e.pendingProps,null===t?ec(e):au=t}function Ju(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Al(n,t,t.pendingProps,t.type,void 0,iu);break;case 11:t=Al(n,t,t.pendingProps,t.type.render,t.ref,iu);break;case 5:Ii(t);default:is(n,t),t=Xl(n,t=au=$r(t,du),du)}e.memoizedProps=e.pendingProps,null===t?ec(e):au=t}function Zu(e,t,n,r){va=xa=null,Ii(t),Go=null,Yo=0;var a=t.return;try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&ka(t,n,a,!0),null!==(n=al.current)){switch(n.tag){case 13:return null===il?Ku():null===n.alternate&&0===fu&&(fu=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Qa?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),dc(e,r,a)),!1;case 22:return n.flags|=65536,r===Qa?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),dc(e,r,a)),!1}throw Error(o(435,n.tag))}return dc(e,r,a),Ku(),!1}if(ia)return null!==(t=al.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==sa&&ma(Er(e=Error(o(422),{cause:r}),n))):(r!==sa&&ma(Er(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=Er(r,n),li(e,a=kl(e.stateNode,r,a)),4!==fu&&(fu=2)),!1;var i=Error(o(520),{cause:r});if(i=Er(i,n),null===vu?vu=[i]:vu.push(i),4!==fu&&(fu=2),null===t)return!0;r=Er(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,li(n,e=kl(n.stateNode,r,e)),!1;case 1:if(t=n.type,i=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==i&&"function"===typeof i.componentDidCatch&&(null===Eu||!Eu.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,Cl(a=El(a),e,n,r),li(n,a),!1}n=n.return}while(null!==n);return!1}(e,a,t,n,iu))return fu=1,wl(e,Er(n,e.current)),void(au=null)}catch(i){if(null!==a)throw au=a,i;return fu=1,wl(e,Er(n,e.current)),void(au=null)}32768&t.flags?(ia||1===r?e=!0:uu||0!==(536870912&iu)?e=!1:(su=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=al.current)&&13===r.tag&&(r.flags|=16384))),tc(t,e)):ec(t)}function ec(e){var t=e;do{if(0!==(32768&t.flags))return void tc(t,su);e=t.return;var n=rs(t.alternate,t,du);if(null!==n)return void(au=n);if(null!==(t=t.sibling))return void(au=t);au=t=e}while(null!==t);0===fu&&(fu=5)}function tc(e,t){do{var n=as(e.alternate,e);if(null!==n)return n.flags&=32767,void(au=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(au=e);au=e=n}while(null!==e);fu=6,au=null}function nc(e,t,n,r,a,i,l,s,u){e.cancelPendingCommit=null;do{lc()}while(0!==Cu);if(0!==(6&nu))throw Error(o(327));if(null!==t){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,function(e,t,n,r,a,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(n=o&~n;0<n;){var c=31-pe(n),d=1<<c;l[c]=0,s[c]=-1;var f=u[c];if(null!==f)for(u[c]=null,c=0;c<f.length;c++){var p=f[c];null!==p&&(p.lane&=-536870913)}n&=~d}0!==r&&_e(e,r,0),0!==i&&0===a&&0!==e.tag&&(e.suspendedLanes|=i&~(o&~t))}(e,n,i|=Pr,l,s,u),e===ru&&(au=ru=null,iu=0),Pu=t,_u=e,Tu=n,Fu=i,zu=a,ju=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,X(ie,function(){return sc(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=O.T,O.T=null,a=L.p,L.p=2,l=nu,nu|=4;try{!function(e,t){if(e=e.containerInfo,td=nf,tr(e=er(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(g){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==i||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===i&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:e,selectionRange:n},nf=!1,ks=t;null!==ks;)if(e=(t=ks).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,ks=e;else for(;null!==ks;){switch(i=(t=ks).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==i){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,r=n.stateNode;try{var m=gl(n.type,a,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(m,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(x){cc(n,n.return,x)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))md(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":md(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,ks=e;break}ks=t.return}}(e,t)}finally{nu=l,L.p=a,O.T=r}}Cu=1,rc(),ac(),ic()}}function rc(){if(1===Cu){Cu=0;var e=_u,t=Pu,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=O.T,O.T=null;var r=L.p;L.p=2;var a=nu;nu|=4;try{Os(t,e);var i=nd,o=er(e.containerInfo),l=i.focusedElem,s=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&Zn(l.ownerDocument.documentElement,l)){if(null!==s&&tr(l)){var u=s.start,c=s.end;if(void 0===c&&(c=u),"selectionStart"in l)l.selectionStart=u,l.selectionEnd=Math.min(c,l.value.length);else{var d=l.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),h=l.textContent.length,m=Math.min(s.start,h),g=void 0===s.end?m:Math.min(s.end,h);!p.extend&&m>g&&(o=g,g=m,m=o);var x=Jn(l,m),v=Jn(l,g);if(x&&v&&(1!==p.rangeCount||p.anchorNode!==x.node||p.anchorOffset!==x.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(x.node,x.offset),p.removeAllRanges(),m>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=l;p=p.parentNode;)1===p.nodeType&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<d.length;l++){var b=d[l];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}nf=!!td,nd=td=null}finally{nu=a,L.p=r,O.T=n}}e.current=t,Cu=2}}function ac(){if(2===Cu){Cu=0;var e=_u,t=Pu,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=O.T,O.T=null;var r=L.p;L.p=2;var a=nu;nu|=4;try{Es(e,t.alternate,t)}finally{nu=a,L.p=r,O.T=n}}Cu=3}}function ic(){if(4===Cu||3===Cu){Cu=0,ee();var e=_u,t=Pu,n=Tu,r=ju;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Cu=5:(Cu=0,Pu=_u=null,oc(e,e.pendingLanes));var a=e.pendingLanes;if(0===a&&(Eu=null),Fe(n),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ce,t,void 0,128===(128&t.current.flags))}catch(s){}if(null!==r){t=O.T,a=L.p,L.p=2,O.T=null;try{for(var i=e.onRecoverableError,o=0;o<r.length;o++){var l=r[o];i(l.value,{componentStack:l.stack})}}finally{O.T=t,L.p=a}}0!==(3&Tu)&&lc(),Sc(e),a=e.pendingLanes,0!==(4194090&n)&&0!==(42&a)?e===Ru?Nu++:(Nu=0,Ru=e):Nu=0,kc(0,!1)}}function oc(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Oa(t)))}function lc(e){return rc(),ac(),ic(),sc()}function sc(){if(5!==Cu)return!1;var e=_u,t=Fu;Fu=0;var n=Fe(Tu),r=O.T,a=L.p;try{L.p=32>n?32:n,O.T=null,n=zu,zu=null;var i=_u,l=Tu;if(Cu=0,Pu=_u=null,Tu=0,0!==(6&nu))throw Error(o(331));var s=nu;if(nu|=4,Xs(i.current),Hs(i,i.current,l,n),nu=s,kc(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ce,i)}catch(u){}return!0}finally{L.p=a,O.T=r,oc(e,t)}}function uc(e,t,n){t=Er(n,t),null!==(e=ii(e,t=kl(e.stateNode,t,2),2))&&(Ce(e,2),Sc(e))}function cc(e,t,n){if(3===e.tag)uc(e,e,n);else for(;null!==t;){if(3===t.tag){uc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Eu||!Eu.has(r))){e=Er(n,e),null!==(r=ii(t,n=El(2),2))&&(Cl(n,r,t,e),Ce(r,2),Sc(r));break}}t=t.return}}function dc(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new tu;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(cu=!0,a.add(n),e=fc.bind(null,e,t,n),t.then(e,e))}function fc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ru===e&&(iu&n)===n&&(4===fu||3===fu&&(62914560&iu)===iu&&300>te()-wu?0===(2&nu)&&Hu(e,0):mu|=n,xu===iu&&(xu=0)),Sc(e)}function pc(e,t){0===t&&(t=ke()),null!==(e=jr(e,t))&&(Ce(e,t),Sc(e))}function hc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),pc(e,n)}function mc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==r&&r.delete(t),pc(e,n)}var gc=null,xc=null,vc=!1,yc=!1,bc=!1,wc=0;function Sc(e){e!==xc&&null===e.next&&(null===xc?gc=xc=e:xc=xc.next=e),yc=!0,vc||(vc=!0,dd(function(){0!==(6&nu)?X(re,Ec):Cc()}))}function kc(e,t){if(!bc&&yc){bc=!0;do{for(var n=!1,r=gc;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;if(0===a)var i=0;else{var o=r.suspendedLanes,l=r.pingedLanes;i=(1<<31-pe(42|e)+1)-1,i=201326741&(i&=a&~(o&~l))?201326741&i|1:i?2|i:0}0!==i&&(n=!0,Tc(r,i))}else i=iu,0===(3&(i=ye(r,r===ru?i:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||be(r,i)||(n=!0,Tc(r,i));r=r.next}}while(n);bc=!1}}function Ec(){Cc()}function Cc(){yc=vc=!1;var e=0;0!==wc&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==ld&&(ld=e,!0);return ld=null,!1}()&&(e=wc),wc=0);for(var t=te(),n=null,r=gc;null!==r;){var a=r.next,i=_c(r,t);0===i?(r.next=null,null===n?gc=a:n.next=a,null===a&&(xc=n)):(n=r,(0!==e||0!==(3&i))&&(yc=!0)),r=a}kc(e,!1)}function _c(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=-62914561&e.pendingLanes;0<i;){var o=31-pe(i),l=1<<o,s=a[o];-1===s?0!==(l&n)&&0===(l&r)||(a[o]=we(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}if(n=iu,n=ye(e,e===(t=ru)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===ou||9===ou)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&J(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||be(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&J(r),Fe(n)){case 2:case 8:n=ae;break;case 32:default:n=ie;break;case 268435456:n=le}return r=Pc.bind(null,e),n=X(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&J(r),e.callbackPriority=2,e.callbackNode=null,2}function Pc(e,t){if(0!==Cu&&5!==Cu)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lc()&&e.callbackNode!==n)return null;var r=iu;return 0===(r=ye(e,e===ru?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Iu(e,r,t),_c(e,te()),null!=e.callbackNode&&e.callbackNode===n?Pc.bind(null,e):null)}function Tc(e,t){if(lc())return null;Iu(e,t,!0)}function Fc(){return 0===wc&&(wc=Se()),wc}function zc(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Ft(""+e)}function jc(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Nc=0;Nc<wr.length;Nc++){var Rc=wr[Nc];Sr(Rc.toLowerCase(),"on"+(Rc[0].toUpperCase()+Rc.slice(1)))}Sr(pr,"onAnimationEnd"),Sr(hr,"onAnimationIteration"),Sr(mr,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(gr,"onTransitionRun"),Sr(xr,"onTransitionStart"),Sr(vr,"onTransitionCancel"),Sr(yr,"onTransitionEnd"),Ge("onMouseEnter",["mouseout","mouseover"]),Ge("onMouseLeave",["mouseout","mouseover"]),Ge("onPointerEnter",["pointerout","pointerover"]),Ge("onPointerLeave",["pointerout","pointerover"]),Qe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lc=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oc));function Ac(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;i=l,a.currentTarget=u;try{i(a)}catch(c){xl(c)}a.currentTarget=null,i=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;i=l,a.currentTarget=u;try{i(a)}catch(c){xl(c)}a.currentTarget=null,i=s}}}}function Ic(e,t){var n=t[Le];void 0===n&&(n=t[Le]=new Set);var r=e+"__bubble";n.has(r)||(Wc(t,e,2,!1),n.add(r))}function Dc(e,t,n){var r=0;t&&(r|=4),Wc(n,e,r,t)}var $c="_reactListening"+Math.random().toString(36).slice(2);function Mc(e){if(!e[$c]){e[$c]=!0,qe.forEach(function(t){"selectionchange"!==t&&(Lc.has(t)||Dc(t,!1,e),Dc(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[$c]||(t[$c]=!0,Dc("selectionchange",!1,t))}}function Wc(e,t,n,r){switch(cf(t)){case 2:var a=rf;break;case 8:a=af;break;default:a=of}n=a.bind(null,t,n,e),a=void 0,!$t||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Bc(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===a)break;if(4===o)for(o=r.return;null!==o;){var u=o.tag;if((3===u||4===u)&&o.stateNode.containerInfo===a)return;o=o.return}for(;null!==l;){if(null===(o=We(l)))return;if(5===(u=o.tag)||6===u||26===u||27===u){r=i=o;continue e}l=l.parentNode}}r=r.return}At(function(){var r=i,a=jt(n),o=[];e:{var l=br.get(e);if(void 0!==l){var u=Zt,c=e;switch(e){case"keypress":if(0===Vt(n))break e;case"keydown":case"keyup":u=mn;break;case"focusin":c="focus",u=on;break;case"focusout":c="blur",u=on;break;case"beforeblur":case"afterblur":u=on;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=an;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=xn;break;case pr:case hr:case mr:u=ln;break;case yr:u=vn;break;case"scroll":case"scrollend":u=tn;break;case"wheel":u=yn;break;case"copy":case"cut":case"paste":u=sn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=gn;break;case"toggle":case"beforetoggle":u=bn}var d=0!==(4&t),f=!d&&("scroll"===e||"scrollend"===e),p=d?null!==l?l+"Capture":null:l;d=[];for(var h,m=r;null!==m;){var g=m;if(h=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===h||null===p||null!=(g=It(m,p))&&d.push(Hc(m,g,h)),f)break;m=m.return}0<d.length&&(l=new u(l,c,null,n,a),o.push({event:l,listeners:d}))}}if(0===(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===zt||!(c=n.relatedTarget||n.fromElement)||!We(c)&&!c[Oe])&&(u||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,u?(u=r,null!==(c=(c=n.relatedTarget||n.toElement)?We(c):null)&&(f=s(c),d=c.tag,c!==f||5!==d&&27!==d&&6!==d)&&(c=null)):(u=null,c=r),u!==c)){if(d=rn,g="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=gn,g="onPointerLeave",p="onPointerEnter",m="pointer"),f=null==u?l:He(u),h=null==c?l:He(c),(l=new d(g,m+"leave",u,n,a)).target=f,l.relatedTarget=h,g=null,We(a)===r&&((d=new d(p,m+"enter",c,n,a)).target=h,d.relatedTarget=f,g=d),f=g,u&&c)e:{for(p=c,m=0,h=d=u;h;h=Vc(h))m++;for(h=0,g=p;g;g=Vc(g))h++;for(;0<m-h;)d=Vc(d),m--;for(;0<h-m;)p=Vc(p),h--;for(;m--;){if(d===p||null!==p&&d===p.alternate)break e;d=Vc(d),p=Vc(p)}d=null}else d=null;null!==u&&qc(o,l,u,d,!1),null!==c&&null!==f&&qc(o,f,c,d,!0)}if("select"===(u=(l=r?He(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===u&&"file"===l.type)var x=Dn;else if(Nn(l))if($n)x=Qn;else{x=qn;var v=Vn}else!(u=l.nodeName)||"input"!==u.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&_t(r.elementType)&&(x=Dn):x=Kn;switch(x&&(x=x(e,r))?Rn(o,x,n,a):(v&&v(e,l,r),"focusout"===e&&r&&"number"===l.type&&null!=r.memoizedProps.value&&vt(l,"number",l.value)),v=r?He(r):window,e){case"focusin":(Nn(v)||"true"===v.contentEditable)&&(rr=v,ar=r,ir=null);break;case"focusout":ir=ar=rr=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,lr(o,n,a);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":lr(o,n,a)}var y;if(Sn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else zn?Tn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Cn&&"ko"!==n.locale&&(zn||"onCompositionStart"!==b?"onCompositionEnd"===b&&zn&&(y=Ut()):(Bt="value"in(Wt=a)?Wt.value:Wt.textContent,zn=!0)),0<(v=Uc(r,b)).length&&(b=new un(b,e,null,n,a),o.push({event:b,listeners:v}),y?b.data=y:null!==(y=Fn(n))&&(b.data=y))),(y=En?function(e,t){switch(e){case"compositionend":return Fn(t);case"keypress":return 32!==t.which?null:(Pn=!0,_n);case"textInput":return(e=t.data)===_n&&Pn?null:e;default:return null}}(e,n):function(e,t){if(zn)return"compositionend"===e||!Sn&&Tn(e,t)?(e=Ut(),Ht=Bt=Wt=null,zn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(b=Uc(r,"onBeforeInput")).length&&(v=new un("onBeforeInput","beforeinput",null,n,a),o.push({event:v,listeners:b}),v.data=y)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var i=zc((a[Re]||null).action),o=r.submitter;o&&null!==(t=(t=o[Re]||null)?zc(t.formAction):o.getAttribute("formAction"))&&(i=t,o=null);var l=new Zt("action","action",null,r,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==wc){var e=o?jc(a,o):new FormData(a);jo(n,{pending:!0,data:e,method:a.method,action:i},null,e)}}else"function"===typeof i&&(l.preventDefault(),e=o?jc(a,o):new FormData(a),jo(n,{pending:!0,data:e,method:a.method,action:i},i,e))},currentTarget:a}]})}}(o,e,r,n,a)}Ac(o,t)})}function Hc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Uc(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;if(5!==(a=a.tag)&&26!==a&&27!==a||null===i||(null!=(a=It(e,n))&&r.unshift(Hc(e,a,i)),null!=(a=It(e,t))&&r.push(Hc(e,a,i))),3===e.tag)return r;e=e.return}return[]}function Vc(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function qc(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===u||(s=u,a?null!=(u=It(n,i))&&o.unshift(Hc(n,u,s)):a||null!=(u=It(n,i))&&o.push(Hc(n,u,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Kc=/\r\n?/g,Qc=/\u0000|\uFFFD/g;function Gc(e){return("string"===typeof e?e:""+e).replace(Kc,"\n").replace(Qc,"")}function Yc(e,t){return t=Gc(t),Gc(e)===t}function Xc(){}function Jc(e,t,n,r,a,i){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||St(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&St(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,r);break;case"style":Ct(e,r,i);break;case"data":if("object"!==t){nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Ft(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof i&&("formAction"===n?("input"!==t&&Jc(e,t,"name",a.name,a,null),Jc(e,t,"formEncType",a.formEncType,a,null),Jc(e,t,"formMethod",a.formMethod,a,null),Jc(e,t,"formTarget",a.formTarget,a,null)):(Jc(e,t,"encType",a.encType,a,null),Jc(e,t,"method",a.method,a,null),Jc(e,t,"target",a.target,a,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Ft(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Xc);break;case"onScroll":null!=r&&Ic("scroll",e);break;case"onScrollEnd":null!=r&&Ic("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Ft(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Ic("beforetoggle",e),Ic("toggle",e),tt(e,"popover",r);break;case"xlinkActuate":rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=Pt.get(n)||n,r)}}function Zc(e,t,n,r,a,i){switch(n){case"style":Ct(e,r,i);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof r?St(e,r):("number"===typeof r||"bigint"===typeof r)&&St(e,""+r);break;case"onScroll":null!=r&&Ic("scroll",e);break;case"onScrollEnd":null!=r&&Ic("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Xc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ke.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"===typeof(i=null!=(i=e[Re]||null)?i[n]:null)&&e.removeEventListener(t,i,a),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):tt(e,n,r):("function"!==typeof i&&null!==i&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function ed(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ic("error",e),Ic("load",e);var r,a=!1,i=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Jc(e,t,r,l,n,null)}}return i&&Jc(e,t,"srcSet",n.srcSet,n,null),void(a&&Jc(e,t,"src",n.src,n,null));case"input":Ic("invalid",e);var s=r=l=i=null,u=null,c=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(null!=d)switch(a){case"name":i=d;break;case"type":l=d;break;case"checked":u=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));break;default:Jc(e,t,a,d,n,null)}}return xt(e,r,s,u,c,l,i,!1),void dt(e);case"select":for(i in Ic("invalid",e),a=l=r=null,n)if(n.hasOwnProperty(i)&&null!=(s=n[i]))switch(i){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:Jc(e,t,i,s,n,null)}return t=r,n=l,e.multiple=!!a,void(null!=t?yt(e,!!a,t,!1):null!=n&&yt(e,!!a,n,!0));case"textarea":for(l in Ic("invalid",e),r=i=a=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":a=s;break;case"defaultValue":i=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(o(91));break;default:Jc(e,t,l,s,n,null)}return wt(e,a,i,r),void dt(e);case"option":for(u in n)if(n.hasOwnProperty(u)&&null!=(a=n[u]))if("selected"===u)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else Jc(e,t,u,a,n,null);return;case"dialog":Ic("beforetoggle",e),Ic("toggle",e),Ic("cancel",e),Ic("close",e);break;case"iframe":case"object":Ic("load",e);break;case"video":case"audio":for(a=0;a<Oc.length;a++)Ic(Oc[a],e);break;case"image":Ic("error",e),Ic("load",e);break;case"details":Ic("toggle",e);break;case"embed":case"source":case"link":Ic("error",e),Ic("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Jc(e,t,c,a,n,null)}return;default:if(_t(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(a=n[d])&&Zc(e,t,d,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(a=n[s])&&Jc(e,t,s,a,n,null))}var td=null,nd=null;function rd(e){return 9===e.nodeType?e:e.ownerDocument}function ad(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function id(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function od(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ld=null;var sd="function"===typeof setTimeout?setTimeout:void 0,ud="function"===typeof clearTimeout?clearTimeout:void 0,cd="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof cd?function(e){return cd.resolve(null).then(e).catch(fd)}:sd;function fd(e){setTimeout(function(){throw e})}function pd(e){return"head"===e}function hd(e,t){var n=t,r=0,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0<r&&8>r){n=r;var o=e.ownerDocument;if(1&n&&wd(o.documentElement),2&n&&wd(o.body),4&n)for(wd(n=o.head),o=n.firstChild;o;){var l=o.nextSibling,s=o.nodeName;o[$e]||"SCRIPT"===s||"STYLE"===s||"LINK"===s&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=l}}if(0===a)return e.removeChild(i),void Tf(t);a--}else"$"===n||"$?"===n||"$!"===n?a++:r=n.charCodeAt(0)-48;else r=0;n=i}while(n);Tf(t)}function md(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":md(n),Me(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function gd(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function xd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var vd=null;function yd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function bd(e,t,n){switch(t=rd(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Me(e)}var Sd=new Map,kd=new Set;function Ed(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Cd=L.d;L.d={f:function(){var e=Cd.f(),t=Wu();return e||t},r:function(e){var t=Be(e);null!==t&&5===t.tag&&"form"===t.type?Ro(t):Cd.r(e)},D:function(e){Cd.D(e),Pd("dns-prefetch",e,null)},C:function(e,t){Cd.C(e,t),Pd("preconnect",e,t)},L:function(e,t,n){Cd.L(e,t,n);var r=_d;if(r&&e&&t){var a='link[rel="preload"][as="'+mt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(a+='[imagesizes="'+mt(n.imageSizes)+'"]')):a+='[href="'+mt(e)+'"]';var i=a;switch(t){case"style":i=Fd(e);break;case"script":i=Nd(e)}Sd.has(i)||(e=f({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Sd.set(i,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(zd(i))||"script"===t&&r.querySelector(Rd(i))||(ed(t=r.createElement("link"),"link",e),Ve(t),r.head.appendChild(t)))}},m:function(e,t){Cd.m(e,t);var n=_d;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+mt(r)+'"][href="'+mt(e)+'"]',i=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Nd(e)}if(!Sd.has(i)&&(e=f({rel:"modulepreload",href:e},t),Sd.set(i,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Rd(i)))return}ed(r=n.createElement("link"),"link",e),Ve(r),n.head.appendChild(r)}}},X:function(e,t){Cd.X(e,t);var n=_d;if(n&&e){var r=Ue(n).hoistableScripts,a=Nd(e),i=r.get(a);i||((i=n.querySelector(Rd(a)))||(e=f({src:e,async:!0},t),(t=Sd.get(a))&&Id(e,t),Ve(i=n.createElement("script")),ed(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}},S:function(e,t,n){Cd.S(e,t,n);var r=_d;if(r&&e){var a=Ue(r).hoistableStyles,i=Fd(e);t=t||"default";var o=a.get(i);if(!o){var l={loading:0,preload:null};if(o=r.querySelector(zd(i)))l.loading=5;else{e=f({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Sd.get(i))&&Ad(e,n);var s=o=r.createElement("link");Ve(s),ed(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Ld(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:l},a.set(i,o)}}},M:function(e,t){Cd.M(e,t);var n=_d;if(n&&e){var r=Ue(n).hoistableScripts,a=Nd(e),i=r.get(a);i||((i=n.querySelector(Rd(a)))||(e=f({src:e,async:!0,type:"module"},t),(t=Sd.get(a))&&Id(e,t),Ve(i=n.createElement("script")),ed(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}}};var _d="undefined"===typeof document?null:document;function Pd(e,t,n){var r=_d;if(r&&"string"===typeof t&&t){var a=mt(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof n&&(a+='[crossorigin="'+n+'"]'),kd.has(a)||(kd.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(ed(t=r.createElement("link"),"link",e),Ve(t),r.head.appendChild(t)))}}function Td(e,t,n,r){var a,i,l,s,u=(u=U.current)?Ed(u):null;if(!u)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Fd(n.href),(r=(n=Ue(u).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Fd(n.href);var c=Ue(u).hoistableStyles,d=c.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=u.querySelector(zd(e)))&&!c._p&&(d.instance=c,d.state.loading=5),Sd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Sd.set(e,n),c||(a=u,i=e,l=n,s=d.state,a.querySelector('link[rel="preload"][as="style"]['+i+"]")?s.loading=1:(i=a.createElement("link"),s.preload=i,i.addEventListener("load",function(){return s.loading|=1}),i.addEventListener("error",function(){return s.loading|=2}),ed(i,"link",l),Ve(i),a.head.appendChild(i))))),t&&null===r)throw Error(o(528,""));return d}if(t&&null!==r)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Nd(n),(r=(n=Ue(u).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Fd(e){return'href="'+mt(e)+'"'}function zd(e){return'link[rel="stylesheet"]['+e+"]"}function jd(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Nd(e){return'[src="'+mt(e)+'"]'}function Rd(e){return"script[async]"+e}function Od(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+mt(n.href)+'"]');if(r)return t.instance=r,Ve(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return Ve(r=(e.ownerDocument||e).createElement("style")),ed(r,"style",a),Ld(r,n.precedence,e),t.instance=r;case"stylesheet":a=Fd(n.href);var i=e.querySelector(zd(a));if(i)return t.state.loading|=4,t.instance=i,Ve(i),i;r=jd(n),(a=Sd.get(a))&&Ad(r,a),Ve(i=(e.ownerDocument||e).createElement("link"));var l=i;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),ed(i,"link",r),t.state.loading|=4,Ld(i,n.precedence,e),t.instance=i;case"script":return i=Nd(n.src),(a=e.querySelector(Rd(i)))?(t.instance=a,Ve(a),a):(r=n,(a=Sd.get(i))&&Id(r=f({},n),a),Ve(a=(e=e.ownerDocument||e).createElement("script")),ed(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Ld(r,n.precedence,e));return t.instance}function Ld(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,i=a,o=0;o<r.length;o++){var l=r[o];if(l.dataset.precedence===t)i=l;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Ad(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Id(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Dd=null;function $d(e,t,n){if(null===Dd){var r=new Map,a=Dd=new Map;a.set(n,r)}else(r=(a=Dd).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[$e]||i[Ne]||"link"===e&&"stylesheet"===i.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==i.namespaceURI){var o=i.getAttribute(t)||"";o=e+o;var l=r.get(o);l?l.push(i):r.set(o,[i])}}return r}function Md(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Wd(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Bd=null;function Hd(){}function Ud(){if(this.count--,0===this.count)if(this.stylesheets)qd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Vd=null;function qd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Vd=new Map,t.forEach(Kd,e),Vd=null,Ud.call(e))}function Kd(e,t){if(!(4&t.state.loading)){var n=Vd.get(e);if(n)var r=n.get(null);else{n=new Map,Vd.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var o=a[i];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(a=t.instance).getAttribute("data-precedence"),(i=n.get(o)||r)===r&&n.set(null,a),n.set(o,a),this.count++,r=Ud.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),i?i.parentNode.insertBefore(a,i.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var Qd={$$typeof:w,Provider:null,Consumer:null,_currentValue:A,_currentValue2:A,_threadCount:0};function Gd(e,t,n,r,a,i,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Yd(e,t,n,r,a,i,o,l,s,u,c,d){return e=new Gd(e,t,n,o,l,s,u,d),t=1,!0===i&&(t|=24),i=Ar(3,null,null,t),e.current=i,i.stateNode=e,(t=Ra()).refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:r,isDehydrated:n,cache:t},ni(i),e}function Xd(e){return e?e=Or:Or}function Jd(e,t,n,r,a,i){a=Xd(a),null===r.context?r.context=a:r.pendingContext=a,(r=ai(t)).payload={element:n},null!==(i=void 0===i?null:i)&&(r.callback=i),null!==(n=ii(e,r,t))&&(Au(n,0,t),oi(n,e,t))}function Zd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ef(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function tf(e){if(13===e.tag){var t=jr(e,67108864);null!==t&&Au(t,0,67108864),ef(e,67108864)}}var nf=!0;function rf(e,t,n,r){var a=O.T;O.T=null;var i=L.p;try{L.p=2,of(e,t,n,r)}finally{L.p=i,O.T=a}}function af(e,t,n,r){var a=O.T;O.T=null;var i=L.p;try{L.p=8,of(e,t,n,r)}finally{L.p=i,O.T=a}}function of(e,t,n,r){if(nf){var a=lf(r);if(null===a)Bc(e,t,r,sf,n),yf(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return ff=bf(ff,e,t,n,r,a),!0;case"dragenter":return pf=bf(pf,e,t,n,r,a),!0;case"mouseover":return hf=bf(hf,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return mf.set(i,bf(mf.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,gf.set(i,bf(gf.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(yf(e,r),4&t&&-1<vf.indexOf(e)){for(;null!==a;){var i=Be(a);if(null!==i)switch(i.tag){case 3:if((i=i.stateNode).current.memoizedState.isDehydrated){var o=ve(i.pendingLanes);if(0!==o){var l=i;for(l.pendingLanes|=2,l.entangledLanes|=2;o;){var s=1<<31-pe(o);l.entanglements[1]|=s,o&=~s}Sc(i),0===(6&nu)&&(Su=te()+500,kc(0,!1))}}break;case 13:null!==(l=jr(i,2))&&Au(l,0,2),Wu(),ef(i,2)}if(null===(i=lf(r))&&Bc(e,t,r,sf,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else Bc(e,t,r,null,n)}}function lf(e){return uf(e=jt(e))}var sf=null;function uf(e){if(sf=null,null!==(e=We(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=u(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return sf=e,null}function cf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case re:return 2;case ae:return 8;case ie:case oe:return 32;case le:return 268435456;default:return 32}default:return 32}}var df=!1,ff=null,pf=null,hf=null,mf=new Map,gf=new Map,xf=[],vf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yf(e,t){switch(e){case"focusin":case"focusout":ff=null;break;case"dragenter":case"dragleave":pf=null;break;case"mouseover":case"mouseout":hf=null;break;case"pointerover":case"pointerout":mf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gf.delete(t.pointerId)}}function bf(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=Be(t))&&tf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function wf(e){var t=We(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=u(n)))return e.blockedOn=t,void function(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}(e.priority,function(){if(13===n.tag){var e=Ou();e=Te(e);var t=jr(n,e);null!==t&&Au(t,0,e),ef(n,e)}})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Sf(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=lf(e.nativeEvent);if(null!==n)return null!==(t=Be(n))&&tf(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);zt=r,n.target.dispatchEvent(r),zt=null,t.shift()}return!0}function kf(e,t,n){Sf(e)&&n.delete(t)}function Ef(){df=!1,null!==ff&&Sf(ff)&&(ff=null),null!==pf&&Sf(pf)&&(pf=null),null!==hf&&Sf(hf)&&(hf=null),mf.forEach(kf),gf.forEach(kf)}function Cf(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ef)))}var _f=null;function Pf(e){_f!==e&&(_f=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){_f===e&&(_f=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if("function"!==typeof r){if(null===uf(r||n))continue;break}var i=Be(n);null!==i&&(e.splice(t,3),t-=3,jo(i,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function Tf(e){function t(t){return Cf(t,e)}null!==ff&&Cf(ff,e),null!==pf&&Cf(pf,e),null!==hf&&Cf(hf,e),mf.forEach(t),gf.forEach(t);for(var n=0;n<xf.length;n++){var r=xf[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xf.length&&null===(n=xf[0]).blockedOn;)wf(n),null===n.blockedOn&&xf.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],i=n[r+1],o=a[Re]||null;if("function"===typeof i)o||Pf(n);else if(o){var l=null;if(i&&i.hasAttribute("formAction")){if(a=i,o=i[Re]||null)l=o.formAction;else if(null!==uf(a))continue}else l=o.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),Pf(n)}}}function Ff(e){this._internalRoot=e}function zf(e){this._internalRoot=e}zf.prototype.render=Ff.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Jd(t.current,Ou(),e,t,null,null)},zf.prototype.unmount=Ff.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Jd(e.current,2,null,e,null,null),Wu(),t[Oe]=null}},zf.prototype.unstable_scheduleHydration=function(e){if(e){var t=ze();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xf.length&&0!==t&&t<xf[n].priority;n++);xf.splice(n,0,e),0===n&&wf(e)}};var jf=a.version;if("19.1.1"!==jf)throw Error(o(527,jf,"19.1.1"));L.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return c(a),e;if(i===r)return c(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,u=a.child;u;){if(u===n){l=!0,n=a,r=i;break}if(u===r){l=!0,r=a,n=i;break}u=u.sibling}if(!l){for(u=i.child;u;){if(u===n){l=!0,n=i,r=a;break}if(u===r){l=!0,r=i,n=a;break}u=u.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Nf={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Rf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rf.isDisabled&&Rf.supportsFiber)try{ce=Rf.inject(Nf),de=Rf}catch(Lf){}}t.createRoot=function(e,t){if(!l(e))throw Error(o(299));var n=!1,r="",a=vl,i=yl,s=bl;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Yd(e,1,!1,null,0,n,r,a,i,s,0,null),e[Oe]=t.current,Mc(e),new Ff(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(o(299));var r=!1,a="",i=vl,s=yl,u=bl,c=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(u=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(c=n.formState)),(t=Yd(e,1,!0,t,0,r,a,i,s,u,0,c)).context=Xd(null),n=t.current,(a=ai(r=Te(r=Ou()))).callback=null,ii(n,a,r),n=r,t.current.lanes=n,Ce(t,n),Sc(t),e[Oe]=t.current,Mc(e),new zf(t)},t.version="19.1.1"},43:(e,t,n)=>{"use strict";e.exports=n(288)},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=x.prototype;var b=y.prototype=new v;b.constructor=y,m(b,x.prototype),b.isPureReactComponent=!0;var w=Array.isArray,S={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function E(e,t,r,a,i,o){return r=o.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:o}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function T(){}function F(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,u,c=!1;if(null===e)c=!0;else switch(l){case"bigint":case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0;break;case f:return F((c=e._init)(e._payload),t,a,i,o)}}if(c)return o=o(e),c=""===i?"."+P(e,0):i,w(o)?(a="",null!=c&&(a=c.replace(_,"$&/")+"/"),F(o,t,a,"",function(e){return e})):null!=o&&(C(o)&&(s=o,u=a+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(_,"$&/")+"/")+c,o=E(s.type,u,void 0,0,0,s.props)),t.push(o)),1;c=0;var d,h=""===i?".":i+":";if(w(e))for(var m=0;m<e.length;m++)c+=F(i=e[m],t,a,l=h+P(i,m),o);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=p&&d[p]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(i=e.next()).done;)c+=F(i=i.value,t,a,l=h+P(i,m++),o);else if("object"===l){if("function"===typeof e.then)return F(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(T,T):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,i,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return c}function z(e,t,n){if(null==e)return e;var r=[],a=0;return F(e,r,"","",function(e){return t.call(n,e,a++)}),r}function j(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function R(){}t.Children={map:z,forEach:function(e,t,n){z(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return z(e,function(){t++}),t},toArray:function(e){return z(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=a,t.Profiler=o,t.PureComponent=y,t.StrictMode=i,t.Suspense=c,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),a=e.key;if(null!=t)for(i in void 0!==t.ref&&void 0,void 0!==t.key&&(a=""+t.key),t)!k.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var o=Array(i),l=0;l<i;l++)o[l]=arguments[l+2];r.children=o}return E(e.type,a,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,a={},i=null;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)k.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var o=arguments.length-2;if(1===o)a.children=n;else if(1<o){for(var l=Array(o),s=0;s<o;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===a[r]&&(a[r]=o[r]);return E(e,i,void 0,0,0,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:j}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),a=S.S;null!==a&&a(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(R,N)}catch(i){N(i)}finally{S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var r=S.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(e,t)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return S.H.useTransition()},t.version="19.1.1"},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=o.p;try{if(s.T=null,o.p=2,e)return e()}finally{s.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:i}):"script"===n&&o.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=u(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=u(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.1.1"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element");function r(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}Symbol.for("react.fragment"),t.jsx=r,t.jsxs=r},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>i(s,n))u<a&&0>i(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,x=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function S(e){if(g=!1,w(e),!m)if(null!==r(u))m=!0,E||(E=!0,k());else{var t=r(c);null!==t&&N(S,t.startTime-e)}}var k,E=!1,C=-1,_=5,P=-1;function T(){return!!x||!(t.unstable_now()-P<_)}function F(){if(x=!1,E){var e=t.unstable_now();P=e;var n=!0;try{e:{m=!1,g&&(g=!1,y(C),C=-1),h=!0;var i=p;try{t:{for(w(e),f=r(u);null!==f&&!(f.expirationTime>e&&T());){var o=f.callback;if("function"===typeof o){f.callback=null,p=f.priorityLevel;var l=o(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){f.callback=l,w(e),n=!0;break t}f===r(u)&&a(u),w(e)}else a(u);f=r(u)}if(null!==f)n=!0;else{var s=r(c);null!==s&&N(S,s.startTime-e),n=!1}}break e}finally{f=null,p=i,h=!1}n=void 0}}finally{n?k():E=!1}}}if("function"===typeof b)k=function(){b(F)};else if("undefined"!==typeof MessageChannel){var z=new MessageChannel,j=z.port2;z.port1.onmessage=F,k=function(){j.postMessage(null)}}else k=function(){v(F,0)};function N(e,n){C=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){x=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(e.sortIndex=i,n(c,e),null===r(u)&&e===r(c)&&(g?(y(C),C=-1):g=!0,N(S,i-o))):(e.sortIndex=l,n(u,e),m||h||(m=!0,E||(E=!0,k()))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce((t,r)=>(n.f[r](e,t),t),[])),n.u=e=>"static/js/"+e+".3147114e.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="portfolio_2:";n.l=(r,a,i,o)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=r),e[r]=[a];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach(e=>e(n)),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/-EducationalPortfolio/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise((n,r)=>a=e[t]=[n,r]);r.push(a[2]=i);var o=n.p+n.u(t),l=new Error;n.l(o,r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,a[1](l)}},"chunk-"+t,t)}};var t=(t,r)=>{var a,i,o=r[0],l=r[1],s=r[2],u=0;if(o.some(t=>0!==e[t])){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)s(n)}for(t&&t(r);u<o.length;u++)i=o[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkportfolio_2=self.webpackChunkportfolio_2||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391);var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.create;function a(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var i=n(324),o=n.n(i),l="-ms-",s="-moz-",u="-webkit-",c="comm",d="rule",f="decl",p="@keyframes",h=Math.abs,m=String.fromCharCode,g=Object.assign;function x(e){return e.trim()}function v(e,t){return(e=t.exec(e))?e[0]:e}function y(e,t,n){return e.replace(t,n)}function b(e,t,n){return e.indexOf(t,n)}function w(e,t){return 0|e.charCodeAt(t)}function S(e,t,n){return e.slice(t,n)}function k(e){return e.length}function E(e){return e.length}function C(e,t){return t.push(e),e}function _(e,t){return e.filter(function(e){return!v(e,t)})}var P=1,T=1,F=0,z=0,j=0,N="";function R(e,t,n,r,a,i,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:P,column:T,length:o,return:"",siblings:l}}function O(e,t){return g(R("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function L(e){for(;e.root;)e=O(e.root,{children:[e]});C(e,e.siblings)}function A(){return j=z>0?w(N,--z):0,T--,10===j&&(T=1,P--),j}function I(){return j=z<F?w(N,z++):0,T++,10===j&&(T=1,P++),j}function D(){return w(N,z)}function $(){return z}function M(e,t){return S(N,e,t)}function W(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function B(e){return P=T=1,F=k(N=e),z=0,[]}function H(e){return N="",e}function U(e){return x(M(z-1,K(91===e?e+2:40===e?e+1:e)))}function V(e){for(;(j=D())&&j<33;)I();return W(e)>2||W(j)>3?"":" "}function q(e,t){for(;--t&&I()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return M(e,$()+(t<6&&32==D()&&32==I()))}function K(e){for(;I();)switch(j){case e:return z;case 34:case 39:34!==e&&39!==e&&K(j);break;case 40:41===e&&K(e);break;case 92:I()}return z}function Q(e,t){for(;I()&&e+j!==57&&(e+j!==84||47!==D()););return"/*"+M(t,z-1)+"*"+m(47===e?e:I())}function G(e){for(;!W(D());)I();return M(e,z)}function Y(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function X(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case f:return e.return=e.return||e.value;case c:return"";case p:return e.return=e.value+"{"+Y(e.children,r)+"}";case d:if(!k(e.value=e.props.join(",")))return""}return k(n=Y(e.children,r))?e.return=e.value+"{"+n+"}":""}function J(e,t,n){switch(function(e,t){return 45^w(e,0)?(((t<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 4789:return s+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+s+e+l+e+e;case 5936:switch(w(e,t+11)){case 114:return u+e+l+y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+l+y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+l+y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return u+e+l+e+e;case 6165:return u+e+l+"flex-"+e+e;case 5187:return u+e+y(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+l+"flex-$1$2")+e;case 5443:return u+e+l+"flex-item-"+y(e,/flex-|-self/g,"")+(v(e,/flex-|baseline/)?"":l+"grid-row-"+y(e,/flex-|-self/g,""))+e;case 4675:return u+e+l+"flex-line-pack"+y(e,/align-content|flex-|-self/g,"")+e;case 5548:return u+e+l+y(e,"shrink","negative")+e;case 5292:return u+e+l+y(e,"basis","preferred-size")+e;case 6060:return u+"box-"+y(e,"-grow","")+u+e+l+y(e,"grow","positive")+e;case 4554:return u+y(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return y(y(y(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return y(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return y(y(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4200:if(!v(e,/flex-|baseline/))return l+"grid-column-align"+S(e,t)+e;break;case 2592:case 3360:return l+y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,v(e.props,/grid-\w+-end/)})?~b(e+(n=n[t].value),"span",0)?e:l+y(e,"-start","")+e+l+"grid-row-span:"+(~b(n,"span",0)?v(n,/\d+/):+v(n,/\d+/)-+v(e,/\d+/))+";":l+y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return v(e.props,/grid-\w+-start/)})?e:l+y(y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return y(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(e)-1-t>6)switch(w(e,t+1)){case 109:if(45!==w(e,t+4))break;case 102:return y(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+s+(108==w(e,t+3)?"$3":"$2-$3"))+e;case 115:return~b(e,"stretch",0)?J(y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,a,i,o,s){return l+n+":"+r+s+(a?l+n+"-span:"+(i?o:+o-+r)+s:"")+e});case 4949:if(121===w(e,t+6))return y(e,":",":"+u)+e;break;case 6444:switch(w(e,45===w(e,14)?18:11)){case 120:return y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===w(e,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+l+"$2box$3")+e;case 100:return y(e,":",":"+l)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return y(e,"scroll-","scroll-snap-")+e}return e}function Z(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case f:return void(e.return=J(e.value,e.length,n));case p:return Y([O(e,{value:y(e.value,"@","@"+u)})],r);case d:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(v(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":L(O(e,{props:[y(t,/:(read-\w+)/,":-moz-$1")]})),L(O(e,{props:[t]})),g(e,{props:_(n,r)});break;case"::placeholder":L(O(e,{props:[y(t,/:(plac\w+)/,":"+u+"input-$1")]})),L(O(e,{props:[y(t,/:(plac\w+)/,":-moz-$1")]})),L(O(e,{props:[y(t,/:(plac\w+)/,l+"input-$1")]})),L(O(e,{props:[t]})),g(e,{props:_(n,r)})}return""})}}function ee(e){return H(te("",null,null,null,[""],e=B(e),0,[0],e))}function te(e,t,n,r,a,i,o,l,s){for(var u=0,c=0,d=o,f=0,p=0,g=0,x=1,v=1,S=1,E=0,_="",P=a,T=i,F=r,z=_;v;)switch(g=E,E=I()){case 40:if(108!=g&&58==w(z,d-1)){-1!=b(z+=y(U(E),"&","&\f"),"&\f",h(u?l[u-1]:0))&&(S=-1);break}case 34:case 39:case 91:z+=U(E);break;case 9:case 10:case 13:case 32:z+=V(g);break;case 92:z+=q($()-1,7);continue;case 47:switch(D()){case 42:case 47:C(re(Q(I(),$()),t,n,s),s);break;default:z+="/"}break;case 123*x:l[u++]=k(z)*S;case 125*x:case 59:case 0:switch(E){case 0:case 125:v=0;case 59+c:-1==S&&(z=y(z,/\f/g,"")),p>0&&k(z)-d&&C(p>32?ae(z+";",r,n,d-1,s):ae(y(z," ","")+";",r,n,d-2,s),s);break;case 59:z+=";";default:if(C(F=ne(z,t,n,u,c,a,l,_,P=[],T=[],d,i),i),123===E)if(0===c)te(z,t,F,F,P,i,d,l,T);else switch(99===f&&110===w(z,3)?100:f){case 100:case 108:case 109:case 115:te(e,F,F,r&&C(ne(e,F,F,0,0,a,l,_,a,P=[],d,T),T),a,T,d,l,r?P:T);break;default:te(z,F,F,F,[""],T,0,l,T)}}u=c=p=0,x=S=1,_=z="",d=o;break;case 58:d=1+k(z),p=g;default:if(x<1)if(123==E)--x;else if(125==E&&0==x++&&125==A())continue;switch(z+=m(E),E*x){case 38:S=c>0?1:(z+="\f",-1);break;case 44:l[u++]=(k(z)-1)*S,S=1;break;case 64:45===D()&&(z+=U(I())),f=D(),c=d=k(_=z+=G($())),E++;break;case 45:45===g&&2==k(z)&&(x=0)}}return i}function ne(e,t,n,r,a,i,o,l,s,u,c,f){for(var p=a-1,m=0===a?i:[""],g=E(m),v=0,b=0,w=0;v<r;++v)for(var k=0,C=S(e,p+1,p=h(b=o[v])),_=e;k<g;++k)(_=x(b>0?m[k]+" "+C:y(C,/&\f/g,m[k])))&&(s[w++]=_);return R(e,t,n,0===a?d:l,s,u,c,f)}function re(e,t,n,r){return R(e,t,n,c,m(j),S(e,2,-2),0,r)}function ae(e,t,n,r,a){return R(e,t,n,f,S(e,0,r),S(e,r+1,-1),r,a)}var ie={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},oe="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/-EducationalPortfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/-EducationalPortfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/-EducationalPortfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",le="active",se="data-styled-version",ue="6.1.19",ce="/*!sc*/\n",de="undefined"!=typeof window&&"undefined"!=typeof document,fe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/-EducationalPortfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/-EducationalPortfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/-EducationalPortfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/-EducationalPortfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/-EducationalPortfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/-EducationalPortfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/-EducationalPortfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/-EducationalPortfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/-EducationalPortfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/-EducationalPortfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),pe={},he=(new Set,Object.freeze([])),me=Object.freeze({});function ge(e,t,n){return void 0===n&&(n=me),e.theme!==n.theme&&e.theme||t||n.theme}var xe=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ve=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ye=/(^-|-$)/g;function be(e){return e.replace(ve,"-").replace(ye,"")}var we=/(a)(d)/gi,Se=function(e){return String.fromCharCode(e+(e>25?39:97))};function ke(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Se(t%52)+n;return(Se(t%52)+n).replace(we,"$1-$2")}var Ee,Ce=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},_e=function(e){return Ce(5381,e)};function Pe(e){return ke(_e(e)>>>0)}function Te(e){return e.displayName||e.name||"Component"}function Fe(e){return"string"==typeof e&&!0}var ze="function"==typeof Symbol&&Symbol.for,je=ze?Symbol.for("react.memo"):60115,Ne=ze?Symbol.for("react.forward_ref"):60112,Re={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Oe={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Le={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ae=((Ee={})[Ne]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ee[je]=Le,Ee);function Ie(e){return("type"in(t=e)&&t.type.$$typeof)===je?Le:"$$typeof"in e?Ae[e.$$typeof]:Re;var t}var De=Object.defineProperty,$e=Object.getOwnPropertyNames,Me=Object.getOwnPropertySymbols,We=Object.getOwnPropertyDescriptor,Be=Object.getPrototypeOf,He=Object.prototype;function Ue(e,t,n){if("string"!=typeof t){if(He){var r=Be(t);r&&r!==He&&Ue(e,r,n)}var a=$e(t);Me&&(a=a.concat(Me(t)));for(var i=Ie(e),o=Ie(t),l=0;l<a.length;++l){var s=a[l];if(!(s in Oe||n&&n[s]||o&&s in o||i&&s in i)){var u=We(t,s);try{De(e,s,u)}catch(e){}}}}return e}function Ve(e){return"function"==typeof e}function qe(e){return"object"==typeof e&&"styledComponentId"in e}function Ke(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Qe(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ge(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ye(e,t,n){if(void 0===n&&(n=!1),!n&&!Ge(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ye(e[r],t[r]);else if(Ge(t))for(var r in t)e[r]=Ye(e[r],t[r]);return e}function Xe(e,t){Object.defineProperty(e,"toString",{value:t})}function Je(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ze=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw Je(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+="".concat(this.tag.getRule(i)).concat(ce);return t},e}(),et=new Map,tt=new Map,nt=1,rt=function(e){if(et.has(e))return et.get(e);for(;tt.has(nt);)nt++;var t=nt++;return et.set(e,t),tt.set(t,e),t},at=function(e,t){nt=t+1,et.set(e,t),tt.set(t,e)},it="style[".concat(oe,"][").concat(se,'="').concat(ue,'"]'),ot=new RegExp("^".concat(oe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lt=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},st=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(ce),a=[],i=0,o=r.length;i<o;i++){var l=r[i].trim();if(l){var s=l.match(ot);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(at(c,u),lt(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},ut=function(e){for(var t=document.querySelectorAll(it),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(oe)!==le&&(st(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function ct(){return n.nc}var dt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(oe,"]")));return t[t.length-1]}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(oe,le),r.setAttribute(se,ue);var o=ct();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},ft=function(){function e(e){this.element=dt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw Je(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),pt=function(){function e(e){this.element=dt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ht=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),mt=de,gt={isServer:!de,useCSSOMInjection:!fe},xt=function(){function e(e,t,n){void 0===e&&(e=me),void 0===t&&(t={});var a=this;this.options=r(r({},gt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&de&&mt&&(mt=!1,ut(this)),Xe(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return tt.get(e)}(n);if(void 0===a)return"continue";var i=e.names.get(a),o=t.getGroup(n);if(void 0===i||!i.size||0===o.length)return"continue";var l="".concat(oe,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==i&&i.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),r+="".concat(o).concat(l,'{content:"').concat(s,'"}').concat(ce)},i=0;i<n;i++)a(i);return r}(a)})}return e.registerId=function(e){return rt(e)},e.prototype.rehydrate=function(){!this.server&&de&&ut(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(r(r({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new ht(n):t?new ft(n):new pt(n)}(this.options),new Ze(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(rt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(rt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(rt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),vt=/&/g,yt=/^\s*\/\/.*$/gm;function bt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=bt(e.children,t)),e})}function wt(e){var t,n,r,a=void 0===e?me:e,i=a.options,o=void 0===i?me:i,l=a.plugins,s=void 0===l?he:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push(function(e){e.type===d&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(vt,n).replace(r,u))}),o.prefix&&c.push(Z),c.push(X);var f=function(e,a,i,l){void 0===a&&(a=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(yt,""),u=ee(i||a?"".concat(i," ").concat(a," { ").concat(s," }"):s);o.namespace&&(u=bt(u,o.namespace));var d,f=[];return Y(u,function(e){var t=E(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return f.hash=s.length?s.reduce(function(e,t){return t.name||Je(15),Ce(e,t.name)},5381).toString():"",f}var St=new xt,kt=wt(),Et=e.createContext({shouldForwardProp:void 0,styleSheet:St,stylis:kt}),Ct=(Et.Consumer,e.createContext(void 0));function _t(){return(0,e.useContext)(Et)}function Pt(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],i=_t().styleSheet,l=(0,e.useMemo)(function(){var e=i;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e},[t.disableCSSOMInjection,t.sheet,t.target,i]),s=(0,e.useMemo)(function(){return wt({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})},[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)(function(){o()(r,t.stylisPlugins)||a(t.stylisPlugins)},[t.stylisPlugins]);var u=(0,e.useMemo)(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:l,stylis:s}},[t.shouldForwardProp,l,s]);return e.createElement(Et.Provider,{value:u},e.createElement(Ct.Provider,{value:s},t.children))}var Tt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=kt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Xe(this,function(){throw Je(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=kt),this.name+e.hash},e}(),Ft=function(e){return e>="A"&&e<="Z"};function zt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Ft(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var jt=function(e){return null==e||!1===e||""===e},Nt=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!jt(o)&&(Array.isArray(o)&&o.isCss||Ve(o)?r.push("".concat(zt(i),":"),o,";"):Ge(o)?r.push.apply(r,a(a(["".concat(i," {")],Nt(o),!1),["}"],!1)):r.push("".concat(zt(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ie||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Rt(e,t,n,r){return jt(e)?[]:qe(e)?[".".concat(e.styledComponentId)]:Ve(e)?!Ve(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Rt(e(t),t,n,r):e instanceof Tt?n?(e.inject(n,r),[e.getName(r)]):[e]:Ge(e)?Nt(e):Array.isArray(e)?Array.prototype.concat.apply(he,e.map(function(e){return Rt(e,t,n,r)})):[e.toString()];var a}function Ot(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ve(n)&&!qe(n))return!1}return!0}var Lt=_e(ue),At=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Ot(e),this.componentId=t,this.baseHash=Ce(Lt,t),this.baseStyle=n,xt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ke(r,this.staticRulesId);else{var a=Qe(Rt(this.rules,e,t,n)),i=ke(Ce(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=n(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}r=Ke(r,i),this.staticRulesId=i}else{for(var l=Ce(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Qe(Rt(c,e,t,n));l=Ce(l,d+u),s+=d}}if(s){var f=ke(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Ke(r,f)}}return r},e}(),It=e.createContext(void 0);It.Consumer;var Dt={};new Set;function $t(t,n,a){var i=qe(t),o=t,l=!Fe(t),s=n.attrs,u=void 0===s?he:s,c=n.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":be(e);Dt[n]=(Dt[n]||0)+1;var r="".concat(n,"-").concat(Pe(ue+n+Dt[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,f=n.displayName,p=void 0===f?function(e){return Fe(e)?"styled.".concat(e):"Styled(".concat(Te(e),")")}(t):f,h=n.displayName&&n.componentId?"".concat(be(n.displayName),"-").concat(n.componentId):n.componentId||d,m=i&&o.attrs?o.attrs.concat(u).filter(Boolean):u,g=n.shouldForwardProp;if(i&&o.shouldForwardProp){var x=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;g=function(e,t){return x(e,t)&&v(e,t)}}else g=x}var y=new At(a,h,i?o.componentStyle:void 0);function b(t,n){return function(t,n,a){var i=t.attrs,o=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,u=t.styledComponentId,c=t.target,d=e.useContext(It),f=_t(),p=t.shouldForwardProp||f.shouldForwardProp,h=ge(n,d,l)||me,m=function(e,t,n){for(var a,i=r(r({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var l=Ve(a=e[o])?a(i):a;for(var s in l)i[s]="className"===s?Ke(i[s],l[s]):"style"===s?r(r({},i[s]),l[s]):l[s]}return t.className&&(i.className=Ke(i.className,t.className)),i}(i,n,h),g=m.as||c,x={};for(var v in m)void 0===m[v]||"$"===v[0]||"as"===v||"theme"===v&&m.theme===h||("forwardedAs"===v?x.as=m.forwardedAs:p&&!p(v,g)||(x[v]=m[v]));var y=function(e,t){var n=_t();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,m),b=Ke(s,u);return y&&(b+=" "+y),m.className&&(b+=" "+m.className),x[Fe(g)&&!xe.has(g)?"class":"className"]=b,a&&(x.ref=a),(0,e.createElement)(g,x)}(w,t,n)}b.displayName=p;var w=e.forwardRef(b);return w.attrs=m,w.componentStyle=y,w.displayName=p,w.shouldForwardProp=g,w.foldedComponentIds=i?Ke(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=h,w.target=i?o.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)Ye(e,a[r],!0);return e}({},o.defaultProps,e):e}}),Xe(w,function(){return".".concat(w.styledComponentId)}),l&&Ue(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Mt(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var Wt=function(e){return Object.assign(e,{isCss:!0})};function Bt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ve(e)||Ge(e))return Wt(Rt(Mt(he,a([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Rt(r):Wt(Rt(Mt(r,t)))}function Ht(e,t,n){if(void 0===n&&(n=me),!t)throw Je(1,t);var i=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,Bt.apply(void 0,a([r],i,!1)))};return i.attrs=function(a){return Ht(e,t,r(r({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return Ht(e,t,r(r({},n),a))},i}var Ut=function(e){return Ht($t,e)},Vt=Ut;xe.forEach(function(e){Vt[e]=Ut(e)});var qt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ot(e),xt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(Qe(Rt(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&xt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=ct(),r=Qe([n&&'nonce="'.concat(n,'"'),"".concat(oe,'="true"'),"".concat(se,'="').concat(ue,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Je(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw Je(2);var a=t.instance.toString();if(!a)return[];var i=((n={})[oe]="",n[se]=ue,n.dangerouslySetInnerHTML={__html:a},n),o=ct();return o&&(i.nonce=o),[e.createElement("style",r({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new xt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw Je(2);return e.createElement(Pt,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw Je(3)}})(),"__sc-".concat(oe,"__");const Kt={black:"#232536",yellow:"#FFD050",purple:"#592EA9",darkGrey:"#4C4C4C",mediumGrey:"#6D6E76",lightGrey:"#F4F4F4",lavender:"#F4F0F8",lightYellow:"#FBF6EA",font:"#FFFFFF",borderColor:"#4A4A4A",placeholdeColor:"495057"},Qt={tablet:"screen and (max-width: 768px)",mobil:"screen and (max-width: 576px)",desktop:"screen and (min-width: 1140px)"},Gt={MenuItem:Vt.li`
    max-width: 100px;
`,Link:Vt.a`
    color: ${Kt.lightGrey};
    cursor: pointer;
    width: 100px;
`,MobileHeaderMenu:Vt.nav`

ul {
    display: flex;
    gap: 24px;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    position: fixed;
    top: 100px;
    right: 42px;


    @media (max-width: 900px) {
        right: 27px;
    }

    @media (max-width: 500px) {
        top: 90px;
        right: 3px;
    } 
    }
`,BurgerButton:Vt.button`
    position: fixed;
    top: 20px;
    right: 225px;
    width: 56px;
    height: 56px;
    z-index: 9999999;
    background-color: none;
    background-color: transparent;
    border: none;

    
    @media (max-width: 900px) {
        right: 50px;
    }

    @media (max-width: 500px) {
        top: 19px;
        right: 25px;
    }

    @media (max-width: 340px) {
        top: 19px;
        right: 25px;
    }


    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Kt.font};

        position: absolute;
        left: 10px;
        bottom: 25px;

        ${e=>e.isOpen&&Bt`
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before{
            content:'';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${Kt.font};
            position: absolute;
            transform: translateY(-10px);

            ${e=>e.isOpen&&Bt`
            transform: rotate(-45deg) translateY(0);
            `}

        }
        &::after{
            content:'';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${Kt.font};
            position: absolute;
            transform: translateY(10px);



            ${e=>e.isOpen&&Bt`
                transform:rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`,MobileMenuPopup:Vt.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99999;
    background-color: #232536;
    display: none;


    ${e=>e.isOpen&&Bt`
        display: flex;
        justify-content: center;
        align-items: center;

    `}`,DesktopMenu:Vt.nav`
    ul{
        display: flex;
        gap: 24px;
        justify-content: center;
    }    
`};var Yt=n(579);const Xt=new Map([["Home","#main"],["Blog","#posts"],["About Us","#about-us"],["Contact Us","#footer"]]),Jt=e=>(0,Yt.jsx)("ul",{children:e.menuItems.map((e,t)=>{const n=Xt.get(e)||"";return(0,Yt.jsx)(Gt.MenuItem,{children:(0,Yt.jsx)(Gt.Link,{className:"linkHeader",href:n,children:e})},t)})}),Zt=e=>(0,Yt.jsx)(Gt.DesktopMenu,{children:(0,Yt.jsx)(Jt,{menuItems:e.menuItems})});const en=n.p+"static/media/icons-sprite.44ed1f9530ca0d43e21f574cca90bdad.svg",tn=e=>(0,Yt.jsx)("svg",{width:e.width||"48",height:e.hight||"48",viewBox:e.viewBox||"0 0 48 48",fill:e.fill||"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Yt.jsx)("use",{xlinkHref:`${en}#${e.iconId}`})}),nn=()=>(0,Yt.jsx)(rn,{href:"",children:(0,Yt.jsx)(tn,{iconId:"logoSvg",width:"140",hight:"29",viewBox:"80 -7 60 48"})}),rn=Vt.a`
display: flex;
align-items: center;

`,an=t=>{const[n,r]=(0,e.useState)(!1);return(0,Yt.jsxs)(Gt.MobileHeaderMenu,{children:[(0,Yt.jsx)(Gt.BurgerButton,{isOpen:n,onClick:()=>{r(!n)},children:(0,Yt.jsx)("span",{})}),(0,Yt.jsx)(Gt.MobileMenuPopup,{isOpen:n,onClick:()=>{r(!1)},children:(0,Yt.jsx)(Jt,{menuItems:t.menuItems})})]})},on=Vt.div`
    max-width: 1440px;
    min-height: auto;
    width: 100%;
    padding: ${e=>e.padding||"0"};
    margin: ${e=>e.margin||"0 auto"};
    outline: 1px solid red;
    transform: ${e=>e.transform||"none"};
`,ln=Vt.div`
display: flex;
flex-direction: ${e=>e.direction||"row"};
justify-content: ${e=>e.justify||"flex-start"};
align-items: ${e=>e.align||"stretch"};
flex-wrap: ${e=>e.wrap||"nowrap"};
gap: ${e=>e.gap||"0"};
height: ${e=>e.height||"100%"};
width: ${e=>e.width||"100%"};
max-width: ${e=>e.width||"100%"};;
padding: ${e=>e.padding||"0"};
background-color: ${e=>e.color||"none"};
margin: ${e=>e.margin||"0"};
border: ${e=>e.border||"none"};
max-height: ${e=>e.height||""};
flex-grow: ${e=>e.flexGrow||""};
min-height: ${e=>e.minHeight||""} ;
min-width: ${e=>e.minWidth||""};
`,sn={Header:Vt.header`
    background-color: #232536;
    color: ${Kt.lightGrey};
    padding: 12px 0;
    position: fixed; 
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;

ul{
    list-style: none;
}
`,ResponsiveContainer:Vt(on)`
    @media (max-width:500px) {
        padding: 0 20px;
    }
`,ResponsiveFlexWrapper1:Vt(ln)`

@media (max-width: 1050px) {
    justify-content: space-around;
    gap: 0;
}

@media (max-width: 500px) {
    gap: 0;
}

@media (max-width: 340px) {
    
    max-width:200px ;
}
`,ResponsiveFlexWrapper2:Vt(ln)`
margin: auto 0;
max-width: 500px;

up {
    gap: 24px;
}

`,Button:Vt.button`
    width: 180px;   
    height: 40px;
    background-color: #FBF6EA;
    color: black;
    @media (max-width: 900px){

        max-width: 150px;
        height: 40px;
        position: fixed;
        top: 32px;
        right: 145px;
    }
    
    @media (max-width:500px) {
        max-width: 100px;
        height: 30px;
        position: fixed;
        top: 36px;
        right: 95px;
    }

    @media (max-width: 340px) {
        max-width: 70px;
        height: 30px;
        position: fixed;
        top: 36px;
        right: 95px;
    }

`},un=["Home","Blog","About Us","Contact Us"],cn=()=>{const[t,n]=e.useState(window.innerWidth);return e.useEffect(()=>{const e=()=>n(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,Yt.jsx)(sn.Header,{children:(0,Yt.jsx)(sn.ResponsiveContainer,{padding:"0 80px",className:"HeaderContainer",children:(0,Yt.jsxs)(sn.ResponsiveFlexWrapper1,{justify:"space-between",minHeight:"80px",gap:"100px",children:[(0,Yt.jsx)(nn,{}),(0,Yt.jsxs)(sn.ResponsiveFlexWrapper2,{gap:"16px",align:"center",children:[t<900?(0,Yt.jsx)(an,{menuItems:un}):(0,Yt.jsx)(Zt,{menuItems:un}),(0,Yt.jsx)(sn.Button,{children:"Subscribe"})]})]})})})},dn=Vt.button`
  width: ${e=>e.width||"204px"};  
  height: ${e=>e.height||"56px"};
  background-color: ${e=>e.background||"#FFD050"};
  margin: ${e=>e.margin||"0"};
  color: ${e=>e.color||"#232536"};
  border: ${e=>e.border||"none"};
  
 @media (max-width:900px) {
  width: ${e=>e.width||"160px"};  
  height: ${e=>e.height||"48px"};
 }
`,fn=n.p+"static/media/featuredPostImg.19bb264558ebc032bfbd.webp",pn={StyleLeftSide:Vt.div`
    max-width: 734px;
    width: 100%;
    min-height: 700px;
`,Photo:Vt.img`

    max-width: 669px;
    min-width: 360px;
    height: 352px;
    width: 100%;
    object-fit: cover;
    padding-bottom: 32px;

    @media (max-width:400px) {
        max-width: 360px;
        min-width: 260px;
        height: 260px;
    }

    @media (max-width:300px) {
        max-width: 240px;
        min-width: 220px;
        height: 240px;
    }
`,SubTitle:Vt.h2`
    color: black;
    max-width: 650px;
    padding-bottom: 16px;
`,PostMetadata:Vt.label`
    color: black;
    padding-bottom: 16px;
`,Name:Vt.a`
color: ${Kt.purple};
`,TextFeaturedPost:Vt.p`
    color: ${Kt.mediumGrey};
    padding-bottom: 32px;
`},hn=()=>(0,Yt.jsx)(pn.StyleLeftSide,{children:(0,Yt.jsxs)(ln,{direction:"column",height:"48px",gap:"32px",children:[(0,Yt.jsx)(pn.SubTitle,{children:"Featured Post"}),(0,Yt.jsxs)(ln,{padding:"0 0 0 20px",direction:"column",maxWidth:"733px",children:[(0,Yt.jsx)(pn.Photo,{src:fn,alt:""}),(0,Yt.jsxs)(pn.PostMetadata,{htmlFor:"featuredPost",className:"postMetadata",children:["By ",(0,Yt.jsx)(pn.Name,{className:"nameAutor",href:"",children:"John Doe"})," | May23, 2022"]}),(0,Yt.jsxs)(ln,{direction:"column",minHeight:"320px",children:[(0,Yt.jsx)(pn.SubTitle,{id:"featuredPost",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}),(0,Yt.jsx)(pn.TextFeaturedPost,{className:"textFeaturedPost",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."}),(0,Yt.jsx)(dn,{background:"#FFD050",children:"Read More >"})]})]})]})}),mn=e=>(0,Yt.jsx)(gn,{background:e.background,children:(0,Yt.jsxs)(xn,{direction:"column",maxWidth:"516px",height:"180px",children:[(0,Yt.jsxs)(yn,{htmlFor:e.htmlFor,className:"postMetadata",children:["By ",(0,Yt.jsx)(vn,{className:"nameAutor",href:"",children:"John Deo"})," | Aug 23, 2021"]}),(0,Yt.jsx)(bn,{id:e.id,children:"8 Figma design systems that you can download for free today."})]})}),gn=Vt.div`
    background: ${e=>{let{background:t}=e;return t||"#FFFFFF"}};


    &:hover{
background-color: #FBF6EA;
    }

    @media (max-width:320px) {
    max-width: 200px;
  }
`,xn=Vt(ln)`
  @media (max-width:450px) {
    max-width: 330px;
  }

  @media (max-width:350px) {
    max-width: 230px;
  }

  @media (max-width:330px) {
    max-width: 200px;
  }
`,vn=Vt.a`
color: ${Kt.purple};
`,yn=Vt.label`
  color: black;
  padding-top: 32px;
  padding-left: 32px;
  max-width: 300px;
`,bn=Vt.h4`
color: ${Kt.black};
max-width: 369px;
width: 100%;
padding-left: 32px;
padding-bottom: 26px;

@media (max-width:450px) {
    max-width: 330px;
  }

  @media (max-width:350px) {
    max-width: 230px;
  }
  @media (max-width:330px) {
    max-width: 200px;
  }
`,wn={RightSide:Vt.div`
    max-width: 516px;
    width: 100%;

    @media (max-width:600px) {
        margin: 0 auto ;
    }
`,ResponsiveFlexWrapper1:Vt(ln)`
margin: 0 auto;
    @media (max-width:300px) {
        max-width: 400px;
        gap: 0;
    }
`,ResponsiveFlexWrapper2:Vt(ln)`
margin: 0 auto;
    @media (max-width:500px) {
        max-width: 400px;
    }

    @media (max-width:330px) {
    max-width: 200px;

  }
`,SubTitle:Vt.h2`
    color: black;
    max-width: 650px;

    @media (max-width:900px) {
        padding-left: 20px;
    }

`,Link:Vt.a`
    text-decoration: none;
    @media (max-width:500px) {
        padding-right: 20px;
    }
`},Sn=()=>(0,Yt.jsxs)(wn.RightSide,{children:[(0,Yt.jsxs)(wn.ResponsiveFlexWrapper1,{justify:"space-between",align:"center",height:"48px",gap:"32px",margin:"0 auto 10px",maxWidth:"516px",children:[(0,Yt.jsx)(wn.SubTitle,{children:"All Posts"}),(0,Yt.jsx)(wn.Link,{className:"rightSideLinkFeatured",href:"",children:"View All"})]}),(0,Yt.jsxs)(wn.ResponsiveFlexWrapper2,{direction:"column",minHeight:"720px",children:[(0,Yt.jsx)(mn,{htmlFor:"post1",id:"post1"}),(0,Yt.jsx)(mn,{htmlFor:"post2",id:"post2"}),(0,Yt.jsx)(mn,{htmlFor:"post3",id:"post3"}),(0,Yt.jsx)(mn,{htmlFor:"post4",id:"post4"})]})]}),kn=Vt(on)`
@media (max-width: 500px) {
    padding: 0;
}
    
`,En=Vt(ln)`
    @media (max-width:900px) {
    flex-direction :column ;
    gap: 60px;
    min-height: 1650px;
}

@media ${Qt.tablet} {
    flex-direction :column ; 
}
`,Cn={Posts:Vt.section`
    max-width: 1440px;
    width: 100%;
    margin: 130px auto;
    @media (max-width:860px){
    min-height: 1650px;
    
    }
    
    @media ${Qt.tablet}{
    min-height: 1000px;
    
    }
`,ResponsiveContainer:kn,ResponsiveFlexWrapper:En,MediaWrapper:Vt.div`
    min-height: 800px;

    @media ${Qt.mobil}{
    min-height: 1600px;
    }
`},_n=()=>(0,Yt.jsx)(Cn.Posts,{id:"posts",children:(0,Yt.jsx)(Cn.ResponsiveContainer,{padding:"0 80px",children:(0,Yt.jsx)(Cn.MediaWrapper,{children:(0,Yt.jsxs)(Cn.ResponsiveFlexWrapper,{gap:"30px",children:[(0,Yt.jsx)(hn,{}),(0,Yt.jsx)(Sn,{})]})})})}),Pn=n.p+"static/media/mainImg.8ed8d2ff95561f9c4669.webp",Tn=e=>{let{family:t,weight:n,color:r,lineHeight:a,Fmin:i,Fmax:o}=e;return` \nfont-family: ${t||"Poppins"}; \nfont-weight: ${n||400}; \ncolor: ${r||""}; \nline-height: ${a||1.2}; \nfont-size: calc( (100vw - 360px) / (1440 - 360) * (${o} - ${i}) + ${i}px ); `},Fn=Vt.section`
  min-height: 720px;
  height: 100%;
  display: flex; 
`,zn=Vt.div`
  position: absolute;
  top: 228px;
  padding: 0 80px;
  z-index: 2;

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`,jn=Vt.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); // Полупрозрачная черная тень
  z-index: 1;
  pointer-events: none; // Не взаимодействуем с ним мышкой
  visibility: hidden;   // Скрываем изначально
  transition: visibility 0.3s ease-in-out; // Плавное появление при hover
`,Nn={StyledMain:Fn,PositionWraper:zn,ShadowOverlay:jn,ImageContainer:Vt.div`
  position: relative;
  max-width: 1440px;
  width: 100%;
  height: 720px;
  overflow: hidden;
  
  @media (max-width: 450px) {
    height: 820px;
  }
`,Photo:Vt.img`
  max-width: 1440px;
  width: 100%;
  height: 720px;
  object-fit: cover;
  transform: scaleX(-1);

  &:hover + ${jn} {
    visibility: visible; // Показываем затемнение при наведении
  }

  @media (max-width: 450px) {
    height: 820px;
  }
`,MainTitle:Vt.h1`
  /* ${Tn({family:"'Sen', sans-serif",weight:700,Fmax:56,Fmin:36})};
  letter-spacing: -0.035em; */

  color: ${Kt.font};
  text-align: left ;
  max-width: 804px;

  font-family: 'Sen', sans-serif;
  font-weight: 700;
  font-size: 56px;
  letter-spacing: -0.035em;

  margin: 24px 0;
  
  @media (max-width:1200px) {
    font-size: 50px;
  }

  @media (max-width:1000px) {
    font-size: 44px;
  }

  @media (max-width:500px) {
    font-size: 38px;
  }
`,SmallText:Vt.p`
max-width: 650px;
width: 100%;

margin-bottom: 48px;
`,PostMetadata:Vt.label`
  margin-bottom: 16px;
`,Name:Vt.a`
color: ${Kt.yellow};
`,UpperCaseText:Vt.span`
/* ${Tn({family:"'Inter', sans-serif",weight:600,Fmax:16,Fmin:12})};
letter-spacing: 0.187em;
line-height: 20px; */

font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.187em;
  
  @media (max-width:1200px) {
    font-size: 15px;
  }

  @media (max-width:1000px) {
    font-size: 14px;
  }

  @media (max-width:500px) {
    font-size: 12px;
  }
`,BoldWord:Vt.span`
  /* ${Tn({family:"'Inter', sans-serif",weight:900,Fmax:16,Fmin:12})};
  letter-spacing: 0.187em;
  line-height: 20px;  */

font-family: 'Inter', sans-serif;
  font-weight: 700;
  line-height: 20px; 
  font-size: 16px;
  letter-spacing: 0.187em;
  
  @media (max-width:1200px) {
    font-size: 15px;
  }

  @media (max-width:1000px) {
    font-size: 13px;
  }

  @media (max-width:500px) {
    font-size: 12px;
  }
`},Rn=()=>(0,Yt.jsx)(Nn.StyledMain,{id:"main",children:(0,Yt.jsxs)(on,{children:[(0,Yt.jsxs)(Nn.ImageContainer,{children:[(0,Yt.jsx)(Nn.Photo,{src:Pn,alt:"\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0441\u0442\u0430"}),(0,Yt.jsx)(Nn.ShadowOverlay,{})]}),(0,Yt.jsx)(Nn.PositionWraper,{children:(0,Yt.jsxs)(ln,{direction:"column",maxWidth:"804px",minHeight:"400px",children:[(0,Yt.jsxs)(Nn.UpperCaseText,{children:["POSTED ON ",(0,Yt.jsx)(Nn.BoldWord,{children:"STARTUP"})]}),(0,Yt.jsx)(Nn.MainTitle,{id:"postedOnStartup",children:"Step-by-step guide to choosing great font pairs"}),(0,Yt.jsxs)(Nn.PostMetadata,{htmlFor:"postedOnStartup",className:"postMetadata",children:["By ",(0,Yt.jsx)(Nn.Name,{className:"nameAutor",href:"",children:"James West"})," | May 23, 2022"]}),(0,Yt.jsx)(Nn.SmallText,{children:"Duis aute irute dolor in reprehenderit in voluptate valit essce cillum dolor eu fugiat nulia pariatur. Excepteur sint occaecat cupidatat non proident."}),(0,Yt.jsx)(dn,{children:"Read More >"})]})})]})}),On=(function(t){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var o=Bt.apply(void 0,a([t],n,!1)),l="sc-global-".concat(Pe(JSON.stringify(o))),s=new qt(o,l),u=function(t){var n=_t(),r=e.useContext(It),a=e.useRef(n.styleSheet.allocateGSInstance(l)).current;return n.styleSheet.server&&c(a,t,n.styleSheet,r,n.stylis),e.useLayoutEffect(function(){if(!n.styleSheet.server)return c(a,t,n.styleSheet,r,n.stylis),function(){return s.removeStyles(a,n.styleSheet)}},[a,t,n.styleSheet,r,n.stylis]),null};function c(e,t,n,a,i){if(s.isStatic)s.renderStyles(e,pe,n,i);else{var o=r(r({},t),{theme:ge(t,a,u.defaultProps)});s.renderStyles(e,o,n,i)}}return e.memo(u)})`
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${Kt.font};
    line-height: 1.2;

    font-family: 'Sen', sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1px;
}


button{
  /* ${Tn({family:"'Sen', sans-serif",weight:700,Fmax:18,Fmin:12})}; */

  font-family:'Sen', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0px;
  cursor: pointer; 

  @media (max-width:1200px) {
    font-size: 16px;
  }

  @media (max-width:1000px) {
    font-size: 14px;
  }

  @media (max-width:500px) {
    font-size: 12px;
  }
}


//  Inter Regular 400
p {
  /* ${Tn({family:"'Inter', sans-serif",weight:400,Fmax:16,Fmin:13})}; */
  

  font-family:'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  letter-spacing: 0.062em; 


  @media (max-width:1200px) {
    font-size: 15px;
  }

  @media (max-width:1000px) {
    font-size: 14px;
  }

  @media (max-width:500px) {
    font-size: 13px;
  }
}




//  Inter Regular 400
a.nameAutor,
span.postMetadata {   
  /* ${Tn({family:"'Sen', sans-serif",weight:700,Fmax:16,Fmin:12})};*/
  /* letter-spacing: 0.062em; */

  font-family: 'Sen', sans-serif ;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.062em;
}

a.nameAutor{
  color: ${Kt.purple}
}



//  Inter Regular 600
span.mainUpperCaseText {   
  font-family: 'Inter', sans-serif ;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 3px;

  
  @media (max-width:1200px) {
    font-size: 15px;
    }

    @media (max-width:1000px) {
      font-size: 14px;
    }

    @media (max-width:500px) {
      font-size: 12px;
    }
}




label {
    /* ${Tn({family:"'Sen', sans-serif",weight:700,Fmax:16,Fmin:12})}; */

    font-family: 'Sen', sans-serif ;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.062em;
    line-height: 1.2;

    @media (max-width:1200px) {
    font-size: 15px;
    }

    @media (max-width:1000px) {
      font-size: 14px;
    }

    @media (max-width:500px) {
      font-size: 12px;
    }
}

h2 {
  /* ${Tn({family:"'Sen', sans-serif",weight:700,Fmax:36,Fmin:24})};*/
  font-family: 'Inter', sans-serif ;
  font-weight: 700;
  font-size: 36px;
  letter-spacing: -0.055em;  

  @media (max-width:1200px) {
    font-size: 32px;
  }

  @media (max-width:1000px) {
    font-size: 28px;
  }

  @media (max-width:500px) {
    font-size: 24px;
  }
}

h3 {
  /* ${Tn({family:"'Sen', sans-serif",weight:700,Fmax:28,Fmin:16})}; */

  font-family: 'Sen', sans-serif ;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: -0.055em;  

  @media (max-width:1200px) {
    font-size: 24px;
  }

  @media (max-width:1000px) {
    font-size: 20px;
  }

  @media (max-width:500px) {
    font-size: 16px;
  }

}

h4 {
  /* ${Tn({family:"'Sen', sans-serif",weight:700,Fmax:24,Fmin:18})}; */

  font-family: 'Sen', sans-serif ;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0px;  

  @media (max-width:1200px) {
    font-size: 22px;
  }

  @media (max-width:1000px) {
    font-size: 20px;
  }

  @media (max-width:500px) {
    font-size: 18px;
  }

}

a.rightSideLinkFeatured,
a.linkHeader {
    /* ${Tn({family:"'Inter', sans-serif",weight:400,Fmax:16,Fmin:12})};
    letter-spacing: 0px;   */

    font-family: 'Inter', sans-serif ;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0px;  

  @media (max-width:1200px) {
    font-size: 15px;
  }

  @media (max-width:1000px) {
    font-size: 14px;
  }

  @media (max-width:500px) {
    font-size: 12px;
  }
}


a{
  text-decoration: none;
}



`,Ln={AboutUs:Vt.section`
margin-top: 130px;

@media (max-width:900px) {
    max-width: none;
    flex-direction: column;
    gap: 30px;
    min-height:850px ;
}
`,ColorPaginationLeft:Vt.div`
    background-color: ${Kt.yellow};
    width: 779px ;
    height: 23px;
`,ColorPaginationRights:Vt.div`
    background-color: ${Kt.purple};  
    width: 282px ;
    height: 23px;
`,TitleLeftSide:Vt.h2`
color: ${Kt.black};   
max-width: 460px;
padding: 16px 0;

@media (max-width:1200px) {
        max-width: 420px;
}

@media (max-width:900px) {
        max-width: 500px;
}

@media (max-width: 573px) {
    max-width: 380px;    
}
`,TitleRightSide:Vt.h2`
color: ${Kt.black};   
max-width: 460px;
padding:16px 0;
@media (max-width:1200px) {
    max-width: 420px;
}

@media (max-width:900px) {
    max-width: 500px;
}

@media (max-width: 573px) {
    max-width: 420px;       
}
`,ResponsiveFlexWrapper1:Vt(ln)`

@media (max-width:900px) {
    margin:0 auto;
    flex-direction: column;
    gap: 30px;
    max-width: 400px;
    padding: 0;
}
    

@media (max-width:500px) {
        margin:0 auto;
        padding:0;
        max-width: 330px;
    }

    @media (max-width:350px) {
        margin:0 auto;
        padding:0;
        max-width: 230px;
    }
`,ResponsiveFlexWrapper2:Vt(ln)`

@media (max-width:900px) {
    max-width: 500px;
    padding:96px 0 0 0 ;
}

@media (max-width:450px) {
    max-width: 320px;
}

@media (max-width:350px) {
    max-width: 240px;
}
`,ResponsiveFlexWrapper3:Vt(ln)`

@media (max-width:900px) {
    max-width: 500px;
    padding: 40px 0 0 0;
}

@media (max-width:450px) {
    max-width: 320px;
}

@media (max-width:350px) {
    max-width: 240px;
}
`,BackgroundBlock:Vt.div`
    background-color: ${Kt.lavender};
    @media (max-width:900px) {
    flex-direction: column;
    gap: 30px;
    min-height:850px ;
}
`,TextBlocks:Vt.p`
    color: ${Kt.mediumGrey};    
    max-width: 460px;

    @media (max-width:1200px) {
        max-width: 420px;
}

    @media (max-width:900px) {
        max-width: 500px;
}

    @media (max-width:900px) {
        max-width: 600px;
}
`,Link:Vt.a`
    /* ${Tn({family:"'Sen', sans-serif",weight:700,Fmax:18,Fmin:14})};
    letter-spacing: 0.19em;
    line-height: 178%; */

    font-family:'Sen', sans-serif;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.19em;
    line-height: 178%;

    @media (max-width:1200px) {
        font-size: 16px;
    }

    @media (max-width:1000px) {
        font-size: 15px;
    }

    @media (max-width:500px) {
        font-size: 14px;
    }


    padding-top: 16px;
    color: ${Kt.purple};
    max-width: 140px;
    margin-bottom: 60px;
    `,CommitForBlock:Vt.span`
    /* ${Tn({family:"'Sen', sans-serif",weight:600,Fmax:16,Fmin:12})};
    letter-spacing: 0.19em; */


    font-family:'Sen', sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.19em;

    @media (max-width:1200px) {
        font-size: 15px;
    }

    @media (max-width:1000px) {
        font-size: 14px;
    }

    @media (max-width:500px) {
        font-size: 12px;
    }

    padding: 24px 0 8px ;
    max-width: 140px;
    height: 52px;
    color: ${Kt.black};
    `},An=()=>(0,Yt.jsx)(Ln.AboutUs,{id:"about-us",children:(0,Yt.jsxs)(on,{children:[(0,Yt.jsxs)(ln,{"max-width":"1440px",direction:"row-reverse",height:"23px",children:[(0,Yt.jsx)(Ln.ColorPaginationRights,{}),(0,Yt.jsx)(Ln.ColorPaginationLeft,{})]}),(0,Yt.jsx)(Ln.BackgroundBlock,{children:(0,Yt.jsxs)(Ln.ResponsiveFlexWrapper1,{gap:"30px",maxWidth:"1200px",width:"100%",padding:"0 80px",children:[(0,Yt.jsxs)(Ln.ResponsiveFlexWrapper2,{className:"leftSideAboutAs",maxWidth:"515px",padding:"80px 0 0 0",direction:"column",children:[(0,Yt.jsx)(Ln.CommitForBlock,{children:"ABOUT US"}),(0,Yt.jsx)(Ln.TitleLeftSide,{children:"We are a community of content writers who share their learnings"}),(0,Yt.jsx)(Ln.TextBlocks,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,Yt.jsx)(Ln.Link,{href:"",children:"Read More >"})]}),(0,Yt.jsxs)(Ln.ResponsiveFlexWrapper3,{className:"RightSideAboutAs",maxWidth:"516px",padding:"80px 0 0 0",direction:"column",children:[(0,Yt.jsx)(Ln.CommitForBlock,{children:"Our mision"}),(0,Yt.jsx)(Ln.TitleRightSide,{children:"Creating valuable content for creatives all around the world"}),(0,Yt.jsx)(Ln.TextBlocks,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),"``                 "]})})]})}),In={IconWrapper:Vt.div` 
margin-bottom: 14px; 
margin-top: 32px;
margin-left: 32px;
position: relative; 
width: 48px;
height: 48px;
z-index: 0;
&::before {
    content: '';
    display: inline-block;
    width: 48px;
    height: 48px;
    
    background-color: #FBF6EA;
    border-radius: 25%;
    transform:translate(-50%, -50%);

    position: absolute;

top: 50%;
left: 50%;
    transform-origin: top left  ;
    z-index: -1;

}`,LogoCatagoryies:Vt.div`
    background-color: ${e=>e.background||"#FFFFFF"};
    border: ${e=>e.border||"none"};
    max-width: 296px;
    width: 100%;
    min-height: 228px;
    cursor: pointer;

    &:hover{
        background-color: #FFD050;
    }
`,CatagoryTitle:Vt.h3`
    padding-left: 32px;
    padding-top: 16px;
    color: ${Kt.black};
`,CatagoryText:Vt.p`
    margin-top: 4px;
    padding-left: 32px;
    max-width: 280px;
    font-family: 'Inter', sans-serif ;
    color: ${Kt.mediumGrey};   
    padding-bottom: 32px;
    color: #6D6E76;   
`},Dn=e=>{var t,n;return(0,Yt.jsx)(In.LogoCatagoryies,{...e,children:(0,Yt.jsxs)(ln,{direction:"column",maxWidth:"296px",minHeight:"228px",children:[(0,Yt.jsx)(In.IconWrapper,{children:e.iconId&&(0,Yt.jsx)(tn,{iconId:e.iconId,viewBox:e.viewBox})}),(0,Yt.jsx)(In.CatagoryTitle,{children:null!==(t=e.title)&&void 0!==t?t:""}),(0,Yt.jsx)(In.CatagoryText,{children:null!==(n=e.description)&&void 0!==n?n:""})]})})},$n={Catagoryies:Vt.section`
    margin: 128px auto;
    width: 100%;
    min-height: 324px;
`,ResponsiveFlexWrapper1:Vt(ln)`
@media (max-width:784px) {
    min-height: 1200px;
}
`,ResponsiveFlexWrapper2:Vt(ln)`
@media (max-width:1175px) {
    flex-wrap: wrap;
}

@media (max-width:784px) {
    min-height: 1020px;
    justify-content: space-around;
}
    @media (max-width:500px) {
    padding: 0 20px;
}
`,TitleCatagoryies:Vt.h2`
    color: ${Kt.black};
    margin: 0 auto;
    padding-bottom:48px ;
`,MiniResponsiveFlexWrapper:Vt(ln)`
@media (max-width:1175px) {
    flex-wrap: wrap;
    justify-content: space-around;
}
`},Mn=()=>(0,Yt.jsx)($n.Catagoryies,{children:(0,Yt.jsx)(on,{children:(0,Yt.jsxs)($n.ResponsiveFlexWrapper1,{direction:"column",maxWidth:"1280px",minHeight:"324px",margin:"0 auto",children:[(0,Yt.jsx)($n.TitleCatagoryies,{children:"Choose A Catagory"}),(0,Yt.jsxs)($n.ResponsiveFlexWrapper2,{maxWidth:"1280px",minHeight:"228px",gap:"32px",justify:"space-between",padding:"0 80px",children:[(0,Yt.jsxs)($n.MiniResponsiveFlexWrapper,{gap:"32px",justify:"space-around",children:[(0,Yt.jsx)(Dn,{border:"1px solid #6D6E76",iconId:"businessSvg",title:"Business",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}),(0,Yt.jsx)(Dn,{border:"1px solid #6D6E76",iconId:"startupSvg",viewBox:"-13 -14 48 48",title:"Startup",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."})]}),(0,Yt.jsxs)($n.MiniResponsiveFlexWrapper,{gap:"32px",justify:"space-around",children:[(0,Yt.jsx)(Dn,{border:"1px solid #6D6E76",iconId:"economySvg",title:"Economy",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}),(0,Yt.jsx)(Dn,{border:"1px solid #6D6E76",iconId:"technologySvg",viewBox:"-13 -14 48 48",title:"Technology",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."})]})]})]})})}),Wn=n.p+"static/media/specialPostImg.0622fafdd3291dc9f179.webp",Bn={CpecialPost:Vt.section`
    max-width: 1440px;
    width: 100%;
    margin: 128px auto;
`,ResponsiveFlexWrapper1:Vt(ln)`
min-height: 920px;
`,ResponsiveFlexWrapper2:Vt(ln)`
    
    padding: 0 80px;

    @media (max-width: 900px) {
        padding: 0 40px;  
    }

    @media (max-width: 550px) {
        padding: 0 20px;  
    }

    @media (max-width: 550px) {
        padding: 0 5px;  
    }
`,ButtonResponsive:Vt(dn)`
    @media (max-width: 600px) {
            margin-right: 20px ;  
    }
`,Photo:Vt.img`
    max-width: 950px;
    width: 100%;
    height: 705px;
    padding-left: 80px;
    object-fit: cover;
    @media (max-width: 930px) {
            padding: 0 ;  
    }
    `,CommitForBlock:Vt.span`
        color: ${Kt.black};
        padding: 80px 0 24px ;
        max-width: 220px;
        @media (max-width: 1000px) {
            padding: 80px 0 24px 0;    
        }
`,FavoriteTitle:Vt.h1`
    /* ${Tn({family:"'inter', sans-serif",weight:700,Fmax:48,Fmin:20})};
    letter-spacing: -0.004em; */

    font-family:'inter', sans-serif;
    font-weight: 700;
    font-size: 48px;
    letter-spacing: -0.004em;


    @media (max-width:1200px) {
        font-size: 40px;
    }

    @media (max-width:1000px) {
        font-size: 32px;
    }

    @media (max-width:500px) {
        font-size: 24px;
    }



    color: ${Kt.black};
    padding: 0 80px 0 0;
    @media (max-width: 1000px) {
            padding: 0 0 16px 0;    
        }
`,TextBlocks:Vt.p`
    color: ${Kt.mediumGrey};      
    padding: 0 0 32px 0;
    @media (max-width: 1000px) {
            padding: 0 0 32px 0;    
        }
`,PositionWrapper:Vt.div`
    margin:121px 0 0 0;
    max-width: 706px;
    max-height: 584px;
    height: 100%;
    position: absolute;
    left: 45%;
    right: 0;
    display: flex;
    flex-grow: 1;
        
    background-color: ${Kt.font};


    @media (max-width: 600px) {
        left: 35%;    
        }
`},Hn=()=>(0,Yt.jsx)(Bn.CpecialPost,{children:(0,Yt.jsx)(on,{children:(0,Yt.jsxs)(Bn.ResponsiveFlexWrapper1,{children:[(0,Yt.jsx)(Bn.Photo,{src:Wn,alt:"\u0444\u043e\u043d \u0434\u043b\u044f \u0441\u0435\u043a\u0446\u0438\u0438"}),(0,Yt.jsx)(Bn.PositionWrapper,{children:(0,Yt.jsxs)(Bn.ResponsiveFlexWrapper2,{direction:"column",children:[(0,Yt.jsx)(Bn.CommitForBlock,{children:"Why we started "}),(0,Yt.jsx)(Bn.FavoriteTitle,{children:"It started out as a simple idea and evolved into our passion"}),(0,Yt.jsx)(Bn.TextBlocks,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."}),(0,Yt.jsx)(ln,{children:(0,Yt.jsx)(Bn.ButtonResponsive,{width:"269px",height:"56px",background:"#FFD050",children:"Discover our story >"})})]})})]})})}),Un={Autor:Vt.div`
    background-color: ${e=>e.background||"#F4F4F4"};
    max-width: 296px;
    max-height: 324px;
    width: 100%;
    cursor: pointer;

    &:hover{
    background-color: #FBF6EA;
    }
`,SocialNetworkIconWrapper:Vt.div`
    max-width: 16px;
    max-height: 16px;
`,Photo:Vt.img`
    margin: 40px auto 0;
    display: block;
    object-fit: cover;
    border-radius: 50%;
    width: 128px; // Выравниваем картинку по ширине
    height: 128px; // Сохраняем пропорции картинки
`,AutorTitle:Vt.h3`
    color: ${Kt.black};
    margin: 20px auto 0;
`,AutorText:Vt.p`
    color: ${Kt.mediumGrey};
    margin: 0 auto;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;

`},Vn=e=>{var t,n,r;return(0,Yt.jsx)(Un.Autor,{...e,children:(0,Yt.jsxs)(ln,{direction:"column",children:[(0,Yt.jsx)(Un.Photo,{src:null!==(t=e.photo)&&void 0!==t?t:"",alt:"Author's photo"}),(0,Yt.jsx)(Un.AutorTitle,{children:null!==(n=e.title)&&void 0!==n?n:""}),(0,Yt.jsx)(Un.AutorText,{children:null!==(r=e.description)&&void 0!==r?r:""}),(0,Yt.jsxs)(ln,{width:"112px",height:"16px",margin:"20px auto 40px",gap:"16px",children:[(0,Yt.jsx)(Un.SocialNetworkIconWrapper,{children:(0,Yt.jsx)(tn,{iconId:"facebookSvg",viewBox:"0 0 52 52"})}),(0,Yt.jsx)(Un.SocialNetworkIconWrapper,{children:(0,Yt.jsx)(tn,{iconId:"twitterSvg",viewBox:"0 0 52 52"})}),(0,Yt.jsx)(Un.SocialNetworkIconWrapper,{children:(0,Yt.jsx)(tn,{iconId:"instaSvg",viewBox:"0 0 52 52"})}),(0,Yt.jsx)(Un.SocialNetworkIconWrapper,{children:(0,Yt.jsx)(tn,{iconId:"inSvg",viewBox:"0 0 52 52"})})]})]})})},qn=n.p+"static/media/FloydMiles.53dba9b1cceb80d51ae6.webp",Kn=n.p+"static/media/DianneRussill.94438d36bc2f497da207.webp",Qn=n.p+"static/media/JennyWilson.4b3842cbd853a6fbbf71.webp",Gn=n.p+"static/media/LeslieAlexander.3bf1ac0429dfcb6ecf75.webp",Yn={ListOfAuthors:Vt.section`
    margin: 128px auto;
    max-width: 1440px;
    width: 100%;
    @media (max-width:784px) {
    max-height: 1444px;
}
`,MainTitleAutors:Vt.h2`
    margin: 0 auto;
    color: ${Kt.black};
`,ResponsiveFlexWrapper1:Vt(ln)`
    @media (max-width:785px) {
        min-height: 1480px;
    }
`,ResponsiveFlexWrapper2:Vt(ln)`
    @media (max-width:785px) {
        flex-wrap: wrap;
    }

    @media (max-width:500px) {
        padding: 0 20px;
    }
`,MiniResponsiveFlexWrapper:Vt(ln)`
    @media (max-width:1175px) {
        flex-wrap: wrap;
        justify-content: space-around;
    }
`},Xn=()=>(0,Yt.jsx)(Yn.ListOfAuthors,{children:(0,Yt.jsx)(on,{children:(0,Yt.jsxs)(Yn.ResponsiveFlexWrapper1,{maxWidth:"1280px",direction:"column",children:[(0,Yt.jsx)(Yn.MainTitleAutors,{children:"List of Authors"}),(0,Yt.jsxs)(Yn.ResponsiveFlexWrapper2,{margin:"48px auto 0",gap:"32px",padding:"0 80px",children:[(0,Yt.jsxs)(Yn.MiniResponsiveFlexWrapper,{gap:"32px",children:[(0,Yt.jsx)(Vn,{photo:qn,title:"Floyd Miles",description:"Content Writer @Company",background:"#F4F4F4"}),(0,Yt.jsx)(Vn,{photo:Kn,title:"Dianne Russill",description:"Content Writer @Company",background:"#F4F4F4"})]}),(0,Yt.jsxs)(Yn.MiniResponsiveFlexWrapper,{gap:"32px",children:[(0,Yt.jsx)(Vn,{photo:Qn,title:"Jenny Wilson",description:"Content Writer @Company",background:"#F4F4F4"}),(0,Yt.jsx)(Vn,{photo:Gn,title:"Leslie Alexander",description:"Content Writer @Company",background:"#F4F4F4"})]})]})]})})}),Jn={Logos:Vt.section`
    margin: 96px auto;
    max-width: 1440px;
    min-height: 52px;
`,ResponsiveFlexWrapper1:Vt(ln)`
      @media (max-width:500px) {
        flex-direction: column;
    }
`,ResponsiveFlexWrapper2:Vt(ln)`
@media (max-width:500px) {
    margin: 0 auto;
    min-height: 80px;
}

@media (max-width:500px) {
    margin: 0;
    min-height: 80px;
}
`,ResponsiveFlexWrapper3:Vt(ln)`
    @media (max-width:1300px) {
        flex-wrap: wrap;
    }

 
    @media ${Qt.mobil} {
    flex-direction :column ;
    gap: 30px;
    }

    @media (max-width:500px) {
    margin: 0 auto 30px;
    max-width: 300px;
    }

    @media (max-width:350px) {
    margin: 0 0 0 30px;
    max-width: 200px;
    }

`,ResponsiveLogoWrapper1:Vt(ln)`
      @media (max-width: 900px) {
        flex-direction: column;
        max-width: 300px;
        gap: 30px;
    }
`,ResponsiveLogoWrapper2:Vt(ln)`
    @media (max-width: 900px) {
        flex-direction: column;
        max-width: 300px;
    }
`,LogoContainer:Vt.div`
    margin: 12px auto;
    width: 200px;
    height: 48px;

`,LogoIconWrapper1:Vt.div`
    max-width: 200px;
    max-height: 32px;
    margin: 0 auto ;
`,LogoIconWrapper2:Vt.div`
    max-width: 200px;
    max-height: 32px;
    margin: 0 auto ;
`,LogoIconWrapper3:Vt.div`
    max-width: 200px;
    max-height: 32px;
    margin: 0 auto ;
`,LogoIconWrapper4:Vt.div`
    max-width: 200px;
    max-height: 32px;
    margin: 0 auto ;
`,LogoIconWrapper5:Vt.div`
    width: 200px;
    height: 32px;
    margin: 0 auto ;
`,TextLogos:Vt.span`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    color: ${Kt.mediumGrey};
    padding-left: 80px;

    @media (max-width:500px) {
        padding-left: 20px;
    }
`,MainTitleLogos:Vt.h4`
    color: ${Kt.black};
    font-family: 'Sen', sans-serif;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0px;
    color: ${Kt.mediumGrey};
    width: 240px;
    padding-left: 80px;

    @media (max-width:500px) {
        padding-left: 20px;
    }
`},Zn=()=>(0,Yt.jsx)(Jn.Logos,{children:(0,Yt.jsx)(on,{children:(0,Yt.jsxs)(Jn.ResponsiveFlexWrapper1,{maxWidth:"1237px",minHeight:"52px",margin:"0 auto",gap:"60px",children:[(0,Yt.jsxs)(Jn.ResponsiveFlexWrapper2,{direction:"column",width:"136px",children:[(0,Yt.jsx)(Jn.TextLogos,{children:"We are"}),(0,Yt.jsx)(Jn.MainTitleLogos,{children:"Featured in"})]}),(0,Yt.jsxs)(Jn.ResponsiveFlexWrapper3,{maxWidth:"1015px",gap:"30px",justify:"space-between",children:[(0,Yt.jsxs)(Jn.ResponsiveLogoWrapper1,{gap:"0px",children:[(0,Yt.jsx)(Jn.LogoIconWrapper1,{children:(0,Yt.jsx)(Jn.LogoContainer,{children:(0,Yt.jsx)(tn,{iconId:"logo1Svg",viewBox:"0 0 120 47.5",width:"200px"})})}),(0,Yt.jsx)(Jn.LogoIconWrapper2,{children:(0,Yt.jsx)(Jn.LogoContainer,{children:(0,Yt.jsx)(tn,{iconId:"logo2Svg",viewBox:"0 0 100 47.5",width:"200px"})})})]}),(0,Yt.jsxs)(Jn.ResponsiveLogoWrapper2,{gap:"30px",children:[(0,Yt.jsx)(Jn.LogoIconWrapper3,{children:(0,Yt.jsx)(Jn.LogoContainer,{children:(0,Yt.jsx)(tn,{iconId:"logo3Svg",viewBox:"0 0 120 47.5",width:"200px"})})}),(0,Yt.jsx)(Jn.LogoIconWrapper4,{children:(0,Yt.jsx)(Jn.LogoContainer,{children:(0,Yt.jsx)(tn,{iconId:"logo4Svg",viewBox:"0 0 100 49",width:"200px"})})}),(0,Yt.jsx)(Jn.LogoIconWrapper5,{children:(0,Yt.jsx)(Jn.LogoContainer,{children:(0,Yt.jsx)(tn,{iconId:"logo5Svg",viewBox:"0 0 100 47.5",width:"200px"})})})]})]})]})})}),er={ResponsiveFlexWrapper1:Vt(ln)`

@media (max-width:1250px) {
    max-width: 400px;
}

@media (max-width:1000px) {
    max-width: 300px;
}
    @media (max-width: 875px){
    max-width: 700px;
    margin: 0 auto;
}

    @media (max-width: 600px){
    max-width: 400px;
    margin: 0 auto;
}

    @media (max-width: 460px){
    max-width: 250px;
    margin: 0 auto;
}

`,ResponsiveFlexWrapper2:Vt(ln)`

@media (max-width:1100px) {
    flex-wrap: wrap;
}

`,SubTitleTestimony:Vt.h4`
max-width: 470px;
color: ${Kt.black};
margin:80px 0 120px 0;

@media (max-width:875px) {
        max-width: 700px;
        min-width: 200px;
        margin:80px 0 120px 0;
}
`,Photo:Vt.img`
width: 48px;
height: 48px;
object-fit: cover;
border-radius: 50%;
position: relative;
`,AutorsName:Vt.h4`
width: 120px;
color: ${Kt.black};
`,Address:Vt.span`
color: ${Kt.mediumGrey};
`,ButtonBackBlock:Vt.div`
    width: 62px;
    height: 62px;
    position: relative;
`,BackButton:Vt.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: aliceblue;
    border: none;
    position: absolute;
    top: 12.5%;
    left: 12.5%;
    
    &:Hover{
        top: 5%;
        left: 5%;
        width: 62px;
        height: 62px;  
        position: absolute;     
    }
`,ButtonNextBlock:Vt.div`
    width: 62px;
    height: 62px;
    position: relative;
`,NextButton:Vt.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: black;
    border: none;
    position: absolute;
    top: 12.5%;
    left: 12.5%;


    &:Hover{
        position: absolute;
        top: 5%;
        left: 5%;
        width: 62px;
        height: 62px; 
        transition: 0.5s ;
    }
`},tr=e=>{let{description:t,photoAvtor:n,name:r,address:a}=e;return(0,Yt.jsxs)(er.ResponsiveFlexWrapper1,{direction:"column",width:"555px",children:[(0,Yt.jsx)(er.SubTitleTestimony,{children:t||"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,Yt.jsx)(er.ResponsiveFlexWrapper2,{margin:"0 0 75px 0",maxWidth:"260px",children:(0,Yt.jsxs)(ln,{gap:"16px",maxWidth:"250px",children:[(0,Yt.jsx)(er.Photo,{src:n||"",alt:""}),(0,Yt.jsxs)(ln,{direction:"column",maxWidth:"350px",margin:"0 141px 0 0",children:[(0,Yt.jsx)(er.AutorsName,{children:r}),(0,Yt.jsx)(er.Address,{children:a})]})]})})]})},nr=n.p+"static/media/JonatanVallem.bc1c52f80bcc4cfce28c.webp",rr=n.p+"static/media/ivanova alexandra.c750ad323f9190acb792.webp",ar=n.p+"static/media/Koldunov brother.d29132b8fe0dc93b62e9.webp";const ir=n.p+"static/media/ArrowLeft.7ca349ec88a70f799eb58a259c47747c.svg";const or=n.p+"static/media/ArrowRirht.3b3eed6cac1dfd1062d07c25785d8a65.svg",lr={Sliders:Vt.div`
    display: flex;
    position: relative;

    @media (max-width:1250px) {
    flex-direction: column;
}
    
`,ResponsiveFlexWrapper:Vt(ln)`
  align-items: flex-end;
  margin: auto 0;
  width: 140px;
  position: absolute;
  right: 20px;
  bottom: 76px;
  height: 68px;


  @media (max-width:1250px) {
    /* max-width: 300px;
    margin: 0 0 40px 120px; */
      right: 20px;
  bottom: 76px;
}


  @media (max-width:1000px) {
    /* max-width: 300px;
    margin: 0 0 40px 120px; */
      right: -20px;
  bottom: 76px;
}

  @media (max-width:875px) {
      right: 80px;
  bottom: 76px;
}

  @media (max-width:465px) {
      right: 20px;
  bottom: 76px;
}



@media (max-width:400px) {
    right: -5px;
    bottom: 76px;
}


@media (max-width:400px) {
    right: -25px;
    bottom: 76px;
}

`,ButtonBackBlock:Vt.div`
    width: 62px;
    height: 62px;
    position: relative;
`,BtnNext:Vt.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: black;
    border: none;
    position: absolute;
    top: 12.5%;
    left: 12.5%;

    &:Hover{
        top: 5%;
        left: 5%;
        width: 62px;
        height: 62px;  
        position: absolute;     
    }
`,BtnPrev:Vt.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: aliceblue;
    border: none;
    position: absolute;
    top: 12.5%;
    left: 12.5%;

&:Hover{
        top: 5%;
        left: 5%;
        width: 62px;
        height: 62px;  
        position: absolute;     
    }
`},sr=[{id:1,photoAvtor:nr,name:"Jonathan Vallem",adress:"New York, USA"},{id:2,photoAvtor:rr,name:"Alexandra Ivanova",adress:"Hollywood, USA"},{id:3,photoAvtor:ar,name:"Koldunov Brothers",adress:"Texas, USA"}],ur=()=>{const[t,n]=(0,e.useState)(0);return(0,Yt.jsxs)(lr.Sliders,{children:[(0,Yt.jsx)(tr,{...sr[t]}),(0,Yt.jsxs)(lr.ResponsiveFlexWrapper,{children:[(0,Yt.jsx)(lr.ButtonBackBlock,{children:(0,Yt.jsx)(lr.BtnPrev,{onClick:()=>{n(0===t?sr.length-1:t-1)},children:(0,Yt.jsx)("img",{src:ir,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0434\u043b\u044f \u043a\u043d\u043e\u043f\u043a\u0438 \u043f\u0435\u0440\u0435\u043b\u0438\u0441\u0442\u044b\u0432\u0430\u043d\u0438\u044f \u043d\u0430 \u043b\u0435\u0432\u044b\u0439 \u043e\u0442\u0437\u044b\u0432"})})}),(0,Yt.jsx)(lr.ButtonBackBlock,{children:(0,Yt.jsx)(lr.BtnNext,{onClick:()=>{n(t===sr.length-1?0:t+1)},children:(0,Yt.jsx)("img",{src:or,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0434\u043b\u044f \u043a\u043d\u043e\u043f\u043a\u0438 \u043f\u0435\u0440\u0435\u043b\u0438\u0441\u0442\u044b\u0432\u0430\u043d\u0438\u044f \u043d\u0430 \u043f\u0440\u0430\u0432\u044b\u0439 \u043e\u0442\u0437\u044b\u0432"})})})]})]})},cr=Vt.section`
margin: 96px auto;
    max-width:1280px ;
    height: 100%;
    background-color: ${Kt.lightYellow};
`,dr=Vt(ln)`

@media (max-width:875px) {
    flex-direction: column;
    padding: 0;
}

@media (max-width:500px) {
    padding: 0 20px;
}

`,fr=Vt(ln)`

    @media (max-width: 875px){
    width: 800px;
    margin: 92px auto 0;
}

    @media (max-width: 650px){
    width: 400px;
}

    @media (max-width: 460px){
    max-width: 250px;
    margin: 40px 0 0 0;
}

`,pr=Vt.div`
    background-color: #DCDCDC; 
    width: 1px;                
    height: 310px;            
    margin:auto 86px 94px ;
    transform: translateX(-50%); /* Для точного централирования */

    @media (max-width:875px) {
        transform: translateY(-50%);
        margin: 40px auto 10px;
        width: 310px;                
        height: 1px;  
}

@media (max-width:450px) {
        transform: translateY(-50%);
        margin: 40px auto 10px;
        width: 200px;                
        height: 1px;  
}


`,hr=Vt.h2`
color: ${Kt.black};
margin-bottom: 10px;
@media (max-width:875px) {
        margin: 0 auto 10px;
}
`,mr={Testimony:cr,ResponsiveFlexWrapper1:dr,ResponsiveFlexWrapper2:fr,CenterLine:pr,TextTestimony:Vt.p`
color: ${Kt.mediumGrey};

@media (max-width:875px) {
        margin: 0 auto ;
}
`,MainTitleTestimony:hr,DescriptionBlock:Vt.span`
margin-bottom: 10px;
letter-spacing: 3px;
text-transform: uppercase;
color: ${Kt.black};

@media (max-width:875px) {
        margin: 0 auto 10px;
}
`},gr=()=>(0,Yt.jsx)(mr.Testimony,{children:(0,Yt.jsx)(on,{children:(0,Yt.jsxs)(mr.ResponsiveFlexWrapper1,{padding:"0 112px",children:[(0,Yt.jsxs)(xr,{children:[(0,Yt.jsxs)(mr.ResponsiveFlexWrapper2,{direction:"column",margin:"92px 0 0 0",maxWidth:"349px",children:[(0,Yt.jsx)(mr.DescriptionBlock,{children:"TESTIMONIALs"}),(0,Yt.jsx)(mr.MainTitleTestimony,{children:"What people say about our blog"}),(0,Yt.jsx)(mr.TextTestimony,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."})]}),(0,Yt.jsx)(mr.CenterLine,{})]}),(0,Yt.jsx)(ur,{})]})})}),xr=Vt(ln)`
    /* min-width: 300px; */
    max-width: 520px;

    @media (max-width: 875px){
    flex-direction: column;
    width: 800px;
    margin: 0 auto;
}

    @media (max-width: 875px){
    width: 800px;
    margin: 0 auto;
}

    @media (max-width: 650px){
    width: 400px;
    margin: 0 auto;
}

    @media (max-width: 460px){
    max-width: 250px;
    margin: 0 auto;
    
}
`,vr={JoinOurTeam:Vt.section`
margin: 128px auto;
    max-width: 414px;
`,InviteTitle:Vt.h2`
color: ${Kt.black};    
text-align: center;
`,InviteText:Vt.p`
margin-top: 16px;
max-width: 400px;
letter-spacing: 0px;
color: ${Kt.mediumGrey};
text-align: center;
`},yr=()=>(0,Yt.jsx)(vr.JoinOurTeam,{children:(0,Yt.jsx)(on,{children:(0,Yt.jsxs)(ln,{direction:"column",maxWidth:"400px",children:[(0,Yt.jsx)(vr.InviteTitle,{children:"Join our team to be a part of our story"}),(0,Yt.jsx)(vr.InviteText,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}),(0,Yt.jsx)(dn,{margin:"32px auto 0",children:"Join Now"})]})})}),br=e=>(0,Yt.jsx)(wr,{children:(0,Yt.jsx)("ul",{children:e.menuItems.map((e,t)=>(0,Yt.jsx)(Sr,{children:(0,Yt.jsx)(kr,{className:"linkHeader",href:"",children:e})},t))})}),wr=Vt.nav`
    ul{
        display: flex;
        gap: 20px;
        justify-content: center;
    }    

`,Sr=Vt.li`
    
`,kr=Vt.a`
    color: ${Kt.lightGrey};
    cursor: pointer;

`,Er={Footer:Vt.footer`
    background-color: #232536;
    max-width: 1440px;
    margin: 90px auto;
    ul{
    list-style: none;
    }
`,ResponsiveFlexWrapper1:Vt(ln)`

@media (max-width:1135px) {
    margin: auto auto;
    max-width: 560px;
    flex-direction: column;
    gap: 30px;
}
    @media ${Qt.mobil} {

}`,ResponsiveFlexWrapper2:Vt(ln)`

@media (max-width:500px) {
    flex-direction: column;
    gap: 10px;
}

`,ResponsiveFlexWrapper3:Vt(ln)`

@media (max-width:500px) {
padding: 0 20px;
}
`,MiniResponsiveFlexWrapper:Vt(ln)`
max-width: 450px;


@media (max-width:690px) {
    flex-direction: column;
}
`,MainTitleFooter:Vt.h2`
max-width: 562px;
min-width: 290px;
margin-right: 64px ;

@media (max-width:475px) {
        min-width: 200px;
}
`,Field:Vt.input`
    background-color:#232536;
    border: 2px solid ${Kt.borderColor};
    height: 56px;
    max-width: 323px;
    min-width: 260px;
    &::placeholder {
    padding-left: 20px;
    }

    @media (max-width:475px) {
        min-width: 200px;
}
`,StyleBox:Vt.div`
background-color:  ${Kt.darkGrey};
background-color: rgba(4C, 4C, 4C, 0,05);
`,FooterText:Vt.p`
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 28px;
letter-spacing: 0px;
color: ${Kt.mediumGrey};
max-width: 361px;
`,SocialNetworkIconWrapper:Vt.div`
    max-width: 16px;
    max-height: 16px;
    color: ${Kt.mediumGrey};
`,IntaractiveBlock:Vt.div`
    background-color: #383a4c;
`},Cr=["Privacy Policy"],_r=()=>(0,Yt.jsx)(Er.Footer,{id:"footer",children:(0,Yt.jsx)(on,{children:(0,Yt.jsxs)(Er.ResponsiveFlexWrapper3,{padding:"0 80px",direction:"column",children:[(0,Yt.jsxs)(ln,{justify:"space-between",margin:"60px 0 56px 0",children:[(0,Yt.jsx)(nn,{}),(0,Yt.jsx)(br,{menuItems:Cr})]}),(0,Yt.jsx)(Er.StyleBox,{children:(0,Yt.jsx)(Er.IntaractiveBlock,{children:(0,Yt.jsxs)(Er.ResponsiveFlexWrapper1,{maxWidth:"1280px",padding:"80px 64px",margin:"0 auto",children:[(0,Yt.jsx)(Er.MainTitleFooter,{children:"Subscribe to our letter to get latest updates and news"}),(0,Yt.jsxs)(Er.MiniResponsiveFlexWrapper,{gap:"24px",children:[(0,Yt.jsx)(Er.Field,{type:"mail",placeholder:"Enter Yor Email"}),(0,Yt.jsx)(dn,{margin:"auto 0",children:"Subscribe"})]})]})})}),(0,Yt.jsxs)(Er.ResponsiveFlexWrapper2,{margin:"48px 0 56px",justify:"space-between",maxWidth:"1280px",children:[(0,Yt.jsxs)(ln,{maxWidth:"361px",direction:"column",children:[(0,Yt.jsx)(Er.FooterText,{children:"Finsteer 118 2561 Fintown"}),(0,Yt.jsx)(Er.FooterText,{children:"Hello@finsweet.com 020 7993 2905"})]}),(0,Yt.jsxs)(ln,{width:"112px",height:"16px",gap:"16px",children:[(0,Yt.jsx)(Er.SocialNetworkIconWrapper,{children:(0,Yt.jsx)(tn,{iconId:"facebookSvgGrey",viewBox:"0 0 52 52"})}),(0,Yt.jsx)(Er.SocialNetworkIconWrapper,{children:(0,Yt.jsx)(tn,{iconId:"TwitterGreySvg",viewBox:"0 0 52 52"})}),(0,Yt.jsx)(Er.SocialNetworkIconWrapper,{children:(0,Yt.jsx)(tn,{iconId:"InstaGreySvg",viewBox:"0 0 52 52"})}),(0,Yt.jsx)(Er.SocialNetworkIconWrapper,{children:(0,Yt.jsx)(tn,{iconId:"InGreySvg",viewBox:"0 0 52 52"})})]})]})]})})});const Pr=function(){return(0,Yt.jsxs)("div",{className:"App",children:[(0,Yt.jsx)(On,{}),(0,Yt.jsx)(cn,{}),(0,Yt.jsx)(Rn,{}),(0,Yt.jsx)(_n,{}),(0,Yt.jsx)(An,{}),(0,Yt.jsx)(Mn,{}),(0,Yt.jsx)(Hn,{}),(0,Yt.jsx)(Xn,{}),(0,Yt.jsx)(Zn,{}),(0,Yt.jsx)(gr,{}),(0,Yt.jsx)(yr,{}),(0,Yt.jsx)(_r,{})]})},Tr=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then(t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:i,getTTFB:o}=t;n(e),r(e),a(e),i(e),o(e)})};t.createRoot(document.getElementById("root")).render((0,Yt.jsx)(e.StrictMode,{children:(0,Yt.jsx)(Pr,{})})),Tr()})()})();
//# sourceMappingURL=main.6476fea6.js.map