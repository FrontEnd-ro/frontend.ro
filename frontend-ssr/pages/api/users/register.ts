//Imports
import {NextApiRequest, NextApiResponse} from 'next'
import UserModel from '~/server/model/user.model'
// import dbConnect from "~/utils/dbConnect";
const bcrypt = require("bcryptjs");
const {
  EMAIL_EXISTS_ERROR,
  BASIC_AVATAR_URL,
} = require("~/server/ServerUtils");
import { withMiddlewares } from '~/server/Middlewares';



export default withMiddlewares({
POST:register
})
  
async function  register(req:NextApiRequest, res:NextApiResponse) {
  const { method, body } = req;
  if (method !== "POST") {
    return res.json({
      message: "This route is for register",
    });
  }
  
  let errors = [];
  try {
    //Check if the email and username already exists
    const emailExists = await UserModel.findUserBy([{ key:"email", value:body.email }]);
    if (emailExists.length>0) {
      errors.push(EMAIL_EXISTS_ERROR);
    }
    if (errors.length > 0)
    {
    return res.status(400).json({ status: "fail", errors: errors });
    }// Encrypt the password

    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(body.password, salt);
    //Try to save the user into the database
    //Create the user for the database
    let user =  await UserModel.create({
      name: body.name,
      username: body.username,
      avatar: body.avatar || BASIC_AVATAR_URL,
      email: body.email,
      password: hash_password,
    });
    res.json({
      status: "success",
      user,
    });
  } catch (err) {
    console.log(err)
    let save_errors=err.errors.map(er=>{er.message})
    res.status(500).json({ status: "faile", errors: save_errors });
  }
};
