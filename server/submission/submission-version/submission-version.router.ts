import express, { Request, Response } from 'express';
import { ServerError } from '../../ServerUtils';
import { PrivateMiddleware } from '../../Middlewares';
import { SubmissionVersion } from './submission-version.model';
import { UserRole } from '../../../shared/types/user.types';

const SubmissionModel = require('../submission.model');

const submissionVersionRouter = express.Router();

submissionVersionRouter.get('/:submissionId', [
  /**
   * By default you need to be authenticated to get the versions of a submission.
   * But we also need to make sure the user querying this is either.
   * 1. An admin
   * 2. The user who sent the submission
   */
  PrivateMiddleware,
  async function getAllVersionsForSubmission(req: Request, res: Response) {
    const { submissionId } = req.params;
    const { user } = req.body;

    const submission = await SubmissionModel.get(submissionId);

    if (submission === null) {
      new ServerError(404, `Nu există nici o submisie cu ID=${submissionId}`).send(res);
      return;
    }

    if (submission.user._id.toString() !== user._id.toString() && user.role !== UserRole.ADMIN) {
      new ServerError(403, "Doar adminii sau owner-ul exercițiului poate să citească versiunile unei submisii.").send(res);
      return;
    }

    try {
      const versions = await SubmissionVersion.find({ submission: submissionId }).sort('-createdAt');
      res.json(versions);
    } catch (err) {
      console.error("[submissionVersionRouter.getAllVersionsForSubmission]", err);
      new ServerError(500, 'Eroare la încărcarea versiunilor...').send(res);
    }
  }
]);

export default submissionVersionRouter;
