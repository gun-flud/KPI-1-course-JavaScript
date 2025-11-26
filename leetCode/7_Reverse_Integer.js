/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = String(x);
    let minus = false;
    const INT32_MIN = -2147483648;
    const INT32_MAX = 2147483647;
    //перевірка на -
    //перевірка на нулі в кінці
    const number = x.split('');//запис в масив
    if (number[0] === '-'){//робота з мінусом
        number.shift();
        minus = true;
    }
    number.reverse();

    if (minus === true){// робота з мінусом
        number.unshift('-');
    }
    
    console.log(number);
    
    const returnNumber = Number(number.join(''));

    if (returnNumber > INT32_MAX || returnNumber < INT32_MIN) return 0;  
    return returnNumber;

};

console.dir(reverse(-12343876));
console.log(reverse(-12340000));
console.log(reverse(1534236469));