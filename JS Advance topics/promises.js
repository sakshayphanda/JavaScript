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
    return new Promise((resolve, reject)=> {
        resolve('A => ');
    })
}

const B = (result) => {
    return new Promise((resolve, reject)=> {
        resolve(result + 'B => ');
    })
}

const C = (result) => {
    return new Promise((resolve, reject)=> {
        resolve(result + 'C => ');
    })
}

//Method 1

A().then((message) => { 
    return B(message);
}).then((message) => {
    return C(message)
}).then((finalMessage) => {
    console.log(finalMessage + 'End')
})


//Method 2

async function result() {
    const responseA =  await A();
    if(responseA){
        const responseB = await B(responseA);
        if(responseB){
            const responseC = await C(responseB);
            if(responseC)
            console.log(responseC);
        }
    }
}

result();