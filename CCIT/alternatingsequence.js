/**
 * 
 * Longest alternating subsequence
Medium Accuracy: 65.27% Submissions: 7118 Points: 4

A sequence {x1, x2, .. xn} is alternating sequence if its elements satisfy one of the following relations :
x1 < x2 > x3 < x4 > x5..... or  x1 >x2 < x3 > x4 < x5.....
Your task is to find the longest such sequence.
[1 < 17, > 5, < 10 > 8]

Example 1:

Input: nums = [1,5,4]
Output: 3
Explanation: The entire sequenece is a 
alternating sequence.

Examplae 2:

Input: nums = [1,17,5,10,13,15,10,5,16,8]
Output: 4
Explanation: There are several subsequences
that achieve this length. 
One is  [1,17,5,10]


Your Task:
You don't need to read or print anyhting. Your task is to complete the function AlternatingaMaxLength() which takes the sequence  nums as input parameter and returns the maximum length of alternating sequence.

Expected Time Complexity: O(n)
Expected Space Complexity: O(1)
 */

function AlternatingaMaxLength(values,n){
  let count = 1;
  let result = 1
 
  for (let i = 1; i < n; i++){
    console.log(arr[i], arr[i - 1])
      if(arr[i] > arr[i -1]){
        count = result + 1
          } else if(arr[i] < arr[i -1]){
              result =  count + 1
          }
        }
        return Math.max(count, result);
}
let arr = [1,17,5,10,13,15,10,5,16,8]
let n = arr.length;

console.log(AlternatingaMaxLength(arr,n))