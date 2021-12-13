// node destructuringAssignmentRestOperator.js

const sourse = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;

  return arr;
}

const arr = removeFirstTwo(sourse);

console.log(arr);
console.log(sourse);
