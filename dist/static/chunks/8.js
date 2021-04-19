(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[8],{

/***/ "./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** @preserve
  * package: sweetalert2-react-content v3.3.1
  * file: dist/sweetalert2-react-content.umd.js
  * homepage: https://github.com/sweetalert2/sweetalert2-react-content#readme
  * license: MIT
  **/

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js")) :
  undefined;
}(this, (function (React, ReactDOM) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

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
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var mounts = [{
    key: 'title',
    getter: function getter(swal) {
      return swal.getTitle();
    }
  }, {
    key: 'html',
    getter: function getter(swal) {
      return swal.getHtmlContainer();
    }
  }, {
    key: 'confirmButtonText',
    getter: function getter(swal) {
      return swal.getConfirmButton();
    }
  }, {
    key: 'denyButtonText',
    getter: function getter(swal) {
      return swal.getDenyButton();
    }
  }, {
    key: 'cancelButtonText',
    getter: function getter(swal) {
      return swal.getCancelButton();
    }
  }, {
    key: 'footer',
    getter: function getter(swal) {
      return swal.getFooter();
    }
  }, {
    key: 'closeButtonHtml',
    getter: function getter(swal) {
      return swal.getCloseButton();
    }
  }, {
    key: 'iconHtml',
    getter: function getter(swal) {
      return swal.getIcon().querySelector('.swal2-icon-content');
    }
  }];

  var noop = function noop() {}; // eslint-disable-line @typescript-eslint/no-empty-function


  var error = function error(message) {
    return new Error("sweetalert2-react-content: ".concat(message));
  };

  function withReactContent(ParentSwal) {
    return /*#__PURE__*/function (_ParentSwal) {
      _inherits(_class, _ParentSwal);

      var _super = _createSuper(_class);

      function _class() {
        _classCallCheck(this, _class);

        return _super.apply(this, arguments);
      }

      _createClass(_class, [{
        key: "_main",
        value: function _main(params) {
          params = Object.assign({}, params);
          mounts.forEach(function (_ref) {
            var key = _ref.key,
                getter = _ref.getter;

            if ( /*#__PURE__*/React__default['default'].isValidElement(params[key])) {
              var reactElement = params[key];
              params[key] = ' ';
              var domElement;
              var openHookName = params.onOpen || !ParentSwal.isValidParameter('didOpen') ? 'onOpen' : 'didOpen'; // support legacy onOpen hook

              var superOpenHook = params[openHookName] || noop;

              params[openHookName] = function (element) {
                domElement = getter(ParentSwal);
                domElement && ReactDOM__default['default'].render(reactElement, domElement);
                superOpenHook(element);
              };

              var destroyHookName = params.onDestroy || !ParentSwal.isValidParameter('didDestroy') ? 'onDestroy' : 'didDestroy'; // support legacy onDestroy hook

              var superDestroyHook = params[destroyHookName] || noop;

              params[destroyHookName] = function (element) {
                superDestroyHook(element);

                if (domElement) {
                  ReactDOM__default['default'].unmountComponentAtNode(domElement);
                }
              };
            }
          });
          return _get(_getPrototypeOf(_class.prototype), "_main", this).call(this, params);
        }
      }, {
        key: "update",
        value: function update() {
          throw error('Swal.update() is not yet supported. See https://github.com/sweetalert2/sweetalert2-react-content/issues/73');
        }
      }], [{
        key: "argsToParams",
        value: function argsToParams(args) {
          if ( /*#__PURE__*/React__default['default'].isValidElement(args[0]) || /*#__PURE__*/React__default['default'].isValidElement(args[1])) {
            var params = {};
            ['title', 'html', 'icon'].forEach(function (name, index) {
              if (args[index] !== undefined) {
                params[name] = args[index];
              }
            });
            return params;
          } else {
            return ParentSwal.argsToParams(args);
          }
        }
      }]);

      return _class;
    }(ParentSwal);
  }

  return withReactContent;

})));
//# sourceMappingURL=sweetalert2-react-content.umd.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyLXJlYWN0LWNvbnRlbnQvZGlzdC9zd2VldGFsZXJ0Mi1yZWFjdC1jb250ZW50LnVtZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLEtBQTRELDRCQUE0QixtQkFBTyxDQUFDLDRDQUFPLEdBQUcsbUJBQU8sQ0FBQyxvREFBVztBQUMvSCxFQUFFLFNBQ21KO0FBQ3JKLENBQUMsb0NBQW9DOztBQUVyQyxzQ0FBc0MsNERBQTRELGdCQUFnQjs7QUFFbEg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxnQ0FBZ0M7OztBQUdoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUhBQWlIOztBQUVqSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdJQUFnSTs7QUFFaEk7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBLENBQUM7QUFDRCIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQHByZXNlcnZlXG4gICogcGFja2FnZTogc3dlZXRhbGVydDItcmVhY3QtY29udGVudCB2My4zLjFcbiAgKiBmaWxlOiBkaXN0L3N3ZWV0YWxlcnQyLXJlYWN0LWNvbnRlbnQudW1kLmpzXG4gICogaG9tZXBhZ2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi1yZWFjdC1jb250ZW50I3JlYWRtZVxuICAqIGxpY2Vuc2U6IE1JVFxuICAqKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ3JlYWN0JyksIHJlcXVpcmUoJ3JlYWN0LWRvbScpKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5zd2VldGFsZXJ0MlJlYWN0Q29udGVudCA9IGZhY3RvcnkoZ2xvYmFsLlJlYWN0LCBnbG9iYWwuUmVhY3RET00pKTtcbn0odGhpcywgKGZ1bmN0aW9uIChSZWFjdCwgUmVhY3RET00pIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdExlZ2FjeSAoZSkgeyByZXR1cm4gZSAmJiB0eXBlb2YgZSA9PT0gJ29iamVjdCcgJiYgJ2RlZmF1bHQnIGluIGUgPyBlIDogeyAnZGVmYXVsdCc6IGUgfTsgfVxuXG4gIHZhciBSZWFjdF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koUmVhY3QpO1xuICB2YXIgUmVhY3RET01fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KFJlYWN0RE9NKTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG4gIH1cblxuICBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICAgIH07XG4gICAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgICByZXR1cm4gbztcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICAgIHRyeSB7XG4gICAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICAgIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICAgIHJldHVybiBjYWxsO1xuICAgIH1cblxuICAgIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHtcbiAgICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICAgIHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcbiAgICAgICAgICByZXN1bHQ7XG5cbiAgICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICAgIHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG5cbiAgICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgIG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICAgIF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgICB9IGVsc2Uge1xuICAgICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcblxuICAgICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbiAgfVxuXG4gIHZhciBtb3VudHMgPSBbe1xuICAgIGtleTogJ3RpdGxlJyxcbiAgICBnZXR0ZXI6IGZ1bmN0aW9uIGdldHRlcihzd2FsKSB7XG4gICAgICByZXR1cm4gc3dhbC5nZXRUaXRsZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2h0bWwnLFxuICAgIGdldHRlcjogZnVuY3Rpb24gZ2V0dGVyKHN3YWwpIHtcbiAgICAgIHJldHVybiBzd2FsLmdldEh0bWxDb250YWluZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb25maXJtQnV0dG9uVGV4dCcsXG4gICAgZ2V0dGVyOiBmdW5jdGlvbiBnZXR0ZXIoc3dhbCkge1xuICAgICAgcmV0dXJuIHN3YWwuZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RlbnlCdXR0b25UZXh0JyxcbiAgICBnZXR0ZXI6IGZ1bmN0aW9uIGdldHRlcihzd2FsKSB7XG4gICAgICByZXR1cm4gc3dhbC5nZXREZW55QnV0dG9uKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2FuY2VsQnV0dG9uVGV4dCcsXG4gICAgZ2V0dGVyOiBmdW5jdGlvbiBnZXR0ZXIoc3dhbCkge1xuICAgICAgcmV0dXJuIHN3YWwuZ2V0Q2FuY2VsQnV0dG9uKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZm9vdGVyJyxcbiAgICBnZXR0ZXI6IGZ1bmN0aW9uIGdldHRlcihzd2FsKSB7XG4gICAgICByZXR1cm4gc3dhbC5nZXRGb290ZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbG9zZUJ1dHRvbkh0bWwnLFxuICAgIGdldHRlcjogZnVuY3Rpb24gZ2V0dGVyKHN3YWwpIHtcbiAgICAgIHJldHVybiBzd2FsLmdldENsb3NlQnV0dG9uKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaWNvbkh0bWwnLFxuICAgIGdldHRlcjogZnVuY3Rpb24gZ2V0dGVyKHN3YWwpIHtcbiAgICAgIHJldHVybiBzd2FsLmdldEljb24oKS5xdWVyeVNlbGVjdG9yKCcuc3dhbDItaWNvbi1jb250ZW50Jyk7XG4gICAgfVxuICB9XTtcblxuICB2YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cblxuXG4gIHZhciBlcnJvciA9IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFwic3dlZXRhbGVydDItcmVhY3QtY29udGVudDogXCIuY29uY2F0KG1lc3NhZ2UpKTtcbiAgfTtcblxuICBmdW5jdGlvbiB3aXRoUmVhY3RDb250ZW50KFBhcmVudFN3YWwpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyZW50U3dhbCkge1xuICAgICAgX2luaGVyaXRzKF9jbGFzcywgX1BhcmVudFN3YWwpO1xuXG4gICAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKF9jbGFzcyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9jbGFzcygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9jbGFzcyk7XG5cbiAgICAgICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICBfY3JlYXRlQ2xhc3MoX2NsYXNzLCBbe1xuICAgICAgICBrZXk6IFwiX21haW5cIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWluKHBhcmFtcykge1xuICAgICAgICAgIHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk7XG4gICAgICAgICAgbW91bnRzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBfcmVmLmtleSxcbiAgICAgICAgICAgICAgICBnZXR0ZXIgPSBfcmVmLmdldHRlcjtcblxuICAgICAgICAgICAgaWYgKCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChwYXJhbXNba2V5XSkpIHtcbiAgICAgICAgICAgICAgdmFyIHJlYWN0RWxlbWVudCA9IHBhcmFtc1trZXldO1xuICAgICAgICAgICAgICBwYXJhbXNba2V5XSA9ICcgJztcbiAgICAgICAgICAgICAgdmFyIGRvbUVsZW1lbnQ7XG4gICAgICAgICAgICAgIHZhciBvcGVuSG9va05hbWUgPSBwYXJhbXMub25PcGVuIHx8ICFQYXJlbnRTd2FsLmlzVmFsaWRQYXJhbWV0ZXIoJ2RpZE9wZW4nKSA/ICdvbk9wZW4nIDogJ2RpZE9wZW4nOyAvLyBzdXBwb3J0IGxlZ2FjeSBvbk9wZW4gaG9va1xuXG4gICAgICAgICAgICAgIHZhciBzdXBlck9wZW5Ib29rID0gcGFyYW1zW29wZW5Ib29rTmFtZV0gfHwgbm9vcDtcblxuICAgICAgICAgICAgICBwYXJhbXNbb3Blbkhvb2tOYW1lXSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudCA9IGdldHRlcihQYXJlbnRTd2FsKTtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50ICYmIFJlYWN0RE9NX19kZWZhdWx0WydkZWZhdWx0J10ucmVuZGVyKHJlYWN0RWxlbWVudCwgZG9tRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgc3VwZXJPcGVuSG9vayhlbGVtZW50KTtcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB2YXIgZGVzdHJveUhvb2tOYW1lID0gcGFyYW1zLm9uRGVzdHJveSB8fCAhUGFyZW50U3dhbC5pc1ZhbGlkUGFyYW1ldGVyKCdkaWREZXN0cm95JykgPyAnb25EZXN0cm95JyA6ICdkaWREZXN0cm95JzsgLy8gc3VwcG9ydCBsZWdhY3kgb25EZXN0cm95IGhvb2tcblxuICAgICAgICAgICAgICB2YXIgc3VwZXJEZXN0cm95SG9vayA9IHBhcmFtc1tkZXN0cm95SG9va05hbWVdIHx8IG5vb3A7XG5cbiAgICAgICAgICAgICAgcGFyYW1zW2Rlc3Ryb3lIb29rTmFtZV0gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHN1cGVyRGVzdHJveUhvb2soZWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZG9tRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgUmVhY3RET01fX2RlZmF1bHRbJ2RlZmF1bHQnXS51bm1vdW50Q29tcG9uZW50QXROb2RlKGRvbUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoX2NsYXNzLnByb3RvdHlwZSksIFwiX21haW5cIiwgdGhpcykuY2FsbCh0aGlzLCBwYXJhbXMpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJ1cGRhdGVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgICAgICB0aHJvdyBlcnJvcignU3dhbC51cGRhdGUoKSBpcyBub3QgeWV0IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi1yZWFjdC1jb250ZW50L2lzc3Vlcy83MycpO1xuICAgICAgICB9XG4gICAgICB9XSwgW3tcbiAgICAgICAga2V5OiBcImFyZ3NUb1BhcmFtc1wiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYXJnc1RvUGFyYW1zKGFyZ3MpIHtcbiAgICAgICAgICBpZiAoIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGFyZ3NbMF0pIHx8IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGFyZ3NbMV0pKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0ge307XG4gICAgICAgICAgICBbJ3RpdGxlJywgJ2h0bWwnLCAnaWNvbiddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgIGlmIChhcmdzW2luZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW25hbWVdID0gYXJnc1tpbmRleF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFBhcmVudFN3YWwuYXJnc1RvUGFyYW1zKGFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gX2NsYXNzO1xuICAgIH0oUGFyZW50U3dhbCk7XG4gIH1cblxuICByZXR1cm4gd2l0aFJlYWN0Q29udGVudDtcblxufSkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN3ZWV0YWxlcnQyLXJlYWN0LWNvbnRlbnQudW1kLmpzLm1hcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==