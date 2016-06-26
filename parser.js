'use strict';

module.exports = parser;

function parser(str, callback) {

  const layoutData = require('./data/data.json');
  const css = require('css');
  const parsed = css.parse(str);

  if (parsed.stylesheet) {
    identifyMatches(layoutData, parsed.stylesheet, callback);
  }

}

function identifyMatches(data, stylesheet, callback) {

  const matches = [];

  const keyData = Object.keys(data.data);
  const dataLength = keyData.length;

  const stylesheetData = stylesheet.rules;
  const stylesheetLength = stylesheetData.length;

  const triggerProps = [];
  const declarations = [];

  /* Gather all the props from the trigger update data */
  for (var i = 0; i < dataLength; i++) {
    const triggerProperty = keyData[i];
    triggerProps.push(triggerProperty);
  }

  /* Gather and filter the stylesheet data by rule only */
  for (var ruleIndex = 0; ruleIndex < stylesheetLength; ruleIndex++) {
    const ruleDeclaration = stylesheetData[ruleIndex].declarations;
    if (stylesheetData[ruleIndex].type == 'rule') {
      declarations.push(ruleDeclaration);
    }
  }

  /* Iterate through the gathered props and match with trigger data */
  for (var decIndex = 0; decIndex < declarations.length; decIndex++) {
    const declarationGroup = declarations[decIndex];

    declarationGroup.forEach(function(group) {
      const property = group.property;
      if (triggerProps.indexOf(property) > -1) {
        matches.push(group);
      }
    });

  }

  callback(matches);

}
