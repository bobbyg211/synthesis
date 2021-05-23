const express = require("express");
const bodyParser = require("body-parser");
const { checkJwt } = require("./middleware/jwt");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const usersRouter = require("./routers/users");
const multer = require("multer");
const upload = multer();

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(cors());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Welcome to the Synthesis server!");
});

app.use("/users", checkJwt, usersRouter);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
