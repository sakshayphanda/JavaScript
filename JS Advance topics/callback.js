function onClick (callback) {
    const str = 'Button is clicked';

    if (typeof callback === "function") {
    callback(str);
    }
}


let clickFunction = (str) => {
    console.log(str);
};

onClick(clickFunction)

