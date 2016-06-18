#!/usr/bin/env node
let buff = require('../index.js')

buff(process.argv[2], true, function(style) {
  console.log(style)
})
