const jwt = require('jsonwebtoken');
const UserModel = require('./user/user.model');
const { ServerError } = require('./ServerUtils');
const ExerciseModel = require('./exercise/exercise.model');

/****************** User Middleware */
/** 
 * Everyone can access the API. 
 * If you have a token, it will be added into the req.body 
 */
function PublicMiddleware(req, res, next) {
  const authToken = req.cookies.token;

  if (!authToken) {
    next();
  } else {
    jwt.verify(
      authToken,
      process.env.TOKEN_SECRET,
      {
        algorithms: [process.env.TOKEN_ALGORITHM]
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
  const authToken = req.cookies.token;

  if (!authToken) {
    new ServerError(401, 'Unauthorized!').send(res);
    return;
  }

  jwt.verify(
    authToken,
    process.env.TOKEN_SECRET,
    {
      algorithms: [process.env.TOKEN_ALGORITHM]
    },
    (err, payload) => {
      if (err) {
        new ServerError(401, 'Unauthorized!').send(res);
        return
      } else {
        UserModel.findUserBy({ _id: payload._id })
          .then(resp => {
            req.body.user = resp;
            next();
          })
          .catch(err => res.status(err.status).json(err));
      }
    }
  );
}

function UserRoleMiddleware(role) {
  if (!role in USER_ROLE) {
    const availableUserRoles = Object.values(USER_ROLE).join(',');
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
      }

      new ServerError(401, 'Nu ai rolul necesar pentru a accesa această resursă').send(res);
    })
  }
}

/****************** Exercise Middleware */
async function PublicOrOwnExercise(req, res, next) {
  const { exerciseId } = req.params;

  const exercise = await ExerciseModel.get(exerciseId);
  if (!exercise) {
    new ServerError(404, 'Exercițiul nu există.').send(res);
    return
  }

  if (exercise.private) {
    await ownExercise(req, res, next);
  } else {
    next();
  }
}

async function OwnExercise(req, res, next) {
  const { exerciseId } = req.params;

  const exercise = await ExerciseModel.get(exerciseId);
  if (!exercise) {
    new ServerError(404, 'Exercițiul nu există.').send(res);
    return
  }

  if (req.body.user.username !== exercise.user.username) {
    new ServerError(403, 'Doar autorul acestui exercițiu îl poate accesa.').send(res);
    return
  }

  next();
}

module.exports = {
  PublicMiddleware,
  PrivateMiddleware,
  PublicOrOwnExercise,
  UserRoleMiddleware,
  OwnExercise
}
