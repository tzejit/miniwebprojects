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
___CSS_LOADER_EXPORT___.push([module.id, ".modal-container {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  padding-top: 25vh; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto;\r\n  background-color: rgb(0,0,0);\r\n  background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 1em;\r\n  border: 1px solid #888;\r\n  width: 80%;\r\n}\r\n\r\n.single-task-view {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.header-task-view {\r\n  display: flex;\r\n  gap: 3em;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n}\r\n\r\n.main-container {\r\n  flex: 7 1 auto;\r\n}\r\n\r\n.project-bar {\r\n  flex: 3 1 auto;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n  padding: 0.2em;\r\n}\r\n\r\nli:hover {\r\n  cursor: pointer;\r\n  background-color: #888;\r\n}\r\n\r\n.active {\r\n  background-color: #888;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,iBAAiB;EACjB,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,4BAA4B;EAC5B,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":[".modal-container {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  padding-top: 25vh; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto;\r\n  background-color: rgb(0,0,0);\r\n  background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 1em;\r\n  border: 1px solid #888;\r\n  width: 80%;\r\n}\r\n\r\n.single-task-view {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.header-task-view {\r\n  display: flex;\r\n  gap: 3em;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n}\r\n\r\n.main-container {\r\n  flex: 7 1 auto;\r\n}\r\n\r\n.project-bar {\r\n  flex: 3 1 auto;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n  padding: 0.2em;\r\n}\r\n\r\nli:hover {\r\n  cursor: pointer;\r\n  background-color: #888;\r\n}\r\n\r\n.active {\r\n  background-color: #888;\r\n}"],"sourceRoot":""}]);
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

  const setRepeatModal = (title, desc) => {
    modalContent.innerText = `Task: ${title}\n${desc}\nhas already been entered`;
  }

  const showModal = () => {
    modalContainer.style.display = "block";
  }

  const hideModal = () => {
    modalContainer.style.display = "none";
  }

  return {setRepeatModal, showModal};
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

  const removeTodo = (title, desc, by) => {
    let task = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.Deadline)(title, desc, by);
    delete todolist[task.getStringRep()];
    saveChange(projTitle);
  }

  const saveChange = (title) => {
    window.localStorage.setItem(title, JSON.stringify(todolist));
  }

  const getContents = () => {
    return todolist;
  }

  return {addTodo, removeTodo, getContents};
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
  let currentActive = storage.getProjectHome();
  const projectBar  = document.createElement("div");
  projectBar.classList.add("project-bar");
  const projectList = document.createElement("ul");
  projectBar.appendChild(projectList);
  (0,_projectloader__WEBPACK_IMPORTED_MODULE_1__.ProjectLoader)(currentActive, mainContainer, modal).generateContents();

  const generateProjects = () => {
    projectList.textContent = "";
    for (let i in storage.getProjects()) {
      const projectItem = document.createElement("li");
      projectItem.innerText = i;
      projectItem.dataset.name = i;
      projectItem.classList.add(i);
      if (i == currentActive) {
        projectItem.classList.toggle("active");
      }
      projectItem.addEventListener("click", ()=> {
        (0,_projectloader__WEBPACK_IMPORTED_MODULE_1__.ProjectLoader)(i, mainContainer, modal).generateContents();
        document.querySelector(`.${currentActive}`).classList.toggle("active");
        currentActive = i;
        document.querySelector(`.${currentActive}`).classList.toggle("active");
      })
      projectList.appendChild(projectItem);
    }
    projectBar.appendChild(createProjectInput());
    (0,_projectloader__WEBPACK_IMPORTED_MODULE_1__.ProjectLoader)(currentActive, mainContainer, modal).generateContents();
    return projectBar;
  }

  const createProjectInput = () => {
    const inputContainer = document.createElement("div");
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
    let title = input.firstChild.value.trim()
    if (!(storage.addProject(title))) {
      modal.setRepeatModal(title);
      modal.showModal();
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
  mainContainer.innerText = "";
  mainContainer.appendChild(listContainer);

  const generateContents = () => {
    listContainer.textContent = "";
    let c = project.getContents();
    for (let i in c) {
      listContainer.appendChild(createDeadlineView(c[i]));
    }
    listContainer.appendChild(createDeadlineInput());
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
    if (!(project.addTodo(title, desc, date))) {
      modal.setRepeatModal(title, desc, date);
      modal.showModal();
    };
  }

  const createDeadlineView = (obj) => {
    const singleTaskView = document.createElement("div");
    singleTaskView.classList.add("single-task-view");

    const headerTaskView = document.createElement("div");
    headerTaskView.classList.add("header-task-view");

    const title = document.createElement("div");
    title.innerText = obj["title"];
    const desc = document.createElement("div");
    desc.innerText = obj["desc"];
    const date = document.createElement("div");
    date.innerText = obj["by"] == undefined ? "": obj["by"];

    const del = document.createElement("button");
    del.innerText = "delete";
    del.addEventListener("click", () => {
      singleTaskView.remove();
      project.removeTodo(obj["title"], obj["desc"], obj["by"]);
    })

    headerTaskView.append(title, date, del);
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
  const PROJECTHOME = "home"
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
  }

  const saveChange = () => {
    window.localStorage.setItem(PROJECTLISTKEY, JSON.stringify(projects));
  }

  const getProjectHome = () => {
    return PROJECTHOME;
  }

  return {getProjects, addProject, getProjectHome};

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
const Todo = (t, des, dat) => {
  let title = t;
  let desc = des;
  let date = dat;

  const getTitle = () => {
    return title;
  }

  const getDesc = () => {
    return desc !== null ? desc : "";
  }
  
  const getDate = () => {
    return date !== null ? date : "";
  }

  return {getTitle, getDesc, getDate};
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

const Deadline = (title, desc = null, by = null) => {

  const prototype = Todo(title, desc, by);
  const getDateType = () => {
    return "end";
  }

  const getStringRep = () => {
    return `${title}: ${desc} by ${by}`;
  }

  const toObj = () => {
    return {title, desc, by}
  }

  return Object.assign({}, prototype, {getDateType, getStringRep, toObj});
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




const modal = (0,_modal__WEBPACK_IMPORTED_MODULE_1__.Modal)();

const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

const projectBar = (0,_projectbar__WEBPACK_IMPORTED_MODULE_0__.ProjectBar)(modal, mainContainer).generateProjects();

document.body.append(projectBar, mainContainer);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQzBDO0FBQ1Y7QUFDWDtBQUNyQjtBQUNBLGNBQWMsNkNBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdURBQVU7QUFDN0I7QUFDQSxnRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdGJhci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0bG9hZGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RzdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tb2RhbC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTsgXFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7IFxcclxcbiAgei1pbmRleDogMTsgXFxyXFxuICBwYWRkaW5nLXRvcDogMjV2aDsgXFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7IFxcclxcbiAgaGVpZ2h0OiAxMDAlOyBcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXRhc2stdmlldyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci10YXNrLXZpZXcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4OiA3IDEgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYmFyIHtcXHJcXG4gIGZsZXg6IDMgMSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxubGk6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tb2RhbC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTsgXFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7IFxcclxcbiAgei1pbmRleDogMTsgXFxyXFxuICBwYWRkaW5nLXRvcDogMjV2aDsgXFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7IFxcclxcbiAgaGVpZ2h0OiAxMDAlOyBcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXRhc2stdmlldyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci10YXNrLXZpZXcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4OiA3IDEgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYmFyIHtcXHJcXG4gIGZsZXg6IDMgMSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxubGk6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgTW9kYWwgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xyXG4gIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcik7XHJcblxyXG4gIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsQ29udGFpbmVyKSB7XHJcbiAgICAgIGhpZGVNb2RhbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2V0UmVwZWF0TW9kYWwgPSAodGl0bGUsIGRlc2MpID0+IHtcclxuICAgIG1vZGFsQ29udGVudC5pbm5lclRleHQgPSBgVGFzazogJHt0aXRsZX1cXG4ke2Rlc2N9XFxuaGFzIGFscmVhZHkgYmVlbiBlbnRlcmVkYDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoaWRlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge3NldFJlcGVhdE1vZGFsLCBzaG93TW9kYWx9O1xyXG59XHJcblxyXG5leHBvcnQge01vZGFsfTsiLCJpbXBvcnQge0RlYWRsaW5lfSBmcm9tICcuL3RvZG8nO1xyXG5cclxuY29uc3QgUHJvamVjdCA9ICh0KSA9PiB7XHJcbiAgbGV0IHByb2pUaXRsZSA9IHQ7XHJcbiAgbGV0IHRvZG9saXN0ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvalRpdGxlKSkgPT0gbnVsbCA/IHt9IDogSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvalRpdGxlKSk7XHJcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2pUaXRsZSwgSlNPTi5zdHJpbmdpZnkodG9kb2xpc3QpKTtcclxuXHJcbiAgY29uc3QgYWRkVG9kbyA9ICh0aXRsZSwgZGVzYywgYnkpID0+IHtcclxuICAgIGxldCB0YXNrID0gRGVhZGxpbmUodGl0bGUsIGRlc2MsIGJ5KTtcclxuICAgIGlmICghKHRhc2suZ2V0U3RyaW5nUmVwKCkgaW4gdG9kb2xpc3QpKSB7XHJcbiAgICAgIHRvZG9saXN0W3Rhc2suZ2V0U3RyaW5nUmVwKCldID0gdGFzay50b09iaigpO1xyXG4gICAgICBzYXZlQ2hhbmdlKHByb2pUaXRsZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0aXRsZSwgZGVzYywgYnkpID0+IHtcclxuICAgIGxldCB0YXNrID0gRGVhZGxpbmUodGl0bGUsIGRlc2MsIGJ5KTtcclxuICAgIGRlbGV0ZSB0b2RvbGlzdFt0YXNrLmdldFN0cmluZ1JlcCgpXTtcclxuICAgIHNhdmVDaGFuZ2UocHJvalRpdGxlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNhdmVDaGFuZ2UgPSAodGl0bGUpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aXRsZSwgSlNPTi5zdHJpbmdpZnkodG9kb2xpc3QpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENvbnRlbnRzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRvZG9saXN0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHthZGRUb2RvLCByZW1vdmVUb2RvLCBnZXRDb250ZW50c307XHJcbn1cclxuXHJcbmV4cG9ydCB7UHJvamVjdH07IiwiaW1wb3J0IHsgUHJvamVjdFN0b3JhZ2UgfSBmcm9tIFwiLi9wcm9qZWN0c3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0TG9hZGVyIH0gZnJvbSBcIi4vcHJvamVjdGxvYWRlclwiO1xyXG5cclxuY29uc3QgUHJvamVjdEJhciA9IChtb2RhbCwgbWFpbkNvbnRhaW5lcikgPT4ge1xyXG4gIFxyXG4gIC8vaW5pdGlhbGl6YXRpb25cclxuICBjb25zdCBzdG9yYWdlID0gUHJvamVjdFN0b3JhZ2UoKTtcclxuICBsZXQgY3VycmVudEFjdGl2ZSA9IHN0b3JhZ2UuZ2V0UHJvamVjdEhvbWUoKTtcclxuICBjb25zdCBwcm9qZWN0QmFyICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJvamVjdEJhci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1iYXJcIik7XHJcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgcHJvamVjdEJhci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XHJcbiAgUHJvamVjdExvYWRlcihjdXJyZW50QWN0aXZlLCBtYWluQ29udGFpbmVyLCBtb2RhbCkuZ2VuZXJhdGVDb250ZW50cygpO1xyXG5cclxuICBjb25zdCBnZW5lcmF0ZVByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgcHJvamVjdExpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSBpbiBzdG9yYWdlLmdldFByb2plY3RzKCkpIHtcclxuICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIHByb2plY3RJdGVtLmlubmVyVGV4dCA9IGk7XHJcbiAgICAgIHByb2plY3RJdGVtLmRhdGFzZXQubmFtZSA9IGk7XHJcbiAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoaSk7XHJcbiAgICAgIGlmIChpID09IGN1cnJlbnRBY3RpdmUpIHtcclxuICAgICAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHByb2plY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcclxuICAgICAgICBQcm9qZWN0TG9hZGVyKGksIG1haW5Db250YWluZXIsIG1vZGFsKS5nZW5lcmF0ZUNvbnRlbnRzKCk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y3VycmVudEFjdGl2ZX1gKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGN1cnJlbnRBY3RpdmUgPSBpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2N1cnJlbnRBY3RpdmV9YCkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgfSlcclxuICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xyXG4gICAgfVxyXG4gICAgcHJvamVjdEJhci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0SW5wdXQoKSk7XHJcbiAgICBQcm9qZWN0TG9hZGVyKGN1cnJlbnRBY3RpdmUsIG1haW5Db250YWluZXIsIG1vZGFsKS5nZW5lcmF0ZUNvbnRlbnRzKCk7XHJcbiAgICByZXR1cm4gcHJvamVjdEJhcjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVByb2plY3RJbnB1dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcclxuICAgIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IG5hbWVcIlxyXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHN1Ym1pdC5pbm5lclRleHQgPSBcIkFkZFwiO1xyXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHNhdmVQcm9qZWN0KGlucHV0Q29udGFpbmVyKVxyXG4gICAgICBpbnB1dENvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgY3VycmVudEFjdGl2ZSA9IGlucHV0Q29udGFpbmVyLmZpcnN0Q2hpbGQudmFsdWUudHJpbSgpO1xyXG4gICAgICBnZW5lcmF0ZVByb2plY3RzKCk7XHJcbiAgICB9KTtcclxuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZCh0aXRsZSwgc3VibWl0KTtcclxuICAgIHJldHVybiBpbnB1dENvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNhdmVQcm9qZWN0ID0gKGlucHV0KSA9PiB7XHJcbiAgICBsZXQgdGl0bGUgPSBpbnB1dC5maXJzdENoaWxkLnZhbHVlLnRyaW0oKVxyXG4gICAgaWYgKCEoc3RvcmFnZS5hZGRQcm9qZWN0KHRpdGxlKSkpIHtcclxuICAgICAgbW9kYWwuc2V0UmVwZWF0TW9kYWwodGl0bGUpO1xyXG4gICAgICBtb2RhbC5zaG93TW9kYWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7IGdlbmVyYXRlUHJvamVjdHMsIGNyZWF0ZVByb2plY3RJbnB1dH07XHJcbn1cclxuXHJcbmV4cG9ydCB7UHJvamVjdEJhcn07IiwiLy8gR2VuZXJhdGVzIHByb2plY3QgaXRlbXMgdG8gYmUgcGxhY2VkIGluIERPTVxyXG5pbXBvcnQge1Byb2plY3R9IGZyb20gJy4vcHJvamVjdCc7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuXHJcblxyXG5jb25zdCBQcm9qZWN0TG9hZGVyID0gKHRpdGxlLCBtYWluQ29udGFpbmVyLCBtb2RhbCkgPT4ge1xyXG5cclxuICBsZXQgcHJvamVjdCA9IFByb2plY3QodGl0bGUpO1xyXG4gIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1haW5Db250YWluZXIuaW5uZXJUZXh0ID0gXCJcIjtcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBnZW5lcmF0ZUNvbnRlbnRzID0gKCkgPT4ge1xyXG4gICAgbGlzdENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBsZXQgYyA9IHByb2plY3QuZ2V0Q29udGVudHMoKTtcclxuICAgIGZvciAobGV0IGkgaW4gYykge1xyXG4gICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURlYWRsaW5lVmlldyhjW2ldKSk7XHJcbiAgICB9XHJcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZURlYWRsaW5lSW5wdXQoKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjcmVhdGVEZWFkbGluZUlucHV0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICB0aXRsZS5wbGFjZWhvbGRlciA9IFwiVGl0bGVcIlxyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGRlc2MuY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XHJcbiAgICBkZXNjLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZGF0ZS50eXBlID0gXCJkYXRlXCI7XHJcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpXHJcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgc3VibWl0LmlubmVyVGV4dCA9IFwiQWRkXCI7XHJcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgc2F2ZURlYWRsaW5lKGlucHV0Q29udGFpbmVyKTtcclxuICAgICAgaW5wdXRDb250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgIGdlbmVyYXRlQ29udGVudHMoKTtcclxuICAgIH0pO1xyXG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kKHRpdGxlLCBkZXNjLCBkYXRlLCBzdWJtaXQpO1xyXG4gICAgcmV0dXJuIGlucHV0Q29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgLy8gdGFrZXMgdGhlIGlucHV0IHdyYXBwZXJcclxuICBjb25zdCBzYXZlRGVhZGxpbmUgPSAoY29udGFpbmVyKSA9PiB7XHJcbiAgICBjb25zdCBjID0gY29udGFpbmVyLmNoaWxkcmVuO1xyXG4gICAgbGV0IHRpdGxlLCBkZXNjLCBkYXRlID0gbnVsbDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoY1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0aXRsZVwiKSkge1xyXG4gICAgICAgIHRpdGxlID0gY1tpXS52YWx1ZS50cmltKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJkZXNjXCIpKSB7XHJcbiAgICAgICAgZGVzYyA9IGNbaV0udmFsdWUudHJpbSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGF0ZVwiKSkge1xyXG4gICAgICAgIGRhdGUgPSBjW2ldLnZhbHVlLnRyaW0oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCEocHJvamVjdC5hZGRUb2RvKHRpdGxlLCBkZXNjLCBkYXRlKSkpIHtcclxuICAgICAgbW9kYWwuc2V0UmVwZWF0TW9kYWwodGl0bGUsIGRlc2MsIGRhdGUpO1xyXG4gICAgICBtb2RhbC5zaG93TW9kYWwoKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBjcmVhdGVEZWFkbGluZVZpZXcgPSAob2JqKSA9PiB7XHJcbiAgICBjb25zdCBzaW5nbGVUYXNrVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzaW5nbGVUYXNrVmlldy5jbGFzc0xpc3QuYWRkKFwic2luZ2xlLXRhc2stdmlld1wiKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJUYXNrVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkZXJUYXNrVmlldy5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLXRhc2stdmlld1wiKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBvYmpbXCJ0aXRsZVwiXTtcclxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGVzYy5pbm5lclRleHQgPSBvYmpbXCJkZXNjXCJdO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkYXRlLmlubmVyVGV4dCA9IG9ialtcImJ5XCJdID09IHVuZGVmaW5lZCA/IFwiXCI6IG9ialtcImJ5XCJdO1xyXG5cclxuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBkZWwuaW5uZXJUZXh0ID0gXCJkZWxldGVcIjtcclxuICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBzaW5nbGVUYXNrVmlldy5yZW1vdmUoKTtcclxuICAgICAgcHJvamVjdC5yZW1vdmVUb2RvKG9ialtcInRpdGxlXCJdLCBvYmpbXCJkZXNjXCJdLCBvYmpbXCJieVwiXSk7XHJcbiAgICB9KVxyXG5cclxuICAgIGhlYWRlclRhc2tWaWV3LmFwcGVuZCh0aXRsZSwgZGF0ZSwgZGVsKTtcclxuICAgIHNpbmdsZVRhc2tWaWV3LmFwcGVuZChoZWFkZXJUYXNrVmlldywgZGVzYyk7XHJcbiAgICByZXR1cm4gc2luZ2xlVGFza1ZpZXc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge2dlbmVyYXRlQ29udGVudHN9O1xyXG59XHJcblxyXG5leHBvcnQge1Byb2plY3RMb2FkZXJ9OyIsImNvbnN0IFByb2plY3RTdG9yYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFBST0pFQ1RMSVNUS0VZID0gXCJwcm9qZWN0LWtleXNcIjtcclxuICBjb25zdCBQUk9KRUNUSE9NRSA9IFwiaG9tZVwiXHJcbiAgbGV0IHByb2plY3RzID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBST0pFQ1RMSVNUS0VZKSA9PSBudWxsID8ge2hvbWU6IFBST0pFQ1RIT01FfSA6IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBST0pFQ1RMSVNUS0VZKSk7XHJcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFBST0pFQ1RMSVNUS0VZLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG5cclxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIHJldHVybiBwcm9qZWN0cztcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZFByb2plY3QgPSAobmFtZSkgPT4ge1xyXG4gICAgaWYgKCEobmFtZSBpbiBwcm9qZWN0cykpIHtcclxuICAgICAgcHJvamVjdHNbbmFtZV0gPSBuYW1lO1xyXG4gICAgICBzYXZlQ2hhbmdlKCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChuYW1lKSA9PiB7XHJcbiAgICBkZWxldGUgcHJvamVjdHNbbmFtZV07XHJcbiAgICBzYXZlQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzYXZlQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFBST0pFQ1RMSVNUS0VZLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0UHJvamVjdEhvbWUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gUFJPSkVDVEhPTUU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge2dldFByb2plY3RzLCBhZGRQcm9qZWN0LCBnZXRQcm9qZWN0SG9tZX07XHJcblxyXG59XHJcblxyXG5leHBvcnQge1Byb2plY3RTdG9yYWdlfTsiLCJjb25zdCBUb2RvID0gKHQsIGRlcywgZGF0KSA9PiB7XHJcbiAgbGV0IHRpdGxlID0gdDtcclxuICBsZXQgZGVzYyA9IGRlcztcclxuICBsZXQgZGF0ZSA9IGRhdDtcclxuXHJcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREZXNjID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGRlc2MgIT09IG51bGwgPyBkZXNjIDogXCJcIjtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBkYXRlICE9PSBudWxsID8gZGF0ZSA6IFwiXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge2dldFRpdGxlLCBnZXREZXNjLCBnZXREYXRlfTtcclxufTtcclxuXHJcbmNvbnN0IEV2ZW50ID0gKHRpdGxlLCBkZXNjID0gbnVsbCwgYXQgPSBudWxsKSA9PiB7XHJcblxyXG4gIGNvbnN0IHByb3RvdHlwZSA9IFRvZG8odGl0bGUsIGRlc2MsIGF0KTtcclxuICBjb25zdCBnZXREYXRlVHlwZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBcInN0YXJ0XCI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRTdHJpbmdSZXAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYCR7dGl0bGV9OiAke2Rlc2N9IGF0ICR7YXR9YDtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90b3R5cGUsIHtnZXREYXRlVHlwZSwgZ2V0U3RyaW5nUmVwfSk7XHJcbn1cclxuXHJcbmNvbnN0IERlYWRsaW5lID0gKHRpdGxlLCBkZXNjID0gbnVsbCwgYnkgPSBudWxsKSA9PiB7XHJcblxyXG4gIGNvbnN0IHByb3RvdHlwZSA9IFRvZG8odGl0bGUsIGRlc2MsIGJ5KTtcclxuICBjb25zdCBnZXREYXRlVHlwZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBcImVuZFwiO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0U3RyaW5nUmVwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGAke3RpdGxlfTogJHtkZXNjfSBieSAke2J5fWA7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b09iaiA9ICgpID0+IHtcclxuICAgIHJldHVybiB7dGl0bGUsIGRlc2MsIGJ5fVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3RvdHlwZSwge2dldERhdGVUeXBlLCBnZXRTdHJpbmdSZXAsIHRvT2JqfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7RXZlbnQsIERlYWRsaW5lfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gR2VuZXJhdGVzIGl0ZW1zIHRvIGJlIHBsYWNlZCBpbiBET01cclxuaW1wb3J0IHsgUHJvamVjdEJhciB9IGZyb20gJy4vcHJvamVjdGJhcic7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5jb25zdCBtb2RhbCA9IE1vZGFsKCk7XHJcblxyXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XHJcblxyXG5jb25zdCBwcm9qZWN0QmFyID0gUHJvamVjdEJhcihtb2RhbCwgbWFpbkNvbnRhaW5lcikuZ2VuZXJhdGVQcm9qZWN0cygpO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmQocHJvamVjdEJhciwgbWFpbkNvbnRhaW5lcik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9