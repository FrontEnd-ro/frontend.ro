import { Request, Response } from "express"
import { ServerError } from "server/ServerUtils"
import UserModel from "./user.model"

class UserController{
  static async checkUsername(req:Request,res:Response){
    const {username} = req.params;
    const user = await UserModel.findUserBy({username});
    if(user){
      res.status(200).end();
    } 
    else {
      new ServerError(404, `Username ${username} is not registered`).send(res);
    }
  }

  static async pingCurrentuser(req:Request,res:Response) {
    const { token } = req.cookies;
  
    const notAuthenticatedArror = new ServerError(401, 'Not authenticated');
  
    if (!token) {
      throw notAuthenticatedArror;
    }
  
    const user = await UserModel.ping(token);
  
    if (!user) {
      new ServerError(404, 'User doesn\'t exist any more').send(res);
    } else {
      res.json(UserModel.sanitize(user));
    }
  }


}




export default UserController