const express = require("express");

const app = express();

const myFirstMiddleware = (req, res, next) => {
  console.log("My first middleware is working");
  next();
};

app.use(myFirstMiddleware);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
