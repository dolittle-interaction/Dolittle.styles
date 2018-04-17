FROM node:9.5.0 AS build
WORKDIR /build
COPY ./package.json /build
RUN ["npm", "install"]

COPY ./app/. /build/app
COPY ./src/. /build/src
COPY ./webpack.config.js /build
COPY ./webpack.parts.js /build
COPY ./.npmignore /build

RUN ["node node_modules/webpack/bin/webpack.js","-p"]

FROM nginx
WORKDIR /app
COPY --from=build /build/dist /usr/share/nginx/html