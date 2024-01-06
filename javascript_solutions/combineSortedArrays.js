// Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.

//Time complexity: O(n)
//Space complexity: O(1)

function combineSortedArrays(arr1, arr2) {
    let pointer1 = 0;
    let pointer2 = 0;
    let newArr = [];
    while ( pointer1 < arr1.length && pointer2 < arr2.length ) {
        if (arr1[pointer1] < arr2[pointer2]) {
            newArr.push(arr1[pointer1]);
            pointer1++;
        } else if (arr1[pointer1] > arr2[pointer2]) {
            newArr.push(arr2[pointer2]);
            pointer2++;
        } else {
            newArr.push(arr1[pointer1]);
            newArr.push(arr2[pointer2]);
            pointer1++;
            pointer2++;
        }
    }
    while (pointer1 < arr1.length) {
        newArr.push(arr1[pointer1]);
        pointer1++;
    }
    while (pointer2 < arr2.length) {
        newArr.push(arr2[pointer2]);
        pointer2++;
    }

    return newArr;
}

test1 = [1, 2, 3, 7, 8]
test2 = [3, 4, 5, 9]
test3 = [2, 6, 9, 13]
test4 = [1, 5, 7, 9]

console.log(combineSortedArrays(test1, test2)) // [1, 2, 3, 3, 4, 5, 8, 9]
console.log(combineSortedArrays(test3, test4)) // [1, 2, 5, 6, 7, 9, 9, 13]