/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  env: {
    ENDPOINT: '/api',
  },
  webpack: (config, {
    buildId, dev, isServer, defaultLoaders, webpack,
  }) => {
    config.resolve.alias['~'] = path.resolve(__dirname, '.');

    return config;
  },
};
