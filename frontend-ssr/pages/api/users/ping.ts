import { NextApiRequest, NextApiResponse } from 'next';
import { withMiddlewares } from '~/server/Middlewares';
import { ServerError } from '~/server/ServerUtils';
import UserModel from '~/server/model/user.model';

export default withMiddlewares({
  GET: ping,
});

async function ping(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.cookies;

  const notAuthenticatedArror = new ServerError(401, 'Not authenticated');

  if (!token) {
    throw notAuthenticatedArror;
  }

  const user = await UserModel.ping(token);
  res.json(UserModel.sanitize(user));
}
