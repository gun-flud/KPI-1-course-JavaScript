const a = sum(1, 2, 3); // a === 6
const b = sum(0); // b === 0
const c = sum(); // c === 0
const d = sum(1, -1, 1); // d === 1
const e = sum(10, -1, -1, -1); // e === 7

// Метод Array.prototype.reduce()

function sum(...args) {
    // Array.prototype.reduce((acc, arg) => acc + arg, 0);
    return  args.reduce((acc, arg) => acc + arg, 0);
}
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
