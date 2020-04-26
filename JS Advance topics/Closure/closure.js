/** CLOSURE
 * Its a function inside a function 
 * it has access to 
 * All the global variables
 * Variables inside its scope
 * Variables inside the parent function
 * 
 * innerFunction is closure that is defined inside 
 * outerFunction and has access to all variables declared and 
 * defined in the outerFunction scope. 
 * In addition, the function defined inside another function as a closure will 
 * have access to variables declared in the global namespace.
 * -----
 */
var globalVar = "abc"; 

// Parent self invoking function 
function outerFunction (outerArg) { // begin of scope outerFunction
    // Variable declared in outerFunction function scope 
    var outerFuncVar = 'x';    
    // Closure self-invoking function 
    function innerFunction (innerArg) { // begin of scope innerFunction
        // variable declared in innerFunction function scope
        var innerFuncVar = "y"; 
        console.log(          
            "outerArg = " + outerArg + "\n" +
            "outerFuncVar = " + outerFuncVar + "\n" +
            "innerArg = " + innerArg + "\n" +
            "innerFuncVar = " + innerFuncVar + "\n" +
            "globalVar = " + globalVar); 
    }// end of scope innerFunction)(5); 
    // Pass 5 as parameter 

    const inner = 5;
    return innerFunction(inner);

} // end of scope outerFunction )(7); 
// Pass 7 as parameter

const outer = 10;
// outerFunction(outer);


function closureParent (i) {    
   function closure () {
       console.log(++i);
   }

   return closure;
}

clos = closureParent(1);

clos();
clos();
clos();