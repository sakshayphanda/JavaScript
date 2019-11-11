// let getDataFromDB = new Promise(function(resolve, reject) {
//     let a = true;
//     if(a) {
//         resolve('Success');
//     } else {
//         reject('Error');
//     }
// });


// getDataFromDB.then((message) => {
//     console.log(message, ' then');
// }).catch((message)=> {
//     console.log(message, ' catch');

// })


// Nested Promises

const A = () => {
    return new Promise((resolve, reject) => {
        resolve('A => ');
    })
}

const B = (result) => {
    return new Promise((resolve, reject) => {
        resolve(result + 'B => ');
    })
}

const C = (result) => {
    return new Promise((resolve, reject) => {
        const state = false;
        if (state) {
            resolve(result + 'C => PASS');
        } else {
            reject(result + 'C => ERROR');
        }
    })
}

//Method 1

A().then((message) => {
    return B(message);
}).then((message) => {
    return C(message)
}).then((finalMessage) => {
    console.log(finalMessage)
}).catch((err) => {
    console.log(err);
});


//Method 2

async function result() {
    try {
        const responseA = await A();
        const responseB = await B(responseA);
        const responseC = await C(responseB);
        console.log(responseC);
    } catch (error) {
        console.log(error);
    }
}

result();