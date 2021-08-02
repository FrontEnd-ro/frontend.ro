import { Schema, models, model } from 'mongoose';
import { UserInterface } from '../server/types/type';
import { ServerError } from '../server/ServerUtils';
import { UserRole } from './SharedConstants';
/* eslint-disable @typescript-eslint/no-var-requires */
const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UsersSchema = new Schema<UserInterface>({
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
    enum: [UserRole.ADMIN, UserRole.TEACHER, UserRole.STUDENT],
    default: UserRole.STUDENT,
  },
});

UsersSchema.plugin(uniqueValidator);

const User = models.User || model('User', UsersSchema);

async function ping(token): Promise < UserInterface > {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedInfo) => {
      if (err) {
        reject(new ServerError(401, 'Not authenticated'));
        return;
      }

      const { _id } = decodedInfo;

      const user = await findUserBy({ _id });
      if (!user) {
        reject(new ServerError(404, 'User doesn\'t exist anymore!'));
        return;
      }

      resolve(user);
    });
  });
}

function sanitize(user : UserInterface) {
  const sanitizedUser = { ...user.toObject() };
  const propsToDelete = ['_id', '__v', 'password', 'github_access_token'];

  propsToDelete.forEach((prop) => delete sanitizedUser[prop]);

  return sanitizedUser;
}

async function findUserBy(filters) {
  const user = await User.findOne(filters);
  return user || null;
}

export default {
  User,
  UsersSchema,
  ping,
  sanitize,
  findUserBy,
};
export {
  User,
  UsersSchema,
  ping,
  sanitize,
  findUserBy,
};
