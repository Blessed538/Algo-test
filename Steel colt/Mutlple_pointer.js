// write a function called sumZero which accepts a sorted arrays of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; i++) {
//       if (arr[1] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

// algorithm
// create a variable that holds the first and last item of the arr
//while left is less than right add both left and right
// if sum = 0 return arr[left] and arr[right]
// else if sum > 0 right--
// else left++

function sumZero(arr) {
  const first = arr[0];
  const last = arr.length - 1;
  while (first < last) {
    let sum = arr[first] + arr[last];
    if (sum === 0) {
      return [arr[first], arr[last]];
    } else if (sum > 0) {
      last--;
    } else {
      first++;
    }
  }
}

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function Unique(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    return i + 1;
  }
}
