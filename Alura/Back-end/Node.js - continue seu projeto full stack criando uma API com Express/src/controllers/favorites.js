const {
  getAllFavoriteBooks,
  deleteFavoriteBookById,
  insertFavoriteBookById,
} = require("../services/favorites");

function getFavoriteBooks(req, res) {
  try {
    const books = getAllFavoriteBooks();
    res.send(books);
  } catch (error) {
    res.status(500).send({ message: `${error.message}` });
  }
}

function deleteFavoriteBook(req, res) {
  try {
    const { id } = req.params;

    if (id && Number(id)) {
      const action = deleteFavoriteBookById(id);
      res.send(action);
    } else {
      res.status(422).send({ message: "ID inválido" });
    }
  } catch (error) {
    res.status(500).send({ message: `${error.message}` });
  }
}

function insertFavoriteBook(req, res) {
  try {
    const { id } = req.params;

    if (id && Number(id)) {
      insertFavoriteBookById(id);
      res.send({ message: "Livro favorito inserido com sucesso!" });
    } else {
      res.status(422).send({ message: "ID inválido" });
    }
  } catch (error) {
    res.status(500).send({ message: `${error.message}` });
  }
}

module.exports = {
  getFavoriteBooks,
  deleteFavoriteBook,
  insertFavoriteBook,
};
