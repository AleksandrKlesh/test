// node declareReadOnlyConst.js

function printManyTimes(str) {
  "use strict";

  const SENTENCE = str + " is cool!"; //var

  // sentence = str + " is amazing!";

  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");
