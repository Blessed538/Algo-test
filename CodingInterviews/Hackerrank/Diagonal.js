/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 * 1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = 1+5+9 . The right to left diagonal =3+5+9 . Their absolute difference is 2.
 */

function diagonalDiff(matrix) {
	let length = 	matrix.length;
	let sum1 = 0;
	let sum2 = 0;

	for (var i = 0; i < matrix.length; i++) {
		sum1 += matrix[i][i];
		sum2 += matrix[length - 1 - i][i];
	}
	return Math.abs(sum1 - sum2);
}

console.log(diagonalDiff([[1 ,2, 3], [4, 5, 6],[9, 8, 9] ]))
