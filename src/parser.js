const { convertToJson } = require('./node2json');
const { buildOptions } = require('./util');
const {
  defaultOptions,
  props,
  getTraversalObj,
} = require('./xmlbuffer2xmlnode');

function parse(xmlData, options, validationOption) {
  if (typeof xmlData === 'string') {
    const encoder = new TextEncoder();
    xmlData = encoder.encode(xmlData);
  }
  if (validationOption) {
    if (validationOption === true) validationOption = {};
  }
  options = buildOptions(options, defaultOptions, props);
  const traversableObj = getTraversalObj(xmlData, options);
  //print(traversableObj, "  ");
  return convertToJson(traversableObj, options);
}

module.exports = { parse };
