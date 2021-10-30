/**
 * QUICK SORT
 * 
 * Divide and Conquer Algorithm
 * 
 * 
 * complexity: O(n log(n))
 * 
 * 
 * its a recursive alogrithm
 * First, select an element as a PIVOT element (any random index)
 * choose a variable which is pointing to the first element 
 * choose another variable which is pointing to the last element
 * Item to the left of pivot are smaller than the PIvot and items to the right are larger.
 * 
 * Here are the steps to perform Quick sort that is being shown with an example [5,3,7,6,2,9].

 * STEP 1: Determine pivot as middle element. So, 7 is the pivot element.
 * STEP 2: Start left and right pointers as first and last elements of the array respectively.
 * So, left pointer is pointing to 5 at index 0 and right pointer is pointing to 9 at index 5.
 * STEP 3: Compare element at the left pointer with the pivot element. 
 * Since, 5 < 6 shift left pointer to the right to index 1.
 * STEP 4: Now, still 3 <6 so shift left pointer to one more index to the right. 
 * So now 7 > 6 stop incrementing the left pointer and now left pointer is at index 2.
 * STEP 5: Now, compare value at the right pointer with the pivot element. 
 * Since 9 > 6 move the right pointer to the left. Now as 2 < 6 stop moving the right pointer.
 * STEP 6: Swap both values present at left and right pointers with each other.
 * STEP 7: Move both pointers one more step.
 * STEP 8: Since 6 = 6, move pointers to one more step and stop 
 * as left pointer crosses the right pointer and return the index of the left pointer.
 * 
*/

const swap = require('./swap');

function myQuickSort(arr, start = 0, end = arr.length) {
	if (start < end) {
        const swapIndex = pivot(arr, start, end);
		myQuickSort(arr, start, swapIndex);
		myQuickSort(arr, swapIndex+ 1, end);
	}
	return arr;
}

function pivot(arr, start = 0, end = arr.length) {
	const pivotElement = arr[start];
	let counter = 0;

	for (let i = 1; i < end; i++) {
		if (arr[i] <= pivotElement) {
			counter++;
			swap(arr, i, counter);
		}
	}
	swap(arr, start, counter);
	return counter;
}

console.log(myQuickSort([6, 5, 2, 1, 10, 5, -8, 3]));
