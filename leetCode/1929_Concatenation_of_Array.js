/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    //nums // int array
    //ans // int array that equals 2nums.length
    // 1
    // const ans = [...nums];
    // ans.push(...nums); 
    // return ans;
    // 2 краще 
    // const ans = [...nums, ...nums];
    // return ans;
    // 3 краще
    // return nums.concat(nums);
    // 4 рішення для інтерв'ю
    let n = nums.length;
    let ans = new Array(2 * n);

    for (let i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }
    return ans;
};