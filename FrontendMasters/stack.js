function Stack(capacity){
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
}

Stack.prototype.push = function(value){
  if(this._count < this.capacity){
    this._storage[this.count++] = value;
    return this._count;
  }
  return "Max capacity already reached.move element before adding a new one"
}

Stack.prototype.pop = function(){
  var value = this._storage[--this._count];
  delete this._storage[this._count];
  if(this._count < 0){
    this._count = 0;
  }
  return value;
}
var test = new Stack(3);
console.log(test.push(8))