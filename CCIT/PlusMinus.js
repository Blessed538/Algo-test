/**
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
 * exmaple = [4,2,-1,-2,0]
 */

function PlusMinus(arr){
  let length = arr.length;
  let count = 0;
  let count2 = 0;
  let zero = 0;
  for (let i = 0; i < arr.length;i++){
    if(arr[i] > 0){
      count++
    } else if(arr[i] < 0){
      count2++
    } else {
     zero++
    }
  }
  
  console.log((count /length).toFixed(6))
  console.log((count2 /length).toFixed(6))
  console.log((zero /length).toFixed(6))
  
  // console.log(count,count2)
}

console.log(PlusMinus([4,2,-1,-1,0]))