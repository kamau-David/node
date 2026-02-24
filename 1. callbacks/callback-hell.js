const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) throw err;
  const modifiedData = data.toUpperCase();
  fs.writeFile("output.txt", modifiedData, (err) => {
    if (err) throw err;
    else console.log("data writen to the new file ");

    fs.readFile("output.txt", "utf-8", (err, data) => {
      if (err) throw err;
      console.log("modified data:", data);
    });
  });
});
