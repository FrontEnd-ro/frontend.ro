import mongodb from 'mongodb';

export { v4 as uuid } from 'uuid';
const { MongoClient } = mongodb;
const { DB_NAME } = process.env;

export const getDbClient = async (uri, collectionName, dbName = DB_NAME) => {
  try {
    console.log('Connecting to Mongo client...');
    // eslint-disable-next-line max-len
    const dbClient = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
    const db = dbClient.db(dbName);
    return db.collection(collectionName);
  } catch (err) {
    console.log('Error encountered connecting to database: ', err);
    throw err;
  }
};
