Function.prototype.myBind = function(newRef) {
    const callingFunctionRef = this;
    return function() {
        return callingFunctionRef.apply(newRef);
    }
}