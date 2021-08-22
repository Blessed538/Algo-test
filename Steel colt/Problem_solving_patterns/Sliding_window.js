// This pattern involves creating a window which can either be an array or number from one position to another
// Depending on a certain condition, the window either increases or closes(and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.

//Exercise
// write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
// second loop are most used for comparisons.

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

//Refactoring
// algorithm
// check and return null if the array length is less than num
// loop over the array starting with the num index.
// assign the loop index of the array to maxSum
// assign the maxSum to the tempSum variable
// loop over the arr
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  // this function stores the first three numbers of the arr and assign them to maxSum.
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  console.log(tepmSum);
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 2&8 =10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 2+5+2+8 = 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
maxSubarraySum([], 4); //null
