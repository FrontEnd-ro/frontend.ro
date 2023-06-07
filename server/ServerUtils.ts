import mongoose from 'mongoose';
import appConfig from './config';
import { CookieOptions, Request, Response } from "express";
import { ServerError } from './utils/ServerError';

enum SanitizeRole {
  PUBLIC = 'public',
  SELF = 'self',
  TEACHER = 'teacher',
  ADMIN = 'admin',
}

const PAGE_SIZE = 25;

const AUTH_EXPIRATION = 30; // days
const MAX_NAME_LENGTH = 255;
const MAX_DESCRIPTION_LENGTH = 255;
const MAX_USERNAME_LENGTH = 100;

const HOUR_IN_MILLISECONDS = 1000 * 60 * 60;
const COOKIE_CONFIG: CookieOptions = {
  maxAge: (HOUR_IN_MILLISECONDS * 24) * AUTH_EXPIRATION,
  // In production only allow this cookie with HTTPS Only 👇
  secure: appConfig.APP.env === 'production' ? true : false,
};

function setTokenCookie(token: string, res: Response, origin?: string) {
  if (appConfig.APP.allowed_origins.includes(origin)) {
    res.cookie('token', token, {
      ...COOKIE_CONFIG,
      domain: new URL(origin).hostname,
    });
  } else {
    res.cookie('token', token, COOKIE_CONFIG);
  }
}

/** Verify that payload doesn't have extra props not present on the Schema */
function validateAgainstSchemaProps(payload: Record<string, any>, Schema: mongoose.Schema) {
  const keys = Object.keys(payload);

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    if (!(key in Schema.obj)) {
      throw new ServerError(400, 'database.invalid_schema', { key });
    }
  }
}

function validateObjectId(_id: string) {
  if (!mongoose.isValidObjectId(_id)) {
    throw new ServerError(400, 'database.invalid_id', { _id });
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
  // ServerError,
  PAGE_SIZE,
  AUTH_EXPIRATION,
  MAX_NAME_LENGTH,
  MAX_USERNAME_LENGTH,
  MAX_DESCRIPTION_LENGTH,
  setTokenCookie,
  validateAgainstSchemaProps,
  validateObjectId,
  parseBearerToken,
  SanitizeRole,
}
