const path = require("path");
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routers/users");
const app = express(); // create express app

// react app files
app.use(express.static(path.join(__dirname, "..", "build")));

// express routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", usersRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
