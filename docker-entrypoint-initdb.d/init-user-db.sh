#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER docker;
    CREATE DATABASE docker;
    GRANT ALL PRIVILEGES ON DATABASE docker TO docker;
    CREATE TABLE applications(
        id SERIAL PRIMARY KEY,
        name VARCHAR NOT NULL,
        url VARCHAR,
        description VARCHAR,
    );

    EOSQL
