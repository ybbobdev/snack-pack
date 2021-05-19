CREATE TABLE regions(
    id SERIAL PRIMARY KEY,
    city VARCHAR NOT NULL,
    state VARCHAR NOT NULL,
    price BIGINT,
    postedTime timestamp default NULL,
    rooms BIGINT,
    sqft BIGINT,
    listingId VARCHAR,
    listingUrl VARCHAR,
    title VARCHAR,
    hood VARCHAR
);
