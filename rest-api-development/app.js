const express = require("express");
const app = express();

app.use(express.json());

let books = [
  {
    id: 1,
    title: "Book 1",
  },
  {
    id: 2,
    title: "Book 2",
  },
  {
    id: 3,
    title: "Book 3",
  },
];

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our home page",
  });
});

app.get("/get", (req, res) => {
  res.json(books);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}`);
});
