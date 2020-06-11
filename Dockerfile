FROM node:12.18.0-alpine

ENV APP_PATH /app/docker-vue

WORKDIR $APP_PATH

COPY package*.json ./

RUN npm install
RUN npm install -g serve

COPY . .

EXPOSE 8080

ENTRYPOINT ["bin/docker-entrypoint.sh"]

CMD ["serve", "-s", "dist"]