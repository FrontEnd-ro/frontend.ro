/* eslint-disable import/prefer-default-export */
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from './database';
import { ServerError } from './ServerUtils';
import {verify} from "jsonwebtoken"

type Middleware = (
  req: NextApiRequest,
  res: NextApiResponse
) => void | Promise<void>;

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


export async function check_auth (req: NextApiRequest, res: NextApiResponse){
  // console.log(req.cookies)
  try{
  let jwt_valid=await verify(req.cookies.auth,process.env.TOKEN_SECRET)
  req.role=jwt_valid.user.role;
  }
  catch(err){
      throw new ServerError(401,"You need to be logged in to do that")
}
}