const jwt = require('jsonwebtoken');
const UserModel = require('./user/user.model');
const { ServerError } = require('./ServerUtils');
const ExerciseModel = require('./exercise/exercise.model');

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
  OwnExercise
}

/**
 * Higher order function which applies a bunch of middlewares to all
 * configured methods of an API request.
 *
 * For example, in case we want only authenticated access to all (GET, POST, etc),
 * we can just specify the middleware in the second param instead of duplicating it everywhere.
 *
 * If we want to have specific middlewares per method, we'll need to apply this function again on
 * the individual handlers.
 */
// export function withMiddlewares(
//   handlerOrConfig: Handler | RouteConfig,
//   middlewares: Middleware[] = [],
// ): Handler {
//   const extendedMiddlewares = typeof handlerOrConfig === 'function'
//     ? [...middlewares]
//     : [...middlewares, methodExists(handlerOrConfig)];

//   /** Connect to DB on all API routes */
//   connectToDb();

//   return async (req, res) => {
//     try {
//       for (let i = 0; i < extendedMiddlewares.length; i += 1) {
//         /**
//          * We want them to be iterative sequencial, as we must make sure that
//          * we run the next middleware only if the current one has successfully passed.
//          */

//         // eslint-disable-next-line no-await-in-loop
//         await extendedMiddlewares[i](req, res);
//       }

//       if (typeof handlerOrConfig === 'function') {
//         await handlerOrConfig(req, res);
//       } else {
//         await handlerOrConfig[req.method](req, res);
//       }
//     } catch (err) {
//       if (err instanceof ServerError) {
//         err.send(res);
//         return;
//       }

//       let code = err?.code;
//       if (!code && err.name === 'ValidationError') {
//         code = 400;
//       } else {
//         code = 500;
//       }

//       new ServerError(code, err).send(res);
//     }
//   };
// }