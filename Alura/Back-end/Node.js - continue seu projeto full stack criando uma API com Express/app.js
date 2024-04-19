const express = require('express')
const bookRouter = require("./routes/books");

const app = express()

app.use("/books", bookRouter);

const port = 8000

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})
