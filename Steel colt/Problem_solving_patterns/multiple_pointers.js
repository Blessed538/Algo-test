// Multiple pointers
// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
// Very efficient for solving problems with minimal space complexity as well
[-4,-3,-2,-1,0,1,2,5]
""

//Exercise 
//write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is O.Return an array that includes both values that sum to zero or undefined if a pair does not exist


function sumZero(arr){
for(let i =0; i < arr.length; i++){
  for(let j = i+1; j < arr.length;j++){
    if(arr[i] + arr[j] === 0){
      return [arr[i], arr[j]]
    }
  }
}
} 

sumZero([-4,-3,-2,-1,0,1,2,5])

//Refactoring
function sumZero(arr){
  let left = 0;
  let right = arr.length -1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]];
    } else if (sum > 0){
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined