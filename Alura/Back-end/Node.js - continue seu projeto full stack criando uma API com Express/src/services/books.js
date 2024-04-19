const fs = require("fs");

function getAllBooks() {
  return JSON.parse(fs.readFileSync("./src/data/books.json"));
}

function getBookById(id) {
  const books = getAllBooks();
  return books.find((book) => book.id === id);
}

function insertBook(newBook) {
  const books = getAllBooks();
  books.push(newBook);
  fs.writeFileSync("./src/data/books.json", JSON.stringify(books));
}

function updateBook(id, update) {
  let books = JSON.parse(fs.readFileSync("./src/data/books.json"));
  const index = books.findIndex((book) => book.id === id);

  const updatedBook = { ...books[index], ...update };

  books[index] = updatedBook;
  fs.writeFileSync("./src/data/books.json", JSON.stringify(books));
  return updatedBook;
}

function deleteBookById(id) {
  let books = JSON.parse(fs.readFileSync("./src/data/books.json"));
  books = books.filter((book) => book.id !== id);
  fs.writeFileSync("./src/data/books.json", JSON.stringify(books));
  return { message: "Livro deletado com sucesso!" };
}

module.exports = {
  getAllBooks,
  getBookById,
  insertBook,
  updateBook,
  deleteBookById,
};
