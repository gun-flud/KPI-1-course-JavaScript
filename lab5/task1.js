// const seq = (...args) => (x) => {
//     return args.reduce((acc, fun) => fun(acc), x);
// };

// const result = seq(x => x + 1,
//    x => x * 2,
//    x => x / 3,
//    x => x - 4,)(7);

// console.log(result);

// 2 варіант

const seq = (args) => {
    array = [args];

    const num = (index) => {
        if (typeof index === 'number'){
            return array.reduce((acc, value) => value(acc), index);
        }
        array.push(index);
        return num;
    }
    return num;

}

console.log(seq(x => x + 1)
   (x => x * 2)
   (x => x / 3)
   (x => x - 4)(7));



   

   






