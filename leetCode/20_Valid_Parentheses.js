/**
 * @param {string} s
 * @return {boolean}
 */

// var isValid = function(input) {
//     const charlist = ['(', ')', '{', '}', '[', ']'];
//     const arrayVal = input
//     .split('')
//     .join('#')
//     .split('');
//     const middle = Math.floor(arrayVal.length / 2);
//     console.dir(arrayVal);
//     for (let i = 1; i <= middle; i += 2){
//         if ( arrayVal[middle - i] === arrayVal[middle + i] ){
//             console.log(arrayVal[middle - i]);
//             console.log(arrayVal[middle + i]);
//             return false;

//         };
//     };

//     return true;

// };
// console.log(isValid('sdlfkjalskdfjlaskdjflaskdfjlaskdjf'));
// console.log(isValid("()"));
// isValid('sdlfkjalskdfjlaskdjflaskdfjlaskdjf')
// isValid('{()}');

// var isValid = function (input) {
//     const arrayVal = input.split("");
//     const charlist = [];
//     const opening = ["(", "{", "["];
//     const closure = [")", "}", "]"];

//     for (let i = 0; i < arrayVal.length; i++) {
//         //console.log(i);
//         for (let check = 0; check < opening.length; check++) {
//             // console.log(i);
//             //  console.log(check);
//             if (arrayVal[i] === opening[check]) {
//                 charlist.push(arrayVal[i]);
//                 //  console.log(charlist);

//             } else if (arrayVal[i] === closure[check]) {

//                 if (charlist.includes(opening[check])) {
//                     const index = charlist.indexOf(opening[check]); // знайти перший індекс 4
//                     if (index !== -1) charlist.splice(index, 1); 
//                     charlist.pop();
//                     //  console.log(charlist);
//                     // return true;

//                 } 
//                 //else {

//                 //     return false;
//                 // }

//             }
//         }
//     }
//     if (charlist.length === 0){
//       return true;
//     } else if (arrayVal.length === 1){
//         return false;
//     } else {
//         return false;
//     }

//     // return false;
// };
// console.log(isValid("()"));//true
// console.log(isValid(")("));//false
// console.log(isValid("([)]")); //false
// console.log(isValid("([])"));//true
// console.log(isValid("()[]{}"));//true
// console.log(isValid("(]"));//false
// console.log(isValid("("));//false
// console.log(isValid("["));//false
// console.log(isValid("[["));//false
// console.log(isValid("({{{{}}}))"));//false

// var isValid = function (input) {
//     const arrayVal = input.split("");
//     const charOpen = [];
//     const newVal = [];
//     const closure = [")", "}", "]"];
//     const opening = ["(", "{", "["];

//     for (letм  i = 0; i < arrayVal.length; i++) {
//         // console.log(i);
//             for (let check = 0; check < closure.length; check++) {

//                 if (arrayVal[i] === closure[check]) {

//                     charOpen.unshift(opening[check]);
//                     // console.log(charOpen);
                    
//             };
//         };
//     };
//     const newArr = arrayVal.filter(el => el != '}' && el != ']' && el != ')');
    
//     console.log(charOpen);
//         console.log(newArr);
//     if (charOpen.join('') == newArr.join('')){
//         // console.log(arrayVal);
//         // console.log(newArr);
//         return true;
//     } else {
//         return false;
//     }
// };


var isValid = function (input) {
    const arrayVal = input.split("");
    const charlist = [];
    const endList = [];//модифікація
    const opening = ["(", "{", "["];
    const closure = [")", "}", "]"];

    for (let i = 0; i < arrayVal.length; i++) {
    
    for (let check = 0; check < opening.length; check++) {
    
             if (arrayVal[i] === opening[check]) {
                 charlist.push(arrayVal[i]);
    //             //  console.log(charlist);

             } else if (arrayVal[i] === closure[check]) {

                endList.push(closure[check]);
                 if (charlist[charlist.length - 1] === opening[check]) {
    //                 const index = charlist.indexOf(opening[check]); // знайти перший індекс 4
    //                 if (index !== -1) charlist.splice(index, 1); 
                     charlist.pop();
                     endList.pop();
    //                 //  console.log(charlist);
    //                 // return true;

                 } 
    //             //else {

    //             //     return false;
    //             // }

             }
         }
    }
    if (charlist.length === 0 && arrayVal.length !== 1 && endList.length === 0){
      return true;
    } else if (arrayVal.length === 1){
        return false;
    } else {
        return false;
    }

    // return false;
};

console.log(isValid("()"));//true
console.log(isValid(")("));//false
console.log(isValid("([)]")); //false
console.log(isValid("([])"));//true
console.log(isValid("()[]{}"));//true
console.log(isValid("(]"));//false
console.log(isValid("("));//false
console.log(isValid("["));//false
console.log(isValid("[["));//false
console.log(isValid("({{{{}}}))"));//false
console.log(isValid(")(){}"));//false