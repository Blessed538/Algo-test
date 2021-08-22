//Given a string, return a new string with the reversed
// order of characters
//exampls reverse('apple') === 'leppa'

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

//split turns the string into an array consisting of a different character  from the string 

function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}
