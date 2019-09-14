arr = [1, 3, 5, 6, 3, 6 , 6, 6,6 ];

function mostFrequentNumberInArray(arr) {
   // const tempArr = [...arr];
    const obj = {};
    arr.forEach(
        item => {
            obj[item] = 0;
        }
    );

    arr.forEach(
        item => {
            if(item in obj) {
                obj[item] += 1;
            } 
        }
     );

   // console.log(obj);

    let max = Object.keys(obj)[0];
    Object.keys(obj).forEach(
        key => {
            if(obj[key] > max ) {
                max = key;
            }
        }
    );

    return max;
}



const result = mostFrequentNumberInArray(arr);
console.log(result);
// console.log(0o12 === 0XA);

console.log(013);// 8