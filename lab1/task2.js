// Завдання 2

// Перше рішення
const inc1 = (num) => {
  return num + 1;
};
const a = 5;
const b = inc1(a);
console.log({ a, b });

// //Друге рішення
const inc2 = (num) => {
  num.n++;
};
const obj = { n: 5 };
inc2(obj)
console.log(obj);


//треба видалити
const inc1 = (num) => {
  num = num + 1;
};
const a = 5;
inc1(a);
console.log(a);

const inc2 = (num) => {
  num.n = num.n + 1;
};
const obj = { n: 5 };
inc2(obj)
console.log(obj);