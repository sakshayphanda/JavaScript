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
