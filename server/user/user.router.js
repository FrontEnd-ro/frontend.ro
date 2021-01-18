const express = require('express');
const bcrypt = require('bcrypt');
import * as postmark from 'postmark';
const UserModel = require('./user.model');
const { ServerError, setTokenCookie } = require('../ServerUtils');

const userRouter = express.Router();

userRouter.get('/check-username/:username', async function checkUsername(req, res) {
  const { username } = req.params;

  const user = await UserModel.findUserBy({ username });

  if (user) {
    res.status(200).end();
  } else {
    new ServerError(404, `Username ${username} is not registered`).send(res);
  }
})

userRouter.get('/ping', async function pingCurrentuser(req, res) {
  const { token } = req.cookies;

  const notAuthenticatedArror = new ServerError(401, 'Not authenticated');

  if (!token) {
    throw notAuthenticatedArror;
  }

  const user = await UserModel.ping(token);

  if (!user) {
    new ServerError(404, 'User doesn\'t exist any more').send(res);
  } else {
    res.json(UserModel.sanitize(user));
  }
})

userRouter.post('/login', async function login(req, res) {
  const { emailOrUsername, password } = req.body;
  const user = await UserModel.getUser({
    email: emailOrUsername,
    username: emailOrUsername,
  });

  if (!user) {
    new ServerError(
      400,
      '⛔ Nu există nici un utilizator cu acest email/username!',
    ).send(res);
    return
  }

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) {
    new ServerError(400, '⛔ Parola e greșită!').send(res);
    return
  }

  // Create and set JTW as cookie
  const token = UserModel.generateJwtForUser(user._id);
  setTokenCookie(token, res);

  res.json(UserModel.sanitize(user));
})

userRouter.post('/register', async function register(req, res) {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    throw new ServerError(
      400,
      '⛔ Nu te poți înregistra fără email, username și parolă!',
    );
  }

  if (!/^.+@.+[.].+$/.test(email)) {
    throw new ServerError(400, '⛔ Nu te poți înregistra fără un email valid!');
  }

  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    throw new ServerError(
      400,
      '⛔ Username-ul poate să conțină doar litere și cifre!',
    );
  }

  const existingUser = await UserModel.getUser({ email, username });
  if (existingUser) {
    throw new ServerError(
      400,
      '⛔ Ai uitat că te-ai înregistrat cu acest email?',
    );
  }

  const hashedPassword = await bcrypt.hash(password, +process.env.SALT_ROUNDS);

  const user = await UserModel.create({
    email,
    username,
    password: hashedPassword,
    avatar: `https://joeschmoe.io/api/v1/${username}`,
  });

  // Create and set JTW as cookie
  const token = UserModel.generateJwtForUser(user._id);
  setTokenCookie(token, res);

  res.json(UserModel.sanitize(user));
})

userRouter.post('/subscribe', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    new ServerError(400, 'Email-ul și numele tău sunt obligatorii!').send(res);
  }

  const alreadyRegistered = await UserModel.findUserBy({ email });
  if (alreadyRegistered) {
    new ServerError(400, 'Ești deja înregistrat ca utilizator!').send(res);
  }

  const alreadySubscribed = await SubscribeModel.exists(email);
  if (alreadySubscribed) {
    new ServerError(400, 'Hmm, încerci să te abonezi încă o data...🤔').send(res);
  }

  await SubscribeModel.subscribe({ name, email });

  if (process.env.NODE_ENV === 'production') {
    try {
      const client = new postmark.ServerClient(process.env.EMAIL_TOKEN);

      await client.sendEmailWithTemplate({
        To: email,
        From: 'hello@frontend.ro',
        TemplateId: Number(process.env.EMAIL_WELCOME_TEMPLATE),
        TemplateModel: {
          name,
          sender_name: 'Păvă',
        },
      });
    } catch (err) {
      console.error('[sendEmailWithTemplate]', err, { name, email });
    }
  }

  res.json({
    name,
    email,
  });
})

module.exports = userRouter