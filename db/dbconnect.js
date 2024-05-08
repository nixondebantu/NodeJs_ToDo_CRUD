const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: null,
  database: "taskdb",
});

const createUsersTable = async () => {
  const connection = await pool.getConnection();
  try {
    await connection.query(`
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          username VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL,
          role VARCHAR(50) NOT NULL,
          approveStatus BOOLEAN
        )
      `);
  } catch (error) {
    console.error("Error creating users table:", error);
  } finally {
    connection.release();
  }
};

createUsersTable();

module.exports = pool;
