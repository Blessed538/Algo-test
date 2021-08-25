/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 * sort the array
 * loop over the array and concetenate it to the sum value.
 * get the min  and max and substract it from the sum
 */

function minMax(arr){

  let min = 0, max = 0, sum = 0;
		min = arr[0];
		max = min;
		sum = min;
    
		for (let i = 1; i < arr.length; i++) {
			sum += arr[i];
    // console.log(sum)
			if (arr[i] < min) {
				min = arr[i];
			}
			if (arr[i] > max) {
				max = arr[i];
       
			}
		}
    return (sum - min)  + " " + (sum -max)
}


console.log(minMax([1,3,5,7,9]))