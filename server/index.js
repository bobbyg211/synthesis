const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routers/users");
const multer = require("multer");
const upload = multer();
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Synthesis server!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.static("public"));

app.use("/users", usersRouter);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
