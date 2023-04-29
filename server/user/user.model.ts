import bcrypt  from 'bcrypt';
import jwt  from 'jsonwebtoken';
import mongoose  from 'mongoose';
import appConfig from '../config';
import { User, UsersSchema }  from './user.schema';
import {
  AUTH_EXPIRATION,
  validateAgainstSchemaProps,
  validateObjectId,
  MAX_USERNAME_LENGTH
}  from '../ServerUtils';
import { ServerError, TranslationKey } from '../utils/ServerError';
import { PublicUserI } from '../../shared/types/user.types';
import { UserI, WIPSanitizedUser } from '../../shared/types/user.types';

export type AuthJWT = {
  _id: string;
}

class UserModel {
  static search() {
    return User.find({});
  }

  static async ping(token: string): Promise<UserI> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, appConfig.AUTH.secret, async (err, decodedInfo: AuthJWT) => {
        if (err) {
          console.error('UserSharedModel.ping', err);
          reject(new ServerError(401, 'generic.401'));
          return;
        }
  
        const { _id } = decodedInfo;
        
        const user = await User.findById(_id);
        if (!user) {
          reject(new ServerError(404, 'generic.404'));
          return;
        }
  
        resolve(user.toObject());
      });
    });
  }

  static async verify(username: string, password: string): Promise<boolean> {
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

  static create(payload: Omit<UserI, 'lastLogin'>): Promise<UserI> {
    validateAgainstSchemaProps(payload, UsersSchema);

    const user = new User(payload);

    return new Promise((resolve, reject) => {
      user.save((err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(user.toObject());
      });
    });
  }

  static async findUserBy(filters: mongoose.FilterQuery<UserI>): Promise<UserI | null> {
    const user = await User.findOne(filters);

    if (user === null) {
      return null;
    }
    return user.toObject();
   }

  static async getUser({
    username,
    email,
  }: {
    username: string;
    email?: undefined
  } | {
    email: string;
    username?: undefined;
  } | {
    email: string;
    username: string;
  }): Promise<UserI | null> {
    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (user === null) {
      return null;
    }
    return user.toObject();
  }

  static async update(_id: string, payload: Partial<UserI>): Promise<UserI> {
    validateObjectId(_id);
    const user = await User.findById(_id);

    if (!user) {
      throw new ServerError(404, 'generic.404');
    }

    validateAgainstSchemaProps(payload, UsersSchema);
    Object.assign(user, payload);

    await user.save();
    return user.toObject();
  }

  static async delete(_id: string): Promise<void> {
    await User.findOneAndDelete({ _id })
  }

  static generateJwtForUser(_id: string): string {
    return jwt.sign(
      { _id },
      appConfig.AUTH.secret,
      {
        expiresIn: `${AUTH_EXPIRATION}d`,
        algorithm: appConfig.AUTH.algorithm,
      },
    );
  }

  static sanitize(user: UserI): WIPSanitizedUser {
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

  static sanitizeForPublic = (user: UserI): PublicUserI => {
    const sanitizedUser = UserModel.sanitize(user);
    const result: PublicUserI = {
      name: sanitizedUser.name,
      avatar: sanitizedUser.avatar,
      username: sanitizedUser.username,
      description: sanitizedUser.description,
    };
    
    return result;
  }

  static validateUsername(username: string): {
    result: false;
    reason: TranslationKey;
  } | {
    result: true;
  } {
    const RESTRICTED_USERNAMES = [
      'lectii',
      'settings',
      '',
    ];

    if (!username.length || username.length > MAX_USERNAME_LENGTH) {
      return {
        result: false,
        reason: `username.username_length_requirement`,
      };
    }

    if (RESTRICTED_USERNAMES.includes(username)) {
      return {
        result: false,
        reason: 'username.username_restricted'
      };
    }

    return {
      result: true,
    };
  }

  static async setGithubAccessToken(_id: string, github_access_token: string): Promise<UserI> {
    validateObjectId(_id);
    const user = await User.findById(_id);

    if (!user) {
      throw new ServerError(404, 'generic.404');
    }

    user.github_access_token = github_access_token;

    await user.save();
    return user.toObject();
  }
}

export default UserModel;
