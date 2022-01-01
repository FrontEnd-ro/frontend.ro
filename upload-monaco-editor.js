/* eslint-disable @typescript-eslint/no-var-requires */

// Have a look at README.md (the Monaco Editor section)
// to understand why we need this GitHub Action.
const { spawn } = require('child_process');
const packageJson = require('./package.json');
const { default: appConfig } = require('./config');

const monacoVersion = packageJson.dependencies['monaco-editor'];
const monacoS3Path = `${appConfig.AWS.s3}/lib/monaco-editor/${monacoVersion}`;

// https://docs.aws.amazon.com/cli/latest/reference/s3/index.html
const verifyAlreadyUploaded = () => {
  // The `aws s3 ls` command will not output anything
  // if the URI doesn't exist. This is what we use to check
  // that something has been uploaded on `monacoS3Path`
  return new Promise((resolve) => {
    const ls = spawn('aws', [
      's3',
      'ls',
      '--region',
      'eu-west-1',
      monacoS3Path,
    ]);

    ls.stdout.on('data', (data) => {
      resolve(true);
      console.log('[verifyAlreadyUploaded.stdout]', data.toString());
    });

    ls.stderr.on('data', (data) => {
      resolve(false);
      console.log('[verifyAlreadyUploaded.stderr]', data.toString());
    });

    ls.on('close', () => {
      // If neither of the above listeners have been called,
      // it means that the command didn't output anything,
      // thus this version hasn't been uploaded.
      // We don't have to worry about concurrency,
      // as a Promise can only be resolved once
      resolve(false);
    });
  });
};

verifyAlreadyUploaded().then((isAlreadyUploaded) => {
  if (isAlreadyUploaded) {
    console.log(`Monaco version ${monacoVersion} has already been uploaded. Exiting.`);
    return;
  }

  spawn('aws', [
    's3',
    'cp',
    '--region',
    'eu-west-1',
    '--acl',
    'public-read',
    'node_modules/monaco-editor/min/',
    monacoS3Path,
    '--recursive',
  ], { stdio: 'inherit' });
});
