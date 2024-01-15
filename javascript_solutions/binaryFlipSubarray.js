// You are given a binary string s (a string containing only "0" and "1"). You may choose up to one "0" and flip it to a "1". What is the length of the longest substring achievable that contains only "1"?

// Use sliding window approach
// Establish variable curr = 0 and increment when right pointer = 0
// Break loop if curr > 1
// Ans will track the current longest valid subarray
// Left will increment until subarray becomes valid again

function binaryFlipSubarray(s) {
    let left = curr = ans = 0
    for (right = 0; right < s.length; right++) {
        if (s[right] === "0" ) {
            curr += 1;
        }
        while (curr > 1) {
            if (s[left] === "0") {
                curr -= 1;
            }
            left++;
        }
    ans = Math.max(ans, right - left + 1);
    }
    return ans;
};

test1 = "1101100111" // 5
console.log(binaryFlipSubarray(test1))

// Time complexity: O(n)
// Space complexity: O(1)