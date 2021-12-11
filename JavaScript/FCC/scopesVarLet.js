// node scopesVarLet.js

function checkScopes() {
  "use strict";
  let i = "fuction scope"; //var
  if (true) {
    let i = "block scope"; //" ", let, var
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScopes();
