const mongoose = require("mongoose");

var Schema=mongoose.Schema
const userSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    avatar:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        max:1024,
        min:6
    },
    lastLogin:{
        type:Date,
        default:Date.now
    }

})
 
module.exports= mongoose.models.User || mongoose.model("User",userSchema);