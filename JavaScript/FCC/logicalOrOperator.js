// node logicalOrOperator.js

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  // if (val > 20) {
  //   return "Outside";
  // }
  return "Inside";
}
console.log(testLogicalOr(10));
