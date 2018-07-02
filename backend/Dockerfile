FROM phpdockerio/php72-cli:latest

ENV APP_HOME /app

ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME /tmp
ENV COMPOSER_VERSION 1.6.3
ENV COMPOSER_PROCESS_TIMEOUT 3600

RUN apt-get update \
    && apt-get -y --no-install-recommends install  php7.2-mysql php-xdebug \
    && apt-get -y --no-install-recommends install git \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

# Create app directory
RUN mkdir $APP_HOME
WORKDIR $APP_HOME
