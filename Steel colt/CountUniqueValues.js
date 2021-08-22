// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
// algorithms
// create an empty object
// loop over the array
// if an item appears twice increment it by one

function countUniqueValues(arr) {
  var arr1 = arr.sort();
  // var array = [];
  var counter = {};
  for (let i = 0; i < arr1.length; i++) {
    let letter = arr[i];
    counter[letter] = (counter[letter] || 0) + 1;
  }

  return counter.length;
}
