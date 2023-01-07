
# Docker Execution Intructions

Recommended: `docker-compose up -d --build`

Alternative: 

1) Build: `docker build -t tag:version .`

i.e.: `docker build -t frontend:v0.1 . -f ./Dockerfile`

2) Run: `docker run -it --rm -p 3000:3000 tag_name:version_num`

i.e.: `docker run -it --rm -p 3000:3000 frontend:v0.1`

Execute command within container: `docker exec -t -i mycontainer /bin/sh`
