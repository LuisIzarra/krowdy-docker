"use strict";

const express = require("express");
// Here, add line code to call a Mongo or MySQL DB

// Constants
const PORT = 8085;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
