// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.


//Initial solution
function ransomNoteFunction(ransomNote, magazine) {
    let lettersHash = {};
    for (i=0; i<magazine.length; i++) {
        if (magazine[i] in lettersHash) {
            lettersHash[magazine[i]] += 1;
        } else {
            lettersHash[magazine[i]] = 1;
        }
    }
    for (i=0; i<ransomNote.length; i++) {
        console.log(ransomNote[i])
        if (lettersHash[ransomNote[i]] > 0) {
            lettersHash[ransomNote[i]] --;
        } else {
            return false;
        }
    }
    return true;
}

let ransomNote1 = "aa" 
let magazine1 = "ab"
console.log(ransomNoteFunction(ransomNote1, magazine1));