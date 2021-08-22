// Searching methods includes: includes,find,findIndex,indexOf

function sort(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
