//Recursion function stop running when the parameter meets the requirements of the  base case

function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

//print 3
//countDown(2)
//print 2
//countDown(1)
// print 1
// countDown(0)
//"All done"

function sumRange(num) {
  //base case
  if (num === 1) return 1;
  //recursive call
  return num + sumRange(num - 1);
}
sumRange(4);
//return 4
//return 3
//return 2
//return 1
sumRange(3);
//return 3
//return 2
// return 1

function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

factorial(3);
//3*2*1

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

factorial(5);
//return 20
//return 60
//return 120
//return 120

//Where things go wrong
//No base case
// Forgetting to return or returning the wrong thing
//Stack Overflow

//Recursion_Helper_Method
function collectionOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    //base case
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      //it will add every odd number to the array
      //using the first number in the array
      //
      result.push(helperInput[0]);
    }
    // this will slice the number the number that is added to the array out.
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

collectionOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//the helper function returns without the first numbers

//Pure_Recursion
// When using Pure Recursionm Tips for arrays,use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them.

function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectionOddValues(Arr.slice(1)));
  return newArr;
}

collectionOddValues([1, 2, 3, 4, 5]);
