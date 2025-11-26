const val = 5;
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const pipe = (...func) => {
    if (!func.every( f => typeof f == 'function')){
        throw new Error('Функція неможлива');
    }
    return func.reduce((acc, value) => value(acc), val);
    
};

console.log(pipe(inc, twice, cube));
console.log(pipe(inc, inc));
console.log(pipe(inc, 7, cube));

//#2

// function pipe(...func){
//     try{
//         return func.reduce((acc, value) => value(acc), val);
//     }catch (Error) {
//         console.log('Функція неможлива')
//     }
// }

