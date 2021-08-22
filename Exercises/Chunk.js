//Given an array and chunk size, divide the array into many subarrays where each subarray is of length size.

//Example
//2 refers to the number of element in each chunk
// chunk([1,2,3,4],2) -> [[1,2],[3,4]]

//Algorithm
//create empty array to hold chunks called 'chunked'
//for each element in the 'Unchunked' array
// Retrieve the last element in the 'chunked'
//if last element does not exist, or if its length is equal to chunk size
// push a new chunk into 'chunked' with the current element
// else add the current element into the chunk.

// function chunk(array, size) {
//   var chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }

function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
}
