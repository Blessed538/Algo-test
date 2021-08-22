// write a function that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string.
// example
// capitalize('a short sentence') -> 'A Short Sentence'
// make an empty array 'words'
// split the input string by spaces to get an array
// for each word in the array
// uppercase the first letter of the word
//join first letter with rest of the string
// push result into words array
// join words into a string and return it

function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {    
    words.push(word[0].toUpperCase() + word.slice(1));
    console.log(word[0]);
    console.log(typeof str);
  }
  return words.join(' ');
}

// Create an empty string called 'result'
// for each character in the string
// if the character to the left a space
// Capitalize it and add it to 'result'
// else Add it to 'result`

function capitalize2(str) {
  let result = str[0].toUpperCase();
  // let letters = str.split(' ');
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === '') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(capitalize2('The man is a big full eating grass'));


// lcm
function lcm(arr){
  
let big =  Math.max(...arr);
let small = Math.min(...arr);
  let scm = big;

  while(true){
    let isScm = true;
    for (let i = small; i < big; i++){
      if(scm % i !== 0){
        // console.log(i)
        isScm = false;
        break;
      }
    }
    if(isScm){
      return scm;
    } else {
      scm++
    }
  }

}

// console.log(lcm([6,8]))
let peace = 6 % 8;
// console.log(peace)

