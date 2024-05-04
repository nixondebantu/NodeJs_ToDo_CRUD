const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("Welcome to node js To Do CRUD API");
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})