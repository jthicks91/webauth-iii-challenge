const express = require("express");
const server = express();

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");

function logger(req, res, next) {
  const { path } = req;
  const timeStamp = Date.now();
  const log = { path, timeStamp };
  console.log(`${req.method} Request`, log);
  next();
}

server.use(logger);
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send("Postman, Postman, Yeah thats me!");
});

module.exports = server;
