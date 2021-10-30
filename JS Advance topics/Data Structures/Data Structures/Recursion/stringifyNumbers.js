function stringifyNumbers(obj) {
    let newobj = {};
    Object.keys(obj).forEach(
        k => {
            if (typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
                newobj[k] = stringifyNumbers(obj[k]);
            } else if(typeof obj[k] === 'number') {
                newobj[k] = obj[k].toString();
            } else {
                newobj[k] = obj[k];
            }
        });
        
        return newobj;
}



let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringifyNumbers(obj));
/*


/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/