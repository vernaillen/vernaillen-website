FROM node:alpine
WORKDIR /home/node/app
COPY ./dist/ssr .
RUN npm install --silent && npm cache clean --force
EXPOSE 3000
CMD npm start index.js
