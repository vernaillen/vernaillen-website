FROM node:latest

WORKDIR /home/node/app

COPY ./dist/ssr .

# Install deps for production only
RUN npm install --silent && npm cache clean --force

# Expose ports (for orchestrators and dynamic reverse proxies)
EXPOSE 3000

# Start the app
CMD NODE_DEBUG=* node index.js
