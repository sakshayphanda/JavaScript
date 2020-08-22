class Calculator<T> {
	items: T[];
	constructor(private a: T) {
		this.a = a;
	}

	push(val: T): T[] {
		this.items.push();
		return this.items;
	}
}

const calc = new Calculator(5);
const calcString = new Calculator<string>('5');

console.log(calc.push(10));
console.log(calcString.push('15'));
