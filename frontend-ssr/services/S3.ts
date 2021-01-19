import aws from 'aws-sdk';

aws.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
});
const S3_BUCKET = process.env.AWS_BUCKET_NAME;

