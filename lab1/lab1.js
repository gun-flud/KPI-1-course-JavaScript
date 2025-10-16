'use strict';
// Завдання 1
const alpha = () => {
    const param = "dkfjlkk";
    console.log(param);
};
alpha();
// Завдання 2

// Перше рішення
const inc1 = (num) =>  {
    return num + 1;
};
const a = 5;
const b = inc1(a);
console.log({ a, b });

//Друге рішення
const inc2 = (num) => {
    return ++num.n;
};
const obj = { n: 5 };

console.log(inc2(obj));

// Завдання 3
const map = [true, 'hello', 5, 12, -200, false, false, 'word'];
const table = { number: 0, string: 0, boolean: 0 };

for ( let i = 0; i < map.length; i++) {
    if (typeof map[i] === 'number' ) {
        table.number++;
    } else if (typeof map[i] === 'string') {
        table.string++;
    } else if (typeof map[i] === 'boolean'){
        table.boolean++;  
    }
}
console.log(table);