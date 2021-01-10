import { NextApiRequest, NextApiResponse } from 'next';
import { authenticated, jsonBody, withMiddlewares } from '~/server/Middlewares';
import ExerciseModel from '~/server/model/exercise.model';

export default withMiddlewares({
  GET: searchExercises,
  POST: withMiddlewares(createExercise, [authenticated, jsonBody]),
});

async function searchExercises(req: NextApiRequest, res: NextApiResponse) {
  let results = await ExerciseModel.getAllPublic();

  try {
    const encodedUserData = await authenticated(req, res);
    results = [
      ...results,
      ...(await ExerciseModel.getOwnExercises(encodedUserData._id)),
    ];
  } catch (err) {
    // User not logged it. Do nothing
  }

  res.json(results);
}

async function createExercise(req: NextApiRequest, res: NextApiResponse) {
  const exercise = await ExerciseModel.create(req.body);
  res.json(exercise);
}
