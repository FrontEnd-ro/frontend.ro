import bcrypt  from 'bcrypt';
import jwt  from 'jsonwebtoken';
import mongoose, { Document }  from 'mongoose';
import appConfig from '../config';
import { User, UsersSchema }  from './user.schema';
import {
  AUTH_EXPIRATION,
  validateAgainstSchemaProps,
  validateObjectId,
  MAX_USERNAME_LENGTH,
  SanitizeRole
}  from '../ServerUtils';
import { ServerError, TranslationKey } from '../utils/ServerError';
import { API_UserI } from '../../shared/types/user.types';
import { UserI } from '../../shared/types/user.types';

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

  static async create(payload: Omit<UserI, 'lastLogin'>) {
    validateAgainstSchemaProps(payload, UsersSchema);

    const user = await new User(payload).save();
    return user;
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
  }) {
    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (user === null) {
      return null;
    }
    return user;
  }

  static async update(_id: string, payload: Partial<UserI>) {
    validateObjectId(_id);
    const user = await User.findById(_id);

    if (!user) {
      throw new ServerError(404, 'generic.404');
    }

    validateAgainstSchemaProps(payload, UsersSchema);
    Object.assign(user, payload);

    const updatedUser = await user.save();
    return updatedUser;
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

  // Sanitizes the user based on who wants to look at this entity
  static sanitize(user: mongoose.Document<any, any, UserI> & UserI, sanitizeRole: SanitizeRole): API_UserI {
    switch (sanitizeRole) {
      case SanitizeRole.SELF:
      case SanitizeRole.ADMIN:
        return {
          avatar: user.avatar,
          name: user.name,
          username: user.username,
          description: user.description,
          email: user.email,
          role: user.role,
          tutorials: user.tutorials,
        }
      case SanitizeRole.PUBLIC:
      case SanitizeRole.TEACHER:
      default:
        return {
          avatar: user.avatar,
          name: user.name,
          username: user.username,
          description: user.description,
        }
    }
  } 
}

export default UserModel;
