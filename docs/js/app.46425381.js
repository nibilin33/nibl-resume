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
/******/ 		return __webpack_require__.p + "js/" + ({"about":"about"}[chunkId]||chunkId) + "." + {"about":"fbba974e"}[chunkId] + ".js"
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Resume.vue?vue&type=template&id=78b75337

const _hoisted_1 = {
  class: "head"
};
const _hoisted_2 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
  class: "download-pdf",
  href: "https://www.sejda.com/html-to-pdf"
}, "PDF", -1);
const _hoisted_3 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
  class: "last-modified"
}, "最后更新于2023年10月", -1);
function Resumevue_type_template_id_78b75337_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = Object(vue_runtime_esm_bundler["C" /* resolveComponent */])("router-link");
  const _component_BaseInfo = Object(vue_runtime_esm_bundler["C" /* resolveComponent */])("BaseInfo");
  const _component_JobInfo = Object(vue_runtime_esm_bundler["C" /* resolveComponent */])("JobInfo");
  return Object(vue_runtime_esm_bundler["x" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("div", null, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_1, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", null, [_hoisted_2, Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_router_link, {
    to: "/en"
  }, {
    default: Object(vue_runtime_esm_bundler["I" /* withCtx */])(() => [Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("English Verison")]),
    _: 1
  })]), _hoisted_3]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("main", null, [Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_BaseInfo), Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_JobInfo)])]);
}
// CONCATENATED MODULE: ./src/components/Resume.vue?vue&type=template&id=78b75337

// EXTERNAL MODULE: ./src/components/BaseInfo.vue + 4 modules
var BaseInfo = __webpack_require__("8b3d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Job.vue?vue&type=template&id=1ef05daa

const Jobvue_type_template_id_1ef05daa_hoisted_1 = {
  class: "content-bd"
};
const Jobvue_type_template_id_1ef05daa_hoisted_2 = {
  class: "content-left"
};
const Jobvue_type_template_id_1ef05daa_hoisted_3 = {
  class: "practice"
};
const _hoisted_4 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("header", {
  class: "section-hd"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
  class: "section-title-l"
}), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h2", {
  class: "section-title"
}, "工作经历"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
  class: "section-title-r"
})], -1);
const _hoisted_5 = {
  class: "section-bd"
};
const _hoisted_6 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
  class: "project-1"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-name"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
  href: "#",
  target: "_blank",
  title: "海马体预约端"
}, " 海马体预约端 ")]), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", null, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
  class: "project-2"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "item-bd"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "div-item"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-des"
}, "【简介】"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
  class: "item-project-des"
}, " 为海马体集团旗下所有品牌提供线上预约系统，下单，在线看片，直播等服务 ")]), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "div-item"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-des"
}, "【工作方向】"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
  class: "section-content"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "海马体小程序的日常维护（多端）"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "负责团队工程效能，制定和优化研发流程规范，提升团队的开发效率"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "结合AI技术创新，根据业务需求，提供AI技术解决方案，提升产品的智能化水平")])]), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "div-item"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-des"
}, "【技术】"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
  class: "section-content"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " 小程序微应用方案"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " 多端小程序组件库，支持多品牌主题定制 "), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " 设计助理:帮助设计师们提高工作效率和质量，加快设计制图的过程，促进团队之间的协作和交流，提升整体设计水平和用户体验"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " 基于行为驱动的自动化测试方案"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " 移动设备管理平台"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " 独立的图片优化服务")])])])])])], -1);
const _hoisted_7 = {
  class: "section-bd"
};
const _hoisted_8 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
  class: "project-1"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-name"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
  href: "https://app.joinhorizons.com/login",
  target: "_blank",
  title: "Horizons"
}, " Join ")]), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", null, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
  class: "project-2"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "item-bd"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "div-item"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-des"
}, "【简介】"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
  class: "item-project-des"
}, " 提供一站式雇佣解决方案，同时负责薪酬发放的人力资源SaaS平台 ")]), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "div-item"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-des"
}, "【工作方向】"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
  class: "section-content"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " Join-UI组件库开发维护 "), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "Join 管理端&用户端重构")])]), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "div-item"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-des"
}, "【技术】"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
  class: "section-content"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "微前端集成，完成阶段性重构结果上线 "), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "i18n一站式解决方案 "), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "制定多端组件开发优化方案"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "Mock方案优化迁移")])])])])])], -1);
const _hoisted_9 = {
  class: "section-bd"
};
const _hoisted_10 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
  class: "project-1"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-name"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
  href: "https://github.com/codepod-io/codepod",
  target: "_blank",
  title: "codepod"
}, " Codepod ")])], -1);
const _hoisted_11 = {
  class: "section-bd"
};
const _hoisted_12 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
  class: "project-1"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-name"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
  href: "",
  target: "_blank",
  title: ""
}, "淘宝数字虚拟 ")]), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", null, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
  class: "project-2"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "item-bd"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "div-item"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-des"
}, "【简介】"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
  class: "item-project-des"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 分为直充"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
  class: "alias_light"
}, "（充值中心）"), /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("，非充"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
  class: "alias_light"
}, "（号卡，流量包）"), /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("，互动"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
  class: "alias_light"
}, "（薅羊毛）"), /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("，B端侧商家运营平台，内部运营平台并且通过A/B实验助力用户增长 ")])]), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "div-item"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-des"
}, "【工作方向】"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
  class: "section-content"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, " 淘宝移动端充值中心相关业务 ")])]), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "div-item"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-des"
}, "【技术】"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
  class: "section-content"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "H5全链路日志 "), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "基于边缘计算的个性化SSR ")])])])])])], -1);
const _hoisted_13 = {
  class: "project-1"
};
const _hoisted_14 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-name"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
  href: "",
  target: "_blank",
  title: ""
}, "蚂蚁IoT ")], -1);
const _hoisted_15 = {
  class: "project-2"
};
const _hoisted_16 = {
  class: "item-bd"
};
const _hoisted_17 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "div-item"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-des"
}, "【简介】"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
  class: "item-project-des"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 涵盖所有蚂蚁线下支付设备，中小商家里的支付宝盒，大型商场里的自助点餐机，扫脸付款设备等等"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("br"), /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 支付设备的切入点是为了解决支付问题，除了支付场景之外，也有很多和内容运营相关的事情 ")])], -1);
const _hoisted_18 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "div-item"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-des"
}, "【工作方向】"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
  class: "section-content"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, [/*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 日常IoT C端 动态化业务场景"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
  class: "alias_light"
}, "（营销+会员）")]), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, [/*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("IoT营销类UIPaaS"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
  class: "alias_light"
}, "（low-code）")]), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "刷脸相关的小程序应用/插件"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "多媒体：音视频通话，OCR小程序插件等")])], -1);
const _hoisted_19 = {
  class: "div-item"
};
const _hoisted_20 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-des"
}, "【技术】", -1);
const _hoisted_21 = {
  class: "section-content"
};
const _hoisted_22 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
  class: "item-project-des"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 实现了对端调试工具，可视化操作，繁琐重复的手工流程自动化"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("br"), /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 提供了桌面版本"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
  class: "alias_light"
}, "（用python开发）"), /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])("和 vscode插件版本 ")], -1);
const _hoisted_23 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, [/*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" IoT前端优化"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("span", {
  class: "alias_light"
}, "（离线包->内部自研跨端容器）"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
  class: "item-project-des"
}, " 基于IoT内部的自研轻量跨端容器，主导方案框架设计，封装canvas渲染框架，一套代码构建多端产物，自动H5降级 ")], -1);
const _hoisted_24 = {
  class: "content-right"
};
const _hoisted_25 = {
  class: "practice"
};
const _hoisted_26 = {
  class: "section-bd"
};
const _hoisted_27 = /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
  class: "project-1"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-name"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("a", {
  href: "",
  target: "_blank",
  title: ""
}, "UC")]), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", null, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", {
  class: "project-2"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "item-bd"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "div-item"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-des"
}, "【简介】"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
  class: "item-project-des"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 企业统一通讯的解决方案，主要有设备管理，会议预约，PBX，短信网关，话题等功能"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("br")])]), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "div-item"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-des"
}, "【主要业绩】"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("p", {
  class: "item-project-des"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
  class: "section-content"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "主导项目重构和输出规范"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "多彩、自动化测试解决方案"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "利用Electron作为模拟工具，优化开发链，提高效率")])])]), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", {
  class: "div-item"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h3", {
  class: "project-des"
}, "【技术】"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", {
  class: "section-content"
}, [/*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, [/*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 性能优化"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("br"), /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 1. 会议预约组件：从打开奔溃到秒开"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("br"), /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 2. 组织架构树:4+s -> 1+s"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("br"), /*#__PURE__*/Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 3. 内嵌webview加载慢: 离线资源包"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("br")]), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "内存泄漏 : 去循环引用，主动触发GC"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "高并发NG502: 压测分析，参数调优"), /*#__PURE__*/Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, "H5混合开发跨部门联调效率低: electron 做模拟工具")])])])])])], -1);
const _hoisted_28 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createStaticVNode */])("<section class=\"skill\"><header class=\"section-hd\"><span class=\"section-title-l\"></span><h2 class=\"section-title\">技能</h2><span class=\"section-title-r\"></span></header><div class=\"section-bd\"><div class=\"item\"><div class=\"item-bd\"><ul class=\"section-content\"><li>Javascript,Typescript,Html5,CSS,Actionscript</li><li>React,Vue,小程序,Uniapp,Tailwindcss</li><li>Webpack,Rollup,Vite</li><li>Python,Node,Shell,Serverless</li></ul></div></div></div></section><section class=\"prize\"><header class=\"section-hd\"><span class=\"section-title-l\"></span><h2 class=\"section-title\">奖项/证书</h2><span class=\"section-title-r\"></span></header><div class=\"section-bd\"><div class=\"item\"><div class=\"item-bd\"><ul class=\"section-content\"><li>获得过国家奖学金</li><li>多次获院一等奖学金</li><li>专业排名均在前三</li><li>CET6</li><li>英语水平良好,雅思成绩7.0（2022.10的成绩）</li></ul></div></div></div></section><section class=\"thanks\"><header class=\"section-hd\"><span class=\"section-title-l\"></span><h2 class=\"section-title\">致谢</h2><span class=\"section-title-r\"></span></header><div class=\"section-bd\"><div class=\"item\"><h2 style=\"font-weight:bold;line-height:24px;margin-top:10px;\"> 感谢在百忙之中阅读这份履历 </h2></div></div></section>", 3);
function Jobvue_type_template_id_1ef05daa_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_JobItem = Object(vue_runtime_esm_bundler["C" /* resolveComponent */])("JobItem");
  return Object(vue_runtime_esm_bundler["x" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("div", Jobvue_type_template_id_1ef05daa_hoisted_1, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", Jobvue_type_template_id_1ef05daa_hoisted_2, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("section", Jobvue_type_template_id_1ef05daa_hoisted_3, [_hoisted_4, Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_5, [Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_JobItem, {
    company: "缦图集团",
    time: "2023.3 - now"
  }, {
    default: Object(vue_runtime_esm_bundler["I" /* withCtx */])(() => [_hoisted_6]),
    _: 1
  })]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_7, [Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_JobItem, {
    company: "Horizons",
    status: "remote",
    time: "2022.11 - 2023.3"
  }, {
    default: Object(vue_runtime_esm_bundler["I" /* withCtx */])(() => [_hoisted_8]),
    _: 1
  })]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_9, [Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_JobItem, {
    company: "开源社区",
    status: "open"
  }, {
    default: Object(vue_runtime_esm_bundler["I" /* withCtx */])(() => [_hoisted_10]),
    _: 1
  })]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_11, [Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_JobItem, {
    company: "阿里巴巴集团",
    time: "2020.06 至 2022.05"
  }, {
    default: Object(vue_runtime_esm_bundler["I" /* withCtx */])(() => [_hoisted_12, Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", _hoisted_13, [_hoisted_14, Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ol", null, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", _hoisted_15, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_16, [_hoisted_17, _hoisted_18, Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_19, [_hoisted_20, Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", _hoisted_21, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, [Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(" 工程效能 "), _hoisted_22, Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("img", {
      style: {
        "width": "200px"
      },
      onClick: _cache[0] || (_cache[0] = (...args) => $options.openImg && $options.openImg(...args)),
      src: "https://nibilin33.github.io/nibl-resume/static/lique.webp"
    })]), _hoisted_23])])])])])])]),
    _: 1
  })])])]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_24, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("section", _hoisted_25, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_26, [Object(vue_runtime_esm_bundler["k" /* createVNode */])(_component_JobItem, {
    company: "厦门亿联网络技术股份有限公司",
    time: "2016.12.16 至 2020.2.21"
  }, {
    default: Object(vue_runtime_esm_bundler["I" /* withCtx */])(() => [_hoisted_27]),
    _: 1
  })])]), _hoisted_28])]);
}
// CONCATENATED MODULE: ./src/components/Job.vue?vue&type=template&id=1ef05daa

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





const Job_exports_ = /*#__PURE__*/exportHelper_default()(Jobvue_type_script_lang_js, [['render',Jobvue_type_template_id_1ef05daa_render]])

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





const Resume_exports_ = /*#__PURE__*/exportHelper_default()(Resumevue_type_script_lang_js, [['render',Resumevue_type_template_id_78b75337_render]])

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/BaseInfo.vue?vue&type=template&id=eceeb31c

const _hoisted_1 = {
  class: "content-hd"
};
const _hoisted_2 = {
  class: "title"
};
const _hoisted_3 = {
  class: "name"
};
const _hoisted_4 = {
  class: "job"
};
const _hoisted_5 = {
  class: "info"
};
const _hoisted_6 = {
  key: 0
};
const _hoisted_7 = /*#__PURE__*/Object(vue_runtime_esm_bundler["i" /* createStaticVNode */])("<section class=\"contact\"><ul><li><a href=\"https://nibilin33.github.io/frontend-blog/\" target=\"_blank\"><span class=\"contact-link\">Blog</span><span class=\"iconfont\"><svg width=\"16px\" height=\"16px\" viewBox=\"0 0 1024 1024\"><path d=\"M512 42.581333l-469.333333 469.333333 31.146667 31.146667L170.666667 446.250667l0 438.186667 682.666667 0L853.333333 446.208l96.853333 96.896 31.146667-31.146667L512 42.581333zM426.666667 841.770667l0-298.666667 170.666667 0 0 298.666667L426.666667 841.770667zM810.666667 841.770667l-170.666667 0 0-341.333333L384 500.437333l0 341.333333L213.333333 841.770667 213.333333 403.584l298.666667-298.666667 298.666667 298.666667L810.666667 841.770667z\"></path></svg></span></a></li><li><a href=\"https://github.com/nibilin33\" target=\"_blank\"><span class=\"contact-link\">Github - nibilin33</span><span class=\"iconfont\"><svg width=\"16px\" height=\"16px\" viewBox=\"0 0 1024 1024\"><path d=\"M941.714 512q0 143.433-83.712 258.011t-216.283 158.574q-15.433 2.853-22.565-3.986t-7.131-17.152v-120.576q0-55.442-29.696-81.152 32.585-3.438 58.587-10.277t53.723-22.272 46.299-37.998 30.281-60.014 11.703-86.016q0-69.157-45.129-117.723 21.138-52.005-4.571-116.553-16.018-5.157-46.299 6.29t-52.553 25.161l-21.723 13.714q-53.138-14.848-109.714-14.848t-109.714 14.848q-9.143-6.29-24.283-15.433t-47.726-22.016-49.152-7.717q-25.161 64.585-3.986 116.553-45.129 48.567-45.129 117.723 0 48.567 11.703 85.723t29.989 60.014 46.007 38.29 53.723 22.272 58.587 10.277q-22.857 20.553-28.014 58.843-11.995 5.705-25.71 8.558t-32.585 2.853-37.413-12.288-31.707-35.73q-10.862-18.286-27.721-29.696t-28.27-13.714l-11.447-1.719q-11.995 0-16.567 2.56t-2.853 6.583 5.157 8.009 7.424 6.839l3.986 2.853q12.581 5.705 24.869 21.723t17.993 29.147l5.705 13.129q7.424 21.723 25.161 35.145t38.29 17.152 39.717 3.986 31.707-2.011l13.129-2.304q0 21.723 0.293 50.871t0.293 30.866q0 10.277-7.424 17.152t-22.857 3.986q-132.571-43.995-216.283-158.574t-83.712-258.011q0-119.442 58.843-220.27t159.707-159.707 220.27-58.843 220.27 58.843 159.707 159.707 58.843 220.27z\"></path></svg></span></a></li><li><a href=\"mailto:nibilin33@gmail.com\" target=\"_blank\"><span class=\"contact-link\">nibilin33@gmail.com</span><span class=\"iconfont\"><svg width=\"16px\" height=\"16px\" viewBox=\"0 0 1024 1024\"><path d=\"M903.808 239.04l-818.304 0 0 545.92 852.992 0 0-545.92-34.688 0zM869.664 273.152l-329.536 329.536c-15.04 15.04-41.248 15.04-56.288 0l-329.6-329.536 715.392 0zM119.616 286.752l221.536 221.504-221.536 221.536 0-443.072zM146.848 750.848l218.464-218.432 94.432 94.4c13.952 13.952 32.512 21.664 52.256 21.664s38.304-7.712 52.256-21.664l94.432-94.432 218.432 218.432-730.304 0zM904.384 729.824l-221.536-221.568 221.536-221.568 0 443.136z\"></path></svg></span></a></li><li><a href=\"tel:13960845178\" target=\"_blank\"><span class=\"contact-link\">13960845178</span><span class=\"iconfont\"><svg width=\"16px\" height=\"16px\" viewBox=\"0 0 1024 1024\"><path d=\"M256 1024l512 0c26.464 0 48-21.536 48-48l0-928c0-26.464-21.536-48-48-48l-512 0c-26.464 0-48 21.536-48 48l0 928c0 26.464 21.536 48 48 48zM240 48c0-8.832 7.168-16 16-16l512 0c8.832 0 16 7.168 16 16l0 928c0 8.832-7.168 16-16 16l-512 0c-8.832 0-16-7.168-16-16l0-928zM288 864l448 0c8.832 0 16-7.168 16-16l0-672c0-8.832-7.168-16-16-16l-448 0c-8.832 0-16 7.168-16 16l0 672c0 8.832 7.168 16 16 16zM304 192l416 0 0 640-416 0 0-640zM496 928c0 17.664 14.336 32 32 32s32-14.336 32-32c0-17.664-14.336-32-32-32-17.664 0-32 14.336-32 32zM448 128l128 0c8.832 0 16-7.168 16-16s-7.168-16-16-16l-128 0c-8.832 0-16 7.168-16 16s7.168 16 16 16z\"></path></svg></span></a></li></ul></section>", 1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_runtime_esm_bundler["x" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("header", _hoisted_1, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("section", _hoisted_2, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_3, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h1", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(_ctx.$t('message.myname')), 1)]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("div", _hoisted_4, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("h2", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(_ctx.$t('message.jobtitle')), 1)])]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("section", _hoisted_5, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("ul", null, [Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, [Object(vue_runtime_esm_bundler["j" /* createTextVNode */])(Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(_ctx.$t('message.gender')) + " / 1994.04 / ", 1), $props.isEnglish ? (Object(vue_runtime_esm_bundler["x" /* openBlock */])(), Object(vue_runtime_esm_bundler["g" /* createElementBlock */])("span", _hoisted_6, "Chinese citizen")) : Object(vue_runtime_esm_bundler["f" /* createCommentVNode */])("", true)]), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(_ctx.$t('message.university')), 1), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(_ctx.$t('message.profession')), 1), Object(vue_runtime_esm_bundler["h" /* createElementVNode */])("li", null, Object(vue_runtime_esm_bundler["F" /* toDisplayString */])(_ctx.$t('message.graduate')), 1)])]), _hoisted_7]);
}
// CONCATENATED MODULE: ./src/components/BaseInfo.vue?vue&type=template&id=eceeb31c

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/BaseInfo.vue?vue&type=script&lang=js
/* harmony default export */ var BaseInfovue_type_script_lang_js = ({
  name: "BaseInfo",
  props: {
    isEnglish: {
      type: Boolean
    }
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {}
});
// CONCATENATED MODULE: ./src/components/BaseInfo.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/BaseInfo.vue





const __exports__ = /*#__PURE__*/exportHelper_default()(BaseInfovue_type_script_lang_js, [['render',render]])

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
      jobtitle: '资深前端工程师',
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

/***/ })

/******/ });
//# sourceMappingURL=app.46425381.js.map