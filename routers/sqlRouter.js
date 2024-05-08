const express = require("express");
const createAdmin = require("../controllers/v2/createAdmin");
const register = require("../controllers/v2/register");

const sqlRouter = express.Router();

sqlRouter.post("/createadmin",createAdmin);
sqlRouter.post("/register",register);

module.exports = sqlRouter;