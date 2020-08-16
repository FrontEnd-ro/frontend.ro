const mongoose = require("mongoose");

var Schema=mongoose.Schema
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
    },
    username:{
        type:String,
        required:[true,"Username is required"] ,
        unique:true
    },
    avatar:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        max:[1024,"Password is too long"],
        min:[6,"Password is to short"]
    },
    lastLogin:{
        type:Date,
        default:Date.now
    }

})
 
module.exports= mongoose.models.User || mongoose.model("User",userSchema);