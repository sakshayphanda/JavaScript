// AKA —> the execution context
// 'use strict'; // to make the value of this to undefined
// console.log(this); // locally its {} on browser it will be windows{}

// function abc() {
//     // this === global // true
//     // console.log(this); // global obj if 'use strict' else undefined
//     console.log(this === globalThis); // true if not strict else false
//     console.log(this);
// }

// abc();

for (var i = 0; i < 5; i++) { 
    setTimeout(function () { 
        console.log(i) 
    }, i * 1000) };

const arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
arr1.push(5);

var x = 21; // variable declared with var can be redeclared
var girl = function () { 
    console.log(x); // undefined since x is redeclared using var. 
    // (concept of hoisting occurs here)
    //var is defined to 20 after this line.
    var x = 20; 
    console.log(x); // 20 since x is redeclared using var. 

};

girl();



const obj = {
    name: 'sakshay',
    method: function () {
        console.log(this.name);
    }
}

obj.method.call({
    name: 'Phanda'
});