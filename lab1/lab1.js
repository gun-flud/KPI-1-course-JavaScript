"use strict";
// Завдання 1
myFunc();


function myFunc() {
  const param = "dkfjlkk";
  console.log(param);
};

// Завдання 2

// Перше рішення
// const inc1 = (num) => {
//   return num + 1;
// };
// const a = 5;
// const b = inc1(a);
// console.log({ a, b });

// //Друге рішення
const inc2 = (num) => {
  return ++num.n;
};
const obj = { n: 5 };
inc2(obj)
console.log(obj);

// // Завдання 3
const map = [true, "hello", 5, 12, -200, false, false, "word"];
const table = {};


// // for..of
// // for ( let i = 0; i < map.length; i++) {
// //     if (typeof map[i] === 'number' ) {
// //         table.number++;
// //     } else if (typeof map[i] === 'string') {
// //         table.string++;
// //     } else if (typeof map[i] === 'boolean'){
// //         table.boolean++;
// //     }
// // }
// // for ( let element of map) {
// //     if (typeof element === 'number' ) {
// //         table.number++;
// //     } else if (typeof element === 'string') {
// //         table.string++;
// //     } else if (typeof element === 'boolean'){
// //         table.boolean++;
// //     }
// // }
// const table = {number: 0, string: 0, boolean: 0, };
// for (const element of map) {
//   let type = typeof element;

//    table[type]++;
   
// }
for (const element of map) {
   let type = typeof element;
  
   table[type] = (table[type] || 0) + 1;
   console.log(table);
};
console.log(table);
