// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

function maxAvgSubarray(nums, k) {
    let left = curr = ans = 0;
    for (right = 0; right < nums.length; right++) {
        curr += nums[right];
        while (right - left + 1 > k) {
            curr -= nums[left];
            left++;
        }
        ans = Math.max(ans, curr/k);
    }
    return ans;
};

let nums1 = [1,12,-5,-6,50,3];
let k1 = 4;
console.log(maxAvgSubarray(nums1, k1));

let nums2 = [5]
let k2 = 1;
console.log(maxAvgSubarray(nums2, k2));