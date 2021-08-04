import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';
import { Schema, models, model } from 'mongoose';
import { UserDocumentInterface } from '../server/types/type';
import { ServerError } from '../server/ServerUtils';
import { UserRole } from './SharedConstants';

const UsersSchema = new Schema<UserDocumentInterface>({
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

async function ping(token:string): Promise<UserDocumentInterface> {
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

function sanitize(user: UserDocumentInterface) {
  const sanitizedUser = { ...user.toObject() };
  const propsToDelete = ['_id', '__v', 'password', 'github_access_token'];

  propsToDelete.forEach((prop) => delete sanitizedUser[prop]);

  return sanitizedUser;
}

async function findUserBy(filters):Promise<UserDocumentInterface|null> {
  const user:UserDocumentInterface = await User.findOne(filters);
  return user || null;
}

export {
  User,
  UsersSchema,
  ping,
  sanitize,
  findUserBy,
};
