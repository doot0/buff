'use strict';
const table = require('cli-table');
const triggerData = require('./data/data.json');

module.exports = print;

function print(results, callback) {

  const resultsList = new table({
    head: ['Trigger', 'Line', 'Change from default', 'Subsequent']
  });

  results.forEach(function(result) {
    resultsList.push(buildRowData(result));
  });

  console.log(resultsList.toString());
}

function buildRowData(data) {
  const prop = data.property;
  const line = data.position.start.line;

  const propertyData = triggerData.data[prop];
  const initialData = propertyData.initial;
  const updateData = propertyData.change;

  const blinkInit = initialData.blink;
  const geckoInit = initialData.gecko;
  const webkitInit = initialData.webkit;
  const edgeInit = initialData.edgehtml;

  const blinkSub = updateData.blink;
  const geckoSub = updateData.gecko;
  const webkitSub = updateData.webkit;
  const edgeSub = updateData.edgehtml;

  const blinkLayoutInit = blinkInit.layout;
  const blinkPaintInit = blinkInit.paint;
  const blinkCompInit = blinkInit.composite;

  const geckoLayoutInit = geckoInit.layout;
  const geckoPaintInit = geckoInit.paint;
  const geckoCompInit = geckoInit.composite;

  const webkitLayoutInit = webkitInit.layout;
  const webkitPaintInit = webkitInit.paint;
  const webkitCompInit = webkitInit.composite;

  const edgeLayoutInit = edgeInit.layout;
  const edgePaintInit = edgeInit.paint;
  const edgeCompInit = edgeInit.composite;

  const blinkLayoutSub = blinkSub.layout;
  const blinkPaintSub = blinkSub.paint;
  const blinkCompSub = blinkSub.composite;

  const geckoLayoutSub = geckoSub.layout;
  const geckoPaintSub = geckoSub.paint;
  const geckoCompSub = geckoSub.composite;

  const webkitLayoutSub = webkitSub.layout;
  const webkitPaintSub = webkitSub.paint;
  const webkitCompSub = webkitSub.composite;

  const edgeLayoutSub = edgeSub.layout;
  const edgePaintSub = edgeSub.paint;
  const edgeCompSub = edgeSub.composite;

  var finalBlinkInitResult = 'B: ';
  var finalBlinkSubResult = 'B: ';
  var finalWebkitInitResult = 'W: ';
  var finalWebkitSubResult = 'W: ';
  var finalGeckoInitResult = 'G: ';
  var finalGeckoSubResult = 'G: ';
  var finalEdgeInitResult = 'E: ';
  var finalEdgeSubResult = 'E: ';

  if (blinkLayoutInit) finalBlinkInitResult += 'Layout ';
  if (blinkPaintInit) finalBlinkInitResult += 'Paint ';
  if (blinkCompInit) finalBlinkInitResult += 'Composite ';

  if (geckoLayoutInit) finalGeckoInitResult += 'Layout ';
  if (geckoPaintInit) finalGeckoInitResult += 'Paint ';
  if (geckoCompInit) finalGeckoInitResult += 'Composite ';

  if (webkitLayoutInit) finalWebkitInitResult += 'Layout ';
  if (webkitPaintInit) finalWebkitInitResult += 'Paint ';
  if (webkitCompInit) finalWebkitInitResult += 'Composite ';

  if (edgeLayoutInit) finalEdgeInitResult += 'Layout ';
  if (edgePaintInit) finalEdgeInitResult += 'Paint ';
  if (edgeCompInit) finalEdgeInitResult += 'Composite ';

  if (blinkLayoutSub) finalBlinkSubResult += 'Layout ';
  if (blinkPaintSub) finalBlinkSubResult += 'Paint ';
  if (blinkCompSub) finalBlinkSubResult += 'Composite ';

  if (geckoLayoutSub) finalGeckoSubResult += 'Layout ';
  if (geckoPaintSub) finalGeckoSubResult += 'Paint ';
  if (geckoCompSub) finalGeckoSubResult += 'Composite ';

  if (webkitLayoutSub) finalWebkitSubResult += 'Layout ';
  if (webkitPaintSub) finalWebkitSubResult += 'Paint ';
  if (webkitCompSub) finalWebkitSubResult += 'Composite ';

  if (edgeLayoutSub) finalEdgeSubResult += 'Layout ';
  if (edgePaintSub) finalEdgeSubResult += 'Paint ';
  if (edgeCompSub) finalEdgeSubResult += 'Composite ';

  const initResult = [
    finalBlinkInitResult,
    finalGeckoInitResult,
    finalWebkitInitResult,
    finalEdgeInitResult
  ].join('\n');

  const subResult = [
    finalBlinkSubResult,
    finalGeckoSubResult,
    finalWebkitSubResult,
    finalEdgeSubResult
  ].join('\n');

  return [prop, line, initResult, subResult];
}
