let arr = [4, 5, 2, 4, 2, 3];

Array.prototype.myFilter = function (func) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        let state = func(this[i], i, this);
        if (state) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

arr = arr.myFilter((item) => {
    if (item < 1) {
        return true;
    }
});


console.log(arr);