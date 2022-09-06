//To Build Image

docker build . -t luisizarra/krowdy-docker

//To Run Image

docker run -p 49160:8080 -d luisizarra/krowdy-docker
