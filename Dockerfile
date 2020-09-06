FROM node:10

WORKDIR /app

COPY package*.json /app/

RUN npm install

ADD app.js /app/
ADD db.js /app/
ADD migrate.js /app/
ADD .env.docker /app/.env
ADD knexfile.js /app/knexfile.js
ADD migrations /app/migrations

RUN ["cat", ".env"]

EXPOSE 3000
CMD ["npm", "start"]