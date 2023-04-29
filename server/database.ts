import mongoose from 'mongoose';
import appConfig from './config/config';

function connectToDb() {
  if (mongoose.connection && mongoose.connection.readyState === 1) {
    /** Early return - already connected */
    return Promise.resolve(mongoose);
  }

  return mongoose.connect(appConfig.DB.connect, {
    maxPoolSize: 1,
  });
}

/** Extract the first human-readable error message from a Mongoose ValidationError */
function extractDbErrorMessage(err: unknown): string {
  if (typeof err === 'object' && 'errors' in err) {
    const keys = Object.keys(err.errors);
    const firstKeyWithErrorMessage = keys.find((key) => err.errors[key].message);

    if (firstKeyWithErrorMessage) {
      return err.errors[firstKeyWithErrorMessage].message;
    }
  }

  if (typeof err === 'object' && '_message' in err && typeof err._message === 'string') {
    return err._message;
  }

  return 'Oops, something went wrong...';
}

export {
  connectToDb,
  extractDbErrorMessage,
}
