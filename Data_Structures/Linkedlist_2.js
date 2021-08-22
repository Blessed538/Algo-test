function linkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, prev, next) {
  this.value = value;
  this.prev = prev;
  this.next = next;
}

linkedList.prototype.addToHead = function (value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

linkedList.prototype.addToTail = function (value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

linkedList.prototype.removeHead = function () {
  //if there is  no head value return null
  if (!this.head) return null;
  // store  the value of the head node in a variable
  var val = this.head.value;
  // set the head node to the next node after the current node
  this.head = this.head.next;
  //
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};
linkedList.prototype.removeTail = function () {
  // return  null if there is no head node
  if (!this.tail) return null;
  // assign the value of the tail to a variable
  var val = this.tail.value;
  // set the tail node to the previous node before the current value
  this.tail = this.tail.prev;
  // if there is a tail node set the tail next property to null;
  if (this.tail) this.tail.next = null;
  // else set the head property to null because the tail node is null
  else this.head = null;
  return val;
};

linkedList.prototype.search = function (searchValue) {
  // the search starts from the particular node and that will be the head node\
  var currentNode = this.head;
  // it take in the currentnode and as long as the currentnode is valid, it will run the loop
  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};

linkedList.prototype.indexOf = function (value) {
  // create an empty array to store the indexes of the value
  // create a variable that increments the index value depending on the looping of the nodes
  // create a variable that holds the current index
  // use a while loop to loop over the nodes starting from the current index
  //increment the
  var Index = [];
  var currentNode = this.head;
  var currentIndex = 0;
  while (currentNode) {
    if (currentNode.value == value) {
      index.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex++;
  }
  return index;
};

var ll = new linkedList();
ll.addToHead(500);
ll.addToHead(30);
ll.addToHead(200);
ll.addToTail(20);
ll.addToTail(40);

ll.removeHead();
ll.removeHead();
console.log(ll.tail.prev.prev.prev);
