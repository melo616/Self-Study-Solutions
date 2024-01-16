// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

function maxAvgSubarray(nums, k) {
    let left = curr = 0;
    let ans = -Infinity;
    for (right = 0; right < nums.length; right++) {
        curr += nums[right];
        while (right - left + 1 > k) {
            curr -= nums[left];
            left++;
        }
        if (right - left + 1 === k ) {
            ans = Math.max(ans, curr/k);
        }
    }
    return ans;
};

let nums1 = [1,12,-5,-6,50,3];
let k1 = 4;
console.log(maxAvgSubarray(nums1, k1));

let nums2 = [5]
let k2 = 1;
console.log(maxAvgSubarray(nums2, k2));

let nums3 = [-1]
let k3 = 1;
console.log(maxAvgSubarray(nums3, k3));

let nums4 = [-6662,5432,-8558,-8935,8731,-3083,4115,9931,-4006,-3284,-3024,1714,-2825,-2374,-2750,-959,6516,9356,8040,-2169,-9490,-3068,6299,7823,-9767,5751,-7897,6680,-1293,-3486,-6785,6337,-9158,-4183,6240,-2846,-2588,-5458,-9576,-1501,-908,-5477,7596,-8863,-4088,7922,8231,-4928,7636,-3994,-243,-1327,8425,-3468,-4218,-364,4257,5690,1035,6217,8880,4127,-6299,-1831,2854,-4498,-6983,-677,2216,-1938,3348,4099,3591,9076,942,4571,-4200,7271,-6920,-1886,662,7844,3658,-6562,-2106,-296,-3280,8909,-8352,-9413,3513,1352,-8825]
let k4 = 90
console.log(maxAvgSubarray(nums4, k4));
