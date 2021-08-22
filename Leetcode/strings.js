//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// function getTarget(arr, target){
//   for(var i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < arr.length; j++){
//       if(arr[j] + arr[i] === target){
//         return [j,i]
//       }
//     }
//   }
// }

// console.log(getTarget([2,7,11,15],9));

function getTarget(arr, target){
  // for(var i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[j] + arr[j + 1] === target){
        return [j,j +1]
      }
    }
  // }
}

// console.log(getTarget([2,7,11,15],9));

function string(s){
  let start = 0;
  let end = 0;
  let maxLength = 0;
  var hash = new Set();
  while(end < s.length){
    if(!hash.has(s[end])){
      hash.add(s[end])
      end++
      maxLength = Math.max(maxLength,hash.size)
    } else {
      hash.delete(s[start]);
      start++
    }
  }
  return maxLength;
}


function find_maximum_sum(a, k) {
  const n = a.length;
  // Current sum - sum of the current window
  let current_sum = 0;
  // Maximum sum - maximum sum of k consecutive elements in an array
  let maximum_sum = 0;
  // Find the sum of first k elements
  for (let i = 0; i < k; i++) {
      current_sum += a[i];
  }
  // At this point, maximum and current sum will be same
  maximum_sum = current_sum;
  // Loop for the remaining elements by sliding the window
  for (let i = k; i < n; i++) {
      // Discard the left most element
      current_sum -= a[i - k];
      // Included the current element
      current_sum += a[i];
      if (maximum_sum < current_sum) {
          maximum_sum = current_sum;
      }
  }
  return maximum_sum;
}

// console.log(string('pwwkew'));

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

//The overall run time complexity should be O(log (m+n)).

function median(num1,num2){
  let arr =  num1.concat(num2);
  let len =  arr.length;
  const mid = Math.ceil(len / 2);
  const median =
  len % 2 == 0 ? (arr[mid] + arr[mid - 1]) / 2 : arr[mid - 1];
  return median;

}

console.log(median([1,2],[3,4]));