#!/bin/bash

# Exit on Error
set -eu

# setup docker env
docker-compose build

docker-compose run --rm backend composer install
docker-compose run --rm frontend yarn install

docker-compose run --rm backend php artisan migrate:refresh
docker-compose run --rm backend composer dump-autoload
docker-compose run --rm backend php artisan db:seed


