// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length-1;
    let result = new Array(nums.length);
    let indexCounter = nums.length-1;
    while (left<=right) {
        if (nums[left]**2 > nums[right]**2) {
            result[indexCounter] = nums[left]**2;
            left++;
        } else {
            result[indexCounter] = nums[right]**2;
            right--;
        }
        indexCounter--;
    }
    return result;
};

test1 = [-4,-1,0,3,10];

console.log(sortedSquares(test1)); //[0,1,9,16,100]