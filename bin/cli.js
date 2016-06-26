#!/usr/bin/env node
'use strict';
const buff = require('../index.js');
const path = process.argv[2];

buff(path, true, function(output) {
  console.log(output);
});
