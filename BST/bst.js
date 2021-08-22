function factorial(num) {
  //base  case
  if (num === 1) {
    return num;
    // recursion case
  } else {
    return num * factorial(num - 1);
  }
}

factorial(4); //24

//We  keep building our callstack until our base case is satisfied and we unwine the callstack until we get to the function call

function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (value) {
  // if the the argument is less than or equal to
  if (value <= this.value) {
    // if there is no left value make the inserted value the new value
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

BST.prototype.contains = function (value) {
  // if the inserted value is equal to the parent node value return true
  if (value === this.value) return true;
  // if the argument is less than the parent node value
  else if (value < this.value) {
    // check if there is no left value anmd return false if it true
    if (!this.left) return false;
    //
    else return this.left.contains(value);
  } else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

var bst = new BST(50);
