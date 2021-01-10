/* eslint-disable import/prefer-default-export */
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { connectToDb } from './database';
import { ServerError } from './ServerUtils';
import ExerciseModel from './model/exercise.model';
import { EncodedData } from './model/user.model';

type Middleware = (
  req: NextApiRequest,
  res: NextApiResponse
) => any | Promise<any>;

type Handler = (req: NextApiRequest, res: NextApiResponse) => void;

type RouteConfig = {
  GET?: Handler;
  POST?: Handler;
  PUT?: Handler;
  DELETE?: Handler;
};

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
export function withMiddlewares(
  handlerOrConfig: Handler | RouteConfig,
  middlewares: Middleware[] = [],
): Handler {
  const extendedMiddlewares = typeof handlerOrConfig === 'function'
    ? [...middlewares]
    : [...middlewares, methodExists(handlerOrConfig)];

  /** Connect to DB on all API routes */
  connectToDb();

  return async (req, res) => {
    try {
      for (let i = 0; i < extendedMiddlewares.length; i += 1) {
        /**
         * We want them to be iterative sequencial, as we must make sure that
         * we run the next middleware only if the current one has successfully passed.
         */

        // eslint-disable-next-line no-await-in-loop
        await extendedMiddlewares[i](req, res);
      }

      if (typeof handlerOrConfig === 'function') {
        await handlerOrConfig(req, res);
      } else {
        await handlerOrConfig[req.method](req, res);
      }
    } catch (err) {
      if (err instanceof ServerError) {
        err.send(res);
        return;
      }

      let code = err?.code;
      if (!code && err.name === 'ValidationError') {
        code = 400;
      } else {
        code = 500;
      }

      new ServerError(code, err).send(res);
    }
  };
}

/**
 * Higher order function which takes an API Config and checks whether
 * the method of the current request is configured or not.
 *
 * Throws: 400 Bad Request if it's not
 */
function methodExists(routeConfig: RouteConfig) {
  return function (req: NextApiRequest, res: NextApiResponse) {
    if (!routeConfig[req.method]) {
      const availableMethods = Object.keys(routeConfig);

      res.status(400);
      throw new ServerError(
        400,
        `Method ${
          req.method
        } does not exist on this route. Available methods are ${availableMethods.join(
          ',',
        )}`,
      );
    }
  };
}

export async function authenticated(
  req: NextApiRequest,
  res: NextApiResponse,
) : Promise<EncodedData> {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.auth, process.env.TOKEN_SECRET, (err, decoded: EncodedData) => {
      if (err) {
        reject(new ServerError(401, 'Doar utilizatorii autentificați au acces aici'));
        return;
      }

      resolve(decoded);
    });
  });
}

export function jsonBody(req: NextApiRequest, res: NextApiResponse) {
  if (
    !req.body
    || typeof req.body !== 'object'
    || req.headers['content-type'] !== 'application/json'
  ) {
    throw new ServerError(400, 'Expecting a JSON body on this method');
  }
}

export async function ownExercise(req: NextApiRequest, res: NextApiResponse) {
  const { exerciseId } = req.query;

  const user = await authenticated(req, res);
  const exercise = await ExerciseModel.get(exerciseId);

  if (user._id !== exercise.user.toString()) {
    throw new ServerError(403, 'Only the author of this exercise can view it');
  }
}

export async function publicOrOwnExercise(req: NextApiRequest, res: NextApiResponse) {
  const { exerciseId } = req.query;

  const exercise = await ExerciseModel.get(exerciseId);

  if (exercise?.private) {
    await ownExercise(req, res);
  }
}
