/**
 * Selection Sorting
 * 
 * Find the minimum element in an array and swap it with the first element
 * Now 0th index has the lowest value
 * 
 */


    let arr = [2,4,5,1, -2, 8,3];
    let temp;


    for(let i = 0; i < arr.length; i++) {
        minIndex = i;
        for(let j = i + 1; j <  arr.length; j++) {
         //   console.log(arr[j]);
            if(arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
       // console.log(minIndex, ': ' , arr[minIndex]);
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    console.log(arr);
