/* eslint-disable @typescript-eslint/no-var-requires */

// Have a look at README.md (the Monaco Editor section)
// to understand why we need this GitHub Action.
const { spawn } = require('child_process');
const packageJson = require('./package.json');

const monacoVersion = packageJson.dependencies['monaco-editor'];

// https://docs.aws.amazon.com/cli/latest/reference/s3/index.html
spawn('aws', [
  's3',
  'cp',
  '--region',
  'eu-west-1',
  '--acl',
  'public-read',
  'node_modules/monaco-editor/min/',
  `${process.env.BASE_S3_URI}/lib/monaco-editor/${monacoVersion}`,
  '--recursive',
], { stdio: 'inherit' });
