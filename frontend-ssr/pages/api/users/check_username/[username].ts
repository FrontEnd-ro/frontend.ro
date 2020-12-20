import UserModel from '~/server/model/user.model'
import { connectToDb } from '~/server/database';
import { withMiddlewares } from '~/server/Middlewares';
import { NextApiRequest, NextApiResponse } from 'next';


export default withMiddlewares({
GET:checkUserName
})



async function checkUserName(req:NextApiRequest,res:NextApiResponse){
    try{
        const user = await UserModel.findUserBy([{key:"username",value:req.query.username}]);
        if(user.length>0){
            res.status(200).json({status:"taken"})
        }
        else{
            res.status(200).json({status:"free"});
        }
    }
    catch(err){
        res.status(500).json({message:"Something whent wrong please try again",...req.query})
    }
}
