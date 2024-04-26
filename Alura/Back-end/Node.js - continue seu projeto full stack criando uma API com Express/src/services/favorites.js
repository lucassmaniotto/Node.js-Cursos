const fs = require("fs");
const { getAllBooks } = require("./books");

function getAllFavoriteBooks() {
  return JSON.parse(fs.readFileSync("./src/data/favorites.json"));
}

function deleteFavoriteBookById(id) {
  let books = getAllFavoriteBooks();
  const index = books.findIndex((book) => book.id === Number(id));

  if (index === -1) throw new Error("Livro favorito não encontrado");

  books.splice(index, 1);

  fs.writeFileSync("./src/data/favorites.json", JSON.stringify(books));
  return { message: "Livro favorito deletado com sucesso!" };
}

function insertFavoriteBookById(id) {
  const books = getAllBooks();
  const favorites = getAllFavoriteBooks();

  const insertedBook = books.find((book) => book.id === Number(id));

  if (!insertedBook) throw new Error("Livro não encontrado");
  if (favorites.find((book) => book.id === insertedBook.id)) {
    throw new Error("Livro já favoritado");
  }

  const newFavoriteList = [...favorites, insertedBook];

  fs.writeFileSync("./src/data/favorites.json", JSON.stringify(newFavoriteList));
}

module.exports = {
  getAllFavoriteBooks,
  deleteFavoriteBookById,
  insertFavoriteBookById
};
