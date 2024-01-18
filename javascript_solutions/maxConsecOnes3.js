// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

function maxConsecOnes3(nums, k) {
    let left = flipCount = ans = 0;
    for (right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            flipCount++;
        }
        while (flipCount > k) {
            if (nums[left] === 0) {
                flipCount--;
            }
            left++;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
};

nums1 = [1,1,1,0,0,0,1,1,1,1,0];
k1 = 2;
console.log(maxConsecOnes3(nums1, k1)); // 6

nums2 = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];
k2 = 3;
console.log(maxConsecOnes3(nums2, k2)); // 10