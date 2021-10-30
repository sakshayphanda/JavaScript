/**
 * Selection Sorting
 *
 * COMPLEXITY : O(n^2)
 *
 * Find the minimum element in an array and swap it with the first element
 * Now 0th index has the lowest value
 * there will be 2 loops i and j . j will always be one ahead of i
 * only good when we want to reduce the swaps
 */

const swap = require('./swap');

function selectionSort(arr) {
	let low;
	for (let i = 0; i < arr.length; i++) {
		low = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[low] > arr[j]) low = j;
		}
		if (arr[i] !== low) swap(arr, i, low);
	}
	return arr;
}

console.log(selectionSort([2, 4, 5, 1, -2, 8, 3]));
