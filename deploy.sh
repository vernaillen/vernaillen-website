git pull
npm run docker-build
docker rm vernaillen-website --force
docker run  --name vernaillen-website -d -p 3000:3000 vernaillen/vernaillen-website:latest
