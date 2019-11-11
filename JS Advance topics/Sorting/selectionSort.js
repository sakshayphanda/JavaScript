/**
 * Selection Sorting
 * 
 * COMPLEXITY : O(n^2)
 * 
 * Find the minimum element in an array and swap it with the first element
 * Now 0th index has the lowest value
 * there will be 2 loops i and j . j will always be one ahead of i
 */


let arr = [2, 4, 5, 1, -2, 8, 3];
let minIndex;

function swap(arr, i, minIndex) {
    let temp;
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}

for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[minIndex] > arr[j]) {
            minIndex = j;
        }
    }
    if (arr[i] > arr[minIndex]) {
        swap(arr, i, minIndex);
    }
}

console.log(arr);
