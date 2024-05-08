const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const sqlRouter = require("./routers/sqlRouter");

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Welcome to node js To Do CRUD API");
});

app.use("/v2",sqlRouter);   //router for task2's sqlrouter

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})