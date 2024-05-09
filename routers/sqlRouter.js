const express = require("express");
const createAdmin = require("../controllers/v2/createAdmin");
const register = require("../controllers/v2/register");
const login = require("../controllers/v2/login");
const getPendingUser = require("../controllers/v2/getPendingUser");
const tokenVerify = require("../auth/tokenVerify");
const approveUser = require("../controllers/v2/approveUser");
const getUsersList = require("../controllers/v2/getUsersList");

const sqlRouter = express.Router();

sqlRouter.post("/createadmin",createAdmin);
sqlRouter.post("/register",register);
sqlRouter.post("/login",login);
sqlRouter.get("/getPendingUser",tokenVerify,getPendingUser);
sqlRouter.post("/approveUser/:id",tokenVerify,approveUser);
sqlRouter.get("/getUsersList",tokenVerify,getUsersList);

module.exports = sqlRouter;