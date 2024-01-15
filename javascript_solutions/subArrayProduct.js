// Given an array of positive integers nums and an integer k, return the number of subarrays where the product of all the elements in the subarray is strictly less than k.

function subArrayProduct(nums, k) {
    if (k <= 1) {
        return 0;
    }
    let left = ans = 0;
    let curr = 1;
    for (right = 0; right < nums.length; right++) {
        curr *= nums[right];
        while (curr >= k) {
            curr /= nums[left];
            left++;
        }
        ans += right - left + 1;
    }
    return ans;
};

nums = [10, 5, 2, 6]
k = 100

console.log(subArrayProduct(nums, k)); // 8