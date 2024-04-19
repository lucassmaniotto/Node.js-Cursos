const { Router } = require("express");
const { getBooks } = require("../controllers/books");

const router = Router();

router.get("/", getBooks);

router.post("/", (req, res) => {
  try {
    res.send("Rota POST");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.patch("/:id", (req, res) => {
  try {
    res.send("Rota PATCH");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/:id", (req, res) => {
  try {
    res.send("Rota DELETE");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;