# To run application 

npm start

# To run application in Docker

1. Build docker image (specify image name, create in current directory)

   docker build -t node-docker .

2. Run app

   docker run -it -p 3000:3000 node-docker


# To run application with docker compose

1. Build docker image (specify image name)

   docker build -t node-docker .

2. Create database (first time only, db is name of database service in docker-compose)

   docker-compose up --force-recreate db

3. Run migration (web is name of web applicaiton in docker-compose)   

   docker-compose run web npm run migrate

4. Run application (-d is to run in background)

   docker-compose up
   or
   docker-compose up -d

5. To stop application

   docker-compose down