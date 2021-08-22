//javascript has different search methods
//There are many diff search methods on arrays in Javascript
// indexOf,Includes,Find,FindIndex

// Linear Search
// This function accepts an array and a value
//loop through the array and check if the current array element is equal to the value
// If it is, return the index at which the element is found
//If the value is never found , return -1
//Alg for searching item in an array

function linearSearch(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

linearSearch([34, 56, 1, 2], 1); //output 2(the index of 1 is 2)
linearSearch([34, 56, 1, 2, 3, 45, 687, 56], 56); //output 2, 7

//Binary search is a much faster form of search
//Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a ti me
// Binary search only works on sorted arrays
//Binary search uses the Method of Divide and Conquer

//Binary Search Pseudocode

// This function accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
//While the left pointer comes before the right pointer:Create a pointer in the middle
//if you find the value you want return the index
//if the value is too small, move the left pointer up
//if the value is too large, move the right pointer document//if you nevr find the value, return -1

function binarySearch(arr, elem) {
  var start = arr[0];
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  console.log(start, middle, end);
  while (arr[middle] !== elem) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15);

function binarySearch2(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end == middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch2([2, 5, 6, 9, 13, 15, 28, 30], 15);
