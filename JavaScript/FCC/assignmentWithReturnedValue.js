// assignmentWithReturnedValue.js

var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

var processeed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processeed = processArg(7);

console.log(changed, processeed);
