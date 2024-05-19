const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send({msge:"Hello World"});
});

app.get("/about", (req, res) => {
  res.send({about:"About route 🎉 "});
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
