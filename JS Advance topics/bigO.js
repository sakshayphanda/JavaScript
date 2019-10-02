/**
 * Type of bigO notations
 * 
 * O(1) - constant
 * O(log(n)) - logarithmic - Binary Search
 * O(n) - linear - Linear Search
 * O(n^2) - quadratic - Selection sort,
 * O(2^n) - exponential
 */


 /** CONSTANT O(1) examples
  * Find an even or odd number
  * Remove last item from an array 
  * Append an item to an array*/

  const number = 10;

  if ((number % 2) === 0) {
     // console.log('The number is even');
  } else {
     // console.log('The number is odd');
  }

/**Linear Examples 
 * Where the input size decides the performance
 * 
 * Upper case a string of n characters
 * Copy an array
 * Insert an item at the middle of an array
 * Remove an item from an array 
 * Remove duplicates from an array
 */


let array = [1, 3 ,3 ,3, 1, 1, 2];
const obj = {};

// Method 1
// array = array.filter(
//     item => {
//         if(obj[item] === undefined) {
//         obj[item] = 1;
//         return true;
//     }
// }
// );


// console.log('Method1', array.sort(), obj);

//Method 2 

let set = new Set(array);

array = [...set];


console.log('Method2', array);


