// const bar = (n) => {
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log(j);
//     }
//   }
//   for (let k = 0; k < 1000; k++) {
//     console.log(k);
//   }
// };

// the complexity will be 0(3*n + 1000) which is simplified to 0(n), where n is the input number

// Analyzing code with many helper functions
// const boom = (n) => {
//   for (let i = 0; i < 3; i++) {
//     bam(n);
//     // 0(3 * n)
//   }
//   for (let k = 0; k < 1000; k++) {
//     console.log(k);
//   }
// };

// const bam = (m) => {
//   for (let j = 0; j < m; j++) {
//     console.log(j);
//   }
// };

// boom(10);

//  Big 0 // 0(N)

//write a function, unique that takes in an array and return unique elements.

// function unique(array) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const ele = array[i];
//     if (!newArray.includes(ele)) {
//       newArray.push(ele);
//     }
//   }
//   return newArray;
// }

// const unique = (array) => {
//   const onlyUniques = new Set();

//   for (let i = 0; i < array.length; i++) {
//     const ele = array[i];
//     onlyUniques.add(ele);
//   }

//   return Array.from(onlyUniques);
// };

// function usingSet(array) {
//   return [...new Set(array)];
// }

// function filtering(array) {
//   const unique = array.filter(
//     (value, index, categories) => categories.indexOf(value) === index
//   );
// }

// non-nested for loops are N+N

//CONSTANT-0(1) the number of steps does not depend on the input size.

// const foo = (n) => {
//   const result = 0;
//   for (let i = 0; i < 5; i++) {
//     // it's 0(1) before the iteration is constant, i will run for five times.
//     result += n;
//   }
//   return result;
// };

// const bar = (array) => {
//   return array[0] * array[array.length - 1];
// };
// bar([3, 6, 5, 7]);

// Logarithmic  -0(log(n))
// the number of steps can be expressed as logarithm on the input size. if(2^5 = 32), then log2(32) = 5

const fun = (n) => {
  while (n > 1) {
    console.log(n);
    n /= 2;
  }
  // console.log('done');
};
// log(n)

// const bar = (str) => {
//   if (str.length <= 1) return;
//   const midIdx = Math.floor(str.length / 2);
//   bar(str.slice(0, midIdx));
// };

// 0(n*log(n))

function findUniq(arr) {
  let first = arr[0];

  for (var i = 1; i < arr.length; i++) {
    // if (arr[i] !== arr[0]) {
    first ^= arr[i];
    // }
  }

  return first;
}
// console.log(findUniq([3, 10, 3, 3, 3]));

// create an empty array to store the numbers
// loop over the array
// create an empty object
function array(arr) {
  let str = arr.split(' ').join('');

  let result = [];

  let object = {};

  for (var i = 0; i < str.length; i++) {
    var store = str[i];
    object[store] = object[store] || 0 + 1;
    // console.log(object);
  }
  for (var obj in object) {
    // console.log(obj);
  }
}

// array('10, 23, 45, 67, 89, 56');

// function doBadThing(arr) {
//   let num = arr.join('');
//   let output = {};
//   for (let i = 0; i < num.length; i++) {
//     if (output[num[i]]) continue;
//     else output[num[i]] = [1, i];
//     for (let j = i + 1; j < num.length; j++) {
//       if (num[i] == num[j]) {
//         console.log(num[i] ,num[j])
//         output[num[i]].push(j);
//         console.log(output);
//         output[num[i]][0] = output[num[i]][0] + 1;
//       }
//     }
//   }
//   return output;
// }

function solve(array) {
  var str = array.join('');

  array = str.split('');

  var obj = {};
  for (var i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      var go = obj[array[i]].push(i);
      console.log(go);
    } else {
      obj[array[i]] = [i];
    }
  }

  for (var i of Object.keys(obj)) {
    // console.log(i);
    obj[i].unshift(obj[i].length);
  }

  // console.log(obj);
  return obj;
}

solve([10, 12, 8, 22, 16, 445, , 35, 37563, 17]);
