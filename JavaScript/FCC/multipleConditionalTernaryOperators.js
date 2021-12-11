// node multipleConditionalTernaryOperators.js

function chechSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "equal 0";
}

console.log(chechSign(10));
console.log(chechSign(-10));
console.log(chechSign(0));
