function code(str){
  let start = '';
 let words =  str.split(' ');
  for (let char of words){
    let end =  char.slice(0,1) +'ay';
    let start =  char.substring(1) + end
    console.log(start);
  }
  return start
}

// console.log(code('The quick brown fox jumps over the lazy dog'))

// anagrams need to be split if there are strings , sorted and joined together.
const sort = (word) => word.split('').sort().join('');

function anagrams(word, words) {
  let token = sort(word);
  let total = []

  for(let char of words)
  {
    if (sort(char) === token) {
      total.push(char)
    }    
  }
  
  return total
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));