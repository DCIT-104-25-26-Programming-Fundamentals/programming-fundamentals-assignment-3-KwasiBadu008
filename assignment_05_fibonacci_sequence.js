// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');
/**
 * PART A: Generates an array containing the first N terms of the Fibonacci sequence.
 * @param {number} n - The number of terms to generate.
 * @returns {number[]} An array containing the first N Fibonacci numbers.
 */
function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib;
}
/**
 * PART B: Checks if a given number is a Fibonacci number.
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is a Fibonacci number, false otherwise.
 */
function isFibonacciNumber(num) {
    if (num < 0) return false;
    if (num === 0) return true;

    let a = 0, b = 1;
    while (b < num) {
        [a, b] = [b, a + b];
    }
    return b === num;
}
function main() {
    console.log('--- PART A: Print the First N Terms ---');
    const n = readlineSync.questionInt('How many terms? ');
    if (n <= 0) {
        console.log('Error: Number of terms must be a positive integer.');
    } else {
        const fibonacciSequence = generateFibonacci(n);
        console.log(`Fibonacci sequence: ${fibonacciSequence.join(' ')}`);
    }
    console.log('\n--- PART B: Check if a Number Belongs to the Sequence ---');
    const numToCheck = readlineSync.questionInt('Enter a number to check: ');
    if (isFibonacciNumber(numToCheck)) {
        console.log(`${numToCheck} is a Fibonacci number.`);
    } else {
        console.log(`${numToCheck} is NOT a Fibonacci number.`);
    }
}
main();
