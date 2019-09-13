function test (callback) {
    const str = 'abc';

    if (typeof callback === "function") {
    callback(str);

    }
}

test((str) => {
    console.log(str);
});