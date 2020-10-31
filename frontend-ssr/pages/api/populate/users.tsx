import { NextApiRequest, NextApiResponse } from 'next';
import { withMiddlewares } from '~/server/Middlewares';
import UserModel from '~/server/model/user.model';

const DUMMY_USERS = [{
  username: 'diana',
  name: 'Diana',
  email: 'diana@gmail.com',
  avatar: 'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png',
}, {
  username: 'alex',
  name: 'Alex',
  email: 'alex@gmail.com',
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/147/147144.svg',
}, {
  username: 'antonia',
  name: 'Antonia',
  email: 'antonia@gmail.com',
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/168/168734.svg',
}, {
  username: 'andrei',
  name: 'Andrei',
  email: 'andrei@gmail.com',
  avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png',
}];

export default withMiddlewares({
  GET: getAllUsers,
  POST: createDummyUsers,
});

async function getAllUsers(req: NextApiRequest, res: NextApiResponse) {
  const all = await UserModel.search();
  res.json(all);
}

function createDummyUsers(req: NextApiRequest, res: NextApiResponse) {
  return Promise
    .all(DUMMY_USERS.map(UserModel.create))
    .then(() => {
      res.status(200).end();
    });
}
