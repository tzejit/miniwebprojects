/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n:root {\r\n  --background-colour: #252525;\r\n  --box-colour: #424242;\r\n  --hover-colour: #616161;\r\n  --visible-colour: #515151;\r\n  --visible-font:#b9b4b4;\r\n  --active-colour: #ff9898;\r\n  --active-font: #3a3a3a;\r\n  --font-colour:#d8d2d2;\r\n}\r\n\r\n\r\n.modal-container {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  padding-top: 25vh; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto;\r\n  background-color: rgb(0,0,0);\r\n  background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n.modal-content {\r\n  background-color: var(--hover-colour);\r\n  margin: auto;\r\n  padding: 1em;\r\n  width: 80%;\r\n}\r\n\r\n.single-task-view {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid var(--hover-colour);\r\n}\r\n\r\n.single-task-view.visible > .desc-task-view {\r\n  background-color: var(--visible-colour);\r\n  color: var(--visible-font);\r\n  padding: 1em;\r\n}\r\n\r\n.done-container {\r\n  opacity: 0.5;\r\n}\r\n\r\n.header-task-view {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 1em;\r\n}\r\n\r\n.single-task-view:hover {\r\n  cursor: pointer;\r\n  box-shadow: 0.1em 0.1em;\r\n  transform: scale(1.03, 1.03);\r\n  transform-origin: 25%;\r\n  transition: transform 0.4s;\r\n}\r\n\r\nbody {\r\n  background-color: var(--background-colour);\r\n  color: var(--font-colour);\r\n}\r\n\r\n.body-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 2em;\r\n  background-color: var(--background-colour);\r\n  color: var(--font-colour);\r\n}\r\n\r\n.main-container {\r\n  flex: 7 7 0;\r\n  padding: 2em;\r\n  color: var(--font-colour);\r\n}\r\n\r\n.project-bar {\r\n  color: var(--font-colour);\r\n  flex: 2 2 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n  padding: 1em;\r\n}\r\n\r\n.project-item{\r\n  padding: 1em 0.5em;\r\n  padding-left: 2em;\r\n  text-align: left;\r\n  flex: 1;\r\n  background-color: inherit;\r\n}\r\n\r\n.remove-project{\r\n  background-color: inherit;\r\n  padding-right: 0.5em;\r\n  align-self: center;\r\n  color: var(--font-colour);\r\n}\r\n\r\n.remove-project:hover {\r\n  color: var(--box-colour);\r\n}\r\n\r\n.project-wrapper:hover {\r\n  cursor: pointer;\r\n  background-color: var(--active-colour);\r\n  color: var(--active-font);\r\n}\r\n\r\n.project-wrapper{\r\n  display: flex;\r\n  flex: 1;\r\n  background-color: var(--box-colour);\r\n}\r\n\r\n.active.project-wrapper {\r\n  background-color: var(--active-colour);\r\n  color: var(--active-font);\r\n}\r\n\r\n.new-task {\r\n  color: var(--font-colour);\r\n  display: flex;\r\n  justify-content: stretch;\r\n}\r\n\r\n.add-button {\r\n  flex: 1;\r\n  text-align: left;\r\n  padding: 1em;\r\n  background-color: var(--box-colour);\r\n  border: none;\r\n  cursor: pointer;\r\n  color: var(--font-colour);\r\n  width: 100%;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  border: none;\r\n  background-color: var(--box-colour);\r\n  padding: 0.2em 2em;\r\n  color: var(--font-colour);\r\n  height: 3em;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: var(--hover-colour);\r\n}\r\n\r\n.add-button:hover {\r\n  background-color: var(--hover-colour);\r\n}\r\n\r\ninput {\r\n  background-color: var(--box-colour);\r\n  border: 1px solid var(--hover-colour);\r\n  margin-right: 0.4em;\r\n  color: var(--font-colour);\r\n  height: 3em;\r\n  flex: 1;\r\n  line-height: 10em;\r\n}\r\n\r\n.project-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input-container {\r\n  flex: 1 1 0;\r\n  width: inherit;\r\n  display: flex;\r\n  justify-content: stretch;\r\n}\r\n\r\n.desc-task-view {\r\n  max-height: 0px;\r\n  overflow: hidden;\r\n  transition: max-height 0.2s ease-out;\r\n}\r\n\r\n.list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.1em;\r\n}\r\n\r\n.date-label, .title-label {\r\n  flex: 1 1 0;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.toggle-status {\r\n  flex: 0.1;\r\n  max-height: 2em;\r\n  align-self: center;\r\n  background-color: #252525;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;EACE,4BAA4B;EAC5B,qBAAqB;EACrB,uBAAuB;EACvB,yBAAyB;EACzB,sBAAsB;EACtB,wBAAwB;EACxB,sBAAsB;EACtB,qBAAqB;AACvB;;;AAGA;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,iBAAiB;EACjB,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,4BAA4B;EAC5B,iCAAiC;AACnC;;AAEA;EACE,qCAAqC;EACrC,YAAY;EACZ,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qCAAqC;AACvC;;AAEA;EACE,uCAAuC;EACvC,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;EACE,0CAA0C;EAC1C,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,QAAQ;EACR,0CAA0C;EAC1C,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,OAAO;EACP,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,oBAAoB;EACpB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,sCAAsC;EACtC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,OAAO;EACP,mCAAmC;AACrC;;AAEA;EACE,sCAAsC;EACtC,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,OAAO;EACP,gBAAgB;EAChB,YAAY;EACZ,mCAAmC;EACnC,YAAY;EACZ,eAAe;EACf,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,mCAAmC;EACnC,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,mCAAmC;EACnC,qCAAqC;EACrC,mBAAmB;EACnB,yBAAyB;EACzB,WAAW;EACX,OAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,kBAAkB;EAClB,yBAAyB;AAC3B","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n:root {\r\n  --background-colour: #252525;\r\n  --box-colour: #424242;\r\n  --hover-colour: #616161;\r\n  --visible-colour: #515151;\r\n  --visible-font:#b9b4b4;\r\n  --active-colour: #ff9898;\r\n  --active-font: #3a3a3a;\r\n  --font-colour:#d8d2d2;\r\n}\r\n\r\n\r\n.modal-container {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  padding-top: 25vh; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto;\r\n  background-color: rgb(0,0,0);\r\n  background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n.modal-content {\r\n  background-color: var(--hover-colour);\r\n  margin: auto;\r\n  padding: 1em;\r\n  width: 80%;\r\n}\r\n\r\n.single-task-view {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid var(--hover-colour);\r\n}\r\n\r\n.single-task-view.visible > .desc-task-view {\r\n  background-color: var(--visible-colour);\r\n  color: var(--visible-font);\r\n  padding: 1em;\r\n}\r\n\r\n.done-container {\r\n  opacity: 0.5;\r\n}\r\n\r\n.header-task-view {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 1em;\r\n}\r\n\r\n.single-task-view:hover {\r\n  cursor: pointer;\r\n  box-shadow: 0.1em 0.1em;\r\n  transform: scale(1.03, 1.03);\r\n  transform-origin: 25%;\r\n  transition: transform 0.4s;\r\n}\r\n\r\nbody {\r\n  background-color: var(--background-colour);\r\n  color: var(--font-colour);\r\n}\r\n\r\n.body-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 2em;\r\n  background-color: var(--background-colour);\r\n  color: var(--font-colour);\r\n}\r\n\r\n.main-container {\r\n  flex: 7 7 0;\r\n  padding: 2em;\r\n  color: var(--font-colour);\r\n}\r\n\r\n.project-bar {\r\n  color: var(--font-colour);\r\n  flex: 2 2 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n  padding: 1em;\r\n}\r\n\r\n.project-item{\r\n  padding: 1em 0.5em;\r\n  padding-left: 2em;\r\n  text-align: left;\r\n  flex: 1;\r\n  background-color: inherit;\r\n}\r\n\r\n.remove-project{\r\n  background-color: inherit;\r\n  padding-right: 0.5em;\r\n  align-self: center;\r\n  color: var(--font-colour);\r\n}\r\n\r\n.remove-project:hover {\r\n  color: var(--box-colour);\r\n}\r\n\r\n.project-wrapper:hover {\r\n  cursor: pointer;\r\n  background-color: var(--active-colour);\r\n  color: var(--active-font);\r\n}\r\n\r\n.project-wrapper{\r\n  display: flex;\r\n  flex: 1;\r\n  background-color: var(--box-colour);\r\n}\r\n\r\n.active.project-wrapper {\r\n  background-color: var(--active-colour);\r\n  color: var(--active-font);\r\n}\r\n\r\n.new-task {\r\n  color: var(--font-colour);\r\n  display: flex;\r\n  justify-content: stretch;\r\n}\r\n\r\n.add-button {\r\n  flex: 1;\r\n  text-align: left;\r\n  padding: 1em;\r\n  background-color: var(--box-colour);\r\n  border: none;\r\n  cursor: pointer;\r\n  color: var(--font-colour);\r\n  width: 100%;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  border: none;\r\n  background-color: var(--box-colour);\r\n  padding: 0.2em 2em;\r\n  color: var(--font-colour);\r\n  height: 3em;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: var(--hover-colour);\r\n}\r\n\r\n.add-button:hover {\r\n  background-color: var(--hover-colour);\r\n}\r\n\r\ninput {\r\n  background-color: var(--box-colour);\r\n  border: 1px solid var(--hover-colour);\r\n  margin-right: 0.4em;\r\n  color: var(--font-colour);\r\n  height: 3em;\r\n  flex: 1;\r\n  line-height: 10em;\r\n}\r\n\r\n.project-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input-container {\r\n  flex: 1 1 0;\r\n  width: inherit;\r\n  display: flex;\r\n  justify-content: stretch;\r\n}\r\n\r\n.desc-task-view {\r\n  max-height: 0px;\r\n  overflow: hidden;\r\n  transition: max-height 0.2s ease-out;\r\n}\r\n\r\n.list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.1em;\r\n}\r\n\r\n.date-label, .title-label {\r\n  flex: 1 1 0;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.toggle-status {\r\n  flex: 0.1;\r\n  max-height: 2em;\r\n  align-self: center;\r\n  background-color: #252525;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
const Modal = () => {

  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContainer.appendChild(modalContent);
  document.body.appendChild(modalContainer);

  window.onclick = (event) => {
    if (event.target == modalContainer) {
      hideModal();
    }
  }

  const setRepeatTaskModal = (title, desc) => {
    modalContent.innerText = `Task: ${title}\n${desc}\nhas already been entered`;
  }

  const setRepeatProjectModal = (title) => {
    modalContent.innerText = `Project: ${title}\nhas already been entered`;
  }

  const setEmptyModal = (thing) => {
    modalContent.innerText = `${thing} cannot be empty!`;
  }

  const showModal = () => {
    modalContainer.style.display = "block";
  }

  const hideModal = () => {
    modalContainer.style.display = "none";
  }

  return {setRepeatTaskModal, setRepeatProjectModal, setEmptyModal, showModal};
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


const Project = (t) => {
  let projTitle = t;
  let todolist = JSON.parse(window.localStorage.getItem(projTitle)) == null ? {} : JSON.parse(window.localStorage.getItem(projTitle));
  window.localStorage.setItem(projTitle, JSON.stringify(todolist));

  const addTodo = (title, desc, by) => {
    let task = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.Deadline)(title, desc, by);
    if (!(task.getStringRep() in todolist)) {
      todolist[task.getStringRep()] = task.toObj();
      saveChange(projTitle);
      return true;
    }
    return false;
  }

  const checkValidInput = (title, desc, by) => {
    if (title == "") {
      return false;
    }
    return true;
  }

  const removeTodo = (title, desc, by) => {
    let task = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.Deadline)(title, desc, by);
    delete todolist[task.getStringRep()];
    saveChange(projTitle);
  }

  const toggleTodo = (title, desc, by, bool) => {
    let task = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.Deadline)(title, desc, by, bool);
    todolist[task.getStringRep()] = task.toObj();
    saveChange(projTitle);
  }

  const saveChange = (title) => {
    window.localStorage.setItem(title, JSON.stringify(todolist));
  }

  const getContents = () => {
    return todolist;
  }

  return {addTodo, removeTodo, getContents, checkValidInput, toggleTodo};
}



/***/ }),

/***/ "./src/projectbar.js":
/*!***************************!*\
  !*** ./src/projectbar.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectBar": () => (/* binding */ ProjectBar)
/* harmony export */ });
/* harmony import */ var _projectstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectstorage */ "./src/projectstorage.js");
/* harmony import */ var _projectloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectloader */ "./src/projectloader.js");



const ProjectBar = (modal, mainContainer) => {
  
  //initialization
  const storage = (0,_projectstorage__WEBPACK_IMPORTED_MODULE_0__.ProjectStorage)();
  const NUMBERINPUT = "%NUM%";
  const SPACEINPUT = "%SPACE%"
  let currentActive = storage.getProjectHome();
  const projectBar  = document.createElement("div");
  projectBar.classList.add("project-bar");
  (0,_projectloader__WEBPACK_IMPORTED_MODULE_1__.ProjectLoader)(currentActive, mainContainer, modal).generateContents();

  const generateProjects = () => {
    projectBar.textContent = "";
    const projectList = document.createElement("div");
    projectList.classList.add("project-list");
    for (let i in storage.getProjects()) {
      const projectWrapper = document.createElement("div");
      projectWrapper.classList.add("project-wrapper");
      const projectItem = document.createElement("div");
      projectItem.classList.add("project-item");
      projectItem.innerText = i.replaceAll(SPACEINPUT, " ").replaceAll(NUMBERINPUT,"");
      projectWrapper.dataset.name = i;
      projectWrapper.classList.add(i);
      if (i == currentActive) {
        projectWrapper.classList.toggle("active");
      }
      projectItem.addEventListener("click", ()=> {
        (0,_projectloader__WEBPACK_IMPORTED_MODULE_1__.ProjectLoader)(i, mainContainer, modal).generateContents();
        document.querySelector(`.${currentActive}`).classList.toggle("active");
        currentActive = i;
        document.querySelector(`.${currentActive}`).classList.toggle("active");
      })
      if (i == storage.getProjectHome()) {
        projectWrapper.append(projectItem);
      } else {
        projectWrapper.append(projectItem, createProjectRemoveButton(projectWrapper));
      }
      projectList.append(projectWrapper);
    }
    projectBar.append(projectList, createProjectButton());
    (0,_projectloader__WEBPACK_IMPORTED_MODULE_1__.ProjectLoader)(currentActive, mainContainer, modal).generateContents();
    return projectBar;
  }

  const createProjectRemoveButton =(wrapper) => {
    const projectRemoveButton = document.createElement("span");
    projectRemoveButton.innerHTML = "X";
    projectRemoveButton.classList.add("remove-project");
    projectRemoveButton.addEventListener("click", () => {
      wrapper.remove();
      storage.removeProject(wrapper.dataset.name);
      if (currentActive == wrapper.dataset.name) {
        currentActive = storage.getProjectHome();
        generateProjects();
      }
    })
    return projectRemoveButton;
  }

  const createProjectButton = () => {
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("new-project");
    const but = document.createElement("button");
    but.innerText = "Add a new project";
    but.classList.add("add-button");

    but.addEventListener("click", () => {
      inputContainer.innerText = "";
      inputContainer.appendChild(createProjectInput());
    })
    inputContainer.appendChild(but);
    return inputContainer;
  }

  const createProjectInput = () => {
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");
    const title = document.createElement("input");
    title.classList.add("project-name");
    title.placeholder = "Project name"
    const submit = document.createElement("button");
    submit.innerText = "Add";
    submit.addEventListener("click", () => {
      saveProject(inputContainer)
      inputContainer.remove();
      currentActive = inputContainer.firstChild.value.trim();
      generateProjects();
    });
    inputContainer.append(title, submit);
    return inputContainer;
  }

  const saveProject = (input) => {
    let title = input.firstChild.value.trim().replace(/\s/g, SPACEINPUT);//.replace(/(\d+)/, NUMBERINPUT + "$1" + NUMBERINPUT )
    if (title.match(/\d/)) {
      title = title + NUMBERINPUT;
    }
    if (!(storage.validTitle(title))) {
      modal.setEmptyModal("Project title");
      modal.showModal();
      return
    }
    if (!(storage.addProject(title))) {
      modal.setRepeatProjectModal(title);
      modal.showModal();
      return
    }
  }

  return { generateProjects, createProjectInput};
}



/***/ }),

/***/ "./src/projectloader.js":
/*!******************************!*\
  !*** ./src/projectloader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectLoader": () => (/* binding */ ProjectLoader)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// Generates project items to be placed in DOM




const ProjectLoader = (title, mainContainer, modal) => {

  let project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)(title);
  const listContainer = document.createElement("div");
  listContainer.classList.add("list-container");
  const doneContainer = document.createElement("div");
  doneContainer.classList.add("done-container");
  mainContainer.innerText = "";
  mainContainer.append(listContainer, doneContainer);

  const generateContents = () => {
    listContainer.textContent = "";
    doneContainer.textContent = "";
    let c = project.getContents();
    for (let i in c) {
      if (!c[i]["done"]) {
        listContainer.appendChild(createDeadlineView(c[i]));
      } else {
        doneContainer.appendChild(createDeadlineView(c[i]));
      }
    }
    listContainer.appendChild(createDeadlineButton());
  }

  const createDeadlineButton = () => {
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("new-task");
    const but = document.createElement("button");
    but.innerText = "Add a new task";
    but.classList.add("add-button");

    but.addEventListener("click", () => {
      inputContainer.innerText = "";
      inputContainer.appendChild(createDeadlineInput());
    })
    inputContainer.appendChild(but);
    return inputContainer;
  }

  const createDeadlineInput = () => {
    const inputContainer = document.createElement("div");
    const title = document.createElement("input");
    title.classList.add("title");
    title.placeholder = "Title"
    const desc = document.createElement("input");
    desc.classList.add("desc");
    desc.placeholder = "Description"
    const date = document.createElement("input");
    date.type = "date";
    date.classList.add("date")
    const submit = document.createElement("button");
    submit.innerText = "Add";
    submit.addEventListener("click", () => {
      saveDeadline(inputContainer);
      inputContainer.remove();
      generateContents();
    });
    inputContainer.append(title, desc, date, submit);
    return inputContainer;
  }

  // takes the input wrapper
  const saveDeadline = (container) => {
    const c = container.children;
    let title, desc, date = null;
    for (let i = 0; i < c.length; i++) {
      if (c[i].classList.contains("title")) {
        title = c[i].value.trim();
      } else if (c[i].classList.contains("desc")) {
        desc = c[i].value.trim();
      } else if (c[i].classList.contains("date")) {
        date = c[i].value.trim();
      }
    }
    if (!(project.checkValidInput(title, desc, date))) {
      modal.setEmptyModal("Task title");
      modal.showModal();
      return
    }
    if (!(project.addTodo(title, desc, date))) {
      modal.setRepeatTaskModal(title, desc, date);
      modal.showModal();
      return
    };
  }

  const createDeadlineView = (obj) => {
    const singleTaskView = document.createElement("div");
    singleTaskView.classList.add("single-task-view");

    const headerTaskView = document.createElement("div");
    headerTaskView.classList.add("header-task-view");

    const done = document.createElement("input");
    done.type = "checkbox";
    done.classList.add("toggle-status");
    done.checked = obj["done"];
    if (obj["done"]) {
      singleTaskView.classList.add("done");
    }
    const title = document.createElement("div");
    title.innerText = obj["title"];
    title.classList.add("title-label");
    const desc = document.createElement("div");
    desc.innerText = obj["desc"];
    desc.classList.add("desc-task-view");
    const date = document.createElement("div");
    date.innerText = obj["by"] == "" ? "": `Due by: ${obj["by"]}`;
    date.classList.add("date-label");

    const del = document.createElement("button");
    del.innerText = "delete";
    del.addEventListener("click", () => {
      singleTaskView.remove();
      project.removeTodo(obj["title"], obj["desc"], obj["by"]);
    })

    done.addEventListener("change", (e) => {
      if (e.currentTarget.checked) {
        project.toggleTodo(obj["title"], obj["desc"], obj["by"], true);
      } else {
        project.toggleTodo(obj["title"], obj["desc"], obj["by"], false);
      }
      generateContents();
    })

    singleTaskView.addEventListener("click", (e) => {
      let em = parseFloat(getComputedStyle(desc.parentElement).fontSize);
      let scrHeight = desc.scrollHeight/em + 2 + "em"
      if (desc.innerText != "" && !e.target.classList.contains("toggle-status")) {
        if (window.getComputedStyle(desc).maxHeight != "0px") {
          desc.style.maxHeight = null; 
        } else { 
          desc.style.maxHeight = scrHeight;
        }
        singleTaskView.classList.toggle("visible");
      }
    })

    headerTaskView.append(done, title, date, del);
    singleTaskView.append(headerTaskView, desc);
    return singleTaskView;
  }

  return {generateContents};
}



/***/ }),

/***/ "./src/projectstorage.js":
/*!*******************************!*\
  !*** ./src/projectstorage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectStorage": () => (/* binding */ ProjectStorage)
/* harmony export */ });
const ProjectStorage = () => {
  const PROJECTLISTKEY = "project-keys";
  const PROJECTHOME = "home";
  let projects = window.localStorage.getItem(PROJECTLISTKEY) == null ? {home: PROJECTHOME} : JSON.parse(window.localStorage.getItem(PROJECTLISTKEY));
  window.localStorage.setItem(PROJECTLISTKEY, JSON.stringify(projects));

  const getProjects = () => {
    return projects;
  }

  const addProject = (name) => {
    if (!(name in projects)) {
      projects[name] = name;
      saveChange();
      return true;
    }
    return false;
  }

  const removeProject = (name) => {
    delete projects[name];
    saveChange();
    localStorage.removeItem(name);
  }

  const validTitle = (name) => {
    if (name == "") {
      return false;
    }
    return true;
  }

  const saveChange = () => {
    window.localStorage.setItem(PROJECTLISTKEY, JSON.stringify(projects));
  }

  const getProjectHome = () => {
    return PROJECTHOME;
  }

  return {getProjects, addProject, getProjectHome, validTitle, removeProject};

}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Event": () => (/* binding */ Event),
/* harmony export */   "Deadline": () => (/* binding */ Deadline)
/* harmony export */ });
const Todo = (t, des, dat, stat = false) => {
  let title = t;
  let desc = des;
  let date = dat;
  let done = stat;

  const getTitle = () => {
    return title;
  }

  const getDesc = () => {
    return desc !== null ? desc : "";
  }
  
  const getDate = () => {
    return date !== null ? date : "";
  }

  const getStatus = () => {
    return done;
  }

  return {getTitle, getDesc, getDate, getStatus};
};

const Event = (title, desc = null, at = null) => {

  const prototype = Todo(title, desc, at);
  const getDateType = () => {
    return "start";
  }

  const getStringRep = () => {
    return `${title}: ${desc} at ${at}`;
  }

  return Object.assign({}, prototype, {getDateType, getStringRep});
}

const Deadline = (title, desc = null, by = null, done = false) => {

  const prototype = Todo(title, desc, by, done);
  const getDateType = () => {
    return "end";
  }

  const getStringRep = () => {
    return `${title}: ${desc} by ${by}`;
  }

  const toObj = () => {
    return {title, desc, by, done}
  }

  const toggleStatus = () => {
    if (done) {
      done = false;
    } else {
      done = true;
    }
  }

  return Object.assign({}, prototype, {getDateType, getStringRep, toObj, toggleStatus});
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectbar */ "./src/projectbar.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// Generates items to be placed in DOM




const header = document.createElement("h1");
header.textContent = "TodoList";

const modal = (0,_modal__WEBPACK_IMPORTED_MODULE_1__.Modal)();

const bodyContainer = document.createElement("div");
bodyContainer.classList.add("body-container");

const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

const projectBar = (0,_projectbar__WEBPACK_IMPORTED_MODULE_0__.ProjectBar)(modal, mainContainer).generateProjects();

bodyContainer.append(projectBar, mainContainer);
document.body.append(header, bodyContainer);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxVQUFVO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSxtQkFBbUI7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTSxJQUFJLE1BQU0sS0FBSyxHQUFHO0FBQ3RDO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYywwQkFBMEI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU0sSUFBSSxNQUFNLEtBQUssR0FBRztBQUN0QztBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixjQUFjLCtDQUErQztBQUN0RjtBQUNBOzs7Ozs7O1VDaEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQzBDO0FBQ1Y7QUFDWDtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkNBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdURBQVU7QUFDN0I7QUFDQTtBQUNBLDRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0YmFyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3Rsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdHN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZC1jb2xvdXI6ICMyNTI1MjU7XFxyXFxuICAtLWJveC1jb2xvdXI6ICM0MjQyNDI7XFxyXFxuICAtLWhvdmVyLWNvbG91cjogIzYxNjE2MTtcXHJcXG4gIC0tdmlzaWJsZS1jb2xvdXI6ICM1MTUxNTE7XFxyXFxuICAtLXZpc2libGUtZm9udDojYjliNGI0O1xcclxcbiAgLS1hY3RpdmUtY29sb3VyOiAjZmY5ODk4O1xcclxcbiAgLS1hY3RpdmUtZm9udDogIzNhM2EzYTtcXHJcXG4gIC0tZm9udC1jb2xvdXI6I2Q4ZDJkMjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lOyBcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDsgXFxyXFxuICB6LWluZGV4OiAxOyBcXHJcXG4gIHBhZGRpbmctdG9wOiAyNXZoOyBcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTsgXFxyXFxuICBoZWlnaHQ6IDEwMCU7IFxcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvdXIpO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS10YXNrLXZpZXcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ob3Zlci1jb2xvdXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXRhc2stdmlldy52aXNpYmxlID4gLmRlc2MtdGFzay12aWV3IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZpc2libGUtY29sb3VyKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS12aXNpYmxlLWZvbnQpO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uZS1jb250YWluZXIge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXRhc2stdmlldyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXRhc2stdmlldzpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAwLjFlbSAwLjFlbTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMywgMS4wMyk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAyNSU7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG91cik7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvdXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvdXIpO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3VyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIGZsZXg6IDcgNyAwO1xcclxcbiAgcGFkZGluZzogMmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3VyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYmFyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG91cik7XFxyXFxuICBmbGV4OiAyIDIgMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW17XFxyXFxuICBwYWRkaW5nOiAxZW0gMC41ZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1wcm9qZWN0e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3VyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ib3gtY29sb3VyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtd3JhcHBlcjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3VyKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1hY3RpdmUtZm9udCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXdyYXBwZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvdXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLnByb2plY3Qtd3JhcHBlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3VyKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1hY3RpdmUtZm9udCk7XFxyXFxufVxcclxcblxcclxcbi5uZXctdGFzayB7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvdXIpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b24ge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3VyKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG91cik7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvdXIpO1xcclxcbiAgcGFkZGluZzogMC4yZW0gMmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3VyKTtcXHJcXG4gIGhlaWdodDogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3VyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3VyKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG91cik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ob3Zlci1jb2xvdXIpO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjRlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG91cik7XFxyXFxuICBoZWlnaHQ6IDNlbTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBsaW5lLWhlaWdodDogMTBlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICBmbGV4OiAxIDEgMDtcXHJcXG4gIHdpZHRoOiBpbmhlcml0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2MtdGFzay12aWV3IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC4xZW07XFxyXFxufVxcclxcblxcclxcbi5kYXRlLWxhYmVsLCAudGl0bGUtbGFiZWwge1xcclxcbiAgZmxleDogMSAxIDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZS1zdGF0dXMge1xcclxcbiAgZmxleDogMC4xO1xcclxcbiAgbWF4LWhlaWdodDogMmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDRCQUE0QjtFQUM1QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QywwQkFBMEI7RUFDMUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsUUFBUTtFQUNSLDBDQUEwQztFQUMxQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLE9BQU87RUFDUCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3VyOiAjMjUyNTI1O1xcclxcbiAgLS1ib3gtY29sb3VyOiAjNDI0MjQyO1xcclxcbiAgLS1ob3Zlci1jb2xvdXI6ICM2MTYxNjE7XFxyXFxuICAtLXZpc2libGUtY29sb3VyOiAjNTE1MTUxO1xcclxcbiAgLS12aXNpYmxlLWZvbnQ6I2I5YjRiNDtcXHJcXG4gIC0tYWN0aXZlLWNvbG91cjogI2ZmOTg5ODtcXHJcXG4gIC0tYWN0aXZlLWZvbnQ6ICMzYTNhM2E7XFxyXFxuICAtLWZvbnQtY29sb3VyOiNkOGQyZDI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tb2RhbC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTsgXFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7IFxcclxcbiAgei1pbmRleDogMTsgXFxyXFxuICBwYWRkaW5nLXRvcDogMjV2aDsgXFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7IFxcclxcbiAgaGVpZ2h0OiAxMDAlOyBcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3VyKTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtdGFzay12aWV3IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taG92ZXItY29sb3VyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS10YXNrLXZpZXcudmlzaWJsZSA+IC5kZXNjLXRhc2stdmlldyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12aXNpYmxlLWNvbG91cik7XFxyXFxuICBjb2xvcjogdmFyKC0tdmlzaWJsZS1mb250KTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmUtY29udGFpbmVyIHtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci10YXNrLXZpZXcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS10YXNrLXZpZXc6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm94LXNoYWRvdzogMC4xZW0gMC4xZW07XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMsIDEuMDMpO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogMjUlO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvdXIpO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3VyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvZHktY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3VyKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG91cik7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4OiA3IDcgMDtcXHJcXG4gIHBhZGRpbmc6IDJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG91cik7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJhciB7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvdXIpO1xcclxcbiAgZmxleDogMiAyIDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVte1xcclxcbiAgcGFkZGluZzogMWVtIDAuNWVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmUtcHJvamVjdHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG91cik7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmUtcHJvamVjdDpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYm94LWNvbG91cik7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXdyYXBwZXI6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG91cik7XFxyXFxuICBjb2xvcjogdmFyKC0tYWN0aXZlLWZvbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC13cmFwcGVye1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3VyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS5wcm9qZWN0LXdyYXBwZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWNvbG91cik7XFxyXFxuICBjb2xvcjogdmFyKC0tYWN0aXZlLWZvbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRhc2sge1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3VyKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWNvbG91cik7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvdXIpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtY29sb3VyKTtcXHJcXG4gIHBhZGRpbmc6IDAuMmVtIDJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG91cik7XFxyXFxuICBoZWlnaHQ6IDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG91cik7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG91cik7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1jb2xvdXIpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taG92ZXItY29sb3VyKTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC40ZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvdXIpO1xcclxcbiAgaGVpZ2h0OiAzZW07XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEwZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIge1xcclxcbiAgZmxleDogMSAxIDA7XFxyXFxuICB3aWR0aDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxyXFxufVxcclxcblxcclxcbi5kZXNjLXRhc2stdmlldyB7XFxyXFxuICBtYXgtaGVpZ2h0OiAwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZS1sYWJlbCwgLnRpdGxlLWxhYmVsIHtcXHJcXG4gIGZsZXg6IDEgMSAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUtc3RhdHVzIHtcXHJcXG4gIGZsZXg6IDAuMTtcXHJcXG4gIG1heC1oZWlnaHQ6IDJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MjU7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBNb2RhbCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250YWluZXJcIik7XHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRlbnRcIik7XHJcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKTtcclxuXHJcbiAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWxDb250YWluZXIpIHtcclxuICAgICAgaGlkZU1vZGFsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRSZXBlYXRUYXNrTW9kYWwgPSAodGl0bGUsIGRlc2MpID0+IHtcclxuICAgIG1vZGFsQ29udGVudC5pbm5lclRleHQgPSBgVGFzazogJHt0aXRsZX1cXG4ke2Rlc2N9XFxuaGFzIGFscmVhZHkgYmVlbiBlbnRlcmVkYDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNldFJlcGVhdFByb2plY3RNb2RhbCA9ICh0aXRsZSkgPT4ge1xyXG4gICAgbW9kYWxDb250ZW50LmlubmVyVGV4dCA9IGBQcm9qZWN0OiAke3RpdGxlfVxcbmhhcyBhbHJlYWR5IGJlZW4gZW50ZXJlZGA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRFbXB0eU1vZGFsID0gKHRoaW5nKSA9PiB7XHJcbiAgICBtb2RhbENvbnRlbnQuaW5uZXJUZXh0ID0gYCR7dGhpbmd9IGNhbm5vdCBiZSBlbXB0eSFgO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xyXG4gICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhpZGVNb2RhbCA9ICgpID0+IHtcclxuICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiB7c2V0UmVwZWF0VGFza01vZGFsLCBzZXRSZXBlYXRQcm9qZWN0TW9kYWwsIHNldEVtcHR5TW9kYWwsIHNob3dNb2RhbH07XHJcbn1cclxuXHJcbmV4cG9ydCB7TW9kYWx9OyIsImltcG9ydCB7RGVhZGxpbmV9IGZyb20gJy4vdG9kbyc7XHJcblxyXG5jb25zdCBQcm9qZWN0ID0gKHQpID0+IHtcclxuICBsZXQgcHJvalRpdGxlID0gdDtcclxuICBsZXQgdG9kb2xpc3QgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qVGl0bGUpKSA9PSBudWxsID8ge30gOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qVGl0bGUpKTtcclxuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvalRpdGxlLCBKU09OLnN0cmluZ2lmeSh0b2RvbGlzdCkpO1xyXG5cclxuICBjb25zdCBhZGRUb2RvID0gKHRpdGxlLCBkZXNjLCBieSkgPT4ge1xyXG4gICAgbGV0IHRhc2sgPSBEZWFkbGluZSh0aXRsZSwgZGVzYywgYnkpO1xyXG4gICAgaWYgKCEodGFzay5nZXRTdHJpbmdSZXAoKSBpbiB0b2RvbGlzdCkpIHtcclxuICAgICAgdG9kb2xpc3RbdGFzay5nZXRTdHJpbmdSZXAoKV0gPSB0YXNrLnRvT2JqKCk7XHJcbiAgICAgIHNhdmVDaGFuZ2UocHJvalRpdGxlKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1ZhbGlkSW5wdXQgPSAodGl0bGUsIGRlc2MsIGJ5KSA9PiB7XHJcbiAgICBpZiAodGl0bGUgPT0gXCJcIikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAodGl0bGUsIGRlc2MsIGJ5KSA9PiB7XHJcbiAgICBsZXQgdGFzayA9IERlYWRsaW5lKHRpdGxlLCBkZXNjLCBieSk7XHJcbiAgICBkZWxldGUgdG9kb2xpc3RbdGFzay5nZXRTdHJpbmdSZXAoKV07XHJcbiAgICBzYXZlQ2hhbmdlKHByb2pUaXRsZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVUb2RvID0gKHRpdGxlLCBkZXNjLCBieSwgYm9vbCkgPT4ge1xyXG4gICAgbGV0IHRhc2sgPSBEZWFkbGluZSh0aXRsZSwgZGVzYywgYnksIGJvb2wpO1xyXG4gICAgdG9kb2xpc3RbdGFzay5nZXRTdHJpbmdSZXAoKV0gPSB0YXNrLnRvT2JqKCk7XHJcbiAgICBzYXZlQ2hhbmdlKHByb2pUaXRsZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzYXZlQ2hhbmdlID0gKHRpdGxlKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGl0bGUsIEpTT04uc3RyaW5naWZ5KHRvZG9saXN0KSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRDb250ZW50cyA9ICgpID0+IHtcclxuICAgIHJldHVybiB0b2RvbGlzdDtcclxuICB9XHJcblxyXG4gIHJldHVybiB7YWRkVG9kbywgcmVtb3ZlVG9kbywgZ2V0Q29udGVudHMsIGNoZWNrVmFsaWRJbnB1dCwgdG9nZ2xlVG9kb307XHJcbn1cclxuXHJcbmV4cG9ydCB7UHJvamVjdH07IiwiaW1wb3J0IHsgUHJvamVjdFN0b3JhZ2UgfSBmcm9tIFwiLi9wcm9qZWN0c3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0TG9hZGVyIH0gZnJvbSBcIi4vcHJvamVjdGxvYWRlclwiO1xyXG5cclxuY29uc3QgUHJvamVjdEJhciA9IChtb2RhbCwgbWFpbkNvbnRhaW5lcikgPT4ge1xyXG4gIFxyXG4gIC8vaW5pdGlhbGl6YXRpb25cclxuICBjb25zdCBzdG9yYWdlID0gUHJvamVjdFN0b3JhZ2UoKTtcclxuICBjb25zdCBOVU1CRVJJTlBVVCA9IFwiJU5VTSVcIjtcclxuICBjb25zdCBTUEFDRUlOUFVUID0gXCIlU1BBQ0UlXCJcclxuICBsZXQgY3VycmVudEFjdGl2ZSA9IHN0b3JhZ2UuZ2V0UHJvamVjdEhvbWUoKTtcclxuICBjb25zdCBwcm9qZWN0QmFyICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJvamVjdEJhci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1iYXJcIik7XHJcbiAgUHJvamVjdExvYWRlcihjdXJyZW50QWN0aXZlLCBtYWluQ29udGFpbmVyLCBtb2RhbCkuZ2VuZXJhdGVDb250ZW50cygpO1xyXG5cclxuICBjb25zdCBnZW5lcmF0ZVByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgcHJvamVjdEJhci50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0XCIpO1xyXG4gICAgZm9yIChsZXQgaSBpbiBzdG9yYWdlLmdldFByb2plY3RzKCkpIHtcclxuICAgICAgY29uc3QgcHJvamVjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBwcm9qZWN0V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC13cmFwcGVyXCIpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XHJcbiAgICAgIHByb2plY3RJdGVtLmlubmVyVGV4dCA9IGkucmVwbGFjZUFsbChTUEFDRUlOUFVULCBcIiBcIikucmVwbGFjZUFsbChOVU1CRVJJTlBVVCxcIlwiKTtcclxuICAgICAgcHJvamVjdFdyYXBwZXIuZGF0YXNldC5uYW1lID0gaTtcclxuICAgICAgcHJvamVjdFdyYXBwZXIuY2xhc3NMaXN0LmFkZChpKTtcclxuICAgICAgaWYgKGkgPT0gY3VycmVudEFjdGl2ZSkge1xyXG4gICAgICAgIHByb2plY3RXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgICAgcHJvamVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xyXG4gICAgICAgIFByb2plY3RMb2FkZXIoaSwgbWFpbkNvbnRhaW5lciwgbW9kYWwpLmdlbmVyYXRlQ29udGVudHMoKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjdXJyZW50QWN0aXZlfWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgY3VycmVudEFjdGl2ZSA9IGk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y3VycmVudEFjdGl2ZX1gKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICBpZiAoaSA9PSBzdG9yYWdlLmdldFByb2plY3RIb21lKCkpIHtcclxuICAgICAgICBwcm9qZWN0V3JhcHBlci5hcHBlbmQocHJvamVjdEl0ZW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZChwcm9qZWN0SXRlbSwgY3JlYXRlUHJvamVjdFJlbW92ZUJ1dHRvbihwcm9qZWN0V3JhcHBlcikpO1xyXG4gICAgICB9XHJcbiAgICAgIHByb2plY3RMaXN0LmFwcGVuZChwcm9qZWN0V3JhcHBlcik7XHJcbiAgICB9XHJcbiAgICBwcm9qZWN0QmFyLmFwcGVuZChwcm9qZWN0TGlzdCwgY3JlYXRlUHJvamVjdEJ1dHRvbigpKTtcclxuICAgIFByb2plY3RMb2FkZXIoY3VycmVudEFjdGl2ZSwgbWFpbkNvbnRhaW5lciwgbW9kYWwpLmdlbmVyYXRlQ29udGVudHMoKTtcclxuICAgIHJldHVybiBwcm9qZWN0QmFyO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlUHJvamVjdFJlbW92ZUJ1dHRvbiA9KHdyYXBwZXIpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RSZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHByb2plY3RSZW1vdmVCdXR0b24uaW5uZXJIVE1MID0gXCJYXCI7XHJcbiAgICBwcm9qZWN0UmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmUtcHJvamVjdFwiKTtcclxuICAgIHByb2plY3RSZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgd3JhcHBlci5yZW1vdmUoKTtcclxuICAgICAgc3RvcmFnZS5yZW1vdmVQcm9qZWN0KHdyYXBwZXIuZGF0YXNldC5uYW1lKTtcclxuICAgICAgaWYgKGN1cnJlbnRBY3RpdmUgPT0gd3JhcHBlci5kYXRhc2V0Lm5hbWUpIHtcclxuICAgICAgICBjdXJyZW50QWN0aXZlID0gc3RvcmFnZS5nZXRQcm9qZWN0SG9tZSgpO1xyXG4gICAgICAgIGdlbmVyYXRlUHJvamVjdHMoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBwcm9qZWN0UmVtb3ZlQnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdFwiKTtcclxuICAgIGNvbnN0IGJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidXQuaW5uZXJUZXh0ID0gXCJBZGQgYSBuZXcgcHJvamVjdFwiO1xyXG4gICAgYnV0LmNsYXNzTGlzdC5hZGQoXCJhZGQtYnV0dG9uXCIpO1xyXG5cclxuICAgIGJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpbnB1dENvbnRhaW5lci5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0SW5wdXQoKSk7XHJcbiAgICB9KVxyXG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0KTtcclxuICAgIHJldHVybiBpbnB1dENvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVByb2plY3RJbnB1dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XHJcbiAgICB0aXRsZS5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBuYW1lXCJcclxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBzdWJtaXQuaW5uZXJUZXh0ID0gXCJBZGRcIjtcclxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBzYXZlUHJvamVjdChpbnB1dENvbnRhaW5lcilcclxuICAgICAgaW5wdXRDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgIGN1cnJlbnRBY3RpdmUgPSBpbnB1dENvbnRhaW5lci5maXJzdENoaWxkLnZhbHVlLnRyaW0oKTtcclxuICAgICAgZ2VuZXJhdGVQcm9qZWN0cygpO1xyXG4gICAgfSk7XHJcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmQodGl0bGUsIHN1Ym1pdCk7XHJcbiAgICByZXR1cm4gaW5wdXRDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzYXZlUHJvamVjdCA9IChpbnB1dCkgPT4ge1xyXG4gICAgbGV0IHRpdGxlID0gaW5wdXQuZmlyc3RDaGlsZC52YWx1ZS50cmltKCkucmVwbGFjZSgvXFxzL2csIFNQQUNFSU5QVVQpOy8vLnJlcGxhY2UoLyhcXGQrKS8sIE5VTUJFUklOUFVUICsgXCIkMVwiICsgTlVNQkVSSU5QVVQgKVxyXG4gICAgaWYgKHRpdGxlLm1hdGNoKC9cXGQvKSkge1xyXG4gICAgICB0aXRsZSA9IHRpdGxlICsgTlVNQkVSSU5QVVQ7XHJcbiAgICB9XHJcbiAgICBpZiAoIShzdG9yYWdlLnZhbGlkVGl0bGUodGl0bGUpKSkge1xyXG4gICAgICBtb2RhbC5zZXRFbXB0eU1vZGFsKFwiUHJvamVjdCB0aXRsZVwiKTtcclxuICAgICAgbW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKCEoc3RvcmFnZS5hZGRQcm9qZWN0KHRpdGxlKSkpIHtcclxuICAgICAgbW9kYWwuc2V0UmVwZWF0UHJvamVjdE1vZGFsKHRpdGxlKTtcclxuICAgICAgbW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgZ2VuZXJhdGVQcm9qZWN0cywgY3JlYXRlUHJvamVjdElucHV0fTtcclxufVxyXG5cclxuZXhwb3J0IHtQcm9qZWN0QmFyfTsiLCIvLyBHZW5lcmF0ZXMgcHJvamVjdCBpdGVtcyB0byBiZSBwbGFjZWQgaW4gRE9NXHJcbmltcG9ydCB7UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxyXG5cclxuXHJcbmNvbnN0IFByb2plY3RMb2FkZXIgPSAodGl0bGUsIG1haW5Db250YWluZXIsIG1vZGFsKSA9PiB7XHJcblxyXG4gIGxldCBwcm9qZWN0ID0gUHJvamVjdCh0aXRsZSk7XHJcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdC1jb250YWluZXJcIik7XHJcbiAgY29uc3QgZG9uZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZG9uZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZG9uZS1jb250YWluZXJcIik7XHJcbiAgbWFpbkNvbnRhaW5lci5pbm5lclRleHQgPSBcIlwiO1xyXG4gIG1haW5Db250YWluZXIuYXBwZW5kKGxpc3RDb250YWluZXIsIGRvbmVDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBnZW5lcmF0ZUNvbnRlbnRzID0gKCkgPT4ge1xyXG4gICAgbGlzdENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBkb25lQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGxldCBjID0gcHJvamVjdC5nZXRDb250ZW50cygpO1xyXG4gICAgZm9yIChsZXQgaSBpbiBjKSB7XHJcbiAgICAgIGlmICghY1tpXVtcImRvbmVcIl0pIHtcclxuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURlYWRsaW5lVmlldyhjW2ldKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEZWFkbGluZVZpZXcoY1tpXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURlYWRsaW5lQnV0dG9uKCkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlRGVhZGxpbmVCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmV3LXRhc2tcIik7XHJcbiAgICBjb25zdCBidXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0LmlubmVyVGV4dCA9IFwiQWRkIGEgbmV3IHRhc2tcIjtcclxuICAgIGJ1dC5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ1dHRvblwiKTtcclxuXHJcbiAgICBidXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaW5wdXRDb250YWluZXIuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRGVhZGxpbmVJbnB1dCgpKTtcclxuICAgIH0pXHJcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChidXQpO1xyXG4gICAgcmV0dXJuIGlucHV0Q29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlRGVhZGxpbmVJbnB1dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgdGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCJcclxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBkZXNjLmNsYXNzTGlzdC5hZGQoXCJkZXNjXCIpO1xyXG4gICAgZGVzYy5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb25cIlxyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGRhdGUudHlwZSA9IFwiZGF0ZVwiO1xyXG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKVxyXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHN1Ym1pdC5pbm5lclRleHQgPSBcIkFkZFwiO1xyXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHNhdmVEZWFkbGluZShpbnB1dENvbnRhaW5lcik7XHJcbiAgICAgIGlucHV0Q29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICBnZW5lcmF0ZUNvbnRlbnRzKCk7XHJcbiAgICB9KTtcclxuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZCh0aXRsZSwgZGVzYywgZGF0ZSwgc3VibWl0KTtcclxuICAgIHJldHVybiBpbnB1dENvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8vIHRha2VzIHRoZSBpbnB1dCB3cmFwcGVyXHJcbiAgY29uc3Qgc2F2ZURlYWRsaW5lID0gKGNvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc3QgYyA9IGNvbnRhaW5lci5jaGlsZHJlbjtcclxuICAgIGxldCB0aXRsZSwgZGVzYywgZGF0ZSA9IG51bGw7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGl0bGVcIikpIHtcclxuICAgICAgICB0aXRsZSA9IGNbaV0udmFsdWUudHJpbSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVzY1wiKSkge1xyXG4gICAgICAgIGRlc2MgPSBjW2ldLnZhbHVlLnRyaW0oKTtcclxuICAgICAgfSBlbHNlIGlmIChjW2ldLmNsYXNzTGlzdC5jb250YWlucyhcImRhdGVcIikpIHtcclxuICAgICAgICBkYXRlID0gY1tpXS52YWx1ZS50cmltKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghKHByb2plY3QuY2hlY2tWYWxpZElucHV0KHRpdGxlLCBkZXNjLCBkYXRlKSkpIHtcclxuICAgICAgbW9kYWwuc2V0RW1wdHlNb2RhbChcIlRhc2sgdGl0bGVcIik7XHJcbiAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmICghKHByb2plY3QuYWRkVG9kbyh0aXRsZSwgZGVzYywgZGF0ZSkpKSB7XHJcbiAgICAgIG1vZGFsLnNldFJlcGVhdFRhc2tNb2RhbCh0aXRsZSwgZGVzYywgZGF0ZSk7XHJcbiAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBjcmVhdGVEZWFkbGluZVZpZXcgPSAob2JqKSA9PiB7XHJcbiAgICBjb25zdCBzaW5nbGVUYXNrVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzaW5nbGVUYXNrVmlldy5jbGFzc0xpc3QuYWRkKFwic2luZ2xlLXRhc2stdmlld1wiKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJUYXNrVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkZXJUYXNrVmlldy5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLXRhc2stdmlld1wiKTtcclxuXHJcbiAgICBjb25zdCBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZG9uZS50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgZG9uZS5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlLXN0YXR1c1wiKTtcclxuICAgIGRvbmUuY2hlY2tlZCA9IG9ialtcImRvbmVcIl07XHJcbiAgICBpZiAob2JqW1wiZG9uZVwiXSkge1xyXG4gICAgICBzaW5nbGVUYXNrVmlldy5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9IG9ialtcInRpdGxlXCJdO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlLWxhYmVsXCIpO1xyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkZXNjLmlubmVyVGV4dCA9IG9ialtcImRlc2NcIl07XHJcbiAgICBkZXNjLmNsYXNzTGlzdC5hZGQoXCJkZXNjLXRhc2stdmlld1wiKTtcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGF0ZS5pbm5lclRleHQgPSBvYmpbXCJieVwiXSA9PSBcIlwiID8gXCJcIjogYER1ZSBieTogJHtvYmpbXCJieVwiXX1gO1xyXG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1sYWJlbFwiKTtcclxuXHJcbiAgICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZGVsLmlubmVyVGV4dCA9IFwiZGVsZXRlXCI7XHJcbiAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgc2luZ2xlVGFza1ZpZXcucmVtb3ZlKCk7XHJcbiAgICAgIHByb2plY3QucmVtb3ZlVG9kbyhvYmpbXCJ0aXRsZVwiXSwgb2JqW1wiZGVzY1wiXSwgb2JqW1wiYnlcIl0pO1xyXG4gICAgfSlcclxuXHJcbiAgICBkb25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgcHJvamVjdC50b2dnbGVUb2RvKG9ialtcInRpdGxlXCJdLCBvYmpbXCJkZXNjXCJdLCBvYmpbXCJieVwiXSwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvamVjdC50b2dnbGVUb2RvKG9ialtcInRpdGxlXCJdLCBvYmpbXCJkZXNjXCJdLCBvYmpbXCJieVwiXSwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGdlbmVyYXRlQ29udGVudHMoKTtcclxuICAgIH0pXHJcblxyXG4gICAgc2luZ2xlVGFza1ZpZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGxldCBlbSA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShkZXNjLnBhcmVudEVsZW1lbnQpLmZvbnRTaXplKTtcclxuICAgICAgbGV0IHNjckhlaWdodCA9IGRlc2Muc2Nyb2xsSGVpZ2h0L2VtICsgMiArIFwiZW1cIlxyXG4gICAgICBpZiAoZGVzYy5pbm5lclRleHQgIT0gXCJcIiAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9nZ2xlLXN0YXR1c1wiKSkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkZXNjKS5tYXhIZWlnaHQgIT0gXCIwcHhcIikge1xyXG4gICAgICAgICAgZGVzYy5zdHlsZS5tYXhIZWlnaHQgPSBudWxsOyBcclxuICAgICAgICB9IGVsc2UgeyBcclxuICAgICAgICAgIGRlc2Muc3R5bGUubWF4SGVpZ2h0ID0gc2NySGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaW5nbGVUYXNrVmlldy5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBoZWFkZXJUYXNrVmlldy5hcHBlbmQoZG9uZSwgdGl0bGUsIGRhdGUsIGRlbCk7XHJcbiAgICBzaW5nbGVUYXNrVmlldy5hcHBlbmQoaGVhZGVyVGFza1ZpZXcsIGRlc2MpO1xyXG4gICAgcmV0dXJuIHNpbmdsZVRhc2tWaWV3O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtnZW5lcmF0ZUNvbnRlbnRzfTtcclxufVxyXG5cclxuZXhwb3J0IHtQcm9qZWN0TG9hZGVyfTsiLCJjb25zdCBQcm9qZWN0U3RvcmFnZSA9ICgpID0+IHtcclxuICBjb25zdCBQUk9KRUNUTElTVEtFWSA9IFwicHJvamVjdC1rZXlzXCI7XHJcbiAgY29uc3QgUFJPSkVDVEhPTUUgPSBcImhvbWVcIjtcclxuICBsZXQgcHJvamVjdHMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oUFJPSkVDVExJU1RLRVkpID09IG51bGwgPyB7aG9tZTogUFJPSkVDVEhPTUV9IDogSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oUFJPSkVDVExJU1RLRVkpKTtcclxuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oUFJPSkVDVExJU1RLRVksIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcblxyXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHByb2plY3RzO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkUHJvamVjdCA9IChuYW1lKSA9PiB7XHJcbiAgICBpZiAoIShuYW1lIGluIHByb2plY3RzKSkge1xyXG4gICAgICBwcm9qZWN0c1tuYW1lXSA9IG5hbWU7XHJcbiAgICAgIHNhdmVDaGFuZ2UoKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKG5hbWUpID0+IHtcclxuICAgIGRlbGV0ZSBwcm9qZWN0c1tuYW1lXTtcclxuICAgIHNhdmVDaGFuZ2UoKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdmFsaWRUaXRsZSA9IChuYW1lKSA9PiB7XHJcbiAgICBpZiAobmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2F2ZUNoYW5nZSA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShQUk9KRUNUTElTVEtFWSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFByb2plY3RIb21lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIFBST0pFQ1RIT01FO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtnZXRQcm9qZWN0cywgYWRkUHJvamVjdCwgZ2V0UHJvamVjdEhvbWUsIHZhbGlkVGl0bGUsIHJlbW92ZVByb2plY3R9O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHtQcm9qZWN0U3RvcmFnZSx9OyIsImNvbnN0IFRvZG8gPSAodCwgZGVzLCBkYXQsIHN0YXQgPSBmYWxzZSkgPT4ge1xyXG4gIGxldCB0aXRsZSA9IHQ7XHJcbiAgbGV0IGRlc2MgPSBkZXM7XHJcbiAgbGV0IGRhdGUgPSBkYXQ7XHJcbiAgbGV0IGRvbmUgPSBzdGF0O1xyXG5cclxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcclxuICAgIHJldHVybiB0aXRsZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldERlc2MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZGVzYyAhPT0gbnVsbCA/IGRlc2MgOiBcIlwiO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBnZXREYXRlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGUgIT09IG51bGwgPyBkYXRlIDogXCJcIjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHtcclxuICAgIHJldHVybiBkb25lO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtnZXRUaXRsZSwgZ2V0RGVzYywgZ2V0RGF0ZSwgZ2V0U3RhdHVzfTtcclxufTtcclxuXHJcbmNvbnN0IEV2ZW50ID0gKHRpdGxlLCBkZXNjID0gbnVsbCwgYXQgPSBudWxsKSA9PiB7XHJcblxyXG4gIGNvbnN0IHByb3RvdHlwZSA9IFRvZG8odGl0bGUsIGRlc2MsIGF0KTtcclxuICBjb25zdCBnZXREYXRlVHlwZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBcInN0YXJ0XCI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRTdHJpbmdSZXAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYCR7dGl0bGV9OiAke2Rlc2N9IGF0ICR7YXR9YDtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90b3R5cGUsIHtnZXREYXRlVHlwZSwgZ2V0U3RyaW5nUmVwfSk7XHJcbn1cclxuXHJcbmNvbnN0IERlYWRsaW5lID0gKHRpdGxlLCBkZXNjID0gbnVsbCwgYnkgPSBudWxsLCBkb25lID0gZmFsc2UpID0+IHtcclxuXHJcbiAgY29uc3QgcHJvdG90eXBlID0gVG9kbyh0aXRsZSwgZGVzYywgYnksIGRvbmUpO1xyXG4gIGNvbnN0IGdldERhdGVUeXBlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIFwiZW5kXCI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRTdHJpbmdSZXAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYCR7dGl0bGV9OiAke2Rlc2N9IGJ5ICR7Ynl9YDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvT2JqID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzYywgYnksIGRvbmV9XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICBpZiAoZG9uZSkge1xyXG4gICAgICBkb25lID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb25lID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90b3R5cGUsIHtnZXREYXRlVHlwZSwgZ2V0U3RyaW5nUmVwLCB0b09iaiwgdG9nZ2xlU3RhdHVzfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7RXZlbnQsIERlYWRsaW5lfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gR2VuZXJhdGVzIGl0ZW1zIHRvIGJlIHBsYWNlZCBpbiBET01cclxuaW1wb3J0IHsgUHJvamVjdEJhciB9IGZyb20gJy4vcHJvamVjdGJhcic7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbmhlYWRlci50ZXh0Q29udGVudCA9IFwiVG9kb0xpc3RcIjtcclxuXHJcbmNvbnN0IG1vZGFsID0gTW9kYWwoKTtcclxuXHJcbmNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5ib2R5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2R5LWNvbnRhaW5lclwiKTtcclxuXHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhaW5lclwiKTtcclxuXHJcbmNvbnN0IHByb2plY3RCYXIgPSBQcm9qZWN0QmFyKG1vZGFsLCBtYWluQ29udGFpbmVyKS5nZW5lcmF0ZVByb2plY3RzKCk7XHJcblxyXG5ib2R5Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0QmFyLCBtYWluQ29udGFpbmVyKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyLCBib2R5Q29udGFpbmVyKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=