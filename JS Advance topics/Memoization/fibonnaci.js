/**
 ***Memoization***
 *  is basically caching the previous result. 
 * It increases the optimization by reducing the time taken to execute a program
 */


function fibonacci(n, previousValues = [], type) { // 5 , []
   // console.log(type, '-', 'n:', n, previousValues[n]);
    // if(previousValues[n] != undefined) {
    //     return previousValues[n];
    // }

    let result;
    if(n<=2) {
        result = 1;
    } 
    else {
        result = fibonacci(n-1, previousValues, 'II') + fibonacci(n-2, previousValues, 'III');
    }

    previousValues[n] = result;
    console.log(n+': ' , previousValues[n]);
    return result;

}

fibonacci(10, [], 'I');

// 0 1 2 3 4 6 6 7  8  9  10
// 0 1 1 2 3 5 8 13 21 34 55