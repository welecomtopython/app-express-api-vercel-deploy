const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  const r=req.method
  const responseData = {
    message: "Hello, world!  >>method ",
    timestamp: new Date(),
    status: "success",
    method: r,
    name:"Mohmeed",
    age:25
  };
  res.json(responseData); // إعادة الاستجابة كـ JSON
});

app.get("/about", (req, res) => {
  res.send({about:"About route 🎉 "});
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
