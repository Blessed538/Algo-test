// Calculate the 40th number of the fibonacci sequence
// Count the number of different ways to move through a 6*9 grid
// Given a set of coins, how can we make 27 cents in the least number of coins?
//Given a set of substring, what are the possible ways to construct the string 'potentpot'

// write a function `fib(n)` that takes in a number as an argument. The function should return the n-th number of the fibonacci sequence
// The 1st and 2nd number of the sequenecr is 1.
// To generate the next of the sequence, we sum the previous two
//n:     1,2,3,4,5,6,7, 8, 9
//fib(n):1,1,2,3,5,8,13,21,34

// Recursion
function Recurse(n) {
  if (n === 1) return 0;
  return n * Recurse(n - 1);
}

// Write a function `sum` that takes an array of numbers as an input. The function should return the total sum of all elements.

function sum(array) {
  if (array.length === 0) return 0;
  const rest = array.slice(1);

  return array[0] + sum(rest);
}

// console.log(sum([5, 7, 1, -2]));

function check(sum) {
  let result = 0;

  for (var i = 0; i < sum.length; i++) {
    result += sum[i];
  }
  return result;
}

// console.log(check([5, 7, 1, -2]));
function slowSum(array) {
  if (array.length === 0) return 0;

  const rest = array.slice(1);
  return array[0] + slowSum(rest);
}

function fastSum(array) {
  return _fastSum(array, 0);
}

function _fastSum(array, start) {
  if (start === array.length) return 0;

  return array[start] + _fastSum(array, start + 1);
}

function fib(n) {
  if (n === 1 || n === 2) return 1;

  return fib(n - 1) + fib(n - 2);
}
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(9));

function duplicate(str) {
  // const set = new Set();
  return new Set([...str]);
}


