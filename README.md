## To Build Docker Image

```
docker build . -t luisizarra/backend:1.0
```

## To Run Docker Image

```
docker run -p 8085:8085 -d luisizarra/backend:1.0
```

### To run mysql and express app

```
docker-compose up --build --force-recreate --no-deps
```
