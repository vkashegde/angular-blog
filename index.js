const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/database");
const path = require("path");

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log("Could not connect to database");
  } else {
    console.log("connected to database:" + config.db);
  }
});

app.use(express.static(__dirname + "/client/dist/client"));

app.get("*", (req, res) => {
  res.send(path.join(__dirname + "/client/dist/client/index.html"));
});

app.listen(8080, () => {
  console.log("Listining on port 8080");
});
