import MOCK_EXERCISES from './mocks';

export default (req, res) => {
  const exerciseId = Number(req.query.exerciseId);
  const exercise = MOCK_EXERCISES.find((item) => item.id === exerciseId);

  if (exerciseId === 0) {
    res.statusCode = 500;
    return res.end();
  }

  if (!exercise) {
    res.statusCode = 404;
    return res.end();
  }

  res.statusCode = 200;
  return res.json(exercise);
};
