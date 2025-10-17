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
  return ++num.n;
};
const obj = { n: 5 };
inc2(obj)
console.log(obj);