import express, { Response } from 'express';
const multer = require('multer');
import appConfig from '../config/config';
import { ServerError } from '../ServerUtils';
import { UserRole } from '../../shared/types/user.types';
import LessonExerciseModel from './lesson-exercise.model';
import { PublicMiddleware, UserRoleMiddleware } from '../Middlewares';
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
import { SubmissionStatus } from '../../shared/types/submission.types';
import { MAX_MEDIA_BYTES, MAX_MEDIA_MB } from '../../shared/SharedConstants';

const SubmissionModel = require('../submission/submission.model');

const lessonExerciseRouter = express.Router();

const s3 = new S3Client({ region: appConfig.AWS.region });
const upload = multer({ storage: multer.memoryStorage() });

lessonExerciseRouter.get('/', [PublicMiddleware], async function getAllLessonExercises(req, res) {
  try {
    const result = await LessonExerciseModel.getAll();
    res.json(result);
  } catch (err) {
    new ServerError(err.code, err.message).send(res);
  }
});

lessonExerciseRouter.get('/:exerciseId', [PublicMiddleware], async function getLessonExercise(req, res) {
  const { exerciseId } = req.params;

  try {
    let result = await LessonExerciseModel.get(exerciseId);
    
    if (!result) {
      throw (new ServerError(404, 'Acest exercițiu nu există'));
    }
    res.json(result);
  } catch (err) {
    new ServerError(err.code, err.message).send(res);
  }
});

lessonExerciseRouter.get('/lesson/:lessonId', [PublicMiddleware], async function getAllExercisesForLesson(req, res) {
  const { lessonId } = req.params;
  const { user } = req.body;

  try {
    let exercises = await LessonExerciseModel.getAllFromLesson(lessonId);
    let submissions = [];

    if (user) {
      submissions = await SubmissionModel.getAllUserSubmissions(user._id);
    }

    const result = exercises.map(ex => {
      const submissionMatch = submissions.find(sub => sub.exercise._id.toString() === ex._id.toString());

      return {
        ...ex.toObject(),
        feedbackCount: submissionMatch?.feedbacks?.length ?? 0,
        isApproved: submissionMatch ? submissionMatch.status === SubmissionStatus.DONE : false
      }
    });

    res.json(result);
  } catch (err) {
    new ServerError(err.code, err.message).send(res);
  }
});

// Returns a header named `X-Exercise-Count` so we know how many exercises we have
lessonExerciseRouter.head('/lesson/:lessonId/count', [PublicMiddleware], async function getCountOfExercisesForLesson(req, res: Response) {
  const { lessonId } = req.params;
  const HEADER_NAME = 'X-Exercise-Count';

  try {
    let count = await LessonExerciseModel.getCount(lessonId);
    res.set(HEADER_NAME, count.toString());
    res.end();
  } catch (err) {
    new ServerError(err.code, err.message).send(res);
  }
});

lessonExerciseRouter.post('/', [UserRoleMiddleware(UserRole.ADMIN)], async function createExercise(req, res) {
  try {
    const exercise = await LessonExerciseModel.create(req.body);
    const sanitizedExercise = LessonExerciseModel.sanitize(exercise);
    res.json(sanitizedExercise);
  } catch (err) {
    console.log('[createExercise]', err);
    new ServerError(500, err.message || 'Oops! Se pare că nu am putut crea exercițiul.').send(res);
  }
})

lessonExerciseRouter.post('/media', [UserRoleMiddleware(UserRole.ADMIN)], function createExercise(req, res) {
  const userId = req.body.user._id;

  upload.single('file')(req, null, async (err) => {
    if (err) {
      console.error('[uploadExerrciseMedia]', err);
      new ServerError(400, 'Fișierul nu a putut fi încărcat. Încearcă din nou!').send(res);
      return;
    }

    const { name } = req.body;
    const { file } = req;

    if (req.file.size > MAX_MEDIA_BYTES) {
      console.error('[uploadExerrciseMedia]', err);
      new ServerError(400, `Dimensiunea maximă a unui fișier este de ${MAX_MEDIA_MB}MB`).send(res);
      return;
    }

    const Key = `${userId}/${name}`;

    const uploadParams = {
      Bucket: appConfig.AWS.bucket,
      Key,
      Body: file.buffer,
      ACL: 'public-read',
    };

    try {
      await s3.send(new PutObjectCommand(uploadParams));
      res.json({
        name,
        url: `${appConfig.CDN.user_generated}/${Key}`,
      });
    } catch (err) {
      console.log('[s3Upload]', err);
      new ServerError(500, err.message || 'Oops! Se pare că nu am putut încărca fișierele. Încearcă din nou.').send(res);
    }
  });
})

lessonExerciseRouter.put('/:exerciseId', [UserRoleMiddleware(UserRole.ADMIN)], async function updateExercise(req, res) {
  try {
    const { exerciseId } = req.params;
  
    const exercise = await LessonExerciseModel.update(exerciseId, req.body);
    const sanitizedExercise = LessonExerciseModel.sanitize(exercise);
    res.json(sanitizedExercise);
  } catch (err) {
    console.log('[updateExercise]', err);
    new ServerError(500, err.message || 'Oops! Se pare că nu am actualiza exercițiul.').send(res);
  }
})

lessonExerciseRouter.delete('/:exerciseId', [UserRoleMiddleware(UserRole.ADMIN)], async function deleteExercise(req, res) {
  const { exerciseId } = req.params;

  await LessonExerciseModel.delete(exerciseId);
  res.status(200).end();
})

export default lessonExerciseRouter;
