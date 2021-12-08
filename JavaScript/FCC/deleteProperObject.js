// node deleteProperObject.js

var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything"],
  bark: "bow-wow",
};

delete ourDog.bark;

var myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "Woof!",
};

delete myDog.tails;

console.log(ourDog);
console.log(myDog);
