-- Active: 1676536646193@@127.0.0.1@3306@crud
CREATE TABLE users(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    age INT(255)
) COMMENT '';