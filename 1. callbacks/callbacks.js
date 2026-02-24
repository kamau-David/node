const { ifError } = require("assert");
const fs = require("fs");

function person(name, callbackFn) {
  console.log(`Hello ${name}`);
  callbackFn();
}

function adrress() {
  console.log("Kenya");
}

person("David Kamau", adrress);

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});
