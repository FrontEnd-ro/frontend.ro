/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const yargs = require('yargs');
const { spawn } = require('child_process');
const { hideBin } = require('yargs/helpers');
const packageJson = require('./package.json');

const { argv } = yargs(hideBin(process.argv));

const IMAGE_NAME = argv['image-name'];
const REPOSITORY_ID = argv['repository-id'];

if (IMAGE_NAME === undefined || REPOSITORY_ID === undefined) {
  console.error('Wrong arguments. Expected to receive both "image-name" and "repository-id" as CLI arguments');
  process.exit(1);
}

const awsImageTag = `${REPOSITORY_ID}.dkr.ecr.eu-central-1.amazonaws.com/${IMAGE_NAME}:${packageJson.version}`;
run(awsImageTag);

async function run(awsImageTag) {
  console.log('>>>>> Step 1/4 - authenticate AWS');
  await authenticateDockerToECR(awsImageTag);

  console.log('>>>>> Step 2/4 - build the image');
  await buildImage();

  console.log('>>>>> Step 3/4 - tag the image');
  await tagImage(awsImageTag);

  console.log('>>>>> Step 4/4 - push the image');
  await pushImage(awsImageTag);
}

function authenticateDockerToECR(awsImageTag) {
  const authSpawn = spawn('aws', ['ecr', 'get-login-password', '--region', 'eu-central-1']);
  const dockerSpawn = spawn(
    'docker',
    ['login', '--username', 'AWS', '--password-stdin', awsImageTag],
    { stdio: ['pipe', 'inherit', 'inherit'] },
  );

  authSpawn.stdout.pipe(dockerSpawn.stdin);
  return promisifySpawn(dockerSpawn);
}

function buildImage() {
  // On windows we need `yarn.cmd` instead of `yarn`
  const buildSpawn = spawn('yarn.cmd', ['docker:build'], { stdio: 'inherit' });
  return promisifySpawn(buildSpawn);
}

function tagImage(awsImageTag) {
  const tagSpawn = spawn('docker', ['tag', 'diploma-screenshot:latest', awsImageTag], { stdio: 'inherit' });
  return promisifySpawn(tagSpawn);
}

function pushImage(awsImageTag) {
  const pushSpawn = spawn('docker', ['push', awsImageTag], { stdio: 'inherit' });
  return promisifySpawn(pushSpawn);
}

function promisifySpawn(spawn) {
  return new Promise((resolve, reject) => {
    spawn.on('error', (err) => {
      console.error('Spawn has errored', err);
      reject(err);
    });
    spawn.on('exit', resolve);
  });
}
