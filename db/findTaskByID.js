const pool = require("./dbconnect");

const findTaskByID = async (taskID, id, role) => {
  const connection = await pool.getConnection();
  try {
    if (role === "admin") {
      const [rows] = await connection.query(
        "SELECT * FROM tasks WHERE taskID = ?",
        [taskID]
      );
      return rows.length ? rows[0] : null;
    } else {
      const [rows] = await connection.query(
        "SELECT * FROM tasks WHERE taskID = ? AND id =?",
        [taskID, id]
      );
      return rows.length ? rows[0] : null;
    }
  } catch (error) {
    console.error("Error finding user by email:", error);
    throw error;
  } finally {
    connection.release();
  }
};

module.exports = findTaskByID;
