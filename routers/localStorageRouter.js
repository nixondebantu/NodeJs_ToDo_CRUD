const express = require("express");
const {
  createTask,
  getTask,
  getTaskByID,
  delTask,
  updateTask,
  changeStatus,
} = require("../controllers/v1/tasksController");

const localStorageRouter = express.Router();

localStorageRouter.post("/task", createTask);
localStorageRouter.get("/task", getTask);
localStorageRouter.get("/task/:id", getTaskByID);
localStorageRouter.delete("/task/:id", delTask);
localStorageRouter.put("/task/:id", updateTask);
localStorageRouter.put("/task/mark/:id", changeStatus);

module.exports = localStorageRouter;
