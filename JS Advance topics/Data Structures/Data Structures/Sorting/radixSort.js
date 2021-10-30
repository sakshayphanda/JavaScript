/**
 * Radix sorting
 */

function getDigitMethod1(number, digit) {
    let numToString = '' + number;
    return numToString.charAt((numToString.length - 1) - digit);
}

function getDigitMethod2(number, digit) {
    const temp = Math.floor(number/10);
    return temp % 10;
}

function radixSort(arr) {
    return getDigitMethod2(arr[0], 1);
    for (let i = 0; i < arr.length; i++) {
        // getDigit(arr[i], i);
    }
}


console.log(radixSort([12,3,2323,4336,1078,349,1371]));