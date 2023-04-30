import appConfig from '../config';
import Challenge from './challenge.model';
import { PublicMiddleware } from '../Middlewares';
import { ServerError } from '../utils/ServerError';
import express, { Request, Response } from 'express';
import { ChallengeI } from '../../shared/types/challenge.types';

const challengeRouter = express.Router();

challengeRouter.get('/:challengeId', [
  PublicMiddleware,
  async function getChallenge(req: Request, res: Response) {
    const { challengeId } = req.params;
    const challenge: ChallengeI = await Challenge.findOne({ challengeId });

    if (challenge === null) {
      new ServerError(404, 'generic.404',  { challengeId }).send(res);
      return;
    }

    res.json(challenge);
  }
]);

challengeRouter.get('/:challengeId/types', [
  PublicMiddleware,
  async function getChallengeTypes(req: Request, res: Response) {
    const { challengeId } = req.params;
    const challenge: ChallengeI = await Challenge.findOne({ challengeId });

    if (challenge === null) {
      new ServerError(404, 'generic.404', { challengeId }).send(res);
      return;
    }

    // We need to fetch it here. Otherwise we end up with CORS issues
    // TODO: correctly configure CORS headers for these types of Objects
    const resp = await fetch(`${appConfig.CDN.user_generated}/monaco-types/${challengeId}_${challenge._id}.json`);
    const jsonResp = await resp.json();

    res.json(jsonResp);
  }
]);

challengeRouter.get('/:challengeId/startingCode', [
  PublicMiddleware,
  async function getStartingCodeForFirstTask(req: Request, res: Response) {
    const { challengeId } = req.params;
    const challenge: ChallengeI = await Challenge.findOne({ challengeId });

    if (challenge === null) {
      new ServerError(404, 'generic.404', { challengeId }).send(res);
      return;
    }

    res.json({
      challengeId,
      startingCode: challenge.tasks[0].startingCode
    });
  }
]);

export default challengeRouter;
