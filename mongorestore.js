/* eslint-disable @typescript-eslint/no-var-requires */
const { spawn } = require('child_process');
const { default: appConfig } = require('./config');

/**
 * $ mongorestore <connection-string> <directory or file to restore>
 *
 * For complete docs have a look at
 * https://docs.mongodb.com/database-tools/mongorestore/
 */
spawn('mongorestore', [appConfig.get('DB.connect'), `${appConfig.get('DB.dump_dir')}/frontendro`], { stdio: 'inherit' });
