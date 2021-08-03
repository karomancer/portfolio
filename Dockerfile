ARG NODE_VERSION=14.16-alpine3.13

FROM node:"${NODE_VERSION}"

ENV SHELL /bin/bash

ARG PACKAGES="\
    autoconf \
    automake \
    bash \
    build-base \
    ca-certificates \
    chromium \
    execline \
    file \
    freetype \
    freetype-dev \
    gcc \
    git \
    harfbuzz \
    jpeg \
    lcms2-dev \
    less \
    libpng-dev \
    libtool \
    make \
    mandoc \
    musl-dev \
    nasm \
    nss \
    pkgconf \
    tiff \
    ttf-freefont \
    vips-dev \
    zlib \
    zlib-dev \
    "

# Install packages
RUN apk update && \
    apk upgrade && \
    apk add --no-cache ${PACKAGES}

ARG APP_DIR=/app

# Configure Node and PATH
ENV NODE_MODULES_DIR "${APP_DIR}/node_modules"
ENV NODE_BIN_DIR "${NODE_MODULES_DIR}/.bin"
ENV PATH "${NODE_BIN_DIR}:${PATH}"

WORKDIR /app

# Expose the Gatsby server port
EXPOSE 8000

RUN npm install -g gatsby-cli

WORKDIR /app
COPY ./package.json .
RUN yarn install && yarn cache clean
COPY . .
CMD ["yarn", "develop", "-H", "0.0.0.0" ]
