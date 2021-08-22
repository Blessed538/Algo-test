// this alg sort the smaller item in the array.

// Alg
// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number .
// If a smaller number is found, designate that smaller number to be new "minimum" and continue until the end of the array.
// If the "minimum is not the value(index)" you initially began with , swap the two values.
// Repeat this with the next eleement until the array is sorted.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var lowest = i;

    for (var j = i + 1; j < arr.length; j++) {
      // console.log(arr[j], arr[lowest]);
      if (arr[j] < arr[lowest]) {
        lowest = j;
        console.log(j);
      }
    }
    if (i !== lowest) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}
console.log(selectionSort([10, 12, 8, 22, 16, 445, 35, 37563, 17]));
