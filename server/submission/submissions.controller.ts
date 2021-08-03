import  { SubmissionStatus } from '../../shared/SharedConstants';
import  { ServerError } from '../ServerUtils';
import  UserModel from '../user/user.model';
import  SubmissionModel from './submission.model';
import {Request,Response} from 'express'

class SubmissionController{
  static async getSubmissions(req:Request,res:Response) {
    const { page, query } = req.query;
    const results = await SubmissionModel.search(+page, query.toString());
  
    res.json(results);
  }

  static async getSubmission(req:Request,res:Response) {
    const { submissionId } = req.params;
  
    try {
      const submission = await SubmissionModel.get(submissionId);
      if (!submission) {
        new ServerError(404, `No submission with id='${submissionId}' found`).send(res);
      } else {
        res.json(submission);
      }
    } catch (err) {
      new ServerError(400, err.message).send(res);
    }
  
  }

  static async getSubmissionByExercise(req:Request,res:Response) {
    const { exerciseId } = req.params;
    const { user } = req.body;
  
    try {
      const submission = await SubmissionModel.getByExerciseId(user._id, exerciseId);
      if (!submission) {
        new ServerError(404, `No submission for exercise='${exerciseId}' found`).send(res);
        return;
      } else {
        res.json(submission);
      }
    } catch (err) {
      console.log("[API][getSubmissionByExercise]", err);
      new ServerError(err.code, err.message).send(res);
    }
  }

  static async getUserSubmission(req:Request,res:Response) {
    const { username, exerciseId } = req.params;
    const { user } = req.body;
  
    try {
      const targetUser = await UserModel.getUser({ username });
  
      if (!targetUser) {
        new ServerError(404, `User '${username}' doesn't exist.`).send(res);
      }
  
      const submission = await SubmissionModel.getUserSubmission(targetUser._id, exerciseId);
  
      if (!submission) {
        new ServerError(404, `No submission for exercise='${exerciseId}' found`).send(res);
        return;
      } else {
        res.json(submission);
      }
    } catch (err) {
      console.log("[API][getSubmissionByExercise]", err);
      new ServerError(err.code, err.message).send(res);
    }
  }

  static async createSubmission(req:Request,res:Response) {
    const submission = await SubmissionModel.create(req.body);
    res.json(submission);
  }

  static async approveSubmission(req:Request,res:Response) {
    const { submissionId } = req.params;
    const { feedbacks } = req.body;
  
    try {
      const submission = await SubmissionModel.get(submissionId);
  
      if (!submission) {
        throw new ServerError(404, 'Nu am găsit nici o submisie cu acest id');
      }
  
      if (submission.status !== SubmissionStatus.AWAITING_REVIEW) {
        throw new ServerError(400, 'Poți aproba doar submisii ce așteaptă feedback-ul tău.');
      }
  
      await SubmissionModel.update(submissionId, {
        status: SubmissionStatus.DONE,
        feedbacks
      });
  
      res.status(200).send();
    } catch (err) {
      console.log("[API][approveSubmission]", err);
      new ServerError(err.code, err.message).send(res);
    }
  }

  static async approveSubmissionFeedback(req:Request,res:Response) {
    const { submissionId } = req.params;
    const { feedbacks } = req.body;
  
    try {
      const submission = await SubmissionModel.get(submissionId);
  
      if (!submission) {
        throw new ServerError(404, 'Nu am găsit nici o submisie cu acest id');
      }
  
      if (submission.status !== SubmissionStatus.AWAITING_REVIEW) {
        throw new ServerError(400, 'Poți da feedback doar las submisii ce așteaptă feedback-ul tău.');
      }
  
      await SubmissionModel.update(submissionId, {
        status: SubmissionStatus.IN_PROGRESS,
        feedbacks
      });
  
      res.status(200).send();
    } catch (err) {
      console.log("[API][approveSubmission]", err);
      new ServerError(err.code, err.message).send(res);
    }
  }

  static async updateSubmission(req:Request,res:Response) {
    const { submissionId } = req.params;
    const { user, payload } = req.body;
  
    try {
      const submission = await SubmissionModel.get(submissionId);
      if (submission.user._id.toString() !== user._id.toString()) {
        new ServerError(401, 'Nu poți actualiza submisiile altcuiva').send(res);
        return;
      }
  
      await SubmissionModel.update(submission._id, payload);
      const updatedSubmission = await SubmissionModel.get(submissionId);
  
      res.json(updatedSubmission);
    } catch (err) {
      console.error("[API][put.updateSubmission]", err);
      new ServerError(err.code, err.message).send(res);
    }
  
  }

  static async submitSolution(req:Request,res:Response) {
    const { exerciseId } = req.params;
    const { code, user } = req.body;
  
    const existingSubmission = await SubmissionModel.getByExerciseId(user._id, exerciseId);
    let updatedSubmission;
  
    if (!existingSubmission) {
      console.log("[submitSolution] First solution for this exercise. Let's create it");
      await SubmissionModel.create({
        code,
        user: user._id,
        exercise: exerciseId,
        status: SubmissionStatus.AWAITING_REVIEW
      })
      updatedSubmission = await SubmissionModel.getByExerciseId(user._id, exerciseId);
    } else {
      console.log("[submitSolution] Existing solution for this exercise. Let's update it");
      await SubmissionModel.update(existingSubmission._id, {
        code,
        status: SubmissionStatus.AWAITING_REVIEW,
      });
      updatedSubmission = await SubmissionModel.get(existingSubmission._id);
    }
  
    res.json(updatedSubmission);
  }

  static async markFeedbackAsDone(req:Request,res:Response) {
    const { feedbackId } = req.params;
    const {user} = req.body;
  
    try {
      const allUserSubmissions = await SubmissionModel.getAllUserSubmissions(user._id);
  
      // FIXME: optimize this to send the submissionId in the request
      const match = allUserSubmissions.find(sub => sub.feedbacks.find(f => f._id.toString() === feedbackId) !== undefined);
  
      if (!match) {
        console.log(`[API][delete.markFeedbackAsDone] No feedback with id ${feedbackId} found`);
        throw new ServerError(404, `Nu am gasit feedback-ul asta.`);
      }
  
      if (match.status !== SubmissionStatus.IN_PROGRESS) {
        throw new ServerError(400, 'Submisia așteaptă feedback. Până atunci nu o poți edita');
      }
  
      const newFeedbacks = match.feedbacks.filter(f => f._id.toString() !== feedbackId);
      await SubmissionModel.update(match._id, {
        feedbacks: newFeedbacks
      });
  
      res.status(200).send();
    } catch(err) {
      console.error("[API][delete.markFeedbackAsDone]", err);
      new ServerError(err.code, err.message).send(res);
    }
  }

  static async deleteSubmission(req:Request,res:Response) {
    const { submissionId } = req.query;
    await SubmissionModel.delete(submissionId.toString());
    res.status(200).end();
  }

}


export default SubmissionController