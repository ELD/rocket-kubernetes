-- Your SQL goes here
CREATE TABLE IF NOT EXISTS `sample` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(128) NOT NULL,
    name VARCHAR(128) NOT NULL
);

INSERT INTO
    `sample` (email, name)
VALUES 
    ('john.doe@example.com', 'John Doe'),
    ('jane.doe@example.com', 'Jane Doe'),
    ('not-spam@spam.org', 'Joe Spam');
