(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

/***/ "./node_modules/logrocket/dist/build.umd.js":
/*!**************************************************!*\
  !*** ./node_modules/logrocket/dist/build.umd.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./packages/@apphub:logrocket-console/src/index.js":
/*!*********************************************************!*\
  !*** ./packages/@apphub:logrocket-console/src/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _registerConsole = __webpack_require__(/*! ./registerConsole */ "./packages/@apphub:logrocket-console/src/registerConsole.js");

var _registerConsole2 = _interopRequireDefault(_registerConsole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _registerConsole2.default;

/***/ }),

/***/ "./packages/@apphub:logrocket-console/src/registerConsole.js":
/*!*******************************************************************!*\
  !*** ./packages/@apphub:logrocket-console/src/registerConsole.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = registerConsole;

var _enhanceFunc = __webpack_require__(/*! @apphub/logrocket-utils/src/enhanceFunc */ "./packages/@apphub:logrocket-utils/src/enhanceFunc.js");

var _enhanceFunc2 = _interopRequireDefault(_enhanceFunc);

var _logrocketExceptions = __webpack_require__(/*! @apphub/logrocket-exceptions */ "./packages/@apphub:logrocket-exceptions/src/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerConsole(logger) {
  var unsubFunctions = [];
  var methods = ['log', 'warn', 'info', 'error', 'debug'];

  methods.forEach(function (method) {
    unsubFunctions.push((0, _enhanceFunc2.default)(console, method, function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      logger.addEvent('lr.core.LogEvent', function () {
        var consoleOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var isEnabled = consoleOptions.isEnabled;

        if ((typeof isEnabled === 'undefined' ? 'undefined' : _typeof(isEnabled)) === 'object' && isEnabled[method] === false || isEnabled === false) {
          return null;
        }

        if (method === 'error' && consoleOptions.shouldAggregateConsoleErrors) {
          _logrocketExceptions.Capture.captureMessage(logger, args[0], {}, true);
        }

        return {
          logLevel: method.toUpperCase(),
          args: args
        };
      });
    }));
  });

  return function () {
    unsubFunctions.forEach(function (unsubFunction) {
      return unsubFunction();
    });
  };
}

/***/ }),

/***/ "./packages/@apphub:logrocket-exceptions/src/Capture.js":
/*!**************************************************************!*\
  !*** ./packages/@apphub:logrocket-exceptions/src/Capture.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* eslint-disable no-param-reassign */


exports.captureMessage = captureMessage;
exports.captureException = captureException;

var _TraceKit = __webpack_require__(/*! @apphub/logrocket-utils/src/TraceKit */ "./packages/@apphub:logrocket-utils/src/TraceKit.js");

var _TraceKit2 = _interopRequireDefault(_TraceKit);

var _stackTraceFromError = __webpack_require__(/*! ./stackTraceFromError */ "./packages/@apphub:logrocket-exceptions/src/stackTraceFromError.js");

var _stackTraceFromError2 = _interopRequireDefault(_stackTraceFromError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isScalar(value) {
  return (/boolean|number|string/.test(typeof value === 'undefined' ? 'undefined' : _typeof(value))
  );
}

function scrub(data, options) {
  if (options) {
    var optionalScalars = [
    // Valid values for 'level' are 'fatal', 'error', 'warning', 'info',
    // and 'debug'. Defaults to 'error'.
    'level', 'logger'];
    for (var _iterator = optionalScalars, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var field = _ref;

      var value = options[field];

      if (isScalar(value)) {
        data[field] = value.toString();
      }
    }

    var optionalMaps = ['tags', 'extra'];
    for (var _iterator2 = optionalMaps, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var _field = _ref2;

      var dirty = options[_field] || {};
      var scrubbed = {};

      for (var _iterator3 = Object.keys(dirty), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var key = _ref3;

        var _value = dirty[key];

        if (isScalar(_value)) {
          scrubbed[key.toString()] = _value.toString();
        }
      }

      data[_field] = scrubbed;
    }
  }
}

function captureMessage(logger, message) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var isConsole = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var data = {
    exceptionType: isConsole ? 'CONSOLE' : 'MESSAGE',
    message: message,
    browserHref: window.location.href
  };

  scrub(data, options);

  logger.addEvent('lr.core.Exception', function () {
    return data;
  });
}

function captureException(logger, exception) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var preppedTrace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var trace = preppedTrace || _TraceKit2.default.computeStackTrace(exception);

  var data = {
    exceptionType: 'WINDOW',
    errorType: trace.name,
    message: trace.message,
    browserHref: window.location.href
  };

  scrub(data, options);

  var addEventOptions = {
    _stackTrace: (0, _stackTraceFromError2.default)(trace)
  };

  logger.addEvent('lr.core.Exception', function () {
    return data;
  }, addEventOptions);
}

/***/ }),

/***/ "./packages/@apphub:logrocket-exceptions/src/index.js":
/*!************************************************************!*\
  !*** ./packages/@apphub:logrocket-exceptions/src/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Capture = exports.registerExceptions = undefined;

var _registerExceptions = __webpack_require__(/*! ./registerExceptions */ "./packages/@apphub:logrocket-exceptions/src/registerExceptions.js");

var _registerExceptions2 = _interopRequireDefault(_registerExceptions);

var _Capture = __webpack_require__(/*! ./Capture */ "./packages/@apphub:logrocket-exceptions/src/Capture.js");

var Capture = _interopRequireWildcard(_Capture);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.registerExceptions = _registerExceptions2.default;
exports.Capture = Capture;

/***/ }),

/***/ "./packages/@apphub:logrocket-exceptions/src/raven/raven.js":
/*!******************************************************************!*\
  !*** ./packages/@apphub:logrocket-exceptions/src/raven/raven.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable */

/*
Some contents of this file were originaly from raven-js, BSD-2 Clause

Copyright (c) 2018 Sentry (https://sentry.io) and individual contributors.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var _TraceKit = __webpack_require__(/*! @apphub/logrocket-utils/src/TraceKit */ "./packages/@apphub:logrocket-utils/src/TraceKit.js");

var _TraceKit2 = _interopRequireDefault(_TraceKit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var objectPrototype = Object.prototype;

function isUndefined(what) {
  return what === void 0;
}

function isFunction(what) {
  return typeof what === 'function';
}

function each(obj, callback) {
  var i, j;

  if (isUndefined(obj.length)) {
    for (i in obj) {
      if (hasKey(obj, i)) {
        callback.call(null, i, obj[i]);
      }
    }
  } else {
    j = obj.length;
    if (j) {
      for (i = 0; i < j; i++) {
        callback.call(null, i, obj[i]);
      }
    }
  }
}

/**
 * hasKey, a better form of hasOwnProperty
 * Example: hasKey(MainHostObject, property) === true/false
 *
 * @param {Object} host object to check property
 * @param {string} key to check
 */
function hasKey(object, key) {
  return objectPrototype.hasOwnProperty.call(object, key);
}

/**
 * Polyfill a method
 * @param obj object e.g. `document`
 * @param name method name present on object e.g. `addEventListener`
 * @param replacement replacement function
 * @param track {optional} record instrumentation to an array
 */
function fill(obj, name, replacement, track) {
  var orig = obj[name];
  obj[name] = replacement(orig);
  if (track) {
    track.push([obj, name, orig]);
  }
}

var _window = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
var _document = _window.document;

var Handler = function () {
  function Handler(_ref) {
    var captureException = _ref.captureException;

    _classCallCheck(this, Handler);

    this._errorHandler = this._errorHandler.bind(this);

    this._ignoreOnError = 0;
    this._wrappedBuiltIns = [];
    this.captureException = captureException;
    _TraceKit2.default.report.subscribe(this._errorHandler);
    this._instrumentTryCatch();
  }

  _createClass(Handler, [{
    key: 'uninstall',
    value: function uninstall() {
      _TraceKit2.default.report.unsubscribe(this._errorHandler);

      // restore any wrapped builtins
      var builtin;
      while (this._wrappedBuiltIns.length) {
        builtin = this._wrappedBuiltIns.shift();

        var obj = builtin[0],
            name = builtin[1],
            orig = builtin[2];

        obj[name] = orig;
      }
    }
  }, {
    key: '_errorHandler',
    value: function _errorHandler(report) {
      if (!this._ignoreOnError) {
        this.captureException(report);
      }
    }
  }, {
    key: '_ignoreNextOnError',
    value: function _ignoreNextOnError() {
      var _this = this;

      this._ignoreOnError += 1;
      setTimeout(function () {
        // onerror should trigger before setTimeout
        _this._ignoreOnError -= 1;
      });
    }

    /*
     * Wrap code within a context so Handler can capture errors
     * reliably across domains that is executed immediately.
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The callback to be immediately executed within the context
     * @param {array} args An array of arguments to be called with the callback [optional]
     */

  }, {
    key: 'context',
    value: function context(options, func, args) {
      if (isFunction(options)) {
        args = func || [];
        func = options;
        options = undefined;
      }

      return this.wrap(options, func).apply(this, args);
    }
  }, {
    key: 'wrap',


    /*
     * Wrap code within a context and returns back a new function to be executed
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The function to be wrapped in a new context
     * @param {function} func A function to call before the try/catch wrapper [optional, private]
     * @return {function} The newly wrapped functions with a context
     */
    value: function wrap(options, func, _before) {
      var self = this;
      // 1 argument has been passed, and it's not a function
      // so just return it
      if (isUndefined(func) && !isFunction(options)) {
        return options;
      }

      // options is optional
      if (isFunction(options)) {
        func = options;
        options = undefined;
      }

      // At this point, we've passed along 2 arguments, and the second one
      // is not a function either, so we'll just return the second argument.
      if (!isFunction(func)) {
        return func;
      }

      // We don't wanna wrap it twice!
      try {
        if (func.__lr__) {
          return func;
        }

        // If this has already been wrapped in the past, return that
        if (func.__lr_wrapper__) {
          return func.__lr_wrapper__;
        }

        // If func is not extensible, return the function as-is to prevent TypeErrors
        // when trying to add new props & to assure immutable funcs aren't changed
        if (!Object.isExtensible(func)) {
          return func;
        }
      } catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see lr-js#495).
        // Bail on wrapping and return the function as-is (defers to window.onerror).
        return func;
      }

      function wrapped() {
        var args = [],
            i = arguments.length,
            deep = !options || options && options.deep !== false;

        if (_before && isFunction(_before)) {
          _before.apply(this, arguments);
        }

        // Recursively wrap all of a function's arguments that are
        // functions themselves.
        while (i--) {
          args[i] = deep ? self.wrap(options, arguments[i]) : arguments[i];
        }try {
          // Attempt to invoke user-land function. This is part of the LogRocket SDK.
          // If you're seeing this frame in a stack trace, it means that LogRocket caught
          // an unhandled error thrown by your application code, reported it, then bubbled
          // it up. This is expected behavior and is not a bug with LogRocket.
          return func.apply(this, args);
        } catch (e) {
          self._ignoreNextOnError();
          self.captureException(_TraceKit2.default.computeStackTrace(e), options);
          throw e;
        }
      }

      // copy over properties of the old function
      for (var property in func) {
        if (hasKey(func, property)) {
          wrapped[property] = func[property];
        }
      }
      wrapped.prototype = func.prototype;

      func.__lr_wrapper__ = wrapped;
      // Signal that this function has been wrapped already
      // for both debugging and to prevent it to being wrapped twice
      wrapped.__lr__ = true;
      wrapped.__inner__ = func;

      return wrapped;
    }
  }, {
    key: '_instrumentTryCatch',


    /**
     * Install any queued plugins
     */
    value: function _instrumentTryCatch() {
      var self = this;

      var wrappedBuiltIns = self._wrappedBuiltIns;

      function wrapTimeFn(orig) {
        return function (fn, t) {
          // preserve arity
          // Make a copy of the arguments to prevent deoptimization
          // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; ++i) {
            args[i] = arguments[i];
          }
          var originalCallback = args[0];
          if (isFunction(originalCallback)) {
            args[0] = self.wrap(originalCallback);
          }

          // IE < 9 doesn't support .call/.apply on setInterval/setTimeout, but it
          // also supports only two arguments and doesn't care what this is, so we
          // can just call the original function directly.
          if (orig.apply) {
            return orig.apply(this, args);
          } else {
            return orig(args[0], args[1]);
          }
        };
      }

      function wrapEventTarget(global) {
        var proto = _window[global] && _window[global].prototype;
        if (proto && proto.hasOwnProperty && proto.hasOwnProperty('addEventListener')) {
          fill(proto, 'addEventListener', function (orig) {
            return function (evtName, fn, capture, secure) {
              // preserve arity
              try {
                if (fn && fn.handleEvent) {
                  fn.handleEvent = self.wrap(fn.handleEvent);
                }
              } catch (err) {}
              // can sometimes get 'Permission denied to access property "handle Event'


              // More breadcrumb DOM capture ... done here and not in `_instrumentBreadcrumbs`
              // so that we don't have more than one wrapper function
              var before;

              return orig.call(this, evtName, self.wrap(fn, undefined, before), capture, secure);
            };
          }, wrappedBuiltIns);
          fill(proto, 'removeEventListener', function (orig) {
            return function (evt, fn, capture, secure) {
              try {
                fn = fn && (fn.__lr_wrapper__ ? fn.__lr_wrapper__ : fn);
              } catch (e) {
                // ignore, accessing __lr_wrapper__ will throw in some Selenium environments
              }
              return orig.call(this, evt, fn, capture, secure);
            };
          }, wrappedBuiltIns);
        }
      }

      fill(_window, 'setTimeout', wrapTimeFn, wrappedBuiltIns);
      fill(_window, 'setInterval', wrapTimeFn, wrappedBuiltIns);
      if (_window.requestAnimationFrame) {
        fill(_window, 'requestAnimationFrame', function (orig) {
          return function (cb) {
            return orig(self.wrap(cb));
          };
        }, wrappedBuiltIns);
      }

      // event targets borrowed from bugsnag-js:
      // https://github.com/bugsnag/bugsnag-js/blob/master/src/bugsnag.js#L666
      var eventTargets = ['EventTarget', 'Window', 'Node', 'ApplicationCache', 'AudioTrackList', 'ChannelMergerNode', 'CryptoOperation', 'EventSource', 'FileReader', 'HTMLUnknownElement', 'IDBDatabase', 'IDBRequest', 'IDBTransaction', 'KeyOperation', 'MediaController', 'MessagePort', 'ModalWindow', 'Notification', 'SVGElementInstance', 'Screen', 'TextTrack', 'TextTrackCue', 'TextTrackList', 'WebSocket', 'WebSocketWorker', 'Worker', 'XMLHttpRequest', 'XMLHttpRequestEventTarget', 'XMLHttpRequestUpload'];
      for (var i = 0; i < eventTargets.length; i++) {
        wrapEventTarget(eventTargets[i]);
      }

      var $ = _window.jQuery || _window.$;
      if ($ && $.fn && $.fn.ready) {
        fill($.fn, 'ready', function (orig) {
          return function (fn) {
            return orig.call(this, self.wrap(fn));
          };
        }, wrappedBuiltIns);
      }
    }
  }]);

  return Handler;
}();

exports.default = Handler;
;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./packages/@apphub:logrocket-exceptions/src/registerExceptions.js":
/*!*************************************************************************!*\
  !*** ./packages/@apphub:logrocket-exceptions/src/registerExceptions.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerCore;

var _raven = __webpack_require__(/*! ./raven/raven */ "./packages/@apphub:logrocket-exceptions/src/raven/raven.js");

var _raven2 = _interopRequireDefault(_raven);

var _Capture = __webpack_require__(/*! ./Capture */ "./packages/@apphub:logrocket-exceptions/src/Capture.js");

var Capture = _interopRequireWildcard(_Capture);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerCore(logger) {
  var raven = new _raven2.default({
    captureException: function captureException(errorReport) {
      Capture.captureException(logger, null, null, errorReport);
    }
  });

  var rejectionHandler = function rejectionHandler(evt) {
    // http://2ality.com/2016/04/unhandled-rejections.html
    logger.addEvent('lr.core.Exception', function () {
      return {
        exceptionType: 'UNHANDLED_REJECTION',
        message: evt.reason || 'Unhandled Promise rejection'
      };
    });
  };

  window.addEventListener('unhandledrejection', rejectionHandler);

  return function () {
    window.removeEventListener('unhandledrejection', rejectionHandler);
    raven.uninstall();
  };
}

/***/ }),

/***/ "./packages/@apphub:logrocket-exceptions/src/stackTraceFromError.js":
/*!**************************************************************************!*\
  !*** ./packages/@apphub:logrocket-exceptions/src/stackTraceFromError.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stackTraceFromError;
function stackTraceFromError(errorReport) {
  function makeNotNull(val) {
    return val === null ? undefined : val;
  }

  return errorReport.stack ? errorReport.stack.map(function (frame) {
    return {
      lineNumber: makeNotNull(frame.line),
      columnNumber: makeNotNull(frame.column),
      fileName: makeNotNull(frame.url),
      functionName: makeNotNull(frame.func)
    };
  }) : undefined;
}

/***/ }),

/***/ "./packages/@apphub:logrocket-network/src/fetchIntercept.js":
/*!******************************************************************!*\
  !*** ./packages/@apphub:logrocket-network/src/fetchIntercept.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _registerXHR = __webpack_require__(/*! ./registerXHR */ "./packages/@apphub:logrocket-network/src/registerXHR.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var interceptors = [];

function makeInterceptor(fetch, fetchId) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var reversedInterceptors = interceptors.reduce(function (array, interceptor) {
    return [interceptor].concat(array);
  }, []);
  var promise = Promise.resolve(args);

  // Register request interceptors
  reversedInterceptors.forEach(function (_ref) {
    var request = _ref.request,
        requestError = _ref.requestError;

    if (request || requestError) {
      promise = promise.then(function (args) {
        return request.apply(undefined, [fetchId].concat(_toConsumableArray(args)));
      }, function (args) {
        return requestError.apply(undefined, [fetchId].concat(_toConsumableArray(args)));
      });
    }
  });

  promise = promise.then(function (args) {
    (0, _registerXHR.setActive)(false);

    var res = void 0;
    var err = void 0;
    try {
      res = fetch.apply(undefined, _toConsumableArray(args));
    } catch (_err) {
      err = _err;
    }

    (0, _registerXHR.setActive)(true);

    if (err) {
      throw err;
    }
    return res;
  });

  reversedInterceptors.forEach(function (_ref2) {
    var response = _ref2.response,
        responseError = _ref2.responseError;

    if (response || responseError) {
      promise = promise.then(function (res) {
        return response(fetchId, res);
      }, function (err) {
        return responseError && responseError(fetchId, err);
      });
    }
  });

  return promise;
}

function attach(env) {
  if (!env.fetch || !env.Promise) {
    // Make sure fetch is available in the given environment. If it's not, then
    // default to using XHR intercept.
    return;
  }

  var isPolyfill = env.fetch.polyfill;

  // eslint-disable-next-line no-param-reassign
  env.fetch = function (fetch) {
    var fetchId = 0;

    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return makeInterceptor.apply(undefined, [fetch, fetchId++].concat(args));
    };
  }(env.fetch);

  // Forward the polyfill properly from fetch (set by github/whatwg-fetch).
  if (isPolyfill) {
    // eslint-disable-next-line no-param-reassign
    env.fetch.polyfill = isPolyfill;
  }
}

// TODO: React Native
//   attach(global);

var didAttach = false;

exports.default = {
  register: function register(interceptor) {
    if (!didAttach) {
      didAttach = true;
      attach(window);
    }

    interceptors.push(interceptor);
    return function () {
      var index = interceptors.indexOf(interceptor);

      if (index >= 0) {
        interceptors.splice(index, 1);
      }
    };
  },
  clear: function clear() {
    interceptors = [];
  }
};

/***/ }),

/***/ "./packages/@apphub:logrocket-network/src/index.js":
/*!*********************************************************!*\
  !*** ./packages/@apphub:logrocket-network/src/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = registerNetwork;

var _registerFetch = __webpack_require__(/*! ./registerFetch */ "./packages/@apphub:logrocket-network/src/registerFetch.js");

var _registerFetch2 = _interopRequireDefault(_registerFetch);

var _registerXHR = __webpack_require__(/*! ./registerXHR */ "./packages/@apphub:logrocket-network/src/registerXHR.js");

var _registerXHR2 = _interopRequireDefault(_registerXHR);

var _mapValues = __webpack_require__(/*! @apphub/logrocket-utils/src/mapValues */ "./packages/@apphub:logrocket-utils/src/mapValues.js");

var _mapValues2 = _interopRequireDefault(_mapValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerNetwork(logger) {
  var ignoredNetwork = {};

  // truncate if > 4MB in size
  var truncate = function truncate(data) {
    var limit = 1024 * 1000 * 4;
    var str = data;

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && data != null) {
      var proto = Object.getPrototypeOf(data);

      if (proto === Object.prototype || proto === null) {
        // plain object - jsonify for the size check
        str = JSON.stringify(data);
      }
    }

    if (str && str.length && str.length > limit && typeof str === 'string') {
      var beginning = str.substring(0, 1000);
      return beginning + ' ... LogRocket truncating to first 1000 characters.\n      Keep data under 4MB to prevent truncation. https://docs.logrocket.com/reference#network';
    }

    return data;
  };

  var addRequest = function addRequest(reqId, request) {
    var method = request.method;
    logger.addEvent('lr.network.RequestEvent', function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$isEnabled = _ref.isEnabled,
          isEnabled = _ref$isEnabled === undefined ? true : _ref$isEnabled,
          _ref$requestSanitizer = _ref.requestSanitizer,
          requestSanitizer = _ref$requestSanitizer === undefined ? function (f) {
        return f;
      } : _ref$requestSanitizer;

      if (!isEnabled) {
        return null;
      }
      var sanitized = null;
      try {
        // only try catch user defined functions
        sanitized = requestSanitizer(_extends({}, request, { reqId: reqId }));
      } catch (err) {
        console.error(err);
      }
      if (sanitized) {
        // Writing and then reading from an a tag turns a relative
        // url into an absolute one.
        var a = document.createElement('a');
        a.href = sanitized.url;

        return {
          reqId: reqId, // default
          url: a.href, // sanitized
          headers: (0, _mapValues2.default)(sanitized.headers, function (headerValue) {
            // sanitized
            return '' + headerValue;
          }),
          body: truncate(sanitized.body), // sanitized
          method: method, // default
          referrer: sanitized.referrer || undefined, // sanitized
          mode: sanitized.mode || undefined, // sanitized
          credentials: sanitized.credentials || undefined // sanitized
        };
      }
      ignoredNetwork[reqId] = true;
      return null;
    });
  };

  var addResponse = function addResponse(reqId, response) {
    var method = response.method,
        status = response.status;

    logger.addEvent('lr.network.ResponseEvent', function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$isEnabled = _ref2.isEnabled,
          isEnabled = _ref2$isEnabled === undefined ? true : _ref2$isEnabled,
          _ref2$responseSanitiz = _ref2.responseSanitizer,
          responseSanitizer = _ref2$responseSanitiz === undefined ? function (f) {
        return f;
      } : _ref2$responseSanitiz;

      if (!isEnabled) {
        return null;
      } else if (ignoredNetwork[reqId]) {
        delete ignoredNetwork[reqId];
        return null;
      }
      var sanitized = null;

      try {
        // only try catch user defined functions
        sanitized = responseSanitizer(_extends({}, response, { reqId: reqId }));
      } catch (err) {
        console.error(err);
        // fall through to redacted log
      }
      if (sanitized) {
        return {
          reqId: reqId, // default
          status: sanitized.status, // sanitized
          headers: (0, _mapValues2.default)(sanitized.headers, function (headerValue) {
            // sanitized
            return '' + headerValue;
          }),
          body: truncate(sanitized.body), // sanitized
          method: method // default
        };
      }
      return {
        reqId: reqId, // default
        status: status, // default
        headers: {}, // redacted
        body: null, // redacted
        method: method // default
      };
    });
  };

  var isIgnored = function isIgnored(reqId) {
    return logger.isDisabled || ignoredNetwork[reqId] === true;
  };

  var unsubFetch = (0, _registerFetch2.default)({ addRequest: addRequest, addResponse: addResponse, isIgnored: isIgnored });
  var unsubXHR = (0, _registerXHR2.default)({
    addRequest: addRequest,
    addResponse: addResponse,
    isIgnored: isIgnored,
    shouldCloneResponse: logger._shouldCloneResponse
  });

  return function () {
    unsubFetch();
    unsubXHR();
  };
}

/***/ }),

/***/ "./packages/@apphub:logrocket-network/src/registerFetch.js":
/*!*****************************************************************!*\
  !*** ./packages/@apphub:logrocket-network/src/registerFetch.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = registerFetch;

var _mapValues = __webpack_require__(/*! @apphub/logrocket-utils/src/mapValues */ "./packages/@apphub:logrocket-utils/src/mapValues.js");

var _mapValues2 = _interopRequireDefault(_mapValues);

var _fetchIntercept = __webpack_require__(/*! ./fetchIntercept */ "./packages/@apphub:logrocket-network/src/fetchIntercept.js");

var _fetchIntercept2 = _interopRequireDefault(_fetchIntercept);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeObjectFromHeaders(headers) {
  // If using real fetch, we must stringify the Headers object.
  if (headers == null || typeof headers.forEach !== 'function') {
    return headers;
  }

  var result = {};
  headers.forEach(function (value, key) {
    if (result[key]) {
      result[key] = result[key] + ',' + value;
    } else {
      result[key] = '' + value;
    }
  });
  return result;
}

// XHR specification is unclear of what types to allow in value so using toString method for now
var stringifyHeaders = function stringifyHeaders(headers) {
  return (0, _mapValues2.default)(makeObjectFromHeaders(headers), function (value) {
    return '' + value;
  });
};

function pluckFetchFields() {
  var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return {
    url: arg.url,
    headers: stringifyHeaders(arg.headers),
    method: arg.method && arg.method.toUpperCase(),
    referrer: arg.referrer || undefined,
    mode: arg.mode || undefined,
    credentials: arg.credentials || undefined
  };
}

function registerFetch(_ref) {
  var addRequest = _ref.addRequest,
      addResponse = _ref.addResponse,
      isIgnored = _ref.isIgnored;

  var LOGROCKET_FETCH_LABEL = 'fetch-';
  var fetchMethodMap = {};

  var unregister = _fetchIntercept2.default.register({
    request: function request(fetchId) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var p = void 0;

      if (typeof Request !== 'undefined' && args[0] instanceof Request) {
        var clonedText = void 0;

        // Request.clone() and Request.text() may throw in Safari (e.g., when
        // request body contains FormData)
        try {
          clonedText = args[0].clone().text();
        } catch (err) {
          clonedText = Promise.resolve('LogRocket fetch error: ' + err.message);
        }

        p = clonedText.then(function (body) {
          return _extends({}, pluckFetchFields(args[0]), {
            body: body
          });
        }, function (err) {
          return _extends({}, pluckFetchFields(args[0]), {
            body: 'LogRocket fetch error: ' + err.message
          });
        });
      } else {
        p = Promise.resolve(_extends({}, pluckFetchFields(args[1]), {
          url: '' + args[0],
          body: (args[1] || {}).body
        }));
      }

      return p.then(function (req) {
        fetchMethodMap[fetchId] = req.method;
        addRequest('' + LOGROCKET_FETCH_LABEL + fetchId, req);
        return args;
      });
    },
    requestError: function requestError(fetchId, error) {
      return Promise.reject(error);
    },
    response: function response(fetchId, _response) {
      var clonedText = void 0;

      if (isIgnored('' + LOGROCKET_FETCH_LABEL + fetchId)) {
        // Don't even try to read ignored requests
        return _response;
      }

      try {
        // TODO: enhance function on original response and future clones for:
        // text(), json(), blob(), formdata(), arraybuffer()
        clonedText = _response.clone().text();
      } catch (err) {
        // safari has a bug where cloning can fail
        clonedText = Promise.resolve('LogRocket fetch error: ' + err.message);
      }

      return clonedText.then(function (data) {
        var responseHash = {
          url: _response.url,
          status: _response.status,
          headers: stringifyHeaders(_response.headers),
          body: data,
          method: fetchMethodMap[fetchId]
        };
        delete fetchMethodMap[fetchId];
        addResponse('' + LOGROCKET_FETCH_LABEL + fetchId, responseHash);
        return _response;
      });
    },
    responseError: function responseError(fetchId, error) {
      var response = {
        url: undefined,
        status: 0,
        headers: {},
        body: '' + error
      };
      addResponse('' + LOGROCKET_FETCH_LABEL + fetchId, response);
      return Promise.reject(error);
    }
  });

  return unregister;
}

/***/ }),

/***/ "./packages/@apphub:logrocket-network/src/registerXHR.js":
/*!***************************************************************!*\
  !*** ./packages/@apphub:logrocket-network/src/registerXHR.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setActive = setActive;
exports.default = registerXHR;

var _mapValues = __webpack_require__(/*! @apphub/logrocket-utils/src/mapValues */ "./packages/@apphub:logrocket-utils/src/mapValues.js");

var _mapValues2 = _interopRequireDefault(_mapValues);

var _enhanceFunc = __webpack_require__(/*! @apphub/logrocket-utils/src/enhanceFunc */ "./packages/@apphub:logrocket-utils/src/enhanceFunc.js");

var _enhanceFunc2 = _interopRequireDefault(_enhanceFunc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isActive = true;

function setActive(shouldBeActive) {
  isActive = shouldBeActive;
}

var currentXHRId = 0;
function registerXHR(_ref) {
  var addRequest = _ref.addRequest,
      addResponse = _ref.addResponse,
      isIgnored = _ref.isIgnored,
      _ref$shouldCloneRespo = _ref.shouldCloneResponse,
      shouldCloneResponse = _ref$shouldCloneRespo === undefined ? false : _ref$shouldCloneRespo;

  var _XHR = XMLHttpRequest;
  var xhrMap = new WeakMap();
  var unsubscribedFromXhr = false;
  var LOGROCKET_XHR_LABEL = 'xhr-';

  window._lrXMLHttpRequest = XMLHttpRequest;

  // eslint-disable-next-line no-native-reassign
  XMLHttpRequest = function XMLHttpRequest(mozAnon, mozSystem) {
    var xhrObject = new _XHR(mozAnon, mozSystem);
    if (!isActive) {
      return xhrObject;
    }

    xhrMap.set(xhrObject, {
      xhrId: ++currentXHRId,
      headers: {}
    });

    // ..., 'open', (method, url, async, username, password) => {
    (0, _enhanceFunc2.default)(xhrObject, 'open', function (method, url) {
      if (unsubscribedFromXhr) return;
      var currentXHR = xhrMap.get(xhrObject);
      currentXHR.method = method;
      currentXHR.url = url;
    });

    (0, _enhanceFunc2.default)(xhrObject, 'send', function (data) {
      if (unsubscribedFromXhr) return;
      var currentXHR = xhrMap.get(xhrObject);
      if (!currentXHR) return;

      var request = {
        url: currentXHR.url,
        method: currentXHR.method && currentXHR.method.toUpperCase(),
        headers: (0, _mapValues2.default)(currentXHR.headers || {}, function (headerValues) {
          return headerValues.join(', ');
        }),
        body: data
      };
      addRequest('' + LOGROCKET_XHR_LABEL + currentXHR.xhrId, request);
    });

    (0, _enhanceFunc2.default)(xhrObject, 'setRequestHeader', function (header, value) {
      if (unsubscribedFromXhr) return;
      var currentXHR = xhrMap.get(xhrObject);
      if (!currentXHR) return;

      currentXHR.headers = currentXHR.headers || {};
      currentXHR.headers[header] = currentXHR.headers[header] || [];
      currentXHR.headers[header].push(value);
    });

    var xhrListeners = {
      readystatechange: function readystatechange() {
        if (unsubscribedFromXhr) return;

        if (xhrObject.readyState === 4) {
          var currentXHR = xhrMap.get(xhrObject);
          if (!currentXHR) return;

          // Do not read ignored requests at all.
          if (isIgnored('' + LOGROCKET_XHR_LABEL + currentXHR.xhrId)) return;

          var headerString = xhrObject.getAllResponseHeaders();

          var headers = headerString.split(/[\r\n]+/).reduce(function (previous, current) {
            var next = previous;
            var headerParts = current.split(': ');
            if (headerParts.length > 0) {
              var key = headerParts.shift(); // first index of the array
              var value = headerParts.join(': '); // rest of the array repaired
              if (previous[key]) {
                next[key] += ', ' + value;
              } else {
                next[key] = value;
              }
            }
            return next;
          }, {});

          var body = void 0;

          // IE 11 sometimes throws when trying to access large responses
          try {
            switch (xhrObject.responseType) {
              case 'json':
                body = shouldCloneResponse ? JSON.parse(JSON.stringify(xhrObject.response)) : xhrObject.response;
                break;
              case 'arraybuffer':
              case 'blob':
                {
                  body = xhrObject.response;
                  break;
                }
              case 'document':
                {
                  body = xhrObject.responseXML;
                  break;
                }
              case 'text':
              case '':
                {
                  body = xhrObject.responseText;
                  break;
                }
              default:
                {
                  body = '';
                }
            }
          } catch (err) {
            body = 'LogRocket: Error accessing response.';
          }

          var response = {
            url: currentXHR.url,
            status: xhrObject.status,
            headers: headers,
            body: body,
            method: (currentXHR.method || '').toUpperCase()
          };

          addResponse('' + LOGROCKET_XHR_LABEL + currentXHR.xhrId, response);
        }
      }
      // // Unused Event Listeners
      // loadstart: () => {},
      // progress: () => {},
      // abort: () => {},
      // error: () => {},
      // load: () => {},
      // timeout: () => {},
      // loadend: () => {},
    };

    Object.keys(xhrListeners).forEach(function (key) {
      xhrObject.addEventListener(key, xhrListeners[key]);
    });

    return xhrObject;
  };

  // this allows "instanceof XMLHttpRequest" to work
  XMLHttpRequest.prototype = _XHR.prototype;

  // Persist the static variables.
  ['UNSENT', 'OPENED', 'HEADERS_RECEIVED', 'LOADING', 'DONE'].forEach(function (variable) {
    XMLHttpRequest[variable] = _XHR[variable];
  });

  return function () {
    unsubscribedFromXhr = true;
    // eslint-disable-next-line no-native-reassign
    XMLHttpRequest = _XHR;
  };
}

/***/ }),

/***/ "./packages/@apphub:logrocket-redux/src/createEnhancer.js":
/*!****************************************************************!*\
  !*** ./packages/@apphub:logrocket-redux/src/createEnhancer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createEnhancer;

var _now = __webpack_require__(/*! @apphub/now */ "./packages/@apphub:now/src/index.js");

var _now2 = _interopRequireDefault(_now);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeIdCounter = 0;

function createEnhancer(logger) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$stateSanitizer = _ref.stateSanitizer,
      stateSanitizer = _ref$stateSanitizer === undefined ? function (f) {
    return f;
  } : _ref$stateSanitizer,
      _ref$actionSanitizer = _ref.actionSanitizer,
      actionSanitizer = _ref$actionSanitizer === undefined ? function (f) {
    return f;
  } : _ref$actionSanitizer;

  // an enhancer is a function that returns a Store
  return function (createStore) {
    return function (reducer, initialState, enhancer) {
      var store = createStore(reducer, initialState, enhancer);
      var originalDispatch = store.dispatch;
      var storeId = storeIdCounter++;
      logger.addEvent('lr.redux.InitialState', function () {
        var sanitizedState = void 0;
        try {
          // only try catch user defined functions
          sanitizedState = stateSanitizer(store.getState());
        } catch (err) {
          console.error(err.toString());
        }

        return {
          state: sanitizedState,
          storeId: storeId
        };
      });

      var dispatch = function dispatch(action) {
        var start = (0, _now2.default)();

        var err = void 0;
        var res = void 0;
        try {
          res = originalDispatch(action);
        } catch (_err) {
          err = _err;
        } finally {
          var duration = (0, _now2.default)() - start;

          logger.addEvent('lr.redux.ReduxAction', function () {
            var sanitizedState = null;
            var sanitizedAction = null;

            try {
              // only try catch user defined functions
              sanitizedState = stateSanitizer(store.getState());
              sanitizedAction = actionSanitizer(action);
            } catch (err) {
              console.error(err.toString());
            }

            if (sanitizedState && sanitizedAction) {
              return {
                storeId: storeId,
                action: sanitizedAction,
                duration: duration,
                stateDelta: sanitizedState
              };
            }
            return null;
          });
        }

        if (err) {
          throw err;
        }

        return res;
      };

      return _extends({}, store, {
        dispatch: dispatch
      });
    };
  };
}

/***/ }),

/***/ "./packages/@apphub:logrocket-redux/src/createMiddleware.js":
/*!******************************************************************!*\
  !*** ./packages/@apphub:logrocket-redux/src/createMiddleware.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMiddleware;

var _now = __webpack_require__(/*! @apphub/now */ "./packages/@apphub:now/src/index.js");

var _now2 = _interopRequireDefault(_now);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeIdCounter = 0;

function createMiddleware(logger) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$stateSanitizer = _ref.stateSanitizer,
      stateSanitizer = _ref$stateSanitizer === undefined ? function (f) {
    return f;
  } : _ref$stateSanitizer,
      _ref$actionSanitizer = _ref.actionSanitizer,
      actionSanitizer = _ref$actionSanitizer === undefined ? function (f) {
    return f;
  } : _ref$actionSanitizer;

  return function (store) {
    var storeId = storeIdCounter++;
    logger.addEvent('lr.redux.InitialState', function () {
      var sanitizedState = void 0;
      try {
        // only try catch user defined functions
        sanitizedState = stateSanitizer(store.getState());
      } catch (err) {
        console.error(err.toString());
      }

      return {
        state: sanitizedState,
        storeId: storeId
      };
    });

    return function (next) {
      return function (action) {
        var start = (0, _now2.default)();

        var err = void 0;
        var res = void 0;
        try {
          res = next(action);
        } catch (_err) {
          err = _err;
        } finally {
          var duration = (0, _now2.default)() - start;

          logger.addEvent('lr.redux.ReduxAction', function () {
            var sanitizedState = null;
            var sanitizedAction = null;

            try {
              // only try catch user defined functions
              sanitizedState = stateSanitizer(store.getState());
              sanitizedAction = actionSanitizer(action);
            } catch (err) {
              console.error(err.toString());
            }

            if (sanitizedState && sanitizedAction) {
              return {
                storeId: storeId,
                action: sanitizedAction,
                duration: duration,
                stateDelta: sanitizedState
              };
            }
            return null;
          });
        }

        if (err) {
          throw err;
        }

        return res;
      };
    };
  };
}

/***/ }),

/***/ "./packages/@apphub:logrocket-redux/src/index.js":
/*!*******************************************************!*\
  !*** ./packages/@apphub:logrocket-redux/src/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEnhancer = exports.createMiddleware = undefined;

var _createEnhancer = __webpack_require__(/*! ./createEnhancer */ "./packages/@apphub:logrocket-redux/src/createEnhancer.js");

var _createEnhancer2 = _interopRequireDefault(_createEnhancer);

var _createMiddleware = __webpack_require__(/*! ./createMiddleware */ "./packages/@apphub:logrocket-redux/src/createMiddleware.js");

var _createMiddleware2 = _interopRequireDefault(_createMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createMiddleware = _createMiddleware2.default;
exports.createEnhancer = _createEnhancer2.default;

/***/ }),

/***/ "./packages/@apphub:logrocket-utils/src/TraceKit.js":
/*!**********************************************************!*\
  !*** ./packages/@apphub:logrocket-utils/src/TraceKit.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* eslint-disable */



/*
 TraceKit - Cross brower stack traces - github.com/occ/TraceKit

 This was originally forked from github.com/occ/TraceKit, but has since been
 largely re-written and is now maintained as part of raven-js.  Tests for
 this are in test/vendor.

 MIT license
*/

var TraceKit = {
    collectWindowErrors: true,
    debug: false
};

// This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
var _window = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

// global reference to slice
var _slice = [].slice;
var UNKNOWN_FUNCTION = '?';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types
var ERROR_TYPES_RE = /^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;

function getLocationHref() {
    if (typeof document === 'undefined' || typeof document.location === 'undefined') return '';

    return document.location.href;
}

/**
 * TraceKit.report: cross-browser processing of unhandled exceptions
 *
 * Syntax:
 *   TraceKit.report.subscribe(function(stackInfo) { ... })
 *   TraceKit.report.unsubscribe(function(stackInfo) { ... })
 *   TraceKit.report(exception)
 *   try { ...code... } catch(ex) { TraceKit.report(ex); }
 *
 * Supports:
 *   - Firefox: full stack trace with line numbers, plus column number
 *              on top frame; column number is not guaranteed
 *   - Opera:   full stack trace with line and column numbers
 *   - Chrome:  full stack trace with line and column numbers
 *   - Safari:  line and column number for the top frame only; some frames
 *              may be missing, and column number is not guaranteed
 *   - IE:      line and column number for the top frame only; some frames
 *              may be missing, and column number is not guaranteed
 *
 * In theory, TraceKit should work on all of the following versions:
 *   - IE5.5+ (only 8.0 tested)
 *   - Firefox 0.9+ (only 3.5+ tested)
 *   - Opera 7+ (only 10.50 tested; versions 9 and earlier may require
 *     Exceptions Have Stacktrace to be enabled in opera:config)
 *   - Safari 3+ (only 4+ tested)
 *   - Chrome 1+ (only 5+ tested)
 *   - Konqueror 3.5+ (untested)
 *
 * Requires TraceKit.computeStackTrace.
 *
 * Tries to catch all unhandled exceptions and report them to the
 * subscribed handlers. Please note that TraceKit.report will rethrow the
 * exception. This is REQUIRED in order to get a useful stack trace in IE.
 * If the exception does not reach the top of the browser, you will only
 * get a stack trace from the point where TraceKit.report was called.
 *
 * Handlers receive a stackInfo object as described in the
 * TraceKit.computeStackTrace docs.
 */
TraceKit.report = function reportModuleWrapper() {
    var handlers = [],
        lastArgs = null,
        lastException = null,
        lastExceptionStack = null;

    /**
     * Add a crash handler.
     * @param {Function} handler
     */
    function subscribe(handler) {
        installGlobalHandler();
        handlers.push(handler);
    }

    /**
     * Remove a crash handler.
     * @param {Function} handler
     */
    function unsubscribe(handler) {
        for (var i = handlers.length - 1; i >= 0; --i) {
            if (handlers[i] === handler) {
                handlers.splice(i, 1);
            }
        }
    }

    /**
     * Remove all crash handlers.
     */
    function unsubscribeAll() {
        uninstallGlobalHandler();
        handlers = [];
    }

    /**
     * Dispatch stack information to all handlers.
     * @param {Object.<string, *>} stack
     */
    function notifyHandlers(stack, isWindowError) {
        var exception = null;
        if (isWindowError && !TraceKit.collectWindowErrors) {
            return;
        }
        for (var i in handlers) {
            if (handlers.hasOwnProperty(i)) {
                try {
                    handlers[i].apply(null, [stack].concat(_slice.call(arguments, 2)));
                } catch (inner) {
                    exception = inner;
                }
            }
        }

        if (exception) {
            throw exception;
        }
    }

    var _oldOnerrorHandler, _onErrorHandlerInstalled;

    /**
     * Ensures all global unhandled exceptions are recorded.
     * Supported by Gecko and IE.
     * @param {string} message Error message.
     * @param {string} url URL of script that generated the exception.
     * @param {(number|string)} lineNo The line number at which the error
     * occurred.
     * @param {?(number|string)} colNo The column number at which the error
     * occurred.
     * @param {?Error} ex The actual Error object.
     */
    function traceKitWindowOnError(message, url, lineNo, colNo, ex) {
        var stack = null;

        if (lastExceptionStack) {
            TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(lastExceptionStack, url, lineNo, message);
            processLastException();
        } else if (ex) {
            // New chrome and blink send along a real error object
            // Let's just report that like a normal error.
            // See: https://mikewest.org/2013/08/debugging-runtime-errors-with-window-onerror
            stack = TraceKit.computeStackTrace(ex);
            notifyHandlers(stack, true);
        } else {
            var location = {
                'url': url,
                'line': lineNo,
                'column': colNo
            };

            var name = undefined;
            var msg = message; // must be new var or will modify original `arguments`
            var groups;
            if ({}.toString.call(message) === '[object String]') {
                var groups = message.match(ERROR_TYPES_RE);
                if (groups) {
                    name = groups[1];
                    msg = groups[2];
                }
            }

            location.func = UNKNOWN_FUNCTION;

            stack = {
                'name': name,
                'message': msg,
                'url': getLocationHref(),
                'stack': [location]
            };
            notifyHandlers(stack, true);
        }

        if (_oldOnerrorHandler) {
            return _oldOnerrorHandler.apply(this, arguments);
        }

        return false;
    }

    function installGlobalHandler() {
        if (_onErrorHandlerInstalled) {
            return;
        }
        _oldOnerrorHandler = _window.onerror;
        _window.onerror = traceKitWindowOnError;
        _onErrorHandlerInstalled = true;
    }

    function uninstallGlobalHandler() {
        if (!_onErrorHandlerInstalled) {
            return;
        }
        _window.onerror = _oldOnerrorHandler;
        _onErrorHandlerInstalled = false;
        _oldOnerrorHandler = undefined;
    }

    function processLastException() {
        var _lastExceptionStack = lastExceptionStack,
            _lastArgs = lastArgs;
        lastArgs = null;
        lastExceptionStack = null;
        lastException = null;
        notifyHandlers.apply(null, [_lastExceptionStack, false].concat(_lastArgs));
    }

    /**
     * Reports an unhandled Error to TraceKit.
     * @param {Error} ex
     * @param {?boolean} rethrow If false, do not re-throw the exception.
     * Only used for window.onerror to not cause an infinite loop of
     * rethrowing.
     */
    function report(ex, rethrow) {
        var args = _slice.call(arguments, 1);
        if (lastExceptionStack) {
            if (lastException === ex) {
                return; // already caught by an inner catch block, ignore
            } else {
                processLastException();
            }
        }

        var stack = TraceKit.computeStackTrace(ex);
        lastExceptionStack = stack;
        lastException = ex;
        lastArgs = args;

        // If the stack trace is incomplete, wait for 2 seconds for
        // slow slow IE to see if onerror occurs or not before reporting
        // this exception; otherwise, we will end up with an incomplete
        // stack trace
        setTimeout(function () {
            if (lastException === ex) {
                processLastException();
            }
        }, stack.incomplete ? 2000 : 0);

        if (rethrow !== false) {
            throw ex; // re-throw to propagate to the top level (and cause window.onerror)
        }
    }

    report.subscribe = subscribe;
    report.unsubscribe = unsubscribe;
    report.uninstall = unsubscribeAll;
    return report;
}();

/**
 * TraceKit.computeStackTrace: cross-browser stack traces in JavaScript
 *
 * Syntax:
 *   s = TraceKit.computeStackTrace(exception) // consider using TraceKit.report instead (see below)
 * Returns:
 *   s.name              - exception name
 *   s.message           - exception message
 *   s.stack[i].url      - JavaScript or HTML file URL
 *   s.stack[i].func     - function name, or empty for anonymous functions (if guessing did not work)
 *   s.stack[i].args     - arguments passed to the function, if known
 *   s.stack[i].line     - line number, if known
 *   s.stack[i].column   - column number, if known
 *
 * Supports:
 *   - Firefox:  full stack trace with line numbers and unreliable column
 *               number on top frame
 *   - Opera 10: full stack trace with line and column numbers
 *   - Opera 9-: full stack trace with line numbers
 *   - Chrome:   full stack trace with line and column numbers
 *   - Safari:   line and column number for the topmost stacktrace element
 *               only
 *   - IE:       no line numbers whatsoever
 *
 * Tries to guess names of anonymous functions by looking for assignments
 * in the source code. In IE and Safari, we have to guess source file names
 * by searching for function bodies inside all page scripts. This will not
 * work for scripts that are loaded cross-domain.
 * Here be dragons: some function names may be guessed incorrectly, and
 * duplicate functions may be mismatched.
 *
 * TraceKit.computeStackTrace should only be used for tracing purposes.
 * Logging of unhandled exceptions should be done with TraceKit.report,
 * which builds on top of TraceKit.computeStackTrace and provides better
 * IE support by utilizing the window.onerror event to retrieve information
 * about the top of the stack.
 *
 * Note: In IE and Safari, no stack trace is recorded on the Error object,
 * so computeStackTrace instead walks its *own* chain of callers.
 * This means that:
 *  * in Safari, some methods may be missing from the stack trace;
 *  * in IE, the topmost function in the stack trace will always be the
 *    caller of computeStackTrace.
 *
 * This is okay for tracing (because you are likely to be calling
 * computeStackTrace from the function you want to be the topmost element
 * of the stack trace anyway), but not okay for logging unhandled
 * exceptions (because your catch block will likely be far away from the
 * inner function that actually caused the exception).
 *
 */
TraceKit.computeStackTrace = function computeStackTraceWrapper() {
    /**
     * Escapes special characters, except for whitespace, in a string to be
     * used inside a regular expression as a string literal.
     * @param {string} text The string.
     * @return {string} The escaped string literal.
     */
    function escapeRegExp(text) {
        return text.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, '\\$&');
    }

    /**
     * Escapes special characters in a string to be used inside a regular
     * expression as a string literal. Also ensures that HTML entities will
     * be matched the same as their literal friends.
     * @param {string} body The string.
     * @return {string} The escaped string.
     */
    function escapeCodeAsRegExpForMatchingInsideHTML(body) {
        return escapeRegExp(body).replace('<', '(?:<|&lt;)').replace('>', '(?:>|&gt;)').replace('&', '(?:&|&amp;)').replace('"', '(?:"|&quot;)').replace(/\s+/g, '\\s+');
    }

    // Contents of Exception in various browsers.
    //
    // SAFARI:
    // ex.message = Can't find variable: qq
    // ex.line = 59
    // ex.sourceId = 580238192
    // ex.sourceURL = http://...
    // ex.expressionBeginOffset = 96
    // ex.expressionCaretOffset = 98
    // ex.expressionEndOffset = 98
    // ex.name = ReferenceError
    //
    // FIREFOX:
    // ex.message = qq is not defined
    // ex.fileName = http://...
    // ex.lineNumber = 59
    // ex.columnNumber = 69
    // ex.stack = ...stack trace... (see the example below)
    // ex.name = ReferenceError
    //
    // CHROME:
    // ex.message = qq is not defined
    // ex.name = ReferenceError
    // ex.type = not_defined
    // ex.arguments = ['aa']
    // ex.stack = ...stack trace...
    //
    // INTERNET EXPLORER:
    // ex.message = ...
    // ex.name = ReferenceError
    //
    // OPERA:
    // ex.message = ...message... (see the example below)
    // ex.name = ReferenceError
    // ex.opera#sourceloc = 11  (pretty much useless, duplicates the info in ex.message)
    // ex.stacktrace = n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'

    /**
     * Computes stack trace information from the stack property.
     * Chrome and Gecko use this property.
     * @param {Error} ex
     * @return {?Object.<string, *>} Stack trace information.
     */
    function computeStackTraceFromStackProp(ex) {
        if (typeof ex.stack === 'undefined' || !ex.stack) return;

        var chrome = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
            gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i,
            winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
            lines = ex.stack.split('\n'),
            stack = [],
            parts,
            element,
            reference = /^(.*) is undefined$/.exec(ex.message);

        for (var i = 0, j = lines.length; i < j; ++i) {
            if (parts = chrome.exec(lines[i])) {
                var isNative = parts[2] && parts[2].indexOf('native') !== -1;
                element = {
                    'url': !isNative ? parts[2] : null,
                    'func': parts[1] || UNKNOWN_FUNCTION,
                    'args': isNative ? [parts[2]] : [],
                    'line': parts[3] ? +parts[3] : null,
                    'column': parts[4] ? +parts[4] : null
                };
            } else if (parts = winjs.exec(lines[i])) {
                element = {
                    'url': parts[2],
                    'func': parts[1] || UNKNOWN_FUNCTION,
                    'args': [],
                    'line': +parts[3],
                    'column': parts[4] ? +parts[4] : null
                };
            } else if (parts = gecko.exec(lines[i])) {
                element = {
                    'url': parts[3],
                    'func': parts[1] || UNKNOWN_FUNCTION,
                    'args': parts[2] ? parts[2].split(',') : [],
                    'line': parts[4] ? +parts[4] : null,
                    'column': parts[5] ? +parts[5] : null
                };
            } else {
                continue;
            }

            if (!element.func && element.line) {
                element.func = UNKNOWN_FUNCTION;
            }

            stack.push(element);
        }

        if (!stack.length) {
            return null;
        }

        if (!stack[0].column && typeof ex.columnNumber !== 'undefined') {
            // FireFox uses this awesome columnNumber property for its top frame
            // Also note, Firefox's column number is 0-based and everything else expects 1-based,
            // so adding 1
            stack[0].column = ex.columnNumber + 1;
        }

        return {
            'name': ex.name,
            'message': ex.message,
            'url': getLocationHref(),
            'stack': stack
        };
    }

    /**
     * Adds information about the first frame to incomplete stack traces.
     * Safari and IE require this to get complete data on the first frame.
     * @param {Object.<string, *>} stackInfo Stack trace information from
     * one of the compute* methods.
     * @param {string} url The URL of the script that caused an error.
     * @param {(number|string)} lineNo The line number of the script that
     * caused an error.
     * @param {string=} message The error generated by the browser, which
     * hopefully contains the name of the object that caused the error.
     * @return {boolean} Whether or not the stack information was
     * augmented.
     */
    function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
        var initial = {
            'url': url,
            'line': lineNo
        };

        if (initial.url && initial.line) {
            stackInfo.incomplete = false;

            if (!initial.func) {
                initial.func = UNKNOWN_FUNCTION;
            }

            if (stackInfo.stack.length > 0) {
                if (stackInfo.stack[0].url === initial.url) {
                    if (stackInfo.stack[0].line === initial.line) {
                        return false; // already in stack trace
                    } else if (!stackInfo.stack[0].line && stackInfo.stack[0].func === initial.func) {
                        stackInfo.stack[0].line = initial.line;
                        return false;
                    }
                }
            }

            stackInfo.stack.unshift(initial);
            stackInfo.partial = true;
            return true;
        } else {
            stackInfo.incomplete = true;
        }

        return false;
    }

    /**
     * Computes stack trace information by walking the arguments.caller
     * chain at the time the exception occurred. This will cause earlier
     * frames to be missed but is the only way to get any stack trace in
     * Safari and IE. The top frame is restored by
     * {@link augmentStackTraceWithInitialElement}.
     * @param {Error} ex
     * @return {?Object.<string, *>} Stack trace information.
     */
    function computeStackTraceByWalkingCallerChain(ex, depth) {
        var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
            stack = [],
            funcs = {},
            recursion = false,
            parts,
            item,
            source;

        for (var curr = computeStackTraceByWalkingCallerChain.caller; curr && !recursion; curr = curr.caller) {
            if (curr === computeStackTrace || curr === TraceKit.report) {
                // console.log('skipping internal function');
                continue;
            }

            item = {
                'url': null,
                'func': UNKNOWN_FUNCTION,
                'line': null,
                'column': null
            };

            if (curr.name) {
                item.func = curr.name;
            } else if (parts = functionName.exec(curr.toString())) {
                item.func = parts[1];
            }

            if (typeof item.func === 'undefined') {
                try {
                    item.func = parts.input.substring(0, parts.input.indexOf('{'));
                } catch (e) {}
            }

            if (funcs['' + curr]) {
                recursion = true;
            } else {
                funcs['' + curr] = true;
            }

            stack.push(item);
        }

        if (depth) {
            // console.log('depth is ' + depth);
            // console.log('stack is ' + stack.length);
            stack.splice(0, depth);
        }

        var result = {
            'name': ex.name,
            'message': ex.message,
            'url': getLocationHref(),
            'stack': stack
        };
        augmentStackTraceWithInitialElement(result, ex.sourceURL || ex.fileName, ex.line || ex.lineNumber, ex.message || ex.description);
        return result;
    }

    /**
     * Computes a stack trace for an exception.
     * @param {Error} ex
     * @param {(string|number)=} depth
     */
    function computeStackTrace(ex, depth) {
        var stack = null;
        depth = depth == null ? 0 : +depth;

        try {
            stack = computeStackTraceFromStackProp(ex);
            if (stack) {
                return stack;
            }
        } catch (e) {
            if (TraceKit.debug) {
                throw e;
            }
        }

        try {
            stack = computeStackTraceByWalkingCallerChain(ex, depth + 1);
            if (stack) {
                return stack;
            }
        } catch (e) {
            if (TraceKit.debug) {
                throw e;
            }
        }

        return {
            'name': ex.name,
            'message': ex.message,
            'url': getLocationHref()
        };
    }

    computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
    computeStackTrace.computeStackTraceFromStackProp = computeStackTraceFromStackProp;

    return computeStackTrace;
}();

module.exports = TraceKit;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./packages/@apphub:logrocket-utils/src/enhanceFunc.js":
/*!*************************************************************!*\
  !*** ./packages/@apphub:logrocket-utils/src/enhanceFunc.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = enhanceFunc;
/* eslint no-param-reassign: ["error", { "props": false }] */

function enhanceFunc(obj, method, handler) {
  var original = obj[method];

  function shim() {
    var res = void 0;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (original) {
      res = original.apply(this, args);
    }

    handler.apply(this, args);
    return res;
  }

  obj[method] = shim;

  return function () {
    obj[method] = original;
  };
}

/***/ }),

/***/ "./packages/@apphub:logrocket-utils/src/mapValues.js":
/*!***********************************************************!*\
  !*** ./packages/@apphub:logrocket-utils/src/mapValues.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapValues;
function mapValues(obj, f) {
  if (obj == null) {
    return {};
  }

  var res = {};
  Object.keys(obj).forEach(function (key) {
    res[key] = f(obj[key]);
  });
  return res;
}

/***/ }),

/***/ "./packages/@apphub:now/src/index.js":
/*!*******************************************!*\
  !*** ./packages/@apphub:now/src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var dateNow=Date.now.bind(Date);var loadTime=dateNow();exports.default=typeof performance!=='undefined'&&performance.now?performance.now.bind(performance):function(){return dateNow()-loadTime;};module.exports=exports['default'];

/***/ }),

/***/ "./packages/logrocket/src/LogRocket.js":
/*!*********************************************!*\
  !*** ./packages/logrocket/src/LogRocket.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_QUEUE_SIZE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _logrocketNetwork = __webpack_require__(/*! @apphub/logrocket-network */ "./packages/@apphub:logrocket-network/src/index.js");

var _logrocketNetwork2 = _interopRequireDefault(_logrocketNetwork);

var _logrocketExceptions = __webpack_require__(/*! @apphub/logrocket-exceptions */ "./packages/@apphub:logrocket-exceptions/src/index.js");

var _logrocketConsole = __webpack_require__(/*! @apphub/logrocket-console */ "./packages/@apphub:logrocket-console/src/index.js");

var _logrocketConsole2 = _interopRequireDefault(_logrocketConsole);

var _logrocketRedux = __webpack_require__(/*! @apphub/logrocket-redux */ "./packages/@apphub:logrocket-redux/src/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var MAX_QUEUE_SIZE = exports.MAX_QUEUE_SIZE = 1000;

var considerIngestServerOption = function considerIngestServerOption() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var ingestServer = _ref.ingestServer,
      options = _objectWithoutProperties(_ref, ['ingestServer']);

  if (ingestServer) {
    return _extends({
      serverURL: ingestServer + '/i',
      statsURL: ingestServer + '/s'
    }, options);
  }

  return options;
};

var LogRocket = function () {
  function LogRocket() {
    var _this = this;

    _classCallCheck(this, LogRocket);

    this._buffer = [];

    // TODO: tests for these exposed methods.
    ['log', 'info', 'warn', 'error', 'debug'].forEach(function (method) {
      _this[method] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this.addEvent('lr.core.LogEvent', function () {
          var consoleOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (method === 'error' && consoleOptions.shouldAggregateConsoleErrors) {
            _logrocketExceptions.Capture.captureMessage(_this, args[0], {}, true);
          }

          return {
            logLevel: method.toUpperCase(),
            args: args
          };
        }, { shouldCaptureStackTrace: true });
      };
    });
    this._isInitialized = false;
    this._installed = [];
  }

  _createClass(LogRocket, [{
    key: 'addEvent',
    value: function addEvent(type, getMessage) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var time = Date.now();
      this._run(function (logger) {
        logger.addEvent(type, getMessage, _extends({}, opts, {
          timeOverride: time
        }));
      });
    }
  }, {
    key: 'onLogger',
    value: function onLogger(logger) {
      this._logger = logger;

      while (this._buffer.length > 0) {
        var f = this._buffer.shift();
        f(this._logger);
      }
    }
  }, {
    key: '_run',
    value: function _run(f) {
      if (this._isDisabled) {
        return;
      }

      if (this._logger) {
        f(this._logger);
      } else {
        if (this._buffer.length >= MAX_QUEUE_SIZE) {
          this._isDisabled = true;
          console.warn('LogRocket: script did not load. Check that you have a valid network connection.');
          this.uninstall();
          return;
        }

        this._buffer.push(f.bind(this));
      }
    }
  }, {
    key: 'init',
    value: function init(appID, opts) {
      if (!this._isInitialized) {
        this._installed.push((0, _logrocketExceptions.registerExceptions)(this));
        this._installed.push((0, _logrocketNetwork2.default)(this));
        this._installed.push((0, _logrocketConsole2.default)(this));

        this._isInitialized = true;

        this._run(function (logger) {
          logger.init(appID, considerIngestServerOption(opts));
        });
      }
    }
  }, {
    key: 'start',
    value: function start() {
      this._run(function (logger) {
        logger.start();
      });
    }
  }, {
    key: 'uninstall',
    value: function uninstall() {
      this._installed.forEach(function (f) {
        return f();
      });
      this._buffer = [];

      this._run(function (logger) {
        logger.uninstall();
      });
    }
  }, {
    key: 'identify',
    value: function identify(id, opts) {
      this._run(function (logger) {
        logger.identify(id, opts);
      });
    }
  }, {
    key: 'startNewSession',
    value: function startNewSession() {
      this._run(function (logger) {
        logger.startNewSession();
      });
    }
  }, {
    key: 'track',
    value: function track(customEventName) {
      this._run(function (logger) {
        logger.track(customEventName);
      });
    }
  }, {
    key: 'getSessionURL',
    value: function getSessionURL(cb) {
      if (typeof cb !== 'function') {
        throw new Error('LogRocket: must pass callback to getSessionURL()');
      }

      this._run(function (logger) {
        if (logger.getSessionURL) {
          logger.getSessionURL(cb);
        } else {
          cb(logger.recordingURL);
        }
      });
    }
  }, {
    key: 'getVersion',
    value: function getVersion(cb) {
      this._run(function (logger) {
        cb(logger.version);
      });
    }
  }, {
    key: 'captureMessage',
    value: function captureMessage(message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _logrocketExceptions.Capture.captureMessage(this, message, options);
    }
  }, {
    key: 'captureException',
    value: function captureException(exception) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _logrocketExceptions.Capture.captureException(this, exception, options);
    }
  }, {
    key: 'reduxEnhancer',
    value: function reduxEnhancer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return (0, _logrocketRedux.createEnhancer)(this, options);
    }
  }, {
    key: 'reduxMiddleware',
    value: function reduxMiddleware() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return (0, _logrocketRedux.createMiddleware)(this, options);
    }
  }, {
    key: 'version',
    get: function get() {
      return this._logger && this._logger.version;
    }
  }, {
    key: 'sessionURL',
    get: function get() {
      return this._logger && this._logger.recordingURL;
    }
  }, {
    key: 'recordingURL',
    get: function get() {
      return this._logger && this._logger.recordingURL;
    }
  }, {
    key: 'recordingID',
    get: function get() {
      return this._logger && this._logger.recordingID;
    }
  }, {
    key: 'threadID',
    get: function get() {
      return this._logger && this._logger.threadID;
    }
  }, {
    key: 'tabID',
    get: function get() {
      return this._logger && this._logger.tabID;
    }
  }, {
    key: 'isDisabled',
    get: function get() {
      return !!(this._isDisabled || this._logger && this._logger._isDisabled);
    }
  }]);

  return LogRocket;
}();

exports.default = LogRocket;

/***/ }),

/***/ "./packages/logrocket/src/makeLogRocket.js":
/*!*************************************************!*\
  !*** ./packages/logrocket/src/makeLogRocket.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeLogRocket;

var _LogRocket = __webpack_require__(/*! ./LogRocket */ "./packages/logrocket/src/LogRocket.js");

var _LogRocket2 = _interopRequireDefault(_LogRocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REACT_NATIVE_NOTICE = 'LogRocket does not yet support React Native.';
var makeNoopPolyfill = function makeNoopPolyfill() {
  return {
    init: function init() {},
    uninstall: function uninstall() {},
    log: function log() {},
    info: function info() {},
    warn: function warn() {},
    error: function error() {},
    debug: function debug() {},
    addEvent: function addEvent() {},
    identify: function identify() {},
    start: function start() {},


    get threadID() {
      return null;
    },
    get recordingID() {
      return null;
    },
    get recordingURL() {
      return null;
    },

    reduxEnhancer: function reduxEnhancer() {
      return function (store) {
        return function () {
          return store.apply(undefined, arguments);
        };
      };
    },
    reduxMiddleware: function reduxMiddleware() {
      return function () {
        return function (next) {
          return function (action) {
            return next(action);
          };
        };
      };
    },
    track: function track() {},
    getSessionURL: function getSessionURL() {},
    getVersion: function getVersion() {},
    startNewSession: function startNewSession() {},
    onLogger: function onLogger() {},
    setClock: function setClock() {},
    captureMessage: function captureMessage() {},
    captureException: function captureException() {}
  };
};

function makeLogRocket() {
  var getLogger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    throw new Error(REACT_NATIVE_NOTICE);
  }

  if (typeof window !== 'undefined') {
    if (window._disableLogRocket) {
      return makeNoopPolyfill();
    }

    if (window.MutationObserver && window.WeakMap) {
      // Save window globals that we rely on.
      window._lrMutationObserver = window.MutationObserver;

      var instance = new _LogRocket2.default();
      getLogger(instance);
      return instance;
    }
  }

  return makeNoopPolyfill();
}
module.exports = exports['default'];

/***/ }),

/***/ "./packages/logrocket/src/module-npm.js":
/*!**********************************************!*\
  !*** ./packages/logrocket/src/module-npm.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _setup = __webpack_require__(/*! ./setup */ "./packages/logrocket/src/setup.js");

var _setup2 = _interopRequireDefault(_setup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = (0, _setup2.default)();

exports.default = instance;
module.exports = exports['default'];

/***/ }),

/***/ "./packages/logrocket/src/setup.js":
/*!*****************************************!*\
  !*** ./packages/logrocket/src/setup.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setup;

var _makeLogRocket = __webpack_require__(/*! ./makeLogRocket */ "./packages/logrocket/src/makeLogRocket.js");

var _makeLogRocket2 = _interopRequireDefault(_makeLogRocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CDN_SERVER_MAP = {
  'cdn.logrocket.io': 'https://r.logrocket.io',
  'cdn.lr-ingest.io': 'https://r.lr-ingest.io',
  'cdn-staging.logrocket.io': 'https://staging-i.logrocket.io',
  'cdn-staging.lr-ingest.io': 'https://staging-i.lr-ingest.io'
};

function setup() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var enterpriseServer = _ref.enterpriseServer,
      _ref$sdkVersion = _ref.sdkVersion,
      sdkVersion = _ref$sdkVersion === undefined ? "1.0.14" : _ref$sdkVersion,
      opts = _objectWithoutProperties(_ref, ['enterpriseServer', 'sdkVersion']);

  var scriptOrigin = undefined === 'staging' ? 'https://cdn-staging.logrocket.io' : 'https://cdn.logrocket.io';
  var scriptIngest = void 0;

  if (sdkVersion === 'script') {
    try {
      var scriptTag = document.currentScript;
      var matches = scriptTag.src.match(/^(https?:\/\/([^\\]+))\/.+$/);
      var scriptHostname = matches && matches[2];

      if (scriptHostname && CDN_SERVER_MAP[scriptHostname]) {
        scriptOrigin = matches && matches[1];
        scriptIngest = CDN_SERVER_MAP[scriptHostname];
      }
    } catch (_) {
      /* no-op */
    }
  } else {
    // NPM
    scriptOrigin = undefined === 'staging' ? 'https://cdn-staging.lr-ingest.io' : 'https://cdn.lr-ingest.io';
    scriptIngest = undefined === 'staging' ? 'https://staging-i.lr-ingest.io' : 'https://r.lr-ingest.io';
  }

  var sdkServer = opts.sdkServer || enterpriseServer;
  var ingestServer = opts.ingestServer || enterpriseServer || scriptIngest;

  var instance = (0, _makeLogRocket2.default)(function () {
    var script = document.createElement('script');

    if (ingestServer) {
      if (typeof window.__SDKCONFIG__ === 'undefined') {
        window.__SDKCONFIG__ = {};
      }

      window.__SDKCONFIG__.serverURL = ingestServer + '/i';
      window.__SDKCONFIG__.statsURL = ingestServer + '/s';
    }

    if (sdkServer) {
      script.src = sdkServer + '/logger.min.js';
    } else if (window.__SDKCONFIG__ && window.__SDKCONFIG__.loggerURL) {
      script.src = window.__SDKCONFIG__.loggerURL;
    } else if (window._lrAsyncScript) {
      script.src = window._lrAsyncScript;
    } else {
      script.src = scriptOrigin + '/logger-1.min.js';
    }

    script.async = true;
    document.head.appendChild(script);
    script.onload = function () {
      // Brave browser: Advertises its user-agent as Chrome ##.##... then
      // loads logger.min.js, but blocks the execution of the script
      // causing _LRlogger to be undefined.  Let's make sure its there first.
      if (typeof window._LRLogger === 'function') {
        instance.onLogger(new window._LRLogger({
          sdkVersion: sdkVersion
        }));
      } else {
        console.warn('LogRocket: script execution has been blocked by a product or service.');
        instance.uninstall();
      }
    };
    script.onerror = function () {
      console.warn('LogRocket: script could not load. Check that you have a valid network connection.');
      instance.uninstall();
    };
  });

  return instance;
}
module.exports = exports['default'];

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./packages/logrocket/src/module-npm.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /root/project/packages/logrocket/src/module-npm.js */"./packages/logrocket/src/module-npm.js");


/***/ })

/******/ });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZ3JvY2tldC9kaXN0L2J1aWxkLnVtZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLElBQUksSUFBeUQ7QUFDN0Q7QUFDQSxNQUFNLGFBS0o7QUFDRixDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdDQUFnQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0EseURBQXlELGNBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUNBQWlDO0FBQ2xGLHdIQUF3SCxtQkFBbUIsRUFBRTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7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RyxnQ0FBZ0M7QUFDNUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixzQ0FBc0M7QUFDdEMsMEJBQTBCO0FBQzFCLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QixvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDLDhCQUE4Qjs7O0FBRzlCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw4QkFBOEI7QUFDOUIsOENBQThDO0FBQzlDLHdDQUF3QztBQUN4QyxrREFBa0Q7QUFDbEQsb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQyxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLDhDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLE9BQU87O0FBRVAsVUFBVTtBQUNWLENBQUMsRSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9wYWNrYWdlcy9AYXBwaHViOmxvZ3JvY2tldC1jb25zb2xlL3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGFwcGh1Yjpsb2dyb2NrZXQtY29uc29sZS9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlZ2lzdGVyQ29uc29sZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcmVnaXN0ZXJDb25zb2xlICovIFwiLi9wYWNrYWdlcy9AYXBwaHViOmxvZ3JvY2tldC1jb25zb2xlL3NyYy9yZWdpc3RlckNvbnNvbGUuanNcIik7XG5cbnZhciBfcmVnaXN0ZXJDb25zb2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZ2lzdGVyQ29uc29sZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWdpc3RlckNvbnNvbGUyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcGFja2FnZXMvQGFwcGh1Yjpsb2dyb2NrZXQtY29uc29sZS9zcmMvcmVnaXN0ZXJDb25zb2xlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGFwcGh1Yjpsb2dyb2NrZXQtY29uc29sZS9zcmMvcmVnaXN0ZXJDb25zb2xlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcmVnaXN0ZXJDb25zb2xlO1xuXG52YXIgX2VuaGFuY2VGdW5jID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGFwcGh1Yi9sb2dyb2NrZXQtdXRpbHMvc3JjL2VuaGFuY2VGdW5jICovIFwiLi9wYWNrYWdlcy9AYXBwaHViOmxvZ3JvY2tldC11dGlscy9zcmMvZW5oYW5jZUZ1bmMuanNcIik7XG5cbnZhciBfZW5oYW5jZUZ1bmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW5oYW5jZUZ1bmMpO1xuXG52YXIgX2xvZ3JvY2tldEV4Y2VwdGlvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYXBwaHViL2xvZ3JvY2tldC1leGNlcHRpb25zICovIFwiLi9wYWNrYWdlcy9AYXBwaHViOmxvZ3JvY2tldC1leGNlcHRpb25zL3NyYy9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gcmVnaXN0ZXJDb25zb2xlKGxvZ2dlcikge1xuICB2YXIgdW5zdWJGdW5jdGlvbnMgPSBbXTtcbiAgdmFyIG1ldGhvZHMgPSBbJ2xvZycsICd3YXJuJywgJ2luZm8nLCAnZXJyb3InLCAnZGVidWcnXTtcblxuICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIHVuc3ViRnVuY3Rpb25zLnB1c2goKDAsIF9lbmhhbmNlRnVuYzIuZGVmYXVsdCkoY29uc29sZSwgbWV0aG9kLCBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBsb2dnZXIuYWRkRXZlbnQoJ2xyLmNvcmUuTG9nRXZlbnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb25zb2xlT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgdmFyIGlzRW5hYmxlZCA9IGNvbnNvbGVPcHRpb25zLmlzRW5hYmxlZDtcblxuICAgICAgICBpZiAoKHR5cGVvZiBpc0VuYWJsZWQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGlzRW5hYmxlZCkpID09PSAnb2JqZWN0JyAmJiBpc0VuYWJsZWRbbWV0aG9kXSA9PT0gZmFsc2UgfHwgaXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ2Vycm9yJyAmJiBjb25zb2xlT3B0aW9ucy5zaG91bGRBZ2dyZWdhdGVDb25zb2xlRXJyb3JzKSB7XG4gICAgICAgICAgX2xvZ3JvY2tldEV4Y2VwdGlvbnMuQ2FwdHVyZS5jYXB0dXJlTWVzc2FnZShsb2dnZXIsIGFyZ3NbMF0sIHt9LCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbG9nTGV2ZWw6IG1ldGhvZC50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB1bnN1YkZ1bmN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uICh1bnN1YkZ1bmN0aW9uKSB7XG4gICAgICByZXR1cm4gdW5zdWJGdW5jdGlvbigpO1xuICAgIH0pO1xuICB9O1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LWV4Y2VwdGlvbnMvc3JjL0NhcHR1cmUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGFwcGh1Yjpsb2dyb2NrZXQtZXhjZXB0aW9ucy9zcmMvQ2FwdHVyZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuXG5cbmV4cG9ydHMuY2FwdHVyZU1lc3NhZ2UgPSBjYXB0dXJlTWVzc2FnZTtcbmV4cG9ydHMuY2FwdHVyZUV4Y2VwdGlvbiA9IGNhcHR1cmVFeGNlcHRpb247XG5cbnZhciBfVHJhY2VLaXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYXBwaHViL2xvZ3JvY2tldC11dGlscy9zcmMvVHJhY2VLaXQgKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LXV0aWxzL3NyYy9UcmFjZUtpdC5qc1wiKTtcblxudmFyIF9UcmFjZUtpdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFjZUtpdCk7XG5cbnZhciBfc3RhY2tUcmFjZUZyb21FcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3RhY2tUcmFjZUZyb21FcnJvciAqLyBcIi4vcGFja2FnZXMvQGFwcGh1Yjpsb2dyb2NrZXQtZXhjZXB0aW9ucy9zcmMvc3RhY2tUcmFjZUZyb21FcnJvci5qc1wiKTtcblxudmFyIF9zdGFja1RyYWNlRnJvbUVycm9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YWNrVHJhY2VGcm9tRXJyb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc1NjYWxhcih2YWx1ZSkge1xuICByZXR1cm4gKC9ib29sZWFufG51bWJlcnxzdHJpbmcvLnRlc3QodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpXG4gICk7XG59XG5cbmZ1bmN0aW9uIHNjcnViKGRhdGEsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9uYWxTY2FsYXJzID0gW1xuICAgIC8vIFZhbGlkIHZhbHVlcyBmb3IgJ2xldmVsJyBhcmUgJ2ZhdGFsJywgJ2Vycm9yJywgJ3dhcm5pbmcnLCAnaW5mbycsXG4gICAgLy8gYW5kICdkZWJ1ZycuIERlZmF1bHRzIHRvICdlcnJvcicuXG4gICAgJ2xldmVsJywgJ2xvZ2dlciddO1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IG9wdGlvbmFsU2NhbGFycywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpZWxkID0gX3JlZjtcblxuICAgICAgdmFyIHZhbHVlID0gb3B0aW9uc1tmaWVsZF07XG5cbiAgICAgIGlmIChpc1NjYWxhcih2YWx1ZSkpIHtcbiAgICAgICAgZGF0YVtmaWVsZF0gPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBvcHRpb25hbE1hcHMgPSBbJ3RhZ3MnLCAnZXh0cmEnXTtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gb3B0aW9uYWxNYXBzLCBfaXNBcnJheTIgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjIpLCBfaTIgPSAwLCBfaXRlcmF0b3IyID0gX2lzQXJyYXkyID8gX2l0ZXJhdG9yMiA6IF9pdGVyYXRvcjJbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgIHZhciBfcmVmMjtcblxuICAgICAgaWYgKF9pc0FycmF5Mikge1xuICAgICAgICBpZiAoX2kyID49IF9pdGVyYXRvcjIubGVuZ3RoKSBicmVhaztcbiAgICAgICAgX3JlZjIgPSBfaXRlcmF0b3IyW19pMisrXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9pMiA9IF9pdGVyYXRvcjIubmV4dCgpO1xuICAgICAgICBpZiAoX2kyLmRvbmUpIGJyZWFrO1xuICAgICAgICBfcmVmMiA9IF9pMi52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIF9maWVsZCA9IF9yZWYyO1xuXG4gICAgICB2YXIgZGlydHkgPSBvcHRpb25zW19maWVsZF0gfHwge307XG4gICAgICB2YXIgc2NydWJiZWQgPSB7fTtcblxuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IE9iamVjdC5rZXlzKGRpcnR5KSwgX2lzQXJyYXkzID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IzKSwgX2kzID0gMCwgX2l0ZXJhdG9yMyA9IF9pc0FycmF5MyA/IF9pdGVyYXRvcjMgOiBfaXRlcmF0b3IzW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICAgIHZhciBfcmVmMztcblxuICAgICAgICBpZiAoX2lzQXJyYXkzKSB7XG4gICAgICAgICAgaWYgKF9pMyA+PSBfaXRlcmF0b3IzLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgX3JlZjMgPSBfaXRlcmF0b3IzW19pMysrXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfaTMgPSBfaXRlcmF0b3IzLm5leHQoKTtcbiAgICAgICAgICBpZiAoX2kzLmRvbmUpIGJyZWFrO1xuICAgICAgICAgIF9yZWYzID0gX2kzLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGtleSA9IF9yZWYzO1xuXG4gICAgICAgIHZhciBfdmFsdWUgPSBkaXJ0eVtrZXldO1xuXG4gICAgICAgIGlmIChpc1NjYWxhcihfdmFsdWUpKSB7XG4gICAgICAgICAgc2NydWJiZWRba2V5LnRvU3RyaW5nKCldID0gX3ZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGF0YVtfZmllbGRdID0gc2NydWJiZWQ7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVNZXNzYWdlKGxvZ2dlciwgbWVzc2FnZSkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIHZhciBpc0NvbnNvbGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IGZhbHNlO1xuXG4gIHZhciBkYXRhID0ge1xuICAgIGV4Y2VwdGlvblR5cGU6IGlzQ29uc29sZSA/ICdDT05TT0xFJyA6ICdNRVNTQUdFJyxcbiAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgIGJyb3dzZXJIcmVmOiB3aW5kb3cubG9jYXRpb24uaHJlZlxuICB9O1xuXG4gIHNjcnViKGRhdGEsIG9wdGlvbnMpO1xuXG4gIGxvZ2dlci5hZGRFdmVudCgnbHIuY29yZS5FeGNlcHRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjYXB0dXJlRXhjZXB0aW9uKGxvZ2dlciwgZXhjZXB0aW9uKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgdmFyIHByZXBwZWRUcmFjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbnVsbDtcblxuICB2YXIgdHJhY2UgPSBwcmVwcGVkVHJhY2UgfHwgX1RyYWNlS2l0Mi5kZWZhdWx0LmNvbXB1dGVTdGFja1RyYWNlKGV4Y2VwdGlvbik7XG5cbiAgdmFyIGRhdGEgPSB7XG4gICAgZXhjZXB0aW9uVHlwZTogJ1dJTkRPVycsXG4gICAgZXJyb3JUeXBlOiB0cmFjZS5uYW1lLFxuICAgIG1lc3NhZ2U6IHRyYWNlLm1lc3NhZ2UsXG4gICAgYnJvd3NlckhyZWY6IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gIH07XG5cbiAgc2NydWIoZGF0YSwgb3B0aW9ucyk7XG5cbiAgdmFyIGFkZEV2ZW50T3B0aW9ucyA9IHtcbiAgICBfc3RhY2tUcmFjZTogKDAsIF9zdGFja1RyYWNlRnJvbUVycm9yMi5kZWZhdWx0KSh0cmFjZSlcbiAgfTtcblxuICBsb2dnZXIuYWRkRXZlbnQoJ2xyLmNvcmUuRXhjZXB0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9LCBhZGRFdmVudE9wdGlvbnMpO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LWV4Y2VwdGlvbnMvc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9wYWNrYWdlcy9AYXBwaHViOmxvZ3JvY2tldC1leGNlcHRpb25zL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkNhcHR1cmUgPSBleHBvcnRzLnJlZ2lzdGVyRXhjZXB0aW9ucyA9IHVuZGVmaW5lZDtcblxudmFyIF9yZWdpc3RlckV4Y2VwdGlvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3JlZ2lzdGVyRXhjZXB0aW9ucyAqLyBcIi4vcGFja2FnZXMvQGFwcGh1Yjpsb2dyb2NrZXQtZXhjZXB0aW9ucy9zcmMvcmVnaXN0ZXJFeGNlcHRpb25zLmpzXCIpO1xuXG52YXIgX3JlZ2lzdGVyRXhjZXB0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWdpc3RlckV4Y2VwdGlvbnMpO1xuXG52YXIgX0NhcHR1cmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0NhcHR1cmUgKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LWV4Y2VwdGlvbnMvc3JjL0NhcHR1cmUuanNcIik7XG5cbnZhciBDYXB0dXJlID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX0NhcHR1cmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLnJlZ2lzdGVyRXhjZXB0aW9ucyA9IF9yZWdpc3RlckV4Y2VwdGlvbnMyLmRlZmF1bHQ7XG5leHBvcnRzLkNhcHR1cmUgPSBDYXB0dXJlO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LWV4Y2VwdGlvbnMvc3JjL3JhdmVuL3JhdmVuLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9wYWNrYWdlcy9AYXBwaHViOmxvZ3JvY2tldC1leGNlcHRpb25zL3NyYy9yYXZlbi9yYXZlbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkge1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpOyAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKlxuU29tZSBjb250ZW50cyBvZiB0aGlzIGZpbGUgd2VyZSBvcmlnaW5hbHkgZnJvbSByYXZlbi1qcywgQlNELTIgQ2xhdXNlXG5cbkNvcHlyaWdodCAoYykgMjAxOCBTZW50cnkgKGh0dHBzOi8vc2VudHJ5LmlvKSBhbmQgaW5kaXZpZHVhbCBjb250cmlidXRvcnMuXG5BbGwgcmlnaHRzIHJlc2VydmVkLlxuXG5SZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG5cbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG5cblRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbnZhciBfVHJhY2VLaXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYXBwaHViL2xvZ3JvY2tldC11dGlscy9zcmMvVHJhY2VLaXQgKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LXV0aWxzL3NyYy9UcmFjZUtpdC5qc1wiKTtcblxudmFyIF9UcmFjZUtpdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFjZUtpdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh3aGF0KSB7XG4gIHJldHVybiB3aGF0ID09PSB2b2lkIDA7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24od2hhdCkge1xuICByZXR1cm4gdHlwZW9mIHdoYXQgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGVhY2gob2JqLCBjYWxsYmFjaykge1xuICB2YXIgaSwgajtcblxuICBpZiAoaXNVbmRlZmluZWQob2JqLmxlbmd0aCkpIHtcbiAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICBpZiAoaGFzS2V5KG9iaiwgaSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbChudWxsLCBpLCBvYmpbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBqID0gb2JqLmxlbmd0aDtcbiAgICBpZiAoaikge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGo7IGkrKykge1xuICAgICAgICBjYWxsYmFjay5jYWxsKG51bGwsIGksIG9ialtpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogaGFzS2V5LCBhIGJldHRlciBmb3JtIG9mIGhhc093blByb3BlcnR5XG4gKiBFeGFtcGxlOiBoYXNLZXkoTWFpbkhvc3RPYmplY3QsIHByb3BlcnR5KSA9PT0gdHJ1ZS9mYWxzZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBob3N0IG9iamVjdCB0byBjaGVjayBwcm9wZXJ0eVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBjaGVja1xuICovXG5mdW5jdGlvbiBoYXNLZXkob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdFByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KTtcbn1cblxuLyoqXG4gKiBQb2x5ZmlsbCBhIG1ldGhvZFxuICogQHBhcmFtIG9iaiBvYmplY3QgZS5nLiBgZG9jdW1lbnRgXG4gKiBAcGFyYW0gbmFtZSBtZXRob2QgbmFtZSBwcmVzZW50IG9uIG9iamVjdCBlLmcuIGBhZGRFdmVudExpc3RlbmVyYFxuICogQHBhcmFtIHJlcGxhY2VtZW50IHJlcGxhY2VtZW50IGZ1bmN0aW9uXG4gKiBAcGFyYW0gdHJhY2sge29wdGlvbmFsfSByZWNvcmQgaW5zdHJ1bWVudGF0aW9uIHRvIGFuIGFycmF5XG4gKi9cbmZ1bmN0aW9uIGZpbGwob2JqLCBuYW1lLCByZXBsYWNlbWVudCwgdHJhY2spIHtcbiAgdmFyIG9yaWcgPSBvYmpbbmFtZV07XG4gIG9ialtuYW1lXSA9IHJlcGxhY2VtZW50KG9yaWcpO1xuICBpZiAodHJhY2spIHtcbiAgICB0cmFjay5wdXNoKFtvYmosIG5hbWUsIG9yaWddKTtcbiAgfVxufVxuXG52YXIgX3dpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XG52YXIgX2RvY3VtZW50ID0gX3dpbmRvdy5kb2N1bWVudDtcblxudmFyIEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEhhbmRsZXIoX3JlZikge1xuICAgIHZhciBjYXB0dXJlRXhjZXB0aW9uID0gX3JlZi5jYXB0dXJlRXhjZXB0aW9uO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhhbmRsZXIpO1xuXG4gICAgdGhpcy5fZXJyb3JIYW5kbGVyID0gdGhpcy5fZXJyb3JIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl9pZ25vcmVPbkVycm9yID0gMDtcbiAgICB0aGlzLl93cmFwcGVkQnVpbHRJbnMgPSBbXTtcbiAgICB0aGlzLmNhcHR1cmVFeGNlcHRpb24gPSBjYXB0dXJlRXhjZXB0aW9uO1xuICAgIF9UcmFjZUtpdDIuZGVmYXVsdC5yZXBvcnQuc3Vic2NyaWJlKHRoaXMuX2Vycm9ySGFuZGxlcik7XG4gICAgdGhpcy5faW5zdHJ1bWVudFRyeUNhdGNoKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSGFuZGxlciwgW3tcbiAgICBrZXk6ICd1bmluc3RhbGwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmluc3RhbGwoKSB7XG4gICAgICBfVHJhY2VLaXQyLmRlZmF1bHQucmVwb3J0LnVuc3Vic2NyaWJlKHRoaXMuX2Vycm9ySGFuZGxlcik7XG5cbiAgICAgIC8vIHJlc3RvcmUgYW55IHdyYXBwZWQgYnVpbHRpbnNcbiAgICAgIHZhciBidWlsdGluO1xuICAgICAgd2hpbGUgKHRoaXMuX3dyYXBwZWRCdWlsdElucy5sZW5ndGgpIHtcbiAgICAgICAgYnVpbHRpbiA9IHRoaXMuX3dyYXBwZWRCdWlsdElucy5zaGlmdCgpO1xuXG4gICAgICAgIHZhciBvYmogPSBidWlsdGluWzBdLFxuICAgICAgICAgICAgbmFtZSA9IGJ1aWx0aW5bMV0sXG4gICAgICAgICAgICBvcmlnID0gYnVpbHRpblsyXTtcblxuICAgICAgICBvYmpbbmFtZV0gPSBvcmlnO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19lcnJvckhhbmRsZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZXJyb3JIYW5kbGVyKHJlcG9ydCkge1xuICAgICAgaWYgKCF0aGlzLl9pZ25vcmVPbkVycm9yKSB7XG4gICAgICAgIHRoaXMuY2FwdHVyZUV4Y2VwdGlvbihyZXBvcnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19pZ25vcmVOZXh0T25FcnJvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9pZ25vcmVOZXh0T25FcnJvcigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX2lnbm9yZU9uRXJyb3IgKz0gMTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBvbmVycm9yIHNob3VsZCB0cmlnZ2VyIGJlZm9yZSBzZXRUaW1lb3V0XG4gICAgICAgIF90aGlzLl9pZ25vcmVPbkVycm9yIC09IDE7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFdyYXAgY29kZSB3aXRoaW4gYSBjb250ZXh0IHNvIEhhbmRsZXIgY2FuIGNhcHR1cmUgZXJyb3JzXG4gICAgICogcmVsaWFibHkgYWNyb3NzIGRvbWFpbnMgdGhhdCBpcyBleGVjdXRlZCBpbW1lZGlhdGVseS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIEEgc3BlY2lmaWMgc2V0IG9mIG9wdGlvbnMgZm9yIHRoaXMgY29udGV4dCBbb3B0aW9uYWxdXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBUaGUgY2FsbGJhY2sgdG8gYmUgaW1tZWRpYXRlbHkgZXhlY3V0ZWQgd2l0aGluIHRoZSBjb250ZXh0XG4gICAgICogQHBhcmFtIHthcnJheX0gYXJncyBBbiBhcnJheSBvZiBhcmd1bWVudHMgdG8gYmUgY2FsbGVkIHdpdGggdGhlIGNhbGxiYWNrIFtvcHRpb25hbF1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnY29udGV4dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnRleHQob3B0aW9ucywgZnVuYywgYXJncykge1xuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgYXJncyA9IGZ1bmMgfHwgW107XG4gICAgICAgIGZ1bmMgPSBvcHRpb25zO1xuICAgICAgICBvcHRpb25zID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy53cmFwKG9wdGlvbnMsIGZ1bmMpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3dyYXAnLFxuXG5cbiAgICAvKlxuICAgICAqIFdyYXAgY29kZSB3aXRoaW4gYSBjb250ZXh0IGFuZCByZXR1cm5zIGJhY2sgYSBuZXcgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIEEgc3BlY2lmaWMgc2V0IG9mIG9wdGlvbnMgZm9yIHRoaXMgY29udGV4dCBbb3B0aW9uYWxdXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYmUgd3JhcHBlZCBpbiBhIG5ldyBjb250ZXh0XG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBBIGZ1bmN0aW9uIHRvIGNhbGwgYmVmb3JlIHRoZSB0cnkvY2F0Y2ggd3JhcHBlciBbb3B0aW9uYWwsIHByaXZhdGVdXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBuZXdseSB3cmFwcGVkIGZ1bmN0aW9ucyB3aXRoIGEgY29udGV4dFxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiB3cmFwKG9wdGlvbnMsIGZ1bmMsIF9iZWZvcmUpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIC8vIDEgYXJndW1lbnQgaGFzIGJlZW4gcGFzc2VkLCBhbmQgaXQncyBub3QgYSBmdW5jdGlvblxuICAgICAgLy8gc28ganVzdCByZXR1cm4gaXRcbiAgICAgIGlmIChpc1VuZGVmaW5lZChmdW5jKSAmJiAhaXNGdW5jdGlvbihvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgIH1cblxuICAgICAgLy8gb3B0aW9ucyBpcyBvcHRpb25hbFxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgZnVuYyA9IG9wdGlvbnM7XG4gICAgICAgIG9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIHdlJ3ZlIHBhc3NlZCBhbG9uZyAyIGFyZ3VtZW50cywgYW5kIHRoZSBzZWNvbmQgb25lXG4gICAgICAvLyBpcyBub3QgYSBmdW5jdGlvbiBlaXRoZXIsIHNvIHdlJ2xsIGp1c3QgcmV0dXJuIHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gICAgICBpZiAoIWlzRnVuY3Rpb24oZnVuYykpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmM7XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIGRvbid0IHdhbm5hIHdyYXAgaXQgdHdpY2UhXG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZnVuYy5fX2xyX18pIHtcbiAgICAgICAgICByZXR1cm4gZnVuYztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoaXMgaGFzIGFscmVhZHkgYmVlbiB3cmFwcGVkIGluIHRoZSBwYXN0LCByZXR1cm4gdGhhdFxuICAgICAgICBpZiAoZnVuYy5fX2xyX3dyYXBwZXJfXykge1xuICAgICAgICAgIHJldHVybiBmdW5jLl9fbHJfd3JhcHBlcl9fO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgZnVuYyBpcyBub3QgZXh0ZW5zaWJsZSwgcmV0dXJuIHRoZSBmdW5jdGlvbiBhcy1pcyB0byBwcmV2ZW50IFR5cGVFcnJvcnNcbiAgICAgICAgLy8gd2hlbiB0cnlpbmcgdG8gYWRkIG5ldyBwcm9wcyAmIHRvIGFzc3VyZSBpbW11dGFibGUgZnVuY3MgYXJlbid0IGNoYW5nZWRcbiAgICAgICAgaWYgKCFPYmplY3QuaXNFeHRlbnNpYmxlKGZ1bmMpKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmM7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gSnVzdCBhY2Nlc3NpbmcgY3VzdG9tIHByb3BzIGluIHNvbWUgU2VsZW5pdW0gZW52aXJvbm1lbnRzXG4gICAgICAgIC8vIGNhbiBjYXVzZSBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBleGNlcHRpb24gKHNlZSBsci1qcyM0OTUpLlxuICAgICAgICAvLyBCYWlsIG9uIHdyYXBwaW5nIGFuZCByZXR1cm4gdGhlIGZ1bmN0aW9uIGFzLWlzIChkZWZlcnMgdG8gd2luZG93Lm9uZXJyb3IpLlxuICAgICAgICByZXR1cm4gZnVuYztcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gd3JhcHBlZCgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSxcbiAgICAgICAgICAgIGkgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgZGVlcCA9ICFvcHRpb25zIHx8IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWVwICE9PSBmYWxzZTtcblxuICAgICAgICBpZiAoX2JlZm9yZSAmJiBpc0Z1bmN0aW9uKF9iZWZvcmUpKSB7XG4gICAgICAgICAgX2JlZm9yZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgd3JhcCBhbGwgb2YgYSBmdW5jdGlvbidzIGFyZ3VtZW50cyB0aGF0IGFyZVxuICAgICAgICAvLyBmdW5jdGlvbnMgdGhlbXNlbHZlcy5cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIGFyZ3NbaV0gPSBkZWVwID8gc2VsZi53cmFwKG9wdGlvbnMsIGFyZ3VtZW50c1tpXSkgOiBhcmd1bWVudHNbaV07XG4gICAgICAgIH10cnkge1xuICAgICAgICAgIC8vIEF0dGVtcHQgdG8gaW52b2tlIHVzZXItbGFuZCBmdW5jdGlvbi4gVGhpcyBpcyBwYXJ0IG9mIHRoZSBMb2dSb2NrZXQgU0RLLlxuICAgICAgICAgIC8vIElmIHlvdSdyZSBzZWVpbmcgdGhpcyBmcmFtZSBpbiBhIHN0YWNrIHRyYWNlLCBpdCBtZWFucyB0aGF0IExvZ1JvY2tldCBjYXVnaHRcbiAgICAgICAgICAvLyBhbiB1bmhhbmRsZWQgZXJyb3IgdGhyb3duIGJ5IHlvdXIgYXBwbGljYXRpb24gY29kZSwgcmVwb3J0ZWQgaXQsIHRoZW4gYnViYmxlZFxuICAgICAgICAgIC8vIGl0IHVwLiBUaGlzIGlzIGV4cGVjdGVkIGJlaGF2aW9yIGFuZCBpcyBub3QgYSBidWcgd2l0aCBMb2dSb2NrZXQuXG4gICAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzZWxmLl9pZ25vcmVOZXh0T25FcnJvcigpO1xuICAgICAgICAgIHNlbGYuY2FwdHVyZUV4Y2VwdGlvbihfVHJhY2VLaXQyLmRlZmF1bHQuY29tcHV0ZVN0YWNrVHJhY2UoZSksIG9wdGlvbnMpO1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY29weSBvdmVyIHByb3BlcnRpZXMgb2YgdGhlIG9sZCBmdW5jdGlvblxuICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gZnVuYykge1xuICAgICAgICBpZiAoaGFzS2V5KGZ1bmMsIHByb3BlcnR5KSkge1xuICAgICAgICAgIHdyYXBwZWRbcHJvcGVydHldID0gZnVuY1twcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHdyYXBwZWQucHJvdG90eXBlID0gZnVuYy5wcm90b3R5cGU7XG5cbiAgICAgIGZ1bmMuX19scl93cmFwcGVyX18gPSB3cmFwcGVkO1xuICAgICAgLy8gU2lnbmFsIHRoYXQgdGhpcyBmdW5jdGlvbiBoYXMgYmVlbiB3cmFwcGVkIGFscmVhZHlcbiAgICAgIC8vIGZvciBib3RoIGRlYnVnZ2luZyBhbmQgdG8gcHJldmVudCBpdCB0byBiZWluZyB3cmFwcGVkIHR3aWNlXG4gICAgICB3cmFwcGVkLl9fbHJfXyA9IHRydWU7XG4gICAgICB3cmFwcGVkLl9faW5uZXJfXyA9IGZ1bmM7XG5cbiAgICAgIHJldHVybiB3cmFwcGVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19pbnN0cnVtZW50VHJ5Q2F0Y2gnLFxuXG5cbiAgICAvKipcbiAgICAgKiBJbnN0YWxsIGFueSBxdWV1ZWQgcGx1Z2luc1xuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBfaW5zdHJ1bWVudFRyeUNhdGNoKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB2YXIgd3JhcHBlZEJ1aWx0SW5zID0gc2VsZi5fd3JhcHBlZEJ1aWx0SW5zO1xuXG4gICAgICBmdW5jdGlvbiB3cmFwVGltZUZuKG9yaWcpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmbiwgdCkge1xuICAgICAgICAgIC8vIHByZXNlcnZlIGFyaXR5XG4gICAgICAgICAgLy8gTWFrZSBhIGNvcHkgb2YgdGhlIGFyZ3VtZW50cyB0byBwcmV2ZW50IGRlb3B0aW1pemF0aW9uXG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXG4gICAgICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgb3JpZ2luYWxDYWxsYmFjayA9IGFyZ3NbMF07XG4gICAgICAgICAgaWYgKGlzRnVuY3Rpb24ob3JpZ2luYWxDYWxsYmFjaykpIHtcbiAgICAgICAgICAgIGFyZ3NbMF0gPSBzZWxmLndyYXAob3JpZ2luYWxDYWxsYmFjayk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSUUgPCA5IGRvZXNuJ3Qgc3VwcG9ydCAuY2FsbC8uYXBwbHkgb24gc2V0SW50ZXJ2YWwvc2V0VGltZW91dCwgYnV0IGl0XG4gICAgICAgICAgLy8gYWxzbyBzdXBwb3J0cyBvbmx5IHR3byBhcmd1bWVudHMgYW5kIGRvZXNuJ3QgY2FyZSB3aGF0IHRoaXMgaXMsIHNvIHdlXG4gICAgICAgICAgLy8gY2FuIGp1c3QgY2FsbCB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZGlyZWN0bHkuXG4gICAgICAgICAgaWYgKG9yaWcuYXBwbHkpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmlnLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZyhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHdyYXBFdmVudFRhcmdldChnbG9iYWwpIHtcbiAgICAgICAgdmFyIHByb3RvID0gX3dpbmRvd1tnbG9iYWxdICYmIF93aW5kb3dbZ2xvYmFsXS5wcm90b3R5cGU7XG4gICAgICAgIGlmIChwcm90byAmJiBwcm90by5oYXNPd25Qcm9wZXJ0eSAmJiBwcm90by5oYXNPd25Qcm9wZXJ0eSgnYWRkRXZlbnRMaXN0ZW5lcicpKSB7XG4gICAgICAgICAgZmlsbChwcm90bywgJ2FkZEV2ZW50TGlzdGVuZXInLCBmdW5jdGlvbiAob3JpZykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldnROYW1lLCBmbiwgY2FwdHVyZSwgc2VjdXJlKSB7XG4gICAgICAgICAgICAgIC8vIHByZXNlcnZlIGFyaXR5XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGZuICYmIGZuLmhhbmRsZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBmbi5oYW5kbGVFdmVudCA9IHNlbGYud3JhcChmbi5oYW5kbGVFdmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgICAgICAgICAgIC8vIGNhbiBzb21ldGltZXMgZ2V0ICdQZXJtaXNzaW9uIGRlbmllZCB0byBhY2Nlc3MgcHJvcGVydHkgXCJoYW5kbGUgRXZlbnQnXG5cblxuICAgICAgICAgICAgICAvLyBNb3JlIGJyZWFkY3J1bWIgRE9NIGNhcHR1cmUgLi4uIGRvbmUgaGVyZSBhbmQgbm90IGluIGBfaW5zdHJ1bWVudEJyZWFkY3J1bWJzYFxuICAgICAgICAgICAgICAvLyBzbyB0aGF0IHdlIGRvbid0IGhhdmUgbW9yZSB0aGFuIG9uZSB3cmFwcGVyIGZ1bmN0aW9uXG4gICAgICAgICAgICAgIHZhciBiZWZvcmU7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIG9yaWcuY2FsbCh0aGlzLCBldnROYW1lLCBzZWxmLndyYXAoZm4sIHVuZGVmaW5lZCwgYmVmb3JlKSwgY2FwdHVyZSwgc2VjdXJlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSwgd3JhcHBlZEJ1aWx0SW5zKTtcbiAgICAgICAgICBmaWxsKHByb3RvLCAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsIGZ1bmN0aW9uIChvcmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2dCwgZm4sIGNhcHR1cmUsIHNlY3VyZSkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZuID0gZm4gJiYgKGZuLl9fbHJfd3JhcHBlcl9fID8gZm4uX19scl93cmFwcGVyX18gOiBmbik7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBpZ25vcmUsIGFjY2Vzc2luZyBfX2xyX3dyYXBwZXJfXyB3aWxsIHRocm93IGluIHNvbWUgU2VsZW5pdW0gZW52aXJvbm1lbnRzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG9yaWcuY2FsbCh0aGlzLCBldnQsIGZuLCBjYXB0dXJlLCBzZWN1cmUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LCB3cmFwcGVkQnVpbHRJbnMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZpbGwoX3dpbmRvdywgJ3NldFRpbWVvdXQnLCB3cmFwVGltZUZuLCB3cmFwcGVkQnVpbHRJbnMpO1xuICAgICAgZmlsbChfd2luZG93LCAnc2V0SW50ZXJ2YWwnLCB3cmFwVGltZUZuLCB3cmFwcGVkQnVpbHRJbnMpO1xuICAgICAgaWYgKF93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgIGZpbGwoX3dpbmRvdywgJ3JlcXVlc3RBbmltYXRpb25GcmFtZScsIGZ1bmN0aW9uIChvcmlnKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWcoc2VsZi53cmFwKGNiKSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSwgd3JhcHBlZEJ1aWx0SW5zKTtcbiAgICAgIH1cblxuICAgICAgLy8gZXZlbnQgdGFyZ2V0cyBib3Jyb3dlZCBmcm9tIGJ1Z3NuYWctanM6XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYnVnc25hZy9idWdzbmFnLWpzL2Jsb2IvbWFzdGVyL3NyYy9idWdzbmFnLmpzI0w2NjZcbiAgICAgIHZhciBldmVudFRhcmdldHMgPSBbJ0V2ZW50VGFyZ2V0JywgJ1dpbmRvdycsICdOb2RlJywgJ0FwcGxpY2F0aW9uQ2FjaGUnLCAnQXVkaW9UcmFja0xpc3QnLCAnQ2hhbm5lbE1lcmdlck5vZGUnLCAnQ3J5cHRvT3BlcmF0aW9uJywgJ0V2ZW50U291cmNlJywgJ0ZpbGVSZWFkZXInLCAnSFRNTFVua25vd25FbGVtZW50JywgJ0lEQkRhdGFiYXNlJywgJ0lEQlJlcXVlc3QnLCAnSURCVHJhbnNhY3Rpb24nLCAnS2V5T3BlcmF0aW9uJywgJ01lZGlhQ29udHJvbGxlcicsICdNZXNzYWdlUG9ydCcsICdNb2RhbFdpbmRvdycsICdOb3RpZmljYXRpb24nLCAnU1ZHRWxlbWVudEluc3RhbmNlJywgJ1NjcmVlbicsICdUZXh0VHJhY2snLCAnVGV4dFRyYWNrQ3VlJywgJ1RleHRUcmFja0xpc3QnLCAnV2ViU29ja2V0JywgJ1dlYlNvY2tldFdvcmtlcicsICdXb3JrZXInLCAnWE1MSHR0cFJlcXVlc3QnLCAnWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCcsICdYTUxIdHRwUmVxdWVzdFVwbG9hZCddO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudFRhcmdldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgd3JhcEV2ZW50VGFyZ2V0KGV2ZW50VGFyZ2V0c1tpXSk7XG4gICAgICB9XG5cbiAgICAgIHZhciAkID0gX3dpbmRvdy5qUXVlcnkgfHwgX3dpbmRvdy4kO1xuICAgICAgaWYgKCQgJiYgJC5mbiAmJiAkLmZuLnJlYWR5KSB7XG4gICAgICAgIGZpbGwoJC5mbiwgJ3JlYWR5JywgZnVuY3Rpb24gKG9yaWcpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZy5jYWxsKHRoaXMsIHNlbGYud3JhcChmbikpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0sIHdyYXBwZWRCdWlsdElucyk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhhbmRsZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEhhbmRsZXI7XG47XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanNcIikpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LWV4Y2VwdGlvbnMvc3JjL3JlZ2lzdGVyRXhjZXB0aW9ucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LWV4Y2VwdGlvbnMvc3JjL3JlZ2lzdGVyRXhjZXB0aW9ucy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVnaXN0ZXJDb3JlO1xuXG52YXIgX3JhdmVuID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9yYXZlbi9yYXZlbiAqLyBcIi4vcGFja2FnZXMvQGFwcGh1Yjpsb2dyb2NrZXQtZXhjZXB0aW9ucy9zcmMvcmF2ZW4vcmF2ZW4uanNcIik7XG5cbnZhciBfcmF2ZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmF2ZW4pO1xuXG52YXIgX0NhcHR1cmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0NhcHR1cmUgKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LWV4Y2VwdGlvbnMvc3JjL0NhcHR1cmUuanNcIik7XG5cbnZhciBDYXB0dXJlID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX0NhcHR1cmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiByZWdpc3RlckNvcmUobG9nZ2VyKSB7XG4gIHZhciByYXZlbiA9IG5ldyBfcmF2ZW4yLmRlZmF1bHQoe1xuICAgIGNhcHR1cmVFeGNlcHRpb246IGZ1bmN0aW9uIGNhcHR1cmVFeGNlcHRpb24oZXJyb3JSZXBvcnQpIHtcbiAgICAgIENhcHR1cmUuY2FwdHVyZUV4Y2VwdGlvbihsb2dnZXIsIG51bGwsIG51bGwsIGVycm9yUmVwb3J0KTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciByZWplY3Rpb25IYW5kbGVyID0gZnVuY3Rpb24gcmVqZWN0aW9uSGFuZGxlcihldnQpIHtcbiAgICAvLyBodHRwOi8vMmFsaXR5LmNvbS8yMDE2LzA0L3VuaGFuZGxlZC1yZWplY3Rpb25zLmh0bWxcbiAgICBsb2dnZXIuYWRkRXZlbnQoJ2xyLmNvcmUuRXhjZXB0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXhjZXB0aW9uVHlwZTogJ1VOSEFORExFRF9SRUpFQ1RJT04nLFxuICAgICAgICBtZXNzYWdlOiBldnQucmVhc29uIHx8ICdVbmhhbmRsZWQgUHJvbWlzZSByZWplY3Rpb24nXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCByZWplY3Rpb25IYW5kbGVyKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCByZWplY3Rpb25IYW5kbGVyKTtcbiAgICByYXZlbi51bmluc3RhbGwoKTtcbiAgfTtcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9wYWNrYWdlcy9AYXBwaHViOmxvZ3JvY2tldC1leGNlcHRpb25zL3NyYy9zdGFja1RyYWNlRnJvbUVycm9yLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LWV4Y2VwdGlvbnMvc3JjL3N0YWNrVHJhY2VGcm9tRXJyb3IuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzdGFja1RyYWNlRnJvbUVycm9yO1xuZnVuY3Rpb24gc3RhY2tUcmFjZUZyb21FcnJvcihlcnJvclJlcG9ydCkge1xuICBmdW5jdGlvbiBtYWtlTm90TnVsbCh2YWwpIHtcbiAgICByZXR1cm4gdmFsID09PSBudWxsID8gdW5kZWZpbmVkIDogdmFsO1xuICB9XG5cbiAgcmV0dXJuIGVycm9yUmVwb3J0LnN0YWNrID8gZXJyb3JSZXBvcnQuc3RhY2subWFwKGZ1bmN0aW9uIChmcmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5lTnVtYmVyOiBtYWtlTm90TnVsbChmcmFtZS5saW5lKSxcbiAgICAgIGNvbHVtbk51bWJlcjogbWFrZU5vdE51bGwoZnJhbWUuY29sdW1uKSxcbiAgICAgIGZpbGVOYW1lOiBtYWtlTm90TnVsbChmcmFtZS51cmwpLFxuICAgICAgZnVuY3Rpb25OYW1lOiBtYWtlTm90TnVsbChmcmFtZS5mdW5jKVxuICAgIH07XG4gIH0pIDogdW5kZWZpbmVkO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LW5ldHdvcmsvc3JjL2ZldGNoSW50ZXJjZXB0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9wYWNrYWdlcy9AYXBwaHViOmxvZ3JvY2tldC1uZXR3b3JrL3NyYy9mZXRjaEludGVyY2VwdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVnaXN0ZXJYSFIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3JlZ2lzdGVyWEhSICovIFwiLi9wYWNrYWdlcy9AYXBwaHViOmxvZ3JvY2tldC1uZXR3b3JrL3NyYy9yZWdpc3RlclhIUi5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbnZhciBpbnRlcmNlcHRvcnMgPSBbXTtcblxuZnVuY3Rpb24gbWFrZUludGVyY2VwdG9yKGZldGNoLCBmZXRjaElkKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHJldmVyc2VkSW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0b3JzLnJlZHVjZShmdW5jdGlvbiAoYXJyYXksIGludGVyY2VwdG9yKSB7XG4gICAgcmV0dXJuIFtpbnRlcmNlcHRvcl0uY29uY2F0KGFycmF5KTtcbiAgfSwgW10pO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShhcmdzKTtcblxuICAvLyBSZWdpc3RlciByZXF1ZXN0IGludGVyY2VwdG9yc1xuICByZXZlcnNlZEludGVyY2VwdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHJlcXVlc3QgPSBfcmVmLnJlcXVlc3QsXG4gICAgICAgIHJlcXVlc3RFcnJvciA9IF9yZWYucmVxdWVzdEVycm9yO1xuXG4gICAgaWYgKHJlcXVlc3QgfHwgcmVxdWVzdEVycm9yKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0LmFwcGx5KHVuZGVmaW5lZCwgW2ZldGNoSWRdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYXJncykpKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0RXJyb3IuYXBwbHkodW5kZWZpbmVkLCBbZmV0Y2hJZF0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhcmdzKSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgKDAsIF9yZWdpc3RlclhIUi5zZXRBY3RpdmUpKGZhbHNlKTtcblxuICAgIHZhciByZXMgPSB2b2lkIDA7XG4gICAgdmFyIGVyciA9IHZvaWQgMDtcbiAgICB0cnkge1xuICAgICAgcmVzID0gZmV0Y2guYXBwbHkodW5kZWZpbmVkLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJncykpO1xuICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgIGVyciA9IF9lcnI7XG4gICAgfVxuXG4gICAgKDAsIF9yZWdpc3RlclhIUi5zZXRBY3RpdmUpKHRydWUpO1xuXG4gICAgaWYgKGVycikge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9KTtcblxuICByZXZlcnNlZEludGVyY2VwdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMikge1xuICAgIHZhciByZXNwb25zZSA9IF9yZWYyLnJlc3BvbnNlLFxuICAgICAgICByZXNwb25zZUVycm9yID0gX3JlZjIucmVzcG9uc2VFcnJvcjtcblxuICAgIGlmIChyZXNwb25zZSB8fCByZXNwb25zZUVycm9yKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlKGZldGNoSWQsIHJlcyk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZUVycm9yICYmIHJlc3BvbnNlRXJyb3IoZmV0Y2hJZCwgZXJyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaChlbnYpIHtcbiAgaWYgKCFlbnYuZmV0Y2ggfHwgIWVudi5Qcm9taXNlKSB7XG4gICAgLy8gTWFrZSBzdXJlIGZldGNoIGlzIGF2YWlsYWJsZSBpbiB0aGUgZ2l2ZW4gZW52aXJvbm1lbnQuIElmIGl0J3Mgbm90LCB0aGVuXG4gICAgLy8gZGVmYXVsdCB0byB1c2luZyBYSFIgaW50ZXJjZXB0LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBpc1BvbHlmaWxsID0gZW52LmZldGNoLnBvbHlmaWxsO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBlbnYuZmV0Y2ggPSBmdW5jdGlvbiAoZmV0Y2gpIHtcbiAgICB2YXIgZmV0Y2hJZCA9IDA7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWFrZUludGVyY2VwdG9yLmFwcGx5KHVuZGVmaW5lZCwgW2ZldGNoLCBmZXRjaElkKytdLmNvbmNhdChhcmdzKSk7XG4gICAgfTtcbiAgfShlbnYuZmV0Y2gpO1xuXG4gIC8vIEZvcndhcmQgdGhlIHBvbHlmaWxsIHByb3Blcmx5IGZyb20gZmV0Y2ggKHNldCBieSBnaXRodWIvd2hhdHdnLWZldGNoKS5cbiAgaWYgKGlzUG9seWZpbGwpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBlbnYuZmV0Y2gucG9seWZpbGwgPSBpc1BvbHlmaWxsO1xuICB9XG59XG5cbi8vIFRPRE86IFJlYWN0IE5hdGl2ZVxuLy8gICBhdHRhY2goZ2xvYmFsKTtcblxudmFyIGRpZEF0dGFjaCA9IGZhbHNlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHJlZ2lzdGVyOiBmdW5jdGlvbiByZWdpc3RlcihpbnRlcmNlcHRvcikge1xuICAgIGlmICghZGlkQXR0YWNoKSB7XG4gICAgICBkaWRBdHRhY2ggPSB0cnVlO1xuICAgICAgYXR0YWNoKHdpbmRvdyk7XG4gICAgfVxuXG4gICAgaW50ZXJjZXB0b3JzLnB1c2goaW50ZXJjZXB0b3IpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5kZXggPSBpbnRlcmNlcHRvcnMuaW5kZXhPZihpbnRlcmNlcHRvcik7XG5cbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIGludGVyY2VwdG9ycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBpbnRlcmNlcHRvcnMgPSBbXTtcbiAgfVxufTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9wYWNrYWdlcy9AYXBwaHViOmxvZ3JvY2tldC1uZXR3b3JrL3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGFwcGh1Yjpsb2dyb2NrZXQtbmV0d29yay9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHJlZ2lzdGVyTmV0d29yaztcblxudmFyIF9yZWdpc3RlckZldGNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9yZWdpc3RlckZldGNoICovIFwiLi9wYWNrYWdlcy9AYXBwaHViOmxvZ3JvY2tldC1uZXR3b3JrL3NyYy9yZWdpc3RlckZldGNoLmpzXCIpO1xuXG52YXIgX3JlZ2lzdGVyRmV0Y2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVnaXN0ZXJGZXRjaCk7XG5cbnZhciBfcmVnaXN0ZXJYSFIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3JlZ2lzdGVyWEhSICovIFwiLi9wYWNrYWdlcy9AYXBwaHViOmxvZ3JvY2tldC1uZXR3b3JrL3NyYy9yZWdpc3RlclhIUi5qc1wiKTtcblxudmFyIF9yZWdpc3RlclhIUjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWdpc3RlclhIUik7XG5cbnZhciBfbWFwVmFsdWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGFwcGh1Yi9sb2dyb2NrZXQtdXRpbHMvc3JjL21hcFZhbHVlcyAqLyBcIi4vcGFja2FnZXMvQGFwcGh1Yjpsb2dyb2NrZXQtdXRpbHMvc3JjL21hcFZhbHVlcy5qc1wiKTtcblxudmFyIF9tYXBWYWx1ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwVmFsdWVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gcmVnaXN0ZXJOZXR3b3JrKGxvZ2dlcikge1xuICB2YXIgaWdub3JlZE5ldHdvcmsgPSB7fTtcblxuICAvLyB0cnVuY2F0ZSBpZiA+IDRNQiBpbiBzaXplXG4gIHZhciB0cnVuY2F0ZSA9IGZ1bmN0aW9uIHRydW5jYXRlKGRhdGEpIHtcbiAgICB2YXIgbGltaXQgPSAxMDI0ICogMTAwMCAqIDQ7XG4gICAgdmFyIHN0ciA9IGRhdGE7XG5cbiAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgPT09ICdvYmplY3QnICYmIGRhdGEgIT0gbnVsbCkge1xuICAgICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGRhdGEpO1xuXG4gICAgICBpZiAocHJvdG8gPT09IE9iamVjdC5wcm90b3R5cGUgfHwgcHJvdG8gPT09IG51bGwpIHtcbiAgICAgICAgLy8gcGxhaW4gb2JqZWN0IC0ganNvbmlmeSBmb3IgdGhlIHNpemUgY2hlY2tcbiAgICAgICAgc3RyID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0ciAmJiBzdHIubGVuZ3RoICYmIHN0ci5sZW5ndGggPiBsaW1pdCAmJiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGJlZ2lubmluZyA9IHN0ci5zdWJzdHJpbmcoMCwgMTAwMCk7XG4gICAgICByZXR1cm4gYmVnaW5uaW5nICsgJyAuLi4gTG9nUm9ja2V0IHRydW5jYXRpbmcgdG8gZmlyc3QgMTAwMCBjaGFyYWN0ZXJzLlxcbiAgICAgIEtlZXAgZGF0YSB1bmRlciA0TUIgdG8gcHJldmVudCB0cnVuY2F0aW9uLiBodHRwczovL2RvY3MubG9ncm9ja2V0LmNvbS9yZWZlcmVuY2UjbmV0d29yayc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgdmFyIGFkZFJlcXVlc3QgPSBmdW5jdGlvbiBhZGRSZXF1ZXN0KHJlcUlkLCByZXF1ZXN0KSB7XG4gICAgdmFyIG1ldGhvZCA9IHJlcXVlc3QubWV0aG9kO1xuICAgIGxvZ2dlci5hZGRFdmVudCgnbHIubmV0d29yay5SZXF1ZXN0RXZlbnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgICAgX3JlZiRpc0VuYWJsZWQgPSBfcmVmLmlzRW5hYmxlZCxcbiAgICAgICAgICBpc0VuYWJsZWQgPSBfcmVmJGlzRW5hYmxlZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYkaXNFbmFibGVkLFxuICAgICAgICAgIF9yZWYkcmVxdWVzdFNhbml0aXplciA9IF9yZWYucmVxdWVzdFNhbml0aXplcixcbiAgICAgICAgICByZXF1ZXN0U2FuaXRpemVyID0gX3JlZiRyZXF1ZXN0U2FuaXRpemVyID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoZikge1xuICAgICAgICByZXR1cm4gZjtcbiAgICAgIH0gOiBfcmVmJHJlcXVlc3RTYW5pdGl6ZXI7XG5cbiAgICAgIGlmICghaXNFbmFibGVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdmFyIHNhbml0aXplZCA9IG51bGw7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBvbmx5IHRyeSBjYXRjaCB1c2VyIGRlZmluZWQgZnVuY3Rpb25zXG4gICAgICAgIHNhbml0aXplZCA9IHJlcXVlc3RTYW5pdGl6ZXIoX2V4dGVuZHMoe30sIHJlcXVlc3QsIHsgcmVxSWQ6IHJlcUlkIH0pKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgICBpZiAoc2FuaXRpemVkKSB7XG4gICAgICAgIC8vIFdyaXRpbmcgYW5kIHRoZW4gcmVhZGluZyBmcm9tIGFuIGEgdGFnIHR1cm5zIGEgcmVsYXRpdmVcbiAgICAgICAgLy8gdXJsIGludG8gYW4gYWJzb2x1dGUgb25lLlxuICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgYS5ocmVmID0gc2FuaXRpemVkLnVybDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlcUlkOiByZXFJZCwgLy8gZGVmYXVsdFxuICAgICAgICAgIHVybDogYS5ocmVmLCAvLyBzYW5pdGl6ZWRcbiAgICAgICAgICBoZWFkZXJzOiAoMCwgX21hcFZhbHVlczIuZGVmYXVsdCkoc2FuaXRpemVkLmhlYWRlcnMsIGZ1bmN0aW9uIChoZWFkZXJWYWx1ZSkge1xuICAgICAgICAgICAgLy8gc2FuaXRpemVkXG4gICAgICAgICAgICByZXR1cm4gJycgKyBoZWFkZXJWYWx1ZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBib2R5OiB0cnVuY2F0ZShzYW5pdGl6ZWQuYm9keSksIC8vIHNhbml0aXplZFxuICAgICAgICAgIG1ldGhvZDogbWV0aG9kLCAvLyBkZWZhdWx0XG4gICAgICAgICAgcmVmZXJyZXI6IHNhbml0aXplZC5yZWZlcnJlciB8fCB1bmRlZmluZWQsIC8vIHNhbml0aXplZFxuICAgICAgICAgIG1vZGU6IHNhbml0aXplZC5tb2RlIHx8IHVuZGVmaW5lZCwgLy8gc2FuaXRpemVkXG4gICAgICAgICAgY3JlZGVudGlhbHM6IHNhbml0aXplZC5jcmVkZW50aWFscyB8fCB1bmRlZmluZWQgLy8gc2FuaXRpemVkXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZ25vcmVkTmV0d29ya1tyZXFJZF0gPSB0cnVlO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGFkZFJlc3BvbnNlID0gZnVuY3Rpb24gYWRkUmVzcG9uc2UocmVxSWQsIHJlc3BvbnNlKSB7XG4gICAgdmFyIG1ldGhvZCA9IHJlc3BvbnNlLm1ldGhvZCxcbiAgICAgICAgc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuXG4gICAgbG9nZ2VyLmFkZEV2ZW50KCdsci5uZXR3b3JrLlJlc3BvbnNlRXZlbnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZjIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICAgIF9yZWYyJGlzRW5hYmxlZCA9IF9yZWYyLmlzRW5hYmxlZCxcbiAgICAgICAgICBpc0VuYWJsZWQgPSBfcmVmMiRpc0VuYWJsZWQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmMiRpc0VuYWJsZWQsXG4gICAgICAgICAgX3JlZjIkcmVzcG9uc2VTYW5pdGl6ID0gX3JlZjIucmVzcG9uc2VTYW5pdGl6ZXIsXG4gICAgICAgICAgcmVzcG9uc2VTYW5pdGl6ZXIgPSBfcmVmMiRyZXNwb25zZVNhbml0aXogPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIHJldHVybiBmO1xuICAgICAgfSA6IF9yZWYyJHJlc3BvbnNlU2FuaXRpejtcblxuICAgICAgaWYgKCFpc0VuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2UgaWYgKGlnbm9yZWROZXR3b3JrW3JlcUlkXSkge1xuICAgICAgICBkZWxldGUgaWdub3JlZE5ldHdvcmtbcmVxSWRdO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhciBzYW5pdGl6ZWQgPSBudWxsO1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBvbmx5IHRyeSBjYXRjaCB1c2VyIGRlZmluZWQgZnVuY3Rpb25zXG4gICAgICAgIHNhbml0aXplZCA9IHJlc3BvbnNlU2FuaXRpemVyKF9leHRlbmRzKHt9LCByZXNwb25zZSwgeyByZXFJZDogcmVxSWQgfSkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgLy8gZmFsbCB0aHJvdWdoIHRvIHJlZGFjdGVkIGxvZ1xuICAgICAgfVxuICAgICAgaWYgKHNhbml0aXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlcUlkOiByZXFJZCwgLy8gZGVmYXVsdFxuICAgICAgICAgIHN0YXR1czogc2FuaXRpemVkLnN0YXR1cywgLy8gc2FuaXRpemVkXG4gICAgICAgICAgaGVhZGVyczogKDAsIF9tYXBWYWx1ZXMyLmRlZmF1bHQpKHNhbml0aXplZC5oZWFkZXJzLCBmdW5jdGlvbiAoaGVhZGVyVmFsdWUpIHtcbiAgICAgICAgICAgIC8vIHNhbml0aXplZFxuICAgICAgICAgICAgcmV0dXJuICcnICsgaGVhZGVyVmFsdWU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgYm9keTogdHJ1bmNhdGUoc2FuaXRpemVkLmJvZHkpLCAvLyBzYW5pdGl6ZWRcbiAgICAgICAgICBtZXRob2Q6IG1ldGhvZCAvLyBkZWZhdWx0XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXFJZDogcmVxSWQsIC8vIGRlZmF1bHRcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMsIC8vIGRlZmF1bHRcbiAgICAgICAgaGVhZGVyczoge30sIC8vIHJlZGFjdGVkXG4gICAgICAgIGJvZHk6IG51bGwsIC8vIHJlZGFjdGVkXG4gICAgICAgIG1ldGhvZDogbWV0aG9kIC8vIGRlZmF1bHRcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGlzSWdub3JlZCA9IGZ1bmN0aW9uIGlzSWdub3JlZChyZXFJZCkge1xuICAgIHJldHVybiBsb2dnZXIuaXNEaXNhYmxlZCB8fCBpZ25vcmVkTmV0d29ya1tyZXFJZF0gPT09IHRydWU7XG4gIH07XG5cbiAgdmFyIHVuc3ViRmV0Y2ggPSAoMCwgX3JlZ2lzdGVyRmV0Y2gyLmRlZmF1bHQpKHsgYWRkUmVxdWVzdDogYWRkUmVxdWVzdCwgYWRkUmVzcG9uc2U6IGFkZFJlc3BvbnNlLCBpc0lnbm9yZWQ6IGlzSWdub3JlZCB9KTtcbiAgdmFyIHVuc3ViWEhSID0gKDAsIF9yZWdpc3RlclhIUjIuZGVmYXVsdCkoe1xuICAgIGFkZFJlcXVlc3Q6IGFkZFJlcXVlc3QsXG4gICAgYWRkUmVzcG9uc2U6IGFkZFJlc3BvbnNlLFxuICAgIGlzSWdub3JlZDogaXNJZ25vcmVkLFxuICAgIHNob3VsZENsb25lUmVzcG9uc2U6IGxvZ2dlci5fc2hvdWxkQ2xvbmVSZXNwb25zZVxuICB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHVuc3ViRmV0Y2goKTtcbiAgICB1bnN1YlhIUigpO1xuICB9O1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LW5ldHdvcmsvc3JjL3JlZ2lzdGVyRmV0Y2guanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGFwcGh1Yjpsb2dyb2NrZXQtbmV0d29yay9zcmMvcmVnaXN0ZXJGZXRjaC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcmVnaXN0ZXJGZXRjaDtcblxudmFyIF9tYXBWYWx1ZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYXBwaHViL2xvZ3JvY2tldC11dGlscy9zcmMvbWFwVmFsdWVzICovIFwiLi9wYWNrYWdlcy9AYXBwaHViOmxvZ3JvY2tldC11dGlscy9zcmMvbWFwVmFsdWVzLmpzXCIpO1xuXG52YXIgX21hcFZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXBWYWx1ZXMpO1xuXG52YXIgX2ZldGNoSW50ZXJjZXB0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9mZXRjaEludGVyY2VwdCAqLyBcIi4vcGFja2FnZXMvQGFwcGh1Yjpsb2dyb2NrZXQtbmV0d29yay9zcmMvZmV0Y2hJbnRlcmNlcHQuanNcIik7XG5cbnZhciBfZmV0Y2hJbnRlcmNlcHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmV0Y2hJbnRlcmNlcHQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBtYWtlT2JqZWN0RnJvbUhlYWRlcnMoaGVhZGVycykge1xuICAvLyBJZiB1c2luZyByZWFsIGZldGNoLCB3ZSBtdXN0IHN0cmluZ2lmeSB0aGUgSGVhZGVycyBvYmplY3QuXG4gIGlmIChoZWFkZXJzID09IG51bGwgfHwgdHlwZW9mIGhlYWRlcnMuZm9yRWFjaCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBpZiAocmVzdWx0W2tleV0pIHtcbiAgICAgIHJlc3VsdFtrZXldID0gcmVzdWx0W2tleV0gKyAnLCcgKyB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSAnJyArIHZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIFhIUiBzcGVjaWZpY2F0aW9uIGlzIHVuY2xlYXIgb2Ygd2hhdCB0eXBlcyB0byBhbGxvdyBpbiB2YWx1ZSBzbyB1c2luZyB0b1N0cmluZyBtZXRob2QgZm9yIG5vd1xudmFyIHN0cmluZ2lmeUhlYWRlcnMgPSBmdW5jdGlvbiBzdHJpbmdpZnlIZWFkZXJzKGhlYWRlcnMpIHtcbiAgcmV0dXJuICgwLCBfbWFwVmFsdWVzMi5kZWZhdWx0KShtYWtlT2JqZWN0RnJvbUhlYWRlcnMoaGVhZGVycyksIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAnJyArIHZhbHVlO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIHBsdWNrRmV0Y2hGaWVsZHMoKSB7XG4gIHZhciBhcmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhcmcudXJsLFxuICAgIGhlYWRlcnM6IHN0cmluZ2lmeUhlYWRlcnMoYXJnLmhlYWRlcnMpLFxuICAgIG1ldGhvZDogYXJnLm1ldGhvZCAmJiBhcmcubWV0aG9kLnRvVXBwZXJDYXNlKCksXG4gICAgcmVmZXJyZXI6IGFyZy5yZWZlcnJlciB8fCB1bmRlZmluZWQsXG4gICAgbW9kZTogYXJnLm1vZGUgfHwgdW5kZWZpbmVkLFxuICAgIGNyZWRlbnRpYWxzOiBhcmcuY3JlZGVudGlhbHMgfHwgdW5kZWZpbmVkXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRmV0Y2goX3JlZikge1xuICB2YXIgYWRkUmVxdWVzdCA9IF9yZWYuYWRkUmVxdWVzdCxcbiAgICAgIGFkZFJlc3BvbnNlID0gX3JlZi5hZGRSZXNwb25zZSxcbiAgICAgIGlzSWdub3JlZCA9IF9yZWYuaXNJZ25vcmVkO1xuXG4gIHZhciBMT0dST0NLRVRfRkVUQ0hfTEFCRUwgPSAnZmV0Y2gtJztcbiAgdmFyIGZldGNoTWV0aG9kTWFwID0ge307XG5cbiAgdmFyIHVucmVnaXN0ZXIgPSBfZmV0Y2hJbnRlcmNlcHQyLmRlZmF1bHQucmVnaXN0ZXIoe1xuICAgIHJlcXVlc3Q6IGZ1bmN0aW9uIHJlcXVlc3QoZmV0Y2hJZCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgcCA9IHZvaWQgMDtcblxuICAgICAgaWYgKHR5cGVvZiBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJyAmJiBhcmdzWzBdIGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgICB2YXIgY2xvbmVkVGV4dCA9IHZvaWQgMDtcblxuICAgICAgICAvLyBSZXF1ZXN0LmNsb25lKCkgYW5kIFJlcXVlc3QudGV4dCgpIG1heSB0aHJvdyBpbiBTYWZhcmkgKGUuZy4sIHdoZW5cbiAgICAgICAgLy8gcmVxdWVzdCBib2R5IGNvbnRhaW5zIEZvcm1EYXRhKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNsb25lZFRleHQgPSBhcmdzWzBdLmNsb25lKCkudGV4dCgpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjbG9uZWRUZXh0ID0gUHJvbWlzZS5yZXNvbHZlKCdMb2dSb2NrZXQgZmV0Y2ggZXJyb3I6ICcgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBwID0gY2xvbmVkVGV4dC50aGVuKGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBwbHVja0ZldGNoRmllbGRzKGFyZ3NbMF0pLCB7XG4gICAgICAgICAgICBib2R5OiBib2R5XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHBsdWNrRmV0Y2hGaWVsZHMoYXJnc1swXSksIHtcbiAgICAgICAgICAgIGJvZHk6ICdMb2dSb2NrZXQgZmV0Y2ggZXJyb3I6ICcgKyBlcnIubWVzc2FnZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHAgPSBQcm9taXNlLnJlc29sdmUoX2V4dGVuZHMoe30sIHBsdWNrRmV0Y2hGaWVsZHMoYXJnc1sxXSksIHtcbiAgICAgICAgICB1cmw6ICcnICsgYXJnc1swXSxcbiAgICAgICAgICBib2R5OiAoYXJnc1sxXSB8fCB7fSkuYm9keVxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwLnRoZW4oZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICBmZXRjaE1ldGhvZE1hcFtmZXRjaElkXSA9IHJlcS5tZXRob2Q7XG4gICAgICAgIGFkZFJlcXVlc3QoJycgKyBMT0dST0NLRVRfRkVUQ0hfTEFCRUwgKyBmZXRjaElkLCByZXEpO1xuICAgICAgICByZXR1cm4gYXJncztcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVxdWVzdEVycm9yOiBmdW5jdGlvbiByZXF1ZXN0RXJyb3IoZmV0Y2hJZCwgZXJyb3IpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfSxcbiAgICByZXNwb25zZTogZnVuY3Rpb24gcmVzcG9uc2UoZmV0Y2hJZCwgX3Jlc3BvbnNlKSB7XG4gICAgICB2YXIgY2xvbmVkVGV4dCA9IHZvaWQgMDtcblxuICAgICAgaWYgKGlzSWdub3JlZCgnJyArIExPR1JPQ0tFVF9GRVRDSF9MQUJFTCArIGZldGNoSWQpKSB7XG4gICAgICAgIC8vIERvbid0IGV2ZW4gdHJ5IHRvIHJlYWQgaWdub3JlZCByZXF1ZXN0c1xuICAgICAgICByZXR1cm4gX3Jlc3BvbnNlO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBUT0RPOiBlbmhhbmNlIGZ1bmN0aW9uIG9uIG9yaWdpbmFsIHJlc3BvbnNlIGFuZCBmdXR1cmUgY2xvbmVzIGZvcjpcbiAgICAgICAgLy8gdGV4dCgpLCBqc29uKCksIGJsb2IoKSwgZm9ybWRhdGEoKSwgYXJyYXlidWZmZXIoKVxuICAgICAgICBjbG9uZWRUZXh0ID0gX3Jlc3BvbnNlLmNsb25lKCkudGV4dCgpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIHNhZmFyaSBoYXMgYSBidWcgd2hlcmUgY2xvbmluZyBjYW4gZmFpbFxuICAgICAgICBjbG9uZWRUZXh0ID0gUHJvbWlzZS5yZXNvbHZlKCdMb2dSb2NrZXQgZmV0Y2ggZXJyb3I6ICcgKyBlcnIubWVzc2FnZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbG9uZWRUZXh0LnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlSGFzaCA9IHtcbiAgICAgICAgICB1cmw6IF9yZXNwb25zZS51cmwsXG4gICAgICAgICAgc3RhdHVzOiBfcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgIGhlYWRlcnM6IHN0cmluZ2lmeUhlYWRlcnMoX3Jlc3BvbnNlLmhlYWRlcnMpLFxuICAgICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgICAgbWV0aG9kOiBmZXRjaE1ldGhvZE1hcFtmZXRjaElkXVxuICAgICAgICB9O1xuICAgICAgICBkZWxldGUgZmV0Y2hNZXRob2RNYXBbZmV0Y2hJZF07XG4gICAgICAgIGFkZFJlc3BvbnNlKCcnICsgTE9HUk9DS0VUX0ZFVENIX0xBQkVMICsgZmV0Y2hJZCwgcmVzcG9uc2VIYXNoKTtcbiAgICAgICAgcmV0dXJuIF9yZXNwb25zZTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVzcG9uc2VFcnJvcjogZnVuY3Rpb24gcmVzcG9uc2VFcnJvcihmZXRjaElkLCBlcnJvcikge1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICB1cmw6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhdHVzOiAwLFxuICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgYm9keTogJycgKyBlcnJvclxuICAgICAgfTtcbiAgICAgIGFkZFJlc3BvbnNlKCcnICsgTE9HUk9DS0VUX0ZFVENIX0xBQkVMICsgZmV0Y2hJZCwgcmVzcG9uc2UpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB1bnJlZ2lzdGVyO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LW5ldHdvcmsvc3JjL3JlZ2lzdGVyWEhSLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9wYWNrYWdlcy9AYXBwaHViOmxvZ3JvY2tldC1uZXR3b3JrL3NyYy9yZWdpc3RlclhIUi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnNldEFjdGl2ZSA9IHNldEFjdGl2ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJlZ2lzdGVyWEhSO1xuXG52YXIgX21hcFZhbHVlcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBhcHBodWIvbG9ncm9ja2V0LXV0aWxzL3NyYy9tYXBWYWx1ZXMgKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LXV0aWxzL3NyYy9tYXBWYWx1ZXMuanNcIik7XG5cbnZhciBfbWFwVmFsdWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcFZhbHVlcyk7XG5cbnZhciBfZW5oYW5jZUZ1bmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYXBwaHViL2xvZ3JvY2tldC11dGlscy9zcmMvZW5oYW5jZUZ1bmMgKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LXV0aWxzL3NyYy9lbmhhbmNlRnVuYy5qc1wiKTtcblxudmFyIF9lbmhhbmNlRnVuYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lbmhhbmNlRnVuYyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpc0FjdGl2ZSA9IHRydWU7XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZShzaG91bGRCZUFjdGl2ZSkge1xuICBpc0FjdGl2ZSA9IHNob3VsZEJlQWN0aXZlO1xufVxuXG52YXIgY3VycmVudFhIUklkID0gMDtcbmZ1bmN0aW9uIHJlZ2lzdGVyWEhSKF9yZWYpIHtcbiAgdmFyIGFkZFJlcXVlc3QgPSBfcmVmLmFkZFJlcXVlc3QsXG4gICAgICBhZGRSZXNwb25zZSA9IF9yZWYuYWRkUmVzcG9uc2UsXG4gICAgICBpc0lnbm9yZWQgPSBfcmVmLmlzSWdub3JlZCxcbiAgICAgIF9yZWYkc2hvdWxkQ2xvbmVSZXNwbyA9IF9yZWYuc2hvdWxkQ2xvbmVSZXNwb25zZSxcbiAgICAgIHNob3VsZENsb25lUmVzcG9uc2UgPSBfcmVmJHNob3VsZENsb25lUmVzcG8gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRzaG91bGRDbG9uZVJlc3BvO1xuXG4gIHZhciBfWEhSID0gWE1MSHR0cFJlcXVlc3Q7XG4gIHZhciB4aHJNYXAgPSBuZXcgV2Vha01hcCgpO1xuICB2YXIgdW5zdWJzY3JpYmVkRnJvbVhociA9IGZhbHNlO1xuICB2YXIgTE9HUk9DS0VUX1hIUl9MQUJFTCA9ICd4aHItJztcblxuICB3aW5kb3cuX2xyWE1MSHR0cFJlcXVlc3QgPSBYTUxIdHRwUmVxdWVzdDtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmF0aXZlLXJlYXNzaWduXG4gIFhNTEh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gWE1MSHR0cFJlcXVlc3QobW96QW5vbiwgbW96U3lzdGVtKSB7XG4gICAgdmFyIHhock9iamVjdCA9IG5ldyBfWEhSKG1vekFub24sIG1velN5c3RlbSk7XG4gICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIHhock9iamVjdDtcbiAgICB9XG5cbiAgICB4aHJNYXAuc2V0KHhock9iamVjdCwge1xuICAgICAgeGhySWQ6ICsrY3VycmVudFhIUklkLFxuICAgICAgaGVhZGVyczoge31cbiAgICB9KTtcblxuICAgIC8vIC4uLiwgJ29wZW4nLCAobWV0aG9kLCB1cmwsIGFzeW5jLCB1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcbiAgICAoMCwgX2VuaGFuY2VGdW5jMi5kZWZhdWx0KSh4aHJPYmplY3QsICdvcGVuJywgZnVuY3Rpb24gKG1ldGhvZCwgdXJsKSB7XG4gICAgICBpZiAodW5zdWJzY3JpYmVkRnJvbVhocikgcmV0dXJuO1xuICAgICAgdmFyIGN1cnJlbnRYSFIgPSB4aHJNYXAuZ2V0KHhock9iamVjdCk7XG4gICAgICBjdXJyZW50WEhSLm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGN1cnJlbnRYSFIudXJsID0gdXJsO1xuICAgIH0pO1xuXG4gICAgKDAsIF9lbmhhbmNlRnVuYzIuZGVmYXVsdCkoeGhyT2JqZWN0LCAnc2VuZCcsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBpZiAodW5zdWJzY3JpYmVkRnJvbVhocikgcmV0dXJuO1xuICAgICAgdmFyIGN1cnJlbnRYSFIgPSB4aHJNYXAuZ2V0KHhock9iamVjdCk7XG4gICAgICBpZiAoIWN1cnJlbnRYSFIpIHJldHVybjtcblxuICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgIHVybDogY3VycmVudFhIUi51cmwsXG4gICAgICAgIG1ldGhvZDogY3VycmVudFhIUi5tZXRob2QgJiYgY3VycmVudFhIUi5tZXRob2QudG9VcHBlckNhc2UoKSxcbiAgICAgICAgaGVhZGVyczogKDAsIF9tYXBWYWx1ZXMyLmRlZmF1bHQpKGN1cnJlbnRYSFIuaGVhZGVycyB8fCB7fSwgZnVuY3Rpb24gKGhlYWRlclZhbHVlcykge1xuICAgICAgICAgIHJldHVybiBoZWFkZXJWYWx1ZXMuam9pbignLCAnKTtcbiAgICAgICAgfSksXG4gICAgICAgIGJvZHk6IGRhdGFcbiAgICAgIH07XG4gICAgICBhZGRSZXF1ZXN0KCcnICsgTE9HUk9DS0VUX1hIUl9MQUJFTCArIGN1cnJlbnRYSFIueGhySWQsIHJlcXVlc3QpO1xuICAgIH0pO1xuXG4gICAgKDAsIF9lbmhhbmNlRnVuYzIuZGVmYXVsdCkoeGhyT2JqZWN0LCAnc2V0UmVxdWVzdEhlYWRlcicsIGZ1bmN0aW9uIChoZWFkZXIsIHZhbHVlKSB7XG4gICAgICBpZiAodW5zdWJzY3JpYmVkRnJvbVhocikgcmV0dXJuO1xuICAgICAgdmFyIGN1cnJlbnRYSFIgPSB4aHJNYXAuZ2V0KHhock9iamVjdCk7XG4gICAgICBpZiAoIWN1cnJlbnRYSFIpIHJldHVybjtcblxuICAgICAgY3VycmVudFhIUi5oZWFkZXJzID0gY3VycmVudFhIUi5oZWFkZXJzIHx8IHt9O1xuICAgICAgY3VycmVudFhIUi5oZWFkZXJzW2hlYWRlcl0gPSBjdXJyZW50WEhSLmhlYWRlcnNbaGVhZGVyXSB8fCBbXTtcbiAgICAgIGN1cnJlbnRYSFIuaGVhZGVyc1toZWFkZXJdLnB1c2godmFsdWUpO1xuICAgIH0pO1xuXG4gICAgdmFyIHhockxpc3RlbmVycyA9IHtcbiAgICAgIHJlYWR5c3RhdGVjaGFuZ2U6IGZ1bmN0aW9uIHJlYWR5c3RhdGVjaGFuZ2UoKSB7XG4gICAgICAgIGlmICh1bnN1YnNjcmliZWRGcm9tWGhyKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHhock9iamVjdC5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRYSFIgPSB4aHJNYXAuZ2V0KHhock9iamVjdCk7XG4gICAgICAgICAgaWYgKCFjdXJyZW50WEhSKSByZXR1cm47XG5cbiAgICAgICAgICAvLyBEbyBub3QgcmVhZCBpZ25vcmVkIHJlcXVlc3RzIGF0IGFsbC5cbiAgICAgICAgICBpZiAoaXNJZ25vcmVkKCcnICsgTE9HUk9DS0VUX1hIUl9MQUJFTCArIGN1cnJlbnRYSFIueGhySWQpKSByZXR1cm47XG5cbiAgICAgICAgICB2YXIgaGVhZGVyU3RyaW5nID0geGhyT2JqZWN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpO1xuXG4gICAgICAgICAgdmFyIGhlYWRlcnMgPSBoZWFkZXJTdHJpbmcuc3BsaXQoL1tcXHJcXG5dKy8pLnJlZHVjZShmdW5jdGlvbiAocHJldmlvdXMsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHZhciBuZXh0ID0gcHJldmlvdXM7XG4gICAgICAgICAgICB2YXIgaGVhZGVyUGFydHMgPSBjdXJyZW50LnNwbGl0KCc6ICcpO1xuICAgICAgICAgICAgaWYgKGhlYWRlclBhcnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdmFyIGtleSA9IGhlYWRlclBhcnRzLnNoaWZ0KCk7IC8vIGZpcnN0IGluZGV4IG9mIHRoZSBhcnJheVxuICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBoZWFkZXJQYXJ0cy5qb2luKCc6ICcpOyAvLyByZXN0IG9mIHRoZSBhcnJheSByZXBhaXJlZFxuICAgICAgICAgICAgICBpZiAocHJldmlvdXNba2V5XSkge1xuICAgICAgICAgICAgICAgIG5leHRba2V5XSArPSAnLCAnICsgdmFsdWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgIHZhciBib2R5ID0gdm9pZCAwO1xuXG4gICAgICAgICAgLy8gSUUgMTEgc29tZXRpbWVzIHRocm93cyB3aGVuIHRyeWluZyB0byBhY2Nlc3MgbGFyZ2UgcmVzcG9uc2VzXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN3aXRjaCAoeGhyT2JqZWN0LnJlc3BvbnNlVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlICdqc29uJzpcbiAgICAgICAgICAgICAgICBib2R5ID0gc2hvdWxkQ2xvbmVSZXNwb25zZSA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoeGhyT2JqZWN0LnJlc3BvbnNlKSkgOiB4aHJPYmplY3QucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2FycmF5YnVmZmVyJzpcbiAgICAgICAgICAgICAgY2FzZSAnYmxvYic6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYm9keSA9IHhock9iamVjdC5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSAnZG9jdW1lbnQnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJvZHkgPSB4aHJPYmplY3QucmVzcG9uc2VYTUw7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICBjYXNlICcnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJvZHkgPSB4aHJPYmplY3QucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJvZHkgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBib2R5ID0gJ0xvZ1JvY2tldDogRXJyb3IgYWNjZXNzaW5nIHJlc3BvbnNlLic7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgdXJsOiBjdXJyZW50WEhSLnVybCxcbiAgICAgICAgICAgIHN0YXR1czogeGhyT2JqZWN0LnN0YXR1cyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgbWV0aG9kOiAoY3VycmVudFhIUi5tZXRob2QgfHwgJycpLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgYWRkUmVzcG9uc2UoJycgKyBMT0dST0NLRVRfWEhSX0xBQkVMICsgY3VycmVudFhIUi54aHJJZCwgcmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyAvLyBVbnVzZWQgRXZlbnQgTGlzdGVuZXJzXG4gICAgICAvLyBsb2Fkc3RhcnQ6ICgpID0+IHt9LFxuICAgICAgLy8gcHJvZ3Jlc3M6ICgpID0+IHt9LFxuICAgICAgLy8gYWJvcnQ6ICgpID0+IHt9LFxuICAgICAgLy8gZXJyb3I6ICgpID0+IHt9LFxuICAgICAgLy8gbG9hZDogKCkgPT4ge30sXG4gICAgICAvLyB0aW1lb3V0OiAoKSA9PiB7fSxcbiAgICAgIC8vIGxvYWRlbmQ6ICgpID0+IHt9LFxuICAgIH07XG5cbiAgICBPYmplY3Qua2V5cyh4aHJMaXN0ZW5lcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgeGhyT2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIoa2V5LCB4aHJMaXN0ZW5lcnNba2V5XSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geGhyT2JqZWN0O1xuICB9O1xuXG4gIC8vIHRoaXMgYWxsb3dzIFwiaW5zdGFuY2VvZiBYTUxIdHRwUmVxdWVzdFwiIHRvIHdvcmtcbiAgWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlID0gX1hIUi5wcm90b3R5cGU7XG5cbiAgLy8gUGVyc2lzdCB0aGUgc3RhdGljIHZhcmlhYmxlcy5cbiAgWydVTlNFTlQnLCAnT1BFTkVEJywgJ0hFQURFUlNfUkVDRUlWRUQnLCAnTE9BRElORycsICdET05FJ10uZm9yRWFjaChmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICBYTUxIdHRwUmVxdWVzdFt2YXJpYWJsZV0gPSBfWEhSW3ZhcmlhYmxlXTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB1bnN1YnNjcmliZWRGcm9tWGhyID0gdHJ1ZTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmF0aXZlLXJlYXNzaWduXG4gICAgWE1MSHR0cFJlcXVlc3QgPSBfWEhSO1xuICB9O1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LXJlZHV4L3NyYy9jcmVhdGVFbmhhbmNlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LXJlZHV4L3NyYy9jcmVhdGVFbmhhbmNlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVFbmhhbmNlcjtcblxudmFyIF9ub3cgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYXBwaHViL25vdyAqLyBcIi4vcGFja2FnZXMvQGFwcGh1Yjpub3cvc3JjL2luZGV4LmpzXCIpO1xuXG52YXIgX25vdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ub3cpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc3RvcmVJZENvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBjcmVhdGVFbmhhbmNlcihsb2dnZXIpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgX3JlZiRzdGF0ZVNhbml0aXplciA9IF9yZWYuc3RhdGVTYW5pdGl6ZXIsXG4gICAgICBzdGF0ZVNhbml0aXplciA9IF9yZWYkc3RhdGVTYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIGY7XG4gIH0gOiBfcmVmJHN0YXRlU2FuaXRpemVyLFxuICAgICAgX3JlZiRhY3Rpb25TYW5pdGl6ZXIgPSBfcmVmLmFjdGlvblNhbml0aXplcixcbiAgICAgIGFjdGlvblNhbml0aXplciA9IF9yZWYkYWN0aW9uU2FuaXRpemVyID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoZikge1xuICAgIHJldHVybiBmO1xuICB9IDogX3JlZiRhY3Rpb25TYW5pdGl6ZXI7XG5cbiAgLy8gYW4gZW5oYW5jZXIgaXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBTdG9yZVxuICByZXR1cm4gZnVuY3Rpb24gKGNyZWF0ZVN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKSB7XG4gICAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKTtcbiAgICAgIHZhciBvcmlnaW5hbERpc3BhdGNoID0gc3RvcmUuZGlzcGF0Y2g7XG4gICAgICB2YXIgc3RvcmVJZCA9IHN0b3JlSWRDb3VudGVyKys7XG4gICAgICBsb2dnZXIuYWRkRXZlbnQoJ2xyLnJlZHV4LkluaXRpYWxTdGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNhbml0aXplZFN0YXRlID0gdm9pZCAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIG9ubHkgdHJ5IGNhdGNoIHVzZXIgZGVmaW5lZCBmdW5jdGlvbnNcbiAgICAgICAgICBzYW5pdGl6ZWRTdGF0ZSA9IHN0YXRlU2FuaXRpemVyKHN0b3JlLmdldFN0YXRlKCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci50b1N0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RhdGU6IHNhbml0aXplZFN0YXRlLFxuICAgICAgICAgIHN0b3JlSWQ6IHN0b3JlSWRcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gKDAsIF9ub3cyLmRlZmF1bHQpKCk7XG5cbiAgICAgICAgdmFyIGVyciA9IHZvaWQgMDtcbiAgICAgICAgdmFyIHJlcyA9IHZvaWQgMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXMgPSBvcmlnaW5hbERpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICBlcnIgPSBfZXJyO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHZhciBkdXJhdGlvbiA9ICgwLCBfbm93Mi5kZWZhdWx0KSgpIC0gc3RhcnQ7XG5cbiAgICAgICAgICBsb2dnZXIuYWRkRXZlbnQoJ2xyLnJlZHV4LlJlZHV4QWN0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNhbml0aXplZFN0YXRlID0gbnVsbDtcbiAgICAgICAgICAgIHZhciBzYW5pdGl6ZWRBY3Rpb24gPSBudWxsO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvLyBvbmx5IHRyeSBjYXRjaCB1c2VyIGRlZmluZWQgZnVuY3Rpb25zXG4gICAgICAgICAgICAgIHNhbml0aXplZFN0YXRlID0gc3RhdGVTYW5pdGl6ZXIoc3RvcmUuZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgICAgIHNhbml0aXplZEFjdGlvbiA9IGFjdGlvblNhbml0aXplcihhY3Rpb24pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2FuaXRpemVkU3RhdGUgJiYgc2FuaXRpemVkQWN0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RvcmVJZDogc3RvcmVJZCxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHNhbml0aXplZEFjdGlvbixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgc3RhdGVEZWx0YTogc2FuaXRpemVkU3RhdGVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0b3JlLCB7XG4gICAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9wYWNrYWdlcy9AYXBwaHViOmxvZ3JvY2tldC1yZWR1eC9zcmMvY3JlYXRlTWlkZGxld2FyZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGFwcGh1Yjpsb2dyb2NrZXQtcmVkdXgvc3JjL2NyZWF0ZU1pZGRsZXdhcmUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlTWlkZGxld2FyZTtcblxudmFyIF9ub3cgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYXBwaHViL25vdyAqLyBcIi4vcGFja2FnZXMvQGFwcGh1Yjpub3cvc3JjL2luZGV4LmpzXCIpO1xuXG52YXIgX25vdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ub3cpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc3RvcmVJZENvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBjcmVhdGVNaWRkbGV3YXJlKGxvZ2dlcikge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge30sXG4gICAgICBfcmVmJHN0YXRlU2FuaXRpemVyID0gX3JlZi5zdGF0ZVNhbml0aXplcixcbiAgICAgIHN0YXRlU2FuaXRpemVyID0gX3JlZiRzdGF0ZVNhbml0aXplciA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gZjtcbiAgfSA6IF9yZWYkc3RhdGVTYW5pdGl6ZXIsXG4gICAgICBfcmVmJGFjdGlvblNhbml0aXplciA9IF9yZWYuYWN0aW9uU2FuaXRpemVyLFxuICAgICAgYWN0aW9uU2FuaXRpemVyID0gX3JlZiRhY3Rpb25TYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIGY7XG4gIH0gOiBfcmVmJGFjdGlvblNhbml0aXplcjtcblxuICByZXR1cm4gZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgdmFyIHN0b3JlSWQgPSBzdG9yZUlkQ291bnRlcisrO1xuICAgIGxvZ2dlci5hZGRFdmVudCgnbHIucmVkdXguSW5pdGlhbFN0YXRlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNhbml0aXplZFN0YXRlID0gdm9pZCAwO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gb25seSB0cnkgY2F0Y2ggdXNlciBkZWZpbmVkIGZ1bmN0aW9uc1xuICAgICAgICBzYW5pdGl6ZWRTdGF0ZSA9IHN0YXRlU2FuaXRpemVyKHN0b3JlLmdldFN0YXRlKCkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0ZTogc2FuaXRpemVkU3RhdGUsXG4gICAgICAgIHN0b3JlSWQ6IHN0b3JlSWRcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBzdGFydCA9ICgwLCBfbm93Mi5kZWZhdWx0KSgpO1xuXG4gICAgICAgIHZhciBlcnIgPSB2b2lkIDA7XG4gICAgICAgIHZhciByZXMgPSB2b2lkIDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gbmV4dChhY3Rpb24pO1xuICAgICAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAgICAgZXJyID0gX2VycjtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB2YXIgZHVyYXRpb24gPSAoMCwgX25vdzIuZGVmYXVsdCkoKSAtIHN0YXJ0O1xuXG4gICAgICAgICAgbG9nZ2VyLmFkZEV2ZW50KCdsci5yZWR1eC5SZWR1eEFjdGlvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzYW5pdGl6ZWRTdGF0ZSA9IG51bGw7XG4gICAgICAgICAgICB2YXIgc2FuaXRpemVkQWN0aW9uID0gbnVsbDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8gb25seSB0cnkgY2F0Y2ggdXNlciBkZWZpbmVkIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICBzYW5pdGl6ZWRTdGF0ZSA9IHN0YXRlU2FuaXRpemVyKHN0b3JlLmdldFN0YXRlKCkpO1xuICAgICAgICAgICAgICBzYW5pdGl6ZWRBY3Rpb24gPSBhY3Rpb25TYW5pdGl6ZXIoYWN0aW9uKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNhbml0aXplZFN0YXRlICYmIHNhbml0aXplZEFjdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0b3JlSWQ6IHN0b3JlSWQsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBzYW5pdGl6ZWRBY3Rpb24sXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIHN0YXRlRGVsdGE6IHNhbml0aXplZFN0YXRlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LXJlZHV4L3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LXJlZHV4L3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGVFbmhhbmNlciA9IGV4cG9ydHMuY3JlYXRlTWlkZGxld2FyZSA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVFbmhhbmNlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY3JlYXRlRW5oYW5jZXIgKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LXJlZHV4L3NyYy9jcmVhdGVFbmhhbmNlci5qc1wiKTtcblxudmFyIF9jcmVhdGVFbmhhbmNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVFbmhhbmNlcik7XG5cbnZhciBfY3JlYXRlTWlkZGxld2FyZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY3JlYXRlTWlkZGxld2FyZSAqLyBcIi4vcGFja2FnZXMvQGFwcGh1Yjpsb2dyb2NrZXQtcmVkdXgvc3JjL2NyZWF0ZU1pZGRsZXdhcmUuanNcIik7XG5cbnZhciBfY3JlYXRlTWlkZGxld2FyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVNaWRkbGV3YXJlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5jcmVhdGVNaWRkbGV3YXJlID0gX2NyZWF0ZU1pZGRsZXdhcmUyLmRlZmF1bHQ7XG5leHBvcnRzLmNyZWF0ZUVuaGFuY2VyID0gX2NyZWF0ZUVuaGFuY2VyMi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LXV0aWxzL3NyYy9UcmFjZUtpdC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LXV0aWxzL3NyYy9UcmFjZUtpdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHsvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5cblxuLypcbiBUcmFjZUtpdCAtIENyb3NzIGJyb3dlciBzdGFjayB0cmFjZXMgLSBnaXRodWIuY29tL29jYy9UcmFjZUtpdFxuXG4gVGhpcyB3YXMgb3JpZ2luYWxseSBmb3JrZWQgZnJvbSBnaXRodWIuY29tL29jYy9UcmFjZUtpdCwgYnV0IGhhcyBzaW5jZSBiZWVuXG4gbGFyZ2VseSByZS13cml0dGVuIGFuZCBpcyBub3cgbWFpbnRhaW5lZCBhcyBwYXJ0IG9mIHJhdmVuLWpzLiAgVGVzdHMgZm9yXG4gdGhpcyBhcmUgaW4gdGVzdC92ZW5kb3IuXG5cbiBNSVQgbGljZW5zZVxuKi9cblxudmFyIFRyYWNlS2l0ID0ge1xuICAgIGNvbGxlY3RXaW5kb3dFcnJvcnM6IHRydWUsXG4gICAgZGVidWc6IGZhbHNlXG59O1xuXG4vLyBUaGlzIGlzIHRvIGJlIGRlZmVuc2l2ZSBpbiBlbnZpcm9ubWVudHMgd2hlcmUgd2luZG93IGRvZXMgbm90IGV4aXN0IChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9yYXZlbi1qcy9wdWxsLzc4NSlcbnZhciBfd2luZG93ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuLy8gZ2xvYmFsIHJlZmVyZW5jZSB0byBzbGljZVxudmFyIF9zbGljZSA9IFtdLnNsaWNlO1xudmFyIFVOS05PV05fRlVOQ1RJT04gPSAnPyc7XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0Vycm9yI0Vycm9yX3R5cGVzXG52YXIgRVJST1JfVFlQRVNfUkUgPSAvXig/OlVuY2F1Z2h0ICg/OmV4Y2VwdGlvbjogKT8pPygoPzpFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IpOiA/KC4qKSQvO1xuXG5mdW5jdGlvbiBnZXRMb2NhdGlvbkhyZWYoKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50LmxvY2F0aW9uID09PSAndW5kZWZpbmVkJykgcmV0dXJuICcnO1xuXG4gICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG59XG5cbi8qKlxuICogVHJhY2VLaXQucmVwb3J0OiBjcm9zcy1icm93c2VyIHByb2Nlc3Npbmcgb2YgdW5oYW5kbGVkIGV4Y2VwdGlvbnNcbiAqXG4gKiBTeW50YXg6XG4gKiAgIFRyYWNlS2l0LnJlcG9ydC5zdWJzY3JpYmUoZnVuY3Rpb24oc3RhY2tJbmZvKSB7IC4uLiB9KVxuICogICBUcmFjZUtpdC5yZXBvcnQudW5zdWJzY3JpYmUoZnVuY3Rpb24oc3RhY2tJbmZvKSB7IC4uLiB9KVxuICogICBUcmFjZUtpdC5yZXBvcnQoZXhjZXB0aW9uKVxuICogICB0cnkgeyAuLi5jb2RlLi4uIH0gY2F0Y2goZXgpIHsgVHJhY2VLaXQucmVwb3J0KGV4KTsgfVxuICpcbiAqIFN1cHBvcnRzOlxuICogICAtIEZpcmVmb3g6IGZ1bGwgc3RhY2sgdHJhY2Ugd2l0aCBsaW5lIG51bWJlcnMsIHBsdXMgY29sdW1uIG51bWJlclxuICogICAgICAgICAgICAgIG9uIHRvcCBmcmFtZTsgY29sdW1uIG51bWJlciBpcyBub3QgZ3VhcmFudGVlZFxuICogICAtIE9wZXJhOiAgIGZ1bGwgc3RhY2sgdHJhY2Ugd2l0aCBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyc1xuICogICAtIENocm9tZTogIGZ1bGwgc3RhY2sgdHJhY2Ugd2l0aCBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyc1xuICogICAtIFNhZmFyaTogIGxpbmUgYW5kIGNvbHVtbiBudW1iZXIgZm9yIHRoZSB0b3AgZnJhbWUgb25seTsgc29tZSBmcmFtZXNcbiAqICAgICAgICAgICAgICBtYXkgYmUgbWlzc2luZywgYW5kIGNvbHVtbiBudW1iZXIgaXMgbm90IGd1YXJhbnRlZWRcbiAqICAgLSBJRTogICAgICBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyIGZvciB0aGUgdG9wIGZyYW1lIG9ubHk7IHNvbWUgZnJhbWVzXG4gKiAgICAgICAgICAgICAgbWF5IGJlIG1pc3NpbmcsIGFuZCBjb2x1bW4gbnVtYmVyIGlzIG5vdCBndWFyYW50ZWVkXG4gKlxuICogSW4gdGhlb3J5LCBUcmFjZUtpdCBzaG91bGQgd29yayBvbiBhbGwgb2YgdGhlIGZvbGxvd2luZyB2ZXJzaW9uczpcbiAqICAgLSBJRTUuNSsgKG9ubHkgOC4wIHRlc3RlZClcbiAqICAgLSBGaXJlZm94IDAuOSsgKG9ubHkgMy41KyB0ZXN0ZWQpXG4gKiAgIC0gT3BlcmEgNysgKG9ubHkgMTAuNTAgdGVzdGVkOyB2ZXJzaW9ucyA5IGFuZCBlYXJsaWVyIG1heSByZXF1aXJlXG4gKiAgICAgRXhjZXB0aW9ucyBIYXZlIFN0YWNrdHJhY2UgdG8gYmUgZW5hYmxlZCBpbiBvcGVyYTpjb25maWcpXG4gKiAgIC0gU2FmYXJpIDMrIChvbmx5IDQrIHRlc3RlZClcbiAqICAgLSBDaHJvbWUgMSsgKG9ubHkgNSsgdGVzdGVkKVxuICogICAtIEtvbnF1ZXJvciAzLjUrICh1bnRlc3RlZClcbiAqXG4gKiBSZXF1aXJlcyBUcmFjZUtpdC5jb21wdXRlU3RhY2tUcmFjZS5cbiAqXG4gKiBUcmllcyB0byBjYXRjaCBhbGwgdW5oYW5kbGVkIGV4Y2VwdGlvbnMgYW5kIHJlcG9ydCB0aGVtIHRvIHRoZVxuICogc3Vic2NyaWJlZCBoYW5kbGVycy4gUGxlYXNlIG5vdGUgdGhhdCBUcmFjZUtpdC5yZXBvcnQgd2lsbCByZXRocm93IHRoZVxuICogZXhjZXB0aW9uLiBUaGlzIGlzIFJFUVVJUkVEIGluIG9yZGVyIHRvIGdldCBhIHVzZWZ1bCBzdGFjayB0cmFjZSBpbiBJRS5cbiAqIElmIHRoZSBleGNlcHRpb24gZG9lcyBub3QgcmVhY2ggdGhlIHRvcCBvZiB0aGUgYnJvd3NlciwgeW91IHdpbGwgb25seVxuICogZ2V0IGEgc3RhY2sgdHJhY2UgZnJvbSB0aGUgcG9pbnQgd2hlcmUgVHJhY2VLaXQucmVwb3J0IHdhcyBjYWxsZWQuXG4gKlxuICogSGFuZGxlcnMgcmVjZWl2ZSBhIHN0YWNrSW5mbyBvYmplY3QgYXMgZGVzY3JpYmVkIGluIHRoZVxuICogVHJhY2VLaXQuY29tcHV0ZVN0YWNrVHJhY2UgZG9jcy5cbiAqL1xuVHJhY2VLaXQucmVwb3J0ID0gZnVuY3Rpb24gcmVwb3J0TW9kdWxlV3JhcHBlcigpIHtcbiAgICB2YXIgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgbGFzdEFyZ3MgPSBudWxsLFxuICAgICAgICBsYXN0RXhjZXB0aW9uID0gbnVsbCxcbiAgICAgICAgbGFzdEV4Y2VwdGlvblN0YWNrID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNyYXNoIGhhbmRsZXIuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShoYW5kbGVyKSB7XG4gICAgICAgIGluc3RhbGxHbG9iYWxIYW5kbGVyKCk7XG4gICAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgY3Jhc2ggaGFuZGxlci5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoaGFuZGxlcikge1xuICAgICAgICBmb3IgKHZhciBpID0gaGFuZGxlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIGlmIChoYW5kbGVyc1tpXSA9PT0gaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgY3Jhc2ggaGFuZGxlcnMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmVBbGwoKSB7XG4gICAgICAgIHVuaW5zdGFsbEdsb2JhbEhhbmRsZXIoKTtcbiAgICAgICAgaGFuZGxlcnMgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBzdGFjayBpbmZvcm1hdGlvbiB0byBhbGwgaGFuZGxlcnMuXG4gICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgKj59IHN0YWNrXG4gICAgICovXG4gICAgZnVuY3Rpb24gbm90aWZ5SGFuZGxlcnMoc3RhY2ssIGlzV2luZG93RXJyb3IpIHtcbiAgICAgICAgdmFyIGV4Y2VwdGlvbiA9IG51bGw7XG4gICAgICAgIGlmIChpc1dpbmRvd0Vycm9yICYmICFUcmFjZUtpdC5jb2xsZWN0V2luZG93RXJyb3JzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSBpbiBoYW5kbGVycykge1xuICAgICAgICAgICAgaWYgKGhhbmRsZXJzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnNbaV0uYXBwbHkobnVsbCwgW3N0YWNrXS5jb25jYXQoX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGlubmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiA9IGlubmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfb2xkT25lcnJvckhhbmRsZXIsIF9vbkVycm9ySGFuZGxlckluc3RhbGxlZDtcblxuICAgIC8qKlxuICAgICAqIEVuc3VyZXMgYWxsIGdsb2JhbCB1bmhhbmRsZWQgZXhjZXB0aW9ucyBhcmUgcmVjb3JkZWQuXG4gICAgICogU3VwcG9ydGVkIGJ5IEdlY2tvIGFuZCBJRS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBFcnJvciBtZXNzYWdlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVVJMIG9mIHNjcmlwdCB0aGF0IGdlbmVyYXRlZCB0aGUgZXhjZXB0aW9uLlxuICAgICAqIEBwYXJhbSB7KG51bWJlcnxzdHJpbmcpfSBsaW5lTm8gVGhlIGxpbmUgbnVtYmVyIGF0IHdoaWNoIHRoZSBlcnJvclxuICAgICAqIG9jY3VycmVkLlxuICAgICAqIEBwYXJhbSB7PyhudW1iZXJ8c3RyaW5nKX0gY29sTm8gVGhlIGNvbHVtbiBudW1iZXIgYXQgd2hpY2ggdGhlIGVycm9yXG4gICAgICogb2NjdXJyZWQuXG4gICAgICogQHBhcmFtIHs/RXJyb3J9IGV4IFRoZSBhY3R1YWwgRXJyb3Igb2JqZWN0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyYWNlS2l0V2luZG93T25FcnJvcihtZXNzYWdlLCB1cmwsIGxpbmVObywgY29sTm8sIGV4KSB7XG4gICAgICAgIHZhciBzdGFjayA9IG51bGw7XG5cbiAgICAgICAgaWYgKGxhc3RFeGNlcHRpb25TdGFjaykge1xuICAgICAgICAgICAgVHJhY2VLaXQuY29tcHV0ZVN0YWNrVHJhY2UuYXVnbWVudFN0YWNrVHJhY2VXaXRoSW5pdGlhbEVsZW1lbnQobGFzdEV4Y2VwdGlvblN0YWNrLCB1cmwsIGxpbmVObywgbWVzc2FnZSk7XG4gICAgICAgICAgICBwcm9jZXNzTGFzdEV4Y2VwdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGV4KSB7XG4gICAgICAgICAgICAvLyBOZXcgY2hyb21lIGFuZCBibGluayBzZW5kIGFsb25nIGEgcmVhbCBlcnJvciBvYmplY3RcbiAgICAgICAgICAgIC8vIExldCdzIGp1c3QgcmVwb3J0IHRoYXQgbGlrZSBhIG5vcm1hbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9taWtld2VzdC5vcmcvMjAxMy8wOC9kZWJ1Z2dpbmctcnVudGltZS1lcnJvcnMtd2l0aC13aW5kb3ctb25lcnJvclxuICAgICAgICAgICAgc3RhY2sgPSBUcmFjZUtpdC5jb21wdXRlU3RhY2tUcmFjZShleCk7XG4gICAgICAgICAgICBub3RpZnlIYW5kbGVycyhzdGFjaywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgJ3VybCc6IHVybCxcbiAgICAgICAgICAgICAgICAnbGluZSc6IGxpbmVObyxcbiAgICAgICAgICAgICAgICAnY29sdW1uJzogY29sTm9cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBuYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG1zZyA9IG1lc3NhZ2U7IC8vIG11c3QgYmUgbmV3IHZhciBvciB3aWxsIG1vZGlmeSBvcmlnaW5hbCBgYXJndW1lbnRzYFxuICAgICAgICAgICAgdmFyIGdyb3VwcztcbiAgICAgICAgICAgIGlmICh7fS50b1N0cmluZy5jYWxsKG1lc3NhZ2UpID09PSAnW29iamVjdCBTdHJpbmddJykge1xuICAgICAgICAgICAgICAgIHZhciBncm91cHMgPSBtZXNzYWdlLm1hdGNoKEVSUk9SX1RZUEVTX1JFKTtcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBncm91cHNbMV07XG4gICAgICAgICAgICAgICAgICAgIG1zZyA9IGdyb3Vwc1syXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxvY2F0aW9uLmZ1bmMgPSBVTktOT1dOX0ZVTkNUSU9OO1xuXG4gICAgICAgICAgICBzdGFjayA9IHtcbiAgICAgICAgICAgICAgICAnbmFtZSc6IG5hbWUsXG4gICAgICAgICAgICAgICAgJ21lc3NhZ2UnOiBtc2csXG4gICAgICAgICAgICAgICAgJ3VybCc6IGdldExvY2F0aW9uSHJlZigpLFxuICAgICAgICAgICAgICAgICdzdGFjayc6IFtsb2NhdGlvbl1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBub3RpZnlIYW5kbGVycyhzdGFjaywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX29sZE9uZXJyb3JIYW5kbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gX29sZE9uZXJyb3JIYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbEdsb2JhbEhhbmRsZXIoKSB7XG4gICAgICAgIGlmIChfb25FcnJvckhhbmRsZXJJbnN0YWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfb2xkT25lcnJvckhhbmRsZXIgPSBfd2luZG93Lm9uZXJyb3I7XG4gICAgICAgIF93aW5kb3cub25lcnJvciA9IHRyYWNlS2l0V2luZG93T25FcnJvcjtcbiAgICAgICAgX29uRXJyb3JIYW5kbGVySW5zdGFsbGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmluc3RhbGxHbG9iYWxIYW5kbGVyKCkge1xuICAgICAgICBpZiAoIV9vbkVycm9ySGFuZGxlckluc3RhbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF93aW5kb3cub25lcnJvciA9IF9vbGRPbmVycm9ySGFuZGxlcjtcbiAgICAgICAgX29uRXJyb3JIYW5kbGVySW5zdGFsbGVkID0gZmFsc2U7XG4gICAgICAgIF9vbGRPbmVycm9ySGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzTGFzdEV4Y2VwdGlvbigpIHtcbiAgICAgICAgdmFyIF9sYXN0RXhjZXB0aW9uU3RhY2sgPSBsYXN0RXhjZXB0aW9uU3RhY2ssXG4gICAgICAgICAgICBfbGFzdEFyZ3MgPSBsYXN0QXJncztcbiAgICAgICAgbGFzdEFyZ3MgPSBudWxsO1xuICAgICAgICBsYXN0RXhjZXB0aW9uU3RhY2sgPSBudWxsO1xuICAgICAgICBsYXN0RXhjZXB0aW9uID0gbnVsbDtcbiAgICAgICAgbm90aWZ5SGFuZGxlcnMuYXBwbHkobnVsbCwgW19sYXN0RXhjZXB0aW9uU3RhY2ssIGZhbHNlXS5jb25jYXQoX2xhc3RBcmdzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwb3J0cyBhbiB1bmhhbmRsZWQgRXJyb3IgdG8gVHJhY2VLaXQuXG4gICAgICogQHBhcmFtIHtFcnJvcn0gZXhcbiAgICAgKiBAcGFyYW0gez9ib29sZWFufSByZXRocm93IElmIGZhbHNlLCBkbyBub3QgcmUtdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgKiBPbmx5IHVzZWQgZm9yIHdpbmRvdy5vbmVycm9yIHRvIG5vdCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wIG9mXG4gICAgICogcmV0aHJvd2luZy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZXBvcnQoZXgsIHJldGhyb3cpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBfc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICBpZiAobGFzdEV4Y2VwdGlvblN0YWNrKSB7XG4gICAgICAgICAgICBpZiAobGFzdEV4Y2VwdGlvbiA9PT0gZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIGFscmVhZHkgY2F1Z2h0IGJ5IGFuIGlubmVyIGNhdGNoIGJsb2NrLCBpZ25vcmVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc0xhc3RFeGNlcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdGFjayA9IFRyYWNlS2l0LmNvbXB1dGVTdGFja1RyYWNlKGV4KTtcbiAgICAgICAgbGFzdEV4Y2VwdGlvblN0YWNrID0gc3RhY2s7XG4gICAgICAgIGxhc3RFeGNlcHRpb24gPSBleDtcbiAgICAgICAgbGFzdEFyZ3MgPSBhcmdzO1xuXG4gICAgICAgIC8vIElmIHRoZSBzdGFjayB0cmFjZSBpcyBpbmNvbXBsZXRlLCB3YWl0IGZvciAyIHNlY29uZHMgZm9yXG4gICAgICAgIC8vIHNsb3cgc2xvdyBJRSB0byBzZWUgaWYgb25lcnJvciBvY2N1cnMgb3Igbm90IGJlZm9yZSByZXBvcnRpbmdcbiAgICAgICAgLy8gdGhpcyBleGNlcHRpb247IG90aGVyd2lzZSwgd2Ugd2lsbCBlbmQgdXAgd2l0aCBhbiBpbmNvbXBsZXRlXG4gICAgICAgIC8vIHN0YWNrIHRyYWNlXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGxhc3RFeGNlcHRpb24gPT09IGV4KSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc0xhc3RFeGNlcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgc3RhY2suaW5jb21wbGV0ZSA/IDIwMDAgOiAwKTtcblxuICAgICAgICBpZiAocmV0aHJvdyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IGV4OyAvLyByZS10aHJvdyB0byBwcm9wYWdhdGUgdG8gdGhlIHRvcCBsZXZlbCAoYW5kIGNhdXNlIHdpbmRvdy5vbmVycm9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVwb3J0LnN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICByZXBvcnQudW5zdWJzY3JpYmUgPSB1bnN1YnNjcmliZTtcbiAgICByZXBvcnQudW5pbnN0YWxsID0gdW5zdWJzY3JpYmVBbGw7XG4gICAgcmV0dXJuIHJlcG9ydDtcbn0oKTtcblxuLyoqXG4gKiBUcmFjZUtpdC5jb21wdXRlU3RhY2tUcmFjZTogY3Jvc3MtYnJvd3NlciBzdGFjayB0cmFjZXMgaW4gSmF2YVNjcmlwdFxuICpcbiAqIFN5bnRheDpcbiAqICAgcyA9IFRyYWNlS2l0LmNvbXB1dGVTdGFja1RyYWNlKGV4Y2VwdGlvbikgLy8gY29uc2lkZXIgdXNpbmcgVHJhY2VLaXQucmVwb3J0IGluc3RlYWQgKHNlZSBiZWxvdylcbiAqIFJldHVybnM6XG4gKiAgIHMubmFtZSAgICAgICAgICAgICAgLSBleGNlcHRpb24gbmFtZVxuICogICBzLm1lc3NhZ2UgICAgICAgICAgIC0gZXhjZXB0aW9uIG1lc3NhZ2VcbiAqICAgcy5zdGFja1tpXS51cmwgICAgICAtIEphdmFTY3JpcHQgb3IgSFRNTCBmaWxlIFVSTFxuICogICBzLnN0YWNrW2ldLmZ1bmMgICAgIC0gZnVuY3Rpb24gbmFtZSwgb3IgZW1wdHkgZm9yIGFub255bW91cyBmdW5jdGlvbnMgKGlmIGd1ZXNzaW5nIGRpZCBub3Qgd29yaylcbiAqICAgcy5zdGFja1tpXS5hcmdzICAgICAtIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLCBpZiBrbm93blxuICogICBzLnN0YWNrW2ldLmxpbmUgICAgIC0gbGluZSBudW1iZXIsIGlmIGtub3duXG4gKiAgIHMuc3RhY2tbaV0uY29sdW1uICAgLSBjb2x1bW4gbnVtYmVyLCBpZiBrbm93blxuICpcbiAqIFN1cHBvcnRzOlxuICogICAtIEZpcmVmb3g6ICBmdWxsIHN0YWNrIHRyYWNlIHdpdGggbGluZSBudW1iZXJzIGFuZCB1bnJlbGlhYmxlIGNvbHVtblxuICogICAgICAgICAgICAgICBudW1iZXIgb24gdG9wIGZyYW1lXG4gKiAgIC0gT3BlcmEgMTA6IGZ1bGwgc3RhY2sgdHJhY2Ugd2l0aCBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyc1xuICogICAtIE9wZXJhIDktOiBmdWxsIHN0YWNrIHRyYWNlIHdpdGggbGluZSBudW1iZXJzXG4gKiAgIC0gQ2hyb21lOiAgIGZ1bGwgc3RhY2sgdHJhY2Ugd2l0aCBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyc1xuICogICAtIFNhZmFyaTogICBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyIGZvciB0aGUgdG9wbW9zdCBzdGFja3RyYWNlIGVsZW1lbnRcbiAqICAgICAgICAgICAgICAgb25seVxuICogICAtIElFOiAgICAgICBubyBsaW5lIG51bWJlcnMgd2hhdHNvZXZlclxuICpcbiAqIFRyaWVzIHRvIGd1ZXNzIG5hbWVzIG9mIGFub255bW91cyBmdW5jdGlvbnMgYnkgbG9va2luZyBmb3IgYXNzaWdubWVudHNcbiAqIGluIHRoZSBzb3VyY2UgY29kZS4gSW4gSUUgYW5kIFNhZmFyaSwgd2UgaGF2ZSB0byBndWVzcyBzb3VyY2UgZmlsZSBuYW1lc1xuICogYnkgc2VhcmNoaW5nIGZvciBmdW5jdGlvbiBib2RpZXMgaW5zaWRlIGFsbCBwYWdlIHNjcmlwdHMuIFRoaXMgd2lsbCBub3RcbiAqIHdvcmsgZm9yIHNjcmlwdHMgdGhhdCBhcmUgbG9hZGVkIGNyb3NzLWRvbWFpbi5cbiAqIEhlcmUgYmUgZHJhZ29uczogc29tZSBmdW5jdGlvbiBuYW1lcyBtYXkgYmUgZ3Vlc3NlZCBpbmNvcnJlY3RseSwgYW5kXG4gKiBkdXBsaWNhdGUgZnVuY3Rpb25zIG1heSBiZSBtaXNtYXRjaGVkLlxuICpcbiAqIFRyYWNlS2l0LmNvbXB1dGVTdGFja1RyYWNlIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIHRyYWNpbmcgcHVycG9zZXMuXG4gKiBMb2dnaW5nIG9mIHVuaGFuZGxlZCBleGNlcHRpb25zIHNob3VsZCBiZSBkb25lIHdpdGggVHJhY2VLaXQucmVwb3J0LFxuICogd2hpY2ggYnVpbGRzIG9uIHRvcCBvZiBUcmFjZUtpdC5jb21wdXRlU3RhY2tUcmFjZSBhbmQgcHJvdmlkZXMgYmV0dGVyXG4gKiBJRSBzdXBwb3J0IGJ5IHV0aWxpemluZyB0aGUgd2luZG93Lm9uZXJyb3IgZXZlbnQgdG8gcmV0cmlldmUgaW5mb3JtYXRpb25cbiAqIGFib3V0IHRoZSB0b3Agb2YgdGhlIHN0YWNrLlxuICpcbiAqIE5vdGU6IEluIElFIGFuZCBTYWZhcmksIG5vIHN0YWNrIHRyYWNlIGlzIHJlY29yZGVkIG9uIHRoZSBFcnJvciBvYmplY3QsXG4gKiBzbyBjb21wdXRlU3RhY2tUcmFjZSBpbnN0ZWFkIHdhbGtzIGl0cyAqb3duKiBjaGFpbiBvZiBjYWxsZXJzLlxuICogVGhpcyBtZWFucyB0aGF0OlxuICogICogaW4gU2FmYXJpLCBzb21lIG1ldGhvZHMgbWF5IGJlIG1pc3NpbmcgZnJvbSB0aGUgc3RhY2sgdHJhY2U7XG4gKiAgKiBpbiBJRSwgdGhlIHRvcG1vc3QgZnVuY3Rpb24gaW4gdGhlIHN0YWNrIHRyYWNlIHdpbGwgYWx3YXlzIGJlIHRoZVxuICogICAgY2FsbGVyIG9mIGNvbXB1dGVTdGFja1RyYWNlLlxuICpcbiAqIFRoaXMgaXMgb2theSBmb3IgdHJhY2luZyAoYmVjYXVzZSB5b3UgYXJlIGxpa2VseSB0byBiZSBjYWxsaW5nXG4gKiBjb21wdXRlU3RhY2tUcmFjZSBmcm9tIHRoZSBmdW5jdGlvbiB5b3Ugd2FudCB0byBiZSB0aGUgdG9wbW9zdCBlbGVtZW50XG4gKiBvZiB0aGUgc3RhY2sgdHJhY2UgYW55d2F5KSwgYnV0IG5vdCBva2F5IGZvciBsb2dnaW5nIHVuaGFuZGxlZFxuICogZXhjZXB0aW9ucyAoYmVjYXVzZSB5b3VyIGNhdGNoIGJsb2NrIHdpbGwgbGlrZWx5IGJlIGZhciBhd2F5IGZyb20gdGhlXG4gKiBpbm5lciBmdW5jdGlvbiB0aGF0IGFjdHVhbGx5IGNhdXNlZCB0aGUgZXhjZXB0aW9uKS5cbiAqXG4gKi9cblRyYWNlS2l0LmNvbXB1dGVTdGFja1RyYWNlID0gZnVuY3Rpb24gY29tcHV0ZVN0YWNrVHJhY2VXcmFwcGVyKCkge1xuICAgIC8qKlxuICAgICAqIEVzY2FwZXMgc3BlY2lhbCBjaGFyYWN0ZXJzLCBleGNlcHQgZm9yIHdoaXRlc3BhY2UsIGluIGEgc3RyaW5nIHRvIGJlXG4gICAgICogdXNlZCBpbnNpZGUgYSByZWd1bGFyIGV4cHJlc3Npb24gYXMgYSBzdHJpbmcgbGl0ZXJhbC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgc3RyaW5nLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGVzY2FwZWQgc3RyaW5nIGxpdGVyYWwuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNdL2csICdcXFxcJCYnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFc2NhcGVzIHNwZWNpYWwgY2hhcmFjdGVycyBpbiBhIHN0cmluZyB0byBiZSB1c2VkIGluc2lkZSBhIHJlZ3VsYXJcbiAgICAgKiBleHByZXNzaW9uIGFzIGEgc3RyaW5nIGxpdGVyYWwuIEFsc28gZW5zdXJlcyB0aGF0IEhUTUwgZW50aXRpZXMgd2lsbFxuICAgICAqIGJlIG1hdGNoZWQgdGhlIHNhbWUgYXMgdGhlaXIgbGl0ZXJhbCBmcmllbmRzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBib2R5IFRoZSBzdHJpbmcuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgZXNjYXBlZCBzdHJpbmcuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZXNjYXBlQ29kZUFzUmVnRXhwRm9yTWF0Y2hpbmdJbnNpZGVIVE1MKGJvZHkpIHtcbiAgICAgICAgcmV0dXJuIGVzY2FwZVJlZ0V4cChib2R5KS5yZXBsYWNlKCc8JywgJyg/Ojx8Jmx0OyknKS5yZXBsYWNlKCc+JywgJyg/Oj58Jmd0OyknKS5yZXBsYWNlKCcmJywgJyg/OiZ8JmFtcDspJykucmVwbGFjZSgnXCInLCAnKD86XCJ8JnF1b3Q7KScpLnJlcGxhY2UoL1xccysvZywgJ1xcXFxzKycpO1xuICAgIH1cblxuICAgIC8vIENvbnRlbnRzIG9mIEV4Y2VwdGlvbiBpbiB2YXJpb3VzIGJyb3dzZXJzLlxuICAgIC8vXG4gICAgLy8gU0FGQVJJOlxuICAgIC8vIGV4Lm1lc3NhZ2UgPSBDYW4ndCBmaW5kIHZhcmlhYmxlOiBxcVxuICAgIC8vIGV4LmxpbmUgPSA1OVxuICAgIC8vIGV4LnNvdXJjZUlkID0gNTgwMjM4MTkyXG4gICAgLy8gZXguc291cmNlVVJMID0gaHR0cDovLy4uLlxuICAgIC8vIGV4LmV4cHJlc3Npb25CZWdpbk9mZnNldCA9IDk2XG4gICAgLy8gZXguZXhwcmVzc2lvbkNhcmV0T2Zmc2V0ID0gOThcbiAgICAvLyBleC5leHByZXNzaW9uRW5kT2Zmc2V0ID0gOThcbiAgICAvLyBleC5uYW1lID0gUmVmZXJlbmNlRXJyb3JcbiAgICAvL1xuICAgIC8vIEZJUkVGT1g6XG4gICAgLy8gZXgubWVzc2FnZSA9IHFxIGlzIG5vdCBkZWZpbmVkXG4gICAgLy8gZXguZmlsZU5hbWUgPSBodHRwOi8vLi4uXG4gICAgLy8gZXgubGluZU51bWJlciA9IDU5XG4gICAgLy8gZXguY29sdW1uTnVtYmVyID0gNjlcbiAgICAvLyBleC5zdGFjayA9IC4uLnN0YWNrIHRyYWNlLi4uIChzZWUgdGhlIGV4YW1wbGUgYmVsb3cpXG4gICAgLy8gZXgubmFtZSA9IFJlZmVyZW5jZUVycm9yXG4gICAgLy9cbiAgICAvLyBDSFJPTUU6XG4gICAgLy8gZXgubWVzc2FnZSA9IHFxIGlzIG5vdCBkZWZpbmVkXG4gICAgLy8gZXgubmFtZSA9IFJlZmVyZW5jZUVycm9yXG4gICAgLy8gZXgudHlwZSA9IG5vdF9kZWZpbmVkXG4gICAgLy8gZXguYXJndW1lbnRzID0gWydhYSddXG4gICAgLy8gZXguc3RhY2sgPSAuLi5zdGFjayB0cmFjZS4uLlxuICAgIC8vXG4gICAgLy8gSU5URVJORVQgRVhQTE9SRVI6XG4gICAgLy8gZXgubWVzc2FnZSA9IC4uLlxuICAgIC8vIGV4Lm5hbWUgPSBSZWZlcmVuY2VFcnJvclxuICAgIC8vXG4gICAgLy8gT1BFUkE6XG4gICAgLy8gZXgubWVzc2FnZSA9IC4uLm1lc3NhZ2UuLi4gKHNlZSB0aGUgZXhhbXBsZSBiZWxvdylcbiAgICAvLyBleC5uYW1lID0gUmVmZXJlbmNlRXJyb3JcbiAgICAvLyBleC5vcGVyYSNzb3VyY2Vsb2MgPSAxMSAgKHByZXR0eSBtdWNoIHVzZWxlc3MsIGR1cGxpY2F0ZXMgdGhlIGluZm8gaW4gZXgubWVzc2FnZSlcbiAgICAvLyBleC5zdGFja3RyYWNlID0gbi9hOyBzZWUgJ29wZXJhOmNvbmZpZyNVc2VyUHJlZnN8RXhjZXB0aW9ucyBIYXZlIFN0YWNrdHJhY2UnXG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyBzdGFjayB0cmFjZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBzdGFjayBwcm9wZXJ0eS5cbiAgICAgKiBDaHJvbWUgYW5kIEdlY2tvIHVzZSB0aGlzIHByb3BlcnR5LlxuICAgICAqIEBwYXJhbSB7RXJyb3J9IGV4XG4gICAgICogQHJldHVybiB7P09iamVjdC48c3RyaW5nLCAqPn0gU3RhY2sgdHJhY2UgaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZnVuY3Rpb24gY29tcHV0ZVN0YWNrVHJhY2VGcm9tU3RhY2tQcm9wKGV4KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZXguc3RhY2sgPT09ICd1bmRlZmluZWQnIHx8ICFleC5zdGFjaykgcmV0dXJuO1xuXG4gICAgICAgIHZhciBjaHJvbWUgPSAvXlxccyphdCAoLio/KSA/XFwoKCg/OmZpbGV8aHR0cHM/fGJsb2J8Y2hyb21lLWV4dGVuc2lvbnxuYXRpdmV8ZXZhbHw8YW5vbnltb3VzPikuKj8pKD86OihcXGQrKSk/KD86OihcXGQrKSk/XFwpP1xccyokL2ksXG4gICAgICAgICAgICBnZWNrbyA9IC9eXFxzKiguKj8pKD86XFwoKC4qPylcXCkpPyg/Ol58QCkoKD86ZmlsZXxodHRwcz98YmxvYnxjaHJvbWV8cmVzb3VyY2V8XFxbbmF0aXZlKS4qPykoPzo6KFxcZCspKT8oPzo6KFxcZCspKT9cXHMqJC9pLFxuICAgICAgICAgICAgd2luanMgPSAvXlxccyphdCAoPzooKD86XFxbb2JqZWN0IG9iamVjdFxcXSk/LispICk/XFwoPygoPzpmaWxlfG1zLWFwcHh8aHR0cHM/fGJsb2IpOi4qPyk6KFxcZCspKD86OihcXGQrKSk/XFwpP1xccyokL2ksXG4gICAgICAgICAgICBsaW5lcyA9IGV4LnN0YWNrLnNwbGl0KCdcXG4nKSxcbiAgICAgICAgICAgIHN0YWNrID0gW10sXG4gICAgICAgICAgICBwYXJ0cyxcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICByZWZlcmVuY2UgPSAvXiguKikgaXMgdW5kZWZpbmVkJC8uZXhlYyhleC5tZXNzYWdlKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGxpbmVzLmxlbmd0aDsgaSA8IGo7ICsraSkge1xuICAgICAgICAgICAgaWYgKHBhcnRzID0gY2hyb21lLmV4ZWMobGluZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzTmF0aXZlID0gcGFydHNbMl0gJiYgcGFydHNbMl0uaW5kZXhPZignbmF0aXZlJykgIT09IC0xO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICd1cmwnOiAhaXNOYXRpdmUgPyBwYXJ0c1syXSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICdmdW5jJzogcGFydHNbMV0gfHwgVU5LTk9XTl9GVU5DVElPTixcbiAgICAgICAgICAgICAgICAgICAgJ2FyZ3MnOiBpc05hdGl2ZSA/IFtwYXJ0c1syXV0gOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUnOiBwYXJ0c1szXSA/ICtwYXJ0c1szXSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICdjb2x1bW4nOiBwYXJ0c1s0XSA/ICtwYXJ0c1s0XSA6IG51bGxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0cyA9IHdpbmpzLmV4ZWMobGluZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3VybCc6IHBhcnRzWzJdLFxuICAgICAgICAgICAgICAgICAgICAnZnVuYyc6IHBhcnRzWzFdIHx8IFVOS05PV05fRlVOQ1RJT04sXG4gICAgICAgICAgICAgICAgICAgICdhcmdzJzogW10sXG4gICAgICAgICAgICAgICAgICAgICdsaW5lJzogK3BhcnRzWzNdLFxuICAgICAgICAgICAgICAgICAgICAnY29sdW1uJzogcGFydHNbNF0gPyArcGFydHNbNF0gOiBudWxsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydHMgPSBnZWNrby5leGVjKGxpbmVzW2ldKSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICd1cmwnOiBwYXJ0c1szXSxcbiAgICAgICAgICAgICAgICAgICAgJ2Z1bmMnOiBwYXJ0c1sxXSB8fCBVTktOT1dOX0ZVTkNUSU9OLFxuICAgICAgICAgICAgICAgICAgICAnYXJncyc6IHBhcnRzWzJdID8gcGFydHNbMl0uc3BsaXQoJywnKSA6IFtdLFxuICAgICAgICAgICAgICAgICAgICAnbGluZSc6IHBhcnRzWzRdID8gK3BhcnRzWzRdIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgJ2NvbHVtbic6IHBhcnRzWzVdID8gK3BhcnRzWzVdIDogbnVsbFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQuZnVuYyAmJiBlbGVtZW50LmxpbmUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmZ1bmMgPSBVTktOT1dOX0ZVTkNUSU9OO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGFjay5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdGFja1swXS5jb2x1bW4gJiYgdHlwZW9mIGV4LmNvbHVtbk51bWJlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIEZpcmVGb3ggdXNlcyB0aGlzIGF3ZXNvbWUgY29sdW1uTnVtYmVyIHByb3BlcnR5IGZvciBpdHMgdG9wIGZyYW1lXG4gICAgICAgICAgICAvLyBBbHNvIG5vdGUsIEZpcmVmb3gncyBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQgYW5kIGV2ZXJ5dGhpbmcgZWxzZSBleHBlY3RzIDEtYmFzZWQsXG4gICAgICAgICAgICAvLyBzbyBhZGRpbmcgMVxuICAgICAgICAgICAgc3RhY2tbMF0uY29sdW1uID0gZXguY29sdW1uTnVtYmVyICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnbmFtZSc6IGV4Lm5hbWUsXG4gICAgICAgICAgICAnbWVzc2FnZSc6IGV4Lm1lc3NhZ2UsXG4gICAgICAgICAgICAndXJsJzogZ2V0TG9jYXRpb25IcmVmKCksXG4gICAgICAgICAgICAnc3RhY2snOiBzdGFja1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGZpcnN0IGZyYW1lIHRvIGluY29tcGxldGUgc3RhY2sgdHJhY2VzLlxuICAgICAqIFNhZmFyaSBhbmQgSUUgcmVxdWlyZSB0aGlzIHRvIGdldCBjb21wbGV0ZSBkYXRhIG9uIHRoZSBmaXJzdCBmcmFtZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCAqPn0gc3RhY2tJbmZvIFN0YWNrIHRyYWNlIGluZm9ybWF0aW9uIGZyb21cbiAgICAgKiBvbmUgb2YgdGhlIGNvbXB1dGUqIG1ldGhvZHMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIG9mIHRoZSBzY3JpcHQgdGhhdCBjYXVzZWQgYW4gZXJyb3IuXG4gICAgICogQHBhcmFtIHsobnVtYmVyfHN0cmluZyl9IGxpbmVObyBUaGUgbGluZSBudW1iZXIgb2YgdGhlIHNjcmlwdCB0aGF0XG4gICAgICogY2F1c2VkIGFuIGVycm9yLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgZXJyb3IgZ2VuZXJhdGVkIGJ5IHRoZSBicm93c2VyLCB3aGljaFxuICAgICAqIGhvcGVmdWxseSBjb250YWlucyB0aGUgbmFtZSBvZiB0aGUgb2JqZWN0IHRoYXQgY2F1c2VkIHRoZSBlcnJvci5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCB0aGUgc3RhY2sgaW5mb3JtYXRpb24gd2FzXG4gICAgICogYXVnbWVudGVkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGF1Z21lbnRTdGFja1RyYWNlV2l0aEluaXRpYWxFbGVtZW50KHN0YWNrSW5mbywgdXJsLCBsaW5lTm8sIG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIGluaXRpYWwgPSB7XG4gICAgICAgICAgICAndXJsJzogdXJsLFxuICAgICAgICAgICAgJ2xpbmUnOiBsaW5lTm9cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaW5pdGlhbC51cmwgJiYgaW5pdGlhbC5saW5lKSB7XG4gICAgICAgICAgICBzdGFja0luZm8uaW5jb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoIWluaXRpYWwuZnVuYykge1xuICAgICAgICAgICAgICAgIGluaXRpYWwuZnVuYyA9IFVOS05PV05fRlVOQ1RJT047XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGFja0luZm8uc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlmIChzdGFja0luZm8uc3RhY2tbMF0udXJsID09PSBpbml0aWFsLnVybCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tJbmZvLnN0YWNrWzBdLmxpbmUgPT09IGluaXRpYWwubGluZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBhbHJlYWR5IGluIHN0YWNrIHRyYWNlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN0YWNrSW5mby5zdGFja1swXS5saW5lICYmIHN0YWNrSW5mby5zdGFja1swXS5mdW5jID09PSBpbml0aWFsLmZ1bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrSW5mby5zdGFja1swXS5saW5lID0gaW5pdGlhbC5saW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGFja0luZm8uc3RhY2sudW5zaGlmdChpbml0aWFsKTtcbiAgICAgICAgICAgIHN0YWNrSW5mby5wYXJ0aWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhY2tJbmZvLmluY29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHN0YWNrIHRyYWNlIGluZm9ybWF0aW9uIGJ5IHdhbGtpbmcgdGhlIGFyZ3VtZW50cy5jYWxsZXJcbiAgICAgKiBjaGFpbiBhdCB0aGUgdGltZSB0aGUgZXhjZXB0aW9uIG9jY3VycmVkLiBUaGlzIHdpbGwgY2F1c2UgZWFybGllclxuICAgICAqIGZyYW1lcyB0byBiZSBtaXNzZWQgYnV0IGlzIHRoZSBvbmx5IHdheSB0byBnZXQgYW55IHN0YWNrIHRyYWNlIGluXG4gICAgICogU2FmYXJpIGFuZCBJRS4gVGhlIHRvcCBmcmFtZSBpcyByZXN0b3JlZCBieVxuICAgICAqIHtAbGluayBhdWdtZW50U3RhY2tUcmFjZVdpdGhJbml0aWFsRWxlbWVudH0uXG4gICAgICogQHBhcmFtIHtFcnJvcn0gZXhcbiAgICAgKiBAcmV0dXJuIHs/T2JqZWN0LjxzdHJpbmcsICo+fSBTdGFjayB0cmFjZSBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb21wdXRlU3RhY2tUcmFjZUJ5V2Fsa2luZ0NhbGxlckNoYWluKGV4LCBkZXB0aCkge1xuICAgICAgICB2YXIgZnVuY3Rpb25OYW1lID0gL2Z1bmN0aW9uXFxzKyhbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVtfJGEtekEtWjAtOVxceEEwLVxcdUZGRkZdKik/XFxzKlxcKC9pLFxuICAgICAgICAgICAgc3RhY2sgPSBbXSxcbiAgICAgICAgICAgIGZ1bmNzID0ge30sXG4gICAgICAgICAgICByZWN1cnNpb24gPSBmYWxzZSxcbiAgICAgICAgICAgIHBhcnRzLFxuICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgIHNvdXJjZTtcblxuICAgICAgICBmb3IgKHZhciBjdXJyID0gY29tcHV0ZVN0YWNrVHJhY2VCeVdhbGtpbmdDYWxsZXJDaGFpbi5jYWxsZXI7IGN1cnIgJiYgIXJlY3Vyc2lvbjsgY3VyciA9IGN1cnIuY2FsbGVyKSB7XG4gICAgICAgICAgICBpZiAoY3VyciA9PT0gY29tcHV0ZVN0YWNrVHJhY2UgfHwgY3VyciA9PT0gVHJhY2VLaXQucmVwb3J0KSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NraXBwaW5nIGludGVybmFsIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgJ3VybCc6IG51bGwsXG4gICAgICAgICAgICAgICAgJ2Z1bmMnOiBVTktOT1dOX0ZVTkNUSU9OLFxuICAgICAgICAgICAgICAgICdsaW5lJzogbnVsbCxcbiAgICAgICAgICAgICAgICAnY29sdW1uJzogbnVsbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGN1cnIubmFtZSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uZnVuYyA9IGN1cnIubmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydHMgPSBmdW5jdGlvbk5hbWUuZXhlYyhjdXJyLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5mdW5jID0gcGFydHNbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbS5mdW5jID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZnVuYyA9IHBhcnRzLmlucHV0LnN1YnN0cmluZygwLCBwYXJ0cy5pbnB1dC5pbmRleE9mKCd7JykpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmdW5jc1snJyArIGN1cnJdKSB7XG4gICAgICAgICAgICAgICAgcmVjdXJzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZnVuY3NbJycgKyBjdXJyXSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YWNrLnB1c2goaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVwdGgpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkZXB0aCBpcyAnICsgZGVwdGgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0YWNrIGlzICcgKyBzdGFjay5sZW5ndGgpO1xuICAgICAgICAgICAgc3RhY2suc3BsaWNlKDAsIGRlcHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgICAgICAnbmFtZSc6IGV4Lm5hbWUsXG4gICAgICAgICAgICAnbWVzc2FnZSc6IGV4Lm1lc3NhZ2UsXG4gICAgICAgICAgICAndXJsJzogZ2V0TG9jYXRpb25IcmVmKCksXG4gICAgICAgICAgICAnc3RhY2snOiBzdGFja1xuICAgICAgICB9O1xuICAgICAgICBhdWdtZW50U3RhY2tUcmFjZVdpdGhJbml0aWFsRWxlbWVudChyZXN1bHQsIGV4LnNvdXJjZVVSTCB8fCBleC5maWxlTmFtZSwgZXgubGluZSB8fCBleC5saW5lTnVtYmVyLCBleC5tZXNzYWdlIHx8IGV4LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyBhIHN0YWNrIHRyYWNlIGZvciBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHtFcnJvcn0gZXhcbiAgICAgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKT19IGRlcHRoXG4gICAgICovXG4gICAgZnVuY3Rpb24gY29tcHV0ZVN0YWNrVHJhY2UoZXgsIGRlcHRoKSB7XG4gICAgICAgIHZhciBzdGFjayA9IG51bGw7XG4gICAgICAgIGRlcHRoID0gZGVwdGggPT0gbnVsbCA/IDAgOiArZGVwdGg7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0YWNrID0gY29tcHV0ZVN0YWNrVHJhY2VGcm9tU3RhY2tQcm9wKGV4KTtcbiAgICAgICAgICAgIGlmIChzdGFjaykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKFRyYWNlS2l0LmRlYnVnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdGFjayA9IGNvbXB1dGVTdGFja1RyYWNlQnlXYWxraW5nQ2FsbGVyQ2hhaW4oZXgsIGRlcHRoICsgMSk7XG4gICAgICAgICAgICBpZiAoc3RhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChUcmFjZUtpdC5kZWJ1Zykge1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ25hbWUnOiBleC5uYW1lLFxuICAgICAgICAgICAgJ21lc3NhZ2UnOiBleC5tZXNzYWdlLFxuICAgICAgICAgICAgJ3VybCc6IGdldExvY2F0aW9uSHJlZigpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcHV0ZVN0YWNrVHJhY2UuYXVnbWVudFN0YWNrVHJhY2VXaXRoSW5pdGlhbEVsZW1lbnQgPSBhdWdtZW50U3RhY2tUcmFjZVdpdGhJbml0aWFsRWxlbWVudDtcbiAgICBjb21wdXRlU3RhY2tUcmFjZS5jb21wdXRlU3RhY2tUcmFjZUZyb21TdGFja1Byb3AgPSBjb21wdXRlU3RhY2tUcmFjZUZyb21TdGFja1Byb3A7XG5cbiAgICByZXR1cm4gY29tcHV0ZVN0YWNrVHJhY2U7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhY2VLaXQ7XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanNcIikpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LXV0aWxzL3NyYy9lbmhhbmNlRnVuYy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LXV0aWxzL3NyYy9lbmhhbmNlRnVuYy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZW5oYW5jZUZ1bmM7XG4vKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246IFtcImVycm9yXCIsIHsgXCJwcm9wc1wiOiBmYWxzZSB9XSAqL1xuXG5mdW5jdGlvbiBlbmhhbmNlRnVuYyhvYmosIG1ldGhvZCwgaGFuZGxlcikge1xuICB2YXIgb3JpZ2luYWwgPSBvYmpbbWV0aG9kXTtcblxuICBmdW5jdGlvbiBzaGltKCkge1xuICAgIHZhciByZXMgPSB2b2lkIDA7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAob3JpZ2luYWwpIHtcbiAgICAgIHJlcyA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cblxuICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIG9ialttZXRob2RdID0gc2hpbTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIG9ialttZXRob2RdID0gb3JpZ2luYWw7XG4gIH07XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcGFja2FnZXMvQGFwcGh1Yjpsb2dyb2NrZXQtdXRpbHMvc3JjL21hcFZhbHVlcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9wYWNrYWdlcy9AYXBwaHViOmxvZ3JvY2tldC11dGlscy9zcmMvbWFwVmFsdWVzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbWFwVmFsdWVzO1xuZnVuY3Rpb24gbWFwVmFsdWVzKG9iaiwgZikge1xuICBpZiAob2JqID09IG51bGwpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICB2YXIgcmVzID0ge307XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmVzW2tleV0gPSBmKG9ialtrZXldKTtcbiAgfSk7XG4gIHJldHVybiByZXM7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcGFja2FnZXMvQGFwcGh1Yjpub3cvc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vcGFja2FnZXMvQGFwcGh1Yjpub3cvc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTp0cnVlfSk7dmFyIGRhdGVOb3c9RGF0ZS5ub3cuYmluZChEYXRlKTt2YXIgbG9hZFRpbWU9ZGF0ZU5vdygpO2V4cG9ydHMuZGVmYXVsdD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJyYmcGVyZm9ybWFuY2Uubm93P3BlcmZvcm1hbmNlLm5vdy5iaW5kKHBlcmZvcm1hbmNlKTpmdW5jdGlvbigpe3JldHVybiBkYXRlTm93KCktbG9hZFRpbWU7fTttb2R1bGUuZXhwb3J0cz1leHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcGFja2FnZXMvbG9ncm9ja2V0L3NyYy9Mb2dSb2NrZXQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL2xvZ3JvY2tldC9zcmMvTG9nUm9ja2V0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTUFYX1FVRVVFX1NJWkUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfbG9ncm9ja2V0TmV0d29yayA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBhcHBodWIvbG9ncm9ja2V0LW5ldHdvcmsgKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LW5ldHdvcmsvc3JjL2luZGV4LmpzXCIpO1xuXG52YXIgX2xvZ3JvY2tldE5ldHdvcmsyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9ncm9ja2V0TmV0d29yayk7XG5cbnZhciBfbG9ncm9ja2V0RXhjZXB0aW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBhcHBodWIvbG9ncm9ja2V0LWV4Y2VwdGlvbnMgKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LWV4Y2VwdGlvbnMvc3JjL2luZGV4LmpzXCIpO1xuXG52YXIgX2xvZ3JvY2tldENvbnNvbGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYXBwaHViL2xvZ3JvY2tldC1jb25zb2xlICovIFwiLi9wYWNrYWdlcy9AYXBwaHViOmxvZ3JvY2tldC1jb25zb2xlL3NyYy9pbmRleC5qc1wiKTtcblxudmFyIF9sb2dyb2NrZXRDb25zb2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZ3JvY2tldENvbnNvbGUpO1xuXG52YXIgX2xvZ3JvY2tldFJlZHV4ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGFwcGh1Yi9sb2dyb2NrZXQtcmVkdXggKi8gXCIuL3BhY2thZ2VzL0BhcHBodWI6bG9ncm9ja2V0LXJlZHV4L3NyYy9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgTUFYX1FVRVVFX1NJWkUgPSBleHBvcnRzLk1BWF9RVUVVRV9TSVpFID0gMTAwMDtcblxudmFyIGNvbnNpZGVySW5nZXN0U2VydmVyT3B0aW9uID0gZnVuY3Rpb24gY29uc2lkZXJJbmdlc3RTZXJ2ZXJPcHRpb24oKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgaW5nZXN0U2VydmVyID0gX3JlZi5pbmdlc3RTZXJ2ZXIsXG4gICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnaW5nZXN0U2VydmVyJ10pO1xuXG4gIGlmIChpbmdlc3RTZXJ2ZXIpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgc2VydmVyVVJMOiBpbmdlc3RTZXJ2ZXIgKyAnL2knLFxuICAgICAgc3RhdHNVUkw6IGluZ2VzdFNlcnZlciArICcvcydcbiAgICB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufTtcblxudmFyIExvZ1JvY2tldCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTG9nUm9ja2V0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9nUm9ja2V0KTtcblxuICAgIHRoaXMuX2J1ZmZlciA9IFtdO1xuXG4gICAgLy8gVE9ETzogdGVzdHMgZm9yIHRoZXNlIGV4cG9zZWQgbWV0aG9kcy5cbiAgICBbJ2xvZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InLCAnZGVidWcnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIF90aGlzW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmFkZEV2ZW50KCdsci5jb3JlLkxvZ0V2ZW50JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBjb25zb2xlT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICBpZiAobWV0aG9kID09PSAnZXJyb3InICYmIGNvbnNvbGVPcHRpb25zLnNob3VsZEFnZ3JlZ2F0ZUNvbnNvbGVFcnJvcnMpIHtcbiAgICAgICAgICAgIF9sb2dyb2NrZXRFeGNlcHRpb25zLkNhcHR1cmUuY2FwdHVyZU1lc3NhZ2UoX3RoaXMsIGFyZ3NbMF0sIHt9LCB0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9nTGV2ZWw6IG1ldGhvZC50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICAgIH07XG4gICAgICAgIH0sIHsgc2hvdWxkQ2FwdHVyZVN0YWNrVHJhY2U6IHRydWUgfSk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9pbnN0YWxsZWQgPSBbXTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMb2dSb2NrZXQsIFt7XG4gICAga2V5OiAnYWRkRXZlbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudCh0eXBlLCBnZXRNZXNzYWdlKSB7XG4gICAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMuX3J1bihmdW5jdGlvbiAobG9nZ2VyKSB7XG4gICAgICAgIGxvZ2dlci5hZGRFdmVudCh0eXBlLCBnZXRNZXNzYWdlLCBfZXh0ZW5kcyh7fSwgb3B0cywge1xuICAgICAgICAgIHRpbWVPdmVycmlkZTogdGltZVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkxvZ2dlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTG9nZ2VyKGxvZ2dlcikge1xuICAgICAgdGhpcy5fbG9nZ2VyID0gbG9nZ2VyO1xuXG4gICAgICB3aGlsZSAodGhpcy5fYnVmZmVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGYgPSB0aGlzLl9idWZmZXIuc2hpZnQoKTtcbiAgICAgICAgZih0aGlzLl9sb2dnZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19ydW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcnVuKGYpIHtcbiAgICAgIGlmICh0aGlzLl9pc0Rpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2xvZ2dlcikge1xuICAgICAgICBmKHRoaXMuX2xvZ2dlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5fYnVmZmVyLmxlbmd0aCA+PSBNQVhfUVVFVUVfU0laRSkge1xuICAgICAgICAgIHRoaXMuX2lzRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnNvbGUud2FybignTG9nUm9ja2V0OiBzY3JpcHQgZGlkIG5vdCBsb2FkLiBDaGVjayB0aGF0IHlvdSBoYXZlIGEgdmFsaWQgbmV0d29yayBjb25uZWN0aW9uLicpO1xuICAgICAgICAgIHRoaXMudW5pbnN0YWxsKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYnVmZmVyLnB1c2goZi5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpbml0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChhcHBJRCwgb3B0cykge1xuICAgICAgaWYgKCF0aGlzLl9pc0luaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMuX2luc3RhbGxlZC5wdXNoKCgwLCBfbG9ncm9ja2V0RXhjZXB0aW9ucy5yZWdpc3RlckV4Y2VwdGlvbnMpKHRoaXMpKTtcbiAgICAgICAgdGhpcy5faW5zdGFsbGVkLnB1c2goKDAsIF9sb2dyb2NrZXROZXR3b3JrMi5kZWZhdWx0KSh0aGlzKSk7XG4gICAgICAgIHRoaXMuX2luc3RhbGxlZC5wdXNoKCgwLCBfbG9ncm9ja2V0Q29uc29sZTIuZGVmYXVsdCkodGhpcykpO1xuXG4gICAgICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX3J1bihmdW5jdGlvbiAobG9nZ2VyKSB7XG4gICAgICAgICAgbG9nZ2VyLmluaXQoYXBwSUQsIGNvbnNpZGVySW5nZXN0U2VydmVyT3B0aW9uKG9wdHMpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RhcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgIHRoaXMuX3J1bihmdW5jdGlvbiAobG9nZ2VyKSB7XG4gICAgICAgIGxvZ2dlci5zdGFydCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndW5pbnN0YWxsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5pbnN0YWxsKCkge1xuICAgICAgdGhpcy5faW5zdGFsbGVkLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgcmV0dXJuIGYoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fYnVmZmVyID0gW107XG5cbiAgICAgIHRoaXMuX3J1bihmdW5jdGlvbiAobG9nZ2VyKSB7XG4gICAgICAgIGxvZ2dlci51bmluc3RhbGwoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lkZW50aWZ5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaWRlbnRpZnkoaWQsIG9wdHMpIHtcbiAgICAgIHRoaXMuX3J1bihmdW5jdGlvbiAobG9nZ2VyKSB7XG4gICAgICAgIGxvZ2dlci5pZGVudGlmeShpZCwgb3B0cyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdGFydE5ld1Nlc3Npb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydE5ld1Nlc3Npb24oKSB7XG4gICAgICB0aGlzLl9ydW4oZnVuY3Rpb24gKGxvZ2dlcikge1xuICAgICAgICBsb2dnZXIuc3RhcnROZXdTZXNzaW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0cmFjaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyYWNrKGN1c3RvbUV2ZW50TmFtZSkge1xuICAgICAgdGhpcy5fcnVuKGZ1bmN0aW9uIChsb2dnZXIpIHtcbiAgICAgICAgbG9nZ2VyLnRyYWNrKGN1c3RvbUV2ZW50TmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTZXNzaW9uVVJMJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2Vzc2lvblVSTChjYikge1xuICAgICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvZ1JvY2tldDogbXVzdCBwYXNzIGNhbGxiYWNrIHRvIGdldFNlc3Npb25VUkwoKScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9ydW4oZnVuY3Rpb24gKGxvZ2dlcikge1xuICAgICAgICBpZiAobG9nZ2VyLmdldFNlc3Npb25VUkwpIHtcbiAgICAgICAgICBsb2dnZXIuZ2V0U2Vzc2lvblVSTChjYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2IobG9nZ2VyLnJlY29yZGluZ1VSTCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZlcnNpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWZXJzaW9uKGNiKSB7XG4gICAgICB0aGlzLl9ydW4oZnVuY3Rpb24gKGxvZ2dlcikge1xuICAgICAgICBjYihsb2dnZXIudmVyc2lvbik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYXB0dXJlTWVzc2FnZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhcHR1cmVNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgX2xvZ3JvY2tldEV4Y2VwdGlvbnMuQ2FwdHVyZS5jYXB0dXJlTWVzc2FnZSh0aGlzLCBtZXNzYWdlLCBvcHRpb25zKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYXB0dXJlRXhjZXB0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FwdHVyZUV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgX2xvZ3JvY2tldEV4Y2VwdGlvbnMuQ2FwdHVyZS5jYXB0dXJlRXhjZXB0aW9uKHRoaXMsIGV4Y2VwdGlvbiwgb3B0aW9ucyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVkdXhFbmhhbmNlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlZHV4RW5oYW5jZXIoKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgIHJldHVybiAoMCwgX2xvZ3JvY2tldFJlZHV4LmNyZWF0ZUVuaGFuY2VyKSh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZWR1eE1pZGRsZXdhcmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWR1eE1pZGRsZXdhcmUoKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgIHJldHVybiAoMCwgX2xvZ3JvY2tldFJlZHV4LmNyZWF0ZU1pZGRsZXdhcmUpKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3ZlcnNpb24nLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xvZ2dlciAmJiB0aGlzLl9sb2dnZXIudmVyc2lvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXNzaW9uVVJMJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sb2dnZXIgJiYgdGhpcy5fbG9nZ2VyLnJlY29yZGluZ1VSTDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZWNvcmRpbmdVUkwnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xvZ2dlciAmJiB0aGlzLl9sb2dnZXIucmVjb3JkaW5nVVJMO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlY29yZGluZ0lEJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sb2dnZXIgJiYgdGhpcy5fbG9nZ2VyLnJlY29yZGluZ0lEO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RocmVhZElEJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sb2dnZXIgJiYgdGhpcy5fbG9nZ2VyLnRocmVhZElEO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RhYklEJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sb2dnZXIgJiYgdGhpcy5fbG9nZ2VyLnRhYklEO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzRGlzYWJsZWQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuICEhKHRoaXMuX2lzRGlzYWJsZWQgfHwgdGhpcy5fbG9nZ2VyICYmIHRoaXMuX2xvZ2dlci5faXNEaXNhYmxlZCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExvZ1JvY2tldDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTG9nUm9ja2V0O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL2xvZ3JvY2tldC9zcmMvbWFrZUxvZ1JvY2tldC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL2xvZ3JvY2tldC9zcmMvbWFrZUxvZ1JvY2tldC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbWFrZUxvZ1JvY2tldDtcblxudmFyIF9Mb2dSb2NrZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0xvZ1JvY2tldCAqLyBcIi4vcGFja2FnZXMvbG9ncm9ja2V0L3NyYy9Mb2dSb2NrZXQuanNcIik7XG5cbnZhciBfTG9nUm9ja2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xvZ1JvY2tldCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBSRUFDVF9OQVRJVkVfTk9USUNFID0gJ0xvZ1JvY2tldCBkb2VzIG5vdCB5ZXQgc3VwcG9ydCBSZWFjdCBOYXRpdmUuJztcbnZhciBtYWtlTm9vcFBvbHlmaWxsID0gZnVuY3Rpb24gbWFrZU5vb3BQb2x5ZmlsbCgpIHtcbiAgcmV0dXJuIHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge30sXG4gICAgdW5pbnN0YWxsOiBmdW5jdGlvbiB1bmluc3RhbGwoKSB7fSxcbiAgICBsb2c6IGZ1bmN0aW9uIGxvZygpIHt9LFxuICAgIGluZm86IGZ1bmN0aW9uIGluZm8oKSB7fSxcbiAgICB3YXJuOiBmdW5jdGlvbiB3YXJuKCkge30sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKCkge30sXG4gICAgZGVidWc6IGZ1bmN0aW9uIGRlYnVnKCkge30sXG4gICAgYWRkRXZlbnQ6IGZ1bmN0aW9uIGFkZEV2ZW50KCkge30sXG4gICAgaWRlbnRpZnk6IGZ1bmN0aW9uIGlkZW50aWZ5KCkge30sXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KCkge30sXG5cblxuICAgIGdldCB0aHJlYWRJRCgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgZ2V0IHJlY29yZGluZ0lEKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBnZXQgcmVjb3JkaW5nVVJMKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIHJlZHV4RW5oYW5jZXI6IGZ1bmN0aW9uIHJlZHV4RW5oYW5jZXIoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHN0b3JlLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSxcbiAgICByZWR1eE1pZGRsZXdhcmU6IGZ1bmN0aW9uIHJlZHV4TWlkZGxld2FyZSgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0sXG4gICAgdHJhY2s6IGZ1bmN0aW9uIHRyYWNrKCkge30sXG4gICAgZ2V0U2Vzc2lvblVSTDogZnVuY3Rpb24gZ2V0U2Vzc2lvblVSTCgpIHt9LFxuICAgIGdldFZlcnNpb246IGZ1bmN0aW9uIGdldFZlcnNpb24oKSB7fSxcbiAgICBzdGFydE5ld1Nlc3Npb246IGZ1bmN0aW9uIHN0YXJ0TmV3U2Vzc2lvbigpIHt9LFxuICAgIG9uTG9nZ2VyOiBmdW5jdGlvbiBvbkxvZ2dlcigpIHt9LFxuICAgIHNldENsb2NrOiBmdW5jdGlvbiBzZXRDbG9jaygpIHt9LFxuICAgIGNhcHR1cmVNZXNzYWdlOiBmdW5jdGlvbiBjYXB0dXJlTWVzc2FnZSgpIHt9LFxuICAgIGNhcHR1cmVFeGNlcHRpb246IGZ1bmN0aW9uIGNhcHR1cmVFeGNlcHRpb24oKSB7fVxuICB9O1xufTtcblxuZnVuY3Rpb24gbWFrZUxvZ1JvY2tldCgpIHtcbiAgdmFyIGdldExvZ2dlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZnVuY3Rpb24gKCkge307XG5cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFJFQUNUX05BVElWRV9OT1RJQ0UpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHdpbmRvdy5fZGlzYWJsZUxvZ1JvY2tldCkge1xuICAgICAgcmV0dXJuIG1ha2VOb29wUG9seWZpbGwoKTtcbiAgICB9XG5cbiAgICBpZiAod2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgJiYgd2luZG93LldlYWtNYXApIHtcbiAgICAgIC8vIFNhdmUgd2luZG93IGdsb2JhbHMgdGhhdCB3ZSByZWx5IG9uLlxuICAgICAgd2luZG93Ll9sck11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcjtcblxuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IF9Mb2dSb2NrZXQyLmRlZmF1bHQoKTtcbiAgICAgIGdldExvZ2dlcihpbnN0YW5jZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ha2VOb29wUG9seWZpbGwoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3BhY2thZ2VzL2xvZ3JvY2tldC9zcmMvbW9kdWxlLW5wbS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3BhY2thZ2VzL2xvZ3JvY2tldC9zcmMvbW9kdWxlLW5wbS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NldHVwID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zZXR1cCAqLyBcIi4vcGFja2FnZXMvbG9ncm9ja2V0L3NyYy9zZXR1cC5qc1wiKTtcblxudmFyIF9zZXR1cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXR1cCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpbnN0YW5jZSA9ICgwLCBfc2V0dXAyLmRlZmF1bHQpKCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGluc3RhbmNlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vcGFja2FnZXMvbG9ncm9ja2V0L3NyYy9zZXR1cC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9wYWNrYWdlcy9sb2dyb2NrZXQvc3JjL3NldHVwLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2V0dXA7XG5cbnZhciBfbWFrZUxvZ1JvY2tldCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbWFrZUxvZ1JvY2tldCAqLyBcIi4vcGFja2FnZXMvbG9ncm9ja2V0L3NyYy9tYWtlTG9nUm9ja2V0LmpzXCIpO1xuXG52YXIgX21ha2VMb2dSb2NrZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFrZUxvZ1JvY2tldCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIENETl9TRVJWRVJfTUFQID0ge1xuICAnY2RuLmxvZ3JvY2tldC5pbyc6ICdodHRwczovL3IubG9ncm9ja2V0LmlvJyxcbiAgJ2Nkbi5sci1pbmdlc3QuaW8nOiAnaHR0cHM6Ly9yLmxyLWluZ2VzdC5pbycsXG4gICdjZG4tc3RhZ2luZy5sb2dyb2NrZXQuaW8nOiAnaHR0cHM6Ly9zdGFnaW5nLWkubG9ncm9ja2V0LmlvJyxcbiAgJ2Nkbi1zdGFnaW5nLmxyLWluZ2VzdC5pbyc6ICdodHRwczovL3N0YWdpbmctaS5sci1pbmdlc3QuaW8nXG59O1xuXG5mdW5jdGlvbiBzZXR1cCgpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHZhciBlbnRlcnByaXNlU2VydmVyID0gX3JlZi5lbnRlcnByaXNlU2VydmVyLFxuICAgICAgX3JlZiRzZGtWZXJzaW9uID0gX3JlZi5zZGtWZXJzaW9uLFxuICAgICAgc2RrVmVyc2lvbiA9IF9yZWYkc2RrVmVyc2lvbiA9PT0gdW5kZWZpbmVkID8gXCIxLjAuMTRcIiA6IF9yZWYkc2RrVmVyc2lvbixcbiAgICAgIG9wdHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydlbnRlcnByaXNlU2VydmVyJywgJ3Nka1ZlcnNpb24nXSk7XG5cbiAgdmFyIHNjcmlwdE9yaWdpbiA9IHVuZGVmaW5lZCA9PT0gJ3N0YWdpbmcnID8gJ2h0dHBzOi8vY2RuLXN0YWdpbmcubG9ncm9ja2V0LmlvJyA6ICdodHRwczovL2Nkbi5sb2dyb2NrZXQuaW8nO1xuICB2YXIgc2NyaXB0SW5nZXN0ID0gdm9pZCAwO1xuXG4gIGlmIChzZGtWZXJzaW9uID09PSAnc2NyaXB0Jykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgc2NyaXB0VGFnID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdDtcbiAgICAgIHZhciBtYXRjaGVzID0gc2NyaXB0VGFnLnNyYy5tYXRjaCgvXihodHRwcz86XFwvXFwvKFteXFxcXF0rKSlcXC8uKyQvKTtcbiAgICAgIHZhciBzY3JpcHRIb3N0bmFtZSA9IG1hdGNoZXMgJiYgbWF0Y2hlc1syXTtcblxuICAgICAgaWYgKHNjcmlwdEhvc3RuYW1lICYmIENETl9TRVJWRVJfTUFQW3NjcmlwdEhvc3RuYW1lXSkge1xuICAgICAgICBzY3JpcHRPcmlnaW4gPSBtYXRjaGVzICYmIG1hdGNoZXNbMV07XG4gICAgICAgIHNjcmlwdEluZ2VzdCA9IENETl9TRVJWRVJfTUFQW3NjcmlwdEhvc3RuYW1lXTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAvKiBuby1vcCAqL1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBOUE1cbiAgICBzY3JpcHRPcmlnaW4gPSB1bmRlZmluZWQgPT09ICdzdGFnaW5nJyA/ICdodHRwczovL2Nkbi1zdGFnaW5nLmxyLWluZ2VzdC5pbycgOiAnaHR0cHM6Ly9jZG4ubHItaW5nZXN0LmlvJztcbiAgICBzY3JpcHRJbmdlc3QgPSB1bmRlZmluZWQgPT09ICdzdGFnaW5nJyA/ICdodHRwczovL3N0YWdpbmctaS5sci1pbmdlc3QuaW8nIDogJ2h0dHBzOi8vci5sci1pbmdlc3QuaW8nO1xuICB9XG5cbiAgdmFyIHNka1NlcnZlciA9IG9wdHMuc2RrU2VydmVyIHx8IGVudGVycHJpc2VTZXJ2ZXI7XG4gIHZhciBpbmdlc3RTZXJ2ZXIgPSBvcHRzLmluZ2VzdFNlcnZlciB8fCBlbnRlcnByaXNlU2VydmVyIHx8IHNjcmlwdEluZ2VzdDtcblxuICB2YXIgaW5zdGFuY2UgPSAoMCwgX21ha2VMb2dSb2NrZXQyLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICBpZiAoaW5nZXN0U2VydmVyKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5fX1NES0NPTkZJR19fID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3aW5kb3cuX19TREtDT05GSUdfXyA9IHt9O1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuX19TREtDT05GSUdfXy5zZXJ2ZXJVUkwgPSBpbmdlc3RTZXJ2ZXIgKyAnL2knO1xuICAgICAgd2luZG93Ll9fU0RLQ09ORklHX18uc3RhdHNVUkwgPSBpbmdlc3RTZXJ2ZXIgKyAnL3MnO1xuICAgIH1cblxuICAgIGlmIChzZGtTZXJ2ZXIpIHtcbiAgICAgIHNjcmlwdC5zcmMgPSBzZGtTZXJ2ZXIgKyAnL2xvZ2dlci5taW4uanMnO1xuICAgIH0gZWxzZSBpZiAod2luZG93Ll9fU0RLQ09ORklHX18gJiYgd2luZG93Ll9fU0RLQ09ORklHX18ubG9nZ2VyVVJMKSB7XG4gICAgICBzY3JpcHQuc3JjID0gd2luZG93Ll9fU0RLQ09ORklHX18ubG9nZ2VyVVJMO1xuICAgIH0gZWxzZSBpZiAod2luZG93Ll9sckFzeW5jU2NyaXB0KSB7XG4gICAgICBzY3JpcHQuc3JjID0gd2luZG93Ll9sckFzeW5jU2NyaXB0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JpcHQuc3JjID0gc2NyaXB0T3JpZ2luICsgJy9sb2dnZXItMS5taW4uanMnO1xuICAgIH1cblxuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBCcmF2ZSBicm93c2VyOiBBZHZlcnRpc2VzIGl0cyB1c2VyLWFnZW50IGFzIENocm9tZSAjIy4jIy4uLiB0aGVuXG4gICAgICAvLyBsb2FkcyBsb2dnZXIubWluLmpzLCBidXQgYmxvY2tzIHRoZSBleGVjdXRpb24gb2YgdGhlIHNjcmlwdFxuICAgICAgLy8gY2F1c2luZyBfTFJsb2dnZXIgdG8gYmUgdW5kZWZpbmVkLiAgTGV0J3MgbWFrZSBzdXJlIGl0cyB0aGVyZSBmaXJzdC5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Ll9MUkxvZ2dlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpbnN0YW5jZS5vbkxvZ2dlcihuZXcgd2luZG93Ll9MUkxvZ2dlcih7XG4gICAgICAgICAgc2RrVmVyc2lvbjogc2RrVmVyc2lvblxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0xvZ1JvY2tldDogc2NyaXB0IGV4ZWN1dGlvbiBoYXMgYmVlbiBibG9ja2VkIGJ5IGEgcHJvZHVjdCBvciBzZXJ2aWNlLicpO1xuICAgICAgICBpbnN0YW5jZS51bmluc3RhbGwoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS53YXJuKCdMb2dSb2NrZXQ6IHNjcmlwdCBjb3VsZCBub3QgbG9hZC4gQ2hlY2sgdGhhdCB5b3UgaGF2ZSBhIHZhbGlkIG5ldHdvcmsgY29ubmVjdGlvbi4nKTtcbiAgICAgIGluc3RhbmNlLnVuaW5zdGFsbCgpO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gMDpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogbXVsdGkgLi9wYWNrYWdlcy9sb2dyb2NrZXQvc3JjL21vZHVsZS1ucG0uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAvcm9vdC9wcm9qZWN0L3BhY2thZ2VzL2xvZ3JvY2tldC9zcmMvbW9kdWxlLW5wbS5qcyAqL1wiLi9wYWNrYWdlcy9sb2dyb2NrZXQvc3JjL21vZHVsZS1ucG0uanNcIik7XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9