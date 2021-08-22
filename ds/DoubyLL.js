class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      newNode.prev = this.tail;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = oldHead.next;
    this.head.prev = null;
    this.head.next = null;
    this.length--;
    return oldHead;
  }
  unShift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    newNode.prev = null;
    this.head.prev = newNode;

    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index <= this.length / 2) {
      var count = 0;
      var current = this.head;

      while (counter !== index) {
        current = current.next;
        count++;
      }

      return current;
    } else {
      var count = this.length - 1;
      var current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }
  set(index, value) {
    var prevNode = this.get(index);
    if (prevNode) {
      prevNode.value = value;
      return prevNode;
    }
    return -1;
  }
  insert(index, value) {
    if (index === 0) return this.unShift(value);
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    var newNode = new Node(value);
    var prevNode = this.get(index - 1);
    var temp = prevNode.next;
    temp.prev = newNode;
    prevNode.next = newNode;
    newNode.next = temp;
    newNode.prev = prevNode;
    this.length++;
    return newNode;
  }

  remove(index, value){
    var newNode = new Node(value);
    var prevNode = this.get(index - 1);
    
  }
}
