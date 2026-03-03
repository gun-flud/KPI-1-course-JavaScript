/**
 * @param {number} x // стартове число, яке обчислюємо
 * @param {number} i // початкове значення суми
 * @param {number} n // кінцеве значення суми
 * @param {number} totalSum // сума функцій
 * @return {number}
 */
function callback(x, i, n, thisEl, totalSum) {
    if (i > n) return totalSum;

    const thisExp =
        (thisEl * (Math.pow(x, 2) * Math.pow(2 * i - 1, 2))) /
        (4 * Math.pow(i, 2) + 2 * i);
    return callback(x, ++i, n, thisExp, totalSum + thisExp);
}
