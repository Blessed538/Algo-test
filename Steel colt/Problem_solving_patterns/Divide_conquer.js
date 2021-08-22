// Given a sorted arrays of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is nit found, return -1

//linear search
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
search([1, 2, 3, 4, 5, 6], 4); // 3
search([1, 2, 3, 4, 5, 6], 6); // 5
search([1, 2, 3, 4, 5, 6], 11); //-1

// create a var that takes the first and last letter of the array.
// while the first letter is less than or equal to last letter in the array
// create a middle var in the arr
// if the middle variable is less than the val
// the first number should be equal to middle var plus 1

function binarySearch(arr, val) {
  var min = 0;
  var max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currrentElement = arr[middle];

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
