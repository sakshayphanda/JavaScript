function nestedEvenSum (obj) {
    let sum = 0;
    Object.values(obj).forEach(
        v => {
            if(typeof v === 'object') {
                sum = sum + nestedEvenSum(v);
            } else if(typeof v === 'number' && v % 2 === 0) {
                sum = sum + v;
            }
        });
        
        return sum;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj2)); // 6
// nestedEvenSum(obj2); // 10