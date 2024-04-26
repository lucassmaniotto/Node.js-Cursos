const fs = require('fs');
const path = require('path');

function getVersion(callback) {
  fs.readFile(path.join(__dirname, '..', '..', 'package.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading package.json:', err);
      return callback(err);
    }

    const packageJson = JSON.parse(data);
    const version = packageJson.version;

    callback(null, version);
  });
}

module.exports = { getVersion };
