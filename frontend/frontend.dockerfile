FROM node:16-bullseye-slim 

RUN apt update

WORKDIR /app

COPY package*.json /app/

RUN npm install --force

COPY . .