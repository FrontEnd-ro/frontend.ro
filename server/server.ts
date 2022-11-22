const next = require('next')
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { connectToDb } = require('./database');

require('dotenv').config();
import appConfig from './config';

/** API routers */
const userRouter = require('./user/user.router');
const exerciseRouter = require('./exercise/exercise.router');
const submissionRouter = require('./submission/submission.router');
const lessonExerciseRouter = require('./lesson-exercise/lesson-exercise.router');
const demoRouter = require('./demo.router');
const eventRouter = require('./event/event.router');
const githubRouter = require('./github/github.router.js');
const lessonRouter = require('./lesson/lesson.router');
const presentationRouter = require('./presentation/presentation.router');
const applicationConfigRouter = require('./application-config/application-config.router');
const passwordResetRouter = require('./password-reset/password-reset.router');
import notificationRouter from './notification/notification.router';
import certificationRouter from './certification/certification.router';
import tutorialRouter from './tutorial/tutorial.router';
import tidbitRouter from './tidbit/tidbit.router';
import challengeRouter from './challenge/challenge.router';

const port = appConfig.APP.port || appConfig.APP.default_port;
const app = express();
const nextApp = next({ dev: process.env.NODE_ENV === 'development' })
const nextHandler = nextApp.getRequestHandler()

app.use(
  cors({
    credentials: true,
    origin: appConfig.APP.env === 'production'
      ? appConfig.APP.app_url
      : 'http://localhost:3300'
  })
);

app.use(compression());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());


app.use(express.static('client/public'));
app.use('/_next', express.static('/../dist'));

/** API routers */
app.use('/api/auth', userRouter);
app.use('/api/exercises', exerciseRouter);
app.use('/api/lesson-exercises', lessonExerciseRouter);
app.use('/api/submissions', submissionRouter);
app.use('/api/demo', demoRouter);
app.use('/api/events', eventRouter);
app.use('/api/github', githubRouter);
app.use('/api/challenges', challengeRouter);
app.use('/api/lessons', lessonRouter);
app.use('/api/presentations', presentationRouter);
app.use('/api/application-config', applicationConfigRouter);
app.use('/api/password-reset', passwordResetRouter);
app.use('/api/notifications', notificationRouter);
app.use('/api/certifications', certificationRouter);
app.use('/api/tutorials', tutorialRouter);
app.use('/api/tidbits', tidbitRouter);

app.get('*', (req, res) => {
  nextHandler(req, res, req.url);
});

connectToDb()
  .catch(err => {
    console.error('[connectToDB]', err);
    throw true;
  })
  .then(() => nextApp.prepare())
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
