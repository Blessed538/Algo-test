// stacks mehtods;push(add a record to the stack),pop(remove the top record in the stack),peek(return the top record without popping it).

// Create a stack data structure. The stack should be a class with methods 'push' 'pop' and 'peek'. Adding an element to the stack should store it until it is removed.

class stack {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.push(record);
  }
  pop() {
    // Remove and returns the value at the end of the stack
    // you reduce the index of the array
    // store the item to be remove in a variable
    // delete the variable item
    // return result

    this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  size() {
    return this.data[this.data.length];
  }
}

//Stack

var letters = []; // this is our stack
var word = 'racecar';
var rword = '';

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + ' is a palindrome,');
} else {
  console.log(word + 'is not a palindrome');
}
