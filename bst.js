class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert = function (value) {
    var node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            return this;
          }
          current = current.right;
        }
      }
    }
  };
  // Time complexity:

  find = function (value) {
    // implement me...
    if (this.root === null) return undefined;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.right) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return current;
  };

  // Time complexity:

  contains = function (value) {
    // implement me...
    if (this.root === null) return false;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.right) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return false;
  };

  // Time complexity:

  breadthFirstTraverse() {
    var data = [];
    var queue = [];
    var current = this.root;
    queue.push(current.value);
    while (queue.length) {
      current = queue.shift();
      data.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }
  traverseDepthFirst_inOrder = function () {
    // implement me...

    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(current.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  };
  // Time complexity:

  traverseDepthFirst_preOrder = function (fn) {
    // implement me...
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  };
  // Time complexity:

  traverseDepthFirst_postOrder = function (fn) {
    // implement me...
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  };
  // Time complexity:

  checkIfFull = function () {
    // implement me...
  };
  // Time complexity:

  checkIfBalanced = function () {
    // implement me...
  };
}

var test = new BinarySearchTree();
// console.log(test.insert(10));

//Given a sorted array and a value, determine if the value is in the array using the binary search (divide and conquer) method.

// Write a function that takes a sorted array and a value and returns the index of the value in the array. Return null if the value is not found in the array. What is the time complexity?

function sortedArray(arr, value) {
  let element = arr.sort();
  for (let i = 0; i < element.length; i++) {
    // if(element[i] === value){
    //   return i;
    // }
    var hold = element.indexOf(value);
  }

  return hold;
  // return -1
}

// console.log(sortedArray([7, 9, 5, 3, 1, 2, 3, 4], 4));

function check(arr, value) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    var middleIdx = Math.floor((min + max) / 2);
    var middleElem = arr[middleIdx];
    if (middleIdx < value) {
      min = middleElem + 1;
    } else if (middleIdx > value) {
      max = middleElem - 1;
      console.log(max);
    } else {
      return middleIdx;
    }
  }
  return -1;
}

console.log(check([7, 9, 5, 3, 1, 2, 3, 4], 4));
