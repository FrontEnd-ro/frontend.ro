/* eslint-disable @typescript-eslint/no-var-requires */
const { spawn } = require('child_process');
require('dotenv').config();

/**
 * $ mongorestore <connection-string> <directory or file to restore>
 *
 * For complete docs have a look at
 * https://docs.mongodb.com/database-tools/mongorestore/
 */
spawn('mongorestore', [process.env.DB_CONNECT, `${process.env.MONGODB_DUMP_DIR}/frontendro`], { stdio: 'inherit' });
