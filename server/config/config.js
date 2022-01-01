// This plain JS file will be imported from places where
// there is not TS support (eg: next.config.js).
// Everything else will import 'index.ts' which adds types.
require('dotenv').config();
const config = require('config');

const appConfig = {
  AUTH: config.get('AUTH'),
  APP: config.get('APP'),
  DB: config.get('DB'),
  CDN: config.get('CDN'),
  PASS_RESET_CODE: config.get('PASS_RESET_CODE'),
  AWS: config.get('AWS'),
  EMAIL: config.get('EMAIL'),
  GITHUB: config.get('GITHUB')
};

module.exports = appConfig;
