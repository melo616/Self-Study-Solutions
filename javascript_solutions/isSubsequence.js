// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

//A subsequence of a string is a sequence of characters that can be obtained by deleting some (or none) of the characters from the original string, while maintaining the relative order of the remaining characters. For example, "ace" is a subsequence of "abcde" while "aec" is not.

//improved version - more concise
function isSubseq(s, t) {
    let i = 0, j= 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
}

//is s subsequence of t??
function isSubsequence(s, t) {
    let i = 0, j = 0;
    while (i < s.length && j < t.length) {
        if (t[j] !== s[i]) {
            j++;
        } else {
            j++;
            i++;
        }
    }
    if (i === s.length) {
        while (j < t.length) {
            if (s[i] === t[j]) {
                return true;
            } else {
                j++;
            }
        }
    }
    if (j === t.length) {
        if (t[j] === s[i]) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}

sub1 = "ace";
sub2 = "aec";
test = "abcde";

console.log(isSubsequence(sub1, test)); //true
console.log(isSubsequence(sub2, test)); //false

console.log(isSubseq(sub1, test)); //true
console.log(isSubseq(sub2, test)); //false