import jwt from 'jsonwebtoken';
import appConfig from './config/config';
import { UserRole } from '../shared/types/user.types';
import UserModel, { AuthJWT } from './user/user.model';
import { NextFunction, Request, Response } from 'express';
import { ServerError, parseBearerToken } from './ServerUtils';
import LessonExerciseModel from './lesson-exercise/lesson-exercise.model';

/****************** User Middleware */
/** 
 * Everyone can access the API. 
 * If you have a token, it will be added into the req.body 
 */
function PublicMiddleware(req: Request, _, next: NextFunction) {
  // Accept token either via cookie or Bearer token sent via headers
  const authToken: string | undefined = req.cookies.token ?? parseBearerToken(req);

  if (!authToken) {
    next();
  } else {
    jwt.verify(
      authToken,
      appConfig.AUTH.secret,
      {
        algorithms: [appConfig.AUTH.algorithm]
      },
      (err, payload: AuthJWT) => {
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
function PrivateMiddleware(req: Request, res: Response, next: NextFunction) {
  // Accept token either via cookie or Bearer token sent via headers
  const authToken: string | undefined = req.cookies.token ?? parseBearerToken(req);

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
    (err, payload: AuthJWT) => {
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

function UserRoleMiddleware(role: UserRole) {
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
async function SolvableExercise(req: Request, res: Response, next: NextFunction) {
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

export {
  PublicMiddleware,
  PrivateMiddleware,
  UserRoleMiddleware,
  SolvableExercise,
}
