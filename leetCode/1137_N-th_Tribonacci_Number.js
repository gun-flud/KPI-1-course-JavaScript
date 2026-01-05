let store = {
    0: 0,
    1: 1,
    2: 1, 
};
var tribonacci = function(n) {
    if (n <= 1) return n;
    

    if (!store[n]) {
        store[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3); 
    }

    return store[n];
}
console.log('значення 1:' + tribonacci(1));
console.log('значення 2:' + tribonacci(2));
console.log('значення 3:' + tribonacci(3));
console.log('значення 4:' + tribonacci(4));
console.log('значення 5:' + tribonacci(5));
console.log('значення 6:' + tribonacci(6));
console.log('значення 7:' + tribonacci(7));
console.log('значення 8:' + tribonacci(8));
console.log('значення 9:' + tribonacci(9));
console.log('значення 10:' + tribonacci(10));
console.log('значення 25:' + tribonacci(25));

