/* eslint-disable @typescript-eslint/no-var-requires */
const { spawn } = require('child_process');
const { default: appConfig } = require('./config');

// https://docs.aws.amazon.com/cli/latest/reference/s3/index.html
spawn('aws', [
  's3',
  'cp',
  appConfig.DB.dump_dir,
  `${appConfig.AWS.s3}/${appConfig.DB.dump_dir}`,
  '--recursive',
], { stdio: 'inherit' });
