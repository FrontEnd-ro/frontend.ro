import  ChallengeModel from './challenge.model';
import  EmailService from '../Email.service';
import  { ServerError } from '../ServerUtils';
import { Request, Response } from 'express'


export default class ChallengeController{
  static async getProgress(req:Request, res:Response) {
    const { user } = req.body;
    const { challengeId } = req.params;
  
    try {
      const { lastDoneTask, meta } = await ChallengeModel.getLastDoneTaskForUser(challengeId, user._id.toString());
  
      res.json({
        meta,
        lastDoneTask,
      });
    } catch (err) {
      new ServerError(err.code || 500, err.message || 'Ooops, something went wrong!').send(res);
    }
  }

  static async startChallenge(req:Request, res:Response) {
    const { user } = req.body;
    const { challengeId } = req.params;
  
    try {
      await ChallengeModel.addParticipant(challengeId, user._id.toString());
      const lastDoneTask = await ChallengeModel.getLastDoneTaskForUser(challengeId, user._id.toString());
  
      res.json({
        lastDoneTask
      });
    } catch (err) {
      new ServerError(err.code || 500, err.message || 'Ooops, something went wrong!').send(res);
    }
  }



  static async putDoneTask(req:Request, res:Response) {
    const { user, meta } = req.body;
    const { challengeId, lastDoneTask } = req.params;
  
    try {
      await ChallengeModel.setLastDoneTask(challengeId, user._id.toString(), lastDoneTask, meta);
  
      // This is pretty useless but nevertheless
      // return the last done task to the user
      res.json({
        meta,
        lastDoneTask,
      });
    } catch (err) {
      new ServerError(err.code || 500, err.message || 'Ooops, something went wrong!').send(res);
    }
  }
}