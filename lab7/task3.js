const unique = (array) => {
    return [...new Set(array)]
};

// const result = unique([2, 1, 1, 3, 2]);
// console.log(result);

const result = unique(['top', 'bottom', 'top', 'left']);
console.log(result);
// Результат: ['top', 'bottom', 'left']
