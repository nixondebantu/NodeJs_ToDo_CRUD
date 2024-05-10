const pool = require("./dbconnect");

const updateTask = async (task) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(
      "UPDATE tasks SET title = ? , description = ? , status = ? WHERE id = ? AND taskID = ?",
      [task.title, task.description, task.status, task.id, task.taskID]
    );
    return rows.affectedRows;
  } catch (error) {}
};

module.exports = updateTask;
