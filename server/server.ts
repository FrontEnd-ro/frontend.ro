import next from 'next';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { connectToDb } from './database';

require('dotenv').config();
import appConfig from './config';

/** API routers */
import userRouter from './user/user.router';
import submissionRouter from './submission/submission.router';
import demoRouter from './demo.router';
import eventRouter from './event/event.router';
import githubRouter from './github/github.router';
import lessonRouter from './lesson/lesson.router';
import presentationRouter from './presentation/presentation.router';
import applicationConfigRouter from './application-config/application-config.router';
import passwordResetRouter from './password-reset/password-reset.router';
import notificationRouter from './notification/notification.router';
import certificationRouter from './certification/certification.router';
import tutorialRouter from './tutorial/tutorial.router';
import tidbitRouter from './tidbit/tidbit.router';
import challengeRouter from './challenge/challenge.router';
import challengeSubmissionRouter from './challenge/challengeSubmission/challengeSubmission.router';
import { adminSubmissionRouter } from './submission/admin-submission.router';
import lessonExerciseRouter from './lesson-exercise/lesson-exercise.router';
import subscriberRouter from './subscribe/subscribe.router';

const port = appConfig.APP.port || appConfig.APP.default_port;
const app = express();

app.use(
  cors({
    credentials: true,
    origin(origin, callback) {
      // If origin is undefined, it means that the request comes from the same server
      // or from some tool like Postman. Thus, we want to allow these situations.
      if (origin === undefined || appConfig.APP.allowed_origins.includes(origin)) {
        return callback(null, true);
      }

      callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
  })
);

app.use(compression());
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());

app.use('/_next', express.static('/../dist'));

/** API routers */
app.use('/api/auth', userRouter);
app.use('/api/lesson-exercises', lessonExerciseRouter);
app.use('/api/submissions', submissionRouter);
app.use('/api/admin-submissions', adminSubmissionRouter);
app.use('/api/demo', demoRouter);
app.use('/api/events', eventRouter);
app.use('/api/github', githubRouter);
app.use('/api/challenges', challengeRouter);
app.use('/api/challenge-submissions', challengeSubmissionRouter);
app.use('/api/lessons', lessonRouter);
app.use('/api/presentations', presentationRouter);
app.use('/api/application-config', applicationConfigRouter);
app.use('/api/password-reset', passwordResetRouter);
app.use('/api/notifications', notificationRouter);
app.use('/api/certifications', certificationRouter);
app.use('/api/tutorials', tutorialRouter);
app.use('/api/tidbits', tidbitRouter);
app.use('/api/subscribe', subscriberRouter);

connectToDb()
  .catch(err => {
    console.error('[connectToDB]', err);
    throw true;
  })
  .then(() => {
    if (process.env.NODE_ENV !== "development") {
      const nextApp = next({ dev: false });
      const nextHandler = nextApp.getRequestHandler();
      app.get("*", (req, res) => {
        // @ts-ignore
        // TODO: fix typing for req.url
        nextHandler(req, res, req.url);
      });
      nextApp.prepare();
    }
  })
  .catch(err => {
    console.error('[nextApp.prepare]', err);
    throw true;
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on localhost:${port}`);
    })
  })
  .catch(() => console.log('Server failed to start.'))
