/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    if (n <= 3) return n;
    let [ val1, val2] = [3, 2];
    let val = 1;
    for (i = 3; i < n; i++) {
        val = val1 + val2;
        val2 = val1;
        val1 = val;
        console.log(val1, val2, "Значення");
    }
    return val;
    
};
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
