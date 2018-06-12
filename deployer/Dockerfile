FROM phpdockerio/php72-cli:latest

RUN apt-get update \
    && apt-get -y --no-install-recommends install openssh-client \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

ENV DEP_HOME /deployer
ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_VERSION 1.6.3

RUN mkdir $DEP_HOME
WORKDIR $DEP_HOME

RUN composer global require "deployer/deployer"

ENV PATH /root/.composer/vendor/bin:$PATH

RUN mkdir /root/.ssh
COPY id_rsa /root/.ssh/id_rsa
RUN chmod 600 /root/.ssh/id_rsa

CMD "/bin/bash"
