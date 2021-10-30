/**
 * Expects a sorting array using loop
 * @param {*} sArr
 * @param elem
 * Complexity -> Big(O) --> O(log(n))
 */
function binarySearch(sArr, elem) {
	let start = 0,
		end = sArr.length - 1,
		mid = Math.round((start + end) / 2);
	while (sArr[mid] !== elem && start < end) {
		if (elem < sArr[mid]) end = mid - 1;
		else start = mid;
		mid = Math.round((start + end) / 2);
	}
	return sArr[mid] === elem ? mid : -1;
}

const result = binarySearch([1, 2, 3, 4], 4);
console.log('value is at index ==> ', result === -1 ? 'Not Found' : result);
