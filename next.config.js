// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// Importing the non TypeScript version, as it's not supported here
const appConfig = require('./server/config/config');

const nextConfig = {
  distDir: 'dist',
  env: {
    APP_ENV: appConfig.APP.env,
    APP_URL: appConfig.APP.app_url,
    ENDPOINT:  appConfig.APP.endpoint,
    CLOUDFRONT_PUBLIC: appConfig.CDN.static,
    GITHUB_CLIENT_ID: appConfig.GITHUB.id,
    RESET_CODE_LENGTH: appConfig.PASS_RESET_CODE.length,
    LANGUAGE: appConfig.APP.language,
  },
  images: {
    domains: ['d3tycb976jpudc.cloudfront.net'],
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: 'raw-loader',
      },
    );

    config.resolve.alias['~'] = path.resolve(__dirname, './client');

    return config;
  },
};

module.exports = nextConfig;
