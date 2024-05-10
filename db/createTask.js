const pool = require("./dbconnect");

const createTask = async (task) => {
  const connection = await pool.getConnection();
  try {
    const [result] = await connection.query("INSERT INTO tasks SET ?", task);
    return { taskID: result.insertId, ...task };
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  } finally {
    connection.release();
  }
};

module.exports = createTask;
