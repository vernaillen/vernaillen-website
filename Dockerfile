FROM node:alpine
WORKDIR /home/node/app
COPY ./dist/ssr .
RUN npm install --silent && npm cache clean --force && npm install pm2 -g
EXPOSE 3000
CMD NODE_PORT=3000 pm2-runtime index.js
