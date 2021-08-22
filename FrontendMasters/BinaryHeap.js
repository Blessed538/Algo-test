class Binaryheap{
  constructor(value){
    this.values = [];
  }
  insert(value){
  
    this.values.push(value);
    this.bubbleUp();
  }
  bubbleUp(){
    let idx =  this.values.length -1;
    let element =  this.values[idx];
    while(idx > 0){
      let parentIdx =  Math.floor(idx - 1) /2;
      let parent =  this.values[parentIdx];
      if(element <= parent) break;
      this.values[idx] =  parent;
      this.values[parentIdx] =  element;
      idx = parentIdx;
    }
  }
  extract(){
    var first = values[0];
    let end =  this.values.length - 1;
    this.values[0] =  this.values[this.values.length - 1];
    end = first;
    this.values.pop();
    this.sinkDown();
  }

  sinkDown(){
    var idx =  0;
    let element =  this.values[0];
    let length =  this.values.length;
    while(true){
    let leftChildIdx =  2 * idx + 1;
    let rightChildIdx =  2 * idx + 2;
    let rightChild, leftChild;
    var smallest =  null;
    if(rightChildIdx < length){
      rightChild =  this.values[rightChildIdx];
      if(rightChild > element){
        smallest = rightChild;
      }
  
    }
    if(leftChildIdx < length ){
      leftChild =  this.values[leftChildIdx];
      if((smallest === null && leftChild > element) || (smallest !== null && leftChild > rightChild)) {
        smallest = leftChild;
      }
  
    }
     if(smallest  === null)  break;
    }
    
  }
}

var BH =  new Binaryheap();
console.log(BH.insert(4));
