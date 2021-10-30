/**
 * Insertion Sorting
 *
 * There is no swap involved.
 * We need to insert the small value to the correct place by traversing to the left
 * For less than 10 values. Its the default sorting algo used in Array.sort() method in js by Chrome browser V8 Engine
 */

function insertionSort(arr) {
    let count = 0;
	for (let i = 1; i < arr.length; i++) {
        const el = arr[i];
        let newIndex = i;
		for (let j = i-1; j >= 0 && arr[j] > el; j--) {
            count++;
            console.log(count);
			if (el < arr[j]) { 
                newIndex = j; 
                arr[j+1]=arr[j]; 
            }
        }
        if (arr[i] !== newIndex) arr[newIndex] = el;
	}
	return arr;
}

console.log(insertionSort([1, 2, 4, 5, 6, -2]));
