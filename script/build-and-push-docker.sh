#!/usr/bin/env bash

docker build -f docker/Dockerfile -t edattore/k8s-rocket-app .
docker push edattore/k8s-rocket-app
