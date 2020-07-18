function echo(arg): string {
    return arg;
}

let temp = echo('Sakshay');

function echoGeneric<T>(arg: T): T {
    return arg;
}

let temp2 = echoGeneric('Sakshay');//temp2 is of type string
let temp3 = echoGeneric(1); // temp3 is of type number