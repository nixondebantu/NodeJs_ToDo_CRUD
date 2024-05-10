const pool = require("./dbconnect");

const getListOfTasks = async (id) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query("SELECT * FROM tasks WHERE id = ?", [
      id,
    ]);
    return rows;
  } catch (error) {
    console.log("Error validating user:", error);
  } finally {
    connection.release();
  }
};

module.exports = getListOfTasks;
