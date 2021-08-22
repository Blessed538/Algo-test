// Binary Search Tree

// INSERTING A NODE
// create a new node
// starting at the root
// check if there is a root, if not -  the root now becomes that new node
// if there is a root, check if the value of the new node is greater than or less than the value of the root
// if greater
// check to see if there is a node to the right
// if there is, move to that node and repeat these steps
// if there is not, add that node as the right propert
// if it is less
// check to see if there is a node to the left
// if there is, move to that node and repeat these steps
// if there is not, add that node as the left property

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // insert(value) {
  //   var newNode = new Node(value);
  //   if (this.root === null) {
  //     this.root = newNode;
  //     return this;
  //   } else {
  //     var current = this.root;
  //     while (true) {
  //       if (value === current.value) return undefined;
  //       if (value < current.value) {
  //         if (current.left === null) {
  //           current.left = newNode;
  //           return this;
  //         }
  //           current = current.left;
  //
  //       } else  (value > current.value) {
  //         if (current.right === null) {
  //           current.right = newNode;
  //           return this;
  //         }
  //           current = current.right;
  //
  //       }
  //     }
  //   }
  // }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
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
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return this;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        // node has no children
        if (node.left === null && node.right === null) {
          return null;
        }
        // node has no left child
        if (node.right === null) {
          return node.left;
        }
        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.rigth, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
 
  // check if there is a root, if not - we're done searching!
  // if there is a root, check if the value of the new node is the value we are looking for, if we found it , we're done.
  // if not, check to see if the value is greater than or less than the value of the root.
  // if it is greater
  // Check to see if there is a node to the right
  // if there is, move to that node and repeat these steps
  // if there is not, we're done searching!
  // if it is less
  // Check to see if there is a node to the left
  // if there is, move to that node and repeat these steps
  // if there is not, we're done searching.

  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
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
    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return false;
  }

  //   find(data) {
  //     if (this.root === null) return undefined;
  //     let current = this.root;
  //     let found = false;
  //     while (current && !found) {
  //       if (data < current.value) {
  //         current = current.left;
  //       } else if (data > current.value) {
  //         current = current.right;
  //       } else {
  //         found = true;
  //       }
  //     }
  //     if (!found) return undefined;
  //     return current;
  //   }
}

var test = new BST();
test.insert(5);
test.insert(4);
test.insert(3);
test.insert(16);
console.log(test.insert(18));
console.log(test.find(90));
