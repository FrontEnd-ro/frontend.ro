const next = require('next')
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { connectToDb } = require('./database');
const { default: sslRedirect } = require('heroku-ssl-redirect');

require('dotenv').config();

/** API routers */
const userRouter = require('./user/user.router');
const exerciseRouter = require('./exercise/exercise.router');
const submissionRouter = require('./submission/submission.router');
const lessonExerciseRouter = require('./lesson-exercise/lesson-exercise.router');
const demoRouter = require('./demo.router');
const eventRouter = require('./event/event.router');
const githubRouter = require('./github/github.router.js');
const challengeRouter = require('./challenge/challenge.router.js');
const lessonRouter = require('./lesson/lesson.router');
const presentationRouter = require('./presentation/presentation.router');
const applicationConfigRouter = require('./application-config/application-config.router');

const port = process.env.PORT || 3300;
const app = express();
const nextApp = next({ dev: process.env.NODE_ENV !== 'production' })
const nextHandler = nextApp.getRequestHandler()

app.use(
  cors({
    credentials: true,
    origin: process.env.APP_ENV === 'production'
      ? 'https://frontend.ro'
      : 'http://localhost:3300'
  })
);


app.use(sslRedirect());
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
