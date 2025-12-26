const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res); // Output: 5

function contract(fn, ...types) {
    if (!types.every(value => typeof value =='number')){
        throw new Error('помилка');
    }
    return fn(types[0], types[1]);
}