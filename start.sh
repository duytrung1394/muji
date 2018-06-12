#!/bin/bash

# move to this script's dir
cd `dirname $0`

# build all containers
docker-compose build

# launch backend
docker-compose up -d backend

# launch frontend
docker-compose up -d frontend
