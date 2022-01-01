/* eslint-disable @typescript-eslint/no-var-requires */
const { spawn } = require('child_process');
const { default: appConfig } = require('./server/config');

/**
 * $ mongodump <options> <connection-string>
 *
 * For complete docs have a look at
 * https://docs.mongodb.com/database-tools/mongodump/
 */
spawn('mongodump', [`-o=${appConfig.DB.dump_dir}`, appConfig.DB.connect], { stdio: 'inherit' });
