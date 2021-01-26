webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/redux/store */ \"./redux/store.ts\");\n/* harmony import */ var _redux_user_user_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/redux/user/user.reducer */ \"./redux/user/user.reducer.ts\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/nmaties/Projects/personal/frontend.ro/frontend-ssr/pages/_app.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  var store = Object(_redux_store__WEBPACK_IMPORTED_MODULE_7__[\"createStoreWithPreloadedData\"])({\n    user: _objectSpread(_objectSpread({}, _redux_user_user_reducer__WEBPACK_IMPORTED_MODULE_8__[\"defaultUserState\"]), {}, {\n      info: pageProps.user\n    })\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    // if (process.env.NODE_ENV === 'production') {\n    t; // }\n  });\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n    store: store,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  })));\n}\n/**\n * Fetch user on all pages and add it to store.\n * This way we already have the user when rendering most pages thus the overall\n * render experience should be faster.\n\n * ⚠⚠⚠ WARNING ⚠⚠⚠\n * This function gets called on both SERVER and CLIENT.\n * Unfortunately `getServerSideProps` is not supported\n * for the `App` component so we're stuck with this one.\n *\n * On the client however, we don't want to call the DB methods,\n * so we found a little \"hack\" by checking the `req` parameter.\n */\n\n_s(MyApp, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = MyApp;\n\nMyApp.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var ctx, req, pageProps, isClientSide, _yield$Promise$all, _yield$Promise$all2, databaseImport, userModelImport, connectToDb, UserModel, token, user, sanitizedUser;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            ctx = _ref2.ctx, req = _ref2.req;\n            pageProps = {\n              user: null\n            };\n            isClientSide = !ctx.req;\n\n            if (!isClientSide) {\n              _context.next = 5;\n              break;\n            }\n\n            return _context.abrupt(\"return\", {\n              pageProps: pageProps\n            });\n\n          case 5:\n            _context.prev = 5;\n            _context.next = 8;\n            return Promise.all([__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../server/database */ \"./server/database.ts\")), __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../server/model/user.model */ \"./server/model/user.model.ts\"))]);\n\n          case 8:\n            _yield$Promise$all = _context.sent;\n            _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_yield$Promise$all, 2);\n            databaseImport = _yield$Promise$all2[0];\n            userModelImport = _yield$Promise$all2[1];\n            connectToDb = databaseImport.connectToDb;\n            UserModel = userModelImport[\"default\"];\n            token = ctx.req.cookies.token;\n\n            if (token) {\n              _context.next = 17;\n              break;\n            }\n\n            return _context.abrupt(\"return\", {\n              pageProps: pageProps\n            });\n\n          case 17:\n            connectToDb();\n            _context.next = 20;\n            return UserModel.ping(token);\n\n          case 20:\n            user = _context.sent;\n            sanitizedUser = UserModel.sanitize(user);\n            sanitizedUser.lastLogin = sanitizedUser.lastLogin.toString();\n            pageProps.user = sanitizedUser;\n            _context.next = 29;\n            break;\n\n          case 26:\n            _context.prev = 26;\n            _context.t0 = _context[\"catch\"](5);\n            console.error('[getServerSideProps][pingUser]: ', _context.t0);\n\n          case 29:\n            return _context.abrupt(\"return\", {\n              pageProps: pageProps\n            });\n\n          case 30:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[5, 26]]);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwiY3JlYXRlU3RvcmVXaXRoUHJlbG9hZGVkRGF0YSIsInVzZXIiLCJkZWZhdWx0VXNlclN0YXRlIiwiaW5mbyIsInVzZUVmZmVjdCIsInQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXEiLCJpc0NsaWVudFNpZGUiLCJQcm9taXNlIiwiYWxsIiwiZGF0YWJhc2VJbXBvcnQiLCJ1c2VyTW9kZWxJbXBvcnQiLCJjb25uZWN0VG9EYiIsIlVzZXJNb2RlbCIsInRva2VuIiwiY29va2llcyIsInBpbmciLCJzYW5pdGl6ZWRVc2VyIiwic2FuaXRpemUiLCJsYXN0TG9naW4iLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLEtBQVQsT0FBOEM7QUFBQTs7QUFBQSxNQUE3QkMsU0FBNkIsUUFBN0JBLFNBQTZCO0FBQUEsTUFBbEJDLFNBQWtCLFFBQWxCQSxTQUFrQjtBQUMzRCxNQUFNQyxLQUFLLEdBQUdDLGlGQUE0QixDQUFDO0FBQ3pDQyxRQUFJLGtDQUNDQyx5RUFERDtBQUVGQyxVQUFJLEVBQUVMLFNBQVMsQ0FBQ0c7QUFGZDtBQURxQyxHQUFELENBQTFDO0FBT0FHLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0VDLEtBQUMsQ0FGVyxDQUdkO0FBQ0QsR0FKUSxDQUFUO0FBTUEsU0FDRSxNQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFTixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELHlGQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0FqQ3dCRixLOztLQUFBQSxLOztBQWtDeEJBLEtBQUssQ0FBQ1UsZUFBTjtBQUFBLCtMQUF3QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGVBQVQsU0FBU0EsR0FBVCxFQUFjQyxHQUFkLFNBQWNBLEdBQWQ7QUFDaEJWLHFCQURnQixHQUNKO0FBQ2hCRyxrQkFBSSxFQUFFO0FBRFUsYUFESTtBQUtoQlEsd0JBTGdCLEdBS0QsQ0FBQ0YsR0FBRyxDQUFDQyxHQUxKOztBQUFBLGlCQU9sQkMsWUFQa0I7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBUWI7QUFBRVgsdUJBQVMsRUFBVEE7QUFBRixhQVJhOztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVk0QlksT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FDMUQsK0hBRDBELEVBRTFELCtJQUYwRCxDQUFaLENBWjVCOztBQUFBO0FBQUE7QUFBQTtBQVliQywwQkFaYTtBQVlHQywyQkFaSDtBQWlCWkMsdUJBakJZLEdBaUJJRixjQWpCSixDQWlCWkUsV0FqQlk7QUFrQmRDLHFCQWxCYyxHQWtCRkYsZUFBZSxXQWxCYjtBQW1CWkcsaUJBbkJZLEdBbUJGVCxHQUFHLENBQUNDLEdBQUosQ0FBUVMsT0FuQk4sQ0FtQlpELEtBbkJZOztBQUFBLGdCQXFCZkEsS0FyQmU7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBc0JYO0FBQUVsQix1QkFBUyxFQUFUQTtBQUFGLGFBdEJXOztBQUFBO0FBeUJwQmdCLHVCQUFXO0FBekJTO0FBQUEsbUJBMkJEQyxTQUFTLENBQUNHLElBQVYsQ0FBZUYsS0FBZixDQTNCQzs7QUFBQTtBQTJCZGYsZ0JBM0JjO0FBNEJka0IseUJBNUJjLEdBNEJFSixTQUFTLENBQUNLLFFBQVYsQ0FBbUJuQixJQUFuQixDQTVCRjtBQThCcEJrQix5QkFBYSxDQUFDRSxTQUFkLEdBQTBCRixhQUFhLENBQUNFLFNBQWQsQ0FBd0JDLFFBQXhCLEVBQTFCO0FBQ0F4QixxQkFBUyxDQUFDRyxJQUFWLEdBQWlCa0IsYUFBakI7QUEvQm9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBaUNwQkksbUJBQU8sQ0FBQ0MsS0FBUixDQUFjLGtDQUFkOztBQWpDb0I7QUFBQSw2Q0FvQ2Y7QUFBRTFCLHVCQUFTLEVBQVRBO0FBQUYsYUFwQ2U7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlV2l0aFByZWxvYWRlZERhdGEgfSBmcm9tICd+L3JlZHV4L3N0b3JlJztcbmltcG9ydCB7IGRlZmF1bHRVc2VyU3RhdGUgfSBmcm9tICd+L3JlZHV4L3VzZXIvdXNlci5yZWR1Y2VyJztcblxuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogYW55KSB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmVXaXRoUHJlbG9hZGVkRGF0YSh7XG4gICAgdXNlcjoge1xuICAgICAgLi4uZGVmYXVsdFVzZXJTdGF0ZSxcbiAgICAgIGluZm86IHBhZ2VQcm9wcy51c2VyLFxuICAgIH0sXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRcbiAgICAvLyB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuLyoqXG4gKiBGZXRjaCB1c2VyIG9uIGFsbCBwYWdlcyBhbmQgYWRkIGl0IHRvIHN0b3JlLlxuICogVGhpcyB3YXkgd2UgYWxyZWFkeSBoYXZlIHRoZSB1c2VyIHdoZW4gcmVuZGVyaW5nIG1vc3QgcGFnZXMgdGh1cyB0aGUgb3ZlcmFsbFxuICogcmVuZGVyIGV4cGVyaWVuY2Ugc2hvdWxkIGJlIGZhc3Rlci5cblxuICog4pqg4pqg4pqgIFdBUk5JTkcg4pqg4pqg4pqgXG4gKiBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIG9uIGJvdGggU0VSVkVSIGFuZCBDTElFTlQuXG4gKiBVbmZvcnR1bmF0ZWx5IGBnZXRTZXJ2ZXJTaWRlUHJvcHNgIGlzIG5vdCBzdXBwb3J0ZWRcbiAqIGZvciB0aGUgYEFwcGAgY29tcG9uZW50IHNvIHdlJ3JlIHN0dWNrIHdpdGggdGhpcyBvbmUuXG4gKlxuICogT24gdGhlIGNsaWVudCBob3dldmVyLCB3ZSBkb24ndCB3YW50IHRvIGNhbGwgdGhlIERCIG1ldGhvZHMsXG4gKiBzbyB3ZSBmb3VuZCBhIGxpdHRsZSBcImhhY2tcIiBieSBjaGVja2luZyB0aGUgYHJlcWAgcGFyYW1ldGVyLlxuICovXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHgsIHJlcSB9KSA9PiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IHtcbiAgICB1c2VyOiBudWxsLFxuICB9O1xuXG4gIGNvbnN0IGlzQ2xpZW50U2lkZSA9ICFjdHgucmVxO1xuXG4gIGlmIChpc0NsaWVudFNpZGUpIHtcbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgW2RhdGFiYXNlSW1wb3J0LCB1c2VyTW9kZWxJbXBvcnRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgaW1wb3J0KCcuLi9zZXJ2ZXIvZGF0YWJhc2UnKSxcbiAgICAgIGltcG9ydCgnLi4vc2VydmVyL21vZGVsL3VzZXIubW9kZWwnKSxcbiAgICBdKTtcblxuICAgIGNvbnN0IHsgY29ubmVjdFRvRGIgfSA9IGRhdGFiYXNlSW1wb3J0O1xuICAgIGNvbnN0IFVzZXJNb2RlbCA9IHVzZXJNb2RlbEltcG9ydC5kZWZhdWx0O1xuICAgIGNvbnN0IHsgdG9rZW4gfSA9IGN0eC5yZXEuY29va2llcztcblxuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xuICAgIH1cblxuICAgIGNvbm5lY3RUb0RiKCk7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLnBpbmcodG9rZW4pO1xuICAgIGNvbnN0IHNhbml0aXplZFVzZXIgPSBVc2VyTW9kZWwuc2FuaXRpemUodXNlcik7XG5cbiAgICBzYW5pdGl6ZWRVc2VyLmxhc3RMb2dpbiA9IHNhbml0aXplZFVzZXIubGFzdExvZ2luLnRvU3RyaW5nKCk7XG4gICAgcGFnZVByb3BzLnVzZXIgPSBzYW5pdGl6ZWRVc2VyO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbZ2V0U2VydmVyU2lkZVByb3BzXVtwaW5nVXNlcl06ICcsIGVycik7XG4gIH1cblxuICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

})