FROM node:9.11

ENV YARN_VERSION 1.7.0
ENV APP_HOME /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Create app directory
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
