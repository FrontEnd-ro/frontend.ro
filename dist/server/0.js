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

  const propsToDelete = ['_id', '__v', 'password'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvU2VydmVyVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RhdGFiYXNlLmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9TaGFyZWRDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3VzZXIuc2hhcmVkLW1vZGVsLmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImV4dHJhY3REYkVycm9yTWVzc2FnZSIsIlBBR0VfU0laRSIsIkFVVEhfRVhQSVJBVElPTiIsIk1BWF9OQU1FX0xFTkdUSCIsIk1BWF9ERVNDUklQVElPTl9MRU5HVEgiLCJNQVhfVVNFUk5BTUVfTEVOR1RIIiwiU2VydmVyRXJyb3IiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwiY29kZSIsImVyciIsInJlc3QiLCJtZXNzYWdlIiwic2VuZCIsInJlcyIsInN0YXR1cyIsImpzb24iLCJzZXRUb2tlbkNvb2tpZSIsInRva2VuIiwiY29va2llIiwidmFsaWRhdGVBZ2FpbnN0U2NoZW1hUHJvcHMiLCJwYXlsb2FkIiwiU2NoZW1hIiwia2V5cyIsIk9iamVjdCIsImtleSIsIm9iaiIsInZhbGlkYXRlT2JqZWN0SWQiLCJfaWQiLCJpc1ZhbGlkT2JqZWN0SWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiY29ubmVjdFRvRGIiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJEQl9DT05ORUNUIiwicG9vbFNpemUiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlQ3JlYXRlSW5kZXgiLCJlcnJvcnMiLCJmaXJzdEtleVdpdGhFcnJvck1lc3NhZ2UiLCJmaW5kIiwiX21lc3NhZ2UiLCJNQVhfTUVESUFfTUIiLCJNQVhfTUVESUFfQllURVMiLCJVU0VSX1JPTEUiLCJBRE1JTiIsIlRFQUNIRVIiLCJTVFVERU5UIiwiU1VCTUlTU0lPTl9TVEFUVVMiLCJJTl9QUk9HUkVTUyIsIkFXQUlUSU5HX1JFVklFVyIsIkRPTkUiLCJMRVNTT05TX1dJVEhfRVhFUkNJU0VTIiwiand0IiwidW5pcXVlVmFsaWRhdG9yIiwiVXNlcnNTY2hlbWEiLCJhdmF0YXIiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJuYW1lIiwiZGVmYXVsdCIsImVtYWlsIiwidW5pcXVlIiwidXNlcm5hbWUiLCJkZXNjcmlwdGlvbiIsInBhc3N3b3JkIiwibGFzdExvZ2luIiwiRGF0ZSIsIm5vdyIsInJvbGUiLCJlbnVtIiwicGx1Z2luIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIiwicGluZyIsInJlamVjdCIsInZlcmlmeSIsIlRPS0VOX1NFQ1JFVCIsImRlY29kZWRJbmZvIiwidXNlciIsImZpbmRVc2VyQnkiLCJzYW5pdGl6ZSIsInNhbml0aXplZFVzZXIiLCJ0b09iamVjdCIsInByb3BzVG9EZWxldGUiLCJmb3JFYWNoIiwicHJvcCIsImZpbHRlcnMiLCJmaW5kT25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsMEJBQUQsQ0FBeEI7O0FBQ0EsTUFBTTtBQUFFQztBQUFGLElBQTRCRCxtQkFBTyxDQUFDLHdDQUFELENBQXpDOztBQUVBLE1BQU1FLFNBQVMsR0FBRyxFQUFsQjtBQUVBLE1BQU1DLGVBQWUsR0FBRyxFQUF4QixDLENBQTRCOztBQUM1QixNQUFNQyxlQUFlLEdBQUcsR0FBeEI7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyxHQUEvQjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLEdBQTVCOztBQUVBLE1BQU1DLFdBQU4sU0FBMEJDLEtBQTFCLENBQWdDO0FBSzlCQyxhQUFXLENBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFZLEdBQUdDLElBQWYsRUFBcUI7QUFDOUIsVUFBTSxHQUFHQSxJQUFUOztBQUQ4Qjs7QUFBQTs7QUFHOUIsU0FBS0YsSUFBTCxHQUFZQSxJQUFJ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QUksQ0FBQ2lCLE9BQUwsQ0FBYUQsT0FBYixDQUFuQjtBQUVBLFNBQU9SLElBQUksSUFBSSxJQUFmO0FBQ0Q7O0FBRUQzRCxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZmtELE1BRGU7QUFFZmxCLGFBRmU7QUFHZnFCLE1BSGU7QUFJZk8sVUFKZTtBQUtmRDtBQUxlLENBQWpCLEMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuY29uc3QgeyBleHRyYWN0RGJFcnJvck1lc3NhZ2UgfSA9IHJlcXVpcmUoJy4vZGF0YWJhc2UnKTtcclxuXHJcbmNvbnN0IFBBR0VfU0laRSA9IDI1O1xyXG5cclxuY29uc3QgQVVUSF9FWFBJUkFUSU9OID0gMzA7IC8vIGRheXNcclxuY29uc3QgTUFYX05BTUVfTEVOR1RIID0gMjU1O1xyXG5jb25zdCBNQVhfREVTQ1JJUFRJT05fTEVOR1RIID0gMjU1O1xyXG5jb25zdCBNQVhfVVNFUk5BTUVfTEVOR1RIID0gMTAwO1xyXG5cclxuY2xhc3MgU2VydmVyRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29kZTtcclxuXHJcbiAgbWVzc2FnZTtcclxuXHJcbiAgY29uc3RydWN0b3IoY29kZSwgZXJyLCAuLi5yZXN0KSB7XHJcbiAgICBzdXBlciguLi5yZXN0KTtcclxuXHJcbiAgICB0aGlzLmNvZGUgPSBjb2RlIHx8IDUwMDtcclxuXHJcbiAgICBlcnIgPSBlcnIgfHwgJ09vcHMhIEFzdGEgbnUgdHJlYnVpYSBzxIMgc2Ugw65udMOibXBsZSDwn5isJztcclxuXHJcbiAgICBpZiAodHlwZW9mIGVyciA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlID0gZXh0cmFjdERiRXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1lc3NhZ2UgPSBlcnI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZW5kKHJlcykge1xyXG4gICAgcmVzLnN0YXR1cyh0aGlzLmNvZGUpO1xyXG4gICAgcmVzLmpzb24oe1xyXG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXHJcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VG9rZW5Db29raWUodG9rZW4sIHJlcykge1xyXG4gIHJlcy5jb29raWUoJ3Rva2VuJywgdG9rZW4pO1xyXG59XHJcblxyXG4vKiogVmVyaWZ5IHRoYXQgcGF5bG9hZCBkb2Vzbid0IGhhdmUgZXh0cmEgcHJvcHMgbm90IHByZXNlbnQgb24gdGhlIFNjaGVtYSAqL1xyXG5mdW5jdGlvbiB2YWxpZGF0ZUFnYWluc3RTY2hlbWFQcm9wcyhwYXlsb2FkLCBTY2hlbWEpIHtcclxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocGF5bG9hZCk7XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuICAgIGlmICghKGtleSBpbiBTY2hlbWEub2JqKSkge1xyXG4gICAgICB0aHJvdyBuZXcgU2VydmVyRXJyb3IoNDAwLCBgUHJvcGVydHkgJyR7a2V5fScgY2Fubm90IGJlIGRpcmVjdGx5IHNldC5gKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlT2JqZWN0SWQoX2lkKSB7XHJcbiAgaWYgKCFtb25nb29zZS5pc1ZhbGlkT2JqZWN0SWQoX2lkKSkge1xyXG4gICAgdGhyb3cgbmV3IFNlcnZlckVycm9yKDQwMCwgYFZhbHVlICcke19pZH0nIGlzIG5vdCBhIHZhbGlkIE9iamVjdElkIGlkZW50aWZpZXJgKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIFNlcnZlckVycm9yLFxyXG4gIFBBR0VfU0laRSxcclxuICBBVVRIX0VYUElSQVRJT04sXHJcbiAgTUFYX05BTUVfTEVOR1RILFxyXG4gIE1BWF9VU0VSTkFNRV9MRU5HVEgsXHJcbiAgTUFYX0RFU0NSSVBUSU9OX0xFTkdUSCxcclxuICBzZXRUb2tlbkNvb2tpZSxcclxuICB2YWxpZGF0ZUFnYWluc3RTY2hlbWFQcm9wcyxcclxuICB2YWxpZGF0ZU9iamVjdElkLFxyXG59IiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG5mdW5jdGlvbiBjb25uZWN0VG9EYigpIHtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbiAmJiBtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IDEpIHtcclxuICAgIC8qKiBFYXJseSByZXR1cm4gLSBhbHJlYWR5IGNvbm5lY3RlZCAqL1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtb25nb29zZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5EQl9DT05ORUNULCB7XHJcbiAgICBwb29sU2l6ZTogMSxcclxuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxyXG4gICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKiBFeHRyYWN0IHRoZSBmaXJzdCBodW1hbi1yZWFkYWJsZSBlcnJvciBtZXNzYWdlIGZyb20gYSBNb25nb29zZSBWYWxpZGF0aW9uRXJyb3IgKi9cclxuZnVuY3Rpb24gZXh0cmFjdERiRXJyb3JNZXNzYWdlKGVycikge1xyXG4gIGlmIChlcnIuZXJyb3JzKSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZXJyLmVycm9ycyk7XHJcbiAgICBjb25zdCBmaXJzdEtleVdpdGhFcnJvck1lc3NhZ2UgPSBrZXlzLmZpbmQoKGtleSkgPT4gZXJyLmVycm9yc1trZXldLm1lc3NhZ2UpO1xyXG5cclxuICAgIGlmIChmaXJzdEtleVdpdGhFcnJvck1lc3NhZ2UpIHtcclxuICAgICAgcmV0dXJuIGVyci5lcnJvcnNbZmlyc3RLZXlXaXRoRXJyb3JNZXNzYWdlXS5tZXNzYWdlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVyci5fbWVzc2FnZSB8fCAnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcuLi4nO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBjb25uZWN0VG9EYixcclxuICBleHRyYWN0RGJFcnJvck1lc3NhZ2UsXHJcbn0iLCIvKiogQ29uc3RhbnRzIHNoYXJlZCBiZXR3ZWVuIHNlcnZlciAmIGNsaWVudCAqL1xyXG5jb25zdCBNQVhfTUVESUFfTUIgPSAxMDtcclxuY29uc3QgTUFYX01FRElBX0JZVEVTID0gTUFYX01FRElBX01CICogMTAyNCAqIDEwMjQ7XHJcblxyXG5jb25zdCBVU0VSX1JPTEUgPSB7XHJcbiAgQURNSU46ICdhZG1pbicsXHJcbiAgVEVBQ0hFUjogJ3RlYWNoZXInLFxyXG4gIFNUVURFTlQ6ICdzdHVkZW50JyxcclxufTtcclxuXHJcbmNvbnN0IFNVQk1JU1NJT05fU1RBVFVTID0ge1xyXG4gIElOX1BST0dSRVNTOiAnaW5fcHJvZ3Jlc3MnLFxyXG4gIEFXQUlUSU5HX1JFVklFVzogJ2F3YWl0aW5nX3JldmlldycsXHJcbiAgRE9ORTogJ2RvbmUnLFxyXG59O1xyXG5cclxuY29uc3QgTEVTU09OU19XSVRIX0VYRVJDSVNFUyA9IFtcclxuICAndGV4dGUnLFxyXG4gICdsaXN0ZScsXHJcbiAgJ2ltYWdpbmknLFxyXG5dO1xyXG5cclxuLy8gVXNlIE5vZGVKUyBzdHlsZSBleHBvcnRzIGJlY2F1c2UgdGhpcyBmaWxlIGlzIGNvbnN1bWVkXHJcbi8vIGJvdGggZnJvbSB0aGUgc2VydmVyICYgY2xpZW50XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIE1BWF9NRURJQV9NQixcclxuICBNQVhfTUVESUFfQllURVMsXHJcbiAgVVNFUl9ST0xFLFxyXG4gIFNVQk1JU1NJT05fU1RBVFVTLFxyXG4gIExFU1NPTlNfV0lUSF9FWEVSQ0lTRVMsXHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXMgKi9cclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XHJcbmNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuY29uc3QgdW5pcXVlVmFsaWRhdG9yID0gcmVxdWlyZSgnbW9uZ29vc2UtdW5pcXVlLXZhbGlkYXRvcicpO1xyXG5jb25zdCB7IFNlcnZlckVycm9yIH0gPSByZXF1aXJlKCcuLi9zZXJ2ZXIvU2VydmVyVXRpbHMnKTtcclxuY29uc3QgeyBVU0VSX1JPTEUgfSA9IHJlcXVpcmUoJy4vU2hhcmVkQ29uc3RhbnRzJyk7XHJcblxyXG5jb25zdCBVc2Vyc1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIGF2YXRhcjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogJycgfSxcclxuICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuICB1c2VybmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogJycgfSxcclxuICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgbGFzdExvZ2luOiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93KCkgfSxcclxuICByb2xlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBlbnVtOiBbXHJcbiAgICAgIFVTRVJfUk9MRS5BRE1JTixcclxuICAgICAgVVNFUl9ST0xFLlRFQUNIRVIsXHJcbiAgICAgIFVTRVJfUk9MRS5TVFVERU5ULFxyXG4gICAgXSxcclxuICAgIGRlZmF1bHQ6IFVTRVJfUk9MRS5TVFVERU5ULFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuVXNlcnNTY2hlbWEucGx1Z2luKHVuaXF1ZVZhbGlkYXRvcik7XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBVc2Vyc1NjaGVtYSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwaW5nKHRva2VuKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LlRPS0VOX1NFQ1JFVCwgYXN5bmMgKGVyciwgZGVjb2RlZEluZm8pID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJlamVjdChuZXcgU2VydmVyRXJyb3IoNDAxLCAnTm90IGF1dGhlbnRpY2F0ZWQnKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB7IF9pZCB9ID0gZGVjb2RlZEluZm87XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgZmluZFVzZXJCeSh7IF9pZCB9KTtcclxuICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgcmVqZWN0KG5ldyBTZXJ2ZXJFcnJvcig0MDQsIFwiVXNlciBkb2Vzbid0IGV4aXN0IGFueW1vcmUhXCIpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlc29sdmUodXNlcik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2FuaXRpemUodXNlcikge1xyXG4gIGNvbnN0IHNhbml0aXplZFVzZXIgPSB7IC4uLnVzZXIudG9PYmplY3QoKSB9O1xyXG4gIGNvbnN0IHByb3BzVG9EZWxldGUgPSBbJ19pZCcsICdfX3YnLCAncGFzc3dvcmQnXTtcclxuXHJcbiAgcHJvcHNUb0RlbGV0ZS5mb3JFYWNoKChwcm9wKSA9PiBkZWxldGUgc2FuaXRpemVkVXNlcltwcm9wXSk7XHJcblxyXG4gIHJldHVybiBzYW5pdGl6ZWRVc2VyO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmaW5kVXNlckJ5KGZpbHRlcnMpIHtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKGZpbHRlcnMpO1xyXG5cclxuICByZXR1cm4gdXNlciB8fCBudWxsO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBVc2VyLFxyXG4gIFVzZXJzU2NoZW1hLFxyXG4gIHBpbmcsXHJcbiAgc2FuaXRpemUsXHJcbiAgZmluZFVzZXJCeSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==