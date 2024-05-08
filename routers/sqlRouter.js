const express = require("express");
const createAdmin = require("../controllers/v2/createAdmin");

const sqlRouter = express.Router();

sqlRouter.post("/createadmin",createAdmin);


module.exports = sqlRouter;