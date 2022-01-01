/* eslint-disable @typescript-eslint/no-var-requires */
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { ServerError } = require('../server/ServerUtils');
const { UserRole } = require('./types/user.types');

const UsersSchema = new mongoose.Schema({
  avatar: { type: String, required: true },
  name: { type: String, required: false, default: '' },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  description: { type: String, required: false, default: '' },
  password: { type: String, required: true },
  github_access_token: { type: String },
  lastLogin: { type: Date, default: Date.now() },
  role: {
    type: String,
    enum: [
      UserRole.ADMIN,
      UserRole.TEACHER,
      UserRole.STUDENT,
    ],
    default: UserRole.STUDENT,
  },
});

const User = mongoose.models.User || mongoose.model('User', UsersSchema);

async function ping(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedInfo) => {
      if (err) {
        console.error('UserSharedModel.ping', err);
        reject(new ServerError(401, 'Not authenticated'));
        return;
      }

      const { _id } = decodedInfo;

      const user = await findUserBy({ _id });
      if (!user) {
        reject(new ServerError(404, "User doesn't exist anymore!"));
        return;
      }

      resolve(user);
    });
  });
}

function sanitize(user) {
  // TODO: decide on an approach to use among all schema
  // https://github.com/FrontEnd-ro/frontend.ro/issues/438
  let sanitizedUser = { ...user };
  if (user instanceof mongoose.Document) {
    sanitizedUser = { ...user.toObject() };
  }
  const propsToDelete = ['_id', '__v', 'password', 'github_access_token'];

  propsToDelete.forEach((prop) => delete sanitizedUser[prop]);

  return sanitizedUser;
}

async function findUserBy(filters) {
  const user = await User.findOne(filters);

  return user || null;
}

module.exports = {
  User,
  UsersSchema,
  ping,
  sanitize,
  findUserBy,
};
