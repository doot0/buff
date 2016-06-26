'use strict';
const table = require('cli-table');

module.exports = print;

function print(results, callback) {

  const resultsList = new table({
    head: ['Trigger', 'Line']
  });

  results.forEach(function(result) {
    const prop = result.property;
    const line = result.position['start'].line;
    resultsList.push([prop, line]);
  });

  console.log(resultsList.toString());
}
