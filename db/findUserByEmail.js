const pool = require("./dbconnect");

const findUserByEmail = async (email) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    return rows.length ? rows[0] : null;
  } catch (error) {
    console.error("Error finding user by email:", error);
    throw error;
  } finally {
    connection.release();
  }
};

module.exports = findUserByEmail;
