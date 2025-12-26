function fib(n) {
    if (n <= 2) return 1;
    console.log('значення №', n, fib(n - 1) + fib(n - 2));
    return fib(n - 1) + fib(n - 2);
}

// console.log(fib(5));
console.log(fib(10));
// console.log(fib(2));
// console.log(fib(54));
// console.log(fib(16));