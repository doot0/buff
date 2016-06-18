// Up to date data seems to be located here:
// https://raw.githubusercontent.com/GoogleChrome/css-triggers/master/data/data.json

var fs      = require('fs'),
    path    = require('path'),
    parser  = require('./parser.js')

module.exports = function(filePath, callback) {

  let resolvedPath = path.resolve(process.cwd(), filePath),
      file = fs.readFileSync(resolvedPath).toString()

  parser(file, function(result) {
    return callback(result)
  })

}
