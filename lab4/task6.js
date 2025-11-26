// Умова
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9],]);
console.log(m);

function max (args){
    return args.flat().reduce((acc, numbers) => Math.max(numbers));
};



