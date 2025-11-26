// /**
//  * @param {string} palindrom
//  * @return {string}
//  */
// const longestPalindrome = (palindrom) => {
//     //перевірка на те чи все слово паліндром
//     let palindromicNum = palindrom
//     .split('')
//     .reverse()
//     .join("");
//     if (palindromicNum === palindrom){
//         return palindromicNum;// треба буде розкоментувати
//         // console.log(palindrom);//треба закоментувати
//     };

//     let palindromMem = '';
//     let testsNumber = 2;//початкове значення перевірки паліндромів в слові
//     for (let iterator = 0; iterator < palindrom.length; iterator++){
//         let slised = palindrom // відрізок
//         .split('')
//         .splice(iterator, testsNumber)
//         .join('');
//         //console.log(slised);
//         let reversSlised = palindrom // перевернутий відрізок
//         .split('')
//         .splice(iterator, testsNumber)
//         .reverse()
//         .join('');
//         //console.log(reversSlised);//
//         //console.log(iterator);//

//         if(slised.length > 1 && reversSlised === slised ){
//             (slised.length > palindromMem.length) ? palindromMem = slised : null;
//              //console.log(palindromMem);//
//             testsNumber++;
//             iterator = -1;
//         }else if ((iterator + 1) === palindrom.length){
//             testsNumber++;
//             iterator = -1;
//         // }else if (palindrom.length === 2){
//         //     return palindrom[0]
//         };

//         if((testsNumber) >= palindrom.length ){
//               break;
//         };
//     };

//     if (palindromMem != ''){
//         return palindromMem;
//     } else{
//         return palindrom[0]; };
//     // return palindromMem;
//     // console.log(palindromMem);
// };
// console.log(longestPalindrome('cbbd'));
// console.log(longestPalindrome('babad'));
// console.log(longestPalindrome('abbasta'));
// console.log(longestPalindrome('adaba'));
// console.log(longestPalindrome('abbbbat'));
// console.log(longestPalindrome('aaabbbaaa'));
// console.log(longestPalindrome("aacabdkacaa"));
// console.log(longestPalindrome("ac"));
// console.log(longestPalindrome("akrlsjfts"));

// /**
//  * @param {string} palindrom
//  * @return {string}
//  */
// const longestPalindrome = (palindrom) => {
    
//     if (palindrom === palindrom.split("").reverse().join("")) {
//         return palindrom;// перевірка на те чи все слово паліндром
//     }else if (palindrom.length === 2){
//         return palindrom[0];//перевірка на те що слово з 2 букв
//     };


//     let palindromMem = "";
//     //let testsNumber = 2;
//     let iterator = 0;
//     for (let testsNumber = 2; testsNumber < palindrom.length; testsNumber++) {
//         //  if(palindromMem === '' && testsNumber === 3){
//         //         return palindrom[0];
//         //         break;
//         //     }
//         for (let iterator = 0; (iterator+1) < palindrom.length; iterator++) {
//             let arraySlise = palindrom // відрізок
//                 .split("")
//                 .splice(iterator, testsNumber);
//             let slised = arraySlise.join(""); // перевірка оригінал відріщзок
//             // console.log(slised);
//             let reversSlised = arraySlise.reverse().join(""); // перевірка перевернутий відрізок
//             //console.log(reversSlised); //
//             //console.log(iterator); //

//             if(slised.length > palindromMem.length && reversSlised === slised ){
//                 palindromMem = slised;
//                 break;
//                  } 
                
//         };
//         if(palindromMem === '' && iterator === 1){
//             return palindrom[0];
//             break;
//         }
//     };
    
//     return palindromMem;
    
// };
// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("abbasta"));
// console.log(longestPalindrome("adaba"));
// console.log(longestPalindrome("abbbbat"));
// console.log(longestPalindrome("aaabbbaaa"));
// console.log(longestPalindrome("aacabdkacaa"));
// console.log(longestPalindrome("ac"));
// console.log(longestPalindrome("akrlsjfts"));
// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("acbb"));
// console.log(longestPalindrome("abab"));

//abdsr => a
//ab => a

//Оптимізований код
//  let arraySlise = palindrom // відрізок
//         .split('')
//         .splice(iterator, testsNumber)
//         let slised = arraySlise.join('');
//         //console.log(slised);
//         let reversSlised = arraySlise.reverse().join(''); // перевернутий відрізок
//         //console.log(reversSlised);//
//         //console.log(iterator);//








// /**
//  * @param {string} palindrom
//  * @return {string}
//  */
// const longestPalindrome = (palindrom) => {
    
//     if (palindrom === palindrom.split("").reverse().join("")) {
//         return palindrom;// перевірка на те чи все слово паліндром
//     }else if (palindrom.length === 2){
//         return palindrom[0];//перевірка на те що слово з 2 букв
//     };


//     let palindromMem = "";
//     //let testsNumber = 2;
    
//     for (let testsNumber = 2; testsNumber < palindrom.length; testsNumber++) {
//         //  if(palindromMem === '' && testsNumber === 3){
//         //         return palindrom[0];
//         //         break;
//         //     }
//         for (let iterator = 0; (iterator+1) < palindrom.length; iterator++) {
//             let arraySlise = palindrom // відрізок
//                 .split("")
//                 .splice(iterator, testsNumber);
//             let slised = arraySlise.join(""); // перевірка оригінал відріщзок
//             // console.log(slised);
//             let reversSlised = arraySlise.reverse().join(""); // перевірка перевернутий відрізок
//             //console.log(reversSlised); //
//             //console.log(iterator); //

//             if(slised.length > palindromMem.length && reversSlised === slised ){
//                 palindromMem = slised;
//                 break;
//                  } 
                
//         };
//         if(palindromMem === '' && iterator === 1){
//             return palindrom[0];
//             // break;
//         }
//     };
    
//     return palindromMem;
    
// };
// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("bab"));
// console.log(longestPalindrome("abbasta"));
// console.log(longestPalindrome("adaba"));
// console.log(longestPalindrome("abbbbat"));
// console.log(longestPalindrome("aaabbbaaa"));
// console.log(longestPalindrome("aacabdkacaa"));
// console.log(longestPalindrome("ac"));
// console.log(longestPalindrome("akrlsjfts"));
// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("acbb"));

//abdsr => a
//ab => a

//Оптимізований код
//  let arraySlise = palindrom // відрізок
//         .split('')
//         .splice(iterator, testsNumber)
//         let slised = arraySlise.join('');
//         //console.log(slised);
//         let reversSlised = arraySlise.reverse().join(''); // перевернутий відрізок
//         //console.log(reversSlised);//
//         //console.log(iterator);//

// Працює, але повільно
// const longestPalindrome = (palindrom) => {
    
//     if (palindrom === palindrom.split("").reverse().join("")) {
//         return palindrom;// перевірка на те чи все слово паліндром
//     };

    
//     let palindromMem = "";
   
//     for (let testsNumber = 1; testsNumber < palindrom.length; testsNumber++) {
        
//         for (let iterator = 0; (iterator+1) < palindrom.length; iterator++) {
//             let arraySlise = palindrom // відрізок
//                 .split("")
//                 .splice(iterator, testsNumber);
//             let slised = arraySlise.join(""); 
//             let reversSlised = arraySlise.reverse().join(""); // перевірка перевернутий відрізок
            

//             if(slised.length > palindromMem.length && reversSlised === slised ){
//                 palindromMem = slised;
//                 console.log(testsNumber);
//                 console.log(iterator);
//                 break;
//                  } 
                
//         };
       
//     };
    
//     return palindromMem;
    
// };

// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("bab"));
// console.log(longestPalindrome("abbasta"));
// console.log(longestPalindrome("adaba"));
// console.log(longestPalindrome("abbbbat"));
// console.log(longestPalindrome("aaabbbaaa"));
// console.log(longestPalindrome("aacabdkacaa"));
// console.log(longestPalindrome("ac"));
// console.log(longestPalindrome("akrlsjfts"));
// console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranedcanlongendureWeahlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
// console.log(longestPalindrome("acbb"));


// const longestPalindrome = (palindrom) => {
    
//     if (palindrom === palindrom.split("").reverse().join("")) {
//         return palindrom;// перевірка на те чи все слово паліндром
//     };

    
//     let palindromMem = "";
//     let testsNumber = 1;
//     while(testsNumber < palindrom.length) {
        
//         for (let iterator = 0; (iterator+1) < palindrom.length; iterator++) {
//             let arraySlise = palindrom // відрізок
//                 .split("")
//                 .splice(iterator, testsNumber);
//             let slised = arraySlise.join(""); 
//             let reversSlised = arraySlise.reverse().join(""); // перевірка перевернутий відрізок
            

//             if(slised.length > palindromMem.length && reversSlised === slised ){
//                 palindromMem = slised;
//                 console.log(testsNumber);
//                 console.log(iterator);
//                 break;
//                  } 
                
//         };
       
//     };
    
//     return palindromMem;
    
// };





// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("bab"));
// console.log(longestPalindrome("abbasta"));
// console.log(longestPalindrome("adaba"));
// console.log(longestPalindrome("abbbbat"));
// console.log(longestPalindrome("aaabbbaaa"));
// console.log(longestPalindrome("aacabdkacaa"));
// console.log(longestPalindrome("ac"));
// console.log(longestPalindrome("akrlsjfts"));
// console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranedcanlongendureWeahlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
// console.log(longestPalindrome("acbb"));



const i = Array();
console.log(i);