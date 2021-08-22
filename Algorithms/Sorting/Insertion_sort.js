// Alg
// Start by picking the second element in the array.
// Now compare the second element with the one before it and swap if necessary.
// continue to the next element and if it is in the incorrect order, iterae theough the sorted portion (i.e the left side) to place the element in the correct place.

function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4, 7, 5]);
