module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/_app": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/redux/store */ \"./redux/store.ts\");\n/* harmony import */ var _redux_user_user_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/redux/user/user.reducer */ \"./redux/user/user.reducer.ts\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/nmaties/Projects/personal/frontend.ro/frontend-ssr/pages/_app.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const store = Object(_redux_store__WEBPACK_IMPORTED_MODULE_2__[\"createStoreWithPreloadedData\"])({\n    user: _objectSpread(_objectSpread({}, _redux_user_user_reducer__WEBPACK_IMPORTED_MODULE_3__[\"defaultUserState\"]), {}, {\n      info: pageProps.user\n    })\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    // if (process.env.NODE_ENV === 'production') {\n    const runLogRocket = async () => {\n      const LogRocket = (await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! logrocket */ \"logrocket\", 7))).default;\n      LogRocket.init('ijivpy/frontendro');\n    };\n\n    runLogRocket(); // }\n  });\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: store,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  })));\n}\n/**\n * Fetch user on all pages and add it to store.\n * This way we already have the user when rendering most pages thus the overall\n * render experience should be faster.\n\n * ⚠⚠⚠ WARNING ⚠⚠⚠\n * This function gets called on both SERVER and CLIENT.\n * Unfortunately `getServerSideProps` is not supported\n * for the `App` component so we're stuck with this one.\n *\n * On the client however, we don't want to call the DB methods,\n * so we found a little \"hack\" by checking the `req` parameter.\n */\n\nMyApp.getInitialProps = async ({\n  ctx,\n  req\n}) => {\n  const pageProps = {\n    user: null\n  };\n  const isClientSide = !ctx.req;\n\n  if (isClientSide) {\n    return {\n      pageProps\n    };\n  }\n\n  try {\n    const [databaseImport, userModelImport] = await Promise.all([__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../server/database */ \"./server/database.ts\")), __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../server/model/user.model */ \"./server/model/user.model.ts\"))]);\n    const {\n      connectToDb\n    } = databaseImport;\n    const UserModel = userModelImport.default;\n    const {\n      token\n    } = ctx.req.cookies;\n\n    if (!token) {\n      return {\n        pageProps\n      };\n    }\n\n    connectToDb();\n    const user = await UserModel.ping(token);\n    const sanitizedUser = UserModel.sanitize(user);\n    sanitizedUser.lastLogin = sanitizedUser.lastLogin.toString();\n    pageProps.user = sanitizedUser;\n  } catch (err) {\n    console.error('[getServerSideProps][pingUser]: ', err);\n  }\n\n  return {\n    pageProps\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJjcmVhdGVTdG9yZVdpdGhQcmVsb2FkZWREYXRhIiwidXNlciIsImRlZmF1bHRVc2VyU3RhdGUiLCJpbmZvIiwidXNlRWZmZWN0IiwicnVuTG9nUm9ja2V0IiwiTG9nUm9ja2V0IiwiZGVmYXVsdCIsImluaXQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXEiLCJpc0NsaWVudFNpZGUiLCJkYXRhYmFzZUltcG9ydCIsInVzZXJNb2RlbEltcG9ydCIsIlByb21pc2UiLCJhbGwiLCJjb25uZWN0VG9EYiIsIlVzZXJNb2RlbCIsInRva2VuIiwiY29va2llcyIsInBpbmciLCJzYW5pdGl6ZWRVc2VyIiwic2FuaXRpemUiLCJsYXN0TG9naW4iLCJ0b1N0cmluZyIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUE4QztBQUMzRCxRQUFNQyxLQUFLLEdBQUdDLGlGQUE0QixDQUFDO0FBQ3pDQyxRQUFJLGtDQUNDQyx5RUFERDtBQUVGQyxVQUFJLEVBQUVMLFNBQVMsQ0FBQ0c7QUFGZDtBQURxQyxHQUFELENBQTFDO0FBT0FHLHlEQUFTLENBQUMsTUFBTTtBQUNkO0FBQ0EsVUFBTUMsWUFBWSxHQUFHLFlBQVk7QUFDL0IsWUFBTUMsU0FBUyxHQUFHLENBQUMsTUFBTSx3R0FBUCxFQUE0QkMsT0FBOUM7QUFDQUQsZUFBUyxDQUFDRSxJQUFWLENBQWUsbUJBQWY7QUFDRCxLQUhEOztBQUlBSCxnQkFBWSxHQU5FLENBT2Q7QUFDRCxHQVJRLENBQVQ7QUFVQSxTQUNFLE1BQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVOLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQsZUFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERjtBQUtEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FGLEtBQUssQ0FBQ2EsZUFBTixHQUF3QixPQUFPO0FBQUVDLEtBQUY7QUFBT0M7QUFBUCxDQUFQLEtBQXdCO0FBQzlDLFFBQU1iLFNBQVMsR0FBRztBQUNoQkcsUUFBSSxFQUFFO0FBRFUsR0FBbEI7QUFJQSxRQUFNVyxZQUFZLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDQyxHQUExQjs7QUFFQSxNQUFJQyxZQUFKLEVBQWtCO0FBQ2hCLFdBQU87QUFBRWQ7QUFBRixLQUFQO0FBQ0Q7O0FBRUQsTUFBSTtBQUNGLFVBQU0sQ0FBQ2UsY0FBRCxFQUFpQkMsZUFBakIsSUFBb0MsTUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FDMUQsK0hBRDBELEVBRTFELCtJQUYwRCxDQUFaLENBQWhEO0FBS0EsVUFBTTtBQUFFQztBQUFGLFFBQWtCSixjQUF4QjtBQUNBLFVBQU1LLFNBQVMsR0FBR0osZUFBZSxDQUFDUCxPQUFsQztBQUNBLFVBQU07QUFBRVk7QUFBRixRQUFZVCxHQUFHLENBQUNDLEdBQUosQ0FBUVMsT0FBMUI7O0FBRUEsUUFBSSxDQUFDRCxLQUFMLEVBQVk7QUFDVixhQUFPO0FBQUVyQjtBQUFGLE9BQVA7QUFDRDs7QUFFRG1CLGVBQVc7QUFFWCxVQUFNaEIsSUFBSSxHQUFHLE1BQU1pQixTQUFTLENBQUNHLElBQVYsQ0FBZUYsS0FBZixDQUFuQjtBQUNBLFVBQU1HLGFBQWEsR0FBR0osU0FBUyxDQUFDSyxRQUFWLENBQW1CdEIsSUFBbkIsQ0FBdEI7QUFFQXFCLGlCQUFhLENBQUNFLFNBQWQsR0FBMEJGLGFBQWEsQ0FBQ0UsU0FBZCxDQUF3QkMsUUFBeEIsRUFBMUI7QUFDQTNCLGFBQVMsQ0FBQ0csSUFBVixHQUFpQnFCLGFBQWpCO0FBQ0QsR0FyQkQsQ0FxQkUsT0FBT0ksR0FBUCxFQUFZO0FBQ1pDLFdBQU8sQ0FBQ0MsS0FBUixDQUFjLGtDQUFkLEVBQWtERixHQUFsRDtBQUNEOztBQUVELFNBQU87QUFBRTVCO0FBQUYsR0FBUDtBQUNELENBckNEIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZVdpdGhQcmVsb2FkZWREYXRhIH0gZnJvbSAnfi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyBkZWZhdWx0VXNlclN0YXRlIH0gZnJvbSAnfi9yZWR1eC91c2VyL3VzZXIucmVkdWNlcic7XG5cbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IGFueSkge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aFByZWxvYWRlZERhdGEoe1xuICAgIHVzZXI6IHtcbiAgICAgIC4uLmRlZmF1bHRVc2VyU3RhdGUsXG4gICAgICBpbmZvOiBwYWdlUHJvcHMudXNlcixcbiAgICB9LFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgcnVuTG9nUm9ja2V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgTG9nUm9ja2V0ID0gKGF3YWl0IGltcG9ydCgnbG9ncm9ja2V0JykpLmRlZmF1bHQ7XG4gICAgICBMb2dSb2NrZXQuaW5pdCgnaWppdnB5L2Zyb250ZW5kcm8nKTtcbiAgICB9O1xuICAgIHJ1bkxvZ1JvY2tldCgpO1xuICAgIC8vIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuXG4vKipcbiAqIEZldGNoIHVzZXIgb24gYWxsIHBhZ2VzIGFuZCBhZGQgaXQgdG8gc3RvcmUuXG4gKiBUaGlzIHdheSB3ZSBhbHJlYWR5IGhhdmUgdGhlIHVzZXIgd2hlbiByZW5kZXJpbmcgbW9zdCBwYWdlcyB0aHVzIHRoZSBvdmVyYWxsXG4gKiByZW5kZXIgZXhwZXJpZW5jZSBzaG91bGQgYmUgZmFzdGVyLlxuXG4gKiDimqDimqDimqAgV0FSTklORyDimqDimqDimqBcbiAqIFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgb24gYm90aCBTRVJWRVIgYW5kIENMSUVOVC5cbiAqIFVuZm9ydHVuYXRlbHkgYGdldFNlcnZlclNpZGVQcm9wc2AgaXMgbm90IHN1cHBvcnRlZFxuICogZm9yIHRoZSBgQXBwYCBjb21wb25lbnQgc28gd2UncmUgc3R1Y2sgd2l0aCB0aGlzIG9uZS5cbiAqXG4gKiBPbiB0aGUgY2xpZW50IGhvd2V2ZXIsIHdlIGRvbid0IHdhbnQgdG8gY2FsbCB0aGUgREIgbWV0aG9kcyxcbiAqIHNvIHdlIGZvdW5kIGEgbGl0dGxlIFwiaGFja1wiIGJ5IGNoZWNraW5nIHRoZSBgcmVxYCBwYXJhbWV0ZXIuXG4gKi9cbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCwgcmVxIH0pID0+IHtcbiAgY29uc3QgcGFnZVByb3BzID0ge1xuICAgIHVzZXI6IG51bGwsXG4gIH07XG5cbiAgY29uc3QgaXNDbGllbnRTaWRlID0gIWN0eC5yZXE7XG5cbiAgaWYgKGlzQ2xpZW50U2lkZSkge1xuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBbZGF0YWJhc2VJbXBvcnQsIHVzZXJNb2RlbEltcG9ydF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBpbXBvcnQoJy4uL3NlcnZlci9kYXRhYmFzZScpLFxuICAgICAgaW1wb3J0KCcuLi9zZXJ2ZXIvbW9kZWwvdXNlci5tb2RlbCcpLFxuICAgIF0pO1xuXG4gICAgY29uc3QgeyBjb25uZWN0VG9EYiB9ID0gZGF0YWJhc2VJbXBvcnQ7XG4gICAgY29uc3QgVXNlck1vZGVsID0gdXNlck1vZGVsSW1wb3J0LmRlZmF1bHQ7XG4gICAgY29uc3QgeyB0b2tlbiB9ID0gY3R4LnJlcS5jb29raWVzO1xuXG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgcmV0dXJuIHsgcGFnZVByb3BzIH07XG4gICAgfVxuXG4gICAgY29ubmVjdFRvRGIoKTtcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyTW9kZWwucGluZyh0b2tlbik7XG4gICAgY29uc3Qgc2FuaXRpemVkVXNlciA9IFVzZXJNb2RlbC5zYW5pdGl6ZSh1c2VyKTtcblxuICAgIHNhbml0aXplZFVzZXIubGFzdExvZ2luID0gc2FuaXRpemVkVXNlci5sYXN0TG9naW4udG9TdHJpbmcoKTtcbiAgICBwYWdlUHJvcHMudXNlciA9IHNhbml0aXplZFVzZXI7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tnZXRTZXJ2ZXJTaWRlUHJvcHNdW3BpbmdVc2VyXTogJywgZXJyKTtcbiAgfVxuXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./redux/exercise-submissions/exercise-submissions.actions.ts":
/*!********************************************************************!*\
  !*** ./redux/exercise-submissions/exercise-submissions.actions.ts ***!
  \********************************************************************/
/*! exports provided: EXERCISE_SUBMISSIONS, addSubmission, removeSubmission, updateSubmission, loadSubmissions, searchSubmissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EXERCISE_SUBMISSIONS\", function() { return EXERCISE_SUBMISSIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addSubmission\", function() { return addSubmission; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeSubmission\", function() { return removeSubmission; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateSubmission\", function() { return updateSubmission; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSubmissions\", function() { return loadSubmissions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchSubmissions\", function() { return searchSubmissions; });\nconst ADD = 'exercise-submissions/ADD';\nconst REMOVE = 'exercise-submissions/REMOVE';\nconst UPDATE = 'exercise-submissions/UPDATE';\nconst LOAD = 'exercise-submissions/LOAD';\nconst SEARCH = 'exercise-submissions/SEARCH';\nconst EXERCISE_SUBMISSIONS = {\n  ADD,\n  REMOVE,\n  UPDATE,\n  LOAD,\n  SEARCH\n};\nconst addSubmission = (submission, index = 0) => ({\n  type: ADD,\n  payload: {\n    submission,\n    index\n  }\n});\nconst removeSubmission = id => ({\n  type: REMOVE,\n  payload: {\n    id\n  }\n});\nconst updateSubmission = (id, newSubmission) => ({\n  type: UPDATE,\n  payload: {\n    id,\n    newSubmission\n  }\n});\nconst loadSubmissions = newSubmissions => ({\n  type: LOAD,\n  payload: {\n    newSubmissions\n  }\n});\nconst searchSubmissions = (query, newSubmissions) => ({\n  type: SEARCH,\n  payload: {\n    query,\n    newSubmissions\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9leGVyY2lzZS1zdWJtaXNzaW9ucy9leGVyY2lzZS1zdWJtaXNzaW9ucy5hY3Rpb25zLnRzPzhhYTUiXSwibmFtZXMiOlsiQUREIiwiUkVNT1ZFIiwiVVBEQVRFIiwiTE9BRCIsIlNFQVJDSCIsIkVYRVJDSVNFX1NVQk1JU1NJT05TIiwiYWRkU3VibWlzc2lvbiIsInN1Ym1pc3Npb24iLCJpbmRleCIsInR5cGUiLCJwYXlsb2FkIiwicmVtb3ZlU3VibWlzc2lvbiIsImlkIiwidXBkYXRlU3VibWlzc2lvbiIsIm5ld1N1Ym1pc3Npb24iLCJsb2FkU3VibWlzc2lvbnMiLCJuZXdTdWJtaXNzaW9ucyIsInNlYXJjaFN1Ym1pc3Npb25zIiwicXVlcnkiXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTUEsR0FBRyxHQUFHLDBCQUFaO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLDZCQUFmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLDZCQUFmO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLDJCQUFiO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLDZCQUFmO0FBRU8sTUFBTUMsb0JBQW9CLEdBQUc7QUFDbENMLEtBRGtDO0FBRWxDQyxRQUZrQztBQUdsQ0MsUUFIa0M7QUFJbENDLE1BSmtDO0FBS2xDQztBQUxrQyxDQUE3QjtBQVFBLE1BQU1FLGFBQWEsR0FBRyxDQUFDQyxVQUFELEVBQXdDQyxLQUFLLEdBQUcsQ0FBaEQsTUFBdUQ7QUFDbEZDLE1BQUksRUFBRVQsR0FENEU7QUFFbEZVLFNBQU8sRUFBRTtBQUNQSCxjQURPO0FBRVBDO0FBRk87QUFGeUUsQ0FBdkQsQ0FBdEI7QUFPQSxNQUFNRyxnQkFBZ0IsR0FBSUMsRUFBRCxLQUE0QjtBQUMxREgsTUFBSSxFQUFFUixNQURvRDtBQUUxRFMsU0FBTyxFQUFFO0FBQ1BFO0FBRE87QUFGaUQsQ0FBNUIsQ0FBekI7QUFNQSxNQUFNQyxnQkFBZ0IsR0FBRyxDQUFDRCxFQUFELEVBQWFFLGFBQWIsTUFBNEM7QUFDMUVMLE1BQUksRUFBRVAsTUFEb0U7QUFFMUVRLFNBQU8sRUFBRTtBQUNQRSxNQURPO0FBRVBFO0FBRk87QUFGaUUsQ0FBNUMsQ0FBekI7QUFRQSxNQUFNQyxlQUFlLEdBQUlDLGNBQUQsS0FBbUM7QUFDaEVQLE1BQUksRUFBRU4sSUFEMEQ7QUFFaEVPLFNBQU8sRUFBRTtBQUNQTTtBQURPO0FBRnVELENBQW5DLENBQXhCO0FBT0EsTUFBTUMsaUJBQWlCLEdBQUcsQ0FBQ0MsS0FBRCxFQUFnQkYsY0FBaEIsTUFBa0Q7QUFDakZQLE1BQUksRUFBRUwsTUFEMkU7QUFFakZNLFNBQU8sRUFBRTtBQUNQUSxTQURPO0FBRVBGO0FBRk87QUFGd0UsQ0FBbEQsQ0FBMUIiLCJmaWxlIjoiLi9yZWR1eC9leGVyY2lzZS1zdWJtaXNzaW9ucy9leGVyY2lzZS1zdWJtaXNzaW9ucy5hY3Rpb25zLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3VibWlzc2lvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBBREQgPSAnZXhlcmNpc2Utc3VibWlzc2lvbnMvQUREJztcbmNvbnN0IFJFTU9WRSA9ICdleGVyY2lzZS1zdWJtaXNzaW9ucy9SRU1PVkUnO1xuY29uc3QgVVBEQVRFID0gJ2V4ZXJjaXNlLXN1Ym1pc3Npb25zL1VQREFURSc7XG5jb25zdCBMT0FEID0gJ2V4ZXJjaXNlLXN1Ym1pc3Npb25zL0xPQUQnO1xuY29uc3QgU0VBUkNIID0gJ2V4ZXJjaXNlLXN1Ym1pc3Npb25zL1NFQVJDSCc7XG5cbmV4cG9ydCBjb25zdCBFWEVSQ0lTRV9TVUJNSVNTSU9OUyA9IHtcbiAgQURELFxuICBSRU1PVkUsXG4gIFVQREFURSxcbiAgTE9BRCxcbiAgU0VBUkNILFxufTtcblxuZXhwb3J0IGNvbnN0IGFkZFN1Ym1pc3Npb24gPSAoc3VibWlzc2lvbjogU3VibWlzc2lvbiB8IFN1Ym1pc3Npb25bXSwgaW5kZXggPSAwKSA9PiAoe1xuICB0eXBlOiBBREQsXG4gIHBheWxvYWQ6IHtcbiAgICBzdWJtaXNzaW9uLFxuICAgIGluZGV4LFxuICB9LFxufSk7XG5leHBvcnQgY29uc3QgcmVtb3ZlU3VibWlzc2lvbiA9IChpZDogc3RyaW5nIHwgc3RyaW5nW10pID0+ICh7XG4gIHR5cGU6IFJFTU9WRSxcbiAgcGF5bG9hZDoge1xuICAgIGlkLFxuICB9LFxufSk7XG5leHBvcnQgY29uc3QgdXBkYXRlU3VibWlzc2lvbiA9IChpZDogc3RyaW5nLCBuZXdTdWJtaXNzaW9uOiBTdWJtaXNzaW9uKSA9PiAoe1xuICB0eXBlOiBVUERBVEUsXG4gIHBheWxvYWQ6IHtcbiAgICBpZCxcbiAgICBuZXdTdWJtaXNzaW9uLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2FkU3VibWlzc2lvbnMgPSAobmV3U3VibWlzc2lvbnM6IFN1Ym1pc3Npb25bXSkgPT4gKHtcbiAgdHlwZTogTE9BRCxcbiAgcGF5bG9hZDoge1xuICAgIG5ld1N1Ym1pc3Npb25zLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hTdWJtaXNzaW9ucyA9IChxdWVyeTogc3RyaW5nLCBuZXdTdWJtaXNzaW9uczogU3VibWlzc2lvbltdKSA9PiAoe1xuICB0eXBlOiBTRUFSQ0gsXG4gIHBheWxvYWQ6IHtcbiAgICBxdWVyeSxcbiAgICBuZXdTdWJtaXNzaW9ucyxcbiAgfSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/exercise-submissions/exercise-submissions.actions.ts\n");

/***/ }),

/***/ "./redux/exercise-submissions/exercise-submissions.reducer.ts":
/*!********************************************************************!*\
  !*** ./redux/exercise-submissions/exercise-submissions.reducer.ts ***!
  \********************************************************************/
/*! exports provided: submissionReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submissionReducer\", function() { return submissionReducer; });\n/* harmony import */ var _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exercise-submissions.actions */ \"./redux/exercise-submissions/exercise-submissions.actions.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  submissions: undefined,\n  search: '',\n  page: 0,\n  end: false\n};\nconst submissionReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_0__[\"EXERCISE_SUBMISSIONS\"].ADD:\n      {\n        let {\n          index,\n          submission\n        } = action.payload;\n\n        if (!Array.isArray(submission)) {\n          submission = [submission];\n        }\n\n        return _objectSpread(_objectSpread({}, state), {}, {\n          submissions: [...state.submissions.slice(0, index), ...submission, ...state.submissions.slice(index)]\n        });\n      }\n\n    case _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_0__[\"EXERCISE_SUBMISSIONS\"].REMOVE:\n      {\n        let {\n          id\n        } = action.payload;\n\n        if (!Array.isArray(id)) {\n          id = [id];\n        }\n\n        return _objectSpread(_objectSpread({}, state), {}, {\n          submissions: state.submissions.filter(submission => !id.includes(submission._id))\n        });\n      }\n\n    case _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_0__[\"EXERCISE_SUBMISSIONS\"].UPDATE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        submissions: state.submissions.map(submission => {\n          const {\n            id,\n            newSubmission\n          } = action.payload;\n\n          if (submission._id === id) {\n            return _objectSpread(_objectSpread({}, submission), newSubmission);\n          }\n\n          return submission;\n        })\n      });\n\n    case _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_0__[\"EXERCISE_SUBMISSIONS\"].LOAD:\n      {\n        const {\n          newSubmissions\n        } = action.payload;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          submissions: state.submissions ? [...state.submissions, ...newSubmissions] : newSubmissions,\n          page: state.page + 1,\n          end: newSubmissions.length === 0\n        });\n      }\n\n    case _exercise_submissions_actions__WEBPACK_IMPORTED_MODULE_0__[\"EXERCISE_SUBMISSIONS\"].SEARCH:\n      {\n        const {\n          query,\n          newSubmissions\n        } = action.payload;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          submissions: newSubmissions,\n          search: query,\n          page: 1,\n          end: newSubmissions.length === 0\n        });\n      }\n\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (submissionReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9leGVyY2lzZS1zdWJtaXNzaW9ucy9leGVyY2lzZS1zdWJtaXNzaW9ucy5yZWR1Y2VyLnRzP2VkNmQiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwic3VibWlzc2lvbnMiLCJ1bmRlZmluZWQiLCJzZWFyY2giLCJwYWdlIiwiZW5kIiwic3VibWlzc2lvblJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJFWEVSQ0lTRV9TVUJNSVNTSU9OUyIsIkFERCIsImluZGV4Iiwic3VibWlzc2lvbiIsInBheWxvYWQiLCJBcnJheSIsImlzQXJyYXkiLCJzbGljZSIsIlJFTU9WRSIsImlkIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJfaWQiLCJVUERBVEUiLCJtYXAiLCJuZXdTdWJtaXNzaW9uIiwiTE9BRCIsIm5ld1N1Ym1pc3Npb25zIiwibGVuZ3RoIiwiU0VBUkNIIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBO0FBRUEsTUFBTUEsWUFBNkIsR0FBRztBQUNwQ0MsYUFBVyxFQUFFQyxTQUR1QjtBQUVwQ0MsUUFBTSxFQUFFLEVBRjRCO0FBR3BDQyxNQUFJLEVBQUUsQ0FIOEI7QUFJcENDLEtBQUcsRUFBRTtBQUorQixDQUF0QztBQU1PLE1BQU1DLGlCQUFpQixHQUFHLENBQUNDLEtBQUssR0FBR1AsWUFBVCxFQUF1QlEsTUFBdkIsS0FDWjtBQUNuQixVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyxrRkFBb0IsQ0FBQ0MsR0FBMUI7QUFBK0I7QUFDN0IsWUFBSTtBQUFFQyxlQUFGO0FBQVNDO0FBQVQsWUFBd0JMLE1BQU0sQ0FBQ00sT0FBbkM7O0FBQ0EsWUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsVUFBZCxDQUFMLEVBQWdDO0FBQzlCQSxvQkFBVSxHQUFHLENBQUNBLFVBQUQsQ0FBYjtBQUNEOztBQUNELCtDQUNLTixLQURMO0FBRUVOLHFCQUFXLEVBQUUsQ0FBQyxHQUFHTSxLQUFLLENBQUNOLFdBQU4sQ0FBa0JnQixLQUFsQixDQUF3QixDQUF4QixFQUEyQkwsS0FBM0IsQ0FBSixFQUNYLEdBQUdDLFVBRFEsRUFFWCxHQUFHTixLQUFLLENBQUNOLFdBQU4sQ0FBa0JnQixLQUFsQixDQUF3QkwsS0FBeEIsQ0FGUTtBQUZmO0FBTUQ7O0FBQ0QsU0FBS0Ysa0ZBQW9CLENBQUNRLE1BQTFCO0FBQWtDO0FBQ2hDLFlBQUk7QUFBRUM7QUFBRixZQUFTWCxNQUFNLENBQUNNLE9BQXBCOztBQUNBLFlBQUksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFOLENBQWNHLEVBQWQsQ0FBTCxFQUF3QjtBQUN0QkEsWUFBRSxHQUFHLENBQUNBLEVBQUQsQ0FBTDtBQUNEOztBQUNELCtDQUNLWixLQURMO0FBRUVOLHFCQUFXLEVBQUVNLEtBQUssQ0FBQ04sV0FBTixDQUFrQm1CLE1BQWxCLENBQTBCUCxVQUFELElBQWdCLENBQUNNLEVBQUUsQ0FBQ0UsUUFBSCxDQUFZUixVQUFVLENBQUNTLEdBQXZCLENBQTFDO0FBRmY7QUFJRDs7QUFDRCxTQUFLWixrRkFBb0IsQ0FBQ2EsTUFBMUI7QUFDRSw2Q0FDS2hCLEtBREw7QUFFRU4sbUJBQVcsRUFBRU0sS0FBSyxDQUFDTixXQUFOLENBQWtCdUIsR0FBbEIsQ0FBdUJYLFVBQUQsSUFBZ0I7QUFDakQsZ0JBQU07QUFBRU0sY0FBRjtBQUFNTTtBQUFOLGNBQXdCakIsTUFBTSxDQUFDTSxPQUFyQzs7QUFDQSxjQUFJRCxVQUFVLENBQUNTLEdBQVgsS0FBbUJILEVBQXZCLEVBQTJCO0FBQ3pCLG1EQUNLTixVQURMLEdBRUtZLGFBRkw7QUFJRDs7QUFDRCxpQkFBT1osVUFBUDtBQUNELFNBVFk7QUFGZjs7QUFhRixTQUFLSCxrRkFBb0IsQ0FBQ2dCLElBQTFCO0FBQWdDO0FBQzlCLGNBQU07QUFBRUM7QUFBRixZQUFxQm5CLE1BQU0sQ0FBQ00sT0FBbEM7QUFFQSwrQ0FDS1AsS0FETDtBQUVFTixxQkFBVyxFQUFFTSxLQUFLLENBQUNOLFdBQU4sR0FDVCxDQUFDLEdBQUdNLEtBQUssQ0FBQ04sV0FBVixFQUF1QixHQUFHMEIsY0FBMUIsQ0FEUyxHQUVUQSxjQUpOO0FBS0V2QixjQUFJLEVBQUVHLEtBQUssQ0FBQ0gsSUFBTixHQUFhLENBTHJCO0FBTUVDLGFBQUcsRUFBRXNCLGNBQWMsQ0FBQ0MsTUFBZixLQUEwQjtBQU5qQztBQVFEOztBQUNELFNBQUtsQixrRkFBb0IsQ0FBQ21CLE1BQTFCO0FBQWtDO0FBQ2hDLGNBQU07QUFBRUMsZUFBRjtBQUFTSDtBQUFULFlBQTRCbkIsTUFBTSxDQUFDTSxPQUF6QztBQUVBLCtDQUNLUCxLQURMO0FBRUVOLHFCQUFXLEVBQUUwQixjQUZmO0FBR0V4QixnQkFBTSxFQUFFMkIsS0FIVjtBQUlFMUIsY0FBSSxFQUFFLENBSlI7QUFLRUMsYUFBRyxFQUFFc0IsY0FBYyxDQUFDQyxNQUFmLEtBQTBCO0FBTGpDO0FBT0Q7O0FBRUQ7QUFDRSxhQUFPckIsS0FBUDtBQTlESjtBQWdFRCxDQWxFTTtBQW1FUUQsZ0ZBQWYiLCJmaWxlIjoiLi9yZWR1eC9leGVyY2lzZS1zdWJtaXNzaW9ucy9leGVyY2lzZS1zdWJtaXNzaW9ucy5yZWR1Y2VyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3VibWlzc2lvblN0YXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBFWEVSQ0lTRV9TVUJNSVNTSU9OUyB9IGZyb20gJy4vZXhlcmNpc2Utc3VibWlzc2lvbnMuYWN0aW9ucyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogU3VibWlzc2lvblN0YXRlID0ge1xuICBzdWJtaXNzaW9uczogdW5kZWZpbmVkLFxuICBzZWFyY2g6ICcnLFxuICBwYWdlOiAwLFxuICBlbmQ6IGZhbHNlLFxufTtcbmV4cG9ydCBjb25zdCBzdWJtaXNzaW9uUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiB7IHR5cGU6IHN0cmluZzsgcGF5bG9hZDogYW55O30pXG46IFN1Ym1pc3Npb25TdGF0ZSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEVYRVJDSVNFX1NVQk1JU1NJT05TLkFERDoge1xuICAgICAgbGV0IHsgaW5kZXgsIHN1Ym1pc3Npb24gfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHN1Ym1pc3Npb24pKSB7XG4gICAgICAgIHN1Ym1pc3Npb24gPSBbc3VibWlzc2lvbl07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3VibWlzc2lvbnM6IFsuLi5zdGF0ZS5zdWJtaXNzaW9ucy5zbGljZSgwLCBpbmRleCksXG4gICAgICAgICAgLi4uc3VibWlzc2lvbixcbiAgICAgICAgICAuLi5zdGF0ZS5zdWJtaXNzaW9ucy5zbGljZShpbmRleCldLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBFWEVSQ0lTRV9TVUJNSVNTSU9OUy5SRU1PVkU6IHtcbiAgICAgIGxldCB7IGlkIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShpZCkpIHtcbiAgICAgICAgaWQgPSBbaWRdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN1Ym1pc3Npb25zOiBzdGF0ZS5zdWJtaXNzaW9ucy5maWx0ZXIoKHN1Ym1pc3Npb24pID0+ICFpZC5pbmNsdWRlcyhzdWJtaXNzaW9uLl9pZCkpLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBFWEVSQ0lTRV9TVUJNSVNTSU9OUy5VUERBVEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3VibWlzc2lvbnM6IHN0YXRlLnN1Ym1pc3Npb25zLm1hcCgoc3VibWlzc2lvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgaWQsIG5ld1N1Ym1pc3Npb24gfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgIGlmIChzdWJtaXNzaW9uLl9pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnN1Ym1pc3Npb24sXG4gICAgICAgICAgICAgIC4uLm5ld1N1Ym1pc3Npb24sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3VibWlzc2lvbjtcbiAgICAgICAgfSksXG4gICAgICB9O1xuICAgIGNhc2UgRVhFUkNJU0VfU1VCTUlTU0lPTlMuTE9BRDoge1xuICAgICAgY29uc3QgeyBuZXdTdWJtaXNzaW9ucyB9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdWJtaXNzaW9uczogc3RhdGUuc3VibWlzc2lvbnNcbiAgICAgICAgICA/IFsuLi5zdGF0ZS5zdWJtaXNzaW9ucywgLi4ubmV3U3VibWlzc2lvbnNdXG4gICAgICAgICAgOiBuZXdTdWJtaXNzaW9ucyxcbiAgICAgICAgcGFnZTogc3RhdGUucGFnZSArIDEsXG4gICAgICAgIGVuZDogbmV3U3VibWlzc2lvbnMubGVuZ3RoID09PSAwLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBFWEVSQ0lTRV9TVUJNSVNTSU9OUy5TRUFSQ0g6IHtcbiAgICAgIGNvbnN0IHsgcXVlcnksIG5ld1N1Ym1pc3Npb25zIH0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN1Ym1pc3Npb25zOiBuZXdTdWJtaXNzaW9ucyxcbiAgICAgICAgc2VhcmNoOiBxdWVyeSxcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgZW5kOiBuZXdTdWJtaXNzaW9ucy5sZW5ndGggPT09IDAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBzdWJtaXNzaW9uUmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/exercise-submissions/exercise-submissions.reducer.ts\n");

/***/ }),

/***/ "./redux/root.reducer.ts":
/*!*******************************!*\
  !*** ./redux/root.reducer.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _exercise_submissions_exercise_submissions_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercise-submissions/exercise-submissions.reducer */ \"./redux/exercise-submissions/exercise-submissions.reducer.ts\");\n/* harmony import */ var _user_user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.reducer */ \"./redux/user/user.reducer.ts\");\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  submissions: _exercise_submissions_exercise_submissions_reducer__WEBPACK_IMPORTED_MODULE_1__[\"submissionReducer\"],\n  user: _user_user_reducer__WEBPACK_IMPORTED_MODULE_2__[\"userReducer\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yb290LnJlZHVjZXIudHM/MGU2YSJdLCJuYW1lcyI6WyJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInN1Ym1pc3Npb25zIiwidXNlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsNkRBQWUsQ0FBQztBQUNsQ0MsbUhBRGtDO0FBRWxDQyxzRUFBSUE7QUFGOEIsQ0FBRCxDQUFuQztBQU1lSCwwRUFBZiIsImZpbGUiOiIuL3JlZHV4L3Jvb3QucmVkdWNlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHN1Ym1pc3Npb25SZWR1Y2VyIGFzIHN1Ym1pc3Npb25zIH0gZnJvbSAnLi9leGVyY2lzZS1zdWJtaXNzaW9ucy9leGVyY2lzZS1zdWJtaXNzaW9ucy5yZWR1Y2VyJztcbmltcG9ydCB7IHVzZXJSZWR1Y2VyIGFzIHVzZXIgfSBmcm9tICcuL3VzZXIvdXNlci5yZWR1Y2VyJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBzdWJtaXNzaW9ucyxcbiAgdXNlcixcbn0pO1xuXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/root.reducer.ts\n");

/***/ }),

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/*! exports provided: createStoreWithPreloadedData, getStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStoreWithPreloadedData\", function() { return createStoreWithPreloadedData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStore\", function() { return getStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root.reducer */ \"./redux/root.reducer.ts\");\n\n\nlet store;\n\nfunction createStoreWithPreloadedData(preloadedData) {\n  if (!store) {\n    store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_root_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], preloadedData);\n  }\n\n  return store;\n}\n\nfunction getStore() {\n  return store;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS50cz84ODQ3Il0sIm5hbWVzIjpbInN0b3JlIiwiY3JlYXRlU3RvcmVXaXRoUHJlbG9hZGVkRGF0YSIsInByZWxvYWRlZERhdGEiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwiZ2V0U3RvcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFJQSxLQUFKOztBQUVBLFNBQVNDLDRCQUFULENBQXNDQyxhQUF0QyxFQUFxRDtBQUNuRCxNQUFJLENBQUNGLEtBQUwsRUFBWTtBQUNWQSxTQUFLLEdBQUdHLHlEQUFXLENBQUNDLHFEQUFELEVBQWNGLGFBQWQsQ0FBbkI7QUFDRDs7QUFFRCxTQUFPRixLQUFQO0FBQ0Q7O0FBRUQsU0FBU0ssUUFBVCxHQUFvQjtBQUNsQixTQUFPTCxLQUFQO0FBQ0QiLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcm9vdC5yZWR1Y2VyJztcblxubGV0IHN0b3JlO1xuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZVdpdGhQcmVsb2FkZWREYXRhKHByZWxvYWRlZERhdGEpIHtcbiAgaWYgKCFzdG9yZSkge1xuICAgIHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIHByZWxvYWRlZERhdGEpO1xuICB9XG5cbiAgcmV0dXJuIHN0b3JlO1xufVxuXG5mdW5jdGlvbiBnZXRTdG9yZSgpIHtcbiAgcmV0dXJuIHN0b3JlO1xufVxuXG5leHBvcnQgeyBjcmVhdGVTdG9yZVdpdGhQcmVsb2FkZWREYXRhLCBnZXRTdG9yZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/store.ts\n");

/***/ }),

/***/ "./redux/user/user.actions.ts":
/*!************************************!*\
  !*** ./redux/user/user.actions.ts ***!
  \************************************/
/*! exports provided: USER_INFO, USER_NOTIFICATIONS, loadInfo, addNotification, loadNotificationsSuccess, markNotificationAsRead, markNotificationAsUnread, markAllAsRead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_INFO\", function() { return USER_INFO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_NOTIFICATIONS\", function() { return USER_NOTIFICATIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadInfo\", function() { return loadInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addNotification\", function() { return addNotification; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadNotificationsSuccess\", function() { return loadNotificationsSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"markNotificationAsRead\", function() { return markNotificationAsRead; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"markNotificationAsUnread\", function() { return markNotificationAsUnread; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"markAllAsRead\", function() { return markAllAsRead; });\nconst LOAD_INFO = 'user/LOAD_INFO';\nconst ADD_NOTIFICATIONS = 'user/ADD_NOTIFICATIONS';\nconst LOAD_NOTIFICATIONS = 'user/LOAD_NOTIFICATIONS';\nconst MARK_AS_READ = 'user/MARK_NOTIFICATIONS_AS_READ';\nconst MARK_AS_UNREAD = 'user/MARK_NOTIFICATIONS_AS_UNREAD';\nconst MARK_ALL_AS_READ = 'user/MARK_ALL_NOTIFICATIONS_AS_READ';\nconst USER_INFO = {\n  LOAD: LOAD_INFO\n};\nconst USER_NOTIFICATIONS = {\n  ADD: ADD_NOTIFICATIONS,\n  LOAD: LOAD_NOTIFICATIONS,\n  MARK_AS_READ,\n  MARK_AS_UNREAD,\n  MARK_ALL_AS_READ\n};\n/** User info */\n\nconst loadInfo = info => ({\n  type: LOAD_INFO,\n  payload: info\n});\n/** Notifications */\n\nconst addNotification = (notification, index = 0) => ({\n  type: ADD_NOTIFICATIONS,\n  payload: {\n    notification,\n    index\n  }\n});\nconst loadNotificationsSuccess = newNotifications => ({\n  type: LOAD_NOTIFICATIONS,\n  payload: {\n    newNotifications\n  }\n});\nconst markNotificationAsRead = id => ({\n  type: MARK_AS_READ,\n  payload: {\n    id\n  }\n});\nconst markNotificationAsUnread = id => ({\n  type: MARK_AS_UNREAD,\n  payload: {\n    id\n  }\n});\nconst markAllAsRead = () => ({\n  type: MARK_ALL_AS_READ,\n  payload: null\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC91c2VyL3VzZXIuYWN0aW9ucy50cz9kMjUwIl0sIm5hbWVzIjpbIkxPQURfSU5GTyIsIkFERF9OT1RJRklDQVRJT05TIiwiTE9BRF9OT1RJRklDQVRJT05TIiwiTUFSS19BU19SRUFEIiwiTUFSS19BU19VTlJFQUQiLCJNQVJLX0FMTF9BU19SRUFEIiwiVVNFUl9JTkZPIiwiTE9BRCIsIlVTRVJfTk9USUZJQ0FUSU9OUyIsIkFERCIsImxvYWRJbmZvIiwiaW5mbyIsInR5cGUiLCJwYXlsb2FkIiwiYWRkTm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uIiwiaW5kZXgiLCJsb2FkTm90aWZpY2F0aW9uc1N1Y2Nlc3MiLCJuZXdOb3RpZmljYXRpb25zIiwibWFya05vdGlmaWNhdGlvbkFzUmVhZCIsImlkIiwibWFya05vdGlmaWNhdGlvbkFzVW5yZWFkIiwibWFya0FsbEFzUmVhZCJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTUEsU0FBUyxHQUFHLGdCQUFsQjtBQUVBLE1BQU1DLGlCQUFpQixHQUFHLHdCQUExQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLHlCQUEzQjtBQUVBLE1BQU1DLFlBQVksR0FBRyxpQ0FBckI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsbUNBQXZCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcscUNBQXpCO0FBRU8sTUFBTUMsU0FBUyxHQUFHO0FBQ3ZCQyxNQUFJLEVBQUVQO0FBRGlCLENBQWxCO0FBSUEsTUFBTVEsa0JBQWtCLEdBQUc7QUFDaENDLEtBQUcsRUFBRVIsaUJBRDJCO0FBRWhDTSxNQUFJLEVBQUVMLGtCQUYwQjtBQUdoQ0MsY0FIZ0M7QUFJaENDLGdCQUpnQztBQUtoQ0M7QUFMZ0MsQ0FBM0I7QUFRUDs7QUFDTyxNQUFNSyxRQUFRLEdBQUlDLElBQUQsS0FBZ0I7QUFDdENDLE1BQUksRUFBRVosU0FEZ0M7QUFFdENhLFNBQU8sRUFBRUY7QUFGNkIsQ0FBaEIsQ0FBakI7QUFLUDs7QUFDTyxNQUFNRyxlQUFlLEdBQUcsQ0FBQ0MsWUFBRCxFQUE4Q0MsS0FBSyxHQUFHLENBQXRELE1BQTZEO0FBQzFGSixNQUFJLEVBQUVYLGlCQURvRjtBQUUxRlksU0FBTyxFQUFFO0FBQ1BFLGdCQURPO0FBRVBDO0FBRk87QUFGaUYsQ0FBN0QsQ0FBeEI7QUFRQSxNQUFNQyx3QkFBd0IsR0FBSUMsZ0JBQUQsS0FBdUM7QUFDN0VOLE1BQUksRUFBRVYsa0JBRHVFO0FBRTdFVyxTQUFPLEVBQUU7QUFDUEs7QUFETztBQUZvRSxDQUF2QyxDQUFqQztBQU9BLE1BQU1DLHNCQUFzQixHQUFJQyxFQUFELEtBQWlCO0FBQ3JEUixNQUFJLEVBQUVULFlBRCtDO0FBRXJEVSxTQUFPLEVBQUU7QUFDUE87QUFETztBQUY0QyxDQUFqQixDQUEvQjtBQU9BLE1BQU1DLHdCQUF3QixHQUFJRCxFQUFELEtBQWlCO0FBQ3ZEUixNQUFJLEVBQUVSLGNBRGlEO0FBRXZEUyxTQUFPLEVBQUU7QUFDUE87QUFETztBQUY4QyxDQUFqQixDQUFqQztBQU9BLE1BQU1FLGFBQWEsR0FBRyxPQUFPO0FBQ2xDVixNQUFJLEVBQUVQLGdCQUQ0QjtBQUVsQ1EsU0FBTyxFQUFFO0FBRnlCLENBQVAsQ0FBdEIiLCJmaWxlIjoiLi9yZWR1eC91c2VyL3VzZXIuYWN0aW9ucy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBMT0FEX0lORk8gPSAndXNlci9MT0FEX0lORk8nO1xuXG5jb25zdCBBRERfTk9USUZJQ0FUSU9OUyA9ICd1c2VyL0FERF9OT1RJRklDQVRJT05TJztcbmNvbnN0IExPQURfTk9USUZJQ0FUSU9OUyA9ICd1c2VyL0xPQURfTk9USUZJQ0FUSU9OUyc7XG5cbmNvbnN0IE1BUktfQVNfUkVBRCA9ICd1c2VyL01BUktfTk9USUZJQ0FUSU9OU19BU19SRUFEJztcbmNvbnN0IE1BUktfQVNfVU5SRUFEID0gJ3VzZXIvTUFSS19OT1RJRklDQVRJT05TX0FTX1VOUkVBRCc7XG5jb25zdCBNQVJLX0FMTF9BU19SRUFEID0gJ3VzZXIvTUFSS19BTExfTk9USUZJQ0FUSU9OU19BU19SRUFEJztcblxuZXhwb3J0IGNvbnN0IFVTRVJfSU5GTyA9IHtcbiAgTE9BRDogTE9BRF9JTkZPLFxufTtcblxuZXhwb3J0IGNvbnN0IFVTRVJfTk9USUZJQ0FUSU9OUyA9IHtcbiAgQUREOiBBRERfTk9USUZJQ0FUSU9OUyxcbiAgTE9BRDogTE9BRF9OT1RJRklDQVRJT05TLFxuICBNQVJLX0FTX1JFQUQsXG4gIE1BUktfQVNfVU5SRUFELFxuICBNQVJLX0FMTF9BU19SRUFELFxufTtcblxuLyoqIFVzZXIgaW5mbyAqL1xuZXhwb3J0IGNvbnN0IGxvYWRJbmZvID0gKGluZm86IGFueSkgPT4gKHtcbiAgdHlwZTogTE9BRF9JTkZPLFxuICBwYXlsb2FkOiBpbmZvLFxufSk7XG5cbi8qKiBOb3RpZmljYXRpb25zICovXG5leHBvcnQgY29uc3QgYWRkTm90aWZpY2F0aW9uID0gKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uIHwgTm90aWZpY2F0aW9uW10sIGluZGV4ID0gMCkgPT4gKHtcbiAgdHlwZTogQUREX05PVElGSUNBVElPTlMsXG4gIHBheWxvYWQ6IHtcbiAgICBub3RpZmljYXRpb24sXG4gICAgaW5kZXgsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvYWROb3RpZmljYXRpb25zU3VjY2VzcyA9IChuZXdOb3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25bXSkgPT4gKHtcbiAgdHlwZTogTE9BRF9OT1RJRklDQVRJT05TLFxuICBwYXlsb2FkOiB7XG4gICAgbmV3Tm90aWZpY2F0aW9ucyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgbWFya05vdGlmaWNhdGlvbkFzUmVhZCA9IChpZDogc3RyaW5nKSA9PiAoe1xuICB0eXBlOiBNQVJLX0FTX1JFQUQsXG4gIHBheWxvYWQ6IHtcbiAgICBpZCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgbWFya05vdGlmaWNhdGlvbkFzVW5yZWFkID0gKGlkOiBzdHJpbmcpID0+ICh7XG4gIHR5cGU6IE1BUktfQVNfVU5SRUFELFxuICBwYXlsb2FkOiB7XG4gICAgaWQsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IG1hcmtBbGxBc1JlYWQgPSAoKSA9PiAoe1xuICB0eXBlOiBNQVJLX0FMTF9BU19SRUFELFxuICBwYXlsb2FkOiBudWxsLFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/user/user.actions.ts\n");

/***/ }),

/***/ "./redux/user/user.reducer.ts":
/*!************************************!*\
  !*** ./redux/user/user.reducer.ts ***!
  \************************************/
/*! exports provided: defaultUserState, userReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultUserState\", function() { return defaultUserState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userReducer\", function() { return userReducer; });\n/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.actions */ \"./redux/user/user.actions.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst defaultUserState = {\n  info: undefined,\n  notifications: {\n    list: undefined,\n    unread: 0,\n    unreadCount: 0,\n    page: 0,\n    end: false\n  }\n};\nconst initialState = defaultUserState;\nconst userReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _user_actions__WEBPACK_IMPORTED_MODULE_0__[\"USER_INFO\"].LOAD:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          info: action.payload\n        });\n      }\n\n    case _user_actions__WEBPACK_IMPORTED_MODULE_0__[\"USER_NOTIFICATIONS\"].ADD:\n      {\n        let {\n          index,\n          notifications\n        } = action.payload;\n\n        if (!Array.isArray(notifications)) {\n          notifications = [notifications];\n        }\n\n        return _objectSpread(_objectSpread({}, state), {}, {\n          notifications: _objectSpread(_objectSpread({}, state.notifications), {}, {\n            list: [...state.notifications.list.slice(0, index), ...notifications, ...state.notifications.list.slice(index)]\n          })\n        });\n      }\n\n    case _user_actions__WEBPACK_IMPORTED_MODULE_0__[\"USER_NOTIFICATIONS\"].LOAD:\n      {\n        const {\n          newNotifications\n        } = action.payload;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          notifications: _objectSpread(_objectSpread({}, state.notifications), {}, {\n            list: state.notifications.list ? [...state.notifications.list, ...newNotifications] : newNotifications,\n            page: state.notifications.page + 1,\n            end: newNotifications.length === 0\n          })\n        });\n      }\n\n    case _user_actions__WEBPACK_IMPORTED_MODULE_0__[\"USER_NOTIFICATIONS\"].MARK_AS_READ:\n      {\n        let {\n          id\n        } = action.payload;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          notifications: _objectSpread(_objectSpread({}, state.notifications), {}, {\n            list: [...state.notifications.list.map(n => {\n              if (n._id === id) {\n                return _objectSpread(_objectSpread({}, n), {}, {\n                  isUnread: false\n                });\n              }\n\n              return n;\n            })],\n            unreadCount: state.notifications.unreadCount - 1\n          })\n        });\n      }\n\n    case _user_actions__WEBPACK_IMPORTED_MODULE_0__[\"USER_NOTIFICATIONS\"].MARK_AS_UNREAD:\n      {\n        let {\n          id\n        } = action.payload;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          notifications: _objectSpread(_objectSpread({}, state.notifications), {}, {\n            list: [...state.notifications.list.map(n => {\n              if (n._id === id) {\n                return _objectSpread(_objectSpread({}, n), {}, {\n                  isUnread: true\n                });\n              }\n\n              return n;\n            })],\n            unreadCount: state.notifications.unreadCount + 1\n          })\n        });\n      }\n\n    case _user_actions__WEBPACK_IMPORTED_MODULE_0__[\"USER_NOTIFICATIONS\"].MARK_ALL_AS_READ:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          notifications: _objectSpread(_objectSpread({}, state.notifications), {}, {\n            list: state.notifications.list.map(n => _objectSpread(_objectSpread({}, n), {}, {\n              isUnread: false\n            })),\n            unreadCount: 0\n          })\n        });\n      }\n\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (userReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC91c2VyL3VzZXIucmVkdWNlci50cz82NzljIl0sIm5hbWVzIjpbImRlZmF1bHRVc2VyU3RhdGUiLCJpbmZvIiwidW5kZWZpbmVkIiwibm90aWZpY2F0aW9ucyIsImxpc3QiLCJ1bnJlYWQiLCJ1bnJlYWRDb3VudCIsInBhZ2UiLCJlbmQiLCJpbml0aWFsU3RhdGUiLCJ1c2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlVTRVJfSU5GTyIsIkxPQUQiLCJwYXlsb2FkIiwiVVNFUl9OT1RJRklDQVRJT05TIiwiQUREIiwiaW5kZXgiLCJBcnJheSIsImlzQXJyYXkiLCJzbGljZSIsIm5ld05vdGlmaWNhdGlvbnMiLCJsZW5ndGgiLCJNQVJLX0FTX1JFQUQiLCJpZCIsIm1hcCIsIm4iLCJfaWQiLCJpc1VucmVhZCIsIk1BUktfQVNfVU5SRUFEIiwiTUFSS19BTExfQVNfUkVBRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBRU8sTUFBTUEsZ0JBQWdCLEdBQUc7QUFDOUJDLE1BQUksRUFBRUMsU0FEd0I7QUFFOUJDLGVBQWEsRUFBRTtBQUNiQyxRQUFJLEVBQUVGLFNBRE87QUFDSUcsVUFBTSxFQUFFLENBRFo7QUFDZUMsZUFBVyxFQUFFLENBRDVCO0FBQytCQyxRQUFJLEVBQUUsQ0FEckM7QUFDd0NDLE9BQUcsRUFBRTtBQUQ3QztBQUZlLENBQXpCO0FBT1AsTUFBTUMsWUFBdUIsR0FBR1QsZ0JBQWhDO0FBRU8sTUFBTVUsV0FBVyxHQUFHLENBQUNDLEtBQUssR0FBR0YsWUFBVCxFQUF1QkcsTUFBdkIsS0FDVjtBQUNmLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLHVEQUFTLENBQUNDLElBQWY7QUFBcUI7QUFDbkIsK0NBQ0tKLEtBREw7QUFFRVYsY0FBSSxFQUFFVyxNQUFNLENBQUNJO0FBRmY7QUFJRDs7QUFFRCxTQUFLQyxnRUFBa0IsQ0FBQ0MsR0FBeEI7QUFBNkI7QUFDM0IsWUFBSTtBQUFFQyxlQUFGO0FBQVNoQjtBQUFULFlBQTJCUyxNQUFNLENBQUNJLE9BQXRDOztBQUVBLFlBQUksQ0FBQ0ksS0FBSyxDQUFDQyxPQUFOLENBQWNsQixhQUFkLENBQUwsRUFBbUM7QUFDakNBLHVCQUFhLEdBQUcsQ0FBQ0EsYUFBRCxDQUFoQjtBQUNEOztBQUNELCtDQUNLUSxLQURMO0FBRUVSLHVCQUFhLGtDQUNSUSxLQUFLLENBQUNSLGFBREU7QUFFWEMsZ0JBQUksRUFBRSxDQUFDLEdBQUdPLEtBQUssQ0FBQ1IsYUFBTixDQUFvQkMsSUFBcEIsQ0FBeUJrQixLQUF6QixDQUErQixDQUEvQixFQUFrQ0gsS0FBbEMsQ0FBSixFQUNKLEdBQUdoQixhQURDLEVBRUosR0FBR1EsS0FBSyxDQUFDUixhQUFOLENBQW9CQyxJQUFwQixDQUF5QmtCLEtBQXpCLENBQStCSCxLQUEvQixDQUZDO0FBRks7QUFGZjtBQVNEOztBQUVELFNBQUtGLGdFQUFrQixDQUFDRixJQUF4QjtBQUE4QjtBQUM1QixjQUFNO0FBQUVRO0FBQUYsWUFBdUJYLE1BQU0sQ0FBQ0ksT0FBcEM7QUFFQSwrQ0FDS0wsS0FETDtBQUVFUix1QkFBYSxrQ0FDUlEsS0FBSyxDQUFDUixhQURFO0FBRVhDLGdCQUFJLEVBQUVPLEtBQUssQ0FBQ1IsYUFBTixDQUFvQkMsSUFBcEIsR0FDRixDQUFDLEdBQUdPLEtBQUssQ0FBQ1IsYUFBTixDQUFvQkMsSUFBeEIsRUFBOEIsR0FBR21CLGdCQUFqQyxDQURFLEdBRUZBLGdCQUpPO0FBS1hoQixnQkFBSSxFQUFFSSxLQUFLLENBQUNSLGFBQU4sQ0FBb0JJLElBQXBCLEdBQTJCLENBTHRCO0FBTVhDLGVBQUcsRUFBRWUsZ0JBQWdCLENBQUNDLE1BQWpCLEtBQTRCO0FBTnRCO0FBRmY7QUFXRDs7QUFDRCxTQUFLUCxnRUFBa0IsQ0FBQ1EsWUFBeEI7QUFBc0M7QUFDcEMsWUFBSTtBQUFFQztBQUFGLFlBQVNkLE1BQU0sQ0FBQ0ksT0FBcEI7QUFFQSwrQ0FDS0wsS0FETDtBQUVFUix1QkFBYSxrQ0FDUlEsS0FBSyxDQUFDUixhQURFO0FBRVhDLGdCQUFJLEVBQUUsQ0FBQyxHQUFHTyxLQUFLLENBQUNSLGFBQU4sQ0FBb0JDLElBQXBCLENBQXlCdUIsR0FBekIsQ0FBOEJDLENBQUQsSUFBTztBQUM1QyxrQkFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVVILEVBQWQsRUFBa0I7QUFDaEIsdURBQ0tFLENBREw7QUFFRUUsMEJBQVEsRUFBRTtBQUZaO0FBSUQ7O0FBQ0QscUJBQU9GLENBQVA7QUFDRCxhQVJTLENBQUosQ0FGSztBQVdYdEIsdUJBQVcsRUFBRUssS0FBSyxDQUFDUixhQUFOLENBQW9CRyxXQUFwQixHQUFrQztBQVhwQztBQUZmO0FBZ0JEOztBQUNELFNBQUtXLGdFQUFrQixDQUFDYyxjQUF4QjtBQUF3QztBQUN0QyxZQUFJO0FBQUVMO0FBQUYsWUFBU2QsTUFBTSxDQUFDSSxPQUFwQjtBQUVBLCtDQUNLTCxLQURMO0FBRUVSLHVCQUFhLGtDQUNSUSxLQUFLLENBQUNSLGFBREU7QUFFWEMsZ0JBQUksRUFBRSxDQUFDLEdBQUdPLEtBQUssQ0FBQ1IsYUFBTixDQUFvQkMsSUFBcEIsQ0FBeUJ1QixHQUF6QixDQUE4QkMsQ0FBRCxJQUFPO0FBQzVDLGtCQUFJQSxDQUFDLENBQUNDLEdBQUYsS0FBVUgsRUFBZCxFQUFrQjtBQUNoQix1REFDS0UsQ0FETDtBQUVFRSwwQkFBUSxFQUFFO0FBRlo7QUFJRDs7QUFDRCxxQkFBT0YsQ0FBUDtBQUNELGFBUlMsQ0FBSixDQUZLO0FBV1h0Qix1QkFBVyxFQUFFSyxLQUFLLENBQUNSLGFBQU4sQ0FBb0JHLFdBQXBCLEdBQWtDO0FBWHBDO0FBRmY7QUFnQkQ7O0FBQ0QsU0FBS1csZ0VBQWtCLENBQUNlLGdCQUF4QjtBQUEwQztBQUN4QywrQ0FDS3JCLEtBREw7QUFFRVIsdUJBQWEsa0NBQ1JRLEtBQUssQ0FBQ1IsYUFERTtBQUVYQyxnQkFBSSxFQUFFTyxLQUFLLENBQUNSLGFBQU4sQ0FBb0JDLElBQXBCLENBQXlCdUIsR0FBekIsQ0FBOEJDLENBQUQsb0NBQWFBLENBQWI7QUFBZ0JFLHNCQUFRLEVBQUU7QUFBMUIsY0FBN0IsQ0FGSztBQUdYeEIsdUJBQVcsRUFBRTtBQUhGO0FBRmY7QUFRRDs7QUFDRDtBQUNFLGFBQU9LLEtBQVA7QUEzRko7QUE2RkQsQ0EvRk07QUFnR1FELDBFQUFmIiwiZmlsZSI6Ii4vcmVkdXgvdXNlci91c2VyLnJlZHVjZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyU3RhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFVTRVJfSU5GTywgVVNFUl9OT1RJRklDQVRJT05TIH0gZnJvbSAnLi91c2VyLmFjdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFVzZXJTdGF0ZSA9IHtcbiAgaW5mbzogdW5kZWZpbmVkLFxuICBub3RpZmljYXRpb25zOiB7XG4gICAgbGlzdDogdW5kZWZpbmVkLCB1bnJlYWQ6IDAsIHVucmVhZENvdW50OiAwLCBwYWdlOiAwLCBlbmQ6IGZhbHNlLFxuICB9LFxufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyU3RhdGUgPSBkZWZhdWx0VXNlclN0YXRlO1xuXG5leHBvcnQgY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogeyB0eXBlOiBzdHJpbmc7IHBheWxvYWQ6IGFueTsgfSlcbiAgOiBVc2VyU3RhdGUgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBVU0VSX0lORk8uTE9BRDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGluZm86IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFVTRVJfTk9USUZJQ0FUSU9OUy5BREQ6IHtcbiAgICAgIGxldCB7IGluZGV4LCBub3RpZmljYXRpb25zIH0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG5vdGlmaWNhdGlvbnMpKSB7XG4gICAgICAgIG5vdGlmaWNhdGlvbnMgPSBbbm90aWZpY2F0aW9uc107XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbm90aWZpY2F0aW9uczoge1xuICAgICAgICAgIC4uLnN0YXRlLm5vdGlmaWNhdGlvbnMsXG4gICAgICAgICAgbGlzdDogWy4uLnN0YXRlLm5vdGlmaWNhdGlvbnMubGlzdC5zbGljZSgwLCBpbmRleCksXG4gICAgICAgICAgICAuLi5ub3RpZmljYXRpb25zLFxuICAgICAgICAgICAgLi4uc3RhdGUubm90aWZpY2F0aW9ucy5saXN0LnNsaWNlKGluZGV4KV0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgVVNFUl9OT1RJRklDQVRJT05TLkxPQUQ6IHtcbiAgICAgIGNvbnN0IHsgbmV3Tm90aWZpY2F0aW9ucyB9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBub3RpZmljYXRpb25zOiB7XG4gICAgICAgICAgLi4uc3RhdGUubm90aWZpY2F0aW9ucyxcbiAgICAgICAgICBsaXN0OiBzdGF0ZS5ub3RpZmljYXRpb25zLmxpc3RcbiAgICAgICAgICAgID8gWy4uLnN0YXRlLm5vdGlmaWNhdGlvbnMubGlzdCwgLi4ubmV3Tm90aWZpY2F0aW9uc11cbiAgICAgICAgICAgIDogbmV3Tm90aWZpY2F0aW9ucyxcbiAgICAgICAgICBwYWdlOiBzdGF0ZS5ub3RpZmljYXRpb25zLnBhZ2UgKyAxLFxuICAgICAgICAgIGVuZDogbmV3Tm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDAsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFVTRVJfTk9USUZJQ0FUSU9OUy5NQVJLX0FTX1JFQUQ6IHtcbiAgICAgIGxldCB7IGlkIH0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5vdGlmaWNhdGlvbnM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5ub3RpZmljYXRpb25zLFxuICAgICAgICAgIGxpc3Q6IFsuLi5zdGF0ZS5ub3RpZmljYXRpb25zLmxpc3QubWFwKChuKSA9PiB7XG4gICAgICAgICAgICBpZiAobi5faWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ubixcbiAgICAgICAgICAgICAgICBpc1VucmVhZDogZmFsc2UsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICB9KV0sXG4gICAgICAgICAgdW5yZWFkQ291bnQ6IHN0YXRlLm5vdGlmaWNhdGlvbnMudW5yZWFkQ291bnQgLSAxLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBVU0VSX05PVElGSUNBVElPTlMuTUFSS19BU19VTlJFQUQ6IHtcbiAgICAgIGxldCB7IGlkIH0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5vdGlmaWNhdGlvbnM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5ub3RpZmljYXRpb25zLFxuICAgICAgICAgIGxpc3Q6IFsuLi5zdGF0ZS5ub3RpZmljYXRpb25zLmxpc3QubWFwKChuKSA9PiB7XG4gICAgICAgICAgICBpZiAobi5faWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ubixcbiAgICAgICAgICAgICAgICBpc1VucmVhZDogdHJ1ZSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgIH0pXSxcbiAgICAgICAgICB1bnJlYWRDb3VudDogc3RhdGUubm90aWZpY2F0aW9ucy51bnJlYWRDb3VudCArIDEsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFVTRVJfTk9USUZJQ0FUSU9OUy5NQVJLX0FMTF9BU19SRUFEOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbm90aWZpY2F0aW9uczoge1xuICAgICAgICAgIC4uLnN0YXRlLm5vdGlmaWNhdGlvbnMsXG4gICAgICAgICAgbGlzdDogc3RhdGUubm90aWZpY2F0aW9ucy5saXN0Lm1hcCgobikgPT4gKHsgLi4ubiwgaXNVbnJlYWQ6IGZhbHNlIH0pKSxcbiAgICAgICAgICB1bnJlYWRDb3VudDogMCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCB1c2VyUmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/user/user.reducer.ts\n");

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9pbmRleC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/index.scss\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWVcIj8yZDIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cookie\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIj82NDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Impzb253ZWJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ }),

/***/ "logrocket":
/*!****************************!*\
  !*** external "logrocket" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"logrocket\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2dyb2NrZXRcIj85MGFjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImxvZ3JvY2tldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZ3JvY2tldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///logrocket\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose-unique-validator\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZS11bmlxdWUtdmFsaWRhdG9yXCI/NWI5OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb29zZS11bmlxdWUtdmFsaWRhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2UtdW5pcXVlLXZhbGlkYXRvclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose-unique-validator\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ })

/******/ });