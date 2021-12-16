let floatNumber = 123.456789;

Math.trunc(floatNumber);

Math.round(floatNumber);
Math.ceil(floatNumber);
Math.floor(floatNumber);

parseInt(floatNumber, 10);

let newArray = new Int32Array([floatNumber]);
console.log(newArray[0]);

let a = 13.6 | 0; // 13
let b = 2.45 | 0; // 2
let c = -3.6 | 0; // -3
