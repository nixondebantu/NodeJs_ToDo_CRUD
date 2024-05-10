const updateTask = require("../../db/updateTask");

const editTask = async (req, res) => {
  const id = req.id;
  const { title, description, status } = req.body;
  const taskID = req.params.taskID;
  const updatedTask = {
      taskID,
      id,
      title,
      description,
      status,
  }
  try {
    const editRes = await updateTask(updatedTask);
    if (editRes === 0) {
        return res.status(400).json({ message: "Enter proper details" });
    } else {
        return res.status(200).json({message: "Task updated successfully",updatedTask});
    }
  } catch (error) {
    console.error("Error updating task:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = editTask;
