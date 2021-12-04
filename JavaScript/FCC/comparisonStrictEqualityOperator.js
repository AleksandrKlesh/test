// comparisonStrictEqualityOperator.js

function testStrict(val) {
  if (val === 3) {
    return "Equal";
  }
  return "Not equal";
}

console.log(testStrict(3));
