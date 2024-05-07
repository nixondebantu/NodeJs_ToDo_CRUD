const { error } = require("console");
const fs = require("fs/promises");
const file = "tasks.json";

let tasks = [];

const loadtasks = async () => {
  //function for reading tasks from tasks.json and updating tasks
  try {
    const read = await fs.readFile(file, "utf-8");
    tasks = JSON.parse(read);
  } catch (error) {
    console.log("Can't load tasks. ", error);
  }
};

const savetasks = async () => {
  //function for saving values from tasks into tasks.json
  try {
    await fs.writeFile(file, JSON.stringify(tasks));
    loadtasks();
  } catch (error) {
    console.log("Can't save tasks. ", error);
  }
};

loadtasks(); //fetching tasks for first time

const createTask = async (req, res) => {
  const { title, description, status } = req.body;
  if (
    title === undefined ||
    title === null ||
    description === undefined ||
    description === null ||
    status === undefined ||
    status === null
  ) {
    return res.status(400).json({
      error: "title, description and status are required to create task.",
    });
  }
  let id;
  if (tasks.length == 0) {
    id = 1;
  } else {
    id = tasks[tasks.length - 1].id + 1;
  }
  const newTask = { id, title, description, status };
  tasks.push(newTask);
  savetasks();
  res.status(200).json(newTask);
};

const getTask = async (req, res) => {
  res.status(200).json(tasks);
};

const getTaskByID = (req, res) => {
  const taskID = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === taskID);
  if (!task) {
    return res.status(404).json({ error: "Task not found." });
  }
  res.json(task);
};

const delTask = (req, res) => {
  const taskID = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === taskID);
  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found." });
  }
  tasks.splice(taskIndex, 1);
  savetasks();
  return res.status(204).send();
};

const updateTask = (req, res) => {
  const taskID = parseInt(req.params.id);
  const { title, description, status } = req.body;
  const taskIndex = tasks.findIndex((task) => task.id === taskID);
  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found." });
  }
  if (title !== undefined) {
    tasks[taskIndex].title = title;
  }
  if (description !== undefined) {
    tasks[taskIndex].description = description;
  }
  if (status !== undefined) {
    tasks[taskIndex].status = status;
  }
  savetasks();
  res.status(200).json(tasks[taskIndex]);
};

const changeStatus = (req, res) => {
  const taskID = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === taskID);
  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found." });
  }
  tasks[taskIndex].status = !tasks[taskIndex].status;
  res.status(200).json(tasks[taskIndex]);
};

module.exports = {
  createTask,
  getTask,
  getTaskByID,
  delTask,
  updateTask,
  changeStatus,
};
