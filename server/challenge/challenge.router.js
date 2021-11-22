const express = require('express');

const ChallengeModel = require('./challenge.model');
import EmailService from '../Email.service';
const { ServerError } = require('../ServerUtils');
const { PrivateMiddleware } = require('../Middlewares');

const challengeRouter = express.Router();

challengeRouter.get('/:challengeId', [PrivateMiddleware, async function getProgress(req, res) {
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
}]);

challengeRouter.post('/:challengeId/start', [PrivateMiddleware, async function startChallenge(req, res) {
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
}]);

challengeRouter.put('/:challengeId/lastDoneTask/:lastDoneTask', [PrivateMiddleware, async function putDoneTask(req, res) {
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
}])

module.exports = challengeRouter;