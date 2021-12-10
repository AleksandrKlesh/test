// node iterateOddNumbersForLoop.js

var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

console.log(ourArray);

var myArray = [];

for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}

console.log(myArray);
