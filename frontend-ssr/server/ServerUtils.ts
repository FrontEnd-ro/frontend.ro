import { NextApiResponse } from 'next';
import cookie from 'cookie';
import { extractDbErrorMessage } from './database';

export const PAGE_SIZE = 25;
export const AUTH_EXPIRATION = 7;
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

export function setTokenCookie(token: string, res: NextApiResponse<any>) {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 3600 * 24 * AUTH_EXPIRATION,
      path: '/',
    }),
  );
}
