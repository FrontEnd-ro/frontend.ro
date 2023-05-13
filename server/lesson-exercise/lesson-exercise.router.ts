import express, { Response } from 'express';
import multer from 'multer';
import appConfig from '../config';
import { ServerError } from '../utils/ServerError';
import { UserRole } from '../../shared/types/user.types';
import LessonExerciseModel from './lesson-exercise.model';
import SubmissionModel from '../submission/submission.model';
import { PublicMiddleware, UserRoleMiddleware } from '../Middlewares';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { SubmissionStatus } from '../../shared/types/submission.types';
import { MAX_MEDIA_BYTES } from '../../shared/SharedConstants';

const lessonExerciseRouter = express.Router();

const s3 = new S3Client({ region: appConfig.AWS.region });
const upload = multer({ storage: multer.memoryStorage() });

lessonExerciseRouter.get('/', [PublicMiddleware], async function getAllLessonExercises(req, res) {
  const SPAN = 'getAllLessonExercises()';
  try {
    const result = await LessonExerciseModel.getAll();
    const sanitizedExercises = result.map(LessonExerciseModel.sanitize);
    res.json(sanitizedExercises);
  } catch (err) {
    console.log(SPAN, err);
    new ServerError(500, 'generic.500').send(res);
  }
});

lessonExerciseRouter.get('/:exerciseId', [PublicMiddleware], async function getLessonExercise(req, res) {
  const { exerciseId } = req.params;
  const SPAN = `getLessonExercise(${exerciseId})`;

  try {
    let result = await LessonExerciseModel.get(exerciseId);
    
    if (!result) {
      new ServerError(404, 'generic.404', { exerciseId }).send(res);
      return;
    }
    res.json(LessonExerciseModel.sanitize(result));
  } catch (err) {
    console.log(SPAN, err);
    new ServerError(500, 'generic.500').send(res);
  }
});

lessonExerciseRouter.get('/lesson/:lessonId', [PublicMiddleware], async function getAllExercisesForLesson(req, res) {
  const { lessonId } = req.params;
  const { user } = req.body;
  const SPAN = `getAllExercisesForLesson()`;

  try {
    let exercises = await LessonExerciseModel.getAllFromLesson(lessonId);
    let submissions = [];

    if (user) {
      submissions = await SubmissionModel.getAllUserSubmissions(user._id);
    }

    const result = exercises.map(ex => {
      const submissionMatch = submissions.find(sub => sub.exercise._id.toString() === ex._id.toString());

      return {
        ...LessonExerciseModel.sanitize(ex),
        feedbackCount: submissionMatch?.feedbacks?.length ?? 0,
        isApproved: submissionMatch ? submissionMatch.status === SubmissionStatus.DONE : false
      }
    });

    res.json(result);
  } catch (err) {
    console.error(SPAN, err);
    new ServerError(500, 'generic.500').send(res);
  }
});

// Returns a header named `X-Exercise-Count` so we know how many exercises we have
lessonExerciseRouter.head('/lesson/:lessonId/count', [PublicMiddleware], async function getCountOfExercisesForLesson(req, res: Response) {
  const { lessonId } = req.params;
  const HEADER_NAME = 'X-Exercise-Count';
  const SPAN = `getCountOfExercisesForLesson(${lessonId})`;

  try {
    let count = await LessonExerciseModel.getCount(lessonId);
    res.set(HEADER_NAME, count.toString());
    res.end();
  } catch (err) {
    console.error(SPAN, err);
    new ServerError(500, 'generic.500').send(res);
  }
});

lessonExerciseRouter.post('/', [UserRoleMiddleware(UserRole.ADMIN)], async function createExercise(req, res) {
  const SPAN = `createExercise()`;
  try {
    const exercise = await LessonExerciseModel.create(req.body);
    const sanitizedExercise = LessonExerciseModel.sanitize(exercise);
    res.json(sanitizedExercise);
  } catch (err) {
    console.log(SPAN, err);
    new ServerError(500, 'generic.500').send(res);
  }
})

lessonExerciseRouter.post('/media', [UserRoleMiddleware(UserRole.ADMIN)], function createExercise(req, res) {
  const userId = req.body.user._id;

  upload.single('file')(req, null, async (err) => {
    if (err) {
      console.error('[uploadExerrciseMedia]', err);
      new ServerError(400, 'lesson-exercise.file_failed_upload').send(res);
      return;
    }

    const { name } = req.body;
    const { file } = req;

    if (req.file.size > MAX_MEDIA_BYTES) {
      console.error('[uploadExerrciseMedia]', err);
      new ServerError(400, 'lesson-exercise.file_too_big').send(res);
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
      new ServerError(500, 'generic.500').send(res);
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
    new ServerError(500, 'generic.500').send(res);
  }
})

lessonExerciseRouter.delete('/:exerciseId', [UserRoleMiddleware(UserRole.ADMIN)], async function deleteExercise(req, res) {
  const { exerciseId } = req.params;

  await LessonExerciseModel.delete(exerciseId);
  res.status(200).end();
})

export default lessonExerciseRouter;
