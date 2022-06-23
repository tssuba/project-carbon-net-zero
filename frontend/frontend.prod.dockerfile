FROM node:16-bullseye-slim as stage-1

RUN apt update && apt install -y git

WORKDIR /app    

COPY package*.json /app/

RUN npm install --force

COPY . .

RUN npm run build


# Stage 2 : Deploy the build using nginx

FROM nginx:1.18.0-alpine

COPY --from=stage-1 /app/build /usr/share/nginx/html

RUN rm -v /etc/nginx/conf.d/default.conf

COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
