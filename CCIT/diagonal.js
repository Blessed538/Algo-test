/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  arr is shown below:

1 2 3
4 5 6
9 8 9 
 */

function diagonalDifference(arr) {
  // Write your code here
  let length = arr.length;
  
  let diag1 = 0;
  let diag2 = 0;
  for (var i = 0; i < arr.length;i++){
      diag1 += arr[i][i];
      console.log(diag1)
      diag2 += arr[length -1 - i][i]
      console.log(diag2)
  }
  return Math.abs(diag2 -  diag1)
}

console.log(diagonalDifference([[1, 2, 3],[4, 5, 6],[9, 8, 9]]))