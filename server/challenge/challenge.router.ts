import  express from 'express';
import  { PrivateMiddleware } from '../Middlewares';
import ChallengeController from './challenge.controller'

const challengeRouter = express.Router();

challengeRouter.get('/:challengeId', PrivateMiddleware, ChallengeController.getProgress);

challengeRouter.post('/:challengeId/start', PrivateMiddleware,  ChallengeController.startChallenge);

challengeRouter.put('/:challengeId/lastDoneTask/:lastDoneTask', PrivateMiddleware,  ChallengeController.putDoneTask)

export default challengeRouter;