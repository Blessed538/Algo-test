// Queue is first in first out
// Stack is first in last out

function Queue() {
  collection = [];
  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    collection.push(element);
  };

  this.dequeue = function () {
    return collection.shift();
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

function PriorityQueue() {
  var collection = [];
  this.printCollection = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    // algorithmns
    // if the area is empty push the element into the collection
    // else loop over the collection array
    // check if the element 1 index is greater than the looped collection first index
    // remove the first item in the array and add the element to the first index of the array.
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function () {
    var value = collection.shift();
    return value[0];
  };
  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

var pq = new PriorityQueue();
pq.enqueue(['Marcus Miller', 3]);
pq.enqueue(['Elon Musk', 2]);
pq.enqueue(['Ben Johnson', 1]);
pq.enqueue(['beau Carnes', 0]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();
