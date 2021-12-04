// standInLine.js

function nextInLine(arr, item) {
  arr.push(item);
  //item = arr[0];
  //return item;
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
