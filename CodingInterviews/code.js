// `Given a string "aaabbbcc", compress it, = "a3b3c2" .
//Given  that output string's length is always smaller than input string`

function checker(str) {
  let counter = {};

  for (let char of str) {
    counter[char] = counter[char] + 1 || 1;
  }
  return Object.entries(counter).toString().replace(/,/g, '');
}

// console.log(checker('aaabbcc'));

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

//A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//Input: digits = "23"
//Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Andrew Ogaga17:54
// Input: digits = ""
// Output: []
// Input: digits = "2"
// Output: ["a","b","c"]

//Given a string s, return the longest palindromic substring in s.
//nput: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Input: s = "cbbd"
// Output: "bb"
// Input: s = "a"
// Output: "a"

function palindrome(str) {
  if (str.length < 1) return null;

  let left = 0;
  let right = 0;
  for (var i = 0; i < str.length; i++) {
    let sub = str.substr(i, str.length);
    // console.log(sub)
    for (let j = sub.length; j > 0; j--) {
      let sub_sub = sub.substr(0, j);
      console.log(sub_sub);
    }
  }
}

console.log(palindrome('babad'));


function MinWindowSubstring(stringArray) {
  let string = stringArray[0];
  let target = stringArray[1];
  let targetDictionary = {};
  let stringDictionary = {};
  for (let i = 0; i < target.length; i++) {
    if (target[i] in targetDictionary) targetDictionary[target[i]] += 1;
    else targetDictionary[target[i]] = 1;
  }
  let leftPointer = 0;
  let rightPointer = 0;
  let subStringLength = 2147483647;
  let lp = 0;
  let rp = 0;
  while (true) {
    if (leftPointer > rightPointer || rightPointer > string.length) break;
    let flag = checkObjectKeysArray(
      Object.keys(targetDictionary),
      Object.keys(stringDictionary),
      targetDictionary,
      stringDictionary
    );
    if (flag === true) {
      if (rightPointer - leftPointer + 1 <= subStringLength) {
        subStringLength = rightPointer - leftPointer + 1;
        lp = leftPointer;
        rp = rightPointer;
      }
      if (string[leftPointer] in stringDictionary)
        stringDictionary[string[leftPointer]] -= 1;
      leftPointer++;
    } else {
      if (string[rightPointer] in stringDictionary)
        stringDictionary[string[rightPointer]] += 1;
      else stringDictionary[string[rightPointer]] = 1;
      rightPointer++;
    }
  }
  return string.substring(lp, rp);
}
function checkObjectKeysArray(
  array1,
  array2,
  targetDictionary,
  stringDictionary
) {
  if (array2.length === 0 || array1.length > array2.length) return false;
  let temp = false;
  for (let i = 0; i < array1.length; i++) {
    temp = false;
    for (let j = 0; j < array2.length; j++) {
      if (
        array1[i] === array2[j] &&
        targetDictionary[array1[i]] <= stringDictionary[array2[j]]
      ) {
        temp = true;
        break;
      }
    }
    if (temp === false) break;
  }
  return temp;
}

console.log(MinWindowSubstring('ahffaksfajeeubsne', 'jefaa'));

//https://www.w3resource.com/javascript-exercises/javascript-function-exercise-27.php