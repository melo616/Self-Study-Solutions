//Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.
// Time complexity is O(n).
// Space complexity: O(1).

function reverseString(s) {
    let i = 0, j = s.length-1;
    let temp = "";
    while (i < j) {
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
    return s;
}

let test1 = ["h","e","l","l","o"] // ["o","l","l","e","h"]
let test2 = ["H","a","n","n","a","h"] // ["h","a","n","n","a","H"]

console.log(reverseString(test1));
console.log(reverseString(test2));