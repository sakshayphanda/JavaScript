let arr = [4, 5, 2, 4, 2, 3];
let initialValue = 0;

Array.prototype.myReduce = function(callbackFunction, initialValue) {
    let accumulator = 0;
    if(initialValue) {
        accumulator = initialValue
    } 
    for(let i =0; i< this.length; i++) {
    accumulator = callbackFunction(accumulator, this[i], i, this);
    }

    return accumulator;
}


const result = arr.myReduce((accumulator, currentValue, index, array) => {
    return accumulator + currentValue;
}, initialValue);

console.log(result);