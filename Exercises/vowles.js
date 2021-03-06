// Write a function that returns the number of vowels used in a string.
// Examples
// vowels('Hi There!') --> 3

// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}
// g in the regular expression makes the result passs the first vowel to reach others while the i  means case sensitive.
//match returns an array.
