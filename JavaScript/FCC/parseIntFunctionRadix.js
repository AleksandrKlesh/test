// node parseIntFunctionRadix.js

function convertToInteger(str) {
  return parseInt(str, 2);
}

function convertToInteger1(str) {
  return parseInt(str, 10);
}

console.log(convertToInteger("10011"));
console.log(convertToInteger1("10001010011"));
