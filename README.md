# Snack Pack
![snack pack](docs/images/snack-pack-4.png)

Pre configured collection of applications needed for a full stack web site.  

## Setup and Development

You'll need `nvm`,`yarn` and `docker` installed to run this project  

1. Clone repo locally. See [Duplicating a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository) to start a new project without forking.
```bash
git clone git@github.com:ybbobdev/snack-pack.git
cd snack-pack
```

2. Install node dependencies
```bash
nvm install $(cat .nvmrc) 
yarn install
```

2. Copy this command and run it in the root of the project. This creates `./secrets` file with environment variables used for PostgresSQL and PGAdmin. It is in the `.gitignore` list.
```bash
yarn secrets
```

3. Run these commands to start postgres and pgadmin.
```bash
yarn docker
```

4. In a new shell run these commands to start the api and the site in development mode.
```
nvm use
yarn dev
```

5. Verify site is up with these links. 
 - SITE: [http://localhost:3030/](http://localhost:3030/)
 - API: [http://localhost:3031/](http://localhost:3031/__health)

6. Update [`appConfig.json`](./appConfig.json) and `secrets` as needed.

## Reference
 - See [`docs/docker-postgres-setup.md`](docs/docker-postgres-setup.md) for handy docker commands for viewing the `postgres` db and `pgadmin`.
 - [Sequilize](https://sequelize.org/master/)
 - [NVM](https://github.com/nvm-sh/nvm)
 - [Yarn](https://yarnpkg.com/)
 - [Docker](https://www.docker.com/)
 - [Next js](https://nextjs.org/docs/getting-started)
 - [Tailwind](https://tailwindcss.com/docs)
 - [Tailwind color theme generator](https://tailwind.ink/)

