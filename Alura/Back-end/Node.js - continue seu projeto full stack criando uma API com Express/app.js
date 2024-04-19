const express = require('express')
const bookRouter = require("./routes/books");

const app = express()

app.use(express.json())
app.use("/books", bookRouter);

const port = 8000

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})
