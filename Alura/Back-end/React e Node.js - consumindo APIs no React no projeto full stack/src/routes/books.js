const { Router } = require("express");
const {
  getBooks,
  getBook,
  createBook,
  putBook,
  deleteBook,
} = require("../controllers/books");

const router = Router();

router.get("/", getBooks);
router.get("/:id", getBook);

router.post("/", createBook);

router.put("/:id", putBook);

router.delete("/:id", deleteBook);

module.exports = router;
