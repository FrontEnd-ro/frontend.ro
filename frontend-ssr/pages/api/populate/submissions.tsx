import { NextApiRequest, NextApiResponse } from 'next';
import { withMiddlewares } from '~/server/Middlewares';
import UserModel from '~/server/model/user.model';
import SubmissionModel from '~/server/model/submissions.model';
import { ServerError } from '~/server/ServerUtils';
import ExerciseModel from '~/server/model/exercise.model';

export default withMiddlewares({
  POST: createDummySubmissions,
});

async function createDummySubmissions(req: NextApiRequest, res: NextApiResponse) {
  const { count } = req.query;

  if (!count) {
    throw new ServerError(400, "'?count=' param is required");
  }

  const users = await UserModel.search();
  const exercises = await ExerciseModel.search();

  for (let i = 0; i < +count; i += 1) {
    const userIndex = randomIndex(users.length - 1);
    const exerciseIndex = randomIndex(exercises.length - 1);

    const submissionPayload = {
      user: users[userIndex]._id,
      exercise: exercises[exerciseIndex]._id,
      code: 'code',
    };

    try {
      // eslint-disable-next-line no-await-in-loop
      await SubmissionModel.create(submissionPayload);
    } catch (err) {
      console.error(err);
    }
  }

  res.status(200).end();
}

function randomIndex(end) {
  return Math.floor(Math.random() * (end + 1));
}
