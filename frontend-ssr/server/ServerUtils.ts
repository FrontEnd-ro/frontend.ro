import { NextApiResponse } from 'next';
import { extractDbErrorMessage } from './database';

export const PAGE_SIZE = 25;

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
