FROM node:16-alpine

WORKDIR /app

EXPOSE 8000

COPY package.json yarn.lock  /app/

RUN yarn install

ADD . /app/

RUN yarn build

CMD [ "yarn", "start" ]