/**
 * Prototype
 * It it used to add a propery to an existing object/function
 Advantage - the created function is loaded only once in the memory
*/
function Person(name) {
    this.name = name;

    // this.getName = () => {
    //     return this.name;
    // }
}
Person.prototype.getName = function() {
    return this.name;
}


var p1 = new Person('Sakshay');

console.log(p1.getName());
