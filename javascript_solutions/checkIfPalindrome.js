function checkIfPalindrome(sample) {  
    let left = 0;
    let right = sample.length-1;
    while (left <= right) {
        if (sample[left] === sample[right]) {
            left++;
            right--;
        } else {
            return false
        }
    }
    return true
}

let test1 = "racecar"
let test2 = "racedar"

console.log(checkIfPalindrome(test1));
console.log(checkIfPalindrome(test2));
