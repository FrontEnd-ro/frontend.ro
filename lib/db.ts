import mongoose from 'mongoose';
import { serverEnv } from './server-env';

/**
 * Serverless-safe MongoDB connection used by the read-only archive.
 *
 * This replaces the old custom Express server's `server/database.ts`. The
 * connection string is validated via `serverEnv()` (Zod), and the connection is
 * cached on the Node global so it survives across serverless invocations
 * (Vercel) and is not re-opened on every request.
 *
 * NOTE: `DB_CONNECT` is only read server-side and is never exposed to the
 * client bundle.
 */

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalForMongoose = global as unknown as { __mongoose?: MongooseCache };

const cached: MongooseCache = globalForMongoose.__mongoose ?? { conn: null, promise: null };
globalForMongoose.__mongoose = cached;

export async function connectToDb(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const { DB_CONNECT } = serverEnv();
    cached.promise = mongoose.connect(DB_CONNECT, { maxPoolSize: 1 });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
