// write a function called same, which accepts two arrays. The functiom should return true if every value in the array has it's corresponding value sqaured in the second array. The frequency of value must be the same.
// frequency counter uses nested loops.
// algorithm
// if the length of arr1 is not equal to the length of arr2 return false.
// loop over arr1
// assign arr2.indexOf arr1 index **2
// if

// individual loops are better than nested loops.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frqCounter1 = {};
  const frqCounter2 = {};
  for (let val of arr1) {
    frqCounter1[val] = (frqCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frqCounter2[val] = (frqCounter2[val] || 0) + 1;
  }
  for (let key in frqCounter1) {
    if (!(key ** 2 in frqCounter2)) {
      return false;
    }
    if (frqCounter2[key ** 2] !== frqCounter1[key]) {
      return false;
    }
  }
  return true;
}

// anagrams

function anagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    // this letter takes in each character of the first string
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // if letter doesn't exists return false, otherwise decrease set to -1
    if (!lookup[letter]) {
      return false;
    } else {
      return (lookup[letter] -= 1);
    }
  }
  return true;
}

// create an empty object
// loop over the arg
// append the loop item into an object and add 1 to it if it already exists before or assign one to the index.
// if the iterated item exist add
