git pull
npm run docker-build
docker rm vernaillen-website --force
npm run docker-start
