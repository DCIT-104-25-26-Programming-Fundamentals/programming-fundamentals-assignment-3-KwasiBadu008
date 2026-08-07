// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// Write a JavaScript program that generates multiplication tables using loops
// and functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_06_multiplication_table.js
//
// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Print the multiplication table for that number from 1 to 12.
//
// Expected output (if user enters 5):
//
//   Multiplication Table for 5:
//   5  x  1  =  5
//   5  x  2  =  10
//   5  x  3  =  15
//   ...
//   5  x  12 =  60
//
// -----------------------------------------------------------------------------
// PART B — Bonus: Tables from 1 to N
// -----------------------------------------------------------------------------
// - Ask the user to enter a number N.
// - Print the full multiplication table for every number from 1 to N.
// - Add a separator line (e.g. "---") between each table.
//
// Expected output (if user enters 3):
//
//   Multiplication Table for 1:
//   1  x  1  =  1
//   ...
//   1  x  12 =  12
//   ---------------------------
//   Multiplication Table for 2:
//   2  x  1  =  2
//   ...
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - N must be a positive integer. If the user enters an invalid value,
//   print an error message and stop.
// - Each part must be in its own function (see scaffold below).
// - Complete Part A before attempting Part B.

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');
/**
 * PART A: Generates and prints the multiplication table for a given number.
 * @param {number} num - The number for which to generate the multiplication table.
 */
function printMultiplicationTable(num) {
  console.log(`Multiplication Table for ${num}:`);
  for (let i = 1; i <= 12; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
/**
 * PART B: Generates and prints multiplication tables for all numbers from 1 to N.
 */
function printMultiplicationTablesUpToN(n) {
  for (let num = 1; num <= n; num++) {
    printMultiplicationTable(num);
    if (num < n) {
      console.log('---------------------------');
    }
  }
}
function main() {
    console.log("Part A: Single Multiplication Table");
    const singleNum = readlineSync.questionInt('Enter a number for its multiplication table: ');

    if (singleNum <= 0) {
        console.log('Error: Please enter a positive integer.');
        return;
    }
    printMultiplicationTable(singleNum);

    console.log("\nPart B: Multiplication Tables from 1 to N");
    const n = readlineSync.questionInt('Enter a positive integer N to print multiplication tables from 1 to N: ');

    if (n <= 0) {
        console.log('Error: Please enter a positive integer.');
        return;
    }
    printMultiplicationTablesUpToN(n);
}
main();