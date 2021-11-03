const swap = require('./swap');
/**
 * BUBBLE SORT
 *
 * Its a way of implementing sorting of an array
 *
 * COMPLEXITY : O(n^2)
 *
 * In this, 
 * we compare the first two indexes and swap with the second one is smaller than the first one.
 * Then we, check the second and third and do the same if the third one is smaller than the first one.
 *
 * it makes sure that the largest element is at the last at the end of every loop.
 */


// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr) {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
		}
	}
	return arr;
}

// Optimized BubbleSort with noSwaps . Complexity O(n) for almost sorted array.
function bubbleSortOptimised(arr) {
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1); 
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
}

console.log(bubbleSortOptimised([8, 1, 2, 3, 4, 5, 6, 7]));
