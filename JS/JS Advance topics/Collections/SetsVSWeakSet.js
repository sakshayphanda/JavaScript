// SET vs WEAKSET

let obj = {a: 1};

const set = new Set();
const weakSet = new WeakSet();
set.add(obj);
weakSet.add(obj);
console.log(set, weakSet.has(obj));

obj = null;

console.log(set, weakSet.has(obj));

