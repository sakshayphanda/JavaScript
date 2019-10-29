//test commit

// Mostly used Array Methods

/**
 * SHIFT : To delete the first element 
 * UNSHIFT : To insert something at the start of the array
 * PUSH
 * POP
 * CONCAT
 * LENGTH
 * INCLUDES
 * SPLICE: Delete an element at a particular index, replace a particular index or add a particular element at a particular index
 */

// SPLICE
const array = ['one', 'two', 'three', 'four'];
//'Deletes a particular index'
 array.splice(2,1);
// console.log(array);

//'Replaces a particular index with a new value'
 array.splice(2,1, 'Replaced Value');
 //console.log(array);

 // Adds a new Value to an index
 array.splice(2, 0, 'New value');
 //console.log(array);


/**
 * Looping through arrays 
 * array.map() // to modify an existing array 
 * array.forEach() // to iterate through all the elements of an array
 * array.filter() // returns a new array of elements which satisfies the condition
 * array.every() //returns true if alll the elements in an array satisfies the condtion
 * array.some() //returns true if any one element satisfies the condition
 * array.find() // returns first element if any element in an array satisfies the condition
 * array.reduce() // returns the sum of all the elements of an array
 */

 let arr = [1,2,3, 4, 6];

 arr.forEach(
     (element, index, array)=> {
        // console.log(element, index, array);

         /**
          * OUTPUT
          * 1 0 [ 1, 2, 3, 4, 6 ]
            2 1 [ 1, 2, 3, 4, 6 ]
            3 2 [ 1, 2, 3, 4, 6 ]
            4 3 [ 1, 2, 3, 4, 6 ]
            6 4 [ 1, 2, 3, 4, 6 ]
          */
     }
 );


arr = arr.map((element) => {
     return element + 'Mapped';
 });

 // Filter returns an element if the condition is true otherwise it just skips that element
 arr2 = arr.filter((element) => {
    if(element === '1Mapped'){
        return true;
    }
});


//arr.every returns a boolean based on the condition,
// if every element of an array matches the condtion it returns true else false;
var passed = [12, 5, 8, 130, 44]

passed = passed.every(element => {
    return (element >= 5);
});

  

 console.log(arr, arr2, passed);



 