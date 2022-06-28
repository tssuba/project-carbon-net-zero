FROM node:16-bullseye-slim 

RUN apt update

WORKDIR /app

COPY package*.json /app/

RUN npm install --force

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .
