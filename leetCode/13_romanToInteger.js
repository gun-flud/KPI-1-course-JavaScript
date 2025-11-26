// // /**
// //  * @param {string} s
// //  * @return {number}
// //  */

// const intToRoman = (num) => {
//     //   const translateDict = [
//     //     [1000, "M"],
//     //     [900, "CM"],
//     //     [500, "D"],
//     //     [400, "CD"],
//     //     [100, "C"],
//     //     [90, "XC"],
//     //     [50, "L"],
//     //     [40, "XL"],
//     //     [10, "X"],
//     //     [9, "IX"],
//     //     [5, "V"],
//     //     [4, "IV"],
//     //     [1, "I"],
//     //   ];
//     const translateDict = {
//         M: 1000,
//         CM: 900,
//         D: 500,
//         CD: 400,
//         C: 100,
//         XC: 90,
//         L: 50,
//         XL: 40,
//         X: 10,
//         IX: 9,
//         V: 5,
//         IV: 4,
//         I: 1,
//     };

//     let i = 0;
//     let counter = 0;
//     while (true) {
//         for ([roman, integer] of [...Object.entries(translateDict)]) {
//             //III - 3
//             //IX - 9
//             //V - 5
//             console.log(i);
//             let newNum = num.slice(i, 1);
//             let newNum2 = num.slice(i, 2);
//             if (newNum2 === roman) {
//                 counter += integer;
//                 i += 2;
                
//                 console.dir(counter);
//             } else if (newNum2 != roman && newNum === roman) {
//                 counter += integer;
//                 console.dir(counter);

//                 i++;   
//             }
//         }
//          if (i + 1 === num.length) break; 
//     }
//     // let i = 0;
//     // let counter = 0;
//     // for (index in translateDict){
//     //     let newNum2 = '';
//     //     let newNum = '';
//     //     newNum = num.slice(i, 1);
//     //     newNum2 = num.slice(i, 2);

//     //     if (newNum2 === index){
//     //         counter += translateDict[index]
//     //         // console.log(counter);
//     //         i += 2;
//     //         continue;
//     //     } else if (newNum === index){
//     //         counter += translateDict[index];
//     //         i++;
//     //         // console.log(i);
//     //         continue;
//     //     }else if((i + 1) === num.length){
//     //         break;
//     //     }
//     //     console.log(i);
//     //     // console.log(newNum);
//     //     // if(num.splice(i, 2) === index){
//     //     //     console.log(translateDict[index])
//     //     // }
//     // };

//     //   let remainder = num;
//     //   let result = "";

//     //   for (const [arabian, roman] of translateDict) {
//     //     const lettersCount = Math.floor(remainder / arabian);
//     //     result += roman.repeat(lettersCount);
//     //     remainder %= arabian;
//     //     console.log(remainder);
//     //   }

//     //   return result;
// };
// intToRoman("XIV");
// // console.dir(intToRoman('XIVIII'));
