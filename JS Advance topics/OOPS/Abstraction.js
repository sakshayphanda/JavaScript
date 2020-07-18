function Employee(name, age, salary) {
    const monthlyBonus = 1000;
    const calculateBaseSalary = () => {
        return salary+ monthlyBonus;
    }
    this.getEmployeeDetails = () => {
        console.log('Hey your base salary is', calculateBaseSalary());
    }
}


let emp = new Employee('sakshay', 25, 33 );

emp.getEmployeeDetails();
// emp.calculateBaseSalary(); // emp.calculateBaseSalary is not a function (because we used const i.e block scoped)