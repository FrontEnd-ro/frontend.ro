exports.ids = [2];
exports.modules = {

/***/ "./client/components/Form/Checkbox/Checkbox.module.scss":
/*!**************************************************************!*\
  !*** ./client/components/Form/Checkbox/Checkbox.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"checkbox-wrapper": "Checkbox_checkbox-wrapper__2zlfs",
	"checkbox": "Checkbox_checkbox__2XN7U",
	"dothabottomcheck": "Checkbox_dothabottomcheck__WtPZD",
	"dothatopcheck": "Checkbox_dothatopcheck__2lKOf",
	"control-indicator": "Checkbox_control-indicator__2GKK-"
};


/***/ }),

/***/ "./client/components/Form/Checkbox/Checkbox.tsx":
/*!******************************************************!*\
  !*** ./client/components/Form/Checkbox/Checkbox.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.module.scss */ "./client/components/Form/Checkbox/Checkbox.module.scss");
/* harmony import */ var _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\Form\\Checkbox\\Checkbox.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Checkbox(_ref) {
  let {
    children,
    className = ''
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return __jsx("label", {
    className: `${_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['checkbox-wrapper']} ${className}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.checkbox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("input", _extends({
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
    className: `${_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['control-indicator']} d-inline-block`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })), children);
}

/***/ }),

/***/ "./client/components/Form/Form.module.scss":
/*!*************************************************!*\
  !*** ./client/components/Form/Form.module.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "Form_form__1o8xf"
};


/***/ }),

/***/ "./client/components/Form/Form.tsx":
/*!*****************************************!*\
  !*** ./client/components/Form/Form.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "lodash/noop");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Form_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form.module.scss */ "./client/components/Form/Form.module.scss");
/* harmony import */ var _Form_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Form_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\Form\\Form.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((_ref, forwardRef) => {
  let {
    onSubmit,
    withStyles = true,
    onInput = lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a,
    className = '',
    autoComplete = 'on',
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["onSubmit", "withStyles", "onInput", "className", "autoComplete", "children"]);

  const submit = e => {
    e.persist();
    e.preventDefault();

    if (e.target.checkValidity()) {
      let data = {};
      let elements = [];

      try {
        elements = [...e.target.elements];
      } catch (err) {
        // MSEdge fix
        for (let i = 0; i < e.target.elements.length; i += 1) {
          elements.push(e.target.elements[i]);
        }
      }

      elements.filter(el => el.name).forEach(el => {
        if (el.hasOwnProperty('checked')) {
          if (el.type === 'checkbox') {
            data[el.name] = el.checked;
          }

          if (el.type === 'radio' && el.checked) {
            data[el.name] = el.value;
          }
        } else {
          data[el.name] = el.value;
        }
      });
      let submitResult = onSubmit(data);

      if (submitResult instanceof Promise) {
        submitResult.then(shouldReset => {
          if (shouldReset) {
            e.target.reset();
          }
        });
      }
    }
  };

  return __jsx("form", _extends({
    className: withStyles ? `${_Form_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.form} ${className}` : className,
    spellCheck: "false",
    onSubmit: submit,
    onInput: onInput,
    autoComplete: autoComplete
  }, rest, {
    ref: forwardRef,
    __self: undefined,
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

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./client/components/Form/FormGroup/FormGroup.module.scss":
/*!****************************************************************!*\
  !*** ./client/components/Form/FormGroup/FormGroup.module.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form-group": "FormGroup_form-group__3SRS1"
};


/***/ }),

/***/ "./client/components/Form/FormGroup/FormGroup.tsx":
/*!********************************************************!*\
  !*** ./client/components/Form/FormGroup/FormGroup.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormGroup.module.scss */ "./client/components/Form/FormGroup/FormGroup.module.scss");
/* harmony import */ var _FormGroup_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FormGroup_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\Form\\FormGroup\\FormGroup.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function FormGroup({
  children,
  className
}) {
  return __jsx("div", {
    className: `${_FormGroup_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['form-group']} ${className}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, children);
}

/***/ }),

/***/ "./client/components/Form/InputWithIcon/InputWithIcon.module.scss":
/*!************************************************************************!*\
  !*** ./client/components/Form/InputWithIcon/InputWithIcon.module.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"input-with-icon": "InputWithIcon_input-with-icon__1wg1X"
};


/***/ }),

/***/ "./client/components/Form/InputWithIcon/InputWithIcon.tsx":
/*!****************************************************************!*\
  !*** ./client/components/Form/InputWithIcon/InputWithIcon.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputWithIcon_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputWithIcon.module.scss */ "./client/components/Form/InputWithIcon/InputWithIcon.module.scss");
/* harmony import */ var _InputWithIcon_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_InputWithIcon_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\Form\\InputWithIcon\\InputWithIcon.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const InputWithIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((_ref, ref) => {
  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return __jsx("div", {
    className: `${_InputWithIcon_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['input-with-icon']} relative`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("input", _extends({
    ref: ref
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  })), __jsx("span", {
    className: "absolute",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, children));
});
/* harmony default export */ __webpack_exports__["default"] = (InputWithIcon);

/***/ }),

/***/ "./client/components/Form/PasswordReveal/PasswordReveal.module.scss":
/*!**************************************************************************!*\
  !*** ./client/components/Form/PasswordReveal/PasswordReveal.module.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"password-reveal": "PasswordReveal_password-reveal__PDCbb"
};


/***/ }),

/***/ "./client/components/Form/PasswordReveal/PasswordReveal.tsx":
/*!******************************************************************!*\
  !*** ./client/components/Form/PasswordReveal/PasswordReveal.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/Button */ "./client/components/Button/index.ts");
/* harmony import */ var _PasswordReveal_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PasswordReveal.module.scss */ "./client/components/Form/PasswordReveal/PasswordReveal.module.scss");
/* harmony import */ var _PasswordReveal_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PasswordReveal_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\Form\\PasswordReveal\\PasswordReveal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function PasswordReveal({
  required = true,
  name = 'password',
  autoComplete = 'on',
  passwordError = false
}) {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
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
    onClick: () => setVisible(!visible),
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

/* harmony default export */ __webpack_exports__["default"] = (PasswordReveal);

/***/ }),

/***/ "./client/components/Form/index.ts":
/*!*****************************************!*\
  !*** ./client/components/Form/index.ts ***!
  \*****************************************/
/*! exports provided: default, FormGroup, Checkbox, InputWithIcon, PasswordReveal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./client/components/Form/Form.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Form__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _FormGroup_FormGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormGroup/FormGroup */ "./client/components/Form/FormGroup/FormGroup.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return _FormGroup_FormGroup__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkbox/Checkbox */ "./client/components/Form/Checkbox/Checkbox.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _InputWithIcon_InputWithIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputWithIcon/InputWithIcon */ "./client/components/Form/InputWithIcon/InputWithIcon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputWithIcon", function() { return _InputWithIcon_InputWithIcon__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _PasswordReveal_PasswordReveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PasswordReveal/PasswordReveal */ "./client/components/Form/PasswordReveal/PasswordReveal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordReveal", function() { return _PasswordReveal_PasswordReveal__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./client/components/login/Login.module.scss":
/*!***************************************************!*\
  !*** ./client/components/login/Login.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"login-form": "Login_login-form__cXQRT",
	"server-error": "Login_server-error__8H94W"
};


/***/ }),

/***/ "./client/components/login/Login.tsx":
/*!*******************************************!*\
  !*** ./client/components/login/Login.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "lodash/debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_User_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/services/User.service */ "./client/services/User.service.ts");
/* harmony import */ var _LoginButtons_LoginButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginButtons/LoginButtons */ "./client/components/login/LoginButtons/LoginButtons.tsx");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/Form */ "./client/components/Form/index.ts");
/* harmony import */ var _redux_user_user_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/redux/user/user.actions */ "./client/redux/user/user.actions.ts");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/redux/store */ "./client/redux/store.ts");
/* harmony import */ var _Login_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Login.module.scss */ "./client/components/login/Login.module.scss");
/* harmony import */ var _Login_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Login_module_scss__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\login\\Login.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(_props) {
    super(_props);

    _defineProperty(this, "checkUsernameDebouncedFn", void 0);

    _defineProperty(this, "onUsernameChange", e => {
      var _e$target$value;

      let value = (_e$target$value = e.target.value) !== null && _e$target$value !== void 0 ? _e$target$value : '';
      value = value.trim();
      this.setState({
        username: value,
        usernameExists: undefined
      });

      if (!value) {
        return;
      }

      if (this.checkUsernameDebouncedFn) {
        // Cancel previous call
        this.checkUsernameDebouncedFn.cancel();
      } // Start a new one so we don't overload server with requests


      this.checkUsernameDebouncedFn = lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(() => {
        _services_User_service__WEBPACK_IMPORTED_MODULE_4__["default"].checkUsername(value).then(() => this.setState({
          usernameExists: true
        })).catch(() => this.setState({
          usernameExists: false
        }));
      }, 250);
      this.checkUsernameDebouncedFn();
    });

    _defineProperty(this, "changeMode", newMode => {
      const {
        mode
      } = this.state;

      if (newMode === mode) {
        // Do nothing since we handle the submit separately
        return;
      } // FIXME
      // Without applying the delay, the form will also get
      // get submitted. Maybe there's a better solution?


      setTimeout(() => this.setState({
        mode: newMode
      }), 0);
    });

    _defineProperty(this, "submit", props => {
      const {
        mode
      } = this.state;
      const {
        onSuccess
      } = this.props;
      const apiToCall = mode === 'register' ? _services_User_service__WEBPACK_IMPORTED_MODULE_4__["default"].register : _services_User_service__WEBPACK_IMPORTED_MODULE_4__["default"].login;
      this.setState({
        loading: true
      });
      apiToCall(props).then(user => {
        Object(_redux_store__WEBPACK_IMPORTED_MODULE_8__["getStore"])().dispatch(Object(_redux_user_user_actions__WEBPACK_IMPORTED_MODULE_7__["loadInfo"])(user));

        if (onSuccess) {
          onSuccess(user);
        }
      }).catch(error => this.setState({
        serverError: error.message
      })).finally(() => this.setState({
        loading: false
      }));
    });

    this.state = {
      mode: 'login',
      loading: false,
      serverError: null,
      username: '',
      usernameExists: undefined
    };
  }

  componentWillUnmount() {
    var _this$checkUsernameDe;

    (_this$checkUsernameDe = this.checkUsernameDebouncedFn) === null || _this$checkUsernameDe === void 0 ? void 0 : _this$checkUsernameDe.cancel();
  }

  render() {
    const {
      mode,
      loading,
      serverError,
      usernameExists,
      username
    } = this.state;
    const {
      className
    } = this.props;
    return __jsx("div", {
      className: `${_Login_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a['login-form']} ${className || ''}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 7
      }
    }, __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onSubmit: this.submit,
      onInput: () => this.setState({
        serverError: null
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }
    }, __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
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
    }))), mode === 'register' && __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
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
    }, " Username "), __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_6__["InputWithIcon"], {
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
    }, usernameExists && __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      width: "1em",
      className: "text-red",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 38
      }
    }), usernameExists === false && __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      width: "1em",
      className: "text-green",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCheck"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 48
      }
    }), usernameExists === undefined && username && __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      width: "1em",
      className: "rotate",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSpinner"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 64
      }
    })))), __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
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
    }, " Parola "), __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_6__["PasswordReveal"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 15
      }
    }))), mode === 'register' && __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
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
      className: `${_Login_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a['server-error']} text-red text-bold`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 27
      }
    }, serverError), __jsx(_LoginButtons_LoginButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
      mode: mode,
      loading: loading,
      onLogin: () => this.changeMode('login'),
      onRegister: () => this.changeMode('register'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./client/components/login/LoginButtons/LoginButtons.module.scss":
/*!***********************************************************************!*\
  !*** ./client/components/login/LoginButtons/LoginButtons.module.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"login-buttons": "LoginButtons_login-buttons__2EGws",
	"register-mode": "LoginButtons_register-mode__3p7RI"
};


/***/ }),

/***/ "./client/components/login/LoginButtons/LoginButtons.tsx":
/*!***************************************************************!*\
  !*** ./client/components/login/LoginButtons/LoginButtons.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/Button */ "./client/components/Button/index.ts");
/* harmony import */ var _LoginButtons_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginButtons.module.scss */ "./client/components/login/LoginButtons/LoginButtons.module.scss");
/* harmony import */ var _LoginButtons_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LoginButtons_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\client\\components\\login\\LoginButtons\\LoginButtons.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function LoginButtons({
  mode,
  onLogin,
  onRegister,
  loading
}) {
  return __jsx("div", {
    className: `${_LoginButtons_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['login-buttons']} ${mode === 'register' ? _LoginButtons_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['register-mode'] : ''} text-center`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "light",
    type: mode === 'register' ? 'button' : 'submit',
    className: `${mode === 'register' ? 'btn--light' : 'btn--blue'} ${loading && mode === 'login' ? 'btn--loading' : ''} btn w-100`,
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
    className: `${mode === 'register' ? 'btn--blue' : 'btn--light'} ${loading && mode === 'register' ? 'btn--loading' : ''} btn w-100`,
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

/***/ }),

/***/ "./client/redux/exercise-submissions/exercise-submissions.actions.ts":
/*!***************************************************************************!*\
  !*** ./client/redux/exercise-submissions/exercise-submissions.actions.ts ***!
  \***************************************************************************/
/*! exports provided: EXERCISE_SUBMISSIONS, addSubmission, removeSubmission, updateSubmission, loadSubmissions, searchSubmissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXERCISE_SUBMISSIONS", function() { return EXERCISE_SUBMISSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSubmission", function() { return addSubmission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSubmission", function() { return removeSubmission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubmission", function() { return updateSubmission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSubmissions", function() { return loadSubmissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSubmissions", function() { return searchSubmissions; });
const ADD = 'exercise-submissions/ADD';
const REMOVE = 'exercise-submissions/REMOVE';
const UPDATE = 'exercise-submissions/UPDATE';
const LOAD = 'exercise-submissions/LOAD';
const SEARCH = 'exercise-submissions/SEARCH';
const EXERCISE_SUBMISSIONS = {
  ADD,
  REMOVE,
  UPDATE,
  LOAD,
  SEARCH
};
const addSubmission = (submission, index = 0) => ({
  type: ADD,
  payload: {
    submission,
    index
  }
});
const removeSubmission = id => ({
  type: REMOVE,
  payload: {
    id
  }
});
const updateSubmission = (id, newSubmission) => ({
  type: UPDATE,
  payload: {
    id,
    newSubmission
  }
});
const loadSubmissions = newSubmissions => ({
  type: LOAD,
  payload: {
    newSubmissions
  }
});
const searchSubmissions = (query, newSubmissions) => ({
  type: SEARCH,
  payload: {
    query,
    newSubmissions
  }
});

/***/ }),

/***/ "./client/redux/exercise-submissions/exercise-submissions.reducer.ts":
/*!***************************************************************************!*\
  !*** ./client/redux/exercise-submissions/exercise-submissions.reducer.ts ***!
  \***************************************************************************/
/*! exports provided: submissionReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionReducer", function() { return submissionReducer; });
/* harmony import */ var _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exercise-submissions.actions */ "./client/redux/exercise-submissions/exercise-submissions.actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  submissions: undefined,
  search: '',
  page: 0,
  end: false
};
const submissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_0__["EXERCISE_SUBMISSIONS"].ADD:
      {
        let {
          index,
          submission
        } = action.payload;

        if (!Array.isArray(submission)) {
          submission = [submission];
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          submissions: [...state.submissions.slice(0, index), ...submission, ...state.submissions.slice(index)]
        });
      }

    case _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_0__["EXERCISE_SUBMISSIONS"].REMOVE:
      {
        let {
          id
        } = action.payload;

        if (!Array.isArray(id)) {
          id = [id];
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          submissions: state.submissions.filter(submission => !id.includes(submission._id))
        });
      }

    case _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_0__["EXERCISE_SUBMISSIONS"].UPDATE:
      return _objectSpread(_objectSpread({}, state), {}, {
        submissions: state.submissions.map(submission => {
          const {
            id,
            newSubmission
          } = action.payload;

          if (submission._id === id) {
            return _objectSpread(_objectSpread({}, submission), newSubmission);
          }

          return submission;
        })
      });

    case _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_0__["EXERCISE_SUBMISSIONS"].LOAD:
      {
        const {
          newSubmissions
        } = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          submissions: state.submissions ? [...state.submissions, ...newSubmissions] : newSubmissions,
          page: state.page + 1,
          end: newSubmissions.length === 0
        });
      }

    case _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_0__["EXERCISE_SUBMISSIONS"].SEARCH:
      {
        const {
          query,
          newSubmissions
        } = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          submissions: newSubmissions,
          search: query,
          page: 1,
          end: newSubmissions.length === 0
        });
      }

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (submissionReducer);

/***/ }),

/***/ "./client/redux/root.reducer.ts":
/*!**************************************!*\
  !*** ./client/redux/root.reducer.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _exercise_submissions_exercise_submissions_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercise-submissions/exercise-submissions.reducer */ "./client/redux/exercise-submissions/exercise-submissions.reducer.ts");
/* harmony import */ var _user_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.actions */ "./client/redux/user/user.actions.ts");
/* harmony import */ var _user_user_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.reducer */ "./client/redux/user/user.reducer.ts");





const rootReducer = (state, action) => {
  if (action.type === _user_user_actions__WEBPACK_IMPORTED_MODULE_2__["USER_LOGOUT"]) {
    state = undefined;
  }

  return appReducer(state, action);
};

const appReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  submissions: _exercise_submissions_exercise_submissions_reducer__WEBPACK_IMPORTED_MODULE_1__["submissionReducer"],
  user: _user_user_reducer__WEBPACK_IMPORTED_MODULE_3__["userReducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./client/redux/store.ts":
/*!*******************************!*\
  !*** ./client/redux/store.ts ***!
  \*******************************/
/*! exports provided: createStoreWithPreloadedData, getStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStoreWithPreloadedData", function() { return createStoreWithPreloadedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStore", function() { return getStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root.reducer */ "./client/redux/root.reducer.ts");


let store;

function createStoreWithPreloadedData(preloadedData) {
  if (true) {
    store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_root_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], preloadedData);
  }

  return store;
}

function getStore() {
  return store;
}



/***/ }),

/***/ "./client/redux/user/user.reducer.ts":
/*!*******************************************!*\
  !*** ./client/redux/user/user.reducer.ts ***!
  \*******************************************/
/*! exports provided: defaultUserState, userReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultUserState", function() { return defaultUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.actions */ "./client/redux/user/user.actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const defaultUserState = {
  info: undefined,
  notifications: {
    list: undefined,
    unread: 0,
    unreadCount: 0,
    page: 0,
    end: false
  }
};
const initialState = defaultUserState;
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case _user_actions__WEBPACK_IMPORTED_MODULE_0__["USER_INFO"].LOAD:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          info: action.payload
        });
      }

    case _user_actions__WEBPACK_IMPORTED_MODULE_0__["USER_NOTIFICATIONS"].ADD:
      {
        let {
          index,
          notifications
        } = action.payload;

        if (!Array.isArray(notifications)) {
          notifications = [notifications];
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          notifications: _objectSpread(_objectSpread({}, state.notifications), {}, {
            list: [...state.notifications.list.slice(0, index), ...notifications, ...state.notifications.list.slice(index)]
          })
        });
      }

    case _user_actions__WEBPACK_IMPORTED_MODULE_0__["USER_NOTIFICATIONS"].LOAD:
      {
        const {
          newNotifications
        } = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          notifications: _objectSpread(_objectSpread({}, state.notifications), {}, {
            list: state.notifications.list ? [...state.notifications.list, ...newNotifications] : newNotifications,
            page: state.notifications.page + 1,
            end: newNotifications.length === 0
          })
        });
      }

    case _user_actions__WEBPACK_IMPORTED_MODULE_0__["USER_NOTIFICATIONS"].MARK_AS_READ:
      {
        let {
          id
        } = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          notifications: _objectSpread(_objectSpread({}, state.notifications), {}, {
            list: [...state.notifications.list.map(n => {
              if (n._id === id) {
                return _objectSpread(_objectSpread({}, n), {}, {
                  isUnread: false
                });
              }

              return n;
            })],
            unreadCount: state.notifications.unreadCount - 1
          })
        });
      }

    case _user_actions__WEBPACK_IMPORTED_MODULE_0__["USER_NOTIFICATIONS"].MARK_AS_UNREAD:
      {
        let {
          id
        } = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          notifications: _objectSpread(_objectSpread({}, state.notifications), {}, {
            list: [...state.notifications.list.map(n => {
              if (n._id === id) {
                return _objectSpread(_objectSpread({}, n), {}, {
                  isUnread: true
                });
              }

              return n;
            })],
            unreadCount: state.notifications.unreadCount + 1
          })
        });
      }

    case _user_actions__WEBPACK_IMPORTED_MODULE_0__["USER_NOTIFICATIONS"].MARK_ALL_AS_READ:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          notifications: _objectSpread(_objectSpread({}, state.notifications), {}, {
            list: state.notifications.list.map(n => _objectSpread(_objectSpread({}, n), {}, {
              isUnread: false
            })),
            unreadCount: 0
          })
        });
      }

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtL0NoZWNrYm94L0NoZWNrYm94Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm0vQ2hlY2tib3gvQ2hlY2tib3gudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm0vRm9ybS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtL0Zvcm0udHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm0vRm9ybUdyb3VwL0Zvcm1Hcm91cC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtL0Zvcm1Hcm91cC9Gb3JtR3JvdXAudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm0vSW5wdXRXaXRoSWNvbi9JbnB1dFdpdGhJY29uLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm0vSW5wdXRXaXRoSWNvbi9JbnB1dFdpdGhJY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtL1Bhc3N3b3JkUmV2ZWFsL1Bhc3N3b3JkUmV2ZWFsLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm0vUGFzc3dvcmRSZXZlYWwvUGFzc3dvcmRSZXZlYWwudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvbG9naW4vTG9naW4ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvbG9naW4vTG9naW4udHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL2xvZ2luL0xvZ2luQnV0dG9ucy9Mb2dpbkJ1dHRvbnMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvbG9naW4vTG9naW5CdXR0b25zL0xvZ2luQnV0dG9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JlZHV4L2V4ZXJjaXNlLXN1Ym1pc3Npb25zL2V4ZXJjaXNlLXN1Ym1pc3Npb25zLmFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JlZHV4L2V4ZXJjaXNlLXN1Ym1pc3Npb25zL2V4ZXJjaXNlLXN1Ym1pc3Npb25zLnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JlZHV4L3Jvb3QucmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdXgvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JlZHV4L3VzZXIvdXNlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbIkNoZWNrYm94IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJwcm9wcyIsInN0eWxlcyIsImNoZWNrYm94IiwiRm9ybSIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsIm9uU3VibWl0Iiwid2l0aFN0eWxlcyIsIm9uSW5wdXQiLCJub29wIiwiYXV0b0NvbXBsZXRlIiwicmVzdCIsInN1Ym1pdCIsImUiLCJwZXJzaXN0IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjaGVja1ZhbGlkaXR5IiwiZGF0YSIsImVsZW1lbnRzIiwiZXJyIiwiaSIsImxlbmd0aCIsInB1c2giLCJmaWx0ZXIiLCJlbCIsIm5hbWUiLCJmb3JFYWNoIiwiaGFzT3duUHJvcGVydHkiLCJ0eXBlIiwiY2hlY2tlZCIsInZhbHVlIiwic3VibWl0UmVzdWx0IiwiUHJvbWlzZSIsInRoZW4iLCJzaG91bGRSZXNldCIsInJlc2V0IiwiZm9ybSIsIkZvcm1Hcm91cCIsIklucHV0V2l0aEljb24iLCJyZWYiLCJQYXNzd29yZFJldmVhbCIsInJlcXVpcmVkIiwicGFzc3dvcmRFcnJvciIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJmYUV5ZSIsImZhRXllU2xhc2giLCJMb2dpbiIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwidHJpbSIsInNldFN0YXRlIiwidXNlcm5hbWUiLCJ1c2VybmFtZUV4aXN0cyIsInVuZGVmaW5lZCIsImNoZWNrVXNlcm5hbWVEZWJvdW5jZWRGbiIsImNhbmNlbCIsImRlYm91bmNlIiwiVXNlclNlcnZpY2UiLCJjaGVja1VzZXJuYW1lIiwiY2F0Y2giLCJuZXdNb2RlIiwibW9kZSIsInN0YXRlIiwic2V0VGltZW91dCIsIm9uU3VjY2VzcyIsImFwaVRvQ2FsbCIsInJlZ2lzdGVyIiwibG9naW4iLCJsb2FkaW5nIiwidXNlciIsImdldFN0b3JlIiwiZGlzcGF0Y2giLCJsb2FkSW5mbyIsImVycm9yIiwic2VydmVyRXJyb3IiLCJtZXNzYWdlIiwiZmluYWxseSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwib25Vc2VybmFtZUNoYW5nZSIsImZhVGltZXMiLCJmYUNoZWNrIiwiZmFTcGlubmVyIiwiZm9udFNpemUiLCJjaGFuZ2VNb2RlIiwiTG9naW5CdXR0b25zIiwib25Mb2dpbiIsIm9uUmVnaXN0ZXIiLCJBREQiLCJSRU1PVkUiLCJVUERBVEUiLCJMT0FEIiwiU0VBUkNIIiwiRVhFUkNJU0VfU1VCTUlTU0lPTlMiLCJhZGRTdWJtaXNzaW9uIiwic3VibWlzc2lvbiIsImluZGV4IiwicGF5bG9hZCIsInJlbW92ZVN1Ym1pc3Npb24iLCJpZCIsInVwZGF0ZVN1Ym1pc3Npb24iLCJuZXdTdWJtaXNzaW9uIiwibG9hZFN1Ym1pc3Npb25zIiwibmV3U3VibWlzc2lvbnMiLCJzZWFyY2hTdWJtaXNzaW9ucyIsInF1ZXJ5IiwiaW5pdGlhbFN0YXRlIiwic3VibWlzc2lvbnMiLCJzZWFyY2giLCJwYWdlIiwiZW5kIiwic3VibWlzc2lvblJlZHVjZXIiLCJhY3Rpb24iLCJBcnJheSIsImlzQXJyYXkiLCJzbGljZSIsImluY2x1ZGVzIiwiX2lkIiwibWFwIiwicm9vdFJlZHVjZXIiLCJVU0VSX0xPR09VVCIsImFwcFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJzdG9yZSIsImNyZWF0ZVN0b3JlV2l0aFByZWxvYWRlZERhdGEiLCJwcmVsb2FkZWREYXRhIiwiY3JlYXRlU3RvcmUiLCJkZWZhdWx0VXNlclN0YXRlIiwiaW5mbyIsIm5vdGlmaWNhdGlvbnMiLCJsaXN0IiwidW5yZWFkIiwidW5yZWFkQ291bnQiLCJ1c2VyUmVkdWNlciIsIlVTRVJfSU5GTyIsIlVTRVJfTk9USUZJQ0FUSU9OUyIsIm5ld05vdGlmaWNhdGlvbnMiLCJNQVJLX0FTX1JFQUQiLCJuIiwiaXNVbnJlYWQiLCJNQVJLX0FTX1VOUkVBRCIsIk1BUktfQUxMX0FTX1JFQUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFQTtBQU1lLFNBQVNBLFFBQVQsT0FJYztBQUFBLE1BSkk7QUFDL0JDLFlBRCtCO0FBRS9CQyxhQUFTLEdBQUc7QUFGbUIsR0FJSjtBQUFBLE1BRHhCQyxLQUN3Qjs7QUFDM0IsU0FDRTtBQUFPLGFBQVMsRUFBRyxHQUFFQyw0REFBTSxDQUFDLGtCQUFELENBQXFCLElBQUdGLFNBQVUsRUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRSw0REFBTSxDQUFDQyxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxhQUFTLEVBQUMsVUFBakI7QUFBNEIsUUFBSSxFQUFDO0FBQWpDLEtBQWdERixLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsRUFFRTtBQUFNLGFBQVMsRUFBRyxHQUFFQyw0REFBTSxDQUFDLG1CQUFELENBQXNCLGlCQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtHSCxRQUxILENBREY7QUFTRCxD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YUFBTixDQUFvQkcsV0FBcEIsR0FBa0M7QUFYcEM7QUFGZjtBQWdCRDs7QUFDRCxTQUFLRyxnRUFBa0IsQ0FBQ0ssY0FBeEI7QUFBd0M7QUFDdEMsWUFBSTtBQUFFekM7QUFBRixZQUFTYSxNQUFNLENBQUNmLE9BQXBCO0FBRUEsK0NBQ0tuQyxLQURMO0FBRUVtRSx1QkFBYSxrQ0FDUm5FLEtBQUssQ0FBQ21FLGFBREU7QUFFWEMsZ0JBQUksRUFBRSxDQUFDLEdBQUdwRSxLQUFLLENBQUNtRSxhQUFOLENBQW9CQyxJQUFwQixDQUF5QlosR0FBekIsQ0FBOEJvQixDQUFELElBQU87QUFDNUMsa0JBQUlBLENBQUMsQ0FBQ3JCLEdBQUYsS0FBVWxCLEVBQWQsRUFBa0I7QUFDaEIsdURBQ0t1QyxDQURMO0FBRUVDLDBCQUFRLEVBQUU7QUFGWjtBQUlEOztBQUNELHFCQUFPRCxDQUFQO0FBQ0QsYUFSUyxDQUFKLENBRks7QUFXWE4sdUJBQVcsRUFBRXRFLEtBQUssQ0FBQ21FLGFBQU4sQ0FBb0JHLFdBQXBCLEdBQWtDO0FBWHBDO0FBRmY7QUFnQkQ7O0FBQ0QsU0FBS0csZ0VBQWtCLENBQUNNLGdCQUF4QjtBQUEwQztBQUN4QywrQ0FDSy9FLEtBREw7QUFFRW1FLHVCQUFhLGtDQUNSbkUsS0FBSyxDQUFDbUUsYUFERTtBQUVYQyxnQkFBSSxFQUFFcEUsS0FBSyxDQUFDbUUsYUFBTixDQUFvQkMsSUFBcEIsQ0FBeUJaLEdBQXpCLENBQThCb0IsQ0FBRCxvQ0FBYUEsQ0FBYjtBQUFnQkMsc0JBQVEsRUFBRTtBQUExQixjQUE3QixDQUZLO0FBR1hQLHVCQUFXLEVBQUU7QUFIRjtBQUZmO0FBUUQ7O0FBQ0Q7QUFDRSxhQUFPdEUsS0FBUDtBQTNGSjtBQTZGRCxDQS9GTTtBQWdHUXVFLDBFQUFmLEUiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNoZWNrYm94LXdyYXBwZXJcIjogXCJDaGVja2JveF9jaGVja2JveC13cmFwcGVyX18yemxmc1wiLFxuXHRcImNoZWNrYm94XCI6IFwiQ2hlY2tib3hfY2hlY2tib3hfXzJYTjdVXCIsXG5cdFwiZG90aGFib3R0b21jaGVja1wiOiBcIkNoZWNrYm94X2RvdGhhYm90dG9tY2hlY2tfX1d0UFpEXCIsXG5cdFwiZG90aGF0b3BjaGVja1wiOiBcIkNoZWNrYm94X2RvdGhhdG9wY2hlY2tfXzJsS09mXCIsXG5cdFwiY29udHJvbC1pbmRpY2F0b3JcIjogXCJDaGVja2JveF9jb250cm9sLWluZGljYXRvcl9fMkdLSy1cIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DaGVja2JveC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrYm94KHtcclxuICBjaGlsZHJlbixcclxuICBjbGFzc05hbWUgPSAnJyxcclxuICAuLi5wcm9wc1xyXG59OiBQcm9wc1dpdGhDaGlsZHJlbjxQcm9wcz4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7c3R5bGVzWydjaGVja2JveC13cmFwcGVyJ119ICR7Y2xhc3NOYW1lfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94fT5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYWJzb2x1dGVcIiB0eXBlPVwiY2hlY2tib3hcIiB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2NvbnRyb2wtaW5kaWNhdG9yJ119IGQtaW5saW5lLWJsb2NrYH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvbGFiZWw+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb3JtXCI6IFwiRm9ybV9mb3JtX18xbzh4ZlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZvcm1IVE1MQXR0cmlidXRlcywgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBub29wIGZyb20gJ2xvZGFzaC9ub29wJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb3JtLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEZvcm1IVE1MQXR0cmlidXRlczxIVE1MRm9ybUVsZW1lbnQ+IHtcclxuICBvblN1Ym1pdDogKGRhdGE6IGFueSkgPT4gdm9pZCB8IFByb21pc2U8Ym9vbGVhbj47XHJcblxyXG4gIHdpdGhTdHlsZXM/OiBib29sZWFuO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBhdXRvQ29tcGxldGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEZvcm0gPSBSZWFjdC5mb3J3YXJkUmVmKCh7XHJcbiAgb25TdWJtaXQsXHJcbiAgd2l0aFN0eWxlcyA9IHRydWUsXHJcbiAgb25JbnB1dCA9IG5vb3AsXHJcbiAgY2xhc3NOYW1lID0gJycsXHJcbiAgYXV0b0NvbXBsZXRlID0gJ29uJyxcclxuICBjaGlsZHJlbixcclxuICAuLi5yZXN0XHJcbn06IFByb3BzV2l0aENoaWxkcmVuPFByb3BzPiwgZm9yd2FyZFJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICBjb25zdCBzdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wZXJzaXN0KCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICBsZXQgZWxlbWVudHMgPSBbXTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZWxlbWVudHMgPSBbLi4uZS50YXJnZXQuZWxlbWVudHNdO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAvLyBNU0VkZ2UgZml4XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLnRhcmdldC5lbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgZWxlbWVudHMucHVzaChlLnRhcmdldC5lbGVtZW50c1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtZW50c1xyXG4gICAgICAgIC5maWx0ZXIoKGVsKSA9PiBlbC5uYW1lKVxyXG4gICAgICAgIC5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVsLmhhc093blByb3BlcnR5KCdjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgaWYgKGVsLnR5cGUgPT09ICdjaGVja2JveCcpIHtcclxuICAgICAgICAgICAgICBkYXRhW2VsLm5hbWVdID0gZWwuY2hlY2tlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWwudHlwZSA9PT0gJ3JhZGlvJyAmJiBlbC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgZGF0YVtlbC5uYW1lXSA9IGVsLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhW2VsLm5hbWVdID0gZWwudmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgc3VibWl0UmVzdWx0ID0gb25TdWJtaXQoZGF0YSk7XHJcbiAgICAgIGlmIChzdWJtaXRSZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgc3VibWl0UmVzdWx0LnRoZW4oKHNob3VsZFJlc2V0KSA9PiB7XHJcbiAgICAgICAgICBpZiAoc2hvdWxkUmVzZXQpIHtcclxuICAgICAgICAgICAgZS50YXJnZXQucmVzZXQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybVxyXG4gICAgICBjbGFzc05hbWU9e3dpdGhTdHlsZXMgPyBgJHtzdHlsZXMuZm9ybX0gJHtjbGFzc05hbWV9YCA6IGNsYXNzTmFtZX1cclxuICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgb25TdWJtaXQ9e3N1Ym1pdH1cclxuICAgICAgb25JbnB1dD17b25JbnB1dH1cclxuICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgICByZWY9e2ZvcndhcmRSZWZ9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59KTtcclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSh7XHJcbi8vICAgb25TdWJtaXQsXHJcbi8vICAgd2l0aFN0eWxlcyA9IHRydWUsXHJcbi8vICAgb25JbnB1dCA9IG5vb3AsXHJcbi8vICAgY2xhc3NOYW1lID0gJycsXHJcbi8vICAgYXV0b0NvbXBsZXRlID0gJ29uJyxcclxuLy8gICBjaGlsZHJlbixcclxuLy8gICAuLi5yZXN0XHJcbi8vIH06IFByb3BzV2l0aENoaWxkcmVuPFByb3BzPikge1xyXG4vLyAgIGNvbnN0IHN1Ym1pdCA9IChlKSA9PiB7XHJcbi8vICAgICBlLnBlcnNpc3QoKTtcclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbi8vICAgICBpZiAoZS50YXJnZXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbi8vICAgICAgIGxldCBkYXRhID0ge307XHJcbi8vICAgICAgIGxldCBlbGVtZW50cyA9IFtdO1xyXG5cclxuLy8gICAgICAgdHJ5IHtcclxuLy8gICAgICAgICBlbGVtZW50cyA9IFsuLi5lLnRhcmdldC5lbGVtZW50c107XHJcbi8vICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgICAgIC8vIE1TRWRnZSBmaXhcclxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUudGFyZ2V0LmVsZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XHJcbi8vICAgICAgICAgICBlbGVtZW50cy5wdXNoKGUudGFyZ2V0LmVsZW1lbnRzW2ldKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuXHJcbi8vICAgICAgIGVsZW1lbnRzXHJcbi8vICAgICAgICAgLmZpbHRlcigoZWwpID0+IGVsLm5hbWUpXHJcbi8vICAgICAgICAgLmZvckVhY2goKGVsKSA9PiB7XHJcbi8vICAgICAgICAgICBpZiAoZWwuaGFzT3duUHJvcGVydHkoJ2NoZWNrZWQnKSkge1xyXG4vLyAgICAgICAgICAgICBpZiAoZWwudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xyXG4vLyAgICAgICAgICAgICAgIGRhdGFbZWwubmFtZV0gPSBlbC5jaGVja2VkO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIGlmIChlbC50eXBlID09PSAncmFkaW8nICYmIGVsLmNoZWNrZWQpIHtcclxuLy8gICAgICAgICAgICAgICBkYXRhW2VsLm5hbWVdID0gZWwudmFsdWU7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIGRhdGFbZWwubmFtZV0gPSBlbC52YWx1ZTtcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9KTtcclxuXHJcbi8vICAgICAgIGxldCBzdWJtaXRSZXN1bHQgPSBvblN1Ym1pdChkYXRhKTtcclxuLy8gICAgICAgaWYgKHN1Ym1pdFJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuLy8gICAgICAgICBzdWJtaXRSZXN1bHQudGhlbigoc2hvdWxkUmVzZXQpID0+IHtcclxuLy8gICAgICAgICAgIGlmIChzaG91bGRSZXNldCkge1xyXG4vLyAgICAgICAgICAgICBlLnRhcmdldC5yZXNldCgpO1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfTtcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxmb3JtXHJcbi8vICAgICAgIGNsYXNzTmFtZT17d2l0aFN0eWxlcyA/IGAke3N0eWxlcy5mb3JtfSAke2NsYXNzTmFtZX1gIDogY2xhc3NOYW1lfVxyXG4vLyAgICAgICBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4vLyAgICAgICBvblN1Ym1pdD17c3VibWl0fVxyXG4vLyAgICAgICBvbklucHV0PXtvbklucHV0fVxyXG4vLyAgICAgICBhdXRvQ29ycmVjdD1cIm9mZlwiXHJcbi8vICAgICAgIGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfVxyXG4vLyAgICAgICB7Li4ucmVzdH1cclxuLy8gICAgID5cclxuLy8gICAgICAge2NoaWxkcmVufVxyXG4vLyAgICAgPC9mb3JtPlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvcm0tZ3JvdXBcIjogXCJGb3JtR3JvdXBfZm9ybS1ncm91cF9fM1NSUzFcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvcm1Hcm91cC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtR3JvdXAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGNsYXNzTmFtZSxcclxufTogUHJvcHNXaXRoQ2hpbGRyZW48eyBjbGFzc05hbWU/OiBzdHJpbmcgfT4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlc1snZm9ybS1ncm91cCddfSAke2NsYXNzTmFtZX1gfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpbnB1dC13aXRoLWljb25cIjogXCJJbnB1dFdpdGhJY29uX2lucHV0LXdpdGgtaWNvbl9fMXdnMVhcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0lucHV0V2l0aEljb24ubW9kdWxlLnNjc3MnO1xyXG5cclxudHlwZSBQcm9wcyA9IFByb3BzV2l0aENoaWxkcmVuPFJlYWN0LklucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+XHJcblxyXG5jb25zdCBJbnB1dFdpdGhJY29uID0gUmVhY3QuZm9yd2FyZFJlZigoXHJcbiAge1xyXG4gICAgY2hpbGRyZW4sXHJcbiAgICAuLi5yZXN0XHJcbiAgfTogUHJvcHMsXHJcbiAgcmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD4sXHJcbikgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzWydpbnB1dC13aXRoLWljb24nXX0gcmVsYXRpdmVgfT5cclxuICAgICAgPGlucHV0IHJlZj17cmVmfSB7Li4ucmVzdH0gLz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGVcIj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRXaXRoSWNvbjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGFzc3dvcmQtcmV2ZWFsXCI6IFwiUGFzc3dvcmRSZXZlYWxfcGFzc3dvcmQtcmV2ZWFsX19QRENiYlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYUV5ZSwgZmFFeWVTbGFzaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnfi9jb21wb25lbnRzL0J1dHRvbic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFzc3dvcmRSZXZlYWwubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICByZXF1aXJlZD86IGJvb2xlYW47XHJcbiAgbmFtZT86IHN0cmluZztcclxuICBhdXRvQ29tcGxldGU/OiBzdHJpbmc7XHJcbiAgcGFzc3dvcmRFcnJvcj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBhc3N3b3JkUmV2ZWFsKHtcclxuICByZXF1aXJlZCA9IHRydWUsXHJcbiAgbmFtZSA9ICdwYXNzd29yZCcsXHJcbiAgYXV0b0NvbXBsZXRlID0gJ29uJyxcclxuICBwYXNzd29yZEVycm9yID0gZmFsc2UsXHJcbn06IFByb3BzKSB7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sncGFzc3dvcmQtcmV2ZWFsJ119PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPXt2aXNpYmxlID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ31cclxuICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9e2F1dG9Db21wbGV0ZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0ZXh0LWdyZXlcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSghdmlzaWJsZSl9XHJcbiAgICAgICAgICB0aXRsZT17dmlzaWJsZSA/ICdIaWRlIHBhc3N3b3JkJyA6ICdTaG93IHBhc3N3b3JkJ31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e3Zpc2libGUgPyBmYUV5ZSA6IGZhRXllU2xhc2h9IC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7cGFzc3dvcmRFcnJvclxyXG4gICAgICAgID8gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQgdGV4dC1ib2xkXCI+8J+nmeKAjSBOdSBwb8ibaSB0cmVjZSBtYWkgZGVwYXJ0ZSBkZWPDonQgY3UgbyBwYXJvbMSDITwvc3Bhbj5cclxuICAgICAgICA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZFJldmVhbDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRm9ybSc7XHJcblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvcm1Hcm91cCB9IGZyb20gJy4vRm9ybUdyb3VwL0Zvcm1Hcm91cCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2tib3ggfSBmcm9tICcuL0NoZWNrYm94L0NoZWNrYm94JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dFdpdGhJY29uIH0gZnJvbSAnLi9JbnB1dFdpdGhJY29uL0lucHV0V2l0aEljb24nO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhc3N3b3JkUmV2ZWFsIH0gZnJvbSAnLi9QYXNzd29yZFJldmVhbC9QYXNzd29yZFJldmVhbCc7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvZ2luLWZvcm1cIjogXCJMb2dpbl9sb2dpbi1mb3JtX19jWFFSVFwiLFxuXHRcInNlcnZlci1lcnJvclwiOiBcIkxvZ2luX3NlcnZlci1lcnJvcl9fOEg5NFdcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gvZGVib3VuY2UnO1xyXG5pbXBvcnQgeyBEZWJvdW5jZWRGdW5jIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFDaGVjaywgZmFTcGlubmVyLCBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tICd+L3NlcnZpY2VzL1VzZXIuc2VydmljZSc7XHJcbmltcG9ydCBMb2dpbkJ1dHRvbnMgZnJvbSAnLi9Mb2dpbkJ1dHRvbnMvTG9naW5CdXR0b25zJztcclxuaW1wb3J0IEZvcm0sIHtcclxuICBGb3JtR3JvdXAsXHJcbiAgQ2hlY2tib3gsXHJcbiAgSW5wdXRXaXRoSWNvbixcclxuICBQYXNzd29yZFJldmVhbCxcclxufSBmcm9tICd+L2NvbXBvbmVudHMvRm9ybSc7XHJcbmltcG9ydCB7IGxvYWRJbmZvIH0gZnJvbSAnfi9yZWR1eC91c2VyL3VzZXIuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFVzZXJTdGF0ZSB9IGZyb20gJ34vcmVkdXgvdXNlci90eXBlcyc7XHJcbmltcG9ydCB7IGdldFN0b3JlIH0gZnJvbSAnfi9yZWR1eC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9naW4ubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIE15UHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBvblN1Y2Nlc3M/OiAodXNlcj86IFVzZXJTdGF0ZVsnaW5mbyddKSA9PiB2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSBNeVN0YXRlIHtcclxuICBtb2RlOiAnbG9naW4nIHwgJ3JlZ2lzdGVyJyxcclxuICBsb2FkaW5nOiBib29sZWFuO1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgc2VydmVyRXJyb3I6IHN0cmluZztcclxuICB1c2VybmFtZUV4aXN0czogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQ8TXlQcm9wcywgTXlTdGF0ZT4ge1xyXG4gIHByaXZhdGUgY2hlY2tVc2VybmFtZURlYm91bmNlZEZuOiBEZWJvdW5jZWRGdW5jPCgpID0+IHZvaWQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogTXlQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG1vZGU6ICdsb2dpbicsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBzZXJ2ZXJFcnJvcjogbnVsbCxcclxuICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICB1c2VybmFtZUV4aXN0czogdW5kZWZpbmVkLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5jaGVja1VzZXJuYW1lRGVib3VuY2VkRm4/LmNhbmNlbCgpO1xyXG4gIH1cclxuXHJcbiAgb25Vc2VybmFtZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBsZXQgdmFsdWU6IHN0cmluZyA9IGUudGFyZ2V0LnZhbHVlID8/ICcnO1xyXG4gICAgdmFsdWUgPSB2YWx1ZS50cmltKCk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHVzZXJuYW1lOiB2YWx1ZSxcclxuICAgICAgdXNlcm5hbWVFeGlzdHM6IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrVXNlcm5hbWVEZWJvdW5jZWRGbikge1xyXG4gICAgICAvLyBDYW5jZWwgcHJldmlvdXMgY2FsbFxyXG4gICAgICB0aGlzLmNoZWNrVXNlcm5hbWVEZWJvdW5jZWRGbi5jYW5jZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGFydCBhIG5ldyBvbmUgc28gd2UgZG9uJ3Qgb3ZlcmxvYWQgc2VydmVyIHdpdGggcmVxdWVzdHNcclxuICAgIHRoaXMuY2hlY2tVc2VybmFtZURlYm91bmNlZEZuID0gZGVib3VuY2UoKCkgPT4ge1xyXG4gICAgICBVc2VyU2VydmljZS5jaGVja1VzZXJuYW1lKHZhbHVlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0U3RhdGUoeyB1c2VybmFtZUV4aXN0czogdHJ1ZSB9KSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lRXhpc3RzOiBmYWxzZSB9KSk7XHJcbiAgICB9LCAyNTApO1xyXG5cclxuICAgIHRoaXMuY2hlY2tVc2VybmFtZURlYm91bmNlZEZuKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VNb2RlID0gKG5ld01vZGU6ICdsb2dpbicgfCAncmVnaXN0ZXInKSA9PiB7XHJcbiAgICBjb25zdCB7IG1vZGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgaWYgKG5ld01vZGUgPT09IG1vZGUpIHtcclxuICAgICAgLy8gRG8gbm90aGluZyBzaW5jZSB3ZSBoYW5kbGUgdGhlIHN1Ym1pdCBzZXBhcmF0ZWx5XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGSVhNRVxyXG4gICAgLy8gV2l0aG91dCBhcHBseWluZyB0aGUgZGVsYXksIHRoZSBmb3JtIHdpbGwgYWxzbyBnZXRcclxuICAgIC8vIGdldCBzdWJtaXR0ZWQuIE1heWJlIHRoZXJlJ3MgYSBiZXR0ZXIgc29sdXRpb24/XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBtb2RlOiBuZXdNb2RlIH0pLCAwKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBtb2RlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgeyBvblN1Y2Nlc3MgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBhcGlUb0NhbGwgPSBtb2RlID09PSAncmVnaXN0ZXInID8gVXNlclNlcnZpY2UucmVnaXN0ZXIgOiBVc2VyU2VydmljZS5sb2dpbjtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBhcGlUb0NhbGwocHJvcHMpXHJcbiAgICAgIC50aGVuKCh1c2VyOiBVc2VyU3RhdGVbJ2luZm8nXSkgPT4ge1xyXG4gICAgICAgIGdldFN0b3JlKCkuZGlzcGF0Y2gobG9hZEluZm8odXNlcikpO1xyXG5cclxuICAgICAgICBpZiAob25TdWNjZXNzKSB7XHJcbiAgICAgICAgICBvblN1Y2Nlc3ModXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VydmVyRXJyb3I6IGVycm9yLm1lc3NhZ2UgfSkpXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG1vZGUsXHJcbiAgICAgIGxvYWRpbmcsXHJcbiAgICAgIHNlcnZlckVycm9yLFxyXG4gICAgICB1c2VybmFtZUV4aXN0cyxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2xvZ2luLWZvcm0nXX0gJHtjbGFzc05hbWUgfHwgJyd9YH0+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0fSBvbklucHV0PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VydmVyRXJyb3I6IG51bGwgfSl9PlxyXG4gICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAge21vZGUgPT09ICdyZWdpc3RlcidcclxuICAgICAgICAgICAgICAgICAgPyAnRW1haWwnXHJcbiAgICAgICAgICAgICAgICAgIDogJ0VtYWlsIHNhdSB1c2VybmFtZSd9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGF1dG9DYXBpdGFsaXplPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPXttb2RlID09PSAncmVnaXN0ZXInID8gJ2VtYWlsJyA6ICdlbWFpbE9yVXNlcm5hbWUnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICB7bW9kZSA9PT0gJ3JlZ2lzdGVyJyAmJiAoXHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+IFVzZXJuYW1lIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFdpdGhJY29uXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Vc2VybmFtZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3VzZXJuYW1lRXhpc3RzICYmIDxGb250QXdlc29tZUljb24gd2lkdGg9XCIxZW1cIiBjbGFzc05hbWU9XCJ0ZXh0LXJlZFwiIGljb249e2ZhVGltZXN9IC8+fVxyXG4gICAgICAgICAgICAgICAgICB7dXNlcm5hbWVFeGlzdHMgPT09IGZhbHNlICYmIDxGb250QXdlc29tZUljb24gd2lkdGg9XCIxZW1cIiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuXCIgaWNvbj17ZmFDaGVja30gLz59XHJcbiAgICAgICAgICAgICAgICAgIHt1c2VybmFtZUV4aXN0cyA9PT0gdW5kZWZpbmVkICYmIHVzZXJuYW1lICYmIDxGb250QXdlc29tZUljb24gd2lkdGg9XCIxZW1cIiBjbGFzc05hbWU9XCJyb3RhdGVcIiBpY29uPXtmYVNwaW5uZXJ9IC8+fVxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dFdpdGhJY29uPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+IFBhcm9sYSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPFBhc3N3b3JkUmV2ZWFsIC8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICB7KG1vZGUgPT09ICdyZWdpc3RlcicpICYmIChcclxuICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IG1iLTRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcwLjg1ZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgQW0gY2l0aXQgyJlpIHN1bnQgZGUgYWNvcmQgY3VcclxuICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Rlcm1lbmktc2ktY29uZGl0aWlcIiBjbGFzc05hbWU9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIFRlcm1lbmlpIMiZaSBDb25kacibaWlsZVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgIGRlIHV0aWxpemFyZS5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHtzZXJ2ZXJFcnJvciAmJiA8cCBjbGFzc05hbWU9e2Ake3N0eWxlc1snc2VydmVyLWVycm9yJ119IHRleHQtcmVkIHRleHQtYm9sZGB9PntzZXJ2ZXJFcnJvcn08L3A+fVxyXG5cclxuICAgICAgICAgIDxMb2dpbkJ1dHRvbnNcclxuICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgb25Mb2dpbj17KCkgPT4gdGhpcy5jaGFuZ2VNb2RlKCdsb2dpbicpfVxyXG4gICAgICAgICAgICBvblJlZ2lzdGVyPXsoKSA9PiB0aGlzLmNoYW5nZU1vZGUoJ3JlZ2lzdGVyJyl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvZ2luLWJ1dHRvbnNcIjogXCJMb2dpbkJ1dHRvbnNfbG9naW4tYnV0dG9uc19fMkVHd3NcIixcblx0XCJyZWdpc3Rlci1tb2RlXCI6IFwiTG9naW5CdXR0b25zX3JlZ2lzdGVyLW1vZGVfXzNwN1JJXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ34vY29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9naW5CdXR0b25zLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgbW9kZTogJ2xvZ2luJyB8ICdyZWdpc3Rlcic7XHJcbiAgb25Mb2dpbjogKCkgPT4gdm9pZDtcclxuICBvblJlZ2lzdGVyOiAoKSA9PiB2b2lkO1xyXG4gIGxvYWRpbmc/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luQnV0dG9ucyh7XHJcbiAgbW9kZSwgb25Mb2dpbiwgb25SZWdpc3RlciwgbG9hZGluZyxcclxufTogUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlc1snbG9naW4tYnV0dG9ucyddfSAke21vZGUgPT09ICdyZWdpc3RlcicgPyBzdHlsZXNbJ3JlZ2lzdGVyLW1vZGUnXSA6ICcnfSB0ZXh0LWNlbnRlcmB9PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD1cImxpZ2h0XCJcclxuICAgICAgICB0eXBlPXttb2RlID09PSAncmVnaXN0ZXInID8gJ2J1dHRvbicgOiAnc3VibWl0J31cclxuICAgICAgICBjbGFzc05hbWU9e2Ake21vZGUgPT09ICdyZWdpc3RlcicgPyAnYnRuLS1saWdodCcgOiAnYnRuLS1ibHVlJ30gJHsobG9hZGluZyAmJiBtb2RlID09PSAnbG9naW4nKSA/ICdidG4tLWxvYWRpbmcnIDogJyd9IGJ0biB3LTEwMGB9XHJcbiAgICAgICAgbG9hZGluZz17bG9hZGluZyAmJiBtb2RlID09PSAnbG9naW4nfVxyXG4gICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uTG9naW59XHJcbiAgICAgID5cclxuICAgICAgICBJbnRyxIMgw65uIGNvbnRcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+IHNhdSA8L3A+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB2YXJpYW50PVwibGlnaHRcIlxyXG4gICAgICAgIHR5cGU9e21vZGUgPT09ICdyZWdpc3RlcicgPyAnc3VibWl0JyA6ICdidXR0b24nfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7bW9kZSA9PT0gJ3JlZ2lzdGVyJyA/ICdidG4tLWJsdWUnIDogJ2J0bi0tbGlnaHQnfSAkeyhsb2FkaW5nICYmIG1vZGUgPT09ICdyZWdpc3RlcicpID8gJ2J0bi0tbG9hZGluZycgOiAnJ30gYnRuIHctMTAwYH1cclxuICAgICAgICBsb2FkaW5nPXtsb2FkaW5nICYmIG1vZGUgPT09ICdyZWdpc3Rlcid9XHJcbiAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgb25DbGljaz17b25SZWdpc3Rlcn1cclxuICAgICAgPlxyXG4gICAgICAgIMOObnJlZ2lzdHJlYXrEgy10ZVxyXG4gICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IFN1Ym1pc3Npb24gfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmNvbnN0IEFERCA9ICdleGVyY2lzZS1zdWJtaXNzaW9ucy9BREQnO1xyXG5jb25zdCBSRU1PVkUgPSAnZXhlcmNpc2Utc3VibWlzc2lvbnMvUkVNT1ZFJztcclxuY29uc3QgVVBEQVRFID0gJ2V4ZXJjaXNlLXN1Ym1pc3Npb25zL1VQREFURSc7XHJcbmNvbnN0IExPQUQgPSAnZXhlcmNpc2Utc3VibWlzc2lvbnMvTE9BRCc7XHJcbmNvbnN0IFNFQVJDSCA9ICdleGVyY2lzZS1zdWJtaXNzaW9ucy9TRUFSQ0gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVYRVJDSVNFX1NVQk1JU1NJT05TID0ge1xyXG4gIEFERCxcclxuICBSRU1PVkUsXHJcbiAgVVBEQVRFLFxyXG4gIExPQUQsXHJcbiAgU0VBUkNILFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFN1Ym1pc3Npb24gPSAoc3VibWlzc2lvbjogU3VibWlzc2lvbiB8IFN1Ym1pc3Npb25bXSwgaW5kZXggPSAwKSA9PiAoe1xyXG4gIHR5cGU6IEFERCxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBzdWJtaXNzaW9uLFxyXG4gICAgaW5kZXgsXHJcbiAgfSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCByZW1vdmVTdWJtaXNzaW9uID0gKGlkOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gKHtcclxuICB0eXBlOiBSRU1PVkUsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgaWQsXHJcbiAgfSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTdWJtaXNzaW9uID0gKGlkOiBzdHJpbmcsIG5ld1N1Ym1pc3Npb246IFN1Ym1pc3Npb24pID0+ICh7XHJcbiAgdHlwZTogVVBEQVRFLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGlkLFxyXG4gICAgbmV3U3VibWlzc2lvbixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkU3VibWlzc2lvbnMgPSAobmV3U3VibWlzc2lvbnM6IFN1Ym1pc3Npb25bXSkgPT4gKHtcclxuICB0eXBlOiBMT0FELFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIG5ld1N1Ym1pc3Npb25zLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaFN1Ym1pc3Npb25zID0gKHF1ZXJ5OiBzdHJpbmcsIG5ld1N1Ym1pc3Npb25zOiBTdWJtaXNzaW9uW10pID0+ICh7XHJcbiAgdHlwZTogU0VBUkNILFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIHF1ZXJ5LFxyXG4gICAgbmV3U3VibWlzc2lvbnMsXHJcbiAgfSxcclxufSk7XHJcbiIsImltcG9ydCB7IFN1Ym1pc3Npb25TdGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgeyBFWEVSQ0lTRV9TVUJNSVNTSU9OUyB9IGZyb20gJy4vZXhlcmNpc2Utc3VibWlzc2lvbnMuYWN0aW9ucyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN1Ym1pc3Npb25TdGF0ZSA9IHtcclxuICBzdWJtaXNzaW9uczogdW5kZWZpbmVkLFxyXG4gIHNlYXJjaDogJycsXHJcbiAgcGFnZTogMCxcclxuICBlbmQ6IGZhbHNlLFxyXG59O1xyXG5leHBvcnQgY29uc3Qgc3VibWlzc2lvblJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogeyB0eXBlOiBzdHJpbmc7IHBheWxvYWQ6IGFueTt9KVxyXG46IFN1Ym1pc3Npb25TdGF0ZSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBFWEVSQ0lTRV9TVUJNSVNTSU9OUy5BREQ6IHtcclxuICAgICAgbGV0IHsgaW5kZXgsIHN1Ym1pc3Npb24gfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3VibWlzc2lvbikpIHtcclxuICAgICAgICBzdWJtaXNzaW9uID0gW3N1Ym1pc3Npb25dO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc3VibWlzc2lvbnM6IFsuLi5zdGF0ZS5zdWJtaXNzaW9ucy5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgICAuLi5zdWJtaXNzaW9uLFxyXG4gICAgICAgICAgLi4uc3RhdGUuc3VibWlzc2lvbnMuc2xpY2UoaW5kZXgpXSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgRVhFUkNJU0VfU1VCTUlTU0lPTlMuUkVNT1ZFOiB7XHJcbiAgICAgIGxldCB7IGlkIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGlkKSkge1xyXG4gICAgICAgIGlkID0gW2lkXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHN1Ym1pc3Npb25zOiBzdGF0ZS5zdWJtaXNzaW9ucy5maWx0ZXIoKHN1Ym1pc3Npb24pID0+ICFpZC5pbmNsdWRlcyhzdWJtaXNzaW9uLl9pZCkpLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBFWEVSQ0lTRV9TVUJNSVNTSU9OUy5VUERBVEU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc3VibWlzc2lvbnM6IHN0YXRlLnN1Ym1pc3Npb25zLm1hcCgoc3VibWlzc2lvbikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBpZCwgbmV3U3VibWlzc2lvbiB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICBpZiAoc3VibWlzc2lvbi5faWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uc3VibWlzc2lvbixcclxuICAgICAgICAgICAgICAuLi5uZXdTdWJtaXNzaW9uLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHN1Ym1pc3Npb247XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEVYRVJDSVNFX1NVQk1JU1NJT05TLkxPQUQ6IHtcclxuICAgICAgY29uc3QgeyBuZXdTdWJtaXNzaW9ucyB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHN1Ym1pc3Npb25zOiBzdGF0ZS5zdWJtaXNzaW9uc1xyXG4gICAgICAgICAgPyBbLi4uc3RhdGUuc3VibWlzc2lvbnMsIC4uLm5ld1N1Ym1pc3Npb25zXVxyXG4gICAgICAgICAgOiBuZXdTdWJtaXNzaW9ucyxcclxuICAgICAgICBwYWdlOiBzdGF0ZS5wYWdlICsgMSxcclxuICAgICAgICBlbmQ6IG5ld1N1Ym1pc3Npb25zLmxlbmd0aCA9PT0gMCxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgRVhFUkNJU0VfU1VCTUlTU0lPTlMuU0VBUkNIOiB7XHJcbiAgICAgIGNvbnN0IHsgcXVlcnksIG5ld1N1Ym1pc3Npb25zIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc3VibWlzc2lvbnM6IG5ld1N1Ym1pc3Npb25zLFxyXG4gICAgICAgIHNlYXJjaDogcXVlcnksXHJcbiAgICAgICAgcGFnZTogMSxcclxuICAgICAgICBlbmQ6IG5ld1N1Ym1pc3Npb25zLmxlbmd0aCA9PT0gMCxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdWJtaXNzaW9uUmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBzdWJtaXNzaW9uUmVkdWNlciBhcyBzdWJtaXNzaW9ucyB9IGZyb20gJy4vZXhlcmNpc2Utc3VibWlzc2lvbnMvZXhlcmNpc2Utc3VibWlzc2lvbnMucmVkdWNlcic7XHJcbmltcG9ydCB7IFVTRVJfTE9HT1VUIH0gZnJvbSAnLi91c2VyL3VzZXIuYWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZXJSZWR1Y2VyIGFzIHVzZXIgfSBmcm9tICcuL3VzZXIvdXNlci5yZWR1Y2VyJztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBpZiAoYWN0aW9uLnR5cGUgPT09IFVTRVJfTE9HT1VUKSB7XHJcbiAgICBzdGF0ZSA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHJldHVybiBhcHBSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG59O1xyXG5cclxuY29uc3QgYXBwUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgc3VibWlzc2lvbnMsXHJcbiAgdXNlcixcclxufSk7XHJcblxyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yb290LnJlZHVjZXInO1xyXG5cclxubGV0IHN0b3JlO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3RvcmVXaXRoUHJlbG9hZGVkRGF0YShwcmVsb2FkZWREYXRhKSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFzdG9yZSkge1xyXG4gICAgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgcHJlbG9hZGVkRGF0YSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0b3JlKCkge1xyXG4gIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlU3RvcmVXaXRoUHJlbG9hZGVkRGF0YSwgZ2V0U3RvcmUgfTtcclxuIiwiaW1wb3J0IHsgVXNlclN0YXRlIH0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCB7IFVTRVJfSU5GTywgVVNFUl9OT1RJRklDQVRJT05TIH0gZnJvbSAnLi91c2VyLmFjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRVc2VyU3RhdGUgPSB7XHJcbiAgaW5mbzogdW5kZWZpbmVkLFxyXG4gIG5vdGlmaWNhdGlvbnM6IHtcclxuICAgIGxpc3Q6IHVuZGVmaW5lZCwgdW5yZWFkOiAwLCB1bnJlYWRDb3VudDogMCwgcGFnZTogMCwgZW5kOiBmYWxzZSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyU3RhdGUgPSBkZWZhdWx0VXNlclN0YXRlO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IHsgdHlwZTogc3RyaW5nOyBwYXlsb2FkOiBhbnk7IH0pXHJcbiAgOiBVc2VyU3RhdGUgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgVVNFUl9JTkZPLkxPQUQ6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpbmZvOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFVTRVJfTk9USUZJQ0FUSU9OUy5BREQ6IHtcclxuICAgICAgbGV0IHsgaW5kZXgsIG5vdGlmaWNhdGlvbnMgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG5vdGlmaWNhdGlvbnMpKSB7XHJcbiAgICAgICAgbm90aWZpY2F0aW9ucyA9IFtub3RpZmljYXRpb25zXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbnM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLm5vdGlmaWNhdGlvbnMsXHJcbiAgICAgICAgICBsaXN0OiBbLi4uc3RhdGUubm90aWZpY2F0aW9ucy5saXN0LnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICAgICAgLi4ubm90aWZpY2F0aW9ucyxcclxuICAgICAgICAgICAgLi4uc3RhdGUubm90aWZpY2F0aW9ucy5saXN0LnNsaWNlKGluZGV4KV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFVTRVJfTk9USUZJQ0FUSU9OUy5MT0FEOiB7XHJcbiAgICAgIGNvbnN0IHsgbmV3Tm90aWZpY2F0aW9ucyB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbnM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLm5vdGlmaWNhdGlvbnMsXHJcbiAgICAgICAgICBsaXN0OiBzdGF0ZS5ub3RpZmljYXRpb25zLmxpc3RcclxuICAgICAgICAgICAgPyBbLi4uc3RhdGUubm90aWZpY2F0aW9ucy5saXN0LCAuLi5uZXdOb3RpZmljYXRpb25zXVxyXG4gICAgICAgICAgICA6IG5ld05vdGlmaWNhdGlvbnMsXHJcbiAgICAgICAgICBwYWdlOiBzdGF0ZS5ub3RpZmljYXRpb25zLnBhZ2UgKyAxLFxyXG4gICAgICAgICAgZW5kOiBuZXdOb3RpZmljYXRpb25zLmxlbmd0aCA9PT0gMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBVU0VSX05PVElGSUNBVElPTlMuTUFSS19BU19SRUFEOiB7XHJcbiAgICAgIGxldCB7IGlkIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbm90aWZpY2F0aW9uczoge1xyXG4gICAgICAgICAgLi4uc3RhdGUubm90aWZpY2F0aW9ucyxcclxuICAgICAgICAgIGxpc3Q6IFsuLi5zdGF0ZS5ub3RpZmljYXRpb25zLmxpc3QubWFwKChuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuLl9pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4ubixcclxuICAgICAgICAgICAgICAgIGlzVW5yZWFkOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuO1xyXG4gICAgICAgICAgfSldLFxyXG4gICAgICAgICAgdW5yZWFkQ291bnQ6IHN0YXRlLm5vdGlmaWNhdGlvbnMudW5yZWFkQ291bnQgLSAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIFVTRVJfTk9USUZJQ0FUSU9OUy5NQVJLX0FTX1VOUkVBRDoge1xyXG4gICAgICBsZXQgeyBpZCB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbnM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLm5vdGlmaWNhdGlvbnMsXHJcbiAgICAgICAgICBsaXN0OiBbLi4uc3RhdGUubm90aWZpY2F0aW9ucy5saXN0Lm1hcCgobikgPT4ge1xyXG4gICAgICAgICAgICBpZiAobi5faWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLm4sXHJcbiAgICAgICAgICAgICAgICBpc1VucmVhZDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuO1xyXG4gICAgICAgICAgfSldLFxyXG4gICAgICAgICAgdW5yZWFkQ291bnQ6IHN0YXRlLm5vdGlmaWNhdGlvbnMudW5yZWFkQ291bnQgKyAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIFVTRVJfTk9USUZJQ0FUSU9OUy5NQVJLX0FMTF9BU19SRUFEOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbm90aWZpY2F0aW9uczoge1xyXG4gICAgICAgICAgLi4uc3RhdGUubm90aWZpY2F0aW9ucyxcclxuICAgICAgICAgIGxpc3Q6IHN0YXRlLm5vdGlmaWNhdGlvbnMubGlzdC5tYXAoKG4pID0+ICh7IC4uLm4sIGlzVW5yZWFkOiBmYWxzZSB9KSksXHJcbiAgICAgICAgICB1bnJlYWRDb3VudDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgdXNlclJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=