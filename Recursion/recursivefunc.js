// Recursion is a process or function that calls itself
// Recursionis a cleaner alteernative to iteration

function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

function factorial2(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('ALL done');
}

function recursiveCountDown(num) {
  if (num <= 0) {
    return;
  }
  console.log(num);
  num--;
  recursiveCountDown(num);
}

// Helper Method Recursion

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    // return the function if the array is empty
    if (helperInput.length === 0) {
      return;
    }
    // if the first item in the array divided by two is not equql to zero push it to the empty array otherwise
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // remove it from the array
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

// Recursion on string reversal
function str(string){
  if(string.length === ''){
    return ""
  }
  return str(str.substring(1)) + str.charAt(0);
}

//recursion on Palindromes
function Palindromes(k){
  if (k.length === 0 || k.length === 1){
    return true
}
if(k.charAt(0) === k.charAt(k.length -1)){
  Palindromes(k.substring(1,k.length -1))
}
return false
}

// longest plaindrome substring
function sub(s){
  if(s == null | s.length < 1){
    return ''
  }
  let start = 0;
  let end = 0;
  for(var i = 0; i < s.length; i++){
    let len1 =  expand(s,i,i);
    let len2 =  expand(s,i, i + 1);
    let len =  Math.max(len1,len2);
  
    if(len > end -  start){
      start = i - ((len -1) / 2);
      // console.log(start)/
      end = i +  (len / 2);
    }
  }
  console.log(s.substring(start,end + 1))
  return s.substring(start,end + 1)
}

function expand(s,left,right){
  if(s == null || left > right) return 0;
  while(left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)){
    left --;
    right++
  }
  return right - left - 1
}

// console.log(sub('racecar'))

// decimal to binary
function decimal(num,binary){
  if(num == 0){
    return binary
  }
  binary =  num %  2 + binary;
  // console.log(binary);
  return  decimal((num / 2), binary)
}

console.log(decimal(233,''));


function loop(num){
  for(var i = num.length - 1; i > 0 ; i--){
    let r =  num[i];
    console.log(r);
  }
}

console.log(loop(10))