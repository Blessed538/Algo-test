// Hash Table

var hash = (string, max) => {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

var _hash = (string, strLngth) => {
  let hash = 0;
  for (var i = 0; i < Math.min(string.length, 100); i++) {
    let char = string[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) & strLngth;
  }
  return total;
};

let HashTable = function () {
  let storage = [];
  const storageLinmit = 4;

  this.print = function () {
    console.log(storage);
  };

  this.add = function (key, value) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      var inserted = false;
      for (var i = 0; i, storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function (key) {
    var index = hash(key, storageLinmit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index]; i++) {}
    }
  };

  this.get = function (key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i, storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
};

console.log('quincy', 10);

function createPhoneNumber(numbers) {
  var format = '(xxx) xxx-xxxx';

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }

  return format;
}
