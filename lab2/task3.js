//Завдання 1
const avarage = (a, b) => {
  return (a + b) / 2;
};
//console.log(avarage(10, 20));
//Завдання 2
function square(number) {
  return number ** 2;
}
//console.log(square(5));
//Завдання 3
const cube = (number) => {
  return number ** 3;
};
//console.log(cube(3));

function calculate() {
  let List = [];
  for (let i = 0; i <= 9; i++) {
    List.push(avarage(square(i), cube(i)));
  }
  return List;
}
console.log(calculate());
