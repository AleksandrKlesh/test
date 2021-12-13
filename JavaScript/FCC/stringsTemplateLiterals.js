// node stringsTemplateLiterals.js

const person = {
  name: "Zodiac Hasbro",
  age: 56,
};

const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;
// beginning backtick, ending backtick

console.log(greeting);

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"],
};

function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class = "text-warning">${arr[i]}</li>`);
  }

  return resultDisplayArray;
}

const resultDissplayArray = makeList(result.failure);
const resultDissplayArray1 = makeList(result.success);
const resultDissplayArray2 = makeList(result.skipped);

console.log(resultDissplayArray);
console.log(resultDissplayArray1);
console.log(resultDissplayArray2);

// [
//   '<li class = "text-warning">no-var</li>',
//   '<li class = "text-warning">var-on-top</li>',
//   '<li class = "text-warning">linebreak</li>'
// ]
