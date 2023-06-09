const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const server = require("http").createServer(app);

app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "hello world" });
});

server.listen(8080, () => {
  console.log("server is running on 8080");
});
