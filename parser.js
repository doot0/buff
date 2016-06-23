'use strict';

module.exports = parser;

function parser(str, cb) {

  const layoutData = require('./data/data.json');
  const css = require('css');
  const parsed = css.parse(str);

  if (parsed.stylesheet) {

    identifyMatches(layoutData, parsed.stylesheet);

    const sheetRules = parsed.stylesheet.rules;

    // for (var i = 0; i < sheetRules.length; i++) {
    //   for (var ii = 0; ii < sheetRules[i].declarations.length; ii++) {
    //     const property = sheetRules[i].declarations[ii].property;
    //     console.log(property);
    //   }
    // }

  } else {
    throw 'Could not parse stylesheet.';
  }

}

function identifyMatches(data, stylesheet) {

  const match = [];

  match.push();

  // generate match array

  // iterate over data
  // store current triggerrop
    // iterate over stylesheet
    // store current styleprop
    // compare triggerprop with styleprop
    // if equal, gather line #, style prop, and layout/paint/composite

}
