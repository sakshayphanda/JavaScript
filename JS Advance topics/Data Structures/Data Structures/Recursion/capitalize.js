function capitalizeFirst(arr) {
	// add whatever parameters you deem necessary - good luck!
	let newArr = [];
	if (!arr.length) return arr;
	let str = arr[0];
	str = str[0].toUpperCase() + str.slice(1);
	newArr.push(str);
	return newArr.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']


/**
 * other solution
 * 
 * function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}
 */