// find the maximum  occurring character in a given string.
// Remove all duplicates from a given string.
// How to print the duplicate characters from the given string.
// How to remove character from the first string which are present in the second string.

// Algorithms
// create a variable that holds an empty array
// create an empty objects.

function Delete(strA, strB) {
  var first = {};
  var result = [];
  for (let char of strA) {
    first[char] = first[char] || 0 + 1;
  }
  for (let char of strB) {
    if (!first[char]) {
      result.push(char);
    }
  }

  return result;
}

// console.log(Delete('jacobs', 'jumasn'));

// how to check if two strings are rotations of each other . i.e if is looping then it's true if not it's false.
// how to reverse a given string.
// how to reverse string without recursion.

function MaximumNum(str) {
  let count = {};
  let max = 0;
  let maxChar = '';
  for (let char of str.toLowerCase()) {
    // if (!count[char]) {
    //   count[char] = 1;
    // } else {
    //   count[char] + 1;
    // }
    count[char] = (count[char] || 0) + 1;
  }
  // loop over the value of the object count
  for (let char in count) {
    if (count[char] > max) {
      max = count[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// console.log(MaximumNum('blessing'));

//Remove all duplicates from the string

function DuplicateStr(str) {
  //return the value that are equal to the index loop over
  return str.filter((values, index) => str.indexOf(values) === index);
}

// console.log(
//   DuplicateStr(['good', 'great', 'great', 'best', 'good', 'joy', 'joy', 'joy'])
// );

function Dup(words) {
  const unique = [];
  words.forEach((word) => {
    if (!unique.includes(word)) {
      unique.push(word);
    }
    return unique;
  });
}
// console.log(
//   Dup(['good', 'great', 'great', 'best', 'good', 'joy', 'joy', 'joy'])
// );

// my answer will be o
// loop over the str
function printDuplicate(str) {
  let duplicates = '';
  let text = str.split('');
  for (var i = 0; i < text.length; i++) {
    let letter = text[i];
    if (duplicates.indexOf(letter) == -1) {
      duplicates += letter;
    }
  }
  return duplicates;
}
// console.log(printDuplicate('good'));

function Text(str) {
  let text = str.toLowerCase().split('');
  let count = {};
  let max = [];
  for (let char of text) {
    count[char] = count[char] || 0 + 1;
  }
  for (let char in count) {
    if (char > 0) {
      max.push(char);
    }
  }
  return max;
}

// console.log(Text('greaterthings'));
// loop over the array
// assign it value to an object that could hold key and value
// loop over the object and key the values. if the value is greater than 1 push the value into an empty array and return the array.

const str = 'afewreociwddwjej';
function findRepeat(str) {
  const arr = str.split('');
  const hash = new Map();
  const result = [];
  // If repeat the value is false, if no repeat the value is true
  for (let i = 0; i < arr.length; i++) {
    if (hash.get(arr[i]) === undefined) {
      hash.set(arr[i], true);
    } else {
      const value = hash.get(arr[i]);

      if (value) {
        hash.set(arr[i], !value);
      }
    }
  }
  hash.forEach((v, k) => {
    if (!v) result.push(k);
  });
  return result;
}
// console.log(...findRepeat(str));

function howManyRepeated(str) {
  const result = [];
  // strArr groups every related character together
  const strArr = str
    .toLowerCase()
    .split('')
    .sort()
    .join('')
    .match(/(.)\1+/g);

  if (strArr != null) {
    strArr.forEach((elem) => {
      result.push(elem[0]);
    });
  }
  return result;
}
// console.log(...howManyRepeated(str));

// if you have a counter to hold the number of times a variable runs
//

// console.log(Pairs([1, 1, 3, 3, 5, 6]));

function Pairs(arr) {
  maxChar = 0;
  const obj = {};
  for (let item of arr) {
    obj[item] = obj[item] + 1 || 1;
    if (obj[item] % 2 === 0) {
      maxChar += 1;
    }
  }

 

  return maxChar;
}

// console.log(Pairs([1, 1, 3, 3, 5, 5, 6, 6]));

//How do you find all the permutations of a string

// A function

//solution(a, b, c)

//takes in three parameters

//A = ["Ames", "Sandy", "Squidward", SpongeBob"]
//B = ["123456789", "789123456", "343456787", "115678456"]
//C = "5678"

//The Arrays A and B contains the names and numbers of people with their corresponding indexes.
//Write a function that follows the following rules.

//A(N) <= 100
//B(N) <= 100
//B[i] must be a digit and B[i](N) <= 9
//C must be a digit and C(N) <= 9

//The function must return the name with the corresponding index of a number that has the digits in C,
//If more than one item in the B array contains those numbers, the solution should return the number
//with the highest value starting with the digits in parameter C e.g.

//Solution (A, B, C) //would return SpongeBob

function Family(a, b, c) {
  const result = [];
  if (a.length >= 100) {
    return null;
  }
  if (b.length >= 100) {
    return null;
  }

  for (let i = 0; b.length; i++) {
    const checker = b[i];
    if (c.includes(checker)) {
      // result.push(checker);
    }
  }
  return result;
}

// console.log(
//   Family(
//     ['Ames', 'Sandy', 'Squidward', 'SpongeBob'],
//     ['123456789', '789123456', '343456787', '115678456'],
//     '5678'
//   )
// );

// write a function that takes a string, and returns the least frequent character.

function takeString(str) {
  const obj = {};
  let test = 1;
  maxChar = '';

  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }

  for (let char in obj) {
    if (obj[char] === test) {
      test = obj[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(takeString('zbbbccddddddddrrrrreeedddffeiiiooooo'));
