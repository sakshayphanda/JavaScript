arr = [1, 3, 5, 3, 3, 3 , 3, 6,6 ];

function mostFrequentNumberInArray(arr) {
   // const tempArr = [...arr];
    const obj = {};
    let max = arr[0];
    arr.forEach(
        item => {
            obj[item] = obj[item] === undefined ? 0 : obj[item];

            if(item in obj) {
                obj[item] += 1;
            } 

            if(obj[item] > max ) {
                max = item;
            }
        }
     );

    // let max = Object.keys(obj)[0];
    // Object.keys(obj).forEach(
    //     key => {
    //         if(obj[key] > max ) {
    //             max = key;
    //         }
    //     }
    // );

    return max;
}



const result = mostFrequentNumberInArray(arr);
console.log(result);
// console.log(0o12 === 0XA);

// console.log(010);// 8