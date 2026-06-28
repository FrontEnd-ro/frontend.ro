import { z } from 'zod';

/**
 * Public, build-time-inlined environment for the read-only archive.
 *
 * These values are provided by the `env` block in `next.config.js`, which Next
 * inlines into BOTH the client and server bundles. We reference each
 * `process.env.X` literally below so the inlining works, then validate once
 * with Zod — if any are missing/invalid the app fails fast at startup instead
 * of rendering with `undefined`.
 *
 * Import this everywhere instead of reaching for `process.env.*` directly.
 * (The server-only secret `DB_CONNECT` lives in `lib/server-env.ts`.)
 */
const publicEnvSchema = z.object({
  APP_ENV: z.string().default('production'),
  APP_URL: z.string().url(),
  ENDPOINT: z.string().min(1),
  CLOUDFRONT_PUBLIC: z.string().url(),
  LANGUAGE: z.enum(['ro', 'en']),
});

export const env = publicEnvSchema.parse({
  APP_ENV: process.env.APP_ENV,
  APP_URL: process.env.APP_URL,
  ENDPOINT: process.env.ENDPOINT,
  CLOUDFRONT_PUBLIC: process.env.CLOUDFRONT_PUBLIC,
  LANGUAGE: process.env.LANGUAGE,
});

export type PublicEnv = typeof env;
