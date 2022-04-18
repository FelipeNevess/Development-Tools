FROM node:16-alpine

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

EXPOSE $PORT

ENV NUXT_PORT=$PORT

CMD [ "npm", "start" ]
