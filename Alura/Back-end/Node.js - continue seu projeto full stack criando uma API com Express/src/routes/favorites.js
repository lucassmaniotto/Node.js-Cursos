const { Router } = require("express");
const {
  deleteFavoriteBook,
  getFavoriteBooks,
  insertFavoriteBook,
} = require("../controllers/favorites");

const router = Router();

router.get("/", getFavoriteBooks);

router.post("/:id", insertFavoriteBook);

router.delete("/:id", deleteFavoriteBook);

module.exports = router;
