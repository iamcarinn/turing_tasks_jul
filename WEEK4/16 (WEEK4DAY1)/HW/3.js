class Validation {
    constructor(n) {
        this.n = n;
    }

    set n(value) {
        if (value%2 === 0) {
            console.log('Вы ввели четное число');
        }
        if (value % 1 === 0) {
            console.log('Вы ввели целое число');
        } else if (value % 1 !== 0) {
            console.log('Вы ввели число с плавающей запятой');
        }
        if (value<0) {
            console.log(`Вы ввели отрицательное число ${value}`);
        } else if (value>0) {
            console.log(`Вы ввели положительное число ${value}`);
        }
    }
    }

    number=new Validation(-10);