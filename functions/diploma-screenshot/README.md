# diploma-screenshot

This documents just the specific features of the `diploma-screenshot` function. If you wanna find out how to provision and deploy function, read `functions/README.md` or run `yarn deploy` with the correct arguments.

## About

This function uses [Puppeteer](https://github.com/puppeteer/puppeteer) (headless chrome) to generate both:

1. a screenshot of the diploma, used as an `og:image`
2. a PDF document, available as download to the user

However, instead of using directly the `puppeteer` and `puppeteer-core` packages, we're using a wrapper - `chrome-aws-lambda` - which contains all the necesary dependencies for it to correctly run inside an AWS Lambda.

## .env

To correctly run this function locally we need to setup some AWS credentials into a `.env` file:

```
AWS_BUCKET=
AWS_ACCESS_KEY_ID=
CLOUDFRONT_UPLOAD=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=eu-central-1
```

## Docker

See `Dockerfile` for docker build commands.
