FROM node:14.15.4-alpine3.12
# Reduce NODE version

RUN apk add --no-cache bash
# Install bash

RUN npm i -g

ENV DOCKERIZE_VERSION v0.6.1
# Forget about this... :D

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz
# This to...

USER node
# Especify the non root user.

WORKDIR /src
# I really really need explain this?

ADD . /src/
#Happy Hacking!!!!
