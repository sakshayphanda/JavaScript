function factorial(num){
    if(num === 0 || num === 1) {
        return num;
    }
    let result = 1;
    for(let i = num; i > 0; i--) {
        result = result * i;
        console.log(result)
    }

    return result;
}

factorial(5); // 4 + 3 + 2 + 1 = 10; 

                  
             