const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

app.get("/", function (req, res) {
  res.send("Hello World 👋");
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}...`);
});
