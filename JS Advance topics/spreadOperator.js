/**
 * SPREAD OPERATOR
 * It allows Iterables such as arrays to spread to places
 */

 let arr1 = [1,2,4,5];

 console.log(...arr1);

/*
 * We can also assign values to an existing array using spread operator
 */

let arr2 = ['a', 'b', ...arr1, 'c', 'd'];
console.log(arr2);