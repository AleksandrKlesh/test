// node newProperToAnObject.js

var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything"],
};

ourDog.bark = "bow-wow";

var myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog["bark"] = "woof!";

console.log(ourDog);
console.log(myDog);
