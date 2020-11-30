import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import UserModel from '~/server/model/user.model';
import { withMiddlewares } from '~/server/Middlewares';
import { ServerError, setTokenCookie } from '~/server/ServerUtils';

export default withMiddlewares({
  POST: register,
});

async function register(req: NextApiRequest, res: NextApiResponse) {
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
}
