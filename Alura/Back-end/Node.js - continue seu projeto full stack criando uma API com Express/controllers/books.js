function getBooks(req, res) {
  try {
    res.send("Rota GET");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getBooks,
};
