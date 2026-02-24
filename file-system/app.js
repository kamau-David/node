const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
} else {
  console.log("file already exists");
}

const filePath = path.join(dataFolder, "example.txt");

fs.writeFileSync(filePath, "Hello am David Kamau");
console.log("file created");

const readFileContent = fs.readFileSync(filePath, "utf-8");
console.log("File content : ", readFileContent);
