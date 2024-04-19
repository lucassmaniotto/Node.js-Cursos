const fs = require("fs")

function getAllBooks() {
    return JSON.parse(fs.readFileSync("./data/books.json", "utf-8"));
}

module.exports = {
    getAllBooks,
};