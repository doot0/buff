// Up to date data seems to be located here:
// https://raw.githubusercontent.com/GoogleChrome/css-triggers/master/data/data.json

module.exports = function(file, callback) {

  // Parse input
  var parser = require('./parser.js')

  parser(file, function(result) {
    return callback(result)
  })

}
