//This solution needs work because it doesn't pass all test cases. This is my first solution I was able to come up with for this problem. This is because it doesn't evaluate all possible combinations.
//Time complexity for this solution is )(n^2) due to the nested for loops.
//Space complexity is O(n)
// var threeSum = function(nums) {
//     nums.sort((a, b) => a - b);
//     let result = [];
//     for (let j = 1; j < nums.length-1; j++) {
//         let i = j-1;
//         for (let k = j+1; k < nums.length; k++) {
//             let triplet = [];
//             if (nums[i] + nums[j] + nums[k] === 0) {
//                 triplet.push(nums[i], nums[j], nums[k]);
//                 result.push(triplet);
//             }
//         }
//     }
//     return result;
// };

// test = [-1,0,1,2,-1,-4];
// console.log(threeSum(test));


//This is a better solution but encountering an error with duplicates.
function threeSum(nums) {
    nums.sort((a, b) => a - b);

    let triplets = [];

    for (let i = 0; i < nums.length - 2; i++) {
        let leftPointer = i + 1;
        let rightPointer = nums.length - 1;

        while (leftPointer < rightPointer) {
            let sum = nums[i] + nums[leftPointer] + nums[rightPointer];

            if (sum < 0) {
                //move left pointer to the right for greater sum
                leftPointer++;
            } else if (sum > 0) {
                //move right pointer to left for lesser sum
                rightPointer--;
            } else {
                let temp = [];
                temp.push(nums[i], nums[leftPointer], nums[rightPointer]);
                triplets.push(temp);
                leftPointer++;
            }
        }
    }
    return triplets;
};

threeSums([12, 3, 1, 2, -6, 5, -8, 6], 0);