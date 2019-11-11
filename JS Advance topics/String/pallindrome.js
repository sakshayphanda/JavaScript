/**
 * Pallindrome 
 * When a string is reversed , it produces the same string as the original
 * Eg: exe
 */

function pallindromeOfAString(str) {
    let temp = [];
    let tempString = '';
    
    //METHOD 1
    temp = str.split('').reverse().join('');
    //   console.log(temp, str);

    //METHOD 2
    for(let i =0; i< str.length; i ++) {
        temp.unshift(str.charAt(i));
    }

    tempString = temp.join('');

    if (tempString === str) {
        return true;
    } else {
        return false;
    }
}

const isPallindrome = pallindromeOfAString('exxxeew');

console.log(isPallindrome);
