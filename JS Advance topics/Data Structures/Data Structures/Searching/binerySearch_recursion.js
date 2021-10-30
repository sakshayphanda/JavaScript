/**
 * Expects a sorting array using recursion
 * @param {*} sArr
 * @param elem
 */
function binarySearch(sArr, elem) {
	const mid = Math.round((sArr.length - 1) / 2);
	if (elem === sArr[mid]) return mid;
	if (sArr.length === 1) return sArr[0] === elem ? 0 : -1;
	if (elem > sArr[mid]) {
		const val = binarySearch(sArr.slice(mid), elem);
		return val === -1 ? val : val + mid;
	}
	if (elem < sArr[mid]) return binarySearch(sArr.slice(0, mid), elem);
}

const result = binarySearch([1, 2, 3], 3);
console.log('value is at index ==> ', result === -1 ? 'Not Found' : result);
