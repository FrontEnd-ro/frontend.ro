import { NextApiRequest, NextApiResponse } from 'next';
import { withMiddlewares } from '~/server/Middlewares';
import ExerciseModel from '~/server/model/exercise.model';
import { ServerError } from '~/server/ServerUtils';
import { ChapterType } from '~/shared-types';

export default withMiddlewares({
  GET: getAllExercises,
  POST: createDummyExercises,
});

async function getAllExercises(req: NextApiRequest, res: NextApiResponse) {
  const all = await ExerciseModel.search();

  res.json(all);
}

async function createDummyExercises(req: NextApiRequest, res: NextApiResponse) {
  const { count } = req.query;

  if (!count) {
    throw new ServerError(400, "'?count=' param is required");
  }

  for (let i = 0; i < +count; i += 1) {
    let index = randomIndex(2);

    let type = ChapterType.HTML;
    if (index === 1) {
      type = ChapterType.CSS;
    } else if (index === 2) {
      type = ChapterType.JS;
    }

    const exercisePayload = {
      type,
      body: 'exercise body',
    };

    try {
      // eslint-disable-next-line no-await-in-loop
      await ExerciseModel.create(exercisePayload);
    } catch (err) {
      console.error(err);
    }
  }

  res.status(200).end();
}

function randomIndex(end) {
  return Math.floor(Math.random() * (end + 1));
}
