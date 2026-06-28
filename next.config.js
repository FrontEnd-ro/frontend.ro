// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// Read-only archive on Vercel: configuration is just environment variables.
// Vercel injects them at build + runtime, and Next.js auto-loads `.env.local`
// for local dev — so we no longer need `node-config`. The defaults below are
// the production values for frontend.ro, so the app builds and runs out of the
// box without any env setup. (DB_CONNECT is read server-side in `lib/db.ts` and
// is intentionally NOT exposed here.)
const nextConfig = {
  env: {
    APP_ENV: process.env.APP_ENV || 'production',
    APP_URL: process.env.APP_URL || 'https://frontend.ro',
    ENDPOINT: process.env.ENDPOINT || '/api',
    CLOUDFRONT_PUBLIC: process.env.CLOUDFRONT_PUBLIC || 'https://d3tycb976jpudc.cloudfront.net',
    LANGUAGE: process.env.LANGUAGE || 'ro',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3tycb976jpudc.cloudfront.net',
      },
    ],
  },
  sassOptions: {
    // The legacy SCSS uses `@import` / `map-get` / `lighten`, which Dart Sass
    // now flags as deprecated. We're archiving this project, not migrating to
    // Sass 3, so silence the noise instead of rewriting every stylesheet.
    silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'legacy-js-api'],
    quietDeps: true,
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
