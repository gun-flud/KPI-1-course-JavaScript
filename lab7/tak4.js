// const array1 = [7, -2, 10, 5, 0];
// const array2 = [0, 10];
// const result = difference(array1, array2);
// console.log(result);
// // Результат: [7, -2, 5]


const array1 = ['Beijing', 'Kiev'];
const array2 = ['Kiev', 'London', 'Baghdad'];
const result = difference(array1, array2);
console.log(result);
// Результат: ['Beijing']

function difference(array1, array2){
    const res = [];
    for (let i of array1){
        array2.includes(i) ? null : res.push(i);
    };
    return res;
}