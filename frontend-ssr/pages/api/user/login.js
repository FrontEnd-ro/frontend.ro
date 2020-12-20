//Imports
const User = require("~/models/User.schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import dbConnect from "~/utils/dbConnect";
const { loginValidation } = require("~/utils/validation/userValidation");

//Connecting to DB
dbConnect();

//Vars
const email_username_does_not_exists_error = {
  status: "fail",
  message: "Email or Username does not exists",
};

const bad_form_submition_error = {
  status: "fail",
  message: "Invalid form submision",
};

const bad_password_error = {
  status: "fail",
  message: "Incorect password ",
};

const update_last_login_error = {
  status: "fail",
  message: "Something went wrong. Please try again",
};

//Route function
export default async (req, res) => {
  let { method, body } = req;
  switch (method) {
    case "POST":
      //destruct the req
      let { email, password } = body;
      let { error } = loginValidation({ email, password });
      //Check valid form
      if (error) return res.status(400).json(bad_form_submition_error);
      //Check user base on username or email
      try {
        let user = await User.findOne({
          $or: [{ username: email }, { email: email }],
        });
        if (!user)
          return res.status(400).json(email_username_does_not_exists_error);
        //User exists => Check password
        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) return res.status(400).json(bad_password_error);
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
        res.status(500).json(update_last_login_error);
      }
      break;
    default:
      res.status(400).json({
        message: "This route is for login",
      });
      break;
  }
};
