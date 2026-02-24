const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  //creating a directory
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
} else {
  console.log("file already exists");
}

const filePath = path.join(dataFolder, "example.txt");

fs.writeFileSync(filePath, "Hello am David Kamau");
console.log("file created"); //creating a file

const readFileContent = fs.readFileSync(filePath, "utf-8");
console.log("File content : ", readFileContent); //reading file content

fs.appendFileSync(filePath, "\n Am 21 year old ");
console.log("new line added");
