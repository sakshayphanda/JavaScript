function * generatorFunction() {
	// Line 1
	//   console.log('This will be executed first.');
	yield 'Hello, '; // Line 2
	// console.log('I will be printed after the pause');
	yield 'World!';
}
const generatorObject = generatorFunction(); // Line 3
// console.log(JSON.stringify(generatorObject)); // Line 4

// console.log(generatorObject.next()); // Line 4
// console.log(generatorObject.next()); // Line 5
// console.log(generatorObject.next()); // Line 6

for (obj of generatorObject) {
	console.log(obj);
}
