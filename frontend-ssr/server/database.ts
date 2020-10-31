import mongoose from 'mongoose';
import { ServerError } from './ServerUtils';

export function connectToDb() {
  if (mongoose.connection.readyState === 1) {
    /** Early return - already connected */
    return Promise.resolve(mongoose);
  }

  return mongoose.connect(process.env.DB_CONNECT, {
    poolSize: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}

/** Extract the first human-readable error message from a Mongoose ValidationError */
export function extractDbErrorMessage(err: { errors?: any, _message?: string}) :string {
  if (err.errors) {
    const keys = Object.keys(err.errors);
    const firstKeyWithErrorMessage = keys.find((key) => err.errors[key].message);

    if (firstKeyWithErrorMessage) {
      return err.errors[firstKeyWithErrorMessage].message;
    }
  }

  return err._message || 'Oops, something went wrong...';
}

/** Verify that payload doesn't have extra props not present on the Schema */
export function validateAgainstSchemaProps(payload, Schema: mongoose.Schema) {
  const keys = Object.keys(payload);

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    if (!(key in Schema.obj)) {
      throw new ServerError(400, `Property '${key}' cannot be directly set.`);
    }
  }
}
