const express = require("express");

const app = express();

const requestTimeStampLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} from ${req.method} to ${req.url}`);
  next();
};

app.use(requestTimeStampLogger);

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
