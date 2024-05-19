const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  const responseData = {
    message: "Hello, world!",
    timestamp: new Date(),
    status: "success",
  };

  res.json(responseData); // إعادة الاستجابة كـ JSON
});

app.get("/about", (req, res) => {
  res.send({about:"About route 🎉 "});
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
