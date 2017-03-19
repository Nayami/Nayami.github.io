!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()}(this,function(){return function(e){function t(d){if(n[d])return n[d].exports;var r=n[d]={exports:{},id:d,loaded:!1};return e[d].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}({0:function(e,t,n){e.exports=n(75)},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},75:function(e,t,n){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}function r(e){e.component("md-card",e.extend(a.default)),e.component("md-card-media",e.extend(c.default)),e.component("md-card-media-cover",e.extend(u.default)),e.component("md-card-media-actions",e.extend(m.default)),e.component("md-card-header",e.extend(p.default)),e.component("md-card-header-text",e.extend(v.default)),e.component("md-card-content",e.extend(x.default)),e.component("md-card-actions",e.extend(E.default)),e.component("md-card-area",e.extend(y.default)),e.component("md-card-expand",e.extend(g.default)),e.material.styles.push(b.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(230),a=d(o),i=n(237),c=d(i),s=n(239),u=d(s),f=n(238),m=d(f),l=n(235),p=d(l),h=n(236),v=d(h),R=n(233),x=d(R),_=n(231),E=d(_),T=n(232),y=d(T),C=n(234),g=d(C),M=n(206),b=d(M);e.exports=t.default},108:function(e,t,n){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=d(r);t.default={props:{mdWithHover:Boolean},mixins:[o.default],computed:{classes:function(){return{"md-with-hover":this.mdWithHover}}}},e.exports=t.default},109:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdInset:Boolean},computed:{classes:function(){return{"md-inset":this.mdInset}}}},e.exports=t.default},110:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{setContentMargin:function(){this.content.style.marginTop=-this.content.offsetHeight+"px"},toggle:function(){this.$refs.expand.classList.toggle("md-active")},onWindowResize:function(){window.requestAnimationFrame(this.setContentMargin)}},mounted:function(){var e=this;window.setTimeout(function(){e.trigger=e.$el.querySelector("[md-expand-trigger]"),e.content=e.$el.querySelector(".md-card-content"),e.content&&(e.setContentMargin(),e.trigger.addEventListener("click",e.toggle),window.addEventListener("resize",e.onWindowResize))},200)},destroyed:function(){this.content&&(this.trigger.removeEventListener("click",this.toggle),window.removeEventListener("resize",this.onWindowResize))}},e.exports=t.default},111:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){this.parentClasses=this.$parent.$el.classList,this.parentClasses.contains("md-card-header")&&(this.insideParent=!0,this.parentClasses.add("md-card-header-flex"))},destroyed:function(){this.parentClasses.remove("md-card-header-flex")}},e.exports=t.default},112:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdRatio:String,mdMedium:Boolean,mdBig:Boolean},computed:{classes:function e(){var e={"md-16-9":"16:9"===this.mdRatio||"16/9"===this.mdRatio,"md-4-3":"4:3"===this.mdRatio||"4/3"===this.mdRatio,"md-1-1":"1:1"===this.mdRatio||"1/1"===this.mdRatio};return(this.mdMedium||this.mdBig)&&(e={"md-medium":this.mdMedium,"md-big":this.mdBig}),e}}},e.exports=t.default},113:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){var n=document.createElement("canvas");e.onload=function(){var e=0,d=void 0,r=void 0,o=void 0,a=void 0,i=void 0,c=void 0,s=void 0;n.width=this.width,n.height=this.height,d=n.getContext("2d"),d.drawImage(this,0,0),r=d.getImageData(0,0,n.width,n.height),o=r.data;for(var u=0,f=o.length;u<f;u+=4)a=o[u],i=o[u+1],c=o[u+2],s=Math.floor((a+i+c)/3),e+=s;t(Math.floor(e/(this.width*this.height)))}};t.default={props:{mdTextScrim:Boolean,mdSolid:Boolean},data:function(){return{backdropBg:{}}},computed:{classes:function(){return{"md-text-scrim":this.mdTextScrim,"md-solid":this.mdSolid}},styles:function(){return{background:this.backdropBg}}},methods:{applyScrimColor:function(e){this.$refs.backdrop&&(this.backdropBg="linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, "+e/2+") 66%, rgba(0, 0, 0, "+e+") 100%)")},applySolidColor:function(e){var t=this.$el.querySelector(".md-card-area");t&&(t.style.background="rgba(0, 0, 0, "+e+")")}},mounted:function(){var e=this,t=this.$el.querySelector("img");t&&(this.mdTextScrim||this.mdSolid)&&n(t,function(t){var n=256,d=(100*Math.abs(n-t)/n+15)/100;d>=.7&&(d=.7),e.mdTextScrim?e.applyScrimColor(d):e.mdSolid&&e.applySolidColor(d)})}},e.exports=t.default},189:function(e,t){},206:function(e,t){e.exports=".THEME_NAME.md-card{background-color:BACKGROUND-COLOR}.THEME_NAME.md-card.md-primary{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME.md-card.md-primary .md-card-header .md-icon-button .md-icon,.THEME_NAME.md-card.md-primary .md-card-actions .md-icon-button .md-icon{color:PRIMARY-CONTRAST-0.87}.THEME_NAME.md-card.md-accent{background-color:ACCENT-COLOR;color:ACCENT-CONTRAST}.THEME_NAME.md-card.md-accent .md-card-header .md-icon-button .md-icon,.THEME_NAME.md-card.md-accent .md-card-actions .md-icon-button .md-icon{color:ACCENT-CONTRAST-0.87}.THEME_NAME.md-card.md-warn{background-color:WARN-COLOR;color:WARN-CONTRAST}.THEME_NAME.md-card.md-warn .md-card-header .md-icon-button .md-icon,.THEME_NAME.md-card.md-warn .md-card-actions .md-icon-button .md-icon{color:WARN-CONTRAST-0.87}.THEME_NAME.md-card .md-card-header .md-icon-button .md-icon,.THEME_NAME.md-card .md-card-actions .md-icon-button .md-icon{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-card>.md-card-area:after{background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-card .md-card-media-cover.md-text-scrim .md-backdrop{background:linear-gradient(to bottom, BACKGROUND-CONTRAST-0.0 20%, BACKGROUND-CONTRAST-0.275 66%, BACKGROUND-CONTRAST-0.55 100%)}.THEME_NAME.md-card .md-card-media-cover.md-solid .md-card-area{background-color:BACKGROUND-CONTRAST-0.4}.THEME_NAME.md-card .md-card-expand .md-card-actions{background-color:BACKGROUND-COLOR}\n"},230:function(e,t,n){var d,r;n(189),d=n(108);var o=n(305);r=d=d||{},"object"!=typeof d.default&&"function"!=typeof d.default||(r=d=d.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=d},231:function(e,t,n){var d,r,o=n(315);r=d=d||{},"object"!=typeof d.default&&"function"!=typeof d.default||(r=d=d.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=d},232:function(e,t,n){var d,r;d=n(109);var o=n(299);r=d=d||{},"object"!=typeof d.default&&"function"!=typeof d.default||(r=d=d.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=d},233:function(e,t,n){var d,r,o=n(284);r=d=d||{},"object"!=typeof d.default&&"function"!=typeof d.default||(r=d=d.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=d},234:function(e,t,n){var d,r;d=n(110);var o=n(328);r=d=d||{},"object"!=typeof d.default&&"function"!=typeof d.default||(r=d=d.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=d},235:function(e,t,n){var d,r,o=n(296);r=d=d||{},"object"!=typeof d.default&&"function"!=typeof d.default||(r=d=d.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=d},236:function(e,t,n){var d,r;d=n(111);var o=n(300);r=d=d||{},"object"!=typeof d.default&&"function"!=typeof d.default||(r=d=d.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=d},237:function(e,t,n){var d,r;d=n(112);var o=n(310);r=d=d||{},"object"!=typeof d.default&&"function"!=typeof d.default||(r=d=d.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=d},238:function(e,t,n){var d,r,o=n(321);r=d=d||{},"object"!=typeof d.default&&"function"!=typeof d.default||(r=d=d.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=d},239:function(e,t,n){var d,r;d=n(113);var o=n(290);r=d=d||{},"object"!=typeof d.default&&"function"!=typeof d.default||(r=d=d.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,e.exports=d},284:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-card-content"},[e._t("default")],2)},staticRenderFns:[]}},290:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-card-media-cover",class:e.classes},[e._t("default"),e._v(" "),e.mdTextScrim?n("div",{ref:"backdrop",staticClass:"md-card-backdrop",style:e.styles}):e._e()],2)},staticRenderFns:[]}},296:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-card-header"},[e._t("default")],2)},staticRenderFns:[]}},299:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-card-area",class:e.classes},[e._t("default")],2)},staticRenderFns:[]}},300:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-card-header-text"},[e._t("default")],2)},staticRenderFns:[]}},305:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-card",class:[e.themeClass,e.classes]},[e._t("default")],2)},staticRenderFns:[]}},310:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-card-media",class:e.classes},[e._t("default")],2)},staticRenderFns:[]}},315:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-card-actions"},[e._t("default")],2)},staticRenderFns:[]}},321:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-card-media-actions"},[e._t("default")],2)},staticRenderFns:[]}},328:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"expand",staticClass:"md-card-expand"},[e._t("default")],2)},staticRenderFns:[]}}})});