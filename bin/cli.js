#!/usr/bin/env node
'use strict';
const buff = require('../index.js');
const path = process.argv[2];

buff(process.argv[2], true, function(style) {
  console.log(style);
});
