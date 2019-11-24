/**
 ***Memoization***
 *  is basically caching the previous result. 
 * It increases the optimization by reducing the time taken to execute a program
 */


function fibonacci(n, previousValues = []) {

    if(previousValues[n] != null) {
        return previousValues[n];
    }
    // console.log('n:', n);

    let result;
    if(n<=2) {
        result = 1;
    } 
    else {
       // console.log(fibonacci(n-1) + fibonacci(n-2));
        result = fibonacci(n-1, previousValues) + fibonacci(n-2, previousValues);

        //fib(4)
        // fib(3) + fib(2)        
        // (fib(2) + fib(1)) + 1
        // 1 + 1 + 1 = 3


    }

    previousValues[n] = result;
    console.log(n+': ' , previousValues[n]);
  //  console.log(previousValues);

    return result;

}

console.log(fibonacci(5));

// 0 1 2 3 4 6 6 7  8  9  10
// 0 1 1 2 3 5 8 13 21 34 55