'use strict';

module.exports = parser;

function parser(str, cb) {

  const layoutData = require('./data/data.json');
  const css = require('css');
  const parsed = css.parse(str);

  if (parsed.stylesheet) {
    console.log(identifyMatches(layoutData, parsed.stylesheet));
  } else {
    throw 'Could not parse stylesheet.';
  }

}

function identifyMatches(data, stylesheet) {

  const matches = [];

  const keyData = Object.keys(data['data']);
  const dataLength = keyData.length;

  const stylesheetData = stylesheet['rules'];
  const stylesheetLength = stylesheetData.length;

  const triggerProps = [];
  const declarations = [];

  const declarationList = [];

  for (var i = 0; i < dataLength; i++) {
    const triggerProperty = keyData[i];
    triggerProps.push(triggerProperty);
  }

  for (var ruleIndex = 0; ruleIndex < stylesheetLength; ruleIndex++) {
    const ruleDeclaration = stylesheetData[ruleIndex]['declarations'];
    declarations.push(ruleDeclaration);
  }

  for (var ii = 0; ii < declarations.length; ii++) {
    for (var iii = 0; iii < declarations[ii].length; iii++) {
      if (declarations[ii][iii].type === 'declaration') {
        declarationList.push(declarations[ii][iii]);
      }
    }
  }

  for (var dec = 0; dec < declarationList.length; dec++) {
    const finalDeclaration = declarationList[dec];

    for (var trigIndex = 0; trigIndex < triggerProps.length; trigIndex++) {
      const trigger = triggerProps[trigIndex];
      if (finalDeclaration.property == trigger) {
        matches.push(finalDeclaration);
      }
    }
  }

  return matches;

}
