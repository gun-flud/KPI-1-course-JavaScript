/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // const table[m][n] = Array().fill(0); це формат для статичної типізації, а не динамічної
    if (m === 1 || n === 1) return 1;
    const table = Array.from({ length: m }, () => Array(n).fill(1));
    let j = 1;

    for(let i = 1; j < m; i++) {
        table[j][i] = table[j-1][i] + table[j][i-1];

        if (i === n - 1) {
            i = 0;
            j += 1;
        }
    }
    return table[m-1][n-1];
};

console.log(uniquePaths(2, 1)); // 1
console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(7, 3)); // 28
console.log(uniquePaths(3, 3)); // 6        