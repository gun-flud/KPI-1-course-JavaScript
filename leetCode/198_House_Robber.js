/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length
    if (n === 1) {
        return nums[0];
    }
    nums[2] += nums[0];

    for (let i = 3; i < n; i++) {
        nums[i] += Math.max(nums[i-2], nums[i-3]);
    }
    return Math.max(nums[n-1], nums[n-2]);
};

console.log(rob([10,15,20])); // 30
console.log(rob([1,100,1,1,1,100,1,1,100,1])); // 301
console.log(rob([1,2,3,1])); // 4
console.log(rob([2,7,9,3,1])); // 12
console.log(rob([2,7])); // 7
console.log(rob([1])); // 1