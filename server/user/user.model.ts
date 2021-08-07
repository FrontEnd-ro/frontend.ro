import  jwt,{Algorithm} from "jsonwebtoken";
import  bcrypt from "bcrypt";
import { Schema } from "mongoose";
import {
  IReturnValidateUser,
  SearchUser,
  UserDocumentInterface,
  UserInterface,
} from "../types/type";
import { UsersSchema, User,ping,findUserBy,sanitize } from "../../shared/user.shared-model";
import {
  AUTH_EXPIRATION,
  ServerError,
  validateAgainstSchemaProps,
  validateObjectId,
  MAX_USERNAME_LENGTH,
} from "../ServerUtils";

class UserModel {
  static async search():Promise<UserDocumentInterface[]> {
    return User.find({});
  }

  static ping = ping;

  static async verify(username:String, password:String): Promise<boolean> {
    const user = await UserModel.findUserBy({ username });

    if (!user) {
      return false;
    }

    try {
      const result = await bcrypt.compare(password, user.password);
      return !!result;
    } catch (err) {
      console.error("[UserModel.verify]", err);
      return false;
    }
  }

  static create(payload:UserInterface): Promise<UserDocumentInterface> {
    validateAgainstSchemaProps(payload, UsersSchema);

    const user = new User(payload);

    return new Promise<UserDocumentInterface>((resolve, reject) => {
      user.save((err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(user);
      });
    });
  }

  static findUserBy = findUserBy;

  static async getUser({
    username,
    email,
  }: SearchUser): Promise<UserDocumentInterface | null> {
    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    return user || null;
  }

  //Payload need a specific type that resemble the user posible updates
  static async update(_id:Schema.Types.ObjectId, payload:any): Promise<UserDocumentInterface> {
    validateObjectId(_id);
    const user = await User.findById(_id);

    if (!user) {
      throw new ServerError(
        404,
        `Couldn't update non-existent user with id=${_id}.`
      );
    }

    validateAgainstSchemaProps(payload, UsersSchema);
    Object.assign(user, payload);

    await user.save();
    return user;
  }

  static async delete(_id:Schema.Types.ObjectId): Promise<void> {
    await User.findOneAndDelete({ _id });
  }

  static generateJwtForUser(_id: Schema.Types.ObjectId): String {
    return jwt.sign({ _id }, process.env.TOKEN_SECRET, {
      expiresIn: `${AUTH_EXPIRATION}d`,
      algorithm: <Algorithm>process.env.TOKEN_ALGORITHM,
    });
  }

  static sanitize = sanitize;

  static validateUsername(username:string): IReturnValidateUser {
    const RESTRICTED_USERNAMES = ["lectii", "settings", ""];

    if (!username.length || username.length > MAX_USERNAME_LENGTH) {
      return {
        result: false,
        reason: `Username-ul trebuie sa aiba intre 1 si ${MAX_USERNAME_LENGTH} caractere lungime`,
      };
    }

    if (RESTRICTED_USERNAMES.includes(username)) {
      return {
        result: false,
        reason: "Username-ul conincide cu una dintre paginile noastre.",
      };
    }

    return {
      result: true,
    };
  }

  static async setGithubAccessToken(
    _id:Schema.Types.ObjectId,
    github_access_token:String
  ): Promise<UserDocumentInterface> {
    validateObjectId(_id);
    const user:UserDocumentInterface = await User.findById(_id);

    if (!user) {
      throw new ServerError(
        404,
        `Couldn't set Github Access Token for non-existent user with id=${_id}.`
      );
    }

    user.github_access_token = github_access_token;

    await user.save();
    return user;
  }
}

export default UserModel;
