// // Завдання 3
const map = [true, "hello", 5, 12, -200, false, false, "word", false];
const table = {};


// // for..of функція з попередньо заданим об'єктом лічильників
// const table = {number: 0, string: 0, boolean: 0, };
// for (const element of map) {
//   let type = typeof element;

//    table[type]++;
   
// }
for (const element of map) {
   let type = typeof element;
  
   table[type] = (table[type] || 0) + 1;
};
console.log(table);
