/**
 * @param {number} x // стартове число, яке обчислюємо
 * @param {number} i // початкове значення суми
 * @param {number} n // кінцеве значення суми
 * @return {number}
 */
function callback2(x, i, n) {
    if (n < i) return { formula: x, sum: x };
    
    const { formula: prevFormula, sum: prevSum } = callback2(x, i, n - 1);
    const step = n;

    const thisFormula =
        (prevFormula * (Math.pow(x, 2) * Math.pow(2 * step - 1, 2))) /
        (4 * Math.pow(step, 2) + 2 * step);
    const sum = prevSum + thisFormula;

    return { formula: thisFormula, sum: sum };
}
