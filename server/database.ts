
export {};
const mongoose = require('mongoose')

function connectToDb() {
  if (mongoose.connection && mongoose.connection.readyState === 1) {
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
function extractDbErrorMessage(err) {
  if (err.errors) {
    const keys = Object.keys(err.errors);
    const firstKeyWithErrorMessage = keys.find((key) => err.errors[key].message);

    if (firstKeyWithErrorMessage) {
      return err.errors[firstKeyWithErrorMessage].message;
    }
  }

  return err._message || 'Oops, something went wrong...';
}


export{
  connectToDb,
  extractDbErrorMessage
}