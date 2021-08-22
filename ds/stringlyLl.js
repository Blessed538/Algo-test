// a linkedlist is ds that contains a head, tail, and length property. Linked Lists consist of nodes, and each node has a value and a pointer to another node or null.
// The linked stores data like int or strings. The difference btw linked list and array is that a linkd list does not use index to get a number. The node can be  a string or int.
// To access anything in the linked list you must start from the first. Singly linked list has only one pointer pointing to the next one.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  // the function should accept a value
  // Create a new node using the value passed to the function
  // if there is no head property on the list, set the head and the tail to be the newly created node.
  // otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
  // increment the length by one
  // return the linked list

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Removing a node from the end of the Linked List.
  // if there are no nodes in the list, return undefined
  // Lopp through the list until you reach the tail
  //set the next property of the 2nd to last node to be null.
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // If there are no nodes, return undefined
  // Store the current head property in a variable
  // Set the head property to be the current head's next property
  // Decrement the length by 1
  // Return the value of the node removed// current
  shift() {
    if (!this.head) return undefined;
    var current = this.head;
    this.head = current.next;
    this.length--;
    if (length === 0) {
      this.tail = null;
    }
    return current;
  }

  // This function accepts a value
  // create a new node using the value passed to the function
  // if there is no head property on the list, set the head and tail to be the newly created node
  // Otherwise set the newly created node's next property to be the current head property on the list
  // set the head property on the list to be that newly created node
  // increment the length of the list by 1
  // return the linked list

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // the get function takes in a value
  // if the index is less than 0 or greater than equal to the length of the node return null
  // create a variable called counter that keeps tracks of the number of next node as the method traversy the node.
  // while counter is not equal to index
  // current value which was assigned the head value should be equal to current.next
  // increment the counter by one.

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // this function should accept a value and an index
  // use the get function to find the specific node.
  // if the node is not found, return false
  // if the node is found, set the value of that node to be the value passed to the function and return true;

  set(index, value) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  // if the index is less than zero or greater than the length, return false;
  // if the index is the same as the length, push a new node to the end of the list
  // if the index is 0, unshift a new node to the start of the list
  // use the get method to get the previous node before the one you want to insert.
  // let the next node to previous before this new insert be
  // set the next property on that node to be the new node
  // set the next property on the new node to be the previous next
  // Increment the length;

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    var newNode = new Node(value);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // if the index is less than zero or greater than the length, return undefined
  // If the index is the same as the length-1 pop
  // if the index is 0, shift
  // Otherwise using the get method, access the node at the index -1
  // set the next property on that node to be the next of the next node
  // Decrement the length
  // Return the value of the node removed.
  //1234
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;

    return removed;
  }

  // swap the head and tail
  // create a variable called next
  // create a variable called prev
  //create a variable called node and initilaize it to the head property
  // Loop through the list
  // set next to be the next property on whatever node is
  // set the next property on the node to be whatever prev is
  // set prev to be the value of the node variable
  // set the node variable to be the value of the next variable

  
  reverse() {
   var current = this.head;
   this.head = this.tail;
   this.tail = current;
   let next;
   let prev = null;
   for(var i = 0; i < this.length;i++){
   next = current.next;
   current.next = prev;
   prev = current;
   current = next
   }
   return this;
}
}
//The initial linked list is . Insert  at the position  which currently has  in it. The updated linked list is .
// Singly Linked Lists arer an excellent alternative to arrays when insertion and deletion at the beginning are frequently required.
// Arrays contain a built index whereas Linked Lists do not not.
// The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues.

var list = new SinglyLinkedList();
list.push('great grace');
list.get(6);
list.unshift('passion');
list.shift();
list.pop();

//Given the pointer to the head node of a linked list and an integer to insert at a certain position, create a new node with the given integer as its  attribute, insert this node at the desired position and return the head node.

//The initial linked list is 3,4,5,6,7. Insert  at the position  which currently has  in it. The updated linked list is .
