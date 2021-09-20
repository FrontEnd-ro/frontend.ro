/* eslint-disable @typescript-eslint/no-var-requires */
const { spawn } = require('child_process');
require('dotenv').config();

/**
 * $ mongodump <options> <connection-string>
 *
 * For complete docs have a look at
 * https://docs.mongodb.com/database-tools/mongodump/
 */
spawn('mongodump', [`-o=${process.env.MONGODB_DUMP_DIR}`, process.env.DB_CONNECT], { stdio: 'inherit' });
