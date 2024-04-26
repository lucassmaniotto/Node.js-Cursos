const fs = require("fs");

function getAllBooks() {
  return JSON.parse(fs.readFileSync("./src/data/books.json"));
}

function getBookById(id) {
  const books = getAllBooks();
  const book = books.find((book) => book.id === Number(id));

  if (!book) throw new Error("Livro não encontrado");

  return book;
}

function insertBook(newBook) {
  const books = getAllBooks();

  if (books.find((book) => book.id === newBook.id)) {
    throw new Error("Livro já cadastrado");
  }

  books.push(newBook);
  fs.writeFileSync("./src/data/books.json", JSON.stringify(books));
}

function updateBook(id, update) {
  let books = JSON.parse(fs.readFileSync("./src/data/books.json"));
  const index = books.findIndex((book) => book.id === Number(id));

  if (index === -1) throw new Error("Livro não encontrado");

  const updatedBook = { ...books[index], ...update };

  books[index] = updatedBook;
  fs.writeFileSync("./src/data/books.json", JSON.stringify(books));
  return updatedBook;
}

function deleteBookById(id) {
  let books = JSON.parse(fs.readFileSync("./src/data/books.json"));
  const index = books.findIndex((book) => book.id === Number(id));

  if (index === -1) throw new Error("Livro não encontrado");

  books.splice(index, 1);

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
