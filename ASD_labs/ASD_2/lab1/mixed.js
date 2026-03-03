/**
 * @param {number} x // стартове число, яке обчислюємо
 * @param {number} i // початкове значення суми
 * @param {number} n // кінцеве значення суми
 * @param {number} thisEl // поточне значення елемента
 * @return {number}
 */
const callback3 = (x, i, n, thisEl) => {
    if (n < i) return x;


    const step = i;
    const thisFormula = thisEl * ( Math.pow(x, 2) * Math.pow((2 * step - 1), 2) ) / ( 4 * Math.pow(step, 2) + 2 * step);
    const prevSum = callback3(x, i + 1, n, thisFormula);

    return prevSum + thisFormula;
}