// bubble sort compare the array and swap the largest for the smallest.

// Before we sort, we must swap!
// ES5

function bubbleSort(arr) {
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  for (let i = arr.length; i > 0; i--) {
    // while i has 4 index,  j is i minus one which is 3
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}
// console.log(bubbleSort([467980098]));
function swap(arr, idx1, idx2) {
  var temp = arr[idex1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
// const swap = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };

// Algorithms
// Start looping from with a variable called i the end of the array towards the beginning.
// Start an inner loop with a variable called j from the beginning until i - 1
// if arr[j] is greater than arr[j + 1], swap those two values!
// Return the sorted array.

// function bubbleSort(arr) {
//   var noSwap;
//   for (var i = arr.length; i > 0; i--) {
//     noSwap = true;
//     for (var j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // swap
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         noSwap = false;
//       }
//     }
//     if (noSwap) break;
//   }
//   return arr;
// }

function run(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; i < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];

        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}




