-- Your SQL goes here
CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    completed BOOLEAN NOT NULL
);

INSERT INTO
    todos (description, completed)
VALUES 
       ('Go to the store', false),
       ('Create slides for DevOps presentation', false),
       ('Vacuum my apartment', true);
