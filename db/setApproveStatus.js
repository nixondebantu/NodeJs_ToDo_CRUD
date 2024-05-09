const pool = require("./dbconnect");

const setApproveStatus = async (id) => {
  const connection = await pool.getConnection();
  try {
    await connection.query(
      "UPDATE users SET approveStatus = true WHERE id = ?",
      [id]
    );
  } catch (error) {
    console.log("Error validating user:", error);
  } finally {
    connection.release();
  }
};

module.exports = setApproveStatus;
