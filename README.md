# Snack Pack
Boiler plate collection of applications needed for a full stack web site.
 - Typescript
 - Sequilize (TBD)
 - Tailwind
 - Express
 - Nextjs
 - Postgres (TBD)
 - GCP configs (TBD)

## Develoment
See "Duplicating a repository" to start a new project without forking

Local development setup
```
# start postgres and pgadmin
docker-compose up

# start site and api
nvm use
yarn install
yarn dev
```

Preview site
 - SITE: [http://localhost:3030/](http://localhost:3030/)
 - API: [http://localhost:3031/](http://localhost:3031/__health)
 - PG ADMIN: [http://localhost:8080/](http://localhost:3031/__health)

Update [`appConfig.json`](./appConfig.json) for new environments

## Reference
 - [Duplicating a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository)
 - [Sequilize](https://sequelize.org/master/)
 - [Next js](https://nextjs.org/docs/getting-started)
 - [Tailwind](https://tailwindcss.com/docs)
 - [Tailwind color theme generator](https://tailwind.ink/)