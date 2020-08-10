const {validate_jwt} =require("../../../utils/validation/middleware.validation")

export default async (req,res)=>{
    
    let jwt_valid=await validate_jwt(req);
    res.send(jwt_valid)
}