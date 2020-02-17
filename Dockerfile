FROM nginx:stable-alpine
COPY ./dist/pwa /usr/share/nginx/html
