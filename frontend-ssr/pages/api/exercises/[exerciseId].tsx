import { NextApiRequest, NextApiResponse } from 'next';
import { ServerError } from '~/server/ServerUtils';
import {
  authenticated,
  jsonBody,
  ownExercise,
  publicOrOwnExercise,
  withMiddlewares,
} from '~/server/Middlewares';
import ExerciseModel from '~/server/model/exercise.model';

export default withMiddlewares({
  GET: withMiddlewares(getExercise, [publicOrOwnExercise]),
  POST: withMiddlewares(updateExercise, [authenticated, jsonBody]),
  DELETE: withMiddlewares(deleteExercise, [ownExercise]),
});

async function getExercise(req: NextApiRequest, res: NextApiResponse) {
  const { exerciseId } = req.query;

  const exercise = await ExerciseModel.get(exerciseId);

  if (!exercise) {
    throw new ServerError(404, `No exercise with id='${exerciseId}' found`);
  } else {
    res.json(exercise);
  }
}

async function updateExercise(req: NextApiRequest, res: NextApiResponse) {
  const { exerciseId } = req.query;

  const exercise = await ExerciseModel.update(exerciseId as string, req.body);
  res.json(exercise);
}

async function deleteExercise(req: NextApiRequest, res: NextApiResponse) {
  const { exerciseId } = req.query;

  await ExerciseModel.delete(exerciseId);
  res.status(200).end();
}
