import mysql from "mysql2";

const db = mysql
  .createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "123456",
    database: "crud",
    port: 3306,
  })
  .promise();

export const getAllUsers = async () => {
  const [rows] = await db.query(`
        SELECT *
        FROM users
    `);

  return rows;
};

export const addUser = async (name, email, password, age) => {
  const [rows] = await db.query(
    `
        INSERT INTO users
        (name, email, password, age) 
        VALUES(?, ?, ?, ?)
    `,
    [name, email, password, age]
  );

  return rows;
};

export const editUser = async (name, email, password, age, id) => {
  const [rows] = await db.query(
    `
        UPDATE users
        SET name =?, email =?, password =?, age =?
        WHERE id =?
    `,
    [name, email, password, age, id]
  );

  return rows;
};

export const deleteUser = async (id) => {
  const [rows] = await db.query(
    `
        DELETE FROM users
        WHERE id =?
    `,
    [id]
  );

  return rows;
};
