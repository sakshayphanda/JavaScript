class Person {
    public name ='sakshay';
}
class Manager extends Person{

}

class Admin extends Manager{

}

class Random {

}


const a = new Admin();
const m = new Manager();

function echoGeneric<T extends Person>(arg: T): T {
    const name = arg.name;
    return arg;
}

let temp4 = echoGeneric(a);//temp2 is of type string
let temp5 = echoGeneric(m); // temp3 is of type number