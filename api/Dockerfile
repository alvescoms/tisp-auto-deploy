FROM node:alpine

WORKDIR /usr/src/app/api

RUN apk update
RUN apk add git

COPY package*.json ../

RUN npm install

COPY . .

EXPOSE ${SERVER_PORT}