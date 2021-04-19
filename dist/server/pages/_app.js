module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		4: 0
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
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"72":"d764a4107e503815fb80","74":"fa21227eb17c7027bc42"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/2w/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createStoreWithPreloadedData; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getStore; });

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./client/redux/exercise-submissions/exercise-submissions.actions.ts
var exercise_submissions_actions = __webpack_require__("xD1E");

// CONCATENATED MODULE: ./client/redux/exercise-submissions/exercise-submissions.reducer.ts
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
    case exercise_submissions_actions["a" /* EXERCISE_SUBMISSIONS */].ADD:
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

    case exercise_submissions_actions["a" /* EXERCISE_SUBMISSIONS */].REMOVE:
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

    case exercise_submissions_actions["a" /* EXERCISE_SUBMISSIONS */].UPDATE:
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

    case exercise_submissions_actions["a" /* EXERCISE_SUBMISSIONS */].LOAD:
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

    case exercise_submissions_actions["a" /* EXERCISE_SUBMISSIONS */].SEARCH:
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
/* harmony default export */ var exercise_submissions_reducer = (submissionReducer);
// EXTERNAL MODULE: ./client/redux/user/user.actions.ts
var user_actions = __webpack_require__("HocV");

// EXTERNAL MODULE: ./client/redux/user/user.reducer.ts
var user_reducer = __webpack_require__("vvsq");

// CONCATENATED MODULE: ./client/redux/root.reducer.ts





const rootReducer = (state, action) => {
  if (action.type === user_actions["b" /* USER_LOGOUT */]) {
    state = undefined;
  }

  return appReducer(state, action);
};

const appReducer = Object(external_redux_["combineReducers"])({
  submissions: submissionReducer,
  user: user_reducer["b" /* userReducer */]
});
/* harmony default export */ var root_reducer = (rootReducer);
// CONCATENATED MODULE: ./client/redux/store.ts


let store;

function createStoreWithPreloadedData(preloadedData) {
  if (true) {
    store = Object(external_redux_["createStore"])(root_reducer, preloadedData);
  }

  return store;
}

function getStore() {
  return store;
}



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "2FBn":
/***/ (function(module, exports) {

module.exports = require("logrocket");

/***/ }),

/***/ "2gDj":
/***/ (function(module, exports) {

module.exports = require("mongoose-unique-validator");

/***/ }),

/***/ "6H6h":
/***/ (function(module, exports) {



/***/ }),

/***/ "FiKB":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "HocV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return USER_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loadInfo; });
/* unused harmony export addNotification */
/* unused harmony export loadNotificationsSuccess */
/* unused harmony export markNotificationAsRead */
/* unused harmony export markNotificationAsUnread */
/* unused harmony export markAllAsRead */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return logoutUser; });
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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MyApp; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./client/services/utils/LogRocket.service.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class LogRocketService {
  static init() {
    if (LogRocketService.instance) {
      console.info("[LogRocketService] Return early from 'init' because it was previously initialized.");
      return Promise.resolve();
    }

    return Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "2FBn", 7)).then(module => {
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

/* harmony default export */ var LogRocket_service = (LogRocketService);
// CONCATENATED MODULE: ./client/components/IdentifyLogRocket.tsx



/**
 * This component "listens" to the User Store and
 * identifies the logged in user in LogRocket.
 *
 * When that user logs out, it clear all the data.
 */

function IdentifyLogrocket({
  userInfo
}) {
  Object(external_react_["useEffect"])(() => {
    if (true) {
      return;
    }

    LogRocket_service.init();

    if (userInfo) {
      LogRocket_service.identify(userInfo);
    } else {
      LogRocket_service.anonymize();
    }
  }, [userInfo]);
  return null;
}

function mapStateToProps(state) {
  return {
    userInfo: state.user.info
  };
}

const connector = Object(external_react_redux_["connect"])(mapStateToProps);
/* harmony default export */ var IdentifyLogRocket = (connector(IdentifyLogrocket));
// EXTERNAL MODULE: ./client/redux/store.ts + 2 modules
var redux_store = __webpack_require__("/2w/");

// EXTERNAL MODULE: ./client/redux/user/user.reducer.ts
var user_reducer = __webpack_require__("vvsq");

// EXTERNAL MODULE: ./client/styles/index.scss
var styles = __webpack_require__("6H6h");

// CONCATENATED MODULE: ./pages/_app.tsx
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  const store = Object(redux_store["a" /* createStoreWithPreloadedData */])({
    user: _objectSpread(_objectSpread({}, user_reducer["a" /* defaultUserState */]), {}, {
      info: pageProps._serverUser
    })
  });
  return __jsx(external_react_redux_["Provider"], {
    store: store
  }, __jsx(IdentifyLogRocket, null), __jsx(Component, pageProps));
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
    const [databaseImport, userModelImport] = await Promise.all([__webpack_require__.e(/* import() */ 74).then(__webpack_require__.t.bind(null, "bI7G", 7)), __webpack_require__.e(/* import() */ 72).then(__webpack_require__.t.bind(null, "ALna", 7))]);
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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "tMJi":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "vvsq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return userReducer; });
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HocV");
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
    case _user_actions__WEBPACK_IMPORTED_MODULE_0__[/* USER_INFO */ "a"].LOAD:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          info: action.payload
        });
      }

    case _user_actions__WEBPACK_IMPORTED_MODULE_0__[/* USER_NOTIFICATIONS */ "c"].ADD:
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

    case _user_actions__WEBPACK_IMPORTED_MODULE_0__[/* USER_NOTIFICATIONS */ "c"].LOAD:
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

    case _user_actions__WEBPACK_IMPORTED_MODULE_0__[/* USER_NOTIFICATIONS */ "c"].MARK_AS_READ:
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

    case _user_actions__WEBPACK_IMPORTED_MODULE_0__[/* USER_NOTIFICATIONS */ "c"].MARK_AS_UNREAD:
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

    case _user_actions__WEBPACK_IMPORTED_MODULE_0__[/* USER_NOTIFICATIONS */ "c"].MARK_ALL_AS_READ:
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
/* unused harmony default export */ var _unused_webpack_default_export = (userReducer);

/***/ }),

/***/ "xD1E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EXERCISE_SUBMISSIONS; });
/* unused harmony export addSubmission */
/* unused harmony export removeSubmission */
/* unused harmony export updateSubmission */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadSubmissions; });
/* unused harmony export searchSubmissions */
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

/***/ })

/******/ });