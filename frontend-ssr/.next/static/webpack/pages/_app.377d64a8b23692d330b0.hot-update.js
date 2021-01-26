webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/redux/store */ \"./redux/store.ts\");\n/* harmony import */ var _redux_user_user_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/redux/user/user.reducer */ \"./redux/user/user.reducer.ts\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/nmaties/Projects/personal/frontend.ro/frontend-ssr/pages/_app.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  var store = Object(_redux_store__WEBPACK_IMPORTED_MODULE_7__[\"createStoreWithPreloadedData\"])({\n    user: _objectSpread(_objectSpread({}, _redux_user_user_reducer__WEBPACK_IMPORTED_MODULE_8__[\"defaultUserState\"]), {}, {\n      info: pageProps.user\n    })\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    // if (process.env.NODE_ENV === 'production') {\n    var runLogRocket = /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n        var LogRocketInit;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                LogRocketInit = __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! logrocket */ \"./node_modules/logrocket/dist/build.umd.js\", 7)).then(function (module) {\n                  return module['init'];\n                });\n                LogRocketInit('ijivpy/frontendro');\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function runLogRocket() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    runLogRocket(); // }\n  });\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n    store: store,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  })));\n}\n/**\n * Fetch user on all pages and add it to store.\n * This way we already have the user when rendering most pages thus the overall\n * render experience should be faster.\n\n * ⚠⚠⚠ WARNING ⚠⚠⚠\n * This function gets called on both SERVER and CLIENT.\n * Unfortunately `getServerSideProps` is not supported\n * for the `App` component so we're stuck with this one.\n *\n * On the client however, we don't want to call the DB methods,\n * so we found a little \"hack\" by checking the `req` parameter.\n */\n\n_s(MyApp, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = MyApp;\n\nMyApp.getInitialProps = /*#__PURE__*/function () {\n  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(_ref3) {\n    var ctx, req, pageProps, isClientSide, _yield$Promise$all, _yield$Promise$all2, databaseImport, userModelImport, connectToDb, UserModel, token, user, sanitizedUser;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            ctx = _ref3.ctx, req = _ref3.req;\n            pageProps = {\n              user: null\n            };\n            isClientSide = !ctx.req;\n\n            if (!isClientSide) {\n              _context2.next = 5;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", {\n              pageProps: pageProps\n            });\n\n          case 5:\n            _context2.prev = 5;\n            _context2.next = 8;\n            return Promise.all([__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../server/database */ \"./server/database.ts\")), __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../server/model/user.model */ \"./server/model/user.model.ts\"))]);\n\n          case 8:\n            _yield$Promise$all = _context2.sent;\n            _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_yield$Promise$all, 2);\n            databaseImport = _yield$Promise$all2[0];\n            userModelImport = _yield$Promise$all2[1];\n            connectToDb = databaseImport.connectToDb;\n            UserModel = userModelImport[\"default\"];\n            token = ctx.req.cookies.token;\n\n            if (token) {\n              _context2.next = 17;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", {\n              pageProps: pageProps\n            });\n\n          case 17:\n            connectToDb();\n            _context2.next = 20;\n            return UserModel.ping(token);\n\n          case 20:\n            user = _context2.sent;\n            sanitizedUser = UserModel.sanitize(user);\n            sanitizedUser.lastLogin = sanitizedUser.lastLogin.toString();\n            pageProps.user = sanitizedUser;\n            _context2.next = 29;\n            break;\n\n          case 26:\n            _context2.prev = 26;\n            _context2.t0 = _context2[\"catch\"](5);\n            console.error('[getServerSideProps][pingUser]: ', _context2.t0);\n\n          case 29:\n            return _context2.abrupt(\"return\", {\n              pageProps: pageProps\n            });\n\n          case 30:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[5, 26]]);\n  }));\n\n  return function (_x) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwiY3JlYXRlU3RvcmVXaXRoUHJlbG9hZGVkRGF0YSIsInVzZXIiLCJkZWZhdWx0VXNlclN0YXRlIiwiaW5mbyIsInVzZUVmZmVjdCIsInJ1bkxvZ1JvY2tldCIsIkxvZ1JvY2tldEluaXQiLCJ0aGVuIiwibW9kdWxlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVxIiwiaXNDbGllbnRTaWRlIiwiUHJvbWlzZSIsImFsbCIsImRhdGFiYXNlSW1wb3J0IiwidXNlck1vZGVsSW1wb3J0IiwiY29ubmVjdFRvRGIiLCJVc2VyTW9kZWwiLCJ0b2tlbiIsImNvb2tpZXMiLCJwaW5nIiwic2FuaXRpemVkVXNlciIsInNhbml0aXplIiwibGFzdExvZ2luIiwidG9TdHJpbmciLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxLQUFULE9BQThDO0FBQUE7O0FBQUEsTUFBN0JDLFNBQTZCLFFBQTdCQSxTQUE2QjtBQUFBLE1BQWxCQyxTQUFrQixRQUFsQkEsU0FBa0I7QUFDM0QsTUFBTUMsS0FBSyxHQUFHQyxpRkFBNEIsQ0FBQztBQUN6Q0MsUUFBSSxrQ0FDQ0MseUVBREQ7QUFFRkMsVUFBSSxFQUFFTCxTQUFTLENBQUNHO0FBRmQ7QUFEcUMsR0FBRCxDQUExQztBQU9BRyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNFLFFBQU1DLFlBQVk7QUFBQSxtTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYkMsNkJBRGEsR0FDRyxrSkFBb0JDLElBQXBCLENBQXlCLFVBQUNDLE1BQUQ7QUFBQSx5QkFBWUEsTUFBTSxDQUFDLE1BQUQsQ0FBbEI7QUFBQSxpQkFBekIsQ0FESDtBQUVuQkYsNkJBQWEsQ0FBQyxtQkFBRCxDQUFiOztBQUZtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFaRCxZQUFZO0FBQUE7QUFBQTtBQUFBLE9BQWxCOztBQUlBQSxnQkFBWSxHQU5BLENBT2Q7QUFDRCxHQVJRLENBQVQ7QUFVQSxTQUNFLE1BQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVOLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQseUZBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREY7QUFLRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQXJDd0JGLEs7O0tBQUFBLEs7O0FBc0N4QkEsS0FBSyxDQUFDYSxlQUFOO0FBQUEsK0xBQXdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsZUFBVCxTQUFTQSxHQUFULEVBQWNDLEdBQWQsU0FBY0EsR0FBZDtBQUNoQmIscUJBRGdCLEdBQ0o7QUFDaEJHLGtCQUFJLEVBQUU7QUFEVSxhQURJO0FBS2hCVyx3QkFMZ0IsR0FLRCxDQUFDRixHQUFHLENBQUNDLEdBTEo7O0FBQUEsaUJBT2xCQyxZQVBrQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4Q0FRYjtBQUFFZCx1QkFBUyxFQUFUQTtBQUFGLGFBUmE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWTRCZSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUMxRCwrSEFEMEQsRUFFMUQsK0lBRjBELENBQVosQ0FaNUI7O0FBQUE7QUFBQTtBQUFBO0FBWWJDLDBCQVphO0FBWUdDLDJCQVpIO0FBaUJaQyx1QkFqQlksR0FpQklGLGNBakJKLENBaUJaRSxXQWpCWTtBQWtCZEMscUJBbEJjLEdBa0JGRixlQUFlLFdBbEJiO0FBbUJaRyxpQkFuQlksR0FtQkZULEdBQUcsQ0FBQ0MsR0FBSixDQUFRUyxPQW5CTixDQW1CWkQsS0FuQlk7O0FBQUEsZ0JBcUJmQSxLQXJCZTtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4Q0FzQlg7QUFBRXJCLHVCQUFTLEVBQVRBO0FBQUYsYUF0Qlc7O0FBQUE7QUF5QnBCbUIsdUJBQVc7QUF6QlM7QUFBQSxtQkEyQkRDLFNBQVMsQ0FBQ0csSUFBVixDQUFlRixLQUFmLENBM0JDOztBQUFBO0FBMkJkbEIsZ0JBM0JjO0FBNEJkcUIseUJBNUJjLEdBNEJFSixTQUFTLENBQUNLLFFBQVYsQ0FBbUJ0QixJQUFuQixDQTVCRjtBQThCcEJxQix5QkFBYSxDQUFDRSxTQUFkLEdBQTBCRixhQUFhLENBQUNFLFNBQWQsQ0FBd0JDLFFBQXhCLEVBQTFCO0FBQ0EzQixxQkFBUyxDQUFDRyxJQUFWLEdBQWlCcUIsYUFBakI7QUEvQm9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBaUNwQkksbUJBQU8sQ0FBQ0MsS0FBUixDQUFjLGtDQUFkOztBQWpDb0I7QUFBQSw4Q0FvQ2Y7QUFBRTdCLHVCQUFTLEVBQVRBO0FBQUYsYUFwQ2U7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlV2l0aFByZWxvYWRlZERhdGEgfSBmcm9tICd+L3JlZHV4L3N0b3JlJztcbmltcG9ydCB7IGRlZmF1bHRVc2VyU3RhdGUgfSBmcm9tICd+L3JlZHV4L3VzZXIvdXNlci5yZWR1Y2VyJztcblxuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogYW55KSB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmVXaXRoUHJlbG9hZGVkRGF0YSh7XG4gICAgdXNlcjoge1xuICAgICAgLi4uZGVmYXVsdFVzZXJTdGF0ZSxcbiAgICAgIGluZm86IHBhZ2VQcm9wcy51c2VyLFxuICAgIH0sXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnN0IHJ1bkxvZ1JvY2tldCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgTG9nUm9ja2V0SW5pdCA9IGltcG9ydCgnbG9ncm9ja2V0JykudGhlbigobW9kdWxlKSA9PiBtb2R1bGVbJ2luaXQnXSk7XG4gICAgICAgIExvZ1JvY2tldEluaXQoJ2lqaXZweS9mcm9udGVuZHJvJyk7XG4gICAgICB9O1xuICAgICAgcnVuTG9nUm9ja2V0KCk7XG4gICAgLy8gfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbi8qKlxuICogRmV0Y2ggdXNlciBvbiBhbGwgcGFnZXMgYW5kIGFkZCBpdCB0byBzdG9yZS5cbiAqIFRoaXMgd2F5IHdlIGFscmVhZHkgaGF2ZSB0aGUgdXNlciB3aGVuIHJlbmRlcmluZyBtb3N0IHBhZ2VzIHRodXMgdGhlIG92ZXJhbGxcbiAqIHJlbmRlciBleHBlcmllbmNlIHNob3VsZCBiZSBmYXN0ZXIuXG5cbiAqIOKaoOKaoOKaoCBXQVJOSU5HIOKaoOKaoOKaoFxuICogVGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBvbiBib3RoIFNFUlZFUiBhbmQgQ0xJRU5ULlxuICogVW5mb3J0dW5hdGVseSBgZ2V0U2VydmVyU2lkZVByb3BzYCBpcyBub3Qgc3VwcG9ydGVkXG4gKiBmb3IgdGhlIGBBcHBgIGNvbXBvbmVudCBzbyB3ZSdyZSBzdHVjayB3aXRoIHRoaXMgb25lLlxuICpcbiAqIE9uIHRoZSBjbGllbnQgaG93ZXZlciwgd2UgZG9uJ3Qgd2FudCB0byBjYWxsIHRoZSBEQiBtZXRob2RzLFxuICogc28gd2UgZm91bmQgYSBsaXR0bGUgXCJoYWNrXCIgYnkgY2hlY2tpbmcgdGhlIGByZXFgIHBhcmFtZXRlci5cbiAqL1xuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4LCByZXEgfSkgPT4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSB7XG4gICAgdXNlcjogbnVsbCxcbiAgfTtcblxuICBjb25zdCBpc0NsaWVudFNpZGUgPSAhY3R4LnJlcTtcblxuICBpZiAoaXNDbGllbnRTaWRlKSB7XG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH07XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IFtkYXRhYmFzZUltcG9ydCwgdXNlck1vZGVsSW1wb3J0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGltcG9ydCgnLi4vc2VydmVyL2RhdGFiYXNlJyksXG4gICAgICBpbXBvcnQoJy4uL3NlcnZlci9tb2RlbC91c2VyLm1vZGVsJyksXG4gICAgXSk7XG5cbiAgICBjb25zdCB7IGNvbm5lY3RUb0RiIH0gPSBkYXRhYmFzZUltcG9ydDtcbiAgICBjb25zdCBVc2VyTW9kZWwgPSB1c2VyTW9kZWxJbXBvcnQuZGVmYXVsdDtcbiAgICBjb25zdCB7IHRva2VuIH0gPSBjdHgucmVxLmNvb2tpZXM7XG5cbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbiAgICB9XG5cbiAgICBjb25uZWN0VG9EYigpO1xuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5waW5nKHRva2VuKTtcbiAgICBjb25zdCBzYW5pdGl6ZWRVc2VyID0gVXNlck1vZGVsLnNhbml0aXplKHVzZXIpO1xuXG4gICAgc2FuaXRpemVkVXNlci5sYXN0TG9naW4gPSBzYW5pdGl6ZWRVc2VyLmxhc3RMb2dpbi50b1N0cmluZygpO1xuICAgIHBhZ2VQcm9wcy51c2VyID0gc2FuaXRpemVkVXNlcjtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignW2dldFNlcnZlclNpZGVQcm9wc11bcGluZ1VzZXJdOiAnLCBlcnIpO1xuICB9XG5cbiAgcmV0dXJuIHsgcGFnZVByb3BzIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

})