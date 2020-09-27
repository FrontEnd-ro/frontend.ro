/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config({ path: './env' });
const path = require('path');

module.exports = {
  webpack: (config, {
    buildId, dev, isServer, defaultLoaders, webpack,
  }) => {
    config.resolve.alias['~'] = path.resolve(__dirname, '.');

    return config;
  },
  env: {
    HOST: process.env.HOST,
    DB_URI: process.env.DB_URI,
  },
};
