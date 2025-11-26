// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5);
// console.log(array);
// // Результат: [1, 2, 3, 4, 6, 7]

const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array, 'Lima'); // удалит 'Lima' из массива
removeElement(array, 'Berlin'); // не удалит ничего
console.log(array);
// Результат: ['Kiev', 'Beijing', 'Saratov']

function removeElement(array, delVal) {
    
    const delValue = array.indexOf(delVal);
    delValue != -1 ? array.splice(delValue, 1) : null;
}