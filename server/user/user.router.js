const express = require('express');
const bcrypt = require('bcrypt');
const multer = require('multer');
import EmailService, { EMAIL_TEMPLATE } from '../Email.service';
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const UserModel = require('./user.model');
const SubscribeModel = require('../subscribe.model');
const PasswordResetModel = require('../password-reset/password-reset.model');
const { ServerError, setTokenCookie, MAX_NAME_LENGTH, MAX_DESCRIPTION_LENGTH } = require('../ServerUtils');
const { PrivateMiddleware } = require('../Middlewares');
const { MAX_MEDIA_MB, MAX_MEDIA_BYTES } = require('../../shared/SharedConstants')
const { default: appConfig } = require('../config');

const userRouter = express.Router();

const s3 = new S3Client({ region: appConfig.AWS.region });
const upload = multer({ storage: multer.memoryStorage() });

userRouter.get('/avatar/:username', async function getDefaultAvatar(req, res) {
  // Previously we were pointing directly to https://joeschmoe.io/ API.
  // However, since the heroku free plans were cancelled, this api failed
  // to work. Thus, we're chaning the endpoint of default avatar to our own,
  // so we have full control in the future and prevent similar situations.
  const { username } = req.params;

  // Thankfully we saved some Schmoes, and we're gonna use these
  // for the default avatars. Below we have a very "dumb" hash function,
  // that links a Username with a Schmoe.
  const schmoes = [
    'adam',
    'jacques',
    'jaqueline',
    'jazebelle',
    'jeri',
    'jodi',
    'joe',
    'jon',
    'jude'
  ];

  const totalCharCode = username
    .split('')
    .reduce((acc, cur) => acc + cur.charCodeAt(0), 0);

  const schmoeIndex = totalCharCode % schmoes.length;
  res.redirect(302, `${appConfig.CDN.static}/schmoes/pngs/${schmoes[schmoeIndex]}.png`);
});

userRouter.get('/check-username/:username', async function checkUsername(req, res) {
  const { username } = req.params;

  const user = await UserModel.findUserBy({ username });

  if (user) {
    res.status(200).end();
  } else {
    new ServerError(404, `Username ${username} is not registered`).send(res);
  }
})

userRouter.get('/ping', [
  PrivateMiddleware,
  async function pingCurrentuser(req, res) {
    const { user } = req.body;
    res.json(UserModel.sanitize(user));
  }
])

userRouter.post('/login', async function login(req, res) {
  let { emailOrUsername, password } = req.body;
  emailOrUsername = emailOrUsername.trim().toLowerCase();


  if (!emailOrUsername || !password) {
    new ServerError(400, 'Email-ul/username-ul și parola sunt obligatorii pentru login').send(res);
    return
  }

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

userRouter.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.status(200).send();
});

userRouter.post('/register', async function register(req, res) {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    new ServerError(400, '⛔ Nu te poți înregistra fără email, username și parolă!').send(res);
    return
  }

  if (!/^.+@.+[.].+$/.test(email)) {
    new ServerError(400, '⛔ Nu te poți înregistra fără un email valid!').send(res);
    return
  }

  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    new ServerError(
      400,
      '⛔ Username-ul poate să conțină doar litere și cifre!',
    ).send(res);
    return
  }

  const existingUser = await UserModel.getUser({ email, username });
  if (existingUser) {
    new ServerError(400, '⛔ Ai uitat că te-ai înregistrat cu acest email?').send(res);
    return;
  }

  const hashedPassword = await bcrypt.hash(password, +appConfig.AUTH.rounds);

  const user = await UserModel.create({
    email,
    username,
    password: hashedPassword,
    avatar: `https://joeschmoe.io/api/v1/${username}`,
  });

  // Create and set JTW as cookie
  const token = UserModel.generateJwtForUser(user._id);
  setTokenCookie(token, res);

  // No "await" here since the email is not
  // critical for the continuation of the flow.
  EmailService.sendTemplateWithAlias(
    email,
    EMAIL_TEMPLATE.REGISTER,
    {
      name: username,
      sender_name: 'Păvă'
    }
  );

  res.json(UserModel.sanitize(user));
})

userRouter.post('/name', [
  PrivateMiddleware,
  async function updateName(req, res) {
    const name = req.body.name.toString().trim();
    const { password, user } = req.body;

    if (name.length === 0) {
      new ServerError(400, 'Numele nu poate fi gol').send(res);
      return;
    }

    if (name.length > MAX_NAME_LENGTH) {
      new ServerError(400, 'Ești cumva extraterestru? Atunci cum de ai un nume mai lung de 255 caractere').send(res);
      return;
    }

    try {
      const updatedUser = await updateUserFields({ _id: user._id, username: user.username, password }, { name });
      res.json(UserModel.sanitize(updatedUser));
    } catch (err) {
      err.send(res); // Err is of type ServerError
    }
  }
]);

userRouter.post('/description', [
  PrivateMiddleware,
  async function updateDescription(req, res) {
    const description = req.body.description.toString().trim();
    const { password, user } = req.body;

    if (description.length === 0) {
      new ServerError(400, 'Descrierea nu poate fi goală').send(res);
      return;
    }

    if (description.length > MAX_DESCRIPTION_LENGTH) {
      new ServerError(400, `Descrierea poate avea maxim ${MAX_DESCRIPTION_LENGTH} caractere.`).send(res);
      return;
    }

    try {
      const updatedUser = await updateUserFields({ _id: user._id, username: user.username, password }, { description });
      res.json(UserModel.sanitize(updatedUser));
    } catch (err) {
      err.send(res); // Err is of type ServerError
    }
  }
]);

userRouter.post('/username', [
  PrivateMiddleware,
  async function updateUsername(req, res) {
    const username = req.body.username.toString().trim();
    const { password, user } = req.body;


    const { result, reason } = UserModel.validateUsername(username);

    if (!result) {
      new ServerError(400, reason).send(res);
      return;
    }

    try {
      const updatedUser = await updateUserFields({ _id: user._id, username: user.username, password }, {
        username,
        avatar: `https://joeschmoe.io/api/v1/${username}`
      });
      res.json(UserModel.sanitize(updatedUser));
    } catch (err) {
      err.send(res); // Err is of type ServerError
    }
  }
]);

userRouter.post('/email', [
  PrivateMiddleware,
  async function updateEmail(req, res) {
    const email = req.body.email.toString().trim();
    const { password, user } = req.body;

    if (email.length === 0) {
      new ServerError(400, 'Email-ul nu poate fi gol').send(res);
      return;
    }

    if (!/^.+@.+[.].+$/.test(email)) {
      new ServerError(400, '⛔ Noul email trebuie să fie valid!').send(res);
      return
    }

    try {
      const updatedUser = await updateUserFields({ _id: user._id, username: user.username, password }, { email });
      res.json(UserModel.sanitize(updatedUser));
    } catch (err) {
      err.send(res); // Err is of type ServerError
    }
  }
]);

userRouter.post('/password', [
  PrivateMiddleware,
  async function updateEmail(req, res) {
    const newPassword = req.body.newPassword.toString().trim();
    const { password, user } = req.body;

    if (newPassword.length === 0) {
      new ServerError(400, 'Noua parolă nu poate fi goală').send(res);
      return;
    }

    const hashedPassword = await bcrypt.hash(newPassword, +appConfig.AUTH.rounds);

    try {
      const updatedUser = await updateUserFields({ _id: user._id, username: user.username, password }, {
        password: hashedPassword
      });
      res.json(UserModel.sanitize(updatedUser));
    } catch (err) {
      err.send(res); // Err is of type ServerError
    }
  }
]);

userRouter.post('/password/reset', async function resetPassword(req, res) {
  try {
    const newPassword = req.body.newPassword.toString().trim();
    const { emailOrUsername, code } = req.body;

    if (newPassword.length === 0) {
      new ServerError(400, 'Noua parolă nu poate fi goală').send(res);
      return;
    }

    const user = await UserModel.getUser({
      email: emailOrUsername,
      username: emailOrUsername,
    });
    if (!user) {
      new ServerError(
        400,
        '⛔ Nu există nici un utilizator cu acest email sau username!',
      ).send(res);
      return
    }

    const isValidResetCode = await PasswordResetModel.validate(user.email, code);

    if (!isValidResetCode) {
      new ServerError(
        400,
        '⛔ Codul pentru resetarea parolei nu este valid sau a expirat.',
      ).send(res);
      return
    }

    const hashedPassword = await bcrypt.hash(newPassword, +appConfig.AUTH.rounds);
    const updatedUser = await UserModel.update(user._id, { password: hashedPassword });

    // Create and set JTW as cookie
    const token = UserModel.generateJwtForUser(user._id);
    setTokenCookie(token, res);

    res.json(UserModel.sanitize(updatedUser));
  } catch (err) {
    console.error('[UserRouter.resetPassword]', err);
    new ServerError(500, err.message || 'Oops! Se pare că nu am putut reseta parola. Încearcă din nou.').send(res);
  }
});

userRouter.post('/avatar', [PrivateMiddleware], function uploadAvatar(req, res) {
  const userId = req.body.user._id;

  upload.single('file')(req, null, async (err) => {
    if (err) {
      console.error('[uploadExerrciseMedia]', err);
      new ServerError(400, 'Fișierul nu a putut fi încărcat. Încearcă din nou!').send(res);
      return;
    }

    const { file } = req;
    const name = `${userId}_${Date.now()}.jpg`;

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
      const newUser = await UserModel.update(userId, {
        avatar: `${appConfig.CDN.user_generated}/${Key}`
      });

      res.json(UserModel.sanitize(newUser));
    } catch (err) {
      console.log('[s3Upload]', err);
      new ServerError(500, err.message || 'Oops! Se pare că nu am putut încărca fișierele. Încearcă din nou.').send(res);
    }
  });
})

userRouter.post('/subscribe', async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    new ServerError(400, 'Email-ul și numele tău sunt obligatorii!').send(res);
    return;
  }

  const alreadyRegistered = await UserModel.findUserBy({ email });
  if (alreadyRegistered) {
    new ServerError(400, 'Ești deja înregistrat ca utilizator!').send(res);
    return;
  }

  const alreadySubscribed = await SubscribeModel.exists(email);
  if (alreadySubscribed) {
    new ServerError(400, 'Hmm, încerci să te abonezi încă o data...🤔').send(res);
    return;
  }

  await SubscribeModel.subscribe({ name, email });

  // No "await" here since the email is not
  // critical for the continuation of the flow.
  EmailService.sendTemplateWithAlias(
    email,
    EMAIL_TEMPLATE.REGISTER,
    {
      name,
      sender_name: 'Păvă'
    }
  );

  res.json({
    name,
    email,
  });
})

userRouter.delete('/', [PrivateMiddleware], async function deleteAccount(req, res) {
  const { user, password } = req.body;

  const areCredentialsOk = await UserModel.verify(user.username, password);

  if (!areCredentialsOk) {
    new ServerError(403, 'Credențialele introduse nu se potrivesc cu contul tău').send(res);
    return;
  }

  await UserModel.delete(user._id);
  res.status(200).send();
});

async function updateUserFields({ _id, username, password }, fields) {
  let areCredentialsOk = false;

  try {
    areCredentialsOk = await UserModel.verify(username, password);
  } catch (err) {
    throw new ServerError(500, "Oops! Încearcă din nou");
  }

  if (!areCredentialsOk) {
    throw new ServerError(403, 'Credențialele introduse nu se potrivesc cu contul tău');
  }

  return UserModel.update(_id, fields);
}

module.exports = userRouter