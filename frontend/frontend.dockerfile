FROM node:16-bullseye-slim 

WORKDIR /app/

# Install dependencies
COPY package.json package-lock.json /app/

RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

# Add rest of the client code
COPY . /app/

EXPOSE 3000
