const person1 = {
    name: 'Karina',
    age: 23,
    logInfo: function (){
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
    }
}

const person2 = {
    name: 'Olga',
    age: 18
}

person1.logInfo()
person1.logInfo.call(person2)