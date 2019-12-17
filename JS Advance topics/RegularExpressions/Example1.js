/**
 * Regular Expression
 * 
 * 2 ways of declaring it
 * 
 * 1. New RegExp()
 * 2. /..../
 * 
 * 
 * ^ means starts with
 * $ means ends with
 * \1 means it should be the same value as the first
 */


function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    const re = /^([aeiou]).*\1$/;
    /*
     * Do not remove the return statement
     */
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}


main();