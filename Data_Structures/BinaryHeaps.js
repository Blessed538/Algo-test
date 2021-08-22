// Binary Heap
// In a MaxBinaryHeap, parent nodes are always larger than child nodes. the nodes are always smaller than their parents
// In a MinBinaryHeap, parent nodes are always smaller than their children's nodes

// For any index of an array n...
// The left child is stored at 2n + 1
// the right child is at 2n +2
// to get the parent of an index substract 1 from the index and divide by 2
// when  adding an item you push to the end of the array and bubble up by comparing the value to their parents.

// Insert Algorithm
// Push the value into the values property on the heap
// Bubble up:
// Create a variable called index which is the length of the values property -1
//Create a variable called parentIndex which is the floor of (index -1)/2
// keep looping as long as the values element at the parentIndex is less than the values element at the child index
// Swap the value of the values element at the parentIndex with the value of the element at the child index
// Set the index to be the parentIndex, and start over.

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    var idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      var parentIndex = Math.floor(Idx - 1) / 2;
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[element] = parentIndex;
      idx = parentIndex;
    }
  }

  // Removing Algorithms
  // Swap the first value in the values property with the last one
  // Pop from the values property, so you can return the value at the end.
  // Have the new root "sink down" to the correct spot..
  // Your parent index starts at 0(the root)
  // find the index of the left child:2 * index + 1 (make sure its not out of bounds)
  // find the index of the right child:2 * index + 2 (make sure its not out of bounds)
  // if the left or right child is greater than the element...swap. if both left and right children are larger, swap with the largest child.
  // The child index you swapped to now becomes the new parent index
  // Keep looping and swapping until neither child is larger than the element
  // eturn the old root.

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChild < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
