// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  distDir: 'dist',
  env: {
    ENDPOINT: '/api',
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
