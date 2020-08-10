const Joi= require("@hapi/joi");
// const { models } = require("mongoose");


const registerValidation=(body)=>{
    
    const schema=Joi.object({
        name:Joi.string().min(6).max(256).required(),
        username:Joi.string().min(6).max(256),
        avatar:Joi.string(),
        email:Joi.string().min(6).email().required(),
        password:Joi.string().min(6).required()
    });
    
    return schema.validate(body)
    // return Joi.validate(,schema);
}
const loginValidation=(body)=>{
    
    const schema=Joi.object({
        email:Joi.string().min(6).required(),
        password:Joi.string().min(6).required()
    });
    return schema.validate(body);
}

module.exports.registerValidation=registerValidation
module.exports.loginValidation=loginValidation