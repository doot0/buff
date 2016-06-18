module.exports = parser

function parser(str, cb) {

  var layoutData = require('./data/data.json')
  var css = require('css')
  var parsed = css.parse(str)

  if(parsed.stylesheet) {
    console.log('parsed')
  }

}
