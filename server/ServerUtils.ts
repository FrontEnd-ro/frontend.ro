import mongoose from 'mongoose';
import appConfig from './config/config';
import { Request, Response } from "express";
const { extractDbErrorMessage } = require('./database');

const PAGE_SIZE = 25;

const AUTH_EXPIRATION = 30; // days
const MAX_NAME_LENGTH = 255;
const MAX_DESCRIPTION_LENGTH = 255;
const MAX_USERNAME_LENGTH = 100;

const HOUR_IN_MILLISECONDS = 1000 * 60 * 60;
const COOKIE_CONFIG = {
  maxAge: (HOUR_IN_MILLISECONDS * 24) * AUTH_EXPIRATION,
  // In production only allow this cookie with HTTPS Only 👇
  secure: appConfig.APP.env === 'production' ? true : false
};

class X extends Error {
  constructor() {
    super();
  }
}

class ServerError extends Error {
  code: number;

  message: string;

  constructor(code: number, err: unknown) {
    super();

    this.code = code || 500;

    err = err || 'Oops! Asta nu trebuia să se întâmple 😬';

    if (typeof err === 'object') {
      this.message = extractDbErrorMessage(err);
    } else {
      this.message = err.toString();
    }
  }

  send(res) {
    res.status(this.code);
    res.json({
      code: this.code,
      message: this.message,
    });
  }
}

function setTokenCookie(token: string, res: Response) {
  res.cookie('token', token, COOKIE_CONFIG);
}

/** Verify that payload doesn't have extra props not present on the Schema */
function validateAgainstSchemaProps(payload: Record<string, any>, Schema: mongoose.Schema) {
  const keys = Object.keys(payload);

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    if (!(key in Schema.obj)) {
      throw new ServerError(400, `Property '${key}' cannot be directly set.`);
    }
  }
}

function validateObjectId(_id: string) {
  if (!mongoose.isValidObjectId(_id)) {
    throw new ServerError(400, `Value '${_id}' is not a valid ObjectId identifier`);
  }
}

function parseBearerToken(req: Request) {
  const bearerHeader = req.headers['authorization'];

  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    return bearer[1] ?? '';
  } else {
    return null;
  }
}

export {
  ServerError,
  PAGE_SIZE,
  AUTH_EXPIRATION,
  MAX_NAME_LENGTH,
  MAX_USERNAME_LENGTH,
  MAX_DESCRIPTION_LENGTH,
  setTokenCookie,
  validateAgainstSchemaProps,
  validateObjectId,
  parseBearerToken,
}
