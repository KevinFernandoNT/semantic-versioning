const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("CHnages!");
});

app.listen(port, () => {
  console.log(`Hello API ${port}`);
});