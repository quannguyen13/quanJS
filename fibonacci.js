// 3. Print the Fibonacci Sequence Using Recursion
// Given a number, n, print the first nth element of the Fibonacci sequence. If n = 5, print the fifth
// Fibonacci number.

function fibonacci(n) { 
    if (n <= 2) {
        return 1
    }; 
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var n = 13
console.log(fibonacci(n))