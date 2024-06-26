const express = require('express')
const bookRouter = require("./src/routes/books")
const index = require("./src/routes/index")

const app = express()

app.use(express.json())
app.use("/", index);
app.use("/books", bookRouter);

const port = 8000

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})
