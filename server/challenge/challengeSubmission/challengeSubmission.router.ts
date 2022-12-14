import express, { Request, Response } from 'express';
import Challenge from '../challenge.model';
import { ServerError } from '../../ServerUtils';
import { UserI } from '../../../shared/types/user.types';
import { ChallengeI } from '../../../shared/types/challenge.types';
import { PrivateMiddleware, PublicMiddleware } from '../../Middlewares';
import {
  ChallengeSubmission,
  mapFromChallenge,
  sanitize as sanitizeChallengeSubmission,
  mergeChallengeSubmission
} from './challengeSubmission.model';

const challengeSubmissionRouter = express.Router();

challengeSubmissionRouter.get('/:challengeId', [
  // We need to move fast with this feature and launch it before
  // Christmas, thus we're using one API for both authenticated
  // and un-authenticated users, that returns data in the same
  // ChallengeSubmissionI format.
  PublicMiddleware,
  async function getChallengeSubmission(req: Request, res: Response) {
    const { user } = req.body;
    const { challengeId } = req.params;

    const SPAN = `[getChallengeSubmission, challengeId=${challengeId}, username=${user?.username}]`;
    const challenge = await Challenge.findOne({ challengeId });

    const isLoggedIn = user !== undefined;
    if (!isLoggedIn) {
      console.log(`${SPAN} User not logged in. Returning an empty one on the fly.`);
      const challengeSubmission = mapFromChallenge(challenge, null);
      res.json(challengeSubmission);
      return;
    }

    const challengeSubmission = await ChallengeSubmission.findOne({ challengeId, user: user._id.toString() });
    if (challengeSubmission === null) {
      console.log(`${SPAN} No submission for this user. Returning an empty one on the fly.`);
      res.json(mapFromChallenge(challenge, user));
    } else {
      challengeSubmission.user = user;
      res.json(sanitizeChallengeSubmission(mergeChallengeSubmission(challengeSubmission, challenge)));
    }
  }
]);

challengeSubmissionRouter.put('/:challengeId/task/:taskId', [
  PrivateMiddleware,
  async function updateTaskCode(req: Request, res: Response) {
    const { user, code } = req.body;
    const { challengeId, taskId } = req.params;

    if (typeof code !== 'string') {
      new ServerError(400, "Expected to receive a parameter named 'code' with type 'string'.").send(res);
      return;
    }

    const SPAN = `[updateTaskCode, challengeId=${challengeId}, taskId=${taskId}, username=${user?.username}]`;
    try {
      const challenge = await Challenge.findOne({ challengeId });
      if (challenge === null) {
        new ServerError(404, `Challange with ID=${challengeId} not found!`).send(res);
        return;
      }

      let challengeSubmission = await ChallengeSubmission.findOne({
        challengeId,
        user: user._id.toString()
      });

      if (challengeSubmission === null) {
        console.log(`${SPAN} No submission for this user. We'll create one now.`);
        challengeSubmission = await createNewSubmission(challenge.toObject(), user);
      } else {
        console.log(`${SPAN} User already has a submission. Updating it.`);
      }

      const task = challengeSubmission.tasks.find((t) => t.taskId === taskId);
  
      if (task === undefined) {
        new ServerError(404, `Task with id=${taskId} was not found`).send(res);
        return;
      }

      task.codeForFilesThatCanBeEdited = code;
      await challengeSubmission.save();
      
      res.json(sanitizeChallengeSubmission(mergeChallengeSubmission(challengeSubmission, challenge)));
    } catch (err) {
      new ServerError(
        err.code || 500,
        err.message || `Error tying to update code for challengeId=${challengeId} and taskId=${taskId}`,
      ).send(res);
    }
  }
]);


challengeSubmissionRouter.post('/:challengeId/task/:taskId/status', [
  PrivateMiddleware,
  async function submitSolution(req: Request, res: Response) {
    // POST /challenge/:challengeId/task/:taskId/status
    // BODY: { code: string; valid: true | false; error: ... }
  }
]);

async function createNewSubmission(challenge: ChallengeI, user: UserI) {
  const challengeSubmission = mapFromChallenge(challenge, user);
  challengeSubmission.user = user?._id.toString();

  const challengeSubmissionDoc = await new ChallengeSubmission(challengeSubmission).populate('user');
  await challengeSubmissionDoc.save();

  return challengeSubmissionDoc;
}

export default challengeSubmissionRouter;
