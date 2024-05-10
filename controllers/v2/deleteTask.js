const delTask = require("../../db/delTask");

const deleteTask = async (req, res) => {
  const id = req.id;
  const taskID = req.params.taskID;
  try {
    const dltRes = await delTask(id, taskID);
    if (dltRes === 1) {
        return res.status(200).json({message:"Delete Task Successfully"});
    } else {
        return res.status(404).json({message:"Task not found"});
    }
  } catch (error) {
    console.error("Error deleting task:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = deleteTask;
