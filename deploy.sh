#!/bin/bash

# move to this script's dir
cd `dirname $0`

echo "Building Deployer container ..."

docker-compose build deployer

echo "Start Deploying..."

docker-compose run --rm deployer /bin/bash deploy.sh

echo "Done."
