 // Write a function that accepts a //string input and returns a reversed copy

 // Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

 // Understand the problem and question
 //Explore examples..Come with examples can help you und4rstand the problem better..Example also provide sanity checks that your eventual solution work how it works.
 //1. start with simple examples
 //Progress to more complex examples
 //Explore examples with empty inputs
 // Explore examples with invalid inputs 
  //2. Break it down..Explicitly write out the steps you neeed to take.
//3. solve/simplify the problem.
// Find the core dificulty in what you're trying to do
//Temporarily ignore that difficulty 
// Write a simplified solution
//Then incorporate that difficulty back in.
//4. Look Back and Refactor

// REFACTORING QUESTIONS
//Can you check the result
// Can you derive the result differently?
//Can you understand it at a glance?
//Can you use the result or method for some other problem?
// Can you improve the performance of your solution?
//Can you think of other ways to refactor?
//How have other people solved this problem?


function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++){
    total += i;
  }
  return total;
}

console.log(addUpTo(6))

function addUpTo(n){
  return n * (n + 1) / 2;
}
var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds. `)
console.log(addUpTo(6));  

// Counting Operations


//write a function which takes in a string and returns counts of each character in the string

//understaand edge cases
charCount("aaaa"); 

function charHunt(str){
  //make object to return at end
  var result = {};
  //loop over string, for each character..
  for(var i = 0; i < str.length; i++){
    var char = str[i].toLowerCase();
    //if the char is a number/letter and is a key in object, add one to count
    if(result[char] > 0){
      result[char]++;
    }
    //if the char is a number/letter and not in object, add it to object and set value to 1
    else {
      result[char] = 1;
    }
  }
  
  
  //if character is something else (space, period, etc) don't do anything
  //return object at end

  return result;
}

charHunt("Hello"); 

//Refactoring
function charHunt(str){
  var obj = {};
  for(var i = 0; i < str.length; i++){
    var char = str[i].toLowerCase();
    if(/[a-z0-9]/.test(char)){
      if (obj[char] > 0){
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

function charHunt(str){
var obj = {};
for(var char of str){
  char = char.toLowerCase();
  if(/[a-z0-9]/.test(char)){
    if(obj[char] > 0){
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
}
return obj;
}

function charHunt(str){
  var obj = {};
  for(var char of str){
    char = char.toLowerCase();
    if(/[a-z0-9]/.test(char)){
      obj[char] = ++obj[char] || 1;
      }
    }
  return obj;
  }