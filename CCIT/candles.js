
/**
 * get the highest number from the array using Math.max
 * initializa a count value to 0
 * initialize a max value 
 * @param {*} candles 
 */
function birthdayCakeCandles(candles) {
  // Write your code here

  let max = Math.max(...candles);
  console.log(max)
  let value =  candles.filter((val => val == max))
 return value.length

}

console.log( birthdayCakeCandles([3,3,4,6,7,9,9]))