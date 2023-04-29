const jwt = require('jsonwebtoken');
const { default: UserModel } = require('./user/user.model');
const { ServerError, parseBearerToken } = require('./ServerUtils');
const { default: LessonExerciseModel } = require('./lesson-exercise/lesson-exercise.model');
const { UserRole } = require('../shared/types/user.types');
const { default: appConfig } = require('./config');

/****************** User Middleware */
/** 
 * Everyone can access the API. 
 * If you have a token, it will be added into the req.body 
 */
function PublicMiddleware(req, res, next) {
  // Accept token either via cookie or Bearer token sent via headers
  const authToken = req.cookies.token ?? parseBearerToken(req);

  if (!authToken) {
    next();
  } else {
    jwt.verify(
      authToken,
      appConfig.AUTH.secret,
      {
        algorithms: [appConfig.AUTH.algorithm]
      },
      (err, payload) => {
        if (err) {
          next();
        } else {
          UserModel.findUserBy({ _id: payload._id })
            .then(resp => {
              req.body.user = resp;
              next();
            })
            .catch(() => next());
        }
      }
    );
  }
}

/** Only authorized users can access this API */
function PrivateMiddleware(req, res, next) {
  // Accept token either via cookie or Bearer token sent via headers
  const authToken = req.cookies.token ?? parseBearerToken(req);

  if (!authToken) {
    new ServerError(401, 'Unauthorized!').send(res);
    return;
  }

  jwt.verify(
    authToken,
    appConfig.AUTH.secret,
    {
      algorithms: [appConfig.AUTH.algorithm]
    },
    (err, payload) => {
      if (err) {
        new ServerError(401, 'Unauthorized!').send(res);
        return
      } else {
        UserModel.findUserBy({ _id: payload._id })
          .then(resp => {
            if (resp === null) {
              // JWT is valid, but encoded ID doesn't exist
              new ServerError(401, 'Unauthorized!').send(res);
              return;
            }
            req.body.user = resp;
            next();
          })
          .catch(err => res.status(err.status).json(err));
      }
    }
  );
}

function UserRoleMiddleware(role) {
  if (!role in UserRole) {
    const availableUserRoles = Object.values(UserRole).join(',');
    console.error(`[UserRoleMiddleware] 'role' must be one of: ${availableUserRoles}.`);

    return (_, res) => {
      new ServerError(401, 'Nu ai rolul necesar pentru a accesa această resursă').send(res);
      return
    }
  }

  return (req, res, next) => {
    PrivateMiddleware(req, res, () => {
      if (req.body.user.role === role) {
        next();
        return;
      }

      new ServerError(401, 'Nu ai rolul necesar pentru a accesa această resursă').send(res);
    })
  }
}

/****************** Exercise Middleware */
async function SolvableExercise(req, res, next) {
  const { exerciseId } = req.params;

  try {
    const lessonExercise = await LessonExerciseModel.get(exerciseId);
    if(!lessonExercise) {
      throw new ServerError(404, 'Exercițiul nu există!');
    }

    next();
  } catch(err) {
    console.error("[SolvableExercise]", {
      code: err.code,
      message: err.message
    });

    new ServerError(err.code, err.message).send(res);
    return
  }
}

module.exports = {
  PublicMiddleware,
  PrivateMiddleware,
  UserRoleMiddleware,
  SolvableExercise,
}
