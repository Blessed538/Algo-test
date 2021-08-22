// Implement a Queue data structure using two stacks.
// Do not create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove'
// For a reminder on what each method does, look back at the Queue exercise.

class stack {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.push(record);
  }
  pop() {
    this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

class Queue {
  constructor() {
    this.first = new stack();
    this.second = new stack();
  }
  add(data) {
    this.first.push(data);
  }
  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
}
