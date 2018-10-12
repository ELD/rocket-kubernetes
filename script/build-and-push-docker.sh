#!/usr/bin/env bash

docker build -f docker/Dockerfile -t edattore/rocket-app .
docker push edattore/rocket-app
