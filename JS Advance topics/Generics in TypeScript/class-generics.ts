class Person {
    public name ='sakshay';
}
class Manager extends Person{

}

class Admin extends Person{

}

class Random {

}


const a = new Admin();
const m = new Manager();
const r = new Random();

function echoGeneric2<T extends Person>(arg: T): T {
    const name = arg.name;
    return arg;
}

let temp4 = echoGeneric2(a);//temp2 is of type string
let temp5 = echoGeneric2(m); // temp3 is of type number
let temp6 = echoGeneric2(r); //error because it doesnt extend Person class
