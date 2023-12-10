import multer from 'multer';
import bcrypt from 'bcrypt';
import { Types } from 'mongoose';
import express, { Request, Response } from 'express';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

import UserModel from './user.model';
import appConfig from '../config';
import { UserI } from './user.schema';
import { ServerError } from '../utils/ServerError';
import EmailService, { EMAIL_TEMPLATE } from '../Email.service';
import { PrivateMiddleware, PublicMiddleware } from '../Middlewares';
import PasswordResetModel from '../password-reset/password-reset.model';
import { API_UserI, UserRole } from '../../shared/types/user.types';
import { MAX_MEDIA_MB, MAX_MEDIA_BYTES } from '../../shared/SharedConstants';
import { setTokenCookie, MAX_NAME_LENGTH, MAX_DESCRIPTION_LENGTH, SanitizeRole } from '../ServerUtils';

const userRouter = express.Router();

const s3 = new S3Client({ region: appConfig.AWS.region });
const upload = multer({ storage: multer.memoryStorage() });

userRouter.get('/avatar/:username', async function getDefaultAvatar(req: Request, res: Response) {
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

userRouter.get('/check-username/:username', async function checkUsername(req: Request, res: Response) {
  const { username } = req.params;

  const user = await UserModel.findUserBy({ username });

  if (user) {
    res.status(200).end();
  } else {
    new ServerError(404, 'generic.404', { username }).send(res);
  }
})

userRouter.get('/ping', [
  PrivateMiddleware,
  async function pingCurrentuser(req, res) {
    const { user } = req.body;
    res.json(UserModel.sanitize(user, SanitizeRole.SELF));
  }
]);

userRouter.get('/:username', [
  PublicMiddleware,
  async function getPublicProfile(req: Request, res: Response<API_UserI>) {
    const { username } = req.params;
    try {
      const user = await UserModel.getUser({ username });
      if (user === null) {
        throw new ServerError(404, 'generic.404');
      }

      const publicUser = UserModel.sanitize(user, SanitizeRole.PUBLIC);
      res.json(publicUser);
    } catch (err) {
      new ServerError(
        err.code || 500,
        err.message || `Error tying to get public profile for username=${username}`,
      ).send(res);
    }
}]);

userRouter.post('/login', async function login(
  req: Request<{}, {}, { emailOrUsername: string; password: string; }>,
  res: Response<API_UserI>
) {
  let { emailOrUsername, password } = req.body;
  emailOrUsername = emailOrUsername.trim().toLowerCase();

  if (!emailOrUsername || !password) {
    new ServerError(400, 'user.login_email_username_required').send(res);
    return
  }

  const user = await UserModel.getUser({
    email: emailOrUsername,
    username: emailOrUsername,
  });

  if (!user) {
    new ServerError(400, 'user.login_failed_user_missing').send(res);
    return
  }

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) {
    new ServerError(400, 'user.login_failed_password_wrong').send(res);
    return
  }

  // Create and set JTW as cookie
  const token = UserModel.generateJwtForUser(user._id);
  setTokenCookie(token, res, req.headers.origin);

  res.json(UserModel.sanitize(user, SanitizeRole.SELF));
})

userRouter.post('/logout', (req: Request, res: Response) => {
  res.clearCookie('token', {
    sameSite: "strict",
    domain: new URL(req.headers.origin).hostname
  });
  res.status(200).send();
});

userRouter.post('/register', async function register(
  req: Request<{}, {}, { email: string; username: string; password: string; }>,
  res: Response<API_UserI>
) {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    new ServerError(400, 'user.register_required_fields').send(res);
    return
  }

  if (!/^.+@.+[.].+$/.test(email)) {
    new ServerError(400, 'user.register_invalid_email').send(res);
    return
  }

  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    new ServerError(400, 'user.register_invalid_username').send(res);
    return
  }

  const existingUser = await UserModel.getUser({ email, username });
  if (existingUser) {
    new ServerError(400, 'user.register_email_exists').send(res);
    return;
  }

  const hashedPassword = await bcrypt.hash(password, +appConfig.AUTH.rounds);

  const user = await UserModel.create({
    email,
    username,
    tutorials: [],
    role: UserRole.STUDENT,
    password: hashedPassword,
    avatar: `${appConfig.APP.endpoint}/auth/avatar/${username}`,
  });

  // Create and set JTW as cookie
  const token = UserModel.generateJwtForUser(user._id);
  setTokenCookie(token, res, req.headers.origin);

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

  res.json(UserModel.sanitize(user, SanitizeRole.SELF));
})

userRouter.post('/name', [
  PrivateMiddleware,
  async function updateName(
    req: Request<{}, {}, { name: string; password: string; user: UserI }>,
    res: Response<API_UserI>
  ) {
    const name = req.body.name.toString().trim();
    const { password, user } = req.body;

    if (name.length === 0) {
      new ServerError(400, 'user.name_cannot_be_empty').send(res);
      return;
    }

    if (name.length > MAX_NAME_LENGTH) {
      new ServerError(400, 'user.name_too_big').send(res);
      return;
    }

    try {
      const updatedUser = await updateUserFields({ _id: user._id, username: user.username, password }, { name });
      res.json(UserModel.sanitize(updatedUser, SanitizeRole.SELF));
    } catch (err) {
      err.send(res); // Err is of type ServerError
    }
  }
]);

userRouter.post('/description', [
  PrivateMiddleware,
  async function updateDescription(
    req: Request<{}, {}, { description: string; password: string; user: UserI }>,
    res: Response<API_UserI>
  ) {
    const description = req.body.description.toString().trim();
    const { password, user } = req.body;

    if (description.length === 0) {
      new ServerError(400, 'user.description_cannot_be_empty').send(res);
      return;
    }

    if (description.length > MAX_DESCRIPTION_LENGTH) {
      new ServerError(400, 'user.description_too_big').send(res);
      return;
    }

    try {
      const updatedUser = await updateUserFields({ _id: user._id, username: user.username, password }, { description });
      res.json(UserModel.sanitize(updatedUser, SanitizeRole.SELF));
    } catch (err) {
      err.send(res); // Err is of type ServerError
    }
  }
]);

userRouter.post('/username', [
  PrivateMiddleware,
  async function updateUsername(
    req: Request<{}, {}, { username: string; password: string; user: UserI }>,
    res: Response<API_UserI>
  ) {
    const username = req.body.username.toString().trim();
    const { password, user } = req.body;


    const validationResult = UserModel.validateUsername(username);

    if (validationResult.result === false) {
      new ServerError(400, validationResult.reason).send(res);
      return;
    }

    try {
      const updatedUser = await updateUserFields({ _id: user._id, username: user.username, password }, {
        username,
        avatar: `${appConfig.APP.endpoint}/auth/avatar/${username}`,
      });
      res.json(UserModel.sanitize(updatedUser,SanitizeRole.SELF));
    } catch (err) {
      err.send(res); // Err is of type ServerError
    }
  }
]);

userRouter.post('/email', [
  PrivateMiddleware,
  async function updateEmail(
    req: Request<{}, {}, { email: string; password: string; user: UserI }>,
    res: Response<API_UserI>
  ) {
    const email = req.body.email.toString().trim();
    const { password, user } = req.body;

    if (email.length === 0) {
      new ServerError(400, 'user.email_cannot_be_empty').send(res);
      return;
    }

    if (!/^.+@.+[.].+$/.test(email)) {
      new ServerError(400, 'user.register_invalid_email').send(res);
      return
    }

    const userWithThisEmail = await UserModel.getUser({ email });
    if (userWithThisEmail !== null) {
      new ServerError(400, 'user.change_email_in_use').send(res);
      return
    }

    try {
      const updatedUser = await updateUserFields({ _id: user._id, username: user.username, password }, { email });
      res.json(UserModel.sanitize(updatedUser, SanitizeRole.SELF));
    } catch (err) {
      console.log(`[updateEmail(${email})]`, err);
      err.send(res); // Err is of type ServerError
    }
  }
]);

userRouter.post('/password', [
  PrivateMiddleware,
  async function updatePassword(
    req: Request<{}, {}, { newPassword: string; password: string; user: UserI }>,
    res: Response<API_UserI>
  ) {
    const newPassword = req.body.newPassword.toString().trim();
    const { password, user } = req.body;

    if (newPassword.length === 0) {
      new ServerError(400, 'user.change_password_empty').send(res);
      return;
    }

    const hashedPassword = await bcrypt.hash(newPassword, +appConfig.AUTH.rounds);

    try {
      const updatedUser = await updateUserFields({ _id: user._id, username: user.username, password }, {
        password: hashedPassword
      });
      res.json(UserModel.sanitize(updatedUser, SanitizeRole.SELF));
    } catch (err) {
      err.send(res); // Err is of type ServerError
    }
  }
]);

userRouter.post('/password/reset', async function resetPassword(
  req: Request<{}, {}, { newPassword: string; emailOrUsername: string; code: string; }>,
  res: Response<API_UserI>
) {
  try {
    const newPassword = req.body.newPassword.toString().trim();
    const { emailOrUsername, code } = req.body;

    if (newPassword.length === 0) {
      new ServerError(400, 'user.change_password_empty').send(res);
      return;
    }

    const user = await UserModel.getUser({
      email: emailOrUsername,
      username: emailOrUsername,
    });
    if (!user) {
      new ServerError(400, 'user.password_reset_user_missing').send(res);
      return
    }

    const isValidResetCode = await PasswordResetModel.validate(user.email, code);

    if (!isValidResetCode) {
      new ServerError(400, 'user.invalid_reset_code').send(res);
      return
    }

    const hashedPassword = await bcrypt.hash(newPassword, +appConfig.AUTH.rounds);
    const updatedUser = await UserModel.update(user._id, { password: hashedPassword });

    // Create and set JTW as cookie
    const token = UserModel.generateJwtForUser(user._id);
    setTokenCookie(token, res, req.headers.origin);

    res.json(UserModel.sanitize(updatedUser, SanitizeRole.SELF));
  } catch (err) {
    console.error('[UserRouter.resetPassword]', err);
    new ServerError(500, 'generic.500').send(res);
  }
});

userRouter.post('/avatar', [PrivateMiddleware], function uploadAvatar(
  req: Request<{}, {}, { user: UserI }>,
  res: Response<API_UserI>
) {
  const userId = req.body.user._id;

  upload.single('file')(req, null, async (err) => {
    if (err) {
      console.error('[uploadExerrciseMedia]', err);
      new ServerError(500, 'generic.500').send(res);
      return;
    }

    const { file } = req;
    const name = `${userId}_${Date.now()}.jpg`;

    if (req.file.size > MAX_MEDIA_BYTES) {
      console.error('[uploadExerrciseMedia]', err);
      new ServerError(400, 'user.avatar_too_big').send(res);
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

      res.json(UserModel.sanitize(newUser, SanitizeRole.SELF));
    } catch (err) {
      console.log('[s3Upload]', err);
      new ServerError(500, err.message || 'Oops! Se pare că nu am putut încărca fișierele. Încearcă din nou.').send(res);
    }
  });
})

userRouter.delete('/', [PrivateMiddleware], async function deleteAccount(
  req: Request<{}, {}, { password: string; user: UserI; }>,
  res: Response
) {
  const { user, password } = req.body;

  const areCredentialsOk = await UserModel.verify(user.username, password);

  if (!areCredentialsOk) {
    new ServerError(403, 'user.wrong_credentials_for_profile_update').send(res);
    return;
  }

  await UserModel.delete(user._id);
  res.status(200).send();
});

async function updateUserFields(
  { _id, username, password }: { _id: Types.ObjectId; username: string; password: string; },
  fields: Partial<UserI>
) {
  let areCredentialsOk = false;

  try {
    areCredentialsOk = await UserModel.verify(username, password);
  } catch (err) {
    throw new ServerError(500, 'generic.500');
  }

  if (!areCredentialsOk) {
    throw new ServerError(403, 'user.wrong_credentials_for_profile_update');
  }

  return UserModel.update(_id, fields);
}

export default userRouter;
