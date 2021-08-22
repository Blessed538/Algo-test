//write a function that accepts a positive number N.
// The function should clg a step shape with N levels using the # character. Make sure the step has spaces on the right hand side!
//examples
//steps(2)
// '# '
// '##'

function step1(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
  }
}
//using recursion

function steps(n, row = 0, stair = '3') {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    return steps(n, row + 1);
  }
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += '';
  }
  steps(n, row, stair);
}
