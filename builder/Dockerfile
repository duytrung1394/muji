# NOTE: docker-compose で context: . する
FROM node:8.9.4

ENV APP_HOME /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Create app directory
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

# Install yarn dependencies
COPY ./frontend/package.json $APP_HOME
COPY ./frontend/yarn.lock $APP_HOME
RUN yarn install
