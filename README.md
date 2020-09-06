# To run application 
npm start

# To run application in Docker
1. Build docker image (specify image name)
   docker build -t node-docker

2. Run app
   docker run -it -p 3000:3000 node-docker