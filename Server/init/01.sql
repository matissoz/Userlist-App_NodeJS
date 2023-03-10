CREATE TABLE users(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    age INT(255)
) COMMENT '';
