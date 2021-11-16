class Employee {
    #name;
    #age;
    #salaryPerHour;
    #hours;

    //Доступ к имени
    get name() {
        return this.#name;
    }
    set name(value) {
        if (value.length < 5) {
            console.log('Имя слишком короткое, должно быть более 4 символов');
        }
        this.#name = value;
    }
    //Доступ к возрасту
    get age() {
        return this.#age;
    }

    set age(value) {
        if (value < 18) {
            console.log('Вы ещё слишком молоды');
        }
        this.#age = value;
    }
    //Доступ к зарплате
    get salaryPerHour() {
        return this.#salaryPerHour;
    }
    set salaryPerHour(value) {
        if (value>400) {
            console.log('Слишком высокая оплата в час');
        }
        this.#salaryPerHour = value;
    }
    //Доступ к кол-ву рабочих часов в день
    get hours() {
        return this.#hours;
    }
    set hours(value) {
        if (value<8) {
            console.log('Это вакансия на полный день, не менее 8 часов');
        }
        this.#hours = value;
    }
}
let firstEmp = new Employee();
//Имя
firstEmp.name = 'Оля';
console.log("Имя:",firstEmp.name);
//Возраст
firstEmp.age = 15;
console.log("Возраст:",firstEmp.age);
//Зарплата в час
firstEmp.salaryPerHour = 1000;
console.log("Желаемая зарплата в час:", firstEmp.salaryPerHour);
//Кол-во рабочих часов в день
firstEmp.hours = 4;
console.log("Количество возможных часов работы в день:",firstEmp.hours);




