/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let i = Math.floor((l + r) / 2);

        if (nums[i] === target) {
            return i;
            // або місце де воно має стояти
        } else if (target < nums[i]) {
            r = i - 1;
        } else {
            l = i + 1;
        }
    }



        return l;


};

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function(nums, target) {
//     let l = 0;
//     let r = nums.length - 1;
//     let ans = nums.length;

//     while (l <= r) {
//         let mid = Math.floor((l + r) / 2);

//         if (nums[mid] >= target) {
//             ans = mid;
//             r = mid - 1;
//         } else {
//             l = mid + 1;
//         }
//     }

//     return ans;
// };

console.log(searchInsert([1,3,5,6], 5)); // 2
console.log(searchInsert([1,3,5,6], 2)); // 1
console.log(searchInsert([1,3,5,6], 7)); // 4
console.log(searchInsert([1,3,5,6], 0)); // 0 
console.log(searchInsert([1], 0)); // 0
console.log(searchInsert([1], 5)); // 1
console.log(searchInsert([1,3], 2)); // 1
console.log(searchInsert([1,3], 3)); // 1   
console.log(searchInsert([1,3], 4)); // 2
console.log(searchInsert([1,3,5], 4)); // 2
console.log(searchInsert([1,3,5], 0)); // 0
console.log(searchInsert([1,3,5], 6)); // 3
console.log(searchInsert([1,3,5,6,8,9], 7)); // 4
console.log(searchInsert([1,3,5,6,8,9], 5)); // 2