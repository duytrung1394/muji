#!/bin/bash

# Exit on Error
set -eu

docker-compose run --rm backend composer install
docker-compose run --rm frontend yarn install

docker-compose run --rm backend php artisan migrate
docker-compose run --rm backend composer dump-autoload

