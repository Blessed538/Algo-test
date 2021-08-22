// write a function 'recursiveMultipler' that takes two arguments, arr and num' and multiples each value into by num and returns an array of the values.

function recursiveMultipler(arr, num) {
  if (arr.length === 0) {
    return arr;
  }
  var last = arr.pop();
  recursiveMultipler(arr, num);
  arr.push(last * num);
  return arr;
}

var recursiveReverse = function(arr){
  var reversedArr = [];
  var addItems = function(orderedArr){
    if(orderedArr.length > 0){
      reversedArr.push(orderedArr.pop());
      addItems(orderedArr)
    }
    return;
  }
  addItems(arr);
  return reversedArr;
}

// Implement a min Stack
function MinStack(capacity){
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
  this._min = new Stack();
}

// 0(1)
MinStack.prototype.push = function(value){
  if(this._count < this._capacity){
    if(this._min.peek() < value){
      this._min.push(this._min.peek())
    } else {
      this._min.push(value)
    }
    this._storage[this._count++] = value;
    return this._count;
  }
  return "Capacitry already reached "
}

var test = new MinStack(60)
 console.log(test.push(10));

// Implementing queue with two stacks
function  Queue_TwoStacks(){
  this._stackIn = new Stack();
  this._stackOut = new Stack();
}

Queue_TwoStacks.prototype.enqueue = function(val){
  this._stackIn.push(val)
}
Queue_TwoStacks.prototype._transferStacks = function(){
  while(this._stackIn.count() > 0){
    this._stackOut.push(this._stackIn.pop())
  }
}

Queue_TwoStacks.prototype.dequeue = function(){
  if(this._stackOut.count() === 0)  this._transferStacks();
  return this._stackOut.pop();
}




 var Stack = function(storage){
   this.storage = storage;
   this.size = 0;

 }

 Stack.prototype.push = function(value){
   this.storage = this.storage.concat(value);
   this.size++
 }

 Stack.prototype.pop = function(){
   var first = this.storage.shift();

 }

 