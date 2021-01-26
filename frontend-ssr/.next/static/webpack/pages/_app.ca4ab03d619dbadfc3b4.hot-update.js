webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/redux/store */ \"./redux/store.ts\");\n/* harmony import */ var _redux_user_user_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/redux/user/user.reducer */ \"./redux/user/user.reducer.ts\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/nmaties/Projects/personal/frontend.ro/frontend-ssr/pages/_app.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  var store = Object(_redux_store__WEBPACK_IMPORTED_MODULE_7__[\"createStoreWithPreloadedData\"])({\n    user: _objectSpread(_objectSpread({}, _redux_user_user_reducer__WEBPACK_IMPORTED_MODULE_8__[\"defaultUserState\"]), {}, {\n      info: pageProps.user\n    })\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    // if (process.env.NODE_ENV === 'production') {\n    var runLogRocket = /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n        var LogRocketInit;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                LogRocketInit = __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! logrocket */ \"./node_modules/logrocket/dist/build.umd.js\", 7));\n                LogRocketInit('ijivpy/frontendro');\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function runLogRocket() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    runLogRocket(); // }\n  });\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n    store: store,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  })));\n}\n/**\n * Fetch user on all pages and add it to store.\n * This way we already have the user when rendering most pages thus the overall\n * render experience should be faster.\n\n * ⚠⚠⚠ WARNING ⚠⚠⚠\n * This function gets called on both SERVER and CLIENT.\n * Unfortunately `getServerSideProps` is not supported\n * for the `App` component so we're stuck with this one.\n *\n * On the client however, we don't want to call the DB methods,\n * so we found a little \"hack\" by checking the `req` parameter.\n */\n\n_s(MyApp, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = MyApp;\n\nMyApp.getInitialProps = /*#__PURE__*/function () {\n  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(_ref3) {\n    var ctx, req, pageProps, isClientSide, _yield$Promise$all, _yield$Promise$all2, databaseImport, userModelImport, connectToDb, UserModel, token, user, sanitizedUser;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            ctx = _ref3.ctx, req = _ref3.req;\n            pageProps = {\n              user: null\n            };\n            isClientSide = !ctx.req;\n\n            if (!isClientSide) {\n              _context2.next = 5;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", {\n              pageProps: pageProps\n            });\n\n          case 5:\n            _context2.prev = 5;\n            _context2.next = 8;\n            return Promise.all([__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../server/database */ \"./server/database.ts\")), __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../server/model/user.model */ \"./server/model/user.model.ts\"))]);\n\n          case 8:\n            _yield$Promise$all = _context2.sent;\n            _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_yield$Promise$all, 2);\n            databaseImport = _yield$Promise$all2[0];\n            userModelImport = _yield$Promise$all2[1];\n            connectToDb = databaseImport.connectToDb;\n            UserModel = userModelImport[\"default\"];\n            token = ctx.req.cookies.token;\n\n            if (token) {\n              _context2.next = 17;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", {\n              pageProps: pageProps\n            });\n\n          case 17:\n            connectToDb();\n            _context2.next = 20;\n            return UserModel.ping(token);\n\n          case 20:\n            user = _context2.sent;\n            sanitizedUser = UserModel.sanitize(user);\n            sanitizedUser.lastLogin = sanitizedUser.lastLogin.toString();\n            pageProps.user = sanitizedUser;\n            _context2.next = 29;\n            break;\n\n          case 26:\n            _context2.prev = 26;\n            _context2.t0 = _context2[\"catch\"](5);\n            console.error('[getServerSideProps][pingUser]: ', _context2.t0);\n\n          case 29:\n            return _context2.abrupt(\"return\", {\n              pageProps: pageProps\n            });\n\n          case 30:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[5, 26]]);\n  }));\n\n  return function (_x) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwiY3JlYXRlU3RvcmVXaXRoUHJlbG9hZGVkRGF0YSIsInVzZXIiLCJkZWZhdWx0VXNlclN0YXRlIiwiaW5mbyIsInVzZUVmZmVjdCIsInJ1bkxvZ1JvY2tldCIsIkxvZ1JvY2tldEluaXQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXEiLCJpc0NsaWVudFNpZGUiLCJQcm9taXNlIiwiYWxsIiwiZGF0YWJhc2VJbXBvcnQiLCJ1c2VyTW9kZWxJbXBvcnQiLCJjb25uZWN0VG9EYiIsIlVzZXJNb2RlbCIsInRva2VuIiwiY29va2llcyIsInBpbmciLCJzYW5pdGl6ZWRVc2VyIiwic2FuaXRpemUiLCJsYXN0TG9naW4iLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLEtBQVQsT0FBOEM7QUFBQTs7QUFBQSxNQUE3QkMsU0FBNkIsUUFBN0JBLFNBQTZCO0FBQUEsTUFBbEJDLFNBQWtCLFFBQWxCQSxTQUFrQjtBQUMzRCxNQUFNQyxLQUFLLEdBQUdDLGlGQUE0QixDQUFDO0FBQ3pDQyxRQUFJLGtDQUNDQyx5RUFERDtBQUVGQyxVQUFJLEVBQUVMLFNBQVMsQ0FBQ0c7QUFGZDtBQURxQyxHQUFELENBQTFDO0FBT0FHLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0UsUUFBTUMsWUFBWTtBQUFBLG1NQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiQyw2QkFEYSxHQUNHLGlKQURIO0FBRW5CQSw2QkFBYSxDQUFDLG1CQUFELENBQWI7O0FBRm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVpELFlBQVk7QUFBQTtBQUFBO0FBQUEsT0FBbEI7O0FBSUFBLGdCQUFZLEdBTkEsQ0FPZDtBQUNELEdBUlEsQ0FBVDtBQVVBLFNBQ0UsTUFBQyxvREFBRDtBQUFVLFNBQUssRUFBRU4sS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCx5RkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERjtBQUtEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBckN3QkYsSzs7S0FBQUEsSzs7QUFzQ3hCQSxLQUFLLENBQUNXLGVBQU47QUFBQSwrTEFBd0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxlQUFULFNBQVNBLEdBQVQsRUFBY0MsR0FBZCxTQUFjQSxHQUFkO0FBQ2hCWCxxQkFEZ0IsR0FDSjtBQUNoQkcsa0JBQUksRUFBRTtBQURVLGFBREk7QUFLaEJTLHdCQUxnQixHQUtELENBQUNGLEdBQUcsQ0FBQ0MsR0FMSjs7QUFBQSxpQkFPbEJDLFlBUGtCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQVFiO0FBQUVaLHVCQUFTLEVBQVRBO0FBQUYsYUFSYTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFZNEJhLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLENBQzFELCtIQUQwRCxFQUUxRCwrSUFGMEQsQ0FBWixDQVo1Qjs7QUFBQTtBQUFBO0FBQUE7QUFZYkMsMEJBWmE7QUFZR0MsMkJBWkg7QUFpQlpDLHVCQWpCWSxHQWlCSUYsY0FqQkosQ0FpQlpFLFdBakJZO0FBa0JkQyxxQkFsQmMsR0FrQkZGLGVBQWUsV0FsQmI7QUFtQlpHLGlCQW5CWSxHQW1CRlQsR0FBRyxDQUFDQyxHQUFKLENBQVFTLE9BbkJOLENBbUJaRCxLQW5CWTs7QUFBQSxnQkFxQmZBLEtBckJlO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQXNCWDtBQUFFbkIsdUJBQVMsRUFBVEE7QUFBRixhQXRCVzs7QUFBQTtBQXlCcEJpQix1QkFBVztBQXpCUztBQUFBLG1CQTJCREMsU0FBUyxDQUFDRyxJQUFWLENBQWVGLEtBQWYsQ0EzQkM7O0FBQUE7QUEyQmRoQixnQkEzQmM7QUE0QmRtQix5QkE1QmMsR0E0QkVKLFNBQVMsQ0FBQ0ssUUFBVixDQUFtQnBCLElBQW5CLENBNUJGO0FBOEJwQm1CLHlCQUFhLENBQUNFLFNBQWQsR0FBMEJGLGFBQWEsQ0FBQ0UsU0FBZCxDQUF3QkMsUUFBeEIsRUFBMUI7QUFDQXpCLHFCQUFTLENBQUNHLElBQVYsR0FBaUJtQixhQUFqQjtBQS9Cb0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFpQ3BCSSxtQkFBTyxDQUFDQyxLQUFSLENBQWMsa0NBQWQ7O0FBakNvQjtBQUFBLDhDQW9DZjtBQUFFM0IsdUJBQVMsRUFBVEE7QUFBRixhQXBDZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmVXaXRoUHJlbG9hZGVkRGF0YSB9IGZyb20gJ34vcmVkdXgvc3RvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdFVzZXJTdGF0ZSB9IGZyb20gJ34vcmVkdXgvdXNlci91c2VyLnJlZHVjZXInO1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBhbnkpIHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZVdpdGhQcmVsb2FkZWREYXRhKHtcbiAgICB1c2VyOiB7XG4gICAgICAuLi5kZWZhdWx0VXNlclN0YXRlLFxuICAgICAgaW5mbzogcGFnZVByb3BzLnVzZXIsXG4gICAgfSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc3QgcnVuTG9nUm9ja2V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBMb2dSb2NrZXRJbml0ID0gaW1wb3J0KCdsb2dyb2NrZXQnKTtcbiAgICAgICAgTG9nUm9ja2V0SW5pdCgnaWppdnB5L2Zyb250ZW5kcm8nKTtcbiAgICAgIH07XG4gICAgICBydW5Mb2dSb2NrZXQoKTtcbiAgICAvLyB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuLyoqXG4gKiBGZXRjaCB1c2VyIG9uIGFsbCBwYWdlcyBhbmQgYWRkIGl0IHRvIHN0b3JlLlxuICogVGhpcyB3YXkgd2UgYWxyZWFkeSBoYXZlIHRoZSB1c2VyIHdoZW4gcmVuZGVyaW5nIG1vc3QgcGFnZXMgdGh1cyB0aGUgb3ZlcmFsbFxuICogcmVuZGVyIGV4cGVyaWVuY2Ugc2hvdWxkIGJlIGZhc3Rlci5cblxuICog4pqg4pqg4pqgIFdBUk5JTkcg4pqg4pqg4pqgXG4gKiBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIG9uIGJvdGggU0VSVkVSIGFuZCBDTElFTlQuXG4gKiBVbmZvcnR1bmF0ZWx5IGBnZXRTZXJ2ZXJTaWRlUHJvcHNgIGlzIG5vdCBzdXBwb3J0ZWRcbiAqIGZvciB0aGUgYEFwcGAgY29tcG9uZW50IHNvIHdlJ3JlIHN0dWNrIHdpdGggdGhpcyBvbmUuXG4gKlxuICogT24gdGhlIGNsaWVudCBob3dldmVyLCB3ZSBkb24ndCB3YW50IHRvIGNhbGwgdGhlIERCIG1ldGhvZHMsXG4gKiBzbyB3ZSBmb3VuZCBhIGxpdHRsZSBcImhhY2tcIiBieSBjaGVja2luZyB0aGUgYHJlcWAgcGFyYW1ldGVyLlxuICovXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHgsIHJlcSB9KSA9PiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IHtcbiAgICB1c2VyOiBudWxsLFxuICB9O1xuXG4gIGNvbnN0IGlzQ2xpZW50U2lkZSA9ICFjdHgucmVxO1xuXG4gIGlmIChpc0NsaWVudFNpZGUpIHtcbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgW2RhdGFiYXNlSW1wb3J0LCB1c2VyTW9kZWxJbXBvcnRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgaW1wb3J0KCcuLi9zZXJ2ZXIvZGF0YWJhc2UnKSxcbiAgICAgIGltcG9ydCgnLi4vc2VydmVyL21vZGVsL3VzZXIubW9kZWwnKSxcbiAgICBdKTtcblxuICAgIGNvbnN0IHsgY29ubmVjdFRvRGIgfSA9IGRhdGFiYXNlSW1wb3J0O1xuICAgIGNvbnN0IFVzZXJNb2RlbCA9IHVzZXJNb2RlbEltcG9ydC5kZWZhdWx0O1xuICAgIGNvbnN0IHsgdG9rZW4gfSA9IGN0eC5yZXEuY29va2llcztcblxuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xuICAgIH1cblxuICAgIGNvbm5lY3RUb0RiKCk7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLnBpbmcodG9rZW4pO1xuICAgIGNvbnN0IHNhbml0aXplZFVzZXIgPSBVc2VyTW9kZWwuc2FuaXRpemUodXNlcik7XG5cbiAgICBzYW5pdGl6ZWRVc2VyLmxhc3RMb2dpbiA9IHNhbml0aXplZFVzZXIubGFzdExvZ2luLnRvU3RyaW5nKCk7XG4gICAgcGFnZVByb3BzLnVzZXIgPSBzYW5pdGl6ZWRVc2VyO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbZ2V0U2VydmVyU2lkZVByb3BzXVtwaW5nVXNlcl06ICcsIGVycik7XG4gIH1cblxuICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

})