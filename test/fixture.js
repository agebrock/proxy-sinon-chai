var fs = require('fs');

module.exports = () => {
  return fs.readFileSync('someFile');
};
