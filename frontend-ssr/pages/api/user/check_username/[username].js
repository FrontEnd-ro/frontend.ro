const User = require("~/models/User.schema");
import dbConnect from "~/utils/dbConnect";
dbConnect();

export default async(req,res)=>{
    console.log(req.query)
    try{
        
        const user = await User.find({username:req.query.username});
        if(user.length>0){
            res.status(200).json({status:"taken"})
        }
        else{
            res.status(200).json({status:"free"});
        }
    }
    catch(err){
        console.log(err)
        res.status(400).json({message:"You good nigga",...req.query})
    }
}
