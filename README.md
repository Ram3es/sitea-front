# Sityea Dash Front

## Docker Test

Build

`docker build -f deploy/Dockerfile -t sityea-front .`

Run

`docker run -p 80:80 sityea-front`

## Docker Deploy (dev version)

Build a tagged image

`docker build -f deploy/Dockerfile -t registry.digitalocean.com/sityea/sityea-front-dev .`

Login with our secret creds :)

`docker login registry.digitalocean.com`

Push docker to registry

`docker push registry.digitalocean.com/sityea/sityea-front-dev`

Digital Ocean apps will redeploy
