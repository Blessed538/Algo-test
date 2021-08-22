// Sorting is the process of rearranging the items in acollection(e.g an array) so that the items are in some kind of order.
//  Sorting numbers from samllest to largest
// sorting names alphabetically
// sorting movies based on release

function numberCompare(num1, num2) {
  return num1 - num2;
  // if it returns a negative value num1 comes first before num2 and vice versa.
}

[6, 4, 15, 18].sort(numberCompare);

function compareAlpha(str1, str2) {
  return str2.length - str1.length;
}

['house', 'colt', 'steele', 'Algorithm'].sort(compareAlpha);
