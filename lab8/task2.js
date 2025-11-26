const store = (val) => () => val;

const read = store(5);
const value = read();
console.log(value); // Output: 5

