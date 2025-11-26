// const val = 5;
// const inc = (x) => ++x;
// const twice = (x) => x * 2;
// const cube = (x) => x ** 3;

// const pipe = (...func) => typeof i in func === 'number' ? undefined : func.reduceRight((acc, value) => value(acc), val);



// console.log(pipe(inc, twice, cube));
// console.log(pipe(inc, inc));
// // console.log(pipe(inc, 7, cube));

const val = 5;
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const pipe = (...func) => {
    try{
        return func.reduceRight((acc, value) => value(acc), val);
    }catch (Error) {
        return undefined;
    }
    
};



console.log(pipe(inc, twice, cube));
console.log(pipe(inc, inc));
console.log(pipe(inc, 7, cube));