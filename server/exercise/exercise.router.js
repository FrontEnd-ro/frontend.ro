const express = require('express');
const ExerciseModel = require('./exercise.model');
const {
  PublicMiddleware,
  PrivateMiddleware,
  PublicOrOwnExercise,
  OwnExercise
} = require('../Middlewares');

const exerciseRouter = express.Router();


exerciseRouter.get('/', [PublicMiddleware], async function getAllExercises(req, res) {
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
})

exerciseRouter.post('/', [PrivateMiddleware], async function createExercise(req, res) {
  const exercise = await ExerciseModel.create(req.body);
  res.json(exercise);
})

exerciseRouter.get('/:exerciseId', [PublicOrOwnExercise], async function getExercise(req, res) {
  const { exerciseId } = req.params;

  const exercise = await ExerciseModel.get(exerciseId);

  if (!exercise) {
    throw new ServerError(404, `No exercise with id='${exerciseId}' found`);
  } else {
    res.json(exercise);
  }
})

exerciseRouter.post('/:exerciseId', [PrivateMiddleware], async function updateExercise(req, res) {
  const { exerciseId } = req.params;

  const exercise = await ExerciseModel.update(exerciseId, req.body);
  res.json(exercise);
})

exerciseRouter.delete('/:exerciseId', [PrivateMiddleware, OwnExercise], async function deleteExercise(req, res) {
  const { exerciseId } = req.params;

  await ExerciseModel.delete(exerciseId);
  res.status(200).end();
})

module.exports = exerciseRouter;