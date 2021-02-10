// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  distDir: 'dist',
  env: {
    APP_ENV: process.env.APP_ENV,
    ENDPOINT: process.env.ENDPOINT,
    CLOUDFRONT_PUBLIC: 'https://d3tycb976jpudc.cloudfront.net',

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
