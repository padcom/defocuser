(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{151:function(e,t,a){"use strict";a.r(t);var o=a(0),n=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"defocuser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defocuser","aria-hidden":"true"}},[e._v("#")]),e._v(" Defocuser")]),a("h2",{attrs:{id:"addelement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addelement","aria-hidden":"true"}},[e._v("#")]),a("code",[e._v("addElement")])]),a("p",[e._v("To use the Defocuser all you have to do is create an instance of the "),a("code",[e._v("Defocuser")]),e._v(" class and then\ncall the "),a("code",[e._v("addElement")]),e._v(" method. This method takes 5 parameters:")]),a("ul",[a("li",[a("code",[e._v("el")]),e._v(" - that is the root of your dropdown")]),a("li",[a("code",[e._v("phase")]),e._v(" - that should be either "),a("code",[e._v("capture")]),e._v(" or "),a("code",[e._v("bubbling")])]),a("li",[a("code",[e._v("callback")]),e._v(" - that is the callback called when the situation that the user clicked outside")]),a("li",[a("code",[e._v("stopPropagation")]),e._v(" - when handling the "),a("code",[e._v("keydown")]),e._v(" or "),a("code",[e._v("click")]),e._v(" events call "),a("code",[e._v("e.stopPropagation()")]),e._v(" (default: "),a("code",[e._v("false")]),e._v(")")]),a("li",[a("code",[e._v("preventDefault")]),e._v(" - when handling the "),a("code",[e._v("keydown")]),e._v(" or "),a("code",[e._v("click")]),e._v(" events call "),a("code",[e._v("e.preventDefault()")]),e._v(" (default: "),a("code",[e._v("false")]),e._v(")")])]),a("h2",{attrs:{id:"setsecondaryelement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setsecondaryelement","aria-hidden":"true"}},[e._v("#")]),a("code",[e._v("setSecondaryElement")])]),a("p",[e._v("If for some reason there is an additional element (like an input or label that you use to toggle\nyour dropdow) "),a("code",[e._v("Defocuser")]),e._v(" has you covered with the "),a("code",[e._v("setSecondaryElement")]),e._v(" method that takes\nthe following parameters:")]),a("ul",[a("li",[a("code",[e._v("el")]),e._v(" - that is the root of your dropdown (primary)")]),a("li",[a("code",[e._v("secondary")]),e._v(" - that additional element to be taken into account when checking if the actioned\nelement is "),a("em",[e._v("inside")]),e._v(" or "),a("em",[e._v("outside")]),e._v(" of the dropdown")])]),a("h2",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks","aria-hidden":"true"}},[e._v("#")]),e._v(" Remarks")]),a("p",[a("code",[e._v("Defocuser")]),e._v(" internally uses "),a("code",[e._v("MutationObserver")]),e._v(" to detect when the element has been removed from\nthe DOM. So you should physically remove the element to clean things up.")])])}],!1,null,null,null);t.default=n.exports}}]);