!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/wp-content/themes/mdx/js",n(n.s=118)}([,function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(47))},function(t,e,n){var o=n(1),r=n(31),i=n(5),c=n(35),s=n(36),u=n(49),a=r("wks"),l=o.Symbol,f=u?l:l&&l.withoutSetter||c;t.exports=function(t){return i(a,t)||(s&&i(l,t)?a[t]=l[t]:a[t]=f("Symbol."+t)),a[t]}},function(t,e,n){var o=n(7);t.exports=function(t){if(!o(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(8),r=n(9),i=n(22);t.exports=o?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var o=n(4);t.exports=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var o=n(8),r=n(33),i=n(3),c=n(34),s=Object.defineProperty;e.f=o?s:function(t,e,n){if(i(t),e=c(e,!0),i(n),r)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(1),r=n(6),i=n(5),c=n(18),s=n(24),u=n(27),a=u.get,l=u.enforce,f=String(String).split("String");(t.exports=function(t,e,n,s){var u=!!s&&!!s.unsafe,a=!!s&&!!s.enumerable,m=!!s&&!!s.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||r(n,"name",e),l(n).source=f.join("string"==typeof e?e:"")),t!==o?(u?!m&&t[e]&&(a=!0):delete t[e],a?t[e]=n:r(t,e,n)):a?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||s(this)}))},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){"use strict";e.a=(t,e,n)=>{for(let o=0;o<t.length;o++){let r=t[o];"in"===e?(r.style.opacity="0",r.style.display="block",r.style.transition="opacity ".concat(n/1e3,"s"),setTimeout(()=>{r.style.opacity="1"},0),setTimeout(()=>{r.style.display="block",r.style.transition="",r.style.opacity="1"},n)):(r.style.opacity="1",r.style.display="block",r.style.transition="opacity ".concat(n/1e3,"s"),r.style.opacity="0",setTimeout(()=>{r.style.display="none",r.style.transition="",r.style.opacity="0"},n))}}},function(t,e,n){var o=n(48),r=n(10);t.exports=function(t){return o(r(t))}},function(t,e,n){var o=n(53),r=n(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(o[t])||i(r[t]):o[t]&&o[t][e]||r[t]&&r[t][e]}},function(t,e,n){var o=n(13),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e,n){var o=n(1),r=n(6);t.exports=function(t,e){try{r(o,t,e)}catch(n){o[t]=e}return e}},,function(t,e){t.exports=!1},function(t,e){t.exports={}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports={}},function(t,e,n){var o=n(32),r=Function.toString;"function"!=typeof o.inspectSource&&(o.inspectSource=function(t){return r.call(t)}),t.exports=o.inspectSource},function(t,e,n){var o=n(8),r=n(55),i=n(22),c=n(15),s=n(34),u=n(5),a=n(33),l=Object.getOwnPropertyDescriptor;e.f=o?l:function(t,e){if(t=c(t),e=s(e,!0),a)try{return l(t,e)}catch(t){}if(u(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e,n){var o=n(1),r=n(25).f,i=n(6),c=n(12),s=n(18),u=n(45),a=n(40);t.exports=function(t,e){var n,l,f,m,d,p=t.target,y=t.global,g=t.stat;if(n=y?o:g?o[p]||s(p,{}):(o[p]||{}).prototype)for(l in e){if(m=e[l],f=t.noTargetGet?(d=r(n,l))&&d.value:n[l],!a(y?l:p+(g?".":"#")+l,t.forced)&&void 0!==f){if(typeof m==typeof f)continue;u(m,f)}(t.sham||f&&f.sham)&&i(m,"sham",!0),c(n,l,m,t)}}},function(t,e,n){var o,r,i,c=n(54),s=n(1),u=n(7),a=n(6),l=n(5),f=n(30),m=n(23),d=s.WeakMap;if(c){var p=new d,y=p.get,g=p.has,v=p.set;o=function(t,e){return v.call(p,t,e),e},r=function(t){return y.call(p,t)||{}},i=function(t){return g.call(p,t)}}else{var b=f("state");m[b]=!0,o=function(t,e){return a(t,b,e),e},r=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:o,get:r,has:i,enforce:function(t){return i(t)?r(t):o(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=r(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var o=n(1),r=n(7),i=o.document,c=r(i)&&r(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var o=n(31),r=n(35),i=o("keys");t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e,n){var o=n(20),r=n(32);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:o?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var o=n(1),r=n(18),i=o["__core-js_shared__"]||r("__core-js_shared__",{});t.exports=i},function(t,e,n){var o=n(8),r=n(4),i=n(28);t.exports=!o&&!r((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var o=n(7);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+o).toString(36)}},function(t,e,n){var o=n(4);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())}))},,,,function(t,e,n){var o=n(4),r=/#|\.prototype\./,i=function(t,e){var n=s[c(t)];return n==a||n!=u&&("function"==typeof e?o(e):!!e)},c=i.normalize=function(t){return String(t).replace(r,".").toLowerCase()},s=i.data={},u=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},,function(t,e,n){var o=n(5),r=n(15),i=n(50).indexOf,c=n(23);t.exports=function(t,e){var n,s=r(t),u=0,a=[];for(n in s)!o(c,n)&&o(s,n)&&a.push(n);for(;e.length>u;)o(s,n=e[u++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){var o=n(9).f,r=n(5),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},,function(t,e,n){var o=n(5),r=n(56),i=n(25),c=n(9);t.exports=function(t,e){for(var n=r(e),s=c.f,u=i.f,a=0;a<n.length;a++){var l=n[a];o(t,l)||s(t,l,u(e,l))}}},function(t,e,n){var o=n(42),r=n(29).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var o=n(4),r=n(11),i="".split;t.exports=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var o=n(36);t.exports=o&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var o=n(15),r=n(17),i=n(51),c=function(t){return function(e,n,c){var s,u=o(e),a=r(u.length),l=i(c,a);if(t&&n!=n){for(;a>l;)if((s=u[l++])!=s)return!0}else for(;a>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var o=n(13),r=Math.max,i=Math.min;t.exports=function(t,e){var n=o(t);return n<0?r(n+e,0):i(n,e)}},function(t,e,n){var o=n(16);t.exports=o("document","documentElement")},function(t,e,n){var o=n(1);t.exports=o},function(t,e,n){var o=n(1),r=n(24),i=o.WeakMap;t.exports="function"==typeof i&&/native code/.test(r(i))},function(t,e,n){"use strict";var o={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!o.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:o},function(t,e,n){var o=n(16),r=n(46),i=n(57),c=n(3);t.exports=o("Reflect","ownKeys")||function(t){var e=r.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var o=n(10);t.exports=function(t){return Object(o(t))}},,,,,,function(t,e,n){var o,r=n(3),i=n(79),c=n(29),s=n(23),u=n(52),a=n(28),l=n(30),f=l("IE_PROTO"),m=function(){},d=function(t){return"<script>"+t+"<\/script>"},p=function(){try{o=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;p=o?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(o):((e=a("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var n=c.length;n--;)delete p.prototype[c[n]];return p()};s[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m.prototype=r(t),n=new m,m.prototype=null,n[f]=t):n=p(),void 0===e?n:i(n,e)}},function(t,e,n){"use strict";var o,r,i,c=n(66),s=n(6),u=n(5),a=n(2),l=n(20),f=a("iterator"),m=!1;[].keys&&("next"in(i=[].keys())?(r=c(c(i)))!==Object.prototype&&(o=r):m=!0),null==o&&(o={}),l||u(o,f)||s(o,f,(function(){return this})),t.exports={IteratorPrototype:o,BUGGY_SAFARI_ITERATORS:m}},function(t,e,n){var o=n(5),r=n(58),i=n(30),c=n(83),s=i("IE_PROTO"),u=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=r(t),o(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},,,,,,,function(t,e,n){var o=n(3),r=n(84);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return o(n),r(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},,function(t,e,n){var o=n(1),r=n(76),i=n(77),c=n(6),s=n(2),u=s("iterator"),a=s("toStringTag"),l=i.values;for(var f in r){var m=o[f],d=m&&m.prototype;if(d){if(d[u]!==l)try{c(d,u,l)}catch(t){d[u]=l}if(d[a]||c(d,a,f),r[f])for(var p in i)if(d[p]!==i[p])try{c(d,p,i[p])}catch(t){d[p]=i[p]}}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var o=n(15),r=n(78),i=n(21),c=n(27),s=n(81),u=c.set,a=c.getterFor("Array Iterator");t.exports=s(Array,"Array",(function(t,e){u(this,{type:"Array Iterator",target:o(t),index:0,kind:e})}),(function(){var t=a(this),e=t.target,n=t.kind,o=t.index++;return!e||o>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:o,done:!1}:"values"==n?{value:e[o],done:!1}:{value:[o,e[o]],done:!1}}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var o=n(2),r=n(64),i=n(9),c=o("unscopables"),s=Array.prototype;null==s[c]&&i.f(s,c,{configurable:!0,value:r(null)}),t.exports=function(t){s[c][t]=!0}},function(t,e,n){var o=n(8),r=n(9),i=n(3),c=n(80);t.exports=o?Object.defineProperties:function(t,e){i(t);for(var n,o=c(e),s=o.length,u=0;s>u;)r.f(t,n=o[u++],e[n]);return t}},function(t,e,n){var o=n(42),r=n(29);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e,n){"use strict";var o=n(26),r=n(82),i=n(66),c=n(73),s=n(43),u=n(6),a=n(12),l=n(2),f=n(20),m=n(21),d=n(65),p=d.IteratorPrototype,y=d.BUGGY_SAFARI_ITERATORS,g=l("iterator"),v=function(){return this};t.exports=function(t,e,n,l,d,b,h){r(n,e,l);var x,S,T,O=function(t){if(t===d&&B)return B;if(!y&&t in _)return _[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},E=e+" Iterator",L=!1,_=t.prototype,w=_[g]||_["@@iterator"]||d&&_[d],B=!y&&w||O(d),j="Array"==e&&_.entries||w;if(j&&(x=i(j.call(new t)),p!==Object.prototype&&x.next&&(f||i(x)===p||(c?c(x,p):"function"!=typeof x[g]&&u(x,g,v)),s(x,E,!0,!0),f&&(m[E]=v))),"values"==d&&w&&"values"!==w.name&&(L=!0,B=function(){return w.call(this)}),f&&!h||_[g]===B||u(_,g,B),m[e]=B,d)if(S={values:O("values"),keys:b?B:O("keys"),entries:O("entries")},h)for(T in S)(y||L||!(T in _))&&a(_,T,S[T]);else o({target:e,proto:!0,forced:y||L},S);return S}},function(t,e,n){"use strict";var o=n(65).IteratorPrototype,r=n(64),i=n(22),c=n(43),s=n(21),u=function(){return this};t.exports=function(t,e,n){var a=e+" Iterator";return t.prototype=r(o,{next:i(1,n)}),c(t,a,!1,!0),s[a]=u,t}},function(t,e,n){var o=n(4);t.exports=!o((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){var o=n(7);t.exports=function(t){if(!o(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(75);var o=n(14),r=0,i=0,c=document.querySelector("div.mdui-toolbar > a.mdui-typo-headline").innerHTML,s=document.querySelector("div.mdui-toolbar > a.mdui-typo-headline").getAttribute("href"),u=document.querySelector("meta[name='theme-color']"),a=!1,l="";u&&(l=document.querySelector("meta[name='mdx-main-color']").getAttribute("content"),a=!0);var f="undefined"!=typeof offlineMode&&offlineMode,m=!1;function d(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=document.querySelector("div.mdui-toolbar > a.mdui-typo-headline");t>10&&0==r&&(document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),r=1),t<=10&&1==r&&(document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),r=0),t>170&&0==i&&(document.querySelector(".scrollToTop").classList.toggle("mdui-fab-hide"),e.innerHTML=acPageTitle,e.removeAttribute("href"),i=1),t<=170&&1==i&&(document.querySelector(".scrollToTop").classList.toggle("mdui-fab-hide"),e.innerHTML=c,e.setAttribute("href",s),i=0),m=!1}window.onscroll=function(){m||(requestAnimationFrame(d),m=!0)},document.getElementsByClassName("scrollToTop")[0].addEventListener("click",(function(){Velocity(document.getElementsByTagName("html")[0],{scrollTop:"0px"},500)}),!1),document.getElementById("tgns")&&document.getElementById("tgns").addEventListener("click",(function(){document.getElementsByTagName("body")[0].classList.contains("mdui-theme-layout-dark")?(sessionStorage.setItem("ns_night-styles","false"),a&&u.setAttribute("content",l)):(sessionStorage.setItem("ns_night-styles","true"),a&&u.setAttribute("content","#212121")),document.getElementsByTagName("body")[0].classList.toggle("mdui-theme-layout-dark")}),!1),document.getElementsByClassName("seai")[0].addEventListener("click",(function(){let t=document.getElementById("SearchBar");if(t.style.display="block",Object(o.a)(document.getElementsByClassName("OutOfsearchBox"),"in",300),Object(o.a)(document.getElementsByClassName("fullScreen"),"in",300),Array.prototype.forEach.call(document.querySelectorAll("#SearchBar > *"),t=>{Velocity(t,{opacity:"1"},200)}),setTimeout(()=>{document.getElementsByClassName("outOfSearch")[0].style.width="75%",t.classList.add("mdui-color-theme")},0),document.getElementsByClassName("seainput")[0].focus(),document.getElementsByTagName("body")[0].classList.toggle("mdx-search-lock"),f){let t=document.getElementsByClassName("OutOfsearchBox")[0];t.innerHTML='<div class="searchBoxFill"></div><div class="underRes">'+tipMutiOff+"</div>",t.style.pointerEvents="auto",document.getElementsByClassName("seainput")[0].setAttribute("disabled","disabled")}}),!1);for(let t of document.getElementsByClassName("sea-close"))t.addEventListener("click",p,!1);function p(){document.getElementsByClassName("seainput")[0].blur(),Array.prototype.forEach.call(document.querySelectorAll("#SearchBar > *"),t=>{Velocity(t,{opacity:"0"},200)}),Object(o.a)(document.getElementsByClassName("fullScreen"),"out",300),Object(o.a)(document.getElementsByClassName("OutOfsearchBox"),"out",300),document.getElementsByClassName("outOfSearch")[0].style.width="30%",window.setTimeout(y,300),document.getElementById("SearchBar").classList.remove("mdui-color-theme"),setTimeout(()=>{let t=document.getElementsByTagName("body")[0];t.classList.contains("mdx-search-lock")&&t.classList.toggle("mdx-search-lock"),document.getElementsByClassName("outOfSearch")[0].removeAttribute("style")},300)}function y(){document.getElementById("SearchBar").style.display="none"}function g(t){"user"!==sessionStorage.getItem("mrm_enable")?t.matches&&document.getElementsByTagName("body")[0].classList.contains("mdx-reduce-motion")?sessionStorage.getItem("mrm_enable")||(mdui.snackbar({message:reduce_motion_i18n_1,buttonText:reduce_motion_i18n_2,timeout:7e3,onButtonClick:function(){sessionStorage.setItem("mrm_enable","user"),document.getElementsByTagName("body")[0].classList.remove("mdx-reduce-motion")},position:"top"}),sessionStorage.setItem("mrm_enable","sys"),document.getElementsByTagName("body")[0].classList.add("mdx-reduce-motion")):(sessionStorage.getItem("mrm_enable")&&mdui.snackbar({message:reduce_motion_i18n_3,timeout:5e3,position:"top"}),sessionStorage.removeItem("mrm_enable")):document.getElementsByTagName("body")[0].classList.remove("mdx-reduce-motion")}document.getElementsByClassName("mdui-typo-headline")[0].addEventListener("click",(function(){1==mdx_tapToTop&&Velocity(document.getElementsByTagName("html")[0],{scrollTop:"0px"},500)})),window.addEventListener("DOMContentLoaded",()=>{d();var t=0,e=0;for(let n of document.querySelectorAll("#mdx_menu > li")){if(n.classList.contains("menu-item-has-children")){n.classList.add("mdui-collapse-item"),n.classList.remove("mdui-list-item"),n.innerHTML='<div class="mdui-collapse-item-header mdui-list-item mdui-ripple"><div class="mdui-list-item-content"><a class="mdx-sub-menu-a" href="'.concat(n.getElementsByTagName("a")[0].getAttribute("href"),'">').concat(n.getElementsByTagName("a")[0].innerHTML,'</a></div><i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i></div><ul class="mdui-collapse-item-body mdui-list mdui-list-dense">').concat(n.getElementsByTagName("ul")[0].innerHTML,"</ul>"),t=1;for(let t of n.getElementsByTagName("ul"))for(let n of t.getElementsByTagName("li"))n.classList.contains("current-menu-item")&&(e=1);e&&(n.classList.remove("current-menu-item","current_page_item"),n.classList.add("mdui-collapse-item-open")),e=0}if(t){let t=document.getElementById("mdx_menu");t.classList.add("mdui-collapse"),t.setAttribute("mdui-collapse","")}}new mdui.Collapse("#mdx_menu");var n="undefined"==typeof displayCookie||displayCookie,o=document.getElementById("mdx-cookie-notice");if(n&&o&&!localStorage.getItem("mdx_cookie")&&(o.classList.add("mdx-cookie-notice-show"),o.getElementsByTagName("button")[0].addEventListener("click",(function(){localStorage.setItem("mdx_cookie","true"),document.getElementById("mdx-cookie-notice").style.bottom="-400px",setTimeout(()=>{document.getElementById("mdx-cookie-notice").classList.remove("mdx-cookie-notice-show")},400)}),!1)),document.getElementsByTagName("body")[0].classList.contains("mdx-reduce-motion")){var r=window.matchMedia("(prefers-reduced-motion: reduce)");r.addListener(g),g(r)}})}]);
//# sourceMappingURL=ac.js.map