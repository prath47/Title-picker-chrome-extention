CREATE DATABASE task2;
use task2;

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    url text,
    about text,
    bio text,
    location text,
    followers_count int,
    connection_count int
);

INSERT INTO user (name, about)
VALUES
('prath', 'this is me'),
('abhi', 'he is noob');

select * from user;