class Employee {
    constructor(name, age, salaryPerHour, hours) {
        this.name = name;
        this.age = age;
        this.salaryPerHour = salaryPerHour;
        this.hours= hours;
    }
    getSalary() {
        console.log(`${this.name}, ${this.age} лет, зарплата: ${this.salaryPerHour*this.hours} руб/день`);
    }
}

const firstEmp = new Employee('Гена', 25, 200, 8);
firstEmp.getSalary();