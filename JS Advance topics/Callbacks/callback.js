/**
 * CALLBACK
 * When we are passing a function as a function parameter that is known as a callback function
 * The function defination of a callback is implemented at the time of function execution.
 */
function onClick(callback) {
	const str = 'Button is clicked';

	if (typeof callback === 'function') {
		setTimeout(() => callback(str), 2000);
	}
}

// let clickFunction = (str) => {
//     console.log(str);
// };

onClick((str) => {
	console.log(str);
});
