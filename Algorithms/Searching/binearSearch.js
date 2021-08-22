function binarySearch(arr, val) {
  var min = 0;
  var last = arr.length - 1;
  var middle = Math.floor((arr[min] + last) / 2);
  while (arr[middle] !== val && min <= last) {
    if (val < arr[middle]) end = arr[middle] - 1;
    else start = middle + 1;
    middle = Math.floor((min + end) / 2);
  }
  if (arr[middle] === val) {
    return middle;
  }
  return -1;
  // return arr[middle] === val ? middle : -1;
}

// binarySearch([2, 4, 5, 6, 3, 7, 9, 5, 3, 2], 19);

//Given an array of integers, return indices of two numbers such that they add up to a specific target. Assume that each input would have exactly one solution, and you may not use the same element twice.

function checker(arr, elem) {
  var sumMax = 0;
  var tempSum = 0;
  if (elem.length > arr.length) {
    return null;
  }
  for (var i = 0; i < elem.length; i++) {
    sumMax = +elem[i];
  }
  tempSum = sumMax;
  for (var j = elem; j, arr.length; j++) {
    tempSum = tempSum - arr[i - j] + arr[i];
    sumMax = Math.max(sumMax, tempSum);
  }
  return sumMax;
}

console.log(checker([2, 7, 11, 15], 22));

//Given an array of numbers and a "sum", return all pairs that add up to a given sum in arrays.

function Array(arr, sum){
  if(arr.length < sum){
    return null
  }
  
}


//QUESTION: Check if two words are anagrams: