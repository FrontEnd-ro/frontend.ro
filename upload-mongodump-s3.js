/* eslint-disable @typescript-eslint/no-var-requires */
const { spawn } = require('child_process');
require('dotenv').config();

// https://docs.aws.amazon.com/cli/latest/reference/s3/index.html
spawn('aws', [
  's3',
  'cp',
  process.env.MONGODB_DUMP_DIR,
  `${process.env.BASE_S3_URI}/${process.env.MONGODB_DUMP_DIR}`,
  '--recursive',
], { stdio: 'inherit' });
