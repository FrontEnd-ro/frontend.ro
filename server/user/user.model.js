const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const jwt = require('jsonwebtoken');
const { AUTH_EXPIRATION, ServerError, validateAgainstSchemaProps } = require('../ServerUtils');

const UsersSchema = new mongoose.Schema({
  avatar: { type: String, required: true },
  name: { type: String, required: false, default: '' },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lastLogin: { type: Date, default: Date.now() },
});
UsersSchema.plugin(uniqueValidator);

const User = mongoose.models.User || mongoose.model('User', UsersSchema);

class UserModel {
  static search() {
    return User.find({});
  }

  static async ping(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedInfo) => {
        if (err) {
          reject(new ServerError(401, 'Not authenticated'));
          return;
        }

        const { _id } = decodedInfo;

        const user = await UserModel.findUserBy({ _id });
        if (!user) {
          reject(new ServerError(404, "User doesn't exist anymore!"));
          return;
        }

        resolve(user);
      });
    });
  }

  static create(payload) {
    validateAgainstSchemaProps(payload, UsersSchema);

    const user = new User(payload);

    return new Promise((resolve, reject) => {
      user.save((err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(user);
      });
    });
  }

  static async findUserBy(filters) {
    const user = await User.findOne(filters);

    return user || null;
  }

  static async getUser({
    username,
    email,
  }) {
    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    return user || null;
  }

  static generateJwtForUser(_id) {
    return jwt.sign(
      { _id },
      process.env.TOKEN_SECRET,
      {
        expiresIn: `${AUTH_EXPIRATION}d`,
        algorithm: process.env.TOKEN_ALGORITHM,
      },
    );
  }

  static sanitize(user) {
    const sanitizedUser = { ...user.toObject() };
    const propsToDelete = ['_id', '__v'];

    propsToDelete.forEach((prop) => delete sanitizedUser[prop]);

    return sanitizedUser;
  }
}

module.exports = UserModel;
