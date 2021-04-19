exports.ids = [0];
exports.modules = {

/***/ "./server/ServerUtils.js":
/*!*******************************!*\
  !*** ./server/ServerUtils.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const {
  extractDbErrorMessage
} = __webpack_require__(/*! ./database */ "./server/database.js");

const PAGE_SIZE = 25;
const AUTH_EXPIRATION = 30; // days

const MAX_NAME_LENGTH = 255;
const MAX_DESCRIPTION_LENGTH = 255;
const MAX_USERNAME_LENGTH = 100;

class ServerError extends Error {
  constructor(code, err, ...rest) {
    super(...rest);

    _defineProperty(this, "code", void 0);

    _defineProperty(this, "message", void 0);

    this.code = code || 500;
    err = err || 'Oops! Asta nu trebuia să se întâmple 😬';

    if (typeof err === 'object') {
      this.message = extractDbErrorMessage(err);
    } else {
      this.message = err;
    }
  }

  send(res) {
    res.status(this.code);
    res.json({
      code: this.code,
      message: this.message
    });
  }

}

function setTokenCookie(token, res) {
  res.cookie('token', token);
}
/** Verify that payload doesn't have extra props not present on the Schema */


function validateAgainstSchemaProps(payload, Schema) {
  const keys = Object.keys(payload); // eslint-disable-next-line no-restricted-syntax

  for (const key of keys) {
    if (!(key in Schema.obj)) {
      throw new ServerError(400, `Property '${key}' cannot be directly set.`);
    }
  }
}

function validateObjectId(_id) {
  if (!mongoose.isValidObjectId(_id)) {
    throw new ServerError(400, `Value '${_id}' is not a valid ObjectId identifier`);
  }
}

module.exports = {
  ServerError,
  PAGE_SIZE,
  AUTH_EXPIRATION,
  MAX_NAME_LENGTH,
  MAX_USERNAME_LENGTH,
  MAX_DESCRIPTION_LENGTH,
  setTokenCookie,
  validateAgainstSchemaProps,
  validateObjectId
};

/***/ }),

/***/ "./server/database.js":
/*!****************************!*\
  !*** ./server/database.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

function connectToDb() {
  if (mongoose.connection && mongoose.connection.readyState === 1) {
    /** Early return - already connected */
    return Promise.resolve(mongoose);
  }

  return mongoose.connect(process.env.DB_CONNECT, {
    poolSize: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
}
/** Extract the first human-readable error message from a Mongoose ValidationError */


function extractDbErrorMessage(err) {
  if (err.errors) {
    const keys = Object.keys(err.errors);
    const firstKeyWithErrorMessage = keys.find(key => err.errors[key].message);

    if (firstKeyWithErrorMessage) {
      return err.errors[firstKeyWithErrorMessage].message;
    }
  }

  return err._message || 'Oops, something went wrong...';
}

module.exports = {
  connectToDb,
  extractDbErrorMessage
};

/***/ }),

/***/ "./shared/SharedConstants.js":
/*!***********************************!*\
  !*** ./shared/SharedConstants.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Constants shared between server & client */
const MAX_MEDIA_MB = 10;
const MAX_MEDIA_BYTES = MAX_MEDIA_MB * 1024 * 1024;
const USER_ROLE = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT: 'student'
};
const SUBMISSION_STATUS = {
  IN_PROGRESS: 'in_progress',
  AWAITING_REVIEW: 'awaiting_review',
  DONE: 'done'
};
const LESSONS_WITH_EXERCISES = ['texte', 'liste', 'imagini']; // Use NodeJS style exports because this file is consumed
// both from the server & client

module.exports = {
  MAX_MEDIA_MB,
  MAX_MEDIA_BYTES,
  USER_ROLE,
  SUBMISSION_STATUS,
  LESSONS_WITH_EXERCISES
};

/***/ }),

/***/ "./shared/user.shared-model.js":
/*!*************************************!*\
  !*** ./shared/user.shared-model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @typescript-eslint/no-var-requires */
const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const uniqueValidator = __webpack_require__(/*! mongoose-unique-validator */ "mongoose-unique-validator");

const {
  ServerError
} = __webpack_require__(/*! ../server/ServerUtils */ "./server/ServerUtils.js");

const {
  USER_ROLE
} = __webpack_require__(/*! ./SharedConstants */ "./shared/SharedConstants.js");

const UsersSchema = new mongoose.Schema({
  avatar: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false,
    default: ''
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: false,
    default: ''
  },
  password: {
    type: String,
    required: true
  },
  github_access_token: {
    type: String
  },
  lastLogin: {
    type: Date,
    default: Date.now()
  },
  role: {
    type: String,
    enum: [USER_ROLE.ADMIN, USER_ROLE.TEACHER, USER_ROLE.STUDENT],
    default: USER_ROLE.STUDENT
  }
});
UsersSchema.plugin(uniqueValidator);
const User = mongoose.models.User || mongoose.model('User', UsersSchema);

async function ping(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedInfo) => {
      if (err) {
        reject(new ServerError(401, 'Not authenticated'));
        return;
      }

      const {
        _id
      } = decodedInfo;
      const user = await findUserBy({
        _id
      });

      if (!user) {
        reject(new ServerError(404, "User doesn't exist anymore!"));
        return;
      }

      resolve(user);
    });
  });
}

function sanitize(user) {
  const sanitizedUser = _objectSpread({}, user.toObject());

  const propsToDelete = ['_id', '__v', 'password', 'github_access_token'];
  propsToDelete.forEach(prop => delete sanitizedUser[prop]);
  return sanitizedUser;
}

async function findUserBy(filters) {
  const user = await User.findOne(filters);
  return user || null;
}

module.exports = {
  User,
  UsersSchema,
  ping,
  sanitize,
  findUserBy
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvU2VydmVyVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RhdGFiYXNlLmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9TaGFyZWRDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3VzZXIuc2hhcmVkLW1vZGVsLmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImV4dHJhY3REYkVycm9yTWVzc2FnZSIsIlBBR0VfU0laRSIsIkFVVEhfRVhQSVJBVElPTiIsIk1BWF9OQU1FX0xFTkdUSCIsIk1BWF9ERVNDUklQVElPTl9MRU5HVEgiLCJNQVhfVVNFUk5BTUVfTEVOR1RIIiwiU2VydmVyRXJyb3IiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwiY29kZSIsImVyciIsInJlc3QiLCJtZXNzYWdlIiwic2VuZCIsInJlcyIsInN0YXR1cyIsImpzb24iLCJzZXRUb2tlbkNvb2tpZSIsInRva2VuIiwiY29va2llIiwidmFsaWRhdGVBZ2FpbnN0U2NoZW1hUHJvcHMiLCJwYXlsb2FkIiwiU2NoZW1hIiwia2V5cyIsIk9iamVjdCIsImtleSIsIm9iaiIsInZhbGlkYXRlT2JqZWN0SWQiLCJfaWQiLCJpc1ZhbGlkT2JqZWN0SWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiY29ubmVjdFRvRGIiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJEQl9DT05ORUNUIiwicG9vbFNpemUiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlQ3JlYXRlSW5kZXgiLCJlcnJvcnMiLCJmaXJzdEtleVdpdGhFcnJvck1lc3NhZ2UiLCJmaW5kIiwiX21lc3NhZ2UiLCJNQVhfTUVESUFfTUIiLCJNQVhfTUVESUFfQllURVMiLCJVU0VSX1JPTEUiLCJBRE1JTiIsIlRFQUNIRVIiLCJTVFVERU5UIiwiU1VCTUlTU0lPTl9TVEFUVVMiLCJJTl9QUk9HUkVTUyIsIkFXQUlUSU5HX1JFVklFVyIsIkRPTkUiLCJMRVNTT05TX1dJVEhfRVhFUkNJU0VTIiwiand0IiwidW5pcXVlVmFsaWRhdG9yIiwiVXNlcnNTY2hlbWEiLCJhdmF0YXIiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJuYW1lIiwiZGVmYXVsdCIsImVtYWlsIiwidW5pcXVlIiwidXNlcm5hbWUiLCJkZXNjcmlwdGlvbiIsInBhc3N3b3JkIiwiZ2l0aHViX2FjY2Vzc190b2tlbiIsImxhc3RMb2dpbiIsIkRhdGUiLCJub3ciLCJyb2xlIiwiZW51bSIsInBsdWdpbiIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCIsInBpbmciLCJyZWplY3QiLCJ2ZXJpZnkiLCJUT0tFTl9TRUNSRVQiLCJkZWNvZGVkSW5mbyIsInVzZXIiLCJmaW5kVXNlckJ5Iiwic2FuaXRpemUiLCJzYW5pdGl6ZWRVc2VyIiwidG9PYmplY3QiLCJwcm9wc1RvRGVsZXRlIiwiZm9yRWFjaCIsInByb3AiLCJmaWx0ZXJzIiwiZmluZE9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLDBCQUFELENBQXhCOztBQUNBLE1BQU07QUFBRUM7QUFBRixJQUE0QkQsbUJBQU8sQ0FBQyx3Q0FBRCxDQUF6Qzs7QUFFQSxNQUFNRSxTQUFTLEdBQUcsRUFBbEI7QUFFQSxNQUFNQyxlQUFlLEdBQUcsRUFBeEIsQyxDQUE0Qjs7QUFDNUIsTUFBTUMsZUFBZSxHQUFHLEdBQXhCO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsR0FBL0I7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxHQUE1Qjs7QUFFQSxNQUFNQyxXQUFOLFNBQTBCQyxLQUExQixDQUFnQztBQUs5QkMsYUFBVyxDQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBWSxHQUFHQyxJQUFmLEVBQXFCO0FBQzlCLFVBQU0sR0FBR0EsSUFBVDs7QUFEOEI7O0FBQUE7O0FBRzlC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U0FBT0osYUFBUDtBQUNEOztBQUVELGVBQWVGLFVBQWYsQ0FBMEJPLE9BQTFCLEVBQW1DO0FBQ2pDLFFBQU1SLElBQUksR0FBRyxNQUFNUixJQUFJLENBQUNpQixPQUFMLENBQWFELE9BQWIsQ0FBbkI7QUFFQSxTQUFPUixJQUFJLElBQUksSUFBZjtBQUNEOztBQUVENUQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZtRCxNQURlO0FBRWZuQixhQUZlO0FBR2ZzQixNQUhlO0FBSWZPLFVBSmU7QUFLZkQ7QUFMZSxDQUFqQixDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcbmNvbnN0IHsgZXh0cmFjdERiRXJyb3JNZXNzYWdlIH0gPSByZXF1aXJlKCcuL2RhdGFiYXNlJyk7XHJcblxyXG5jb25zdCBQQUdFX1NJWkUgPSAyNTtcclxuXHJcbmNvbnN0IEFVVEhfRVhQSVJBVElPTiA9IDMwOyAvLyBkYXlzXHJcbmNvbnN0IE1BWF9OQU1FX0xFTkdUSCA9IDI1NTtcclxuY29uc3QgTUFYX0RFU0NSSVBUSU9OX0xFTkdUSCA9IDI1NTtcclxuY29uc3QgTUFYX1VTRVJOQU1FX0xFTkdUSCA9IDEwMDtcclxuXHJcbmNsYXNzIFNlcnZlckVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvZGU7XHJcblxyXG4gIG1lc3NhZ2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvZGUsIGVyciwgLi4ucmVzdCkge1xyXG4gICAgc3VwZXIoLi4ucmVzdCk7XHJcblxyXG4gICAgdGhpcy5jb2RlID0gY29kZSB8fCA1MDA7XHJcblxyXG4gICAgZXJyID0gZXJyIHx8ICdPb3BzISBBc3RhIG51IHRyZWJ1aWEgc8SDIHNlIMOubnTDom1wbGUg8J+YrCc7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBlcnIgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZSA9IGV4dHJhY3REYkVycm9yTWVzc2FnZShlcnIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tZXNzYWdlID0gZXJyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VuZChyZXMpIHtcclxuICAgIHJlcy5zdGF0dXModGhpcy5jb2RlKTtcclxuICAgIHJlcy5qc29uKHtcclxuICAgICAgY29kZTogdGhpcy5jb2RlLFxyXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRva2VuQ29va2llKHRva2VuLCByZXMpIHtcclxuICByZXMuY29va2llKCd0b2tlbicsIHRva2VuKTtcclxufVxyXG5cclxuLyoqIFZlcmlmeSB0aGF0IHBheWxvYWQgZG9lc24ndCBoYXZlIGV4dHJhIHByb3BzIG5vdCBwcmVzZW50IG9uIHRoZSBTY2hlbWEgKi9cclxuZnVuY3Rpb24gdmFsaWRhdGVBZ2FpbnN0U2NoZW1hUHJvcHMocGF5bG9hZCwgU2NoZW1hKSB7XHJcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHBheWxvYWQpO1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICBpZiAoIShrZXkgaW4gU2NoZW1hLm9iaikpIHtcclxuICAgICAgdGhyb3cgbmV3IFNlcnZlckVycm9yKDQwMCwgYFByb3BlcnR5ICcke2tleX0nIGNhbm5vdCBiZSBkaXJlY3RseSBzZXQuYCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZU9iamVjdElkKF9pZCkge1xyXG4gIGlmICghbW9uZ29vc2UuaXNWYWxpZE9iamVjdElkKF9pZCkpIHtcclxuICAgIHRocm93IG5ldyBTZXJ2ZXJFcnJvcig0MDAsIGBWYWx1ZSAnJHtfaWR9JyBpcyBub3QgYSB2YWxpZCBPYmplY3RJZCBpZGVudGlmaWVyYCk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBTZXJ2ZXJFcnJvcixcclxuICBQQUdFX1NJWkUsXHJcbiAgQVVUSF9FWFBJUkFUSU9OLFxyXG4gIE1BWF9OQU1FX0xFTkdUSCxcclxuICBNQVhfVVNFUk5BTUVfTEVOR1RILFxyXG4gIE1BWF9ERVNDUklQVElPTl9MRU5HVEgsXHJcbiAgc2V0VG9rZW5Db29raWUsXHJcbiAgdmFsaWRhdGVBZ2FpbnN0U2NoZW1hUHJvcHMsXHJcbiAgdmFsaWRhdGVPYmplY3RJZCxcclxufSIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuZnVuY3Rpb24gY29ubmVjdFRvRGIoKSB7XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24gJiYgbW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKSB7XHJcbiAgICAvKiogRWFybHkgcmV0dXJuIC0gYWxyZWFkeSBjb25uZWN0ZWQgKi9cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobW9uZ29vc2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuREJfQ09OTkVDVCwge1xyXG4gICAgcG9vbFNpemU6IDEsXHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKiogRXh0cmFjdCB0aGUgZmlyc3QgaHVtYW4tcmVhZGFibGUgZXJyb3IgbWVzc2FnZSBmcm9tIGEgTW9uZ29vc2UgVmFsaWRhdGlvbkVycm9yICovXHJcbmZ1bmN0aW9uIGV4dHJhY3REYkVycm9yTWVzc2FnZShlcnIpIHtcclxuICBpZiAoZXJyLmVycm9ycykge1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGVyci5lcnJvcnMpO1xyXG4gICAgY29uc3QgZmlyc3RLZXlXaXRoRXJyb3JNZXNzYWdlID0ga2V5cy5maW5kKChrZXkpID0+IGVyci5lcnJvcnNba2V5XS5tZXNzYWdlKTtcclxuXHJcbiAgICBpZiAoZmlyc3RLZXlXaXRoRXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgIHJldHVybiBlcnIuZXJyb3JzW2ZpcnN0S2V5V2l0aEVycm9yTWVzc2FnZV0ubWVzc2FnZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBlcnIuX21lc3NhZ2UgfHwgJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nLi4uJztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgY29ubmVjdFRvRGIsXHJcbiAgZXh0cmFjdERiRXJyb3JNZXNzYWdlLFxyXG59IiwiLyoqIENvbnN0YW50cyBzaGFyZWQgYmV0d2VlbiBzZXJ2ZXIgJiBjbGllbnQgKi9cclxuY29uc3QgTUFYX01FRElBX01CID0gMTA7XHJcbmNvbnN0IE1BWF9NRURJQV9CWVRFUyA9IE1BWF9NRURJQV9NQiAqIDEwMjQgKiAxMDI0O1xyXG5cclxuY29uc3QgVVNFUl9ST0xFID0ge1xyXG4gIEFETUlOOiAnYWRtaW4nLFxyXG4gIFRFQUNIRVI6ICd0ZWFjaGVyJyxcclxuICBTVFVERU5UOiAnc3R1ZGVudCcsXHJcbn07XHJcblxyXG5jb25zdCBTVUJNSVNTSU9OX1NUQVRVUyA9IHtcclxuICBJTl9QUk9HUkVTUzogJ2luX3Byb2dyZXNzJyxcclxuICBBV0FJVElOR19SRVZJRVc6ICdhd2FpdGluZ19yZXZpZXcnLFxyXG4gIERPTkU6ICdkb25lJyxcclxufTtcclxuXHJcbmNvbnN0IExFU1NPTlNfV0lUSF9FWEVSQ0lTRVMgPSBbXHJcbiAgJ3RleHRlJyxcclxuICAnbGlzdGUnLFxyXG4gICdpbWFnaW5pJyxcclxuXTtcclxuXHJcbi8vIFVzZSBOb2RlSlMgc3R5bGUgZXhwb3J0cyBiZWNhdXNlIHRoaXMgZmlsZSBpcyBjb25zdW1lZFxyXG4vLyBib3RoIGZyb20gdGhlIHNlcnZlciAmIGNsaWVudFxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBNQVhfTUVESUFfTUIsXHJcbiAgTUFYX01FRElBX0JZVEVTLFxyXG4gIFVTRVJfUk9MRSxcclxuICBTVUJNSVNTSU9OX1NUQVRVUyxcclxuICBMRVNTT05TX1dJVEhfRVhFUkNJU0VTLFxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzICovXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xyXG5jb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcbmNvbnN0IHVuaXF1ZVZhbGlkYXRvciA9IHJlcXVpcmUoJ21vbmdvb3NlLXVuaXF1ZS12YWxpZGF0b3InKTtcclxuY29uc3QgeyBTZXJ2ZXJFcnJvciB9ID0gcmVxdWlyZSgnLi4vc2VydmVyL1NlcnZlclV0aWxzJyk7XHJcbmNvbnN0IHsgVVNFUl9ST0xFIH0gPSByZXF1aXJlKCcuL1NoYXJlZENvbnN0YW50cycpO1xyXG5cclxuY29uc3QgVXNlcnNTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBhdmF0YXI6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6ICcnIH0sXHJcbiAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgdXNlcm5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6ICcnIH0sXHJcbiAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIGdpdGh1Yl9hY2Nlc3NfdG9rZW46IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgbGFzdExvZ2luOiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93KCkgfSxcclxuICByb2xlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBlbnVtOiBbXHJcbiAgICAgIFVTRVJfUk9MRS5BRE1JTixcclxuICAgICAgVVNFUl9ST0xFLlRFQUNIRVIsXHJcbiAgICAgIFVTRVJfUk9MRS5TVFVERU5ULFxyXG4gICAgXSxcclxuICAgIGRlZmF1bHQ6IFVTRVJfUk9MRS5TVFVERU5ULFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuVXNlcnNTY2hlbWEucGx1Z2luKHVuaXF1ZVZhbGlkYXRvcik7XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBVc2Vyc1NjaGVtYSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwaW5nKHRva2VuKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LlRPS0VOX1NFQ1JFVCwgYXN5bmMgKGVyciwgZGVjb2RlZEluZm8pID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJlamVjdChuZXcgU2VydmVyRXJyb3IoNDAxLCAnTm90IGF1dGhlbnRpY2F0ZWQnKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB7IF9pZCB9ID0gZGVjb2RlZEluZm87XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgZmluZFVzZXJCeSh7IF9pZCB9KTtcclxuICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgcmVqZWN0KG5ldyBTZXJ2ZXJFcnJvcig0MDQsIFwiVXNlciBkb2Vzbid0IGV4aXN0IGFueW1vcmUhXCIpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlc29sdmUodXNlcik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2FuaXRpemUodXNlcikge1xyXG4gIGNvbnN0IHNhbml0aXplZFVzZXIgPSB7IC4uLnVzZXIudG9PYmplY3QoKSB9O1xyXG4gIGNvbnN0IHByb3BzVG9EZWxldGUgPSBbJ19pZCcsICdfX3YnLCAncGFzc3dvcmQnLCAnZ2l0aHViX2FjY2Vzc190b2tlbiddO1xyXG5cclxuICBwcm9wc1RvRGVsZXRlLmZvckVhY2goKHByb3ApID0+IGRlbGV0ZSBzYW5pdGl6ZWRVc2VyW3Byb3BdKTtcclxuXHJcbiAgcmV0dXJuIHNhbml0aXplZFVzZXI7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZpbmRVc2VyQnkoZmlsdGVycykge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoZmlsdGVycyk7XHJcblxyXG4gIHJldHVybiB1c2VyIHx8IG51bGw7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIFVzZXIsXHJcbiAgVXNlcnNTY2hlbWEsXHJcbiAgcGluZyxcclxuICBzYW5pdGl6ZSxcclxuICBmaW5kVXNlckJ5LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9