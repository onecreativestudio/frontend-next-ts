
# Docker Execution Intructions

Build: `docker build -t alps:v1 .`

Run: `docker run --rm -p 3000:3000 alps:v1`

Execute command within container: `docker exec -t -i mycontainer /bin/sh`
