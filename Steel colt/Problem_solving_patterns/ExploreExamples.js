// How to understand the problem:
// Restate the problem in your own words
// what are the inputs that go into the problem? i.e: ints? string? floats?
// What are the outputs that should come from the solution to the problem? ints? floats?
// Can the outputs be determined from the inputs? Do i have enough info to solve the problems.

// Explore Examples
// Start with Simple Examples
// Progress to More Complex Examples
// Explore Examples with Empty inputs
// Explore Examples with Invalid Inputs

// Break It Down

//output of this question should like this{h:1,e:1, o:1}
//create an object that will hold the frequency of the chars and will be returned at the end of the function.
//loop over the str.
//if the user does not input any value return null.
//if the char is a key in object, add one to count
//if the char is not in object, add it and set value to 1

function stringCount(str) {
  let count = {};
  for (let char of str.toLowerCase()) {
    // count[char] = ++count[char] || 1;
    if (count[char] > 0) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
}
