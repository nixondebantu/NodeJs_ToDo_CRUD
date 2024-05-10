const findTaskByID = require("../../db/findTaskByID");

const getTaskByID = async (req, res) => {
  const taskID = req.params.taskID;
  const id = req.id;
  const role = req.role;
  try {
    const list = await findTaskByID(taskID, id,role);
    return res.status(200).json(list);
  } catch (error) {
    console.error("Error getting user task:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getTaskByID;
