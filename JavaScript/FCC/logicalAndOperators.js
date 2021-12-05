// node logicalAndOperators.js

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }
  return "10 or under";
}

console.log(testGreaterThan(10));
