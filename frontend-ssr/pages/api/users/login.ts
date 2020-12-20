//Imports
import UserModel from "~/server/model/user.model";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import {
  EMAIL_USERNAME_DOES_NOT_EXISTS_ERROR,
  BAD_FORM_SUBMITION_ERROR,
  BAD_PASSWORD_ERROR,
  UPDATE_LAST_LOGIN_ERROR,
} from "~/server/ServerUtils";
// = require("~/utils/consts");
import { withMiddlewares } from "~/server/Middlewares";
import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

export default withMiddlewares({
  POST: login,
});

async function login(req:NextApiRequest, res:NextApiResponse) {
  //destruct the req
  let { email, password } = req.body;

  try {
    let user = await UserModel.findUserForLogin(email);
    if (!user) {
      return res.status(400).json(EMAIL_USERNAME_DOES_NOT_EXISTS_ERROR);
    }
    //User exists => Check password
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      return res.status(400).json(BAD_PASSWORD_ERROR);
    }
    //After checking password update the last login
    let new_entry = await UserModel.findOneAndUpdate(user._id);
    // Create jwt
    const token = jwt.sign({ user: new_entry }, process.env.TOKEN_SECRET, {
      expiresIn: "7d",
    });
    res.setHeader("Set-Cookie", cookie.serialize("auth",token,{
      httpOnly:true,
      secure: process.env.NODE_ENV!=="development",
      sameSite:"strict",
      maxAge:3600*24*7,
      path:"/"
    })); 
    res.json({ status: "success" });
    // res.redirect(200,"http://localhost:3000")
  } catch (err) {
    console.log(err);
    res.status(500).json(UPDATE_LAST_LOGIN_ERROR);
  }
}


