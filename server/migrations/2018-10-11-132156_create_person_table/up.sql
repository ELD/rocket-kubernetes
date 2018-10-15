-- Your SQL goes here
CREATE TABLE IF NOT EXISTS person (
    id SERIAL PRIMARY KEY,
    email VARCHAR(128) NOT NULL,
    name VARCHAR(128) NOT NULL
);

INSERT INTO
    person (email, name)
VALUES 
    ('john.doe@example.com', 'John Doe'),
    ('jane.doe@example.com', 'Jane Doe'),
    ('not-spam@spam.org', 'Joe Spam');
