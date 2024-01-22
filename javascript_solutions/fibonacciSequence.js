function fibonacciSequence(n) {
    // base cases
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    // recursive cases
    return fibonacciSequence(n-1) + fibonacciSequence(n-2);
}

console.log(fibonacciSequence(7))

//recursive problems usually have 2 cases: base case and recursive case.
//in this there are 2 base cases.