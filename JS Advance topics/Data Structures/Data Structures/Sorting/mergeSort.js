
/**
 * O(n log n)
 * O(log n) for number of decompositions
 * O(n) comparisons as per decompositions (like when we merge arrays)
 * resultant is O(nlog n))
 * if length of arr is less than or eq to 1 return arr;
 * else take mid and divide arr into 2 halves.
 * we take 2 variables. Left and right.
 * left ==> 1st half (it would call the mergeSort recursive)
 * right ==> 2nd half (it would call the mergeSort recursive)
 * it will be recursive this untill length of arr matches the base condition.
 * once you get sorted left and right
 * merge both arrays.
 * @param  arr takes an array 
 * @returns sorted array
 */
function mergeSort(arr) {
	if(arr.length <= 1 ){
		return arr; // return the arr if the length is less than or eq to 1
	}
	let n = Math.floor(arr.length/2); // 3
	let left = mergeSort(arr.slice(0, n)); // 56
	/**
	 * [56,4,5]
	 * 	left = mS([56])       right = mS([4,5])
	 * 							left = mS([4]) right = mS([5])
	 * 							mergeArray 
	 * 	left = [56]				Sorted ==> [4, 5]	
	 * mergeArray([56], [4,5])
	 * ==> [4, 5, 56]
	 * 
	 */
	let right = mergeSort(arr.slice(n)); // left = mS([3,2]) right = mS([5,10])
	/**
	 * [3,2,5,10]
	 * left = mS([3,2]) right = mS([5, 10])
	 * 	left = [3] right = [2] --- left = mS([5]) right = mS([10])
	 * 	mergeArray				   mergeArray 
	 * 	sortedLeft = [2, 3]		   SortedRight ==> [5, 10]	
	 * mergeArray([2,3], [5, 10])
	 * ==> [2, 3, 5, 10]
	 * 
	 */
	return mergeArray(left, right);
}

console.log('Sorted Array', mergeSort([56,4,5,3,2,5,10]));


// requires 2 sorted array.

function mergeArrayUnoptimised(arr1, arr2) {
	// O(n^2)
	let mergedArray = [];
	for (let i = 0; i < arr1.length; i++)
		for (let j = i; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				mergedArray.push(arr1[i]);
				mergedArray.push(arr2[j]);
				break;
			}
			if (arr1[i] < arr2[j]) {
				mergedArray.push(arr1[i]); // [1,1,2, 3,4,5˜]
				break;
			}
			mergedArray.push(arr2[j]);
		}
	return mergedArray;
}

function myMergeArray(arr1, arr2) {
	let mergedArray = [];
	let j = 0;
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] === arr2[j]) {
			mergedArray.push(arr1[i]);
			mergedArray.push(arr2[j]);
			j++;
			continue;
		}

		if (arr1[i] < arr2[j]) {
			mergedArray.push(arr1[i]);
			if (i === arr1.length - 1) {
				mergedArray = [...mergedArray, ...arr2.slice(j)];
				break;
			}
			continue;
		}
		mergedArray.push(arr2[j]);
		if (j === arr2.length - 1) {
			mergedArray = [...mergedArray, ...arr1.slice(i)];
			break;
		}
		i--; // if the arr2[j] < arr1[i] , we need to start the i loop for that value again
		j++;
	}
	return mergedArray;
}

function mergeArray(arr1, arr2) {
    // Time complexity --> O(3n) ==> O(n)
	let mergedArray = [];
	let i =0, j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] === arr2[j]) {
			mergedArray.push(arr1[i]);
			mergedArray.push(arr2[j]);
			j++;
            i++;
			continue;
		}

		if (arr1[i] < arr2[j]) {
			mergedArray.push(arr1[i]);
			i++;
            continue;
		}
		mergedArray.push(arr2[j]);
		j++;
	}

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
	return mergedArray;
}
// console.log('merged array ==>', mergeArray([1, 3, 5, 7, 10, 23, 56], [1, 2, 4, 6, 8]));

