import { NextApiResponse } from 'next';
import { extractDbErrorMessage } from './database';

export const PAGE_SIZE = 25;
export const   EMAIL_EXISTS_ERROR ={success:false,error:"This email is already used "};
export const   USERNAME_EXISTS_ERROR ={success:false,error:"There is someone that already has this email"};
export const   BASIC_AVATAR_URL ="https://cdn4.iconfinder.com/data/icons/basic-ui-pack-flat-s94-1/64/Basic_UI_Icon_Pack_-_Flat_user-512.png";
export const   EMAIL_USERNAME_DOES_NOT_EXISTS_ERROR ={success:false,error:"There is no user with that email or username"};
export const   BAD_FORM_SUBMITION_ERROR ={success:false,error:"Something went wrong please try again!"};
export const   BAD_PASSWORD_ERROR ={success:false,error:"Wrong password please try again"};
export const   UPDATE_LAST_LOGIN_ERROR ={success:false,error:"Fail to login please try again"};

export class ServerError extends Error {
  code: number;

  message: string;

  constructor(code, err, ...rest) {
    super(...rest);

    this.code = code;

    if (typeof err === 'object') {
      this.message = extractDbErrorMessage(err);
    } else {
      this.message = err;
    }
  }

  send(res: NextApiResponse) {
    res.status(this.code);
    res.json({
      code: this.code,
      message: this.message,
    });
  }
}
