const createTask = require("../../db/createTask");

const addTask = async (req, res) => {
  let { title, description, status } = req.body;
  const id = req.id;
  if (title === null || title === undefined) {
    return res
      .status(400)
      .json({ message: "Provide title to create new task" });
  }
  if (description === undefined) {
    description = null;
  }
  if (status === undefined) {
    status = false;
  }
  try {
    const newTask = await createTask({
      id,
      title,
      description,
      status,
    });
    return res.status(200).json(newTask);
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = addTask;
