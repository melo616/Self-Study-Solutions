// The function tests if a given string s is a palindrome (the same forwards and backwards).

// Two pointer solution:
// Time complexity: O(n) (linear time) - the number of iterations is proportional to the length of the string.

function checkIfPalindrome(s) {  
    let left = 0;
    let right = s.length-1;
    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
}

let test1 = "racecar"
let test2 = "racedar"

console.log(checkIfPalindrome(test1));
console.log(checkIfPalindrome(test2));
