/**
 * Error/ Exception Handling
 * 
 * We use try - catch to avoid the program to freeze as soon as any error or exception occurs
 */

const convertToRs = (dollar) => {
if(typeof dollar === 'number') {
 return dollar * 64;
} else {
    throw Error('Should be a number');
}
}


try {
const myValue = convertToRs('five');
console.log(myValue);
} catch(error) {
    console.log(error.message);
}


console.log('This wont run if the program freezes');
