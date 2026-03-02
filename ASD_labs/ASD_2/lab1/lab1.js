/**
 * @param {number} x // стартове число, яке обчислюємо
 * @param {number} i // початкове значення суми
 * @param {number} n // кінцеве значення суми
 * @param {number} totalSum // сума функцій
 * @return {number} 
 */
function callback (x, i, n, thisEl, totalSum ) {
    // 1 рекурсивний спуск
    if (i > n) {
        return totalSum;
    }
    const thisExp = thisEl * ( Math.pow(x, 2) * Math.pow((2 * i - 1), 2) ) / ( 4 * Math.pow(i, 2) + 2 * i);

   return callback(x, ++i, n, thisExp, totalSum + thisExp);
   
}

// 2 рекурсивне повернення

function callback2 (x, i, n) {
    if (n < i) {
        return {formula: x, sum: x};
        // ретурн буде сума і все
    }
    const {formula: prevFormula, sum: prevSum} = callback2(x, i, n - 1);
    const step = n;

    const thisFormula = prevFormula * ( Math.pow(x, 2) * Math.pow((2 * step - 1), 2) ) / ( 4 * Math.pow(step, 2) + 2 * step);
    const sum = prevSum + thisFormula;
   
    return {formula: thisFormula, sum: sum};
}

// 3 змішений підхід

const callback3 = (x, i, n, thisEl) => {
    if (n < i) return x;


    const step = i;
    const thisFormula = thisEl * ( Math.pow(x, 2) * Math.pow((2 * step - 1), 2) ) / ( 4 * Math.pow(step, 2) + 2 * step);
    const prevSum = callback3(x, i + 1, n, thisFormula);

    return prevSum + thisFormula;
}

function arcsin (x) {
    return Math.asin(x);
}

const x = 0.5;
const y = 30;

console.log(callback(x, 1, y, x, x));
console.log(callback2(x, 1, y).sum);
console.log(callback3(x, 1, y, x));
console.log(arcsin(x));




// f1 * (x^2 (2i - 1)^2 / (4i^2 + 2i))

// 