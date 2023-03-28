const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SharedUserModel = require('../../shared/user.shared-model');
const { AUTH_EXPIRATION, ServerError, validateAgainstSchemaProps, validateObjectId, MAX_USERNAME_LENGTH } = require('../ServerUtils');
const { default: appConfig } = require('../config');

const { UsersSchema, User } = SharedUserModel

class UserModel {
  static search() {
    return User.find({});
  }

  static ping = SharedUserModel.ping;

  static async verify(username, password) {
    const user = await UserModel.findUserBy({ username });

    if (!user) {
      return false;
    }

    try {
      const result = await bcrypt.compare(password, user.password);
      return !!result;
    } catch (err) {
      console.error('[UserModel.verify]', err)
      return false;
    }
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

  static findUserBy = SharedUserModel.findUserBy;

  static async getUser({
    username,
    email,
  }) {
    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    return user || null;
  }

  static async update(_id, payload) {
    validateObjectId(_id);
    const user = await User.findById(_id);

    if (!user) {
      throw new ServerError(404, `Couldn't update non-existent exercise with id=${_id}.`);
    }

    validateAgainstSchemaProps(payload, UsersSchema);
    Object.assign(user, payload);

    await user.save();
    return user;
  }

  static async delete(_id) {
    await User.findOneAndDelete({ _id })
  }

  static generateJwtForUser(_id) {
    return jwt.sign(
      { _id },
      appConfig.AUTH.secret,
      {
        expiresIn: `${AUTH_EXPIRATION}d`,
        algorithm: appConfig.AUTH.algorithm,
      },
    );
  }

  static sanitize = SharedUserModel.sanitize;

  static sanitizeForPublic = (user) => {
    const sanitizedUser = UserModel.sanitize(user);
    const propertiesToKeep = ['name', 'description', 'avatar', 'username'];
    const result = {};

    propertiesToKeep.forEach((prop) => {
      result[prop] = sanitizedUser[prop];
    });
    return result;
  }

  static validateUsername(username) {
    const RESTRICTED_USERNAMES = [
      'lectii',
      'settings',
      '',
    ];

    if (!username.length || username.length > MAX_USERNAME_LENGTH) {
      return {
        result: false,
        reason: `Username-ul trebuie sa aiba intre 1 si ${MAX_USERNAME_LENGTH} caractere lungime`,
      };
    }

    if (RESTRICTED_USERNAMES.includes(username)) {
      return {
        result: false,
        reason: 'Username-ul conincide cu una dintre paginile noastre.',
      };
    }

    return {
      result: true,
    };
  }

  static async setGithubAccessToken(_id, github_access_token) {
    validateObjectId(_id);
    const user = await User.findById(_id);

    if (!user) {
      throw new ServerError(404, `Couldn't set Github Access Token for non-existent user with id=${_id}.`);
    }

    user.github_access_token = github_access_token;

    await user.save();
    return user;
  }
}

module.exports = UserModel;
