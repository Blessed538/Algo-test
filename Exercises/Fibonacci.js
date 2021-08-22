// Print out the n-th entry in the fibonacci series. The fibonacci series is an ordeering of numbers where each number is the sum of the proceeding two.
// example [0,1,1,2,3,5,8,13,21]

// function fib(n) {
//   const result = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];

//     result.push(a + b);
//   }
//   return result[n];
// }

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
