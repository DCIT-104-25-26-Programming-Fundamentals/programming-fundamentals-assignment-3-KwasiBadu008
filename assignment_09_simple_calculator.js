// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');
/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
    return a + b;
}
/**
 * Subtracts the second number from the first.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 */
function subtract(a, b) {
    return a - b;
}
/**
 * Multiplies two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 */
function multiply(a, b) {
    return a * b;
}
/**
 * Divides the first number by the second.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The result of the division.
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}
/**
 * Calculates the remainder of dividing the first number by the second.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The remainder of the division.
 */
function modulus(a, b) {
    return a % b;
}
/**
 * Raises the first number to the power of the second.
 * @param {number} a - The base.
 * @param {number} b - The exponent.
 * @returns {number} The result of the exponentiation.
 */
function exponentiate(a, b) {
    return a ** b;
}
/**
 * Displays the calculator menu and handles user input.
 */
function mainMenu() {
    console.log('\n============================');
    console.log('     SIMPLE CALCULATOR');
    console.log('============================');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    console.log('5. Modulus');
    console.log('6. Exponentiation');
    console.log('7. Quit');
}
/**
 * Helper function to get two numbers from the user.
 * @returns {number[]} An array containing the two numbers.
 */
function getTwoNumbers() {
    const num1 = readlineSync.questionFloat('Enter first number: ');
    const num2 = readlineSync.questionFloat('Enter second number: ');
    return [num1, num2];
}
/**
 * Main application loop that runs the calculator until the user chooses to quit.
 */
function main() {
    let running = true;
    while (running) {
        mainMenu();
        const choice = readlineSync.questionInt('Select an operation (1-7): ');
        if (choice < 1 || choice > 7) {
            console.log('Goodbye!');
            running = false;
            continue;
        }

        switch (choice) {
            case 1: // Addition
                const [addNum1, addNum2] = getTwoNumbers();
                let result = add(addNum1, addNum2);
                console.log(`Result: ${addNum1} + ${addNum2} = ${result.toFixed(2)}`);
                break;
            case 2: // Subtraction
                const [subNum1, subNum2] = getTwoNumbers();
                result = subtract(subNum1, subNum2);
                console.log(`Result: ${subNum1} - ${subNum2} = ${result.toFixed(2)}`);
                break;
            case 3: // Multiplication
                const [mulNum1, mulNum2] = getTwoNumbers();
                result = multiply(mulNum1, mulNum2);
                console.log(`Result: ${mulNum1} * ${mulNum2} = ${result.toFixed(2)}`);
                break;
            case 4: // Division
                const [divNum1, divNum2] = getTwoNumbers();
                try {
                    result = divide(divNum1, divNum2);
                    console.log(`Result: ${divNum1} / ${divNum2} = ${result.toFixed(2)}`);
                } catch (error) {
                    console.log(error.message);
                }
                break;
            case 5: // Modulus
                const [modNum1, modNum2] = getTwoNumbers();
                result = modulus(modNum1, modNum2);
                console.log(`Result: ${modNum1} % ${modNum2} = ${result.toFixed(2)}`);
                break;
            case 6: // Exponentiation
                const [expNum1, expNum2] = getTwoNumbers();
                result = exponentiate(expNum1, expNum2);
                console.log(`Result: ${expNum1} ^ ${expNum2} = ${result.toFixed(2)}`);
                break;
        }
    }
}
main();
