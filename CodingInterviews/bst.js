class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    if (value === current.value) return undefined;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return undefined;
    var current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current.value;
  }
  contains(value) {
    if (this.root === null) return false;
    var current = this.root;

    let found = false;

    while (current && !found) {
      if (value === current.value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    // if (!found) return false;
    return false;
  }
  findMax() {
    if (this.root === null) return undefined;
    var current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.value;
  }
  findMin() {
    if (this.root === null) return undefined;
    var current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }
}

let test = new BST();
console.log(test.insert(7));
console.log(test.insert(9));
console.log(test.insert(20));
console.log(test.insert(11));
console.log(test.find(21));
// console.log(test.find(9));
// console.log(test.findMin());
// console.log(test.contains(71));
