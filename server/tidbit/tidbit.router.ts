import express, { Request, Response } from 'express';
import Tidbit from './tidbit.model';
import { PublicMiddleware } from '../Middlewares';
import { TidbitI } from '../../shared/types/tidbit.types';

const tidbitRouter = express.Router();

tidbitRouter.get('/', [
  PublicMiddleware,
  async function getAllTutorials(req: Request, res: Response) {
    const tidbits: TidbitI[] = await Tidbit.find();

    res.json(tidbits);
  }
]);

export default tidbitRouter;
