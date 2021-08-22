// A stack is a data structure that follows rthe principle of Last In First Out. The last element added to the stack will be the first element removed from the stack.



class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

    //The push function accepts a value.
  // Create a new node with that value.
  // If there are no nodes in the stack, set the first and last property to be the newly created node.
  // If there is at least one node, create a variable that stores the current first property on the stack
  // Reset the first property to be the newly created node
  // set the next property on the node to be the previously created varaiable
  // increment the size of the stack by 1.
  


  push(value) {
    var newNode = new Node(value);
    if (!this.first) {
      this.last = newNode;
      this.first = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var holder = this.first;
    if (this.first === this.last) {
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return holder.value;
  }
}


var Pseudo =  function(){
  this.storage = "";
}

Pseudo.prototype.push = function(val){
  this.storage = this.storage.concat(val)
}
