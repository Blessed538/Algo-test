// implement a 'peek' method in this Queue class.
// peek should return the last element (the next one to be returned ) from the queue without removing it.

class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record);
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

//implement the 'weave' function. weave receives two queue as arguments and combines the contents of each into a new , third queue.
// the third queue should contain the alteratings content of two queue. The function should handle queues of different lengths without inserting 'undefined into the new one.
// Do not access the array inside of any queue, only use the 'add, remove and peek functions.

function weave(sourecOne, sourceTwo) {
  const q = new Queue();
  while (sourecOne.peek() || sourceTwo.peek()) {
    if (sourecOne.peek()) {
      q.add(sourecOne.remove());
    }
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }
  return q;
}
