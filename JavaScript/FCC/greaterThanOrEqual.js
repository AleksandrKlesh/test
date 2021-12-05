// node greaterThanOrEqual.js

function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 or Over";
  }
  return "less than 10";
}

console.log(testGreaterOrEqual(10));
