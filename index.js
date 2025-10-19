// const inf = null;
// console.log(`fdfj ${inf}`);

// const a = 5;
// const b = inc(a);

// const inc = () => {

// }

// console.log({a, b});

// const x = [true, 'hello', 5, 12, -200, false, false, 'word', 'andsk', 998, 9]
// const table = { number: 0, string: 0, boolean: 0 };

// for (a of x) {

// };

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function (strs) {
//     if (strs.length === 0) return "";
//   let prefixLength = 0;
//   let firstElement = strs.shift();

//   while (true) {
//     if (prefixLength >= firstElement.length ) break;
//     const letter = firstElement[prefixLength];
//     if (strs.some((str) => str[prefixLength] != letter)) {
//       break;
//     }

//     prefixLength++;
//   }
//   return firstElement.slice(0, prefixLength);
// };
// const words = []
// console.dir(longestCommonPrefix(words));

// var twoSum = function(nums, target) {
//     let results = [];

//     for (let i = 0; i <= nums.length; i++){
//         // console.log(i);

//         for (let k = i + 1; k <= nums.length; k++){
//             //  console.log(k);

//             if (nums[i] + nums[k] === target){
//                 results.push(i, k);

//             }
//         };
//     };
// return results;
// };
// nums = [3, 3];
// target = 6;
// console.log(twoSum(nums, target));

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = String(x);
  let strReverse = String(x)
    .split('')
    .reverse()
    .join('');

  if (str == strReverse) {
    return true;
  } else {
    return false;
  }
};

// let num = 101;


// console.log(isPalindrome(num));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {}
    for (let i = 0; i < nums.length; i++){
        let key = target - nums[i];
        if (key in hash){
            return [hash[key], i];
        } else{
            hash[nums[i]] = i;
        };
    };

};
nums = [3, 3];
target = 6
console.log(twoSum(nums, target));