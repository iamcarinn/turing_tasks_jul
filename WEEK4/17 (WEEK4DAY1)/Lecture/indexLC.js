class MyClass {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    set name(value) {
        if (value.length < 5) {
            console.log('Name is too short')
        } else {
            this._name = value
        }
    }

    get name() {
        return this._name
    }

    showDate() {
        console.log(`Data: ${this.name}, ${this.age}`)
    }
}

const myClassObject = new MyClass('John', 25);
const myClassObject1 = new MyClass('Dmitriy', 27);
const myClassObject2 = new MyClass('Kate', 30);
const myClassObject3 = new MyClass('Soffi', 23);
const myClassObject4 = new MyClass('Petr', 18);

myClassObject.showDate();
myClassObject1.showDate();
myClassObject2.showDate();
myClassObject3.showDate();
myClassObject4.showDate();

console.log('class type', typeof MyClass);
alert(MyClass);