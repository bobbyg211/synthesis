const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const { clientOrigins, serverPort } = require("./config/env.dev");
const bodyParser = require("body-parser");
const usersRouter = require("./routers/users");
const journalsRouter = require("./routers/journals");
const multer = require("multer");
const upload = multer();

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Synthesis server!");
});

app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

app.use("/users", usersRouter);
app.use("/journals", journalsRouter);

app.listen(serverPort, () => {
  console.log(`server started on port ${serverPort}`);
});
