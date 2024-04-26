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
    res.status(500).send({ message: `${error.message}`});
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const book = getBookById(id);
      res.send(book);
    } else {
      res.status(422).send({ message: "ID inválido" });
    }
  } catch (error) {
    res.status(500).send({ message: `${error.message}`});
  }
}

function createBook(req, res) {
  try {
    const newBook = req.body;

    if (newBook && newBook.id && newBook.name) {
      if (typeof newBook.id !== "number") {
        return res.status(400).send({ message: "O campo 'id' deve ser um número" });
      }

      insertBook(newBook);
      res.send(newBook).status(201);
    } else {
      res.status(400).send({ message: "Dados inválidos" });
    }
  } catch (error) {
    res.status(500).send({ message: `${error.message}`});
  }
}

function putBook(req, res) {
  try {
    const id = req.params.id;
    
    if (id && Number(id)) {
      const book = updateBook(id, req.body);
      res.send(book);
    } else {
      res.status(422).send({ message: "ID inválido" });
    }

  } catch (error) {
    res.status(500).send({ message: `${error.message}`});
  }
}

function deleteBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const action = deleteBookById(id);
      res.send(action);
    } else {
      res.status(422).send({ message: "ID inválido" });
    }
  } catch (error) {
    res.status(500).send({ message: `${error.message}`});
  }
}

module.exports = {
  getBooks,
  getBook,
  createBook,
  putBook,
  deleteBook,
};
