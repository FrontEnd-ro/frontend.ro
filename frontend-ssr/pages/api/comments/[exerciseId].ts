import MOCK_COMMENTS from './mocks';

export default (req, res) => {
  const { exerciseId } = req.query;
  const comments = MOCK_COMMENTS.filter((item) => item.exerciseId === Number(exerciseId));

  res.statusCode = 200;
  res.json(comments);
};
