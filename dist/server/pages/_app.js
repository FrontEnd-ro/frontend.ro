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

/***/ "./client/components/IdentifyLogRocket.tsx":
/*!*************************************************!*\
  !*** ./client/components/IdentifyLogRocket.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_utils_LogRocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/services/utils/LogRocket.service */ "./client/services/utils/LogRocket.service.ts");



/**
 * This component "listens" to the User Store and
 * identifies the logged in user in LogRocket.
 *
 * When that user logs out, it clear all the data.
 */

function IdentifyLogrocket({
  userInfo
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (true) {
      return;
    }

    _services_utils_LogRocket_service__WEBPACK_IMPORTED_MODULE_2__["default"].init();

    if (userInfo) {
      _services_utils_LogRocket_service__WEBPACK_IMPORTED_MODULE_2__["default"].identify(userInfo);
    } else {
      _services_utils_LogRocket_service__WEBPACK_IMPORTED_MODULE_2__["default"].anonymize();
    }
  }, [userInfo]);
  return null;
}

function mapStateToProps(state) {
  return {
    userInfo: state.user.info
  };
}

const connector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps);
/* harmony default export */ __webpack_exports__["default"] = (connector(IdentifyLogrocket));

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

/***/ }),

/***/ "./client/services/utils/LogRocket.service.ts":
/*!****************************************************!*\
  !*** ./client/services/utils/LogRocket.service.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class LogRocketService {
  static init() {
    if (LogRocketService.instance) {
      console.info("[LogRocketService] Return early from 'init' because it was previously initialized.");
      return Promise.resolve();
    }

    return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! logrocket */ "logrocket", 7)).then(module => {
      LogRocketService.instance = module.default;
      LogRocketService.instance.init('ijivpy/frontendro', {
        dom: {
          textSanitizer: true
        }
      });
    }).catch(err => {
      console.error('[LogRocket]', err);
    });
  }

  static async identify(data) {
    if (!LogRocketService.instance) {
      await LogRocketService.init();
    }

    LogRocketService.identityData = data;
    LogRocketService.instance.identify(data.username, {
      email: data.email,
      username: data.username,
      name: data.name || 'Unknnown name'
    });
  }

  static async anonymize() {
    if (!LogRocketService.instance) {
      // Not even initialized yet. We can return
      return;
    }

    LogRocketService.identityData = null;
    LogRocketService.instance.identify(null);
  }

  static getIdentityData() {
    return LogRocketService.identityData;
  }

}

_defineProperty(LogRocketService, "instance", null);

_defineProperty(LogRocketService, "identityData", void 0);

/* harmony default export */ __webpack_exports__["default"] = (LogRocketService);

/***/ }),

/***/ "./client/styles/index.scss":
/*!**********************************!*\
  !*** ./client/styles/index.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_IdentifyLogRocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/IdentifyLogRocket */ "./client/components/IdentifyLogRocket.tsx");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/redux/store */ "./client/redux/store.ts");
/* harmony import */ var _redux_user_user_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/redux/user/user.reducer */ "./client/redux/user/user.reducer.ts");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/styles/index.scss */ "./client/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\didi\\Desktop\\frontend.ro\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  const store = Object(_redux_store__WEBPACK_IMPORTED_MODULE_3__["createStoreWithPreloadedData"])({
    user: _objectSpread(_objectSpread({}, _redux_user_user_reducer__WEBPACK_IMPORTED_MODULE_4__["defaultUserState"]), {}, {
      info: pageProps._serverUser
    })
  });
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: store,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(_components_IdentifyLogRocket__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  })));
}
/**
 * Fetch user on all pages and add it to store.
 * This way we already have the user when rendering most pages thus the overall
 * render experience should be faster.

 * ⚠⚠⚠ WARNING ⚠⚠⚠
 * This function gets called on both SERVER and CLIENT.
 * Unfortunately `getServerSideProps` is not supported
 * for the `App` component so we're stuck with this one.
 *
 * On the client however, we don't want to call the DB methods,
 * so we found a little "hack" by checking the `req` parameter.
 */

MyApp.getInitialProps = async ({
  ctx,
  req
}) => {
  const pageProps = {
    _serverUser: null
  };
  const isClientSide = !ctx.req;

  if (isClientSide) {
    return {
      pageProps
    };
  }

  try {
    const [databaseImport, userModelImport] = await Promise.all([__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../server/database */ "./server/database.js", 7)), __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../shared/user.shared-model */ "./shared/user.shared-model.js", 7))]);
    const {
      connectToDb
    } = databaseImport;
    const UserModel = userModelImport.default;
    const {
      token
    } = ctx.req.cookies;

    if (!token) {
      return {
        pageProps
      };
    }

    connectToDb();
    const user = await UserModel.ping(token);
    const sanitizedUser = UserModel.sanitize(user);
    sanitizedUser.lastLogin = sanitizedUser.lastLogin.toString();
    pageProps._serverUser = sanitizedUser;
  } catch (err) {
    console.error('[getServerSideProps][pingUser]: ', err);
  }

  return {
    pageProps
  };
};

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "logrocket":
/*!****************************!*\
  !*** external "logrocket" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("logrocket");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose-unique-validator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSWRlbnRpZnlMb2dSb2NrZXQudHN4Iiwid2VicGFjazovLy8uL2NsaWVudC9yZWR1eC9leGVyY2lzZS1zdWJtaXNzaW9ucy9leGVyY2lzZS1zdWJtaXNzaW9ucy5hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9yZWR1eC9leGVyY2lzZS1zdWJtaXNzaW9ucy9leGVyY2lzZS1zdWJtaXNzaW9ucy5yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9yZWR1eC9yb290LnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JlZHV4L3N0b3JlLnRzIiwid2VicGFjazovLy8uL2NsaWVudC9yZWR1eC91c2VyL3VzZXIuYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdXgvdXNlci91c2VyLnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NlcnZpY2VzL3V0aWxzL0xvZ1JvY2tldC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZ3JvY2tldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2UtdW5pcXVlLXZhbGlkYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIl0sIm5hbWVzIjpbIklkZW50aWZ5TG9ncm9ja2V0IiwidXNlckluZm8iLCJ1c2VFZmZlY3QiLCJwcm9jZXNzIiwiTG9nUm9ja2V0U2VydmljZSIsImluaXQiLCJpZGVudGlmeSIsImFub255bWl6ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlciIsImluZm8iLCJjb25uZWN0b3IiLCJjb25uZWN0IiwiQUREIiwiUkVNT1ZFIiwiVVBEQVRFIiwiTE9BRCIsIlNFQVJDSCIsIkVYRVJDSVNFX1NVQk1JU1NJT05TIiwiYWRkU3VibWlzc2lvbiIsInN1Ym1pc3Npb24iLCJpbmRleCIsInR5cGUiLCJwYXlsb2FkIiwicmVtb3ZlU3VibWlzc2lvbiIsImlkIiwidXBkYXRlU3VibWlzc2lvbiIsIm5ld1N1Ym1pc3Npb24iLCJsb2FkU3VibWlzc2lvbnMiLCJuZXdTdWJtaXNzaW9ucyIsInNlYXJjaFN1Ym1pc3Npb25zIiwicXVlcnkiLCJpbml0aWFsU3RhdGUiLCJzdWJtaXNzaW9ucyIsInVuZGVmaW5lZCIsInNlYXJjaCIsInBhZ2UiLCJlbmQiLCJzdWJtaXNzaW9uUmVkdWNlciIsImFjdGlvbiIsIkFycmF5IiwiaXNBcnJheSIsInNsaWNlIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJfaWQiLCJtYXAiLCJsZW5ndGgiLCJyb290UmVkdWNlciIsIlVTRVJfTE9HT1VUIiwiYXBwUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInN0b3JlIiwiY3JlYXRlU3RvcmVXaXRoUHJlbG9hZGVkRGF0YSIsInByZWxvYWRlZERhdGEiLCJjcmVhdGVTdG9yZSIsImdldFN0b3JlIiwiTE9BRF9JTkZPIiwiQUREX05PVElGSUNBVElPTlMiLCJMT0FEX05PVElGSUNBVElPTlMiLCJNQVJLX0FTX1JFQUQiLCJNQVJLX0FTX1VOUkVBRCIsIk1BUktfQUxMX0FTX1JFQUQiLCJVU0VSX0lORk8iLCJVU0VSX05PVElGSUNBVElPTlMiLCJsb2FkSW5mbyIsImFkZE5vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvbiIsImxvYWROb3RpZmljYXRpb25zU3VjY2VzcyIsIm5ld05vdGlmaWNhdGlvbnMiLCJtYXJrTm90aWZpY2F0aW9uQXNSZWFkIiwibWFya05vdGlmaWNhdGlvbkFzVW5yZWFkIiwibWFya0FsbEFzUmVhZCIsImxvZ291dFVzZXIiLCJkZWZhdWx0VXNlclN0YXRlIiwibm90aWZpY2F0aW9ucyIsImxpc3QiLCJ1bnJlYWQiLCJ1bnJlYWRDb3VudCIsInVzZXJSZWR1Y2VyIiwibiIsImlzVW5yZWFkIiwiaW5zdGFuY2UiLCJjb25zb2xlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwibW9kdWxlIiwiZGVmYXVsdCIsImRvbSIsInRleHRTYW5pdGl6ZXIiLCJjYXRjaCIsImVyciIsImVycm9yIiwiZGF0YSIsImlkZW50aXR5RGF0YSIsInVzZXJuYW1lIiwiZW1haWwiLCJuYW1lIiwiZ2V0SWRlbnRpdHlEYXRhIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJfc2VydmVyVXNlciIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcSIsImlzQ2xpZW50U2lkZSIsImRhdGFiYXNlSW1wb3J0IiwidXNlck1vZGVsSW1wb3J0IiwiYWxsIiwiY29ubmVjdFRvRGIiLCJVc2VyTW9kZWwiLCJ0b2tlbiIsImNvb2tpZXMiLCJwaW5nIiwic2FuaXRpemVkVXNlciIsInNhbml0aXplIiwibGFzdExvZ2luIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTs7UUFFQTtRQUNBO1FBQ0EsbUNBQW1DO1FBQ25DO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esa0JBQWtCLHFCQUFxQjtRQUN2QztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FB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QWhEO0FBS0EsVUFBTTtBQUFFQztBQUFGLFFBQWtCSCxjQUF4QjtBQUNBLFVBQU1JLFNBQVMsR0FBR0gsZUFBZSxDQUFDckIsT0FBbEM7QUFDQSxVQUFNO0FBQUV5QjtBQUFGLFFBQVlSLEdBQUcsQ0FBQ0MsR0FBSixDQUFRUSxPQUExQjs7QUFFQSxRQUFJLENBQUNELEtBQUwsRUFBWTtBQUNWLGFBQU87QUFBRVg7QUFBRixPQUFQO0FBQ0Q7O0FBRURTLGVBQVc7QUFFWCxVQUFNdEcsSUFBSSxHQUFHLE1BQU11RyxTQUFTLENBQUNHLElBQVYsQ0FBZUYsS0FBZixDQUFuQjtBQUNBLFVBQU1HLGFBQWEsR0FBR0osU0FBUyxDQUFDSyxRQUFWLENBQW1CNUcsSUFBbkIsQ0FBdEI7QUFFQTJHLGlCQUFhLENBQUNFLFNBQWQsR0FBMEJGLGFBQWEsQ0FBQ0UsU0FBZCxDQUF3QkMsUUFBeEIsRUFBMUI7QUFDQWpCLGFBQVMsQ0FBQ0MsV0FBVixHQUF3QmEsYUFBeEI7QUFDRCxHQXJCRCxDQXFCRSxPQUFPeEIsR0FBUCxFQUFZO0FBQ1pULFdBQU8sQ0FBQ1UsS0FBUixDQUFjLGtDQUFkLEVBQWtERCxHQUFsRDtBQUNEOztBQUVELFNBQU87QUFBRVU7QUFBRixHQUFQO0FBQ0QsQ0FyQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL19hcHBcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4uL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ34vcmVkdXgvcm9vdC5yZWR1Y2VyJztcclxuaW1wb3J0IExvZ1JvY2tldFNlcnZpY2UgZnJvbSAnfi9zZXJ2aWNlcy91dGlscy9Mb2dSb2NrZXQuc2VydmljZSc7XHJcblxyXG4vKipcclxuICogVGhpcyBjb21wb25lbnQgXCJsaXN0ZW5zXCIgdG8gdGhlIFVzZXIgU3RvcmUgYW5kXHJcbiAqIGlkZW50aWZpZXMgdGhlIGxvZ2dlZCBpbiB1c2VyIGluIExvZ1JvY2tldC5cclxuICpcclxuICogV2hlbiB0aGF0IHVzZXIgbG9ncyBvdXQsIGl0IGNsZWFyIGFsbCB0aGUgZGF0YS5cclxuICovXHJcbmZ1bmN0aW9uIElkZW50aWZ5TG9ncm9ja2V0KHsgdXNlckluZm8gfTogQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj4pIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52LkFQUF9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgTG9nUm9ja2V0U2VydmljZS5pbml0KCk7XHJcblxyXG4gICAgaWYgKHVzZXJJbmZvKSB7XHJcbiAgICAgIExvZ1JvY2tldFNlcnZpY2UuaWRlbnRpZnkodXNlckluZm8pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgTG9nUm9ja2V0U2VydmljZS5hbm9ueW1pemUoKTtcclxuICAgIH1cclxuICB9LCBbdXNlckluZm9dKTtcclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogUm9vdFN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXJJbmZvOiBzdGF0ZS51c2VyLmluZm8sXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKElkZW50aWZ5TG9ncm9ja2V0KTtcclxuIiwiaW1wb3J0IHsgU3VibWlzc2lvbiB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuY29uc3QgQUREID0gJ2V4ZXJjaXNlLXN1Ym1pc3Npb25zL0FERCc7XHJcbmNvbnN0IFJFTU9WRSA9ICdleGVyY2lzZS1zdWJtaXNzaW9ucy9SRU1PVkUnO1xyXG5jb25zdCBVUERBVEUgPSAnZXhlcmNpc2Utc3VibWlzc2lvbnMvVVBEQVRFJztcclxuY29uc3QgTE9BRCA9ICdleGVyY2lzZS1zdWJtaXNzaW9ucy9MT0FEJztcclxuY29uc3QgU0VBUkNIID0gJ2V4ZXJjaXNlLXN1Ym1pc3Npb25zL1NFQVJDSCc7XHJcblxyXG5leHBvcnQgY29uc3QgRVhFUkNJU0VfU1VCTUlTU0lPTlMgPSB7XHJcbiAgQURELFxyXG4gIFJFTU9WRSxcclxuICBVUERBVEUsXHJcbiAgTE9BRCxcclxuICBTRUFSQ0gsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkU3VibWlzc2lvbiA9IChzdWJtaXNzaW9uOiBTdWJtaXNzaW9uIHwgU3VibWlzc2lvbltdLCBpbmRleCA9IDApID0+ICh7XHJcbiAgdHlwZTogQURELFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIHN1Ym1pc3Npb24sXHJcbiAgICBpbmRleCxcclxuICB9LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHJlbW92ZVN1Ym1pc3Npb24gPSAoaWQ6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiAoe1xyXG4gIHR5cGU6IFJFTU9WRSxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBpZCxcclxuICB9LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVN1Ym1pc3Npb24gPSAoaWQ6IHN0cmluZywgbmV3U3VibWlzc2lvbjogU3VibWlzc2lvbikgPT4gKHtcclxuICB0eXBlOiBVUERBVEUsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgaWQsXHJcbiAgICBuZXdTdWJtaXNzaW9uLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRTdWJtaXNzaW9ucyA9IChuZXdTdWJtaXNzaW9uczogU3VibWlzc2lvbltdKSA9PiAoe1xyXG4gIHR5cGU6IExPQUQsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgbmV3U3VibWlzc2lvbnMsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VhcmNoU3VibWlzc2lvbnMgPSAocXVlcnk6IHN0cmluZywgbmV3U3VibWlzc2lvbnM6IFN1Ym1pc3Npb25bXSkgPT4gKHtcclxuICB0eXBlOiBTRUFSQ0gsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgcXVlcnksXHJcbiAgICBuZXdTdWJtaXNzaW9ucyxcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IHsgU3VibWlzc2lvblN0YXRlIH0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCB7IEVYRVJDSVNFX1NVQk1JU1NJT05TIH0gZnJvbSAnLi9leGVyY2lzZS1zdWJtaXNzaW9ucy5hY3Rpb25zJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3VibWlzc2lvblN0YXRlID0ge1xyXG4gIHN1Ym1pc3Npb25zOiB1bmRlZmluZWQsXHJcbiAgc2VhcmNoOiAnJyxcclxuICBwYWdlOiAwLFxyXG4gIGVuZDogZmFsc2UsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBzdWJtaXNzaW9uUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiB7IHR5cGU6IHN0cmluZzsgcGF5bG9hZDogYW55O30pXHJcbjogU3VibWlzc2lvblN0YXRlID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEVYRVJDSVNFX1NVQk1JU1NJT05TLkFERDoge1xyXG4gICAgICBsZXQgeyBpbmRleCwgc3VibWlzc2lvbiB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJtaXNzaW9uKSkge1xyXG4gICAgICAgIHN1Ym1pc3Npb24gPSBbc3VibWlzc2lvbl07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzdWJtaXNzaW9uczogWy4uLnN0YXRlLnN1Ym1pc3Npb25zLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICAgIC4uLnN1Ym1pc3Npb24sXHJcbiAgICAgICAgICAuLi5zdGF0ZS5zdWJtaXNzaW9ucy5zbGljZShpbmRleCldLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBFWEVSQ0lTRV9TVUJNSVNTSU9OUy5SRU1PVkU6IHtcclxuICAgICAgbGV0IHsgaWQgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaWQpKSB7XHJcbiAgICAgICAgaWQgPSBbaWRdO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc3VibWlzc2lvbnM6IHN0YXRlLnN1Ym1pc3Npb25zLmZpbHRlcigoc3VibWlzc2lvbikgPT4gIWlkLmluY2x1ZGVzKHN1Ym1pc3Npb24uX2lkKSksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIEVYRVJDSVNFX1NVQk1JU1NJT05TLlVQREFURTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzdWJtaXNzaW9uczogc3RhdGUuc3VibWlzc2lvbnMubWFwKChzdWJtaXNzaW9uKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGlkLCBuZXdTdWJtaXNzaW9uIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgIGlmIChzdWJtaXNzaW9uLl9pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAuLi5zdWJtaXNzaW9uLFxyXG4gICAgICAgICAgICAgIC4uLm5ld1N1Ym1pc3Npb24sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gc3VibWlzc2lvbjtcclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgRVhFUkNJU0VfU1VCTUlTU0lPTlMuTE9BRDoge1xyXG4gICAgICBjb25zdCB7IG5ld1N1Ym1pc3Npb25zIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc3VibWlzc2lvbnM6IHN0YXRlLnN1Ym1pc3Npb25zXHJcbiAgICAgICAgICA/IFsuLi5zdGF0ZS5zdWJtaXNzaW9ucywgLi4ubmV3U3VibWlzc2lvbnNdXHJcbiAgICAgICAgICA6IG5ld1N1Ym1pc3Npb25zLFxyXG4gICAgICAgIHBhZ2U6IHN0YXRlLnBhZ2UgKyAxLFxyXG4gICAgICAgIGVuZDogbmV3U3VibWlzc2lvbnMubGVuZ3RoID09PSAwLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBFWEVSQ0lTRV9TVUJNSVNTSU9OUy5TRUFSQ0g6IHtcclxuICAgICAgY29uc3QgeyBxdWVyeSwgbmV3U3VibWlzc2lvbnMgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzdWJtaXNzaW9uczogbmV3U3VibWlzc2lvbnMsXHJcbiAgICAgICAgc2VhcmNoOiBxdWVyeSxcclxuICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgIGVuZDogbmV3U3VibWlzc2lvbnMubGVuZ3RoID09PSAwLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1Ym1pc3Npb25SZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IHN1Ym1pc3Npb25SZWR1Y2VyIGFzIHN1Ym1pc3Npb25zIH0gZnJvbSAnLi9leGVyY2lzZS1zdWJtaXNzaW9ucy9leGVyY2lzZS1zdWJtaXNzaW9ucy5yZWR1Y2VyJztcclxuaW1wb3J0IHsgVVNFUl9MT0dPVVQgfSBmcm9tICcuL3VzZXIvdXNlci5hY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlclJlZHVjZXIgYXMgdXNlciB9IGZyb20gJy4vdXNlci91c2VyLnJlZHVjZXInO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gVVNFUl9MT0dPVVQpIHtcclxuICAgIHN0YXRlID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFwcFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbn07XHJcblxyXG5jb25zdCBhcHBSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBzdWJtaXNzaW9ucyxcclxuICB1c2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPlxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3Jvb3QucmVkdWNlcic7XHJcblxyXG5sZXQgc3RvcmU7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdG9yZVdpdGhQcmVsb2FkZWREYXRhKHByZWxvYWRlZERhdGEpIHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXN0b3JlKSB7XHJcbiAgICBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBwcmVsb2FkZWREYXRhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U3RvcmUoKSB7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVTdG9yZVdpdGhQcmVsb2FkZWREYXRhLCBnZXRTdG9yZSB9O1xyXG4iLCJpbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmNvbnN0IExPQURfSU5GTyA9ICd1c2VyL0xPQURfSU5GTyc7XHJcblxyXG5jb25zdCBBRERfTk9USUZJQ0FUSU9OUyA9ICd1c2VyL0FERF9OT1RJRklDQVRJT05TJztcclxuY29uc3QgTE9BRF9OT1RJRklDQVRJT05TID0gJ3VzZXIvTE9BRF9OT1RJRklDQVRJT05TJztcclxuXHJcbmNvbnN0IE1BUktfQVNfUkVBRCA9ICd1c2VyL01BUktfTk9USUZJQ0FUSU9OU19BU19SRUFEJztcclxuY29uc3QgTUFSS19BU19VTlJFQUQgPSAndXNlci9NQVJLX05PVElGSUNBVElPTlNfQVNfVU5SRUFEJztcclxuY29uc3QgTUFSS19BTExfQVNfUkVBRCA9ICd1c2VyL01BUktfQUxMX05PVElGSUNBVElPTlNfQVNfUkVBRCc7XHJcblxyXG5leHBvcnQgY29uc3QgVVNFUl9JTkZPID0ge1xyXG4gIExPQUQ6IExPQURfSU5GTyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVU0VSX05PVElGSUNBVElPTlMgPSB7XHJcbiAgQUREOiBBRERfTk9USUZJQ0FUSU9OUyxcclxuICBMT0FEOiBMT0FEX05PVElGSUNBVElPTlMsXHJcbiAgTUFSS19BU19SRUFELFxyXG4gIE1BUktfQVNfVU5SRUFELFxyXG4gIE1BUktfQUxMX0FTX1JFQUQsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVVNFUl9MT0dPVVQgPSAndXNlci9MT0dPVVQnO1xyXG5cclxuLyoqIFVzZXIgaW5mbyAqL1xyXG5leHBvcnQgY29uc3QgbG9hZEluZm8gPSAoaW5mbzogYW55KSA9PiAoe1xyXG4gIHR5cGU6IExPQURfSU5GTyxcclxuICBwYXlsb2FkOiBpbmZvLFxyXG59KTtcclxuXHJcbi8qKiBOb3RpZmljYXRpb25zICovXHJcbmV4cG9ydCBjb25zdCBhZGROb3RpZmljYXRpb24gPSAobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24gfCBOb3RpZmljYXRpb25bXSwgaW5kZXggPSAwKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9OT1RJRklDQVRJT05TLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIG5vdGlmaWNhdGlvbixcclxuICAgIGluZGV4LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWROb3RpZmljYXRpb25zU3VjY2VzcyA9IChuZXdOb3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25bXSkgPT4gKHtcclxuICB0eXBlOiBMT0FEX05PVElGSUNBVElPTlMsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgbmV3Tm90aWZpY2F0aW9ucyxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXJrTm90aWZpY2F0aW9uQXNSZWFkID0gKGlkOiBzdHJpbmcpID0+ICh7XHJcbiAgdHlwZTogTUFSS19BU19SRUFELFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGlkLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmtOb3RpZmljYXRpb25Bc1VucmVhZCA9IChpZDogc3RyaW5nKSA9PiAoe1xyXG4gIHR5cGU6IE1BUktfQVNfVU5SRUFELFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGlkLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmtBbGxBc1JlYWQgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IE1BUktfQUxMX0FTX1JFQUQsXHJcbiAgcGF5bG9hZDogbnVsbCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0VXNlciA9ICgpID0+ICh7XHJcbiAgdHlwZTogVVNFUl9MT0dPVVQsXHJcbiAgcGF5bG9hZDogbnVsbCxcclxufSk7XHJcbiIsImltcG9ydCB7IFVzZXJTdGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgeyBVU0VSX0lORk8sIFVTRVJfTk9USUZJQ0FUSU9OUyB9IGZyb20gJy4vdXNlci5hY3Rpb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0VXNlclN0YXRlID0ge1xyXG4gIGluZm86IHVuZGVmaW5lZCxcclxuICBub3RpZmljYXRpb25zOiB7XHJcbiAgICBsaXN0OiB1bmRlZmluZWQsIHVucmVhZDogMCwgdW5yZWFkQ291bnQ6IDAsIHBhZ2U6IDAsIGVuZDogZmFsc2UsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlclN0YXRlID0gZGVmYXVsdFVzZXJTdGF0ZTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiB7IHR5cGU6IHN0cmluZzsgcGF5bG9hZDogYW55OyB9KVxyXG4gIDogVXNlclN0YXRlID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFVTRVJfSU5GTy5MT0FEOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaW5mbzogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBVU0VSX05PVElGSUNBVElPTlMuQUREOiB7XHJcbiAgICAgIGxldCB7IGluZGV4LCBub3RpZmljYXRpb25zIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShub3RpZmljYXRpb25zKSkge1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbnMgPSBbbm90aWZpY2F0aW9uc107XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBub3RpZmljYXRpb25zOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5ub3RpZmljYXRpb25zLFxyXG4gICAgICAgICAgbGlzdDogWy4uLnN0YXRlLm5vdGlmaWNhdGlvbnMubGlzdC5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgICAgIC4uLm5vdGlmaWNhdGlvbnMsXHJcbiAgICAgICAgICAgIC4uLnN0YXRlLm5vdGlmaWNhdGlvbnMubGlzdC5zbGljZShpbmRleCldLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBVU0VSX05PVElGSUNBVElPTlMuTE9BRDoge1xyXG4gICAgICBjb25zdCB7IG5ld05vdGlmaWNhdGlvbnMgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBub3RpZmljYXRpb25zOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5ub3RpZmljYXRpb25zLFxyXG4gICAgICAgICAgbGlzdDogc3RhdGUubm90aWZpY2F0aW9ucy5saXN0XHJcbiAgICAgICAgICAgID8gWy4uLnN0YXRlLm5vdGlmaWNhdGlvbnMubGlzdCwgLi4ubmV3Tm90aWZpY2F0aW9uc11cclxuICAgICAgICAgICAgOiBuZXdOb3RpZmljYXRpb25zLFxyXG4gICAgICAgICAgcGFnZTogc3RhdGUubm90aWZpY2F0aW9ucy5wYWdlICsgMSxcclxuICAgICAgICAgIGVuZDogbmV3Tm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgVVNFUl9OT1RJRklDQVRJT05TLk1BUktfQVNfUkVBRDoge1xyXG4gICAgICBsZXQgeyBpZCB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbnM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLm5vdGlmaWNhdGlvbnMsXHJcbiAgICAgICAgICBsaXN0OiBbLi4uc3RhdGUubm90aWZpY2F0aW9ucy5saXN0Lm1hcCgobikgPT4ge1xyXG4gICAgICAgICAgICBpZiAobi5faWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLm4sXHJcbiAgICAgICAgICAgICAgICBpc1VucmVhZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbjtcclxuICAgICAgICAgIH0pXSxcclxuICAgICAgICAgIHVucmVhZENvdW50OiBzdGF0ZS5ub3RpZmljYXRpb25zLnVucmVhZENvdW50IC0gMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBVU0VSX05PVElGSUNBVElPTlMuTUFSS19BU19VTlJFQUQ6IHtcclxuICAgICAgbGV0IHsgaWQgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBub3RpZmljYXRpb25zOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5ub3RpZmljYXRpb25zLFxyXG4gICAgICAgICAgbGlzdDogWy4uLnN0YXRlLm5vdGlmaWNhdGlvbnMubGlzdC5tYXAoKG4pID0+IHtcclxuICAgICAgICAgICAgaWYgKG4uX2lkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5uLFxyXG4gICAgICAgICAgICAgICAgaXNVbnJlYWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbjtcclxuICAgICAgICAgIH0pXSxcclxuICAgICAgICAgIHVucmVhZENvdW50OiBzdGF0ZS5ub3RpZmljYXRpb25zLnVucmVhZENvdW50ICsgMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBVU0VSX05PVElGSUNBVElPTlMuTUFSS19BTExfQVNfUkVBRDoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbnM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLm5vdGlmaWNhdGlvbnMsXHJcbiAgICAgICAgICBsaXN0OiBzdGF0ZS5ub3RpZmljYXRpb25zLmxpc3QubWFwKChuKSA9PiAoeyAuLi5uLCBpc1VucmVhZDogZmFsc2UgfSkpLFxyXG4gICAgICAgICAgdW5yZWFkQ291bnQ6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWR1Y2VyO1xyXG4iLCJpbnRlcmZhY2UgSWRlbnRpdHlEYXRhIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG59XHJcbmNsYXNzIExvZ1JvY2tldFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaWRlbnRpdHlEYXRhOiBJZGVudGl0eURhdGE7XHJcblxyXG4gIHN0YXRpYyBpbml0KCkge1xyXG4gICAgaWYgKExvZ1JvY2tldFNlcnZpY2UuaW5zdGFuY2UpIHtcclxuICAgICAgY29uc29sZS5pbmZvKFxyXG4gICAgICAgIFwiW0xvZ1JvY2tldFNlcnZpY2VdIFJldHVybiBlYXJseSBmcm9tICdpbml0JyBiZWNhdXNlIGl0IHdhcyBwcmV2aW91c2x5IGluaXRpYWxpemVkLlwiLFxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGltcG9ydCgnbG9ncm9ja2V0JylcclxuICAgICAgLnRoZW4oKG1vZHVsZSkgPT4ge1xyXG4gICAgICAgIExvZ1JvY2tldFNlcnZpY2UuaW5zdGFuY2UgPSBtb2R1bGUuZGVmYXVsdDtcclxuXHJcbiAgICAgICAgTG9nUm9ja2V0U2VydmljZS5pbnN0YW5jZS5pbml0KCdpaml2cHkvZnJvbnRlbmRybycsIHtcclxuICAgICAgICAgIGRvbToge1xyXG4gICAgICAgICAgICB0ZXh0U2FuaXRpemVyOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbTG9nUm9ja2V0XScsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGlkZW50aWZ5KGRhdGE6IElkZW50aXR5RGF0YSkge1xyXG4gICAgaWYgKCFMb2dSb2NrZXRTZXJ2aWNlLmluc3RhbmNlKSB7XHJcbiAgICAgIGF3YWl0IExvZ1JvY2tldFNlcnZpY2UuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIExvZ1JvY2tldFNlcnZpY2UuaWRlbnRpdHlEYXRhID0gZGF0YTtcclxuICAgIExvZ1JvY2tldFNlcnZpY2UuaW5zdGFuY2UuaWRlbnRpZnkoZGF0YS51c2VybmFtZSwge1xyXG4gICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgIG5hbWU6IGRhdGEubmFtZSB8fCAnVW5rbm5vd24gbmFtZScsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBhbm9ueW1pemUoKSB7XHJcbiAgICBpZiAoIUxvZ1JvY2tldFNlcnZpY2UuaW5zdGFuY2UpIHtcclxuICAgICAgLy8gTm90IGV2ZW4gaW5pdGlhbGl6ZWQgeWV0LiBXZSBjYW4gcmV0dXJuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBMb2dSb2NrZXRTZXJ2aWNlLmlkZW50aXR5RGF0YSA9IG51bGw7XHJcbiAgICBMb2dSb2NrZXRTZXJ2aWNlLmluc3RhbmNlLmlkZW50aWZ5KG51bGwpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldElkZW50aXR5RGF0YSgpIHtcclxuICAgIHJldHVybiBMb2dSb2NrZXRTZXJ2aWNlLmlkZW50aXR5RGF0YTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ1JvY2tldFNlcnZpY2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgSWRlbnRpZnlMb2dSb2NrZXQgZnJvbSAnfi9jb21wb25lbnRzL0lkZW50aWZ5TG9nUm9ja2V0JztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmVXaXRoUHJlbG9hZGVkRGF0YSB9IGZyb20gJ34vcmVkdXgvc3RvcmUnO1xyXG5pbXBvcnQgeyBkZWZhdWx0VXNlclN0YXRlIH0gZnJvbSAnfi9yZWR1eC91c2VyL3VzZXIucmVkdWNlcic7XHJcblxyXG5pbXBvcnQgJ34vc3R5bGVzL2luZGV4LnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBhbnkpIHtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aFByZWxvYWRlZERhdGEoe1xyXG4gICAgdXNlcjoge1xyXG4gICAgICAuLi5kZWZhdWx0VXNlclN0YXRlLFxyXG4gICAgICBpbmZvOiBwYWdlUHJvcHMuX3NlcnZlclVzZXIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxJZGVudGlmeUxvZ1JvY2tldCAvPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGZXRjaCB1c2VyIG9uIGFsbCBwYWdlcyBhbmQgYWRkIGl0IHRvIHN0b3JlLlxyXG4gKiBUaGlzIHdheSB3ZSBhbHJlYWR5IGhhdmUgdGhlIHVzZXIgd2hlbiByZW5kZXJpbmcgbW9zdCBwYWdlcyB0aHVzIHRoZSBvdmVyYWxsXHJcbiAqIHJlbmRlciBleHBlcmllbmNlIHNob3VsZCBiZSBmYXN0ZXIuXHJcblxyXG4gKiDimqDimqDimqAgV0FSTklORyDimqDimqDimqBcclxuICogVGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBvbiBib3RoIFNFUlZFUiBhbmQgQ0xJRU5ULlxyXG4gKiBVbmZvcnR1bmF0ZWx5IGBnZXRTZXJ2ZXJTaWRlUHJvcHNgIGlzIG5vdCBzdXBwb3J0ZWRcclxuICogZm9yIHRoZSBgQXBwYCBjb21wb25lbnQgc28gd2UncmUgc3R1Y2sgd2l0aCB0aGlzIG9uZS5cclxuICpcclxuICogT24gdGhlIGNsaWVudCBob3dldmVyLCB3ZSBkb24ndCB3YW50IHRvIGNhbGwgdGhlIERCIG1ldGhvZHMsXHJcbiAqIHNvIHdlIGZvdW5kIGEgbGl0dGxlIFwiaGFja1wiIGJ5IGNoZWNraW5nIHRoZSBgcmVxYCBwYXJhbWV0ZXIuXHJcbiAqL1xyXG5cclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4LCByZXEgfSkgPT4ge1xyXG4gIGNvbnN0IHBhZ2VQcm9wcyA9IHtcclxuICAgIF9zZXJ2ZXJVc2VyOiBudWxsLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzQ2xpZW50U2lkZSA9ICFjdHgucmVxO1xyXG5cclxuICBpZiAoaXNDbGllbnRTaWRlKSB7XHJcbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBbZGF0YWJhc2VJbXBvcnQsIHVzZXJNb2RlbEltcG9ydF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGltcG9ydCgnLi4vc2VydmVyL2RhdGFiYXNlJyksXHJcbiAgICAgIGltcG9ydCgnLi4vc2hhcmVkL3VzZXIuc2hhcmVkLW1vZGVsJyksXHJcbiAgICBdKTtcclxuXHJcbiAgICBjb25zdCB7IGNvbm5lY3RUb0RiIH0gPSBkYXRhYmFzZUltcG9ydDtcclxuICAgIGNvbnN0IFVzZXJNb2RlbCA9IHVzZXJNb2RlbEltcG9ydC5kZWZhdWx0O1xyXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gY3R4LnJlcS5jb29raWVzO1xyXG5cclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgcmV0dXJuIHsgcGFnZVByb3BzIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdFRvRGIoKTtcclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLnBpbmcodG9rZW4pO1xyXG4gICAgY29uc3Qgc2FuaXRpemVkVXNlciA9IFVzZXJNb2RlbC5zYW5pdGl6ZSh1c2VyKTtcclxuXHJcbiAgICBzYW5pdGl6ZWRVc2VyLmxhc3RMb2dpbiA9IHNhbml0aXplZFVzZXIubGFzdExvZ2luLnRvU3RyaW5nKCk7XHJcbiAgICBwYWdlUHJvcHMuX3NlcnZlclVzZXIgPSBzYW5pdGl6ZWRVc2VyO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcignW2dldFNlcnZlclNpZGVQcm9wc11bcGluZ1VzZXJdOiAnLCBlcnIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH07XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2dyb2NrZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2UtdW5pcXVlLXZhbGlkYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9