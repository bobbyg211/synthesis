const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { clientOrigins, serverPort } = require("./config/env.dev");
const { messagesRouter } = require("./messages/messages.router");
const bodyParser = require("body-parser");
const usersRouter = require("./routers/users");
const multer = require("multer");
const upload = multer();

const app = express();
const apiRouter = express.Router();

app.get("/", (req, res) => {
  res.send("Welcome to the Synthesis server!");
});

app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.static("public"));

app.use("/api", apiRouter);

apiRouter.use("/messages", messagesRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

app.use("/users", usersRouter);

app.listen(serverPort, () => {
  console.log(`server started on port ${serverPort}`);
});
