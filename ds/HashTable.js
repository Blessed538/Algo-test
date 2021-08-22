function hash(key, arraylen) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arraylen;
  }
  return total;
}  

// Refactored

function hash(key, arraylen) {
  let total = 0;
  let WEIRD_PRIME = 3;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arraylen;
  }
  return total;
}

// Separate chaining and linear probing.
// With separate chaining, at each index in our array we store values using a more sophisticated data structure(e.g an array or a linked list). It help store multiple key-value pairs at the same position. Separate chaining is mostly used.

// With linear probing, when we find a collision, we search through the array to find the next empty slot and if there is any, we insert the key and value there.

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // Set
  // Accepts a key and a value
  // Hashes the key
  //Stores the key-value pair in the hash table array via separate chaining
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  // get
  // Accepts a key
  // Hashes the key
  // Retrives the key-value pair in the hash table
  // If the key isn't found, returns undefined.
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
      return undefined;
    }
  }
  // Loops through the hash table array and retirns an array of keys in the table
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; i++) {
          if (!keysArr.includes(this.keyMap[i][j][1])) {
            keysArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return keysArr;
  }

  // Loops through the hash table array and returns an array of values in the table.
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; i++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}
