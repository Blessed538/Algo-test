//write a function that accepts a positive number N. the function should clg a pyramid shape with N levels using # character. Make sure the pyramid has spaces on both the left *and* right hand sides.
//examples
// pyramid(1)
// ' # '
// '###'

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }
  }
}
