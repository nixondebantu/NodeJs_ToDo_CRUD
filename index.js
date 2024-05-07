const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const localStorageRouter = require("./routers/localStorageRouter");

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to node js To Do CRUD API");
});

app.use("/v1", localStorageRouter); //router for local storage or task1

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
