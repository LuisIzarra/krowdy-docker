"use strict";

const express = require("express");
var mysql = require("mysql");

// Constants
const PORT = 8085;
const HOST = "0.0.0.0";

var connection = mysql.createConnection({
  host: "mysqldb",
  user: "krowdyuser",
  password: "krowdypassword",
});

connection.connect(function (err) {
  console.log(">>>>>>>>>>>>>>>>>>>>> mysql connected");
});

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/registrar", (req, res) => {});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
