import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

import UserModel from '~/server/model/user.model';
import { withMiddlewares } from '~/server/Middlewares';
import { ServerError, setTokenCookie } from '~/server/ServerUtils';

export default withMiddlewares({
  POST: login,
});

async function login(req: NextApiRequest, res: NextApiResponse) {
  const { emailOrUsername, password } = req.body;
  const user = await UserModel.getUser({
    email: emailOrUsername,
    username: emailOrUsername,
  });

  if (!user) {
    throw new ServerError(
      400,
      '⛔ Nu există nici un utilizator cu acest email/username!',
    );
  }

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) {
    throw new ServerError(400, '⛔ Parola e greșită!');
  }

  // Create and set JTW as cookie
  const token = UserModel.generateJwtForUser(user._id);
  setTokenCookie(token, res);

  res.json(UserModel.sanitize(user));
}
