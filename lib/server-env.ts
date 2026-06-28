import { z } from 'zod';

/**
 * Server-only environment (never exposed to the client bundle).
 *
 * `DB_CONNECT` is the MongoDB connection string used to read content at request
 * time. It is a real runtime env var (set in the Vercel dashboard, or in
 * `.env.local` for local dev) — NOT inlined at build.
 *
 * Validation is LAZY (memoized on first call) on purpose: it must run at
 * request time, not during `next build`, so the build doesn't require a live
 * DB connection string. The first request that needs the DB fails fast with a
 * clear error if it's missing.
 */
const serverEnvSchema = z.object({
  DB_CONNECT: z.string().min(1, 'DB_CONNECT (MongoDB connection string) is required'),
});

let cached: z.infer<typeof serverEnvSchema> | undefined;

export function serverEnv(): z.infer<typeof serverEnvSchema> {
  if (!cached) {
    cached = serverEnvSchema.parse({ DB_CONNECT: process.env.DB_CONNECT });
  }
  return cached;
}
