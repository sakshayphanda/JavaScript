let arr = [4, 5, 2, 4, 2, 3];

Array.prototype.myForEach = function (func) {
    if (typeof func === 'function') {
        for (let i = 0; i < this.length; i++) {
            func(this[i], i, this);
        }
    }
}

arr.myForEach((item, i, arr) => {
    console.log(item, i, arr);
})