import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { validateAgainstSchemaProps } from '../database';

const UsersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    avatar: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
  },
);
UsersSchema.plugin(uniqueValidator);

const User = mongoose.models.User || mongoose.model('User', UsersSchema);

class UserModel {
  static search() {
    return User.find({});
  }

  static create(payload) {
    validateAgainstSchemaProps(payload, UsersSchema);

    const user = new User(payload);

    return new Promise((resolve, reject) => {
      user.save((err, data) => {
        if (err) {
          return reject(err);
        }

        resolve(data);
      });
    });
  }
}

export default UserModel;
