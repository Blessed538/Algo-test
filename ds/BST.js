class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTre {
  constructor() {
    this.root = null;
  }
   // create a new Node
  // starting from the root
  // check if there is a root, if the root now becomes that new node.
  // if there is a root, check if the value of the new Node is greater than or less than the value of the root.
  // if it is greater
  // check to see if there is a node to the right
  // If there is, move to that node and repeat these steps
  // if there is not, add that node as the right property
  // if it is less
  // check to see if there is a node to the left
  // if there is, move to that node and repeat these steps
  // if ther is not, add that node as the left property.

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
}


