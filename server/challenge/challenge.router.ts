import appConfig from '../config';
import Challenge from './challenge.model';
import { PublicMiddleware } from '../Middlewares';
import { ServerError } from '../utils/ServerError';
import express, { Request, Response } from 'express';
import {
  API_ChallengeI,
  API_ChallengeTaskI,
  ChallengeI,
  ChallengeTaskI,
  TypeDefinition
} from '../../shared/types/challenge.types';

const challengeRouter = express.Router();

challengeRouter.get('/:challengeId', [
  PublicMiddleware,
  async function getChallenge(req: Request<{ challengeId: string; }>, res: Response<API_ChallengeI>) {
    const { challengeId } = req.params;
    const challenge = await Challenge.findOne({ challengeId });

    if (challenge === null) {
      new ServerError(404, 'generic.404',  { challengeId }).send(res);
      return;
    }

    res.json(sanitizeChallenge(challenge));
  }
]);

challengeRouter.get('/:challengeId/types', [
  PublicMiddleware,
  async function getChallengeTypes(req: Request<{ challengeId: string; }>, res: Response<TypeDefinition>) {
    const { challengeId } = req.params;
    const challenge = await Challenge.findOne({ challengeId });

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
  async function getStartingCodeForFirstTask(
    req: Request<{ challengeId: string; }>,
    res: Response<{ challengeId: string; startingCode: string; }>
  ) {
    const { challengeId } = req.params;
    const challenge = await Challenge.findOne({ challengeId });

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

function sanitizeChallenge(challenge: ChallengeI): API_ChallengeI {
  return {
    challengeId: challenge.challengeId,
    title: challenge.title,
    tasks: challenge.tasks.map(sanitizeChallengeTask),
    introExplainer: challenge.introExplainer
  }
}

function sanitizeChallengeTask(challengeTask: ChallengeTaskI): API_ChallengeTaskI {
  return {
    taskId: challengeTask.taskId,
    explainer: challengeTask.explainer,
    filesThatCanBeEdited: challengeTask.filesThatCanBeEdited,
    title: challengeTask.title,
    solution: challengeTask.solution,
    startingCode: challengeTask.startingCode,
    startingFile: challengeTask.startingFile
  };
}

export default challengeRouter;
