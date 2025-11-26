// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElements(array, 5, 1, 6);
// console.log(array);
// // Результат: [2, 3, 4, 7]

const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array);
// Результат: ['Beijing', 'Saratov']

function removeElements(array, ...delVal) {

    for (let i of delVal){
        let delValue = array.indexOf(i);
        delValue != -1 ? array.splice(delValue, 1) : null;
    }
}