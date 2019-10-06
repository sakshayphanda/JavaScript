/**
 * Selection Sorting
 * 
 * Find the minimum element in an array and swap it with the first element
 * Now 0th index has the lowest value
 * 
 */


    let arr = [2,4,5,1, -2, 8,3];
    let temp;

 for(i = 0; i < arr.length; i++) {
    minIndex = i;

     for( j = i + 1; j< arr.length; j++) {
        if(arr[minIndex] > arr[j] ) {
            minIndex = j;
        }
     }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
 }


 console.log(arr);