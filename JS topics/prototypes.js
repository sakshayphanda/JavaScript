// Advantage - the created function is loaded only once in the memory

function Person(name) {
    this.name = name;

    // this.getName = () => {
    //     return this.name;
    // }
}


var p1 = new Person('Sakshay');

Person.prototype.getName = function() {
    return this.name;
}

console.log(p1.getName());
