// Up to date data seems to be located here:
// raw.githubusercontent.com/GoogleChrome/css-triggers/master/data/data.json

'use strict';
const fs = require('fs');
const path = require('path');
const parser = require('./parser.js');
const print = require('./print.js');

module.exports = function(filePath, callback) {

  const resolvedPath = path.resolve(process.cwd(), filePath);
  const file = fs.readFileSync(resolvedPath).toString();

  parser(file, function(result) {
    print(result, callback);
  });

};
