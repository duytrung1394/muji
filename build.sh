#!/bin/bash

# move to this script's dir
cd `dirname $0`

docker-compose run --rm frontend yarn build
# use /bin/cp, prevent from "cp -i" aliasing
/bin/cp -rf frontend/public backend/public
/bin/cp -f frontend/public/index.html backend/resources/views/index.blade.php


