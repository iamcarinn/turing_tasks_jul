class Employee {
    constructor(name, age, salaryPerHour, hours) {
        this.name = name;
        this.age = age;
        this.salaryPerHour = salaryPerHour;
        this.hours= hours;
    }
}
class AccountingEmployee extends Employee {
    work() {
        console.log('Рабочий приступил к выполнению обязанностей');
    }
}

let newEmp = new AccountingEmployee('Фёдор', 31, 300, 8);
newEmp.work();
console.log(newEmp);

const firstEmp = new Employee('Гена', 25, 200, 8);