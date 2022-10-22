FROM node:16-alpine
RUN apk add g++ make py3-pip

ARG NODE_CONFIG_ENV
ENV NODE_CONFIG_DIR server/config

COPY . .
RUN yarn
RUN yarn build
EXPOSE 3300
CMD [ "node", "server-build/server/server.js" ]
