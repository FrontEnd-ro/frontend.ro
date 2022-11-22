import Challenge from './challenge.model';
import { ServerError } from '../ServerUtils';
import { PublicMiddleware } from '../Middlewares';
import express, { Request, Response } from 'express';
import { ChallengeI } from '../../shared/types/challenge.types';

const challengeRouter = express.Router();

challengeRouter.get('/:challengeId', [
  PublicMiddleware,
  async function getAllTutorials(req: Request, res: Response) {
    const { challengeId } = req.params;
    const challenge: ChallengeI = await Challenge.findOne({ challengeId });

    if (challenge === null) {
      new ServerError(404, 'Not Found').send(res);
      return;
    }

    res.json(challenge);
  }
]);

export default challengeRouter;
