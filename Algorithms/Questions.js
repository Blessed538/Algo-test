//QUESTION: Check if two words are anagrams:
function anagrams(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }
  const checker = {};
  for (let char of strA) {
    checker[char] = checker[char] || 0 + 1;
  }
  for (let cap of strB) {
    if (!checker[cap]) {
      return false;
    } else {
      checker[cap] -= 1;
    }
  }
  return true;
}

// console.log(anagrams('mans', 'namr'));
//Given an array of numbers and a "sum", return all pairs that add up to a given sum in arrays.
function sumPairs(arr, sum) {
  if (arr.length > sum) {
    return false;
  }
  var sumTotal;
  var min = 0;
  var max = arr.length - 1;
  while (arr[min] < max) {
    sumTotal = arr[min] + max;
    if (sumTotal === sum) {
      return arr[min], arr[max];
    } else if (sumTotal > sum) {
      max--;
    } else {
      min++;
    }
  }
  return sumTotal;
}

console.log(sumPairs([1, 2, 4, 5, 7, 8, 6], 12));
//Given an array of integers, return indices of two numbers such that they add up to a specific target. Assume that each input would have exactly one solution, and you may not use the same element twice.

//How to find the maximum occurring character in a given String?

//Algorithm
// create a variable to hold the object
// loop over the arr
// [A:2,b:4,c:6,e:2,f:5]

//How to remove characters from the first String which are present in the second String?
// solution
// loop over the first array
// create a variable that check for the index of the second arr in the first arr
// if there is no index return false
// else splice one number from the index checker


function RemoveCharacters(strA, strB) {
  let countA = {};
  let countB = {};
  for (let char of strA) {
    countA[char] = countA[char] || 0 + 1;
  }

  for (let char of strB) {
    countB[char] = countB[char] || 0 + 1;
  }
}

function checker(first, second){
  let count = {};
  for(var i = 0; i < first.length; i++){
    let currentElement = first[i];
    let check = second.indexOf(currentElement)
    if(check == -1){
   return false
    } else {
      second.splice(check, 1)
    }
  }
}
