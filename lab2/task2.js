// Завдання 2
//function range(start, end) {
//   const result = [];
//   for (let i = start; i <= end; i++) {
//     result.push(i);
//   }
//   return result;
// };
// console.log(range(15, 30));

// Завдання 2
const result = [];
// Розв'язок 1
// function range2(start, end) {
 
//   for (let i = start; i <= end; i++) {
//     i % 2 != 0 ? result.push(i) : null;
    
//   };
// console.log(result);
// }; 
// range2(15, 30);
// Розв'язок 2
const range3 = (start, end) => {
    for (let i = start; i <= end; i++) if (i % 2 != 0) result.push(i);
    return result
}
console.log(range3(15, 30));