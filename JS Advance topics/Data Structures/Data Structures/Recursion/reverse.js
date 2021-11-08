function reverse(str) {
	//1. base condition
	let newArr = [];
	if (!str) return str;
	const arr = str.toString().split('');
	newArr.push(arr[arr.length - 1]); // ['d']
	console.log(str, arr, newArr, arr.length - 1);
	newArr = newArr.concat(reverse(arr.slice(0, arr.length - 1).join('')));
	return newArr.join('');
}

// reverse('abcd') --> ['d'].concat(['c'].concat(['b'].concat(['a'])));

// console.log(reverse('abcd'));

//  better and my own version
function reverseStr(str) {
	if (!str) return str;
	return ''.concat(
		str[str.length - 1],
		reverseStr(str.slice(0, str.length - 1))
	);
}

console.log(reverseStr('abcd'));
