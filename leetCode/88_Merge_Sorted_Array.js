/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//1 low memmory
// var merge = function(nums1, m, nums2, n) {

//     while ( m > 0 && n > 0) {

//         if (nums1[m - 1] > nums2[n - 1]) {

//             nums1[m + n - 1] = nums1[m - 1];
//             m--;
//         } else {

//             nums1[m + n - 1] = nums2[n - 1];
//             n--;
//         }
//     }
//     while (n > 0) {
//          nums1[n - 1] = nums2[n - 1];
//          n--;
//     }
//     m === 0 ? nums1[0] = nums2[0] : nums1[0];
// };


var merge = function(nums1, m, nums2, n) {
    
    while (n >= 0) {
        let full = m + n - 1;
        let first = m - 1;
        let second = n - 1;
        if (nums1[first] > nums2[second] && m > 0) {
            nums1[full] = nums1[first];
            m--;
        } else {
            nums1[full] = nums2[second];
            n--;
        }

    }
};
