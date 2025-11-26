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

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function (x) {
//   let str = String(x);
//   let strReverse = String(x)
//     .split('')
//     .reverse()
//     .join('');

//   if (str == strReverse) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let num = 101;

// console.log(isPalindrome(num));

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     let hash = {}
//     for (let i = 0; i < nums.length; i++){
//         let key = target - nums[i];
//         if (key in hash){
//             return [hash[key], i];
//         } else{
//             hash[nums[i]] = i;
//         };
//     };

// };
// nums = [3, 3];
// target = 6
// console.log(twoSum(nums, target));

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const nums2 =[1,1,2] // Input array
// const expectedNums = [0, 1, 2, 3, 4, "_", "_", "_", "_", "_"]; // The expected answer with correct length


// Calls your implementation

/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//     let removed = new Set(nums);
//     console.dir(removed);
//     let newNums = [];
//     // console.dir(newNums);
//     // let i = 0;
//     for (let value of removed) {
//         newNums.push(value);
//         console.dir(newNums); 

//     };
    
    // return newNums.length;
    
    // if (nums.length != newNums.length){
      
    // console.log( nums.length - newNums.length)
    // let iterator = nums.length - newNums.length
      
    //   newNums.fill(8, newNums.length - 1, 8/*(newNums.length + iterator)*/)
    //   console.log(newNums);
    // }
    // return Array(removed)
// };



// const nums = [1,1,2]; // Input array
 const expectedNums = [0, 1, 2, 3, 4, "_", "_", "_", "_", "_"]; // The expected answer with correct length
// const assert = require('assert');
// const k = removeDuplicates(nums); // Calls your implementation

// assert.strictEqual(k, expectedNums.length);
// for (let i = 0; i < k; i++) {
//     assert.strictEqual(nums[i], expectedNums[i]);
// }







//перший розв'язок
// var removeDuplicates = function(nums) {
//   newNums = [];

//     for (let i = 0; i < nums.length; i++){
//       if(newNums.includes(nums[i])){
//         newNums.push('_');
//       } else{
//         newNums.push(nums[i]);
//       }
      
//     }
//     return newNums.sort();
// };

// removeDuplicates(nums);
// removeDuplicates(nums2);



// console.log(removeDuplicates(nums));
// console.log(removeDuplicates(nums2));

// Фінальна спроба
var removeDuplicates = function (nums) {
    const newNums = [];
    let k = 0;
    for (let i = 0; i < nums.length; i++){
      if(newNums.includes(nums[i])){
        continue;
      } else{
        newNums.push(nums[i]);
        k++;
      }
      
    }
    nums = newNums;
    return nums;
};
const assert = require('assert');
const k = removeDuplicates(nums); // Calls your implementation

assert.strictEqual(k, expectedNums.length);
for (let i = 0; i < k; i++) {
    assert.strictEqual(nums[i], expectedNums[i]);
}

// Фінальна спроба
//  var removeDuplicates = function (nums) {
//     const newNums = [];
//     let k = 0;
//     for (let i = 0; i < nums.length; i++){
//       if(newNums.includes(nums[i])){
//         nums.splice(i, 1);
//         nums.push(nums[i]);
        
        
//         // .push(nums[i]);
//         // continue;
//         console.log(nums);
        
//       } else{
//         newNums.push(nums[i]);
//         k++;
//       }
      
//     }
//     // nums = newNums;
//     return nums;
// };
console.log(removeDuplicates(nums));
console.log(removeDuplicates(nums));

// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val);
//     this.next = (next === undefined ? null : next);
// };
// /** 
// *  @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function(l1, l2) {
//     l1.map(Numbers);
//     console.log(l1);
// };
// addTwoNumbers()

const i = {
  name: 2,
  phone1: "+380445554433" ,
  name2: "Arsen Markarian", 
  phone3: "+380680485940" ,
  name4: "Pipiski", 
  phone5: "+380775554433" ,}
  
console.log(i['name2'])

//   .map(log)
//   .map((x) => x * 2)
//   .map(log)
//   .map((x) => ++x)
//  .map(log);
