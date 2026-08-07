// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');
/**
 * prints a matrix in a neat, aligned grid format.
 * @param {number[][]} matrix - The matrix to print.
 */
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(' '));
  }
}
/**
 * PART A — Transposes a matrix (rows become columns, columns become rows).
 * @param {number[][]} matrix - The original matrix.
 * @returns {number[][]} The transposed matrix.
 */
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed = [];
  for (let j = 0; j < cols; j++) {
    transposed[j] = [];
    for (let i = 0; i < rows; i++) {
      transposed[j][i] = matrix[i][j];
    }
  }
  return transposed;
}
/**
 * PART B — Adds two matrices of the same size.
 * @param {number[][]} matrixA - The first matrix.
 * @param {number[][]} matrixB - The second matrix.
 */
function addMatrices(matrixA, matrixB) {
  const rows = matrixA.length;
  const cols = matrixA[0].length;
  const sumMatrix = [];
  for (let i = 0; i < rows; i++) {
    sumMatrix[i] = [];
    for (let j = 0; j < cols; j++) {
      sumMatrix[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }
  return sumMatrix;
}
/**
 * PART C — Multiplies two matrices (A x B).
 * @param {number[][]} matrixA - The first matrix (M x N).
 * @param {number[][]} matrixB - The second matrix (N x P).
 * @returns {number[][]} The product matrix (M x P).
 */
function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;
  const productMatrix = [];
  for (let i = 0; i < rowsA; i++) {
    productMatrix[i] = [];
    for (let j = 0; j < colsB; j++) {
      productMatrix[i][j] = 0;
      for (let k = 0; k < colsA; k++) {
        productMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }
  return productMatrix;
}
/** 
 * Main application runner demonstrating Part A, Part B, and Part C of matrix operations.
 */
function main() {
    console.log('--- PART A: Transpose a Matrix ---');
    const rowsA = readlineSync.questionInt('Enter number of rows for matrix A: ');
    const colsA = readlineSync.questionInt('Enter number of columns for matrix A: ');
    
    if (rowsA <= 0 || colsA <= 0) {
        console.log('Error: Number of rows and columns must be positive integers.');
        return;
    }
    const matrixA = readMatrix(rowsA, colsA, 'A');
    console.log('Original Matrix A:');
    printMatrix(matrixA);
    const transposedA = transposeMatrix(matrixA);
    console.log('Transposed Matrix A:');
    printMatrix(transposedA);

    console.log('\n--- PART B: Add Two Matrices ---');
    console.log('Entering matrix B (same size as A):');
    const matrixB = readMatrix(rowsA, colsA, 'B');
    console.log('Matrix A:');
    printMatrix(matrixA);
    console.log('Matrix B:');
    printMatrix(matrixB);
    const sumMatrix = addMatrices(matrixA, matrixB);
    console.log('Sum of Matrix A and B:');
    printMatrix(sumMatrix);                 

    console.log('\n--- PART C: Multiply Two Matrices ---');
    console.log('Entering matrix C (size N x P) to multiply with A (size M x N):');
    const rowsC = colsA;
    if (rowsC <= 0) {
        console.log('Error: Number of rows for matrix C must be a positive integer.');
        return;
    }
    const matrixC = readMatrix(rowsC, readlineSync.questionInt('Enter number of columns for matrix C: '), 'C');
    const productMatrix = multiplyMatrices(matrixA, matrixC);
    console.log('Product of Matrix A and C:');
    printMatrix(productMatrix);
}
main();