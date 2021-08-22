/**
 * write a function that takes in integers and returns the numbers of bribe in the set.
 * [2,3,1,5,4] return 3 bribes
 * strArr = ["[1, 2, 3]", "[1, 2, 3, 4]"]

Create a function that takes in a parameter of strArr that is an array containing
two string arrays, the function should add the numbers within the parameter ans return 
the answer joined using hyphens "-".

e.g function addStringArrays (strArr) => 2-4-6-4

ensure the following test cases pass.

function addStringArrays (["[1, 2, 3]", "[1, 2, 3]"]) => 2-4-6

function addStringArrays (["[1, 2]", "[1, 2, 3, 4]"]) => 2-4-3-4
 */

//alg
/**
 * convert the both parametrs into string into an array
 * make a for loop for the first array
 * use the first and add to the second array value and return the values
 * @param {*} arr 
 */

function strArr(arr) {
	const firstArr = arr[0];
  const secondArr = arr[1];
  console.log(secondArr)

  for(var i = 0; i < firstArr.length;i++){
    if(firstArr[i].includes(secondArr) &&  ){

    }
  }
}

console.log(strArr(['[1, 2]', '[1, 2, 3, 4]' ]));
