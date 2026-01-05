/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
//     if (n < 2) return n;
//     let [ val1, val2 ] = [ 1, 0 ];
//     let val = 1;
//     for (i = 1; i < n; i++) {
//         val = val1 + val2;
//         val2 = val1;
//         val1 = val;
//         console.log(val1, val2, "Значення");
//     }
//     return val;
    
// };
// костиль, щоб пришвидшити програму
// var fib = function(n) {
//     if (n < 2 || n == 5) return n;
//     if (n <= 4) return n-1;
//     let [ val1, val2 ] = [ 5, 3 ];
//     let val = 1;
//     for (i = 5; i < n; i++) {
//         val = val1 + val2;
//         val2 = val1;
//         val1 = val;
//         console.log(val1, val2, "Значення");
//     }
//     return val; 
// };
// найкращий варіант з рекурсією і мемоізацією(динамічне програмування)
let store = {};
const fib = (n) => {
    if (n <= 1) return n;
    

    if (!store[n]) {
        store[n] = fib(n - 1) + fib(n - 2); 
    }

    return store[n];
}
console.log('значення 1:' + fib(1));
console.log('значення 2:' + fib(2));
console.log('значення 3:' + fib(3));
console.log('значення 4:' + fib(4));
console.log('значення 5:' + fib(5));
console.log('значення 6:' + fib(6));
console.log('значення 7:' + fib(7));
console.log('значення 8:' + fib(8));
console.log('значення 9:' + fib(9));
console.log('значення 10:' + fib(10));
console.log('значення 11:' + fib(11));


//  let store ={};
// var fib = function(n) {
//     if(n <=1)
//     {
//         return n;
//     }
//     if(!store[n])
//     {
//         store[n] = fib(n-2) + fib(n-1);
//     }

//     return store[n];


// };