module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/about","2":"pages/artworks/_artwork","3":"pages/index","4":"pages/work"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@nuxt/ufo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6ac3c623", content, true, context)
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3327d44a", content, true, context)
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("257af960", content, true, context)
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=b91c4636&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_c('nuxt-link',{staticClass:"main_logo",attrs:{"to":"/"}},[_vm._v("Sourrain")]),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_c('nuxt-link',{attrs:{"to":"/work"}},[_vm._v("Work")]),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":"/about"}},[_vm._v("About")])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=b91c4636&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Header.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(23)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "65174f44"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(11).default})


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
module.exports = __webpack_require__(25);


/***/ }),
/* 16 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPage_vue_vue_type_style_index_0_id_3db9c92a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPage_vue_vue_type_style_index_0_id_3db9c92a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPage_vue_vue_type_style_index_0_id_3db9c92a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPage_vue_vue_type_style_index_0_id_3db9c92a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPage_vue_vue_type_style_index_0_id_3db9c92a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".loading-page[data-v-3db9c92a]{position:fixed;top:0;left:0;width:100%;height:100%;background:hsla(0,0%,100%,.8);text-align:center;padding-top:200px;font-size:30px;font-family:sans-serif}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("0211d3d2", content, true)

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*! tailwindcss v2.0.3 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",Helvetica,Arial,\"Apple Color Emoji\",\"Segoe UI Emoji\"}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,\"Liberation Mono\",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],button{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";line-height:1.5}body{font-family:inherit;line-height:inherit}*,:after,:before{box-sizing:border-box;border:0 solid}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#a1a1aa}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#a1a1aa}input::placeholder,textarea::placeholder{opacity:1;color:#a1a1aa}button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.bg-blue{--tw-bg-opacity:1;background-color:rgba(64,168,196,var(--tw-bg-opacity))}.block{display:block}.flex{display:flex}.table{display:table}.contents{display:contents}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-around{justify-content:space-around}.h-5{height:1.25rem}.h-40{height:10rem}.h-screen{height:100vh}.text-xs{font-size:.75rem;line-height:1rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.p-3{padding:.75rem}.p-5{padding:1.25rem}.static{position:static}*{--tw-shadow:0 0 transparent;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,0.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}.lowercase{text-transform:lowercase}.w-80{width:20rem}.w-screen{width:100vw}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "header{padding:15px 30px;display:flex;justify-content:space-between;align-items:center;font-size:24px;font-weight:500}.main_logo{font-family:\"EksellDisplayWeb-Large\";font-weight:600}nav{display:flex;align-items:center;margin:0 -15px}nav a{display:block;margin:0 15px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(12);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "@nuxt/ufo"
var ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(13);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {}
    }; // Only set once

    if (false) {}

    if (false) {}

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data));
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(14);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(7);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(6);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(3);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const Pages = getMatchedComponents(to); // Scroll to the top of the page if...

  if ( // One of the children set `scrollToTop`
  Pages.some(Page => Page.options.scrollToTop) || // scrollToTop set in only page without children
  Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt;

  if ( // Route hash changes
  to.path === from.path && to.hash !== from.hash || // Initial load (vuejs/vue-router#3199)
  to === from) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _7fb5a394 = () => interopDefault(__webpack_require__.e(/* import() | pages/about */ 1).then(__webpack_require__.bind(null, 33)));

const _31ff735a = () => interopDefault(__webpack_require__.e(/* import() | pages/work */ 4).then(__webpack_require__.bind(null, 34)));

const _5bf2d77d = () => interopDefault(__webpack_require__.e(/* import() | pages/artworks/_artwork */ 2).then(__webpack_require__.bind(null, 35)));

const _c125034e = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 3).then(__webpack_require__.bind(null, 32))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/about",
    component: _7fb5a394,
    name: "about"
  }, {
    path: "/work",
    component: _31ff735a,
    name: "work"
  }, {
    path: "/artworks/:artwork?",
    component: _5bf2d77d,
    name: "artworks-artwork"
  }, {
    path: "/",
    component: _c125034e,
    name: "index"
  }],
  fallback: false
};

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = Object(ufo_["decode"])(obj[key]);
    }
  }
}

function createRouter() {
  const router = new external_vue_router_default.a(routerOptions);
  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(ufo_["normalizeURL"])(to);
    }

    const r = resolve(to, current, append);

    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query);
    }

    return r;
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(17)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0b10c578"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoadingPage.vue?vue&type=template&id=3db9c92a&scoped=true&
var LoadingPagevue_type_template_id_3db9c92a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.loading)?_c('div',{staticClass:"loading-page"},[_vm._ssrNode("<p data-v-3db9c92a>Loadingahhahahahahh...</p>")]):_vm._e()}
var LoadingPagevue_type_template_id_3db9c92a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/LoadingPage.vue?vue&type=template&id=3db9c92a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoadingPage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var LoadingPagevue_type_script_lang_js_ = ({
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true;
    },

    finish() {
      this.loading = false;
    }

  }
});
// CONCATENATED MODULE: ./components/LoadingPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LoadingPagevue_type_script_lang_js_ = (LoadingPagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/LoadingPage.vue



function LoadingPage_injectStyles (context) {
  
  var style0 = __webpack_require__(19)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var LoadingPage_component = Object(componentNormalizer["a" /* default */])(
  components_LoadingPagevue_type_script_lang_js_,
  LoadingPagevue_type_template_id_3db9c92a_scoped_true_render,
  LoadingPagevue_type_template_id_3db9c92a_scoped_true_staticRenderFns,
  false,
  LoadingPage_injectStyles,
  "3db9c92a",
  "fd5c4e2c"
  
)

/* harmony default export */ var LoadingPage = (LoadingPage_component.exports);
// EXTERNAL MODULE: ./node_modules/@nuxtjs/tailwindcss/lib/files/tailwind.css
var tailwind = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=3dda22fa&
var defaultvue_type_template_id_3dda22fa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_c('Nuxt')],2)}
var defaultvue_type_template_id_3dda22fa_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=3dda22fa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  head: {
    title: 'Sourrain',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'designer',
      name: 'Sourrain design freelancer',
      content: 'Craft delighted motion, graphic and animation.'
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAA4sAAAOLCAYAAAD5ExZjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKAWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgcGhvdG9zaG9wOkxlZ2FjeUlQVENEaWdlc3Q9IjJFODQ2RjVCQjMzNDRCNUVENUM4MDgzQkFEQTRFNUNBIiBwaG90b3Nob3A6SW5zdHJ1Y3Rpb25zPSJGQk1EMDEwMDBhODgwMTAwMDA5YTExMDAwMDgzMWMwMDAwZDQxZDAwMDBiZjFlMDAwMGU5MjgwMDAwN2IzNTAwMDAzZDNmMDAwMDFkNDEwMDAwOTE0MzAwMDA4YjViMDAwMCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjZlNDU3YTM5LTQ1ZTctZGI0Yy04NDY5LWQ3MGUzYzBhMzNmYiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyODNkN2RmNi1kM2UyLTNkNGQtYjQ0MS04MjM0MTcxNDk1OGQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iNjVDMjdGQjE2NTlCOTJFNjEwNUNCOEUxQzkyNzA4RUQiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB0aWZmOkltYWdlV2lkdGg9IjkwNyIgdGlmZjpJbWFnZUxlbmd0aD0iOTA3IiB0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb249IjIiIHRpZmY6U2FtcGxlc1BlclBpeGVsPSIzIiB0aWZmOlhSZXNvbHV0aW9uPSIxLzEiIHRpZmY6WVJlc29sdXRpb249IjEvMSIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMSIgZXhpZjpFeGlmVmVyc2lvbj0iMDIzMSIgZXhpZjpDb2xvclNwYWNlPSI2NTUzNSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjkwNyIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjkwNyIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMTItMDFUMDA6NDQ6MjkrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTEyLTAxVDAwOjQ1OjQ2KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTEyLTAxVDAwOjQ1OjQ2KzA4OjAwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODE5MzJlMWItYzcxMi1lZTRlLTk3ZjMtOGE0YWIxMGJiNWI2IiBzdEV2dDp3aGVuPSIyMDIwLTEyLTAxVDAwOjQ1OjQ2KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjI4M2Q3ZGY2LWQzZTItM2Q0ZC1iNDQxLTgyMzQxNzE0OTU4ZCIgc3RFdnQ6d2hlbj0iMjAyMC0xMi0wMVQwMDo0NTo0NiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MTkzMmUxYi1jNzEyLWVlNGUtOTdmMy04YTRhYjEwYmI1YjYiIHN0UmVmOmRvY3VtZW50SUQ9IjY1QzI3RkIxNjU5QjkyRTYxMDVDQjhFMUM5MjcwOEVEIiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9IjY1QzI3RkIxNjU5QjkyRTYxMDVDQjhFMUM5MjcwOEVEIi8+IDx0aWZmOkJpdHNQZXJTYW1wbGU+IDxyZGY6U2VxPiA8cmRmOmxpPjg8L3JkZjpsaT4gPHJkZjpsaT44PC9yZGY6bGk+IDxyZGY6bGk+ODwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvdGlmZjpCaXRzUGVyU2FtcGxlPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu7s9g4AAda7SURBVHic7N15vGRFfT7+p+psvd11ZhiGYVgGQQQENYIrGg2bigoIiIL7mrib5Ju4JhqjMb+oUROXaNQoBBANoKCICIIssojDNiAgDgMMs929t7NV/f44p8493X3v3IHpmb7L8+bV9J1eq/v2PX2eU1WfElprEBEREREREeXJXjeAiIiIiIiI5h+GRSIiIiIiIurAsEhEREREREQdGBaJiIiIiIioA8MiERERERERdWBYJCIiIiIiog4Mi0RERERERNSBYZGIiIiIiIg6MCwSERERERFRB4ZFIiIiIiIi6sCwSERERERERB0YFomIiIiIiKgDwyIRERERERF1YFgkIiIiIiKiDgyLRERERERE1IFhkYiIiIiIiDowLBIREREREVEHhkUiIiIiIiLqwLBIREREREREHRgWiYiIiIiIqAPDIhEREREREXVgWCQiIiIiIqIODItERERERETUgWGRiIiIiIiIOjAsEhERERERUQeGRSIiIiIiIurAsEhEREREREQdGBaJiIiIiIioA8MiERERERERdWBYJCIiIiIiog4Mi0RERERERNSBYZGIiIiIiIg6MCwSERERERFRB4ZFIiIiIiIi6sCwSERERERERB0YFomIiIiIiKgDwyIRERERERF1YFgkIiIiIiKiDgyLRERERERE1IFhkYiIiIiIiDowLBIREREREVEHhkUiIiIiIiLqwLBIREREREREHRgWiYiIiIiIqAPDIhEREREREXVgWCQiIiIiIqIODItERERERETUgWGRiIiIiIiIOjAsEhERERERUQeGRSIiIiIiIurAsEhEREREREQdGBaJiIiIiIioA8MiERERERERdWBYJCIiIiIiog4Mi0RERERERNSBYZGIiIiIiIg6MCwSERERERFRB4ZFIiIiIiIi6sCwSERERERERB0YFomIiIiIiKgDwyIRERERERF1YFgkIiIiIiKiDgyLRERERERE1IFhkYiIiIiIiDowLBIREREREVEHhkUiIiIiIiLqwLBIREREREREHRgWiYiIiIiIqAPDIhEREREREXVgWCQiIiIiIqIODItERERERETUgWGRiIiIiIiIOjAsEhERERERUQeGRSIiIiIiIurAsEhEREREREQdGBaJiIiIiIioA8MiERERERERdWBYJCIiIiIiog4Mi0RERERERNSBYZGIiIiIiIg6MCwSERERERFRB4ZFIiIiIiIi6sCwSERERERERB0YFomIiIiIiKgDwyIRERERERF1YFgkIiIiIiKiDgyLRERERERE1IFhkYiIiIiIiDowLBIREREREVEHhkUiIiIiIiLqwLBIREREREREHRgWiYiIiIiIqAPDIhEREREREXVgWCQiIiIiIqIODItERERERETUgWGRiIiIiIiIOjAsEhERERERUQeGRSIiIiIiIurAsEhEREREREQdGBaJiIiIiIioA8MiERERERERdWBYJCIiIiIiog4Mi0RERERERNSBYZGIiIiIiIg6MCwSERERERFRB4ZFIiIiIiIi6sCwSERERERERB0YFomIiIiIiKgDwyIRERERERF1YFgkIiIiIiKiDgyLRERERERE1IFhkYiIiIiIiDowLBIREREREVEHhkUiIiIiIiLqwLBIREREREREHRgWiYiIiIiIqAPDIhEREREREXVgWCQiIiIiIqIODItERERERETUgWGRiIiIiIiIOjAsEhERERERUQeGRSIiIiIiIurAsEhEREREREQdGBaJiIiIiIioA8MiERERERERdWBYJCIiIiIiog4Mi0RERERERNSBYZGIiIiIiIg6MCwSERERERFRB4ZFIiIiIiIi6sCwSERERERERB0YFomIiIiIiKgDwyIRERERERF1YFgkIiIiIiKiDgyLRERERERE1IFhkYiIiIiIiDowLBIREREREVEHhkUiIiIiIiLqwLBIREREREREHRgWiYiIiIiIqAPDIhEREREREXVgWCQiIiIiIqIODItERERERETUgWGRiIiIiIiIOjAsEhERERERUQeGRSIiIiIiIurAsEhEREREREQdGBaJiIiIiIioA8MiERERERERdWBYJCIiIiIiog4Mi0RERERERNSBYZGIiIiIiIg6MCwSERERERFRB4ZFIiIiIiIi6sCwSERERERERB0YFomIiIiIiKgDwyIRERERERF1YFgkIiIiIiKiDgyLRERERERE1IFhkYiIiIiIiDowLBIREREREVEHhkUiIiIiIiLqwLBIREREREREHRgWiYiIiIiIqAPDIhEREREREXVgWCQiIiIiIqIODItERERERETUgWGRiIiIiIiIOjAsEhERERERUQeGRSIiIiIiIurAsEhEREREREQdGBaJiIiIiIioA8MiERERERERdWBYJCIiIiIiog4Mi0RERERERNSBYZGIiIiIiIg6MCwSERERERFRB4ZFIiIiIiIi6sCwSERERERERB0YFomIiIiIiKgDwyIRERERERF1YFgkIiIiIiKiDgyLRERERERE1IFhkYiIiIiIiDowLBIREREREVEHhkUiIiIiIiLqwLBIREREREREHRgWiYiIiIiIqAPDIhEREREREXVgWCQiIiIiIqIODItERERERETUgWGRiIiIiIiIOjAsEhERERERUQeGRSIiIiIiIurAsEhEREREREQdGBaJiIiIiIioA8MiERERERERdWBYJCIiIiIiog4Mi0RERERERNSBYZGIiIiIiIg6MCwSERERERFRB4ZFIiIiIiIi6sCwSERERERERB0YFomIiIiIiKgDwyIRERERERF1YFgkIiIiIiKiDgyLRERERERE1IFhkYiIiIiIiDowLBIREREREVEHhkUiIiIiIiLqwLBIREREREREHRgWiYiIiIiIqAPDIhEREREREXVgWCQiIiIiIqIODItERERERETUgWGRiIiIiIiIOjAsEhERERERUQeGRSIiIiIiIurAsEhEREREREQdGBaJiIiIiIioA8MiERERERERdWBYJCIiIiIiog4Mi0RERERERNSBYZGIiIiIiIg6MCwSERERERFRB4ZFIiIiIiIi6sCwSERERERERB0YFomIiIiIiKgDwyIRERERERF1YFgkIiIiIiKiDgyLRERERERE1IFhkYiIiIiIiDowLBIREREREVEHhkUiIiIiIiLqwLBIREREREREHRgWiYiIiIiIqAPDIhEREREREXVgWCQiIiIiIqIODItERERERETUgWGRiIiIiIiIOjAsEhERERERUQeGRSIiIiIiIurAsEhEREREREQdGBaJiIiIiIioA8MiERERERERdWBYJCIiIiIiog4Mi0RERERERNSBYZGIiIiIiIg6MCwSERERERFRB4ZFIiIiIiIi6sCwSERERERERB3sXjeAFp9//+KX3vbYY489c2pqarXrujUAEEJEQoiOc9u1/PxlUspIShkJIQAAWmsIISCljM11lmU1pZSxEAKFQmE8ffw4/7jmOW3bbgKAuX3u8SMhBCxhN9P7xeZ589cb6WVxvn2mveb++ed/0Z+/ONqz7zoRERERUXcJrXWv20CLzF+85KXVm266qdz0mygVSwCANEhlP5tzLVT2s5QSUsrstkIINJvNlvu3P0Ycxy33z99OCJFdbx67/TlUpFtun78eAJRSHdeZU/traT+Z583fv72dBSFq+ZCcnrLg6Xle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MSwSERHRvBNFkdfrNhARLXUMi0RERDTvcBgqEVHvMSwSERHRvMNhqEREvcewSERERPOOUophkYioxxgWqassy4r8MIQUkgsqExHRkxYEQbnXbSAiWuoYFqmrhBCR6HUjiIhowdNas2eRiKjHGBapq4RgVCQiol3HYahERL3HsEhdxZ5FIiLqBha4ISLqPW6IqauEEEnvohBQWgFgdCQioicujmOus7jAXPOrqwujo6Nra7XayjAMvTAMK81mc8CcwjAsxHFc0FrDtu2mlDKyLCtyHKfmOE7Ttm3fXD48PPxQsVgcKZfLI4VCYeJFf/7iqNevj2gpYlikrhJCxL1uAxERLXwchjo/Xf6jH+83OTm5+uHNm583Ojq69pFHHjnm0UcfPXpkZARhGEJKCdu20Wg0EMcxoihCGIYIwxBxHENrDa01PM+DEAKWZWUn27YhpYSUEtVqFcViEeVyGcViEYVCIerv79+ybNmy+wcGBjYNFosP77333netXbv2mpNOPWVLr98XosWKG2LqKtOzyDqoRES0KxgWe+8Xl1y68q677jr9vvvuO3nDhg3HPv744+WpqSkopVANwyz4KaUQxzHiOIZSKh1Z1EpAZPsIQgjUG/UdPrfnehgfH88eW2llSyFXu6672nVdOOnlWmu4rosVK1bgkEMOuf+II4740X777XdTuVweWbFixfrjXnnyxO56f4iWAm6IqauEEBwmQkREu4zLL+15v/zJT5fdcMMN77/tttvetn79+tVTU1NoNBpZwIuiCDE0BICg7b4iN+3EBENguvBdFizTINl+m/bb+4Hf8viWtAAATb+Jpt+EA8CCgG3bqNfrePChP+KBh/54yOVX/PyjtpDwPA/Lli3D/v/yL7W1a9des3bt2msOOuiga8544xt+3833jGixY1ikriqVSiORUhBCwrZshDFHpRIR0RMXhiHXWdyNrr32WntqamqfDRs2HLtu3bpzbr/99pMeeughTE1NJSOE8mFda0ADkAJZLYK2MN8e7bW5JH87kf0Puv027Q/QVl09Nr2V6eVhekIcddw+hEa92cDUls340+bHy7+68YaTAZxcLpfx6f/vX7HvvvtuecZhR5y377773nrwwQf/8oSTXz4y2/tEtNQxLBIREdG8w57F7rvmyp8VHnnkkec9+uijR19/8+8+vHnz5pUbN27E2NgY0qIzEEIgjmNIufAL5kdRBM/z4DgOwjBErVbD3XffjXvvvXfltb/81YdXrFiB/fffP/rBD35w05o1a2494IADfnPAAQf8huGRaBrDInVVfp1FftETEdGTxTmL3XPR/37/yAceeOCkO+6446zbb7/9mRsefgztc0ZMOLQsC0IIKNU573AhsSwLSin4fjKcNb9/EscxQsTYtHkTNm3eZN92223HViqVY/faa68P77PPPhPf+c53HjrqqKPOPeqooy58+SmveqxXr4FoPuCGmLqKcxaJiKgboigq9LoNC9kvLrtk2bp1686+/vrr/3r9+vX7bdmyBX6QBMBS0cFkI4TjOCgWixBCwPd9+L6fHegVYmEvfeV5HnzfR5xOhzEVWB3HSSquRgphGMIPfYRxiLGJMYxNjOGBBx4YcBznmTfddNMzK5XKF/7jP/5jy3Oe85yv/cM//9One/ySiHqCYZF2G/YsEhHRkxXHsdXrNixEP734R/tdfPHF377uuuuOHx0dRa1Wh+PYkJYNIQIoDdQaIYrFIhqNBsIwzO7rui4sy4LWOuuRW6jq9Xq2NIeUElrrJBymr6v9wyVF0rOqAQRRiMc2b4IlLWx89JGVN9x046e+9o2vf+qwww5rnn766W95zwfef8GefTVEvbPwB6TTvCJEUg/NVD0jIiJ6MuI4Zs/iE3DFZZeuPPWVL//DG9/4xod//OMfHz8xMYF6vY5YAU0/Qr2RBEUBwHMt+L6frW9oehGjKILWGo7jZN/js50WAhMWgeS15YfWWtKCbdmwLTurtKq0yk6O7SBWMXzfz+Y83nDDDYW///u/P/+Afdfo9777HedfdP65R/bkhRHtQexZJCIionknZjXtnfKD73772B/96Effu+WWW9aaYZf1RoBaPelB81wLnucBAMIwRBCE8IMYCsk8xXK5DKUUarUalFJoNptoNps9fEXdYQJvEAQdlzuOA7+erPOY9ShqDQEBKWUWoG3LhlIKExMTWeXWRrOByclJfPf7/3PW1df++qyL/u/Hdx555JEXPuPpR5578imv2bhnXyXR7sewSF2Vn7OYbFgX9pwHIiLqjYXSe9Ur//HvXzj78ssv/8JvfvOblU0/Skb1pNcND/VjfHwSUgJBEMMP6tn9LJkESNge6vU6pqamACTB0fM8xHHcEbAWojiOWz5DpoBPFEUIwxAWkqBo23Yy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DjsMRx11FFatWtUxZJRFPmghMwdTzIGU/MEXIQQKhQL2339/vOQlL8H555+fHWipVCochjoPpNutebef8t1vfvP4b3zjG1c2m82OAwtmG8w52bQntWzbkHz2xsfH8f73v3/zf2jsfeIpDIz05M27jTAtbPk5i/yi3P0GBwfRaDTg+8mRalNIJgzDbOid6Vn0PA977703Dj/8cJx88sl49atfjWKx2LKkhaG1RhiGnFNIC15+x90c/DDDoZVSOOCAA3DaaafhggsugGVZiKKIB7zmkSiKCr1uQ97VV1xRPv/CCy763bp1gGVlB+xMFWkzfNl8loh2txgaAgLmW1whOWAxMjKCkZERfPzjH9984imv5EaNnjTuCVJXmWqoAMNiN8y102rWPTTFZaIoyipEuq4Ly7JQLpex995749hjj8UZZ5yBY445pmN9w1qtlg1NLRQKWe8k0UJmennamQAZRREGBwdx1FFHYa+99sLkZDKHrF6v7+mm0gzSOanzJixed9VV9he/+MU/3HzzzQOuY6MRJmHQDF82ByPMmp1Ee1J+n0trDQ2FFctW4M577sTxL3xx9ZfXX1vpYfNoAWNYpK7KL52htAIL3OxenuchCAIEQZCFRMuyUCqVUKlUcMABB+DMM8/EK17xCuyzzz7wPA9aa/i+n/VAFotFlMtlAMmw1mazmS13wcBPC5np5TGBMV+AC5heVkNrjX322QdjY2NwXRf1ej3726LeSUc4zFzytgfOO/9/L7ril79c7bkegjQomm1u+9qc3HbS7pavkppEQwFojfxhivHxcfT3D+LXN1xX/qu3vP2ir33322f0oKm0wDEsUldJKWMeUe2euXoWfd9HqVRCuVzG5ORk9u9Xv/rVePWrX41nPvOZOPDAAyGEQBAE2Rwu27bRbDZRKBSy8vRmGJWZt5UvCEK0UJkd+Pzn2ayBZ9s2tm3bho0bN6K/vz/7GwGS3nqGxd5Kw+K86A35q7e//aIf//jHp/RVypiq1gC0LgvUHg4535v2NFMaqn2pjfHJcZQKJXz3e989fXh4+PMvfelLP/3SV5xU60kjaUFiWKSuajlyzwOru93y5cuxfft21Ot1PPWpT8UZZ5yB448/HocccggGBgZayv9rrbOdXyllS3XTqakpOI6DUqnEeYq0aJh5Y+3LYIRhiGaziampKdx9993YsGFDNpTQ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7733xiOPPIIgCLIlAVhtl+Y7rTWUUrv8If31L68onH/++ecLITA6Ng7HXjqfe8uysoqlhuM4SdBRAaJIw5LA/vvte+MRRxxx67Oe9axrjz766KtOPPmUBdOL+ER9+KMfvwrAVVf87OcDt91220t/85vfnPyHP/zhGaOjo8+q1qpQWmGqOpX1KGqtUc/1IloyeU8XekWG9h7F7N/p9Y0ghhDJvzWAr/zHV6988zv+cnHv1NGMuLdKXSeljE1wWuza54GYIT5AskzG2WefDcuysrXugKTS3rJly9BsNjlvkXYrU8J+xYoVGBgYwNatW+E4TraO3FIYikcLl9boyjqL559//vn33nsvfD/ZNhcKBYTV2i63b77r7+9Ho9HIpkpYlpUt5wQAywfKOGCvva59+tOf/tsXv/jFl/zl+z/82x43eY866eUvmzjp5S+7GMDF5/3g3EMuu+yyN19//fUnb9u2bZWUcnnTb8L3/WRJFZHUJfA8LymU4/tz9iwu9H0gz7Pg+zEKroVqrYl7770XX/+PL53+l+/90I963TbasxgWqetmqvC5WJmwKITI5itKKTE0NIQzzzwT++yzT7b4MABUq1XstddeAICpqSmGRdqthBCo1+sYGhrCQQcdhCAIsmUBzPpyRPPZrobFa678eeEXv/jFKdVqDZECKuXSgt+J31mTk5PZz2bECwAsW7YMq1evvur4P3/hD5/znOf84ozXv3HJL7p+9hvOuf/sN5zzUQAf/cyn/+nUn//852dv2LDh0K1btx7uBz6ApPCN7/tZwRuxSIoydPQwppcnI09ilMtl+MEkisUizj333Iv+8r0fWhwvnHba0tmrpz1GCBEt9rH87UzJ7TiO4bouDjzwQJx22mktt5mcnES5XIbrupiamsKyZct61FpaKqIowuTkJCqVCtauXZsdqPB9v2VYGtF8tasFbr7xjW/cuG3bNsQKWDacLOJerdVRKi7+A3WVSiVbiskMPd1nn33uOfPMM//6C1/4wqv/7cv/+S0GxU4f/+QnLr7hphtPf8c73vHpY4455seO7Yw6tpMsB5YGxeGh4R63cver1wP09RUxOjaJYsHB5GQDN998Oy4473tH97pttGcxLFLX9RfLjwml4AgJqQCpkByq0kgGvwtAy+S00AkhYNt21sNoiod88IMfRLFYRLFYzG7b39+fDVvp6+tb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iIiIBjAsEhERERER0QCGRSIiIiIiIhrAsEhEREREREQDGBaJiIiIiIhoAMMiERERERERDWBYJCIiIiIiogEMi0RERERERDSAYZGIiIiIiIgGMCwSERERERHRAIZFIiIiIiIiGsCwSERERERERAMYFomIiIiIiGgAwyIRERERERENYFgkIiIiIiKiAQyLRERERERENIBhkYiIiIiIiAYwLBIREREREdEAhkUiIiIiIiIawLBIREREREREAxgWiYiIiIiIaADDIhEREREREQ1gWCQiIiIiIqIBDItEREREREQ0gGGRiIiIiIiIBjAsEhERERER0QCGRSIiIiIiIhrAsEhEREREREQDGBaJiIiIiIhoAMMiERERERERDWBYJCIiIiIiogEMi0RERERERDSAYZGIiIiIiIgGMCwSERERERHRAIZFIiIiIiIiGsCwSERERERERAMYFomIiIiIiGgAwyIRERERERENYFgkIiIiIiKiAQyLRERERERENIBhkYiIiIiIiAYwLBIREREREdEAhkUiIiIiIiIawLBIREREREREAxgWiYiIiIiIaADDIhEREREREQ1gWCQiIiIiIqIBDItEREREREQ0gGGRiIiIiIiIBjAsEhERERER0QCGRSIiIiIiIhrAsEhEREREREQDGBaJiIiIiIhoAMMiERERERERDWBYJCIiIiIiogEMi0RERERERDSAYZGIiIiIiIgGMCwSERERERHRAIZFIiIiIiIiGsCwSERERERERAMYFomIiIiIiGgAwyIRERERERENYFgkIiIiIiKiAQyLRERERERENIBhkYiIiIiIiAYwLBIREREREdEAhkUiIiIiIiIawLBIREREREREAxgWiYiIiIiIaADDIhEREREREQ1gWCQiIiIiIqIBDItEREREREQ0gGGRiIiIiIiIBjAsEhERERER0QCGRSIiIiIiIhrAsEhEREREREQDGBaJiIiIiIhoAMMiERERERERDWBYJCIiIiIiogEMi0RERERERDSAYZGIiIiIiIgGMCwSERERERHRAIZFIiIiIiIiGsCwSERERERERAMYFomIiIiIiGgAwyIRERERERENYFgkIiIiIiKiAQyLRERERERENIBhkYiIiIiIiAYwLBIREREREdEAhkUiIiIiIiIawLBIREREREREAxgWiYiIiIiIaADDIhEREREREQ1gWCQiIiIiIqIBDItEREREREQ0gGGRiIiIiIiIBjAsEhERERER0QCGRSIiIiIiIhrAsEhEREREREQDGBaJiIiIiIhoAMMiERERERERDWBYJCIiIiIiogEMi0RERERERDSAYZGIiIiIiIgGMCwSERERERHRAIZFIiIiIiIiGsCwSERERERERAMYFomIiIiIiGgAwyIRERERERENYFgkIiIiIiKiAQyLRERERERENIBhkYiIiIiIiAYwLBIREREREdEAhkUiIiIiIiIawLBIREREREREAxgWiYiIiIiIaADDIhEREREREQ1gWCQiIiIiIqIBDItEREREREQ0gGGRiIiIiIiIBjAsEhERERER0QCGRSIiIiIiIhrAsEhEREREREQDGBaJiIiIiIhoAMMiERERERERDWBYJCIiIiIiogEMi0RERERERDSAYZGIiIiIiIgGMCwSERERERHRAIZFIiIiIiIiGsCwSERERERERAMYFomIiIiIiGgAwyIRERERERENYFgkIiIiIiKiAQyLRERERERENIBhkYiIiIiIiAYwLBIREREREdEAhkUiIiIiIiIawLBIREREREREAxgWiYiIiIiIaADDIhEREREREQ1gWCQiIiIiIqIBDItEREREREQ0gGGRiIiIiIiIBjAsEhERERER0QCGRSIiIiIiIhrAsEhEREREREQDGBaJiIiIiIhogPepT/zd+WdzAydOnLhi7969X73+td8z/UwNai0528eHaCXWWm+l7zvnoJTSYRjOX3fDd88/W+Mieqb949/99RXdbnfU9/14ZGTkaLVanZ6bm1vx76uUUj9b4yMiInq6hBBmpe8759RK37/hDW8+/MyO6NwRzrlhj4GIiIiIiIjWGE5DJSIiIiIiogEMi0RERERERDSAYZGIiIiIiIgGMCwSERERERHRAIZFIiIiIiIiGsCwSERERERERAMYFomIiIiIiGgAwyIREREREREN+P8BOGfWRME9BxYAAAAASUVORK5CYII='
    }]
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  
}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_3dda22fa_render,
  defaultvue_type_template_id_3dda22fa_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "59afe159"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {Header: __webpack_require__(11).default})

// CONCATENATED MODULE: ./.nuxt/App.js






const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;

    if (this.isPreview) {
      if (this.$store && this.$store._actions.nuxtServerInit) {
        this.$loading.start();
        await this.$store.dispatch('nuxtServerInit', this.context);
      }

      await this.refresh();
      this.$loading.finish();
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    },

    getRouterBase() {
      return (this.$router.options.base || '').replace(/\/+$/, '');
    },

    getRoutePath(route = '/') {
      const base = this.getRouterBase();

      if (base && route.startsWith(base)) {
        route = route.substr(base.length);
      }

      return (route.replace(/\/+$/, '') || '/').split('?')[0].split('#')[0];
    },

    getStaticAssetsPath(route = '/') {
      const {
        staticAssetsBase
      } = window.__NUXT__;
      return urlJoin(staticAssetsBase, this.getRoutePath(route));
    },

    async fetchStaticManifest() {
      return window.__NUXT_IMPORT__('manifest.js', encodeURI(urlJoin(this.getStaticAssetsPath(), 'manifest.js')));
    },

    setPagePayload(payload) {
      this._pagePayload = payload;
      this._payloadFetchIndex = 0;
    },

    async fetchPayload(route) {
      const manifest = await this.fetchStaticManifest();
      const path = this.getRoutePath(route);

      if (!manifest.routes.includes(path)) {
        this.setPagePayload(false);
        throw new Error(`Route ${path} is not pre-rendered`);
      }

      const src = urlJoin(this.getStaticAssetsPath(route), 'payload.js');

      try {
        const payload = await window.__NUXT_IMPORT__(decodeURI(route), encodeURI(src));
        this.setPagePayload(payload);
        return payload;
      } catch (err) {
        this.setPagePayload(false);
        throw err;
      }
    }

  },
  components: {
    NuxtLoading: LoadingPage
  }
});
// CONCATENATED MODULE: ./.nuxt/components/plugin.js

const globalComponents = {};

for (const name in globalComponents) {
  external_vue_default.a.component(name, globalComponents[name]);
}
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "meta": [],
      "link": [],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 2
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js








 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (decodeURI(opts.path) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(ufo_["normalizeURL"])(opts.path)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if ( true && ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@prismicio/client");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map