const pool = require("./dbconnect");

const getListOfUsers = async () => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(
      "SELECT id, username, email, role FROM users"
    );
    return rows;
  } catch (error) {
    console.log("Error validating user:", error);
  } finally {
    connection.release();
  }
};

module.exports = getListOfUsers;
