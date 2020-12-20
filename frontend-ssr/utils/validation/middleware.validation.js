const jwt= require("jsonwebtoken")
const error_message={status:"fail",message:"Invalid Token"}

module.exports.validate_jwt=async(req)=>{
    //Grab the auth-token from headers
    const token = req.headers["auth-token"];
    //No header return false 
    if(!token) return false;
    try{
        //Verify header
        const verify=await jwt.verify(token,process.env.TOKEN_SECRET);
        if(!verify) return verify;
        const user_data= await jwt.decode(token)
        return user_data
    }
    catch(err){
        //Something went wrong 
        return false;
    };
}