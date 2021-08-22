function diffArray(arr1, arr2) {
  var newArr = [];
  var result = [];
  for (let char of arr1) {
    newArr.push(char);
  }
  for (let char of arr2) {
    if (!newArr.includes(char)) {
      result.push(char);
    }
  }
  return result;
  // return arr1.concat(arr2).filter((item) => !arr1.includes(item) | !arr2.includes(item));
}

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function destroyer(arr) {
  let values = Array.from(arguments).slice(1);
  console.log(values);
  // return arr;
  return arr.filter((ele) => !values.includes(ele));

  var valsToRemove = Array.from(arguments).slice(1);
  //   console.log(valsToRemove);
  //   return arr.filter(function (val) {
  //     return !valsToRemove.includes(val);
  //   });
}
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function whatIsInAName(collection, source) {
  var key = collection.filter((item) => item);
  console.log(key);
  // get the key of the sceond paramter
  // filter the collection array
  // loop over the source array
  // search for every object in the collection area that hasownproperty of the source key
  var src = Object.keys(source);
  return collection.filter(function (obj) {
    return src.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// console.log(
//   whatIsInAName(
//     [
//       { first: 'Romeo', last: 'Montague' },
//       { first: 'Mercutio', last: null },
//       { first: 'Tybalt', last: 'Capulet' },
//     ],
//     { last: 'Capulet' }
//   )
// );

function spinalCase(str) {
  return str.split(' ').join('-').toLowerCase();
}

// console.log(spinalCase('This Is Spinal Tap'));

//Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

function inArray(arr1, arr2) {
  // const check = arr1.concat(arr2);
  return arr1.filter((item) => arr2.includes(item)).sort();
  // console.log(check);
}
// console.log(inArray(['arp', 'live', 'strong','bull'], ['tarp', 'mice', 'bull']));

//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  let arg = num.toString();
  if (arg.length === 1) {
    return 0;
  }
  var result = arg.split('').reduce((a, c) => a * c, 1);
  console.log(result);
  return 1 + persistence(result);
  // console.log(result);
}

// console.log(persistence(999), persistence(39), persistence(4));
// 3*9 = 27, 2*7 =14

function urlSlug(title) {
  return title.toLowerCase().split('/st/ ').join('-');
}

// console.log(urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone'));

// console.log(urlSlug('Hold The Door'));

function add(x, y, z) {
  // Only change code below this line
  // return function (y) {
  //   return function (z) {
  //     return x + y + z;
  //   };
  // };
  return x + y + z;
  // Only change code above this line
}

// var current = add.bind(this, 20, 30);
// console.log(current(10));

function add(x) {
  // Only change code below this line
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };

  // Only change code above this line
}
// console.log(add(10)(20)(30));
