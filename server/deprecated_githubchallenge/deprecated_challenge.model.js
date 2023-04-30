/* eslint-disable camelcase */
const mongoose = require('mongoose');
const { ServerError } = require('../utils/ServerError');

const ChallengeParticipantSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // Can be null -> if he just started
    lastDoneTask: { type: String, required: true },
    // Each task may have it's own special Metadata
    // Not used for now but something to keep in mind
    meta: {
      type: Object
    }
  }, {
  timestamps: {
    createdAt: 'submittedAt',
    updatedAt: 'updatedAt',
  },
})

const ChallengeSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },

  // Have a list of task ids that server 2 purposes
  //    > by using "lastDoneTask" we know how many has the user completed
  //    > if later we decide to add/remove tasks, we'll know which users we need to notify and how
  tasks: [{ type: String, required: true, unique: true }],
  participants: [{ type: ChallengeParticipantSchema, required: true }],
});

const Challenge = mongoose.models.DeprecatedChallenge || mongoose.model('DeprecatedChallenge', ChallengeSchema);
const ChallengeParticipant = mongoose.models.ChallengeParticipant || mongoose.model('DeprecatedChallengeParticipant', ChallengeParticipantSchema);

class ChallengeModel {
  static getById(id) {
    return Challenge.findOne({ id });
  }

  static getByIdWithParticipants(id) {
    return Challenge
      .findOne({ id })
      .populate({
        path: 'participants',
        populate: {
          path: 'user'
        }
      });
  }

  static async addParticipant(challengeId, userId) {
    const challenge = await ChallengeModel.getByIdWithParticipants(challengeId);
    if (!challenge) {
      throw new ServerError(400, `Nu există challenge-ul cu id=${challengeId}`);
    }

    const alreadyExists = challenge
      .participants
      .find(participant => participant.user._id.toString() === userId) !== undefined;
    if (alreadyExists) {
      throw new ServerError(400, `Userul ${userId} a început deja taskul ${challengeId}`);
    }

    challenge.participants.push({
      user: userId,
      lastDoneTask: challenge.tasks[0]
    })

    return saveChallenge(challenge);
  }

  static async setLastDoneTask(challengeId, userId, lastDoneTask, meta) {
    const challenge = await ChallengeModel.getByIdWithParticipants(challengeId);
    if (!challenge) {
      throw new ServerError(404, `Nu există challenge-ul cu id=${challengeId}`);
    }

    if (!challenge.tasks.find(task => task === lastDoneTask)) {
      throw new ServerError(404, `Nu există taskul cu id=${lastDoneTask}`);
    }

    const participant = challenge
      .participants
      .find(participant => participant.user._id.toString() === userId);

    if (!participant) {
      throw new ServerError(404, `Nu există participantul cu id=${userId}`);
    }

    participant.lastDoneTask = lastDoneTask;
    participant.meta = meta || null;

    return saveChallenge(challenge);
  }

  static async getLastDoneTaskForUser(challengeId, userId) {
    const challenge = await ChallengeModel.getByIdWithParticipants(challengeId);
    if (!challenge) {
      throw new ServerError(404, `Nu există challenge-ul cu id=${challengeId}`);
    }

    const participant = challenge
      .participants
      .find(participant => participant.user._id.toString() === userId);

    if (!participant) {
      return {
        meta: null,
        lastDoneTask: null,
      }
    }

    // Returns a String with the last done task
    return {
      meta: participant.meta,
      lastDoneTask: participant.lastDoneTask,
    }
  }
}

function saveChallenge(challenge) {
  return challenge.save();
}

module.exports = ChallengeModel;