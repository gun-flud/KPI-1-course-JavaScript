/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // O(n^2)

    val // something we want to delete
    nums // values we want to filter
    let i = 0;

    for (i; i < nums.length; i++) { 
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }  
    }
    return i;
};
console.log(removeElement([0,1,2,2,3,0,4,2], 2));