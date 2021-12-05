// node elseStatements.js

function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // if (val <= 5) {
  //    result = "5 or Smaller";

  // }
  return result;
}

console.log(testElse(5));
