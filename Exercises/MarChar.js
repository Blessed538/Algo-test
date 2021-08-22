//Given a string, return the character that is used the most in the string.
// What is the most common character in the string?
// Does string A have the same characters as string B(is it an anagram)?
//Does the given string have any repeated character in it?

// marChar("abcccccde") == "C"

// const string = "Hello There!"

// const chars = {};

// for(let char of string){
// chars[char] = chars[char] + 1 || 1
// if(!chars[char]){
//   chars[char] = 1;
// } else {
//   chars[char]++;
// }
// }

// chars;

function maxChar(str) {
  const mapChar = {};
  let max = 0;
  let charMap = '';
  for (let char of str) {
    if (mapChar[char]) {
      mapChar[char]++;
    } else {
      mapChar[char] = 1;
    }
  }

  for (let char in mapChar) {
    if (mapChar[char] > max) {
      max = mapChar[char];
      charMap = char;
    }
  }
  return charMap;
}

console.log(maxChar('abbcccccde'));
