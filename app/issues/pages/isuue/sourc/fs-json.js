
const fs = require("fs");

const jsonObject = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

const jsonString = JSON.stringify(jsonObject, null, 1);
console.log(jsonString)

try {
  fs.writeFileSync("data.json", jsonString);
  console.log("File written successfully.");
} catch (error) {
  console.error("Error writing file:", error);
}
