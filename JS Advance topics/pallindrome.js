/**
 * Pallindrome 
 * When a string is reversed , it produces the same string as the original
 * Eg: exe
 */

 function pallindromeOfAString(str) {
  let temp = '';
  
  temp = str.split().reverse().join();
  console.log(temp);
 }

 const isPallindrome = pallindromeOfAString('exe');

 console.log(isPallindrome);
 