//extracting keys from an object

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

Object.keys(obj);

//regExp

const word = 'HI THERE!!!';
word.replace(/['^\w]/g, '').toLowerCase();
//output:hithere

//Anagrams
//Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters in the same quantity. Only consider character, not spaces or punctuation. Consider capital letters to be the same as lower case
// examples anagrams('rail safety', 'fairy tales') --> true
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }

//   }
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// Frequency Counter
function anagrams(stringA, stringB) {
  return helperfunc(stringA) === helperfunc(stringB);
}

function helperfunc(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagram2(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < strA.length; i++) {
    letter = strA[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < strB.length; i++) {
    const letter = strB[i];
    if (!lookup[letter]) {
      return false;
    } else {
      return (lookup[letter] -= 1);
    }
  }

  return true;
}

function validate(obj, type) {
  delete obj[key];
  return type;
}
