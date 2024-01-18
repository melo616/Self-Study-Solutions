//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

//Trivial solution: 
//Time: O(n log n) - due to sorting function; Space: O(1)
// function missingNumber(nums) {
//     nums.sort((a, b) => a - b);
//     for (i = 0; i < nums.length; i++) {
//         if (nums[i] !== i) {
//             return i;
//         }
//     }
//     return i;
// }

// Hash solution 1: Time complexity O(n)
function missingNumber(nums) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = true;
    }
    console.log(hash)
    for (let j = 0; j <= nums.length; j++) {
        if (!hash[j]) {
            return j;
        }
    }
};

nums1 = [3,0,1] // 2
console.log(missingNumber(nums1));

nums2 = [0,1] // 2
console.log(missingNumber(nums2));
