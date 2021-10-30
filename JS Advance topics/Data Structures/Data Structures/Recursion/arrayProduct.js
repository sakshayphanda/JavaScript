// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function outerFunction(arr) {
	let firstTime = true;
	function productOfArray(arr) {
		if (!arr.length) {
			return firstTime ? undefined : 1;
		}
		firstTime = false;
		return arr[0] * productOfArray(arr.splice(1));
	}
	return productOfArray(arr);
}

console.log(outerFunction([1,2,5]));
