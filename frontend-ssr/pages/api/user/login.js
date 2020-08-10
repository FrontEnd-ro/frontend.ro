//Imports
const User = require("../../../models/User.schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { loginValidation } = require("../../../utils/validation/userValidation")

//Vars
const error_message = { status: "fail", message: 'Email or Password is incorrect' }

export default async (req, res) => {
    let { method, body } = { ...req };
    switch (method) {
        case "POST":
            //destruct the req
            let { email, password } = { ...body };
            let { error } = loginValidation({ email, password })
            //Check valid form 
            if (error) return res.status(400).json(error_message);
            //Check user base on username or email
            let user = await User.findOne({ $or: [{ username: email }, { email: email }] });
            if (!user) return res.status(400).json(error_message);
            //User exists => Check password  
            const validPass = await bcrypt.compare(password, user.password);
            if (!validPass) return res.status(400).json(error_message);
            //After checking password update the last login
            let new_entry = await User.findOneAndUpdate({ _id: user._id }, { $set: { lastLogin: Date.now() } }, { new: true })
            console.log(new_entry);
            // Create jwt
            const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '7d' });
            res.json({ status: "success", auth_token: token });
            break;
        default:
            res.status(400).json({
                'message': "This route is for login"
            })
            break;
    }
}
