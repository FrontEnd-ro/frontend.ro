# Code snippet adapted from 
# https://docs.aws.amazon.com/lambda/latest/dg/images-create.html

FROM public.ecr.aws/lambda/nodejs:14

# Without this the GitHub Action that's in charge of building and
# pushing this functions errors our at the `COPY` step below.
ENV LAMBDA_TASK_ROOT=/var/task/

# Build directory is "dist", and there is a package.json file in the app directory 
COPY config  ${LAMBDA_TASK_ROOT}/config
COPY dist  ${LAMBDA_TASK_ROOT}/dist
COPY package.json ${LAMBDA_TASK_ROOT}

RUN npm install -g yarn

# Install NPM dependencies for function
RUN yarn

# Set the CMD to your handler
CMD [ "./dist/functions/notifications-cron/src/index.handler" ] 
