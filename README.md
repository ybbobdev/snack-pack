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

1. Create `secrets` file at the root of the repo with the following contents
```bash
export POSTGRES_USERNAME=snack
export POSTGRES_PASSWORD=pack
export PGADMIN_USERNAME=snack@pack.com
export PGADMIN_PASSWORD=pac
```

Local development setup
```
# clone repo locally
git clone git@github.com:ybbobdev/snack-pack.git
cd snack-pack

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

Update [`appConfig.json`](./appConfig.json) for new environments

## Reference
 - See [Duplicating a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository) to start a new project without forking
 - See [`docs/docker-postgres-setup.md`](docs/docker-postgres-setup.md) for handy docker commands for viewing the `postgres` db and `pgadmin`.
 - [Sequilize](https://sequelize.org/master/)
 - [Yarn](https://yarnpkg.com/)
 - [Docker](https://www.docker.com/)
 - [Next js](https://nextjs.org/docs/getting-started)
 - [Tailwind](https://tailwindcss.com/docs)
 - [Tailwind color theme generator](https://tailwind.ink/)