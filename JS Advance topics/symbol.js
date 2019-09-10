// Symbol

/**
 * to generate a unique value 
 * can be used in objects to create a unique uid
 */

const symbol = Symbol();
const symbol2 = Symbol();

console.log(symbol2 === symbol);


// to create a global symbol we use symbol. for 
const symbol3 = Symbol.for('a');
const symbol4 = Symbol.for('a');


console.log(symbol3 === symbol4);
