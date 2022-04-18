# notifications-cron

Lambda Function used to send notifications to inactive users, inviting them to finish the exercises.

> NOTE: this lambda function is not called manually, but instead scheduled as a CRON (see AWS)

## Architecture

The function code is inside `src/index.ts`. This pulls in code from the main project (ie: the `server` and `shared` folders).

Thus, we need 

## How to install

1. Run `yarn` in the root folder of this entire project.

Without this, TSC will complain when compiling the code. This seems like a bug/hack, but for now it works so it doesn't hurt to leave it like this.

2. Run `yarn` inside this function folder

3. Setup `.env` variables

Since we're using code from the main app, we need to set up a few ENV Variables that are used by it.

```ini
; Which config file to use as base configuration
; For available values look at the main `README.md` and also at how this package works: https://www.npmjs.com/package/config
NODE_CONFIG_ENV=

; DB Connection String
DB_CONNECT=

; Postmark API token to send Emails
EMAIL_TOKEN=

# Whether to actually send the notifications, or simply to log the result, without any side effects.
# This is an ENV Variable custom to this function
DRY_RUN=false
```

## How to build and run

`yarn build` will create the output `dist` folder together and copy some other files needed from the main project.

`yarn start` will run the function. However, because it's meant to be used as a Lambda Function, just running the code doesn't do anything, since the main `run()` function is only exported, not called. Thus, if you want to run it locally, add a call to `run()` inside the `src/index.ts` file then run both: `yarn build && yarn start`.

## How to deploy to AWS Lambda

A Docker image is automatically created via GitHub Actions (see `notificationsCron.yml`). Thus, to deploy a new version of this function:

1. push the code changes
2. wait for the Docker image to build and push to ECR
3. replace the Docker image for the Lambda Function