function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return arr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    /**
     *     newArr = newArr.concat(newArr.concat(collectOddValues([2,3,4,5])));
     */
    return newArr;
}

console.log(collectOddValues([1,2,3,4,5]));
                                        
                                                                
                                                                             
                            
            