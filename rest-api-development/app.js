const express = require("express");
const app = express();

app.use(express.json());

let books = [
  {
    id: "1",
    title: "Book 1",
  },
  {
    id: "2",
    title: "Book 2",
  },
  {
    id: "3",
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

//accessing a single book
app.get("/get/:id", (req, res) => {
  const book = books.find((item) => item.id === req.params.id);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message: "book not found please try another id",
    });
  }
});

//adding a newbook
app.post("/add", (req, res) => {
  const newBook = [
    {
      id: books.length + 1,
      title: `Book ${books.length + 1}`,
    },
  ];
  books.push(newBook);
  res.status(200).json({
    message: "New Book added successfully",
    data: newBook,
  });
});

//updating a book
app.put("/update/:id", (req, res) => {
  const findBook = books.find((bookItem) => bookItem.id === req.params.id);

  if (findBook) {
    findBook.title = req.body.title || findBook.title;
    res.status(200).json({
      message: `Book with id ${req.params.id} is successfully updated`,
      data: findBook,
    });
  } else {
    res.status(404).json({
      message: "book not found try using another id",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}`);
});
