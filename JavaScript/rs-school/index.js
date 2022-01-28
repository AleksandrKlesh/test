// console.log("Hello");
// console.log(5 + 8);

// let a = 5;
// const b = 6;
// const obj {
//   a: 5,
//   b: 'sss',
// };

// console.log('a: ', a);

// console.log(Number("5"));
// console.log(NaN);
// console.log(Number("gsjdogfd"));
// console.log(isNaN(NaN));
// console.log(null);
// console.log(undefined);
// let s;
// console.log(s);

//Objects

// const obj = {
//   a: 5,
//   hello: "hello",
// };

// const obj0 = new Object();

// console.log(obj.a, obj.hello);

//          array

// const arr = new Array(5).fill(6);
// const arr0 = ["s", { a: 4 }, 7];

// const arr = ["k", { a: 4 }, 7];

// console.log(arr);

//           map

// const map = new Map();
// console.log(map);

// const map0 = new Map([
//   ["a", 6],
//   ["key", "value"],
// ]);

// console.log(map0.keys());
// console.log(map0.get("a"));
// console.log(map0.get("key"));

// const set = new Set([1, 1, 1, 1, 3, "d"]);

// console.log(set);

// const date = new Date();

// console.log(date.getFullYear());

//          function

// function func0() {
//   console.log("func0");
//   return "664942"; // or undefined without return
// }

// func0();

// function func1() {
//   console.log("func0 dsgdgd:");
//   return "664942"; // or undefined without return
// }

// func1();

//             Strings

// function oldStyleFunc(a, b, c) {
//   return a + b + c;
// }

// const arrowFunc = (d, e) => {
//   // return `$(d) + $(e)`;
//   return d + e;
// };

// const str = `str`;

// console.log(arrowFunc("John", " Smith"));

// function oldStyleFunc(a, b, c) {
//   return a + b + c;
// }

// console.log("- How are you doing?\n- I'm fine");

//          Boolean

// console.log(true);
// console.log(false);
// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 === 5);
// console.log(5 == "5");
// console.log(5 !== "5");
// console.log(5 != "5");

// console.log(5 || 6);
// console.log(undefined || 6);
// console.log(undefined || "5555");
// console.log(null || "5555");

// let a = undefined;

// let b = null;

// console.log(a || b);
// console.log(b || a);
// console.log(b || 5);

//          || &&

// console.log(false && true);

// let isShow = true;

// console.log(isShow);

// console.log(isShow && "comp");

// console.log((isShow = false));

// console.log(isShow && "comp");

//            ??

// console.log(null ?? 5);

// console.log(undefined ?? 5);

// console.log(0 || 5);

// console.log(0 ?? 5);

//         !6

// console.log(!6);

// console.log(!true);
// console.log(!false);
// console.log(!!5);
// console.log(!!"fffff");

//        function

// function func(arg0, argFunc) {
//   return argFunc(arg0);
// }

// console.log(func(5, (x) => x + 1));

// const arrF = (arg0, argFunc) => {
//   return argFunc(arg0);
// };

// console.log(arrF(5, (x) => x + 15));

//           Math

// const max = Math.abs(-4);
// console.log(max);

//           Properties and methods

// const arr = [1, 2, 3, "4"];
// const arr1 = arr.push("5");

// console.log(arr1, arr);

// const arr = [1, 2, 3, "4"];
// const arr1 = arr.join(", fsdffs");

// console.log(arr, arr1);

// const arr = [1, 2, 3, "4"];
// const mapped = arr.map((item, index) => `${item} - ${index}`);

// console.log(arr, mapped.length);

//              if

function plur(word, quantity) {
  if (quantity > 1) {
    return `${quantity} ${word}s`;
  }
  return `${quantity} ${word}`;
}

console.log(plur("user", 1));
console.log(plur("user", 6));
