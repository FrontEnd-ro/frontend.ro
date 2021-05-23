// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  distDir: 'dist',
  env: {
    APP_ENV: process.env.APP_ENV,
    ENDPOINT: process.env.ENDPOINT,
    CLOUDFRONT_PUBLIC: process.env.CLOUDFRONT_PUBLIC,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,

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
