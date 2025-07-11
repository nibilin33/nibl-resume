/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"about":"about"}[chunkId]||chunkId) + "." + {"about":"48398978"}[chunkId] + ".js"
/******/ 	}
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
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
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
/******/ 	__webpack_require__.p = "/nibl-resume/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "2215":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_BaseInfo_vue_vue_type_style_index_0_id_ce68e2b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f405");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_BaseInfo_vue_vue_type_style_index_0_id_ce68e2b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_BaseInfo_vue_vue_type_style_index_0_id_ce68e2b2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 3 modules
var vue_runtime_esm_bundler = __webpack_require__("7a23");

// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs
var vue_i18n = __webpack_require__("9ca6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=template&id=43f8a59e

function render(_ctx, _cache) {
  const _component_router_view = Object(vue_runtime_esm_bundler["C" /* resolveComponent */])("router-view");
  return Object(vue_runtime_esm_bundler["x" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(_component_router_view);
}
// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=43f8a59e

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/App.vue

const script = {}


const __exports__ = /*#__PURE__*/exportHelper_default()(script, [['render',render]])

/* harmony default export */ var App = (__exports__);
// EXTERNAL MODULE: ./src/i18n.js
var i18n = __webpack_require__("9225");

// EXTERNAL MODULE: ./src/main.scss
var main = __webpack_require__("abe2");

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__("6605");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/Home.vue?vue&type=template&id=9ecc7de0

function Homevue_type_template_id_9ecc7de0_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Resume = Object(vue_runtime_esm_bundler["C" /* resolveComponent */])("Resume");
  return Object(vue_runtime_esm_bundler["x" /* openBlock */])(), Object(vue_runtime_esm_bundler["e" /* createBlock */])(_component_Resume);
}
// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=template&id=9ecc7de0

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Resume.vue?vue&type=template&id=7a679921

const _hoisted_1 = {
  class: "head"
};
function Resumevue_type_template_id_7a679921_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = Object(vue_runtime_esm_bundler["C" /* resolveComponent */])("router-link");
  const _component_BaseInfo = Object(vue_runtime_esm_bundler["C" /* resolveComponent */])("BaseInfo");
  const _component_JobInfo = Object(vue_runtime_esm_bundler["C" /* resolveComponent */])("JobInfo");
  return Object(vue_runtime_esm_bundler["x" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("div", null, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_1, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", null, [_cache[1] || (_cache[1] = Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
    class: "download-pdf",
    href: "https://www.sejda.com/html-to-pdf"
  }, "PDF", -1)), Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, {
    to: "/en"
  }, {
    default: Object(vue_runtime_esm_bundler["I" /* withCtx */])(() => _cache[0] || (_cache[0] = [Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("English Verison")])),
    _: 1,
    __: [0]
  })]), _cache[2] || (_cache[2] = Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
    class: "last-modified"
  }, "最后更新于2025年7月", -1))]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("main", null, [Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_BaseInfo), Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_JobInfo)])]);
}
// CONCATENATED MODULE: ./src/components/Resume.vue?vue&type=template&id=7a679921

// EXTERNAL MODULE: ./src/components/BaseInfo.vue + 4 modules
var BaseInfo = __webpack_require__("8b3d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Job.vue?vue&type=template&id=66e959dc

const Jobvue_type_template_id_66e959dc_hoisted_1 = {
  class: "content-bd"
};
const _hoisted_2 = {
  class: "content-left"
};
const _hoisted_3 = {
  class: "practice"
};
const _hoisted_4 = {
  class: "section-bd"
};
const _hoisted_5 = {
  class: "section-bd"
};
const _hoisted_6 = {
  class: "content-right"
};
const _hoisted_7 = {
  class: "practice"
};
const _hoisted_8 = {
  class: "section-bd"
};
const _hoisted_9 = {
  class: "section-bd"
};
const _hoisted_10 = {
  class: "project-1"
};
const _hoisted_11 = {
  class: "project-2"
};
const _hoisted_12 = {
  class: "item-bd"
};
const _hoisted_13 = {
  class: "div-item"
};
const _hoisted_14 = {
  class: "section-content"
};
const _hoisted_15 = {
  class: "section-bd"
};
function Jobvue_type_template_id_66e959dc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_JobItem = Object(vue_runtime_esm_bundler["C" /* resolveComponent */])("JobItem");
  return Object(vue_runtime_esm_bundler["x" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("div", Jobvue_type_template_id_66e959dc_hoisted_1, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_2, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("section", _hoisted_3, [_cache[3] || (_cache[3] = Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("header", {
    class: "section-hd"
  }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
    class: "section-title-l"
  }), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h2", {
    class: "section-title"
  }, "工作经历"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
    class: "section-title-r"
  })], -1)), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_4, [Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_JobItem, {
    company: "海马体集团",
    time: "2023.3 - now"
  }, {
    default: Object(vue_runtime_esm_bundler["I" /* withCtx */])(() => _cache[1] || (_cache[1] = [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "project-1"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-name"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
      href: "#",
      target: "_blank",
      title: "海马体预约端"
    }, " 海马体预约端 ")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", null, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "project-2"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "item-bd"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【简介】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
      class: "item-project-des"
    }, " 为海马体集团旗下所有品牌提供线上预约系统，下单，在线看片，直播等服务。 覆盖微信、支付宝、抖音等多个渠道 ")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【工作方向】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "tag-wrapper"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "uniapp"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "chrome 插件"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "webpack 插件"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "photoshop 插件"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "babel 插件"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "vite 插件"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "nodejs"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "脚手架"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "serverless"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "canvas"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "Webassembly"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "C++/Cmake"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "CI/CD")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
      class: "section-content"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "负责前端架构搭建，制定技术方案，性能优化等攻坚克难问题"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "负责团队工程效能，制定和优化研发流程规范，提升团队的开发效率"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "结合AI技术创新，降本增效和提升产研效率")])]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【技术】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
      class: "section-content"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " Uniapp 微应用方案"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " 分支管理规范&CI部署优化"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " Uniapp 渐进式迁移"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " 素材合成服务(canvas dsl)"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " morjs框架支持小红书"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " 结合AI的低代码自动化测试"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " 将C++ AI工程使用Emscripten封装成SDK，供前端使用 "), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " 自动化日志监控和异常检测服务 "), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " AI导购 ")])])])])])], -1)])),
    _: 1,
    __: [1]
  })]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_5, [Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_JobItem, {
    company: "Horizons",
    status: "remote",
    time: "2022.11 - 2023.3"
  }, {
    default: Object(vue_runtime_esm_bundler["I" /* withCtx */])(() => _cache[2] || (_cache[2] = [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "project-1"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-name"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
      href: "https://app.joinhorizons.com/login",
      target: "_blank",
      title: "Horizons"
    }, " Join ")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", null, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "project-2"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "item-bd"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【简介】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
      class: "item-project-des"
    }, " 提供一站式雇佣解决方案，同时负责薪酬发放的人力资源SaaS平台 ")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【工作方向】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "tag-wrapper"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "react"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "vite"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "tailwindcss"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "turborepo"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "i18n"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "微前端")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
      class: "section-content"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " Join-UI组件库开发维护 "), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "Join 管理端&用户端重构")])]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【技术】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
      class: "section-content"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "微前端集成，完成阶段性重构结果上线 "), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "i18n一站式解决方案 "), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "制定多端组件开发优化方案"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "Mock方案优化迁移")])])])])])], -1)])),
    _: 1,
    __: [2]
  })])])]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_6, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("section", _hoisted_7, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_8, [Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_JobItem, {
    company: "开源贡献 & 个人项目",
    status: "open"
  }, {
    default: Object(vue_runtime_esm_bundler["I" /* withCtx */])(() => _cache[4] || (_cache[4] = [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "project-1"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-name"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
      href: "https://github.com/codepod-io/codepod",
      target: "_blank",
      title: "codepod"
    }, " Codepod ")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", null, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "project-2"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "item-bd"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【简介】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
      class: "item-project-des"
    }, " 可扩展的交互式编程，可实时地观察代码的运行结果（类似Jupyter Notebook） ")])])])])], -1), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "project-1"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-name"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
      href: "#",
      target: "_blank",
      title: "AI雅思备考"
    }, " AI雅思备考 ")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", null, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "project-2"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "item-bd"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【简介】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
      class: "item-project-des"
    }, " AI定制备考计划系统，基于用户的目标分数、时间投入、语言水平、学习习惯等参数生成个性化每日任务计划。 任务内容涵盖听说读写四项练习、词汇积累、长难句解析、语料训练等模块，支持根据做题表现实时优化学习策略和动态调整学习路径，结合语音识别技术实现发音纠正和智能评分 ")])])])])], -1), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "project-1"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-name"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
      href: "https://github.com/nibilin33/meituan-plugin",
      target: "_blank",
      title: "AI餐饮代运营"
    }, " AI餐饮代运营 ")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", null, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "project-2"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "item-bd"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【简介】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
      class: "item-project-des"
    }, " 智能餐饮运营助手系统，定时爬取店铺后台数据（销售、客流、评价等），通过AI算法进行深度分析，自动生成经营提升策略和具体执行方案。 系统可识别经营痛点，提供菜品优化建议、营销策略制定、库存管理等智能化运营决策，有效代替部分日常运营工作，提升餐饮商家的经营效率和盈利能力 ")])])])])], -1), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "project-1"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-name"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
      href: "#",
      target: "_blank",
      title: "AI房地产获客"
    }, " AI房地产获客 ")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", null, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "project-2"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "item-bd"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【简介】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
      class: "item-project-des"
    }, " 构建内容驱动的智能获客系统，通过AI分析新媒体内容效果与客户转化的关联性，实现从内容创作到线索获取的全链路追踪。 帮助新媒体团队从关注阅读量转向关注实际获客效果，精准识别高转化内容并优化内容策略，最终提升成交转化率 ")])])])])], -1)])),
    _: 1,
    __: [4]
  })]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_9, [Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_JobItem, {
    company: "阿里巴巴集团",
    time: "2020.06 至 2022.05"
  }, {
    default: Object(vue_runtime_esm_bundler["I" /* withCtx */])(() => [_cache[12] || (_cache[12] = Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "project-1"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-name"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
      href: "",
      target: "_blank",
      title: ""
    }, "淘宝数字虚拟 ")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", null, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "project-2"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "item-bd"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【简介】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
      class: "item-project-des"
    }, [Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 分为直充"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
      class: "alias_light"
    }, "（充值中心）"), Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("，非充"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
      class: "alias_light"
    }, "（号卡，流量包）"), Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("，互动"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
      class: "alias_light"
    }, "（薅羊毛）"), Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("，B端侧商家运营平台，内部运营平台并且通过A/B实验助力用户增长 ")])]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【工作方向】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "tag-wrapper"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "react"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "weex"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "ssr"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "serverless")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
      class: "section-content"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " 淘宝移动端充值中心相关业务 ")])]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【技术】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
      class: "section-content"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "H5全链路日志 "), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "基于边缘计算的个性化SSR ")])])])])])], -1)), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", _hoisted_10, [_cache[11] || (_cache[11] = Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-name"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
      href: "",
      target: "_blank",
      title: ""
    }, "蚂蚁IoT ")], -1)), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", null, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", _hoisted_11, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_12, [_cache[9] || (_cache[9] = Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【简介】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
      class: "item-project-des"
    }, [Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 涵盖所有蚂蚁线下支付设备，中小商家里的支付宝盒，大型商场里的自助点餐机，扫脸付款设备等等"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("br"), Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 支付设备的切入点是为了解决支付问题，除了支付场景之外，也有很多和内容运营相关的事情 ")])], -1)), _cache[10] || (_cache[10] = Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【工作方向】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "tag-wrapper"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "react"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "python"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "vscode 插件"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "canvas")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
      class: "section-content"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, [Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 日常IoT C端 动态化业务场景"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
      class: "alias_light"
    }, "（营销+会员）")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, [Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("IoT营销类UIPaaS"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
      class: "alias_light"
    }, "（low-code）")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "刷脸相关的小程序应用/插件"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "多媒体：音视频通话，OCR小程序插件等")])], -1)), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_13, [_cache[8] || (_cache[8] = Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【技术】", -1)), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", _hoisted_14, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, [_cache[5] || (_cache[5] = Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 工程效能 ")), _cache[6] || (_cache[6] = Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
      class: "item-project-des"
    }, [Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 实现了对端调试工具，可视化操作，繁琐重复的手工流程自动化"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("br"), Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 提供了桌面版本"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
      class: "alias_light"
    }, "（用python开发）"), Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("和 vscode插件版本 ")], -1)), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("img", {
      style: {
        "width": "200px"
      },
      onClick: _cache[0] || (_cache[0] = (...args) => $options.openImg && $options.openImg(...args)),
      src: "https://nibilin33.github.io/nibl-resume/static/lique.webp"
    })]), _cache[7] || (_cache[7] = Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, [Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" IoT前端优化"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
      class: "alias_light"
    }, "（离线包->内部自研跨端容器）"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
      class: "item-project-des"
    }, " 基于IoT内部的自研轻量跨端容器，主导方案框架设计，封装canvas渲染框架，一套代码构建多端产物，自动H5降级 ")], -1))])])])])])])]),
    _: 1,
    __: [12]
  })]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_15, [Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_JobItem, {
    company: "厦门亿联网络技术股份有限公司",
    time: "2017.7 至 2020.2"
  }, {
    default: Object(vue_runtime_esm_bundler["I" /* withCtx */])(() => _cache[13] || (_cache[13] = [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "project-1"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-name"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
      href: "",
      target: "_blank",
      title: ""
    }, "UC")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", null, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
      class: "project-2"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "item-bd"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【简介】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "tag-wrapper"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "vue"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "jquery"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "nodejs"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "python"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "electron"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "nginx"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", null, "shell")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
      class: "item-project-des"
    }, [Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 企业统一通讯的解决方案，主要有设备管理，会议预约，PBX，短信网关，话题等功能"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("br")])]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【工作方向】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
      class: "item-project-des"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
      class: "section-content"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "项目管理与团队协作（需求评审，任务分配，技术支持, 功能开发）"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "UC项目重构和输出规范"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "前端项目优化与性能提升")])])]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
      class: "div-item"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
      class: "project-des"
    }, "【技术】"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
      class: "section-content"
    }, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, [Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 性能优化"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("br"), Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 1. 会议预约组件：从打开奔溃到秒开"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("br"), Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 2. 组织架构树:4+s -> 1+s"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("br"), Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 3. 内嵌webview加载慢: 离线资源包"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("br")]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "内存泄漏 : 去循环引用，主动触发GC"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "多彩、自动化测试解决方案"), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "H5混合开发跨部门联调效率低: 利用Electron作为模拟工具，优化开发链，提高效率")])])])])])], -1)])),
    _: 1,
    __: [13]
  })])]), _cache[14] || (_cache[14] = Object(vue_runtime_esm_bundler["i" /* createStaticVNode */])("<section class=\"skill\"><header class=\"section-hd\"><span class=\"section-title-l\"></span><h2 class=\"section-title\">技能</h2><span class=\"section-title-r\"></span></header><div class=\"section-bd\"><div class=\"item\"><a href=\"https://nibilin33.github.io/nibl-resume/static/skill.png\"><img style=\"width:100%;\" src=\"https://nibilin33.github.io/nibl-resume/static/skill.png\"></a></div></div></section><section class=\"prize\"><header class=\"section-hd\"><span class=\"section-title-l\"></span><h2 class=\"section-title\">奖项/证书</h2><span class=\"section-title-r\"></span></header><div class=\"section-bd\"><div class=\"item\"><div class=\"item-bd\"><ul class=\"section-content\"><li>获得过国家奖学金一等奖学金</li><li>CET6</li><li>英语水平良好,雅思成绩7.0（2022.10的成绩）</li></ul></div></div></div></section><section class=\"thanks\"><header class=\"section-hd\"><span class=\"section-title-l\"></span><h2 class=\"section-title\">致谢</h2><span class=\"section-title-r\"></span></header><div class=\"section-bd\"><div class=\"item\"><h2 style=\"font-weight:bold;line-height:24px;margin-top:10px;\"> 感谢在百忙之中阅读这份履历 </h2></div></div></section>", 3))])]);
}
// CONCATENATED MODULE: ./src/components/Job.vue?vue&type=template&id=66e959dc

// EXTERNAL MODULE: ./src/components/JobItem.vue + 4 modules
var JobItem = __webpack_require__("ce46");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Job.vue?vue&type=script&lang=js

/* harmony default export */ var Jobvue_type_script_lang_js = ({
  name: "JobInfo",
  components: {
    JobItem: JobItem["a" /* default */]
  },
  methods: {
    openImg(e) {
      const {
        target
      } = e;
      if (target.currentSrc) {
        window.open(target.currentSrc);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Job.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/Job.vue





const Job_exports_ = /*#__PURE__*/exportHelper_default()(Jobvue_type_script_lang_js, [['render',Jobvue_type_template_id_66e959dc_render]])

/* harmony default export */ var Job = (Job_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Resume.vue?vue&type=script&lang=js


/* harmony default export */ var Resumevue_type_script_lang_js = ({
  name: "Resume",
  components: {
    BaseInfo: BaseInfo["a" /* default */],
    JobInfo: Job
  },
  methods: {
    downloadPdf() {
      alert(this.$t("message.unrealized"));
    }
  }
});
// CONCATENATED MODULE: ./src/components/Resume.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/Resume.vue





const Resume_exports_ = /*#__PURE__*/exportHelper_default()(Resumevue_type_script_lang_js, [['render',Resumevue_type_template_id_7a679921_render]])

/* harmony default export */ var Resume = (Resume_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/Home.vue?vue&type=script&lang=js


/* harmony default export */ var Homevue_type_script_lang_js = ({
  name: "App",
  components: {
    Resume: Resume
  },
  mounted() {
    const language = Object(i18n["a" /* getLanguage */])();
    this.$i18n.locale = language;
  }
});
// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/views/Home.vue





const Home_exports_ = /*#__PURE__*/exportHelper_default()(Homevue_type_script_lang_js, [['render',Homevue_type_template_id_9ecc7de0_render]])

/* harmony default export */ var Home = (Home_exports_);
// CONCATENATED MODULE: ./src/router/index.js


const routes = [{
  path: "/",
  name: "Home",
  component: Home
}, {
  path: "/en-cv",
  name: "EnVersion",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => __webpack_require__.e(/* import() | about */ "about").then(__webpack_require__.bind(null, "3fd8"))
}, {
  path: "/en",
  name: "EnCV",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => __webpack_require__.e(/* import() | about */ "about").then(__webpack_require__.bind(null, "fef7"))
}, {
  path: "/en-resume",
  name: "EnResume",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => __webpack_require__.e(/* import() | about */ "about").then(__webpack_require__.bind(null, "6f1b"))
}];
const router = Object(vue_router["a" /* createRouter */])({
  history: Object(vue_router["b" /* createWebHashHistory */])("/nibl-resume/"),
  routes
});
/* harmony default export */ var src_router = (router);
// CONCATENATED MODULE: ./src/main.js






const main_language = Object(i18n["a" /* getLanguage */])();
const main_i18n = Object(vue_i18n["a" /* createI18n */])({
  messages: i18n["b" /* message */],
  locale: main_language,
  fallbackLocal: main_language
});
const app = Object(vue_runtime_esm_bundler["d" /* createApp */])(App).use(src_router);
app.use(main_i18n);
app.mount("#app");

/***/ }),

/***/ "8b3d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 3 modules
var vue_runtime_esm_bundler = __webpack_require__("7a23");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/BaseInfo.vue?vue&type=template&id=ce68e2b2&scoped=true

const _hoisted_1 = {
  class: "content-hd"
};
const _hoisted_2 = {
  class: "title"
};
const _hoisted_3 = {
  class: "title-content"
};
const _hoisted_4 = {
  class: "title-text"
};
const _hoisted_5 = {
  class: "name"
};
const _hoisted_6 = {
  class: "job"
};
const _hoisted_7 = {
  class: "info"
};
const _hoisted_8 = {
  key: 0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_runtime_esm_bundler["x" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("header", _hoisted_1, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("section", _hoisted_2, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_3, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_4, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_5, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h1", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(_ctx.$t('message.myname')), 1)]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_6, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h2", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(_ctx.$t('message.jobtitle')), 1)])])])]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("section", _hoisted_7, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", null, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, [Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(_ctx.$t('message.gender')) + " / 1994.04 / ", 1), $props.isEnglish ? (Object(vue_runtime_esm_bundler["x" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("span", _hoisted_8, "Chinese citizen")) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(_ctx.$t('message.university')), 1), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(_ctx.$t('message.profession')), 1), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(_ctx.$t('message.graduate')), 1)])]), _cache[0] || (_cache[0] = Object(vue_runtime_esm_bundler["i" /* createStaticVNode */])("<section class=\"contact\" data-v-ce68e2b2><ul data-v-ce68e2b2><li data-v-ce68e2b2><a href=\"https://www.zhihu.com/people/nibl\" target=\"_blank\" data-v-ce68e2b2><span class=\"contact-link\" data-v-ce68e2b2>知乎 - nibl</span><span class=\"iconfont\" data-v-ce68e2b2><svg width=\"16px\" height=\"16px\" viewBox=\"0 0 1024 1024\" data-v-ce68e2b2><path d=\"M544 512h96l-96-96V320h160v-64H544V96h-64v160H320v64h160v96l-96 96h96v320h-96v64h256v-64h-96V512z\" data-v-ce68e2b2></path></svg></span></a></li><li data-v-ce68e2b2><a href=\"https://github.com/nibilin33\" target=\"_blank\" data-v-ce68e2b2><span class=\"contact-link\" data-v-ce68e2b2>Github - nibilin33</span><span class=\"iconfont\" data-v-ce68e2b2><svg width=\"16px\" height=\"16px\" viewBox=\"0 0 1024 1024\" data-v-ce68e2b2><path d=\"M941.714 512q0 143.433-83.712 258.011t-216.283 158.574q-15.433 2.853-22.565-3.986t-7.131-17.152v-120.576q0-55.442-29.696-81.152 32.585-3.438 58.587-10.277t53.723-22.272 46.299-37.998 30.281-60.014 11.703-86.016q0-69.157-45.129-117.723 21.138-52.005-4.571-116.553-16.018-5.157-46.299 6.29t-52.553 25.161l-21.723 13.714q-53.138-14.848-109.714-14.848t-109.714 14.848q-9.143-6.29-24.283-15.433t-47.726-22.016-49.152-7.717q-25.161 64.585-3.986 116.553-45.129 48.567-45.129 117.723 0 48.567 11.703 85.723t29.989 60.014 46.007 38.29 53.723 22.272 58.587 10.277q-22.857 20.553-28.014 58.843-11.995 5.705-25.71 8.558t-32.585 2.853-37.413-12.288-31.707-35.73q-10.862-18.286-27.721-29.696t-28.27-13.714l-11.447-1.719q-11.995 0-16.567 2.56t-2.853 6.583 5.157 8.009 7.424 6.839l3.986 2.853q12.581 5.705 24.869 21.723t17.993 29.147l5.705 13.129q7.424 21.723 25.161 35.145t38.29 17.152 39.717 3.986 31.707-2.011l13.129-2.304q0 21.723 0.293 50.871t0.293 30.866q0 10.277-7.424 17.152t-22.857 3.986q-132.571-43.995-216.283-158.574t-83.712-258.011q0-119.442 58.843-220.27t159.707-159.707 220.27-58.843 220.27 58.843 159.707 159.707 58.843 220.27z\" data-v-ce68e2b2></path></svg></span></a></li><li data-v-ce68e2b2><a href=\"mailto:nibilin33@gmail.com\" target=\"_blank\" data-v-ce68e2b2><span class=\"contact-link\" data-v-ce68e2b2>nibilin33@gmail.com</span><span class=\"iconfont\" data-v-ce68e2b2><svg width=\"16px\" height=\"16px\" viewBox=\"0 0 1024 1024\" data-v-ce68e2b2><path d=\"M903.808 239.04l-818.304 0 0 545.92 852.992 0 0-545.92-34.688 0zM869.664 273.152l-329.536 329.536c-15.04 15.04-41.248 15.04-56.288 0l-329.6-329.536 715.392 0zM119.616 286.752l221.536 221.504-221.536 221.536 0-443.072zM146.848 750.848l218.464-218.432 94.432 94.4c13.952 13.952 32.512 21.664 52.256 21.664s38.304-7.712 52.256-21.664l94.432-94.432 218.432 218.432-730.304 0zM904.384 729.824l-221.536-221.568 221.536-221.568 0 443.136z\" data-v-ce68e2b2></path></svg></span></a></li><li data-v-ce68e2b2><a href=\"tel:13960845178\" target=\"_blank\" data-v-ce68e2b2><span class=\"contact-link\" data-v-ce68e2b2>13960845178</span><span class=\"iconfont\" data-v-ce68e2b2><svg width=\"16px\" height=\"16px\" viewBox=\"0 0 1024 1024\" data-v-ce68e2b2><path d=\"M256 1024l512 0c26.464 0 48-21.536 48-48l0-928c0-26.464-21.536-48-48-48l-512 0c-26.464 0-48 21.536-48 48l0 928c0 26.464 21.536 48 48 48zM240 48c0-8.832 7.168-16 16-16l512 0c8.832 0 16 7.168 16 16l0 928c0 8.832-7.168 16-16 16l-512 0c-8.832 0-16-7.168-16-16l0-928zM288 864l448 0c8.832 0 16-7.168 16-16l0-672c0-8.832-7.168-16-16-16l-448 0c-8.832 0-16 7.168-16 16l0 672c0 8.832 7.168 16 16 16zM304 192l416 0 0 640-416 0 0-640zM496 928c0 17.664 14.336 32 32 32s32-14.336 32-32c0-17.664-14.336-32-32-32-17.664 0-32 14.336-32 32zM448 128l128 0c8.832 0 16-7.168 16-16s-7.168-16-16-16l-128 0c-8.832 0-16 7.168-16 16s7.168 16 16 16z\" data-v-ce68e2b2></path></svg></span></a></li></ul></section>", 1))]);
}
// CONCATENATED MODULE: ./src/components/BaseInfo.vue?vue&type=template&id=ce68e2b2&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/BaseInfo.vue?vue&type=script&lang=js
/* harmony default export */ var BaseInfovue_type_script_lang_js = ({
  name: "BaseInfo",
  props: {
    isEnglish: {
      type: Boolean
    }
  },
  data() {
    return {
      // 您可以替换为您的头像图片URL，或者上传头像到static目录
      avatarUrl: "https://nibilin33.github.io/nibl-resume/static/me.jpg" // 临时使用现有图标，建议替换为您的头像
    };
  },
  mounted() {},
  computed: {},
  methods: {
    openImg(e) {
      const {
        target
      } = e;
      if (target.currentSrc) {
        window.open(target.currentSrc);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/BaseInfo.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/BaseInfo.vue?vue&type=style&index=0&id=ce68e2b2&scoped=true&lang=css
var BaseInfovue_type_style_index_0_id_ce68e2b2_scoped_true_lang_css = __webpack_require__("2215");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/BaseInfo.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(BaseInfovue_type_script_lang_js, [['render',render],['__scopeId',"data-v-ce68e2b2"]])

/* harmony default export */ var BaseInfo = __webpack_exports__["a"] = (__exports__);

/***/ }),

/***/ "9225":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLanguage; });
const message = {
  cn: {
    message: {
      hello: "世界",
      unrealized: "未实现（-0-）",
      iotone: "",
      work: 'work',
      myname: '倪必磷',
      englishName: 'Iris',
      jobtitle: '前端架构',
      university: '闽南师范大学',
      profession: '软件工程',
      graduate: '本科 / 2017年6月毕业',
      gender: '女',
      school: 'Internships'
    }
  },
  en: {
    message: {
      hello: "hello world",
      unrealized: "unrealized（-0-）",
      iotone: "It covers all Ant offline payment devices, Alipay boxes in small and medium-sized merchants, self-ordering machines in large shopping malls, face-sweeping payment devices, and so on.",
      iottwo: "The entry point of the payment devices is to solve the payment problem, besides the payment scenario, there are also a lot of things related to the content operation",
      desc: "Brief description",
      iotjob1: "Dynamic business scenarios on everyday IoT devices",
      iotjob2: "UIPaaS for IoT marketing",
      work: 'work',
      myname: 'Bilin Ni',
      englishName: 'Iris',
      jobtitle: 'Senior Front End Engineer',
      university: 'Minnan Normal University',
      profession: 'Software Engineering Major',
      graduate: "Bachelor's Degree / Graduated June 2017",
      gender: 'Female',
      school: 'Internships'
    }
  }
};
function getLanguage() {
  const paths = location.href.split("/");
  const lastItem = paths.pop();
  const language = lastItem ? lastItem : "cn";
  return language;
}

/***/ }),

/***/ "abe2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ce46":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 3 modules
var vue_runtime_esm_bundler = __webpack_require__("7a23");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/JobItem.vue?vue&type=template&id=3f54da7f

const _hoisted_1 = {
  class: "item"
};
const _hoisted_2 = {
  class: "item-hd"
};
const _hoisted_3 = {
  class: "item-name"
};
const _hoisted_4 = {
  class: "item-time"
};
const _hoisted_5 = {
  class: "btn item-more",
  href: "",
  title: ""
};
const _hoisted_6 = {
  class: "item-project"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_runtime_esm_bundler["x" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("div", _hoisted_1, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("header", _hoisted_2, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", _hoisted_3, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])($props.company), 1), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", _hoisted_4, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])($props.time), 1), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", _hoisted_5, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])($data.tag), 1)]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", _hoisted_6, [Object(vue_runtime_esm_bundler["B" /* renderSlot */])(_ctx.$slots, "default")])]);
}
// CONCATENATED MODULE: ./src/components/JobItem.vue?vue&type=template&id=3f54da7f

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/JobItem.vue?vue&type=script&lang=js
/* harmony default export */ var JobItemvue_type_script_lang_js = ({
  name: "JobItem",
  props: {
    company: String,
    time: String,
    status: String
  },
  data() {
    const statusType = {
      school: this.$t("message.school"),
      part: 'part-time',
      remote: 'remote-work',
      open: 'open-source'
    };
    return {
      tag: this.status ? statusType[this.status] : this.$t("message.work")
    };
  }
});
// CONCATENATED MODULE: ./src/components/JobItem.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/JobItem.vue





const __exports__ = /*#__PURE__*/exportHelper_default()(JobItemvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var JobItem = __webpack_exports__["a"] = (__exports__);

/***/ }),

/***/ "f405":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.3475dd96.js.map