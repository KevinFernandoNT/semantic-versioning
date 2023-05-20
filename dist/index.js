const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("New Changes!");
});

app.listen(port, () => {
  console.log(`Hello API ${port}`);
});