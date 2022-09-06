//To Build Image

docker build . -t luisizarra/backend:1.0

//To Run Image

docker run -p 8085:8085 -d luisizarra/backend:1.0
