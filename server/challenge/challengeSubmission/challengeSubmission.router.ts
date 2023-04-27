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
import FolderStructure from '../../../shared/utils/FolderStructure';
import UserModel from '../../user/user.model';
import { ChallengeSubmissionI } from '../../../shared/types/challengeSubmissions.types';
import { Certification } from '../../certification/certification.model';

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

    if (challenge === null) {
      new ServerError(404, "No challenge found").send(res);
      return;
    }

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

      // Make sure that `code` variable only contains data for
      // the Files that can be edited.
      const { filesThatCanBeEdited } = challenge
        .tasks
        .find((t) => t.taskId === taskId);
      if (!doFilesMatch(filesThatCanBeEdited, code)) {
        new ServerError(400, 'You can only edit certain files for tihs task.').send(res);
        return;
      }

      let challengeSubmission = await ChallengeSubmission.findOne({
        challengeId,
        user: user._id.toString()
      }).populate('user');

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

      if (task.status?.valid === true) {
        new ServerError(403, 'Acest task e deja completat cu succes. Nu-l mai poți modifica.').send(res);
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
    const { user, code } = req.body;
    const { challengeId, taskId } = req.params;

    const SPAN = `[submitSolution, challengeId=${challengeId}, taskId=${taskId}, username=${user.username}]`;

    try {
      const challenge = await Challenge
        .findOne({ challengeId })
        .orFail(new ServerError(404, `Challange with ID=${challengeId} not found!`));
      let challengeTask = challenge.tasks.find((t) => t.taskId === taskId);

      let challengeSubmission = await ChallengeSubmission.findOne({
        challengeId,
        user: user._id.toString()
      }).populate('user');

      if (challengeSubmission === null) {
        console.log(`${SPAN} No submission for this user. We'll create one now.`);
        challengeSubmission = await createNewSubmission(challenge.toObject(), user);
      }

      let submissionTask = challengeSubmission.tasks.find((t) => t.taskId === taskId);
      if (submissionTask === undefined) {
        new ServerError(404, `No task found for user=${user.username}, challengeId=${challengeId} and taskId=${taskId}`).send(res);
        return;
      }

      if (submissionTask.status?.valid === true) {
        new ServerError(400, `Task with id=${taskId} for user=${user.username} and challengeId=${challengeId} is already approved.`).send(res);
        return;
      }

      if (!doFilesMatch(challengeTask.filesThatCanBeEdited, code)) {
        new ServerError(400, 'You can only edit certain files for tihs task.').send(res);
        return;
      }

      // If everything checks out, we can verify this solution.
      submissionTask.codeForFilesThatCanBeEdited = code;
      submissionTask.status = {
        valid: true
      };

      await challengeSubmission.save();

      res.json(sanitizeChallengeSubmission(mergeChallengeSubmission(challengeSubmission, challenge)));

      try {
        maybeCreateCertification(challengeId, user._id.toString());
      } catch (err) {
        console.error(`${SPAN} Something went wrong when persisting the certification.`);
      }
    } catch (err) {
      new ServerError(
        err.code || 500,
        err.message || `Error tying to submit sollution for challengeId=${challengeId} and taskId=${taskId}`,
      ).send(res);
    }
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

/**
 * Checks whether the code contains only files with ids from "fileIds".
 * @param fileIds A list of IDs for files that can be edited
 * @param code A stringified FolderStructure class
 */
function doFilesMatch(fileIds: string[], code: string) {
  const codeFolderStructure = new FolderStructure(JSON.parse(code));
  const result = codeFolderStructure
    .getFilesWithPath()
    .every((file) => fileIds.includes(file.key));

  return result;
}


/************** TODO: unify the implementation here and the one for the regular "tutorials" */

/**
 * Verify that the user has successfully completed all tasks in this challenge.
 * > if yes: persist certification in the DB
 * > if not: do nothing
 * @param challengeId string
 * @param userId string
 * @param dryRun boolean - whether to actually perform the tasks, or simply to log the result, without any side effects
 * @returns 
 */
export async function maybeCreateCertification(
  challengeId: string,
  userId: string,
  dryRun = false,
) {

  const SPAN = `[maybeCreateCertification, challengeId=${challengeId}, userId=${userId}, dryRun=${dryRun}]`;
  let challenge = await Challenge.findOne({ challengeId });
  let challengeSubmission = await ChallengeSubmission
    .findOne({ challengeId, user: userId });

  if (challengeSubmission === null) {
    console.info(`${SPAN} Challenge not found.`);
    return;
  }

  const user: UserI = await UserModel.findUserBy({ _id: userId});
  if (user === null) {
    console.info(`${SPAN} User not found.`);
    return;
  }

  const didFinishAllTasks = challengeSubmission.tasks.every((task) => task.status?.valid === true);
  if (!didFinishAllTasks) {
    console.log(`${SPAN} Not all tasks are finished.`);
    return;
  }

  if (dryRun === true) {
    console.log(`${SPAN} Skipping creating the certification.`);
    return;
  }

  await storeCertificationData(challenge, user._id.toString(), dryRun);
}


/**
 * Create or Update (if already exists) certification information into the Database.
 * @param challenge ChallengeSubmissionI
 * @param userId string
 * @param dryRun boolean - whether to actually perform the tasks, or simply to log the result, without any side effects
 * @returns Persisted Certification
 */
async function storeCertificationData(
  challenge: ChallengeI,
  userId: string,
  dryRun = false
) {
  const SPAN = `[storeCertificationData, userId=${userId}, challengeId=${challenge._id}, dryRun=${dryRun}]`;

  let certification = await Certification.findOne({ challenge: challenge._id, user: userId });
  if (certification !== null) {
    console.info(`${SPAN} Certification already exists. We'll update it!`)
    certification.timestamp = Date.now();
  } else {
    certification = new Certification({
      challenge: challenge._id,
      user: userId,
      timestamp: Date.now(),
      lesson_exercises: [],
    });
  }

  if (dryRun === true) {
    console.info(`${SPAN} Skipping persistance.`);
  } else {
    certification = await certification.save();
    console.info(`${SPAN} successfully persisted certification.`);
  }

  return certification;
}

