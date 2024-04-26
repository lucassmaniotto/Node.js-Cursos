const express = require('express')
const cors = require('cors')
const index = require("./src/routes/index")
const bookRouter = require("./src/routes/books")
const favoritesRouter = require("./src/routes/favorites")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/", index);
app.use("/books", bookRouter);
app.use("/favorites", favoritesRouter)

const port = 8000

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})
