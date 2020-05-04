FROM node:12
WORKDIR /app
ADD ./src/. /app/src/
ADD ./src-pwa/. /app/src-pwa/
ADD ./src-ssr/. /app/src-ssr/
ADD ./*.json /app/
ADD ./*.js /app/
RUN yarn install && yarn build
WORKDIR /app/dist/ssr
EXPOSE 3000
CMD yarn start
