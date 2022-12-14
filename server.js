"use strict";

const express = require("express");
var mysql = require("mysql");

// Constants
const PORT = 8085;
const HOST = "localhost";

var connection = mysql.createConnection({
  host: "mysqldb",
  user: "root",
  password: "",
  database: "krowdydb",
});

connection.connect(function (err) {
  console.log(">>>>>>>>>>>>>>>>>>>>> mysql connected");
  if (err) throw err;
  var sql = "CREATE TABLE IF NOT EXISTS usuarios (nombre VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/registrar", (req, res) => {
  console.log("/registrar");
  console.log("nombre:", req.query.Nombre);
  var user = { nombre: req.query.Nombre };
  var query = connection.query(
    "INSERT INTO usuarios SET ?",
    user,
    function (err, result) {
      if (err) throw err;
      console.log("error", err);
      console.log("result", result);
    }
  );
  console.log(query.sql);
  res.send("ok");
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);
