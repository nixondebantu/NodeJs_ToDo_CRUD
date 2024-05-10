const pool = require("./dbconnect");

const createUser = async (user) => {
  const connection = await pool.getConnection();
  try {
    const [result] = await connection.query("INSERT INTO users SET ?", user);
    return { id: result.insertId, ...user };
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  } finally {
    connection.release();
  }
};

module.exports = createUser;
