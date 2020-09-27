import { getDbClient } from '../../../services/Utils';

const { DB_URI } = process.env;
// no model created for user since it's in another PR
// eslint-disable-next-line consistent-return
export default async (req, res) => {
  if (req.method === 'GET') {
    const { username } = req.query;
    const db = await getDbClient(DB_URI, 'users');
    const user = await db.findOne({ username }); // add projection in future (for pw and salt)

    return user ? res.status(200).json(user) : res.status(404).end();
  }

  if (req.method === 'PUT') {
    const { username } = req.query;
    const { username: updatedUsername, email, name } = JSON.parse(req.body);
    const db = await getDbClient(DB_URI, 'users');

    try {
      await db.findOneAndUpdate({ username }, {
        $set: {
          username: updatedUsername,
          email,
          name,
        },
      });

      return res.status(200).json({
        success: true,
      });
    } catch (err) {
      if (err.codeName === 'DuplicateKey') {
        const [duplicatedKey] = Object.keys(err.keyPattern);
        return res.status(200).json({
          success: false,
          duplicatedKey,
        });
      }

      return res.status(404).json({}).end();
    }
  }
};
