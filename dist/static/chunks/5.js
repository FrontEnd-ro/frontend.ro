(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[5],{

/***/ "./client/components/Form/Checkbox/Checkbox.module.scss":
/*!**************************************************************!*\
  !*** ./client/components/Form/Checkbox/Checkbox.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Checkbox.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/Checkbox/Checkbox.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Checkbox.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/Checkbox/Checkbox.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Checkbox.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/Checkbox/Checkbox.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./client/components/Form/Checkbox/Checkbox.tsx":
/*!******************************************************!*\
  !*** ./client/components/Form/Checkbox/Checkbox.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkbox; });
/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Checkbox.module.scss */ "./client/components/Form/Checkbox/Checkbox.module.scss");
/* harmony import */ var _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\Form\\Checkbox\\Checkbox.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


function Checkbox(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "className"]);

  return __jsx("label", {
    className: "".concat(_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['checkbox-wrapper'], " ").concat(className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.checkbox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("input", Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "absolute",
    type: "checkbox"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx("span", {
    className: "".concat(_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['control-indicator'], " d-inline-block"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })), children);
}
_c = Checkbox;

var _c;

$RefreshReg$(_c, "Checkbox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./client/components/Form/Form.module.scss":
/*!*************************************************!*\
  !*** ./client/components/Form/Form.module.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Form.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/Form.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Form.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/Form.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Form.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/Form.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./client/components/Form/Form.tsx":
/*!*****************************************!*\
  !*** ./client/components/Form/Form.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Form_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Form.module.scss */ "./client/components/Form/Form.module.scss");
/* harmony import */ var _Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Form_module_scss__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\Form\\Form.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var Form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(_c = function _c(_ref, forwardRef) {
  var onSubmit = _ref.onSubmit,
      _ref$withStyles = _ref.withStyles,
      withStyles = _ref$withStyles === void 0 ? true : _ref$withStyles,
      _ref$onInput = _ref.onInput,
      onInput = _ref$onInput === void 0 ? lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a : _ref$onInput,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$autoComplete = _ref.autoComplete,
      autoComplete = _ref$autoComplete === void 0 ? 'on' : _ref$autoComplete,
      children = _ref.children,
      rest = Object(C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["onSubmit", "withStyles", "onInput", "className", "autoComplete", "children"]);

  var submit = function submit(e) {
    e.persist();
    e.preventDefault();

    if (e.target.checkValidity()) {
      var _data = {};
      var elements = [];

      try {
        elements = Object(C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target.elements);
      } catch (err) {
        // MSEdge fix
        for (var i = 0; i < e.target.elements.length; i += 1) {
          elements.push(e.target.elements[i]);
        }
      }

      elements.filter(function (el) {
        return el.name;
      }).forEach(function (el) {
        if (el.hasOwnProperty('checked')) {
          if (el.type === 'checkbox') {
            _data[el.name] = el.checked;
          }

          if (el.type === 'radio' && el.checked) {
            _data[el.name] = el.value;
          }
        } else {
          _data[el.name] = el.value;
        }
      });
      var submitResult = onSubmit(_data);

      if (submitResult instanceof Promise) {
        submitResult.then(function (shouldReset) {
          if (shouldReset) {
            e.target.reset();
          }
        });
      }
    }
  };

  return __jsx("form", Object(C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: withStyles ? "".concat(_Form_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.form, " ").concat(className) : className,
    spellCheck: "false",
    onSubmit: submit,
    onInput: onInput,
    autoComplete: autoComplete
  }, rest, {
    ref: forwardRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }), children);
}); // export default function Form({
//   onSubmit,
//   withStyles = true,
//   onInput = noop,
//   className = '',
//   autoComplete = 'on',
//   children,
//   ...rest
// }: PropsWithChildren<Props>) {
//   const submit = (e) => {
//     e.persist();
//     e.preventDefault();
//     if (e.target.checkValidity()) {
//       let data = {};
//       let elements = [];
//       try {
//         elements = [...e.target.elements];
//       } catch (err) {
//         // MSEdge fix
//         for (let i = 0; i < e.target.elements.length; i += 1) {
//           elements.push(e.target.elements[i]);
//         }
//       }
//       elements
//         .filter((el) => el.name)
//         .forEach((el) => {
//           if (el.hasOwnProperty('checked')) {
//             if (el.type === 'checkbox') {
//               data[el.name] = el.checked;
//             }
//             if (el.type === 'radio' && el.checked) {
//               data[el.name] = el.value;
//             }
//           } else {
//             data[el.name] = el.value;
//           }
//         });
//       let submitResult = onSubmit(data);
//       if (submitResult instanceof Promise) {
//         submitResult.then((shouldReset) => {
//           if (shouldReset) {
//             e.target.reset();
//           }
//         });
//       }
//     }
//   };
//   return (
//     <form
//       className={withStyles ? `${styles.form} ${className}` : className}
//       spellCheck="false"
//       onSubmit={submit}
//       onInput={onInput}
//       autoCorrect="off"
//       autoComplete={autoComplete}
//       {...rest}
//     >
//       {children}
//     </form>
//   );
// }

_c2 = Form;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c, _c2;

$RefreshReg$(_c, "Form$React.forwardRef");
$RefreshReg$(_c2, "Form");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./client/components/Form/FormGroup/FormGroup.module.scss":
/*!****************************************************************!*\
  !*** ./client/components/Form/FormGroup/FormGroup.module.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./FormGroup.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/FormGroup/FormGroup.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./FormGroup.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/FormGroup/FormGroup.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./FormGroup.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/FormGroup/FormGroup.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./client/components/Form/FormGroup/FormGroup.tsx":
/*!********************************************************!*\
  !*** ./client/components/Form/FormGroup/FormGroup.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormGroup.module.scss */ "./client/components/Form/FormGroup/FormGroup.module.scss");
/* harmony import */ var _FormGroup_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FormGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\Form\\FormGroup\\FormGroup.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function FormGroup(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return __jsx("div", {
    className: "".concat(_FormGroup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['form-group'], " ").concat(className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, children);
}
_c = FormGroup;

var _c;

$RefreshReg$(_c, "FormGroup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./client/components/Form/InputWithIcon/InputWithIcon.module.scss":
/*!************************************************************************!*\
  !*** ./client/components/Form/InputWithIcon/InputWithIcon.module.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./InputWithIcon.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/InputWithIcon/InputWithIcon.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./InputWithIcon.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/InputWithIcon/InputWithIcon.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./InputWithIcon.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/InputWithIcon/InputWithIcon.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./client/components/Form/InputWithIcon/InputWithIcon.tsx":
/*!****************************************************************!*\
  !*** ./client/components/Form/InputWithIcon/InputWithIcon.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InputWithIcon_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputWithIcon.module.scss */ "./client/components/Form/InputWithIcon/InputWithIcon.module.scss");
/* harmony import */ var _InputWithIcon_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_InputWithIcon_module_scss__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\Form\\InputWithIcon\\InputWithIcon.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var InputWithIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(_c = function _c(_ref, ref) {
  var children = _ref.children,
      rest = Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  return __jsx("div", {
    className: "".concat(_InputWithIcon_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['input-with-icon'], " relative"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("input", Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  })), __jsx("span", {
    className: "absolute",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, children));
});
_c2 = InputWithIcon;
/* harmony default export */ __webpack_exports__["default"] = (InputWithIcon);

var _c, _c2;

$RefreshReg$(_c, "InputWithIcon$React.forwardRef");
$RefreshReg$(_c2, "InputWithIcon");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./client/components/Form/PasswordReveal/PasswordReveal.module.scss":
/*!**************************************************************************!*\
  !*** ./client/components/Form/PasswordReveal/PasswordReveal.module.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./PasswordReveal.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/PasswordReveal/PasswordReveal.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./PasswordReveal.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/PasswordReveal/PasswordReveal.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./PasswordReveal.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/PasswordReveal/PasswordReveal.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./client/components/Form/PasswordReveal/PasswordReveal.tsx":
/*!******************************************************************!*\
  !*** ./client/components/Form/PasswordReveal/PasswordReveal.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/Button */ "./client/components/Button/index.ts");
/* harmony import */ var _PasswordReveal_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PasswordReveal.module.scss */ "./client/components/Form/PasswordReveal/PasswordReveal.module.scss");
/* harmony import */ var _PasswordReveal_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PasswordReveal_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\Form\\PasswordReveal\\PasswordReveal.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function PasswordReveal(_ref) {
  _s();

  var _ref$required = _ref.required,
      required = _ref$required === void 0 ? true : _ref$required,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'password' : _ref$name,
      _ref$autoComplete = _ref.autoComplete,
      autoComplete = _ref$autoComplete === void 0 ? 'on' : _ref$autoComplete,
      _ref$passwordError = _ref.passwordError,
      passwordError = _ref$passwordError === void 0 ? false : _ref$passwordError;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      visible = _useState[0],
      setVisible = _useState[1];

  return __jsx("div", {
    className: _PasswordReveal_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['password-reveal'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: visible ? 'text' : 'password',
    name: name,
    required: required,
    autoComplete: autoComplete,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "absolute text-grey",
    onClick: function onClick() {
      return setVisible(!visible);
    },
    title: visible ? 'Hide password' : 'Show password',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: visible ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEye"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEyeSlash"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }))), passwordError ? __jsx("span", {
    className: "text-red text-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "\uD83E\uDDD9\u200D Nu po\u021Bi trece mai departe dec\xE2t cu o parol\u0103!") : null);
}

_s(PasswordReveal, "OGsIWlGlwYpVUqIrDReJ1GWx7rw=");

_c = PasswordReveal;
/* harmony default export */ __webpack_exports__["default"] = (PasswordReveal);

var _c;

$RefreshReg$(_c, "PasswordReveal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./client/components/Form/index.ts":
/*!*****************************************!*\
  !*** ./client/components/Form/index.ts ***!
  \*****************************************/
/*! exports provided: default, FormGroup, Checkbox, InputWithIcon, PasswordReveal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./client/components/Form/Form.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Form__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _FormGroup_FormGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormGroup/FormGroup */ "./client/components/Form/FormGroup/FormGroup.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return _FormGroup_FormGroup__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkbox/Checkbox */ "./client/components/Form/Checkbox/Checkbox.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _InputWithIcon_InputWithIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputWithIcon/InputWithIcon */ "./client/components/Form/InputWithIcon/InputWithIcon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputWithIcon", function() { return _InputWithIcon_InputWithIcon__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _PasswordReveal_PasswordReveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PasswordReveal/PasswordReveal */ "./client/components/Form/PasswordReveal/PasswordReveal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordReveal", function() { return _PasswordReveal_PasswordReveal__WEBPACK_IMPORTED_MODULE_4__["default"]; });







;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./client/components/login/Login.module.scss":
/*!***************************************************!*\
  !*** ./client/components/login/Login.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Login.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/login/Login.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Login.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/login/Login.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Login.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/login/Login.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./client/components/login/Login.tsx":
/*!*******************************************!*\
  !*** ./client/components/login/Login.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_User_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/services/User.service */ "./client/services/User.service.ts");
/* harmony import */ var _LoginButtons_LoginButtons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LoginButtons/LoginButtons */ "./client/components/login/LoginButtons/LoginButtons.tsx");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/components/Form */ "./client/components/Form/index.ts");
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/redux/user/user.actions */ "./client/redux/user/user.actions.ts");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/redux/store */ "./client/redux/store.ts");
/* harmony import */ var _Login_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Login.module.scss */ "./client/components/login/Login.module.scss");
/* harmony import */ var _Login_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Login_module_scss__WEBPACK_IMPORTED_MODULE_16__);







var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\login\\Login.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var Login = /*#__PURE__*/function (_Component) {
  Object(C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Login, _Component);

  var _super = _createSuper(Login);

  function Login(_props) {
    var _this;

    Object(C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    _this = _super.call(this, _props);

    Object(C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "checkUsernameDebouncedFn", void 0);

    Object(C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onUsernameChange", function (e) {
      var _e$target$value;

      var value = (_e$target$value = e.target.value) !== null && _e$target$value !== void 0 ? _e$target$value : '';
      value = value.trim();

      _this.setState({
        username: value,
        usernameExists: undefined
      });

      if (!value) {
        return;
      }

      if (_this.checkUsernameDebouncedFn) {
        // Cancel previous call
        _this.checkUsernameDebouncedFn.cancel();
      } // Start a new one so we don't overload server with requests


      _this.checkUsernameDebouncedFn = lodash_debounce__WEBPACK_IMPORTED_MODULE_8___default()(function () {
        _services_User_service__WEBPACK_IMPORTED_MODULE_11__["default"].checkUsername(value).then(function () {
          return _this.setState({
            usernameExists: true
          });
        })["catch"](function () {
          return _this.setState({
            usernameExists: false
          });
        });
      }, 250);

      _this.checkUsernameDebouncedFn();
    });

    Object(C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "changeMode", function (newMode) {
      var mode = _this.state.mode;

      if (newMode === mode) {
        // Do nothing since we handle the submit separately
        return;
      } // FIXME
      // Without applying the delay, the form will also get
      // get submitted. Maybe there's a better solution?


      setTimeout(function () {
        return _this.setState({
          mode: newMode
        });
      }, 0);
    });

    Object(C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "submit", function (props) {
      var mode = _this.state.mode;
      var onSuccess = _this.props.onSuccess;
      var apiToCall = mode === 'register' ? _services_User_service__WEBPACK_IMPORTED_MODULE_11__["default"].register : _services_User_service__WEBPACK_IMPORTED_MODULE_11__["default"].login;

      _this.setState({
        loading: true
      });

      apiToCall(props).then(function (user) {
        Object(_redux_store__WEBPACK_IMPORTED_MODULE_15__["getStore"])().dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_14__["loadInfo"])(user));

        if (onSuccess) {
          onSuccess(user);
        }
      })["catch"](function (error) {
        return _this.setState({
          serverError: error.message
        });
      })["finally"](function () {
        return _this.setState({
          loading: false
        });
      });
    });

    _this.state = {
      mode: 'login',
      loading: false,
      serverError: null,
      username: '',
      usernameExists: undefined
    };
    return _this;
  }

  Object(C_Users_didi_Desktop_frontend_ro_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$checkUsernameDe;

      (_this$checkUsernameDe = this.checkUsernameDebouncedFn) === null || _this$checkUsernameDe === void 0 ? void 0 : _this$checkUsernameDe.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          mode = _this$state.mode,
          loading = _this$state.loading,
          serverError = _this$state.serverError,
          usernameExists = _this$state.usernameExists,
          username = _this$state.username;
      var className = this.props.className;
      return __jsx("div", {
        className: "".concat(_Login_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a['login-form'], " ").concat(className || ''),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 7
        }
      }, __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onSubmit: this.submit,
        onInput: function onInput() {
          return _this2.setState({
            serverError: null
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 9
        }
      }, __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
        className: "mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }
      }, __jsx("span", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 15
        }
      }, mode === 'register' ? 'Email' : 'Email sau username'), __jsx("input", {
        required: true,
        type: "text",
        autoCapitalize: "none",
        name: mode === 'register' ? 'email' : 'emailOrUsername',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 15
        }
      }))), mode === 'register' && __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
        className: "mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 17
        }
      }, " Username "), __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_13__["InputWithIcon"], {
        required: true,
        type: "text",
        name: "username",
        onChange: this.onUsernameChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }
      }, usernameExists && __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        width: "1em",
        className: "text-red",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faTimes"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 38
        }
      }), usernameExists === false && __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        width: "1em",
        className: "text-green",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCheck"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 48
        }
      }), usernameExists === undefined && username && __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        width: "1em",
        className: "rotate",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSpinner"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 64
        }
      })))), __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
        className: "mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 13
        }
      }, __jsx("span", {
        className: "label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 15
        }
      }, " Parola "), __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_13__["PasswordReveal"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 15
        }
      }))), mode === 'register' && __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_13__["Checkbox"], {
        required: true,
        name: "confirm",
        className: "d-flex mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }
      }, __jsx("span", {
        style: {
          fontSize: '0.85em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 15
        }
      }, "Am citit \u0219i sunt de acord cu", ' ', __jsx("a", {
        href: "/termeni-si-conditii",
        className: "link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 17
        }
      }, "Termenii \u0219i Condi\u021Biile"), ' ', "de utilizare.")), serverError && __jsx("p", {
        className: "".concat(_Login_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a['server-error'], " text-red text-bold"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 27
        }
      }, serverError), __jsx(_LoginButtons_LoginButtons__WEBPACK_IMPORTED_MODULE_12__["default"], {
        mode: mode,
        loading: loading,
        onLogin: function onLogin() {
          return _this2.changeMode('login');
        },
        onRegister: function onRegister() {
          return _this2.changeMode('register');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }
      })));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Login);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./client/components/login/LoginButtons/LoginButtons.module.scss":
/*!***********************************************************************!*\
  !*** ./client/components/login/LoginButtons/LoginButtons.module.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./LoginButtons.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/login/LoginButtons/LoginButtons.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./LoginButtons.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/login/LoginButtons/LoginButtons.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./LoginButtons.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/login/LoginButtons/LoginButtons.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./client/components/login/LoginButtons/LoginButtons.tsx":
/*!***************************************************************!*\
  !*** ./client/components/login/LoginButtons/LoginButtons.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/Button */ "./client/components/Button/index.ts");
/* harmony import */ var _LoginButtons_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginButtons.module.scss */ "./client/components/login/LoginButtons/LoginButtons.module.scss");
/* harmony import */ var _LoginButtons_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LoginButtons_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\login\\LoginButtons\\LoginButtons.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function LoginButtons(_ref) {
  var mode = _ref.mode,
      onLogin = _ref.onLogin,
      onRegister = _ref.onRegister,
      loading = _ref.loading;
  return __jsx("div", {
    className: "".concat(_LoginButtons_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['login-buttons'], " ").concat(mode === 'register' ? _LoginButtons_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['register-mode'] : '', " text-center"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "light",
    type: mode === 'register' ? 'button' : 'submit',
    className: "".concat(mode === 'register' ? 'btn--light' : 'btn--blue', " ").concat(loading && mode === 'login' ? 'btn--loading' : '', " btn w-100"),
    loading: loading && mode === 'login',
    disabled: loading,
    onClick: onLogin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "Intr\u0103 \xEEn cont"), __jsx("p", {
    className: "relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, " sau "), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "light",
    type: mode === 'register' ? 'submit' : 'button',
    className: "".concat(mode === 'register' ? 'btn--blue' : 'btn--light', " ").concat(loading && mode === 'register' ? 'btn--loading' : '', " btn w-100"),
    loading: loading && mode === 'register',
    disabled: loading,
    onClick: onRegister,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "\xCEnregistreaz\u0103-te"));
}
_c = LoginButtons;

var _c;

$RefreshReg$(_c, "LoginButtons");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./client/redux/exercise-submissions/exercise-submissions.actions.ts":
/*!***************************************************************************!*\
  !*** ./client/redux/exercise-submissions/exercise-submissions.actions.ts ***!
  \***************************************************************************/
/*! exports provided: EXERCISE_SUBMISSIONS, addSubmission, removeSubmission, updateSubmission, loadSubmissions, searchSubmissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXERCISE_SUBMISSIONS", function() { return EXERCISE_SUBMISSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSubmission", function() { return addSubmission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSubmission", function() { return removeSubmission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubmission", function() { return updateSubmission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSubmissions", function() { return loadSubmissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSubmissions", function() { return searchSubmissions; });
var ADD = 'exercise-submissions/ADD';
var REMOVE = 'exercise-submissions/REMOVE';
var UPDATE = 'exercise-submissions/UPDATE';
var LOAD = 'exercise-submissions/LOAD';
var SEARCH = 'exercise-submissions/SEARCH';
var EXERCISE_SUBMISSIONS = {
  ADD: ADD,
  REMOVE: REMOVE,
  UPDATE: UPDATE,
  LOAD: LOAD,
  SEARCH: SEARCH
};
var addSubmission = function addSubmission(submission) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return {
    type: ADD,
    payload: {
      submission: submission,
      index: index
    }
  };
};
var removeSubmission = function removeSubmission(id) {
  return {
    type: REMOVE,
    payload: {
      id: id
    }
  };
};
var updateSubmission = function updateSubmission(id, newSubmission) {
  return {
    type: UPDATE,
    payload: {
      id: id,
      newSubmission: newSubmission
    }
  };
};
var loadSubmissions = function loadSubmissions(newSubmissions) {
  return {
    type: LOAD,
    payload: {
      newSubmissions: newSubmissions
    }
  };
};
var searchSubmissions = function searchSubmissions(query, newSubmissions) {
  return {
    type: SEARCH,
    payload: {
      query: query,
      newSubmissions: newSubmissions
    }
  };
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./client/redux/exercise-submissions/exercise-submissions.reducer.ts":
/*!***************************************************************************!*\
  !*** ./client/redux/exercise-submissions/exercise-submissions.reducer.ts ***!
  \***************************************************************************/
/*! exports provided: submissionReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionReducer", function() { return submissionReducer; });
/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercise-submissions.actions */ "./client/redux/exercise-submissions/exercise-submissions.actions.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  submissions: undefined,
  search: '',
  page: 0,
  end: false
};
var submissionReducer = function submissionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_2__["EXERCISE_SUBMISSIONS"].ADD:
      {
        var _action$payload = action.payload,
            index = _action$payload.index,
            submission = _action$payload.submission;

        if (!Array.isArray(submission)) {
          submission = [submission];
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          submissions: [].concat(Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.submissions.slice(0, index)), Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(submission), Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.submissions.slice(index)))
        });
      }

    case _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_2__["EXERCISE_SUBMISSIONS"].REMOVE:
      {
        var id = action.payload.id;

        if (!Array.isArray(id)) {
          id = [id];
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          submissions: state.submissions.filter(function (submission) {
            return !id.includes(submission._id);
          })
        });
      }

    case _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_2__["EXERCISE_SUBMISSIONS"].UPDATE:
      return _objectSpread(_objectSpread({}, state), {}, {
        submissions: state.submissions.map(function (submission) {
          var _action$payload2 = action.payload,
              id = _action$payload2.id,
              newSubmission = _action$payload2.newSubmission;

          if (submission._id === id) {
            return _objectSpread(_objectSpread({}, submission), newSubmission);
          }

          return submission;
        })
      });

    case _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_2__["EXERCISE_SUBMISSIONS"].LOAD:
      {
        var newSubmissions = action.payload.newSubmissions;
        return _objectSpread(_objectSpread({}, state), {}, {
          submissions: state.submissions ? [].concat(Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.submissions), Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newSubmissions)) : newSubmissions,
          page: state.page + 1,
          end: newSubmissions.length === 0
        });
      }

    case _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_2__["EXERCISE_SUBMISSIONS"].SEARCH:
      {
        var _action$payload3 = action.payload,
            query = _action$payload3.query,
            _newSubmissions = _action$payload3.newSubmissions;
        return _objectSpread(_objectSpread({}, state), {}, {
          submissions: _newSubmissions,
          search: query,
          page: 1,
          end: _newSubmissions.length === 0
        });
      }

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (submissionReducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./client/redux/root.reducer.ts":
/*!**************************************!*\
  !*** ./client/redux/root.reducer.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _exercise_submissions_exercise_submissions_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercise-submissions/exercise-submissions.reducer */ "./client/redux/exercise-submissions/exercise-submissions.reducer.ts");
/* harmony import */ var _user_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.actions */ "./client/redux/user/user.actions.ts");
/* harmony import */ var _user_user_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.reducer */ "./client/redux/user/user.reducer.ts");





var rootReducer = function rootReducer(state, action) {
  if (action.type === _user_user_actions__WEBPACK_IMPORTED_MODULE_2__["USER_LOGOUT"]) {
    state = undefined;
  }

  return appReducer(state, action);
};

var appReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  submissions: _exercise_submissions_exercise_submissions_reducer__WEBPACK_IMPORTED_MODULE_1__["submissionReducer"],
  user: _user_user_reducer__WEBPACK_IMPORTED_MODULE_3__["userReducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./client/redux/store.ts":
/*!*******************************!*\
  !*** ./client/redux/store.ts ***!
  \*******************************/
/*! exports provided: createStoreWithPreloadedData, getStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStoreWithPreloadedData", function() { return createStoreWithPreloadedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStore", function() { return getStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root.reducer */ "./client/redux/root.reducer.ts");


var store;

function createStoreWithPreloadedData(preloadedData) {
  if ( false || !store) {
    store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_root_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], preloadedData);
  }

  return store;
}

function getStore() {
  return store;
}



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./client/redux/user/user.reducer.ts":
/*!*******************************************!*\
  !*** ./client/redux/user/user.reducer.ts ***!
  \*******************************************/
/*! exports provided: defaultUserState, userReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultUserState", function() { return defaultUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.actions */ "./client/redux/user/user.actions.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var defaultUserState = {
  info: undefined,
  notifications: {
    list: undefined,
    unread: 0,
    unreadCount: 0,
    page: 0,
    end: false
  }
};
var initialState = defaultUserState;
var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _user_actions__WEBPACK_IMPORTED_MODULE_2__["USER_INFO"].LOAD:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          info: action.payload
        });
      }

    case _user_actions__WEBPACK_IMPORTED_MODULE_2__["USER_NOTIFICATIONS"].ADD:
      {
        var _action$payload = action.payload,
            index = _action$payload.index,
            notifications = _action$payload.notifications;

        if (!Array.isArray(notifications)) {
          notifications = [notifications];
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          notifications: _objectSpread(_objectSpread({}, state.notifications), {}, {
            list: [].concat(Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.notifications.list.slice(0, index)), Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(notifications), Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.notifications.list.slice(index)))
          })
        });
      }

    case _user_actions__WEBPACK_IMPORTED_MODULE_2__["USER_NOTIFICATIONS"].LOAD:
      {
        var newNotifications = action.payload.newNotifications;
        return _objectSpread(_objectSpread({}, state), {}, {
          notifications: _objectSpread(_objectSpread({}, state.notifications), {}, {
            list: state.notifications.list ? [].concat(Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.notifications.list), Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newNotifications)) : newNotifications,
            page: state.notifications.page + 1,
            end: newNotifications.length === 0
          })
        });
      }

    case _user_actions__WEBPACK_IMPORTED_MODULE_2__["USER_NOTIFICATIONS"].MARK_AS_READ:
      {
        var id = action.payload.id;
        return _objectSpread(_objectSpread({}, state), {}, {
          notifications: _objectSpread(_objectSpread({}, state.notifications), {}, {
            list: Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.notifications.list.map(function (n) {
              if (n._id === id) {
                return _objectSpread(_objectSpread({}, n), {}, {
                  isUnread: false
                });
              }

              return n;
            })),
            unreadCount: state.notifications.unreadCount - 1
          })
        });
      }

    case _user_actions__WEBPACK_IMPORTED_MODULE_2__["USER_NOTIFICATIONS"].MARK_AS_UNREAD:
      {
        var _id = action.payload.id;
        return _objectSpread(_objectSpread({}, state), {}, {
          notifications: _objectSpread(_objectSpread({}, state.notifications), {}, {
            list: Object(C_Users_didi_Desktop_frontend_ro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.notifications.list.map(function (n) {
              if (n._id === _id) {
                return _objectSpread(_objectSpread({}, n), {}, {
                  isUnread: true
                });
              }

              return n;
            })),
            unreadCount: state.notifications.unreadCount + 1
          })
        });
      }

    case _user_actions__WEBPACK_IMPORTED_MODULE_2__["USER_NOTIFICATIONS"].MARK_ALL_AS_READ:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          notifications: _objectSpread(_objectSpread({}, state.notifications), {}, {
            list: state.notifications.list.map(function (n) {
              return _objectSpread(_objectSpread({}, n), {}, {
                isUnread: false
              });
            }),
            unreadCount: 0
          })
        });
      }

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (userReducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/Checkbox/Checkbox.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./client/components/Form/Checkbox/Checkbox.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/** BACKGROUNDS **/\n.Checkbox_checkbox-wrapper__2zlfs {\n  cursor: pointer;\n}\n\n.Checkbox_checkbox__2XN7U {\n  color: #58af58;\n  display: inline-block;\n}\n.Checkbox_checkbox__2XN7U input {\n  opacity: 0;\n  z-index: -1;\n}\n.Checkbox_checkbox__2XN7U input:checked + * {\n  border-color: currentColor;\n}\n.Checkbox_checkbox__2XN7U input:checked + *::after {\n  height: 0.5em;\n  -webkit-animation: Checkbox_dothabottomcheck__WtPZD 0.2s ease 0s forwards;\n          animation: Checkbox_dothabottomcheck__WtPZD 0.2s ease 0s forwards;\n}\n.Checkbox_checkbox__2XN7U input:checked + *::before {\n  height: 1.2em;\n  -webkit-box-shadow: 0 0 0 2px #fff;\n          box-shadow: 0 0 0 2px #fff;\n  -webkit-animation: Checkbox_dothatopcheck__2lKOf 0.4s ease 0s forwards;\n          animation: Checkbox_dothatopcheck__2lKOf 0.4s ease 0s forwards;\n}\n\n.Checkbox_control-indicator__2GKK- {\n  width: 1em;\n  height: 1em;\n  border-radius: 5px;\n  position: relative;\n  margin-right: 0.5em;\n  background-color: transparent;\n  border: 2px solid #bcc2c6;\n  -webkit-transition: border-color ease 0.2s;\n  transition: border-color ease 0.2s;\n}\n.Checkbox_control-indicator__2GKK-::before, .Checkbox_control-indicator__2GKK-::after {\n  position: absolute;\n  height: 0;\n  width: 0.2em;\n  background-color: currentColor;\n  display: inline-block;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  border-radius: 5px;\n  content: \" \";\n  -webkit-transition: opacity ease 0.5;\n  transition: opacity ease 0.5;\n}\n.Checkbox_control-indicator__2GKK-::before {\n  top: 0.7em;\n  left: 0.4em;\n  -webkit-transform: rotate(-135deg);\n          transform: rotate(-135deg);\n}\n.Checkbox_control-indicator__2GKK-::after {\n  top: 0.37em;\n  left: 0.05em;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n@-webkit-keyframes Checkbox_dothatopcheck__2lKOf {\n  0% {\n    height: 0;\n  }\n  50% {\n    height: 0;\n  }\n  100% {\n    height: 1.2em;\n  }\n}\n\n@keyframes Checkbox_dothatopcheck__2lKOf {\n  0% {\n    height: 0;\n  }\n  50% {\n    height: 0;\n  }\n  100% {\n    height: 1.2em;\n  }\n}\n@-webkit-keyframes Checkbox_dothabottomcheck__WtPZD {\n  0% {\n    height: 0;\n  }\n  100% {\n    height: 1em/2;\n  }\n}\n@keyframes Checkbox_dothabottomcheck__WtPZD {\n  0% {\n    height: 0;\n  }\n  100% {\n    height: 1em/2;\n  }\n}", "",{"version":3,"sources":["webpack://../../../styles/_variables.scss","webpack://Checkbox.module.scss"],"names":[],"mappings":"AA6BA,kBAAA;AC3BA;EACE,eAAA;AAAF;;AAGA;EACE,cAAA;EACA,qBAAA;AAAF;AAEE;EACE,UAAA;EACA,WAAA;AAAJ;AAEI;EACE,0BAAA;AAAN;AAEM;EACE,aAAA;EACA,yEAAA;UAAA,iEAAA;AAAR;AAGM;EACE,aAAA;EACA,kCAAA;UAAA,0BAAA;EACA,sEAAA;UAAA,8DAAA;AADR;;AAOA;EACE,UAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,6BAAA;EACA,yBAAA;EACA,0CAAA;EAAA,kCAAA;AAJF;AAME;EAEE,kBAAA;EACA,SAAA;EACA,YAAA;EACA,8BAAA;EACA,qBAAA;EACA,kCAAA;UAAA,0BAAA;EACA,kBAAA;EACA,YAAA;EACA,oCAAA;EAAA,4BAAA;AALJ;AAQE;EACE,UAAA;EACA,WAAA;EACA,kCAAA;UAAA,0BAAA;AANJ;AASE;EACE,WAAA;EACA,YAAA;EACA,iCAAA;UAAA,yBAAA;AAPJ;;AAWA;EACE;IACE,SAAA;EARF;EAWA;IACE,SAAA;EATF;EAYA;IACE,aAAA;EAVF;AACF;;AADA;EACE;IACE,SAAA;EARF;EAWA;IACE,SAAA;EATF;EAYA;IACE,aAAA;EAVF;AACF;AAaA;EACE;IACE,SAAA;EAXF;EAcA;IACE,aAAA;EAZF;AACF;AAKA;EACE;IACE,SAAA;EAXF;EAcA;IACE,aAAA;EAZF;AACF","sourcesContent":["$colors: (\r\n  white: #fff,\r\n  darker-white: #f8f8f8,\r\n  black: #1b1b15,\r\n  green: #58af58,\r\n  grey: #77838b,\r\n  silver: #bcc2c6,\r\n  yellow: #f7df1e,\r\n  red: #eb4d4b,\r\n  blue: #2980b9,\r\n  purple: #663399,\r\n  twitter-blue: #1b95e0,\r\n  twitter-blue-hover: #0c7abf,\r\n  facebook-blue: #1877f2,\r\n  linkedin-blue: #52aad3,\r\n  whatsapp-green: #01e675,\r\n);\r\n\r\n$width: 90%;\r\n$max-width: 1000px;\r\n$cubic: cubic-bezier(0.18, 0.89, 0.32, 1.28);\r\n$aside-menu-width: 18em;\r\n$lesson-menu-width: 18em;\r\n$app-header-height: 3.3em;\r\n$width-grid: 4.5vw;\r\n@function color($x) {\r\n  @return map-get($colors, $x);\r\n}\r\n\r\n/** BACKGROUNDS **/\r\n%gradientBackground {\r\n  background-size: 150% auto;\r\n  background-position: left center;\r\n}\r\n\r\n%blackGradientBackground {\r\n  color: color(white);\r\n  background-image: linear-gradient(\r\n    to right,\r\n    color(black) 0%,\r\n    lighten(color(black), 10%) 51%,\r\n    color(black) 100%\r\n  );\r\n}\r\n\r\n%redGradientBackground {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #c0392b 0%,\r\n    #eb4d4b 51%,\r\n    #c0392b 100%\r\n  );\r\n}\r\n\r\n%greenGradientBackground {\r\n  color: color(white);\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #27ae60 0%,\r\n    #2ecc71 51%,\r\n    #27ae60 100%\r\n  );\r\n}\r\n\r\n%blueGradientBackground {\r\n  color: color(white);\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #2980b9 0%,\r\n    #3aa3e9 51%,\r\n    #2980b9 100%\r\n  );\r\n}\r\n\r\n%yellowGradientBackground {\r\n  color: color(black);\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #f39c12 0%,\r\n    #f1c40f 51%,\r\n    #f39c12 100%\r\n  );\r\n}\r\n\r\n%greyGradientBackground {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    color(grey) 0%,\r\n    color(silver) 51%,\r\n    color(grey) 100%\r\n  );\r\n}\r\n\r\n%purpleGradientBackground {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #663399 0%,\r\n    #8547c3 51%,\r\n    #663399 100%\r\n  );\r\n}\r\n\r\n%containerConfig {\r\n  width: $width;\r\n  max-width: $max-width;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n@mixin linearGradient($color1, $color2) {\r\n  background: repeating-linear-gradient(\r\n    -45deg,\r\n    $color1,\r\n    $color1 5px,\r\n    $color2 0,\r\n    $color2 10px\r\n  );\r\n}\r\n","@import '../../../styles/variables';\r\n\r\n.checkbox-wrapper {\r\n  cursor: pointer;\r\n}\r\n\r\n.checkbox {\r\n  color: color(green);\r\n  display: inline-block;\r\n\r\n  input {\r\n    opacity: 0;\r\n    z-index: -1;\r\n\r\n    &:checked + * {\r\n      border-color: currentColor;\r\n\r\n      &::after {\r\n        height: 1em * 0.5;\r\n        animation: dothabottomcheck 0.2s ease 0s forwards;\r\n      }\r\n\r\n      &::before {\r\n        height: 1em * 1.2;\r\n        box-shadow: 0 0 0 2px color(white);\r\n        animation: dothatopcheck 0.4s ease 0s forwards;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.control-indicator {\r\n  width: 1em;\r\n  height: 1em;\r\n  border-radius: 5px;\r\n  position: relative;\r\n  margin-right: 0.5em;\r\n  background-color: transparent;\r\n  border: 2px solid color(silver);\r\n  transition: border-color ease 0.2s;\r\n\r\n  &::before,\r\n  &::after {\r\n    position: absolute;\r\n    height: 0;\r\n    width: 0.2em;\r\n    background-color: currentColor;\r\n    display: inline-block;\r\n    transform-origin: left top;\r\n    border-radius: 5px;\r\n    content: ' ';\r\n    transition: opacity ease 0.5;\r\n  }\r\n\r\n  &::before {\r\n    top: 0.7em;\r\n    left: 0.4em;\r\n    transform: rotate(-135deg);\r\n  }\r\n\r\n  &::after {\r\n    top: 1em * 0.37;\r\n    left: 1em * 0.05;\r\n    transform: rotate(-45deg);\r\n  }\r\n}\r\n\r\n@keyframes dothatopcheck {\r\n  0% {\r\n    height: 0;\r\n  }\r\n\r\n  50% {\r\n    height: 0;\r\n  }\r\n\r\n  100% {\r\n    height: 1em * 1.2;\r\n  }\r\n}\r\n\r\n@keyframes dothabottomcheck {\r\n  0% {\r\n    height: 0;\r\n  }\r\n\r\n  100% {\r\n    height: 1em/2;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"checkbox-wrapper": "Checkbox_checkbox-wrapper__2zlfs",
	"checkbox": "Checkbox_checkbox__2XN7U",
	"dothabottomcheck": "Checkbox_dothabottomcheck__WtPZD",
	"dothatopcheck": "Checkbox_dothatopcheck__2lKOf",
	"control-indicator": "Checkbox_control-indicator__2GKK-"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/Form.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./client/components/Form/Form.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/** BACKGROUNDS **/\n.Form_form__1o8xf input[type=text],\n.Form_form__1o8xf input[type=password],\n.Form_form__1o8xf input[type=email],\n.Form_form__1o8xf input[type=tel],\n.Form_form__1o8xf textarea {\n  outline: 0;\n  width: 100%;\n  padding: 0.5em;\n  font-size: 0.85em;\n  border-radius: 4px;\n  border: 1px solid #bcc2c6;\n  font-family: Courier New, Courier, monospace;\n}", "",{"version":3,"sources":["webpack://../../styles/_variables.scss","webpack://Form.module.scss"],"names":[],"mappings":"AA6BA,kBAAA;AC1BE;;;;;EAKE,UAAA;EACA,WAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,4CAAA;AADJ","sourcesContent":["$colors: (\r\n  white: #fff,\r\n  darker-white: #f8f8f8,\r\n  black: #1b1b15,\r\n  green: #58af58,\r\n  grey: #77838b,\r\n  silver: #bcc2c6,\r\n  yellow: #f7df1e,\r\n  red: #eb4d4b,\r\n  blue: #2980b9,\r\n  purple: #663399,\r\n  twitter-blue: #1b95e0,\r\n  twitter-blue-hover: #0c7abf,\r\n  facebook-blue: #1877f2,\r\n  linkedin-blue: #52aad3,\r\n  whatsapp-green: #01e675,\r\n);\r\n\r\n$width: 90%;\r\n$max-width: 1000px;\r\n$cubic: cubic-bezier(0.18, 0.89, 0.32, 1.28);\r\n$aside-menu-width: 18em;\r\n$lesson-menu-width: 18em;\r\n$app-header-height: 3.3em;\r\n$width-grid: 4.5vw;\r\n@function color($x) {\r\n  @return map-get($colors, $x);\r\n}\r\n\r\n/** BACKGROUNDS **/\r\n%gradientBackground {\r\n  background-size: 150% auto;\r\n  background-position: left center;\r\n}\r\n\r\n%blackGradientBackground {\r\n  color: color(white);\r\n  background-image: linear-gradient(\r\n    to right,\r\n    color(black) 0%,\r\n    lighten(color(black), 10%) 51%,\r\n    color(black) 100%\r\n  );\r\n}\r\n\r\n%redGradientBackground {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #c0392b 0%,\r\n    #eb4d4b 51%,\r\n    #c0392b 100%\r\n  );\r\n}\r\n\r\n%greenGradientBackground {\r\n  color: color(white);\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #27ae60 0%,\r\n    #2ecc71 51%,\r\n    #27ae60 100%\r\n  );\r\n}\r\n\r\n%blueGradientBackground {\r\n  color: color(white);\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #2980b9 0%,\r\n    #3aa3e9 51%,\r\n    #2980b9 100%\r\n  );\r\n}\r\n\r\n%yellowGradientBackground {\r\n  color: color(black);\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #f39c12 0%,\r\n    #f1c40f 51%,\r\n    #f39c12 100%\r\n  );\r\n}\r\n\r\n%greyGradientBackground {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    color(grey) 0%,\r\n    color(silver) 51%,\r\n    color(grey) 100%\r\n  );\r\n}\r\n\r\n%purpleGradientBackground {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #663399 0%,\r\n    #8547c3 51%,\r\n    #663399 100%\r\n  );\r\n}\r\n\r\n%containerConfig {\r\n  width: $width;\r\n  max-width: $max-width;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n@mixin linearGradient($color1, $color2) {\r\n  background: repeating-linear-gradient(\r\n    -45deg,\r\n    $color1,\r\n    $color1 5px,\r\n    $color2 0,\r\n    $color2 10px\r\n  );\r\n}\r\n","@import '../../styles/variables';\r\n\r\n.form {\r\n  input[type='text'],\r\n  input[type='password'],\r\n  input[type='email'],\r\n  input[type='tel'],\r\n  textarea {\r\n    outline: 0;\r\n    width: 100%;\r\n    padding: 0.5em;\r\n    font-size: 0.85em;\r\n    border-radius: 4px;\r\n    border: 1px solid color(silver);\r\n    font-family: Courier New, Courier, monospace;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"form": "Form_form__1o8xf"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/FormGroup/FormGroup.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./client/components/Form/FormGroup/FormGroup.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".FormGroup_form-group__3SRS1 {\n  display: block;\n}\n.FormGroup_form-group__3SRS1 .label {\n  display: block;\n  font-size: 0.75em;\n  font-weight: bold;\n}\n.FormGroup_form-group__3SRS1 input[type=text],\n.FormGroup_form-group__3SRS1 input[type=password],\n.FormGroup_form-group__3SRS1 input[type=email],\n.FormGroup_form-group__3SRS1 textarea {\n  width: 100%;\n  display: block;\n}", "",{"version":3,"sources":["webpack://FormGroup.module.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;AACF;AACE;EACE,cAAA;EACA,iBAAA;EACA,iBAAA;AACJ;AAEE;;;;EAIE,WAAA;EACA,cAAA;AAAJ","sourcesContent":[".form-group {\r\n  display: block;\r\n\r\n  :global .label {\r\n    display: block;\r\n    font-size: 0.75em;\r\n    font-weight: bold;\r\n  }\r\n\r\n  input[type=\"text\"],\r\n  input[type=\"password\"],\r\n  input[type=\"email\"],\r\n  textarea {\r\n    width: 100%;\r\n    display: block;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"form-group": "FormGroup_form-group__3SRS1"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/InputWithIcon/InputWithIcon.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./client/components/Form/InputWithIcon/InputWithIcon.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".InputWithIcon_input-with-icon__1wg1X input {\n  padding-right: 2.5em !important;\n}\n.InputWithIcon_input-with-icon__1wg1X > span {\n  top: 0.25em;\n  right: 0.5em;\n}", "",{"version":3,"sources":["webpack://InputWithIcon.module.scss"],"names":[],"mappings":"AACE;EACE,+BAAA;AAAJ;AAGE;EACE,WAAA;EACA,YAAA;AADJ","sourcesContent":[".input-with-icon {\r\n  input {\r\n    padding-right: 2.5em !important;\r\n  }\r\n\r\n  & > span {\r\n    top: 0.25em;\r\n    right: 0.5em;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"input-with-icon": "InputWithIcon_input-with-icon__1wg1X"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/Form/PasswordReveal/PasswordReveal.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./client/components/Form/PasswordReveal/PasswordReveal.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".PasswordReveal_password-reveal__PDCbb input {\n  padding-right: 2.5em !important;\n}\n.PasswordReveal_password-reveal__PDCbb button {\n  padding: 0.5em;\n  border: 0;\n  height: 32px;\n  width: 32px;\n  top: 0.25em;\n  align-items: center;\n  right: 0;\n  cursor: pointer;\n  background-color: inherit;\n}", "",{"version":3,"sources":["webpack://PasswordReveal.module.scss"],"names":[],"mappings":"AACE;EACE,+BAAA;AAAJ;AAGE;EACE,cAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,mBAAA;EACA,QAAA;EACA,eAAA;EACA,yBAAA;AADJ","sourcesContent":[".password-reveal {\r\n  input {\r\n    padding-right: 2.5em !important;\r\n  }\r\n\r\n  button {\r\n    padding: 0.5em;\r\n    border: 0;\r\n    height: 32px;\r\n    width: 32px;\r\n    top: 0.25em;\r\n    align-items: center;\r\n    right: 0;\r\n    cursor: pointer;\r\n    background-color: inherit;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"password-reveal": "PasswordReveal_password-reveal__PDCbb"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/login/Login.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./client/components/login/Login.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/** BACKGROUNDS **/\n.Login_login-form__cXQRT {\n  -webkit-transition: all 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  transition: all 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  background-color: white;\n  padding: 1em;\n  border: 1px solid silver;\n  border-radius: 5px;\n  color: black;\n  text-align: left;\n}\n\n.Login_server-error__8H94W {\n  font-size: 0.85em;\n}", "",{"version":3,"sources":["webpack://../../styles/_variables.scss","webpack://Login.module.scss"],"names":[],"mappings":"AA6BA,kBAAA;AC3BA;EACE,kEAAA;EAAA,0DAAA;EACA,uBAAA;EACA,YAAA;EACA,wBAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;AAAF;;AAGA;EACE,iBAAA;AAAF","sourcesContent":["$colors: (\r\n  white: #fff,\r\n  darker-white: #f8f8f8,\r\n  black: #1b1b15,\r\n  green: #58af58,\r\n  grey: #77838b,\r\n  silver: #bcc2c6,\r\n  yellow: #f7df1e,\r\n  red: #eb4d4b,\r\n  blue: #2980b9,\r\n  purple: #663399,\r\n  twitter-blue: #1b95e0,\r\n  twitter-blue-hover: #0c7abf,\r\n  facebook-blue: #1877f2,\r\n  linkedin-blue: #52aad3,\r\n  whatsapp-green: #01e675,\r\n);\r\n\r\n$width: 90%;\r\n$max-width: 1000px;\r\n$cubic: cubic-bezier(0.18, 0.89, 0.32, 1.28);\r\n$aside-menu-width: 18em;\r\n$lesson-menu-width: 18em;\r\n$app-header-height: 3.3em;\r\n$width-grid: 4.5vw;\r\n@function color($x) {\r\n  @return map-get($colors, $x);\r\n}\r\n\r\n/** BACKGROUNDS **/\r\n%gradientBackground {\r\n  background-size: 150% auto;\r\n  background-position: left center;\r\n}\r\n\r\n%blackGradientBackground {\r\n  color: color(white);\r\n  background-image: linear-gradient(\r\n    to right,\r\n    color(black) 0%,\r\n    lighten(color(black), 10%) 51%,\r\n    color(black) 100%\r\n  );\r\n}\r\n\r\n%redGradientBackground {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #c0392b 0%,\r\n    #eb4d4b 51%,\r\n    #c0392b 100%\r\n  );\r\n}\r\n\r\n%greenGradientBackground {\r\n  color: color(white);\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #27ae60 0%,\r\n    #2ecc71 51%,\r\n    #27ae60 100%\r\n  );\r\n}\r\n\r\n%blueGradientBackground {\r\n  color: color(white);\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #2980b9 0%,\r\n    #3aa3e9 51%,\r\n    #2980b9 100%\r\n  );\r\n}\r\n\r\n%yellowGradientBackground {\r\n  color: color(black);\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #f39c12 0%,\r\n    #f1c40f 51%,\r\n    #f39c12 100%\r\n  );\r\n}\r\n\r\n%greyGradientBackground {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    color(grey) 0%,\r\n    color(silver) 51%,\r\n    color(grey) 100%\r\n  );\r\n}\r\n\r\n%purpleGradientBackground {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #663399 0%,\r\n    #8547c3 51%,\r\n    #663399 100%\r\n  );\r\n}\r\n\r\n%containerConfig {\r\n  width: $width;\r\n  max-width: $max-width;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n@mixin linearGradient($color1, $color2) {\r\n  background: repeating-linear-gradient(\r\n    -45deg,\r\n    $color1,\r\n    $color1 5px,\r\n    $color2 0,\r\n    $color2 10px\r\n  );\r\n}\r\n","@import '../../styles/variables';\r\n\r\n.login-form {\r\n  transition: all 0.25s $cubic;\r\n  background-color: white;\r\n  padding: 1em;\r\n  border: 1px solid silver;\r\n  border-radius: 5px;\r\n  color: black;\r\n  text-align: left;\r\n}\r\n\r\n.server-error {\r\n  font-size: 0.85em;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"login-form": "Login_login-form__cXQRT",
	"server-error": "Login_server-error__8H94W"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./client/components/login/LoginButtons/LoginButtons.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./client/components/login/LoginButtons/LoginButtons.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/** BACKGROUNDS **/\n.LoginButtons_login-buttons__2EGws button {\n  padding: 0.35em;\n  -webkit-transition: -webkit-transform 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  transition: -webkit-transform 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  transition: transform 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  transition: transform 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.28), -webkit-transform 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n}\n.LoginButtons_login-buttons__2EGws p {\n  font-size: 0.8em;\n}\n.LoginButtons_login-buttons__2EGws p::before,\n.LoginButtons_login-buttons__2EGws p::after {\n  content: \"\";\n  top: 50%;\n  width: 40%;\n  position: absolute;\n  border-top: 1px solid #bcc2c6;\n}\n.LoginButtons_login-buttons__2EGws p::before {\n  left: 0;\n}\n.LoginButtons_login-buttons__2EGws p::after {\n  right: 0;\n}\n\n.LoginButtons_register-mode__3p7RI button:first-of-type {\n  -webkit-transform: translateY(5em);\n          transform: translateY(5em);\n}\n.LoginButtons_register-mode__3p7RI button:nth-of-type(2) {\n  -webkit-transform: translateY(-5em);\n          transform: translateY(-5em);\n}", "",{"version":3,"sources":["webpack://../../../styles/_variables.scss","webpack://LoginButtons.module.scss"],"names":[],"mappings":"AA6BA,kBAAA;AC1BE;EACE,eAAA;EACA,gFAAA;EAAA,wEAAA;EAAA,gEAAA;EAAA,8HAAA;AADJ;AAIE;EACE,gBAAA;AAFJ;AAKE;;EAEE,WAAA;EACA,QAAA;EACA,UAAA;EACA,kBAAA;EACA,6BAAA;AAHJ;AAME;EACE,OAAA;AAJJ;AAOE;EACE,QAAA;AALJ;;AAUE;EACE,kCAAA;UAAA,0BAAA;AAPJ;AAUE;EACE,mCAAA;UAAA,2BAAA;AARJ","sourcesContent":["$colors: (\r\n  white: #fff,\r\n  darker-white: #f8f8f8,\r\n  black: #1b1b15,\r\n  green: #58af58,\r\n  grey: #77838b,\r\n  silver: #bcc2c6,\r\n  yellow: #f7df1e,\r\n  red: #eb4d4b,\r\n  blue: #2980b9,\r\n  purple: #663399,\r\n  twitter-blue: #1b95e0,\r\n  twitter-blue-hover: #0c7abf,\r\n  facebook-blue: #1877f2,\r\n  linkedin-blue: #52aad3,\r\n  whatsapp-green: #01e675,\r\n);\r\n\r\n$width: 90%;\r\n$max-width: 1000px;\r\n$cubic: cubic-bezier(0.18, 0.89, 0.32, 1.28);\r\n$aside-menu-width: 18em;\r\n$lesson-menu-width: 18em;\r\n$app-header-height: 3.3em;\r\n$width-grid: 4.5vw;\r\n@function color($x) {\r\n  @return map-get($colors, $x);\r\n}\r\n\r\n/** BACKGROUNDS **/\r\n%gradientBackground {\r\n  background-size: 150% auto;\r\n  background-position: left center;\r\n}\r\n\r\n%blackGradientBackground {\r\n  color: color(white);\r\n  background-image: linear-gradient(\r\n    to right,\r\n    color(black) 0%,\r\n    lighten(color(black), 10%) 51%,\r\n    color(black) 100%\r\n  );\r\n}\r\n\r\n%redGradientBackground {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #c0392b 0%,\r\n    #eb4d4b 51%,\r\n    #c0392b 100%\r\n  );\r\n}\r\n\r\n%greenGradientBackground {\r\n  color: color(white);\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #27ae60 0%,\r\n    #2ecc71 51%,\r\n    #27ae60 100%\r\n  );\r\n}\r\n\r\n%blueGradientBackground {\r\n  color: color(white);\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #2980b9 0%,\r\n    #3aa3e9 51%,\r\n    #2980b9 100%\r\n  );\r\n}\r\n\r\n%yellowGradientBackground {\r\n  color: color(black);\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #f39c12 0%,\r\n    #f1c40f 51%,\r\n    #f39c12 100%\r\n  );\r\n}\r\n\r\n%greyGradientBackground {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    color(grey) 0%,\r\n    color(silver) 51%,\r\n    color(grey) 100%\r\n  );\r\n}\r\n\r\n%purpleGradientBackground {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #663399 0%,\r\n    #8547c3 51%,\r\n    #663399 100%\r\n  );\r\n}\r\n\r\n%containerConfig {\r\n  width: $width;\r\n  max-width: $max-width;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n@mixin linearGradient($color1, $color2) {\r\n  background: repeating-linear-gradient(\r\n    -45deg,\r\n    $color1,\r\n    $color1 5px,\r\n    $color2 0,\r\n    $color2 10px\r\n  );\r\n}\r\n","@import '../../../styles/variables';\r\n\r\n.login-buttons {\r\n  button {\r\n    padding: 0.35em;\r\n    transition: transform 0.25s $cubic;\r\n  }\r\n\r\n  p {\r\n    font-size: 0.8em;\r\n  }\r\n\r\n  p::before,\r\n  p::after {\r\n    content: '';\r\n    top: 50%;\r\n    width: 40%;\r\n    position: absolute;\r\n    border-top: 1px solid color(silver);\r\n  }\r\n\r\n  p::before {\r\n    left: 0;\r\n  }\r\n\r\n  p::after {\r\n    right: 0;\r\n  }\r\n}\r\n\r\n.register-mode {\r\n  button:first-of-type {\r\n    transform: translateY(5em);\r\n  }\r\n\r\n  button:nth-of-type(2) {\r\n    transform: translateY(-5em);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"login-buttons": "LoginButtons_login-buttons__2EGws",
	"register-mode": "LoginButtons_register-mode__3p7RI"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvRm9ybS9DaGVja2JveC9DaGVja2JveC5tb2R1bGUuc2Nzcz9jOTYzIiwid2VicGFjazovL19OX0UvLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtL0NoZWNrYm94L0NoZWNrYm94LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvRm9ybS9Gb3JtLm1vZHVsZS5zY3NzPzFjOWQiLCJ3ZWJwYWNrOi8vX05fRS8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm0vRm9ybS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm0vRm9ybUdyb3VwL0Zvcm1Hcm91cC5tb2R1bGUuc2Nzcz82YjdiIiwid2VicGFjazovL19OX0UvLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtL0Zvcm1Hcm91cC9Gb3JtR3JvdXAudHN4Iiwid2VicGFjazovL19OX0UvLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtL0lucHV0V2l0aEljb24vSW5wdXRXaXRoSWNvbi5tb2R1bGUuc2Nzcz83NmQ3Iiwid2VicGFjazovL19OX0UvLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtL0lucHV0V2l0aEljb24vSW5wdXRXaXRoSWNvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm0vUGFzc3dvcmRSZXZlYWwvUGFzc3dvcmRSZXZlYWwubW9kdWxlLnNjc3M/MDkyYSIsIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvRm9ybS9QYXNzd29yZFJldmVhbC9QYXNzd29yZFJldmVhbC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NsaWVudC9jb21wb25lbnRzL2xvZ2luL0xvZ2luLm1vZHVsZS5zY3NzPzBlM2MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NsaWVudC9jb21wb25lbnRzL2xvZ2luL0xvZ2luLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvbG9naW4vTG9naW5CdXR0b25zL0xvZ2luQnV0dG9ucy5tb2R1bGUuc2Nzcz80ZTQyIiwid2VicGFjazovL19OX0UvLi9jbGllbnQvY29tcG9uZW50cy9sb2dpbi9Mb2dpbkJ1dHRvbnMvTG9naW5CdXR0b25zLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L3JlZHV4L2V4ZXJjaXNlLXN1Ym1pc3Npb25zL2V4ZXJjaXNlLXN1Ym1pc3Npb25zLmFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NsaWVudC9yZWR1eC9leGVyY2lzZS1zdWJtaXNzaW9ucy9leGVyY2lzZS1zdWJtaXNzaW9ucy5yZWR1Y2VyLnRzIiwid2VicGFjazovL19OX0UvLi9jbGllbnQvcmVkdXgvcm9vdC5yZWR1Y2VyLnRzIiwid2VicGFjazovL19OX0UvLi9jbGllbnQvcmVkdXgvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NsaWVudC9yZWR1eC91c2VyL3VzZXIucmVkdWNlci50cyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL190cmltbWVkRW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvRm9ybS9DaGVja2JveC9DaGVja2JveC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvRm9ybS9Gb3JtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtL0Zvcm1Hcm91cC9Gb3JtR3JvdXAubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm0vSW5wdXRXaXRoSWNvbi9JbnB1dFdpdGhJY29uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtL1Bhc3N3b3JkUmV2ZWFsL1Bhc3N3b3JkUmV2ZWFsLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9jbGllbnQvY29tcG9uZW50cy9sb2dpbi9Mb2dpbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvbG9naW4vTG9naW5CdXR0b25zL0xvZ2luQnV0dG9ucy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiXSwibmFtZXMiOlsiQ2hlY2tib3giLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInByb3BzIiwic3R5bGVzIiwiY2hlY2tib3giLCJGb3JtIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwib25TdWJtaXQiLCJ3aXRoU3R5bGVzIiwib25JbnB1dCIsIm5vb3AiLCJhdXRvQ29tcGxldGUiLCJyZXN0Iiwic3VibWl0IiwiZSIsInBlcnNpc3QiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJkYXRhIiwiZWxlbWVudHMiLCJlcnIiLCJpIiwibGVuZ3RoIiwicHVzaCIsImZpbHRlciIsImVsIiwibmFtZSIsImZvckVhY2giLCJoYXNPd25Qcm9wZXJ0eSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJzdWJtaXRSZXN1bHQiLCJQcm9taXNlIiwidGhlbiIsInNob3VsZFJlc2V0IiwicmVzZXQiLCJmb3JtIiwiRm9ybUdyb3VwIiwiSW5wdXRXaXRoSWNvbiIsInJlZiIsIlBhc3N3b3JkUmV2ZWFsIiwicmVxdWlyZWQiLCJwYXNzd29yZEVycm9yIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImZhRXllIiwiZmFFeWVTbGFzaCIsIkxvZ2luIiwidHJpbSIsInNldFN0YXRlIiwidXNlcm5hbWUiLCJ1c2VybmFtZUV4aXN0cyIsInVuZGVmaW5lZCIsImNoZWNrVXNlcm5hbWVEZWJvdW5jZWRGbiIsImNhbmNlbCIsImRlYm91bmNlIiwiVXNlclNlcnZpY2UiLCJjaGVja1VzZXJuYW1lIiwibmV3TW9kZSIsIm1vZGUiLCJzdGF0ZSIsInNldFRpbWVvdXQiLCJvblN1Y2Nlc3MiLCJhcGlUb0NhbGwiLCJyZWdpc3RlciIsImxvZ2luIiwibG9hZGluZyIsInVzZXIiLCJnZXRTdG9yZSIsImRpc3BhdGNoIiwibG9hZEluZm8iLCJlcnJvciIsInNlcnZlckVycm9yIiwibWVzc2FnZSIsIm9uVXNlcm5hbWVDaGFuZ2UiLCJmYVRpbWVzIiwiZmFDaGVjayIsImZhU3Bpbm5lciIsImZvbnRTaXplIiwiY2hhbmdlTW9kZSIsIkNvbXBvbmVudCIsIkxvZ2luQnV0dG9ucyIsIm9uTG9naW4iLCJvblJlZ2lzdGVyIiwiQUREIiwiUkVNT1ZFIiwiVVBEQVRFIiwiTE9BRCIsIlNFQVJDSCIsIkVYRVJDSVNFX1NVQk1JU1NJT05TIiwiYWRkU3VibWlzc2lvbiIsInN1Ym1pc3Npb24iLCJpbmRleCIsInBheWxvYWQiLCJyZW1vdmVTdWJtaXNzaW9uIiwiaWQiLCJ1cGRhdGVTdWJtaXNzaW9uIiwibmV3U3VibWlzc2lvbiIsImxvYWRTdWJtaXNzaW9ucyIsIm5ld1N1Ym1pc3Npb25zIiwic2VhcmNoU3VibWlzc2lvbnMiLCJxdWVyeSIsImluaXRpYWxTdGF0ZSIsInN1Ym1pc3Npb25zIiwic2VhcmNoIiwicGFnZSIsImVuZCIsInN1Ym1pc3Npb25SZWR1Y2VyIiwiYWN0aW9uIiwiQXJyYXkiLCJpc0FycmF5Iiwic2xpY2UiLCJpbmNsdWRlcyIsIl9pZCIsIm1hcCIsInJvb3RSZWR1Y2VyIiwiVVNFUl9MT0dPVVQiLCJhcHBSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwic3RvcmUiLCJjcmVhdGVTdG9yZVdpdGhQcmVsb2FkZWREYXRhIiwicHJlbG9hZGVkRGF0YSIsImNyZWF0ZVN0b3JlIiwiZGVmYXVsdFVzZXJTdGF0ZSIsImluZm8iLCJub3RpZmljYXRpb25zIiwibGlzdCIsInVucmVhZCIsInVucmVhZENvdW50IiwidXNlclJlZHVjZXIiLCJVU0VSX0lORk8iLCJVU0VSX05PVElGSUNBVElPTlMiLCJuZXdOb3RpZmljYXRpb25zIiwiTUFSS19BU19SRUFEIiwibiIsImlzVW5yZWFkIiwiTUFSS19BU19VTlJFQUQiLCJNQVJLX0FMTF9BU19SRUFEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxVQUFVLG1CQUFPLENBQUMsNE5BQWlIO0FBQ25JLDBCQUEwQixtQkFBTyxDQUFDLGdvQkFBeVc7O0FBRTNZOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUE7QUFDQSxNQUFNLGdvQkFBeVc7QUFDL1c7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxnb0JBQXlXOztBQUVuWTs7QUFFQTtBQUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBdUU7QUFDeEQ7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtCQUFrQix5RkFBYztBQUNoQyxDOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBd0Q7QUFDNkI7QUFDdEU7QUFDZixlQUFlLGlGQUFPO0FBQ3RCO0FBQ0E7O0FBRUEsU0FBUyxnR0FBcUI7QUFDOUIsQzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkU7QUFDSjtBQUNzQjtBQUNsQjtBQUM5RDtBQUNmLFNBQVMsNEZBQWlCLFNBQVMsMEZBQWUsU0FBUyxxR0FBMEIsU0FBUyw0RkFBaUI7QUFDL0csQzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vQ2hlY2tib3gubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0NoZWNrYm94Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vQ2hlY2tib3gubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NoZWNrYm94Lm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFJlYWN0LklucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4ge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tib3goe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGNsYXNzTmFtZSA9ICcnLFxyXG4gIC4uLnByb3BzXHJcbn06IFByb3BzV2l0aENoaWxkcmVuPFByb3BzPikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGFiZWwgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2NoZWNrYm94LXdyYXBwZXInXX0gJHtjbGFzc05hbWV9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3h9PlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhYnNvbHV0ZVwiIHR5cGU9XCJjaGVja2JveFwiIHsuLi5wcm9wc30gLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3N0eWxlc1snY29udHJvbC1pbmRpY2F0b3InXX0gZC1pbmxpbmUtYmxvY2tgfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9sYWJlbD5cclxuICApO1xyXG59XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRm9ybS5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRm9ybS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0Zvcm0ubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0LCB7IEZvcm1IVE1MQXR0cmlidXRlcywgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBub29wIGZyb20gJ2xvZGFzaC9ub29wJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb3JtLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEZvcm1IVE1MQXR0cmlidXRlczxIVE1MRm9ybUVsZW1lbnQ+IHtcclxuICBvblN1Ym1pdDogKGRhdGE6IGFueSkgPT4gdm9pZCB8IFByb21pc2U8Ym9vbGVhbj47XHJcblxyXG4gIHdpdGhTdHlsZXM/OiBib29sZWFuO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBhdXRvQ29tcGxldGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEZvcm0gPSBSZWFjdC5mb3J3YXJkUmVmKCh7XHJcbiAgb25TdWJtaXQsXHJcbiAgd2l0aFN0eWxlcyA9IHRydWUsXHJcbiAgb25JbnB1dCA9IG5vb3AsXHJcbiAgY2xhc3NOYW1lID0gJycsXHJcbiAgYXV0b0NvbXBsZXRlID0gJ29uJyxcclxuICBjaGlsZHJlbixcclxuICAuLi5yZXN0XHJcbn06IFByb3BzV2l0aENoaWxkcmVuPFByb3BzPiwgZm9yd2FyZFJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICBjb25zdCBzdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wZXJzaXN0KCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICBsZXQgZWxlbWVudHMgPSBbXTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZWxlbWVudHMgPSBbLi4uZS50YXJnZXQuZWxlbWVudHNdO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAvLyBNU0VkZ2UgZml4XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLnRhcmdldC5lbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgZWxlbWVudHMucHVzaChlLnRhcmdldC5lbGVtZW50c1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtZW50c1xyXG4gICAgICAgIC5maWx0ZXIoKGVsKSA9PiBlbC5uYW1lKVxyXG4gICAgICAgIC5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVsLmhhc093blByb3BlcnR5KCdjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgaWYgKGVsLnR5cGUgPT09ICdjaGVja2JveCcpIHtcclxuICAgICAgICAgICAgICBkYXRhW2VsLm5hbWVdID0gZWwuY2hlY2tlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWwudHlwZSA9PT0gJ3JhZGlvJyAmJiBlbC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgZGF0YVtlbC5uYW1lXSA9IGVsLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhW2VsLm5hbWVdID0gZWwudmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgc3VibWl0UmVzdWx0ID0gb25TdWJtaXQoZGF0YSk7XHJcbiAgICAgIGlmIChzdWJtaXRSZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgc3VibWl0UmVzdWx0LnRoZW4oKHNob3VsZFJlc2V0KSA9PiB7XHJcbiAgICAgICAgICBpZiAoc2hvdWxkUmVzZXQpIHtcclxuICAgICAgICAgICAgZS50YXJnZXQucmVzZXQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybVxyXG4gICAgICBjbGFzc05hbWU9e3dpdGhTdHlsZXMgPyBgJHtzdHlsZXMuZm9ybX0gJHtjbGFzc05hbWV9YCA6IGNsYXNzTmFtZX1cclxuICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgb25TdWJtaXQ9e3N1Ym1pdH1cclxuICAgICAgb25JbnB1dD17b25JbnB1dH1cclxuICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgICByZWY9e2ZvcndhcmRSZWZ9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59KTtcclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSh7XHJcbi8vICAgb25TdWJtaXQsXHJcbi8vICAgd2l0aFN0eWxlcyA9IHRydWUsXHJcbi8vICAgb25JbnB1dCA9IG5vb3AsXHJcbi8vICAgY2xhc3NOYW1lID0gJycsXHJcbi8vICAgYXV0b0NvbXBsZXRlID0gJ29uJyxcclxuLy8gICBjaGlsZHJlbixcclxuLy8gICAuLi5yZXN0XHJcbi8vIH06IFByb3BzV2l0aENoaWxkcmVuPFByb3BzPikge1xyXG4vLyAgIGNvbnN0IHN1Ym1pdCA9IChlKSA9PiB7XHJcbi8vICAgICBlLnBlcnNpc3QoKTtcclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbi8vICAgICBpZiAoZS50YXJnZXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbi8vICAgICAgIGxldCBkYXRhID0ge307XHJcbi8vICAgICAgIGxldCBlbGVtZW50cyA9IFtdO1xyXG5cclxuLy8gICAgICAgdHJ5IHtcclxuLy8gICAgICAgICBlbGVtZW50cyA9IFsuLi5lLnRhcmdldC5lbGVtZW50c107XHJcbi8vICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgICAgIC8vIE1TRWRnZSBmaXhcclxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUudGFyZ2V0LmVsZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XHJcbi8vICAgICAgICAgICBlbGVtZW50cy5wdXNoKGUudGFyZ2V0LmVsZW1lbnRzW2ldKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgIGVsZW1lbnRzXHJcbi8vICAgICAgICAgLmZpbHRlcigoZWwpID0+IGVsLm5hbWUpXHJcbi8vICAgICAgICAgLmZvckVhY2goKGVsKSA9PiB7XHJcbi8vICAgICAgICAgICBpZiAoZWwuaGFzT3duUHJvcGVydHkoJ2NoZWNrZWQnKSkge1xyXG4vLyAgICAgICAgICAgICBpZiAoZWwudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xyXG4vLyAgICAgICAgICAgICAgIGRhdGFbZWwubmFtZV0gPSBlbC5jaGVja2VkO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIGlmIChlbC50eXBlID09PSAncmFkaW8nICYmIGVsLmNoZWNrZWQpIHtcclxuLy8gICAgICAgICAgICAgICBkYXRhW2VsLm5hbWVdID0gZWwudmFsdWU7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIGRhdGFbZWwubmFtZV0gPSBlbC52YWx1ZTtcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9KTtcclxuXHJcbi8vICAgICAgIGxldCBzdWJtaXRSZXN1bHQgPSBvblN1Ym1pdChkYXRhKTtcclxuLy8gICAgICAgaWYgKHN1Ym1pdFJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuLy8gICAgICAgICBzdWJtaXRSZXN1bHQudGhlbigoc2hvdWxkUmVzZXQpID0+IHtcclxuLy8gICAgICAgICAgIGlmIChzaG91bGRSZXNldCkge1xyXG4vLyAgICAgICAgICAgICBlLnRhcmdldC5yZXNldCgpO1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfTtcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxmb3JtXHJcbi8vICAgICAgIGNsYXNzTmFtZT17d2l0aFN0eWxlcyA/IGAke3N0eWxlcy5mb3JtfSAke2NsYXNzTmFtZX1gIDogY2xhc3NOYW1lfVxyXG4vLyAgICAgICBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4vLyAgICAgICBvblN1Ym1pdD17c3VibWl0fVxyXG4vLyAgICAgICBvbklucHV0PXtvbklucHV0fVxyXG4vLyAgICAgICBhdXRvQ29ycmVjdD1cIm9mZlwiXHJcbi8vICAgICAgIGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfVxyXG4vLyAgICAgICB7Li4ucmVzdH1cclxuLy8gICAgID5cclxuLy8gICAgICAge2NoaWxkcmVufVxyXG4vLyAgICAgPC9mb3JtPlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRm9ybUdyb3VwLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9Gb3JtR3JvdXAubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9Gb3JtR3JvdXAubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9ybUdyb3VwLm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1Hcm91cCh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lLFxyXG59OiBQcm9wc1dpdGhDaGlsZHJlbjx7IGNsYXNzTmFtZT86IHN0cmluZyB9Pikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzWydmb3JtLWdyb3VwJ119ICR7Y2xhc3NOYW1lfWB9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vSW5wdXRXaXRoSWNvbi5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vSW5wdXRXaXRoSWNvbi5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0lucHV0V2l0aEljb24ubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5wdXRXaXRoSWNvbi5tb2R1bGUuc2Nzcyc7XHJcblxyXG50eXBlIFByb3BzID0gUHJvcHNXaXRoQ2hpbGRyZW48UmVhY3QuSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj5cclxuXHJcbmNvbnN0IElucHV0V2l0aEljb24gPSBSZWFjdC5mb3J3YXJkUmVmKChcclxuICB7XHJcbiAgICBjaGlsZHJlbixcclxuICAgIC4uLnJlc3RcclxuICB9OiBQcm9wcyxcclxuICByZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PixcclxuKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2lucHV0LXdpdGgtaWNvbiddfSByZWxhdGl2ZWB9PlxyXG4gICAgICA8aW5wdXQgcmVmPXtyZWZ9IHsuLi5yZXN0fSAvPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZVwiPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dFdpdGhJY29uO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL1Bhc3N3b3JkUmV2ZWFsLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9QYXNzd29yZFJldmVhbC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL1Bhc3N3b3JkUmV2ZWFsLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFFeWUsIGZhRXllU2xhc2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ34vY29tcG9uZW50cy9CdXR0b24nO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Bhc3N3b3JkUmV2ZWFsLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcbiAgYXV0b0NvbXBsZXRlPzogc3RyaW5nO1xyXG4gIHBhc3N3b3JkRXJyb3I/OiBib29sZWFuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYXNzd29yZFJldmVhbCh7XHJcbiAgcmVxdWlyZWQgPSB0cnVlLFxyXG4gIG5hbWUgPSAncGFzc3dvcmQnLFxyXG4gIGF1dG9Db21wbGV0ZSA9ICdvbicsXHJcbiAgcGFzc3dvcmRFcnJvciA9IGZhbHNlLFxyXG59OiBQcm9wcykge1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3Bhc3N3b3JkLXJldmVhbCddfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT17dmlzaWJsZSA/ICd0ZXh0JyA6ICdwYXNzd29yZCd9XHJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdGV4dC1ncmV5XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUoIXZpc2libGUpfVxyXG4gICAgICAgICAgdGl0bGU9e3Zpc2libGUgPyAnSGlkZSBwYXNzd29yZCcgOiAnU2hvdyBwYXNzd29yZCd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXt2aXNpYmxlID8gZmFFeWUgOiBmYUV5ZVNsYXNofSAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Bhc3N3b3JkRXJyb3JcclxuICAgICAgICA/IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkIHRleHQtYm9sZFwiPvCfp5nigI0gTnUgcG/Im2kgdHJlY2UgbWFpIGRlcGFydGUgZGVjw6J0IGN1IG8gcGFyb2zEgyE8L3NwYW4+XHJcbiAgICAgICAgOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRSZXZlYWw7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Zvcm0nO1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb3JtR3JvdXAgfSBmcm9tICcuL0Zvcm1Hcm91cC9Gb3JtR3JvdXAnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrYm94IH0gZnJvbSAnLi9DaGVja2JveC9DaGVja2JveCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW5wdXRXaXRoSWNvbiB9IGZyb20gJy4vSW5wdXRXaXRoSWNvbi9JbnB1dFdpdGhJY29uJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXNzd29yZFJldmVhbCB9IGZyb20gJy4vUGFzc3dvcmRSZXZlYWwvUGFzc3dvcmRSZXZlYWwnO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0xvZ2luLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9Mb2dpbi5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0xvZ2luLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gvZGVib3VuY2UnO1xyXG5pbXBvcnQgeyBEZWJvdW5jZWRGdW5jIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFDaGVjaywgZmFTcGlubmVyLCBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tICd+L3NlcnZpY2VzL1VzZXIuc2VydmljZSc7XHJcbmltcG9ydCBMb2dpbkJ1dHRvbnMgZnJvbSAnLi9Mb2dpbkJ1dHRvbnMvTG9naW5CdXR0b25zJztcclxuaW1wb3J0IEZvcm0sIHtcclxuICBGb3JtR3JvdXAsXHJcbiAgQ2hlY2tib3gsXHJcbiAgSW5wdXRXaXRoSWNvbixcclxuICBQYXNzd29yZFJldmVhbCxcclxufSBmcm9tICd+L2NvbXBvbmVudHMvRm9ybSc7XHJcbmltcG9ydCB7IGxvYWRJbmZvIH0gZnJvbSAnfi9yZWR1eC91c2VyL3VzZXIuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFVzZXJTdGF0ZSB9IGZyb20gJ34vcmVkdXgvdXNlci90eXBlcyc7XHJcbmltcG9ydCB7IGdldFN0b3JlIH0gZnJvbSAnfi9yZWR1eC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9naW4ubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIE15UHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBvblN1Y2Nlc3M/OiAodXNlcj86IFVzZXJTdGF0ZVsnaW5mbyddKSA9PiB2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSBNeVN0YXRlIHtcclxuICBtb2RlOiAnbG9naW4nIHwgJ3JlZ2lzdGVyJyxcclxuICBsb2FkaW5nOiBib29sZWFuO1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgc2VydmVyRXJyb3I6IHN0cmluZztcclxuICB1c2VybmFtZUV4aXN0czogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQ8TXlQcm9wcywgTXlTdGF0ZT4ge1xyXG4gIHByaXZhdGUgY2hlY2tVc2VybmFtZURlYm91bmNlZEZuOiBEZWJvdW5jZWRGdW5jPCgpID0+IHZvaWQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogTXlQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG1vZGU6ICdsb2dpbicsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBzZXJ2ZXJFcnJvcjogbnVsbCxcclxuICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICB1c2VybmFtZUV4aXN0czogdW5kZWZpbmVkLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5jaGVja1VzZXJuYW1lRGVib3VuY2VkRm4/LmNhbmNlbCgpO1xyXG4gIH1cclxuXHJcbiAgb25Vc2VybmFtZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBsZXQgdmFsdWU6IHN0cmluZyA9IGUudGFyZ2V0LnZhbHVlID8/ICcnO1xyXG4gICAgdmFsdWUgPSB2YWx1ZS50cmltKCk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHVzZXJuYW1lOiB2YWx1ZSxcclxuICAgICAgdXNlcm5hbWVFeGlzdHM6IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrVXNlcm5hbWVEZWJvdW5jZWRGbikge1xyXG4gICAgICAvLyBDYW5jZWwgcHJldmlvdXMgY2FsbFxyXG4gICAgICB0aGlzLmNoZWNrVXNlcm5hbWVEZWJvdW5jZWRGbi5jYW5jZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGFydCBhIG5ldyBvbmUgc28gd2UgZG9uJ3Qgb3ZlcmxvYWQgc2VydmVyIHdpdGggcmVxdWVzdHNcclxuICAgIHRoaXMuY2hlY2tVc2VybmFtZURlYm91bmNlZEZuID0gZGVib3VuY2UoKCkgPT4ge1xyXG4gICAgICBVc2VyU2VydmljZS5jaGVja1VzZXJuYW1lKHZhbHVlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0U3RhdGUoeyB1c2VybmFtZUV4aXN0czogdHJ1ZSB9KSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lRXhpc3RzOiBmYWxzZSB9KSk7XHJcbiAgICB9LCAyNTApO1xyXG5cclxuICAgIHRoaXMuY2hlY2tVc2VybmFtZURlYm91bmNlZEZuKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VNb2RlID0gKG5ld01vZGU6ICdsb2dpbicgfCAncmVnaXN0ZXInKSA9PiB7XHJcbiAgICBjb25zdCB7IG1vZGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgaWYgKG5ld01vZGUgPT09IG1vZGUpIHtcclxuICAgICAgLy8gRG8gbm90aGluZyBzaW5jZSB3ZSBoYW5kbGUgdGhlIHN1Ym1pdCBzZXBhcmF0ZWx5XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGSVhNRVxyXG4gICAgLy8gV2l0aG91dCBhcHBseWluZyB0aGUgZGVsYXksIHRoZSBmb3JtIHdpbGwgYWxzbyBnZXRcclxuICAgIC8vIGdldCBzdWJtaXR0ZWQuIE1heWJlIHRoZXJlJ3MgYSBiZXR0ZXIgc29sdXRpb24/XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBtb2RlOiBuZXdNb2RlIH0pLCAwKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBtb2RlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgeyBvblN1Y2Nlc3MgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBhcGlUb0NhbGwgPSBtb2RlID09PSAncmVnaXN0ZXInID8gVXNlclNlcnZpY2UucmVnaXN0ZXIgOiBVc2VyU2VydmljZS5sb2dpbjtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBhcGlUb0NhbGwocHJvcHMpXHJcbiAgICAgIC50aGVuKCh1c2VyOiBVc2VyU3RhdGVbJ2luZm8nXSkgPT4ge1xyXG4gICAgICAgIGdldFN0b3JlKCkuZGlzcGF0Y2gobG9hZEluZm8odXNlcikpO1xyXG5cclxuICAgICAgICBpZiAob25TdWNjZXNzKSB7XHJcbiAgICAgICAgICBvblN1Y2Nlc3ModXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VydmVyRXJyb3I6IGVycm9yLm1lc3NhZ2UgfSkpXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG1vZGUsXHJcbiAgICAgIGxvYWRpbmcsXHJcbiAgICAgIHNlcnZlckVycm9yLFxyXG4gICAgICB1c2VybmFtZUV4aXN0cyxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2xvZ2luLWZvcm0nXX0gJHtjbGFzc05hbWUgfHwgJyd9YH0+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0fSBvbklucHV0PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VydmVyRXJyb3I6IG51bGwgfSl9PlxyXG4gICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAge21vZGUgPT09ICdyZWdpc3RlcidcclxuICAgICAgICAgICAgICAgICAgPyAnRW1haWwnXHJcbiAgICAgICAgICAgICAgICAgIDogJ0VtYWlsIHNhdSB1c2VybmFtZSd9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGF1dG9DYXBpdGFsaXplPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPXttb2RlID09PSAncmVnaXN0ZXInID8gJ2VtYWlsJyA6ICdlbWFpbE9yVXNlcm5hbWUnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICB7bW9kZSA9PT0gJ3JlZ2lzdGVyJyAmJiAoXHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+IFVzZXJuYW1lIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFdpdGhJY29uXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Vc2VybmFtZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3VzZXJuYW1lRXhpc3RzICYmIDxGb250QXdlc29tZUljb24gd2lkdGg9XCIxZW1cIiBjbGFzc05hbWU9XCJ0ZXh0LXJlZFwiIGljb249e2ZhVGltZXN9IC8+fVxyXG4gICAgICAgICAgICAgICAgICB7dXNlcm5hbWVFeGlzdHMgPT09IGZhbHNlICYmIDxGb250QXdlc29tZUljb24gd2lkdGg9XCIxZW1cIiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuXCIgaWNvbj17ZmFDaGVja30gLz59XHJcbiAgICAgICAgICAgICAgICAgIHt1c2VybmFtZUV4aXN0cyA9PT0gdW5kZWZpbmVkICYmIHVzZXJuYW1lICYmIDxGb250QXdlc29tZUljb24gd2lkdGg9XCIxZW1cIiBjbGFzc05hbWU9XCJyb3RhdGVcIiBpY29uPXtmYVNwaW5uZXJ9IC8+fVxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dFdpdGhJY29uPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+IFBhcm9sYSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPFBhc3N3b3JkUmV2ZWFsIC8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICB7KG1vZGUgPT09ICdyZWdpc3RlcicpICYmIChcclxuICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IG1iLTRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcwLjg1ZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgQW0gY2l0aXQgyJlpIHN1bnQgZGUgYWNvcmQgY3VcclxuICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Rlcm1lbmktc2ktY29uZGl0aWlcIiBjbGFzc05hbWU9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIFRlcm1lbmlpIMiZaSBDb25kacibaWlsZVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgIGRlIHV0aWxpemFyZS5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHtzZXJ2ZXJFcnJvciAmJiA8cCBjbGFzc05hbWU9e2Ake3N0eWxlc1snc2VydmVyLWVycm9yJ119IHRleHQtcmVkIHRleHQtYm9sZGB9PntzZXJ2ZXJFcnJvcn08L3A+fVxyXG5cclxuICAgICAgICAgIDxMb2dpbkJ1dHRvbnNcclxuICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgb25Mb2dpbj17KCkgPT4gdGhpcy5jaGFuZ2VNb2RlKCdsb2dpbicpfVxyXG4gICAgICAgICAgICBvblJlZ2lzdGVyPXsoKSA9PiB0aGlzLmNoYW5nZU1vZGUoJ3JlZ2lzdGVyJyl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vTG9naW5CdXR0b25zLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9Mb2dpbkJ1dHRvbnMubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9Mb2dpbkJ1dHRvbnMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICd+L2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ2luQnV0dG9ucy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIG1vZGU6ICdsb2dpbicgfCAncmVnaXN0ZXInO1xyXG4gIG9uTG9naW46ICgpID0+IHZvaWQ7XHJcbiAgb25SZWdpc3RlcjogKCkgPT4gdm9pZDtcclxuICBsb2FkaW5nPzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkJ1dHRvbnMoe1xyXG4gIG1vZGUsIG9uTG9naW4sIG9uUmVnaXN0ZXIsIGxvYWRpbmcsXHJcbn06IFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2xvZ2luLWJ1dHRvbnMnXX0gJHttb2RlID09PSAncmVnaXN0ZXInID8gc3R5bGVzWydyZWdpc3Rlci1tb2RlJ10gOiAnJ30gdGV4dC1jZW50ZXJgfT5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHZhcmlhbnQ9XCJsaWdodFwiXHJcbiAgICAgICAgdHlwZT17bW9kZSA9PT0gJ3JlZ2lzdGVyJyA/ICdidXR0b24nIDogJ3N1Ym1pdCd9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHttb2RlID09PSAncmVnaXN0ZXInID8gJ2J0bi0tbGlnaHQnIDogJ2J0bi0tYmx1ZSd9ICR7KGxvYWRpbmcgJiYgbW9kZSA9PT0gJ2xvZ2luJykgPyAnYnRuLS1sb2FkaW5nJyA6ICcnfSBidG4gdy0xMDBgfVxyXG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmcgJiYgbW9kZSA9PT0gJ2xvZ2luJ31cclxuICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICBvbkNsaWNrPXtvbkxvZ2lufVxyXG4gICAgICA+XHJcbiAgICAgICAgSW50csSDIMOubiBjb250XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPiBzYXUgPC9wPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD1cImxpZ2h0XCJcclxuICAgICAgICB0eXBlPXttb2RlID09PSAncmVnaXN0ZXInID8gJ3N1Ym1pdCcgOiAnYnV0dG9uJ31cclxuICAgICAgICBjbGFzc05hbWU9e2Ake21vZGUgPT09ICdyZWdpc3RlcicgPyAnYnRuLS1ibHVlJyA6ICdidG4tLWxpZ2h0J30gJHsobG9hZGluZyAmJiBtb2RlID09PSAncmVnaXN0ZXInKSA/ICdidG4tLWxvYWRpbmcnIDogJyd9IGJ0biB3LTEwMGB9XHJcbiAgICAgICAgbG9hZGluZz17bG9hZGluZyAmJiBtb2RlID09PSAncmVnaXN0ZXInfVxyXG4gICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uUmVnaXN0ZXJ9XHJcbiAgICAgID5cclxuICAgICAgICDDjm5yZWdpc3RyZWF6xIMtdGVcclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBTdWJtaXNzaW9uIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5jb25zdCBBREQgPSAnZXhlcmNpc2Utc3VibWlzc2lvbnMvQUREJztcclxuY29uc3QgUkVNT1ZFID0gJ2V4ZXJjaXNlLXN1Ym1pc3Npb25zL1JFTU9WRSc7XHJcbmNvbnN0IFVQREFURSA9ICdleGVyY2lzZS1zdWJtaXNzaW9ucy9VUERBVEUnO1xyXG5jb25zdCBMT0FEID0gJ2V4ZXJjaXNlLXN1Ym1pc3Npb25zL0xPQUQnO1xyXG5jb25zdCBTRUFSQ0ggPSAnZXhlcmNpc2Utc3VibWlzc2lvbnMvU0VBUkNIJztcclxuXHJcbmV4cG9ydCBjb25zdCBFWEVSQ0lTRV9TVUJNSVNTSU9OUyA9IHtcclxuICBBREQsXHJcbiAgUkVNT1ZFLFxyXG4gIFVQREFURSxcclxuICBMT0FELFxyXG4gIFNFQVJDSCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRTdWJtaXNzaW9uID0gKHN1Ym1pc3Npb246IFN1Ym1pc3Npb24gfCBTdWJtaXNzaW9uW10sIGluZGV4ID0gMCkgPT4gKHtcclxuICB0eXBlOiBBREQsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgc3VibWlzc2lvbixcclxuICAgIGluZGV4LFxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlU3VibWlzc2lvbiA9IChpZDogc3RyaW5nIHwgc3RyaW5nW10pID0+ICh7XHJcbiAgdHlwZTogUkVNT1ZFLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGlkLFxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgdXBkYXRlU3VibWlzc2lvbiA9IChpZDogc3RyaW5nLCBuZXdTdWJtaXNzaW9uOiBTdWJtaXNzaW9uKSA9PiAoe1xyXG4gIHR5cGU6IFVQREFURSxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBpZCxcclxuICAgIG5ld1N1Ym1pc3Npb24sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZFN1Ym1pc3Npb25zID0gKG5ld1N1Ym1pc3Npb25zOiBTdWJtaXNzaW9uW10pID0+ICh7XHJcbiAgdHlwZTogTE9BRCxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBuZXdTdWJtaXNzaW9ucyxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWFyY2hTdWJtaXNzaW9ucyA9IChxdWVyeTogc3RyaW5nLCBuZXdTdWJtaXNzaW9uczogU3VibWlzc2lvbltdKSA9PiAoe1xyXG4gIHR5cGU6IFNFQVJDSCxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBxdWVyeSxcclxuICAgIG5ld1N1Ym1pc3Npb25zLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBTdWJtaXNzaW9uU3RhdGUgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgRVhFUkNJU0VfU1VCTUlTU0lPTlMgfSBmcm9tICcuL2V4ZXJjaXNlLXN1Ym1pc3Npb25zLmFjdGlvbnMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdWJtaXNzaW9uU3RhdGUgPSB7XHJcbiAgc3VibWlzc2lvbnM6IHVuZGVmaW5lZCxcclxuICBzZWFyY2g6ICcnLFxyXG4gIHBhZ2U6IDAsXHJcbiAgZW5kOiBmYWxzZSxcclxufTtcclxuZXhwb3J0IGNvbnN0IHN1Ym1pc3Npb25SZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IHsgdHlwZTogc3RyaW5nOyBwYXlsb2FkOiBhbnk7fSlcclxuOiBTdWJtaXNzaW9uU3RhdGUgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgRVhFUkNJU0VfU1VCTUlTU0lPTlMuQUREOiB7XHJcbiAgICAgIGxldCB7IGluZGV4LCBzdWJtaXNzaW9uIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHN1Ym1pc3Npb24pKSB7XHJcbiAgICAgICAgc3VibWlzc2lvbiA9IFtzdWJtaXNzaW9uXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHN1Ym1pc3Npb25zOiBbLi4uc3RhdGUuc3VibWlzc2lvbnMuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAgICAgLi4uc3VibWlzc2lvbixcclxuICAgICAgICAgIC4uLnN0YXRlLnN1Ym1pc3Npb25zLnNsaWNlKGluZGV4KV0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIEVYRVJDSVNFX1NVQk1JU1NJT05TLlJFTU9WRToge1xyXG4gICAgICBsZXQgeyBpZCB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShpZCkpIHtcclxuICAgICAgICBpZCA9IFtpZF07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzdWJtaXNzaW9uczogc3RhdGUuc3VibWlzc2lvbnMuZmlsdGVyKChzdWJtaXNzaW9uKSA9PiAhaWQuaW5jbHVkZXMoc3VibWlzc2lvbi5faWQpKSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgRVhFUkNJU0VfU1VCTUlTU0lPTlMuVVBEQVRFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHN1Ym1pc3Npb25zOiBzdGF0ZS5zdWJtaXNzaW9ucy5tYXAoKHN1Ym1pc3Npb24pID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgaWQsIG5ld1N1Ym1pc3Npb24gfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgaWYgKHN1Ym1pc3Npb24uX2lkID09PSBpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLnN1Ym1pc3Npb24sXHJcbiAgICAgICAgICAgICAgLi4ubmV3U3VibWlzc2lvbixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBzdWJtaXNzaW9uO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBFWEVSQ0lTRV9TVUJNSVNTSU9OUy5MT0FEOiB7XHJcbiAgICAgIGNvbnN0IHsgbmV3U3VibWlzc2lvbnMgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzdWJtaXNzaW9uczogc3RhdGUuc3VibWlzc2lvbnNcclxuICAgICAgICAgID8gWy4uLnN0YXRlLnN1Ym1pc3Npb25zLCAuLi5uZXdTdWJtaXNzaW9uc11cclxuICAgICAgICAgIDogbmV3U3VibWlzc2lvbnMsXHJcbiAgICAgICAgcGFnZTogc3RhdGUucGFnZSArIDEsXHJcbiAgICAgICAgZW5kOiBuZXdTdWJtaXNzaW9ucy5sZW5ndGggPT09IDAsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIEVYRVJDSVNFX1NVQk1JU1NJT05TLlNFQVJDSDoge1xyXG4gICAgICBjb25zdCB7IHF1ZXJ5LCBuZXdTdWJtaXNzaW9ucyB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHN1Ym1pc3Npb25zOiBuZXdTdWJtaXNzaW9ucyxcclxuICAgICAgICBzZWFyY2g6IHF1ZXJ5LFxyXG4gICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgZW5kOiBuZXdTdWJtaXNzaW9ucy5sZW5ndGggPT09IDAsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VibWlzc2lvblJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgc3VibWlzc2lvblJlZHVjZXIgYXMgc3VibWlzc2lvbnMgfSBmcm9tICcuL2V4ZXJjaXNlLXN1Ym1pc3Npb25zL2V4ZXJjaXNlLXN1Ym1pc3Npb25zLnJlZHVjZXInO1xyXG5pbXBvcnQgeyBVU0VSX0xPR09VVCB9IGZyb20gJy4vdXNlci91c2VyLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VyUmVkdWNlciBhcyB1c2VyIH0gZnJvbSAnLi91c2VyL3VzZXIucmVkdWNlcic7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgaWYgKGFjdGlvbi50eXBlID09PSBVU0VSX0xPR09VVCkge1xyXG4gICAgc3RhdGUgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXBwUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxufTtcclxuXHJcbmNvbnN0IGFwcFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHN1Ym1pc3Npb25zLFxyXG4gIHVzZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+XHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcm9vdC5yZWR1Y2VyJztcclxuXHJcbmxldCBzdG9yZTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlV2l0aFByZWxvYWRlZERhdGEocHJlbG9hZGVkRGF0YSkge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhc3RvcmUpIHtcclxuICAgIHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIHByZWxvYWRlZERhdGEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdG9yZSgpIHtcclxuICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVN0b3JlV2l0aFByZWxvYWRlZERhdGEsIGdldFN0b3JlIH07XHJcbiIsImltcG9ydCB7IFVzZXJTdGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgeyBVU0VSX0lORk8sIFVTRVJfTk9USUZJQ0FUSU9OUyB9IGZyb20gJy4vdXNlci5hY3Rpb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0VXNlclN0YXRlID0ge1xyXG4gIGluZm86IHVuZGVmaW5lZCxcclxuICBub3RpZmljYXRpb25zOiB7XHJcbiAgICBsaXN0OiB1bmRlZmluZWQsIHVucmVhZDogMCwgdW5yZWFkQ291bnQ6IDAsIHBhZ2U6IDAsIGVuZDogZmFsc2UsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlclN0YXRlID0gZGVmYXVsdFVzZXJTdGF0ZTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiB7IHR5cGU6IHN0cmluZzsgcGF5bG9hZDogYW55OyB9KVxyXG4gIDogVXNlclN0YXRlID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFVTRVJfSU5GTy5MT0FEOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaW5mbzogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBVU0VSX05PVElGSUNBVElPTlMuQUREOiB7XHJcbiAgICAgIGxldCB7IGluZGV4LCBub3RpZmljYXRpb25zIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShub3RpZmljYXRpb25zKSkge1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbnMgPSBbbm90aWZpY2F0aW9uc107XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBub3RpZmljYXRpb25zOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5ub3RpZmljYXRpb25zLFxyXG4gICAgICAgICAgbGlzdDogWy4uLnN0YXRlLm5vdGlmaWNhdGlvbnMubGlzdC5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgICAgIC4uLm5vdGlmaWNhdGlvbnMsXHJcbiAgICAgICAgICAgIC4uLnN0YXRlLm5vdGlmaWNhdGlvbnMubGlzdC5zbGljZShpbmRleCldLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBVU0VSX05PVElGSUNBVElPTlMuTE9BRDoge1xyXG4gICAgICBjb25zdCB7IG5ld05vdGlmaWNhdGlvbnMgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBub3RpZmljYXRpb25zOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5ub3RpZmljYXRpb25zLFxyXG4gICAgICAgICAgbGlzdDogc3RhdGUubm90aWZpY2F0aW9ucy5saXN0XHJcbiAgICAgICAgICAgID8gWy4uLnN0YXRlLm5vdGlmaWNhdGlvbnMubGlzdCwgLi4ubmV3Tm90aWZpY2F0aW9uc11cclxuICAgICAgICAgICAgOiBuZXdOb3RpZmljYXRpb25zLFxyXG4gICAgICAgICAgcGFnZTogc3RhdGUubm90aWZpY2F0aW9ucy5wYWdlICsgMSxcclxuICAgICAgICAgIGVuZDogbmV3Tm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgVVNFUl9OT1RJRklDQVRJT05TLk1BUktfQVNfUkVBRDoge1xyXG4gICAgICBsZXQgeyBpZCB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbnM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLm5vdGlmaWNhdGlvbnMsXHJcbiAgICAgICAgICBsaXN0OiBbLi4uc3RhdGUubm90aWZpY2F0aW9ucy5saXN0Lm1hcCgobikgPT4ge1xyXG4gICAgICAgICAgICBpZiAobi5faWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLm4sXHJcbiAgICAgICAgICAgICAgICBpc1VucmVhZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbjtcclxuICAgICAgICAgIH0pXSxcclxuICAgICAgICAgIHVucmVhZENvdW50OiBzdGF0ZS5ub3RpZmljYXRpb25zLnVucmVhZENvdW50IC0gMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBVU0VSX05PVElGSUNBVElPTlMuTUFSS19BU19VTlJFQUQ6IHtcclxuICAgICAgbGV0IHsgaWQgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBub3RpZmljYXRpb25zOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5ub3RpZmljYXRpb25zLFxyXG4gICAgICAgICAgbGlzdDogWy4uLnN0YXRlLm5vdGlmaWNhdGlvbnMubGlzdC5tYXAoKG4pID0+IHtcclxuICAgICAgICAgICAgaWYgKG4uX2lkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5uLFxyXG4gICAgICAgICAgICAgICAgaXNVbnJlYWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbjtcclxuICAgICAgICAgIH0pXSxcclxuICAgICAgICAgIHVucmVhZENvdW50OiBzdGF0ZS5ub3RpZmljYXRpb25zLnVucmVhZENvdW50ICsgMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBVU0VSX05PVElGSUNBVElPTlMuTUFSS19BTExfQVNfUkVBRDoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbnM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLm5vdGlmaWNhdGlvbnMsXHJcbiAgICAgICAgICBsaXN0OiBzdGF0ZS5ub3RpZmljYXRpb25zLmxpc3QubWFwKChuKSA9PiAoeyAuLi5uLCBpc1VucmVhZDogZmFsc2UgfSkpLFxyXG4gICAgICAgICAgdW5yZWFkQ291bnQ6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWR1Y2VyO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsInZhciB0cmltbWVkRW5kSW5kZXggPSByZXF1aXJlKCcuL190cmltbWVkRW5kSW5kZXgnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbVN0YXJ0ID0gL15cXHMrLztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50cmltYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSB0cmltbWVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRyaW0oc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICA/IHN0cmluZy5zbGljZSgwLCB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSArIDEpLnJlcGxhY2UocmVUcmltU3RhcnQsICcnKVxuICAgIDogc3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUcmltO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCIvKiogVXNlZCB0byBtYXRjaCBhIHNpbmdsZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbnZhciByZVdoaXRlc3BhY2UgPSAvXFxzLztcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltRW5kYCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlXG4gKiBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5mdW5jdGlvbiB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSB7XG4gIHZhciBpbmRleCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgcmVXaGl0ZXNwYWNlLnRlc3Qoc3RyaW5nLmNoYXJBdChpbmRleCkpKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbW1lZEVuZEluZGV4O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICB0aW1lV2FpdGluZyA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmdcbiAgICAgID8gbmF0aXZlTWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSlcbiAgICAgIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3c7XG4iLCJ2YXIgYmFzZVRyaW0gPSByZXF1aXJlKCcuL19iYXNlVHJpbScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gYmFzZVRyaW0odmFsdWUpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b051bWJlcjtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKiBCQUNLR1JPVU5EUyAqKi9cXG4uQ2hlY2tib3hfY2hlY2tib3gtd3JhcHBlcl9fMnpsZnMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uQ2hlY2tib3hfY2hlY2tib3hfXzJYTjdVIHtcXG4gIGNvbG9yOiAjNThhZjU4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uQ2hlY2tib3hfY2hlY2tib3hfXzJYTjdVIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuLkNoZWNrYm94X2NoZWNrYm94X18yWE43VSBpbnB1dDpjaGVja2VkICsgKiB7XFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcXG59XFxuLkNoZWNrYm94X2NoZWNrYm94X18yWE43VSBpbnB1dDpjaGVja2VkICsgKjo6YWZ0ZXIge1xcbiAgaGVpZ2h0OiAwLjVlbTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBDaGVja2JveF9kb3RoYWJvdHRvbWNoZWNrX19XdFBaRCAwLjJzIGVhc2UgMHMgZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogQ2hlY2tib3hfZG90aGFib3R0b21jaGVja19fV3RQWkQgMC4ycyBlYXNlIDBzIGZvcndhcmRzO1xcbn1cXG4uQ2hlY2tib3hfY2hlY2tib3hfXzJYTjdVIGlucHV0OmNoZWNrZWQgKyAqOjpiZWZvcmUge1xcbiAgaGVpZ2h0OiAxLjJlbTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMnB4ICNmZmY7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjZmZmO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IENoZWNrYm94X2RvdGhhdG9wY2hlY2tfXzJsS09mIDAuNHMgZWFzZSAwcyBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBDaGVja2JveF9kb3RoYXRvcGNoZWNrX18ybEtPZiAwLjRzIGVhc2UgMHMgZm9yd2FyZHM7XFxufVxcblxcbi5DaGVja2JveF9jb250cm9sLWluZGljYXRvcl9fMkdLSy0ge1xcbiAgd2lkdGg6IDFlbTtcXG4gIGhlaWdodDogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2JjYzJjNjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UgMC4ycztcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlIDAuMnM7XFxufVxcbi5DaGVja2JveF9jb250cm9sLWluZGljYXRvcl9fMkdLSy06OmJlZm9yZSwgLkNoZWNrYm94X2NvbnRyb2wtaW5kaWNhdG9yX18yR0tLLTo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDAuMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UgMC41O1xcbn1cXG4uQ2hlY2tib3hfY29udHJvbC1pbmRpY2F0b3JfXzJHS0stOjpiZWZvcmUge1xcbiAgdG9wOiAwLjdlbTtcXG4gIGxlZnQ6IDAuNGVtO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XFxufVxcbi5DaGVja2JveF9jb250cm9sLWluZGljYXRvcl9fMkdLSy06OmFmdGVyIHtcXG4gIHRvcDogMC4zN2VtO1xcbiAgbGVmdDogMC4wNWVtO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgQ2hlY2tib3hfZG90aGF0b3BjaGVja19fMmxLT2Yge1xcbiAgMCUge1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgaGVpZ2h0OiAxLjJlbTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBDaGVja2JveF9kb3RoYXRvcGNoZWNrX18ybEtPZiB7XFxuICAwJSB7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBoZWlnaHQ6IDEuMmVtO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgQ2hlY2tib3hfZG90aGFib3R0b21jaGVja19fV3RQWkQge1xcbiAgMCUge1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgaGVpZ2h0OiAxZW0vMjtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBDaGVja2JveF9kb3RoYWJvdHRvbWNoZWNrX19XdFBaRCB7XFxuICAwJSB7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBoZWlnaHQ6IDFlbS8yO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL0NoZWNrYm94Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQTZCQSxrQkFBQTtBQzNCQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUFGO0FBRUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUFKO0FBRUk7RUFDRSwwQkFBQTtBQUFOO0FBRU07RUFDRSxhQUFBO0VBQ0EseUVBQUE7VUFBQSxpRUFBQTtBQUFSO0FBR007RUFDRSxhQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLHNFQUFBO1VBQUEsOERBQUE7QUFEUjs7QUFPQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0VBQUEsa0NBQUE7QUFKRjtBQU1FO0VBRUUsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtBQUxKO0FBUUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUFOSjtBQVNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FBUEo7O0FBV0E7RUFDRTtJQUNFLFNBQUE7RUFSRjtFQVdBO0lBQ0UsU0FBQTtFQVRGO0VBWUE7SUFDRSxhQUFBO0VBVkY7QUFDRjs7QUFEQTtFQUNFO0lBQ0UsU0FBQTtFQVJGO0VBV0E7SUFDRSxTQUFBO0VBVEY7RUFZQTtJQUNFLGFBQUE7RUFWRjtBQUNGO0FBYUE7RUFDRTtJQUNFLFNBQUE7RUFYRjtFQWNBO0lBQ0UsYUFBQTtFQVpGO0FBQ0Y7QUFLQTtFQUNFO0lBQ0UsU0FBQTtFQVhGO0VBY0E7SUFDRSxhQUFBO0VBWkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkY29sb3JzOiAoXFxyXFxuICB3aGl0ZTogI2ZmZixcXHJcXG4gIGRhcmtlci13aGl0ZTogI2Y4ZjhmOCxcXHJcXG4gIGJsYWNrOiAjMWIxYjE1LFxcclxcbiAgZ3JlZW46ICM1OGFmNTgsXFxyXFxuICBncmV5OiAjNzc4MzhiLFxcclxcbiAgc2lsdmVyOiAjYmNjMmM2LFxcclxcbiAgeWVsbG93OiAjZjdkZjFlLFxcclxcbiAgcmVkOiAjZWI0ZDRiLFxcclxcbiAgYmx1ZTogIzI5ODBiOSxcXHJcXG4gIHB1cnBsZTogIzY2MzM5OSxcXHJcXG4gIHR3aXR0ZXItYmx1ZTogIzFiOTVlMCxcXHJcXG4gIHR3aXR0ZXItYmx1ZS1ob3ZlcjogIzBjN2FiZixcXHJcXG4gIGZhY2Vib29rLWJsdWU6ICMxODc3ZjIsXFxyXFxuICBsaW5rZWRpbi1ibHVlOiAjNTJhYWQzLFxcclxcbiAgd2hhdHNhcHAtZ3JlZW46ICMwMWU2NzUsXFxyXFxuKTtcXHJcXG5cXHJcXG4kd2lkdGg6IDkwJTtcXHJcXG4kbWF4LXdpZHRoOiAxMDAwcHg7XFxyXFxuJGN1YmljOiBjdWJpYy1iZXppZXIoMC4xOCwgMC44OSwgMC4zMiwgMS4yOCk7XFxyXFxuJGFzaWRlLW1lbnUtd2lkdGg6IDE4ZW07XFxyXFxuJGxlc3Nvbi1tZW51LXdpZHRoOiAxOGVtO1xcclxcbiRhcHAtaGVhZGVyLWhlaWdodDogMy4zZW07XFxyXFxuJHdpZHRoLWdyaWQ6IDQuNXZ3O1xcclxcbkBmdW5jdGlvbiBjb2xvcigkeCkge1xcclxcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICR4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIEJBQ0tHUk9VTkRTICoqL1xcclxcbiVncmFkaWVudEJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxNTAlIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuJWJsYWNrR3JhZGllbnRCYWNrZ3JvdW5kIHtcXHJcXG4gIGNvbG9yOiBjb2xvcih3aGl0ZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIHJpZ2h0LFxcclxcbiAgICBjb2xvcihibGFjaykgMCUsXFxyXFxuICAgIGxpZ2h0ZW4oY29sb3IoYmxhY2spLCAxMCUpIDUxJSxcXHJcXG4gICAgY29sb3IoYmxhY2spIDEwMCVcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbiVyZWRHcmFkaWVudEJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byByaWdodCxcXHJcXG4gICAgI2MwMzkyYiAwJSxcXHJcXG4gICAgI2ViNGQ0YiA1MSUsXFxyXFxuICAgICNjMDM5MmIgMTAwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuJWdyZWVuR3JhZGllbnRCYWNrZ3JvdW5kIHtcXHJcXG4gIGNvbG9yOiBjb2xvcih3aGl0ZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIHJpZ2h0LFxcclxcbiAgICAjMjdhZTYwIDAlLFxcclxcbiAgICAjMmVjYzcxIDUxJSxcXHJcXG4gICAgIzI3YWU2MCAxMDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4lYmx1ZUdyYWRpZW50QmFja2dyb3VuZCB7XFxyXFxuICBjb2xvcjogY29sb3Iod2hpdGUpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byByaWdodCxcXHJcXG4gICAgIzI5ODBiOSAwJSxcXHJcXG4gICAgIzNhYTNlOSA1MSUsXFxyXFxuICAgICMyOTgwYjkgMTAwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuJXllbGxvd0dyYWRpZW50QmFja2dyb3VuZCB7XFxyXFxuICBjb2xvcjogY29sb3IoYmxhY2spO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byByaWdodCxcXHJcXG4gICAgI2YzOWMxMiAwJSxcXHJcXG4gICAgI2YxYzQwZiA1MSUsXFxyXFxuICAgICNmMzljMTIgMTAwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuJWdyZXlHcmFkaWVudEJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byByaWdodCxcXHJcXG4gICAgY29sb3IoZ3JleSkgMCUsXFxyXFxuICAgIGNvbG9yKHNpbHZlcikgNTElLFxcclxcbiAgICBjb2xvcihncmV5KSAxMDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4lcHVycGxlR3JhZGllbnRCYWNrZ3JvdW5kIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gcmlnaHQsXFxyXFxuICAgICM2NjMzOTkgMCUsXFxyXFxuICAgICM4NTQ3YzMgNTElLFxcclxcbiAgICAjNjYzMzk5IDEwMCVcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbiVjb250YWluZXJDb25maWcge1xcclxcbiAgd2lkdGg6ICR3aWR0aDtcXHJcXG4gIG1heC13aWR0aDogJG1heC13aWR0aDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gbGluZWFyR3JhZGllbnQoJGNvbG9yMSwgJGNvbG9yMikge1xcclxcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgLTQ1ZGVnLFxcclxcbiAgICAkY29sb3IxLFxcclxcbiAgICAkY29sb3IxIDVweCxcXHJcXG4gICAgJGNvbG9yMiAwLFxcclxcbiAgICAkY29sb3IyIDEwcHhcXHJcXG4gICk7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XFxyXFxuXFxyXFxuLmNoZWNrYm94LXdyYXBwZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgY29sb3I6IGNvbG9yKGdyZWVuKTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHJcXG4gIGlucHV0IHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuXFxyXFxuICAgICY6Y2hlY2tlZCArICoge1xcclxcbiAgICAgIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yO1xcclxcblxcclxcbiAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogMWVtICogMC41O1xcclxcbiAgICAgICAgYW5pbWF0aW9uOiBkb3RoYWJvdHRvbWNoZWNrIDAuMnMgZWFzZSAwcyBmb3J3YXJkcztcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIGhlaWdodDogMWVtICogMS4yO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGNvbG9yKHdoaXRlKTtcXHJcXG4gICAgICAgIGFuaW1hdGlvbjogZG90aGF0b3BjaGVjayAwLjRzIGVhc2UgMHMgZm9yd2FyZHM7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250cm9sLWluZGljYXRvciB7XFxyXFxuICB3aWR0aDogMWVtO1xcclxcbiAgaGVpZ2h0OiAxZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBjb2xvcihzaWx2ZXIpO1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UgMC4ycztcXHJcXG5cXHJcXG4gICY6OmJlZm9yZSxcXHJcXG4gICY6OmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIHdpZHRoOiAwLjJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGNvbnRlbnQ6ICcgJztcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDAuNTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6OmJlZm9yZSB7XFxyXFxuICAgIHRvcDogMC43ZW07XFxyXFxuICAgIGxlZnQ6IDAuNGVtO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6OmFmdGVyIHtcXHJcXG4gICAgdG9wOiAxZW0gKiAwLjM3O1xcclxcbiAgICBsZWZ0OiAxZW0gKiAwLjA1O1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGRvdGhhdG9wY2hlY2sge1xcclxcbiAgMCUge1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgaGVpZ2h0OiAxZW0gKiAxLjI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZG90aGFib3R0b21jaGVjayB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBoZWlnaHQ6IDFlbS8yO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjaGVja2JveC13cmFwcGVyXCI6IFwiQ2hlY2tib3hfY2hlY2tib3gtd3JhcHBlcl9fMnpsZnNcIixcblx0XCJjaGVja2JveFwiOiBcIkNoZWNrYm94X2NoZWNrYm94X18yWE43VVwiLFxuXHRcImRvdGhhYm90dG9tY2hlY2tcIjogXCJDaGVja2JveF9kb3RoYWJvdHRvbWNoZWNrX19XdFBaRFwiLFxuXHRcImRvdGhhdG9wY2hlY2tcIjogXCJDaGVja2JveF9kb3RoYXRvcGNoZWNrX18ybEtPZlwiLFxuXHRcImNvbnRyb2wtaW5kaWNhdG9yXCI6IFwiQ2hlY2tib3hfY29udHJvbC1pbmRpY2F0b3JfXzJHS0stXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqIEJBQ0tHUk9VTkRTICoqL1xcbi5Gb3JtX2Zvcm1fXzFvOHhmIGlucHV0W3R5cGU9dGV4dF0sXFxuLkZvcm1fZm9ybV9fMW84eGYgaW5wdXRbdHlwZT1wYXNzd29yZF0sXFxuLkZvcm1fZm9ybV9fMW84eGYgaW5wdXRbdHlwZT1lbWFpbF0sXFxuLkZvcm1fZm9ybV9fMW84eGYgaW5wdXRbdHlwZT10ZWxdLFxcbi5Gb3JtX2Zvcm1fXzFvOHhmIHRleHRhcmVhIHtcXG4gIG91dGxpbmU6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYmNjMmM2O1xcbiAgZm9udC1mYW1pbHk6IENvdXJpZXIgTmV3LCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vRm9ybS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUE2QkEsa0JBQUE7QUMxQkU7Ozs7O0VBS0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7QUFESlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkY29sb3JzOiAoXFxyXFxuICB3aGl0ZTogI2ZmZixcXHJcXG4gIGRhcmtlci13aGl0ZTogI2Y4ZjhmOCxcXHJcXG4gIGJsYWNrOiAjMWIxYjE1LFxcclxcbiAgZ3JlZW46ICM1OGFmNTgsXFxyXFxuICBncmV5OiAjNzc4MzhiLFxcclxcbiAgc2lsdmVyOiAjYmNjMmM2LFxcclxcbiAgeWVsbG93OiAjZjdkZjFlLFxcclxcbiAgcmVkOiAjZWI0ZDRiLFxcclxcbiAgYmx1ZTogIzI5ODBiOSxcXHJcXG4gIHB1cnBsZTogIzY2MzM5OSxcXHJcXG4gIHR3aXR0ZXItYmx1ZTogIzFiOTVlMCxcXHJcXG4gIHR3aXR0ZXItYmx1ZS1ob3ZlcjogIzBjN2FiZixcXHJcXG4gIGZhY2Vib29rLWJsdWU6ICMxODc3ZjIsXFxyXFxuICBsaW5rZWRpbi1ibHVlOiAjNTJhYWQzLFxcclxcbiAgd2hhdHNhcHAtZ3JlZW46ICMwMWU2NzUsXFxyXFxuKTtcXHJcXG5cXHJcXG4kd2lkdGg6IDkwJTtcXHJcXG4kbWF4LXdpZHRoOiAxMDAwcHg7XFxyXFxuJGN1YmljOiBjdWJpYy1iZXppZXIoMC4xOCwgMC44OSwgMC4zMiwgMS4yOCk7XFxyXFxuJGFzaWRlLW1lbnUtd2lkdGg6IDE4ZW07XFxyXFxuJGxlc3Nvbi1tZW51LXdpZHRoOiAxOGVtO1xcclxcbiRhcHAtaGVhZGVyLWhlaWdodDogMy4zZW07XFxyXFxuJHdpZHRoLWdyaWQ6IDQuNXZ3O1xcclxcbkBmdW5jdGlvbiBjb2xvcigkeCkge1xcclxcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICR4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIEJBQ0tHUk9VTkRTICoqL1xcclxcbiVncmFkaWVudEJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxNTAlIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuJWJsYWNrR3JhZGllbnRCYWNrZ3JvdW5kIHtcXHJcXG4gIGNvbG9yOiBjb2xvcih3aGl0ZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIHJpZ2h0LFxcclxcbiAgICBjb2xvcihibGFjaykgMCUsXFxyXFxuICAgIGxpZ2h0ZW4oY29sb3IoYmxhY2spLCAxMCUpIDUxJSxcXHJcXG4gICAgY29sb3IoYmxhY2spIDEwMCVcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbiVyZWRHcmFkaWVudEJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byByaWdodCxcXHJcXG4gICAgI2MwMzkyYiAwJSxcXHJcXG4gICAgI2ViNGQ0YiA1MSUsXFxyXFxuICAgICNjMDM5MmIgMTAwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuJWdyZWVuR3JhZGllbnRCYWNrZ3JvdW5kIHtcXHJcXG4gIGNvbG9yOiBjb2xvcih3aGl0ZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIHJpZ2h0LFxcclxcbiAgICAjMjdhZTYwIDAlLFxcclxcbiAgICAjMmVjYzcxIDUxJSxcXHJcXG4gICAgIzI3YWU2MCAxMDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4lYmx1ZUdyYWRpZW50QmFja2dyb3VuZCB7XFxyXFxuICBjb2xvcjogY29sb3Iod2hpdGUpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byByaWdodCxcXHJcXG4gICAgIzI5ODBiOSAwJSxcXHJcXG4gICAgIzNhYTNlOSA1MSUsXFxyXFxuICAgICMyOTgwYjkgMTAwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuJXllbGxvd0dyYWRpZW50QmFja2dyb3VuZCB7XFxyXFxuICBjb2xvcjogY29sb3IoYmxhY2spO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byByaWdodCxcXHJcXG4gICAgI2YzOWMxMiAwJSxcXHJcXG4gICAgI2YxYzQwZiA1MSUsXFxyXFxuICAgICNmMzljMTIgMTAwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuJWdyZXlHcmFkaWVudEJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byByaWdodCxcXHJcXG4gICAgY29sb3IoZ3JleSkgMCUsXFxyXFxuICAgIGNvbG9yKHNpbHZlcikgNTElLFxcclxcbiAgICBjb2xvcihncmV5KSAxMDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4lcHVycGxlR3JhZGllbnRCYWNrZ3JvdW5kIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gcmlnaHQsXFxyXFxuICAgICM2NjMzOTkgMCUsXFxyXFxuICAgICM4NTQ3YzMgNTElLFxcclxcbiAgICAjNjYzMzk5IDEwMCVcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbiVjb250YWluZXJDb25maWcge1xcclxcbiAgd2lkdGg6ICR3aWR0aDtcXHJcXG4gIG1heC13aWR0aDogJG1heC13aWR0aDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gbGluZWFyR3JhZGllbnQoJGNvbG9yMSwgJGNvbG9yMikge1xcclxcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgLTQ1ZGVnLFxcclxcbiAgICAkY29sb3IxLFxcclxcbiAgICAkY29sb3IxIDVweCxcXHJcXG4gICAgJGNvbG9yMiAwLFxcclxcbiAgICAkY29sb3IyIDEwcHhcXHJcXG4gICk7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgaW5wdXRbdHlwZT0ndGV4dCddLFxcclxcbiAgaW5wdXRbdHlwZT0ncGFzc3dvcmQnXSxcXHJcXG4gIGlucHV0W3R5cGU9J2VtYWlsJ10sXFxyXFxuICBpbnB1dFt0eXBlPSd0ZWwnXSxcXHJcXG4gIHRleHRhcmVhIHtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgICBmb250LXNpemU6IDAuODVlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjb2xvcihzaWx2ZXIpO1xcclxcbiAgICBmb250LWZhbWlseTogQ291cmllciBOZXcsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZm9ybVwiOiBcIkZvcm1fZm9ybV9fMW84eGZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuRm9ybUdyb3VwX2Zvcm0tZ3JvdXBfXzNTUlMxIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uRm9ybUdyb3VwX2Zvcm0tZ3JvdXBfXzNTUlMxIC5sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5Gb3JtR3JvdXBfZm9ybS1ncm91cF9fM1NSUzEgaW5wdXRbdHlwZT10ZXh0XSxcXG4uRm9ybUdyb3VwX2Zvcm0tZ3JvdXBfXzNTUlMxIGlucHV0W3R5cGU9cGFzc3dvcmRdLFxcbi5Gb3JtR3JvdXBfZm9ybS1ncm91cF9fM1NSUzEgaW5wdXRbdHlwZT1lbWFpbF0sXFxuLkZvcm1Hcm91cF9mb3JtLWdyb3VwX18zU1JTMSB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vRm9ybUdyb3VwLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUU7Ozs7RUFJRSxXQUFBO0VBQ0EsY0FBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb3JtLWdyb3VwIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcblxcclxcbiAgOmdsb2JhbCAubGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcblxcclxcbiAgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcclxcbiAgaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSxcXHJcXG4gIGlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0sXFxyXFxuICB0ZXh0YXJlYSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZm9ybS1ncm91cFwiOiBcIkZvcm1Hcm91cF9mb3JtLWdyb3VwX18zU1JTMVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5JbnB1dFdpdGhJY29uX2lucHV0LXdpdGgtaWNvbl9fMXdnMVggaW5wdXQge1xcbiAgcGFkZGluZy1yaWdodDogMi41ZW0gIWltcG9ydGFudDtcXG59XFxuLklucHV0V2l0aEljb25faW5wdXQtd2l0aC1pY29uX18xd2cxWCA+IHNwYW4ge1xcbiAgdG9wOiAwLjI1ZW07XFxuICByaWdodDogMC41ZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9JbnB1dFdpdGhJY29uLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNFO0VBQ0UsK0JBQUE7QUFBSjtBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFESlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaW5wdXQtd2l0aC1pY29uIHtcXHJcXG4gIGlucHV0IHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMi41ZW0gIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgPiBzcGFuIHtcXHJcXG4gICAgdG9wOiAwLjI1ZW07XFxyXFxuICAgIHJpZ2h0OiAwLjVlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaW5wdXQtd2l0aC1pY29uXCI6IFwiSW5wdXRXaXRoSWNvbl9pbnB1dC13aXRoLWljb25fXzF3ZzFYXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlBhc3N3b3JkUmV2ZWFsX3Bhc3N3b3JkLXJldmVhbF9fUERDYmIgaW5wdXQge1xcbiAgcGFkZGluZy1yaWdodDogMi41ZW0gIWltcG9ydGFudDtcXG59XFxuLlBhc3N3b3JkUmV2ZWFsX3Bhc3N3b3JkLXJldmVhbF9fUERDYmIgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYm9yZGVyOiAwO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDMycHg7XFxuICB0b3A6IDAuMjVlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICByaWdodDogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9QYXNzd29yZFJldmVhbC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDRTtFQUNFLCtCQUFBO0FBQUo7QUFHRTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBREpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBhc3N3b3JkLXJldmVhbCB7XFxyXFxuICBpbnB1dCB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIuNWVtICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBoZWlnaHQ6IDMycHg7XFxyXFxuICAgIHdpZHRoOiAzMnB4O1xcclxcbiAgICB0b3A6IDAuMjVlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicGFzc3dvcmQtcmV2ZWFsXCI6IFwiUGFzc3dvcmRSZXZlYWxfcGFzc3dvcmQtcmV2ZWFsX19QRENiYlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKiBCQUNLR1JPVU5EUyAqKi9cXG4uTG9naW5fbG9naW4tZm9ybV9fY1hRUlQge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxLjI4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLkxvZ2luX3NlcnZlci1lcnJvcl9fOEg5NFcge1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vTG9naW4ubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBNkJBLGtCQUFBO0FDM0JBO0VBQ0Usa0VBQUE7RUFBQSwwREFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGNvbG9yczogKFxcclxcbiAgd2hpdGU6ICNmZmYsXFxyXFxuICBkYXJrZXItd2hpdGU6ICNmOGY4ZjgsXFxyXFxuICBibGFjazogIzFiMWIxNSxcXHJcXG4gIGdyZWVuOiAjNThhZjU4LFxcclxcbiAgZ3JleTogIzc3ODM4YixcXHJcXG4gIHNpbHZlcjogI2JjYzJjNixcXHJcXG4gIHllbGxvdzogI2Y3ZGYxZSxcXHJcXG4gIHJlZDogI2ViNGQ0YixcXHJcXG4gIGJsdWU6ICMyOTgwYjksXFxyXFxuICBwdXJwbGU6ICM2NjMzOTksXFxyXFxuICB0d2l0dGVyLWJsdWU6ICMxYjk1ZTAsXFxyXFxuICB0d2l0dGVyLWJsdWUtaG92ZXI6ICMwYzdhYmYsXFxyXFxuICBmYWNlYm9vay1ibHVlOiAjMTg3N2YyLFxcclxcbiAgbGlua2VkaW4tYmx1ZTogIzUyYWFkMyxcXHJcXG4gIHdoYXRzYXBwLWdyZWVuOiAjMDFlNjc1LFxcclxcbik7XFxyXFxuXFxyXFxuJHdpZHRoOiA5MCU7XFxyXFxuJG1heC13aWR0aDogMTAwMHB4O1xcclxcbiRjdWJpYzogY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xcclxcbiRhc2lkZS1tZW51LXdpZHRoOiAxOGVtO1xcclxcbiRsZXNzb24tbWVudS13aWR0aDogMThlbTtcXHJcXG4kYXBwLWhlYWRlci1oZWlnaHQ6IDMuM2VtO1xcclxcbiR3aWR0aC1ncmlkOiA0LjV2dztcXHJcXG5AZnVuY3Rpb24gY29sb3IoJHgpIHtcXHJcXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkeCk7XFxyXFxufVxcclxcblxcclxcbi8qKiBCQUNLR1JPVU5EUyAqKi9cXHJcXG4lZ3JhZGllbnRCYWNrZ3JvdW5kIHtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTUwJSBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiVibGFja0dyYWRpZW50QmFja2dyb3VuZCB7XFxyXFxuICBjb2xvcjogY29sb3Iod2hpdGUpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byByaWdodCxcXHJcXG4gICAgY29sb3IoYmxhY2spIDAlLFxcclxcbiAgICBsaWdodGVuKGNvbG9yKGJsYWNrKSwgMTAlKSA1MSUsXFxyXFxuICAgIGNvbG9yKGJsYWNrKSAxMDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4lcmVkR3JhZGllbnRCYWNrZ3JvdW5kIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gcmlnaHQsXFxyXFxuICAgICNjMDM5MmIgMCUsXFxyXFxuICAgICNlYjRkNGIgNTElLFxcclxcbiAgICAjYzAzOTJiIDEwMCVcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbiVncmVlbkdyYWRpZW50QmFja2dyb3VuZCB7XFxyXFxuICBjb2xvcjogY29sb3Iod2hpdGUpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byByaWdodCxcXHJcXG4gICAgIzI3YWU2MCAwJSxcXHJcXG4gICAgIzJlY2M3MSA1MSUsXFxyXFxuICAgICMyN2FlNjAgMTAwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuJWJsdWVHcmFkaWVudEJhY2tncm91bmQge1xcclxcbiAgY29sb3I6IGNvbG9yKHdoaXRlKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gcmlnaHQsXFxyXFxuICAgICMyOTgwYjkgMCUsXFxyXFxuICAgICMzYWEzZTkgNTElLFxcclxcbiAgICAjMjk4MGI5IDEwMCVcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbiV5ZWxsb3dHcmFkaWVudEJhY2tncm91bmQge1xcclxcbiAgY29sb3I6IGNvbG9yKGJsYWNrKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gcmlnaHQsXFxyXFxuICAgICNmMzljMTIgMCUsXFxyXFxuICAgICNmMWM0MGYgNTElLFxcclxcbiAgICAjZjM5YzEyIDEwMCVcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbiVncmV5R3JhZGllbnRCYWNrZ3JvdW5kIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gcmlnaHQsXFxyXFxuICAgIGNvbG9yKGdyZXkpIDAlLFxcclxcbiAgICBjb2xvcihzaWx2ZXIpIDUxJSxcXHJcXG4gICAgY29sb3IoZ3JleSkgMTAwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuJXB1cnBsZUdyYWRpZW50QmFja2dyb3VuZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIHJpZ2h0LFxcclxcbiAgICAjNjYzMzk5IDAlLFxcclxcbiAgICAjODU0N2MzIDUxJSxcXHJcXG4gICAgIzY2MzM5OSAxMDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4lY29udGFpbmVyQ29uZmlnIHtcXHJcXG4gIHdpZHRoOiAkd2lkdGg7XFxyXFxuICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGxpbmVhckdyYWRpZW50KCRjb2xvcjEsICRjb2xvcjIpIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIC00NWRlZyxcXHJcXG4gICAgJGNvbG9yMSxcXHJcXG4gICAgJGNvbG9yMSA1cHgsXFxyXFxuICAgICRjb2xvcjIgMCxcXHJcXG4gICAgJGNvbG9yMiAxMHB4XFxyXFxuICApO1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xcclxcblxcclxcbi5sb2dpbi1mb3JtIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyAkY3ViaWM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5zZXJ2ZXItZXJyb3Ige1xcclxcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImxvZ2luLWZvcm1cIjogXCJMb2dpbl9sb2dpbi1mb3JtX19jWFFSVFwiLFxuXHRcInNlcnZlci1lcnJvclwiOiBcIkxvZ2luX3NlcnZlci1lcnJvcl9fOEg5NFdcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiogQkFDS0dST1VORFMgKiovXFxuLkxvZ2luQnV0dG9uc19sb2dpbi1idXR0b25zX18yRUd3cyBidXR0b24ge1xcbiAgcGFkZGluZzogMC4zNWVtO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cyBjdWJpYy1iZXppZXIoMC4xOCwgMC44OSwgMC4zMiwgMS4yOCk7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cyBjdWJpYy1iZXppZXIoMC4xOCwgMC44OSwgMC4zMiwgMS4yOCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxLjI4KSwgLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xcbn1cXG4uTG9naW5CdXR0b25zX2xvZ2luLWJ1dHRvbnNfXzJFR3dzIHAge1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG59XFxuLkxvZ2luQnV0dG9uc19sb2dpbi1idXR0b25zX18yRUd3cyBwOjpiZWZvcmUsXFxuLkxvZ2luQnV0dG9uc19sb2dpbi1idXR0b25zX18yRUd3cyBwOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRvcDogNTAlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYmNjMmM2O1xcbn1cXG4uTG9naW5CdXR0b25zX2xvZ2luLWJ1dHRvbnNfXzJFR3dzIHA6OmJlZm9yZSB7XFxuICBsZWZ0OiAwO1xcbn1cXG4uTG9naW5CdXR0b25zX2xvZ2luLWJ1dHRvbnNfXzJFR3dzIHA6OmFmdGVyIHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4uTG9naW5CdXR0b25zX3JlZ2lzdGVyLW1vZGVfXzNwN1JJIGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVlbSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1ZW0pO1xcbn1cXG4uTG9naW5CdXR0b25zX3JlZ2lzdGVyLW1vZGVfXzNwN1JJIGJ1dHRvbjpudGgtb2YtdHlwZSgyKSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNWVtKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01ZW0pO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL0xvZ2luQnV0dG9ucy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUE2QkEsa0JBQUE7QUMxQkU7RUFDRSxlQUFBO0VBQ0EsZ0ZBQUE7RUFBQSx3RUFBQTtFQUFBLGdFQUFBO0VBQUEsOEhBQUE7QUFESjtBQUlFO0VBQ0UsZ0JBQUE7QUFGSjtBQUtFOztFQUVFLFdBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFISjtBQU1FO0VBQ0UsT0FBQTtBQUpKO0FBT0U7RUFDRSxRQUFBO0FBTEo7O0FBVUU7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0FBUEo7QUFVRTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7QUFSSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkY29sb3JzOiAoXFxyXFxuICB3aGl0ZTogI2ZmZixcXHJcXG4gIGRhcmtlci13aGl0ZTogI2Y4ZjhmOCxcXHJcXG4gIGJsYWNrOiAjMWIxYjE1LFxcclxcbiAgZ3JlZW46ICM1OGFmNTgsXFxyXFxuICBncmV5OiAjNzc4MzhiLFxcclxcbiAgc2lsdmVyOiAjYmNjMmM2LFxcclxcbiAgeWVsbG93OiAjZjdkZjFlLFxcclxcbiAgcmVkOiAjZWI0ZDRiLFxcclxcbiAgYmx1ZTogIzI5ODBiOSxcXHJcXG4gIHB1cnBsZTogIzY2MzM5OSxcXHJcXG4gIHR3aXR0ZXItYmx1ZTogIzFiOTVlMCxcXHJcXG4gIHR3aXR0ZXItYmx1ZS1ob3ZlcjogIzBjN2FiZixcXHJcXG4gIGZhY2Vib29rLWJsdWU6ICMxODc3ZjIsXFxyXFxuICBsaW5rZWRpbi1ibHVlOiAjNTJhYWQzLFxcclxcbiAgd2hhdHNhcHAtZ3JlZW46ICMwMWU2NzUsXFxyXFxuKTtcXHJcXG5cXHJcXG4kd2lkdGg6IDkwJTtcXHJcXG4kbWF4LXdpZHRoOiAxMDAwcHg7XFxyXFxuJGN1YmljOiBjdWJpYy1iZXppZXIoMC4xOCwgMC44OSwgMC4zMiwgMS4yOCk7XFxyXFxuJGFzaWRlLW1lbnUtd2lkdGg6IDE4ZW07XFxyXFxuJGxlc3Nvbi1tZW51LXdpZHRoOiAxOGVtO1xcclxcbiRhcHAtaGVhZGVyLWhlaWdodDogMy4zZW07XFxyXFxuJHdpZHRoLWdyaWQ6IDQuNXZ3O1xcclxcbkBmdW5jdGlvbiBjb2xvcigkeCkge1xcclxcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICR4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIEJBQ0tHUk9VTkRTICoqL1xcclxcbiVncmFkaWVudEJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxNTAlIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuJWJsYWNrR3JhZGllbnRCYWNrZ3JvdW5kIHtcXHJcXG4gIGNvbG9yOiBjb2xvcih3aGl0ZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIHJpZ2h0LFxcclxcbiAgICBjb2xvcihibGFjaykgMCUsXFxyXFxuICAgIGxpZ2h0ZW4oY29sb3IoYmxhY2spLCAxMCUpIDUxJSxcXHJcXG4gICAgY29sb3IoYmxhY2spIDEwMCVcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbiVyZWRHcmFkaWVudEJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byByaWdodCxcXHJcXG4gICAgI2MwMzkyYiAwJSxcXHJcXG4gICAgI2ViNGQ0YiA1MSUsXFxyXFxuICAgICNjMDM5MmIgMTAwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuJWdyZWVuR3JhZGllbnRCYWNrZ3JvdW5kIHtcXHJcXG4gIGNvbG9yOiBjb2xvcih3aGl0ZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIHJpZ2h0LFxcclxcbiAgICAjMjdhZTYwIDAlLFxcclxcbiAgICAjMmVjYzcxIDUxJSxcXHJcXG4gICAgIzI3YWU2MCAxMDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4lYmx1ZUdyYWRpZW50QmFja2dyb3VuZCB7XFxyXFxuICBjb2xvcjogY29sb3Iod2hpdGUpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byByaWdodCxcXHJcXG4gICAgIzI5ODBiOSAwJSxcXHJcXG4gICAgIzNhYTNlOSA1MSUsXFxyXFxuICAgICMyOTgwYjkgMTAwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuJXllbGxvd0dyYWRpZW50QmFja2dyb3VuZCB7XFxyXFxuICBjb2xvcjogY29sb3IoYmxhY2spO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byByaWdodCxcXHJcXG4gICAgI2YzOWMxMiAwJSxcXHJcXG4gICAgI2YxYzQwZiA1MSUsXFxyXFxuICAgICNmMzljMTIgMTAwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuJWdyZXlHcmFkaWVudEJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byByaWdodCxcXHJcXG4gICAgY29sb3IoZ3JleSkgMCUsXFxyXFxuICAgIGNvbG9yKHNpbHZlcikgNTElLFxcclxcbiAgICBjb2xvcihncmV5KSAxMDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4lcHVycGxlR3JhZGllbnRCYWNrZ3JvdW5kIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gcmlnaHQsXFxyXFxuICAgICM2NjMzOTkgMCUsXFxyXFxuICAgICM4NTQ3YzMgNTElLFxcclxcbiAgICAjNjYzMzk5IDEwMCVcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbiVjb250YWluZXJDb25maWcge1xcclxcbiAgd2lkdGg6ICR3aWR0aDtcXHJcXG4gIG1heC13aWR0aDogJG1heC13aWR0aDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gbGluZWFyR3JhZGllbnQoJGNvbG9yMSwgJGNvbG9yMikge1xcclxcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgLTQ1ZGVnLFxcclxcbiAgICAkY29sb3IxLFxcclxcbiAgICAkY29sb3IxIDVweCxcXHJcXG4gICAgJGNvbG9yMiAwLFxcclxcbiAgICAkY29sb3IyIDEwcHhcXHJcXG4gICk7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XFxyXFxuXFxyXFxuLmxvZ2luLWJ1dHRvbnMge1xcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMC4zNWVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgJGN1YmljO1xcclxcbiAgfVxcclxcblxcclxcbiAgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBwOjpiZWZvcmUsXFxyXFxuICBwOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgY29sb3Ioc2lsdmVyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHA6OmJlZm9yZSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBwOjphZnRlciB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucmVnaXN0ZXItbW9kZSB7XFxyXFxuICBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1ZW0pO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01ZW0pO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJsb2dpbi1idXR0b25zXCI6IFwiTG9naW5CdXR0b25zX2xvZ2luLWJ1dHRvbnNfXzJFR3dzXCIsXG5cdFwicmVnaXN0ZXItbW9kZVwiOiBcIkxvZ2luQnV0dG9uc19yZWdpc3Rlci1tb2RlX18zcDdSSVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZlwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9