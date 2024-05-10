const pool = require("./dbconnect");

const getPendingUserList = async () => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(
      "SELECT id, username FROM users WHERE approveStatus = false"
    );
    return rows;
  } catch (error) {
    console.log("Error validating user:", error);
  } finally {
    connection.release();
  }
};

module.exports = getPendingUserList;