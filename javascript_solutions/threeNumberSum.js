//This solution needs work because it doesn't pass all test cases. This is my first solution I was able to come up with for this problem.
var threeSum = function(nums) {
    let sorted = nums.sort((a, b) => a - b);
    let result = [];
    for (let j = 1; j < sorted.length-1; j++) {
        let i = j-1;
        for (let k = j+1; k < sorted.length; k++) {
            let triplet = [];
            if (sorted[i] + sorted[j] + sorted[k] === 0) {
                triplet.push(sorted[i], sorted[j], sorted[k]);
                result.push(triplet);
            }
        }
    }
    return result;
};

test = [-1,0,1,2,-1,-4];
console.log(threeSum(test));