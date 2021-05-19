# environment setup

```
# local mount point for db data
if [ -d "${PWD}/postgres-data" ]; then rm -rf ${PWD}/postgres-data && mkdir ${PWD}/postgres-data/; fi

# optional, kill all docker containers and volumes
docker rm $(docker ps -a -q) -f
docker volume rm $(docker volume ls -q)

# start postgres
docker pull postgres:latest
docker run -d --name dev-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=devDb -e POSTGRES_USER=dev -v ${PWD}/postgres-data/:/var/lib/postgresql/data -v ${HOME}/docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d -p 5432:5432 postgres

# checkout the container and db
docker exec -it dev-postgres bash
psql -h localhost -U dev -d devDb

# start pgadmin
docker pull dpage/pgadmin4
docker run -p 8080:80 -e 'PGADMIN_DEFAULT_EMAIL=dev@dev.com' -e 'PGADMIN_DEFAULT_PASSWORD=password' --name dev-pgadmin -d dpage/pgadmin4

# get IP for postgres instance
docker inspect dev-postgres -f "{{json .NetworkSettings.Networks }}"
```

# postgres init scripts

```
#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER docker;
    CREATE DATABASE docker;
    GRANT ALL PRIVILEGES ON DATABASE docker TO docker;
EOSQL
```


### Reference
 - [https://hub.docker.com/_/postgres](https://hub.docker.com/_/postgres)
 - [https://towardsdatascience.com/local-development-set-up-of-postgresql-with-docker-c022632f13ea](https://towardsdatascience.com/local-development-set-up-of-postgresql-with-docker-c022632f13ea)



```
if [ -d "${PWD}/postgres-data" ]; then rm -rf ${PWD}/postgres-data && mkdir ${PWD}/postgres-data/; fi
docker rm $(docker ps -a -q) -f && docker volume rm $(docker volume ls -q)
docker run -d --name dev-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=devDb -e POSTGRES_USER=dev -v ${PWD}/postgres-data/:/var/lib/postgresql/data -v ${HOME}/docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d -p 5432:5432 postgres

docker run -p 8080:80 -e 'PGADMIN_DEFAULT_EMAIL=dev@dev.com' -e 'PGADMIN_DEFAULT_PASSWORD=password' --name dev-pgadmin -d dpage/pgadmin4
docker inspect dev-postgres -f "{{json .NetworkSettings.Networks }}"
```
