//Завдання 1
const phoneBook = [
  { name: "Marcus Aurelius", phone: "+380445554433" },
  { name: "Arsen Markarian", phone: "+380680485940" },
  { name: "Pipiski", phone: "+380775554433" },
  { name: "Siski", phone: "+380225554433" },
  { name: "Kiski", phone: "+380335554433" },
  { name: "Masiski", phone: "+380445522897" },
];

// const findPhoneByName = (name) => {

//   for (let i of phoneBook){

//     i.name === name ? console.log(i.phone) : null;
//   }
// };

// findPhoneByName("Siski");

//Завдання 2


const findPhoneByHash = (name) => {

    let hash = phoneBook.find(item => item.name == name) 
    console.log(hash.phone);
        
};

findPhoneByHash("Siski");
