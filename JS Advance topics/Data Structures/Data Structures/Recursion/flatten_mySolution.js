function flatten(arr) {
	let newArr = [];
	if (!arr.length) return arr;
	if (arr.length === 1 && !(Array.isArray(arr[0]))) return arr;
	if (arr.length === 1 && Array.isArray(arr[0])) return flatten(arr[0]);
	if (Array.isArray(arr[0])) newArr = newArr.concat(flatten(arr[0]));
	else newArr.push(arr[0]);
	return newArr.concat(flatten(arr.slice(1)));
}

console.log(flatten([1, [2, 3], [2, 4, 5]]));

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
