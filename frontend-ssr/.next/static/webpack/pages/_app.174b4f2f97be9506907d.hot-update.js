webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/redux/store */ \"./redux/store.ts\");\n/* harmony import */ var _redux_user_user_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/redux/user/user.reducer */ \"./redux/user/user.reducer.ts\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/nmaties/Projects/personal/frontend.ro/frontend-ssr/pages/_app.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  var store = Object(_redux_store__WEBPACK_IMPORTED_MODULE_7__[\"createStoreWithPreloadedData\"])({\n    user: _objectSpread(_objectSpread({}, _redux_user_user_reducer__WEBPACK_IMPORTED_MODULE_8__[\"defaultUserState\"]), {}, {\n      info: pageProps.user\n    })\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    // if (process.env.NODE_ENV === 'production') {\n    var runLogRocket = /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n        var LogRocketInit;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                LogRocketInit = __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! logrocket */ \"./node_modules/logrocket/dist/build.umd.js\", 7)).then(function (module) {\n                  return module['init'];\n                });\n                LogRocket.init('ijivpy/frontendro');\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function runLogRocket() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    runLogRocket(); // }\n  });\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n    store: store,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  })));\n}\n/**\n * Fetch user on all pages and add it to store.\n * This way we already have the user when rendering most pages thus the overall\n * render experience should be faster.\n\n * ⚠⚠⚠ WARNING ⚠⚠⚠\n * This function gets called on both SERVER and CLIENT.\n * Unfortunately `getServerSideProps` is not supported\n * for the `App` component so we're stuck with this one.\n *\n * On the client however, we don't want to call the DB methods,\n * so we found a little \"hack\" by checking the `req` parameter.\n */\n\n_s(MyApp, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = MyApp;\n\nMyApp.getInitialProps = /*#__PURE__*/function () {\n  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(_ref3) {\n    var ctx, req, pageProps, isClientSide, _yield$Promise$all, _yield$Promise$all2, databaseImport, userModelImport, connectToDb, UserModel, token, user, sanitizedUser;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            ctx = _ref3.ctx, req = _ref3.req;\n            pageProps = {\n              user: null\n            };\n            isClientSide = !ctx.req;\n\n            if (!isClientSide) {\n              _context2.next = 5;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", {\n              pageProps: pageProps\n            });\n\n          case 5:\n            _context2.prev = 5;\n            _context2.next = 8;\n            return Promise.all([__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../server/database */ \"./server/database.ts\")), __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../server/model/user.model */ \"./server/model/user.model.ts\"))]);\n\n          case 8:\n            _yield$Promise$all = _context2.sent;\n            _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_yield$Promise$all, 2);\n            databaseImport = _yield$Promise$all2[0];\n            userModelImport = _yield$Promise$all2[1];\n            connectToDb = databaseImport.connectToDb;\n            UserModel = userModelImport[\"default\"];\n            token = ctx.req.cookies.token;\n\n            if (token) {\n              _context2.next = 17;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", {\n              pageProps: pageProps\n            });\n\n          case 17:\n            connectToDb();\n            _context2.next = 20;\n            return UserModel.ping(token);\n\n          case 20:\n            user = _context2.sent;\n            sanitizedUser = UserModel.sanitize(user);\n            sanitizedUser.lastLogin = sanitizedUser.lastLogin.toString();\n            pageProps.user = sanitizedUser;\n            _context2.next = 29;\n            break;\n\n          case 26:\n            _context2.prev = 26;\n            _context2.t0 = _context2[\"catch\"](5);\n            console.error('[getServerSideProps][pingUser]: ', _context2.t0);\n\n          case 29:\n            return _context2.abrupt(\"return\", {\n              pageProps: pageProps\n            });\n\n          case 30:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[5, 26]]);\n  }));\n\n  return function (_x) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwiY3JlYXRlU3RvcmVXaXRoUHJlbG9hZGVkRGF0YSIsInVzZXIiLCJkZWZhdWx0VXNlclN0YXRlIiwiaW5mbyIsInVzZUVmZmVjdCIsInJ1bkxvZ1JvY2tldCIsIkxvZ1JvY2tldEluaXQiLCJ0aGVuIiwibW9kdWxlIiwiTG9nUm9ja2V0IiwiaW5pdCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcSIsImlzQ2xpZW50U2lkZSIsIlByb21pc2UiLCJhbGwiLCJkYXRhYmFzZUltcG9ydCIsInVzZXJNb2RlbEltcG9ydCIsImNvbm5lY3RUb0RiIiwiVXNlck1vZGVsIiwidG9rZW4iLCJjb29raWVzIiwicGluZyIsInNhbml0aXplZFVzZXIiLCJzYW5pdGl6ZSIsImxhc3RMb2dpbiIsInRvU3RyaW5nIiwiY29uc29sZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsS0FBVCxPQUE4QztBQUFBOztBQUFBLE1BQTdCQyxTQUE2QixRQUE3QkEsU0FBNkI7QUFBQSxNQUFsQkMsU0FBa0IsUUFBbEJBLFNBQWtCO0FBQzNELE1BQU1DLEtBQUssR0FBR0MsaUZBQTRCLENBQUM7QUFDekNDLFFBQUksa0NBQ0NDLHlFQUREO0FBRUZDLFVBQUksRUFBRUwsU0FBUyxDQUFDRztBQUZkO0FBRHFDLEdBQUQsQ0FBMUM7QUFPQUcseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDRSxRQUFNQyxZQUFZO0FBQUEsbU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2JDLDZCQURhLEdBQ0csa0pBQW9CQyxJQUFwQixDQUF5QixVQUFDQyxNQUFEO0FBQUEseUJBQVlBLE1BQU0sQ0FBQyxNQUFELENBQWxCO0FBQUEsaUJBQXpCLENBREg7QUFFbkJDLHlCQUFTLENBQUNDLElBQVYsQ0FBZSxtQkFBZjs7QUFGbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBWkwsWUFBWTtBQUFBO0FBQUE7QUFBQSxPQUFsQjs7QUFJQUEsZ0JBQVksR0FOQSxDQU9kO0FBQ0QsR0FSUSxDQUFUO0FBVUEsU0FDRSxNQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFTixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELHlGQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0FyQ3dCRixLOztLQUFBQSxLOztBQXNDeEJBLEtBQUssQ0FBQ2UsZUFBTjtBQUFBLCtMQUF3QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGVBQVQsU0FBU0EsR0FBVCxFQUFjQyxHQUFkLFNBQWNBLEdBQWQ7QUFDaEJmLHFCQURnQixHQUNKO0FBQ2hCRyxrQkFBSSxFQUFFO0FBRFUsYUFESTtBQUtoQmEsd0JBTGdCLEdBS0QsQ0FBQ0YsR0FBRyxDQUFDQyxHQUxKOztBQUFBLGlCQU9sQkMsWUFQa0I7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOENBUWI7QUFBRWhCLHVCQUFTLEVBQVRBO0FBQUYsYUFSYTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFZNEJpQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUMxRCwrSEFEMEQsRUFFMUQsK0lBRjBELENBQVosQ0FaNUI7O0FBQUE7QUFBQTtBQUFBO0FBWWJDLDBCQVphO0FBWUdDLDJCQVpIO0FBaUJaQyx1QkFqQlksR0FpQklGLGNBakJKLENBaUJaRSxXQWpCWTtBQWtCZEMscUJBbEJjLEdBa0JGRixlQUFlLFdBbEJiO0FBbUJaRyxpQkFuQlksR0FtQkZULEdBQUcsQ0FBQ0MsR0FBSixDQUFRUyxPQW5CTixDQW1CWkQsS0FuQlk7O0FBQUEsZ0JBcUJmQSxLQXJCZTtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4Q0FzQlg7QUFBRXZCLHVCQUFTLEVBQVRBO0FBQUYsYUF0Qlc7O0FBQUE7QUF5QnBCcUIsdUJBQVc7QUF6QlM7QUFBQSxtQkEyQkRDLFNBQVMsQ0FBQ0csSUFBVixDQUFlRixLQUFmLENBM0JDOztBQUFBO0FBMkJkcEIsZ0JBM0JjO0FBNEJkdUIseUJBNUJjLEdBNEJFSixTQUFTLENBQUNLLFFBQVYsQ0FBbUJ4QixJQUFuQixDQTVCRjtBQThCcEJ1Qix5QkFBYSxDQUFDRSxTQUFkLEdBQTBCRixhQUFhLENBQUNFLFNBQWQsQ0FBd0JDLFFBQXhCLEVBQTFCO0FBQ0E3QixxQkFBUyxDQUFDRyxJQUFWLEdBQWlCdUIsYUFBakI7QUEvQm9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBaUNwQkksbUJBQU8sQ0FBQ0MsS0FBUixDQUFjLGtDQUFkOztBQWpDb0I7QUFBQSw4Q0FvQ2Y7QUFBRS9CLHVCQUFTLEVBQVRBO0FBQUYsYUFwQ2U7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlV2l0aFByZWxvYWRlZERhdGEgfSBmcm9tICd+L3JlZHV4L3N0b3JlJztcbmltcG9ydCB7IGRlZmF1bHRVc2VyU3RhdGUgfSBmcm9tICd+L3JlZHV4L3VzZXIvdXNlci5yZWR1Y2VyJztcblxuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogYW55KSB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmVXaXRoUHJlbG9hZGVkRGF0YSh7XG4gICAgdXNlcjoge1xuICAgICAgLi4uZGVmYXVsdFVzZXJTdGF0ZSxcbiAgICAgIGluZm86IHBhZ2VQcm9wcy51c2VyLFxuICAgIH0sXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnN0IHJ1bkxvZ1JvY2tldCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgTG9nUm9ja2V0SW5pdCA9IGltcG9ydCgnbG9ncm9ja2V0JykudGhlbigobW9kdWxlKSA9PiBtb2R1bGVbJ2luaXQnXSk7XG4gICAgICAgIExvZ1JvY2tldC5pbml0KCdpaml2cHkvZnJvbnRlbmRybycpO1xuICAgICAgfTtcbiAgICAgIHJ1bkxvZ1JvY2tldCgpO1xuICAgIC8vIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuXG4vKipcbiAqIEZldGNoIHVzZXIgb24gYWxsIHBhZ2VzIGFuZCBhZGQgaXQgdG8gc3RvcmUuXG4gKiBUaGlzIHdheSB3ZSBhbHJlYWR5IGhhdmUgdGhlIHVzZXIgd2hlbiByZW5kZXJpbmcgbW9zdCBwYWdlcyB0aHVzIHRoZSBvdmVyYWxsXG4gKiByZW5kZXIgZXhwZXJpZW5jZSBzaG91bGQgYmUgZmFzdGVyLlxuXG4gKiDimqDimqDimqAgV0FSTklORyDimqDimqDimqBcbiAqIFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgb24gYm90aCBTRVJWRVIgYW5kIENMSUVOVC5cbiAqIFVuZm9ydHVuYXRlbHkgYGdldFNlcnZlclNpZGVQcm9wc2AgaXMgbm90IHN1cHBvcnRlZFxuICogZm9yIHRoZSBgQXBwYCBjb21wb25lbnQgc28gd2UncmUgc3R1Y2sgd2l0aCB0aGlzIG9uZS5cbiAqXG4gKiBPbiB0aGUgY2xpZW50IGhvd2V2ZXIsIHdlIGRvbid0IHdhbnQgdG8gY2FsbCB0aGUgREIgbWV0aG9kcyxcbiAqIHNvIHdlIGZvdW5kIGEgbGl0dGxlIFwiaGFja1wiIGJ5IGNoZWNraW5nIHRoZSBgcmVxYCBwYXJhbWV0ZXIuXG4gKi9cbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCwgcmVxIH0pID0+IHtcbiAgY29uc3QgcGFnZVByb3BzID0ge1xuICAgIHVzZXI6IG51bGwsXG4gIH07XG5cbiAgY29uc3QgaXNDbGllbnRTaWRlID0gIWN0eC5yZXE7XG5cbiAgaWYgKGlzQ2xpZW50U2lkZSkge1xuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBbZGF0YWJhc2VJbXBvcnQsIHVzZXJNb2RlbEltcG9ydF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBpbXBvcnQoJy4uL3NlcnZlci9kYXRhYmFzZScpLFxuICAgICAgaW1wb3J0KCcuLi9zZXJ2ZXIvbW9kZWwvdXNlci5tb2RlbCcpLFxuICAgIF0pO1xuXG4gICAgY29uc3QgeyBjb25uZWN0VG9EYiB9ID0gZGF0YWJhc2VJbXBvcnQ7XG4gICAgY29uc3QgVXNlck1vZGVsID0gdXNlck1vZGVsSW1wb3J0LmRlZmF1bHQ7XG4gICAgY29uc3QgeyB0b2tlbiB9ID0gY3R4LnJlcS5jb29raWVzO1xuXG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgcmV0dXJuIHsgcGFnZVByb3BzIH07XG4gICAgfVxuXG4gICAgY29ubmVjdFRvRGIoKTtcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwucGluZyh0b2tlbik7XG4gICAgY29uc3Qgc2FuaXRpemVkVXNlciA9IFVzZXJNb2RlbC5zYW5pdGl6ZSh1c2VyKTtcblxuICAgIHNhbml0aXplZFVzZXIubGFzdExvZ2luID0gc2FuaXRpemVkVXNlci5sYXN0TG9naW4udG9TdHJpbmcoKTtcbiAgICBwYWdlUHJvcHMudXNlciA9IHNhbml0aXplZFVzZXI7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tnZXRTZXJ2ZXJTaWRlUHJvcHNdW3BpbmdVc2VyXTogJywgZXJyKTtcbiAgfVxuXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

})