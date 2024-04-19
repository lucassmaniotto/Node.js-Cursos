const { getVersion } = require("../services/index");

async function getIndex(req, res) {
  getVersion((err, version) => {
    if (err) {
      console.error("Error getting version:", err);
      return res.status(500).send("Internal Server Error");
    }

    const htmlResponse = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>api-alura-books</title>
        </head>
        <body>
          <p>Version: ${version} | It's Working! 🚀</p>
        </body>
        </html>
      `;

    res.send(htmlResponse);
  });
}

module.exports = { getIndex };
