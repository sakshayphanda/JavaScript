// Higher-order functions are functions that accept a function as an argument or return a function. Often, they are used to add to the functionality of a function.
const withLog = (fn) => {  
	return (...args) => {  
		console.log(`calling ${fn.name}`);  
		return fn(...args);  
	};  
};
// In the above example, we create a withLog higher-order function that takes a function and returns a function that logs a message before the wrapped function runs.
const add = (a, b) => a + b;  
const subtract = (a, b) => a - b;  
const addWithLogging = withLog(subtract);  
console.log(addWithLogging(3, 4));  
// calling add
// 7
// or 
// calling subtract
// -1
// withLog HOF can be used with other functions as well and it works without any conflicts or writing extra code. This is the beauty of a HOF.