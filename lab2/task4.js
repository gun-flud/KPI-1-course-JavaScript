//Завдання 1
const set1 = { name: "Vlad" };
let set2 = { name: "Vlad" };
console.log(set2);

//Завдання 2
set1.name = "Cool";
set2.name = "salo";
console.log(set1, set2);

//Завдання 3
//помилка:
//set1 = { money: 1235, };
set2 = { mama: false };
console.log(set1, set2);

//Завдання 4
function createUser(name, city) {
  return { name, city };
}
console.log(createUser("Vladddd", "Volodymyr"));
