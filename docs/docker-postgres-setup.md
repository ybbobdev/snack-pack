# Docker commands

Start docker services
```
docker-compose up
```

Get images
```
docker pull postgres:latest
docker pull dpage/pgadmin4
```

Optional kill all docker containers and volumes
```
docker rm $(docker ps -a -q) -f
docker volume rm $(docker volume ls -q)
rm -rf postgres-data
rm -rf pgadmin-data
```

checkout the container and db
```
docker exec -it snack-pack_postgres_1 bash
psql -h localhost -U snack -d snackPackDb
```


get IP for postgres instance
```
docker inspect snack-pack_postgres_1 -f "{{json .NetworkSettings.Networks }}"
```
