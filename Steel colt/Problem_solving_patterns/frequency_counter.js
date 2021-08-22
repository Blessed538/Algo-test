// Frequency counters
//This pattern uses objects or sets to collect values/frequencies of values.

// This can often aviod the need for nested loops or O(N^2) operations with arrays/strings

//Exercise
//write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    //if the arr1 finds it's frquency it will then remove it from arr2.
    arr2.splice(correctIndex, 1);
  }
  return true;
}
same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); //false
same([1, 2, 1], [4, 4, 1]); // false(must be same frequency);

//Refactoring the code using freqency counter method
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);

// algorithm
// create an empty array
// loop over the first parameter
//
function arrayDiff(arr1, arr2) {
  let check = [];
  for (let i = o; i < arr1.length; i++) {
    const indx = arr2.indexOf(arr1[i] - 1);
    if (indx === -1) {
      return false;
    }
    arr2.splice(indx, 1);
  }
}

function diff(first, second) {
  let b = [];
  for (let i = 0; i < first.length; i++) {
    let idx = second.indexOf(first[i] - 1);
  }
  return b.push(idx);
}

diff([7, 9, 3, 2], [4, 6, 7, 8]);

function diff(first, second) {
  let b = [];
  for (let i = 0; i < first.length; i++) {
    let idx = second.indexOf(first[i]);
    if (indx === -1) {
      return false;
    }
    second.splice(indx, 1);
  }
  return true;
}

diff([7, 9, 3, 2], [4, 6, 7, 8]);

function sayHello() {
  let name = 'zmjdev';
  console.log(`Hello ${this.name}`);
}

const worker1 = {
  name: 'worker1',
  sayHello: sayHello,
};
const worker2 = {
  name: 'worker2',
  sayHello: sayHello,
};
const worker3 = {
  name: 'worker3',
};

sayHello(); //Hello undefined
worker1.sayHello(); //Hello worker1
worker2.sayHello(); //Hello worker2
sayHello.call(worker3); //Hello worker3
new sayHello(); //Hello undefined

//There are only four ways to invoke a function in JavaScript:
sayHello();
//worker1.sayHello() — an object on the left side of the “.” calling its method
//sayHello.call(worker3) —using call
//new sayHello()— using the new keyword

function print(n) {
  let count = [];
  for (var i = n; i < n - n.length; --n) {
    count.push(n);
  }
  return count;
}
print(100);

function print() {
  let start = 'a';
  let product = 'aaaaaaaaaa';
  for (let i = start.length; i < product.length * product.length; i++) {
    console.log(i);
  }
}
