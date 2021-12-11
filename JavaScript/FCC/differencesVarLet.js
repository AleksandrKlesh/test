// node differencesVarLet.js

let catName = "Quincy"; //var
let quote; //var

catName = "Beau"; //var //let

function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
}

catTalk();

console.log(quote);
