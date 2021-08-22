function Queue(capacity){
  this._capacity = capacity;
  this.tail = 0;
   this.head = 0;
   this.count = 0;
}

Queue.prototype.enqueue = function(value){
  if(this.count() < this.capacity){
    this.storage[this.tail++] = value;
    return this.count();
  }
  return "Max capacity already reached. Remove element before adding a new one"
}

Queue.prototype.dequeue = function(){
  var element = this.storage[this.head];
  delete this.storage[this.head];
  if(this.head < this.tail) this.head++
  return element;
}

Queue.prototype.contains = function(value){
  for(let i = this.head; i < this.tail; i++){
    if(this.storage[i] === value) return true
  }
  return false;
}

var test = new Queue(10);
// console.log(test.enqueue(2))

var house = {};
var count = 0;
var man = 'cat';
var jackson = 'jackson';
var mouse = 'mouse';
var car = house[count++] = man;
var jack = house[count++] = jackson;
var plus = house[count++] = mouse;
var masurai = house['masurai'] = 'mission';
var chuks = house.count;
// console.log(house[3]);

// Recursion

function factor(num){
  let result = 1;
  for(let i = 1; i <= num; i++){
    // console.log(i);
    result *= i;
    
  }
  return result;
}
// console.log(factor(5))
// function computeFactorial(num){
//   if(num === 1){
//     return 1;
//   } else {
//     return num * computeFactorial(num - 1)
//   }
// }

// write a function 'recursiveReverse' that takes an array an uses recursion to return its content in reverse

// function reverse(arr){
//   let add = [];
//   function addItem(orderArr){
//     if(orderArr.length > 0) { 
//   add.push(orderedArr.pop());
//   addItem(orderArr)
//     }
//   return;
//   }
//   addItem(arr);
//   return add;
// }

// function reverseMultipler(arr,num){
//   if(arr.length === 0){
//     return arr;
//   }
//   var last = arr.pop();
//   reverseMultipler(arr,num){
//     arr.push(last * num)
//     return arr;
//   }
// }

function findLongestWordLength(str) {
  let len = 0;
  let word = str.split(' ');
  for(let i = 0; i < word.length; i++){
    if(word[i].length > len){
      len = word[i].length;
    }
  }
  return len;
}

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// function largestOfFour(arr) {
//   return arr.map(function(group) {
   
//     return group.reduce(function(prev, current) {
//       // console.log(prev);
//       console.log(current);
//       return current > prev ? current : prev;
//     });
//   });
// }

//  function largestOfFour(arr) {

// return arr.map( (obj) => Math.max(...obj));

// }
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// function confirmEnding(str, target) {
//   const joke = str.slice(str.length - target.length);
//   console.log(joke)
//   if(joke === target){
//     return true
//   } else {
// return false;
//   }
  

// }

// confirmEnding("Bastian", "n");

function repeatStringNumTimes(str, num) {
  let result ="";
  while(num > 0){
    result +=str;
    num--
  }
  return result;
}

// console.log(repeatStringNumTimes("abc", 3));

function truncateString(str, num) {
  return str.slice(0,num);
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

function titleCase(str) {
  let result = [];
  for(let word of str.toLowerCase().split(' ')){
    result.push(word[0].toUpperCase() + word.slice(1))
  }

  return result;
}

// console.log(titleCase("I'm a little tea pot"));


function frankenSplice(arr1, arr2, n) {
  let result = arr2.slice();
   result.splice(n,0, ...arr1);
   return result;
}

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

function bouncer(arr) {
//  let result = [];
//  for(let word of arr){
//    if(word){
//      result.push(word)
//    }
//  }
// return result
  return arr.filter(Boolean);
}

// console.log(bouncer([7, "ate", "", false, 9]));


function getIndexToIns(arr, num) {
  let result = arr.sort();

  for(let i = 0; i < result.length; i++){
    if(result[i] >= num){
      return i;
    }
  }
  return arr.length;
}

// console.log(getIndexToIns([40, 60.90,68], 50));

function toWeirdCase(string){
  for(var i = 0; i < string.length; i++){
    let checker = string[i];
    if( i % 2 === 0) {
  return checker.toUpperCase().join(' ')
    }
  
      
     
  }
   return checker.toLowerCase().join(' ');
 
}

console.log(toWeirdCase('This'));