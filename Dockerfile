FROM node:9.11

ENV YARN_VERSION 1.7.0
ENV PATH /app/node_modules/.bin:$PATH

RUN useradd dev && \
    mkdir -p /home/dev/.cache/yarn && \
    chown -R dev:dev /home/dev

USER dev

RUN mkdir -p /home/dev/.config/insight-nodejs/ && \
    echo '{\n  "clientId": 855164297496,\n  "optOut": false}' > /home/dev/.config/insight-nodejs/insight-yo.json 

