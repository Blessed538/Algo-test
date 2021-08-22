class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Stack {
  constructor(capacity = 3) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.capacity = capacity;
  }

  push(value) {
    var current = new Node(value);
    if (this.size === this.capacity) throw new Error('the stack is full');
    if (!this.head) {
      this.head = current;
      this.tail = current;
    } else {
      var temp = this.head;
      this.head = current;
      this.head.next = temp;
    }
    return this.size++;
  }
  pop() {
    if (!this.head) return null;
    if (this.head == this.head) {
      this.tail = null;
    }
    var temp = this.head;
    this.head = this.head.next;

    this.size--;
    return temp.value;
  }

  isEmpty() {
    var current = this.head;
    if (current === null) {
      return true;
    }
    return false;
  }

  isFull() {
    if (this.size >= this.capacity) {
      return true;
    }
    return false;
  }
}

class Node2 {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.capacity = 6;
  }

  enqueue(value) {
    var current = new Node(value);
    if (!this.head) {
      this.head = current;
      this.tail = current;
    } else {
      this.tail.next = current;
      this.tail = current;
    }
    return this.size++;
  }

  dequeue() {
    if (!this.head) return null;
    if (this.head === this.head) {
      this.tail = null;
    }
    var temp = this.head;
    this.head = this.head.next;

    this.size--;
    return temp.value;
  }
  isEmpty() {
    var current = this.head;
    if (current === null) {
      return true;
    }
    return false;
  }

  isFull() {
    if (this.size >= this.capacity) {
      return true;
    }
    return false;
  }
}

// var stack = new Stack(20);
// stack;
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// stack.push(5);
// stack.push(5);
// stack.push(5);
// console.log(stack.push(5));

// console.log(stack.pop());
// console.log(stack.isEmpty());
// console.log(stack.isFull());

let queue = new Queue();
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(3);
queue.enqueue(2);
// console.log(queue.enqueue(9));
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// queue.dequeue();
// queue.dequeue();
// console.log(queue.isEmpty());
// console.log(queue.isFull());
[10, 12, 8, 22, 16, 445, 35, 37563, 17];
// [1 ->0,2,7,19]

function reverse(str) {
  let result = '';
  // let chars = str.split('');
  // console.log(chars);
  for (let char of str) {
    result = char.reverse().join();
  }
  return result;
}

// console.log(reverse('The lazy dog has given birth to four puupies'));

function longest(s1, s2) {
  //   const frq1 = {};
  //   const frq2 = {};
  //   let result = '';

  //   for (let char of s1) {
  //     frq1[char] = frq1[char] || 0 + 1;
  //   }

  //   for (let char of s2) {
  //     frq2[char] = frq2[char] || 0 + 1;
  //   }

  //   for (let key in frq1) {
  //     if (key in frq2) {
  //       result += key;
  //     }
  //   }
  //   for (let key in frq2) {

  //     if (!(key in frq1)) {
  //       console.log(key);
  //       result += key;
  //     }
  //   }

  //   return result;
  let a = [...new Set(s1.split(''))];
  let b = [...new Set(s2.split(''))];

  //combine both arrays into one
  for (let i = 0; i < b.length; i++) {
    a.push(b[i]);
  }
  //create a unique array from the combination
  let init_combo = [...new Set(a)];
  //sort array and join to form a string
  let combo = init_combo.sort().join('');
  //Return the final result
  return combo;
}

// console.log(longest('aretheyhere', 'yestheyarehere'));

function oddOrEven(array) {
  let holder = '';
  for (var i = 0; i < array.length; i++) {
    holder += array[i];
    console.log(holder);
    if (holder % 2 === 0) {
      return 'Even';
    }
  }
  return 'odd';
}

// console.log(oddOrEven([1, 6, -3]));

function firstNonRepeatingLetter(s) {
  let count = new Map();

  for (var i = 0; i < s.length; i++) {
    var item = s[i];
    if (count.has(item)) {
      count.set(item, count.set(item) + 1);
    } else {
      count.set(item, 1);
    }
  }

  for (let [key, value] of count.entries()) {
    if (value === 1) {
      return key;
    }
  }
}

function firstNoneRepeating(list, map = new Map()) {
  for (let item of list) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  for (let [key, value] of map.entries()) {
    if (value === 1) {
      return key;
    }
  }
}

// console.log(firstNoneRepeating([5, 2, 3, 4, 2, 6, 7, 1, 2, 3]));

function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = '0' + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = '0' + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
// printFarmInventory(7, 11);

//  Write a function min that takes two arguments and returns their minimum.

// Define a recursive function isEven corresponding to this description. The
//function should accept a single parameter (a positive, whole number) and return
//a Boolean.Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

//

// Bean countingYou can get the Nth character, or letter, from a string by writing "string"[N].
//The returned value will be a string containing only one character (for example,
//"b"). The first character has position 0, which causes the last one to be found at
//position string.length - 1. In other words, a two-character string has length
//2, and its characters have positions 0 and 1.
//Write a function countBs that takes a string as its only argument and returns
//a number that indicates how many uppercase “B” characters there are in the
//string.
//Next, write a function called countChar that behaves like countBs, except
//it takes a second argument that indicates the character that is to be counted
//(rather than counting only uppercase “B” characters). Rewrite countBs to
//make use of this new function.

function max(...numbers) {
  let result = -Infinity;
  console.log(result.props());
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
// console.log(max(4, 1, 9, -2));
