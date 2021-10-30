// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callback){
    /**
     * 1. handle  base conditions
     * 2. Check if the first element in array validates the callback condition
     * 3. return recursive function by slicing the first element of array.
     */
    if(!arr.length) return false;
    if(callback(arr[0])) return true;
    return someRecursive(arr.slice(1), callback);    
  }

  const isOdd = val => val % 2 !== 0;
  console.log(someRecursive([2,1], isOdd));