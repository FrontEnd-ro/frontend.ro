//Imports

const User = require("~/models/User.schema");
import dbConnect from "~/utils/dbConnect";
const bcrypt = require("bcryptjs");
const {
  EMAIL_EXISTS_ERROR,
  USERNAME_EXISTS_ERROR,
  BASIC_AVATAR_URL,
} = require("~/utils/consts");
dbConnect();

export default async (req, res) => {
  let { method, body } = req;
  if (method !== "POST") {
    return res.json({
      message: "This route is for register",
    });
  }
  //Desctruct and create vars
  // console.log(method, body);
  let { name, username, avatar, email, password } = { ...body };
  // let { error } = registerValidation(body);
  // if (error) return res.status(400).json({ message: error });
  let errors = [];
  try {
    //Check if the email and username already exists
    const emailExists = await User.findOne({ email: body.email });
    if (emailExists) {
      errors.push(EMAIL_EXISTS_ERROR);
    }
    const usernameExists = await User.findOne({ username: body.username });
    if (usernameExists) {
      errors.push(USERNAME_EXISTS_ERROR);
    }
    if (errors.length > 0)
    {console.log("i am here");
    return res.status(400).json({ status: "fail", errors: errors });
    }// Encrypt the password

    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);
    //Try to save the user into the database
    //Create the user for the database
    let created_user = new User({
      name: name,
      username: username,
      avatar: avatar || BASIC_AVATAR_URL,
      email: email,
      password: hash_password,
    });
    let user = await created_user.save();
    res.json({
      status: "success",
      user,
    });
  } catch (err) {
    //catch the fail to save to the database
    let save_errors = {};
    for (let i in err.errors) {
      save_errors[i] = err.errors[i].message;
    }
    res.status(500).json({ status: "faile", error: save_errors });
  }
};
