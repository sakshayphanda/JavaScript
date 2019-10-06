/**
 * QUICK SORT
 * 
 * Divide and Conquer Algorithm
 * 
 * its a recursive alogrithm
 *   
 * First, select an element as a PIVOT element (any random index)
 * choose a variable which is pointing to the first element 
 * choose another variable which is pointing to the last element
 * 
 * Item to the left of pivot are smaller than the PIvot and items to the right are larger.
 * 
*/


let arr = [2, 4, 5, 1, 0];
let temp;
let lb = 0;
let ub = arr.length - 1;


function swapping(a, b, arr) {
    let temp;
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function quickSorting(arr, lb, ub) {
    if (lb < ub) {
        let location = partitioning(arr, lb, ub);
        quickSorting(arr, lb, location - 1);
        quickSorting(arr, location + 1, ub);
    }
}


function partitioning(arr, lb, ub) {
    let start = lb;
    let end = ub;
    let pivot = arr[lb];
    if (start < end) {
        while (pivot >= arr[start]) {
            start++;
        }
        while (pivot < arr[end]) {
            end--;
        }
        swapping(start, end, arr);
    } else {
        swapping(lb, end, arr);
    }

    return end;

}

quickSorting(arr, lb, ub);

console.log(arr);