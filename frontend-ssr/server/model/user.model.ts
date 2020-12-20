import { filter } from "lodash";
import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import { validateAgainstSchemaProps } from "../database";

const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password:{type:String,required:true},
  name: { type: String, required: true },
  lastLogin: { type: Date, default: Date.now },
  role:{
    type:String,
    default:"user",
    enum:['user','teacher','admin']

  }
});
UsersSchema.plugin(uniqueValidator);

const User = mongoose.models.User || mongoose.model("User", UsersSchema);

class UserModel {
  static search() {
    return User.find({});
  }

  static create(payload) {
    validateAgainstSchemaProps(payload, UsersSchema);
    // console.log(payload)
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

  static async findUserBy(list_of_filters) {
      try {
        let filters= {}
        list_of_filters.forEach(filter=>{
          filters[filter.key]=filter.value
        })
        let user = await User.findOne(filters);
        if (!user) {
          return undefined;
        }
        return user;
      } catch (err) {
        return err;
      }
  }

  static async findUserForLogin(email) {
    try {
      let user = await User.findOne( {$or: [{ username: email }, { email: email }]});
      if (!user) {
        return `There is no user with that email or username`;
      }
      return user;
    } catch (err) {
      return err;
    }

  }

  static async findOneAndUpdate(_id){
    try{
      return  await User.findOneAndUpdate(
        { _id: _id },
        { $set: { lastLogin: Date.now() } },
        { new: true }
      );
    }
    catch(e){
      return e
    }
  }

  static async changeRole(_id,role){
    try{
      return await User.findByIdAndUpdate(_id,{$set:{role}})
    }
    catch(e){
      return e
    }
  }

}


export default UserModel;
