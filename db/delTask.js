const pool = require("./dbconnect");

const delTask = async (id, taskID) => {
  const connection = await pool.getConnection();
  try {
    const [res] = await pool.query(
      "DELETE FROM tasks WHERE id = ? AND taskID = ?",
      [id, taskID]
    );
    return res.affectedRows;
  } catch (error) {
    console.log("Error deleting task:", error);
  } finally {
    connection.release();
  }
};

module.exports = delTask;
