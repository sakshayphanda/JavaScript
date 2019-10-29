let arr = [4, 5, 2, 4, 2, 3];

Array.prototype.myMap = function (func) {
    let newArray = [];
    if (typeof func === 'function') {
        for (let i = 0; i < this.length; i++) {
            let newItem = func(this[i], i, this);
            newArray.push(newItem);
        }
    }
    return newArray;
}


arr = arr.myMap((item) => {
    return item*2;
});


console.log(arr);