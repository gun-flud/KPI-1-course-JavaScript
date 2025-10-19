//варіант 1
const x = '127.0.0.1';
let setIP = x
    .split('.')
    .map(Number);
    console.log(setIP);
const elements = setIP.length;

for (let i = 0; i < elements; i++){
    
    first = setIP[i] << 8*(elements - (i+1));
    console.log(first);
    // first = setIP[0] << 24;
    // second = setIP[1] << 16;
    // third = setIP[2] << 8;
    // fourth = setIP[3] << 0;
};

// //варіант 2
// const x2 = '127.0.0.1';
// let setIP2 = x2
//     .split('.')
//     .map(Number)
//     .reduce((previousNumber, currentValue, Index, array) => array[i] << 8*(elements - (i+1)) );
   
//     // first = setIP[0] << 24;
//     // second = setIP[1] << 16;
//     // third = setIP[2] << 8;
//     // fourth = setIP[3] << 0;


