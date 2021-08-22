//write a function that accepts a string. The function should capitalize the first letter of each word in the string the return the capitalized string.
// capitalize('a short sentence) --> 'A Short Sentence'

const word = 'there';
word[0].toUpperCase(); //T
word.slice(1); //here

//Make an empty array words
//split the input string by spaces to get an array
// for each word in the array
// Uppercase the first letter of the word
// join first letter with rest of the string
// push result into 'words array
//join words into a string and return it

// function capitalize(str) {
//   const words = [];

//   for (let char of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(' ');
// }

// create an empty string called 'result'
// for each character in the string
// IF the character to the left a space
// Capitalize it and add it to 'result
//else add it to result

function capitalize(str) {
  const result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === '') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}
