const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { AUTH_EXPIRATION, ServerError, validateAgainstSchemaProps, validateObjectId, MAX_USERNAME_LENGTH } = require('../ServerUtils');
const { default: appConfig } = require('../config');
const { UsersSchema } = require('./user.schema');

const User = mongoose.models.User || mongoose.model('User', UsersSchema);

class UserModel {
  static search() {
    return User.find({});
  }

  static async ping(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, appConfig.AUTH.secret, async (err, decodedInfo) => {
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

  static sanitize(user) {
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
