/**
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
 * 
 * Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
find the max area by multiplying length * width(7 *)
 */
 

const values = [1,8,6,2,5,4,8,3,7];

// function findArea(height) {
// 	let maxArea = 0;
// 	for (let i = 0; i < height.length; i++) {
// 		for (let j = i + 1; j < height.length; j++) {
// 			const heig = Math.min(height[i], height[j]);
// 			const width = j - i;
// 			const area = heig * width;
// 		  maxArea = Math.max(maxArea, area);
// 		}
// 	}
// 	return maxArea;
// }

function findArea(heights) {
	let maxArea = 0;
  let p1 =0;
  p2= heights.length -1
  while(p1 < p2){
     let height =  Math.min(heights[p1],heights[p2]);
     let width = p2 -p1;
     const area =  height * width;
     maxArea =  Math.max(maxArea, area)
     if(heights[p1] < heights[p2]){
       p1++
     } else {
       p2--
     }
  }
	
	return maxArea;
}

console.log(findArea(values))