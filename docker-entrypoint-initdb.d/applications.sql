CREATE TABLE applications(
    id SERIAL PRIMARY KEY,
    app_name VARCHAR,
    app_description VARCHAR,
    app_doc_url VARCHAR
);

INSERT INTO applications (
    app_name,
    app_description,
    app_doc_url
) VALUES (
    'Next.js',
    'The React Framework for Production',
    'https://nextjs.org/docs/getting-started'
);

INSERT INTO applications (
    app_name,
    app_description,
    app_doc_url
) VALUES (
    'TypeScript',
    'Typed JavaScript at Any Scale.',
    'https://www.typescriptlang.org/docs/'
);

INSERT INTO applications (
    app_name,
    app_description,
    app_doc_url
) VALUES (
    'PostgreSql',
    'The World''s Most Advanced Open Source Relational Database',
    'https://www.postgresql.org/docs/'
);