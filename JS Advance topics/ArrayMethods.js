



// Mostly used Array Methods

/**
 * SHIFT : To delete the first element 
 * UNSHIFT : To insert something at the start of the array
 * PUSH
 * POP
 * CONCAT
 * LENGTH
 * 
 * SPLICE: Delete an element at a particular index, replace a particular index or add a particular element at a particular index
 */

// SPLICE
const array = ['one', 'two', 'three', 'four'];
//'Deletes a particular index'
 array.splice(2,1);
 console.log(array);

//'Replaces a particular index with a new value'
 array.splice(2,1, 'Replaced Value');
 console.log(array);

 // Adds a new Value to an index
 array.splice(2, 0, 'New value');
 console.log(array);

