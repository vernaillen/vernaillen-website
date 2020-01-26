#! /bin/bash
npm run docker-build
docker rm vernaillen-website --force
npm run docker-start
docker logs -f vernaillen-website
