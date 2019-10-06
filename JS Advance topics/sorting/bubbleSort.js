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

for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
        if(arr[i]> arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}


console.log(arr);