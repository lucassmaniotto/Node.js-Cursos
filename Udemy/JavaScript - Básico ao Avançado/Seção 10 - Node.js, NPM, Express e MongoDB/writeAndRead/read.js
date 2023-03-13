const fs = require('fs').promises;
module.exports = (pathFile) => fs.readFile(pathFile, 'utf8');
