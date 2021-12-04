// undefinedValueReturned.js

var sum = 0;

function addThree() {
  sum = sum + 3;
}

console.log(addThree(1));
//undefined

function addFive() {
  sum += 5;
}

console.log(addFive(1));
//undefined
