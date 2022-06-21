FROM --platform=amd64 node:16-bullseye-slim 

WORKDIR /app

RUN apt-get update \
    && apt-get install gcc -y \
    && apt-get clean 

COPY package*.json ./

RUN npm install --force

EXPOSE 3000