import { NextApiRequest, NextApiResponse } from 'next';

import UserModel from '~/server/model/user.model';
import { withMiddlewares } from '~/server/Middlewares';
import { ServerError } from '~/server/ServerUtils';

export default withMiddlewares({
  GET: checkUserName,
});

async function checkUserName(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query;

  const user = await UserModel.findUserBy({ username });

  if (user) {
    res.status(200).end();
  } else {
    throw new ServerError(404, `Username ${username} is not registered`);
  }
}
