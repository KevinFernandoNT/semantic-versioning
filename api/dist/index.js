const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Changes!");
});

app.listen(port, () => {
  console.log(`Hello API ${port}`);
  console.log("Hell");
});