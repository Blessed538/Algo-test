function strReverse(str) {
	let reversed = '';

	for (let character of str) {
		console.log(character, reversed);
		reversed = character + reversed;
	}
	return reversed;
}

// console.log(strReverse('tomatoes'))

function getTarget(arr, target) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				return [ i+1, j+1 ];
			}
		}
	}
}

console.log(getTarget([ 2, 7, 11, 15 ], 9));
