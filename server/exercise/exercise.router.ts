
import express from 'express'

import {
  PublicMiddleware,
  PrivateMiddleware,
  PublicOrOwnExercise,
  OwnExercise
} from '../Middlewares'

import { ServerError } from '../ServerUtils'
import ExerciseController from './exercise.controller'

const exerciseRouter = express.Router()

exerciseRouter.get('/', [PrivateMiddleware], ExerciseController.getUserExercises)

exerciseRouter.get('/solved', [PrivateMiddleware], ExerciseController.getSolvedExercises)

exerciseRouter.get('/:exerciseId', [PublicMiddleware, PublicOrOwnExercise], ExerciseController.getExerciseById)

exerciseRouter.get('/public/:username', [PublicMiddleware], ExerciseController.getPublicUserExercises)

exerciseRouter.post('/', [PrivateMiddleware], ExerciseController.createExercise)

exerciseRouter.post('/media', [PrivateMiddleware], ExerciseController.addMedia)

exerciseRouter.get('/:exerciseId', [PublicOrOwnExercise], ExerciseController.getExercise)

exerciseRouter.put('/:exerciseId', [PrivateMiddleware, OwnExercise], ExerciseController.updateExercise)

exerciseRouter.delete('/:exerciseId', [PrivateMiddleware, OwnExercise], ExerciseController.deleteExercise)

export default exerciseRouter
