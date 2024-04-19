const {
  getAllBooks,
  getBookById,
  insertBook,
  updateBook,
  deleteBookById,
} = require("../services/books");

function getBooks(req, res) {
  try {
    const books = getAllBooks();
    res.send(books);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function getBook(req, res) {
  try {
    const book = getBookById(req.params.id);
    res.send(book);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function createBook(req, res) {
  try {
    const newBook = req.body;
    insertBook(newBook);
    res.send(newBook).status(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function patchBook(req, res) {
  try {
    const book = updateBook(req.params.id, req.body);
    res.send(book);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function deleteBook(req, res) {
  try {
    const action = deleteBookById(req.params.id);
    res.send(action);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getBooks,
  getBook,
  createBook,
  patchBook,
  deleteBook,
};
