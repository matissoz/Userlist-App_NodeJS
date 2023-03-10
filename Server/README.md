# How to run

1. You will need docker `https://www.docker.com/`
2. Run these in your terminal to set-up mysql container (in shown order)
- `docker pull mysql/mysql-server:8.0`
- `docker run --name=mysql1 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -e  MYSQL_ROOT_HOST=% -d mysql/mysql-server:8.0`
3. Now you want to create database with name `crud`
4. See `createTable.sql` for command to create table 
5. To start run these in the Server folder (in shown order)
- `npm install` 
- `npm run start:nodemon`
After you can remove the container with `docker rm mysql1`