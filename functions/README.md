# [AWS Lambda Functions](https://aws.amazon.com/lambda/)

## Motivation for container images

There are multiple ways to deploy AWS Lambda functions. The easiest one is to use a `.zip` archive (for example created with [7zip](https://www.7-zip.org/)). 

However, this method limits the maximum size to 250MB, thus it's not usefull for the `diploma-screenshot` function that includes [puppeteer](https://github.com/puppeteer/puppeteer). 

Thus, we're going to deploy all our functions using [container images](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html).

## How to provision, deploy and run

**0. Log into AWS with the correct IAM user and switch to `eu-central-1`**

**1. Create a new repository**

You can do this from the UI: https://eu-central-1.console.aws.amazon.com/ecr/home (enable "Scan on Push" option)

**2. Authenticate Docker to this new container registry.**

You can find the command in the UI (under "View Push Commands") or just replace with the correct repository ID below:

```
aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin {REPOSITORY_ID}.dkr.ecr.eu-central-1.amazonaws.com
```

**3. Build the docker image**

Every function has a `yarn docker:build` NPM script that builds the image using the `latest` tag.

[Optionally] We can test it locally by running:

```
yarn docker:run:local
```

and then making POST requests at this endpoint

```
POST http://localhost:9000/2015-03-31/functions/function/invocations
```


**4. Tag the docker image**

If the generated image has the `latest` tag, then use the follosing code to tag it for the new repository

```
docker tag {IMAGE_NAME}:latest {REPOSITORY_ID}.dkr.ecr.eu-central-1.amazonaws.com/{IMAGE_NAME}:{ECR_TAG}
```

**5. Push the image**

```
docker push {REPOSITORY_ID}.dkr.ecr.eu-central-1.amazonaws.com/{IMAGE_NAME}:{ECR_TAG}
```

**6. Create a new function**

We can do this from the UI: https://eu-central-1.console.aws.amazon.com/lambda/home?region=eu-central-1#/functions (be careful of the region where we're creating this).

Click the "Create Function" button and then pick "Container Image":

* Function name: {FUNCTION_NAME}
* Container image URI {REPOSITORY_ID}.dkr.ecr.eu-central-1.amazonaws.com/{IMAGE_NAME}:latest

**7. Configure function memory and timeout (optional)**

For the functions that need more memory (eg: the `diploma-screenshot`) go into *Configuration > Edit* and change with the necessary memory and timeout.

Depending on what the function does, it may need additional permissions (eg: push data to S3). Grant additional policies here: https://console.aws.amazon.com/iamv2/home#/home

Eg: for the `diploma-screenshot` function 512 MB and 30 seconds seems to work

**8. Change function image**

To change the function to another docker image go into the UI: *Image > Deploy new image*

**9. Create an API Gateway (optional)**

We want to trigger our functions via HTTP Calls. To do this first we need to create an API Gateway: https://eu-central-1.console.aws.amazon.com/apigateway/main/create?region=eu-central-1 (make sure the region is ok).

Select **Lambda** for the *Integrations* section and then follow the Wizard. At the end, we'll be able to call this (unauthenticated) API.

**10. Add Authentication to API Gateway (optional)**

We don't want our functions to be public, thus we're going to authorize them using IAM. This way, only IAM users with permissions can call the functions.

Go to the *Developer > Authorization* tab, select the desired route and attaching `IAM (built-in)` authorizer. Now if we try and call it from Postman, it will fail with `403:Forbidden`.

Thus, we're going to call it from the SDK.

**11. Call the function from the AWS SDK**

First we'll need to grant our user the appropriate IAM policy: `AWSLambdaRole `. Afterwards, modify the sample code below and it should work:


```js
import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda';

const lambda = new LambdaClient({});
  const invokeCommand = new InvokeCommand({
    FunctionName: 'FUNCTION_NAME',
    InvocationType: 'RequestResponse',
    Payload: Buffer.from(JSON.stringify(payload), 'utf-8'),
  });

  const response = await lambda.send(invokeCommand);

  const asciiDecoder = new TextDecoder('ascii');
  const responsePayload = asciiDecoder.decode(response.Payload);

  console.log(responsePayload);
```
