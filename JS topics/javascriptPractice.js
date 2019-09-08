
// template literals using tilde(`)

const language = 'javascript';
console.log(`Hey this is the use of ${language} template literals`);


// Map vs WeakMap

/**
  * Weakmap garbage collects as soon as the object is dereferenced or null
  * Map Keeps the value even if the object is dereferenced
*/

const map = new Map();
const weakMap = new WeakMap();

let tempObject1 = {'name': 'Sakshay'};
let tempObject2 = {'name': 'Phanda'};
 
map.set(tempObject1, 'sakshayy');
weakMap.set(tempObject2, 'Phandaa');

console.log('***********Objects are referenced*********');
console.log('MAP: ', map);
console.log('WEAKMAP: ', weakMap.get(tempObject2));


tempObject2 = null;
tempObject1 = null;


console.log('*************Objects are de-referenced********');
console.log('MAP: ', map);
console.log('WEAKMAP: ', weakMap.get(tempObject2));


// Mostly used Array Methods

/**
 * SHIFT : To delete the first element 
 * UNSHIFT : To insert something at the start of the array
 * PUSH
 * POP
 * CONCAT
 * LENGTH
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


// Coercion
// Its when js predicts things on its own 
console.log(5 - '5'); // both considered as numbers
console.log(5 + '5'); // both considered as strings
// {} // true
// [] // true
// '' // false


//false = 0
//true = 1