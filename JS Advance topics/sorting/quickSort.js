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

let arr = [5, 3, 7, 6, 2, 9];
let lb = 0;
let ub = arr.length - 1;

function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function partition(arr, lb, ub) {
    var pivot = arr[lb];
    start = lb, 
    end = ub;
    while (start <= end) {
        while (arr[start] < pivot) {
            start++;
        }
        while (arr[end] > pivot) {
            end--;
        }
        if (start <= end) {
            swap(arr, start, end);
            start++;
            end--;
        }
    }
    return start;
}

function quickSort(arr, lb, ub) {
    let location;
    if (arr.length > 1) {
        location = partition(arr, lb, ub); //location returned from partition
        if (lb < location - 1) { //more elements on the left side of the pivot
            quickSort(arr, lb, location - 1);
        }
        if (location < ub) { //more elements on the right side of the pivot
            quickSort(arr, location, ub);
        }
    }
    return arr;
}
var sortedArray = quickSort(arr, lb, ub);
console.log(sortedArray); //prints [2,3,5,6,7,9]