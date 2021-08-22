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



  //Adding values to the end of an array!!
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  //The same function as pop
  dequeue() {
    if (!this.first) return null;

    var current = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = current.next;
    this.size--;
    return current.value;
  }
}
