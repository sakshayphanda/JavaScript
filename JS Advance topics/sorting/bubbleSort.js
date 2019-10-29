/**
 * BUBBLE SORT
 * 
 * Its a way of implementing sorting of an array
 * 
 * COMPLEXITY : O(n^2)
 * 
 * In this , we compare the first two indexes and swap with the second one is smaller than the first one.
 * Then we, check the second and third and do the same if the third one is smaller than the first one.
 */

let arr = [2, 4, 5, 1, -2, 8, 3];
let temp;
let maxArrIndex = arr.length - 1;

for (let i = 0; i < maxArrIndex; i++) {
    for (let j = 0; j < maxArrIndex - i; j++) {
        // To sort in descending order, change > to < in this line.
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);