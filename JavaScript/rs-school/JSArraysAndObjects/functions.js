// const objectA = {
//     key1: 'value1',
//     key2: 'value2'
// }

// const student = {
//   name: 'Valera',
//   email: 'valera1991@gmail.com',
//   score: {
//     task1: 90,
//     task2: 50,
//   },
//   1: 10,
//   'dumb key': 25,
// };

//     get the value through the key

// console.log(student.email);
// console.log(student.score.task2);

// console.log(student.email);
// console.log(student['email']);
// console.log(student['1']);
// console.log(student['dumb key']);

//           all the keys and objects

// console.log(keys);
// console.log(values);

//     new key and value and replace and delete

// student.newKey = 'newValue';
// console.log(student);

// student.studentName = student.name;

// delete student.name;

// const keys = Object.keys(student);
// const values = Object.values(student);

// const superKey = 'myKey';

// const functionA = (a) => a;

// // student[functionA(12)] = 'supercalifrasjfsd';
// // student.superKey = 'key1';
// student[superKey] = 'key2';

// console.log(student);

//            arrays

// const array = [1, 'string', { student }, ['1', 2]];

// const value = array[3];
// console.log(value);

// const array = [1, 'string', { student }, ['1', 2]];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
//   //   console.log(i + `\n` + array[i]);
// }

// const value = array[3];
// console.log(value);

//           array methods

// const array = [1, 2, 3, 4];
// array[array.length] = 5;

// array.array.push(6);
// console.log(array);
// array.push({
//   team: 'BULL',
//   game: 'final',
//   players: 12,
// });

// let popVariable = array.pop();

// array.unshift([2, 3]);
// array.shift();

// console.log(array);
// console.log(popVariable);

//           forEach

// const array = [1, 2, 3, 4];

// array.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });

// const array2 = array.map((value, index, arr) => {
//   console.log(value, index, arr);
//   return value + index;
// });

// const array3 = [];

// array.forEach((value, index) => {
//   array3.push(value + index);
// });

// console.log(array, array2, array3);

//             find

// const array = [1, 2, 3, 4];
// const array2 = [2, 3, 4, 5, 6];
// const array3 = [];

// const findResult = array.find((value, index) => {
//   return value > 3;
// });

// const findResult = array.find((value, index) => {
//   return Array.isArray(value);
// });

// const findResult = array.filter((value, index) => {
//   return value > 2;
// });

// const findResult = array.filter((value, index) => {
//   if (value > 3) {
//     return true;
//   } else if (value === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const findResult = array.reverse().filter((value, index) => {
//   if (value > 3) {
//     return true;
//   } else if (value === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(findResult);

//         slice

// const array = [1, 2, 3, 4];
// const array1 = [2, 3, 4, 5, 6];
// const array2 = [];

// const sliceResult = array.slice(1, 3);
// const concatResult = array.concat(array, array1, array2);
// const spliceResult = array.splice(0, 2, 8);

// console.log(sliceResult);
// console.log(concatResult);
// console.log(spliceResult, array);

//             sort

// const array = [0, 1, 2, 3, 4, 4, -10, 20, -100, 4, 5];

// const sortedArray = array.sort((a, b) => a - b);

// const reverseSortedArray = array.sort((a, b) => b - a);

// console.log(reverseSortedArray);
// console.log(array.sort((a, b) => a - b));

// const array = [0, 1, 2, 3, 4, 4, -10, 20, -100, 4, 5];

// array.sort((a, b) => (a > b ? 1 : -1));

// console.log(array);

//            objects

// const student = {
//   name: 'Valera',
//   email: 'valera1991@gmail.com',
//   score: {
//     task1: 90,
//     task2: 50,
//   },
// };

// const studentKeys = Object.keys(student);

// studentKeys.forEach((value) => {
//   console.log(value, student[value]);
// });

// const studentKeys = Object.values(student);

// studentKeys.forEach((value) => {
//   console.log(value);
// });

//          new methods

// student.mySuperCoolMethod = function (key) {
//   console.log(this[key]);
// };

// student.mySuperCoolMethod('name');

// const student = {
//   name: 'Valera',
//   email: 'valera1991@gmail.com',
//   score: {
//     task1: 90,
//     task: 50,
//   },
//   myScore: function () {
//     return this.score.task1 + this.score.task;
//   },
// };

// console.log(student.myScore());

// const student = {
//   name: 'Valera',
//   email: 'valera1991@gmail.com',
//   score: {
//     task1: 90,
//     task: 50,
//   },
// };

//            spread operator...

// const name = student.name;

// const { name } = student

// const students = [student, student, student];

// const studentsWithTotal = students.map((value) => {
//   value.totalScore = value.score.task1 + value.score.task;
//   return value;
// });

// // const studentsWithTotal = students.map((value) => {
// //   return {
// //     ...value,
// //     totalScore: value.score.task1 + value.score.task,
// //   };
// // });

// console.log(students, studentsWithTotal);

// const student = {
//   name: 'Valera',
//   email: 'valera1991@gmail.com',
//   score: {
//     task1: 90,
//     task: 50,
//   },
// };

// const students = [student, student, student];
// students.forEach((value) => {
//   value.totalScore = value.score.task1 + value.score.task;
// });

// console.log(students);
