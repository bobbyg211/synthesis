const path = require("path");
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routers/users");
const app = express(); // create express app

app.get("/", (req, res) => {
  res.send("Welcome to the Synthesis server!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", usersRouter);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
