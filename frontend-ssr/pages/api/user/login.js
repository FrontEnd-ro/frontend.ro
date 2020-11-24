//Imports
const User = require("~/models/User.schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import dbConnect from "~/utils/dbConnect";
const { loginValidation } = require("~/utils/validation/userValidation");
const {
  EMAIL_USERNAME_DOES_NOT_EXISTS_ERROR,
  BAD_FORM_SUBMITION_ERROR,
  BAD_PASSWORD_ERROR,
  UPDATE_LAST_LOGIN_ERROR,
} = require("~/utils/consts");
//Connecting to DB
dbConnect();

//Vars

//Route function
export default async (req, res) => {
  let { method, body } = req;
  if (method !== "POST") {
    return res.status(400).json({ message: "This route is for login" });
  }
  //destruct the req
  let { email, password } = body;
  let { error } = loginValidation({ email, password });
  //Check valid form
  if (error) return res.status(400).json(BAD_FORM_SUBMITION_ERROR);
  //Check user base on username or email
  try {
    let user = await User.findOne({
      $or: [{ username: email }, { email: email }],
    });
    if (!user)
      return res.status(400).json(EMAIL_USERNAME_DOES_NOT_EXISTS_ERROR);
    //User exists => Check password
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).json(BAD_PASSWORD_ERROR);
    //After checking password update the last login
    let new_entry = await User.findOneAndUpdate(
      { _id: user._id },
      { $set: { lastLogin: Date.now() } },
      { new: true }
    );
    console.log(new_entry);
    // Create jwt
    const token = jwt.sign({ user: user }, process.env.TOKEN_SECRET, {
      expiresIn: "7d",
    });
    res.json({ status: "success", auth_token: token });
  } catch (err) {
    res.status(500).json(UPDATE_LAST_LOGIN_ERROR);
  }
};
