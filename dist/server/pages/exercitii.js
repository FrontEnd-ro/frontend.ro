module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/exercitii": 0
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
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
/******/ 	__webpack_require__.p = "";
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/exercitii/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./client/components/Button/Button.tsx":
/*!*********************************************!*\
  !*** ./client/components/Button/Button.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\Button\\Button.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((_ref, forwardRef) => {
  let {
    icon,
    children,
    loading = false,
    className,
    disabled,
    variant = 'transparent',
    withIcon = false,
    outline = false,
    bouncy = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["icon", "children", "loading", "className", "disabled", "variant", "withIcon", "outline", "bouncy"]);

  let updatedClassName = className || '';

  if (loading) {
    updatedClassName += ' btn--loading';
  } else if (withIcon) {
    updatedClassName += ' btn--with-icon';
  } else if (outline) {
    updatedClassName += ' btn--outline';
  } else if (bouncy) {
    updatedClassName += ' btn--bouncy';
  } else {
    updatedClassName += '';
  }

  return __jsx("button", _extends({
    // eslint-disable-next-line react/button-has-type
    type: props.type || 'button',
    className: `
          btn 
          ${variant === `${variant}` ? `btn--${variant}` : 'btn--transparent'} 
          ${updatedClassName}
        `,
    disabled: loading || disabled,
    ref: forwardRef
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), withIcon && __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: icon,
    height: "24",
    className: "mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }), children);
});
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./client/components/Button/index.ts":
/*!*******************************************!*\
  !*** ./client/components/Button/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./client/components/Button/Button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./client/components/ExercisePreview/ExercisePreview.module.scss":
/*!***********************************************************************!*\
  !*** ./client/components/ExercisePreview/ExercisePreview.module.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"exercise-preview": "ExercisePreview_exercise-preview__1F_Df",
	"is--done": "ExercisePreview_is--done__2SK7h",
	"is--waiting": "ExercisePreview_is--waiting__1XnpJ",
	"has--issues": "ExercisePreview_has--issues__17DcA",
	"is--skeleton": "ExercisePreview_is--skeleton__1k3D0",
	"body": "ExercisePreview_body__YQvsw",
	"avatar": "ExercisePreview_avatar__2HVQ8",
	"tags": "ExercisePreview_tags__E8jPp"
};


/***/ }),

/***/ "./client/components/ExercisePreview/ExercisePreview.tsx":
/*!***************************************************************!*\
  !*** ./client/components/ExercisePreview/ExercisePreview.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ExercisePreview_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExercisePreview.module.scss */ "./client/components/ExercisePreview/ExercisePreview.module.scss");
/* harmony import */ var _ExercisePreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ExercisePreview_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Markdown */ "./client/components/Markdown/index.ts");
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\ExercisePreview\\ExercisePreview.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function ExercisePreview({
  href,
  viewMode,
  isPrivate = false,
  readOnly,
  feedbackCount,
  isApproved,
  exercise
}) {
  const {
    btnText,
    infoMessage
  } = getFooterTexts(viewMode, feedbackCount, readOnly, isApproved);
  let className = `${_ExercisePreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['exercise-preview']} bg-white rounded-md`;

  if (isApproved) {
    className += ` ${_ExercisePreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['is--done']}`;
  }

  if (!isApproved && readOnly) {
    className += ` ${_ExercisePreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['is--waiting']}`;
  }

  if (feedbackCount > 0) {
    className += ` ${_ExercisePreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['has--issues']}`;
  }

  return __jsx("div", {
    className: className,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: "text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, isPrivate && __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    className: "text-grey",
    width: "24",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLock"],
    title: "Exerci\u021Biu privat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 23
    }
  })), __jsx(_Markdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: `${_ExercisePreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.body} relative overflow-hidden`,
    markdownString: exercise.body,
    variant: "transparent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx("footer", {
    className: "d-flex align-items-center justify-content-between flex-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, viewMode === 'STUDENT' && infoMessage && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, infoMessage), (viewMode === 'TEACHER' || !infoMessage) && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/${exercise.user.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: _ExercisePreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: exercise.user.avatar,
    alt: "Author avatar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: `${_ExercisePreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tags} truncate d-inline-block`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, exercise.tags.map(t => __jsx("span", {
    className: "text-bold",
    key: t,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, t))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: `d-flex btn no-underline ${isApproved || readOnly || feedbackCount > 0 ? 'btn--light' : 'btn--blue'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, btnText, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    width: "16",
    className: "ml-2",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlay"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  })))));
}

function getFooterTexts(viewMode, feedbackCount, readOnly, isApproved) {
  let btnText = viewMode === 'STUDENT' ? 'Rezolvă' : 'Editează';
  let infoMessage = '';

  if (viewMode === 'STUDENT') {
    if (readOnly || isApproved) {
      btnText = 'Vezi exercițiul';
    } else if (feedbackCount) {
      btnText = 'Continuă';
    }

    if (isApproved) {
      infoMessage = '✔';
    } else if (feedbackCount) {
      infoMessage = `${feedbackCount} problem${feedbackCount > 1 ? 'e' : 'ă'} de rezolvat`;
    } else if (readOnly) {
      infoMessage = 'În așteptarea feedback-ului';
    }
  }

  return {
    btnText,
    infoMessage
  };
}

/* harmony default export */ __webpack_exports__["default"] = (ExercisePreview);

/***/ }),

/***/ "./client/components/ExercisePreview/ExercisePreviewSkeleton.tsx":
/*!***********************************************************************!*\
  !*** ./client/components/ExercisePreview/ExercisePreviewSkeleton.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ExercisePreview_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExercisePreview.module.scss */ "./client/components/ExercisePreview/ExercisePreview.module.scss");
/* harmony import */ var _ExercisePreview_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ExercisePreview_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\ExercisePreview\\ExercisePreviewSkeleton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ExercisePreviewSkeleton() {
  return __jsx("div", {
    className: `${_ExercisePreview_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['exercise-preview']} ${_ExercisePreview_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['is--skeleton']}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _ExercisePreview_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })), __jsx("footer", {
    className: "text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, ' '))));
}

/* harmony default export */ __webpack_exports__["default"] = (ExercisePreviewSkeleton);

/***/ }),

/***/ "./client/components/ExercisePreview/index.ts":
/*!****************************************************!*\
  !*** ./client/components/ExercisePreview/index.ts ***!
  \****************************************************/
/*! exports provided: default, ExercisePreviewSkeleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExercisePreview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExercisePreview */ "./client/components/ExercisePreview/ExercisePreview.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ExercisePreview__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ExercisePreviewSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExercisePreviewSkeleton */ "./client/components/ExercisePreview/ExercisePreviewSkeleton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExercisePreviewSkeleton", function() { return _ExercisePreviewSkeleton__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./client/components/ExercisesPage/ExercisesPage.module.scss":
/*!*******************************************************************!*\
  !*** ./client/components/ExercisesPage/ExercisesPage.module.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"exercises-page": "ExercisesPage_exercises-page__3iEQn",
	"lesson-section": "ExercisesPage_lesson-section__1sUuh",
	"exercises-wrapper": "ExercisesPage_exercises-wrapper__2Oeo2"
};


/***/ }),

/***/ "./client/components/ExercisesPage/ExercisesPage.tsx":
/*!***********************************************************!*\
  !*** ./client/components/ExercisesPage/ExercisesPage.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/services/Constants */ "./client/services/Constants.ts");
/* harmony import */ var _services_Exercise_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/services/Exercise.service */ "./client/services/Exercise.service.ts");
/* harmony import */ var _services_LessonExercise_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/services/LessonExercise.service */ "./client/services/LessonExercise.service.ts");
/* harmony import */ var _ExercisePreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ExercisePreview */ "./client/components/ExercisePreview/index.ts");
/* harmony import */ var _PageContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PageContainer */ "./client/components/PageContainer/index.ts");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Spinner */ "./client/components/Spinner/index.ts");
/* harmony import */ var _shared_SharedConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/../shared/SharedConstants */ "./shared/SharedConstants.js");
/* harmony import */ var _shared_SharedConstants__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_shared_SharedConstants__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ExercisesPage_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ExercisesPage.module.scss */ "./client/components/ExercisesPage/ExercisesPage.module.scss");
/* harmony import */ var _ExercisesPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ExercisesPage_module_scss__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\ExercisesPage\\ExercisesPage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function ExercisesPage({
  user
}) {
  const {
    0: submissions,
    1: setSubmissions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const {
    0: lessonExercises,
    1: setLessonExercises
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const isLoggedIn = !!user.info;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _services_LessonExercise_service__WEBPACK_IMPORTED_MODULE_4__["default"].getAllLessonExercises().then(exercises => setLessonExercises(exercises)).catch(err => console.error(err));

    if (isLoggedIn) {
      _services_Exercise_service__WEBPACK_IMPORTED_MODULE_3__["default"].getSolvedExercises().then(resp => setSubmissions(resp)).catch(err => console.error(err));
    } else {
      setSubmissions([]);
    }
  }, []); // merge submission & exercise data to show
  // ExercisePreview component together with submitted/preview data

  const mergedData = {};

  if (submissions && lessonExercises) {
    lessonExercises.forEach(ex => {
      const {
        lesson
      } = ex;
      const matchedSubmission = submissions.find(sub => sub.exercise._id === ex._id);
      mergedData[lesson] = mergedData[lesson] || [];

      if (matchedSubmission) {
        mergedData[lesson].push(matchedSubmission);
      } else {
        mergedData[lesson].push({
          _id: ex._id,
          exercise: ex,
          feedbacks: [],
          status: null,
          readOnly: false
        });
      }
    });
  }

  return __jsx(_PageContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _ExercisesPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a['exercises-page'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, " Exerci\u021Bii "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, "Focusul nostru e s\u0103 \xEE\u021Bi oferim", ' ', __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, "feedback"), ' ', ", pentru c\u0103 \u0219tim c\u0103 aceasta este cea mai bun\u0103 metod\u0103 de a \xEEnv\u0103\u021Ba.", ' '), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, "A\u0219a c\u0103 dup\u0103 ce parcurgi lec\u021Biile de pe platform\u0103 \u0219i ne trimi\u021Bi solu\u021Biile exerci\u021Biilor, noi, developeri cu experien\u021B\u0103 \xEE\u021Bi vom face", ' ', __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "code review."), ' '), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "Asta pentru c\u0103 vrem s\u0103 ajut\u0103m c\xE2t mai mult\u0103 lume s\u0103 \xEEnve\u021Be despre acest domeniu pe care \xEEl consider\u0103m unul dintre cele mai faine \u0219i nu vom pune un pre\u021B pe aceast\u0103 experien\u021B\u0103. \u0218i noi am fost la \xEEnceput \xEEn drumul nostru \u0219i \u0219tim c\xE2t de greu este de unul singur. A\u0219a c\u0103 tot ce se \xEEnt\xE2mpl\u0103 aici e un", ' ', __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "efort de comunitate, pentru comunitate"), "."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, "Po\u021Bi afla mai multe detalii despre noi", __jsx("a", {
    href: "https://frontend.ro/intro/despre-noi#introducere",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, " aici"), "."), (!lessonExercises || !submissions) && __jsx(_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    showText: true,
    text: "\xCEnc\u0103rc\u0103m exerci\u021Biile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }), Object.keys(mergedData).map(lesson => __jsx("section", {
    className: _ExercisesPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a['lesson-section'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, Object(_services_Constants__WEBPACK_IMPORTED_MODULE_2__["getLessonById"])(lesson).type), Object(_services_Constants__WEBPACK_IMPORTED_MODULE_2__["getLessonById"])(lesson).title), __jsx("div", {
    className: _ExercisesPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a['exercises-wrapper'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, mergedData[lesson].map(submission => __jsx(_ExercisePreview__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: submission._id,
    exercise: submission.exercise,
    href: `rezolva/${submission.exercise._id}`,
    viewMode: "STUDENT",
    feedbackCount: submission.feedbacks.filter(f => f.type === 'improvement').length,
    isApproved: submission.status === _shared_SharedConstants__WEBPACK_IMPORTED_MODULE_8__["SUBMISSION_STATUS"].DONE,
    readOnly: [_shared_SharedConstants__WEBPACK_IMPORTED_MODULE_8__["SUBMISSION_STATUS"].AWAITING_REVIEW, _shared_SharedConstants__WEBPACK_IMPORTED_MODULE_8__["SUBMISSION_STATUS"].DONE].includes(submission.status),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }))))));
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const connector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps);
/* harmony default export */ __webpack_exports__["default"] = (connector(ExercisesPage));

/***/ }),

/***/ "./client/components/ExercisesPage/index.ts":
/*!**************************************************!*\
  !*** ./client/components/ExercisesPage/index.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExercisesPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExercisesPage */ "./client/components/ExercisesPage/ExercisesPage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ExercisesPage__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./client/components/Footer/Footer.module.scss":
/*!*****************************************************!*\
  !*** ./client/components/Footer/Footer.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Footer_footer__1FP9t"
};


/***/ }),

/***/ "./client/components/Footer/Footer.tsx":
/*!*********************************************!*\
  !*** ./client/components/Footer/Footer.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/services/Constants */ "./client/services/Constants.ts");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.module.scss */ "./client/components/Footer/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\Footer\\Footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Footer() {
  return __jsx("footer", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "branding",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, " FrontEnd.ro "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, " \xA9 2020 FrontEnd.ro"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, " All rights reserved")), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, " About "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "mailto:hello@frontend.ro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "hello@frontend.ro")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Made with", ' ', __jsx("span", {
    className: "text-red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "\u2764"), ' ', "by the open-source community")), __jsx("section", {
    className: "social",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, " Social "), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: _services_Constants__WEBPACK_IMPORTED_MODULE_1__["GITHUB_URL"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "GitHub")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://twitter.com/FrontEndRo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Twitter")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://facebook.com/FrontEndRo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Facebook")))));
}

/***/ }),

/***/ "./client/components/Footer/index.ts":
/*!*******************************************!*\
  !*** ./client/components/Footer/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./client/components/Footer/Footer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./client/components/Header/AccountTooltip/AccountTooltip.module.scss":
/*!****************************************************************************!*\
  !*** ./client/components/Header/AccountTooltip/AccountTooltip.module.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"account-tooltip": "AccountTooltip_account-tooltip__2Njas",
	"avatar": "AccountTooltip_avatar__1mgw-"
};


/***/ }),

/***/ "./client/components/Header/AccountTooltip/AccountTooltip.tsx":
/*!********************************************************************!*\
  !*** ./client/components/Header/AccountTooltip/AccountTooltip.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_User_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/services/User.service */ "./client/services/User.service.ts");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/Button */ "./client/components/Button/index.ts");
/* harmony import */ var _AccountTooltip_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AccountTooltip.module.scss */ "./client/components/Header/AccountTooltip/AccountTooltip.module.scss");
/* harmony import */ var _AccountTooltip_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_AccountTooltip_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_Hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/services/Hooks */ "./client/services/Hooks.ts");
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/redux/user/user.actions */ "./client/redux/user/user.actions.ts");
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\Header\\AccountTooltip\\AccountTooltip.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function AccountTooltip({
  user,
  dispatch
}) {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const logout = () => {
    _services_User_service__WEBPACK_IMPORTED_MODULE_4__["default"].logout().then(() => {
      router.replace('/').then(() => {
        dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_8__["logoutUser"])());
      });
    });
  };

  const toggleToolip = () => setIsOpen(!isOpen);

  Object(_services_Hooks__WEBPACK_IMPORTED_MODULE_7__["useOutsideClick"])(ref, () => setIsOpen(false));
  return __jsx("div", {
    ref: ref,
    className: _AccountTooltip_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a['account-tooltip'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _AccountTooltip_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.avatar,
    onClick: toggleToolip,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "pointer",
    title: "Toggle menu",
    src: user.info.avatar,
    alt: `${user.info.name} avatar`,
    width: "32",
    "data-toggle": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })), isOpen && __jsx("ul", {
    className: "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/${user.info.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "no-underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "Profilul t\u0103u"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/settings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "no-underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "Set\u0103rile contului"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    onClick: logout,
    className: "no-underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Sign out"))));
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const connector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps);
/* harmony default export */ __webpack_exports__["default"] = (connector(AccountTooltip));

/***/ }),

/***/ "./client/components/Header/Header.module.scss":
/*!*****************************************************!*\
  !*** ./client/components/Header/Header.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mobile-menu": "Header_mobile-menu__Wvp1i",
	"header": "Header_header__3vwEu",
	"menu": "Header_menu__3YUZq",
	"logo": "Header_logo__1lIYU",
	"menuOpenBtn": "Header_menuOpenBtn__3GRWd",
	"hamburger": "Header_hamburger__sJJzN",
	"title": "Header_title__1gpDb",
	"header-menu-open": "Header_header-menu-open__2g0Aa",
	"menuCloseBtn": "Header_menuCloseBtn__auZMO",
	"demo-label": "Header_demo-label__at4Hv",
	"header-tooltip": "Header_header-tooltip__2bt6A",
	"header-tooltip--no-scroll": "Header_header-tooltip--no-scroll__y9mBa",
	"nav-menu": "Header_nav-menu__1D6MY",
	"aside-menu": "Header_aside-menu__KtXbP",
	"nav-wrapper": "Header_nav-wrapper__IXOyk"
};


/***/ }),

/***/ "./client/components/Header/Header.tsx":
/*!*********************************************!*\
  !*** ./client/components/Header/Header.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AccountTooltip_AccountTooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AccountTooltip/AccountTooltip */ "./client/components/Header/AccountTooltip/AccountTooltip.tsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/Button */ "./client/components/Button/index.ts");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header.module.scss */ "./client/components/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layout_AsideMenu_AsideMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout/AsideMenu/AsideMenu */ "./client/components/layout/AsideMenu/AsideMenu.tsx");
/* harmony import */ var _NavLinks_NavLinks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../NavLinks/NavLinks */ "./client/components/NavLinks/NavLinks.tsx");
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\Header\\Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function Header({
  href = '/',
  demoPage,
  onMenuClick,
  isLoggedIn,
  withNavMenu = false
}) {
  const {
    0: isNavMenuOpen,
    1: setIsNavMenuOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("header", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between w-100 align-items-center h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, onMenuClick && __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: onMenuClick,
    className: `header__menu-btn ${_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.menu}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBars"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("img", {
    srcSet: "/logo.png 500w, /logo-square--S.jpg 165w",
    sizes: "(max-width: 600px) 165px, 500px",
    src: "/logo.png",
    alt: "FrontEnd.ro logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }))), demoPage && __jsx("p", {
    className: `${_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['demo-label']} text-white mx-5 text-bold`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "DEMO")), __jsx("div", {
    className: "d-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, isLoggedIn ? __jsx(_AccountTooltip_AccountTooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }) : null, withNavMenu && __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['nav-menu'],
    variant: "light",
    onClick: () => setIsNavMenuOpen(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Nav", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLink"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  })))), withNavMenu && __jsx(_layout_AsideMenu_AsideMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    hideScrollOnBody: true,
    title: "FrontEnd.ro",
    isOpen: isNavMenuOpen,
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['aside-menu'],
    close: () => setIsNavMenuOpen(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['nav-wrapper'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(_NavLinks_NavLinks__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }))));
}

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.user.info
  };
}

const connector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps);
/* harmony default export */ __webpack_exports__["default"] = (connector(Header));

/***/ }),

/***/ "./client/components/Header/index.ts":
/*!*******************************************!*\
  !*** ./client/components/Header/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./client/components/Header/Header.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./client/components/Markdown/Markdown.module.scss":
/*!*********************************************************!*\
  !*** ./client/components/Markdown/Markdown.module.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"markdown": "Markdown_markdown__3YRc1",
	"is--transparent": "Markdown_is--transparent__3ug0y"
};


/***/ }),

/***/ "./client/components/Markdown/Markdown.tsx":
/*!*************************************************!*\
  !*** ./client/components/Markdown/Markdown.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Markdown_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Markdown.module.scss */ "./client/components/Markdown/Markdown.module.scss");
/* harmony import */ var _Markdown_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Markdown_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\Markdown\\Markdown.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Markdown({
  markdownString,
  className = '',
  variant = 'none'
}) {
  const markdownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! marked */ "marked", 7)).then(module => {
      const marked = module.default;
      marked.setOptions({
        sanitize: true
      });
      markdownRef.current.innerHTML = marked(markdownString);
    });
  }, [markdownString]);
  return __jsx("div", {
    className: `${_Markdown_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.markdown} ${variant === 'transparent' && _Markdown_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['is--transparent']} ${className}`,
    ref: markdownRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Markdown);

/***/ }),

/***/ "./client/components/Markdown/index.ts":
/*!*********************************************!*\
  !*** ./client/components/Markdown/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Markdown */ "./client/components/Markdown/Markdown.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Markdown__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./client/components/NavLinks/NavLinks.module.scss":
/*!*********************************************************!*\
  !*** ./client/components/NavLinks/NavLinks.module.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav-links": "NavLinks_nav-links__2_AH6",
	"login": "NavLinks_login__3f2cj"
};


/***/ }),

/***/ "./client/components/NavLinks/NavLinks.tsx":
/*!*************************************************!*\
  !*** ./client/components/NavLinks/NavLinks.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_User_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/services/User.service */ "./client/services/User.service.ts");
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/redux/user/user.actions */ "./client/redux/user/user.actions.ts");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/Button */ "./client/components/Button/index.ts");
/* harmony import */ var _NavLinks_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavLinks.module.scss */ "./client/components/NavLinks/NavLinks.module.scss");
/* harmony import */ var _NavLinks_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_NavLinks_module_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\NavLinks\\NavLinks.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function NavLinks({
  user,
  dispatch
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const isLoggedIn = !!user.info;

  const logout = () => {
    _services_User_service__WEBPACK_IMPORTED_MODULE_4__["default"].logout().then(() => {
      router.replace('/').then(() => {
        dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_5__["logoutUser"])());
      });
    });
  };

  return __jsx("nav", {
    className: _NavLinks_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['nav-links'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("ol", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/lectii",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Lec\u021Bii"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/exercitii",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Exerci\u021Bii"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/evenimente",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Evenimente"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/slides",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "Slide-uri"))), isLoggedIn ? __jsx("li", {
    className: _NavLinks_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.login,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "transparent",
    onClick: logout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Sign out")) : __jsx("li", {
    className: _NavLinks_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.login,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/auth?next=${encodeURIComponent(router.asPath)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "Intr\u0103 \xEEn cont")))));
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const connector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps);
/* harmony default export */ __webpack_exports__["default"] = (connector(NavLinks));

/***/ }),

/***/ "./client/components/PageContainer/PageContainer.module.scss":
/*!*******************************************************************!*\
  !*** ./client/components/PageContainer/PageContainer.module.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "PageContainer_container__2_0UY",
	"page-container": "PageContainer_page-container__1y9nJ"
};


/***/ }),

/***/ "./client/components/PageContainer/PageContainer.tsx":
/*!***********************************************************!*\
  !*** ./client/components/PageContainer/PageContainer.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageContainer.module.scss */ "./client/components/PageContainer/PageContainer.module.scss");
/* harmony import */ var _PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\PageContainer\\PageContainer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function PageContainer({
  className,
  children
}) {
  return __jsx("main", {
    className: `${_PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['page-container']} ${className || ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, children));
}

/* harmony default export */ __webpack_exports__["default"] = (PageContainer);

/***/ }),

/***/ "./client/components/PageContainer/index.ts":
/*!**************************************************!*\
  !*** ./client/components/PageContainer/index.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageContainer */ "./client/components/PageContainer/PageContainer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PageContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./client/components/SEOTags.tsx":
/*!***************************************!*\
  !*** ./client/components/SEOTags.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SEOTags; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\SEOTags.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function SEOTags({
  title,
  description,
  url,
  shareImage = 'https://frontend.ro/main-seo-image.jpg',
  bigShareImage = true,
  children
}) {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, title), __jsx("meta", {
    name: "description",
    content: description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:url",
    content: url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:title",
    content: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:description",
    content: description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:site_name",
    content: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:locale",
    content: "ro_RO",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image",
    content: shareImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image:type",
    content: "image/jpeg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image:width",
    content: bigShareImage ? '1200' : '400',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image:height",
    content: bigShareImage ? '630' : '400',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:image",
    content: shareImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@FrontEndRo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "@FrontEndRo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: bigShareImage ? 'summary_large_image' : 'summary',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), children);
}

/***/ }),

/***/ "./client/components/Spinner/Spinner.module.scss":
/*!*******************************************************!*\
  !*** ./client/components/Spinner/Spinner.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"spinner": "Spinner_spinner__2JMxo",
	"spinnerAnimation": "Spinner_spinnerAnimation__2XRKA"
};


/***/ }),

/***/ "./client/components/Spinner/Spinner.tsx":
/*!***********************************************!*\
  !*** ./client/components/Spinner/Spinner.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spinner_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner.module.scss */ "./client/components/Spinner/Spinner.module.scss");
/* harmony import */ var _Spinner_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Spinner_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\Spinner\\Spinner.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Spinner = ({
  className = '',
  showText = false,
  text = 'Se încarcă'
}) => {
  return __jsx("div", {
    className: `${_Spinner_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.spinner} ${className}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, showText && __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, text));
};

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./client/components/Spinner/index.ts":
/*!********************************************!*\
  !*** ./client/components/Spinner/index.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spinner */ "./client/components/Spinner/Spinner.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Spinner__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./client/components/layout/AsideMenu/AsideMenu.module.scss":
/*!******************************************************************!*\
  !*** ./client/components/layout/AsideMenu/AsideMenu.module.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"aside-menu": "AsideMenu_aside-menu__yd0ED",
	"aside-menu--open": "AsideMenu_aside-menu--open__2PbT7"
};


/***/ }),

/***/ "./client/components/layout/AsideMenu/AsideMenu.tsx":
/*!**********************************************************!*\
  !*** ./client/components/layout/AsideMenu/AsideMenu.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_Hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/services/Hooks */ "./client/services/Hooks.ts");
/* harmony import */ var _AsideMenu_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AsideMenu.module.scss */ "./client/components/layout/AsideMenu/AsideMenu.module.scss");
/* harmony import */ var _AsideMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AsideMenu_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\layout\\AsideMenu\\AsideMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






function AsideMenu({
  title,
  isOpen,
  close,
  children,
  className = '',
  hideScrollOnBody = false
}) {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(_services_Hooks__WEBPACK_IMPORTED_MODULE_3__["useOutsideClick"])(ref, close);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!hideScrollOnBody) {
      return;
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isOpen]);
  return __jsx("aside", {
    ref: ref,
    className: `${_AsideMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['aside-menu']}${isOpen ? ` ${_AsideMenu_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['aside-menu--open']}` : ''} ${className} bg-black text-white`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: "aside-menu__header d-flex justify-content-between align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, title), isOpen && __jsx("button", {
    type: "button",
    onClick: close,
    className: "btn--transparent text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTimes"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }))), children);
}

/* harmony default export */ __webpack_exports__["default"] = (AsideMenu);

/***/ }),

/***/ "./client/redux/user/user.actions.ts":
/*!*******************************************!*\
  !*** ./client/redux/user/user.actions.ts ***!
  \*******************************************/
/*! exports provided: USER_INFO, USER_NOTIFICATIONS, USER_LOGOUT, loadInfo, addNotification, loadNotificationsSuccess, markNotificationAsRead, markNotificationAsUnread, markAllAsRead, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INFO", function() { return USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_NOTIFICATIONS", function() { return USER_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGOUT", function() { return USER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadInfo", function() { return loadInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNotification", function() { return addNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadNotificationsSuccess", function() { return loadNotificationsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markNotificationAsRead", function() { return markNotificationAsRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markNotificationAsUnread", function() { return markNotificationAsUnread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markAllAsRead", function() { return markAllAsRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
const LOAD_INFO = 'user/LOAD_INFO';
const ADD_NOTIFICATIONS = 'user/ADD_NOTIFICATIONS';
const LOAD_NOTIFICATIONS = 'user/LOAD_NOTIFICATIONS';
const MARK_AS_READ = 'user/MARK_NOTIFICATIONS_AS_READ';
const MARK_AS_UNREAD = 'user/MARK_NOTIFICATIONS_AS_UNREAD';
const MARK_ALL_AS_READ = 'user/MARK_ALL_NOTIFICATIONS_AS_READ';
const USER_INFO = {
  LOAD: LOAD_INFO
};
const USER_NOTIFICATIONS = {
  ADD: ADD_NOTIFICATIONS,
  LOAD: LOAD_NOTIFICATIONS,
  MARK_AS_READ,
  MARK_AS_UNREAD,
  MARK_ALL_AS_READ
};
const USER_LOGOUT = 'user/LOGOUT';
/** User info */

const loadInfo = info => ({
  type: LOAD_INFO,
  payload: info
});
/** Notifications */

const addNotification = (notification, index = 0) => ({
  type: ADD_NOTIFICATIONS,
  payload: {
    notification,
    index
  }
});
const loadNotificationsSuccess = newNotifications => ({
  type: LOAD_NOTIFICATIONS,
  payload: {
    newNotifications
  }
});
const markNotificationAsRead = id => ({
  type: MARK_AS_READ,
  payload: {
    id
  }
});
const markNotificationAsUnread = id => ({
  type: MARK_AS_UNREAD,
  payload: {
    id
  }
});
const markAllAsRead = () => ({
  type: MARK_ALL_AS_READ,
  payload: null
});
const logoutUser = () => ({
  type: USER_LOGOUT,
  payload: null
});

/***/ }),

/***/ "./client/services/ClientMonitoring.ts":
/*!*********************************************!*\
  !*** ./client/services/ClientMonitoring.ts ***!
  \*********************************************/
/*! exports provided: LogEventType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogEventType", function() { return LogEventType; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-restricted-globals */
let LogEventType;

(function (LogEventType) {
  LogEventType["ROUTE"] = "ROUTE";
  LogEventType["END"] = "END";
})(LogEventType || (LogEventType = {}));

class ClientMonitoring {}

_defineProperty(ClientMonitoring, "endpoint", 'https://frontendro-default-rtdb.firebaseio.com/logs.json');

_defineProperty(ClientMonitoring, "log", type => {
  const log = {
    type,
    url: location.pathname,
    timestamp: new Date().toString()
  };
  return fetch(ClientMonitoring.endpoint, {
    method: 'POST',
    body: JSON.stringify(log),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).catch(err => {
    console.error('[ClientMonitoring.log]', err);
  });
});

_defineProperty(ClientMonitoring, "destroy", () => {
  const log = {
    type: LogEventType.END,
    url: location.pathname,
    timestamp: new Date().toString()
  };
  navigator.sendBeacon(ClientMonitoring.endpoint, JSON.stringify(log));
});

/* harmony default export */ __webpack_exports__["default"] = (ClientMonitoring);

/***/ }),

/***/ "./client/services/Constants.ts":
/*!**************************************!*\
  !*** ./client/services/Constants.ts ***!
  \**************************************/
/*! exports provided: LESSONS, getUpcomingLesson, getLessonById, GITHUB_ORG_URL, GITHUB_URL, IMAGES_MIME_TYPES, IMAGES_EXTENSIONS, FEEDBACK_TYPES, MONACO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSONS", function() { return LESSONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpcomingLesson", function() { return getUpcomingLesson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLessonById", function() { return getLessonById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITHUB_ORG_URL", function() { return GITHUB_ORG_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITHUB_URL", function() { return GITHUB_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGES_MIME_TYPES", function() { return IMAGES_MIME_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGES_EXTENSIONS", function() { return IMAGES_EXTENSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_TYPES", function() { return FEEDBACK_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONACO", function() { return MONACO; });
/* harmony import */ var _contributors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contributors */ "./client/services/contributors.ts");

const LESSONS = [
/** Intro lessons */
{
  id: 'despre-noi',
  written: true,
  title: 'Despre noi',
  description: 'Ce ne face diferiți și de ce ai vrea să înveți alături de noi.',
  url: '/intro/despre-noi',
  type: 'intro',
  contributors: [_contributors__WEBPACK_IMPORTED_MODULE_0__["Pava"]],
  cover: '/images/lessons/lesson-0__cover.svg'
}, {
  id: 'vreau-sa-ajut',
  written: false,
  title: 'Cum poți ajuta',
  description: 'Ne dorim ca acest proiect să fie un efort de comunitate, deci dacă-ți place ce facem aici contribuie și tu!',
  url: '/intro/vreau-sa-ajut',
  type: 'intro'
}, {
  id: 'ce-este-frontend-ul',
  written: false,
  title: 'Ce este FrontEnd-ul?',
  description: 'Află ce înseamnă să faci aplicații Web și de ce e mult mai interesant decât ai putea crede.',
  url: '/intro/ce-este-frontend-ul',
  type: 'intro'
}, {
  id: 'vs-code',
  written: false,
  title: 'VisualStudio Code',
  description: 'Scurtă introducere în programul pe care-l vom folosi să scriem cod.',
  url: '/intro/vs-code',
  type: 'intro',
  contributors: [_contributors__WEBPACK_IMPORTED_MODULE_0__["Diana"]]
},
/** HTML lessons */
{
  id: 'despre-html',
  written: false,
  title: 'Despre HTML',
  description: 'Învață principiile de bază ale acestui limbaj și scrie primele linii de cod.',
  url: '/html/despre-html',
  type: 'html'
}, {
  id: 'structura-de-baza-a-oricarei-aplicatii',
  written: false,
  title: 'Structura de bază a oricărei aplicații web',
  description: 'Indiferent ce tip de aplicație creezi, toate au aceeași structură generală despre care vom vorbi aici.',
  url: '/html/structura-de-baza-a-oricarei-aplicatii',
  type: 'html'
}, {
  id: 'validarea-paginilor-html',
  written: false,
  title: 'Validarea paginilor HTML',
  description: 'Deși putem "scăpa" fără să scriem HTML valid, acest lucru nu e deloc încurajat. Hai să vedem de ce, și cum ne putem asigura că scriem cod corect.',
  url: '/html/validarea-paginilor-html',
  type: 'html'
}, {
  id: 'texte',
  written: true,
  title: 'Texte',
  description: 'Avem la dispoziție mai multe elemente când vine vorba de texte, iar aici învățăm când și cum să le folosim.',
  url: '/html/texte',
  type: 'html',
  contributors: [_contributors__WEBPACK_IMPORTED_MODULE_0__["Diana"]],
  cover: '/images/lessons/text-elements__cover.svg'
}, {
  id: 'liste',
  written: true,
  title: 'Liste',
  description: 'Hai să vorbim despre cele 3 tipuri de liste și când să-l folosești pe fiecare.',
  url: '/html/liste',
  contributors: [_contributors__WEBPACK_IMPORTED_MODULE_0__["Diana"]],
  cover: '/images/lessons/lists__cover.svg',
  type: 'html'
}, {
  id: 'containere',
  written: false,
  title: 'Containere',
  description: 'Am parcurs câteva elemente de bază, dar nu am vorbit despre cum le organizăm pentru a crea layout-uri mai complexe.',
  url: '/html/containere',
  type: 'html'
}, {
  id: 'imagini',
  written: true,
  title: 'Imagini',
  description: 'Fără imagini web-ul ar fi mult mai plicticos, deci hai să vedem cum le putem adăuga și care sunt cele mai bune practici legate de acestea.',
  contributors: [_contributors__WEBPACK_IMPORTED_MODULE_0__["Pava"]],
  cover: '/images/lessons/images__cover.svg',
  url: '/html/imagini',
  type: 'html'
}, {
  id: 'audio-video',
  written: true,
  title: 'Video și Audio',
  description: 'Imaginile aduc mai multă viață site-urilor noastre, dar putem merge un pas mai departe folosind elemente video și audio.',
  cover: '/images/lessons/audio-and-video__cover.svg',
  contributors: [_contributors__WEBPACK_IMPORTED_MODULE_0__["SebastianLatkolic"]],
  url: '/html/audio-video',
  type: 'html'
}, {
  id: 'formulare',
  written: false,
  title: 'Formulare',
  url: '/html/formulare',
  description: 'Cu ce elemente putem construi formulare moderne, și care sunt cele mai bune practici legate de acestea.',
  contributors: [_contributors__WEBPACK_IMPORTED_MODULE_0__["RobertParasca"]],
  type: 'html'
},
/** CSS Lessons */
{
  id: 'despre-css',
  written: false,
  title: 'Despre CSS',
  description: 'Învață principiile de bază ale stilizării paginilor Web și fii inspirat de tot ce e posibil cu acest limbaj.',
  url: '/css/despre-css',
  type: 'css'
}, {
  id: 'moduri-stilizare',
  written: true,
  title: 'Cele 3 moduri de stilizare',
  description: 'Browserul ne oferă mai multe moduri prin care putem aplica stiluri paginilor noastre. Hai să vobim despre fiecare în parte.',
  url: '/css/moduri-stilizare',
  cover: '/images/lessons/styling-methods__cover.svg',
  type: 'css',
  contributors: [_contributors__WEBPACK_IMPORTED_MODULE_0__["DanielHutanu"]]
}, {
  id: 'taguri-clase-si-id-uri',
  written: false,
  title: 'Tag-uri, clase și id-uri',
  description: 'Pentru a stiliza un element, sau mai multe, trebuie să le putem diferenția față de celelalte. Putem face acest lucru după tag, clase sau id-uri.',
  url: '/css/taguri-clase-si-id-uri',
  type: 'css',
  contributors: [_contributors__WEBPACK_IMPORTED_MODULE_0__["NicolaeMaties"]]
}, {
  id: 'box-model',
  written: false,
  title: 'Box model',
  description: 'Deși unele site-uri sunt cu adevărat WOW, la bază fiecare element e doar un dreptunghi cu câteva proprietăți mai speciale. Aici învățăm despre ele.',
  url: '/css/box-model',
  type: 'css',
  contributors: [_contributors__WEBPACK_IMPORTED_MODULE_0__["CatalinPopusoi"]]
}, {
  id: 'tranzitii',
  written: false,
  title: 'Tranziții',
  description: 'Extrem de folosite în multe aplcații, acestea adaugă interactivitate paginilor noastre.',
  url: '/css/tranzitii',
  type: 'css'
}, {
  id: 'animatii',
  written: false,
  title: 'Animații',
  description: 'Similare cu tranzițiile dar mult mai puternice. Singura limită e creativitatea!',
  url: '/css/animatii',
  type: 'css'
}, {
  id: 'media-queries',
  written: false,
  title: 'CSS Media Queries',
  description: 'Folosind această tehnică putem aplica stiluri diferite în funcție de dimensiunea ecranului sau alte caracteristici ale dispozitivului. Așa putem face site-ul să arate bine și pe telefon și pe calculator.',
  url: '/css/media-queries',
  type: 'css'
},
/** JavaScript Lessons */
{
  id: 'despre-javascript',
  written: false,
  title: 'Despre JavaScript',
  description: 'Cu HTML și CSS putem crea o experiență vizuală plăcută, dar lipsită de interactivitate. Aici intră în scenă JavaScript, limbajul cu care totul e posibil.',
  url: '/javascript/despre-javascript',
  type: 'javascript'
}, {
  id: 'cum-sa-gandim-ca-un-programator',
  written: false,
  title: 'Cum să gândim ca un programator',
  description: 'Înainte să "sărim" în progamarea efectivă, hai să vorbim puțin despre ce înseamnă să scrii cod și cum să abordezi această nouă provocare.',
  url: '/javascript/cum-sa-gandim-ca-un-programator',
  type: 'javascript'
}, {
  id: 'variabile-si-tipuri-primitive',
  written: false,
  title: 'Variabile și tipuri primitive',
  description: 'Ce sunt variabilele, de ce avem nevoie de ele și cum le folosim.',
  url: '/javascript/variabile-si-tipuri-primitive',
  type: 'javascript'
}, {
  id: 'obiecte-si-array-uri',
  written: false,
  title: 'Obiecte și Array-uri',
  description: 'Dacă până acum am avut variabile cu o singură valoare, în Obiecte și Array-uri putem reține mai multe informații ce au legătură între ele.',
  url: '/javascript/obiecte-si-array-uri',
  type: 'javascript'
}, {
  id: 'functii',
  written: false,
  title: 'Funcții',
  description: 'Organizează codul în "părți" reutilizabile pentru o mai bună arhitectură.',
  url: '/javascript/functii',
  type: 'javascript'
},
/** Extra Lessons */
{
  id: 'devtools',
  written: false,
  title: 'DevTools',
  description: 'Browser-ele ne oferă multe tool-uri care ne măresc productivitatea extrem de mult. Hai să învățăm să le folosim în această lecție.',
  url: '/javascript/devtools',
  type: 'extra'
}, {
  id: 'graceful-degradation',
  written: false,
  title: 'Graceful Degradation',
  description: 'Un mod de a ne construi aplicațiile astfel încât și utilizatorii de pe dispozitive mai vechi să aibă o experiență decentă',
  url: '/concepte/graceful-degradation',
  type: 'extra'
}, {
  id: 'biblioteci-si-framework-uri',
  written: false,
  title: 'Biblioteci și Framework-uri',
  description: 'Când vei lucra la proiecte "reale" alături de alți developeri, vei vedea că de multe ori refolosim cod scris de alții sub formă de biblioteci sau framework-uri.',
  url: '/concepte/biblioteci-si-framework-uri',
  type: 'extra'
}];
function getUpcomingLesson(pathname) {
  const upcomingLesson = LESSONS.find(article => pathname.includes(article.url));
  return upcomingLesson || null;
}
function getLessonById(id) {
  const match = LESSONS.find(lesson => lesson.id === id);
  return match || null;
}
const GITHUB_ORG_URL = 'https://github.com/FrontEnd-ro';
const GITHUB_URL = 'https://github.com/FrontEnd-ro/frontend.ro';
const IMAGES_MIME_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/svg+xml'];
const IMAGES_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp', 'svg'];
const FEEDBACK_TYPES = {
  PRAISE: 'praise',
  OPINION: 'opinion',
  IMPROVEMENT: 'improvement'
};
const MONACO = {
  TOPIC_MARKDOWN_MAX_LENGTH: 2048,
  EXERCISE_MARKDOWN_MAX_LENGTH: 5000,
  EVENTS: {
    CURSOR: 'C',
    SELECTION: 'SE',
    MODEL: 'M',
    SCROLL: 'SC'
  }
};

/***/ }),

/***/ "./client/services/Exercise.service.ts":
/*!*********************************************!*\
  !*** ./client/services/Exercise.service.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Http.service */ "./client/services/Http.service.ts");


class ExerciseService {
  static getExercise(exerciseId) {
    return _Http_service__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${"/api"}/exercises/${exerciseId}`).then(resp => resp.json());
  }

  static uploadMedia(name, file) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);
    return _Http_service__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${"/api"}/exercises/media`, formData).then(resp => resp.json());
  }

  static createExercise(payload) {
    return _Http_service__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${"/api"}/exercises`, payload).then(resp => resp.json());
  }

  static updateExercise(id, payload) {
    return _Http_service__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${"/api"}/exercises/${id}`, payload).then(resp => resp.json());
  }

  static getSolvedExercises() {
    return _Http_service__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${"/api"}/exercises/solved`).then(response => response.json());
  }

  static getCreatedExercises() {
    return _Http_service__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${"/api"}/exercises`).then(response => response.json());
  }

  static getPublicCreatedExercises(username) {
    return _Http_service__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${"/api"}/exercises/public/${username}`).then(response => response.json());
  }

  static delete(id) {
    return _Http_service__WEBPACK_IMPORTED_MODULE_0__["default"].delete(`${"/api"}/exercises/${id}`);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ExerciseService);

/***/ }),

/***/ "./client/services/Hooks.ts":
/*!**********************************!*\
  !*** ./client/services/Hooks.ts ***!
  \**********************************/
/*! exports provided: useOutsideClick, useClipboard, withClientMonitoring, withSmoothScroll, useLoggedInOnly, useAnonymousOnly, withAuthModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOutsideClick", function() { return useOutsideClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useClipboard", function() { return useClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withClientMonitoring", function() { return withClientMonitoring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSmoothScroll", function() { return withSmoothScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoggedInOnly", function() { return useLoggedInOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnonymousOnly", function() { return useAnonymousOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthModal", function() { return withAuthModal; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ClientMonitoring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClientMonitoring */ "./client/services/ClientMonitoring.ts");
/* harmony import */ var _sweet_alert_SweetAlert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sweet-alert/SweetAlert.service */ "./client/services/sweet-alert/SweetAlert.service.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils */ "./client/services/Utils.ts");






function useOutsideClick(ref, handler) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

function useClipboard(ref, onCopy = _Utils__WEBPACK_IMPORTED_MODULE_4__["noop"]) {
  const initClipboard = ClipboardJS => {
    let clipboard = new ClipboardJS(ref.current);
    clipboard.on('success', e => {
      e.clearSelection();
      _sweet_alert_SweetAlert_service__WEBPACK_IMPORTED_MODULE_3__["default"].toast({
        text: 'Successfully copied to clipboard.'
      });
      onCopy();
    });
    clipboard.on('error', () => {
      _sweet_alert_SweetAlert_service__WEBPACK_IMPORTED_MODULE_3__["default"].toast({
        type: 'error',
        text: "Seems like your browser doesn't support clipboard copying. You have to copy it manually..."
      });
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! clipboard */ "clipboard", 7)).then(module => {
      initClipboard(module.default);
    });
  }, []);
}

function withClientMonitoring() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // eslint-disable-next-line no-restricted-globals
    if (!location.host.includes('frontend.ro')) {
      return;
    }

    _ClientMonitoring__WEBPACK_IMPORTED_MODULE_2__["default"].log(_ClientMonitoring__WEBPACK_IMPORTED_MODULE_2__["LogEventType"].ROUTE);
    window.addEventListener('beforeunload', _ClientMonitoring__WEBPACK_IMPORTED_MODULE_2__["default"].destroy);
  }, []);
}

function withSmoothScroll(ref) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    ref.current.style.scrollBehavior = 'smooth';
    return () => {
      ref.current.style.scrollBehavior = 'initial';
    };
  }, []);
}

function useLoggedInOnly(isLoggedIn, path) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();

  if (!isLoggedIn && path) {
    if (false) {}
  }
}

function useAnonymousOnly(router, isLoggedIn, nextHref) {
  if (isLoggedIn && nextHref) {
    if (false) {}
  }
}
/**
 * If the user is not logged in when this method is called,
 * let's show the Login/Register modal and authenticate/register.
 */


function withAuthModal(isLoggedIn, cb) {
  return (...props) => {
    if (isLoggedIn) {
      cb(...props);
    } else {
      __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ~/components/login/Login */ "./client/components/login/Login.tsx")).then(module => {
        _sweet_alert_SweetAlert_service__WEBPACK_IMPORTED_MODULE_3__["default"].content(module.default, 'Autentifică-te', {
          onSuccess(userInfo) {
            _sweet_alert_SweetAlert_service__WEBPACK_IMPORTED_MODULE_3__["default"].closePopup();
            cb(...props, userInfo);
          }

        });
      });
    }
  };
}



/***/ }),

/***/ "./client/services/Http.service.ts":
/*!*****************************************!*\
  !*** ./client/services/Http.service.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sweet_alert_SweetAlert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sweet-alert/SweetAlert.service */ "./client/services/sweet-alert/SweetAlert.service.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Http {
  get(url, options = {}) {
    return this.httpGeneric(url, _objectSpread(_objectSpread({}, options), {}, {
      method: 'GET'
    }));
  }

  post(url, body = {}, options = {}) {
    return this.httpGeneric(url, _objectSpread(_objectSpread({}, options), {}, {
      method: 'POST',
      body
    }));
  }

  put(url, body = {}, options = {}) {
    return this.httpGeneric(url, _objectSpread(_objectSpread({}, options), {}, {
      method: 'PUT',
      body
    }));
  }

  patch(url, body = {}, options = {}) {
    return this.httpGeneric(url, _objectSpread(_objectSpread({}, options), {}, {
      method: 'PATCH',
      body
    }));
  }

  delete(url, body = {}, options = {}) {
    return this.httpGeneric(url, _objectSpread(_objectSpread({}, options), {}, {
      method: 'DELETE',
      body
    }));
  } // eslint-disable-next-line class-methods-use-this


  httpGeneric(url, options = {}) {
    const headersInit = {
      'content-type': 'application/json'
    };

    if (options.body && !(options.body instanceof FormData)) {
      // eslint-disable-next-line no-param-reassign
      options.body = JSON.stringify(options.body);
    } else {
      delete headersInit['content-type'];
    }

    return fetch(url, _objectSpread({
      headers: new Headers(headersInit),
      credentials: 'include'
    }, options)).then(resp => {
      if (resp.ok) {
        return resp;
      }

      return resp.json().then(jsonResp => {
        throw jsonResp;
      });
    }).catch(err => {
      if (!err || !err.code || err.code === 500) {
        _sweet_alert_SweetAlert_service__WEBPACK_IMPORTED_MODULE_0__["default"].error({
          text: err.message || 'Refresh-uiește pagina și încearcă din nou.',
          buttonText: 'Ok!'
        });
      }

      throw err;
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Http());

/***/ }),

/***/ "./client/services/LessonExercise.service.ts":
/*!***************************************************!*\
  !*** ./client/services/LessonExercise.service.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Http.service */ "./client/services/Http.service.ts");


class LessonExerciseService {
  static getAllLessonExercises() {
    return _Http_service__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${"/api"}/lesson-exercises`).then(resp => resp.json());
  }

  static getLessonExercise(exerciseId) {
    return _Http_service__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${"/api"}/lesson-exercises/${exerciseId}`).then(resp => resp.json());
  }

  static getAllExercisesForLessons(lessonId) {
    return _Http_service__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${"/api"}/lesson-exercises/lesson/${lessonId}`).then(resp => resp.json());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LessonExerciseService);

/***/ }),

/***/ "./client/services/User.service.ts":
/*!*****************************************!*\
  !*** ./client/services/User.service.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/services/Utils */ "./client/services/Utils.ts");
/* harmony import */ var _Http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Http.service */ "./client/services/Http.service.ts");


const MOCK_NOTIFICATIONS = [{
  _id: Object(_services_Utils__WEBPACK_IMPORTED_MODULE_0__["uuid"])(),
  username: 'Diana123',
  name: 'Diana',
  avatar: 'https://www.gravatar.com/avatar/9d4d790eb85e56d6524faed8a883d6cb?s=500&d=404',
  message: 'added a new exercise',
  timestamp: Date.now(),
  isUnread: true,
  url: ''
}, {
  _id: Object(_services_Utils__WEBPACK_IMPORTED_MODULE_0__["uuid"])(),
  username: 'AlexPava',
  name: 'Alex',
  avatar: 'https://joeschmoe.io/api/v1/josh',
  message: 'sent you a message',
  timestamp: Date.now(),
  isUnread: true,
  url: ''
}, {
  _id: Object(_services_Utils__WEBPACK_IMPORTED_MODULE_0__["uuid"])(),
  username: 'Andrei82',
  name: 'Andrei',
  avatar: 'https://joeschmoe.io/api/v1/jon',
  message: 'added a new exercise',
  timestamp: Date.now(),
  isUnread: true,
  url: ''
}, {
  _id: Object(_services_Utils__WEBPACK_IMPORTED_MODULE_0__["uuid"])(),
  username: 'AntoniaBebe',
  name: 'Antonia',
  avatar: 'https://joeschmoe.io/api/v1/jess',
  message: 'sent you a message',
  timestamp: Date.now(),
  isUnread: true,
  url: ''
}, {
  _id: Object(_services_Utils__WEBPACK_IMPORTED_MODULE_0__["uuid"])(),
  username: 'Raluca99',
  name: 'Raluca',
  avatar: 'https://joeschmoe.io/api/v1/jane',
  message: 'added a new topic',
  timestamp: Date.now(),
  isUnread: true,
  url: ''
}];
const LOAD_DURATION = 1000;

class UserService {
  static ping() {
    return _Http_service__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${"/api"}/auth/ping`).then(resp => resp.json());
  }

  static subscribe({
    name,
    email
  }) {
    return _Http_service__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${"/api"}/auth/subscribe`, {
      name,
      email
    }).then(resp => resp.json());
  }

  static login({
    emailOrUsername,
    password
  }) {
    return _Http_service__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${"/api"}/auth/login`, {
      emailOrUsername,
      password
    }).then(resp => resp.json());
  }

  static logout() {
    return _Http_service__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${"/api"}/auth/logout`);
  }

  static checkUsername(username) {
    return _Http_service__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${"/api"}/auth/check-username/${username}`);
  }

  static register({
    email,
    username,
    password
  }) {
    return _Http_service__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${"/api"}/auth/register`, {
      email,
      username,
      password
    }).then(resp => resp.json());
  }

  static updateName(payload) {
    return _Http_service__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${"/api"}/auth/name`, payload).then(resp => resp.json());
  }

  static updateDescription(payload) {
    return _Http_service__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${"/api"}/auth/description`, payload).then(resp => resp.json());
  }

  static updateUsername(payload) {
    return _Http_service__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${"/api"}/auth/username`, payload).then(resp => resp.json());
  }

  static updateEmail(payload) {
    return _Http_service__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${"/api"}/auth/email`, payload).then(resp => resp.json());
  }

  static updatePassword(payload) {
    return _Http_service__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${"/api"}/auth/password`, payload).then(resp => resp.json());
  }

  static uploadAvatar(file) {
    const formData = new FormData();
    formData.append('file', file);
    return _Http_service__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${"/api"}/auth/avatar`, formData).then(resp => resp.json());
  }

  static delete(password) {
    return _Http_service__WEBPACK_IMPORTED_MODULE_1__["default"].delete(`${"/api"}/auth`, {
      password
    });
  }

  static wait(mili) {
    return new Promise(resolve => setTimeout(resolve, mili));
  }

  static async getNotifications(page = 0) {
    await UserService.wait(LOAD_DURATION);
    return MOCK_NOTIFICATIONS;
  }

  static async markAsRead(id) {
    await UserService.wait(LOAD_DURATION);
  }

  static async markAllAsRead() {
    await UserService.wait(LOAD_DURATION);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserService);

/***/ }),

/***/ "./client/services/Utils.ts":
/*!**********************************!*\
  !*** ./client/services/Utils.ts ***!
  \**********************************/
/*! exports provided: uuid, noop, timeAgo, formatDate, alphabeticSortComparator, nextUntitledFilename */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeAgo", function() { return timeAgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphabeticSortComparator", function() { return alphabeticSortComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextUntitledFilename", function() { return nextUntitledFilename; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid__WEBPACK_IMPORTED_MODULE_0__["v4"]; });

 // eslint-disable-next-line @typescript-eslint/no-empty-function

function noop() {}
/**
 * Here we make the function timeAgo to format a JavaScript Date as a
 * string stating the time elapsed. We parse the time, and show it
 * depending on when it was submitted:
 *
 * ➤ Just now - if the submission was under one minute ago
 * ➤ X minutes ago or Y hours ago
 * ➤ Yesterday
 * ➤ X days ago - up to 3 days
 * ➤ 10 Sept 2020 if it as more than 3 days ago
 */

const timeAgo = date => {
  let ms = Date.now() - date.getTime();
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  if (seconds < 60) {
    return 'Chiar acum';
  }

  if (minutes < 60) {
    return minutes === 1 ? `acum ${minutes} minut` : `acum ${minutes} minute `;
  }

  if (hours < 24) {
    return hours === 1 ? `acum ${hours} oră` : `acum ${hours} ore`;
  }

  if (hours > 24 && hours < 24 * 2) {
    return 'Ieri';
  }

  if (days < 3) {
    return days === 1 ? `acum ${days} zi` : `acum ${days} zile`;
  }

  if (days > 3) {
    return formatDate(date);
  }

  return formatDate(date);
};
const formatDate = dateToFormat => {
  //  Convert a string like '2020-09-20T00:00:00' into '20 September 2020'
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let date = new Date(dateToFormat);
  let str = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  return str;
};
const alphabeticSortComparator = (nameA, nameB) => {
  let lowercaseNameA = nameA.toLowerCase();
  let lowercaseNameB = nameB.toLowerCase();

  if (lowercaseNameA === lowercaseNameB) {
    return 0;
  }

  return lowercaseNameA < lowercaseNameB ? -1 : 1;
};
const nextUntitledFilename = (existingNames, NAME_BASE = 'Untitled file') => {
  let existingUntitledNumbers = [];
  existingNames.forEach(name => {
    if (name === NAME_BASE) {
      existingUntitledNumbers.push(0);
      return;
    }

    let group = new RegExp(`^${NAME_BASE} [(](.+)[)]$`, 'g').exec(name);

    if (group) {
      existingUntitledNumbers.push(Number(group[1]));
    }
  });
  existingUntitledNumbers.sort((nrA, nrB) => nrA - nrB);
  let newName = NAME_BASE;
  let count = 0;
  let i = 0;
  existingUntitledNumbers.forEach(nr => {
    if (nr === 0 && newName === NAME_BASE || nr === count) {
      count = nr + 1;
      newName = `${NAME_BASE} (${count})`;
    }
  });
  return newName;
};

/***/ }),

/***/ "./client/services/contributors.ts":
/*!*****************************************!*\
  !*** ./client/services/contributors.ts ***!
  \*****************************************/
/*! exports provided: Pava, Pava2, Diana, Ira, NicolaeMaties, CatalinPopusoi, RobertParasca, DanielHutanu, SebastianLatkolic, GeorgeMarianMorosac */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pava", function() { return Pava; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pava2", function() { return Pava2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diana", function() { return Diana; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ira", function() { return Ira; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NicolaeMaties", function() { return NicolaeMaties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalinPopusoi", function() { return CatalinPopusoi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RobertParasca", function() { return RobertParasca; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanielHutanu", function() { return DanielHutanu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebastianLatkolic", function() { return SebastianLatkolic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeorgeMarianMorosac", function() { return GeorgeMarianMorosac; });
const Pava = {
  name: 'Păvă',
  avatar: '/images/contributors/iampava.png',
  url: 'https://iampava.com',
  shortBio: 'Fondatorul FrontEnd.ro'
};
const Pava2 = {
  name: 'Păvă',
  avatar: '/images/contributors/iampava_2.jpg',
  url: 'https://iampava.com',
  shortBio: 'Fondatorul FrontEnd.ro'
};
const Diana = {
  name: 'Diana',
  avatar: '/images/contributors/andreeatoma.jpg',
  url: 'https://github.com/andreeatoma',
  shortBio: 'Open-source contributor'
};
const Ira = {
  name: 'Ira',
  avatar: '/images/contributors/iramelnic.jpg',
  url: 'https://www.facebook.com/melnic.ira'
};
const NicolaeMaties = {
  name: 'Nicolae',
  avatar: '/images/contributors/nmaties.jpg',
  url: 'https://github.com/nmaties'
};
const CatalinPopusoi = {
  name: 'Cătălin',
  avatar: '/images/contributors/catalinpopusoi.jpg',
  url: 'https://github.com/catalinpopusoi',
  shortBio: 'FrontEnd developer la Endava'
};
const RobertParasca = {
  name: 'Robert',
  avatar: '/images/contributors/robertparasca.png',
  url: 'https://www.facebook.com/robert.parasca/'
};
const DanielHutanu = {
  name: 'Daniel',
  avatar: '/images/contributors/danielhutanu.jpg',
  url: 'https://www.linkedin.com/in/danielhutanu22/'
};
const SebastianLatkolic = {
  name: 'Sebastian',
  avatar: '/images/contributors/juppsy.jpg',
  url: 'https://github.com/juppsy'
};
const GeorgeMarianMorosac = {
  name: 'George',
  avatar: '/images/contributors/georgemarianmorosac.jpg',
  url: 'https://www.linkedin.com/in/george-marian-morosac-7381508a/',
  shortBio: 'SDE la Amazon'
};

/***/ }),

/***/ "./client/services/sweet-alert/SweetAlert.module.scss":
/*!************************************************************!*\
  !*** ./client/services/sweet-alert/SweetAlert.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"swal--dark": "SweetAlert_swal--dark__3zWH8",
	"swal2-content": "SweetAlert_swal2-content__2jsk4",
	"swal-actions": "SweetAlert_swal-actions__xiJDM"
};


/***/ }),

/***/ "./client/services/sweet-alert/SweetAlert.service.ts":
/*!***********************************************************!*\
  !*** ./client/services/sweet-alert/SweetAlert.service.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/noop */ "lodash/noop");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SweetAlert_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SweetAlert.module.scss */ "./client/services/sweet-alert/SweetAlert.module.scss");
/* harmony import */ var _SweetAlert_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SweetAlert_module_scss__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let Toast = null;

class SweetAlertService {
  static confirm({
    title,
    text,
    html = '',
    confirmButtonText = 'Ok',
    preConfirm = lodash_noop__WEBPACK_IMPORTED_MODULE_0___default.a
  }) {
    return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! sweetalert2 */ "sweetalert2", 7)).then(swal => {
      return swal.default.fire({
        title,
        text,
        html,
        icon: 'warning',
        showCancelButton: true,
        customClass: {
          actions: _SweetAlert_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['swal-actions'],
          confirmButton: 'btn btn--blue',
          cancelButton: 'btn btn--danger'
        },
        confirmButtonText,
        focusConfirm: false,
        buttonsStyling: false,
        reverseButtons: true,
        heightAuto: false,
        preConfirm,
        allowOutsideClick: () => !swal.default.isLoading()
      });
    });
  }

  static error({
    title = 'Oops!',
    text,
    buttonText
  }) {
    return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! sweetalert2 */ "sweetalert2", 7)).then(swal => {
      return swal.default.fire({
        title,
        text,
        icon: 'error',
        customClass: {
          confirmButton: 'btn btn--light'
        },
        confirmButtonText: buttonText,
        buttonsStyling: false,
        heightAuto: false
      });
    });
  }

  static toast({
    text,
    href = null,
    timer = 3000,
    type = 'success'
  }) {
    SweetAlertService.init();
    let target = document.body;

    if (href) {
      SweetAlertService.anchorTag.href = href;
      target = SweetAlertService.anchorTag;
    }

    return new Promise(resolve => {
      if (Toast !== null) {
        return resolve();
      }

      Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! sweetalert2 */ "sweetalert2", 7)).then(swal => {
        Toast = swal.default.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          background: '#1b1b15',
          customClass: {
            container: _SweetAlert_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['swal--dark']
          }
        });
        resolve();
      }).catch(err => {
        console.error(err);
      });
    }).then(() => {
      Toast.fire({
        icon: type,
        title: type === 'error' ? text || 'Oups, something went wrong...' : text,
        target,
        timer
      });
    });
  }

  static async content(ReactComponent, title = null, props = {}) {
    const [contentModule, swalModule] = await Promise.all([Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! sweetalert2-react-content */ "sweetalert2-react-content", 7)), Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! sweetalert2 */ "sweetalert2", 7))]);
    const ReactSwal = contentModule.default(swalModule.default);
    return ReactSwal.fire({
      title,
      html: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ReactComponent, _objectSpread({
        closeModal: () => swalModule.default.close()
      }, props)),
      customClass: {
        container: _SweetAlert_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['swal2-content']
      },
      showConfirmButton: false,
      heightAuto: false
    });
  }

  static async closePopup(result) {
    const swal = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! sweetalert2 */ "sweetalert2", 7));
    swal.default.close(result);
  }

  static toggleLoading() {
    Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! sweetalert2 */ "sweetalert2", 7)).then(swal => swal.default.getConfirmButton().classList.toggle('btn--loading'));
  }

  static init() {
    SweetAlertService.anchorTag = document.createElement('a');
    document.body.appendChild(SweetAlertService.anchorTag);
  }

}

_defineProperty(SweetAlertService, "anchorTag", void 0);

/* harmony default export */ __webpack_exports__["default"] = (SweetAlertService);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/exercitii/index.tsx":
/*!***********************************!*\
  !*** ./pages/exercitii/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/Header */ "./client/components/Header/index.ts");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Footer */ "./client/components/Footer/index.ts");
/* harmony import */ var _components_SEOTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/SEOTags */ "./client/components/SEOTags.tsx");
/* harmony import */ var _components_ExercisesPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/ExercisesPage */ "./client/components/ExercisesPage/index.ts");
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\pages\\exercitii\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_SEOTags__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Exerci\u021Bii | FrontEnd.ro",
    description: "Rezolv\u0103 exerci\u021Bii de FrontEnd \u0219i prime\u0219te feedback pentru solu\u021Biile tale",
    url: "https://FrontEnd.ro/exercitii",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    withNavMenu: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx(_components_ExercisesPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })));
});

/***/ }),

/***/ "./shared/SharedConstants.js":
/*!***********************************!*\
  !*** ./shared/SharedConstants.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Constants shared between server & client */
const MAX_MEDIA_MB = 10;
const MAX_MEDIA_BYTES = MAX_MEDIA_MB * 1024 * 1024;
const USER_ROLE = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT: 'student'
};
const SUBMISSION_STATUS = {
  IN_PROGRESS: 'in_progress',
  AWAITING_REVIEW: 'awaiting_review',
  DONE: 'done'
};
const LESSONS_WITH_EXERCISES = ['texte', 'liste', 'imagini']; // Use NodeJS style exports because this file is consumed
// both from the server & client

module.exports = {
  MAX_MEDIA_MB,
  MAX_MEDIA_BYTES,
  USER_ROLE,
  SUBMISSION_STATUS,
  LESSONS_WITH_EXERCISES
};

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "clipboard":
/*!****************************!*\
  !*** external "clipboard" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clipboard");

/***/ }),

/***/ "lodash/debounce":
/*!**********************************!*\
  !*** external "lodash/debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),

/***/ "lodash/noop":
/*!******************************!*\
  !*** external "lodash/noop" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/noop");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ }),

/***/ "sweetalert2-react-content":
/*!********************************************!*\
  !*** external "sweetalert2-react-content" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert2-react-content");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9CdXR0b24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvRXhlcmNpc2VQcmV2aWV3L0V4ZXJjaXNlUHJldmlldy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9FeGVyY2lzZVByZXZpZXcvRXhlcmNpc2VQcmV2aWV3LnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9FeGVyY2lzZVByZXZpZXcvRXhlcmNpc2VQcmV2aWV3U2tlbGV0b24udHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0V4ZXJjaXNlUHJldmlldy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9FeGVyY2lzZXNQYWdlL0V4ZXJjaXNlc1BhZ2UubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvRXhlcmNpc2VzUGFnZS9FeGVyY2lzZXNQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9FeGVyY2lzZXNQYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0hlYWRlci9BY2NvdW50VG9vbHRpcC9BY2NvdW50VG9vbHRpcC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9IZWFkZXIvQWNjb3VudFRvb2x0aXAvQWNjb3VudFRvb2x0aXAudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL01hcmtkb3duL01hcmtkb3duLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL01hcmtkb3duL01hcmtkb3duLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYXJrZG93bi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9OYXZMaW5rcy9OYXZMaW5rcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9OYXZMaW5rcy9OYXZMaW5rcy50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvUGFnZUNvbnRhaW5lci9QYWdlQ29udGFpbmVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1BhZ2VDb250YWluZXIvUGFnZUNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvUGFnZUNvbnRhaW5lci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TRU9UYWdzLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TcGlubmVyL1NwaW5uZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvU3Bpbm5lci9TcGlubmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TcGlubmVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2xheW91dC9Bc2lkZU1lbnUvQXNpZGVNZW51Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2xheW91dC9Bc2lkZU1lbnUvQXNpZGVNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdXgvdXNlci91c2VyLmFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NlcnZpY2VzL0NsaWVudE1vbml0b3JpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NlcnZpY2VzL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VydmljZXMvRXhlcmNpc2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VydmljZXMvSG9va3MudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NlcnZpY2VzL0h0dHAuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VydmljZXMvTGVzc29uRXhlcmNpc2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VydmljZXMvVXNlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zZXJ2aWNlcy9VdGlscy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VydmljZXMvY29udHJpYnV0b3JzLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9zZXJ2aWNlcy9zd2VldC1hbGVydC9Td2VldEFsZXJ0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9zZXJ2aWNlcy9zd2VldC1hbGVydC9Td2VldEFsZXJ0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2V4ZXJjaXRpaS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL1NoYXJlZENvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGlwYm9hcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvZGVib3VuY2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvbm9vcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hcmtlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd2VldGFsZXJ0MlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3ZWV0YWxlcnQyLXJlYWN0LWNvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsiQnV0dG9uIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwiaWNvbiIsImNoaWxkcmVuIiwibG9hZGluZyIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwidmFyaWFudCIsIndpdGhJY29uIiwib3V0bGluZSIsImJvdW5jeSIsInByb3BzIiwidXBkYXRlZENsYXNzTmFtZSIsInR5cGUiLCJFeGVyY2lzZVByZXZpZXciLCJocmVmIiwidmlld01vZGUiLCJpc1ByaXZhdGUiLCJyZWFkT25seSIsImZlZWRiYWNrQ291bnQiLCJpc0FwcHJvdmVkIiwiZXhlcmNpc2UiLCJidG5UZXh0IiwiaW5mb01lc3NhZ2UiLCJnZXRGb290ZXJUZXh0cyIsInN0eWxlcyIsImZhTG9jayIsImJvZHkiLCJ1c2VyIiwidXNlcm5hbWUiLCJhdmF0YXIiLCJ0YWdzIiwibWFwIiwidCIsImZhUGxheSIsIkV4ZXJjaXNlUHJldmlld1NrZWxldG9uIiwiRXhlcmNpc2VzUGFnZSIsInN1Ym1pc3Npb25zIiwic2V0U3VibWlzc2lvbnMiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsImxlc3NvbkV4ZXJjaXNlcyIsInNldExlc3NvbkV4ZXJjaXNlcyIsImlzTG9nZ2VkSW4iLCJpbmZvIiwidXNlRWZmZWN0IiwiTGVzc29uRXhlcmNpc2VTZXJ2aWNlIiwiZ2V0QWxsTGVzc29uRXhlcmNpc2VzIiwidGhlbiIsImV4ZXJjaXNlcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiRXhlcmNpc2VTZXJ2aWNlIiwiZ2V0U29sdmVkRXhlcmNpc2VzIiwicmVzcCIsIm1lcmdlZERhdGEiLCJmb3JFYWNoIiwiZXgiLCJsZXNzb24iLCJtYXRjaGVkU3VibWlzc2lvbiIsImZpbmQiLCJzdWIiLCJfaWQiLCJwdXNoIiwiZmVlZGJhY2tzIiwic3RhdHVzIiwiT2JqZWN0Iiwia2V5cyIsImdldExlc3NvbkJ5SWQiLCJ0aXRsZSIsInN1Ym1pc3Npb24iLCJmaWx0ZXIiLCJmIiwibGVuZ3RoIiwiU1VCTUlTU0lPTl9TVEFUVVMiLCJET05FIiwiQVdBSVRJTkdfUkVWSUVXIiwiaW5jbHVkZXMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3RvciIsImNvbm5lY3QiLCJGb290ZXIiLCJmb290ZXIiLCJHSVRIVUJfVVJMIiwiQWNjb3VudFRvb2x0aXAiLCJkaXNwYXRjaCIsInJlZiIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsImlzT3BlbiIsInNldElzT3BlbiIsImxvZ291dCIsIlVzZXJTZXJ2aWNlIiwicmVwbGFjZSIsImxvZ291dFVzZXIiLCJ0b2dnbGVUb29saXAiLCJ1c2VPdXRzaWRlQ2xpY2siLCJuYW1lIiwiSGVhZGVyIiwiZGVtb1BhZ2UiLCJvbk1lbnVDbGljayIsIndpdGhOYXZNZW51IiwiaXNOYXZNZW51T3BlbiIsInNldElzTmF2TWVudU9wZW4iLCJoZWFkZXIiLCJtZW51IiwiZmFCYXJzIiwibG9nbyIsImZhTGluayIsIk1hcmtkb3duIiwibWFya2Rvd25TdHJpbmciLCJtYXJrZG93blJlZiIsIm1vZHVsZSIsIm1hcmtlZCIsImRlZmF1bHQiLCJzZXRPcHRpb25zIiwic2FuaXRpemUiLCJjdXJyZW50IiwiaW5uZXJIVE1MIiwibWFya2Rvd24iLCJOYXZMaW5rcyIsImxvZ2luIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYXNQYXRoIiwiUGFnZUNvbnRhaW5lciIsImNvbnRhaW5lciIsIlNFT1RhZ3MiLCJkZXNjcmlwdGlvbiIsInVybCIsInNoYXJlSW1hZ2UiLCJiaWdTaGFyZUltYWdlIiwiU3Bpbm5lciIsInNob3dUZXh0IiwidGV4dCIsInNwaW5uZXIiLCJBc2lkZU1lbnUiLCJjbG9zZSIsImhpZGVTY3JvbGxPbkJvZHkiLCJkb2N1bWVudCIsInN0eWxlIiwib3ZlcmZsb3ciLCJmYVRpbWVzIiwiTE9BRF9JTkZPIiwiQUREX05PVElGSUNBVElPTlMiLCJMT0FEX05PVElGSUNBVElPTlMiLCJNQVJLX0FTX1JFQUQiLCJNQVJLX0FTX1VOUkVBRCIsIk1BUktfQUxMX0FTX1JFQUQiLCJVU0VSX0lORk8iLCJMT0FEIiwiVVNFUl9OT1RJRklDQVRJT05TIiwiQUREIiwiVVNFUl9MT0dPVVQiLCJsb2FkSW5mbyIsInBheWxvYWQiLCJhZGROb3RpZmljYXRpb24iLCJub3RpZmljYXRpb24iLCJpbmRleCIsImxvYWROb3RpZmljYXRpb25zU3VjY2VzcyIsIm5ld05vdGlmaWNhdGlvbnMiLCJtYXJrTm90aWZpY2F0aW9uQXNSZWFkIiwiaWQiLCJtYXJrTm90aWZpY2F0aW9uQXNVbnJlYWQiLCJtYXJrQWxsQXNSZWFkIiwiTG9nRXZlbnRUeXBlIiwiQ2xpZW50TW9uaXRvcmluZyIsImxvZyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ0aW1lc3RhbXAiLCJEYXRlIiwidG9TdHJpbmciLCJmZXRjaCIsImVuZHBvaW50IiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJIZWFkZXJzIiwiRU5EIiwibmF2aWdhdG9yIiwic2VuZEJlYWNvbiIsIkxFU1NPTlMiLCJ3cml0dGVuIiwiY29udHJpYnV0b3JzIiwiUGF2YSIsImNvdmVyIiwiRGlhbmEiLCJTZWJhc3RpYW5MYXRrb2xpYyIsIlJvYmVydFBhcmFzY2EiLCJEYW5pZWxIdXRhbnUiLCJOaWNvbGFlTWF0aWVzIiwiQ2F0YWxpblBvcHVzb2kiLCJnZXRVcGNvbWluZ0xlc3NvbiIsInVwY29taW5nTGVzc29uIiwiYXJ0aWNsZSIsIm1hdGNoIiwiR0lUSFVCX09SR19VUkwiLCJJTUFHRVNfTUlNRV9UWVBFUyIsIklNQUdFU19FWFRFTlNJT05TIiwiRkVFREJBQ0tfVFlQRVMiLCJQUkFJU0UiLCJPUElOSU9OIiwiSU1QUk9WRU1FTlQiLCJNT05BQ08iLCJUT1BJQ19NQVJLRE9XTl9NQVhfTEVOR1RIIiwiRVhFUkNJU0VfTUFSS0RPV05fTUFYX0xFTkdUSCIsIkVWRU5UUyIsIkNVUlNPUiIsIlNFTEVDVElPTiIsIk1PREVMIiwiU0NST0xMIiwiZ2V0RXhlcmNpc2UiLCJleGVyY2lzZUlkIiwiSHR0cFNlcnZpY2UiLCJnZXQiLCJwcm9jZXNzIiwianNvbiIsInVwbG9hZE1lZGlhIiwiZmlsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwb3N0IiwiY3JlYXRlRXhlcmNpc2UiLCJ1cGRhdGVFeGVyY2lzZSIsInB1dCIsInJlc3BvbnNlIiwiZ2V0Q3JlYXRlZEV4ZXJjaXNlcyIsImdldFB1YmxpY0NyZWF0ZWRFeGVyY2lzZXMiLCJkZWxldGUiLCJoYW5kbGVyIiwibGlzdGVuZXIiLCJldmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1c2VDbGlwYm9hcmQiLCJvbkNvcHkiLCJub29wIiwiaW5pdENsaXBib2FyZCIsIkNsaXBib2FyZEpTIiwiY2xpcGJvYXJkIiwib24iLCJlIiwiY2xlYXJTZWxlY3Rpb24iLCJTd2VldEFsZXJ0U2VydmljZSIsInRvYXN0Iiwid2l0aENsaWVudE1vbml0b3JpbmciLCJob3N0IiwiUk9VVEUiLCJ3aW5kb3ciLCJkZXN0cm95Iiwid2l0aFNtb290aFNjcm9sbCIsInNjcm9sbEJlaGF2aW9yIiwidXNlTG9nZ2VkSW5Pbmx5IiwicGF0aCIsInVzZUFub255bW91c09ubHkiLCJuZXh0SHJlZiIsIndpdGhBdXRoTW9kYWwiLCJjYiIsImNvbnRlbnQiLCJvblN1Y2Nlc3MiLCJ1c2VySW5mbyIsImNsb3NlUG9wdXAiLCJIdHRwIiwib3B0aW9ucyIsImh0dHBHZW5lcmljIiwicGF0Y2giLCJoZWFkZXJzSW5pdCIsImNyZWRlbnRpYWxzIiwib2siLCJqc29uUmVzcCIsImNvZGUiLCJtZXNzYWdlIiwiYnV0dG9uVGV4dCIsImdldExlc3NvbkV4ZXJjaXNlIiwiZ2V0QWxsRXhlcmNpc2VzRm9yTGVzc29ucyIsImxlc3NvbklkIiwiTU9DS19OT1RJRklDQVRJT05TIiwidXVpZCIsIm5vdyIsImlzVW5yZWFkIiwiTE9BRF9EVVJBVElPTiIsInBpbmciLCJzdWJzY3JpYmUiLCJlbWFpbCIsImVtYWlsT3JVc2VybmFtZSIsInBhc3N3b3JkIiwiY2hlY2tVc2VybmFtZSIsInJlZ2lzdGVyIiwidXBkYXRlTmFtZSIsInVwZGF0ZURlc2NyaXB0aW9uIiwidXBkYXRlVXNlcm5hbWUiLCJ1cGRhdGVFbWFpbCIsInVwZGF0ZVBhc3N3b3JkIiwidXBsb2FkQXZhdGFyIiwid2FpdCIsIm1pbGkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJnZXROb3RpZmljYXRpb25zIiwicGFnZSIsIm1hcmtBc1JlYWQiLCJ0aW1lQWdvIiwiZGF0ZSIsIm1zIiwiZ2V0VGltZSIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwiaG91cnMiLCJkYXlzIiwiZm9ybWF0RGF0ZSIsImRhdGVUb0Zvcm1hdCIsIm1vbnRocyIsInN0ciIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiYWxwaGFiZXRpY1NvcnRDb21wYXJhdG9yIiwibmFtZUEiLCJuYW1lQiIsImxvd2VyY2FzZU5hbWVBIiwidG9Mb3dlckNhc2UiLCJsb3dlcmNhc2VOYW1lQiIsIm5leHRVbnRpdGxlZEZpbGVuYW1lIiwiZXhpc3RpbmdOYW1lcyIsIk5BTUVfQkFTRSIsImV4aXN0aW5nVW50aXRsZWROdW1iZXJzIiwiZ3JvdXAiLCJSZWdFeHAiLCJleGVjIiwiTnVtYmVyIiwic29ydCIsIm5yQSIsIm5yQiIsIm5ld05hbWUiLCJjb3VudCIsImkiLCJuciIsInNob3J0QmlvIiwiUGF2YTIiLCJJcmEiLCJHZW9yZ2VNYXJpYW5Nb3Jvc2FjIiwiVG9hc3QiLCJjb25maXJtIiwiaHRtbCIsImNvbmZpcm1CdXR0b25UZXh0IiwicHJlQ29uZmlybSIsInN3YWwiLCJmaXJlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImN1c3RvbUNsYXNzIiwiYWN0aW9ucyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJmb2N1c0NvbmZpcm0iLCJidXR0b25zU3R5bGluZyIsInJldmVyc2VCdXR0b25zIiwiaGVpZ2h0QXV0byIsImFsbG93T3V0c2lkZUNsaWNrIiwiaXNMb2FkaW5nIiwidGltZXIiLCJpbml0IiwiYW5jaG9yVGFnIiwibWl4aW4iLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwiYmFja2dyb3VuZCIsIlJlYWN0Q29tcG9uZW50IiwiY29udGVudE1vZHVsZSIsInN3YWxNb2R1bGUiLCJhbGwiLCJSZWFjdFN3YWwiLCJjcmVhdGVFbGVtZW50IiwiY2xvc2VNb2RhbCIsInJlc3VsdCIsInRvZ2dsZUxvYWRpbmciLCJnZXRDb25maXJtQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYXBwZW5kQ2hpbGQiLCJwcmVmZXRjaGVkIiwiY3VyTG9jYWxlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInAiLCJyZXNvbHZlZEFzIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwicHJvbSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwidmFsdWUiLCJsaW5rIiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsIm9mZiIsImVtaXQiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJjbGVhblBhdGhuYW1lIiwicGFnZXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImRhdGEiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiTUFYX01FRElBX01CIiwiTUFYX01FRElBX0JZVEVTIiwiVVNFUl9ST0xFIiwiQURNSU4iLCJURUFDSEVSIiwiU1RVREVOVCIsIklOX1BST0dSRVNTIiwiTEVTU09OU19XSVRIX0VYRVJDSVNFUyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0E7UUFDQSxtQ0FBbUM7UUFDbkM7UUFDQTtRQUNBO1FBQ0E7UUFDQSxrQkFBa0IscUJBQXFCO1FBQ3ZDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGNBQWM7UUFDZCxJQUFJ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ImZpbGUiOiJwYWdlcy9leGVyY2l0aWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9leGVyY2l0aWlcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4uL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZXhlcmNpdGlpL2luZGV4LnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgSFRNTEF0dHJpYnV0ZXMsIFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJY29uUHJvcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGxvYWRpbmc/OiBib29sZWFuO1xyXG4gIHZhcmlhbnQ/OlxyXG4gIHwgJ2xpZ2h0J1xyXG4gIHwgJ2JsdWUnXHJcbiAgfCAnc3VjY2VzcydcclxuICB8ICdkYW5nZXInXHJcbiAgfCAndHJhbnNwYXJlbnQnXHJcbiAgfCAneWVsbG93J1xyXG4gIHwgJ2dyZXknXHJcbiAgLy8gV2UgZGVmaW5lIGhlcmUgdGhlIGZvcm0gcHJvcGVydHkgYmVjYXVzZVxyXG4gIC8vIGV2ZW4gaWYgaXQncyBhIHZhbGlkIGF0dHJpYnV0ZSBvbiBidXR0b25zLCBSZWFjdCBvciBUUyBjb21wbGFpbiBhYm91dCBpdC5cclxuICBmb3JtPzogc3RyaW5nO1xyXG4gIHdpdGhJY29uPzogYm9vbGVhbjtcclxuICBpY29uPzogSWNvblByb3A7XHJcbiAgb3V0bGluZT86IGJvb2xlYW47XHJcbiAgYm91bmN5PzogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBSZWYgPSBIVE1MQnV0dG9uRWxlbWVudDtcclxuY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxcclxuICBSZWYsXHJcbiAgUHJvcHNXaXRoQ2hpbGRyZW48UHJvcHM+ICYgUmVhY3QuQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+XHJcbj4oXHJcbiAgKFxyXG4gICAge1xyXG4gICAgICBpY29uLFxyXG4gICAgICBjaGlsZHJlbixcclxuICAgICAgbG9hZGluZyA9IGZhbHNlLFxyXG4gICAgICBjbGFzc05hbWUsXHJcbiAgICAgIGRpc2FibGVkLFxyXG4gICAgICB2YXJpYW50ID0gJ3RyYW5zcGFyZW50JyxcclxuICAgICAgd2l0aEljb24gPSBmYWxzZSxcclxuICAgICAgb3V0bGluZSA9IGZhbHNlLFxyXG4gICAgICBib3VuY3kgPSBmYWxzZSxcclxuICAgICAgLi4ucHJvcHNcclxuICAgIH06IFByb3BzV2l0aENoaWxkcmVuPFByb3BzPiAmIFJlYWN0LkJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PixcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgKSA9PiB7XHJcbiAgICBsZXQgdXBkYXRlZENsYXNzTmFtZSA9IGNsYXNzTmFtZSB8fCAnJztcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHVwZGF0ZWRDbGFzc05hbWUgKz0gJyBidG4tLWxvYWRpbmcnO1xyXG4gICAgfSBlbHNlIGlmICh3aXRoSWNvbikge1xyXG4gICAgICB1cGRhdGVkQ2xhc3NOYW1lICs9ICcgYnRuLS13aXRoLWljb24nO1xyXG4gICAgfSBlbHNlIGlmIChvdXRsaW5lKSB7XHJcbiAgICAgIHVwZGF0ZWRDbGFzc05hbWUgKz0gJyBidG4tLW91dGxpbmUnO1xyXG4gICAgfSBlbHNlIGlmIChib3VuY3kpIHtcclxuICAgICAgdXBkYXRlZENsYXNzTmFtZSArPSAnIGJ0bi0tYm91bmN5JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVwZGF0ZWRDbGFzc05hbWUgKz0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9idXR0b24taGFzLXR5cGVcclxuICAgICAgICB0eXBlPXtwcm9wcy50eXBlIHx8ICdidXR0b24nfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgYnRuIFxyXG4gICAgICAgICAgJHt2YXJpYW50ID09PSBgJHt2YXJpYW50fWAgPyBgYnRuLS0ke3ZhcmlhbnR9YCA6ICdidG4tLXRyYW5zcGFyZW50J30gXHJcbiAgICAgICAgICAke3VwZGF0ZWRDbGFzc05hbWV9XHJcbiAgICAgICAgYH1cclxuICAgICAgICBkaXNhYmxlZD17bG9hZGluZyB8fCBkaXNhYmxlZH1cclxuICAgICAgICByZWY9e2ZvcndhcmRSZWZ9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAge3dpdGhJY29uICYmIChcclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17aWNvbn0gaGVpZ2h0PVwiMjRcIiBjbGFzc05hbWU9XCJtci0yXCIgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gIH0sXHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQnV0dG9uJztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZXhlcmNpc2UtcHJldmlld1wiOiBcIkV4ZXJjaXNlUHJldmlld19leGVyY2lzZS1wcmV2aWV3X18xRl9EZlwiLFxuXHRcImlzLS1kb25lXCI6IFwiRXhlcmNpc2VQcmV2aWV3X2lzLS1kb25lX18yU0s3aFwiLFxuXHRcImlzLS13YWl0aW5nXCI6IFwiRXhlcmNpc2VQcmV2aWV3X2lzLS13YWl0aW5nX18xWG5wSlwiLFxuXHRcImhhcy0taXNzdWVzXCI6IFwiRXhlcmNpc2VQcmV2aWV3X2hhcy0taXNzdWVzX18xN0RjQVwiLFxuXHRcImlzLS1za2VsZXRvblwiOiBcIkV4ZXJjaXNlUHJldmlld19pcy0tc2tlbGV0b25fXzFrM0QwXCIsXG5cdFwiYm9keVwiOiBcIkV4ZXJjaXNlUHJldmlld19ib2R5X19ZUXZzd1wiLFxuXHRcImF2YXRhclwiOiBcIkV4ZXJjaXNlUHJldmlld19hdmF0YXJfXzJIVlE4XCIsXG5cdFwidGFnc1wiOiBcIkV4ZXJjaXNlUHJldmlld190YWdzX19FOGpQcFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFMb2NrLCBmYVBsYXkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0V4ZXJjaXNlUHJldmlldy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBNYXJrZG93biBmcm9tICcuLi9NYXJrZG93bic7XHJcbmltcG9ydCB7IEV4ZXJjaXNlIH0gZnJvbSAnfi9yZWR1eC91c2VyL3R5cGVzJztcclxuXHJcbmV4cG9ydCB0eXBlIEV4ZXJjaXNlVmlld01vZGUgPSAnU1RVREVOVCcgfCAnVEVBQ0hFUidcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIHZpZXdNb2RlOiBFeGVyY2lzZVZpZXdNb2RlO1xyXG4gIGlzUHJpdmF0ZT86IGJvb2xlYW47XHJcbiAgZXhlcmNpc2U6IEV4ZXJjaXNlLFxyXG4gIGZlZWRiYWNrQ291bnQ6IG51bWJlcjtcclxuICBpc0FwcHJvdmVkOiBib29sZWFuO1xyXG5cclxuICAvLyBEbyB3ZSBuZWVkIHRoaXM/XHJcbiAgcmVhZE9ubHk6IGJvb2xlYW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEV4ZXJjaXNlUHJldmlldyh7XHJcbiAgaHJlZixcclxuICB2aWV3TW9kZSxcclxuICBpc1ByaXZhdGUgPSBmYWxzZSxcclxuICByZWFkT25seSxcclxuICBmZWVkYmFja0NvdW50LFxyXG4gIGlzQXBwcm92ZWQsXHJcbiAgZXhlcmNpc2UsXHJcbn06IFByb3BzKSB7XHJcbiAgY29uc3QgeyBidG5UZXh0LCBpbmZvTWVzc2FnZSB9ID0gZ2V0Rm9vdGVyVGV4dHModmlld01vZGUsIGZlZWRiYWNrQ291bnQsIHJlYWRPbmx5LCBpc0FwcHJvdmVkKTtcclxuXHJcbiAgbGV0IGNsYXNzTmFtZSA9IGAke3N0eWxlc1snZXhlcmNpc2UtcHJldmlldyddfSBiZy13aGl0ZSByb3VuZGVkLW1kYDtcclxuICBpZiAoaXNBcHByb3ZlZCkge1xyXG4gICAgY2xhc3NOYW1lICs9IGAgJHtzdHlsZXNbJ2lzLS1kb25lJ119YDtcclxuICB9XHJcbiAgaWYgKCFpc0FwcHJvdmVkICYmIHJlYWRPbmx5KSB7XHJcbiAgICBjbGFzc05hbWUgKz0gYCAke3N0eWxlc1snaXMtLXdhaXRpbmcnXX1gO1xyXG4gIH1cclxuICBpZiAoZmVlZGJhY2tDb3VudCA+IDApIHtcclxuICAgIGNsYXNzTmFtZSArPSBgICR7c3R5bGVzWydoYXMtLWlzc3VlcyddfWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICAgIHtpc1ByaXZhdGUgJiYgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZXlcIiB3aWR0aD1cIjI0XCIgaWNvbj17ZmFMb2NrfSB0aXRsZT1cIkV4ZXJjacibaXUgcHJpdmF0XCIgLz59XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8TWFya2Rvd25cclxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib2R5fSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5gfVxyXG4gICAgICAgIG1hcmtkb3duU3RyaW5nPXtleGVyY2lzZS5ib2R5fVxyXG4gICAgICAgIHZhcmlhbnQ9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBmbGV4LXdyYXBcIj5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAge3ZpZXdNb2RlID09PSAnU1RVREVOVCcgJiYgaW5mb01lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICB7aW5mb01lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7KHZpZXdNb2RlID09PSAnVEVBQ0hFUicgfHwgIWluZm9NZXNzYWdlKSAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke2V4ZXJjaXNlLnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZXhlcmNpc2UudXNlci5hdmF0YXJ9IGFsdD1cIkF1dGhvciBhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnRhZ3N9IHRydW5jYXRlIGQtaW5saW5lLWJsb2NrYH0+XHJcbiAgICAgICAgICAgICAgICB7ZXhlcmNpc2UudGFncy5tYXAoKHQpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ib2xkXCIga2V5PXt0fT5cclxuICAgICAgICAgICAgICAgICAgICB7dH1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGQtZmxleCBidG4gbm8tdW5kZXJsaW5lICR7aXNBcHByb3ZlZCB8fCByZWFkT25seSB8fCBmZWVkYmFja0NvdW50ID4gMCA/ICdidG4tLWxpZ2h0JyA6ICdidG4tLWJsdWUnfWB9PlxyXG4gICAgICAgICAgICB7YnRuVGV4dH1cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiB3aWR0aD1cIjE2XCIgY2xhc3NOYW1lPVwibWwtMlwiIGljb249e2ZhUGxheX0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rm9vdGVyVGV4dHMoXHJcbiAgdmlld01vZGU6IEV4ZXJjaXNlVmlld01vZGUsXHJcbiAgZmVlZGJhY2tDb3VudDogbnVtYmVyLFxyXG4gIHJlYWRPbmx5OiBib29sZWFuLFxyXG4gIGlzQXBwcm92ZWQ6IGJvb2xlYW4sXHJcbikge1xyXG4gIGxldCBidG5UZXh0ID0gdmlld01vZGUgPT09ICdTVFVERU5UJyA/ICdSZXpvbHbEgycgOiAnRWRpdGVhesSDJztcclxuICBsZXQgaW5mb01lc3NhZ2UgPSAnJztcclxuXHJcbiAgaWYgKHZpZXdNb2RlID09PSAnU1RVREVOVCcpIHtcclxuICAgIGlmIChyZWFkT25seSB8fCBpc0FwcHJvdmVkKSB7XHJcbiAgICAgIGJ0blRleHQgPSAnVmV6aSBleGVyY2nIm2l1bCc7XHJcbiAgICB9IGVsc2UgaWYgKGZlZWRiYWNrQ291bnQpIHtcclxuICAgICAgYnRuVGV4dCA9ICdDb250aW51xIMnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0FwcHJvdmVkKSB7XHJcbiAgICAgIGluZm9NZXNzYWdlID0gJ+KclCc7XHJcbiAgICB9IGVsc2UgaWYgKGZlZWRiYWNrQ291bnQpIHtcclxuICAgICAgaW5mb01lc3NhZ2UgPSBgJHtmZWVkYmFja0NvdW50fSBwcm9ibGVtJHtmZWVkYmFja0NvdW50ID4gMSA/ICdlJyA6ICfEgyd9IGRlIHJlem9sdmF0YDtcclxuICAgIH0gZWxzZSBpZiAocmVhZE9ubHkpIHtcclxuICAgICAgaW5mb01lc3NhZ2UgPSAnw45uIGHImXRlcHRhcmVhIGZlZWRiYWNrLXVsdWknO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGJ0blRleHQsXHJcbiAgICBpbmZvTWVzc2FnZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGVyY2lzZVByZXZpZXc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRXhlcmNpc2VQcmV2aWV3Lm1vZHVsZS5zY3NzJztcclxuXHJcbmZ1bmN0aW9uIEV4ZXJjaXNlUHJldmlld1NrZWxldG9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzWydleGVyY2lzZS1wcmV2aWV3J119ICR7c3R5bGVzWydpcy0tc2tlbGV0b24nXX1gfT5cclxuICAgICAgPGhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgICA8ZGl2IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuXCI+eycgJ308L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4ZXJjaXNlUHJldmlld1NrZWxldG9uOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0V4ZXJjaXNlUHJldmlldyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXhlcmNpc2VQcmV2aWV3U2tlbGV0b24gfSBmcm9tICcuL0V4ZXJjaXNlUHJldmlld1NrZWxldG9uJztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZXhlcmNpc2VzLXBhZ2VcIjogXCJFeGVyY2lzZXNQYWdlX2V4ZXJjaXNlcy1wYWdlX18zaUVRblwiLFxuXHRcImxlc3Nvbi1zZWN0aW9uXCI6IFwiRXhlcmNpc2VzUGFnZV9sZXNzb24tc2VjdGlvbl9fMXNVdWhcIixcblx0XCJleGVyY2lzZXMtd3JhcHBlclwiOiBcIkV4ZXJjaXNlc1BhZ2VfZXhlcmNpc2VzLXdyYXBwZXJfXzJPZW8yXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFN1Ym1pc3Npb24gfSBmcm9tICd+L3JlZHV4L2V4ZXJjaXNlLXN1Ym1pc3Npb25zL3R5cGVzJztcclxuaW1wb3J0IHsgRXhlcmNpc2UgfSBmcm9tICd+L3JlZHV4L3VzZXIvdHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRMZXNzb25CeUlkIH0gZnJvbSAnfi9zZXJ2aWNlcy9Db25zdGFudHMnO1xyXG5pbXBvcnQgRXhlcmNpc2VTZXJ2aWNlIGZyb20gJ34vc2VydmljZXMvRXhlcmNpc2Uuc2VydmljZSc7XHJcbmltcG9ydCBMZXNzb25FeGVyY2lzZVNlcnZpY2UgZnJvbSAnfi9zZXJ2aWNlcy9MZXNzb25FeGVyY2lzZS5zZXJ2aWNlJztcclxuaW1wb3J0IEV4ZXJjaXNlUHJldmlldyBmcm9tICcuLi9FeGVyY2lzZVByZXZpZXcnO1xyXG5pbXBvcnQgUGFnZUNvbnRhaW5lciBmcm9tICcuLi9QYWdlQ29udGFpbmVyJztcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vU3Bpbm5lcic7XHJcbmltcG9ydCB7IFNVQk1JU1NJT05fU1RBVFVTIH0gZnJvbSAnfi8uLi9zaGFyZWQvU2hhcmVkQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnfi9yZWR1eC9yb290LnJlZHVjZXInO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0V4ZXJjaXNlc1BhZ2UubW9kdWxlLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gRXhlcmNpc2VzUGFnZSh7IHVzZXIgfTogQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj4pIHtcclxuICBjb25zdCBbc3VibWlzc2lvbnMsIHNldFN1Ym1pc3Npb25zXSA9IHVzZVN0YXRlPFN1Ym1pc3Npb25bXT4odW5kZWZpbmVkKTtcclxuICBjb25zdCBbbGVzc29uRXhlcmNpc2VzLCBzZXRMZXNzb25FeGVyY2lzZXNdID0gdXNlU3RhdGU8RXhlcmNpc2VbXT4odW5kZWZpbmVkKTtcclxuXHJcbiAgY29uc3QgaXNMb2dnZWRJbiA9ICEhdXNlci5pbmZvO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgTGVzc29uRXhlcmNpc2VTZXJ2aWNlLmdldEFsbExlc3NvbkV4ZXJjaXNlcygpXHJcbiAgICAgIC50aGVuKChleGVyY2lzZXMpID0+IHNldExlc3NvbkV4ZXJjaXNlcyhleGVyY2lzZXMpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuXHJcbiAgICBpZiAoaXNMb2dnZWRJbikge1xyXG4gICAgICBFeGVyY2lzZVNlcnZpY2UuZ2V0U29sdmVkRXhlcmNpc2VzKClcclxuICAgICAgICAudGhlbigocmVzcCkgPT4gc2V0U3VibWlzc2lvbnMocmVzcCkpXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTdWJtaXNzaW9ucyhbXSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBtZXJnZSBzdWJtaXNzaW9uICYgZXhlcmNpc2UgZGF0YSB0byBzaG93XHJcbiAgLy8gRXhlcmNpc2VQcmV2aWV3IGNvbXBvbmVudCB0b2dldGhlciB3aXRoIHN1Ym1pdHRlZC9wcmV2aWV3IGRhdGFcclxuICBjb25zdCBtZXJnZWREYXRhID0ge307XHJcbiAgaWYgKHN1Ym1pc3Npb25zICYmIGxlc3NvbkV4ZXJjaXNlcykge1xyXG4gICAgbGVzc29uRXhlcmNpc2VzLmZvckVhY2goKGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgbGVzc29uIH0gPSBleDtcclxuICAgICAgY29uc3QgbWF0Y2hlZFN1Ym1pc3Npb24gPSBzdWJtaXNzaW9ucy5maW5kKFxyXG4gICAgICAgIChzdWIpID0+IHN1Yi5leGVyY2lzZS5faWQgPT09IGV4Ll9pZCxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIG1lcmdlZERhdGFbbGVzc29uXSA9IG1lcmdlZERhdGFbbGVzc29uXSB8fCBbXTtcclxuICAgICAgaWYgKG1hdGNoZWRTdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgbWVyZ2VkRGF0YVtsZXNzb25dLnB1c2gobWF0Y2hlZFN1Ym1pc3Npb24pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lcmdlZERhdGFbbGVzc29uXS5wdXNoKHtcclxuICAgICAgICAgIF9pZDogZXguX2lkLFxyXG4gICAgICAgICAgZXhlcmNpc2U6IGV4LFxyXG4gICAgICAgICAgZmVlZGJhY2tzOiBbXSxcclxuICAgICAgICAgIHN0YXR1czogbnVsbCxcclxuICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXNbJ2V4ZXJjaXNlcy1wYWdlJ119PlxyXG4gICAgICA8aDE+IEV4ZXJjacibaWkgPC9oMT5cclxuICAgICAgPHA+XHJcbiAgICAgICAgRm9jdXN1bCBub3N0cnUgZSBzxIMgw67Im2kgb2ZlcmltXHJcbiAgICAgICAgeycgJ31cclxuICAgICAgICA8c3Ryb25nPmZlZWRiYWNrPC9zdHJvbmc+XHJcbiAgICAgICAgeycgJ31cclxuICAgICAgICAsIHBlbnRydSBjxIMgyJl0aW0gY8SDIGFjZWFzdGEgZXN0ZVxyXG4gICAgICAgIGNlYSBtYWkgYnVuxIMgbWV0b2TEgyBkZSBhIMOubnbEg8ibYS5cclxuICAgICAgICB7JyAnfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEHImWEgY8SDIGR1cMSDIGNlIHBhcmN1cmdpXHJcbiAgICAgICAgbGVjyJtpaWxlIGRlIHBlIHBsYXRmb3JtxIMgyJlpIG5lIHRyaW1pyJtpIHNvbHXIm2lpbGUgZXhlcmNpyJtpaWxvciwgbm9pLFxyXG4gICAgICAgIGRldmVsb3BlcmkgY3UgZXhwZXJpZW7Im8SDIMOuyJtpIHZvbSBmYWNlXHJcbiAgICAgICAgeycgJ31cclxuICAgICAgICA8c3Ryb25nPmNvZGUgcmV2aWV3Ljwvc3Ryb25nPlxyXG4gICAgICAgIHsnICd9XHJcbiAgICAgIDwvcD5cclxuICAgICAgPHA+XHJcbiAgICAgICAgQXN0YSBwZW50cnUgY8SDIHZyZW0gc8SDIGFqdXTEg20gY8OidCBtYWkgbXVsdMSDIGx1bWUgc8SDIMOubnZlyJtlIGRlc3ByZSBhY2VzdFxyXG4gICAgICAgIGRvbWVuaXUgcGUgY2FyZSDDrmwgY29uc2lkZXLEg20gdW51bCBkaW50cmUgY2VsZSBtYWkgZmFpbmUgyJlpIG51IHZvbSBwdW5lXHJcbiAgICAgICAgdW4gcHJlyJsgcGUgYWNlYXN0xIMgZXhwZXJpZW7Im8SDLiDImGkgbm9pIGFtIGZvc3QgbGEgw65uY2VwdXQgw65uIGRydW11bFxyXG4gICAgICAgIG5vc3RydSDImWkgyJl0aW0gY8OidCBkZSBncmV1IGVzdGUgZGUgdW51bCBzaW5ndXIuIEHImWEgY8SDIHRvdCBjZSBzZVxyXG4gICAgICAgIMOubnTDom1wbMSDIGFpY2kgZSB1blxyXG4gICAgICAgIHsnICd9XHJcbiAgICAgICAgPHN0cm9uZz5lZm9ydCBkZSBjb211bml0YXRlLCBwZW50cnUgY29tdW5pdGF0ZTwvc3Ryb25nPlxyXG4gICAgICAgIC5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICBQb8ibaSBhZmxhIG1haSBtdWx0ZSBkZXRhbGlpIGRlc3ByZSBub2lcclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mcm9udGVuZC5yby9pbnRyby9kZXNwcmUtbm9pI2ludHJvZHVjZXJlXCI+IGFpY2k8L2E+XHJcbiAgICAgICAgLlxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICB7KCFsZXNzb25FeGVyY2lzZXMgfHwgIXN1Ym1pc3Npb25zKSAmJiAoXHJcbiAgICAgICAgPFNwaW5uZXIgc2hvd1RleHQgdGV4dD1cIsOObmPEg3JjxINtIGV4ZXJjacibaWlsZVwiIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtPYmplY3Qua2V5cyhtZXJnZWREYXRhKS5tYXAoKGxlc3NvbikgPT4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzWydsZXNzb24tc2VjdGlvbiddfT5cclxuICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgPHNwYW4+e2dldExlc3NvbkJ5SWQobGVzc29uKS50eXBlfTwvc3Bhbj5cclxuICAgICAgICAgICAge2dldExlc3NvbkJ5SWQobGVzc29uKS50aXRsZX1cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydleGVyY2lzZXMtd3JhcHBlciddfT5cclxuICAgICAgICAgICAge21lcmdlZERhdGFbbGVzc29uXS5tYXAoKHN1Ym1pc3Npb24pID0+IChcclxuICAgICAgICAgICAgICA8RXhlcmNpc2VQcmV2aWV3XHJcbiAgICAgICAgICAgICAgICBrZXk9e3N1Ym1pc3Npb24uX2lkfVxyXG4gICAgICAgICAgICAgICAgZXhlcmNpc2U9e3N1Ym1pc3Npb24uZXhlcmNpc2V9XHJcbiAgICAgICAgICAgICAgICBocmVmPXtgcmV6b2x2YS8ke3N1Ym1pc3Npb24uZXhlcmNpc2UuX2lkfWB9XHJcbiAgICAgICAgICAgICAgICB2aWV3TW9kZT1cIlNUVURFTlRcIlxyXG4gICAgICAgICAgICAgICAgZmVlZGJhY2tDb3VudD17XHJcbiAgICAgICAgICAgICAgICAgIHN1Ym1pc3Npb24uZmVlZGJhY2tzLmZpbHRlcigoZikgPT4gZi50eXBlID09PSAnaW1wcm92ZW1lbnQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5sZW5ndGhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlzQXBwcm92ZWQ9e3N1Ym1pc3Npb24uc3RhdHVzID09PSBTVUJNSVNTSU9OX1NUQVRVUy5ET05FfVxyXG4gICAgICAgICAgICAgICAgcmVhZE9ubHk9e1tcclxuICAgICAgICAgICAgICAgICAgU1VCTUlTU0lPTl9TVEFUVVMuQVdBSVRJTkdfUkVWSUVXLFxyXG4gICAgICAgICAgICAgICAgICBTVUJNSVNTSU9OX1NUQVRVUy5ET05FLFxyXG4gICAgICAgICAgICAgICAgXS5pbmNsdWRlcyhzdWJtaXNzaW9uLnN0YXR1cyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9QYWdlQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogUm9vdFN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXI6IHN0YXRlLnVzZXIsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKEV4ZXJjaXNlc1BhZ2UpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9FeGVyY2lzZXNQYWdlJztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fMUZQOXRcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdJVEhVQl9VUkwgfSBmcm9tICd+L3NlcnZpY2VzL0NvbnN0YW50cyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9vdGVyLm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJicmFuZGluZ1wiPlxyXG4gICAgICAgIDxoNT4gRnJvbnRFbmQucm8gPC9oNT5cclxuICAgICAgICA8cD4gwqkgMjAyMCBGcm9udEVuZC5ybzwvcD5cclxuICAgICAgICA8cD4gQWxsIHJpZ2h0cyByZXNlcnZlZDwvcD5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGg1PiBBYm91dCA8L2g1PlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpoZWxsb0Bmcm9udGVuZC5yb1wiPmhlbGxvQGZyb250ZW5kLnJvPC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIE1hZGUgd2l0aFxyXG4gICAgICAgICAgeycgJ31cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkXCI+4p2kPC9zcGFuPlxyXG4gICAgICAgICAgeycgJ31cclxuICAgICAgICAgIGJ5IHRoZSBvcGVuLXNvdXJjZSBjb21tdW5pdHlcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcbiAgICAgICAgPGg1PiBTb2NpYWwgPC9oNT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e0dJVEhVQl9VUkx9PlxyXG4gICAgICAgICAgICAgIEdpdEh1YlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vRnJvbnRFbmRSb1wiPlxyXG4gICAgICAgICAgICAgIFR3aXR0ZXJcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2ZhY2Vib29rLmNvbS9Gcm9udEVuZFJvXCI+XHJcbiAgICAgICAgICAgICAgRmFjZWJvb2tcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Zvb3Rlcic7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFjY291bnQtdG9vbHRpcFwiOiBcIkFjY291bnRUb29sdGlwX2FjY291bnQtdG9vbHRpcF9fMk5qYXNcIixcblx0XCJhdmF0YXJcIjogXCJBY2NvdW50VG9vbHRpcF9hdmF0YXJfXzFtZ3ctXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJ34vc2VydmljZXMvVXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnfi9yZWR1eC9yb290LnJlZHVjZXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ34vY29tcG9uZW50cy9CdXR0b24nO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FjY291bnRUb29sdGlwLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlT3V0c2lkZUNsaWNrIH0gZnJvbSAnfi9zZXJ2aWNlcy9Ib29rcyc7XHJcbmltcG9ydCB7IGxvZ291dFVzZXIgfSBmcm9tICd+L3JlZHV4L3VzZXIvdXNlci5hY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIEFjY291bnRUb29sdGlwKHsgdXNlciwgZGlzcGF0Y2ggfTogQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj4pIHtcclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgVXNlclNlcnZpY2UubG9nb3V0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9nb3V0VXNlcigpKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVUb29saXAgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcblxyXG4gIHVzZU91dHNpZGVDbGljayhyZWYsICgpID0+IHNldElzT3BlbihmYWxzZSkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPXtzdHlsZXNbJ2FjY291bnQtdG9vbHRpcCddfT5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9IG9uQ2xpY2s9e3RvZ2dsZVRvb2xpcH0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlclwiXHJcbiAgICAgICAgICB0aXRsZT1cIlRvZ2dsZSBtZW51XCJcclxuICAgICAgICAgIHNyYz17dXNlci5pbmZvLmF2YXRhcn1cclxuICAgICAgICAgIGFsdD17YCR7dXNlci5pbmZvLm5hbWV9IGF2YXRhcmB9XHJcbiAgICAgICAgICB3aWR0aD1cIjMyXCJcclxuICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidHJ1ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHt1c2VyLmluZm8udXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibm8tdW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICBQcm9maWx1bCB0xIN1XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibm8tdW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICBTZXTEg3JpbGUgY29udHVsdWlcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17bG9nb3V0fSBjbGFzc05hbWU9XCJuby11bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICBTaWduIG91dFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFJvb3RTdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB1c2VyOiBzdGF0ZS51c2VyLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihBY2NvdW50VG9vbHRpcCk7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1vYmlsZS1tZW51XCI6IFwiSGVhZGVyX21vYmlsZS1tZW51X19XdnAxaVwiLFxuXHRcImhlYWRlclwiOiBcIkhlYWRlcl9oZWFkZXJfXzN2d0V1XCIsXG5cdFwibWVudVwiOiBcIkhlYWRlcl9tZW51X18zWVVacVwiLFxuXHRcImxvZ29cIjogXCJIZWFkZXJfbG9nb19fMWxJWVVcIixcblx0XCJtZW51T3BlbkJ0blwiOiBcIkhlYWRlcl9tZW51T3BlbkJ0bl9fM0dSV2RcIixcblx0XCJoYW1idXJnZXJcIjogXCJIZWFkZXJfaGFtYnVyZ2VyX19zSkp6TlwiLFxuXHRcInRpdGxlXCI6IFwiSGVhZGVyX3RpdGxlX18xZ3BEYlwiLFxuXHRcImhlYWRlci1tZW51LW9wZW5cIjogXCJIZWFkZXJfaGVhZGVyLW1lbnUtb3Blbl9fMmcwQWFcIixcblx0XCJtZW51Q2xvc2VCdG5cIjogXCJIZWFkZXJfbWVudUNsb3NlQnRuX19hdVpNT1wiLFxuXHRcImRlbW8tbGFiZWxcIjogXCJIZWFkZXJfZGVtby1sYWJlbF9fYXQ0SHZcIixcblx0XCJoZWFkZXItdG9vbHRpcFwiOiBcIkhlYWRlcl9oZWFkZXItdG9vbHRpcF9fMmJ0NkFcIixcblx0XCJoZWFkZXItdG9vbHRpcC0tbm8tc2Nyb2xsXCI6IFwiSGVhZGVyX2hlYWRlci10b29sdGlwLS1uby1zY3JvbGxfX3k5bUJhXCIsXG5cdFwibmF2LW1lbnVcIjogXCJIZWFkZXJfbmF2LW1lbnVfXzFENk1ZXCIsXG5cdFwiYXNpZGUtbWVudVwiOiBcIkhlYWRlcl9hc2lkZS1tZW51X19LdFhiUFwiLFxuXHRcIm5hdi13cmFwcGVyXCI6IFwiSGVhZGVyX25hdi13cmFwcGVyX19JWE95a1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYUJhcnMsIGZhTGluayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBBY2NvdW50VG9vbHRpcCBmcm9tICcuL0FjY291bnRUb29sdGlwL0FjY291bnRUb29sdGlwJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICd+L2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnfi9yZWR1eC9yb290LnJlZHVjZXInO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBBc2lkZU1lbnUgZnJvbSAnLi4vbGF5b3V0L0FzaWRlTWVudS9Bc2lkZU1lbnUnO1xyXG5pbXBvcnQgTmF2TGlua3MgZnJvbSAnLi4vTmF2TGlua3MvTmF2TGlua3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBocmVmPzogc3RyaW5nO1xyXG4gIGRlbW9QYWdlPzogYm9vbGVhbjtcclxuICB3aXRoTmF2TWVudT86IGJvb2xlYW47XHJcbiAgb25NZW51Q2xpY2s/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoe1xyXG4gIGhyZWYgPSAnLycsXHJcbiAgZGVtb1BhZ2UsXHJcbiAgb25NZW51Q2xpY2ssXHJcbiAgaXNMb2dnZWRJbixcclxuICB3aXRoTmF2TWVudSA9IGZhbHNlLFxyXG59OiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPiAmIFByb3BzKSB7XHJcbiAgY29uc3QgW2lzTmF2TWVudU9wZW4sIHNldElzTmF2TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMCBhbGlnbi1pdGVtcy1jZW50ZXIgaC0xMDBcIj5cclxuICAgICAgICAgIHtvbk1lbnVDbGljayAmJiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbk1lbnVDbGlja31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXJfX21lbnUtYnRuICR7c3R5bGVzLm1lbnV9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfSAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjU2V0PVwiL2xvZ28ucG5nIDUwMHcsIC9sb2dvLXNxdWFyZS0tUy5qcGcgMTY1d1wiXHJcbiAgICAgICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDYwMHB4KSAxNjVweCwgNTAwcHhcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2xvZ28ucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIkZyb250RW5kLnJvIGxvZ29cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIHtkZW1vUGFnZSAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7c3R5bGVzWydkZW1vLWxhYmVsJ119IHRleHQtd2hpdGUgbXgtNSB0ZXh0LWJvbGRgfT5cclxuICAgICAgICAgICAgICBERU1PXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICB7aXNMb2dnZWRJbiA/IDxBY2NvdW50VG9vbHRpcCAvPiA6IG51bGx9XHJcbiAgICAgICAgICB7d2l0aE5hdk1lbnUgJiYgKFxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzWyduYXYtbWVudSddfSB2YXJpYW50PVwibGlnaHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdk1lbnVPcGVuKHRydWUpfT5cclxuICAgICAgICAgICAgICBOYXZcclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua30gLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAge1xyXG4gICAgICAgIHdpdGhOYXZNZW51ICYmIChcclxuICAgICAgICAgIDxBc2lkZU1lbnVcclxuICAgICAgICAgICAgaGlkZVNjcm9sbE9uQm9keVxyXG4gICAgICAgICAgICB0aXRsZT1cIkZyb250RW5kLnJvXCJcclxuICAgICAgICAgICAgaXNPcGVuPXtpc05hdk1lbnVPcGVufVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snYXNpZGUtbWVudSddfVxyXG4gICAgICAgICAgICBjbG9zZT17KCkgPT4gc2V0SXNOYXZNZW51T3BlbihmYWxzZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ25hdi13cmFwcGVyJ119PlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rcyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQXNpZGVNZW51PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogUm9vdFN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlzTG9nZ2VkSW46ICEhc3RhdGUudXNlci5pbmZvLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihIZWFkZXIpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9IZWFkZXInO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYXJrZG93blwiOiBcIk1hcmtkb3duX21hcmtkb3duX18zWVJjMVwiLFxuXHRcImlzLS10cmFuc3BhcmVudFwiOiBcIk1hcmtkb3duX2lzLS10cmFuc3BhcmVudF9fM3VnMHlcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01hcmtkb3duLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgbWFya2Rvd25TdHJpbmc6IHN0cmluZztcclxuICB2YXJpYW50PzogJ25vbmUnIHwgJ3RyYW5zcGFyZW50JztcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1hcmtkb3duKHsgbWFya2Rvd25TdHJpbmcsIGNsYXNzTmFtZSA9ICcnLCB2YXJpYW50ID0gJ25vbmUnIH06IFByb3BzKSB7XHJcbiAgY29uc3QgbWFya2Rvd25SZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbXBvcnQoJ21hcmtlZCcpLnRoZW4oKG1vZHVsZSkgPT4ge1xyXG4gICAgICBjb25zdCBtYXJrZWQgPSBtb2R1bGUuZGVmYXVsdDtcclxuXHJcbiAgICAgIG1hcmtlZC5zZXRPcHRpb25zKHtcclxuICAgICAgICBzYW5pdGl6ZTogdHJ1ZSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBtYXJrZG93blJlZi5jdXJyZW50LmlubmVySFRNTCA9IG1hcmtlZChtYXJrZG93blN0cmluZyk7XHJcbiAgICB9KTtcclxuICB9LCBbbWFya2Rvd25TdHJpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWFya2Rvd259ICR7dmFyaWFudCA9PT0gJ3RyYW5zcGFyZW50JyAmJiBzdHlsZXNbJ2lzLS10cmFuc3BhcmVudCddfSAke2NsYXNzTmFtZX1gfSByZWY9e21hcmtkb3duUmVmfSAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcmtkb3duO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9NYXJrZG93bic7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdi1saW5rc1wiOiBcIk5hdkxpbmtzX25hdi1saW5rc19fMl9BSDZcIixcblx0XCJsb2dpblwiOiBcIk5hdkxpbmtzX2xvZ2luX18zZjJjalwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnfi9yZWR1eC9yb290LnJlZHVjZXInO1xyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAnfi9zZXJ2aWNlcy9Vc2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBsb2dvdXRVc2VyIH0gZnJvbSAnfi9yZWR1eC91c2VyL3VzZXIuYWN0aW9ucyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnfi9jb21wb25lbnRzL0J1dHRvbic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2TGlua3MubW9kdWxlLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gTmF2TGlua3MoeyB1c2VyLCBkaXNwYXRjaCB9OiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPikge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGlzTG9nZ2VkSW4gPSAhIXVzZXIuaW5mbztcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgVXNlclNlcnZpY2UubG9nb3V0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9nb3V0VXNlcigpKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlc1snbmF2LWxpbmtzJ119PlxyXG4gICAgICA8b2w+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sZWN0aWlcIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgTGVjyJtpaVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2V4ZXJjaXRpaVwiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICBFeGVyY2nIm2lpXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXZlbmltZW50ZVwiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICBFdmVuaW1lbnRlXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2xpZGVzXCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIFNsaWRlLXVyaVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB7aXNMb2dnZWRJbiA/IChcclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRyYW5zcGFyZW50XCIgb25DbGljaz17bG9nb3V0fT5cclxuICAgICAgICAgICAgICBTaWduIG91dFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYXV0aD9uZXh0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHJvdXRlci5hc1BhdGgpfWB9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgSW50csSDIMOubiBjb250XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvb2w+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFJvb3RTdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB1c2VyOiBzdGF0ZS51c2VyLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihOYXZMaW5rcyk7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBhZ2VDb250YWluZXJfY29udGFpbmVyX18yXzBVWVwiLFxuXHRcInBhZ2UtY29udGFpbmVyXCI6IFwiUGFnZUNvbnRhaW5lcl9wYWdlLWNvbnRhaW5lcl9fMXk5bkpcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BhZ2VDb250YWluZXIubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxuZnVuY3Rpb24gUGFnZUNvbnRhaW5lcih7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA6IFByb3BzV2l0aENoaWxkcmVuPFByb3BzPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e2Ake3N0eWxlc1sncGFnZS1jb250YWluZXInXX0gJHtjbGFzc05hbWUgfHwgJyd9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VDb250YWluZXI7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1BhZ2VDb250YWluZXInO1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBzaGFyZUltYWdlPzogc3RyaW5nO1xyXG4gIGJpZ1NoYXJlSW1hZ2U/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTRU9UYWdzKHtcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICB1cmwsXHJcbiAgc2hhcmVJbWFnZSA9ICdodHRwczovL2Zyb250ZW5kLnJvL21haW4tc2VvLWltYWdlLmpwZycsXHJcbiAgYmlnU2hhcmVJbWFnZSA9IHRydWUsXHJcbiAgY2hpbGRyZW4sXHJcbn06IFByb3BzV2l0aENoaWxkcmVuPFByb3BzPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG5cclxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxyXG5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt1cmx9IC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cInJvX1JPXCIgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3NoYXJlSW1hZ2V9IC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6dHlwZVwiIGNvbnRlbnQ9XCJpbWFnZS9qcGVnXCIgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9e2JpZ1NoYXJlSW1hZ2UgPyAnMTIwMCcgOiAnNDAwJ30gLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PXtiaWdTaGFyZUltYWdlID8gJzYzMCcgOiAnNDAwJ30gLz5cclxuXHJcbiAgICAgIHsvKiBUd2l0dGVyICovfVxyXG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e3NoYXJlSW1hZ2V9IC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQEZyb250RW5kUm9cIiAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cIkBGcm9udEVuZFJvXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9e2JpZ1NoYXJlSW1hZ2UgPyAnc3VtbWFyeV9sYXJnZV9pbWFnZScgOiAnc3VtbWFyeSd9IC8+XHJcblxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzcGlubmVyXCI6IFwiU3Bpbm5lcl9zcGlubmVyX18ySk14b1wiLFxuXHRcInNwaW5uZXJBbmltYXRpb25cIjogXCJTcGlubmVyX3NwaW5uZXJBbmltYXRpb25fXzJYUktBXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3Bpbm5lci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHRleHQ/OiBzdHJpbmc7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIHNob3dUZXh0PzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgU3Bpbm5lciA9ICh7IGNsYXNzTmFtZSA9ICcnLCBzaG93VGV4dCA9IGZhbHNlLCB0ZXh0ID0gJ1NlIMOubmNhcmPEgycgfTogUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zcGlubmVyfSAke2NsYXNzTmFtZX1gfT5cclxuICAgICAge3Nob3dUZXh0ICYmIChcclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TcGlubmVyJztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXNpZGUtbWVudVwiOiBcIkFzaWRlTWVudV9hc2lkZS1tZW51X195ZDBFRFwiLFxuXHRcImFzaWRlLW1lbnUtLW9wZW5cIjogXCJBc2lkZU1lbnVfYXNpZGUtbWVudS0tb3Blbl9fMlBiVDdcIlxufTtcbiIsImltcG9ydCB7IGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCBQcm9wc1dpdGhDaGlsZHJlbiwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VPdXRzaWRlQ2xpY2sgfSBmcm9tICd+L3NlcnZpY2VzL0hvb2tzJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Bc2lkZU1lbnUubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGlzT3BlbjogYm9vbGVhbjtcclxuICBjbG9zZTogKCkgPT4gdm9pZDtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgaGlkZVNjcm9sbE9uQm9keT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFzaWRlTWVudSh7XHJcbiAgdGl0bGUsXHJcbiAgaXNPcGVuLFxyXG4gIGNsb3NlLFxyXG4gIGNoaWxkcmVuLFxyXG4gIGNsYXNzTmFtZSA9ICcnLFxyXG4gIGhpZGVTY3JvbGxPbkJvZHkgPSBmYWxzZSxcclxufTogUHJvcHNXaXRoQ2hpbGRyZW48UHJvcHM+KSB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIHVzZU91dHNpZGVDbGljayhyZWYsIGNsb3NlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaGlkZVNjcm9sbE9uQm9keSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzT3Blbikge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2luaXRpYWwnO1xyXG4gICAgfVxyXG4gIH0sIFtpc09wZW5dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhc2lkZSByZWY9e3JlZn0gY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2FzaWRlLW1lbnUnXX0ke2lzT3BlbiA/IGAgJHtzdHlsZXNbJ2FzaWRlLW1lbnUtLW9wZW4nXX1gIDogJyd9ICR7Y2xhc3NOYW1lfSBiZy1ibGFjayB0ZXh0LXdoaXRlYH0+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYXNpZGUtbWVudV9faGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8aDI+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2Nsb3NlfSBjbGFzc05hbWU9XCJidG4tLXRyYW5zcGFyZW50IHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYXNpZGU+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXNpZGVNZW51O1xyXG4iLCJpbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmNvbnN0IExPQURfSU5GTyA9ICd1c2VyL0xPQURfSU5GTyc7XHJcblxyXG5jb25zdCBBRERfTk9USUZJQ0FUSU9OUyA9ICd1c2VyL0FERF9OT1RJRklDQVRJT05TJztcclxuY29uc3QgTE9BRF9OT1RJRklDQVRJT05TID0gJ3VzZXIvTE9BRF9OT1RJRklDQVRJT05TJztcclxuXHJcbmNvbnN0IE1BUktfQVNfUkVBRCA9ICd1c2VyL01BUktfTk9USUZJQ0FUSU9OU19BU19SRUFEJztcclxuY29uc3QgTUFSS19BU19VTlJFQUQgPSAndXNlci9NQVJLX05PVElGSUNBVElPTlNfQVNfVU5SRUFEJztcclxuY29uc3QgTUFSS19BTExfQVNfUkVBRCA9ICd1c2VyL01BUktfQUxMX05PVElGSUNBVElPTlNfQVNfUkVBRCc7XHJcblxyXG5leHBvcnQgY29uc3QgVVNFUl9JTkZPID0ge1xyXG4gIExPQUQ6IExPQURfSU5GTyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVU0VSX05PVElGSUNBVElPTlMgPSB7XHJcbiAgQUREOiBBRERfTk9USUZJQ0FUSU9OUyxcclxuICBMT0FEOiBMT0FEX05PVElGSUNBVElPTlMsXHJcbiAgTUFSS19BU19SRUFELFxyXG4gIE1BUktfQVNfVU5SRUFELFxyXG4gIE1BUktfQUxMX0FTX1JFQUQsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVVNFUl9MT0dPVVQgPSAndXNlci9MT0dPVVQnO1xyXG5cclxuLyoqIFVzZXIgaW5mbyAqL1xyXG5leHBvcnQgY29uc3QgbG9hZEluZm8gPSAoaW5mbzogYW55KSA9PiAoe1xyXG4gIHR5cGU6IExPQURfSU5GTyxcclxuICBwYXlsb2FkOiBpbmZvLFxyXG59KTtcclxuXHJcbi8qKiBOb3RpZmljYXRpb25zICovXHJcbmV4cG9ydCBjb25zdCBhZGROb3RpZmljYXRpb24gPSAobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24gfCBOb3RpZmljYXRpb25bXSwgaW5kZXggPSAwKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9OT1RJRklDQVRJT05TLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIG5vdGlmaWNhdGlvbixcclxuICAgIGluZGV4LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWROb3RpZmljYXRpb25zU3VjY2VzcyA9IChuZXdOb3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25bXSkgPT4gKHtcclxuICB0eXBlOiBMT0FEX05PVElGSUNBVElPTlMsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgbmV3Tm90aWZpY2F0aW9ucyxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXJrTm90aWZpY2F0aW9uQXNSZWFkID0gKGlkOiBzdHJpbmcpID0+ICh7XHJcbiAgdHlwZTogTUFSS19BU19SRUFELFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGlkLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmtOb3RpZmljYXRpb25Bc1VucmVhZCA9IChpZDogc3RyaW5nKSA9PiAoe1xyXG4gIHR5cGU6IE1BUktfQVNfVU5SRUFELFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGlkLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmtBbGxBc1JlYWQgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IE1BUktfQUxMX0FTX1JFQUQsXHJcbiAgcGF5bG9hZDogbnVsbCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0VXNlciA9ICgpID0+ICh7XHJcbiAgdHlwZTogVVNFUl9MT0dPVVQsXHJcbiAgcGF5bG9hZDogbnVsbCxcclxufSk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xyXG5leHBvcnQgZW51bSBMb2dFdmVudFR5cGUge1xyXG4gIFJPVVRFID0gJ1JPVVRFJyxcclxuICBFTkQgPSAnRU5EJyxcclxufVxyXG5cclxuaW50ZXJmYWNlIExvZyB7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgdHlwZTogTG9nRXZlbnRUeXBlO1xyXG4gIHRpbWVzdGFtcDogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBDbGllbnRNb25pdG9yaW5nIHtcclxuICBwcml2YXRlIHN0YXRpYyBlbmRwb2ludCA9ICdodHRwczovL2Zyb250ZW5kcm8tZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL2xvZ3MuanNvbidcclxuXHJcbiAgcHVibGljIHN0YXRpYyBsb2cgPSAodHlwZTogTG9nRXZlbnRUeXBlKSA9PiB7XHJcbiAgICBjb25zdCBsb2cgOiBMb2cgPSB7XHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIHVybDogbG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gZmV0Y2goQ2xpZW50TW9uaXRvcmluZy5lbmRwb2ludCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobG9nKSxcclxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbQ2xpZW50TW9uaXRvcmluZy5sb2ddJywgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRlc3Ryb3kgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2cgOiBMb2cgPSB7XHJcbiAgICAgIHR5cGU6IExvZ0V2ZW50VHlwZS5FTkQsXHJcbiAgICAgIHVybDogbG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgfTtcclxuXHJcbiAgICBuYXZpZ2F0b3Iuc2VuZEJlYWNvbihDbGllbnRNb25pdG9yaW5nLmVuZHBvaW50LCBKU09OLnN0cmluZ2lmeShsb2cpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudE1vbml0b3Jpbmc7XHJcbiIsImltcG9ydCB7XHJcbiAgQ29udHJpYnV0b3IsXHJcbiAgQ2F0YWxpblBvcHVzb2ksXHJcbiAgRGlhbmEsXHJcbiAgTmljb2xhZU1hdGllcyxcclxuICBQYXZhLFxyXG4gIFJvYmVydFBhcmFzY2EsXHJcbiAgU2ViYXN0aWFuTGF0a29saWMsXHJcbiAgRGFuaWVsSHV0YW51LFxyXG59IGZyb20gJy4vY29udHJpYnV0b3JzJztcclxuXHJcbmV4cG9ydCB0eXBlIExlc3NvbkRlc2NyaXB0aW9uID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgd3JpdHRlbjogYm9vbGVhbjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgdHlwZTogJ2ludHJvJyB8ICdodG1sJyB8ICdjc3MnIHwgJ2phdmFzY3JpcHQnIHwgJ2V4dHJhJztcclxuICAvLyDwn5GHIE9wdGlvbmFsIHByb3BlcnRpZXMgZm9yIGxlc3NvbnMgbm90IHdyaXR0ZW4geWV0XHJcbiAgY292ZXI/OiBzdHJpbmc7XHJcbiAgY29udHJpYnV0b3JzPzogQ29udHJpYnV0b3JbXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMRVNTT05TOiBMZXNzb25EZXNjcmlwdGlvbltdID0gW1xyXG4gIC8qKiBJbnRybyBsZXNzb25zICovXHJcbiAge1xyXG4gICAgaWQ6ICdkZXNwcmUtbm9pJyxcclxuICAgIHdyaXR0ZW46IHRydWUsXHJcbiAgICB0aXRsZTogJ0Rlc3ByZSBub2knLFxyXG4gICAgZGVzY3JpcHRpb246ICdDZSBuZSBmYWNlIGRpZmVyacibaSDImWkgZGUgY2UgYWkgdnJlYSBzxIMgw65udmXIm2kgYWzEg3R1cmkgZGUgbm9pLicsXHJcbiAgICB1cmw6ICcvaW50cm8vZGVzcHJlLW5vaScsXHJcbiAgICB0eXBlOiAnaW50cm8nLFxyXG4gICAgY29udHJpYnV0b3JzOiBbUGF2YV0sXHJcbiAgICBjb3ZlcjogJy9pbWFnZXMvbGVzc29ucy9sZXNzb24tMF9fY292ZXIuc3ZnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAndnJlYXUtc2EtYWp1dCcsXHJcbiAgICB3cml0dGVuOiBmYWxzZSxcclxuICAgIHRpdGxlOiAnQ3VtIHBvyJtpIGFqdXRhJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnTmUgZG9yaW0gY2EgYWNlc3QgcHJvaWVjdCBzxIMgZmllIHVuIGVmb3J0IGRlIGNvbXVuaXRhdGUsIGRlY2kgZGFjxIMtyJtpIHBsYWNlIGNlIGZhY2VtIGFpY2kgY29udHJpYnVpZSDImWkgdHUhJyxcclxuICAgIHVybDogJy9pbnRyby92cmVhdS1zYS1hanV0JyxcclxuICAgIHR5cGU6ICdpbnRybycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2NlLWVzdGUtZnJvbnRlbmQtdWwnLFxyXG4gICAgd3JpdHRlbjogZmFsc2UsXHJcbiAgICB0aXRsZTogJ0NlIGVzdGUgRnJvbnRFbmQtdWw/JyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnQWZsxIMgY2Ugw65uc2VhbW7EgyBzxIMgZmFjaSBhcGxpY2HIm2lpIFdlYiDImWkgZGUgY2UgZSBtdWx0IG1haSBpbnRlcmVzYW50IGRlY8OidCBhaSBwdXRlYSBjcmVkZS4nLFxyXG4gICAgdXJsOiAnL2ludHJvL2NlLWVzdGUtZnJvbnRlbmQtdWwnLFxyXG4gICAgdHlwZTogJ2ludHJvJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAndnMtY29kZScsXHJcbiAgICB3cml0dGVuOiBmYWxzZSxcclxuICAgIHRpdGxlOiAnVmlzdWFsU3R1ZGlvIENvZGUnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdTY3VydMSDIGludHJvZHVjZXJlIMOubiBwcm9ncmFtdWwgcGUgY2FyZS1sIHZvbSBmb2xvc2kgc8SDIHNjcmllbSBjb2QuJyxcclxuICAgIHVybDogJy9pbnRyby92cy1jb2RlJyxcclxuICAgIHR5cGU6ICdpbnRybycsXHJcbiAgICBjb250cmlidXRvcnM6IFtEaWFuYV0sXHJcbiAgfSxcclxuICAvKiogSFRNTCBsZXNzb25zICovXHJcbiAge1xyXG4gICAgaWQ6ICdkZXNwcmUtaHRtbCcsXHJcbiAgICB3cml0dGVuOiBmYWxzZSxcclxuICAgIHRpdGxlOiAnRGVzcHJlIEhUTUwnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICfDjm52YcibxIMgcHJpbmNpcGlpbGUgZGUgYmF6xIMgYWxlIGFjZXN0dWkgbGltYmFqIMiZaSBzY3JpZSBwcmltZWxlIGxpbmlpIGRlIGNvZC4nLFxyXG4gICAgdXJsOiAnL2h0bWwvZGVzcHJlLWh0bWwnLFxyXG4gICAgdHlwZTogJ2h0bWwnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdzdHJ1Y3R1cmEtZGUtYmF6YS1hLW9yaWNhcmVpLWFwbGljYXRpaScsXHJcbiAgICB3cml0dGVuOiBmYWxzZSxcclxuICAgIHRpdGxlOiAnU3RydWN0dXJhIGRlIGJhesSDIGEgb3JpY8SDcmVpIGFwbGljYcibaWkgd2ViJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnSW5kaWZlcmVudCBjZSB0aXAgZGUgYXBsaWNhyJtpZSBjcmVlemksIHRvYXRlIGF1IGFjZWVhyJlpIHN0cnVjdHVyxIMgZ2VuZXJhbMSDIGRlc3ByZSBjYXJlIHZvbSB2b3JiaSBhaWNpLicsXHJcbiAgICB1cmw6ICcvaHRtbC9zdHJ1Y3R1cmEtZGUtYmF6YS1hLW9yaWNhcmVpLWFwbGljYXRpaScsXHJcbiAgICB0eXBlOiAnaHRtbCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3ZhbGlkYXJlYS1wYWdpbmlsb3ItaHRtbCcsXHJcbiAgICB3cml0dGVuOiBmYWxzZSxcclxuICAgIHRpdGxlOiAnVmFsaWRhcmVhIHBhZ2luaWxvciBIVE1MJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnRGXImWkgcHV0ZW0gXCJzY8SDcGFcIiBmxINyxIMgc8SDIHNjcmllbSBIVE1MIHZhbGlkLCBhY2VzdCBsdWNydSBudSBlIGRlbG9jIMOubmN1cmFqYXQuIEhhaSBzxIMgdmVkZW0gZGUgY2UsIMiZaSBjdW0gbmUgcHV0ZW0gYXNpZ3VyYSBjxIMgc2NyaWVtIGNvZCBjb3JlY3QuJyxcclxuICAgIHVybDogJy9odG1sL3ZhbGlkYXJlYS1wYWdpbmlsb3ItaHRtbCcsXHJcbiAgICB0eXBlOiAnaHRtbCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3RleHRlJyxcclxuICAgIHdyaXR0ZW46IHRydWUsXHJcbiAgICB0aXRsZTogJ1RleHRlJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnQXZlbSBsYSBkaXNwb3ppyJtpZSBtYWkgbXVsdGUgZWxlbWVudGUgY8OibmQgdmluZSB2b3JiYSBkZSB0ZXh0ZSwgaWFyIGFpY2kgw65udsSDyJvEg20gY8OibmQgyJlpIGN1bSBzxIMgbGUgZm9sb3NpbS4nLFxyXG4gICAgdXJsOiAnL2h0bWwvdGV4dGUnLFxyXG4gICAgdHlwZTogJ2h0bWwnLFxyXG4gICAgY29udHJpYnV0b3JzOiBbRGlhbmFdLFxyXG4gICAgY292ZXI6ICcvaW1hZ2VzL2xlc3NvbnMvdGV4dC1lbGVtZW50c19fY292ZXIuc3ZnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnbGlzdGUnLFxyXG4gICAgd3JpdHRlbjogdHJ1ZSxcclxuICAgIHRpdGxlOiAnTGlzdGUnLFxyXG4gICAgZGVzY3JpcHRpb246ICdIYWkgc8SDIHZvcmJpbSBkZXNwcmUgY2VsZSAzIHRpcHVyaSBkZSBsaXN0ZSDImWkgY8OibmQgc8SDLWwgZm9sb3NlyJl0aSBwZSBmaWVjYXJlLicsXHJcbiAgICB1cmw6ICcvaHRtbC9saXN0ZScsXHJcbiAgICBjb250cmlidXRvcnM6IFtEaWFuYV0sXHJcbiAgICBjb3ZlcjogJy9pbWFnZXMvbGVzc29ucy9saXN0c19fY292ZXIuc3ZnJyxcclxuICAgIHR5cGU6ICdodG1sJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnY29udGFpbmVyZScsXHJcbiAgICB3cml0dGVuOiBmYWxzZSxcclxuICAgIHRpdGxlOiAnQ29udGFpbmVyZScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0FtIHBhcmN1cnMgY8OidGV2YSBlbGVtZW50ZSBkZSBiYXrEgywgZGFyIG51IGFtIHZvcmJpdCBkZXNwcmUgY3VtIGxlIG9yZ2FuaXrEg20gcGVudHJ1IGEgY3JlYSBsYXlvdXQtdXJpIG1haSBjb21wbGV4ZS4nLFxyXG4gICAgdXJsOiAnL2h0bWwvY29udGFpbmVyZScsXHJcbiAgICB0eXBlOiAnaHRtbCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2ltYWdpbmknLFxyXG4gICAgd3JpdHRlbjogdHJ1ZSxcclxuICAgIHRpdGxlOiAnSW1hZ2luaScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0bEg3LEgyBpbWFnaW5pIHdlYi11bCBhciBmaSBtdWx0IG1haSBwbGljdGljb3MsIGRlY2kgaGFpIHPEgyB2ZWRlbSBjdW0gbGUgcHV0ZW0gYWTEg3VnYSDImWkgY2FyZSBzdW50IGNlbGUgbWFpIGJ1bmUgcHJhY3RpY2kgbGVnYXRlIGRlIGFjZXN0ZWEuJyxcclxuICAgIGNvbnRyaWJ1dG9yczogW1BhdmFdLFxyXG4gICAgY292ZXI6ICcvaW1hZ2VzL2xlc3NvbnMvaW1hZ2VzX19jb3Zlci5zdmcnLFxyXG4gICAgdXJsOiAnL2h0bWwvaW1hZ2luaScsXHJcbiAgICB0eXBlOiAnaHRtbCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2F1ZGlvLXZpZGVvJyxcclxuICAgIHdyaXR0ZW46IHRydWUsXHJcbiAgICB0aXRsZTogJ1ZpZGVvIMiZaSBBdWRpbycsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0ltYWdpbmlsZSBhZHVjIG1haSBtdWx0xIMgdmlhyJvEgyBzaXRlLXVyaWxvciBub2FzdHJlLCBkYXIgcHV0ZW0gbWVyZ2UgdW4gcGFzIG1haSBkZXBhcnRlIGZvbG9zaW5kIGVsZW1lbnRlIHZpZGVvIMiZaSBhdWRpby4nLFxyXG4gICAgY292ZXI6ICcvaW1hZ2VzL2xlc3NvbnMvYXVkaW8tYW5kLXZpZGVvX19jb3Zlci5zdmcnLFxyXG4gICAgY29udHJpYnV0b3JzOiBbU2ViYXN0aWFuTGF0a29saWNdLFxyXG4gICAgdXJsOiAnL2h0bWwvYXVkaW8tdmlkZW8nLFxyXG4gICAgdHlwZTogJ2h0bWwnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdmb3JtdWxhcmUnLFxyXG4gICAgd3JpdHRlbjogZmFsc2UsXHJcbiAgICB0aXRsZTogJ0Zvcm11bGFyZScsXHJcbiAgICB1cmw6ICcvaHRtbC9mb3JtdWxhcmUnLFxyXG4gICAgZGVzY3JpcHRpb246ICdDdSBjZSBlbGVtZW50ZSBwdXRlbSBjb25zdHJ1aSBmb3JtdWxhcmUgbW9kZXJuZSwgyJlpIGNhcmUgc3VudCBjZWxlIG1haSBidW5lIHByYWN0aWNpIGxlZ2F0ZSBkZSBhY2VzdGVhLicsXHJcbiAgICBjb250cmlidXRvcnM6IFtSb2JlcnRQYXJhc2NhXSxcclxuICAgIHR5cGU6ICdodG1sJyxcclxuICB9LFxyXG4gIC8qKiBDU1MgTGVzc29ucyAqL1xyXG4gIHtcclxuICAgIGlkOiAnZGVzcHJlLWNzcycsXHJcbiAgICB3cml0dGVuOiBmYWxzZSxcclxuICAgIHRpdGxlOiAnRGVzcHJlIENTUycsXHJcbiAgICBkZXNjcmlwdGlvbjogJ8OObnZhyJvEgyBwcmluY2lwaWlsZSBkZSBiYXrEgyBhbGUgc3RpbGl6xINyaWkgcGFnaW5pbG9yIFdlYiDImWkgZmlpIGluc3BpcmF0IGRlIHRvdCBjZSBlIHBvc2liaWwgY3UgYWNlc3QgbGltYmFqLicsXHJcbiAgICB1cmw6ICcvY3NzL2Rlc3ByZS1jc3MnLFxyXG4gICAgdHlwZTogJ2NzcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ21vZHVyaS1zdGlsaXphcmUnLFxyXG4gICAgd3JpdHRlbjogdHJ1ZSxcclxuICAgIHRpdGxlOiAnQ2VsZSAzIG1vZHVyaSBkZSBzdGlsaXphcmUnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdCcm93c2VydWwgbmUgb2ZlcsSDIG1haSBtdWx0ZSBtb2R1cmkgcHJpbiBjYXJlIHB1dGVtIGFwbGljYSBzdGlsdXJpIHBhZ2luaWxvciBub2FzdHJlLiBIYWkgc8SDIHZvYmltIGRlc3ByZSBmaWVjYXJlIMOubiBwYXJ0ZS4nLFxyXG4gICAgdXJsOiAnL2Nzcy9tb2R1cmktc3RpbGl6YXJlJyxcclxuICAgIGNvdmVyOiAnL2ltYWdlcy9sZXNzb25zL3N0eWxpbmctbWV0aG9kc19fY292ZXIuc3ZnJyxcclxuICAgIHR5cGU6ICdjc3MnLFxyXG4gICAgY29udHJpYnV0b3JzOiBbRGFuaWVsSHV0YW51XSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAndGFndXJpLWNsYXNlLXNpLWlkLXVyaScsXHJcbiAgICB3cml0dGVuOiBmYWxzZSxcclxuICAgIHRpdGxlOiAnVGFnLXVyaSwgY2xhc2UgyJlpIGlkLXVyaScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ1BlbnRydSBhIHN0aWxpemEgdW4gZWxlbWVudCwgc2F1IG1haSBtdWx0ZSwgdHJlYnVpZSBzxIMgbGUgcHV0ZW0gZGlmZXJlbsibaWEgZmHIm8SDIGRlIGNlbGVsYWx0ZS4gUHV0ZW0gZmFjZSBhY2VzdCBsdWNydSBkdXDEgyB0YWcsIGNsYXNlIHNhdSBpZC11cmkuJyxcclxuICAgIHVybDogJy9jc3MvdGFndXJpLWNsYXNlLXNpLWlkLXVyaScsXHJcbiAgICB0eXBlOiAnY3NzJyxcclxuICAgIGNvbnRyaWJ1dG9yczogW05pY29sYWVNYXRpZXNdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdib3gtbW9kZWwnLFxyXG4gICAgd3JpdHRlbjogZmFsc2UsXHJcbiAgICB0aXRsZTogJ0JveCBtb2RlbCcsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0RlyJlpIHVuZWxlIHNpdGUtdXJpIHN1bnQgY3UgYWRldsSDcmF0IFdPVywgbGEgYmF6xIMgZmllY2FyZSBlbGVtZW50IGUgZG9hciB1biBkcmVwdHVuZ2hpIGN1IGPDonRldmEgcHJvcHJpZXTEg8ibaSBtYWkgc3BlY2lhbGUuIEFpY2kgw65udsSDyJvEg20gZGVzcHJlIGVsZS4nLFxyXG4gICAgdXJsOiAnL2Nzcy9ib3gtbW9kZWwnLFxyXG4gICAgdHlwZTogJ2NzcycsXHJcbiAgICBjb250cmlidXRvcnM6IFtDYXRhbGluUG9wdXNvaV0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3RyYW56aXRpaScsXHJcbiAgICB3cml0dGVuOiBmYWxzZSxcclxuICAgIHRpdGxlOiAnVHJhbnppyJtpaScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0V4dHJlbSBkZSBmb2xvc2l0ZSDDrm4gbXVsdGUgYXBsY2HIm2lpLCBhY2VzdGVhIGFkYXVnxIMgaW50ZXJhY3Rpdml0YXRlIHBhZ2luaWxvciBub2FzdHJlLicsXHJcbiAgICB1cmw6ICcvY3NzL3RyYW56aXRpaScsXHJcbiAgICB0eXBlOiAnY3NzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnYW5pbWF0aWknLFxyXG4gICAgd3JpdHRlbjogZmFsc2UsXHJcbiAgICB0aXRsZTogJ0FuaW1hyJtpaScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ1NpbWlsYXJlIGN1IHRyYW56acibaWlsZSBkYXIgbXVsdCBtYWkgcHV0ZXJuaWNlLiBTaW5ndXJhIGxpbWl0xIMgZSBjcmVhdGl2aXRhdGVhIScsXHJcbiAgICB1cmw6ICcvY3NzL2FuaW1hdGlpJyxcclxuICAgIHR5cGU6ICdjc3MnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdtZWRpYS1xdWVyaWVzJyxcclxuICAgIHdyaXR0ZW46IGZhbHNlLFxyXG4gICAgdGl0bGU6ICdDU1MgTWVkaWEgUXVlcmllcycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0ZvbG9zaW5kIGFjZWFzdMSDIHRlaG5pY8SDIHB1dGVtIGFwbGljYSBzdGlsdXJpIGRpZmVyaXRlIMOubiBmdW5jyJtpZSBkZSBkaW1lbnNpdW5lYSBlY3JhbnVsdWkgc2F1IGFsdGUgY2FyYWN0ZXJpc3RpY2kgYWxlIGRpc3Bveml0aXZ1bHVpLiBByJlhIHB1dGVtIGZhY2Ugc2l0ZS11bCBzxIMgYXJhdGUgYmluZSDImWkgcGUgdGVsZWZvbiDImWkgcGUgY2FsY3VsYXRvci4nLFxyXG4gICAgdXJsOiAnL2Nzcy9tZWRpYS1xdWVyaWVzJyxcclxuICAgIHR5cGU6ICdjc3MnLFxyXG4gIH0sXHJcbiAgLyoqIEphdmFTY3JpcHQgTGVzc29ucyAqL1xyXG4gIHtcclxuICAgIGlkOiAnZGVzcHJlLWphdmFzY3JpcHQnLFxyXG4gICAgd3JpdHRlbjogZmFsc2UsXHJcbiAgICB0aXRsZTogJ0Rlc3ByZSBKYXZhU2NyaXB0JyxcclxuICAgIGRlc2NyaXB0aW9uOiAnQ3UgSFRNTCDImWkgQ1NTIHB1dGVtIGNyZWEgbyBleHBlcmllbsibxIMgdml6dWFsxIMgcGzEg2N1dMSDLCBkYXIgbGlwc2l0xIMgZGUgaW50ZXJhY3Rpdml0YXRlLiBBaWNpIGludHLEgyDDrm4gc2NlbsSDIEphdmFTY3JpcHQsIGxpbWJhanVsIGN1IGNhcmUgdG90dWwgZSBwb3NpYmlsLicsXHJcbiAgICB1cmw6ICcvamF2YXNjcmlwdC9kZXNwcmUtamF2YXNjcmlwdCcsXHJcbiAgICB0eXBlOiAnamF2YXNjcmlwdCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2N1bS1zYS1nYW5kaW0tY2EtdW4tcHJvZ3JhbWF0b3InLFxyXG4gICAgd3JpdHRlbjogZmFsc2UsXHJcbiAgICB0aXRsZTogJ0N1bSBzxIMgZ8OibmRpbSBjYSB1biBwcm9ncmFtYXRvcicsXHJcbiAgICBkZXNjcmlwdGlvbjogJ8OObmFpbnRlIHPEgyBcInPEg3JpbVwiIMOubiBwcm9nYW1hcmVhIGVmZWN0aXbEgywgaGFpIHPEgyB2b3JiaW0gcHXIm2luIGRlc3ByZSBjZSDDrm5zZWFtbsSDIHPEgyBzY3JpaSBjb2QgyJlpIGN1bSBzxIMgYWJvcmRlemkgYWNlYXN0xIMgbm91xIMgcHJvdm9jYXJlLicsXHJcbiAgICB1cmw6ICcvamF2YXNjcmlwdC9jdW0tc2EtZ2FuZGltLWNhLXVuLXByb2dyYW1hdG9yJyxcclxuICAgIHR5cGU6ICdqYXZhc2NyaXB0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAndmFyaWFiaWxlLXNpLXRpcHVyaS1wcmltaXRpdmUnLFxyXG4gICAgd3JpdHRlbjogZmFsc2UsXHJcbiAgICB0aXRsZTogJ1ZhcmlhYmlsZSDImWkgdGlwdXJpIHByaW1pdGl2ZScsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0NlIHN1bnQgdmFyaWFiaWxlbGUsIGRlIGNlIGF2ZW0gbmV2b2llIGRlIGVsZSDImWkgY3VtIGxlIGZvbG9zaW0uJyxcclxuICAgIHVybDogJy9qYXZhc2NyaXB0L3ZhcmlhYmlsZS1zaS10aXB1cmktcHJpbWl0aXZlJyxcclxuICAgIHR5cGU6ICdqYXZhc2NyaXB0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnb2JpZWN0ZS1zaS1hcnJheS11cmknLFxyXG4gICAgd3JpdHRlbjogZmFsc2UsXHJcbiAgICB0aXRsZTogJ09iaWVjdGUgyJlpIEFycmF5LXVyaScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0RhY8SDIHDDom7EgyBhY3VtIGFtIGF2dXQgdmFyaWFiaWxlIGN1IG8gc2luZ3VyxIMgdmFsb2FyZSwgw65uIE9iaWVjdGUgyJlpIEFycmF5LXVyaSBwdXRlbSByZcibaW5lIG1haSBtdWx0ZSBpbmZvcm1hyJtpaSBjZSBhdSBsZWfEg3R1csSDIMOubnRyZSBlbGUuJyxcclxuICAgIHVybDogJy9qYXZhc2NyaXB0L29iaWVjdGUtc2ktYXJyYXktdXJpJyxcclxuICAgIHR5cGU6ICdqYXZhc2NyaXB0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnZnVuY3RpaScsXHJcbiAgICB3cml0dGVuOiBmYWxzZSxcclxuICAgIHRpdGxlOiAnRnVuY8ibaWknLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdPcmdhbml6ZWF6xIMgY29kdWwgw65uIFwicMSDcsibaVwiIHJldXRpbGl6YWJpbGUgcGVudHJ1IG8gbWFpIGJ1bsSDIGFyaGl0ZWN0dXLEgy4nLFxyXG4gICAgdXJsOiAnL2phdmFzY3JpcHQvZnVuY3RpaScsXHJcbiAgICB0eXBlOiAnamF2YXNjcmlwdCcsXHJcbiAgfSxcclxuICAvKiogRXh0cmEgTGVzc29ucyAqL1xyXG4gIHtcclxuICAgIGlkOiAnZGV2dG9vbHMnLFxyXG4gICAgd3JpdHRlbjogZmFsc2UsXHJcbiAgICB0aXRsZTogJ0RldlRvb2xzJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnQnJvd3Nlci1lbGUgbmUgb2ZlcsSDIG11bHRlIHRvb2wtdXJpIGNhcmUgbmUgbcSDcmVzYyBwcm9kdWN0aXZpdGF0ZWEgZXh0cmVtIGRlIG11bHQuIEhhaSBzxIMgw65udsSDyJvEg20gc8SDIGxlIGZvbG9zaW0gw65uIGFjZWFzdMSDIGxlY8ibaWUuJyxcclxuICAgIHVybDogJy9qYXZhc2NyaXB0L2RldnRvb2xzJyxcclxuICAgIHR5cGU6ICdleHRyYScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2dyYWNlZnVsLWRlZ3JhZGF0aW9uJyxcclxuICAgIHdyaXR0ZW46IGZhbHNlLFxyXG4gICAgdGl0bGU6ICdHcmFjZWZ1bCBEZWdyYWRhdGlvbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ1VuIG1vZCBkZSBhIG5lIGNvbnN0cnVpIGFwbGljYcibaWlsZSBhc3RmZWwgw65uY8OidCDImWkgdXRpbGl6YXRvcmlpIGRlIHBlIGRpc3Bveml0aXZlIG1haSB2ZWNoaSBzxIMgYWlixIMgbyBleHBlcmllbsibxIMgZGVjZW50xIMnLFxyXG4gICAgdXJsOiAnL2NvbmNlcHRlL2dyYWNlZnVsLWRlZ3JhZGF0aW9uJyxcclxuICAgIHR5cGU6ICdleHRyYScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2JpYmxpb3RlY2ktc2ktZnJhbWV3b3JrLXVyaScsXHJcbiAgICB3cml0dGVuOiBmYWxzZSxcclxuICAgIHRpdGxlOiAnQmlibGlvdGVjaSDImWkgRnJhbWV3b3JrLXVyaScsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0PDom5kIHZlaSBsdWNyYSBsYSBwcm9pZWN0ZSBcInJlYWxlXCIgYWzEg3R1cmkgZGUgYWzIm2kgZGV2ZWxvcGVyaSwgdmVpIHZlZGVhIGPEgyBkZSBtdWx0ZSBvcmkgcmVmb2xvc2ltIGNvZCBzY3JpcyBkZSBhbMibaWkgc3ViIGZvcm3EgyBkZSBiaWJsaW90ZWNpIHNhdSBmcmFtZXdvcmstdXJpLicsXHJcbiAgICB1cmw6ICcvY29uY2VwdGUvYmlibGlvdGVjaS1zaS1mcmFtZXdvcmstdXJpJyxcclxuICAgIHR5cGU6ICdleHRyYScsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVcGNvbWluZ0xlc3NvbihwYXRobmFtZTogc3RyaW5nKTogTGVzc29uRGVzY3JpcHRpb24ge1xyXG4gIGNvbnN0IHVwY29taW5nTGVzc29uID0gTEVTU09OUy5maW5kKChhcnRpY2xlKSA9PiBwYXRobmFtZS5pbmNsdWRlcyhhcnRpY2xlLnVybCkpO1xyXG5cclxuICByZXR1cm4gdXBjb21pbmdMZXNzb24gfHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExlc3NvbkJ5SWQoaWQ6IHN0cmluZyk6IExlc3NvbkRlc2NyaXB0aW9uIHtcclxuICBjb25zdCBtYXRjaCA9IExFU1NPTlMuZmluZCgobGVzc29uKSA9PiBsZXNzb24uaWQgPT09IGlkKTtcclxuXHJcbiAgcmV0dXJuIG1hdGNoIHx8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHSVRIVUJfT1JHX1VSTCA9ICdodHRwczovL2dpdGh1Yi5jb20vRnJvbnRFbmQtcm8nO1xyXG5leHBvcnQgY29uc3QgR0lUSFVCX1VSTCA9ICdodHRwczovL2dpdGh1Yi5jb20vRnJvbnRFbmQtcm8vZnJvbnRlbmQucm8nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWd1cmUge1xyXG4gIGFsdDogc3RyaW5nO1xyXG4gIHNyYzogc3RyaW5nO1xyXG4gIGRlbW8/OiBzdHJpbmc7XHJcbiAgaXNWaWRlbz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJTUFHRVNfTUlNRV9UWVBFUyA9IFsnaW1hZ2UvcG5nJywgJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvanBnJywgJ2ltYWdlL3dlYnAnLCAnaW1hZ2Uvc3ZnK3htbCddO1xyXG5leHBvcnQgY29uc3QgSU1BR0VTX0VYVEVOU0lPTlMgPSBbJ3BuZycsICdqcGcnLCAnanBlZycsICd3ZWJwJywgJ3N2ZyddO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZFRURCQUNLX1RZUEVTID0ge1xyXG4gIFBSQUlTRTogJ3ByYWlzZScsXHJcbiAgT1BJTklPTjogJ29waW5pb24nLFxyXG4gIElNUFJPVkVNRU5UOiAnaW1wcm92ZW1lbnQnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PTkFDTyA9IHtcclxuICBUT1BJQ19NQVJLRE9XTl9NQVhfTEVOR1RIOiAyMDQ4LFxyXG4gIEVYRVJDSVNFX01BUktET1dOX01BWF9MRU5HVEg6IDUwMDAsXHJcblxyXG4gIEVWRU5UUzoge1xyXG4gICAgQ1VSU09SOiAnQycsXHJcbiAgICBTRUxFQ1RJT046ICdTRScsXHJcbiAgICBNT0RFTDogJ00nLFxyXG4gICAgU0NST0xMOiAnU0MnLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBIdHRwU2VydmljZSBmcm9tICcuL0h0dHAuc2VydmljZSc7XHJcblxyXG5pbnRlcmZhY2UgTmV3RXhlcmNpc2VQYXlsb2FkIHtcclxuICBib2R5OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZTogYm9vbGVhbjtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgc29sdXRpb246IHN0cmluZztcclxuICBleGFtcGxlPzogc3RyaW5nO1xyXG4gIHN1Z2dlc3Rpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIEV4ZXJjaXNlU2VydmljZSB7XHJcbiAgc3RhdGljIGdldEV4ZXJjaXNlKGV4ZXJjaXNlSWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIEh0dHBTZXJ2aWNlXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuRU5EUE9JTlR9L2V4ZXJjaXNlcy8ke2V4ZXJjaXNlSWR9YClcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB1cGxvYWRNZWRpYShuYW1lOiBzdHJpbmcsIGZpbGU6IEZpbGUpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIG5hbWUpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XHJcblxyXG4gICAgcmV0dXJuIEh0dHBTZXJ2aWNlXHJcbiAgICAgIC5wb3N0KGAke3Byb2Nlc3MuZW52LkVORFBPSU5UfS9leGVyY2lzZXMvbWVkaWFgLCBmb3JtRGF0YSlcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVFeGVyY2lzZShwYXlsb2FkOiBOZXdFeGVyY2lzZVBheWxvYWQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIEh0dHBTZXJ2aWNlXHJcbiAgICAgIC5wb3N0KGAke3Byb2Nlc3MuZW52LkVORFBPSU5UfS9leGVyY2lzZXNgLCBwYXlsb2FkKVxyXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHVwZGF0ZUV4ZXJjaXNlKGlkOiBzdHJpbmcsIHBheWxvYWQ6IE5ld0V4ZXJjaXNlUGF5bG9hZCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gSHR0cFNlcnZpY2VcclxuICAgICAgLnB1dChgJHtwcm9jZXNzLmVudi5FTkRQT0lOVH0vZXhlcmNpc2VzLyR7aWR9YCwgcGF5bG9hZClcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRTb2x2ZWRFeGVyY2lzZXMoKSB7XHJcbiAgICByZXR1cm4gSHR0cFNlcnZpY2UuZ2V0KGAke3Byb2Nlc3MuZW52LkVORFBPSU5UfS9leGVyY2lzZXMvc29sdmVkYClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldENyZWF0ZWRFeGVyY2lzZXMoKSB7XHJcbiAgICByZXR1cm4gSHR0cFNlcnZpY2UuZ2V0KGAke3Byb2Nlc3MuZW52LkVORFBPSU5UfS9leGVyY2lzZXNgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0UHVibGljQ3JlYXRlZEV4ZXJjaXNlcyh1c2VybmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gSHR0cFNlcnZpY2UuZ2V0KGAke3Byb2Nlc3MuZW52LkVORFBPSU5UfS9leGVyY2lzZXMvcHVibGljLyR7dXNlcm5hbWV9YClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRlbGV0ZShpZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gSHR0cFNlcnZpY2UuZGVsZXRlKGAke3Byb2Nlc3MuZW52LkVORFBPSU5UfS9leGVyY2lzZXMvJHtpZH1gKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRXhlcmNpc2VTZXJ2aWNlO1xyXG4iLCJpbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IE11dGFibGVSZWZPYmplY3QsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVXNlclN0YXRlIH0gZnJvbSAnfi9yZWR1eC91c2VyL3R5cGVzJztcclxuaW1wb3J0IENsaWVudE1vbml0b3JpbmcsIHsgTG9nRXZlbnRUeXBlIH0gZnJvbSAnLi9DbGllbnRNb25pdG9yaW5nJztcclxuaW1wb3J0IFN3ZWV0QWxlcnRTZXJ2aWNlIGZyb20gJy4vc3dlZXQtYWxlcnQvU3dlZXRBbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vVXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gdXNlT3V0c2lkZUNsaWNrKHJlZjogTXV0YWJsZVJlZk9iamVjdDxIVE1MRWxlbWVudD4sIGhhbmRsZXI6IChlOiBNb3VzZUV2ZW50KSA9PiB2b2lkKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICghcmVmLmN1cnJlbnQgfHwgcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaGFuZGxlcihldmVudCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICB9LCBbcmVmLCBoYW5kbGVyXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUNsaXBib2FyZChyZWY6IE11dGFibGVSZWZPYmplY3Q8SFRNTEVsZW1lbnQ+LCBvbkNvcHk6ICgpID0+IHZvaWQgPSBub29wKSB7XHJcbiAgY29uc3QgaW5pdENsaXBib2FyZCA9IChDbGlwYm9hcmRKUykgPT4ge1xyXG4gICAgbGV0IGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmRKUyhyZWYuY3VycmVudCk7XHJcblxyXG4gICAgY2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgKGUpID0+IHtcclxuICAgICAgZS5jbGVhclNlbGVjdGlvbigpO1xyXG5cclxuICAgICAgU3dlZXRBbGVydFNlcnZpY2UudG9hc3QoeyB0ZXh0OiAnU3VjY2Vzc2Z1bGx5IGNvcGllZCB0byBjbGlwYm9hcmQuJyB9KTtcclxuICAgICAgb25Db3B5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGlwYm9hcmQub24oJ2Vycm9yJywgKCkgPT4ge1xyXG4gICAgICBTd2VldEFsZXJ0U2VydmljZS50b2FzdCh7IHR5cGU6ICdlcnJvcicsIHRleHQ6IFwiU2VlbXMgbGlrZSB5b3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGNsaXBib2FyZCBjb3B5aW5nLiBZb3UgaGF2ZSB0byBjb3B5IGl0IG1hbnVhbGx5Li4uXCIgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW1wb3J0KCdjbGlwYm9hcmQnKS50aGVuKChtb2R1bGUpID0+IHtcclxuICAgICAgaW5pdENsaXBib2FyZChtb2R1bGUuZGVmYXVsdCk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdpdGhDbGllbnRNb25pdG9yaW5nKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXHJcbiAgICBpZiAoIWxvY2F0aW9uLmhvc3QuaW5jbHVkZXMoJ2Zyb250ZW5kLnJvJykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgQ2xpZW50TW9uaXRvcmluZy5sb2coTG9nRXZlbnRUeXBlLlJPVVRFKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgQ2xpZW50TW9uaXRvcmluZy5kZXN0cm95KTtcclxuICB9LCBbXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdpdGhTbW9vdGhTY3JvbGwocmVmOiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxFbGVtZW50Pikge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZWYuY3VycmVudC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9ICdzbW9vdGgnO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcmVmLmN1cnJlbnQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSAnaW5pdGlhbCc7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlTG9nZ2VkSW5Pbmx5KGlzTG9nZ2VkSW46IGJvb2xlYW4sIHBhdGg6IHN0cmluZykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBpZiAoIWlzTG9nZ2VkSW4gJiYgcGF0aCkge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKGAvYXV0aD9uZXh0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhdGgpfWApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXNlQW5vbnltb3VzT25seShyb3V0ZXI6IE5leHRSb3V0ZXIsIGlzTG9nZ2VkSW46IGJvb2xlYW4sIG5leHRIcmVmOiBzdHJpbmcpIHtcclxuICBpZiAoaXNMb2dnZWRJbiAmJiBuZXh0SHJlZikge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKG5leHRIcmVmKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJZiB0aGUgdXNlciBpcyBub3QgbG9nZ2VkIGluIHdoZW4gdGhpcyBtZXRob2QgaXMgY2FsbGVkLFxyXG4gKiBsZXQncyBzaG93IHRoZSBMb2dpbi9SZWdpc3RlciBtb2RhbCBhbmQgYXV0aGVudGljYXRlL3JlZ2lzdGVyLlxyXG4gKi9cclxuZnVuY3Rpb24gd2l0aEF1dGhNb2RhbChpc0xvZ2dlZEluOiBib29sZWFuLCBjYjogKC4uLmFueSkgPT4gYW55KSB7XHJcbiAgcmV0dXJuICguLi5wcm9wcykgPT4ge1xyXG4gICAgaWYgKGlzTG9nZ2VkSW4pIHtcclxuICAgICAgY2IoLi4ucHJvcHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW1wb3J0KCd+L2NvbXBvbmVudHMvbG9naW4vTG9naW4nKS50aGVuKChtb2R1bGUpID0+IHtcclxuICAgICAgICBTd2VldEFsZXJ0U2VydmljZS5jb250ZW50KFxyXG4gICAgICAgICAgbW9kdWxlLmRlZmF1bHQsXHJcbiAgICAgICAgICAnQXV0ZW50aWZpY8SDLXRlJyxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgb25TdWNjZXNzKHVzZXJJbmZvOiBVc2VyU3RhdGVbJ2luZm8nXSkge1xyXG4gICAgICAgICAgICAgIFN3ZWV0QWxlcnRTZXJ2aWNlLmNsb3NlUG9wdXAoKTtcclxuICAgICAgICAgICAgICBjYiguLi5wcm9wcywgdXNlckluZm8pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHVzZU91dHNpZGVDbGljayxcclxuICB1c2VDbGlwYm9hcmQsXHJcbiAgd2l0aENsaWVudE1vbml0b3JpbmcsXHJcbiAgd2l0aFNtb290aFNjcm9sbCxcclxuICB1c2VMb2dnZWRJbk9ubHksXHJcbiAgdXNlQW5vbnltb3VzT25seSxcclxuICB3aXRoQXV0aE1vZGFsLFxyXG59O1xyXG4iLCJpbXBvcnQgU3dlZXRBbGVydFNlcnZpY2UgZnJvbSAnLi9zd2VldC1hbGVydC9Td2VldEFsZXJ0LnNlcnZpY2UnO1xyXG5cclxuY2xhc3MgSHR0cCB7XHJcbiAgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zID0ge30pIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBHZW5lcmljKHVybCwgeyAuLi5vcHRpb25zLCBtZXRob2Q6ICdHRVQnIH0pO1xyXG4gIH1cclxuXHJcbiAgcG9zdCh1cmw6IHN0cmluZywgYm9keSA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBHZW5lcmljKHVybCwge1xyXG4gICAgICAuLi5vcHRpb25zLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHV0KHVybDogc3RyaW5nLCBib2R5ID0ge30sIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cEdlbmVyaWModXJsLCB7XHJcbiAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIGJvZHksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBhdGNoKHVybDogc3RyaW5nLCBib2R5ID0ge30sIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cEdlbmVyaWModXJsLCB7XHJcbiAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgYm9keSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKHVybDogc3RyaW5nLCBib2R5ID0ge30sIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cEdlbmVyaWModXJsLCB7XHJcbiAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgIGJvZHksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXHJcbiAgcHJpdmF0ZSBodHRwR2VuZXJpYyh1cmw6IHN0cmluZywgb3B0aW9uczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9KSB7XHJcbiAgICBjb25zdCBoZWFkZXJzSW5pdDogSGVhZGVyc0luaXQgPSB7XHJcbiAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChvcHRpb25zLmJvZHkgJiYgIShvcHRpb25zLmJvZHkgaW5zdGFuY2VvZiBGb3JtRGF0YSkpIHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuYm9keSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGUgaGVhZGVyc0luaXRbJ2NvbnRlbnQtdHlwZSddO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoaGVhZGVyc0luaXQpLFxyXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAuLi5vcHRpb25zLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgICBpZiAocmVzcC5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwLmpzb24oKS50aGVuKChqc29uUmVzcCkgPT4ge1xyXG4gICAgICAgICAgdGhyb3cganNvblJlc3A7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgaWYgKCFlcnIgfHwgIWVyci5jb2RlIHx8IGVyci5jb2RlID09PSA1MDApIHtcclxuICAgICAgICAgIFN3ZWV0QWxlcnRTZXJ2aWNlLmVycm9yKHtcclxuICAgICAgICAgICAgdGV4dDogZXJyLm1lc3NhZ2UgfHwgJ1JlZnJlc2gtdWllyJl0ZSBwYWdpbmEgyJlpIMOubmNlYXJjxIMgZGluIG5vdS4nLFxyXG4gICAgICAgICAgICBidXR0b25UZXh0OiAnT2shJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEh0dHAoKTtcclxuIiwiaW1wb3J0IEh0dHBTZXJ2aWNlIGZyb20gJy4vSHR0cC5zZXJ2aWNlJztcclxuXHJcbmNsYXNzIExlc3NvbkV4ZXJjaXNlU2VydmljZSB7XHJcbiAgc3RhdGljIGdldEFsbExlc3NvbkV4ZXJjaXNlcygpIHtcclxuICAgIHJldHVybiBIdHRwU2VydmljZVxyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkVORFBPSU5UfS9sZXNzb24tZXhlcmNpc2VzYClcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRMZXNzb25FeGVyY2lzZShleGVyY2lzZUlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBIdHRwU2VydmljZVxyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkVORFBPSU5UfS9sZXNzb24tZXhlcmNpc2VzLyR7ZXhlcmNpc2VJZH1gKVxyXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEFsbEV4ZXJjaXNlc0Zvckxlc3NvbnMobGVzc29uSWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIEh0dHBTZXJ2aWNlXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuRU5EUE9JTlR9L2xlc3Nvbi1leGVyY2lzZXMvbGVzc29uLyR7bGVzc29uSWR9YClcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGVzc29uRXhlcmNpc2VTZXJ2aWNlO1xyXG4iLCJpbXBvcnQgeyB1dWlkIH0gZnJvbSAnfi9zZXJ2aWNlcy9VdGlscyc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL3JlZHV4L3VzZXIvdHlwZXMnO1xyXG5pbXBvcnQgSHR0cFNlcnZpY2UgZnJvbSAnLi9IdHRwLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgTU9DS19OT1RJRklDQVRJT05TOiBOb3RpZmljYXRpb25bXSA9IFtcclxuICB7XHJcbiAgICBfaWQ6IHV1aWQoKSxcclxuICAgIHVzZXJuYW1lOiAnRGlhbmExMjMnLFxyXG4gICAgbmFtZTogJ0RpYW5hJyxcclxuICAgIGF2YXRhcjpcclxuICAgICAgJ2h0dHBzOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvOWQ0ZDc5MGViODVlNTZkNjUyNGZhZWQ4YTg4M2Q2Y2I/cz01MDAmZD00MDQnLFxyXG4gICAgbWVzc2FnZTogJ2FkZGVkIGEgbmV3IGV4ZXJjaXNlJyxcclxuICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgIGlzVW5yZWFkOiB0cnVlLFxyXG4gICAgdXJsOiAnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIF9pZDogdXVpZCgpLFxyXG4gICAgdXNlcm5hbWU6ICdBbGV4UGF2YScsXHJcbiAgICBuYW1lOiAnQWxleCcsXHJcbiAgICBhdmF0YXI6ICdodHRwczovL2pvZXNjaG1vZS5pby9hcGkvdjEvam9zaCcsXHJcbiAgICBtZXNzYWdlOiAnc2VudCB5b3UgYSBtZXNzYWdlJyxcclxuICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgIGlzVW5yZWFkOiB0cnVlLFxyXG4gICAgdXJsOiAnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIF9pZDogdXVpZCgpLFxyXG4gICAgdXNlcm5hbWU6ICdBbmRyZWk4MicsXHJcbiAgICBuYW1lOiAnQW5kcmVpJyxcclxuICAgIGF2YXRhcjogJ2h0dHBzOi8vam9lc2NobW9lLmlvL2FwaS92MS9qb24nLFxyXG4gICAgbWVzc2FnZTogJ2FkZGVkIGEgbmV3IGV4ZXJjaXNlJyxcclxuICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgIGlzVW5yZWFkOiB0cnVlLFxyXG4gICAgdXJsOiAnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIF9pZDogdXVpZCgpLFxyXG4gICAgdXNlcm5hbWU6ICdBbnRvbmlhQmViZScsXHJcbiAgICBuYW1lOiAnQW50b25pYScsXHJcbiAgICBhdmF0YXI6ICdodHRwczovL2pvZXNjaG1vZS5pby9hcGkvdjEvamVzcycsXHJcbiAgICBtZXNzYWdlOiAnc2VudCB5b3UgYSBtZXNzYWdlJyxcclxuICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgIGlzVW5yZWFkOiB0cnVlLFxyXG4gICAgdXJsOiAnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIF9pZDogdXVpZCgpLFxyXG4gICAgdXNlcm5hbWU6ICdSYWx1Y2E5OScsXHJcbiAgICBuYW1lOiAnUmFsdWNhJyxcclxuICAgIGF2YXRhcjogJ2h0dHBzOi8vam9lc2NobW9lLmlvL2FwaS92MS9qYW5lJyxcclxuICAgIG1lc3NhZ2U6ICdhZGRlZCBhIG5ldyB0b3BpYycsXHJcbiAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICBpc1VucmVhZDogdHJ1ZSxcclxuICAgIHVybDogJycsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IExPQURfRFVSQVRJT04gPSAxMDAwO1xyXG5cclxuY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gIHN0YXRpYyBwaW5nKCkge1xyXG4gICAgcmV0dXJuIEh0dHBTZXJ2aWNlLmdldChgJHtwcm9jZXNzLmVudi5FTkRQT0lOVH0vYXV0aC9waW5nYCkudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHN1YnNjcmliZSh7IG5hbWUsIGVtYWlsIH0pIHtcclxuICAgIHJldHVybiBIdHRwU2VydmljZS5wb3N0KGAke3Byb2Nlc3MuZW52LkVORFBPSU5UfS9hdXRoL3N1YnNjcmliZWAsIHtcclxuICAgICAgbmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICB9KS50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbG9naW4oe1xyXG4gICAgZW1haWxPclVzZXJuYW1lLFxyXG4gICAgcGFzc3dvcmQsXHJcbiAgfToge1xyXG4gICAgZW1haWxPclVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIH0pIHtcclxuICAgIHJldHVybiBIdHRwU2VydmljZS5wb3N0KGAke3Byb2Nlc3MuZW52LkVORFBPSU5UfS9hdXRoL2xvZ2luYCwge1xyXG4gICAgICBlbWFpbE9yVXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSkudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxvZ291dCgpIHtcclxuICAgIHJldHVybiBIdHRwU2VydmljZS5wb3N0KGAke3Byb2Nlc3MuZW52LkVORFBPSU5UfS9hdXRoL2xvZ291dGApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNoZWNrVXNlcm5hbWUodXNlcm5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIEh0dHBTZXJ2aWNlLmdldChcclxuICAgICAgYCR7cHJvY2Vzcy5lbnYuRU5EUE9JTlR9L2F1dGgvY2hlY2stdXNlcm5hbWUvJHt1c2VybmFtZX1gLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZWdpc3Rlcih7XHJcbiAgICBlbWFpbCxcclxuICAgIHVzZXJuYW1lLFxyXG4gICAgcGFzc3dvcmQsXHJcbiAgfToge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIH0pIHtcclxuICAgIHJldHVybiBIdHRwU2VydmljZS5wb3N0KGAke3Byb2Nlc3MuZW52LkVORFBPSU5UfS9hdXRoL3JlZ2lzdGVyYCwge1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSkudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHVwZGF0ZU5hbWUocGF5bG9hZDoge25hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZ30pIHtcclxuICAgIHJldHVybiBIdHRwU2VydmljZVxyXG4gICAgICAucG9zdChgJHtwcm9jZXNzLmVudi5FTkRQT0lOVH0vYXV0aC9uYW1lYCwgcGF5bG9hZClcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB1cGRhdGVEZXNjcmlwdGlvbihwYXlsb2FkOiB7ZGVzY3JpcHRpb246IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZ30pIHtcclxuICAgIHJldHVybiBIdHRwU2VydmljZVxyXG4gICAgICAucG9zdChgJHtwcm9jZXNzLmVudi5FTkRQT0lOVH0vYXV0aC9kZXNjcmlwdGlvbmAsIHBheWxvYWQpXHJcbiAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdXBkYXRlVXNlcm5hbWUocGF5bG9hZDoge3VzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmd9KSB7XHJcbiAgICByZXR1cm4gSHR0cFNlcnZpY2VcclxuICAgICAgLnBvc3QoYCR7cHJvY2Vzcy5lbnYuRU5EUE9JTlR9L2F1dGgvdXNlcm5hbWVgLCBwYXlsb2FkKVxyXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHVwZGF0ZUVtYWlsKHBheWxvYWQ6IHtlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nfSkge1xyXG4gICAgcmV0dXJuIEh0dHBTZXJ2aWNlXHJcbiAgICAgIC5wb3N0KGAke3Byb2Nlc3MuZW52LkVORFBPSU5UfS9hdXRoL2VtYWlsYCwgcGF5bG9hZClcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB1cGRhdGVQYXNzd29yZChwYXlsb2FkOiB7bmV3UGFzc3dvcmQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZ30pIHtcclxuICAgIHJldHVybiBIdHRwU2VydmljZVxyXG4gICAgICAucG9zdChgJHtwcm9jZXNzLmVudi5FTkRQT0lOVH0vYXV0aC9wYXNzd29yZGAsIHBheWxvYWQpXHJcbiAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdXBsb2FkQXZhdGFyKGZpbGU6IEJsb2IpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xyXG5cclxuICAgIHJldHVybiBIdHRwU2VydmljZVxyXG4gICAgICAucG9zdChgJHtwcm9jZXNzLmVudi5FTkRQT0lOVH0vYXV0aC9hdmF0YXJgLCBmb3JtRGF0YSlcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWxldGUocGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIEh0dHBTZXJ2aWNlXHJcbiAgICAgIC5kZWxldGUoYCR7cHJvY2Vzcy5lbnYuRU5EUE9JTlR9L2F1dGhgLCB7IHBhc3N3b3JkIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHdhaXQobWlsaSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1pbGkpKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXROb3RpZmljYXRpb25zKHBhZ2UgPSAwKSB7XHJcbiAgICBhd2FpdCBVc2VyU2VydmljZS53YWl0KExPQURfRFVSQVRJT04pO1xyXG4gICAgcmV0dXJuIE1PQ0tfTk9USUZJQ0FUSU9OUztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBtYXJrQXNSZWFkKGlkKSB7XHJcbiAgICBhd2FpdCBVc2VyU2VydmljZS53YWl0KExPQURfRFVSQVRJT04pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIG1hcmtBbGxBc1JlYWQoKSB7XHJcbiAgICBhd2FpdCBVc2VyU2VydmljZS53YWl0KExPQURfRFVSQVRJT04pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclNlcnZpY2U7XHJcbiIsImV4cG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cclxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxyXG5cclxuLyoqXHJcbiAqIEhlcmUgd2UgbWFrZSB0aGUgZnVuY3Rpb24gdGltZUFnbyB0byBmb3JtYXQgYSBKYXZhU2NyaXB0IERhdGUgYXMgYVxyXG4gKiBzdHJpbmcgc3RhdGluZyB0aGUgdGltZSBlbGFwc2VkLiBXZSBwYXJzZSB0aGUgdGltZSwgYW5kIHNob3cgaXRcclxuICogZGVwZW5kaW5nIG9uIHdoZW4gaXQgd2FzIHN1Ym1pdHRlZDpcclxuICpcclxuICog4p6kIEp1c3Qgbm93IC0gaWYgdGhlIHN1Ym1pc3Npb24gd2FzIHVuZGVyIG9uZSBtaW51dGUgYWdvXHJcbiAqIOKepCBYIG1pbnV0ZXMgYWdvIG9yIFkgaG91cnMgYWdvXHJcbiAqIOKepCBZZXN0ZXJkYXlcclxuICog4p6kIFggZGF5cyBhZ28gLSB1cCB0byAzIGRheXNcclxuICog4p6kIDEwIFNlcHQgMjAyMCBpZiBpdCBhcyBtb3JlIHRoYW4gMyBkYXlzIGFnb1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRpbWVBZ28gPSAoZGF0ZTogRGF0ZSk6IHN0cmluZyA9PiB7XHJcbiAgbGV0IG1zID0gRGF0ZS5ub3coKSAtIGRhdGUuZ2V0VGltZSgpO1xyXG4gIGxldCBzZWNvbmRzID0gTWF0aC5mbG9vcihtcyAvIDEwMDApO1xyXG4gIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xyXG4gIGxldCBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcclxuICBsZXQgZGF5cyA9IE1hdGguZmxvb3IoaG91cnMgLyAyNCk7XHJcblxyXG4gIGlmIChzZWNvbmRzIDwgNjApIHtcclxuICAgIHJldHVybiAnQ2hpYXIgYWN1bSc7XHJcbiAgfVxyXG4gIGlmIChtaW51dGVzIDwgNjApIHtcclxuICAgIHJldHVybiBtaW51dGVzID09PSAxXHJcbiAgICAgID8gYGFjdW0gJHttaW51dGVzfSBtaW51dGBcclxuICAgICAgOiBgYWN1bSAke21pbnV0ZXN9IG1pbnV0ZSBgO1xyXG4gIH1cclxuICBpZiAoaG91cnMgPCAyNCkge1xyXG4gICAgcmV0dXJuIGhvdXJzID09PSAxXHJcbiAgICAgID8gYGFjdW0gJHtob3Vyc30gb3LEg2BcclxuICAgICAgOiBgYWN1bSAke2hvdXJzfSBvcmVgO1xyXG4gIH1cclxuICBpZiAoaG91cnMgPiAyNCAmJiBob3VycyA8IDI0ICogMikge1xyXG4gICAgcmV0dXJuICdJZXJpJztcclxuICB9XHJcbiAgaWYgKGRheXMgPCAzKSB7XHJcbiAgICByZXR1cm4gZGF5cyA9PT0gMVxyXG4gICAgICA/IGBhY3VtICR7ZGF5c30gemlgXHJcbiAgICAgIDogYGFjdW0gJHtkYXlzfSB6aWxlYDtcclxuICB9XHJcbiAgaWYgKGRheXMgPiAzKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlKTtcclxuICB9XHJcbiAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKGRhdGVUb0Zvcm1hdDogRGF0ZSk6IHN0cmluZyA9PiB7XHJcbiAgLy8gIENvbnZlcnQgYSBzdHJpbmcgbGlrZSAnMjAyMC0wOS0yMFQwMDowMDowMCcgaW50byAnMjAgU2VwdGVtYmVyIDIwMjAnXHJcbiAgbGV0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xyXG4gIGxldCBkYXRlID0gbmV3IERhdGUoZGF0ZVRvRm9ybWF0KTtcclxuICBsZXQgc3RyID0gYCR7ZGF0ZS5nZXREYXRlKCl9ICR7bW9udGhzW2RhdGUuZ2V0TW9udGgoKV19ICR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgcmV0dXJuIHN0cjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhbHBoYWJldGljU29ydENvbXBhcmF0b3IgPSAobmFtZUEsIG5hbWVCKSA9PiB7XHJcbiAgbGV0IGxvd2VyY2FzZU5hbWVBID0gbmFtZUEudG9Mb3dlckNhc2UoKTtcclxuICBsZXQgbG93ZXJjYXNlTmFtZUIgPSBuYW1lQi50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICBpZiAobG93ZXJjYXNlTmFtZUEgPT09IGxvd2VyY2FzZU5hbWVCKSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIHJldHVybiBsb3dlcmNhc2VOYW1lQSA8IGxvd2VyY2FzZU5hbWVCID8gLTEgOiAxO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5leHRVbnRpdGxlZEZpbGVuYW1lID0gKGV4aXN0aW5nTmFtZXMsIE5BTUVfQkFTRSA9ICdVbnRpdGxlZCBmaWxlJykgPT4ge1xyXG4gIGxldCBleGlzdGluZ1VudGl0bGVkTnVtYmVycyA9IFtdO1xyXG4gIGV4aXN0aW5nTmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgaWYgKG5hbWUgPT09IE5BTUVfQkFTRSkge1xyXG4gICAgICBleGlzdGluZ1VudGl0bGVkTnVtYmVycy5wdXNoKDApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGdyb3VwID0gbmV3IFJlZ0V4cChgXiR7TkFNRV9CQVNFfSBbKF0oLispWyldJGAsICdnJykuZXhlYyhuYW1lKTtcclxuICAgIGlmIChncm91cCkge1xyXG4gICAgICBleGlzdGluZ1VudGl0bGVkTnVtYmVycy5wdXNoKE51bWJlcihncm91cFsxXSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBleGlzdGluZ1VudGl0bGVkTnVtYmVycy5zb3J0KChuckEsIG5yQikgPT4gbnJBIC0gbnJCKTtcclxuXHJcbiAgbGV0IG5ld05hbWUgPSBOQU1FX0JBU0U7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuICBsZXQgaSA9IDA7XHJcblxyXG4gIGV4aXN0aW5nVW50aXRsZWROdW1iZXJzLmZvckVhY2goKG5yKSA9PiB7XHJcbiAgICBpZiAoKG5yID09PSAwICYmIG5ld05hbWUgPT09IE5BTUVfQkFTRSkgfHwgbnIgPT09IGNvdW50KSB7XHJcbiAgICAgIGNvdW50ID0gbnIgKyAxO1xyXG4gICAgICBuZXdOYW1lID0gYCR7TkFNRV9CQVNFfSAoJHtjb3VudH0pYDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG5ld05hbWU7XHJcbn07XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgQ29udHJpYnV0b3Ige1xyXG4gIG5hbWU6IHN0cmluZyxcclxuICBhdmF0YXI6IHN0cmluZyxcclxuICB1cmw6IHN0cmluZyxcclxuICBzaG9ydEJpbz86IHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhdmEgOiBDb250cmlidXRvciA9IHtcclxuICBuYW1lOiAnUMSDdsSDJyxcclxuICBhdmF0YXI6ICcvaW1hZ2VzL2NvbnRyaWJ1dG9ycy9pYW1wYXZhLnBuZycsXHJcbiAgdXJsOiAnaHR0cHM6Ly9pYW1wYXZhLmNvbScsXHJcbiAgc2hvcnRCaW86ICdGb25kYXRvcnVsIEZyb250RW5kLnJvJyxcclxufTtcclxuZXhwb3J0IGNvbnN0IFBhdmEyOiBDb250cmlidXRvciA9IHtcclxuICBuYW1lOiAnUMSDdsSDJyxcclxuICBhdmF0YXI6ICcvaW1hZ2VzL2NvbnRyaWJ1dG9ycy9pYW1wYXZhXzIuanBnJyxcclxuICB1cmw6ICdodHRwczovL2lhbXBhdmEuY29tJyxcclxuICBzaG9ydEJpbzogJ0ZvbmRhdG9ydWwgRnJvbnRFbmQucm8nLFxyXG59O1xyXG5leHBvcnQgY29uc3QgRGlhbmEgOiBDb250cmlidXRvciA9IHtcclxuICBuYW1lOiAnRGlhbmEnLFxyXG4gIGF2YXRhcjogJy9pbWFnZXMvY29udHJpYnV0b3JzL2FuZHJlZWF0b21hLmpwZycsXHJcbiAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZHJlZWF0b21hJyxcclxuICBzaG9ydEJpbzogJ09wZW4tc291cmNlIGNvbnRyaWJ1dG9yJyxcclxufTtcclxuZXhwb3J0IGNvbnN0IElyYSA6IENvbnRyaWJ1dG9yID0ge1xyXG4gIG5hbWU6ICdJcmEnLFxyXG4gIGF2YXRhcjogJy9pbWFnZXMvY29udHJpYnV0b3JzL2lyYW1lbG5pYy5qcGcnLFxyXG4gIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tZWxuaWMuaXJhJyxcclxufTtcclxuZXhwb3J0IGNvbnN0IE5pY29sYWVNYXRpZXMgOiBDb250cmlidXRvciA9IHtcclxuICBuYW1lOiAnTmljb2xhZScsXHJcbiAgYXZhdGFyOiAnL2ltYWdlcy9jb250cmlidXRvcnMvbm1hdGllcy5qcGcnLFxyXG4gIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ubWF0aWVzJyxcclxufTtcclxuZXhwb3J0IGNvbnN0IENhdGFsaW5Qb3B1c29pIDogQ29udHJpYnV0b3IgPSB7XHJcbiAgbmFtZTogJ0PEg3TEg2xpbicsXHJcbiAgYXZhdGFyOiAnL2ltYWdlcy9jb250cmlidXRvcnMvY2F0YWxpbnBvcHVzb2kuanBnJyxcclxuICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vY2F0YWxpbnBvcHVzb2knLFxyXG4gIHNob3J0QmlvOiAnRnJvbnRFbmQgZGV2ZWxvcGVyIGxhIEVuZGF2YScsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBSb2JlcnRQYXJhc2NhIDogQ29udHJpYnV0b3IgPSB7XHJcbiAgbmFtZTogJ1JvYmVydCcsXHJcbiAgYXZhdGFyOiAnL2ltYWdlcy9jb250cmlidXRvcnMvcm9iZXJ0cGFyYXNjYS5wbmcnLFxyXG4gIHVybDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9yb2JlcnQucGFyYXNjYS8nLFxyXG59O1xyXG5leHBvcnQgY29uc3QgRGFuaWVsSHV0YW51IDogQ29udHJpYnV0b3IgPSB7XHJcbiAgbmFtZTogJ0RhbmllbCcsXHJcbiAgYXZhdGFyOiAnL2ltYWdlcy9jb250cmlidXRvcnMvZGFuaWVsaHV0YW51LmpwZycsXHJcbiAgdXJsOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RhbmllbGh1dGFudTIyLycsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBTZWJhc3RpYW5MYXRrb2xpYyA6IENvbnRyaWJ1dG9yID0ge1xyXG4gIG5hbWU6ICdTZWJhc3RpYW4nLFxyXG4gIGF2YXRhcjogJy9pbWFnZXMvY29udHJpYnV0b3JzL2p1cHBzeS5qcGcnLFxyXG4gIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qdXBwc3knLFxyXG59O1xyXG5leHBvcnQgY29uc3QgR2VvcmdlTWFyaWFuTW9yb3NhYyA6IENvbnRyaWJ1dG9yID0ge1xyXG4gIG5hbWU6ICdHZW9yZ2UnLFxyXG4gIGF2YXRhcjogJy9pbWFnZXMvY29udHJpYnV0b3JzL2dlb3JnZW1hcmlhbm1vcm9zYWMuanBnJyxcclxuICB1cmw6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZ2VvcmdlLW1hcmlhbi1tb3Jvc2FjLTczODE1MDhhLycsXHJcbiAgc2hvcnRCaW86ICdTREUgbGEgQW1hem9uJyxcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3dhbC0tZGFya1wiOiBcIlN3ZWV0QWxlcnRfc3dhbC0tZGFya19fM3pXSDhcIixcblx0XCJzd2FsMi1jb250ZW50XCI6IFwiU3dlZXRBbGVydF9zd2FsMi1jb250ZW50X18yanNrNFwiLFxuXHRcInN3YWwtYWN0aW9uc1wiOiBcIlN3ZWV0QWxlcnRfc3dhbC1hY3Rpb25zX194aUpETVwiXG59O1xuIiwiaW1wb3J0IG5vb3AgZnJvbSAnbG9kYXNoL25vb3AnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTd2VldEFsZXJ0UmVzdWx0IH0gZnJvbSAnc3dlZXRhbGVydDInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3dlZXRBbGVydC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5sZXQgVG9hc3QgPSBudWxsO1xyXG5cclxuaW50ZXJmYWNlIFRvYXN0SSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGhyZWY/OiBzdHJpbmc7XHJcbiAgdGltZXI/OiBudW1iZXI7XHJcbiAgdHlwZT86ICdlcnJvcicgfCAnc3VjY2VzcycgfCAnaW5mbyc7XHJcbn1cclxuXHJcbmNsYXNzIFN3ZWV0QWxlcnRTZXJ2aWNlIHtcclxuICBwcml2YXRlIHN0YXRpYyBhbmNob3JUYWc6IEhUTUxBbmNob3JFbGVtZW50O1xyXG5cclxuICBzdGF0aWMgY29uZmlybSh7XHJcbiAgICB0aXRsZSxcclxuICAgIHRleHQsXHJcbiAgICBodG1sID0gJycsXHJcbiAgICBjb25maXJtQnV0dG9uVGV4dCA9ICdPaycsXHJcbiAgICBwcmVDb25maXJtID0gbm9vcCxcclxuICB9KSB7XHJcbiAgICByZXR1cm4gaW1wb3J0KCdzd2VldGFsZXJ0MicpLnRoZW4oKHN3YWwpID0+IHtcclxuICAgICAgcmV0dXJuIHN3YWwuZGVmYXVsdC5maXJlKHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgIGFjdGlvbnM6IHN0eWxlc1snc3dhbC1hY3Rpb25zJ10sXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi0tYmx1ZScsXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLS1kYW5nZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQsXHJcbiAgICAgICAgZm9jdXNDb25maXJtOiBmYWxzZSxcclxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgcmV2ZXJzZUJ1dHRvbnM6IHRydWUsXHJcbiAgICAgICAgaGVpZ2h0QXV0bzogZmFsc2UsXHJcbiAgICAgICAgcHJlQ29uZmlybSxcclxuICAgICAgICBhbGxvd091dHNpZGVDbGljazogKCkgPT4gIXN3YWwuZGVmYXVsdC5pc0xvYWRpbmcoKSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBlcnJvcih7IHRpdGxlID0gJ09vcHMhJywgdGV4dCwgYnV0dG9uVGV4dCB9KSB7XHJcbiAgICByZXR1cm4gaW1wb3J0KCdzd2VldGFsZXJ0MicpLnRoZW4oKHN3YWwpID0+IHtcclxuICAgICAgcmV0dXJuIHN3YWwuZGVmYXVsdC5maXJlKHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLS1saWdodCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogYnV0dG9uVGV4dCxcclxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgaGVpZ2h0QXV0bzogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdG9hc3Qoe1xyXG4gICAgdGV4dCwgaHJlZiA9IG51bGwsIHRpbWVyID0gMzAwMCwgdHlwZSA9ICdzdWNjZXNzJyxcclxuICB9OiBUb2FzdEkpIHtcclxuICAgIFN3ZWV0QWxlcnRTZXJ2aWNlLmluaXQoKTtcclxuXHJcbiAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGlmIChocmVmKSB7XHJcbiAgICAgIFN3ZWV0QWxlcnRTZXJ2aWNlLmFuY2hvclRhZy5ocmVmID0gaHJlZjtcclxuICAgICAgdGFyZ2V0ID0gU3dlZXRBbGVydFNlcnZpY2UuYW5jaG9yVGFnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBpZiAoVG9hc3QgIT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbXBvcnQoJ3N3ZWV0YWxlcnQyJylcclxuICAgICAgICAudGhlbigoc3dhbCkgPT4ge1xyXG4gICAgICAgICAgVG9hc3QgPSBzd2FsLmRlZmF1bHQubWl4aW4oe1xyXG4gICAgICAgICAgICB0b2FzdDogdHJ1ZSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20tZW5kJyxcclxuICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzFiMWIxNScsXHJcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgY29udGFpbmVyOiBzdHlsZXNbJ3N3YWwtLWRhcmsnXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogdHlwZSxcclxuICAgICAgICB0aXRsZTpcclxuICAgICAgICAgIHR5cGUgPT09ICdlcnJvcicgPyB0ZXh0IHx8ICdPdXBzLCBzb21ldGhpbmcgd2VudCB3cm9uZy4uLicgOiB0ZXh0LFxyXG4gICAgICAgIHRhcmdldCxcclxuICAgICAgICB0aW1lcixcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBjb250ZW50KFJlYWN0Q29tcG9uZW50OiBhbnksIHRpdGxlID0gbnVsbCwgcHJvcHMgPSB7fSkge1xyXG4gICAgY29uc3QgW2NvbnRlbnRNb2R1bGUsIHN3YWxNb2R1bGVdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICBpbXBvcnQoJ3N3ZWV0YWxlcnQyLXJlYWN0LWNvbnRlbnQnKSxcclxuICAgICAgaW1wb3J0KCdzd2VldGFsZXJ0MicpLFxyXG4gICAgXSk7XHJcblxyXG4gICAgY29uc3QgUmVhY3RTd2FsID0gY29udGVudE1vZHVsZS5kZWZhdWx0KHN3YWxNb2R1bGUuZGVmYXVsdCk7XHJcblxyXG4gICAgcmV0dXJuIFJlYWN0U3dhbC5maXJlKHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGh0bWw6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RDb21wb25lbnQsIHtcclxuICAgICAgICBjbG9zZU1vZGFsOiAoKSA9PiBzd2FsTW9kdWxlLmRlZmF1bHQuY2xvc2UoKSxcclxuICAgICAgICAuLi5wcm9wcyxcclxuICAgICAgfSksXHJcbiAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29udGFpbmVyOiBzdHlsZXNbJ3N3YWwyLWNvbnRlbnQnXSxcclxuICAgICAgfSxcclxuICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICBoZWlnaHRBdXRvOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGNsb3NlUG9wdXAocmVzdWx0PzogU3dlZXRBbGVydFJlc3VsdDxhbnk+KSB7XHJcbiAgICBjb25zdCBzd2FsID0gYXdhaXQgaW1wb3J0KCdzd2VldGFsZXJ0MicpO1xyXG4gICAgc3dhbC5kZWZhdWx0LmNsb3NlKHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdG9nZ2xlTG9hZGluZygpIHtcclxuICAgIGltcG9ydCgnc3dlZXRhbGVydDInKS50aGVuKChzd2FsKSA9PiBzd2FsLmRlZmF1bHQuZ2V0Q29uZmlybUJ1dHRvbigpLmNsYXNzTGlzdC50b2dnbGUoJ2J0bi0tbG9hZGluZycpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGluaXQoKSB7XHJcbiAgICBTd2VldEFsZXJ0U2VydmljZS5hbmNob3JUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFN3ZWV0QWxlcnRTZXJ2aWNlLmFuY2hvclRhZyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2VldEFsZXJ0U2VydmljZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCBtcylcbiAgICApXG4gIH0pXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QhKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBzY3JpcHRzLCBjc3MgfSA9IGF3YWl0IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgIGNvbnN0IFssIHN0eWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgXSBhcyBjb25zdClcblxuICAgICAgICAgIGNvbnN0IGVudHJ5cG9pbnQ6IFJvdXRlRW50cnlwb2ludCA9IGF3YWl0IHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgPih7IHN0eWxlcyB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlKSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSAmJlxuICAgICAgcGF0aCAhPT0gJy8nICsgbG9jYWxlXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSB8fCBwYXRoID09PSAnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaClcbiAgICApXG4gICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlld1xuICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXMpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGhcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGxldCByZXdyaXRlczogYW55XG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcblxuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKVxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICF0aGlzLmlzUHJldmlldyAmJlxuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KSlcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ34vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ34vY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgU0VPVGFncyBmcm9tICd+L2NvbXBvbmVudHMvU0VPVGFncyc7XHJcbmltcG9ydCBFeGVyY2lzZXNQYWdlIGZyb20gJ34vY29tcG9uZW50cy9FeGVyY2lzZXNQYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNFT1RhZ3NcclxuICAgICAgICB0aXRsZT1cIkV4ZXJjacibaWkgfCBGcm9udEVuZC5yb1wiXHJcbiAgICAgICAgZGVzY3JpcHRpb249XCJSZXpvbHbEgyBleGVyY2nIm2lpIGRlIEZyb250RW5kIMiZaSBwcmltZciZdGUgZmVlZGJhY2sgcGVudHJ1IHNvbHXIm2lpbGUgdGFsZVwiXHJcbiAgICAgICAgdXJsPVwiaHR0cHM6Ly9Gcm9udEVuZC5yby9leGVyY2l0aWlcIlxyXG4gICAgICAvPlxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXIgd2l0aE5hdk1lbnUgLz5cclxuICAgICAgICA8RXhlcmNpc2VzUGFnZSAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsIi8qKiBDb25zdGFudHMgc2hhcmVkIGJldHdlZW4gc2VydmVyICYgY2xpZW50ICovXHJcbmNvbnN0IE1BWF9NRURJQV9NQiA9IDEwO1xyXG5jb25zdCBNQVhfTUVESUFfQllURVMgPSBNQVhfTUVESUFfTUIgKiAxMDI0ICogMTAyNDtcclxuXHJcbmNvbnN0IFVTRVJfUk9MRSA9IHtcclxuICBBRE1JTjogJ2FkbWluJyxcclxuICBURUFDSEVSOiAndGVhY2hlcicsXHJcbiAgU1RVREVOVDogJ3N0dWRlbnQnLFxyXG59O1xyXG5cclxuY29uc3QgU1VCTUlTU0lPTl9TVEFUVVMgPSB7XHJcbiAgSU5fUFJPR1JFU1M6ICdpbl9wcm9ncmVzcycsXHJcbiAgQVdBSVRJTkdfUkVWSUVXOiAnYXdhaXRpbmdfcmV2aWV3JyxcclxuICBET05FOiAnZG9uZScsXHJcbn07XHJcblxyXG5jb25zdCBMRVNTT05TX1dJVEhfRVhFUkNJU0VTID0gW1xyXG4gICd0ZXh0ZScsXHJcbiAgJ2xpc3RlJyxcclxuICAnaW1hZ2luaScsXHJcbl07XHJcblxyXG4vLyBVc2UgTm9kZUpTIHN0eWxlIGV4cG9ydHMgYmVjYXVzZSB0aGlzIGZpbGUgaXMgY29uc3VtZWRcclxuLy8gYm90aCBmcm9tIHRoZSBzZXJ2ZXIgJiBjbGllbnRcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgTUFYX01FRElBX01CLFxyXG4gIE1BWF9NRURJQV9CWVRFUyxcclxuICBVU0VSX1JPTEUsXHJcbiAgU1VCTUlTU0lPTl9TVEFUVVMsXHJcbiAgTEVTU09OU19XSVRIX0VYRVJDSVNFUyxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGlwYm9hcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2RlYm91bmNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9ub29wXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dlZXRhbGVydDJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dlZXRhbGVydDItcmVhY3QtY29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=