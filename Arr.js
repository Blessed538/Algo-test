function cumulative(arr) {
  let cumu = [];
  let sum = 0;
  for (var i = 0; i < arr; i++) {
    sum +=  i;
    cumu.push(sum);
  }
  return cumu;
}
console.log(cumulative(5));
// We are given a string S representing a phone number which we would like to reformat. String S consists of N characters: digits, spaces and/or dashes. it contains at least two digits.
//Spaces and dashes in string S can be ignored. we want to reformat the given phone number in such a way that the digits are grouped in blocks of length three, separated by single dashes. if necessary, the final block or the last two blocks can be length of two.
// For example the given string S = "00-44  48 5555 8361", we would like to format it as "004-445-555-583-61"

// write a function that, given a string S representing a phone number, returns this phone number reformatted as described above.

// constraints

// S = "00-44  48 5555 8361" will return 004-448-555-583-61
// S = "00-44  48 5555 8361 4" will return 004-448-555-583-614
// S = "00-44  48 5555 8361 41" will return 004-448-555-583-61-41

//Algorithm
// create a variable that convert the string into an array.
// create an empty array to store the values
// Loop over the formated strings
// push the items into the array and create a substring of the items in the array

function reformat(str) {
  let format = str.replace('-', '');

  return `${format.substring(0, 3)}-${format.substring(
    4,
    9
  )}-${format.substring(9, 12)}`;
}

// console.log(reformat('00-44  48 5555 8361'));

function format(num) {
  // Remove everything that isn't a number
  return (
    num
      .replace(/[^0-9]/g, '')
      // Spilt on every 3rd number
      .match(/\d{1,3}/g)
      // Join with dashes
      .join('-')
  );
}

function format(str) {
  const check = str
    .replace(/[^0-9]/g, '')
    .match(/\d{1,3}/g)
    .join('-');

  return check;
}

// console.log(format('00-44  48 5555 8361'));
// create a  shopping online platform for the selling of goods and services. Many users can use it for their online shopping.
