(self.webpackChunkphabby_world_docs=self.webpackChunkphabby_world_docs||[]).push([[262],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function c(t,r,l){return o()?(e.exports=c=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=c=function(e,t,r){var o=[null];o.push.apply(o,t);var c=new(Function.bind.apply(e,o));return r&&n(c,r.prototype),c},e.exports.__esModule=!0,e.exports.default=e.exports),c.apply(null,arguments)}e.exports=c,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),c=r(379),l=r(8206);e.exports=function(e){return n(e)||o(e)||c(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),c=r(9713),l=r(7316),a=["scope","children"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),p=r(4983).mdx,f=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,c=l(e,a),u=f(t),d=i.useMemo((function(){if(!r)return null;var e=s({React:i,mdx:p},u),t=Object.keys(e),c=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,t]);return i.createElement(d,s({},c))}},3234:function(e,t,r){"use strict";var n=r(7294),o=r(1171),c=r(5610);t.Z=function(e){var t=e.pageTitle,r=e.children;return n.createElement("div",{className:"root-container-flex"},n.createElement("title",null,t),n.createElement("header",null,n.createElement(o.Z,null)),n.createElement("div",{id:"main-container"},n.createElement("main",null,n.createElement("div",{id:"blog-hero-div"},n.createElement("h1",null,t)),n.createElement("div",{id:"content-div"},r)),n.createElement(c.Z,null)))}},5610:function(e,t,r){"use strict";var n=r(7294);t.Z=function(){return n.createElement("footer",null,n.createElement("p",null,"Copyright © 2021"))}},1171:function(e,t,r){"use strict";var n=r(5444),o=r(7294);t.Z=function(){return o.createElement("div",{className:"nav-container-flex"},o.createElement("nav",null,o.createElement("div",{className:"nav-list-container"},o.createElement("ul",{className:"logo"},o.createElement(c,{to:"/"},"Phabby's World")),o.createElement("ul",{className:"menu-list"},o.createElement(c,{to:"/books/book-1"},"Book 1"),o.createElement(c,{to:"/books/book-2"},"Book 2"),o.createElement(c,{to:"/docs/characters"},"Characters")))))};var c=function(e){var t=e.to,r=e.children;return o.createElement("li",null,o.createElement(n.rU,{to:t},r))}},5248:function(e,t,r){"use strict";r.r(t);var n=r(6725),o=r(7294),c=r(3234);t.default=function(e){var t=e.data;return o.createElement(c.Z,{pageTitle:t.mdx.frontmatter.title},o.createElement(n.MDXRenderer,{localImages:t.mdx.frontmatter.embeddedImagesLocal},t.mdx.body))}}}]);
//# sourceMappingURL=component---src-pages-docs-mdx-slug-js-5bbf18dafd3210456dd6.js.map