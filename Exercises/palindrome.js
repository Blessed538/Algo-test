//Given a string, return true if the string is a palindrome or false if it is not. Palindromes are strings that form the same word if it is reversed. Do include spaces and punctuation in determining if the string is a palindrome.

function palindrome(str) {
  const reversed = str.split('').reverse().join('');

  return str === reversed;
}

function palindrome2(str) {
  return str.split('').every(() => {
    return char === str[str.length - i - 1];
  });
}

//Given an integer, return an integer that is the reverse ordering of numbers
//examples reverseint(15) ===51

const myNumber = 200;
//tostring truns a number into astring while split turns an elem into an array of strings
myNumber.toString().split('').join('');

//parseInt takes a string and returns a number

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');

  if (n < 0) {
    // return parseInt(reversed) * -1;
    return parseInt(reversed) * Math.sign(n);
  }
  return parseInt(reversed);
}
