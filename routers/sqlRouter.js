const express = require("express");
const createAdmin = require("../controllers/v2/createAdmin");
const register = require("../controllers/v2/register");
const login = require("../controllers/v2/login");

const sqlRouter = express.Router();

sqlRouter.post("/createadmin",createAdmin);
sqlRouter.post("/register",register);
sqlRouter.post("/login",login);

module.exports = sqlRouter;