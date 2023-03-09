FROM node:alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package.json 
COPY package-lock.json package-lock.json 

RUN npm install

COPY . .

CMD ["npm", "start"]

# FROM alpine:latest

# RUN apk add --no-cache node npm

# WORKDIR /app

# COPY package.json package-lock.json
# COPY package-lock.json package-lock.json

# RUN npm install

# COPY . .

# ENTRYPOINT [ "npm", "start" ]

# RUN npm build

# FROM nginx:alpine

# WORKDIR /usr/share/nginx/html

# RUN rm -rf ./*

# COPY --from= /app/build .

# ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

