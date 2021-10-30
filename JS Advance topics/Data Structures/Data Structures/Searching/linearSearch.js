function linearSearch(arr, val){
    
    for(i=0; i< arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
  // add whatever parameters you deem necessary - good luck!
}

console.log(linearSearch([1,5,7,4,3,45], 45));