const pool = require("./dbconnect");

const switchStatus = async (id, taskID) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(
      "SELECT id,status FROM tasks WHERE taskID = ? AND id = ?",
      [taskID, id]
    );
    if (rows.length) {
      await connection.query(
        `UPDATE tasks SET status = ${!rows[0].status} WHERE taskID = ${taskID}`
      );
      return `Task's updated status is ${!rows[0].status}`;
    } else{
      return "No task found";
    }
  } catch (error) {
    console.log("Error validating user:", error);
  } finally {
    connection.release();
  }
};

module.exports = switchStatus;
