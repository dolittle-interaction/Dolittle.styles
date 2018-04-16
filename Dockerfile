FROM node:9.5.0 AS build
WORKDIR /build
RUN ["npm", "install", "-g", "webpack"]
RUN ["npm", "install", "-g", "webpack-cli"]
COPY ./package.json /build
RUN ["npm", "install"]

COPY ./app/. /build/app
COPY ./src/. /build/src
COPY ./webpack.config.js /build
COPY ./webpack.parts.js /build
COPY ./.npmignore /build

RUN ["webpack","-p"]

FROM nginx
WORKDIR /app
COPY --from=build /build/dist /usr/share/nginx/html